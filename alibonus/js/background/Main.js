var chrome = chrome || {};
var Main = {
    ali: 'aliexpress.com',
    aliurl: 'https://aliexpress.com',
    isBlocked: false, //Если кэшбек не получит
    isActivated: false, //Если активирован кэшбек
    tabsChanges: {}, //Измененные вкладки, или открытые, если закрываются, удаляются из массива
    lastUrl: '', //Последний url
    lastRedirect: 0, //Последнее время редиректа, проверяем на 2 часа
    tabsList: [], //Все открытые вкладки во всех окнах в текущем профиле
    lastRedirecUrl: '',
    isDebugging: 0, // 0 - открываем ссылки, 1 - не открываем
    currentStatusCashback: 0,
    changeLang: false,
    //0 - нет статуса
    //1 - кэшбек не активирован, пользователь не зарегистрирован, показываем 1 раз большую плашку
    //2 - кэшбек не активирован, пользователь не зарегистрирован, показываем маленькую плашку
    //3 - кэшбек не активирован, показываем маленькую плашку
    //4 - кэшбек активирован, показываем 1 раз плашку
    //5 - кэшбек активирован
    init: function () {
        changeLang.init();
        //Проверка изменения Cookies
        chrome.cookies.onChanged.addListener(Main.onChangedCookies);

        //Перед отправкой запроса
        chrome.webRequest.onBeforeRequest.addListener(Main.onBeforeRequest, {urls: ['<all_urls>']}, ['blocking']);
        //Перед отправкой заголовков
        chrome.webRequest.onBeforeSendHeaders.addListener(Main.onBeforeSendHeaders, {
            urls: ['<all_urls>'], types: ['main_frame']
        }, ['requestHeaders', 'blocking']);

        chrome.runtime.onMessage.addListener(Main.onMessage);
        //В Firefox не поддерживается
        if (chrome.runtime.onMessageExternal) {
            chrome.runtime.onMessageExternal.addListener(Main.onMessageExternal);
        }

        chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
            delete Main.tabsList[tabId];
            delete Main.tabsChanges[tabId];
        });
        chrome.tabs.onReplaced.addListener(function (tabId, removeTabId) {
            Main.getTab(tabId, function (tab) {
                if (tab !== undefined) {
                    delete Main.tabsList[removeTabId];
                    Main.tabsList[tab.id] = tab.id;
                }
            });
        });
        chrome.tabs.onCreated.addListener(function (tab) {
            Main.tabsList[tab.id] = tab.id;
        });
        chrome.tabs.onActivated.addListener(function () {
            Main.updateBadge();
        });
        chrome.tabs.onUpdated.addListener(function () {
            Main.updateBadge();
        });
        if (!Main.isDebugging) {
            chrome.runtime.setUninstallURL(apiDomain + 'uninstall?ext=true');
        }

        Main.getTabs();
        if (storageGet('user_id', false)) {
            storageSet('isFirst', false);
        }
        if (storageGet('isFirst', true)) {
            if (!Main.isDebugging) {
                chrome.tabs.create({url: apiDomain + 'register?ext=true&ts=' + getTimestamp(), active: true});
            }
            storageSet('isFirst', false);
            storageSet('isFirst', false);
        }
    },
    //Получаем все открытые вкладки со всех окон в текущем профиле
    getTabs: function () {
        chrome.windows.getAll({populate: true}, function (windows) {
            $.each(windows, function (i, window) {
                $.each(window.tabs, function (i, tab) {
                    Main.tabsList[tab.id] = tab.id;
                });
            });
        });
    },
    //Получаем вкладку по id, если нет, то возвращает undefiend
    getTab: function (id, callback) {
        chrome.tabs.query({}, function (tabs) {
            var realTab = false;
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].id === id) {
                    realTab = tabs[i];
                }
            }
            callback(realTab);
        });
    },
    //Если прошло 2 часа, то должны редиректить
    isNeedRedirect: function () {
        var time = getTimestamp();
        if (time - 2 * 60 * 60 * 1000 > Main.lastRedirect) {
            return true;
        }
        return false;
    },
    //Очистка
    clearUrls: function () {
        Main.tabsChanges = {};
        Main.lastRedirect = 0;
    },
    //Возвращает ссылку для редиректа
    getUrlRedirect: function (url, needClear) {
        var urlInfo = getUrlInfo(url), redirectUrl = false;

        if (urlInfo.subdomain === 's.click') {
            return false;
        }

        if (needClear) {
            Main.clearUrls(urlInfo.domain);
        }

        // редирект на диплинк (псоле активации на той же странице товара) или же на главную али
        if (isAli(urlInfo.domain)) {
            // deep-link for click dealer
            var deep_link = encodeURIComponent(url.split('?')[0]);
            if (deep_link.indexOf('s.click') < 0)
                redirectUrl = Info.url + '&s3=' + deep_link;
            else
                redirectUrl = Info.url + '&s3=' + this.aliurl;
            redirectUrl = redirectUrl.replace('bonus', Info.userId + '_' + Info.wid);

            // deep-link for cityads
            //     redirectUrl = Info.url + '&url=' + encodeURIComponent(url.split('?')[0]);
            //     redirectUrl = redirectUrl.replace('bonus', Info.userId + '_' + Info.wid);
        }

        return redirectUrl;
    },
    //Если последнее изменение совпадает с последним измененным url
    equalToLastChanges: function (url) {
        var urlInfo = getUrlInfo(url);
        if (isAli(urlInfo.domain) && !Main.isBlocked && Main.lastUrl === url && Main.isNeedRedirect()) {
            return true;
        }
        return false;
    },
    //Ставит или убирает восклицательный знак
    updateBadge: function () {
        chrome.tabs.query({active: true}, function (tab) {
            if (tab.length === 0) {
                return;
            }
            var urlInfo = getUrlInfo(tab[0].url);
            if (isAli(urlInfo.domain) && Main.isBlocked) {
                //chrome.browserAction.setBadgeText({text: '!'});
                chrome.browserAction.setIcon({path: '/icons/ico_disactivated.png'});
            } else {
                //chrome.browserAction.setBadgeText({text: ''});
                chrome.browserAction.setIcon({path: '/icons/ico_activated.png'});
            }
        });
    },
    //Создает вкладку с url для редиректа
    createTabAli: function () {
        var urlRedirect = Main.getUrlRedirect(Main.aliurl, true);
        if (urlRedirect && urlRedirect !== Main.ali) {
            chrome.tabs.create({}, function (tab) {
                chrome.tabs.update(tab.id, {url: urlRedirect});
                Main.tabsChanges[tab.id] = {url: urlRedirect};
                Main.lastRedirect = getTimestamp();
            });
        }
    },
    onBeforeSendHeaders: function (details) {
        var tabId = details.tabId, url = details.url, requestId = details.requestId;
        if (!(details.frameId === 0 && details.parentFrameId === -1 && tabId > 0 && /^https?/i.test(url) && !Main.equalToLastChanges(url))) {
            return new Boolean([false]);
            //return false;
        }
        //Пишем реферера из заголовком запроса
        var refer = '';
        $.each(details.requestHeaders, function (i, detail) {
            if (detail.name === 'Referer') {
                refer = detail.value;
            }
        });
        var urlInfo = getUrlInfo(url);
        if (isAli(urlInfo.domain)
                && (urlInfo.query.aff_trace_key !== undefined
                        || urlInfo.query.utm_source !== undefined
                        || ((urlInfo.query.utm_source !== undefined) && (urlInfo.query.utm_campaign !== undefined)))) {
            if (url !== Main.lastRedirecUrl) {
                if (!Main.tabsChanges[tabId] || (Main.tabsChanges[tabId].requestId !== requestId && Main.tabsChanges[tabId].url !== refer)) {
                    Main.isBlocked = true;
                    Main.checkStatusCachback();
                } else {
                    Main.lastRedirect = getTimestamp();
                    if (urlInfo.query.aff_trace_key !== undefined) {
                        Main.lastUrl = url;
                    }
                    Main.lastRedirecUrl = url;
                    Main.isBlocked = false;
                    Main.checkStatusCachback();
                }
                Main.updateBadge();
            }
        }
        if (Main.tabsChanges[tabId] && !isAli(urlInfo.domain) && (Main.tabsChanges[tabId].requestId === requestId || Main.tabsChanges[tabId].url === details.url || Main.tabsChanges[tabId].url === refer)) {
            Main.tabsChanges[tabId].url = urlInfo.domain;
            Main.tabsChanges[tabId].requestId = requestId;
        } else if (!Main.tabsChanges[tabId] || (Main.tabsChanges[tabId].requestId !== requestId && Main.tabsChanges[tabId].url !== refer)) {
            if (Main.tabsChanges[tabId]) {
                delete Main.tabsChanges[tabId];
            }
            var redirectUrl = Main.getUrlRedirect(url);        
            if (redirectUrl && Main.isNeedRedirect()) {
                Main.tabsChanges[tabId] = {url: redirectUrl};
                chrome.tabs.update(tabId, {url: redirectUrl});
            }
        }
    },
    //Проверяем, если есть запрос, но но не из вкладки, то блокируем его
    onBeforeRequest: function (details) {
        var tabId = details.tabId;
        if (details.type === 'main_frame' && details.frameId === 0 && details.parentFrameId === -1 && tabId > 0 && /^https?/i.test(details.url)) {
            var fk = Main.tabsList[tabId] || -1;
            var urlInfo = getUrlInfo(details.url);
            if (fk === -1 && urlInfo.domain && isAli(urlInfo.domain) && Main.isNeedRedirect()) {
                return {'cancel': true};
            }
        }
    },
    checkStatusCachback: function () {
        // 4 - cashback is active
        var isNeedShow = false;
        var time = new Date().getTime();
        var newStatus = Main.currentStatusCashback;
        if (localStorage['timeLastShowLogged'] === undefined || localStorage['timeLastShowLogged'] < time - 86400000) {
            isNeedShow = true;
        }
        if (!Info.isLogged && isNeedShow) {
            newStatus = 1;
        }
        if (!Info.isLogged && !isNeedShow) {
            newStatus = 2;
        }
        if (Info.isLogged && Main.isBlocked) {
            newStatus = 3;
        }
        if (Info.isLogged && !Main.isBlocked && Main.currentStatusCashback !== 5) {
            newStatus = 4;
        }

        if (newStatus !== Main.currentStatusCashback || Main.changeLang) {
            Main.currentStatusCashback = newStatus;
            chrome.tabs.query({}, function (tabs) {
                $.each(tabs, function (i, e) {
                    var url = new URL(e.url);
                    if (url.host.indexOf('aliexpress.com') !== -1) {
                    	//console.log("qweqwe: ", e.id, Main.currentStatusCashback);
                        chrome.tabs.sendMessage(e.id, {
                            request: 'setStatus',
                            status: Main.currentStatusCashback,
                            percent: Info.loyaltyPercent,
                            language:changeLang.folderLangName,
                            percent_ali_mob: Info.loyaltyPercentForAliMobile[Info.loyaltyLevel]
                        });
                    }
                });
            });
        }
    },
    sendMessageToAllTabs:function(){

    },
    getStatusCachback: function () {
        this.checkStatusCachback();
    },
    onMessage: function (request, sender, callback) {
        callback = callback || function () {};
        var response, data;
        switch (request.request) {
            case 'setTmpCurPrice':
                this.tmpCurPrice = request.cur_price;
                this.tmpCurPriceCurrency = request.currency;
                callback(0);
                break;
            case 'getOptionList':
                var options = {
                    'seller_reliability':JSON.parse(storageGet('seller_reliability',true)),
                    'amount_cashback_in_card':JSON.parse(storageGet('amount_cashback_in_card',true)),
                    'amount_cashback_in_search':JSON.parse(storageGet('amount_cashback_in_search',true)),
                    'add_link_in_comment':JSON.parse(storageGet('add_link_in_comment',true)),
                    'add_btn_search_track':JSON.parse(storageGet('add_btn_search_track',true)),
                    'cashback_notify':JSON.parse(storageGet('cashback_notify',true))
                };

                response = {request: 'getOptionList', options:options};

                callback(response);
                break;

            case 'setLanguage':
                changeLang.init(function(){
                    Main.changeLang = true;
                    Main.checkStatusCachback();
                });
                break;

            case 'getLanguage':
                response = {request: 'getLanguage', langData:changeLang.langFile, language:changeLang.folderLangName};
                callback(response);
                break;

            case 'getEconomy':
                this.bg = chrome.extension.getBackgroundPage();
                this.info = this.bg.Info;

                response = {request: 'getEconomy', info:this.bg.Info};
                if(this.tmpCurPrice !== undefined){
                    response.tmpCurPrice = this.tmpCurPrice;
                }
                if(this.tmpCurPriceCurrency !== undefined){
                    response.tmpCurPriceCurrency = this.tmpCurPriceCurrency;
                }

                callback(response);
                break;
            case 'getStatus':
                Main.checkStatusCachback();
                response = {
                    request: 'setStatus',
                    status: Main.currentStatusCashback,
                    percent: Info.loyaltyPercent,
                    percent_ali_mob: Info.loyaltyPercentForAliMobile[Info.loyaltyLevel]
                };
                if (Main.currentStatusCashback === 1) {
                    localStorage['timeLastShowLogged'] = new Date().getTime();
                }
                if (Main.currentStatusCashback === 4) {
                    Main.currentStatusCashback = 5;
                }
                callback(response);
                break;
            case 'redirect':
                var redirectUrl = Main.getUrlRedirect(sender.url, true);
                if (redirectUrl) {
                    Main.tabsChanges[sender.tab.id] = {url: redirectUrl};
                    Main.lastRedirect = getTimestamp();

                    chrome.tabs.update(sender.tab.id, {url: redirectUrl});
                }
                chrome.browserAction.setBadgeText({text: ''});
                break;
            case 'sendSellerInfo':
                $.ajax({
                    type: 'get',
                    url: request.link,
                    cache: false
                }).done(function (response) {
                    try {
                        data = response;
                        //console.log(Main.deserialize(data));
                        ctrl = Main.formula(Main.deserialize(data));
                        //console.log(ctrl);
                        chrome.tabs.query({}, function (tabs) {
                            $.each(tabs, function (i, e) {
                                var url = new URL(e.url);
                                if (url.host.indexOf('aliexpress.com') !== -1) {
                                    chrome.tabs.sendMessage(e.id, {request: 'setSellerInfo', b: ctrl, requestLink: request.requestLink});
                                }
                            });
                        });
                    } catch (e) {
                        //console.log('Exception while request..');
                        callback(0);
                    }
                }).fail(function () {
                    //console.log('Error while request..');
                    callback(0);
                });
                break;
            case 'activate':
                // console.log('activate');
                Main.lastRedirect = 0;
                Main.currentStatusCashback = 3;
                response = {request: 'activated'};
                callback(response);
                break;
        }
    },
    deserialize: function (data) {
            if(!data) throw new Error('Empty data')
            var deserialized = {};
            // If no dsr in response return
            if (new RegExp('dsr = (.*);').exec(data)[1] === '$dsr')
                return deserialized
            if (new RegExp('dsr = (.*);').exec(data) !== null)
                deserialized.dsr = JSON.parse(new RegExp('dsr = (.*);').exec(data)[1]);
            if (new RegExp('sellerInfoDTO = (.*);').exec(data) !== null)
                deserialized.info = JSON.parse(new RegExp('sellerInfoDTO = (.*);').exec(data)[1]);
            return deserialized    
    },
    formula: function (response) {
            var processed = {};
            if (!response.dsr) {
                processed.seller = {
                            error: 0,
                            main:
                            {
                                month: 0,
                                score: 0,
                                rating: 0
                            },
                           details:
                            {
                                communication: 0,
                                description: 0,
                                shipping_speed: 0
                            },
                            feedback:
                            {
                                positive_3: 0
                            }                         
                }
            }
            else {
                    processed = {
                      age: parseFloat(((new Date() - new Date(response.info.since)) / (1000 * 60 * 60 * 24 * 30 * 12)).toFixed(1)),
                      comm: response.dsr.sellerServiceEval,
                      desc: response.dsr.proDescEval,
                      ship: response.dsr.shippingServiceEval,
                      rating: response.info.sellerScore,
                      threeMonthNegative: (response.info.threeMonthNegative * 100 / (parseInt(response.info.threeMonthPositive) + parseInt(response.info.threeMonthNeutral) + parseInt(response.info.threeMonthNegative))).toFixed(2)
                    };
                    var multipliers = {
                      age: processed.age >= 1 ? 0 : processed.age >= 0.75 ? 0.5 : processed.age >= 0.5 ? 0.7 : 1,
                      desc: processed.desc >= 4.5 ? 0 : processed.desc >= 4 ? 0.5 : processed.desc >= 3.8 ? 0.7 : 1,
                      comm: processed.comm >= 4.5 ? 0 : processed.comm >= 4 ? 0.5 : processed.comm >= 3.8 ? 0.7 : 1,
                      ship: processed.ship >= 4.5 ? 0 : processed.ship >= 4 ? 0.5 : processed.ship >= 3.8 ? 0.7 : 1,
                      rating: processed.rating >= 1100 ? 0 : processed.rating >= 500 ? 0.5 : processed.rating >= 300 ? 0.7 : 1,
                      threeMonthNegative: processed.threeMonthNegative <= 2 ? 0 : processed.threeMonthNegative <= 5 ? 0.5 : processed.threeMonthNegative <= 10 ? 0.7 : 1
                    };      
                  var overall = 100 - 32 * multipliers.age - 34 * multipliers.rating - 24 * multipliers.desc - 26 * multipliers.ship - 21 * multipliers.comm - 22 * multipliers.threeMonthNegative;
                overall = Math.min(100, Math.max(0, overall));      
                    processed.seller = {
                        error: 0,
                        main:
                        {
                                    month: parseFloat(((new Date() - new Date(response.info.since))/(1000*60*60*24*30)).toFixed(1)),
                                    score: response.info.sellerScore,
                                    rating: overall
                        },
                        details:
                        {
                                    communication: response.dsr.sellerServiceEval,
                                    description: response.dsr.proDescEval,
                                    shipping_speed: response.dsr.shippingServiceEval
                        },
                        feedback:
                        {
                                    positive_3: response.info.feedbackRating
                        }                         
                    }
            }
            return processed    
    },
    onMessageExternal: function (request, sender, sendResponse) {
        if (request.disableByPriority) {
            sendResponse({disable: true});
        } else {
            return false;
        }
    },
    onChangedCookies: function (info) {
        if (info.cookie.domain === '.alibonus.com' && info.cookie.name === 'u_id') {
            Main.setInfoFromCookie();
        }
    },
    setInfoFromCookie: function (callback) {
        callback = callback || function () {};
        chrome.cookies.getAll({domain: 'alibonus.com'}, function (cookies) {
            var u_id = 0, e_id = 0, wid = 0, token = 0;
            $.each(cookies, function (i, cookie) {
                if (cookie.name === 'u_id') {
                    u_id = decodeURIComponent(cookie.value);
                }
                if (cookie.name === 'e_id') {
                    e_id = decodeURIComponent(cookie.value);
                }
                if (cookie.name === 'webm_id') {
                    wid = decodeURIComponent(cookie.value);
                }
                if (cookie.name === 't_id') {
                    token = decodeURIComponent(cookie.value);
                }
            });
            if (u_id && e_id && token && u_id !== Info.userId) {
                Settings.setUserId(u_id);
                Settings.setEmail(e_id);
                Settings.setWid(wid);
                Settings.setToken(token);
                Settings.setLogged(true);
                Api.getUserInfo();
                Main.clearUrls();
                var tabAli = false;
                
                // показываем плашку, если зашли с другого аккаунта
                //Main.currentStatusCashback = 6;
                //Main.checkStatusCachback();

                chrome.tabs.query({}, function (tabs) {
                    $.each(tabs, function (i, e) {
                        var url = new URL(e.url);
                        if (url.host.indexOf('aliexpress.com') !== -1) {
                            tabAli = e.id;
                        }
                    });
                    if (tabAli) {
                        chrome.tabs.reload(tabAli);
                    }
                });
            }
            callback();
        });
    }
};
Settings.load();
Main.setInfoFromCookie();
Api.startReloadUserInfo();
Main.init();
setInterval(function () {
	//console.log(Main.currentStatusCashback);
    Main.checkStatusCachback();
}, 500);