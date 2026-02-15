'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "217bc1c4fb0e321185710ba350a87a8f",
".git/config": "bcdd60c0cb3b02a5985a7f7c4aa7abbf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e944f070a3657966b59fc9e14107c38b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7135d250b4d9875c3040f71529a55d8d",
".git/logs/refs/heads/gh-pages": "f077f19bb95ae3dc07c1c2450983210e",
".git/logs/refs/heads/master": "e0fff4ff8c1d26a5c30f9a5371642e2d",
".git/logs/refs/remotes/origin/gh-pages": "9b336b715b76168289a8863603b1d5a5",
".git/logs/refs/remotes/origin/master": "645731daa18c4359f3ecd6be7d5b1473",
".git/objects/01/ce966ef655ca37f00f11041ec26b2878fe00e7": "c2fce3395a9a4734bf76c5da25687478",
".git/objects/0e/596ee1ad0b07860ee4c899456cb2c930bf6182": "4f9104521172c46af3989b4877af4b96",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/29084efbe7469ee8fe52b64b6c5d2c7555ecda": "03bf2b258c85f7d43d5b01a7af9c2e03",
".git/objects/2e/a8e787b76b9e4b2a82bdda94d469953e00cff6": "7f15a19d41a976de24ab834c913ee554",
".git/objects/3b/40b6645461b105b1d32c1571456fee5b0c00d5": "cf51efc8c02477f8eeff6546bfedee73",
".git/objects/3e/16a394d07feb3adbedbb371bc70575fbd80f7b": "7b40490f6b4aee7ed739015c12e046c2",
".git/objects/3f/e1e0f78b63bbb262cff71c04de88320019ec0b": "37122f0378e1d0dc75dba2161d723e47",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/5fd81ae781b6056f412095aeebddb229787cd5": "796534a763d8dd6877f17b111b1d1e4c",
".git/objects/4b/9aa0369a58f1b69428f54973ec944475633aa7": "ceeb3f9728e73d78231698cf8931c463",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/371e8e79d4e2762865ba10604cf06bcefd6d9b": "6f89fcaaa2aa684369f6c542bcf86f96",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5a/280865a8ce8fc643e78f706bb503cdeae5a005": "757f7c9adfb6f25606cbec1fa0620b70",
".git/objects/5d/bb3549527419e2bd52bb2a04c5f9ac1f7bddb3": "64a430c789144a1011ed42eea2397268",
".git/objects/65/9636c436dc04f58815f1c72279bd805f2461b6": "86feaaca7014369ea1b4a92e70fa4593",
".git/objects/67/987c57773cbc4f38a1aad594d01dbe0f40e234": "b7e5c18fe401192949485020bac2beb1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/4e417b45102654ca72bb374632ae0e92cd95c4": "74762b9e3a4eb9471bc3e54c0fc77d4c",
".git/objects/6f/ef59aaaf62fb2eaa7aefbcf9e970ecae94fa2a": "830f0a9aef05d4932b4e5229e25e7fd3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/82cd3956da4ea96f9ba36361238ecde2d299d0": "001694275115df4364f65f5c72a3e784",
".git/objects/7e/1c539500c324782b06e653c2886edeedaa2fd2": "c5aed90842ef974bba6e147e3befde7e",
".git/objects/7e/fe2147a46e8c57851d5e2e41219fcc20aa36d3": "61a88c5844b0686038b050201d80a7b2",
".git/objects/82/815aa700ad6f0c4ecfa99da8803168a908807e": "15cb2745f51bd49df96c4aeed6142836",
".git/objects/82/9fc37cd785949ebaf61ef62da4f054bcd35c5c": "065c7566881bf751fafb02879f7571fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e5b0f5665d15c63f459a49f2486e9e8266d0e6": "8b99d4d86ce0670ce797548f29ab2856",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5670b49935ce12e69edb7520f0a043dc4e9441": "8bea8d777fc858e216543d769012b4cd",
".git/objects/8c/e5f8a744bcac6ade2e100c3bcbdc431cc19624": "13624ec1a33421602bba71cd0be054dc",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/93/f2f42e915471028696cf4be52cc8ae1cddd196": "a43420e46f1b9f9bd130432e4bcde06e",
".git/objects/9b/0d24215f92ff248f2713d9315c6ec577892454": "6c5a0e4e46d8209b9ff91881042b8edd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/e6bd54753b6555cef0e7c26caed36ead40bfa2": "fe211996d2d392c0d447e0d60cd8e7ff",
".git/objects/9f/438963e18d4dec34b07c754407ed39d877bfc5": "44cb91198cef5c1fedf612ae47438ace",
".git/objects/a7/fa0c67f315ca89e59ca41c8a6914d4f663abfa": "03cdc13ae2759c5d9904aefd3838226a",
".git/objects/ac/8ce9f9fa04abef001b2126b732d78b50f2da8c": "820b05b5bf25071a2d83c7f1f6f17f0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/becc2e05b3cc664c88f0e97e1af33846807c2d": "23e2b32a25a9f3ca52f634d156f80109",
".git/objects/be/91eed5cc06af431a092c0feda4a91fd4398b70": "2916613ec9797b16a6cbcffdeb35baf7",
".git/objects/bf/fc2d769d02902c1c7a7db3ac217f37e0e8f181": "85d5964a81693a42191c98b6a9102292",
".git/objects/c0/6a12a01509241c6be447daca21c0996d3f9ca3": "99b7f9f9302a28085e2fae73fe7e894e",
".git/objects/c6/bf4720019c566594428171354dc966306f43a1": "4ce7df2c18b3920b99ea2390b0ab8e7e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/9dd4da84a50204c9f373c8a2c976ffe8351b1e": "17d541b7429d366693a58cc109d71af7",
".git/objects/d3/816d279e1c0beb6497e1f9326579a1cccf1d8a": "1bcbf86425b5c9119bf5fe2f0de4c559",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ac60dbf5cdefbb7e18d6992b96957ac3a8f666": "54b6477b1aa360aa8eba5d23b8de117e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/8973784dd78158acd77f62307bafba9f1ce422": "11ed493e7158d1d90a6c2d1b8af83306",
".git/objects/db/6ab425d5cbb45a81e489c9f06a7e51770be66e": "bf69e97643602cc0d38da503871b6360",
".git/objects/db/bc2cfb3f93b5bd7040b2d31571262ccc9e50f3": "8b4033d3f13b6f3631de80a8336c991c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/579cd94353265c416c87ccb68cc1cc20f9de59": "3deec3a4abfc24c20fcb74d725aeb257",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/eaa62244bf97adcd8afa0f5afc1298f1b035cc": "b0f9cd25d7759fe63845ef3478930b42",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/9232378c5dee38c9a3793d2b386a49782322d7": "5b7303ada02ae1dc3ffa2dee4f146ba3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/7542788820e826f487e12a9d3ad3f32ff5d86f": "0326065318622b3952820926b946c7b6",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/gh-pages": "fdd7dbf14f85c70c06699045380a2199",
".git/refs/heads/master": "c4811634424ab5f7359f0947ae308b22",
".git/refs/remotes/origin/gh-pages": "068233d19ae9ae2b94bdf524e44ae34a",
".git/refs/remotes/origin/master": "c4811634424ab5f7359f0947ae308b22",
"assets/AssetManifest.bin": "5e86277ecbc1785692974f6057e5af93",
"assets/AssetManifest.bin.json": "4459260b9b8a354f38da82229ea2abbd",
"assets/AssetManifest.json": "53fd891836134eff464c332b59096ade",
"assets/assets/bgImage.jpg": "3948e7c555bffaa50adcaa8b1065ca4f",
"assets/assets/bgvideo1.mp4": "3d4a09387a508f2ebd9a76415e69eaf3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ba63d8c7cc4048c59af22702bfc64384",
"assets/NOTICES": "cc2c04df83c17d98c5e3626043881c9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9a1edf1e58dae0c3e3f10c7a4cb11904",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d621e4c31d8c845c0354f1519974c25a",
"/": "d621e4c31d8c845c0354f1519974c25a",
"main.dart.js": "64b815b908c0248e21b53a20001ef675",
"manifest.json": "4a46f236bf0bb25234a065ca264c440b",
"version.json": "31ebcbf79a814131a3b0ed58a7b5a96b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
