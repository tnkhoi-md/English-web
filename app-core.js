/* ============================================================
   CORE · utils, state, migration, FSRS, time, speech
   ============================================================ */
const APP = { name: "Tnkhoi English", version: "3.0", build: "29.9.26", author: "Nguyên Khôi", credit: "© KhoiTN-MD" };
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
const IDLE_MS = 120000;
function markActive() { TT.input = Date.now(); }
["pointerdown", "keydown", "touchstart", "wheel", "input"].forEach(ev => addEventListener(ev, markActive, { passive: true, capture: true }));
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
  const counting = isStudyRoute() && !document.hidden && (now - TT.input < IDLE_MS || SPEECH.busy);
  if (counting) { TT.acc += dt; TT.session += dt; const whole = Math.floor(TT.acc); if (whole >= 1) { TT.acc -= whole; addSeconds(whole); } }
  if (counting !== TT.counting) { TT.counting = counting; }
  paintTimer();
  if (dirty && now - TT.saveAt > 15000) { TT.saveAt = now; save(); }
}, 1000);
document.addEventListener("visibilitychange", () => { TT.last = Date.now(); if (document.hidden) { save(); stopSpeech(); } });
addEventListener("pagehide", save);

/* ---------------- Speech: TTS hai giọng, nhận dạng giọng nói, ghi âm ---------------- */
const SPEECH = { voices: [], busy: false, token: 0 };
const TTS_OK = "speechSynthesis" in window;
function loadVoices() { if (!TTS_OK) return; SPEECH.voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)); }
if (TTS_OK) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (ROUTE && ROUTE.name === "settings") render(); }; }
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
