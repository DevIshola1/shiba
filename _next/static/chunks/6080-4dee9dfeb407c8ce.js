"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6080], {
        98553: function(e, s, t) {
            var n = t(93189),
                l = t(71356);
            s.Z = () => {
                const {
                    getWalletTokenList: e
                } = (0, l.Z)();
                return (0, n.a)({
                    queryKey: ["token_list"],
                    queryFn: () => e().then((e => e.data.message.tokens))
                })
            }
        },
        48404: function(e, s, t) {
            t.r(s), t.d(s, {
                CommonModalNew: function() {
                    return h
                },
                ValInfoModals: function() {
                    return d
                }
            });
            var n = t(59499),
                l = t(67294),
                a = t(6212),
                o = t(97552),
                i = t(85893);

            function r(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    s && (n = n.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function c(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? r(Object(t), !0).forEach((function(s) {
                        (0, n.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            const d = e => {
                    let {
                        show: s,
                        setshow: t,
                        title: n,
                        externalCls: o,
                        children: r
                    } = e;
                    const d = {
                            show: s,
                            setshow: t,
                            title: n,
                            externalCls: o,
                            children: r
                        },
                        h = (0, l.useCallback)((() => {
                            t(!1)
                        }), []);
                    return (0, i.jsxs)(a.Z, c(c({}, d), {}, {
                        centered: !0,
                        show: s,
                        onHide: h,
                        backdrop: "static",
                        keyboard: !1,
                        className: `shib-popup ${o}`,
                        children: [(0, i.jsx)(a.Z.Header, {
                            closeButton: !0,
                            className: "text-center modal-header",
                            children: (0, i.jsx)(a.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: n
                                })
                            })
                        }), (0, i.jsx)(a.Z.Body, {
                            className: "low-sidespace body-font-sm",
                            children: r
                        })]
                    }))
                },
                h = e => {
                    let {
                        show: s,
                        setshow: t = null,
                        title: n,
                        externalCls: r,
                        children: d,
                        showClose: h,
                        setSendModal: p,
                        setSenderModal: m
                    } = e;
                    const u = {
                            show: s,
                            setshow: t,
                            title: n,
                            children: d,
                            externalCls: r,
                            showClose: h,
                            setSendModal: p,
                            setSenderModal: m
                        },
                        k = (0, l.useCallback)((() => {
                            t()
                        }), []);
                    return (0, i.jsxs)(a.Z, c(c({}, u), {}, {
                        centered: !0,
                        show: s,
                        onHide: k,
                        backdrop: "static",
                        keyboard: !1,
                        className: `shib-popup ${r}`,
                        children: ["Select Token" === n || h ? (0, i.jsxs)(a.Z.Header, {
                            className: "text-center modal-header",
                            children: [(0, i.jsx)("div", {
                                className: "back-blk backArrowBtn",
                                children: (0, i.jsx)("button", {
                                    onClick: () => {
                                        try {
                                            "Select Token" === n && p({
                                                step0: !1,
                                                step1: !0,
                                                step2: !1,
                                                step3: !1,
                                                showTokens: !1
                                            })
                                        } catch (e) {
                                            o.uT("backHandler ", e)
                                        }
                                    },
                                    children: (0, i.jsx)("img", {
                                        className: "img-fluid",
                                        src: "../../assets/images/left-icon.png",
                                        width: "16",
                                        height: "16",
                                        alt: ""
                                    })
                                })
                            }), (0, i.jsx)(a.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: n
                                })
                            })]
                        }) : (0, i.jsx)(a.Z.Header, {
                            closeButton: !0,
                            className: "text-center modal-header",
                            children: (0, i.jsx)(a.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: n
                                })
                            })
                        }), (0, i.jsx)(a.Z.Body, {
                            className: "low-sidespace body-font-sm",
                            children: d
                        })]
                    }))
                };
            s.default = e => {
                let {
                    show: s,
                    setshow: t,
                    title: n,
                    externalCls: o,
                    children: r
                } = e;
                const c = (0, l.useCallback)((() => {
                    t(!1)
                }), []);
                return (0, i.jsxs)(a.Z, {
                    centered: !0,
                    show: s,
                    onHide: c,
                    backdrop: "static",
                    keyboard: !1,
                    className: `shib-popup ${o}`,
                    children: [(0, i.jsx)(a.Z.Header, {
                        closeButton: !0,
                        className: "text-center modal-header",
                        children: (0, i.jsx)(a.Z.Title, {
                            id: "contained-modal-title-vcenter",
                            className: "d-inline-block fw-800 trs-3",
                            children: (0, i.jsx)("span", {
                                style: {
                                    color: "white"
                                },
                                children: n
                            })
                        })
                    }), (0, i.jsx)(a.Z.Body, {
                        className: "low-sidespace body-font-sm",
                        children: r
                    })]
                })
            }
        },
        16080: function(e, s, t) {
            t.r(s), t.d(s, {
                default: function() {
                    return O
                }
            });
            var n = t(59499),
                l = t(4730),
                a = t(67294),
                o = t(48404),
                i = t(83691),
                r = t(36375),
                c = t(37918),
                d = t.n(c),
                h = t(55678),
                p = (t(27967), t(97552)),
                m = t(73640),
                u = t(96486),
                k = t(48725),
                g = t(75940),
                v = t(98553),
                x = t(5845),
                j = t(99152),
                b = t(88589),
                f = t(46969),
                y = t(45113),
                w = t(47933),
                N = t(85893);
            const T = ["bridge", "setLoader", "setOpenManageToken", "setSelectedToken", "defUrl"];

            function C(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    s && (n = n.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function S(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? C(Object(t), !0).forEach((function(s) {
                        (0, n.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }

            function O(e) {
                let {
                    bridge: s,
                    setLoader: t,
                    setOpenManageToken: n,
                    setSelectedToken: c,
                    defUrl: C = (e => `https://api.1inch.exchange/v3.0/${e}/tokens`)
                } = e;
                (0, l.Z)(e, T);
                const {
                    library: O,
                    chainId: L
                } = (0, r.aQ)(), I = (0, g.Z)(), M = (0, i.bq)(), A = O, B = new(d())(null === A || void 0 === A ? void 0 : A.provider), E = I.L1Block(), {
                    0: P,
                    1: Z
                } = (0, a.useState)(!0), {
                    0: U,
                    1: W
                } = (0, a.useState)(""), {
                    0: D,
                    1: F
                } = (0, a.useState)(!0), {
                    0: Q,
                    1: R
                } = (0, a.useState)(!1), {
                    0: H,
                    1: $
                } = (0, a.useState)(!1), {
                    0: _,
                    1: q
                } = (0, a.useState)(""), [J, K, V] = (0, m.y$)(), {
                    0: z,
                    1: G
                } = (0, a.useState)(!1), {
                    0: X,
                    1: Y
                } = (0, a.useState)("");
                (0, a.useEffect)((() => {
                    (0, m.wx)().then((e => {
                        Y(e)
                    }))
                }), []);
                const {
                    0: ee,
                    1: se
                } = (0, a.useState)({
                    step0: !0,
                    step1: !1,
                    step2: !1,
                    step3: !1,
                    step4: !1,
                    title: "Select a Token"
                }), {
                    0: te,
                    1: ne
                } = (0, a.useState)([]), {
                    0: le,
                    1: ae
                } = (0, a.useState)(""), {
                    0: oe,
                    1: ie
                } = (0, a.useState)(!1), re = (0, k.dQ)(U), {
                    0: ce,
                    1: de
                } = (0, a.useState)(JSON.parse(localStorage.getItem("newToken") ? ? "[]")), he = (0, v.Z)(), {
                    0: pe,
                    1: me
                } = (0, a.useState)([]), {
                    0: ue,
                    1: ke
                } = (0, a.useState)(!1), {
                    0: ge,
                    1: ve
                } = (0, a.useState)(null), {
                    0: xe,
                    1: je
                } = (0, a.useState)(10), {
                    user: be
                } = (0, w.bN)(), {
                    0: fe,
                    1: ye
                } = (0, a.useState)({
                    parentContract: "",
                    name: "",
                    symbol: "",
                    decimals: "",
                    addedByUser: !1,
                    logo: "",
                    chainId: ""
                });
                (0, a.useEffect)((() => {
                    be && be.wallet && (async () => {
                        ke(!0);
                        try {
                            let e = [...ce, ...he.data];
                            for (const t of e) {
                                let e = "deposit" == s ? null === t || void 0 === t ? void 0 : t.parentContract : null === t || void 0 === t ? void 0 : t.childContract;
                                if ("Ether" == (null === t || void 0 === t ? void 0 : t.parentName) && "deposit" == s) {
                                    let e = await E.eth.getBalance(be.wallet);
                                    t.balance = +(+e / Math.pow(10, 18)).toFixed(m.i5), t.balance = t.balance > 0 ? t.balance : "00.00"
                                } else {
                                    let n = await M(s, be.wallet, e);
                                    t.balance = n > 0 ? n : "00.00"
                                }
                            }
                            ne([...e]), ke(!1)
                        } catch (e) {
                            console.log({
                                err: e
                            }), ke(!1), p.uT("getTokensList", e)
                        }
                    })()
                }), [be, he.data]);
                const we = e => {
                    c(e), Z(!1)
                };
                (0, a.useEffect)((() => {
                    P || W("")
                }), [P]), (0, a.useEffect)((() => {
                    try {
                        if (P) {
                            localStorage.setItem("newToken", JSON.stringify(ce));
                            let e = [...new Map(ce.map((e => [e.parentContract, e]))).values()],
                                s = [...new Map(te.map((e => [e.parentContract, e]))).values()],
                                t = [...e, ...s],
                                n = [...new Map(t.map((e => [e.parentContract, e]))).values()];
                            ne(n)
                        }
                    } catch (e) {
                        p.uT("UseEffect line 512 in bridge backup ", e)
                    }
                }), [ce]), (0, a.useEffect)((() => {
                    try {
                        if (te.length > 0) {
                            let e = [...te, ...ce],
                                s = (0, u.uniqBy)(e, "name");
                            ne(s)
                        }
                    } catch (e) {
                        p.uT("UseEffect line 540", e)
                    }
                }), []), (0, a.useEffect)((() => {
                    "" !== U && Ne()
                }), [re, U]);
                const Ne = async () => {
                        try {
                            const e = pe.find((e => e.address.toLowerCase() == U.toLowerCase())),
                                s = ce.find((e => e.parentContract.toLowerCase() == U.toLowerCase())),
                                t = te.find((e => e.parentContract.toLowerCase() == U.toLowerCase()));
                            if (se({
                                    step0: !1,
                                    step1: !1,
                                    step2: !1,
                                    step3: !0,
                                    step4: !1,
                                    title: "Manage Token"
                                }), s || t || e) $(!0);
                            else {
                                const e = B.utils.isAddress(String(U));
                                if (e && U) {
                                    let e = null === re || void 0 === re ? void 0 : re.tokenInfo,
                                        s = null === e || void 0 === e ? void 0 : e.logoURI;
                                    e.logoURI.startsWith("ipfs://") && (s = "https://ipfs.io/ipfs/" + (null === e || void 0 === e ? void 0 : e.logoURI.slice(7))), ye({
                                        parentContract: null === e || void 0 === e ? void 0 : e.address,
                                        name: null === e || void 0 === e ? void 0 : e.name,
                                        symbol: null === e || void 0 === e ? void 0 : e.symbol,
                                        decimals: null === e || void 0 === e ? void 0 : e.decimals,
                                        logo: s,
                                        chainId: null === e || void 0 === e ? void 0 : e.chainId,
                                        addedByUser: !0
                                    })
                                } else !e && U && (ke(!1), h.Am.error("Invalid Address", {
                                    position: h.Am.POSITION.TOP_RIGHT,
                                    autoClose: 600
                                }), se({
                                    step0: !1,
                                    step1: !1,
                                    step2: !0,
                                    step3: !1,
                                    step4: !1,
                                    title: "Manage Token"
                                }))
                            }
                        } catch (e) {
                            p.uT("getTempTokens", e)
                        }
                    },
                    Te = () => {
                        try {
                            let e = te,
                                s = ce.map((e => e.parentContract));
                            const t = e.filter((e => !s.includes(e.parentContract)));
                            ne(t), de([]), localStorage.setItem("newToken", "[]")
                        } catch (e) {
                            p.uT("clearAllCustomTokens", e)
                        }
                    };
                (0, a.useEffect)((() => {
                    let e = JSON.parse(localStorage.getItem("tokenList") || "[]");
                    if (e.length) {
                        e.filter((e => !0 === (null === e || void 0 === e ? void 0 : e.enabled))).map((e => {
                            let s = (0, u.uniqBy)(null === e || void 0 === e ? void 0 : e.tokens, "name");
                            return me([...pe, ...s])
                        }))
                    }
                }), []);
                const Ce = () => {
                        Z(!0), F(!0), R(!1), se({
                            step0: !0,
                            step1: !1,
                            step2: !1,
                            step3: !1,
                            step4: !1,
                            title: "Select a Token"
                        })
                    },
                    Se = e => {
                        try {
                            if (window.confirm("Are you sure you want to delete this token?")) {
                                let s = ce[e];
                                const t = ce.filter((e => e.parentContract !== s.parentContract));
                                de(t);
                                const n = te.filter((e => e.parentContract !== s.parentContract));
                                ne(n)
                            }
                        } catch (s) {
                            p.uT("spliceCustomToken ", s)
                        }
                    };
                let Oe = S({}, {
                        handleTokenSelect: we,
                        bridge: s,
                        coinList: J,
                        searchedList: ge,
                        setCoinList: K,
                        setTokenModalList: ne,
                        showWarning: oe,
                        setShowWarning: ie,
                        setChain: V,
                        linkQuery: _,
                        setLinkQuery: q,
                        tokenModalList: te,
                        tokenState: ee,
                        offset: xe,
                        defChain: X,
                        setIsWrong: G
                    }),
                    Le = S({}, {
                        onBackClick: Ce,
                        newToken: U,
                        setTokenState: se,
                        setDuplicateToken: $,
                        addNewToken: W,
                        setTempTokens: ye,
                        localTokens: ce,
                        clearAllCustomTokens: Te,
                        dupToken: H
                    });
                return (0, N.jsx)("div", {
                    children: (0, N.jsx)(o.default, {
                        title: "Select token",
                        show: P,
                        setshow: () => {
                            n(!1), Z(!1)
                        },
                        externalCls: "tkn-ht",
                        children: (0, N.jsxs)(N.Fragment, {
                            children: [P && ee.step0 && (0, N.jsx)(y.default, S({}, S(S({}, Oe), {}, {
                                handleSearchList: e => {
                                    try {
                                        if (ae(e), e.length) {
                                            let s = [...te].filter(((s, t) => {
                                                let n = !1;
                                                return Object.keys(s).forEach((t => {
                                                    `${s[t]}`.toLowerCase().includes(e.toLowerCase()) && (n = !0)
                                                })), n
                                            }));
                                            ve(s), je(10)
                                        } else ve(null), je(10)
                                    } catch (s) {
                                        p.uT("handleSearchList", s)
                                    }
                                },
                                isLoading: ue,
                                modalKeyword: le
                            }))), P && ee.step1 && (0, N.jsx)(f.default, S({}, S(S({}, Oe), {}, {
                                handleTokenSelect: we,
                                onBackClick: Ce,
                                isWrong: z,
                                setTokenState: se,
                                addNewToken: W
                            }))), P && ee.step2 && (0, N.jsx)(b.default, S({}, S(S({}, Le), {}, {
                                spliceCustomToken: Se
                            }))), P && ee.step3 && (0, N.jsx)(j.default, S({}, S(S({}, Le), {}, {
                                confirmImport: D,
                                tempTokens: fe,
                                setConfirmImport: F,
                                setAgreeImport: R,
                                agreeImport: Q,
                                setTokenModalList: ne,
                                searchToken: re,
                                setLocalTokens: de,
                                tokenModalList: te,
                                tokenState: ee
                            }))), P && ee.step4 && (0, N.jsx)(x.default, {
                                newToken: U,
                                setDuplicateToken: $,
                                addNewToken: W,
                                setTokenState: se,
                                setTempTokens: ye,
                                onBackClick: Ce,
                                localTokens: ce,
                                clearAllCustomTokens: Te,
                                spliceCustomToken: Se
                            })]
                        })
                    })
                })
            }
        },
        45113: function(e, s, t) {
            t.r(s);
            t(67294);
            var n = t(83084),
                l = t(95477),
                a = t(85893);
            s.default = e => {
                let {
                    handleTokenSelect: s,
                    handleSearchList: t,
                    isLoading: o,
                    bridge: i,
                    coinList: r,
                    searchedList: c,
                    setCoinList: d,
                    setTokenModalList: h,
                    showWarning: p,
                    setShowWarning: m,
                    setChain: u,
                    linkQuery: k,
                    setLinkQuery: g,
                    tokenModalList: v,
                    tokenState: x,
                    offset: j,
                    defChain: b,
                    setIsWrong: f,
                    modalKeyword: y
                } = e;
                return (0, a.jsx)("div", {
                    className: "popmodal-body tokn-popup no-ht",
                    children: (0, a.jsx)("div", {
                        className: "pop-block",
                        children: (0, a.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, a.jsx)("div", {
                                className: "sec-search ng-16",
                                children: (0, a.jsxs)("div", {
                                    className: "position-relative search-row",
                                    children: [(0, a.jsx)("input", {
                                        type: "text",
                                        className: "w-100",
                                        placeholder: "Search token or token address",
                                        onChange: e => {
                                            t(e.target.value)
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "search-icon",
                                        children: (0, a.jsx)("img", {
                                            width: "20",
                                            height: "21",
                                            className: "img-fluid",
                                            src: "../../assets/images/search.png",
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "token-sec",
                                children: (0, a.jsxs)("div", {
                                    className: "info-grid",
                                    children: [(0, a.jsx)("div", {
                                        children: (0, a.jsx)("p", {
                                            children: "Token List"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "token-btn-sec"
                                    })]
                                })
                            }), o ? (0, a.jsx)("div", {
                                className: "text-center pt-5",
                                children: (0, a.jsx)(l.Z, {
                                    size: 80,
                                    style: {
                                        color: "#f28102"
                                    }
                                })
                            }) : (0, a.jsxs)("div", {
                                className: "token-listwrap noScrollbar",
                                id: "scrollable-tokenList",
                                children: [b && (0, a.jsx)(n.default, {
                                    bridge: i,
                                    coinList: r,
                                    searchedList: c,
                                    handleTokenSelect: s,
                                    setCoinList: d,
                                    setTokenModalList: h,
                                    showWarning: p,
                                    setShowWarning: m,
                                    defChain: b,
                                    setChain: u,
                                    linkQuery: k,
                                    setLinkQuery: g,
                                    tokenModalList: v,
                                    tokenState: x,
                                    offset: j,
                                    setIsWrong: f
                                }), !v.length && y ? (0, a.jsx)("p", {
                                    className: "py-3 py-md-4 py-lg-5 text-center",
                                    children: "no record found"
                                }) : null]
                            })]
                        })
                    })
                })
            }
        },
        46969: function(e, s, t) {
            t.r(s);
            t(67294);
            var n = t(83084),
                l = t(85893);
            s.default = e => {
                let {
                    handleTokenSelect: s,
                    onBackClick: t,
                    bridge: a,
                    coinList: o,
                    searchedList: i,
                    setCoinList: r,
                    setTokenModalList: c,
                    showWarning: d,
                    setShowWarning: h,
                    setChain: p,
                    linkQuery: m,
                    setLinkQuery: u,
                    tokenModalList: k,
                    tokenState: g,
                    offset: v,
                    defChain: x,
                    isWrong: j,
                    setTokenState: b,
                    addNewToken: f,
                    setIsWrong: y
                } = e;
                return (0, l.jsxs)("div", {
                    className: "popmodal-body tokn-popup no-ht",
                    children: [(0, l.jsx)("button", {
                        className: "myBackBtnInTM",
                        onClick: t,
                        children: (0, l.jsx)("img", {
                            src: "../../../assets/images/back.png",
                            alt: ""
                        })
                    }), (0, l.jsx)("div", {
                        className: "pop-block",
                        children: (0, l.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, l.jsx)("div", {
                                className: "black-bg-sec",
                                children: (0, l.jsxs)("div", {
                                    className: "token-btn-sec pop-btns-grid",
                                    children: [(0, l.jsx)("div", {
                                        className: "blk-width",
                                        children: (0, l.jsx)("button", {
                                            type: "button",
                                            className: `btn w-100 ${g.step1&&"btn-active"}`,
                                            children: "Token Lists"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "blk-width",
                                        children: (0, l.jsx)("button", {
                                            type: "button",
                                            className: `btn w-100 ${g.step2&&"btn-active"}`,
                                            onClick: () => {
                                                b({
                                                    step0: !1,
                                                    step1: !1,
                                                    step2: !0,
                                                    step3: !1,
                                                    step4: !1,
                                                    title: "Manage Token"
                                                }), f("")
                                            },
                                            children: "Add token"
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "sec-search sec-search-secondry",
                                children: (0, l.jsxs)("div", {
                                    className: "position-relative search-row",
                                    children: [(0, l.jsx)("input", {
                                        type: "text",
                                        className: "w-100",
                                        placeholder: "Add list by https://",
                                        value: m,
                                        onChange: e => {
                                            e.target.value ? u(e.target.value) : u("")
                                        }
                                    }), (0, l.jsx)("div", {
                                        className: "search-icon",
                                        children: (0, l.jsx)("img", {
                                            width: "20",
                                            height: "21",
                                            className: "img-fluid",
                                            src: "../../assets/images/search.png",
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "token-listwrap list-ht noScrollbar",
                                children: [(0, l.jsx)(l.Fragment, {
                                    children: j ? (0, l.jsx)("div", {
                                        children: "Seems like the url is broken"
                                    }) : ""
                                }), x && (0, l.jsx)(n.default, {
                                    bridge: a,
                                    coinList: o,
                                    searchedList: i,
                                    handleTokenSelect: s,
                                    setCoinList: r,
                                    setTokenModalList: c,
                                    showWarning: d,
                                    setShowWarning: h,
                                    defChain: x,
                                    setChain: p,
                                    linkQuery: m,
                                    setLinkQuery: u,
                                    tokenModalList: k,
                                    tokenState: g,
                                    offset: v,
                                    setIsWrong: y
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        88589: function(e, s, t) {
            t.r(s);
            var n = t(79684),
                l = t(36375),
                a = t(41664),
                o = t.n(a),
                i = (t(67294), t(22406)),
                r = t(85893);
            s.default = e => {
                let {
                    onBackClick: s,
                    newToken: t,
                    setTokenState: a,
                    setDuplicateToken: c,
                    addNewToken: d,
                    setTempTokens: h,
                    localTokens: p,
                    clearAllCustomTokens: m,
                    dupToken: u,
                    spliceCustomToken: k
                } = e;
                const g = (0, n.B9)(),
                    {
                        chainId: v = 1
                    } = (0, l.aQ)();
                return (0, r.jsxs)("div", {
                    className: "popmodal-body tokn-popup no-ht",
                    children: [(0, r.jsx)("button", {
                        className: "myBackBtnInTM",
                        onClick: s,
                        children: (0, r.jsx)("img", {
                            src: "../../../assets/images/back.png",
                            alt: ""
                        })
                    }), (0, r.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, r.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, r.jsx)("div", {
                                className: "sec-search sec-search-secondry",
                                children: (0, r.jsxs)("div", {
                                    className: "position-relative search-row",
                                    onClick: () => {
                                        "" !== t && a({
                                            step0: !1,
                                            step1: !1,
                                            step2: !1,
                                            step3: !0,
                                            step4: !1,
                                            title: "Manage Token"
                                        })
                                    },
                                    children: [(0, r.jsx)("input", {
                                        type: "text",
                                        className: "w-100",
                                        placeholder: "Enter Token Address",
                                        autoFocus: t.length > 0,
                                        onChange: e => {
                                            c(!1), e.target.value ? d(e.target.value) : (d(""), h({}), a({
                                                step0: !1,
                                                step1: !1,
                                                step2: !0,
                                                step3: !1,
                                                step4: !1,
                                                title: "Manage Token"
                                            }))
                                        }
                                    }), (0, r.jsx)("div", {
                                        className: "search-icon",
                                        children: (0, r.jsx)("img", {
                                            width: "20",
                                            height: "21",
                                            className: "img-fluid",
                                            src: "../../assets/images/search.png",
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "pop-bottom pt-0",
                                children: (0, r.jsxs)("div", {
                                    className: "",
                                    children: [(0, r.jsxs)("div", {
                                        className: "grid-block",
                                        children: [(0, r.jsxs)("div", {
                                            className: "blk-width",
                                            children: [(0, r.jsxs)("div", {
                                                children: [p.length, " Token Found"]
                                            }), (0, r.jsx)("p", {
                                                className: "lite-color",
                                                children: "Token stored in your browser"
                                            })]
                                        }), (0, r.jsx)("div", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            className: "btn-sm",
                                            children: (0, r.jsx)("button", {
                                                type: "button",
                                                className: "primary-text",
                                                onClick: m,
                                                children: "Clear All"
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "token-listwrap usr-listht",
                                        children: [u && (0, r.jsx)("div", {
                                            className: "dupToken",
                                            style: {
                                                color: "red"
                                            },
                                            children: "Token already exists."
                                        }), p.map(((e, s) => (0, r.jsxs)("div", {
                                            className: "tokn-row",
                                            children: [(0, r.jsx)("div", {
                                                className: "cryoto-box",
                                                children: (0, r.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: null !== e && void 0 !== e && e.logo || null !== e && void 0 !== e && e.logoURI ? e.logo || (null === e || void 0 === e ? void 0 : e.logoURI) : "../../../assets/images/shib-borderd-icon.png",
                                                    onError: i.t,
                                                    width: 40,
                                                    alt: ""
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "tkn-grid",
                                                children: [(0, r.jsxs)("div", {
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "d-flex align-items-end",
                                                        children: [(0, r.jsx)("h6", {
                                                            className: "fw-bold",
                                                            children: (null === e || void 0 === e ? void 0 : e.parentSymbol) || (null === e || void 0 === e ? void 0 : e.symbol)
                                                        }), (null === e || void 0 === e ? void 0 : e.addedByUser) && (0, r.jsx)("small", {
                                                            className: "ms-2",
                                                            style: {
                                                                color: "#666"
                                                            },
                                                            children: "Added By User"
                                                        })]
                                                    }), (0, r.jsx)("p", {
                                                        children: (null === e || void 0 === e ? void 0 : e.parentName) || (null === e || void 0 === e ? void 0 : e.name)
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("span", {
                                                        className: "me-4",
                                                        onClick: () => k(s),
                                                        children: (0, r.jsx)("img", {
                                                            className: "img-fluid",
                                                            src: "../../../assets/images/del.png",
                                                            alt: ""
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        children: (0, r.jsx)(o(), {
                                                            href: g((null === e || void 0 === e ? void 0 : e.chainId) || v, (null === e || void 0 === e ? void 0 : e.parentContract) || (null === e || void 0 === e ? void 0 : e.address), "address"),
                                                            target: "_blank",
                                                            passHref: !0,
                                                            children: (0, r.jsx)("img", {
                                                                className: "img-fluid",
                                                                src: "../../../assets/images/up.png",
                                                                alt: ""
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }, null === e || void 0 === e ? void 0 : e.parentContract)))]
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "myTipsArea",
                            children: ["Tip: Custom tokens are stored locally in your browser", " "]
                        })]
                    })]
                })
            }
        },
        99152: function(e, s, t) {
            t.r(s);
            var n = t(59499),
                l = (t(67294), t(55678)),
                a = t(22406),
                o = t(97552),
                i = t(85893);

            function r(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    s && (n = n.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function c(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? r(Object(t), !0).forEach((function(s) {
                        (0, n.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            s.default = e => {
                let {
                    onBackClick: s,
                    newToken: t,
                    setTokenState: n,
                    setDuplicateToken: r,
                    addNewToken: d,
                    setTempTokens: h,
                    localTokens: p,
                    clearAllCustomTokens: m,
                    dupToken: u,
                    confirmImport: k,
                    tempTokens: g,
                    setConfirmImport: v,
                    setAgreeImport: x,
                    agreeImport: j,
                    setTokenModalList: b,
                    searchToken: f,
                    setLocalTokens: y,
                    tokenModalList: w,
                    tokenState: N
                } = e;
                return (0, i.jsxs)("div", {
                    className: "popmodal-body tokn-popup no-ht",
                    children: [(0, i.jsx)("button", {
                        className: "myBackBtnInTM",
                        onClick: s,
                        children: (0, i.jsx)("img", {
                            src: "../../../assets/images/back.png",
                            alt: ""
                        })
                    }), (0, i.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, i.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, i.jsx)("div", {
                                className: "sec-search sec-search-secondry",
                                children: (0, i.jsxs)("div", {
                                    className: "position-relative search-row",
                                    children: [(0, i.jsx)("input", {
                                        type: "text",
                                        className: "w-100",
                                        placeholder: "Enter Token Address",
                                        onChange: e => {
                                            r(!1), e.target.value ? d(e.target.value) : (d(""), h({}), n({
                                                step0: !1,
                                                step1: !1,
                                                step2: !0,
                                                step3: !1,
                                                step4: !1,
                                                title: "Manage Token"
                                            }))
                                        },
                                        autoFocus: t.length > 0,
                                        value: t
                                    }), (0, i.jsx)("div", {
                                        className: "search-icon",
                                        children: (0, i.jsx)("img", {
                                            width: "20",
                                            height: "21",
                                            className: "img-fluid",
                                            src: "../../assets/images/search.png",
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "pop-bottom pt-0",
                                children: k ? (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsxs)("div", {
                                        className: "",
                                        children: [(0, i.jsxs)("div", {
                                            className: "grid-block",
                                            children: [(0, i.jsxs)("div", {
                                                className: "blk-width",
                                                children: [(0, i.jsxs)("div", {
                                                    children: [p.length, " Token Found"]
                                                }), (0, i.jsx)("p", {
                                                    className: "lite-color",
                                                    children: "Token stored in your browser"
                                                })]
                                            }), (0, i.jsx)("div", {
                                                style: {
                                                    textAlign: "right"
                                                },
                                                className: "btn-sm",
                                                children: (0, i.jsx)("button", {
                                                    type: "button",
                                                    className: "primary-text",
                                                    onClick: m,
                                                    children: "Clear All"
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "token-listwrap usr-listht",
                                            children: (0, i.jsxs)("div", {
                                                className: "token-listwrap usr-listh",
                                                children: [u && (0, i.jsx)("div", {
                                                    style: {
                                                        color: "red"
                                                    },
                                                    children: "Token already exists."
                                                }), !u && Object.keys(g).length > 0 && (0, i.jsxs)("div", {
                                                    className: "tokn-row",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "cryoto-box",
                                                        children: (0, i.jsx)("img", {
                                                            className: "img-fluid",
                                                            src: null !== g && void 0 !== g && g.logo ? null === g || void 0 === g ? void 0 : g.logo : "../../../assets/images/shib-borderd-icon.png",
                                                            width: 40,
                                                            alt: "",
                                                            onError: a.t
                                                        })
                                                    }), (0, i.jsxs)("div", {
                                                        className: "tkn-grid",
                                                        children: [(0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("h6", {
                                                                className: "fw-bold",
                                                                children: null !== g && void 0 !== g && g.parentSymbol || null !== g && void 0 !== g && g.symbol ? g.parentSymbol || (null === g || void 0 === g ? void 0 : g.symbol) : "Unknown"
                                                            }), (0, i.jsx)("p", {
                                                                children: null !== g && void 0 !== g && g.parentSymbol || null !== g && void 0 !== g && g.name ? g.parentSymbol || (null === g || void 0 === g ? void 0 : g.name) : "Unknown"
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("span", {
                                                                className: "primary-text",
                                                                onClick: () => {
                                                                    v(!k)
                                                                },
                                                                children: "Import"
                                                            })
                                                        })]
                                                    })]
                                                }), !u && 0 === Object.keys(g).length && (0, i.jsx)("div", {
                                                    children: "No token found"
                                                })]
                                            })
                                        })]
                                    })
                                }) : (0, i.jsxs)(i.Fragment, {
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
                                                onChange: () => x(!j)
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
                                            disabled: !1 === j,
                                            onClick: () => {
                                                try {
                                                    d(""), v(!0), x(!j);
                                                    let e = null === f || void 0 === f ? void 0 : f.tokenInfo;
                                                    if (e) {
                                                        let s;
                                                        s = null !== e && void 0 !== e && e.logoURI.startsWith("ipfs://") ? "https://ipfs.io/ipfs/" + (null === e || void 0 === e ? void 0 : e.logoURI.slice(7)) : null === e || void 0 === e ? void 0 : e.logoURI;
                                                        let t = {
                                                            parentContract: null === e || void 0 === e ? void 0 : e.address,
                                                            name: null === e || void 0 === e ? void 0 : e.name,
                                                            symbol: null === e || void 0 === e ? void 0 : e.symbol,
                                                            decimals: null === e || void 0 === e ? void 0 : e.decimals,
                                                            logo: s,
                                                            chainId: null === e || void 0 === e ? void 0 : e.chainId,
                                                            balance: 0,
                                                            addedByUser: !0
                                                        };
                                                        y([...p, t]), b([...w, t]), l.Am.success(`${t.name} successfully added.`, {
                                                            position: l.Am.POSITION.BOTTOM_CENTER,
                                                            autoClose: 3e3
                                                        }), n(c(c({}, N), {}, {
                                                            step3: !1,
                                                            step4: !0,
                                                            title: "Manage Token"
                                                        }))
                                                    } else h({})
                                                } catch (e) {
                                                    o.uT("addTokenHandler", e)
                                                }
                                            },
                                            children: "Import"
                                        })
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "pop-bottom",
                            children: (0, i.jsx)("div", {
                                className: "",
                                children: (0, i.jsxs)("div", {
                                    className: "myTipsArea",
                                    children: ["Tip: Custom tokens are stored locally in your browser", " "]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        5845: function(e, s, t) {
            t.r(s);
            var n = t(41664),
                l = t.n(n),
                a = (t(67294), t(22406)),
                o = t(85893);
            s.default = e => {
                let {
                    newToken: s,
                    setDuplicateToken: t,
                    addNewToken: n,
                    setTokenState: i,
                    setTempTokens: r,
                    onBackClick: c,
                    localTokens: d,
                    clearAllCustomTokens: h,
                    spliceCustomToken: p
                } = e;
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        className: "popmodal-body tokn-popup no-ht",
                        children: [(0, o.jsx)("button", {
                            className: "myBackBtnInTM",
                            onClick: c,
                            children: (0, o.jsx)("img", {
                                src: "../../../assets/images/back.png",
                                alt: ""
                            })
                        }), (0, o.jsxs)("div", {
                            className: "pop-block",
                            children: [(0, o.jsxs)("div", {
                                className: "pop-top",
                                children: [(0, o.jsx)("div", {
                                    className: "sec-search sec-search-secondry",
                                    children: (0, o.jsxs)("div", {
                                        className: "position-relative search-row",
                                        children: [(0, o.jsx)("input", {
                                            type: "text",
                                            className: "w-100",
                                            placeholder: "Enter Token Address",
                                            autoFocus: s.length > 0,
                                            onChange: e => {
                                                t(!1), e.target.value ? n(e.target.value) : (n(""), r({}), i({
                                                    step0: !1,
                                                    step1: !1,
                                                    step2: !0,
                                                    step3: !1,
                                                    step4: !1,
                                                    title: "Manage Token"
                                                }))
                                            }
                                        }), (0, o.jsx)("div", {
                                            className: "search-icon",
                                            children: (0, o.jsx)("img", {
                                                width: "20",
                                                height: "21",
                                                className: "img-fluid",
                                                src: "../../assets/images/search.png",
                                                alt: ""
                                            })
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "pop-bottom pt-0",
                                    children: (0, o.jsx)("div", {
                                        className: "",
                                        children: (0, o.jsxs)("div", {
                                            className: "grid-block",
                                            children: [(0, o.jsxs)("div", {
                                                className: "blk-width",
                                                children: [(0, o.jsxs)("div", {
                                                    children: [null === d || void 0 === d ? void 0 : d.length, " Token Found"]
                                                }), (0, o.jsx)("p", {
                                                    className: "lite-color",
                                                    children: "Token stored in your browser"
                                                })]
                                            }), (0, o.jsx)("div", {
                                                style: {
                                                    textAlign: "right"
                                                },
                                                className: "btn-sm",
                                                children: (0, o.jsx)("button", {
                                                    type: "button",
                                                    className: "primary-text",
                                                    onClick: h,
                                                    children: "Clear All"
                                                })
                                            })]
                                        })
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "token-listwrap usr-listht",
                                    children: d.map(((e, s) => (0, o.jsxs)("div", {
                                        className: "tokn-row",
                                        children: [(0, o.jsx)("div", {
                                            className: "cryoto-box",
                                            children: (0, o.jsx)("img", {
                                                className: "img-fluid",
                                                src: null !== e && void 0 !== e && e.logo ? e.logo : "../../../assets/images/shib-borderd-icon.png",
                                                onError: a.t,
                                                width: 40
                                            })
                                        }), (0, o.jsxs)("div", {
                                            className: "tkn-grid",
                                            children: [(0, o.jsxs)("div", {
                                                children: [(0, o.jsx)("h6", {
                                                    className: "fw-bold",
                                                    children: e.symbol ? null === e || void 0 === e ? void 0 : e.symbol : "Unknown"
                                                }), (0, o.jsx)("p", {
                                                    children: null !== e && void 0 !== e && e.name ? null === e || void 0 === e ? void 0 : e.name : "Unknown"
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                children: [(0, o.jsx)("span", {
                                                    className: "me-4",
                                                    onClick: () => p(s),
                                                    children: (0, o.jsx)("img", {
                                                        className: "img-fluid",
                                                        src: "../../../assets/images/del.png",
                                                        alt: ""
                                                    })
                                                }), (0, o.jsx)("span", {
                                                    children: (0, o.jsx)(l(), {
                                                        target: "_blank",
                                                        href: "",
                                                        passHref: !0,
                                                        children: (0, o.jsx)("img", {
                                                            className: "img-fluid",
                                                            src: "../../../assets/images/up.png",
                                                            alt: ""
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    }, e.parentContract)))
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "myTipsArea",
                                children: ["Tip: Custom tokens are stored locally in your browser", " "]
                            })]
                        })]
                    })
                })
            }
        },
        71356: function(e, s, t) {
            var n = t(69574);
            s.Z = () => {
                const e = (0, n.Z)();
                return {
                    getValidatorsDetail: s => e.get(`validators/overview/${s}`),
                    validatorsList: function(s) {
                        return e.get(`validators/getList?value=${s}`)
                    },
                    migrateValidatorsList: function(s, t) {
                        return e.get(`validators/getMigrationList?value=${s}`, t)
                    },
                    restake: function(s) {
                        return e.post("validators/restake", s)
                    },
                    commission: function(s) {
                        return e.post("validators/updateCommission", s)
                    },
                    withdrawReward: function(s) {
                        return e.post("validators/withdrawRewards", s)
                    },
                    unbound: function(s) {
                        return e.post("unbond", s)
                    },
                    getWalletTokenList: function() {
                        return e.get("tokens/getList")
                    },
                    saveDonation: function(s) {
                        return e.post("donation", s)
                    }
                }
            }
        }
    }
]);