'use strict';

// CODELAB: Önbelleğe alınmış dosyaların herhangi biri değiştiğinde, önbellek adlarını güncelle.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Buraya önbelleğe alınacak dosyaların listesini ekleyin.
const FILES_TO_CACHE = [
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Yükle');
  // CODELAB: Buraya statik kaynakları önbellekleyin.

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Etkinleştir');
  // CODELAB: Önbelleğe alınmış önceki verileri sil.

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Getir', evt.request.url);
  // CODELAB: Bu olay işleyicisinin kodlarını ekleyin.

});
