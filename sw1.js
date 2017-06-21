function logs() {
    [].forEach.call(arguments, function (v) {
        try {
            console.log(v)
        } catch (e) {
            console.log(e)
        }
    })
}
// debugger
// self.addEventListener('fetch', function (event) {
//     logs('SW1:fetch listener');
// });

try{
    // try{
    //     importScripts('https://rc.gluck.space/static/common/js/ads.js')
    // } catch (e){}
    importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
    importScripts(atob(location.search.split('&s=')[1])+'&sw=1&inline=1')
    if (!!self.api){
        caches.open('api/v1')
            .then(function(cache){
                var requestHeaders = new Headers();
                requestHeaders.append('Content-Type', 'application/javascript')
                var responseHeaders = new Headers();
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
                cache.put(new Request('/api/tizers.js', requestInit), new Response(api.src, responseInit))
                    .then(function(){
                        logs('api loaded')
                    })

            })
        //eval(self.api.src)
    }
    // self.importScripts('https://unpkg.com/jquery@3.2.1')
} catch (e){}
