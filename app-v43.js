/* ============================================================
   v4.3 · Mọi chặng đều có "Bài học": mỗi nhóm từ vựng của chặng được
   chia thành các bài 5 từ, cấu trúc giống bài G/M (học từ, kiểm tra
   nghĩa, điền từ, từ loại, nghe, sắp xếp câu, chép chính tả, viết đúng,
   phát âm, nói). Có thêm "Bài ngẫu nhiên" 5 từ chưa học của chặng.
   Nạp SAU app-v42.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.3"; APP.build = "03.10.26";
const LESSON_SIZE = 5;
const PAIR_KEYS = Object.keys(PAIRS);
const capFirst = s => s.charAt(0).toUpperCase() + s.slice(1);
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const baseWord = w => w.split(" · ")[0];
function lessonWord(lw) {
  let ex = lw.ex || "";
  if (lw.topic.track === "med" && ex && !new RegExp(reEsc(lw.w), "i").test(ex)) ex = `${capFirst(lw.w)} means ${ex}.`;
  return { w: lw.w, us: "", uk: "", syl: [lw.w], st: 0, pos: lw.pos, vi: lw.vi, ex, exvi: "", lw };
}
function posIndex(pos) { const p = (pos || "").split(/[,·]/)[0].trim(); return p === "n" ? 0 : p === "v" ? 1 : p === "adj" ? 2 : 3; }
function buildGenSteps(l, unitIdx, part) {
  const ws = l.words, pool = l.pool;
  /* Khớp nguyên từ (không khớp "man" trong "woman"). */
  const wordRe = w => new RegExp("(^|[^A-Za-z'])(" + reEsc(w.w) + ")(?![A-Za-z])", "i");
  const withEx = ws.filter(w => w.ex && !/·/.test(w.w) && wordRe(w).test(w.ex));
  const blank = w => w.ex.replace(wordRe(w), (m, pre) => pre + "___");
  /* Mỗi câu trắc nghiệm chỉ được có MỘT đáp án đúng: đáp án nhiễu không trùng hoặc gần nghĩa với đáp án đúng (xem rankDistractors). */
  const others = (w, n) => rankDistractors(w, pool, n).map(x => x.w);
  const hintOf = w => viParts(w.vi)[0] || w.vi;
  const steps = [];
  shuffle(ws.filter(w => !/·/.test(w.w))).slice(0, 2).forEach(w => { const opts = shuffle([w.w, ...others(w, 2)]); steps.push({ t: "mcq", k: "vocab", q: `Which word means “${w.vi}”?`, opts, a: opts.indexOf(w.w), why: `${w.w}: ${w.vi}.` }); });
  /* Câu điền từ: kèm gợi ý nghĩa tiếng Việt của từ cần điền. Gợi ý này là thứ phân biệt đáp án đúng với các từ còn lại (cùng từ loại, khác nghĩa), nên không có hai đáp án cùng đúng. */
  withEx.slice(0, 2).forEach(w => {
    const lesson = rankDistractors(w, ws, 2), more = lesson.length < 2 ? rankDistractors(w, pool.filter(x => !lesson.includes(x)), 2 - lesson.length) : [];
    const opts = shuffle([w.w, ...lesson.map(x => x.w), ...more.map(x => x.w)]);
    if (opts.length >= 3) steps.push({ t: "cloze", k: "vocab", s: blank(w), hint: `nghĩa của từ cần điền: ${hintOf(w)}`, opts, a: opts.indexOf(w.w), why: `${w.w}: ${w.vi}.` });
  });
  const cls = ws.filter(w => !/·/.test(w.w) && w.pos);
  if (cls.length >= 3) steps.push({ t: "classify", k: "vocab", title: "Word classes", q: "Mỗi từ thuộc từ loại nào?", opts: ["danh từ", "động từ", "tính từ", "khác"], items: cls.map(w => [w.w, posIndex(w.pos)]), why: "n là danh từ, v là động từ, adj là tính từ. Trạng từ (adv), cụm từ (phr), giới từ (prep)… xếp vào loại khác. Một số từ có nhiều từ loại; ở đây tính theo nghĩa đang học." });
  if (withEx.length >= 2) {
    const heard = withEx.slice(0, 3), heardText = heard.map(w => w.ex).join(" ");
    /* Từ nhiễu không được xuất hiện (kể cả dạng biến đổi như lives/lived) trong bản ghi. */
    const notIn = shuffle(pool.filter(x => !ws.some(y => y.w === x.w) && !/·/.test(x.w) && !new RegExp("(^|[^A-Za-z'])" + reEsc(x.w), "i").test(heardText)));
    const qs = heard.slice(0, 2).map((w, k) => { const opts = shuffle([w.w, ...notIn.slice(k * 2, k * 2 + 2).map(x => x.w)]); return { q: "Which of these words is in the recording?", opts, a: opts.indexOf(w.w), why: `Câu có từ ${w.w}: “${w.ex}”` }; }).filter(q => q.opts.length >= 3);
    if (qs.length) steps.push({ t: "listen", k: "listening", title: "Listen to the examples", who: { N: "Narrator" }, lines: heard.map(w => ["N", w.ex, `${w.w}: ${w.vi}`]), qs });
  }
  const sent = withEx.map(w => w.ex).filter(s => { const n = s.split(/\s+/).length; return n >= 3 && n <= 10; });
  if (sent[0]) steps.push({ t: "order", k: "writing", vi: `Sắp xếp thành câu đúng (có từ mới trong bài).`, tiles: sent[0].split(/\s+/) });
  const dsent = sent[1] || (withEx.length > 1 ? withEx[1].ex : null);
  if (dsent && dsent.split(/\s+/).length <= 14) steps.push({ t: "dict", k: "listening", s: dsent, vi: "Nghe câu có từ mới rồi chép lại." });
  const sp = ws.filter(w => !/·/.test(w.w)).slice(-1)[0];
  if (sp) { const tHint = `nghĩa: ${hintOf(sp)}; bắt đầu bằng “${sp.w[0]}”, ${sp.w.length} ký tự`; steps.push(sp.ex && wordRe(sp).test(sp.ex) ? { t: "cloze", k: "writing", s: blank(sp), hint: tHint, type: true, a: [sp.w], why: `Viết đúng chính tả: ${sp.w} (${sp.vi}).` } : { t: "cloze", k: "writing", s: `“${sp.vi}” in English: ___`, hint: `bắt đầu bằng “${sp.w[0]}”, ${sp.w.length} ký tự`, type: true, a: [sp.w], why: `${sp.w}: ${sp.vi}.` }); }
  steps.push({ t: "pairs", set: PAIR_KEYS[(unitIdx * 3 + part) % PAIR_KEYS.length] });
  const fam = ws.every(w => /·/.test(w.w)); const spk = (fam ? ws : ws.filter(w => !/·/.test(w.w))).slice(0, 4);
  steps.push({ t: "speak", title: "Use the new words", prompt: `Say or write one short sentence with each word: ${spk.map(w => baseWord(w.w)).join(", ")}.`, vi: fam ? "Nói hoặc viết mỗi họ từ một câu, dùng ít nhất dạng đầu tiên của họ từ." : "Nói hoặc viết mỗi từ một câu ngắn. Máy kiểm tra bạn đã dùng đủ các từ chưa.", models: spk.map(w => w.ex || `${capFirst(baseWord(w.w))}.`), kw: spk.map(w => fam ? w.w.split(" · ").map(x => x.toLowerCase()) : [baseWord(w.w).toLowerCase()]), labels: spk.map(w => baseWord(w.w)) });
  return steps;
}
/* ---------------- Xáo thứ tự lựa chọn của bài viết tay và ca bệnh ----------------
   Dữ liệu viết tay có đáp án đúng gần như luôn ở một vị trí; xáo khi tải để vị trí không đoán được.
   Giữ nguyên câu chỉ có 2 lựa chọn (Yes/No). */
