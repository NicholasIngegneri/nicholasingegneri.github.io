'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "538f2e065745c3565ebf8f7470e638c7",
"assets/assets/images/1.png": "b67a1894c9aed9c70a9b23a224cb1761",
"assets/assets/images/1A.png": "c97ad7f893088071a2bdc8450a0d5cc1",
"assets/assets/images/1B.png": "d61573f20248a5def8d5cafdbecbd27b",
"assets/assets/images/2.0x/1.png": "b67a1894c9aed9c70a9b23a224cb1761",
"assets/assets/images/2.0x/1A.png": "c97ad7f893088071a2bdc8450a0d5cc1",
"assets/assets/images/2.0x/1B.png": "d61573f20248a5def8d5cafdbecbd27b",
"assets/assets/images/2.0x/2.png": "e3eafce77c618d646671e93d85fcc23d",
"assets/assets/images/2.0x/2A.png": "4b708695b1926f5af7cba8d35f805b78",
"assets/assets/images/2.0x/2B.png": "986d797e6b719be184ff08fcbf6bc636",
"assets/assets/images/2.0x/3.png": "e2051a98487308e094c00d085099998d",
"assets/assets/images/2.0x/3A.png": "7199e0fc2396dadf250d5e208a5f64d7",
"assets/assets/images/2.0x/3B.png": "6d4336ec6eafe847fe2657c23b15985f",
"assets/assets/images/2.0x/4.png": "1a6f8d5b26ebd939f970b5ba211fde62",
"assets/assets/images/2.0x/4A.png": "b6d1bbc2e066fb25dd5f15c1d53817c0",
"assets/assets/images/2.0x/4B.png": "5a2578ff5335fc17af983d8c93f5cd78",
"assets/assets/images/2.0x/5.png": "98ce91249c7151eb4edadbaa98937674",
"assets/assets/images/2.0x/logo.png": "ca28ea8723169cb26b6f2d3b36c545fe",
"assets/assets/images/2.png": "e3eafce77c618d646671e93d85fcc23d",
"assets/assets/images/2A.png": "4b708695b1926f5af7cba8d35f805b78",
"assets/assets/images/2B.png": "986d797e6b719be184ff08fcbf6bc636",
"assets/assets/images/3.0x/1.png": "b67a1894c9aed9c70a9b23a224cb1761",
"assets/assets/images/3.0x/1A.png": "c97ad7f893088071a2bdc8450a0d5cc1",
"assets/assets/images/3.0x/1B.png": "d61573f20248a5def8d5cafdbecbd27b",
"assets/assets/images/3.0x/2.png": "e3eafce77c618d646671e93d85fcc23d",
"assets/assets/images/3.0x/2A.png": "4b708695b1926f5af7cba8d35f805b78",
"assets/assets/images/3.0x/2B.png": "986d797e6b719be184ff08fcbf6bc636",
"assets/assets/images/3.0x/3.png": "e2051a98487308e094c00d085099998d",
"assets/assets/images/3.0x/3A.png": "7199e0fc2396dadf250d5e208a5f64d7",
"assets/assets/images/3.0x/3B.png": "6d4336ec6eafe847fe2657c23b15985f",
"assets/assets/images/3.0x/4.png": "1a6f8d5b26ebd939f970b5ba211fde62",
"assets/assets/images/3.0x/4A.png": "b6d1bbc2e066fb25dd5f15c1d53817c0",
"assets/assets/images/3.0x/4B.png": "5a2578ff5335fc17af983d8c93f5cd78",
"assets/assets/images/3.0x/5.png": "98ce91249c7151eb4edadbaa98937674",
"assets/assets/images/3.0x/logo.png": "ca28ea8723169cb26b6f2d3b36c545fe",
"assets/assets/images/3.png": "e2051a98487308e094c00d085099998d",
"assets/assets/images/3A.png": "7199e0fc2396dadf250d5e208a5f64d7",
"assets/assets/images/3B.png": "6d4336ec6eafe847fe2657c23b15985f",
"assets/assets/images/4.png": "1a6f8d5b26ebd939f970b5ba211fde62",
"assets/assets/images/4A.png": "b6d1bbc2e066fb25dd5f15c1d53817c0",
"assets/assets/images/4B.png": "5a2578ff5335fc17af983d8c93f5cd78",
"assets/assets/images/5.png": "98ce91249c7151eb4edadbaa98937674",
"assets/assets/images/logo.png": "ca28ea8723169cb26b6f2d3b36c545fe",
"assets/FontManifest.json": "ff49a56e6c3435cfeffa8317cc699e90",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0efbbdda5c54ad9e32250d04cbc8ef73",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1f322febe75897e4979885a8b002d86f",
"/": "1f322febe75897e4979885a8b002d86f",
"main.dart.js": "6d9458304f4b63ee304cfce0425f53e5",
"manifest.json": "d4ee38b3d14d6242a178bf39af5c3037"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
