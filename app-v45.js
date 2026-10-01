/* ============================================================
   v4.5 · Luyện đề và Kho luyện đọc.
   - Bốn dạng bài mới trong bộ máy luyện tập: đọc hiểu (k), điền đoạn văn
     chọn đáp án (p), điền đoạn văn gõ từ (po), viết lại câu với từ cho sẵn (w).
   - TOEIC Part 5 dùng dạng chọn đáp án (c) có sẵn.
   - Trang Luyện đề (#/exam), Kho luyện đọc (#/reading, #/reading/<mã>) với
     chạm vào từ để xem nghĩa và thêm vào lịch ôn.
   Nạp SAU app-v43.js và TRƯỚC app-v44.js (v44 khởi động app).
   Dữ liệu: content-reading.js (READING), content-exam.js (TOEIC5, TOEIC6,
   CLOZE_MC, CLOZE_OPEN, KWT).
   ============================================================ */
const RD_ALL = typeof READING !== "undefined" ? READING : [];
const RD_BY = Object.fromEntries(RD_ALL.map(p => [p.id, p]));
const D_T5 = typeof TOEIC5 !== "undefined" ? TOEIC5 : [], D_T6 = typeof TOEIC6 !== "undefined" ? TOEIC6 : [];
const D_CM = typeof CLOZE_MC !== "undefined" ? CLOZE_MC : [], D_CO = typeof CLOZE_OPEN !== "undefined" ? CLOZE_OPEN : [], D_KW = typeof KWT !== "undefined" ? KWT : [];
const capW = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------------- Trạng thái (điểm cao nhất của mỗi bộ đề) ---------------- */
const _san45 = sanitize;
sanitize = function (raw) {
  const s = _san45(raw); s.exam = {};
  if (raw && raw.exam && typeof raw.exam === "object") for (const [k, v] of Object.entries(raw.exam)) if (/^[ed]-[\w-]{1,70}$/.test(k) && v) s.exam[k] = { best: clamp(num(v.best), 0, 1), n: Math.max(0, Math.round(num(v.n))), last: num(v.last) };
  return s;
};
const _fresh45 = fresh; fresh = () => { const s = _fresh45(); s.exam = {}; return s; };
const _merge45 = mergeState;
mergeState = function (a, b) {
  const m = _merge45(a, b); m.exam = { ...(a.exam || {}) };
  for (const [k, v] of Object.entries(b.exam || {})) { const x = m.exam[k]; m.exam[k] = !x ? v : { best: Math.max(x.best, v.best), n: Math.max(x.n, v.n), last: Math.max(x.last, v.last) }; }
  return m;
};
S = load();
const exRes = id => (S.exam || {})[id];

/* ---------------- Các bộ đề ---------------- */
const T5_CATS = {
  form: ["Dạng từ", "Chọn đúng loại từ hoặc dạng từ: danh từ, động từ, tính từ, trạng từ."],
  tense: ["Thì và dạng động từ", "Thì, chủ động và bị động, hòa hợp chủ vị, V-ing hay to V."],
  prep: ["Giới từ", "Giới từ và cụm giới từ cố định."],
  conj: ["Liên từ và từ nối", "Liên từ, từ nối, đại từ quan hệ."],
  pron: ["Đại từ và từ hạn định", "Đại từ, sở hữu, phản thân, từ hạn định."],
  vocab: ["Từ vựng công sở", "Từ vựng và kết hợp từ trong ngữ cảnh công việc."],
  quant: ["Lượng từ, so sánh, mạo từ", "Lượng từ, so sánh hơn và nhất, mạo từ."]
};
const EX_GROUPS = [
  ["t5", "TOEIC Part 5: hoàn thành câu", "Mỗi câu có một chỗ trống và bốn lựa chọn. Mỗi lượt lấy ngẫu nhiên tối đa 15 câu."],
  ["t6", "TOEIC Part 6: hoàn thành đoạn văn", "Một đoạn thư, thông báo hoặc bài báo có bốn chỗ trống, trong đó có một chỗ cần chọn cả câu."],
  ["cm", "Điền đoạn văn: chọn từ (kiểu Cambridge)", "Tám chỗ trống, mỗi chỗ bốn lựa chọn. Kiểm tra từ vựng, kết hợp từ, cụm động từ và từ nối."],
  ["co", "Điền đoạn văn: gõ từ (open cloze)", "Tám chỗ trống, mỗi chỗ gõ đúng một từ (mạo từ, giới từ, trợ động từ, đại từ quan hệ, từ nối)."],
  ["kw", "Viết lại câu với từ cho sẵn", "Điền 2 đến 5 từ, gồm từ cho sẵn (không đổi dạng), để câu thứ hai cùng nghĩa với câu thứ nhất. Mỗi lượt lấy 10 câu."]
];
const EX_SETS = [], EX_BY = {};
function addSet(s) { EX_SETS.push(s); EX_BY[s.id] = s; }
function t5Item(q) { return shuffleItemOpts({ t: "c", q: q.q, opts: q.opts.slice(), a: q.a, why: q.why, skill: q.cat === "vocab" ? "vocab" : "grammar", src: "t5:" + q.cat }); }
if (D_T5.length >= 30) addSet({ id: "t5-exam", group: "t5", title: "Thi thử Part 5 (30 câu)", sub: "Mô phỏng đề TOEIC hiện hành: 30 câu hoàn thành câu, lấy ngẫu nhiên từ cả ngân hàng", lvl: "B2", lvlText: "B1–B2", n: 30, build: () => shuffle(D_T5).slice(0, 30).map(t5Item) });
Object.keys(T5_CATS).forEach(cat => { const bank = D_T5.filter(q => q.cat === cat); if (bank.length) addSet({ id: "t5-" + cat, group: "t5", title: T5_CATS[cat][0], sub: T5_CATS[cat][1] + ` (${bank.length} câu)`, lvl: "B2", lvlText: "B1–B2", n: Math.min(15, bank.length), build: () => shuffle(bank).slice(0, 15).map(t5Item) }); });
if (D_T5.length) addSet({ id: "t5-mix", group: "t5", title: "Trộn mọi dạng", sub: `20 câu ngẫu nhiên từ cả ${D_T5.length} câu`, lvl: "B2", lvlText: "B1–B2", n: Math.min(20, D_T5.length), build: () => shuffle(D_T5).slice(0, 20).map(t5Item) });
function gapItems(p, typed) {
  const fills = p.gaps.map(g => typed ? g.ans[0] : g.opts[g.a]);
  return p.gaps.map((g, k) => {
    const base = { pass: { id: p.id, title: p.title, text: p.text, fills }, gap: k, why: g.why, skill: "grammar", src: "ex:" + p.id };
    if (typed) return { ...base, t: "po", ans: g.ans.slice() };
    const [opts, a] = shuffleChoice(g.opts, g.a); return { ...base, t: "p", opts, a, sentence: g.type === "sentence" };
  });
}
if (D_T6.length >= 4) addSet({ id: "t6-exam", group: "t6", title: "Thi thử Part 6 (4 đoạn, 16 câu)", sub: "Mô phỏng đề TOEIC hiện hành: 4 đoạn, mỗi đoạn 4 chỗ trống", lvl: "B2", lvlText: "B1–B2", n: 16, build: () => shuffle(D_T6).slice(0, 4).flatMap(p => gapItems(p, false)) });
D_T6.forEach((p, i) => addSet({ id: p.id, group: "t6", title: `Bài ${i + 1}: ${p.title}`, sub: `${capW(p.genre)}, 4 chỗ trống`, lvl: p.lvl, lvlText: p.lvl, n: 4, build: () => gapItems(p, false) }));
D_CM.forEach((p, i) => addSet({ id: p.id, group: "cm", title: `Bài ${i + 1}: ${p.title}`, sub: "8 chỗ trống, chọn từ", lvl: p.lvl, lvlText: p.lvl, n: 8, build: () => gapItems(p, false) }));
D_CO.forEach((p, i) => addSet({ id: p.id, group: "co", title: `Bài ${i + 1}: ${p.title}`, sub: "8 chỗ trống, gõ từ", lvl: p.lvl, lvlText: p.lvl, n: 8, build: () => gapItems(p, true) }));
["B1", "B2", "C1"].forEach(l => { const bank = D_KW.filter(q => q.lvl === l); if (bank.length) addSet({ id: "kw-" + l.toLowerCase(), group: "kw", title: `Viết lại câu, mức ${l}`, sub: `Ngân hàng ${bank.length} câu`, lvl: l, lvlText: l, n: Math.min(10, bank.length), build: () => shuffle(bank).slice(0, 10).map(q => ({ t: "w", s1: q.s1, key: q.key, start: q.start, ans: q.ans.slice(), why: q.why, skill: "grammar", src: "kw:" + q.id })) }); });
function readingItems(p) {
  return p.qs.map(q => {
    const fixed = q.kind === "tfng"; const [opts, a] = fixed ? [q.opts.slice(), q.a] : shuffleChoice(q.opts, q.a);
    return { t: "k", pass: { id: p.id, title: p.title, text: p.text }, q: q.q, opts, a, ev: q.ev || "", why: q.why, kind: q.kind, skill: "reading", src: "rd:" + p.id };
  });
}

