var homeUrl = chrome.runtime.getManifest().homepage_url;
var SlideWindow = {
    otherWindow: '',
    showOtherWindow: function (page) {
        // если окна не было
        if (SlideWindow.windowObject === undefined) {
            SlideWindow.otherWindow = page;
            var body = $('body'), obj;
            switch (page) {
                case 'settings':
                    body.append(SlideWindow.windowObject = SlideWindow.getOptionsWindowObject());
                    obj = SlideWindow.windowObject;
                    SlideWindow.translateAllText();
                    SlideWindow.showOtherWindowAnimate(obj, function () {
                        Options.init(Api);
                    });
                    return true;
                    break;
                case 'check_package':
                    body.append(SlideWindow.windowObject = SlideWindow.getCheckPackageWindowObject());
                    obj = SlideWindow.windowObject;
                    SlideWindow.translateAllText();
                    SlideWindow.showOtherWindowAnimate(obj);
                    setTimeout(function () {
                        SlideWindow.windowObject.find('input.input-search').focus();
                    }, 500);
                    return true;
                    break;
                default:
                    return false
            }
        } else {
            var oldWindow = SlideWindow.windowObject.clone();

            SlideWindow.windowObject.remove();
            delete SlideWindow.windowObject;
            $('body').append(oldWindow);
            oldWindow.attr('atr', '6');

            if (SlideWindow.otherWindow != page) {
                this.closeOtherWindow(oldWindow, 'op', function () {
                    SlideWindow.showOtherWindow(page);
                })
            } else {
                this.closeOtherWindow(oldWindow, 'slide', function () {
                    SlideWindow.showOtherWindow('none');
                })
            }
        }
    },
    translateAllText:function(object){
        object = object || $('body');

        object.find('.localize').each(function () {
            if(!$(this).hasClass('track-info-height')){
                $(this).empty().text(changeLang.getMessage($(this).attr('data-localize')));
            }
        });
        // level description
        object.find('.localize2').each(function(){
           $(this).empty().text(changeLang.getMessage($(this).attr('data-localize') + Popup.info.loyaltyLevel));
        });
    },

    showOtherWindowAnimate: function (Object, afterFunc) {
        afterFunc = afterFunc || function () {
            };
        Object.animate({left: 0}, 200, function () {
            afterFunc();
        });
    },
    closeOtherWindow: function (Object, type, func) {
        type = type || 'slide';
        func = func || function () {
            };

        if (Object !== undefined) {
            if (type == 'slide') {
                Object.animate({left: SlideWindow.winWidth}, 200, function () {
                    Object.delay(200).remove();
                    delete Object;
                });
            } else {
                func();
                Object.animate({opacity: 0}, 500, function () {
                    Object.delay(500).remove();
                    delete Object;
                });
            }
        }
    },
    // формируем объект окна с кнопкой назад
    getOtherWindowObject: function (page) {
        SlideWindow.winWidth = $(window).width();
        SlideWindow.winHeight = $(window).height();

        var windowObject = $('<div/>', {
            class: "slide-window",
            css: {
                width: SlideWindow.winWidth,
                height: SlideWindow.winHeight - 36,
                position: "absolute",
                left: SlideWindow.winWidth
            }
        });

        windowObject.append($('<div/>', {
            class: 'back-button localize',
            "data-localize":"button_back",
            html: (changeLang.getMessage("button_back") == null)?"Назад":changeLang.getMessage("button_back"),
            click: function () {
                SlideWindow.buttonRemoveWindowSlide($(this).parent());
            }
        }));

        windowObject.append($('<div/>', {
            class: 'slide-window-body',
            id: 'options-main'
        }));
        return windowObject;
    },
    // отработка кнопки назад - удаление текущего окна через slide
    buttonRemoveWindowSlide: function (windowObject) {
        SlideWindow.closeOtherWindow(windowObject, 'slide');
        SlideWindow.otherWindow = '';
    },
    // создаем окно настройки
    getOptionsWindowObject: function () {
        var windowObject = SlideWindow.getOtherWindowObject();
        var optionPage = windowObject.find('#options-main');
        optionPage.load('./options.html form', function () {
            SlideWindow.translateAllText(optionPage);
        });
        return windowObject;
    },

    hideError:function(inputSearch,errorsDiv){
        inputSearch.removeClass('error');
        errorsDiv.removeClass('show');
    },
    // создаем окно поиск посылки
    getCheckPackageWindowObject: function () {
        var windowObject = SlideWindow.getOtherWindowObject();
        var optionPage = windowObject.find('#options-main');
        windowObject.addClass('check-package load');

        window.w = 0;
        var data, body_div, h3, table, tr, buttonSearch, inputSearch, errorsDiv, oldTrackData;

        errorsDiv = $('<div/>', {class: 'check-package-errors'});
        optionPage.append($('<h3/>', {
            class:"localize",
            "data-localize":"package_h3",
            text: (changeLang.getMessage("package_h3") == null)?"Отслеживание посылки":changeLang.getMessage("package_h3")
        })).attr('id', 'check-package-main');
        inputSearch = $('<input/>', {
            type: "text",
            class: "input-search",
            "post_service":"",
            keyup: function (e) {
                if (e.keyCode == 13) {
                    buttonSearch.click();
                }
                SlideWindow.hideError(inputSearch,errorsDiv);
            },
            placeholder: (changeLang.getMessage("enter_track_number") == null)?"трек номер отправления":changeLang.getMessage("enter_track_number")
            // placeholder:"ZA017501615HK"
        });
        buttonSearch = $('<input/>', {
            type: "button",
            class: "button-search",
            click: function () {
                SlideWindow.hideError(inputSearch,errorsDiv);
                SlideWindow.getPackageData(windowObject, inputSearch, inputSearch.attr("post_service"));
            }
        });
        optionPage.append($('<div/>', {class: "search-input-div"}).append(inputSearch).append(buttonSearch));
        optionPage.append(errorsDiv);

        this.bg = chrome.extension.getBackgroundPage();
        Api.get_previous_requests(this.bg.Info, function (data) {
            windowObject.removeClass('load');
            if (data.length == 0) {
                windowObject.addClass('eath');
                optionPage.append(body_div = $('<div/>', {
                    class: "body-div localize",
                    "data-localize":"package_title_text"
                }));
                body_div.text((changeLang.getMessage("package_title_text") == null)?"'Здесь вы можете отследить международные почтовые отправления и посылки из Китая'":changeLang.getMessage("package_title_text"));
            } else {
                optionPage.append(h3 = $('<h3/>', {
                    text: (changeLang.getMessage("package_h1") == null)?"Мои посылки":changeLang.getMessage("package_h1"),
                    class:"localize",
                    "data-localize":"package_h1"
                }));
                optionPage.append(body_div = $('<div/>', {class: "body-div"}));
                body_div.append(table = $('<table/>', {class: 'old-search'}));
                if (data.length > 5) {
                    body_div.addClass('scroll')
                }
                for (key in data) {
                    el = data[key];
                    table.append(tr = $('<tr/>'));
                    tr.data(data[key]);

                    tr.append($('<td/>').append($('<span/>', {
                        text: el.track_number,
                        click: function () {
                            oldTrackData = $(this).parent().parent().data();
                            post_service = (oldTrackData.post_service !== undefined && oldTrackData.post_service != null && oldTrackData.post_service != '')?oldTrackData.post_service:'';
                            inputSearch.val(oldTrackData.track_number).attr('post_service',post_service);

                            buttonSearch.click();
                        }
                    })));
                    tr.append($('<td/>', {
                        class: 'old-search-update',
                        click: function () {
                            oldTrackData = $(this).parent().data();
                            post_service = (oldTrackData.post_service !== undefined && oldTrackData.post_service != null && oldTrackData.post_service != '')?oldTrackData.post_service:'';
                            inputSearch.val(oldTrackData.track_number).attr('post_service',post_service);
                            inputSearch.addClass('refresh');
                            buttonSearch.click();
                        }
                    }).append($('<img/>', {
                        src: '../icons/refresh_dis.png',
                        mouseover:function(){
                            $(this).attr("src",'../icons/refresh_active.png');
                        },
                        mouseout:function(){
                            $(this).attr("src",'../icons/refresh_dis.png');
                        },
                    })));
                    tr.append($('<td/>', {
                        class: 'old-search-delete',
                        click: function () {
                            SlideWindow.delOldSearch($(this).parent().data().id);
                            $(this).parent().remove();

                            if (table.find('tr').length <= 5) {
                                body_div.removeClass('scroll')
                            }
                            if (table.find('tr').length == 0) {
                                windowObject.addClass('eath');
                                h3.remove();
                                body_div.empty().text((changeLang.getMessage("package_title_text") == null)?"трек номер отправления":changeLang.getMessage("package_title_text"))
                            }
                        }
                    }).append($('<img/>', {
                        src: '../icons/trashicon.png'
                    })));
                }
            }
        });
        return windowObject;
    },
    getPackageData: function (windowObject, inputSearch, postService) {
        postService = postService || '';
        var trackNumber = inputSearch.val();
        var refresh_data = inputSearch.hasClass('refresh');
        inputSearch.removeClass('refresh');

        var contentDiv = windowObject.addClass('load').find('.body-div');
        contentDiv.empty().prev('h3').remove();

        this.bg = chrome.extension.getBackgroundPage();
        if (trackNumber == '') {
            SlideWindow.setSearchError(windowObject, 'Пожалуйста, введите трек-номер отправления.', 'invalid_track_number');
            return false;
        }

        Api.check_package(this.bg.Info, trackNumber, postService, changeLang.getLang(), refresh_data, function (response) {
            if (response.error !== undefined && response.error == 'incorrect_track_number') {
                SlideWindow.setSearchError(windowObject, 'Неправильный трек-номер. Пожалуйста, проверьте правильность введенного трек-номера отправления.', 'incorrect_track_number');
            } else if (response.error !== undefined && response.error == 'many_post_services') {
                SlideWindow.choosePostService(windowObject, response.data.services, inputSearch)
            } else if (response.error !== undefined && response.error == 'no_info') {
                SlideWindow.setSearchError(windowObject, 'Информации о местоположении посылки пока нет.', 'not_info_for_track_number');
            } else if (response.error !== undefined && response.error == 'server_error') {
                SlideWindow.setSearchError(windowObject, 'На данный момент наблюдается повышенная нагрузка на сервер отслеживания посылок. Информация о посылке не получена. Пожалуйста, попробуйте позже.', 'info_for_track_number_is_server_error');
            } else {
                SlideWindow.getContentSearch(windowObject, contentDiv, response);
            }
            SlideWindow.translateAllText();
        });
    },
    choosePostService: function (windowObject, servicesArr, inputSearch) {
        servicesArr = servicesArr || [];
        windowObject.removeClass('load').removeClass('eath');

        var contentDiv = windowObject.find('.body-div'), table, tr;
        contentDiv.append($('<div/>', {
            class:"localize",
            "data-localize":"package_check_mail_service",
            text: "Введенному вами номеру почтового отправления соответствует несколько почтовых служб. Выберите правильную почтовую службу, нажав на соответствующую иконку."
        }))

        contentDiv.append(table = $('<table/>', {class: 'service-choose'}));

        for (key in servicesArr) {
            postService = servicesArr[key];

            table.append(tr = $('<tr/>'));
            tr.append($('<td/>', {
                text: postService.readable,
                click: function () {
                    SlideWindow.getPackageData(windowObject, inputSearch, $(this).data().code);
                }
            }).data(postService))
        }

    },

    setSearchError: function (windowObject, errorText, localizeTitle) {
        localizeTitle = localizeTitle || '';
        windowObject.removeClass('load').addClass('eath');
        windowObject.find('.input-search').addClass('error');
        windowObject.find('.check-package-errors').addClass('show localize ' + localizeTitle).attr('data-localize', localizeTitle).empty().text((changeLang.getMessage(localizeTitle)==null)?errorText:changeLang.getMessage(localizeTitle));
        windowObject.find('.back-button').unbind('click').click(function () {
            SlideWindow.windowObject = SlideWindow.getCheckPackageWindowObject();
            SlideWindow.windowObject.css('left', 0);
            windowObject.replaceWith(SlideWindow.windowObject);
            SlideWindow.translateAllText();
            setTimeout(function () {
                SlideWindow.windowObject.find('input.input-search').focus();
            }, 500)
        });
    },

    getContentSearch: function (windowObject, contentDiv, response) {
        windowObject.removeClass('load').removeClass('eath');
        // onclick on button back
        windowObject.find('.back-button').unbind('click').click(function () {
            SlideWindow.windowObject = SlideWindow.getCheckPackageWindowObject();
            SlideWindow.windowObject.css('left', 0);
            windowObject.replaceWith(SlideWindow.windowObject);
            setTimeout(function () {
                SlideWindow.windowObject.find('input.input-search').focus();
            }, 500)
        });

        // create content page
        if (response.data !== undefined && response.data.text !== undefined && response.data.text.length > 0) {
            var trackInfoRows;
            contentDiv.append(trackInfoRows = $('<div/>', {class: 'track-info-rows'}));
            for (key in response.data.text) {
                text = response.data.text[key];
                trackInfoRows.append($('<div/>').append($('<span/>', {text: text.title})).append($('<span/>', {text: text.value})));
            }
        }

        var trackRows, table, tr, date, status, timeArr, time, classTr, rowsNum, heightRow;
        if (response.data !== undefined && response.data.statuses !== undefined && response.data.statuses.length > 0) {
            contentDiv.append($('<div/>', {class: 'track-rows'}).append(table = $('<table/>')));

            rowsNum = response.data.statuses.length;
            for (index in response.data.statuses) {
                status = response.data.statuses[index];
                table.append(tr = $('<tr/>'));

                date = status.date.split(' ');
                timeArr = date[1].split(':');
                time = timeArr[0] + ':' + timeArr[1];

                tr.append($('<td/>').append($('<div/>').append($('<strong/>', {text: date[0]}))).append($('<div/>').append($('<span/>', {text: 'в ' + time}))));
                tr.append($('<td/>'));
                tr.append($('<td/>').append($('<div/>', {class: 'road-container'}).append($('<div/>', {class: "track-road"}).append($('<span/>')).append($('<span/>')))).append($('<div/>').append($('<strong/>', {text: status.place}))).append($('<div/>').append($('<span/>', {text: status.operation}))));
            }
            table.find('tr td:nth-of-type(3)').each(function (index) {
                heightRow = (index != rowsNum - 1) ? $(this).innerHeight() : $(this).innerHeight() - 15;
                $(this).find('.track-road').css('height', heightRow)
            });

            if ((contentDiv.find('.track-info-rows').innerHeight() + contentDiv.find('.track-rows').innerHeight()) > 360) {
                contentDiv.addClass('scroll track-info-height')
            } else {
                contentDiv.removeClass('scroll')
            }

        } else {
            contentDiv.append(trackRows = $('<div/>', {class: 'track-rows'}));
            trackRows.append($('<div/>', {
                class: "not-info",
                text: "по искомому трекномеру информация не найдена"
            }));
        }
    },
    delOldSearch: function (id) {
        this.bg = chrome.extension.getBackgroundPage();
        Api.del_previous_request_track(this.bg.Info, id);
    }
};

