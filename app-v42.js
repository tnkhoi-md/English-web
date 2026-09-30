/* ============================================================
   v4.2 · Lộ trình theo chặng đồng bộ với thư viện; ngân hàng bài tập
   ngữ pháp 10–16 câu mỗi điểm; bài kiểm tra chặng; 9 dạng bài tập.
   Nạp SAU app-v41.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.2"; APP.build = "02.10.26";

/* ---------------- Data wiring ---------------- */
const UNIT_BY = Object.fromEntries(UNITS.map(u => [u.id, u]));
UNITS.forEach(u => { u.cases = u.cases || []; u.pron = u.pron || []; });
function parseBank(txt) {
  return (txt || "").split("\n").map(l => l.trim()).filter(Boolean).map(l => {
    const p = l.split("|"); const t = p[0];
    if (t === "c" || t === "x") return { t, q: p[1], opts: p[2].split(" / "), a: +p[3], why: p[4] || "" };
    if (t === "t") return { t, q: p[1], ans: p[2].split(";"), why: p[3] || "" };
    if (t === "f") return { t, s: p[1], wrong: p[2], fix: p[3], why: p[4] || "" };
    if (t === "o") return { t, s: p[1], why: p[2] || "" };
    return null;
  }).filter(Boolean);
}
GRAMMAR.forEach(g => { g.bank = parseBank(GRAMMAR_BANK[g.id]); });
function unitWords(u) { const seen = new Set(), out = []; u.vocab.forEach(([tid, l]) => (LIB_BY[tid]?.words || []).forEach(w => { if (w.lvl === l && !seen.has(w.key)) { seen.add(w.key); out.push(w); } })); return out; }
const unitsOf = track => UNITS.filter(u => u.track === track);
const unitsWithTopic = tid => UNITS.filter(u => u.vocab.some(([t]) => t === tid));
const unitsWithGrammar = gid => UNITS.filter(u => u.grammar.includes(gid));
const gramPassed = id => (S.gram[id]?.best || 0) >= 0.7;
function unitParts(u) {
  const ws = unitWords(u), vd = ws.filter(isLearned).length;
  const parts = [];
  if (u.lessons.length) parts.push({ k: "lessons", label: "Bài học", d: u.lessons.filter(id => S.lessons[id]?.done).length, n: u.lessons.length });
  if (ws.length) parts.push({ k: "vocab", label: "Từ vựng", d: vd, n: ws.length });
  if (u.grammar.length) parts.push({ k: "grammar", label: "Ngữ pháp", d: u.grammar.filter(gramPassed).length, n: u.grammar.length });
  if (u.cases.length) parts.push({ k: "cases", label: "Ca bệnh", d: u.cases.filter(id => S.cases[id]).length, n: u.cases.length });
  const tb = S.utest[u.id]?.best || 0; parts.push({ k: "test", label: "Kiểm tra chặng", d: Math.min(1, tb / 0.8), n: 1, best: tb });
  const pct = parts.reduce((a, p) => a + p.d / p.n, 0) / parts.length;
  return { parts, pct, words: ws };
}
function currentUnit(track) {
  const us = unitsOf(track); const gi = track === "gen" ? CEFR_IDS.indexOf(S.goals.gen.level) : 0;
  return us.find(u => (track !== "gen" || CEFR_IDS.indexOf(u.level) >= gi) && unitParts(u).pct < 0.8) || null;
}

/* ---------------- State ---------------- */
const _san42 = sanitize;
sanitize = function (raw) {
  const s = _san42(raw); s.utest = {};
  if (raw && raw.utest && typeof raw.utest === "object") for (const [k, v] of Object.entries(raw.utest)) if (UNIT_BY[k] && v) s.utest[k] = { best: clamp(num(v.best), 0, 1), n: Math.max(0, Math.round(num(v.n))), last: num(v.last) };
  return s;
};
const _fresh42 = fresh; fresh = () => { const s = _fresh42(); s.utest = {}; return s; };
S = load();
const _merge42 = mergeState;
mergeState = function (a, b) { const m = _merge42(a, b); m.utest = { ...(a.utest || {}) }; for (const [k, v] of Object.entries(b.utest || {})) { const x = m.utest[k]; m.utest[k] = !x ? v : { best: Math.max(x.best, v.best), n: Math.max(x.n, v.n), last: Math.max(x.last, v.last) }; } return m; };

/* ---------------- Routes ---------------- */
const _isFocus42 = isFocus, _isStudy42 = isStudyRoute;
isFocus = () => _isFocus42() || ROUTE.name === "practice";
isStudyRoute = () => _isStudy42() || ROUTE.name === "practice";
addEventListener("hashchange", () => { if (ROUTE.name !== "practice") PX = null; });