const _shufQ = q => { if (q && Array.isArray(q.opts) && q.opts.length > 2 && typeof q.a === "number") { const [o, a] = shuffleChoice(q.opts, q.a); q.opts = o; q.a = a; } };
LESSONS.forEach(l => (l.steps || []).forEach(st => { if (st.t === "mcq" || (st.t === "cloze" && st.opts)) _shufQ(st); (st.qs || []).forEach(_shufQ); }));
CASES.forEach(c => { _shufQ(c.dx); _shufQ(c.explain); });
/* ---------------- Generate lessons for every unit ---------------- */
const GEN_LESSONS = [];
UNITS.forEach((u, ui) => {
  u.core = u.core || u.lessons.slice(); u.groups = [];
  const pool = unitWords(u).map(lessonWord);
  u.vocab.forEach(([tid, lvl]) => {
    const t = LIB_BY[tid]; if (!t) return; const ws = t.words.filter(w => w.lvl === lvl); if (!ws.length) return;
    const chunks = []; for (let i = 0; i < ws.length; i += LESSON_SIZE) chunks.push(ws.slice(i, i + LESSON_SIZE));
    if (chunks.length > 1 && chunks[chunks.length - 1].length < 3) { const last = chunks.pop(); chunks[chunks.length - 1].push(...last); }
    const ids = chunks.map((ch, k) => {
      const id = `v-${tid}-${lvl}-${k + 1}`, words = ch.map(lessonWord);
      const l = { id, gen: true, unit: u.id, topic: tid, part: k + 1, parts: chunks.length, track: u.track, level: u.track === "med" ? (lvl === "T1" ? "Nền tảng" : "Mở rộng") : lvl, min: 10,
        title: t.title, vi: `${t.vi}, phần ${k + 1}/${chunks.length}`, can: `Nhận biết, nghe, viết và dùng đúng ${words.length} từ: ${words.map(w => w.w).join(", ")}.`, pre: [], words, pool };
      l.steps = buildGenSteps(l, ui, k); LESSON_BY[id] = l; GEN_LESSONS.push(l); return id;
    });
    u.groups.push({ tid, lvl, ids });
  });
  u.lessons = [...u.core, ...u.groups.flatMap(g => g.ids)];
});
S = load();

