/* ============================================================
   v4 · Thư viện từ vựng theo chủ đề, Mục tiêu học tập (0 → C1 và
   lộ trình y khoa), Kiểm tra đầu vào, Đồng bộ thiết bị (GitHub Gist),
   thanh công cụ nhanh, giao diện nhiều màu hơn.
   Nạp SAU app-views2.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.0"; APP.build = "30.9.26";

/* ---------------- Library parsing ---------------- */
const slugify = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const LIB = [...LIB_GEN.map(t => ({ ...t, track: "gen", group: "gen" })), ...LIB_MED.map(t => ({ ...t, track: "med" }))];
const LIB_BY = {}, LIB_WORD = {};
LIB.forEach(t => {
  t.words = []; const seen = new Set();
  for (const lv of Object.keys(t.levels)) for (const line of t.levels[lv].split("\n")) {
    const p = line.split("|").map(x => x.trim()); if (!p[0]) continue;
    let sl = slugify(p[0]); while (seen.has(sl)) sl += "-x"; seen.add(sl);
    const w = { key: `${t.id}:${sl}`, w: p[0], pos: p[1] || "", vi: p[2] || "", ex: p[3] || "", lvl: lv, topic: t };
    t.words.push(w); LIB_WORD[w.key] = w;
  }
  LIB_BY[t.id] = t;
});
const LIB_COUNT = Object.keys(LIB_WORD).length;
const GEN_LEVELS = ["A1", "A2", "B1", "B2", "C1"], MED_LEVELS = ["T1", "T2"];
const lvName = l => ({ T1: "Nền tảng", T2: "Mở rộng" })[l] || l;
const CEFR = [
  ["A0", "Khởi đầu", "Chưa biết hoặc biết rất ít tiếng Anh."],
  ["A1", "A1 Sơ cấp", "Hiểu và dùng câu rất đơn giản về bản thân, gia đình và nhu cầu trước mắt."],
  ["A2", "A2 Sơ trung cấp", "Giao tiếp việc quen thuộc: mua sắm, chỉ đường, công việc và sinh hoạt hằng ngày."],
  ["B1", "B1 Trung cấp", "Xoay xở hầu hết tình huống khi đi lại, kể trải nghiệm, nêu lý do cho ý kiến của mình."],
  ["B2", "B2 Trung cao cấp", "Hiểu ý chính của văn bản phức tạp, trao đổi trôi chảy và tự nhiên với người bản xứ."],
  ["C1", "C1 Cao cấp", "Dùng tiếng Anh linh hoạt, chính xác cho học thuật và nghề nghiệp, kể cả trong y khoa."]
];
const CEFR_IDS = CEFR.map(c => c[0]);
const STAGES = [
  ["anatomy", "Giải phẫu", "Tên cấu trúc cơ thể, vùng và thuật ngữ định hướng."],
  ["physiology", "Sinh lý", "Cơ thể hoạt động thế nào: tuần hoàn, hô hấp, chuyển hóa, miễn dịch."],
  ["pathology", "Bệnh học", "Viêm, nhiễm trùng, u, và tên các bệnh thường gặp."],
  ["clinical", "Lâm sàng", "Triệu chứng, thăm khám, điều trị và giao tiếp với bệnh nhân."]
];
const STAGE_IDS = STAGES.map(s => s[0]);

