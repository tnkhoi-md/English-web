/* ============================================================
   v4.1 · Thư viện luyện thi (ưu tiên A1–B2), Thư viện ngữ pháp,
   Kho từ phát âm, Câu nói động lực, Phòng khám sàng lọc ban đầu.
   Nạp SAU app-v4.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.1"; APP.build = "01.10.26";

/* ---------------- Metadata cho chủ đề cũ ---------------- */
const SEC_OF = { society: "ielts", academic: "skills", discourse: "skills", idioms: "skills", verbs: "skills" };
const EXAM_OF = { places: ["CEFR", "VSTEP", "TOEIC"], work: ["CEFR", "VSTEP", "TOEIC"], shopping: ["CEFR", "VSTEP", "TOEIC"], tech: ["CEFR", "VSTEP", "IELTS"], nature: ["CEFR", "VSTEP", "IELTS"], body: ["CEFR", "VSTEP", "IELTS"], society: ["IELTS", "VSTEP"], academic: ["IELTS", "VSTEP"], discourse: ["IELTS", "VSTEP", "TOEIC"], idioms: ["IELTS"], verbs: ["TOEIC", "IELTS", "VSTEP"] };
LIB.forEach(t => { if (t.track !== "gen") return; t.sec = t.sec || SEC_OF[t.id] || "life"; t.exam = t.exam || EXAM_OF[t.id] || ["CEFR", "VSTEP"]; });
const EXAMS = ["IELTS", "TOEIC", "VSTEP"];
const examChips = t => (t.exam || []).map(e => `<span class="exm exm-${e}">${e}</span>`).join("");
const LIB_SECS = [["core", "⭐ Nền tảng A1–B2 (ưu tiên học trước)", "Động từ, tính từ, danh từ lõi xuất hiện trong mọi kỳ thi."], ["life", "🏡 Chủ đề đời sống", "Giao tiếp hằng ngày, nền cho CEFR và VSTEP bậc 1–3."], ["toeic", "💼 Luyện thi TOEIC", "Từ vựng nơi làm việc: văn phòng, nhân sự, tài chính, đặt hàng, công tác."], ["ielts", "🎓 Luyện thi IELTS và VSTEP", "Các chủ đề hay ra đề Speaking và Writing."], ["skills", "🧠 Kỹ năng làm bài", "Họ từ, kết hợp từ, từ nối, cụm động từ, thành ngữ."]];
const lvlMatch = w => !LF.lvl || (LF.lvl === "AB" ? ["A1", "A2", "B1", "B2"].includes(w.lvl) : w.lvl === LF.lvl);
const examMatch = t => !LF.exam || (t.exam || []).includes(LF.exam) || (LF.exam === "MED" && t.track === "med");
LF.exam = ""; LF.lvl = "AB";

/* ---------------- State extensions ---------------- */
const GRAMMAR_BY = Object.fromEntries(GRAMMAR.map(g => [g.id, g]));
PRON_BANK.forEach(c => { c.list = c.items.split("\n").map(l => l.split("|").map(x => x.trim())).filter(p => p[0]).map(([w, uk, us, note]) => ({ w, uk, us, note: note || "", key: `${c.id}:${slugify(w)}` })); });
const PB_KEYS = new Set(PRON_BANK.flatMap(c => c.list.map(x => x.key)));
const _san41 = sanitize;
sanitize = function (raw) {
  const s = _san41(raw); s.gram = {}; s.pb = {}; if (!raw || typeof raw !== "object") return s;
  if (raw.gram && typeof raw.gram === "object") for (const [k, v] of Object.entries(raw.gram)) if (GRAMMAR_BY[k] && v) s.gram[k] = { best: clamp(num(v.best), 0, 1), n: Math.max(0, Math.round(num(v.n))), last: num(v.last) };
  if (raw.pb && typeof raw.pb === "object") for (const [k, v] of Object.entries(raw.pb)) if (PB_KEYS.has(k) && v) s.pb[k] = { n: Math.max(0, Math.round(num(v.n))), ok: Math.max(0, Math.round(num(v.ok))) };
  return s;
};
const _fresh41 = fresh; fresh = () => { const s = _fresh41(); s.gram = {}; s.pb = {}; return s; };
S = load();
const _merge41 = mergeState;
mergeState = function (a, b) {
  const m = _merge41(a, b); m.gram = { ...(a.gram || {}) }; m.pb = { ...(a.pb || {}) };
  for (const [k, v] of Object.entries(b.gram || {})) { const x = m.gram[k]; m.gram[k] = !x ? v : { best: Math.max(x.best, v.best), n: Math.max(x.n, v.n), last: Math.max(x.last, v.last) }; }
  for (const [k, v] of Object.entries(b.pb || {})) { const x = m.pb[k]; m.pb[k] = !x || v.n > x.n ? v : x; }
  return m;
};

