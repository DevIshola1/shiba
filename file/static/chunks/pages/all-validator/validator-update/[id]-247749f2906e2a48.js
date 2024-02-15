(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6695], {
        52886: function(e, s, l) {
            "use strict";
            var a = l(67294),
                t = l(14691),
                i = l(85893);
            const n = "...",
                d = e => {
                    let {
                        totalCount: s,
                        pageSize: l,
                        siblingCount: t = 1,
                        currentPage: i
                    } = e;
                    return (0, a.useMemo)((() => {
                        const e = Math.ceil(s / l);
                        if (t + 5 >= e) return r(1, e);
                        const a = Math.max(i - t, 1),
                            d = Math.min(i + t, e),
                            c = a > 2,
                            o = d < e - 2,
                            u = e;
                        if (!c && o) {
                            return [...r(1, 3 * t), n, e]
                        }
                        if (c && !o) {
                            let s = r(e - (3 + 2 * t) + 1, e);
                            return [1, n, ...s]
                        }
                        if (c && o) {
                            let e = r(a, d);
                            return [1, n, ...e, n, u]
                        }
                        return null
                    }), [s, l, t, i]) || []
                },
                r = (e, s) => {
                    let l = s - e + 1;
                    return Array.from({
                        length: l
                    }, ((s, l) => l + e))
                };
            s.Z = e => {
                let {
                    totalCount: s,
                    pageSize: l,
                    onPageChange: a,
                    siblingCount: r = 1,
                    currentPage: c
                } = e;
                const o = d({
                    currentPage: c,
                    totalCount: s,
                    siblingCount: r,
                    pageSize: l
                });
                let u = o[o.length - 1];
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "row ",
                        children: [(0, i.jsxs)("div", {
                            className: "col-md-4 d-flex align-items-center",
                            children: [c !== u && s > 1 && (0, i.jsxs)("span", {
                                className: "fw-700 text-white",
                                children: ["Showing ", (c - 1) * l + 1, "-", s > l ? c * l : s, " of", " ", s]
                            }), c === u && s > 1 && (0, i.jsxs)("span", {
                                className: "fw-700 text-white",
                                children: ["Showing ", (c - 1) * l + 1, "-", s, " of", " ", s]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "col-md-8 cus-space",
                            children: (0, i.jsx)("div", {
                                className: "cus-pagination",
                                children: (0, i.jsxs)("ul", {
                                    className: "pagination justify-content-end",
                                    children: [(0, i.jsx)("li", {
                                        className: "page-item " + (1 === c ? "disabled" : ""),
                                        children: (0, i.jsx)(t.Z, {
                                            className: "page-link",
                                            onClick: e => {
                                                e.preventDefault(), a(c - 1)
                                            },
                                            children: (0, i.jsx)("span", {
                                                children: "Previous"
                                            })
                                        })
                                    }), o.map((e => e === n ? (0, i.jsx)("li", {
                                        className: "pagination-item dots",
                                        children: "\u2026"
                                    }, e) : (0, i.jsx)("li", {
                                        className: "page-item " + (e === c ? "active" : ""),
                                        onClick: () => a(e),
                                        children: (0, i.jsx)(t.Z, {
                                            className: "page-link",
                                            onClick: e => e.preventDefault(),
                                            children: (0, i.jsx)("span", {
                                                children: e
                                            })
                                        })
                                    }, e))), (0, i.jsx)("li", {
                                        className: "page-item " + (c === u ? "disabled" : ""),
                                        onClick: () => {
                                            a(c + 1)
                                        },
                                        children: (0, i.jsx)(t.Z, {
                                            className: "page-link",
                                            onClick: e => e.preventDefault(),
                                            children: (0, i.jsx)("span", {
                                                children: "Next"
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        24061: function(e, s, l) {
            "use strict";
            l(67294);
            var a = l(42923),
                t = l(85893);
            s.Z = function(e) {
                let {
                    type: s,
                    rows: l,
                    cols: i
                } = e;
                return "table" === s ? (0, t.jsx)("div", {
                    className: "cus-shimer",
                    children: (0, t.jsx)(a.Jk, {
                        row: l,
                        col: i
                    })
                }) : null
            }
        },
        55073: function(e, s, l) {
            "use strict";
            l.d(s, {
                M: function() {
                    return i
                }
            });
            var a = l(93189),
                t = l(71356);
            const i = e => {
                const {
                    getValidatorsDetail: s
                } = (0, t.Z)();
                return (0, a.a)({
                    enabled: !!e,
                    queryKey: ["validator_detail", e],
                    queryFn: () => s(e.toString()).then((e => {
                        var s, l;
                        return null === e || void 0 === e || null === (s = e.data) || void 0 === s || null === (l = s.data) || void 0 === l ? void 0 : l.validatorSet
                    }))
                })
            }
        },
        88842: function(e, s, l) {
            "use strict";
            l.r(s);
            var a = l(52886),
                t = l(67294),
                i = l(57333),
                n = l(3688),
                d = l(97552),
                r = l(24061),
                c = l(85893);
            s.default = e => {
                let {
                    allCheckpoints: s,
                    loading: l
                } = e;
                const {
                    0: o,
                    1: u
                } = (0, t.useState)([]), {
                    0: x,
                    1: h
                } = (0, t.useState)(1);
                (0, t.useEffect)((() => {
                    s && u(s.slice(0, 40))
                }), [s]);
                return (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)("div", {
                        className: "h-auto p-4 pt-0 cus-card ",
                        children: [(0, c.jsx)("div", {
                            className: "cmn_dasdrd_table cmn-tb checkpoint-table",
                            children: (0, c.jsx)("div", {
                                className: "table-responsive",
                                children: (0, c.jsxs)("table", {
                                    className: "table table-borderless",
                                    children: [(0, c.jsx)("thead", {
                                        children: (0, c.jsxs)("tr", {
                                            children: [(0, c.jsx)("th", {
                                                children: "Checkpoint"
                                            }), (0, c.jsx)("th", {
                                                children: "Start block number"
                                            }), (0, c.jsx)("th", {
                                                children: "End block number"
                                            }), (0, c.jsx)("th", {
                                                children: "Result"
                                            }), (0, c.jsx)("th", {
                                                className: "",
                                                children: (0, c.jsx)("div", {
                                                    className: "tb-txt",
                                                    children: "Time"
                                                })
                                            })]
                                        })
                                    }), (0, c.jsxs)("tbody", {
                                        children: [l ? (0, c.jsx)("tr", {
                                            children: (0, c.jsx)("td", {
                                                colSpan: 5,
                                                children: (0, c.jsx)(r.Z, {
                                                    type: "table",
                                                    rows: 13,
                                                    cols: 5
                                                })
                                            })
                                        }) : (null === o || void 0 === o ? void 0 : o.length) > 0 && o.map(((e, s) => (0, c.jsxs)("tr", {
                                            children: [(0, c.jsx)("td", {
                                                children: (0, c.jsx)(i.Z, {
                                                    displayType: "text",
                                                    thousandSeparator: !0,
                                                    value: e.checkpointNumber
                                                })
                                            }), (0, c.jsx)("td", {
                                                children: e.startBlock
                                            }), (0, c.jsx)("td", {
                                                children: e.endBlock
                                            }), (0, c.jsxs)("td", {
                                                children: [(0, c.jsx)("span", {
                                                    children: (0, c.jsx)("img", {
                                                        src: "../../../assets/images/green-tick2.png"
                                                    })
                                                }), (0, c.jsx)("span", {
                                                    children: e.signed ? "Success" : "Not completed"
                                                })]
                                            }), (0, c.jsx)("td", {
                                                children: (0, c.jsx)(n.Z, {
                                                    datetime: 1e3 * e.timestamp
                                                })
                                            })]
                                        }, e.checkpointNumber))), !l && !o.length && (0, c.jsx)("tr", {
                                            className: "no_record_wrapper",
                                            children: (0, c.jsx)("td", {
                                                colSpan: 5,
                                                className: "no_record text-left",
                                                children: (0, c.jsx)("img", {
                                                    className: "d-inline-block mb-3",
                                                    src: "../../../assets/images/no-record.png"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, c.jsx)("div", {
                            className: "mt-sm-4 mt-3",
                            children: o.length > 0 ? (0, c.jsx)(a.Z, {
                                onPageChange: e => {
                                    try {
                                        const l = s.slice(40 * (e - 1), 40 * e);
                                        l.sort(((e, s) => e - s)), u(l), h(e)
                                    } catch (l) {
                                        d.uT("pageChangeHandler", l)
                                    }
                                },
                                pageSize: 40,
                                totalCount: s.length || 1,
                                currentPage: x
                            }) : null
                        })]
                    })
                })
            }
        },
        97299: function(e, s, l) {
            "use strict";
            l.r(s);
            var a = l(52886),
                t = l(67294),
                i = l(57333),
                n = l(73640),
                d = l(97552),
                r = l(85893);
            s.default = e => {
                let {
                    allDelegators: s
                } = e;
                const {
                    0: l,
                    1: c
                } = (0, t.useState)(0), {
                    0: o,
                    1: u
                } = (0, t.useState)([]), {
                    0: x,
                    1: h
                } = (0, t.useState)(1);
                (0, t.useEffect)((() => {
                    s && u(s.slice(0, 40))
                }), [s]), (0, t.useEffect)((() => {
                    (0, n.K9)().then((e => {
                        c(e)
                    }))
                }), []);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: "h-auto p-4 pt-0 cus-card",
                        children: [(0, r.jsxs)("div", {
                            className: "cmn_dasdrd_table dt-table",
                            children: [(0, r.jsx)("div", {
                                className: "table-responsive",
                                children: (0, r.jsxs)("table", {
                                    className: "table table-borderless ff-mos align-txt",
                                    children: [(0, r.jsx)("thead", {
                                        children: (0, r.jsxs)("tr", {
                                            children: [(0, r.jsx)("th", {
                                                children: "Accounts"
                                            }), (0, r.jsx)("th", {
                                                children: "Timestamp"
                                            }), (0, r.jsx)("th", {
                                                className: "text-center",
                                                children: "Amount"
                                            }), (0, r.jsx)("th", {
                                                children: "USD Price"
                                            })]
                                        })
                                    }), (0, r.jsx)("tbody", {
                                        children: o.length > 0 ? o.map(((e, s) => (0, r.jsxs)("tr", {
                                            children: [(0, r.jsxs)("td", {
                                                children: [(0, r.jsx)("span", {
                                                    children: (0, r.jsx)("img", {
                                                        src: "../../../assets/images/shiba-round-icon.png"
                                                    })
                                                }), (0, r.jsx)("span", {
                                                    className: "word-br",
                                                    children: e.address
                                                })]
                                            }), (0, r.jsx)("td", {
                                                children: (0, r.jsx)("span", {
                                                    className: "amt-value pe-1",
                                                    children: e.updatedAt.substring(0, e.updatedAt.length - 5).split("T").join(", ")
                                                })
                                            }), (0, r.jsx)("td", {
                                                children: (0, r.jsx)("span", {
                                                    className: "amt-value pe-1",
                                                    children: (0, r.jsx)(i.Z, {
                                                        displayType: "text",
                                                        thousandSeparator: !0,
                                                        value: (0, n.vA)(+e.stake)
                                                    })
                                                })
                                            }), (0, r.jsx)("td", {
                                                children: (0, r.jsx)("span", {
                                                    className: "amt-txt pe-1 span-child",
                                                    children: (0, r.jsx)(i.Z, {
                                                        displayType: "text",
                                                        prefix: "$ ",
                                                        thousandSeparator: !0,
                                                        value: (0, n.vA)(+e.stake * l)
                                                    })
                                                })
                                            })]
                                        }, null === e || void 0 === e ? void 0 : e.address))) : null
                                    })]
                                })
                            }), 0 === o.length && (0, r.jsx)("div", {
                                className: "no-found top-spcsm",
                                children: (0, r.jsx)("div", {
                                    children: (0, r.jsx)("div", {
                                        className: "text-center",
                                        children: (0, r.jsx)("img", {
                                            className: "d-inline-block mb-3",
                                            src: "../../../assets/images/no-record.png"
                                        })
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mt-sm-4 mt-3",
                            children: o.length > 0 ? (0, r.jsx)(a.Z, {
                                onPageChange: e => {
                                    try {
                                        const l = s.slice(40 * (e - 1), 40 * e);
                                        u(l), h(e)
                                    } catch (l) {
                                        d.uT("pageChangeHandler", l)
                                    }
                                },
                                pageSize: 40,
                                totalCount: s.length || 1,
                                currentPage: x
                            }) : null
                        })]
                    })
                })
            }
        },
        45618: function(e, s, l) {
            "use strict";
            l.r(s);
            l(67294);
            var a = l(38538),
                t = l(73192),
                i = l(97299),
                n = l(88842),
                d = l(55073),
                r = l(85893);
            s.default = e => {
                var s, l, c, o;
                let {
                    id: u
                } = e;
                const x = (0, d.M)(u);
                return (0, r.jsx)("section", {
                    className: "update-section pt-5 pb-4 darkbg-2 pb-lg-5 darkBg-valDetail",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                            className: "row",
                            children: (0, r.jsx)("div", {
                                className: "col-lg-12 detail cus-card",
                                children: (0, r.jsxs)(a.Z, {
                                    defaultActiveKey: "Delegators",
                                    id: "controlTabView",
                                    className: "mb-3",
                                    children: [(0, r.jsx)(t.Z, {
                                        eventKey: "Delegators",
                                        title: `Delegators (${null===x||void 0===x||null===(s=x.data)||void 0===s?void 0:s.delegators.length})`,
                                        children: (0, r.jsx)(i.default, {
                                            allDelegators: (null === x || void 0 === x || null === (l = x.data) || void 0 === l ? void 0 : l.delegators) || []
                                        })
                                    }), (0, r.jsx)(t.Z, {
                                        eventKey: "Checkpoints",
                                        title: `Checkpoints (${null===x||void 0===x||null===(c=x.data)||void 0===c?void 0:c.checkpoints.length})`,
                                        children: (0, r.jsx)(n.default, {
                                            allCheckpoints: (null === x || void 0 === x || null === (o = x.data) || void 0 === o ? void 0 : o.checkpoints) || [],
                                            loading: x.isLoading
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        98930: function(e, s, l) {
            "use strict";
            l.r(s);
            l(67294);
            var a = l(32470),
                t = l(85893);
            s.default = e => {
                let {
                    id: s
                } = e;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("div", {
                        className: "mb-32 validator-section"
                    }), (0, t.jsx)(a.default, {})]
                })
            }
        },
        42022: function(e, s, l) {
            "use strict";
            l.r(s);
            var a = l(67294),
                t = l(53854),
                i = l(57333),
                n = l(73640),
                d = l(36375),
                r = l(97552),
                c = l(20684),
                o = (l(6292), l(55073)),
                u = l(80857),
                x = l(76704),
                h = l(47933),
                m = l(85893);
            s.default = e => {
                let {
                    id: s
                } = e;
                const {
                    chainId: l = 1
                } = (0, d.aQ)(), {
                    user: v
                } = (0, h.bN)(), {
                    0: p,
                    1: j
                } = (0, a.useState)(0), {
                    0: g,
                    1: f
                } = (0, a.useState)(0), N = (0, o.M)(s), {
                    0: b,
                    1: w
                } = (0, a.useState)(0), k = (0, u.Z)(), y = (0, x.S)("abis/plasma/StakeManager.json"), S = v && ((null === v || void 0 === v ? void 0 : v.wallet) || (null === v || void 0 === v ? void 0 : v.email));
                (0, a.useEffect)((() => {
                    var e, s;
                    C(null === (e = N.data) || void 0 === e || null === (s = e.validatorInfo) || void 0 === s ? void 0 : s.id)
                }), [N.data, y]), (0, a.useEffect)((() => {
                    var e;
                    N.data && (w(null === N || void 0 === N || null === (e = N.data) || void 0 === e ? void 0 : e.validatorInfo), console.log("validatorInfo", b))
                }), [N.data]);
                const C = async e => {
                    try {
                        if (l == k.L1Chain) {
                            if (!y) return;
                            let s = new(k.L1Block().eth.Contract)(y, k.contractAddress.STAKE_MANAGER_PROXY);
                            const l = await s.methods.validators(e).call();
                            console.log({
                                valStake: l
                            });
                            let a = (+l.amount + +l.delegatedAmount) / Math.pow(10, n.wt),
                                t = +l.amount / Math.pow(10, n.wt);
                            f(t), j(a)
                        }
                    } catch (s) {
                        r.uT("getTotalSupply", s)
                    }
                };
                return (0, m.jsx)("div", {
                    className: "mb-32 overview-section",
                    children: (0, m.jsxs)("div", {
                        className: "container",
                        children: [(0, m.jsx)("h3", {
                            className: "sec-heading",
                            children: "Staking Overview"
                        }), (0, m.jsxs)("div", {
                            className: "row st-row gy-3 gy-lg-0",
                            children: [(0, m.jsx)("div", {
                                className: (S ? "col-md-6 col-lg-3" : "col-6") + " st-col",
                                children: (0, m.jsxs)("div", {
                                    className: "staking-item outline-card outcard-pad-2",
                                    children: [(0, m.jsxs)("div", {
                                        className: "top-item pb-3",
                                        children: [(0, m.jsx)("p", {
                                            className: "fs-14",
                                            children: "TOTAL AMOUNT STAKED"
                                        }), (0, m.jsx)(c.u, {
                                            id: "amnt-staked",
                                            style: {
                                                backgroundColor: "#212640",
                                                fontFamily: "'Sora', sans-serif",
                                                color: "#F5F7FC",
                                                opacity: 1,
                                                fontSize: "14px",
                                                fontWeight: "400",
                                                zIndex: 99
                                            }
                                        }), (0, m.jsx)("div", {
                                            className: "tool",
                                            "data-tooltip-id": "amnt-staked",
                                            "data-tooltip-content": "Total Bone staked on this validator",
                                            "data-tooltip-place": "top",
                                            children: (0, m.jsx)(t.if7, {})
                                        })]
                                    }), (0, m.jsx)("div", {
                                        className: "bottom-item",
                                        children: (0, m.jsxs)("h6", {
                                            className: "",
                                            children: [(0, m.jsx)(i.Z, {
                                                displayType: "text",
                                                thousandSeparator: !0,
                                                value: (0, n.vA)(p)
                                            }), "", "BONE"]
                                        })
                                    })]
                                })
                            }), S && !1]
                        })]
                    })
                })
            }
        },
        18497: function(e, s, l) {
            "use strict";
            l.r(s);
            var a = l(52056),
                t = l(55073),
                i = l(11163),
                n = l(73640),
                d = l(99204),
                r = l(42022),
                c = l(45618),
                o = l(6102),
                u = l(20684),
                x = (l(6292), l(67294)),
                h = l(88191),
                m = l(18541),
                v = l(26482),
                p = l(98930),
                j = l(47933),
                g = l(36375),
                f = l(85893);
            s.default = function() {
                var e, s, l, N, b, w, k, y, S, C, _, I, T, E, A, M, P, Z, F, D;
                const {
                    0: O,
                    1: z
                } = (0, x.useState)(!1), B = (0, i.useRouter)(), {
                    chainId: K = 1
                } = (0, g.aQ)(), {
                    id: L
                } = B.query, {
                    data: R,
                    isLoading: U
                } = (0, t.M)(L), [q, H] = (0, m.ub)(), {
                    0: V,
                    1: W
                } = (0, x.useState)(!1), {
                    user: X
                } = (0, j.bN)(), {
                    0: $,
                    1: G
                } = (0, x.useState)(null);
                (0, x.useEffect)((() => {
                    null != $ && $ != K && (window.location.href = "/"), G(K)
                }), [K]);
                const Q = e => (null === e || void 0 === e ? void 0 : e.substring(0, Math.min(4, null === e || void 0 === e ? void 0 : e.length))) + "..." + (null === e || void 0 === e ? void 0 : e.substring((null === e || void 0 === e ? void 0 : e.length) - 4));
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(a.default, {}), U && (0, f.jsx)(d.default, {}), O && (0, f.jsx)(h.default, {
                        donateModal: O,
                        setDonateModal: z,
                        data: R
                    }), V && (0, f.jsx)(v.default, {
                        showdelegatepop: V,
                        setdelegatepop: W,
                        data: null === R || void 0 === R ? void 0 : R.validatorInfo
                    }, null === R || void 0 === R || null === (e = R.validatorInfodata) || void 0 === e ? void 0 : e.signer), (0, f.jsxs)("main", {
                        className: "main-content full-vh font-up ffms-inherit staking-main",
                        children: [(0, f.jsx)("div", {
                            className: "card-banner mb-32",
                            children: (0, f.jsxs)("div", {
                                className: "container flex items-center flex-col lg:flex-row justify-between space-x-4",
                                children: [(0, f.jsx)("div", {
                                    className: "w-full",
                                    children: (0, f.jsx)("div", {
                                        className: "p-[15px] mt-10 bg-gradient-to-b from-[#171717] to-[#1E1E1E]  rad-25",
                                        children: (0, f.jsx)("div", {
                                            className: "row align-items-center",
                                            children: (0, f.jsx)("div", {
                                                className: "",
                                                children: (0, f.jsx)("div", {
                                                    className: "card-content min-h-[221px]",
                                                    children: (0, f.jsxs)("a", {
                                                        href: "https://news.shib.io",
                                                        target: "__blank",
                                                        className: "w-full flex justify-start items-center hover:text-white",
                                                        children: [(0, f.jsx)("img", {
                                                            className: "w-[100px] h-auto md:w-[242px]",
                                                            src: "../../../assets/images/shiba-inspace.png",
                                                            alt: ""
                                                        }), (0, f.jsxs)("div", {
                                                            className: "pl-[5px] pl-[50px] flex justify-center flex-col space-y-2 md:space-y-6 w-full",
                                                            children: [(0, f.jsxs)("h3", {
                                                                className: " text-center justify-center",
                                                                children: [(0, f.jsxs)("div", {
                                                                    className: "inline !text-[12px] md:!text-[20px] leading-[24px] font-normal leading-2",
                                                                    children: ["Read the Shib", " "]
                                                                }), (0, f.jsx)("img", {
                                                                    alt: "shib logo",
                                                                    className: "mx-1 md:mx-2 relative inline bottom-1 w-4 md:w-8 object-fit-contain",
                                                                    src: "../../../assets/images/theshiblogo.png"
                                                                }), (0, f.jsxs)("div", {
                                                                    className: "inline !text-[12px] md:!text-[20px] leading-[24px] font-normal leading-2",
                                                                    children: [" ", "Magazine, gain a fresh perspective."]
                                                                })]
                                                            }), (0, f.jsx)("div", {
                                                                className: "flex justify-center items-center text-center",
                                                                children: (0, f.jsx)("button", {
                                                                    onClick: () => {
                                                                        window.open("https://news.shib.io", "_blank")
                                                                    },
                                                                    className: "text-[14px] md:text-lg bg-[#E9FE0B] text-[#000]  px-[28px] py-2.5 rounded-[14px]",
                                                                    children: "Latest Edition"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), (0, f.jsx)("div", {
                                    className: "relative top-[20px] w-full lg:w-auto",
                                    children: (0, f.jsxs)("a", {
                                        href: "https://www.shib.io/contactus",
                                        target: "__blank",
                                        className: "hover:text-white h-[10rem] md:h-[250px] w-full lg:w-[255px] bg-[#F06900] rad-25 py-2 md:py-5  flex space-y-2.5 md:space-y-4 justify-center flex-col items-center",
                                        children: [(0, f.jsx)("div", {
                                            children: (0, f.jsx)("h3", {
                                                className: "font-normal  text-center",
                                                children: (0, f.jsxs)("div", {
                                                    className: "text-[14px] leading-[18px] md:leading-[30px] md:text-[20px]",
                                                    children: ["Your Message, ", (0, f.jsx)("br", {}), " Our Platform"]
                                                })
                                            })
                                        }), (0, f.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, f.jsx)("img", {
                                                className: "img-fluid  ms-md-auto",
                                                src: "../../../assets/images/rocket.png",
                                                alt: ""
                                            })
                                        }), (0, f.jsx)("div", {
                                            children: (0, f.jsx)("button", {
                                                onClick: () => {
                                                    window.open("https://www.shib.io/contactus")
                                                },
                                                className: "text-[12px] md:text-lg bg-[#fff] text-[#000] px-[28px] py-2.5 rounded-[14px]",
                                                children: "Enquire Here"
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, f.jsx)("div", {
                            className: "mb-32",
                            children: (0, f.jsx)("div", {
                                className: "container",
                                children: (0, f.jsxs)("div", {
                                    className: "flex-card outline-card outcard-pad",
                                    children: [(0, f.jsx)("div", {
                                        className: "left-item mb-2 mb-md-3 mb-lg-0",
                                        children: (0, f.jsx)("img", {
                                            className: "img-fluid",
                                            src: null !== R && void 0 !== R && null !== (s = R.validatorInfo) && void 0 !== s && s.logoUrl ? (0, n.w_)(null === R || void 0 === R || null === (l = R.validatorInfo) || void 0 === l ? void 0 : l.logoUrl) : "../../../assets/images/American_Shib.png",
                                            alt: "shib-ico",
                                            onError: e => {
                                                e.currentTarget.src = "../../../assets/images/Shib-Logo.png", e.currentTarget.className = "error w-75"
                                            }
                                        })
                                    }), (0, f.jsxs)("div", {
                                        className: "right-item",
                                        children: [(0, f.jsxs)("h6", {
                                            className: "mb-2 d-flex align-items-center",
                                            children: [(0, f.jsx)("span", {
                                                className: "me-1",
                                                children: null === R || void 0 === R || null === (N = R.validatorInfo) || void 0 === N ? void 0 : N.name
                                            }), " ", 0 === (null === R || void 0 === R || null === (b = R.validatorInfo) || void 0 === b ? void 0 : b.uptimePercent) ? (0, f.jsx)("span", {
                                                className: "status-badge fs-12 fw-700 inactive",
                                                children: "Inactive"
                                            }) : (0, f.jsx)("span", {
                                                className: "status-badge fs-12 fw-700 active",
                                                children: "Active"
                                            })]
                                        }), "https://www.shib.io/" != (null === R || void 0 === R || null === (w = R.validatorInfo) || void 0 === w ? void 0 : w.description) ? (0, f.jsx)("a", {
                                            className: "mb-2 ff-thin",
                                            href: null === R || void 0 === R || null === (k = R.validatorInfo) || void 0 === k ? void 0 : k.description,
                                            children: null === R || void 0 === R || null === (y = R.validatorInfo) || void 0 === y ? void 0 : y.description
                                        }) : null, (0, f.jsxs)("ul", {
                                            className: "card-item-lst mb-3",
                                            children: [(0, f.jsxs)("li", {
                                                children: [(0, f.jsx)("span", {
                                                    className: "fs-14",
                                                    children: "Owner "
                                                }), (0, f.jsx)("span", {
                                                    className: "align-middle fs-14 wrapText ps-1",
                                                    children: Q((null === R || void 0 === R || null === (S = R.validatorInfo) || void 0 === S ? void 0 : S.staker) ? ? (null === R || void 0 === R || null === (C = R.validatorInfo) || void 0 === C ? void 0 : C.owner))
                                                }), (0, f.jsx)("span", {
                                                    className: "align-middle fs-14 cop-ico",
                                                    children: (0, f.jsx)(o.default, {
                                                        data: (null === R || void 0 === R || null === (T = R.validatorInfo) || void 0 === T ? void 0 : T.staker) ? ? (null === R || void 0 === R || null === (E = R.validatorInfo) || void 0 === E ? void 0 : E.owner),
                                                        copyText: "Owner"
                                                    })
                                                }, (null === R || void 0 === R || null === (_ = R.validatorInfo) || void 0 === _ ? void 0 : _.staker) ? ? (null === R || void 0 === R || null === (I = R.validatorInfo) || void 0 === I ? void 0 : I.owner))]
                                            }), (0, f.jsxs)("li", {
                                                children: [(0, f.jsxs)("span", {
                                                    className: "align-middle",
                                                    children: [(0, f.jsx)("span", {
                                                        className: "fs-14",
                                                        children: "Signer "
                                                    }), (0, f.jsx)("span", {
                                                        className: "align-middle fs-14 wrapText",
                                                        children: Q(null === R || void 0 === R || null === (A = R.validatorInfo) || void 0 === A ? void 0 : A.signer)
                                                    })]
                                                }), (0, f.jsx)("span", {
                                                    className: "align-middle fs-14 cop-ico",
                                                    children: (0, f.jsx)(o.default, {
                                                        data: null === R || void 0 === R || null === (P = R.validatorInfo) || void 0 === P ? void 0 : P.signer,
                                                        copyText: "Signer"
                                                    })
                                                }, null === R || void 0 === R || null === (M = R.validatorInfo) || void 0 === M ? void 0 : M.signer)]
                                            }), (0, f.jsxs)("li", {
                                                children: [(0, f.jsx)("span", {
                                                    className: "align-middle fs-14",
                                                    children: "Commission "
                                                }), (0, f.jsxs)("span", {
                                                    className: "align-middle fs-14",
                                                    children: [null === R || void 0 === R || null === (Z = R.validatorInfo) || void 0 === Z ? void 0 : Z.commissionPercent, "%"]
                                                })]
                                            }), (0, f.jsxs)("li", {
                                                children: [(0, f.jsx)("span", {
                                                    className: "align-middle fs-14",
                                                    children: "Condition "
                                                }), (0, f.jsx)("span", {
                                                    className: "align-middle suc-text fs-14",
                                                    children: (Y = null === R || void 0 === R || null === (F = R.validatorInfo) || void 0 === F ? void 0 : F.uptimePercent, Y >= 90 ? "Good" : Y >= 70 ? "Okay" : "Bad")
                                                })]
                                            }), (0, f.jsxs)("li", {
                                                children: [(0, f.jsx)("span", {
                                                    className: "align-middle fs-14",
                                                    children: "Uptime"
                                                }), (0, f.jsxs)("span", {
                                                    className: "align-middle fs-14",
                                                    children: [null === R || void 0 === R || null === (D = R.validatorInfo) || void 0 === D ? void 0 : D.uptimePercent, "%"]
                                                })]
                                            })]
                                        }), (0, f.jsxs)("div", {
                                            className: "hstack gap-2",
                                            children: [(0, f.jsxs)("div", {
                                                className: "group relative",
                                                children: [(0, f.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => W(!0),
                                                    disabled: !X || !X.wallet,
                                                    className: "btn primary-btn btn-shib-lg " + ("Validator" == q ? "d-none" : ""),
                                                    children: "Stake Bone"
                                                }), (0, f.jsx)("div", {
                                                    className: "hidden group-hover:block",
                                                    children: X && X.wallet ? null : (0, f.jsxs)("div", {
                                                        className: "absolute w-full top-[74px]",
                                                        children: [(0, f.jsx)("div", {
                                                            className: "h-0 w-0 border-x-8 border-x-transparent border-b-[18px] border-b-white-600 rotate-[0deg] bottom-[15px] left-[75px] relative"
                                                        }), (0, f.jsx)("div", {
                                                            className: "bg-white text-black rounded px-2 py-1 relative bottom-[24px] left-[8px] w-72 text-center",
                                                            children: "Connect Wallet to continue"
                                                        })]
                                                    })
                                                })]
                                            }), (0, f.jsx)(u.u, {
                                                id: "my-tooltip",
                                                style: {
                                                    backgroundColor: "#212640",
                                                    fontFamily: "'Sora', sans-serif",
                                                    color: "#F5F7FC",
                                                    opacity: 1,
                                                    fontSize: "14px",
                                                    fontWeight: "400"
                                                }
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, f.jsx)(r.default, {
                            id: L
                        }), (0, f.jsx)(p.default, {
                            id: L
                        }), (0, f.jsx)(c.default, {
                            id: L
                        })]
                    })]
                });
                var Y
            }
        },
        32470: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return t
                }
            });
            l(60439), l(7025), l(19360), l(12924);
            var a = l(85893);

            function t() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "slider-initiative mb-32"
                    })
                })
            }
        },
        99204: function(e, s, l) {
            "use strict";
            l.r(s);
            l(67294);
            var a = l(41797),
                t = l(85893);
            s.default = () => (0, t.jsx)("div", {
                className: "fade-bg",
                children: (0, t.jsx)("div", {
                    className: "spinner-outer position-relative",
                    children: (0, t.jsx)("div", {
                        className: "loading-spinner",
                        children: (0, t.jsx)(a.gy, {
                            color: "#f06500",
                            height: 80,
                            width: 80
                        })
                    })
                })
            })
        },
        5044: function(e, s, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/all-validator/validator-update/[id]", function() {
                return l(18497)
            }])
        },
        7025: function() {},
        19360: function() {},
        12924: function() {},
        60439: function() {}
    },
    function(e) {
        e.O(0, [296, 7627, 6556, 7425, 2077, 7333, 5982, 2923, 4022, 1797, 6108, 3384, 1661, 4680, 7851, 5455, 6482, 8191, 9774, 2888, 179], (function() {
            return s = 5044, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);