"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3084], {
        60592: function(e, n, t) {
            t.r(n);
            var l = t(16981),
                i = (t(67294), t(22406)),
                s = t(85893);
            n.default = e => {
                let {
                    tokenModalList: n,
                    handleTokenSelect: t,
                    bridge: o
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: n ? n.filter((e => null != e.key || null != (null === e || void 0 === e ? void 0 : e.name) || null != (null === e || void 0 === e ? void 0 : e.parentName))).map((e => (0, s.jsxs)("div", {
                        className: "tokn-row",
                        onClick: () => t(e),
                        children: [(0, s.jsx)("div", {
                            className: "cryoto-box",
                            children: (0, s.jsx)("img", {
                                className: "img-fluid",
                                width: 32,
                                src: null !== e && void 0 !== e && e.logo ? e.logo : "../../assets/images/shib-borderd-icon.png",
                                onError: i.t,
                                alt: ""
                            })
                        }), (0, s.jsxs)("div", {
                            className: "tkn-grid",
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsxs)("div", {
                                    className: "d-flex align-items-end",
                                    children: [(0, s.jsx)("h6", {
                                        className: "fw-bold",
                                        children: (null === e || void 0 === e ? void 0 : e.key) || (null === e || void 0 === e ? void 0 : e.symbol) || "Unknown"
                                    }), (null === e || void 0 === e ? void 0 : e.addedByUser) && (0, s.jsx)("small", {
                                        className: "ms-2",
                                        style: {
                                            color: "#666"
                                        },
                                        children: "Added By User"
                                    })]
                                }), (0, s.jsx)("p", {
                                    children: ("deposit" == o ? null === e || void 0 === e ? void 0 : e.parentName : null === e || void 0 === e ? void 0 : e.childName) || (null === e || void 0 === e ? void 0 : e.name) || "Unknown"
                                })]
                            }), (0, s.jsx)("div", {
                                children: 0 === (null === e || void 0 === e ? void 0 : e.balance) ? (0, s.jsx)(l.Z, {
                                    stroke: "orange"
                                }) : (0, s.jsx)("h6", {
                                    className: "fw-bold",
                                    children: null === e || void 0 === e ? void 0 : e.balance
                                })
                            })]
                        })]
                    }, null === e || void 0 === e ? void 0 : e.parentContract))) : null
                })
            }
        },
        46754: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return k
                }
            });
            var l = t(59499),
                i = t(67294),
                s = t(70552),
                o = t(45697),
                a = t.n(o);

            function r() {
                return r = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
                    }
                    return e
                }, r.apply(this, arguments)
            }

            function d(e, n) {
                if (null == e) return {};
                var t, l, i = function(e, n) {
                    if (null == e) return {};
                    var t, l, i = {},
                        s = Object.keys(e);
                    for (l = 0; l < s.length; l++) t = s[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < s.length; l++) t = s[l], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            var c = (0, i.forwardRef)((function(e, n) {
                var t = e.color,
                    l = void 0 === t ? "currentColor" : t,
                    s = e.size,
                    o = void 0 === s ? 24 : s,
                    a = d(e, ["color", "size"]);
                return i.createElement("svg", r({
                    ref: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: o,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, a), i.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }), i.createElement("path", {
                    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                }))
            }));
            c.propTypes = {
                color: a().string,
                size: a().oneOfType([a().string, a().number])
            }, c.displayName = "Settings";
            var u = c,
                v = t(22406),
                h = t(51099),
                g = t(96486),
                m = t(73640),
                f = t(52795),
                p = t(66721),
                x = t(97552),
                y = t(85893);

            function j(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, l)
                }
                return t
            }

            function b(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? j(Object(t), !0).forEach((function(n) {
                        (0, l.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var k = e => {
                var n, t, l, o, a;
                let {
                    showWarning: r,
                    linkQuery: d,
                    defChain: c,
                    setChain: j,
                    setCoinList: k,
                    importedCoins: w,
                    setImportedCoins: N,
                    setLinkQuery: I,
                    setShowWarning: L,
                    setIsWrong: O
                } = e;
                const {
                    0: S,
                    1: C
                } = (0, i.useState)(), {
                    0: U,
                    1: E
                } = (0, i.useState)(null), {
                    0: R,
                    1: W
                } = (0, i.useState)(!1), [B, T] = (0, f.Z)("tokenList");
                (0, i.useEffect)((() => {
                    W(!1), d ? B.filter((e => e.data == d)).length > 0 ? W(!0) : (W(!1), (0, m.Zt)(d, E, O)) : (E(null), O(!1))
                }), [d]), (0, i.useEffect)((() => {
                    if (null !== B && void 0 !== B && B.length) {
                        let e = (0, g.uniqBy)(B, "name");
                        if (T(e), (null === S || void 0 === S ? void 0 : S.length) > 1) {
                            let n = [...e, ...(0, g.uniqBy)(S, "name")];
                            T((0, g.uniqBy)(n, "name"))
                        }
                    }
                }), [S]);
                (0, i.useEffect)((() => {
                    _()
                }), []);
                const _ = async () => {
                        const e = p.Gy[c].filter((e => null === e || void 0 === e ? void 0 : e.default));
                        Promise.all(e.map((async e => {
                            try {
                                var n;
                                const t = await fetch(null !== e && void 0 !== e && null !== (n = e.data) && void 0 !== n && n.includes("http") ? null === e || void 0 === e ? void 0 : e.data : (0, m.bB)(null === e || void 0 === e ? void 0 : e.data)),
                                    l = await t.json(),
                                    i = null === l || void 0 === l ? void 0 : l.tokens,
                                    s = null === l || void 0 === l ? void 0 : l.name,
                                    o = null === l || void 0 === l ? void 0 : l.logoURI;
                                return b(b({}, e), {}, {
                                    name: s,
                                    logo: o,
                                    tokens: i
                                })
                            } catch (t) {
                                return b({}, e)
                            }
                        }))).then((e => {
                            let n = (0, g.uniqBy)(e, "data");
                            P(n)
                        }))
                    },
                    P = e => {
                        let n;
                        if (n = B, n) {
                            let t, l = e;
                            t = l.length ? [...n, ...l] : [...n, l], t = (0, g.uniqBy)(t, "name"), C(t), T([...t])
                        } else {
                            let n = [...e];
                            T(n), (0, f.Z)("tokenList", {
                                defaultValue: n
                            })
                        }
                    },
                    Z = (e, n) => {
                        let t = B;
                        null != t && (B[n].enabled = !B[n].enabled, t[n].enabled = !t[n].enabled, T([...B]))
                    };
                return (0, y.jsx)(y.Fragment, {
                    children: r ? (0, y.jsx)(h.default, {
                        resetLink: () => {
                            I(""), E(null), L(!1)
                        },
                        sortedLists: async () => {
                            d && await fetch(null !== d && void 0 !== d && d.includes("http") ? d : (0, m.bB)(d)).then((async e => {
                                const n = await e.json(),
                                    t = {
                                        tokens: null === n || void 0 === n ? void 0 : n.tokens,
                                        name: null === n || void 0 === n ? void 0 : n.name,
                                        logo: null === n || void 0 === n ? void 0 : n.logoURI,
                                        data: d,
                                        enabled: !1
                                    };
                                P(t)
                            })).catch((e => {}))
                        },
                        setCoinList: k,
                        setShowWarning: L,
                        listing: U
                    }) : (0, y.jsxs)("div", {
                        className: "token-listwrap_",
                        children: [R && (0, y.jsx)("div", {
                            style: {
                                color: "red"
                            },
                            children: "List already imported."
                        }), U ? (0, y.jsxs)("div", {
                            className: "tokn-row",
                            children: [(0, y.jsx)("div", {
                                className: "cryoto-box",
                                children: (0, y.jsx)("img", {
                                    src: null !== U && void 0 !== U && null !== (n = U.data) && void 0 !== n && n.logoURI ? null === U || void 0 === U || null === (t = U.data) || void 0 === t ? void 0 : t.logoURI : "../../assets/images/eth.png",
                                    width: 24,
                                    onError: v.t
                                })
                            }), (0, y.jsxs)("div", {
                                className: "tkn-grid",
                                style: {
                                    paddingLeft: "40px"
                                },
                                children: [(0, y.jsxs)("div", {
                                    children: [(0, y.jsx)("h6", {
                                        className: "fw-bold",
                                        children: null === U || void 0 === U || null === (l = U.data) || void 0 === l ? void 0 : l.name
                                    }), (0, y.jsxs)("p", {
                                        children: [(null === U || void 0 === U || null === (o = U.data) || void 0 === o || null === (a = o.tokens) || void 0 === a ? void 0 : a.length) || 0, " tokens"]
                                    })]
                                }), (0, y.jsx)("div", {
                                    children: (0, y.jsx)("span", {
                                        className: "primary-text",
                                        onClick: () => {
                                            L(!0)
                                        },
                                        children: "Import"
                                    })
                                })]
                            })]
                        }) : "", B && B.length > 0 && B.map(((e, n, t) => {
                            var l;
                            let i = (e => {
                                let n;
                                return n = null !== e && void 0 !== e && e.logo ? null === e || void 0 === e ? void 0 : e.logo : null !== e && void 0 !== e && e.logoURI ? null !== e && void 0 !== e && e.logoURI.startsWith("ipfs://") ? "https://ipfs.io/ipfs/" + (null === e || void 0 === e ? void 0 : e.logoURI.slice(7)) : null !== e && void 0 !== e && e.logoURI.startsWith("https://tokens.1inch.io") ? "https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,fl_sanitize,q_auto/" + (null === e || void 0 === e ? void 0 : e.logoURI) : null === e || void 0 === e ? void 0 : e.logoURI : "../../assets/images/shib-borderd-icon.png", n
                            })(e);
                            return (0, y.jsxs)("div", {
                                className: "flex mb-3 justify-content-between",
                                children: [(0, y.jsxs)("div", {
                                    className: "flex w-50 align-items-center",
                                    children: [(0, y.jsx)("img", {
                                        src: i,
                                        width: "35",
                                        className: "me-2",
                                        onError: v.t
                                    }), (0, y.jsxs)("div", {
                                        children: [(0, y.jsx)("h5", {
                                            children: null !== e && void 0 !== e && e.name ? null === e || void 0 === e ? void 0 : e.name : null === e || void 0 === e ? void 0 : e.data
                                        }), (0, y.jsxs)("div", {
                                            className: "d-flex align-items-center",
                                            children: [(0, y.jsxs)("p", {
                                                className: "m-0",
                                                children: [null === e || void 0 === e || null === (l = e.tokens) || void 0 === l ? void 0 : l.length, " tokens"]
                                            }), (0, y.jsx)("div", {
                                                className: "manageTokenDropdown ms-2",
                                                children: (0, y.jsxs)(s.Z, {
                                                    children: [(0, y.jsx)(s.Z.Toggle, {
                                                        children: (0, y.jsx)(u, {})
                                                    }), (0, y.jsxs)(s.Z.Menu, {
                                                        children: [(0, y.jsx)(s.Z.Item, {
                                                            onClick: () => window.open(`https://tokenlists.org/token-list?url=${null===e||void 0===e?void 0:e.data}`, "_blank"),
                                                            children: "View List"
                                                        }), (0, y.jsx)(s.Z.Item, {
                                                            onClick: () => (e => {
                                                                try {
                                                                    if (confirm("Are you sure your want to delete this list?")) {
                                                                        let n = B.slice().filter((n => n.data !== e));
                                                                        T([...n]), k(n)
                                                                    }
                                                                } catch (n) {
                                                                    x.uT("deleteList ", n)
                                                                }
                                                            })(null === e || void 0 === e ? void 0 : e.data),
                                                            target: "_blank",
                                                            children: "Remove List"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, y.jsx)("div", {
                                    className: "d-flex align-items-center switch-wrapper",
                                    children: (0, y.jsxs)("label", {
                                        className: "switch",
                                        children: [(0, y.jsx)("input", {
                                            className: "switch-input",
                                            type: "checkbox",
                                            checked: t[t.findIndex((n => n.data === e.data))].enabled,
                                            onChange: () => (async e => {
                                                const n = B.slice(),
                                                    t = n.findIndex((n => n.data === e));
                                                if (t > -1) {
                                                    var l;
                                                    n[t].enabled = !(null !== (l = n[t]) && void 0 !== l && l.enabled);
                                                    const o = await (0, m.wx)();
                                                    if (Z(e, t), j(o), k(n), n[t].enabled) {
                                                        var i;
                                                        const e = null === (i = n[t]) || void 0 === i ? void 0 : i.tokens;
                                                        let l = [...JSON.parse(localStorage.getItem("importedByUser") || "[]"), ...e];
                                                        localStorage.setItem("importedByUser", JSON.stringify((0, g.uniqBy)(l, "address"))), N(e)
                                                    } else {
                                                        var s;
                                                        const e = null === (s = n[t]) || void 0 === s ? void 0 : s.tokens;
                                                        let l = JSON.parse(localStorage.getItem("importedByUser") || "[]");
                                                        l = l.filter((n => !e.find((e => e.address == n.address)))), localStorage.setItem("importedByUser", JSON.stringify((0, g.uniqBy)(l, "address")))
                                                    }
                                                }
                                            })(null === e || void 0 === e ? void 0 : e.data)
                                        }), (0, y.jsx)("span", {
                                            className: "switch-label",
                                            "data-on": "On",
                                            "data-off": "Off"
                                        }), (0, y.jsx)("span", {
                                            className: "switch-handle"
                                        })]
                                    })
                                })]
                            }, null === e || void 0 === e ? void 0 : e.data)
                        }))]
                    })
                })
            }
        },
        17806: function(e, n, t) {
            t.r(n);
            var l = t(16981),
                i = (t(67294), t(22406)),
                s = t(85893);
            n.default = e => {
                let {
                    searchedList: n,
                    handleTokenSelect: t,
                    bridge: o
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: 0 != (null === n || void 0 === n ? void 0 : n.length) ? null === n || void 0 === n ? void 0 : n.map((e => {
                        let n = (e => {
                            let n;
                            return n = null !== e && void 0 !== e && e.logo ? null === e || void 0 === e ? void 0 : e.logo : null !== e && void 0 !== e && e.logoURI ? null !== e && void 0 !== e && e.logoURI.startsWith("ipfs://") ? "https://ipfs.io/ipfs/" + (null === e || void 0 === e ? void 0 : e.logoURI.slice(7)) : null !== e && void 0 !== e && e.logoURI.startsWith("https://tokens.1inch.io") ? "https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,fl_sanitize,q_auto/" + (null === e || void 0 === e ? void 0 : e.logoURI) : null === e || void 0 === e ? void 0 : e.logoURI : "../../assets/images/shib-borderd-icon.png", n
                        })(e);
                        return (0, s.jsxs)("div", {
                            className: "tokn-row",
                            onClick: () => t(e),
                            children: [(0, s.jsx)("div", {
                                className: "cryoto-box",
                                children: (0, s.jsx)("img", {
                                    className: "img-fluid",
                                    width: 32,
                                    src: n,
                                    onError: i.t,
                                    alt: ""
                                })
                            }), (0, s.jsxs)("div", {
                                className: "tkn-grid",
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h6", {
                                        className: "fw-bold",
                                        children: (null === e || void 0 === e ? void 0 : e.symbol) || (null === e || void 0 === e ? void 0 : e.parentSymbol)
                                    }), (0, s.jsx)("p", {
                                        children: "deposit" == o ? null === e || void 0 === e ? void 0 : e.parentName : null === e || void 0 === e ? void 0 : e.childName
                                    })]
                                }), (0, s.jsx)("div", {
                                    children: 0 === (null === e || void 0 === e ? void 0 : e.balance) ? (0, s.jsx)(l.Z, {
                                        stroke: "orange"
                                    }) : (0, s.jsx)("h6", {
                                        className: "fw-bold",
                                        children: null !== e && void 0 !== e && e.balance ? null === e || void 0 === e ? void 0 : e.balance : "00.00"
                                    })
                                })]
                            })]
                        }, null === e || void 0 === e ? void 0 : e.address)
                    })) : (0, s.jsx)("div", {
                        children: "No record found."
                    })
                })
            }
        },
        83084: function(e, n, t) {
            t.r(n);
            var l = t(4730),
                i = t(36375),
                s = t(67294),
                o = t(83691),
                a = t(60592),
                r = t(17806),
                d = t(46754),
                c = t(85893);
            const u = ["bridge", "coinList", "searchedList", "handleTokenSelect", "setCoinList", "setTokenModalList", "showWarning", "setShowWarning", "defChain", "setChain", "linkQuery", "setLinkQuery", "tokenModalList", "tokenState", "offset", "setIsWrong"];
            n.default = e => {
                let {
                    bridge: n,
                    coinList: t = [],
                    searchedList: v,
                    handleTokenSelect: h,
                    setCoinList: g,
                    setTokenModalList: m,
                    showWarning: f,
                    setShowWarning: p,
                    defChain: x,
                    setChain: y,
                    linkQuery: j,
                    setLinkQuery: b,
                    tokenModalList: k,
                    tokenState: w,
                    offset: N,
                    setIsWrong: I
                } = e;
                (0, l.Z)(e, u);
                const {
                    account: L,
                    library: O
                } = (0, i.aQ)(), S = O, {
                    0: C,
                    1: U
                } = (0, s.useState)([]), {
                    0: E,
                    1: R
                } = (0, s.useState)([]);
                (0, s.useEffect)((() => {
                    let e = C;
                    e = e.slice(0, 15), R(e)
                }), [N, k, C]);
                return (0, s.useEffect)((() => {
                    (async () => {
                        E.forEach((async e => {
                            await (0, o.yX)(S, L, e.address).then((n => {
                                e.balance = n > 0 ? n : "00.00"
                            })).catch((e => {
                                console.log("Error fetching balance => ", e)
                            }))
                        }))
                    })()
                }), [E]), (0, c.jsxs)("div", {
                    children: [(null === w || void 0 === w ? void 0 : w.step0) && !v && (0, c.jsx)(a.default, {
                        tokenModalList: k,
                        handleTokenSelect: h,
                        bridge: n
                    }), (null === w || void 0 === w ? void 0 : w.step0) && (0, c.jsx)(r.default, {
                        searchedList: v,
                        handleTokenSelect: h,
                        bridge: n
                    }), w.step1 && (0, c.jsx)(d.default, {
                        showWarning: f,
                        linkQuery: j,
                        defChain: x,
                        setChain: y,
                        setCoinList: g,
                        importedCoins: C,
                        setImportedCoins: U,
                        setLinkQuery: b,
                        setShowWarning: p,
                        setIsWrong: I
                    })]
                })
            }
        },
        51099: function(e, n, t) {
            t.r(n);
            var l = t(67294),
                i = t(85893);
            n.default = e => {
                let {
                    listing: n,
                    setCoinList: t,
                    resetLink: s,
                    sortedLists: o
                } = e;
                const {
                    0: a,
                    1: r
                } = (0, l.useState)(!1);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: (0, i.jsx)("img", {
                            src: "../../../assets/images/alert.png",
                            alt: ""
                        })
                    }), (0, i.jsx)("h3", {
                        style: {
                            textAlign: "center",
                            margin: "10px"
                        },
                        children: "Import at your own risk"
                    }), (0, i.jsx)("div", {
                        style: {
                            fontSize: "15px",
                            margin: "10px"
                        },
                        children: "By adding this token you are implicitly trusting that the data is correct. If you purchase this token, you may not be able to sell it back."
                    }), (0, i.jsx)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: (0, i.jsxs)("label", {
                            style: {
                                margin: "10px 0",
                                textAlign: "center"
                            },
                            children: [(0, i.jsx)("input", {
                                style: {
                                    marginRight: "5px"
                                },
                                type: "checkbox",
                                checked: a,
                                onChange: () => r((e => !e))
                            }), "I understand"]
                        })
                    }), (0, i.jsx)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: (0, i.jsx)("button", {
                            className: "btn primary-btn",
                            style: {
                                width: "200px"
                            },
                            disabled: !a,
                            onClick: () => {
                                a && setTimeout((() => {
                                    t((e => [{
                                        data: n.url,
                                        enabled: !1
                                    }, ...e])), o(), s()
                                }), 1)
                            },
                            children: "Import"
                        })
                    })]
                })
            }
        },
        22406: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return o
                },
                t: function() {
                    return a
                }
            });
            var l = t(36375),
                i = t(37918),
                s = t.n(i);
            const o = () => {
                    const {
                        library: e
                    } = (0, l.aQ)(), n = e, t = new(s())(null === n || void 0 === n ? void 0 : n.provider);
                    return (e, n) => {
                        let l = t.utils.toWei(String(e), n);
                        return t.utils.toBN(l)
                    }
                },
                a = e => {
                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-2"
                }
        }
    }
]);