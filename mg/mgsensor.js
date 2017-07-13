(function () {
    var domain = 'a.tovarro.com';
    var gid = '0';
    var tid = '0';
    var muidn = 'h3rXJTcEN7Le';
    var mtuid = '0';

    var MgSensor = function (params) {
        var host = "//" + domain + "/1x1.gif";
        var autoHost = "//" + domain + "/auto.gif";
        var safariHost = "//" + domain + "/safari.html";
        var safariAutoHost = "//" + domain + "/safari_auto.html";
        var isLongCheck = false;
        var uwuid;
        var ugid;
        var utmSensor;
        var utmSource;
        var utmCampaign;
        var utmMedium;
        var nvisits;
        var utmUpdated = false;
        var uriHref = document.location.href;

        var self = this;

        var sendData = function (target) {
            var src = (!isSafari() ? host : safariHost) + "?id=" + (params.cid ? params.cid : params.id) + (params.cid ? "&type=c" : "&type=s") + "&tg=" + target + "&r=" + encodeURIComponent(document.location.href);
            src += '&utmc=' + ugid;
            src += '&utmt=' + uwuid;
            src += '&nv=' + Number(nvisits);
            src += '&utms=' + utmSource;
            src += '&utmcp=' + utmCampaign;
            src += '&utmm=' + utmMedium;
            src += '&cmgid=' + gid;
            src += '&cmtid=' + tid;
            src += '&cmtuid=' + mtuid;
            send(src, "");
        };

        var isSafari = function (forceCheck) {
            if (!forceCheck && (params.nosafari === true || muidn != '')) {
                return false;
            }
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1 && !(ua.indexOf('mobile safari') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('iphone') != -1 || ua.indexOf('android') != -1)) return true;
            else return false;
        };

        var getCookiePrefix = function () {
            var domainParts = /a\.([^\.]*)\.(.*)/.exec(domain);
            if (domainParts[1]) {
                return domainParts[1].charAt(0).toUpperCase() + domainParts[1].slice(1);
            } else {
                return 0;
            }
        };

        var getCookie = function () {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + getCookiePrefix() + "Sensor=([^;]*)"));

            if (matches) {
                var res = matches[1].split('_');
                if (res[0] && res[1]) {
                    gid = res[0] != 0 ? res[0] : gid;
                    tid = res[1] != 0 ? res[1] : tid;
                } else {
                    gid = 0;
                    tid = 0;
                }

                mtuid = res[2] ? (res[2] != 0 ? res[2] : mtuid) : 0;
            } else if (gid != 0 && tid != 0 && mtuid != 0) {
                document.cookie = getCookiePrefix() + "Sensor=" + gid + "_" + tid + "_" + mtuid + ";path=/;expires=" + (new Date((!Date.now ? new Date().valueOf() : Date.now()) + 864e5)).toUTCString();
            }
        };

        /**
         * Utms + visits
         */
        var manageData = function () {
            updateUtmData();
            updateVisits();
            populateVars();
        };

        /**
         * utm to cookie
         */
        var updateUtmData = function () {
            var queryParts = {};

            var sArray = location.search.substr(1).split("&");

            for (var i = 0, len = sArray.length; i < len; i++) {
                var pair = sArray[i];
                if (pair === "") {
                    continue;
                }
                var parts = pair.split("=");
                queryParts[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, " "));
            }

            if (queryParts['utm_content'] && queryParts['utm_term'] && queryParts['utm_source']) {
                if (isSafari(true)) {
                    queryParts['utm_medium'] = encodeURIComponent(queryParts['utm_medium']);
                    queryParts['utm_campaign'] = encodeURIComponent(queryParts['utm_campaign']);
                    queryParts['utm_source'] = encodeURIComponent(queryParts['utm_source']);
                    queryParts['utm_content'] = encodeURIComponent(queryParts['utm_content']);
                    queryParts['utm_term'] = encodeURIComponent(queryParts['utm_term']);
                }
                writeCookie('SensorUtm', queryParts['utm_content'] + "_" + queryParts['utm_term']);
                writeCookie('SensorUtmMedium', queryParts['utm_medium']);
                writeCookie('SensorUtmCampaign', queryParts['utm_campaign']);
                writeCookie('SensorUtmSource', queryParts['utm_source']);

                utmUpdated = true;
            }
        };

        /**
         * Update visits counter
         */
        var updateVisits = function () {
            nvisits = Number(readCookie('SensorNVis'));
            var lastHref = readCookie('SensorHref');

            switch (true) {
                case lastHref == uriHref:
                    break;

                default:
                    nvisits++;
                    break;
            }

            writeCookie('SensorNVis', nvisits);
            writeCookie('SensorHref', uriHref);
        };

        /**
         * save cookie
         *
         * @param name string
         * @param value string
         */
        var writeCookie = function (name, value) {
            var d = new Date();
            d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = getCookiePrefix() + name + "=" + value + ";path=/; " + expires;
        };

        /**
         * read cookie
         *
         * @param name
         * @returns
         */
        var readCookie = function (name) {
            var matches;
            return (matches = document.cookie.match(new RegExp("(?:^|; )" + getCookiePrefix() + name + "=([^;]*)")))
                ? matches[1]
                : '';
        };

        /**
         * Populate vars from cookie
         */
        var populateVars = function () {
            nvisits = Number(readCookie('SensorNVis'));
            utmSource = readCookie('SensorUtmSource');
            utmMedium = readCookie('SensorUtmMedium');
            utmCampaign = readCookie('SensorUtmCampaign');
            utmSensor = readCookie('SensorUtm');

            ugid = 0;
            uwuid = 0;
            if (utmSensor) {
                var res = utmSensor.split('_');
                if (res[0] && res[1]) {
                    ugid = res[0] != 0 ? res[0] : ugid;
                    uwuid = res[1] != 0 ? res[1] : uwuid;
                }
            }
        };

        var sendAutoData = function () {
            if (params.eid == undefined) params.eid = "";
            if (params.goods == undefined) params.goods = [];
            if (params.partner == undefined) params.partner = "";
            var src = (!isSafari() ? autoHost : safariAutoHost)
                + "?sid=" + (params.cid ? params.cid : params.id)
                + "&eid=" + params.eid
                + (params.cid ? "&type=c" : "&type=s")
                + "&goods=" + params.goods.join(',')
                + "&partner=" + params.partner
                + "&referer=" + encodeURIComponent(document.referrer);
            send(src, "A");
        };

        var send = function (src, postfix) {
            if (!isSafari()) {
                (new Image).src = src;
            } else {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
                var a = document.createElement('A');
                a.id = 'fakeMgLink' + postfix;
                a.href = src;
                document.body.appendChild(a);
                document.getElementById('fakeMgLink' + postfix).dispatchEvent(e);
            }
        };

        this.invoke = function (target) {
            getCookie();
            manageData();
            sendData(target);
            if (params.eid || params.goods) {
                sendAutoData();
            }
        };

        this.mgqWorker = function () {
            for (var i = 0; i < window._mgq.length; i++) {
                var el = window._mgq[i];
                if (typeof(window[el[0]]) == 'function') {
                    window[el[0]].apply(window, el.slice(1));
                    window._mgq.splice(i, 1);
                }
            }
            if (!window._mgqi) {
                window._mgqi = window.setInterval(function () {
                    self.mgqWorker();
                }, 5);
            }

            if (!isLongCheck) {
                if ((new Date()).getTime() - window._mgqt > 10000) {
                    isLongCheck = true;
                    window.clearInterval(window._mgqi);
                    window._mgqi = window.setInterval(function () {
                        self.mgqWorker();
                    }, 100);
                }
            }
        };

        this.mgqInit = function () {
            window._mgq = window._mgq || [];
            if (typeof(window._mgqp) == 'undefined') {
                window._mgqp = self.mgqWorker;
                window._mgqt = (new Date()).getTime();
                self.mgqWorker();
            }
        };
    };

    if (Object.prototype.toString.call(MgSensorData) === '[object Array]') {
        for (var i = 0; i < MgSensorData.length; i++) {
            if (MgSensorData[i].project == domain) {
                var sensor = new MgSensor(MgSensorData[i]);
                window.MgSensor = sensor;
                window["MgSensorInvoke" + i] = window["MgSensorInvoke"] = sensor.invoke;
                sensor.mgqInit();
                _mgq.push(["MgSensorInvoke" + i, [""]]);
                break;
            }
        }
    } else if (MgSensorData && (MgSensorData.id || MgSensorData.cid)) {
        window.MgSensor = new MgSensor(MgSensorData);
        window.MgSensorInvoke = window.MgSensor.invoke;
        window.MgSensor.mgqInit();
        _mgq.push(["MgSensorInvoke", [""]]);
    }
})();