/* ---------------- Device & state extensions ---------------- */
const DEV_KEY = "tnkhoi_device", SYNC_KEY = "tnkhoi_sync_v1";
const DEV = (() => { let d = null; try { d = localStorage.getItem(DEV_KEY); if (!d) { d = "d" + Math.random().toString(36).slice(2, 8); localStorage.setItem(DEV_KEY, d); } } catch { d = "d-local"; } return d; })();
function v4Defaults(s) {
  s.v = 4; s.known = s.known || {}; s.intake = s.intake || {}; s.settingsAt = s.settingsAt || 0; s.updatedAt = s.updatedAt || 0;
  s.goals = s.goals || sanGoals({}); if (!s.time.byDev) s.time.byDev = {};
  return s;
}
function sanGoals(g) {
  g = g && typeof g === "object" ? g : {}; const gen = g.gen || {}, med = g.med || {}; const okDate = d => (/^\d{4}-\d{2}-\d{2}$/.test(d || "") ? d : "");
  return {
    gen: { level: CEFR_IDS.includes(gen.level) ? gen.level : "A0", target: ["A2", "B1", "B2", "C1"].includes(gen.target) ? gen.target : "C1", date: okDate(gen.date) },
    med: { stage: STAGE_IDS.includes(med.stage) ? med.stage : "anatomy", date: okDate(med.date) },
    newPerDay: clamp(Math.round(num(g.newPerDay, 10)), 3, 40), setAt: num(g.setAt, 0),
    placed: g.placed && typeof g.placed === "object" ? { at: num(g.placed.at), level: CEFR_IDS.includes(g.placed.level) ? g.placed.level : "A0" } : null
  };
}
function recomputeTime(s) {
  const days = {}; for (const dd of Object.values(s.time.byDev)) for (const [d, v] of Object.entries(dd)) days[d] = (days[d] || 0) + v;
  s.time.days = days; s.time.total = s.time.legacy + Object.values(days).reduce((a, b) => a + b, 0);
}
const _fresh = fresh; fresh = () => v4Defaults(_fresh());
const _sanitize = sanitize;
sanitize = function (raw) {
  const s = v4Defaults(_sanitize(raw)); if (!raw || typeof raw !== "object") return s;
  if (raw.known && typeof raw.known === "object") for (const [k, v] of Object.entries(raw.known)) if (LIB_WORD[k]) s.known[k] = num(v, 1);
  if (raw.cards && typeof raw.cards === "object") for (const [id, c] of Object.entries(raw.cards)) {
    const m = /^V:([a-z0-9-]+):([a-z0-9-]+):[rp]$/.exec(id); if (!m || !c || !LIB_WORD[m[1] + ":" + m[2]]) continue;
    s.cards[id] = { state: ["new", "learning", "review", "relearning"].includes(c.state) ? c.state : "new", due: num(c.due, Date.now()), s: Math.max(0, num(c.s, 0)), d: clamp(num(c.d, 5), 1, 10), reps: Math.max(0, Math.round(num(c.reps))), lapses: Math.max(0, Math.round(num(c.lapses))), last: num(c.last, 0), step: Math.round(num(c.step)) };
  }
  if (raw.intake && typeof raw.intake === "object") Object.entries(raw.intake).filter(([d]) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().slice(-90).forEach(([d, v]) => { s.intake[d] = { gen: Math.max(0, Math.round(num(v && v.gen))), med: Math.max(0, Math.round(num(v && v.med))) }; });
  s.goals = sanGoals(raw.goals); s.settingsAt = num(raw.settingsAt, 0); s.updatedAt = num(raw.updatedAt, 0);
  const bd = raw.time && raw.time.byDev;
  if (bd && typeof bd === "object") for (const [dev, days] of Object.entries(bd)) { if (!/^[\w-]{1,24}$/.test(dev) || !days || typeof days !== "object") continue; s.time.byDev[dev] = {}; for (const [d, v] of Object.entries(days)) if (/^\d{4}-\d{2}-\d{2}$/.test(d)) s.time.byDev[dev][d] = Math.max(0, Math.round(num(v))); }
  if (!Object.keys(s.time.byDev).length && Object.keys(s.time.days).length) s.time.byDev["pre-" + DEV] = { ...s.time.days };
  recomputeTime(s);
  return s;
};
S = load();
addSeconds = function (n) { const k = dayKey(), bd = S.time.byDev, d = bd[DEV] || (bd[DEV] = {}); d[k] = (d[k] || 0) + n; S.time.days[k] = (S.time.days[k] || 0) + n; S.time.total += n; touch(); };
const _touch = touch; touch = () => { _touch(); SYNC.pending = true; };

/* ---------------- Library cards in the review engine ---------------- */
const _cardInfo = cardInfo;
cardInfo = function (id) {
  if (!id.startsWith("V:")) return _cardInfo(id);
  const [, tid, sl, dir] = id.split(":"); const w = LIB_WORD[tid + ":" + sl]; if (!w) return null;
  return { id, dir, lw: w, l: { id: tid, track: w.topic.track, title: w.topic.title, lib: true }, w: { w: w.w, pos: w.pos, vi: w.vi, ex: w.ex, exvi: "", syl: [w.w], st: 0, us: "", uk: "" } };
};
function wStatus(w) {
  const c = S.cards[`V:${w.key}:p`] || S.cards[`V:${w.key}:r`];
  if (c) return c.state === "review" ? (c.s >= 21 ? "mature" : "review") : "learning";
  return S.known[w.key] ? "known" : "new";
}
const isLearned = w => wStatus(w) !== "new";
function coverage2(ws) { const d = ws.filter(isLearned).length; return { d, n: ws.length, p: ws.length ? d / ws.length : 0 }; }
function bumpIntake(track) { const k = dayKey(); const x = S.intake[k] || (S.intake[k] = { gen: 0, med: 0 }); x[track]++; }
function todayIntake() { const x = S.intake[dayKey()] || { gen: 0, med: 0 }; return x.gen + x.med; }
function addWordCards(w, count = true) {
  let n = 0; ["r", "p"].forEach((d, k) => { const id = `V:${w.key}:${d}`; if (!S.cards[id]) { S.cards[id] = { state: "new", due: Date.now() + k * 1000, s: 0, d: 5, reps: 0, lapses: 0, last: 0, step: 0 }; n++; } });
  if (n && count && !S.known[w.key]) bumpIntake(w.topic.track); touch(); return n;
}
function markKnown(w) { if (!S.known[w.key] && !isLearned(w)) bumpIntake(w.topic.track); S.known[w.key] = Date.now(); touch(); }

/* ---------------- Icons ---------------- */
Object.assign(ICONS, {
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 20a2 2 0 0 0 2 2h13v-4"/><path d="M9 7h6"/>',
  wave: '<path d="M3 12h2l2-6 3 12 3-9 2 5 2-2h4"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-6M21 20H3"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
  gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'
});
const NAV4 = [
  ["Học", [["today", "Hôm nay", "home", "#e0773a"], ["goals", "Mục tiêu", "target", "#d9486b"], ["path", "Lộ trình", "path", "#3158d4"], ["review", "Ôn tập", "cards", "#7a63d6"], ["clinic", "Phòng khám ảo", "steth", "#0a8f78"]]],
  ["Từ vựng", [["library", "Thư viện từ vựng", "book", "#c9862c"], ["words", "Từ của tôi", "bookmark", "#0f8c8c"], ["sounds", "Phát âm", "wave", "#2f8fd8"]]],
  ["Của bạn", [["progress", "Tiến bộ", "chart", "#3c9a4f"], ["sync", "Đồng bộ thiết bị", "cloud", "#4a67d8"], ["settings", "Cài đặt", "gear", "#607d8b"], ["about", "Góc tác giả", "user", "#8a6a4c"]]]
];

/* ---------------- Toolbar & shell ---------------- */
const RATES = [0.75, 0.9, 1, 1.1];
function syncTitle() { const c = syncCfg(); if (!c.token) return "Chưa bật đồng bộ thiết bị"; return { busy: "Đang đồng bộ…", ok: "Đã đồng bộ " + (c.lastSync ? new Date(c.lastSync).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) : ""), err: "Lỗi đồng bộ: " + SYNC.msg }[SYNC.status] || "Đồng bộ đang bật"; }
function rateBtn() { return `<button class="tb" data-act="tbRate" title="Tốc độ đọc, bấm để đổi" aria-label="Tốc độ đọc ${S.settings.rate} lần. Bấm để đổi">${ic("gauge", 18)}<span>${+S.settings.rate.toFixed(2)}×</span></button>`; }
function toolbar() {
  const st = S.settings, th = { system: ["auto", "theo thiết bị"], light: ["sun", "sáng"], dark: ["moon", "tối"] }[st.theme];
  const sy = syncCfg().token ? SYNC.status || "idle" : "off";
  return `<div class="toolbar" role="toolbar" aria-label="Công cụ nhanh">
    <button class="tb acc-tog" data-act="tbAccent" title="Đổi giọng Anh-Mỹ / Anh-Anh" aria-label="Giọng ${st.accent === "uk" ? "Anh-Anh" : "Anh-Mỹ"}. Bấm để đổi"><span class="${st.accent === "us" ? "on" : ""}">US</span><span class="${st.accent === "uk" ? "on" : ""}">UK</span></button>
    ${rateBtn()}
    <button class="tb" data-act="tbTheme" title="Giao diện ${th[1]}, bấm để đổi" aria-label="Giao diện ${th[1]}. Bấm để đổi">${ic(th[0], 18)}</button>
    <a class="tb sync-dot s-${sy}" href="#/sync" title="${esc(syncTitle())}" aria-label="${esc(syncTitle())}">${ic("cloud", 18)}<i></i></a>
    <span id="timer" class="timer-pill" aria-live="off"></span></div>`;
}
shell = function (content) {
  const due = dueList().length, cur = ROUTE.name;
  const nav = NAV4.map(([g, items]) => `<div class="nav-group">${g}</div>` + items.map(([id, label, icon, col]) => `<a href="#/${id}" style="--ni:${col}" ${cur === id ? 'aria-current="page"' : ""}><span class="ni">${ic(icon, 17)}</span><span class="nl">${label}</span>${id === "review" && due ? `<span class="badge" aria-label="${due} thẻ đến hạn">${due}</span>` : ""}</a>`).join("")).join("");
  const bottom = [["today", "Hôm nay", "home"], ["path", "Lộ trình", "path"], ["library", "Thư viện", "book"], ["review", "Ôn tập", "cards"], ["more", "Thêm", "more"]];
  const moreIds = ["more", "goals", "clinic", "sounds", "words", "progress", "settings", "about", "sync"];
  return `<div class="shell">
    <aside class="side"><a class="brand" href="#/today"><span class="brand-mark" aria-hidden="true">Tk</span><span class="brand-name">Tnkhoi English<small>Thông dụng và Y khoa</small></span></a>
      <nav class="nav" aria-label="Điều hướng chính">${nav}</nav>
      <div class="side-foot">Phiên bản ${APP.version} (${APP.build})<br>Xây dựng bởi ${APP.author}<br>${APP.credit}</div></aside>
    <div class="main"><header class="topbar"><a class="mobile-brand" href="#/today" style="color:inherit;text-decoration:none"><span class="brand-mark" aria-hidden="true">Tk</span><span class="mb-name">Tnkhoi English</span></a>${toolbar()}</header>
      <main id="page" class="page" tabindex="-1">${content}</main></div>
  </div>
  <nav class="bottom" aria-label="Điều hướng">${bottom.map(([id, l, i]) => `<a href="#/${id}" ${(cur === id || (id === "more" && moreIds.includes(cur)) || (id === "library" && cur === "library")) ? 'aria-current="page"' : ""}>${ic(i, 22)}<span>${l}</span>${id === "review" && due ? `<span class="badge">${due}</span>` : ""}</a>`).join("")}</nav>`;
};
const _focusBar = focusBar;
focusBar = (segs, label) => _focusBar(segs, label).replace('<span id="timer" class="timer-pill"></span>', rateBtn() + '<span id="timer" class="timer-pill"></span>');
const _isFocus = isFocus, _isStudy = isStudyRoute;
isFocus = () => _isFocus() || ["learn", "quiz", "placement"].includes(ROUTE.name);
isStudyRoute = () => _isStudy() || ["learn", "quiz", "placement"].includes(ROUTE.name);

