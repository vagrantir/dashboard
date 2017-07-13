/*marketgid.comV3*/
if (!this.MarketGidJSON) {
    MarketGidJSON = function () {
        function f(n) {
            return n < 10 ? '0' + n : n;
        }
        Date.prototype.toJSON = function () {
            return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';
        };
        var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };

        function stringify(value, whitelist) {
            var a, i, k, l, r = /["\\\x00-\x1f\x7f-\x9f]/g,
                v;
            switch (typeof value) {
            case 'string':
                return r.test(value) ? '"' + value.replace(r, function (a) {
                    var c = m[a];
                    if (c) {
                        return c;
                    }
                    c = a.charCodeAt();
                    return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                }) + '"' : '"' + value + '"';
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
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
            stringify: stringify,
            parse: function (text, filter) {
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
                if (/^[\],:{}\s]*$/.test(text.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof filter === 'function' ? walk('', j) : j;
                }
                throw new SyntaxError('parseJSON');
            }
        };
    }();
}
MarketGidBaseBlockC620688 = function (root_id, EQ, fallback, containerId) {
    var self = this;
    this.EQ = EQ;
    this.root = this.EQ.document.getElementById(root_id);
    this.containerId = containerId;
    this.CH = fallback;
    this.page = 1;
    this.iteration = 1;
    this.adlink = '';
    this.template = '';
    this.id = 620688;
    this.tickerShow = 0;
    this.WI = [];
    this.YP = {};
    this.QP = {};
    this.HZ = [];
    this.HQ = [];
    this.AE = [];
    this.NW = "";
    this.OH = "";
    this.GT = 0;
    this.CT = {};
    this.RY = "";
    this.GK = "";
    this.crashStep = 0;
    this.loadedDefault = false;
    this.teaserHashes = {};
    this.YI = {};
    this.json = [];
    this.servicerData = {};
    this.fakeMode = 0;
    this.requestParams = {};
    this.CU = "marketgid.com";
    self.templateText = '<div class="mgbox"> {foreach} {if this.iteration != 1}</div>{/if}<div class="mgline"> <div class="image-with-text"> <div class="mcimg"> <a {$target} {$href} ><div class="image-container"><img class="mcimg" {$src}></div></a> </div> <div class="text-elements"> <div class="text_on_hover"> <div class="mctitle"><a {$target} {$href}>{$title}</a> </div> <div class="mcdesc"><a {$target} {$href}>{$desc}</a></div> <div class="fake"> <div class="mcdomain"><a {$target} {$href}>{$source}</a></div> </div> <div class="mgtobottom"> <div class="mcdomain"><a {$target} {$href}>{$source}</a></div> </div> </div> </div> </div> {/foreach}</div> <div class="mgheader"> <!--advertPrefix--> </div></div>';
    self.styles = '@font-face { font-family: \'PFDinDisplayProRegular\'; src: url(\'//cdn.mirs.com/fonts/pfdindisplaypro-regular-webfont.eot\'); src: url(\'//cdn.mirs.com/fonts/pfdindisplaypro-regular-webfont.eot?#iefix\') format(\'embedded-opentype\'), url(\'//cdn.mirs.com/fonts/pfdindisplaypro-regular-webfont.woff\') format(\'woff\'), url(\'//cdn.mirs.com/fonts/pfdindisplaypro-regular-webfont.ttf\') format(\'truetype\'), url(\'//cdn.mirs.com/fonts/pfdindisplaypro-regular-webfont.svg#PFDinDisplayProRegular\') format(\'svg\'); } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; display: -ms-flexbox; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; background: #fff; } .mgheader a { bottom: 4px !important; right: 0 !important; position: absolute !important; margin-right: 4px !important; z-index: 1; } span.mghead { display: none !important; } div.mcimg { margin: 0; padding: 0; text-align: center; } img.mcimg { width: 100% !important; height: auto !important; box-sizing: border-box; margin: 0; } .mctitle { text-align: center; } .mctitle a { font-weight: bold; font-style: normal; text-decoration: none; color: #333333; font-family: \'Open Sans\', sans-serif; } .mcdesc { display: none; text-align: center; } .mcdesc a { font-weight: normal; font-size: 11px; line-height: 11px; font-style: normal; text-decoration: none; color: #666666; font-family: \'Open Sans\', sans-serif; } .mcdomain { display: block; text-align: center; } .mcdomain a { font-weight: normal; font-size: 10px; line-height: 10px; font-style: normal; text-decoration: none; color: #bbbbbb; font-family: \'Open Sans\', sans-serif; padding: 4px; display: block; overflow: hidden; } .mgline { background: none repeat scroll 0 0; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; padding: 0 !important; box-sizing: border-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; vertical-align: top; position: relative; } .mgline .fake { visibility: hidden; position: relative; } .mgline:hover .mctitle a { color: #ff7409; text-decoration: underline !important; } .mgline:hover .mcpriceold + .mcprice { visibility: hidden; } .mgline:hover .mcpriceold { visibility: hidden; } .mgline:hover .mcdiscount { display: block; position: absolute; left: 0; right: 0; top: 5px; } .mgline, .mgbox { min-width: 90px; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: center; } div.mcprice span { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } span.mcpriceold { text-decoration: line-through !important; } .mgarrowbox { position: relative; width: 55%; height: 22px; margin: 0; border-color: transparent; display: inline-block; font-family: \'Open Sans\', sans-serif; } .mgarrowbox:after { left: 100%; top: 50%; content: " "; height: 0; width: 0; position: absolute; pointer-events: none; margin-top: -11px; border: solid 11px inherit; } .mgbuybox { width: 40%; display: inline-block; text-align: right; font-weight: bold; font-family: \'Open Sans\', sans-serif; font-size: 12px; color: #666666; text-decoration: underline; } .mctitle { line-height: 1 !important; } .mcdesc { margin-top: 0; margin-bottom: 2px; } .mcdesc a { line-height: 1.5 !important; } div.mcprice { margin-top: 5px; line-height: 12px !important; } .mgprice { display: inline-block; color: red; } .mgtobottom { position: absolute; bottom: 0; width: 100%; text-align: left; } .mgline .image-with-text, .mgline .mgtobottom { width: 100% !important; margin: 0 auto; } .mgline .image-with-text, .mgline .mgtobottom { max-width: 492px; } .mcpriceold { float: left; padding-left: 5px; } .mcdiscount { display: none; } .mcdomain { display: block; overflow: hidden; padding: 4px; } .mcdomain a { display: block; padding: 5px 0 2px 0; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } div.mcpriceold { text-decoration: line-through !important; } .widgets_logo a { bottom: 4px !important; right: 0 !important; margin-right: 4px !important; z-index: 1; } .mgbox { margin-bottom: 0 !important; } .mgbox { display: -webkit-block; display: block; width: 300px; height: 600px; } .mgline { width: 99%; max-width: 99%; margin: 0.5% 0.5% 25px; } .mctitle { margin-top: 6px; } .mctitle a { font-size: 17px; line-height: 18px; } .mgarrowbox { background: #35c2f4; border-left-color: #35c2f4; } .mghead { display: none !Important; } .mgheads { margin: 10px; font-size: 18px; color: #35C2F4 !important; text-transform: uppercase; text-align: left; font-family: "Open Sans", sans-serif; float: left; display: block; font-weight: 700; } ';
    self.webProtocol = "http:";
    self.clickTracking = "";
    self.CN = '';
    self.funcBlocks = {};
    self.YI = {};
    self.loadedPopularTeaser = false;
    self.deviceType = "desktop";
    self.hrefAttr = "href";
    self.BJ = ["wages"];
    this.SQ = function (str, limit) {
        if (str.length <= limit) return str;
        var word = new Array();
        word = str.split(" ");
        var ret = word[0] + ' ';
        var test;
        for (i = 1; i < word.length; i++) {
            test = ret + word[i];
            if (test.length > limit) return ret + '...';
            else ret += word[i] + ' ';
        }
        return str;
    };
    this.IB = function (str, limit) {
        var word = new Array();
        var i;
        var ret = '';
        word = str.split(" ");
        for (i = 0; i < word.length; i++) {
            if (word[i].length > limit && word[i].search(/&\w+;/) < 0) ret += word[i].substr(0, limit) + ' ' + word[i].substr(limit) + ' ';
            else ret += word[i] + ' ';
        }
        return ret;
    };
    this.GP = function (title) {
        title = this.SQ(title, 40);
        return title;
    };
    this.VV = function (desc) {
        desc = this.SQ(desc, 60);
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
    this.KL = function () {
        if (!self.CH) {
            if (self.EQ.document.getElementById("MarketGidPreloadC" + this.containerId)) {
                this.EQ.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none';
            } else if (self.EQ.document.getElementById("M367553PreloadC" + this.containerId)) {
                self.EQ.document.getElementById("M367553PreloadC" + this.containerId).style.display = 'none';
            }
        } else if (self.CH && this.GT == 0) {
            self.root.innerHTML = "";
        }
    };
    this.MarketGidLoadNews = function (json, servicerData) {
        this.KL();
        if (typeof servicerData != 'undefined') {
            self.servicerData = servicerData;
            if (typeof servicerData.dt != 'undefined') {
                self.deviceType = servicerData.dt;
            }
        }
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.HZ.length; i++) {
                self[self.HZ[i]]();
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
                if (this.CH && this.GT == 0) {
                    this.root.innerHTML = ""
                }
                this.root.innerHTML += this.RY + template + this.GK;
            }
        } else {
            if (this.root && this.GT == 0) {
                this.root.innerHTML = '';
                return;
            }
        }
        this.YP["page"] = this.page;
        this.YP['time'] = (new Date()).getTime();
        this.setCookie();
        var hrefs = this.root.getElementsByTagName("a");
        for (var i = 0; i < hrefs.length; i++) {
            hrefs[i].rel = "nofollow";
        }
        this.MM(self.styles);
        this.GT++;
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.HQ.length; i++) {
                self[self.HQ[i]]();
            }
        } else {
            if (typeof (self.responsiveInit) == "function") {
                self.responsiveInit();
            }
        }
    };
    this.EU = function () {
        var d = this.EQ.document,
            w = this.EQ,
            dE = 'documentElement',
            cH = 'clientHeight',
            cW = 'clientWidth',
            iH = 'innerHeight',
            iW = 'innerWidth',
            sH = 'scrollHeight',
            sW = 'scrollWidth',
            oH = 'offsetHeight',
            oW = 'offsetWidth',
            oL = 'offsetLeft',
            oT = 'offsetTop',
            sT = 'scrollTop',
            sL = 'scrollLeft';
        if (w[iW]) {
            return {
                "c": w[iH],
                "s": w.pageYOffset
            };
        } else if (d[dE] && d[dE][cW]) {
            return {
                "c": d[dE][cH],
                "s": d[dE][sT]
            };
        } else if (d.body[cW]) {
            return {
                "c": d.body[cH],
                "s": d.body[sT]
            };
        }
        return 0;
    };
    this.crashWorker = function () {
        if (MarketGidInfC620688.template == '' && !MarketGidInfC620688.loadedDefault) {
            MarketGidInfC620688.crashStep = 1;
            MarketGidInfC620688.MarketGidRedirectComposite([]);
        }
    };
    this.renderItem = function (n, callbackText, type) {
        if (self.isArray(n)) {
            var p = self.BT(n, type);
            if (!(p.id in self.CT) && p.id != '') {
                if (typeof p.hash !== 'undefined' && typeof p.id !== 'undefined') {
                    self.teaserHashes[p.id] = p.hash;
                }
                self.CT[p.id] = 1;
                var addClasses = [];
                if (!self.loadedPopularTeaser && typeof (p.other.adc) != 'undefined' && (p.other.adc.toString().indexOf('mrsadca') >= 0 || p.other.adc.toString().indexOf('mrsadcp') >= 0)) {
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
                var vars = [[/\{\*.*?\*\}/, ''], [/\{\$href\}/g, self.hrefAttr + '="' + self.JY(p.hash) + '" data-hash="' + p.hash + '"'], [/\{\$pmc_item\}/, self.id], [/\{\$target\}/g, (typeof p.other.type !== 'undefined' && p.other.type == 'i') ? 'target="_self"' : 'target="_blank"'], [/(class\=\"[^+]?)(mgline)([^+]?\")/, '$1$2 ' + addClasses.join(' ') + '$3'], [/\{\$source\}/g, p.source], [/\{\$src\}/g, 'width="492" height="328"' + ' data-i="' + p.id + '" src="' + p.other["i"] + '"'], [/\{\$title\}/g, self.GP(p.title)], [/\{\$desc\}/g, self.VV(p.desc)], [/\{\$iteration\}/g, self.iteration], [/\$iteration/g, self.iteration], [/this\.iteration/g, self.iteration], [/\{\$price\}/g, p.price], [/\{\$priceold\}/g, p.priceold], [/\{\$discount\}/g, p.discount], [/\{if \$price\}/g, "{if '' != p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if !\$price\}/g, "{if '' == p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$priceold\}/g, "{if '' != p.priceold.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$price != " "\}/g, "{if p.price != ' '}"], [/\{if \$price == " "\}/g, "{if p.price == ' '}"], [/\$priceold/g, p.priceold], [/\$price/g, p.price], [/\{if \$rep\}/g, "{if p.isReplic}"]];
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
                self.CT[p.id]++;
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
            var template = typeof (parts[1]) != 'undefined' ? parts[1] : '';
            for (var i = 0; i < json.length; i++) {
                template += inf.renderItem(json[i], parts[2], 'goods');
            }
            template += typeof (parts[3]) != 'undefined' ? parts[3] : '';
            return template;
        };
        return true;
    };
    this.init = function () {
        if (this.root) {
            this.getCookie();
            var cookiePage = parseInt(this.YP["page"]);
            this.WI = this.root.getElementsByTagName('a');
            var pageOffset = (this.EQ['MarketGidPageOffset'] ? parseInt(this.EQ['MarketGidPageOffset']) : 0);
            self.addEvent(self.root, 'click', self.hangNiceLinkListener);
            self.addEvent(self.root, "\x63\x6f\x6e\x74\x65\x78\x74menu", self.hangNiceLinkListener);
            self.addEvent(self.root, 'mouseup', self.hangNiceLinkListener);
            self.addEvent(self.root, 'touchstart', self.hangNiceLinkListener);
            var tmpType = this.YP["mg_type"] ? this.YP["mg_type"] : this.VT;
            var pagesCountNews = parseInt('');
            var pagesCountGoods = parseInt('20');
            var pagesCount = (tmpType == 'news') ? pagesCountNews : pagesCountGoods;
            if (cookiePage != null && cookiePage < pagesCount && cookiePage > 0) {
                this.page = cookiePage + 1;
            } else if (cookiePage > (pagesCount - 1) || cookiePage < 1) {
                this.page = 1 + pageOffset;
            }
            if ((new Date()).getTime() - (this.YP['time'] != undefined ? this.YP['time'] : 0) >= 6e5) {
                this.page = 1 + pageOffset;
            }
            if (!this.page) this.page = 1;
            this.pageUnlim = this.page - 1;
            this.YP["page"] = this.page;
            this.setCookie();
            if (!this.EQ.document.cookie) {
                var dt = new Date();
                this.page = dt.getSeconds() % pagesCount + 1;
            }
            this.NW = '//servicer.' + this.CU + '/';
            var protocol = self.EQ.document.location.protocol;
            self.webProtocol = protocol.indexOf("http") != -1 ? protocol : "http:";
            self.clickTracking = typeof (self.EQ.MGClickTracking) != 'undefined' ? self.EQ.MGClickTracking : "";
            if (!self.generateTemplate(self.templateText)) {
                return;
            }
            self.EQ.onClickExcludes = self.EQ.onClickExcludes || [];
            self.EQ.onClickExcludes.push(self.root);
            for (var i = 0; i < this.AE.length; i++) {
                this[this.AE[i]]();
            }
        }
    };
    this.getMostTopWindow = function () {
        var w = self.EQ;
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
    this.NU = function (forceShow, refresh) {
        var isOnlyOwnSubnet = parseInt('0');
        var isPopunder = parseInt('0');
        var isYandex = self.EQ.navigator.userAgent.indexOf('YaBrowser') >= 0;
        var isMarketgid = self.CU.indexOf('marketgid.com') >= 0;
        if (isMarketgid && isYandex && !isOnlyOwnSubnet && !isPopunder) {
            self.NW = '//servicer.' + self.MUServicers[2] + '/';
        }
        var script = this.EQ.document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        var scriptSrc = "";
        var fs = forceShow ? 'fs/' : '';
        scriptSrc += self.NW + fs + '620688/' + this.page;
        if (typeof (this.EQ.s1) != 'undefined' && this.EQ.s1) {
            scriptSrc += "?src_id=" + this.EQ.s1;
        }
        if (refresh) {
            self.requestParams.rsh = "rsh=1";
        }
        if (this.EQ.MGi != undefined) {
            self.requestParams.geo = "geo=" + this.EQ.MGi;
        }
        self.requestParams.pv = "pv=5";
        self.requestParams.cbuster = "cbuster=" + (this.EQ.MG_CacheBuster ? this.EQ.MG_CacheBuster : ((new Date().getTime()) + '' + Math.floor((Math.random() * 1000000000) + 1)));
        if (JSON.parse('["wages"]').indexOf('int_exchange') >= 0) {
            var ogUrlEl = self.EQ.document.querySelector('meta[property="og:url"]');
            if (ogUrlEl) {
                self.requestParams.ogurl = 'ogurl=' + ogUrlEl.getAttribute('content');
            }
            var ogTitleEl = self.EQ.document.querySelector('meta[property="og:title"]');
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
        params.push('ref=' + encodeURIComponent(this.EQ.document.referrer));
        var isIframe = self.EQ.self !== self.EQ.top;
        if (isIframe) {
            params.push('iframe=1');
        }
        try {
            if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1000 < Date.now()) {
                var refererUrl = isIframe ? this.EQ.parent.document.referrer : this.EQ.document.referrer;
                var matchDomain = refererUrl.match(/:\/\/([^\/:]+)/i);
                sessionStorage.MG_Session_pr = matchDomain && matchDomain[1] ? matchDomain[1] : '';
                sessionStorage.MG_Session_lu = isIframe ? this.EQ.parent.location.href : this.EQ.location.href;
            }
            sessionStorage.MG_Session_lastUpdate = Date.now();
            if (sessionStorage && sessionStorage.MG_Session_pr) {
                params.push('pr=' + encodeURIComponent(sessionStorage.MG_Session_pr))
            }
            if (sessionStorage && sessionStorage.MG_Session_lu) {
                params.push('lu=' + encodeURIComponent(sessionStorage.MG_Session_lu))
            }
        } catch (err) {}
        var w = self.getMostTopWindow();
        if (typeof w._mgPageView367553 == 'undefined') {
            w._mgPageView367553 = (new Date()).getTime().toString(16) + (Math.round(Math.random() * 1000000000) + 2147483648).toString(16);
            params.push('pageView=1');
        } else {
            params.push('pageView=0');
        }
        params.push('pvid=' + w._mgPageView367553);
        scriptSrc += params.join("&");
        script.src = scriptSrc;
        (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(script);
        script.onerror = function () {
            self.mg_ws.onmessage = function (evt) {
                self.EQ.eval(evt.data)
            };
            self.sendMessage('gb|' + script.src);
            self.isAdblock = true;
        };
    };
    this.start = function () {
        if (self.root && self.GT == 0) {
            self.NU();
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
var mgCanLoad620688 = false;
var mgFallback620688 = false;
if (document.getElementById("MG_ID")) mgCanLoad620688 = true;
if (document.getElementById("MarketGidComposite620688") || document.getElementById("M367553Composite620688")) {
    mgCanLoad620688 = true;
    mgFallback620688 = true;
}
if (this['mgCanLoad620688']) {
    if (!mgFallback620688) {
        var rootId620688 = document.getElementById("MG_ID").innerHTML;
        var div620688 = parent.window.document.createElement('div');
        div620688.id = "MarketGidComposite620688";
        var mgRootId620688 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId620688) ? ("MarketGidScriptRootC" + rootId620688) : ("M367553ScriptRootC" + rootId620688);
        parent.window.document.getElementById(mgRootId620688).appendChild(div620688);
        MarketGidInfC620688 = new MarketGidBaseBlockC620688(div620688.id, parent.window, false, rootId620688);
    } else {
        var mgRootId620688 = document.getElementById("MarketGidComposite620688") ? "MarketGidComposite620688" : "M367553Composite620688";
        MarketGidInfC620688 = new MarketGidBaseBlockC620688(mgRootId620688, window, true, 0);
    }
    this['MarketGidCMainBlock620688'] = function (self) {
        self.mg_ws = typeof (mg_ws620688) == "object" ? mg_ws620688 : {};
        self.mg_ws_location = "wss://wsp.marketgid.com/ws";
        self.waitForSocketConnection = function (e, t) {
            setTimeout(function () {
                return 1 === e.readyState ? void(null != t && t()) : void self.waitForSocketConnection(e, t)
            }, 5)
        };
        self.HQ.push("AZ");
        self.XW = function (hash, event, element) {
            var href = "";
            var data = self.YI[hash];
            if (element && typeof self.EQ._mgExternalLinkChanger !== 'undefined' && self.EQ._mgExternalLinkChanger == 1) {
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
            if (typeof self.HC == 'function' && data && data['coopType'] != 'i') {
                var afParams = self.HC(event, element);
                if (afParams) {
                    var suffix = '620688';
                    href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'k=' + suffix + 'f' + afParams;
                }
            }
            if (true == parseInt('0')) {
                var template = '//%host%/r/%title%?u=%rurl%';
                template = template.replace(/^(\/\/)/, self.EQ.location.protocol + '$1');
                template = template.replace(/(%host%)/, self.EQ.location.host);
                template = template.replace(/(%title%)/, self.XK(data[3]));
                href = template.replace(/(%rurl%)/, self.QE(href, true));
            }
            return href;
        };
        self.JY = function (hash, event, element) {
            var href;
            var data = self.YI[hash];
            if (data.other['sdl'] == 1 && data['coopType'] != 'i') {
                href = self.clickTracking;
                if (typeof (data.other['dl']) != 'undefined' && data.other['dl'] != '') {
                    href += data.other['dl'];
                } else {
                    var source = decodeURIComponent(data[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, '')).toLowerCase();
                    var title = decodeURIComponent(data[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, '')).replace(/\s/g, '_');
                    href += self.webProtocol + '//' + (source ? source + '/' : '') + title;
                }
            } else {
                href = self.XW(hash, event, element);
            }
            return href;
        };
        self.XK = function (str) {
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
        self.OE = function (el) {
            while (el.tagName !== 'BODY') {
                if (el.tagName == "A") {
                    return el;
                } else {
                    el = el.parentNode;
                }
            }
            return null;
        };
        self.randomNumberString = function (element, selector) {
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
        self.BT = function (data, type) {
            var t = {};
            t.source = data[0];
            t.id = data[1];
            t.title = (typeof data[3] != 'undefined') ? data[3] : "";
            t.desc = (typeof data[4] != 'undefined') ? data[4] : "";
            if (type.toLowerCase() == 'news') {
                t.mirror = data[5] ? data[5] : self.MUs[self.XG];
                t.hash = data[6];
                t.other = data[7];
                t.price = " ";
                t.priceold = t.discount = "";
                t.isReplic = false;
            } else {
                t.mirror = self.MUs[self.XG];
                t.key = data[6];
                t.price = (typeof data[7] != 'undefined') ? data[7].replace(".00", "") : "";
                t.priceold = (typeof data[8] != 'undefined') ? data[8].replace(".00", "") : "";
                t.discount = t.priceold.replace(new RegExp('[^0-9.]'), '') == '' ? '' : Math.floor((1 * /\d+(?:\.\d+)?/.exec(t.priceold) - 1 * /\d+(?:\.\d+)?/.exec(t.price)) * 100 / (/\d+(?:\.\d+)?/).exec(t.priceold)) + '%';
                t.hash = data[9];
                t.other = (typeof data[10] != 'undefined') ? data[10] : {};
                var titleLower = t.title.toLowerCase();
                var descLower = t.desc.toLowerCase();
                var replicWords = ["копия", "подделка", "реплика", "как оригинал"];
                var replicInsertWords = ["Копия. ", "Реплика. "];
                if (data[5] == '1') {
                    t.isReplic = true;
                    for (var i = 0; i < replicWords.length; i++) {
                        if (self.GP(titleLower).indexOf(replicWords[i]) > -1 || self.VV(descLower).indexOf(replicWords[i]) > -1) {
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
            self.YI[t.hash] = data;
            self.YI[t.hash]['id'] = t.id;
            self.YI[t.hash]['img'] = typeof (t.other['i']) != 'undefined' ? t.other['i'] : null;
            self.YI[t.hash]['source'] = t.source;
            self.YI[t.hash]['img'] = t.other["i"];
            self.YI[t.hash]['type'] = type;
            self.YI[t.hash]['link'] = typeof (t.other['l']) != 'undefined' ? t.other['l'] : null;
            self.YI[t.hash]['mirror'] = t.mirror;
            self.YI[t.hash]['coopType'] = typeof (t.other['type']) != 'undefined' ? t.other['type'] : null;
            self.YI[t.hash]['clicktrackers'] = typeof (t.other['clicktrackers']) != 'undefined' ? t.other['clicktrackers'] : [];
            return t;
        };
        self.QE = function (s, replaceChars) {
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
                var event = self.EQ.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.OE(element);
                if (null == element) {
                    return;
                }
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (hash != undefined) {
                if (typeof self.YI[hash] != 'undefined' && typeof self.YI[hash]['other'] != 'undefined' && typeof self.YI[hash]['other']['sdl'] != 'undefined') {
                    self.YI[hash]['other']['sdl'] = 0;
                }
                element[self.hrefAttr] = self.XW(hash, event, element);
            }
        };
        self.htmlToElement = function (html) {
            var template = document.createElement('div');
            template.innerHTML = html;
            return template.firstChild;
        };
        self.htmlToElements = function (html) {
            var template = self.EQ.document.createElement('div');
            template.innerHTML = html;
            return Array.prototype.slice.call(template.childNodes);
        };
        self.sendMessage = function (msg) {
            if (typeof self.mg_ws == 'object' && self.mg_ws.__proto__.toString() == '[object Worker]') {
                self.mg_ws.postMessage(msg);
            } else {
                var h = self.mg_ws.onmessage;
                try {
                    self.mg_ws = new Worker(URL.createObjectURL(new Blob(['eval(atob(\'ZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSl7dmFyIGg9bWdfd3Mub25tZXNzYWdlOyBtZ193cy5yZWFkeVN0YXRlPT1tZ193cy5DTE9TRUQmJihtZ193cz1uZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSksbWdfd3Mub25tZXNzYWdlPWgsd2FpdEZvclNvY2tldENvbm5lY3Rpb24obWdfd3MsZnVuY3Rpb24oKXttZ193cy5zZW5kKGUpfSl9ZnVuY3Rpb24gd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIDE9PT1lLnJlYWR5U3RhdGU/dm9pZChudWxsIT10JiZ0KCkpOnZvaWQgd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KX0sNSl9OyB2YXIgbWdfd3NfbG9jYXRpb24gPSAid3NzOi8vd3NwLm1hcmtldGdpZC5jb20vd3MiOyBtZ193cyA9IG5ldyBXZWJTb2NrZXQobWdfd3NfbG9jYXRpb24pLCBtZ193cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAodCkge3Bvc3RNZXNzYWdlKHQuZGF0YSk7fSwgb25tZXNzYWdlID0gZnVuY3Rpb24oZSl7c2VuZE1lc3NhZ2UoZS5kYXRhKX0=\'))']), {
                        type: "application/javascript"
                    }));
                } catch (err) {
                    self.isAdblock = true;
                    self.initServerSide();
                }
                self.mg_ws.onmessage = h;
                self.mg_ws.postMessage(msg);
            }
        };
        self.AZ = function () {
            setTimeout(function () {
                if (typeof self.mg_ws != "object" || !(self.mg_ws instanceof WebSocket) || !self.XR(self.root)) {
                    return;
                }
                var dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
                var uid = self.blockType == 'news' ? '' : '56936348';
                self.sendMessage('a| ' + dt + ': ' + uid + ' - ' + self.EQ.location.href);
            }, 2000);
        };
        self.XR = function (el) {
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
        self.MM = function (style, container) {
            style = style.replace(/(@media \([^(]*\) {)/g, "$1}");
            style = style.replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + this.getMainCssSelector() + " $2");
            style = style.replace(/((@media \([^(]*\) \{)\})/g, "$2");
            if (style == "") return;
            if (!container) {
                var MGst = container ? container : this.EQ.document.createElement('style');
                MGst.className = 'MarketGidC620688';
                MGst.type = 'text/css';
                (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(MGst);
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    MGst.appendChild(this.EQ.document.createTextNode(style));
                };
            } else {
                var MGst = container;
                MGst.className = 'MarketGidC620688';
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    while (MGst.firstChild) {
                        MGst.removeChild(MGst.firstChild);
                    }
                    MGst.appendChild(this.EQ.document.createTextNode(style));
                };
            }
        };
    };
    this['MarketGidCMainBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Main'] = 'MarketGidCMainBlock620688';
    MarketGidCCookieBlock620688 = function (self) {
        this.storageName = "MarketGidStorage" + (this.EQ.MarketGidPageOffset ? this.EQ.MarketGidPageOffset : "");
        this.TP = function () {
            var matches = this.EQ.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"));
            var res = {};
            if (matches) {
                try {
                    res = MarketGidJSON.parse(decodeURIComponent(matches[1]));
                } catch (e) {};
            }
            return res;
        };
        this.getCookie = function () {
            var value = this.TP();
            if (value["C620688"] != undefined) {
                this.YP = value["C620688"];
            } else this.YP = {};
            if (value["0"] != undefined) {
                this.QP = value["0"];
            } else this.QP = {};
        };
        this.setCookie = function () {
            var totalCookie = this.TP();
            totalCookie["C620688"] = this.YP;
            totalCookie["0"] = this.QP;
            var value = encodeURIComponent(MarketGidJSON.stringify(totalCookie));
            this.EQ.document.cookie = this.storageName + "=" + value + ";path=/";
        };
    };
    this['MarketGidCCookieBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Cookie'] = 'MarketGidCCookieBlock620688';
    MarketGidCSubnetsBlock620688 = function () {
        var self = this;
        self.funcBlocks["Subnets"] = "MarketGidCSubnetsBlock620688";
        this.AE.push("GA");
        this.XG = "";
        this.MUs = {};
        this.MUServicers = {};
        this.MUsImages = {};
        this.MUsAdvert = {};
        this.MUsAdLinkBlocks = {};
        this.MUsUtm = {};
        this.subnetDashboardDomains = {};
        this.MUNames = {};
        this.MUs['0'] = 'marketgid.com';
        this.MUServicers['0'] = 'marketgid.com';
        this.MUNames['marketgid'] = parseInt('0');
        this.MUsImages['0'] = 'marketgid.com';
        this.MUsAdLinkBlocks['0'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
        this.MUsUtm['0'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['0'] = '//dashboard.marketgid.com';
        this.MUs['1'] = 'ladycenter.ru';
        this.MUServicers['1'] = 'marketgid.com';
        this.MUNames['lady'] = parseInt('1');
        this.MUsImages['1'] = 'marketgid.com';
        this.MUsAdLinkBlocks['1'] = '<div class="mg_addad%id"><a href="http://ladycenter.ru/celevie-posetiteli.html%utm%id" class="mg_addad%id" target="_blank"><img src="//img.marketgid.com/images/search/2/icon-2.png"> Добавить объявление</a></div><style type="text/css">div.mg_addad%id{text-align: center;} div.mg_addad%id a{font:normal 11px Tahoma, Arial, sans-serif; color:#009966; text-decoration: none;} div.mg_addad%id img{margin-bottom: -1px;}</style>';
        this.MUsUtm['1'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['1'] = '//dashboard.marketgid.com';
        this.MUs['2'] = 'tovarro.com';
        this.MUServicers['2'] = 'tovarro.com';
        this.MUNames['tovarro'] = parseInt('2');
        this.MUsImages['2'] = 'tovarro.com';
        this.MUsAdLinkBlocks['2'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://tovarro.com/%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a {background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;width: 48px;height: 20px;position:absolute;display: block;bottom: -15px;right: 4px;opacity: 0.7;}.widgets_logo%id a:hover {opacity: 1;background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;}.mgbox{    margin-bottom:20px!important;}</style>';
        this.MUsUtm['2'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['2'] = '//dashboard.tovarro.com';
        this.MUs['3'] = 'lentainform.com';
        this.MUServicers['3'] = 'lentainform.com';
        this.MUNames['lentainform'] = parseInt('3');
        this.MUsImages['3'] = 'lentainform.com';
        this.MUsAdLinkBlocks['3'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo"><a href="http://partner.lentainform.com" target="_blank"></a></div></div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform_hover.png) no-repeat}</style>';
        this.MUsUtm['3'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['3'] = '//dashboard.lentainform.com';
        this.MUs['4'] = 'marketgid.com';
        this.MUServicers['4'] = 'marketgid.com';
        this.MUNames['marketgid'] = parseInt('4');
        this.MUsImages['4'] = 'marketgid.com';
        this.MUsAdLinkBlocks['4'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div><style>.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
        this.MUsUtm['4'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['4'] = '//dashboard.marketgid.com';
        this.AE.push("GA");
        var informerData = [];
        informerData.push({
            "id": "620688",
            "protocol": "5",
            "type": "Goods",
            "subnet": "0"
        });
        this.GA = function () {
            for (var i = 0; i < informerData.length; i++) {
                var tickerId = informerData[i].id;
                if ((informerData[i].subnet !== '1') ^ ('0' === '1')) {
                    (function (type) {
                        self.EQ["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.CN = type.toLowerCase();
                            self.XG = '0';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.EQ["MarketGidCReject620688"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('1' === '1')) {
                    (function (type) {
                        self.EQ["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.CN = type.toLowerCase();
                            self.XG = '1';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.EQ["MarketGidCReject620688"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('2' === '1')) {
                    (function (type) {
                        self.EQ["TovarroLoad" + type + tickerId] = function (json, awd) {
                            self.CN = type.toLowerCase();
                            self.XG = '2';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.EQ["TovarroCReject620688"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('3' === '1')) {
                    (function (type) {
                        self.EQ["LentaInformLoad" + type + tickerId] = function (json, awd) {
                            self.CN = type.toLowerCase();
                            self.XG = '3';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.EQ["LentaInformCReject620688"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('4' === '1')) {
                    (function (type) {
                        self.EQ["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.CN = type.toLowerCase();
                            self.XG = '4';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.EQ["MarketGidCReject620688"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
            }
        };
        self.getSubnetByMirror = function (mirror) {
            var subnet = 0;
            if (typeof self.MUNames[mirror] != 'undefined') {
                subnet = self.MUNames[mirror];
            }
            return subnet;
        }
    };
    this['MarketGidCSubnetsBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Subnets'] = 'MarketGidCSubnetsBlock620688';
    MarketGidCInternalExchangeLoggerBlock620688 = function (self) {
        self.HQ.push("iExchangeLoggerInit");
        self.iExchangeLoggerInit = function () {
            self.addEvent(self.root, "click", function (event) {
                if (!event) var event = self.EQ.event;
                if (!event.target) {
                    event.target = event.srcElement;
                }
                self.VW = true;
                var element = event.target;
                if (element.tagName != 'A') {
                    var element = self.OE(element);
                    if (null == element) {
                        return;
                    }
                }
                if (!element.hasAttribute('data-hash')) {
                    return;
                }
                var hash = element.getAttribute('data-hash');
                if (self.YI[hash] && self.YI[hash]['coopType'] == 'i') {
                    var img = document.createElement('IMG');
                    var data = "cid=620688&tid=" + self.YI[hash]['id'] + "&h=" + hash;
                    if (typeof self.servicerData['isBot'] !== 'undefined') {
                        data += "&bot=" + self.servicerData['isBot'];
                    }
                    if (typeof self.servicerData['tt'] !== 'undefined') {
                        data += "&tt=" + self.servicerData['tt'];
                    }
                    if (typeof self.servicerData['ts'] !== 'undefined') {
                        data += "&ts=" + self.servicerData['ts'];
                    }
                    var scriptSrc = "//c." + (self.XG == 3 ? "lentainform.com" : "marketgid.com") + "/clie?" + data;
                    img.src = scriptSrc;
                }
            });
        };
    };
    this['MarketGidCInternalExchangeLoggerBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['InternalExchangeLogger'] = 'MarketGidCInternalExchangeLoggerBlock620688';
    MarketGidCInternalExchangeBlock620688 = function (self) {};
    this['MarketGidCInternalExchangeBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['InternalExchange'] = 'MarketGidCInternalExchangeBlock620688';
    this['MarketGidCAntiAdblockBlock620688'] = function (self) {
        self.isAdblock = false;
        self.isServerSide = typeof loadServerSideAds56936348 == 'function';
        self.AE.push('checkAdblock');
        self.AE.push('initServerSide');
        self.HQ.push("initAntiAdblock");
        self.initServerSide = function () {
            if (self.isServerSide && self.isAdblock) {
                self.EQ._mgq = self.EQ._mgq || [];
                loadServerSideAds56936348(self.EQ._mgq);
            }
        };
        self.checkAdblock = function () {
            if (typeof self.EQ.getComputedStyle == "function") {
                var a = self.EQ.document.createElement("A");
                a.href = "http://marketgid.com/ghits/";
                self.EQ.document.body.appendChild(a);
                var isAdblock = self.EQ.getComputedStyle(a).display == 'none';
                self.EQ.document.body.removeChild(a);
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
    this['MarketGidCAntiAdblockBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['AntiAdblock'] = 'MarketGidCAntiAdblockBlock620688';
    MarketGidCUtilsBlock620688 = function (self) {
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
            if (self.EQ.self !== self.EQ.top) {
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
                var w = self.EQ;
                if (self.EQ.parent != self.EQ.self) {
                    try {
                        if (self.EQ.top.document != undefined) {
                            w = self.EQ.top;
                        }
                    } catch (err) {}
                }
                currentWindow = w;
            }
            return currentWindow;
        };
        var topFrame = undefined;
        self.utils.getFrame = function () {
            if (topFrame === undefined) {
                try {
                    for (var w = self.EQ, frame = w.frameElement; w.frameElement; w = w.parent) {
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
    this['MarketGidCUtilsBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Utils'] = 'MarketGidCUtilsBlock620688';
    MarketGidCRtbBlock620688 = function (self) {
        this.HQ.push("cmPixelLoad");
        this.cmPixelLoad = function () {
            var script = MarketGidInfC620688.EQ.document.createElement('script');
            script.charset = 'utf-8';
            var scriptSrc = '//cm.marketgid.com/i.js';
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.async = true;
            script.onerror = function () {
                self.mg_ws.onmessage = function (evt) {
                    self.EQ.eval(evt.data)
                };
                self.sendMessage('js|' + script.src);
            };
            var currentRoot = MarketGidInfC620688.realRoot != undefined ? MarketGidInfC620688.realRoot : MarketGidInfC620688.root;
            currentRoot.parentNode.appendChild(script);
        };
    };
    this['MarketGidCRtbBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Rtb'] = 'MarketGidCRtbBlock620688';
    MarketGidCMgqBlock620688 = function (self) {
        this.isLongCheck = false;
        this.AE.push("mgqInit");
        this.mgqWorker = function () {
            var length = self.EQ._mgq.length;
            var pool = self.EQ._mgq.slice(0);
            for (var i = 0; i < length; i++) {
                var el = pool[i];
                if (typeof (self.EQ[el[0]]) == 'function') {
                    self.EQ[el[0]].apply(self.EQ, el.slice(1));
                    self.EQ._mgq.splice(i, 1);
                }
            }
            if (!self.EQ._mgqi) {
                self.EQ._mgqi = self.EQ.setInterval(function () {
                    self.mgqWorker();
                }, 5);
            }
            if (!self.isLongCheck) {
                if ((new Date()).getTime() - self.EQ._mgqt > 10000) {
                    self.isLongCheck = true;
                    self.EQ.clearInterval(self.EQ._mgqi);
                    self.EQ._mgqi = self.EQ.setInterval(function () {
                        self.mgqWorker();
                    }, 100);
                }
            }
        };
        this.mgqInit = function () {
            self.EQ._mgq = self.EQ._mgq || [];
            if (typeof (self.EQ._mgqp) == 'undefined') {
                self.EQ._mgqp = self.mgqWorker;
                self.EQ._mgqt = (new Date()).getTime();
                self.mgqWorker();
            }
        };
    };
    this['MarketGidCMgqBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Mgq'] = 'MarketGidCMgqBlock620688';
    this['MarketGidCAntifraudBlock620688'] = function (self) {
        self.HQ.push('VD');
        self.AE.push('YU');
        self.TB = null;
        self.SR = null;
        self.VW = false;
        self.SN = '';
        self.XU = '';
        self.AK = '';
        self.FO = '';
        self.NN = '';
        self.UF = '';
        self.VK = '';
        self.trim_str_by_limit_with_elipsis = '';
        self.QI = '';
        self.YU = function () {
            if (self.QP['svspr'] == undefined) {
                self.AK = self.KF(self.EQ.document.referrer, 500);
                self.QP['svspr'] = self.AK;
                self.setCookie();
            } else {
                self.AK = self.QP['svspr'];
            }
            if (self.QP['svsds'] != undefined) {
                self.FO = self.QP['svsds'];
                self.FO++;
            } else {
                self.FO = 1;
            }
            self.QP['svsds'] = self.FO;
            self.setCookie();
            var d = new Date();
            self.SN = d.getTime() + '620688' + Math.floor(Math.random() * 100) + '' + (2 * Math.floor(Math.random() * 4));
            self.SN += 1;
            self.trim_str_by_limit_with_elipsis = d.getTime();
            if (self.QP['TejndEEDj'] == undefined) {
                self.QP['TejndEEDj'] = self.x64String(self.SN);
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
        self.EW = function (n) {
            return n ? Math.round(n).toString(16) : '';
        };
        self.KF = function (str, n) {
            return str.length > n ? str.substring(0, n) : str;
        };
        self.getCoordsElementOfPage = function (element) {
            var offsetLeft = 0,
                offsetTop = 0;
            do {
                offsetLeft += element.offsetLeft;
                offsetTop += element.offsetTop;
            } while (element = element.offsetParent);
            return {
                'x': offsetLeft,
                'y': offsetTop
            };
        };
        self.getCoordsClickOfPage = function (event) {
            var x = 0,
                y = 0;
            if (!event) event = self.EQ.event;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else if (event.clientX || event.clientY) {
                x = event.clientX + (self.EQ.document.documentElement.scrollLeft || self.EQ.document.body.scrollLeft) - self.EQ.document.documentElement.clientLeft;
                y = event.clientY + (self.EQ.document.documentElement.scrollTop || self.EQ.document.body.scrollTop) - self.EQ.document.documentElement.clientTop;
            }
            return {
                'x': x,
                'y': y
            };
        };
        self.JB = function () {
            var JA = 0;
            if (self.EQ.opera) {
                JA += 1;
            }
            if (self.EQ.opera && self.EQ.opera.buildNumber) {
                JA += 2;
            }
            if (self.EQ.document.all || self.EQ.MSStream) {
                JA += 4;
            }
            if (!self.EQ.btoa || self.EQ.navigator.msPointerEnabled) {
                JA += 8;
            }
            if (self.EQ.chrome) {
                JA += 16;
            }
            if (self.EQ.mozInnerScreenX != undefined) {
                JA += 32;
            }
            if (!self.EQ.external) {
                JA += 64;
            }
            return JA;
        };
        self.WM = function () {
            return self.EQ.navigator.javaEnabled()
        };
        self.NS = function () {
            var flashEnabled = false;
            if (typeof (self.EQ.navigator.plugins) != 'undefined' && typeof (self.EQ.navigator.plugins["Shockwave Flash"]) == 'object') {
                flashEnabled = true;
            } else if (typeof self.EQ.ActiveXObject != 'undefined') {
                try {
                    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
                        flashEnabled = true;
                    }
                } catch (e) {}
            }
            return flashEnabled;
        };
        self.WU = function (el) {
            while (el.firstChild && el.firstChild.nodeType == 1) {
                el = el.firstChild;
            }
            while (el.parentNode) {
                if (self.EQ.getComputedStyle(el).getPropertyValue('opacity') <= 0.2) {
                    return true
                }
                if (el == self.EQ.document.body) {
                    break;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.HC = function (event, element) {
            if (false == self.VW) {
                return;
            }
            var element = element || self.EQ.document.createElement('A');
            var event = event || self.EQ.document.createEvent('MouseEvent');
            var date = new Date();
            var coordClickOfPage = self.getCoordsClickOfPage(event);
            var b = element.getBoundingClientRect();
            var VY = self.getCoordsElementOfPage(element);
            var d = self.EQ.document;
            var JA = self.JB();
            var tsp = self.WU(element);
            var ZP = '';
            for (var i = 1; i <= Math.ceil((JA + 1) / 68) * 34; i++) {
                if ((i % 26 == 0) || ((i % 26 == 6) && (((i % 26) + 5) % 11 == 0))) {
                    continue;
                }
                ZP += (i == 1 ? '' : String.fromCharCode(102)) + String.fromCharCode(96 + (i % 26)) + String.fromCharCode(83);
                var KN = '';
                if (i > 34) {
                    break;
                }
                switch (i) {
                case 1:
                    KN = self.SN;
                    break;
                case 2:
                    KN = self.EW(b.bottom);
                    break;
                case 3:
                    KN = self.EW(self.trim_str_by_limit_with_elipsis);
                    break;
                case 4:
                    KN = self.EW(date.getTime());
                    break;
                case 5:
                    KN = self.EW(d.body.clientheight);
                    break;
                case 7:
                    KN = self.EW(event.clientX);
                    break;
                case 8:
                    KN = self.EW(event.clientY);
                    break;
                case 9:
                    KN = self.EW(b.left);
                    break;
                case 10:
                    KN = self.EW(self.SR);
                    break;
                case 11:
                    KN = self.EW(b.top);
                    break;
                case 12:
                    KN = self.EW(d.body.clientheight - event.clientY);
                    break;
                case 13:
                    KN = self.EW(b.right - b.left);
                    break;
                case 14:
                    KN = self.EW(b.bottom - b.top);
                    break;
                case 15:
                    KN = self.VK;
                    break;
                case 16:
                    KN = self.EW(event.clientY);
                    break;
                case 17:
                    KN = self.EW(JA);
                    break;
                case 18:
                    KN = self.EW(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
                    break;
                case 19:
                    KN = self.KF(d.location.href, 500);
                    break;
                case 20:
                    KN = self.KF(d.referrer, 500);
                    break;
                case 21:
                    KN = self.AK;
                    break;
                case 22:
                    KN = self.EW(self.FO);
                    break;
                case 23:
                    KN = self.EW(coordClickOfPage.x);
                    break;
                case 24:
                    KN = self.EW(coordClickOfPage.y);
                    break;
                case 25:
                    KN = self.EW(VY.x);
                    break;
                case 27:
                    KN = self.EW(VY.y);
                    break;
                case 28:
                    KN = self.EW(self.WM());
                    break;
                case 29:
                    KN = self.EW(self.NS());
                    break;
                case 30:
                    KN = self.EW(self.EQ.screen.width);
                    break;
                case 31:
                    KN = self.EW(self.EQ.screen.height);
                    break;
                case 33:
                    KN = self.EW(self.QI);
                    break;
                case 34:
                    KN = self.EW(tsp);
                    break;
                }
                ZP += self.x64String(KN);
            }
            return encodeURIComponent(ZP);
        };
        self.XL = function (event, element) {
            if (!event) var event = self.EQ.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (typeof (hash) == 'undefined' || element.tagName != 'A') {
                return;
            }
            element[self.hrefAttr] = self.JY(hash, event, element);
        };
        self.KV = function (event) {
            if (!event) var event = self.EQ.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.VW = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.OE(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            self.XL(event, element);
            self.EQ.setTimeout(function () {
                self.VW = false;
                self.XL(event, element);
            }, 100);
        };
        self.DB = function (event) {
            if (!event) var event = self.EQ.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.VW = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.OE(element);
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
            if (v % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 1;
            }
            self.XL(event, element);
        };
        self.NE = function (event) {
            if (!event) var event = self.EQ.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.SR = 0;
            self.EQ.clearInterval(self.TB);
            self.TB = self.EQ.setInterval(function () {
                self.SR++;
            }, 1000);
        };
        self.QD = function (event) {
            if (!event) var event = self.EQ.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.VW = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.OE(element);
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
            self.XL(event, element);
        };
        self.NJ = function () {
            if (!self.QI) {
                self.QI = (new Date()).getTime();
            }
        };
        self.VD = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, "mouseup", self.KV);
            self.addEvent(element, "mouseover", self.DB);
            self.addEvent(element, "mousemove", self.QD);
            self.addEvent(self.EQ.document, "scroll", self.NE);
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            var images = self.root.getElementsByTagName('IMG');
            for (var i = 0; i < images.length; i++) {
                if (regex.exec(images[i].src)) {
                    self.addEvent(images[i], "load", self.NJ);
                }
            }
        };
    };
    this['MarketGidCAntifraudBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Antifraud'] = 'MarketGidCAntifraudBlock620688';
    MarketGidCDiscountBlock620688 = function (self) {
        this.HQ.push("BS");
        this.ZZ = function (event) {
            self.helpIE(this);
            var pricesold = this.getElementsByClassName('mcpriceold9656');
            var prices = this.getElementsByClassName('mcprice9656');
            var discounts = this.getElementsByClassName('mcdiscount9656');
            if (pricesold.length > 0) {
                pricesold[0].style.display = 'none';
                prices.length > 1 ? prices[1].style.display = 'none' : null;
                discounts.length > 0 ? discounts[0].style.display = 'inline' : null;
            }
        };
        this.BP = function (event) {
            self.helpIE(this);
            var discounts = this.getElementsByClassName('mcdiscount9656');
            var prices = this.getElementsByClassName('mcprice9656');
            var pricesold = this.getElementsByClassName('mcpriceold9656');
            if (pricesold.length > 0) {
                discounts.length > 0 ? discounts[0].style.display = 'none' : null;
                prices.length > 1 ? prices[1].style.display = 'inline' : null;
                pricesold[0].style.display = 'inline';
            }
        };
        this.BS = function () {
            if (this.root) {
                this.helpIE(this.root);
                var teasers = this.root.getElementsByClassName('mcteaser9656');
            }
            for (var MG_t in teasers) {
                teasers[MG_t].onmouseout = this.BP;
                teasers[MG_t].onmouseover = this.ZZ;
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
    this['MarketGidCDiscountBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Discount'] = 'MarketGidCDiscountBlock620688';
    MarketGidCCountersBlock620688 = function (self) {
        this.AE.push("XT");
        this.XT = function () {};
    };
    this['MarketGidCCountersBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Counters'] = 'MarketGidCCountersBlock620688';
    this['MarketGidCAdvertLinkBlock620688'] = function (self) {
        self.HZ.push("refreshAdvertLink");
        self.HQ.push("initAdvertPopup");
        self.refreshAdvertLink = function () {
            if (parseInt('0')) {
                try {
                    var adLinkBlock = self.MUsAdLinkBlocks[self.XG].replace(/%id/g, '620688');
                    var widgetTitle = "" || "";
                    adLinkBlock = adLinkBlock.replace("%WIDGET_TITLE%", widgetTitle);
                    var utm = '';
                    if (utm == '') {
                        utm = self.MUsUtm[self.XG];
                    }
                    self.OH = adLinkBlock.replace(/%utm/, utm);
                } catch (e) {}
            } else {
                self.OH = '';
            }
        };
        self.parseAdvertLink = function (template) {
            var marker = '<!--advertPrefix-->';
            var isMarkerInTheSecondPart = template.indexOf(marker) > (template.length / 2);
            if (isMarkerInTheSecondPart) {
                self.fixGetElementsByClassNameHandler(self.root);
                var elements = self.root.getElementsByClassName('mg_addad620688');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
            if (isMarkerInTheSecondPart || self.GT == 0) {
                if (template.indexOf(marker) >= 0) {
                    template = template.replace(marker, this.OH);
                } else {
                    template = self.OH + template;
                }
            }
            return template;
        };
        self.initAdvertPopup = function () {
            if (self.EQ.top != self.EQ.self) {
                return;
            }
            if ('banner' == 'banner') {
                return;
            }
            if ('banner' == 'exit-pop-up' || parseInt('0') > 0) {
                return;
            }
            if (['tablet', 'desktop'].indexOf(self.deviceType) == -1) {
                return;
            }
            if (typeof self.EQ._mgDisableAdvertPopup != 'undefined') {
                return;
            }
            if (typeof MarketGidCConstructorBlock620688 == 'function') {
                return;
            }
            var adEl = self.root.querySelector('.mg_addad620688');
            if (adEl) {
                adEl.addEventListener("click", self.showAdvertPopup);
            }
        };
        self.showAdvertPopup = function (event) {
            var srcEl = self.randomNumberString(event.target, '[data-advert-url]');
            if (!srcEl) {
                return null;
            }
            event.preventDefault();
            var root = (self.realRoot != undefined ? self.realRoot : self.root).parentNode;
            var container = root.querySelector('._mgAdvertPopupC620688');
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
                var template = '<style> ._mgAdvertPopupC620688 { position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; font-family: "PTSans", Arial, sans-serif; font-size: 16px; color: #696969; line-height: 1.3; z-index: 999; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC620688 iframe { width: 100%; height: 377px; } ._mgAdvertPopupC620688 ._mgPopupShadow { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; z-index: 1; } ._mgAdvertPopupC620688 ._mgPopupInner { position: relative; top: 50%; margin-left: -375px; left: 50%; padding: 36px; width: 750px; background-color: #f8f8f8; z-index: 2; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC620688 ._mgPopupInner.fixPop { position: absolute!important; top: 30px!important; margin-top: 0!important; } ._mgAdvertPopupC620688 ._mgClosePopup { position: absolute; overflow: hidden; top: 5px; right: 5px; height: 21px; width: 21px; text-indent: -9999px; background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center; background-color: transparent; } ._mgAdvertPopupC620688 ._mgClosePopup:hover { background-color: #dfdfdf; }</style><div class="_mgAdvertPopupC620688"> <div class="_mgPopupShadow"></div> <div class="_mgPopupInner"> <a href="#" class="_mgClosePopup" title="Close"></a> <iframe frameborder="0"></iframe> </div></div>';
                var elements = self.htmlToElements(template);
                for (var i = 0; i < elements.length; i++) {
                    root.appendChild(elements[i]);
                }
                container = root.querySelector('._mgAdvertPopupC620688');
                if (!container) {
                    return false;
                }
                innerEl = container.querySelector('._mgPopupInner');
                var shadowEl = container.querySelector('._mgPopupShadow');
                innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                shadowEl.addEventListener('click', function (event) {
                    if (null == self.randomNumberString(event.target, '._mgPopupInner')) {
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
                var eventMethod = self.EQ.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = self.EQ[eventMethod];
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
                            scrollTo(self.EQ.document.body, 0, 500);
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
                scrollTo(self.EQ.document.body, 0, 500);
            }
        };
    };
    this['MarketGidCAdvertLinkBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['AdvertLink'] = 'MarketGidCAdvertLinkBlock620688';
    this['MarketGidCRejectBlock620688'] = function (self) {
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
                        var a = self.EQ.document.createElement('a');
                        var imgStyles = self.EQ.getComputedStyle(img);
                        a.className = "close-informer";
                        a.href = url + '/teaser/' + matchId[1] + '/widget/' + (matchType[1] == 'w' ? '56936348/type/goods' : '/type/news');
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
        self.HZ.push('initRejectStyles');
    };
    this['MarketGidCRejectBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Reject'] = 'MarketGidCRejectBlock620688';
    this['MarketGidCExternalCountersBlock620688'] = function (self) {
        self.CW;
        self.HQ.push("CA");
        var MZ = function (event) {
            if (self.CW && event.target.className.indexOf('Button') === -1) {
                return;
            }
            if (!event) {
                event = self.EQ.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                element = self.OE(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var hash = element.getAttribute('data-hash');
            if (!self.YI[hash]) {
                return;
            }
            if (!Array.isArray(self.YI[hash]['clicktrackers'])) {
                return;
            }
            var clicktrackers = self.YI[hash]['clicktrackers'];
            if (!clicktrackers.length) {
                return;
            }
            for (var i = 0; i < clicktrackers.length; i++) {
                var img = self.EQ.document.createElement('IMG');
                img.src = clicktrackers[i];
            }
        };
        self.CA = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, 'click', MZ);
        };
    };
    this['MarketGidCExternalCountersBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['ExternalCounters'] = 'MarketGidCExternalCountersBlock620688';
    MarketGidCCriteoBlock620688 = function (self) {
        self.EQ.LoadCriteoAllPlaces = function (params) {
            self.criteoNurl = params.l;
            var s = self.EQ.document.createElement('script');
            self.criteoParams = params.pos;
            s.type = 'text/javascript';
            s.src = '//cas.criteo.com/delivery/0.1/napi.jsonp?zoneid=' + params.z + '&callback=ProcessCriteo&publisherid=' + self.blockId;
            var h = self.EQ.document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        };
        self.EQ.ProcessCriteo = function (response) {
            if (response.response_status === 0 && response.products.length >= self.json.length) {
                self.GT = 0;
                self.root.innerHTML = '';
                self.iteration = 1;
                self.CT = [];
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
                    data[self.criteoPlacement][10].i = "//imggprx." + host + ".com/i/resize?img=" + encodeURIComponent(response.products[k].image.url) + "&size=19";
                    data[self.criteoPlacement][10].l = self.criteoParams[k] + "&u=" + self.QE(response.products[k].click_url);
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
                        var privacyDiv = self.EQ.document.createElement('DIV');
                        privacyDiv.style.position = 'absolute';
                        privacyDiv.style.zIndex = '100';
                        privacyDiv.style.left = '90%';
                        privacyDiv.style.top = '0';
                        var privacyHref = self.EQ.document.createElement('A');
                        privacyHref.setAttribute('href', response.privacy.optout_click_url);
                        privacyHref.setAttribute('target', "_blank");
                        var privacyImg = self.EQ.document.createElement('IMG');
                        privacyImg.setAttribute('src', response.privacy.optout_image_url);
                        privacyHref.appendChild(privacyImg);
                        privacyDiv.appendChild(privacyHref);
                        imgElement.appendChild(privacyDiv);
                        if (response.hasOwnProperty('impression_pixels')) {
                            for (var i in response.impression_pixels) {
                                if (response.impression_pixels[i].hasOwnProperty('url')) {
                                    var im = self.EQ.document.createElement('IMG');
                                    im.src = response.impression_pixels[i].url;
                                    self.EQ.document.body.appendChild(im)
                                }
                            }
                        }
                        var n = self.EQ.document.createElement('IMG');
                        n.src = self.criteoNurl;
                        self.EQ.document.body.appendChild(n);
                    }
                }
            }
        };
    };
    this['MarketGidCCriteoBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Criteo'] = 'MarketGidCCriteoBlock620688';
    MarketGidCManagedBlock620688 = function (self) {
        this.managedMarketGidLoadNews = function (callback) {
            self.MarketGidLoadNews = function (json) {
                self.KL();
                for (var i = 0; i < self.HZ.length; i++) {
                    self[self.HZ[i]]();
                }
                callback(json);
                for (var i = 0; i < self.HQ.length; i++) {
                    self[self.HQ[i]]();
                }
            };
        };
        this.forcePage = function (page) {
            self.page = page;
        };
        this.enableFakeRoots = function () {
            this.fakeRoots = [];
            this.root.getElementsByTagName = function (tagName) {
                var res = [];
                for (var i = 0; i < self.fakeRoots.length; i++) {
                    var tags = self.fakeRoots[i].getElementsByTagName(tagName);
                    for (var j = 0; j < tags.length; j++) {
                        res.push(tags[j]);
                    }
                }
                return res;
            };
        };
    };
    this['MarketGidCManagedBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Managed'] = 'MarketGidCManagedBlock620688';
    MarketGidCSendDimensionsBlock620688 = function (self) {
        self.blankImage = "data:image/gif;base64,R0lGODlh7AFIAfAAAAAAAAAAACH5BAEAAAAALAAAAADsAUgBAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fxR+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruCFYBADs=";
        self.precalcRect = {};
        self.updatePrecalcRect = function () {
            self.CN = "goods";
            self.XG = '0';
            self.fakeMode = true;
            var realRoot = self.root;
            var cnt = self.EQ.document.createElement('div');
            var newRoot = self.EQ.document.createElement('div');
            newRoot.id = self.root.id;
            self.root.id += "_";
            cnt.appendChild(newRoot);
            self.root.appendChild(cnt);
            self.root = newRoot;
            realRoot.style.height = "0px";
            realRoot.style.overflow = "hidden";
            var countNews = 2;
            var lorem = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
            var data = [];
            for (var i = 1; i <= countNews; i++) {
                data.push(['', i, '', lorem, lorem, '', '', '', '', '', {
                    i: self.blankImage
                }]);
            }
            self.MarketGidLoadNews(data);
            var h = self.EU();
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
            self.CN = "";
            self.XG = "";
            self.GT = 0;
            self.template = "";
            self.iteration = 1;
            self.CT = {};
        };
        this.AE.push("updatePrecalcRect");
    };
    this['MarketGidCSendDimensionsBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['SendDimensions'] = 'MarketGidCSendDimensionsBlock620688';
    MarketGidCMonitorBlock620688 = function (self) {
        this.HQ.push("monitorInit");
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
            var typePrefix = "&t=" + (self.CN == 'news' ? "N" : "G");
            var data = "";
            var counter = 0;
            for (var i in blocks) {
                var prefix = blocks[i].width + "|" + blocks[i].height + "|" + ((blocks[i].desc ? 1 : 0) + (blocks[i].price ? 2 : 0) + (blocks[i].domain ? 4 : 0) + (blocks[i].atf ? 8 : 0) + (blocks[i].align == 'right' ? 16 : 0) + (blocks[i].align == 'left' ? 32 : 0)) + "|";
                var showHash = self.teaserHashes[i];
                data += "&v=" + prefix + showHash;
                if (self.YI[showHash] && self.YI[showHash]['coopType']) {
                    var type = self.YI[showHash]['coopType'];
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
            data += "&cid=" + '620688';
            if (self.servicerData && self.servicerData.h2) {
                data += '&h2=' + self.servicerData.h2;
            }
            var scriptSrc = "//c." + (self.XG == 3 ? "lentainform.com" : "marketgid.com") + "/c?pv=2" + data;
            img.src = scriptSrc;
            img.onerror = function () {
                self.mg_ws.onmessage = function (evt) {};
                self.sendMessage('c|' + scriptSrc);
            };
        };
        this.isElementInViewport = function (el) {
            var rect = self.utils.getRect(el, false);
            var viewport = self.utils.getViewportSize();
            return (rect.height > 0 && rect.width > 0 && rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewport.height && rect.right <= viewport.width);
        };
        this.getParentTeaserBlock = function (el) {
            var current = el;
            while (current != self.root && current != self.EQ) {
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
            var bodyWidth = self.EQ.document.body.scrollWidth;
            if (teaserDims.right < 0.3 * bodyWidth) {
                return 'left';
            } else if (teaserDims.left >= 0.7 * bodyWidth) {
                return 'right'
            } else {
                return 'center';
            }
        };
    };
    this['MarketGidCMonitorBlock620688'].call(this['MarketGidInfC620688'], this['MarketGidInfC620688']);
    this['MarketGidInfC620688']['funcBlocks']['Monitor'] = 'MarketGidCMonitorBlock620688';
    MarketGidInfC620688.init();
    if (!MarketGidInfC620688.EQ.MarketGidC620688DisableStart) {
        MarketGidInfC620688.start();
    }
}