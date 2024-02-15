(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3100], {
        66563: function(e, t, a) {
            "use strict";
            a.d(t, {
                Fu: function() {
                    return i
                },
                X5: function() {
                    return s
                },
                kJ: function() {
                    return r
                },
                wq: function() {
                    return o
                }
            });
            var n = a(54331);
            const s = n.ChainId.SHIBARIUM,
                i = n.ChainId.SEPOLIA,
                o = (n.ChainId.ETHEREUM, n.ChainId.SHIBARIUM),
                r = n.ChainId.ETHEREUM
        },
        35412: function(e, t, a) {
            "use strict";
            var n = a(34155);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = "0x80Cc222EA02F4334F67e9E55E7412fed62599004",
                i = n.env.NEXT_PUBLIC_ROOT_WS_HTTP,
                o = n.env.NEXT_PUBLIC_CHILD_WS_HTTP;
            let r = 50;
            r = parseInt("30", 10), r <= 0 && (r = 50), e.exports = {
                account: {
                    mnemonic: "sweet mask mansion forward grunt bench climb opera buzz gentle course boring",
                    admin_wallet: s,
                    from: s,
                    num_wallets: r
                },
                network: {
                    network: "shibarium-mainnet",
                    version: "v1",
                    parent: {
                        rpc: "https://eth-mainnet.g.alchemy.com/v2/KWZGsggq6oF1aCI_yAXFkhesI1edQi-n",
                        ws: i
                    },
                    child: {
                        rpc: "https://www.shibrpc.com",
                        ws: o
                    },
                    heimdall: {
                        rpc: "http://prod-rpc-2-f3889c03bd850501.elb.ap-southeast-1.amazonaws.com:26657/",
                        rest: "http://prod-rpc-2-f3889c03bd850501.elb.ap-southeast-1.amazonaws.com:1317/"
                    }
                },
                apis: {
                    staking_api: "https://shibarium-api.shib.io",
                    proof_api: "http:3.85.222.188:5000",
                    abi_api: "https://prod-abi.s3.amazonaws.com"
                }
            }
        },
        15254: function(e, t, a) {
            "use strict";
            var n = a(34864),
                s = a(49552),
                i = a.n(s),
                o = a(36375);
            t.Z = () => {
                const {
                    library: e,
                    account: t
                } = (0, o.aQ)();
                return async a => {
                    const s = n.b[a];
                    i().set("chainId", a, s);
                    try {
                        await (null === e || void 0 === e ? void 0 : e.send("wallet_switchEthereumChain", [{
                            chainId: `0x${a.toString(16)}`
                        }, t]))
                    } catch (o) {
                        if (4902 === o.code) try {
                            console.log({
                                params: s,
                                account: t
                            }), await (null === e || void 0 === e ? void 0 : e.send("wallet_addEthereumChain", [s, t]))
                        } catch (r) {}
                    }
                }
            }
        },
        18722: function(e, t, a) {
            "use strict";
            var n = a(80857),
                s = a(36375),
                i = a(18541),
                o = a(7678),
                r = a(67294);
            t.Z = () => {
                const {
                    account: e
                } = (0, s.aQ)(), t = (0, n.Z)(), [a, c] = (0, i.eT)(), l = () => {
                    (0, o.getTransactions)(e, t.StakingAPI).then((e => {
                        if ((null === e || void 0 === e ? void 0 : e.length) > 0) {
                            let t = null === e || void 0 === e ? void 0 : e.filter((e => 0 === e.status)).length;
                            c(t)
                        } else c(0)
                    }))
                };
                return (0, r.useEffect)((() => {
                    e && l()
                }), [e]), {
                    pendingTransactionCount: a,
                    getTransactionsCount: l
                }
            }
        },
        34864: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return x
                }
            });
            var n = a(54331),
                s = a(32981),
                i = a(66721),
                o = a(36375),
                r = a(69629),
                c = a(21547),
                l = a(49552),
                d = a.n(l),
                h = a(25675),
                p = a.n(h),
                m = (a(67294), a(66563)),
                u = a(85893);
            const x = {
                [m.kJ]: {
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
                [n.ChainId.SHIBARIUM]: {
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
                [n.ChainId.FANTOM]: {
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
                [n.ChainId.PUPPYNET]: {
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
                [n.ChainId.PUPPYNET917]: {
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
                [n.ChainId.PUPPYNET719]: {
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
                [n.ChainId.BSC]: {
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
                [n.ChainId.MATIC]: {
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
                [n.ChainId.HECO]: {
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
                [n.ChainId.XDAI]: {
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
                [n.ChainId.HARMONY]: {
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
                [n.ChainId.AVALANCHE]: {
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
                [n.ChainId.OKEX]: {
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
                [n.ChainId.ARBITRUM]: {
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
                [n.ChainId.CELO]: {
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
                [n.ChainId.MOONRIVER]: {
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
                [n.ChainId.FUSE]: {
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
                [n.ChainId.TELOS]: {
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
                [n.ChainId.PALM]: {
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
            t.Z = () => {
                const {
                    chainId: e,
                    library: t,
                    account: a
                } = (0, o.aQ)(), n = (0, c.oL)(r.Lk.NETWORK), l = (0, c.o)();
                return e ? (0, u.jsx)(s.Z.Controlled, {
                    isOpen: n,
                    onDismiss: l,
                    children: (0, u.jsxs)("div", {
                        className: "flex flex-col gap-4 wallet-network",
                        style: {
                            maxHeight: "90vh",
                            overflow: "auto"
                        },
                        children: [(0, u.jsx)(s.Z.Header, {
                            header: "Select a network",
                            onClose: l
                        }), (0, u.jsx)("div", {
                            className: "grid grid-flow-row-dense grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 net-block",
                            children: [m.Fu, m.wq].map(((n, s) => e === n ? (0, u.jsxs)("div", {
                                className: "bg-[rgba(0,0,0,0.2)] focus:outline-none flex items-center gap-4 w-full px-4 py-3 rounded border border-purple cursor-default txt-color",
                                children: [(0, u.jsx)(p(), {
                                    src: i.wP[n],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, u.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: i.zl[n]
                                })]
                            }, s) : (0, u.jsxs)("button", {
                                onClick: async () => {
                                    console.debug(`Switching to chain ${n}`, x[n]), l();
                                    const e = x[n];
                                    d().set("chainId", n, e), console.log("params => ", n);
                                    try {
                                        await (null === t || void 0 === t ? void 0 : t.send("wallet_switchEthereumChain", [{
                                            chainId: `0x${n.toString(16)}`
                                        }, a]))
                                    } catch (s) {
                                        if (4902 === s.code) try {
                                            console.log("switchError ", {
                                                params: e,
                                                account: a,
                                                switchError: s
                                            }), await (null === t || void 0 === t ? void 0 : t.send("wallet_addEthereumChain", [e, a]))
                                        } catch (i) {
                                            console.error(`Add chain error ${i}`)
                                        }
                                        console.error(`Switch chain error ${s}`)
                                    }
                                },
                                className: "",
                                children: [(0, u.jsx)(p(), {
                                    src: i.wP[n],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, u.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: i.zl[n]
                                })]
                            }, s)))
                        })]
                    })
                }) : null
            }
        },
        7678: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getTransactions: function() {
                    return o
                },
                putTransactions: function() {
                    return i
                }
            });
            var n = a(5121);
            const s = {
                    "Content-Type": "application/json",
                    mode: "cors"
                },
                i = async (e, t) => {
                    try {
                        return await n.Z.put(`${t}/transactions`, e, {
                            headers: s
                        })
                    } catch (a) {
                        return {}
                    }
                },
                o = async (e, t) => {
                    try {
                        var a;
                        let i = await n.Z.get(`${t}/transactions/getTransactions?walletAddress=${e}`, {
                            headers: s
                        });
                        return null === i || void 0 === i || null === (a = i.data) || void 0 === a ? void 0 : a.data
                    } catch (i) {
                        return null
                    }
                };
            t.default = async (e, t) => {
                try {
                    return await n.Z.post(`${t}/transactions`, e, {
                        headers: s
                    })
                } catch (a) {
                    return {}
                }
            }
        },
        23090: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a(59499),
                s = a(95477),
                i = a(79684),
                o = a(36375),
                r = a(67294),
                c = a(52795),
                l = a(37918),
                d = a.n(l),
                h = a(93085),
                p = a(86771),
                m = a(73640),
                u = a(76704),
                x = a(47969),
                g = a.n(x),
                v = a(60387),
                b = a(82686),
                f = a(23494),
                y = a(35412);
            (0, v.setProofApi)(y.apis.proof_api), (0, v.setAbiApi)(y.apis.abi_api), (0, v.use)(f.Web3ClientPlugin);
            const w = new(g())({
                    mnemonic: {
                        phrase: y.account.mnemonic
                    },
                    providerOrUrl: y.network.parent.rpc,
                    numberOfAddresses: y.account.num_wallets
                }),
                k = new(g())({
                    mnemonic: {
                        phrase: y.account.mnemonic
                    },
                    providerOrUrl: y.network.child.rpc,
                    numberOfAddresses: y.account.num_wallets
                }),
                C = () => {
                    try {
                        return (new v.POSClient).init({
                            log: !1,
                            network: y.network.network,
                            version: y.network.version,
                            child: {
                                provider: k,
                                defaultConfig: {
                                    from: y.account.from
                                }
                            },
                            parent: {
                                provider: w,
                                defaultConfig: {
                                    from: y.account.from
                                }
                            }
                        })
                    } catch (e) {
                        return console.error("error unable to initiate plasmaClient", e), null
                    }
                };
            const N = async e => (console.log("client type => ", e), "pos" === e ? C() : async function() {
                try {
                    return (new b.PlasmaClient).init({
                        network: y.network.network,
                        version: y.network.version,
                        parent: {
                            provider: w,
                            defaultConfig: {
                                from: y.account.from
                            }
                        },
                        child: {
                            provider: k,
                            defaultConfig: {
                                from: y.account.from
                            }
                        }
                    })
                } catch (e) {
                    return console.error("error unable to initiate plasmaClient", e), null
                }
            }());
            var I = a(55678),
                j = (a(27967), a(7678)),
                E = a(18722),
                H = a(27484),
                P = a.n(H),
                T = a(80857),
                A = a(15254),
                O = a(85893);

            function S(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var _ = e => {
                var t, a, n, l, x, g, v, b, f;
                let {
                    withdrawTokenInput: y,
                    selectedToken: w,
                    processing: k,
                    step: C,
                    hashLink: H,
                    checkpointSigned: S,
                    challengePeriodCompleted: _ = !0,
                    setProcessing: B,
                    setStep: M,
                    setHashLink: F,
                    setChallengePeriodCompleted: L,
                    completed: R,
                    setCompleted: D,
                    page: Z
                } = e;
                const W = (0, i.B9)(),
                    [$, z] = (0, c.Z)("txState"),
                    {
                        getTransactionsCount: Y
                    } = (0, E.Z)(),
                    {
                        account: V,
                        chainId: G = 1,
                        library: X
                    } = (0, o.aQ)(),
                    K = (0, T.Z)(),
                    Q = X,
                    q = new(d())(null === Q || void 0 === Q ? void 0 : Q.provider),
                    J = (0, u.S)("abis/pos/RootChainManager.json"),
                    ee = (0, u.S)("abis/plasma/ERC20PredicateBurnOnly.json"),
                    te = (0, u.S)("abis/plasma/WithdrawManager.json"),
                    ae = (0, p.T)(),
                    ne = P()(),
                    se = P()(null === $ || void 0 === $ ? void 0 : $.updatedAt),
                    ie = (0, A.Z)();
                (0, r.useEffect)((() => {
                    if ($ && "tx" == Z) {
                        let e = W(G, null === $ || void 0 === $ ? void 0 : $.txHash, "transaction");
                        F(e)
                    }
                }), []);
                const oe = async () => {
                    var e;
                    "pos" === (null === $ || void 0 === $ || null === (e = $.token) || void 0 === e ? void 0 : e.bridgetype) ? await (async () => {
                        try {
                            if (G !== K.L1Chain && await ie(K.L1Chain), G === K.L1Chain) {
                                var e, t, a;
                                M("Completed");
                                const n = V,
                                    s = (null === w || void 0 === w ? void 0 : w.bridgetype) || (null === $ || void 0 === $ || null === (e = $.token) || void 0 === e ? void 0 : e.bridgetype),
                                    i = await N(s);
                                console.log("client done", i);
                                let o = K.contractAddress.WITHDRAW_POS;
                                const r = new q.eth.Contract(J, o);
                                console.log("instance done", r);
                                const c = null === $ || void 0 === $ || null === (t = $.txData) || void 0 === t || null === (a = t.Transfer) || void 0 === a ? void 0 : a.signature;
                                let l;
                                i && (l = await i.exitUtil.buildPayloadForExit(null === $ || void 0 === $ ? void 0 : $.txHash, c.toLowerCase(), !1, 0)), console.log("erx 20 token data ", l);
                                let d = await r.methods.exit(l).estimateGas({
                                        from: n
                                    }),
                                    p = await r.methods.exit(l).encodeABI(),
                                    u = await (0, m.tV)(q);
                                await q.eth.sendTransaction({
                                    from: n,
                                    to: o,
                                    gas: (parseInt(d) + 3e4).toString(),
                                    gasPrice: u,
                                    data: p
                                }).on("transactionHash", (async e => {
                                    ae((0, h.dT)({
                                        hash: e,
                                        from: n,
                                        chainId: G,
                                        summary: `${e}`
                                    }));
                                    let t = {
                                        txHash: $.txHash,
                                        withdrawHash: e,
                                        finalHash: e
                                    };
                                    await (0, j.putTransactions)(t, K.StakingAPI)
                                })).on("receipt", (async e => {
                                    ae((0, h.Aw)({
                                        hash: e.transactionHash,
                                        chainId: G,
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
                                    })), Y(), B((e => [...e, "Completed"])), M("Completed"), D(!0);
                                    let t = {
                                            stepPoint: "0",
                                            challengePeriod: !0,
                                            processExit: !0,
                                            status: 1,
                                            txHash: $.txHash,
                                            checkProcessExitStatus: !0,
                                            checkChallengePeriodStatus: !0
                                        },
                                        a = await (0, j.putTransactions)(t, K.StakingAPI);
                                    console.log("post resp", a), z(U(U({}, $), {}, {
                                        checkpointSigned: !0,
                                        challengePeriod: !0,
                                        processExit: !0,
                                        withdrawHash: e
                                    }))
                                }))
                            }
                        } catch (n) {
                            console.log("posExit error ", n), M("Checkpoint"), L(!1), I.Am.error("Something went wrong. Try again later.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            })
                        }
                    })() : (async () => {
                        try {
                            if (G !== K.L1Chain && await ie(K.L1Chain), G === K.L1Chain) {
                                var e, t, a;
                                let n = K.contractAddress.WITHDRAW_PLASMA,
                                    s = (null === w || void 0 === w ? void 0 : w.bridgetype) || (null === $ || void 0 === $ || null === (e = $.token) || void 0 === e ? void 0 : e.bridgetype);
                                M("Challenge Period");
                                let i = V;
                                const o = await N(s);
                                let r;
                                const c = new q.eth.Contract(ee, n),
                                    l = null === $ || void 0 === $ || null === (t = $.txData) || void 0 === t || null === (a = t.Withdraw) || void 0 === a ? void 0 : a.signature;
                                o && (r = await o.exitUtil.buildPayloadForExit(null === $ || void 0 === $ ? void 0 : $.txHash, l.toLowerCase(), !1, 0));
                                let d = await c.methods.startExitWithBurntTokens(r).estimateGas({
                                    from: V
                                });
                                console.log("step erc20 token=>", d, i, V);
                                let p = await c.methods.startExitWithBurntTokens(r).encodeABI(),
                                    u = await (0, m.tV)(q);
                                await q.eth.sendTransaction({
                                    from: V,
                                    to: n,
                                    gas: parseInt(d).toString(),
                                    gasPrice: u,
                                    data: p
                                }).on("transactionHash", (async e => {
                                    ae((0, h.dT)({
                                        hash: e,
                                        from: i,
                                        chainId: G,
                                        summary: `${e}`
                                    }));
                                    let t = {
                                        txHash: $.txHash,
                                        withdrawHash: e
                                    };
                                    await (0, j.putTransactions)(t, K.StakingAPI)
                                })).on("receipt", (async e => {
                                    ae((0, h.Aw)({
                                        hash: e.transactionHash,
                                        chainId: G,
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
                                    })), L(!0), B((e => [...e, "Challenge Period"]));
                                    let t = {
                                            stepPoint: "1 step",
                                            challengePeriod: !0,
                                            txHash: $.txHash,
                                            checkChallengePeriodStatus: !0
                                        },
                                        a = await (0, j.putTransactions)(t, K.StakingAPI);
                                    console.log("post resp", a), z(U(U({}, $), {}, {
                                        checkpointSigned: !0,
                                        challengePeriod: !0,
                                        withdrawHash: e
                                    }))
                                }))
                            }
                        } catch (n) {
                            console.log("startExitWithBurntTokens ", n), M("Checkpoint"), I.Am.error("Something went wrong. Try again later.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            }), 4001 === (null === n || void 0 === n ? void 0 : n.code) && (I.Am.error("User denied transaction.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            }), console.log("user denied transaction"), L(!1))
                        }
                    })()
                };
                return console.log("txState", $), (0, O.jsxs)(O.Fragment, {
                    children: [(0, O.jsx)(I.Ix, {}), (0, O.jsx)("div", {
                        className: "popmodal-body no-ht",
                        children: (0, O.jsx)("div", {
                            className: "pop-block withdraw_pop",
                            children: (0, O.jsxs)("div", {
                                className: "pop-top",
                                children: [(0, O.jsx)("hr", {}), (0, O.jsxs)("div", {
                                    className: "row",
                                    children: [(0, O.jsx)("div", {
                                        className: "col-6",
                                        children: "Transfer Amount"
                                    }), (0, O.jsxs)("div", {
                                        className: "col-6 text-end",
                                        children: [+y, " ", (null === w || void 0 === w ? void 0 : w.symbol) || (null === w || void 0 === w ? void 0 : w.key) || (null === $ || void 0 === $ || null === (t = $.token) || void 0 === t ? void 0 : t.symbol) || (null === $ || void 0 === $ || null === (a = $.token) || void 0 === a ? void 0 : a.key)]
                                    })]
                                }), (0, O.jsx)("hr", {}), (0, O.jsxs)("ul", {
                                    className: `stepper mt-3 del-step withdraw_steps ${("pos"==(null===w||void 0===w?void 0:w.bridgetype)||"pos"==(null===$||void 0===$||null===(n=$.token)||void 0===n?void 0:n.bridgetype))&&"pos_view"}`,
                                    children: [(0, O.jsxs)("li", {
                                        className: "step " + (k.includes("Initialized") ? "active" : ""),
                                        children: [(0, O.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, O.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, O.jsx)("div", {
                                            className: "step-title",
                                            children: "Initialized"
                                        })]
                                    }), (0, O.jsxs)("li", {
                                        className: `step ${k.includes("Checkpoint")&&"active"}`,
                                        children: [(0, O.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, O.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, O.jsx)("div", {
                                            className: "step-title",
                                            children: "Checkpoint"
                                        })]
                                    }), ("plasma" === (null === w || void 0 === w ? void 0 : w.bridgetype) || "plasma" === (null === $ || void 0 === $ || null === (l = $.token) || void 0 === l ? void 0 : l.bridgetype)) && (0, O.jsxs)("li", {
                                        className: `step ${k.includes("Challenge Period")&&"active"}`,
                                        children: [(0, O.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, O.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, O.jsx)("div", {
                                            className: "step-title",
                                            children: "Challenge Period"
                                        })]
                                    }), (0, O.jsxs)("li", {
                                        className: `step ${k.includes("Completed")&&"active"}`,
                                        children: [(0, O.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, O.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, O.jsx)("div", {
                                            className: "step-title",
                                            children: "Completed"
                                        })]
                                    })]
                                }), "Initialized" == C && (0, O.jsx)(O.Fragment, {
                                    children: (0, O.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center h-75",
                                        children: [(0, O.jsx)("div", {
                                            className: "text-center ",
                                            children: (0, O.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, O.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Processing your request"
                                        }), (0, O.jsx)("p", {
                                            className: "pb-3",
                                            children: "Your transaction will be confirmed in a few seconds."
                                        }), H && $ && $.txHash && $.txHash.transactionHash && (0, O.jsx)("a", {
                                            href: W(G, null === $ || void 0 === $ || null === (x = $.txHash) || void 0 === x ? void 0 : x.transactionHash, "transaction"),
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    })
                                }), "Checkpoint" == C && (0, O.jsx)(O.Fragment, {
                                    children: null !== $ && void 0 !== $ && $.checkpointSigned || S ? (0, O.jsxs)(O.Fragment, {
                                        children: [(0, O.jsxs)("div", {
                                            className: "align-items-center flex-column justify-content-center m-3 pop-grid text-center",
                                            children: [(0, O.jsx)("img", {
                                                src: "../../assets/images/check.png",
                                                alt: "",
                                                className: "img-fluid",
                                                height: "120",
                                                width: "120"
                                            }), (0, O.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Checkpoint Arrived"
                                            }), (0, O.jsx)("p", {
                                                className: "pb-3",
                                                children: "Your transaction has been checkpointed on the Ethereum Mainnet. Please proceed to the next transaction."
                                            }), $ && $.txHash && $.txHash.transactionHash && (0, O.jsx)("a", {
                                                href: W(G, null === $ || void 0 === $ || null === (g = $.txHash) || void 0 === g ? void 0 : g.transactionHash, "transaction"),
                                                target: "_blank",
                                                className: "primary-text",
                                                children: "View on Block Explorer"
                                            })]
                                        }), (0, O.jsx)("div", {
                                            className: "pop-bottom",
                                            children: (0, O.jsx)("div", {
                                                children: (0, O.jsx)("a", {
                                                    onClick: () => {
                                                        oe()
                                                    },
                                                    className: "btn primary w-100 primary-btn",
                                                    children: "Continue"
                                                })
                                            })
                                        })]
                                    }) : (0, O.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, O.jsx)("img", {
                                            src: "../../assets/images/waiting-small.png",
                                            alt: "",
                                            className: "img-fluid",
                                            height: "100",
                                            width: "100"
                                        }), (0, O.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Waiting for Checkpoint"
                                        }), (0, O.jsxs)("p", {
                                            className: "pb-3 ps-2 pe-2",
                                            children: ["Checkpointing creates better security on the chain. Checkpointing will take from 45 minutes to 3 hours.", " "]
                                        }), $ && $.txHash && $.txHash.transactionHash && (0, O.jsx)("a", {
                                            href: W(G, null === $ || void 0 === $ || null === (v = $.txHash) || void 0 === v ? void 0 : v.transactionHash, "transaction"),
                                            target: "_blank",
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    })
                                }), "Challenge Period" == C && (0, O.jsx)(O.Fragment, {
                                    children: null !== $ && void 0 !== $ && $.challengePeriod || _ ? (0, O.jsxs)(O.Fragment, {
                                        children: [(0, O.jsxs)("div", {
                                            className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                            children: [(0, O.jsx)("img", {
                                                src: "../../assets/images/check.png",
                                                alt: "",
                                                className: "img-fluid",
                                                height: "120",
                                                width: "120"
                                            }), (0, O.jsx)("h5", {
                                                className: "pt-3 pb-2",
                                                children: "Challenge period completed"
                                            }), (0, O.jsx)("p", {
                                                className: "pb-2 ps-2 pe-2",
                                                children: "Your token is ready to move from Shibarium to Ethereum Mainnet. Complete the last transaction and you're done."
                                            }), $ && $.txHash && $.txHash.transactionHash && (0, O.jsx)("a", {
                                                href: W(G, null === $ || void 0 === $ || null === (b = $.txHash) || void 0 === b ? void 0 : b.transactionHash, "transaction"),
                                                className: "primary-text",
                                                children: "View on Block Explorer"
                                            })]
                                        }), (0, O.jsxs)("div", {
                                            className: "pop-bottom",
                                            children: ["plasma" == (null === $ || void 0 === $ ? void 0 : $.bridgeType) && ne.isBefore(se.add(7, "days")) && (0, O.jsxs)("p", {
                                                className: "text-center d-flex w-100 justify-content-center align-items-center primary-text",
                                                style: {
                                                    fontSize: "13px"
                                                },
                                                children: ["Your plasma bridge BONE token unlocks after", " ", se.add(7, "days").format("DD MMMM YYYY")]
                                            }), (0, O.jsx)("div", {
                                                children: (0, O.jsx)("button", {
                                                    disabled: "plasma" == (null === $ || void 0 === $ ? void 0 : $.bridgeType) && ne.isBefore(se.add(7, "days")),
                                                    onClick: e => {
                                                        (async e => {
                                                            try {
                                                                if (e.preventDefault(), G !== K.L1Chain && await ie(K.L1Chain), G === K.L1Chain) {
                                                                    var t;
                                                                    M("Completed");
                                                                    let e = V,
                                                                        a = new q.eth.Contract(te, K.contractAddress.WITHDRAW_MANAGER_PROXY),
                                                                        n = (null === w || void 0 === w ? void 0 : w.parentContract) || (null === $ || void 0 === $ || null === (t = $.token) || void 0 === t ? void 0 : t.parentContract);
                                                                    console.log("token ", a), await a.methods.processExits(n).estimateGas({
                                                                        from: e
                                                                    }).then((e => {
                                                                        console.log("gas fee calculated =>", e)
                                                                    })).catch((e => {
                                                                        console.log("error calculating gas fee", e)
                                                                    })), await a.methods.processExits(n).send({
                                                                        from: V
                                                                    }).on("transactionHash", (async t => {
                                                                        ae((0, h.dT)({
                                                                            hash: t,
                                                                            from: e,
                                                                            chainId: G,
                                                                            summary: `${t}`
                                                                        }));
                                                                        let a = W(G, t, "transaction");
                                                                        F(a);
                                                                        let n = {
                                                                            txHash: $.txHash,
                                                                            finalhash: t
                                                                        };
                                                                        await (0, j.putTransactions)(n, K.StakingAPI)
                                                                    })).on("receipt", (async e => {
                                                                        ae((0, h.Aw)({
                                                                            hash: e.transactionHash,
                                                                            chainId: G,
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
                                                                        })), Y(), B((e => [...e, "Completed"])), D(!0);
                                                                        let t = {
                                                                                stepPoint: "0",
                                                                                processExit: !0,
                                                                                status: 1,
                                                                                txHash: $.txHash,
                                                                                checkProcessExitStatus: !0
                                                                            },
                                                                            a = await (0, j.putTransactions)(t, K.StakingAPI);
                                                                        console.log("post resp", a), z(U(U({}, $), {}, {
                                                                            processExit: !0,
                                                                            finalHash: e
                                                                        }))
                                                                    })).on("error", (e => {
                                                                        console.log("processExit ", e)
                                                                    }))
                                                                }
                                                            } catch (a) {
                                                                console.log("processExit ", a), M("Challenge Period"), I.Am.error("Something went wrong. Please try again later.", {
                                                                    position: I.Am.POSITION.TOP_RIGHT,
                                                                    autoClose: 5e3
                                                                }), 4001 === (null === a || void 0 === a ? void 0 : a.code) && I.Am.error("User denied transaction.", {
                                                                    position: I.Am.POSITION.TOP_RIGHT,
                                                                    autoClose: 5e3
                                                                })
                                                            }
                                                        })(e)
                                                    },
                                                    className: "btn primary w-100 primary-btn",
                                                    children: "Continue"
                                                })
                                            })]
                                        })]
                                    }) : (0, O.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, O.jsx)("div", {
                                            className: "text-center",
                                            children: (0, O.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, O.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, O.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Transaction in process"
                                            }), (0, O.jsx)("p", {
                                                className: "pb-3 ps-2 pe-2",
                                                children: "Ethereum transactions can take longer time to complete based upon network congestion. Please wait or increase the gas price of the transaction."
                                            })]
                                        })]
                                    })
                                }), "Completed" == C && (0, O.jsx)(O.Fragment, {
                                    children: null !== $ && void 0 !== $ && $.processExit || R ? (0, O.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, O.jsx)("img", {
                                            src: "../../../assets/images/cmpete-step.png",
                                            alt: ""
                                        }), (0, O.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Transfer Is In Progress"
                                        }), (0, O.jsx)("p", {
                                            className: "pb-3 ps-2 pe-2",
                                            children: "Your transfer is in Progress and in the Queue, It will take Up To 7 Days to get Completed."
                                        }), $ && $.txHash && $.txHash.transactionHash && (0, O.jsx)("a", {
                                            href: W(G, null === $ || void 0 === $ || null === (f = $.txHash) || void 0 === f ? void 0 : f.transactionHash, "transaction"),
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    }) : (0, O.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, O.jsx)("div", {
                                            className: "text-center",
                                            children: (0, O.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, O.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, O.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Transaction in process"
                                            }), (0, O.jsx)("p", {
                                                className: "pb-3 ps-2 pe-2",
                                                children: "Ethereum transactions can take longer time to complete based upon network congestion. Please wait or increase the gas price of the transaction."
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        993: function() {},
        32772: function() {},
        89568: function() {},
        40127: function() {},
        24414: function() {},
        94103: function() {}
    }
]);