(() => {
    function logs() {
        for (l of arguments){
            if(l instanceof win('Array'))
            WINDOW.console.log(win('JSON').stringify(arguments, null, 2))
        }
    }

    function replace_domElement_method(domElement, elementMethod, newMethod) {
        function to_string_mascarading() {
            return original_element_method_source
        }

        var original_element_method_source = domElement[elementMethod].toString()
        newMethod._orig = domElement[elementMethod].bind(domElement)
        domElement.elementMethod = newMethod
        domElement.elementMethod.toString = to_string_mascarading
    }

    function hack_documents_methods(domElement) {
        function new_document_create_element(f) {
            function iframe_onload(event) {
                var targetIFrame = event.target
                var targetDocument = null
                try {
                    targetDocument = targetIFrame.contentWindow.document
                } catch (e) {
                }

                if (targetDocument) {
                    hack_documents_methods(targetDocument)
                    new_element.removeEventListener("load", iframe_onload)
                }
            }

            function load_handler(event) {
                console.log(event)
                new_element.removeEventListener("load", load_handler)
            }

            function error_handler(event) {
                console.log(event)
                new_element.removeEventListener("error", error_handler)
            }

            var original_create_element = arguments.callee._orig
            var new_element = original_create_element.apply(this, arguments)

            switch (new_element.tagName) {
                case "IMG":
                    new_element.addEventListener("load", load_handler)
                    new_element.addEventListener("error", error_handler)
                    break
                case "DIV":
                    new_element.addEventListener("load", load_handler)
                    new_element.addEventListener("error", error_handler)
                    break
                case "IFRAME":
                    new_element.addEventListener("load", iframe_onload)
                    break
            }
            return new_element
        }

        function new_document_write() {
            //debugger
            var orig_document_write = arguments.callee._orig
            var readyState = this.readyState

            orig_document_write.apply(this, arguments)

            if (readyState == "complete") {
                add_Error_and_Load_Listeners(this)
            }
        }

        function new_document_open() {
            //debugger
            var orig_document_open = arguments.callee._orig
            orig_document_open.apply(this, arguments)
            add_Error_and_Load_Listeners(this)
        }

        replace_domElement_method(domElement, "createElement", new_document_create_element)
        var h = new_document_write
        replace_domElement_method(domElement, "write", h)
        replace_domElement_method(domElement, "writeln", h)
        replace_domElement_method(domElement, "open", new_document_open)
        STATE.docs.push(domElement)
        add_Error_and_Load_Listeners(domElement)
    }

    var DOCUMENT = doc(), WINDOW = win(), NAVIGATOR = win('navigator'), TRUE = !![], FALSE = ![]

    function eventListener_error_load(event, isError) {
        var event_target = event.target
        var targets_stack = (isError) ? STATE.er_load : STATE.sc_load
        try {
            WINDOW.logs({
                action: 'targets_stack.push(event_target)',
                event: isError ? 'error' : 'load',
                target: event_target.src || event_target.textContent || event_target.href
            })
        } catch (e) {
        }
//            targets_stack.push(event_target)
    }

    var LOBAL = this

    function add_Error_and_Load_Listeners(domElement) {
        domElement.addEventListener("error", STATE.er_listen, true)
        domElement.addEventListener("load", STATE.sc_listen, true)
    }

    function ifServiceWorkerApi(){
        return ('serviceWorker' in NAVIGATOR)
    }

    function getSWkey(p) {
        var k = WINDOW.localStorage.getItem(p ? p : '_apm') || WINDOW.Math.random().toString(32).substr(2)
        WINDOW.localStorage.setItem(p ? p : '_apm', k)
        return k
    }

    function getSWScope(p, k) {
        return p + '/' + k + '/'
    }

    function win(p) {
        return p ? eval('window["' + p + '"]') : eval('window')
    }

    function init(){
        LOBAL.state = new STATE()
        LOBAL.ce = !!DOCUMENT.createElement._orig ? DOCUMENT.createElement._orig.bind(DOCUMENT) : DOCUMENT.createElement.bind(DOCUMENT)
    }

    function doc(p) {
        return p ? LOBAL.ce(p) : win('document')
    }

    var STATE = ()=>{
        this.iframe_blob = new WINDOW['Blob']([head, 'console.log("Hello!")', tail], {type: 'text/html'});

        this.docs = []

        this.queues = {}

        this.addQueue = (name)=>{
            this.queues[name] = this.queues[name] || []
        }

        this.url = WINDOW['URL'].createObjectURL(this.iframe_blob)
    }

    function make(p) {
        return win('eval')('new ' + p + '()')
    }

    function __forEach(t, c) {
        return WINDOW.Array.prototype.forEach.call(t, c)
    }

    function arrayToKeyValue() {
        var paramsObject = {};
        for (var a = 0; a < arguments.length; a += 2) {
            paramsObject[arguments[a]] = arguments[a + 1]
        }
        return paramsObject
    }

    function mutationProtector(mutation){
        if (mutation.attributeName == 'hidden') {
            mutation.target.removeAttribute('hidden')
        } else {
            if (mutation.attributeName == 'style' && mutation.target.style.display == 'none') {
                mutation.target.style.display = 'block'
            }
        }
    }

    function main() {

        hack_documents_methods(document)

        init()

        DOCUMENT.addEventListener('DOMContentLoaded', () => {
            var src = '', blockId = '', scripts = []
            var a = DOCUMENT.querySelectorAll("script")
            __forEach(a, (s, i) => {
                if (s.src.match(WINDOW.atob("cmVjcmVhdGl2LnJ1"))) { //"Ly9yZWNyZWF0aXYucnUvdGl6ZXJzLnBocD8"
                    src = WINDOW.btoa(s.src)
                    s.src.split('?')[1]
                        .split('&')
                        .forEach((p) => {
                            p = p.split("=")
                            if (p[0] === 'bn') {
                                blockId = p[1]
                            }
                        })
                    scripts.push({'src': src, 'id': blockId})
                }
            })
            try {
                __forEach(scripts, (v, i) => {
                    var block = DOCUMENT.querySelector('#bn_' + v.id)
                    if (!!block && !!(block.getElementsByTagName('table').length || block.getElementsByTagName('iframe').length)) {
                        // (block && !(!!block.getElementsByTagName('table').length || !!block.getElementsByTagName('iframe').length))
                        scripts.splice(i, 1)
                    }
                })
                if (!!scripts) {
                    if (ifServiceWorkerApi()) {
                        try {
                            var key = getSWkey()
                            var scope = getSWScope(path, key)
                            NAVIGATOR
                                .serviceWorker
                                .register(path + sw + '?token=' + WINDOW.btoa(WINDOW.JSON.stringify(scripts)), {'scope': scope})
                                .then((reg) => {
                                    logs('Service worker registered')
                                    logs(reg)
                                    var retryes = 0
                                    var requestHeaders = make('Headers')//new Headers()
                                    // requestHeaders.append('Content-Type', 'application/javascript')
                                    var requestInit = {
                                        'method': 'GET',
                                        'headers': requestHeaders
                                        // mode: event.request.mode,
                                        // cache: 'default'
                                    }

                                    function procced() {
                                        WINDOW.caches.has('api/v1')
                                            .then((has) => {
                                                if (!has && retryes < 3) {
                                                    // debugger
                                                    retryes++
                                                    WINDOW.setTimeout(procced, 300)
                                                    return
                                                }
                                                // debugger
                                                WINDOW.caches.open('api/v1')
                                                    .then((cache) => {
                                                        // debugger
                                                        __forEach(scripts, (v, i) => {
                                                            cache.match(new (win('Request'))('/api/module.js?d=' + v.id, requestInit))
                                                                .then((response) => {
                                                                    // debugger
                                                                    try {
                                                                        response.text().then((text) => {
                                                                            // debugger
                                                                            logs('api loaded in window')
                                                                            if (!text.match(v.id)) {
                                                                                text = WINDOW.atob(text)
                                                                            }
                                                                            var s = DOCUMENT.createElement('script')
                                                                            s.textContent = text
                                                                            DOCUMENT.head.appendChild(s)
                                                                            DOCUMENT.head.removeChild(s)
                                                                            // WINDOW.eval(text)
                                                                            WINDOW.caches.delete('api/v1').then(() => {
                                                                            })
                                                                        })
                                                                    } catch (e) {
                                                                        logs('api loading failed', e)
                                                                    }
                                                                })
                                                        })
                                                    })
                                            })
                                        reg.unregister()
                                    }

                                    WINDOW.setTimeout(procced, 500)
                                })
                        } catch (e) {
                            logs(e)
                        }
                    }
                }
            }
            catch (e) {
            }
        })

        var target = DOCUMENT
        // var target = document.getElementById('some-id')

// create an observer instance
        var observer = new (win('MutationObserver'))((mutations) => {
            WINDOW.___nodes = WINDOW.___nodes || []

            mutations.forEach((mutation) => {
                var p = win('performance').now()
                // debugger
                // while ((win('performance').now() - p)< 300) {}
                if (mutation['type'] === "childList" && mutation['addedNodes'].length > 0) {
                    Array.prototype
                        .forEach.call(mutation['addedNodes'], (node) => {
                        try {
                            if (!!node.wholeText || node.wholeText.trim() === "") {
                                WINDOW.___nodes.push(node)
                            }
                        } catch (e) {
                        }
                        if (node.tagName in {"DIV": "", "A": ""} && !!node.id) {
                            var save = {}
                            save = node.cloneNode()
                            save.id = '___' + save.id
                            protectedNodes[save.id] = save
                        }
                    })
                }
                if (mutation['type'] === "attributes" &&
                    !!mutation['target'] &&
                    mutation['target'].tagName in {
                        "DIV": "",
                        "A": ""
                    }) {
                    if (!!mutation['target'].id && !!protectedNodes['___' + mutation['target'].id]) {
                        // debugger
                    }
                }
                //console.log(mutation.type, mutation)
            })
        })

// configuration of the observer:
        var config = {attributes: true, childList: true, characterData: true, subtree: true}

// pass in the target node, as well as the observer options
        observer.observe(target, config)

// later, you can stop observing
//         observer.disconnect()
    }

    WINDOW.lobal = LOBAL
    this.test = () => {
        WINDOW, caches.open('api/v1')
            .then((cache) => {
                var h = make('Headers')
                h.append('Content-Type', 'application/javascript')
                h.append('Cache-Control', 'max-age=3600')
                h.append('ETag', 'x23445-abc')
                cache
                    .put('/api/v1/js/test.js',
                        new Response('console.log("Its works!")', {"status": 200, headers: h}))
                    .then((resp) => {
                        caches.match('/api/v1/js/test.js').then((resp) => {
                            var s = DOCUMENT.createElement('script')
                            s.src = '/api/v1/js/test.js'
                            s.src = 'https://recreativ.ru/tizers1.php?bn=WETPNH5v46&inlin_e=true&ifram_e=true'
                            s.addEventListener('load', (el) => {
                                logs(el.target.src, 'load')
                            })
                            s.addEventListener('error', (el) => {
                                logs(el.target.src, 'error')
                            })
                            s.addEventListener('load', (el) => {
                                logs(el.target.src, 'load 2')
                            }, TRUE)
                            s.addEventListener('error', (el) => {
                                logs(el.target.src, 'error 2')
                            }, TRUE)
                            DOCUMENT.head.appendChild(s)
                            WINDOW.console.log(resp.headers)
                        })
                        WINDOW.caches.match('/api/v1/js/test.js').then((resp) => {
                            resp.text().then((resp) => {
                                WINDOW.console.log(resp)
                            })
                        })
                        WINDOW.console.log(resp)
                    })
            })

    }


    var path = '/adb/alpha1', sw = '/sw.js'
    var divNodes = [], protectedNodes = [], myScripts = []
    var head = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>API frame</title><script>'
    var tail = '<\/script></head><body><img src="/api/cache/BWFNAWM/?key=aHR0cHM6Ly9hbHBoYS5yZWNyZWF0aXYucnUvYWRiL3NtaWxlLnBuZw" height="100" alt="Img4 AdBlocked :-("></body></html>'

    try{
        main()
    } catch(e){
        logs(e)
    }

})()
