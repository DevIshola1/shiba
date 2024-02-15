(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1489], {
        16390: function(e, t, s) {
            "use strict";
            var a = s(93189),
                n = s(5121);
            t.Z = () => (0, a.a)({
                queryKey: ["eth_usd"],
                queryFn: () => n.Z.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((e => e.data.ethereum.usd))
            }).data
        },
        19293: function(e, t, s) {
            "use strict";
            s.r(t);
            s(67294);
            var a = s(85893);
            t.default = () => (0, a.jsx)("div", {
                className: "text-center box-block",
                children: (0, a.jsx)("div", {
                    className: "d-inline-block right-arrow",
                    children: (0, a.jsx)("div", {
                        className: "scrolldown-container",
                        children: (0, a.jsx)("div", {
                            className: "scrolldown-btn",
                            children: (0, a.jsxs)("svg", {
                                version: "1.1",
                                id: "\u0421\u043b\u043e\u0439_1",
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                x: "0px",
                                y: "0px",
                                width: "50px",
                                height: "80px",
                                viewBox: "0 0 50 80",
                                enableBackground: "new 0 0 50 80",
                                xmlSpace: "preserve",
                                children: [(0, a.jsx)("path", {
                                    className: "first-path",
                                    fill: "#FFFFFF",
                                    d: "M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057                  s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119                  l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305                  c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z"
                                }), (0, a.jsx)("path", {
                                    className: "second-path",
                                    fill: "#FFFFFF",
                                    d: "M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057                  c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12                  l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305                  c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z"
                                })]
                            })
                        })
                    })
                })
            })
        },
        23942: function(e, t, s) {
            "use strict";
            s.r(t);
            s(67294);
            var a = s(57333),
                n = s(73640),
                i = s(85893);
            t.default = e => {
                let {
                    depositTokenInput: t,
                    selectedToken: s,
                    usdValue: r
                } = e;
                return (0, i.jsx)("div", {
                    className: "mt-0 cnfrm_box dark-bg",
                    children: (0, i.jsxs)("div", {
                        className: "top_overview col-12",
                        children: [(0, i.jsx)("span", {
                            children: (0, i.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/etharium.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("h6", {
                            children: t + " " + s.parentName
                        }), (0, i.jsx)("p", {
                            children: (0, i.jsx)(a.Z, {
                                thousandSeparator: !0,
                                displayType: "text",
                                prefix: "$ ",
                                value: ((+t || 0) * r).toFixed(n.i5)
                            })
                        })]
                    })
                })
            }
        },
        91489: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(59499),
                n = s(25762),
                i = s(66721),
                r = s(80857),
                c = s(16390),
                o = s(36375),
                l = (s(67294), s(57333)),
                d = s(97552),
                h = s(15254),
                p = s(76704),
                m = s(37150),
                u = s(93085),
                x = s(79684),
                w = s(25617),
                f = s(7678),
                b = s(18722),
                v = s(22406),
                g = s(37918),
                j = s.n(g),
                k = s(23942),
                N = s(19293),
                y = s(47933),
                C = s(85893);

            function T(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : T(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            const O = {
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
                    withModalState: t,
                    setWidModState: s,
                    estGasFee: a,
                    selectedToken: g,
                    allowance: T,
                    estGas: P,
                    withdrawTokenInput: I,
                    usdValue: F,
                    buttonloader: S,
                    error: E,
                    setButtonLoader: H,
                    setError: _,
                    setHashLink: A,
                    setAllowance: D,
                    setStep: Z,
                    setWithdrawModalOpen: M,
                    setProcessing: W,
                    decimalformat: z,
                    setTxState: R
                } = e;
                const {
                    chainId: B = 1,
                    library: $
                } = (0, o.aQ)(), {
                    user: V
                } = (0, y.bN)(), q = (0, r.Z)(), G = null === $ || void 0 === $ ? void 0 : $.provider, U = new(j())(G), X = (0, p.S)("abis/pos/ERC20.json"), Y = (0, p.S)("abis/plasma/MRC20.json"), K = (0, p.S)("abis/plasma/ChildERC20.json"), Q = (0, c.Z)(), {
                    getTransactionsCount: J
                } = (0, b.Z)(), ee = (0, h.Z)(), te = (0, w.I0)(), se = (0, v.q)(), ae = (0, x.B9)(), ne = e => {
                    e.currentTarget.src = B == q.L1Chain ? "../../assets/images/eth_logo.png" : "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-3"
                }, ie = async () => {
                    if (V.wallet) {
                        H(!0);
                        let e = !1;
                        B !== q.L1Chain && B !== q.L2Chain ? (await ee(q.L2Chain), H(!1)) : B === q.L1Chain ? (0 != +T && (await (async () => {
                            try {
                                if (V.wallet) {
                                    let e = new U.eth.Contract(X, null === g || void 0 === g ? void 0 : g.parentContract);
                                    const a = (0, m.getToWeiUnitFromDecimal)(z);
                                    let n = se(I, a);
                                    await e.methods.approve(q.contractAddress.WITHDRAW_MANAGER_PROXY, n).send({
                                        from: V.wallet
                                    }).on("transactionHash", (e => {
                                        te((0, u.dT)({
                                            hash: e,
                                            from: V.wallet,
                                            chainId: B,
                                            summary: `${e}`
                                        }));
                                        let t = ae(B, e, "transaction");
                                        A(t), _(null)
                                    })).on("receipt", (async e => {
                                        te((0, u.Aw)({
                                            hash: e.transactionHash,
                                            chainId: B,
                                            receipt: {
                                                to: e.to,
                                                from: e.from,
                                                contractAddress: e.contractAddress,
                                                transactionIndex: e.transactionIndex,
                                                blockHash: e.blockHash,
                                                transactionHash: e.transactionHash,
                                                blockNumber: e.blockNumber,
                                                status: 1
                                            }
                                        })), D(0), H(!1), await ee(q.L2Chain)
                                    })).on("error", (e => {
                                        4001 == e.code ? (_(`You need to give approval on ${q.Layer1}.`), s(L(L({}, t), {}, {
                                            step2: !0,
                                            step3: !1,
                                            title: "Transfer Overview"
                                        }))) : M(!1), H(!1)
                                    }))
                                }
                            } catch (e) {
                                d.uT("approvewithdraw ", e), s(L(L({}, t), {}, {
                                    step2: !0,
                                    step3: !1,
                                    title: "Transfer Overview"
                                }))
                            }
                        })(), e = !0), null !== E || e || await ee(q.L2Chain), H(!1)) : B === q.L2Chain && (null === E && 0 == T ? (s(L(L({}, t), {}, {
                            step2: !1,
                            step3: !0,
                            title: "Transaction Pending"
                        })), Z("Initialized"), re()) : (await ee(q.L1Chain), H(!1)))
                    }
                }, re = async () => {
                    try {
                        if (null === E) {
                            A(""), H(!1);
                            let e = V && V.wallet;
                            console.log({
                                decimalformat: z
                            });
                            let t, a, n, i = (0, m.getToWeiUnitFromDecimal)(z),
                                r = se(I, i);
                            (null === g || void 0 === g ? void 0 : g.parentName) === q.BONE_ID ? (t = Y, a = {
                                from: e,
                                gas: 1e5,
                                value: r
                            }) : (t = K, a = {
                                from: e
                            });
                            const c = new U.eth.Contract(t, null === g || void 0 === g ? void 0 : g.childContract);
                            await c.methods.withdraw(r).send(a).on("transactionHash", (async t => {
                                te((0, u.dT)({
                                    hash: t,
                                    from: e,
                                    chainId: B,
                                    summary: `${t}`
                                }));
                                let s = ae(q.L1Chain, t, "transaction");
                                A(s), n = t;
                                let a = {
                                    transactionType: 2,
                                    bridgeType: g.bridgetype,
                                    stepPoint: "",
                                    from: e,
                                    to: g && g.childContract,
                                    amount: +I,
                                    usdValue: +I * F,
                                    txHash: t,
                                    status: 0,
                                    walletAddress: V.wallet,
                                    token: g,
                                    fromChain: q.L2Chain,
                                    toChain: q.L1Chain,
                                    checkpointSigned: !1,
                                    challengePeriod: !1,
                                    processExit: !1,
                                    txData: "",
                                    checkChallengePeriodStatus: !1,
                                    checkProcessExitStatus: !1
                                };
                                await (0, f.default)(a, q.StakingAPI)
                            })).on("receipt", (async e => {
                                te((0, u.Aw)({
                                    hash: e.transactionHash,
                                    chainId: B,
                                    receipt: {
                                        to: e.to,
                                        from: e.from,
                                        contractAddress: e.contractAddress,
                                        transactionIndex: e.transactionIndex,
                                        blockHash: e.blockHash,
                                        transactionHash: e.transactionHash,
                                        blockNumber: e.blockNumber,
                                        status: 1
                                    }
                                })), J(), W((e => [...e, "Initialized"])), Z("Checkpoint"), R({
                                    checkpointSigned: !1,
                                    challengePeriod: !1,
                                    processExit: !1,
                                    amount: I,
                                    token: g,
                                    txHash: e
                                });
                                let t = {
                                    stepPoint: "plasma" == g.bridgetype ? "2 steps" : "1 step",
                                    to: e.to,
                                    txHash: e.transactionHash,
                                    txData: e.events
                                };
                                await (0, f.putTransactions)(t, q.StakingAPI)
                            })).on("error", (async e => {
                                if (4001 === e.code && (M(!1), s(O), Z("Initialized"), W([])), 4001 != e.code) {
                                    let e = {
                                        stepPoint: "Failed",
                                        status: -1,
                                        txHash: n
                                    };
                                    await (0, f.putTransactions)(e, q.StakingAPI)
                                }
                                console.log("error ", e)
                            }))
                        }
                    } catch (e) {
                        d.uT("submitWithdraw ", e), M(!1), s(O), Z("Initialized"), W([]), console.log({
                            err: e
                        })
                    }
                };
                return (0, C.jsxs)("div", {
                    className: "popmodal-body no-ht",
                    children: [(0, C.jsx)("div", {
                        className: "backDepState",
                        onClick: () => {
                            s(L(L({}, t), {}, {
                                step1: !0,
                                step2: !1,
                                title: "Transfer Overview"
                            })), a()
                        },
                        children: (0, C.jsx)(n.Z, {})
                    }), (0, C.jsxs)("div", {
                        className: "pop-block withdraw_pop",
                        children: [(0, C.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, C.jsx)(k.default, {
                                depositTokenInput: I,
                                selectedToken: g,
                                usdValue: F
                            }), (0, C.jsxs)("div", {
                                className: "pop-grid",
                                children: [(0, C.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, C.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, C.jsx)("img", {
                                            className: "img-fluid",
                                            src: i.wP[q.L2Chain],
                                            onError: ne,
                                            alt: ""
                                        })
                                    }), (0, C.jsx)("p", {
                                        children: q.Layer2
                                    })]
                                }), (0, C.jsx)(N.default, {}), (0, C.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, C.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, C.jsx)("img", {
                                            className: "img-fluid",
                                            width: "50",
                                            src: "../../assets/images/eth_logo.png",
                                            onError: ne,
                                            alt: ""
                                        })
                                    }), (0, C.jsx)("p", {
                                        children: q.Layer1
                                    })]
                                })]
                            }), (0, C.jsx)("hr", {}), (0, C.jsxs)("div", {
                                className: "position-relative d-flex justify-content-between align-items-center",
                                children: [(0, C.jsx)("div", {
                                    className: "coin-blk",
                                    children: (0, C.jsx)("p", {
                                        className: "fs-6 ff-mos",
                                        children: "Estimated Time"
                                    })
                                }), (0, C.jsx)("div", {
                                    children: (0, C.jsx)("p", {
                                        className: "fw-bold",
                                        children: "Est. 3 hours"
                                    })
                                })]
                            }), (0, C.jsx)("hr", {}), (0, C.jsxs)("div", {
                                className: "position-relative d-flex justify-content-between align-items-center",
                                children: [(0, C.jsx)("div", {
                                    className: "coin-blk",
                                    children: (0, C.jsx)("p", {
                                        className: "fs-6 ff-mos",
                                        children: "Estimated fee"
                                    })
                                }), (0, C.jsx)("div", {
                                    children: (0, C.jsx)("p", {
                                        className: "fw-bold",
                                        children: (0, C.jsx)(l.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            prefix: "$",
                                            value: ((T > 0 ? +P + +T : +P) * Q).toFixed(8)
                                        })
                                    })
                                })]
                            })]
                        }), (0, C.jsxs)("div", {
                            className: "pop-bottom",
                            children: [E ? (0, C.jsx)("small", {
                                className: "errorMsg",
                                children: E
                            }) : "", (0, C.jsx)("div", {
                                children: (0, C.jsxs)("a", {
                                    className: ` d-flex align-items-center justify-content-center btn primary-btn w-100 relative ${S&&"disabled btn-disabled"}`,
                                    onClick: () => {
                                        ie()
                                    },
                                    children: [S && (0, C.jsx)("span", {
                                        className: "spinner-border text-secondary pop-spiner fix_spinner"
                                    }), (0, C.jsx)("span", {
                                        children: "Continue"
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        37150: function(e) {
            e.exports = {
                sleep: e => new Promise((t => setTimeout(t, e))),
                getToWeiUnitFromDecimal: e => {
                    switch (e) {
                        case 18:
                        case "18":
                            return "ether";
                        case 15:
                        case "15":
                            return "milli";
                        case 12:
                        case "12":
                            return "micro";
                        case 9:
                        case "9":
                            return "gwei";
                        case 6:
                        case "6":
                            return "mwei";
                        case 3:
                        case "3":
                            return "kwei";
                        default:
                            return "wei"
                    }
                }
            }
        },
        25762: function(e, t, s) {
            "use strict";
            var a = s(67294);
            const n = a.forwardRef((function(e, t) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                }))
            }));
            t.Z = n
        }
    }
]);