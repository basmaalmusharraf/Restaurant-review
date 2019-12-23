var cacheN= 'mws-static-v2';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheN).then(function(cache) {
      return cache.addAll([
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        '/index.html',
        '/restaurant.html',
        'css/styles.css',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
      ]);
    })
  );
});
// https://codelabs.developers.google.com/codelabs/offline/#7
self.addEventListener('fetch', function(event) {

  console.log(event.request.url);

});

// https://codelabs.developers.google.com/codelabs/offline/#7
self.addEventListener('fetch', function(event) {

  console.log(event.request.url);

  event.respondWith(

    caches.match(event.request).then(function(response) {

      return response || fetch(event.request);

    })
  );

});