/* ---------------- Goals logic ---------------- */
function genLevelWords(l) { return LIB.filter(t => t.track === "gen").flatMap(t => t.words).filter(w => w.lvl === l); }
function stageWords(st) { return LIB.filter(t => t.group === st).flatMap(t => t.words); }
function levelLessons(l) { return LESSONS.filter(x => x.track === "gen" && x.level === l); }
function genPace() {
  const g = S.goals.gen, from = Math.max(1, CEFR_IDS.indexOf(g.level)), to = CEFR_IDS.indexOf(g.target);
  const levels = CEFR_IDS.slice(from, to + 1); const left = levels.flatMap(genLevelWords).filter(w => !isLearned(w)).length;
  const days = g.date ? Math.ceil((new Date(g.date + "T12:00").getTime() - Date.now()) / DAY) : null;
  return { levels, left, days, perDay: days && days > 0 ? Math.ceil(left / days) : null };
}
function nextIntakeTopic(track) {
  if (track === "gen") {
    const start = Math.max(1, CEFR_IDS.indexOf(S.goals.gen.level)), end = CEFR_IDS.indexOf(S.goals.gen.target);
    for (const l of CEFR_IDS.slice(start, end + 1)) for (const t of LIB.filter(t => t.track === "gen")) if (t.words.some(w => w.lvl === l && !isLearned(w))) return { t, l };
    return null;
  }
  const si = STAGE_IDS.indexOf(S.goals.med.stage);
  for (const st of STAGE_IDS.slice(si).concat(STAGE_IDS.slice(0, si))) for (const l of MED_LEVELS) for (const t of LIB.filter(t => t.group === st)) if (t.words.some(w => w.lvl === l && !isLearned(w))) return { t, l };
  return null;
}
function intakeItem() {
  const left = S.goals.newPerDay - todayIntake(); if (left <= 0) return null;
  const x = S.intake[dayKey()] || { gen: 0, med: 0 };
  const order = x.gen < x.med || (x.gen === x.med && new Date().getDate() % 2 === 0) ? ["gen", "med"] : ["med", "gen"];
  for (const tr of order) { const nx = nextIntakeTopic(tr); if (nx) return { kind: "intake", track: tr, short: `học ${left} từ mới`, title: `${left} từ mới: ${nx.t.title}`, why: `Mục tiêu ${S.goals.newPerDay} từ mới mỗi ngày. Chủ đề “${nx.t.vi}”, cấp ${lvName(nx.l)}.`, href: `#/learn/${nx.t.id}`, cta: "Học từ mới", est: Math.max(3, Math.round(left * 0.5)) }; }
  return null;
}
const _plan = planToday;
planToday = function () { const items = _plan(); const it = intakeItem(); if (it) items.splice(items[0] && items[0].kind === "review" ? 1 : 0, 0, it); return items.slice(0, 4); };
function ladderHtml(compact) {
  const g = S.goals.gen, ci = CEFR_IDS.indexOf(g.level), ti = CEFR_IDS.indexOf(g.target);
  return `<div class="ladder${compact ? " sm" : ""}">${CEFR.map(([id], i) => { const c = i ? coverage2(genLevelWords(id)) : null; return `<div class="rung ${i <= ci ? "done" : ""} ${i === ci ? "cur" : ""} ${i === ti ? "tgt" : ""} ${i > ti ? "beyond" : ""}" title="${id}${c ? ": " + c.d + "/" + c.n + " từ" : ""}"><b>${id}</b>${c && !compact ? `<i style="--p:${c.p * 100}%"></i>` : ""}</div>`; }).join("")}</div>`;
}
function goalStrip() {
  const g = S.goals, pace = genPace(), ti = todayIntake();
  const stages = STAGES.map(([id, name]) => { const c = coverage2(stageWords(id)); return `<span class="stage ${id === g.med.stage ? "cur" : ""}" title="${name}: ${c.d}/${c.n}"><b>${name}</b><i style="width:${c.p * 100}%"></i></span>`; }).join("");
  return `<div class="grid2 goal-strip" style="margin-top:18px">
    <a class="panel stack goal-card track-gen" href="#/goals"><div class="row between"><h3>🎯 Phổ thông: ${g.gen.level === "A0" ? "khởi đầu" : g.gen.level} đến ${g.gen.target}</h3><span class="chip acc">${ti}/${g.newPerDay} từ hôm nay</span></div>${ladderHtml(true)}
      <p class="muted small">Còn ${pace.left} từ thư viện đến ${g.gen.target}${pace.perDay ? `, cần khoảng ${pace.perDay} từ mỗi ngày để kịp hạn` : ""}.</p></a>
    <a class="panel stack goal-card track-med" href="#/goals"><div class="row between"><h3>🩺 Y khoa cơ bản</h3><span class="chip acc">${STAGES.find(s => s[0] === g.med.stage)[1]}</span></div><div class="stages">${stages}</div>
      <p class="muted small">Giải phẫu, rồi sinh lý, bệnh học và lâm sàng. Mỗi thanh là tỉ lệ thuật ngữ đã học.</p></a></div>`;
}
const _viewToday = viewToday;
viewToday = () => { let h = _viewToday(); if (h.includes('Bắt đầu với hai bài đầu tiên')) { const it = intakeItem(); if (it) h = h.replace('</ol>', `<li class="plan-step track-${it.track}"><div><div><b>${esc(it.title)}</b> <span class="muted small">khoảng ${it.est} phút</span></div><div class="why">${esc(it.why)} Nếu đã có nền, hãy làm <a href="#/placement">kiểm tra đầu vào</a> trước.</div></div><a class="btn primary" href="${it.href}">${it.cta}</a></li></ol>`); h = h.replace('Từ mới chỉ vào hàng ôn tập sau khi bạn học xong bài.', 'Từ mới vào hàng ôn tập khi bạn học xong bài, hoặc khi bạn chọn học trong Thư viện từ vựng.'); } return h.replace('<div class="grid2" style="margin-top:18px">', goalStrip() + '<div class="grid2" style="margin-top:18px">'); };

/* ---------------- Goals page ---------------- */
function viewGoals() {
  const g = S.goals, pace = genPace();
  const genRows = CEFR.slice(1).map(([id, name, can]) => { const c = coverage2(genLevelWords(id)), ls = levelLessons(id), ld = ls.filter(l => S.lessons[l.id]?.done).length; const ci = CEFR_IDS.indexOf(g.gen.level), i = CEFR_IDS.indexOf(id);
    return `<div class="lvl-row ${i <= ci ? "reached" : ""} ${id === g.gen.target ? "target" : ""}"><span class="lv lv-${id}">${id}</span><div class="grow"><b>${name}</b>${id === g.gen.target ? ' <span class="chip acc">mục tiêu</span>' : ""}${i === ci ? ' <span class="chip good">hiện tại</span>' : ""}<p class="muted small">${can}</p>
      <div class="meter"><i style="width:${c.p * 100}%"></i></div><p class="small muted">${c.d}/${c.n} từ thư viện${ls.length ? `, ${ld}/${ls.length} bài học` : ""}</p></div><a class="btn small" href="#/library" data-act="goLevel" data-l="${id}">Xem từ ${id}</a></div>`; }).join("");
  const medRows = STAGES.map(([id, name, desc], i) => { const c = coverage2(stageWords(id)); const topics = LIB.filter(t => t.group === id);
    const extra = id === "clinical" ? `, ${LESSONS.filter(l => l.track === "med" && S.lessons[l.id]?.done).length}/${LESSONS.filter(l => l.track === "med").length} bài giao tiếp, ${Object.keys(S.cases).length}/${CASES.length} ca bệnh` : "";
    return `<div class="lvl-row ${id === g.med.stage ? "target" : ""}"><span class="lv lv-st">${i + 1}</span><div class="grow"><b>${name}</b>${id === g.med.stage ? ' <span class="chip acc">đang tập trung</span>' : ""}<p class="muted small">${desc}</p>
      <div class="meter"><i style="width:${c.p * 100}%"></i></div><p class="small muted">${c.d}/${c.n} thuật ngữ${extra}</p><div class="row" style="gap:6px;margin-top:6px">${topics.map(t => `<a class="chip tpc" style="--tc:${t.color}" href="#/library/${t.id}">${t.icon} ${esc(t.vi)}</a>`).join("")}</div></div></div>`; }).join("");
  const sel = (id, opts, v) => `<select id="${id}">${opts.map(([val, lab]) => `<option value="${val}" ${val === v ? "selected" : ""}>${lab}</option>`).join("")}</select>`;
  return `<section class="page-head"><h1>Mục tiêu học tập</h1><p class="lede">Hai mục tiêu song song: tiếng Anh phổ thông từ con số 0 đến C1, và tiếng Anh y khoa cơ bản bắt đầu từ thuật ngữ giải phẫu, sinh lý, bệnh học. Trang Hôm nay tự chia từ mới mỗi ngày theo các mục tiêu này.</p></section>
    <section class="panel stack"><h3>Thiết lập</h3>
      <div class="setting"><div><b>Trình độ phổ thông hiện tại</b><div class="s">${g.placed ? `Kiểm tra đầu vào ngày ${new Date(g.placed.at).toLocaleDateString("vi-VN")}: ${g.placed.level}.` : "Chưa làm kiểm tra đầu vào."} <a href="#/placement">Làm kiểm tra (25 câu)</a></div></div>${sel("goalLevel", CEFR.map(([id, n]) => [id, n]), g.gen.level)}</div>
      <div class="setting"><div><b>Mục tiêu phổ thông</b></div>${sel("goalTarget", [["A2", "A2"], ["B1", "B1"], ["B2", "B2"], ["C1", "C1"]], g.gen.target)}</div>
      <div class="setting"><div><b>Hạn đạt mục tiêu phổ thông</b><div class="s">Không bắt buộc. Dùng để tính số từ cần học mỗi ngày.</div></div><input type="date" id="goalDate" class="field" style="width:auto;font:inherit;padding:8px 10px" value="${g.gen.date}"></div>
      <div class="setting"><div><b>Giai đoạn y khoa đang tập trung</b></div>${sel("medStage", STAGES.map(([id, n]) => [id, n]), g.med.stage)}</div>
      <div class="setting"><div><b>Từ mới mỗi ngày</b><div class="s">Tổng cho cả hai mạch. Mỗi từ tạo 2 thẻ ôn tập.</div></div>${sel("goalNew", [5, 8, 10, 15, 20, 30].map(n => [String(n), n + " từ"]), String(g.newPerDay))}</div>
      <div class="setting"><div><b>Thời gian mỗi ngày</b></div>${sel("setGoal", [5, 10, 15, 20, 30, 45, 60].map(n => [String(n), n + " phút"]), String(S.settings.goal))}</div>
      ${pace.perDay ? `<p class="feedback ${pace.perDay <= g.newPerDay ? "ok" : "no"}">Còn ${pace.left} từ thư viện cho ${pace.levels.join(", ")} trong ${pace.days} ngày: cần khoảng <b>${pace.perDay} từ mỗi ngày</b>${pace.perDay > g.newPerDay ? `, nhiều hơn mức ${g.newPerDay} bạn đang đặt` : ", đang theo kịp"}.</p>` : ""}</section>
    <section class="panel stack track-gen" style="margin-top:14px"><div class="row between"><h2>Tiếng Anh phổ thông</h2>${ladderHtml(false)}</div>${genRows}
      <p class="muted small">Mô tả cấp độ theo tinh thần Khung tham chiếu châu Âu (CEFR). Thư viện hiện có ${LIB.filter(t => t.track === "gen").reduce((a, t) => a + t.words.length, 0)} từ lõi: đây là bộ khởi đầu có chọn lọc, chưa phải toàn bộ vốn từ của mỗi cấp. Bạn có thể thêm từ trong file content-library-gen.js.</p></section>
    <section class="panel stack track-med" style="margin-top:14px"><h2>Tiếng Anh y khoa cơ bản</h2>${medRows}</section>`;
}

