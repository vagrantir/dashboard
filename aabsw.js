/**
 * Anti AdBlock service
 */
var rcCache     = null
const cacheName = 'api/v1'

self.addEventListener('install', function (event) {
    console.log('SW: Install event')
});
self.addEventListener('activate', function (event) {
    console.log('SW: Activate event')
    //self.clients.claim() // get control on all already opened cliens
})

self.addEventListener('message', function (event) {
    console.log('SW: get message', event.data)
})

self.addEventListener('fetch', function (event) {
    console.log('SW1:fetch listener');
    console.log(event.request.url);
     //var proxy = new Request('https://www.keycdn.com/blog/wp-content/uploads/2015/08/keycdn.png')
    event.waitUntil(
        caches.match(event.request)
            .then(function(response){
                if (response){
                    return response
                }
                rcCache.match('/cdn/assets/logo.png')
                    .catch(function(error){
                        console.log('SW1: shadowed file not founs');
                        throw error
                    })
                    .then(function(response){
                        console.log('SW1: shadowed file returned');
                        return response
                    })
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

function putCache(){
    fetch(new Request('/adv.png?shadow=true'))
        .catch(function(error){
            console.log('SW1:fetch error', error)
        })
        .then(function(response){
            console.log('SW1: chaching shadow resource');

            var headers = new Headers()
            headers.append('Content-Type','image/png')

            return response.blob
        }).then(function(blob){
            console.log(new Response(blob))

        caches.open(cacheName)
            .catch(function(error){
                throw error
            })
            .then(function(cache){
                return cache.put(
                    new Request('/cdn/assets/logo.png', {headers:headers}),
                    new Response(blob)
                )})
    })

}

caches.open(cacheName)
    .then(function (cache) {
        rcCache = cache;
        console.log('SW1: Cache opened')
    })

putCache()

