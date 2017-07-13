var URL = function (url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for (i = 0; i < queries.length; i++) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
};
function storageGet(key, def) {
    var out = def;
    if (localStorage[key] !== undefined) {
        out = JSON.parse(localStorage[key]);
    }
    return out;
}

function storageSet(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function storageDel(key) {
    localStorage.removeItem(key)
}

function getTimestamp() {
    return (new Date()).getTime();
}

function isAli(domain) {
    if (domain === Main.ali) {
        return true;
    }
    return false;
}

//aliexpress.com/search.php?item=1&item2=2 => {item: 1, item2: 2}
function URLToArray(url) {
    var request = {};
    var pairs = url.substring(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < pairs.length; i++) {
        if (!pairs[i])
            continue;
        var pair = pairs[i].split('=');
        request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return request;
}

//Парсим url, на выходе получаем {domain: 'aliexpress.com', subDomain: '', query: {}}
function getUrlInfo(url) {
    if (url.indexOf('http') === -1) {
        url = 'http://' + url;
    }
    var result = {domain: '', subDomain: '', query: {}};

    url = new URL(url);
    result.query = URLToArray(url.search);

    if (!url.hostname.match(new RegExp('^(?:([^:\\/?]+):)?(?:\\/\\/([^\\/]*))?([^?]*)(?:\\?([^$]*))?'))) {
        return result;
    }

    var matches = url.hostname.match(/((?:[^.]+)\.(?:(?:com?|org)\.)?\w+)$/i);
    if (matches) {
        result.domain = matches[1];
    }

    result.subDomain = url.hostname.replace(result.domain, '').replace(/\.$/, '');

    return result;
}

var changeLang = {
    langFile: {},
    folderLangName: 'en',
    init: function (func) {
        func = func || function () {
            };
        var folderLangName = this.getLang();
        $.ajax({
            dataType: "json",
            url: '_locales/' + folderLangName + '/messages.json',
            mimeType: "application/json",
            success: function (data) {
                changeLang.langFile = data;
                changeLang.folderLangName = folderLangName;
                func();
            }
        });
    },
    setLang: function (lang) {
        lang = lang || chrome.i18n.getUILanguage();
        storageSet('language', lang);
    },
    getLang: function () {
        var lang = storageGet('language', false);
        if (lang == false) {
            this.setLang(chrome.i18n.getUILanguage());
            lang = storageGet('language', false);
        }

        switch (lang) {
            case 'ru':
            case 'uk':
                return lang;
                break;
            default:
                return 'en';
        }
    },
    getMessage: function (localizeName) {
        if ($.isEmptyObject(changeLang.langFile)) {
            this.init();
        }
        if (this.langFile[localizeName] !== undefined) {
            return changeLang.langFile[localizeName].message;
        }
        return null;
        // return chrome.i18n.getMessage(localizeName)
    }
};