/* ---------------- Library ---------------- */
const LF = { track: "all", lvl: "", q: "" };
function topicCard(t) {
  const ws = t.words.filter(w => !LF.lvl || w.lvl === LF.lvl); const c = coverage2(ws); const lv = [...new Set(t.words.map(w => w.lvl))];
  return `<a class="topic" href="#/library/${t.id}" style="--tc:${t.color}"><span class="ti" aria-hidden="true">${t.icon}</span><span class="tt"><b lang="en">${esc(t.title)}</b><span class="muted small">${esc(t.vi)}</span></span>
    <span class="meter"><i style="width:${c.p * 100}%"></i></span><span class="row between small"><span class="muted">${c.d}/${c.n} đã học</span><span class="muted">${lv.length > 1 ? lvName(lv[0]) + " đến " + lvName(lv[lv.length - 1]) : lvName(lv[0])}</span></span></a>`;
}
function wordRow(w, showTopic, hideLevel) {
  const s = wStatus(w), t = w.topic;
  const act = s === "new" ? `<button class="mini" data-act="libAdd" data-k="${w.key}" title="Thêm vào ôn tập">${ic("plus", 15)}<span>Ôn</span></button><button class="mini" data-act="libKnown" data-k="${w.key}" title="Tôi đã biết từ này">${ic("check", 15)}<span>Biết</span></button>`
    : s === "known" ? `<span class="chip">đã biết</span><button class="mini" data-act="libAdd" data-k="${w.key}" title="Vẫn thêm vào ôn tập">${ic("plus", 15)}</button>`
    : `<span class="chip ${s === "mature" ? "good" : "acc"}">${{ learning: "đang học", review: "đang củng cố", mature: "đã vững" }[s]}</span>`;
  return `<div class="lw" style="--tc:${t.color}" data-k="${w.key}"><div class="lw-main"><div class="row" style="gap:8px;row-gap:4px"><span class="lw-w" lang="en">${esc(w.w)}</span><span class="pos">${esc(w.pos)}</span>${hideLevel ? "" : `<span class="lv lv-${w.lvl}">${lvName(w.lvl)}</span>`}${showTopic ? `<span class="chip tpc" style="--tc:${t.color}">${t.icon} ${esc(t.vi)}</span>` : ""}</div>
    <div class="lw-vi">${esc(w.vi)}</div>${w.ex ? `<div class="lw-ex" lang="en">${esc(w.ex)}</div>` : ""}</div><div class="lw-act">${hear(w.w)}${act}</div></div>`;
}
function libResults() {
  const q = norm(LF.q); if (!q) return "";
  const res = LIB.filter(t => LF.track === "all" || t.track === LF.track).flatMap(t => t.words).filter(w => (!LF.lvl || w.lvl === LF.lvl) && (norm(w.w).includes(q) || w.vi.toLowerCase().includes(LF.q.trim().toLowerCase())));
  return res.length ? `<p class="muted small">${res.length} kết quả${res.length > 80 ? ", hiện 80 đầu tiên" : ""}</p><div class="lw-list" data-showtopic="1">${res.slice(0, 80).map(w => wordRow(w, true)).join("")}</div>` : `<div class="empty"><p>Không có từ nào khớp “${esc(LF.q)}”.</p></div>`;
}
function viewLibrary() {
  if (ROUTE.arg && LIB_BY[ROUTE.arg]) return viewTopic(LIB_BY[ROUTE.arg]);
  const levels = LF.track === "med" ? MED_LEVELS : LF.track === "gen" ? GEN_LEVELS : [];
  const all = coverage2(LIB.flatMap(t => t.words));
  const seg = [["all", "Tất cả"], ["gen", "Phổ thông"], ["med", "Y khoa"]].map(([id, l]) => `<button data-act="libTrack" data-t="${id}" aria-pressed="${LF.track === id}">${l}</button>`).join("");
  const gen = LIB.filter(t => t.track === "gen"), medGroups = LIB_MED_GROUPS.map(([gid, name, en, icon]) => [name, icon, LIB.filter(t => t.group === gid)]);
  const grid = ts => `<div class="topics">${ts.map(topicCard).join("")}</div>`;
  const body = LF.q ? libResults()
    : (LF.track !== "med" ? `<h2 class="sec-h">📘 Tiếng Anh phổ thông</h2>${grid(gen)}` : "") +
      (LF.track !== "gen" ? medGroups.map(([n, icon, ts]) => `<h2 class="sec-h">${icon} Y khoa: ${n}</h2>${grid(ts)}`).join("") : "");
  return `<section class="page-head"><h1>Thư viện từ vựng</h1><p class="lede">${LIB_COUNT} từ và thuật ngữ chia theo ${LIB.length} chủ đề. Bạn đã học ${all.d} từ. Bấm “Ôn” để đưa một từ vào lịch ôn tập, “Biết” nếu bạn đã chắc chắn.</p></section>
    <div class="filterbar"><div class="seg-tog" role="group" aria-label="Mạch học">${seg}</div>
      ${levels.length ? `<div class="lv-filter" role="group" aria-label="Cấp độ"><button class="lv lv-all ${!LF.lvl ? "on" : ""}" data-act="libLevel" data-l="">Mọi cấp</button>${levels.map(l => `<button class="lv lv-${l} ${LF.lvl === l ? "on" : ""}" data-act="libLevel" data-l="${l}">${lvName(l)}</button>`).join("")}</div>` : ""}
      <label class="searchbox">${ic("search", 18)}<input id="libq" type="search" placeholder="Tìm từ tiếng Anh hoặc nghĩa tiếng Việt…" value="${esc(LF.q)}" aria-label="Tìm trong thư viện"></label></div>
    <div id="libBody">${body}</div>`;
}
function viewTopic(t) {
  const c = coverage2(t.words), fresh = t.words.filter(w => wStatus(w) === "new").length;
  const levels = Object.keys(t.levels);
  return `<section class="page-head topic-head" style="--tc:${t.color}"><a class="muted small" href="#/library">Thư viện từ vựng</a>
      <div class="row" style="gap:16px;align-items:center"><span class="ti big" aria-hidden="true">${t.icon}</span><div><h1 lang="en">${esc(t.title)}</h1><p class="lede" style="margin:0">${esc(t.vi)}</p></div></div>
      <div class="meter lg"><i style="width:${c.p * 100}%"></i></div><p class="muted small">${c.d}/${c.n} từ đã học${t.track === "med" ? ". Dòng in nghiêng là định nghĩa bằng tiếng Anh đơn giản, dùng được khi giải thích cho bệnh nhân." : ""}</p>
      <div class="row">${fresh ? `<a class="btn primary" href="#/learn/${t.id}">Học từ mới (${Math.min(fresh, S.goals.newPerDay)})</a>` : ""}${c.d >= 4 ? `<a class="btn" href="#/quiz/${t.id}">Luyện nhanh 10 câu</a>` : ""}${fresh ? `<button class="btn quiet" data-act="libAddAll" data-t="${t.id}">Thêm cả chủ đề vào ôn tập</button>` : ""}</div></section>
    ${levels.map(l => `<section class="stack" style="margin-bottom:20px"><h3 class="lv-h"><span class="lv lv-${l}">${lvName(l)}</span> <span class="muted small">${t.words.filter(w => w.lvl === l).length} từ</span></h3><div class="lw-list">${t.words.filter(w => w.lvl === l).map(w => wordRow(w, false, true)).join("")}</div></section>`).join("")}`;
}

