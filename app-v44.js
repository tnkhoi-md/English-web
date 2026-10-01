/* ============================================================
   v4.4 · Giọng đọc mới: bản ghi người thật cho từ đơn (Free Dictionary API,
   nguồn Wiktionary/Wikimedia Commons), xếp hạng giọng máy theo chất lượng,
   trang Giọng đọc, Thư viện 44 âm tiếng Anh.
   Nạp SAU app-v43.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.6.11"; APP.build = "01.10.26";
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