/* ---------------- Path: unit roadmap ---------------- */
const PF = { track: "gen" };
function unitNode(u, cur) {
  const { parts, pct } = unitParts(u); const done = pct >= 0.8, isCur = cur && cur.id === u.id;
  return `<a class="unode ${done ? "done" : ""} ${isCur ? "cur" : ""}" href="#/unit/${u.id}" style="--tc:${u.color}">
    <span class="udot">${done ? "✓" : esc(u.code)}</span>
    <span class="ubody"><span class="row between"><span><b lang="en">${esc(u.title)}</b> <span class="muted small">${esc(u.vi)}</span></span><span class="chip ${done ? "good" : isCur ? "acc" : ""}">${isCur ? "đang học, " : ""}${Math.round(pct * 100)}%</span></span>
      <span class="muted small">${esc(u.goal)}</span>
      <span class="uparts">${parts.map(p => `<span class="upart"><small>${p.label}</small><span class="meter"><i style="width:${p.d / p.n * 100}%"></i></span><small>${p.k === "test" ? (p.best ? Math.round(p.best * 100) + "%" : "chưa làm") : p.d + "/" + p.n}</small></span>`).join("")}</span></span></a>`;
}
viewPath = function () {
  const tr = PF.track, us = unitsOf(tr), cur = currentUnit(tr);
  const seg = [["gen", "Tiếng Anh phổ thông"], ["med", "Tiếng Anh y khoa"]].map(([id, l]) => `<button data-act="pathTrack" data-t="${id}" aria-pressed="${tr === id}">${l}</button>`).join("");
  const byLevel = tr === "gen" ? ["A1", "A2", "B1", "B2", "C1"] : ["T1", "T2"];
  const skipped = tr === "gen" ? CEFR_IDS.indexOf(S.goals.gen.level) : 0;
  return `<section class="page-head"><h1>Lộ trình</h1><p class="lede">Mỗi chặng gom đúng bài học, bộ từ vựng trong thư viện, điểm ngữ pháp, phát âm và ca bệnh cùng cấp độ, kết thúc bằng bài kiểm tra chặng. Hoàn thành 80% là qua chặng. “Học từ mới” mỗi ngày lấy từ của chặng đang học.</p></section>
    <div class="filterbar"><div class="seg-tog" role="group" aria-label="Mạch học">${seg}</div>${cur ? `<a class="btn primary" href="#/unit/${cur.id}">Tiếp tục chặng ${esc(cur.code)}</a>` : ""}</div>
    ${tr === "gen" && skipped > 1 ? `<p class="muted small">Trình độ hiện tại của bạn là ${S.goals.gen.level}: các chặng thấp hơn được xem là ôn tập, không bắt buộc.</p>` : ""}
    ${byLevel.map(l => { const xs = us.filter(u => u.level === l); return xs.length ? `<h2 class="sec-h"><span class="lv lv-${l}">${lvName(l)}</span> ${tr === "gen" ? CEFR.find(c => c[0] === l)[1] : l === "T1" ? "Nền tảng y khoa" : "Mở rộng"}</h2><div class="roadmap">${xs.map(u => unitNode(u, cur)).join("")}</div>` : ""; }).join("")}`;
};