/* ---------------- Learn (daily intake) ---------------- */
let LN = null;
function startLearn(tid) { const t = LIB_BY[tid]; if (!t) return false; const n = Math.max(3, S.goals.newPerDay - todayIntake()) || 5; const words = t.words.filter(w => wStatus(w) === "new").sort((a, b) => [...GEN_LEVELS, ...MED_LEVELS].indexOf(a.lvl) - [...GEN_LEVELS, ...MED_LEVELS].indexOf(b.lvl)).slice(0, n); LN = { tid, t, words, i: 0, phase: "ask", choice: null, added: 0, known: 0 }; return true; }
function viewLearn() {
  if (!LN || LN.tid !== ROUTE.arg) { if (!startLearn(ROUTE.arg)) return `<div class="focus-page"><p>Không tìm thấy chủ đề.</p></div>`; }
  const t = LN.t, cls = `track-${t.track}`;
  if (LN.i >= LN.words.length) return `<div class="${cls}">${focusBar(null, t.title)}<div class="focus-page"><article class="step-card"><span class="step-kind">${t.icon} Xong phần từ mới</span><h1>${LN.words.length ? `${LN.added + LN.known} từ` : "Chủ đề này không còn từ mới"}</h1>
    ${LN.words.length ? `<p class="lede">${LN.added} từ vào hàng ôn tập, ${LN.known} từ đánh dấu đã biết. Hôm nay bạn đã nạp ${todayIntake()}/${S.goals.newPerDay} từ mới.</p>` : ""}
    <div class="row">${LN.added ? `<a class="btn primary" href="#/review/go">Ôn ngay</a>` : ""}<a class="btn" href="#/library/${t.id}">Về chủ đề</a><a class="btn quiet" href="#/today">Về Hôm nay</a></div></article></div></div>`;
  const w = LN.words[LN.i], rev = LN.phase === "reveal";
  return `<div class="${cls}" style="--tc:${t.color}">${focusBar({ n: LN.words.length, i: LN.i }, t.title)}<div class="focus-page"><article class="step-card learn-card">
    <div class="row between"><span class="chip tpc" style="--tc:${t.color}">${t.icon} ${esc(t.vi)}</span><span class="lv lv-${w.lvl}">${lvName(w.lvl)}</span></div>
    <div class="row between" style="align-items:flex-start"><div class="specimen"><div class="spec-word sm" lang="en">${esc(w.w)}</div><span class="pos">${esc(w.pos)}</span></div>${hear(w.w)}</div>
    ${rev ? `<p style="font-size:24px;font-weight:600">${esc(w.vi)}</p>${w.ex ? `<div class="ex-item"><span class="example" lang="en" ${t.track === "med" ? 'style="font-style:italic"' : ""}>${esc(w.ex)}</span>${hear(w.ex)}</div>` : ""}` : `<p class="muted">Bạn có biết nghĩa của từ này không? Nghĩ câu trả lời trước khi bấm.</p>`}
    </article><div class="step-actions">${!rev ? `<button class="btn" data-act="lnDont">Chưa biết, xem nghĩa</button><button class="btn primary" data-act="lnKnow">Tôi biết từ này</button>`
      : LN.choice === "know" ? `<button class="btn" data-act="lnAdd">Không, tôi nhầm. Thêm vào ôn tập</button><button class="btn primary" data-act="lnKnown">Đúng, đánh dấu đã biết</button>` : `<button class="btn primary" data-act="lnAdd">Thêm vào ôn tập</button>`}</div></div></div>`;
}
function lnNext() { LN.i++; LN.phase = "ask"; LN.choice = null; save(); render(); if (LN.i < LN.words.length) speakNow(LN.words[LN.i].w); }

/* ---------------- Quick quiz ---------------- */
let QZ = null;
function startQuiz(tid) {
  const t = LIB_BY[tid]; if (!t) return false; const pool = t.words.filter(isLearned); const src = [...shuffle(pool), ...shuffle(t.words.filter(w => !isLearned(w)))].slice(0, 10);
  QZ = { tid, t, i: 0, ok: 0, items: src.map(w => { const opts = shuffle([w.vi, ...shuffle(t.words.filter(x => x !== w && x.vi !== w.vi)).slice(0, 3).map(x => x.vi)]); return { w, q: { q: w.w, opts, a: opts.indexOf(w.vi), why: `${w.w}: ${w.vi}` }, st: {} }; }) }; return true;
}
function viewQuiz() {
  if (!QZ || QZ.tid !== ROUTE.arg) { if (!startQuiz(ROUTE.arg)) return `<div class="focus-page"><p>Không tìm thấy chủ đề.</p></div>`; }
  const t = QZ.t, cls = `track-${t.track}`;
  if (QZ.i >= QZ.items.length) return `<div class="${cls}">${focusBar(null, t.title)}<div class="focus-page"><article class="step-card"><span class="step-kind">${t.icon} Luyện nhanh</span><div class="row" style="gap:18px"><div class="result-num">${QZ.ok}/${QZ.items.length}</div><p class="muted">đúng ngay lần đầu</p></div><div class="row"><button class="btn primary" data-act="qzAgain">Làm lượt mới</button><a class="btn" href="#/library/${t.id}">Về chủ đề</a></div></article></div></div>`;
  const it = QZ.items[QZ.i];
  return `<div class="${cls}">${focusBar({ n: QZ.items.length, i: QZ.i }, t.title)}<div class="focus-page"><article class="step-card"><span class="step-kind">${t.icon} Chọn nghĩa đúng</span><div class="row"><p class="q" lang="en" style="font-size:26px">${esc(it.w.w)}</p>${hear(it.w.w)}</div>${choicesHtml(it.q, it.st, "qz", false)}</article>
    <div class="step-actions"><button class="btn primary" data-act="qzNext" ${it.st.done ? "" : "disabled"}>${QZ.i === QZ.items.length - 1 ? "Xem kết quả" : "Câu tiếp"}</button></div></div></div>`;
}