/* ---------------- Nav, routes, study time ---------------- */
Object.assign(ICONS, { grammar: '<path d="M4 6h16M4 12h10M4 18h7"/><path d="M15 17l2 2 4-5"/>', quote: '<path d="M7 7h4v4c0 3-2 5-4 6M15 7h4v4c0 3-2 5-4 6"/>' });
NAV4[1][0] = "Thư viện";
NAV4[1][1].splice(1, 0, ["grammar", "Thư viện ngữ pháp", "grammar", "#5b4fc4"]);
const _isStudy41 = isStudyRoute;
isStudyRoute = () => _isStudy41() || (ROUTE.name === "grammar" && !!ROUTE.arg) || (ROUTE.name === "pron" && !!ROUTE.arg);

/* ---------------- Motivational quote (random per login) ---------------- */
function quoteIndex(force) {
  let cur = null, last = -1; try { cur = sessionStorage.getItem("tnk_quote"); last = +(localStorage.getItem("tnk_quote_last") ?? -1); } catch { }
  const valid = cur !== null && !isNaN(+cur) && +cur < PROVERBS.length;
  if (valid && !force) return +cur;
  let i; do { i = Math.floor(Math.random() * PROVERBS.length); } while (PROVERBS.length > 2 && (i === last || (valid && i === +cur)));
  try { sessionStorage.setItem("tnk_quote", String(i)); localStorage.setItem("tnk_quote_last", String(i)); } catch { }
  return i;
}
function quoteCard() {
  const [en, mean, vi] = PROVERBS[quoteIndex()];
  return `<section class="quote-card" aria-label="Câu nói động lực"><div class="row between"><span class="q-label">${ic("quote", 18)} Câu nói hôm nay</span><div class="row" style="gap:6px">${hear(en, "Nghe câu nói")}<button class="icon-btn" data-act="quoteNext" aria-label="Câu khác" title="Câu khác">↻</button></div></div>
    <p class="q-en" lang="en">${esc(en)}</p><p class="q-vi">${esc(vi)}</p><p class="q-mean" lang="en">${esc(mean)}</p></section>`;
}
const _viewToday41 = viewToday;
viewToday = () => _viewToday41().replace("</h1></section>", "</h1></section>" + quoteCard());