/* ---------------- Unit page ---------------- */
function viewUnit() {
  const u = UNIT_BY[ROUTE.arg]; if (!u) return `<div class="empty"><p>Không tìm thấy chặng.</p><a class="btn" href="#/path">Về lộ trình</a></div>`;
  const { parts, pct, words } = unitParts(u); const fresh = words.filter(w => wStatus(w) === "new").length;
  const next = (() => {
    const l = u.lessons.find(id => !S.lessons[id]?.done); if (l) return [`Học bài ${l}`, `#/lesson/${l}`];
    if (fresh) return [`Học từ mới của chặng (${Math.min(fresh, S.goals.newPerDay)} từ)`, `#/learn/u-${u.id}`];
    const g = u.grammar.find(id => !gramPassed(id)); if (g) return [`Luyện ngữ pháp: ${GRAMMAR_BY[g].title}`, `#/grammar/${g}`];
    const c = u.cases.find(id => !S.cases[id]); if (c) return [`Khám ca: ${CASE_BY[c].vi}`, `#/clinic/${c}`];
    return [(S.utest[u.id]?.best || 0) >= 0.8 ? "Làm lại bài kiểm tra chặng" : "Làm bài kiểm tra chặng", `#/practice/u-${u.id}`];
  })();
  const us = unitsOf(u.track), i = us.indexOf(u), prev = us[i - 1], nxt = us[i + 1];
  const sets = u.vocab.map(([tid, l]) => { const t = LIB_BY[tid]; if (!t) return ""; const ws = t.words.filter(w => w.lvl === l); if (!ws.length) return ""; const c = coverage2(ws); return `<a class="uset" href="#/library/${tid}" style="--tc:${t.color}"><span class="ti">${t.icon}</span><span class="grow"><b lang="en">${esc(t.title)}</b> <span class="lv lv-${l}">${lvName(l)}</span><br><span class="muted small">${esc(t.vi)}</span><span class="meter"><i style="width:${c.p * 100}%"></i></span></span><span class="muted small">${c.d}/${c.n}</span></a>`; }).join("");
  const tb = S.utest[u.id];
  return `<section class="page-head" style="--tc:${u.color}"><a class="muted small" href="#/path">Lộ trình</a>
      <div class="row" style="gap:14px"><span class="ti big">${u.icon}</span><div><span class="lv lv-${u.level}">${esc(u.code)}</span><h1 lang="en">${esc(u.title)}</h1><p class="lede" style="margin:0">${esc(u.vi)}</p></div></div>
      <p>${esc(u.goal)}</p><div class="meter lg"><i style="width:${pct * 100}%"></i></div><p class="muted small">Hoàn thành ${Math.round(pct * 100)}%. Qua chặng khi đạt 80%.</p>
      <div class="row"><a class="btn primary" href="${next[1]}">${esc(next[0])}</a></div></section>
    <div class="uparts big">${parts.map(p => `<div class="panel tight upart"><small>${p.label}</small><b>${p.k === "test" ? (p.best ? Math.round(p.best * 100) + "%" : "chưa làm") : p.d + "/" + p.n}</b><span class="meter"><i style="width:${p.d / p.n * 100}%"></i></span></div>`).join("")}</div>
    ${u.lessons.length ? `<section class="panel stack" style="margin-top:14px"><h3>📖 Bài học</h3><div class="list">${u.lessons.map(id => lessonRow(LESSON_BY[id], LESSONS.filter(x => x.track === u.track).indexOf(LESSON_BY[id]))).join("")}</div></section>` : ""}
    ${sets ? `<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤 Từ vựng của chặng</h3>${fresh ? `<a class="btn small primary" href="#/learn/u-${u.id}">Học từ mới (${Math.min(fresh, S.goals.newPerDay)})</a>` : `<span class="chip good">đã học hết ${words.length} từ</span>`}</div><p class="muted small">${words.length} từ lấy trực tiếp từ Thư viện từ vựng. Học ở đây hay trong thư viện đều cộng vào cùng một tiến độ.</p><div class="usets">${sets}</div></section>` : ""}
    ${u.grammar.length ? `<section class="panel stack" style="margin-top:14px"><h3>📐 Ngữ pháp</h3><div class="list">${u.grammar.map(id => { const g = GRAMMAR_BY[id], r = S.gram[id]; return `<div class="item"><span class="lv lv-${g.lvl}">${g.lvl}</span><a class="grow" href="#/grammar/${id}" style="color:inherit;text-decoration:none"><span class="t" lang="en">${esc(g.title)}</span><br><span class="s">${esc(g.vi)}, ${g.bank.length} câu luyện</span></a>${r ? `<span class="chip ${r.best >= 0.7 ? "good" : "acc"}">${Math.round(r.best * 100)}%</span>` : ""}<a class="btn small" href="#/practice/g-${id}">Luyện</a></div>`; }).join("")}</div></section>` : ""}
    ${u.pron.length ? `<section class="panel stack" style="margin-top:14px"><h3>🔊 Phát âm</h3><div class="row">${u.pron.map(id => { const c = PRON_BANK.find(x => x.id === id); return c ? `<a class="chip tpc" style="--tc:${c.color}" href="#/pron/${id}">${c.icon} ${esc(c.title)}</a>` : ""; }).join("")}</div></section>` : ""}
    ${u.cases.length ? `<section class="panel stack track-med" style="margin-top:14px"><h3>🩺 Ca bệnh ảo</h3><div class="list">${u.cases.map(id => { const c = CASE_BY[id], r = S.cases[id]; return `<a class="item link" href="#/clinic/${id}"><span class="avatar" style="width:36px;height:36px;font-size:13px;border-radius:10px">${c.patient.av}</span><span class="grow"><span class="t">${esc(c.vi)}</span></span>${r ? `<span class="chip good">${Math.round(r.best * 100)}%</span>` : `<span class="chip">chưa khám</span>`}</a>`; }).join("")}</div></section>` : ""}
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🏁 Bài kiểm tra chặng</h3>${tb ? `<span class="chip ${tb.best >= 0.8 ? "good" : "acc"}">tốt nhất ${Math.round(tb.best * 100)}%</span>` : ""}</div><p class="muted">Trộn từ vựng của chặng (chọn nghĩa, chọn từ, nghe, viết chính tả) và câu hỏi ngữ pháp. Đạt từ 80% là qua phần kiểm tra.</p><div><a class="btn primary" href="#/practice/u-${u.id}">Làm bài kiểm tra</a></div></section>
    <div class="row between" style="margin-top:16px">${prev ? `<a class="btn" href="#/unit/${prev.id}">Chặng trước: ${esc(prev.code)}</a>` : "<span></span>"}${nxt ? `<a class="btn" href="#/unit/${nxt.id}">Chặng sau: ${esc(nxt.code)}</a>` : ""}</div>`;
}

