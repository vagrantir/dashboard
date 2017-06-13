/**
 * Anti AdBlock service
 */
const magicWord = 'BWFNAWM'
var rcCache = null
const casheName = 'rc-cashe'
const protectedUrls = [
    '/api/cache/' + magicWord
]
function logs() {
    [].forEach.call(arguments, function (v) {
        try {
            console.log(v)
        } catch (e) {
            console.log(e)
        }
    })
}
caches.open('rc-cashe')
    .then(function (cache) {
        rcCache = cache;
        logs('SW1:SW1: Cache opened')
        logs(cache)
    })

self.addEventListener('install', function (event) {
    logs('SW: Install event')
    // self.clients.claim() // get control on all already opened cliens
});
self.addEventListener('activate', function (event) {
    logs('SW: Activate event')
})

self.addEventListener('message', function (event) {
    logs('SW: get message', event.data)
})

self.addEventListener('fetch', function (event) {
    logs('SW1:fetch listener');
    logs(event.request.url);
    // var proxy = new Request('https://www.keycdn.com/blog/wp-content/uploads/2015/08/keycdn.png')
    event.respondWith(
        getResource(event)
            .then(function (r) {
                return r
            })
            .catch(function (e) {
                throw e
            })
    )
});

self.addEventListener('sync', function (event) {
    logs('SW: Sync event')
})

self.addEventListener('push', function (event) {
    logs('SW: Push event')
})

function checkUrl(url) {
    protectedUrls.forEach(function (v, i) {
        if (url.match(RegExp(v, 'g'))) {
            var key = (new URL(url)).searchParams.get('key')
            if (key) {
                url = decode(atob(key))
            }
            return url
        }
    })
    return url
}

function decode(data) {
    return data || '/adb/keycdn.png'
}

function getResource(event) {
    var url = checkUrl(event.request.url)
    return new Promise(function (resolve, reject) {
        fetch(url)
            .catch(function (error) {
                logs(error, url)
                fetch('/adb/keycdn.png')
                    .catch(function (error) {
                        logs(error, url)
                        reject(error)
                    })
                    .then(function (response) {
                        return resolve(response)
                    })
            })
            .then(function (response) {
                if (!response){
                    fetch('/adb/smile.png')
                        .catch(function (error) {
                            logs(error, url)
                            reject(error)
                        })
                        .then(function (response) {
                            return resolve(response)
                        })
                } else {
                    return resolve(response)
                }
            })
    })
}