/* ---------------- Library (exam-aware) ---------------- */
function topicCard41(t) {
  const ws = t.words.filter(lvlMatch); const c = coverage2(ws); const lv = [...new Set(t.words.map(w => w.lvl))];
  return `<a class="topic" href="#/library/${t.id}" style="--tc:${t.color}"><span class="ti" aria-hidden="true">${t.icon}</span><span class="tt"><b lang="en">${esc(t.title)}</b><span class="muted small">${esc(t.vi)}</span></span>
    <span class="meter"><i style="width:${c.p * 100}%"></i></span><span class="row between small"><span class="muted">${c.d}/${c.n} đã học</span><span class="muted">${lv.length > 1 ? lvName(lv[0]) + "–" + lvName(lv[lv.length - 1]) : lvName(lv[0])}</span></span>${t.exam ? `<span class="exrow">${examChips(t)}</span>` : ""}</a>`;
}
libResults = function () {
  const q = norm(LF.q); if (!q) return "";
  const res = LIB.filter(t => (LF.track === "all" || t.track === LF.track) && examMatch(t)).flatMap(t => t.words).filter(w => lvlMatch(w) && (norm(w.w).includes(q) || w.vi.toLowerCase().includes(LF.q.trim().toLowerCase())));
  return res.length ? `<p class="muted small">${res.length} kết quả${res.length > 80 ? ", hiện 80 đầu tiên" : ""}</p><div class="lw-list" data-showtopic="1">${res.slice(0, 80).map(w => wordRow(w, true)).join("")}</div>` : `<div class="empty"><p>Không có từ nào khớp “${esc(LF.q)}” với bộ lọc hiện tại.</p></div>`;
};
viewLibrary = function () {
  if (ROUTE.arg && LIB_BY[ROUTE.arg]) { const t = LIB_BY[ROUTE.arg]; return viewTopic(t).replace('<div class="meter lg">', (t.exam ? `<div class="exrow">${examChips(t)}</div>` : "") + '<div class="meter lg">'); }
  const gen = LIB.filter(t => t.track === "gen"), genWords = gen.flatMap(t => t.words);
  const prio = genWords.filter(w => ["A1", "A2", "B1", "B2"].includes(w.lvl)), pc = coverage2(prio);
  const seg = [["all", "Tất cả"], ["gen", "Phổ thông"], ["med", "Y khoa"]].map(([id, l]) => `<button data-act="libTrack" data-t="${id}" aria-pressed="${LF.track === id}">${l}</button>`).join("");
  const levels = LF.track === "med" ? MED_LEVELS : GEN_LEVELS;
  const lvBtns = `<button class="lv lv-all ${!LF.lvl ? "on" : ""}" data-act="libLevel" data-l="">Mọi cấp</button>${LF.track !== "med" ? `<button class="lv lv-AB ${LF.lvl === "AB" ? "on" : ""}" data-act="libLevel" data-l="AB">Ưu tiên A1–B2</button>` : ""}${levels.map(l => `<button class="lv lv-${l} ${LF.lvl === l ? "on" : ""}" data-act="libLevel" data-l="${l}">${lvName(l)}</button>`).join("")}`;
  const exBtns = LF.track === "med" ? "" : `<div class="lv-filter" role="group" aria-label="Kỳ thi"><button class="exm-btn ${!LF.exam ? "on" : ""}" data-act="libExam" data-e="">Mọi kỳ thi</button>${EXAMS.map(e => `<button class="exm-btn exm-${e} ${LF.exam === e ? "on" : ""}" data-act="libExam" data-e="${e}">${e}</button>`).join("")}</div>`;
  const grid = ts => { const xs = ts.filter(examMatch).filter(t => t.words.some(lvlMatch)); return xs.length ? `<div class="topics">${xs.map(topicCard41).join("")}</div>` : `<p class="muted small">Không có chủ đề nào khớp bộ lọc.</p>`; };
  let body = "";
  if (LF.q) body = libResults();
  else {
    if (LF.track !== "med") body += LIB_SECS.map(([sec, title, desc]) => { const ts = gen.filter(t => t.sec === sec); const g = grid(ts); return g.startsWith("<p") ? "" : `<h2 class="sec-h">${title}</h2><p class="muted small sec-d">${desc}</p>${g}`; }).join("");
    if (LF.track !== "gen" && !LF.exam) body += LIB_MED_GROUPS.map(([gid, name, en, icon]) => { const g = grid(LIB.filter(t => t.group === gid)); return g.startsWith("<p") ? "" : `<h2 class="sec-h">${icon} Y khoa: ${name}</h2>${g}`; }).join("");
    if (!body) body = `<div class="empty"><p>Không có chủ đề nào khớp bộ lọc.</p></div>`;
  }
  return `<section class="page-head"><h1>Thư viện từ vựng</h1><p class="lede">${LIB_COUNT} từ và thuật ngữ trong ${LIB.length} chủ đề. Mạch phổ thông ưu tiên ${prio.length} từ A1–B2 thông dụng cho IELTS, TOEIC, VSTEP và các bài thi theo CEFR; bạn đã học ${pc.d} từ trong số đó.</p>
      <div class="meter lg" style="max-width:520px"><i style="width:${pc.p * 100}%;background:var(--gen)"></i></div></section>
    <div class="filterbar"><div class="seg-tog" role="group" aria-label="Mạch học">${seg}</div><div class="lv-filter" role="group" aria-label="Cấp độ">${lvBtns}</div>${exBtns}
      <label class="searchbox">${ic("search", 18)}<input id="libq" type="search" placeholder="Tìm từ tiếng Anh hoặc nghĩa tiếng Việt…" value="${esc(LF.q)}" aria-label="Tìm trong thư viện"></label></div>
    <div id="libBody">${body}</div>`;
};

