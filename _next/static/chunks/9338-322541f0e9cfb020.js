"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9338], {
        43882: function(e, a, s) {
            s.d(a, {
                B9: function() {
                    return l
                },
                C$: function() {
                    return r
                }
            });
            var t = s(75940),
                i = s(54331);
            const n = {
                    etherscan: (e, a, s) => "transaction" == s ? `${e}/tx/${a}` : `${e}/${s}/${a}`,
                    blockscout: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/tx/${a}`;
                            case "token":
                                return `${e}/tokens/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    },
                    harmony: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/tx/${a}`;
                            case "token":
                                return `${e}/address/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    },
                    okex: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/tx/${a}`;
                            case "token":
                                return `${e}/tokenAddr/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    },
                    moonriver: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/tx/${a}`;
                            case "token":
                                return `${e}/tokens/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    },
                    fuse: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/tx/${a}`;
                            case "token":
                                return `${e}/tokens/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    },
                    telos: (e, a, s) => {
                        switch (s) {
                            case "transaction":
                                return `${e}/transaction/${a}`;
                            case "token":
                            case "address":
                                return `${e}/address/${a}`;
                            default:
                                return `${e}/${s}/${a}`
                        }
                    }
                },
                r = () => {
                    const e = (0, t.Z)();
                    return {
                        [i.ChainId.ETHEREUM]: {
                            link: "https://etherscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.ROPSTEN]: {
                            link: "https://ropsten.etherscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.RINKEBY]: {
                            link: "https://rinkeby.etherscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.G\ u00d6RLI]: {
                            link: "https://goerli.etherscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.PUPPYNET157]: {
                            link: "https://puppyscan.shib.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.PUPPYNET]: {
                            link: e.Explorer,
                            builder: n.etherscan
                        },
                        [i.ChainId.PUPPYNET517]: {
                            link: e.Explorer,
                            builder: n.etherscan
                        },
                        [i.ChainId.PUPPYNET917]: {
                            link: e.Explorer,
                            builder: n.etherscan
                        },
                        [i.ChainId.PUPPYNET719]: {
                            link: e.Explorer,
                            builder: n.etherscan
                        },
                        [i.ChainId.KOVAN]: {
                            link: "https://kovan.etherscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.MATIC]: {
                            link: "https://polygonscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.MATIC_TESTNET]: {
                            link: "https://mumbai.polygonscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.FANTOM]: {
                            link: "https://ftmscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.FANTOM_TESTNET]: {
                            link: "https://testnet.ftmscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.XDAI]: {
                            link: "https://blockscout.com/xdai/mainnet",
                            builder: n.blockscout
                        },
                        [i.ChainId.BSC]: {
                            link: "https://bscscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.BSC_TESTNET]: {
                            link: "https://testnet.bscscan.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.ARBITRUM]: {
                            link: "https://arbiscan.io",
                            builder: n.etherscan
                        },
                        [i.ChainId.MOONBEAM_TESTNET]: {
                            link: "https://moonbeam-explorer.netlify.app",
                            builder: n.blockscout
                        },
                        [i.ChainId.AVALANCHE]: {
                            link: "https://cchain.explorer.avax.network",
                            builder: n.blockscout
                        },
                        [i.ChainId.AVALANCHE_TESTNET]: {
                            link: "https://cchain.explorer.avax-test.network",
                            builder: n.etherscan
                        },
                        [i.ChainId.HECO]: {
                            link: "https://hecoinfo.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.HECO_TESTNET]: {
                            link: "https://testnet.hecoinfo.com",
                            builder: n.etherscan
                        },
                        [i.ChainId.HARMONY]: {
                            link: "https://beta.explorer.harmony.one/#",
                            builder: n.harmony
                        },
                        [i.ChainId.HARMONY_TESTNET]: {
                            link: "https://explorer.pops.one/#",
                            builder: n.harmony
                        },
                        [i.ChainId.OKEX]: {
                            link: "https://www.oklink.com/okexchain",
                            builder: n.okex
                        },
                        [i.ChainId.OKEX_TESTNET]: {
                            link: "https://www.oklink.com/okexchain-test",
                            builder: n.okex
                        },
                        [i.ChainId.CELO]: {
                            link: "https://explorer.celo.org",
                            builder: n.blockscout
                        },
                        [i.ChainId.PALM]: {
                            link: "",
                            builder: n.blockscout
                        },
                        [i.ChainId.MOONRIVER]: {
                            link: "https://moonriver.moonscan.io",
                            builder: n.moonriver
                        },
                        [i.ChainId.FUSE]: {
                            link: "https://explorer.fuse.io",
                            builder: n.fuse
                        },
                        [i.ChainId.TELOS]: {
                            link: "https://rpc1.us.telos.net/v2/explore/evm",
                            builder: n.telos
                        },
                        [i.ChainId.SHIBARIUM]: {
                            link: e.Explorer,
                            builder: n.etherscan
                        },
                        [i.ChainId.SEPOLIA]: {
                            link: "https://sepolia.etherscan.io",
                            builder: n.etherscan
                        }
                    }
                },
                l = () => {
                    const e = r();
                    return (a, s, t) => {
                        if (!a) return "";
                        const i = e[a];
                        return i.builder(i.link, s, t)
                    }
                }
        },
        75460: function(e, a, s) {
            s.r(a);
            s(67294);
            var t = s(85893);
            a.default = e => {
                let {
                    processing: a
                } = e;
                return (0, t.jsxs)("ul", {
                    className: "stepper mt-3 del-step",
                    children: [(0, t.jsxs)("li", {
                        className: "step active",
                        children: [(0, t.jsx)("div", {
                            className: "step-ico",
                            children: (0, t.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, t.jsx)("div", {
                            className: "step-title",
                            children: "Migrate"
                        })]
                    }), (0, t.jsxs)("li", {
                        className: `step ${"Migrate"!=a&&"active"}`,
                        children: [(0, t.jsx)("div", {
                            className: "step-ico",
                            children: (0, t.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, t.jsx)("div", {
                            className: "step-title",
                            children: "Processing"
                        })]
                    }), (0, t.jsxs)("li", {
                        className: `step ${"Completed"==a&&"active"}`,
                        children: [(0, t.jsx)("div", {
                            className: "step-ico",
                            children: (0, t.jsx)("img", {
                                className: "img-fluid",
                                src: "../../assets/images/tick-yes.png",
                                alt: "check-icon"
                            })
                        }), (0, t.jsx)("div", {
                            className: "step-title",
                            children: "Completed"
                        })]
                    })]
                })
            }
        },
        59338: function(e, a, s) {
            s.r(a);
            var t = s(4730),
                i = s(67294),
                n = s(57333),
                r = s(36375),
                l = s(43882),
                c = s(66850),
                o = s(73640),
                d = s(48404),
                h = s(59433),
                m = s(74231),
                u = s(93085),
                p = s(86771),
                x = s(97552),
                b = s(11163),
                g = s(46215),
                k = s(18541),
                v = s(95477),
                N = s(75940),
                f = s(75460),
                j = s(58760),
                w = s(85893);
            const C = ["data", "onHide", "migrateDataRow", "showmigratepop", "setmigratepop"];
            a.default = e => {
                var a;
                let {
                    data: s,
                    onHide: E,
                    migrateDataRow: I,
                    showmigratepop: T,
                    setmigratepop: $
                } = e;
                (0, t.Z)(e, C);
                const A = (0, l.B9)(),
                    {
                        0: y,
                        1: S
                    } = (0, i.useState)(0),
                    {
                        account: _,
                        chainId: M = 1
                    } = (0, r.aQ)(),
                    P = (0, r.VN)(),
                    F = (0, N.Z)(),
                    O = (0, p.T)(),
                    {
                        0: R,
                        1: B
                    } = (0, i.useState)(""),
                    {
                        0: H,
                        1: L
                    } = (0, i.useState)(0),
                    [U, Y] = (0, k.EG)(),
                    D = (0, b.useRouter)(),
                    {
                        0: V,
                        1: K
                    } = (0, i.useState)("Migrate");
                (0, i.useEffect)((() => {
                    (0, o.K9)().then((e => {
                        S(e)
                    }))
                }), [_]);
                (0, i.useEffect)((() => {
                    (e => {
                        var a;
                        let s = null === e || void 0 === e || null === (a = e.data) || void 0 === a ? void 0 : a.stake;
                        L(s)
                    })(U)
                }), [U]);
                let X = m.Ry().shape({
                    balance: m.Rx().typeError("Only digits are allowed.").max(H, "Insufficient Balance").min(1, "Invalid Amount.").required("Balance is required.")
                });
                const {
                    values: Z,
                    errors: G,
                    handleBlur: q,
                    handleChange: z,
                    setFieldValue: Q,
                    handleSubmit: J,
                    touched: W,
                    resetForm: ee
                } = (0, h.TA)({
                    initialValues: {
                        balance: 0
                    },
                    validationSchema: X,
                    onSubmit: e => {}
                }), ae = () => {
                    $(!1), K("Migrate"), Q("balance", ""), ee()
                }, se = e => {
                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-3"
                };
                return (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsxs)(d.default, {
                        title: V,
                        show: T,
                        setshow: () => {
                            ae(), ee()
                        },
                        externalCls: "stak-pop del-pop ffms-inherit mig-popup",
                        children: [(0, w.jsx)(f.default, {
                            processing: V
                        }), "Processing" == V && (0, w.jsx)(j.default, {
                            title: "Transaction in progress",
                            subText: "BONE transactions can take longer time to complete based\n                    upon network congestion. Please wait or increase the gas\n                    price of the transaction.",
                            btnText: (0, w.jsx)("button", {
                                className: "btn primary-btn d-flex align-items-center justify-content-center w-100",
                                disabled: !R,
                                onClick: () => window.open(R),
                                children: (0, w.jsx)("span", {
                                    children: "View on Block Explorer"
                                })
                            }),
                            img: (0, w.jsx)(v.Z, {
                                color: "inherit",
                                size: 120,
                                style: {
                                    color: "#f06500"
                                }
                            })
                        }), "Completed" == V && (0, w.jsx)(j.default, {
                            title: "Stakes Migrated",
                            subText: "Your stakes have been successfully migrated to another\n                    validator.",
                            btnText: (0, w.jsx)("button", {
                                className: "w-100",
                                children: (0, w.jsx)("a", {
                                    className: "btn primary-btn d-flex align-items-center justify-content-center",
                                    target: "_blank",
                                    href: R,
                                    children: (0, w.jsx)("span", {
                                        children: "View on Block Explorer"
                                    })
                                })
                            }),
                            img: (0, w.jsx)("img", {
                                className: "img-fluid img-wdth",
                                src: "../../assets/images/cmpete-step.png",
                                width: "150",
                                height: "150"
                            })
                        }), "Error" == V && (0, w.jsxs)("div", {
                            className: "text-center",
                            children: [(0, w.jsx)("img", {
                                className: "img-fluid tick-img m-auto mb-2",
                                src: "../../assets/images/alert-icon.png",
                                alt: "",
                                width: "24"
                            }), "Error processing this transaction. ", (0, w.jsx)("br", {}), " Try Again"]
                        }), "Migrate" == V && (0, w.jsx)(w.Fragment, {
                            children: (0, w.jsx)("div", {
                                className: "cmn_modal vali_deli_popups ffms-inherit",
                                children: (0, w.jsx)("form", {
                                    className: "h-100",
                                    onSubmit: J,
                                    children: (0, w.jsxs)("div", {
                                        className: "step_content fl-box",
                                        children: [(0, w.jsxs)("div", {
                                            className: "ax-top",
                                            children: [(0, w.jsxs)("div", {
                                                className: "pop-grid flex-grid",
                                                children: [(0, w.jsxs)("div", {
                                                    className: "text-center box-block",
                                                    children: [(0, w.jsx)("div", {
                                                        className: "d-inline-block img-flexible flex-img-box",
                                                        children: (0, w.jsx)("img", {
                                                            className: "img-fluid valMiniImage",
                                                            src: I.image || "../../../assets/images/American_Shib.png",
                                                            alt: "logo",
                                                            onError: se,
                                                            width: 70,
                                                            height: 70,
                                                            style: {
                                                                borderRadius: "50px"
                                                            }
                                                        })
                                                    }), (0, w.jsx)("p", {
                                                        children: null === I || void 0 === I ? void 0 : I.name
                                                    })]
                                                }), (0, w.jsx)("div", {
                                                    className: "text-center box-block",
                                                    children: (0, w.jsx)("div", {
                                                        className: "d-inline-block arow-block right-arrow",
                                                        children: (0, w.jsx)("div", {
                                                            className: "scrolldown-container",
                                                            children: (0, w.jsx)("div", {
                                                                className: "scrolldown-btn",
                                                                children: (0, w.jsxs)("svg", {
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
                                                                    children: [(0, w.jsx)("path", {
                                                                        className: "first-path",
                                                                        fill: "#FFFFFF",
                                                                        d: "M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057                  s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119                  l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305                  c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z"
                                                                    }), (0, w.jsx)("path", {
                                                                        className: "second-path",
                                                                        fill: "#FFFFFF",
                                                                        d: "M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057                  c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12                  l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305                  c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z"
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                }), (0, w.jsxs)("div", {
                                                    className: "text-center box-block",
                                                    children: [(0, w.jsx)("div", {
                                                        className: "d-inline-block img-flexible flex-img-box",
                                                        children: (0, w.jsx)("img", {
                                                            className: "img-fluid valMiniImage",
                                                            src: (null === s || void 0 === s ? void 0 : s.logoUrl) || "../../../assets/images/American_Shib.png",
                                                            alt: "logo",
                                                            width: 70,
                                                            height: 70,
                                                            onError: se,
                                                            style: {
                                                                borderRadius: "50px"
                                                            }
                                                        })
                                                    }), (0, w.jsx)("p", {
                                                        children: null === s || void 0 === s ? void 0 : s.name
                                                    })]
                                                })]
                                            }), (0, w.jsx)("div", {
                                                className: "info-box my-3",
                                                children: (0, w.jsxs)("div", {
                                                    className: "d-flex align-items-center justify-content-start",
                                                    children: [(0, w.jsx)("div", {
                                                        className: "migimg mr-4",
                                                        children: (0, w.jsx)("span", {
                                                            className: "user-icon u_icon",
                                                            children: (0, w.jsx)("img", {
                                                                src: (null === s || void 0 === s ? void 0 : s.logoUrl) || "../../../assets/images/American_Shib.png",
                                                                width: 70,
                                                                height: 70,
                                                                className: "img-fluid",
                                                                onError: se
                                                            })
                                                        })
                                                    }), (0, w.jsxs)("div", {
                                                        className: "fw-700",
                                                        children: [(0, w.jsx)("span", {
                                                            className: "vertical-align ft-22",
                                                            children: s.name
                                                        }), (0, w.jsx)("p", {
                                                            children: (0, w.jsxs)("span", {
                                                                className: "light-text",
                                                                children: [null === s || void 0 === s || null === (a = s.uptimePercent) || void 0 === a ? void 0 : a.toFixed(o.vT), "% Performance ", (0, w.jsx)("br", {}), " ", s.commissionrate, " % Commission"]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), (0, w.jsxs)("div", {
                                                className: "err-wrap",
                                                children: [(0, w.jsxs)("div", {
                                                    className: "form-field position-relative two-fld max-group extr_pd_remove bg-clr h-auto",
                                                    children: [(0, w.jsx)("div", {
                                                        className: "mid-chain w-100",
                                                        children: (0, w.jsx)("input", {
                                                            className: "w-100",
                                                            placeholder: "0.00",
                                                            name: "balance",
                                                            autoComplete: "off",
                                                            value: Z.balance,
                                                            onChange: z("balance"),
                                                            onBlur: q
                                                        })
                                                    }), (0, w.jsx)("button", {
                                                        disabled: +H <= 0,
                                                        onClick: e => {
                                                            e.preventDefault(), Q("balance", H)
                                                        },
                                                        className: "rt-chain",
                                                        children: (0, w.jsx)("span", {
                                                            className: "orange-txt fw-bold",
                                                            children: "MAX"
                                                        })
                                                    })]
                                                }), G.balance && W.balance ? (0, w.jsx)("p", {
                                                    className: "primary-text error",
                                                    children: G.balance
                                                }) : null, (0, w.jsxs)("p", {
                                                    className: "inpt_fld_hlpr_txt mt-3 text-pop-right d-flex flex-wrap mt-4",
                                                    children: [(0, w.jsx)("span", {
                                                        children: (0, w.jsx)(n.Z, {
                                                            value: (Number(D.query.id) * y).toFixed(o.i5),
                                                            displayType: "text",
                                                            thousandSeparator: !0,
                                                            prefix: "$ "
                                                        })
                                                    }), (0, w.jsxs)("span", {
                                                        className: "text-right",
                                                        children: ["Balance: ", H, " BONE"]
                                                    })]
                                                })]
                                            })]
                                        }), (0, w.jsx)("div", {
                                            className: "ax-bottom",
                                            children: (0, w.jsx)("div", {
                                                className: "pop_btns_area row form-control mt-3",
                                                children: (0, w.jsx)("div", {
                                                    className: "col-12",
                                                    children: (0, w.jsx)("button", {
                                                        onClick: e => {
                                                            e.preventDefault(), (async (e, a, s) => {
                                                                try {
                                                                    var t, i;
                                                                    if (_ && (null === s || void 0 === s || null === (t = s.data) || void 0 === t || null === (i = t.migrateData) || void 0 === i ? void 0 : i.id) != a.validatorContractId) {
                                                                        var n, r;
                                                                        K("Processing");
                                                                        let t = _,
                                                                            i = null === s || void 0 === s || null === (n = s.data) || void 0 === n || null === (r = n.migrateData) || void 0 === r ? void 0 : r.id,
                                                                            l = a.validatorContractId,
                                                                            d = P.utils.toBN((0, c.Z)(+e.balance * Math.pow(10, 18))),
                                                                            h = new P.eth.Contract(g, F.contractAddress.STAKE_MANAGER_PROXY),
                                                                            m = await h.methods.migrateDelegation(i, l, d).estimateGas({
                                                                                from: t
                                                                            }),
                                                                            p = await h.methods.migrateDelegation(i, l, d).encodeABI(),
                                                                            x = await (0, o.tV)(P);
                                                                        await P.eth.sendTransaction({
                                                                            from: t,
                                                                            to: F.contractAddress.STAKE_MANAGER_PROXY,
                                                                            gas: (parseInt(m) + 3e4).toString(),
                                                                            gasPrice: x,
                                                                            data: p
                                                                        }).on("transactionHash", (a => {
                                                                            var i, n;
                                                                            O((0, u.dT)({
                                                                                hash: a,
                                                                                from: t,
                                                                                chainId: M,
                                                                                summary: `${a}`
                                                                            }));
                                                                            const r = A(M, a, "transaction");
                                                                            B(r);
                                                                            let l = parseFloat(null === s || void 0 === s || null === (i = s.data) || void 0 === i ? void 0 : i.stake) - e.balance;
                                                                            Y(null === s || void 0 === s || null === (n = s.data) || void 0 === n ? void 0 : n.migrateData, l), Q("balance", "")
                                                                        })).on("receipt", (e => {
                                                                            O((0, u.Aw)({
                                                                                hash: e.transactionHash,
                                                                                chainId: M,
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
                                                                            })), K("Completed"), ee(), setTimeout((() => {
                                                                                D.back()
                                                                            }), 1e3)
                                                                        })).on("error", (e => {
                                                                            $(!1), console.log("step 6"), K("Migrate"), Q("balance", ""), ee()
                                                                        }))
                                                                    }
                                                                } catch (l) {
                                                                    l.code !== o.PM && x.uT("migrateStake ", l), console.log("error", l), $(!1), K("Migrate"), ae(), Q("balance", ""), ee()
                                                                }
                                                            })(Z, s, U)
                                                        },
                                                        disabled: isNaN(+Z.balance) || +Z.balance < 1 || +Z.balance > +H,
                                                        className: "w-100",
                                                        type: "submit",
                                                        value: "submit",
                                                        children: (0, w.jsx)("div", {
                                                            className: `btn primary-btn d-flex align-items-center justify-content-center ${(isNaN(+Z.balance)||+Z.balance<1||+Z.balance>+H)&&"disabled"}`,
                                                            children: (0, w.jsx)("button", {
                                                                disabled: isNaN(+Z.balance) || +Z.balance < 1 || +Z.balance > +H,
                                                                children: "Continue"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        }
    }
]);