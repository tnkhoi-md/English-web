/* ============================================================
   MÃ ỨNG DỤNG, gộp theo thứ tự nạp: lõi (app-core, app-views, app-views2), v4 đến v4.3, và v4.6 (gồm v4.4, v4.5, khởi động app ở cuối).
   Gộp từ: app-core.js, app-views.js, app-views2.js, app-v4.js, app-v41.js, app-v42.js, app-v43.js, app-v46.js.
   Mỗi phần bắt đầu bằng dòng "===== file: ... =====".
   ============================================================ */

/* ===== file: app-core.js ===== */
/* ============================================================
   CORE · utils, state, migration, FSRS, time, speech
   ============================================================ */
/* Logo: quả địa cầu (quốc tế) cắt ngang bởi đường điện tim (y khoa) trên nền xanh đậm. */
let _logoN = 0;
const logo = () => { const id = "tkg" + (++_logoN); return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" focusable="false"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b3f8b"/><stop offset="1" stop-color="#0a7f86"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#'+id+')"/><g fill="none" stroke="#fff" stroke-linecap="round"><circle cx="32" cy="32" r="19" stroke-width="2.6"/><ellipse cx="32" cy="32" rx="8" ry="19" stroke-width="2" opacity=".75"/><path d="M14.5 24.5c11 4 24 4 35 0M14.5 39.5c11-4 24-4 35 0" stroke-width="1.8" opacity=".55"/></g><path d="M6 33h15l4-8 5 17 4-12 3 3h21" fill="none" stroke="#1b3f8b" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/><path d="M6 33h15l4-8 5 17 4-12 3 3h21" fill="none" stroke="#6ff2cf" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; };
const APP = { name: "Tnkhoi English", version: "3.3", build: "30.9.26", author: "Nguyên Khôi", credit: "© KhoiTN-MD" };
const KEY = "tnkhoi_english_v3";
const LESSONS = [...GENERAL, ...MEDICAL];
const LESSON_BY = Object.fromEntries(LESSONS.map(l => [l.id, l]));
const CASE_BY = Object.fromEntries(CASES.map(c => [c.id, c]));
const MIN = 60000, DAY = 86400000;
const SKILLS = { vocab: "Từ vựng", grammar: "Ngữ pháp", listening: "Nghe", reading: "Đọc", speaking: "Nói", writing: "Viết", pron: "Phát âm", clinical: "Giao tiếp lâm sàng" };

const $ = (s, r = document) => r.querySelector(s);
const esc = x => String(x ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const num = (x, d = 0) => (typeof x === "number" && isFinite(x) ? x : d);
function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function dayKey(t = Date.now()) { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function norm(s) { return String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9'\- ]+/g, " ").replace(/\s+/g, " ").trim(); }
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function fmtDur(sec) {
  sec = Math.max(0, Math.round(sec)); const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  if (h) return `${h} giờ ${m} phút`; if (m) return `${m} phút`; return `${s} giây`;
}
function fmtClock(sec) { sec = Math.max(0, Math.floor(sec)); const m = Math.floor(sec / 60), s = sec % 60; return `${m}:${String(s).padStart(2, "0")}`; }
function fmtIvl(ms) {
  if (ms < 60 * MIN) return `${Math.max(1, Math.round(ms / MIN))} phút`;
  if (ms < DAY) return `${Math.round(ms / 3600000)} giờ`;
  const d = Math.round(ms / DAY); if (d < 31) return `${d} ngày`; if (d < 365) return `${Math.round(d / 30)} tháng`; return `${(d / 365).toFixed(1)} năm`;
}
let toastTimer = 0;
function toast(msg) {
  document.querySelector(".toast")?.remove(); clearTimeout(toastTimer);
  const t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
  document.body.appendChild(t); toastTimer = setTimeout(() => t.remove(), 2600);
}

/* ---------------- State ---------------- */
function fresh() {
  return {
    v: 3, createdAt: Date.now(),
    settings: { name: "Khôi", theme: "system", accent: "us", voice: "auto", voice2: "auto", rate: 0.9, goal: 15 },
    time: { total: 0, days: {}, legacy: 0 },
    resume: null,
    lessons: {}, cards: {}, log: [], cases: {}, pron: {}, lab: { n: 0, ok: 0 }, migrated: null
  };
}
/* Chuẩn hóa mọi dữ liệu đọc vào (localStorage hoặc file backup): chỉ giữ trường hợp lệ, ép kiểu số. */
function sanitize(raw) {
  const S = fresh(); if (!raw || typeof raw !== "object") return S;
  const st = raw.settings || {};
  S.settings.name = typeof st.name === "string" ? st.name.slice(0, 40) : S.settings.name;
  S.settings.theme = ["system", "light", "dark"].includes(st.theme) ? st.theme : "system";
  S.settings.accent = st.accent === "uk" ? "uk" : "us";
  S.settings.voice = typeof st.voice === "string" ? st.voice.slice(0, 120) : "auto";
  S.settings.voice2 = typeof st.voice2 === "string" ? st.voice2.slice(0, 120) : "auto";
  S.settings.rate = clamp(num(st.rate, 0.9), 0.6, 1.2);
  S.settings.goal = clamp(Math.round(num(st.goal, 15)), 5, 120);
  S.createdAt = num(raw.createdAt, Date.now());
  const tm = raw.time || {};
  S.time.legacy = Math.max(0, Math.round(num(tm.legacy, 0)));
  if (tm.days && typeof tm.days === "object") for (const [k, v] of Object.entries(tm.days)) if (/^\d{4}-\d{2}-\d{2}$/.test(k)) S.time.days[k] = Math.max(0, Math.round(num(v, 0)));
  S.time.total = S.time.legacy + Object.values(S.time.days).reduce((a, b) => a + b, 0);
  if (raw.lessons && typeof raw.lessons === "object") for (const [id, v] of Object.entries(raw.lessons)) if (LESSON_BY[id] && v) S.lessons[id] = { done: !!v.done, best: clamp(num(v.best, 0), 0, 1), last: num(v.last, 0), n: Math.max(0, Math.round(num(v.n, 0))) };
  if (raw.cards && typeof raw.cards === "object") for (const [id, c] of Object.entries(raw.cards)) {
    if (!/^[GM]\d:\d:[rp]$/.test(id) || !c) continue;
    S.cards[id] = { state: ["new", "learning", "review", "relearning"].includes(c.state) ? c.state : "new", due: num(c.due, Date.now()), s: Math.max(0, num(c.s, 0)), d: clamp(num(c.d, 5), 1, 10), reps: Math.max(0, Math.round(num(c.reps))), lapses: Math.max(0, Math.round(num(c.lapses))), last: num(c.last, 0), step: Math.round(num(c.step)) };
  }
  if (Array.isArray(raw.log)) S.log = raw.log.filter(e => e && SKILLS[e.k]).slice(-4000).map(e => ({ t: num(e.t, 0), k: e.k, ok: e.ok ? 1 : 0, src: String(e.src || "").slice(0, 24) }));
  if (raw.cases && typeof raw.cases === "object") for (const [id, v] of Object.entries(raw.cases)) if (CASE_BY[id] && v) S.cases[id] = { best: clamp(num(v.best, 0), 0, 1), n: Math.max(0, Math.round(num(v.n))), last: num(v.last, 0) };
  if (raw.pron && typeof raw.pron === "object") for (const [id, v] of Object.entries(raw.pron)) if (PAIRS[id] && v) S.pron[id] = { n: Math.max(0, Math.round(num(v.n))), ok: Math.max(0, Math.round(num(v.ok))) };
  if (raw.lab) S.lab = { n: Math.max(0, Math.round(num(raw.lab.n))), ok: Math.max(0, Math.round(num(raw.lab.ok))) };
  if (raw.resume && typeof raw.resume === "object" && LESSON_BY[raw.resume.id]) S.resume = { id: raw.resume.id, i: Math.max(0, Math.round(num(raw.resume.i, 0))), st: raw.resume.st && typeof raw.resume.st === "object" ? raw.resume.st : {}, res: Array.isArray(raw.resume.res) ? raw.resume.res.slice(-200) : [], active: !!raw.resume.active, savedAt: num(raw.resume.savedAt, Date.now()) };
  if (raw.migrated && typeof raw.migrated === "object") S.migrated = { from: String(raw.migrated.from || "").slice(0, 60), seconds: Math.round(num(raw.migrated.seconds)), at: num(raw.migrated.at), shown: !!raw.migrated.shown };
  return S;
}
function storageKeys() { const ks = []; try { for (let i = 0; i < localStorage.length; i++) ks.push(localStorage.key(i)); } catch { } return ks; }
/* Đọc dữ liệu v3; nếu chưa có, tìm mọi khóa cũ tnkhoi_english_* và mang thời gian học sang. */
function load() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch { raw = null; }
  if (raw) return sanitize(raw);
  const S = fresh();
  const legacy = storageKeys().filter(k => k && k !== KEY && /^tnkhoi[_-]?english/i.test(k)).sort().reverse();
  for (const k of legacy) {
    try {
      const old = JSON.parse(localStorage.getItem(k) || "null");
      const secs = Math.round(num(old?.profile?.totalStudySeconds, 0));
      if (old) { S.time.legacy = secs; S.time.total = secs; S.migrated = { from: k, seconds: secs, at: Date.now() }; break; }
    } catch { }
  }
  return S;
}
let S = load();
let dirty = false, saveWarned = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); dirty = false; }
  catch { if (!saveWarned) { saveWarned = true; toast("Không lưu được vào trình duyệt. Hãy xuất bản sao lưu trong Cài đặt."); } }
}
function touch() { dirty = true; }
function saveResume() { if (!L || L.fin || ROUTE.name !== "lesson") return; S.resume = { id:L.id, i:L.i, st:L.st, res:L.res.slice(-200), active:!!L.active, savedAt:Date.now() }; touch(); save(); }
function clearResume() { if (S.resume) { S.resume=null; touch(); save(); } }

/* ---------------- Evidence ---------------- */
function evidence(k, ok, src = "") { S.log.push({ t: Date.now(), k, ok: ok ? 1 : 0, src }); if (S.log.length > 4000) S.log.splice(0, S.log.length - 4000); touch(); }
function skillScore(k) {
  const xs = S.log.filter(e => e.k === k).slice(-40); const n = xs.length; const ok = xs.reduce((a, e) => a + e.ok, 0);
  return { n, p: n ? (ok + 1) / (n + 2) : null };
}