/* ---------------- Grammar library ---------------- */
let GQ = null;
const gramStatus = g => S.gram[g.id];
function viewGrammar() {
  if (ROUTE.arg && GRAMMAR_BY[ROUTE.arg]) return viewGrammarPoint(GRAMMAR_BY[ROUTE.arg]);
  const done = GRAMMAR.filter(g => gramStatus(g)).length;
  const lvls = ["A1", "A2", "B1", "B2", "C1"];
  const exBtns = `<div class="lv-filter"><button class="exm-btn ${!LF.gex ? "on" : ""}" data-act="gramExam" data-e="">Mọi kỳ thi</button>${EXAMS.map(e => `<button class="exm-btn exm-${e} ${LF.gex === e ? "on" : ""}" data-act="gramExam" data-e="${e}">${e}</button>`).join("")}</div>`;
  const card = g => { const r = gramStatus(g); return `<a class="gcard" href="#/grammar/${g.id}"><div class="row between"><span class="lv lv-${g.lvl}">${g.lvl}</span>${r ? `<span class="chip ${r.best >= 0.8 ? "good" : "acc"}">${Math.round(r.best * 100)}%</span>` : `<span class="chip">chưa luyện</span>`}</div><b lang="en">${esc(g.title)}</b><span class="muted small">${esc(g.vi)}</span><span class="exrow">${g.exams.map(e => `<span class="exm exm-${e}">${e}</span>`).join("")}</span></a>`; };
  return `<section class="page-head"><h1>Thư viện ngữ pháp</h1><p class="lede">${GRAMMAR.length} điểm ngữ pháp cốt lõi từ A1 đến C1, sắp theo thứ tự nên học. Mỗi điểm có công thức, cách dùng, ví dụ nghe được, lỗi sai thường gặp và câu hỏi luyện kiểu đề thi. Bạn đã luyện ${done}/${GRAMMAR.length} điểm.</p></section>
    <div class="filterbar">${exBtns}</div>
    ${lvls.map(l => { const gs = GRAMMAR.filter(g => g.lvl === l && (!LF.gex || g.exams.includes(LF.gex))); return gs.length ? `<h2 class="sec-h"><span class="lv lv-${l}">${l}</span> ${CEFR.find(c => c[0] === l)[1]}</h2><div class="topics">${gs.map(card).join("")}</div>` : ""; }).join("")}
    <section class="panel stack" style="margin-top:22px"><h3>Kỳ thi kiểm tra ngữ pháp thế nào</h3>
      <p><b>TOEIC Part 5 và 6</b>: câu hỏi về dạng từ xuất hiện nhiều nhất, sau đó là thì, chủ động và bị động, hòa hợp chủ ngữ và động từ, giới từ, liên từ, đại từ quan hệ.</p>
      <p><b>IELTS</b>: không có bài ngữ pháp riêng. “Grammatical Range and Accuracy” là một trong bốn tiêu chí chấm Writing và Speaking, thưởng điểm cho câu phức viết đúng.</p>
      <p><b>VSTEP</b>: bốn kỹ năng, mỗi kỹ năng 25%. Ngữ pháp được chấm trong Viết và Nói.</p></section>`;
}
function viewGrammarPoint(g) {
  if (!GQ || GQ.id !== g.id) GQ = { id: g.id, st: g.quiz.map(() => ({})) };
  const qs = g.quiz.map(([q, opts, a, why]) => ({ q, opts, a, why }));
  const allDone = GQ.st.every(s => s.done), ok = GQ.st.filter(s => s.ok).length;
  const i = GRAMMAR.indexOf(g), prev = GRAMMAR[i - 1], next = GRAMMAR[i + 1];
  return `<section class="page-head"><a class="muted small" href="#/grammar">Thư viện ngữ pháp</a><div class="row"><span class="lv lv-${g.lvl}">${g.lvl}</span><span class="exrow">${g.exams.map(e => `<span class="exm exm-${e}">${e}</span>`).join("")}</span></div><h1 lang="en">${esc(g.title)}</h1><p class="lede">${esc(g.vi)}</p></section>
    <div class="grid2"><section class="panel stack track-gen accent"><h3>Công thức</h3><p style="white-space:pre-line">${esc(g.form)}</p></section><section class="panel stack"><h3>Cách dùng</h3><p>${esc(g.use)}</p></section></div>
    <section class="panel stack" style="margin-top:14px"><h3>Ví dụ</h3><div class="ex-list">${g.ex.map(([en, vi]) => `<div class="ex-item"><span class="en" lang="en">${esc(en)}</span><span class="vi">${esc(vi)}</span>${hear(en)}</div>`).join("")}</div></section>
    <section class="panel stack" style="margin-top:14px"><h3>Lỗi sai thường gặp</h3><div>${g.err.map(([x, v, why]) => `<div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(x)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(v)}</span><span class="why">${esc(why)}</span></div>`).join("")}</div></section>
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3>Luyện tập</h3>${allDone ? `<span class="chip ${ok === qs.length ? "good" : "acc"}">đúng ${ok}/${qs.length}</span>` : ""}</div>
      ${qs.map((q, k) => `<div class="stack"><p class="q" lang="en">${esc(q.q)}</p>${choicesHtml(q, GQ.st[k], "g" + k, true)}</div>`).join('<div class="divider"></div>')}
      ${allDone ? `<div class="row"><button class="btn" data-act="gramRetry">Làm lại</button></div>` : ""}</section>
    <div class="row between" style="margin-top:16px">${prev ? `<a class="btn" href="#/grammar/${prev.id}">Điểm trước: ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn primary" href="#/grammar/${next.id}">Điểm tiếp: ${esc(next.title)}</a>` : ""}</div>`;
}