/* ---------------- Intake & plan follow the current unit ---------------- */
intakeItem = function () {
  const left = S.goals.newPerDay - todayIntake(); if (left <= 0) return null;
  const x = S.intake[dayKey()] || { gen: 0, med: 0 };
  const order = x.gen < x.med || (x.gen === x.med && new Date().getDate() % 2 === 0) ? ["gen", "med"] : ["med", "gen"];
  for (const tr of order) { const u = currentUnit(tr); if (!u) continue; const n = Math.min(left, unitWords(u).filter(w => wStatus(w) === "new").length); if (n) return { kind: "intake", track: tr, short: `học ${n} từ mới`, title: `${n} từ mới: chặng ${u.code}`, why: `Từ vựng của chặng “${u.vi}”. Hôm nay đã nạp ${todayIntake()}/${S.goals.newPerDay} từ.`, href: `#/learn/u-${u.id}`, cta: "Học từ mới", est: Math.max(3, Math.round(n * 0.5)) }; }
  return null;
};
const _plan42 = planToday;
planToday = function () {
  const items = _plan42(); if (items.length >= 4) return items;
  const u = currentUnit("gen"); if (!u) return items;
  const g = u.grammar.find(id => !gramPassed(id));
  if (g && !items.some(i => i.href === `#/grammar/${g}`)) items.push({ kind: "grammar", track: "gen", short: `luyện ngữ pháp ${GRAMMAR_BY[g].title}`, title: `Ngữ pháp: ${GRAMMAR_BY[g].title}`, why: `Thuộc chặng ${u.code}. ${GRAMMAR_BY[g].bank.length} câu luyện, cần đạt 70%.`, href: `#/grammar/${g}`, cta: "Học ngữ pháp", est: 10 });
  else if (!g) { const p = unitParts(u); const vocab = p.parts.find(x => x.k === "vocab"); if ((!vocab || vocab.d / vocab.n >= 0.8) && (S.utest[u.id]?.best || 0) < 0.8) items.push({ kind: "test", track: "gen", short: `kiểm tra chặng ${u.code}`, title: `Kiểm tra chặng ${u.code}`, why: "Bạn đã học gần đủ từ vựng và ngữ pháp của chặng.", href: `#/practice/u-${u.id}`, cta: "Làm bài", est: 10 }); }
  return items.slice(0, 4);
};
const _startLearn42 = startLearn;
startLearn = function (tid) {
  if (!tid.startsWith("u-")) return _startLearn42(tid);
  const u = UNIT_BY[tid.slice(2)]; if (!u) return false;
  const n = Math.max(3, S.goals.newPerDay - todayIntake());
  const words = unitWords(u).filter(w => wStatus(w) === "new").slice(0, n);
  LN = { tid, t: { id: tid, track: u.track, title: `${u.code} ${u.title}`, vi: u.vi, icon: u.icon, color: u.color, words: unitWords(u) }, words, i: 0, phase: "ask", choice: null, added: 0, known: 0 };
  return true;
};
const _viewLearn42 = viewLearn;
viewLearn = () => { let h = _viewLearn42(); if (ROUTE.arg.startsWith("u-")) { const uid = ROUTE.arg.slice(2); h = h.split(`href="#/library/${ROUTE.arg}"`).join(`href="#/unit/${uid}"`).replace(">Về chủ đề<", ">Về chặng<"); if (LN && LN.words[LN.i]) { const w = LN.words[LN.i]; h = h.replace(`${LN.t.icon} ${esc(LN.t.vi)}`, `${w.topic.icon} ${esc(w.topic.vi)}`); } } return h; };

