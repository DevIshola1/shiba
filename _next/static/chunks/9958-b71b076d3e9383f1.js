"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9958], {
        24061: function(e, s, t) {
            t(67294);
            var a = t(42923),
                i = t(85893);
            s.Z = function(e) {
                let {
                    type: s,
                    rows: t,
                    cols: n
                } = e;
                return "table" === s ? (0, i.jsx)("div", {
                    className: "cus-shimer",
                    children: (0, i.jsx)(a.Jk, {
                        row: t,
                        col: n
                    })
                }) : null
            }
        },
        60579: function(e, s, t) {
            t.r(s), t.d(s, {
                default: function() {
                    return v
                }
            });
            var a = t(18541),
                i = t(41664),
                n = t.n(i),
                l = t(67294),
                r = t(57333),
                c = t(26482),
                d = t(73640),
                o = t(59338),
                m = t(11163),
                h = t(95477),
                u = t(47933),
                p = t(36375),
                g = t(85893);

            function v(e) {
                let {
                    validatorsList: s,
                    loading: t,
                    searchKey: i,
                    migrateData: v = {},
                    valStatus: x
                } = e;
                const {
                    0: j,
                    1: f
                } = (0, l.useState)({}), [b, N] = (0, a.ub)(), {
                    0: w,
                    1: k
                } = (0, l.useState)(!1), y = (0, m.useRouter)(), {
                    library: S,
                    chainId: C = 1
                } = (0, p.aQ)(), {
                    0: P,
                    1: A
                } = (0, l.useState)(!1), {
                    user: O
                } = (0, u.bN)(), L = O && (O.wallet || O.email), D = e => 0 === e.lastcheckpointsigned && e.fundamental === d.bG ? null : L ? 0 === e.checkpointstatus && +e.missedLatestCheckpointcount >= 500 && e.fundamental === d.bG ? (0, g.jsxs)("div", {
                    className: "tool-desc tool-desc-grid",
                    children: ["Offline since ", e.missedLatestCheckpointcount, " checkpoints"]
                }) : 0 === e.lastcheckpointsigned && e.fundamental === d.bG ? null : "migrate-stake" === y.asPath.split("/")[1] ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-grid",
                    children: e.contractAddress == v.contractAddress ? "Stakes cannot be migrated to same Validator." : "Migrate Your Stakes here."
                }) : e.uptimePercent <= d.dB ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-grid",
                    children: "Delegation is disabled."
                }) : 157 == C ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Switch to Sepolia for staking."
                }) : 109 == C ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Switch to Etherium Mainnet for staking."
                }) : (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-grid",
                    children: "Delegation is enabled."
                }) : (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-grid",
                    children: "Connect Wallet to continue."
                }), E = e => {
                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error me-3"
                };
                return (0, g.jsxs)(g.Fragment, {
                    children: [w && (0, g.jsx)(c.default, {
                        showdelegatepop: w,
                        setdelegatepop: k,
                        data: j,
                        getDelegatorCardData: e => !0
                    }, null === j || void 0 === j ? void 0 : j.signer), P && (0, g.jsx)(o.default, {
                        showmigratepop: P,
                        setmigratepop: A,
                        data: j,
                        migrateDataRow: v
                    }, null === j || void 0 === j ? void 0 : j.signer), (0, g.jsx)("div", {
                        className: "ffms-inherit",
                        children: (0, g.jsxs)("div", {
                            className: "grid-sec",
                            children: [t ? (0, g.jsx)("div", {
                                className: "grid-view-shimmer",
                                children: (0, g.jsx)(h.Z, {
                                    style: {
                                        color: " #F28B03"
                                    },
                                    size: 100
                                })
                            }) : (0, g.jsx)("div", {
                                className: "row side-cover",
                                children: (null === s || void 0 === s ? void 0 : s.length) > 0 ? null === s || void 0 === s ? void 0 : s.map((e => {
                                    return (0, g.jsx)("div", {
                                        className: "mb-4 col-xl-3 col-sm-6 col-12 side-space mb-sm-4",
                                        children: (0, g.jsxs)("div", {
                                            className: "box",
                                            children: [(0, g.jsx)("div", {
                                                className: "box-head",
                                                children: (0, g.jsxs)("div", {
                                                    className: "d-flex align-items-center justify-content-start",
                                                    children: [(0, g.jsx)("div", {
                                                        children: (0, g.jsxs)("span", {
                                                            children: [" ", (0, g.jsx)("img", {
                                                                style: {
                                                                    height: 50,
                                                                    width: 50
                                                                },
                                                                src: e.logoUrl ? ? "../../../assets/images/American_Shib.png",
                                                                onError: E,
                                                                className: "valMiniImage me-3",
                                                                alt: "logo"
                                                            })]
                                                        })
                                                    }), (0, g.jsxs)("div", {
                                                        className: "fw-600",
                                                        children: [(0, g.jsx)("span", {
                                                            className: "vertical-align",
                                                            children: (0, g.jsx)(n(), {
                                                                href: `/all-validator/validator-update/${e.signer}`,
                                                                passHref: !0,
                                                                children: (0, g.jsx)("p", {
                                                                    className: "tb-value",
                                                                    children: null !== e && void 0 !== e && e.name ? null === e || void 0 === e ? void 0 : e.name : "-"
                                                                })
                                                            })
                                                        }), (0, g.jsx)("p", {
                                                            children: (0, g.jsxs)("span", {
                                                                className: "ft-14 light-text",
                                                                children: [(0, g.jsx)(r.Z, {
                                                                    displayType: "text",
                                                                    thousandSeparator: !0,
                                                                    value: (0, d.vA)(+e.totalstaked)
                                                                }), " ", "BONE"]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), (0, g.jsxs)("div", {
                                                className: "box-body",
                                                children: [(0, g.jsxs)("div", {
                                                    className: "d-flex align-items-center justify-content-between",
                                                    children: [(0, g.jsx)("div", {
                                                        className: "fw-600 ft-14",
                                                        children: "Uptime"
                                                    }), (0, g.jsx)("div", {
                                                        children: (0, g.jsxs)("span", {
                                                            className: "warning-color fw-600 ft-14",
                                                            children: [(+e.uptimePercent).toFixed(d.vT), "%"]
                                                        })
                                                    })]
                                                }), (0, g.jsxs)("div", {
                                                    className: "d-flex align-items-center justify-content-between",
                                                    children: [(0, g.jsx)("div", {
                                                        className: "fw-600 ft-14",
                                                        children: "Commission"
                                                    }), (0, g.jsx)("div", {
                                                        children: (0, g.jsxs)("span", {
                                                            className: "warning-color fw-600 ft-14",
                                                            children: [null === e || void 0 === e ? void 0 : e.commissionrate, "%"]
                                                        })
                                                    })]
                                                }), (0, g.jsx)("div", {
                                                    className: "mt-3 text-center",
                                                    children: "Validator" === b && 1 === x ? (0, g.jsx)(n(), {
                                                        href: `/all-validator/${e.signer}`,
                                                        passHref: !0,
                                                        children: (0, g.jsxs)("div", {
                                                            className: "delegate_btn",
                                                            children: [(0, g.jsx)("p", {
                                                                className: "btn primary-btn light-text w-100",
                                                                children: "View"
                                                            }), (0, g.jsx)("div", {
                                                                className: "tool-desc tool-desc-grid",
                                                                children: "View Validator Info."
                                                            })]
                                                        })
                                                    }) : (0, g.jsxs)("div", {
                                                        className: "delegate_btn",
                                                        children: [(0, g.jsx)("button", {
                                                            disabled: !L || e.contractAddress == v.contractAddress || 0 === e.lastcheckpointsigned && e.fundamental === d.bG,
                                                            type: "button",
                                                            onClick: () => {
                                                                f(e), "migrate-stake" === y.asPath.split("/")[1] ? A(!0) : k(!0)
                                                            },
                                                            className: "btn primary-btn light-text w-100",
                                                            children: (s = e, "migrate-stake" === y.asPath.split("/")[1] ? "Stake here" : 0 === s.checkpointstatus && +s.missedLatestCheckpointcount >= 500 && s.fundamental === d.bG ? (0, g.jsxs)("p", {
                                                                style: {
                                                                    fontSize: "12px"
                                                                },
                                                                className: "no_btn",
                                                                children: ["Offline since", (0, g.jsx)("br", {}), s.missedLatestCheckpointcount, " checkpoints"]
                                                            }) : 0 === s.lastcheckpointsigned && s.fundamental === d.bG ? (0, g.jsx)("p", {
                                                                style: {
                                                                    fontSize: "12px",
                                                                    whiteSpace: "pre-wrap"
                                                                },
                                                                className: "no_btn",
                                                                children: "Not signing checkpoints."
                                                            }) : s.uptimePercent <= d.dB ? "Delegation Disabled" : "Delegate")
                                                        }), D(e)]
                                                    })
                                                })]
                                            })]
                                        })
                                    }, null === e || void 0 === e ? void 0 : e.signer);
                                    var s
                                })) : null
                            }), !t && !(null !== s && void 0 !== s && s.length) && (0, g.jsx)("div", {
                                className: "no-found no-records-wrapper",
                                children: (0, g.jsx)("div", {
                                    children: (0, g.jsx)("div", {
                                        children: (0, g.jsx)("img", {
                                            src: "../../../assets/images/no-record.png"
                                        })
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        36617: function(e, s, t) {
            t.r(s), t.d(s, {
                default: function() {
                    return v
                }
            });
            var a = t(18541),
                i = t(41664),
                n = t.n(i),
                l = t(26482),
                r = t(67294),
                c = t(73640),
                d = t(11163),
                o = t(59338),
                m = t(24061),
                h = t(47933),
                u = t(91089),
                p = t(36375),
                g = t(85893);

            function v(e) {
                let {
                    validatorsList: s,
                    searchKey: t,
                    loading: i,
                    migrateData: v = {},
                    valStatus: x
                } = e;
                const {
                    0: j,
                    1: f
                } = (0, r.useState)({}), {
                    user: b
                } = (0, h.bN)(), {
                    library: N,
                    chainId: w = 1
                } = (0, p.aQ)(), [k, y] = (0, a.ub)(), {
                    0: S,
                    1: C
                } = (0, r.useState)(!1), {
                    0: P,
                    1: A
                } = (0, r.useState)(!1), O = (0, d.useRouter)(), L = b && (b.wallet || b.email), D = e => 0 === e.lastcheckpointsigned && e.fundamental === c.bG ? null : L ? 0 === e.checkpointstatus && +e.missedLatestCheckpointcount >= 500 && e.fundamental === c.bG ? (0, g.jsxs)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: ["Offline since ", e.missedLatestCheckpointcount, " checkpoints"]
                }) : "migrate-stake" === O.asPath.split("/")[1] ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: e.contractAddress == v.contractAddress ? "Stakes cannot be migrated to same Validator." : "Migrate Your Stakes here."
                }) : e.uptimePercent <= c.dB ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Delegation is disabled."
                }) : 157 == w ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Switch to Sepolia for staking."
                }) : 109 == w ? (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Switch to Etherium Mainnet for staking."
                }) : (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Delegation is enabled."
                }) : (0, g.jsx)("div", {
                    className: "tool-desc tool-desc-sm",
                    children: "Connect Wallet to continue."
                }), E = e => {
                    e.currentTarget.src = "../../assets/images/shib-borderd-icon.png", e.currentTarget.className = "error"
                }, _ = e => "migrate-stake" === O.asPath.split("/")[1] ? "Stake here" : 0 === e.checkpointstatus && e.fundamental === c.bG && +e.missedLatestCheckpointcount >= 500 ? (0, g.jsxs)("p", {
                    style: {
                        fontSize: "12px"
                    },
                    className: "no_btn",
                    children: ["Offline since ", (0, g.jsx)("br", {}), e.missedLatestCheckpointcount, "checkpoints"]
                }) : 0 === e.lastcheckpointsigned && e.fundamental === c.bG ? (0, g.jsx)("p", {
                    style: {
                        fontSize: "12px",
                        whiteSpace: "pre-wrap"
                    },
                    className: "no_btn",
                    children: "Not signing checkpoints."
                }) : e.uptimePercent <= c.dB ? "Delegation Disabled" : "Stake Bone";
                return (0, g.jsxs)(g.Fragment, {
                    children: [S && (0, g.jsx)(l.default, {
                        showdelegatepop: S,
                        setdelegatepop: C,
                        data: j,
                        getDelegatorCardData: e => !0
                    }, null === j || void 0 === j ? void 0 : j.signer), P && (0, g.jsx)(o.default, {
                        showmigratepop: P,
                        setmigratepop: A,
                        data: j,
                        migrateDataRow: v
                    }, null === j || void 0 === j ? void 0 : j.signer), (0, g.jsx)("div", {
                        className: "cmn_dasdrd_table ffms-inherit table-fix block-fix scroll-cus validator_table",
                        children: (0, g.jsx)("div", {
                            className: "table-responsive",
                            children: (0, g.jsxs)("table", {
                                className: "table table-borderless fxd-layout tbl-mob",
                                children: [(0, g.jsx)("thead", {
                                    children: (0, g.jsxs)("tr", {
                                        children: [(0, g.jsx)("th", {
                                            children: "Name"
                                        }), (0, g.jsx)("th", {
                                            className: "fx-wdth",
                                            children: "Staked Amount"
                                        }), (0, g.jsx)("th", {
                                            children: "Self"
                                        }), (0, g.jsx)("th", {
                                            className: "",
                                            children: "Commission"
                                        }), (0, g.jsx)("th", {
                                            children: "Uptime"
                                        }), (0, g.jsx)("th", {
                                            className: "text-center",
                                            children: "Action"
                                        })]
                                    })
                                }), (0, g.jsxs)("tbody", {
                                    children: [!i && (null !== s && void 0 !== s && s.length ? s.map(((e, s) => {
                                        var t, a;
                                        return (0, g.jsxs)("tr", {
                                            children: [(0, g.jsx)("td", {
                                                children: (0, g.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, g.jsx)("span", {
                                                        className: "valMiniImageWrapper",
                                                        children: (0, g.jsx)("img", {
                                                            style: {
                                                                height: 36,
                                                                width: 36
                                                            },
                                                            src: null !== (t = e.logoUrl) && void 0 !== t && t.startsWith("http") ? e.logoUrl : "../../../assets/images/American_Shib.png",
                                                            onError: E,
                                                            className: "valMiniImage"
                                                        })
                                                    }), (0, g.jsx)(n(), {
                                                        href: `/all-validator/validator-update/${e.signer}`,
                                                        passHref: !0,
                                                        children: (0, g.jsx)("p", {
                                                            className: "text-sm text-secondaryHub-300 underline",
                                                            children: e.name ? e.name : "-"
                                                        })
                                                    })]
                                                })
                                            }), (0, g.jsx)("td", {
                                                children: (0, c.vA)(+e.totalstaked)
                                            }), (0, g.jsxs)("td", {
                                                children: [e.selfpercent ? (0, c.vA)(+e.selfpercent) : "0", "%"]
                                            }), (0, g.jsx)("td", {
                                                children: (0, g.jsxs)("span", {
                                                    className: "precent-td",
                                                    children: [null === e || void 0 === e ? void 0 : e.commissionrate, " %"]
                                                })
                                            }), (0, g.jsxs)("td", {
                                                children: [null === (a = e.uptimePercent) || void 0 === a ? void 0 : a.toFixed(c.vT), "%"]
                                            }), (0, g.jsx)("td", {
                                                className: "text-start",
                                                children: "Validator" === k && 1 === x ? (0, g.jsx)(n(), {
                                                    href: `/all-validator/${e.signer}`,
                                                    passHref: !0,
                                                    children: (0, g.jsxs)("div", {
                                                        className: "delegate_btn",
                                                        children: [(0, g.jsx)("p", {
                                                            className: "btn primary-btn w-100",
                                                            children: "View"
                                                        }), (0, g.jsx)("div", {
                                                            className: "tool-desc tool-desc-sm",
                                                            children: "View Validator Info."
                                                        })]
                                                    })
                                                }) : (0, g.jsxs)("div", {
                                                    className: "delegate_btn flex justify-center",
                                                    children: [(0, g.jsx)("button", {
                                                        className: "px-3 py-2 rounded-lg primary-btn text-wrap",
                                                        disabled: !!(!L || e.uptimePercent <= c.dB || e.contractAddress == v.contractAddress || 0 === e.lastcheckpointsigned && e.fundamental === c.bG),
                                                        onClick: () => {
                                                            f(e);
                                                            (0, u.S)().trackEvent({
                                                                eventType: "click-delegate",
                                                                eventTypeOverride: "ad-click",
                                                                redirect_url: "NA"
                                                            }), "migrate-stake" === O.asPath.split("/")[1] ? A(!0) : C(!0)
                                                        },
                                                        children: _(e)
                                                    }), D(e)]
                                                })
                                            })]
                                        }, null === e || void 0 === e ? void 0 : e.signer)
                                    })) : (0, g.jsx)("tr", {
                                        children: (0, g.jsx)("td", {
                                            colSpan: 6,
                                            children: (0, g.jsx)("div", {
                                                className: "no-found",
                                                children: (0, g.jsx)("img", {
                                                    src: "../../../assets/images/no-record.png"
                                                })
                                            })
                                        })
                                    })), i && (0, g.jsx)("tr", {
                                        children: (0, g.jsx)("td", {
                                            colSpan: 6,
                                            children: (0, g.jsx)(m.Z, {
                                                type: "table",
                                                rows: 13,
                                                cols: 6
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        39958: function(e, s, t) {
            t.r(s), t.d(s, {
                default: function() {
                    return P
                }
            });
            var a = t(96486),
                i = t.n(a),
                n = t(70552),
                l = t(67294),
                r = t(36617),
                c = t(60579),
                d = t(99204),
                o = t(97552),
                m = t(73640),
                h = t(11163),
                u = t(53737),
                p = t(19965),
                g = t(18541),
                v = t(59499),
                x = t(93189),
                j = t(71356);

            function f(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function b(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? f(Object(t), !0).forEach((function(s) {
                        (0, v.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            var N = (e, s) => {
                    const {
                        validatorsList: t
                    } = (0, j.Z)(), a = () => t(e).then((e => s ? e.data.validatorsList.filter((e => e.uptimePercent > 0)) : e.data.validatorsList));
                    return b(b({}, (0, x.a)({
                        queryKey: ["validator_list", e, s],
                        queryFn: () => a()
                    })), {}, {
                        fetch: a
                    })
                },
                w = t(36375),
                k = t(91089),
                y = t(46553),
                S = t(54331),
                C = t(85893);
            var P = e => {
                let {
                    withStatusFilter: s,
                    valStatus: t
                } = e;
                const v = (0, h.useRouter)(),
                    {
                        0: x,
                        1: j
                    } = (0, l.useState)(!1),
                    {
                        0: f,
                        1: b
                    } = (0, l.useState)([]),
                    {
                        0: P,
                        1: A
                    } = (0, l.useState)(!0),
                    {
                        0: O,
                        1: L
                    } = (0, l.useState)(!0),
                    {
                        0: D,
                        1: E
                    } = (0, l.useState)(""),
                    {
                        0: _,
                        1: B
                    } = (0, l.useState)(""),
                    {
                        0: Z,
                        1: V
                    } = (0, l.useState)("Uptime"),
                    [T, I] = (0, g.ub)(),
                    {
                        chainId: U = 1
                    } = (0, w.aQ)(),
                    {
                        0: M,
                        1: G
                    } = (0, l.useState)(!1),
                    {
                        isError: F,
                        isLoading: R,
                        isFetched: W,
                        data: $,
                        fetch: z
                    } = N(_, O),
                    H = async () => {
                        B(D)
                    };
                (0, l.useEffect)((() => {
                    "" == D && H()
                }), [D]), (0, l.useEffect)((() => {
                    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && A(!1)
                }), []);
                const K = i().debounce((e => {
                    (0, k.S)().trackEvent({
                        eventType: "search",
                        eventTypeOverride: "shibarium-validator-search",
                        searchText: e
                    })
                }), 500);
                (0, l.useEffect)((() => {
                    $ && (() => {
                        let e = [];
                        e = O ? "Validator" == T ? $ && $.filter((e => (null === e || void 0 === e ? void 0 : e.uptimePercent) >= m.dB)) : $ && $.filter((e => (null === e || void 0 === e ? void 0 : e.uptimePercent) >= m.dB)).sort(((e, s) => (e.fundamental != m.mU) > (s.fundamental != m.mU) ? -1 : 0)) : $ && $.filter((e => (null === e || void 0 === e ? void 0 : e.uptimePercent) <= m.dB)), b(e)
                    })()
                }), [$, O]), (0, l.useEffect)((() => {
                    Q("Uptime", "uptimePercent", "number")
                }), []), (0, l.useEffect)((() => {
                    U == S.ChainId.ETHEREUM || U == S.ChainId.SEPOLIA ? G(!1) : G(!0), H()
                }), [U]);
                const Q = (e, s, t) => {
                    try {
                        let i;
                        V(e), "number" === t ? (i = f, i.sort(((e, t) => Number(t[s]) - Number(e[s])))) : i = "Delegator" == T ? (0, a.orderBy)(f, s, "asc").sort(((e, s) => (e.fundamental != m.mU) > (s.fundamental != m.mU) ? -1 : 0)) : (0, a.orderBy)(f, s, "asc"), b(i)
                    } catch (i) {
                        o.uT("onSort", i)
                    }
                };
                return (0, C.jsxs)(C.Fragment, {
                    children: [R && (0, C.jsx)(d.default, {}), (0, C.jsx)("section", {
                        className: "pb-4 table-section pb-lg-5 active-inactive",
                        children: (0, C.jsxs)("div", {
                            className: "container",
                            children: [(0, C.jsxs)("div", {
                                className: "heading-sec",
                                children: [(0, C.jsx)("h2", {
                                    className: "sub-head ff-mos",
                                    children: "migrate-stake" === v.asPath.split("/")[1] ? "" : "All Validators"
                                }), (0, C.jsx)("h6", {
                                    children: "Chose a Validator to stake bone and earn rewards"
                                })]
                            }), (0, C.jsxs)("div", {
                                className: "d-flex align-items-center btns-space tab-btns",
                                children: [(0, C.jsx)("div", {
                                    className: "me-3",
                                    children: (0, C.jsx)("p", {
                                        onClick: () => {
                                            b([]), L(!0)
                                        },
                                        className: "btn black-btn ff-mos " + (O ? "btn-active" : ""),
                                        title: "",
                                        children: (0, C.jsx)("span", {
                                            children: "Active"
                                        })
                                    })
                                }), (0, C.jsx)("div", {
                                    children: (0, C.jsx)("p", {
                                        onClick: () => {
                                            b([]), L(!1)
                                        },
                                        className: "btn black-btn ff-mos " + (O ? "" : "btn-active"),
                                        title: "",
                                        children: (0, C.jsx)("span", {
                                            children: "Inactive"
                                        })
                                    })
                                })]
                            }), (0, C.jsxs)("div", {
                                className: "filter-row ff-mos",
                                children: [(0, C.jsxs)("div", {
                                    className: "left-section icn-wrap d-flex justify-content-between",
                                    children: [(0, C.jsx)("input", {
                                        className: "custum-search w-100 me-2 ",
                                        type: "search ",
                                        placeholder: "Search By Validator Name or Validator Address",
                                        value: D,
                                        onChange: e => {
                                            E(e.target.value), K(e.target.value)
                                        }
                                    }), (0, C.jsx)("div", {
                                        className: `search-icon-block btn btn-active black-btn ff-mos ${!D&&"disabled"}`,
                                        onClick: () => H(),
                                        children: (0, C.jsx)(u.Z, {
                                            width: 20
                                        })
                                    }), D ? (0, C.jsx)("div", {
                                        className: "icon-block custom-icon-block",
                                        onClick: () => E(""),
                                        children: (0, C.jsx)(p.Z, {
                                            width: 20,
                                            color: "black"
                                        })
                                    }) : null]
                                }), (0, C.jsxs)("div", {
                                    className: "right-section",
                                    children: [(0, C.jsxs)("div", {
                                        className: " drop-sec dropdwn-sec",
                                        children: [(0, C.jsx)("label", {
                                            className: "head-xsm fw-600",
                                            htmlFor: "Auction",
                                            children: (0, C.jsx)("span", {
                                                className: "top-low-spc pe-2 align",
                                                children: "Sort by"
                                            })
                                        }), (0, C.jsxs)(n.Z, {
                                            className: "dark-dd cus-dropdown position-relative d-inline-block",
                                            children: [(0, C.jsx)("i", {
                                                className: "arrow-down"
                                            }), (0, C.jsx)(n.Z.Toggle, {
                                                id: "dropdown-basic",
                                                children: (0, C.jsx)("span", {
                                                    children: Z
                                                })
                                            }), (0, C.jsxs)(n.Z.Menu, {
                                                children: [(0, C.jsx)(n.Z.Item, {
                                                    onClick: () => Q("Commission", "commissionrate", "number"),
                                                    children: "Commission"
                                                }), (0, C.jsx)(n.Z.Item, {
                                                    onClick: () => Q("Staked Amount", "totalstaked", "number"),
                                                    children: "Staked Amount"
                                                }), (0, C.jsx)(n.Z.Item, {
                                                    className: "ff-mos",
                                                    onClick: () => Q("Uptime", "uptimePercent", "number"),
                                                    children: "Uptime"
                                                })]
                                            })]
                                        })]
                                    }), (0, C.jsxs)("div", {
                                        className: "layout-sec",
                                        children: [(0, C.jsxs)("div", {
                                            onClick: () => A(!0),
                                            className: P ? "list blk-active" : "list",
                                            children: [(0, C.jsx)("p", {
                                                className: "mb-0",
                                                children: (0, C.jsx)("img", {
                                                    className: "white-icon",
                                                    src: "../../assets/images/list-white.png"
                                                })
                                            }), (0, C.jsx)("p", {
                                                className: "mb-0",
                                                children: (0, C.jsx)("img", {
                                                    className: "grey-icon",
                                                    src: "../../assets/images/list-grey.png"
                                                })
                                            })]
                                        }), (0, C.jsxs)("div", {
                                            onClick: () => A(!1),
                                            className: P ? "cus-grid" : "cus-grid blk-active",
                                            children: [(0, C.jsx)("p", {
                                                className: "mb-0",
                                                children: (0, C.jsx)("img", {
                                                    className: "white-icon",
                                                    src: "../../assets/images/grid-white.png"
                                                })
                                            }), (0, C.jsx)("p", {
                                                className: "mb-0",
                                                children: (0, C.jsx)("img", {
                                                    className: "grey-icon",
                                                    src: "../../assets/images/grid-grey.png"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), P ? (0, C.jsx)(r.default, {
                                migrateData: {},
                                loading: R,
                                searchKey: D,
                                validatorsList: f,
                                valStatus: t
                            }) : (0, C.jsx)("div", {
                                className: "grid-view-wrap",
                                children: (0, C.jsx)(c.default, {
                                    migrateData: {},
                                    loading: R,
                                    searchKey: D,
                                    validatorsList: f,
                                    valStatus: t
                                })
                            })]
                        })
                    }), (0, C.jsx)(y.default, {
                        title: 109 == U ? "Switch to Ethereum Mainnet" : "Switch to Sepolia",
                        show: M,
                        setshow: () => {
                            G(!0)
                        },
                        externalCls: "faucet-pop no-lft chain_warning"
                    })]
                })
            }
        },
        99204: function(e, s, t) {
            t.r(s);
            t(67294);
            var a = t(41797),
                i = t(85893);
            s.default = () => (0, i.jsx)("div", {
                className: "fade-bg",
                children: (0, i.jsx)("div", {
                    className: "spinner-outer position-relative",
                    children: (0, i.jsx)("div", {
                        className: "loading-spinner",
                        children: (0, i.jsx)(a.gy, {
                            color: "#f06500",
                            height: 80,
                            width: 80
                        })
                    })
                })
            })
        },
        71356: function(e, s, t) {
            var a = t(69574);
            s.Z = () => {
                const e = (0, a.Z)();
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
        },
        53737: function(e, s, t) {
            var a = t(67294);
            const i = a.forwardRef((function(e, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: s
                }, e), a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }))
            }));
            s.Z = i
        },
        19965: function(e, s, t) {
            var a = t(67294);
            const i = a.forwardRef((function(e, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: s
                }, e), a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            }));
            s.Z = i
        }
    }
]);