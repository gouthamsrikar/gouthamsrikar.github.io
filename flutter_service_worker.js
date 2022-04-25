'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b728fdba657a42e8309749b05e01202b",
"assets/assets/anims/lottie/button_arrow.json": "bc55c60bb198283e999c78df333aa035",
"assets/assets/anims/lottie/button_dots.json": "ed546ef4787ec5391dfdecead45508c6",
"assets/assets/anims/lottie/down_complete.json": "fd21440013ae4126a23a8b5d195f7687",
"assets/assets/anims/lottie/down_ending.json": "45cd7687d7788027a327f22d3d571ce6",
"assets/assets/anims/lottie/down_starting.json": "a6529ebf613efbe471ddbcaa35cd67ca",
"assets/assets/anims/lottie/loading_animation.json": "bc55c60bb198283e999c78df333aa035",
"assets/assets/anims/lottie/upload_loading.json": "c3424b709fa24c2b9d43289ea705ab9e",
"assets/assets/anims/lottie/upload_successful.json": "19c53e2fa3a265bcac47a6ff9a0e16fa",
"assets/assets/anims/lottie/upload_unsuccessful.json": "0c1f6c21c8ecea5f8c7b0dcb92be3c47",
"assets/assets/anims/lottie/up_complete.json": "645febbe55c1c12db95c1c870b4ed6a9",
"assets/assets/anims/lottie/up_ending.json": "d3d4c5c3a4141c55132cce354359c058",
"assets/assets/anims/lottie/up_starting.json": "ff54f7cea0f021fa64eaef15bce056b5",
"assets/assets/anims/rive/cat%2520empty%2520state.riv": "43cd683beb209b4a6d54f5c5eba3e0f4",
"assets/assets/anims/rive/cat_anim.riv": "43cd683beb209b4a6d54f5c5eba3e0f4",
"assets/assets/anims/rive/new_file(1).riv": "05dafc545543e336fd8289b05030a7be",
"assets/assets/anims/rive/new_file.riv": "d0fde7eff12d89a2b9b72947c9bc8f6d",
"assets/assets/anims/rive/rive_load.riv": "3fb897cab9abc75896dec22aa27f772b",
"assets/assets/anims/rive/selector_button.riv": "2fa3bc66e3859380be79c6cfa0db1ff5",
"assets/assets/anims/rive/tree.riv": "da420286c433babd9ce0a7ff0d78b462",
"assets/assets/anims/rive/up_and_down.riv": "4d2b9fd02b702ef61c13d03375c0f6b1",
"assets/assets/fonts/circular/circular_air/circularair_light.ttf": "809eb889c78777517a6d252fd1f76eac",
"assets/assets/fonts/circular/circular_std/circular_std_black.ttf": "f1a22f6f15d272c7aa56da8b2c91f5e5",
"assets/assets/fonts/circular/circular_std/circular_std_bold.ttf": "961a181da27e7cbc072ec2fb5bbfe2a9",
"assets/assets/fonts/circular/circular_std/circular_std_bold_italic.ttf": "82e5b6ce5cb6f9942bdd08543ef2c864",
"assets/assets/fonts/circular/circular_std/circular_std_book.ttf": "860c3ec7bbc5da3e97233ccecafe512e",
"assets/assets/fonts/circular/circular_std/circular_std_medium.ttf": "9475d6a0b79c164f9f605673714e75d9",
"assets/assets/fonts/gilroy/Gilroy-Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/assets/fonts/gilroy/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/assets/fonts/gilroy/Gilroy-Heavy.ttf": "2b57bf6ef2611353b4890d83fe3973c6",
"assets/assets/fonts/gilroy/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/gilroy/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/gilroy/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/gifs/lock_unlock.gif": "c9ada94544cfbc5cf82434390ab04148",
"assets/assets/icons/cross.svg": "cb7859f2ae9576db1ad5bdea59f4f05d",
"assets/assets/icons/pdf.svg": "bdc2ac7d149f65a90f69d1b463c30f36",
"assets/assets/icons/search.svg": "42170ca3128a74c9e1d7e6ab2294c7fe",
"assets/assets/icons/settings.svg": "66db42526c004671560c1c085e54c36d",
"assets/assets/icons/small_right_arrow.svg": "8e4b988c5104d623b18769cf9fec6086",
"assets/assets/sounds/instruction_sample.mp3": "4b4015adccd353589ded53cc5a4def3c",
"assets/assets/svg/add.svg": "88897e7441dfd068ba3fa6e6e7025550",
"assets/assets/svg/back_arrow.svg": "9d5e8b376c65824b0538a74033b95abf",
"assets/assets/svg/calendar.svg": "5ed9be3d41ded2955f415c590843ff6d",
"assets/assets/svg/camera.svg": "5c31e6e2c2f1333e224cf153741c0afc",
"assets/assets/svg/down_arrow.svg": "50761779bd1663b328e54ba837d6666d",
"assets/assets/svg/down_arrow_2.svg": "4cd81ca6a95cf96b53b38289d882ded8",
"assets/assets/svg/fractal_flower.svg": "4850944613a25088125eefae2173a37f",
"assets/assets/svg/minus.svg": "0288ec6188ebd6d6d80b4964a0c070ef",
"assets/assets/svg/next_arrow.svg": "3e006ba066c3a1354a1b66d427460eec",
"assets/assets/svg/plus.svg": "4e6158d46ad429e7ab8f38b4f1199f25",
"assets/assets/svg/recents.svg": "03203de5788f034eeafbafc0db162f06",
"assets/assets/svg/tick.svg": "a33c10a58e7a81a211cb6c02ec0398fc",
"assets/assets/svg/upload.svg": "3fd85e97371be6a95a1ebf4f9d53ca54",
"assets/assets/visuals/farmako_logo_dark.svg": "7a66ab40efbdb2af0d227ed24ba16e7e",
"assets/assets/visuals/farmako_logo_light.svg": "0b7bf0477411bf7d283444b4ceafebc2",
"assets/assets/visuals/full_farmako_logo_dark.svg": "191ce8c49a71f27cbffab2e67f16aa17",
"assets/assets/visuals/full_farmako_logo_light.svg": "c29a19696913d8f01884f8893b6fd111",
"assets/FontManifest.json": "5fa921db5e9b18d5648df31886beff5c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "1ddaad35d094c8d41d2cd0447fb55553",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c98bf5f973a1ad239a638e0fe8be5f05",
"/": "c98bf5f973a1ad239a638e0fe8be5f05",
"main.dart.js": "376ddfc596016f08cce9c7a11d3cf8c3",
"manifest.json": "58dbd72e78c7274af85fe16f323eb805",
"version.json": "56cef158def80575415352ab5f700be0"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