/* ---------------- FSRS-4.5 (tham số mặc định) ---------------- */
const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
const DECAY = -0.5, FACTOR = 19 / 81, RETENTION = 0.9, MAX_IVL = 365;
const initD = g => clamp(W[4] - (g - 3) * W[5], 1, 10);
const nextD = (d, g) => clamp(W[7] * initD(4) + (1 - W[7]) * (d - W[6] * (g - 3)), 1, 10);
const retr = (t, s) => Math.pow(1 + FACTOR * t / Math.max(s, 0.01), DECAY);
const ivlDays = s => clamp(Math.round(s / FACTOR * (Math.pow(RETENTION, 1 / DECAY) - 1)), 1, MAX_IVL);
const recallS = (d, s, r, g) => s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) * (Math.exp((1 - r) * W[10]) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1));
const forgetS = (d, s, r) => W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp((1 - r) * W[14]);
function dayDue(now, days) { const d = new Date(now); d.setHours(4, 0, 0, 0); d.setDate(d.getDate() + days); return d.getTime(); }
function schedule(c0, g, now = Date.now()) {
  const c = { ...c0 };
  if (c.state === "new") {
    c.s = W[g - 1]; c.d = initD(g);
    if (g === 4) { c.state = "review"; c.due = dayDue(now, ivlDays(c.s)); }
    else { c.state = "learning"; c.step = g === 3 ? 1 : 0; c.due = now + (g === 1 ? 1 : g === 2 ? 6 : 10) * MIN; }
  } else if (c.state === "learning" || c.state === "relearning") {
    c.d = nextD(c.d, g);
    const relearn = c.state === "relearning";
    if (g === 1) { c.step = 0; c.due = now + (relearn ? 5 : 1) * MIN; }
    else if (g === 2) { c.due = now + (relearn ? 10 : 6) * MIN; }
    else if (g === 3 && !relearn && c.step < 1) { c.step = 1; c.due = now + 10 * MIN; }
    else { if (g === 4) c.s = Math.max(c.s, W[3] * 0.5); c.state = "review"; c.due = dayDue(now, ivlDays(c.s) + (g === 4 ? 1 : 0)); }
  } else {
    const t = Math.max(0, (now - (c.last || now)) / DAY), r = retr(t, c.s), d0 = c.d;
    c.d = nextD(d0, g);
    if (g === 1) { c.lapses++; c.s = Math.max(0.1, Math.min(c.s, forgetS(d0, c.s, r))); c.state = "relearning"; c.step = 0; c.due = now + 10 * MIN; }
    else {
      const sH = recallS(d0, c.s, r, 2), sG = recallS(d0, c.s, r, 3), sE = recallS(d0, c.s, r, 4);
      let iH = ivlDays(sH), iG = ivlDays(sG), iE = ivlDays(sE);
      iH = Math.min(iH, iG); iG = Math.max(iG, iH + 1); iE = Math.max(iE, iG + 1);
      c.s = g === 2 ? sH : g === 3 ? sG : sE;
      c.due = dayDue(now, clamp(g === 2 ? iH : g === 3 ? iG : iE, 1, MAX_IVL));
    }
  }
  c.reps = (c.reps || 0) + 1; c.last = now; return c;
}
function cardInfo(id) { const [lid, wi, dir] = id.split(":"); const l = LESSON_BY[lid]; const w = l && l.words[+wi]; return w ? { id, l, w, dir } : null; }
function addLessonCards(l) {
  let added = 0; const now = Date.now();
  l.words.forEach((w, i) => ["r", "p"].forEach((d, k) => {
    const id = `${l.id}:${i}:${d}`;
    if (!S.cards[id]) { S.cards[id] = { state: "new", due: now + k * 60000 + i * 1000, s: 0, d: 5, reps: 0, lapses: 0, last: 0, step: 0 }; added++; }
  }));
  touch(); return added;
}
function dueList(ahead = 0) {
  const lim = Date.now() + ahead;
  return Object.entries(S.cards).filter(([id, c]) => c.due <= lim && cardInfo(id)).sort((a, b) => a[1].due - b[1].due).map(([id]) => id);
}
function cardStats() {
  const st = { new: 0, learning: 0, young: 0, mature: 0, total: 0 };
  for (const c of Object.values(S.cards)) { st.total++; if (c.state === "new") st.new++; else if (c.state !== "review") st.learning++; else if (c.s >= 21) st.mature++; else st.young++; }
  return st;
}
function forecast(days = 7) {
  const out = Array(days).fill(0); const base = dayDue(Date.now(), 0);
  for (const c of Object.values(S.cards)) { const idx = Math.floor((Math.max(c.due, base) - base) / DAY); if (idx >= 0 && idx < days) out[idx]++; }
  return out;
}

/* ---------------- Time tracking: chỉ tính khi đang ở màn học, trang hiển thị và có tương tác ---------------- */
const TT = { last: Date.now(), input: Date.now(), acc: 0, session: 0, saveAt: Date.now(), counting: false };
const IDLE_MS = 180000;
const SESSION_MAX_GAP = 8;
function markActive() { TT.input = Date.now(); }
["pointerdown", "keydown", "touchstart", "wheel", "input", "scroll"].forEach(ev => addEventListener(ev, markActive, { passive: true, capture: true }));
function addSeconds(n) { const k = dayKey(); S.time.days[k] = (S.time.days[k] || 0) + n; S.time.total += n; touch(); }
function todaySeconds() { return S.time.days[dayKey()] || 0; }
function streak() {
  let n = 0; const d = new Date(); const ok = t => (S.time.days[dayKey(t)] || 0) >= 300;
  if (!ok(d.getTime())) d.setDate(d.getDate() - 1);
  while (ok(d.getTime())) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
setInterval(() => {
  const now = Date.now(); const dt = Math.min(3, (now - TT.last) / 1000); TT.last = now;
  const recentlyActive = (now - TT.input) < IDLE_MS;
  const saneGap = dt <= SESSION_MAX_GAP;
  const counting = isStudyRoute() && !document.hidden && saneGap && (recentlyActive || SPEECH.busy);
  if (counting) { TT.acc += dt; TT.session += dt; const whole = Math.floor(TT.acc); if (whole >= 1) { TT.acc -= whole; addSeconds(whole); } }
  if (counting !== TT.counting) { TT.counting = counting; }
  paintTimer();
  if (dirty && now - TT.saveAt > 5000) { TT.saveAt = now; save(); }
}, 1000);
document.addEventListener("visibilitychange", () => { TT.last = Date.now(); if (document.hidden) { saveResume(); save(); stopSpeech(); } });
addEventListener("pagehide", () => { saveResume(); save(); });
addEventListener("beforeunload", () => { saveResume(); save(); });

/* ---------------- Speech: TTS hai giọng, nhận dạng giọng nói, ghi âm ---------------- */
const SPEECH = { voices: [], busy: false, token: 0 };
const TTS_OK = "speechSynthesis" in window;
function loadVoices() { if (!TTS_OK) return; SPEECH.voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)); }
if (TTS_OK) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (typeof ROUTE !== "undefined" && ROUTE && ROUTE.name === "settings") render(); }; }
const langCode = () => (S.settings.accent === "uk" ? "en-GB" : "en-US");
function voiceScore(v) {
  let s = 0; const n = v.name;
  if (/premium|enhanced|neural|natural/i.test(n)) s += 6;
  if (/Samantha|Ava|Allison|Serena|Daniel|Kate|Oliver|Karen|Moira|Jenny|Aria|Guy|Sonia|Ryan|Libby|Google/i.test(n)) s += 3;
  if (/compact|eloquence|novelty|bells|bubbles|boing|zarvox|whisper|bad news|good news|jester|organ|trinoids|albert|cellos|fred|junior|ralph|superstar|grandma|grandpa|rocko|shelley|flo|reed|sandy/i.test(n)) s -= 10;
  if (v.localService) s += 1; return s;
}
function voicePair() {
  const vs = SPEECH.voices; if (!vs.length) return [null, null];
  const lc = langCode().toLowerCase();
  const same = vs.filter(v => v.lang.replace("_", "-").toLowerCase() === lc);
  const pool = (same.length ? same : vs).slice().sort((a, b) => voiceScore(b) - voiceScore(a));
  const v1 = vs.find(v => v.name === S.settings.voice) || pool[0];
  const v2 = vs.find(v => v.name === S.settings.voice2) || pool.find(v => v !== v1) || v1;
  return [v1, v2];
}
function stopSpeech() { SPEECH.token++; SPEECH.busy = false; if (TTS_OK) speechSynthesis.cancel(); document.querySelectorAll(".line.speaking").forEach(e => e.classList.remove("speaking")); }
function say(text, opt = {}) {
  return new Promise(res => {
    if (!TTS_OK) { toast("Trình duyệt này không hỗ trợ đọc văn bản."); return res(); }
    const [v1, v2] = voicePair(); const who = opt.who || 0;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = langCode(); u.rate = clamp((opt.rate || S.settings.rate) * (opt.slow ? 0.78 : 1), 0.5, 1.3);
    const v = who ? v2 : v1; if (v) u.voice = v;
    u.pitch = who && v1 === v2 ? 1.18 : who ? 1 : 0.96;
    SPEECH.busy = true; markActive();
    const done = () => { SPEECH.busy = false; markActive(); res(); };
    u.onend = done; u.onerror = done;
    speechSynthesis.speak(u);
  });
}
async function sayLines(lines, onLine) {
  stopSpeech(); const my = SPEECH.token;
  for (let i = 0; i < lines.length; i++) {
    if (my !== SPEECH.token) return;
    onLine && onLine(i);
    await say(lines[i].text, { who: lines[i].who, slow: lines[i].slow });
    if (my !== SPEECH.token) return;
    await new Promise(r => setTimeout(r, 250));
  }
  onLine && onLine(-1);
}
function speakNow(text, opt) { stopSpeech(); return say(text, opt); }

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const ASR = { cur: null, on: false };
function recognize() {
  return new Promise((res, rej) => {
    if (!SR) return rej("unsupported");
    stopSpeech();
    const r = new SR(); let got = [];
    r.lang = langCode(); r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
    r.onresult = e => { got = Array.from(e.results[0] || []).map(a => a.transcript); };
    r.onerror = e => { ASR.on = false; rej(e.error || "error"); };
    r.onend = () => { ASR.on = false; res(got); };
    try { r.start(); ASR.cur = r; ASR.on = true; } catch (e) { rej(String(e.message || e)); }
    setTimeout(() => { try { r.stop(); } catch { } }, 10000);
  });
}
function asrError(e) {
  const m = { "not-allowed": "Chưa được cấp quyền micro. Hãy cho phép micro cho trang này.", "service-not-allowed": "Thiết bị chưa bật nhận dạng giọng nói (trên iPad: bật Siri & Đọc chính tả).", "no-speech": "Chưa nghe thấy giọng nói. Thử nói to và gần micro hơn.", unsupported: "Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Bạn có thể ghi âm để tự nghe lại hoặc gõ câu trả lời." };
  toast(m[e] || "Không nhận dạng được. Thử lại nhé.");
}
const REC = { mr: null, chunks: [], url: null, owner: null };
const REC_OK = !!(navigator.mediaDevices && window.MediaRecorder);
async function recStart(owner, onChange) {
  if (!REC_OK) { toast("Trình duyệt này không hỗ trợ ghi âm."); return; }
  try {
    stopSpeech();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream); REC.chunks = []; REC.owner = owner;
    mr.ondataavailable = e => { if (e.data && e.data.size) REC.chunks.push(e.data); };
    mr.onstop = () => { const blob = new Blob(REC.chunks, { type: mr.mimeType || "audio/mp4" }); if (REC.url) URL.revokeObjectURL(REC.url); REC.url = URL.createObjectURL(blob); stream.getTracks().forEach(t => t.stop()); REC.mr = null; onChange && onChange(); };
    mr.start(); REC.mr = mr; onChange && onChange();
    setTimeout(() => { if (REC.mr === mr) mr.stop(); }, 30000);
  } catch { toast("Không mở được micro. Kiểm tra quyền micro của trình duyệt."); }
}
function recStop() { if (REC.mr) REC.mr.stop(); }
function recPlay() { if (REC.url) { stopSpeech(); new Audio(REC.url).play().catch(() => toast("Không phát được bản ghi.")); } }
function recReset(owner) { if (REC.owner !== owner) { if (REC.mr) REC.mr.stop(); if (REC.url) URL.revokeObjectURL(REC.url); REC.url = null; REC.owner = owner; } }