/* ---------------- Placement test ---------------- */
let PL = null;
function startPlacement() {
  const items = []; GEN_LEVELS.forEach(l => { const ws = genLevelWords(l); shuffle(ws).slice(0, 5).forEach(w => { const opts = shuffle([w.vi, ...shuffle(ws.filter(x => x !== w && x.vi !== w.vi)).slice(0, 2).map(x => x.vi)]); opts.push("Tôi không biết"); items.push({ w, l, opts, a: opts.indexOf(w.vi), pick: null }); }); });
  PL = { items, i: 0, done: false };
}
function placementResult() {
  const by = {}; GEN_LEVELS.forEach(l => { const xs = PL.items.filter(x => x.l === l); by[l] = xs.filter(x => x.pick === x.a).length; });
  let lvl = "A0"; for (const l of GEN_LEVELS) { if (by[l] >= 4) lvl = l; else break; } return { by, lvl };
}
function viewPlacement() {
  if (!PL) startPlacement();
  if (PL.i >= PL.items.length) {
    const r = placementResult();
    return `${focusBar(null, "Kiểm tra đầu vào")}<div class="focus-page"><article class="step-card"><span class="step-kind">Kết quả</span><h1>Trình độ từ vựng ước tính: ${r.lvl === "A0" ? "khởi đầu (dưới A1)" : r.lvl}</h1>
      <div>${GEN_LEVELS.map(l => `<div class="skill"><span class="lv lv-${l}">${l}</span><div class="bar"><i style="width:${r.by[l] / 5 * 100}%"></i></div><span class="n">${r.by[l]}/5</span></div>`).join("")}</div>
      <p class="muted">Một cấp được tính là đạt khi đúng ít nhất 4/5 và mọi cấp thấp hơn cũng đạt. Đây chỉ là ước lượng nhanh về vốn từ nhận biết, không phải bài thi CEFR chính thức.</p>
      <div class="row"><button class="btn primary" data-act="plApply">Đặt ${r.lvl === "A0" ? "khởi đầu" : r.lvl} làm trình độ hiện tại</button><button class="btn" data-act="plRetry">Làm lại</button><a class="btn quiet" href="#/goals">Về Mục tiêu</a></div></article></div>`;
  }
  const it = PL.items[PL.i];
  return `${focusBar({ n: PL.items.length, i: PL.i }, "Kiểm tra đầu vào")}<div class="focus-page"><article class="step-card"><span class="step-kind">Câu ${PL.i + 1}/${PL.items.length}. Chọn nghĩa đúng, hoặc “Tôi không biết” nếu không chắc.</span>
    <p class="q" lang="en" style="font-size:30px">${esc(it.w.w)}</p><div class="choices">${it.opts.map((o, i) => `<button class="choice" data-act="plPick" data-i="${i}">${esc(o)}</button>`).join("")}</div></article></div>`;
}

/* ---------------- My words, grouped by topic ---------------- */
wordListHtml = function () {
  const q = norm(WQ), qv = WQ.trim().toLowerCase();
  const match = (w, vi) => !q || norm(w).includes(q) || vi.toLowerCase().includes(qv);
  const groups = [];
  LESSONS.filter(l => S.lessons[l.id]?.done).forEach(l => { const items = l.words.map((w, i) => ({ w, i })).filter(x => match(x.w.w, x.w.vi)); if (items.length) groups.push({ key: l.id, icon: l.track === "med" ? "🩺" : "📘", color: l.track === "med" ? "#0a8f78" : "#3158d4", title: `Bài ${l.id}: ${l.title}`, rows: items.map(({ w, i }) => { const c = S.cards[`${l.id}:${i}:p`]; const s = !c || c.state === "new" ? ["mới", ""] : c.state !== "review" ? ["đang học", "acc"] : c.s >= 21 ? ["đã vững", "good"] : ["đang củng cố", "acc"]; return `<div class="lw" style="--tc:${l.track === "med" ? "#0a8f78" : "#3158d4"}"><div class="lw-main"><div class="row" style="gap:8px"><span class="lw-w" lang="en">${esc(w.w)}</span><span class="pos">${esc(ipaOf(w))}</span></div><div class="lw-vi">${esc(w.vi)}</div></div><div class="lw-act">${hear(w.w)}<span class="chip ${s[1]}">${s[0]}</span></div></div>`; }) }); });
  LIB.forEach(t => { const items = t.words.filter(w => isLearned(w) && match(w.w, w.vi)); if (items.length) groups.push({ key: t.id, icon: t.icon, color: t.color, title: t.title, sub: t.vi, rows: items.map(w => wordRow(w, false)) }); });
  if (!groups.length) return WQ ? `<p class="muted">Không có từ nào khớp “${esc(WQ)}”.</p>` : `<div class="empty"><p>Chưa có từ nào. Học xong một bài, hoặc chọn “Ôn”, “Biết” trong Thư viện từ vựng.</p><div class="row"><a class="btn primary" href="#/library">Mở thư viện</a><a class="btn" href="#/path">Lộ trình</a></div></div>`;
  return groups.map(g => `<details class="wgroup" style="--tc:${g.color}" ${q || groups.length <= 4 ? "open" : ""}><summary><span class="ti">${g.icon}</span><span class="grow"><b>${esc(g.title)}</b>${g.sub ? ` <span class="muted small">${esc(g.sub)}</span>` : ""}</span><span class="chip">${g.rows.length}</span></summary><div class="lw-list">${g.rows.join("")}</div></details>`).join("");
};
const _viewWords = viewWords;
viewWords = () => _viewWords().replace('<h1>Sổ từ và thuật ngữ</h1>', '<h1>Từ của tôi</h1><p class="lede">Các từ bạn đã học, gom theo bài và chủ đề. Muốn thêm từ mới, mở <a href="#/library">Thư viện từ vựng</a>.</p>').replace(">Sổ từ<", ">Từ đã học<");

/* ---------------- Progress & More & Settings additions ---------------- */
const _viewProgress = viewProgress;
viewProgress = () => _viewProgress() + `<section class="panel stack" style="margin-top:14px"><h3>Thư viện từ vựng</h3>${GEN_LEVELS.map(l => { const c = coverage2(genLevelWords(l)); return `<div class="skill"><span class="lv lv-${l}">${l}</span><div class="bar"><i style="width:${c.p * 100}%"></i></div><span class="n">${c.d}/${c.n}</span></div>`; }).join("")}${STAGES.map(([id, n]) => { const c = coverage2(stageWords(id)); return `<div class="skill track-med"><span>${n}</span><div class="bar"><i style="width:${c.p * 100}%;background:var(--accent)"></i></div><span class="n">${c.d}/${c.n}</span></div>`; }).join("")}</section>`;
viewMore = function () {
  const items = [["goals", "🎯", "Mục tiêu học tập", "0 đến C1 và lộ trình y khoa"], ["clinic", "🩺", "Phòng khám ảo", "Hỏi bệnh 3 ca bệnh ảo"], ["words", "🔖", "Từ của tôi", "Từ đã học theo chủ đề, hình vị, ghép thuật ngữ"], ["sounds", "🔊", "Phát âm", "Cặp âm người Việt hay nhầm"], ["progress", "📈", "Tiến bộ", "Kỹ năng, thời gian, lịch học"], ["sync", "☁️", "Đồng bộ thiết bị", "Học tiếp trên iPad, điện thoại, máy tính"], ["settings", "⚙️", "Cài đặt", "Giọng đọc, sao lưu dữ liệu"], ["about", "✍️", "Góc tác giả", "Mục đích, triết lý, phương pháp"]];
  return `<section class="page-head"><h1>Thêm</h1></section><div class="panel"><div class="list">${items.map(([id, i, t, s]) => `<a class="item link" href="#/${id}"><span class="ti">${i}</span><span class="grow"><span class="t">${t}</span><br><span class="s">${s}</span></span></a>`).join("")}</div></div>`;
};
const _viewSettings = viewSettings;
viewSettings = () => _viewSettings().replace('<section class="panel" style="margin-top:14px"><h3>Dữ liệu</h3>', `<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>☁️ Đồng bộ thiết bị</h3><a class="btn small" href="#/sync">${syncCfg().token ? "Quản lý" : "Bật đồng bộ"}</a></div><p class="muted small">${esc(syncTitle())}.</p></section><section class="panel" style="margin-top:14px"><h3>Dữ liệu</h3>`);

