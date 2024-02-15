"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8191], {
        66563: function(e, a, n) {
            n.d(a, {
                Fu: function() {
                    return r
                },
                X5: function() {
                    return o
                },
                kJ: function() {
                    return i
                },
                wq: function() {
                    return s
                }
            });
            var t = n(54331);
            const o = t.ChainId.SHIBARIUM,
                r = t.ChainId.SEPOLIA,
                s = (t.ChainId.ETHEREUM, t.ChainId.SHIBARIUM),
                i = t.ChainId.ETHEREUM
        },
        15254: function(e, a, n) {
            var t = n(34864),
                o = n(49552),
                r = n.n(o),
                s = n(36375);
            a.Z = () => {
                const {
                    library: e,
                    account: a
                } = (0, s.aQ)();
                return async n => {
                    const o = t.b[n];
                    r().set("chainId", n, o);
                    try {
                        await (null === e || void 0 === e ? void 0 : e.send("wallet_switchEthereumChain", [{
                            chainId: `0x${n.toString(16)}`
                        }, a]))
                    } catch (s) {
                        if (4902 === s.code) try {
                            console.log({
                                params: o,
                                account: a
                            }), await (null === e || void 0 === e ? void 0 : e.send("wallet_addEthereumChain", [o, a]))
                        } catch (i) {}
                    }
                }
            }
        },
        34864: function(e, a, n) {
            n.d(a, {
                b: function() {
                    return x
                }
            });
            var t = n(54331),
                o = n(32981),
                r = n(66721),
                s = n(36375),
                i = n(69629),
                l = n(21547),
                c = n(49552),
                d = n.n(c),
                m = n(25675),
                h = n.n(m),
                u = (n(67294), n(66563)),
                p = n(85893);
            const x = {
                [u.kJ]: {
                    chainId: "0x1",
                    chainName: "Ethereum",
                    nativeCurrency: {
                        name: "Ethereum",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://mainnet.infura.io/v3"],
                    blockExplorerUrls: ["https://etherscan.com"]
                },
                [t.ChainId.SHIBARIUM]: {
                    chainId: "0x6D",
                    chainName: "Shibarium",
                    nativeCurrency: {
                        name: "BONE",
                        symbol: "BONE",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.shibrpc.com"],
                    blockExplorerUrls: ["https://shibariumscan.io"]
                },
                [t.ChainId.FANTOM]: {
                    chainId: "0xfa",
                    chainName: "Fantom",
                    nativeCurrency: {
                        name: "Fantom",
                        symbol: "FTM",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpcapi.fantom.network"],
                    blockExplorerUrls: ["https://ftmscan.com"]
                },
                [t.ChainId.PUPPYNET]: {
                    chainId: "0x265",
                    chainName: "Puppy Net-613",
                    nativeCurrency: {
                        name: "BONE",
                        symbol: "BONE",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.shibrpc.com"],
                    blockExplorerUrls: ["https://shibariumscan.io"]
                },
                [t.ChainId.PUPPYNET917]: {
                    chainId: "0x395",
                    chainName: "Puppy Net-917",
                    nativeCurrency: {
                        name: "BONE",
                        symbol: "BONE",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.shibrpc.com"],
                    blockExplorerUrls: ["https://puppyscan.shib.io"]
                },
                [t.ChainId.PUPPYNET719]: {
                    chainId: "0x2CF",
                    chainName: "Puppy Net-719",
                    nativeCurrency: {
                        name: "BONE",
                        symbol: "BONE",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.shibrpc.com"],
                    blockExplorerUrls: ["https://puppyscan.shib.io"]
                },
                [t.ChainId.BSC]: {
                    chainId: "0x38",
                    chainName: "Binance Smart Chain",
                    nativeCurrency: {
                        name: "Binance Coin",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: ["https://bsc-dataseed.binance.org"],
                    blockExplorerUrls: ["https://bscscan.com"]
                },
                [t.ChainId.MATIC]: {
                    chainId: "0x89",
                    chainName: "Matic",
                    nativeCurrency: {
                        name: "Matic",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    rpcUrls: ["https://polygon-rpc.com"],
                    blockExplorerUrls: ["https://polygonscan.com"]
                },
                [t.ChainId.HECO]: {
                    chainId: "0x80",
                    chainName: "Heco",
                    nativeCurrency: {
                        name: "Heco Token",
                        symbol: "HT",
                        decimals: 18
                    },
                    rpcUrls: ["https://http-mainnet.hecochain.com"],
                    blockExplorerUrls: ["https://hecoinfo.com"]
                },
                [t.ChainId.XDAI]: {
                    chainId: "0x64",
                    chainName: "xDai",
                    nativeCurrency: {
                        name: "xDai Token",
                        symbol: "xDai",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.xdaichain.com"],
                    blockExplorerUrls: ["https://blockscout.com/poa/xdai"]
                },
                [t.ChainId.HARMONY]: {
                    chainId: "0x63564C40",
                    chainName: "Harmony",
                    nativeCurrency: {
                        name: "One Token",
                        symbol: "ONE",
                        decimals: 18
                    },
                    rpcUrls: ["https://api.harmony.one", "https://s1.api.harmony.one", "https://s2.api.harmony.one", "https://s3.api.harmony.one"],
                    blockExplorerUrls: ["https://explorer.harmony.one/"]
                },
                [t.ChainId.AVALANCHE]: {
                    chainId: "0xA86A",
                    chainName: "Avalanche Mainnet C-Chain",
                    nativeCurrency: {
                        name: "Avalanche Token",
                        symbol: "AVAX",
                        decimals: 18
                    },
                    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                    blockExplorerUrls: ["https://snowtrace.io"]
                },
                [t.ChainId.OKEX]: {
                    chainId: "0x42",
                    chainName: "OKEx",
                    nativeCurrency: {
                        name: "OKEx Token",
                        symbol: "OKT",
                        decimals: 18
                    },
                    rpcUrls: ["https://exchainrpc.okex.org"],
                    blockExplorerUrls: ["https://www.oklink.com/okexchain"]
                },
                [t.ChainId.ARBITRUM]: {
                    chainId: "0xA4B1",
                    chainName: "Arbitrum",
                    nativeCurrency: {
                        name: "Ethereum",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                    blockExplorerUrls: ["https://arbiscan.io"]
                },
                [t.ChainId.CELO]: {
                    chainId: "0xA4EC",
                    chainName: "Celo",
                    nativeCurrency: {
                        name: "Celo",
                        symbol: "CELO",
                        decimals: 18
                    },
                    rpcUrls: ["https://forno.celo.org"],
                    blockExplorerUrls: ["https://explorer.celo.org"]
                },
                [t.ChainId.MOONRIVER]: {
                    chainId: "0x505",
                    chainName: "Moonriver",
                    nativeCurrency: {
                        name: "Moonriver",
                        symbol: "MOVR",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
                    blockExplorerUrls: ["https://moonriver.moonscan.io"]
                },
                [t.ChainId.FUSE]: {
                    chainId: "0x7A",
                    chainName: "Fuse",
                    nativeCurrency: {
                        name: "Fuse",
                        symbol: "FUSE",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc.fuse.io"],
                    blockExplorerUrls: ["https://explorer.fuse.io"]
                },
                [t.ChainId.TELOS]: {
                    chainId: "0x28",
                    chainName: "Telos",
                    nativeCurrency: {
                        name: "Telos",
                        symbol: "TLOS",
                        decimals: 18
                    },
                    rpcUrls: ["https://mainnet.telos.net/evm"],
                    blockExplorerUrls: ["https://rpc1.us.telos.net/v2/explore"]
                },
                [t.ChainId.PALM]: {
                    chainId: "0x2A15C308D",
                    chainName: "Palm",
                    nativeCurrency: {
                        name: "Palm",
                        symbol: "PALM",
                        decimals: 18
                    },
                    rpcUrls: ["https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267"],
                    blockExplorerUrls: ["https://explorer.palm.io"]
                }
            };
            a.Z = () => {
                const {
                    chainId: e,
                    library: a,
                    account: n
                } = (0, s.aQ)(), t = (0, l.oL)(i.Lk.NETWORK), c = (0, l.o)();
                return e ? (0, p.jsx)(o.Z.Controlled, {
                    isOpen: t,
                    onDismiss: c,
                    children: (0, p.jsxs)("div", {
                        className: "flex flex-col gap-4 wallet-network",
                        style: {
                            maxHeight: "90vh",
                            overflow: "auto"
                        },
                        children: [(0, p.jsx)(o.Z.Header, {
                            header: "Select a network",
                            onClose: c
                        }), (0, p.jsx)("div", {
                            className: "grid grid-flow-row-dense grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 net-block",
                            children: [u.Fu, u.wq].map(((t, o) => e === t ? (0, p.jsxs)("div", {
                                className: "bg-[rgba(0,0,0,0.2)] focus:outline-none flex items-center gap-4 w-full px-4 py-3 rounded border border-purple cursor-default txt-color",
                                children: [(0, p.jsx)(h(), {
                                    src: r.wP[t],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, p.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: r.zl[t]
                                })]
                            }, o) : (0, p.jsxs)("button", {
                                onClick: async () => {
                                    console.debug(`Switching to chain ${t}`, x[t]), c();
                                    const e = x[t];
                                    d().set("chainId", t, e), console.log("params => ", t);
                                    try {
                                        await (null === a || void 0 === a ? void 0 : a.send("wallet_switchEthereumChain", [{
                                            chainId: `0x${t.toString(16)}`
                                        }, n]))
                                    } catch (o) {
                                        if (4902 === o.code) try {
                                            console.log("switchError ", {
                                                params: e,
                                                account: n,
                                                switchError: o
                                            }), await (null === a || void 0 === a ? void 0 : a.send("wallet_addEthereumChain", [e, n]))
                                        } catch (r) {
                                            console.error(`Add chain error ${r}`)
                                        }
                                        console.error(`Switch chain error ${o}`)
                                    }
                                },
                                className: "",
                                children: [(0, p.jsx)(h(), {
                                    src: r.wP[t],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, p.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: r.zl[t]
                                })]
                            }, o)))
                        })]
                    })
                }) : null
            }
        },
        6102: function(e, a, n) {
            n.r(a);
            var t = n(67294),
                o = n(96225),
                r = n(55678),
                s = (n(27967), n(85893));
            a.default = e => {
                let {
                    data: a,
                    copyText: n
                } = e;
                const {
                    0: i,
                    1: l
                } = (0, t.useState)(!1);
                return (0, t.useEffect)((() => {
                    i && (r.Am.success(`${n} Address Copied to Clipboard.`, {
                        position: r.Am.POSITION.TOP_RIGHT,
                        autoClose: 3e3
                    }), setTimeout((() => {
                        l(!1)
                    }), 2e3))
                }), [i]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Ix, {}), (0, s.jsx)(o.SnT, {
                        className: i ? "copied" : "",
                        onClick: () => {
                            navigator.clipboard.writeText(a), l(!0)
                        }
                    })]
                })
            }
        },
        88191: function(e, a, n) {
            n.r(a), n.d(a, {
                default: function() {
                    return H
                }
            });
            var t = n(72201),
                o = n(881),
                r = n(83691),
                s = n(36375),
                i = n(59433),
                l = n(48404),
                c = n(67294),
                d = n(73640),
                m = n(74231),
                h = n(97552),
                u = n(37918),
                p = n.n(u),
                x = n(15254),
                v = n(66563),
                b = n(93085),
                f = n(25617),
                y = n(79684),
                N = n(71356),
                w = n(93645),
                C = n(93189),
                I = n(5121);
            var k = e => ((new w.S).invalidateQueries({
                    queryKey: ["usd_value", e]
                }), (0, C.a)({
                    queryKey: ["usd_value", e],
                    queryFn: async () => {
                        let a = await I.Z.get(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${e}&vs_currencies=usd`),
                            n = 1;
                        return Object.keys(a.data).forEach((t => {
                            t.toLowerCase() == e.toLowerCase() && (n = a.data[t].usd)
                        })), n
                    }
                })),
                j = n(6102),
                E = n(76704),
                g = n(16981),
                A = n(45697),
                T = n.n(A);

            function O() {
                return O = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var n = arguments[a];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }, O.apply(this, arguments)
            }

            function U(e, a) {
                if (null == e) return {};
                var n, t, o = function(e, a) {
                    if (null == e) return {};
                    var n, t, o = {},
                        r = Object.keys(e);
                    for (t = 0; t < r.length; t++) n = r[t], a.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, a);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < r.length; t++) n = r[t], a.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var S = (0, c.forwardRef)((function(e, a) {
                var n = e.color,
                    t = void 0 === n ? "currentColor" : n,
                    o = e.size,
                    r = void 0 === o ? 24 : o,
                    s = U(e, ["color", "size"]);
                return c.createElement("svg", O({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, s), c.createElement("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }), c.createElement("polyline", {
                    points: "19 12 12 19 5 12"
                }))
            }));
            S.propTypes = {
                color: T().string,
                size: T().oneOfType([T().string, T().number])
            }, S.displayName = "ArrowDown";
            var B = S,
                _ = n(85893);
            var H = e => {
                var a, n;
                let {
                    donateModal: u,
                    setDonateModal: w,
                    data: C
                } = e;
                const I = {
                        show: u,
                        onReceipt: !1,
                        amount: 0,
                        title: `Donate to ${null===C||void 0===C||null===(a=C.validatorInfo)||void 0===a?void 0:a.name}`
                    },
                    A = (0, y.B9)(),
                    {
                        saveDonation: T
                    } = (0, N.Z)(),
                    {
                        account: O,
                        chainId: U = 1,
                        library: S
                    } = (0, s.aQ)(),
                    H = null === S || void 0 === S ? void 0 : S.provider,
                    D = new(p())(H),
                    F = (0, E.S)("abis/pos/ERC20.json"),
                    M = (0, x.Z)(),
                    {
                        0: R,
                        1: L
                    } = (0, c.useState)("BONE"),
                    {
                        0: P,
                        1: $
                    } = (0, c.useState)(!1),
                    {
                        0: Z,
                        1: q
                    } = (0, c.useState)(""),
                    {
                        balance: W
                    } = (0, r.oe)(),
                    {
                        0: V,
                        1: K
                    } = (0, c.useState)(I),
                    Y = (0, f.I0)(),
                    {
                        0: z,
                        1: X
                    } = (0, c.useState)("0x9813037ee2218799597d83D4a5B6F3b6778218d9"),
                    {
                        0: Q,
                        1: J
                    } = (0, c.useState)(""),
                    G = k(z),
                    {
                        0: ee,
                        1: ae
                    } = (0, c.useState)(0),
                    ne = (0, r.bq)();
                (0, c.useEffect)((() => {
                    "BONE" === R && ae(W * G.data)
                }), [W, G.data]);
                const te = [{
                        name: "BONE",
                        l1address: "0x9813037ee2218799597d83D4a5B6F3b6778218d9",
                        address: "0x0000000000000000000000000000000000001010"
                    }, {
                        name: "LEASH",
                        l1address: "0x27C70Cd1946795B66be9d954418546998b546634",
                        address: "0x65218A41Fb92637254B4f8c97448d3dF343A3064"
                    }, {
                        name: "SHIB",
                        l1address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
                        address: "0x495eea66B0f8b636D441dC6a98d8F5C3D455C4c0"
                    }],
                    oe = m.Ry({
                        amount: m.Rx().typeError("Amount should be a number.").min(0, "Invalid Amount").max(ee, "Insufficient Balance.").moreThan(0, "You must enter valid amount.").required("Amount is required.")
                    }),
                    re = async e => {
                        let a = te.filter((a => a.name === e.target.value)),
                            n = await ne("donate", O, a[0].address);
                        L(e.target.value), X(a[0].l1address), J(a[0].address), ae(n)
                    };
                console.log({
                    tokenBalance: ee
                });
                const se = async (e, a) => {
                        try {
                            var n;
                            $(!0);
                            const t = new D.eth.Contract(F, Q),
                                o = D.utils.toWei(String(e.amount), "ether"),
                                r = D.utils.toBN(o);
                            t.methods.transfer(null === C || void 0 === C || null === (n = C.validatorInfo) || void 0 === n ? void 0 : n.staker, r).send({
                                from: O
                            }).on("transactionHash", (n => {
                                var t;
                                Y((0, b.dT)({
                                    hash: n,
                                    from: O,
                                    chainId: U,
                                    summary: `${n}`
                                }));
                                let o = {
                                    from: O,
                                    to: null === C || void 0 === C || null === (t = C.validatorInfo) || void 0 === t ? void 0 : t.staker,
                                    amount: e.amount
                                };
                                T(o).then((() => a()));
                                const r = A(U, n, "transaction");
                                q(r)
                            })).on("receipt", (a => {
                                Y((0, b.Aw)({
                                    hash: a.transactionHash,
                                    chainId: U,
                                    receipt: {
                                        to: a.to,
                                        from: a.from,
                                        contractAddress: a.contractAddress,
                                        transactionIndex: a.transactionIndex,
                                        blockHash: a.blockHash,
                                        transactionHash: a.transactionHash,
                                        blockNumber: a.blockNumber,
                                        status: 1
                                    }
                                })), $(!1), K({
                                    show: u,
                                    onReceipt: !0,
                                    amount: e.amount,
                                    title: "Thank you for your Donation!"
                                })
                            })).on("error", (e => {
                                a(), K(I), $(!1)
                            }))
                        } catch (t) {
                            $(!1), h.Tb("sendDonation", t), K(I)
                        }
                    },
                    ie = async (e, a) => {
                        try {
                            var n, t;
                            K({
                                show: u,
                                onReceipt: !1,
                                amount: e.amount,
                                title: `Donate to ${null===C||void 0===C||null===(n=C.validatorInfo)||void 0===n?void 0:n.name}`
                            }), $(!0);
                            const o = D.utils.toWei(String(e.amount), "ether"),
                                r = D.utils.toBN(o);
                            await D.eth.sendTransaction({
                                from: O,
                                to: null === C || void 0 === C || null === (t = C.validatorInfo) || void 0 === t ? void 0 : t.staker,
                                value: r
                            }).on("transactionHash", (n => {
                                Y((0, b.dT)({
                                    hash: n,
                                    from: O,
                                    chainId: U,
                                    summary: `${n}`
                                }));
                                let t = {
                                    from: O,
                                    to: C.validatorInfo.staker,
                                    amount: e.amount
                                };
                                T(t).then((() => a()));
                                const o = A(U, n, "transaction");
                                q(o)
                            })).on("receipt", (a => {
                                Y((0, b.Aw)({
                                    hash: a.transactionHash,
                                    chainId: U,
                                    receipt: {
                                        to: a.to,
                                        from: a.from,
                                        contractAddress: a.contractAddress,
                                        transactionIndex: a.transactionIndex,
                                        blockHash: a.blockHash,
                                        transactionHash: a.transactionHash,
                                        blockNumber: a.blockNumber,
                                        status: 1
                                    }
                                })), $(!1), K({
                                    show: u,
                                    onReceipt: !0,
                                    amount: e.amount,
                                    title: ""
                                })
                            })).on("error", (e => {
                                a(), K(I), $(!1)
                            }))
                        } catch (o) {
                            $(!1), h.Tb("sendDonation", o), K(I), console.log("error ", o)
                        }
                    };
                return (0, _.jsx)(l.default, {
                    show: u,
                    setshow: () => w(!1),
                    title: V.title,
                    externalCls: "stak-pop del-pop ffms-inherit donate_modal",
                    children: (0, _.jsx)("div", {
                        className: "popmodal-body tokn-popup no-ht trans-mod",
                        children: (0, _.jsxs)("div", {
                            className: "pop-block",
                            children: [V.show && !V.onReceipt && (0, _.jsx)(i.J9, {
                                initialValues: {
                                    amount: "",
                                    to: null === C || void 0 === C || null === (n = C.validatorInfo) || void 0 === n ? void 0 : n.staker,
                                    from: O
                                },
                                validationSchema: oe,
                                onSubmit: (e, a) => {
                                    let {
                                        resetForm: n
                                    } = a;
                                    (async (e, a) => {
                                        $(!0), U != v.wq && (await M(v.wq), $(!1)), U === v.wq && ("BONE" == R ? ie(e, a) : se(e, a))
                                    })(e, n)
                                },
                                children: e => {
                                    var a, n, r, s;
                                    let {
                                        errors: i,
                                        touched: l,
                                        handleChange: c,
                                        handleBlur: m,
                                        setFieldValue: h,
                                        values: u,
                                        handleSubmit: p,
                                        resetForm: x
                                    } = e;
                                    return (0, _.jsx)(_.Fragment, {
                                        children: (0, _.jsxs)("div", {
                                            className: "combinedWrapper",
                                            children: [(0, _.jsxs)("div", {
                                                className: "inputWrapper",
                                                children: [(0, _.jsx)("div", {
                                                    className: "cmn_inpt_row ",
                                                    children: (0, _.jsxs)("div", {
                                                        className: "form-control",
                                                        children: [(0, _.jsx)("label", {
                                                            htmlFor: "selectToken",
                                                            children: "Choose Token:"
                                                        }), (0, _.jsxs)(t.Z, {
                                                            labelId: "select-token-for-faucet",
                                                            id: "selectToken",
                                                            value: R,
                                                            label: "Select Token",
                                                            onChange: re,
                                                            children: [(0, _.jsxs)(o.Z, {
                                                                value: "BONE",
                                                                children: ["BONE", "  "]
                                                            }), (0, _.jsxs)(o.Z, {
                                                                value: "SHIB",
                                                                children: ["SHIB", "  "]
                                                            }), (0, _.jsxs)(o.Z, {
                                                                value: "LEASH",
                                                                children: ["LEASH", "  "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, _.jsxs)("div", {
                                                    className: "cmn_inpt_row text-center",
                                                    children: [(0, _.jsxs)("div", {
                                                        className: "form-control",
                                                        children: [(0, _.jsxs)("label", {
                                                            className: "mb-2 text-white mb-md-2",
                                                            children: ["Amount:", G.isLoading ? (0, _.jsx)(g.Z, {}) : (0, _.jsxs)("small", {
                                                                className: "d-flex align-items-center",
                                                                children: ["$", (0, d.vA)(ee * G.data), "*"]
                                                            })]
                                                        }), (0, _.jsx)("div", {
                                                            className: "h-auto form-field position-relative two-fld max-group extr_pd_remove bg-clr",
                                                            children: (0, _.jsx)("div", {
                                                                className: "mid-chain w-100",
                                                                children: (0, _.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "Amount",
                                                                    name: "amount",
                                                                    className: "w-100",
                                                                    value: u.amount,
                                                                    onChange: c("amount")
                                                                })
                                                            })
                                                        }), (0, _.jsx)("button", {
                                                            className: "maxBtn",
                                                            onClick: () => h("amount", ee),
                                                            children: "MAX"
                                                        })]
                                                    }), l.amount && i.amount ? (0, _.jsx)("small", {
                                                        className: "pl-2 mb-0 primary-text text-sm",
                                                        children: i.amount
                                                    }) : null]
                                                })]
                                            }), (0, _.jsxs)("div", {
                                                className: "inputWrapper",
                                                children: [(0, _.jsx)("div", {
                                                    className: "cmn_inpt_row ",
                                                    children: (0, _.jsxs)("div", {
                                                        className: "form-control",
                                                        children: [(0, _.jsxs)("label", {
                                                            className: "mb-2 text-white mb-md-2",
                                                            children: ["My Wallet Address:", " ", (0, _.jsx)("span", {
                                                                className: "text-faded",
                                                                children: "Metamask"
                                                            })]
                                                        }), (0, _.jsx)("div", {
                                                            className: "h-auto form-field position-relative two-fld max-group extr_pd_remove bg-clr",
                                                            children: (0, _.jsxs)("div", {
                                                                className: "mid-chain w-100",
                                                                children: [(0, _.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "From",
                                                                    name: "from",
                                                                    className: "w-100",
                                                                    value: O,
                                                                    disabled: !0
                                                                }), (0, _.jsx)(j.default, {
                                                                    data: O,
                                                                    copyText: "Wallet"
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, _.jsx)("div", {
                                                    className: "arrowDown",
                                                    children: (0, _.jsx)(B, {})
                                                }), (0, _.jsx)("div", {
                                                    className: "cmn_inpt_row",
                                                    children: (0, _.jsxs)("div", {
                                                        className: "form-control",
                                                        children: [(0, _.jsxs)("label", {
                                                            className: "mb-2 text-white mb-md-2",
                                                            children: [null === C || void 0 === C || null === (a = C.validatorInfo) || void 0 === a ? void 0 : a.name, " Wallet Address:"]
                                                        }), (0, _.jsx)("div", {
                                                            className: "h-auto form-field position-relative two-fld max-group extr_pd_remove bg-clr",
                                                            children: (0, _.jsxs)("div", {
                                                                className: "mid-chain w-100",
                                                                children: [(0, _.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "To",
                                                                    name: "to",
                                                                    className: "w-100 ",
                                                                    value: null === C || void 0 === C || null === (n = C.validatorInfo) || void 0 === n ? void 0 : n.staker,
                                                                    disabled: !0
                                                                }), (0, _.jsx)(j.default, {
                                                                    data: null === C || void 0 === C || null === (r = C.validatorInfo) || void 0 === r ? void 0 : r.staker,
                                                                    copyText: null === C || void 0 === C || null === (s = C.validatorInfo) || void 0 === s ? void 0 : s.name
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), (0, _.jsxs)("div", {
                                                className: "pop_btns_area justify-content-center",
                                                children: [(0, _.jsx)("div", {
                                                    className: "form-control",
                                                    children: (0, _.jsx)("button", {
                                                        className: "btn primary-btn w-100 btn-lg",
                                                        onClick: () => p(),
                                                        disabled: P,
                                                        children: "Send Donation"
                                                    })
                                                }), (0, _.jsx)("small", {
                                                    className: "text-sm",
                                                    children: "* Conversion will vary at the time of transaction."
                                                })]
                                            })]
                                        })
                                    })
                                }
                            }), V.onReceipt && (0, _.jsxs)(_.Fragment, {
                                children: [(0, _.jsx)("h3", {
                                    className: "confirmTitle",
                                    children: "Thank you for your Donation!"
                                }), (0, _.jsxs)("div", {
                                    className: "step_content fl-box",
                                    children: [(0, _.jsx)("div", {
                                        className: "ax-top",
                                        children: (0, _.jsx)("div", {
                                            className: "mid_text row",
                                            children: (0, _.jsx)("div", {
                                                className: "col-12 text-center",
                                                children: (0, _.jsxs)("p", {
                                                    className: "ff-mos confirmationText",
                                                    children: ["Your donation of", " ", (0, _.jsxs)("strong", {
                                                        children: [V.amount, " ", R]
                                                    }), " ", "or", " ", (0, _.jsxs)("strong", {
                                                        children: ["$", +V.amount * +G.data]
                                                    }), " ", "was sent to ", null === C || void 0 === C ? void 0 : C.validatorInfo.name, "."]
                                                })
                                            })
                                        })
                                    }), (0, _.jsx)("div", {
                                        className: "ax-bottom",
                                        children: (0, _.jsx)("div", {
                                            className: "pop_btns_area row form-control mt-3",
                                            children: (0, _.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, _.jsx)("button", {
                                                    children: (0, _.jsx)("a", {
                                                        className: "btn primary-btn d-flex align-items-center justify-content-center",
                                                        target: "_blank",
                                                        href: Z,
                                                        children: (0, _.jsx)("span", {
                                                            children: "Download Receipt"
                                                        })
                                                    })
                                                }), (0, _.jsx)("button", {
                                                    className: "normalBtn",
                                                    children: (0, _.jsx)("a", {
                                                        className: "btn d-flex align-items-center justify-content-center",
                                                        target: "_blank",
                                                        type: "button",
                                                        onClick: () => w(!1),
                                                        children: (0, _.jsx)("span", {
                                                            children: "Close"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        71356: function(e, a, n) {
            var t = n(69574);
            a.Z = () => {
                const e = (0, t.Z)();
                return {
                    getValidatorsDetail: a => e.get(`validators/overview/${a}`),
                    validatorsList: function(a) {
                        return e.get(`validators/getList?value=${a}`)
                    },
                    migrateValidatorsList: function(a, n) {
                        return e.get(`validators/getMigrationList?value=${a}`, n)
                    },
                    restake: function(a) {
                        return e.post("validators/restake", a)
                    },
                    commission: function(a) {
                        return e.post("validators/updateCommission", a)
                    },
                    withdrawReward: function(a) {
                        return e.post("validators/withdrawRewards", a)
                    },
                    unbound: function(a) {
                        return e.post("unbond", a)
                    },
                    getWalletTokenList: function() {
                        return e.get("tokens/getList")
                    },
                    saveDonation: function(a) {
                        return e.post("donation", a)
                    }
                }
            }
        }
    }
]);