importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.googleAnalytics.initialize();
    workbox.core.setCacheNameDetails({
        prefix: 'zp',
        suffix: 'v0',
        precache: 'custom-precache-name',
        runtime: 'custom-runtime-name'
    });
    workbox.routing.registerRoute(
        /.*\.(?:png|jpg|jpeg|svg|gif)/g,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'my-image-cache',
        })
    );
    workbox.routing.registerRoute(
        "/",
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'my-welcome-cache',
        })
    );
    workbox.routing.registerRoute(
        "/index.html",
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'my-welcome-cache',
        })
    );
    workbox.routing.registerRoute(
        /.*\.(?:js)/g,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'my-js-cache',
        })
    );
    workbox.routing.registerRoute(
        /.*\.(?:css)/g,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'my-css-cache',
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}