/* ---------------- Khởi động phiên luyện tập cho các bộ mới ---------------- */
const _start45 = startPractice;
startPractice = function (arg) {
  const m = /^([ed])-(.+)$/.exec(arg || ""); if (!m) return _start45(arg);
  let items, title, back, track = "gen";
  if (m[1] === "e") { const s = EX_BY[m[2]]; if (!s) return false; items = s.build(); title = s.title; back = "#/exam"; }
  else { const p = RD_BY[m[2]]; if (!p) return false; items = readingItems(p); title = p.title; back = "#/reading/" + p.id; if (p.topic === "medical") track = "med"; }
  if (!items.length) return false;
  PX = { arg, kind: m[1], id: arg, title, back, track, items, i: 0, st: items.map(() => ({})), saved: false };
  return true;
};
Object.assign(PX_LABEL, { k: "đọc hiểu", p: "điền đoạn văn, chọn từ", po: "điền đoạn văn, gõ từ", w: "viết lại câu" });
const NEWT = { k: 1, p: 1, po: 1, w: 1 };
const PXV = { hide: false };

/* ---------------- Hiển thị câu hỏi ---------------- */
function passageParas(text, mapTok) { return text.split(/\n\n/).map(par => `<p>${mapTok ? mapTok(par) : esc(par)}</p>`).join(""); }
function gapPassage(it, st) {
  const cur = it.gap, fills = it.pass.fills;
  return `<div class="passage scroll" lang="en"><b class="passage-title">${esc(it.pass.title)}</b>${passageParas(it.pass.text, par => esc(par).replace(/\{(\d+)\}/g, (m, n) => {
    const k = +n - 1;
    if (k === cur) return `<span class="gap cur">${st.done ? esc(it.t === "po" ? it.ans[0] : it.opts[it.a]) : `(${n}) &nbsp;&nbsp;&nbsp;&nbsp;`}</span>`;
    return k < cur ? `<span class="gapdone">${esc(fills[k])}</span>` : `<span class="gapfuture">(${n}) ____</span>`;
  }))}</div>`;
}
function readPassage(it) {
  return `<div class="row between"><b class="passage-title" style="margin:0">${esc(it.pass.title)}</b><button class="btn quiet small" data-act="pxTogglePass">${PXV.hide ? "Hiện bài đọc" : "Ẩn bài đọc"}</button></div>${PXV.hide ? "" : `<div class="passage scroll" lang="en">${passageParas(it.pass.text)}</div>`}`;
}
function itemLabel(it) { return it.t === "p" || it.t === "po" ? `${it.pass.title}, chỗ trống ${it.gap + 1}` : it.t === "w" ? it.start : it.q; }
function itemAnswer(it) { return it.t === "k" || it.t === "p" || it.t === "c" ? it.opts[it.a] : it.t === "po" ? it.ans.join(" / ") : it.ans.join(" / "); }
const _pxBody45 = pxBody;
pxBody = function (it, st) {
  if (!NEWT[it.t]) return _pxBody45(it, st);
  const lbl = `<span class="step-kind">${PX.i + 1}/${PX.items.length}. ${capW(PX_LABEL[it.t])}</span>`;
  const opts = () => `<div class="choices">${it.opts.map((o, k) => { const cls = st.done ? (k === it.a ? " right" : st.pick === k ? " wrong" : "") : ""; return `<button class="choice${cls}" data-act="pxPick" data-o="${k}" ${st.done ? "disabled" : ""} lang="en">${esc(o)}</button>`; }).join("")}</div>`;
  const input = ph => `<div class="row"><input class="field" id="pxIn" style="flex:1;min-width:200px" value="${esc(st.val || "")}" data-enter="pxCheck" ${st.done ? "disabled" : "data-autofocus"} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" placeholder="${ph}" aria-label="Câu trả lời"><button class="btn primary" data-act="pxCheck" ${st.done ? "disabled" : ""}>Kiểm tra</button></div>`;
  let body = "";
  if (it.t === "k") body = `${readPassage(it)}<p class="q" lang="en" style="margin-top:12px">${esc(it.q)}</p>${opts()}`;
  else if (it.t === "p") body = `${gapPassage(it, st)}<p class="muted small" style="margin:8px 0 4px">${it.sentence ? "Chọn câu hợp lý nhất cho chỗ trống " : "Chọn đáp án cho chỗ trống "}(${it.gap + 1}).</p>${opts()}`;
  else if (it.t === "po") body = `${gapPassage(it, st)}<p class="muted small" style="margin:8px 0 4px">Gõ MỘT từ cho chỗ trống (${it.gap + 1}).</p>${input("Gõ một từ")}`;
  else if (it.t === "w") body = `<p class="muted">Điền 2 đến 5 từ, gồm từ cho sẵn (không đổi dạng), để câu thứ hai cùng nghĩa với câu thứ nhất.</p>
    <p class="cloze" lang="en">${esc(it.s1)}</p><p style="margin:10px 0"><span class="keybox" lang="en">${esc(it.key)}</span></p>
    <p class="cloze" lang="en">${gapify(it.start, st.done ? it.ans[0] : "")}</p>${input("Gõ chỗ trống, gồm từ cho sẵn")}`;
  let fb = "";
  if (st.done) {
    const ev = it.t === "k" && it.ev ? ` <span class="muted small">Bằng chứng trong bài: “<span lang="en">${esc(it.ev)}</span>”.</span>` : "";
    fb = `<div class="feedback ${st.ok ? "ok" : "no"}" role="status"><b>${st.ok ? "Đúng." : "Đáp án:"}</b> ${st.ok && it.t !== "w" && it.t !== "po" ? "" : `<span class="en" lang="en">${esc(itemAnswer(it))}</span>. `}${esc(it.why || "")}${ev}</div>`;
  }
  return lbl + body + fb;
};
/* Mở rộng dạng viết tắt để "shouldn't have" và "should not have" được chấm như nhau ('s và 'd không mở rộng vì mơ hồ). */
function expandC(t) {
  return t.replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not").replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not")
    .replace(/\b(\w+)n't\b/g, "$1 not").replace(/\b(\w+)'ll\b/g, "$1 will").replace(/\b(\w+)'ve\b/g, "$1 have").replace(/\b(\w+)'re\b/g, "$1 are").replace(/\bi'm\b/g, "i am").replace(/\s+/g, " ").trim();
}
/* Câu gõ: so khớp đúng từng chữ (không nhận lỗi chính tả gần đúng vì has/had, is/was khác nghĩa). */
const _pxCheck45 = ACT.pxCheck;
ACT.pxCheck = function () {
  const it = PX.items[PX.i]; if (it.t !== "w" && it.t !== "po") return _pxCheck45();
  const st = PX.st[PX.i]; if (st.done) return; st.val = $("#pxIn")?.value || ""; const v = norm(st.val); if (!v) return;
  const ex = expandC(v); pxMark(it.ans.some(a => expandC(norm(a)) === ex));
};
ACT.pxTogglePass = function () { PXV.hide = !PXV.hide; render(); };

