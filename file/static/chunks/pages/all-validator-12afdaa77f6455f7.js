(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3035], {
        96914: function(t, e, n) {
            "use strict";
            n.d(e, {
                D: function() {
                    return o
                }
            });
            var a = n(93189),
                r = n(88301),
                i = n(36375);
            const o = () => {
                const {
                    getValidatorInfo: t
                } = (0, r.Z)(), {
                    account: e
                } = (0, i.aQ)();
                return (0, a.a)({
                    staleTime: 1 / 0,
                    queryKey: ["valInfo", e],
                    queryFn: async () => {
                        if (!e) return null;
                        return (await t(e)).data.message.val || null
                    }
                })
            }
        },
        39980: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Allvalidator: function() {
                    return s
                }
            });
            var a = n(67294),
                r = n(39958),
                i = n(36375),
                o = n(97552),
                u = n(96914),
                l = n(85893);
            const s = () => {
                const {
                    account: t,
                    chainId: e = 1
                } = (0, i.aQ)(), n = (0, a.useRef)(null), {
                    0: s,
                    1: c
                } = (0, a.useState)(""), f = (0, u.D)();
                return (0, a.useEffect)((() => {
                    t && (() => {
                        try {
                            const t = JSON.parse(localStorage.getItem("valInfo") || "{}");
                            Object.keys(t).length ? c(t.status) : (c(f.data), localStorage.setItem("valInfo", JSON.stringify(f.data)))
                        } catch (t) {
                            o.uT("getValCount", t)
                        }
                    })()
                }), [t]), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                        className: "main-content dark-bg-800 full-vh font-up ffms-inherit staking-main",
                        children: (0, l.jsx)("div", {
                            id: "all-validators-section",
                            ref: n,
                            className: " ffms-inherit",
                            children: (0, l.jsx)(r.default, {
                                withStatusFilter: !0,
                                nodeSetup: s
                            })
                        })
                    })
                })
            };
            e.default = s
        },
        88301: function(t, e, n) {
            "use strict";
            var a = n(69574);
            e.Z = () => {
                const t = (0, a.Z)();
                return {
                    getValidatorInfo: function(e) {
                        return t.get(`/validators/getValinfo?signer_Address=${e}`)
                    },
                    updateValidator: function(e) {
                        return t.post("/validators/valInfo", e)
                    },
                    registerValidator: function(e) {
                        return t.post("/validators/valInfo", e)
                    },
                    getNetworkOverviewData: function() {
                        return t.get("networkDetail/info")
                    },
                    getCheckpointInterval: function() {
                        return t.get("networkDetail/checkpointInterval")
                    },
                    getLastCheckpoint: function() {
                        return t.get("networkDetail/lastCheckpoint")
                    },
                    getHeimdallHeight: function() {
                        return t.get("networkDetail/heimdallHeight")
                    },
                    getUserType: function(e) {
                        return t.get(`user/getType/${e}`)
                    },
                    getTotalRewardDistributed: function() {
                        return t.get("networkDetail/totalReward")
                    },
                    getValidatorCount: function() {
                        return t.get("networkDetail/totalValidators")
                    },
                    getTotalStake: function() {
                        return t.get("networkDetail/totalStake")
                    }
                }
            }
        },
        14985: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/all-validator", function() {
                return n(39980)
            }])
        }
    },
    function(t) {
        t.O(0, [7425, 7333, 552, 5982, 2923, 1797, 6482, 9338, 9958, 9774, 2888, 179], (function() {
            return e = 14985, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);