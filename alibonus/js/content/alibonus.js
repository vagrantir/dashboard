var Alibonus = {
    init: function () {
        var activateCashback = document.getElementById('activate-cashback');
        if (activateCashback !== null) {
            document.getElementById('activate-cashback').onclick = function () {
                chrome.runtime.sendMessage({request: 'activate'}, function (message) {
                    Alibonus.parseMessage(message);
                });
            }

        }
        if (document.getElementById('activate-cashback-onbording') !== null) {
            document.getElementById('activate-cashback-onbording').onclick = function () {
                chrome.runtime.sendMessage({request: 'activate'}, function (message) {
                    Alibonus.parseMessage(message);
                });
            }
        }
        chrome.runtime.onMessage.addListener(function (message) {
            Alibonus.parseMessage(message);
        });
    },
    parseMessage: function (message) {
        // console.log(message);
        if (message.request === 'activated') {
            // console.log(message.b);
        }
    },
};

Alibonus.init();
