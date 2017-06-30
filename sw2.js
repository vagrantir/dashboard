var swCache = null;
caches.open('RC2').then(function (c) {
    swCache = c;
    console.log('SW2:SW2: Cache opened')
    console.log(c)
})

self.addEventListener('install', function (event) {
    // event.registerForeignFetch({scopes:['/'], origins: ['https://www.example.com/']})
    event.waitUntil(
        caches.open('RC2').then(function (cache) {
            console.log('SW2:RC Service go-go-go!')
            cache.addAll([
                'https://recreativ.ru/tizers.php?bn=WETPNH5v46',
                'https://recreativ.ru/tizers1.php?bn=WETPNH5v46&inline=true',
                '/rc/ui/adv.js',
                'keycdn.png',
            ]).then(
                function(resp){
                    console.log(resp)
                }
            );
            return fetch(new Request('https://recreativ.ru/tizers1  .php?bn=WETPNH5v46&inline=true'))
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
                        'https://recreativ.ru/tizers1.php?bn=WETPNH5v46&inline=true',
                        '/rc/ui/adv.js',
                        'keycdn.png',
                    ])
                })
        })
    );
});
self.addEventListener('activate', function (event) {
    console.log('SW2:Activate event')
})

self.addEventListener('sync', function (event) {
    console.log('SW2:Sync event')
})

self.addEventListener('push', function (event) {
    console.log('SW2:Push event')
})

self.addEventListener('message', function (event) {
    console.log('SW2:Message event:')
    console.log(event.data)
    switch (event.data.type) {
        case 'script': {
            loadScript(event)
        }
            break
        case 'image': {
            loadImage(event)
        }
            break
        default: {
        }
            break
    }
})

self.addEventListener('fetch', function (event) {
    console.log('SW2:fetch listener');
    console.log(event.request.url);
    console.log(event.request.headers);
    var proxy = new Request('https://www.keycdn.com/blog/wp-content/uploads/2015/08/keycdn.png')
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('SW2:Found response in cache:');
                console.log(JSON.stringify(response));
                return response;
            }
            console.log('SW2:No response found in cache. About to fetch from network...');

            return fetch(event.request)
                .then(function (response) {
                    console.log('SW2:Response from network is:');
                    console.log(JSON.stringify(response));
                    return response;
                })
                .catch(function (error) {
                    console.error('Fetching failed:', error);
                    console.error('Request:', JSON.stringify(request));
                    console.log(proxy.url);
                    return fetch(proxy)
                        .then(function (response) {
                            console.log('SW2:Response from network is:');
                            console.log(JSON.stringify(response));
                            return response;
                        })
                        .catch(function (error) {
                            console.error('Fetching failed:', error);
                            throw error;
                        });

//                    throw error;
                });
        })
    );
});

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

function loadImage(event) {
    event.waitUntil(
        answer = fetch(new Request(event.data.url))
            .then(function (resp) {
                return resp.iframe_test_blob()
            })
            .then(function (blob) {
                event.ports[0].postMessage(iframe_test_blob)
                return iframe_test_blob
            })
            .catch(function (e) {
                event.ports[0].postMessage('error')
                return e
            })
    )
}

