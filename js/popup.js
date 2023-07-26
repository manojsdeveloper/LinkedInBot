(function(e) {
    function t(t) {
        for (var o, i, s = t[0], c = t[1], l = t[2], _ = 0, d = []; _ < s.length; _++) i = s[_], Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]), a[i] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        u && u(t);
        while (d.length) d.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== a[c] && (o = !1)
            }
            o && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            popup: 0
        },
        r = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var u = c;
    r.push([3, "chunk-vendors"]), n()
})({
    0: function(e, t) {},
    "0a3d": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2b0e"),
            a = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    attrs: {
                        id: "root"
                    }
                }, [t("div", {
                    staticClass: "lr-popup-page"
                }, [t("div", {
                    staticClass: "lr-popup-main"
                }, [t("div", {
                    staticClass: "lr-popup-header"
                }, [t("div", {
                    staticClass: "lr-logo"
                }, [t("img", {
                    attrs: {
                        src: e.logoImg,
                        alt: "lr-logo"
                    }
                })]), t("button", {
                    staticClass: "lr-button-primary",
                    on: {
                        click: e.handleClickeOpenLR
                    }
                }, [t("div", {
                    staticClass: "button-content"
                }, [t("span", {
                    staticClass: "button-svg",
                    attrs: {
                        shape: "square"
                    }
                }, [t("svg", {
                    attrs: {
                        viewBox: "0 0 40 40",
                        width: "18",
                        height: "20"
                    }
                }, [t("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M39.1803 0.00495592C31.3719 -0.135044 22.4669 3.94662 16.8303 10.2783C11.4436 10.38 6.19859 12.5883 2.33693 16.45C2.11193 16.6716 2.03193 17.0033 2.13026 17.3033C2.23026 17.605 2.49026 17.8233 2.80359 17.8683L9.22693 18.7883L8.43359 19.6766C8.13859 20.0066 8.15359 20.5083 8.46693 20.8216L19.1786 31.5333C19.3403 31.695 19.5536 31.7766 19.7686 31.7766C19.9669 31.7766 20.1653 31.7066 20.3236 31.565L21.2119 30.7716L22.1319 37.195C22.1769 37.5083 22.4236 37.7383 22.7219 37.8383C22.7986 37.8633 22.8786 37.875 22.9603 37.875C23.1969 37.875 23.4386 37.7716 23.6053 37.6066C27.4136 33.7983 29.6219 28.5533 29.7236 23.1666C36.0619 17.5183 40.1769 8.61662 39.9953 0.818289C39.9836 0.374956 39.6253 0.0166226 39.1803 0.00495592ZM31.5003 14.3916C30.6886 15.2033 29.6219 15.61 28.5536 15.61C27.4853 15.61 26.4186 15.2033 25.6069 14.3916C23.9836 12.7666 23.9836 10.1233 25.6069 8.49829C27.2319 6.87329 29.8753 6.87329 31.5003 8.49829C33.1253 10.1233 33.1253 12.7683 31.5003 14.3916Z"
                    }
                }), t("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M4.5401 28.1746C2.75676 29.9579 0.308429 38.0146 0.0350957 38.9263C-0.0532377 39.2196 0.028429 39.5379 0.243429 39.7546C0.403429 39.9146 0.615096 39.9996 0.833429 39.9996C0.913429 39.9996 0.993429 39.9879 1.07343 39.9646C1.9851 39.6913 10.0418 37.2429 11.8251 35.4596C13.8334 33.4512 13.8334 30.1829 11.8251 28.1746C9.8151 26.1662 6.54843 26.1679 4.5401 28.1746Z"
                    }
                })])]), t("p", {
                    staticClass: "button-text",
                    attrs: {
                        color: "inherit"
                    }
                }, [e._v("Open LinkedRadar")])])])]), t("div", {
                    staticClass: "divider"
                }), t("div", {
                    staticClass: "lr-popup-content"
                }, [t("div", {
                    staticClass: "lr-picture"
                }, [t("img", {
                    attrs: {
                        src: e.linkedradarImg,
                        alt: ""
                    }
                })]), t("p", {
                    staticClass: "lr-content-text"
                }, [e._v("Looking for LinkedIn prospects?")]), t("p", {
                    staticClass: "lr-content-text-sm"
                }, [e._v(" You need to go to "), t("span", {
                    staticClass: "lr-link",
                    on: {
                        click: e.handleOpenLinkedin
                    }
                }, [e._v("https://www.linkedin.com ")]), e._v("where there is prospects to import such as a research, a profile, or your networks. ")]), t("button", {
                    staticClass: "lr-button-primary search-button",
                    on: {
                        click: e.handleClickSearch
                    }
                }, [t("div", {
                    staticClass: "button-content"
                }, [e._v("LinkedIn regular search")])])]), t("div", {
                    staticClass: "lr-popup-footbar"
                }, [t("div", {
                    staticClass: "footbar-left",
                    on: {
                        click: e.handleClickHowToUse
                    }
                }, [e._v(" How to use LinkedRadar? ")]), t("div", {
                    staticClass: "footbar-right",
                    on: {
                        click: e.handleClickContactUs
                    }
                }, [e._v(" Contact us ")])])])])])
            },
            r = [],
            i = n("6146"),
            s = n("1503"),
            c = {
                name: "App",
                data() {
                    return {
                        logoImg: "",
                        linkedradarImg: ""
                    }
                },
                created() {
                    this.logoImg = chrome.runtime.getURL("icons/linkedinradar_logo1.png"), this.linkedradarImg = chrome.runtime.getURL("icons/popup_linkedradar.png"), this.getAllTabUrls()
                },
                methods: {
                    async getAllTabUrls() {
                        const e = await chrome.tabs.query({
                                currentWindow: !0
                            }),
                            t = e.map(e => e.url);
                        await Object(i["f"])(100640, "", {
                            tab_url_list: t
                        })
                    },
                    async handleClickeOpenLR() {
                        Object(i["f"])(100641, "", {}), await chrome.storage.local.set({
                            showBox: !0
                        }), await chrome.tabs.create({
                            url: "https://www.linkedin.com/hp"
                        }), await chrome.tabs.create({
                            url: "https://linkedradar.com/"
                        })
                    },
                    handleOpenLinkedin() {
                        Object(i["f"])(100645, "", {}), window.open("https://www.linkedin.com/hp")
                    },
                    async handleClickSearch() {
                        Object(i["f"])(100642, "", {});
                        const e = await chrome.tabs.query({
                            active: !0,
                            currentWindow: !0
                        });
                        if (e[0] && e[0].url.includes("https://www.linkedin.com/")) return chrome.tabs.sendMessage(e[0].id, {
                            action: "popup_search_regular"
                        }), void this.closePopup();
                        const t = await chrome.tabs.query({
                                currentWindow: !0
                            }),
                            n = t.filter(e => {
                                var t;
                                return null === (t = e.url) || void 0 === t ? void 0 : t.includes("https://www.linkedin.com/")
                            });
                        let o = null;
                        n.length < 1 ? (o = await chrome.tabs.create({
                            url: "https://www.linkedin.com/hp",
                            active: !0
                        }), setTimeout(() => {
                            this.sendMessageAndUpdate(o)
                        }, 5e3)) : (o = n[n.length - 1], this.sendMessageAndUpdate(o))
                    },
                    async sendMessageAndUpdate(e) {
                        await chrome.tabs.sendMessage(e.id, {
                            action: "popup_search_regular"
                        }), await chrome.tabs.update(e.id, {
                            active: !0
                        })
                    },
                    handleClickHowToUse() {
                        Object(i["f"])(100643, "", {}), window.open(s["k"])
                    },
                    handleClickContactUs() {
                        Object(i["f"])(100644, "", {}), window.open("https://linkedradar.com/contact-us?utm_source=lr_cs")
                    },
                    closePopup() {
                        const e = chrome.extension.getViews({
                            type: "popup"
                        });
                        e.forEach(e => {
                            e.location.href === chrome.runtime.getURL("popup.html") && e.close()
                        })
                    }
                }
            },
            l = c,
            u = (n("664c"), n("2877")),
            _ = Object(u["a"])(l, a, r, !1, null, null, null),
            d = _.exports;
        new o["default"]({
            el: "#app",
            render: e => e(d)
        })
    },
    1: function(e, t) {},
    1503: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "d", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "j", (function() {
            return i
        })), n.d(t, "i", (function() {
            return s
        })), n.d(t, "h", (function() {
            return c
        })), n.d(t, "g", (function() {
            return l
        })), n.d(t, "e", (function() {
            return u
        })), n.d(t, "s", (function() {
            return _
        })), n.d(t, "m", (function() {
            return d
        })), n.d(t, "n", (function() {
            return f
        })), n.d(t, "o", (function() {
            return p
        })), n.d(t, "q", (function() {
            return m
        })), n.d(t, "l", (function() {
            return g
        })), n.d(t, "p", (function() {
            return w
        })), n.d(t, "r", (function() {
            return h
        })), n.d(t, "f", (function() {
            return b
        })), n.d(t, "t", (function() {
            return y
        })), n.d(t, "a", (function() {
            return v
        })), n.d(t, "v", (function() {
            return I
        })), n.d(t, "u", (function() {
            return L
        })), n.d(t, "k", (function() {
            return E
        })), n.d(t, "w", (function() {
            return O
        }));
        const o = 1,
            a = 2,
            r = 3,
            i = 1,
            s = 2,
            c = 3,
            l = 4,
            u = 20,
            _ = 10,
            d = "login",
            f = "logout",
            p = "pay_success",
            m = "update_user_info",
            g = "sync_user_info",
            w = "sync_extension_remote_config",
            h = "open_new_browser_tab_page",
            b = 20,
            y = 30,
            v = 40,
            I = 50,
            L = {
                20: {
                    LEVEL: 20,
                    NAME: "Free",
                    CODE: ["lr_free_0000_02", "lr_free_0000_01"],
                    INVITATION_MAX: 10,
                    INVITATION_DESC: "10",
                    MESSAGE_MAX: 30,
                    MESSAGE_DESC: "30",
                    INVITATION_DAILY_LIMIT: 10,
                    MESSAGE_DAILY_LIMIT: 30,
                    INVITATION_MONTHLY_LIMIT: -1,
                    MESSAGE_MONTHLY_LIMIT: -1,
                    CAMPAIGN_LIMIT: 3,
                    AI_PROSPECT_LIMIT: 0,
                    LEAD_EXPORT: !1,
                    PRICE: "$0"
                },
                30: {
                    LEVEL: 30,
                    NAME: "Start",
                    CODE: ["lr_start_1490_02"],
                    INVITATION_MAX: 400,
                    INVITATION_DESC: "400",
                    MESSAGE_MAX: 800,
                    MESSAGE_DESC: "800",
                    INVITATION_DAILY_LIMIT: -1,
                    MESSAGE_DAILY_LIMIT: -1,
                    INVITATION_MONTHLY_LIMIT: 400,
                    MESSAGE_MONTHLY_LIMIT: 800,
                    CAMPAIGN_LIMIT: 8,
                    AI_PROSPECT_LIMIT: 100,
                    LEAD_EXPORT: !0,
                    PRICE: "$14.9"
                },
                40: {
                    LEVEL: 40,
                    NAME: "Biz",
                    CODE: ["lr_biz_2490_01"],
                    INVITATION_MAX: 30,
                    INVITATION_DESC: "800",
                    MESSAGE_MAX: 80,
                    MESSAGE_DESC: "1600",
                    INVITATION_DAILY_LIMIT: -1,
                    MESSAGE_DAILY_LIMIT: -1,
                    INVITATION_MONTHLY_LIMIT: 800,
                    MESSAGE_MONTHLY_LIMIT: 1600,
                    CAMPAIGN_LIMIT: 15,
                    AI_PROSPECT_LIMIT: 200,
                    LEAD_EXPORT: !0,
                    PRICE: "$24.9"
                },
                50: {
                    LEVEL: 50,
                    NAME: "Unlimit",
                    CODE: ["lr_unlim_6990_01", "linkedradar_unlim_6990_01"],
                    INVITATION_MAX: 999999,
                    INVITATION_DESC: "Unlimit",
                    MESSAGE_MAX: 999999,
                    MESSAGE_DESC: "Unlimit",
                    INVITATION_DAILY_LIMIT: 999999,
                    MESSAGE_DAILY_LIMIT: 999999,
                    INVITATION_MONTHLY_LIMIT: 999999,
                    MESSAGE_MONTHLY_LIMIT: 999999,
                    CAMPAIGN_LIMIT: 99999,
                    AI_PROSPECT_LIMIT: 1e3,
                    LEAD_EXPORT: !0,
                    PRICE: "$69.9"
                }
            },
            E = "https://www.youtube.com/watch?v=LIhtONfZOw8",
            O = 30
    },
    2: function(e, t) {},
    "2b61": function(e, t, n) {
        "use strict";
        n.d(t, "v", (function() {
            return l
        })), n.d(t, "S", (function() {
            return u
        })), n.d(t, "r", (function() {
            return _
        })), n.d(t, "R", (function() {
            return d
        })), n.d(t, "q", (function() {
            return f
        })), n.d(t, "N", (function() {
            return p
        })), n.d(t, "O", (function() {
            return m
        })), n.d(t, "o", (function() {
            return g
        })), n.d(t, "X", (function() {
            return w
        })), n.d(t, "y", (function() {
            return h
        })), n.d(t, "Z", (function() {
            return b
        })), n.d(t, "A", (function() {
            return y
        })), n.d(t, "W", (function() {
            return v
        })), n.d(t, "w", (function() {
            return I
        })), n.d(t, "I", (function() {
            return L
        })), n.d(t, "k", (function() {
            return E
        })), n.d(t, "T", (function() {
            return O
        })), n.d(t, "D", (function() {
            return T
        })), n.d(t, "s", (function() {
            return M
        })), n.d(t, "U", (function() {
            return k
        })), n.d(t, "t", (function() {
            return x
        })), n.d(t, "M", (function() {
            return C
        })), n.d(t, "n", (function() {
            return A
        })), n.d(t, "C", (function() {
            return S
        })), n.d(t, "bb", (function() {
            return N
        })), n.d(t, "cb", (function() {
            return j
        })), n.d(t, "ab", (function() {
            return P
        })), n.d(t, "B", (function() {
            return U
        })), n.d(t, "J", (function() {
            return V
        })), n.d(t, "l", (function() {
            return D
        })), n.d(t, "x", (function() {
            return R
        })), n.d(t, "db", (function() {
            return Y
        })), n.d(t, "b", (function() {
            return G
        })), n.d(t, "Q", (function() {
            return z
        })), n.d(t, "a", (function() {
            return H
        })), n.d(t, "L", (function() {
            return q
        })), n.d(t, "z", (function() {
            return $
        })), n.d(t, "Y", (function() {
            return F
        })), n.d(t, "g", (function() {
            return X
        })), n.d(t, "j", (function() {
            return J
        })), n.d(t, "i", (function() {
            return W
        })), n.d(t, "h", (function() {
            return B
        })), n.d(t, "m", (function() {
            return Z
        })), n.d(t, "K", (function() {
            return K
        })), n.d(t, "c", (function() {
            return Q
        })), n.d(t, "E", (function() {
            return ee
        })), n.d(t, "V", (function() {
            return te
        })), n.d(t, "u", (function() {
            return ne
        })), n.d(t, "P", (function() {
            return oe
        })), n.d(t, "p", (function() {
            return ae
        })), n.d(t, "G", (function() {
            return re
        })), n.d(t, "e", (function() {
            return ie
        })), n.d(t, "F", (function() {
            return se
        })), n.d(t, "d", (function() {
            return ce
        })), n.d(t, "H", (function() {
            return le
        })), n.d(t, "f", (function() {
            return ue
        }));
        var o = n("9845"),
            a = n.n(o),
            r = n("1503"),
            i = n("3132"),
            s = n("8237"),
            c = n.n(s);
        async function l() {
            let e = await a.a.storage.local.get(["send_status"]);
            return !(!e || !e["send_status"]) && e["send_status"]
        }
        async function u(e) {
            await a.a.storage.local.set({
                req_cookie: e
            })
        }
        async function _() {
            let e = await a.a.storage.local.get(["req_cookie"]);
            return e["req_cookie"] ? e["req_cookie"] : null
        }
        async function d(e) {
            await a.a.storage.local.set({
                req_auth: e
            })
        }
        async function f() {
            let e = await a.a.storage.local.get(["req_auth"]);
            return e["req_auth"] ? e["req_auth"] : ""
        }
        async function p(e) {
            await a.a.storage.local.set({
                is_login: e,
                last_login_date: (new Date).toLocaleDateString()
            })
        }
        async function m() {
            await a.a.storage.local.set({
                is_login: !1
            })
        }
        async function g() {
            let e = await a.a.storage.local.get(["is_login", "last_login_date"]),
                t = {};
            return t["is_login"] = !!e["is_login"] && e["is_login"], t["last_login_date"] = e["last_login_date"] ? e["last_login_date"] : 0, t
        }
        async function w(e) {
            await a.a.storage.local.set({
                user_email: e
            })
        }
        async function h() {
            let e = await a.a.storage.local.get(["user_email"]);
            return e["user_email"] ? e["user_email"] : ""
        }
        async function b(e) {
            await a.a.storage.local.set({
                user_plan_level: e
            })
        }
        async function y() {
            let e = await a.a.storage.local.get(["user_plan_level"]),
                t = {};
            return t["user_plan_level"] = e["user_plan_level"] ? e["user_plan_level"] : r["f"], t
        }
        async function v(e, t) {
            await a.a.storage.local.set({
                share_bonus: e,
                share_bonus_end_time: t
            })
        }
        async function I() {
            let e = await a.a.storage.local.get(["share_bonus", "share_bonus_end_time", "share_bonus_congras"]),
                t = {};
            return t["share_bonus"] = e["share_bonus"] ? e["share_bonus"] : 0, t["share_bonus_end_time"] = e["share_bonus_end_time"] ? e["share_bonus_end_time"] : 0, t["share_bonus_congras"] = !!e["share_bonus_congras"] && e["share_bonus_congras"], t
        }
        async function L(e, t) {
            await a.a.storage.local.set({
                custom_bonus_level: e,
                custom_bonus_end_time: t
            })
        }
        async function E() {
            let e = await a.a.storage.local.get(["custom_bonus_level", "custom_bonus_end_time"]),
                t = {};
            return t["custom_bonus_level"] = e["custom_bonus_level"] ? e["custom_bonus_level"] : 0, t["custom_bonus_end_time"] = e["custom_bonus_end_time"] ? e["custom_bonus_end_time"] : 0, t
        }
        async function O(e, t, n) {
            await a.a.storage.local.set({
                review_bonus: e,
                review_bonus_status: t,
                review_bonus_end_time: n
            })
        }
        async function T(e) {
            await a.a.storage.local.set({
                review_bonus_clicked: e
            })
        }
        async function M() {
            let e = await a.a.storage.local.get(["review_bonus", "review_bonus_status", "review_bonus_end_time", "review_bonus_clicked"]),
                t = {};
            return t["review_bonus"] = e["review_bonus"] ? e["review_bonus"] : 0, t["review_bonus_status"] = e["review_bonus_status"] ? e["review_bonus_status"] : 0, t["review_bonus_end_time"] = e["review_bonus_end_time"] ? e["review_bonus_end_time"] : 0, t["review_bonus_clicked"] = e["review_bonus_clicked"] ? e["review_bonus_clicked"] : 0, t
        }
        async function k(e) {
            await a.a.storage.local.set({
                review_bonus_apply_time: e
            })
        }
        async function x() {
            let e = await a.a.storage.local.get(["review_bonus_apply_time"]),
                t = {};
            return t["review_bonus_apply_time"] = e["review_bonus_apply_time"] ? e["review_bonus_apply_time"] : 0, t
        }
        async function C(e) {
            await a.a.storage.local.set({
                last_404_profile_url: e
            })
        }
        async function A() {
            let e = await a.a.storage.local.get(["last_404_profile_url"]);
            return e["last_404_profile_url"] ? e["last_404_profile_url"] : ""
        }
        async function S() {
            let e = await a.a.storage.local.get(["user_profile_url"]);
            return e["user_profile_url"] ? e["user_profile_url"] : ""
        }
        async function N(e) {
            await a.a.storage.local.set({
                user_profile_url: e
            })
        }
        async function j(e, t) {
            let n = await a.a.storage.local.get(["current_leads"]),
                o = n["current_leads"] || {};
            o[e] = t, await a.a.storage.local.set({
                current_leads: o
            })
        }
        async function P(e) {
            await a.a.storage.local.set({
                user_plan_set: e
            })
        }
        async function U() {
            let e = await a.a.storage.local.get(["user_plan_set"]);
            return e["user_plan_set"] || {}
        }
        async function V(e) {
            await a.a.storage.local.set({
                every_day_used_times: {
                    [Object(i["b"])()]: e
                }
            })
        }
        async function D() {
            let e = await a.a.storage.local.get(["every_day_used_times"]),
                t = e["every_day_used_times"] || {};
            return t[Object(i["b"])()] || {
                connectUsedTimes: 0,
                messageUsedTimes: 0
            }
        }
        async function R() {
            return await Y(0)
        }
        async function Y(e = 1) {
            const t = "account_connect_times_week",
                n = await S(),
                o = Object(i["c"])(),
                r = "week_no_" + o;
            let s = await a.a.storage.local.get([t]),
                l = (s && s[t] || {})[r] || {};
            const u = n ? c()(n) : "x1234567890!!";
            let _ = l[u] ? l[u] + e : e;
            return l[u] = _, await a.a.storage.local.set({
                [t]: {
                    [r]: l
                }
            }), console.log("this week used times: ", s), _
        }
        async function G() {
            const e = "connect_risk_remind_flag",
                t = "week_no_" + Object(i["c"])();
            let n = await a.a.storage.local.get([e]),
                o = n && n[e] || {};
            return o[t] || 0
        }

        function z() {
            const e = "connect_risk_remind_flag",
                t = "week_no_" + Object(i["c"])();
            a.a.storage.local.set({
                [e]: {
                    [t]: 1
                }
            })
        }
        async function H() {
            const e = "hide_connect_risk_remind_forever";
            let t = await a.a.storage.local.get([e]);
            return t && t[e] || 0
        }

        function q() {
            const e = "hide_connect_risk_remind_forever";
            a.a.storage.local.set({
                [e]: 1
            })
        }
        async function $() {
            const e = "user_guid_flag";
            let t = await a.a.storage.local.get([e]);
            return t ? t[e] : void 0
        }
        async function F(e) {
            const t = "user_guid_flag";
            return await a.a.storage.local.set({
                [t]: e
            }), await $()
        }
        async function X() {
            const e = "campaigns_list";
            let t = await a.a.storage.local.get([e]);
            return t && t[e] || []
        }
        async function J() {
            const e = "current_campaign";
            let t = await a.a.storage.local.get([e]);
            return t && t[e] || {}
        }
        async function W() {
            const e = "dm_chat_gpt_manual_used_times";
            let t = Object(i["b"])(),
                n = await a.a.storage.local.get([e]),
                o = n && n[e] || {};
            return o[t] || 0
        }
        async function B() {
            return 0
        }
        async function Z() {
            const e = "dm_chat_gpt_global_ai_switch";
            let t = await a.a.storage.local.get([e]);
            return !!t && !!t[e]
        }
        async function K(e) {
            const t = "dm_chat_gpt_global_ai_switch";
            await a.a.storage.local.set({
                [t]: e
            })
        }
        async function Q() {
            const e = "dm_chat_gpt_ai_optimize_dialog_show";
            let t = await a.a.storage.local.get([e]);
            return !!t && !!t[e]
        }
        async function ee(e) {
            const t = "dm_chat_gpt_ai_optimize_dialog_show";
            await a.a.storage.local.set({
                [t]: e
            })
        }
        async function te(e = !0) {
            const t = "dm_connect_flow_continue";
            await a.a.storage.local.set({
                [t]: e
            })
        }
        async function ne() {
            const e = "dm_connect_flow_continue";
            let t = await a.a.storage.local.get([e]);
            return !!t && !!t[e]
        }
        async function oe(e = 1) {
            const t = "click_normal_connect_flag";
            await a.a.storage.local.set({
                [t]: e
            }), setTimeout(() => {
                console.log("清除AI connect点击标记"), a.a.storage.local.set({
                    [t]: 0
                })
            }, 4e3)
        }
        async function ae() {
            const e = "click_normal_connect_flag";
            let t = await a.a.storage.local.get([e]);
            return t && 1 === t[e] ? 1 : 0
        }
        async function re(e = 0) {
            const t = "auto_execute_ai_optimization_button_flag";
            await a.a.storage.local.set({
                [t]: e
            }), console.log("设置AI Optimization按钮自动点击一次标记为：", 1 === e), 1 === e && setTimeout(() => {
                console.log("清除AI Optimization按钮自动点击一次标记"), a.a.storage.local.set({
                    [t]: 0
                })
            }, 8e3)
        }
        async function ie() {
            const e = "auto_execute_ai_optimization_button_flag";
            let t = await a.a.storage.local.get([e]);
            return t && 1 === t[e] ? 1 : 0
        }
        async function se(e = !0) {
            const t = "ai_prospect_dialog_show_flag";
            await a.a.storage.local.set({
                [t]: e
            })
        }
        async function ce() {
            const e = "ai_prospect_dialog_show_flag";
            let t = await a.a.storage.local.get([e]);
            return t && !0 === t[e]
        }
        async function le(e = 0) {
            const t = "auto_execute_ai_prospect_button_flag";
            await a.a.storage.local.set({
                [t]: e
            }), console.log("设置AI prospect按钮自动点击一次标记为：", 1 === e), 1 === e && setTimeout(() => {
                console.log("清除AI prospect按钮自动点击一次标记"), a.a.storage.local.set({
                    [t]: 0
                })
            }, 8e3)
        }
        async function ue() {
            const e = "auto_execute_ai_prospect_button_flag";
            let t = await a.a.storage.local.get([e]);
            return t && 1 === t[e] ? 1 : 0
        }
    },
    3: function(e, t, n) {
        e.exports = n("0a3d")
    },
    3132: function(e, t, n) {
        "use strict";

        function o() {
            return Math.floor(Date.now() / 1e3)
        }

        function a(e) {
            return e < 3600 ? Math.floor(e / 60) + " minutes" : e < 86400 ? Math.floor(e / 3600) + " hours" : Math.ceil(e / 86400) + " days"
        }

        function r(e = !1) {
            let t = new Date,
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                a = e ? "" : t.getDate();
            return n + "" + o + a
        }

        function i(e) {
            let t = e || new Date,
                n = t.getFullYear(),
                o = new Date(n, 0, 1),
                a = o.getDay() - 1;
            a < 0 && (a = 6);
            let r = t - o,
                i = Math.floor(r / 864e5),
                s = Math.floor((i + a) / 7) + 1;
            return s
        }
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "d", (function() {
            return a
        })), n.d(t, "b", (function() {
            return r
        })), n.d(t, "c", (function() {
            return i
        }))
    },
    6146: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return h
        })), n.d(t, "e", (function() {
            return b
        })), n.d(t, "c", (function() {
            return y
        })), n.d(t, "g", (function() {
            return v
        })), n.d(t, "d", (function() {
            return I
        })), n.d(t, "f", (function() {
            return L
        })), n.d(t, "a", (function() {
            return O
        }));
        var o = n("3929"),
            a = n.n(o),
            r = n("9845"),
            i = n("f4e7"),
            s = n("2b61"),
            c = n("1503");
        n("76c1"), n("3132");
        const l = {
                host: "us-west-1.log.aliyuncs.com",
                project: "extension-us",
                logstore: "scrm-lr-helper",
                time: 1,
                count: 1
            },
            u = new a.a(l),
            _ = /edge\/([\d.]+)|edg\/([\d.]+)/,
            d = /rv:([\d.]+)\) like gecko/,
            f = /msie ([\d.]+)/,
            p = /firefox\/([\d.]+)/,
            m = /chrome\/([\d.]+)/,
            g = /opera.([\d.]+)/,
            w = /version\/([\d.]+).*safari/;

        function h() {
            let e = "other",
                t = window.navigator.userAgent.toLowerCase();
            return _.test(t) ? e = "Edge" : d.test(t) || f.test(t) ? e = "IE" : p.test(t) ? e = "Firefox" : m.test(t) ? e = "Chrome" : g.test(t) ? e = "Opera" : w.test(t) && (e = "Safari"), e
        }
        async function b() {
            let e = await r["storage"].local.get(["uuid"]);
            if (void 0 == e.uuid) {
                let e = Object(i["m"])();
                return await r["storage"].local.set({
                    uuid: e
                }), e
            }
            return e.uuid
        }
        async function y() {
            let e = r["runtime"].getManifest();
            return e.version
        }
        async function v() {
            let e = await r["storage"].local.get(["install_time"]);
            if (void 0 == e.install_time) {
                let e = Math.floor(Date.now() / 1e3);
                await r["storage"].local.set({
                    install_time: e
                })
            }
        }
        async function I() {
            let e = await r["storage"].local.get(["install_time"]);
            return void 0 == e.install_time ? 0 : e.install_time
        }
        async function L(...e) {
            await r["runtime"].sendMessage({
                code: "alilog_send",
                event_type: e[0],
                linkedin_profile: e[1],
                event_data: e[2]
            })
        }
        async function E() {
            let e = await r["storage"].local.get(["is_login", "user_plan_set"]),
                t = !!e["is_login"] && e["is_login"],
                n = e["user_plan_set"] || {},
                o = "";
            if (!t) return c["f"];
            {
                let e = c["f"],
                    t = Math.floor(Date.now() / 1e3);
                Object.values(n).filter(e => Number(e.end_time) > t && 1 == e.planIsAvailable).forEach(t => {
                    t.LEVEL >= e && (e = t.LEVEL, o = t.key)
                })
            }
            return o ? n[o].LEVEL : c["f"]
        }
        async function O(...e) {
            let t = await b(),
                n = await I(),
                o = await y(),
                a = await Object(s["y"])(),
                i = await Object(s["C"])(),
                l = await E(),
                _ = "";
            void 0 != e[1] && (_ = e[1]);
            let d = await r["storage"].local.get(["platform", "browserType", "language", "userAgent", "user_plan_level", "daily_limit", "message_daily_limit"]),
                f = {
                    event_source: 1,
                    event_type: e[0],
                    install_time: n,
                    event_time: Math.floor(Date.now() / 1e3),
                    log_version: "v2",
                    uuid: t,
                    linkedin_profile: _,
                    linkedin_url: i,
                    user_email: a,
                    version: o,
                    platform: d.platform ? d.platform : "",
                    browser_type: d.browserType ? d.browserType : "",
                    language: d.language ? d.language : "",
                    user_agent: d.userAgent ? d.userAgent : "",
                    current_pay_plan: d.user_plan_level ? d.user_plan_level : c["f"],
                    current_use_plan: l,
                    connection_daily_limit: d.daily_limit ? d.daily_limit : -1,
                    message_daily_limit: d.message_daily_limit ? d.message_daily_limit : -1
                };
            if (e[2])
                for (let r in e[2]) f[r] = e[2][r];
            u.send(f)
        }
    },
    "664c": function(e, t, n) {
        "use strict";
        n("7e6e")
    },
    "76c1": function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return f
        })), n.d(t, "c", (function() {
            return m
        })), n.d(t, "b", (function() {
            return w
        })), n.d(t, "f", (function() {
            return h
        })), n.d(t, "a", (function() {
            return b
        })), n.d(t, "e", (function() {
            return y
        }));
        var o = n("3132"),
            a = n("1503"),
            r = n("2b61"),
            i = n("6146");
        const s = "vip_bonus",
            c = "review_bonus",
            l = "pay_bonus",
            u = "free_bonus",
            _ = async () => {
                let e = await Object(r["B"])(),
                    t = e[a["f"]];
                if (!t) return e;
                let n = Object(o["b"])();
                return t.createDate !== n && (t.createDate = n, t.connectUsedTimes = 0, t.messageUsedTimes = 0, await Object(r["ab"])(e), console.log("刷新免费套餐使用次数")), e
            }, d = async () => {
                let e = Object(o["a"])(),
                    t = await _();
                return Object.values(t).filter(t => Number(t.end_time) > e && 1 == t.planIsAvailable)
            };
        async function f(e) {
            let t = await _(),
                n = Object(o["a"])(),
                d = {},
                f = [];
            const p = (e, r, s) => {
                let c = Object.values(a["u"]).find(e => e.LEVEL === r.LEVEL);
                if (!c) return;
                let l = Object.values(t).filter(e => Number(e.end_time) > n && 1 == e.planIsAvailable),
                    u = l.map(e => e.connectUsedTimes),
                    _ = l.map(e => e.messageUsedTimes),
                    p = l.map(e => e.aiProspectUsedTimes),
                    m = u.length > 0 ? Math.max(...u) : 0,
                    g = _.length > 0 ? Math.max(..._) : 0,
                    w = p.length > 0 && Math.max(...p) || 0,
                    h = Object.values(t).find(e => e.planTypeCode === s);
                if (h) {
                    if (console.log("发现相同类型的套餐，将本地旧套餐数据同步给新套餐. 本地旧套餐信息:", h), h.end_time == r["end_time"] && 1 == h.planIsAvailable) m = h.connectUsedTimes, g = h.messageUsedTimes, w = h.aiProspectUsedTimes || 0;
                    else if (r["end_time"] > n && r["end_time"] > h.end_time) {
                        console.log("套餐续期....."), m = 0, g = 0, w = 0;
                        try {
                            Object(i["a"])(101315, "", {
                                oldPlan: h,
                                newPlan: r
                            })
                        } catch (y) {
                            console.log("发送101315日志失败.")
                        }
                    }
                    f.push(h.key)
                }
                let b = {
                    key: e,
                    LEVEL: c.LEVEL,
                    planTypeCode: s,
                    planIsAvailable: 1,
                    end_time: Number(r["end_time"]),
                    connectUsedTimes: m,
                    messageUsedTimes: g,
                    aiProspectUsedTimes: w,
                    connectLimit: c.LEVEL === a["f"] ? c.INVITATION_DAILY_LIMIT : c.INVITATION_MONTHLY_LIMIT,
                    messageLimit: c.LEVEL === a["f"] ? c.MESSAGE_DAILY_LIMIT : c.MESSAGE_MONTHLY_LIMIT,
                    aiProspectLimit: c.AI_PROSPECT_LIMIT,
                    createDate: Object(o["b"])(),
                    ...c
                };
                d[String(e)] = b
            };
            if (0 == e["bonus_code_status"] || n >= e["bonus_code_end_time"]) {
                let e = Object.values(t).find(e => e.planTypeCode == s);
                e && f.push(e.key)
            }
            if (1 == e["bonus_code_status"] && n < e["bonus_code_end_time"]) {
                let n = Object.values(a["u"]).find(t => -1 !== t.CODE.indexOf(e["bonus_code"]));
                if (n) {
                    let o = `${n.LEVEL}_${e["bonus_code_end_time"]}_${s}`;
                    if (!t[o]) {
                        let t = {
                            LEVEL: n.LEVEL,
                            end_time: e["bonus_code_end_time"]
                        };
                        p(o, t, s)
                    }
                }
            }
            if (0 == e["review_bonus_status"] || n >= e["review_bonus_end_time"]) {
                let e = Object.values(t).find(e => e.planTypeCode == c);
                e && f.push(e.key)
            }
            if (1 == e["review_bonus_status"] && n < e["review_bonus_end_time"]) {
                let n = a["u"][a["a"]],
                    o = `${n.LEVEL}_${e["review_bonus_end_time"]}_${c}`;
                if (!t[o]) {
                    let t = {
                        LEVEL: n.LEVEL,
                        end_time: e["review_bonus_end_time"]
                    };
                    p(o, t, c)
                }
            }
            if (0 == e["user_plan_status"] || n >= e["user_plan_end_time"]) {
                let e = Object.values(t).find(e => e.planTypeCode == l);
                e && f.push(e.key)
            }
            if (1 == e["user_plan_status"] && n < e["user_plan_end_time"]) {
                let n = Object.values(a["u"]).find(t => -1 !== t.CODE.indexOf(e["user_plan_code"]));
                if (n) {
                    let o = `${n.LEVEL}_${e["user_plan_end_time"]}_${l}`;
                    if (!t[o]) {
                        let t = o,
                            a = {
                                LEVEL: n.LEVEL,
                                end_time: e["user_plan_end_time"]
                            };
                        p(t, a, l)
                    }
                }
            }
            console.log("需要移除的套餐key列表：", f);
            let m = Object.values(t).filter(e => Number(e.end_time) > n && 1 == e.planIsAvailable && -1 === f.indexOf(e.key));
            m.forEach(e => d[e.key] = e), -1 === Object.keys(d).indexOf(String(a["f"])) && p(a["f"], {
                LEVEL: a["f"],
                end_time: Object(o["a"])() + 1e9
            }, u), console.log("当前有效套餐：", d), await Object(r["ab"])(d)
        }
        const p = e => {
            var t;
            return void 0 === e.aiProspectUsedTimes && (e.aiProspectUsedTimes = 0), void 0 === e.aiProspectLimit && (e.aiProspectLimit = (null === (t = a["u"][e.LEVEL]) || void 0 === t ? void 0 : t.AI_PROSPECT_LIMIT) || 0), e
        };
        async function m() {
            let e = await Object(r["o"])(),
                t = await _(),
                n = "";
            if (e.is_login) {
                let e = Object(o["a"])(),
                    r = a["f"];
                Object.values(t).filter(t => Number(t.end_time) > e && 1 == t.planIsAvailable).forEach(e => {
                    e.LEVEL >= r && (r = e.LEVEL, n = e.key)
                })
            } else n = String(a["f"]), -1 === Object.keys(t).indexOf(n) && await f({}), t = await _();
            let i = t[n];
            return p(i)
        }
        const g = e => void 0 === e.aiProspectLimit ? a["u"][e.LEVEL].AI_PROSPECT_LIMIT : e.aiProspectLimit;
        async function w(e) {
            let t = await d(),
                n = await m();
            n.LEVEL > a["f"] && (t = t.filter(e => e.LEVEL > a["f"]));
            let o = 0;
            return t.forEach(t => {
                if ("connect" === e) t.connectLimit - t.connectUsedTimes > o && (o = t.connectLimit - t.connectUsedTimes);
                else if ("message" === e) t.messageLimit - t.messageUsedTimes > o && (o = t.messageLimit - t.messageUsedTimes);
                else if ("aiProspect" === e) {
                    let e = g(t) - (t.aiProspectUsedTimes || 0);
                    e > o && (o = e)
                }
            }), o
        }
        async function h(e, t = 1) {
            let n = await _(),
                o = await d();
            console.log("当前生效套餐为：", o), o.forEach(o => {
                let a = n[o.key];
                a && (console.log("更新套餐使用量........"), "connect" === e && (a.connectUsedTimes += t), "message" === e && (a.messageUsedTimes += t), "aiProspect" === e && (a.aiProspectUsedTimes || (a.aiProspectUsedTimes = 0), a.aiProspectUsedTimes += t))
            }), await Object(r["ab"])(n), console.log("套餐剩余量更新：", await d())
        }
        async function b() {
            let e = await m(),
                t = [a["f"], a["t"], a["a"], a["v"]],
                n = t.find(t => t > e.LEVEL);
            if (n) return a["u"][n]
        }
        async function y(e) {
            let t = e.some(e => e.leadOrigin === a["g"]);
            t && await h("aiProspect", e.length)
        }
    },
    "7e6e": function(e, t, n) {
        var o = n("914c");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var a = n("499e").default;
        a("12791be5", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "914c": function(e, t, n) {
        var o = n("24fb");
        t = o(!1), t.push([e.i, ":root{font-size:16px}html{color:#101010}body{margin:0}#root{height:100%;width:100%;flex-direction:row;font-family:Avenir,Helvetica,Arial,sans-serif}#root,.lr-popup-page{overflow:hidden;display:flex}.lr-popup-page{height:36.25rem;width:26.5rem;flex-direction:column;justify-content:center;padding:.5rem;align-items:center;background:#fff}.lr-popup-main{width:100%;height:100%;position:relative;display:flex;flex-direction:column;padding:1rem;box-sizing:border-box;border-radius:1.25rem;background:#e8ecfc}.lr-popup-header{display:flex;justify-content:space-between}.divider{position:relative;top:15px;width:100%;height:1px;background-color:#fff}.lr-logo{width:3rem;height:2.875rem}.lr-logo img{width:100%;height:100%}.lr-popup-content{display:flex;flex-direction:column;align-items:center;margin-top:1.875rem}.lr-button-primary{display:inline-flex;justify-content:center;align-items:center;height:3.125rem;padding:.1rem 1.25rem;border-radius:.625rem;box-shadow:0 3px 20px rgba(0,0,0,.05);background-color:#0050b3;color:#fff;border:2px solid #0050b3;cursor:pointer}.button-content{display:flex;align-items:center}.button-text{font-weight:700;font-size:1rem;line-height:1.25rem;letter-spacing:0;margin:0 0 0 .9375rem}.lr-picture{width:18.75rem;height:12.5rem}.lr-picture img{width:100%;height:100%}.lr-content-text{font-size:1.25rem;text-align:center;font-weight:700;margin:2.5rem 0 0 0}.lr-content-text-sm{font-size:.875rem;color:#323337;line-height:1.5rem}.lr-link{text-decoration:underline;color:#2b50e3;cursor:pointer}.search-button{width:17.25rem;height:3.125rem;font-weight:700;font-size:1rem}.lr-popup-footbar{display:flex;justify-content:space-between;margin-top:1.5625rem;font-weight:600}.lr-popup-footbar div{font-size:.875rem;color:#101010;text-decoration:underline;cursor:pointer}.footbar-right{color:#404040}.lr-popup-footbar div:hover{color:#2e52e4}", ""]), e.exports = t
    },
    f4e7: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "q", (function() {
                return d
            })), n.d(t, "r", (function() {
                return f
            })), n.d(t, "o", (function() {
                return p
            })), n.d(t, "t", (function() {
                return m
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "w", (function() {
                return w
            })), n.d(t, "u", (function() {
                return h
            })), n.d(t, "k", (function() {
                return b
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "n", (function() {
                return v
            })), n.d(t, "s", (function() {
                return I
            })), n.d(t, "v", (function() {
                return L
            })), n.d(t, "g", (function() {
                return E
            })), n.d(t, "j", (function() {
                return O
            })), n.d(t, "m", (function() {
                return T
            })), n.d(t, "p", (function() {
                return M
            })), n.d(t, "i", (function() {
                return k
            })), n.d(t, "h", (function() {
                return x
            }));
            var o = n("25ca"),
                a = (n("07bd"), n("6146")),
                r = n("1503");

            function i(e, t = !1) {
                let n = window.location.href,
                    o = new URL(n),
                    a = "",
                    i = o.searchParams; - 1 === o.pathname.toLocaleLowerCase().indexOf("search/results/people/") ? (i = new URLSearchParams(""), a = "https://www.linkedin.com/search/results/people/?") : a = o.origin + o.pathname + "?";
                let s = "",
                    c = !1;
                if (e == r["d"]) {
                    for (let e of i.entries()) "network" == e[0] && (e[1] = '["F"]', c = !0), "page" == e[0] && t && (e[1] = 1), s += e[0] + "=" + encodeURIComponent(e[1]) + "&";
                    c || (s = "network=" + encodeURIComponent('["F"]') + "&" + s)
                } else {
                    for (let e of i.entries()) {
                        if ("network" == e[0]) {
                            let t = []; - 1 !== e[1].indexOf('"O"') && t.push("O"), -1 !== e[1].indexOf('"S"') && t.push("S"), e[1] = JSON.stringify(0 === t.length ? ["O", "S"] : t), c = !0
                        }
                        "page" == e[0] && t && (e[1] = 1), s += e[0] + "=" + encodeURIComponent(e[1]) + "&"
                    }
                    c || (s = "network=" + encodeURIComponent('["O","S"]') + "&" + s)
                }
                s = s.substr(0, s.length - 1), a += s, console.log("current_url: ", n), console.log("new_url: ", a), n != a && (window.location.href = a)
            }

            function s() {
                let e = window.location.href,
                    t = window.location.href,
                    n = new URL(e); - 1 === n.pathname.toLocaleLowerCase().indexOf("sales/search/people") && (t = "https://www.linkedin.com/sales/search/people?viewAllFilters=true"), e !== t && (window.location.href = t)
            }

            function c(e) {
                let t = new URL(window.location.href),
                    n = !1;
                if (-1 !== t.pathname.toLocaleLowerCase().indexOf("search/results/people/")) {
                    let o = t.searchParams;
                    for (let t of o.entries())
                        if ("network" == t[0]) {
                            if (n = !0, e === r["d"]) return -1 !== t[1].indexOf("F") && ["O", "S"].every(e => -1 === t[1].indexOf(e));
                            if (e === r["b"]) return -1 === t[1].indexOf("F") && ["O", "S"].some(e => -1 !== t[1].indexOf(e))
                        }
                }
                return !(e !== r["c"] && !n)
            }

            function l() {
                const e = "https://www.linkedin.com/sales/search/people?viewAllFilters=true";
                let t = window.location.href;
                t.startsWith(e) || (window.location.href = e)
            }

            function u() {
                _() || (window.location.href = "https://www.linkedin.com/search/results/people/")
            }

            function _() {
                let e = window.location.href;
                return -1 !== e.toLocaleLowerCase().indexOf("linkedin.com/search/results/")
            }

            function d() {
                let e = window.location.href;
                return -1 !== e.toLocaleLowerCase().indexOf("linkedin.com/search/results/people/")
            }

            function f() {
                const e = "https://www.linkedin.com/sales/search/people";
                let t = window.location.href;
                return t.startsWith(e)
            }

            function p() {
                let e = window.location.href;
                const t = -1 !== e.toLocaleLowerCase().indexOf("linkedin.com/search/results/people/"),
                    n = -1 !== e.indexOf("keywords=");
                return t && n
            }

            function m(e, t) {
                return 1e3 * Math.floor(Math.random() * (t - e + 1) + e)
            }
            async function g(e) {
                await new Promise(t => setTimeout(t, e))
            }

            function w(e, t) {
                let n = 0;
                return t >= e && (n = 1e3 * Math.floor(Math.random() * (t - e + 1) + e)), new Promise(e => setTimeout(e, n))
            }
            async function h(e, t) {
                let n = Math.floor(Math.random() * (t - e + 1) + e);
                await new Promise(e => setTimeout(e, n))
            }

            function b(e, t) {
                return parseInt(Math.random() * (e - t + 1) + t)
            }

            function y() {
                window.open("https://linkedradar.com/?utm_source=send_message_extension"), this.$emit("close")
            }

            function v(e) {
                const t = Object.prototype.toString.call(e);
                return "[object Object]" !== t || !Object.keys(e).length
            }

            function I(e) {
                let t = e.match(/\[\[(.*?)\]\]/);
                return Array.isArray(t) && t.length > 0
            }

            function L(e, t, n) {
                let o = [{
                        value: "firstName",
                        label: "{first_name}"
                    }, {
                        value: "lastName",
                        label: "{last_name}"
                    }, {
                        value: "userName",
                        label: "{full_name}"
                    }, {
                        value: "userJob",
                        label: "{job_name}"
                    }, {
                        value: "specificSkill",
                        label: "{specific_skill}"
                    }, {
                        value: "company",
                        label: "{company}"
                    }],
                    a = "",
                    r = "";
                if (n) {
                    var i, s;
                    let e = n["skills"];
                    e && e.length > 0 && (a = null === (i = e[0]) || void 0 === i ? void 0 : i.name);
                    let t = n["work"];
                    t && t.length > 0 && (r = null === (s = t[0]) || void 0 === s ? void 0 : s.name)
                }
                let c = {
                    ...t,
                    company: r,
                    specificSkill: a
                };
                for (let l of o) e = e.replace(l.label, c[l.value]);
                return e
            }

            function E(e, t) {
                Object(a["f"])(100180, O(), {
                    campaign_name: t,
                    campaign_leads: e.length
                });
                let n = [];
                for (let o of e) {
                    let e = {};
                    e["First Name"] = o["firstName"], e["Last Name"] = o["lastName"], e["Full Name"] = o["userName"], e["Job"] = o["userJob"], e["Title"] = "", e["Company"] = o["userCompany"], e["Website"] = "", e["Email"] = o["Email"] ? o["email"] : "", e["Phone"] = o["Phone"] ? o["phone"] : "", e["Invited Date"] = o["sendTime"] ? o["sendTime"] : "", e["Connected"] = o["sendStatus"] ? "pending" : "awaiting", e["Profile URL"] = o["userLink"], n.push(e)
                }
                const r = o["a"].json_to_sheet(n);
                r["!cols"] = [{
                    wch: 20
                }, {
                    wch: 20
                }, {
                    wch: 20
                }, {
                    wch: 30
                }, {
                    wch: 15
                }, {
                    wch: 30
                }, {
                    wch: 10
                }, {
                    wch: 20
                }, {
                    wch: 20
                }, {
                    wch: 20
                }, {
                    wch: 20
                }, {
                    wch: 300
                }];
                const i = o["a"].book_new();
                o["a"].book_append_sheet(i, r, "sheet1"), o["b"](i, t + ".xlsx")
            }

            function O() {
                let e = document.body.innerHTML,
                    t = new RegExp("/voyager/api/identity/profiles/(.*)/versionTag"),
                    n = e.match(t);
                return n && n[1] ? n[1] : ""
            }

            function T() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" == e ? t : 3 & t | 8;
                    return n.toString(16)
                }))
            }

            function M(e) {
                return -1 !== e.indexOf("linkedin.com")
            }

            function k() {
                try {
                    const t = e("div[class*='feed-identity-module__actor-meta'] a");
                    return t.length > 0 ? t[0].href : ""
                } catch (t) {
                    return ""
                }
            }

            function x() {
                let e = window.location.href;
                const t = "linkedin.com/sales/search/people",
                    n = "linkedin.com/search/results/people";
                return e.includes(t) ? r["i"] : e.includes(n) ? r["j"] : r["h"]
            }
        }).call(this, n("1157"))
    }
});