/* ---------------- Theme ---------------- */
function applyTheme() {
  const t = S.settings.theme; const root = document.documentElement;
  if (t === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", t);
  const dark = t === "dark" || (t === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0e131a" : "#eef1f4");
}
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", applyTheme);


/* ===== file: app-views.js ===== */
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
    <aside class="side"><a class="brand" href="#/today"><span class="brand-mark" aria-hidden="true">${logo()}</span><span class="brand-name">Tnkhoi English<small>Thông dụng và Y khoa</small></span></a>
      <nav class="nav" aria-label="Điều hướng chính">${nav}</nav>
      <div class="side-foot">Phiên bản ${APP.version} (${APP.build})<br>Xây dựng bởi ${APP.author}<br>${APP.credit}</div></aside>
    <div class="main"><header class="topbar"><a class="mobile-brand" href="#/today" style="color:inherit;text-decoration:none"><span class="brand-mark" aria-hidden="true">${logo()}</span>Tnkhoi English</a><span id="timer" class="timer-pill" aria-live="off"></span></header>
      <main id="page" class="page" tabindex="-1">${content}</main></div>
  </div>
  <nav class="bottom" aria-label="Điều hướng">${bottom.map(([id, l, i]) => `<a href="#/${id}" ${(cur === id || (id === "more" && moreIds.includes(cur))) ? 'aria-current="page"' : ""}>${ic(i, 22)}<span>${l}</span>${id === "review" && due ? `<span class="badge">${due}</span>` : ""}</a>`).join("")}</nav>`;
}
function focusBar(segs, label) {
  return `<div class="focus-bar"><button class="icon-btn" data-act="exitFocus" aria-label="Thoát">${ic("close")}</button>
    ${segs ? `<div class="progress" role="progressbar" aria-label="${esc(label || "Tiến độ")}" aria-valuemin="0" aria-valuemax="${segs.n}" aria-valuenow="${segs.i}">${Array.from({ length: segs.n }, (_, k) => `<i class="${k < segs.i ? "on" : k === segs.i ? "cur" : ""}"></i>`).join("")}</div>` : `<div class="grow" style="flex:1"><b>${esc(label || "")}</b></div>`}
    <span id="timer" class="timer-pill"></span></div>`;
}
const EXTRA_VIEWS = {};
let lastRouteKey = "";
function render(nav = false) {
  applyTheme();
  const r = ROUTE, key = r.name + "/" + r.arg;
  document.body.classList.toggle("focus", isFocus());
  const app = document.getElementById("app");
  const V = { today: viewToday, path: viewPath, lesson: viewLesson, review: viewReview, clinic: viewClinic, sounds: viewSounds, words: viewWords, progress: viewProgress, settings: viewSettings, about: viewAbout, more: viewMore, library: viewLibrary, goals: viewGoals, learn: viewLearn, quiz: viewQuiz, placement: viewPlacement, sync: viewSync, grammar: viewGrammar, pron: viewPron, unit: viewUnit, practice: viewPractice, phonemes: viewPhonemes, voices: viewVoices, ...EXTRA_VIEWS }[r.name] || viewToday;
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
  return done ? { kind: "lesson", short: "học lại bài " + done.id, title: `Học lại: ${done.title}`, why: why + ` Bài này có điểm thấp nhất (${Math.round(S.lessons[done.id].best * 100)}%).`, href: `#/lesson/${done.id}`, cta: "Học lại", est: done.min } : null;
}
function acc(set) { const p = S.pron[set]; return p && p.n ? p.ok / p.n : -1; }
function planToday() {
  const items = []; const due = dueList().length;
  if (due) items.push({ kind: "review", short: `ôn ${due} thẻ`, title: `Ôn ${due} thẻ đến hạn`, why: "Nhớ lại trước khi học mới. Thẻ để quá hạn sẽ khó nhớ hơn.", href: "#/review/go", cta: "Bắt đầu ôn", est: Math.max(2, Math.round(due * 0.25)) });
  const doneCount = t => LESSONS.filter(l => l.track === t && S.lessons[l.id]?.done).length;
  const lastT = t => Math.max(0, ...LESSONS.filter(l => l.track === t).map(l => S.lessons[l.id]?.last || 0));
  const order = [nextLessonIn("gen"), nextLessonIn("med")].filter(Boolean).sort((a, b) => doneCount(a.track) - doneCount(b.track) || lastT(a.track) - lastT(b.track));
  const lessonItem = l => ({ kind: "lesson", track: l.track, short: `học ${l.title}`, title: `${l.title}`, why: l.can, href: `#/lesson/${l.id}`, cta: "Vào bài", est: l.min });
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
  const date = new Date().toLocaleDateString(LOC(), { weekday: "long", day: "numeric", month: "long" });
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
    <div class="panel stack" style="margin-top:14px"><div class="row between"><h3>Lỗi sai thường gặp</h3><a class="muted small" href="#/lesson/${tip.l}">từ ${(LESSON_BY[tip.l] || {}).title || tip.l}</a></div>
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
    return `<section class="panel track-${t} stack"><div><div class="row between"><h2>${title}</h2><span class="muted small">${d}/${ls.length} học phần</span></div><p class="muted small">${desc}</p></div>
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
      <h3>Lỗi sai thường gặp</h3><div>${step.pit.map(([x, v, why]) => `<div class="pitfall"><span class="mark-x">✗</span><span class="x" lang="en">${esc(x)}</span><span class="mark-v">✓</span><span class="v" lang="en">${esc(v)}</span><span class="why">${esc(why)}</span></div>`).join("")}</div>`;
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
    if (step.opts) return `<span class="step-kind">${KIND[step.k]}</span><p class="muted">Chọn từ điền vào chỗ trống.</p><p class="cloze" lang="en">${sent}</p>${step.hint ? `<p class="muted small">Gợi ý, ${esc(step.hint)}</p>` : ""}${choicesHtml({ opts: step.opts, a: step.a, why: step.why }, st, -1)}`;
    return `<span class="step-kind">${KIND[step.k]}</span><p class="muted">Gõ từ còn thiếu.</p><p class="cloze" lang="en">${sent}</p>${step.hint ? `<p class="muted small">Gợi ý, ${esc(step.hint)}</p>` : ""}
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
      <div class="row"><a class="btn primary" href="#/review/go">Ôn ngay</a>${next ? `<a class="btn" href="#/lesson/${next.id}">Tiếp: ${next.title}</a>` : ""}<a class="btn quiet" href="#/today">Về Hôm nay</a></div>`;
  }
};


/* v3.2: live input synchronization */
function syncLessonInput(el){if(!L||!el)return;const st=stState();if(el.id==="writeIn"||el.id==="ans")st.val=el.value||"";if(el.id==="spk")st.typed=el.value||"";L.active=true;if(el.id==="writeIn"){const out=document.getElementById("writeCount");if(out)out.textContent=`${norm(st.val).split(" ").filter(Boolean).length} từ`;}try{saveResume()}catch{}}
document.addEventListener("input",e=>{const el=e.target.closest("#writeIn,#ans,#spk");if(el)syncLessonInput(el)},{capture:true});
document.addEventListener("change",e=>{const el=e.target.closest("#writeIn,#ans,#spk");if(el)syncLessonInput(el)},{capture:true});
document.addEventListener("click",e=>{const el=e.target.closest("[data-act]");if(!el||el.dataset.act!=="discardResume")return;e.preventDefault();if(S.resume&&S.resume.id===el.dataset.id){clearResume();if(L&&L.id===el.dataset.id&&!L.fin)L=null;render(true);}} ,{capture:true});


/* ===== file: app-views2.js ===== */
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
        <div class="panel stack" style="margin-top:14px"><h3>Số thẻ đến hạn 7 ngày tới</h3><div class="bars">${fc.map((v, i) => `<div><span>${v}</span><i style="height:${v / max * 90}%"></i><span>${i === 0 ? "Hôm nay" : new Date(Date.now() + i * DAY).toLocaleDateString(LOC(), { weekday: "short" })}</span></div>`).join("")}</div></div>
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
  return `<div class="track-${info.l.track}">${focusBar(null, `Còn ${left} thẻ`)}<div class="focus-page"><article class="step-card">${body}<p class="muted small">Từ ${info.l.title}${c.state === "new" ? ", thẻ mới" : c.lapses ? ", đã quên " + c.lapses + " lần" : ""}</p></article><div class="step-actions">${actions}</div></div></div>`;
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
  return `<div class="list">${ws.map(({ w, l, i }) => { const [s, cls] = status(l, i); return `<div class="item track-${l.track}"><span class="grow"><span class="t en" lang="en" style="font-size:19px">${esc(w.w)}</span> <span class="muted" style="font-family:var(--en)">${esc(ipaOf(w))}</span><br><span class="s">${esc(w.vi)}, ${esc(l.title)}</span></span><span class="chip ${cls}">${s}</span>${hear(w.w)}</div>`; }).join("")}</div>`;
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
  const trackRow = t => { const ls = LESSONS.filter(l => l.track === t), d = ls.filter(l => S.lessons[l.id]?.done); return `<div class="skill track-${t}"><span>${t === "med" ? "Y khoa" : "Thông dụng"}</span><div class="bar"><i style="width:${d.length / ls.length * 100}%;background:var(--accent)"></i></div><span class="n">${d.length}/${ls.length} học phần</span></div>`; };
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


