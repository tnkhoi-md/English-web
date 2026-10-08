/* Tnkhoi English: chế độ ngoại tuyến.
   Mỗi lần phát hành, đổi VERSION (cùng số với ?v= trong index.html) để máy xóa bộ nhớ đệm cũ. */
const VERSION = "4.48.17";
const CORE = "tnk-core-" + VERSION, AUDIO = "tnk-audio-v1", FONTS = "tnk-fonts-v1";
const PRECACHE = [
  "./", "index.html", "styles.css?v=" + VERSION, "content-lessons.js?v=" + VERSION, "content-morph2.js?v=" + VERSION, "content-library.js?v=" + VERSION,
  "content-study.js?v=" + VERSION, "content-gx.js?v=" + VERSION, "content-grammar2.js?v=" + VERSION, "content-grammar3.js?v=" + VERSION, "content-grammar4.js?v=" + VERSION, "content-defs-vi.js?v=" + VERSION, "content-examples.js?v=" + VERSION, "content-vocab2.js?v=" + VERSION, "content-units-med.js?v=" + VERSION, "content-med2.js?v=" + VERSION, "content-spec.js?v=" + VERSION, "content-ipa.js?v=" + VERSION, "content-ipa2.js?v=" + VERSION, "content-patch.js?v=" + VERSION, "content-listen2.js?v=" + VERSION, "content-listen3.js?v=" + VERSION, "content-reading2.js?v=" + VERSION, "content-reading3.js?v=" + VERSION, "content-speaking.js?v=" + VERSION, "content-dictation.js?v=" + VERSION, "audio-map.js?v=" + VERSION, "app.js?v=" + VERSION,
  "manifest.webmanifest", "logo.svg", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE);
    await Promise.all(PRECACHE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => { })));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (![CORE, AUDIO, FONTS].includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

/* Safari yêu cầu phản hồi 206 khi trình phát gửi tiêu đề Range, nên cắt từ file đã lưu. */
async function ranged(req, res) {
  const h = req.headers.get("range"); if (!h || !res || res.status !== 200) return res;
  const buf = await res.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(h) || [];
  const s = m[1] ? +m[1] : 0, e = Math.min(m[2] ? +m[2] : buf.byteLength - 1, buf.byteLength - 1);
  return new Response(buf.slice(s, e + 1), { status: 206, statusText: "Partial Content", headers: { "Content-Type": res.headers.get("Content-Type") || "audio/mpeg", "Content-Range": `bytes ${s}-${e}/${buf.byteLength}`, "Content-Length": String(e - s + 1) } });
}

async function audioFirst(req) {
  const c = await caches.open(AUDIO), url = req.url;
  let hit = await c.match(url);
  if (!hit) {
    try { const net = await fetch(url); if (net.ok) { await c.put(url, net.clone()); hit = net; } else return net; }
    catch (err) { return new Response("", { status: 504, statusText: "Offline" }); }
  }
  return ranged(req, hit);
}

async function swr(req, cacheName, ignoreSearch) {
  const c = await caches.open(cacheName);
  const hit = await c.match(req, { ignoreSearch: !!ignoreSearch });
  const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || new Response("", { status: 504, statusText: "Offline" });
}

async function pageFirst(req) {
  const c = await caches.open(CORE);
  try { const r = await fetch(req); if (r && r.ok) { c.put("index.html", r.clone()); } return r; }
  catch (err) { return (await c.match("index.html", { ignoreSearch: true })) || (await c.match("./")) || new Response("Ngoại tuyến", { status: 503 }); }
}

self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    if (/\.mp3$/i.test(u.pathname)) return e.respondWith(audioFirst(req));
    if (req.mode === "navigate") return e.respondWith(pageFirst(req));
    return e.respondWith(swr(req, CORE, false));
  }
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") return e.respondWith(swr(req, FONTS, false));
});
