var homeUrl = chrome.runtime.getManifest().homepage_url;
var msgObj = {
    year: ["actively_sells_more_than_a_year", "Активно продает более года"],
    nine_month: ["actively_selling_for_more_than_nine_months", "Активно продает более девяти месяцев"],
    six_month: ["actively_selling_for_more_than_six_months", "Активно продает более полугода"],
    three_month: ["actively_sells_for_less_than_three_months", "Активно продает менее трех месяцев"],
    less_six_month: ["actively_sells_for_less_than_six_months", "Активно продает менее полугода"],
    rating_very_low: ["extremely_low_performance_rating", "Крайне низкий рейтинг продавца"],
    rating_low: ["low_seller_ratings", "Низкий рейтинг продавца"],
    rating_weak: ["satisfactory_seller_rating", "Удовлетворительный рейтинг продавца"],
    rating_good: ["good_seller_ratings", "Хороший рейтинг продавца"],
    rating_very_good: ["high_seller_rating", "Высокий рейтинг продавца"],
    good_communication: ["seller_readily_comes_to_contact_with_the_buyer", "Продавец охотно идёт на контакт с покупателем"],
    good_description: ["goods_in_the_store_close_to_the_description", "Товары в магазине соответствуют описанию"],
    dismatch_description: ["description_of_the_goods_in_the_store_may_not_be_accurate", "Описание товаров в магазине может не соответствовать действительности"],
    fast_shipping: ["fast_shipping_goods", "Быстрая отправка товаров покупателю"],
    slow_shipping: ["can_play_for_time_deliveries", "Может тянуть время при отправке товара"],
    many_deals: ["a_lot_of_sales_for_the_last_three_months", "Очень много продаж за последние три месяца"],
    few_deals: ["less_products_sold_at_last_three_months", "За последние три месяца продано очень мало товаров"],
    reliable_seller: ["reliable_seller", "Надежный продавец - можно покупать"],
    check_seller: ["enough_reliable_seller", "Достаточно надежный продавец - можно брать"],
    average_seller: ["the_average_level_of_reliability", "Средний уровень надежности: можно покупать, если нет других вариантов"],
    nonreliable_seller: ["unreliable_seller", "Ненадежный продавец - покупаем, если нет других вариантов, но очень нужно"],
    fraud_seller: ["most_likely_to_encounter_problems", "Большая вероятность столкнуться с проблемами при покупке у этого продавца"],
    no_store: ["the_seller_has_no_shop", "У продавца нет магазина, вероятнее всего - это мошенник!"]
};
var ExtensionHtmlObject = {
    getLoginModal: function () {
        return $('<div/>', {
            id: 'extension-modal',
            class: 'modal bs-example-modal-lg',
            "tabindex": -1,
            "role": "dialog",
            "aria-labelledby": "mySmallModalLabel"
        }).append($('<div/>', {
                class: "modal-dialog",
                "role": "document"
            }).append($('<div/>', {
                class: "modal-content"
            })
                .append($('<button/>', {
                    "type": "button",
                    "class": "close-btn",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                    "style": "background: url('" + chrome.extension.getURL('/icons/close-btn.png') + "') no-repeat;"
                }))
                .append($('<div/>', {
                        class: "visual-holder"
                    })
                        .append($('<div/>', {
                                class: "holder"
                            })
                                .append($('<h4/>', {text: "AliBonus"}))
                                .append($('<span/>', {
                                    text: "Кешбэк сервис для AliExpress #1",
                                    "class": "title localize",
                                    "data-localize": "cashback_service_number_1"
                                }))
                        )
                        .append($('<div/>', {
                                class: "visual"
                            })
                                .append($('<img/>', {
                                    "src": chrome.extension.getURL('/icons/img9.jpg'),
                                    "alt": "image description"
                                }))
                        )
                )
                .append($('<div/>', {
                        class: "form-holder"
                    })

                        .append($('<h3/>')
                            .append($('<span/>', {
                                class: "localize",
                                "data-localize": "create_account_1",
                                text: "Создайте"
                            }))
                            .append($('<br/>'))
                            .append($('<span/>', {
                                class: "localize",
                                "data-localize": "create_account_2",
                                text: "учетную запись AliBonus"
                            }))
                        )
                        .append($('<span/>', {
                                class: "title localize",
                                "data-localize": "register_and_enter",
                                text: "Зарегистрируйся или Войди в личный кабинет, чтобы получать кешбэк до 8.25% прямо сейчас"
                            })
                        )
                        .append($('<div/>', {
                                class: "btn-holder"
                            })
                                .append($('<button/>', {
                                    class: "btn-enter btn btn-default btn-sm localize",
                                    id: "btn-enter",
                                    "type": "button",
                                    "data-localize": "h3_lbl",
                                    text: "Войти",
                                    click: function (e) {
                                        Content.clickBtnEnter(e);
                                    }
                                }))
                                .append($('<button/>', {
                                    class: "btn-reg btn btn-default btn-sm localize",
                                    id: "btn-register",
                                    "type": "button",
                                    "data-localize": "a_register",
                                    text: "Зарегистрироваться",
                                    click: function (e) {
                                        e.preventDefault();
                                        Content.extensionModalHide();
                                        window.open(homeUrl + 'register', '_blank');
                                    }
                                }))
                        )
                        .append($('<h5/>')
                            .append($('<span/>', {
                                class: "localize",
                                text: "Или",
                                "data-localize": "or_lbl"
                            }))
                        )
                        .append($('<div/>', {class: "socialLink"})
                            .append($('<a/>', {
                                class: "social Vk",
                                id: "vkontackte",
                                href: homeUrl,
                                "target": "_blank",
                                css: {
                                    background: "url(" + chrome.extension.getURL('/icons/vk.png') + ")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left top"
                                },
                                click: function (e) {
                                    e.preventDefault();
                                    Content.extensionModalHide();
                                    window.open('http://oauth.vk.com/authorize?client_id=5237392&scope=email&response_type=code&redirect_uri=https://alibonus.com/?provider=vk', '_blank');
                                }
                            }))
                            .append($('<a/>', {
                                class: "social Odnoklassniki",
                                id: "odnoklassniki",
                                href: homeUrl,
                                "target": "_blank",
                                css: {
                                    background: "url(" + chrome.extension.getURL('/icons/ok.png') + ")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left top"
                                },
                                click: function (e) {
                                    e.preventDefault();
                                    Content.extensionModalHide();
                                    window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id=1242403072&response_type=code&scope=GET_EMAIL&redirect_uri=https://alibonus.com?provider=odnoklassniki', '_blank');
                                }
                            }))
                            .append($('<a/>', {
                                class: "social Facebook",
                                id: "facebook",
                                href: homeUrl,
                                "target": "_blank",
                                css: {
                                    background: "url(" + chrome.extension.getURL('/icons/fb.png') + ")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left top"
                                },
                                click: function (e) {
                                    e.preventDefault();
                                    Content.extensionModalHide();
                                    window.open('https://www.facebook.com/dialog/oauth?client_id=1074813979216573&response_type=code&scope=email,user_birthday,user_location&redirect_uri=https://alibonus.com/?provider=facebook', '_blank');
                                }
                            }))
                            .append($('<a/>', {
                                class: "social Google",
                                id: "google",
                                href: homeUrl,
                                "target": "_blank",
                                css: {
                                    background: "url(" + chrome.extension.getURL('/icons/go.png') + ")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "0 -3px"
                                },
                                click: function (e) {
                                    e.preventDefault();
                                    Content.extensionModalHide();
                                    window.open('https://accounts.google.com/o/oauth2/auth?client_id=521415412975-gkn977bltvdg8b48fekdedf9a2cd36nl.apps.googleusercontent.com&response_type=code&scope=email&redirect_uri=https://alibonus.com/?provider=google', '_blank');
                                }
                            }))
                        )
                )
            )
        );
    },
    getRatingCircle: function (sRating) {
        return $('<div/>', {class: "circle"})
            .append($('<div/>', {class: "col1"})
                .append($('<span/>').append(sRating).append($('<small/>', {text: '%'})))
            )
            .append($('<div/>', {
                class: "title localize",
                "data-localize": "seller_reliability",
                text: "Надежность продавца"
            }))
    },
    notice: {
        cashback_activated: function () {
            return $('<div/>', {
                id: "notice-1",
                class: "modal bs-example-modal-sm notice",
                "tabindex": -1,
                "role": "dialog",
                "aria-labelledby": "mySmallModalLabel",
                css: {
                    "display": "none"
                }
            }).append($('<div/>', {
                class: "modal-dialog modal-sm",
                "role": "document"
            }).append($('<div/>', {
                    class: "modal-content"
                }).append($('<div/>', {
                    class: "visual"
                }).append($('<img/>', {
                    alt: "image description",
                    src: chrome.extension.getURL('/icons/img14.png')
                })))
                    .append($('<p/>').append($('<span/>', {
                        class: "localize",
                        text: "Кешбэк успешно активирован",
                        "data-localize": "cashback_activated"
                    })))
                    .append($('<p/>').append($('<span/>', {
                        class: "p-big"
                    })))
            ));


        },
        you_dont_get_cashback: function () {
            return $('<div/>', {
                id: "notice-2",
                class: "modal bs-example-modal-sm notice",
                "tabindex": "-1",
                "role": "dialog",
                "aria-labelledby": "mySmallModalLabel"
            }).append($('<div/>', {
                class: "modal-dialog modal-sm",
                "role": "document"
            }).append($('<div/>', {
                class: "modal-content"
            }).append($('<div/>', {
                class: "visual"
            }).append($('<img/>', {
                src: chrome.extension.getURL('/icons/img24.png'),
                alt: "image description"
            })))
                .append($('<p/>').append($('<span/>', {
                    class: "localize",
                    text: "Вы можете не получить",
                    "data-localize": "cashback_not_activated_1"
                }))).append($('<p/>').append($('<span/>', {
                    class: "localize",
                    text: "свой кешбэк",
                    "data-localize": "cashback_not_activated_2"
                })))));


        },
        cashback_not_activated: function () {
            var obj;

            obj = $('<div/>', {id: "notice-3"});

            obj.append($('<div/>', {class: "center"})
                .append($('<strong/>', {
                        class: "logoAB",
                        css: {
                            "background": "url('" + chrome.extension.getURL('/icons/logo-extension.png') + "')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0% 0%",
                            backgroundSize: "24px"
                        },
                        click: function (e) {
                            e.preventDefault();
                            window.open(homeUrl, '_blank');
                        }
                    })
                        .append($('<a/>', {href: "#"}))
                )
                .append($('<a/>', {
                    href: "#",
                    class: "btn-close btn-close-notice-3",
                    css: {
                        background: "url('" + chrome.extension.getURL('/icons/close-btn.png') + "')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0% 0%",
                        backgroundSize: "cover"
                    },
                    click: function (e) {
                        e.preventDefault();
                        Content.hideRedTopLine();
                    }
                }))
                .append($('<div/>', {class: "btn-holder"})
                    .append($('<span/>', {
                        class: "title localize",
                        "data-localize": "cashback_not_activated_3",
                        text: "Кешбэк не активирован"
                    }))
                    .append($('<a/>', {
                        href: "#",
                        text: "Активировать",
                        class: "btn btn-activate btn-activate-3 localize",
                        "data-localize": "cashback_activate",
                        click: function (e) {
                            Content.btnActivateClick(e)
                        }
                    }))
                    .append($('<a/>', {
                        href: "#",
                        text: "Войти",
                        class: "btn btn-enter btn-enter-3 localize",
                        "data-localize": "h3_lbl",
                        click: function (e) {
                            Content.clickBtnEnter(e);
                        }
                    }))
                )
            );

            return $('<div/>', {
                id: "notice-3-wrapper"
            })
                .append($('<div/>', {id: "notice-3-top"}))
                .append(obj);
        }
    },
    sellerReliability: function () {

        var tooltip_body, header = $('<div/>', {class: "header"})
            .append($('<div/>', {class: "logo-alibonus"}))
            .append($('<div/>', {
                class: "title-alibonus localize",
                "data-localize": "seller_reliability",
                text: "Надежность продавца"
            }))
            .append($('<div/>', {class: "tooltip-link"})
                .append($('<a/>', {
                    class: "tooltip",
                    click: function () {
                        tooltip_body.toggle();
                    }
                }))
                .append(tooltip_body = $('<div/>', {
                    class: "tooltip_body localize",
                    "data-localize": "trust_block_tooltip",
                    text: "Это блок проверки продавца кешбэк-сервиса Alibonus. Мы помогаем делаеть не только выгодные, но и безопасные покупки!",
                    click: function () {
                        tooltip_body.hide();
                    }
                }))
            );

        var body = $('<div/>', {class: "body"})
            .append($('<div/>'))
            .append($('<div/>', {class: "itog", css: {paddingTop: 10}})
                .append($('<span/>', {class: "info"}))
                .append($('<div/>', {class: "sp-block"})
                    .append($('<div/>', {class: "sp"})
                        .append($('<div/>', {class: "b1"}))
                        .append($('<div/>', {class: "b2"}))
                        .append($('<div/>', {class: "b3"}))
                    )
                )
            );

        var obj = $('<div/>', {class: "trust-block"}).append(header).append(body);
        return obj;
    },
    cashbackHeadObj: {
        cashback_cant_be_refunded_for_this_purchase: function () {
            var tooltip_body;
            return [
                $('<div/>', {class: "logo-alibonus"}),
                $('<div/>', {
                    class: "title"
                })
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "cashback_cant_be_refunded_for_this_purchase",
                        text: "На данный товар не может быть начислен кешбек"
                    })),

                $('<div/>', {
                    class: "tooltip-link"
                })
                    .append($('<a/>', {
                        class: "tooltip", click: function () {
                            tooltip_body.toggle();
                        }
                    }))
                    .append(tooltip_body = $('<div/>', {
                        class: "tooltip_body localize",
                        "data-localize": "russian_mall_tooltip",
                        text: "Кешбэк не может быть начислен за товары из Российского МОЛЛА",
                        click: function () {
                            tooltip_body.hide();
                        }
                    }))

            ];
        },
        your_cashback_is_active: function (loyaltyPercent) {
            var tooltip_body;
            return [
                $('<div/>', {class: "logo-alibonus"}),
                $('<div/>', {
                    class: "title"
                })
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "your_cashback_is_active",
                        text: "Ваш кешбэк активирован"
                    }))
                    .append(' (' + loyaltyPercent + '%)'),

                $('<div/>', {
                    class: "tooltip-link"
                })
                    .append($('<a/>', {
                        class: "tooltip", click: function () {
                            tooltip_body.toggle();
                        }
                    }))
                    .append(tooltip_body = $('<div/>', {
                        class: "tooltip_body localize",
                        "data-localize": "cashback_block_tooltip",
                        text: "Это блок кешбэка, который вы можете получить после покупки данного товара",
                        click: function () {
                            tooltip_body.hide();
                        }
                    }))
            ];
        },
        cashback_is_not_active: function () {
            var tooltip_body;
            return [
                $('<div/>', {class: "logo-alibonus"}),
                $('<div/>', {
                    class: "title"
                })
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "cashback_is_not_active",
                        text: "Кешбэк не активирован"
                    }))
                    .append($('<span/>', {
                        class: "btn-activate localize",
                        "data-localize": "activate",
                        text: "Активировать",
                        click: function (e) {
                            Content.btnActivateClick(e)
                        }
                    }))
                , $('<div/>', {
                    class: "tooltip-link"
                })
                    .append($('<a/>', {
                        class: "tooltip", click: function () {
                            tooltip_body.toggle();
                        }
                    }))
                    .append(tooltip_body = $('<div/>', {
                        class: "tooltip_body localize",
                        "data-localize": "activate_tooltip",
                        text: "Нажмите кнопку \"Активировать\", чтобы получить кешбэк за этот товар",
                        click: function () {
                            tooltip_body.hide();
                        }
                    }))

            ]
        }
    },
    cashbackBodyObj: {
        you_wont_get_cashback_for_this_purchase: function (link) {
            return $('<div/>', {
                class: "body-alibonus"
            })
                .append($('<div/>', {class: "info"}))
                .append($('<div/>', {class: "main-info"})
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "you_wont_get_cashback_for_this_purchase",
                        text: "Вы не получите кешбэк за этот товар."
                    }))
                    .append($('<span/>', {
                        class: "more-gray localize",
                        "data-localize": "more_details",
                        text: "Подробнее",
                        click: function () {
                            window.open(link, '_blank');
                        }
                    }))
                );
        },
        your_cashback: function (sum, currency) {
            var tooltip_body, body_alibonus_div = $('<div/>', {
                class: "body-alibonus"
            })
                .append($('<div/>', {class: "info"}))
                .append($('<div/>', {class: "main-info"})
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "your_cashback",
                        text: "Вам вернется: "
                    }))
                    .append($('<span/>', {class: "sum", text: sum + ' ' + currency}))
                    .append($('<span/>', {
                        class: "localize",
                        "data-localize": "piece",
                        text: " / шт"
                    }))
                    .append($('<a/>', {
                        class: "tooltip", click: function () {
                            tooltip_body.toggle();
                        }
                    }).append(tooltip_body = $('<div/>', {
                        class: "tooltip_body localize",
                        "data-localize": "cashback_block_tooltip2",
                        text: "Это сумма кешбэка, которая вернётся на ваш счет в личный кабинет Alibonus",
                        click: function () {
                            $(this).prev().click();
                        }
                    })))
                );

            if (location.host.toString().split(".")[0] == "group") {
                body_alibonus_div.addClass("group")
            }
            return body_alibonus_div;
        }
    },
    getCardObject: function (obj_class, data_localize_tag, text) {
        return $('<div/>', {class: "cashback-alibonus-cart"})
            .append($('<div/>', {class: obj_class}))
            .append($('<span/>', {
                class: "info localize",
                "data-localize": data_localize_tag,
                text: text
            }))
    },
    getSearchObject: function (obj_class, data_localize_tag, text) {
        return $('<div/>', {class: "cashback-alibonus-search"})
            .append($('<div/>', {class: obj_class}))
            .append($('<span/>', {
                class: "info localize",
                css: {"float": "left"},
                "data-localize": data_localize_tag,
                text: text
            }));
    },
};
// cashback for mobile phones is smaller
var telephoneCategoriesList = [
    "202001195"
];