/* ---------------- Library & grammar show their units ---------------- */
const unitLinks = us => us.map(u => `<a class="chip tpc" style="--tc:${u.color}" href="#/unit/${u.id}">${u.icon} ${esc(u.code)} ${esc(u.vi)}</a>`).join("");
const _viewLibrary42 = viewLibrary;
viewLibrary = function () { let h = _viewLibrary42(); if (ROUTE.arg && LIB_BY[ROUTE.arg]) { const us = unitsWithTopic(ROUTE.arg); if (us.length) h = h.replace('<div class="meter lg">', `<div class="row" style="gap:6px"><span class="muted small">Thuộc chặng:</span>${unitLinks(us)}</div><div class="meter lg">`); } return h; };
viewGrammarPoint = function (g) {
  const i = GRAMMAR.indexOf(g), prev = GRAMMAR[i - 1], next = GRAMMAR[i + 1], r = S.gram[g.id], us = unitsWithGrammar(g.id);
  const types = [...new Set(g.bank.map(b => b.t))].map(t => PX_LABEL[t]).join(", ");
  return `<section class="page-head"><a class="muted small" href="#/grammar">Thư viện ngữ pháp</a><div class="row"><span class="lv lv-${g.lvl}">${g.lvl}</span><span class="exrow">${g.exams.map(e => `<span class="exm exm-${e}">${e}</span>`).join("")}</span></div><h1 lang="en">${esc(g.title)}</h1><p class="lede">${esc(g.vi)}</p>${us.length ? `<div class="row" style="gap:6px"><span class="muted small">Thuộc chặng:</span>${unitLinks(us)}</div>` : ""}</section>
    <div class="grid2"><section class="panel stack track-gen accent"><h3>Công thức</h3><p style="white-space:pre-line">${esc(g.form)}</p></section><section class="panel stack"><h3>Cách dùng</h3><p>${esc(g.use)}</p></section></div>
    <section class="panel stack" style="margin-top:14px"><h3>Ví dụ</h3><div class="ex-list">${g.ex.map(([en, vi]) => `<div class="ex-item"><span class="en" lang="en">${esc(en)}</span><span class="vi">${esc(vi)}</span>${hear(en)}</div>`).join("")}</div></section>
    <section class="panel stack" style="margin-top:14px"><h3>Lỗi sai thường gặp</h3><div>${g.err.map(([x, v, why]) => `<div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(x)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(v)}</span><span class="why">${esc(why)}</span></div>`).join("")}</div></section>
    <section class="panel stack practice-cta" style="margin-top:14px"><div class="row between"><h3>✍️ Luyện tập</h3>${r ? `<span class="chip ${r.best >= 0.7 ? "good" : "acc"}">tốt nhất ${Math.round(r.best * 100)}%, ${r.n} lượt</span>` : `<span class="chip">chưa luyện</span>`}</div>
      <p class="muted">${g.bank.length} câu gồm các dạng: ${types}. Đạt từ 70% là qua điểm ngữ pháp này.</p>
      <div class="row"><a class="btn primary" href="#/practice/g-${g.id}">Luyện đầy đủ (${g.bank.length} câu)</a><a class="btn" href="#/practice/q-${g.id}">Kiểm tra nhanh (${Math.min(8, g.bank.length)} câu ngẫu nhiên)</a></div></section>
    <div class="row between" style="margin-top:16px">${prev ? `<a class="btn" href="#/grammar/${prev.id}">Điểm trước: ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn primary" href="#/grammar/${next.id}">Điểm tiếp: ${esc(next.title)}</a>` : ""}</div>`;
};
const _viewGrammar42 = viewGrammar;
viewGrammar = () => ROUTE.arg ? _viewGrammar42() : _viewGrammar42().replace(/<span class="muted small">([^<]*)<\/span><span class="exrow">/g, (m, vi) => m).replace(/href="#\/grammar\/([\w-]+)"><div class="row between">/g, (m, id) => m + "").replace(/(<a class="gcard" href="#\/grammar\/([\w-]+)">[\s\S]*?<span class="muted small">[^<]*)<\/span>/g, (m, pre, id) => `${pre}, ${GRAMMAR_BY[id].bank.length} câu luyện</span>`);

