/*
	****************** JSX STUDIO *******************
	***              			                  ***
	***     Author : https://github.com/JSX99     ***
	***              			                  ***
	*** (C) 2024 JSX STUDIO, All Rights Reserved. ***
	***              			                  ***
	*************************************************
*/

// JS-StrictMode
"use strict";

// WebApp Install Event
self.addEventListener('install', iEvnt =>
{
	iEvnt.waitUntil(caches.open("JSXDGX").then(cache =>
	{
		cache.addAll([
			"../../",
			"../../DGX.html",
			"../../Assets/fonts/Roboto-Latin.woff2",
			"../../Assets/fonts/Roboto-LatinExtended.woff2",
			"../../Assets/js/html2canvas.js",
			"../../Assets/media/DGAKSSHRR-Logo.svg",
			"../../Assets/media/DGAKSSHRR-TagLine.svg",
			"../../Assets/media/DGAKSSHRR-Title.svg",
		]);
	}));
});

// WebApp Activation
// self.addEventListener('activate', event =>
// {
//     event.waitUntil(
//         caches.keys().then(keys =>
// 		{
//             return Promise.all(keys.map(function (key, i)
// 			{
//                 if (key !== "JSXDGX") {
//                     return caches.delete(keys[i]);
//                 }
//             }))
//         })
//     )
// });

// self.addEventListener('activate', evt => {
//     evt.waitUntil(
//         caches.keys().then(keys => {
//             return Promise.all(keys
//                 .filter(key => key !== staticCacheName)
//                 .map(key => caches.delete(key))
//             );
//         })
//     );
// });

// WebApp Cache Refresh
self.addEventListener('fetch', Evnt => {
    Evnt.respondWith(
        caches.match(Evnt.request).then(cacheRes => {
            return cacheRes || fetch(Evnt.request);
        })
    );
});