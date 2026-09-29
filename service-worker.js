const CACHE_NAME = 'invenora-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './script.js',
  './style.css',
  './manifest.json',
  './invenora-logo.png'
];

// Install Service Worker & Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Meng-cache file aplikasi');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetching assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Mengembalikan aset dari cache jika ada, atau mengambil dari jaringan
      return response || fetch(event.request);
    })
  );
});

// Aktivasi Service Worker & Membersihkan cache lama jika ada update
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});