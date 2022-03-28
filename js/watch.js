(function () {
    try {
        !function () {
            function t(n, e) {
                var r = Fo(e);
                return r = Do((function (e, r) {
                    var a = r[0], o = r[1], i = Xr(o);
                    return aa(o) || i ? (o = i ? t(n, o) : function (t, n) {
                        return new du((function (e, r) {
                            var a = (new t.TextEncoder).encode(n);
                            t.crypto.subtle.digest("SHA-256", a).then((function (n) {
                                n = new t.Blob([n], {type: "application/octet-binary"});
                                var a = new t.FileReader;
                                a.onload = function (t) {
                                    var n = ((t = Lr(t, "target.result")) || "").indexOf(",");
                                    -1 !== n ? e(t.substring(n + 1)) : r(Eu("fpm.i"))
                                }, a.readAsDataURL(n)
                            }), r)
                        }))
                    }(n, o), e.push(o.then((function (t) {
                        return [a, t]
                    }))), e) : e
                }), [], r), du.all(r)
            }

            function n(t, n, e) {
                e = (t = $r(e))[1], "track" === t[0] && n({version: "0", Fa: e})
            }

            function e(t, n, e) {
                if (e) {
                    var r = e.version;
                    (e = Lr(Bv, r + "." + e.Fa)) && (n && Ko(e, Gv) || t("ym-" + e + "-" + r))
                }
            }

            function r(t, n) {
                if (!n) return !1;
                var e = or(t);
                return new RegExp(n).test("" + e.pathname + e.hash + e.search)
            }

            function a(t, n, e, r, a) {
                e = f(t, t.document.body, e), r = f(t, t.document.body, r), Ko(a.target, [e, r]) && c(t, n)
            }

            function o(t, n, e, r) {
                (e = wv(t, r, e)) && c(t, n, e)
            }

            function i(t, n) {
                var e = u(t, n);
                return mv(t, e)
            }

            function u(t, n) {
                var e = f(t, t.document.body, n);
                return e ? function (t, n) {
                    if (!n) return "";
                    var e = [], r = Lr(t, "document");
                    return z(t, n, (function (t) {
                        t.nodeType === r.TEXT_NODE && t.textContent ? e.push(t.textContent.trim()) : t instanceof HTMLImageElement && t.alt && e.push(t.alt.trim())
                    })), 0 === e.length ? "" : e.join(" ")
                }(t, e) : ""
            }

            function c(t, n, e) {
                (n = jt(t, n)) && n.params(Nr(["__ym", "dr", e || Ir(s, ea)(t)]))
            }

            function f(t, n, e) {
                var r = null;
                try {
                    if (e) if (n.querySelector) var a = n.querySelector(e); else {
                        var o = Te(e, t, n);
                        a = o && o.length ? o[0] : null
                    } else a = r;
                    r = a
                } catch (t) {
                }
                return r
            }

            function l(t, n, e) {
                try {
                    var r = sr(t.atob(n));
                    return ni((function (t) {
                        return t = t.charCodeAt(0).toString(2), _f("0", 8 - t.length) + t
                    }), r).join(e)
                } catch (t) {
                    return ""
                }
            }

            function s(t) {
                return cr(t, 10, 99)
            }

            function d(t, n, e, r) {
                if (aa(t = Lr(r, "data"))) {
                    var a = t.split("*");
                    t = a[0];
                    var o = a[1];
                    a = a[2], "sc.frame" === t ? r.source.postMessage("sc.images*" + n, "*") : "sc.image" === t && o === n && e(a)
                }
            }

            function v(t, n, e, r) {
                (r = Ie("button,input", t, r = Lr(r, "target"))) && "submit" === r.type && (r = bd(t, r)) && (e.push(r), oe(t, Hr([!1, t, n, e, r], p), 300))
            }

            function p(t, n, e, r, a) {
                var o = xr(n)(a, r), i = -1 !== o;
                (t || i) && (i && r.splice(o, 1), t = "?" + Ze(t = W(n, a)), r = Hr([n, e, "Form goal. Counter " + e.id + ". Form: " + t + "."], h), Ql(n, e, "form", r)(t))
            }

            function h(t, n, e) {
                return iv(t, n).then((function (r) {
                    r && Pt(t, n, e)()
                }))
            }

            function m(t) {
                return Pr(t = function (t) {
                    if (!(t = Au(t))) return "";
                    t = t("video");
                    try {
                        var n = Br("canPlayType", t), e = ri((function (t) {
                            return ni(Ir(Tr, Br("concat", t + "; codecs=")), ds)
                        }), ss);
                        return ni(n, [].concat(ss, e))
                    } catch (t) {
                        return "canPlayType"
                    }
                }(t)) ? yo("x", t) : t
            }

            function g(t) {
                return yo("x", function (t) {
                    var n = Lr(t, "speechSynthesis.getVoices");
                    return n ? (t = Ao(n, t.speechSynthesis), ri((function (t) {
                        return ni(Gr(t, Lr), ov)
                    }), t())) : ""
                }(t) || [])
            }

            function b(t) {
                if (t = wf(t)) try {
                    for (var n = [], e = 0; e < yf.length; e += 1) {
                        var r = t(yf[e]);
                        n.push(r)
                    }
                    var a = n
                } catch (t) {
                    a = []
                } else a = [];
                return a ? yo("x", a) : ""
            }

            function y(t) {
                var n = function (t) {
                    var n = Lr(t, "matchMedia");
                    if (!n || !ua("matchMedia", n)) return "";
                    var e = Br("matchMedia", t);
                    return Do((function (t, n) {
                        return t[n] = e("(" + n + ")"), t
                    }), {}, vs)
                }(t);
                return n ? yo("x", ni((function (t) {
                    return t = n[t], yo("x", ni(Ir(Tr, Br("concat", ""), Gr(t, Lr)), ["matches", "media"]))
                }), Bo(n))) : ""
            }

            function w(t, n) {
                var e = n.uc;
                if (!function (t, n) {
                    if (!zr(t.Float32Array)) return !1;
                    var e = Lr(n, "canvas");
                    if (!e || !ua("toDataUrl", e.toDataURL)) return !1;
                    try {
                        n.createBuffer()
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(t, e)) return "";
                var r = [];
                t:{
                    var a = function (t, n) {
                        return [function () {
                            var e = n.createBuffer();
                            e && n.getParameter && ua("getParameter", n.getParameter) || gs(), n.bindBuffer(n.ARRAY_BUFFER, e);
                            var r = new t.Float32Array(ms);
                            n.bufferData(n.ARRAY_BUFFER, r, n.STATIC_DRAW), e.Pc = 3, e.Vc = 3, r = n.createProgram();
                            var a = n.createShader(n.VERTEX_SHADER);
                            return r && a || gs(), {kb: r, qd: a, pd: e}
                        }, function (t) {
                            var e = t.kb, r = t.qd;
                            return n.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), n.compileShader(r), n.attachShader(e, r), (e = n.createShader(n.FRAGMENT_SHADER)) || gs(), Go(t, {Hc: e})
                        }, function (t) {
                            var e = t.kb, r = t.Hc;
                            return n.shaderSource(r, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), n.compileShader(r), n.attachShader(e, r), n.linkProgram(e), n.useProgram(e), t
                        }, function (t) {
                            var e = t.kb;
                            return t = t.pd, e.od = n.getAttribLocation(e, "attrVertex"), e.Xc = n.getUniformLocation(e, "uniformOffset"), n.enableVertexAttribArray(e.Ud), n.vertexAttribPointer(e.od, t.Pc, n.FLOAT, !1, 0, 0), n.uniform2f(e.Xc, 1, 1), n.drawArrays(n.TRIANGLE_STRIP, 0, t.Vc), n.canvas
                        }]
                    }(t, e);
                    try {
                        var o = Hr(a, Ir)()();
                        break t
                    } catch (t) {
                        if ("ccf" === t.message) {
                            o = null;
                            break t
                        }
                        pr(t)
                    }
                    o = void 0
                }
                if (So(o)) var i = ""; else try {
                    i = o.toDataURL()
                } catch (t) {
                    i = ""
                }
                (o = i) && r.push(o);
                var u = e.getContextAttributes();
                try {
                    var c = ia(e.getSupportedExtensions, "getSupportedExtensions") && e.getSupportedExtensions() || []
                } catch (t) {
                    c = []
                }
                c = yo(";", c), o = Et(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE), e), a = Et(e.getParameter(e.ALIASED_POINT_SIZE_RANGE), e), i = e.getParameter(e.ALPHA_BITS), u = u && u.antialias ? "yes" : "no";
                var f = e.getParameter(e.BLUE_BITS), l = e.getParameter(e.DEPTH_BITS), s = e.getParameter(e.GREEN_BITS),
                    d = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (d) {
                    var v = e.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === v && (v = 2)
                }
                E(r, v = {
                    Gd: c,
                    "webgl aliased line width range": o,
                    "webgl aliased point size range": a,
                    "webgl alpha bits": i,
                    "webgl antialiasing": u,
                    "webgl blue bits": f,
                    "webgl depth bits": l,
                    "webgl green bits": s,
                    "webgl max anisotropy": d ? v : null,
                    "webgl max combined texture image units": e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": e.getParameter(e.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": e.getParameter(e.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": e.getParameter(e.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": e.getParameter(e.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": Et(e.getParameter(e.MAX_VIEWPORT_DIMS), e),
                    "webgl red bits": e.getParameter(e.RED_BITS),
                    "webgl renderer": e.getParameter(e.RENDERER),
                    "webgl shading language version": e.getParameter(e.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": e.getParameter(e.STENCIL_BITS),
                    "webgl vendor": e.getParameter(e.VENDOR),
                    "webgl version": e.getParameter(e.VERSION)
                }, ": ");
                t:{
                    try {
                        var p = e.getExtension("WEBGL_debug_renderer_info");
                        if (p) {
                            var h = {
                                "webgl unmasked vendor": e.getParameter(p.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": e.getParameter(p.UNMASKED_RENDERER_WEBGL)
                            };
                            break t
                        }
                    } catch (t) {
                    }
                    h = {}
                }
                return E(r, h), e.getShaderPrecisionFormat ? (E(r, function (t) {
                    return Do((function (t, n) {
                        var e = n[0], r = n[1];
                        return t[e + " precision"] = Lr(r, "precision") || "n", t[e + " precision rangeMin"] = Lr(r, "rangeMin") || "n", t[e + " precision rangeMax"] = Lr(r, "rangeMax") || "n", t
                    }), {}, [["webgl vertex shader high float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)], ["webgl vertex shader medium", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)], ["webgl vertex shader low float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)], ["webgl fragment shader high float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)], ["webgl fragment shader medium float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)], ["webgl fragment shader low float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT)], ["webgl vertex shader high int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)], ["webgl vertex shader medium int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT)], ["webgl vertex shader low int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)], ["webgl fragment shader high int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT)], ["webgl fragment shader medium int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT)], ["webgl fragment shader low int precision", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)]])
                }(e)), yo("~", r)) : yo("~", r)
            }

            function E(t, n, e) {
                void 0 === e && (e = ":"), ei((function (n) {
                    return t.push("" + n[0] + e + n[1])
                }), Fo(n))
            }

            function _(t) {
                var n = function (t) {
                    var n = Lr(t, "ApplePaySession"), e = or(t).protocol;
                    return !n || "https:" !== e || Ai(t) ? "" : n
                }(t);
                return n ? Do((function (t, e, r) {
                    e = "" + (r + 1);
                    var a = n.supportsVersion;
                    return zr(a) ? a.call(n, r + 1) ? t + e : t + "0" : t
                }), "", function (t) {
                    if (0 > t) return [];
                    for (var n = [], e = 0; e <= t; e += 1) n.push(e);
                    return n
                }(19)) + n.canMakePayments() : ""
            }

            function C(t) {
                var n = t.o, e = ze(t.O);
                if (e) {
                    var r = Math.random();
                    if (t = {x: e.scrollLeft, y: e.scrollTop}, e.gb) {
                        if (!(r = Jd[e.gb]) || 10 > Math.abs(t.x - r.x) && 10 > Math.abs(t.y - r.y)) return
                    } else {
                        for (; Jd[r];) r = Math.random();
                        e.gb = r
                    }
                    if (Jd[e.gb] = t, e !== n.document) {
                        r = qa(n, e), n = Nn(n);
                        var a = [];
                        !(e = e[Ss]) || 0 > e ? t = [] : (Ba(a, 16), Ha(a, n), Ha(a, t.x), Ha(a, t.y), Ha(a, e), t = a), t = la(r, t)
                    } else t = [];
                    return t
                }
            }

            function S(t) {
                var n = t.o, e = t.O;
                if (k(t), e.touches && e.touches.length) {
                    var r = ze(e);
                    if (r && r !== n.document) return la(qa(n, r), ri((function (t) {
                        return Xa(n, Nn(n), "touch", r, [t.pageX, t.pageY], 0, 0)
                    }), sr(e.touches)))
                }
            }

            function T(t) {
                var n = t.o;
                t = Nn(n);
                var e = Ue(n), r = Ge(n);
                n = [];
                var a = e[0];
                e = e[1];
                var o = r[0];
                return r = r[1], Ba(n, 28), Ha(n, t), Ha(n, a), Ha(n, e), Ha(n, o), Ha(n, r), n
            }

            function x(t) {
                var n = [];
                return Ga(t.o, n, 13) ? [] : n
            }

            function A(t) {
                var n, e = t.o, r = ze(t = t.O);
                if (r && ("wheel" === t.type ? n = 0 < t.deltaY ? 1 : 0 > t.deltaY ? 2 : 0 : "mousewheel" === t.type && t.wheelDelta && (n = 0 < t.wheelDelta ? 2 : 0 > t.wheelDelta ? 1 : 0), n)) {
                    var a = gt(e, t);
                    if (t = qa(e, r), e = Nn(e), a = [a.x, a.y], !(r = r[Ss]) || 0 > r) r = []; else {
                        var o = [];
                        Ba(o, 31), Ha(o, e), Ha(o, r), Ha(o, a[0]), Ha(o, a[1]), Ba(o, 0), Ba(o, 0), Ba(o, n), r = o
                    }
                    return la(t, r)
                }
            }

            function k(t) {
                var n = t.o;
                t = He(n);
                var e = Cc(n)(Bn);
                if (!(10 > e - Yd || 10 > Math.abs(t.x - Kd.x) && 10 > Math.abs(t.y - Kd.y))) return Yd = e, Kd = t, n = Nn(n), Ba(e = [], 3), Ha(e, n), Ha(e, t.x), Ha(e, t.y), e
            }

            function R(t) {
                var n = t.o, e = t.O, r = Cc(n)(Bn), a = r - Vd;
                if (!(10 > a)) {
                    n = gt(n, e), e = Wd.x - n.x;
                    var o = Wd.y - n.y;
                    if (!(0 >= (e = e * e + o * o) || 16 > e && 100 > a || 20 > a && 256 > e)) return Vd = r, Wd = n, Ja(t)
                }
            }

            function M(t, n) {
                var e = Jf(t), r = Dl(t, "r", n), a = fe(t, "rts.p");
                return Kt(t, n, Ao(Do, null, (function (t, n) {
                    var e = {id: n.wc, M: n.M};
                    return e = r({L: n.$c, F: Yi(n.tc), D: n.K, xa: n.xa}, e, n.bd).catch(a), t.then(Gr(e, Tr))
                }), du.resolve(""), e)).catch(a)
            }

            function D(t, n, e) {
                n = _a(t, void 0, n);
                var r = Lr(n = Ld(t, n.b("phc_settings") || ""), "clientId"), a = Lr(n, "orderId"),
                    o = Lr(n, "service_id"), i = Lr(n, "phones") || [];
                return r && a && i ? Nd(t, e.Ab, {bc: P}).Ob(i).then((function (t) {
                    return function (t, n, e, r, a) {
                        var o;
                        n.qa && n.sa && (n.qa === t.qa && n.sa === t.sa || Go(t, n, {
                            T: {},
                            ab: !0
                        }), 0 < a && lr(t.W, [a]), ei((function (n) {
                            var e, r, a = n[0];
                            n = n[1];
                            var o = +(t.T[a] && t.T[a][n] ? t.T[a][n] : 0);
                            Go(t.T, ((e = {})[a] = ((r = {})[n] = o, r), e))
                        }), r), ei((function (n) {
                            var e, r, a = n[0];
                            n = n[1];
                            var o = 1 + (t.T[a] ? t.T[a][n] : 0);
                            Go(t.T, ((e = {})[a] = ((r = {})[n] = o, r), e))
                        }), e), t.Fb && (t.ab || e.length) && ((n = jt(t.o, t.Ab)) && n.params("__ym", "phc", ((o = {}).clientId = t.qa, o.orderId = t.sa, o.service_id = t.Xb, o.phones = t.T, o.performance = t.W, o)), t.ab = !1))
                    }(e, {qa: r, sa: a, Xb: o}, t.T, i, t.W)
                })).catch((function () {
                })) : du.resolve()
            }

            function P(t, n, e) {
                if (t = Ed(e.Na), "href" === e.lb) {
                    var r = e.ja;
                    if (e = (n = r.href).replace(t, e.da), n !== e) return r.href = e, !0
                } else if ((t = null === (r = e.ja.textContent) || void 0 === r ? void 0 : r.replace(t, e.da)) && t !== e.ja.textContent) return e.ja.textContent = t, !0;
                return !1
            }

            function I(t, n) {
                try {
                    var e = n.origin
                } catch (t) {
                }
                if (e) {
                    var r = ii(Ir(Fr, Co(e)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                    e = Ko(e.replace(/\/?$/, "/"), kd), (r || e) && ("appendremote" === Lr(r = wa(t, n.data), "action") && Dd(t, n, r))
                }
            }

            function N(t, n) {
                var e, r, a, o, i = n.data;
                i = void 0 === i ? "" : i;
                var u = n.id;
                u = void 0 === u ? "" : u;
                var c = Xo(t), f = {};
                f.getCachedTags = Bu, f.form = ((e = {}).closest = Gr(t, bd), e.select = Gr(t, yd), e.getData = Gr(t, W), e), f.button = ((r = {}).closest = Gr(t, Ee), r.select = Gr(t, Yu), r.getData = Gr(t, we), r), f.phone = ((a = {}).hidePhones = Hr([t, null, [i]], O), a), f.status = ((o = {}).checkStatus = Hr([t, si(u)], L), o), c.l("_u", f), e = void 0 === (e = n.lang) ? "" : e, r = void 0 === (r = n.appVersion) ? "" : r, a = void 0 === (a = n.fileId) ? "" : a, o = void 0 !== (o = n.beta) && o, r = yo(".", Ir(ai(Ir(Tr, si)), Wo(Boolean))(r.split("."))), Ko(a, Md) && Ko(e, ["ru", "en", "tr"]) ? e = Rd(e = (o ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (r ? "/" + r : "") + "/form-selector/" + a + "_" + e + ".js") ? e : "" : e = "", e && xe(t, {src: e})
            }

            function L(t) {
                var n, e = xd(t);
                return t = Xo(t).b("getCounters", gr)(), t = ni(Po("id"), t), (n = {id: e}).counterFound = !!e && Ko(e, t), n
            }

            function O(t, n, e) {
                var r;
                n = G(t, n, {bc: F, Rc: (r = {}, r.href = !0, r)}), e = Vo(Boolean, ni((function (t) {
                    return "*" === t ? t : _d(t)
                }), e));
                var a = ni(Ir(Tr, Br("concat", [""]), Ro("reverse"), Er), e);
                r = re(t, e = ue(t), 1e3), n = Ao(n.Ob, n, a, !1), r.C(n), function (t, n) {
                    lu(t).C(t, ["load"], n.R)
                }(t, e), B(t, e), n()
            }

            function F(t, n, e) {
                var r = Au(t), a = e.ja, o = e.Na, i = a.parentNode, u = a.textContent;
                if ("text" === e.lb && u && r && i) {
                    e = r("small"), Sd(e);
                    var c = u.split(""), f = u.replace(/\s/g, "").length;
                    return ei(Br("appendChild", e), Do((function (t, n) {
                        var e = t.ib, a = t.fc, o = r("small");
                        o.innerHTML = n;
                        var i = Cd.test(n);
                        return Sd(o), i && (o.style.opacity = "" + (f - a - 1) / f), e.push(o), {
                            ib: e,
                            fc: a + (i ? 1 : 0)
                        }
                    }), {ib: [], fc: 0}, c).ib), function (t, n, e, r) {
                        function a() {
                            if (ei(Gr(["style", "opacity", ""], Nr), sr(e.childNodes)), n) {
                                var a = jt(t, n);
                                a && a.extLink("tel:" + r, {})
                            }
                            i(), u()
                        }

                        var o = lu(t), i = fa, u = fa;
                        i = o.C(e, ["mouseenter"], (function (n) {
                            if (n.target === e) {
                                var r = oe(t, a, 200, "ph.h.e");
                                (u || fa)(), u = o.C(e, ["mouseleave"], (function (n) {
                                    n.target === e && mr(t, r)
                                }))
                            }
                        }))
                    }(t, n, e, o), i.insertBefore(e, a), a.textContent = "", !0
                }
                return !1
            }

            function B(t, n) {
                return V(t).then((function () {
                    var e, r = t.document.body, a = ((e = {}).attributes = !0, e.childList = !0, e.subtree = !0, e);
                    ua("MutationObserver", t.MutationObserver) && new MutationObserver(n.R).observe(r, a)
                }))
            }

            function G(t, n, e) {
                function r(e) {
                    var r;
                    return i(t, n, e) ? null === (r = o[e.Na]) || void 0 === r ? void 0 : r.Sa : null
                }

                var a, o, i = e.bc, u = void 0 === (e = e.Rc) ? ((a = {}).href = !0, a.text = !0, a) : e;
                return {
                    Ob: function (n) {
                        return new du((function (e, a) {
                            n && n.length || a(), o = U()(n), e(V(t).then((function () {
                                var n = Cc(t), e = n(Bn), a = u.href ? function (t, n) {
                                    var e = t.document.body;
                                    if (!e) return [];
                                    var r = q(n);
                                    return Do((function (e, a) {
                                        var o = Lr(a, "href");
                                        try {
                                            var i = decodeURI(o || "")
                                        } catch (t) {
                                            i = ""
                                        }
                                        if ("tel:" === i.slice(0, 4)) {
                                            var u = (r.exec(i) || [])[0], c = u ? _d(u) : "", f = n[c];
                                            To(f) || !c && "*" !== f.Sa[0] || (e.push({
                                                lb: "href",
                                                ja: a,
                                                Na: c,
                                                da: j(u, n[c].da),
                                                gd: o
                                            }), o = _d(i.slice(4)), c = U()([c ? f.Sa : [o, ""]]), e.push.apply(e, H(t, c, a)))
                                        }
                                        return e
                                    }), [], sr(e.querySelectorAll("a")))
                                }(t, o) : [], i = u.text ? H(t, o) : [];
                                return {T: Vo(Pr, Vo(Boolean, ni(r, a.concat(i)))), W: n(Bn) - e}
                            })).catch((function () {
                                return {T: [], W: 0}
                            })))
                        }))
                    }
                }
            }

            function H(t, n, e) {
                if (void 0 === e && (e = t.document.body), !e) return [];
                var r = [], a = q(n);
                return z(t, e, (function (t) {
                    if (t !== e && "script" !== (Lr(t, "parentNode.nodeName") || "").toLowerCase()) {
                        var o = Vo(Boolean, a.exec(t.textContent || "") || []);
                        ei((function (e) {
                            var a = _d(e);
                            To(n[a]) || r.push({lb: "text", ja: t, Na: a, da: j(e, n[a].da), gd: t.textContent || ""})
                        }), o)
                    }
                }), (function (t) {
                    return a.test(t.textContent || "") ? 1 : 0
                }), t.NodeFilter.SHOW_TEXT), r
            }

            function U() {
                return Or((function (t, n) {
                    var e = ni(_d, n), r = e[0];
                    e = e[1], t[r] = {da: e, Sa: n};
                    var a = X(r);
                    return a !== r && (t[a] = {da: X(e), Sa: n}), t
                }), {})
            }

            function j(t, n) {
                for (var e = [], r = t.split(""), a = n.split(""), o = 0, i = 0; i < t.length && !(o >= a.length); i += 1) {
                    var u = r[i];
                    "0" <= u && "9" >= u ? (e.push(a[o]), o += 1) : e.push(r[i])
                }
                return yo("", e) + n.slice(o + 1)
            }

            function X(t) {
                var n = {7: "8", 8: "7"};
                return 11 === t.length && n[t[0]] ? "" + n[t[0]] + t.slice(1) : t
            }

            function q(t) {
                return new RegExp("(?:" + yo("|", ni(wd, Bo(t))) + ")")
            }

            function z(t, n, e, r, a) {
                function o(n) {
                    return zr(r) ? r(n) ? t.NodeFilter.FILTER_ACCEPT : t.NodeFilter.FILTER_REJECT : t.NodeFilter.FILTER_ACCEPT
                }

                if (void 0 === a && (a = -1), zr(e) && o(n) === t.NodeFilter.FILTER_ACCEPT && (e(n), !We(n))) for (n = t.document.createTreeWalker(n, a, r ? {acceptNode: o} : null, !1); n.nextNode() && !1 !== e(n.currentNode);) ;
            }

            function V(t, n) {
                void 0 === n && (n = t);
                var e = (n.nodeType ? "contentWindow." : "") + "document.body";
                return new du((function r(a) {
                    Lr(n, e) ? a() : oe(t, Gr(a, r), 100)
                }))
            }

            function W(t, n, e) {
                return _e(t, n, ["i", "n", "p"], void 0, e)
            }

            function Y(t, n, e) {
                var r, a, o = Lr(e, "ecommerce") || {}, i = Lr(e, "event") || "";
                (o = (i = cd[i]) ? K(i, o, "items") : void 0) || (o = e, !Pr(e) && fr(t, Io(e)) && (o = $r(o)), o = Pr(o) && (t = cd[o[1]], "event" === o[0] && t) ? K(t, o[2], "items") : void 0), (e = o || function (t) {
                    var n = Lr(t, "ecommerce") || {};
                    return t = Vo(Jo(fd), Bo(n)), t = Do((function (t, e) {
                        return t[e] = n[e], t
                    }), {}, t), Bo(t).length ? t : void 0
                }(e)) && n && n(((r = {}).__ym = ((a = {}).ecommerce = [e], a), r))
            }

            function K(t, n, e) {
                var r, a;
                if (n) {
                    var o = n.purchase || n;
                    n = Bo(o);
                    var i = o[e];
                    if (i) {
                        var u = ((r = {})[t] = ((a = {}).products = ni(J, i), a), r);
                        return 1 < n.length && (u[t].actionField = Do((function (t, n) {
                            return n === e ? t : "currency" === n ? (u.currencyCode = o.currency, t) : (t[ud[n] || n] = o[n], t)
                        }), {}, n)), u
                    }
                }
            }

            function J(t) {
                var n = {};
                return ei((function (e) {
                    var r = ud[e] || e;
                    -1 !== e.indexOf("item_category") ? (r = ud.item_category, n[r] = n[r] ? n[r] + "/" + t[e] : t[e]) : n[r] = t[e]
                }), Bo(t)), n
            }

            function $(t, n, e, r) {
                var a;
                if (t = jt(t, e)) {
                    var o = r.data;
                    e = "" + e.id;
                    var i = r.sended || [];
                    r.sended || (r.sended = i), Ko(e, i) || !t.params || r.counter && "" + r.counter !== e || (t.params(o), i.push(e), r.parent && n.Tb(((a = {}).type = "params", a.data = o, a)))
                }
            }

            function Z(t) {
                var n = fa, e = null, r = t.length;
                if (0 !== t.length && t[0]) {
                    var a = t.slice(-1)[0];
                    zr(a) && (n = a, r = t.length + -1);
                    var o = t.slice(-2)[0];
                    return zr(o) && (n = o, e = a, r = t.length + -2), {
                        yc: e,
                        ea: n,
                        K: 1 === (r = t.slice(0, r)).length ? t[0] : Nr(r)
                    }
                }
            }

            function Q(t, n, e) {
                var r = Lr(t, "AppMetricaInitializer"), a = Lr(r, "init");
                if (a) try {
                    Ao(a, r)($e(t, n))
                } catch (t) {
                } else kl = oe(t, Hr([t, n, 2 * e], Q), e, "ai.d");
                return function () {
                    return mr(t, kl)
                }
            }

            function tt(t, n, e) {
                if (e && (e = we(t, e = Ee(t, e)))) {
                    e = "?" + Ze(e);
                    var r = Pt(t, n, "Button goal. Counter " + n.id + ". Button: " + e + ".");
                    Ql(t, n, "btn", r)(e)
                }
            }

            function nt(t, n) {
                var e = Ec(t);
                if ("" !== e.b("cc")) return 0;
                var r = Gr("cc", e.l);
                r(0);
                var a = Cc(t), o = Xo(t);
                o = Ir(Po(Ks({Oa: 1}) + ".c"), Eo((function (t) {
                    r(t + "&" + a(Fn))
                })), Gr("cc", o.l)), Dl(t, "6", n)({}).then(o).catch(Ir(Eo((function () {
                    var t = a(Fn);
                    e.l("cc", "&" + t)
                })), fe(t, "cc")))
            }

            function et(t, n) {
                var e;
                t(((e = {}).clickmap = !!To(n) || n, e))
            }

            function rt(t, n, e, r, a) {
                function o() {
                    c && c.stop()
                }

                if (!n.ya) return du.resolve(fa);
                var i = Dl(t, "4", n), u = {D: {"wv-type": "0"}, F: Yi()};
                e = new Cs(t, e, (function (e, r, a) {
                    if (!i) return du.resolve();
                    r = "wv-data=" + on(e, !0);
                    for (var o, c, f, l = e.length, s = 0, d = 255, v = 255; l;) {
                        l -= o = 21 < l ? 21 : l;
                        do {
                            c = "string" == typeof e ? e.charCodeAt(s) : e[s], s += 1, 255 < c && (f = c >> 8, c &= 255, c ^= f), v += d += c
                        } while (--o);
                        d = (255 & d) + (d >> 8), v = (255 & v) + (v >> 8)
                    }
                    return i(Go({}, u, {
                        L: r,
                        D: {
                            "wv-check": 65535 === (e = (255 & d) + (d >> 8) << 8 | (255 & v) + (v >> 8)) ? 0 : e,
                            "wv-type": "0"
                        }
                    }), n, a).catch(fe(t, "m.n.m.s"))
                }));
                var c = function (t, n, e, r) {
                    var a = t.document, o = [], i = lu(t), u = ":submit" + Math.random(), c = [], f = Ao(n.flush, n),
                        l = Kr((function (e, a) {
                            fe(t, "hfv." + e, (function () {
                                try {
                                    var t = a.type
                                } catch (t) {
                                    return
                                }
                                t = Ko(t, r), n.push(a, {type: e}), t && f()
                            }))()
                        })), s = fe(t, "sfv", (function () {
                            if (!jc(t)) {
                                var n = e(t), r = Xs(t);
                                ei((function (t) {
                                    o.push(i.C(t.target, [t.event], l(t.type)))
                                }), n), ei((function (n) {
                                    o.push(i.C(n.target, [n.event], fe(t, "hff." + n.type + "." + n.event, (function (e) {
                                        ei(Co({o: t, O: e, flush: f}), n.G)
                                    }))))
                                }), r), c = Ce(t, "form", a), a.attachEvent && (n = Ce(t, "form *", a), ei((function (t) {
                                    o.push(i.C(t, ["submit"], l("form")))
                                }), c), ei((function (t) {
                                    Iu(t) && o.push(i.C(t, ["change"], l("formInput")))
                                }), n)), ei((function (n) {
                                    var e = n.submit;
                                    (zr(e) || "object" == typeof e && Vs.test("" + e)) && (n[u] = e, n.submit = fe(t, "fv", (function () {
                                        var t = {target: n, type: "submit"};
                                        return l("document")(t), n[u]()
                                    })))
                                }), c)
                            }
                        })), d = fe(t, "ufv", (function () {
                            ei(Er, o), ei((function (t) {
                                t && (t.submit = t[u])
                            }), c), n.flush()
                        }));
                    return {start: s, stop: d}
                }(t, e, r, a);
                return Kt(t, n, (function (n) {
                    if (n && Xo(t).l("isEU", Lr(n, "settings.eu")), !sn(t) && c) {
                        var e = yc(t), r = e.b("visorc");
                        Ko(r, ["w", "b"]) || (r = ""), Vn(t) && Jn(t, Yn, "visorc") && !Ws.test(vi(t) || "") || (r = "b"), n = Lr(n, "settings.webvisor.recp"), (!t.isFinite(n) || 0 > n || 1 < n) && (r = "w"), r || (r = Xo(t).b("hitId") % 1e4 / 1e4 < n ? "w" : "b"), e.l("visorc", r, 30), "w" === r && c.start()
                    }
                    return o
                }))
            }

            function at(t, n) {
                var e = Vo((function (t) {
                    return 0 < t.G.length
                }), n), r = Ho({target: t.document, type: "document"});
                return ni(Ir(Tr, r, Us(t)), e)
            }

            function ot(t, n) {
                var e = t.o, r = [], a = n.form;
                if (!n[Ss] && a) {
                    var o = a.elements;
                    a = a.length;
                    for (var i = 0; i < a; i += 1) {
                        var u = o[i];
                        Nu(u) && !u[Ss] && lr(r, qa(e, u))
                    }
                } else lr(r, qa(e, n));
                return r
            }

            function it(t) {
                if (Os) {
                    Os = !1;
                    var n = Nn(t.o), e = [];
                    return Ga(t.o, e, 15) ? t = [] : (Ha(e, n), t = e), t
                }
            }

            function ut(t) {
                if (!Os) {
                    Os = !0, t = Nn(t.o);
                    var n = [];
                    return Ba(n, 14), Ha(n, t), n
                }
            }

            function ct(t, n, e) {
                var r = n[Ss];
                if (r) {
                    t:{
                        var a = Nn(t), o = n[Ss];
                        if (0 < o) {
                            var i = [];
                            n = Me(t, n);
                            var u = Ts[o], c = n[0] + "x" + n[1], f = n[2] + "x" + n[3];
                            if (c !== u.Lb) {
                                if (u.Lb = c, Ga(t, i, 9)) {
                                    t = [];
                                    break t
                                }
                                Ha(i, a), Ha(i, o), Ha(i, n[0]), Ha(i, n[1])
                            }
                            if (f !== u.size) {
                                if (u.size = f, Ga(t, i, 10)) {
                                    t = [];
                                    break t
                                }
                                Ha(i, a), Ha(i, o), Ha(i, n[2]), Ha(i, n[3])
                            }
                            if (i.length) {
                                t = i;
                                break t
                            }
                        }
                        t = []
                    }
                    lr(e, t)
                }
                return r
            }

            function ft(t, n, e) {
                if (void 0 === e && (e = !1), "button" === n.getAttribute("type")) return !1;
                var r = n && qe("ym-record-keys", n), a = st(n);
                return t = lt(t, n) || e && a, !r && t
            }

            function lt(t, n) {
                return !(!Oa(t, n) && !La(t, n)) || pt(t, n)
            }

            function st(t) {
                if (!t) return !1;
                var n = t.placeholder, e = t.type;
                return t = Vo(dt, [t.className, t.id, t.name]), e && Ko(e, As) || ii(Fr(Ms), t) || dt(n) && Ps.test(n)
            }

            function dt(t) {
                return !!(t && 2 < t.length)
            }

            function vt(t, n) {
                return n && qe("(ym-disable-submit|-metrika-noform)", n)
            }

            function pt(t, n) {
                if (qr(n)) return !1;
                if (We(n)) {
                    var e = n.parentNode;
                    return !(!qr(e) && 11 === e.nodeType) && pt(t, n.parentNode)
                }
                if (ks.test(n.className)) return !0;
                if (!(e = ku(t))) return !1;
                var r = e.call(n, ".ym-hide-content *");
                return (!r || !Rs.test(n.className) && !e.call(n, ".ym-hide-content .ym-show-content *")) && r
            }

            function ht(t, n) {
                var e = null;
                try {
                    (e = n.target || n.srcElement) && (!e.ownerDocument && e.documentElement ? e = e.documentElement : e.ownerDocument !== t.document && (e = null))
                } catch (t) {
                }
                return e
            }

            function mt(t) {
                var n = t.which;
                return t = t.button, n || void 0 === t ? n : 1 === t || 3 === t ? 1 : 2 === t ? 3 : 4 === t ? 2 : 0
            }

            function gt(t, n) {
                var e = je(t), r = He(t);
                return {
                    x: n.pageX || n.clientX + r.x - (e.clientLeft || 0) || 0,
                    y: n.pageY || n.clientY + r.y - (e.clientTop || 0) || 0
                }
            }

            function bt(t) {
                var n = void 0;
                void 0 === n && (n = bs);
                var e = Lr(t, "navigator") || {};
                n = ni(Gr(e, Lr), n), n = yo("x", n);
                try {
                    var r = ia(Lr(t, "navigator.getGamepads"), "getGamepads") && t.navigator.getGamepads() || []
                } catch (t) {
                    r = []
                }
                return n + "x" + Io(r)
            }

            function yt(t) {
                try {
                    var n = Io(t) ? t : [];
                    return yo(",", [t.name, t.description, Ir(sr, Wo(Boolean), ai(wt), _o(","))(n)])
                } catch (t) {
                    return ""
                }
            }

            function wt(t) {
                return yo(",", [t.description, t.suffixes, t.type])
            }

            function Et(t, n) {
                return n.clearColor(0, 0, 0, 1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), "[" + Lr(t, "0") + ", " + Lr(t, "1") + "]"
            }

            function _t(t) {
                return t = Lr(t, "screen") || {}, yo("x", ni(Gr(t, Lr), ps))
            }

            function Ct(t) {
                return (t = Lr(t, "navigator") || {}).doNotTrack || t.msDoNotTrack || "unknown"
            }

            function St(t, n, e) {
                var r = e.fa, a = Cc(t), o = function (t, n, e) {
                    var r = n || {}, a = Dl(t, "u", e), o = Ec(t);
                    return {
                        b: function (t, n) {
                            return To(r[t]) ? o.b(t, n) : r[t]
                        }, l: function (n, e) {
                            var i, u = "" + e;
                            return r[n] = u, o.l(n, u), a({D: (i = {}, i.key = n, i.value = u, i)}, [Gi.ba + "//mc.yandex.ru/user_storage_set"], {}).catch(fe(t, "u.d.s.s"))
                        }
                    }
                }(t, n.userData, r), i = function (t) {
                    var n = Ei(t);
                    return t = Ir(hi, Jo(["iPhone", "iPad"]))(t), n ? es : t ? rs : []
                }(t);
                return i.length ? function (t, n, e, r, a) {
                    var o = a.eb, i = a.fa;
                    return new du((function (a, u) {
                        var c = e.b(o, 0);
                        return c = parseInt("" + c, 10), 60 >= n(Fn) - c ? u() : au(t) ? a(void 0) : cs(r) ? u() : a(us(t, i))
                    }))
                }(t, a, o, n, e).then((function () {
                    return function (t, n, e, r, a) {
                        var o = a.fd, i = void 0 === o ? fa : o, u = a.eb, c = r(Bn);
                        return function (t, n, e) {
                            var r = e.ua, a = e.data, o = Dl(t, r, e.fa);
                            return t = Go({}, as), a && Go(t.D, a), function (t) {
                                var n = [], e = !1;
                                return Co((function (r, a) {
                                    function o(e) {
                                        n.push(e) === t.length && r(n)
                                    }

                                    ei((function (t) {
                                        t(Rc(o, (function (t) {
                                            if (!e) try {
                                                a(t), e = !0
                                            } catch (t) {
                                                o(t)
                                            }
                                        })))
                                    }), t)
                                }))
                            }(ni((function (t) {
                                return function (t) {
                                    return Co((function (n, e) {
                                        t.then(e, n)
                                    }))
                                }(o(as, ni((function (t) {
                                    var n = t[1];
                                    return "http" + (t[2] ? "s" : "") + "://" + (t = yo("", ni((function (t) {
                                        return String.fromCharCode(t.charCodeAt(0) + 10)
                                    }), t[0].split("")))) + ":" + n + "/" + is[r]
                                }), t), {hc: !1, dd: !0}).then((function (n) {
                                    return Go({}, n, {host: t[n.md]})
                                })))
                            }), n))
                        }(t, n, a)(Rc((function (n) {
                            ei((function (n) {
                                n && ve(t, u + ".s", n)
                            }), n), n = r(Fn), e.l(u, n)
                        }), (function (t) {
                            e.l(u, r(Fn)), i(t, r, c)
                        })))
                    }(t, i, o, a, e)
                }), fa) : du.resolve()
            }

            function Tt(t, n) {
                if (t.ld()) {
                    var e = null;
                    try {
                        e = n.target || n.srcElement
                    } catch (t) {
                    }
                    if (e) {
                        3 === e.nodeType && (e = e.parentNode);
                        for (var r = e && e.nodeName && ("" + e.nodeName).toLowerCase(); Lr(e, "parentNode.nodeName") && ("a" !== r && "area" !== r || !e.href && !e.getAttribute("xlink:href"));) r = (e = e.parentNode) && e.nodeName && ("" + e.nodeName).toLowerCase();
                        var a = e.href ? e : null
                    } else a = null;
                    if (a && !qe("ym-disable-tracklink", a)) {
                        var o = t.o, i = t.globalStorage;
                        e = t.xc;
                        var u = t.fa, c = t.Mc, f = t.sender, l = t.Ec, s = u.Ga, d = a.href;
                        if (r = d === (r = na(a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))) ? "" : r, qe("ym-external-link", a)) xt(o, u, {
                            url: d,
                            ra: !0,
                            title: r,
                            sender: f
                        }); else {
                            s = s ? Ca(o, s).hostname : or(o).hostname, l = RegExp("\\.(" + yo("|", ni(ta, l)) + ")$", "i");
                            var v = a.protocol + "//" + a.hostname + a.pathname;
                            l = Gc.test(v) || Gc.test(d) || l.test(d) || l.test(v), a = a.hostname, tu(s) === tu(a) ? l ? xt(o, u, {
                                url: d,
                                Ia: !0,
                                title: r,
                                sender: f
                            }) : ((c = (o = i.b("pai", fa)()) && o + "-" + c) && e.l("pai", c), r && e.l("il", na(r).slice(0, 100))) : d && Bc.test(d) || xt(o, u, {
                                url: d,
                                Ka: !0,
                                ra: !0,
                                Ia: l,
                                title: r,
                                sender: f
                            })
                        }
                    }
                }
            }

            function xt(t, n, e, r) {
                var a, o = Yi();
                return e.Ia && o.l("dl", "1"), e.ra && o.l("ln", "1"), o = {
                    F: o,
                    title: e.title,
                    Ka: !!e.Ka,
                    K: e.K,
                    D: (a = {}, a["page-url"] = e.url, a["page-ref"] = n.Ga || or(t).href, a)
                }, a = "Link", e.Ia ? a = e.ra ? "Ext link - File" : "File" : e.ra && (a = "Ext link"), Dt(t, "cl.p.s", n = e.sender(o, n).then(r || fa).then(Pt(t, n, a + ". Counter " + n.id + ". Url: " + e.url, e)), e.ea || fa, e.o)
            }

            function At(t, n) {
                var e, r, a = (e = {}, e.string = !0, e.object = !0, e.boolean = n, e)[typeof n] || !1;
                t(((r = {}).trackLinks = a, r))
            }

            function kt(t, n) {
                return Ir(Bl(n), Mt(t))
            }

            function Rt(t, n) {
                return Ir(Gl(n), Mt(t))
            }

            function Mt(t) {
                var n = (t = Xo(t)).b("dsjf") || Co({});
                return t.ma("dsjf", n), n
            }

            function Dt(t, n, e, r, a) {
                var o = Ao(vr, null, t, r, a);
                return e.then(o, (function (e) {
                    o(), ve(t, n, e)
                }))
            }

            function Pt(t, n, e, r) {
                return Pl(n) ? fa : Gr(Hr(la([t], r ? [e + ". Params:", r] : [e]), It), Er)
            }

            function It() {
                var t = $r(arguments), n = t.slice(1);
                Il(t[0]).log.apply(It, n)
            }

            function Nt(t) {
                var n = yc(t), e = or(t);
                return n = "1" === n.b("debug"), e = -1 < e.href.indexOf("_ym_debug=1"), {
                    Kc: n,
                    Oc: (t = t._ym_debug) || e,
                    isEnabled: ii(Boolean, [n, t, e])
                }
            }

            function Lt(t, n) {
                var e = or(t), r = e.href, a = e.host, o = -1;
                if (!aa(n) || To(n)) return r;
                if (-1 !== (e = n.replace(ho, "")).search(hl)) return e;
                var i = e.charAt(0);
                return "?" === i && -1 === (o = r.search(/\?/)) || "#" === i && -1 === (o = r.search(/#/)) ? r + e : -1 !== o ? r.substr(0, o) + e : "/" !== i ? ((r = r.split("/"))[r.length - 1] = e, yo("/", r)) : -1 !== (o = r.indexOf(a)) ? r.substr(0, o + a.length) + e : ""
            }

            function Ot(t) {
                return {
                    N: function (n, e) {
                        if (!n.F) return e();
                        var r = Xo(t).b("fid");
                        return !pl && r && (dn(n, "fid", r), pl = !0), e()
                    }
                }
            }

            function Ft(t) {
                return {
                    N: function (n, e) {
                        var r = n.F;
                        if (r) {
                            var a = Xo(t).b("adBlockEnabled");
                            a && r.l("adb", a)
                        }
                        e()
                    }
                }
            }

            function Bt(t) {
                return {
                    N: function (n, e) {
                        sn(t) || e()
                    }
                }
            }

            function Gt(t) {
                return t = Zi(t), ol[t] || t
            }

            function Ht(t, n, e) {
                return {
                    N: function (n, r) {
                        !function (t, n, e, r) {
                            var a = n.F;
                            if (e.rd || !a) r(); else {
                                var o = ne(t), i = _a(t, "");
                                if (r = Ir((function () {
                                    var t = nl(o);
                                    t = "" + t + rl(t, i), a.l("gdpr", t), dn(n, "gdpr", t)
                                }), r), 3 === e.id) r(); else {
                                    var u = Xo(t), c = u.b("f1");
                                    if (c) c(r); else if (c = (c = nl(o)) ? ni(Gr(vc, Lr), c.split(",")) : [], el(c)) r(); else {
                                        var f = eu(t), l = or(t),
                                            s = f && (-1 !== l.href.indexOf("yagdprcheck=1") || i.b("yaGdprCheck"));
                                        l = i.b("gdpr"), i.b("yandex_login") ? (c.push("13"), i.l("gdpr", fc, 525600)) : f ? Ko(l, cc) ? l === lc ? c.push("12") : c.push("3") : mi(t) || bi(t) ? c.push("17") : Li(t) && c.push("28") : c.push("14");
                                        var d = Gr(o, ee);
                                        el(c) ? (ei(d, c), r()) : (tl.push(r), u.l("f1", (function (n, e) {
                                            var r = 0;
                                            e && (r += ($e(t, e) || "").length);
                                            tl.push(n), 1e6 >= r && tl.push(n)
                                        })), (0, $f[0])(t).then(Po("params.eu")).then((function (n) {
                                            if (n || s) {
                                                if (i.l("gdpr_popup", lc), function (t, n) {
                                                    var e = $c(t, n);
                                                    e && e.Z.C(["isYandex"], (function () {
                                                        var n;
                                                        return (n = {type: "isYandex"}).isYandex = eu(t), n
                                                    }))
                                                }(t, e), Ai(t)) return function (t, n, e) {
                                                    var r = $c(t, e);
                                                    return new du((function (e) {
                                                        var a;
                                                        if (r) {
                                                            var o = r.Z, i = Ir(Gr("4", n), Gr(null, e)),
                                                                u = oe(t, i, 2e3, "gdp.f.t");
                                                            r.Tb((a = {}, a.type = "isYandex", a)).then((function (t) {
                                                                t.isYandex ? (n("5"), o.C(la(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], dc), (function (t) {
                                                                    e({value: $n(t[1].type)})
                                                                }))) : (n("6"), e(null))
                                                            })).catch(i).then(Hr([t, u], mr))
                                                        } else e({value: lc, cb: !0})
                                                    }))
                                                }(t, d, e);
                                                var r = Zn(t, o);
                                                if (r) return (n = function (t, n, e, r) {
                                                    var a = function (t, n) {
                                                        var e = n || xi(t);
                                                        return Ko(e, Zf) ? e : "en"
                                                    }(t, r.sd), o = $c(t, r);
                                                    if (!o) return du.resolve({value: fc, cb: !0});
                                                    var i = xe(t, {src: "https://yastatic.net/s3/gdpr/popup/v2/" + a + "_inversed_buttons.js"});
                                                    return new du((function (t, r) {
                                                        i ? (n("7"), i.onerror = function () {
                                                            var e;
                                                            n("9"), o.Sb(((e = {}).type = "GDPR-ok-view-default", e)), t(null)
                                                        }, i.onload = function () {
                                                            n("10"), e.C(la(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], dc), (function (n) {
                                                                var e;
                                                                n = n.type, o.Sb(((e = {}).type = n, e)), t({value: $n(n)})
                                                            }))
                                                        }) : (n("9"), r(er("gdp.e")))
                                                    }))
                                                }(t, d, r, e)).then(Hr([t, e], Ut)), n
                                            }
                                            return n || d("8"), du.resolve({value: fc, cb: !0})
                                        })).then((function (n) {
                                            if (i.Za("gdpr_popup"), n) {
                                                var e = n.value;
                                                n = n.cb, Ko(e, cc) && i.l("gdpr", e, n ? void 0 : 525600)
                                            }
                                            e = _n(tl, Er), wn(t, e, 20)(Rc(fe(t, "gdr"), fa)), u.l("f1", Er)
                                        })).catch(fe(t, "gdp.a")))
                                    }
                                }
                            }
                        }(t, n, e, r)
                    }
                }
            }

            function Ut(t, n) {
                if (eu(t)) {
                    var e = ne(t), r = jt(t, n);
                    r = r && r.params, e = ni(Gr(Qf, Lr), hc(e)), r && e.length && r("gdpr", Vo(Boolean, e))
                }
            }

            function jt(t, n) {
                return Xo(t).b("counters", {})[zi(n)]
            }

            function Xt() {
                return function (t, n, e) {
                    return {
                        N: function (n, r) {
                            var a, o = n.F, i = n.D;
                            if (o && i) {
                                var u = Ko(i["wv-type"], Kf);
                                if (!i["wv-type"] || u) {
                                    var c = Cc(t);
                                    o.pb("rqnl", 1), o = o.o();
                                    for (var f = Yf(t), l = 1; f[l];) l += 1;
                                    n.xa = l, f[l] = ((a = {}).protocol = Gi.ba, a.host = "mc.yandex.ru", a.resource = u ? "webvisor" : "watch", a.postParams = n.L, a.time = c(Bn), a.counterType = e.M, a.params = i, a.browserInfo = o, a.counterId = e.id, a.ghid = ln(t), a), zt(t)
                                }
                            }
                            r()
                        }, aa: function (n, e) {
                            qt(t, n), e()
                        }
                    }
                }
            }

            function qt(t, n) {
                var e = Yf(t);
                n.F && !So(e) && (delete e[n.xa], zt(t))
            }

            function zt(t) {
                var n = Yf(t);
                Ec(t).l("retryReqs", n)
            }

            function Vt(t, n, e) {
                var r = hn(t, n, e);
                return function (n, e, a) {
                    var o;
                    (n = Go({F: Yi()}, n)).D || (n.D = {});
                    var i = n.D;
                    if (i.wmode = "0", i["wv-part"] = "" + a, i["wv-hit"] = i["wv-hit"] || "" + ln(t), i["page-url"] = i["page-url"] || t.location.href, i.rn = i.rn || "" + cr(t), !i["wv-type"]) {
                        a = n.Ed;
                        var u = "4", c = "2";
                        n.Md && (u = "5", c = "3"), i["wv-type"] = a ? u : c
                    }
                    return e = "webvisor/" + e.id, r(Go(n, {D: i}), e, {
                        va: (o = {}, o["Content-Type"] = "text/plain", o),
                        ec: "POST"
                    })
                }
            }

            function Wt(t, n, e, r) {
                if (n = r.b("cc"), r = Hr(["cc", ""], r.l), n) {
                    var a = n.split("&");
                    if (n = a[0], (a = (a = a[1]) && si(a)) && 1440 < Cc(t)(Fn) - a) return r();
                    e.l("cc", n)
                } else wo(0)(n) || r()
            }

            function Yt(t, n, e, r) {
                return Kt(t, n, (function (n) {
                    if ("0" === Lr(n, "settings.pcs") && !di(t)) if (n = r.b("zzlc"), To(n) || So(n) || "na" === n) {
                        n = "ru";
                        var a = rn(t, 68), o = an(t, 79);
                        if ((a || o) && (n = "md"), a = Au(t)) {
                            var i = a("iframe");
                            if (Go(i.style, {
                                display: "none",
                                width: "1px",
                                height: "1px",
                                visibility: "hidden"
                            }), i.src = "https://mc.yandex." + n + function (t, n) {
                                void 0 === n && (n = !1);
                                var e = t, r = "", a = 0;
                                if (!e) return "";
                                for (n && (e = un(e)); e.length % 4;) e += "=";
                                do {
                                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(a++)),
                                        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(a++)),
                                        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(a++)),
                                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(a++));
                                    if (0 > o || 0 > i || 0 > u || 0 > c) return null;
                                    var f = o << 18 | i << 12 | u << 6 | c;
                                    o = f >> 16 & 255, i = f >> 8 & 255, f &= 255, r = 64 === u ? r + String.fromCharCode(o) : 64 === c ? r + String.fromCharCode(o, i) : r + String.fromCharCode(o, i, f)
                                } while (a < e.length);
                                return r
                            }("L21ldHJpa2EvenpsYy5odG1s"), n = je(t)) {
                                n.appendChild(i);
                                var u = 0, c = lu(t).C(t, ["message"], fe(t, "zz.m", (function (n) {
                                    (n = Lr(n, "data")) && n.substr && "__ym__zz" === n.substr(0, 8) && (Ve(i), n = n.substr(8), r.l("zzlc", n), e.l("zzlc", n), c(), mr(t, u))
                                })));
                                u = oe(t, Ir(c, Gr(i, Ve)), 3e3)
                            }
                        }
                    } else e.l("zzlc", n)
                }))
            }

            function Kt(t, n, e) {
                return t = zi(n), Vf()(zf(t)).then(e)
            }

            function Jt(t, n, e) {
                return n = zi(n), t = Gn(t), e = Go({Fc: t(Bn)}, e), Vf()(qf(n, e))
            }

            function $t(t, n, e) {
                var r, a;
                if (n = Yo(Gr(t, Lr), Xf), n = To(n) ? null : Lr(t, n), Lr(t, "navigator.onLine") && n && n && Lr(n, "prototype.constructor.name")) {
                    var o = new n(((r = {}).iceServers = [], r));
                    zr(t = Lr(o, "createDataChannel")) && (Ao(t, o, "y.metrika")(), zr(t = Lr(o, "createOffer")) && !t.length && (zr(r = Lr(t = Ao(t, o)(), "then")) && Ao(r, t, (function (t) {
                        var n = Lr(o, "setLocalDescription");
                        zr(n) && Ao(n, o, t, fa, fa)()
                    }))(), Go(o, ((a = {}).onicecandidate = function () {
                        var t, n = Lr(o, "close");
                        if (zr(n)) {
                            n = Ao(n, o);
                            try {
                                var r = (t = Lr(o, "localDescription.sdp")) && t.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (t) {
                                return o.onicecandidate = fa, void ("closed" !== o.iceConnectionState && n())
                            }
                            r && 0 < r.length && (t = sa(r[1]), e.l("pp", t)), o.onicecandidate = fa, n()
                        }
                    }, a))))
                }
            }

            function Zt(t, n, e) {
                var r, a = Yc(t, n);
                if (a) {
                    a.Z.C(["gpu-get"], (function () {
                        var t;
                        return (t = {}).type = "gpu-get", t.pu = e.b("pu"), t
                    }));
                    var o = Lr(t, "opener");
                    if (o) {
                        var i = oe(t, Hr([t, n, e], Qt), 200, "pu.m");
                        a.mb(o, ((r = {}).type = "gpu-get", r), (function (n, r) {
                            var a = Lr(r, "pu");
                            a && (mr(t, i), e.l("pu", a))
                        }))
                    } else Qt(t, n, e)
                }
            }

            function Qt(t, n, e) {
                var r = Lr(t, "location.host");
                t = Tc(t, n), e.l("pu", "" + sa(r) + t)
            }

            function tn(t, n, e) {
                return {
                    N: function (n, r) {
                        var a = n.F;
                        if (a && (!e || e.Rb)) {
                            var o = t.document.title;
                            n.title && (o = n.title);
                            var i = yr("getElementsByTagName", t.document);
                            "string" != typeof o && i && (o = (o = Lr(o = i("title"), "0.innerHtml")) ? o : ""), o = o.slice(0, Gi.lc), a.l("t", o)
                        }
                        r()
                    }
                }
            }

            function nn(t) {
                return void 0 === t && (t = jf), function (n, e, r) {
                    return {
                        N: function (e, a) {
                            var o = e.F, i = e.D;
                            o && i && ei((function (t) {
                                var a = Ff[t], i = "bi", u = o;
                                a || (a = tf[t], i = "tel", u = dn(e)), a && (a = ce(i + ":" + t, a, null)(n, r, e), u.pb(t, a))
                            }), t), a()
                        }
                    }
                }
            }

            function en(t, n, e, r, a, o, i, u) {
                var c = e.b(o);
                return qr(c) && (e.l(o, i), a(t, n, e, r), c = e.b(o, i)), To(u) || u.pb(o, "" + c), c
            }

            function rn(t, n) {
                if (Qo(t) && n) {
                    var e = vi(t).match(pf);
                    if (e && e.length) return +e[1] >= n
                }
                return !1
            }

            function an(t, n) {
                var e = vi(t);
                return !!(e && (e = e.match(gf)) && 1 < e.length) && si(e[1]) >= n
            }

            function on(t, n) {
                void 0 === n && (n = !1);
                for (var e = t.length, r = e - e % 3, a = [], o = 0; o < r; o += 3) {
                    var i = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2];
                    a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[i >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[i >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[i >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & i])
                }
                switch (e - r) {
                    case 1:
                        e = t[r] << 4, a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[e >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & e], "=", "=");
                        break;
                    case 2:
                        e = (t[r] << 10) + (t[r + 1] << 2), a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[e >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[e >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & e], "=")
                }
                return a = a.join(""), n ? un(a, !0) : a
            }

            function un(t, n) {
                return void 0 === n && (n = !1), t ? t.replace(n ? /[+/=]/g : /[-*_]/g, (function (t) {
                    return sf[t] || t
                })) : ""
            }

            function cn(t, n, e) {
                return {
                    N: function (t, n) {
                        var r = of(e), a = t.F;
                        a ? a.b("pv") && !a.b("ar") ? (r.Cb = a, n()) : r.Ha ? r.Ha.push(n) : n() : n()
                    }, aa: function (n, r) {
                        var a = n.F, o = n.cd, i = of(e);
                        if (a) {
                            var u = i.Ha;
                            i.Cb === a && u && (o && Xo(t).l("isEU", Lr(o, "settings.eu")), ei(Er, u), i.Ha = null)
                        }
                        r()
                    }
                }
            }

            function fn(t, n) {
                var e = Yc(t, n), r = [], a = [];
                if (!e) return null;
                var o = Kc(t, e.mb), i = Jc(o);
                return e.Z.C(["initToParent"], (function (t) {
                    i(r, e.oa[t[1].counterId])
                })).C(["parentConnect"], (function (t) {
                    i(a, e.ta[t[1].counterId])
                })), {
                    Z: e.Z, Sd: function (n, r) {
                        return new du((function (a, o) {
                            e.mb(n, r, (function (t, n) {
                                a([t, n])
                            })), oe(t, Gr(er(), o), 5100, "is.o")
                        }))
                    }, Sb: function (t) {
                        var n = {Ub: [], sb: [], data: t};
                        return r.push(n), o(e.oa, n, t)
                    }, Tb: function (t) {
                        var n = {Ub: [], sb: [], data: t};
                        return a.push(n), o(e.ta, n, t)
                    }
                }
            }

            function ln(t) {
                var n = Xo(t), e = n.b("hitId");
                return e || (e = cr(t), n.l("hitId", e)), e
            }

            function sn(t) {
                return !!Xo(t).b("oo") || jc(t)
            }

            function dn(t, n, e) {
                return void 0 === e && (e = null), t.Pa || (t.Pa = Lc()), n && !So(e) && t.Pa.l(n, e), t.Pa
            }

            function vn(t) {
                return {
                    N: function (n, e) {
                        var r = t.document, a = n.F;
                        if (a && ur(t)) {
                            var o = lu(t), i = function (n) {
                                return ur(t) || (o.Ta(r, Nc, i), e()), n
                            };
                            o.C(r, Nc, i), a.l("pr", "1")
                        } else e()
                    }
                }
            }

            function pn(t, n, e) {
                var r = hn(t, n, e);
                return function (n, e) {
                    var a, o = Go({F: Yi()}, n), i = o.D, u = o.F;
                    if ((a = {})["page-url"] = i && i["page-url"] || "", a.charset = "utf-8", i = a, "0" !== e.M && (i["cnt-class"] = e.M), a = Go(o, {D: Go(o.D || {}, i)}), o = "", a.F) {
                        i = zi(e);
                        var c = (i = xc(e)[i] || {}).status;
                        "rt" === i.ua && c ? (1 === c && (o = Ac(t, e) + "."), a.F.l("rt", c)) : o = ""
                    }
                    return Go(a, {Db: o}), r(a, "watch/" + e.id, {vb: !(!u.b("pv") || u.b("ar") || u.b("wh"))})
                }
            }

            function hn(t, n, e) {
                var r = Mn(t, n);
                return function (n, a, o) {
                    void 0 === o && (o = {});
                    var i = function (t) {
                        var n = "mc.yandex.ru", e = Lr(t, "document.referrer");
                        return e ? ((t = Ca(t, e).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (t = t[0].split("yandex").reverse()[0].substring(1), t = !!Ko(t, $i) && t) : t = !1, "mc.yandex." + (t || "ru")) : n
                    }(t);
                    return n.Db && (i = "" + n.Db + i), a = [Gi.ba + "//" + (i || "mc.yandex.ru") + "/" + a], gn(t, e, n, !0).then(Hr([n, a, o], r)).then((function (r) {
                        return n.cd = r.Oa, gn(t, e, n).then(Gr(r.Oa, Tr))
                    }))
                }
            }

            function mn(t) {
                return (t.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function gn(t, n, e, r) {
                return void 0 === r && (r = !1), new du((function (t, a) {
                    function o(n, e) {
                        e(), t()
                    }

                    var i = n.slice();
                    i.push({N: o, aa: o});
                    var u = _n(i, (function (t, n) {
                        var o = r ? t.N : t.aa;
                        if (o) try {
                            o(e, n)
                        } catch (t) {
                            u(kn), a(t)
                        } else n()
                    }));
                    u(Cn)
                }))
            }

            function bn(t, n, e) {
                var r = e || "as";
                if (t.postMessage && !t.attachEvent) {
                    e = lu(t);
                    var a = "__ym__promise_" + cr(t) + "_" + cr(t), o = fa;
                    r = fe(t, r, (function (t) {
                        try {
                            var e = t.data
                        } catch (t) {
                            return
                        }
                        e === a && (o(), t.stopPropagation && t.stopPropagation(), n())
                    })), o = e.C(t, ["message"], r), t.postMessage(a, "*")
                } else oe(t, n, 0, r)
            }

            function yn(t, n, e, r, a) {
                void 0 === r && (r = 1), void 0 === a && (a = "itc"), wn(t, n = _n(n, e), r)(Rc(fe(t, a), fa))
            }

            function wn(t, n, e, r) {
                return void 0 === e && (e = 1), void 0 === r && (r = Sn), Pc = 1 / 0 === e, Co((function (a, o) {
                    var i = [];
                    !function (t) {
                        Dc ? Mc.push(t) : (Dc = !0, t())
                    }((function u() {
                        try {
                            var c = n(r(t, e));
                            i = i.concat(c)
                        } catch (t) {
                            return a(t)
                        }
                        if (n(xn), n(Rn)) return o(i), En(t);
                        Pc ? (n(r(t, 1e4)), o(i), En(t)) : oe(t, u, 100)
                    }))
                }))
            }

            function En(t) {
                if (Mc.length) {
                    var n = Mc.shift();
                    Pc ? n() : oe(t, n, 100)
                } else Dc = !1
            }

            function _n(t, n) {
                return void 0 === n && (n = Tr), Co({Ja: t, Gb: n, qb: !1, V: 0})
            }

            function Cn(t) {
                function n() {
                    function n() {
                        e = !0, t.V += 1
                    }

                    e = !1, t.Gb(t.Ja[t.V], (function () {
                        n()
                    })), e || (t.V += 1, n = Ao(Cn, null, t))
                }

                for (var e = !0; !Rn(t) && e;) n()
            }

            function Sn(t, n) {
                return function (e) {
                    var r = Cc(t), a = r(Bn);
                    return kc((function (t, e) {
                        r(Bn) - a >= n && e(An)
                    }), e)
                }
            }

            function Tn(t) {
                Rn(t) && pr(Eu("i"));
                var n = t.Gb(t.Ja[t.V]);
                return t.V += 1, n
            }

            function xn(t) {
                t.qb = !1
            }

            function An(t) {
                t.qb = !0
            }

            function kn(t) {
                t.V = t.Ja.length
            }

            function Rn(t) {
                return t.qb || t.Ja.length <= t.V
            }

            function Mn(t, n) {
                return function (e, r, a) {
                    return void 0 === a && (a = {}), Dn(t, n, r, e, Go(a, {Y: e.Y || [], L: a.L || e.L}))
                }
            }

            function Dn(t, n, e, r, a, o, i) {
                var u;
                void 0 === o && (o = 0), void 0 === i && (i = 0);
                var c = Go({}, a), f = n[i], l = f[0];
                f = f[1];
                var s = Go({}, r.D), d = Cc(t);
                return r.F && (s["browser-info"] = Yi(r.F.o()).l("st", d(On)).ob()), !s.t && (d = r.Pa) && (d.l("ti", l), s.t = d.ob()), d = e[o], c.va && c.va["Content-Type"] || !c.L || (c.va = Go({}, c.va, ((u = {})["Content-Type"] = "application/x-www-form-urlencoded", u)), c.L = "site-info=" + tr(c.L)), c.ec = c.L ? "POST" : "GET", c.wa = s, c.Y.push(l), f(d + (r.Sc ? "/1" : ""), c).then((function (t) {
                    return {Oa: t, md: o}
                })).catch((function (u) {
                    var c = i + 1 >= n.length, f = o + 1 >= e.length;
                    return c && f && pr(u), Dn(t, n, e, r, a, !f && c ? o + 1 : o, c ? 0 : i + 1)
                }))
            }

            function Pn(t, n) {
                var e = n.fb, r = e || "uid";
                e = e ? t.location.hostname : void 0;
                var a = yc(t), o = Ec(t), i = Cc(t), u = i(On), c = In(t, n), f = c[0];
                c = c[1];
                var l = a.b("d");
                Sc(t, n);
                var s = !1;
                return !c && f && (c = f, s = !0), c ? (!l || 15768e3 < u - si(l)) && (s = !0) : (c = yo("", [i(On), cr(t)]), s = !0), s && !n.ha && (a.l(r, c, 525600, e), a.l("d", "" + u, 525600, e)), o.l(r, c), c
            }

            function In(t, n) {
                var e = Ec(t), r = yc(t), a = n.fb || "uid";
                return [e.b(a), r.b(a)]
            }

            function Nn(t) {
                return t = Cc(t), Math.round(t(Ln) / 50)
            }

            function Ln(t) {
                var n = t.W, e = n[1];
                return t = n[0] && e ? e() : Bn(t) - t.Nc, Math.round(t)
            }

            function On(t) {
                return Math.round(Bn(t) / 1e3)
            }

            function Fn(t) {
                return Math.floor(Bn(t) / 1e3 / 60)
            }

            function Bn(t) {
                var n = t.tb;
                return 0 !== n ? n : le(t.o, t.W)
            }

            function Gn(t) {
                var n = lu(t), e = se(t), r = {o: t, tb: 0, W: e, Nc: le(t, e)}, a = e[1];
                return e[0] && a || n.C(t, ["beforeunload", "unload"], (function () {
                    0 === r.tb && (r.tb = le(t, r.W))
                })), Co(r)
            }

            function Hn(t) {
                return (10 > t ? "0" : "") + t
            }

            function Un(t, n, e) {
                void 0 === n && (n = ""), void 0 === e && (e = "_ym");
                var r = "" + e + n + "_";
                return {
                    bb: wc(t), b: function (n, e) {
                        var a = Xn(t, "" + r + n);
                        return So(a) && !To(e) ? e : a
                    }, l: function (n, e) {
                        return jn(t, "" + r + n, e), this
                    }, Za: function (n) {
                        return qn(t, "" + r + n), this
                    }
                }
            }

            function jn(t, n, e) {
                var r = zn(t);
                if (t = $e(t, e), !So(t)) try {
                    r.setItem(n, t)
                } catch (t) {
                }
            }

            function Xn(t, n) {
                var e = zn(t);
                try {
                    return wa(t, e.getItem(n))
                } catch (t) {
                }
                return null
            }

            function qn(t, n) {
                var e = zn(t);
                try {
                    e.removeItem(n)
                } catch (t) {
                }
            }

            function zn(t) {
                try {
                    return t.localStorage
                } catch (t) {
                }
                return null
            }

            function Vn(t, n, e) {
                Wn(t, "metrika_enabled", "1", 0, n, e, !0);
                var r = Kn(t);
                return (r = r && r.metrika_enabled) && Ea(t, "metrika_enabled", n, e, !0), !!r
            }

            function Wn(t, n, e, r, a, o, i) {
                if (void 0 === i && (i = !1), Jn(t, Yn, n)) {
                    var u = n + "=" + encodeURIComponent(e) + ";";
                    if (u += "" + uu(t), r) {
                        var c = new Date;
                        c.setTime(c.getTime() + 6e4 * r), u += "expires=" + c.toUTCString() + ";"
                    }
                    a && (u += "domain=" + (r = a.replace(gc, "")) + ";");
                    try {
                        t.document.cookie = u + "path=" + (o || "/"), i || (mc(t)[n] = e)
                    } catch (t) {
                    }
                }
            }

            function Yn(t, n) {
                var e = mc(t);
                return e && e[n] || null
            }

            function Kn(t) {
                try {
                    var n = t.document.cookie;
                    if (!qr(n)) {
                        var e = {};
                        return ei((function (t) {
                            var n = (t = t.split("="))[1];
                            e[na(t[0])] = na(Qe(n))
                        }), (n || "").split(";")), e
                    }
                } catch (t) {
                }
                return null
            }

            function Jn(t, n, e) {
                return Ko(e, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? t = !0 : (e = ne(t), e = hc(e), t = n(t, "gdpr"), t = !!Vo(Jo(pc), e).length || Ko(t, [fc, sc])), t
            }

            function $n(t) {
                return Ko(t, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]) ? fc : (t = t.replace("GDPR-ok-view-detailed-", ""), Ko(t, cc) ? t : fc)
            }

            function Zn(t, n, e) {
                void 0 === e && (e = Tr);
                var r = ie(t);
                e(r);
                var a = Gr(r, Qn);
                return te(t, n, (function (t) {
                    t.La.C(a)
                })), r
            }

            function Qn(t, n) {
                var e = Lr(n, "ymetrikaEvent");
                e && t.R(Lr(e, "type"), e)
            }

            function te(t, n, e, r) {
                void 0 === e && (e = fa), void 0 === r && (r = !1);
                var a = ue(t);
                if (n && zr(n.push)) {
                    var o = n.push;
                    return n.push = function () {
                        var t = $r(arguments), e = t[0];
                        return r && a.R(e), t = o.apply(n, t), r || a.R(e), t
                    }, e(t = {
                        La: a, unsubscribe: function () {
                            n.push = o
                        }
                    }), ei(a.R, n), t
                }
            }

            function ne(t) {
                var n = (t = Xo(t)).b("dataLayer", []);
                return t.l("dataLayer", n), n
            }

            function ee(t, n) {
                var e, r;
                t.push(((e = {}).ymetrikaEvent = ((r = {}).type = n, r), e))
            }

            function re(t, n, e) {
                function r() {
                    a = 0, u && (u = !1, a = oe(t, r, e), i.R(o))
                }

                var a, o, i = ue(t), u = !1;
                return n.C((function (t) {
                    return u = !0, o = t, a || r(), fa
                })), i
            }

            function ae(t, n) {
                return t.clearInterval(n)
            }

            function oe(t, n, e, r) {
                return hr(t, fe(t, "d.err." + (r || "def"), n), e)
            }

            function ie(t) {
                var n = {};
                return {
                    C: function (e, r) {
                        return ei((function (e) {
                            Lr(n, e) || (n[e] = ue(t)), n[e].C(r)
                        }), e), this
                    }, Jb: function (t, e) {
                        return ei((function (t) {
                            Lr(n, t) && n[t].Jb(e)
                        }), t), this
                    }, R: function (e, r) {
                        return Lr(n, e) ? fe(t, "e." + r, n[e].R)(r) : []
                    }
                }
            }

            function ue(t) {
                var n = [], e = {};
                return e.Nd = n, e.C = Ir(Br("push", n), Gr(e, Tr)), e.Jb = Ir(Vr(xr(t))(n), Vr(Br("splice", n))(1), Gr(e, Tr)), e.R = Ir(Tr, Vr(Er), oi(n)), e
            }

            function ce(t, n, e) {
                return function () {
                    return fe(arguments[0], t, n, e).apply(this, arguments)
                }
            }

            function fe(t, n, e, r, a) {
                var o = e || pr;
                return function () {
                    var e = r;
                    try {
                        e = o.apply(a || null, arguments)
                    } catch (e) {
                        ve(t, n, e)
                    }
                    return e
                }
            }

            function le(t, n) {
                var e = n || se(t), r = e[0];
                return e = e[1], !isNaN(r) && zr(e) ? Math.round(e() + r) : t.Date.now ? t.Date.now() : (new t.Date).getTime()
            }

            function se(t) {
                var n = Lr(t = de(t), "timing.navigationStart"), e = Lr(t, "now");
                return e && (e = Ao(e, t)), [n, e]
            }

            function de(t) {
                return Lr(t, "performance") || Lr(t, "webkitPerformance")
            }

            function ve(t, n, e) {
                var r, a, o, i, u;
                if (!(.01 >= t.Math.random())) {
                    var c = "u.a.e", f = "";
                    if (e && ("object" == typeof e ? (c = e.message, f = "string" == typeof e.stack && e.stack.replace(/\n/g, "\\n") || "n.s.e.s") : c = "" + e), !(Cu(c) || ii(Ir(Br("indexOf", c), wo(-1), Cr), wu) || _u(c) && .1 <= t.Math.random())) {
                        (r = {}).jserrs = ((a = {})[Gi.Aa] = ((o = {})[c] = ((i = {})[n] = ((u = {})[t.location.href] = f, u), i), o), a), n = r;
                        t:{
                            var l;
                            r = Gi.ba + "//mc.yandex.ru/watch/" + Gi.ic;
                            try {
                                var s = uc(t, "er")[0], d = (void 0 === s ? [] : s)[1], v = void 0 === d ? null : d
                            } catch (t) {
                                break t
                            }
                            (l = {})["browser-info"] = "ar:1:pv:1:v:" + Gi.Aa + ":vf:" + so.version, l["page-url"] = t.location && "" + t.location.href, s = l, t = $e(t, n), v && t && v(r, {
                                wa: s,
                                Y: [],
                                L: "site-info=" + tr(t)
                            }).catch(fa)
                        }
                    }
                }
            }

            function pe(t) {
                return ni((function (n) {
                    return !n || Ko(n, t) ? n : 0
                }), Qu)
            }

            function he(t) {
                return !bi(t) && ge(t)
            }

            function me(t) {
                return !!Au(t) && $u(t)
            }

            function ge(t) {
                var n = Lr(t, "navigator.sendBeacon");
                return !(!n || !ua("sendBeacon", n)) && Zu(t, Ao(n, Lr(t, "navigator")))
            }

            function be(t, n) {
                try {
                    delete t[n]
                } catch (e) {
                    t[n] = void 0
                }
            }

            function ye(t) {
                var n = Au(t);
                return !!n && Ju(t, n)
            }

            function we(t, n, e) {
                var r = Le(n);
                return r && _e(t, n, Vo(Boolean, ["p", Ku[r], "c"]), Yu(t), e)
            }

            function Ee(t, n) {
                var e = Ie(Wu, t, n);
                if (!e) {
                    var r = Ie("div", t, n);
                    r && (Te(Wu + ",div", t, r).length || (e = r))
                }
                return e
            }

            function _e(t, n, e, r, a) {
                return Do((function (e, o) {
                    var i = null;
                    return o in Xu ? i = n.getAttribute && n.getAttribute(Xu[o]) : o in qu && (i = "p" === o ? qu[o](t, n, a) : "c" === o ? qu[o](t, n, r) : qu[o](t, n)), i && (i = i.slice(0, Uu[o] || 100), e[o] = ju[o] ? "" + sa(i) : i), e
                }), {}, e)
            }

            function Ce(t, n, e) {
                if (t.document.querySelectorAll && ua("querySelectorAll", Lr(t, "Element.prototype.querySelectorAll"))) return sr(e.querySelectorAll(n));
                var r = Se(n.split(" "), e);
                return Vo((function (n, e) {
                    return xr(t)(n, r) === e
                }), r)
            }

            function Se(t, n) {
                var e = la(t), r = e.shift();
                return r ? (r = n.getElementsByTagName(r), e.length ? ri(Gr(e, Se), sr(r)) : sr(r)) : []
            }

            function Te(t, n, e) {
                return e && (t = e.querySelectorAll(t)) ? sr(t) : []
            }

            function xe(t, n) {
                var e = t.document, r = Go({type: "text/javascript", charset: "utf-8", async: !0}, n), a = Au(t);
                if (a) {
                    var o = a("script");
                    No(Fo, ai((function (t) {
                        var n = t[0];
                        t = t[1], "async" === n && t ? o.async = !0 : o[n] = t
                    })))(r);
                    try {
                        var i = yr("getElementsByTagName", e), u = i("head")[0];
                        if (!u) {
                            var c = i("html")[0];
                            u = a("head"), c && c.appendChild(u)
                        }
                        return u.insertBefore(o, u.firstChild), o
                    } catch (t) {
                    }
                }
            }

            function Ae(t, n, e) {
                for (var r = "", a = Bu(), o = Le(n) || "*"; n && n.parentNode && !Ko(o, ["BODY", "HTML"]);) r += a[o] || "*", r += ke(t, n, e) || "", o = Le(n = n.parentElement) || "*";
                return na(r, 128)
            }

            function ke(t, n, e) {
                if (t = Re(t, n)) {
                    t = t.childNodes;
                    for (var r = n && n.nodeName, a = 0, o = 0; o < t.length; o += 1) if (r === (t[o] && t[o].nodeName)) {
                        if (n === t[o]) return a;
                        e && t[o] === e || (a += 1)
                    }
                }
                return 0
            }

            function Re(t, n) {
                var e = Lr(t, "document");
                if (!n || n === e.documentElement) return null;
                if (n === Xe(t)) return e.documentElement;
                e = null;
                try {
                    e = n.parentNode
                } catch (t) {
                }
                return e
            }

            function Me(t, n) {
                var e = Pe(t, n), r = e.left;
                e = e.top;
                var a = De(t, n);
                return [r, e, a[0], a[1]]
            }

            function De(t, n) {
                var e = Lr(t, "document");
                return n === Xe(t) || n === e.documentElement ? Ge(t) : (e = Be(n)) ? [e.width, e.height] : [n.offsetWidth, n.offsetHeight]
            }

            function Pe(t, n) {
                var e = n, r = Lr(t, "document"), a = Le(e);
                if (!e || !e.ownerDocument || "PARAM" === a || e === Xe(t) || e === r.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (r = e.getBoundingClientRect && Be(e)) return e = He(t), {
                    left: Math.round(r.left + e.x),
                    top: Math.round(r.top + e.y)
                };
                for (a = r = 0; e;) r += e.offsetLeft, a += e.offsetTop, e = e.offsetParent;
                return {left: r, top: a}
            }

            function Ie(t, n, e) {
                if (!(n && n.Element && n.Element.prototype && n.document && e)) return null;
                if (n.Element.prototype.closest && ua("closest", n.Element.prototype.closest) && e.closest) return e.closest(t);
                var r = ku(n);
                if (r) {
                    for (; e && 1 === e.nodeType && !r.call(e, t);) e = e.parentElement || e.parentNode;
                    return e && 1 === e.nodeType ? e : null
                }
                if (n.document.querySelectorAll && ua("querySelectorAll", Lr(n, "Element.prototype.querySelectorAll"))) {
                    for (t = sr((n.document || n.ownerDocument).querySelectorAll(t)); e && 1 === e.nodeType && -1 === xr(n)(e, t);) e = e.parentElement || e.parentNode;
                    return e && 1 === e.nodeType ? e : null
                }
                return null
            }

            function Ne(t) {
                return Ru(t) && !ii(wo(t.type), Lu) ? Pu(t) ? !t.checked : !t.value : Mu(t) ? !t.value : !Du(t) || 0 > t.selectedIndex
            }

            function Le(t) {
                if (t) try {
                    var n = t.nodeName;
                    if (aa(n)) return n;
                    if (aa(n = t.tagName)) return n
                } catch (t) {
                }
            }

            function Oe(t, n) {
                var e = t.document.getElementsByTagName("form");
                return xr(t)(n, sr(e))
            }

            function Fe(t, n, e) {
                e = yr("dispatchEvent", e || t.document);
                var r = null, a = Lr(t, "Event.prototype.constructor");
                if (a && (ua("(Event|Object|constructor)", a) || Si(t) && "[object Event]" == "" + a)) try {
                    r = new t.Event(n)
                } catch (e) {
                    if ((t = yr("createEvent", Lr(t, "document"))) && zr(t)) {
                        try {
                            r = t(n)
                        } catch (t) {
                        }
                        r && r.initEvent && r.initEvent(n, !1, !1)
                    }
                }
                r && e(r)
            }

            function Be(t) {
                try {
                    return t.getBoundingClientRect && t.getBoundingClientRect()
                } catch (t) {
                    return "object" == typeof t && null !== t && 16389 === (t.Ib && 65535 & t.Ib) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Ge(t) {
                var n = je(t);
                return t = Ue(t), [Math.max(n.scrollWidth, t[0]), Math.max(n.scrollHeight, t[1])]
            }

            function He(t) {
                var n = Xe(t), e = Lr(t, "document");
                return {
                    x: t.pageXOffset || e.documentElement && e.documentElement.scrollLeft || n && n.scrollLeft || 0,
                    y: t.pageYOffset || e.documentElement && e.documentElement.scrollTop || n && n.scrollTop || 0
                }
            }

            function Ue(t) {
                var n = Lr(t, "visualViewport.width"), e = Lr(t, "visualViewport.height"),
                    r = Lr(t, "visualViewport.scale");
                return (n = qr(n) || qr(e) ? null : [Math.floor(n), Math.floor(e), r]) ? (e = n[2], [t.Math.round(n[0] * e), t.Math.round(n[1] * e)]) : [Lr(n = je(t), "clientWidth") || t.innerWidth, Lr(n, "clientHeight") || t.innerHeight]
            }

            function je(t) {
                var n = Lr(t, "document") || {}, e = n.documentElement;
                return "CSS1Compat" === n.compatMode ? e : Xe(t) || e
            }

            function Xe(t) {
                t = Lr(t, "document");
                try {
                    return t.getElementsByTagName("body")[0]
                } catch (t) {
                    return null
                }
            }

            function qe(t, n) {
                try {
                    return new RegExp("(?:^|\\s)" + t + "(?:\\s|$)").test(n.className)
                } catch (t) {
                    return !1
                }
            }

            function ze(t) {
                var n;
                try {
                    (n = t.target || t.srcElement) && (!n.ownerDocument && n.documentElement ? n = n.documentElement : n.ownerDocument !== document && (n = null))
                } catch (t) {
                }
                return n
            }

            function Ve(t) {
                var n = t && t.parentNode;
                n && n.removeChild(t)
            }

            function We(t) {
                return !qr(t) && (3 === (t = t.nodeType) || 8 === t)
            }

            function Ye(t) {
                var n;
                return (n = Lr(t, "XMLHttpRequest")) && (n = "withCredentials" in new t.XMLHttpRequest) && (n = !(n = !!(Su.test(t.location.host) && t.opera && zr(t.opera.version) && ("string" == typeof (n = t.opera.version()) && "12" === n.split(".")[0])))), !!n && Tu(t)
            }

            function Ke(t, n, e, r, a, o, i, u) {
                if (4 === n.readyState) if (200 === n.status || a || i(e), a) 200 === n.status ? o(n.responseText) : i(Eu("http." + n.status + ".st." + n.statusText + ".rt." + ("" + n.responseText).substring(0, 50))); else {
                    if (a = null, r) try {
                        (a = wa(t, n.responseText)) || i(e)
                    } catch (t) {
                        i(e)
                    }
                    o(a)
                }
                return u
            }

            function Je(t, n, e) {
                return (e = Ze(e)) && (t += "?" + e), n.L && (t += (e ? "&" : "?") + n.L), t
            }

            function $e(t, n) {
                try {
                    return t.JSON.stringify(n)
                } catch (t) {
                    return null
                }
            }

            function Ze(t) {
                return t ? Ir(Fo, Or((function (t, n) {
                    var e = n[0], r = n[1];
                    return To(r) || qr(r) || t.push(e + "=" + tr(r)), t
                }), []), _o("&"))(t) : ""
            }

            function Qe(t) {
                var n = "";
                try {
                    n = decodeURIComponent(t)
                } catch (t) {
                }
                return n
            }

            function tr(t) {
                try {
                    return encodeURIComponent(t)
                } catch (t) {
                }
                return t = yo("", Vo((function (t) {
                    return 55296 >= t.charCodeAt(0)
                }), t.split(""))), encodeURIComponent(t)
            }

            function nr() {
                var t = $r(arguments);
                return pr(er(t))
            }

            function er(t) {
                var n = "";
                return Pr(t) ? n = yo(".", t) : aa(t) && (n = t), Eu("err.kn(" + Gi.Aa + ")" + n)
            }

            function rr(t) {
                this.message = t
            }

            function ar(t, n, e, r, a) {
                var o = t.addEventListener && t.removeEventListener, i = !o && t.attachEvent && t.detachEvent;
                (o || i) && (a = a ? o ? "removeEventListener" : "detachEvent" : o ? "addEventListener" : "attachEvent", o ? t[a](n, e, r) : t[a]("on" + n, e))
            }

            function or(t) {
                return Do((function (n, e) {
                    var r = Lr(t, "location." + e);
                    return n[e] = r ? "" + r : "", n
                }), {}, Ji)
            }

            function ir(t, n) {
                var e = zi(t), r = Lr(n, "__ym.turbo_page"), a = Lr(n, "__ym.turbo_page_id");
                qi[e] || (qi[e] = {}), (r || a) && (qi[e].hd = r, qi[e].jd = a)
            }

            function ur(t) {
                return Ko("prerender", ni(Gr(Lr(t, "document"), Lr), ["webkitVisibilityState", "visibilityState"]))
            }

            function cr(t, n, e) {
                var r = To(e);
                return To(n) && r ? (r = 1, n = 1073741824) : r ? r = 1 : (r = n, n = e), t.Math.floor(t.Math.random() * (n - r)) + r
            }

            function fr(t, n) {
                return t.isFinite(n) && !t.isNaN(n) && "[object Number]" === oa(n)
            }

            function lr(t, n) {
                return ei(Ir(Tr, Br("push", t)), n), t
            }

            function sr(t) {
                return t ? Pr(t) ? t : go ? go(t) : "number" == typeof t.length && 0 <= t.length ? Zr(t) : [] : []
            }

            function dr(t, n, e) {
                return e ? t : n
            }

            function vr(t, n, e) {
                try {
                    if (zr(n)) {
                        var r = $r(arguments).slice(3);
                        qr(e) ? n.apply(void 0, r) : Ao.apply(void 0, la([n, e], r))()
                    }
                } catch (n) {
                    hr(t, Gr(n, pr), 0)
                }
            }

            function pr(t) {
                throw t
            }

            function hr(t, n, e) {
                return yr("setTimeout", t)(n, e)
            }

            function mr(t, n) {
                return yr("clearTimeout", t)(n)
            }

            function gr() {
                return []
            }

            function br() {
                return {}
            }

            function yr(t, n) {
                var e = Lr(n, t), r = Lr(n, "constructor.prototype." + t) || e;
                try {
                    if (r && r.apply) return function () {
                        return r.apply(n, arguments)
                    }
                } catch (t) {
                    return e
                }
                return r
            }

            function wr(t, n) {
                return function () {
                    var e = $r(arguments), r = e[0];
                    e = e.slice(1);
                    var a = Xo(r), o = a.b("m760", {}), i = Lr(o, t);
                    return i || (i = _r(n), o[t] = i, a.l("m760", o)), i.apply(void 0, la([r], e))
                }
            }

            function Er(t, n) {
                return n ? t(n) : t()
            }

            function _r(t, n) {
                var e = [], r = [], a = n || Tr;
                return function () {
                    var n = $r(arguments), o = a.apply(void 0, n), i = Uo(o, r);
                    return -1 !== i ? e[i] : (n = t.apply(void 0, n), e.push(n), r.push(o), n)
                }
            }

            function Cr(t) {
                return !t
            }

            function Sr(t, n) {
                return n
            }

            function Tr(t) {
                return t
            }

            function xr(t) {
                if (lo) return lo;
                var n = !1;
                try {
                    n = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (t) {
                }
                var e = t.Array && t.Array.prototype && ia(t.Array.prototype.indexOf, "indexOf");
                return lo = n && e ? function (t, n) {
                    return e.call(n, t)
                } : Ar
            }

            function Ar(t, n) {
                for (var e = 0; e < n.length; e += 1) if (n[e] === t) return e;
                return -1
            }

            function kr(t) {
                var n = (t = t.Ya = t.Ya || {})._metrika = t._metrika || {};
                return {
                    ma: function (t, e) {
                        return Oo.call(n, t) || (n[t] = e), this
                    }, l: function (t, e) {
                        return n[t] = e, this
                    }, b: function (t, e) {
                        var r = n[t];
                        return Oo.call(n, t) || To(e) ? r : e
                    }
                }
            }

            function Rr(t) {
                var n, e = [];
                for (n in t) Dr(t, n) && e.push(n);
                return e
            }

            function Mr(t, n) {
                return jr((function (n, e, r) {
                    return t(e, r) && n.push(e), n
                }), [], n)
            }

            function Dr(t, n) {
                return !qr(t) && Oo.call(t, n)
            }

            function Pr(t) {
                return fo || (fo = ia(Array.isArray, "isArray")) || (fo = Lo), fo(t)
            }

            function Ir() {
                var t = $r(arguments), n = t.shift();
                return function () {
                    var e = n.apply(void 0, arguments);
                    return Do(Jr, e, t)
                }
            }

            function Nr(t, n) {
                return void 0 === n && (n = {}), !t || 1 > t.length || Do((function (n, e, r) {
                    return r === t.length - 1 ? n : (r === t.length - 2 ? n[e] = t[r + 1] : n[e] || (n[e] = {}), n[e])
                }), n, t), n
            }

            function Lr(t, n) {
                return t ? Do((function (t, n) {
                    if (qr(t)) return t;
                    try {
                        return t[n]
                    } catch (t) {
                    }
                    return null
                }), t, n.split(".")) : null
            }

            function Or(t, n) {
                return Hr([t, n], Do)
            }

            function Fr(t) {
                return Br("test", t)
            }

            function Br(t, n) {
                return Ao(n[t], n)
            }

            function Gr(t, n) {
                return Hr([t], n)
            }

            function Hr(t, n) {
                return Ao.apply(void 0, la([n, null], t))
            }

            function Ur(t, n, e) {
                void 0 === n && (n = []), e = e || {};
                var r, a = n.length, o = t;
                return zr(o) && (e[o = "d"] = t), a ? 1 === a ? r = e[o](n[0]) : 2 === a ? r = e[o](n[0], n[1]) : 3 === a ? r = e[o](n[0], n[1], n[2]) : 4 === a && (r = e[o](n[0], n[1], n[2], n[3])) : r = e[o](), r
            }

            function jr(t, n, e) {
                for (var r = 0, a = e.length; r < a;) n = t(n, e[r], r), r += 1;
                return n
            }

            function Xr(t) {
                return !So(t) && !To(t) && "[object Object]" === oa(t)
            }

            function qr(t) {
                return To(t) || So(t)
            }

            function zr(t) {
                return "function" == typeof t
            }

            function Vr(t) {
                return Wr((function (n, e) {
                    return t(e, n)
                }))
            }

            function Wr() {
                var t = $r(arguments), n = t.shift();
                return function () {
                    var e = $r(arguments);
                    return n.length > e.length + t.length ? Wr.apply(void 0, la([n], t, e)) : n.apply(void 0, la(t, e))
                }
            }

            function Yr(t) {
                return function (n) {
                    return function (e) {
                        return t(e, n)
                    }
                }
            }

            function Kr(t) {
                return function (n) {
                    return function (e) {
                        return t(n, e)
                    }
                }
            }

            function Jr(t, n) {
                return n(t)
            }

            function $r(t) {
                if (go) try {
                    return go(t)
                } catch (t) {
                }
                return Zr(t)
            }

            function Zr(t) {
                for (var n = t.length, e = [], r = 0; r < n; r += 1) e.push(t[r]);
                return e
            }

            function Qr(t, n) {
                return (Qr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, n) {
                    t.__proto__ = n
                } || function (t, n) {
                    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                })(t, n)
            }

            function ta(t) {
                return t.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function na(t, n) {
                if (t) {
                    var e = mo ? mo.call(t) : ("" + t).replace(ho, "");
                    return n && e.length > n ? e.substr(0, n) : e
                }
                return ""
            }

            function ea(t) {
                return "" + t
            }

            function ra(t, n) {
                var e;
                if (!(e = !t)) {
                    if (po) e = po.call(t, n); else t:{
                        e = 0;
                        for (var r = t.length - n.length, a = 0; a < t.length; a += 1) {
                            if ((e = t[a] === n[e] ? e + 1 : 0) === n.length) {
                                e = a - n.length + 1;
                                break t
                            }
                            if (!e && a > r) break
                        }
                        e = -1
                    }
                    e = -1 === e
                }
                return !e
            }

            function aa(t) {
                return "string" == typeof t
            }

            function oa(t) {
                return Object.prototype.toString.call(t)
            }

            function ia(t, n) {
                return ua(n, t) && t
            }

            function ua(t, n) {
                var e = ca(t, n);
                return n && !e && vo.push([t, n]), e
            }

            function ca(t, n) {
                if (!n || "function" != typeof n) return !1;
                try {
                    var e = "" + n
                } catch (t) {
                    return !1
                }
                var r = e.length;
                if (r > 35 + t.length) return !1;
                for (var a = r - 13, o = 0, i = 8; i < r; i += 1) {
                    if (12 === (o = "[native code]"[o] === e[i] || 7 === o && "-" === e[i] ? o + 1 : 0)) return !0;
                    if (!o && i > a) break
                }
                return !1
            }

            function fa() {
            }

            function la() {
                for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
                t = Array(t);
                var r = 0;
                for (n = 0; n < e; n++) for (var a = arguments[n], o = 0, i = a.length; o < i; o++, r++) t[r] = a[o];
                return t
            }

            function sa(t) {
                for (var n = 2166136261, e = (t = "" + t).length, r = 0; r < e; r += 1) n ^= t.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                return n >>> 0
            }

            function da() {
            }

            function va(t) {
                if (!(this instanceof va)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this.X = 0, this.xb = !1, this.$ = void 0, this.na = [], ya(t, this)
            }

            function pa(t, n) {
                for (; 3 === t.X;) t = t.$;
                0 === t.X ? t.na.push(n) : (t.xb = !0, va.yb((function () {
                    var e = 1 === t.X ? n.Yc : n.Zc;
                    if (null === e) (1 === t.X ? ha : ma)(n.ca, t.$); else {
                        try {
                            var r = e(t.$)
                        } catch (t) {
                            return void ma(n.ca, t)
                        }
                        ha(n.ca, r)
                    }
                })))
            }

            function ha(t, n) {
                try {
                    if (n === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                        var e = n.then;
                        if (n instanceof va) return t.X = 3, t.$ = n, void ga(t);
                        if ("function" == typeof e) return void ya(function (t, n) {
                            return function () {
                                t.apply(n, arguments)
                            }
                        }(e, n), t)
                    }
                    t.X = 1, t.$ = n, ga(t)
                } catch (n) {
                    ma(t, n)
                }
            }

            function ma(t, n) {
                t.X = 2, t.$ = n, ga(t)
            }

            function ga(t) {
                2 === t.X && 0 === t.na.length && va.yb((function () {
                    t.xb || va.rc(t.$)
                }));
                for (var n = 0, e = t.na.length; n < e; n++) pa(t, t.na[n]);
                t.na = null
            }

            function ba(t, n, e) {
                this.Yc = "function" == typeof t ? t : null, this.Zc = "function" == typeof n ? n : null, this.ca = e
            }

            function ya(t, n) {
                var e = !1;
                try {
                    t((function (t) {
                        e || (e = !0, ha(n, t))
                    }), (function (t) {
                        e || (e = !0, ma(n, t))
                    }))
                } catch (t) {
                    e || (e = !0, ma(n, t))
                }
            }

            function wa(t, n) {
                if (!n) return null;
                try {
                    return t.JSON.parse(n)
                } catch (t) {
                    return null
                }
            }

            function Ea(t, n, e, r, a) {
                return void 0 === a && (a = !1), Wn(t, n, "", -100, e, r, a)
            }

            function _a(t, n, e) {
                void 0 === n && (n = "_ym_"), void 0 === e && (e = "");
                var r = bc(t), a = 1 === (r || "").split(".").length ? r : "." + r, o = e ? "_" + e : "";
                return {
                    Za: function (e, r, i) {
                        return Ea(t, "" + n + e + o, r || a, i), this
                    }, b: function (e) {
                        return Yn(t, "" + n + e + o)
                    }, l: function (e, r, i, u, c) {
                        return Wn(t, "" + n + e + o, r, i, u || a, c), this
                    }
                }
            }

            function Ca(t, n) {
                var e = Ic(t);
                return e ? (e.href = n, {
                    protocol: e.protocol,
                    host: e.host,
                    port: e.port,
                    hostname: e.hostname,
                    hash: e.hash,
                    search: e.search,
                    query: e.search.replace(/^\?/, ""),
                    pathname: e.pathname || "/",
                    path: (e.pathname || "/") + e.search,
                    href: e.href
                }) : {}
            }

            function Sa(t, n) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                var e = [0, 0, 0, 0];
                return e[3] += t[3] * n[3], e[2] += e[3] >>> 16, e[3] &= 65535, e[2] += t[2] * n[3], e[1] += e[2] >>> 16, e[2] &= 65535, e[2] += t[3] * n[2], e[1] += e[2] >>> 16, e[2] &= 65535, e[1] += t[1] * n[3], e[0] += e[1] >>> 16, e[1] &= 65535, e[1] += t[2] * n[2], e[0] += e[1] >>> 16, e[1] &= 65535, e[1] += t[3] * n[1], e[0] += e[1] >>> 16, e[1] &= 65535, e[0] += t[0] * n[3] + t[1] * n[2] + t[2] * n[1] + t[3] * n[0], e[0] &= 65535, [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            }

            function Ta(t, n) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                var e = [0, 0, 0, 0];
                return e[3] += t[3] + n[3], e[2] += e[3] >>> 16, e[3] &= 65535, e[2] += t[2] + n[2], e[1] += e[2] >>> 16, e[2] &= 65535, e[1] += t[1] + n[1], e[0] += e[1] >>> 16, e[1] &= 65535, e[0] += t[0] + n[0], e[0] &= 65535, [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            }

            function xa(t, n) {
                return 32 === (n %= 64) ? [t[1], t[0]] : 32 > n ? [t[0] << n | t[1] >>> 32 - n, t[1] << n | t[0] >>> 32 - n] : (n -= 32, [t[1] << n | t[0] >>> 32 - n, t[0] << n | t[1] >>> 32 - n])
            }

            function Aa(t, n) {
                return 0 === (n %= 64) ? t : 32 > n ? [t[0] << n | t[1] >>> 32 - n, t[1] << n] : [t[1] << n - 32, 0]
            }

            function ka(t, n) {
                return [t[0] ^ n[0], t[1] ^ n[1]]
            }

            function Ra(t) {
                return t = ka(t, [0, t[0] >>> 1]), t = ka(t = Sa(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), ka(t = Sa(t, [3301882366, 444984403]), [0, t[0] >>> 1])
            }

            function Ma(t, n) {
                void 0 === n && (n = 210);
                var e = t || "", r = n || 0, a = e.length - e.length % 16;
                r = {H: [0, r], J: [0, r]};
                for (var o = 0; o < a; o += 16) {
                    var i = r,
                        u = [255 & t.charCodeAt(o + 4) | (255 & t.charCodeAt(o + 5)) << 8 | (255 & t.charCodeAt(o + 6)) << 16 | (255 & t.charCodeAt(o + 7)) << 24, 255 & t.charCodeAt(o) | (255 & t.charCodeAt(o + 1)) << 8 | (255 & t.charCodeAt(o + 2)) << 16 | (255 & t.charCodeAt(o + 3)) << 24],
                        c = [255 & t.charCodeAt(o + 12) | (255 & t.charCodeAt(o + 13)) << 8 | (255 & t.charCodeAt(o + 14)) << 16 | (255 & t.charCodeAt(o + 15)) << 24, 255 & t.charCodeAt(o + 8) | (255 & t.charCodeAt(o + 9)) << 8 | (255 & t.charCodeAt(o + 10)) << 16 | (255 & t.charCodeAt(o + 11)) << 24];
                    u = Sa(u, Cf), u = Sa(u = xa(u, 31), Sf), i.H = ka(i.H, u), i.H = xa(i.H, 27), i.H = Ta(i.H, i.J), i.H = Ta(Sa(i.H, [0, 5]), [0, 1390208809]), c = Sa(c, Sf), c = Sa(c = xa(c, 33), Cf), i.J = ka(i.J, c), i.J = xa(i.J, 31), i.J = Ta(i.J, i.H), i.J = Ta(Sa(i.J, [0, 5]), [0, 944331445])
                }
                switch (a = e.length % 16, o = e.length - a, i = [0, 0], u = [0, 0], a) {
                    case 15:
                        u = ka(u, Aa([0, e.charCodeAt(o + 14)], 48));
                    case 14:
                        u = ka(u, Aa([0, e.charCodeAt(o + 13)], 40));
                    case 13:
                        u = ka(u, Aa([0, e.charCodeAt(o + 12)], 32));
                    case 12:
                        u = ka(u, Aa([0, e.charCodeAt(o + 11)], 24));
                    case 11:
                        u = ka(u, Aa([0, e.charCodeAt(o + 10)], 16));
                    case 10:
                        u = ka(u, Aa([0, e.charCodeAt(o + 9)], 8));
                    case 9:
                        u = Sa(u = ka(u, [0, e.charCodeAt(o + 8)]), Sf), u = Sa(u = xa(u, 33), Cf), r.J = ka(r.J, u);
                    case 8:
                        i = ka(i, Aa([0, e.charCodeAt(o + 7)], 56));
                    case 7:
                        i = ka(i, Aa([0, e.charCodeAt(o + 6)], 48));
                    case 6:
                        i = ka(i, Aa([0, e.charCodeAt(o + 5)], 40));
                    case 5:
                        i = ka(i, Aa([0, e.charCodeAt(o + 4)], 32));
                    case 4:
                        i = ka(i, Aa([0, e.charCodeAt(o + 3)], 24));
                    case 3:
                        i = ka(i, Aa([0, e.charCodeAt(o + 2)], 16));
                    case 2:
                        i = ka(i, Aa([0, e.charCodeAt(o + 1)], 8));
                    case 1:
                        i = Sa(i = ka(i, [0, e.charCodeAt(o)]), Cf), i = Sa(i = xa(i, 31), Sf), r.H = ka(r.H, i)
                }
                return r.H = ka(r.H, [0, e.length]), r.J = ka(r.J, [0, e.length]), r.H = Ta(r.H, r.J), r.J = Ta(r.J, r.H), r.H = Ra(r.H), r.J = Ra(r.J), r.H = Ta(r.H, r.J), r.J = Ta(r.J, r.H), ("00000000" + (r.H[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.H[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.J[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.J[1] >>> 0).toString(16)).slice(-8)
            }

            function Da(t) {
                return (t = or(t).hash.split("#")[1]) ? t.split("?")[0] : ""
            }

            function Pa(t, n) {
                var e = Da(t);
                return xl = function (t, n, e, r) {
                    return t.setInterval(fe(t, "i.err." + (r || "def"), n), e)
                }(t, (function () {
                    var r = Da(t);
                    r !== e && (n(), e = r)
                }), 200, "t.h"), Ao(ae, null, t, xl)
            }

            function Ia(t, n, e) {
                var r, a, o = n.M, i = n.ub, u = n.Ga, c = Xo(t), f = Yi(((r = {}).wh = "1", r.pv = "1", r));
                Vi(o) && t.qc && t.qc.ud && f.l("ad", "1"), i && f.l("ut", "1"), o = c.b("lastReferrer"), r = or(t).href, e(u = {
                    D: (a = {}, a["page-url"] = u || r, a["page-ref"] = o, a),
                    F: f
                }, n).catch(fe(t, "g.s")), c.l("lastReferrer", r)
            }

            function Na(t, n) {
                var e, r = ze(n), a = Gi.Va, o = kr(t);
                if (r && qe("ym-advanced-informer", r)) {
                    var i = o.b("ifc", 0) + 1;
                    o.l("ifc", i), i = r.getAttribute("data-lang");
                    var u = si(r.getAttribute("data-cid") || "");
                    (u || 0 === u) && ((a = Lr(t, "Ya." + a + ".informer")) ? a(((e = {}).i = r, e.id = u, e.lang = i, e)) : o.l("ib", !0), (e = n || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1)
                }
            }

            function La(t, n, e) {
                return t = n && (ra(n.className, "ym-disable-keys") || ra(n.className, "-metrika-nokeys")), e && n ? t || !!function (t, n) {
                    var e = Pr(t) ? t : [t];
                    if ((n = n || document).querySelectorAll) {
                        var r = yo(", ", ni((function (t) {
                            return "." + t
                        }), e));
                        return sr(n.querySelectorAll(r))
                    }
                    return n.getElementsByClassName ? ri(Ir(Br("getElementsByClassName", n), sr), e) : (r = n.getElementsByTagName("*"), e = "(" + yo("|", e) + ")", Vo(Gr(e, qe), sr(r)))
                }(["ym-disable-keys", "-metrika-nokeys"], n).length : t
            }

            function Oa(t, n) {
                return !!Ru(n) && ("password" === n.type || n.name && Ko(n.name.toLowerCase(), Ds) || n.id && Ko(n.id.toLowerCase(), Ds))
            }

            function Fa(t, n) {
                var e = Math.max(0, Math.min(n, 65535));
                lr(t, [e >> 8, 255 & e])
            }

            function Ba(t, n) {
                lr(t, [255 & n])
            }

            function Ga(t, n, e) {
                return Ba(n, e), !1
            }

            function Ha(t, n) {
                for (var e = Math.max(0, 0 | n); 127 < e;) lr(t, [127 & e | 128]), e >>= 7;
                lr(t, [e])
            }

            function Ua(t, n) {
                Ha(t, n.length);
                for (var e = 0; e < n.length; e += 1) Ha(t, n.charCodeAt(e))
            }

            function ja(t, n) {
                var e = n;
                255 < e.length && (e = e.substr(0, 255)), t.push(e.length);
                for (var r = 0; r < e.length; r += 1) Fa(t, e.charCodeAt(r))
            }

            function Xa(t, n, e, r, a, o, i) {
                var u, c = De(t, r), f = c[0];
                for (c = c[1]; r && (!f || !c);) (r = Re(t, r)) && (f = (c = De(t, r))[0], c = c[1]);
                return r ? !(f = r[Ss]) || 0 > f ? [] : (c = (u = {}, u.mousemove = 2, u.click = 32, u.dblclick = 33, u.mousedown = 4, u.mouseup = 30, u.touch = 12, u)[e]) ? (u = [], r = Pe(t, r), Ga(0, u, c) ? [] : (Ha(u, n), Ha(u, f), Ha(u, Math.max(0, a[0] - r.left)), Ha(u, Math.max(0, a[1] - r.top)), /^mouse(up|down)|click$/.test(e) && Ba(u, 2 > (t = o || i) ? 1 : t === (o ? 2 : 4) ? 4 : 2), u)) : [] : []
            }

            function qa(t, n, e) {
                void 0 === e && (e = []);
                for (var r = []; n && !ct(t, n, e); n = Re(t, n)) r.push(n);
                return ei((function (n) {
                    Ts.Wa += 1;
                    var r = Ts.Wa;
                    n[Ss] = r, Ts[r] = {}, r = function (t, n) {
                        var e = Le(n);
                        if (!e) return n[Ss] = -1, null;
                        var r = +n[Ss];
                        if (!isFinite(r) || 0 >= r) return null;
                        if (n.attributes) for (var a = n; a;) {
                            if (a.attributes.Bd) return null;
                            a = a.parentElement
                        }
                        a = 64;
                        var o = Re(t, n), i = o && o[Ss] ? o[Ss] : 0;
                        0 > i && (i = 0), e = (e || "").toUpperCase();
                        var u = Is()[e];
                        u || (a |= 2);
                        var c = ke(t, n);
                        c || (a |= 4);
                        var f = Me(t, n);
                        return (o = o ? Me(t, o) : null) && f[0] === o[0] && f[1] === o[1] && f[2] === o[2] && f[3] === o[3] && (a |= 8), Ts[r].Lb = f[0] + "x" + f[1], Ts[r].size = f[2] + "x" + f[3], n.id && "string" == typeof n.id && (a |= 32), Ga(0, o = [], 1) ? null : (Ha(o, r), Ba(o, a), Ha(o, i), u ? Ba(o, u) : ja(o, e), c && Ha(o, c), 8 & a || (Ha(o, f[0]), Ha(o, f[1]), Ha(o, f[2]), Ha(o, f[3])), 32 & a && ja(o, n.id), Ba(o, 0), o)
                    }(t, n), n = function (t, n) {
                        var e = n[Ss];
                        if (!e || 0 > e || !Iu(n) || !n.form || vt(0, n.form)) return [];
                        var r = Oe(t, n.form);
                        if (0 > r) return [];
                        if (Ru(n)) {
                            var a = {
                                text: 0,
                                color: 0,
                                Da: 0,
                                Fd: 0,
                                "datetime-local": 0,
                                email: 0,
                                Ib: 0,
                                Rd: 0,
                                search: 0,
                                Td: 0,
                                time: 0,
                                url: 0,
                                month: 0,
                                Vd: 0,
                                password: 2,
                                Qd: 3,
                                Cd: 4,
                                file: 6,
                                image: 7
                            };
                            a = a[n.type]
                        } else {
                            a = {yd: 1, zd: 5};
                            var o = Le(n);
                            a = To(o) ? "" : a[o]
                        }
                        if ("number" != typeof a) return [];
                        o = -1;
                        for (var i = n.form.elements, u = i.length, c = 0, f = 0; c < u; c += 1) if (i[c].name === n.name) {
                            if (i[c] === n) {
                                o = f;
                                break
                            }
                            f += 1
                        }
                        return 0 > o || Ga(0, i = [], 7) ? [] : (Ha(i, e), Ha(i, r), Ha(i, a), Ua(i, n.name || ""), Ha(i, o), i)
                    }(t, n), r && n && (lr(e, r), lr(e, n))
                }), li(r)), e
            }

            function za(t) {
                var n = t.O;
                if (!Os || n && !n.fromElement) return ut(t)
            }

            function Va(t) {
                var n = t.O;
                if (n && !n.toElement) return it(t)
            }

            function Wa(t) {
                var n = ze(t.O);
                if (n && Nu(n)) {
                    var e = ot(t, n), r = Nn(t.o), a = [];
                    return Ga(t.o, a, 17) ? t = [] : (Ha(a, r), Ha(a, n[Ss]), t = a), la(e, t)
                }
            }

            function Ya(t) {
                var n = t.o, e = t.O.target;
                if (e && Nu(e)) {
                    n = qa(n, e);
                    var r = Nn(t.o), a = [];
                    return Ga(t.o, a, 18) ? t = [] : (Ha(a, r), Ha(a, e[Ss]), t = a), la(n, t)
                }
            }

            function Ka(t) {
                var n = t.o, e = ze(t.O);
                if (!e || Oa(0, e) || La(n, e)) return [];
                if (Iu(e)) {
                    var r = Xo(n).b("isEU"), a = ft(n, e, r);
                    if (r = ft(n, e), Pu(e)) var o = e.checked; else o = e.value, o = a ? yo("", Ls(o.split(""))) : o;
                    n = qa(n, e), a = Nn(t.o);
                    var i = [];
                    return Ga(t.o, i, 39) ? t = [] : (Ha(i, a), Ha(i, e[Ss]), ja(i, String(o)), Ba(i, r ? 1 : 0), t = i), la(n, t)
                }
            }

            function Ja(t) {
                var n = t.o, e = t.O, r = ze(e);
                if (!r || "SCROLLBAR" === r.nodeName) return [];
                var a = [], o = Gr(a, lr);
                return r && Nu(r) ? o(ot(t, r)) : o(qa(n, r)), o = gt(n, e), la(a, Xa(n, Nn(t.o), e.type, r, [o.x, o.y], e.which, e.button))
            }

            function $a(t) {
                return la(Ja(t), function (t) {
                    var n = null, e = t.o, r = e.document;
                    if (e.getSelection) {
                        r = void 0;
                        try {
                            r = e.getSelection()
                        } catch (t) {
                            return []
                        }
                        if (So(r)) return [];
                        var a = "" + r;
                        n = r.anchorNode
                    } else r.selection && r.selection.createRange && (a = (r = r.selection.createRange()).text, n = r.parentElement());
                    if ("string" != typeof a) return [];
                    try {
                        for (; n && 1 !== n.nodeType;) n = n.parentNode
                    } catch (t) {
                        return []
                    }
                    if (!n) return [];
                    r = ft(e, n) || La(e, n, !0), n = n.getElementsByTagName("*");
                    for (var o = 0; o < n.length && !r;) r = ft(e, r = n[o]) || La(e, r, !0), o += 1;
                    return a !== Fs ? (Fs = a, r = r ? yo("", Ls(a.split(""))) : a, a = Nn(t.o), 0 === r.length ? r = e = "" : 100 >= r.length ? (e = r, r = "") : 200 >= r.length ? (e = r.substr(0, 100), r = r.substr(100)) : (e = r.substr(0, 97), r = r.substr(r.length - 97)), n = [], Ga(t.o, n, 29) ? t = [] : (Ha(n, a), Ua(n, e), Ua(n, r), t = n), t) : void 0
                }(t) || [])
            }

            function Za(t) {
                return (t.shiftKey ? 2 : 0) | (t.ctrlKey ? 4 : 0) | (t.altKey ? 1 : 0) | (t.metaKey ? 8 : 0) | (t.ctrlKey || t.altKey ? 16 : 0)
            }

            function Qa(t) {
                var n = [];
                return Bs || (Bs = !0, Fs && n.push.apply(n, function (t, n) {
                    var e = [];
                    return Ga(0, e, 27) ? [] : (Ha(e, n), e)
                }(t.o, Nn(t.o))), bn(t.o, (function () {
                    Bs = !1
                }), "fv.c")), n
            }

            function to(t, n, e, r) {
                var a = ze(n);
                if (!a || lt(t, a)) return [];
                var o = a && qe("ym-record-keys", a), i = st(a);
                n = ft(t, a);
                var u = Xo(t);
                return !o && (i && u.b("isEU") || La(t, a)) ? t = [] : (o = qa(t, a), u = Nn(t), Ga(0, i = [], 38) ? t = [] : (Ha(i, u), Fa(i, e), Ba(i, r), (!(t = a[Ss]) || 0 > t) && (t = 0), Ha(i, t), Ba(i, n ? 1 : 0), t = i), t = la(o, t)), t
            }

            function no(t) {
                var n = t.o, e = t.O, r = e.keyCode, a = Za(e), o = [], i = Gr(o, lr);
                return ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[r] || 112 <= r && 123 >= r || 96 <= r && 105 >= r || 16 & a) && (19 === r && 4 == (-17 & a) && (r = 144), i(to(n, e, r, 16 | a)), Gs = !1, bn(n, (function () {
                    Gs = !0
                }), "fv.kd"), !(67 === r && 4 & a) || 1 & a || 2 & a || i(Qa(t))), o
            }

            function eo(t) {
                var n = t.o;
                t = t.O;
                var e = [];
                return Gs && !Hs && 0 !== t.which && (e.push.apply(e, to(n, t, t.charCode || t.keyCode, Za(t))), Hs = !0, bn(n, (function () {
                    Hs = !1
                }), "fv.kp")), e
            }

            function ro(t) {
                var n = t.o, e = ze(t.O);
                if (!e || vt(0, e)) return [];
                var r = [];
                if ("FORM" === e.nodeName) {
                    for (var a = e.elements, o = 0; o < a.length; o += 1) Ne(a[o]) || r.push.apply(r, qa(n, a[o]));
                    r.push.apply(r, function (t, n, e) {
                        var r = Oe(t, e);
                        if (0 > r) return [];
                        var a = e.elements, o = a.length;
                        e = [];
                        for (var i = 0; i < o; i += 1) if (!Ne(a[i])) {
                            var u = a[i][Ss];
                            u && 0 < u && e.push(u)
                        }
                        if (Ga(0, a = [], 11)) return [];
                        for (Ha(a, n), Ha(a, r), Ha(a, e.length), t = 0; t < e.length; t += 1) Ha(a, e[t]);
                        return a
                    }(n, Nn(t.o), e))
                }
                return r
            }

            function ao(t) {
                var n = t.flush;
                "BODY" === Le(t = ze(t.O)) && n()
            }

            function oo(t, n, e, r) {
                return function () {
                    var e = jt(t, n), a = $r(arguments);
                    if (e) return r.apply(void 0, a)
                }
            }

            function io(t, n, e, r) {
                var a = Hc[e];
                return a ? function () {
                    var n = $r(arguments);
                    try {
                        var e = r.apply(void 0, n), o = Xo(t);
                        o.ma("mt", {});
                        var i = o.b("mt"), u = i[a];
                        i[a] = u ? u + 1 : 1
                    } catch (t) {
                        pr(t)
                    }
                    return e
                } : r
            }

            function uo(t, n, e, r) {
                return function () {
                    var e = jt(t, n), a = $r(arguments);
                    return r.apply(void 0, a), e
                }
            }

            function co(t, n, e, r) {
                return fe(t, "cm." + e, r)
            }

            var fo, lo, so = {construct: "Metrika", callbackPostfix: "", version: "gqny5kf8o0yuamw2yn"}, vo = [],
                po = ia(String.prototype.indexOf, "indexOf"), ho = /^\s+|\s+$/g, mo = ia(String.prototype.trim, "trim"),
                go = ia(Array.from, "from"), bo = ia(Array.prototype.join, "join"), yo = bo ? function (t, n) {
                    return bo.call(n, t)
                } : function (t, n) {
                    for (var e = "", r = 0; r < n.length; r += 1) e += "" + (r ? t : "") + n[r];
                    return e
                }, wo = Kr((function (t, n) {
                    return t === n
                })), Eo = Kr((function (t, n) {
                    return t(n), n
                })), _o = Kr(yo), Co = Kr(Jr), So = wo(null), To = wo(void 0), xo = ia(Function.prototype.bind, "bind"),
                Ao = xo ? function () {
                    var t = $r(arguments);
                    return xo.apply(t[0], la([t[1]], t.slice(2)))
                } : function () {
                    var t = $r(arguments), n = t[0], e = t[1], r = t.slice(2);
                    return function () {
                        var t = la(r, $r(arguments));
                        if (Function.prototype.call) return Function.prototype.call.apply(n, la([e], t));
                        if (e) {
                            for (var a = "_b"; e[a];) a += "_" + a.length;
                            return e[a] = n, t = e[a] && Ur(a, t, e), delete e[a], t
                        }
                        return Ur(n, t)
                    }
                }, ko = Kr(Hr), Ro = Kr(Br), Mo = ia(Array.prototype.reduce, "reduce"), Do = Mo ? function (t, n, e) {
                    return Mo.call(e, t, n)
                } : jr, Po = Yr(Lr), Io = Po("length"), No = Ir, Lo = Ir(oa, wo("[object Array]")),
                Oo = Object.prototype.hasOwnProperty, Fo = Object.entries ? function (t) {
                    return t ? Object.entries(t) : []
                } : function (t) {
                    return To(t) ? [] : jr((function (n, e) {
                        return n.push([e, t[e]]), n
                    }), [], Rr(t))
                }, Bo = Object.keys ? Object.keys : Rr, Go = Object.assign || function () {
                    var t = $r(arguments), n = t[0];
                    for (t = t.slice(1); t.length;) {
                        var e, r = t.shift();
                        for (e in r) Dr(r, e) && (n[e] = r[e]);
                        Dr(r, "toString") && (n.toString = r.toString)
                    }
                    return n
                }, Ho = Kr((function (t, n) {
                    return Go({}, t, n)
                })), Uo = xr(window), jo = Yr(Uo), Xo = _r(kr), qo = Array.prototype.every ? function (t, n) {
                    return Array.prototype.every.call(n, t)
                } : function (t, n) {
                    return Do((function (n, e) {
                        return !!n && t(e)
                    }), !0, n)
                }, zo = ia(Array.prototype.filter, "filter"), Vo = zo ? function (t, n) {
                    return zo.call(n, t)
                } : Mr, Wo = Kr(Vo), Yo = dr((function (t, n) {
                    return Array.prototype.find.call(n, t)
                }), (function (t, n) {
                    for (var e = 0; e < n.length; e += 1) if (t.call(n, n[e], e)) return n[e]
                }), ua("find", Array.prototype.find)), Ko = Array.prototype.includes ? function (t, n) {
                    return Array.prototype.includes.call(n, t)
                } : function (t, n) {
                    return 1 <= Mr(wo(t), n).length
                }, Jo = Yr(Ko), $o = _r((function (t) {
                    t = Lr(t, "navigator") || {};
                    var n = Lr(t, "userAgent") || "";
                    return {Eb: -1 < (Lr(t, "vendor") || "").indexOf("Apple"), dc: n}
                })), Zo = _r(Gr(/gecko/, (function (t, n) {
                    return -1 !== (Lr(n, "navigator.userAgent") || "").toLowerCase().search(t)
                }))), Qo = _r((function (t) {
                    var n = Lr(t, "document.documentElement.style");
                    return t = Lr(t, "InstallTrigger"), !(!n || !("MozAppearance" in n) || qr(t))
                })), ti = ia(Array.prototype.map, "map"), ni = ti && function (t, n) {
                    if (!Qo(t)) return !0;
                    try {
                        n.call({0: !0, length: 1 - Math.pow(2, 32)}, (function () {
                            throw 1
                        }))
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(window, Array.prototype.map) ? function (t, n) {
                    return n && 0 < n.length ? ti.call(n, t) : []
                } : function (t, n) {
                    return jr((function (n, e, r) {
                        return n.push(t(e, r)), n
                    }), [], n)
                }, ei = ni, ri = Array.prototype.flatMap ? function (t, n) {
                    return Array.prototype.flatMap.call(n, t)
                } : function (t, n) {
                    return jr((function (n, e, r) {
                        return e = t(e, r), n.concat(Pr(e) ? e : [e])
                    }), [], n)
                }, ai = Kr(ni), oi = Yr(ni), ii = dr((function (t, n) {
                    return Array.prototype.some.call(n, t)
                }), (function (t, n) {
                    for (var e = 0; e < n.length; e += 1) if (e in n && t.call(n, n[e], e)) return !0;
                    return !1
                }), ua("some", Array.prototype.some)), ui = _r(xr), ci = Kr((function (t, n) {
                    return Array.prototype.sort.call(n, t)
                })), fi = ia(Array.prototype.reverse, "reverse"), li = fi ? function (t) {
                    return fi.call(t)
                } : function (t) {
                    for (var n = [], e = t.length - 1; 0 <= e; --e) n[t.length - 1 - e] = t[e];
                    return n
                }, si = Yr(parseInt)(10), di = _r(Ir(Po("String.fromCharCode"), Gr("fromCharCode", ua), Cr)),
                vi = _r(Po("navigator.userAgent")), pi = _r(Ir(vi, Fr(/ipad|iphone|ipod/i))), hi = _r((function (t) {
                    return Lr(t, "navigator.platform") || ""
                })), mi = _r((function (t) {
                    var n = (t = $o(t)).dc;
                    return t.Eb && (!n.match(/Safari/) && n.match(/Mobile/) || n.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== n.indexOf("FB_IAB") || -1 !== n.indexOf("FBAV") || -1 !== n.indexOf("OKApp") || -1 !== n.indexOf("GSA/"))
                })), gi = _r((function (t) {
                    var n = (t = $o(t)).dc;
                    return t.Eb && !n.match("CriOS")
                })),
                bi = _r(Ir(vi, Br("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))),
                yi = /Chrome\/(\d+)\./, wi = _r((function (t) {
                    return !(!(t = (Lr(t, "navigator.userAgent") || "").match(yi)) || !t.length) && 76 <= si(t[1])
                })), Ei = _r((function (t) {
                    var n = (vi(t) || "").toLowerCase();
                    return t = hi(t), !(-1 === n.indexOf("android") || -1 === n.indexOf(n, "mobile") || !/^android|linux armv/i.test(t))
                })), _i = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ci = _r((function (t) {
                    var n = Lr(t, "navigator.connection.type");
                    return To(n) ? null : -1 === (t = ui(t)(n, _i)) ? n : "" + t
                })), Si = _r(Ir(Po("document.addEventListener"), Cr)), Ti = _r((function (t) {
                    var n = Lr(t, "navigator") || {};
                    return Do((function (t, e) {
                        return t || Lr(n, e)
                    }), "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                })), xi = _r((function (t) {
                    var n = Lr(t, "navigator") || {};
                    return aa(t = Ti(t)) || (t = "", aa(n = Lr(n, "languages.0")) && (t = n)), t.toLowerCase().split("-")[0]
                })), Ai = _r((function (t) {
                    var n = !1;
                    try {
                        n = t.top !== t
                    } catch (t) {
                    }
                    return n
                })), ki = _r((function (t) {
                    var n = !1;
                    try {
                        n = t.top.contentWindow
                    } catch (t) {
                    }
                    return n
                })), Ri = _r((function (t) {
                    var n = !1;
                    try {
                        n = t.navigator.javaEnabled()
                    } catch (t) {
                    }
                    return n
                })), Mi = _r((function (t) {
                    var n = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        e = Lr(t, "external");
                    e = -1 !== (Lr(e, "toString") ? "" + e.toString() : "").indexOf("Sequentum");
                    var r = Lr(t, "document.documentElement");
                    return !!(ii(Gr(t, Lr), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || ii(Gr(Lr(t, "document"), Lr), n) || e || r && ii(Ao(r.getAttribute, r), ["selenium", "webdriver", "driver"]))
                })), Di = _r((function (t) {
                    return !!(ii(Gr(t, Lr), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(vi(t)) || Lr(t, "navigator.webdriver") || Lr(t, "isChrome") && !Lr(t, "chrome"))
                })), Pi = _r((function (t) {
                    return qo(Gr(t, Lr), ["ia_document.shareURL", "ia_document.referrer"])
                })), Ii = _r((function (t) {
                    return !!((t = Lr(t, "navigator.plugins")) && Io(t) && ii(Ir(Po("name"), Fr(/Chrome PDF Viewer/)), t))
                })),
                Ni = new RegExp(yo("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                Li = _r(Ir(Po("navigator.userAgent"), Fr(Ni))), Oi = _r((function (t) {
                    var n = vi(t) || "", e = n.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    return e = e ? [+e[1], +e[2]] : [0, 0], 14 <= ((n = n.match(/iPhone OS ([1-9]+)_([0-9]+)/)) ? +n[1] : 0) || (pi(t) || 10 < e[0] || 10 === e[0] && 13 <= e[1]) && gi(t)
                })), Fi = so.construct, Bi = Si(window), Gi = {
                    oc: 24226447,
                    ic: 26302566,
                    pc: 51533966,
                    vd: 65446441,
                    ba: "https:",
                    Aa: "760",
                    Va: Fi,
                    nc: Bi ? 512 : 2048,
                    kc: Bi ? 512 : 2048,
                    lc: Bi ? 100 : 400,
                    wd: 100,
                    xd: "noindex"
                }, Hi = {id: "id", ub: "ut", M: "type", fb: "ldc", ha: "nck", Ga: "url", Gc: "referrer"}, Ui = /^\d+$/,
                ji = {
                    id: function (t) {
                        t = "" + (t || "0"), Ui.test(t) || (t = "0");
                        try {
                            var n = si(t)
                        } catch (t) {
                            n = 0
                        }
                        return n
                    }, M: function (t) {
                        return "" + (t || 0 === t ? t : "0")
                    }, ha: Boolean, ub: Boolean
                };
            Hi.Ba = "defer", ji.Ba = Boolean, Hi.rd = "yaDisableGDPR", Hi.sd = "yaGDPRLang", Hi.exp = "experiments", Hi.Ea = "ecommerce", ji.Ea = function (t) {
                if (t) return !0 === t ? "dataLayer" : "" + t
            }, Hi.K = "params", Hi.Ua = "userParams", Hi.za = "accurateTrackBounce", Hi.cc = "triggerEvent", ji.cc = Boolean, Hi.Rb = "sendTitle", ji.Rb = function (t) {
                return !!t || To(t)
            }, Hi.rb = "trackHash", ji.rb = Boolean, Hi.vc = "clickmap", Hi.ya = "webvisor", ji.ya = Boolean, Hi.Ra = "trackLinks", Hi.Bc = "enableAll";
            var Xi = Do((function (t, n) {
                    var e = n[0];
                    return t[e] = {Kb: n[1], Tc: ji[e]}, t
                }), {}, Fo(Hi)), qi = {}, zi = _r((function (t) {
                    return t.id + ":" + t.M
                })), Vi = wo("1"), Wi = Kr((function (t, n) {
                    var e = n || {};
                    return {
                        o: Gr(e, Tr), b: function (t, n) {
                            var r = e[t];
                            return To(r) && !To(n) ? n : r
                        }, l: function (t, n) {
                            return e[t] = n, this
                        }, pb: function (t, n) {
                            return "" === n || qr(n) ? this : this.l(t, n)
                        }, ob: Gr(e, t)
                    }
                })), Yi = Wi((function (t) {
                    var n = "";
                    return t = Do((function (t, e) {
                        var r = e[0], a = r + ":" + e[1];
                        return "t" === r ? n = a : t.push(a), t
                    }), [], Fo(t)), n && t.push(n), yo(":", t)
                })), Ki = Gi.ba + "//mc.yandex.ru/metrika/metrika_match.html",
                Ji = "hash host hostname href pathname port protocol search".split(" "),
                $i = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
                Zi = _r((function (t) {
                    return (t = or(t).hostname.split("."))[t.length - 1]
                })), Qi = _r((function (t) {
                    return -1 !== or(t).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                })), tu = _r((function (t) {
                    return (t ? t.replace(/^www\./, "") : "").toLowerCase()
                })),
                nu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                eu = _r((function (t) {
                    var n = !1;
                    return (t = or(t).hostname) && (n = -1 !== t.search(nu)), n
                })),
                ru = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                au = _r((function (t) {
                    var n = !1;
                    return (t = or(t).hostname) && (n = -1 !== t.search(ru)), n
                })), ou = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/, iu = _r((function (t) {
                    var n = !1;
                    return (t = or(t).hostname) && (n = -1 !== t.search(ou)), n
                })), uu = _r((function (t) {
                    return wi(t) && "https:" === or(t).protocol ? "SameSite=None;Secure;" : ""
                })), cu = _r((function (t) {
                    var n = !1;
                    if (!t.addEventListener) return n;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                return n = !0, 1
                            }
                        });
                        t.addEventListener("test", fa, e)
                    } catch (t) {
                    }
                    return n
                })), fu = Kr((function (t, n) {
                    return t ? Go({capture: !0, passive: !0}, n || {}) : !!n
                })), lu = _r((function (t) {
                    t = cu(t);
                    var n = fu(t), e = {};
                    return Go(e, {
                        C: function (t, r, a, o) {
                            return ei((function (e) {
                                var r = n(o);
                                ar(t, e, a, r, !1)
                            }), r), Ao(e.Ta, e, t, r, a, o)
                        }, Ta: function (t, e, r, a) {
                            ei((function (e) {
                                var o = n(a);
                                ar(t, e, r, o, !0)
                            }), e)
                        }
                    })
                })), su = setTimeout;
            va.prototype.catch = function (t) {
                return this.then(null, t)
            }, va.prototype.then = function (t, n) {
                var e = new this.constructor(da);
                return pa(this, new ba(t, n, e)), e
            }, va.prototype.finally = function (t) {
                var n = this.constructor;
                return this.then((function (e) {
                    return n.resolve(t()).then((function () {
                        return e
                    }))
                }), (function (e) {
                    return n.resolve(t()).then((function () {
                        return n.reject(e)
                    }))
                }))
            }, va.all = function (t) {
                return new va((function (n, e) {
                    function r(t, i) {
                        try {
                            if (i && ("object" == typeof i || "function" == typeof i)) {
                                var u = i.then;
                                if ("function" == typeof u) return void u.call(i, (function (n) {
                                    r(t, n)
                                }), e)
                            }
                            a[t] = i, 0 == --o && n(a)
                        } catch (t) {
                            e(t)
                        }
                    }

                    if (!t || void 0 === t.length) return e(new TypeError("Promise.all accepts an array"));
                    var a = Array.prototype.slice.call(t);
                    if (0 === a.length) return n([]);
                    for (var o = a.length, i = 0; i < a.length; i++) r(i, a[i])
                }))
            }, va.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === va ? t : new va((function (n) {
                    n(t)
                }))
            }, va.reject = function (t) {
                return new va((function (n, e) {
                    e(t)
                }))
            }, va.race = function (t) {
                return new va((function (n, e) {
                    if (!t || void 0 === t.length) return e(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, a = t.length; r < a; r++) va.resolve(t[r]).then(n, e)
                }))
            }, va.yb = "function" == typeof setImmediate && function (t) {
                setImmediate(t)
            } || function (t) {
                su(t, 0)
            }, va.rc = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var du = window.Promise, vu = ia(du, "Promise"), pu = ia(Lr(du, "resolve"), "resolve"),
                hu = ia(Lr(du, "reject"), "reject"), mu = ia(Lr(du, "all"), "all");
            if (Ko(!1, [vu, pu, hu, mu])) du = va; else {
                var gu = function (t) {
                    return new Promise(t)
                };
                gu.resolve = Ao(pu, du), gu.reject = Ao(hu, du), gu.all = Ao(mu, du), du = gu
            }
            var bu, yu,
                wu = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Eu = (yu = window, function (t) {
                    return bu ? new bu(t) : ua("Error", yu.Error) ? (bu = yu.Error, new yu.Error(t)) : new (bu = rr)(t)
                }), _u = Fr(/^http./), Cu = Fr(/^err.kn/), Su = /[^a-z0-9.:-]/, Tu = Wr((function (t, n, e) {
                    var r, a = new t.XMLHttpRequest, o = e.L, i = Go(e.vb ? ((r = {}).wmode = "7", r) : {}, e.wa);
                    return new du((function (r, u) {
                        a.open(e.ec || "GET", n + "?" + Ze(i), !0), a.withCredentials = !1 !== e.hc, e.Qa && (a.timeout = e.Qa), No(Fo, ai((function (t) {
                            a.setRequestHeader(t[0], t[1])
                        })))(e.va);
                        var c = Wr(Ke)(t, a, er(e.Y), e.vb, e.dd, r, u);
                        a.onreadystatechange = c;
                        try {
                            a.send(o)
                        } catch (t) {
                        }
                    }))
                })), xu = _r((function (t) {
                    return ("" + ((t = Lr(t, "document") || {}).characterSet || t.charset || "")).toLowerCase()
                })), Au = _r(Ir(Po("document"), Gr("createElement", yr))), ku = _r((function (t) {
                    var n = Lr(t, "Element.prototype");
                    return n && (t = Yo((function (t) {
                        return ua(t, n[t])
                    }), ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? n[t] : null
                })), Ru = Ir(Le, wo("INPUT")), Mu = Ir(Le, wo("TEXTAREA")), Du = Ir(Le, wo("SELECT")),
                Pu = Ir(Po("type"), Fr(/^(checkbox|radio)$/)), Iu = Ir(Le, Fr(/^INPUT|SELECT|TEXTAREA$/)),
                Nu = Ir(Le, Fr(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Lu = ["submit", "image", "hidden"], Ou = Wr(Ie),
                Fu = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Bu = _r((function () {
                    for (var t = 59, n = {}, e = 0; e < Fu.length; e += 1) n[Fu[e]] = String.fromCharCode(t), t += 1;
                    return n
                })), Gu = _r((function (t) {
                    return {Id: t, ga: null, ia: []}
                })), Hu = Wr(Te), Uu = {}, ju = {};
            Uu.p = 500;
            var Xu = {i: "id", n: "name", h: "href", ty: "type"};
            ju.h = !0, ju.c = !0;
            var qu = {};
            qu.p = Ae, qu.c = function (t, n, e) {
                return (t = na(Lr(n, "textContent"))) && e && ((e = e(n)).length && ii(Ir(Po("textContent"), na, wo(t)), e) && (t = "")), Ru(n) && (t = na(n.getAttribute && n.getAttribute("value") || t)), t
            };
            var zu, Vu, Wu = "button," + ni((function (t) {
                    return 'input[type="' + t + '"]'
                }), ["button", "submit", "reset", "file"]).join(",") + ",a", Yu = Hu(Wu),
                Ku = ((zu = {}).A = "h", zu.BUTTON = "i", zu.DIV = "i", zu.INPUT = "ty", zu),
                Ju = Wr((function (t, n, e, r) {
                    return new du((function (a, o) {
                        var i = je(t), u = n("img"), c = Ir(Gr(u, Ve), Gr(er(r.Y), o)), f = hr(t, c, r.Qa || 3e3);
                        u.onerror = c, u.onload = Ir(Gr(u, Ve), Gr(null, a), Hr([t, f], mr)), delete (c = Go({}, r.wa)).wmode, u.src = Je(e, r, c), gi(t) && (Go(u.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }), i.appendChild(u))
                    }))
                })), $u = Wr((function (t, n, e) {
                    return new du((function (r, a) {
                        var o, i, u = "_ymjsp" + cr(t), c = Go(((o = {}).callback = u, o), e.wa), f = Hr([t, u], be);
                        t[u] = function (t) {
                            try {
                                f(), Ve(l), r(t)
                            } catch (t) {
                                a(t)
                            }
                        }, c.wmode = "5";
                        var l = xe(t, ((i = {}).src = Je(n, e, c), i));
                        if (!l) return f(), a(Eu("jp.s"));
                        o = Ir(o = Gr(l, Ve), Gr(er(e.Y), a)), i = hr(t, o, e.Qa || 1e4), i = Hr([t, i], mr), l.onload = i, l.onerror = Ir(f, i, o)
                    }))
                })), Zu = Wr((function (t, n, e, r) {
                    return new du((function (a, o) {
                        if (!Lr(t, "navigator.onLine")) return o();
                        var i = Go(r.wa, {"force-urlencoded": 1});
                        return 2e3 < (i = e + "?" + Ze(i) + (r.L ? "&" + r.L : "")).length ? o(er("sb.tlq")) : n(i) ? a("") : o()
                    }))
                })), Qu = [he, 0, Ye, me, ye], tc = [Ye];
            tc.push(me);
            var nc = pe(tc), ec = pe([ye]), rc = pe([he, ye]), ac = pe([0, Ye, me, ye]),
                oc = ((Vu = {}).h = nc, Vu.f = nc, Vu.er = ec, Vu);
            oc.d = ec, oc.s = pe([Ye]), oc.S = oc.s, oc.u = ec, oc.pi = ec, oc.m = rc, oc[2] = Qu, oc[6] = pe([0, Ye]), oc.t = Qu, oc.a = ac, oc.n = Qu, oc[4] = pe([0, Ye, ye]), oc.r = ac, oc[1] = Qu, oc.g = Qu, oc.c = ec, oc.e = Qu, oc.adb = ec, oc[5] = Qu, oc[8] = [ge];
            var ic, uc = _r((function (t, n) {
                    var e;
                    return (e = n ? oc[n] : Qu) || (e = []), (e = Do((function (n, e, r) {
                        return (e = e && e(t)) && n.push([r, e]), n
                    }), [], e)).length || nr(), e
                }), Sr), cc = ["0", "1", "2", "3"], fc = cc[0], lc = cc[1], sc = cc[2],
                dc = ni(Ir(Tr, Br("concat", "GDPR-ok-view-detailed-")), cc),
                vc = la("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), dc, ["28", "29", "30"]),
                pc = "3 13 14 15 16 17 28".split(" "), hc = Ir(ai(Po("ymetrikaEvent.type")), Wo(Jo(vc))),
                mc = wr("gsc", Kn), gc = /:\d+$/, bc = _r((function (t) {
                    var n = (or(t).host || "").split(".");
                    return 1 === n.length ? n[0] : Do((function (e, r, a) {
                        return 2 <= (a += 1) && !e && (a = yo(".", n.slice(-a)), Vn(t, a) && (e = a)), e
                    }), "", n)
                })), yc = _r(_a), wc = _r((function (t) {
                    jn(t, "_ymBRC", "1");
                    var n = "1" !== Xn(t, "_ymBRC");
                    return n || qn(t, "_ymBRC"), n
                })), Ec = _r(Un), _c = _r(Un, (function (t, n, e) {
                    return "" + n + e
                })), Cc = _r(Gn), Sc = wr("r", (function (t, n) {
                    var e = In(t, n), r = e[0];
                    return !e[1] && r
                })), Tc = _r(Pn, (function (t, n) {
                    return "{" + n.fb + n.ha
                })), xc = _r(br, zi), Ac = Ir(Tc, sa), kc = Wr((function (t, n) {
                    for (var e = []; !Rn(n);) {
                        var r = Tn(n);
                        t(r, (function (t) {
                            return t(n)
                        })), e.push(r)
                    }
                    return e
                })), Rc = Wr((function (t, n, e) {
                    return e(t, n)
                })), Mc = [], Dc = !1, Pc = !1, Ic = _r((function (t) {
                    if (t = Au(t)) return t("a")
                })), Nc = ["webkitvisibilitychange", "visibilitychange"], Lc = Wi((function (t) {
                    return t = Fo(t), yo("", ni((function (t) {
                        var n = t[0];
                        return t = t[1], So(t) ? "" : n + "(" + t + ")"
                    }), t))
                })), Oc = Hr([1, null], dr), Fc = Hr([1, 0], dr), Bc = /^ *(data|javascript):/i,
                Gc = new RegExp(yo("", ["\\.(" + yo("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Hc = ((ic = {}).hit = "h", ic.experiments = "ex", ic.params = "p", ic.reachGoal = "g", ic.userParams = "up", ic.trackHash = "th", ic.accurateTrackBounce = "atb", ic.notBounce = "nb", ic.addFileExtension = "fe", ic.extLink = "el", ic.file = "fc", ic.trackLinks = "tl", ic.destruct = "d", ic.setUserID = "ui", ic.getClientID = "ci", ic.clickmap = "cm", ic.enableAll = "ea", ic),
                Uc = Fr(/^.+\.mtproxy\.yandex\.net$/), jc = _r((function (t) {
                    return "MetrikaPlayer" === t.name || (t = or(t).hostname, Uc(t))
                })), Xc = _r((function () {
                    return {ta: {}, pending: {}, oa: {}}
                })), qc = Po("postMessage"), zc = Wr((function (t, n, e, r) {
                    var a, o = {Da: Cc(t)(Bn), key: t.Math.random(), dir: 0};
                    return e.length && (o.Da = si(e[0]), o.key = parseFloat(e[1]), o.dir = si(e[2])), Go(r, n), (a = {data: r}).__yminfo = yo(":", ["__yminfo", o.Da, o.key, o.dir]), {
                        Hb: o,
                        Zb: $e(t, n = a) || ""
                    }
                })), Vc = ce("s.f", Wr((function (t, n, e, r, a) {
                    n = n(r);
                    var o = Xc(t), i = yo(":", [n.Hb.Da, n.Hb.key]);
                    if (qc(e)) {
                        o.pending[i] = a;
                        try {
                            e.postMessage(n.Zb, "*")
                        } catch (t) {
                            return void delete o.pending[i]
                        }
                        oe(t, (function () {
                            delete o.pending[i]
                        }), 5e3, "if.s")
                    }
                }))), Wc = ce("s.fh", Wr((function (t, n, e, r, a, o) {
                    var i = null, u = null, c = Xc(t), f = null;
                    try {
                        u = (i = wa(t, o.data)).__yminfo, f = i.data
                    } catch (t) {
                        return
                    }
                    if (!qr(u) && u.substring && "__yminfo" === u.substring(0, 8) && !qr(f) && 4 === (i = u.split(":")).length) if (u = n.id, n = i[1], t = i[2], i = i[3], !Pr(f) && f.type && "0" === i && f.counterId) {
                        if (!f.toCounter || f.toCounter == u) {
                            c = null;
                            try {
                                c = o.source
                            } catch (t) {
                            }
                            !So(c) && qc(c) && (o = r.R(f.type, [o, f]), a = ni(Ir(Tr, Ho(a)), o.concat([{}])), f = e([n, t, f.counterId], a), c.postMessage(f.Zb, "*"))
                        }
                    } else i === "" + u && Pr(f) && Vo((function (t) {
                        return !(!t.hid || !t.counterId)
                    }), f).length === f.length && (e = c.pending[yo(":", [n, t])]) && e.apply(null, [o].concat(f))
                }))), Yc = _r((function (t, n) {
                    var e, r = yr("getElementsByTagName", Lr(t, "document")), a = Xc(t), o = qc(t), i = ie(t), u = lu(t);
                    if (!r || !o) return null;
                    r = r.call(t.document, "iframe"), (e = {}).counterId = n.id, e.hid = "" + ln(t), o = e, function (t, n) {
                        var e = Xc(t);
                        n.C(["initToParent"], (function (t) {
                            var n = t[1];
                            e.oa[n.counterId] = {info: n, window: t[0].source}
                        })).C(["initToChild"], (function (e) {
                            var r = e[0];
                            e = e[1], r.source === t.parent && n.R("parentConnect", [r, e])
                        })).C(["parentConnect"], (function (t) {
                            var n = t[1];
                            n.counterId && (e.ta[n.counterId] = {info: n, window: t[0].source})
                        }))
                    }(t, i), e = zc(t, o);
                    var c = Vc(t, e([]));
                    return ei((function (t) {
                        var n = null;
                        try {
                            n = t.contentWindow
                        } catch (t) {
                        }
                        n && c(n, {type: "initToChild"}, (function (t, n) {
                            i.R("initToParent", [t, n])
                        }))
                    }), r), Ai(t) && c(t.parent, {type: "initToParent"}, (function (t, n) {
                        i.R("parentConnect", [t, n])
                    })), u.C(t, ["message"], Wc(t, n, e, i, o)), {Z: i, ta: a.ta, oa: a.oa, mb: c}
                }), Ir(Sr, zi)), Kc = Wr((function (t, n, e, r, a) {
                    return new du((function (o, i) {
                        var u = Bo(e), c = Ir(r.resolve ? r.resolve : Tr, Eo(o)), f = Ir(r.reject ? r.reject : Tr, Eo(i));
                        r.resolve = c, r.reject = f, ei((function (o) {
                            var i;
                            r.sb.push(o);
                            var u = e[o], c = oe(t, Gr(er(), f), 5100, "is.m");
                            n(u.window, Go(a, ((i = {}).toCounter = si(o), i)), (function (n, e) {
                                mr(t, c), r.Ub.push(o), r.resolve && r.resolve(e)
                            }))
                        }), u)
                    })).catch(fe(t, "if.b"))
                })), Jc = Wr((function (t, n, e) {
                    n = Vo((function (t) {
                        return !Ko(e.info.counterId, t.sb)
                    }), n), ei((function (n) {
                        var r;
                        e.info.counterId && t(((r = {})[e.info.counterId] = e, r), n, n.data)
                    }), n)
                })), $c = _r(fn, Ir(Sr, zi)), Zc = ce("pa.plgn", (function (t, n) {
                    var e = $c(t, n);
                    e && e.Z.C(["pluginInfo"], fe(t, "c.plgn", (function () {
                        var e = Xo(t);
                        return e.l("cmc", e.b("cmc", 0) + 1), function (t, n) {
                            return Do((function (t, e) {
                                return t[n[e[0]].Kb] = e[1], t
                            }), {}, Fo(t))
                        }(n, Xi)
                    })))
                })), Qc = Kr((function (t, n) {
                    return Xo(n).b(t, null)
                })), tf = {
                    mc: function (t) {
                        return t = kr(t).b("mt", {}), (t = Fo(t)).length ? Do((function (t, n, e) {
                            return t + (e ? "-" : "") + n[0] + "-" + n[1]
                        }), "", t) : null
                    }
                };
            tf.oo = Qc("oo"), tf.pmc = Qc("cmc"), tf.clc = Qc("cls"), tf.lt = function (t) {
                var n = kr(t).b("lt", null);
                return n ? t.Math.round(100 * n) : n
            }, tf.aw = function (t) {
                return qr(t = Yo(Ir(qr, Cr), [t.document.hidden, t.document.msHidden, t.document.webkitHidden])) ? null : Fc(!t)
            }, tf.ifc = function (t) {
                return kr(t).b("ifc")
            }, tf.ifb = function (t) {
                return kr(t).b("ifb")
            };
            var nf, ef, rf, af = Bo(tf), of = _r((function () {
                    return {Cb: null, Ha: []}
                }), zi),
                uf = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (t, n) {
                    return Lr(n, "redirectCount") || Lr(t, "navigation.redirectCount")
                }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]],
                cf = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]],
                ff = ((nf = {}).responseEnd = 1, nf.domInteractive = 1, nf.domContentLoadedEventStart = 1, nf.domContentLoadedEventEnd = 1, nf.domComplete = 1, nf.loadEventStart = 1, nf.loadEventEnd = 1, nf.unloadEventStart = 1, nf.unloadEventEnd = 1, nf.secureConnectionStart = 1, nf),
                lf = _r(gr), sf = {"*": "+", "-": "/", Ad: "=", "+": "*", "/": "-", "=": "_"}, df = _r((function (t) {
                    t = Lr(t, "console");
                    var n = Lr(t, "log");
                    n = ca("log", n) ? Ao(n, t) : fa;
                    var e = Lr(t, "warn");
                    e = ca("warn", e) ? Ao(e, t) : n;
                    var r = Lr(t, "error");
                    return {log: n, error: t = ca("error", r) ? Ao(r, t) : n, warn: e}
                })), vf = ce("p.cd", (function (t) {
                    if (Ei(t) || pi(t)) {
                        var n = Ec(t);
                        if (qr(n.b("jn"))) {
                            n.l("jn", !1);
                            var e = t.Dd || gi(t) ? function () {
                            } : /./;
                            t = df(t), e.toString = function () {
                                return n.l("jn", !0), "Yandex.Metrika counter is initialized"
                            }, t.log("%c%s", "color: inherit", e)
                        }
                    }
                })), pf = /Firefox\/([0-9]+)/, hf = /([0-9\\.]+) Safari/, mf = /\sYptp\/\d\.(\d+)\s/, gf = /Edg\/(\d+)\./,
                bf = _r((function (t) {
                    var n;
                    return !(50 <= (n = (n = vi(t)) && (n = mf.exec(n)) && 1 < n.length ? si(n[1]) : 0) && 99 >= n || an(t, 79)) && (!Oi(t) || mi(t))
                })),
                yf = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                wf = _r((function (t) {
                    var n = Lr(t = Au(t)("canvas"), "getContext");
                    if (!n) return null;
                    try {
                        var e = Ao(n, t)("2d");
                        e.font = "72px mmmmmmmmmmlli";
                        var r = e.measureText("mmmmmmmmmmlli").width;
                        return function (t) {
                            return e.font = "72px " + t, e.measureText("mmmmmmmmmmlli").width === r
                        }
                    } catch (t) {
                        return null
                    }
                })), Ef = ia(String.prototype.repeat, "repeat"), _f = Ef ? function (t, n) {
                    return Ef.call(t, n)
                } : function (t, n) {
                    for (var e = "", r = 0; r < n; r += 1) e += t;
                    return e
                }, Cf = [2277735313, 289559509], Sf = [1291169091, 658871167], Tf = /\/$/, xf = _r(Ir(Cc, Co((function (t) {
                    return -(new t.o.Date).getTimezoneOffset()
                })))), Af = Ir(Cc, Co((function (t) {
                    return t = new t.o.Date, yo("", ni(Hn, [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()]))
                }))), kf = Ir(Cc, Co(On)), Rf = _r(Ir(Cc, Co((function (t) {
                    return t.W[0]
                })))), Mf = _r(br), Df = _r(br), Pf = _r((function (t) {
                    var n = Lr(t, "webkitRequestFileSystem");
                    if (zr(n) && !Ei(t)) return new du(Ao(n, t, 0, 0)).then((function () {
                        var n = Lr(t, "navigator.storage") || {};
                        return n.estimate ? n.estimate() : {}
                    })).then((function (t) {
                        return !!((t = t.quota) && 12e7 > t)
                    })).catch(Gr(!0, Tr));
                    if (Qo(t)) return n = Lr(t, "navigator.serviceWorker"), du.resolve(To(n));
                    if (n = Lr(t, "openDatabase"), gi(t) && zr(n)) {
                        var e = !1;
                        try {
                            n(null, null, null, null)
                        } catch (t) {
                            e = !0
                        }
                        return du.resolve(e)
                    }
                    return du.resolve(!Lr(t, "indexedDB") && (Lr(t, "PointerEvent") || Lr(t, "MSPointerEvent")))
                })), If = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Nf = _r((function (t, n) {
                    var e = yc(t), r = or(t).search.match(If);
                    return r && 2 <= r.length ? (r = r[2], n.ha || e.l("turbo_uid", r), r) : (e = e.b("turbo_uid")) ? e : ""
                })), Lf = _r((function (t) {
                    return zr(Lr(t, "yandex.getSiteUid")) ? t.yandex.getSiteUid() : null
                })), Of = _r((function (t) {
                    var n = (t = Xo(t)).b("counterNum", 0) + 1;
                    return t.l("counterNum", n), n
                }), Ir(Sr, zi)), Ff = ((ef = {}).vf = Gr(so.version, Tr), ef.nt = Ci, ef.fp = function (t, n, e) {
                    if (e.D && e.D.nohit) return null;
                    if (n = zi(n), (e = Mf(t))[n]) return null;
                    t:{
                        var r = Rf(t), a = Lr(t, "performance.getEntriesByType");
                        if (zr(a)) {
                            if ((t = Vo(Ir(Tr, Po("name"), wo("first-contentful-paint")), a.call(t.performance, "paint"))).length) {
                                t = t[0].startTime;
                                break t
                            }
                        } else {
                            if (zr(a = Lr(t, "chrome.loadTimes")) && (a = Lr(a = a.call(t.chrome), "firstPaintTime"), r && a)) {
                                t = 1e3 * a - r;
                                break t
                            }
                            if (t = Lr(t, "performance.timing.msFirstPaint")) {
                                t -= r;
                                break t
                            }
                        }
                        t = void 0
                    }
                    return t ? (e[n] = t, Math.round(t)) : null
                }, ef.fu = function (t, n, e) {
                    var r = e.D;
                    return r ? (n = (Lr(t, "document.referrer") || "").replace(Tf, ""), e = (r["page-ref"] || "").replace(Tf, ""), r = r["page-url"], n = n !== e, e = 0, (t = or(t).href !== r) && n ? e = 3 : n ? e = 1 : t && (e = 2), e) : null
                }, ef.en = xu, ef.la = Ti, ef.ut = function (t, n, e) {
                    var r = e.Ka;
                    return (e = e.D) && (iu(t) || n.ub || r) && (e.ut = "noindex"), null
                }, ef.v = Gr(Gi.Aa, Tr), ef.cn = Of, ef.dp = function (t) {
                    var n = Xo(t), e = n.b("bt", {});
                    if (To(n.b("bt"))) {
                        var r = Lr(t, "navigator.getBattery");
                        try {
                            e.p = r ? r.call(t.navigator) : null
                        } catch (t) {
                        }
                        n.l("bt", e), e.p && e.p.then && e.p.then((function (t) {
                            e.nd = t.charging && 0 === t.chargingTime
                        }))
                    }
                    return e.nd ? "1" : "0"
                }, ef.ls = _r((function (t, n) {
                    var e = _c(t, n.id), r = Cc(t), a = e.b("lsid");
                    return +a ? a : (r = cr(t, 0, r(Bn)), e.l("lsid", r), r)
                }), Sr), ef.hid = ln, ef.z = xf, ef.i = Af, ef.et = kf, ef.c = Ir(Po("navigator.cookieEnabled"), Oc), ef.rn = Ir(Tr, cr), ef.rqn = function (t, n, e) {
                    return !(e = e.D) || e.nohit ? null : (n = ((t = _c(t, n.id)).b("reqNum", 0) || 0) + 1, t.l("reqNum", n), t.b("reqNum") === n ? n : (t.Za("reqNum"), null))
                }, ef.u = Tc, ef.tp = Ir(Sr, (function (t) {
                    return t = zi(t), qi[t] && qi[t].hd
                }), Oc), ef.tpid = Ir(Sr, (function (t) {
                    return t = zi(t), qi[t] && qi[t].jd || null
                })), ef.w = function (t) {
                    return (t = Ue(t))[0] + "x" + t[1]
                }, ef.s = function (t) {
                    var n = Lr(t, "screen");
                    if (n) {
                        t = Lr(n, "width");
                        var e = Lr(n, "height");
                        return n = Lr(n, "colorDepth") || Lr(n, "pixelDepth"), yo("x", [t, e, n])
                    }
                    return null
                }, ef.sk = Po("devicePixelRatio"), ef.ifr = Ir(Ai, Oc), ef.j = Ir(Ri, Oc), ef.sti = function (t) {
                    return Ai(t) && ki(t) ? "1" : null
                }, ef);
            Ff.pri = function (t) {
                if (bi(t)) return null;
                var n = Df(t), e = n.Mb;
                return To(e) && (n.Mb = null, Pf(t).then((function (t) {
                    n.Mb = t
                }))), e ? 1 : null
            }, Go(Ff, ((rf = {}).iss = Ir(Mi, Oc), rf.hdl = Ir(Di, Oc), rf.iia = Ir(Pi, Oc), rf.cpf = Ir(Ii, Oc), rf.ntf = _r((function (t) {
                t:switch (Lr(t, "Notification.permission")) {
                    case"denied":
                        t = !1;
                        break t;
                    case"granted":
                        t = !0;
                        break t;
                    default:
                        t = null
                }
                return So(t) ? null : t ? 2 : 1
            })), rf.eu = Qc("isEU"), rf.ns = Rf, rf.np = function (t) {
                if (cr(t, 0, 100)) t = null; else {
                    t = na(hi(t), 100);
                    for (var n = [], e = 0; e < t.length; e++) {
                        var r = t.charCodeAt(e);
                        128 > r ? n.push(r) : (127 < r && 2048 > r ? n.push(r >> 6 | 192) : (n.push(r >> 12 | 224), n.push(r >> 6 & 63 | 128)), n.push(63 & r | 128))
                    }
                    t = on(n)
                }
                return t
            }, rf.re = Ir((function (t, n) {
                return !n.ha && Sc(t, n)
            }), Oc), rf)), Ff.ds = function (t, n, e) {
                if (n = zi(n), t = de(t), (void 0 === (e = e.D) ? {} : e).nohit) return null;
                var r = e = null;
                if (Lr(t, "getEntriesByType") && (r = Lr(t.getEntriesByType("navigation"), "0")) && (e = cf), !e) {
                    var a = Lr(t, "timing");
                    a && (e = uf, r = a)
                }
                return e ? (t = function (t, n, e) {
                    return ni((function (e) {
                        var r = e[0], a = e[1];
                        if (zr(r)) return r(t, n) || null;
                        if (zr(a)) return null;
                        var o = !(!n[r] || !n[a]);
                        return !o && 2 === e.length && (o = 0 === n[r] && 0 === n[a]) && (o = e[1], o = !(ff[e[0]] || ff[o])), o ? 0 > (e = Math.round(n[r]) - Math.round(n[a])) || 36e5 < e ? null : e : 1 === e.length && n[r] ? Math.round(n[r]) : null
                    }), e)
                }(t, r, e), (n = function (t, n) {
                    var e = t.length ? ni((function (t, e) {
                        var r = n[e];
                        return r === t ? null : r
                    }), t) : n;
                    return t.length = 0, ei(Ir(Tr, Br("push", t)), n), Vo(wo(null), e).length === t.length ? null : e
                }(n = lf(n), t)) && yo(",", n)) : null
            }, Ff.bu = Lf, Ff.td = Nf, Ff.co = function (t) {
                return Fc(Xo(t).b("jn"))
            };
            var Bf, Gf, Hf, Uf, jf = Bo(Ff).concat(af),
                Xf = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                qf = Wr((function (t, n, e) {
                    var r = e[t];
                    r ? (r.ad = n, r.Qb = !0, r.Pb ? r.Pb(n) : r.ca = du.resolve(n)) : e[t] = {
                        ca: du.resolve(n),
                        ad: n,
                        Qb: !0
                    }
                })), zf = Wr((function (t, n) {
                    if (!n[t]) {
                        var e, r = new du((function (t) {
                            e = t
                        }));
                        n[t] = {Pb: e, ca: r, Qb: !1}
                    }
                    return n[t].ca
                })), Vf = _r(Ir(br, Co)), Wf = _r((function (t, n, e) {
                    var r = Xo(t);
                    n = Ec(t);
                    var a = [];
                    e = Hr([t, e, r, n], en), bi(t) || function (t, n) {
                        if (gi(t)) {
                            var e = vi(t).match(hf);
                            if (e && e.length) return e[1] === n
                        }
                        return !1
                    }(t, "14.1") || a.push(Hr([$t, "pp", ""], e));
                    var o = bf(t) && !rn(t, 68);
                    return o || a.push(Hr([Zt, "pu", ""], e)), o || n.bb || Oi(t) || (a.push(Hr([Yt, "zzlc", "na"], e)), a.push(Hr([Wt, "cc", ""], e))), a.length ? {
                        aa: function (t, n) {
                            if (0 === r.b("isEU")) try {
                                ei(Ir(Tr, Er), a)
                            } catch (t) {
                            }
                            n()
                        }, N: function (t, n) {
                            var e = t.F;
                            if (e && 0 === r.b("isEU")) try {
                                ei(Co(e), a)
                            } catch (t) {
                            }
                            n()
                        }
                    } : {}
                }), (function (t, n, e) {
                    return zi(e)
                })), Yf = wr("retryReqs", (function (t) {
                    return Ec(t).b("retryReqs", {})
                })), Kf = ["0"], Jf = ce("g.r", (function (t) {
                    var n = Cc(t), e = Yf(t), r = n(Bn), a = ln(t);
                    return Do((function (t, n) {
                        var e = n[0], o = n[1];
                        return o && !o.d && o.ghid && o.ghid !== a && o.time && 500 < r - o.time && o.time + 864e5 > r && 2 >= o.browserInfo.rqnl && (o.d = 1, t.push({
                            protocol: o.protocol,
                            host: o.host,
                            bd: o.resource,
                            $c: o.postParams,
                            K: o.params,
                            tc: o.browserInfo,
                            Kd: o.ghid,
                            time: o.time,
                            xa: si(e),
                            wc: o.counterId,
                            M: o.counterType
                        })), t
                    }), [], Fo(e))
                })), $f = [], Zf = "ru en et fi lt lv pl fr no sr".split(" "),
                Qf = ((Bf = {})["GDPR-ok"] = "ok", Bf["GDPR-ok-view-default"] = "ok-default", Bf["GDPR-ok-view-detailed"] = "ok-detailed", Bf["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Bf["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Bf["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Bf["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Bf),
                tl = [], nl = Ir(hc, ai(jo(vc)), _o(",")), el = Ir(Wo(Jo(vc)), Io, Boolean), rl = _r((function (t, n) {
                    var e = n.b("gdpr");
                    return Ko(e, cc) ? "-" + e : ""
                })), al = _r(gr),
                ol = ((Gf = {}).am = "com.am", Gf.tr = "com.tr", Gf.ge = "com.ge", Gf.il = "co.il", Gf["рф"] = "ru", Gf["xn--p1ai"] = "ru", Gf["укр"] = "ua", Gf["xn--j1amh"] = "ua", Gf["бел"] = "by", Gf["xn--90ais"] = "by", Gf),
                il = "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0 86821095:0".split(" "), ul = {
                    "an.yandex.ru/mapuid/google/?partner-tag=yandex_llc": {Ca: il},
                    "an.yandex.ru/mapuid/google/?partner-tag=yandexcom": {Ca: il},
                    "an.yandex.ru/mapuid/google/?partner-tag=yandexru": {Ca: il},
                    "mc.edadeal.ru": {Ma: /^([^/]+\.)?edadeal\.ru$/, ac: "ru"},
                    "mc.yandexsport.ru": {Ma: /^([^/]+\.)?yandexsport\.ru$/, ac: "ru"},
                    "mc.kinopoisk.ru": {Ma: /^([^/]+\.)?kinopoisk\.ru$/, ac: "ru"}
                },
                cl = ((Hf = {}).ka = "ge", Hf.ro = "md", Hf.tg = "tj", Hf.tk = "tm", Hf.et = "ee", Hf.hy = "com.am", Hf.he = "co.li", Hf.ky = "kg", Hf.uk = "ua", Hf.be = "by", Hf.tr = "com.tr", Hf.kk = "kz", Hf),
                fl = _r(gr), ll = _r((function (t) {
                    var n = Ir(Wo(Ir(Tr, wo("ru"), Cr)), Or((function (t, n) {
                        return t[n] = ["mc.yandex." + n], t
                    }), {}))($i);
                    return ei((function (e) {
                        var r = e[0];
                        (e = e[1]).Ca && !Ko(t, e.Ca) || (n[r] = [r])
                    }), Fo(ul)), n
                })), sl = _r((function (t) {
                    var n = or(t).hostname;
                    return Do((function (t, e) {
                        var r = e[0], a = e[1];
                        return a.Ma && !a.Ma.test(n) || t.push(r), t
                    }), [], Fo(ul))
                })), dl = Kr((function (t, n) {
                    var e = Qi(n), r = function (t) {
                        return t = xi(t), cl[t] || "ru"
                    }(n), a = sl(n) || [Gt(n)], o = Cc(n), i = Ec(n), u = i.b("synced", {});
                    return e = e ? a.concat(r) : a, u && (e = Vo((function (t) {
                        var n = (u[t] || 1) + 1440 < o(Fn);
                        return n && delete u[t], n
                    }), e)), i.l("synced", u), Do((function (n, e) {
                        return ei((function (t) {
                            var r = {domain: t, Qc: e};
                            ra(t, "/") && (r.Lc = 1), n.push(r)
                        }), t[e] || []), n
                    }), [], e)
                })), vl = function (t, n) {
                    return function (n, e, r) {
                        e = zi(r), r = ll(e);
                        var a = dl(r), o = Ko(e, il);
                        return Oi(n) || Qo(n) ? {} : {
                            N: function (e, r) {
                                var i = e.F, u = Xo(n), c = Qi(n) || o, f = Ai(n);
                                if (i = !(i && i.b("pv")), !c || f || i) return r();
                                if (!(c = a(n)).length) return r();
                                if (u.b("startSync")) fl(n).push(r); else {
                                    if (u.l("startSync", !0), u = Hr([n, c, fa], t), o) return u().then(r, r);
                                    if (!(c = $f[0])) return r();
                                    c(n).then(u).then(r, Ir(Eo(r), fe(n, "sy.c"))).catch(fa)
                                }
                            }
                        }
                    }
                }((function (t, n) {
                    var e = Cc(t), r = Xo(t), a = Ec(t), o = uc(t, "c"), i = Mn(t, o);
                    return Do((function (n, o) {
                        function u() {
                            var n = a.b("synced");
                            r.l("startSync", !1), n && (n[o.Qc] = c, a.l("synced", n)), ei(Er, fl(t))
                        }

                        var c,
                            f = i({Y: ["sync.cook"]}, [Gi.ba + "//" + o.domain + (o.Lc ? "" : "/sync_cookie_image_check")], {Qa: 1500});
                        return f.then((function () {
                            c = e(Fn), u()
                        })).catch((function () {
                            c = e(Fn) - 1435, u()
                        })), f = Gr(f, Tr), n.then(f)
                    }), du.resolve(""), n).catch(fe(t, "ctl"))
                })), pl = !1, hl = /^[a-z][\w.+-]+:/i, ml = {}, gl = [vn, cn, nn(), tn],
                bl = nn("et w v z i u vf".split(" "));
            gl.push(vl), gl.unshift((function (t, n, e) {
                return {
                    aa: function (n, r) {
                        var a = jt(t, e);
                        (a = a && a.userParams) && n.Ua && a(n.Ua), r()
                    }
                }
            })), gl.unshift((function (t, n, e) {
                return {
                    N: function (n, r) {
                        if (n.K && (ir(e, n.K), !n.L && n.F && n.D)) {
                            var a = $e(t, n.K), o = al(t), i = n.F.b("pv");
                            a && !n.D.nohit && (i ? encodeURIComponent(a).length > Gi.kc ? o.push([n.F, n.K]) : n.D["site-info"] = a : (n.L = a, n.Sc = !0))
                        }
                        r()
                    }, aa: function (n, r) {
                        var a = al(t), o = jt(t, e), i = o && o.params;
                        i && (o = Vo(Ir(Po("0"), wo(n.F)), a), ei((function (n) {
                            i(n[1]), n = ui(t)(n, a), a.splice(n, 1)
                        }), o)), r()
                    }
                }
            })), gl.push(Ft), gl.push(Ot), gl.push(Wf), gl.push((function (t) {
                return {
                    N: function (n, e) {
                        var r = n.F, a = Ec(t).b("fip");
                        a && r && (r.l("fip", a), dn(n, "fip", Fc(a))), e()
                    }
                }
            })), gl.push(Xt());
            var yl = ((Uf = {}).h = gl, Uf.er = [], Uf);
            yl.adb = [];
            var wl = [nn(), tn];
            wl.push(Wf), yl.f = wl, yl[2] = gl, yl[1] = function (t, n) {
                return Vo(Ir(Jo(n), Cr), t)
            }(gl, [tn]), yl.a = gl, yl.g = gl, yl.e = gl;
            var El = [cn];
            El.push((function (t) {
                return {
                    N: function (n, e) {
                        var r = n.F, a = void 0 === r ? Yi() : r, o = n.xa, i = Yf(t);
                        r = a.b("rqnl", 0) + 1, a.l("rqnl", r), (a = Lr(i, yo(".", [o, "browserInfo"]))) && (a.rqnl = r, zt(t)), e()
                    }, aa: function (n, e) {
                        qt(t, n), e()
                    }
                }
            })), yl.r = El, yl[6] = [cn], yl.t = gl, yl[4] = [bl];
            var _l = [vn, cn, nn()];
            _l.push(Ft), _l.push(Wf), _l.push(Ot), _l.push(Xt()), yl.n = _l, yl.d = [nn(["hid", "u", "v", "vf"])], yl.m = [nn(["u", "v", "vf"]), Xt()], yl.s = [], yl.u = [], yl.S = [nn(["v", "hid", "u", "vf", "rn"])], yl.pi = [], gl.unshift((function (t, n, e) {
                return {
                    N: function (n, r) {
                        var a = n.F, o = n.D;
                        if (!a || !o) return r();
                        !ml[e.id] && a.b("pv") && e.exp && !o.nohit && (o.exp = e.exp, ml[e.id] = !0), a = o["page-ref"];
                        var i = o["page-url"];
                        return a && i !== a ? o["page-ref"] = Lt(t, a) : delete o["page-ref"], o["page-url"] = Lt(t, i).slice(0, Gi.nc), r()
                    }
                }
            })), yl[5] = Vo(Ir(Jo([vn, cn]), Cr), gl);
            var Cl, Sl = Ao(du.reject, du, er()), Tl = ((Cl = {}).h = pn, Cl.er = Gr(Sl, Tr), Cl);
            Tl.a = pn, Tl[4] = Vt, Tl.f = pn, Tl.n = pn, Tl[6] = function (t, n, e) {
                var r = Mn(t, n);
                return function (t) {
                    return gn(0, e, t, !0).then(Hr([t, ["https://mc.yandex.md/cc"], {vb: !0, hc: !1}], r))
                }
            }, Tl[1] = pn, Tl.n = pn, Tl.c = Mn, Tl.g = pn, Tl.e = pn, Tl[2] = pn, Tl.r = function (t, n, e) {
                var r = Vt(t, n, e), a = pn(t, n, e);
                return function (t, n, e) {
                    return "webvisor" === e ? r(t, n, t.D["wv-part"]) : a(t, n)
                }
            }, Tl.adb = hn, Tl.s = Mn, Tl.S = pn, Tl.u = Mn, Tl.pi = Mn, Tl.m = function (t, n, e) {
                return function (r, a) {
                    var o, i = r.D;
                    return (o = {})["page-url"] = i && i["page-url"] || "", i = o, o = Go(r, {D: Go(r.D || {}, i)}), hn(t, n, e)(o, "clmap/" + a.id).catch(fe(t, "c.m"))
                }
            }, Tl.d = pn, Tl.t = pn, Tl[5] = pn, Tl[8] = Mn;
            var xl, Al, kl, Rl, Ml, Dl = ce("g.sen", (function (t, n, e) {
                    var r = uc(t, n);
                    e = function (t, n, e) {
                        var r;
                        return (r = yl[n]) || (r = gl), (r = r.slice()).unshift(Ht), r.unshift(Bt), ni(Ir(ko([t, n, e]), Er), r)
                    }(t, n, e);
                    var a = Tl[n], o = a ? a(t, r, e) : pn(t, r, e);
                    return function () {
                        var t = $r(arguments), e = t.slice(1);
                        return t = Go(t[0], {Y: [n]}), o.apply(void 0, la([t], e))
                    }
                }), Sl), Pl = _r(Ir(Po("id"), Jo([26812653])), zi), Il = _r(ce("dc.init", (function (t) {
                    var n = or(t), e = df(t), r = yc(t), a = Nt(t), o = a.Oc;
                    return a = a.Kc, o && !a && r.l("debug", "1", void 0, n.host), sn(t) || !o && !a ? {
                        log: fa,
                        warn: fa,
                        error: fa
                    } : e
                }))), Nl = fe(window, "h.p", (function (t, n) {
                    var e, r, a = Dl(t, "h", n), o = n.Ga || "" + or(t).href, i = n.Gc || t.document.referrer,
                        u = {F: Yi((e = {}, e.pv = 1, e)), D: (r = {}, r["page-url"] = o, r["page-ref"] = i, r)};
                    return u.K = n.K, u.Ua = n.Ua, n.Ba && u.D && (u.D.nohit = "1"), a(u, n).then((function (e) {
                        e && (n.Ba || Pt(t, n, "PageView. Counter " + n.id + ". URL: " + o + ". Referrer: " + i, n.K)(), bn(t, Hr([t, n, e], Jt)))
                    })).catch(fe(t, "h.g.s"))
                })), Ll = _r(br, zi), Ol = ce("p.ar", (function (t, n) {
                    var e = Dl(t, "a", n);
                    return function (r, a, o, i, u, c) {
                        var f, l, s = {D: {}, F: Yi((f = {}, f.pv = 1, f.ar = 1, f))};
                        if (r) return a = Xr(a) ? {
                            title: a.title,
                            Nb: a.referer,
                            K: a.params,
                            ea: a.callback,
                            o: a.ctx
                        } : {
                            title: a,
                            Nb: o,
                            K: i,
                            ea: u,
                            o: c
                        }, (o = Ll(n)).url !== r && (o.ref = o.url, o.url = r), r = r || or(t).href, o = a.Nb || o.ref || t.document.referrer, i = Pt(t, n, "PageView. Counter " + n.id + ". URL: " + r + ". Referrer: " + o, a.K), s = e(Go(s, {
                            K: a.K,
                            title: a.title,
                            D: Go(s.D, (l = {}, l["page-url"] = r, l["page-ref"] = o, l))
                        }), n).then(i), Dt(t, "p.ar.s", s, a.ea || fa, a.o)
                    }
                })), Fl = function () {
                    function t(t, n, e) {
                        this.jb = 1, this.wb = 5e3, this.o = t, this.Wb = n, this.ed = e
                    }

                    return t.prototype.Yb = function () {
                        oe(this.o, Ir(Ao(this.flush, this), Ao(this.Yb, this)), this.wb, "b.f")
                    }, t.prototype.send = function (t, n) {
                        var e = this.ed(t, n || [], this.jb);
                        return this.jb += 1, e
                    }, t.prototype.push = function () {
                    }, t.prototype.flush = function () {
                    }, t
                }(), Bl = Wr((function (t, n) {
                    return n[t] || {}
                })), Gl = Wr((function (t, n, e) {
                    var r = Bl(t, e);
                    e[t] = Go(r, n)
                })), Hl = Wr((function (t, n) {
                    delete n[t]
                })), Ul = ce("c.c.cc", (function (t) {
                    var n = Xo(t), e = Ir(Gr(t, kt), Er, (function (n) {
                        var e;
                        return Go({}, n, ((e = {}).oldCode = !!t.ya_cid, e.clickmap = n.clickmap && !!n.clickmap, e))
                    }));
                    return fe(t, "g.c.cc", Ir(Ao(n.b, n, "counters", {}), Bo, ai(e)))
                })), jl = ce("gt.c.rs", (function (t, n) {
                    var e, r = zi(n), a = Rt(t, r), o = n.id, i = n.M, u = n.vc, c = n.ya, f = n.rb;
                    return r = Ir(Gr(r, Hl), Mt(t)), a(((e = {}).id = o, e.type = +i, e.clickmap = u, e.webvisor = !!c, e.trackHash = !!f, e)), r
                })), Xl = ce("th.e", (function (t, n) {
                    function e() {
                        o || (u = Dr(t, "onhashchange") ? lu(t).C(t, ["hashchange"], i) : Pa(t, i))
                    }

                    var r = Dl(t, "t", n), a = Rt(t, zi(n)), o = !1, i = fe(t, "h.h.ch", Ao(Ia, null, t, n, r)), u = fa;
                    return n.rb && (e(), o = !0), {
                        kd: fe(t, "tr.hs.h", (function (t) {
                            var n;
                            t ? e() : u(), a(((n = {}).trackHash = o = !!t, n))
                        })), unsubscribe: u
                    }
                })), ql = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                }, zl = _r((function () {
                    return Do((function (t, n) {
                        var e = sa(n + "/watch.js");
                        return ql[e] || (t[e] = 1), t
                    }), {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                })), Vl = 1, Wl = {}, Yl = {}, Kl = ce("nb.p", (function (t, n) {
                    function e(n) {
                        f() || (n = "number" == typeof n ? n : 15e3, n = function (t, n, e) {
                            function r() {
                                Wl[p] = !0, o(!1), n()
                            }

                            function a() {
                                if (mr(t, Yl[p]), Wl[p]) o(!1); else {
                                    var n = Math.max(0, e - (l ? s : s + u(Bn) - d));
                                    n ? Yl[p] = oe(t, r, n, "u.t.d.c") : r()
                                }
                            }

                            function o(t) {
                                ei((function (n) {
                                    var e = n[0], r = n[1];
                                    n = n[2], t ? v.C(e, r, n) : v.Ta(e, r, n)
                                }), h)
                            }

                            var i = Gr(!1, o);
                            if (Si(t)) return {id: oe(t, n, e, "u.t.d"), Bb: i};
                            var u = Cc(t), c = !1, f = !1, l = !0, s = 0, d = u(Bn), v = lu(t), p = Vl;
                            Vl += 1, Yl[p] = 0;
                            var h = [[t, ["blur"], function () {
                                l = c = f = !0, s += u(Bn) - d, d = u(Bn), a()
                            }], [t, ["focus"], function () {
                                c || f || (s = 0), d = u(Bn), c = f = !0, l = !1, a()
                            }], [t.document, ["click", "mousemove", "keydown", "scroll"], function () {
                                f || (c = !0, l = !1, f = !0, a())
                            }]];
                            return o(!0), a(), {id: p, Bb: i}
                        }(t, r(!1), n), p = n.id, o = n.Bb, l())
                    }

                    function r(e) {
                        return function (r) {
                            var a, o, u;
                            if (void 0 === r && ((a = {}).ctx = {}, a.callback = fa, r = a), e || !v && !c.bb) {
                                v = !0, l(), p && function (t, n) {
                                    Si(t) ? mr(t, n) : (Wl[n] = !0, mr(t, Yl[n] || 0))
                                }(t, p);
                                var f = s(Bn);
                                a = (si(c.b("lastHit")) || 0) < f - 18e5;
                                var d = .1 > Math.random();
                                if (c.l("lastHit", f), f = Yi(((o = {}).nb = "1", o.cl = h, o.ar = "1", o)), o = Ll(n), o = {
                                    D: (u = {}, u["page-url"] = o.url || or(t).href, u),
                                    F: f
                                }, u = df(t).warn, !r.callback && r.ctx && u('"callback" argument missing'), e || a || d || !function (t, n) {
                                    return t && n ? mn(t) === mn(n) : !t && !n
                                }(t.location.href, t.document.referrer)) return u = i(o, n).then((function () {
                                    if (!e) {
                                        var r, a, o, i, u, c = .002, f = n.id === Gi.oc ? 1 : .002;
                                        void 0 === c && (c = 1), void 0 === f && (f = 1);
                                        var l = t.performance;
                                        if (l && zr(l.getEntriesByType) && (c = Math.random() > c, f = Math.random() > f, !c || !f)) {
                                            l = t.performance.getEntriesByType("resource");
                                            for (var s = {}, d = {}, v = {}, p = zl(t), h = 0; h < l.length; h += 1) {
                                                var m = l[h], g = m.name.replace(/^https?:\/\//, "").split("?")[0],
                                                    b = sa(g),
                                                    y = ((r = {}).dns = Math.round(m.domainLookupEnd - m.domainLookupStart), r.tcp = Math.round(m.connectEnd - m.connectStart), r.duration = Math.round(m.duration), r.response = Math.round(m.responseEnd - m.requestStart), r);
                                                "script" !== m.initiatorType || c || (d[g] = Go(y, ((a = {}).name = m.name, a.decodedBodySize = m.decodedBodySize, a))), !ql[b] && !p[b] || s[g] || f || (s[g] = Go(y, ((o = {}).pages = t.location.href, o)))
                                            }
                                            Bo(s).length && (v.timings8 = s), Bo(d).length && (v.scripts = d), Bo(v).length && Dl(t, "d", n)({
                                                F: Yi((i = {}, i.ar = "1", i.pv = "1", i)),
                                                L: $e(t, v) || void 0,
                                                D: (u = {}, u["page-url"] = t.location && "" + t.location.href, u)
                                            }, {id: Gi.pc, M: "0"}).catch(fe(t, "r.tim.ng2"))
                                        }
                                    }
                                })), Dt(t, "l.o.l", u, r.callback, r.ctx)
                            }
                            return null
                        }
                    }

                    var a, o, i = Dl(t, "n", n), u = zi(n), c = _c(t, n.id),
                        f = Gr(kt(t, u), Ir(Er, Po("accurateTrackBounce"))),
                        l = Gr(((a = {}).accurateTrackBounce = !0, a), Rt(t, u)), s = Cc(t), d = s(Bn), v = !1, p = 0,
                        h = 0;
                    return Kt(t, n, (function (t) {
                        h = t.Fc - d
                    })), n.za && e(n.za), {Uc: r(!0), za: e, $a: o}
                })), Jl = ["yandex_metrika_callback" + so.callbackPostfix, "yandex_metrika_callbacks" + so.callbackPostfix],
                $l = ce("cb.i", (function (t) {
                    var n = Jl[0], e = Jl[1];
                    zr(t[n]) && t[n](), "object" == typeof t[e] && ei((function (n, r) {
                        t[e][r] = null, vr(t, n)
                    }), t[e]), ei((function (n) {
                        try {
                            delete t[n]
                        } catch (e) {
                            t[n] = void 0
                        }
                    }), Jl)
                })), Zl = {Ld: Fr(/[/&=?#]/)}, Ql = ce("go.in", (function (t, n, e, r) {
                    return void 0 === e && (e = "goal"), function (a, o, i, u) {
                        var c, f;
                        if (!a || Zl[e] && Zl[e](a)) return null;
                        var l = o, s = i || fa;
                        zr(o) && (s = o, l = void 0, u = i);
                        var d = Pt(t, n, "Reach goal. Counter: " + n.id + ". Goal id: " + a, l), v = "goal" === e;
                        return o = Dl(t, "g", n), i = function (t, n, e, r) {
                            var a = or(t), o = a.hostname;
                            return a = a.href, (n = Ll(n).url) && (o = (t = Ca(t, n)).hostname, a = t.href), [r + "://" + o + "/" + e, a || ""]
                        }(t, n, a, e), a = i[0], i = i[1], l = o({
                            K: l,
                            F: Yi((c = {}, c.ar = 1, c)),
                            D: (f = {}, f["page-url"] = a, f["page-ref"] = i, f)
                        }, n).then((function () {
                            v && d(), r && r()
                        })), Dt(t, "g.s", l, s, u)
                    }
                })), ts = Kr((function (t, n) {
                    aa(n) ? t.push(n) : ei(Ir(Tr, Br("push", t)), n)
                })), ns = ce("cl.p", (function (t, n) {
                    function e(e, a, i, u) {
                        void 0 === u && (u = {}), i ? xt(t, n, {
                            url: i,
                            ra: !0,
                            Ia: e,
                            Ka: a,
                            sender: r,
                            o: u.ctx,
                            ea: u.callback,
                            title: u.title,
                            K: u.params
                        }) : o.warn("Empty link")
                    }

                    var r = Dl(t, "2", n), a = [], o = df(t), i = zi(n), u = fe(t, "s.s.tr", Gr(Rt(t, i), At));
                    return i = {
                        o: t,
                        fa: n,
                        Ec: a,
                        sender: r,
                        globalStorage: Xo(t),
                        xc: _c(t, n.id),
                        Mc: ln(t),
                        ld: Gr(kt(t, i), Ir(Er, Po("trackLinks")))
                    }, i = fe(t, "cl.p.c", Gr(i, Tt)), i = lu(t).C(t, ["click"], i), n.Ra && u(n.Ra), {
                        file: fe(t, "file.clc", Hr([!0, !1], e)),
                        Cc: fe(t, "e.l.l.clc", Hr([!1, !0], e)),
                        sc: a = fe(t, "add.f.e.clc", ts(a)),
                        Ra: u,
                        $a: i
                    }
                })),
                es = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                rs = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                as = {D: {t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'}}, os = {id: 42822899, M: "0"},
                is = ((Al = {}).s = "p", Al[8] = "i", Al), us = wr("csp", (function (t, n) {
                    return Dl(t, "s", n)({}, ["https://ymetrica1.com/watch/3/1"])
                })), cs = Ir(Po("settings.pcs"), wo("1")), fs = ce("s", (function (t, n) {
                    return Kt(t, n, (function (e) {
                        var r = Xo(t);
                        if (!r.b("dSync", !1)) return r.l("dSync", !0), St(t, e, {
                            fa: n,
                            ua: "s",
                            eb: "ds",
                            fd: function (n, e, r) {
                                var a, o, i = n.Oa;
                                return n = n.host, Lr(i, "settings") ? pr(er("ds.e")) : (e = e(Bn) - r, r = n[1], i = Yi(((a = {}).di = i, a.dit = e, a.dip = r, a)), (o = {})["page-url"] = or(t).href, a = o, Dl(t, "S", os)({
                                    F: i,
                                    D: a
                                }, os).catch(fe(t, "ds.rs")))
                            }
                        })
                    }))
                })), ls = _r(Ir(Po("performance.memory.jsHeapSizeLimit"), Br("concat", ""))),
                ss = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                ds = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                vs = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                ps = ["availWidth", "availHeight", "availTop"], hs = ["webgl", "experimental-webgl"],
                ms = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], gs = Gr(er("ccf"), pr),
                bs = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                ys = Kr(qe)("(ym-disable-clickmap|ym-clickmap-ignore)"), ws = ce("clm.p", (function (t, n) {
                    if (di(t)) return fa;
                    var e, r = Dl(t, "m", n), a = zi(n), o = Cc(t), i = o(Bn), u = Gr(kt(t, a), Ir(Er, Po("clickmap"))),
                        c = null, f = Xo(t);
                    return a = fe(t, "clm.p.c", (function (a) {
                        var l = u();
                        if (l) {
                            var s = f.b("cls", 0);
                            f.l("cls", s + 1);
                            var d = (s = "object" == typeof l ? l : {}).filter;
                            l = s.isTrackHash || !1;
                            var v = ni((function (t) {
                                return ("" + t).toUpperCase()
                            }), s.ignoreTags || []);
                            To(e) && (e = s.quota || null);
                            var p = !!s.quota;
                            if (a = {
                                element: ht(t, a),
                                position: gt(t, a),
                                button: mt(a),
                                time: o(Bn)
                            }, s = or(t).href, function (t, n, e, r, a) {
                                if (Dr(t, "ymDisabledClickmap") || jc(t) || !n || !n.element) return !1;
                                if (t = Le(n.element), a && !a(n.element, t) || Ko(n.button, [2, 3]) && "A" !== t || ii(wo(t), r)) return !1;
                                if (r = n.element, n && e) {
                                    if (50 > n.time - e.time) return !1;
                                    if (a = Math.abs(e.position.x - n.position.x), t = Math.abs(e.position.y - n.position.y), n = n.time - e.time, e.element === r && 2 > a && 2 > t && 1e3 > n) return !1
                                }
                                for (; r;) {
                                    if (ys(r)) return !1;
                                    r = r.parentElement
                                }
                                return !0
                            }(t, a, c, v, d)) {
                                if (p) {
                                    if (!e) return;
                                    --e
                                }
                                d = (v = De(t, a.element))[0], v = v[1], p = Pe(t, a.element), d = ["rn", cr(t), "x", Math.floor(65535 * (a.position.x - p.left) / (d || 1)), "y", Math.floor(65535 * (a.position.y - p.top) / (v || 1)), "t", Math.floor((a.time - i) / 100), "p", Ae(t, a.element), "X", a.position.x, "Y", a.position.y], d = yo(":", d), l && (d += ":wh:1"), function (t, n, e, r, a) {
                                    var o;
                                    r(n = {
                                        F: Yi(),
                                        D: (o = {}, o["page-url"] = n, o["pointer-click"] = e, o)
                                    }, a).catch(fe(t, "c.s.c"))
                                }(t, s, d, r, n), c = a
                            }
                        }
                    })), lu(t).C(Lr(t, "document"), ["click"], a)
                })), Es = ce("i.e", _r((function (t) {
                    var n = Xo(t), e = n.b("isEU");
                    if (To(e)) {
                        var r = si(Yn(t, "is_gdpr") || "");
                        Ko(r, [0, 1]) ? (n.l("isEU", r), e = !!r) : (t = Lr(t = Ec(t).b("wasSynced"), "params.eu")) && (n.l("isEU", t), e = !!t)
                    }
                    return e
                }), (function (t) {
                    return Xo(t).b("isEU")
                }))), _s = function () {
                    function t(t, n) {
                        this.o = t, this.Ic = n
                    }

                    return t.prototype.ob = function (t) {
                        return function (t) {
                            return Co((function (n, e) {
                                e(t)
                            }))
                        }(ri(Ao(this.Vb, this), t))
                    }, t.prototype.Vb = function (t, n) {
                        var e = this, r = [], a = this.Ic(this.o, n && n.type, t.type);
                        return a && (r = ri((function (n) {
                            return n({o: e.o, O: t}) || []
                        }), a)), r
                    }, t.prototype.Jc = function (t) {
                        return t.length
                    }, t.prototype.isEnabled = function () {
                        return !0
                    }, t
                }(), Cs = function (t) {
                    function n(n, e, r) {
                        return (n = t.call(this, n, e, r) || this).buffer = [], n.jc = 7500, n.wb = 3e4, n.Yb(), n
                    }

                    return function (t, n) {
                        function e() {
                            this.constructor = t
                        }

                        Qr(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                    }(n, t), n.prototype.push = function (t, n) {
                        var e = this.Wb.Vb(t, n);
                        lr(this.buffer, e), this.Wb.Jc(this.buffer) > this.jc && this.flush()
                    }, n.prototype.flush = function () {
                        var t = this.buffer;
                        t.length && (this.send(t), this.buffer = [])
                    }, n
                }(Fl), Ss = "metrikaId_" + Math.random(), Ts = {Wa: 0},
                xs = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                As = ["email", "tel"], ks = /ym-hide-content/, Rs = /ym-show-content/,
                Ms = new RegExp("(" + yo("|", xs) + ")", "i"), Ds = ["password", "passwd", "pswd"],
                Ps = new RegExp("(" + yo("|", xs.concat("имя фамилия отчество индекс телефон адрес паспорт номер(-|\\.|_|\\s){0,2}карты электронная(-|\\.|_|\\s){0,2}почта дата(-|\\.|_|\\s){0,2}рождения дом улица квартира город область".split(" "))) + ")", "i"),
                Is = _r((function () {
                    var t;
                    return (t = {}).A = 1, t.ABBR = 2, t.ACRONYM = 3, t.ADDRESS = 4, t.APPLET = 5, t.AREA = 6, t.B = 7, t.BASE = 8, t.BASEFONT = 9, t.BDO = 10, t.BIG = 11, t.BLOCKQUOTE = 12, t.BODY = 13, t.BR = 14, t.BUTTON = 15, t.CAPTION = 16, t.CENTER = 17, t.CITE = 18, t.CODE = 19, t.COL = 20, t.COLGROUP = 21, t.DD = 22, t.DEL = 23, t.DFN = 24, t.DIR = 25, t.DIV = 26, t.DL = 27, t.DT = 28, t.EM = 29, t.FIELDSET = 30, t.FONT = 31, t.FORM = 32, t.FRAME = 33, t.FRAMESET = 34, t.H1 = 35, t.H2 = 36, t.H3 = 37, t.H4 = 38, t.H5 = 39, t.H6 = 40, t.HEAD = 41, t.HR = 42, t.HTML = 43, t.I = 44, t.IFRAME = 45, t.IMG = 46, t.INPUT = 47, t.INS = 48, t.ISINDEX = 49, t.KBD = 50, t.LABEL = 51, t.LEGEND = 52, t.LI = 53, t.LINK = 54, t.MAP = 55, t.MENU = 56, t.META = 57, t.NOFRAMES = 58, t.NOSCRIPT = 59, t.OBJECT = 60, t.OL = 61, t.OPTGROUP = 62, t.OPTION = 63, t.P = 64, t.PARAM = 65, t.PRE = 66, t.Q = 67, t.S = 68, t.SAMP = 69, t.SCRIPT = 70, t.SELECT = 71, t.SMALL = 72, t.SPAN = 73, t.STRIKE = 74, t.STRONG = 75, t.STYLE = 76, t.SUB = 77, t.SUP = 78, t.TABLE = 79, t.TBODY = 80, t.TD = 81, t.TEXTAREA = 82, t.TFOOT = 83, t.TH = 84, t.THEAD = 85, t.TITLE = 86, t.TR = 87, t.TT = 88, t.U = 89, t.UL = 90, t.VAR = 91, t.NOINDEX = 100, t
                })), Ns = function () {
                    var t = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        Jd: new RegExp("(" + yo("|", t) + ")", "i"),
                        Pd: new RegExp("(" + yo("|", t.concat("имя;фамилия;отчество;индекс;телефон;адрес;паспорт;Номер(-|\\.|_|\\s){0,2}карты;дата(-|\\.|_|\\s){0,2} рождения;дом;улица;квартира;город;область".split(";"))) + ")", "i"),
                        Hd: /ym-record-keys/i,
                        Wc: "•",
                        Od: 88
                    }
                }(), Ls = ai(Gr(Ns.Wc, Tr)), Os = !0, Fs = "", Bs = !1, Gs = !0, Hs = !1, Us = Kr((function (t, n) {
                    var e = Hr([t, "efv." + n.event], fe);
                    return n.G = ni(Ir(Tr, e), n.G), n
                })), js = _r((function (t) {
                    var n = [], e = [], r = [];
                    return t.document.attachEvent && !t.opera && (n.push(it), e.push(za), e.push(Va)), t.document.addEventListener ? n.push(Ya) : (e.push(Wa), r.push(Ya)), at(t, n = la([{
                        target: t,
                        type: "window",
                        event: "beforeunload",
                        G: [fa]
                    }, {target: t, type: "window", event: "unload", G: [fa]}, {event: "click", G: [Ja]}, {
                        event: "dblclick",
                        G: [Ja]
                    }, {event: "mousedown", G: [Ja]}, {event: "mouseup", G: [$a]}, {
                        event: "keydown",
                        G: [no]
                    }, {event: "keypress", G: [eo]}, {event: "copy", G: [Qa]}, {event: "blur", G: n}, {
                        event: "focusin",
                        G: e
                    }, {event: "focusout", G: r}], !t.document.attachEvent || t.opera ? [{
                        target: t,
                        type: "window",
                        event: "focus",
                        G: [ut]
                    }, {
                        target: t,
                        type: "window",
                        event: "blur",
                        G: [it]
                    }] : [], t.document.addEventListener ? [{event: "focus", G: [Wa]}, {
                        event: "change",
                        G: [Ka]
                    }, {event: "submit", G: [ro]}] : [{type: "formInput", event: "change", G: [Ka]}, {
                        type: "form",
                        event: "submit",
                        G: [ro]
                    }]))
                })), Xs = _r((function (t) {
                    return la(Xe(t) ? [{target: t, type: "document", event: "mouseleave", G: [ao]}] : [])
                })), qs = ["submit", "beforeunload", "unload"], zs = _r((function (t, n) {
                    var e = n(t);
                    return Do((function (t, n) {
                        return t[n.type + ":" + n.event] = n.G, t
                    }), {}, e)
                })), Vs = /^\s*function submit\(\)/, Ws = /opera mini/i, Ys = ce("pr.p", (function (t, n) {
                    var e, r;
                    ur(t) && Dl(t, "5", n)({
                        F: Yi(((e = {}).pq = 1, e.ar = 1, e)),
                        D: (r = {}, r["page-url"] = or(t).href, r["page-ref"] = Lr(t, "document.referrer") || "", r)
                    }, n).catch(fe(t, "pr.p.s"))
                })), Ks = Ir(Bo, Po("0")), Js = ce("c.m.p", (function (t, n) {
                    return Gr(Rt(t, zi(n)), et)
                })), $s = ce("e.a.p", (function (t, n) {
                    var e = jt(t, n);
                    return e = Hr([Ir(Tr, Co(!0)), Vo(Boolean, ni(Gr(e, Lr), ["clickmap", "trackLinks", "accurateTrackBounce"]))], ni), n.Bc && e(), e
                })), Zs = ce("cc.i", (function (t, n) {
                    var e = Hr([t, n], nt);
                    Kt(t, n, e = Hr([t, e, 300], oe))
                })), Qs = ce("s.f.i", (function (t, n) {
                    return Kt(t, n, (function (e) {
                        (Lr(e, "settings.button_goals") || -1 !== or(t).href.indexOf("yagoalsbuttons=1")) && (lu(t).C(t, ["click"], fe(t, "c.t.c", Ir(Po("target"), Hr([t, n], oo(t, n, 0, tt))))), Pt(t, n, "Button goal. Counter " + n.id + ". Init.")())
                    }))
                })), td = ce("p.ai", (function (t, n) {
                    return new du((function (e) {
                        (bi(t) || mi(t)) && e(Kt(t, n, (function (e) {
                            var r;
                            return (e = Lr(e, "settings.sbp")) ? Q(t, Go({}, e, ((r = {}).c = n.id, r)), 10) : fa
                        }))), e(fa)
                    }))
                })), nd = ce("8", (function (t, n) {
                    return Kt(t, n, (function (e) {
                        var r, a = Lr(e, "settings.sbp");
                        return a && St(t, e, {fa: n, ua: "8", data: Go({}, a, (r = {}, r.c = n.id, r)), eb: "cs"})
                    }))
                })), ed = ce("p.fh", (function (t, n) {
                    var e, r;
                    void 0 === n && (n = !0);
                    var a = Ec(t), o = Cc(t), i = a.b("wasSynced"), u = {id: 3, M: "0"};
                    return n && i && i.time + 864e5 > o(Bn) ? du.resolve(i) : Dl(t, "f", u)({
                        F: Yi((e = {}, e.pv = 1, e)),
                        D: (r = {}, r["page-url"] = or(t).href, r["page-ref"] = t.document.referrer, r)
                    }, u).then((function (t) {
                        var n;
                        return (n = {}).time = o(Bn), n.params = Lr(t, "settings"), n.bkParams = Lr(t, "userData"), t = n, a.l("wasSynced", t), t
                    })).catch(fe(t, "f.h"))
                })), rd = ["ecommerce", "user_id"], ad = ce("pa.int", (function (t, n) {
                    return function () {
                        var e, r, a = $r(arguments), o = Z(a);
                        if (!o) return null;
                        a = o.yc;
                        var i = o.K;
                        if (o = o.ea, !Xr(i) && !Pr(i)) return null;
                        var u = Dl(t, "1", n), c = Ll(n).url, f = Lr(i, "__ym.user_id"), l = Bo(i), s = Ko("__ymu", l),
                            d = Ko("__ym", l) && f;
                        l = !Pl(n);
                        var v = i;
                        return v.__ym && ((v = Go({}, i)).__ym = Do((function (t, n) {
                            var e = Lr(i, "__ym." + n);
                            return e && (t[n] = e), t
                        }), {}, rd)), f = Pt(t, n, d ? "Set user id " + f : (s ? "User p" : "P") + "arams. Counter " + n.id, d ? void 0 : JSON.stringify(v)), u = u({
                            K: i,
                            F: Yi((e = {}, e.pa = 1, e.ar = 1, e)),
                            D: (r = {}, r["page-url"] = c || or(t).href, r)
                        }, n).then(l ? f : fa), Dt(t, "p.s", u, o, a)
                    }
                })), od = ce("exps.int", (function (t, n) {
                    return function (e, r, a) {
                        var o, i;
                        if (void 0 === r && (r = fa), e && 0 < e.length) {
                            var u = Dl(t, "e", n), c = Ll(n).url;
                            return e = u({
                                F: Yi((o = {}, o.ex = 1, o.ar = 1, o)),
                                D: (i = {}, i["page-url"] = c || or(t).href, i.exp = e, i)
                            }, n), Dt(t, "exps.s", e, r, a)
                        }
                    }
                })), id = ce("y.p", (function (t, n) {
                    var e = fn(t, n);
                    if (e) {
                        var r = ne(t), a = Hr([t, e, n], $);
                        Zn(t, r, (function (t) {
                            t.C(["params"], a)
                        })), e.Z.C(["params"], Ir(Po("1"), a))
                    }
                })),
                ud = ((Rl = {}).transaction_id = "id", Rl.item_id = "id", Rl.item_name = "name", Rl.item_brand = "brand", Rl.promotion_name = "coupon", Rl.index = "position", Rl.item_variant = "variant", Rl.value = "revenue", Rl.item_category = "category", Rl),
                cd = ((Ml = {}).view_item = "detail", Ml.add_to_cart = "add", Ml.remove_from_cart = "remove", Ml.begin_checkout = "checkout", Ml.purchase = "purchase", Ml),
                fd = "currencyCode add delete remove purchase checkout detail".split(" "),
                ld = ce("dl.w", (function (t, n, e) {
                    var r = 0;
                    return te(t, t[n], e) || (r = oe(t, (function () {
                        ld(t, n, e)
                    }), 1e3, "ec.dl")), function () {
                        return mr(t, r)
                    }
                })), sd = ce("p.e", (function (t, n) {
                    var e = jt(t, n);
                    if (e) {
                        e = Ao(e.params, e);
                        var r, a = fe(t, "h.ee", Hr([t, e], Y)), o = function (t) {
                            r = t, t.La.C(a)
                        };
                        if (n.Ea) return ld(t, n.Ea, o);
                        var i = Kt(t, n, (function (n) {
                            return (n = Lr(n, "settings.ecommerce")) ? ld(t, n, o) : fa
                        }));
                        return function () {
                            i.then((function (t) {
                                t(), r && r.unsubscribe()
                            }))
                        }
                    }
                })), dd = ce("fid", (function (t) {
                    var n, e = fa;
                    if (!zr(t.PerformanceObserver)) return e;
                    var r = Xo(t);
                    if (r.b("fido")) return e;
                    r.l("fido", !0);
                    var a = new t.PerformanceObserver(fe(t, "fid", (function (n) {
                        n = n.getEntries()[0], r.l("fid", t.Math.round(100 * (n.processingStart - n.startTime))), e()
                    })));
                    e = function () {
                        return a.disconnect()
                    };
                    try {
                        a.observe(((n = {}).type = "first-input", n.buffered = !0, n))
                    } catch (t) {
                    }
                    return e
                })), vd = Wr((function (t, n, e, r) {
                    var a, o;
                    (e = jt(n, e)) && function (t, n, e) {
                        var r = !1, a = "";
                        if (!Xr(n)) return It(e, "Ecommerce data should be an object"), r;
                        var o = n.goods;
                        switch (t) {
                            case"detail":
                            case"add":
                            case"remove":
                                Pr(o) && o.length ? (r = qo((function (t) {
                                    return Xr(t) && (aa(t.id) || fr(e, t.id) || aa(t.name))
                                }), o)) || (a = "All items in 'goods' should be objects and contain 'id' or 'name' field") : a = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case"purchase":
                                fr(e, n.id) || aa(n.id) ? r = !0 : a = "Purchase object should contain string or number 'id' field"
                        }
                        return It(e, a), r
                    }(t, r, n) && (n = Ao(e.params, e), (t = K(t, r, "goods")) && n && n(((a = {}).__ym = ((o = {}).ecommerce = [t], o), a)))
                })), pd = ce("ecm.a", vd("add")), hd = ce("ecm.r", vd("remove")), md = ce("ecm.d", vd("detail")),
                gd = ce("ecm.p", vd("purchase")), bd = Ou("form"), yd = Hu("form"), wd = _r((function (t) {
                    return yo("[^\\d<>]*", t.split(""))
                })), Ed = _r((function (t) {
                    return new RegExp(wd(t), "g")
                })), _d = Ir(Gr("replace", Br), ko([/\D/g, ""]), Er), Cd = /\S/,
                Sd = Gr(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Nr),
                Td = _r((function (t) {
                    return (t = function (t) {
                        return t ? Ir(ai((function (t) {
                            var n = (t = t.split("="))[1];
                            return [t[0], qr(n) ? void 0 : Qe(n)]
                        })), Or((function (t, n) {
                            return t[n[0]] = n[1], t
                        }), {}))(t.split("&")) : {}
                    }((t = or(t)).search.substring(1)))["_ym_status-check"] = t["_ym_status-check"] || "", t._ym_lang = t._ym_lang || "ru", t
                })), xd = Ir(Td, Po("_ym_status-check"), si), Ad = Ir(Td, Po("_ym_lang")),
                kd = ["https://iframe-toloka.com/"],
                Rd = Fr(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Md = ["form", "button", "phone", "status"], Dd = _r((function (t, n, e) {
                    e.inline ? N(t, e) : (t._ym__postMessageEvent = n, t._ym__inpageMode = e.inpageMode, t._ym__initMessage = e.initMessage, function (t, n) {
                        var e = Au(t);
                        if (e) {
                            e = e("div");
                            var r = je(t);
                            if (r) {
                                e.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                                var a = e.firstChild;
                                a.onload = function () {
                                    xe(a.contentWindow, {src: n})
                                }, t._ym__remoteIframeEl = a, r.appendChild(e), e.removeChild(a);
                                var o = null;
                                e.attachShadow ? o = e.attachShadow({mode: "open"}) : e.createShadowRoot ? o = e.createShadowRoot() : e.webkitCreateShadowRoot && (o = e.webkitCreateShadowRoot()), o ? o.appendChild(a) : (r.appendChild(a), t._ym__remoteIframeContainer = a)
                            }
                        }
                    }(t, e.resource))
                }), (function (t, n, e) {
                    return e.id
                })), Pd = ce("cs.init", (function (t, n) {
                    var e, r = xd(t);
                    r && n.id === r && "0" === n.M && ((e = {}).lang = Ad(t), e.fileId = "status", e.id = "" + n.id, oe(t, Hr([t, r = e], N), 0, "cs"))
                })), Id = _r((function (t) {
                    return di(t) || !ua("querySelectorAll", t.document.querySelectorAll)
                })), Nd = _r(G), Ld = _r(wa, Sr), Od = ce("phc.p", (function (t, n) {
                    return Id(t) ? fa : Kt(t, n, (function (e) {
                        var r = n.id, a = _a(t, void 0, r), o = a.b("phc_settings") || "";
                        if (e = Lr(e, "settings.phchange")) {
                            var i = $e(t, e) || "";
                            i !== o && a.l("phc_settings", i)
                        } else o && (e = Ld(t, o));
                        a = Lr(e, "clientId"), o = Lr(e, "orderId"), e = Lr(e, "phones") || [], a && o && e.length && (Go(o = {
                            qa: "",
                            sa: "",
                            Xb: 0,
                            T: {},
                            W: [],
                            Fb: !1,
                            ab: !0,
                            o: t,
                            Ab: n
                        }, {Fb: !0}), D(t, r, o), e = ue(t), a = re(t, e, 1e3), r = Ao(D, null, t, r, o), a.C(r), B(t, e))
                    }))
                })), Fd = ce("phc.h", (function (t, n) {
                    return function (t) {
                        return pi(t) || Ei(t) || /mobile/i.test(vi(t)) || !To(Lr(t, "orientation"))
                    }(t) || Id(t) ? null : Kt(t, n, (function (e) {
                        if (!Lr(e, "settings.phchange")) {
                            var r = _a(t, "").b("yaHidePhones");
                            r = r ? wa(t, r) : "", (e = Lr(e, "settings.phhide") || r) && O(t, n, e)
                        }
                    }))
                })), Bd = ce("up.int", (function (t, n) {
                    return fe(t, "up.c", (function (e, r, a) {
                        var o, i = jt(t, n), u = Il(t).warn;
                        i ? Xr(e) ? ((o = {}).__ymu = e, e = o, (o = i.params) && o(e, r || fa, a)) : u("Wrong user params") : u("No counter instance found")
                    }))
                })), Gd = ce("trigger.in", (function (t, n) {
                    n.cc && bn(t, Hr([t, "yacounter" + n.id + "inited"], Fe), "t.i")
                })), Hd = ce("destruct.e", (function (t, n, e) {
                    return function () {
                        var r = Xo(t), a = n.id;
                        ei((function (n, e) {
                            return zr(n) && fe(t, "dest.fr." + e, n)()
                        }), e), delete r.b("counters")[zi(n)], delete t["yaCounter" + a]
                    }
                })), Ud = ce("fip", (function (t, n) {
                    if (!bf(t) || Qo(t)) {
                        var e = Ec(t);
                        if (!e.b("fip")) {
                            var r = Ir(ai(Ir((function (n, e) {
                                return ce("fip." + e, n)(t)
                            }), Ao(Ma, null))), _o("-"))(n);
                            e.l("fip", r)
                        }
                    }
                })), jd = Gr("9-d5ve+.r%7", Tr), Xd = ce("ad", (function (t, n) {
                    if (!n.ha) {
                        var e = Xo(t);
                        if (!e.b("adBlockEnabled")) {
                            var r = function (t) {
                                Ko(t, ["2", "1"]) && e.l("adBlockEnabled", t)
                            }, a = yc(t), o = a.b("isad");
                            if (o) r(o); else {
                                var i = Gr("adStatus", e.l), u = function (t) {
                                    return r(t = t ? "1" : "2"), i("complete"), a.l("isad", t, 1200), t
                                }, c = Dl(t, "adb", n);
                                if (!e.b("adStatus")) {
                                    i("process");
                                    var f = "metrika/a" + jd().replace(/[^a-v]+/g, "") + "t.gif";
                                    !function (t, n) {
                                        var e = t.document;
                                        if (Ko(e.readyState, ["interactive", "complete"])) bn(t, n); else {
                                            var r = lu(t), a = r.C, o = r.Ta, i = function () {
                                                o(e, ["DOMContentLoaded"], i), o(t, ["load"], i), n()
                                            };
                                            a(e, ["DOMContentLoaded"], i), a(t, ["load"], i)
                                        }
                                    }(t, (function () {
                                        return c({}, f).then(Gr(!1, u)).catch(Gr(!0, u))
                                    }))
                                }
                            }
                        }
                    }
                })), qd = ce("suid.int", (function (t, n) {
                    return function (e, r, a) {
                        var o = jt(t, n), i = df(t);
                        aa(e) || fr(t, e) ? (e = Nr(["__ym", "user_id", e]), o.params(e, r || fa, a)) : i.error("Incorrect user ID")
                    }
                })), zd = ce("guid.int", (function (t, n) {
                    return function (e) {
                        var r = Pn(t, n);
                        return e && vr(t, e, null, r), r
                    }
                })), Vd = 0, Wd = {x: 0, y: 0}, Yd = 0, Kd = {x: 0, y: 0}, Jd = {}, $d = _r((function (t) {
                    var n = la([{event: "mousemove", G: [R]}, {
                        target: t,
                        type: "window",
                        event: "scroll",
                        G: [k]
                    }, {event: "onmousewheel" in t.document ? "mousewheel" : "wheel", G: [A]}, {
                        target: t,
                        type: "window",
                        event: "beforeunload",
                        G: [x]
                    }], Zo(t) ? [{target: t, type: "window", event: "unload", G: [x]}] : [], [{
                        target: t,
                        type: "window",
                        event: "resize",
                        G: [T]
                    }, {event: "touchmove", G: [S]}, {
                        event: "touchstart",
                        G: [S]
                    }], t.document.addEventListener ? [{event: "scroll", G: [C]}] : []);
                    return la(js(t), at(t, n))
                })), Zd = Gr($d, (function (t, n, e, r) {
                    return zs(n, t)[e + ":" + r] || []
                })), Qd = _r((function (t) {
                    return la(qs, ["beforeunload"], Zo(t) ? ["unload"] : [])
                })), tv = ce("wv.p", (function (t, n) {
                    return n.ya ? rt(t, n, new _s(t, Zd), $d, Qd(t)) : du.resolve(fa)
                })), nv = Kr((function (t, n) {
                    0 === parseFloat(Lr(n, "settings.c_recp")) && (t.hb.l("ymoo" + t.zb, t.$b(Fn)), t.Xa && t.Xa.destruct && t.Xa.destruct())
                })), ev = ce("wsa", (function (t, n) {
                    var e = {zb: zi(n), Xa: jt(t, n), $b: Cc(t), hb: Ec(t)}, r = e.$b(Fn);
                    if (e.hb.bb) return !1;
                    var a = e.hb.b("ymoo" + e.zb);
                    return !!(a && 30 > r - a) || (Kt(t, n, nv(e)).catch(fe(t, "d.f")), !1)
                })), rv = Ir((function (t) {
                    return t = Lr(t, "navigator.plugins") || [], Io(t) ? Ir(sr, Wo(Boolean), ci((function (t, n) {
                        return t.name > n.name ? 1 : 2
                    })), ai(yt))(t) : ""
                }), _o(",")), av = function (t) {
                    var n = Au(t);
                    if (!n) return "";
                    n = n("canvas");
                    var e = [], r = {zc: hs, Dc: w}, a = r.Dc;
                    r = r.zc;
                    try {
                        var o = Br("getContext", n);
                        e = ni(Ir(Tr, o), r)
                    } catch (t) {
                        return ""
                    }
                    return (o = Yo(Tr, e)) ? a(t, {canvas: n, uc: o}) : ""
                }, ov = ["name", "lang", "localService", "voiceURI", "default"], iv = _r((function (t, n) {
                    return Kt(t, n, Po("settings.form_goals"))
                }), Sr), uv = Gr(!0, p), cv = ce("s.f.i", (function (t, n) {
                    var e = [];
                    lu(t).C(t, ["click"], fe(t, "s.f.c", Hr([t, n, e], v))), lu(t).C(t, ["submit"], fe(t, "s.f.e", Ir(Po("target"), Hr([t, n, e], uv)))), h(t, n, "Form goal. Counter " + n.id + ". Init.")
                })), fv = fa, lv = wr("isp.stat", (function (t, n, e) {
                    var r, a = zi(n);
                    return a = xc(n)[a].ua, Dl(t, "pi", n)({F: Yi((r = {}, r[a] = 1, r))}, [e])
                })), sv = wr("isp.stat", (function (t, n, e) {
                    return new du((function (n, r) {
                        if (function (t, n, e) {
                            var r = Gu(n);
                            if (Ko(e, r.ia) || r.ia.push(e), So(r.ga)) {
                                if (!(e = Au(t))) return null;
                                if (e = e("iframe"), Go(e.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                }), e.src = n, !(t = je(t))) return null;
                                t.appendChild(e), r.ga = e
                            } else (t = Lr(r.ga, "contentWindow")) && t.postMessage("frameReinit", "*");
                            return r.ga
                        }(t, Ki, "isp")) {
                            var a = function (t) {
                                ("1" === t ? n : r)(), fv(), t = Gu(Ki), Ko("isp", t.ia) && (t.ia = Vo(Ir(wo("isp"), Cr), t.ia), t.ia.length || (Ve(t.ga), t.ga = null))
                            };
                            fv = lu(t).C(t, ["message"], Hr([t, e, a], d)), oe(t, a, 1500)
                        } else r()
                    }))
                })), dv = wr("isp", (function (t, n) {
                    Kt(t, n, (function (e) {
                        var r = Yo((function (t) {
                            return Lr(e, "settings." + t)
                        }), ["rt", "mf"]);
                        if (r && Oi(t)) {
                            var a = cs(e) && !eu(t), o = zi(n), i = xc(n);
                            if (i[o] = {ua: r, status: a ? 3 : 4}, !a) return a = function (t, n, e) {
                                var r, a = Ac(t, n), o = or(t);
                                o = tr(o.protocol + "//" + o.hostname + o.pathname), n = Tc(t, n);
                                var i = "";
                                do {
                                    i += cr(t)
                                } while (i.length < n.length);
                                i = i.slice(0, n.length), t = "";
                                for (var u = 0; u < n.length; u += 1) t += (n.charCodeAt(u) + i.charCodeAt(u) - 96) % 10;
                                return t = (n = [i, t])[0], n = n[1], (r = {}, r.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + n + "&mask=" + t + "&ref=" + o, r.rt = "https://" + a + ".mc.yandex.ru/watch/3/1", r)[e]
                            }(t, n, r), ("mf" === r ? sv : lv)(t, n, a).then((function () {
                                i[o].status = 1
                            })).catch((function () {
                                i[o].status = 2
                            }))
                        }
                    })).catch(fe(t, "l.isp"))
                })), vv = /[^\d]/g, pv = /[^\d.,]/g, hv = /[.,]$/, mv = ce("ep.pp", (function (t, n) {
                    if (!n) return 0;
                    t:{
                        for (var e = n.replace(pv, "").replace(hv, ""), r = "0" === e[e.length - 1], a = e.length; 0 < a && !(3 < e.length - a + 1 && r); --a) {
                            var o = e[a - 1];
                            if (Ko(o, [",", "."])) {
                                r = o;
                                break t
                            }
                        }
                        r = ""
                    }
                    return e = r ? n.split(r) : [n], r = r ? e[1] : "00", e = parseFloat(e[0].replace(vv, "") + "." + r.replace(vv, "")), r = Math.pow(10, 8) - .01, t.isNaN(e) ? e = 0 : (e = Math.min(e, r), e = Math.max(e, 0)), e
                })),
                gv = [[["EUR", "€"], "978"], [["USD", "У\\.Е\\.", "\\$"], "840"], [["UAH", "ГРН", "₴"], "980"], ["ТГ KZT ₸ ТҢГ TENGE ТЕНГЕ".split(" "), "398"], [["GBP", "£", "UKL"], "826"], ["RUR RUB Р РУБ ₽ P РUB PУБ PУB PYБ РYБ РУB PУБ".split(" "), "643"]],
                bv = _r((function (t) {
                    return new RegExp(t.join("|"), "i")
                })), yv = ce("ep.cp", (function (t) {
                    if (!t) return "643";
                    var n = t.replace(/\s/g, "");
                    return (t = Yo((function (t) {
                        return bv(t[0]).test(n)
                    }), gv)) ? t[1] : "643"
                })), wv = ce("ep.en", (function (t, n, e) {
                    return 0 > (e = 16 - (n = "" + 100 * n + e + (t = s(t))).length) ? "" : (e = (n = _f("0", e) + n).slice(0, 8), n = n.slice(-8), (e = (92844 ^ +e).toString(35)) + "z" + (n = (92844 ^ +n).toString(35)))
                })), Ev = Ir(u, yv), _v = ce("ep.ctp", (function (t, n, e, r) {
                    var a = Ev(t, e), u = i(t, r);
                    o(t, n, a, u), ua("MutationObserver", t.MutationObserver) && new MutationObserver((function () {
                        var c = Ev(t, e), f = i(t, r);
                        a === c && u === f || o(t, n, a = c, u = f)
                    })).observe(t.document.body, {attributes: !0, childList: !0, subtree: !0, characterData: !0})
                })), Cv = ce("ep.chp", (function (t, n, e, r, o) {
                    return e && c(t, n), r || o ? lu(t).C(t.document, ["click"], fe(t, "ep.chp.cl", Hr([t, n, r, o], a))) : fa
                })), Sv = ce("ep.dec", (function (t, n) {
                    if (!n || di(t)) return [];
                    var e = l(t, n, " ").split(" "), r = e[1], a = e[2], o = e.slice(3);
                    if (1 === (e = parseInt(e[0], 2))) e = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o"; else {
                        if (2 !== e) return [];
                        e = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                    }
                    e = function (t, n) {
                        function e() {
                            var t = f + "0", n = f + "1";
                            u[t] ? u[n] ? (f = f.slice(0, -1), --c) : (i[n] = a(8), u[n] = 1) : (i[t] = a(8), u[t] = 1)
                        }

                        function r() {
                            var t = f + "1";
                            u[f + "0"] ? u[t] ? (f = f.slice(0, -1), --c) : u[f += "1"] = 1 : u[f += "0"] = 1
                        }

                        function a(t) {
                            void 0 === t && (t = 1);
                            var n = o.slice(c, c + t);
                            return c += t, n
                        }

                        for (var o = l(t, n, ""), i = {}, u = {}, c = 1, f = ""; c < o.length - 1;) ("0" === a() ? r : e)();
                        return i
                    }(t, e), o = o.join(""), a = parseInt(r + a, 2);
                    var i = "";
                    r = "";
                    for (var u = 0; r.length < a && o[u];) e[i += o[u]] && (r += String.fromCharCode(parseInt(e[i], 2)), i = ""), u += 1;
                    for (e = "", a = 0; a < r.length;) 128 > (o = r.charCodeAt(a)) ? (e += String.fromCharCode(o), a++) : 191 < o && 224 > o ? (i = r.charCodeAt(a + 1), e += String.fromCharCode((31 & o) << 6 | 63 & i), a += 2) : (i = r.charCodeAt(a + 1), e += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & r.charCodeAt(a + 2)), a += 3);
                    return Pr(r = wa(t, e)) ? r : []
                })), Tv = ce("ep.i", (function (t, n) {
                    return ua("querySelectorAll", t.document.querySelectorAll) ? function (t, n) {
                        return Kt(t, n, (function (n) {
                            var e = Lr(n, "settings.dr");
                            return {Ac: Sv(t, e), isEnabled: Lr(n, "settings.auto_goals")}
                        }))
                    }(t, n).then((function (e) {
                        var a = e.Ac, o = a[0], i = a[1], u = a[2], c = a[3], f = a[4], l = a[5], s = a[6], d = a[7],
                            v = a[8], p = a[9];
                        if (!e.isEnabled) return du.resolve(fa);
                        var h = r(t, o), m = r(t, c), g = r(t, s), b = r(t, v), y = "" + o + i + u == "" + c + f + l;
                        return V(t).then((function () {
                            return h && _v(t, n, i, u), m && !y && _v(t, n, f, l), Cv(t, n, g || b, d, p)
                        }))
                    })) : du.resolve(fa)
                })), xv = /[\*\.\?\(\)]/g, Av = _r((function (t, n, e) {
                    try {
                        var r = e.replace("\\s", " ").replace(xv, "");
                        Il(t).warn('Function "' + r + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (t) {
                    }
                }), Sr), kv = ce("r.nn", (function (t) {
                    Nt(t).isEnabled && te(t, vo, (function (n) {
                        n.La.C((function (n) {
                            Av(t, n[1], n[0]), vo.splice(100)
                        }))
                    }))
                })), Rv = ce("lt.p", wr("lt.p", (function (t) {
                    var n;
                    if (ua("PerformanceObserver", t.PerformanceObserver)) {
                        var e = 0, r = new t.PerformanceObserver(fe(t, "lt.o", (function (n) {
                            n && n.getEntries && (n = n.getEntries(), e = Do((function (t, n) {
                                return t + n.duration
                            }), e, n), kr(t).l("lt", e))
                        })));
                        try {
                            r.observe(((n = {}).type = "longtask", n.buffered = !0, n))
                        } catch (t) {
                            return fa
                        }
                        return function () {
                            return r.disconnect()
                        }
                    }
                    return fa
                })));
            "function" == typeof Promise && Promise.resolve();
            var Mv, Dv, Pv, Iv = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/, Nv = ce("yid.e", (function (t) {
                    var n, e = or(t), r = e.href;
                    ra(e.search, "ysclid") && (e = function (t) {
                        return t.replace(Iv, (function (t, n, e, r) {
                            return "" + n + r
                        }))
                    }(r), null !== (n = null == t ? void 0 : t.history) && void 0 !== n && n.replaceState && ua("replaceState", t.history.replaceState) && t.history.replaceState(void 0, "", e))
                })), Lv = ce("fbq.o", (function (t, n, e) {
                    var r = Lr(t, "fbq");
                    if (r && r.callMethod) {
                        var a = function () {
                            var t = $r(arguments), e = r.apply(void 0, t);
                            return n(t), e
                        };
                        Go(a, r), e && ei(n, e), t.fbq = a
                    } else var o = oe(t, Hr([t, n, la(sr(r && r.queue))], Lv), 1e3, "fbq.d");
                    return Ao(mr, null, t, o)
                })),
                Ov = ((Mv = {}).add_to_wishlist = "add-to-whishlist", Mv.begin_checkout = "begin-checkout", Mv.generate_lead = "submit-lead", Mv.add_payment_info = "add-payment-info", Mv),
                Fv = ((Dv = {}).AddToCart = "add-to-cart", Dv.Lead = "submit-lead", Dv.InitiateCheckout = "begin-checkout", Dv.Purchase = "purchase", Dv.CompleteRegistration = "register", Dv.Contact = "submit-contact", Dv.AddPaymentInfo = "add-payment-info", Dv.AddToWishlist = "add-to-whishlist", Dv.Subscribe = "subscribe", Dv),
                Bv = ((Pv = {})[1] = Ov, Pv[2] = Ov, Pv[3] = Ov, Pv[0] = Fv, Pv), Gv = [Fv.AddToCart, Fv.Purchase],
                Hv = Kr((function (t, n) {
                    var e = Lr(n, "ecommerce"), r = Lr(n, "event") || "";
                    (e = e && r && {
                        version: "3",
                        Fa: r
                    }) || (e = (Pr(n) || Io(n)) && (r = (e = $r(n))[1], "event" === e[0] && r) ? {
                        version: "2",
                        Fa: r
                    } : void 0), e || (e = (e = Lr(n, "ecommerce")) && {version: "1", Fa: yo(",", Bo(e))}), e && t(e)
                })), Uv = ce("ag.e", (function (t, r) {
                    var a = [], o = fe(t, "ag.s", Hr([Er, a], ei));
                    return "0" === r.M && Kt(t, r, (function (o) {
                        if (Lr(o, "settings.auto_goals") && jt(t, r) && (o = Ql(t, r, "autogoal"))) {
                            o = Hr([o, r.Ea], e);
                            var i = Hv(o);
                            o = Hr([t, o], n), a.push(Lv(t, o)), a.push(ld(t, "dataLayer", (function (t) {
                                t.La.C(i)
                            })))
                        }
                    })), o
                })), jv = _r((function (t) {
                    return Lr(t, "crypto.subtle.digest") && Lr(t, "TextEncoder") && Lr(t, "FileReader") && Lr(t, "Blob")
                })), Xv = ce("fpm", (function (n, e) {
                    if ("https:" !== or(n).protocol || !jv(n)) return fa;
                    var r = jt(n, e);
                    return r ? function (e) {
                        return new du((function (a, o) {
                            return Xr(e) ? Bo(e).length ? a(t(n, e).then((function (t) {
                                var n, e;
                                t && t.length && r.params(((n = {}).__ym = ((e = {}).fpp = t, e), n))
                            }), fa)) : o(er("fpm.l")) : o(er("fpm.o"))
                        })).catch(fe(n, "fpm.en"))
                    } : fa
                })), qv = Xo(window);
            qv.ma("hitParam", {}), qv.ma("lastReferrer", window.location.href), qv.ma("getCounters", Ul(window)), $f.push(ed);
            var zv = function (t, n, e, r) {
                var a = this;
                return fe(window, "c.i", (function () {
                    function o(t, n, e) {
                        a[n] = function (t, n, e, r, a) {
                            return e.length && a ? Hr(Do((function (a, o, i) {
                                return e[i] ? a.concat(Hr([t, n, r], o)) : a
                            }), [], e), Ir)()(a) : a
                        }(u, c, e || v, n, t)
                    }

                    function i(t) {
                        return oo(u, c, 0, t)(u, c)
                    }

                    (!window || isNaN(t) && !t) && nr();
                    var u = window, c = function (t, n, e, r, a) {
                        var o = "object" == typeof t ? t : {id: t, M: r, Ba: a, K: e};
                        return ir(t = Do((function (t, n) {
                            var e = n[1], r = e.Tc;
                            return e = o[e.Kb], t[n[0]] = r ? r(e) : e, t
                        }), {}, Fo(n)), t.K || {}), t
                    }(t, Xi, n, e, r);
                    c.id || It(u, "Invalid Metrika id: " + c.id);
                    var f = zi(c), l = qv.b("counters", {}), s = [], d = [], v = [co, oo, uo];
                    if (v.unshift(io), l[f]) return It(u, "Duplicate counter " + f + " initialization"), l[f];
                    var p = !1, h = qv.b("hitParam", {});
                    h[f] && (p = !(!Vi(c.M) || l[f])), h[f] = 1, a._webvisor = c.ya || !1, l[f] = a, qv.l("counters", l), qv.ma("counter", a), h = jl(window, c), s.push(h), Es(window), ev(window, c) && delete l[f], i(Xd), Ud(u, [av, rv, _, Ct, b, bt, ls, _t, g, m, y]), d.push(Gr(vf, i)), i(Nl), d.push(Gr(M, i)), i(Od), i(Fd), o(Ol(u, c), "hit"), o(ad(u, c), "params"), f = i(Xl), s.push(Lr(f, Ks({unsubscribe: 1}))), a.trackHash = oo(u, c, 0, Lr(f, Ks({kd: 1}))), o(Ql(u, c), "reachGoal"), o(od(u, c), "experiments"), i(Gd), p || d.push(Gr(tv, i)), s.push(Uv(u, c)), p = i(Kl), s.push(Lr(p, Ks({$a: 1}))), o(Lr(p, Ks({Uc: 1})), "notBounce"), o(f = i(Xv), "firstPartyParams"), o(Lr(p, Ks({za: 1})), "accurateTrackBounce"), i(id), p = i(ns), s.push(Lr(p, Ks({$a: 1}))), o(Lr(p, Ks({Cc: 1})), "extLink"), o(Lr(p, Ks({sc: 1})), "addFileExtension"), o(Lr(p, Ks({file: 1})), "file"), o(Lr(p, Ks({Ra: 1})), "trackLinks"), s.push(sd(u, c)), s.push(dd(u)), o(pd(u, c), "ecommerceAdd"), o(hd(u, c), "ecommerceRemove"), o(md(u, c), "ecommerceDetail"), o(gd(u, c), "ecommercePurchase"), o((p = i(Bd)) || fa, "userParams"), o(Hd(u, c, s), "destruct", [co, uo]), i(Zc), i(fs), o((p = i(qd)) || fa, "setUserID"), a.getClientID = i(zd) || fa, s.push(i(ws)), o(Js(u, c), "clickmap"), (p = i(Tv)) && p.then(Br("push", s)), i(Ys), o($s(u, c), "enableAll"), i(cv), i(dv), i(Zs), i(Qs), i(Nv), i(Rv), d.push(Gr(Pd, i)), (p = i(td)) && p.then(Br("push", s)), i(nd), bn(u, Hr([u, d, Er, 1, "a.i"], yn)), kv(u)
                }))()
            };
            if (function (t) {
                var n = Xo(t);
                n.b("i") || (n.l("i", !0), lu(t).C(t, ["message"], Gr(t, I)))
            }(window), window.Ya && zv) {
                var Vv = Gi.Va;
                window.Ya[Vv] = zv, $l(window);
                var Wv = window.Ya[Vv];
                Wv.informer = function (t) {
                    var n = fe(t, "i.clch", Na);
                    return lu(t).C(t.document, ["click"], Ao(n, null, t), {passive: !1}), function (n) {
                        var e = Gi.ba, r = t.Ya[Gi.Va], a = !!r._informer;
                        r._informer = Go({domain: "informer.yandex.ru"}, n), a || xe(t, {src: e + "//informer.yandex.ru/metrika/informer.js"})
                    }
                }(window), Wv.counters = qv.b("getCounters")
            }
        }()
    } catch (t) {
    }
}).call(this);