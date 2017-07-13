/*marketgid.comV3*/
if (!this.MarketGidJSON) {
    MarketGidJSON = function () {
        function f(n) {
            return n < 10 ? '0' + n : n;
        }

        Date.prototype.toJSON = function () {
            return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';
        };
        var m = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'};

        function stringify(value, whitelist) {
            var a, i, k, l, r = /["\\\x00-\x1f\x7f-\x9f]/g, v;
            switch (typeof value) {
                case'string':
                    return r.test(value) ? '"' + value.replace(r, function (a) {
                            var c = m[a];
                            if (c) {
                                return c;
                            }
                            c = a.charCodeAt();
                            return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                        }) + '"' : '"' + value + '"';
                case'number':
                    return isFinite(value) ? String(value) : 'null';
                case'boolean':
                case'null':
                    return String(value);
                case'object':
                    if (!value) {
                        return 'null';
                    }
                    if (typeof value.toJSON === 'function') {
                        return stringify(value.toJSON());
                    }
                    a = [];
                    if (typeof value.length === 'number' && !(value.propertyIsEnumerable('length'))) {
                        l = value.length;
                        for (i = 0; i < l; i += 1) {
                            a.push(stringify(value[i], whitelist) || 'null');
                        }
                        return '[' + a.join(',') + ']';
                    }
                    if (whitelist) {
                        l = whitelist.length;
                        for (i = 0; i < l; i += 1) {
                            k = whitelist[i];
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    }
                    return '{' + a.join(',') + '}';
            }
        }

        return {
            stringify: stringify, parse: function (text, filter) {
                var j;

                function walk(k, v) {
                    var i, n;
                    if (v && typeof v === 'object') {
                        for (i in v) {
                            if (Object.prototype.hasOwnProperty.apply(v, [i])) {
                                n = walk(i, v[i]);
                                if (n !== undefined) {
                                    v[i] = n;
                                }
                            }
                        }
                    }
                    return filter(k, v);
                }

                if (/^[\],:{}\s]*$/.test(
                        text.replace(/\\./g, '@')
                            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                            .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                    )
                ) {
                    j = eval('(' + text + ')');
                    return typeof filter === 'function' ? walk('', j) : j;
                }
                throw new SyntaxError('parseJSON');
            }
        };
    }();
}
//MarketGidBaseBlockC561696
mgBaseBlock = function (root_id, preloadWindow, fallback, containerId) {
    var self = this;
    this.preloadWindow = preloadWindow; //KG
    this.root = this.preloadWindow.document.getElementById(root_id);
    this.containerId = containerId;
    /**
     * @var fallback
     */
    this.fallback = fallback; //OX
    this.page = 1;
    this.iteration = 1;
    this.adlink = '';
    this.template = '';
    this.id = 561696;
    this.tickerShow = 0;
    // RG a elements
    this.RG = [];
    // SK
    this.cookieStorage_C561696 = {};
    // PZ
    this.cookieStorage_0 = {};
    this.SZ = [];
    // WZ
    this.afterLoadNews_call_stack = [];
    // KU
    this.afterInit_call_stack1 = [];
    this.domainServicer = ""; // DS domain servicer
    this.BJ = "";
    this.RM = 0;
    this.GJ = {};
    this.WT = "";
    this.DM = "";
    this.crashStep = 0;
    this.loadedDefault = false;
    this.teaserHashes = {};
    /**
     * {
     * other: {
     *      dl:
     *  }
     * }
     */
    this.teaserData = {};
    this.json = [];
    this.servicerData = {};
    this.fakeMode = 0;
    this.requestParams = {};
    this.mgDomainName = "marketgid.com"; //WK
    self.templateText = '<table class="mctable" > <tr> {foreach} <td valign="top" class="mcteaser" style="width:25%; height:100%;"> <table cellpadding="0" cellspacing="1" style="width:100%; height:100%;"> <tr> <td style="width:140px;" valign="top" class="mccc"> <div class="mcimage"> <a {$target} {$href}> <img class="mcimage" {$src}> </a> </div> </td> </tr><tr> <td class="mcbc" style="height:100%;" colspan="1" valign="top"> <div class="mctitle"> <a {$target} {$href} class="mctitle">{$title}</a></div> <div class="mcprice"> <span class="mcprice">{$price}</span> {if $priceold} <span class="mcpriceold">{$priceold}</span> <span class="mcdiscount">{$discount}</span> {/if} </div> </td> </tr></table></td> {if this.iteration%4 == 0 && this.iteration!=4}</tr><tr>{/if} {/foreach} </tr></table>';
    self.styles = ' .mctable, .mctable * { margin: 0; padding: 0; border: 0 solid; font-style: normal; font-size: 100.01%; line-height: 1; text-decoration: none; color: #000; line-height: 1.1em; font-family: Tahoma,Geneva,sans-serif; } .mctable { width: 100%; border-spacing: 2px; margin: auto !important; } .mccc { text-align: center; } a.mctitle, a.mcdesc { font-size: 12px; font-weight: bold; font-style: normal; text-decoration: none; } div.mctitle, div.mcdesc { text-align: center; } img.mcimage { padding: 0px; width: 140px; height: 140px; } div.mcprice { text-align: center; } div.mcprice span { font-size: 12px; font-weight: bold; font-style: normal; color: #ff0000; } div.mcprice > span.mcprice, div.mcprice > span.mcdiscount { text-decoration: none; } div.mcprice > span.mcpriceold { text-decoration: line-through; }';
    self.webProtocol = "http:";
    self.clickTracking = "";
    self.AY = '';
    self.funcBlocks = {};
    self.teaserData = {};
    self.loadedPopularTeaser = false;
    self.deviceType = "desktop";
    self.hrefAttr = "href";
    self.DD = [];
    /**
     * Trim str by limit with elipsis
     * @param str
     * @param limit
     * @returns {*}
     * @constructor
     */
    // GX
    this.trim_str_by_limit_with_elipsis = function (str, limit) {
        if (str.length <= limit) return str;
        var word = new Array();
        word = str.split(" ");
        var ret = word[0] + ' ';
        var test;
        for (i = 1; i < word.length; i++) {
            test = ret + word[i];
            if (test.length > limit) return ret + '...'; else ret += word[i] + ' ';
        }
        return str;
    };
    /**
     * Split words by limit
     * @param str
     * @param limit
     * @returns {string}
     * @constructor
     */
    // TE
    this.split_words_by_limit = function (str, limit) {
        var word = new Array();
        var i;
        var ret = '';
        word = str.split(" ");
        for (i = 0; i < word.length; i++) {
            if (word[i].length > limit && word[i].search(/&\w+;/) < 0) ret += word[i].substr(0, limit) + ' ' + word[i].substr(limit) + ' '; else ret += word[i] + ' ';
        }
        return ret;
    };
    /**
     * Trim title by 60 symbols
     * @param title
     * @returns {*}
     * @constructor
     */
    // QK
    this.trim_title_60 = function (title) {
        title = this.trim_str_by_limit_with_elipsis(title, 60);
        return title;
    };
    /**
     * Trim description by 60 symbols
     * @param desc
     * @returns {*}
     * @constructor
     */
    // SS
    this.trim_desc_60 = function (desc) {
        desc = this.trim_str_by_limit_with_elipsis(desc, 60);
        return desc;
    };

    this.isArray = function (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    };

    self.fixGetElementsByClassNameHandler = function (el) {
        if (el.getElementsByClassName == undefined) {
            el.getElementsByClassName = function (cl) {
                var retnode = [];
                var myclass = new RegExp('\\b' + cl + '\\b');
                var elem = this.getElementsByTagName('*');
                for (var i = 0; i < elem.length; i++) {
                    var classes = elem[i].className;
                    if (myclass.test(classes)) retnode.push(elem[i]);
                }
                return retnode;
            };
        }
    };
    // SH
    this.fallback_or_hide_preload_container_if_exists = function () {
        if (!self.fallback) {
            if (self.preloadWindow.document.getElementById("MarketGidPreloadC" + this.containerId)) {
                this.preloadWindow.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none';
            } else if (self.preloadWindow.document.getElementById("M8598PreloadC" + this.containerId)) {
                self.preloadWindow.document.getElementById("M8598PreloadC" + this.containerId).style.display = 'none';
            }
        } else if (self.fallback && this.RM == 0) {
            self.root.innerHTML = "";
        }
    };
    this.MarketGidLoadNews = function (json, servicerData) {
        this.fallback_or_hide_preload_container_if_exists();
        if (typeof servicerData != 'undefined') {
            self.servicerData = servicerData;
            if (typeof servicerData.dt != 'undefined') {
                self.deviceType = servicerData.dt;
            }
        }
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.SZ.length; i++) {
                self[self.SZ[i]]();
            }
        }
        if (this.isArray(json)) {
            if (json.length == 0) {
                return;
            }
            var template = self["templateFunc"](self, json);
            self.json = json;
            if (this.root && template) {
                if (typeof self.parseAdvertLink == 'function') {
                    template = self.parseAdvertLink(template);
                }
                if (this.fallback && this.RM == 0) {
                    this.root.innerHTML = ""
                }
                this.root.innerHTML += this.WT + template + this.DM;
            }
        } else {
            if (this.root && this.RM == 0) {
                this.root.innerHTML = '';
                return;
            }
        }
        this.cookieStorage_C561696["page"] = this.page;
        this.cookieStorage_C561696['time'] = (new Date()).getTime();
        this.setCookie();
        var hrefs = this.root.getElementsByTagName("a");
        for (var i = 0; i < hrefs.length; i++) {
            hrefs[i].rel = "nofollow";
        }
        this.LW(self.styles);
        this.RM++;
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.afterLoadNews_call_stack.length; i++) {
                self[self.afterLoadNews_call_stack[i]]();
            }
        } else {
            if (typeof(self.responsiveInit) == "function") {
                self.responsiveInit();
            }
        }
    };
    //JK
    this.get_client_height_and_scroll_position = function () {
        var _DOCUMENT = this.preloadWindow.document, _WINDOW = this.preloadWindow, dE = 'documentElement',
            cH = 'clientHeight', cW = 'clientWidth',
            iH = 'innerHeight', iW = 'innerWidth', sH = 'scrollHeight', sW = 'scrollWidth', oH = 'offsetHeight',
            oW = 'offsetWidth', oL = 'offsetLeft', oT = 'offsetTop', sT = 'scrollTop', sL = 'scrollLeft';
        if (_WINDOW[iW]) {
            return {"c": _WINDOW[iH], "s": _WINDOW.pageYOffset};
        } else if (_DOCUMENT[dE] && _DOCUMENT[dE][cW]) {
            return {"c": _DOCUMENT[dE][cH], "s": _DOCUMENT[dE][sT]};
        } else if (_DOCUMENT.body[cW]) {
            return {"c": _DOCUMENT.body[cH], "s": _DOCUMENT.body[sT]};
        }
        return 0;
    };
    this.crashWorker = function () {
        if (MarketGidInfC561696.template == '' && !MarketGidInfC561696.loadedDefault) {
            MarketGidInfC561696.crashStep = 1;
            MarketGidInfC561696.MarketGidRedirectComposite([]);
        }
    };
    this.renderItem = function (n, callbackText, type) {
        if (self.isArray(n)) {
            var p = self.ZR(n, type);
            if (!(p.id in self.GJ) && p.id != '') {
                if (typeof p.hash !== 'undefined' && typeof p.id !== 'undefined') {
                    self.teaserHashes[p.id] = p.hash;
                }
                self.GJ[p.id] = 1;
                var addClasses = [];
                if (!self.loadedPopularTeaser && typeof(p.other.adc) != 'undefined' && ( p.other.adc.toString().indexOf('mrsadca') >= 0 || p.other.adc.toString().indexOf('mrsadcp') >= 0 )) {
                    addClasses.push('mgpopular');
                    self.loadedPopularTeaser = true;
                }
                addClasses.push('teaser-' + p.id);
                if ('l' in p.other && null != p.other.l.match(/[\?|&]u=/)) {
                    addClasses.push('dsp');
                }
                if ('type' in p.other) {
                    addClasses.push('type-' + p.other.type);
                }
                var vars = [[/\{\*.*?\*\}/, ''], [/\{\$href\}/g, self.hrefAttr + '="' + self.get_teaser_clickTracking_href(p.hash) + '" data-hash="' + p.hash + '"'], [/\{\$pmc_item\}/, self.id], [/\{\$target\}/g, (typeof p.other.type !== 'undefined' && p.other.type == 'i') ? 'target="_self"' : 'target="_blank"'], [/(class\=\"[^+]?)(mgline)([^+]?\")/, '$1$2 ' + addClasses.join(' ') + '$3'], [/\{\$source\}/g, p.source], [/\{\$src\}/g, 'width="140" height="140"' + ' data-i="' + p.id + '" src="' + p.other["i"] + '"'], [/\{\$title\}/g, self.trim_title_60(p.title)], [/\{\$desc\}/g, self.trim_desc_60(p.desc)], [/\{\$iteration\}/g, self.iteration], [/\$iteration/g, self.iteration], [/this\.iteration/g, self.iteration], [/\{\$price\}/g, p.price], [/\{\$priceold\}/g, p.priceold], [/\{\$discount\}/g, p.discount], [/\{if \$price\}/g, "{if '' != p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if !\$price\}/g, "{if '' == p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$priceold\}/g, "{if '' != p.priceold.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$price != " "\}/g, "{if p.price != ' '}"], [/\{if \$price == " "\}/g, "{if p.price == ' '}"], [/\$priceold/g, p.priceold], [/\$price/g, p.price], [/\{if \$rep\}/g, "{if p.isReplic}"]];
                for (var i = 0; i < vars.length; i++) {
                    callbackText = callbackText.replace(vars[i][0], vars[i][1]);
                }
                while (true) {
                    var x = callbackText;
                    var r = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
                    callbackText = callbackText.replace(r, function (str, p1, p2) {
                        if (eval(p1)) {
                            return p2;
                        } else {
                            return "";
                        }
                    });
                    if (x == callbackText) break;
                }
                this.iteration++;
                return callbackText;
            } else {
                self.GJ[p.id]++;
                return "";
            }
        }
    };
    this.generateTemplate = function (templateText) {
        self["templateText"] = templateText;
        self["templateFunc"] = function (inf, json) {
            var parts = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(self["templateText"]);
            if (!parts) {
                return;
            }
            var template = typeof(parts[1]) != 'undefined' ? parts[1] : '';
            for (var i = 0; i < json.length; i++) {
                template += inf.renderItem(json[i], parts[2], 'goods');
            }
            template += typeof(parts[3]) != 'undefined' ? parts[3] : '';
            return template;
        };
        return true;
    };
    this.init = function () {
        if (this.root) {
            this.getCookie();
            var cookiePage = parseInt(this.cookieStorage_C561696["page"]);
            this.RG = this.root.getElementsByTagName('a');
            var pageOffset = (this.preloadWindow['MarketGidPageOffset'] ? parseInt(this.preloadWindow['MarketGidPageOffset']) : 0);
            self.addEvent(self.root, 'click', self.hangNiceLinkListener);
            self.addEvent(self.root, "\x63\x6f\x6e\x74\x65\x78\x74menu", self.hangNiceLinkListener);
            self.addEvent(self.root, 'mouseup', self.hangNiceLinkListener);
            self.addEvent(self.root, 'touchstart', self.hangNiceLinkListener);
            var tmpType = this.cookieStorage_C561696["mg_type"] ? this.cookieStorage_C561696["mg_type"] : this.QM;
            var pagesCountNews = parseInt('');
            var pagesCountGoods = parseInt('20');
            var pagesCount = (tmpType == 'news') ? pagesCountNews : pagesCountGoods;
            if (cookiePage != null && cookiePage < pagesCount && cookiePage > 0) {
                this.page = cookiePage + 1;
            } else if (cookiePage > (pagesCount - 1) || cookiePage < 1) {
                this.page = 1 + pageOffset;
            }
            if ((new Date()).getTime() - (this.cookieStorage_C561696['time'] != undefined ? this.cookieStorage_C561696['time'] : 0) >= 6e5) {
                this.page = 1 + pageOffset;
            }
            if (!this.page) this.page = 1;
            this.pageUnlim = this.page - 1;
            this.cookieStorage_C561696["page"] = this.page;
            this.setCookie();
            if (!this.preloadWindow.document.cookie) {
                var dt = new Date();
                this.page = dt.getSeconds() % pagesCount + 1;
            }
            this.domainServicer = '//servicer.' + this.mgDomainName + '/';
            var protocol = self.preloadWindow.document.location.protocol;
            self.webProtocol = protocol.indexOf("http") != -1 ? protocol : "http:";
            self.clickTracking = typeof(self.preloadWindow.MGClickTracking) != 'undefined' ? self.preloadWindow.MGClickTracking : "";
            if (!self.generateTemplate(self.templateText)) {
                return;
            }
            self.preloadWindow.onClickExcludes = self.preloadWindow.onClickExcludes || [];
            self.preloadWindow.onClickExcludes.push(self.root);
            for (var i = 0; i < this.afterInit_call_stack1.length; i++) {
                this[this.afterInit_call_stack1[i]]();
            }
        }
    };
    this.getMostTopWindow = function () {
        var w = self.preloadWindow;
        while (w != w.parent) {
            try {
                var test = w.parent.document.body;
                w = w.parent;
            } catch (e) {
                break;
            }
        }
        return w;
    };
    // GH
    this.GH = function (forceShow, refresh) {
        var isOnlyOwnSubnet = parseInt('0');
        var isPopunder = parseInt('0');
        var isYandex = self.preloadWindow.navigator.userAgent.indexOf('YaBrowser') >= 0;
        var isMarketgid = self.mgDomainName.indexOf('marketgid.com') >= 0;
        if (isMarketgid && isYandex && !isOnlyOwnSubnet && !isPopunder) {
            self.domainServicer = '//servicer.' + self.NWServicers[2] + '/';
        }
        var script = this.preloadWindow.document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'windows-1251';
        var scriptSrc = "";
        var fs = forceShow ? 'fs/' : '';
        scriptSrc += self.domainServicer + fs + '561696/' + this.page;
        if (refresh) {
            self.requestParams.rsh = "rsh=1";
        }
        if (this.preloadWindow.MGi != undefined) {
            self.requestParams.geo = "geo=" + this.preloadWindow.MGi;
        }
        self.requestParams.pv = "pv=5";
        self.requestParams.cbuster = "cbuster=" + (this.preloadWindow.MG_CacheBuster ? this.preloadWindow.MG_CacheBuster : ((new Date().getTime()) + '' + Math.floor((Math.random() * 1000000000) + 1)));
        if (JSON.parse('[]').indexOf('int_exchange') >= 0) {
            var ogUrlEl = self.preloadWindow.document.querySelector('meta[property="og:url"]');
            if (ogUrlEl) {
                self.requestParams.ogurl = 'ogurl=' + ogUrlEl.getAttribute('content');
            }
            var ogTitleEl = self.preloadWindow.document.querySelector('meta[property="og:title"]');
            if (ogTitleEl) {
                self.requestParams.ogtitle = 'ogtitle=' + ogTitleEl.getAttribute('content');
            }
        }
        if (scriptSrc.indexOf('?') == -1) {
            scriptSrc += '?';
        } else {
            scriptSrc += '&';
        }
        var params = [];
        for (var key in self.requestParams) {
            params.push(self.requestParams[key]);
        }
        params.push('ref=' + encodeURIComponent(this.preloadWindow.document.referrer));
        var isIframe = self.preloadWindow.self !== self.preloadWindow.top;
        if (isIframe) {
            params.push('iframe=1');
        }
        try {
            if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1000 < Date.now()) {
                var refererUrl = isIframe ? this.preloadWindow.parent.document.referrer : this.preloadWindow.document.referrer;
                var matchDomain = refererUrl.match(/:\/\/([^\/:]+)/i);
                sessionStorage.MG_Session_pr = matchDomain && matchDomain[1] ? matchDomain[1] : '';
                sessionStorage.MG_Session_lu = isIframe ? this.preloadWindow.parent.location.href : this.preloadWindow.location.href;
            }
            sessionStorage.MG_Session_lastUpdate = Date.now();
            if (sessionStorage && sessionStorage.MG_Session_pr) {
                params.push('pr=' + encodeURIComponent(sessionStorage.MG_Session_pr))
            }
            if (sessionStorage && sessionStorage.MG_Session_lu) {
                params.push('lu=' + encodeURIComponent(sessionStorage.MG_Session_lu))
            }
        } catch (err) {
        }
        var w = self.getMostTopWindow();
        if (typeof w._mgPageView8598 == 'undefined') {
            w._mgPageView8598 = (new Date()).getTime().toString(16) + (Math.round(Math.random() * 1000000000) + 2147483648).toString(16);
            params.push('pageView=1');
        } else {
            params.push('pageView=0');
        }
        params.push('pvid=' + w._mgPageView8598);
        scriptSrc += params.join("&");
        script.src = scriptSrc;
        (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(script);
        script.onerror = function () {
            self.mg_ws.onmessage = function (evt) {
                self.preloadWindow.eval(evt.data)
            };
            self.sendMessage('gb|' + script.src);
            self.isAdblock = true;
        };
    };
    this.start = function () {
        if (self.root && self.RM == 0) {
            self.GH();
        }
    };
    this.addEvent = function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false)
        } else {
            elem.attachEvent('on' + type, handler)
        }
    };
    this.removeEvent = function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false)
        } else {
            elem.detachEvent('on' + type, handler)
        }
    };
    this.getMainCssSelector = function () {
        return "#" + (this.realRoot ? this.realRoot.id : this.root.id);
    }
};
var mgCanLoad561696 = false;
var mgFallback561696 = false;
if (document.getElementById("MG_ID")) mgCanLoad561696 = true;
if (document.getElementById("MarketGidComposite561696") || document.getElementById("M8598Composite561696")) {
    mgCanLoad561696 = true;
    mgFallback561696 = true;
}
if (this['mgCanLoad561696']) {
    if (!mgFallback561696) { // if MarketGidComposite561696 or M8598Composite561696 not exists
        var rootId561696 = document.getElementById("MG_ID").innerHTML;
        var div561696 = parent.window.document.createElement('div');
        div561696.id = "MarketGidComposite561696";
        var mgRootId561696 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId561696) ? ("MarketGidScriptRootC" + rootId561696) : ("M8598ScriptRootC" + rootId561696);
        parent.window.document.getElementById(mgRootId561696).appendChild(div561696);
        MarketGidInfC561696 = new mgBaseBlock(div561696.id, parent.window, false, rootId561696);
    } else {
        var mgRootId561696 = document.getElementById("MarketGidComposite561696") ? "MarketGidComposite561696" : "M8598Composite561696";
        MarketGidInfC561696 = new mgBaseBlock(mgRootId561696, window, true, 0);
    }
    this['MarketGidCMainBlock561696'] = function (self) {
        self.mg_ws = typeof(mg_ws561696) == "object" ? mg_ws561696 : {};
        self.mg_ws_location = "wss://wsp.marketgid.com/ws";
        self.waitForSocketConnection = function (e, t) {
            setTimeout(function () {
                return 1 === e.readyState ? void (null != t && t()) : void self.waitForSocketConnection(e, t)
            }, 5)
        };
        self.afterLoadNews_call_stack.push("FM");
        self.UH = function (hash, event, element) {
            var href = "";
            var data = self.teaserData[hash];
            if (element
                && typeof self.preloadWindow._mgExternalLinkChanger !== 'undefined'
                && self.preloadWindow._mgExternalLinkChanger == 1) {
                href = element.protocol + "//" + element.hostname + element.pathname;
                var paramsStr = element.search;
                if (paramsStr != '') {
                    paramsStr = paramsStr.replace("?", "");
                    var params = paramsStr.split("&");
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i].split("=");
                        if (param[0] != 'k') {
                            href += (i == 0 ? "?" : "&") + params[i];
                        }
                    }
                }
            } else {
                href = self.clickTracking + self.webProtocol;
                if (data) {
                    if (data.link) {
                        href += data.link;
                    }
                } else {
                    href = "#";
                }
            }
            if (typeof self.KZ == 'function' && data && data['coopType'] != 'i') {
                var afParams = self.KZ(event, element);
                if (afParams) {
                    var suffix = '561696';
                    href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'k=' + suffix + 'f' + afParams;
                }
            }
            if (true == parseInt('0')) {
                var template = '';
                template = template.replace(/^(\/\/)/, self.preloadWindow.location.protocol + '$1');
                template = template.replace(/(%host%)/, self.preloadWindow.location.host);
                template = template.replace(/(%title%)/, self.transliterate(data[3]));
                href = template.replace(/(%rurl%)/, self.FU(href, true));
            }
            return href;
        };
        // TR
        self.get_teaser_clickTracking_href = function (hash, event, element) {
            var href;
            var data = self.teaserData[hash];
            if (data.other['sdl'] == 1 && data['coopType'] != 'i') {
                href = self.clickTracking;
                if (typeof(data.other['dl']) != 'undefined' && data.other['dl'] != '') {
                    href += data.other['dl'];
                } else {
                    var source = decodeURIComponent(data[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, '')).toLowerCase();
                    var title = decodeURIComponent(data[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, '')).replace(/\s/g, '_');
                    href += self.webProtocol + '//' + (source ? source + '/' : '') + title;
                }
            } else {
                href = self.UH(hash, event, element);
            }
            return href;
        };
        // FX
        self.transliterate = function (str) {
            var a = {
                'Ё': 'YO',
                'Й': 'I',
                'Ц': 'TS',
                'У': 'U',
                'К': 'K',
                'Е': 'E',
                'Н': 'N',
                'Г': 'G',
                'Ш': 'SH',
                'Щ': 'SCH',
                'З': 'Z',
                'Х': 'H',
                'Ъ': '',
                'ё': 'yo',
                'й': 'i',
                'ц': 'ts',
                'у': 'u',
                'к': 'k',
                'е': 'e',
                'н': 'n',
                'г': 'g',
                'ш': 'sh',
                'щ': 'sch',
                'з': 'z',
                'х': 'h',
                'ъ': '\'',
                'Ф': 'F',
                'Ы': 'I',
                'В': 'V',
                'А': 'a',
                'П': 'P',
                'Р': 'R',
                'О': 'O',
                'Л': 'L',
                'Д': 'D',
                'Ж': 'ZH',
                'Э': 'E',
                'ф': 'f',
                'ы': 'i',
                'в': 'v',
                'а': 'a',
                'п': 'p',
                'р': 'r',
                'о': 'o',
                'л': 'l',
                'д': 'd',
                'ж': 'zh',
                'э': 'e',
                'Я': 'Ya',
                'Ч': 'CH',
                'С': 'S',
                'М': 'M',
                'И': 'I',
                'Т': 'T',
                'Ь': '',
                'Б': 'B',
                'Ю': 'YU',
                'я': 'ya',
                'ч': 'ch',
                'с': 's',
                'м': 'm',
                'и': 'i',
                'т': 't',
                'ь': '',
                'б': 'b',
                'ю': 'yu',
                ' ': '_',
                'і': 'i',
                'І': 'I',
                'ї': 'i',
                'Ї': 'I'
            };
            return str.split('').map(function (char) {
                if (char.match(/[a-z0-9_\-]/i)) {
                    return char;
                }
                return a[char] || '';
            }).join('');
        };
        self.getParentLink = function (el) {
            while (el.tagName !== 'BODY') {
                if (el.tagName == "A") {
                    return el;
                } else {
                    el = el.parentNode;
                }
            }
            return null;
        };
        self.NK = function (element, selector) {
            var foundElements;
            while (element.parentNode) {
                foundElements = element.parentNode.querySelectorAll(selector);
                for (var i = 0; i < foundElements.length; i++) {
                    if (element.isEqualNode(foundElements[i])) {
                        return foundElements[i];
                    }
                }
                element = element.parentNode;
            }
            return null;
        };
        self.ZR = function (data, type) {
            var t = {};
            t.source = data[0];
            t.id = data[1];
            t.title = data[3];
            t.desc = data[4];
            if (type.toLowerCase() == 'news') {
                t.mirror = data[5] ? data[5] : self.NWs[self.PJ];
                t.hash = data[6];
                t.other = data[7];
                t.price = " ";
                t.priceold = t.discount = "";
                t.isReplic = false;
            } else {
                t.mirror = self.NWs[self.PJ];
                t.key = data[6];
                t.price = data[7].replace(".00", "");
                t.priceold = data[8].replace(".00", "");
                t.discount = t.priceold.replace(new RegExp('[^0-9.]'), '') == '' ? '' : Math.floor((1 * /\d+(?:\.\d+)?/.exec(t.priceold) - 1 * /\d+(?:\.\d+)?/.exec(t.price)) * 100 / (/\d+(?:\.\d+)?/).exec(t.priceold)) + '%';
                t.hash = data[9];
                t.other = data[10];
                var titleLower = t.title.toLowerCase();
                var descLower = t.desc.toLowerCase();
                var replicWords = ["копия", "подделка", "реплика", "как оригинал"];
                var replicInsertWords = ["Копия. ", "Реплика. "];
                if (data[5] == '1') {
                    t.isReplic = true;
                    for (var i = 0; i < replicWords.length; i++) {
                        if (self.trim_title_60(titleLower).indexOf(replicWords[i]) > -1 || self.trim_desc_60(descLower).indexOf(replicWords[i]) > -1) {
                            t.isReplic = false;
                            break;
                        }
                    }
                } else {
                    t.isReplic = false;
                }
            }
            if (self.deviceType != 'desktop') {
                t.other.sdl = 0;
            }
            data['other'] = t.other;
            self.teaserData[t.hash] = data;
            self.teaserData[t.hash]['id'] = t.id;
            self.teaserData[t.hash]['img'] = t.other["i"];
            self.teaserData[t.hash]['type'] = type;
            self.teaserData[t.hash]['link'] = typeof(t.other['l']) != 'undefined' ? t.other['l'] : null;
            self.teaserData[t.hash]['mirror'] = t.mirror;
            self.teaserData[t.hash]['coopType'] = typeof(t.other['type']) != 'undefined' ? t.other['type'] : null;
            return t;
        };
        self.FU = function (s, replaceChars) {
            replaceChars = typeof replaceChars == 'undefined' ? replaceChars : false;
            var b64c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var b64e = '';
            var c1, c2, c3, e1, e2, e3, e4;
            var i = 0;
            while (i < s.length) {
                c1 = s.charCodeAt(i++);
                c2 = s.charCodeAt(i++);
                c3 = s.charCodeAt(i++);
                e1 = c1 >> 2;
                e2 = ((c1 & 3) << 4) | (c2 >> 4);
                e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (c3 >> 6));
                e4 = isNaN(c3) ? 64 : (c3 & 63);
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            if (true == replaceChars) {
                b64e = b64e.replace('+', '-').replace('/', '_').replace('=', '*');
            }
            return b64e;
        };
        self.hangNiceLinkListener = function (event) {
            if (self.loadedDefault) {
                return;
            }
            if (!event) {
                var event = self.preloadWindow.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.getParentLink(element);
                if (null == element) {
                    return;
                }
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (hash != undefined) {
                if (typeof self.teaserData[hash] != 'undefined'
                    && typeof self.teaserData[hash]['other'] != 'undefined'
                    && typeof self.teaserData[hash]['other']['sdl'] != 'undefined') {
                    self.teaserData[hash]['other']['sdl'] = 0;
                }
                element[self.hrefAttr] = self.UH(hash, event, element);
            }
        };
        self.htmlToElement = function (html) {
            var template = document.createElement('div');
            template.innerHTML = html;
            return template.firstChild;
        };
        self.htmlToElements = function (html) {
            var template = self.preloadWindow.document.createElement('div');
            template.innerHTML = html;
            return Array.prototype.slice.call(template.childNodes);
        };
        self.sendMessage = function (msg) {
            if (typeof self.mg_ws == 'object' && self.mg_ws.__proto__.toString() == '[object Worker]') {
                self.mg_ws.postMessage(msg);
            } else {
                var h = self.mg_ws.onmessage;
                self.mg_ws = new Worker(URL.createObjectURL(new Blob(['eval(atob(\'ZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSl7dmFyIGg9bWdfd3Mub25tZXNzYWdlOyBtZ193cy5yZWFkeVN0YXRlPT1tZ193cy5DTE9TRUQmJihtZ193cz1uZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSksbWdfd3Mub25tZXNzYWdlPWgsd2FpdEZvclNvY2tldENvbm5lY3Rpb24obWdfd3MsZnVuY3Rpb24oKXttZ193cy5zZW5kKGUpfSl9ZnVuY3Rpb24gd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIDE9PT1lLnJlYWR5U3RhdGU/dm9pZChudWxsIT10JiZ0KCkpOnZvaWQgd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KX0sNSl9OyB2YXIgbWdfd3NfbG9jYXRpb24gPSAid3NzOi8vd3NwLm1hcmtldGdpZC5jb20vd3MiOyBtZ193cyA9IG5ldyBXZWJTb2NrZXQobWdfd3NfbG9jYXRpb24pLCBtZ193cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAodCkge3Bvc3RNZXNzYWdlKHQuZGF0YSk7fSwgb25tZXNzYWdlID0gZnVuY3Rpb24oZSl7c2VuZE1lc3NhZ2UoZS5kYXRhKX0=\'))']), {type: "application/javascript"}));
                self.mg_ws.onmessage = h;
                self.mg_ws.postMessage(msg);
            }
        };
        self.FM = function () {
            setTimeout(function () {
                if (typeof self.mg_ws != "object" || !(self.mg_ws instanceof WebSocket) || !self.IV(self.root)) {
                    return;
                }
                var dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
                var uid = self.blockType == 'news' ? '' : '105775';
                self.sendMessage('a| ' + dt + ': ' + uid + ' - ' + self.preloadWindow.location.href);
            }, 2000);
        };
        self.IV = function (el) {
            while (el.tagName !== 'BODY') {
                if ('fixed' != el.style.position && null == el.offsetParent) {
                    return true;
                }
                if ('hidden' == el.style.visibility) {
                    return true;
                }
                if ('none' == el.style.display) {
                    return true;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.LW = function (style, container) {
            style = style.replace(/(@media \([^(]*\) {)/g, "$1}");
            style = style.replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + this.getMainCssSelector() + " $2");
            style = style.replace(/((@media \([^(]*\) \{)\})/g, "$2");
            if (style == "") return;
            if (!container) {
                var MGst = container ? container : this.preloadWindow.document.createElement('style');
                MGst.className = 'MarketGidC561696';
                MGst.type = 'text/css';
                (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(MGst);
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    MGst.appendChild(this.preloadWindow.document.createTextNode(style));
                }
                ;
            } else {
                var MGst = container;
                MGst.className = 'MarketGidC561696';
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    while (MGst.firstChild) {
                        MGst.removeChild(MGst.firstChild);
                    }
                    MGst.appendChild(this.preloadWindow.document.createTextNode(style));
                }
                ;
            }
        };
    };
    this['MarketGidCMainBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Main'] = 'MarketGidCMainBlock561696';
    MarketGidCCookieBlock561696 = function (self) {
        this.storageName = "MarketGidStorage" + (this.preloadWindow.MarketGidPageOffset ? this.preloadWindow.MarketGidPageOffset : "");
        // MS
        this.get_mg_cookies = function () {
            var matches = this.preloadWindow.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"));
            var res = {};
            if (matches) {
                try {
                    res = MarketGidJSON.parse(decodeURIComponent(matches[1]));
                } catch (e) {
                }
                ;
            }
            return res;
        };
        this.getCookie = function () {
            var value = this.get_mg_cookies();
            if (value["C561696"] != undefined) {
                this.cookieStorage_C561696 = value["C561696"];
            } else this.cookieStorage_C561696 = {};
            if (value["0"] != undefined) {
                this.cookieStorage_0 = value["0"];
            } else this.cookieStorage_0 = {};
        };
        this.setCookie = function () {
            var totalCookie = this.get_mg_cookies();
            totalCookie["C561696"] = this.cookieStorage_C561696;
            totalCookie["0"] = this.cookieStorage_0;
            var value = encodeURIComponent(MarketGidJSON.stringify(totalCookie));
            this.preloadWindow.document.cookie = this.storageName + "=" + value + ";path=/";
        };
    };
    this['MarketGidCCookieBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Cookie'] = 'MarketGidCCookieBlock561696';
    MarketGidCSubnetsBlock561696 = function () {
        var self = this;
        self.funcBlocks["Subnets"] = "MarketGidCSubnetsBlock561696";
        this.afterInit_call_stack1.push("UD");
        this.PJ = "";
        this.NWs = {};
        this.NWServicers = {};
        this.NWsImages = {};
        this.NWsAdvert = {};
        this.NWsAdLinkBlocks = {};
        this.NWsUtm = {};
        this.subnetDashboardDomains = {};
        this.NWNames = {};
        this.NWs['0'] = 'marketgid.com';
        this.NWServicers['0'] = 'marketgid.com';
        this.NWNames['marketgid'] = parseInt('0');
        this.NWsImages['0'] = 'marketgid.com';
        this.NWsAdLinkBlocks['0'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
        this.NWsUtm['0'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['0'] = '//dashboard.marketgid.com';
        this.NWs['1'] = 'ladycenter.ru';
        this.NWServicers['1'] = 'marketgid.com';
        this.NWNames['lady'] = parseInt('1');
        this.NWsImages['1'] = 'marketgid.com';
        this.NWsAdLinkBlocks['1'] = '<div class="mg_addad%id"><a href="http://ladycenter.ru/celevie-posetiteli.html%utm%id" class="mg_addad%id" target="_blank"><img src="//img.marketgid.com/images/search/2/icon-2.png"> Добавить объявление</a></div><style type="text/css">div.mg_addad%id{text-align: center;} div.mg_addad%id a{font:normal 11px Tahoma, Arial, sans-serif; color:#009966; text-decoration: none;} div.mg_addad%id img{margin-bottom: -1px;}</style>';
        this.NWsUtm['1'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['1'] = '//dashboard.marketgid.com';
        this.NWs['2'] = 'tovarro.com';
        this.NWServicers['2'] = 'tovarro.com';
        this.NWNames['tovarro'] = parseInt('2');
        this.NWsImages['2'] = 'tovarro.com';
        this.NWsAdLinkBlocks['2'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://tovarro.com/%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a {background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;width: 48px;height: 20px;position:absolute;display: block;bottom: -15px;right: 4px;opacity: 0.7;}.widgets_logo%id a:hover {opacity: 1;background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;}.mgbox{    margin-bottom:20px!important;}</style>';
        this.NWsUtm['2'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['2'] = '//dashboard.tovarro.com';
        this.NWs['3'] = 'lentainform.com';
        this.NWServicers['3'] = 'lentainform.com';
        this.NWNames['lentainform'] = parseInt('3');
        this.NWsImages['3'] = 'lentainform.com';
        this.NWsAdLinkBlocks['3'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo"><a href="http://partner.lentainform.com" target="_blank"></a></div></div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform_hover.png) no-repeat}</style>';
        this.NWsUtm['3'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['3'] = '//dashboard.lentainform.com';
        this.NWs['4'] = 'marketgid.com';
        this.NWServicers['4'] = 'marketgid.com';
        this.NWNames['marketgid'] = parseInt('4');
        this.NWsImages['4'] = 'marketgid.com';
        this.NWsAdLinkBlocks['4'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
        this.NWsUtm['4'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['4'] = '//dashboard.marketgid.com';
        this.afterInit_call_stack1.push("UD");
        var informerData = [];
        informerData.push({"id": "561696", "protocol": "5", "type": "Goods", "subnet": "0"});
        this.UD = function () {
            for (var i = 0; i < informerData.length; i++) {
                var tickerId = informerData[i].id;
                if ((informerData[i].subnet !== '1') ^ ('0' === '1')) {
                    (function (type) {
                        self.preloadWindow["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.AY = type.toLowerCase();
                            self.PJ = '0';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.preloadWindow["MarketGidCReject561696"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('1' === '1')) {
                    (function (type) {
                        self.preloadWindow["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.AY = type.toLowerCase();
                            self.PJ = '1';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.preloadWindow["MarketGidCReject561696"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('2' === '1')) {
                    (function (type) {
                        self.preloadWindow["TovarroLoad" + type + tickerId] = function (json, awd) {
                            self.AY = type.toLowerCase();
                            self.PJ = '2';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.preloadWindow["TovarroCReject561696"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('3' === '1')) {
                    (function (type) {
                        self.preloadWindow["LentaInformLoad" + type + tickerId] = function (json, awd) {
                            self.AY = type.toLowerCase();
                            self.PJ = '3';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.preloadWindow["LentaInformCReject561696"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('4' === '1')) {
                    (function (type) {
                        self.preloadWindow["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.AY = type.toLowerCase();
                            self.PJ = '4';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.preloadWindow["MarketGidCReject561696"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
            }
        };
        self.getSubnetByMirror = function (mirror) {
            var subnet = 0;
            if (typeof self.NWNames[mirror] != 'undefined') {
                subnet = self.NWNames[mirror];
            }
            return subnet;
        }
    };
    this['MarketGidCSubnetsBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Subnets'] = 'MarketGidCSubnetsBlock561696';
    MarketGidCInternalExchangeLoggerBlock561696 = function (self) {
        self.afterLoadNews_call_stack.push("iExchangeLoggerInit");
        self.iExchangeLoggerInit = function () {
            self.addEvent(self.root, "click", function (event) {
                if (!event) var event = self.preloadWindow.event;
                if (!event.target) {
                    event.target = event.srcElement;
                }
                self.AT = true;
                var element = event.target;
                if (element.tagName != 'A') {
                    var element = self.getParentLink(element);
                    if (null == element) {
                        return;
                    }
                }
                if (!element.hasAttribute('data-hash')) {
                    return;
                }
                var hash = element.getAttribute('data-hash');
                if (self.teaserData[hash] && self.teaserData[hash]['coopType'] == 'i') {
                    var img = document.createElement('IMG');
                    var data = "cid=561696&tid=" + self.teaserData[hash]['id'] + "&h=" + hash;
                    if (typeof self.servicerData['isBot'] !== 'undefined') {
                        data += "&bot=" + self.servicerData['isBot'];
                    }
                    if (typeof self.servicerData['tt'] !== 'undefined') {
                        data += "&tt=" + self.servicerData['tt'];
                    }
                    if (typeof self.servicerData['ts'] !== 'undefined') {
                        data += "&ts=" + self.servicerData['ts'];
                    }
                    var scriptSrc = "//c." + (self.PJ == 3 ? "lentainform.com" : "marketgid.com") + "/clie?" + data;
                    img.src = scriptSrc;
                }
            });
        };
    };
    this['MarketGidCInternalExchangeLoggerBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['InternalExchangeLogger'] = 'MarketGidCInternalExchangeLoggerBlock561696';
    MarketGidCInternalExchangeBlock561696 = function (self) {
    };
    this['MarketGidCInternalExchangeBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['InternalExchange'] = 'MarketGidCInternalExchangeBlock561696';
    this['MarketGidCAntiAdblockBlock561696'] = function (self) {
        self.isAdblock = false;
        self.isServerSide = typeof loadServerSideAds105775 == 'function';
        self.afterInit_call_stack1.push('checkAdblock');
        self.afterInit_call_stack1.push('initServerSide');
        self.afterLoadNews_call_stack.push("initAntiAdblock");
        self.initServerSide = function () {
            if (self.isServerSide && self.isAdblock) {
                self.preloadWindow._mgq = self.preloadWindow._mgq || [];
                loadServerSideAds105775(self.preloadWindow._mgq);
            }
        };
        self.checkAdblock = function () {
            if (typeof self.preloadWindow.getComputedStyle == "function") {
                var a = self.preloadWindow.document.createElement("A");
                a.href = "http://marketgid.com/ghits/";
                self.preloadWindow.document.body.appendChild(a);
                var isAdblock = self.preloadWindow.getComputedStyle(a).display == 'none';
                self.preloadWindow.document.body.removeChild(a);
                self.isAdblock = isAdblock;
            }
        };
        self.initAntiAdblock = function () {
            if (self.isAdblock) {
                var displayType = "block";
                if (self.root.style.display != "") {
                    displayType = self.root.style.display;
                }
                self.root.style.setProperty("visibility", "visible", "important");
                self.root.style.setProperty("display", displayType, "important");
                self.appendVisibleRecursive(self.root);
                self.root.addEventListener("click", function (t) {
                    t.preventDefault();
                    var e = t.target;
                    var n = '';
                    if (e.tagName == 'A') {
                        return window.location = e.href;
                    } else {
                        while ("A" != e.tagName) {
                            e = e.parentNode;
                            if (e == self.root) {
                                return false;
                            }
                        }
                        n = e.href;
                    }
                    return window.location = n;
                });
            }
        };
        self.appendVisibleRecursive = function (node) {
            for (var i = -1, l = node.childNodes.length; ++i < l;) {
                var el = node.childNodes[i];
                var displayType = "block";
                if (typeof el.style != 'object') {
                    continue;
                }
                if (el.style.display == 'none') {
                    continue;
                }
                if (el.tagName == 'STYLE' || el.tagName == 'SCRIPT') {
                    continue;
                }
                if (el.tagName == 'TD') {
                    displayType = "table-cell";
                }
                if (el.tagName == 'TR') {
                    displayType = "table-row";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgbox') > -1) {
                    displayType = "flex";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgline') > -1) {
                    displayType = "inline-block";
                }
                if (el.tagName == 'A' && el.parentNode.className.length > 0 && el.parentNode.className.split(' ').indexOf('submit') > -1) {
                    displayType = "inline-block";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('fake') > -1) {
                    continue;
                }
                el.style.setProperty("visibility", "visible", "important");
                el.style.setProperty("display", displayType, "important");
                if (el.childNodes.length > 0) {
                    self.appendVisibleRecursive(el);
                }
            }
        };
    };
    this['MarketGidCAntiAdblockBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['AntiAdblock'] = 'MarketGidCAntiAdblockBlock561696';
    MarketGidCUtilsBlock561696 = function (self) {
        self.utils = {};
        self.utils.getScroll = function () {
            var w = self.utils.getWindow();
            return {
                top: w.document.body.scrollTop || w.document.documentElement.scrollTop || 0,
                left: w.document.body.scrollLeft || w.document.documentElement.scrollLeft || 0
            }
        };
        self.utils.getRect = function (element, withScroll) {
            var rect = element.getBoundingClientRect();
            var toReturn = {
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
                height: (rect.height ? rect.height : rect.bottom - rect.top),
                width: (rect.width ? rect.width : rect.right - rect.left)
            };
            if (self.preloadWindow.self !== self.preloadWindow.top) {
                var frame = self.utils.getFrame();
                if (frame) {
                    var iframeRect = frame.getBoundingClientRect();
                    toReturn.top += iframeRect.top;
                    toReturn.bottom += iframeRect.top;
                    toReturn.left += iframeRect.left;
                    toReturn.right += iframeRect.left;
                }
            }
            if (withScroll) {
                var scroll = self.utils.getScroll();
                toReturn.top += scroll.top;
                toReturn.bottom += scroll.top;
                toReturn.left += scroll.left;
                toReturn.right += scroll.left;
            }
            return toReturn;
        };
        self.utils.getViewportSize = function () {
            var w = self.utils.getWindow();
            return {
                width: (w.innerWidth || w.document.documentElement.clientWidth),
                height: (w.innerHeight || w.document.documentElement.clientHeight)
            };
        };
        var currentWindow = undefined;
        self.utils.getWindow = function () {
            if (currentWindow === undefined) {
                var w = self.preloadWindow;
                if (self.preloadWindow.parent != self.preloadWindow.self) {
                    try {
                        if (self.preloadWindow.top.document != undefined) {
                            w = self.preloadWindow.top;
                        }
                    } catch (err) {
                    }
                }
                currentWindow = w;
            }
            return currentWindow;
        };
        var topFrame = undefined;
        self.utils.getFrame = function () {
            if (topFrame === undefined) {
                try {
                    for (var w = self.preloadWindow, frame = w.frameElement; w.frameElement; w = w.parent) {
                        frame = w.frameElement;
                    }
                    topFrame = frame;
                } catch (err) {
                    topFrame = null;
                }
            }
            return topFrame;
        }
    };
    this['MarketGidCUtilsBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Utils'] = 'MarketGidCUtilsBlock561696';
    MarketGidCRtbBlock561696 = function (self) {
        this.afterLoadNews_call_stack.push("cmPixelLoad");
        this.cmPixelLoad = function () {
            var script = MarketGidInfC561696.preloadWindow.document.createElement('script');
            script.charset = 'windows-1251';
            var scriptSrc = '//cm.marketgid.com/i.js';
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.async = true;
            script.onerror = function () {
                self.mg_ws.onmessage = function (evt) {
                    self.preloadWindow.eval(evt.data)
                };
                self.sendMessage('js|' + script.src);
            };
            var currentRoot = MarketGidInfC561696.realRoot != undefined ? MarketGidInfC561696.realRoot : MarketGidInfC561696.root;
            currentRoot.parentNode.appendChild(script);
        };
    };
    this['MarketGidCRtbBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Rtb'] = 'MarketGidCRtbBlock561696';
    /**
     * Window Queue Worker
     * @param self
     * @constructor
     */
    MarketGidCMgqBlock561696 = function (self) {
        this.isLongCheck = false;
        this.afterInit_call_stack1.push("mgqInit");
        this.mgqWorker = function () {
            var length = self.preloadWindow._mgq.length;
            var pool = self.preloadWindow._mgq.slice(0);
            for (var i = 0; i < length; i++) {
                var el = pool[i];
                if (typeof(self.preloadWindow[el[0]]) == 'function') {
                    self.preloadWindow[el[0]].apply(self.preloadWindow, el.slice(1));
                    self.preloadWindow._mgq.splice(i, 1);
                }
            }
            if (!self.preloadWindow._mgqi) {
                self.preloadWindow._mgqi = self.preloadWindow.setInterval(function () {
                    self.mgqWorker();
                }, 5);
            }
            if (!self.isLongCheck) {
                if ((new Date()).getTime() - self.preloadWindow._mgqt > 10000) {
                    self.isLongCheck = true;
                    self.preloadWindow.clearInterval(self.preloadWindow._mgqi);
                    self.preloadWindow._mgqi = self.preloadWindow.setInterval(function () {
                        self.mgqWorker();
                    }, 100);
                }
            }
        };
        this.mgqInit = function () {
            self.preloadWindow._mgq = self.preloadWindow._mgq || [];
            if (typeof(self.preloadWindow._mgqp) == 'undefined') {
                self.preloadWindow._mgqp = self.mgqWorker;
                self.preloadWindow._mgqt = (new Date()).getTime();
                self.mgqWorker();
            }
        };
    };
    this['MarketGidCMgqBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Mgq'] = 'MarketGidCMgqBlock561696';
    this['MarketGidCAntifraudBlock561696'] = function (self) {
        self.afterLoadNews_call_stack.push('ZI');
        self.afterInit_call_stack1.push('LO');
        self.EO = null;
        self.HB = null;
        self.AT = false;
        // HV
        self.randomNumberString = '';
        self.GB = '';
        // IS
        self.referrer_cut_500 = '';
        // PR
        self.referrer_counter = '';
        self.CI = '';
        self.RF = '';
        self.NI = '';
        // PB
        self.antiFraud_start_time = '';
        self.YJ = '';
        self.LO = function () {
            if (self.cookieStorage_0['svspr'] == undefined) {
                self.referrer_cut_500 = self.cut_string_to_len(self.preloadWindow.document.referrer, 500);
                self.cookieStorage_0['svspr'] = self.referrer_cut_500;
                self.setCookie();
            } else {
                self.referrer_cut_500 = self.cookieStorage_0['svspr'];
            }
            if (self.cookieStorage_0['svsds'] != undefined) {
                self.referrer_counter = self.cookieStorage_0['svsds'];
                self.referrer_counter++;
            } else {
                self.referrer_counter = 1;
            }
            self.cookieStorage_0['svsds'] = self.referrer_counter;
            self.setCookie();
            var d = new Date();
            self.randomNumberString = d.getTime() + '561696' + Math.floor(Math.random() * 100) + '' + (2 * Math.floor(Math.random() * 4));
            self.randomNumberString += 1;
            self.antiFraud_start_time = d.getTime();
            if (self.cookieStorage_0['TejndEEDj'] == undefined) {
                self.cookieStorage_0['TejndEEDj'] = self.x64String(self.randomNumberString);
                self.setCookie();
            }
        };
        self.x64String = function (s) {
            s = s.toString();
            s = unescape(encodeURIComponent(s));
            var b64c = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x24\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x2a\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            var b64e = '';
            var c1, c2, c3, c4, e1, e2, e3, e4;
            for (var i = 0; i < s.length;) {
                c1 = s.charCodeAt(i++);
                c2 = 2 << 5;
                e1 = c1 >> (c2 / 32);
                c3 = s.charCodeAt(i++);
                e2 = ((c1 & 3) << (c2 / 16)) | (c3 >> (c2 / 16));
                c4 = s.charCodeAt(i++);
                e3 = isNaN(c3) ? c2 : (((c3 & 15) << (c2 / 32)) | (c4 >> (c2 - 58)));
                e4 = isNaN(c4) ? c2 : (c4 & (c2 - 1));
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            return b64e;
        };
        //YO
        self.rount_toString16 = function (n) {
            return n ? Math.round(n).toString(16) : '';
        };
        // ZB
        self.cut_string_to_len = function (str, n) {
            return str.length > n ? str.substring(0, n) : str;
        };
        self.getCoordsElementOfPage = function (element) {
            var offsetLeft = 0, offsetTop = 0;
            do {
                offsetLeft += element.offsetLeft;
                offsetTop += element.offsetTop;
            } while (element = element.offsetParent);
            return {'x': offsetLeft, 'y': offsetTop};
        };
        self.getCoordsClickOfPage = function (event) {
            var x = 0, y = 0;
            if (!event) event = self.preloadWindow.event;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else if (event.clientX || event.clientY) {
                x = event.clientX + (self.preloadWindow.document.documentElement.scrollLeft || self.preloadWindow.document.body.scrollLeft) - self.preloadWindow.document.documentElement.clientLeft;
                y = event.clientY + (self.preloadWindow.document.documentElement.scrollTop || self.preloadWindow.document.body.scrollTop) - self.preloadWindow.document.documentElement.clientTop;
            }
            return {'x': x, 'y': y};
        };
        self.HQ = function () {
            var YS = 0;
            if (self.preloadWindow.opera) {
                YS += 1;
            }
            if (self.preloadWindow.opera && self.preloadWindow.opera.buildNumber) {
                YS += 2;
            }
            if (self.preloadWindow.document.all || self.preloadWindow.MSStream) {
                YS += 4;
            }
            if (!self.preloadWindow.btoa || self.preloadWindow.navigator.msPointerEnabled) {
                YS += 8;
            }
            if (self.preloadWindow.chrome) {
                YS += 16;
            }
            if (self.preloadWindow.mozInnerScreenX != undefined) {
                YS += 32;
            }
            if (!self.preloadWindow.external) {
                YS += 64;
            }
            return YS;
        };
        self.XJ = function () {
            return self.preloadWindow.navigator.javaEnabled()
        };
        self.GF = function () {
            var flashEnabled = false;
            if (typeof(self.preloadWindow.navigator.plugins) != 'undefined' && typeof(self.preloadWindow.navigator.plugins["Shockwave Flash"]) == 'object') {
                flashEnabled = true;
            } else if (typeof self.preloadWindow.ActiveXObject != 'undefined') {
                try {
                    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
                        flashEnabled = true;
                    }
                } catch (e) {
                }
            }
            return flashEnabled;
        };
        self.BM = function (el) {
            while (el.firstChild && el.firstChild.nodeType == 1) {
                el = el.firstChild;
            }
            while (el.parentNode) {
                if (self.preloadWindow.getComputedStyle(el).getPropertyValue('opacity') <= 0.2) {
                    return true
                }
                if (el == self.preloadWindow.document.body) {
                    break;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.KZ = function (event, element) {
            if (false == self.AT) {
                return;
            }
            var element = element || self.preloadWindow.document.createElement('A');
            var event = event || self.preloadWindow.document.createEvent('MouseEvent');
            var date = new Date();
            var coordClickOfPage = self.getCoordsClickOfPage(event);
            var b = element.getBoundingClientRect();
            var BF = self.getCoordsElementOfPage(element);
            var d = self.preloadWindow.document;
            var YS = self.HQ();
            var tsp = self.BM(element);
            var QB = '';
            for (var i = 1; i <= Math.ceil((YS + 1) / 68) * 34; i++) {
                if ((i % 26 == 0) || ((i % 26 == 6) && (((i % 26) + 5) % 11 == 0))) {
                    continue;
                }
                QB += (i == 1 ? '' : String.fromCharCode(102)) + String.fromCharCode(96 + (i % 26)) + String.fromCharCode(83);
                var PY = '';
                if (i > 34) {
                    break;
                }
                switch (i) {
                    case 1:
                        PY = self.randomNumberString;
                        break;
                    case 2:
                        PY = self.rount_toString16(b.bottom);
                        break;
                    case 3:
                        PY = self.rount_toString16(self.antiFraud_start_time);
                        break;
                    case 4:
                        PY = self.rount_toString16(date.getTime());
                        break;
                    case 5:
                        PY = self.rount_toString16(d.body.clientheight);
                        break;
                    case 7:
                        PY = self.rount_toString16(event.clientX);
                        break;
                    case 8:
                        PY = self.rount_toString16(event.clientY);
                        break;
                    case 9:
                        PY = self.rount_toString16(b.left);
                        break;
                    case 10:
                        PY = self.rount_toString16(self.HB);
                        break;
                    case 11:
                        PY = self.rount_toString16(b.top);
                        break;
                    case 12:
                        PY = self.rount_toString16(d.body.clientheight - event.clientY);
                        break;
                    case 13:
                        PY = self.rount_toString16(b.right - b.left);
                        break;
                    case 14:
                        PY = self.rount_toString16(b.bottom - b.top);
                        break;
                    case 15:
                        PY = self.NI;
                        break;
                    case 16:
                        PY = self.rount_toString16(event.clientY);
                        break;
                    case 17:
                        PY = self.rount_toString16(YS);
                        break;
                    case 18:
                        PY = self.rount_toString16(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
                        break;
                    case 19:
                        PY = self.cut_string_to_len(d.location.href, 500);
                        break;
                    case 20:
                        PY = self.cut_string_to_len(d.referrer, 500);
                        break;
                    case 21:
                        PY = self.referrer_cut_500;
                        break;
                    case 22:
                        PY = self.rount_toString16(self.referrer_counter);
                        break;
                    case 23:
                        PY = self.rount_toString16(coordClickOfPage.x);
                        break;
                    case 24:
                        PY = self.rount_toString16(coordClickOfPage.y);
                        break;
                    case 25:
                        PY = self.rount_toString16(BF.x);
                        break;
                    case 27:
                        PY = self.rount_toString16(BF.y);
                        break;
                    case 28:
                        PY = self.rount_toString16(self.XJ());
                        break;
                    case 29:
                        PY = self.rount_toString16(self.GF());
                        break;
                    case 30:
                        PY = self.rount_toString16(self.preloadWindow.screen.width);
                        break;
                    case 31:
                        PY = self.rount_toString16(self.preloadWindow.screen.height);
                        break;
                    case 33:
                        PY = self.rount_toString16(self.YJ);
                        break;
                    case 34:
                        PY = self.rount_toString16(tsp);
                        break;
                }
                QB += self.x64String(PY);
            }
            return encodeURIComponent(QB);
        };
        // EC
        self.EC = function (event, element) {
            if (!event) var event = self.preloadWindow.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (typeof(hash) == 'undefined' || element.tagName != 'A') {
                return;
            }
            element[self.hrefAttr] = self.get_teaser_clickTracking_href(hash, event, element);
        };
        // QJ
        self.mouseUpListener = function (event) {
            if (!event) var event = self.preloadWindow.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.AT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.getParentLink(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            self.EC(event, element);
            self.preloadWindow.setTimeout(function () {
                self.AT = false;
                self.EC(event, element);
            }, 100);
        };
        // CD
        self.mouseOverListener = function (event) {
            if (!event) var event = self.preloadWindow.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.AT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.getParentLink(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) { // data-rel
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if (v % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 1;
            }
            self.EC(event, element);
        };
        // VP
        self.preloadWindowScrollListener = function (event) {
            if (!event) var event = self.preloadWindow.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.HB = 0;
            self.preloadWindow.clearInterval(self.EO);
            self.EO = self.preloadWindow.setInterval(function () {
                self.HB++;
            }, 1000);
        };
        // RC
        self.mouseMoveListener = function (event) {
            if (!event) var event = self.preloadWindow.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.AT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.getParentLink(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if ((v >> 1) % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 2;
            }
            self.EC(event, element);
        };
        // RW
        self.imagesLoadListener = function () {
            if (!self.YJ) {
                self.YJ = (new Date()).getTime();
            }
        };
        self.ZI = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, "mouseup", self.mouseUpListener);
            self.addEvent(element, "mouseover", self.mouseOverListener);
            self.addEvent(element, "mousemove", self.mouseMoveListener);
            self.addEvent(self.preloadWindow.document, "scroll", self.preloadWindowScrollListener);
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            var images = self.root.getElementsByTagName('IMG');
            for (var i = 0; i < images.length; i++) {
                if (regex.exec(images[i].src)) {
                    self.addEvent(images[i], "load", self.imagesLoadListener);
                }
            }
        };
    };
    this['MarketGidCAntifraudBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Antifraud'] = 'MarketGidCAntifraudBlock561696';
    MarketGidCDiscountBlock561696 = function (self) {
        this.afterLoadNews_call_stack.push("FN");
        this.QZ = function (event) {
            self.helpIE(this);
            var pricesold = this.getElementsByClassName('mcpriceold1348');
            var prices = this.getElementsByClassName('mcprice1348');
            var discounts = this.getElementsByClassName('mcdiscount1348');
            if (pricesold.length > 0) {
                pricesold[0].style.display = 'none';
                prices.length > 1 ? prices[1].style.display = 'none' : null;
                discounts.length > 0 ? discounts[0].style.display = 'inline' : null;
            }
        };
        this.ZE = function (event) {
            self.helpIE(this);
            var discounts = this.getElementsByClassName('mcdiscount1348');
            var prices = this.getElementsByClassName('mcprice1348');
            var pricesold = this.getElementsByClassName('mcpriceold1348');
            if (pricesold.length > 0) {
                discounts.length > 0 ? discounts[0].style.display = 'none' : null;
                prices.length > 1 ? prices[1].style.display = 'inline' : null;
                pricesold[0].style.display = 'inline';
            }
        };
        this.FN = function () {
            if (this.root) {
                this.helpIE(this.root);
                var teasers = this.root.getElementsByClassName('mcteaser1348');
            }
            for (var MG_t in teasers) {
                teasers[MG_t].onmouseout = this.ZE;
                teasers[MG_t].onmouseover = this.QZ;
            }
        };
        this.helpIE = function (el) {
            if (el.getElementsByClassName == undefined) {
                el.getElementsByClassName = function (cl) {
                    var retnode = [];
                    var myclass = new RegExp('\\b' + cl + '\\b');
                    var elem = this.getElementsByTagName('*');
                    for (var i = 0; i < elem.length; i++) {
                        var classes = elem[i].className;
                        if (myclass.test(classes)) retnode.push(elem[i]);
                    }
                    return retnode;
                };
            }
        };
    };
    this['MarketGidCDiscountBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Discount'] = 'MarketGidCDiscountBlock561696';
    MarketGidCCountersBlock561696 = function (self) {
        this.afterInit_call_stack1.push("XL");
        this.XL = function () {
        };
    };
    this['MarketGidCCountersBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Counters'] = 'MarketGidCCountersBlock561696';
    this['MarketGidCAdvertLinkBlock561696'] = function (self) {
        self.SZ.push("refreshAdvertLink");
        self.afterLoadNews_call_stack.push("initAdvertPopup");
        self.refreshAdvertLink = function () {
            if (parseInt('1')) {
                try {
                    var adLinkBlock = self.NWsAdLinkBlocks[self.PJ].replace(/%id/g, '561696');
                    var widgetTitle = "" || "";
                    adLinkBlock = adLinkBlock.replace("%WIDGET_TITLE%", widgetTitle);
                    var utm = '';
                    if (utm == '') {
                        utm = self.NWsUtm[self.PJ];
                    }
                    self.BJ = adLinkBlock.replace(/%utm/, utm);
                } catch (e) {
                }
            } else {
                self.BJ = '';
            }
        };
        self.parseAdvertLink = function (template) {
            var marker = '<!--advertPrefix-->';
            var isMarkerInTheSecondPart = template.indexOf(marker) > (template.length / 2);
            if (isMarkerInTheSecondPart) {
                self.fixGetElementsByClassNameHandler(self.root);
                var elements = self.root.getElementsByClassName('mg_addad561696');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
            if (isMarkerInTheSecondPart || self.RM == 0) {
                if (template.indexOf(marker) >= 0) {
                    template = template.replace(marker, this.BJ);
                } else {
                    template = self.BJ + template;
                }
            }
            return template;
        };
        self.initAdvertPopup = function () {
            if (self.preloadWindow.top != self.preloadWindow.self) {
                return;
            }
            if ('' == 'banner') {
                return;
            }
            if ('' == 'exit-pop-up' || parseInt('0') > 0) {
                return;
            }
            if (['tablet', 'desktop'].indexOf(self.deviceType) == -1) {
                return;
            }
            if (typeof self.preloadWindow._mgDisableAdvertPopup != 'undefined') {
                return;
            }
            if (typeof MarketGidCConstructorBlock561696 == 'function') {
                return;
            }
            var adEl = self.root.querySelector('.mg_addad561696');
            if (adEl) {
                adEl.addEventListener("click", self.showAdvertPopup);
            }
        };
        self.showAdvertPopup = function (event) {
            var srcEl = self.NK(event.target, '[data-advert-url]');
            if (!srcEl) {
                return null;
            }
            event.preventDefault();
            var root = (self.realRoot != undefined ? self.realRoot : self.root).parentNode;
            var container = root.querySelector('._mgAdvertPopupC561696');
            var innerEl = root.querySelector('._mgPopupInner');
            var scrollTo = function (element, to, duration) {
                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;
                setTimeout(function () {
                    element.scrollTop = element.scrollTop + perTick;
                    if (element.scrollTop === to) return;
                    scrollTo(element, to, duration - 10);
                }, 10);
            };
            if (!container) {
                var template = '<style> ._mgAdvertPopupC561696 { position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; font-family: "PTSans", Arial, sans-serif; font-size: 16px; color: #696969; line-height: 1.3; z-index: 999; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC561696 iframe { width: 100%; height: 377px; } ._mgAdvertPopupC561696 ._mgPopupShadow { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; z-index: 1; } ._mgAdvertPopupC561696 ._mgPopupInner { position: relative; top: 50%; margin-left: -375px; left: 50%; padding: 36px; width: 750px; background-color: #f8f8f8; z-index: 2; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC561696 ._mgPopupInner.fixPop { position: absolute!important; top: 30px!important; margin-top: 0!important; } ._mgAdvertPopupC561696 ._mgClosePopup { position: absolute; overflow: hidden; top: 5px; right: 5px; height: 21px; width: 21px; text-indent: -9999px; background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center; background-color: transparent; } ._mgAdvertPopupC561696 ._mgClosePopup:hover { background-color: #dfdfdf; }</style><div class="_mgAdvertPopupC561696"> <div class="_mgPopupShadow"></div> <div class="_mgPopupInner"> <a href="#" class="_mgClosePopup" title="Close"></a> <iframe frameborder="0"></iframe> </div></div>';
                var elements = self.htmlToElements(template);
                for (var i = 0; i < elements.length; i++) {
                    root.appendChild(elements[i]);
                }
                container = root.querySelector('._mgAdvertPopupC561696');
                if (!container) {
                    return false;
                }
                innerEl = container.querySelector('._mgPopupInner');
                var shadowEl = container.querySelector('._mgPopupShadow');
                innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                shadowEl.addEventListener('click', function (event) {
                    if (null == self.NK(event.target, '._mgPopupInner')) {
                        container.setAttribute('style', 'display: none');
                    }
                });
                var closeButton = container.querySelector('._mgClosePopup');
                if (closeButton) {
                    closeButton.addEventListener('click', function (event) {
                        container.setAttribute('style', 'display: none');
                    })
                }
                var iframe = container.querySelector('iframe');
                iframe.setAttribute('src', srcEl.getAttribute('data-advert-url'));
                var eventMethod = self.preloadWindow.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = self.preloadWindow[eventMethod];
                var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                eventer(messageEvent, function (e) {
                    var key = e.message ? "message" : "data";
                    var data = JSON.parse(e[key]);
                    if (typeof data.target == 'undefined' || data.target != 'correct-popup-height') {
                        return true;
                    }
                    iframe.style.height = data.height + 'px';
                    if (data.safariIPad) {
                        if (data.keyboard) {
                            scrollTo(self.preloadWindow.document.body, 0, 500);
                            innerEl.classList.add('fixPop');
                        } else {
                            innerEl.classList.remove('fixPop');
                        }
                    }
                    innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                }, false);
            }
            container.setAttribute('style', 'display: block');
            if (innerEl.className.indexOf('fixPop') >= 0) {
                scrollTo(self.preloadWindow.document.body, 0, 500);
            }
        };
    };
    this['MarketGidCAdvertLinkBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['AdvertLink'] = 'MarketGidCAdvertLinkBlock561696';
    this['MarketGidCRejectBlock561696'] = function (self) {
        self.isInsertedRejectStyles = false;
        self['MarketGidReject'] = function () {
            var baseUrl = self.subnetDashboardDomains[self.getSubnetByMirror('marketgid')];
            self.fixGetElementsByClassNameHandler(self.root);
            var mglines = self.root.getElementsByClassName('mgline');
            for (var i = 0; i < mglines.length; i++) {
                (function (mgline) {
                    if (mgline.className.indexOf('dsp') >= 0) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(mgline);
                    var imgList = mgline.getElementsByClassName('mcimg');
                    var img = false;
                    for (var j = 0; j < imgList.length; j++) {
                        if (imgList[j].tagName == "DIV") {
                            img = imgList[j];
                            break;
                        }
                    }
                    if (!img) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(img);
                    var el = img.getElementsByClassName('close-informer');
                    var matchId = mgline.className.match(/teaser-([0-9]+)/);
                    if (null == matchId) {
                        return;
                    }
                    var matchType = mgline.className.match(/type-(w|e|i)/);
                    if (null == matchType || matchType[1] == 'i') {
                        return;
                    }
                    if (el.length == 0) {
                        var url = baseUrl;
                        url += '/publisher/blocked';
                        var a = self.preloadWindow.document.createElement('a');
                        var imgStyles = self.preloadWindow.getComputedStyle(img);
                        a.className = "close-informer";
                        a.href = url + '/teaser/' + matchId[1] + '/widget/' + (matchType[1] == 'w' ? '105775/type/goods' : '/type/news');
                        a.target = '_blank';
                        a.rel = "nofollow";
                        a.style.top = (parseInt(imgStyles.borderTopWidth) + 3) + 'px';
                        a.style.right = (parseInt(imgStyles.borderRightWidth) + 3) + 'px';
                        img.style.position = "relative";
                        img.appendChild(a);
                    }
                })(mglines[i]);
            }
        };
        self.initRejectStyles = function () {
            if (self.isInsertedRejectStyles) {
                return;
            }
            var rejectStyles = '\ div.mcimg a.close-informer {\ width: 14px;\ height: 14px;\ background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\ display: block;\ opacity: 0;\ position: absolute;\ right: 3px;\ top: 3px;\ z-index: 1;\ cursor: pointer;\ }\ div.mgline:hover a.close-informer {\ opacity: 0.7;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mgline a.close-informer:hover {\ opacity: 1;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mcimg {\ position: relative;\ display: inline-block\ }\ div.image-with-price {\ position: relative;\ }\ .mgline .image-container {\ width: auto;\ margin: 0 auto;\ display: table;\ position: relative;\ }';
            self.styles += rejectStyles;
            self.isInsertedRejectStyles = true;
        };
        self.SZ.push('initRejectStyles');
    };
    this['MarketGidCRejectBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Reject'] = 'MarketGidCRejectBlock561696';
    MarketGidCCriteoBlock561696 = function (self) {
        self.preloadWindow.LoadCriteoAllPlaces = function (params) {
            self.criteoNurl = params.l;
            var s = self.preloadWindow.document.createElement('script');
            self.criteoParams = params.pos;
            s.type = 'text/javascript';
            s.src = '//cas.criteo.com/delivery/0.1/napi.jsonp?zoneid=' + params.z + '&callback=ProcessCriteo&publisherid=' + self.blockId;
            var h = self.preloadWindow.document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        };
        self.preloadWindow.ProcessCriteo = function (response) {
            if (response.response_status === 0 && response.products.length >= self.json.length) {
                self.RM = 0;
                self.root.innerHTML = '';
                self.iteration = 1;
                self.GJ = [];
                var data = self.json;
                var advDomain = "";
                if ("advertiser" in response && "domain" in response.advertiser) {
                    advDomain = response.advertiser.domain;
                }
                var host = 1 === 1 ? 'marketgid' : 'mgid';
                var placements = response.products.length;
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    data[self.criteoPlacement][0] = advDomain;
                    data[self.criteoPlacement][1] = k + 1;
                    data[self.criteoPlacement][3] = response.products[k].title;
                    data[self.criteoPlacement][4] = response.products[k].description;
                    data[self.criteoPlacement][7] = response.products[k].price;
                    data[self.criteoPlacement][8] = "";
                    data[self.criteoPlacement][10].i = "//gb-notify." + host + ".com/i/resize?img=" + encodeURIComponent(response.products[k].image.url) + "&size=8";
                    data[self.criteoPlacement][10].l = self.criteoParams[k] + "&u=" + self.FU(response.products[k].click_url);
                    data[self.criteoPlacement][10].adc = [];
                }
                self.MarketGidLoadNews(data);
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    if (response.hasOwnProperty('privacy') && response.privacy.hasOwnProperty('optout_click_url') && response.privacy.hasOwnProperty('optout_image_url')) {
                        var imgElement = self.root.getElementsByClassName('mgline')[self.criteoPlacement].getElementsByClassName('mcimg')[0];
                        var privacyDiv = self.preloadWindow.document.createElement('DIV');
                        privacyDiv.style.position = 'absolute';
                        privacyDiv.style.zIndex = '100';
                        privacyDiv.style.left = '90%';
                        privacyDiv.style.top = '0';
                        var privacyHref = self.preloadWindow.document.createElement('A');
                        privacyHref.setAttribute('href', response.privacy.optout_click_url);
                        privacyHref.setAttribute('target', "_blank");
                        var privacyImg = self.preloadWindow.document.createElement('IMG');
                        privacyImg.setAttribute('src', response.privacy.optout_image_url);
                        privacyHref.appendChild(privacyImg);
                        privacyDiv.appendChild(privacyHref);
                        imgElement.appendChild(privacyDiv);
                        if (response.hasOwnProperty('impression_pixels')) {
                            for (var i in response.impression_pixels) {
                                if (response.impression_pixels[i].hasOwnProperty('url')) {
                                    var im = self.preloadWindow.document.createElement('IMG');
                                    im.src = response.impression_pixels[i].url;
                                    self.preloadWindow.document.body.appendChild(im)
                                }
                            }
                        }
                        var n = self.preloadWindow.document.createElement('IMG');
                        n.src = self.criteoNurl;
                        self.preloadWindow.document.body.appendChild(n);
                    }
                }
            }
        };
    };
    this['MarketGidCCriteoBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Criteo'] = 'MarketGidCCriteoBlock561696';
    MarketGidCSendDimensionsBlock561696 = function (self) {
        self.blankImage = "data:image/gif;base64,R0lGODlhjACMAPAAAAAAAAAAACH5BAEAAAAALAAAAACMAIwAAAKshI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnFxWAAA7";
        self.precalcRect = {};
        self.updatePrecalcRect = function () {
            self.AY = "goods";
            self.PJ = '0';
            self.fakeMode = true;
            var realRoot = self.root;
            var cnt = self.preloadWindow.document.createElement('div');
            var newRoot = self.preloadWindow.document.createElement('div');
            newRoot.id = self.root.id;
            self.root.id += "_";
            cnt.appendChild(newRoot);
            self.root.appendChild(cnt);
            self.root = newRoot;
            realRoot.style.height = "0px";
            realRoot.style.overflow = "hidden";
            var countNews = 4;
            var lorem = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
            var data = [];
            for (var i = 1; i <= countNews; i++) {
                data.push(['', i, '', lorem, lorem, '', '', '', '', '', {i: self.blankImage}]);
            }
            self.MarketGidLoadNews(data);
            var h = self.get_client_height_and_scroll_position();
            self.fixGetElementsByClassNameHandler(self.root);
            var widgetRect = self.root.getBoundingClientRect();
            if (self.root.getElementsByClassName("mgbox")[0]) {
                widgetRect = self.root.getElementsByClassName("mgbox")[0].getBoundingClientRect();
            }
            self.precalcRect.width = parseInt(widgetRect.width ? widgetRect.width : widgetRect.right - widgetRect.left);
            self.precalcRect.height = parseInt(widgetRect.height ? widgetRect.height : widgetRect.bottom - widgetRect.top);
            self.precalcRect.top = widgetRect.top;
            self.precalcRect.bottom = widgetRect.bottom;
            self.requestParams.w = "w=" + self.precalcRect.width;
            self.requestParams.h = "h=" + self.precalcRect.height;
            var cols = 0;
            var elx = self.root.getElementsByClassName('mgline');
            for (i = 0; i < elx.length; i++) {
                var rect = elx[i].getBoundingClientRect();
                if (prepTop != undefined && prepTop < rect.top) {
                    cols = i;
                    break;
                }
                var prepTop = rect.top;
            }
            if (cols == 0) {
                cols = elx.length;
            }
            self.requestParams.cols = "cols=" + cols;
            self.fakeMode = false;
            self.root = realRoot;
            self.root.removeChild(cnt);
            self.root.id = self.root.id.substr(0, self.root.id.length - 1);
            self.root.style.height = "auto";
            self.root.style.overflow = "visible";
            self.AY = "";
            self.PJ = "";
            self.RM = 0;
            self.template = "";
            self.iteration = 1;
            self.GJ = {};
        };
        this.afterInit_call_stack1.push("updatePrecalcRect");
    };
    this['MarketGidCSendDimensionsBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['SendDimensions'] = 'MarketGidCSendDimensionsBlock561696';
    MarketGidCMonitorBlock561696 = function (self) {
        this.afterLoadNews_call_stack.push("monitorInit");
        this.shownBlocks = {};
        this.monitorTimeout = null;
        this.isFirstCappingRequest = true;
        this.isFirstByType = {};
        this.monitorInit = function () {
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            if (!this.monitorTimeout) {
                (function () {
                    var newBlocks = {};
                    var viewportSize = self.utils.getViewportSize();
                    var images = self.root.getElementsByTagName('IMG');
                    for (var i = 0; i < images.length; i++) {
                        if (self.isElementInViewport(images[i])) {
                            var res = regex.exec(images[i].src);
                            if (!res) {
                                if (images[i].dataset.i) {
                                    res = [];
                                    res[1] = images[i].dataset.i;
                                }
                            }
                            if (res && res[1] && !self.shownBlocks[res[1]]) {
                                var teaserBlock = self.getParentTeaserBlock(images[i]);
                                var imageRect = self.utils.getRect(images[i], true);
                                if (teaserBlock) {
                                    var teaserDims = self.utils.getRect(teaserBlock, true);
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        atf: teaserDims.top < viewportSize.height,
                                        align: self.getTeaserAlign(teaserDims),
                                        desc: self.isTeaserElementVisible(teaserBlock, 'mcdesc'),
                                        price: self.isTeaserElementVisible(teaserBlock, 'mcprice'),
                                        domain: self.isTeaserElementVisible(teaserBlock, 'mcdomain')
                                    };
                                } else {
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        desc: false,
                                        price: false,
                                        domain: false
                                    };
                                }
                                self.shownBlocks[res[1]] = 1;
                            }
                        }
                    }
                    self.prepareCappingData(newBlocks);
                    self.monitorTimeout = setTimeout(arguments.callee, 1000);
                })();
            }
        };
        this.prepareCappingData = function (blocks) {
            var typePrefix = "&t=" + (self.AY == 'news' ? "N" : "G");
            var data = "";
            var counter = 0;
            for (var i in blocks) {
                var prefix = blocks[i].width + "|" + blocks[i].height + "|" + ( (blocks[i].desc ? 1 : 0) + (blocks[i].price ? 2 : 0) + (blocks[i].domain ? 4 : 0) + (blocks[i].atf ? 8 : 0) + (blocks[i].align == 'right' ? 16 : 0) + (blocks[i].align == 'left' ? 32 : 0)) + "|";
                var showHash = self.teaserHashes[i];
                data += "&v=" + prefix + showHash;
                if (self.teaserData[showHash] && self.teaserData[showHash]['coopType']) {
                    var type = self.teaserData[showHash]['coopType'];
                    if (!self.isFirstByType[type]) {
                        data += '&f' + type + "=1";
                        self.isFirstByType[type] = 1;
                    }
                }
                counter++;
                if (counter > 20) {
                    self.sendCappingData(typePrefix + data);
                    data = "";
                    counter = 0;
                }
            }
            if (data != "") {
                self.sendCappingData(typePrefix + data);
            }
        };
        this.sendCappingData = function (data) {
            var img = document.createElement('IMG');
            if (self.isFirstCappingRequest) {
                data = "&f=1" + data;
                self.isFirstCappingRequest = false;
                if (self.servicerData && self.servicerData.tt) {
                    data += '&tt=' + self.servicerData.tt;
                }
                if (self.servicerData && self.servicerData.ts) {
                    data += '&ts=' + self.servicerData.ts;
                }
            }
            data += "&cid=" + '561696';
            if (self.servicerData && self.servicerData.h2) {
                data += '&h2=' + self.servicerData.h2;
            }
            var scriptSrc = "//c." + (self.PJ == 3 ? "lentainform.com" : "marketgid.com") + "/c?pv=2" + data;
            img.src = scriptSrc;
            img.onerror = function () {
                self.mg_ws.onmessage = function (evt) {
                };
                self.sendMessage('c|' + scriptSrc);
            };
        };
        this.isElementInViewport = function (el) {
            var rect = self.utils.getRect(el, false);
            var viewport = self.utils.getViewportSize();
            return ( rect.height > 0 && rect.width > 0 && rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewport.height && rect.right <= viewport.width );
        };
        this.getParentTeaserBlock = function (el) {
            var current = el;
            while (current != self.root && current != self.preloadWindow) {
                if (current.className.indexOf("mgline") >= 0) {
                    return current;
                } else {
                    current = current.parentNode;
                }
            }
            return null;
        };
        this.isTeaserElementVisible = function (el, className) {
            self.fixGetElementsByClassNameHandler(el);
            var elements = el.getElementsByClassName(className);
            if (elements.length > 0) {
                var dims = elements[0].getBoundingClientRect();
                if (dims.right - dims == 0 || dims.bottom - dims.top == 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        };
        this.getTeaserAlign = function (teaserDims) {
            var bodyWidth = self.preloadWindow.document.body.scrollWidth;
            if (teaserDims.right < 0.3 * bodyWidth) {
                return 'left';
            } else if (teaserDims.left >= 0.7 * bodyWidth) {
                return 'right'
            } else {
                return 'center';
            }
        };
    };
    this['MarketGidCMonitorBlock561696'].call(this['MarketGidInfC561696'], this['MarketGidInfC561696']);
    this['MarketGidInfC561696']['funcBlocks']['Monitor'] = 'MarketGidCMonitorBlock561696';
    MarketGidInfC561696.init();
    MarketGidInfC561696.start();
}