/* ---------------- Practice engine (9 exercise types) ---------------- */
const PX_LABEL = { c: "chọn đáp án", x: "chọn câu đúng", t: "điền dạng đúng", f: "tìm lỗi sai", o: "sắp xếp câu", m: "chọn nghĩa", r: "chọn từ tiếng Anh", l: "nghe và chọn", s: "viết đúng chính tả" };
let PX = null;
function vocabItems(words, pool) {
  const ws = words.filter(w => !/·/.test(w.w)); const P = (pool || ws).filter(w => !/·/.test(w.w));
  const others = (w, k, n) => shuffle(P.filter(x => x !== w && x[k] !== w[k])).filter((x, i, a) => a.findIndex(y => y[k] === x[k]) === i).slice(0, n).map(x => x[k]);
  return ws.map((w, i) => {
    const kind = ["m", "r", "l", "s"][i % 4];
    if (kind === "s") return { t: "s", w, q: w.vi, ans: [w.w], why: `${w.w}: ${w.vi}`, skill: "writing", src: "unit" };
    const k = kind === "m" ? "vi" : "w"; const opts = shuffle([w[k], ...others(w, k, 3)]);
    return { t: kind, w, opts, a: opts.indexOf(w[k]), why: `${w.w}: ${w.vi}`, skill: kind === "l" ? "listening" : "vocab", src: "unit" };
  });
}
function startPractice(arg) {
  const m = /^([gqu])-(.+)$/.exec(arg || ""); if (!m) return false; const [, kind, id] = m;
  let items, title, back, track = "gen";
  if (kind === "g" || kind === "q") { const g = GRAMMAR_BY[id]; if (!g) return false; items = shuffle(g.bank).map(b => ({ ...b, skill: "grammar", src: "gram:" + id })); if (kind === "q") items = items.slice(0, 8); title = g.title; back = `#/grammar/${id}`; }
  else {
    const u = UNIT_BY[id]; if (!u) return false; track = u.track;
    const ws = unitWords(u); const pick = [...shuffle(ws.filter(isLearned)), ...shuffle(ws.filter(w => !isLearned(w)))].slice(0, 12);
    const gram = u.grammar.flatMap(gid => shuffle(GRAMMAR_BY[gid].bank).slice(0, u.grammar.length > 2 ? 2 : 3).map(b => ({ ...b, skill: "grammar", src: "gram:" + gid })));
    items = shuffle([...vocabItems(pick, ws.length >= 4 ? ws : LIB.filter(t => t.track === u.track).flatMap(t => t.words)), ...gram]);
    title = `Kiểm tra chặng ${u.code}`; back = `#/unit/${id}`;
  }
  if (!items.length) return false;
  PX = { arg, kind, id, title, back, track, items, i: 0, st: items.map(() => ({})), saved: false };
  return true;
}
const gapify = (q, fill) => esc(q).replace("___", `<span class="gap">${fill ? esc(fill) : "&nbsp;"}</span>`);
function pxBody(it, st) {
  const lbl = `<span class="step-kind">${PX.i + 1}/${PX.items.length}. ${PX_LABEL[it.t][0].toUpperCase() + PX_LABEL[it.t].slice(1)}</span>`;
  const opts = (en) => `<div class="choices">${it.opts.map((o, k) => { const cls = st.done ? (k === it.a ? " right" : st.pick === k ? " wrong" : "") : ""; return `<button class="choice${cls}" data-act="pxPick" data-o="${k}" ${st.done ? "disabled" : ""} ${en ? 'lang="en"' : ""}>${esc(o)}</button>`; }).join("")}</div>`;
  const input = (ph) => `<div class="row"><input class="field" id="pxIn" style="flex:1;min-width:200px" value="${esc(st.val || "")}" data-enter="pxCheck" ${st.done ? "disabled" : "data-autofocus"} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" placeholder="${ph}" aria-label="Câu trả lời"><button class="btn primary" data-act="pxCheck" ${st.done ? "disabled" : ""}>Kiểm tra</button></div>`;
  let body = "";
  if (it.t === "c") body = `<p class="cloze" lang="en">${gapify(it.q, st.done ? it.opts[it.a] : "")}</p>${opts(true)}`;
  else if (it.t === "x") body = `<p class="q">${esc(it.q)}</p>${opts(true)}`;
  else if (it.t === "t") body = `<p class="cloze" lang="en">${gapify(it.q, st.done ? it.ans[0] : "")}</p>${input("Gõ từ hoặc cụm từ cần điền")}`;
  else if (it.t === "m") body = `<div class="row"><p class="spec-word sm" lang="en">${esc(it.w.w)}</p>${hear(it.w.w)}</div><span class="pos">${esc(it.w.pos)}</span>${opts(false)}`;
  else if (it.t === "r") body = `<p style="font-size:26px;font-weight:600">${esc(it.w.vi)}</p><span class="pos">${esc(it.w.pos)}</span>${opts(true)}`;
  else if (it.t === "l") body = `<div><button class="btn primary" data-act="pxPlay">${ic("speaker", 18)} Nghe</button> <button class="btn" data-act="pxPlay" data-slow="1">Nghe chậm</button></div>${opts(true)}`;
  else if (it.t === "s") { const hint = it.w.w.replace(/[A-Za-z]/g, (ch, k) => k === 0 ? ch : "_"); body = `<p style="font-size:24px;font-weight:600">${esc(it.w.vi)}</p><p class="muted">Gợi ý: <span class="en" lang="en" style="letter-spacing:.15em">${esc(hint)}</span> (${it.w.pos})</p><div>${hear(it.w.w, "Nghe từ")}</div>${input("Viết từ tiếng Anh")}`; }
  else if (it.t === "o") {
    if (!st.pool) { st.tiles = it.s.split(/\s+/); do { st.pool = shuffle(st.tiles.map((x, k) => k)); } while (st.tiles.length > 2 && st.pool.every((v, k) => v === k)); st.ans = []; }
    body = `<p class="muted">Sắp xếp các ô thành câu đúng.</p><div class="tiles answer">${st.ans.map((k, j) => `<button class="tile" data-act="pxOut" data-j="${j}" ${st.done ? "disabled" : ""} lang="en">${esc(st.tiles[k])}</button>`).join("") || '<span class="muted small" style="padding:8px">Chạm các ô bên dưới theo thứ tự.</span>'}</div>
      <div class="tiles">${st.pool.map(k => `<button class="tile ${st.ans.includes(k) ? "used" : ""}" data-act="pxIn" data-k="${k}" ${st.done || st.ans.includes(k) ? "disabled" : ""} lang="en">${esc(st.tiles[k])}</button>`).join("")}</div>
      ${st.done ? "" : `<div class="row"><button class="btn" data-act="pxReset">Xếp lại</button><button class="btn primary" data-act="pxOrder" ${st.ans.length === st.tiles.length ? "" : "disabled"}>Kiểm tra</button></div>`}`;
  }
  else if (it.t === "f") {
    const toks = it.s.split(/\s+/), wi = toks.findIndex(x => norm(x) === norm(it.wrong));
    body = `<p class="muted">Câu dưới đây có một từ sai. Chạm vào từ đó.</p><p class="ftoks" lang="en">${toks.map((x, k) => `<button class="ftok ${st.done ? (k === wi ? "right" : st.pick === k ? "wrong" : "") : ""}" data-act="pxTok" data-k="${k}" ${st.done ? "disabled" : ""}>${esc(x)}</button>`).join(" ")}</p>`;
    it._wi = wi;
  }
  let fb = "";
  if (st.done) {
    const answer = it.t === "c" || it.t === "x" ? it.opts[it.a] : it.t === "t" || it.t === "s" ? it.ans[0] : it.t === "o" ? it.s : it.t === "f" ? `${it.wrong} → ${it.fix}` : it.t === "m" ? it.w.vi : it.w.w;
    fb = `<div class="feedback ${st.ok ? "ok" : "no"}" role="status"><b>${st.ok ? (st.typo ? "Gần đúng, sai chính tả nhẹ." : "Đúng.") : "Đáp án:"}</b> ${!st.ok || it.t === "f" || st.typo ? `<span class="en" lang="en">${esc(it.t === "f" ? "Sửa: " + it.wrong + " → " + it.fix : answer)}</span>. ` : ""}${esc(it.why || "")}</div>${it.w ? `<div class="row">${hear(it.w.w)}${it.w.ex ? `<span class="example" lang="en" style="font-size:16px">${esc(it.w.ex)}</span>` : ""}</div>` : it.t === "o" ? `<div>${hear(it.s)}</div>` : ""}`;
  }
  return lbl + body + fb;
}
function pxFinish() {
  const tot = PX.items.length, ok = PX.st.filter(s => s.ok).length, sc = ok / tot;
  if (!PX.saved) {
    PX.saved = true;
    if (PX.kind === "u") { const p = S.utest[PX.id]; S.utest[PX.id] = { best: Math.max(p?.best || 0, sc), n: (p?.n || 0) + 1, last: Date.now() }; }
    else { const p = S.gram[PX.id]; S.gram[PX.id] = { best: Math.max(p?.best || 0, sc), n: (p?.n || 0) + 1, last: Date.now() }; }
    touch(); save();
  }
  const by = {}; PX.items.forEach((it, k) => { const b = by[it.t] || (by[it.t] = [0, 0]); b[1]++; if (PX.st[k].ok) b[0]++; });
  const wrong = PX.items.map((it, k) => [it, PX.st[k]]).filter(([, s]) => !s.ok);
  const pass = PX.kind === "u" ? 0.8 : 0.7;
  return `<span class="step-kind">Kết quả</span><h1>${esc(PX.title)}</h1><div class="row" style="gap:18px"><div class="result-num">${Math.round(sc * 100)}%</div><p class="muted">${ok}/${tot} câu đúng<br>${sc >= pass ? "Đạt yêu cầu." : `Cần ${Math.round(pass * 100)}% để đạt.`}</p></div>
    <div>${Object.entries(by).map(([t, [o, n]]) => `<div class="skill"><span>${PX_LABEL[t]}</span><div class="bar"><i style="width:${o / n * 100}%"></i></div><span class="n">${o}/${n}</span></div>`).join("")}</div>
    ${wrong.length ? `<h3>Xem lại câu sai</h3><div class="list">${wrong.map(([it]) => `<div class="item"><span class="grow"><span class="s">${PX_LABEL[it.t]}</span><br><span class="en" lang="en">${esc(it.q && it.t !== "x" && it.t !== "m" && it.t !== "r" && it.t !== "s" ? it.q : it.s || (it.w ? it.w.w : it.q))}</span><br><span class="small"><b>Đáp án:</b> <span lang="en">${esc(it.t === "c" || it.t === "x" ? it.opts[it.a] : it.t === "t" || it.t === "s" ? it.ans[0] : it.t === "o" ? it.s : it.t === "f" ? it.wrong + " → " + it.fix : it.t === "m" ? it.w.vi : it.w.w)}</span></span><br><span class="muted small">${esc(it.why || "")}</span></span></div>`).join("")}</div>` : `<div class="feedback ok">Không sai câu nào.</div>`}
    <div class="row">${wrong.length ? `<button class="btn primary" data-act="pxRetryWrong">Làm lại ${wrong.length} câu sai</button>` : ""}<button class="btn" data-act="pxRestart">Làm lượt mới</button><a class="btn quiet" href="${PX.back}">Quay lại</a></div>`;
}
function viewPractice() {
  if (!PX || PX.arg !== ROUTE.arg) { if (!startPractice(ROUTE.arg)) return `${focusBar(null, "Luyện tập")}<div class="focus-page"><div class="empty"><p>Chưa có câu hỏi cho phần này. Hãy học thêm từ vựng hoặc chọn phần khác.</p><a class="btn" href="#/path">Về lộ trình</a></div></div>`; }
  const done = PX.i >= PX.items.length;
  const body = done ? pxFinish() : pxBody(PX.items[PX.i], PX.st[PX.i]);
  const st = PX.st[PX.i];
  const act = !done && st.done ? `<div class="step-actions"><button class="btn primary" data-act="pxNext">${PX.i === PX.items.length - 1 ? "Xem kết quả" : "Câu tiếp"}</button></div>` : "";
  return `<div class="track-${PX.track}">${focusBar({ n: PX.items.length, i: Math.min(PX.i, PX.items.length) }, PX.title)}<div class="focus-page"><article class="step-card">${body}</article>${act}</div></div>`;
}
function pxMark(ok, typo) { const it = PX.items[PX.i], st = PX.st[PX.i]; if (st.done) return; st.done = true; st.ok = !!ok; st.typo = !!typo; evidence(it.skill, st.ok, it.src); render(); if (it.w) speakNow(it.w.w); }

