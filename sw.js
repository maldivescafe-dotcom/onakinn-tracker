const CACHE_NAME = 'energy-v12';
const ASSETS = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './img/level1.jpg',  './img/level1f.jpg',
  './img/level2.jpg',  './img/level2f.jpg',
  './img/level3.jpg',  './img/level3f.jpg',
  './img/level4.jpg',  './img/level4f.jpg',
  './img/level5.jpg',  './img/level5f.jpg',
  './img/level6.jpg',  './img/level6f.jpg',
  './img/level7.jpg',  './img/level7f.jpg',
  './img/level8.jpg',  './img/level8f.jpg',
  './img/level9.jpg',  './img/level9f.jpg',
  './img/level10.jpg', './img/level10f.jpg',
  './img/level11.jpg', './img/level11f.jpg',
  './img/level12.jpg', './img/level12f.jpg',
  './bg-energy-banner.jpg',
  './act-workout.jpg',   './act-shower.jpg',    './act-yoga.jpg',
  './act-meditation.jpg','./act-tantra.jpg',    './act-cleaning.jpg',
  './act-toilet.jpg',    './act-earlyrise.jpg', './act-gratitude.jpg',
  './act-smile.jpg',     './act-veggies.jpg',   './act-sowaka.jpg',
  // アクティビティ専用動画（各フォルダに追加したらここにも追記）
  './videos/workout/act-workout1.mp4',
  './videos/cold_shower/act-shower1.mp4',
  './videos/yoga/act-yoga1.mp4',
  './videos/meditation/act-meditation1.mp4',
  './videos/tantra/act-tantra1.mp4',
  './videos/cleaning/act-cleaning1.mp4',
  './videos/toilet/act-toilet1.mp4',
  './videos/early_rise/act-earlyrise1.mp4',
  './videos/gratitude/act-gratitude1.mp4',
  './videos/smile/act-smile1.mp4',
  './videos/veggies/act-veggies1.mp4',
  './videos/sowaka/act-sowaka.mp4',
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
