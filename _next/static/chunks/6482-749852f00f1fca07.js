"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6482], {
        95477: function(e, t, s) {
            var a = s(87462),
                r = s(45987),
                n = s(67294),
                i = s(86010),
                c = s(83683),
                l = s(93871),
                o = 44,
                d = n.forwardRef((function(e, t) {
                    var s = e.classes,
                        c = e.className,
                        d = e.color,
                        m = void 0 === d ? "primary" : d,
                        h = e.disableShrink,
                        u = void 0 !== h && h,
                        p = e.size,
                        f = void 0 === p ? 40 : p,
                        x = e.style,
                        b = e.thickness,
                        g = void 0 === b ? 3.6 : b,
                        j = e.value,
                        w = void 0 === j ? 0 : j,
                        N = e.variant,
                        v = void 0 === N ? "indeterminate" : N,
                        y = (0, r.Z)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                        k = {},
                        O = {},
                        S = {};
                    if ("determinate" === v || "static" === v) {
                        var A = 2 * Math.PI * ((o - g) / 2);
                        k.strokeDasharray = A.toFixed(3), S["aria-valuenow"] = Math.round(w), k.strokeDashoffset = "".concat(((100 - w) / 100 * A).toFixed(3), "px"), O.transform = "rotate(-90deg)"
                    }
                    return n.createElement("div", (0, a.Z)({
                        className: (0, i.default)(s.root, c, "inherit" !== m && s["color".concat((0, l.Z)(m))], {
                            determinate: s.determinate,
                            indeterminate: s.indeterminate,
                            static: s.static
                        }[v]),
                        style: (0, a.Z)({
                            width: f,
                            height: f
                        }, O, x),
                        ref: t,
                        role: "progressbar"
                    }, S, y), n.createElement("svg", {
                        className: s.svg,
                        viewBox: "".concat(22, " ").concat(22, " ").concat(o, " ").concat(o)
                    }, n.createElement("circle", {
                        className: (0, i.default)(s.circle, u && s.circleDisableShrink, {
                            determinate: s.circleDeterminate,
                            indeterminate: s.circleIndeterminate,
                            static: s.circleStatic
                        }[v]),
                        style: k,
                        cx: o,
                        cy: o,
                        r: (o - g) / 2,
                        fill: "none",
                        strokeWidth: g
                    })))
                }));
            t.Z = (0, c.Z)((function(e) {
                return {
                    root: {
                        display: "inline-block"
                    },
                    static: {
                        transition: e.transitions.create("transform")
                    },
                    indeterminate: {
                        animation: "$circular-rotate 1.4s linear infinite"
                    },
                    determinate: {
                        transition: e.transitions.create("transform")
                    },
                    colorPrimary: {
                        color: e.palette.primary.main
                    },
                    colorSecondary: {
                        color: e.palette.secondary.main
                    },
                    svg: {
                        display: "block"
                    },
                    circle: {
                        stroke: "currentColor"
                    },
                    circleStatic: {
                        transition: e.transitions.create("stroke-dashoffset")
                    },
                    circleIndeterminate: {
                        animation: "$circular-dash 1.4s ease-in-out infinite",
                        strokeDasharray: "80px, 200px",
                        strokeDashoffset: "0px"
                    },
                    circleDeterminate: {
                        transition: e.transitions.create("stroke-dashoffset")
                    },
                    "@keyframes circular-rotate": {
                        "0%": {
                            transformOrigin: "50% 50%"
                        },
                        "100%": {
                            transform: "rotate(360deg)"
                        }
                    },
                    "@keyframes circular-dash": {
                        "0%": {
                            strokeDasharray: "1px, 200px",
                            strokeDashoffset: "0px"
                        },
                        "50%": {
                            strokeDasharray: "100px, 200px",
                            strokeDashoffset: "-15px"
                        },
                        "100%": {
                            strokeDasharray: "100px, 200px",
                            strokeDashoffset: "-125px"
                        }
                    },
                    circleDisableShrink: {
                        animation: "none"
                    }
                }
            }), {
                name: "MuiCircularProgress",
                flip: !1
            })(d)
        },
        66850: function(e, t, s) {
            function a(e) {
                return Array.isArray(e) ? e : String(e).split(/[eE]/)
            }

            function r(e) {
                const t = a(e);
                if (! function(e) {
                        const t = a(e);
                        return !Number.isNaN(Number(t[1]))
                    }(t)) return t[0];
                const s = "-" === t[0][0] ? "-" : "",
                    r = t[0].replace(/^-/, "").split("."),
                    n = r[0],
                    i = r[1] || "";
                let c = Number(t[1]);
                if (0 === c) return `${s+n}.${i}`;
                if (c < 0) {
                    const e = n.length + c;
                    if (e > 0) {
                        return `${s+n.substr(0,e)}.${n.substr(e)}${i}`
                    } {
                        let t = "0.";
                        for (c = e; c;) t += "0", c += 1;
                        return s + t + n + i
                    }
                } {
                    const e = i.length - c;
                    if (e > 0) {
                        const e = i.substr(c);
                        return `${s+n+i.substr(0,c)}.${e}`
                    } {
                        let t = -e,
                            a = "";
                        for (; t;) a += "0", t -= 1;
                        return s + n + i + a
                    }
                }
            }
            s.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        6800: function(e, t, s) {
            s.d(t, {
                G: function() {
                    return o
                }
            });
            var a = s(47933),
                r = s(36375),
                n = s(67294),
                i = s(37918),
                c = s.n(i),
                l = s(73640);
            const o = () => {
                const {
                    library: e,
                    chainId: t = 1
                } = (0, r.aQ)(), {
                    user: s
                } = (0, a.bN)(), {
                    0: i,
                    1: o
                } = (0, n.useState)(-1);
                return (0, n.useEffect)((() => {
                    if (e && s.wallet) try {
                        new(c())(null === e || void 0 === e ? void 0 : e.provider).eth.getBalance(s.wallet).then((e => {
                            let t = +e / Math.pow(10, l.wt);
                            o(t)
                        })).catch((e => {}))
                    } catch (t) {}
                }), [e, s.wallet]), i
            }
        },
        48404: function(e, t, s) {
            s.r(t), s.d(t, {
                CommonModalNew: function() {
                    return m
                },
                ValInfoModals: function() {
                    return d
                }
            });
            var a = s(59499),
                r = s(67294),
                n = s(6212),
                i = s(97552),
                c = s(85893);

            function l(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            const d = e => {
                    let {
                        show: t,
                        setshow: s,
                        title: a,
                        externalCls: i,
                        children: l
                    } = e;
                    const d = {
                            show: t,
                            setshow: s,
                            title: a,
                            externalCls: i,
                            children: l
                        },
                        m = (0, r.useCallback)((() => {
                            s(!1)
                        }), []);
                    return (0, c.jsxs)(n.Z, o(o({}, d), {}, {
                        centered: !0,
                        show: t,
                        onHide: m,
                        backdrop: "static",
                        keyboard: !1,
                        className: `shib-popup ${i}`,
                        children: [(0, c.jsx)(n.Z.Header, {
                            closeButton: !0,
                            className: "text-center modal-header",
                            children: (0, c.jsx)(n.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, c.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: a
                                })
                            })
                        }), (0, c.jsx)(n.Z.Body, {
                            className: "low-sidespace body-font-sm",
                            children: l
                        })]
                    }))
                },
                m = e => {
                    let {
                        show: t,
                        setshow: s = null,
                        title: a,
                        externalCls: l,
                        children: d,
                        showClose: m,
                        setSendModal: h,
                        setSenderModal: u
                    } = e;
                    const p = {
                            show: t,
                            setshow: s,
                            title: a,
                            children: d,
                            externalCls: l,
                            showClose: m,
                            setSendModal: h,
                            setSenderModal: u
                        },
                        f = (0, r.useCallback)((() => {
                            s()
                        }), []);
                    return (0, c.jsxs)(n.Z, o(o({}, p), {}, {
                        centered: !0,
                        show: t,
                        onHide: f,
                        backdrop: "static",
                        keyboard: !1,
                        className: `shib-popup ${l}`,
                        children: ["Select Token" === a || m ? (0, c.jsxs)(n.Z.Header, {
                            className: "text-center modal-header",
                            children: [(0, c.jsx)("div", {
                                className: "back-blk backArrowBtn",
                                children: (0, c.jsx)("button", {
                                    onClick: () => {
                                        try {
                                            "Select Token" === a && h({
                                                step0: !1,
                                                step1: !0,
                                                step2: !1,
                                                step3: !1,
                                                showTokens: !1
                                            })
                                        } catch (e) {
                                            i.uT("backHandler ", e)
                                        }
                                    },
                                    children: (0, c.jsx)("img", {
                                        className: "img-fluid",
                                        src: "../../assets/images/left-icon.png",
                                        width: "16",
                                        height: "16",
                                        alt: ""
                                    })
                                })
                            }), (0, c.jsx)(n.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, c.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: a
                                })
                            })]
                        }) : (0, c.jsx)(n.Z.Header, {
                            closeButton: !0,
                            className: "text-center modal-header",
                            children: (0, c.jsx)(n.Z.Title, {
                                id: "contained-modal-title-vcenter",
                                className: "d-inline-block fw-800 trs-3",
                                children: (0, c.jsx)("span", {
                                    style: {
                                        color: "white"
                                    },
                                    children: a
                                })
                            })
                        }), (0, c.jsx)(n.Z.Body, {
                            className: "low-sidespace body-font-sm",
                            children: d
                        })]
                    }))
                };
            t.default = e => {
                let {
                    show: t,
                    setshow: s,
                    title: a,
                    externalCls: i,
                    children: l
                } = e;
                const o = (0, r.useCallback)((() => {
                    s(!1)
                }), []);
                return (0, c.jsxs)(n.Z, {
                    centered: !0,
                    show: t,
                    onHide: o,
                    backdrop: "static",
                    keyboard: !1,
                    className: `shib-popup ${i}`,
                    children: [(0, c.jsx)(n.Z.Header, {
                        closeButton: !0,
                        className: "text-center modal-header",
                        children: (0, c.jsx)(n.Z.Title, {
                            id: "contained-modal-title-vcenter",
                            className: "d-inline-block fw-800 trs-3",
                            children: (0, c.jsx)("span", {
                                style: {
                                    color: "white"
                                },
                                children: a
                            })
                        })
                    }), (0, c.jsx)(n.Z.Body, {
                        className: "low-sidespace body-font-sm",
                        children: l
                    })]
                })
            }
        },
        83061: function(e, t, s) {
            s.r(t), s.d(t, {
                useCallAPIforDelegator: function() {
                    return h
                }
            });
            var a = s(75940),
                r = s(76704),
                n = s(86771),
                i = s(93085),
                c = s(66850),
                l = s(73640),
                o = s(97552),
                d = s(36375),
                m = s(47933);
            const h = () => async (e, t, s) => {
                try {
                    const a = e.valID,
                        r = t;
                    await s(r.toLowerCase(), a)
                } catch (a) {
                    o.Tb("CallAPIForDelegation ", a)
                }
            };
            t.default = e => {
                let t = (0, a.Z)(),
                    s = (0, n.T)();
                const {
                    account: o,
                    chainId: h = 1,
                    library: u
                } = (0, d.aQ)(), {
                    user: p,
                    getChainId: f
                } = (0, m.bN)(), x = (0, r.S)("abis/pos/ERC20.json"), b = (0, d.VN)();
                let g, j, w, N = p.wallet,
                    v = !1;
                return async () => {
                    try {
                        let a = b.utils.toBN((0, c.Z)(l.BW * Math.pow(10, 18))),
                            r = new b.eth.Contract(x, t.contractAddress.BONE);
                        return g = await r.methods.approve(t.contractAddress.STAKE_MANAGER_PROXY, a).estimateGas({
                            from: N
                        }), j = await r.methods.approve(t.contractAddress.STAKE_MANAGER_PROXY, a).encodeABI(), w = await (0, l.tV)(b), await b.eth.sendTransaction({
                            from: N,
                            to: t.contractAddress.BONE,
                            gas: (parseInt(g) + 3e4).toString(),
                            gasPrice: w,
                            data: j
                        }).on("transactionHash", (e => {
                            s((0, i.dT)({
                                hash: e,
                                from: N,
                                chainId: h,
                                summary: `${e}`
                            }))
                        })).on("receipt", (e => {
                            s((0, i.Aw)({
                                hash: e.transactionHash,
                                chainId: h,
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
                            })), v = !0
                        })).on("error", (t => (e(t), v))), v
                    } catch (a) {
                        return e(a), v
                    }
                }
            }
        },
        87003: function(e, t, s) {
            s.r(t);
            s(67294);
            var a = s(85893);
            t.default = e => {
                let {
                    state: t
                } = e;
                return (0, a.jsxs)("ul", {
                    className: "mt-3 stepper del-step",
                    children: [(0, a.jsxs)("li", {
                        className: "step active",
                        children: [(0, a.jsx)("div", {
                            className: "step-ico",
                            children: (0, a.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, a.jsx)("div", {
                            className: "step-title",
                            children: "Approve"
                        })]
                    }), (0, a.jsxs)("li", {
                        className: "step " + (t.step0 ? "" : "active"),
                        children: [(0, a.jsx)("div", {
                            className: "step-ico",
                            children: (0, a.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, a.jsx)("div", {
                            className: "step-title",
                            children: "Delegate"
                        })]
                    }), (0, a.jsxs)("li", {
                        className: "step " + (t.step3 ? "active" : ""),
                        children: [(0, a.jsx)("div", {
                            className: "step-ico",
                            children: (0, a.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, a.jsx)("div", {
                            className: "step-title",
                            children: "Completed"
                        })]
                    })]
                })
            }
        },
        71875: function(e, t, s) {
            s.r(t);
            var a = s(59499),
                r = s(16981),
                n = s(59433),
                i = s(67294),
                c = s(22406),
                l = s(73640),
                o = s(74231),
                d = s(58760),
                m = s(38460),
                h = s(85893);

            function u(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : u(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    setdelegateState: t,
                    data: s,
                    delegateState: a,
                    walletBalance: u,
                    isLoading: f,
                    buyVouchers: x,
                    loader: b
                } = e;
                const {
                    0: g,
                    1: j
                } = (0, i.useState)(!1), {
                    0: w,
                    1: N
                } = (0, i.useState)();
                let v = o.Ry().shape({
                    balance: o.Rx().typeError("Only digits are allowed.").max(u, "Insufficient Balance.").min(1, "Minimum staking amount is 1 Bone.").required("Balance is required.")
                });
                return (0, h.jsxs)(h.Fragment, {
                    children: [a.step0 && (0, h.jsx)(n.J9, {
                        initialValues: {
                            balance: 0
                        },
                        validationSchema: v,
                        onSubmit: e => {
                            t(p(p({}, a), {}, {
                                step0: !1,
                                step1: !0,
                                title: "Delegate"
                            })), N(e)
                        },
                        children: e => {
                            var t;
                            let {
                                errors: a,
                                touched: n,
                                handleChange: i,
                                handleBlur: o,
                                values: d,
                                handleSubmit: m,
                                setFieldValue: p,
                                resetForm: x
                            } = e;
                            return (0, h.jsx)("form", {
                                className: "h-100",
                                onSubmit: m,
                                children: (0, h.jsxs)("div", {
                                    className: "step_content fl-box",
                                    children: [(0, h.jsxs)("div", {
                                        className: "ax-top",
                                        children: [(0, h.jsx)("div", {
                                            className: "my-3 info-box",
                                            children: (0, h.jsxs)("div", {
                                                className: "d-flex align-items-center justify-content-start",
                                                children: [(0, h.jsx)("div", {
                                                    children: (0, h.jsx)("span", {
                                                        className: "user-icon u_icon",
                                                        children: (0, h.jsx)("img", {
                                                            src: (null === s || void 0 === s ? void 0 : s.logoUrl) || (null === s || void 0 === s ? void 0 : s.image) || "../../../assets/images/American_Shib.png",
                                                            onError: c.t
                                                        })
                                                    })
                                                }), (0, h.jsxs)("div", {
                                                    className: "fw-700",
                                                    children: [(0, h.jsx)("span", {
                                                        className: "vertical-align ft-22",
                                                        children: s.name || "-"
                                                    }), (0, h.jsx)("p", {
                                                        children: (0, h.jsxs)("span", {
                                                            className: "light-text",
                                                            children: [null === s || void 0 === s || null === (t = s.uptimePercent) || void 0 === t ? void 0 : t.toFixed(l.vT), "% Performance ", (0, h.jsx)("br", {}), s.commissionrate, " % Commission"]
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, h.jsxs)("div", {
                                            className: "h-auto form-field position-relative two-fld max-group extr_pd_remove bg-clr",
                                            children: [(0, h.jsx)("div", {
                                                className: "mid-chain w-100",
                                                children: (0, h.jsx)("input", {
                                                    className: "w-100",
                                                    placeholder: "0.00",
                                                    name: "balance",
                                                    autoComplete: "off",
                                                    value: (b = d.balance, g ? Number(b) : 0 === b ? void 0 : b),
                                                    onChange: e => {
                                                        i(e), j(!1)
                                                    },
                                                    onBlur: o
                                                })
                                            }), (0, h.jsx)("button", {
                                                disabled: u < 0,
                                                onClick: e => {
                                                    (e => {
                                                        e.preventDefault(), j(!0)
                                                    })(e), p("balance", `${u}`)
                                                },
                                                className: "rt-chain",
                                                children: (0, h.jsx)("span", {
                                                    className: "orange-txt fw-bold",
                                                    children: "MAX"
                                                })
                                            })]
                                        }), a.balance && n.balance && (0, h.jsx)("p", {
                                            className: "primary-text error",
                                            children: a.balance
                                        }), (0, h.jsxs)("p", {
                                            className: "flex-wrap mt-3 inpt_fld_hlpr_txt text-pop-right d-flex",
                                            children: [(0, h.jsx)("span", {}), (0, h.jsxs)("span", {
                                                className: "text-right d-flex align-items-center",
                                                children: ["Balance:", " ", f ? (0, h.jsx)(r.Z, {
                                                    stroke: "orange"
                                                }) : (0, h.jsxs)(h.Fragment, {
                                                    children: [Number(u), " BONE"]
                                                })]
                                            })]
                                        })]
                                    }), (0, h.jsx)("div", {
                                        className: "ax-bottom",
                                        children: (0, h.jsx)("div", {
                                            className: "mt-3 pop_btns_area row form-control",
                                            children: (0, h.jsx)("div", {
                                                className: "col-12",
                                                children: (0, h.jsx)("button", {
                                                    className: "w-100",
                                                    type: "submit",
                                                    value: "submit",
                                                    children: (0, h.jsx)("div", {
                                                        className: "btn primary-btn d-flex align-items-center justify-content-center",
                                                        children: (0, h.jsx)("span", {
                                                            children: "Continue"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            });
                            var b
                        }
                    }), a.step1 && (0, h.jsx)(d.default, {
                        title: "",
                        subText: "Completing this transaction will stake your Bone tokens\n                        and you will start earning rewards for the upcoming\n                        checkpoints.",
                        subText2: w && w.balance && `Staking: ${w.balance} BONE`,
                        img: (0, h.jsx)("img", {
                            className: "img-fluid img-wdth",
                            src: "../../assets/images/progrs-img.png"
                        }),
                        btnText: (0, h.jsx)("button", {
                            className: "w-100",
                            onClick: () => x(w),
                            disabled: b,
                            children: b ? (0, h.jsx)("a", {
                                className: "btn primary-btn d-flex align-items-center crsrDefault",
                                children: (0, h.jsx)(m.Z, {
                                    as: "span",
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    "aria-hidden": "true"
                                })
                            }) : (0, h.jsx)("a", {
                                className: "btn primary-btn d-flex align-items-center",
                                children: (0, h.jsx)("span", {
                                    children: "Delegate"
                                })
                            })
                        })
                    })]
                })
            }
        },
        58760: function(e, t, s) {
            s.r(t);
            s(67294);
            var a = s(85893);
            t.default = e => {
                let {
                    title: t,
                    subText: s,
                    subText2: r,
                    btnText: n,
                    img: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: "step_content fl-box",
                    children: [(0, a.jsxs)("div", {
                        className: "ax-top",
                        children: [(0, a.jsx)("div", {
                            className: "image_area row",
                            children: (0, a.jsx)("div", {
                                className: "text-center col-12 watch-img-sec",
                                children: i
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mid_text row",
                            children: [(0, a.jsx)("div", {
                                className: "text-center col-12",
                                children: (0, a.jsx)("h4", {
                                    className: "ff-mos",
                                    children: t
                                })
                            }), (0, a.jsx)("div", {
                                className: "text-center col-12",
                                children: (0, a.jsx)("p", {
                                    className: "ff-mos",
                                    children: s
                                })
                            }), r && (0, a.jsx)("div", {
                                className: "text-center col-12",
                                children: (0, a.jsx)("p", {
                                    className: "ff-mos !text-secondaryHub-300 ",
                                    children: r
                                })
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: "ax-bottom",
                        children: (0, a.jsx)("div", {
                            className: "mt-3 pop_btns_area row form-control",
                            children: (0, a.jsx)("div", {
                                className: "col-12",
                                children: n
                            })
                        })
                    })]
                })
            }
        },
        26482: function(e, t, s) {
            s.r(t);
            var a = s(59499),
                r = s(4730),
                n = s(67294),
                i = s(6800),
                c = s(36375),
                l = s(43882),
                o = s(83691),
                d = s(66850),
                m = s(73640),
                h = s(25617),
                u = s(76704),
                p = s(48404),
                f = s(93085),
                x = s(97552),
                b = s(95477),
                g = s(75940),
                j = s(87003),
                w = s(58760),
                N = s(83061),
                v = s(18732),
                y = s(71875),
                k = s(47933),
                O = s(18541),
                S = s(89429),
                A = s(85893);
            const D = ["data", "onHide", "showdelegatepop", "setdelegatepop", "getDelegatorCardData"];

            function E(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : E(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            const B = {
                step0: !0,
                step1: !1,
                step2: !1,
                step3: !1,
                title: "Delegate"
            };
            t.default = e => {
                let {
                    data: t,
                    onHide: s,
                    showdelegatepop: a,
                    setdelegatepop: E,
                    getDelegatorCardData: P
                } = e;
                (0, r.Z)(e, D);
                const {
                    setDelegatorData: T
                } = (0, v.Z)(), {
                    0: Z,
                    1: _
                } = (0, n.useState)(""), {
                    chainId: I = 1
                } = (0, c.aQ)(), {
                    library: H
                } = (0, c.aQ)(), M = (0, O.ub)(), {
                    user: R,
                    getChainId: V
                } = (0, k.bN)(), $ = (0, c.VN)(), F = (0, g.Z)(), G = (0, u.S)("abis/plasma/ValidatorShare.json"), {
                    0: Y,
                    1: L
                } = (0, n.useState)(B), {
                    0: X,
                    1: K
                } = (0, n.useState)(!1), Q = (0, i.G)(), {
                    newBalance: q,
                    updateBalance: z
                } = (0, o.FR)(F.contractAddress.BONE), W = (0, l.B9)(), {
                    balance: U
                } = (0, o.oe)(), J = (0, o.mM)(F.contractAddress.BONE), ee = U, te = I == F.L1Chain ? J : ee, se = (0, N.useCallAPIforDelegator)(), {
                    0: ae,
                    1: re
                } = (0, n.useState)(-1), ne = -1 == ae, ie = (0, h.I0)(), ce = e => {
                    e.code !== m.PM && x.uT("BUY_VOUCHER ", e), L(B), E()
                }, le = (0, N.default)(ce);
                (0, n.useEffect)((() => {
                    V().then((e => {
                        e === F.L2Chain ? re(Number(Q).toFixed(2)) : re(te)
                    }))
                }), [Q, q, I, R, M]);
                const oe = async e => {
                        let t, s, a, r = R && R.wallet;
                        try {
                            a = $.utils.toBN((0, d.Z)(1 * Math.pow(10, 18))), s = $.utils.toBN((0, d.Z)(+e.amount * Math.pow(10, 18))), t = new $.eth.Contract(G, e.validatorAddress);
                            try {
                                var n = await t.methods.buyVoucher(s, a).estimateGas({
                                    from: R.wallet
                                });
                                let e = await (0, m.tV)($);
                                const r = $.utils.toBN((0, d.Z)(e * (n + 21e3))),
                                    i = $.utils.fromWei(r.toString(), "ether");
                                console.log("ESTIMATED GAS FEE", i)
                            } catch (i) {
                                console.log("ERROR => ", i)
                            }
                            await t.methods.buyVoucher(s, a).send({
                                from: r
                            }).on("transactionHash", (e => {
                                K(!1), V().then((t => {
                                    ie((0, f.dT)({
                                        hash: e,
                                        from: r,
                                        chainId: t,
                                        summary: `${e}`
                                    }));
                                    const s = W(t, e, "transaction");
                                    _(s), L(C(C({}, Y), {}, {
                                        step1: !1,
                                        step2: !0,
                                        title: "Transaction In Progress"
                                    }))
                                }))
                            })).on("receipt", (t => {
                                V().then((e => {
                                    z(), ie((0, f.Aw)({
                                        hash: t.transactionHash,
                                        chainId: e,
                                        receipt: {
                                            to: t.to,
                                            from: t.from,
                                            contractAddress: t.contractAddress,
                                            transactionIndex: t.transactionIndex,
                                            blockHash: t.blockHash,
                                            transactionHash: t.transactionHash,
                                            blockNumber: t.blockNumber,
                                            status: 1
                                        }
                                    }))
                                })).then((() => {
                                    se(e, R && R.wallet, T).then((() => {
                                        setTimeout((() => {
                                            P(R.wallet)
                                        }), 3e3), L(C(C({}, Y), {}, {
                                            step1: !1,
                                            step2: !1,
                                            step3: !0,
                                            title: "Transaction Done"
                                        })), ie((0, S.RI)())
                                    }))
                                }))
                            })).on("error", (e => {
                                ce(e)
                            }))
                        } catch (i) {
                            ce(i)
                        }
                    },
                    de = (0, n.useCallback)((() => {
                        L(B), E(), ie((0, S.RI)())
                    }), []);
                return (0, A.jsx)(A.Fragment, {
                    children: (0, A.jsx)(p.default, {
                        title: Y.title,
                        show: a,
                        setshow: de,
                        externalCls: "stak-pop del-pop ffms-inherit",
                        children: (0, A.jsx)(A.Fragment, {
                            children: (0, A.jsxs)("div", {
                                className: "cmn_modal vali_deli_popups ffms-inherit",
                                children: [(0, A.jsx)(j.default, {
                                    state: Y
                                }), (0, A.jsx)(y.default, {
                                    setdelegateState: L,
                                    data: t,
                                    delegateState: Y,
                                    walletBalance: ae,
                                    isLoading: ne,
                                    buyVouchers: async e => {
                                        try {
                                            K(!0);
                                            const s = {
                                                validatorAddress: t.contractAddress,
                                                delegatorAddress: R && R.wallet,
                                                amount: e.balance,
                                                valID: t.validatorContractId
                                            };
                                            console.log("requestBody", s);
                                            let a = H;
                                            console.log("lib", a), console.log("chainData.contractAddress.BONE", F.contractAddress.BONE), console.log("user.wallet", R.wallet), console.log("chainData.contractAddress.STAKE_MANAGER_PROXY", F.contractAddress.STAKE_MANAGER_PROXY);
                                            let r = await (0, m.J4)(a, F.contractAddress.BONE, R && R.wallet, F.contractAddress.STAKE_MANAGER_PROXY) ? ? 0;
                                            if (+s.amount > r) {
                                                await le() && oe(s)
                                            } else oe(s)
                                        } catch (s) {
                                            console.log("ERR", s), x.uT("buyVouchers ", s)
                                        }
                                    },
                                    loader: X
                                }), Y.step2 && (0, A.jsx)(w.default, {
                                    title: "Transaction in progress",
                                    subText: " Layer1 transactions can take longer time to complete\n                        based upon network congestion. Please wait or increase\n                        the gas price of the transaction.",
                                    img: (0, A.jsx)(b.Z, {
                                        color: "inherit",
                                        size: 120,
                                        style: {
                                            color: "#f06500"
                                        }
                                    }),
                                    btnText: (0, A.jsx)("a", {
                                        className: "btn primary-btn d-flex align-items-center",
                                        target: "_blank",
                                        href: Z,
                                        children: (0, A.jsx)("span", {
                                            children: "View on Block Explorer"
                                        })
                                    })
                                }), Y.step3 && (0, A.jsx)(w.default, {
                                    title: "Delegation Submitted",
                                    subText: "Your tokens are staked successfully on validator. Your\n                        delegation will take 4-5 mintues to reflect in your\n                        account.",
                                    img: (0, A.jsx)("img", {
                                        className: "img-fluid img-wdth",
                                        src: "../../assets/images/cmpete-step.png",
                                        width: "150",
                                        height: "150"
                                    }),
                                    btnText: (0, A.jsx)("button", {
                                        className: "w-100",
                                        children: (0, A.jsx)("a", {
                                            className: "btn primary-btn d-flex align-items-center",
                                            target: "_blank",
                                            href: Z,
                                            children: (0, A.jsx)("span", {
                                                children: "View on Block Explorer"
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        22406: function(e, t, s) {
            s.d(t, {
                q: function() {
                    return i
                },
                t: function() {
                    return c
                }
            });
            var a = s(36375),
                r = s(37918),
                n = s.n(r);
            const i = () => {
                    const {
                        library: e
                    } = (0, a.aQ)(), t = e, s = new(n())(null === t || void 0 === t ? void 0 : t.provider);
                    return (e, t) => {
                        let a = s.utils.toWei(String(e), t);
                        return s.utils.toBN(a)
                    }
                },
                c = e => {
                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-2"
                }
        }
    }
]);