/* ---------------- Màn kết quả cho bộ mới ---------------- */
const _pxFinish45 = pxFinish;
pxFinish = function () {
  if (PX.kind !== "e" && PX.kind !== "d") return _pxFinish45();
  const tot = PX.items.length, ok = PX.st.filter(s => s.ok).length, sc = ok / tot;
  if (!PX.saved) { PX.saved = true; S.exam = S.exam || {}; const p = S.exam[PX.arg]; S.exam[PX.arg] = { best: Math.max(p?.best || 0, sc), n: (p?.n || 0) + 1, last: Date.now() }; touch(); save(); }
  const by = {}; PX.items.forEach((it, k) => { const b = by[it.t] || (by[it.t] = [0, 0]); b[1]++; if (PX.st[k].ok) b[0]++; });
  const wrong = PX.items.map((it, k) => [it, PX.st[k]]).filter(([, s]) => !s.ok);
  return `<span class="step-kind">Kết quả</span><h1>${esc(PX.title)}</h1><div class="row" style="gap:18px"><div class="result-num">${Math.round(sc * 100)}%</div><p class="muted">${ok}/${tot} câu đúng<br>${sc >= 0.7 ? "Đạt yêu cầu." : "Cần 70% để đạt."}</p></div>
    <div>${Object.entries(by).map(([t, [o, n]]) => `<div class="skill"><span>${PX_LABEL[t]}</span><div class="bar"><i style="width:${o / n * 100}%"></i></div><span class="n">${o}/${n}</span></div>`).join("")}</div>
    ${wrong.length ? `<h3>Xem lại câu sai</h3><div class="list">${wrong.map(([it]) => `<div class="item"><span class="grow"><span class="s">${PX_LABEL[it.t]}</span><br><span class="en" lang="en">${esc(itemLabel(it))}</span><br><span class="small"><b>Đáp án:</b> <span lang="en">${esc(itemAnswer(it))}</span></span><br><span class="muted small">${esc(it.why || "")}</span></span></div>`).join("")}</div>` : `<div class="feedback ok">Không sai câu nào.</div>`}
    <div class="row">${wrong.length ? `<button class="btn primary" data-act="pxRetryWrong">Làm lại ${wrong.length} câu sai</button>` : ""}<button class="btn" data-act="pxRestart">Làm lượt mới</button><a class="btn quiet" href="${PX.back}">Quay lại</a></div>`;
};

