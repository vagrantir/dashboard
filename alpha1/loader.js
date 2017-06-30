(() => {
    function logs() {
        for (l of arguments) {
            if (l instanceof win('Array')) {
                WINDOW.console.table(l)
            } else {
                WINDOW.console.log(l)
            }
        }
    }

    function replace_domElement_method(domElement, elementMethod, newMethod) {
        function to_string_mascarading() {
            return original_element_method_source
        }

        var original_element_method_source = domElement[elementMethod].toString()
        newMethod.callProto = domElement[elementMethod].bind(domElement)
        domElement.elementMethod = newMethod
        domElement.elementMethod.toString = to_string_mascarading
    }

    function hack_documents_methods(domElement) {
        function new_document_create_element(f)
        {
            function iframe_onload(event) {
                var iframe = event.target
                var targetDocument = null
                try {
                    targetDocument = iframe.contentWindow.document
                    logs(targetDocument)
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

            var original_create_element = arguments.callee.callProto
            var new_element = original_create_element.apply(this, arguments)

            LOBAL.WebStateObject.sc_listen = load_handler
            LOBAL.WebStateObject.er_listen = error_handler

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
            logs('new_document_write')
            var orig_document_write = arguments.callee.callProto
            var readyState = this.readyState

            orig_document_write.apply(this, arguments)

            if (readyState == "complete") {
                add_Error_and_Load_Listeners(this)
            }
        }

        function new_document_open() {
            //debugger
            logs('new_document_open')
            var orig_document_open = arguments.callee.callProto
            orig_document_open.apply(this, arguments)
            add_Error_and_Load_Listeners(this)
        }


        replace_domElement_method(domElement, "createElement", new_document_create_element)

        var h = new_document_write

        replace_domElement_method(domElement, "write", h)
        replace_domElement_method(domElement, "writeln", h)
        replace_domElement_method(domElement, "open", new_document_open)
        LOBAL.WebStateObject.docs.push(domElement)
        add_Error_and_Load_Listeners(domElement)

    }

    var DOCUMENT = doc(), WINDOW = win(), NAVIGATOR = win('navigator'), TRUE = !![], FALSE = ![]

    var LOBAL = this

    function add_Error_and_Load_Listeners(domElement) {
        domElement.addEventListener("error", LOBAL.WebStateObject.er_listen, true)
        domElement.addEventListener("load", LOBAL.WebStateObject.sc_listen, true)
    }

    function ifServiceWorkerApi() {
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

    function init() {
        LOBAL.WebStateObject = new STATE()
        LOBAL.WebStateObject.ce = !!DOCUMENT.createElement._orig ? DOCUMENT.createElement._orig.bind(DOCUMENT) : DOCUMENT.createElement.bind(DOCUMENT)
    }

    function doc(p) {
        return p ? LOBAL.ce(p) : win('document')
    }

    function STATE() {
        this.iframe_test_blob = new WINDOW['Blob']([head, 'console.log("Hello!")', tail], {type: 'text/html'});

        this.docs = []

        this.queues = {}

        this.addQueue = (name) => {
            this.queues[name] = this.queues[name] || []
        }
        this.sc_listen = (e)=>{ logs(e) }

        this.er_listen = (e)=>{ logs(e) }

        this.url = WINDOW['URL'].createObjectURL(this.iframe_test_blob)
    }

    function make(p) {
        return win('eval')('new ' + p + '()')
    }

    function __forEach(t, c) {
        return WINDOW.Array.prototype.forEach.call(t, c)
    }

    function getSelectors(s, el) {
        el = el || DOCUMENT
        return el.querySelectorAll(s)
    }

    function getSelector(s, el) {
        el = el || DOCUMENT
        return el.querySelector(s)
    }

    function getElementsByTag(s, el) {
        el = el || DOCUMENT
        return el.getElementsByTagName(s)
    }

    function createElement(s) {
        // cr = DOCUMENT.createElement._orig ? DOCUMENT.createElement._orig.bind(DOCUMENT) : DOCUMENT.createElement.bind(DOCUMENT)
        return LOBAL.WebStateObject.ce(s)
    }

    function aToB(v) {
        return WINDOW.atob(v)
    }

    function bToA(v) {
        return WINDOW.btoa(v).replace(/\=/g, '')
    }

    function toJson(v, r, s) {
        // JSON.stringify(v, r, s)
        return WINDOW.JSON.stringify(v, r, s)
    }

    function fromJson(v, r) {
        return WINDOW.JSON.parse(v, r)
    }

    function arrayToKeyValue() {
        var paramsObject = {};
        for (var a = 0; a < arguments.length; a += 2) {
            paramsObject[arguments[a]] = arguments[a + 1]
        }
        return paramsObject
    }

    function mutationProtector(mutation) {
        if (mutation.attributeName == 'hidden') {
            mutation.target.removeAttribute('hidden')
        } else {
            if (mutation.attributeName == 'style' && mutation.target.style.display == 'none') {
                mutation.target.style.display = 'block'
            }
        }
    }

    function getToken(s) {
        var t = ''
        try {
            for (var v of s) {
                t = t ? t + ":" + v.id : v.id
            }
        } catch (e) {

        }
        return bToA(t)
    }

    function maskBlock(e) {
        var r, t = "", i = win('Math').random().toString(32).substr(2)
        r = +win('Math').random().toString(10).substr(2, 1)
        while (r--) {
            t = t + '<div style="position: absolute; top: -1000px; left: -1000px; display: none!important"></div>'
        }
        var e1 = createElement('div')
        e1.innerHTML = t;
        e1.style.cssText = "position: absolute; top: -1000px; left: -1000px; display: none!important"
        var e2 = createElement('div')
        e2.id = i;
        e.replaceWith(e1);
        DOCUMENT.body.insertBefore(e2, e1)
        return i
//        e.()
    }

    function getProtectedScripts() {
        var src = '', blockId = '', scripts = []
        var a = getSelectors("script")
        __forEach(a, function(s, i) {
            if (s.src.match(aToB("cmVjcmVhdGl2LnJ1"))) { //"Ly9yZWNyZWF0aXYucnUvdGl6ZXJzLnBocD8"
                src = bToA(s.src)
                s.src.split('?')[1]
                    .split('&')
                    .forEach(function(p) {
                        p = p.split("=")
                        if (p[0] === 'bn') {
                            blockId = p[1]
                        }
                    })
                scripts.push({'src': src, 'id': blockId})
            }
        })
        return scripts
    }

    function checkBlocks(s) {
        __forEach(s, function (v, i) {
            var block = getSelector('#bn_' + v.id)
            if (!!block && !!(getElementsByTag('table', block).length || getElementsByTag('iframe', block).length)) {
                // (block && !(!!block.getElementsByTagName('table').length || !!block.getElementsByTagName('iframe').length))
                s.splice(i, 1)
            } else {
                v.newId = maskBlock(block)
            }
        })
        return s
    }

    function getServiceWorkerUrl(token, scripts) {
        return path + sw + '?token=' + token + "&clId=" + bToA(toJson(scripts))
    }

    function createWrappedScript(text){
        var s = createElement('script')
        var h = '(function(D){\n var targets=JSON.parse(atob("'
            + bToA(toJson(scripts)) + '"));\n'
            + text
            + '})(document);\n'
        s.textContent = h
        return s
    }

    function execScript(s, evaluate){
        if (evaluate){
            WINDOW.eval(s)
        } else {
            DOCUMENT.head.appendChild(s)
            DOCUMENT.head.removeChild(s)
        }
    }

    function removeCache(c){
        WINDOW.caches.delete(c)
            .then(function () {
                //
            })
    }

    function proccedCachedScripts(cn, url){
        var requestHeaders = make('Headers')//new Headers()
        // requestHeaders.append('Content-Type', 'application/javascript')
        var requestInit = {
            'method': 'GET',
            'headers': requestHeaders
            // mode: event.request.mode,
            // cache: 'default'
        }
        WINDOW.caches.open('api/v1')
            .then(function (cache) {
                cache.match(new (win('Request'))('/api/module.js?token=' + token, requestInit))
                    .then(function (response) {
                        try {
                            if (response) {
                                response
                                    .text()
                                    .then(function (text) {
                                        logs('api loaded in window')
                                        var s = createWrappedScript(text)
                                        execScript(s)
                                        // can be unregistered by any condition
                                        // LOBAL.WebStateObject.SW.unregister()
                                        removeCache('api/v1')
                                    })
                            }
                        } catch (e) {
                            logs('api loading failed', e)
                        }
                    })
            })
    }

    function procced() {
        var retries = 0

        WINDOW.caches.has('api/v1')
            .then(function (has) {
                if (!has && retries < workerWaiting) {
                    // debugger
                    retries++
                    WINDOW.setTimeout(procced, 300) //wait for service worker creates cache data
                    return
                }
                // debugger
                proccedCachedScripts('api/v1', '/api/module.js?token=' + token)
            })
    }

    function DOMLoaded(event) {
        scripts = checkBlocks(getProtectedScripts())
        try {

            token = getToken(scripts)

            if (!!scripts) {
                if (ifServiceWorkerApi()) {
                    try {
                        var key = getSWkey()
                        var scope = getSWScope(path, key)
                        NAVIGATOR
                            .serviceWorker
                            .register(getServiceWorkerUrl(token, scripts), {'scope': scope})
                            // .register(path + sw + '?token=' + bToA(toJson(scripts)), {'scope': scope})
                            .then(function (reg) {
                                logs('Service worker registered')
                                logs(reg)
                                LOBAL.WebStateObject.SW = reg
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
    }

    function mutationsObserver(mutations) {
        WINDOW.___nodes = WINDOW.___nodes || []

        mutations.forEach(function (mutation) {
            var p = win('performance').now()
            // debugger
            // while ((win('performance').now() - p)< 300) {}
            if (mutation['type'] === "childList" && mutation['addedNodes'].length > 0) {
                Array.prototype
                    .forEach.call(mutation['addedNodes'], function(node) {
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
    }

    function main() {

        init()

        hack_documents_methods(document)

        DOCUMENT.addEventListener('DOMContentLoaded', DOMLoaded)

        var target = DOCUMENT
        // var target = document.getElementById('some-id')

        var config = {
            attributes: true,
            attributeOldValue: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true,
            subtree: true
        }

        // var observer = new (win('MutationObserver'))(mutationsObserver)
        // observer.observe(target, config)

// later, you can stop observing
//         observer.disconnect()
    }

    WINDOW.lobal = LOBAL
    function test() {
        WINDOW, caches.open('api/v1')
            .then(function(cache) {
                var h = make('Headers')
                h.append('Content-Type', 'application/javascript')
                h.append('Cache-Control', 'max-age=3600')
                h.append('ETag', 'x23445-abc')
                cache
                    .put('/api/v1/js/test.js',
                        new Response('console.log("Its works!")', {"status": 200, headers: h}))
                    .then(function (resp){
                        caches.match('/api/v1/js/test.js').then(function(resp) {
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


    var path = '/adb/alpha1', sw = '/aabsw.js', scripts, token, workerWaiting = 3
    var divNodes = [], protectedNodes = [], myScripts = []
    var head = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>API frame</title><script>'
    var tail = '<\/script></head><body><img src="/api/cache/BWFNAWM/?key=aHR0cHM6Ly9hbHBoYS5yZWNyZWF0aXYucnUvYWRiL3NtaWxlLnBuZw" height="100" alt="Img4 AdBlocked :-("></body></html>'

    try {
        main()
    } catch (e) {
        logs(e)
    }

})()
