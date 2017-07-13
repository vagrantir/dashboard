import './utils/types'

function renderItem (n, callbackText, type) {
    if (isArray(n)) {
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

function renderTemplate (templateText, templateData) {
    function templateFunc(inf, json) {
        var parts = /(.*)?\{teasers\}(.*)?\{\/teasers\}(.*)?/.exec(templateText);
        if (!parts) {
            return;
        }
        var template = typeof (parts[1]) != 'undefined' ? parts[1] : ''
        for (var i = 0; i < json.length; i++) {
            template += inf.renderItem(json[i], parts[2], 'goods')
        }
        template += typeof (parts[3]) != 'undefined' ? parts[3] : ''
        return template
    };
}

export renderTemplate