var Content = {
    sRating: 0,
    isShowSeller: false,
    currentStatusCachback: 0,
    shopCategory: 1,
    loyaltyPercent: 8.25,
    htmlObject: {},
    language: 'ru',
    init: function () {
        this.addPopups();
        chrome.runtime.sendMessage({request: 'getLanguage'}, function (message) {

            Content.parseMessage(message);

        });
        chrome.runtime.sendMessage({request: 'getOptionList'}, function (message) {
            Content.parseMessage(message);
            if (window.location.pathname == '/order_list.htm') {
                $('.button-buyerLeaveFeedback').click(function () {
                    var cur_price = $.trim($(this).parent().parent().prev().find('.order-amount .amount-num').html()).split(' '),
                        currency;
                    currency = (cur_price[1]).replace(".", '');
                    cur_price = parseFloat(($.trim(cur_price[0])).replace(/[/,]/gim, '.'));
                    chrome.runtime.sendMessage({request: 'setTmpCurPrice', cur_price: cur_price, currency: currency});
                });
            }
            if (window.location.pathname == '/management/feedbackBuyerList.htm') {
                $('.product-action p a.ui-button').click(function () {
                    var cur_price = $.trim($(this).parent().parent().parent().find('.product-sets .product-amount .cost').html()).split(' ');
                    currency = (cur_price[1]).replace(".", '');
                    cur_price = parseFloat(($.trim(cur_price[0])).replace(/[/,]/gim, '.'));
                    chrome.runtime.sendMessage({request: 'setTmpCurPrice', cur_price: cur_price, currency: currency});
                })
            }
            $('.feedback-main').each(function () {
                Content.add_link_in_comment($(this));
            });

            if (Content.optionList['add_link_in_comment']) {
                $('.rating-main .dsr-star-list').on('click', function () {
                    objectStar = $(this);
                    setTimeout(function () {
                        var textAreaObj = objectStar.parent().parent().parent().parent().find('.feedback-main textarea');
                        var hiddenDiv = textAreaObj.parent().find('.js-button-add-link div:nth-of-type(4)');
                        Content.addOurTextRecomendation(textAreaObj, hiddenDiv.find('span').eq(0).text(), hiddenDiv.find('span').eq(1).text(), hiddenDiv.find('span').eq(2).text());
                    }, 1000);
                });
            }
            if (Content.optionList['add_btn_search_track'] && window.location.pathname == "/orderList.htm" && $('.button-logisticsTracking').length > 0) {
                var btn_search;
                $('.button-logisticsTracking').each(function () {
                    var trackNumber, orderId = $(this).attr('orderid');
                    $(this).parent().append(btn_search = $('<button/>', {
                        class: "alibonus-track-search localize",
                        'data-localize': "a_track",
                        css: {
                            backgroundImage: "url('" + chrome.extension.getURL('/icons/logo-search-btn.png') + "')"
                        },
                        text: (Content.getMessage('a_track') != null) ? Content.getMessage('a_track') : "Отследить посылку",
                        click: function () {
                            Content.matchTrackingNumberByOrder(orderId, function (param) {
                                window.open(homeUrl + 'user/posylkatrack?track=' + param.tracking_number, '_blank');
                            });
                        }
                    }));
                });
            }
        });
        chrome.runtime.sendMessage({request: 'getStatus'}, function (message) {
            Content.parseMessage(message);
        });

        chrome.runtime.onMessage.addListener(function (message) {
            Content.parseMessage(message);
        });
        chrome.runtime.sendMessage({request: 'getEconomy'}, function (message) {
            // console.log(message)
            Content.parseMessage(message);
        });
        this.setHeader();
        var sellerIntervalId = setInterval(function () {
            if (Content.optionList !== undefined && Content.optionList['seller_reliability']) {
                if (Content.isIframe()) {
                    clearInterval(sellerIntervalId);
                }
            }
        }, 1000);
        var i = 0;
        var hideIntevalId = setInterval(function () {
            $('#al\u0069r\u0069sk').hide();
            i++;
            if (i > 8) {
                clearInterval(hideIntevalId);
            }
        }, 1000);
        $(window).resize(function () {
            // Content.setPosition($('#notice-1'));
            // Content.setPosition($('#notice-2'));
            // Content.setPosition($('#notice-3-wrapper'));
        });

        $('.tooltip').click(function () {
            $(this).parent().find('.tooltip_body').toggle()
        });


    },
    matchTrackingNumberByOrder: function (a, b) {
        var c = "https://trade.aliexpress.com/order_detail.htm?orderId=" + a;
        $.ajax(c).done(function (c) {
            var d = null;
            $(c).find(".shipping-table #logistic-item1 .no").length && (d = $.trim($(c).find(".shipping-table #logistic-item1 .no").html().replace(/<(?:.|\n)*?>/gm, "")));

            b({
                orderId: a,
                tracking_number: d,
                tracking_number_check_date: Date.now()
            })
        })
    },
    add_link_in_comment: function (obj) {
        var addButton, our_div, text_div, span_text_1, span_text_2, span_text_3;
        obj.append(addButton = $('<div/>', {class: "js-button-add-link"}));
        addButton.append($('<div/>', {class: "alibonus-img"}))
            .append($('<div/>', {
                class: "localize",
                "data-localize": "our_recomendatios_20_per",
                text: "Дополни отзыв личной ссылкой на Alibonus и получай 20% от кешбэка пользователей, присоединившихся благодаря тебе."
            }))
            .append(our_div = $('<div/>'))
            .append(text_div = $('<div/>', {css: {display: 'none'}}));

        text_div.append(span_text_1 = $('<span/>', {class: "localize", "data-localize": "our_recomendatios_text_1"}));
        text_div.append(span_text_2 = $('<span/>', {class: "localize", "data-localize": "our_recomendatios_text_2"}));
        text_div.append(span_text_3 = $('<span/>', {class: "localize", "data-localize": "our_recomendatios_text_3"}));
        our_div.append($('<span/>', {
            class: "js-button-add-comment localize",
            "data-localize": "Share_button",
            text: "Поделиться",
            click: function () {
                Content.addOurTextRecomendation(obj.find('textarea'), span_text_1.text(), span_text_2.text(), span_text_3.text());
            }
        }))
    },
    addOurTextRecomendation: function (textareaObj, text_1, text_2, text_3) {
        textareaObj.val(textareaObj.val() + "\r\r" + text_1 + Content.round_money(Content.payoutsApproved) + ' ' + Content.tmpCurPriceCurrency + text_2 + Content.userId + text_3);
    },

    createMessageHtml: function (messageName) {
        messageData = msgObj[messageName];
        return $('<span/>', {class: "localize", "data-f": "654", "data-localize": messageData[0], text: messageData[1]})
    },
    round_money: function (num) {
        num = Number(num);
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1");
    },
    parseMessage: function (message) {
        if (message.request === 'getOptionList') {
            Content.optionList = message.options;
        }
        if (message.request === 'getEconomy') {
            Content.payoutsApproved = parseFloat(message.info.payoutsApproved) + parseFloat(message.info.approved);
            Content.userId = message.info.userId;
            Content.tmpCurPrice = 0;
            Content.tmpCurPriceCurrency = '$';
            if (Content.payoutsApproved < 5 && message.tmpCurPrice !== undefined) {
                if (message.tmpCurPriceCurrency !== undefined) {
                    Content.tmpCurPriceCurrency = message.tmpCurPriceCurrency;
                }
                Content.payoutsApproved = (parseFloat(message.tmpCurPrice) * (parseFloat(message.info.loyaltyPercent) / 100)).toFixed(2);
            }
        }
        if (message.request === 'setLanguage') {
            Content.translateAllText();
        }
        if (message.request === 'getLanguage') {
            Content.langData = message.langData;
            Content.language = message.language;
        }
        if (message.request === 'setStatus') {
            Content.loyaltyPercent = message.percent;
            Content.percent_ali_mob = message.percent_ali_mob;

            if (message.language !== Content.language) {
                chrome.runtime.sendMessage({request: 'getLanguage'}, function (message) {
                    Content.parseMessage(message);
                    Content.translateAllText();
                });
            }
            if (message.status === Content.currentStatusCachback) {
                return;
            }
            $('.notice-wrap_ext').hide();

            if (message.status === 2) {

                if (Content.currentStatusCachback === 1) {
                    this.extensionModalShow();
                } else {

                    // $('#extension-modal').show();
                    this.htmlObject.notice.notice_3.find('.btn-activate-3').hide();
                    this.htmlObject.notice.notice_3.find('.btn-enter-3').show().css("display", "inline-block");
                    this.htmlObject.notice.notice_3.fadeIn(100);
                    // Content.showRedTopLine();
                    this.extensionModalHide();
                }
            }
            if (message.status === 1) {
                this.extensionModalShow();
            }
            if (message.status === 3) {
                this.htmlObject.notice.notice_3.find('.btn-activate-3').show().css("display", "inline-block");
                this.htmlObject.notice.notice_3.find('.btn-enter-3').hide();
                this.htmlObject.notice.notice_2.fadeIn(100).delay(1000).fadeOut(100);
                Content.showRedTopLine();
            }
            if (message.status === 4) {
                Content.hideRedTopLine();
                this.htmlObject.notice.notice_1.find('#percent').text(Content.loyaltyPercent.toString());
                this.htmlObject.notice.notice_1.fadeIn(500).delay(1500).fadeOut(500);
            }
            Content.currentStatusCachback = message.status;

            // show cashback-alibonus
            $('div.cashback-alibonus').remove();
            $('div.cashback-alibonus-cart').remove();
            $('div.cashback-alibonus-cart-red').remove();
            $('div.cashback-alibonus-search').remove();
            Content.cashbackAlibonus();

        }
        if (message.request === 'setSellerInfo' && document.location.href === message.requestLink) {
            if (Content.isCertificatePage()) {
                message.b = Content.getCertificateRatingData()
            }
            Content.showSeller(message.b);
        }
    },
    showRedTopLine: function () {
        var height = this.htmlObject.notice.notice_3.innerHeight();
        this.htmlObject.notice.notice_3.show();
        $('.ui-tab-nav').css('margin-top', height);
        $('.waterfall-tab-list').css('margin-top', height);
        $('#j-detail-gallery-main').css('margin-top', height);
        $('#widgetiklgur').css('margin-top', height);
        $('.fix-inner').css('margin-top', height);
        $('.stickie-bg, .stickie-nav').css('margin-top', height);
        $('.prime-menu.titular, .prime-menu.pointing').css('margin-top', height);
    },
    hideRedTopLine: function () {
        this.htmlObject.notice.notice_3.hide();
        $('.ui-tab-nav').css('margin-top', 0);
        $('.waterfall-tab-list').css('margin-top', 0);
        $('#j-detail-gallery-main').css('margin-top', 0);
        $('#widgetiklgur').css('margin-top', 0);
        $('.fix-inner').css('margin-top', 0);
        $('.stickie-bg, .stickie-nav').css('margin-top', 0);
        $('.prime-menu.titular, .prime-menu.pointing').css('margin-top', 0);
    },
    setPosition: function (elem) {
        elem.css({
            position: 'absolute',
            left: ($(window).width() - elem.width() - 180) + 'px',
            top: (elem.height() / 4 - 16) + 'px'
        });
    },
    getID: function () {
        var sellerID;
        if (document.querySelector('.s-alitalk a')) {
            sellerID = document.querySelector('.s-alitalk a').getAttribute('data-id1')
        } else if (document.querySelector('#feedback iframe')) {
            sellerID = new RegExp(/ownerMemberId=(\d+)/).exec(document.querySelector('#feedback iframe').getAttribute('thesrc'));
            sellerID === null ? sellerID = '' : sellerID = sellerID[1];
        } else {
            sellerID = '';
        }
        return sellerID;
    },
    getCertificateRatingData: function () {
        return {
            age: 1.3,
            comm: "4.7",
            desc: "4.6",
            rating: 4004,
            seller: {
                details: {
                    communication: "4.7",
                    description: "4.6",
                    shipping_speed: "4.6"
                },
                error: 0,
                feedback: {
                    positive_3: "97.9"
                },
                main: {
                    month: 15.1,
                    rating: 100,
                    score: 4004
                }
            },
            ship: "4.6",
            threeMonthNegative: "2.08"
        };
    },

    checkMobilePhoneCategory: function (href, b) {

        var loadObj = $('<div>');
        loadObj.load(href + " " + ".ui-breadcrumb", function () {
            var loyaltyPercent = Content.loyaltyPercent;
            console.log(loadObj)
            if (loadObj.find('.ui-breadcrumb a:last-of-type').attr('href') !== undefined && loadObj.find('.ui-breadcrumb a:last-of-type').attr('href').indexOf('category/202000054/') > -1) {
                loyaltyPercent = Content.percent_ali_mob;
            }
            b(loyaltyPercent);
        });
    },
    isCertificatePage: function () {
        var result = $.inArray(window.location.pathname, [
            "/item/p/32688687986.html",
            "/item/p/32686734749.html",
            "/item/p/32686933433.html",
            "/item/p/32687816421.html",
            "/item/p/32687828274.html",
            "/item/US-10-AliExpress-Pocket/32688687986.html",
            "/item/US-20-AliExpress-Pocket/32686734749.html",
            "/item/US-50-AliExpress-Pocket/32686933433.html",
            "/item/US-100/32687816421.html",
            "/item/US-150-AliExpress-Pocket/32687828274.html"
        ]);
        return (result >= 0) ? true : false;
    },
    showSeller: function (b) {

        var objectHtml = [];
        if (0 === b.seller.error) {
            var d = b.seller.main, e = b.seller.details, f_msg = [], g_msg = [], h_msg = [];
            switch (!0) {
                case 12 <= d.month:
                    f_msg.push(this.createMessageHtml('year'));
                    break;
                case 9 <= d.month:
                    f_msg.push(this.createMessageHtml('nine_month'));
                    break;
                case 6 <= d.month:
                    f_msg.push(this.createMessageHtml('six_month'));
                    break;
                case 3 > d.month:
                    h_msg.push(this.createMessageHtml('three_month'));
                    break;
                default:
                    h_msg.push(this.createMessageHtml('less_six_month'))
            }
            switch (!0) {
                case 50 > d.score:
                    h_msg.push(this.createMessageHtml('rating_very_low'));
                    break;
                case 100 > d.score:
                    h_msg.push(this.createMessageHtml('rating_low'));
                    break;
                case 500 > d.score:
                    g_msg.push(this.createMessageHtml('rating_weak'));
                    break;
                case 1e3 > d.score:
                    g_msg.push(this.createMessageHtml('rating_good'));
                    break;
                default:
                    f_msg.push(this.createMessageHtml('rating_very_good'));
            }
            4.5 <= e.communication && f_msg.push(this.createMessageHtml('good_communication'));
            4.5 <= e.description ? f_msg.push(this.createMessageHtml('good_description')) : h_msg.push(this.createMessageHtml('dismatch_description'));
            4.5 <= e.shipping_speed ? f_msg.push(this.createMessageHtml('fast_shipping')) : h_msg.push(this.createMessageHtml('slow_shipping'));
            60 <= b.seller.feedback.positive_3 ? f_msg.push(this.createMessageHtml('many_deals')) : h_msg.push(this.createMessageHtml('few_deals'));

            this.sRating = parseInt(d.rating);

            var div1 = $('<div/>')
                .append(ExtensionHtmlObject.getRatingCircle(this.sRating))
                .append($('<div/>', {class: "col3"}));
            objectHtml.push(div1);

            var divCol2 = $('<div/>', {class: "col2"});
            div1.append(divCol2);


            var ulList = $('<ul/>');
            divCol2.append(ulList);

            f_msg.forEach(function (a) {
                ulList.append($("<li/>").append(a));
            });
            g_msg.forEach(function (a) {
                ulList.append($("<li/>", {class: "i"}).append(a));
            });
            h_msg.forEach(function (a) {
                ulList.append($("<li/>", {class: "b"}).append(a));
            });
            objectHtml.push($('<hr/>', {
                "align": "center",
                "color": "#eaeaea",
                "noshade": true,
                width: "90%"
            }));

            // add our recommendations
            objectHtml.push(this.getOurRecommendations());

            setTimeout(function () {
                if ($('.trust-block .itog').hasClass('bad')) {
                    $('.trust-block .header').css('background', '#fd1419');
                }
            }, 500);
        } else if (404 === b.seller.error) {

            objectHtml.push($('<div/>')
                .append(ExtensionHtmlObject.getRatingCircle(this.sRating))
                .append($('<div/>', {class: "col3"})));
            objectHtml.push($('<hr/>', {
                "align": "center",
                "color": "#eaeaea",
                "noshade": true,
                width: "90%"
            }));

            objectHtml.push($('<div/>', {class: "itog"})
                .append($('<span/>', {class: "info"}))
                .append(this.createMessageHtml('no_store'))
                .append($('<a/>', {href: "#", class: "localize", "data-localize": "learn_more", text: "Подробнее"})));

        }
        $('.trust-block .body').empty().append(objectHtml);
        $('.trust-block .body .itog a').on('click', function (event) {
            event.preventDefault();
            window.open('http://help-ru.alibonus.com/article/52-nadezhnost-prodavca', '_blank');
        });

        // $('.trust-block .tooltip-link').on('click', function () {
        //     $(".trust-block .tooltip-link .tooltip_body").toggle();
        // });
        // translate all text
        Content.translateAllText();
    },

    getOurRecommendations: function () {
        if (77 <= this.sRating) {
            return this.ourRecommendationsTemplate(this.createMessageHtml('reliable_seller'));
        } else if (62 <= this.sRating) {
            return this.ourRecommendationsTemplate(this.createMessageHtml('check_seller'));
        } else if (48 <= this.sRating) {
            return this.ourRecommendationsTemplate(this.createMessageHtml('average_seller'), 'bad');
        } else if (33 <= this.sRating) {
            return this.ourRecommendationsTemplate(this.createMessageHtml('nonreliable_seller'), 'bad');
        } else {
            return this.ourRecommendationsTemplate(this.createMessageHtml('fraud_seller'), 'bad');
        }
    },
    ourRecommendationsTemplate: function (text, badLabel) {
        badLabel = badLabel || '';
        badLabel = (badLabel != '') ? ' ' + badLabel : '';

        return $('<div/>', {class: "itog" + badLabel})
            .append($('<span/>', {class: "info"}))
            .append($('<b/>', {class: "localize", "data-localize": "our_recomendatios", text: "Наши рекомендации:"}))
            .append("&nbsp;")
            .append(text)
            .append("&nbsp;")
            .append($('<a/>', {href: "#", class: "localize", "data-localize": "learn_more", text: "Подробнее"}))
    },


    addPopups: function () {

        var body = $('body');
        // small pop-ups
        body.prepend(this.getSmallPopUp());
        // big pop-up
        body.append(this.getBigPopUp());

        $('.close_popup_ext').click(function () {
            $('.notice-wrap_ext').fadeOut(300);
        });
        $('#ali-btn-green').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(function () {
                chrome.runtime.sendMessage({request: 'redirect'});
            }, 500);
        });
        $('.close-btn').click(function (e) {
            e.preventDefault();
            Content.extensionModalHide();
        });
        $('.alib-btn-rega').click(function (e) {
            e.preventDefault();
            Content.extensionModalHide();
            window.open(homeUrl + 'register', '_blank');
        });

        $('#extension-modal, .modal-dialog, .modal-content').click(function (e) {
            e.preventDefault();
        });
        // translate all text
        Content.translateAllText();
    },
    getSmallPopUp: function () {
        var notice = [];

        this.htmlObject.notice = {};

        this.htmlObject.notice.notice_1 = ExtensionHtmlObject.notice.cashback_activated();

        this.htmlObject.notice.notice_2 = ExtensionHtmlObject.notice.you_dont_get_cashback();

        this.htmlObject.notice.notice_3 = ExtensionHtmlObject.notice.cashback_not_activated();

        notice.push(this.htmlObject.notice.notice_1);
        notice.push(this.htmlObject.notice.notice_2);
        notice.push(this.htmlObject.notice.notice_3);
        return notice;
    },
    clickBtnEnter: function (e) {
        e.preventDefault();

        window.open(homeUrl, '_blank');
    },
    extensionModalHide: function () {
        if (this.htmlObject.extensionModal !== undefined) {
            this.htmlObject.extensionModal.fadeOut('fast')
        }
    },
    extensionModalShow: function () {
        if (this.htmlObject.extensionModal !== undefined && !this.htmlObject.extensionModal.is(':visible')) {
            this.htmlObject.extensionModal.fadeIn('fast')
        }
    },

    getBigPopUp: function () {
        this.htmlObject.extensionModal = ExtensionHtmlObject.getLoginModal();
        return this.htmlObject.extensionModal;
    },


    setHeader: function () {
        $('#header-categories').after(this.htmlObject.fakeeel = $('<div/>', {
            id: "fakeeel",
            css: {
                "display": "none"
            }
        }).append($('<div/>', {id: "buy-now-form"})));
    },

    isIframe: function () {
        this.htmlObject.fakeeel.remove();
        var feedbackIframe = $('#feedback iframe');
        if (!feedbackIframe[0]) {
            return false;
        }
        this.htmlObject.seller_reliability = {};
        var a = feedbackIframe.attr('thesrc').match(/(\d+)/g)[1];

        this.htmlObject.seller_reliability.object = ExtensionHtmlObject.sellerReliability();

        $('.buy-now-form').after(this.htmlObject.seller_reliability.object);
        $('#j-product-sku-wrap .trust-block').css('display', 'none');

        if (!this.isShowSeller) {
            this.isShowSeller = true;
            var sellerID = Content.getID();
            chrome.runtime.sendMessage({
                request: 'sendSellerInfo',
                link: 'https://m.aliexpress.com/store/sellerInfo.htm?sellerAdminSeq=' + sellerID,
                requestLink: document.location.href
            });
        }
        return true;
    },
    getRusFlag: function () {
        // if certificates from Russia
        var Russia_li = $('#j-product-info-sku span:contains("Россия"), #j-product-info-sku span:contains("Russia")');
        var count_li = Russia_li.closest('ul').find('li').length;
        if (count_li == 1) {
            return true;
        }
        // if selected delivery from Russia
        var cols = $('#j-product-info-sku').find('.p-item-main').find('span:contains("Россия"), span:contains("Russia")');
        if (cols.length > 0 && cols.closest('li').hasClass('active')) {
            return true;
        }
        return false;
    },
    cashbackAlibonus: function () {
        var htmlObject = [], self = this;
        if ($('.ui-breadcrumb a:last-of-type').length) Content.loyaltyPercent = ($('.ui-breadcrumb a:last-of-type').attr('href').indexOf('category/202001195/') > -1) ? Content.percent_ali_mob : Content.loyaltyPercent;
        var shopCategory = this.getShopCategory();

        if (telephoneCategoriesList.indexOf(shopCategory) > -1) {
            // this is telephone category, cashback is less on 0.697
            this.loyaltyPercent = Math.floor(this.loyaltyPercent * 0.697 * 100) / 100;
        }

        // shopping cart
        if (location.href.indexOf("shoppingcart.aliexpress.com") > -1) {
            var totalHtmlObject = [], calcGroup = true;
            $.each($('.item-group-wrapper'), function (index, value) {

                // if mall
                var $product_info = $(this).find('.product-info-detail');
                var cols = $($product_info).find('.product-attribute span:contains("Россия"), .product-attribute span:contains("Russia")');
                if (cols.length > 0) {
                    htmlObject.push(ExtensionHtmlObject.getCardObject("logo-alibonus-cart-gray", "cashback_cant_be_refunded", "Кешбэк не может быть зачислен"));

                    if ($(this).find('.cashback-alibonus-cart').length == 0) {
                        $(this).find('div.product-price-info2:last').after(htmlObject);
                        htmlObject = [];
                    }
                }
                // cashback is active
                else if (Content.currentStatusCachback >= 4) {
                    var curr_price = self.getFloatFromString($(this).find('.product-price-total').find('b').html());
                    cashback_sum = {
                        sum: 0.00,
                        currency: curr_price[1]
                    };


                    // перебор всех товаров в группе
                    var itemProductLength = $(this).find('.item-product').length;
                    $(this).find('tbody .item-product').each(function () {
                        var calculateItem = $(this);
                        // помечаем товар, что он в процессе получения информации
                        calculateItem.addClass('calculateItem');
                        // шлем подзапрос, чтобы узнать относится ли товар к категории с пониженным кешбеком
                        self.checkMobilePhoneCategory($(this).find('.product-link a').attr('href'), function (percent) {

                            // получаем стоимость товара
                            var d = calculateItem.find('.product-price .value').html();

                            var itemPrice = self.getFloatFromString(d);
                            // цена за товар
                            var itemPriceSum = itemPrice[0];
                            // если процент за товар минимальный - отнимаем
                            calculateItem.data({sum: (itemPriceSum / 100 * percent)});

                            // снимаем пометку о процессе получения информации
                            calculateItem.removeClass('calculateItem');

                        });
                    });

                    function add_cashback_info(cashback_sum, obj) {

                        htmlObject = htmlObject || [];

                        if (obj.find('.item-product.calculateItem').length > 0) {
                            setTimeout(function () {
                                add_cashback_info(cashback_sum, obj)
                            }, 100);
                            return;
                        }
                        obj.find('tbody .item-product').each(function () {
                            var data = $(this).data();
                            cashback_sum.sum += data.sum
                        });

                        var value1 = cashback_sum;
                        //delivery value
                        var delivery_value = obj.find('.product-price-info1').find('.value:last').html();
                        var value2 = Content.getPriceAndCurrency(delivery_value, true);

                        value.sum = Math.floor((value1.sum - value2.sum) * 100) / 100;
                        value.currency = value1.currency;

                        var object = ExtensionHtmlObject.getCardObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");
                        object.append($('<span/>', {
                            class: "sum",
                            text: value.sum + ' ' + value.currency
                        }).data({sum: value.sum}))
                            .append($('<span/>', {
                                class: "info localize",
                                "data-localize": "piece",
                                text: " / шт"
                            }));


                        if (obj.find('.cashback-alibonus-cart').length == 0) {
                            obj.find('div.product-price-info2:last').after(object);
                        }
                        return;
                    }

                    add_cashback_info(cashback_sum, $(this));

                    // value1 = Content.getPriceAndCurrency(curr_price, true);
                    // //delivery value
                    // var delivery_value = $(this).find('.product-price-info1').find('.value:last').html();
                    // value2 = Content.getPriceAndCurrency(delivery_value, true);
                    //
                    // value.sum = Math.floor((value1.sum - value2.sum) * 100) / 100;
                    // value.currency = value1.currency;
                    //
                    // var object = ExtensionHtmlObject.getCardObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");
                    // object.append($('<span/>', {class: "sum", text: value.sum + ' ' + value.currency}).data({sum:value.sum}))
                    //     .append($('<span/>', {
                    //         class: "info localize",
                    //         "data-localize": "piece",
                    //         text: " / шт"
                    //     }));
                    //
                    // htmlObject.push(object);


                    // if ($(this).find('.cashback-alibonus-cart').length == 0) {
                    //     $(this).find('div.product-price-info2:last').after(htmlObject);
                    //     htmlObject = [];
                    // }
                }
                // cashback is not active
                else if (Content.currentStatusCachback < 4) {
                    htmlObject.push(ExtensionHtmlObject.getCardObject("logo-alibonus-cart-red", "cashback_is_not_active", "Кешбэк не активирован"));
                    if ($(this).find('.cashback-alibonus-cart').length == 0) {
                        $(this).find('div.product-price-info2:last').after(htmlObject);
                        htmlObject = [];
                    }
                }
            });
            // total sum

            function calcTotalSum() {

                if ($('.item-product.calculateItem').length > 0) {
                    setTimeout(function () {
                        calcTotalSum(cashback_sum, obj)
                    }, 100);
                    return;
                }

                var data, total_sum = 0.00;
                $('.sum').each(function () {
                    data = $(this).data();
                    total_sum += data.sum;
                });

                var obj;
                $.each($('.bottom-info-right-wrapper'), function (index, value) {
                    // cashback is active
                    if (Content.currentStatusCachback >= 4) {
                        var curr_price = $(this).find('.total-price').find('b').html();
                        value1 = Content.getPriceAndCurrency(curr_price);
                        //seller discounts
                        var delivery_value = $(this).find('.default-price:eq(1)').html();
                        value2 = Content.getPriceAndCurrency(delivery_value);

                        value.sum = total_sum;//Math.floor((value1.sum - value2.sum) * 100) / 100;
                        value.currency = value1.currency;

                        totalHtmlObject.push($("<li/>").append(obj = ExtensionHtmlObject.getCardObject("logo-alibonus-cart", "total_cashback", "Общий кешбэк:")));
                        obj.append($('<span/>', {class: "sum", text: value.sum.toFixed(2) + ' ' + value.currency}))

                    }
                    else if (Content.currentStatusCachback < 4) { // cashback is not active
                        totalHtmlObject.push($("<li/>").append(obj = ExtensionHtmlObject.getCardObject("logo-alibonus-cart-red", "you_may_not_get_cashback", "Вы можете не получить кешбэк!")))
                    }
                    if ($(this).find('.cashback-alibonus-cart').length == 0) {
                        $(this).find('.total-price-wrapper').after(totalHtmlObject);
                        totalHtmlObject = [];
                    }
                    else {

                    }
                })
            }

            calcTotalSum();
        }
        //  search list hot goods
        else if (location.href.indexOf("group.aliexpress.com") > -1) {
            $.each($('.group-pro-item'), function (index, value) {
                if ($('.product-list-tab').find('.current').html().indexOf("Mall") > -1 || $('.product-list-tab').find('.current').html().indexOf("Молл") > -1) {

                    htmlObject.push(ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-gray", "cashback_cant_be_refunded", "Кешбэк не может быть зачислен"));

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.price-main').after(htmlObject);
                        htmlObject = [];
                    }

                }
                // cashback is active
                else if (Content.currentStatusCachback >= 4) {
                    var curr_price = $(this).find('.price-main').find('.pro-price').html();
                    curr_price = curr_price.substr(0, curr_price.indexOf('<b>'));

                    value = Content.getPriceAndCurrency(curr_price);

                    var object = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");
                    object.append($('<span/>', {class: "sum", text: value.sum + ' ' + value.currency}));
                    htmlObject.push(object);

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.price-main').after(htmlObject);
                        htmlObject = [];
                    }
                }
                // cashback is not active
                else if (Content.currentStatusCachback < 4) {
                    htmlObject.push(ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-red", "cashback_is_not_active", "Кешбэк не активирован"));

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.price-main').after(htmlObject);
                        htmlObject = [];
                    }
                }
            });
        }
        // search list
        else if ($('#hs-list-items').length > 0 || $('#hs-below-list-items').length > 0 || $('#list-items').length > 0) {
            var category_id = 0;
            $.each($('#hs-list-items .list-item, #hs-below-list-items .list-item, #list-items .list-item'), function (index, value) {
                category_id = $(this).attr('pub-catid');
                Content.loyaltyPercent = (category_id == 5090301) ? Content.percent_ali_mob : Content.loyaltyPercent;
                $(this).attr('percent', Content.loyaltyPercent);
                // if mall
                if ($(this).find('a').is('.sp-competitiveproducts') || $(this).find('.from-foreign-country').find('span').html() == 'Россия' || $(this).find('.from-foreign-country').find('span').html() == 'Russian Federation') {

                    htmlObject.push(ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-gray", "cashback_cant_be_refunded", "Кешбэк не может быть зачислен"));

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('span.price').after(htmlObject);
                        htmlObject = [];
                    }
                }
                // cashback is active
                else if (Content.currentStatusCachback >= 4) {
                    var curr_price = $(this).find('.price').find('.value').html();
                    value = Content.getPriceAndCurrency(curr_price);

                    var object = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");
                    object.append($('<span/>', {
                        class: "sum",
                        text: value.sum + ' ' + value.currency
                    }));
                    htmlObject.push(object);

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('span.price').after(htmlObject);
                        htmlObject = [];
                    }
                }
                // cashback is not active
                else if (Content.currentStatusCachback < 4) {
                    htmlObject.push(ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-red", "cashback_is_not_active", "Кешбэк не активирован"));
                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('span.price').after(htmlObject);
                        htmlObject = [];
                    }
                }
            })
        }
        // goods page
        // discount
        if ($('div').is('.p-current-price')) {
            if ($('div.p-current-price span.p-price').has('span').length > 0) {
                var curr_price = $('div.p-current-price span.p-price span').html();
            }
            else {
                var curr_price = $('div.p-current-price span.p-price').html();
            }
        }
        // not discount
        else {
            if ($('span.p-price').has('span').length > 0) {
                var curr_price = $('span.p-price span').first().html();
            }
            else {
                var curr_price = $('span.p-price').html();
            }
        }
        // if certificates from Russia
        var ru_flag = Content.getRusFlag();
        var values = Content.getPriceAndCurrency(curr_price);
        regexp = /\d+[,\.]*/g;
        if (regexp.test(values.sum) && values.sum.toString().length < 15) {

            // create cahsback block object
            Content.cashbackAlibonusBlock = $('<div/>', {class: "cashback-alibonus"})
                .append(Content.headerAlibonusDiv = $('<div/>', {class: "header-alibonus"})
                );
            if (Content.optionList['amount_cashback_in_card']) {
                htmlObject.push(Content.cashbackAlibonusBlock)
            }

            // mall OR if the certificate page - no cashback
            if ($('a').is('.mall-logo') || ru_flag || Content.isCertificatePage()) {
                Content.headerAlibonusDiv.addClass("gray").append(ExtensionHtmlObject.cashbackHeadObj.cashback_cant_be_refunded_for_this_purchase());
                Content.cashbackAlibonusBlock.append(Content.bodyAlibonusDiv = ExtensionHtmlObject.cashbackBodyObj.you_wont_get_cashback_for_this_purchase('http://help-ru.alibonus.com/article/53-razmer-cashbacka'));
            }
            // cashback is active
            else if (Content.currentStatusCachback >= 4) {
                Content.headerAlibonusDiv.append(ExtensionHtmlObject.cashbackHeadObj.your_cashback_is_active(Content.loyaltyPercent));
                Content.cashbackAlibonusBlock.append(Content.bodyAlibonusDiv = ExtensionHtmlObject.cashbackBodyObj.your_cashback(values.sum, values.currency));
            }
            // cashback is not active
            else if (Content.currentStatusCachback < 4) {
                Content.headerAlibonusDiv.addClass("red").append(ExtensionHtmlObject.cashbackHeadObj.cashback_is_not_active());
                Content.cashbackAlibonusBlock.append(Content.bodyAlibonusDiv = ExtensionHtmlObject.cashbackBodyObj.you_wont_get_cashback_for_this_purchase('http://help-ru.alibonus.com/article/49-razmer-cashbacka'));
            }
            ;

            $('div.p-price').after(htmlObject);
            $('div.product-price').after(htmlObject);
        }

        // other pages
        if ($('.relatied-products-container').length > 0) {
            $.each($('.relatied-products-container li'), function (index, value) {
                htmlObject = [];
                // cashback is active
                if (Content.currentStatusCachback >= 4) {
                    var curr_price = $(this).find('.p4p-price-list').html();

                    curr_price = curr_price.substr(0, curr_price.indexOf('<span'));
                    value = Content.getPriceAndCurrency(curr_price);

                    var object = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");
                    object.append($('<span/>', {
                        class: "sum",
                        css: {"float": "left"},
                        text: value.sum + ' ' + value.currency
                    }));
                    htmlObject.push(object);

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('p.p4p-more-info').before(htmlObject);
                    }
                }
                // cashback is not active
                else if (Content.currentStatusCachback < 4) {
                    htmlObject = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-red", "cashback_is_not_active", "Кешбэк не активирован");

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('p.p4p-more-info').before(htmlObject);
                    }
                }
            })
        }
        // aliexpress recomended
        if ($('.related-recommend').length > 0) {
            htmlObject = [];
            // if mall
            if (location.href.indexOf("mall.aliexpress.com") > -1 || $('.waterfall-tab-list a.selected').length && $('.waterfall-tab-list a.selected').html().indexOf('Mall') > -1 || $('.waterfall-tab-list a.selected').length && $('.waterfall-tab-list a.selected').html().indexOf('Молл') > -1) {
                $.each($('ul.product-list li'), function () {
                    htmlObject = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-gray", "cashback_cant_be_refunded", "Кешбэк не может быть зачислен");
                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.pro-info').after(htmlObject);
                    }
                })
            }
            else if (Content.currentStatusCachback >= 4) {
                $.each($('ul.product-list li'), function (index, value) {
                    htmlObject = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart", "your_cashback", "Вам вернётся:");

                    var curr_price = $(this).find('.g-price').html();
                    value = Content.getPriceAndCurrency(curr_price);
                    htmlObject.append($('<span/>', {class: "sum", text: value.sum + ' ' + value.currency}));

                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.pro-info').after(htmlObject);
                    }
                })
            }
            else if (Content.currentStatusCachback < 4) {

                $.each($('ul.product-list li'), function () {
                    htmlObject = ExtensionHtmlObject.getSearchObject("logo-alibonus-cart-red", "cashback_is_not_active", "Кешбэк не активирован");
                    if ($(this).find('.cashback-alibonus-search').length == 0 && Content.optionList.amount_cashback_in_search) {
                        $(this).find('div.pro-info').after(htmlObject);
                    }
                })
            }
        }

        $('#lnk-next, #lnk-prev, .waterfall-tab-list a, .view-more a').on('click', function () {
            setTimeout(function () {
                Content.cashbackAlibonus()
            }, 1000);
        })
        // change parameters
        $('#j-product-info-sku').click(function (e) {
            var curr_price, currency, values, ru_flag, obj;

            if ($('span').is('#j-sku-discount-price')) {
                curr_price = $('#j-sku-discount-price').html();
                currency = $('span.p-symbol').html();
                // delivery from Russia
            } else {
                curr_price = $('#j-sku-price').html();
                currency = $('span.p-symbol').html();
            }

            values = Content.getPriceAndCurrency(curr_price);

            // if certificates from Russia
            ru_flag = Content.getRusFlag();

            Content.headerAlibonusDiv.removeClass("gray").removeClass("red");
            if (ru_flag) {
                Content.headerAlibonusDiv.addClass("gray").empty().append(ExtensionHtmlObject.cashbackHeadObj.cashback_cant_be_refunded_for_this_purchase());
                obj = ExtensionHtmlObject.cashbackBodyObj.you_wont_get_cashback_for_this_purchase('http://help-ru.alibonus.com/article/53-razmer-cashbacka');
            }
            // if cashback is not active
            else if (Content.currentStatusCachback < 4) {
                Content.headerAlibonusDiv.addClass("red").empty().append(ExtensionHtmlObject.cashbackHeadObj.cashback_is_not_active());
                obj = ExtensionHtmlObject.cashbackBodyObj.you_wont_get_cashback_for_this_purchase('http://help-ru.alibonus.com/article/49-razmer-cashbacka');
            }
            // if cashback is active
            else {
                Content.headerAlibonusDiv.empty().append(ExtensionHtmlObject.cashbackHeadObj.your_cashback_is_active(Content.loyaltyPercent));
                obj = ExtensionHtmlObject.cashbackBodyObj.your_cashback(values.sum, values.currency);
            }

            Content.bodyAlibonusDiv.replaceWith(obj);
            Content.bodyAlibonusDiv = obj;

            // translate all text
            Content.translateAllText();

            if (values.currency.length > 10)
                Content.cashbackAlibonusBlock.find(' .sum').text(values.sum + currency);
            else
                Content.cashbackAlibonusBlock.find('.sum').text(values.sum + values.currency);
        });

        // if(Content.cashbackAlibonusBlock !== undefined){
        //     // Content.cashbackAlibonusBlock.find('.tooltip-link').unbind('click').on('click', function () {
        //     //     Content.cashbackAlibonusBlock.find(".tooltip-link .tooltip_body").toggle();
        //     // });
        //     // Content.cashbackAlibonusBlock.find('.body-alibonus .tooltip').unbind('click').on('click', function () {
        //     //     Content.cashbackAlibonusBlock.find(".body-alibonus .tooltip_body").toggle();
        //     // });
        // }
        Content.translateAllText();
    },
    translateAllText: function () {
        if (Content.langData === undefined) {
            setTimeout(this.translateAllText, 100);
            return;
        }
        // translate all text
        $('.localize').each(function () {
            // console.warn(Content.langData,$(this).attr('data-localize'))
            if (Content.langData[$(this).attr('data-localize')].message !== undefined) {
                $(this).text(Content.langData[$(this).attr('data-localize')].message);
            }

        });
    },
    getMessage: function (localizeName) {
        if (this.langData[localizeName] !== undefined) {
            return this.langData[localizeName].message;
        }
        return null;
        // return chrome.i18n.getMessage(localizeName)
    },
    btnActivateClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
        setTimeout(function () {
            chrome.runtime.sendMessage({request: 'redirect'});
        }, 500);
    },
    getFloatFromString: function (curr_price) {
        curr_price = $.trim(curr_price.replace('&nbsp;', ''))
        // get currency symbols, example  р у б
        var curr_regexp = /[^\d,*.*&nbsp;*\s-]/g;
        // get sum from the string with sum and currency
        var sum_regexp = /[\d+,*.*\s]/g;
        var currency = (curr_price.match(curr_regexp) != null) ? curr_price.match(curr_regexp).join('') : curr_price.match(curr_regexp);
        var sum = (curr_price.match(sum_regexp) != null) ? curr_price.match(sum_regexp).join('') : curr_price.match(sum_regexp);
        // trim and remove dots in the end of the sum
        sum = $.trim(sum.replace(/\.+$/g, ''));
        // if interval of prices - get low price
        if (sum.indexOf('  ') > 0) {
            sum = sum.substr(0, sum.indexOf('  '));
        }

        if (currency == null) {
            currency = $('span.p-symbol').html();
        }
        else {
            currency = currency.replace(/&nbsp;/g, '');
        }

        // if , replace to .
        var indComma = sum.lastIndexOf(',');
        var countComa = sum.split(',').length - 1;
        var indDot = sum.lastIndexOf('.');
        var countDot = sum.split('.').length - 1;

        if (indComma > indDot) { //123.123,123
            if (countDot > 0) {
                sum = sum.replace(/\./g, '');
                sum = sum.replace(/,/g, '.');
            }
            else if (countComa == 1) { //123123,123
                sum = sum.replace(/,/g, '.');
            }
            else { //123,123,123
                sum = sum.replace(/,/g, '');
            }
        }
        else { //213,123.123
            if (countComa > 0) {
                sum = sum.replace(/,/g, '');
            }
            else if (countDot > 1) { //123.123.123
                sum = sum.replace(/\./g, '');
            }
        }

        return [sum, currency];
    },
    getPriceAndCurrency: function (curr_price, notRound) {
        notRound = notRound || false;
        if (curr_price !== undefined && typeof(curr_price) !== undefined) {
            var getFloatFromString = this.getFloatFromString(curr_price);
            var sum = getFloatFromString[0];
            var currency = getFloatFromString[1];

            if (notRound) {
                sum = (parseFloat(sum) * parseFloat(Content.loyaltyPercent)) / 100;
            } else {
                sum = Math.floor(parseFloat(sum) * parseFloat(Content.loyaltyPercent)) / 100;
            }

            return {
                sum: sum,
                currency: currency
            };
        }
        return {
            sum: null,
            currency: null
        };
    },
    getShopCategory: function () {
        var url = window.location.href;
        var catId = 0;
        // category pages
        if (url.indexOf('/category/') > 0) {
            var catLabel = url.match("\/category\/(.*)\/");
            catId = catLabel[1];
        }
        // good page
        else if (url.indexOf('/item/') > 0) {
            // check by category breadcrumb
            var $breadcrumb = $('.ui-breadcrumb');
            if ($breadcrumb.length > 0) {
                var catElement = $breadcrumb.find('h2').find('a').attr('href');
                var catLabel = catElement.match("\/category\/(.*)\/");
                catId = catLabel[1];
            }
        }
        return catId;
    }
};
$(function () {
    Content.init();
});