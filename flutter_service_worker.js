'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "76af60227d551121ddb8fd315d0aca23",
"flutter_bootstrap.js": "ca731810441cc6090b95b2e6afbc6000",
"version.json": "2ca4d2eec6b798f2cfb24e5f72f8bf71",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"index.html": "aa2fd53279aab73ea0831cecc05079be",
"/": "aa2fd53279aab73ea0831cecc05079be",
"main.dart.js": "2f3cdc6d8aaa825977e5708936915217",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "49b3bae59ab65064589eec86cda8ed46",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "449fac8fb5a5dd9c4ac57e7bd29552c1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/fonts/MaterialIcons-Regular.otf": "f2f68bb6a0da63b5004e5cc01619d75d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icon.svg": "4102b23a376f14548a079b6a83e8c5c8",
"assets/NOTICES": "7bc3f535926e9a21d44447ce38b200af",
"assets/AssetManifest.json": "6110f277f481c9014adf52c625f87561",
"assets/AssetManifest.bin.json": "4a89a5432943b4e974b29202bfeacf35",
"assets/AssetManifest.bin": "b9904daab51f7d5e16a3e39aa1b9ec7e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.ico": "9c4b6d54aff51e887d94d3d4d81e9b94",
".git/logs/refs/remotes/origin/main": "5df2aac305d7ffb9f6fb3a4f634e3367",
".git/logs/refs/heads/main": "fb55f5f358863dea16ccfb21cb045b28",
".git/logs/HEAD": "758fe2c5b7be69c41507822ce3eadef0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "91749a4f640276e8bad37f00adda4450",
".git/refs/remotes/origin/main": "d11b13319ad6acba0e25c4d124e314bd",
".git/refs/heads/main": "d11b13319ad6acba0e25c4d124e314bd",
".git/index": "cf3a7da876ddeb7ecdb13026290416bc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/FETCH_HEAD": "a3bcb6e4cd35b44b02c11eaad485274f",
".git/config": "19db3908c86920a10622934936ec12d2",
".git/ORIG_HEAD": "d743e0b1a507ae47f5a7d2375ab4d6b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/75/1698966602269c59de411701190d88c4442ba9": "f1268d787e99dbb6727efc31d9b194f5",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/ff54d8ee7ba8d8ce1ff5112b2189fba5f4f0a5": "0c83ba5d3c26ab4bc3c128594168cef7",
".git/objects/27/c1fd8cd79509d15f9eeb205f6dc1a83c5025a0": "646972403e765aa157cacc6b58a81587",
".git/objects/27/68aa130de48688ee752e2e77f638bdf086ff9e": "92badd18247c4e6f3369150cb462ea8a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/612f5782da0f5693e4b82c91e99337ac9f67b7": "55dba777e05aba7b220f7d039ceb63a1",
".git/objects/d5/582fc60cf713af04fd6a356af8784d3cc57cb2": "0b4da80dd8689049dc424ff8df6558b8",
".git/objects/d5/cce808672d43b74c7daa8ea771ee8e4eb86b18": "406a17da1a7aa686cdfe7fbf1929e34f",
".git/objects/16/2a885c1978868eb451697c4f714b9dfab0d867": "c243bb5bb514c52382d8618e08f9e499",
".git/objects/4c/54fbd21db42e225cddfe73bde6ba8dc565d117": "5cff72b5b800f766be9bccd45472fcd8",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/28/60443be8f06cf2d271ef50068d51cf18f074a6": "8768fd2f09c0b916d5caa9eed3246228",
".git/objects/2d/2a876f83b86b32712e9349d316834e5ca6298b": "5afe8e5cd3ab4d8b2485ee007f55cb82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/46/d6a43f8e6bfbf56c15fc9bd7336f9b5aeced13": "4c37eedae0c0acb6ff04348f6be818ed",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/33/8ff685f92913da42730be104c57a4f90819bc1": "208a7b16ed609232ce741d51792db8a1",
".git/objects/3c/8eee7790e423f9611b6cdc052f8be94f472335": "3360854053964b57cba57a7e7d094c16",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/51/c9c574255f07a52fca56bdc59b39ea8dec6518": "30f6c82ad104c57fefcc93454e2a63d0",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/1b/469e633064f74e19e6342bbd8248b2b246454b": "82f2a0298a2997ad238197c74abe4995",
".git/objects/1b/3c68485d9ee2ad31da73ae5b355129173a3f77": "38eab2730c8c7746ac7747ff8d57394d",
".git/objects/14/7d2d9a4d8749ad24304900d86fc6a2a5e9ade7": "d2b7ead1a452c16bad39f8d135acbcdd",
".git/objects/a3/a3f3ed4f3c4a3fbcfc0f8a608e4b3119663809": "671da4ad0d49b566c3053f3d584fa8b8",
".git/objects/96/1c7b408f801226087857a747911e37dc6e7e2f": "da0389e6b22d1324e6a53ac8be9d24d8",
".git/objects/96/41e36075ed86bd946bc4efb7f8ca19fc335b02": "b5a755cceffbdf7489da1d787dbc80ae",
".git/objects/a8/d46bfc5d2f70b5d9540899b75494672d4b87c1": "9585075d9fff34087ed5a156e65a46e0",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/20cf6a50a5ced1969699966a39ff36c03ed72f": "c8999affb20cfbb633be780e48e995d6",
".git/objects/f6/1a67e6b2466647b9f8466d3ed1b7cdc9092ccf": "28b5562ae7bc2e45c2e170952759e5c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c62031da4f69a66d4665c6fc1e4ea2fc5c0034": "323a03f05d93496172e8a4a526935a08",
".git/objects/a2/f9abfb78d9798a09d21b7b7dd0067a97408a92": "11eda2f1ba5bf2b3624001a5cf5b14ef",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/79/0d54eb5cd505704c7616a78f263845e0b678e5": "b45187dd688a9346be23fd2a56a9dbaf",
".git/objects/7b/b610b173b196c88ccee7e9ab5b5d4a71572942": "83d062176459bd13ae0f5271835b1c80",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/fc/0c9a3b2b3d475ed2a6f5f750f5ded4b1501946": "73535e0ab9e471f23972a164d193d841",
".git/objects/13/35af56d2aa69a16ae1990dbc727857dd342bca": "abf7a097728a0af90594b0293e3d8a9f",
".git/objects/32/b2ec166d9e03f49e8f7d4d109d962bc68c461c": "b4e8478413c743e7cce86e3d5d35fe99",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/41/6a34646580220b1eb3ff17d78990057be93615": "e1784364215b7acb87f8ccb5080e745d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/eeb61127283c2d64d66f59936b5aebe7a04f02": "9a10f112ca859ac5856ac2f9c9901bb6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/ef/f5c66117be5a0c433134aa376f61ad7871e5cd": "5be564b1024d80835f2d5fb0c4ae4249",
".git/objects/80/73da4f3c70c2f1c4a6b06229b48ae28ff90199": "0ddfd29a36294256dfb20f07604d8a4a",
".git/objects/88/bd08bc07ed1053e638b2f10ec457545acd4673": "1217944a78274317b0128d579e7cf61c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/de/6c5dd6f7969744c209e89c0f05b0dd3f28821d": "ccb79a2149ac80ffcbaeec3924882d90",
".git/objects/4b/b82efe8ce20c8e6954af768ec97e8c31975dcb": "077766bc23c12aabc427d95aa961a008",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/38/50713685305383b87d8499598a7b2ed848d955": "7788c5b3ced06e41e4dd8ff149026ba7",
".git/objects/4f/eef590ab4c97ed1141ad428bdaa0b1ce249bf7": "acc4c7d9ad6485534e2805e93bb31082",
".git/objects/36/7f41c179aadcefcf8bf55d3853ba8988cf8a40": "2b0ea4ff3bb5d91dd0f136d24a1db590",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/18/0b2c32e97455b6ef58568e6e718f0662fd1e2c": "31dd43011b934960edc63952d87b884f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/489760787d00379de4edf9bfa33f3c05084083": "36e9ede73e9d2f4b27660f4dc4245c0a",
".git/objects/8d/f2af359d82c8b9f8306a8f62f9aac31cbf1479": "e56326b55f571247375b0d799daf22d4",
".git/objects/94/097d5fd76be15ce6600cab945db241fce266c1": "33b8e9138151cc0aeb4c948dd9d5470f",
".git/objects/0f/c62602b83ab80434aa450699efbece7db6ce8c": "928762b10b7cd5d529423b77f83ffb2e",
".git/objects/64/7c2b7a2aefdd0c94b34359c8c6b7f6af0004b8": "58e355a15d521579bba8877e1c4da82e",
".git/objects/0e/3aa0187e1a5a498d6816e7c642c85a8fe1d45c": "c9da7804d714c93f5cd11a57613b1f5e",
".git/objects/3b/8813fb0453c5a2d4a9f4b3d15cfe385529a1d4": "efdf07317fe2aa30be3d80a959c63ea4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/e2/095bae94865557dc5916d493a9b0bd52aa5826": "da40b8d21f0b463c0392a43f1eba7ceb",
".git/objects/2f/6712cf6a0351ca5909860bb23eb117098efd2e": "9c5d03734f6e8b6821b26bd9ba744013",
".git/objects/2f/394dde13948fa8668fed310327a3bfbde66137": "278b351e6d9cb93189d17fad651450a4",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"CNAME": "a84d64ce5c416d8cabae759ee8f6eb07",
"flutter.js": "f393d3c16b631f36852323de8e583132"};
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
