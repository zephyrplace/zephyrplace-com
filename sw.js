importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.core.setCacheNameDetails({
        prefix: 'zp',
        suffix: 'v1',
        precache: 'custom-precache-name',
        runtime: 'custom-runtime-name'
    });
    workbox.precaching.precacheAndRoute([
        { url: '/index.html', revision: '383676' },
    ]);
    workbox.googleAnalytics.initialize();
    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        // Use cache but update in the background ASAP
        workbox.strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'css-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        // Use the cache if it's available
        workbox.strategies.cacheFirst({
            // Use a custom cache name
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}