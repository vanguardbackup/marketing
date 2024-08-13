const CACHE_NAME = 'vanguard-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/404.html',
    '/_redirects',
    '/android-chrome-192x192.png',
    '/android-chrome-256x256.png',
    '/apple-touch-icon.png',
    '/browserconfig.xml',
    '/dashboard.png',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/mstile-150x150.png',
    '/og-image.jpg',
    '/phone-render.png',
    '/phone-render-two.png',
    '/robots.txt',
    '/safari-pinned-tab.svg',
    '/site.webmanifest',
    '/sitemap.xml',
    '/twitter-image.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});