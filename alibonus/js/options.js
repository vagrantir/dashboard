var Options = {

    init: function (Api) {
        var UILang, name = "def_checkbox";
        Settings.load();
        Options.form = $('#options-main form');

        $('.close-btn').click(function () {
            Options.close();
        });

        Options.form.find('input[type=checkbox]').each(function () {
            $(this).prop('checked', storageGet($(this).attr('name'), true))
                .change(function () {
                    name = $(this).attr('name');
                    storageSet(name, $(this).prop('checked'));
                    if (name == 'cashback_notify') {
                        Api.setPayoutNotificationsStatus();
                    }
                });
        });

        Options.form.find('select').each(function () {
            $(this).change(function(){
                name = $(this).attr('name');
                storageSet(name, $(this).val());
                if($(this).attr('id') == 'language-change'){

                    chrome.runtime.sendMessage({request: 'setLanguage'});
                    changeLang.init(function () {
                        Options.translateAllText();
                    });
                }
            });

            UILang = storageGet($(this).attr('name'), chrome.i18n.getUILanguage());
            $(this).val(UILang);
        });

        chrome.runtime.sendMessage({request: 'getLanguage'}, function (message) {
            Options.form.find('select').val(message.language);
        });




        // $(document).mouseup(function (e) {
        //     var container = $(".options-modal-content");
        //     if (container.has(e.target).length === 0 && e.button == 0) {
        //         Options.close();
        //     }
        // });
    },
    close: function () {
        window.close()
    },
    translateAllText: function (object) {
        // changeLang.init();
        object = object || $('body');
        object.find('.localize').each(function () {
            $(this).empty().text(changeLang.getMessage($(this).attr('data-localize')));
        });
    },

};