/* ---------------- Trang Luyện đề ---------------- */
Object.assign(ICONS, { clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', cal: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>', flame: '<path d="M12 3c1 3 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>', trophy: '<path d="M8 4h8v5a4 4 0 01-8 0zM8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3M12 13v4M9 20h6"/>', exam: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>', reading: '<path d="M3 5h7a2 2 0 012 2v12a2 2 0 00-2-2H3zM21 5h-7a2 2 0 00-2 2v12a2 2 0 012-2h7z"/>' });
NAV4[0][1].splice(3, 0, ["exam", "Luyện đề", "exam", "#d9486b"]);
NAV4[1][1].splice(1, 0, ["reading", "Kho luyện đọc", "reading", "#2f8fd8"]);
const _isStudy45 = isStudyRoute;
isStudyRoute = () => _isStudy45() || (ROUTE.name === "reading" && !!ROUTE.arg) || ROUTE.name === "exam";
const scoreChip = r => r ? `<span class="chip ${r.best >= 0.7 ? "good" : "acc"}">${Math.round(r.best * 100)}%</span>` : `<span class="chip">chưa làm</span>`;
const lk = (u, t) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
function sourcesPanel() {
  return `<section class="panel stack" style="margin-top:22px"><h3>Nguồn chính thức và nguồn mở để luyện thêm</h3>
    <p class="muted small">Toàn bộ câu hỏi và đoạn văn trong app do tác giả tự biên soạn, không sao chép từ đề thi hay sách. Danh sách dưới đây là nơi bạn có thể tìm đặc tả đề thi chính thức và văn bản đọc thêm có giấy phép cho phép. Thông tin giấy phép ghi theo trang của từng nguồn khi tra cứu ngày 01.10.2026, hãy đọc lại điều khoản trước khi sao chép.</p>
    <div class="list">
      <div class="item"><span class="grow"><b>Đặc tả đề thi chính thức</b><br><span class="small">${lk("https://www.ets.org/toeic/about/listening-reading.html", "TOEIC Listening & Reading (ETS)")} · ${lk("https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading", "IELTS Academic Reading")} · ${lk("https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/", "Cambridge B2 First")} · ${lk("https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/", "Cambridge C1 Advanced")} · ${lk("https://vstep.vnu.edu.vn/test-format/", "VSTEP.3-5 (ĐHQG Hà Nội)")}</span></span></div>
      <div class="item"><span class="grow"><b>Văn bản đọc thêm, được sao chép kèm ghi công</b><br><span class="small">${lk("https://learningenglish.voanews.com", "VOA Learning English")} (nội dung VOA tự viết thuộc phạm vi công cộng, ghi nguồn) · ${lk("https://medlineplus.gov", "MedlinePlus")} (trừ A.D.A.M. và chuyên khảo thuốc) · ${lk("https://www.nhs.uk", "NHS")} (Open Government Licence v3.0, không dùng logo và hình) · ${lk("https://www.gutenberg.org", "Project Gutenberg")} (sách thuộc phạm vi công cộng) · ${lk("https://tatoeba.org", "Tatoeba")} (câu ví dụ, CC BY 2.0 FR)</span></span></div>
      <div class="item"><span class="grow"><b>Văn bản mở, bản phái sinh phải giữ cùng giấy phép (CC BY-SA)</b><br><span class="small">${lk("https://simple.wikipedia.org", "Simple English Wikipedia")} · ${lk("https://en.wikibooks.org", "Wikibooks")}</span></span></div>
      <div class="item"><span class="grow"><b>Chỉ để tham khảo, không sao chép</b><br><span class="small">Đề thi chính thức của ETS, IELTS và Cambridge; English Vocabulary Profile; British Council LearnEnglish.</span></span></div>
    </div></section>`;
}
function viewExam() {
  const sets = EX_SETS.length, done = EX_SETS.filter(s => exRes("e-" + s.id)).length;
  const card = s => `<a class="gcard" href="#/practice/e-${s.id}"><div class="row between"><span class="lv lv-${s.lvl}">${s.lvlText}</span>${scoreChip(exRes("e-" + s.id))}</div><b>${esc(s.title)}</b><span class="muted small">${esc(s.sub)}</span><span class="muted small">${s.n} câu mỗi lượt</span></a>`;
  const rd = RD_ALL.length;
  return `<section class="page-head"><h1>Luyện đề</h1><p class="lede">Các dạng bài thường gặp trong TOEIC, VSTEP, IELTS và Cambridge. Mỗi câu trắc nghiệm chỉ có một đáp án đúng, có giải thích bằng tiếng Việt. Đạt từ 70% là qua bộ đề. Bạn đã làm ${done}/${sets} bộ.</p></section>
    <section class="panel stack"><div class="row between"><div><b>Đọc hiểu</b><br><span class="muted small">${rd} đoạn văn ngắn từ A2 đến C1, mỗi đoạn có 5 câu hỏi kèm bằng chứng trong bài.</span></div><a class="btn primary" href="#/reading">Mở Kho luyện đọc</a></div></section>
    ${EX_GROUPS.map(([g, name, desc]) => { const ss = EX_SETS.filter(s => s.group === g); return ss.length ? `<h2 class="sec-h">${name}</h2><p class="muted small" style="margin:-4px 0 10px">${desc}</p><div class="topics">${ss.map(card).join("")}</div>` : ""; }).join("")}
    ${EX_SETS.length ? "" : `<div class="empty"><p>Chưa có bộ đề nào.</p></div>`}
    ${sourcesPanel()}
    <section class="panel stack" style="margin-top:22px"><h3>Cách luyện hiệu quả</h3>
      <p><b>Part 5</b>: đọc cả câu rồi mới nhìn lựa chọn. Xác định chỗ trống cần loại từ gì (danh từ, động từ, tính từ, trạng từ) trước khi nghĩ đến nghĩa.</p>
      <p><b>Part 6 và điền đoạn văn</b>: đọc cả đoạn, vì nhiều chỗ trống phụ thuộc câu trước và câu sau. Với câu cần chọn nguyên câu, kiểm tra từ nối, đại từ và thì.</p>
      <p><b>Viết lại câu</b>: nhận ra cấu trúc đang được kiểm tra (bị động, tường thuật, điều kiện, so sánh…) rồi dùng đúng từ cho sẵn, không đổi dạng.</p></section>`;
}

/* ---------------- Kho luyện đọc ---------------- */
const RDF = { lvl: "", topic: "", sel: "", gist: false };
const GLOSS = (() => {
  const m = {}, ord = ["A2", "B1", "B2", "C1", "T1", "T2"];
  LIB.forEach(t => t.words.forEach(w => { if (!ord.includes(w.lvl) || /[\s·]/.test(w.w)) return; const k = w.w.toLowerCase(); if (!m[k]) m[k] = w; }));
  return m;
})();
function glossFind(tok) {
  const l = tok.toLowerCase().replace(/'s$/, ""); if (l.length < 3) return null;
  const c = [l, l.replace(/ies$/, "y"), l.replace(/es$/, ""), l.replace(/s$/, ""), l.replace(/ed$/, ""), l.replace(/d$/, ""), l.replace(/ing$/, ""), l.replace(/ing$/, "e"), l.replace(/(.)\1ing$/, "$1"), l.replace(/(.)\1ed$/, "$1"), l.replace(/ly$/, "")];
  for (const x of c) if (GLOSS[x]) return GLOSS[x];
  return null;
}
function glossText(text) {
  return passageParas(text, par => par.replace(/([A-Za-z]+(?:'[A-Za-z]+)?)|([^A-Za-z]+)/g, (m, tok, other) => { if (other) return esc(other); const w = glossFind(tok); return w ? `<button class="rw" data-act="rdWord" data-k="${esc(w.key)}">${esc(tok)}</button>` : esc(tok); }));
}
const rdGenre = { email: "Thư điện tử", notice: "Thông báo", article: "Bài báo", blog: "Blog", dialogue: "Hội thoại", leaflet: "Tờ hướng dẫn", report: "Báo cáo", advert: "Quảng cáo", story: "Truyện ngắn", news: "Tin tức", abstract: "Tóm tắt nghiên cứu", letter: "Thư" };
const rdTopic = { daily: "Đời sống", work: "Công việc", travel: "Du lịch", health: "Sức khỏe", education: "Giáo dục", environment: "Môi trường", technology: "Công nghệ", society: "Xã hội", culture: "Văn hóa", science: "Khoa học", medical: "Y khoa" };
const wordCount = t => (t.match(/[A-Za-z0-9'’\-]+/g) || []).length;
function viewReading() {
  if (ROUTE.arg && RD_BY[ROUTE.arg]) return viewRead(RD_BY[ROUTE.arg]);
  const lv = ["A2", "B1", "B2", "C1"];
  const list = RD_ALL.filter(p => (!RDF.lvl || p.lvl === RDF.lvl) && (!RDF.topic || (RDF.topic === "med" ? p.topic === "medical" : p.topic !== "medical")));
  const done = RD_ALL.filter(p => exRes("d-" + p.id)).length;
  const btn = (act, key, val, label, cur) => `<button class="exm-btn ${cur === val ? "on" : ""}" data-act="${act}" data-v="${val}">${label}</button>`;
  const card = p => { const n = wordCount(p.text); return `<a class="gcard" href="#/reading/${p.id}"><div class="row between"><span class="lv lv-${p.lvl}">${p.lvl}</span>${scoreChip(exRes("d-" + p.id))}</div><b lang="en">${esc(p.title)}</b><span class="muted small">${rdGenre[p.genre] || p.genre}, ${rdTopic[p.topic] || p.topic}</span><span class="muted small">${n} từ, khoảng ${Math.max(1, Math.round(n / 120))} phút đọc, ${p.qs.length} câu hỏi</span></a>`; };
  return `<section class="page-head"><h1>Kho luyện đọc</h1><p class="lede">${RD_ALL.length} đoạn văn ngắn do tác giả tự viết, từ A2 đến C1, gồm thư, thông báo, bài báo, hội thoại và tài liệu y khoa. Chạm vào từ gạch chân để xem nghĩa và thêm vào lịch ôn. Bạn đã làm ${done}/${RD_ALL.length} bài.</p></section>
    <div class="filterbar"><div class="lv-filter">${btn("rdFilter", "lvl", "", "Mọi cấp", RDF.lvl)}${lv.map(l => btn("rdFilter", "lvl", l, l, RDF.lvl)).join("")}</div>
    <div class="lv-filter">${btn("rdTopic", "topic", "", "Tất cả", RDF.topic)}${btn("rdTopic", "topic", "gen", "Phổ thông", RDF.topic)}${btn("rdTopic", "topic", "med", "Y khoa", RDF.topic)}</div></div>
    ${list.length ? `<div class="topics">${list.map(card).join("")}</div>` : `<div class="empty"><p>Không có bài nào khớp bộ lọc.</p></div>`}`;
}
function viewRead(p) {
  const n = wordCount(p.text), sel = RDF.sel && LIB_WORD[RDF.sel], inReview = sel && S.cards[`V:${sel.key}:r`];
  const panel = sel ? `<div class="panel stack gloss-panel"><div class="row between"><span><b lang="en" style="font-size:20px">${esc(sel.w)}</b> <span class="pos">${esc(sel.pos)}</span> ${hear(sel.w)}</span><button class="btn quiet small" data-act="rdWord" data-k="">Đóng</button></div><p style="margin:4px 0">${esc(sel.vi)}</p>${sel.ex ? `<p class="example" lang="en" style="font-size:16px">${esc(sel.ex)}</p>` : ""}${inReview ? `<span class="chip good">Đã có trong lịch ôn</span>` : `<button class="btn" data-act="rdAdd" data-k="${esc(sel.key)}">Thêm vào lịch ôn</button>`}</div>` : `<p class="muted small">Chạm vào từ gạch chân để xem nghĩa.</p>`;
  const r = exRes("d-" + p.id);
  return `<section class="page-head"><a class="muted small" href="#/reading">Kho luyện đọc</a><h1 lang="en">${esc(p.title)}</h1><div class="exrow"><span class="lv lv-${p.lvl}">${p.lvl}</span><span class="chip">${rdGenre[p.genre] || p.genre}</span><span class="chip">${rdTopic[p.topic] || p.topic}</span><span class="chip">${n} từ</span>${scoreChip(r)}</div></section>
    <article class="passage" lang="en">${glossText(p.text)}</article>
    <div class="row" style="margin:12px 0">${hear(p.text, "Nghe cả bài")}<button class="btn quiet small" data-act="rdGist">${RDF.gist ? "Ẩn tóm tắt" : "Xem tóm tắt tiếng Việt"}</button></div>
    ${RDF.gist ? `<p class="example-vi">${esc(p.gist)}</p>` : ""}
    ${panel}
    <div class="row" style="margin-top:16px"><a class="btn primary" href="#/practice/d-${p.id}">Làm bài (${p.qs.length} câu hỏi)</a><a class="btn quiet" href="#/reading">Chọn bài khác</a></div>`;
}
EXTRA_VIEWS.exam = viewExam; EXTRA_VIEWS.reading = viewReading;
Object.assign(ACT, {
  rdFilter(el) { RDF.lvl = el.dataset.v; render(); },
  rdTopic(el) { RDF.topic = el.dataset.v; render(); },
  rdWord(el) { RDF.sel = el.dataset.k; render(); },
  rdAdd(el) { const w = LIB_WORD[el.dataset.k]; if (w) { addWordCards(w, false); save(); } render(); },
  rdGist() { RDF.gist = !RDF.gist; render(); }
});
addEventListener("hashchange", () => { if (ROUTE.name !== "reading") { RDF.sel = ""; RDF.gist = false; } });

/* ---------------- Tiến bộ: bổ sung lộ trình, vốn từ theo cấp, ngữ pháp, luyện đề ---------------- */

/* Biểu đồ ra-đa kỹ năng: mỗi trục là một kỹ năng, bán kính là tỉ lệ đúng ngay lần đầu (đã hiệu chỉnh khi ít dữ liệu). */
function radarPanel() {
  const ks = Object.entries(SKILLS), n = ks.length, cx = 170, cy = 150, R = 100;
  const pt = (i, r) => { const a = -Math.PI / 2 + 2 * Math.PI * i / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const sc = ks.map(([k]) => skillScore(k));
  const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon points="${ks.map((_, i) => pt(i, R * f).map(v => v.toFixed(1)).join(",")).join(" ")}" class="rd-ring"/>`).join("");
  const axes = ks.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="rd-axis"/>`; }).join("");
  const poly = sc.map((s, i) => pt(i, R * (s.p == null ? 0 : s.p)).map(v => v.toFixed(1)).join(",")).join(" ");
  const dots = sc.map((s, i) => { if (s.p == null) return ""; const [x, y] = pt(i, R * s.p); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" class="rd-dot"/>`; }).join("");
  const labels = ks.map(([, name], i) => { const [x, y] = pt(i, R + 22), anchor = Math.abs(x - cx) < 8 ? "middle" : x > cx ? "start" : "end"; return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}" class="rd-lbl">${name}</text>`; }).join("");
  const have = sc.filter(s => s.p != null);
  const rows = ks.map(([, name], i) => `<span class="rd-row"><span>${name}</span><b>${sc[i].p == null ? "chưa có" : Math.round(sc[i].p * 100) + "%"}</b><span class="muted small">${sc[i].n ? sc[i].n + " lần" : ""}</span></span>`).join("");
  return `<section class="panel stack"><h3>Kỹ năng</h3>
    <svg class="radar" viewBox="-50 0 440 300" role="img" aria-label="Biểu đồ ra-đa kỹ năng: ${ks.map(([, nm], i) => nm + " " + (sc[i].p == null ? "chưa có" : Math.round(sc[i].p * 100) + "%")).join(", ")}">${rings}${axes}${have.length ? `<polygon points="${poly}" class="rd-area"/>` : ""}${dots}${labels}</svg>
    <div class="rd-rows">${rows}</div>
    <p class="muted small">Bán kính là tỉ lệ đúng ngay lần đầu trong 40 lần gần nhất của mỗi kỹ năng, được hiệu chỉnh khi còn ít dữ liệu. Kỹ năng chưa luyện nằm ở tâm. Số lần cho biết điểm đáng tin đến đâu.</p></section>`;
}
const _viewProgress45 = viewProgress;
viewProgress = function () {
  let h = _viewProgress45();
  h = h.replace('class="grid3" style="grid-template-columns:repeat(4,minmax(0,1fr))"', 'class="grid4"');
  { const kinds = [["clock", "#3158d4"], ["cal", "#0f8c8c"], ["flame", "#e0622f"], ["trophy", "#1b7a45"]]; let n = 0;
    h = h.replace(/<div class="stat"><b>/g, m => { const k = kinds[n++]; return k ? `<div class="stat"><span class="stat-ic" style="--ic:${k[1]}">${ic(k[0], 18)}</span><b>` : m; }); }
  h = h.replace(/<i style="height:([\d.]+)%/g, (m, v) => `<i style="height:${Math.round(v * 0.8)}px`);
  /* Bỏ hai mục "Bài học và thẻ", "Phòng khám và phát âm"; thay biểu đồ thanh kỹ năng bằng biểu đồ ra-đa. */
  const dropSec = title => { const i = h.indexOf(`<h3>${title}</h3>`); if (i < 0) return; const a = h.lastIndexOf("<section", i), b = h.indexOf("</section>", i); if (a >= 0 && b > i) h = h.slice(0, a) + h.slice(b + 10); };
  dropSec("Bài học và thẻ"); dropSec("Phòng khám và phát âm");
  h = h.replace(/<div class="grid2" style="margin-top:14px">\s*<\/div>/g, "");
  { const i = h.indexOf("<h3>Kỹ năng</h3>"); if (i >= 0) { const a = h.lastIndexOf("<section", i), b = h.indexOf("</section>", i); h = h.slice(0, a) + radarPanel() + h.slice(b + 10); } }
  h = h.replace('<p class="lede">Mọi con số ở đây đến từ việc bạn thực sự đã làm. Không có điểm khởi tạo sẵn.</p>', '<p class="lede">Mọi con số ở đây đến từ việc bạn thực sự đã làm. Không có điểm khởi tạo sẵn.</p>');
  h = h.replace('<h3>12 tuần</h3><div class="heat"', '<h3>12 tuần</h3><div class="heat-legend muted small"><span>Ít</span><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>Nhiều</span></div><div class="heat"');
  const bar = (label, cls, p, n) => `<div class="skill ${cls}"><span>${label}</span><div class="bar"><i style="width:${Math.min(100, p * 100)}%;${cls ? "background:var(--lc)" : ""}"></i></div><span class="n">${n}</span></div>`;
  /* Lộ trình */
  const gu = UNITS.filter(u => u.track === "gen"), mu = UNITS.filter(u => u.track === "med");
  const pctOf = us => us.length ? us.reduce((a, u) => a + Math.min(1, unitParts(u).pct), 0) / us.length : 0;
  const passed = us => us.filter(u => unitParts(u).pct >= 0.8).length;
  const cur = gu.find(u => unitParts(u).pct < 0.8);
  const pathPanel = `<section class="panel stack"><div class="row between"><h3 style="margin:0">Lộ trình</h3><a class="btn quiet small" href="#/path">Mở lộ trình</a></div>
    ${bar("Phổ thông", "", pctOf(gu), `${passed(gu)}/${gu.length} chặng`)}${bar("Y khoa", "", pctOf(mu), `${passed(mu)}/${mu.length} chặng`)}
    <p class="muted small">${cur ? `Đang học chặng <b>${esc(cur.code)}</b>, ${esc(cur.vi)}. ` : "Bạn đã qua mọi chặng phổ thông. "}Qua chặng khi đạt 80%.</p></section>`;
  /* Vốn từ theo cấp độ */
  const lvRows = ["A1", "A2", "B1", "B2", "C1"].map(l => { const ws = LIB.filter(t => t.track === "gen").flatMap(t => t.words).filter(w => w.lvl === l), d = ws.filter(isLearned).length; return bar(l, "lv-" + l, ws.length ? d / ws.length : 0, `${d}/${ws.length}`); }).join("");
  const medRows = ["T1", "T2"].map(l => { const ws = LIB.filter(t => t.track === "med").flatMap(t => t.words).filter(w => w.lvl === l), d = ws.filter(isLearned).length; return bar(lvName(l), "lv-" + l, ws.length ? d / ws.length : 0, `${d}/${ws.length}`); }).join("");
  const vocabPanel = `<section class="panel stack"><div class="row between"><h3 style="margin:0">Vốn từ theo cấp độ</h3><a class="btn quiet small" href="#/library">Thư viện</a></div>${lvRows}<div class="divider"></div>${medRows}<p class="muted small">Tính từ đã học hoặc đã đánh dấu biết. Mục tiêu thực tế là hoàn thành A1 và A2 trước, sau đó mới sang B1.</p></section>`;
  /* Ngữ pháp, luyện đề, đọc */
  const gDone = GRAMMAR.filter(g => (S.gram[g.id]?.best || 0) >= 0.7).length;
  const gRows = ["A1", "A2", "B1", "B2", "C1"].map(l => { const gs = GRAMMAR.filter(g => g.lvl === l), d = gs.filter(g => (S.gram[g.id]?.best || 0) >= 0.7).length; return bar(l, "lv-" + l, gs.length ? d / gs.length : 0, `${d}/${gs.length}`); }).join("");
  const ex = S.exam || {}, exDone = EX_SETS.filter(s => ex["e-" + s.id]), rdDone = RD_ALL.filter(p => ex["d-" + p.id]);
  const avg = a => a.length ? Math.round(100 * a.reduce((x, y) => x + y, 0) / a.length) + "%" : "chưa có";
  const exAvg = avg(exDone.map(s => ex["e-" + s.id].best)), rdAvg = avg(rdDone.map(p => ex["d-" + p.id].best));
  const recent = Object.entries(ex).sort((a, b) => b[1].last - a[1].last).slice(0, 5).map(([k, v]) => {
    const id = k.slice(2), s = k[0] === "e" ? EX_BY[id] : RD_BY[id]; if (!s) return "";
    return `<a class="item link" href="${k[0] === "e" ? "#/practice/" + k : "#/reading/" + id}"><span class="grow">${esc(s.title)}<br><span class="muted small">${k[0] === "e" ? "Luyện đề" : "Đọc hiểu"}, ${new Date(v.last).toLocaleDateString("vi-VN")}, ${v.n} lượt</span></span><span class="chip ${v.best >= 0.7 ? "good" : "acc"}">${Math.round(v.best * 100)}%</span></a>`;
  }).join("");
  const examPanel = `<section class="panel stack"><div class="row between"><h3 style="margin:0">Ngữ pháp, luyện đề và đọc</h3><a class="btn quiet small" href="#/exam">Luyện đề</a></div>
    ${bar("Ngữ pháp", "", GRAMMAR.length ? gDone / GRAMMAR.length : 0, `${gDone}/${GRAMMAR.length}`)}
    ${bar("Bộ đề", "", EX_SETS.length ? exDone.length / EX_SETS.length : 0, `${exDone.length}/${EX_SETS.length}${exDone.length ? ", TB " + exAvg : ""}`)}
    ${bar("Bài đọc", "", RD_ALL.length ? rdDone.length / RD_ALL.length : 0, `${rdDone.length}/${RD_ALL.length}${rdDone.length ? ", TB " + rdAvg : ""}`)}
    <details><summary class="muted small" style="cursor:pointer">Ngữ pháp theo cấp độ</summary>${gRows}</details>
    ${recent ? `<h4 style="margin:6px 0 0">Làm gần đây</h4><div class="list">${recent}</div>` : `<p class="muted small">Chưa làm bộ đề hay bài đọc nào.</p>`}</section>`;
  /* Gợi ý từ kỹ năng yếu nhất */
  const sk = Object.entries(SKILLS).map(([k, name]) => [name, skillScore(k)]).filter(([, s]) => s.n >= 5).sort((a, b) => a[1].p - b[1].p)[0];
  const tip = sk ? `<div class="feedback ${sk[1].p < 0.6 ? "no" : "ok"}" style="margin-top:14px"><b>Kỹ năng cần chú ý:</b> ${sk[0]} (${Math.round(sk[1].p * 100)}% đúng ngay lần đầu, ${sk[1].n} lần). ${{ "Ngữ pháp": "Làm thêm bộ đề trong Luyện đề.", "Đọc": "Chọn một bài ở Kho luyện đọc.", "Từ vựng": "Ôn thẻ đến hạn trong mục Ôn tập." }[sk[0]] || "Luyện thêm ở mục Lộ trình."}</div>` : "";
  const block = `<div class="grid2" style="margin-top:14px">${pathPanel}${vocabPanel}</div><div style="margin-top:14px">${examPanel}</div>${tip}`;
  const i = h.indexOf('<div class="grid2" style="margin-top:14px">');
  return i < 0 ? h + block : h.slice(0, i) + block + h.slice(i);
};

/* ---------------- Thanh công cụ: phân nhóm công tắc ---------------- */
toolbar = function () {
  const st = S.settings, sy = syncCfg().token ? SYNC.status || "idle" : "off";
  const th = [["light", "sun", "Sáng"], ["dark", "moon", "Tối"], ["system", "auto", "Theo thiết bị"]];
  const themeSeg = `<span class="seg" role="radiogroup" aria-label="Giao diện">${th.map(([v, i, l]) => `<button class="seg-b ${st.theme === v ? "on" : ""}" role="radio" aria-checked="${st.theme === v}" data-act="tbThemeSet" data-t="${v}" title="Giao diện: ${l}" aria-label="Giao diện ${l}">${ic(i, 16)}</button>`).join("")}</span>`;
  return `<div class="toolbar" role="toolbar" aria-label="Công cụ nhanh">
    <div class="tb-group" role="group" aria-label="Giọng đọc"><span class="tb-cap">Giọng đọc</span>
      <button class="tb acc-tog" data-act="tbAccent" title="Đổi giọng Anh-Mỹ / Anh-Anh" aria-label="Giọng ${st.accent === "uk" ? "Anh-Anh" : "Anh-Mỹ"}. Bấm để đổi"><span class="${st.accent === "us" ? "on" : ""}">US</span><span class="${st.accent === "uk" ? "on" : ""}">UK</span></button>${rateBtn()}</div>
    <div class="tb-group" role="group" aria-label="Giao diện"><span class="tb-cap">Giao diện</span>${themeSeg}</div>
    <div class="tb-group" role="group" aria-label="Đồng bộ"><span class="tb-cap">Đồng bộ</span><a class="tb sync-dot s-${sy}" href="#/sync" title="${esc(syncTitle())}" aria-label="${esc(syncTitle())}">${ic("cloud", 18)}<i></i></a></div>
    <span id="timer" class="timer-pill" aria-live="off"></span></div>`;
};
ACT.tbThemeSet = function (el) { const st = S.settings; st.theme = el.dataset.t; S.settingsAt = Date.now(); touch(); save(); applyTheme(); render(); };

/* ---------------- Trang chủ (Hôm nay): dải tóm tắt và lối tắt ---------------- */
const _viewToday45 = viewToday;
viewToday = function () {
  let h = _viewToday45();
  const secs = (S.time.days || {})[dayKey(Date.now())] || 0, goal = S.settings.goal, mins = Math.floor(secs / 60), pct = Math.min(100, Math.round(100 * mins / goal));
  const due = dueList().length, stk = streak();
  const strip = `<section class="today-strip" aria-label="Tóm tắt hôm nay">
    <div class="ts-card ts-main"><div class="row between"><b>Hôm nay</b><span class="muted small">${mins}/${goal} phút</span></div><div class="bar"><i style="width:${pct}%;${pct >= 100 ? "background:var(--good)" : ""}"></i></div></div>
    <a class="ts-card" href="#/review"><b>${due}</b><span class="muted small">thẻ đến hạn</span></a>
    <div class="ts-card"><b>${stk}</b><span class="muted small">ngày liên tiếp</span></div></section>
    <nav class="quick" aria-label="Lối tắt"><a class="btn" href="#/review">${ic("cards", 16)} Ôn tập</a><a class="btn" href="#/exam">${ic("exam", 16)} Luyện đề</a><a class="btn" href="#/reading">${ic("reading", 16)} Đọc</a><a class="btn" href="#/path">${ic("path", 16)} Lộ trình</a></nav>`;
  const i = h.indexOf("</section>"); h = i < 0 ? strip + h : h.slice(0, i + 10) + strip + h.slice(i + 10);
  /* Mục tiêu hôm nay: thêm biểu tượng vào ba ô số liệu. */
  const gi = h.indexOf("<h3>Mục tiêu hôm nay</h3>");
  if (gi >= 0) { const kinds = [["flame", "#e0622f"], ["cards", "#7a63d6"], ["book", "#3158d4"]]; let n = 0, head = h.slice(0, gi), tail = h.slice(gi);
    tail = tail.replace('<div class="grid3">', '<div class="grid3 goal-stats">').replace(/<div class="stat"><b>/g, m => { const k = kinds[n++]; return k ? `<div class="stat"><span class="stat-ic" style="--ic:${k[1]}">${ic(k[0], 18)}</span><b>` : m; }); h = head + tail; }
  return h;
};

/* ---------------- Từ của tôi: thống kê, lọc theo mức nhớ, dòng gọn ---------------- */
const WF = { st: "" };
const WF_OPTS = [["", "Tất cả"], ["moi", "Mới"], ["dang", "Đang học"], ["cung", "Đang củng cố"], ["vung", "Đã vững"]];
const WF_MAP = { "mới": "moi", "đang học": "dang", "đang củng cố": "cung", "đã vững": "vung" };
const _viewWords45 = viewWords;
viewWords = function () {
  let h = _viewWords45();
  if ((ROUTE.arg || "list") !== "list") return h;
  const c = cardStats(), due = dueList().length;
  const strip = `<div class="word-stats"><div class="ts-card"><b>${c.total}</b><span class="muted small">thẻ</span></div><div class="ts-card"><b>${c.learning + c.new}</b><span class="muted small">mới và đang học</span></div><div class="ts-card"><b>${c.young}</b><span class="muted small">đang củng cố</span></div><div class="ts-card"><b>${c.mature}</b><span class="muted small">đã vững</span></div></div>
    <div class="row" style="margin:10px 0"><a class="btn primary small" href="#/review">${due ? `Ôn ${due} thẻ đến hạn` : "Mở Ôn tập"}</a><a class="btn small" href="#/library">Thêm từ từ Thư viện</a></div>`;
  const filt = `<div class="lv-filter" id="wfilter" role="group" aria-label="Lọc theo mức nhớ">${WF_OPTS.map(([v, l]) => `<button class="exm-btn ${WF.st === v ? "on" : ""}" data-act="wfSt" data-v="${v}">${l}</button>`).join("")}</div><p class="muted small" id="wcount" style="margin:6px 0 0"></p>`;
  h = h.replace(/(<p class="lede">[\s\S]*?<\/p>)/, "$1" + strip);
  return h.replace('<div id="wlist"', filt + '<div id="wlist"');
};
function applyWF() {
  const list = document.getElementById("wlist"); if (!list) return;
  let shown = 0;
  list.querySelectorAll(".lw").forEach(r => { const chip = r.querySelector(".chip"), k = chip ? WF_MAP[chip.textContent.trim()] || "" : ""; const ok = !WF.st || k === WF.st; r.hidden = !ok; if (ok) shown++; });
  list.querySelectorAll("details.wgroup").forEach(g => { const n = g.querySelectorAll(".lw:not([hidden])").length; g.hidden = !n; const c = g.querySelector("summary .chip"); if (c) c.textContent = n; if (WF.st && n) g.open = true; });
  const el = document.getElementById("wcount"); if (el) el.textContent = WF.st ? `${shown} từ khớp bộ lọc` : "";
}
ACT.wfSt = function (el) { WF.st = el.dataset.v; document.querySelectorAll("#wfilter .exm-btn").forEach(b => b.classList.toggle("on", b.dataset.v === WF.st)); applyWF(); };
const _afterRender45 = afterRender;
afterRender = function () { _afterRender45(); if (ROUTE.name === "words") applyWF(); };

/* ---------------- Ôn tập: màn tổng quan mới ---------------- */
const _viewReview45 = viewReview;
viewReview = function () {
  if (ROUTE.arg === "go") return _viewReview45();
  const st = cardStats(); if (!st.total) return _viewReview45();
  const due = dueList().length, fc = forecast(7), max = Math.max(1, ...fc);
  const nextDue = Object.values(S.cards).map(c => c.due).filter(t => t > Date.now()).sort((a, b) => a - b)[0];
  const parts = [["new", "Mới", st.new], ["learning", "Đang học", st.learning], ["young", "Đang củng cố", st.young], ["mature", "Đã vững", st.mature]];
  const seg = parts.map(([k, l, n]) => n ? `<i class="rv-${k}" style="flex:${n}" title="${l}: ${n}"></i>` : "").join("");
  const legend = parts.map(([k, l, n]) => `<span class="rv-key"><i class="rv-${k}"></i>${l} <b>${n}</b></span>`).join("");
  const wk = fc.reduce((a, b) => a + b, 0);
  const grades = [["1", "Quên", "again", "Không nhớ ra."], ["2", "Khó", "hard", "Nhớ ra nhưng rất chật vật."], ["3", "Nhớ", "good", "Nhớ ra sau một chút suy nghĩ."], ["4", "Dễ", "easy", "Nhớ ngay lập tức."]];
  return `<section class="page-head"><h1>Ôn tập</h1><p class="lede">FSRS ước lượng lúc bạn sắp quên từng thẻ và hẹn ôn đúng lúc đó. Mỗi từ có hai thẻ: nhìn từ nhớ nghĩa, và nhìn nghĩa gõ lại từ.</p></section>
    <section class="panel rv-hero ${due ? "has-due" : ""}"><div><div class="rv-num">${due}</div><div class="muted">thẻ đến hạn bây giờ</div></div>
      <div class="rv-cta">${due ? `<a class="btn primary" href="#/review/go">Bắt đầu ôn ${due} thẻ</a><span class="muted small">khoảng ${Math.max(1, Math.round(due * 0.5))} phút</span>` : `<span class="chip good">Đã xong hết thẻ đến hạn</span><span class="muted small">${nextDue ? "Thẻ tiếp theo sau " + fmtIvl(nextDue - Date.now()) + "." : ""}</span>`}</div></section>
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3 style="margin:0">Mức nhớ của ${st.total} thẻ</h3><a class="btn quiet small" href="#/words">Xem từ</a></div><div class="rv-stack" role="img" aria-label="Phân bố mức nhớ">${seg}</div><div class="rv-legend">${legend}</div></section>
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3 style="margin:0">7 ngày tới</h3><span class="muted small">${wk} thẻ</span></div><div class="bars">${fc.map((v, i) => `<div title="${v} thẻ"><span>${v}</span><i style="height:${Math.max(v ? 6 : 0, Math.round(v / max * 80))}px"></i><span>${i === 0 ? "Hôm nay" : new Date(Date.now() + i * DAY).toLocaleDateString("vi-VN", { weekday: "short" })}</span></div>`).join("")}</div></section>
    <details class="panel rv-help" style="margin-top:14px"><summary><b>Chấm thế nào cho đúng</b> <span class="muted small">(phím 1 đến 4, cách để lật thẻ)</span></summary><div class="rv-grades">${grades.map(([k, l, c, d]) => `<div class="rv-g rv-g-${c}"><b><kbd>${k}</kbd> ${l}</b><span>${d}</span></div>`).join("")}</div><p class="muted small">Hãy chấm thật lòng; thuật toán dựa vào đó để hẹn lịch.</p></details>`;
};

/* Trang chủ: bỏ khối "Xem trước một từ" và "Lỗi sai thường gặp". */
const _afterRender45b = afterRender;
afterRender = function () {
  _afterRender45b();
  if (ROUTE.name === "today") document.querySelectorAll("#page h3").forEach(h => { if (/^(Xem trước một từ|Lỗi sai thường gặp)$/.test(h.textContent.trim())) { const box = h.closest(".panel") || h.closest("section"); if (box) box.remove(); } });
};
