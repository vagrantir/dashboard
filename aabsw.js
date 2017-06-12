/**
 * Anti AdBlock service
 */
var rcCache = null
const casheName = 'rc-cashe'

caches.open('rc-cashe')
    .then(function (cache) {
    rcCache = cache;
    console.log('SW1:SW1: Cache opened')
    console.log(cache)
})

self.addEventListener('install', function (event) {
    console.log('SW: Install event')
    self.clients.claim() // get control on all already opened cliens
});
self.addEventListener('activate', function (event) {
    console.log('SW: Activate event')
})

self.addEventListener('message', function (event) {
    console.log('SW: get message', event.data)
})

self.addEventListener('fetch', function (event) {
    console.log('SW1:fetch listener');
    console.log(event.request.url);
    console.log(event.request.headers);
    // var proxy = new Request('https://www.keycdn.com/blog/wp-content/uploads/2015/08/keycdn.png')
    event.waitUntil(
    fetch(new Request('adv.png'))
        .catch(function(error){
            console.log('SW1:fetch error', error)
        })
        .then(function(response){
            console.log('SW1:fetch listener');
            return response
        })
    )
});

self.addEventListener('sync', function (event) {
    console.log('SW: Sync event')
})

self.addEventListener('push', function (event) {
    console.log('SW: Push event')
})

function loadScript(event) {
    event.waitUntil(
        answer = fetch(new Request(event.data.url))
            .then(function (resp) {
                return resp.text()
            })
            .then(function (text) {
                event.ports[0].postMessage(text)
                return text
            })
    )
}