/* ===== file: app-v4.js ===== */
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
function syncTitle() { const c = syncCfg(); if (!c.token) return "Chưa bật đồng bộ thiết bị"; return { busy: "Đang đồng bộ…", ok: "Đã đồng bộ " + (c.lastSync ? new Date(c.lastSync).toLocaleTimeString(LOC(), { hour: "2-digit", minute: "2-digit" }) : ""), err: "Lỗi đồng bộ: " + SYNC.msg }[SYNC.status] || "Đồng bộ đang bật"; }
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
    <aside class="side"><a class="brand" href="#/today"><span class="brand-mark" aria-hidden="true">${logo()}</span><span class="brand-name">Tnkhoi English<small>Thông dụng và Y khoa</small></span></a>
      <nav class="nav" aria-label="Điều hướng chính">${nav}</nav>
      <div class="side-foot">Phiên bản ${APP.version} (${APP.build})<br>Xây dựng bởi ${APP.author}<br>${APP.credit}</div></aside>
    <div class="main"><header class="topbar"><a class="mobile-brand" href="#/today" style="color:inherit;text-decoration:none"><span class="brand-mark" aria-hidden="true">${logo()}</span><span class="mb-name">Tnkhoi English</span></a>${toolbar()}</header>
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
      <div class="meter"><i style="width:${c.p * 100}%"></i></div><p class="small muted">${c.d}/${c.n} từ thư viện${ls.length ? `, ${ld}/${ls.length} học phần` : ""}</p></div><a class="btn small" href="#/library" data-act="goLevel" data-l="${id}">Xem từ ${id}</a></div>`; }).join("");
  const medRows = STAGES.map(([id, name, desc], i) => { const c = coverage2(stageWords(id)); const topics = LIB.filter(t => t.group === id);
    const extra = id === "clinical" ? `, ${LESSONS.filter(l => l.track === "med" && S.lessons[l.id]?.done).length}/${LESSONS.filter(l => l.track === "med").length} bài giao tiếp, ${Object.keys(S.cases).length}/${CASES.length} ca bệnh` : "";
    return `<div class="lvl-row ${id === g.med.stage ? "target" : ""}"><span class="lv lv-st">${i + 1}</span><div class="grow"><b>${name}</b>${id === g.med.stage ? ' <span class="chip acc">đang tập trung</span>' : ""}<p class="muted small">${desc}</p>
      <div class="meter"><i style="width:${c.p * 100}%"></i></div><p class="small muted">${c.d}/${c.n} thuật ngữ${extra}</p><div class="row" style="gap:6px;margin-top:6px">${topics.map(t => `<a class="chip tpc" style="--tc:${t.color}" href="#/library/${t.id}">${t.icon} ${esc(t.vi)}</a>`).join("")}</div></div></div>`; }).join("");
  const sel = (id, opts, v) => `<select id="${id}">${opts.map(([val, lab]) => `<option value="${val}" ${val === v ? "selected" : ""}>${lab}</option>`).join("")}</select>`;
  return `<section class="page-head"><h1>Mục tiêu học tập</h1><p class="lede">Hai mục tiêu song song: tiếng Anh phổ thông từ con số 0 đến C1, và tiếng Anh y khoa cơ bản bắt đầu từ thuật ngữ giải phẫu, sinh lý, bệnh học. Trang Hôm nay tự chia từ mới mỗi ngày theo các mục tiêu này.</p></section>
    <section class="panel stack"><h3>Thiết lập</h3>
      <div class="setting"><div><b>Trình độ phổ thông hiện tại</b><div class="s">${g.placed ? `Kiểm tra đầu vào ngày ${new Date(g.placed.at).toLocaleDateString(LOC())}: ${g.placed.level}.` : "Chưa làm kiểm tra đầu vào."} <a href="#/placement">Làm kiểm tra (25 câu)</a></div></div>${sel("goalLevel", CEFR.map(([id, n]) => [id, n]), g.gen.level)}</div>
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
  /* Từ trong các học phần nền tảng: gom theo mạch (phổ thông, y khoa) thay vì mỗi bài một nhóm. */
  ["gen", "med"].forEach(tr => {
    const done = LESSONS.filter(l => l.track === tr && S.lessons[l.id]?.done), rows = [], seen = new Set(), titles = [];
    done.forEach(l => { let used = false; l.words.forEach((w, i) => { if (!match(w.w, w.vi)) return; const k = w.w.toLowerCase(); if (seen.has(k)) return; seen.add(k); used = true; const c = S.cards[`${l.id}:${i}:p`]; const st = !c || c.state === "new" ? ["mới", ""] : c.state !== "review" ? ["đang học", "acc"] : c.s >= 21 ? ["đã vững", "good"] : ["đang củng cố", "acc"]; rows.push(`<div class="lw" style="--tc:${tr === "med" ? "#0a8f78" : "#3158d4"}"><div class="lw-main"><div class="row" style="gap:8px"><span class="lw-w" lang="en">${esc(w.w)}</span><span class="pos">${esc(ipaOf(w))}</span></div><div class="lw-vi">${esc(w.vi)}</div></div><div class="lw-act">${hear(w.w)}<span class="chip ${st[1]}">${st[0]}</span></div></div>`); }); if (used) titles.push(l.title); });
    if (rows.length) groups.push({ key: "core-" + tr, icon: tr === "med" ? "🩺" : "📘", color: tr === "med" ? "#0a8f78" : "#3158d4", title: tr === "med" ? "Nền tảng y khoa" : "Nền tảng phổ thông", sub: titles.join(", "), rows });
  });
  LIB.forEach(t => { const items = t.words.filter(w => isLearned(w) && match(w.w, w.vi)); if (items.length) groups.push({ key: t.id, icon: t.icon, color: t.color, title: t.title, sub: t.vi, rows: items.map(w => wordRow(w, false)) }); });
  if (!groups.length) return WQ ? `<p class="muted">Không có từ nào khớp “${esc(WQ)}”.</p>` : `<div class="empty"><p>Chưa có từ nào. Học xong một bài, hoặc chọn “Ôn”, “Biết” trong Thư viện từ vựng.</p><div class="row"><a class="btn primary" href="#/library">Mở thư viện</a><a class="btn" href="#/path">Lộ trình</a></div></div>`;
  return groups.map(g => `<details class="wgroup" style="--tc:${g.color}" ${q || groups.length <= 4 ? "open" : ""}><summary><span class="ti">${g.icon}</span><span class="grow"><b>${esc(g.title)}</b>${g.sub ? ` <span class="muted small">${esc(g.sub)}</span>` : ""}</span><span class="chip">${g.rows.length}</span></summary><div class="lw-list">${g.rows.join("")}</div></details>`).join("");
};
const _viewWords = viewWords;
viewWords = () => _viewWords().replace('<h1>Sổ từ và thuật ngữ</h1>', '<h1>Từ của tôi</h1><p class="lede">Các từ bạn đã học, gom theo chủ đề. Muốn thêm từ mới, mở <a href="#/library">Thư viện từ vựng</a>.</p>').replace(">Sổ từ<", ">Từ đã học<");

