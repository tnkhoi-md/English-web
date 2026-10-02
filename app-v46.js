/* ============================================================
   v4.6 · Gộp từ app-v45.js (Luyện đề, Kho luyện đọc, giao diện Tiến bộ, Hôm nay,
   Từ của tôi, Ôn tập) và app-v44.js (giọng người thật, trang Giọng đọc, Thư viện
   44 âm, khởi động app). Phần v4.5 đứng trước vì phần v4.4 gọi initApp() ở cuối.
   Dữ liệu: content-reading.js (READING), content-exam.js (TOEIC5, TOEIC6,
   CLOZE_MC, CLOZE_OPEN, KWT). Nạp SAU app-v43.js; đây là file script cuối cùng.
   ============================================================ */
/* ===== PHẦN 1 (trước đây app-v45.js) ===== */
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
/* ---------------- Gộp từ trùng giữa các chủ đề (v4.7) ----------------
   Khóa cũ (chủ đề:từ) trỏ về khóa gốc. Thẻ ôn và trạng thái "đã biết" được chuyển sang khóa gốc khi nạp dữ liệu. */
const DUP_ALIAS = {"daily:open": "core-verbs:open", "daily:close": "core-verbs:close", "food:eat": "core-verbs:eat", "food:drink": "core-verbs:drink", "time:now": "core-adj:now", "time:day": "core-nouns:day", "time:time": "core-nouns:time", "time:eventually": "core-adj:eventually", "shopping:pay": "core-verbs:pay", "shopping:open": "core-verbs:open", "shopping:spend": "core-verbs:spend", "nature:cold": "body:cold", "nature:temperature": "body:temperature", "tech:call": "core-verbs:call", "tech:obsolete": "core-adj:obsolete", "society:problem": "core-nouns:problem", "society:volunteer": "work:volunteer", "academic:significant": "core-adj:significant", "academic:data": "tech:data", "academic:criterion": "core-nouns:criterion", "academic:inherent": "core-adj:inherent", "academic:substantial": "core-adj:substantial", "academic:infer": "core-verbs:infer", "academic:coherent": "core-adj:coherent", "academic:exacerbate": "core-verbs:exacerbate", "idioms:in-the-long-run": "time:in-the-long-run", "basics:here": "core-adj:here", "basics:there": "core-adj:there", "basics:sorry": "feelings:sorry", "clothes:wear": "core-verbs:wear", "transport:walk": "core-verbs:walk", "transport:turn": "core-verbs:turn", "transport:lift": "daily:lift", "leisure:game": "core-nouns:game", "leisure:play": "core-verbs:play", "leisure:cinema": "places:cinema", "school:pen": "work:pen", "school:bag": "daily:bag", "school:paper": "work:paper", "school:test": "work:test", "school:listen": "core-verbs:listen", "school:library": "places:library", "t-office:meeting": "work:meeting", "t-office:colleague": "people:colleague", "t-office:schedule": "time:schedule", "t-office:team": "leisure:team", "t-office:deadline": "time:deadline", "t-office:presentation": "work:presentation", "t-office:task": "work:task", "t-hr:job": "work:job", "t-hr:salary": "work:salary", "t-hr:interview": "work:interview", "t-hr:worker": "work:worker", "t-hr:training": "work:training", "t-hr:overtime": "work:overtime", "t-finance:price": "shopping:price", "t-finance:bill": "food:bill", "t-finance:budget": "shopping:budget", "t-finance:loan": "shopping:loan", "t-marketing:customer": "shopping:customer", "t-marketing:sell": "shopping:sell", "t-marketing:offer": "core-verbs:offer", "t-marketing:sale": "shopping:sale", "t-marketing:brand": "shopping:brand", "t-marketing:discount": "shopping:discount", "t-logistics:receipt": "shopping:receipt", "t-logistics:refund": "shopping:refund", "t-travel:hotel": "places:hotel", "t-travel:taxi": "transport:taxi", "t-travel:itinerary": "places:itinerary", "t-travel:gate": "transport:gate", "t-travel:accommodation": "places:accommodation", "i-education:subject": "work:subject", "i-education:student": "work:student", "i-education:classroom": "school:classroom", "i-education:knowledge": "core-nouns:knowledge", "i-education:skill": "work:skill", "i-education:qualification": "work:qualification", "i-environment:environment": "nature:environment", "i-environment:pollution": "nature:pollution", "i-environment:climate": "nature:climate", "i-environment:recycle": "nature:recycle", "i-environment:protect": "nature:protect", "i-environment:wildlife": "nature:wildlife", "i-environment:habitat": "nature:habitat", "i-environment:landfill": "nature:landfill", "i-environment:sustainable": "nature:sustainable", "i-environment:ecosystem": "nature:ecosystem", "i-environment:greenhouse-gas": "nature:greenhouse-gas", "i-technology:internet": "tech:internet", "i-technology:device": "tech:device", "i-technology:research": "academic:research", "i-technology:online": "tech:online", "i-technology:software": "tech:software", "i-technology:hacker": "tech:hacker", "i-technology:access": "society:access", "i-technology:privacy": "tech:privacy", "i-technology:cybersecurity": "tech:cybersecurity", "i-health:gym": "leisure:gym", "i-health:diet": "food:diet", "i-health:exercise": "body:exercise", "i-health:stress": "body:stress", "i-health:malnutrition": "food:malnutrition", "i-urban:village": "places:village", "i-urban:traffic-jam": "transport:traffic-jam", "i-urban:suburb": "places:suburb", "i-urban:congestion": "places:congestion", "i-crime:crime": "society:crime", "i-crime:law": "society:law", "i-economy:factory": "work:factory", "i-economy:policy": "society:policy", "i-economy:poverty": "society:poverty", "i-economy:inequality": "society:inequality", "i-media:consumer": "shopping:consumer", "x-collocations:make-a-mistake": "idioms:make-a-mistake", "x-collocations:take-a-break": "idioms:take-a-break", "x-collocations:make-a-decision": "idioms:make-a-decision", "x-collocations:take-part-in": "idioms:take-part-in", "x-collocations:come-up-with": "verbs:come-up-with", "x-collocations:bring-about": "verbs:bring-about", "x-collocations:in-the-long-run": "time:in-the-long-run"};
function migrateAliases(s) {
  if (!s || !s.cards) return s;
  for (const [oldK, newK] of Object.entries(DUP_ALIAS)) {
    for (const d of ["r", "p"]) {
      const a = `V:${oldK}:${d}`, b = `V:${newK}:${d}`; if (!(a in s.cards)) continue;
      const x = s.cards[a], y = s.cards[b];
      if (!y || (x.reps || 0) > (y.reps || 0) || ((x.reps || 0) === (y.reps || 0) && (x.last || 0) > (y.last || 0))) s.cards[b] = x;
      delete s.cards[a];
    }
    if (s.known && s.known[oldK]) { s.known[newK] = Math.max(s.known[newK] || 0, s.known[oldK]); delete s.known[oldK]; }
  }
  return s;
}
const _sanAlias = sanitize; sanitize = raw => _sanAlias(migrateAliases(raw && typeof raw === "object" ? { ...raw, cards: { ...(raw.cards || {}) }, known: { ...(raw.known || {}) } } : raw));
const _mergeAlias = mergeState; mergeState = (a, b) => _mergeAlias(migrateAliases(a), migrateAliases(b));
S = load();

