// Oddiy service worker: sahifa doim tarmoqdan olinadi (eski versiya qolib ketmaydi),
// internet bo'lmasa qisqa xabar ko'rsatiladi.
const OFFLINE = '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;display:grid;place-items:center;min-height:100vh;background:#100b20;color:#eee;font-family:sans-serif;text-align:center"><div><h2>Internet yo\'q</h2><p>Ulanishni tekshirib, qayta urinib ko\'ring.</p><button onclick="location.reload()" style="padding:12px 22px;border:0;border-radius:10px;background:#7c5cff;color:#fff;font-size:16px">Qayta urinish</button></div>';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE, {headers: {'Content-Type': 'text/html; charset=utf-8'}})));
  }
});
