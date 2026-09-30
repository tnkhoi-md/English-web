/* ============================================================
   VIEWS 2 · Review, Clinic, Sounds, Words, Progress, Settings
   ============================================================ */

/* ---------------- Review (FSRS) ---------------- */
let R = null;
function startReview() { R = { queue: dueList(5 * MIN).slice(0, 80), cur: null, phase: "front", typed: "", check: null, n: 0, again: 0 }; nextCard(); }
function nextCard() {
  const now = Date.now(); let idx = R.queue.findIndex(id => S.cards[id] && S.cards[id].due <= now);
  if (idx < 0 && R.queue.length) { const soon = R.queue.map((id, i) => [i, S.cards[id].due]).filter(x => x[1] - now < 20 * MIN).sort((a, b) => a[1] - b[1])[0]; idx = soon ? soon[0] : -1; }
  if (idx < 0) { R.cur = null; R.phase = "end"; return; }
  R.cur = R.queue.splice(idx, 1)[0]; R.phase = "front"; R.typed = ""; R.check = null;
}
function blankIn(ex, w) { const re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"); return re.test(ex) ? esc(ex.replace(re, "\u0000")).replace("\u0000", '<span class="gap">&nbsp;&nbsp;&nbsp;&nbsp;</span>') : null; }
function viewReview() {
  if (ROUTE.arg !== "go") {
    const st = cardStats(), due = dueList().length, fc = forecast(7), max = Math.max(1, ...fc);
    const nextDue = Object.values(S.cards).map(c => c.due).filter(t => t > Date.now()).sort((a, b) => a - b)[0];
    return `<section class="page-head"><h1>Ôn tập</h1><p class="lede">Thuật toán FSRS ước lượng lúc bạn sắp quên từng thẻ và hẹn ôn đúng lúc đó. Mỗi từ có hai thẻ: nhìn từ nhớ nghĩa, và nhìn nghĩa gõ lại từ.</p></section>
      ${st.total ? `<div class="panel stack"><div class="grid3"><div class="stat"><b>${due}</b><span>đến hạn bây giờ</span></div><div class="stat"><b>${st.learning + st.new}</b><span>mới hoặc đang học</span></div><div class="stat"><b>${st.mature}</b><span>đã vững (từ 21 ngày)</span></div></div>
        <div class="row">${due ? `<a class="btn primary" href="#/review/go">Bắt đầu ôn ${due} thẻ</a>` : `<p class="muted">Không có thẻ đến hạn. ${nextDue ? "Thẻ tiếp theo đến hạn sau " + fmtIvl(nextDue - Date.now()) + "." : ""}</p>`}</div></div>
        <div class="panel stack" style="margin-top:14px"><h3>Số thẻ đến hạn 7 ngày tới</h3><div class="bars">${fc.map((v, i) => `<div><span>${v}</span><i style="height:${v / max * 90}%"></i><span>${i === 0 ? "Hôm nay" : new Date(Date.now() + i * DAY).toLocaleDateString("vi-VN", { weekday: "short" })}</span></div>`).join("")}</div></div>
        <div class="panel stack" style="margin-top:14px"><h3>Chấm thế nào cho đúng</h3><p><b>Quên</b>: không nhớ ra. <b>Khó</b>: nhớ ra nhưng rất chật vật. <b>Nhớ</b>: nhớ ra sau một chút suy nghĩ. <b>Dễ</b>: nhớ ngay lập tức. Hãy chấm thật lòng; thuật toán dựa vào đó để hẹn lịch.</p><p class="muted small">Trên bàn phím: phím cách để lật thẻ, phím 1 đến 4 để chấm.</p></div>`
        : `<div class="empty"><p>Chưa có thẻ nào. Học xong một bài, 6 từ của bài sẽ thành 12 thẻ ôn tập.</p><a class="btn primary" href="#/path">Mở lộ trình</a></div>`}`;
  }
  if (!R) startReview();
  if (R.phase === "end") {
    return `${focusBar(null, "Ôn tập")}<div class="focus-page"><article class="step-card"><span class="step-kind">Xong phiên ôn</span><h1>${R.n ? "Đã ôn " + R.n + " lượt." : "Không có thẻ đến hạn."}</h1>
      ${R.n ? `<p class="muted">${R.again} lượt chọn Quên. Những thẻ đó sẽ quay lại sớm hơn.</p>` : ""}<div class="row"><a class="btn primary" href="#/today">Về Hôm nay</a><a class="btn" href="#/review">Xem lịch ôn</a></div></article></div>`;
  }
  const info = cardInfo(R.cur), c = S.cards[R.cur], w = info.w, now = Date.now();
  const left = R.queue.length + 1;
  let body;
  if (info.dir === "r") {
    body = `<span class="step-kind">Nhìn từ, nhớ nghĩa</span><div class="flash"><div class="row between" style="align-items:flex-start">${specimen(w)}${hear(w.w)}</div>
      ${R.phase === "back" ? `<div class="divider"></div><p style="font-size:22px;font-weight:600">${esc(w.vi)}</p>${partsHtml(w.parts)}${w.ex ? `<div class="ex-item"><span class="example" lang="en">${esc(w.ex)}</span><span class="example-vi">${esc(w.exvi)}</span>${hear(w.ex)}</div>` : ""}` : ""}</div>`;
  } else {
    const bl = blankIn(w.ex, w.w);
    body = `<span class="step-kind">Nhìn nghĩa, gõ lại từ</span><div class="flash"><p style="font-size:26px;font-weight:600">${esc(w.vi)}</p>${bl ? `<p class="cloze" lang="en" style="font-size:22px">${bl}</p>` : ""}<p class="muted small">${esc(w.exvi)}</p>
      <div class="row"><input class="field" id="ans" style="flex:1;min-width:200px" value="${esc(R.typed)}" data-enter="revCheck" ${R.phase === "back" ? "disabled" : "data-autofocus"} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" aria-label="Gõ từ tiếng Anh">${R.phase === "front" ? `<button class="btn primary" data-act="revCheck">Kiểm tra</button>` : ""}</div>
      ${R.phase === "back" ? `<div class="feedback ${R.check.ok ? "ok" : "no"}" role="status"><b>${R.check.ok ? (R.check.typo ? "Gần đúng, sai chính tả nhẹ." : "Đúng.") : "Đáp án:"}</b> <span class="en" lang="en" style="font-size:19px">${esc(w.w)}</span> <span class="muted">${esc(ipaOf(w))}</span></div><div class="row">${hear(w.w)}${w.ex ? hear(w.ex, "Nghe câu") + `<span class="example" lang="en" style="font-size:17px">${esc(w.ex)}</span>` : ""}</div>` : ""}</div>`;
  }
  const suggest = info.dir === "p" && R.check ? (R.check.ok ? (R.check.typo ? 2 : 3) : 1) : 0;
  const grades = [["Quên", 1], ["Khó", 2], ["Nhớ", 3], ["Dễ", 4]].map(([lab, g]) => { const n = schedule(c, g, now); return `<button class="grade g${g}${suggest === g ? " suggest" : ""}" data-act="grade" data-g="${g}"><span>${lab}</span><small>${fmtIvl(n.due - now)}</small></button>`; }).join("");
  const actions = R.phase === "front" ? (info.dir === "r" ? `<button class="btn primary" data-act="revFlip" style="width:100%">Hiện nghĩa</button>` : "") : `<div class="grades" style="width:100%">${grades}</div>`;
  return `<div class="track-${info.l.track}">${focusBar(null, `Còn ${left} thẻ`)}<div class="focus-page"><article class="step-card">${body}<p class="muted small">Từ bài ${info.l.id}${c.state === "new" ? ", thẻ mới" : c.lapses ? ", đã quên " + c.lapses + " lần" : ""}</p></article><div class="step-actions">${actions}</div></div></div>`;
}

/* ---------------- Clinic ---------------- */
let CL = null;
function startCase(id) {
  const c = CASE_BY[id]; if (!c) return false;
  const bank = {}; c.cats.forEach(([k]) => { bank[k] = shuffle([...c.qs.filter(q => q.cat === k).map(q => ({ g: q.id })), ...c.bad.map((b, i) => [b, i]).filter(([b]) => b.cat === k).map(([, i]) => ({ b: i }))]); });
  CL = { id, c, asked: [], bad: [], lines: [{ who: "tip", text: "Bệnh nhân vừa vào phòng. Hãy chào, giới thiệu bản thân và mở đầu bằng một câu hỏi mở." }], phase: "talk", bank, summary: "", sum: null, dx: {}, ex: {}, input: "" };
  return true;
}
const STOP = new Set("a an the and or any are is do does did you your have has had it to of in on at for be been with me my i can could would what how when where".split(" "));
function overlap(a, b) { const A = new Set(norm(a).split(" ").filter(w => !STOP.has(w))); return norm(b).split(" ").filter(w => !STOP.has(w) && A.has(w)).length; }
function matchQuestion(text) {
  const t = " " + norm(text) + " "; let best = null, bestLen = 0;
  for (const q of CL.c.qs) {
    let len = 0; const all = q.kw.every(g => { const hit = g.map(norm).filter(a => a.includes(" ") || a.length > 5 ? t.includes(a) : t.includes(" " + a + " ") || t.includes(" " + a + "s ")); if (hit.length) len += Math.max(...hit.map(h => h.length)); return hit.length > 0; });
    if (all) len += 4 * overlap(q.q, text);
    if (all && len > bestLen) { best = q; bestLen = len; }
  }
  return bestLen >= 5 ? best : null;
}
function revealChat() { if (innerWidth <= 1080) requestAnimationFrame(() => { const c = document.getElementById("chat"); const last = c && c.lastElementChild; last && last.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }); }
function askGood(q, spoken) {
  const again = CL.asked.includes(q.id);
  if (!again) CL.asked.push(q.id);
  const ans = again ? "As I said, " + q.a.charAt(0).toLowerCase() + q.a.slice(1) : q.a;
  CL.lines.push({ who: "dr", text: spoken || q.q }, { who: "pt", text: ans });
  render(); revealChat(); sayLines([{ text: spoken || q.q, who: 0 }, { text: ans, who: 1 }]);
}
function askBad(i) {
  const b = CL.c.bad[i]; if (!CL.bad.includes(i)) CL.bad.push(i);
  CL.lines.push({ who: "dr", text: b.q }, { who: "pt", text: b.a }, { who: "note", text: `${b.why} Thử: “${b.better}”` });
  render(); revealChat(); sayLines([{ text: b.q, who: 0 }, { text: b.a, who: 1 }]);
}
function askFree(text, fromVoice) {
  text = text.trim(); if (!text) return;
  const q = matchQuestion(text);
  if (q) { CL.input = ""; askGood(q, text); if (fromVoice) evidence("speaking", true, CL.id); }
  else { CL.lines.push({ who: "dr", text }, { who: "pt", text: "Sorry, could you ask that another way?" }, { who: "tip", text: "Máy chưa khớp câu này với câu hỏi nào của ca bệnh. Thử diễn đạt rõ hơn, hoặc chọn từ ngân hàng câu hỏi bên cạnh." }); if (fromVoice) evidence("speaking", false, CL.id); render(); say("Sorry, could you ask that another way?", { who: 1 }); }
}
function caseKeyStats() {
  const key = CL.c.qs.filter(q => q.key), got = key.filter(q => CL.asked.includes(q.id));
  const ice = CL.c.qs.filter(q => q.cat === "ICE"), iceGot = ice.filter(q => CL.asked.includes(q.id));
  return { key, got, ice, iceGot };
}
function viewClinic() {
  if (!ROUTE.arg) {
    return `<section class="page-head"><h1>Phòng khám ảo</h1><p class="lede">Bạn là bác sĩ. Hỏi bệnh bằng cách tự gõ, tự nói, hoặc chọn từ ngân hàng câu hỏi. Ngân hàng có cả những cách hỏi chưa phù hợp để bạn học cách tránh. Cuối buổi, bạn viết tóm tắt ca, chọn chẩn đoán và cách giải thích cho bệnh nhân.</p></section>
      <div class="list panel track-med">${CASES.map(c => { const r = S.cases[c.id]; const ready = c.rec.every(id => S.lessons[id]?.done); return `<a class="item link" href="#/clinic/${c.id}"><span class="avatar">${c.patient.av}</span><span class="grow"><span class="t">${esc(c.vi)}</span> <span class="muted small" lang="en">${esc(c.title)}</span><br><span class="s">${esc(c.patient.name)}, ${c.patient.age} tuổi, ${esc(c.patient.job)}. ${ready ? "Bạn đã học đủ bài chuẩn bị." : "Nên học trước " + c.rec.join(", ") + "."}</span></span>${r ? `<span class="chip good">tốt nhất ${Math.round(r.best * 100)}%</span>` : `<span class="chip acc">chưa khám</span>`}</a>`; }).join("")}</div>
      <div class="panel stack" style="margin-top:14px"><h3>Chấm điểm dựa trên gì</h3><p>Báo cáo cuối ca mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của bài thi OET Speaking: xây dựng quan hệ, tìm hiểu quan điểm bệnh nhân, cấu trúc buổi hỏi, thu thập thông tin và cung cấp thông tin.</p><p class="muted small">Đây là công cụ tự luyện ngôn ngữ, không phải điểm OET và không phải hướng dẫn chẩn đoán hay điều trị.</p></div>`;
  }
  const c = CL.c, p = c.patient, ks = caseKeyStats();
  if (CL.phase === "talk") {
    const chat = CL.lines.map(l => `<div class="bubble ${l.who}" ${l.who === "note" || l.who === "tip" ? "" : 'lang="en"'}>${esc(l.text)}</div>`).join("");
    const bank = c.cats.map(([k, label]) => {
      const items = CL.bank[k] || []; if (!items.length) return "";
      const goods = c.qs.filter(q => q.cat === k), got = goods.filter(q => CL.asked.includes(q.id)).length;
      return `<div class="bank-group"><div class="bank-h"><span>${esc(label)}</span><span class="cov ${got === goods.length ? "full" : ""}">${got}/${goods.length}</span></div>
        ${items.map(it => { if (it.g) { const q = c.qs.find(x => x.id === it.g); return `<button class="qbtn ${CL.asked.includes(q.id) ? "asked" : ""}" data-act="askQ" data-id="${q.id}" lang="en">${esc(q.q)}</button>`; } const b = c.bad[it.b]; return `<button class="qbtn ${CL.bad.includes(it.b) ? "asked" : ""}" data-act="askB" data-i="${it.b}" lang="en">${esc(b.q)}</button>`; }).join("")}</div>`;
    }).join("");
    return `<div class="track-med">${focusBar(null, `Ca ${c.id}: ${c.vi}`)}<div class="page" style="max-width:1180px;margin:0 auto">
      <div class="clinic"><div class="stack">
        <div class="panel tight role-card"><span class="avatar">${p.av}</span><div><b>${esc(p.name)}</b>, ${p.age} tuổi, <span lang="en">${esc(p.job)}</span><br><span class="muted small" lang="en">${esc(c.setting)}</span></div></div>
        <details class="panel tight"><summary style="cursor:pointer;font-weight:600">Nhiệm vụ của bạn</summary><p style="margin-top:8px">${esc(c.task)}</p></details>
        <div class="panel tight stack"><div class="chat" id="chat" aria-live="polite">${chat}</div>
          <div class="ask-box"><input class="field" id="askIn" placeholder="Gõ câu hỏi bằng tiếng Anh…" value="${esc(CL.input)}" data-enter="askFree" lang="en" autocomplete="off" autocapitalize="sentences" spellcheck="false" aria-label="Câu hỏi của bạn"><button class="btn primary" data-act="askFree">Hỏi</button>${SR ? `<button class="icon-btn" data-act="askVoice" aria-label="Nói câu hỏi">${ic("mic")}</button>` : ""}</div>
          <div class="row between"><span class="muted small">Đã hỏi ${ks.got.length}/${ks.key.length} ý chính</span><button class="btn ink" data-act="caseFinish">Kết thúc hỏi bệnh</button></div></div>
      </div>
      <div class="panel tight"><div class="row between" style="margin-bottom:6px"><h3>Ngân hàng câu hỏi</h3><span class="muted small">xám là đã hỏi</span></div><div class="bank">${bank}</div></div></div></div></div>`;
  }
  const head = `<div class="track-med">${focusBar(null, `Ca ${c.id}: ${c.vi}`)}<div class="focus-page"><article class="step-card">`;
  const tail = `</article></div></div>`;
  if (CL.phase === "write") {
    const s = CL.sum;
    return head + `<span class="step-kind">Bước 2 trên 4: tóm tắt ca</span><h2>Trình bày ca với bác sĩ hướng dẫn</h2><p class="muted">Viết 3 đến 5 câu: tuổi, nghề, triệu chứng chính và thời gian, đặc điểm nổi bật, dấu hiệu cảnh báo có hay không, và mối lo của bệnh nhân.</p>
      <p class="tip" lang="en">${esc(c.summary.scaffold)}</p>
      <textarea class="field" id="sumIn" lang="en" style="min-height:180px" ${s ? "disabled" : "data-autofocus"} spellcheck="true">${esc(CL.summary)}</textarea>
      ${s ? `<div class="checklist">${c.summary.labels.map((lab, i) => `<span class="chip ${s.cov[i] ? "good" : "bad"}">${s.cov[i] ? "✓" : "✗"} ${esc(lab)}</span>`).join("")}</div>
        <div class="soft"><div class="row between"><b>Bản mẫu</b>${hear(c.summary.model)}</div><p class="example" lang="en" style="font-size:18px">${esc(c.summary.model)}</p></div>
        <div class="row"><button class="btn primary" data-act="casePhase" data-p="dx">Tiếp: chẩn đoán</button></div>`
        : `<div class="row"><button class="btn primary" data-act="sumSubmit">Nộp bản tóm tắt</button><button class="btn quiet" data-act="casePhase" data-p="talk">Quay lại hỏi thêm</button></div>`}` + tail;
  }
  if (CL.phase === "dx") {
    const allDone = CL.dx.done && CL.ex.done;
    return head + `<span class="step-kind">Bước 3 trên 4: lập luận và giải thích</span><p class="q" lang="en">${esc(c.dx.q)}</p>${choicesHtml(c.dx, CL.dx, "dx")}
      <div class="divider"></div><p class="q" lang="en">${esc(c.explain.q)}</p>${choicesHtml(c.explain, CL.ex, "ex")}
      <div class="row"><button class="btn primary" data-act="caseReport" ${allDone ? "" : "disabled"}>Xem báo cáo</button></div>` + tail;
  }
  // report
  const R_ = CL.rep;
  const row = (name, val, note) => `<div class="skill"><span>${name}</span><div class="bar"><i style="width:${val * 100}%"></i></div><span class="n">${Math.round(val * 100)}%</span></div>${note ? `<p class="muted small" style="margin:-4px 0 8px">${note}</p>` : ""}`;
  const missed = ks.key.filter(q => !CL.asked.includes(q.id));
  const catName = k => (c.cats.find(x => x[0] === k) || [k, k])[1];
  return head + `<span class="step-kind">Bước 4 trên 4: báo cáo</span><h1>Ca ${esc(c.vi.toLowerCase())}</h1>
    <div class="row" style="gap:18px"><div class="result-num">${Math.round(R_.total * 100)}%</div><p class="muted">điểm tổng hợp<br>${S.cases[c.id].n > 1 ? "tốt nhất " + Math.round(S.cases[c.id].best * 100) + "%" : "lần đầu khám ca này"}</p></div>
    <div>${row("Thu thập thông tin", R_.gather, `${ks.got.length}/${ks.key.length} ý chính`)}${row("Quan điểm bệnh nhân", R_.ice, "Ideas, concerns, expectations")}${row("Ngôn ngữ phù hợp", R_.lang, CL.bad.length ? `${CL.bad.length} câu hỏi chưa phù hợp` : "Không dùng câu hỏi thiếu phù hợp")}${row("Tóm tắt ca", R_.sum)}${row("Lập luận và giải thích", R_.reason)}</div>
    ${missed.length ? `<h3>Ý chính bạn chưa hỏi</h3><div class="list">${missed.map(q => `<div class="item"><span class="grow"><span class="s">${esc(catName(q.cat))}</span><br><span class="en" lang="en" style="font-size:17px">${esc(q.q)}</span></span>${hear(q.q)}</div>`).join("")}</div>` : `<div class="feedback ok">Bạn đã hỏi đủ mọi ý chính.</div>`}
    ${CL.bad.length ? `<h3>Cách hỏi nên thay</h3><div>${CL.bad.map(i => { const b = c.bad[i]; return `<div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(b.q)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(b.better)}</span><span class="why">${esc(b.why)}</span></div>`; }).join("")}</div>` : ""}
    <p class="muted small">Điểm tổng hợp = một nửa từ thu thập thông tin, còn lại từ tóm tắt, quan điểm bệnh nhân, chẩn đoán và giải thích; mỗi câu hỏi chưa phù hợp trừ 5 điểm. Công cụ tự luyện, không phải điểm OET.</p>
    <div class="row"><button class="btn primary" data-act="caseRestart">Khám lại ca này</button><a class="btn" href="#/clinic">Các ca khác</a></div>` + tail;
}

/* ---------------- Sounds ---------------- */
let SD = null;
const DRILL_N = 10;
function startDrill(set) { if (!PAIRS[set]) return; SD = { set, round: 0, ok: 0, cur: null, ans: null, said: {} }; }
function newDrillItem() { const P = PAIRS[SD.set]; SD.cur = { p: Math.floor(Math.random() * P.pairs.length), w: Math.round(Math.random()) }; SD.ans = null; }
function viewSounds() {
  if (!ROUTE.arg || !PAIRS[ROUTE.arg]) {
    return `<section class="page-head"><h1>Phát âm</h1><p class="lede">Các cặp âm người Việt hay nhầm. Nghe và chọn đúng từ trước, vì tai phân biệt được thì miệng mới sửa được. Sau đó tự nói và để máy nghe thử.</p></section>
      <div class="panel"><div class="list">${Object.entries(PAIRS).map(([id, P]) => { const a = S.pron[id]; return `<a class="item link" href="#/sounds/${id}"><span class="grow"><span class="t">${esc(P.title)}</span> <span class="muted en" lang="en">${esc(P.sample)}</span><br><span class="s">${esc(P.tip.split(".")[0])}.</span></span>${a && a.n ? `<span class="chip ${a.ok / a.n >= 0.8 ? "good" : "acc"}">${Math.round(a.ok / a.n * 100)}% trên ${a.n} lượt</span>` : `<span class="chip">chưa luyện</span>`}</a>`; }).join("")}</div></div>
      <p class="muted small" style="margin-top:14px">Giọng đọc là giọng tổng hợp của thiết bị, chọn giọng Anh-Mỹ hoặc Anh-Anh trong Cài đặt. Nhận dạng giọng nói chỉ cho biết máy hiểu bạn nói từ nào, không chấm từng âm vị như các ứng dụng chuyên dụng.</p>`;
  }
  const P = PAIRS[SD.set];
  let drill;
  if (SD.round >= DRILL_N) drill = `<div class="row" style="gap:18px"><div class="result-num">${SD.ok}/${DRILL_N}</div><p class="muted">lượt nghe đúng</p></div><div class="row"><button class="btn primary" data-act="drillAgain">Luyện thêm 10 lượt</button><a class="btn" href="#/sounds">Cặp âm khác</a></div>`;
  else if (!SD.cur) drill = `<p>Máy đọc một trong hai từ. Bạn chọn từ mình nghe thấy. ${DRILL_N} lượt.</p><div><button class="btn primary" data-act="drillStart">Bắt đầu</button></div>`;
  else {
    const pair = P.pairs[SD.cur.p];
    drill = `<div class="row between"><span class="step-kind">Lượt ${SD.round + 1}/${DRILL_N}</span><span class="muted small">đúng ${SD.ok}</span></div><div><button class="btn primary" data-act="drillPlay">Nghe lại</button></div>
      <div class="grid2">${pair.map((w, i) => `<button class="choice${SD.ans != null ? (i === SD.cur.w ? " right" : SD.ans === i ? " wrong" : "") : ""}" style="font-size:30px;text-align:center" data-act="drillPick" data-i="${i}" ${SD.ans != null ? "disabled" : ""} lang="en">${esc(w)}</button>`).join("")}</div>
      ${SD.ans != null ? `<div class="row"><span class="feedback ${SD.ans === SD.cur.w ? "ok" : "no"}" style="flex:1"><b>${SD.ans === SD.cur.w ? "Đúng." : "Chưa đúng."}</b> Từ vừa đọc là <b lang="en">${esc(pair[SD.cur.w])}</b>.</span><button class="btn primary" data-act="drillNext">Lượt tiếp</button></div>` : ""}`;
  }
  const words = P.pairs.map((pair, pi) => `<div class="cls-row">${pair.map(w => { const r = SD.said[w]; return `<span class="row" style="flex:1 1 200px"><span class="en" lang="en" style="font-size:20px;min-width:70px">${esc(w)}</span>${hear(w)}${SR ? `<button class="icon-btn" data-act="sayWord" data-w="${esc(w)}" data-other="${esc(pair.find(x => x !== w))}" aria-label="Nói từ ${esc(w)}">${ic("mic")}</button>` : ""}${r ? `<span class="chip ${r.ok ? "good" : "bad"}" lang="en">${r.ok ? "✓" : "máy nghe: " + esc(r.heard || "không rõ")}</span>` : ""}</span>`; }).join("")}</div>`).join("");
  return `<section class="page-head"><a class="muted small" href="#/sounds">Phát âm</a><h1>${esc(P.title)}</h1><p class="tip">${esc(P.tip)}</p></section>
    <div class="panel stack">${drill}</div>
    <div class="panel stack" style="margin-top:14px"><h3>Tự nói từng từ</h3><p class="muted small">${SR ? "Bấm micro rồi đọc một từ. Nếu máy nghe ra đúng từ, người bản xứ cũng dễ hiểu bạn." : "Trình duyệt này chưa nhận dạng giọng nói. Hãy nghe mẫu và đọc theo."}</p><div class="classify">${words}</div></div>`;
}

/* ---------------- Words ---------------- */
let B = null, WQ = "";
const BUILD_N = 8;
function startBuild() { B = { order: shuffle(TERMS).slice(0, BUILD_N), round: 0, score: 0 }; newBuild(); }
function newBuild() { const t = B.order[B.round]; if (!t) return; const extra = shuffle(TERM_PARTS.filter(p => !t.p.includes(p))).slice(0, 3); B.pool = shuffle([...t.p, ...extra]); B.ans = []; B.done = false; B.ok = false; B.tries = 0; }
function wordListHtml() {
  const q = norm(WQ); const ws = learnedWords().filter(({ w }) => !q || norm(w.w).includes(q) || norm(w.vi).includes(q) || w.vi.toLowerCase().includes(WQ.toLowerCase()));
  if (!learnedWords().length) return `<div class="empty"><p>Sổ từ trống. Học xong một bài, các từ của bài sẽ xuất hiện ở đây kèm trạng thái ôn tập.</p><a class="btn primary" href="#/path">Mở lộ trình</a></div>`;
  if (!ws.length) return `<p class="muted">Không có từ nào khớp “${esc(WQ)}”.</p>`;
  const status = (l, i) => { const c = S.cards[`${l.id}:${i}:p`]; if (!c || c.state === "new") return ["mới", ""]; if (c.state !== "review") return ["đang học", "acc"]; return c.s >= 21 ? ["đã vững", "good"] : ["đang củng cố", "acc"]; };
  return `<div class="list">${ws.map(({ w, l, i }) => { const [s, cls] = status(l, i); return `<div class="item track-${l.track}"><span class="grow"><span class="t en" lang="en" style="font-size:19px">${esc(w.w)}</span> <span class="muted" style="font-family:var(--en)">${esc(ipaOf(w))}</span><br><span class="s">${esc(w.vi)}, bài ${l.id}</span></span><span class="chip ${cls}">${s}</span>${hear(w.w)}</div>`; }).join("")}</div>`;
}
function viewWords() {
  const tab = ROUTE.arg || "list";
  const tabs = `<div class="tabs" role="tablist">${[["list", "Sổ từ"], ["anatomy", "Hình vị y khoa"], ["build", "Ghép thuật ngữ"]].map(([id, l]) => `<a role="tab" href="#/words${id === "list" ? "" : "/" + id}" aria-selected="${tab === id}" style="text-decoration:none"><button tabindex="-1" aria-selected="${tab === id}">${l}</button></a>`).join("")}</div>`;
  let body = "";
  if (tab === "list") body = `<input class="search" id="wsearch" type="search" placeholder="Tìm từ hoặc nghĩa…" value="${esc(WQ)}" aria-label="Tìm từ"><div id="wlist" style="margin-top:14px">${wordListHtml()}</div>`;
  else if (tab === "anatomy") {
    const grp = (type, title) => `<section class="panel tight track-med"><h3>${title}</h3>${MORPHEMES.filter(m => m[0] === type).map(([, f, en, vi, ex]) => `<div class="morph"><b lang="en">${esc(f)}</b><span><span lang="en">${esc(en)}</span><br><span class="muted small">${esc(vi)}</span></span><span class="ex row" lang="en">${esc(ex)} ${hear(ex)}</span></div>`).join("")}</section>`;
    body = `<p class="muted" style="max-width:62ch">Phần lớn thuật ngữ y khoa ghép từ gốc Hy Lạp và La-tinh. Nhớ khoảng 30 mảnh dưới đây là đoán được nghĩa của hàng trăm từ.</p><div class="stack" style="margin-top:14px">${grp("prefix", "Tiền tố")}${grp("root", "Gốc từ")}${grp("suffix", "Hậu tố")}</div>`;
  } else {
    if (!B) startBuild();
    if (B.round >= BUILD_N) body = `<div class="panel stack track-med"><div class="row" style="gap:18px"><div class="result-num">${B.score}/${BUILD_N}</div><p class="muted">thuật ngữ ghép đúng ngay lần đầu</p></div><div><button class="btn primary" data-act="buildAgain">Luyện lượt mới</button></div></div>`;
    else {
      const t = B.order[B.round];
      body = `<div class="panel stack track-med"><div class="row between"><span class="step-kind">Thuật ngữ ${B.round + 1}/${BUILD_N}</span><span class="muted small">đúng ${B.score}</span></div>
        <p class="q" lang="en" style="font-size:22px">${esc(t.m)}</p><p class="muted">${esc(t.vi)}</p>
        <div class="tiles answer">${B.ans.map((k, i) => `<button class="tile" data-act="bOut" data-i="${i}" ${B.done ? "disabled" : ""} lang="en">${esc(B.pool[k])}</button>`).join("") || '<span class="muted small" style="padding:8px">Chạm các mảnh theo thứ tự tiền tố, gốc, hậu tố.</span>'}</div>
        <div class="tiles">${B.pool.map((p, k) => `<button class="tile ${B.ans.includes(k) ? "used" : ""}" data-act="bIn" data-k="${k}" ${B.done || B.ans.includes(k) ? "disabled" : ""} lang="en">${esc(p)}</button>`).join("")}</div>
        ${B.done ? `<div class="feedback ${B.ok ? "ok" : "no"}" role="status"><b>${B.ok ? "Đúng." : "Đáp án:"}</b> <span class="en" lang="en" style="font-size:19px">${esc(t.t)}</span> = ${t.p.map(esc).join(" + ")}</div><div class="row">${hear(t.t)}<button class="btn primary" data-act="bNext">Thuật ngữ tiếp</button></div>`
          : `<div class="row"><button class="btn" data-act="bReset">Xếp lại</button><button class="btn primary" data-act="bCheck" ${B.ans.length ? "" : "disabled"}>Kiểm tra</button></div>${B.tries ? `<div class="feedback no">Chưa đúng. Thử lại một lần.</div>` : ""}`}</div>`;
    }
  }
  return `<section class="page-head"><h1>Sổ từ và thuật ngữ</h1></section>${tabs}<div style="margin-top:18px">${body}</div>`;
}

/* ---------------- Progress ---------------- */
function viewProgress() {
  const st = cardStats(), days = Object.values(S.time.days).filter(v => v >= 60).length;
  const skills = Object.entries(SKILLS).map(([k, name]) => { const s = skillScore(k); return `<div class="skill"><span>${name}</span><div class="bar"><i style="width:${s.p == null ? 0 : s.p * 100}%"></i></div><span class="n">${s.p == null ? "chưa có" : Math.round(s.p * 100) + "%, " + s.n + " lần"}</span></div>`; }).join("");
  const last14 = Array.from({ length: 14 }, (_, i) => { const t = Date.now() - (13 - i) * DAY; return [new Date(t), Math.round((S.time.days[dayKey(t)] || 0) / 60)]; });
  const max = Math.max(S.settings.goal, ...last14.map(x => x[1]));
  const start = new Date(); start.setDate(start.getDate() - 83 - start.getDay());
  const heat = Array.from({ length: 84 + new Date().getDay() + 1 }, (_, i) => { const t = start.getTime() + i * DAY; const m = (S.time.days[dayKey(t)] || 0) / 60; const lv = m <= 0 ? 0 : m < 5 ? 1 : m < 15 ? 2 : m < 30 ? 3 : 4; return `<i class="l${lv}" title="${dayKey(t)}: ${Math.round(m)} phút"></i>`; }).join("");
  const trackRow = t => { const ls = LESSONS.filter(l => l.track === t), d = ls.filter(l => S.lessons[l.id]?.done); return `<div class="skill track-${t}"><span>${t === "med" ? "Y khoa" : "Thông dụng"}</span><div class="bar"><i style="width:${d.length / ls.length * 100}%;background:var(--accent)"></i></div><span class="n">${d.length}/${ls.length} bài</span></div>`; };
  return `<section class="page-head"><h1>Tiến bộ</h1><p class="lede">Mọi con số ở đây đến từ việc bạn thực sự đã làm. Không có điểm khởi tạo sẵn.</p></section>
    <div class="panel"><div class="grid3" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div class="stat"><b>${fmtDur(S.time.total).replace(" phút", "p").replace(" giờ ", "g ")}</b><span>tổng thời gian học</span></div><div class="stat"><b>${days}</b><span>ngày có học</span></div><div class="stat"><b>${streak()}</b><span>ngày liên tiếp</span></div><div class="stat"><b>${st.mature}</b><span>thẻ đã vững</span></div></div></div>
    <div class="grid2" style="margin-top:14px">
      <section class="panel stack"><h3>Kỹ năng</h3><div>${skills}</div><p class="muted small">Tỉ lệ đúng ngay lần đầu trong 40 lần gần nhất của mỗi kỹ năng, được hiệu chỉnh khi còn ít dữ liệu. Số lần cho biết điểm đáng tin đến đâu.</p></section>
      <section class="panel stack"><h3>14 ngày gần đây</h3><div class="bars">${last14.map(([d, m]) => `<div title="${m} phút"><span>${m || ""}</span><i style="height:${m / max * 88}%;${m >= S.settings.goal ? "background:var(--good)" : ""}"></i><span>${d.getDate()}</span></div>`).join("")}</div><p class="muted small">Cột xanh là ngày đạt mục tiêu ${S.settings.goal} phút.</p></section>
    </div>
    <section class="panel stack" style="margin-top:14px"><h3>12 tuần</h3><div class="heat" aria-label="Lịch học 12 tuần">${heat}</div></section>
    <div class="grid2" style="margin-top:14px">
      <section class="panel stack"><h3>Bài học và thẻ</h3>${trackRow("gen")}${trackRow("med")}<p class="muted small">${st.total} thẻ: ${st.new} mới, ${st.learning} đang học, ${st.young} đang củng cố, ${st.mature} đã vững.</p></section>
      <section class="panel stack track-med"><h3>Phòng khám và phát âm</h3>${CASES.map(c => `<div class="skill"><span>${esc(c.vi)}</span><div class="bar"><i style="width:${(S.cases[c.id]?.best || 0) * 100}%;background:var(--accent)"></i></div><span class="n">${S.cases[c.id] ? Math.round(S.cases[c.id].best * 100) + "%" : "chưa khám"}</span></div>`).join("")}
        ${Object.entries(S.pron).filter(([, v]) => v.n).map(([id, v]) => `<div class="skill"><span>${esc(PAIRS[id].title)}</span><div class="bar"><i style="width:${v.ok / v.n * 100}%"></i></div><span class="n">${Math.round(v.ok / v.n * 100)}%, ${v.n}</span></div>`).join("") || `<p class="muted small">Chưa luyện cặp âm nào.</p>`}</section>
    </div>`;
}

/* ---------------- Settings / About / More ---------------- */
function viewSettings() {
  const vs = SPEECH.voices, st = S.settings;
  const opts = sel => `<option value="auto">Tự chọn giọng tốt nhất</option>` + vs.map(v => `<option value="${esc(v.name)}" ${sel === v.name ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
  return `<section class="page-head"><h1>Cài đặt</h1></section>
    <section class="panel"><h3>Học tập</h3>
      <div class="setting"><div><b>Tên gọi</b><div class="s">Dùng trong lời chào trang Hôm nay.</div></div><input class="field" style="font:inherit;width:200px;padding:10px 12px" id="setName" value="${esc(st.name)}" maxlength="40"></div>
      <div class="setting"><div><b>Giọng chuẩn</b><div class="s">Đổi cả phiên âm IPA và giọng đọc cho khớp nhau.</div></div><select id="setAccent"><option value="us" ${st.accent === "us" ? "selected" : ""}>Anh-Mỹ</option><option value="uk" ${st.accent === "uk" ? "selected" : ""}>Anh-Anh</option></select></div>
      <div class="setting"><div><b>Mục tiêu mỗi ngày</b><div class="s">Một ngày vào chuỗi liên tiếp khi học từ 5 phút.</div></div><select id="setGoal">${[5, 10, 15, 20, 30, 45, 60].map(g => `<option value="${g}" ${st.goal === g ? "selected" : ""}>${g} phút</option>`).join("")}</select></div>
      <div class="setting"><div><b>Giao diện</b></div><select id="setTheme"><option value="system" ${st.theme === "system" ? "selected" : ""}>Theo thiết bị</option><option value="light" ${st.theme === "light" ? "selected" : ""}>Sáng</option><option value="dark" ${st.theme === "dark" ? "selected" : ""}>Tối</option></select></div></section>
    <section class="panel" style="margin-top:14px"><h3>Giọng đọc</h3><p class="muted small">Chất lượng phụ thuộc giọng cài trên thiết bị. Trên iPad, vào Cài đặt, Trợ năng, Nội dung được đọc, Giọng nói, tải giọng tiếng Anh loại Nâng cao để nghe tự nhiên hơn.</p>
      ${TTS_OK ? `<div class="setting"><div><b>Giọng chính</b><div class="s">Bác sĩ, người dẫn chuyện.</div></div><select id="setVoice">${opts(st.voice)}</select></div>
      <div class="setting"><div><b>Giọng thứ hai</b><div class="s">Bệnh nhân, người đối thoại.</div></div><select id="setVoice2">${opts(st.voice2)}</select></div>
      <div class="setting"><div><b>Tốc độ</b> <span class="muted" id="rateLbl">${st.rate.toFixed(2)}×</span></div><input type="range" id="setRate" min="0.6" max="1.2" step="0.05" value="${st.rate}"></div>
      <div class="row"><button class="btn" data-act="testVoice">Thử giọng</button></div>` : `<p class="feedback no">Trình duyệt này không hỗ trợ đọc văn bản.</p>`}</section>
    <section class="panel" style="margin-top:14px"><h3>Dữ liệu</h3><p class="muted small">Dữ liệu chỉ nằm trong trình duyệt trên thiết bị này. Safari có thể xóa dữ liệu của trang web ít dùng, nên hãy xuất bản sao lưu mỗi tuần.</p>
      <div class="row" style="margin-top:10px"><button class="btn" data-act="exportFile">Tải file sao lưu</button><button class="btn" data-act="exportCopy">Sao chép dữ liệu</button><button class="btn" data-act="importClick">Nhập từ file</button><input type="file" id="importFile" accept="application/json,.json" hidden></div>
      <details style="margin-top:10px"><summary class="btn quiet small" style="display:inline-flex">Dán dữ liệu đã sao chép</summary><textarea class="field" id="importText" style="margin-top:8px;font:13px/1.4 ui-monospace,monospace" placeholder='{"v":3,...}'></textarea><div class="row" style="margin-top:8px"><button class="btn" data-act="importPaste">Nhập dữ liệu đã dán</button></div></details>
      ${S.migrated ? `<p class="muted small" style="margin-top:10px">Đã mang ${fmtDur(S.migrated.seconds)} học từ phiên bản cũ (${esc(S.migrated.from)}).</p>` : ""}
      <div class="divider" style="margin:14px 0"></div><button class="btn danger" data-act="resetAll">Xóa toàn bộ dữ liệu học</button></section>
    <p class="muted small" style="margin-top:14px">Phiên bản ${APP.version} (${APP.build}). Xây dựng bởi ${APP.author}. ${APP.credit}. <a href="#/about">Góc tác giả</a></p>`;
}
function viewAbout() {
  return `<section class="page-head"><h1>Góc tác giả</h1><p class="lede">Một dự án cá nhân được xây dựng bởi <b>${APP.author}</b> nhằm phục vụ quá trình tự học ngoại ngữ lâu dài.</p></section>
    <section class="panel stack"><h2>Học ngoại ngữ theo cách của chính mình.</h2>
      <p>Đây không được xây dựng với mục tiêu trở thành một ứng dụng học tiếng Anh đại trà. Dự án bắt đầu từ một nhu cầu cá nhân: thay vì sử dụng nhiều công cụ rời rạc cho từ vựng, ngữ pháp, nghe, phát âm, giao tiếp và đọc hiểu, tôi muốn xây dựng một hệ thống học tập thống nhất và dần thích nghi với chính người học.</p>
      <p>Hệ thống hướng tới việc ghi nhận những gì đã biết, phát hiện những phần còn thiếu, lựa chọn điều đáng học tiếp theo và biến nó thành những phiên học ngắn, có bằng chứng và có thể sử dụng trong thực tế.</p></section>
    <div class="grid2" style="margin-top:14px">
      <section class="panel stack track-gen accent"><h3>Mục đích</h3><p>Phục vụ tự học ngoại ngữ lâu dài, với General English là nền tảng và Medical / Academic English phát triển dần theo năng lực.</p></section>
      <section class="panel stack track-med accent"><h3>Triết lý</h3><p><b>Không phải học càng nhiều càng tốt, mà là học đúng thứ mình cần tiếp theo.</b></p><p class="muted small">Hệ thống ưu tiên learning gain trên mỗi phút thay vì số bài đã hoàn thành.</p></section>
      <section class="panel stack"><h3>Đây là một dự án đang phát triển</h3><p>Từ chương trình học, giao diện, thuật toán đề xuất, hệ thống ôn tập, phát âm đến nội dung chuyên ngành, mọi thành phần đều có thể được thử nghiệm và cải tiến.</p></section>
      <section class="panel stack"><h3>Về tác giả</h3><p><b>${APP.author}</b></p><p class="muted">Dự án được xây dựng như một không gian học tập cá nhân và một quá trình thử nghiệm về cách công nghệ có thể hỗ trợ việc tự học lâu dài.</p></section>
    </div>
    <section class="panel stack" style="margin-top:14px"><h3>Phương pháp trong phiên bản ${APP.version}</h3>
      <p><b>Hai mạch song song.</b> Mỗi mẫu ngữ pháp ở mạch thông dụng được dùng lại ở mạch y khoa cùng cấp độ, để một lần học phục vụ hai mục đích.</p>
      <p><b>Ôn tập ngắt quãng FSRS.</b> Thuật toán mã nguồn mở hiện là mặc định cho hồ sơ mới trong Anki. Nó cần ít lượt ôn hơn thuật toán SM-2 cũ để đạt cùng mức ghi nhớ.</p>
      <p><b>Hỏi bệnh theo SOCRATES và ICE.</b> Phòng khám ảo mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của OET Speaking, gồm cả việc tìm hiểu quan điểm và mối lo của bệnh nhân.</p>
      <p><b>Dựa trên lỗi của người Việt.</b> Cặp âm tối thiểu, âm cuối, đuôi -s và -ed, mạo từ và những lỗi dịch từng chữ như “I am headache” được đưa vào ngay từ bài đầu.</p>
      <p><b>Bằng chứng thật.</b> Điểm kỹ năng chỉ tính từ câu bạn làm, nói rõ đang dựa trên bao nhiêu lần. Thời gian chỉ tính khi bạn thực sự đang học.</p></section>
    <section class="panel stack" style="margin-top:14px"><p style="font-family:var(--en);font-size:22px">“Built for learning. Improved through learning.”</p><p class="muted small">Phiên bản ${APP.version} (${APP.build}). Xây dựng bởi ${APP.author}. ${APP.credit}</p></section>`;
}
function viewMore() {
  return `<section class="page-head"><h1>Thêm</h1></section><div class="panel"><div class="list">${[["sounds", "Phát âm", "Cặp âm người Việt hay nhầm"], ["words", "Sổ từ và thuật ngữ", "Từ đã học, hình vị, ghép thuật ngữ"], ["progress", "Tiến bộ", "Kỹ năng, thời gian, lịch học"], ["settings", "Cài đặt", "Giọng đọc, mục tiêu, sao lưu dữ liệu"], ["about", "Góc tác giả", "Mục đích, triết lý, phương pháp"]].map(([id, t, s]) => `<a class="item link" href="#/${id}"><span class="grow"><span class="t">${t}</span><br><span class="s">${s}</span></span></a>`).join("")}</div></div>`;
}

/* ---------------- Actions ---------------- */
function curQ(qi) {
  const step = L.steps[L.i], st = stState();
  if (qi === -1) return step.t === "cloze" ? [{ opts: step.opts, a: step.a, why: step.why }, st, step.k] : [step, st, step.k];
  const skill = step.t === "listen" && st.peek ? "reading" : step.k || "vocab";
  return [step.qs[qi], st.q[qi], skill];
}
const ACT = {
  say: el => speakNow(el.dataset.text, { who: +(el.dataset.who || 0), slow: !!el.dataset.slow }),
  exitFocus() {
    stopSpeech();
    if (ROUTE.name === "lesson") location.hash = "#/path";
    else if (ROUTE.name === "review") location.hash = "#/review";
    else if (ROUTE.name === "clinic") { if (CL && CL.phase === "report") CL = null; location.hash = "#/clinic"; }
    else location.hash = "#/today";
  },
  stepNext() { stopSpeech(); if (L.i < L.steps.length - 1) { L.i++; render(true); } },
  stepBack() { stopSpeech(); if (L.i > 0) { L.i--; render(true); } },
  wordNav(el) { const st = stState(); st.wi = clamp((st.wi || 0) + +el.dataset.d, 0, L.l.words.length - 1); render(); speakNow(L.l.words[st.wi].w); },
  pick(el) {
    const qi = el.dataset.q;
    if (ROUTE.name === "clinic") { const c = CL.c; const [q, qs] = qi === "dx" ? [c.dx, CL.dx] : [c.explain, CL.ex]; pickOpt2(q, qs, +el.dataset.o); render(); return; }
    const [q, qs, skill] = curQ(+qi); pickOpt(q, qs, +el.dataset.o, skill); render();
  },
  playDialog(el) {
    const step = L.steps[L.i], keys = Object.keys(step.who);
    sayLines(step.lines.map(([spk, en]) => ({ text: en, who: keys.indexOf(spk) % 2, slow: !!el.dataset.slow })), i => { document.querySelectorAll(".line").forEach(e => e.classList.remove("speaking")); if (i >= 0) document.getElementById("ln-" + i)?.classList.add("speaking"); });
  },
  toggleScript() { const st = stState(), step = L.steps[L.i]; st.show = !st.show; if (st.show && !step.qs.every((_, i) => st.q?.[i]?.done)) st.peek = true; render(); },
  toggleVi() { const st = stState(); st.vi = !st.vi; render(); },
  checkCloze() {
    const step = L.steps[L.i], st = stState(); if (st.done) return; const v = norm($("#ans")?.value); st.val = $("#ans")?.value || ""; if (!v) return;
    const ans = step.a.map(norm);
    if (ans.includes(v)) { st.done = true; st.ok = !st.tries; }
    else if (ans.some(a => a.length > 3 && lev(a, v) <= 1)) { st.done = true; st.ok = !st.tries; st.typo = true; }
    else { st.tries = (st.tries || 0) + 1; if (st.tries >= 2) { st.done = true; st.ok = false; } }
    if (st.done) result(step.k, st.ok); render();
  },
  tileIn(el) { const st = stState(); st.ans.push(+el.dataset.k); render(); },
  tileOut(el) { const st = stState(); st.ans.splice(+el.dataset.i, 1); render(); },
  tileReset() { const st = stState(); st.ans = []; render(); },
  checkOrder() {
    const step = L.steps[L.i], st = stState(), j = step.join ?? " ";
    const ok = norm(st.ans.map(k => st.pool[k]).join(j)) === norm(step.tiles.join(j)) && st.ans.length === step.tiles.length;
    if (ok) { st.done = true; st.ok = !st.tries; } else { st.tries = (st.tries || 0) + 1; if (st.tries >= 2) { st.done = true; st.ok = false; } else st.ans = []; }
    if (st.done) { result(step.k, st.ok); if (j === " ") speakNow(step.tiles.join(" ")); }
    render();
  },
  sayStep(el) { speakNow(L.steps[L.i].s, { slow: !!el.dataset.slow }); },
  checkDict() {
    const step = L.steps[L.i], st = stState(); if (st.done) return; st.val = $("#ans")?.value || ""; if (!norm(st.val)) return;
    const d = wordDiff(step.s, st.val); st.diff = d.html;
    if (d.ok) { st.done = true; st.ok = !st.tries; } else { st.tries = (st.tries || 0) + 1; if (st.tries >= 2) { st.done = true; st.ok = false; } }
    if (st.done) result(step.k, st.ok); render();
  },
  clsPick(el) { const st = stState(); st.pick[+el.dataset.i] = +el.dataset.j; render(); },
  checkCls() {
    const step = L.steps[L.i], st = stState(); let ok = 0;
    step.items.forEach(([, a], i) => { const r = st.pick[i] === a; if (r) ok++; result(step.k, r); });
    st.done = true; st.ok = ok / step.items.length; render();
  },
  pairPlay() { const step = L.steps[L.i], st = stState(); const P = PAIRS[step.set]; speakNow(P.pairs[st.cur.p][st.cur.w]); },
  pairPick(el) {
    const step = L.steps[L.i], st = stState(); st.ans = +el.dataset.i; const ok = st.ans === st.cur.w; if (ok) st.ok++;
    result("pron", ok); const pr = S.pron[step.set] || (S.pron[step.set] = { n: 0, ok: 0 }); pr.n++; if (ok) pr.ok++; render();
  },
  pairNext() { const step = L.steps[L.i], st = stState(); st.round++; st.ans = null; st.cur = null; render(); if (st.round < PAIR_ROUNDS) { const P = PAIRS[step.set]; speakNow(P.pairs[st.cur.p][st.cur.w]); } },
  async asrSpeak() {
    const st = stState(), step = L.steps[L.i]; if (ASR.on) { try { ASR.cur.stop(); } catch { } return; }
    render(); setTimeout(render, 50);
    try { const alts = await recognize(); if (!alts.length) { asrError("no-speech"); render(); return; } st.heard = alts[0]; runSpeakCheck(step, st, alts.join(" "), "asr"); }
    catch (e) { asrError(e); }
    render();
  },
  checkSpeak() { const st = stState(), step = L.steps[L.i]; st.typed = $("#spk")?.value || ""; const txt = st.typed.trim() || st.heard || ""; if (!txt) { toast("Hãy nói hoặc gõ câu trả lời trước."); return; } runSpeakCheck(step, st, txt, st.typed.trim() ? "typed" : "asr"); render(); },
  selfSpeak() { const st = stState(); st.self = true; if (!st.logged) { st.logged = true; result("speaking", true); } render(); },
  recStart() { const owner = ROUTE.name === "lesson" ? L.id + ":" + L.i : "x"; recReset(owner); recStart(owner, render); },
  recStop() { recStop(); },
  recPlay() { recPlay(); },
  // review
  revFlip() { R.phase = "back"; render(); speakNow(cardInfo(R.cur).w.ex || cardInfo(R.cur).w.w); },
  revCheck() {
    if (R.phase !== "front") return; const w = cardInfo(R.cur).w; R.typed = $("#ans")?.value || ""; const v = norm(R.typed), t = norm(w.w); if (!v) return;
    R.check = { ok: v === t || (t.length > 4 && lev(v, t) <= 1), typo: v !== t && t.length > 4 && lev(v, t) <= 1 };
    R.phase = "back"; render(); speakNow(w.w);
  },
  grade(el) {
    const g = +el.dataset.g, id = R.cur, info = cardInfo(id); const c = schedule(S.cards[id], g); S.cards[id] = c;
    evidence("vocab", info.dir === "p" ? !!(R.check && R.check.ok) && g > 1 : g >= 3, "review");
    R.n++; if (g === 1) R.again++; if (c.due - Date.now() < 20 * MIN) R.queue.push(id);
    touch(); nextCard(); render();
    if (R.cur) { const ni = cardInfo(R.cur); if (ni.dir === "r") speakNow(ni.w.w); }
    else save();
  },
  // clinic
  askQ(el) { const q = CL.c.qs.find(x => x.id === el.dataset.id); askGood(q); },
  askB(el) { askBad(+el.dataset.i); },
  askFree() { const v = $("#askIn")?.value || ""; CL.input = v; askFree(v, false); },
  async askVoice() {
    if (ASR.on) { try { ASR.cur.stop(); } catch { } return; }
    toast("Đang nghe… hãy nói câu hỏi.");
    try { const alts = await recognize(); if (!alts.length) { asrError("no-speech"); return; } const best = alts.find(a => matchQuestion(a)) || alts[0]; askFree(best, true); }
    catch (e) { asrError(e); }
  },
  caseFinish() { stopSpeech(); if (!CL.asked.length) { toast("Hãy hỏi bệnh nhân ít nhất một câu trước."); return; } CL.phase = "write"; render(true); },
  casePhase(el) { CL.phase = el.dataset.p; render(true); },
  sumSubmit() {
    CL.summary = $("#sumIn")?.value || ""; if (norm(CL.summary).split(" ").length < 8) { toast("Bản tóm tắt còn quá ngắn. Viết ít nhất 2 câu."); return; }
    const cov = coverage(CL.summary, CL.c.summary.kw); CL.sum = { cov, ratio: cov.filter(Boolean).length / cov.length };
    evidence("writing", CL.sum.ratio >= 0.6, CL.id); render();
  },
  caseReport() {
    const ks = caseKeyStats(); const gather = ks.got.length / ks.key.length, ice = ks.ice.length ? ks.iceGot.length / ks.ice.length : 1;
    const lang = Math.max(0, 1 - CL.bad.length * 0.25), sum = CL.sum ? CL.sum.ratio : 0, reason = ((CL.dx.ok ? 1 : 0) + (CL.ex.ok ? 1 : 0)) / 2;
    const total = clamp(0.5 * gather + 0.2 * sum + 0.1 * ice + 0.1 * (CL.dx.ok ? 1 : 0) + 0.1 * (CL.ex.ok ? 1 : 0) - 0.05 * CL.bad.length, 0, 1);
    CL.rep = { gather, ice, lang, sum, reason, total };
    const prev = S.cases[CL.id]; S.cases[CL.id] = { best: Math.max(prev?.best || 0, total), n: (prev?.n || 0) + 1, last: Date.now() };
    evidence("clinical", gather >= 0.75, CL.id); evidence("clinical", ice >= 0.5, CL.id); evidence("clinical", !!CL.ex.ok, CL.id);
    CL.phase = "report"; save(); render(true);
  },
  caseRestart() { startCase(CL.id); TT.session = 0; render(true); },
  // sounds
  drillStart() { newDrillItem(); render(); speakNow(PAIRS[SD.set].pairs[SD.cur.p][SD.cur.w]); },
  drillPlay() { speakNow(PAIRS[SD.set].pairs[SD.cur.p][SD.cur.w]); },
  drillPick(el) { SD.ans = +el.dataset.i; const ok = SD.ans === SD.cur.w; if (ok) SD.ok++; evidence("pron", ok, SD.set); const pr = S.pron[SD.set] || (S.pron[SD.set] = { n: 0, ok: 0 }); pr.n++; if (ok) pr.ok++; render(); },
  drillNext() { SD.round++; if (SD.round < DRILL_N) { newDrillItem(); render(); speakNow(PAIRS[SD.set].pairs[SD.cur.p][SD.cur.w]); } else { save(); render(); } },
  drillAgain() { startDrill(SD.set); newDrillItem(); render(); speakNow(PAIRS[SD.set].pairs[SD.cur.p][SD.cur.w]); },
  async sayWord(el) {
    const w = el.dataset.w, other = el.dataset.other; if (ASR.on) { try { ASR.cur.stop(); } catch { } return; }
    toast(`Đọc từ “${w}”…`);
    try { const alts = (await recognize()).map(norm); const hit = alts.some(a => (" " + a + " ").includes(" " + w + " ")); const conf = alts.some(a => (" " + a + " ").includes(" " + other + " ")); SD.said[w] = { ok: hit && !conf, heard: alts[0] || "" }; evidence("pron", hit && !conf, SD.set); render(); }
    catch (e) { asrError(e); }
  },
  // word builder
  bIn(el) { B.ans.push(+el.dataset.k); render(); },
  bOut(el) { B.ans.splice(+el.dataset.i, 1); render(); },
  bReset() { B.ans = []; render(); },
  bCheck() {
    const t = B.order[B.round]; const ok = B.ans.map(k => B.pool[k]).join("") === t.p.join("");
    if (ok) { B.done = true; B.ok = !B.tries; } else { B.tries++; if (B.tries >= 2) { B.done = true; B.ok = false; } else B.ans = []; }
    if (B.done) { if (B.ok) B.score++; evidence("vocab", B.ok, "lab"); S.lab.n++; if (B.ok) S.lab.ok++; speakNow(t.t); }
    render();
  },
  bNext() { B.round++; if (B.round < BUILD_N) newBuild(); else save(); render(); },
  buildAgain() { startBuild(); render(); },
  // settings
  testVoice() { const [a, b] = voicePair(); sayLines([{ text: "Hello. I'm Dr Khoi. What brings you in today?", who: 0 }, { text: "I've had a headache for three days.", who: 1 }]); if (!a) toast("Chưa tải được giọng đọc. Thử lại sau vài giây."); },
  exportFile() {
    const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" }); const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `tnkhoi-english-backup-${dayKey()}.json`; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000); toast("Đã tạo file sao lưu. Nếu không thấy file tải về, dùng nút Sao chép dữ liệu.");
  },
  async exportCopy() { try { await navigator.clipboard.writeText(JSON.stringify(S)); toast("Đã sao chép dữ liệu. Dán vào Ghi chú hoặc email để cất giữ."); } catch { toast("Không sao chép được. Thử nút Tải file sao lưu."); } },
  importClick() { $("#importFile")?.click(); },
  importPaste() { importData($("#importText")?.value || ""); },
  resetAll() { if (confirm("Xóa toàn bộ tiến độ, thẻ ôn tập và thời gian học trên thiết bị này? Không thể hoàn tác.")) { try { localStorage.removeItem(KEY); } catch { } S = fresh(); L = R = CL = SD = B = null; save(); toast("Đã xóa dữ liệu."); render(); } }
};
function pickOpt2(q, qs, o) { if (qs.done) return; qs.picked = qs.picked || []; if (o === q.a) { qs.done = true; qs.ok = !qs.picked.length; } else { qs.picked.push(o); if (qs.picked.length >= 2) { qs.done = true; qs.ok = false; } } if (qs.done) evidence("clinical", qs.ok, CL.id); }
function runSpeakCheck(step, st, txt, src) {
  st.cov = coverage(txt, step.kw); st.ratio = st.cov.filter(Boolean).length / st.cov.length; st.checked = true; st.src = src;
  if (!st.logged) { st.logged = true; result(src === "asr" ? "speaking" : "writing", st.ratio >= 0.75); }
}
function importData(text) {
  let raw; try { raw = JSON.parse(text); } catch { toast("Dữ liệu không đúng định dạng JSON."); return; }
  if (!raw || typeof raw !== "object" || !("settings" in raw || "lessons" in raw || "cards" in raw)) { toast("Đây không phải bản sao lưu của Tnkhoi English."); return; }
  const next = sanitize(raw);
  if (!confirm(`Thay dữ liệu hiện tại bằng bản sao lưu này? (${Object.keys(next.lessons).length} bài, ${Object.keys(next.cards).length} thẻ, ${fmtDur(next.time.total)} học)`)) return;
  S = next; L = R = CL = SD = B = null; save(); toast("Đã nhập dữ liệu."); render();
}

/* ---------------- Global listeners ---------------- */
document.addEventListener("click", e => {
  const el = e.target.closest("[data-act]"); if (!el || el.disabled) return;
  const fn = ACT[el.dataset.act]; if (fn) { e.preventDefault(); fn(el, e); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.matches("input[data-enter]")) { e.preventDefault(); const fn = ACT[e.target.dataset.enter]; fn && fn(e.target, e); return; }
  if (ROUTE.name === "review" && ROUTE.arg === "go" && R && R.cur && !e.target.matches("input, textarea")) {
    if (e.key === " " && R.phase === "front" && cardInfo(R.cur).dir === "r") { e.preventDefault(); ACT.revFlip(); }
    else if (R.phase === "back" && /^[1-4]$/.test(e.key)) { e.preventDefault(); ACT.grade({ dataset: { g: e.key } }); }
  }
});
document.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "wsearch") { WQ = t.value; const box = $("#wlist"); if (box) box.innerHTML = wordListHtml(); }
  if (t.id === "askIn" && CL) CL.input = t.value;
  if (t.id === "spk" && L) stState().typed = t.value;
  if (t.id === "sumIn" && CL) CL.summary = t.value;
  if (t.id === "setRate") { S.settings.rate = +t.value; $("#rateLbl").textContent = (+t.value).toFixed(2) + "×"; touch(); }
});
document.addEventListener("change", e => {
  const t = e.target, st = S.settings;
  const map = { setName: () => { st.name = t.value.trim().slice(0, 40); }, setAccent: () => { st.accent = t.value === "uk" ? "uk" : "us"; st.voice = "auto"; st.voice2 = "auto"; }, setGoal: () => { st.goal = +t.value; }, setTheme: () => { st.theme = t.value; }, setVoice: () => { st.voice = t.value; }, setVoice2: () => { st.voice2 = t.value; }, setRate: () => { st.rate = +t.value; } };
  if (map[t.id]) { map[t.id](); save(); if (t.id !== "setRate" && t.id !== "setName") render(); else toast("Đã lưu."); return; }
  if (t.id === "importFile" && t.files && t.files[0]) { const fr = new FileReader(); fr.onload = () => importData(String(fr.result)); fr.readAsText(t.files[0]); t.value = ""; }
});

/* ---------------- Init ---------------- */
function initApp() {
  const r = ROUTE;
  if (r.name === "lesson" && !startLesson(r.arg)) { location.replace("#/path"); ROUTE = parseRoute(); }
  if (r.name === "clinic" && r.arg && !startCase(r.arg)) { location.replace("#/clinic"); ROUTE = parseRoute(); }
  if (r.name === "review" && r.arg === "go") startReview();
  if (r.name === "sounds" && r.arg) startDrill(r.arg);
  if (S.migrated && !S.migrated.shown) { S.migrated.shown = true; setTimeout(() => toast(`Đã mang ${fmtDur(S.migrated.seconds)} học từ phiên bản cũ sang.`), 600); }
  save(); render(true);
}