/* ---------------- Progress & More & Settings additions ---------------- */
const _viewProgress = viewProgress;
viewProgress = () => _viewProgress() + `<section class="panel stack" style="margin-top:14px"><h3>Thư viện từ vựng</h3>${GEN_LEVELS.map(l => { const c = coverage2(genLevelWords(l)); return `<div class="skill"><span class="lv lv-${l}">${l}</span><div class="bar"><i style="width:${c.p * 100}%"></i></div><span class="n">${c.d}/${c.n}</span></div>`; }).join("")}${STAGES.map(([id, n]) => { const c = coverage2(stageWords(id)); return `<div class="skill track-med"><span>${n}</span><div class="bar"><i style="width:${c.p * 100}%;background:var(--accent)"></i></div><span class="n">${c.d}/${c.n}</span></div>`; }).join("")}</section>`;
viewMore = function () {
  const items = [["goals", "🎯", "Mục tiêu và tiến bộ", "Lộ trình, kỹ năng, lịch học, mục tiêu"], ["clinic", "🩺", "Phòng khám ảo", "Hỏi bệnh 3 ca bệnh ảo"], ["words", "🔖", "Từ của tôi", "Từ đã học theo chủ đề, hình vị, ghép thuật ngữ"], ["phonemes", "🔊", "Phát âm", "44 âm, cặp âm, kho từ phát âm"], ["sync", "☁️", "Đồng bộ thiết bị", "Học tiếp trên iPad, điện thoại, máy tính"], ["settings", "⚙️", "Cài đặt", "Giọng đọc, sao lưu dữ liệu"], ["about", "✍️", "Góc tác giả", "Mục đích, triết lý, phương pháp"]];
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
viewReview = () => { let h = _viewReview(); if (R && R.cur && R.cur.startsWith("V:") && ROUTE.arg === "go") { const i = cardInfo(R.cur); h = h.replace(`Từ ${i.l.title}`, `${i.lw.topic.icon} ${esc(i.lw.topic.vi)}`); } return h; };

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


/* ===== file: app-v41.js ===== */
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
viewMore = () => _viewMore41().replace('<a class="item link" href="#/words">', '<a class="item link" href="#/grammar"><span class="ti">📐</span><span class="grow"><span class="t">Thư viện ngữ pháp</span><br><span class="s">' + GRAMMAR.length + ' điểm ngữ pháp A1 đến C1, có câu luyện</span></span></a><a class="item link" href="#/words">');
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


/* ===== file: app-v42.js ===== */
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
/* Câu trắc nghiệm: đáp án đúng không được nằm cố định ở một vị trí, nên xáo thứ tự lựa chọn (giữ đúng chỉ số đáp án). */
function shuffleChoice(opts, a) { const right = opts[a], o = shuffle(opts); return [o, o.indexOf(right)]; }
function shuffleItemOpts(it) { if ((it.t === "c" || it.t === "x") && it.opts && typeof it.a === "number") { const [o, a] = shuffleChoice(it.opts, it.a); it.opts = o; it.a = a; } return it; }
GRAMMAR.forEach(g => { g.bank = parseBank(GRAMMAR_BANK[g.id]); g.quiz = (g.quiz || []).map(([q, opts, a, why]) => { const [o, k] = shuffleChoice(opts, a); return [q, o, k, why]; }); });
function unitWords(u) { const seen = new Set(), out = []; u.vocab.forEach(([tid, l]) => (LIB_BY[tid]?.words || []).forEach(w => { if (w.lvl === l && !seen.has(w.key)) { seen.add(w.key); out.push(w); } })); return out; }
const unitsOf = track => UNITS.filter(u => u.track === track);
const unitsWithTopic = tid => UNITS.filter(u => u.vocab.some(([t]) => t === tid));
const unitsWithGrammar = gid => UNITS.filter(u => u.grammar.includes(gid));
const gramPassed = id => (S.gram[id]?.best || 0) >= 0.7;
function unitParts(u) {
  const ws = unitWords(u), vd = ws.filter(isLearned).length;
  const parts = [];
  if (u.lessons.length) parts.push({ k: "lessons", label: "Học phần", d: u.lessons.filter(id => S.lessons[id]?.done).length, n: u.lessons.length });
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
    const l = u.lessons.find(id => !S.lessons[id]?.done); if (l) return [`Học ${(LESSON_BY[l] || {}).title || l}`, `#/lesson/${l}`];
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
    ${u.lessons.length ? `<section class="panel stack" style="margin-top:14px"><h3>📖 Học phần</h3><div class="list">${u.lessons.map(id => lessonRow(LESSON_BY[id], LESSONS.filter(x => x.track === u.track).indexOf(LESSON_BY[id]))).join("")}</div></section>` : ""}
    ${sets ? `<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤 Từ vựng của chặng</h3>${fresh ? `<a class="btn small primary" href="#/learn/u-${u.id}">Học từ mới (${Math.min(fresh, S.goals.newPerDay)})</a>` : `<span class="chip good">đã học hết ${words.length} từ</span>`}</div><p class="muted small">${words.length} từ lấy trực tiếp từ Thư viện từ vựng. Học ở đây hay trong thư viện đều cộng vào cùng một tiến độ.</p><div class="usets">${sets}</div></section>` : ""}
    ${u.grammar.length ? `<section class="panel stack" style="margin-top:14px"><h3>📐 Ngữ pháp</h3><div class="list">${u.grammar.map(id => { const g = GRAMMAR_BY[id], r = S.gram[id]; return `<div class="item"><span class="lv lv-${g.lvl}">${g.lvl}</span><a class="grow" href="#/grammar/${id}" style="color:inherit;text-decoration:none"><span class="t" lang="en">${esc(g.title)}</span><br><span class="s">${esc(g.vi)}, ${g.bank.length} câu luyện</span></a>${r ? `<span class="chip ${r.best >= 0.7 ? "good" : "acc"}">${Math.round(r.best * 100)}%</span>` : ""}<a class="btn small" href="#/practice/g-${id}">Luyện</a></div>`; }).join("")}</div></section>` : ""}
    ${u.pron.length ? `<section class="panel stack" style="margin-top:14px"><h3>🔊 Phát âm</h3><div class="row">${u.pron.map(id => { const c = PRON_BANK.find(x => x.id === id); return c ? `<a class="chip tpc" style="--tc:${c.color}" href="#/pron/${id}">${c.icon} ${esc(c.title)}</a>` : ""; }).join("")}</div></section>` : ""}
    ${u.cases.length ? `<section class="panel stack track-med" style="margin-top:14px"><h3>🩺 Ca bệnh ảo</h3><div class="list">${u.cases.map(id => { const c = CASE_BY[id], r = S.cases[id]; return `<a class="item link" href="#/clinic/${id}"><span class="avatar" style="width:36px;height:36px;font-size:13px;border-radius:10px">${c.patient.av}</span><span class="grow"><span class="t">${esc(c.vi)}</span></span>${r ? `<span class="chip good">${Math.round(r.best * 100)}%</span>` : `<span class="chip">chưa khám</span>`}</a>`; }).join("")}</div></section>` : ""}
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🏁 Kiểm tra chặng</h3>${tb ? `<span class="chip ${tb.best >= 0.8 ? "good" : "acc"}">tốt nhất ${Math.round(tb.best * 100)}%</span>` : ""}</div><p class="muted">Trộn từ vựng của chặng (chọn nghĩa, chọn từ, nghe, viết chính tả) và câu hỏi ngữ pháp. Đạt từ 80% là qua phần kiểm tra.</p><div><a class="btn primary" href="#/practice/u-${u.id}">Làm bài kiểm tra</a></div></section>
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
/* Đáp án nhiễu hợp lệ: khác từ, không trùng hoặc gần nghĩa tiếng Việt với đáp án đúng (tránh hai đáp án cùng đúng); ưu tiên cùng từ loại. */
const viParts = s => String(s || "").toLowerCase().replace(/\([^)]*\)/g, " ").split(/[,;\/]| hoặc /).map(x => x.trim()).filter(Boolean);
function viClash(a, b) { const A = viParts(a.vi), B = viParts(b.vi); return A.some(x => B.some(y => x === y || (" " + x + " ").includes(" " + y + " ") || (" " + y + " ").includes(" " + x + " "))); }
const posKey = w => String(w.pos || "").split(/[,·]/)[0].trim();
function rankDistractors(w, cands, n) {
  const ok = cands.filter(x => x !== w && !/·/.test(x.w) && x.w.toLowerCase() !== w.w.toLowerCase() && !viClash(x, w)).filter((x, i, a) => a.findIndex(y => y.w.toLowerCase() === x.w.toLowerCase()) === i);
  return [...shuffle(ok.filter(x => posKey(x) === posKey(w))), ...shuffle(ok.filter(x => posKey(x) !== posKey(w)))].slice(0, n);
}
function vocabItems(words, pool) {
  const ws = words.filter(w => !/·/.test(w.w)); const P = (pool || ws).filter(w => !/·/.test(w.w));
  const others = (w, k, n) => rankDistractors(w, P, n).map(x => x[k]);
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
  if (kind === "g" || kind === "q") { const g = GRAMMAR_BY[id]; if (!g) return false; items = shuffle(g.bank).map(b => shuffleItemOpts({ ...b, skill: "grammar", src: "gram:" + id })); if (kind === "q") items = items.slice(0, 8); title = g.title; back = `#/grammar/${id}`; }
  else {
    const u = UNIT_BY[id]; if (!u) return false; track = u.track;
    const ws = unitWords(u); const pick = [...shuffle(ws.filter(isLearned)), ...shuffle(ws.filter(w => !isLearned(w)))].slice(0, 12);
    const gram = u.grammar.flatMap(gid => shuffle(GRAMMAR_BY[gid].bank).slice(0, u.grammar.length > 2 ? 2 : 3).map(b => shuffleItemOpts({ ...b, skill: "grammar", src: "gram:" + gid })));
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


/* ===== file: app-v43.js ===== */
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
  h = h.replace(/<a class="btn" href="#\/lesson\/[^"]+">Tiếp: [^<]+<\/a>/, "");
  return h.replace('<a class="btn quiet" href="#/today">Về Hôm nay</a>', `${next ? `<a class="btn" href="#/lesson/${next}">Tiếp theo của chặng</a>` : ""}<a class="btn" href="#/unit/${u.id}">Về chặng ${esc(u.code)}</a><a class="btn quiet" href="#/today">Về Hôm nay</a>`);
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
  return `<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>📖 Học phần <span class="muted small">${done}/${u.lessons.length} bài</span></h3>${unitWords(u).some(w => wStatus(w) === "new") ? `<button class="btn small" data-act="randLesson" data-u="${u.id}">🎲 Bài ngẫu nhiên (5 từ chưa học)</button>` : ""}</div>
    <p class="muted small">Mỗi bài dạy ${LESSON_SIZE} từ của một nhóm từ vựng trong chặng, cùng cấu trúc với các bài G và M: học từ, kiểm tra nghĩa, điền từ, từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng, phát âm và nói. Học xong, các từ vào lịch ôn tập và được tính vào tiến độ của Thư viện.</p>${core}${groups}</section>`;
}
const _viewUnit43 = viewUnit;
viewUnit = function () {
  const u = UNIT_BY[ROUTE.arg]; let h = _viewUnit43(); if (!u) return h;
  const sec = lessonsSection(u), re = /<section class="panel stack" style="margin-top:14px"><h3>📖 Học phần<\/h3>[\s\S]*?<\/section>/;
  h = re.test(h) ? h.replace(re, sec) : h.replace('<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤', sec + '<section class="panel stack" style="margin-top:14px"><div class="row between"><h3>🔤');
  return h.replace(/Học bài (v-[\w-]+)/, (m, id) => { const l = LESSON_BY[id]; return l ? `Học bài: ${l.title} (phần ${l.part}/${l.parts})` : m; });
};

/* ---------------- Today: lesson of the current unit ---------------- */
const _plan43 = planToday;
planToday = function () {
  let items = _plan43().filter(i => i.kind !== "lesson"); const add = [];
  for (const tr of ["gen", "med"]) {
    const u = currentUnit(tr); if (!u) continue; const lid = u.lessons.find(id => !S.lessons[id]?.done); if (!lid) continue; const l = LESSON_BY[lid];
    add.push({ kind: "lesson", track: tr, short: `học ${l.title}`, title: `Chặng ${u.code}: ${l.title}${l.gen ? ` (phần ${l.part}/${l.parts})` : ""}`, why: l.gen ? `${l.words.length} từ mới: ${l.words.map(w => w.w).join(", ")}.` : l.can, href: `#/lesson/${lid}`, cta: "Vào bài", est: l.min });
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


/* ===== file: app-v46.js ===== */
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

/* ---------------- Định nghĩa tiếng Anh (B1 trở lên) ---------------- */
const defOf = w => (typeof WORD_DEFS !== "undefined" && WORD_DEFS[w.key]) || "";
const _wordRow46 = wordRow;
wordRow = (w, a, b) => { const h = _wordRow46(w, a, b), d = defOf(w); return d ? h.replace(/(<div class="lw-vi">[^<]*<\/div>)/, `$1<div class="lw-def" lang="en">${esc(d)}</div>`) : h; };
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
  ["cm", "Chọn từ điền đoạn văn", "Tám chỗ trống, mỗi chỗ bốn lựa chọn. Kiểm tra từ vựng, kết hợp từ, cụm động từ, từ nối."],
  ["co", "Gõ từ điền đoạn văn", "Tám chỗ trống, mỗi chỗ gõ đúng một từ (mạo từ, giới từ, trợ động từ, đại từ quan hệ, từ nối)."],
  ["kw", "Viết lại câu", "Điền 2 đến 5 từ, gồm từ cho sẵn (không đổi dạng), để câu thứ hai cùng nghĩa với câu thứ nhất. Mỗi lượt lấy 10 câu."]
];
const EX_SETS = [], EX_BY = {};
function addSet(s) { EX_SETS.push(s); EX_BY[s.id] = s; }
function t5Item(q) { return shuffleItemOpts({ t: "c", q: q.q, opts: q.opts.slice(), a: q.a, why: q.why, skill: q.cat === "vocab" ? "vocab" : "grammar", src: "t5:" + q.cat }); }
if (D_T5.length >= 30) addSet({ id: "t5-exam", group: "t5", title: "Đề thi thử: điền từ vào câu", sub: "30 câu, lấy ngẫu nhiên từ cả ngân hàng, mỗi câu bốn lựa chọn", lvl: "B2", lvlText: "B1–B2", n: 30, build: () => shuffle(D_T5).slice(0, 30).map(t5Item) });
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
if (D_T6.length >= 4) addSet({ id: "t6-exam", group: "t6", title: "Đề thi thử: điền vào đoạn văn", sub: "4 đoạn, 16 chỗ trống, có chỗ chọn nguyên câu", lvl: "B2", lvlText: "B1–B2", n: 16, build: () => shuffle(D_T6).slice(0, 4).flatMap(p => gapItems(p, false)) });
D_T6.forEach((p, i) => addSet({ id: p.id, group: "t6", title: `${p.title}`, sub: `${capW(p.genre)}, 4 chỗ trống`, lvl: p.lvl, lvlText: p.lvl, n: 4, build: () => gapItems(p, false) }));
D_CM.forEach((p, i) => addSet({ unit: p.unit, id: p.id, group: "cm", title: `${p.title}`, sub: "8 chỗ trống, chọn từ", lvl: p.lvl, lvlText: p.lvl, n: 8, build: () => gapItems(p, false) }));
D_CO.forEach((p, i) => addSet({ unit: p.unit, id: p.id, group: "co", title: `${p.title}`, sub: "8 chỗ trống, gõ từ", lvl: p.lvl, lvlText: p.lvl, n: 8, build: () => gapItems(p, true) }));
["B1", "B2", "C1"].forEach(l => { const bank = D_KW.filter(q => q.lvl === l); if (bank.length) addSet({ id: "kw-" + l.toLowerCase(), group: "kw", title: `Viết lại câu, mức ${l}`, sub: `Ngân hàng ${bank.length} câu`, lvl: l, lvlText: l, n: Math.min(10, bank.length), build: () => shuffle(bank).slice(0, 10).map(q => ({ t: "w", s1: q.s1, key: q.key, start: q.start, ans: q.ans.slice(), why: q.why, skill: "grammar", src: "kw:" + q.id })) }); });
(typeof MED_EX !== "undefined" ? MED_EX : []).forEach(e => addSet({ unit: e.unit, id: e.id, group: "med", title: `${e.unit}: ${e.title}`, sub: `${e.items.length} câu về thuật ngữ và nội dung chương`, lvl: "B2", lvlText: e.unit, n: Math.min(15, e.items.length), build: () => shuffle(e.items).slice(0, 15).map(q => shuffleItemOpts({ t: "x", q: q.q, opts: q.opts.slice(), a: q.a, why: q.why, skill: "vocab", src: "med:" + e.id })) }));
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
isStudyRoute = () => _isStudy45() || (ROUTE.name === "reading" && !!ROUTE.arg) || (ROUTE.name === "writing" && !!ROUTE.arg);
const scoreChip = r => r ? `<span class="chip ${r.best >= 0.7 ? "good" : "acc"}">${Math.round(r.best * 100)}%</span>` : `<span class="chip">chưa làm</span>`;
const lk = (u, t) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
function viewExam() {
  const card = s => `<a class="gcard" href="#/practice/e-${s.id}"><div class="row between"><span class="lv lv-${s.lvl}">${s.lvlText}</span>${scoreChip(exRes("e-" + s.id))}</div><b>${esc(s.title)}</b><span class="muted small">${esc(s.sub)}</span></a>`;
  const mocks = EX_SETS.filter(x => x.id === "t5-exam" || x.id === "t6-exam"), rest = EX_SETS.filter(x => !mocks.includes(x));
  const done = EX_SETS.filter(x => exRes("e-" + x.id)).length, rdDone = RD_ALL.filter(x => exRes("d-" + x.id)).length, wrDone = WR_ITEMS.filter(x => exRes("w-" + x.id)).length;
  const tile = (href, ic_, title, sub, prog) => `<a class="ex-tile" href="${href}"><span class="ex-ic">${ic(ic_, 22)}</span><span class="grow"><b>${title}</b><br><span class="muted small">${sub}</span></span><span class="chip">${prog}</span></a>`;
  const group = ([g, name, desc]) => { const ss = rest.filter(x => x.group === g); if (!ss.length) return ""; const d = ss.filter(x => exRes("e-" + x.id)).length;
    return `<details class="ex-group" ${g === "cm" ? "open" : ""}><summary><span class="grow"><b>${name}</b><br><span class="muted small">${desc}</span></span><span class="chip">${d}/${ss.length}</span></summary><div class="topics">${ss.map(card).join("")}</div></details>`; };
  return `<section class="page-head"><h1>Luyện đề</h1><p class="lede">Các dạng bài thường gặp trong các kỳ thi tiếng Anh. Mỗi câu trắc nghiệm chỉ có một đáp án đúng, có giải thích bằng tiếng Việt. Đạt từ 70% là qua bộ đề.</p></section>
    <div class="ex-tiles">${tile("#/reading", "reading", "Đọc hiểu", `${RD_ALL.length} đoạn văn, mỗi đoạn 5 câu hỏi`, `${rdDone}/${RD_ALL.length}`)}${tile("#/writing", "exam", "Viết và nói", `${WR_ITEMS.length} đề, tự chấm theo tiêu chí`, `${wrDone}/${WR_ITEMS.length}`)}</div>
    ${mocks.length ? `<h2 class="sec-h">Đề thi thử</h2><p class="muted small" style="margin:-4px 0 10px">Làm liền một mạch, đúng số câu của đề thi thật.</p><div class="topics">${mocks.map(card).join("")}</div>` : ""}
    <h2 class="sec-h">Luyện theo dạng bài</h2>
    ${EX_GROUPS.map(group).join("")}
    ${EX_SETS.length ? "" : `<div class="empty"><p>Chưa có bộ đề nào.</p></div>`}
    <details class="ex-group"><summary><span class="grow"><b>Mẹo làm bài</b></span></summary><div class="stack" style="padding:6px 4px 10px">
      <p><b>Điền từ vào câu</b>: đọc cả câu rồi mới nhìn lựa chọn. Xác định chỗ trống cần loại từ gì trước khi nghĩ đến nghĩa.</p>
      <p><b>Điền đoạn văn</b>: đọc cả đoạn, vì nhiều chỗ trống phụ thuộc câu trước và câu sau.</p>
      <p><b>Viết lại câu</b>: nhận ra cấu trúc đang kiểm tra (bị động, tường thuật, điều kiện, so sánh…) rồi dùng đúng từ cho sẵn, không đổi dạng.</p></div></details>`;
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
  const panel = sel ? `<div class="panel stack gloss-panel"><div class="row between"><span><b lang="en" style="font-size:20px">${esc(sel.w)}</b> <span class="pos">${esc(sel.pos)}</span> ${hear(sel.w)}</span><button class="btn quiet small" data-act="rdWord" data-k="">Đóng</button></div><p style="margin:4px 0">${esc(sel.vi)}</p>${defOf(sel) ? `<p class="lw-def" lang="en">${esc(defOf(sel))}</p>` : ""}${sel.ex ? `<p class="example" lang="en" style="font-size:16px">${esc(sel.ex)}</p>` : ""}${inReview ? `<span class="chip good">Đã có trong lịch ôn</span>` : `<button class="btn" data-act="rdAdd" data-k="${esc(sel.key)}">Thêm vào lịch ôn</button>`}</div>` : `<p class="muted small">Chạm vào từ gạch chân để xem nghĩa.</p>`;
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

/* ---------------- Mục tiêu và tiến bộ (gộp trang Tiến bộ vào Mục tiêu) ---------------- */
const RADAR_TARGET = 100; /* mỗi kỹ năng đạt 100% sau 100 lượt luyện */
/* Biểu đồ ra-đa: mỗi trục là một kỹ năng, bán kính là mức hoàn thiện theo lượng luyện tập (lượt luyện, đúng hay sai đều tính). */
function radarPanel() {
  const ks = Object.entries(SKILLS), n = ks.length, cx = 170, cy = 150, R = 100;
  const pt = (i, r) => { const a = -Math.PI / 2 + 2 * Math.PI * i / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const cnt = ks.map(([k]) => S.log.filter(e => e.k === k).length), val = cnt.map(c => Math.min(1, c / RADAR_TARGET));
  const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon points="${ks.map((_, i) => pt(i, R * f).map(v => v.toFixed(1)).join(",")).join(" ")}" class="rd-ring"/>`).join("");
  const axes = ks.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="rd-axis"/>`; }).join("");
  const poly = val.map((v, i) => pt(i, R * v).map(x => x.toFixed(1)).join(",")).join(" ");
  const dots = val.map((v, i) => { if (!cnt[i]) return ""; const [x, y] = pt(i, R * v); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" class="rd-dot"/>`; }).join("");
  const labels = ks.map(([, name], i) => { const [x, y] = pt(i, R + 22), anchor = Math.abs(x - cx) < 8 ? "middle" : x > cx ? "start" : "end"; return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}" class="rd-lbl">${name}</text>`; }).join("");
  const rows = ks.map(([, name], i) => `<span class="rd-row"><span>${name}</span><b>${Math.round(val[i] * 100)}%</b><span class="muted small">${cnt[i]} lượt</span></span>`).join("");
  return `<section class="panel stack"><h3>Kỹ năng</h3>
    <svg class="radar" viewBox="-50 0 440 300" role="img" aria-label="Biểu đồ ra-đa mức hoàn thiện kỹ năng: ${ks.map(([, nm], i) => nm + " " + Math.round(val[i] * 100) + "%").join(", ")}">${rings}${axes}${cnt.some(c => c) ? `<polygon points="${poly}" class="rd-area"/>` : ""}${dots}${labels}</svg>
    <div class="rd-rows">${rows}</div>
    <p class="muted small">Mức hoàn thiện của mỗi kỹ năng tăng theo số lượt luyện tập: ${RADAR_TARGET} lượt là 100%. Mỗi câu hỏi, thẻ ôn hoặc bài tập bạn làm tính một lượt, dù đúng hay sai. Kỹ năng chưa luyện nằm ở tâm.</p></section>`;
}
/* Bảng nhiệt theo tháng và năm (thay cho các biểu đồ 7, 14 ngày và 12 tuần). */
const HM = { y: new Date().getFullYear(), m: new Date().getMonth() };
function heatmapPanel() {
  const days = new Date(HM.y, HM.m + 1, 0).getDate(), lead = (new Date(HM.y, HM.m, 1).getDay() + 6) % 7, todayKey = dayKey();
  let tot = 0, act = 0, best = 0; const cells = [];
  for (let i = 0; i < lead; i++) cells.push('<i class="hm-pad"></i>');
  for (let d = 1; d <= days; d++) {
    const t = new Date(HM.y, HM.m, d, 12).getTime(), m = (S.time.days[dayKey(t)] || 0) / 60, lv = m <= 0 ? 0 : m < 5 ? 1 : m < 15 ? 2 : m < 30 ? 3 : 4;
    tot += m; if (m >= 1) act++; best = Math.max(best, m);
    cells.push(`<i class="hm-d l${lv}${dayKey(t) === todayKey ? " today" : ""}" title="${d}/${HM.m + 1}/${HM.y}: ${Math.round(m)} phút"><b>${d}</b></i>`);
  }
  const MON_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const chips = Array.from({ length: 12 }, (_, i) => `<button class="exm-btn ${i === HM.m ? "on" : ""}" data-act="hmMonth" data-m="${i}" aria-pressed="${i === HM.m}">${LANG === "en" ? MON_EN[i] : "T" + (i + 1)}</button>`).join("");
  const now = new Date(), isNow = HM.y === now.getFullYear() && HM.m === now.getMonth();
  return `<section class="panel stack"><div class="row between"><h3 style="margin:0">Lịch học</h3><span class="row" style="gap:6px"><button class="btn quiet small" data-act="hmYear" data-d="-1" aria-label="Năm trước">‹</button><b>${HM.y}</b><button class="btn quiet small" data-act="hmYear" data-d="1" aria-label="Năm sau">›</button>${isNow ? "" : '<button class="btn quiet small" data-act="hmNow">Tháng này</button>'}</span></div>
    <div class="lv-filter" role="group" aria-label="Chọn tháng">${chips}</div>
    <div class="hm-grid" role="img" aria-label="Lịch học tháng ${HM.m + 1} năm ${HM.y}">${(LANG === "en" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]).map(x => `<span class="hm-h">${x}</span>`).join("")}${cells.join("")}</div>
    <div class="heat-legend muted small"><span>Ít</span><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>Nhiều</span></div>
    <p class="muted small">Tháng ${HM.m + 1}/${HM.y}: ${act} ngày có học, tổng ${Math.round(tot)} phút${best ? `, nhiều nhất ${Math.round(best)} phút một ngày` : ""}. Mục tiêu mỗi ngày ${S.settings.goal} phút.</p></section>`;
}
function progressBody() {
  const st = cardStats(), days = Object.values(S.time.days).filter(v => v >= 60).length;
  const tiles = [["clock", "#3158d4", fmtDur(S.time.total).replace(" phút", "p").replace(" giờ ", "g "), "tổng thời gian học"], ["cal", "#0f8c8c", days, "ngày có học"], ["flame", "#e0622f", streak(), "ngày liên tiếp"], ["trophy", "#1b7a45", st.mature, "thẻ đã vững"]]
    .map(([ic_, col, v, l]) => `<div class="stat"><span class="stat-ic" style="--ic:${col}">${ic(ic_, 18)}</span><b>${v}</b><span>${l}</span></div>`).join("");
  const gu = UNITS.filter(u => u.track === "gen"), mu = UNITS.filter(u => u.track === "med");
  const pctOf = us => us.length ? us.reduce((a, u) => a + Math.min(1, unitParts(u).pct), 0) / us.length : 0, passed = us => us.filter(u => unitParts(u).pct >= 0.8).length;
  const cur = gu.find(u => unitParts(u).pct < 0.8);
  const bar = (label, p, n) => `<div class="skill"><span>${label}</span><div class="bar"><i style="width:${Math.min(100, p * 100)}%"></i></div><span class="n">${n}</span></div>`;
  const path = `<section class="panel stack"><div class="row between"><h3 style="margin:0">Lộ trình</h3><a class="btn quiet small" href="#/path">Mở lộ trình</a></div>${bar("Phổ thông", pctOf(gu), `${passed(gu)}/${gu.length} chặng`)}${bar("Y khoa", pctOf(mu), `${passed(mu)}/${mu.length} chặng`)}<p class="muted small">${cur ? `Đang học chặng <b>${esc(cur.code)}</b>, ${esc(cur.vi)}. ` : "Bạn đã qua mọi chặng phổ thông. "}Qua chặng khi đạt 80%.</p></section>`;
  return `<div class="panel" style="margin-top:14px"><div class="grid4">${tiles}</div></div><div class="stack" style="margin-top:14px">${path}${radarPanel()}${heatmapPanel()}</div><h2 class="sec-h" style="margin-top:22px">Thiết lập mục tiêu</h2>`;
}
const _viewGoals47 = viewGoals;
viewGoals = function () {
  const h = _viewGoals47().replace("<h1>Mục tiêu học tập</h1>", "<h1>Mục tiêu và tiến bộ</h1>");
  const i = h.indexOf("</section>"); return i < 0 ? h : h.slice(0, i + 10) + progressBody() + h.slice(i + 10);
};
/* Trang Tiến bộ cũ đã gộp vào Mục tiêu: đường dẫn #/progress chuyển sang #/goals. */
viewProgress = function () { location.replace("#/goals"); return viewGoals(); };
NAV4.forEach(g => { g[1] = g[1].filter(x => x[0] !== "progress"); });
NAV4[0][1].forEach(x => { if (x[0] === "goals") x[1] = "Mục tiêu và tiến bộ"; });
Object.assign(ACT, {
  hmMonth(el) { HM.m = +el.dataset.m; render(); },
  hmYear(el) { HM.y += +el.dataset.d; render(); },
  hmNow() { const n = new Date(); HM.y = n.getFullYear(); HM.m = n.getMonth(); render(); }
});

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
    <section class="panel stack" style="margin-top:14px"><div class="row between"><h3 style="margin:0">7 ngày tới</h3><span class="muted small">${wk} thẻ</span></div><div class="bars">${fc.map((v, i) => `<div title="${v} thẻ"><span>${v}</span><i style="height:${Math.max(v ? 6 : 0, Math.round(v / max * 80))}px"></i><span>${i === 0 ? "Hôm nay" : new Date(Date.now() + i * DAY).toLocaleDateString(LOC(), { weekday: "short" })}</span></div>`).join("")}</div></section>
    <details class="panel rv-help" style="margin-top:14px"><summary><b>Chấm thế nào cho đúng</b> <span class="muted small">(phím 1 đến 4, cách để lật thẻ)</span></summary><div class="rv-grades">${grades.map(([k, l, c, d]) => `<div class="rv-g rv-g-${c}"><b><kbd>${k}</kbd> ${l}</b><span>${d}</span></div>`).join("")}</div><p class="muted small">Hãy chấm thật lòng; thuật toán dựa vào đó để hẹn lịch.</p></details>`;
};

/* Trang chủ: bỏ khối "Xem trước một từ" và "Lỗi sai thường gặp". */
const _afterRender45b = afterRender;
afterRender = function () {
  _afterRender45b();
  if (ROUTE.name === "today") document.querySelectorAll("#page h3").forEach(h => { if (/^(Xem trước một từ|Lỗi sai thường gặp)$/.test(h.textContent.trim())) { const box = h.closest(".panel") || h.closest("section"); if (box) box.remove(); } });
};


/* ---------------- Chặng giáo trình M1–M6: bài đọc và bài điền đoạn văn của chương ---------------- */
const _viewUnit47 = viewUnit;
viewUnit = function () {
  const h = _viewUnit47(), u = UNIT_BY[ROUTE.arg];
  if (!u || u.track !== "med" || !/^M\d$/.test(u.code)) return h;
  const rds = RD_ALL.filter(p => p.unit === u.code), cls = EX_SETS.filter(x => x.unit === u.code);
  if (!rds.length && !cls.length) return h;
  const row = (href, title, sub, r) => `<a class="item link" href="${href}"><span class="grow"><b lang="en">${esc(title)}</b><br><span class="muted small">${esc(sub)}</span></span>${scoreChip(r)}</a>`;
  return h + `<section class="panel stack track-med" style="margin-top:14px"><h3>📖 Đọc hiểu và bài tập của chương</h3><div class="list">
    ${rds.map(p => row("#/reading/" + p.id, p.title, `Bài đọc ${p.lvl}, ${wordCount(p.text)} từ, ${p.qs.length} câu hỏi`, exRes("d-" + p.id))).join("")}
    ${cls.map(x => row("#/practice/e-" + x.id, x.title, x.sub, exRes("e-" + x.id))).join("")}</div></section>`;
};

/* ===== PHẦN 2 (trước đây app-v44.js, khởi động app) ===== */
/* ============================================================
   v4.4 · Giọng đọc mới: bản ghi người thật cho từ đơn (Free Dictionary API,
   nguồn Wiktionary/Wikimedia Commons), xếp hạng giọng máy theo chất lượng,
   trang Giọng đọc, Thư viện 44 âm tiếng Anh.
   Nạp SAU app-v43.js; gọi initApp() ở cuối file.
   ============================================================ */
APP.version = "4.11.2"; APP.build = "01.10.26";
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
/* ---------------- Cài đặt thu gọn; Phát âm nằm ở Thư viện ---------------- */
NAV4.forEach(g => { g[1] = g[1].filter(x => x[0] !== "voices"); });
const _viewSettings48 = viewSettings;
viewSettings = function () {
  let h = _viewSettings48();
  const secs = [];
  h = h.replace(/<section class="panel[^"]*"[^>]*>([\s\S]*?)<\/section>/g, (m, inner) => {
    const t = /<h3>([\s\S]*?)<\/h3>/.exec(inner); if (!t) return m;
    const title = t[1].replace(/<[^>]+>/g, "").trim();
    let body = inner.replace(t[0], "");
    if (/^Giọng đọc/.test(title)) body += `<a class="item link" href="#/voices"><span class="grow"><b>Trang Giọng đọc</b><br><span class="muted small">Nghe thử, xếp hạng giọng, bật tắt giọng người thật</span></span></a>`;
    secs.push([title, body]); return `\u0000${secs.length - 1}\u0000`;
  });
  let k = 0;
  const parts = secs.map(([title, inner]) => `<details class="ex-group" ${k++ === 0 ? "open" : ""}><summary><span class="grow"><b>${title}</b></span></summary><div class="stack" style="padding:0 2px 12px">${inner}</div></details>`);
  return h.replace(/(\u0000\d+\u0000)+/, parts.join("")).replace(/\u0000\d+\u0000/g, "");
};
/* ---------------- Góc tác giả (thiết kế lại, gồm Nguồn tham khảo) ---------------- */
viewAbout = function () {
  const lnk = (u, t) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
  const cards = [["🎯", "Mục đích", "Phục vụ tự học ngoại ngữ lâu dài: tiếng Anh phổ thông làm nền tảng, tiếng Anh y khoa và học thuật phát triển dần theo năng lực."], ["🧭", "Triết lý", "Không phải học càng nhiều càng tốt, mà là học đúng thứ mình cần tiếp theo. Ưu tiên lượng kiến thức thu được trên mỗi phút học, không phải số bài đã hoàn thành."], ["🔧", "Luôn hoàn thiện", "Chương trình học, giao diện, thuật toán gợi ý, ôn tập, phát âm và nội dung chuyên ngành đều được thử nghiệm và cải tiến liên tục."]];
  const methods = [["🔀", "Hai mạch song song", "Mỗi mẫu ngữ pháp ở mạch phổ thông được dùng lại ở mạch y khoa cùng cấp độ, để một lần học phục vụ hai mục đích."], ["🔁", "Ôn tập ngắt quãng FSRS", "Thuật toán mã nguồn mở, hẹn ôn đúng lúc bạn sắp quên. Cần ít lượt ôn hơn thuật toán SM-2 cũ để đạt cùng mức ghi nhớ."], ["🩺", "Hỏi bệnh theo SOCRATES và ICE", "Phòng khám ảo mô phỏng các tiêu chí giao tiếp lâm sàng, gồm cả việc tìm hiểu quan điểm và mối lo của bệnh nhân."], ["🗣️", "Bám sát lỗi hay gặp", "Cặp âm tối thiểu, âm cuối, đuôi -s và -ed, mạo từ và những lỗi dịch từng chữ như “I am headache” được đưa vào ngay từ đầu."], ["✅", "Mỗi câu một đáp án", "Câu trắc nghiệm được viết và rà soát để chỉ có một đáp án hợp lệ, kèm giải thích bằng tiếng Việt."], ["📈", "Dựa trên việc bạn thực sự làm", "Mức hoàn thiện kỹ năng tính từ số lượt luyện thật; thời gian học chỉ tính khi bạn đang làm bài hoặc đọc."]];
  const src = (title, body, open) => `<details class="ex-group" ${open ? "open" : ""}><summary><span class="grow"><b>${title}</b></span></summary><div class="stack" style="padding:0 2px 12px">${body}</div></details>`;
  return `<section class="about-hero"><span class="brand-mark about-mark" aria-hidden="true">${logo()}</span><div><h1>Góc tác giả</h1><p class="lede" style="margin:4px 0 8px">Một dự án cá nhân của <b>${APP.author}</b>, xây dựng như một không gian học tập riêng và một thử nghiệm về cách công nghệ hỗ trợ việc tự học lâu dài.</p><div class="exrow"><span class="chip">Phiên bản ${APP.version}</span><span class="chip">${APP.build}</span><span class="chip">${APP.credit}</span></div></div></section>
    <section class="panel stack"><h2 style="margin:0">Học ngoại ngữ theo cách của chính mình.</h2>
      <p>Thay vì dùng nhiều công cụ rời rạc cho từ vựng, ngữ pháp, nghe, phát âm, giao tiếp và đọc hiểu, đây là một hệ thống thống nhất, dần thích nghi với chính người học.</p>
      <p>Ứng dụng ghi nhận những gì bạn đã biết, tìm ra phần còn thiếu, chọn điều đáng học tiếp theo và biến nó thành những phiên học ngắn, có bằng chứng, dùng được trong thực tế.</p></section>
    <div class="about-cards">${cards.map(([i, t, d]) => `<section class="panel stack"><span class="about-ic">${i}</span><h3 style="margin:0">${t}</h3><p class="muted">${d}</p></section>`).join("")}</div>
    <h2 class="sec-h">Phương pháp</h2>
    <div class="panel"><div class="list">${methods.map(([i, t, d]) => `<div class="item"><span class="ti">${i}</span><span class="grow"><b>${t}</b><br><span class="muted small">${d}</span></span></div>`).join("")}</div></div>
    <h2 class="sec-h">Nguồn tham khảo</h2>
    ${src("Nội dung và danh mục tham khảo", `<p>Toàn bộ từ vựng (ví dụ, nghĩa, định nghĩa tiếng Anh), bài học, câu hỏi, bài đọc, đề luyện, ca bệnh và đề viết nói do tác giả biên soạn cho ứng dụng, không sao chép từ đề thi hay sách.</p>
      <p>Cấp độ từ vựng đối chiếu với khung CEFR, có tham khảo NGSL và TOEIC Service List (Browne, Culligan và Phillips, CC BY-SA 4.0) và Oxford 3000 như danh mục kiểm tra, không sao chép định nghĩa. Ngữ pháp theo tiến trình của English Grammar Profile và British Council.</p>
      <p>Phòng khám ảo bám theo hướng dẫn NICE (NG84, NG136, NG59, NG226, CG95, hướng dẫn UTI của UKHSA) và tiêu chuẩn chẩn đoán đái tháo đường của WHO. Câu ngạn ngữ là câu truyền thống thuộc phạm vi công cộng.</p>`, true)}
    ${src("Phiên âm và giọng đọc", `<p>Phiên âm theo Cambridge Dictionary. Bản ghi phát âm người thật và phiên âm bổ sung lấy qua ${lnk("https://dictionaryapi.dev", "Free Dictionary API")} từ dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA. Khi không có bản ghi hoặc mất mạng, ứng dụng dùng giọng máy của thiết bị.</p>`)}
    ${src("Đặc tả đề thi chính thức", `<p class="muted small">Dùng để đối chiếu định dạng đề, không sao chép đề.</p><p>${lnk("https://www.ets.org/toeic/about/listening-reading.html", "TOEIC Listening & Reading (ETS)")} · ${lnk("https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading", "IELTS Academic Reading")} · ${lnk("https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/", "Cambridge B2 First")} · ${lnk("https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/", "Cambridge C1 Advanced")} · ${lnk("https://vstep.vnu.edu.vn/test-format/", "VSTEP.3-5 (ĐHQG Hà Nội)")}</p>`)}
    ${src("Nguồn mở để học thêm", `<p class="muted small">Giấy phép ghi theo trang của từng nguồn khi tra cứu ngày 01.10.2026; hãy đọc lại điều khoản trước khi sao chép.</p>
      <p><b>Dùng được kèm ghi công:</b> ${lnk("https://learningenglish.voanews.com", "VOA Learning English")} (nội dung VOA tự viết thuộc phạm vi công cộng) · ${lnk("https://medlineplus.gov", "MedlinePlus")} (trừ A.D.A.M. và chuyên khảo thuốc) · ${lnk("https://www.nhs.uk", "NHS")} (Open Government Licence v3.0, không dùng logo và hình) · ${lnk("https://www.gutenberg.org", "Project Gutenberg")} (sách thuộc phạm vi công cộng) · ${lnk("https://tatoeba.org", "Tatoeba")} (câu ví dụ, CC BY 2.0 FR).</p>
      <p><b>Phái sinh phải giữ cùng giấy phép (CC BY-SA):</b> ${lnk("https://simple.wikipedia.org", "Simple English Wikipedia")} · ${lnk("https://en.wikibooks.org", "Wikibooks")}.</p>
      <p><b>Chỉ để tham khảo, không sao chép:</b> đề thi chính thức của ETS, IELTS và Cambridge; English Vocabulary Profile; British Council LearnEnglish.</p>`)}
    <section class="panel stack about-quote"><p style="font-family:var(--en);font-size:22px;margin:0">“Built for learning. Improved through learning.”</p></section>`;
};
/* ---------------- Ngôn ngữ giao diện VI/EN ----------------
   Giao diện được viết bằng tiếng Việt; khi chọn EN, mỗi đoạn chữ hiển thị được tra trong từ điển I18N_EN (content-study.js)
   rồi thay bằng bản tiếng Anh. Câu có số hoặc tên xen vào được nhận dạng theo mẫu {1}, {2}. Đoạn nào chưa có bản dịch giữ tiếng Việt.
   Nội dung học (nghĩa tiếng Việt của từ, giải thích ngữ pháp trong bài) không bị dịch. */
const LOC = () => (LANG === "en" ? "en-US" : "vi-VN");
let LANG = (() => { try { return localStorage.getItem("tnk_lang") === "en" ? "en" : "vi"; } catch (e) { return "vi"; } })();
const I18N = (() => {
  const exact = new Map(), pats = [];
  for (const [k, v] of Object.entries(typeof I18N_EN !== "undefined" ? I18N_EN : {})) {
    if (/\{\d+\}/.test(k)) {
      const order = [];
      const re = "^" + k.split(/(\{\d+\})/).map(p => { const m = /^\{(\d+)\}$/.exec(p); if (m) { order.push(+m[1]); return "(.+?)"; } return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("") + "$";
      pats.push({ re: new RegExp(re, "s"), order, v, len: k.length });
    } else exact.set(k, v);
  }
  pats.sort((a, b) => b.len - a.len);
  return { exact, pats };
})();
const VI_RE = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
function trEn(text, d = 0) {
  const core = text.replace(/\s+/g, " ").trim(); if (!core) return null;
  let v = I18N.exact.get(core);
  if (v === undefined) for (const p of I18N.pats) {
    const m = p.re.exec(core); if (!m) continue;
    const args = {}; p.order.forEach((n, i) => { const raw = m[i + 1]; args[n] = d < 2 ? (trEn(raw, d + 1) ?? raw) : raw; });
    v = p.v.replace(/\{(\d+)\}/g, (x, n) => args[n] ?? x); break;
  }
  return v === undefined ? null : v;
}
const TR_SKIP = ".lw-vi, .example-vi, .spec-vi, textarea, input, script, style";
function trNode(n) {
  const t = n.nodeValue; if (!t || !t.trim()) return;
  const core = t.replace(/\s+/g, " ").trim(); if (!VI_RE.test(core) && !I18N.exact.has(core)) return;
  if (n.parentElement && n.parentElement.closest(TR_SKIP)) return;
  const v = trEn(t); if (v == null || v === core) return;
  n.nodeValue = (/^\s/.test(t) ? " " : "") + v + (/\s$/.test(t) ? " " : "");
}
function trTree(root) {
  if (!root) return;
  if (root.nodeType === 3) { trNode(root); return; }
  if (root.nodeType !== 1) return;
  const w = document.createTreeWalker(root, 4); const nodes = []; let n; while ((n = w.nextNode())) nodes.push(n);
  nodes.forEach(trNode);
  const els = root.querySelectorAll ? root.querySelectorAll("[title],[aria-label],[placeholder]") : [];
  [root, ...els].forEach(el => { if (!el.getAttribute) return; ["title", "aria-label", "placeholder"].forEach(a => { const v = el.getAttribute(a); if (v && VI_RE.test(v)) { const r = trEn(v); if (r != null) el.setAttribute(a, r); } }); });
}
const TR_OPTS = { childList: true, subtree: true, characterData: true };
let TR_OBS = null;
function trStart() {
  if (TR_OBS || typeof MutationObserver === "undefined") return;
  TR_OBS = new MutationObserver(recs => {
    if (LANG !== "en") return;
    TR_OBS.disconnect();
    recs.forEach(r => { if (r.type === "characterData") trNode(r.target); else r.addedNodes.forEach(trTree); });
    TR_OBS.observe(document.body, TR_OPTS);
  });
  TR_OBS.observe(document.body, TR_OPTS);
}
const _afterRender49 = afterRender;
afterRender = function () { _afterRender49(); document.documentElement.lang = LANG; if (LANG === "en") { trTree(document.getElementById("app")); trStart(); } };
const _toolbar49 = toolbar;
toolbar = function () {
  const grp = `<div class="tb-group" role="group" aria-label="Ngôn ngữ"><span class="tb-cap">Ngôn ngữ</span><button class="tb acc-tog" data-act="tbLang" title="Đổi ngôn ngữ giao diện giữa tiếng Việt và tiếng Anh" aria-label="Ngôn ngữ giao diện: ${LANG === "en" ? "tiếng Anh" : "tiếng Việt"}. Bấm để đổi"><span class="${LANG === "vi" ? "on" : ""}">VI</span><span class="${LANG === "en" ? "on" : ""}">EN</span></button></div>`;
  return _toolbar49().replace('<span id="timer"', grp + '<span id="timer"');
};
ACT.tbLang = function () { LANG = LANG === "en" ? "vi" : "en"; try { localStorage.setItem("tnk_lang", LANG); } catch (e) {} render(); };
if (LANG === "en") trStart();
initApp();
if (syncCfg().token && syncCfg().auto !== false) setTimeout(() => syncNow(false), 1500);