const RD_ALL = typeof READING !== "undefined" ? READING : [];
const RD_BY = Object.fromEntries(RD_ALL.map(p => [p.id, p]));
const D_T5 = typeof TOEIC5 !== "undefined" ? TOEIC5 : [], D_T6 = typeof TOEIC6 !== "undefined" ? TOEIC6 : [];
const D_CM = typeof CLOZE_MC !== "undefined" ? CLOZE_MC : [], D_CO = typeof CLOZE_OPEN !== "undefined" ? CLOZE_OPEN : [], D_KW = typeof KWT !== "undefined" ? KWT : [];
const capW = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------------- Trạng thái (điểm cao nhất của mỗi bộ đề) ---------------- */
const _san45 = sanitize;
sanitize = function (raw) {
  const s = _san45(raw); s.exam = {};
  if (raw && raw.exam && typeof raw.exam === "object") for (const [k, v] of Object.entries(raw.exam)) if (/^[edw]-[\w-]{1,70}$/.test(k) && v) s.exam[k] = { best: clamp(num(v.best), 0, 1), n: Math.max(0, Math.round(num(v.n))), last: num(v.last) };
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
isStudyRoute = () => _isStudy45() || (ROUTE.name === "reading" && !!ROUTE.arg) || ROUTE.name === "exam" || ROUTE.name === "writing";
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
    <section class="panel stack"><div class="row between"><div><b>Viết và nói</b><br><span class="muted small">${WR_ITEMS.length} đề viết thư, bài luận và nói, kèm bảng tự chấm theo bốn tiêu chí.</span></div><a class="btn" href="#/writing">Mở Viết và nói</a></div></section>
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
  return passageParas(text, par => par.replace(/([A-Za-z]+(?:'[A-Za-z]+)?)|([^A-Za-z]+)/g, (m, tok, other) => { if (other) return esc(other); const w = glossFind(tok); return w ? `<button class="rw${isLearned(w) ? " known" : ""}" data-act="rdWord" data-k="${esc(w.key)}">${esc(tok)}</button>` : esc(tok); }));
}
const rdGenre = { email: "Thư điện tử", notice: "Thông báo", article: "Bài báo", blog: "Blog", dialogue: "Hội thoại", leaflet: "Tờ hướng dẫn", report: "Báo cáo", advert: "Quảng cáo", story: "Truyện ngắn", news: "Tin tức", abstract: "Tóm tắt nghiên cứu", letter: "Thư" };
const rdTopic = { daily: "Đời sống", work: "Công việc", travel: "Du lịch", health: "Sức khỏe", education: "Giáo dục", environment: "Môi trường", technology: "Công nghệ", society: "Xã hội", culture: "Văn hóa", science: "Khoa học", medical: "Y khoa" };
const wordCount = t => (t.match(/[A-Za-z0-9'’\-]+/g) || []).length;
/* Tái xuất hiện từ: đếm từ trong bài đã học, đang đến hạn ôn và chưa học. */
function rdSummary(p) {
  const seen = new Map(); (p.text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || []).forEach(t => { const w = glossFind(t); if (w) seen.set(w.key, w); });
  const ws = [...seen.values()], learned = ws.filter(isLearned), due = ws.filter(w => { const c = S.cards[`V:${w.key}:r`]; return c && c.due <= Date.now(); }), fresh = ws.filter(w => !isLearned(w));
  if (!ws.length) return "";
  return `<div class="rd-sum"><span class="chip good">${learned.length} từ đã học</span><span class="chip ${due.length ? "acc" : ""}">${due.length} từ đến hạn ôn</span><span class="chip">${fresh.length} từ chưa học</span><span class="muted small">Từ đã học có gạch chân xanh. Chạm vào từ chưa học để thêm vào lịch ôn.</span></div>`;
}
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
    ${rdSummary(p)}
    <article class="passage" lang="en">${glossText(p.text)}</article>
    <div class="row" style="margin:12px 0">${hear(p.text, "Nghe cả bài")}<button class="btn quiet small" data-act="rdGist">${RDF.gist ? "Ẩn tóm tắt" : "Xem tóm tắt tiếng Việt"}</button></div>
    ${RDF.gist ? `<p class="example-vi">${esc(p.gist)}</p>` : ""}
    ${panel}
    <div class="row" style="margin-top:16px"><a class="btn primary" href="#/practice/d-${p.id}">Làm bài (${p.qs.length} câu hỏi)</a><a class="btn quiet" href="#/reading">Chọn bài khác</a></div>`;
}
const WR_ITEMS = [
  { id: "w1", kind: "viết", lvl: "B1", min: 20, words: "120", title: "Thư gửi bạn", prompt: "You missed your friend's birthday party. Write an email to your friend (at least 120 words): apologise, explain why you could not come, and suggest another way to celebrate." },
  { id: "w2", kind: "viết", lvl: "B1", min: 20, words: "120", title: "Thư phàn nàn", prompt: "You bought a pair of headphones online but they stopped working after two days. Write an email to the shop (at least 120 words): describe the problem and say what you want the shop to do." },
  { id: "w3", kind: "viết", lvl: "B2", min: 40, words: "250", title: "Bài luận: học trực tuyến", prompt: "Some people think online classes are as effective as classroom lessons. To what extent do you agree or disagree? Give reasons and examples (at least 250 words)." },
  { id: "w4", kind: "viết", lvl: "B2", min: 40, words: "250", title: "Bài luận: công nghệ và sức khỏe", prompt: "Technology makes people less active and harms their health. Do the disadvantages outweigh the advantages? Write at least 250 words." },
  { id: "w5", kind: "viết", lvl: "B2", min: 30, words: "150", title: "Y khoa: thư gửi bệnh nhân", prompt: "You are a nurse. Write a short letter to a patient (at least 150 words) explaining how to look after a healing wound at home and when to contact the clinic. Use plain language." },
  { id: "s1", kind: "nói", lvl: "B1", min: 3, words: "1–2 phút", title: "Nói về một nơi bạn thích", prompt: "Describe a place you like to visit. Say where it is, what you do there, who you go with, and why you like it." },
  { id: "s2", kind: "nói", lvl: "B1", min: 3, words: "1–2 phút", title: "Nói về một người giúp bạn", prompt: "Talk about a person who helped you learn something important. Say who the person is, what they taught you, and how you felt." },
  { id: "s3", kind: "nói", lvl: "B2", min: 5, words: "2 phút", title: "Ý kiến: mạng xã hội", prompt: "Do you think social media brings people closer together or pushes them apart? Give your opinion with reasons and one example." },
  { id: "s4", kind: "nói", lvl: "B2", min: 5, words: "2 phút", title: "Y khoa: giải thích cho bệnh nhân", prompt: "Explain to a patient, in simple words, why they should finish a full course of antibiotics. Check their understanding at the end (teach-back)." }
];
const WR_CRIT = {
  "viết": [["Hoàn thành yêu cầu", "Trả lời đủ mọi ý của đề, đúng thể loại và đúng giọng điệu."], ["Mạch lạc và liên kết", "Có mở, thân, kết; mỗi đoạn một ý; dùng từ nối đa dạng, không lặp máy móc."], ["Từ vựng", "Dùng từ chính xác, có kết hợp từ tự nhiên, ít lặp từ."], ["Ngữ pháp", "Câu đa dạng (đơn, ghép, phức), lỗi ít và không gây khó hiểu."]],
  "nói": [["Hoàn thành yêu cầu", "Nói đủ các ý của đề, có ví dụ cụ thể."], ["Lưu loát và mạch lạc", "Nói liền mạch, ít ngập ngừng, biết nối ý (first, however, because)."], ["Từ vựng", "Diễn đạt bằng từ khác nhau, biết nói lại khi quên từ."], ["Ngữ pháp và phát âm", "Câu đúng, dễ nghe, nhấn trọng âm và ngắt nhịp hợp lý."]]
};
const WR = { sel: "", text: "", chk: [0, 0, 0, 0], t0: 0 };
function viewWriting() {
  const it = WR_ITEMS.find(x => x.id === ROUTE.arg);
  if (!it) return `<section class="page-head"><h1>Viết và nói</h1><p class="lede">Hai kỹ năng chưa thể chấm tự động, nên ở đây bạn tự chấm theo bốn tiêu chí giống cách các kỳ thi IELTS và VSTEP chấm. Viết hoặc nói thật, rồi đối chiếu từng tiêu chí và đọc lại bài của mình sau một ngày để thấy lỗi.</p></section>
    <div class="topics">${WR_ITEMS.map(x => { const r = exRes("w-" + x.id); return `<a class="gcard" href="#/writing/${x.id}"><div class="row between"><span class="lv lv-${x.lvl}">${x.lvl}</span>${scoreChip(r)}</div><b>${esc(x.title)}</b><span class="muted small">${x.kind === "viết" ? "Viết" : "Nói"}, ${x.words}${x.kind === "viết" ? " từ" : ""}, khoảng ${x.min} phút</span></a>`; }).join("")}</div>`;
  const crit = WR_CRIT[it.kind], tot = WR.chk.reduce((a, b) => a + b, 0), wc = (WR.text.match(/[A-Za-z0-9'’\-]+/g) || []).length;
  return `<section class="page-head"><a class="muted small" href="#/writing">Viết và nói</a><h1>${esc(it.title)}</h1><div class="exrow"><span class="lv lv-${it.lvl}">${it.lvl}</span><span class="chip">${it.kind === "viết" ? "Viết" : "Nói"}</span><span class="chip">khoảng ${it.min} phút</span></div></section>
    <article class="passage" lang="en">${esc(it.prompt)}</article>
    ${it.kind === "viết" ? `<textarea class="field" id="wrText" style="margin-top:12px;min-height:200px;font-family:var(--en);font-size:17px" placeholder="Viết bài của bạn ở đây…" lang="en">${esc(WR.text)}</textarea><p class="muted small" id="wrCount">${wc} từ (mục tiêu ${it.words})</p>` : `<p class="muted" style="margin-top:12px">Chuẩn bị 1 phút với vài từ khóa, rồi nói thành tiếng và ghi âm bằng điện thoại để nghe lại. Chỉ ghi vài ý, đừng viết cả bài.</p>`}
    <section class="panel stack" style="margin-top:14px"><h3>Tự chấm theo tiêu chí</h3>${crit.map(([n, d], i) => `<div class="wr-crit"><div><b>${n}</b><br><span class="muted small">${d}</span></div><div class="seg" role="radiogroup" aria-label="${n}">${[0, 1, 2, 3].map(v => `<button class="seg-b ${WR.chk[i] === v ? "on" : ""}" role="radio" aria-checked="${WR.chk[i] === v}" data-act="wrScore" data-i="${i}" data-v="${v}">${v}</button>`).join("")}</div></div>`).join("")}
      <p class="muted small">0 chưa đạt, 1 còn yếu, 2 khá, 3 tốt. Điểm trung bình hiện tại: <b>${Math.round(100 * tot / 12)}%</b>.</p>
      <div class="row"><button class="btn primary" data-act="wrSave">Lưu tự đánh giá</button><a class="btn quiet" href="#/writing">Chọn đề khác</a></div></section>`;
}
EXTRA_VIEWS.exam = viewExam; EXTRA_VIEWS.reading = viewReading; EXTRA_VIEWS.writing = viewWriting;
Object.assign(ACT, {
  wrScore(el) { WR.chk[+el.dataset.i] = +el.dataset.v; WR.text = document.getElementById("wrText")?.value ?? WR.text; render(); },
  wrSave() { const id = ROUTE.arg, tot = WR.chk.reduce((a, b) => a + b, 0) / 12; S.exam = S.exam || {}; const p = S.exam["w-" + id]; S.exam["w-" + id] = { best: Math.max(p?.best || 0, tot), n: (p?.n || 0) + 1, last: Date.now() }; evidence(id[0] === "w" ? "writing" : "speaking", tot >= 0.5, "wr:" + id); touch(); save(); location.hash = "#/writing"; }
});
addEventListener("hashchange", () => { if (ROUTE.name !== "writing") { WR.text = ""; WR.chk = [0, 0, 0, 0]; } });
addEventListener("input", e => { if (e.target && e.target.id === "wrText") { WR.text = e.target.value; const c = document.getElementById("wrCount"), n = (WR.text.match(/[A-Za-z0-9'’\-]+/g) || []).length; if (c) c.textContent = n + " từ"; } });
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


/* ===== PHẦN 2 (trước đây app-v44.js, khởi động app) ===== */
/* ============================================================
   v4.4 · Giọng đọc mới: bản ghi người thật cho từ đơn (Free Dictionary API,
   nguồn Wiktionary/Wikimedia Commons), xếp hạng giọng máy theo chất lượng,
   trang Giọng đọc, Thư viện 44 âm tiếng Anh.
   Nạp SAU app-v43.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.7.1"; APP.build = "01.10.26";
const PH_BY = Object.fromEntries(PHONEMES.map(p => [p.id, p]));

/* ---------------- State ---------------- */
const _san44 = sanitize;
sanitize = function (raw) {
  const s = _san44(raw); s.settings.human = !(raw && raw.settings && raw.settings.human === false); s.ph = {};
  if (raw && raw.ph && typeof raw.ph === "object") for (const [k, v] of Object.entries(raw.ph)) if (PH_BY[k] && v) s.ph[k] = { n: Math.max(0, Math.round(num(v.n))), ok: Math.max(0, Math.round(num(v.ok))) };
  return s;
};
const _fresh44 = fresh; fresh = () => { const s = _fresh44(); s.settings.human = true; s.ph = {}; return s; };
S = load(); save();
const _merge44 = mergeState;
mergeState = function (a, b) { const m = _merge44(a, b); m.ph = { ...(a.ph || {}) }; for (const [k, v] of Object.entries(b.ph || {})) { const x = m.ph[k]; m.ph[k] = !x || v.n > x.n ? v : x; } return m; };

/* ---------------- Human audio engine ---------------- */
const HA_KEY = "tnk_audio_v1", HA_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const SILENT = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
const HA = { cache: {}, inflight: {}, el: null, unlocked: false, off: false, fails: 0, used: 0, tts: 0, warned: false };
try { HA.cache = JSON.parse(localStorage.getItem(HA_KEY) || "{}") || {}; } catch { HA.cache = {}; }
let haSaveT = 0;
function haSave() { clearTimeout(haSaveT); haSaveT = setTimeout(() => { try { const ks = Object.keys(HA.cache); if (ks.length > 3000) ks.slice(0, ks.length - 3000).forEach(k => delete HA.cache[k]); localStorage.setItem(HA_KEY, JSON.stringify(HA.cache)); } catch { } }, 800); }
const isWord = t => /^[A-Za-z][A-Za-z'’-]{0,29}$/.test(String(t || "").trim());
const haKey = w => String(w).trim().toLowerCase().replace(/’/g, "'");
const fixUrl = u => (u && u.startsWith("//") ? "https:" + u : u || "");
function haEl() { if (!HA.el) { HA.el = new Audio(); HA.el.preload = "auto"; HA.el.addEventListener("ended", () => { SPEECH.busy = false; markActive(); }); HA.el.addEventListener("error", () => { SPEECH.busy = false; }); } return HA.el; }
addEventListener("pointerdown", () => { if (HA.unlocked) return; HA.unlocked = true; const el = haEl(); el.src = SILENT; el.play().then(() => el.pause()).catch(() => { }); }, { capture: true, passive: true });
function haLookup(word) {
  const k = haKey(word); if (k in HA.cache) return Promise.resolve(HA.cache[k]); if (HA.off) return Promise.resolve(null); if (HA.inflight[k]) return HA.inflight[k];
  HA.inflight[k] = (async () => {
    try {
      const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 6000);
      const r = await fetch(HA_API + encodeURIComponent(k), { signal: ctl.signal }); clearTimeout(tm);
      HA.fails = 0;
      if (!r.ok) { HA.cache[k] = 0; haSave(); return 0; }
      const js = await r.json(); const ph = (Array.isArray(js) ? js : []).flatMap(e => e.phonetics || []);
      const pick = re => ph.find(p => p.audio && re.test(p.audio));
      const us = pick(/-us\.mp3/i), uk = pick(/-uk\.mp3/i), au = pick(/-au\.mp3/i), any = ph.find(p => p.audio);
      const ipa = (ph.find(p => p.text) || {}).text || (js[0] && js[0].phonetic) || "";
      const rec = { us: fixUrl(us && us.audio), uk: fixUrl(uk && uk.audio), au: fixUrl(au && au.audio), any: fixUrl(any && any.audio), ipaUs: (us && us.text) || "", ipaUk: (uk && uk.text) || "", ipa };
      HA.cache[k] = rec.us || rec.uk || rec.au || rec.any || rec.ipa ? rec : 0; haSave(); return HA.cache[k];
    } catch (e) {
      if (++HA.fails >= 3 && !HA.off) { HA.off = true; if (!HA.warned) { HA.warned = true; toast("Chưa kết nối được thư viện âm thanh người thật. Tạm dùng giọng máy."); } }
      return null;
    } finally { delete HA.inflight[k]; }
  })();
  return HA.inflight[k];
}
const haUrl = (rec, acc) => !rec ? "" : acc === "uk" ? rec.uk || rec.us || rec.au || rec.any : rec.us || rec.uk || rec.au || rec.any;
function playUrl(url, slow) {
  const el = haEl(); try { el.pause(); } catch { }
  el.src = url; el.playbackRate = slow ? 0.8 : 1; if ("preservesPitch" in el) el.preservesPitch = true;
  SPEECH.busy = true; markActive();
  return el.play().then(() => { HA.used++; return true; }).catch(() => { SPEECH.busy = false; return false; });
}
async function haPlay(text, acc, opt) {
  const k = haKey(text); let rec = HA.cache[k];
  if (rec === undefined) rec = await Promise.race([haLookup(text), new Promise(r => setTimeout(() => r(null), 1600))]);
  const url = haUrl(rec, acc); if (!url) return false;
  return playUrl(url, opt && opt.slow);
}
function ttsAcc(text, opt, acc) { HA.tts++; const st = S.settings, o = [st.accent, st.voice, st.voice2]; if (acc && acc !== st.accent) { st.accent = acc; st.voice = st.voice2 = "auto"; } const p = say(text, opt || {}); [st.accent, st.voice, st.voice2] = o; return p; }
const _stop44 = stopSpeech;
stopSpeech = function () { _stop44(); if (HA.el && !HA.el.paused) { try { HA.el.pause(); } catch { } } };
speakNow = function (text, opt = {}) {
  stopSpeech(); const acc = opt.acc || S.settings.accent;
  if (S.settings.human !== false && !HA.off && isWord(text)) return haPlay(text, acc, opt).then(ok => ok || ttsAcc(text, opt, acc));
  return ttsAcc(text, opt, acc);
};
sayAccent = (text, acc) => speakNow(text, { acc });

/* Prefetch & IPA hydration */
const HQ = { q: [], run: 0 };
function haPrefetch(words, limit = 40) {
  if (HA.off || S.settings.human === false) return;
  words.map(w => String(w || "").replace(/\s*\((n|v)\)\s*$/, "")).filter(isWord).map(haKey).filter((k, i, a) => a.indexOf(k) === i && !(k in HA.cache) && !HA.inflight[k] && !HQ.q.includes(k)).slice(0, limit).forEach(k => HQ.q.push(k));
  haPump();
}
function haPump() { while (HQ.run < 3 && HQ.q.length) { const k = HQ.q.shift(); HQ.run++; haLookup(k).finally(() => { HQ.run--; hydrateAudioUI(); haPump(); }); } }
function hydrateAudioUI() {
  const acc = S.settings.accent;
  document.querySelectorAll("[data-ipa-for]").forEach(el => { if (el.textContent) return; const rec = HA.cache[haKey(el.dataset.ipaFor)]; if (!rec) return; let ipa = acc === "uk" ? rec.ipaUk || rec.ipa : rec.ipaUs || rec.ipa; if (!ipa) return; if (!ipa.startsWith("/") && !ipa.startsWith("[")) ipa = "/" + ipa + "/"; el.textContent = ipa; el.title = "Phiên âm lấy từ Wiktionary"; });
  document.querySelectorAll('[data-act="say"][data-text], [data-act="phHear"][data-w], [data-act="pbHear"][data-w]').forEach(el => { const t = (el.dataset.text || el.dataset.w || "").replace(/\s*\((n|v)\)\s*$/, ""); const rec = isWord(t) && HA.cache[haKey(t)]; if (rec && haUrl(rec, el.dataset.acc || acc)) el.classList.add("human"); });
}
const _afterRender44 = afterRender;
afterRender = function () {
  _afterRender44();
  const ws = [...document.querySelectorAll("[data-text],[data-w],[data-ipa-for]")].map(el => el.dataset.text || el.dataset.w || el.dataset.ipaFor);
  document.querySelectorAll('[data-act="pairPick"],[data-act="drillPick"],[data-act="phPick"]').forEach(el => ws.push(el.textContent));
  if (ROUTE.name === "lesson" && L) { const st = L.steps[L.i]; if (st && st.t === "pairs") ws.unshift(...PAIRS[st.set].pairs.flat()); }
  if (ROUTE.name === "sounds" && SD) ws.unshift(...PAIRS[SD.set].pairs.flat());
  if (ROUTE.name === "phonemes" && ROUTE.arg && PH_BY[ROUTE.arg]) ws.unshift(...PH_BY[ROUTE.arg].pairs.flatMap(p => [p[0], p[1]]));
  haPrefetch(ws); hydrateAudioUI();
};
const _spec44 = specimen;
specimen = (w, cls) => { const h = _spec44(w, cls); return ipaOf(w) ? h : h.replace('<span class="ipa"></span>', `<span class="ipa" data-ipa-for="${esc(w.w)}"></span>`); };
const _wordRow44 = wordRow;
wordRow = (w, a, b) => _wordRow44(w, a, b).replace('<span class="pos">', isWord(w.w) ? `<span class="ipa sm" data-ipa-for="${esc(w.w)}"></span><span class="pos">` : '<span class="pos">');
const _viewLearn44 = viewLearn;
viewLearn = () => { const h = _viewLearn44(); const w = LN && LN.words && LN.words[LN.i]; return w && isWord(w.w) ? h.replace('<span class="pos">', `<span class="ipa" data-ipa-for="${esc(w.w)}"></span> <span class="pos">`) : h; };

const _focusBar44 = focusBar;
focusBar = (segs, label) => { const st = S.settings; const tog = `<button class="tb acc-tog" data-act="tbAccent" title="Đổi giọng Anh-Mỹ / Anh-Anh" aria-label="Giọng ${st.accent === "uk" ? "Anh-Anh" : "Anh-Mỹ"}. Bấm để đổi"><span class="${st.accent === "us" ? "on" : ""}">US</span><span class="${st.accent === "uk" ? "on" : ""}">UK</span></button>`; return _focusBar44(segs, label).replace('<button class="tb" data-act="tbRate"', tog + '<button class="tb" data-act="tbRate"'); };
/* ---------------- Better TTS voice ranking ---------------- */
const NOVELTY = /compact|eloquence|novelty|bells|bubbles|boing|zarvox|whisper|bad news|good news|jester|organ|trinoids|albert|cellos|fred|junior|ralph|superstar|grandma|grandpa|rocko|shelley|flo\b|reed|sandy|bahh|hysterical|wobble/i;
function voiceTier(v) {
  const n = v.name || "";
  if (NOVELTY.test(n)) return -1;
  if (/\(Natural\)|Neural|Online|Premium/i.test(n)) return 3;
  if (/Enhanced|^Google (US|UK) English/i.test(n)) return 2;
  if (/Samantha|Ava|Allison|Susan|Zoe|Evan|Tom|Nathan|Karen|Daniel|Serena|Moira|Kate|Oliver|Arthur|Martha|Aaron|Nicky|Jamie|Stephanie|Aria|Jenny|Guy|Sonia|Ryan|Libby|Natasha|William/i.test(n)) return 1;
  return 0;
}
voiceScore = v => voiceTier(v) * 10 + (v.localService ? 0 : 1);
const TIER_LABEL = { 3: ["Tự nhiên", "good"], 2: ["Nâng cao", "acc"], 1: ["Khá", ""], 0: ["Cơ bản", ""], "-1": ["Không nên dùng", "bad"] };

/* ---------------- Nav & routes ---------------- */
NAV4[1][1].forEach(it => { if (it[0] === "sounds") { it[0] = "phonemes"; it[1] = "Phát âm"; } });
NAV4[2][1].splice(NAV4[2][1].findIndex(x => x[0] === "settings"), 0, ["voices", "Giọng đọc", "speaker", "#e0622f"]);
const _isStudy44 = isStudyRoute;
isStudyRoute = () => _isStudy44() || (ROUTE.name === "phonemes" && !!ROUTE.arg);
soundTabs = cur => `<div class="tabs" role="tablist" style="margin-bottom:16px">${[["ph", "#/phonemes", "Thư viện 44 âm"], ["pairs", "#/sounds", "Cặp âm tối thiểu"], ["bank", "#/pron", "Kho từ phát âm"]].map(([id, h, l]) => `<a href="${h}" role="tab" style="text-decoration:none"><button tabindex="-1" aria-selected="${cur === id}">${l}</button></a>`).join("")}</div>`;

/* ---------------- Phoneme library ---------------- */
let PQ = null; const PHR = {};
const PQ_N = 8;
const phLabel = p => `/${p.ipa}/`;
const PH_PAIR_SET = { th: "th-t", dh: "dh-d", sh: "sh-s", s: "sh-s", "i-short": "i-ee", "i-long": "i-ee", l: "l-n", n: "l-n", z: "z-s", t: "finals", d: "finals" };
const PH_BANK = { th: "th", dh: "th", schwa: "syllables", t: "ed", d: "ed", s: "s", z: "s" };
function phTile(p) { const r = S.ph[p.id]; return `<a class="phtile" href="#/phonemes/${p.id}"><b class="ph-sym">${esc(phLabel(p))}</b><span class="en" lang="en">${esc(p.key)}</span>${p.voice !== undefined ? `<small class="muted">${p.voice ? "hữu thanh" : "vô thanh"}</small>` : `<small class="muted">${esc(p.name)}</small>`}${r && r.n ? `<i class="ph-done" title="Đã luyện ${r.ok}/${r.n}"></i>` : ""}</a>`; }
function viewPhonemes() {
  const p = PH_BY[ROUTE.arg]; if (p) return viewPhoneme(p);
  const done = PHONEMES.filter(x => S.ph[x.id]?.n).length;
  return `<section class="page-head"><h1>Phát âm</h1><p class="lede">Thư viện đủ 44 âm của tiếng Anh theo hệ phiên âm Anh-Anh chuẩn, kèm ghi chú khác biệt Anh-Mỹ. Mỗi âm có cách đặt lưỡi, môi, dây thanh, lỗi sai thường gặp, cách viết, từ ví dụ đọc bằng giọng người thật và bài nghe phân biệt cặp âm. Bạn đã luyện ${done}/44 âm.</p></section>${soundTabs("ph")}
    ${PH_GROUPS.map(([g, vi, en]) => { const xs = PHONEMES.filter(x => x.g === g); return `<h2 class="sec-h">${vi} <span class="muted small" lang="en">${en}, ${xs.length} âm</span></h2><div class="phgrid">${xs.map(phTile).join("")}</div>`; }).join("")}
    <section class="panel stack" style="margin-top:18px"><h3>Cách đọc bảng</h3><p class="muted">Vô thanh: dây thanh không rung (đặt tay lên cổ không thấy rung). Hữu thanh: dây thanh rung. Nhiều phụ âm đi thành cặp vô thanh và hữu thanh có cùng vị trí miệng: /p/–/b/, /t/–/d/, /k/–/ɡ/, /f/–/v/, /θ/–/ð/, /s/–/z/, /ʃ/–/ʒ/, /tʃ/–/dʒ/. Ký hiệu ∅ nghĩa là không có âm.</p></section>`;
}
function viewPhoneme(p) {
  const i = PHONEMES.indexOf(p), prev = PHONEMES[i - 1], next = PHONEMES[i + 1], r = S.ph[p.id];
  const hearBtns = w => `<button class="mini" data-act="phHear" data-w="${esc(w)}" data-acc="us" aria-label="Nghe ${esc(w)} giọng Anh-Mỹ">${ic("speaker", 15)} US</button><button class="mini" data-act="phHear" data-w="${esc(w)}" data-acc="uk" aria-label="Nghe ${esc(w)} giọng Anh-Anh">${ic("speaker", 15)} UK</button>`;
  const quiz = (() => {
    if (!p.pairs.length) return `<p class="muted">Âm này hầu như không có cặp tối thiểu thông dụng. Hãy nghe và nhại lại các từ ví dụ.</p>`;
    if (!PQ || PQ.id !== p.id) return `<p class="muted">Máy đọc một trong hai từ của một cặp. Bạn chọn từ mình nghe thấy. ${PQ_N} lượt.</p><div><button class="btn primary" data-act="phStart">Bắt đầu luyện nghe</button></div>`;
    if (PQ.round >= PQ_N) return `<div class="row" style="gap:18px"><div class="result-num">${PQ.ok}/${PQ_N}</div><p class="muted">lượt nghe đúng</p></div><div><button class="btn primary" data-act="phStart">Luyện thêm</button></div>`;
    const pair = p.pairs[PQ.cur.p], opts = [pair[0], pair[1]];
    return `<div class="row between"><span class="step-kind">Lượt ${PQ.round + 1}/${PQ_N}</span><span class="muted small">đúng ${PQ.ok}</span></div><div><button class="btn primary" data-act="phPlay">Nghe lại</button></div>
      <div class="grid2">${opts.map((w, k) => `<button class="choice${PQ.ans != null ? (k === PQ.cur.w ? " right" : PQ.ans === k ? " wrong" : "") : ""}" style="font-size:28px;text-align:center" data-act="phPick" data-i="${k}" ${PQ.ans != null ? "disabled" : ""} lang="en">${esc(w)}<br><small class="muted" style="font-size:13px">${k === 0 ? esc(phLabel(p)) : esc("/" + pair[2] + "/")}</small></button>`).join("")}</div>
      ${PQ.ans != null ? `<div class="row"><span class="feedback ${PQ.ans === PQ.cur.w ? "ok" : "no"}" style="flex:1"><b>${PQ.ans === PQ.cur.w ? "Đúng." : "Chưa đúng."}</b> Từ vừa đọc là <b lang="en">${esc(opts[PQ.cur.w])}</b>.</span><button class="btn primary" data-act="phNext">Lượt tiếp</button></div>` : ""}`;
  })();
  return `<section class="page-head"><a class="muted small" href="#/phonemes">Thư viện 44 âm</a>
      <div class="row" style="gap:18px;align-items:center"><span class="ph-hero">${esc(phLabel(p))}</span><div><h1>${esc(p.name)}</h1><p class="lede" style="margin:0">như trong <b class="en" lang="en">${esc(p.key)}</b> ${hearBtns(p.key)}</p>
      <div class="row" style="gap:6px;margin-top:6px"><span class="chip acc">${esc(PH_GROUPS.find(g => g[0] === p.g)[1])}</span>${p.voice !== undefined ? `<span class="chip">${p.voice ? "hữu thanh" : "vô thanh"}</span>` : ""}${r && r.n ? `<span class="chip good">nghe đúng ${r.ok}/${r.n}</span>` : ""}</div></div></div></section>
    <div class="grid2"><section class="panel stack track-gen accent"><h3>👄 Cách phát âm</h3><p>${esc(p.how)}</p>${p.us ? `<p class="tip"><b>Anh-Mỹ:</b> ${esc(p.us)}</p>` : ""}</section>
      <section class="panel stack"><h3>⚠️ Lỗi sai thường gặp</h3><p>${esc(p.trap)}</p><h3>✍️ Cách viết thường gặp</h3><p lang="en" class="en">${esc(p.spell)}</p></section></div>
    <section class="panel stack" style="margin-top:14px"><h3>🔊 Từ ví dụ</h3><p class="muted small">Nút có chấm xanh là bản ghi người thật đọc. Bấm micro để tự đọc và xem máy nghe ra từ nào.</p>
      <div class="lw-list">${p.words.map(w => { const res = PHR[p.id + ":" + w]; return `<div class="lw" style="--tc:var(--gen)"><div class="lw-main"><span class="lw-w" lang="en">${esc(w)}</span> <span class="ipa sm" data-ipa-for="${esc(w)}"></span></div><div class="lw-act">${hearBtns(w)}${SR ? `<button class="mini" data-act="phSay" data-w="${esc(w)}" aria-label="Tự đọc ${esc(w)}">${ic("mic", 15)} Nói</button>` : ""}${res ? `<span class="chip ${res.ok ? "good" : "bad"}" lang="en">${res.ok ? "✓ máy nghe đúng" : "máy nghe: " + esc(res.heard || "không rõ")}</span>` : ""}</div></div>`; }).join("")}</div></section>
    ${p.pairs.length ? `<section class="panel stack" style="margin-top:14px"><h3>⚖️ Cặp âm tối thiểu</h3><p class="muted small">Hai từ chỉ khác nhau đúng một âm. Nghe xen kẽ từng cặp để tai quen với sự khác biệt.</p>
      <div class="pairs-list">${p.pairs.map(([a, b, o]) => `<div class="pp"><span><b lang="en">${esc(a)}</b> <small class="muted">${esc(phLabel(p))}</small></span>${hear(a)}<span class="muted">với</span><span><b lang="en">${esc(b)}</b> <small class="muted">/${esc(o)}/</small></span>${b ? hear(b) : ""}</div>`).join("")}</div></section>` : ""}
    <section class="panel stack" style="margin-top:14px"><h3>🎧 Luyện nghe phân biệt</h3>${quiz}</section>
    ${PH_PAIR_SET[p.id] || PH_BANK[p.id] ? `<section class="panel stack" style="margin-top:14px"><h3>Luyện thêm</h3><div class="row">${PH_PAIR_SET[p.id] ? `<a class="btn" href="#/sounds/${PH_PAIR_SET[p.id]}">Bài cặp âm ${esc(PAIRS[PH_PAIR_SET[p.id]].title)}</a>` : ""}${PH_BANK[p.id] ? `<a class="btn" href="#/pron/${PH_BANK[p.id]}">Kho từ: ${esc(PRON_BANK.find(c => c.id === PH_BANK[p.id]).title)}</a>` : ""}</div></section>` : ""}
    <div class="row between" style="margin-top:16px">${prev ? `<a class="btn" href="#/phonemes/${prev.id}">Âm trước: ${esc(phLabel(prev))}</a>` : "<span></span>"}${next ? `<a class="btn primary" href="#/phonemes/${next.id}">Âm tiếp: ${esc(phLabel(next))}</a>` : ""}</div>`;
}

/* ---------------- Voice lab ---------------- */
function viewVoices() {
  const vs = SPEECH.voices.slice().sort((a, b) => voiceScore(b) - voiceScore(a)); const [v1, v2] = voicePair();
  const cached = Object.values(HA.cache).filter(x => x && (x.us || x.uk || x.any)).length;
  const row = v => { const t = voiceTier(v), [lab, cls] = TIER_LABEL[t]; return `<div class="item"><span class="grow"><span class="t">${esc(v.name)}</span><br><span class="s">${esc(v.lang)}${v.localService ? "" : ", cần mạng"}</span></span><span class="chip ${cls}">${lab}</span><button class="mini" data-act="voiceTest" data-name="${esc(v.name)}">${ic("speaker", 15)} Nghe</button><button class="mini" data-act="voiceSet" data-slot="voice" data-name="${esc(v.name)}" ${S.settings.voice === v.name ? "disabled" : ""}>Giọng chính</button><button class="mini" data-act="voiceSet" data-slot="voice2" data-name="${esc(v.name)}" ${S.settings.voice2 === v.name ? "disabled" : ""}>Giọng phụ</button></div>`; };
  const groups = [["en-US", "Anh-Mỹ"], ["en-GB", "Anh-Anh"], ["other", "Tiếng Anh vùng khác"]];
  return `<section class="page-head"><h1>Giọng đọc</h1><p class="lede">Ứng dụng dùng hai nguồn âm thanh. Từ đơn được đọc bằng bản ghi người bản xứ thật, nên phân biệt được ship và sheep. Câu và hội thoại được đọc bằng giọng tổng hợp tốt nhất mà thiết bị của bạn có.</p></section>
    <section class="panel stack"><div class="row between"><h3>🎙️ Giọng người thật cho từ đơn</h3><label class="row small" style="gap:8px"><input type="checkbox" id="setHuman" ${S.settings.human !== false ? "checked" : ""}> Bật</label></div>
      <p>Bản ghi lấy từ Free Dictionary API (dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA), có giọng Anh-Mỹ và Anh-Anh riêng. Mỗi từ chỉ tải một lần rồi được lưu lại trên máy. Từ nào chưa có bản ghi sẽ tự chuyển sang giọng máy.</p>
      <p class="muted small">Trạng thái: ${HA.off ? "chưa kết nối được (kiểm tra mạng; bản xem thử trên Claude chặn kết nối ngoài, trang GitHub Pages thì dùng được)" : "sẵn sàng"}. Đã lưu ${cached} từ có bản ghi. Phiên này: ${HA.used} lần giọng người thật, ${HA.tts} lần giọng máy.</p>
      <div class="row"><span class="en" lang="en">thought</span>${["us", "uk"].map(a => `<button class="mini" data-act="phHear" data-w="thought" data-acc="${a}">${ic("speaker", 15)} ${a.toUpperCase()}</button>`).join("")}<span class="en" lang="en" style="margin-left:12px">ship / sheep</span><button class="mini" data-act="phHear" data-w="ship" data-acc="${S.settings.accent}">${ic("speaker", 15)} ship</button><button class="mini" data-act="phHear" data-w="sheep" data-acc="${S.settings.accent}">${ic("speaker", 15)} sheep</button></div></section>
    <section class="panel stack" style="margin-top:14px"><h3>🗣️ Giọng máy cho câu</h3>
      <p>Đang dùng: <b>${v1 ? esc(v1.name) : "chưa tải được"}</b>${v1 ? ` <span class="chip ${TIER_LABEL[voiceTier(v1)][1]}">${TIER_LABEL[voiceTier(v1)][0]}</span>` : ""} cho giọng chính, <b>${v2 ? esc(v2.name) : "không có"}</b> cho giọng phụ. Ứng dụng tự chọn giọng tốt nhất, bạn có thể đổi ở danh sách dưới.</p>
      <div class="row"><button class="btn" data-act="voiceDemo">Nghe thử hội thoại</button><button class="btn quiet" data-act="voiceAuto">Về chế độ tự chọn</button></div>
      ${vs.length ? groups.map(([lc, name]) => { const xs = vs.filter(v => lc === "other" ? !/^en[-_](US|GB)$/i.test(v.lang) : v.lang.replace("_", "-").toLowerCase() === lc.toLowerCase()); return xs.length ? `<h3 style="margin-top:8px">${name} <span class="muted small">${xs.length} giọng</span></h3><div class="list">${xs.map(row).join("")}</div>` : ""; }).join("") : `<p class="feedback no">Trình duyệt chưa trả về danh sách giọng. Hãy tải lại trang hoặc thử trình duyệt khác.</p>`}</section>
    <section class="panel stack" style="margin-top:14px"><h3>💡 Để giọng máy tự nhiên hơn</h3>
      <p><b>Máy tính Windows hoặc Mac:</b> mở trang bằng Microsoft Edge. Edge có các giọng “Online (Natural)” như Aria, Jenny, Guy (Anh-Mỹ), Sonia, Ryan, Libby (Anh-Anh), nghe rất gần người thật. Các giọng này cần mạng.</p>
      <p><b>iPad và iPhone:</b> Safari không cho trang web dùng giọng Siri, và giọng tải thêm (Premium, Enhanced) thường không hiện trong trình duyệt. Vì vậy trên iPad, bản ghi người thật là nguồn tốt nhất để luyện phát âm. Bạn vẫn có thể thử vào Cài đặt, Trợ năng, Nội dung được đọc, Giọng nói, Tiếng Anh, tải giọng Premium hoặc Enhanced, rồi mở lại trang để xem giọng có xuất hiện không.</p>
      <p><b>Android:</b> dùng Chrome với giọng Google; vào cài đặt Chuyển văn bản thành giọng nói để tải giọng tiếng Anh chất lượng cao.</p>
      <p class="muted small">Tốc độ đọc đổi nhanh bằng nút tốc độ trên thanh công cụ. Luyện thi nên nghe ở 1.0×; mới học có thể dùng 0.9×.</p></section>`;
}

/* ---------------- Settings / About additions ---------------- */
const _viewSettings44 = viewSettings;
viewSettings = () => _viewSettings44().replace('<section class="panel" style="margin-top:14px"><h3>Giọng đọc</h3>', '<section class="panel" style="margin-top:14px"><div class="row between"><h3>Giọng đọc</h3><a class="btn small primary" href="#/voices">Kiểm tra và chọn giọng</a></div>');
const _viewAbout44 = viewAbout;
viewAbout = () => _viewAbout44().replace("Phiên âm theo Cambridge Dictionary.", "Phiên âm theo Cambridge Dictionary. Bản ghi phát âm người thật và phiên âm bổ sung lấy qua Free Dictionary API (dictionaryapi.dev) từ dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA.");

/* ---------------- Actions ---------------- */
Object.assign(ACT, {
  phHear(el) { speakNow(el.dataset.w, { acc: el.dataset.acc }); },
  phStart() { const p = PH_BY[ROUTE.arg]; PQ = { id: p.id, round: 0, ok: 0, cur: null, ans: null }; phNew(); render(); phSpeak(); },
  phPlay() { phSpeak(); },
  phPick(el) { const p = PH_BY[PQ.id]; PQ.ans = +el.dataset.i; const ok = PQ.ans === PQ.cur.w; if (ok) PQ.ok++; evidence("pron", ok, "ph:" + p.id); const r = S.ph[p.id] || (S.ph[p.id] = { n: 0, ok: 0 }); r.n++; if (ok) r.ok++; touch(); render(); },
  phNext() { PQ.round++; if (PQ.round < PQ_N) { phNew(); render(); phSpeak(); } else { save(); render(); } },
  async phSay(el) {
    if (ASR.on) { try { ASR.cur.stop(); } catch { } return; }
    const p = PH_BY[ROUTE.arg], w = el.dataset.w; toast(`Đọc từ “${w}”…`);
    try { const alts = (await recognize()).map(norm); const ok = alts.some(a => (" " + a + " ").includes(" " + w.toLowerCase() + " ")); PHR[p.id + ":" + w] = { ok, heard: alts[0] || "" }; evidence("pron", ok, "ph:" + p.id); touch(); render(); }
    catch (e) { asrError(e); }
  },
  voiceTest(el) { const v = SPEECH.voices.find(x => x.name === el.dataset.name); if (!v || !TTS_OK) return; stopSpeech(); const u = new SpeechSynthesisUtterance(/GB/i.test(v.lang) ? "Good morning. Could you tell me where it hurts?" : "Good morning. What brings you in today?"); u.voice = v; u.lang = v.lang; u.rate = S.settings.rate; SPEECH.busy = true; u.onend = u.onerror = () => { SPEECH.busy = false; }; speechSynthesis.speak(u); },
  voiceSet(el) { S.settings[el.dataset.slot] = el.dataset.name; S.settingsAt = Date.now(); save(); render(); toast("Đã chọn giọng."); },
  voiceAuto() { S.settings.voice = S.settings.voice2 = "auto"; S.settingsAt = Date.now(); save(); render(); },
  voiceDemo() { sayLines([{ text: "Good morning. I'm Dr Khoi. What brings you in today?", who: 0 }, { text: "I've had a headache for three days, and it's getting worse.", who: 1 }]); }
});
function phNew() { const p = PH_BY[PQ.id]; PQ.cur = { p: Math.floor(Math.random() * p.pairs.length), w: Math.round(Math.random()) }; PQ.ans = null; }
function phSpeak() { const p = PH_BY[PQ.id], pair = p.pairs[PQ.cur.p]; speakNow(pair[PQ.cur.w]); }
document.addEventListener("change", e => { if (e.target.id === "setHuman") { S.settings.human = e.target.checked; S.settingsAt = Date.now(); touch(); save(); render(); } });
addEventListener("hashchange", () => { if (ROUTE.name !== "phonemes" || (PQ && PQ.id !== ROUTE.arg)) PQ = null; });

/* ---------------- Start ---------------- */
initApp();
if (syncCfg().token && syncCfg().auto !== false) setTimeout(() => syncNow(false), 1500);