/* ---------------- Engine hooks ---------------- */
const _alc43 = addLessonCards;
addLessonCards = l => { if (!l.gen) return _alc43(l); let n = 0; l.words.forEach(w => { n += addWordCards(w.lw); }); return n; };
const _intro43 = STEP.intro, _words43 = STEP.words, _done43 = STEP.done;
STEP.intro = (step, st) => { let h = _intro43(step, st); if (L.l.gen) h = h.replace("Bài gồm 6 từ mới, một mẫu câu, nghe hiểu, luyện tập, phát âm và nói.", `Bài gồm ${L.l.words.length} từ mới của chặng ${UNIT_BY[L.l.unit].code}: học từ, kiểm tra nghĩa, điền từ, từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng, phát âm và nói.`).replace(`<h1 lang="en">`, `<p class="muted small">Chặng ${esc(UNIT_BY[L.l.unit].code)}: ${esc(UNIT_BY[L.l.unit].vi)}</p><h1 lang="en">`); return h; };
STEP.words = (step, st) => { let h = _words43(step, st); const w = L.l.words[st.wi || 0]; if (!w.ex) h = h.replace(/<div class="ex-item">[\s\S]*?<\/div>/, ""); if (L.l.gen) h = h.replace('<p class="muted small">Đọc to từ và câu ví dụ sau khi nghe. Âm tiết được tô vàng là âm tiết mang trọng âm.</p>', `<p class="muted small">Đọc to từ và câu ví dụ sau khi nghe. <a href="#/library/${w.lw.topic.id}">${w.lw.topic.icon} ${esc(w.lw.topic.vi)}</a> <span class="lv lv-${w.lw.lvl}">${lvName(w.lw.lvl)}</span></p>`); return h; };
function unitOfLesson(id) { return UNITS.find(u => u.lessons.includes(id)); }
STEP.done = (step, st) => {
  let h = _done43(step, st); const u = unitOfLesson(L.id) || (L.l.unit && UNIT_BY[L.l.unit]); if (!u) return h;
  const next = u.lessons.find(id => id !== L.id && !S.lessons[id]?.done);
  h = h.replace(/<a class="btn" href="#\/lesson\/[^"]+">Bài tiếp: [^<]+<\/a>/, "");
  return h.replace('<a class="btn quiet" href="#/today">Về Hôm nay</a>', `${next ? `<a class="btn" href="#/lesson/${next}">Bài tiếp của chặng</a>` : ""}<a class="btn" href="#/unit/${u.id}">Về chặng ${esc(u.code)}</a><a class="btn quiet" href="#/today">Về Hôm nay</a>`);
};