/* ---------------- Pronunciation bank ---------------- */
const PBR = {};
const pbBase = w => w.replace(/\s*\((n|v)\)\s*$/, "");
function pbSpeakText(w) { const b = pbBase(w); if (/\(n\)$/.test(w)) return (/^[aeiou]/i.test(b) ? "an " : "a ") + b; if (/\(v\)$/.test(w)) return "to " + b; return b; }
function soundTabs(cur) { return `<div class="tabs" role="tablist" style="margin-bottom:16px"><a href="#/sounds" role="tab" style="text-decoration:none"><button tabindex="-1" aria-selected="${cur === "pairs"}">Cặp âm tối thiểu</button></a><a href="#/pron" role="tab" style="text-decoration:none"><button tabindex="-1" aria-selected="${cur === "bank"}">Kho từ phát âm</button></a></div>`; }
const _viewSounds41 = viewSounds;
viewSounds = () => { const h = _viewSounds41(); return ROUTE.arg ? h : h.replace('</section>', '</section>' + soundTabs("pairs")); };
function viewPron() {
  const cat = PRON_BANK.find(c => c.id === ROUTE.arg);
  const total = PRON_BANK.reduce((a, c) => a + c.list.length, 0), done = Object.keys(S.pb).length;
  if (!cat) return `<section class="page-head"><h1>Phát âm</h1><p class="lede">Kho ${total} từ hay đọc sai trong giao tiếp và bài thi nói, chia theo lỗi. Mỗi từ có phiên âm Anh-Anh và Anh-Mỹ, nghe được cả hai giọng và tự nói để máy nhận dạng. Bạn đã tập ${done} từ.</p></section>${soundTabs("bank")}
      <div class="topics">${PRON_BANK.map(c => { const d = c.list.filter(x => S.pb[x.key]).length; return `<a class="topic" href="#/pron/${c.id}" style="--tc:${c.color}"><span class="ti">${c.icon}</span><span class="tt"><b>${esc(c.title)}</b><span class="muted small">${esc(c.vi)}</span></span><span class="meter"><i style="width:${d / c.list.length * 100}%"></i></span><span class="muted small">${d}/${c.list.length} từ đã tập</span></a>`; }).join("")}</div>
      <p class="muted small" style="margin-top:16px">Phiên âm theo quy ước Cambridge Dictionary. Giọng đọc là giọng tổng hợp của thiết bị, nên hãy coi IPA là chuẩn khi hai bên khác nhau.</p>`;
  const accUK = S.settings.accent === "uk";
  return `<section class="page-head" style="--tc:${cat.color}"><a class="muted small" href="#/pron">Kho từ phát âm</a><div class="row" style="gap:14px"><span class="ti big">${cat.icon}</span><div><h1>${esc(cat.title)}</h1><p class="lede" style="margin:0">${esc(cat.vi)}</p></div></div><p class="tip"><b>Mẹo:</b> ${esc(cat.tip)}</p></section>
    <div class="row" style="gap:6px;flex-wrap:wrap;margin-bottom:14px">${PRON_BANK.map(c => `<a class="chip tpc ${c.id === cat.id ? "on" : ""}" style="--tc:${c.color}" href="#/pron/${c.id}">${c.icon} ${esc(c.title)}</a>`).join("")}</div>
    <div class="lw-list">${cat.list.map(x => { const r = PBR[x.key], p = S.pb[x.key]; return `<div class="lw pb-row" style="--tc:${cat.color}"><div class="lw-main"><span class="lw-w" lang="en">${esc(x.w)}</span>
      <div class="ipa-pair"><span class="${accUK ? "cur" : ""}"><small>UK</small> ${esc(x.uk)}</span><span class="${!accUK ? "cur" : ""}"><small>US</small> ${esc(x.us)}</span></div>${x.note ? `<div class="lw-ex">${esc(x.note)}</div>` : ""}</div>
      <div class="lw-act"><button class="mini" data-act="pbHear" data-w="${esc(x.w)}" data-acc="uk" aria-label="Nghe giọng Anh-Anh">${ic("speaker", 15)} UK</button><button class="mini" data-act="pbHear" data-w="${esc(x.w)}" data-acc="us" aria-label="Nghe giọng Anh-Mỹ">${ic("speaker", 15)} US</button>
      ${SR ? `<button class="mini" data-act="pbSay" data-k="${x.key}" data-w="${esc(x.w)}" aria-label="Tự nói từ ${esc(pbBase(x.w))}">${ic("mic", 15)} Nói</button>` : ""}
      ${r ? `<span class="chip ${r.ok ? "good" : "bad"}" lang="en">${r.ok ? "✓ máy nghe đúng" : "máy nghe: " + esc(r.heard || "không rõ")}</span>` : p ? `<span class="chip">${p.ok}/${p.n}</span>` : ""}</div></div>`; }).join("")}</div>
    ${!SR ? `<p class="muted small" style="margin-top:12px">Trình duyệt này chưa nhận dạng giọng nói; hãy nghe mẫu và đọc theo.</p>` : ""}`;
}