var Popup = {
    bg: {},
    info: {},
    bgMain: {},
    otherWindow:'',
    init: function () {
        this.bg = chrome.extension.getBackgroundPage();
        this.info = this.bg.Info;
        this.bgMain = this.bg.Main;
        this.load();
        this.translate();
        this.show();
        $('.ali_link').click(function (e) {
            e.preventDefault();
            Popup.bgMain.createTabAli();
        });

    },
    load: function () {
        if (!this.bg.Info.isLogged) {
            $('#mailAli').val(this.bg.Temp.email);
            $('#passAli').val(this.bg.Temp.pass);
        }
        this.getInfo();
    },
    getInfo: function (s) {
        var time = new Date().getTime();
        if (!s && (typeof localStorage['timeUpdate'] === 'undefined' || localStorage['timeUpdate'] < time - 60 * 1000)) {
            localStorage['timeUpdate'] = time;
            s = 1;
        } else {
            Popup.showMoney();
        }
        if (s) {
            // pre-fill some loyalty information before the update
            Popup.preShowLoyaltyInfo();
            Popup.bg.Api.getUserInfo(function (status) {
                if (!status) {
                    localStorage['timeUpdate'] = 0;
                }
                // full-fill all info after the update
                Popup.showMoney();
            });
        }

    },
    resizeAvaImg: function(){
        var img = $('.user-ava img');
        if (img.width() < img.height()) {
            img.css({
                "width":45
            });
            img.css({
                "height":"auto",
                "margin": -(img.height()/2 - 45 / 2) + "px 0 0 0"
            })
        } else if (img.height() > img.width()) {
            img.css({
                "width":"auto"
            });
            img.css({
                "height":45,
                "margin": "0 0 "+(-(img.height()/2 - 45 / 2)) + "px 0"
                // "marginLeft": -(img.width() / 2 - 45 / 2)
            })
        }
        // alert(img.height())
    },
    showMoney: function () {        
    	  $('.approved-sum').empty().text(parseFloat(this.info.approved).toFixed(2));
        $('.pending-sum').empty().text(parseFloat(this.info.pending).toFixed(2));
        $('.econommed-sum').empty().text((parseFloat(this.info.loyaltyProgress)).toFixed(2));
        $('.loyaltyPercent').empty().text(parseFloat(this.info.loyaltyPercent));
        $('.user-name').empty().text(this.info.email.replace(/<[^>]*>?/g, '').split('@')[0]);
        $('.loyaltyLevel').empty().text(parseFloat(this.info.loyaltyLevel));
        $('.user-ava img').attr('src',this.info.photo.replace(/<[^>]*>?/g, ''));
        // test of the loyalty
        // console.log(parseFloat(this.info.loyaltyProgress));
        // console.log(this.info.loyaltyLevel);
        // console.log(parseFloat(this.info.loyaltyPercent));
        // console.log(this.info.photo);
        // console.log(this.info.email);
        Popup.resizeAvaImg();

    },
    preShowLoyaltyInfo: function() {
        $('.loyaltyPercent').empty().text(parseFloat(this.info.loyaltyPercent));
        $('.user-name').empty().text(this.info.email.replace(/<[^>]*>?/g, '').split('@')[0]);
        $('.loyaltyLevel').empty().text(parseFloat(this.info.loyaltyLevel));
        $('.user-ava img').attr('src',this.info.photo.replace(/<[^>]*>?/g, ''));
    },
    // enter the cabinet
    loggin: function (email, pass) {
        var cashbackStatus = this.bg.Main.currentStatusCashback;
        this.bg.Api.login(email, pass, function (status) {

            $loginRow = $('#loginForm div.form-control-holder');
            if (status === 1) {
                $loginRow.removeClass('error');
                Popup.bgMain.setInfoFromCookie(function () {
                    //console.log(cashbackStatus);
                    Popup.getInfo(1);
                    $('div.enter').slideUp(200);

                    // Cashback activated ?
                    if (cashbackStatus == 4 || cashbackStatus == 5)
                        $('div.disable').slideDown(200);
                    else
                        $('div.enable').slideDown(200);
                });
            }
            if (status === 2) {
                $loginRow.addClass('error');
            }
            if (status === 3) {
                $loginRow.addClass('error');
                $('.error-msg', $loginRow).text('Unknown error');
            }
        });
    },

    show: function () {
        // this.bg.Api.getSocLinks(function (status){
        //     $('.socialLink').append(status);
        //     $('.socialLink a').attr('target', '_blank');
        //     var timer = setInterval(function(){
        //         Popup.bgMain.setInfoFromCookie();
        //     }, 3000);
        //     setTimeout(function() {
        //       clearInterval(timer);
        //   }, 20000);
        // });
        $('div.ava-status').removeClass('user-level-1').addClass('user-level-'+Popup.info.loyaltyLevel);
        
        //$('div.enter').hide();
        $('div.enter').show();
        $('div.enable').hide();
        $('div.disable').hide();
        //console.log(this.bg);

        if (!this.info.isLogged) {
            $('div.enter').show();
            $('div.enable').hide();
        		$('div.disable').hide();
        } else {
            $('div.enter').hide();
            // Cashback activated ?
            if(this.bg.Main.currentStatusCashback == 4 || this.bg.Main.currentStatusCashback == 5)
                $('div.disable').show();
            else
                $('div.enable').show();
        }

        $('.screenShowReg').on('click', function () {
            chrome.tabs.create({url: homeUrl + 'register', active: true});
        });

        $('.screenOpenCabinet').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            Popup.loggin($('#mailAli').val(), $('#passAli').val());
        });

        $('.screenCheck').on('click', function () {
            // chrome.tabs.create({url: 'https://alibonus.com/user/posylkatrack', active: true});
            SlideWindow.showOtherWindow('check_package');
            return false;
        });

        $('.screenSettings').on('click', function(){
            SlideWindow.showOtherWindow('settings');
            return false;
        });

        $('.ali-logo').on('click', function () {
            chrome.tabs.create({url: homeUrl, active: true});
        });

        $('.forgot-pass').on('click', function () {
            chrome.tabs.create({url: homeUrl + 'forgot', active: true});
        });

        $('.screenHelp').on('click', function () {
            chrome.tabs.create({url: 'http://help-ru.alibonus.com/', active: true});
        });
        
        $('.user-ava, .user-name').on('click', function () {
            chrome.tabs.create({url: homeUrl + 'user/actions', active: true});
        });

        $('.save-info').on('click', function () {
            Popup.bg.Temp.email = $('#mailAli').val();
            Popup.bg.Temp.pass = $('#passAli').val();
        });

        $('#mailAli').keypress(function (e) {
            if (e.which === 13) {
                $('.screenOpenCabinet').click();
            }
        });
        $('#passAli').keypress(function (e) {
            if (e.which === 13) {
                $('.screenOpenCabinet').click();
            }
        });
        $('.level-info.localize2').click(function(){
            window.open(apiDomain + '/user/actions?roudmap', '_blank');
        })
    },
    translate: function () {
        changeLang.init(function () {
            SlideWindow.translateAllText();
            // placeholders for email and password fields
            $('#mailAli').attr('placeholder',changeLang.getMessage('email_placeholder'));
            $('#passAli').attr('placeholder',changeLang.getMessage('password_placeholder'));
            $('.screenOpenCabinet').attr('value',changeLang.getMessage('btn_enter'));
        })

    }
};

$(function () {
    changeLang.init(function () {
        Popup.init();
    });
});