/* ---------------- Actions ---------------- */
const _exit42 = ACT.exitFocus;
Object.assign(ACT, {
  exitFocus() { stopSpeech(); if (ROUTE.name === "practice") { const b = PX ? PX.back : "#/path"; PX = null; location.hash = b; } else if (ROUTE.name === "learn" && ROUTE.arg.startsWith("u-")) { LN = null; location.hash = "#/unit/" + ROUTE.arg.slice(2); } else _exit42(); },
  pathTrack(el) { PF.track = el.dataset.t; render(); },
  pxPick(el) { const it = PX.items[PX.i], st = PX.st[PX.i]; st.pick = +el.dataset.o; pxMark(st.pick === it.a); },
  pxCheck() {
    const it = PX.items[PX.i], st = PX.st[PX.i]; if (st.done) return; st.val = $("#pxIn")?.value || ""; const v = norm(st.val); if (!v) return;
    const ans = it.ans.map(norm); if (ans.includes(v)) return pxMark(true);
    if (ans.some(a => a.length > 4 && lev(a, v) <= 1)) return pxMark(true, true);
    pxMark(false);
  },
  pxIn(el) { PX.st[PX.i].ans.push(+el.dataset.k); render(); },
  pxOut(el) { PX.st[PX.i].ans.splice(+el.dataset.j, 1); render(); },
  pxReset() { PX.st[PX.i].ans = []; render(); },
  pxOrder() { const it = PX.items[PX.i], st = PX.st[PX.i]; pxMark(norm(st.ans.map(k => st.tiles[k]).join(" ")) === norm(it.s)); if (st.ok) speakNow(it.s); },
  pxTok(el) { const it = PX.items[PX.i], st = PX.st[PX.i]; st.pick = +el.dataset.k; pxMark(st.pick === it._wi); },
  pxPlay(el) { const it = PX.items[PX.i]; speakNow(it.w.w, { slow: !!el.dataset.slow }); },
  pxNext() { PX.i++; render(); const it = PX.items[PX.i]; if (it && (it.t === "l" || it.t === "m")) speakNow(it.w.w); },
  pxRestart() { startPractice(PX.arg); render(); },
  pxRetryWrong() { const items = PX.items.filter((_, k) => !PX.st[k].ok).map(it => ({ ...it })); PX = { ...PX, items: shuffle(items), i: 0, st: items.map(() => ({})), saved: true, title: PX.title + " (câu sai)" }; render(); }
});

/* ---------------- Start ---------------- */
/* khởi động: xem app-v43.js */