/* ---------------- Clinic list: two groups + safety note ---------------- */
const _viewClinic41 = viewClinic;
viewClinic = function () {
  if (ROUTE.arg) return _viewClinic41();
  const row = c => { const r = S.cases[c.id]; const ready = c.rec.every(id => S.lessons[id]?.done); return `<a class="item link" href="#/clinic/${c.id}"><span class="avatar">${c.patient.av}</span><span class="grow"><span class="t">${esc(c.vi)}</span> <span class="muted small" lang="en">${esc(c.title)}</span><br><span class="s">${esc(c.patient.name)}, ${c.patient.age} tuổi, <span lang="en">${esc(c.patient.job)}</span>. ${ready ? "Đã học đủ bài chuẩn bị." : "Nên học trước " + c.rec.join(", ") + "."}</span></span>${r ? `<span class="chip good">tốt nhất ${Math.round(r.best * 100)}%</span>` : `<span class="chip acc">chưa khám</span>`}</a>`; };
  const base = CASES.filter(c => c.group !== "screen"), screen = CASES.filter(c => c.group === "screen");
  return `<section class="page-head"><h1>Phòng khám ảo</h1><p class="lede">Bạn là bác sĩ. Hỏi bệnh bằng cách tự gõ, tự nói hoặc chọn từ ngân hàng câu hỏi; ngân hàng có cả những cách hỏi chưa phù hợp để bạn học cách tránh. Cuối buổi, bạn viết tóm tắt ca, chọn chẩn đoán và cách giải thích cho bệnh nhân.</p></section>
    <div class="feedback no" role="note" style="margin-bottom:14px"><b>Lưu ý:</b> đây là công cụ luyện tiếng Anh giao tiếp lâm sàng, không phải hướng dẫn chẩn đoán hay điều trị. Ngưỡng và cách xử trí bám theo hướng dẫn NICE (Anh) và WHO, có thể khác phác đồ của Bộ Y tế Việt Nam.</div>
    <h2 class="sec-h">🩺 Phòng khám sàng lọc ban đầu (${screen.length} tình huống thường gặp)</h2><p class="muted small sec-d">Chọn theo các lý do đến khám phổ biến nhất ở tuyến chăm sóc ban đầu: nhiễm trùng hô hấp trên, tăng huyết áp, đái tháo đường, đau lưng, đau khớp, bệnh da, tiết niệu, tiêu hóa, tâm lý, và đau ngực cần nhận diện cấp cứu.</p>
    <div class="list panel track-med">${screen.map(row).join("")}</div>
    <h2 class="sec-h">📚 Ca nền tảng</h2><div class="list panel track-med">${base.map(row).join("")}</div>
    <div class="panel stack" style="margin-top:14px"><h3>Chấm điểm dựa trên gì</h3><p>Báo cáo cuối ca mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của OET Speaking: xây dựng quan hệ, tìm hiểu quan điểm bệnh nhân (ICE), cấu trúc buổi hỏi, thu thập và cung cấp thông tin. Đây là công cụ tự luyện, không phải điểm OET.</p></div>`;
};

