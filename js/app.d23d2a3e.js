(function(t) {
    function e(e) {
        for (var i, s, r = e[0], c = e[1], l = e[2], u = 0, d = []; u < r.length; u++)
            s = r[u],
            o[s] && d.push(o[s][0]),
            o[s] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        p && p(e);
        while (d.length)
            d.shift()();
        return a.push.apply(a, l || []),
            n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (i = !1)
            }
            i && (a.splice(e--, 1),
                t = r(r.s = n[0]))
        }
        return t
    }
    var i = {},
        o = {
            app: 0
        },
        a = [];

    function s(t) {
        return r.p + "js/" + ({
            about: "about"
        }[t] || t) + "." + {
            about: "ca0d488a"
        }[t] + ".js"
    }

    function r(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
    }
    r.e = function(t) {
            var e = [],
                n = o[t];
            if (0 !== n)
                if (n)
                    e.push(n[2]);
                else {
                    var i = new Promise(function(e, i) {
                        n = o[t] = [e, i]
                    });
                    e.push(n[2] = i);
                    var a, c = document.createElement("script");
                    c.charset = "utf-8",
                        c.timeout = 120,
                        r.nc && c.setAttribute("nonce", r.nc),
                        c.src = s(t),
                        a = function(e) {
                            c.onerror = c.onload = null,
                                clearTimeout(l);
                            var n = o[t];
                            if (0 !== n) {
                                if (n) {
                                    var i = e && ("load" === e.type ? "missing" : e.type),
                                        a = e && e.target && e.target.src,
                                        s = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + a + ")");
                                    s.type = i,
                                        s.request = a,
                                        n[1](s)
                                }
                                o[t] = void 0
                            }
                        };
                    var l = setTimeout(function() {
                        a({
                            type: "timeout",
                            target: c
                        })
                    }, 12e4);
                    c.onerror = c.onload = a,
                        document.head.appendChild(c)
                }
            return Promise.all(e)
        },
        r.m = t,
        r.c = i,
        r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        },
        r.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
                8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var i in t)
                    r.d(n, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
            return n
        },
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t["default"]
                } :
                function() {
                    return t
                };
            return r.d(e, "a", e),
                e
        },
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        r.p = "/pow2/",
        r.oe = function(t) {
            throw console.error(t),
                t
        };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e,
        c = c.slice();
    for (var u = 0; u < c.length; u++)
        e(c[u]);
    var p = l;
    a.push([0, "chunk-vendors"]),
        n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0df0": function(t, e, n) {
        "use strict";
        var i = n("288f"),
            o = n.n(i);
        o.a
    },
    1: function(t, e) {},
    2: function(t, e) {},
    "288f": function(t, e, n) {},
    3: function(t, e) {},
    4: function(t, e) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"),
            n("551c"),
            n("f751"),
            n("097d");
        var i = n("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view")], 1)
            },
            a = [],
            s = (n("7c55"),
                n("2877")),
            r = {},
            c = Object(s["a"])(r, o, a, !1, null, null, null),
            l = c.exports,
            u = n("8c4f"),
            p = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "home"
                }, [n("HelloWorld")], 1)
            },
            d = [],
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "hello"
                }, [n("modal", {
                    attrs: {
                        name: "alert-msg",
                        transition: "pop-out",
                        width: 300,
                        height: "auto"
                    }
                }, [n("div", {
                    staticClass: "box"
                }, [t._v(t._s(t.msg))])]), n("div", {
                    staticClass: "form-signin"
                }, [n("h1", {
                    staticClass: "text-left"
                }, [t._m(0), n("span", {
                    staticClass: "ver-algin"
                }, [t._v("POW " + t._s(t.$t("i18nView.powTitle")))]), n("span", {
                    staticClass: "lang-switch"
                }, ["zh" === this.$i18n.locale ? n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.changeLang("en")
                        }
                    }
                }, [t._v("EN")]) : n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.changeLang("zh")
                        }
                    }
                }, [t._v("中")])])]), n("h5", {
                    staticClass: "mb-3 font-weight-normal"
                }), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("\n        " + t._s(t.$t("i18nView.currentAccount")) + ":\n        "), t.currentAccount ? n("span", [t._v("\n          " + t._s(t.currentAccount) + ",\n          "), n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.logout()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.logout")))])]) : n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.login()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.login")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("EOS " + t._s(t.$t("i18nView.balance")) + ": " + t._s(t.eosBalance))])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("\n        POW " + t._s(t.$t("i18nView.balance")) + ": " + t._s(t.powBalance) + "\n        "), t.isMobile ? n("a", {
                    attrs: {
                        href: "https://www.eospow.org",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("i18nView.trade")))]) : n("a", {
                    attrs: {
                        href: "https://www.eospow.org",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("i18nView.trade")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", [t._v("\n        CPU " + t._s(t.$t("i18nView.used")) + ": " + t._s(t.cpuLeft) + ",\n        "), n("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://rex.tokenpocket.pro/"
                    }
                }, [t._v("REX " + t._s(t.$t("i18nView.rent")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", [t._v("\n        CPU " + t._s(t.$t("i18nView.left")) + ": " + t._s(t.cpuMS > 1e3 ? parseFloat(t.cpuMS / 1e3).toFixed(1) + "s" : t.cpuMS + " ms") + "\n        "), t.cpuMS < .25 * t.actionTimes ? n("span", {
                    staticClass: "error"
                }, [t._v(t._s(t.$t("i18nView.notEnough")))]) : t._e()])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("NET " + t._s(t.$t("i18nView.used")) + ": " + t._s(t.netLeft))])]), n("p", {
                    staticClass: "text-muted text-left"
                }, [t._v(t._s(t.$t("i18nView.digTime")) + ": " + t._s(t.digCount))]), t.isMyKey || t.isMeet ? n("p", {
                    staticClass: "mykey-tip"
                }, [t._v("\n      本工具已无法在当前环境使用，请到官网tokenpocket.pro下载\n      "), n("a", {
                    attrs: {
                        href: "https://www.tokenpocket.pro/?from=mykey"
                    }
                }, [t._v("TokenPocket 钱包")]), t._v(" 体验急速低耗的挖矿功能。\n    ")]) : n("div", [t.isAuto ? n("button", {
                    staticClass: "btn mb-3 btn-danger btn-block",
                    on: {
                        click: function(e) {
                            return t.stop()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.stopAuto")))]) : n("button", {
                    staticClass: "btn mb-3 btn-primary btn-block",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.startAuto()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.enableAuto")) + " 0.0001 EOS")])]), n("div", {
                    staticClass: "settings"
                }, [n("h2", [t._v(t._s(t.$t("i18nView.advSetting")))]), n("p", {
                    staticClass: "small-tip"
                }, [t._v(t._s(t.$t("i18nView.settingTips")))]), n("p", {
                    staticClass: "text-left setting-item"
                }, [t._v("\n        " + t._s(t.$t("i18nView.diggingSetting")) + "\n        "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settingAmount,
                        expression: "settingAmount"
                    }],
                    staticStyle: {
                        width: "60px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.settingAmount
                    },
                    on: {
                        blur: t.recordSetting,
                        input: function(e) {
                            e.target.composing || (t.settingAmount = e.target.value)
                        }
                    }
                }), t._v("\n        " + t._s(t.$t("i18nView.diggingSetting1")) + "\n        "), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.digTip")) + " " + t._s(t.predictAmount))])]), n("p", {
                    staticClass: "text-left setting-item"
                }, [t._v("\n        " + t._s(t.$t("i18nView.cpuQuota")) + "\n        "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.cpuQuota,
                        expression: "cpuQuota"
                    }],
                    staticStyle: {
                        width: "60px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.cpuQuota
                    },
                    on: {
                        blur: t.recordCpuQuota,
                        input: function(e) {
                            e.target.composing || (t.cpuQuota = e.target.value)
                        }
                    }
                }), t._v(" %\n        "), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.cpuQuotaTip")))])]), n("p", {
                    staticClass: "text-left setting-item"
                }, [t._v("\n        " + t._s(t.$t("i18nView.actionsPerTx")) + "\n        "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.actionTimes,
                        expression: "actionTimes"
                    }],
                    staticStyle: {
                        width: "60px"
                    },
                    on: {
                        change: [function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.actionTimes = e.target.multiple ? n : n[0]
                        }, function(e) {
                            return t.changeX()
                        }]
                    }
                }, t._l(t.actionTimesList, function(e) {
                    return n("option", {
                        domProps: {
                            value: e.value
                        }
                    }, [t._v(t._s(e.name))])
                }), 0), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.actionsPerTxTip")))])]), n("p", {
                    staticClass: "text-left setting-item"
                }, [n("label", [t._v("\n          " + t._s(t.$t("i18nView.bpBlocker")) + "\n          "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isBpBlockerOn,
                        expression: "isBpBlockerOn"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.isBpBlockerOn) ? t._i(t.isBpBlockerOn, null) > -1 : t.isBpBlockerOn
                    },
                    on: {
                        change: [function(e) {
                            var n = t.isBpBlockerOn,
                                i = e.target,
                                o = !!i.checked;
                            if (Array.isArray(n)) {
                                var a = null,
                                    s = t._i(n, a);
                                i.checked ? s < 0 && (t.isBpBlockerOn = n.concat([a])) : s > -1 && (t.isBpBlockerOn = n.slice(0, s).concat(n.slice(s + 1)))
                            } else
                                t.isBpBlockerOn = o
                        }, function(e) {
                            return t.changeBpBlocker()
                        }]
                    }
                })]), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.bpBlockerTip")))])]), n("p", {
                    staticClass: "text-left setting-item"
                }, [n("label", [t._v("\n          " + t._s(t.$t("i18nView.fastMode")) + "\n          "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isFast,
                        expression: "isFast"
                    }],
                    attrs: {
                        id: "fast-switch",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.isFast) ? t._i(t.isFast, null) > -1 : t.isFast
                    },
                    on: {
                        change: [function(e) {
                            var n = t.isFast,
                                i = e.target,
                                o = !!i.checked;
                            if (Array.isArray(n)) {
                                var a = null,
                                    s = t._i(n, a);
                                i.checked ? s < 0 && (t.isFast = n.concat([a])) : s > -1 && (t.isFast = n.slice(0, s).concat(n.slice(s + 1)))
                            } else
                                t.isFast = o
                        }, t.handleFast]
                    }
                })]), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.fastModeTip")))])])]), n("p", {
                    staticClass: "text-muted node-options"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentEndpoint,
                        expression: "currentEndpoint"
                    }],
                    staticClass: "form-control form-control-sm",
                    staticStyle: {
                        width: "240px",
                        display: "inline-block",
                        padding: "2px 4px",
                        "margin-right": "4px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.currentEndpoint
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.currentEndpoint = e.target.value)
                        }
                    }
                }), n("span", {
                    class: parseInt(t.delayTime) < 200 ? "green" : parseInt(t.delayTime) > 800 ? "red" : "yellow"
                }, [t._v(t._s(t.delayTime))]), n("br"), n("button", {
                    staticClass: "btn btn-sm btn-primary",
                    on: {
                        click: function(e) {
                            return t.updateNode()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.changeNode")))]), n("button", {
                    staticClass: "btn btn-sm btn-primary",
                    on: {
                        click: function(e) {
                            return t.randomNode()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.randomNode")))])])])], 1)
            },
            m = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.tokenpocket.pro/"
                    }
                }, [i("img", {
                    staticClass: "pow2-logo",
                    attrs: {
                        src: n("cf05"),
                        alt: "",
                        height: "30"
                    }
                })])
            }],
            f = (n("ac6a"),
                n("28a5"),
                n("7f7f"),
                n("4917"),
                n("d3b7")),
            g = n.n(f),
            v = n("76b0"),
            _ = n.n(v),
            b = n("876a"),
            w = n.n(b),
            y = n("1315");
        _.a.plugins(new w.a);
        var k = ["eos.newdex.one", "node.betdice.one", "api.main.alohaeos.com", "api.eosdetroit.io"];
        window.bp_blocker = !1,
            window.info_update_time = (new Date).getTime();
        var x = Math.floor(Math.random() * k.length),
            T = {
                blockchain: "eos",
                host: k[x],
                port: 443,
                protocol: "https",
                chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
            },
            S = {
                accounts: [T]
            },
            A = null,
            C = {
                name: "HelloWorld",
                data: function() {
                    return {
                        currentAccount: null,
                        currentPermission: null,
                        readOnlyEos: null,
                        isFirstTime: !0,
                        eosBalance: "",
                        powBalance: "",
                        isAuto: !1,
                        cpuLeft: "",
                        cpuMS: 2,
                        cpuTotalMS: 100,
                        cpuUsedMS: 1,
                        netLeft: "",
                        contractRam: "",
                        contractCpu: "",
                        contractAmount: "",
                        predictAmount: "",
                        msg: "",
                        isFast: !1,
                        digCount: 0,
                        currentEndpoint: "",
                        isMyKey: !1,
                        isMeet: !1,
                        settingAmount: 0,
                        cpuQuota: 0,
                        isMobile: !0,
                        actionTimes: 5,
                        delayTime: "-ms",
                        isBpBlockerOn: !1,
                        actionTimesList: [{
                            value: 1,
                            name: "1x"
                        }, {
                            value: 5,
                            name: "5x"
                        }, {
                            value: 10,
                            name: "10x"
                        }, {
                            value: 20,
                            name: "20x"
                        }, {
                            value: 50,
                            name: "50x"
                        }, {
                            value: 100,
                            name: "100x"
                        }, {
                            value: 150,
                            name: "150x"
                        }, {
                            value: 200,
                            name: "200x"
                        }]
                    }
                },
                created: function() {
                    var t = this;
                    this.isMobile = null != navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|tokenpocket|mmp|smartphone|midp|wap|xoom|j2me|blackberry)/i);
                    var e = T.chainId,
                        n = T.protocol + "://" + T.host + ":" + T.port;
                    this.currentEndpoint = T.protocol + "://" + T.host,
                        this.readOnlyEos = g()({
                            chainId: e,
                            httpEndpoint: n
                        }),
                        this.checkDelay(),
                        this.settingAmount = parseFloat(localStorage.getItem("amount-setting") || 0),
                        this.cpuQuota = parseFloat(localStorage.getItem("cpu-quota") || 0),
                        this.digCount = +localStorage.getItem("dig-count"),
                        this.actionTimes = parseInt(localStorage.getItem("action-times") || 5),
                        _.a.scatter.connect("POW Miner").then(function(e) {
                            if (!e)
                                return !1;
                            t.scatter = _.a.scatter,
                                t.login()
                        }),
                        navigator.userAgent.toLowerCase().indexOf("mykey") > -1 && (this.isMyKey = !0),
                        navigator.userAgent.toLowerCase().indexOf("meet.one") > -1 && (this.isMeet = !0)
                },
                methods: {
                    login: function() {
                        var t = this;
                        this.scatter.getIdentity(S).then(function() {
                            var e = t.scatter.identity.accounts[0];
                            t.scatter;
                            t.pubKey = t.scatter.identity.publicKey,
                                A = t.scatter.eos(T, g.a),
                                t.currentAccount = e.name,
                                t.currentPermission = e.authority,
                                t.queryBalanceInit(),
                                t.infoTimer()
                        }).catch(function(t) {})
                    },
                    recordSetting: function() {
                        localStorage.setItem("amount-setting", this.settingAmount)
                    },
                    changeX: function() {
                        localStorage.setItem("action-times", this.actionTimes)
                    },
                    changeBpBlocker: function() {
                        window.bp_blocker = this.isBpBlockerOn,
                            this.isBpBlockerOn && (this.isFast = !1)
                    },
                    handleFast: function() {
                        var t = this;
                        this.isFast ? (window.bp_blocker = !1,
                            this.isBpBlockerOn = !1,
                            this.fastTimer = setInterval(function() {
                                t.transfer()
                            }, 1e3)) : clearInterval(this.fastTimer)
                    },
                    logout: function() {
                        this.scatter.forgetIdentity(),
                            this.isAuto = !1,
                            this.currentAccount = "",
                            this.currentPermission = "",
                            this.cpuLeft = "",
                            this.netLeft = "",
                            this.powBalance = "",
                            this.eosBalance = "",
                            this.cpuMS = 1,
                            this.cpuTotalMS = 100
                    },
                    infoTimer: function() {
                        var t = this;
                        setInterval(function() {
                            window.bp_blocker && t.isAuto && window.info_update_time + 1e3 < (new Date).getTime() && t.readOnlyEos.getInfo({}).then(function(t) {
                                window.info_update_time = window.block_producer_time = new Date(t.head_block_time + "Z").getTime(),
                                    window.block_producer !== t.head_block_producer && (window.block_producer_time = new Date(t.head_block_time + "Z").getTime()),
                                    window.block_producer = t.head_block_producer
                            })
                        }, 1e3)
                    },
                    checkDelay: function() {
                        var t = this,
                            e = (new Date).getTime();
                        this.readOnlyEos.getInfo({}).then(function(n) {
                            t.delayTime = parseInt((new Date).getTime() - e) + "ms"
                        })
                    },
                    randomNode: function() {
                        var t = Math.floor(Math.random() * k.length),
                            e = {
                                blockchain: "eos",
                                host: k[t],
                                port: 443,
                                protocol: "https",
                                chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
                            },
                            n = e.protocol + "://" + e.host + ":" + e.port;
                        this.currentEndpoint = e.protocol + "://" + e.host,
                            this.readOnlyEos = g()({
                                chainId: e.chainId,
                                httpEndpoint: n
                            }),
                            this.checkDelay()
                    },
                    updateNode: function() {
                        this.currentEndpoint;
                        var t = this.currentEndpoint.split("://"),
                            e = 2 === t.length ? t[0] : "https",
                            n = 2 === t.length ? t[1] : t[0];
                        n.match("/") && (n = n.split("/")[0]);
                        var i = n.split(":");
                        T = {
                                blockchain: "eos",
                                host: i[0],
                                port: i[1] ? i[1] : "https" === e ? 443 : 80,
                                protocol: e,
                                chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
                            },
                            this.login();
                        var o = T.protocol + "://" + T.host + ":" + T.port;
                        this.readOnlyEos = g()({
                                chainId: T.chainId,
                                httpEndpoint: o
                            }),
                            this.checkDelay()
                    },
                    changeLang: function(t) {
                        this.$i18n.locale = t,
                            localStorage.setItem("locale", t),
                            y["Settings"].defaultLocale = "en" === t ? "en-US" : "zh-CN"
                    },
                    startAuto: function() {
                        this.isAuto = !0,
                            this.transfer("start")
                    },
                    recordCpuQuota: function() {
                        localStorage.setItem("cpu-quota", this.cpuQuota)
                    },
                    transfer: function(t) {
                        
                        var e = this;
                        if (this.currentAccount) {
                            if (parseFloat(this.predictAmount) < parseFloat(this.settingAmount) || 0 !== +this.cpuQuota && parseFloat(this.cpuLeft) > parseFloat(this.cpuQuota))
                                return void("start" === t && setTimeout(function() {
                                    e.transfer("start")
                                }, 5e3));
                            if (!this.isAuto)
                                return;
                            for (var n = [], i = 0; i < +this.actionTimes; i++)
                                n.push({
                                    account: "eosio.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "eosiopowcoin",
                                        quantity: "0.0001 EOS",
                                        memo: "Bitcoin is POW"
                                    }
                                });
                            A.transaction({
                                actions: n
                            }).then(function(t) {
                                var n = 0;
                                t.processed.action_traces.forEach(function(t) {
                                        n += parseFloat(t.inline_traces[3].act.data.quantity)
                                    }),
                                    console.info(t.processed.action_traces.length, parseFloat(n), t.processed.receipt.cpu_usage_us),
                                    e.isFirstTime = !1,
                                    e.digCount = e.digCount + t.processed.action_traces.length,
                                    localStorage.setItem("dig-count", e.digCount),
                                    e.isAuto && !e.isFast && e.transfer("start")
                            }).catch(function(t) {
                                console.log(t),
                                    e.isAuto && !e.isFast && setTimeout(function() {
                                        e.transfer("start")
                                    }, 2e3)
                            })
                        }
                    },
                    queryBalanceInit: function() {
                        var t = this;
                        this.currentAccount && (this.balanceTimer || (this.queryBalance(),
                            this.queryState(),
                            this.balanceTimer = setInterval(function() {
                                t.queryBalance()
                            }, 2e3),
                            this.stateTimer = setInterval(function() {
                                t.queryState()
                            }, 1e4)))
                    },
                    handleError: function(t) {
                        if ("string" === typeof t)
                            try {
                                var e = JSON.parse(t);
                                e.error && e.error.details.length ? "tx_duplicate" !== e.error.name && "expired_tx_exception" !== e.error.name && (this.msg = this.$t("i18nView.error") + e.error.details[0].message,
                                    this.$modal.show("alert-msg")) : e.error ? (this.msg = this.$t("i18nView.error") + e.error.what,
                                    this.$modal.show("alert-msg")) : (this.msg = this.$t("i18nView.error") + e.message || e.code || e.msg,
                                    this.$modal.show("alert-msg"))
                            } catch (n) {
                                this.msg = this.$t("i18nView.error") + n,
                                    this.$modal.show("alert-msg")
                            }
                        else
                            this.msg = this.$t("i18nView.error") + t.message || t.type || t.code,
                            this.$modal.show("alert-msg")
                    },
                    stop: function() {
                        this.isAuto = !1,
                            clearInterval(this.fastTimer)
                    },
                    queryState: function() {
                        var t = this;
                        this.currentAccount && (this.readOnlyEos.getCurrencyBalance("eosio.token", this.currentAccount, "EOS").then(function(e) {
                                t.eosBalance = e[0]
                            }),
                            this.readOnlyEos.getCurrencyBalance("eosiopowcoin", this.currentAccount, "POW").then(function(e) {
                                t.powBalance = e[0]
                            }),
                            this.readOnlyEos.getAccount(this.currentAccount).then(function(e) {
                                t.cpuLeft = parseFloat(e.cpu_limit.used / e.cpu_limit.max * 100).toFixed(2) + "%",
                                    t.cpuMS = parseFloat(e.cpu_limit.available / 1e3).toFixed(1),
                                    t.cpuTotalMS = e.cpu_limit.max / 1e3 > 1e3 ? parseFloat(e.cpu_limit.max / 1e6).toFixed(1) + "s" : parseFloat(e.cpu_limit.max / 1e3).toFixed(1) + "ms",
                                    t.cpuUsedMS = e.cpu_limit.used / 1e3 > 1e3 ? parseFloat(e.cpu_limit.used / 1e6).toFixed(1) + "s" : parseFloat(e.cpu_limit.used / 1e3).toFixed(1) + "ms",
                                    t.netLeft = parseFloat(e.net_limit.used / e.net_limit.max * 100).toFixed(2) + "%"
                            }))
                    },
                    queryBalance: function() {
                        var t = this;
                        this.currentAccount && this.readOnlyEos.getCurrencyBalance("eosiopowcoin", "eosiopowcoin", "POW").then(function(e) {
                            t.contractAmount = e[0],
                                t.predictAmount = parseFloat(parseFloat(e[0]) / 4e4).toFixed(8) + " POW"
                        })
                    }
                }
            },
            E = C,
            O = (n("0df0"),
                Object(s["a"])(E, h, m, !1, null, null, null)),
            B = O.exports,
            I = {
                name: "home",
                components: {
                    HelloWorld: B
                }
            },
            $ = I,
            F = Object(s["a"])($, p, d, !1, null, null, null),
            M = F.exports;
        i["a"].use(u["a"]);
        var V = new u["a"]({
                routes: [{
                    path: "/",
                    name: "home",
                    component: M
                }, {
                    path: "/about",
                    name: "about",
                    component: function() {
                        return n.e("about").then(n.bind(null, "f820"))
                    }
                }]
            }),
            P = (n("6762"),
                n("2fdb"),
                n("386d"),
                n("a925")),
            N = n("2ef0"),
            L = n.n(N),
            D = {
                i18nView: {
                    login: "登录",
                    account: "账号",
                    currentAccount: "当前账号",
                    balance: "余额",
                    logout: "登出",
                    contract: "合约",
                    used: "已用",
                    rent: "资源租借",
                    contractRamTip: "如合约的内存不足，没有该币的新用户无法进行挖矿",
                    ram: "内存",
                    digTip: "当前挖一次预计得 ",
                    whiteTip: "开启后请添加白名单（高级设置）",
                    airgrabTip: "根据 POW 的空投方式，用户可以将任意金额的 EOS 转账至 eosiopowcoin 这个账户，智能合约会将等量的 EOS 返回至用户账户，并会将 eosiopowcoin 这个账户中存有的 0.0025% POW 发送到用户账户中",
                    enableAuto: "开启自动转账",
                    stopAuto: "停止自动转账",
                    powTitle: "空投矿机",
                    error: "错误: ",
                    trade: "去交易",
                    fastMode: "超速模式",
                    digTime: "挖矿次数",
                    changeNode: "修改节点",
                    diggingSetting: "每挖一次预计超过",
                    diggingSetting1: "执行挖矿",
                    cpuTips: "CPU & NET超过100%挖矿将会失败",
                    settingTips: "链上操作有时间差,以及可用cpu波动较大,效果会有误差",
                    advSetting: "高级设置",
                    cpuQuota: "CPU使用上限",
                    cpuQuotaTip: "(超出该百分比后停止挖矿，默认0为不限制)",
                    notEnough: "不足 ",
                    left: "剩余 ",
                    actionsPerTx: "倍速:",
                    actionsPerTxTip: "倍速越高挖矿速度越快，资源消耗越快，同时CPU使用效率也有提高，倍数高会出现失败以及智能模式不稳定等问题",
                    bpBlocker: "智能模式",
                    bpBlockerTip: "黑科技提高CPU使用效率约20%，非常依赖用户当前网络环境和已选节点的速度，挖矿速度非常缓慢",
                    fastModeTip: "请提前设置好白名单，目前与智能模式不能同时开启，挖矿速度超快",
                    randomNode: "随机选择"
                }
            },
            j = D,
            Q = {
                i18nView: {
                    login: "Login",
                    account: "Account",
                    currentAccount: "Account",
                    balance: "Balance",
                    logout: "Logout",
                    contract: "Contract",
                    used: "Used",
                    rent: "Rent",
                    contractRamTip: "If contract's RAM is run out, new users can't get the token",
                    ram: "RAM",
                    digTip: "Expected per transfer",
                    whiteTip: "Please whitelist this action.",
                    airgrabTip: "Send any amount of EOS to eosiopowcoin, the EOS will instantly be refunded and you will mine 0.0025% of the POW balance of eosiopowcoin",
                    enableAuto: "Automatic Transfer",
                    stopAuto: "Stop Automatic",
                    powTitle: "Auto-Miner",
                    error: "Error: ",
                    trade: "Trade",
                    fastMode: "Ultra-Fast Mode",
                    digTime: "Mining times",
                    changeNode: "Change Node",
                    diggingSetting: "When the expected per transfer is greater than",
                    diggingSetting1: "start transfer",
                    cpuTips: "It will failed when your CPU & NET is exceeds 100%",
                    settingTips: "There will be errors cause of the fluctuation of CPU and timing",
                    advSetting: "Settings",
                    cpuQuota: "CPU Quota ",
                    cpuQuotaTip: "(Stop mining when the quota is reached, 0 is unlimited by default)",
                    notEnough: "Insufficient ",
                    left: "Left",
                    actionsPerTx: "Speed:",
                    actionsPerTxTip: "High speed will cost more CPU to get more POW",
                    bpBlocker: "Smart Mode",
                    bpBlockerTip: "Try to select high-efficiency BP reducing CPU cost (about 30%) . It has a strong dependence with user's network and selected node. Very slow",
                    fastModeTip: "Increase mining speed, Not compatible with Smart Mode for now. Action Whitelist required.",
                    randomNode: "Random Node"
                }
            },
            U = Q;
        i["a"].use(P["a"]);
        var q = ["zh", "en"],
            z = navigator.language,
            R = "en";
        z.indexOf("zh") >= 0 && (R = "zh");
        var K = location.search.substr(1),
            W = {};
        K && L.a.forEach(K.split("&"), function(t) {
            var e = t.split("=");
            W[e[0]] = e[1]
        });
        var H = L.a.includes(q, W["locale"]) ? W["locale"] : R;
        H = localStorage.getItem("locale") || H;
        var J = new P["a"]({
                locale: H,
                messages: {
                    en: U,
                    zh: j
                }
            }),
            X = J,
            Z = n("1881"),
            G = n.n(Z);
        i["a"].use(G.a),
            i["a"].config.productionTip = !1,
            new i["a"]({
                i18n: X,
                router: V,
                render: function(t) {
                    return t(l)
                }
            }).$mount("#app")
    },
    "5c48": function(t, e, n) {},
    "7c55": function(t, e, n) {
        "use strict";
        var i = n("5c48"),
            o = n.n(i);
        o.a
    },
    cf05: function(t, e, n) {
        t.exports = n.p + "img/logo.aa22c7a2.png"
    }
});