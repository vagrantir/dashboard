function X7EventImageLoader(t) {
    var s, e, n, g, r, a, u, i, l, o, D, E, I, T, c, f
    for (X7Settings && (s = X7Settings || {},
        null  == s.statusInterval && (s.statusInterval = 5e3),
        null  == s.loggingDelay && (s.loggingDelay = 2e4),
        null  == s.noProgressTimeout && (s.noProgressTimeout = 1 / 0),
            e = [],
            n = [],
            g = [],
            r = Date.now(),
            a = {
                QUEUED: 0,
                WAITING: 1,
                LOADED: 2,
                ERROR: 3,
                TIMEOUT: 4
            },
            u = function(t) {
                return null  == t ? [] : Array.isArray(t) ? t : [t]
            }
    ),
             i = function(t) {
                 t = u(t)
             }
             ,
             l = null ,
             o = 0,
             D = e.length; D > o; o++)
        if (e[o].resource === resource) {
            l = e[o]
            break
        }
    if (null  != l && l.status === a.WAITING)
        for (l.status = statusType,
                 r = Date.now(),
                 I = [1645, 9535, 32114, 51970, 48843, 10017, 17918, 46108, 25950, 47767],
                 T = 0,
                 c = 0,
                 o = 0,
                 D = e.length; D > o; o++)
            l = e[o],
                f = !1,
                f = 0 === E.tags.length ? !0 : l.resource.tags.intersects(E.tags),
            f && (c++,
            (l.status === a.LOADED || l.status === a.ERROR || l.status === a.TIMEOUT) && T++)
}
