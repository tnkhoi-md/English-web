/* ============================================================
   VIEWS 1 · router, shell, Today, Path, Lesson player
   ============================================================ */
const ICONS = {
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  path: '<path d="M5 19c4 0 3-7 7-7s3-7 7-7"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/>',
  cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  speaker: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 9a4 4 0 0 1 0 6"/><path d="M19 6.5a8 8 0 0 1 0 11"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  back: '<path d="M15 5l-7 7 7 7"/>'
};
const ic = (n, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const hear = (text, label = "Nghe", extra = "") => `<button class="icon-btn" data-act="say" data-text="${esc(text)}" ${extra} aria-label="${esc(label)}: ${esc(text)}" title="${esc(label)}">${ic("speaker")}</button>`;
const ipaOf = w => (S.settings.accent === "uk" ? w.uk : w.us) || w.us;
const trackName = t => (t === "med" ? "Tiếng Anh y khoa" : "Tiếng Anh thông dụng");
const KIND = { grammar: "Ngữ pháp", vocab: "Từ vựng", clinical: "Giao tiếp lâm sàng", pron: "Phát âm", listening: "Nghe", reading: "Đọc", speaking: "Nói", writing: "Viết" };
const TIPS = LESSONS.flatMap(l => l.steps.filter(s => s.t === "pattern").flatMap(s => s.pit.map(p => ({ l: l.id, x: p[0], v: p[1], why: p[2] }))));

function specimen(w, cls = "") {
  const sy = w.syl && w.syl.length ? w.syl : [w.w];
  const phrase = /\s/.test(w.w);
  const inner = sy.map((s, i) => `<span class="syl${i === w.st && sy.length > 1 ? " stress" : ""}">${esc(s)}</span>`).join(phrase ? '<span class="dot" aria-hidden="true">&nbsp;</span>' : '<span class="dot">·</span>');
  return `<div class="specimen"><div class="spec-word ${cls}" lang="en"><span class="sr">${esc(w.w)}</span><span aria-hidden="true" style="display:contents">${inner}</span></div>
    <div class="row"><span class="ipa">${esc(ipaOf(w))}</span><span class="pos">${esc(w.pos || "")}</span></div></div>`;
}
function partsHtml(parts) { return parts ? `<div class="parts">${parts.map(([f, m]) => `<div class="part"><b lang="en">${esc(f)}</b><span>${esc(m)}</span></div>`).join("")}</div>` : ""; }

/* ---------------- Router ---------------- */
let ROUTE = parseRoute();
function parseRoute() { const h = location.hash.replace(/^#\/?/, ""); const [name, arg] = h.split("/"); return { name: name || "today", arg: arg || "" }; }
function isStudyRoute() {
  const r = ROUTE; if (!r) return false;
  return r.name === "lesson" || (r.name === "review" && r.arg === "go") || (r.name === "clinic" && !!r.arg) || (r.name === "sounds" && !!r.arg) || (r.name === "words" && r.arg === "build");
}
function isFocus() { const r = ROUTE; return r.name === "lesson" || (r.name === "review" && r.arg === "go") || (r.name === "clinic" && !!r.arg); }
addEventListener("hashchange", () => {
  const prev = ROUTE; ROUTE = parseRoute(); stopSpeech();
  const r = ROUTE;
  if (r.name === "lesson") { if (!L || L.id !== r.arg || L.fin) { if (!startLesson(r.arg)) { location.hash = "#/path"; return; } } }
  if (r.name === "review" && r.arg === "go" && !(prev.name === "review" && prev.arg === "go")) startReview();
  if (r.name === "clinic" && r.arg && (!CL || CL.id !== r.arg || CL.phase === "report")) { if (!startCase(r.arg)) { location.hash = "#/clinic"; return; } }
  if (r.name === "sounds" && r.arg && (!SD || SD.set !== r.arg)) startDrill(r.arg);
  if (r.name === "words" && r.arg === "build" && !B) startBuild();
  if (isStudyRoute() && !(prev.name === r.name && prev.arg === r.arg)) TT.session = 0;
  render(true);
});

function paintTimer() {
  const el = document.getElementById("timer"); if (!el) return;
  const today = Math.floor(todaySeconds() / 60);
  if (isStudyRoute()) {
    el.classList.toggle("on", TT.counting);
    el.innerHTML = `<i></i><span>${TT.counting ? "Phiên " + fmtClock(TT.session) : "Tạm dừng"}</span><span class="muted">hôm nay ${today} phút</span>`;
    el.title = TT.counting ? "Đang tính giờ học" : "Tạm dừng vì không có tương tác trong 2 phút hoặc trang bị ẩn";
  } else { el.classList.remove("on"); el.innerHTML = `<span>Hôm nay ${today}/${S.settings.goal} phút</span>`; el.title = "Chỉ tính thời gian khi bạn đang làm bài"; }
}

/* ---------------- Shell ---------------- */
const NAV = [
  ["Học", [["today", "Hôm nay"], ["path", "Lộ trình"], ["review", "Ôn tập"], ["clinic", "Phòng khám ảo"]]],
  ["Luyện", [["sounds", "Phát âm"], ["words", "Sổ từ và thuật ngữ"]]],
  ["Của bạn", [["progress", "Tiến bộ"], ["settings", "Cài đặt"], ["about", "Góc tác giả"]]]
];
function shell(content) {
  const due = dueList().length, cur = ROUTE.name;
  const nav = NAV.map(([g, items]) => `<div class="nav-group">${g}</div>` + items.map(([id, label]) => `<a href="#/${id}" ${cur === id ? 'aria-current="page"' : ""}><span>${label}</span>${id === "review" && due ? `<span class="badge" aria-label="${due} thẻ đến hạn">${due}</span>` : ""}</a>`).join("")).join("");
  const bottom = [["today", "Hôm nay", "home"], ["path", "Lộ trình", "path"], ["review", "Ôn tập", "cards"], ["clinic", "Ca bệnh", "steth"], ["more", "Thêm", "more"]];
  const moreIds = ["more", "sounds", "words", "progress", "settings", "about"];
  return `<div class="shell">
    <aside class="side"><a class="brand" href="#/today"><span class="brand-mark" aria-hidden="true">Tk</span><span class="brand-name">Tnkhoi English<small>Thông dụng và Y khoa</small></span></a>
      <nav class="nav" aria-label="Điều hướng chính">${nav}</nav>
      <div class="side-foot">Phiên bản ${APP.version} (${APP.build})<br>Xây dựng bởi ${APP.author}<br>${APP.credit}</div></aside>
    <div class="main"><header class="topbar"><a class="mobile-brand" href="#/today" style="color:inherit;text-decoration:none"><span class="brand-mark" aria-hidden="true">Tk</span>Tnkhoi English</a><span id="timer" class="timer-pill" aria-live="off"></span></header>
      <main id="page" class="page" tabindex="-1">${content}</main></div>
  </div>
  <nav class="bottom" aria-label="Điều hướng">${bottom.map(([id, l, i]) => `<a href="#/${id}" ${(cur === id || (id === "more" && moreIds.includes(cur))) ? 'aria-current="page"' : ""}>${ic(i, 22)}<span>${l}</span>${id === "review" && due ? `<span class="badge">${due}</span>` : ""}</a>`).join("")}</nav>`;
}
function focusBar(segs, label) {
  return `<div class="focus-bar"><button class="icon-btn" data-act="exitFocus" aria-label="Thoát">${ic("close")}</button>
    ${segs ? `<div class="progress" role="progressbar" aria-label="${esc(label || "Tiến độ")}" aria-valuemin="0" aria-valuemax="${segs.n}" aria-valuenow="${segs.i}">${Array.from({ length: segs.n }, (_, k) => `<i class="${k < segs.i ? "on" : k === segs.i ? "cur" : ""}"></i>`).join("")}</div>` : `<div class="grow" style="flex:1"><b>${esc(label || "")}</b></div>`}
    <span id="timer" class="timer-pill"></span></div>`;
}
let lastRouteKey = "";
function render(nav = false) {
  applyTheme();
  const r = ROUTE, key = r.name + "/" + r.arg;
  document.body.classList.toggle("focus", isFocus());
  const app = document.getElementById("app");
  const V = { today: viewToday, path: viewPath, lesson: viewLesson, review: viewReview, clinic: viewClinic, sounds: viewSounds, words: viewWords, progress: viewProgress, settings: viewSettings, about: viewAbout, more: viewMore, library: viewLibrary, goals: viewGoals, learn: viewLearn, quiz: viewQuiz, placement: viewPlacement, sync: viewSync }[r.name] || viewToday;
  const y = scrollY;
  app.innerHTML = isFocus() ? V() : shell(V());
  paintTimer();
  if (nav || key !== lastRouteKey) { scrollTo(0, 0); const h = app.querySelector("h1, h2"); if (h && nav) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } }
  else scrollTo(0, y);
  lastRouteKey = key;
  afterRender();
}
function afterRender() {
  const chat = document.getElementById("chat"); if (chat) chat.scrollTop = chat.scrollHeight;
  const auto = document.querySelector("[data-autofocus]");
  if (auto && matchMedia("(pointer: fine)").matches && document.activeElement !== auto) auto.focus({ preventScroll: true });
}

/* ---------------- Today ---------------- */
function nextLessonIn(track) { return LESSONS.find(l => l.track === track && !S.lessons[l.id]?.done); }
function preOk(l) { return (l.pre || []).every(p => S.lessons[p]?.done); }
function learnedWords() { return LESSONS.filter(l => S.lessons[l.id]?.done).flatMap(l => l.words.map((w, i) => ({ w, l, i }))); }
function weakestStep() {
  const arr = Object.keys(SKILLS).map(k => ({ k, ...skillScore(k) })).filter(x => x.n >= 6).sort((a, b) => a.p - b.p);
  const w = arr[0]; if (!w || w.p > 0.8) return null;
  const pct = Math.round(w.p * 100), why = `${SKILLS[w.k]} đang là kỹ năng yếu nhất: ${pct}% trên ${w.n} lần làm gần đây.`;
  if (w.k === "pron") { const set = Object.keys(PAIRS).sort((a, b) => acc(a) - acc(b))[0]; return { kind: "sounds", short: "luyện âm " + PAIRS[set].title, title: `Luyện cặp âm ${PAIRS[set].title}`, why, href: `#/sounds/${set}`, cta: "Luyện âm", est: 5 }; }
  if (w.k === "clinical" || w.k === "speaking") { const ready = c => c.rec.every(id => S.lessons[id]?.done) ? 0 : 1; const c = CASES.slice().sort((a, b) => ready(a) - ready(b) || (S.cases[a.id]?.best || 0) - (S.cases[b.id]?.best || 0))[0]; return { kind: "clinic", short: "khám ca " + c.vi.toLowerCase(), title: `Luyện ca "${c.vi}"`, why, href: `#/clinic/${c.id}`, cta: "Vào phòng khám", est: 15 }; }
  if (w.k === "vocab") return { kind: "lab", short: "ghép thuật ngữ", title: "Ghép thuật ngữ y khoa", why, href: "#/words/build", cta: "Luyện", est: 5 };
  const done = LESSONS.filter(l => S.lessons[l.id]?.done).sort((a, b) => S.lessons[a.id].best - S.lessons[b.id].best)[0];
  return done ? { kind: "lesson", short: "học lại bài " + done.id, title: `Học lại bài ${done.id}: ${done.title}`, why: why + ` Bài này có điểm thấp nhất (${Math.round(S.lessons[done.id].best * 100)}%).`, href: `#/lesson/${done.id}`, cta: "Học lại", est: done.min } : null;
}
function acc(set) { const p = S.pron[set]; return p && p.n ? p.ok / p.n : -1; }
function planToday() {
  const items = []; const due = dueList().length;
  if (due) items.push({ kind: "review", short: `ôn ${due} thẻ`, title: `Ôn ${due} thẻ đến hạn`, why: "Nhớ lại trước khi học mới. Thẻ để quá hạn sẽ khó nhớ hơn.", href: "#/review/go", cta: "Bắt đầu ôn", est: Math.max(2, Math.round(due * 0.25)) });
  const doneCount = t => LESSONS.filter(l => l.track === t && S.lessons[l.id]?.done).length;
  const lastT = t => Math.max(0, ...LESSONS.filter(l => l.track === t).map(l => S.lessons[l.id]?.last || 0));
  const order = [nextLessonIn("gen"), nextLessonIn("med")].filter(Boolean).sort((a, b) => doneCount(a.track) - doneCount(b.track) || lastT(a.track) - lastT(b.track));
  const lessonItem = l => ({ kind: "lesson", track: l.track, short: `học bài ${l.id}`, title: `Bài ${l.id}: ${l.title}`, why: l.can, href: `#/lesson/${l.id}`, cta: "Vào bài", est: l.min });
  if (order[0]) items.push(lessonItem(order[0]));
  const cs = CASES.find(c => !S.cases[c.id] && c.rec.every(id => S.lessons[id]?.done));
  if (cs) items.push({ kind: "clinic", track: "med", short: `khám ca ${cs.vi.toLowerCase()}`, title: `Ca bệnh ảo: ${cs.vi}`, why: `Bạn đã học ${cs.rec.join(", ")}. Giờ tự hỏi bệnh một bệnh nhân ảo từ đầu đến cuối.`, href: `#/clinic/${cs.id}`, cta: "Vào phòng khám", est: 15 });
  if (items.length < 3) { const w = weakestStep(); if (w) items.push(w); }
  if (items.length < 3 && order[1]) items.push(lessonItem(order[1]));
  return items.slice(0, 3);
}
function greeting() { const h = new Date().getHours(); return h < 11 ? "Chào buổi sáng" : h < 14 ? "Chào buổi trưa" : h < 18 ? "Chào buổi chiều" : "Chào buổi tối"; }
function viewToday() {
  const plan = planToday();
  const first = !Object.keys(S.lessons).length && !S.log.length;
  const date = new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long" });
  let headline;
  if (first) headline = "Bắt đầu với hai bài đầu tiên.";
  else if (!plan.length) headline = "Bạn đã học hết các bài hiện có. Hôm nay hãy giữ nhịp ôn tập.";
  else headline = "Hôm nay: " + (plan.length === 1 ? plan[0].short : plan.slice(0, -1).map(p => p.short).join(", ") + ", rồi " + plan[plan.length - 1].short) + ".";
  const mins = Math.floor(todaySeconds() / 60), goal = S.settings.goal;
  const pool = learnedWords(); const seed = Number(dayKey().replace(/-/g, ""));
  const wod = pool.length ? pool[seed % pool.length] : { w: LESSON_BY.M1.words[seed % 6], l: LESSON_BY.M1 };
  const tip = TIPS[seed % TIPS.length];
  const stepsHtml = first
    ? [LESSON_BY.G1, LESSON_BY.M1].map(l => `<li class="plan-step track-${l.track}"><div><div class="t"><b>${esc(trackName(l.track))}: ${esc(l.title)}</b></div><div class="why">${esc(l.can)}</div></div><a class="btn primary" href="#/lesson/${l.id}">Học bài ${l.id}</a></li>`).join("")
    : plan.map(p => `<li class="plan-step ${p.track ? "track-" + p.track : ""}"><div><div><b>${esc(p.title)}</b> <span class="muted small">khoảng ${p.est} phút</span></div><div class="why">${esc(p.why)}</div></div><a class="btn primary" href="${p.href}">${esc(p.cta)}</a></li>`).join("");
  const resume=S.resume&&LESSON_BY[S.resume.id]&&!S.lessons[S.resume.id]?.done?S.resume:null;
  const resumeBanner=resume?(()=>{const rl=LESSON_BY[resume.id];return `<div class="resume-banner panel" role="status"><div><span class="step-kind">Đang học dở</span><h3 style="margin:4px 0">${esc(rl.title)}</h3><p class="muted small">Bạn đang ở bước ${resume.i+1}/${rl.steps.length + 4}. Trạng thái được lưu tự động.</p></div><div class="row"><a class="btn primary" href="#/lesson/${resume.id}">Tiếp tục</a><button class="btn quiet" data-act="discardResume" data-id="${resume.id}">Bỏ qua</button></div></div>`})():"";
  return `<section class="page-head"><p class="muted">${greeting()}, ${esc(S.settings.name || "bạn")}. ${esc(date.charAt(0).toUpperCase() + date.slice(1))}</p>
      <h1 class="hero-plan">${esc(headline)}</h1></section>
    ${resumeBanner}${stepsHtml ? `<ol class="plan" aria-label="Kế hoạch hôm nay">${stepsHtml}</ol>` : `<div class="empty"><p>Không còn gì đến hạn. Bạn có thể luyện phát âm hoặc khám lại một ca bệnh.</p><div class="row"><a class="btn" href="#/sounds">Phát âm</a><a class="btn" href="#/clinic">Phòng khám ảo</a></div></div>`}
    ${first ? `<div class="panel stack" style="margin-top:18px"><h3>Ứng dụng này hoạt động thế nào</h3>
      <p>Hai mạch học chạy song song: tiếng Anh thông dụng làm nền, tiếng Anh y khoa dùng lại chính ngữ pháp đó trong phòng khám.</p>
      <p>Từ mới chỉ vào hàng ôn tập sau khi bạn học xong bài. Thuật toán FSRS lên lịch ôn mỗi thẻ ngay trước lúc bạn sắp quên.</p>
      <p>Điểm kỹ năng chỉ tính từ câu bạn thực sự làm, nên lúc đầu mọi thứ bằng 0. Dữ liệu nằm trong trình duyệt này; hãy xuất bản sao lưu định kỳ trong <a href="#/settings">Cài đặt</a>.</p></div>` : ""}
    <div class="grid2" style="margin-top:18px">
      <div class="panel stack"><div class="row between"><h3>Mục tiêu hôm nay</h3><span class="muted small">${mins}/${goal} phút</span></div>
        <div class="goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${mins}" aria-label="Phút học hôm nay"><i style="width:${clamp(mins / goal * 100, 0, 100)}%"></i></div>
        <div class="grid3"><div class="stat"><b>${streak()}</b><span>ngày liên tiếp</span></div><div class="stat"><b>${dueList().length}</b><span>thẻ đến hạn</span></div><div class="stat"><b>${Object.keys(S.cards).length}</b><span>thẻ đã có</span></div></div>
        <p class="muted small">Chỉ tính thời gian bạn đang làm bài. Một ngày được tính vào chuỗi khi học từ 5 phút.</p></div>
      <div class="panel stack ${wod.l.track === "med" ? "track-med" : "track-gen"}"><div class="row between"><h3>${pool.length ? "Một từ để nói to hôm nay" : "Xem trước một từ"}</h3>${hear(wod.w.w)}</div>
        ${specimen(wod.w, "sm")}${partsHtml(wod.w.parts)}<p><b>${esc(wod.w.vi)}</b></p><p class="example" lang="en">${esc(wod.w.ex)}</p></div>
    </div>
    <div class="panel stack" style="margin-top:14px"><div class="row between"><h3>Lỗi người Việt hay gặp</h3><a class="muted small" href="#/lesson/${tip.l}">từ bài ${tip.l}</a></div>
      <div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(tip.x)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(tip.v)}</span><span class="why">${esc(tip.why)}</span></div></div>`;
}

/* ---------------- Path ---------------- */
function lessonRow(l, idx) {
  const r = S.lessons[l.id], ok = preOk(l);
  const rp = (S.resume && S.resume.id === l.id && S.resume.i > 0 && !r?.done) ? S.resume : null;
  const live = (L && L.id === l.id && !L.fin) ? L : null;
  const inProgress = !!live || !!rp;
  const stepText = live ? `${live.i + 1}/${live.steps.length}` : rp ? `${rp.i + 1}` : "";
  const status = r?.done ? `<span class="chip good">${Math.round(r.best * 100)}%</span>` : inProgress ? `<span class="chip acc">đang học, bước ${stepText}</span>` : "";
  const sub = !ok && !r?.done ? `Nên học sau ${l.pre.join(", ")}` : l.vi;
  return `<a class="item link" href="#/lesson/${l.id}"><span class="lesson-dot ${r?.done ? "done" : !ok ? "lock" : ""}">${idx + 1}</span>
    <span class="grow"><span class="t" lang="en">${esc(l.title)}</span><br><span class="s">${esc(sub)}</span></span>${status}<span class="chip">${l.level}</span></a>`;
}
function viewPath() {
  const col = (t, title, desc) => {
    const ls = LESSONS.filter(l => l.track === t); const d = ls.filter(l => S.lessons[l.id]?.done).length;
    return `<section class="panel track-${t} stack"><div><div class="row between"><h2>${title}</h2><span class="muted small">${d}/${ls.length} bài</span></div><p class="muted small">${desc}</p></div>
      <div class="list">${ls.map(lessonRow).join("")}</div>
      ${t === "med" ? `<div class="divider"></div><h3>Ca bệnh ảo</h3><div class="list">${CASES.map(c => `<a class="item link" href="#/clinic/${c.id}"><span class="avatar" style="width:34px;height:34px;border-radius:10px;font-size:13px">${c.patient.av}</span><span class="grow"><span class="t">${esc(c.vi)}</span><br><span class="s">Nên học trước ${c.rec.join(", ")}</span></span>${S.cases[c.id] ? `<span class="chip good">${Math.round(S.cases[c.id].best * 100)}%</span>` : ""}</a>`).join("")}</div>` : ""}</section>`;
  };
  return `<section class="page-head"><h1>Lộ trình</h1><p class="lede">Hai mạch học chạy song song. Ngữ pháp học ở bài thông dụng được dùng lại trong bài y khoa cùng cấp độ, ví dụ thì quá khứ và "ago" ở G5 quay lại khi hỏi khởi phát bệnh ở M3.</p></section>
    <div class="grid2">${col("gen", "Tiếng Anh thông dụng", "Giao tiếp hằng ngày, A1 đến A2.")}${col("med", "Tiếng Anh y khoa", "Từ phía bệnh nhân sang phía bác sĩ, bám khung hỏi bệnh SOCRATES.")}</div>`;
}

/* ---------------- Lesson player ---------------- */
let L = null;
const PAIR_ROUNDS = 6;
function buildLesson(l) { return { id:l.id, l, i:0, active:false, steps:[{t:"intro"},{t:"words"},{t:"check",k:"vocab",qs:makeCheck(l)},...l.steps,{t:"done"}], st:{}, res:[], fin:false }; }
function startLesson(id, allowResume=true) {
  const l=LESSON_BY[id]; if(!l) return false;
  const saved=allowResume && S.resume && S.resume.id===id ? S.resume : null;
  L=buildLesson(l);
  if(saved){ L.i=clamp(saved.i,0,L.steps.length-1); L.st=saved.st&&typeof saved.st==="object"?saved.st:{}; L.res=Array.isArray(saved.res)?saved.res.slice(-200):[]; L.active=!!saved.active || L.i>0; }
  return true;
}
function makeCheck(l) {
  return shuffle(l.words).slice(0, 4).map(w => { const opts = shuffle([w.vi, ...shuffle(l.words.filter(x => x !== w)).slice(0, 2).map(x => x.vi)]); return { q: w.w, opts, a: opts.indexOf(w.vi), why: `${w.w} nghĩa là ${w.vi}.` }; });
}
const stState = () => L.st[L.i] || (L.st[L.i] = {});
function result(k, ok) { L.res.push({ k, ok: !!ok }); evidence(k, ok, L.id); }
function stepComplete(step, st) {
  switch (step.t) {
    case "words": return (st.wi || 0) >= L.l.words.length - 1;
    case "check": case "listen": case "read": return step.qs.every((_, i) => st.q && st.q[i] && st.q[i].done);
    case "mcq": case "cloze": case "order": case "dict": case "classify": return !!st.done;
    case "pairs": return (st.round || 0) >= PAIR_ROUNDS;
    default: return true;
  }
}
function viewLesson() {
  if (!L) return `<div class="focus-page"><p>Không tìm thấy bài.</p></div>`;
  const step = L.steps[L.i], st = stState();
  const body = STEP[step.t](step, st);
  const done = stepComplete(step, st);
  const last = step.t === "done";
  const nextLabel = step.t === "intro" ? "Bắt đầu" : step.t === "speak" && !st.checked && !st.self ? "Bỏ qua bước nói" : "Tiếp tục";
  const actions = last ? "" : `<div class="step-actions">${L.i > 0 ? `<button class="btn" data-act="stepBack">Quay lại</button>` : ""}<button class="btn primary" data-act="stepNext" ${done ? "" : "disabled"}>${nextLabel}</button></div>`;
  L.active=L.active||L.i>0||step.t!=="intro"; queueMicrotask(()=>{try{saveResume()}catch{}});
  return `<div class="track-${L.l.track}">${focusBar({ n: L.steps.length, i: L.i }, "Tiến độ bài")}<div class="focus-page"><article class="step-card">${body}</article>${actions}</div></div>`;
}
function choicesHtml(q, qs, qi, en = true) {
  const btns = q.opts.map((o, i) => { const wrong = qs.picked && qs.picked.includes(i), right = qs.done && i === q.a; return `<button class="choice${right ? " right" : ""}${wrong ? " wrong" : ""}" data-act="pick" data-q="${qi}" data-o="${i}" ${qs.done || wrong ? "disabled" : ""} ${en ? 'lang="en"' : ""}>${esc(o)}</button>`; }).join("");
  let fb = "";
  if (qs.done) fb = `<div class="feedback ${qs.ok ? "ok" : "no"}" role="status"><b>${qs.ok ? "Đúng." : "Đáp án: " + esc(q.opts[q.a]) + "."}</b> ${esc(q.why || "")}</div>`;
  else if (qs.picked && qs.picked.length) fb = `<div class="feedback no" role="status"><b>Chưa đúng.</b> Thử thêm một lần.</div>`;
  return `<div class="choices">${btns}</div>${fb}`;
}
function qsBlock(step, st, en = true, hearQ = false) {
  st.q = st.q || [];
  return step.qs.map((q, i) => { const qs = st.q[i] || (st.q[i] = {}); return `<div class="stack"><div class="row"><p class="q" lang="en">${esc(q.q)}</p>${hearQ ? hear(q.q) : ""}</div>${choicesHtml(q, qs, i, en)}</div>`; }).join('<div class="divider"></div>');
}
function pickOpt(q, qs, o, skill) {
  if (qs.done) return; qs.picked = qs.picked || []; if (qs.picked.includes(o)) return;
  if (o === q.a) { qs.done = true; qs.ok = qs.picked.length === 0; result(skill, qs.ok); }
  else { qs.picked.push(o); if (qs.picked.length >= (q.opts.length <= 2 ? 1 : 2)) { qs.done = true; qs.ok = false; result(skill, false); } }
}
function wordDiff(target, input) {
  const T = target.split(/\s+/), tn = T.map(norm), U = norm(input).split(" ").filter(Boolean);
  const m = tn.length, n = U.length, dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) dp[i][j] = tn[i] === U[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const marks = [], extra = []; let i = 0, j = 0;
  while (i < m && j < n) { if (tn[i] === U[j]) { marks.push([T[i], "ok"]); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) { marks.push([T[i], "miss"]); i++; } else { extra.push(U[j]); j++; } }
  while (i < m) marks.push([T[i++], "miss"]); while (j < n) extra.push(U[j++]);
  return { html: marks.map(([w, c]) => `<span class="${c}">${esc(w)}</span>`).join(" ") + (extra.length ? ` <span class="extra">${esc(extra.join(" "))}</span>` : ""), ok: marks.every(x => x[1] === "ok") && !extra.length, hits: marks.filter(x => x[1] === "ok").length, total: m };
}
function coverage(text, kw) { const t = " " + norm(text) + " "; return kw.map(g => g.some(a => t.includes(norm(a).length > 3 ? norm(a) : " " + norm(a) + " "))); }

const STEP = {
  intro() {
    const l = L.l, r = S.lessons[l.id];
    return `<div class="row"><span class="chip acc">${trackName(l.track)}</span><span class="chip">${l.level}</span><span class="chip">khoảng ${l.min} phút</span></div>
      <h1 lang="en">${esc(l.title)}</h1><p class="lede">${esc(l.vi)}</p>
      <div class="soft"><b>Sau bài này bạn có thể:</b> ${esc(l.can)}</div>
      <p class="muted">Bài gồm 6 từ mới, một mẫu câu, nghe hiểu, luyện tập, phát âm và nói. Điểm chỉ tính câu đúng ngay lần đầu. Từ mới vào hàng ôn tập khi bạn học xong bài.</p>
      ${r?.done ? `<p class="muted small">Lần trước bạn đạt ${Math.round(r.best * 100)}%. Học lại không tạo thêm thẻ trùng.</p>` : ""}
      ${!preOk(l) ? `<p class="feedback no">Bài này nên học sau ${l.pre.join(", ")}. Bạn vẫn có thể học trước nếu muốn.</p>` : ""}`;
  },
  words(step, st) {
    const ws = L.l.words, wi = st.wi || 0, w = ws[wi];
    return `<div class="row between"><span class="step-kind">Từ mới ${wi + 1}/${ws.length}</span><div class="row">
        <button class="btn small" data-act="wordNav" data-d="-1" ${wi ? "" : "disabled"}>Từ trước</button><button class="btn small" data-act="wordNav" data-d="1" ${wi < ws.length - 1 ? "" : "disabled"}>Từ sau</button></div></div>
      <div class="row between" style="align-items:flex-start">${specimen(w)}${hear(w.w, "Nghe từ")}</div>
      ${partsHtml(w.parts)}
      <p style="font-size:22px;font-weight:600">${esc(w.vi)}${w.lay ? ` <span class="muted small" lang="en">(lay term: ${esc(w.lay)})</span>` : ""}</p>
      <div class="ex-item"><span class="example" lang="en">${esc(w.ex)}</span><span class="example-vi">${esc(w.exvi)}</span>${hear(w.ex, "Nghe câu")}</div>
      ${w.tip ? `<p class="tip"><b>Mẹo:</b> ${esc(w.tip)}</p>` : ""}
      <p class="muted small">Đọc to từ và câu ví dụ sau khi nghe. Âm tiết được tô vàng là âm tiết mang trọng âm.</p>`;
  },
  check(step, st) { return `<span class="step-kind">Kiểm tra nhanh</span><h2>Chọn nghĩa đúng</h2>${qsBlock(step, st, false, true)}`; },
  pattern(step) {
    return `<span class="step-kind">Mẫu câu</span><h2 lang="en">${esc(step.title)}</h2><p style="font-size:17px;white-space:pre-line">${esc(step.rule)}</p><div class="soft">${esc(step.vi)}</div>
      <div class="ex-list">${step.ex.map(([en, vi]) => `<div class="ex-item"><span class="en" lang="en">${esc(en)}</span><span class="vi">${esc(vi)}</span>${hear(en)}</div>`).join("")}</div>
      <h3>Lỗi người Việt hay gặp</h3><div>${step.pit.map(([x, v, why]) => `<div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(x)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(v)}</span><span class="why">${esc(why)}</span></div>`).join("")}</div>`;
  },
  listen(step, st) {
    const all = step.qs.every((_, i) => st.q && st.q[i] && st.q[i].done); const show = st.show || all;
    const keys = Object.keys(step.who);
    return `<span class="step-kind">Nghe hiểu</span><h2 lang="en">${esc(step.title)}</h2>
      <div class="row"><button class="btn primary" data-act="playDialog">Nghe hội thoại</button><button class="btn" data-act="playDialog" data-slow="1">Nghe chậm</button><button class="btn quiet" data-act="toggleScript" ${all ? "disabled" : ""}>${show ? "Ẩn lời thoại" : "Xem lời thoại"}</button></div>
      ${show ? `<div class="dialogue">${step.lines.map(([spk, en, vi], i) => `<div class="line" id="ln-${i}"><span class="who">${esc(step.who[spk])}</span><div><div class="en" lang="en">${esc(en)}</div><div class="vi">${esc(vi)}</div></div>${hear(en, "Nghe câu", `data-who="${keys.indexOf(spk) % 2}"`)}</div>`).join("")}</div>`
        : `<p class="muted small">Nghe trước rồi trả lời. Nếu xem lời thoại trước khi trả lời, câu đó được tính vào kỹ năng đọc thay vì nghe.</p>`}
      <div class="divider"></div>${qsBlock(step, st)}`;
  },
  read(step, st) {
    return `<span class="step-kind">Đọc hiểu</span><h2 lang="en">${esc(step.title)}</h2><div class="row" style="align-items:flex-start"><p class="example" lang="en" style="flex:1">${esc(step.text)}</p>${hear(step.text)}</div>
      <button class="btn quiet small" data-act="toggleVi">${st.vi ? "Ẩn nghĩa" : "Xem nghĩa tiếng Việt"}</button>${st.vi ? `<p class="example-vi">${esc(step.vi)}</p>` : ""}
      <div class="divider"></div>${qsBlock(step, st)}`;
  },
  mcq(step, st) { return `<span class="step-kind">${KIND[step.k]}</span><p class="q" lang="en" style="font-size:22px">${esc(step.q)}</p>${choicesHtml(step, st, -1)}`; },
  cloze(step, st) {
    const shown = st.done ? (step.opts ? step.opts[step.a] : step.a[0]) : "";
    const sent = esc(step.s).replace("___", `<span class="gap">${shown ? esc(shown) : "&nbsp;"}</span>`);
    if (step.opts) return `<span class="step-kind">${KIND[step.k]}</span><p class="muted">Chọn từ điền vào chỗ trống.</p><p class="cloze" lang="en">${sent}</p>${choicesHtml({ opts: step.opts, a: step.a, why: step.why }, st, -1)}`;
    return `<span class="step-kind">${KIND[step.k]}</span><p class="muted">Gõ từ còn thiếu.</p><p class="cloze" lang="en">${sent}</p>
      <div class="row"><input class="field" id="ans" style="flex:1;min-width:180px" value="${esc(st.val || "")}" data-enter="checkCloze" ${st.done ? "disabled" : "data-autofocus"} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" aria-label="Từ còn thiếu"><button class="btn primary" data-act="checkCloze" ${st.done ? "disabled" : ""}>Kiểm tra</button></div>
      ${st.done ? `<div class="feedback ${st.ok ? "ok" : "no"}" role="status"><b>${st.ok ? (st.typo ? "Đúng, chỉ sai chính tả nhẹ." : "Đúng.") : "Đáp án: " + esc(step.a[0]) + "."}</b> ${esc(step.why)}</div>` : st.tries ? `<div class="feedback no" role="status"><b>Chưa đúng.</b> Thử lại một lần.</div>` : ""}`;
  },
  order(step, st) {
    if (!st.pool) { st.pool = shuffle([...step.tiles, ...(step.extra || [])]); st.ans = []; }
    const join = step.join ?? " ", target = step.tiles.join(join);
    return `<span class="step-kind">${KIND[step.k]}</span><p class="muted">${step.join === "" ? "" : "Sắp xếp thành câu:"} <b>${esc(step.vi)}</b></p>
      <div class="tiles answer" aria-label="Câu của bạn">${st.ans.map((k, i) => `<button class="tile" data-act="tileOut" data-i="${i}" ${st.done ? "disabled" : ""} lang="en">${esc(st.pool[k])}</button>`).join("") || '<span class="muted small" style="padding:8px">Chạm vào các ô bên dưới theo đúng thứ tự.</span>'}</div>
      <div class="tiles" aria-label="Các ô chữ">${st.pool.map((t, k) => `<button class="tile ${st.ans.includes(k) ? "used" : ""}" data-act="tileIn" data-k="${k}" ${st.done || st.ans.includes(k) ? "disabled" : ""} lang="en">${esc(t)}</button>`).join("")}</div>
      <div class="row"><button class="btn" data-act="tileReset" ${st.done ? "disabled" : ""}>Xếp lại</button><button class="btn primary" data-act="checkOrder" ${st.done || !st.ans.length ? "disabled" : ""}>Kiểm tra</button></div>
      ${st.done ? `<div class="feedback ${st.ok ? "ok" : "no"}" role="status"><b>${st.ok ? "Đúng." : "Đáp án:"}</b> <span lang="en" class="en">${esc(target)}</span></div>${join === " " ? `<div>${hear(target)}</div>` : ""}` : st.tries ? `<div class="feedback no" role="status"><b>Chưa đúng.</b> Thử sắp xếp lại.</div>` : ""}`;
  },
  dict(step, st) {
    return `<span class="step-kind">Nghe và chép</span><p class="muted">Nghe câu rồi gõ lại đúng từng từ. Không cần viết hoa hay dấu câu.</p>
      <div class="row"><button class="btn primary" data-act="sayStep">Nghe câu</button><button class="btn" data-act="sayStep" data-slow="1">Nghe chậm</button></div>
      <div class="row"><input class="field" id="ans" style="flex:1;min-width:220px" value="${esc(st.val || "")}" data-enter="checkDict" ${st.done ? "disabled" : ""} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" aria-label="Câu bạn nghe được"><button class="btn primary" data-act="checkDict" ${st.done ? "disabled" : ""}>Kiểm tra</button></div>
      ${st.diff ? `<div class="stack"><p class="diff" lang="en">${st.diff}</p>${st.done ? `<div class="feedback ${st.ok ? "ok" : "no"}" role="status"><b>${st.ok ? "Chính xác." : "Câu đúng:"}</b> <span class="en" lang="en">${esc(step.s)}</span><br><span class="muted">${esc(step.vi)}</span></div>` : `<div class="feedback no" role="status"><b>Còn thiếu hoặc sai</b> ở các từ gạch chân. Nghe lại và sửa một lần.</div>`}</div>` : ""}`;
  },
  classify(step, st) {
    st.pick = st.pick || {};
    const allPicked = step.items.every((_, i) => st.pick[i] !== undefined);
    return `<span class="step-kind">${KIND[step.k]}</span><h2 lang="en">${esc(step.title)}</h2><p class="muted">${esc(step.q)}</p>
      <div class="classify">${step.items.map(([text, ans], i) => `<div class="cls-row"><span class="en" lang="en">${esc(text)}</span>${step.k === "pron" ? hear(text) : ""}<div class="seg" role="group" aria-label="${esc(text)}">${step.opts.map((o, j) => {
        const c = st.done ? (j === ans ? "right" : st.pick[i] === j ? "wrong" : "") : st.pick[i] === j ? "pick" : "";
        return `<button class="${c}" data-act="clsPick" data-i="${i}" data-j="${j}" ${st.done ? "disabled" : ""} aria-pressed="${st.pick[i] === j}">${esc(o)}</button>`;
      }).join("")}</div></div>`).join("")}</div>
      ${st.done ? `<div class="feedback ${st.ok >= 0.8 ? "ok" : "no"}" role="status"><b>Đúng ${Math.round(st.ok * step.items.length)}/${step.items.length}.</b> ${esc(step.why)}</div>` : `<div><button class="btn primary" data-act="checkCls" ${allPicked ? "" : "disabled"}>Kiểm tra</button></div>`}`;
  },
  pairs(step, st) {
    const P = PAIRS[step.set]; st.round = st.round || 0; st.ok = st.ok || 0;
    if (st.round >= PAIR_ROUNDS) return `<span class="step-kind">Phát âm</span><h2>Phân biệt ${esc(P.title)}</h2><div class="row"><div class="result-num">${st.ok}/${PAIR_ROUNDS}</div><p class="muted">lượt nghe đúng</p></div><p class="tip">${esc(P.tip)}</p><p class="muted small">Muốn luyện thêm và tự ghi âm, vào mục Phát âm.</p>`;
    if (!st.cur) st.cur = { p: Math.floor(Math.random() * P.pairs.length), w: Math.round(Math.random()) };
    const pair = P.pairs[st.cur.p], target = pair[st.cur.w];
    return `<span class="step-kind">Phát âm, lượt ${st.round + 1}/${PAIR_ROUNDS}</span><h2>Bạn nghe thấy từ nào? ${esc(P.title)}</h2><p class="tip">${esc(P.tip)}</p>
      <div><button class="btn primary" data-act="pairPlay">Nghe từ</button></div>
      <div class="grid2">${pair.map((w, i) => `<button class="choice${st.ans != null ? (i === st.cur.w ? " right" : st.ans === i ? " wrong" : "") : ""}" style="font-size:28px;text-align:center" data-act="pairPick" data-i="${i}" ${st.ans != null ? "disabled" : ""} lang="en">${esc(w)}</button>`).join("")}</div>
      ${st.ans != null ? `<div class="feedback ${st.ans === st.cur.w ? "ok" : "no"}" role="status"><b>${st.ans === st.cur.w ? "Đúng." : "Chưa đúng."}</b> Từ vừa đọc là <b lang="en">${esc(target)}</b>.</div>
        <div class="row">${hear(pair[0])}<span lang="en" class="en">${esc(pair[0])}</span>${hear(pair[1])}<span lang="en" class="en">${esc(pair[1])}</span><button class="btn primary" data-act="pairNext" style="margin-left:auto">Lượt tiếp</button></div>` : ""}`;
  },
  speak(step, st) {
    const owner = L.id + ":" + L.i;
    const recMine = REC.owner === owner;
    return `<span class="step-kind">Nói</span><h2 lang="en">${esc(step.title)}</h2><p class="q" lang="en">${esc(step.prompt)}</p><p class="muted">${esc(step.vi)}</p>
      <div class="checklist" aria-label="Các ý cần có">${step.labels.map((lab, i) => `<span class="chip ${st.cov && st.cov[i] ? "good" : ""}">${st.cov && st.cov[i] ? "✓ " : ""}${esc(lab)}</span>`).join("")}</div>
      <div class="rec-row">
        ${SR ? `<button class="btn primary" data-act="asrSpeak">${ic("mic")} ${ASR.on ? "Đang nghe…" : "Nói để máy nghe"}</button>` : ""}
        ${REC_OK ? `<button class="btn" data-act="${REC.mr && recMine ? "recStop" : "recStart"}">${REC.mr && recMine ? '<span class="rec-dot"></span> Dừng ghi' : "Ghi âm"}</button>` : ""}
        ${REC.url && recMine ? `<button class="btn" data-act="recPlay">Nghe lại bản ghi</button>` : ""}
      </div>
      ${!SR ? `<p class="muted small">Trình duyệt này chưa nhận dạng giọng nói. Hãy ghi âm, nghe lại so với câu mẫu, hoặc gõ câu trả lời để máy kiểm tra ý.</p>` : ""}
      ${st.heard ? `<div class="soft"><span class="muted small">Máy nghe được</span><p class="example" lang="en">${esc(st.heard)}</p></div>` : ""}
      <label class="muted small" for="spk">Hoặc gõ câu trả lời</label>
      <textarea class="field" id="spk" lang="en" autocapitalize="sentences" spellcheck="false">${esc(st.typed || "")}</textarea>
      <div class="row"><button class="btn" data-act="checkSpeak">Kiểm tra các ý</button>${REC.url && recMine && !st.checked && !st.self ? `<button class="btn quiet" data-act="selfSpeak">Tôi đã nói đủ ý (tự đánh giá)</button>` : ""}</div>
      ${st.checked ? `<div class="feedback ${st.ratio >= 0.75 ? "ok" : "no"}" role="status"><b>Có ${st.cov.filter(Boolean).length}/${st.cov.length} ý.</b> ${st.ratio >= 0.75 ? "Tốt. So sánh với câu mẫu để nói tự nhiên hơn." : "Xem câu mẫu, nghe và thử lại."} <span class="muted small">Tính vào kỹ năng ${st.src === "asr" ? "nói" : "viết"}.</span></div>` : ""}
      ${st.self ? `<div class="feedback ok" role="status">Đã ghi nhận tự đánh giá. So với câu mẫu để tự sửa.</div>` : ""}
      <details ${st.checked || st.self ? "open" : ""}><summary class="btn quiet small" style="display:inline-flex">Câu mẫu</summary>
        <div class="ex-list" style="margin-top:10px">${step.models.map(m => `<div class="ex-item"><span class="en" lang="en">${esc(m)}</span>${hear(m)}</div>`).join("")}</div>
        <div style="margin-top:8px"><button class="btn small" data-act="say" data-text="${esc(step.models.join(" "))}">Nghe cả đoạn mẫu</button></div></details>`;
  },
  done() {
    const l = L.l;
    if (!L.fin) {
      L.fin = true; const total = L.res.length, ok = L.res.filter(r => r.ok).length, score = total ? ok / total : 1;
      const prev = S.lessons[l.id]; S.lessons[l.id] = { done: true, best: Math.max(prev?.best || 0, score), last: Date.now(), n: (prev?.n || 0) + 1 };
      L.added = addLessonCards(l); L.score = score; L.ok = ok; L.total = total; clearResume(); save();
    }
    const by = {}; L.res.forEach(r => { by[r.k] = by[r.k] || [0, 0]; by[r.k][1]++; if (r.ok) by[r.k][0]++; });
    const next = LESSONS.find(x => x.track === l.track && !S.lessons[x.id]?.done);
    return `<span class="step-kind">Hoàn thành</span><h1 lang="en">${esc(l.title)}</h1>
      <div class="row" style="gap:18px"><div class="result-num">${Math.round(L.score * 100)}%</div><p class="muted">đúng ngay lần đầu<br>${L.ok}/${L.total} câu</p></div>
      <div>${Object.entries(by).map(([k, [o, n]]) => `<div class="skill"><span>${KIND[k]}</span><div class="bar"><i style="width:${o / n * 100}%"></i></div><span class="n">${o}/${n}</span></div>`).join("")}</div>
      <div class="soft">${L.added ? `${L.added} thẻ mới (nhận diện và gõ lại) đã vào hàng ôn tập. Ôn ngay bây giờ giúp đưa từ vừa học vào trí nhớ.` : "Các từ của bài này đã có trong hàng ôn tập, lịch ôn không bị thay đổi."}</div>
      <div class="row"><a class="btn primary" href="#/review/go">Ôn ngay</a>${next ? `<a class="btn" href="#/lesson/${next.id}">Bài tiếp: ${next.id}</a>` : ""}<a class="btn quiet" href="#/today">Về Hôm nay</a></div>`;
  }
};


/* v3.2: live input synchronization */
function syncLessonInput(el){if(!L||!el)return;const st=stState();if(el.id==="writeIn"||el.id==="ans")st.val=el.value||"";if(el.id==="spk")st.typed=el.value||"";L.active=true;if(el.id==="writeIn"){const out=document.getElementById("writeCount");if(out)out.textContent=`${norm(st.val).split(" ").filter(Boolean).length} từ`;}try{saveResume()}catch{}}
document.addEventListener("input",e=>{const el=e.target.closest("#writeIn,#ans,#spk");if(el)syncLessonInput(el)},{capture:true});
document.addEventListener("change",e=>{const el=e.target.closest("#writeIn,#ans,#spk");if(el)syncLessonInput(el)},{capture:true});
document.addEventListener("click",e=>{const el=e.target.closest("[data-act]");if(!el||el.dataset.act!=="discardResume")return;e.preventDefault();if(S.resume&&S.resume.id===el.dataset.id){clearResume();if(L&&L.id===el.dataset.id&&!L.fin)L=null;render(true);}} ,{capture:true});
