(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9694], {
        66563: function(e, t, n) {
            "use strict";
            n.d(t, {
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
            var a = n(54331);
            const s = a.ChainId.SHIBARIUM,
                i = a.ChainId.SEPOLIA,
                o = (a.ChainId.ETHEREUM, a.ChainId.SHIBARIUM),
                r = a.ChainId.ETHEREUM
        },
        15254: function(e, t, n) {
            "use strict";
            var a = n(34864),
                s = n(49552),
                i = n.n(s),
                o = n(36375),
                r = n(47933);
            t.Z = () => {
                const {
                    library: e
                } = (0, o.aQ)(), {
                    user: t
                } = (0, r.bN)();
                return async n => {
                    const s = a.b[n];
                    i().set("chainId", n, s);
                    try {
                        return await (null === e || void 0 === e ? void 0 : e.send("wallet_switchEthereumChain", [{
                            chainId: `0x${n.toString(16)}`
                        }, t && t.wallet])), {
                            error: !1,
                            message: "Succesfully Switched"
                        }
                    } catch (o) {
                        if (4902 === o.code) try {
                            console.log({
                                params: s,
                                user: t
                            }), await (null === e || void 0 === e ? void 0 : e.send("wallet_addEthereumChain", [s, t && t.wallet]))
                        } catch (r) {}
                        return {
                            error: !0,
                            code: o.code,
                            message: o.message
                        }
                    }
                }
            }
        },
        18722: function(e, t, n) {
            "use strict";
            var a = n(75940),
                s = n(36375),
                i = n(18541),
                o = n(7678),
                r = n(67294);
            t.Z = () => {
                const {
                    account: e
                } = (0, s.aQ)(), t = (0, a.Z)(), [n, c] = (0, i.eT)(), l = () => {
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
                    pendingTransactionCount: n,
                    getTransactionsCount: l
                }
            }
        },
        34864: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return v
                }
            });
            var a = n(54331),
                s = n(32981),
                i = n(66721),
                o = n(36375),
                r = n(69629),
                c = n(21547),
                l = n(49552),
                d = n.n(l),
                h = n(25675),
                p = n.n(h),
                m = (n(67294), n(66563)),
                u = n(85893);
            const v = {
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
                [a.ChainId.SHIBARIUM]: {
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
                [a.ChainId.FANTOM]: {
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
                [a.ChainId.PUPPYNET]: {
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
                [a.ChainId.PUPPYNET917]: {
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
                [a.ChainId.PUPPYNET719]: {
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
                [a.ChainId.BSC]: {
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
                [a.ChainId.MATIC]: {
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
                [a.ChainId.HECO]: {
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
                [a.ChainId.XDAI]: {
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
                [a.ChainId.HARMONY]: {
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
                [a.ChainId.AVALANCHE]: {
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
                [a.ChainId.OKEX]: {
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
                [a.ChainId.ARBITRUM]: {
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
                [a.ChainId.CELO]: {
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
                [a.ChainId.MOONRIVER]: {
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
                [a.ChainId.FUSE]: {
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
                [a.ChainId.TELOS]: {
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
                [a.ChainId.PALM]: {
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
                    account: n
                } = (0, o.aQ)(), a = (0, c.oL)(r.Lk.NETWORK), l = (0, c.o)();
                return e ? (0, u.jsx)(s.Z.Controlled, {
                    isOpen: a,
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
                            children: [m.Fu, m.wq].map(((a, s) => e === a ? (0, u.jsxs)("div", {
                                className: "bg-[rgba(0,0,0,0.2)] focus:outline-none flex items-center gap-4 w-full px-4 py-3 rounded border border-purple cursor-default txt-color",
                                children: [(0, u.jsx)(p(), {
                                    src: i.wP[a],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, u.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: i.zl[a]
                                })]
                            }, s) : (0, u.jsxs)("button", {
                                onClick: async () => {
                                    console.debug(`Switching to chain ${a}`, v[a]), l();
                                    const e = v[a];
                                    d().set("chainId", a, e), console.log("params => ", a);
                                    try {
                                        await (null === t || void 0 === t ? void 0 : t.send("wallet_switchEthereumChain", [{
                                            chainId: `0x${a.toString(16)}`
                                        }, n]))
                                    } catch (s) {
                                        if (4902 === s.code) try {
                                            console.log("switchError ", {
                                                params: e,
                                                account: n,
                                                switchError: s
                                            }), await (null === t || void 0 === t ? void 0 : t.send("wallet_addEthereumChain", [e, n]))
                                        } catch (i) {
                                            console.error(`Add chain error ${i}`)
                                        }
                                        console.error(`Switch chain error ${s}`)
                                    }
                                },
                                className: "",
                                children: [(0, u.jsx)(p(), {
                                    src: i.wP[a],
                                    alt: "Switch Network",
                                    className: "rounded-md",
                                    width: 32,
                                    height: 32
                                }), (0, u.jsx)("p", {
                                    className: "text-high-emphesis",
                                    children: i.zl[a]
                                })]
                            }, s)))
                        })]
                    })
                }) : null
            }
        },
        7678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTransactions: function() {
                    return o
                },
                putTransactions: function() {
                    return i
                }
            });
            var a = n(5121);
            const s = {
                    "Content-Type": "application/json",
                    mode: "cors"
                },
                i = async (e, t) => {
                    try {
                        return await a.Z.put(`${t}/transactions`, e, {
                            headers: s
                        })
                    } catch (n) {
                        return {}
                    }
                },
                o = async (e, t) => {
                    try {
                        var n;
                        let i = await a.Z.get(`${t}/transactions/getTransactions?walletAddress=${e}`, {
                            headers: s
                        });
                        return null === i || void 0 === i || null === (n = i.data) || void 0 === n ? void 0 : n.data
                    } catch (i) {
                        return null
                    }
                };
            t.default = async (e, t) => {
                try {
                    return await a.Z.post(`${t}/transactions`, e, {
                        headers: s
                    })
                } catch (n) {
                    return {}
                }
            }
        },
        39794: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n(59499),
                s = n(95477),
                i = n(79684),
                o = n(36375),
                r = n(67294),
                c = n(52795),
                l = n(37918),
                d = n.n(l),
                h = n(93085),
                p = n(86771),
                m = n(73640),
                u = n(76704),
                v = n(47969),
                x = n.n(v),
                g = n(60387),
                w = n(82686),
                b = n(23494),
                f = n(62274),
                C = n(67072),
                y = n(54331);
            var k = function() {
                var e, t, n, a, s, i, o, r, c, l, d, h, p, m, u;
                let v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                const x = v == y.ChainId.ETHEREUM || v == y.ChainId.SHIBARIUM ? f : C,
                    {
                        account: g,
                        network: w,
                        apis: b
                    } = {
                        account: {
                            mnemonic: null === x || void 0 === x || null === (e = x.contractAddress) || void 0 === e ? void 0 : e.MNEMONIC,
                            admin_wallet: null === x || void 0 === x || null === (t = x.contractAddress) || void 0 === t ? void 0 : t.ADMIN_WALLET,
                            from: null === x || void 0 === x || null === (n = x.contractAddress) || void 0 === n ? void 0 : n.ADMIN_WALLET,
                            num_wallets: null !== x && void 0 !== x && null !== (a = x.contractAddress) && void 0 !== a && a.PROVIDER_NUM_ACCOUNTS ? parseInt(x.contractAddress.PROVIDER_NUM_ACCOUNTS, 10) : 50
                        },
                        network: {
                            network: null === x || void 0 === x || null === (s = x.contractAddress) || void 0 === s ? void 0 : s.NET_NAME,
                            version: null === x || void 0 === x || null === (i = x.contractAddress) || void 0 === i ? void 0 : i.NET_VERS,
                            parent: {
                                rpc: null === x || void 0 === x || null === (o = x.contractAddress) || void 0 === o ? void 0 : o.ROOT_RPC_HTTP,
                                ws: null === x || void 0 === x || null === (r = x.contractAddress) || void 0 === r ? void 0 : r.ROOT_WS_HTTP
                            },
                            child: {
                                rpc: null === x || void 0 === x || null === (c = x.contractAddress) || void 0 === c ? void 0 : c.CHILD_RPC_HTTP,
                                ws: null === x || void 0 === x || null === (l = x.contractAddress) || void 0 === l ? void 0 : l.CHILD_WS_HTTP
                            },
                            heimdall: {
                                rpc: null === x || void 0 === x || null === (d = x.contractAddress) || void 0 === d ? void 0 : d.HEIMDALL_RPC,
                                rest: null === x || void 0 === x || null === (h = x.contractAddress) || void 0 === h ? void 0 : h.HEIMDALL_REST
                            }
                        },
                        apis: {
                            staking_api: null === x || void 0 === x || null === (p = x.contractAddress) || void 0 === p ? void 0 : p.STAKING_API_URL,
                            proof_api: null === x || void 0 === x || null === (m = x.contractAddress) || void 0 === m ? void 0 : m.PROOF_API_URL,
                            abi_api: null === x || void 0 === x || null === (u = x.contractAddress) || void 0 === u ? void 0 : u.ABI_API_URL
                        }
                    };
                let k = g.num_wallets;
                k <= 0 && (k = 50);
                const N = {
                    network: w.network,
                    version: w.version,
                    parent: {
                        rpc: w.parent.rpc,
                        ws: w.parent.ws
                    },
                    child: {
                        rpc: w.child.rpc,
                        ws: w.child.ws
                    },
                    heimdall: {
                        rpc: w.heimdall.rpc,
                        rest: w.heimdall.rest
                    }
                };
                return {
                    account: g,
                    _network: N,
                    apis: b
                }
            };
            var N = () => {
                    const {
                        chainId: e = 1
                    } = (0, o.aQ)(), {
                        account: t,
                        _network: n,
                        apis: a
                    } = k(e);
                    (0, r.useEffect)((() => {
                        a && ((0, g.setProofApi)(a.proof_api), (0, g.setAbiApi)(a.abi_api)), (0, g.use)(b.Web3ClientPlugin)
                    }), []);
                    const s = new(x())({
                            mnemonic: {
                                phrase: t.mnemonic
                            },
                            providerOrUrl: n.parent.rpc,
                            numberOfAddresses: t.num_wallets
                        }),
                        i = new(x())({
                            mnemonic: {
                                phrase: t.mnemonic
                            },
                            providerOrUrl: n.child.rpc,
                            numberOfAddresses: t.num_wallets
                        }),
                        c = () => {
                            try {
                                return (new g.POSClient).init({
                                    log: !1,
                                    network: n.network,
                                    version: n.version,
                                    child: {
                                        provider: i,
                                        defaultConfig: {
                                            from: t.from
                                        }
                                    },
                                    parent: {
                                        provider: s,
                                        defaultConfig: {
                                            from: t.from
                                        }
                                    }
                                })
                            } catch (e) {
                                return console.error("error unable to initiate plasmaClient", e), null
                            }
                        };
                    return {
                        loadContract: async function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "l1",
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "plasma";
                            const s = await c(),
                                i = await s.client.abiManager.getABI(t, a),
                                o = l.utils.isAddress(e) ? e : s.client.abiManager.getConfig(e);
                            let r;
                            return "l1" === n ? (r = await s.client.parent.getContract(o, i), r.contract) : (r = await s.client.child.getContract(o, i), r.contract)
                        },
                        getContractAddress: async e => (await c()).client.abiManager.getConfig(e),
                        getAbiJson: async function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "plasma";
                            const n = await c();
                            return n.client.abiManager.getABI(e, t)
                        },
                        getClient: async e => (console.log("client type => ", e), "pos" === e ? c() : async function() {
                            try {
                                return (new w.PlasmaClient).init({
                                    network: n.network,
                                    version: n.version,
                                    parent: {
                                        provider: s,
                                        defaultConfig: {
                                            from: t.from
                                        }
                                    },
                                    child: {
                                        provider: i,
                                        defaultConfig: {
                                            from: t.from
                                        }
                                    }
                                })
                            } catch (e) {
                                return console.error("error unable to initiate plasmaClient", e), null
                            }
                        }())
                    }
                },
                I = n(55678),
                E = (n(27967), n(7678)),
                j = n(18722),
                A = n(27484),
                H = n.n(A),
                P = n(75940),
                T = n(15254),
                O = n(47933),
                S = n(85893);

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = e => {
                var t, n, a, l, v, x, g, w, b;
                let {
                    withdrawTokenInput: f,
                    selectedToken: C,
                    processing: y,
                    step: k,
                    hashLink: A,
                    checkpointSigned: U,
                    challengePeriodCompleted: M = !0,
                    setProcessing: R,
                    setStep: B,
                    setHashLink: L,
                    setChallengePeriodCompleted: D,
                    completed: F,
                    setCompleted: W,
                    page: Z
                } = e;
                const $ = (0, i.B9)(),
                    [V, Y] = (0, c.Z)("txState"),
                    {
                        getTransactionsCount: G
                    } = (0, j.Z)(),
                    {
                        chainId: z = 1,
                        library: K
                    } = (0, o.aQ)(),
                    {
                        user: Q
                    } = (0, O.bN)(),
                    X = (0, P.Z)(),
                    q = K,
                    J = new(d())(null === q || void 0 === q ? void 0 : q.provider),
                    ee = (0, u.S)("abis/pos/RootChainManager.json"),
                    te = (0, u.S)("abis/plasma/ERC20PredicateBurnOnly.json"),
                    ne = (0, u.S)("abis/plasma/WithdrawManager.json"),
                    ae = (0, p.T)(),
                    se = H()(),
                    ie = H()(null === V || void 0 === V ? void 0 : V.updatedAt),
                    oe = (0, T.Z)(),
                    {
                        getClient: re
                    } = N();
                (0, r.useEffect)((() => {
                    if (V && "tx" == Z) {
                        let e = $(z, null === V || void 0 === V ? void 0 : V.txHash, "transaction");
                        L(e)
                    }
                }), []);
                const ce = async () => {
                    var e;
                    "pos" === (null === V || void 0 === V || null === (e = V.token) || void 0 === e ? void 0 : e.bridgetype) ? await (async () => {
                        try {
                            if (z !== X.L1Chain && await oe(X.L1Chain), z === X.L1Chain) {
                                var e, t, n;
                                B("Completed");
                                const a = (null === C || void 0 === C ? void 0 : C.bridgetype) || (null === V || void 0 === V || null === (e = V.token) || void 0 === e ? void 0 : e.bridgetype),
                                    s = await re(a);
                                console.log("client done", s);
                                let i = X.contractAddress.WITHDRAW_POS;
                                const o = new J.eth.Contract(ee, i);
                                console.log("instance done", o);
                                const r = null === V || void 0 === V || null === (t = V.txData) || void 0 === t || null === (n = t.Transfer) || void 0 === n ? void 0 : n.signature;
                                let c;
                                s && (c = await s.exitUtil.buildPayloadForExit(null === V || void 0 === V ? void 0 : V.txHash, r.toLowerCase(), !1, 0)), console.log("erx 20 token data ", c);
                                let l = await o.methods.exit(c).estimateGas({
                                        from: Q && Q.wallet
                                    }),
                                    d = await o.methods.exit(c).encodeABI(),
                                    p = await (0, m.tV)(J);
                                await J.eth.sendTransaction({
                                    from: Q && Q.wallet,
                                    to: i,
                                    gas: (parseInt(l) + 3e4).toString(),
                                    gasPrice: p,
                                    data: d
                                }).on("transactionHash", (async e => {
                                    ae((0, h.dT)({
                                        hash: e,
                                        from: Q && Q.wallet,
                                        chainId: z,
                                        summary: `${e}`
                                    }));
                                    let t = {
                                        txHash: V.txHash,
                                        withdrawHash: e,
                                        finalHash: e
                                    };
                                    await (0, E.putTransactions)(t, X.StakingAPI)
                                })).on("receipt", (async e => {
                                    ae((0, h.Aw)({
                                        hash: e.transactionHash,
                                        chainId: z,
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
                                    })), G(), R((e => [...e, "Completed"])), B("Completed"), W(!0);
                                    let t = {
                                            stepPoint: "0",
                                            challengePeriod: !0,
                                            processExit: !0,
                                            status: 1,
                                            txHash: V.txHash,
                                            checkProcessExitStatus: !0,
                                            checkChallengePeriodStatus: !0
                                        },
                                        n = await (0, E.putTransactions)(t, X.StakingAPI);
                                    console.log("post resp", n), Y(_(_({}, V), {}, {
                                        checkpointSigned: !0,
                                        challengePeriod: !0,
                                        processExit: !0,
                                        withdrawHash: e
                                    }))
                                }))
                            }
                        } catch (a) {
                            console.log("posExit error ", a), B("Checkpoint"), D(!1), I.Am.error("Something went wrong. Try again later.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            })
                        }
                    })() : (async () => {
                        try {
                            if (z !== X.L1Chain && await oe(X.L1Chain), z === X.L1Chain) {
                                var e, t, n;
                                let a = X.contractAddress.WITHDRAW_PLASMA;
                                console.log("contract", a);
                                let s = (null === C || void 0 === C ? void 0 : C.bridgetype) || (null === V || void 0 === V || null === (e = V.token) || void 0 === e ? void 0 : e.bridgetype);
                                B("Challenge Period");
                                const i = await re(s);
                                let o;
                                console.log("client", i);
                                const r = new J.eth.Contract(te, a);
                                console.log("instance", r);
                                const c = null === V || void 0 === V || null === (t = V.txData) || void 0 === t || null === (n = t.Withdraw) || void 0 === n ? void 0 : n.signature;
                                console.log("data", c), i && (console.log(" txState?.txHash", null === V || void 0 === V ? void 0 : V.txHash), console.log("data.toLowerCase()", c.toLowerCase()), o = await i.exitUtil.buildPayloadForExit(null === V || void 0 === V ? void 0 : V.txHash, c.toLowerCase(), !1, 0)), console.log("erc20Token", o);
                                let l = await r.methods.startExitWithBurntTokens(o).estimateGas({
                                    from: Q && Q.wallet
                                });
                                console.log("step erc20 token=>", l, Q, Q && Q.wallet);
                                let d = await r.methods.startExitWithBurntTokens(o).encodeABI();
                                console.log("encodedAbi", d);
                                let p = await (0, m.tV)(J);
                                console.log("CurrentgasPrice", p), await J.eth.sendTransaction({
                                    from: Q && Q.wallet,
                                    to: a,
                                    gas: parseInt(l).toString(),
                                    gasPrice: p,
                                    data: d
                                }).on("transactionHash", (async e => {
                                    ae((0, h.dT)({
                                        hash: e,
                                        from: Q && Q.wallet,
                                        chainId: z,
                                        summary: `${e}`
                                    }));
                                    let t = {
                                        txHash: V.txHash,
                                        withdrawHash: e
                                    };
                                    await (0, E.putTransactions)(t, X.StakingAPI)
                                })).on("receipt", (async e => {
                                    ae((0, h.Aw)({
                                        hash: e.transactionHash,
                                        chainId: z,
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
                                    })), D(!0), R((e => [...e, "Challenge Period"]));
                                    let t = {
                                            stepPoint: "1 step",
                                            challengePeriod: !0,
                                            txHash: V.txHash,
                                            checkChallengePeriodStatus: !0
                                        },
                                        n = await (0, E.putTransactions)(t, X.StakingAPI);
                                    console.log("post resp", n), Y(_(_({}, V), {}, {
                                        checkpointSigned: !0,
                                        challengePeriod: !0,
                                        withdrawHash: e
                                    }))
                                }))
                            }
                        } catch (a) {
                            console.log("startExitWithBurntTokens ", a), B("Checkpoint"), I.Am.error("Something went wrong. Try again later.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            }), 4001 === (null === a || void 0 === a ? void 0 : a.code) && (I.Am.error("User denied transaction.", {
                                position: I.Am.POSITION.TOP_RIGHT,
                                autoClose: 5e3
                            }), console.log("user denied transaction"), D(!1))
                        }
                    })()
                };
                return console.log("txState", V), (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsx)(I.Ix, {}), (0, S.jsx)("div", {
                        className: "popmodal-body no-ht",
                        children: (0, S.jsx)("div", {
                            className: "pop-block withdraw_pop",
                            children: (0, S.jsxs)("div", {
                                className: "pop-top",
                                children: [(0, S.jsx)("hr", {}), (0, S.jsxs)("div", {
                                    className: "row",
                                    children: [(0, S.jsx)("div", {
                                        className: "col-6",
                                        children: "Transfer Amount"
                                    }), (0, S.jsxs)("div", {
                                        className: "col-6 text-end",
                                        children: [+f, " ", (null === C || void 0 === C ? void 0 : C.symbol) || (null === C || void 0 === C ? void 0 : C.key) || (null === V || void 0 === V || null === (t = V.token) || void 0 === t ? void 0 : t.symbol) || (null === V || void 0 === V || null === (n = V.token) || void 0 === n ? void 0 : n.key)]
                                    })]
                                }), (0, S.jsx)("hr", {}), (0, S.jsxs)("ul", {
                                    className: `stepper mt-3 del-step withdraw_steps ${("pos"==(null===C||void 0===C?void 0:C.bridgetype)||"pos"==(null===V||void 0===V||null===(a=V.token)||void 0===a?void 0:a.bridgetype))&&"pos_view"}`,
                                    children: [(0, S.jsxs)("li", {
                                        className: "step " + (y.includes("Initialized") ? "active" : ""),
                                        children: [(0, S.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, S.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, S.jsx)("div", {
                                            className: "step-title",
                                            children: "Initialized"
                                        })]
                                    }), (0, S.jsxs)("li", {
                                        className: `step ${y.includes("Checkpoint")&&"active"}`,
                                        children: [(0, S.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, S.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, S.jsx)("div", {
                                            className: "step-title",
                                            children: "Checkpoint"
                                        })]
                                    }), ("plasma" === (null === C || void 0 === C ? void 0 : C.bridgetype) || "plasma" === (null === V || void 0 === V || null === (l = V.token) || void 0 === l ? void 0 : l.bridgetype)) && (0, S.jsxs)("li", {
                                        className: `step ${y.includes("Challenge Period")&&"active"}`,
                                        children: [(0, S.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, S.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, S.jsx)("div", {
                                            className: "step-title",
                                            children: "Challenge Period"
                                        })]
                                    }), (0, S.jsxs)("li", {
                                        className: `step ${y.includes("Completed")&&"active"}`,
                                        children: [(0, S.jsx)("div", {
                                            className: "step-ico",
                                            children: (0, S.jsx)("img", {
                                                className: "img-fluid",
                                                src: "../../assets/images/tick-yes.png",
                                                alt: "check-icon"
                                            })
                                        }), (0, S.jsx)("div", {
                                            className: "step-title",
                                            children: "Completed"
                                        })]
                                    })]
                                }), "Initialized" == k && (0, S.jsx)(S.Fragment, {
                                    children: (0, S.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center h-75",
                                        children: [(0, S.jsx)("div", {
                                            className: "text-center ",
                                            children: (0, S.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, S.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Processing your request"
                                        }), (0, S.jsx)("p", {
                                            className: "pb-3",
                                            children: "Your transaction will be confirmed in a few seconds."
                                        }), A && V && V.txHash && V.txHash.transactionHash && (0, S.jsx)("a", {
                                            href: $(z, null === V || void 0 === V || null === (v = V.txHash) || void 0 === v ? void 0 : v.transactionHash, "transaction"),
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    })
                                }), "Checkpoint" == k && (0, S.jsx)(S.Fragment, {
                                    children: null !== V && void 0 !== V && V.checkpointSigned || U ? (0, S.jsxs)(S.Fragment, {
                                        children: [(0, S.jsxs)("div", {
                                            className: "align-items-center flex-column justify-content-center m-3 pop-grid text-center",
                                            children: [(0, S.jsx)("img", {
                                                src: "../../assets/images/check.png",
                                                alt: "",
                                                className: "img-fluid",
                                                height: "120",
                                                width: "120"
                                            }), (0, S.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Checkpoint Arrived"
                                            }), (0, S.jsx)("p", {
                                                className: "pb-3",
                                                children: "Your transaction has been checkpointed on the Ethereum Mainnet. Please proceed to the next transaction."
                                            }), V && V.txHash && V.txHash.transactionHash && (0, S.jsx)("a", {
                                                href: $(z, null === V || void 0 === V || null === (x = V.txHash) || void 0 === x ? void 0 : x.transactionHash, "transaction"),
                                                target: "_blank",
                                                className: "primary-text",
                                                children: "View on Block Explorer"
                                            })]
                                        }), (0, S.jsx)("div", {
                                            className: "pop-bottom",
                                            children: (0, S.jsx)("div", {
                                                children: (0, S.jsx)("a", {
                                                    onClick: () => {
                                                        ce()
                                                    },
                                                    className: "btn primary w-100 primary-btn",
                                                    children: "Continue"
                                                })
                                            })
                                        })]
                                    }) : (0, S.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, S.jsx)("img", {
                                            src: "../../assets/images/waiting-small.png",
                                            alt: "",
                                            className: "img-fluid",
                                            height: "100",
                                            width: "100"
                                        }), (0, S.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Waiting for Checkpoint"
                                        }), (0, S.jsxs)("p", {
                                            className: "pb-3 ps-2 pe-2",
                                            children: ["Checkpointing creates better security on the chain. Checkpointing will take from 45 minutes to 3 hours.", " "]
                                        }), V && V.txHash && V.txHash.transactionHash && (0, S.jsx)("a", {
                                            href: $(z, null === V || void 0 === V || null === (g = V.txHash) || void 0 === g ? void 0 : g.transactionHash, "transaction"),
                                            target: "_blank",
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    })
                                }), "Challenge Period" == k && (0, S.jsx)(S.Fragment, {
                                    children: null !== V && void 0 !== V && V.challengePeriod || M ? (0, S.jsxs)(S.Fragment, {
                                        children: [(0, S.jsxs)("div", {
                                            className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                            children: [(0, S.jsx)("img", {
                                                src: "../../assets/images/check.png",
                                                alt: "",
                                                className: "img-fluid",
                                                height: "120",
                                                width: "120"
                                            }), (0, S.jsx)("h5", {
                                                className: "pt-3 pb-2",
                                                children: "Challenge period completed"
                                            }), (0, S.jsx)("p", {
                                                className: "pb-2 ps-2 pe-2",
                                                children: "Your token is ready to move from Shibarium to Ethereum Mainnet. Complete the last transaction and you're done."
                                            }), V && V.txHash && V.txHash.transactionHash && (0, S.jsx)("a", {
                                                href: $(z, null === V || void 0 === V || null === (w = V.txHash) || void 0 === w ? void 0 : w.transactionHash, "transaction"),
                                                className: "primary-text",
                                                children: "View on Block Explorer"
                                            })]
                                        }), (0, S.jsxs)("div", {
                                            className: "pop-bottom",
                                            children: ["plasma" == (null === V || void 0 === V ? void 0 : V.bridgeType) && se.isBefore(ie.add(7, "days")) && (0, S.jsxs)("p", {
                                                className: "text-center d-flex w-100 justify-content-center align-items-center primary-text",
                                                style: {
                                                    fontSize: "13px"
                                                },
                                                children: ["Your plasma bridge BONE token unlocks after", " ", ie.add(7, "days").format("DD MMMM YYYY")]
                                            }), (0, S.jsx)("div", {
                                                children: (0, S.jsx)("button", {
                                                    disabled: "plasma" == (null === V || void 0 === V ? void 0 : V.bridgeType) && se.isBefore(ie.add(7, "days")),
                                                    onClick: e => {
                                                        (async e => {
                                                            try {
                                                                if (e.preventDefault(), z !== X.L1Chain && await oe(X.L1Chain), z === X.L1Chain) {
                                                                    var t;
                                                                    B("Completed");
                                                                    let e = new J.eth.Contract(ne, X.contractAddress.WITHDRAW_MANAGER_PROXY),
                                                                        n = (null === C || void 0 === C ? void 0 : C.parentContract) || (null === V || void 0 === V || null === (t = V.token) || void 0 === t ? void 0 : t.parentContract);
                                                                    console.log("token ", e), await e.methods.processExits(n).estimateGas({
                                                                        from: Q && Q.wallet
                                                                    }).then((e => {
                                                                        console.log("gas fee calculated =>", e)
                                                                    })).catch((e => {
                                                                        console.log("error calculating gas fee", e)
                                                                    })), await e.methods.processExits(n).send({
                                                                        from: Q && Q.wallet
                                                                    }).on("transactionHash", (async e => {
                                                                        ae((0, h.dT)({
                                                                            hash: e,
                                                                            from: Q && Q.wallet,
                                                                            chainId: z,
                                                                            summary: `${e}`
                                                                        }));
                                                                        let t = $(z, e, "transaction");
                                                                        L(t);
                                                                        let n = {
                                                                            txHash: V.txHash,
                                                                            finalhash: e
                                                                        };
                                                                        await (0, E.putTransactions)(n, X.StakingAPI)
                                                                    })).on("receipt", (async e => {
                                                                        ae((0, h.Aw)({
                                                                            hash: e.transactionHash,
                                                                            chainId: z,
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
                                                                        })), G(), R((e => [...e, "Completed"])), W(!0);
                                                                        let t = {
                                                                                stepPoint: "0",
                                                                                processExit: !0,
                                                                                status: 1,
                                                                                txHash: V.txHash,
                                                                                checkProcessExitStatus: !0
                                                                            },
                                                                            n = await (0, E.putTransactions)(t, X.StakingAPI);
                                                                        console.log("post resp", n), Y(_(_({}, V), {}, {
                                                                            processExit: !0,
                                                                            finalHash: e
                                                                        }))
                                                                    })).on("error", (e => {
                                                                        console.log("processExit ", e)
                                                                    }))
                                                                }
                                                            } catch (n) {
                                                                console.log("processExit ", n), B("Challenge Period"), I.Am.error("Something went wrong. Please try again later.", {
                                                                    position: I.Am.POSITION.TOP_RIGHT,
                                                                    autoClose: 5e3
                                                                }), 4001 === (null === n || void 0 === n ? void 0 : n.code) && I.Am.error("User denied transaction.", {
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
                                    }) : (0, S.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, S.jsx)("div", {
                                            className: "text-center",
                                            children: (0, S.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, S.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, S.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Transaction in process"
                                            }), (0, S.jsx)("p", {
                                                className: "pb-3 ps-2 pe-2",
                                                children: "Ethereum transactions can take longer time to complete based upon network congestion. Please wait or increase the gas price of the transaction."
                                            })]
                                        })]
                                    })
                                }), "Completed" == k && (0, S.jsx)(S.Fragment, {
                                    children: null !== V && void 0 !== V && V.processExit || F ? (0, S.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, S.jsx)("img", {
                                            src: "../../../assets/images/cmpete-step.png",
                                            alt: ""
                                        }), (0, S.jsx)("h5", {
                                            className: "pt-4 pb-2",
                                            children: "Transfer Is In Progress"
                                        }), (0, S.jsx)("p", {
                                            className: "pb-3 ps-2 pe-2",
                                            children: "Your transfer is in Progress and in the Queue, It will take Up To 7 Days to get Completed."
                                        }), V && V.txHash && V.txHash.transactionHash && (0, S.jsx)("a", {
                                            href: $(z, null === V || void 0 === V || null === (b = V.txHash) || void 0 === b ? void 0 : b.transactionHash, "transaction"),
                                            className: "primary-text",
                                            children: "View on Block Explorer"
                                        })]
                                    }) : (0, S.jsxs)("div", {
                                        className: "pop-grid flex-column align-items-center justify-content-center text-center",
                                        children: [(0, S.jsx)("div", {
                                            className: "text-center",
                                            children: (0, S.jsx)(s.Z, {
                                                style: {
                                                    color: " #F28B03"
                                                },
                                                size: 100
                                            })
                                        }), (0, S.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, S.jsx)("h5", {
                                                className: "pt-4 pb-2",
                                                children: "Transaction in process"
                                            }), (0, S.jsx)("p", {
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