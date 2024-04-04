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
			"../../Assets/media/DGAKSSHRR-Icon_72.png",
			"../../Assets/media/DGAKSSHRR-Icon_96.png",
			"../../Assets/media/DGAKSSHRR-Icon_128.png",
			"../../Assets/media/DGAKSSHRR-Icon_144.png",
			"../../Assets/media/DGAKSSHRR-Icon_192.png",
			"../../Assets/media/DGAKSSHRR-Icon_256.png",
			"../../Assets/media/DGAKSSHRR-Icon_512.png",
			"../../Assets/media/DGAKSSHRR-Logo.svg",
			"../../Assets/media/DGAKSSHRR-TagLine.svg",
			"../../Assets/media/DGAKSSHRR-Title.svg",
		]);
	}));
});

// WebApp Activation
self.addEventListener('activate', Evnt =>
{
    Evnt.waitUntil(caches.keys().then(keys =>
	{
		return Promise.all(keys.filter(key => key !== "JSXDGX").map(key => caches.delete(key)));
	}));
});

// WebApp Cache Refresh
self.addEventListener('fetch', Evnt => {
    Evnt.respondWith(caches.match(Evnt.request).then(cacheRes =>
	{
		return cacheRes || fetch(Evnt.request);
	}));
});