"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [687], {
        57545: function(e, t, s) {
            var r = s(36375),
                o = s(37918),
                n = s.n(o);
            t.Z = () => {
                const {
                    library: e
                } = (0, r.aQ)(), t = e, s = new(n())(null === t || void 0 === t ? void 0 : t.provider);
                return async () => {
                    let e = await s.eth.getGasPrice();
                    return parseInt(e)
                }
            }
        },
        94821: function(e, t, s) {
            var r = s(93189),
                o = s(5121);
            t.Z = e => (0, r.a)({
                queryKey: ["usd_value", e],
                queryFn: async () => {
                    let t = await o.Z.get(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${e}&vs_currencies=usd`),
                        s = 1;
                    return Object.keys(t.data).forEach((r => {
                        r.toLowerCase() == e.toLowerCase() && (s = t.data[r].usd)
                    })), s
                }
            }).data
        },
        51942: function(e, t, s) {
            s.r(t);
            var r = s(59499),
                o = s(75940),
                n = (s(67294), s(78268)),
                a = s(46445),
                l = s(85893);

            function i(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(s), !0).forEach((function(t) {
                        (0, r.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    setWidModState: t,
                    withModalState: s,
                    estGasFee: r
                } = e;
                const i = (0, o.Z)();
                return (0, l.jsx)("div", {
                    className: "popmodal-body no-ht",
                    children: (0, l.jsxs)("div", {
                        className: "pop-block withdraw_pop",
                        children: [(0, l.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, l.jsxs)("div", {
                                className: "inner-top p-2",
                                children: [(0, l.jsx)("h4", {
                                    className: "text-md ff-mos pb-3",
                                    children: "What isn't possible"
                                }), (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsxs)("div", {
                                        className: "col-1",
                                        children: [(0, l.jsx)(n.Z, {
                                            style: {
                                                background: "red",
                                                borderRadius: "50px",
                                                padding: "2px"
                                            }
                                        }), " "]
                                    }), (0, l.jsxs)("div", {
                                        className: "col-11",
                                        children: [(0, l.jsx)("h6", {
                                            className: "text-sm ff-mos pb-1",
                                            children: "Cancelling any withdraw"
                                        }), (0, l.jsx)("p", {
                                            className: "text-sm",
                                            children: "You cannot cancel a withdrawal once you have begun the process."
                                        })]
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "inner-top p-2",
                                children: [(0, l.jsx)("h4", {
                                    className: "text-md ff-mos pb-3",
                                    children: "What's possible"
                                }), (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsxs)("div", {
                                        className: "col-1",
                                        children: [(0, l.jsx)(a.Z, {
                                            style: {
                                                background: "green",
                                                borderRadius: "50px",
                                                padding: "2px"
                                            }
                                        }), " "]
                                    }), (0, l.jsxs)("div", {
                                        className: "col-11",
                                        children: [(0, l.jsxs)("h6", {
                                            className: "text-sm ff-mos pb-1",
                                            children: ["Moving funds from ", i.Layer2, " to ", i.Layer1]
                                        }), (0, l.jsxs)("p", {
                                            className: "text-sm",
                                            children: ["Here you can move funds from the ", i.Layer2, " to", " ", i.Layer1, ". This will take 60 minutes - 3 hours."]
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "pop-bottom",
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)("a", {
                                    className: "btn primary-btn w-100 d-flex align-items-center justify-content-center",
                                    onClick: () => {
                                        t(c(c({}, s), {}, {
                                            step0: !1,
                                            step1: !0,
                                            title: "Transfer Overview"
                                        })), r()
                                    },
                                    children: "Continue"
                                })
                            })
                        })]
                    })
                })
            }
        },
        45576: function(e, t, s) {
            s.r(t);
            var r = s(59499),
                o = s(25762),
                n = s(16981),
                a = s(75940),
                l = s(16390),
                i = s(36375),
                c = (s(67294), s(57333)),
                d = s(85893);

            function p(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(s), !0).forEach((function(t) {
                        (0, r.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    withModalState: t,
                    setWidModState: s,
                    estGasFee: r,
                    loader: p,
                    selectedToken: h,
                    allowance: m,
                    estGas: f,
                    setError: g,
                    setButtonLoader: v
                } = e;
                const {
                    chainId: j = 1
                } = (0, i.aQ)(), x = (0, a.Z)(), w = (0, l.Z)(), b = e => {
                    e.currentTarget.src = j == x.L1Chain ? "../../assets/images/eth_logo.png" : "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-3"
                };
                return (0, d.jsxs)("div", {
                    className: "popmodal-body no-ht withdrawModal",
                    children: [(0, d.jsx)("div", {
                        className: "backDepState",
                        onClick: () => {
                            s(u(u({}, t), {}, {
                                step0: !0,
                                step1: !1,
                                title: "Please Note"
                            })), r()
                        },
                        children: (0, d.jsx)(o.Z, {})
                    }), (0, d.jsxs)("div", {
                        className: "pop-block withdrawModalPopBlock",
                        children: [(0, d.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, d.jsx)("div", {
                                className: "border-2 rounded-circle d-flex align-item-center justify-content-center p-3 w-25 m-auto",
                                style: {
                                    borderColor: "#F28B03"
                                },
                                children: (0, d.jsx)("img", {
                                    width: "80",
                                    src: "../../assets/images/gas-station.png",
                                    alt: ""
                                })
                            }), (0, d.jsxs)("div", {
                                className: "text-center",
                                children: [(0, d.jsx)("h4", {
                                    className: "ff-mos fs-6 pt-4",
                                    children: "Withdrawal process for Proof of Stake consists of 2 transactions"
                                }), (0, d.jsx)("p", {
                                    className: "text-sm pt-1",
                                    children: "Estimated total gas required for these transactions."
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "row pt-3",
                                children: [(0, d.jsxs)("div", {
                                    className: "col-7 d-flex align-items-center",
                                    children: [(0, d.jsx)("img", {
                                        className: "img-fluid",
                                        width: "30",
                                        src: "../../../assets/images/shib-logo.png",
                                        alt: "",
                                        onError: b
                                    }), (0, d.jsx)("p", {
                                        className: "ps-2",
                                        children: "Withdrawal Initialized"
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "col-5 text-end",
                                    children: (0, d.jsx)(c.Z, {
                                        thousandSeparator: !0,
                                        displayType: "text",
                                        prefix: "$",
                                        value: (m > 0 ? 0 : m * w + (m ? +f + +m : +f) * w).toFixed(8)
                                    })
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "row pt-3",
                                children: [(0, d.jsxs)("div", {
                                    className: "col-7 d-flex align-items-center",
                                    children: [(0, d.jsx)("img", {
                                        className: "img-fluid",
                                        width: "30",
                                        src: (null === h || void 0 === h ? void 0 : h.logo) ? ? (null === h || void 0 === h ? void 0 : h.logoURI) ? ? "../../assets/images/eth_logo.png",
                                        onError: b,
                                        alt: ""
                                    }), (0, d.jsx)("p", {
                                        className: "ps-2",
                                        children: "Approve Withdrawal"
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "col-5 d-flex align-items-center justify-content-end",
                                    children: p ? (0, d.jsx)(n.Z, {}) : (0, d.jsx)(d.Fragment, {
                                        children: m > 0 ? (0, d.jsx)(d.Fragment, {
                                            children: (0, d.jsx)(c.Z, {
                                                thousandSeparator: !0,
                                                displayType: "text",
                                                prefix: "$",
                                                value: (m * w).toFixed(8)
                                            })
                                        }) : "Approved"
                                    })
                                })]
                            }), "plasma" === (null === h || void 0 === h ? void 0 : h.bridgetype) && (0, d.jsxs)("div", {
                                className: "row pt-3",
                                children: [(0, d.jsxs)("div", {
                                    className: "col-7 d-flex align-items-center",
                                    children: [(0, d.jsx)("img", {
                                        className: "img-fluid",
                                        width: "30",
                                        src: null !== h && void 0 !== h && h.logo || null !== h && void 0 !== h && h.logoURI ? (null === h || void 0 === h ? void 0 : h.logo) || (null === h || void 0 === h ? void 0 : h.logoURI) : "../../assets/images/eth_logo.png",
                                        onError: b,
                                        alt: ""
                                    }), (0, d.jsx)("p", {
                                        className: "ps-2",
                                        children: "Withdrawal Complete"
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "col-5 d-flex align-items-center justify-content-end",
                                    children: p ? (0, d.jsx)(n.Z, {}) : (0, d.jsx)(d.Fragment, {
                                        children: (0, d.jsx)(c.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            prefix: "$",
                                            value: ((m ? +f + +m : +f) * w).toFixed(8)
                                        })
                                    })
                                })]
                            })]
                        }), (0, d.jsx)("div", {
                            className: "pop-bottom",
                            children: (0, d.jsx)("div", {
                                children: (0, d.jsx)("a", {
                                    className: "btn primary-btn w-100 d-flex align-items-center justify-content-center",
                                    onClick: () => {
                                        s(u(u({}, t), {}, {
                                            step1: !1,
                                            step2: !0,
                                            title: "Confirm Transfer"
                                        })), g(null), v(!1)
                                    },
                                    children: "Continue"
                                })
                            })
                        })]
                    })]
                })
            }
        },
        20687: function(e, t, s) {
            s.r(t);
            var r = s(59499),
                o = s(36375),
                n = s(67294),
                a = s(76704),
                l = s(48404),
                i = s(37918),
                c = s.n(i),
                d = s(52795),
                p = s(39794),
                u = s(37150),
                h = s(16390),
                m = s(75940),
                f = s(51942),
                g = s(45576),
                v = s(91489),
                j = s(94821),
                x = s(57545),
                w = s(47933),
                b = s(85893);

            function y(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(s), !0).forEach((function(t) {
                        (0, r.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : y(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            const N = {
                step0: !0,
                step1: !1,
                step2: !1,
                step3: !1,
                step4: !1,
                step5: !1,
                step6: !1,
                title: "Please Note"
            };
            t.default = e => {
                let {
                    page: t,
                    setWithdrawModalOpen: s,
                    selectedToken: r,
                    withdrawTokenInput: i,
                    show: y,
                    reset: k
                } = e;
                const S = (0, m.Z)(),
                    {
                        library: C
                    } = (0, o.aQ)(),
                    P = C,
                    E = new(c())(null === P || void 0 === P ? void 0 : P.provider),
                    T = S.L1Block(),
                    {
                        0: M,
                        1: W
                    } = (0, n.useState)(""),
                    {
                        0: Z,
                        1: A
                    } = (0, n.useState)(0),
                    [D, F] = (0, d.Z)("txState"),
                    {
                        0: I,
                        1: L
                    } = (0, n.useState)(!0),
                    {
                        0: R,
                        1: _
                    } = (0, n.useState)(0),
                    {
                        0: G,
                        1: B
                    } = (0, n.useState)([]),
                    {
                        0: z,
                        1: H
                    } = (0, n.useState)(),
                    {
                        0: U,
                        1: X
                    } = (0, n.useState)(!1),
                    {
                        0: Y,
                        1: $
                    } = (0, n.useState)(!1),
                    {
                        0: q,
                        1: Q
                    } = (0, n.useState)(!1),
                    {
                        0: K,
                        1: V
                    } = (0, n.useState)(!1),
                    {
                        0: J,
                        1: ee
                    } = (0, n.useState)(null),
                    te = (0, x.Z)(),
                    {
                        0: se,
                        1: re
                    } = (0, n.useState)(18),
                    {
                        0: oe,
                        1: ne
                    } = (0, n.useState)(N),
                    ae = (0, a.S)("abis/plasma/WithdrawManager.json"),
                    le = (0, a.S)("abis/pos/ERC20.json"),
                    ie = (0, j.Z)(r.parentContract),
                    {
                        user: ce
                    } = ((0, h.Z)(), (0, w.bN)());
                (0, n.useEffect)((() => {
                    de()
                }), [ae]);
                const de = async () => {
                    if (ae)
                        if (L(!0), "Ether" !== r.parentName) {
                            let e = new T.eth.Contract(le, null === r || void 0 === r ? void 0 : r.parentContract);
                            console.log("INSTANCE", e), console.log("ERC20", le, "parentContract", null === r || void 0 === r ? void 0 : r.parentContract), re(await e.methods.decimals().call());
                            let t = (0, u.getToWeiUnitFromDecimal)(se),
                                s = await te(),
                                o = await e.methods.allowance(ce && ce.wallet, S.contractAddress.WITHDRAW_MANAGER_PROXY).call({
                                    from: ce && ce.wallet
                                }) / Math.pow(10, se),
                                n = new T.eth.Contract(le, null === r || void 0 === r ? void 0 : r.parentContract);
                            if (o < i) {
                                console.log("AMOUNT", E.utils.toBN(E.utils.toWei(String(i), t)));
                                let e = await n.methods.approve(S.contractAddress.WITHDRAW_MANAGER_PROXY, E.utils.toBN(E.utils.toWei(String(i), t))).estimateGas({
                                    from: ce && ce.wallet
                                });
                                A(E.utils.toBN(e).mul(E.utils.toBN(s)) / Math.pow(10, 18)), L(!1)
                            }
                            if ("plasma" === (null === r || void 0 === r ? void 0 : r.bridgetype)) {
                                let e = new T.eth.Contract(ae, S.contractAddress.WITHDRAW_MANAGER_PROXY),
                                    t = await e.methods.processExits(null === r || void 0 === r ? void 0 : r.parentContract).estimateGas({
                                        from: ce && ce.wallet
                                    });
                                _(E.utils.toBN(t).mul(E.utils.toBN(s)) / Math.pow(10, 18)), console.log("GAS", t), console.log("ESTIMATED GAS FEE", E.utils.toBN(t).mul(E.utils.toBN(s)) / Math.pow(10, 18)), L(!1)
                            }
                            L(!1)
                        } else A(0), L(!1)
                };
                return (0, n.useEffect)((() => {
                    if (console.log("PAGE", t), "tx" == t) {
                        var e;
                        let t, s;
                        console.log("DATA", D), "plasma" == (null === D || void 0 === D || null === (e = D.token) || void 0 === e ? void 0 : e.bridgetype) ? (t = null !== D && void 0 !== D && D.processExit ? "Completed" : null !== D && void 0 !== D && D.challengePeriod ? "Challenge Period" : "Checkpoint", s = ["Initialized", "Checkpoint", "Challenge Period", "Completed"]) : (t = null !== D && void 0 !== D && D.processExit ? "Completed" : "Checkpoint", s = ["Initialized", "Checkpoint", "Completed"]), H(t), s.splice(s.indexOf(t), s.length - 1 - s.indexOf(t) + 1), B(s), "Checkpoint" == t ? (null !== D && void 0 !== D && D.checkpointSigned && (console.log("entered checkpoint"), B((e => [...e, "Checkpoint"])), F(O(O({}, D), {}, {
                            checkpointSigned: !0
                        })), X(!0)), null != D.withdrawHash && H("Challenge Period")) : "Challenge Period" == t ? (B((e => [...e, "Challenge Period"])), $(!0)) : "Completed" == t && (V(!0), B((e => [...e, "Completed"])))
                    } else F({})
                }), []), console.log({
                    processing: G
                }), (0, b.jsx)(l.default, {
                    title: oe.title,
                    show: y,
                    setshow: () => {
                        s(!1), "tx" != t && k.method()
                    },
                    externalCls: "dark-modal-100 bridge-ht2",
                    children: (0, b.jsx)(b.Fragment, {
                        children: "bridge" == t ? (0, b.jsxs)(b.Fragment, {
                            children: [oe.step0 && (0, b.jsx)(f.default, {
                                setWidModState: ne,
                                withModalState: oe,
                                estGasFee: de
                            }), oe.step1 && (0, b.jsx)(g.default, {
                                withModalState: oe,
                                setWidModState: ne,
                                estGasFee: de,
                                loader: I,
                                selectedToken: r,
                                allowance: Z,
                                estGas: R,
                                setError: ee,
                                setButtonLoader: Q
                            }), oe.step2 && (0, b.jsx)(v.default, {
                                withModalState: oe,
                                setWidModState: ne,
                                estGasFee: de,
                                selectedToken: r,
                                allowance: Z,
                                estGas: R,
                                withdrawTokenInput: i,
                                usdValue: ie,
                                buttonloader: q,
                                error: J,
                                setButtonLoader: Q,
                                setError: ee,
                                setHashLink: W,
                                setAllowance: A,
                                setStep: H,
                                setWithdrawModalOpen: s,
                                setProcessing: B,
                                decimalformat: se,
                                setTxState: F
                            }), oe.step3 && (0, b.jsx)(b.Fragment, {
                                children: (0, b.jsx)(p.default, {
                                    challengePeriodCompleted: Y,
                                    checkpointSigned: U,
                                    hashLink: M,
                                    processing: G,
                                    selectedToken: r,
                                    setProcessing: B,
                                    setStep: H,
                                    step: z,
                                    withdrawTokenInput: i,
                                    page: t
                                })
                            })]
                        }) : (0, b.jsx)(b.Fragment, {
                            children: (0, b.jsx)(p.default, {
                                challengePeriodCompleted: Y,
                                checkpointSigned: U,
                                hashLink: M,
                                processing: G,
                                selectedToken: r,
                                setProcessing: B,
                                setStep: H,
                                step: z,
                                withdrawTokenInput: i,
                                setChallengePeriodCompleted: $,
                                setHashLink: W,
                                completed: K,
                                setCompleted: V,
                                page: t
                            })
                        })
                    })
                })
            }
        },
        46445: function(e, t, s) {
            var r = s(67294),
                o = s(45697),
                n = s.n(o);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var s, r, o = function(e, t) {
                    if (null == e) return {};
                    var s, r, o = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) s = n[r], t.indexOf(s) >= 0 || (o[s] = e[s]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) s = n[r], t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s])
                }
                return o
            }
            var i = (0, r.forwardRef)((function(e, t) {
                var s = e.color,
                    o = void 0 === s ? "currentColor" : s,
                    n = e.size,
                    i = void 0 === n ? 24 : n,
                    c = l(e, ["color", "size"]);
                return r.createElement("svg", a({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("polyline", {
                    points: "20 6 9 17 4 12"
                }))
            }));
            i.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, i.displayName = "Check", t.Z = i
        },
        78268: function(e, t, s) {
            var r = s(67294),
                o = s(45697),
                n = s.n(o);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var s, r, o = function(e, t) {
                    if (null == e) return {};
                    var s, r, o = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) s = n[r], t.indexOf(s) >= 0 || (o[s] = e[s]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) s = n[r], t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s])
                }
                return o
            }
            var i = (0, r.forwardRef)((function(e, t) {
                var s = e.color,
                    o = void 0 === s ? "currentColor" : s,
                    n = e.size,
                    i = void 0 === n ? 24 : n,
                    c = l(e, ["color", "size"]);
                return r.createElement("svg", a({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), r.createElement("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }))
            }));
            i.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, i.displayName = "X", t.Z = i
        }
    }
]);