"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1229], {
        66850: function(e, t, s) {
            function n(e) {
                return Array.isArray(e) ? e : String(e).split(/[eE]/)
            }

            function a(e) {
                const t = n(e);
                if (! function(e) {
                        const t = n(e);
                        return !Number.isNaN(Number(t[1]))
                    }(t)) return t[0];
                const s = "-" === t[0][0] ? "-" : "",
                    a = t[0].replace(/^-/, "").split("."),
                    i = a[0],
                    r = a[1] || "";
                let o = Number(t[1]);
                if (0 === o) return `${s+i}.${r}`;
                if (o < 0) {
                    const e = i.length + o;
                    if (e > 0) {
                        return `${s+i.substr(0,e)}.${i.substr(e)}${r}`
                    } {
                        let t = "0.";
                        for (o = e; o;) t += "0", o += 1;
                        return s + t + i + r
                    }
                } {
                    const e = r.length - o;
                    if (e > 0) {
                        const e = r.substr(o);
                        return `${s+i+r.substr(0,o)}.${e}`
                    } {
                        let t = -e,
                            n = "";
                        for (; t;) n += "0", t -= 1;
                        return s + i + r + n
                    }
                }
            }
            s.d(t, {
                Z: function() {
                    return a
                }
            })
        },
        81229: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s(59499),
                a = s(36375),
                i = s(67294),
                r = s(37918),
                o = s.n(r),
                l = s(73640),
                d = s(76704),
                p = s(48404),
                c = s(97552),
                u = s(93085),
                y = s(86771),
                m = s(37150),
                b = s(80857),
                h = s(16390),
                f = s(94821),
                x = s(57545),
                v = s(22406),
                T = s(44732),
                j = s(65179),
                g = s(4285),
                w = s(7925),
                N = s(30929),
                k = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"tokenType","type":"bytes32"},{"indexed":true,"internalType":"address","name":"predicateAddress","type":"address"}],"name":"PredicateRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"rootToken","type":"address"},{"indexed":true,"internalType":"address","name":"childToken","type":"address"},{"indexed":true,"internalType":"bytes32","name":"tokenType","type":"bytes32"}],"name":"TokenMapped","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSIT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ETHER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAPPER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAP_TOKEN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkpointManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"childChainManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"childToRootToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rootToken","type":"address"},{"internalType":"address","name":"childToken","type":"address"}],"name":"cleanMapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"depositEtherFor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"rootToken","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"inputData","type":"bytes"}],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initializeEIP712","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rootToken","type":"address"},{"internalType":"address","name":"childToken","type":"address"},{"internalType":"bytes32","name":"tokenType","type":"bytes32"}],"name":"mapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"processedExits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tokenType","type":"bytes32"},{"internalType":"address","name":"predicateAddress","type":"address"}],"name":"registerPredicate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rootToken","type":"address"},{"internalType":"address","name":"childToken","type":"address"},{"internalType":"bytes32","name":"tokenType","type":"bytes32"}],"name":"remapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rootToChildToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newCheckpointManager","type":"address"}],"name":"setCheckpointManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newChildChainManager","type":"address"}],"name":"setChildChainManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newStateSender","type":"address"}],"name":"setStateSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setupContractId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stateSenderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenToType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"typeToPredicate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                O = s(47933),
                M = s(85893);

            function E(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, n)
                }
                return s
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(s), !0).forEach((function(t) {
                        (0, n.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : E(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            const C = {
                step0: !0,
                step1: !1,
                step2: !1,
                step3: !1,
                step4: !1,
                title: "Please Note"
            };
            var S = e => {
                let {
                    depositTokenInput: t,
                    showDepositModal: s,
                    setDepositModal: n,
                    selectedToken: r,
                    hashLink: E,
                    setHashLink: S,
                    reset: A
                } = e;
                const R = (0, b.Z)(),
                    {
                        chainId: D = 1,
                        library: I
                    } = (0, a.aQ)(),
                    _ = I,
                    F = new(o())(null === _ || void 0 === _ ? void 0 : _.provider),
                    {
                        0: G,
                        1: L
                    } = (0, i.useState)(-1),
                    {
                        0: H,
                        1: Z
                    } = (0, i.useState)(0),
                    U = (0, y.T)(),
                    {
                        0: V,
                        1: $
                    } = (0, i.useState)(""),
                    {
                        0: Y,
                        1: B
                    } = (0, i.useState)(!1),
                    {
                        0: W,
                        1: X
                    } = (0, i.useState)(18),
                    {
                        0: q,
                        1: z
                    } = (0, i.useState)(C),
                    J = (0, d.S)("abis/plasma/DepositManager.json"),
                    K = (0, d.S)("abis/pos/ERC20.json"),
                    {
                        0: Q,
                        1: ee
                    } = (0, i.useState)(0),
                    te = (0, h.Z)(),
                    se = (0, f.Z)(null === r || void 0 === r ? void 0 : r.parentContract),
                    ne = (0, x.Z)(),
                    ae = null === r || void 0 === r ? void 0 : r.childContract,
                    ie = null === r || void 0 === r ? void 0 : r.parentContract,
                    re = (0, v.q)(),
                    {
                        user: oe
                    } = (0, O.bN)();
                (0, i.useEffect)((() => {
                    "ETH" == (null === r || void 0 === r ? void 0 : r.key) ? ee(te): ee(se)
                }), [r, se, te]), (0, i.useEffect)((() => {
                    le()
                }), [J, k]);
                const le = async () => {
                        if (Z(0), "Ether" !== r.parentName) {
                            let e, s = R.L1Chain ? ie : ae;
                            e = "plasma" == (null === r || void 0 === r ? void 0 : r.bridgetype) ? R.contractAddress.DEPOSIT_MANAGER_PROXY : R.contractAddress.ERC20_PREDICATE;
                            let n = await (0, l.J4)(I, s, oe.wallet, e) ? ? 0;
                            console.log({
                                checkAllowance: n
                            });
                            let a = re(t, "ether"),
                                i = await ne(); + n < +t ? await pe(e, a, oe.wallet, i) : (L(0), await ce(a))
                        } else L(0), await de()
                    },
                    de = async () => {
                        try {
                            if (!k) return;
                            let e = await ne(),
                                t = R.contractAddress.ROOTCHAIN_MANAGER_PROXY,
                                s = k,
                                n = new F.eth.Contract(s, t),
                                a = await n.methods.depositEtherFor(oe.wallet).estimateGas({
                                    from: oe.wallet
                                });
                            Z(+a * +e / Math.pow(10, 18))
                        } catch (e) {
                            c.Tb("getFeeForEtherDeposit ", e)
                        }
                    },
                    pe = async (e, t, s, n) => {
                        try {
                            if (console.log("ERC20", K), !K) return;
                            let a = new F.eth.Contract(K, null === r || void 0 === r ? void 0 : r.parentContract),
                                i = await a.methods.approve(e, t).estimateGas({
                                    from: s
                                });
                            console.log("GAS ", i);
                            let o = i * n;
                            console.log({
                                wei: o
                            }), o /= Math.pow(10, 18), L(o)
                        } catch (V) {
                            console.log({
                                error: V
                            }), Z(0), L(0)
                        }
                    },
                    ce = async e => {
                        try {
                            $("");
                            let s = "plasma" == (null === r || void 0 === r ? void 0 : r.bridgetype) ? R.contractAddress.DEPOSIT_MANAGER_PROXY : R.contractAddress.ROOTCHAIN_MANAGER_PROXY;
                            if (!J || !k) return;
                            let n = "plasma" == (null === r || void 0 === r ? void 0 : r.bridgetype) ? J : k,
                                a = new F.eth.Contract(n, s),
                                i = 1;
                            if ("plasma" == r.bridgetype) i = await a.methods.depositERC20ForUser(null === r || void 0 === r ? void 0 : r.parentContract, oe.wallet, e).estimateGas({
                                from: oe.wallet
                            });
                            else {
                                let e = new F.eth.Contract(K, null === r || void 0 === r ? void 0 : r.parentContract),
                                    s = await e.methods.decimals().call();
                                const n = (0, m.getToWeiUnitFromDecimal)(s),
                                    o = F.utils.toWei(String(t), n);
                                let l = F.eth.abi.encodeParameter("uint256", o);
                                i = await a.methods.depositFor(oe.wallet, null === r || void 0 === r ? void 0 : r.parentContract, l).estimateGas({
                                    from: oe.wallet
                                })
                            }
                            let o = await ne();
                            Z(+i * +o / Math.pow(10, 18))
                        } catch (V) {
                            let t;
                            Z(0), t = "object" === typeof V ? V : (0, l.nU)(V), "execution reverted: exceed maximum deposit amount" == t.message ? $("Exceeded maximum deposit amount.") : "execution reverted: TOKEN_NOT_SUPPORTED" == t.message ? $("Token not supported.") : $("Unable to process request.")
                        }
                    };
                return (0, M.jsx)(p.default, {
                    title: q.title,
                    show: s,
                    setshow: () => {
                        n(), A.method()
                    },
                    externalCls: "dark-modal-100 bridge-ht",
                    children: (0, M.jsxs)(M.Fragment, {
                        children: [q.step0 && (0, M.jsx)(T.default, {
                            depModalState: q,
                            setDepModState: z,
                            estGasFee: le
                        }), q.step1 && (0, M.jsx)(j.default, {
                            depModalState: q,
                            setDepModState: z,
                            estGasFee: le,
                            allowance: G,
                            estGas: H,
                            selectedToken: r,
                            error: V,
                            loader: Y,
                            handleStepOne: async () => {
                                H > 0 ? z(P(P({}, q), {}, {
                                    step1: !1,
                                    step2: !0,
                                    title: "Confirm Transfer"
                                })) : "Ether" != r.parentName && await (async e => {
                                    try {
                                        let s;
                                        B(!0), s = "plasma" == (null === r || void 0 === r ? void 0 : r.bridgetype) ? R.contractAddress.DEPOSIT_MANAGER_PROXY : R.contractAddress.ERC20_PREDICATE;
                                        let a = new F.eth.Contract(K, e),
                                            i = await a.methods.decimals().call(),
                                            o = (0, m.getToWeiUnitFromDecimal)(i);
                                        X(i);
                                        const l = re(t + 1, o);
                                        await a.methods.approve(s, l).send({
                                            from: oe.wallet
                                        }).on("transactionHash", (e => {
                                            U((0, u.dT)({
                                                hash: e,
                                                from: oe.wallet,
                                                chainId: D,
                                                summary: `${e}`
                                            }))
                                        })).on("receipt", (e => {
                                            U((0, u.Aw)({
                                                hash: e.transactionHash,
                                                chainId: D,
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
                                            })), L(0), B(!1), le()
                                        })).on("error", (e => {
                                            z(P(P({}, q), {}, {
                                                step1: !0,
                                                step2: !1,
                                                title: "Transfer Overview"
                                            })), B(!1), 4001 === e.code && n(!1)
                                        }))
                                    } catch (s) {
                                        s.code !== l.PM && c.uT("approvalForDeposit", s), z(P(P({}, q), {}, {
                                            step1: !0,
                                            step2: !1,
                                            title: "Transfer Overview"
                                        })), B(!1), n(!1)
                                    }
                                })(null === r || void 0 === r ? void 0 : r.parentContract)
                            }
                        }), q.step2 && (0, M.jsx)(g.default, {
                            setDepModState: z,
                            depModalState: q,
                            depositTokenInput: t,
                            selectedToken: r,
                            usdValue: Q,
                            estGas: H,
                            setDepositModal: n,
                            setHashLink: S,
                            decimalformat: W,
                            setEstGas: Z,
                            setAllowance: L
                        }), q.step3 && (0, M.jsx)(w.default, {
                            depModalState: q,
                            depositTokenInput: t,
                            selectedToken: r,
                            usdValue: Q
                        }), q.step4 && (0, M.jsx)(N.default, {
                            depositTokenInput: t,
                            selectedToken: r,
                            usdValue: Q,
                            hashLink: E
                        })]
                    })
                })
            }
        },
        741: function(e, t, s) {
            s.r(t);
            t.default = async (e, t, s, n, a) => {
                let i, r;
                return "plasma" == e.bridgetype ? (i = await t.methods.depositERC20ForUser(null === e || void 0 === e ? void 0 : e.parentContract, n, s).estimateGas({
                    from: n
                }), r = await t.methods.depositERC20ForUser(null === e || void 0 === e ? void 0 : e.parentContract, n, s).encodeABI()) : "Ether" == e.parentName ? (i = await t.methods.depositEtherFor(n).estimateGas({
                    from: n
                }), r = await t.methods.depositEtherFor(n).encodeABI()) : (i = await t.methods.depositFor(n, null === e || void 0 === e ? void 0 : e.parentContract, a).estimateGas({
                    from: n
                }), r = await t.methods.depositFor(n, null === e || void 0 === e ? void 0 : e.parentContract, a).encodeABI()), {
                    gasFee: i,
                    encodeABI: r
                }
            }
        },
        44732: function(e, t, s) {
            s.r(t);
            var n = s(59499),
                a = s(80857),
                i = (s(67294), s(78268)),
                r = s(46445),
                o = s(85893);

            function l(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, n)
                }
                return s
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(s), !0).forEach((function(t) {
                        (0, n.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    depModalState: t,
                    setDepModState: s,
                    estGasFee: n
                } = e;
                const l = (0, a.Z)();
                return (0, o.jsx)("div", {
                    className: "popmodal-body no-ht",
                    children: (0, o.jsxs)("div", {
                        className: "pop-block withdraw_pop",
                        children: [(0, o.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, o.jsxs)("div", {
                                className: "inner-top p-2",
                                children: [(0, o.jsx)("h4", {
                                    className: "text-md ff-mos pb-3",
                                    children: "What isn't possible"
                                }), (0, o.jsxs)("div", {
                                    className: "row",
                                    children: [(0, o.jsxs)("div", {
                                        className: "col-1",
                                        children: [(0, o.jsx)(i.Z, {
                                            style: {
                                                background: "red",
                                                borderRadius: "50px",
                                                padding: "2px"
                                            }
                                        }), " "]
                                    }), (0, o.jsxs)("div", {
                                        className: "col-11",
                                        children: [(0, o.jsx)("h6", {
                                            className: "text-sm ff-mos pb-1",
                                            children: "Delegation to Validators"
                                        }), (0, o.jsxs)("p", {
                                            className: "text-sm",
                                            children: ["You cannot delegate or stake on the ", l.Layer2, " ", "Network. You may do that on the ", l.Layer1, "."]
                                        })]
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "inner-top p-2",
                                children: [(0, o.jsx)("h4", {
                                    className: "text-md ff-mos pb-3",
                                    children: "What's possible"
                                }), (0, o.jsxs)("div", {
                                    className: "row",
                                    children: [(0, o.jsxs)("div", {
                                        className: "col-1",
                                        children: [(0, o.jsx)(r.Z, {
                                            style: {
                                                background: "green",
                                                borderRadius: "50px",
                                                padding: "2px"
                                            }
                                        }), " "]
                                    }), (0, o.jsxs)("div", {
                                        className: "col-11",
                                        children: [(0, o.jsxs)("h6", {
                                            className: "text-sm ff-mos pb-1",
                                            children: ["Moving funds from ", l.Layer1, " to ", l.Layer2]
                                        }), (0, o.jsxs)("p", {
                                            className: "text-sm",
                                            children: ["Here you can move funds from the ", l.Layer1, " to", " ", l.Layer2, ". This will take 20-30 minutes."]
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "pop-bottom",
                            children: (0, o.jsx)("div", {
                                children: (0, o.jsx)("a", {
                                    className: "btn primary-btn w-100",
                                    onClick: () => {
                                        s(d(d({}, t), {}, {
                                            step0: !1,
                                            step1: !0,
                                            title: "Transfer Overview"
                                        })), n()
                                    },
                                    children: "Continue"
                                })
                            })
                        })]
                    })
                })
            }
        },
        65179: function(e, t, s) {
            s.r(t);
            var n = s(59499),
                a = s(25762),
                i = s(16981),
                r = s(16390),
                o = (s(67294), s(57333)),
                l = s(85893);

            function d(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, n)
                }
                return s
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(s), !0).forEach((function(t) {
                        (0, n.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    depModalState: t,
                    setDepModState: s,
                    estGasFee: n,
                    allowance: d,
                    estGas: c,
                    selectedToken: u,
                    error: y,
                    loader: m,
                    handleStepOne: b
                } = e;
                const h = (0, r.Z)();
                console.log("allowance  ", d * h);
                return (0, l.jsxs)("div", {
                    className: "popmodal-body no-ht",
                    children: [(0, l.jsx)("div", {
                        className: "backDepState",
                        onClick: () => {
                            s(p(p({}, t), {}, {
                                step0: !0,
                                step1: !1,
                                title: "Please Note"
                            })), n()
                        },
                        children: (0, l.jsx)(a.Z, {})
                    }), (0, l.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, l.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, l.jsx)("div", {
                                className: "border-2 rounded-circle d-flex align-item-center justify-content-center p-3 w-25 m-auto",
                                style: {
                                    borderColor: "#F28B03"
                                },
                                children: (0, l.jsx)("img", {
                                    width: "80",
                                    src: "../../assets/images/gas-station.png",
                                    alt: ""
                                })
                            }), (0, l.jsxs)("div", {
                                className: "text-center",
                                children: [(0, l.jsx)("h4", {
                                    className: "ff-mos fs-6 pt-4",
                                    children: "There are two transactions in the deposit process."
                                }), (0, l.jsx)("p", {
                                    className: "text-sm pt-1",
                                    children: "Estimated total gas required for these transactions."
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row pt-3",
                                children: [(0, l.jsxs)("div", {
                                    className: "col-7 d-flex align-items-center",
                                    children: [(0, l.jsx)("img", {
                                        className: "img-fluid",
                                        width: "30",
                                        src: null !== u && void 0 !== u && u.logo || null !== u && void 0 !== u && u.logoURI ? (null === u || void 0 === u ? void 0 : u.logo) || (null === u || void 0 === u ? void 0 : u.logoURI) : "../../assets/images/eth_logo.png",
                                        alt: ""
                                    }), (0, l.jsx)("p", {
                                        className: "ps-2",
                                        children: "Approve Deposit"
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "col-5 text-end",
                                    children: -1 != d && d > 0 ? (0, l.jsx)(o.Z, {
                                        thousandSeparator: !0,
                                        displayType: "text",
                                        prefix: "$",
                                        value: (d * h).toFixed(6)
                                    }) : -1 == d ? (0, l.jsx)("div", {
                                        className: "d-flex justify-content-end align-items-center h-100",
                                        children: (0, l.jsx)(i.Z, {
                                            stroke: "orange"
                                        })
                                    }) : "Approved"
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "pop-bottom",
                            children: ["" !== y && (0, l.jsx)("div", {
                                className: "text-center pb-2 warning-color",
                                children: y
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsxs)("a", {
                                    className: `btn primary-btn w-100 relative ${(m||-1==d&&c<=0||""!=y)&&"disabled btn-disabled"}`,
                                    onClick: () => b(),
                                    children: [m ? (0, l.jsx)("span", {
                                        className: "spinner-border text-secondary pop-spiner fix_spinner"
                                    }) : null, (0, l.jsx)("span", {
                                        children: "Continue"
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        4285: function(e, t, s) {
            s.r(t);
            var n = s(59499),
                a = s(25762),
                i = (s(67294), s(23942)),
                r = s(66721),
                o = s(80857),
                l = s(57333),
                d = s(16390),
                p = s(7678),
                c = s(97552),
                u = s(76704),
                y = s(37150),
                m = s(36375),
                b = s(57545),
                h = s(93085),
                f = s(79684),
                x = s(25617),
                v = s(66850),
                T = s(741),
                j = s(37918),
                g = s.n(j),
                w = s(19293),
                N = s(47933),
                k = s(85893);

            function O(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, n)
                }
                return s
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(s), !0).forEach((function(t) {
                        (0, n.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : O(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            t.default = e => {
                let {
                    setDepModState: t,
                    depModalState: s,
                    depositTokenInput: n,
                    selectedToken: j,
                    usdValue: O,
                    estGas: E,
                    setDepositModal: P,
                    setHashLink: C,
                    decimalformat: S,
                    setEstGas: A
                } = e;
                const {
                    chainId: R = 1,
                    library: D
                } = (0, m.aQ)(), {
                    user: I
                } = (0, N.bN)();
                let _ = (0, o.Z)(),
                    F = (0, d.Z)();
                const G = (0, u.S)("abis/plasma/DepositManager.json"),
                    L = (0, u.S)("abis/pos/RootChainManager.json"),
                    H = (0, u.S)("abis/pos/ERC20.json"),
                    Z = null === D || void 0 === D ? void 0 : D.provider,
                    U = new(g())(Z),
                    V = (0, b.Z)(),
                    $ = (0, x.I0)(),
                    Y = (0, f.B9)(),
                    B = e => {
                        e.currentTarget.src = "../../assets/images/shib-borderd-icon.png"
                    },
                    W = async e => {
                        try {
                            let a = await V();
                            console.log({
                                currentprice: a
                            });
                            let i, r, o = "plasma" == (null === j || void 0 === j ? void 0 : j.bridgetype) ? _.contractAddress.DEPOSIT_MANAGER_PROXY : _.contractAddress.ROOTCHAIN_MANAGER_PROXY,
                                l = "plasma" == (null === j || void 0 === j ? void 0 : j.bridgetype) ? G : L;
                            if ("Ether" !== j.parentName) {
                                let e = new U.eth.Contract(H, null === j || void 0 === j ? void 0 : j.parentContract),
                                    t = await e.methods.decimals().call(),
                                    s = (0, y.getToWeiUnitFromDecimal)(t),
                                    a = U.utils.toWei(String(n), s);
                                r = U.eth.abi.encodeParameter("uint256", a)
                            }
                            let d = new U.eth.Contract(l, o),
                                {
                                    gasFee: c,
                                    encodeABI: u
                                } = await (0, T.default)(j, d, e, I.wallet, r);
                            await U.eth.sendTransaction({
                                from: I.wallet,
                                to: o,
                                gas: (parseInt(c) + 3e4).toString(),
                                gasPrice: a,
                                value: "Ether" == (null === j || void 0 === j ? void 0 : j.parentName) ? +e : 0,
                                data: u
                            }).on("transactionHash", (e => {
                                $((0, h.dT)({
                                    hash: e,
                                    from: I.wallet,
                                    chainId: R,
                                    summary: `${e}`
                                }));
                                let t = Y(R, e, "transaction");
                                C(t), i = e;
                                let s = {
                                    transactionType: 1,
                                    bridgeType: j.bridgetype,
                                    stepPoint: "",
                                    from: I.wallet,
                                    to: "",
                                    amount: +n,
                                    usdValue: +n * O,
                                    txHash: e,
                                    status: 0,
                                    walletAddress: I.wallet,
                                    token: j,
                                    checkpointSigned: !1,
                                    challengePeriod: !1,
                                    processExit: !1,
                                    txData: "",
                                    fromChain: _.L1Chain,
                                    toChain: _.L2Chain,
                                    checkChallengePeriodStatus: !1,
                                    checkProcessExitStatus: !1
                                };
                                (0, p.default)(s, _.StakingAPI)
                            })).on("receipt", (e => {
                                $((0, h.Aw)({
                                    hash: e.transactionHash,
                                    chainId: R,
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
                                })), t(M(M({}, s), {}, {
                                    step2: !1,
                                    step3: !1,
                                    step4: !0,
                                    title: "Transaction Submitted"
                                }));
                                let n = {
                                    stepPoint: "Done",
                                    to: e.to,
                                    txData: e.events,
                                    txHash: e.transactionHash,
                                    status: 1,
                                    checkpointSigned: !0,
                                    challengePeriod: !0,
                                    processExit: !0,
                                    checkChallengePeriodStatus: !0,
                                    checkProcessExitStatus: !0
                                };
                                (0, p.putTransactions)(n, _.StakingAPI)
                            })).on("error", (e => {
                                if (t(M(M({}, s), {}, {
                                        step2: !0,
                                        step3: !1,
                                        title: "Confirm Transfer"
                                    })), P(!1), 4001 != e.code) {
                                    let e = {
                                        stepPoint: "Failed",
                                        status: -1,
                                        txHash: i
                                    };
                                    (0, p.putTransactions)(e, _.StakingAPI)
                                }
                            }))
                        } catch (a) {
                            c.uT("depositContract", a), console.log({
                                err: a
                            }), t(M(M({}, s), {}, {
                                step2: !0,
                                step3: !1,
                                title: "Confirm Transfer"
                            })), P(!1)
                        }
                    };
                return (0, k.jsxs)("div", {
                    className: "popmodal-body no-ht ",
                    children: [(0, k.jsx)("div", {
                        className: "backDepState",
                        onClick: () => {
                            t(M(M({}, s), {}, {
                                step1: !0,
                                step2: !1,
                                title: "Transfer Overview"
                            }))
                        },
                        children: (0, k.jsx)(a.Z, {})
                    }), (0, k.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, k.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, k.jsx)(i.default, {
                                depositTokenInput: n,
                                selectedToken: j,
                                usdValue: O
                            }), (0, k.jsxs)("div", {
                                className: "pop-grid",
                                children: [(0, k.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, k.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, k.jsx)("img", {
                                            className: "img-fluid",
                                            src: null !== j && void 0 !== j && j.logo || null !== j && void 0 !== j && j.logoURI ? (null === j || void 0 === j ? void 0 : j.logo) || (null === j || void 0 === j ? void 0 : j.logoURI) : "../../assets/images/eth_logo.png",
                                            onError: B,
                                            alt: "",
                                            width: "50"
                                        })
                                    }), (0, k.jsxs)("p", {
                                        children: [_.Layer1, " Network"]
                                    })]
                                }), (0, k.jsx)(w.default, {}), (0, k.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, k.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, k.jsx)("img", {
                                            className: "img-fluid",
                                            src: r.wP[_.L2Chain],
                                            onError: B,
                                            alt: ""
                                        })
                                    }), (0, k.jsxs)("p", {
                                        children: [_.Layer2, " Network"]
                                    })]
                                })]
                            }), (0, k.jsx)("hr", {}), (0, k.jsxs)("div", {
                                className: "position-relative d-flex justify-content-between align-items-center",
                                children: [(0, k.jsx)("div", {
                                    className: "coin-blk",
                                    children: (0, k.jsx)("p", {
                                        className: "fs-6 ff-mos",
                                        children: "Estimated Time"
                                    })
                                }), (0, k.jsx)("div", {
                                    children: (0, k.jsx)("p", {
                                        className: "fw-bold",
                                        children: "Est. 20-30 mins"
                                    })
                                })]
                            }), (0, k.jsx)("hr", {}), (0, k.jsxs)("div", {
                                className: "position-relative d-flex justify-content-between align-items-center",
                                children: [(0, k.jsx)("div", {
                                    className: "coin-blk",
                                    children: (0, k.jsx)("p", {
                                        className: "fs-6 ff-mos",
                                        children: "Estimated fee"
                                    })
                                }), (0, k.jsx)("div", {
                                    children: (0, k.jsx)("p", {
                                        className: "fw-bold",
                                        children: (0, k.jsx)(l.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            prefix: "$",
                                            value: (E * F).toFixed(6)
                                        })
                                    })
                                })]
                            })]
                        }), (0, k.jsx)("div", {
                            className: "pop-bottom",
                            children: (0, k.jsx)("div", {
                                children: (0, k.jsx)("a", {
                                    className: "btn primary-btn w-100",
                                    onClick: () => (async () => {
                                        if (I.wallet) {
                                            A(0), t(M(M({}, s), {}, {
                                                step2: !1,
                                                step3: !0,
                                                title: "Transfer in Progress"
                                            }));
                                            const e = U.utils.toBN((0, v.Z)(+n * Math.pow(10, S)));
                                            W(e)
                                        }
                                    })(),
                                    children: "Continue"
                                })
                            })
                        })]
                    })]
                })
            }
        },
        7925: function(e, t, s) {
            s.r(t);
            var n = s(66721),
                a = (s(67294), s(23942)),
                i = s(80857),
                r = s(19293),
                o = s(85893);
            t.default = e => {
                let {
                    depModalState: t,
                    depositTokenInput: s,
                    selectedToken: l,
                    usdValue: d
                } = e, p = (0, i.Z)();
                return (0, o.jsx)("div", {
                    className: "popmodal-body no-ht",
                    children: (0, o.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, o.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, o.jsx)(a.default, {
                                depositTokenInput: s,
                                selectedToken: l,
                                usdValue: d
                            }), (0, o.jsxs)("div", {
                                className: "pop-grid",
                                children: [(0, o.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, o.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, o.jsx)("img", {
                                            className: "img-fluid",
                                            width: "50",
                                            src: l.logo ? l.logo : "../../assets/images/eth_logo.png",
                                            alt: ""
                                        })
                                    }), (0, o.jsx)("p", {
                                        children: p.Layer1
                                    })]
                                }), (0, o.jsx)(r.default, {}), (0, o.jsxs)("div", {
                                    className: "text-center box-block",
                                    children: [(0, o.jsx)("div", {
                                        className: "d-inline-block img-flexible",
                                        children: (0, o.jsx)("img", {
                                            className: "img-fluid",
                                            src: n.wP[p.L2Chain],
                                            alt: ""
                                        })
                                    }), (0, o.jsx)("p", {
                                        children: p.Layer2
                                    })]
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "pop-bottom",
                            children: [(0, o.jsxs)("div", {
                                className: "text-center text-section",
                                children: [(0, o.jsx)("h4", {
                                    className: "pop-hd-md",
                                    style: {
                                        color: "var(--bs-orange)"
                                    },
                                    children: "Moving funds"
                                }), (0, o.jsxs)("p", {
                                    children: ["It will take up to 20 - 30 minutes to move the funds from", " ", p.Layer1, " to ", p.Layer2, "."]
                                })]
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsxs)("a", {
                                    className: `btn grey-btn w-100 relative ${t.step1&&"disabled btn-disabled"}`,
                                    type: "button",
                                    children: [(0, o.jsx)("span", {
                                        className: "spinner-border text-secondary pop-spiner fix_spinner"
                                    }), (0, o.jsx)("span", {
                                        className: `${t.step1&&"disabled"}`,
                                        children: "Continue"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        30929: function(e, t, s) {
            s.r(t);
            s(67294);
            var n = s(23942),
                a = s(85893);
            t.default = e => {
                let {
                    depositTokenInput: t,
                    selectedToken: s,
                    usdValue: i,
                    hashLink: r
                } = e;
                return (0, a.jsx)("div", {
                    className: "popmodal-body no-ht",
                    children: (0, a.jsxs)("div", {
                        className: "pop-block",
                        children: [(0, a.jsxs)("div", {
                            className: "pop-top",
                            children: [(0, a.jsx)(n.default, {
                                depositTokenInput: t,
                                selectedToken: s,
                                usdValue: i
                            }), (0, a.jsx)("div", {
                                className: "image_area row h-50",
                                children: (0, a.jsx)("div", {
                                    className: "flex text-center col-12 watch-img-sec align-items-center justify-content-center",
                                    children: (0, a.jsx)("img", {
                                        className: "img-fluid img-wdth",
                                        src: "../../assets/images/cmpete-step.png",
                                        width: "100",
                                        height: "100"
                                    })
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "pop-bottom text-center h-50",
                            children: [(0, a.jsxs)("div", {
                                className: "text-section complete-modal",
                                children: [(0, a.jsx)("h4", {
                                    className: "pop-hd-sm warning-color p-2",
                                    children: "Transfer en route"
                                }), (0, a.jsx)("p", {
                                    children: "Your transfer is underway and will be completed in 22-30 minutes. Once completed, your token balance will be automatically updated."
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)("a", {
                                    className: "w-100 warning-color",
                                    onClick: () => window.open(r),
                                    children: "View on Block Explorer"
                                })
                            })]
                        })]
                    })
                })
            }
        }
    }
]);