var swCache = null;
caches.open('RC').then(function (c) {
    swCache = c;
    console.log('Cache opened')
    console.log(c)
})

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('RC').then(function (cache) {
            console.log('RC Service go-go-go!')
            return fetch(new Request('https://recreativ.ru/tizers.php?bn=WETPNH5v46'))
                .then(function (resp) {
                    cache.keys()
                        .then(function (k) {
                            console.log(k)
                        })
                    return cache.put(new Request('/rc/ui/script.js'), resp)
                })
                .catch(function (err) {
                    console.log(err)
                    return cache.addAll([
                        'https://recreativ.ru/tizers.php?bn=WETPNH5v46',
                    ])
                })
        })
    );
});
self.addEventListener('activate', function (event) {
    console.log('Activate event')
})

self.addEventListener('sync', function (event) {
    console.log('Sync event')
})


self.addEventListener('push', function (event) {
    console.log('Push event')
})

self.addEventListener('message', function (event) {
    console.log('Message event:')
    console.log(event.data)
    switch(event.data.type){
        case 'script': {
            loadScript(event)
        }
            break
        case 'image': {
            loadImage(event)
        }
            break
        default: {}
            break
    }
})

self.addEventListener('fetch', function (event) {
    console.log('fetch listener');
    debugger
    event.respondWith(
        caches.match(event.request)
            .catch(function () {
                console.log('request match catch 1');
                return fetch(event.request);
            })
            .then(function (response) {
                console.log('request matched, lets fetch');
                caches.open('RC')
                    .then(function (cache) {
                        cache.put(event.request, response);
                        console.log('fetch.then(cache.put)');
                    });
                console.log('fetch return');
                return response.clone();
            })
            .catch(function () {
                console.log('request match catch 2');
                return caches.match('https://recreativ.ru/tizers.php?bn=WETPNH5v46');
            })
    );
});

function loadScript(event){
    event.waitUntil(
        answer = fetch(new Request(event.data.url))
            .then(function(resp){
                return resp.text()
            })
            .then(function(text){
                event.ports[0].postMessage(text)
                return text
            })
    )
}

function loadImage(event){
    event.waitUntil(
        answer = fetch(new Request(event.data.url))
            .then(function(resp){
                return resp.blob()
            })
            .then(function(blob){
                event.ports[0].postMessage(blob)
                return blob
            })
            .catch(function(e){
                    event.ports[0].postMessage('error')
                    return e
            })
    )
}
