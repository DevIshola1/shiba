(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        1566: function(t, e, a) {
            "use strict";
            a(67294);
            var n = a(42923),
                i = a(85893);
            e.Z = t => {
                let {
                    value: e,
                    line: a,
                    gap: s
                } = t;
                return (0, i.jsx)("div", {
                    className: "row",
                    children: [...Array(e)].map(((t, e) => (0, i.jsx)("div", {
                        className: "mx-auto col-sm-10 mx-md-0 col-md-6 col-lg-4 col-xl-3 bs-col",
                        children: (0, i.jsx)("div", {
                            className: "bs-card card",
                            children: (0, i.jsx)(n.Q4, {
                                line: a,
                                gap: s,
                                className: "cus-shimer",
                                variant: "primary"
                            })
                        })
                    }, e)))
                })
            }
        },
        4671: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return v
                }
            });
            var n = a(67294),
                i = a(57333),
                s = a(46215),
                l = a(73640),
                u = a(77044),
                p = a(97552),
                o = a(80086),
                r = a(2816),
                y = a(75940),
                d = a(1566),
                c = a(85893);
            var m = t => {
                    let {
                        text: e,
                        children: a,
                        subtext: n = ""
                    } = t;
                    return (0, c.jsx)("div", {
                        className: "col-md-6 col-xl-4 mob-margin col-custum",
                        children: (0, c.jsxs)("div", {
                            className: "cus-box",
                            children: [(0, c.jsxs)("div", {
                                className: "head-sec",
                                children: [(0, c.jsx)("div", {
                                    className: "top-head",
                                    children: (0, c.jsx)("span", {
                                        children: a
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "mid-head",
                                    children: (0, c.jsx)("span", {
                                        children: n
                                    })
                                })]
                            }), (0, c.jsx)("div", {
                                className: "botom-sec",
                                children: (0, c.jsx)("div", {
                                    className: "botom-headsec",
                                    children: (0, c.jsx)("span", {
                                        className: "ff-mos",
                                        children: e
                                    })
                                })
                            })]
                        })
                    })
                },
                b = a(93189),
                f = a(88301);
            var T = a(47933);
            var v = function(t) {
                var e, a, v, h;
                let {
                    valCount: w
                } = t;
                const {
                    0: g,
                    1: M
                } = (0, n.useState)(0), {
                    0: x,
                    1: k
                } = (0, n.useState)(0), {
                    chainId: N = 1
                } = (0, u.Ge)(), {
                    user: j
                } = (0, T.bN)(), C = (0, y.Z)(), S = C.PUPPYNET517(), I = C.L1Block(), _ = (0, o.Z)(), R = (() => {
                    const {
                        getNetworkOverviewData: t
                    } = (0, f.Z)();
                    return (0, b.a)({
                        queryKey: ["network_overview"],
                        queryFn: () => t().then((t => t.data.data.networkDetail))
                    })
                })(), D = j && j.wallet;
                (0, n.useEffect)((() => {
                    try {
                        A().then((t => {
                            var e;
                            N == C.L1Chain && (null === S || void 0 === S || null === (e = S.eth) || void 0 === e || e.getBlockNumber().then((t => {
                                M(t)
                            })))
                        }))
                    } catch (t) {
                        p.Tb("getNetworkOverviewData", t)
                    }
                }), [D, N]), console.log({
                    latestBlock: g
                });
                const A = async () => {
                    try {
                        const t = new I.eth.Contract(s, C.contractAddress.STAKE_MANAGER_PROXY),
                            e = await t.methods.validatorState().call();
                        let a = (await _.query({
                                query: (0, r.z2)()
                            })).data.validators,
                            n = 0;
                        return a.forEach((t => {
                            let e = +S.utils.fromWei(t.delegatedStake, "ether"),
                                a = +S.utils.fromWei(t.selfStake, "ether");
                            n = n + e + a
                        })), k(n), e
                    } catch (t) {
                        p.uT("getTotalStakes ", t), console.log("error getTotalstakes ", t)
                    }
                };
                return (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsx)("section", {
                        className: "card-section",
                        children: (0, c.jsxs)("div", {
                            className: "container",
                            children: [(0, c.jsx)("div", {
                                className: "heading-sec",
                                children: (0, c.jsx)("h2", {
                                    className: "sub-head ff-mos",
                                    children: "Network Overview"
                                })
                            }), (0, c.jsx)("div", {
                                className: "grid-contain",
                                children: R.isLoading ? (0, c.jsx)(d.Z, {
                                    value: 7,
                                    line: 3,
                                    gap: 10
                                }) : (0, c.jsxs)("div", {
                                    className: "row ff-mos",
                                    children: [(0, c.jsx)(m, {
                                        text: "Total Validators",
                                        children: w
                                    }), (0, c.jsxs)(m, {
                                        text: "Total Stake",
                                        children: [(0, c.jsx)(i.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            value: (0, l.vA)(+x || 0)
                                        }), " ", "BONE"]
                                    }), (0, c.jsx)(m, {
                                        text: "Shibarium Block Height",
                                        children: (0, c.jsx)(i.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            value: g
                                        })
                                    }), (0, c.jsx)(m, {
                                        text: "Heimdall Block Height",
                                        children: (0, c.jsx)(i.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            value: null === (e = R.data) || void 0 === e ? void 0 : e.heimdallHeight
                                        })
                                    }), (0, c.jsx)(m, {
                                        text: "Last Checkpoint",
                                        subtext: `${(null===(a=R.data)||void 0===a?void 0:a.lastCheckpointInterval)||"0"} ago`,
                                        children: (0, c.jsx)(i.Z, {
                                            thousandSeparator: !0,
                                            displayType: "text",
                                            value: (null === (v = R.data) || void 0 === v ? void 0 : v.lastCheckpointId) || 0
                                        })
                                    }), (0, c.jsx)(m, {
                                        text: "Checkpoint Interval",
                                        children: null === (h = R.data) || void 0 === h ? void 0 : h.averageInterval
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        20127: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return h
                }
            });
            var n = a(67294),
                i = a(11163),
                s = a(18541),
                l = a(4671),
                u = a(39958),
                p = a(36375),
                o = a(97552),
                r = a(88301),
                y = a(80086),
                d = a(37918),
                c = a.n(d),
                m = a(73640),
                b = a(47933),
                f = a(75940),
                T = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousRootChain","type":"address"},{"indexed":true,"internalType":"address","name":"newRootChain","type":"address"}],"name":"RootChainChanged","type":"event"},{"constant":true,"inputs":[],"name":"CHECKPOINT_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NFTContract","outputs":[{"internalType":"contract StakingNFT","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NFTCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accountStateRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newRootChain","type":"address"}],"name":"changeRootChain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"checkPointBlockInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkpointRewardDelta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"delegationEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dynasty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventsHub","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"extensionCode","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"contract IGovernance","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"latestSignerUpdateEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"locked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"logger","outputs":[{"internalType":"contract StakingInfo","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxRewardedCheckpoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minHeimdallFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"prevBlockInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposerBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"replacementCoolDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardDecreasePerCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rootChain","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"signerToValidator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signerUpdateLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"signers","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalHeimdallFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRewardsLiquidated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userFeeExit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"validatorAuction","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startEpoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"acceptDelegation","type":"bool"},{"internalType":"bytes","name":"signerPubkey","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validatorShareFactory","outputs":[{"internalType":"contract ValidatorShareFactory","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validatorState","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakerCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"validatorStateChanges","outputs":[{"internalType":"int256","name":"amount","type":"int256"},{"internalType":"int256","name":"stakerCount","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validatorThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"validators","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"activationEpoch","type":"uint256"},{"internalType":"uint256","name":"deactivationEpoch","type":"uint256"},{"internalType":"uint256","name":"jailTime","type":"uint256"},{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"enum StakeManagerStorage.Status","name":"status","type":"uint8"},{"internalType":"uint256","name":"commissionRate","type":"uint256"},{"internalType":"uint256","name":"lastCommissionUpdate","type":"uint256"},{"internalType":"uint256","name":"delegatorsReward","type":"uint256"},{"internalType":"uint256","name":"delegatedAmount","type":"uint256"},{"internalType":"uint256","name":"initialRewardPerStake","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_registry","type":"address"},{"internalType":"address","name":"_rootchain","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_NFTContract","type":"address"},{"internalType":"address","name":"_stakingLogger","type":"address"},{"internalType":"address","name":"_validatorShareFactory","type":"address"},{"internalType":"address","name":"_governance","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_extensionCode","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"withdrawalDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"validatorStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getValidatorId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"delegatedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"delegatorsReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"validatorReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentValidatorSetSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentValidatorSetTotalStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"getValidatorContract","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"isValidator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setDelegationEnabled","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"forceUnstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_currentEpoch","type":"uint256"}],"name":"setCurrentEpoch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setStakingToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newThreshold","type":"uint256"}],"name":"updateValidatorThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_blocks","type":"uint256"}],"name":"updateCheckPointBlockInterval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReward","type":"uint256"}],"name":"updateCheckpointReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_rewardDecreasePerCheckpoint","type":"uint256"},{"internalType":"uint256","name":"_maxRewardedCheckpoints","type":"uint256"},{"internalType":"uint256","name":"_checkpointRewardDelta","type":"uint256"}],"name":"updateCheckpointRewardParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorIdFrom","type":"uint256"},{"internalType":"uint256","name":"validatorIdTo","type":"uint256"}],"name":"migrateValidatorsData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_signers","type":"address[]"}],"name":"insertSigners","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"address","name":"newContractAddress","type":"address"}],"name":"updateValidatorContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newDynasty","type":"uint256"}],"name":"updateDynastyValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"forNCheckpoints","type":"uint256"}],"name":"stopAuctions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposerBonus","type":"uint256"}],"name":"updateProposerBonus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"updateSignerUpdateLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_minDeposit","type":"uint256"},{"internalType":"uint256","name":"_minHeimdallFee","type":"uint256"}],"name":"updateMinAmounts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"address","name":"tokenAddr","type":"address"},{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"drainValidatorShares","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"drain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_NFTContract","type":"address"},{"internalType":"address","name":"_stakingLogger","type":"address"},{"internalType":"address","name":"_validatorShareFactory","type":"address"},{"internalType":"address","name":"_extensionCode","type":"address"}],"name":"reinitialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"heimdallFee","type":"uint256"}],"name":"topUpForFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"accumFeeAmount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"claimFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"totalStakedFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_acceptDelegation","type":"bool"},{"internalType":"bytes","name":"_signerPubkey","type":"bytes"}],"name":"startAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"heimdallFee","type":"uint256"}],"name":"confirmAuctionBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"auctionUser","type":"address"},{"internalType":"uint256","name":"heimdallFee","type":"uint256"},{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"auctionAmount","type":"uint256"},{"internalType":"bool","name":"acceptDelegation","type":"bool"},{"internalType":"bytes","name":"signerPubkey","type":"bytes"}],"name":"dethroneAndStake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"delegator","type":"address"}],"name":"transferFunds","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"delegator","type":"address"}],"name":"delegationDeposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"heimdallFee","type":"uint256"},{"internalType":"bool","name":"acceptDelegation","type":"bool"},{"internalType":"bytes","name":"signerPubkey","type":"bytes"}],"name":"stakeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"unstakeClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"stakeRewards","type":"bool"}],"name":"restake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"withdrawRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fromValidatorId","type":"uint256"},{"internalType":"uint256","name":"toValidatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"migrateDelegation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"int256","name":"amount","type":"int256"}],"name":"updateValidatorState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"decreaseValidatorDelegatedAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"bytes","name":"signerPubkey","type":"bytes"}],"name":"updateSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"blockInterval","type":"uint256"},{"internalType":"bytes32","name":"voteHash","type":"bytes32"},{"internalType":"bytes32","name":"stateRoot","type":"bytes32"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256[3][]","name":"sigs","type":"uint256[3][]"}],"name":"checkSignatures","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"},{"internalType":"uint256","name":"newCommissionRate","type":"uint256"}],"name":"updateCommissionRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"withdrawDelegatorsReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"_slashingInfoList","type":"bytes"}],"name":"slash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"validatorId","type":"uint256"}],"name":"unjail","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"delegation","type":"bool"}],"name":"updateValidatorDelegation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                v = a(85893);
            var h = () => {
                const [t, e] = (0, s.ub)(), {
                    chainId: a = 1,
                    library: d
                } = (0, p.aQ)(), {
                    user: h
                } = (0, b.bN)(), w = null === d || void 0 === d ? void 0 : d.provider, g = (0, i.useRouter)(), [M, x] = (new(c())(w), (0, s.uI)()), [k, N] = (0, s.Es)(), {
                    0: j,
                    1: C
                } = (0, n.useState)(""), {
                    0: S,
                    1: I
                } = (0, n.useState)(!0), {
                    getValidatorInfo: _
                } = (0, r.Z)(), R = ((0, y.Z)(), (0, f.Z)()), D = R.L1Block();
                (0, n.useEffect)((() => {
                    h && h.wallet && E()
                }), [h, a]), (0, n.useEffect)((() => {
                    if (console.log("stakeManagerABI", T), !T) return x(m.Wz), void N(m.ve);
                    A()
                }), [h, a, T]);
                const A = async () => {
                        try {
                            const t = R.contractAddress.STAKE_MANAGER_PROXY;
                            let e = new D.eth.Contract(T, t);
                            console.log("instance ", e);
                            const a = await e.methods.validatorThreshold().call();
                            console.log("validator threshold  ", a);
                            const n = await e.methods.currentValidatorSetSize().call();
                            x(a), console.log("executed validatorCount", n), N(n)
                        } catch (t) {
                            o.uT("getValCount", t)
                        }
                    },
                    E = async () => {
                        try {
                            let t = h && h.wallet;
                            await _(t).then((t => {
                                var e, a, n, i, s, l;
                                C(null !== t && void 0 !== t && null !== (e = t.data) && void 0 !== e && null !== (a = e.message) && void 0 !== a && null !== (n = a.val) && void 0 !== n && n.status ? null === t || void 0 === t || null === (i = t.data) || void 0 === i || null === (s = i.message) || void 0 === s || null === (l = s.val) || void 0 === l ? void 0 : l.status : null), I(!1), localStorage.setItem("valInfo", JSON.stringify(t.data.message.val))
                            }))
                        } catch (t) {
                            I(!1), o.uT("getValCount", t)
                        }
                    },
                    F = (0, n.useRef)(null);
                return (0, v.jsx)(v.Fragment, {
                    children: (0, v.jsxs)("div", {
                        className: "main-content dark-bg-800 full-vh font-up ffms-inherit staking-main",
                        children: [(0, v.jsx)("section", {
                            className: "inner-banner dark-bg",
                            children: (0, v.jsx)("div", {
                                className: "container",
                                children: (0, v.jsx)("div", {
                                    className: "section-info",
                                    children: (0, v.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [(0, v.jsx)("div", {
                                            className: "col-md-7 col-sm-12 ff-mos",
                                            children: (0, v.jsxs)("div", {
                                                className: "ff-mos flex flex-col",
                                                children: [(0, v.jsx)("h1", {
                                                    children: "Secure the Network"
                                                }), (0, v.jsx)("h1", {
                                                    children: "& Earn Reward with"
                                                }), (0, v.jsxs)("div", {
                                                    className: "flex lg:items-center gap-4 lg:gap-10 mt-4 flex-col lg:flex-row",
                                                    children: [(0, v.jsx)("h1", {
                                                        className: "bg-white text-[#0C0F17] px-1.5 py-2.5 lg:w-min lg:px-5 text-nowrap",
                                                        children: "Shibarium Staking"
                                                    }), (0, v.jsxs)("div", {
                                                        className: "group relative",
                                                        children: [(0, v.jsx)("button", {
                                                            className: "btn primary-btn text-nowrap !py-3 h-fit !text-2xl hover:opacity-60",
                                                            onClick: () => {
                                                                h && h.wallet && g.push("/all-validator")
                                                            },
                                                            children: "Stake Bone"
                                                        }), (0, v.jsx)("div", {
                                                            className: "hidden group-hover:block",
                                                            children: h && h.wallet ? null : (0, v.jsxs)("div", {
                                                                className: "absolute w-full top-[74px]",
                                                                children: [(0, v.jsx)("div", {
                                                                    className: "h-0 w-0 border-x-8 border-x-transparent border-b-[18px] border-b-white-600 rotate-[0deg] bottom-[15px] left-[75px] relative"
                                                                }), (0, v.jsx)("div", {
                                                                    className: "bg-white text-black rounded px-2 py-1 relative bottom-[24px] left-[8px] w-[15rem] text-center",
                                                                    children: "Connect Wallet to continue"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "col-md-5 col-sm-12 m-hide",
                                            children: (0, v.jsx)("div", {
                                                className: "shib-img-sec text-end",
                                                children: (0, v.jsx)("img", {
                                                    src: "../../../assets/images/shib-bg.png",
                                                    alt: ""
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, v.jsx)(l.default, {
                            valCount: k
                        }), (0, v.jsx)("div", {
                            ref: F,
                            children: (0, v.jsx)(u.default, {
                                nodeSetup: j
                            })
                        })]
                    })
                })
            }
        },
        88301: function(t, e, a) {
            "use strict";
            var n = a(69574);
            e.Z = () => {
                const t = (0, n.Z)();
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
        48312: function(t, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(20127)
            }])
        }
    },
    function(t) {
        t.O(0, [7425, 7333, 552, 5982, 2923, 1797, 6482, 9338, 9958, 9774, 2888, 179], (function() {
            return e = 48312, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);