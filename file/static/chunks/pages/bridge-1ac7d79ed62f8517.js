(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7869], {
        48958: function(e, s, a) {
            "use strict";
            a.d(s, {
                y: function() {
                    return o
                }
            });
            var i = a(67294),
                l = a(46553),
                n = a(36375),
                t = a(73640),
                r = a(85893);
            const c = {
                    supportedChains: t.df
                },
                d = (0, i.createContext)(c),
                o = e => {
                    let {
                        pageSupportedChains: s,
                        children: a
                    } = e;
                    const {
                        chainId: c = 1
                    } = (0, n.aQ)(), {
                        0: o,
                        1: m
                    } = (0, i.useState)(!1), {
                        0: h,
                        1: u
                    } = (0, i.useState)(!1), {
                        0: x,
                        1: p
                    } = (0, i.useState)(t.df);
                    return (0, i.useEffect)((() => {
                        (null === s || void 0 === s ? void 0 : s.length) > 0 ? p(s) : p(t.df), u(!x.includes(c))
                    }), [s]), (0, r.jsxs)(d.Provider, {
                        value: {
                            supportedChains: x
                        },
                        children: [(0, r.jsx)(l.default, {
                            title: "Switch to Ethereum Mainnet",
                            show: h,
                            setshow: () => {
                                u(!0)
                            },
                            externalCls: "faucet-pop no-lft chain_warning"
                        }), (0, r.jsx)("header", {
                            className: scroll ? "main-header header-overide sticky-header" : "main-header header-overide"
                        }), a]
                    })
                }
        },
        73639: function(e, s, a) {
            "use strict";
            var i = a(80857),
                l = a(73640),
                n = a(76704),
                t = a(47933);
            s.Z = () => {
                const e = (0, i.Z)(),
                    s = e.PUPPYNET517(),
                    a = e.L1Block(),
                    r = (0, n.S)("abis/pos/ERC20.json"),
                    {
                        user: c
                    } = (0, t.bN)();
                return async (e, i) => {
                    let n, t, d;
                    if ("deposit" === e) n = (null === i || void 0 === i ? void 0 : i.childContract) || (null === i || void 0 === i ? void 0 : i.address), d = new s.eth.Contract(r, n);
                    else {
                        if ("Ether" == i.parentName) return t = await a.eth.getBalance(c.wallet), t = +(+t / Math.pow(10, 18)).toFixed(l.i5), t;
                        n = (null === i || void 0 === i ? void 0 : i.parentContract) || (null === i || void 0 === i ? void 0 : i.address), d = new a.eth.Contract(r, n)
                    }
                    return await d && d.methods && d.methods.balanceOf(c.wallet) && d.methods.balanceOf(c.wallet).call().then((async e => await d.methods.decimals().call().then((s => (t = +(+e / Math.pow(10, s)).toFixed(l.i5), t))))).catch((e => {
                        console.log("ERROR -> ", e)
                    }))
                }
            }
        },
        32766: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return u
                }
            });
            var i = a(67294),
                l = a(98034),
                n = a(55678),
                t = (a(27967), a(6520)),
                r = a(1026),
                c = a(80857),
                d = a(52056),
                o = a(48958),
                m = a(54331),
                h = a(85893);

            function u() {
                const {
                    0: e,
                    1: s
                } = (0, i.useState)(!1), a = (0, c.Z)(), {
                    0: u,
                    1: x
                } = (0, i.useState)(!0), p = (0, i.useCallback)((() => s(!1)), []);
                return (0, h.jsxs)(o.y, {
                    pageSupportedChains: [m.ChainId.ETHEREUM, m.ChainId.SEPOLIA, m.ChainId.PUPPYNET157, m.ChainId.SHIBARIUM],
                    children: [(0, h.jsx)(d.default, {}), (0, h.jsx)(n.Ix, {}), (0, h.jsxs)("main", {
                        className: "main-content mt-20",
                        children: [(0, h.jsx)(l.default, {
                            handleMenuState: () => {
                                s(!e)
                            },
                            onClickOutside: p,
                            menuState: e
                        }), (0, h.jsx)("section", {
                            className: "assets-section",
                            children: (0, h.jsx)("div", {
                                className: "cmn_dashbord_main_outr",
                                children: (0, h.jsxs)("div", {
                                    className: "box-wrap",
                                    children: [(0, h.jsx)("div", {
                                        className: "left-box",
                                        children: (0, h.jsxs)("div", {
                                            className: "block-card",
                                            children: [(0, h.jsxs)("div", {
                                                className: "box-top",
                                                children: [(0, h.jsx)("h3", {
                                                    className: "mb-3",
                                                    children: "Shibarium Bridge"
                                                }), u ? (0, h.jsxs)("div", {
                                                    className: "txt-row",
                                                    children: [(0, h.jsx)("div", {
                                                        className: "row-hd",
                                                        children: "Transfer Overview:"
                                                    }), (0, h.jsx)("p", {
                                                        className: "row-description",
                                                        children: "The deposit process consists of a single transaction."
                                                    })]
                                                }) : (0, h.jsxs)("div", {
                                                    className: "txt-row",
                                                    children: [(0, h.jsx)("div", {
                                                        className: "row-hd",
                                                        children: "Withdraw Overview:"
                                                    }), (0, h.jsx)("p", {
                                                        className: "row-description",
                                                        children: "The Withdraw process consists of three transactions."
                                                    })]
                                                }), u ? (0, h.jsxs)("div", {
                                                    className: "txt-row",
                                                    children: [(0, h.jsx)("div", {
                                                        className: "row-hd",
                                                        children: "Transfer Time:"
                                                    }), (0, h.jsxs)("p", {
                                                        className: "row-description",
                                                        children: ["Moving your funds from ", a.Layer1, " to", " ", a.Layer2, " take up to 20 - 30 Minutes."]
                                                    })]
                                                }) : (0, h.jsxs)("div", {
                                                    className: "txt-row",
                                                    children: [(0, h.jsx)("div", {
                                                        className: "row-hd",
                                                        children: "Withdraw Time:"
                                                    }), (0, h.jsxs)("p", {
                                                        className: "row-description",
                                                        children: ["Moving your funds from ", a.Layer2, " to", " ", a.Layer1, " take up to 60 mins to 3 hours."]
                                                    })]
                                                }), (0, h.jsxs)("div", {
                                                    className: "txt-row " + (u ? "visVisible" : "visInvisible"),
                                                    children: [(0, h.jsxs)("div", {
                                                        className: "row-hd",
                                                        children: [(0, h.jsx)("span", {
                                                            className: "icon-image",
                                                            children: (0, h.jsx)("img", {
                                                                className: "img-fluid",
                                                                src: "../../assets/images/i-info-icon.png",
                                                                alt: "",
                                                                onError: e => {
                                                                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-3"
                                                                }
                                                            })
                                                        }), (0, h.jsx)("span", {
                                                            className: "alignment",
                                                            children: "Delegation/Staking Advice:"
                                                        })]
                                                    }), (0, h.jsxs)("p", {
                                                        className: "row-description",
                                                        children: ["Delegation/Staking takes place on ", a.Layer1, ". Do not deposit funds to ", a.Layer2, " for this purpose.", " "]
                                                    })]
                                                })]
                                            }), (0, h.jsx)("div", {
                                                className: "blank-box"
                                            })]
                                        })
                                    }), (0, h.jsx)("div", {
                                        className: "right-box",
                                        children: (0, h.jsxs)("div", {
                                            className: "block-card d-flex flex-column justify-content-between bridge_form_sec",
                                            children: [(0, h.jsx)("div", {
                                                className: "tab-sec botom-spcing",
                                                children: (0, h.jsxs)("ul", {
                                                    className: "tab-links",
                                                    children: [(0, h.jsx)("li", {
                                                        children: (0, h.jsx)("a", {
                                                            className: `tb-link ${u&&"tab-active"}`,
                                                            onClick: () => x(!0),
                                                            children: "Deposit"
                                                        })
                                                    }), (0, h.jsx)("li", {
                                                        children: (0, h.jsx)("a", {
                                                            className: `tb-link ${!u&&"tab-active"}`,
                                                            onClick: () => x(!1),
                                                            children: "Withdraw"
                                                        })
                                                    })]
                                                })
                                            }), u && (0, h.jsx)(r.default, {}), !u && (0, h.jsx)(t.default, {})]
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        1026: function(e, s, a) {
            "use strict";
            a.r(s);
            var i = a(59499),
                l = a(59433),
                n = a(67294),
                t = a(16080),
                r = a(80857),
                c = a(36375),
                d = a(81229),
                o = a(74231),
                m = a(15254),
                h = a(16981),
                u = a(73639),
                x = a(54331),
                p = a(47933),
                v = a(85893);

            function j(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function g(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? j(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            s.default = () => {
                const e = (0, r.Z)(),
                    {
                        chainId: s = 1
                    } = (0, c.aQ)(),
                    {
                        user: a
                    } = (0, p.bN)(),
                    {
                        0: i,
                        1: j
                    } = (0, n.useState)(JSON.parse(localStorage.getItem("depositToken") ? ? "{}"));
                let b = (0, m.Z)();
                const {
                    0: N,
                    1: f
                } = (0, n.useState)(!1), {
                    0: w,
                    1: y
                } = (0, n.useState)(""), {
                    0: k,
                    1: S
                } = (0, n.useState)(!1), C = (0, u.Z)(), {
                    0: O,
                    1: E
                } = (0, n.useState)(""), {
                    0: B,
                    1: T
                } = (0, n.useState)(), {
                    0: _,
                    1: I
                } = (0, n.useState)({
                    l1Balance: 0,
                    l2Balance: 0
                }), {
                    0: P,
                    1: L
                } = (0, n.useState)({
                    method: void 0
                }), M = o.Ry({
                    fromChain: o.Rx().required("Required Field"),
                    toChain: o.Rx().required("Required Field"),
                    amount: o.Rx().typeError("Only digits are allowed.").min(.001, "Invalid Amount.").max(_.l1Balance, "Insufficient Balance").required("Amount is required.")
                });
                (0, n.useEffect)((() => {
                    Object.keys(i).length && (S(!0), A())
                }), [i]);
                const A = async () => {
                        let e = await C(B, i);
                        console.log("BAL", e), I(g(g({}, _), {}, {
                            l1Balance: null === i || void 0 === i ? void 0 : i.balance,
                            l2Balance: e
                        })), "withdraw" == B && I(g(g({}, _), {}, {
                            l1Balance: e,
                            l2Balance: null === i || void 0 === i ? void 0 : i.balance
                        })), S(!1), T(void 0)
                    },
                    R = a => {
                        a.currentTarget.src = s == e.L1Chain ? "../../assets/images/eth_logo.png" : "../../assets/images/shib-borderd-icon.png", a.currentTarget.className = "error me-3"
                    };
                return (0, v.jsxs)(v.Fragment, {
                    children: [N ? (0, v.jsx)(d.default, {
                        depositTokenInput: w,
                        showDepositModal: N,
                        setDepositModal: f,
                        selectedToken: i,
                        hashLink: O,
                        setHashLink: E,
                        reset: P
                    }) : null, B ? (0, v.jsx)(t.default, {
                        bridge: B,
                        setSelectedToken: j,
                        setOpenManageToken: T,
                        setLoader: S
                    }, B) : null, (0, v.jsx)("div", {
                        className: "tab-content-sec h-100",
                        children: (0, v.jsx)(l.J9, {
                            initialValues: {
                                amount: "",
                                fromChain: e.L1Chain,
                                toChain: e.L2Chain
                            },
                            validationSchema: M,
                            onSubmit: (a, i) => {
                                let {
                                    resetForm: l
                                } = i;
                                ((a, i) => {
                                    s == e.L1Chain ? (y(a.amount), f(!0), L(g(g({}, P), {}, {
                                        method: i
                                    }))) : b(e.L1Chain)
                                })(a, l)
                            },
                            children: l => {
                                let {
                                    errors: n,
                                    touched: t,
                                    handleChange: r,
                                    handleBlur: c,
                                    values: d,
                                    handleSubmit: o,
                                    setFieldValue: m,
                                    resetForm: u
                                } = l;
                                return (0, v.jsx)("div", {
                                    className: "h-100",
                                    children: (0, v.jsxs)("div", {
                                        className: "sec-wrapper",
                                        children: [(0, v.jsxs)("div", {
                                            className: "wrap-top",
                                            children: [(0, v.jsxs)("div", {
                                                className: "botom-spcing",
                                                children: [(0, v.jsxs)("div", {
                                                    children: [(0, v.jsx)("label", {
                                                        className: "mb-2 mb-xxl-3 mb-md-2",
                                                        children: "From"
                                                    }), (0, v.jsxs)("div", {
                                                        className: "form-field position-relative txt-fix",
                                                        children: [(0, v.jsx)("div", {
                                                            className: "icon-chain",
                                                            children: (0, v.jsx)("div", {
                                                                className: "network_Icon_Wrapper",
                                                                children: (0, v.jsx)("img", {
                                                                    className: "img-fluid w-100",
                                                                    src: "../../assets/images/eth_logo.png",
                                                                    alt: "eth logo",
                                                                    onError: R
                                                                })
                                                            })
                                                        }), (0, v.jsx)("div", {
                                                            className: "mid-chain",
                                                            children: (0, v.jsx)("input", {
                                                                className: "w-100",
                                                                type: "text",
                                                                value: e.Layer1,
                                                                disabled: !0
                                                            })
                                                        }), (0, v.jsxs)("div", {
                                                            className: "rt-chain d-flex align-items-center",
                                                            children: [(0, v.jsx)("span", {
                                                                className: "fld-head lite-800",
                                                                children: "Balance:"
                                                            }), k ? (0, v.jsx)(h.Z, {
                                                                stroke: "orange"
                                                            }) : (0, v.jsxs)("span", {
                                                                className: "fld-txt lite-800 wrap_txt",
                                                                children: [Math.trunc(100 * Number(_.l1Balance)) / 100, " ", (null === i || void 0 === i ? void 0 : i.key) || (null === i || void 0 === i ? void 0 : i.symbol)]
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, v.jsxs)("div", {
                                                    className: "field-grid row",
                                                    children: [(0, v.jsx)("div", {
                                                        className: "mb-3 col-lg-6 col-xxl-5 col-sm-12 mb-sm-3 mb-lg-0 res-align",
                                                        children: (0, v.jsxs)("div", {
                                                            className: "form-field position-relative fix-coin-field " + (a && a.wallet ? "" : "disabled"),
                                                            onClick: () => {
                                                                if (s == x.ChainId.SEPOLIA || s == x.ChainId.ETHEREUM) T("deposit"), j({}), I(g(g({}, _), {}, {
                                                                    l1Balance: 0,
                                                                    l2Balance: 0
                                                                })), u();
                                                                else {
                                                                    const e = s == x.ChainId.SHIBARIUM ? x.ChainId.ETHEREUM : x.ChainId.SEPOLIA;
                                                                    b(e)
                                                                }
                                                            },
                                                            children: [(0, v.jsx)("div", {
                                                                className: "right-spacing",
                                                                children: (0, v.jsx)("div", {
                                                                    children: (0, v.jsx)("img", {
                                                                        className: "img-fluid",
                                                                        width: 24,
                                                                        src: (null === i || void 0 === i ? void 0 : i.logo) || (null === i || void 0 === i ? void 0 : i.logoURI) || "../../assets/images/eth_logo.png",
                                                                        onError: R,
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }), (0, v.jsx)("div", {
                                                                className: "lite-800 w-100",
                                                                children: (0, v.jsx)("span", {
                                                                    className: "lite-800 fw-bold wrap_selected_token",
                                                                    children: null !== i && void 0 !== i && i.parentName ? null === i || void 0 === i ? void 0 : i.parentName : "Select Token"
                                                                })
                                                            }), (0, v.jsx)("div", {
                                                                className: "lft-spc",
                                                                children: (0, v.jsx)("div", {
                                                                    className: "arow-outer",
                                                                    children: (0, v.jsx)("span", {
                                                                        className: "arrow-down"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), (0, v.jsxs)("div", {
                                                        className: "col-lg-6 col-xxl-7 col-sm-12 field-col",
                                                        children: [(0, v.jsxs)("div", {
                                                            className: "form-field position-relative two-fld",
                                                            children: [(0, v.jsx)("div", {
                                                                className: `mid-chain w-100 ${void 0==(null===i||void 0===i?void 0:i.type)&&"disabled"}`,
                                                                children: (0, v.jsx)("input", {
                                                                    className: `w-100 ${void 0==(null===i||void 0===i?void 0:i.type)&&"disabled"}`,
                                                                    type: "number",
                                                                    placeholder: "0.00",
                                                                    name: "amount",
                                                                    disabled: void 0 == (null === i || void 0 === i ? void 0 : i.type),
                                                                    value: d.amount,
                                                                    onChange: r("amount")
                                                                })
                                                            }), (0, v.jsx)("div", {
                                                                className: "rt-chain",
                                                                onClick: e => {
                                                                    m("amount", Math.trunc(100 * Number(_.l1Balance)) / 100)
                                                                },
                                                                children: (0, v.jsx)("span", {
                                                                    className: "orange-txt fw-bold depositMax",
                                                                    children: "MAX"
                                                                })
                                                            })]
                                                        }), t.amount && n.amount ? (0, v.jsx)("p", {
                                                            className: "pt-0 pl-2 primary-text",
                                                            children: n.amount
                                                        }) : null]
                                                    })]
                                                })]
                                            }), (0, v.jsx)("div", {
                                                className: "botom-spcing",
                                                children: (0, v.jsxs)("div", {
                                                    children: [(0, v.jsxs)("label", {
                                                        className: "mb-2 mb-xxl-3 mb-md-2 wrapped-label",
                                                        children: ["To", null !== i && void 0 !== i && i.key && d.amount ? (0, v.jsxs)("span", {
                                                            className: "grey-txts",
                                                            children: ["You will receive ", d.amount, " ", i.key, " ", "on ", e.Layer2, "."]
                                                        }) : ""]
                                                    }), (0, v.jsxs)("div", {
                                                        className: "form-field position-relative txt-fix",
                                                        children: [(0, v.jsx)("div", {
                                                            className: "icon-chain",
                                                            children: (0, v.jsx)("div", {
                                                                className: "network_Icon_Wrapper",
                                                                children: (0, v.jsx)("img", {
                                                                    className: "img-fluid w-100",
                                                                    src: "../../assets/images/shib-borderd-icon.png",
                                                                    onError: R,
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, v.jsx)("div", {
                                                            className: "mid-chain",
                                                            children: (0, v.jsx)("input", {
                                                                className: "w-100",
                                                                type: "text",
                                                                disabled: !0,
                                                                placeholder: "Shibarium chain",
                                                                value: e.Layer2
                                                            })
                                                        }), (0, v.jsxs)("div", {
                                                            className: "rt-chain d-flex align-items-center",
                                                            children: [(0, v.jsx)("span", {
                                                                className: "fld-head lite-800",
                                                                children: "Balance:"
                                                            }), k ? (0, v.jsx)(h.Z, {
                                                                stroke: "orange"
                                                            }) : (0, v.jsxs)("span", {
                                                                className: "fld-txt lite-800 wrap_txt",
                                                                children: [_ && _.l2Balance && Math.trunc(100 * Number(_.l2Balance)) / 100 || 0, " ", (null === i || void 0 === i ? void 0 : i.key) || (null === i || void 0 === i ? void 0 : i.symbol)]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        }), (0, v.jsx)("div", {
                                            className: "wrap-bottom",
                                            children: (0, v.jsx)("div", {
                                                className: "btn-modify",
                                                children: (0, v.jsx)("button", {
                                                    onClick: () => {
                                                        o()
                                                    },
                                                    type: "button",
                                                    className: "btn primary-btn w-100",
                                                    children: "Transfer"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }
                        })
                    })]
                })
            }
        },
        6520: function(e, s, a) {
            "use strict";
            a.r(s);
            var i = a(59499),
                l = a(16981),
                n = a(80857),
                t = a(36375),
                r = a(59433),
                c = a(67294),
                d = a(74231),
                o = a(20687),
                m = a(16080),
                h = a(15254),
                u = a(73639),
                x = a(85893);

            function p(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function v(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? p(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            s.default = () => {
                const {
                    chainId: e = 1,
                    account: s
                } = (0, t.aQ)(), a = (0, n.Z)(), {
                    0: i,
                    1: p
                } = (0, c.useState)(!1), {
                    0: j,
                    1: g
                } = (0, c.useState)(!1), {
                    0: b,
                    1: N
                } = (0, c.useState)(""), {
                    0: f,
                    1: w
                } = (0, c.useState)({
                    method: void 0
                }), {
                    0: y,
                    1: k
                } = (0, c.useState)({
                    l1Balance: 0,
                    l2Balance: 0
                }), S = (0, h.Z)(), C = (0, u.Z)(), {
                    0: O,
                    1: E
                } = (0, c.useState)(), {
                    0: B,
                    1: T
                } = (0, c.useState)(JSON.parse(localStorage.getItem("depositToken") || "{}")), _ = d.Ry({
                    fromChain: d.Rx().required("Required Field"),
                    toChain: d.Rx(),
                    withdrawAmount: d.Rx().typeError("Only digits are allowed.").min(1e-4, "Invalid Amount.").max(y.l2Balance, "Insufficient Balance").required("Amount is required.")
                }), I = s => {
                    s.currentTarget.src = e == a.L1Chain ? "../../assets/images/eth_logo.png" : "../../assets/images/shib-borderd-icon.png", s.currentTarget.className = "error me-3"
                };
                (0, c.useEffect)((() => {
                    Object.keys(B).length && (p(!0), P())
                }), [B]);
                const P = async () => {
                    let e = await C(O, B);
                    p(!1), k(v(v({}, y), {}, {
                        l1Balance: (null === B || void 0 === B ? void 0 : B.balance) || 0,
                        l2Balance: e
                    })), "withdraw" == O && k(v(v({}, y), {}, {
                        l1Balance: e,
                        l2Balance: (null === B || void 0 === B ? void 0 : B.balance) || 0
                    })), E(void 0)
                };
                return (0, x.jsxs)(x.Fragment, {
                    children: [j ? (0, x.jsx)(o.default, {
                        page: "bridge",
                        show: j,
                        setWithdrawModalOpen: g,
                        selectedToken: B,
                        withdrawTokenInput: b,
                        reset: f
                    }) : null, O ? (0, x.jsx)(m.default, {
                        bridge: O,
                        setSelectedToken: T,
                        setOpenManageToken: E,
                        setLoader: p
                    }, O) : null, (0, x.jsx)(r.J9, {
                        validationSchema: _,
                        initialValues: {
                            withdrawAmount: "",
                            fromChain: a.L2Chain,
                            toChain: a.L1Chain
                        },
                        onSubmit: (e, s) => {
                            let {
                                resetForm: a
                            } = s;
                            ((e, s) => {
                                N(e.withdrawAmount), g(!0), w(v(v({}, f), {}, {
                                    method: s
                                }))
                            })(e, a)
                        },
                        children: n => {
                            let {
                                errors: t,
                                touched: r,
                                handleChange: c,
                                handleBlur: d,
                                values: o,
                                handleSubmit: m,
                                setFieldValue: h,
                                resetForm: u
                            } = n;
                            return (0, x.jsx)("div", {
                                className: "tab-content-sec h-100",
                                children: (0, x.jsx)("form", {
                                    className: "h-100",
                                    onSubmit: m,
                                    children: (0, x.jsxs)("div", {
                                        className: "sec-wrapper",
                                        children: [(0, x.jsxs)("div", {
                                            className: "wrap-top",
                                            children: [(0, x.jsxs)("div", {
                                                className: "botom-spcing",
                                                children: [(0, x.jsxs)("div", {
                                                    children: [(0, x.jsx)("label", {
                                                        className: "mb-2 mb-xxl-3 mb-md-2",
                                                        children: "From"
                                                    }), (0, x.jsxs)("div", {
                                                        className: "form-field position-relative txt-fix",
                                                        children: [(0, x.jsx)("div", {
                                                            className: "icon-chain",
                                                            children: (0, x.jsx)("div", {
                                                                className: "network_Icon_Wrapper",
                                                                children: (0, x.jsx)("img", {
                                                                    className: "img-fluid w-100",
                                                                    src: "../../assets/images/shib-borderd-icon.png",
                                                                    onError: I,
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, x.jsx)("div", {
                                                            className: "mid-chain",
                                                            children: (0, x.jsx)("input", {
                                                                className: "w-100",
                                                                type: "text",
                                                                value: a.Layer2,
                                                                disabled: !0
                                                            })
                                                        }), (0, x.jsxs)("div", {
                                                            className: "rt-chain d-flex align-items-center",
                                                            children: [(0, x.jsx)("span", {
                                                                className: "fld-head lite-800",
                                                                children: "Balance:"
                                                            }), i ? (0, x.jsx)(l.Z, {
                                                                stroke: "orange"
                                                            }) : (0, x.jsxs)("span", {
                                                                className: "fld-txt lite-800 wrap_txt",
                                                                children: [Math.trunc(100 * Number(y.l2Balance)) / 100, " ", (null === B || void 0 === B ? void 0 : B.key) ? ? (null === B || void 0 === B ? void 0 : B.symbol)]
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, x.jsxs)("div", {
                                                    className: "field-grid row",
                                                    children: [(0, x.jsx)("div", {
                                                        className: "mb-3 col-lg-6 col-xxl-5 col-sm-12 mb-sm-3 mb-lg-0 res-align",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-field position-relative fix-coin-field h-100  " + (s ? "" : "disabled"),
                                                            onClick: () => {
                                                                e == a.L2Chain ? (E("withdraw"), k(v(v({}, y), {}, {
                                                                    l1Balance: 0,
                                                                    l2Balance: 0
                                                                })), T({}), u()) : S(a.L2Chain)
                                                            },
                                                            children: [(0, x.jsx)("div", {
                                                                className: "right-spacing",
                                                                children: (0, x.jsx)("div", {
                                                                    children: (0, x.jsx)("img", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        className: "img-fluid",
                                                                        src: (null === B || void 0 === B ? void 0 : B.logo) ? ? (null === B || void 0 === B ? void 0 : B.logoURI) ? ? "../../assets/images/shiba-round-icon.png",
                                                                        onError: I,
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }), (0, x.jsx)("div", {
                                                                className: "lite-800 w-100",
                                                                children: (0, x.jsx)("span", {
                                                                    className: "lite-800 fw-bold  wrap_selected_token",
                                                                    children: null !== B && void 0 !== B && B.childName ? null === B || void 0 === B ? void 0 : B.childName : "Select Token"
                                                                })
                                                            }), (0, x.jsx)("div", {
                                                                className: "lft-spc",
                                                                children: (0, x.jsx)("div", {
                                                                    className: "arow-outer",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "arrow-down"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), (0, x.jsxs)("div", {
                                                        className: "col-lg-6 col-xxl-7 col-sm-12 field-col h-100",
                                                        children: [(0, x.jsxs)("div", {
                                                            className: "form-field position-relative two-fld",
                                                            children: [(0, x.jsx)("div", {
                                                                className: "mid-chain w-100",
                                                                children: (0, x.jsx)("input", {
                                                                    className: "w-100",
                                                                    type: "text",
                                                                    placeholder: "0.00",
                                                                    name: "withdrawAmount",
                                                                    disabled: void 0 == (null === B || void 0 === B ? void 0 : B.type),
                                                                    value: o.withdrawAmount,
                                                                    onChange: c("withdrawAmount")
                                                                })
                                                            }), (0, x.jsx)("div", {
                                                                className: "rt-chain",
                                                                onClick: e => h("withdrawAmount", y.l2Balance),
                                                                children: (0, x.jsx)("span", {
                                                                    className: "orange-txt fw-bold withdrawMax",
                                                                    children: "MAX"
                                                                })
                                                            })]
                                                        }), r.withdrawAmount && t.withdrawAmount ? (0, x.jsx)("p", {
                                                            className: "pt-0 pl-2 primary-text",
                                                            children: t.withdrawAmount
                                                        }) : null]
                                                    })]
                                                })]
                                            }), (0, x.jsx)("div", {
                                                className: "botom-spcing",
                                                children: (0, x.jsxs)("div", {
                                                    children: [(0, x.jsxs)("label", {
                                                        className: "mb-2 mb-xxl-3 mb-md-2 d-flex justify-content-between wrapped-label",
                                                        children: ["To", null !== B && void 0 !== B && B.key && o.withdrawAmount ? (0, x.jsxs)("span", {
                                                            className: "grey-txts",
                                                            children: ["You will receive ", o.withdrawAmount, " ", B.key, " on the ", a.Layer1, "."]
                                                        }) : ""]
                                                    }), (0, x.jsxs)("div", {
                                                        className: "form-field position-relative txt-fix",
                                                        children: [(0, x.jsx)("div", {
                                                            className: "icon-chain",
                                                            children: (0, x.jsx)("div", {
                                                                className: "network_Icon_Wrapper",
                                                                children: (0, x.jsx)("img", {
                                                                    className: "img-fluid w-100",
                                                                    src: "../../assets/images/eth_logo.png",
                                                                    alt: "",
                                                                    onError: I
                                                                })
                                                            })
                                                        }), (0, x.jsx)("div", {
                                                            className: "mid-chain",
                                                            children: (0, x.jsx)("input", {
                                                                className: "w-100",
                                                                type: "text",
                                                                value: a.Layer1,
                                                                disabled: !0
                                                            })
                                                        }), (0, x.jsxs)("div", {
                                                            className: "rt-chain d-flex align-items-center",
                                                            children: [(0, x.jsx)("span", {
                                                                className: "fld-head lite-800",
                                                                children: "Balance:"
                                                            }), i ? (0, x.jsx)(l.Z, {
                                                                stroke: "orange"
                                                            }) : (0, x.jsxs)("span", {
                                                                className: "fld-txt lite-800 wrap_txt",
                                                                children: [Math.trunc(100 * Number(y.l1Balance)) / 100, " ", (null === B || void 0 === B ? void 0 : B.key) || (null === B || void 0 === B ? void 0 : B.symbol)]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        }), (0, x.jsx)("div", {
                                            className: "wrap-bottom",
                                            children: (0, x.jsx)("div", {
                                                className: "btn-modify",
                                                children: (0, x.jsx)("button", {
                                                    onClick: () => m(),
                                                    type: "submit",
                                                    className: "btn primary-btn w-100",
                                                    children: "Transfer"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        }
                    })]
                })
            }
        },
        98034: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return x
                }
            });
            var i = a(41664),
                l = a.n(i),
                n = a(67294),
                t = a(23791),
                r = a(11163),
                c = a(36375),
                d = a(16981),
                o = a(18722),
                m = a(54331),
                h = a(47933),
                u = a(85893);

            function x(e) {
                let {
                    menuState: s,
                    handleMenuState: a,
                    onClickOutside: i
                } = e;
                const x = (0, n.useRef)(null),
                    p = (0, r.useRouter)(),
                    {
                        chainId: v = 1
                    } = (0, c.aQ)(),
                    {
                        user: j
                    } = (0, h.bN)(),
                    {
                        0: g,
                        1: b
                    } = (0, n.useState)(),
                    {
                        pendingTransactionCount: N,
                        getTransactionsCount: f
                    } = (0, o.Z)(),
                    w = e => {
                        x.current && !x.current.contains(e.target) && i()
                    },
                    y = [{
                        name: "Staking",
                        route: "/all-validator",
                        isSelected: "/all-validator" == p.asPath,
                        img: "../../assets/images/sidebar/transaction.png"
                    }, {
                        name: "Bridge",
                        route: "/bridge",
                        isSelected: "/bridge" == p.asPath,
                        img: "../../assets/images/sidebar/bridge.png"
                    }, {
                        name: "Transactions",
                        route: "/transactions",
                        isSelected: "/transactions" == p.asPath,
                        img: "../../assets/images/sidebar/bridge.png"
                    }];
                (0, n.useEffect)((() => (document.addEventListener("click", w, !0), () => {
                    document.removeEventListener("click", w, !0)
                })), []), (0, n.useEffect)((() => {
                    f()
                }), [j, v]);
                const k = y,
                    S = [v === m.ChainId.SEPOLIA || v == m.ChainId.PUPPYNET157 ? {
                        name: "Faucet",
                        route: "/faucet",
                        isSelected: !1,
                        img: "../../assets/images/sidebar/wallet.png"
                    } : void 0, {
                        name: "Support",
                        route: "https://docs.shibariumtech.com/shibarium",
                        isSelected: !1,
                        img: "../../assets/images/sidebar/wallet.png"
                    }],
                    C = (e, s) => {
                        "Support" != e.name ? p.push(e.route) : window.open(e.route, "_blank")
                    };

                function O() {
                    const e = window.innerWidth;
                    b(e)
                }
                return (0, n.useEffect)((() => {
                    window.addEventListener("resize", O)
                }), []), (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)("div", {
                        className: "sidebar-toggle",
                        children: [(0, u.jsx)(t.Z.Brand, {
                            onClick: () => a(!0),
                            className: "menu-btn",
                            children: (0, u.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/menu.png",
                                alt: ""
                            })
                        }), (0, u.jsx)("div", {
                            className: "sidebar-logo",
                            children: (0, u.jsx)(l(), {
                                className: "sidelogo-link",
                                href: "/",
                                passHref: !0,
                                children: (0, u.jsx)("img", {
                                    className: "img-fluid",
                                    src: g > 576 ? "../../assets/images/Shibarium white@2x.png" : "../../assets/images/Shibarium Pictogram@2x.png",
                                    width: g > 576 ? 250 : 100,
                                    alt: ""
                                })
                            })
                        })]
                    }), (0, u.jsxs)("div", {
                        className: s ? "sidebar sidebar-active" : "sidebar",
                        ref: x,
                        children: [(0, u.jsxs)("div", {
                            className: "sidbar-top-menu",
                            children: [(0, u.jsxs)("div", {
                                className: "sidebar-logo",
                                children: [(0, u.jsx)("span", {
                                    className: "close-icon",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: () => a(!1),
                                    children: (0, u.jsx)("img", {
                                        className: "img-fluid",
                                        src: "../../assets/images/close-icon.png",
                                        alt: "close-icon"
                                    })
                                }), (0, u.jsx)(l(), {
                                    className: "sidelogo-link",
                                    href: "/",
                                    passHref: !0,
                                    children: (0, u.jsx)("img", {
                                        className: "img-fluid",
                                        src: "../../assets/images/Shibarium white@2x.png",
                                        alt: ""
                                    })
                                })]
                            }), (0, u.jsx)("ul", {
                                className: "side-menu",
                                children: k && k.map((e => e && (0, u.jsx)("li", {
                                    className: "side-menu-item",
                                    children: (0, u.jsx)("button", {
                                        className: e.isSelected ? "side-link btn primary-btn w-100" : "side-link btn w-100",
                                        onClick: () => C(e),
                                        children: (0, u.jsxs)("span", {
                                            className: "buttonWrapper",
                                            children: [(0, u.jsx)("span", {
                                                className: "side-ico",
                                                children: (0, u.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: e.img,
                                                    alt: "side-icon"
                                                })
                                            }), (0, u.jsx)("span", {
                                                children: e.name
                                            }), j && j.wallet && "Transactions" == e.name && N ? (0, u.jsxs)("span", {
                                                className: "pendingCountSpan",
                                                children: [(0, u.jsx)(d.Z, {}), " ", N]
                                            }) : ""]
                                        })
                                    })
                                }, e.name)))
                            })]
                        }), (0, u.jsx)("div", {
                            className: "sidebar-bottom-menu",
                            children: (0, u.jsx)("ul", {
                                className: "side-menu",
                                children: S && S.map((e => e && (0, u.jsx)("li", {
                                    className: "side-menu-item",
                                    children: (0, u.jsx)("button", {
                                        className: e.isSelected ? "side-link btn primary-btn w-100" : "side-link btn w-100",
                                        onClick: () => C(e),
                                        children: (0, u.jsxs)("span", {
                                            children: [(0, u.jsx)("span", {
                                                className: "side-ico",
                                                children: (0, u.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: e.img,
                                                    alt: "side-icon"
                                                })
                                            }), (0, u.jsx)("span", {
                                                children: e.name
                                            })]
                                        })
                                    })
                                }, e.name)))
                            })
                        })]
                    })]
                })
            }
        },
        45376: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/bridge", function() {
                return a(32766)
            }])
        }
    },
    function(e) {
        e.O(0, [296, 1703, 3482, 7425, 2077, 7333, 552, 5982, 4022, 7068, 8550, 5455, 3084, 3100, 1489, 6080, 687, 1229, 9774, 2888, 179], (function() {
            return s = 45376, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);