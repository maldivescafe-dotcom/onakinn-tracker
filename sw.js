const CACHE_NAME = 'onakinn-v11';
const ASSETS = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './img/level1.jpg',
  './img/level2.jpg',
  './img/level3.jpg',
  './img/level4.jpg',
  './img/level5.jpg',
  './img/level6.jpg',
  './img/level7.jpg',
  './img/level8.jpg',
  './img/level9.jpg',
  './img/level10.jpg',
  './img/level11.jpg',
  './img/level12.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
