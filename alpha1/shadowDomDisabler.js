try{
    var sh = document.querySelectorAll('html::shadow style');
    Array.prototype.forEach.call(sh, (styleSheet) => {
        Array.prototype.forEach.call(styleSheet.sheet.rules,
            (v) => {
                var matched = v.selectorText.match('recreativ.ru')
                if (matched) {
                    // console.log(
                    //     matched, v
                    // )
                    v.parentStyleSheet.disabled = true
                }
            }
        )
    })
} catch(e) {}
