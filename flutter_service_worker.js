'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8b68b3edfa5d26184f6689729a866b81",
"index.html": "8c83dbcebb5c03629b16d03fef171e96",
"/": "8c83dbcebb5c03629b16d03fef171e96",
"main.dart.js": "aedcce707f37b0a4c979ca75a5af787c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ac0772c75b98cf2e5ea10096e7e1f94",
".git/config": "46981dc8c2ed238fc0a20ac9e2ef587f",
".git/objects/50/4e7754b7a6ecdce4aadf2b321899191b69c5bf": "09de7fb52402c53f12653e2e43824f3a",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/3c/98edae5439f4b9333dfb4b1ba990268213f72e": "89f2f77eacffd395ddf4ba0cdf05e3d4",
".git/objects/5f/02ecc69e711bf34a66c7c5c39ca4ad2e7ff011": "4c6e81ec1bab309205ea83e15705df08",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/b2/108e1d9ef4eec74cd4c230604c63f1eb04b33e": "c591d5ed0d612dd5e6cbd5854a9a8ff9",
".git/objects/ac/3ad468b023f58f0ad68633817e405fc8d40548": "7d6d495fd13b853e13cefe48d45f7be9",
".git/objects/d7/17812a69bc2d7bd812b2ad48cdb2a88f9b89e0": "ae48fa42a20b9f0fc9b8e787c927cb29",
".git/objects/f3/3dcea2f86ee0ae098f7f5e7f8c698899446ba1": "9b0a4c839d2357ad4481d598ca0dd3b8",
".git/objects/c0/6f5daabe2d1edd64a3e2c850b9bf6fbaa21097": "57b7300ce171f301feae24ef47204ab8",
".git/objects/c9/29ce9b63d64f308673d1b39fbc77a758ab6979": "dddb6950d4e1fbe48be17c33ac4cf50d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c8/b10776e405045a65427581e36c23ee5730e1d5": "20a3487dd34219a98023b21e5f7312fb",
".git/objects/c8/c4030a589c9f0d46ae54ba8769784da7bef23f": "cf473d7b289cee23a02fa81c7a93b032",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/04c790ff5047bdfe61617d67849dc6c66bbb20": "c229ebac91ebd1bf1d4abf45d95dcd8a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/23c1d4f9110fb4c83098584eca9f4d08913962": "f9fcc1abcb9c98b37ef32a60689b0f13",
".git/objects/75/4df7c87eba914187c487829dc902779501b34e": "ff6eea608ac7ab5a27b279c76f250477",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/c1f7b22ac42c3bc4d7954564c2a762c6e09995": "c6487c5f6291e762d42f25fda46a8755",
".git/objects/6b/eb6c98eab8e1b65f187671c6c49601663392c4": "6d0768f4196623698f643dad1d0ad890",
".git/objects/62/41f42588fa50aea1d41ce7896f7d7eb2a95c8d": "8728f60eb541ae1be7d4ae89a7e8e818",
".git/objects/06/47667cc436f29af5c6aa9207aa0a931b941e67": "6b44555ffbaf3f96611a9073961c2b2a",
".git/objects/99/a29075a7dff088841a26c2bc5029a9f45fbfec": "bf48740df57ff43a4031b021e9399981",
".git/objects/63/842b70a7bae3e53eecf0aeffec79b902a9ecb3": "9b7430e5dd454cdf5e58a10dcaf204c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/b0cc5657aaf58ce1545b10f13c2938c91d880d": "cc8d4b2f34c8dd2ac7dcdab1e4495d17",
".git/objects/a6/6ad8a65790e6b896e425e9450c3cba62f6ee33": "972946646bb7aead6872c0564bd97cdd",
".git/objects/e7/e681ea6867ab750c0770cde13b38ab67a03912": "50412cba9dfcea2b27d735c4f662aae6",
".git/objects/f8/dda9f5ee88a498ce5319e505a5f4ff10149654": "972b357f36054b8e0c11a774b62204c6",
".git/objects/23/bdf70c4aba760b3ed5d86479c73da78f61a4b4": "d27f9ea780b603f194c9749d7d48dca2",
".git/objects/78/f1bde16bbd2f8fd7c66ee80111fffdcf5e9208": "2ea0bc14fe4cfeb6b675326dc4cf23c7",
".git/objects/14/f2f76eda4acb863fecbcc54db34beb2de27cdb": "07186c2c88848abc99a5d6c54b2df409",
".git/objects/14/eeae770ef92f5ad8293a8edf9d8bf07f8de799": "f3e458910976c27b595be715d23f769f",
".git/objects/25/b77ed9e70bf286de915973d0a5f3e6adf59bf9": "76768031ff2a75d11c78c808f9916dce",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f6c5fd2dec6f17b7ae71a362f5c0b61",
".git/logs/refs/heads/master": "7f6c5fd2dec6f17b7ae71a362f5c0b61",
".git/logs/refs/remotes/origin/master": "c016d3ff704548664502cd5a6ceaa17c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "d07fab7ec82b0de52691f150be8ce54f",
".git/refs/remotes/origin/master": "d07fab7ec82b0de52691f150be8ce54f",
".git/index": "310ca326a96b138c777347b8165560fe",
".git/COMMIT_EDITMSG": "90f4c0e31f35e6ae890e5efaa98cd52c",
"assets/AssetManifest.json": "8be18f4e952337c4c3a3de873156caec",
"assets/NOTICES": "1f6faf2f50fa63fb961ce2d07860dd43",
"assets/FontManifest.json": "1e403eaa64d1bc91e585d35339a5cd40",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736"
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