/* ---------------- Unit page: lessons section ---------------- */
function lessonItem(l, k) {
  const r = S.lessons[l.id], cur = L && L.id === l.id && !L.fin && L.i > 0;
  return `<a class="item link" href="#/lesson/${l.id}"><span class="lesson-dot ${r?.done ? "done" : ""}">${r?.done ? "✓" : k}</span><span class="grow"><span class="t">${l.gen ? `Phần ${l.part}` : esc(l.title)}</span>${l.gen ? ` <span class="muted small">${l.words.length} từ</span>` : ""}<br><span class="s" ${l.gen ? 'lang="en"' : ""}>${l.gen ? esc(l.words.map(w => w.w).join(", ")) : esc(l.vi)}</span></span>${r?.done ? `<span class="chip good">${Math.round(r.best * 100)}%</span>` : cur ? `<span class="chip acc">đang học</span>` : ""}</a>`;
}
function lessonsSection(u) {
  const done = u.lessons.filter(id => S.lessons[id]?.done).length;
  const core = u.core.length ? `<div class="lgroup"><div class="lg-h"><span class="ti">💬</span><span class="grow"><b>Bài giao tiếp</b><br><span class="muted small">Hội thoại, mẫu câu và lỗi sai thường gặp</span></span></div><div class="list">${u.core.map(id => lessonItem(LESSON_BY[id], "★")).join("")}</div></div>` : "";
  const groups = u.groups.map(g => { const t = LIB_BY[g.tid], d = g.ids.filter(id => S.lessons[id]?.done).length; return `<details class="lgroup" style="--tc:${t.color}" ${d < g.ids.length && g === u.groups.find(x => x.ids.some(id => !S.lessons[id]?.done)) ? "open" : ""}><summary class="lg-h"><span class="ti">${t.icon}</span><span class="grow"><b lang="en">${esc(t.title)}</b> <span class="lv lv-${g.lvl}">${lvName(g.lvl)}</span><br><span class="muted small">${esc(t.vi)}</span></span><span class="chip ${d === g.ids.length ? "good" : ""}">${d}/${g.ids.length} bài</span></summary><div class="list">${g.ids.map(id => lessonItem(LESSON_BY[id], LESSON_BY[id].part)).join("")}</div></details>`; }).join("");
  return `<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>📖 Bài học <span class="muted small">${done}/${u.lessons.length} bài</span></h3>${unitWords(u).some(w => wStatus(w) === "new") ? `<button class="btn small" data-act="randLesson" data-u="${u.id}">🎲 Bài ngẫu nhiên (5 từ chưa học)</button>` : ""}</div>
    <p class="muted small">Mỗi bài dạy ${LESSON_SIZE} từ của một nhóm từ vựng trong chặng, cùng cấu trúc với các bài G và M: học từ, kiểm tra nghĩa, điền từ, từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng, phát âm và nói. Học xong, các từ vào lịch ôn tập và được tính vào tiến độ của Thư viện.</p>${core}${groups}</section>`;
}
const _viewUnit43 = viewUnit;
viewUnit = function () {
  const u = UNIT_BY[ROUTE.arg]; let h = _viewUnit43(); if (!u) return h;
  const sec = lessonsSection(u), re = /<section class="panel stack" style="margin-top:14px"><h3>📖 Bài học<\/h3>[\s\S]*?<\/section>/;
  h = re.test(h) ? h.replace(re, sec) : h.replace('<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤', sec + '<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤');
  return h.replace(/Học bài (v-[\w-]+)/, (m, id) => { const l = LESSON_BY[id]; return l ? `Học bài: ${l.title} (phần ${l.part}/${l.parts})` : m; });
};

/* ---------------- Today: lesson of the current unit ---------------- */
const _plan43 = planToday;
planToday = function () {
  let items = _plan43().filter(i => i.kind !== "lesson"); const add = [];
  for (const tr of ["gen", "med"]) {
    const u = currentUnit(tr); if (!u) continue; const lid = u.lessons.find(id => !S.lessons[id]?.done); if (!lid) continue; const l = LESSON_BY[lid];
    add.push({ kind: "lesson", track: tr, short: `học bài ${l.gen ? l.title : l.id}`, title: `Bài học chặng ${u.code}: ${l.title}${l.gen ? ` (phần ${l.part}/${l.parts})` : ""}`, why: l.gen ? `${l.words.length} từ mới: ${l.words.map(w => w.w).join(", ")}.` : l.can, href: `#/lesson/${lid}`, cta: "Vào bài", est: l.min });
  }
  items = items.filter(i => !(i.kind === "intake" && add.some(a => a.track === i.track)));
  items.splice(items[0] && items[0].kind === "review" ? 1 : 0, 0, ...add);
  return items.slice(0, 4);
};

/* ---------------- Random lesson ---------------- */
Object.assign(ACT, {
  randLesson(el) {
    const u = UNIT_BY[el.dataset.u]; const fresh = shuffle(unitWords(u).filter(w => wStatus(w) === "new")).slice(0, LESSON_SIZE);
    if (fresh.length < 3) { toast("Chặng này còn quá ít từ chưa học để tạo bài ngẫu nhiên."); return; }
    const id = `r-${u.id}-${Date.now().toString(36)}`, words = fresh.map(lessonWord);
    const l = { id, gen: true, random: true, unit: u.id, topic: "", part: 1, parts: 1, track: u.track, level: u.level, min: 10, title: "Random mix", vi: `Bài ngẫu nhiên, chặng ${u.code}`, can: `Nhận biết, nghe, viết và dùng đúng ${words.length} từ: ${words.map(w => w.w).join(", ")}.`, pre: [], words, pool: unitWords(u).map(lessonWord) };
    l.steps = buildGenSteps(l, UNITS.indexOf(u), Math.floor(Math.random() * 7)); LESSON_BY[id] = l;
    location.hash = "#/lesson/" + id;
  }
});

/* ---------------- Start ---------------- */
/* khởi động: xem app-v44.js */