/* ---------------- Sync (GitHub Gist) ---------------- */
const SYNC = { status: "idle", msg: "", pending: false, busy: false };
const SYNC_FILE = "tnkhoi-english-sync.json";
function syncCfg() { try { return JSON.parse(localStorage.getItem(SYNC_KEY) || "{}") || {}; } catch { return {}; } }
function saveCfg(c) { try { localStorage.setItem(SYNC_KEY, JSON.stringify(c)); } catch { } }
async function gh(path, opt = {}) {
  const c = syncCfg(); if (!c.token) throw new Error("Chưa có mã truy cập GitHub.");
  const r = await fetch("https://api.github.com" + path, { method: opt.method || "GET", cache: "no-store", headers: { Accept: "application/vnd.github+json", Authorization: "Bearer " + c.token, ...(opt.body ? { "Content-Type": "application/json" } : {}) }, body: opt.body });
  if (!r.ok) throw new Error({ 401: "Mã truy cập không hợp lệ hoặc đã hết hạn.", 403: "Mã truy cập thiếu quyền Gists, hoặc GitHub đang giới hạn tạm thời.", 404: "Không tìm thấy bản đồng bộ trên GitHub." }[r.status] || "GitHub báo lỗi " + r.status + ".");
  return r.status === 204 ? null : r.json();
}
function mergeState(a, b) {
  const m = JSON.parse(JSON.stringify(a));
  if ((b.settingsAt || 0) > (a.settingsAt || 0)) { m.settings = b.settings; m.settingsAt = b.settingsAt; }
  if ((b.goals.setAt || 0) > (a.goals.setAt || 0)) m.goals = b.goals;
  for (const [id, v] of Object.entries(b.lessons)) { const x = m.lessons[id]; m.lessons[id] = !x ? v : { done: x.done || v.done, best: Math.max(x.best, v.best), last: Math.max(x.last, v.last), n: Math.max(x.n, v.n) }; }
  for (const [id, c] of Object.entries(b.cards)) { const x = m.cards[id]; if (!x || (c.last || 0) > (x.last || 0)) m.cards[id] = c; }
  const seen = new Set(m.log.map(e => e.t + e.k + e.src + e.ok)); b.log.forEach(e => { const k = e.t + e.k + e.src + e.ok; if (!seen.has(k)) { seen.add(k); m.log.push(e); } }); m.log.sort((x, y) => x.t - y.t); m.log = m.log.slice(-4000);
  for (const [id, v] of Object.entries(b.cases)) { const x = m.cases[id]; m.cases[id] = !x ? v : { best: Math.max(x.best, v.best), n: Math.max(x.n, v.n), last: Math.max(x.last, v.last) }; }
  for (const [id, v] of Object.entries(b.pron)) { const x = m.pron[id]; m.pron[id] = !x || v.n > x.n ? v : x; }
  if (b.lab.n > m.lab.n) m.lab = b.lab;
  for (const [k, v] of Object.entries(b.known)) m.known[k] = m.known[k] ? Math.min(m.known[k], v) : v;
  for (const [d, v] of Object.entries(b.intake)) { const x = m.intake[d] || { gen: 0, med: 0 }; m.intake[d] = { gen: Math.max(x.gen, v.gen), med: Math.max(x.med, v.med) }; }
  for (const [dev, days] of Object.entries(b.time.byDev)) { const x = m.time.byDev[dev] || (m.time.byDev[dev] = {}); for (const [d, v] of Object.entries(days)) x[d] = Math.max(x[d] || 0, v); }
  m.time.legacy = Math.max(a.time.legacy, b.time.legacy); recomputeTime(m);
  if (b.resume && (!a.resume || (b.resume.savedAt || 0) > (a.resume.savedAt || 0))) m.resume = b.resume;
  m.createdAt = Math.min(a.createdAt, b.createdAt);
  return m;
}
function paintSync() { document.querySelectorAll(".sync-dot").forEach(el => { el.className = el.className.replace(/s-\w+/, "s-" + (syncCfg().token ? SYNC.status : "off")); el.title = syncTitle(); }); const st = document.getElementById("syncState"); if (st) st.textContent = syncTitle(); }
async function syncNow(manual) {
  const c = syncCfg(); if (!c.token || SYNC.busy) return;
  SYNC.busy = true; SYNC.status = "busy"; paintSync();
  try {
    if (!c.gistId) { const list = await gh("/gists?per_page=100"); const f = (list || []).find(g => g.files && g.files[SYNC_FILE]); if (f) { c.gistId = f.id; saveCfg(c); } }
    if (c.gistId) {
      const g = await gh("/gists/" + c.gistId); const f = g.files && g.files[SYNC_FILE];
      if (f) { let txt = f.content; if (f.truncated) txt = await (await fetch(f.raw_url, { cache: "no-store" })).text(); const remote = sanitize(JSON.parse(txt)); S = mergeState(S, remote); save(); }
    }
    const content = JSON.stringify({ ...S, updatedAt: Date.now(), syncDevice: DEV });
    const files = { [SYNC_FILE]: { content } };
    if (c.gistId) await gh("/gists/" + c.gistId, { method: "PATCH", body: JSON.stringify({ files }) });
    else { const g = await gh("/gists", { method: "POST", body: JSON.stringify({ description: "Tnkhoi English: dữ liệu học cá nhân (đừng xóa)", public: false, files }) }); c.gistId = g.id; }
    c.lastSync = Date.now(); saveCfg(c); SYNC.status = "ok"; SYNC.msg = ""; SYNC.pending = false;
    if (manual) toast("Đã đồng bộ.");
    if (!isFocus()) render(); else paintSync();
  } catch (e) { SYNC.status = "err"; SYNC.msg = e.message || "không rõ"; paintSync(); if (manual) toast(SYNC.msg); if (ROUTE.name === "sync") render(); }
  finally { SYNC.busy = false; }
}
setInterval(() => { const c = syncCfg(); if (c.token && c.auto !== false && SYNC.pending && !document.hidden) syncNow(false); }, 180000);
document.addEventListener("visibilitychange", () => { const c = syncCfg(); if (document.hidden && c.token && c.auto !== false && SYNC.pending) syncNow(false); });
function viewSync() {
  const c = syncCfg();
  return `<section class="page-head"><h1>Đồng bộ thiết bị</h1><p class="lede">Dữ liệu học được cất trong một Gist bí mật trên tài khoản GitHub của chính bạn, cùng tài khoản đang chạy trang English-web. Mỗi thiết bị gộp dữ liệu hai chiều: thẻ ôn lấy bản mới nhất, điểm lấy mức cao nhất, thời gian học cộng theo từng thiết bị.</p></section>
  ${c.token ? `<section class="panel stack"><div class="row between"><h3>Trạng thái</h3><span class="sync-dot s-${SYNC.status} tb" style="pointer-events:none">${ic("cloud", 18)}<i></i></span></div><p id="syncState">${esc(syncTitle())}</p>
      <p class="muted small">Thiết bị này: ${esc(DEV)}. ${c.gistId ? `Gist: ${esc(c.gistId.slice(0, 8))}…` : "Gist sẽ được tạo ở lần đồng bộ đầu tiên."}</p>
      <div class="row"><button class="btn primary" data-act="syncNow">Đồng bộ ngay</button><label class="row small" style="gap:6px"><input type="checkbox" id="syncAuto" ${c.auto !== false ? "checked" : ""}> Tự đồng bộ khi mở app, mỗi 3 phút và khi rời trang</label></div>
      <div class="divider"></div><button class="btn danger" data-act="syncOff">Tắt đồng bộ trên thiết bị này</button><p class="muted small">Tắt chỉ xóa mã truy cập khỏi thiết bị này; dữ liệu học trên máy và trên Gist vẫn còn.</p></section>`
    : `<section class="panel stack"><h3>Bật đồng bộ (làm một lần trên mỗi thiết bị)</h3>
      <ol class="howto"><li>Trên GitHub, vào Settings, Developer settings, Personal access tokens, Fine-grained tokens, chọn Generate new token.</li><li>Đặt tên như “Tnkhoi English sync”, chọn thời hạn, ở mục Account permissions đặt <b>Gists: Read and write</b>. Không cần quyền nào khác.</li><li>Sao chép mã (bắt đầu bằng github_pat_) rồi dán vào ô dưới đây. Trên thiết bị thứ hai, dán cùng mã đó; app sẽ tự tìm lại Gist.</li></ol>
      <label class="small muted" for="syncToken">Mã truy cập GitHub</label><input class="field" id="syncToken" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="github_pat_…" style="font:15px ui-monospace,monospace">
      <div class="row"><button class="btn primary" data-act="syncOn">Kết nối và đồng bộ</button></div>
      <p class="muted small">Mã chỉ lưu trong trình duyệt của thiết bị này, không nằm trong file sao lưu và không gửi đi đâu ngoài api.github.com. Ai có mã sẽ đọc và sửa được các Gist của bạn, nên chỉ cấp quyền Gists và đừng chia sẻ mã.</p></section>`}
  <section class="panel stack" style="margin-top:14px"><h3>Không muốn dùng GitHub?</h3><p class="muted">Vẫn có thể chuyển dữ liệu thủ công: trong <a href="#/settings">Cài đặt</a>, chọn Sao chép dữ liệu trên máy cũ, dán vào máy mới. Cách này thay thế hoàn toàn, không gộp.</p></section>`;
}

