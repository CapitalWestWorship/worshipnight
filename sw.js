// Keeps a copy of the site on each phone after the first visit,
// so the lyrics still work if the connection drops.
// Always tries the network first, so your edits show up right away.
const CACHE = 'lyrics-v2';

// Saved copies are stored without the ?t= tag, so each file is kept only once.
function keyFor(req) {
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return req;
  url.search = '';
  return url.href;
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(['./', './index.html'])).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  // Remove copies saved by older versions of this file.
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const key = keyFor(req);
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(key, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(key).then(
          (hit) => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});
