/**
 * Anti AdBlock service
 */
const magicWord = 'BWFNAWM'
var rcCache = null
const casheName = 'rc-cashe'
const protectedUrls = [
    '/api/cache/' + magicWord,
    '/adb/'
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
    // debugger
    if (event.request.url.includes('magicWord')) {
        var query = event.request.url.split('magicWord/')[1]
        switch (query) {
            case 'start.html':
                debugger
                event.respondWith(iframeResponse(iframeContent()), event.request)
                break
            default:
                var init = {
                    method: 'GET',
                    mode: event.request.mode,
                    cache: 'default'
                };
                var url = event.request.url.split('rc-proxy/')[1];
                console.log('DEBUG: proxying', url);
                event.respondWith(fetch(url, init));
        }
    } else {
        event.respondWith(fetch(event.request));
    }
});

self.addEventListener('sync', function (event) {
    logs('SW: Sync event')
})

self.addEventListener('push', function (event) {
    logs('SW: Push event')
})

function checkUrl(url) {
    var params = []
    params.protected = !!url.match(RegExp(v, 'g'))
    params.urls = []
    protectedUrls.forEach(function (v, i) {
        if (url.match(RegExp(v, 'g'))) {
            var key = (new URL(url)).searchParams.get('q')
            if (key) {
                params.url.push(decode(atob(key)))
            }
            return url
        }
    })
    return params
}

function decode(data) {
    return data || '/adb/keycdn.png'
}

function getResource(event) {
    var url = event.request.url
    var headers = event.request.headers()
    var parms = checkUrl(event.request.url)
    var request = new Request()
    return new Promise(function (resolve, reject) {
        internalFetch(request)
            .catch(function (error) {
                return reject(error)
            })
            .then(function (response) {
                return resolve(response)
            })
    })
}

function internalFetch(request) {
    logs(request.url)
    return new Promise(function (resolve, reject) {
        fetch(request)
            .catch(function (error) {
                logs('fetch error', error, request.url)
                reject(error)
            })
            .then(function (response) {
                logs('fetch success', request.url)
                return resolve(response)
            })
    })
}

function iframeContent() {
    var html = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>start application</title>' +
        '</head>' +
        '<body>' +
        '<h1>iframe</h1>' +
        '<script>console.log("Hello!")</script>' +
        '</body>' +
        '</html>'
    return html
}
function iframeResponse(content, request) {
    var headers = new Headers()
    headers.append('Content-Type', 'text/html');
    var init = {
        status: 200,
        headers: headers,
    }
    return new Response(content, init)
}
debugger
try{
    try{
        self.importScripts('https://rc.gluck.space/static/common/js/ads.js')
        if (!!self.api){
            eval(self.api.src)
        }
    } catch (e){}
    self.importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
// self.importScripts('https://unpkg.com/jquery@3.2.1')
} catch (e){}