/* ---------------- Goals: exam equivalence ---------------- */
const _viewGoals41 = viewGoals;
viewGoals = () => _viewGoals41() + `<section class="panel stack" style="margin-top:14px"><h2>Quy đổi tham khảo giữa các kỳ thi</h2>
  <div style="overflow-x:auto"><table class="xtable"><thead><tr><th>CEFR</th><th>IELTS</th><th>TOEIC Nghe + Đọc</th><th>VSTEP (Khung 6 bậc)</th><th>Vốn từ ước tính</th></tr></thead><tbody>
  <tr><td><span class="lv lv-A1">A1</span></td><td>–</td><td>từ 120</td><td>Bậc 1</td><td>dưới ~1.500</td></tr>
  <tr><td><span class="lv lv-A2">A2</span></td><td>khoảng 3.0–3.5</td><td>từ 225</td><td>Bậc 2</td><td>~1.500–2.500</td></tr>
  <tr><td><span class="lv lv-B1">B1</span></td><td>4.0–5.0</td><td>từ 550</td><td>Bậc 3 (4.0–5.5)</td><td>~2.750–3.250</td></tr>
  <tr><td><span class="lv lv-B2">B2</span></td><td>5.5–6.5</td><td>từ 785</td><td>Bậc 4 (6.0–8.0)</td><td>~3.250–3.750</td></tr>
  <tr><td><span class="lv lv-C1">C1</span></td><td>7.0–8.0</td><td>từ 945</td><td>Bậc 5 (8.5–10)</td><td>~3.750–4.500</td></tr></tbody></table></div>
  <p class="muted small">Nguồn: bảng CEFR của IELTS và ETS (điểm tối thiểu TOEIC theo từng kỹ năng cộng lại), Thông tư 23/2017 của Bộ GD&ĐT cho VSTEP, ước tính vốn từ của Milton và Alexiou (2009). Các đơn vị có thể công bố khác nhau đôi chút; hãy kiểm tra lại với nơi tổ chức thi trước khi đăng ký.</p></section>`;

