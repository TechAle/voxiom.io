


(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    121: function (e, t, n) {
        "use strict";
        /*! https://mths.be/fromcodepoint v1.0.0 by @mathias */
        var i = n(122), o = n(128), r = n(175), s = n(179), a = n(366), l = i(s(), String);
        o(l, {getPolyfill: s, implementation: r, shim: a}), e.exports = l
    }, 175: function (e, t, n) {
        "use strict";
        /*! https://mths.be/fromcodepoint v1.0.0 by @mathias */
        var i = n(176), o = n(365), r = n(141), s = n(122), a = (n(98), r("Array.prototype.push")),
            l = s.apply(String.fromCharCode, null);
        e.exports = function (e) {
            var t = 16384, n = [], r = -1, s = arguments.length;
            if (!s) return "";
            for (var u = ""; ++r < s;) {
                var d = i(arguments[r]);
                if (!o(d) || d < 0 || d > 1114111) throw RangeError("Invalid code point: " + d);
                d <= 65535 ? a(n, d) : a(n, 55296 + ((d -= 65536) >> 10), d % 1024 + 56320), (r + 1 == s || n.length > t) && (u += l(n), n.length = 0)
            }
            return u
        }
    }, 179: function (e, t, n) {
        "use strict";
        /*! https://mths.be/fromcodepoint v1.0.0 by @mathias */
        var i = n(175);
        e.exports = function () {
            return String.fromCodePoint || i
        }
    }, 338: function (e, t, n) {
        "use strict";
        var i = window.URL || window.webkitURL;
        e.exports = function (e, t) {
            try {
                try {
                    var n;
                    try {
                        (n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(e), n = n.getBlob()
                    } catch (t) {
                        n = new Blob([e])
                    }
                    return new Worker(i.createObjectURL(n))
                } catch (t) {
                    return new Worker("data:application/javascript," + encodeURIComponent(e))
                }
            } catch (e) {
                if (!t) throw Error("Inline worker is not supported");
                return new Worker(t)
            }
        }
    }, 350: function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, i, o, r) {
            var s = +t[0], a = +t[1], l = +t[2], u = +n[0], d = +n[1], c = +n[2], h = Math.sqrt(u * u + d * d + c * c);
            if (0 === h) throw new Error("Can't raycast along a zero vector");
            return function (e, t, n, i, o, r, s, a, l, u) {
                for (var d = 0, c = Math.floor, h = 0 | c(t), _ = 0 | c(n), p = 0 | c(i), f = o > 0 ? 1 : -1, m = r > 0 ? 1 : -1, g = s > 0 ? 1 : -1, b = Math.abs(1 / o), v = Math.abs(1 / r), y = Math.abs(1 / s), w = b < 1 / 0 ? b * (f > 0 ? h + 1 - t : t - h) : 1 / 0, x = v < 1 / 0 ? v * (m > 0 ? _ + 1 - n : n - _) : 1 / 0, E = y < 1 / 0 ? y * (g > 0 ? p + 1 - i : i - p) : 1 / 0, C = -1; d <= a;) {
                    var A = e(h, _, p);
                    if (A) return l && (l[0] = t + d * o, l[1] = n + d * r, l[2] = i + d * s), u && (u[0] = u[1] = u[2] = 0, 0 === C && (u[0] = -f), 1 === C && (u[1] = -m), 2 === C && (u[2] = -g)), A;
                    w < x ? w < E ? (h += f, d = w, w += b, C = 0) : (p += g, d = E, E += y, C = 2) : x < E ? (_ += m, d = x, x += v, C = 1) : (p += g, d = E, E += y, C = 2)
                }
                return l && (l[0] = t + d * o, l[1] = n + d * r, l[2] = i + d * s), u && (u[0] = u[1] = u[2] = 0), 0
            }(e, s, a, l, u /= h, d /= h, c /= h, i = void 0 === i ? 64 : +i, o, r)
        }
    }, 351: function (e, t, n) {
        "use strict";

        function i(e, t) {
            var n = e.__state.conversionName.toString(), i = Math.round(e.r), o = Math.round(e.g), r = Math.round(e.b),
                s = e.a, a = Math.round(e.h), l = e.s.toFixed(1), u = e.v.toFixed(1);
            if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                for (var d = e.hex.toString(16); d.length < 6;) d = "0" + d;
                return "#" + d
            }
            return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + o + "," + r + "," + s + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + o + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + r + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + u + ",a:" + s + "}" : "unknown format"
        }

        n.d(t, "a", (function () {
            return ue
        }));
        var o = Array.prototype.forEach, r = Array.prototype.slice, s = {
            BREAK: {}, extend: function (e) {
                return this.each(r.call(arguments, 1), (function (t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
                        this.isUndefined(t[n]) || (e[n] = t[n])
                    }.bind(this))
                }), this), e
            }, defaults: function (e) {
                return this.each(r.call(arguments, 1), (function (t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
                        this.isUndefined(e[n]) && (e[n] = t[n])
                    }.bind(this))
                }), this), e
            }, compose: function () {
                var e = r.call(arguments);
                return function () {
                    for (var t = r.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, each: function (e, t, n) {
                if (e) if (o && e.forEach && e.forEach === o) e.forEach(t, n); else if (e.length === e.length + 0) {
                    var i, r = void 0;
                    for (r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === this.BREAK) return
                } else for (var s in e) if (t.call(n, e[s], s) === this.BREAK) return
            }, defer: function (e) {
                setTimeout(e, 0)
            }, debounce: function (e, t, n) {
                var i = void 0;
                return function () {
                    var o = this, r = arguments;

                    function s() {
                        i = null, n || e.apply(o, r)
                    }

                    var a = n || !i;
                    clearTimeout(i), i = setTimeout(s, t), a && e.apply(o, r)
                }
            }, toArray: function (e) {
                return e.toArray ? e.toArray() : r.call(e)
            }, isUndefined: function (e) {
                return void 0 === e
            }, isNull: function (e) {
                return null === e
            }, isNaN: function (e) {
                function t(t) {
                    return e.apply(this, arguments)
                }

                return t.toString = function () {
                    return e.toString()
                }, t
            }((function (e) {
                return isNaN(e)
            })), isArray: Array.isArray || function (e) {
                return e.constructor === Array
            }, isObject: function (e) {
                return e === Object(e)
            }, isNumber: function (e) {
                return e === e + 0
            }, isString: function (e) {
                return e === e + ""
            }, isBoolean: function (e) {
                return !1 === e || !0 === e
            }, isFunction: function (e) {
                return e instanceof Function
            }
        }, a = [{
            litmus: s.isString, conversions: {
                THREE_CHAR_HEX: {
                    read: function (e) {
                        var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                        return null !== t && {
                            space: "HEX",
                            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
                        }
                    }, write: i
                }, SIX_CHAR_HEX: {
                    read: function (e) {
                        var t = e.match(/^#([A-F0-9]{6})$/i);
                        return null !== t && {space: "HEX", hex: parseInt("0x" + t[1].toString(), 0)}
                    }, write: i
                }, CSS_RGB: {
                    read: function (e) {
                        var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3])
                        }
                    }, write: i
                }, CSS_RGBA: {
                    read: function (e) {
                        var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3]),
                            a: parseFloat(t[4])
                        }
                    }, write: i
                }
            }
        }, {
            litmus: s.isNumber, conversions: {
                HEX: {
                    read: function (e) {
                        return {space: "HEX", hex: e, conversionName: "HEX"}
                    }, write: function (e) {
                        return e.hex
                    }
                }
            }
        }, {
            litmus: s.isArray, conversions: {
                RGB_ARRAY: {
                    read: function (e) {
                        return 3 === e.length && {space: "RGB", r: e[0], g: e[1], b: e[2]}
                    }, write: function (e) {
                        return [e.r, e.g, e.b]
                    }
                }, RGBA_ARRAY: {
                    read: function (e) {
                        return 4 === e.length && {space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3]}
                    }, write: function (e) {
                        return [e.r, e.g, e.b, e.a]
                    }
                }
            }
        }, {
            litmus: s.isObject, conversions: {
                RGBA_OBJ: {
                    read: function (e) {
                        return !!(s.isNumber(e.r) && s.isNumber(e.g) && s.isNumber(e.b) && s.isNumber(e.a)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: e.a
                        }
                    }, write: function (e) {
                        return {r: e.r, g: e.g, b: e.b, a: e.a}
                    }
                }, RGB_OBJ: {
                    read: function (e) {
                        return !!(s.isNumber(e.r) && s.isNumber(e.g) && s.isNumber(e.b)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b
                        }
                    }, write: function (e) {
                        return {r: e.r, g: e.g, b: e.b}
                    }
                }, HSVA_OBJ: {
                    read: function (e) {
                        return !!(s.isNumber(e.h) && s.isNumber(e.s) && s.isNumber(e.v) && s.isNumber(e.a)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: e.a
                        }
                    }, write: function (e) {
                        return {h: e.h, s: e.s, v: e.v, a: e.a}
                    }
                }, HSV_OBJ: {
                    read: function (e) {
                        return !!(s.isNumber(e.h) && s.isNumber(e.s) && s.isNumber(e.v)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v
                        }
                    }, write: function (e) {
                        return {h: e.h, s: e.s, v: e.v}
                    }
                }
            }
        }], l = void 0, u = void 0, d = function () {
            u = !1;
            var e = arguments.length > 1 ? s.toArray(arguments) : arguments[0];
            return s.each(a, (function (t) {
                if (t.litmus(e)) return s.each(t.conversions, (function (t, n) {
                    if (l = t.read(e), !1 === u && !1 !== l) return u = l, l.conversionName = n, l.conversion = t, s.BREAK
                })), s.BREAK
            })), u
        }, c = void 0, h = {
            hsv_to_rgb: function (e, t, n) {
                var i = Math.floor(e / 60) % 6, o = e / 60 - Math.floor(e / 60), r = n * (1 - t), s = n * (1 - o * t),
                    a = n * (1 - (1 - o) * t),
                    l = [[n, a, r], [s, n, r], [r, n, a], [r, s, n], [a, r, n], [n, r, s]][i];
                return {r: 255 * l[0], g: 255 * l[1], b: 255 * l[2]}
            }, rgb_to_hsv: function (e, t, n) {
                var i = Math.min(e, t, n), o = Math.max(e, t, n), r = o - i, s = void 0;
                return 0 === o ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (s = e === o ? (t - n) / r : t === o ? 2 + (n - e) / r : 4 + (e - t) / r, (s /= 6) < 0 && (s += 1), {
                    h: 360 * s,
                    s: r / o,
                    v: o / 255
                })
            }, rgb_to_hex: function (e, t, n) {
                var i = this.hex_with_component(0, 2, e);
                return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n)
            }, component_from_hex: function (e, t) {
                return e >> 8 * t & 255
            }, hex_with_component: function (e, t, n) {
                return n << (c = 8 * t) | e & ~(255 << c)
            }
        }, _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, p = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, f = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), m = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value" in o) return o.value;
            var s = o.get;
            return void 0 !== s ? s.call(i) : void 0
        }, g = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }, b = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }, v = function () {
            function e() {
                if (p(this, e), this.__state = d.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
                this.__state.a = this.__state.a || 1
            }

            return f(e, [{
                key: "toString", value: function () {
                    return i(this)
                }
            }, {
                key: "toHexString", value: function () {
                    return i(this, !0)
                }
            }, {
                key: "toOriginal", value: function () {
                    return this.__state.conversion.write(this)
                }
            }]), e
        }();

        function y(e, t, n) {
            Object.defineProperty(e, t, {
                get: function () {
                    return "RGB" === this.__state.space || v.recalculateRGB(this, t, n), this.__state[t]
                }, set: function (e) {
                    "RGB" !== this.__state.space && (v.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                }
            })
        }

        function w(e, t) {
            Object.defineProperty(e, t, {
                get: function () {
                    return "HSV" === this.__state.space || v.recalculateHSV(this), this.__state[t]
                }, set: function (e) {
                    "HSV" !== this.__state.space && (v.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
                }
            })
        }

        v.recalculateRGB = function (e, t, n) {
            if ("HEX" === e.__state.space) e.__state[t] = h.component_from_hex(e.__state.hex, n); else {
                if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                s.extend(e.__state, h.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
            }
        }, v.recalculateHSV = function (e) {
            var t = h.rgb_to_hsv(e.r, e.g, e.b);
            s.extend(e.__state, {
                s: t.s,
                v: t.v
            }), s.isNaN(t.h) ? s.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
        }, v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], y(v.prototype, "r", 2), y(v.prototype, "g", 1), y(v.prototype, "b", 0), w(v.prototype, "h"), w(v.prototype, "s"), w(v.prototype, "v"), Object.defineProperty(v.prototype, "a", {
            get: function () {
                return this.__state.a
            }, set: function (e) {
                this.__state.a = e
            }
        }), Object.defineProperty(v.prototype, "hex", {
            get: function () {
                return "HEX" !== this.__state.space && (this.__state.hex = h.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
            }, set: function (e) {
                this.__state.space = "HEX", this.__state.hex = e
            }
        });
        var x = function () {
            function e(t, n) {
                p(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0
            }

            return f(e, [{
                key: "onChange", value: function (e) {
                    return this.__onChange = e, this
                }
            }, {
                key: "onFinishChange", value: function (e) {
                    return this.__onFinishChange = e, this
                }
            }, {
                key: "setValue", value: function (e) {
                    return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
                }
            }, {
                key: "getValue", value: function () {
                    return this.object[this.property]
                }
            }, {
                key: "updateDisplay", value: function () {
                    return this
                }
            }, {
                key: "isModified", value: function () {
                    return this.initialValue !== this.getValue()
                }
            }]), e
        }(), E = {};
        s.each({
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        }, (function (e, t) {
            s.each(e, (function (e) {
                E[e] = t
            }))
        }));
        var C = /(\d+(\.\d+)?)px/;

        function A(e) {
            if ("0" === e || s.isUndefined(e)) return 0;
            var t = e.match(C);
            return s.isNull(t) ? 0 : parseFloat(t[1])
        }

        var S = {
            makeSelectable: function (e, t) {
                void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
                    return !1
                } : function () {
                }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
            }, makeFullscreen: function (e, t, n) {
                var i = n, o = t;
                s.isUndefined(o) && (o = !0), s.isUndefined(i) && (i = !0), e.style.position = "absolute", o && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0)
            }, fakeEvent: function (e, t, n, i) {
                var o = n || {}, r = E[t];
                if (!r) throw new Error("Event type " + t + " not supported.");
                var a = document.createEvent(r);
                switch (r) {
                    case"MouseEvents":
                        var l = o.x || o.clientX || 0, u = o.y || o.clientY || 0;
                        a.initMouseEvent(t, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, l, u, !1, !1, !1, !1, 0, null);
                        break;
                    case"KeyboardEvents":
                        var d = a.initKeyboardEvent || a.initKeyEvent;
                        s.defaults(o, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), d(t, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                        break;
                    default:
                        a.initEvent(t, o.bubbles || !1, o.cancelable || !0)
                }
                s.defaults(a, i), e.dispatchEvent(a)
            }, bind: function (e, t, n, i) {
                var o = i || !1;
                return e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on" + t, n), S
            }, unbind: function (e, t, n, i) {
                var o = i || !1;
                return e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e.detachEvent("on" + t, n), S
            }, addClass: function (e, t) {
                if (void 0 === e.className) e.className = t; else if (e.className !== t) {
                    var n = e.className.split(/ +/);
                    -1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return S
            }, removeClass: function (e, t) {
                if (t) if (e.className === t) e.removeAttribute("class"); else {
                    var n = e.className.split(/ +/), i = n.indexOf(t);
                    -1 !== i && (n.splice(i, 1), e.className = n.join(" "))
                } else e.className = void 0;
                return S
            }, hasClass: function (e, t) {
                return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
            }, getWidth: function (e) {
                var t = getComputedStyle(e);
                return A(t["border-left-width"]) + A(t["border-right-width"]) + A(t["padding-left"]) + A(t["padding-right"]) + A(t.width)
            }, getHeight: function (e) {
                var t = getComputedStyle(e);
                return A(t["border-top-width"]) + A(t["border-bottom-width"]) + A(t["padding-top"]) + A(t["padding-bottom"]) + A(t.height)
            }, getOffset: function (e) {
                var t = e, n = {left: 0, top: 0};
                if (t.offsetParent) do {
                    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent
                } while (t);
                return n
            }, isActive: function (e) {
                return e === document.activeElement && (e.type || e.href)
            }
        }, k = function (e) {
            function t(e, n) {
                p(this, t);
                var i = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), o = i;
                return i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox"), S.bind(i.__checkbox, "change", (function () {
                    o.setValue(!o.__prev)
                }), !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i
            }

            return g(t, e), f(t, [{
                key: "setValue", value: function (e) {
                    var n = m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n
                }
            }, {
                key: "updateDisplay", value: function () {
                    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]), t
        }(x), O = function (e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i, a = o;
                if (o.__select = document.createElement("select"), s.isArray(r)) {
                    var l = {};
                    s.each(r, (function (e) {
                        l[e] = e
                    })), r = l
                }
                return s.each(r, (function (e, t) {
                    var n = document.createElement("option");
                    n.innerHTML = t, n.setAttribute("value", e), a.__select.appendChild(n)
                })), o.updateDisplay(), S.bind(o.__select, "change", (function () {
                    var e = this.options[this.selectedIndex].value;
                    a.setValue(e)
                })), o.domElement.appendChild(o.__select), o
            }

            return g(t, e), f(t, [{
                key: "setValue", value: function (e) {
                    var n = m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n
                }
            }, {
                key: "updateDisplay", value: function () {
                    return S.isActive(this.__select) ? this : (this.__select.value = this.getValue(), m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this))
                }
            }]), t
        }(x), T = function (e) {
            function t(e, n) {
                p(this, t);
                var i = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), o = i;

                function r() {
                    o.setValue(o.__input.value)
                }

                return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), S.bind(i.__input, "keyup", r), S.bind(i.__input, "change", r), S.bind(i.__input, "blur", (function () {
                    o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                })), S.bind(i.__input, "keydown", (function (e) {
                    13 === e.keyCode && this.blur()
                })), i.updateDisplay(), i.domElement.appendChild(i.__input), i
            }

            return g(t, e), f(t, [{
                key: "updateDisplay", value: function () {
                    return S.isActive(this.__input) || (this.__input.value = this.getValue()), m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]), t
        }(x);

        function R(e) {
            var t = e.toString();
            return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
        }

        var P = function (e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i || {};
                return o.__min = r.min, o.__max = r.max, o.__step = r.step, s.isUndefined(o.__step) ? 0 === o.initialValue ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step, o.__precision = R(o.__impliedStep), o
            }

            return g(t, e), f(t, [{
                key: "setValue", value: function (e) {
                    var n = e;
                    return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n)
                }
            }, {
                key: "min", value: function (e) {
                    return this.__min = e, this
                }
            }, {
                key: "max", value: function (e) {
                    return this.__max = e, this
                }
            }, {
                key: "step", value: function (e) {
                    return this.__step = e, this.__impliedStep = e, this.__precision = R(e), this
                }
            }]), t
        }(x);
        var L = function (e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
                o.__truncationSuspended = !1;
                var r = o, a = void 0;

                function l() {
                    r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
                }

                function u(e) {
                    var t = a - e.clientY;
                    r.setValue(r.getValue() + t * r.__impliedStep), a = e.clientY
                }

                function d() {
                    S.unbind(window, "mousemove", u), S.unbind(window, "mouseup", d), l()
                }

                return o.__input = document.createElement("input"), o.__input.setAttribute("type", "text"), S.bind(o.__input, "change", (function () {
                    var e = parseFloat(r.__input.value);
                    s.isNaN(e) || r.setValue(e)
                })), S.bind(o.__input, "blur", (function () {
                    l()
                })), S.bind(o.__input, "mousedown", (function (e) {
                    S.bind(window, "mousemove", u), S.bind(window, "mouseup", d), a = e.clientY
                })), S.bind(o.__input, "keydown", (function (e) {
                    13 === e.keyCode && (r.__truncationSuspended = !0, this.blur(), r.__truncationSuspended = !1, l())
                })), o.updateDisplay(), o.domElement.appendChild(o.__input), o
            }

            return g(t, e), f(t, [{
                key: "updateDisplay", value: function () {
                    var e, n, i;
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : (e = this.getValue(), n = this.__precision, i = Math.pow(10, n), Math.round(e * i) / i), m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]), t
        }(P);

        function B(e, t, n, i, o) {
            return i + (e - t) / (n - t) * (o - i)
        }

        var I = function (e) {
            function t(e, n, i, o, r) {
                p(this, t);
                var s = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, {min: i, max: o, step: r})),
                    a = s;

                function l(e) {
                    e.preventDefault();
                    var t = a.__background.getBoundingClientRect();
                    return a.setValue(B(e.clientX, t.left, t.right, a.__min, a.__max)), !1
                }

                function u() {
                    S.unbind(window, "mousemove", l), S.unbind(window, "mouseup", u), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
                }

                function d(e) {
                    var t = e.touches[0].clientX, n = a.__background.getBoundingClientRect();
                    a.setValue(B(t, n.left, n.right, a.__min, a.__max))
                }

                function c() {
                    S.unbind(window, "touchmove", d), S.unbind(window, "touchend", c), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
                }

                return s.__background = document.createElement("div"), s.__foreground = document.createElement("div"), S.bind(s.__background, "mousedown", (function (e) {
                    document.activeElement.blur(), S.bind(window, "mousemove", l), S.bind(window, "mouseup", u), l(e)
                })), S.bind(s.__background, "touchstart", (function (e) {
                    if (1 !== e.touches.length) return;
                    S.bind(window, "touchmove", d), S.bind(window, "touchend", c), d(e)
                })), S.addClass(s.__background, "slider"), S.addClass(s.__foreground, "slider-fg"), s.updateDisplay(), s.__background.appendChild(s.__foreground), s.domElement.appendChild(s.__background), s
            }

            return g(t, e), f(t, [{
                key: "updateDisplay", value: function () {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * e + "%", m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]), t
        }(P), M = function (e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = o;
                return o.__button = document.createElement("div"), o.__button.innerHTML = void 0 === i ? "Fire" : i, S.bind(o.__button, "click", (function (e) {
                    return e.preventDefault(), r.fire(), !1
                })), S.addClass(o.__button, "button"), o.domElement.appendChild(o.__button), o
            }

            return g(t, e), f(t, [{
                key: "fire", value: function () {
                    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }
            }]), t
        }(x), F = function (e) {
            function t(e, n) {
                p(this, t);
                var i = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                i.__color = new v(i.getValue()), i.__temp = new v(0);
                var o = i;
                i.domElement = document.createElement("div"), S.makeSelectable(i.domElement, !1), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", S.bind(i.__input, "keydown", (function (e) {
                    13 === e.keyCode && _.call(this)
                })), S.bind(i.__input, "blur", _), S.bind(i.__selector, "mousedown", (function () {
                    S.addClass(this, "drag").bind(window, "mouseup", (function () {
                        S.removeClass(o.__selector, "drag")
                    }))
                })), S.bind(i.__selector, "touchstart", (function () {
                    S.addClass(this, "drag").bind(window, "touchend", (function () {
                        S.removeClass(o.__selector, "drag")
                    }))
                }));
                var r, a = document.createElement("div");

                function l(e) {
                    m(e), S.bind(window, "mousemove", m), S.bind(window, "touchmove", m), S.bind(window, "mouseup", c), S.bind(window, "touchend", c)
                }

                function u(e) {
                    g(e), S.bind(window, "mousemove", g), S.bind(window, "touchmove", g), S.bind(window, "mouseup", h), S.bind(window, "touchend", h)
                }

                function c() {
                    S.unbind(window, "mousemove", m), S.unbind(window, "touchmove", m), S.unbind(window, "mouseup", c), S.unbind(window, "touchend", c), f()
                }

                function h() {
                    S.unbind(window, "mousemove", g), S.unbind(window, "touchmove", g), S.unbind(window, "mouseup", h), S.unbind(window, "touchend", h), f()
                }

                function _() {
                    var e = d(this.value);
                    !1 !== e ? (o.__color.__state = e, o.setValue(o.__color.toOriginal())) : this.value = o.__color.toString()
                }

                function f() {
                    o.__onFinishChange && o.__onFinishChange.call(o, o.__color.toOriginal())
                }

                function m(e) {
                    -1 === e.type.indexOf("touch") && e.preventDefault();
                    var t = o.__saturation_field.getBoundingClientRect(), n = e.touches && e.touches[0] || e,
                        i = n.clientX, r = n.clientY, s = (i - t.left) / (t.right - t.left),
                        a = 1 - (r - t.top) / (t.bottom - t.top);
                    return a > 1 ? a = 1 : a < 0 && (a = 0), s > 1 ? s = 1 : s < 0 && (s = 0), o.__color.v = a, o.__color.s = s, o.setValue(o.__color.toOriginal()), !1
                }

                function g(e) {
                    -1 === e.type.indexOf("touch") && e.preventDefault();
                    var t = o.__hue_field.getBoundingClientRect(),
                        n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);
                    return n > 1 ? n = 1 : n < 0 && (n = 0), o.__color.h = 360 * n, o.setValue(o.__color.toOriginal()), !1
                }

                return s.extend(i.__selector.style, {
                    width: "122px",
                    height: "102px",
                    padding: "3px",
                    backgroundColor: "#222",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                }), s.extend(i.__field_knob.style, {
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"),
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                    borderRadius: "12px",
                    zIndex: 1
                }), s.extend(i.__hue_knob.style, {
                    position: "absolute",
                    width: "15px",
                    height: "2px",
                    borderRight: "4px solid #fff",
                    zIndex: 1
                }), s.extend(i.__saturation_field.style, {
                    width: "100px",
                    height: "100px",
                    border: "1px solid #555",
                    marginRight: "3px",
                    display: "inline-block",
                    cursor: "pointer"
                }), s.extend(a.style, {
                    width: "100%",
                    height: "100%",
                    background: "none"
                }), D(a, "top", "rgba(0,0,0,0)", "#000"), s.extend(i.__hue_field.style, {
                    width: "15px",
                    height: "100px",
                    border: "1px solid #555",
                    cursor: "ns-resize",
                    position: "absolute",
                    top: "3px",
                    right: "3px"
                }), (r = i.__hue_field).style.background = "", r.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", r.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s.extend(i.__input.style, {
                    outline: "none",
                    textAlign: "center",
                    color: "#fff",
                    border: 0,
                    fontWeight: "bold",
                    textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)"
                }), S.bind(i.__saturation_field, "mousedown", l), S.bind(i.__saturation_field, "touchstart", l), S.bind(i.__field_knob, "mousedown", l), S.bind(i.__field_knob, "touchstart", l), S.bind(i.__hue_field, "mousedown", u), S.bind(i.__hue_field, "touchstart", u), i.__saturation_field.appendChild(a), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(), i
            }

            return g(t, e), f(t, [{
                key: "updateDisplay", value: function () {
                    var e = d(this.getValue());
                    if (!1 !== e) {
                        var t = !1;
                        s.each(v.COMPONENTS, (function (n) {
                            if (!s.isUndefined(e[n]) && !s.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                        }), this), t && s.extend(this.__color.__state, e)
                    }
                    s.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                    var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, i = 255 - n;
                    s.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, D(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), s.extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + n + "," + n + "," + n + ")",
                        textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)"
                    })
                }
            }]), t
        }(x), N = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

        function D(e, t, n, i) {
            e.style.background = "", s.each(N, (function (o) {
                e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); "
            }))
        }

        var H = function (e, t) {
                var n = t || document, i = document.createElement("style");
                i.type = "text/css", i.innerHTML = e;
                var o = n.getElementsByTagName("head")[0];
                try {
                    o.appendChild(i)
                } catch (e) {
                }
            },
            j = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
            V = function (e, t) {
                var n = e[t];
                return s.isArray(arguments[2]) || s.isObject(arguments[2]) ? new O(e, t, arguments[2]) : s.isNumber(n) ? s.isNumber(arguments[2]) && s.isNumber(arguments[3]) ? s.isNumber(arguments[4]) ? new I(e, t, arguments[2], arguments[3], arguments[4]) : new I(e, t, arguments[2], arguments[3]) : s.isNumber(arguments[4]) ? new L(e, t, {
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4]
                }) : new L(e, t, {
                    min: arguments[2],
                    max: arguments[3]
                }) : s.isString(n) ? new T(e, t) : s.isFunction(n) ? new M(e, t, "") : s.isBoolean(n) ? new k(e, t) : null
            };
        var z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        }, U = function () {
            function e() {
                p(this, e), this.backgroundElement = document.createElement("div"), s.extend(this.backgroundElement.style, {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    display: "none",
                    zIndex: "1000",
                    opacity: 0,
                    WebkitTransition: "opacity 0.2s linear",
                    transition: "opacity 0.2s linear"
                }), S.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), s.extend(this.domElement.style, {
                    position: "fixed",
                    display: "none",
                    zIndex: "1001",
                    opacity: 0,
                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                    transition: "transform 0.2s ease-out, opacity 0.2s linear"
                }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                var t = this;
                S.bind(this.backgroundElement, "click", (function () {
                    t.hide()
                }))
            }

            return f(e, [{
                key: "show", value: function () {
                    var e = this;
                    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), s.defer((function () {
                        e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                    }))
                }
            }, {
                key: "hide", value: function () {
                    var e = this, t = function t() {
                        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", S.unbind(e.domElement, "webkitTransitionEnd", t), S.unbind(e.domElement, "transitionend", t), S.unbind(e.domElement, "oTransitionEnd", t)
                    };
                    S.bind(this.domElement, "webkitTransitionEnd", t), S.bind(this.domElement, "transitionend", t), S.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                }
            }, {
                key: "layout", value: function () {
                    this.domElement.style.left = window.innerWidth / 2 - S.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - S.getHeight(this.domElement) / 2 + "px"
                }
            }]), e
        }();
        H(function (e) {
            if (e && "undefined" != typeof window) {
                var t = document.createElement("style");
                return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e
            }
        }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
        var G = function () {
            try {
                return !!window.localStorage
            } catch (e) {
                return !1
            }
        }(), X = void 0, W = !0, K = void 0, J = !1, Y = [], Q = function e(t) {
            var n = this, i = t || {};
            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), S.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = s.defaults(i, {
                closeOnTop: !1,
                autoPlace: !0,
                width: e.DEFAULT_WIDTH
            }), i = s.defaults(i, {
                resizable: i.autoPlace,
                hideable: i.autoPlace
            }), s.isUndefined(i.load) ? i.load = {preset: "Default"} : i.preset && (i.load.preset = i.preset), s.isUndefined(i.parent) && i.hideable && Y.push(this), i.resizable = s.isUndefined(i.parent) && i.resizable, i.autoPlace && s.isUndefined(i.scrollable) && (i.scrollable = !0);
            var o, r = G && "true" === localStorage.getItem(ne(this, "isLocal")), a = void 0, l = void 0;
            if (Object.defineProperties(this, {
                parent: {
                    get: function () {
                        return i.parent
                    }
                }, scrollable: {
                    get: function () {
                        return i.scrollable
                    }
                }, autoPlace: {
                    get: function () {
                        return i.autoPlace
                    }
                }, closeOnTop: {
                    get: function () {
                        return i.closeOnTop
                    }
                }, preset: {
                    get: function () {
                        return n.parent ? n.getRoot().preset : i.load.preset
                    }, set: function (e) {
                        n.parent ? n.getRoot().preset = e : i.load.preset = e, function (e) {
                            for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t)
                        }(this), n.revert()
                    }
                }, width: {
                    get: function () {
                        return i.width
                    }, set: function (e) {
                        i.width = e, ae(n, e)
                    }
                }, name: {
                    get: function () {
                        return i.name
                    }, set: function (e) {
                        i.name = e, l && (l.innerHTML = i.name)
                    }
                }, closed: {
                    get: function () {
                        return i.closed
                    }, set: function (t) {
                        i.closed = t, i.closed ? S.addClass(n.__ul, e.CLASS_CLOSED) : S.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED)
                    }
                }, load: {
                    get: function () {
                        return i.load
                    }
                }, useLocalStorage: {
                    get: function () {
                        return r
                    }, set: function (e) {
                        G && (r = e, e ? S.bind(window, "unload", a) : S.unbind(window, "unload", a), localStorage.setItem(ne(n, "isLocal"), e))
                    }
                }
            }), s.isUndefined(i.parent)) {
                if (this.closed = i.closed || !1, S.addClass(this.domElement, e.CLASS_MAIN), S.makeSelectable(this.domElement, !1), G && r) {
                    n.useLocalStorage = !0;
                    var u = localStorage.getItem(ne(this, "gui"));
                    u && (i.load = JSON.parse(u))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, S.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), i.closeOnTop ? (S.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (S.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), S.bind(this.__closeButton, "click", (function () {
                    n.closed = !n.closed
                }))
            } else {
                void 0 === i.closed && (i.closed = !0);
                var d = document.createTextNode(i.name);
                S.addClass(d, "controller-name"), l = q(n, d);
                S.addClass(this.__ul, e.CLASS_CLOSED), S.addClass(l, "title"), S.bind(l, "click", (function (e) {
                    return e.preventDefault(), n.closed = !n.closed, !1
                })), i.closed || (this.closed = !1)
            }
            i.autoPlace && (s.isUndefined(i.parent) && (W && (K = document.createElement("div"), S.addClass(K, "dg"), S.addClass(K, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(K), W = !1), K.appendChild(this.domElement), S.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || ae(n, i.width)), this.__resizeHandler = function () {
                n.onResizeDebounced()
            }, S.bind(window, "resize", this.__resizeHandler), S.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), S.bind(this.__ul, "transitionend", this.__resizeHandler), S.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && se(this), a = function () {
                G && "true" === localStorage.getItem(ne(n, "isLocal")) && localStorage.setItem(ne(n, "gui"), JSON.stringify(n.getSaveObject()))
            }, this.saveToLocalStorageIfPossible = a, i.parent || ((o = n.getRoot()).width += 1, s.defer((function () {
                o.width -= 1
            })))
        };

        function q(e, t, n) {
            var i = document.createElement("li");
            return t && i.appendChild(t), n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i), e.onResize(), i
        }

        function Z(e) {
            S.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && S.unbind(window, "unload", e.saveToLocalStorageIfPossible)
        }

        function $(e, t) {
            var n = e.__preset_select[e.__preset_select.selectedIndex];
            n.innerHTML = t ? n.value + "*" : n.value
        }

        function ee(e, t) {
            var n = e.getRoot(), i = n.__rememberedObjects.indexOf(t.object);
            if (-1 !== i) {
                var o = n.__rememberedObjectIndecesToControllers[i];
                if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[t.property] = t, n.load && n.load.remembered) {
                    var r = n.load.remembered, s = void 0;
                    if (r[e.preset]) s = r[e.preset]; else {
                        if (!r.Default) return;
                        s = r.Default
                    }
                    if (s[i] && void 0 !== s[i][t.property]) {
                        var a = s[i][t.property];
                        t.initialValue = a, t.setValue(a)
                    }
                }
            }
        }

        function te(e, t, n, i) {
            if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
            var o = void 0;
            if (i.color) o = new F(t, n); else {
                var r = [t, n].concat(i.factoryArgs);
                o = V.apply(e, r)
            }
            i.before instanceof x && (i.before = i.before.__li), ee(e, o), S.addClass(o.domElement, "c");
            var a = document.createElement("span");
            S.addClass(a, "property-name"), a.innerHTML = o.property;
            var l = document.createElement("div");
            l.appendChild(a), l.appendChild(o.domElement);
            var u = q(e, l, i.before);
            return S.addClass(u, Q.CLASS_CONTROLLER_ROW), o instanceof F ? S.addClass(u, "color") : S.addClass(u, _(o.getValue())), function (e, t, n) {
                if (n.__li = t, n.__gui = e, s.extend(n, {
                    options: function (t) {
                        if (arguments.length > 1) {
                            var i = n.__li.nextElementSibling;
                            return n.remove(), te(e, n.object, n.property, {
                                before: i,
                                factoryArgs: [s.toArray(arguments)]
                            })
                        }
                        if (s.isArray(t) || s.isObject(t)) {
                            var o = n.__li.nextElementSibling;
                            return n.remove(), te(e, n.object, n.property, {before: o, factoryArgs: [t]})
                        }
                    }, name: function (e) {
                        return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                    }, listen: function () {
                        return n.__gui.listen(n), n
                    }, remove: function () {
                        return n.__gui.remove(n), n
                    }
                }), n instanceof I) {
                    var i = new L(n.object, n.property, {min: n.__min, max: n.__max, step: n.__step});
                    s.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function (e) {
                        var t = n[e], o = i[e];
                        n[e] = i[e] = function () {
                            var e = Array.prototype.slice.call(arguments);
                            return o.apply(i, e), t.apply(n, e)
                        }
                    })), S.addClass(t, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild)
                } else if (n instanceof L) {
                    var o = function (t) {
                        if (s.isNumber(n.__min) && s.isNumber(n.__max)) {
                            var i = n.__li.firstElementChild.firstElementChild.innerHTML,
                                o = n.__gui.__listening.indexOf(n) > -1;
                            n.remove();
                            var r = te(e, n.object, n.property, {
                                before: n.__li.nextElementSibling,
                                factoryArgs: [n.__min, n.__max, n.__step]
                            });
                            return r.name(i), o && r.listen(), r
                        }
                        return t
                    };
                    n.min = s.compose(o, n.min), n.max = s.compose(o, n.max)
                } else n instanceof k ? (S.bind(t, "click", (function () {
                    S.fakeEvent(n.__checkbox, "click")
                })), S.bind(n.__checkbox, "click", (function (e) {
                    e.stopPropagation()
                }))) : n instanceof M ? (S.bind(t, "click", (function () {
                    S.fakeEvent(n.__button, "click")
                })), S.bind(t, "mouseover", (function () {
                    S.addClass(n.__button, "hover")
                })), S.bind(t, "mouseout", (function () {
                    S.removeClass(n.__button, "hover")
                }))) : n instanceof F && (S.addClass(t, "color"), n.updateDisplay = s.compose((function (e) {
                    return t.style.borderLeftColor = n.__color.toString(), e
                }), n.updateDisplay), n.updateDisplay());
                n.setValue = s.compose((function (t) {
                    return e.getRoot().__preset_select && n.isModified() && $(e.getRoot(), !0), t
                }), n.setValue)
            }(e, u, o), e.__controllers.push(o), o
        }

        function ne(e, t) {
            return document.location.href + "." + t
        }

        function ie(e, t, n) {
            var i = document.createElement("option");
            i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }

        function oe(e, t) {
            t.style.display = e.useLocalStorage ? "block" : "none"
        }

        function re(e) {
            var t = e.__save_row = document.createElement("li");
            S.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), S.addClass(t, "save-row");
            var n = document.createElement("span");
            n.innerHTML = "&nbsp;", S.addClass(n, "button gears");
            var i = document.createElement("span");
            i.innerHTML = "Save", S.addClass(i, "button"), S.addClass(i, "save");
            var o = document.createElement("span");
            o.innerHTML = "New", S.addClass(o, "button"), S.addClass(o, "save-as");
            var r = document.createElement("span");
            r.innerHTML = "Revert", S.addClass(r, "button"), S.addClass(r, "revert");
            var a = e.__preset_select = document.createElement("select");
            if (e.load && e.load.remembered ? s.each(e.load.remembered, (function (t, n) {
                ie(e, n, n === e.preset)
            })) : ie(e, "Default", !1), S.bind(a, "change", (function () {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                e.preset = this.value
            })), t.appendChild(a), t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(r), G) {
                var l = document.getElementById("dg-local-explain"), u = document.getElementById("dg-local-storage");
                document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(ne(0, "isLocal")) && u.setAttribute("checked", "checked"), oe(e, l), S.bind(u, "change", (function () {
                    e.useLocalStorage = !e.useLocalStorage, oe(e, l)
                }))
            }
            var d = document.getElementById("dg-new-constructor");
            S.bind(d, "keydown", (function (e) {
                !e.metaKey || 67 !== e.which && 67 !== e.keyCode || X.hide()
            })), S.bind(n, "click", (function () {
                d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), X.show(), d.focus(), d.select()
            })), S.bind(i, "click", (function () {
                e.save()
            })), S.bind(o, "click", (function () {
                var t = prompt("Enter a new preset name.");
                t && e.saveAs(t)
            })), S.bind(r, "click", (function () {
                e.revert()
            }))
        }

        function se(e) {
            var t = void 0;

            function n(n) {
                return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
            }

            function i() {
                S.removeClass(e.__closeButton, Q.CLASS_DRAG), S.unbind(window, "mousemove", n), S.unbind(window, "mouseup", i)
            }

            function o(o) {
                return o.preventDefault(), t = o.clientX, S.addClass(e.__closeButton, Q.CLASS_DRAG), S.bind(window, "mousemove", n), S.bind(window, "mouseup", i), !1
            }

            e.__resize_handle = document.createElement("div"), s.extend(e.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            }), S.bind(e.__resize_handle, "mousedown", o), S.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
        }

        function ae(e, t) {
            e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
        }

        function le(e, t) {
            var n = {};
            return s.each(e.__rememberedObjects, (function (i, o) {
                var r = {}, a = e.__rememberedObjectIndecesToControllers[o];
                s.each(a, (function (e, n) {
                    r[n] = t ? e.initialValue : e.getValue()
                })), n[o] = r
            })), n
        }

        Q.toggleHide = function () {
            J = !J, s.each(Y, (function (e) {
                e.domElement.style.display = J ? "none" : ""
            }))
        }, Q.CLASS_AUTO_PLACE = "a", Q.CLASS_AUTO_PLACE_CONTAINER = "ac", Q.CLASS_MAIN = "main", Q.CLASS_CONTROLLER_ROW = "cr", Q.CLASS_TOO_TALL = "taller-than-window", Q.CLASS_CLOSED = "closed", Q.CLASS_CLOSE_BUTTON = "close-button", Q.CLASS_CLOSE_TOP = "close-top", Q.CLASS_CLOSE_BOTTOM = "close-bottom", Q.CLASS_DRAG = "drag", Q.DEFAULT_WIDTH = 245, Q.TEXT_CLOSED = "Close Controls", Q.TEXT_OPEN = "Open Controls", Q._keydownHandler = function (e) {
            "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || Q.toggleHide()
        }, S.bind(window, "keydown", Q._keydownHandler, !1), s.extend(Q.prototype, {
            add: function (e, t) {
                return te(this, e, t, {factoryArgs: Array.prototype.slice.call(arguments, 2)})
            }, addColor: function (e, t) {
                return te(this, e, t, {color: !0})
            }, remove: function (e) {
                this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
                var t = this;
                s.defer((function () {
                    t.onResize()
                }))
            }, destroy: function () {
                if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                this.autoPlace && K.removeChild(this.domElement);
                var e = this;
                s.each(this.__folders, (function (t) {
                    e.removeFolder(t)
                })), S.unbind(window, "keydown", Q._keydownHandler, !1), Z(this)
            }, addFolder: function (e) {
                if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                var t = {name: e, parent: this};
                t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                var n = new Q(t);
                this.__folders[e] = n;
                var i = q(this, n.domElement);
                return S.addClass(i, "folder"), n
            }, removeFolder: function (e) {
                this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Z(e);
                var t = this;
                s.each(e.__folders, (function (t) {
                    e.removeFolder(t)
                })), s.defer((function () {
                    t.onResize()
                }))
            }, open: function () {
                this.closed = !1
            }, close: function () {
                this.closed = !0
            }, hide: function () {
                this.domElement.style.display = "none"
            }, show: function () {
                this.domElement.style.display = ""
            }, onResize: function () {
                var e = this.getRoot();
                if (e.scrollable) {
                    var t = S.getOffset(e.__ul).top, n = 0;
                    s.each(e.__ul.childNodes, (function (t) {
                        e.autoPlace && t === e.__save_row || (n += S.getHeight(t))
                    })), window.innerHeight - t - 20 < n ? (S.addClass(e.domElement, Q.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (S.removeClass(e.domElement, Q.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                }
                e.__resize_handle && s.defer((function () {
                    e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                })), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
            }, onResizeDebounced: s.debounce((function () {
                this.onResize()
            }), 50), remember: function () {
                if (s.isUndefined(X) && ((X = new U).domElement.innerHTML = j), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var e = this;
                s.each(Array.prototype.slice.call(arguments), (function (t) {
                    0 === e.__rememberedObjects.length && re(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
                })), this.autoPlace && ae(this, this.width)
            }, getRoot: function () {
                for (var e = this; e.parent;) e = e.parent;
                return e
            }, getSaveObject: function () {
                var e = this.load;
                return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = le(this)), e.folders = {}, s.each(this.__folders, (function (t, n) {
                    e.folders[n] = t.getSaveObject()
                })), e
            }, save: function () {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = le(this), $(this, !1), this.saveToLocalStorageIfPossible()
            }, saveAs: function (e) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = le(this, !0)), this.load.remembered[e] = le(this), this.preset = e, ie(this, e, !0), this.saveToLocalStorageIfPossible()
            }, revert: function (e) {
                s.each(this.__controllers, (function (t) {
                    this.getRoot().load.remembered ? ee(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
                }), this), s.each(this.__folders, (function (e) {
                    e.revert(e)
                })), e || $(this.getRoot(), !1)
            }, listen: function (e) {
                var t = 0 === this.__listening.length;
                this.__listening.push(e), t && function e(t) {
                    0 !== t.length && z.call(window, (function () {
                        e(t)
                    }));
                    s.each(t, (function (e) {
                        e.updateDisplay()
                    }))
                }(this.__listening)
            }, updateDisplay: function () {
                s.each(this.__controllers, (function (e) {
                    e.updateDisplay()
                })), s.each(this.__folders, (function (e) {
                    e.updateDisplay()
                }))
            }
        });
        var ue = Q
    }, 352: function (e, t, n) {
        "use strict";
        (function (e) {
            var n, i, o = "undefined" == typeof self && void 0 !== e && e.hrtime ? function () {
                var t = e.hrtime();
                return 1e3 * t[0] + t[1] / 1e6
            } : "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now.bind(self.performance) : void 0 !== Date.now ? Date.now : function () {
                return (new Date).getTime()
            }, r = function () {
                function e() {
                    this._tweens = {}, this._tweensAddedDuringUpdate = {}
                }

                return e.prototype.getAll = function () {
                    var e = this;
                    return Object.keys(this._tweens).map((function (t) {
                        return e._tweens[t]
                    }))
                }, e.prototype.removeAll = function () {
                    this._tweens = {}
                }, e.prototype.add = function (e) {
                    this._tweens[e.getId()] = e, this._tweensAddedDuringUpdate[e.getId()] = e
                }, e.prototype.remove = function (e) {
                    delete this._tweens[e.getId()], delete this._tweensAddedDuringUpdate[e.getId()]
                }, e.prototype.update = function (e, t) {
                    var n = Object.keys(this._tweens);
                    if (0 === n.length) return !1;
                    for (e = void 0 !== e ? e : o(); n.length > 0;) {
                        this._tweensAddedDuringUpdate = {};
                        for (var i = 0; i < n.length; i++) {
                            var r = this._tweens[n[i]];
                            r && !1 === r.update(e) && !t && delete this._tweens[n[i]]
                        }
                        n = Object.keys(this._tweensAddedDuringUpdate)
                    }
                    return !0
                }, e
            }(), s = {
                Linear: {
                    None: function (e) {
                        return e
                    }
                }, Quadratic: {
                    In: function (e) {
                        return e * e
                    }, Out: function (e) {
                        return e * (2 - e)
                    }, InOut: function (e) {
                        return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                    }
                }, Cubic: {
                    In: function (e) {
                        return e * e * e
                    }, Out: function (e) {
                        return --e * e * e + 1
                    }, InOut: function (e) {
                        return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                    }
                }, Quartic: {
                    In: function (e) {
                        return e * e * e * e
                    }, Out: function (e) {
                        return 1 - --e * e * e * e
                    }, InOut: function (e) {
                        return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                    }
                }, Quintic: {
                    In: function (e) {
                        return e * e * e * e * e
                    }, Out: function (e) {
                        return --e * e * e * e * e + 1
                    }, InOut: function (e) {
                        return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                    }
                }, Sinusoidal: {
                    In: function (e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    }, Out: function (e) {
                        return Math.sin(e * Math.PI / 2)
                    }, InOut: function (e) {
                        return .5 * (1 - Math.cos(Math.PI * e))
                    }
                }, Exponential: {
                    In: function (e) {
                        return 0 === e ? 0 : Math.pow(1024, e - 1)
                    }, Out: function (e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                    }, InOut: function (e) {
                        return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                    }
                }, Circular: {
                    In: function (e) {
                        return 1 - Math.sqrt(1 - e * e)
                    }, Out: function (e) {
                        return Math.sqrt(1 - --e * e)
                    }, InOut: function (e) {
                        return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                    }
                }, Elastic: {
                    In: function (e) {
                        return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI)
                    }, Out: function (e) {
                        return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin(5 * (e - .1) * Math.PI) + 1
                    }, InOut: function (e) {
                        return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? -.5 * Math.pow(2, 10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI) + 1
                    }
                }, Back: {
                    In: function (e) {
                        var t = 1.70158;
                        return e * e * ((t + 1) * e - t)
                    }, Out: function (e) {
                        var t = 1.70158;
                        return --e * e * ((t + 1) * e + t) + 1
                    }, InOut: function (e) {
                        var t = 2.5949095;
                        return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                    }
                }, Bounce: {
                    In: function (e) {
                        return 1 - s.Bounce.Out(1 - e)
                    }, Out: function (e) {
                        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }, InOut: function (e) {
                        return e < .5 ? .5 * s.Bounce.In(2 * e) : .5 * s.Bounce.Out(2 * e - 1) + .5
                    }
                }
            }, a = {
                Linear: function (e, t) {
                    var n = e.length - 1, i = n * t, o = Math.floor(i), r = a.Utils.Linear;
                    return t < 0 ? r(e[0], e[1], i) : t > 1 ? r(e[n], e[n - 1], n - i) : r(e[o], e[o + 1 > n ? n : o + 1], i - o)
                }, Bezier: function (e, t) {
                    for (var n = 0, i = e.length - 1, o = Math.pow, r = a.Utils.Bernstein, s = 0; s <= i; s++) n += o(1 - t, i - s) * o(t, s) * e[s] * r(i, s);
                    return n
                }, CatmullRom: function (e, t) {
                    var n = e.length - 1, i = n * t, o = Math.floor(i), r = a.Utils.CatmullRom;
                    return e[0] === e[n] ? (t < 0 && (o = Math.floor(i = n * (1 + t))), r(e[(o - 1 + n) % n], e[o], e[(o + 1) % n], e[(o + 2) % n], i - o)) : t < 0 ? e[0] - (r(e[0], e[0], e[1], e[1], -i) - e[0]) : t > 1 ? e[n] - (r(e[n], e[n], e[n - 1], e[n - 1], i - n) - e[n]) : r(e[o ? o - 1 : 0], e[o], e[n < o + 1 ? n : o + 1], e[n < o + 2 ? n : o + 2], i - o)
                }, Utils: {
                    Linear: function (e, t, n) {
                        return (t - e) * n + e
                    }, Bernstein: function (e, t) {
                        var n = a.Utils.Factorial;
                        return n(e) / n(t) / n(e - t)
                    }, Factorial: (n = [1], function (e) {
                        var t = 1;
                        if (n[e]) return n[e];
                        for (var i = e; i > 1; i--) t *= i;
                        return n[e] = t, t
                    }), CatmullRom: function (e, t, n, i, o) {
                        var r = .5 * (n - e), s = .5 * (i - t), a = o * o;
                        return (2 * t - 2 * n + r + s) * (o * a) + (-3 * t + 3 * n - 2 * r - s) * a + r * o + t
                    }
                }
            }, l = function () {
                function e() {
                }

                return e.nextId = function () {
                    return e._nextId++
                }, e._nextId = 0, e
            }(), u = function () {
                function e(e, t) {
                    void 0 === t && (t = c), this._object = e, this._group = t, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = c.Easing.Linear.None, this._interpolationFunction = c.Interpolation.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._id = c.nextId(), this._isChainStopped = !1
                }

                return e.prototype.getId = function () {
                    return this._id
                }, e.prototype.isPlaying = function () {
                    return this._isPlaying
                }, e.prototype.isPaused = function () {
                    return this._isPaused
                }, e.prototype.to = function (e, t) {
                    for (var n in e) this._valuesEnd[n] = e[n];
                    return void 0 !== t && (this._duration = t), this
                }, e.prototype.duration = function (e) {
                    return this._duration = e, this
                }, e.prototype.start = function (e) {
                    if (this._isPlaying) return this;
                    if (this._group.add(this), this._repeat = this._initialRepeat, this._reversed) for (var t in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(t), this._valuesStart[t] = this._valuesStartRepeat[t];
                    return this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = void 0 !== e ? "string" == typeof e ? c.now() + parseFloat(e) : e : c.now(), this._startTime += this._delayTime, this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat), this
                }, e.prototype._setupProperties = function (e, t, n, i) {
                    for (var o in n) {
                        var r = e[o], s = Array.isArray(r), a = s ? "array" : typeof r, l = !s && Array.isArray(n[o]);
                        if ("undefined" !== a && "function" !== a) {
                            if (l) {
                                var u = n[o];
                                if (0 === u.length) continue;
                                u = u.map(this._handleRelativeValue.bind(this, r)), n[o] = [r].concat(u)
                            }
                            if ("object" !== a && !s || !r || l) void 0 === t[o] && (t[o] = r), s || (t[o] *= 1), i[o] = l ? n[o].slice().reverse() : t[o] || 0; else {
                                for (var d in t[o] = s ? [] : {}, r) t[o][d] = r[d];
                                i[o] = s ? [] : {}, this._setupProperties(r, t[o], n[o], i[o])
                            }
                        }
                    }
                }, e.prototype.stop = function () {
                    return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this
                }, e.prototype.end = function () {
                    return this.update(1 / 0), this
                }, e.prototype.pause = function (e) {
                    return this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = void 0 === e ? c.now() : e, this._group.remove(this)), this
                }, e.prototype.resume = function (e) {
                    return this._isPaused && this._isPlaying ? (this._isPaused = !1, this._startTime += (void 0 === e ? c.now() : e) - this._pauseStart, this._pauseStart = 0, this._group.add(this), this) : this
                }, e.prototype.stopChainedTweens = function () {
                    for (var e = 0, t = this._chainedTweens.length; e < t; e++) this._chainedTweens[e].stop();
                    return this
                }, e.prototype.group = function (e) {
                    return this._group = e, this
                }, e.prototype.delay = function (e) {
                    return this._delayTime = e, this
                }, e.prototype.repeat = function (e) {
                    return this._initialRepeat = e, this._repeat = e, this
                }, e.prototype.repeatDelay = function (e) {
                    return this._repeatDelayTime = e, this
                }, e.prototype.yoyo = function (e) {
                    return this._yoyo = e, this
                }, e.prototype.easing = function (e) {
                    return this._easingFunction = e, this
                }, e.prototype.interpolation = function (e) {
                    return this._interpolationFunction = e, this
                }, e.prototype.chain = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return this._chainedTweens = e, this
                }, e.prototype.onStart = function (e) {
                    return this._onStartCallback = e, this
                }, e.prototype.onUpdate = function (e) {
                    return this._onUpdateCallback = e, this
                }, e.prototype.onRepeat = function (e) {
                    return this._onRepeatCallback = e, this
                }, e.prototype.onComplete = function (e) {
                    return this._onCompleteCallback = e, this
                }, e.prototype.onStop = function (e) {
                    return this._onStopCallback = e, this
                }, e.prototype.update = function (e) {
                    var t, n;
                    if (e > this._startTime + this._duration && !this._isPlaying) return !1;
                    if (this.isPlaying || this.start(e), e < this._startTime) return !0;
                    !1 === this._onStartCallbackFired && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), n = (e - this._startTime) / this._duration, n = 0 === this._duration || n > 1 ? 1 : n;
                    var i = this._easingFunction(n);
                    if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, i), this._onUpdateCallback && this._onUpdateCallback(this._object, n), 1 === n) {
                        if (this._repeat > 0) {
                            for (t in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) this._yoyo || "string" != typeof this._valuesEnd[t] || (this._valuesStartRepeat[t] = this._valuesStartRepeat[t] + parseFloat(this._valuesEnd[t])), this._yoyo && this._swapEndStartRepeatValues(t), this._valuesStart[t] = this._valuesStartRepeat[t];
                            return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = e + this._repeatDelayTime : this._startTime = e + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), !0
                        }
                        this._onCompleteCallback && this._onCompleteCallback(this._object);
                        for (var o = 0, r = this._chainedTweens.length; o < r; o++) this._chainedTweens[o].start(this._startTime + this._duration);
                        return this._isPlaying = !1, !1
                    }
                    return !0
                }, e.prototype._updateProperties = function (e, t, n, i) {
                    for (var o in n) if (void 0 !== t[o]) {
                        var r = t[o] || 0, s = n[o], a = Array.isArray(e[o]), l = Array.isArray(s);
                        !a && l ? e[o] = this._interpolationFunction(s, i) : "object" == typeof s && s ? this._updateProperties(e[o], r, s, i) : "number" == typeof (s = this._handleRelativeValue(r, s)) && (e[o] = r + (s - r) * i)
                    }
                }, e.prototype._handleRelativeValue = function (e, t) {
                    return "string" != typeof t ? t : "+" === t.charAt(0) || "-" === t.charAt(0) ? e + parseFloat(t) : parseFloat(t)
                }, e.prototype._swapEndStartRepeatValues = function (e) {
                    var t = this._valuesStartRepeat[e];
                    "string" == typeof this._valuesEnd[e] ? this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e]) : this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = t
                }, e
            }(), d = (i = function (e, t) {
                return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            }, function (e, t) {
                function n() {
                    this.constructor = e
                }

                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), c = new (function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.version = "18.6.0", t.now = o, t.Group = r, t.Easing = s, t.Interpolation = a, t.nextId = l.nextId, t.Tween = u, t
                }

                return d(t, e), t
            }(r));
            t.a = c
        }).call(this, n(49))
    }, 365: function (e, t, n) {
        "use strict";
        var i = n(98)("%Math%"), o = i.floor, r = i.abs, s = n(177), a = n(178);
        e.exports = function (e) {
            if ("number" != typeof e || s(e) || !a(e)) return !1;
            var t = r(e);
            return o(t) === t
        }
    }, 366: function (e, t, n) {
        "use strict";
        /*! https://mths.be/fromcodepoint v1.0.0 by @mathias */
        var i = n(128), o = n(179);
        e.exports = function () {
            var e = o();
            return String.fromCodePoint !== e && i(String, {fromCodePoint: e}), e
        }
    }
}]);