var apiDomain = chrome.runtime.getManifest().homepage_url;
var ExtNotificationsLang = {
    your_level: 'Ваш уровень',
    newbie: "'Новичок'.",
    arithmetician: "'Арифметик'.",
    tradesman: "'Купец'.",
    treasurer: "'Казначей'.",
    shopaholic: "'Шопоголик'.",
    economist: "'Экономист'.",
    master_of_coin: "'Мастер над монетой'.",
    level_up_msg: "Поздравляем! Только что ваш уровень был повышен. ",
    ext_your_cashback: "Ваш кешбэк увеличен на ",
    cashback_for_purchase: "Кешбэк за покупку",
    successfully_credited: "Успешно зачислен",
    declined: "Отклонен'",
    available_for_withdrawal: "Доступен для вывода",

    alibonus_support_service: "Служба поддержки AliBonus",
    an_answer_to_ticket: "Пришел ответ на тикет",
    has_been_received: ""
};
var Api = {
    timeReloadInfo: 1000 * 60 * 60 * 1, //data Update interval (+ loyalty parameters update)
    timeReloadNotif: 1000 * 60 * 15, //notifications Update interval
    //apiURL: apiDomain + 'extensions2_0',
    apiURL: apiDomain + 'extensions',
    permission: true,
    getUserInfo: function (callback) {
        callback = callback || function () {
            };
        if (!Info.userId) {
            callback();
            return;
        }
        Api.getDataFromApi("get_data/" + encodeURIComponent(Info.token), {}, function (response) {
            try {
                var obj = response;
                Settings.setPayoutsApproved(response.payouts_approved || 0);
                Settings.setPending(response.pending || 0);
                Settings.setApproved(response.approved || 0);
                Settings.setUrl(response.url || Info.url);
                // get status cashback_notify from server
                storageSet('cashback_notify', (response.payout_notifications == 'enabled') ? true : false);
                // translate all textes
                $.each(ExtNotificationsLang, function (index, value) {
                    ExtNotificationsLang[index] = chrome.i18n.getMessage(index);
                });

                Settings.setLoyaltyProgress(response.loyalty_progress || 0);
                var oldLoyaltyLevel = Info.loyaltyLevel;
                Settings.setLoyaltyLevel(response.loyalty_level || 1);
                Settings.setLoyaltyPercent(response.loyalty_percent || 7.0);

                var per = 7;
                // send notification if loyalty level up
                if (oldLoyaltyLevel < Info.loyaltyLevel) {
                    var loyaltyLevelName = '';
                    switch (Info.loyaltyLevel) {
                        case 1:
                            return;
                            break;
                        case 2:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.arithmetician;
                            break;
                        case 3:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.tradesman;
                            per = 14;
                            break;
                        case 4:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.economist;
                            per = 22;
                            break;
                        case 5:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.shopaholic;
                            per = 31;
                            break;
                        case 6:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.treasurer;
                            per = 40;
                            break;
                        case 7:
                            loyaltyLevelName = ExtNotificationsLang.your_level + ' - ' + ExtNotificationsLang.master_of_coin;
                            per = 50;
                            break;
                        default:
                            loyaltyLevelName = '';
                            break;
                    }

                    Api.sendNotification('AliBonus', {
                        body: ExtNotificationsLang.level_up_msg + loyaltyLevelName + ExtNotificationsLang.ext_your_cashback + per + '%',
                        icon: '../icons/notification.40x40.png',
                        tag: 'level_up',
                        dir: 'auto'
                    });
                }

                Settings.setEmail(response.email || '');
                Settings.setPhoto(response.photo || '/icons/user-head-logo.png');
                callback(1);
            } catch (e) {
                callback(0);
            }
        });
    },
    login: function (email, pass, callback) {
        callback = callback || function () {
            };

        Api.getDataFromApi('login', {
            email: encodeURIComponent(email),
            password: encodeURIComponent(pass)
        }, function (response) {
            if (response[0].error) {
                if (response[0].error === 'wrong_email_password') {
                    callback(2);
                } else {
                    callback(3);
                }
            } else if (response[0].authorization) {
                callback(1);
            } else {
                callback(3);
            }
        });
    },
    setPayoutNotificationsStatus: function () {
        Api.getDataFromApi("set_user_notify_permissions", {
            payout_notifications: (storageGet('cashback_notify', true)) ? 'enabled' : 'disabled'
        }, function (data) {
            if (data.response === undefined || data.response !== "OK") {
                // console.warn(data);
            }
        })
    },
    sendNotification: function (title, options) {
        // We check whether the browser supports HTML5 Notifications
        if (!("Notification" in window)) {
            //console.log('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
        }
        // Check disabled in Options
        if (!storageGet('cashback_notify', true)) {
            // console.log('В настройках расширения отключены push уведомления')
        }
        // Verify whether there is a right to send notifications
        else if (Notification.permission === "granted") {
            // if granted send notification
            var notification = new Notification(title, options);

            // if clicked on the notification
            notification.onclick = function () {
                if (notification.tag.indexOf('payout') + 1) {
                    window.open(apiDomain + 'user/actions', '_blank');
                }
                // go to user tickets list
                else if (notification.tag.indexOf('ticket') + 1) {
                    window.open(apiDomain + 'user/tickets/show/' + notification.tag.substr(6), '_blank');
                }
                else if (notification.tag.substr(0, 11) == 'new_friend') {
                    window.open(apiDomain + 'user/referrals', '_blank');
                }
            }
        }

        // If you do not have rights, we are trying to get them
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                // If the right is successfully received, send notice
                if (permission === "granted") {
                    var notification = new Notification(title, options);
                }
                else {
                    //console.log('Вы запретили показывать уведомления'); // The user has declined your request to show notifications
                }
            });
        }
        else {
            // The user has previously rejected a request to show your notifications
            // At this point, we can, but we will not bother him. Respect the decisions of its members.
            //console.log('Вы запретили показывать уведомления 2');
        }
        //console.log(Notification.permission);
    },

    getDataFromApi: function (methodName, i_data, callback) {
        i_data = i_data || {};
        callback = callback || function () {
            };
        // cook std data for send
        var sendData = {
            token: encodeURIComponent(Info.token),
            language: changeLang.getLang()
        };

        for (var index in i_data) {
            if (i_data[index]) {
                sendData[index] = i_data[index];
            }
        }
        $.post(Api.apiURL + "/" + methodName, sendData, function (response) {
            if (response.error) {
                Api.errors(response);
            }
            callback(response)
        }, 'json');
    },
    errors: function (data) {
        // main error processing
    },
    getNotification: function () {
        Api.getDataFromApi("get_notifications_list", {
            token: encodeURIComponent(Info.token),
            language: changeLang.getLang()
        }, function (data) {
            if (data.push_notify) {
                $.each(data.push_notify, function (index, value) {
                    Api.sendNotification(value.title, {
                        body: value.body,
                        icon: '../icons/notification.40x40.png',
                        tag: value.tag + index,
                        dir: 'auto'
                    })
                });
            }
        });
    },
    detectBrowser: function () {
        var ua = navigator.userAgent;
        var browserName = navigator.appName;
        // Opera 15+,
        if ((verOffset = ua.indexOf("OPR/")) != -1)
            browserName = "Opera";
        //Edge
        else if (ua.indexOf('Edge/') !== -1) {
            browserName = 'Edge';
        }
        //Google Chrome
        else if ((verOffset = ua.indexOf("Chrome")) != -1)
            browserName = "Chrome";
        // older Opera,
        else if ((verOffset = ua.indexOf("Opera")) != -1)
            browserName = "Opera";
        // Microsoft IE
        else if ((verOffset = ua.indexOf("MSIE")) != -1)
            browserName = "Microsoft Internet Explorer";
        //Apple Safari
        else if ((verOffset = ua.indexOf("Safari")) != -1)
            browserName = "Safari";
        //Firefox
        else if ((verOffset = ua.indexOf("Firefox")) != -1)
            browserName = "Firefox";
        //other browsers
        else
            browserName = "Unknown";

        return browserName;
    },
    startReloadUserInfo: function () {
        Api.getUserInfo();
        // html5 notifications dont allowed in firefox default settings, 
        // so show it in user cabinet (view)
        if (Api.detectBrowser !== 'Firefox') {
            Api.getNotification();
            setInterval(function () {
                Api.getNotification();
            }, Api.timeReloadNotif);
        }

        setInterval(function () {
            Api.getUserInfo();
        }, Api.timeReloadInfo);

    },
    check_package: function (Info, track_number, post_service, lang, refresh_data, callback) {
        callback = callback || function () {
            };
        refresh_data = refresh_data || false;

        Api.getDataFromApi("check_package", {
            track_number: track_number,
            lang: lang,
            service_name: post_service,
            refresh_data: refresh_data
        }, function (response) {
            callback(response);
        });
    },
    get_previous_requests: function (Info,callback) {
        callback = callback || function () {};

        this.setInfo(Info);
        this.getDataFromApi('get_previous_requests',{},function(json){
            callback(json.data);
        })

    },
    del_previous_request_track: function (Info, track_id, callback) {
        callback = callback || function () {};
        this.setInfo(Info);
        Api.getDataFromApi("del_previous_request_track", {track_id: track_id}, function (response) {
            callback(response);
        });
    },
    setInfo: function(info){
        Info = info
    }

};