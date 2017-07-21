function _log(){ console.log.apply(console, arguments); };
function _logGroup(){ console.group.apply(console, arguments); };
function _logGroupEnd() { console.groupEnd(); };

export const PRODUCTION = false;
export const VERBOSE_DEBUG = true

export const logging = function() {
    window['log'] = _log
    window['logGroup'] = _logGroup
    window['logGroupEnd'] = _logGroupEnd
};

logging()

export const deepAssign = (baseObject, extendedParams) => {
    if (baseObject && extendedParams){
        for (let i in baseObject) {
            if (typeof(baseObject[i]) == 'object' && extendedParams[i]) {
                if (baseObject[i] instanceof Array){
                    for (let j in extendedParams[i]){
                        baseObject[i].push(deepAssign({}, extendedParams[i][j]))
                    }
                } else {
                    baseObject[i] = deepAssign(baseObject[i], extendedParams[i])
                }
                delete(extendedParams[i])
            }
        }
    }
    let r = Object.assign({}, baseObject, extendedParams)
    return r
}

export const leadingZeroNumberChar = function (n) {
    return n < 10 ? '0' + n : n;
}