/* ---------------- More & About ---------------- */
const _viewMore41 = viewMore;
viewMore = () => _viewMore41().replace('<a class="item link" href="#/words">', '<a class="item link" href="#/grammar"><span class="ti">📐</span><span class="grow"><span class="t">Thư viện ngữ pháp</span><br><span class="s">24 điểm ngữ pháp A1 đến B2, có bài luyện</span></span></a><a class="item link" href="#/words">');
const _viewAbout41 = viewAbout;
viewAbout = () => _viewAbout41().replace("<b>Dựa trên lỗi của người Việt.</b>", "<b>Tập trung vào lỗi sai thường gặp.</b>").replace('<section class="panel stack" style="margin-top:14px"><p style="font-family:var(--en);font-size:22px">', `<section class="panel stack" style="margin-top:14px"><h3>Nguồn tham khảo trong phiên bản ${APP.version}</h3><p class="muted small">Danh sách từ vựng do tác giả biên soạn, cấp độ đối chiếu với khung CEFR, có tham khảo NGSL và TOEIC Service List (Browne, Culligan và Phillips, CC BY-SA 4.0) và Oxford 3000 như danh mục kiểm tra, không sao chép định nghĩa. Ngữ pháp theo tiến trình của English Grammar Profile và British Council. Phòng khám ảo bám theo NICE (NG84, NG136, NG59, NG226, CG95, hướng dẫn UTI của UKHSA) và tiêu chuẩn chẩn đoán đái tháo đường của WHO. Phiên âm theo Cambridge Dictionary. Các câu ngạn ngữ là câu truyền thống thuộc phạm vi công cộng.</p></section><section class="panel stack" style="margin-top:14px"><p style="font-family:var(--en);font-size:22px">`);

/* ---------------- Actions ---------------- */
function sayAccent(text, acc) { const st = S.settings, o = [st.accent, st.voice, st.voice2]; st.accent = acc; st.voice = st.voice2 = "auto"; speakNow(text); [st.accent, st.voice, st.voice2] = o; }
const _pick41 = ACT.pick;
Object.assign(ACT, {
  pick(el) {
    const q = el.dataset.q;
    if (ROUTE.name === "grammar" && /^g\d+$/.test(q) && GQ) {
      const g = GRAMMAR_BY[GQ.id], k = +q.slice(1), [qq, opts, a, why] = g.quiz[k], st = GQ.st[k], was = st.done;
      pickOpt2q({ q: qq, opts, a, why }, st, +el.dataset.o);
      if (!was && st.done) { evidence("grammar", st.ok, "gram:" + g.id); if (GQ.st.every(s => s.done)) { const sc = GQ.st.filter(s => s.ok).length / GQ.st.length, pr = S.gram[g.id]; S.gram[g.id] = { best: Math.max(pr?.best || 0, sc), n: (pr?.n || 0) + 1, last: Date.now() }; touch(); save(); } }
      render(); return;
    }
    _pick41(el);
  },
  gramRetry() { GQ = null; render(); },
  gramExam(el) { LF.gex = el.dataset.e; render(); },
  libExam(el) { LF.exam = el.dataset.e; render(); },
  quoteNext() { quoteIndex(true); const card = document.querySelector(".quote-card"); if (card) card.outerHTML = quoteCard(); },
  pbHear(el) { sayAccent(pbSpeakText(el.dataset.w), el.dataset.acc); },
  async pbSay(el) {
    if (ASR.on) { try { ASR.cur.stop(); } catch { } return; }
    const key = el.dataset.k, w = norm(pbBase(el.dataset.w)); toast(`Đọc từ “${pbBase(el.dataset.w)}”…`);
    try { const alts = (await recognize()).map(norm); const ok = alts.some(a => (" " + a + " ").includes(" " + w + " ")); PBR[key] = { ok, heard: alts[0] || "" }; const p = S.pb[key] || (S.pb[key] = { n: 0, ok: 0 }); p.n++; if (ok) p.ok++; evidence("pron", ok, "pb"); touch(); render(); }
    catch (e) { asrError(e); }
  }
});
addEventListener("hashchange", () => { if (ROUTE.name !== "grammar") GQ = null; });

/* ---------------- Start ---------------- */
/* khởi động: xem app-v42.js */