/* ---------------- Patch review display for library cards ---------------- */
const _viewReview = viewReview;
viewReview = () => { let h = _viewReview(); if (R && R.cur && R.cur.startsWith("V:") && ROUTE.arg === "go") { const i = cardInfo(R.cur); h = h.replace(`Từ bài ${i.l.id}`, `${i.lw.topic.icon} ${esc(i.lw.topic.vi)}`); } return h; };

/* ---------------- Actions ---------------- */
const _exit = ACT.exitFocus;
Object.assign(ACT, {
  exitFocus() { stopSpeech(); if (["learn", "quiz"].includes(ROUTE.name)) { LN = QZ = null; location.hash = "#/library/" + ROUTE.arg; } else if (ROUTE.name === "placement") { PL = null; location.hash = "#/goals"; } else _exit(); },
  tbAccent() { const st = S.settings; st.accent = st.accent === "uk" ? "us" : "uk"; st.voice = st.voice2 = "auto"; S.settingsAt = Date.now(); save(); render(); toast(st.accent === "uk" ? "Đã chuyển sang Anh-Anh: phiên âm và giọng đọc" : "Đã chuyển sang Anh-Mỹ: phiên âm và giọng đọc"); },
  tbRate() { const st = S.settings; const i = RATES.findIndex(r => Math.abs(r - st.rate) < 0.01); st.rate = RATES[(i + 1) % RATES.length]; S.settingsAt = Date.now(); save(); document.querySelectorAll('[data-act="tbRate"] span').forEach(s => s.textContent = +st.rate.toFixed(2) + "×"); speakNow("This is the reading speed."); },
  tbTheme() { const st = S.settings; st.theme = { system: "light", light: "dark", dark: "system" }[st.theme]; S.settingsAt = Date.now(); save(); render(); toast({ system: "Giao diện theo thiết bị", light: "Giao diện sáng", dark: "Giao diện tối" }[st.theme]); },
  libTrack(el) { LF.track = el.dataset.t; LF.lvl = ""; render(); },
  libLevel(el) { LF.lvl = el.dataset.l; render(); },
  goLevel(el) { LF.track = "gen"; LF.lvl = el.dataset.l; LF.q = ""; location.hash = "#/library"; },
  libAdd(el) { const w = LIB_WORD[el.dataset.k]; addWordCards(w); save(); refreshRow(el, w); toast(`Đã thêm “${w.w}” vào ôn tập.`); },
  libKnown(el) { const w = LIB_WORD[el.dataset.k]; markKnown(w); save(); refreshRow(el, w); },
  libAddAll(el) { const t = LIB_BY[el.dataset.t]; const ws = t.words.filter(w => wStatus(w) === "new"); if (ws.length > 20 && !confirm(`Thêm ${ws.length} từ (${ws.length * 2} thẻ) vào ôn tập cùng lúc? Học dần qua “Học từ mới” thường nhớ tốt hơn.`)) return; ws.forEach(w => addWordCards(w)); save(); render(); toast(`Đã thêm ${ws.length} từ vào ôn tập.`); },
  lnKnow() { LN.choice = "know"; LN.phase = "reveal"; render(); },
  lnDont() { LN.choice = "dont"; LN.phase = "reveal"; render(); speakNow(LN.words[LN.i].ex || LN.words[LN.i].w); },
  lnKnown() { markKnown(LN.words[LN.i]); LN.known++; lnNext(); },
  lnAdd() { addWordCards(LN.words[LN.i]); LN.added++; lnNext(); },
  qzNext() { QZ.i++; if (QZ.i >= QZ.items.length) save(); render(); if (QZ.i < QZ.items.length) speakNow(QZ.items[QZ.i].w.w); },
  qzAgain() { startQuiz(QZ.tid); render(); },
  plPick(el) { PL.items[PL.i].pick = +el.dataset.i; PL.i++; render(); },
  plRetry() { startPlacement(); render(); },
  plApply() { const r = placementResult(); S.goals.gen.level = r.lvl; S.goals.placed = { at: Date.now(), level: r.lvl }; S.goals.setAt = Date.now(); PL.items.filter(x => x.pick === x.a && GEN_LEVELS.indexOf(x.l) <= GEN_LEVELS.indexOf(r.lvl)).forEach(x => { S.known[x.w.key] = S.known[x.w.key] || Date.now(); }); touch(); save(); PL = null; location.hash = "#/goals"; toast("Đã cập nhật trình độ hiện tại."); },
  syncOn() { const t = ($("#syncToken")?.value || "").trim(); if (!/^(github_pat_|ghp_|gho_)[A-Za-z0-9_]{20,}$/.test(t)) { toast("Mã không đúng dạng. Mã GitHub bắt đầu bằng github_pat_ hoặc ghp_."); return; } saveCfg({ token: t, auto: true }); SYNC.status = "idle"; render(); syncNow(true); },
  syncNow() { syncNow(true); },
  syncOff() { if (!confirm("Tắt đồng bộ và xóa mã truy cập khỏi thiết bị này?")) return; const c = syncCfg(); saveCfg({ gistId: c.gistId }); SYNC.status = "idle"; render(); }
});
const _pick = ACT.pick;
ACT.pick = el => { if (el.dataset.q === "qz") { const it = QZ.items[QZ.i]; const was = it.st.done; pickOpt2q(it.q, it.st, +el.dataset.o); if (!was && it.st.done) { if (it.st.ok) QZ.ok++; evidence("vocab", it.st.ok, "quiz"); } render(); return; } _pick(el); };
function pickOpt2q(q, qs, o) { if (qs.done) return; qs.picked = qs.picked || []; if (o === q.a) { qs.done = true; qs.ok = !qs.picked.length; } else { qs.picked.push(o); if (qs.picked.length >= 2) { qs.done = true; qs.ok = false; } } }
function refreshRow(el, w) { if (ROUTE.name === "library" && ROUTE.arg) { render(); return; } const row = el.closest(".lw"); if (row) row.outerHTML = wordRow(w, !!el.closest("[data-showtopic]")); }

document.addEventListener("input", e => { if (e.target.id === "libq") { LF.q = e.target.value; const b = $("#libBody"); if (b) b.innerHTML = libResults() || viewLibrary().split('<div id="libBody">')[1].replace(/<\/div>\s*$/, ""); } });
document.addEventListener("change", e => {
  const t = e.target, g = S.goals;
  const map = { goalLevel: () => { g.gen.level = t.value; }, goalTarget: () => { g.gen.target = t.value; }, goalDate: () => { g.gen.date = t.value; }, medStage: () => { g.med.stage = t.value; }, goalNew: () => { g.newPerDay = +t.value; } };
  if (map[t.id]) { map[t.id](); g.setAt = Date.now(); touch(); save(); render(); return; }
  if (t.id && t.id.startsWith("set")) { S.settingsAt = Date.now(); touch(); }
  if (t.id === "syncAuto") { const c = syncCfg(); c.auto = t.checked; saveCfg(c); }
});
addEventListener("hashchange", () => { if (ROUTE.name !== "learn") LN = null; if (ROUTE.name !== "quiz") QZ = null; if (ROUTE.name !== "placement") PL = null; if (ROUTE.name === "library" && location.hash.includes("?lvl=")) { const l = location.hash.split("?lvl=")[1]; LF.track = "gen"; LF.lvl = l; } });

/* ---------------- Start ---------------- */
/* khởi động: xem app-v41.js */
