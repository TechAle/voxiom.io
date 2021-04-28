


(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    490: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0), l = a.n(n), r = a(15), o = a.n(r), i = a(21), c = a.n(i), s = a(183), u = a.n(s), m = a(16),
            d = a.n(m), p = a(10), E = a(5), g = a(13), h = a(36), f = a(52), y = a(129), b = a(30), _ = a(82),
            v = a(83), w = a(51), x = a(26), S = a(31), C = a(29), I = a(38), O = a(78), N = a(81), k = a(20),
            T = a(85), R = a.p + "./449fa849207db49923236932fb429997.png",
            A = a.p + "./1925abfe3193c7d85c028138974ed467.png", j = a(375), M = a.n(j), P = (a(377), function (e) {
                return l.a.createElement(M.a, u()({className: "vox-dropdown"}, e))
            }), L = function () {
                var e = Object(n.useState)(0), t = (e[0], e[1]);
                return function () {
                    return t((function (e) {
                        return ++e
                    }))
                }
            }, F = function () {
                var e = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), t = Object(p.c)((function (e) {
                    return e.account.profile
                }));
                return !e || -1 === t.permissions.indexOf("principal.noads")
            }, D = a(22), G = E.a.div.withConfig({
                displayName: "Ad970X250Banner__Wrapper",
                componentId: "sc-1w17feu-0"
            })(["display:flex;justify-content:center;pointer-events:auto;width:970px;margin-top:20px;"]), B = function (e) {
                var t = e.id, a = e.triggerAds, r = void 0 === a || a, o = F(), i = Object(p.c)((function (e) {
                    return e.ui.adSDKType
                }));
                return Object(n.useEffect)((function () {
                    if (o && r) {
                        var e = function () {
                            document.hidden || (i === D.a.CRAZYGAMES ? window.CrazyGames.CrazySDK.getInstance().requestBanner([{
                                containerId: t,
                                size: "728x90"
                            }]) : i === D.a.ADINPLAY && aiptag.cmd.display.push((function () {
                                aipDisplayTag.display(t)
                            })))
                        };
                        e();
                        var a = window.setInterval(e, x.a.AD_REFRESH_RATE);
                        return function () {
                            window.clearInterval(a)
                        }
                    }
                }), [i, o, r]), o ? l.a.createElement(G, {id: t}) : null
            }, U = E.a.div.attrs((function (e) {
                return e.background ? {style: {backgroundColor: "rgba(0, 0, 0, 0.8)", marginBottom: 20}} : {}
            })).withConfig({
                displayName: "AdSquareBanner__Wrapper",
                componentId: "sc-1djlqpc-0"
            })(["width:300px;height:250px;display:flex;justify-content:center;pointer-events:auto;"]), z = function (e) {
                var t = e.id, a = e.background, r = void 0 === a || a, o = e.triggerAds, i = void 0 === o || o, c = F(),
                    s = Object(p.c)((function (e) {
                        return e.ui.adSDKType
                    }));
                return Object(n.useEffect)((function () {
                    if (c && i) {
                        var e = function () {
                            document.hidden || (s === D.a.CRAZYGAMES ? window.CrazyGames.CrazySDK.getInstance().requestBanner([{
                                containerId: t,
                                size: "300x250"
                            }]) : s === D.a.ADINPLAY && aiptag.cmd.display.push((function () {
                                aipDisplayTag.display(t)
                            })))
                        };
                        e();
                        var a = window.setInterval(e, x.a.AD_REFRESH_RATE);
                        return function () {
                            window.clearInterval(a)
                        }
                    }
                }), [s, c, i]), c ? l.a.createElement(U, {id: t, background: r}) : null
            }, Y = E.a.div.withConfig({
                displayName: "PlayScreen__ConnectionDetails",
                componentId: "sc-1kooxl6-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:15px 30px;display:flex;flex-direction:column;width:320px;margin-left:20px;margin-right:20px;font-size:16px;"]),
            q = E.a.div.withConfig({
                displayName: "PlayScreen__ContentRow",
                componentId: "sc-1kooxl6-1"
            })(["margin:10px 0;"]), W = E.a.div.withConfig({
                displayName: "PlayScreen__ButtonRow",
                componentId: "sc-1kooxl6-2"
            })(["display:flex;"]), H = E.a.div.withConfig({
                displayName: "PlayScreen__InputLabel",
                componentId: "sc-1kooxl6-3"
            })(["font-size:18px;margin-bottom:15px;"]), V = E.a.div.withConfig({
                displayName: "PlayScreen__ButtonVertical",
                componentId: "sc-1kooxl6-4"
            })(["padding:10px;background-color:#e67e22;text-align:center;color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;:hover{background-color:#f39c12;cursor:pointer;}"]),
            K = E.a.div.withConfig({
                displayName: "PlayScreen__ButtonHorizontal",
                componentId: "sc-1kooxl6-5"
            })(["padding:10px;background-color:#e67e22;text-align:center;color:white;display:flex;justify-content:center;align-items:center;:hover{background-color:#f39c12;cursor:pointer;}"]),
            X = E.a.div.withConfig({
                displayName: "PlayScreen__ButtonHorizontalDisabled",
                componentId: "sc-1kooxl6-6"
            })(["padding:10px;background-color:#7f8c8d;text-align:center;color:white;display:flex;justify-content:center;align-items:center;filter:grayscale(100%);position:relative;"]),
            J = E.a.div.withConfig({
                displayName: "PlayScreen__LevelLockedBanner",
                componentId: "sc-1kooxl6-7"
            })(["position:absolute;top:0;left:0;padding:5px;background-color:rgba(0,0,0,0.5);font-size:12px;"]),
            Z = E.a.div.withConfig({
                displayName: "PlayScreen__ErrorMessage",
                componentId: "sc-1kooxl6-8"
            })(["color:#e74c3c;margin-top:20px;"]), Q = E.a.div.withConfig({
                displayName: "PlayScreen__LoadingIcon",
                componentId: "sc-1kooxl6-9"
            })(["display:block;font-size:30px;"]), $ = (E.a.div.withConfig({
                displayName: "PlayScreen__ControlsPanel",
                componentId: "sc-1kooxl6-10"
            })(["background-color:rgba(0,0,0,0.8);width:190px;height:338px;padding:20px;padding-right:5px;margin-left:20px;"]), E.a.div.withConfig({
                displayName: "PlayScreen__ControlsPanelTitle",
                componentId: "sc-1kooxl6-11"
            })(["margin-bottom:20px;"]), E.a.div.withConfig({
                displayName: "PlayScreen__ControlsRow",
                componentId: "sc-1kooxl6-12"
            })(["display:flex;justify-content:space-between;margin-bottom:10px;"]), E.a.div.withConfig({
                displayName: "PlayScreen__ControlsKey",
                componentId: "sc-1kooxl6-13"
            })([""]), E.a.div.withConfig({
                displayName: "PlayScreen__ControlsDetails",
                componentId: "sc-1kooxl6-14"
            })(["margin-right:20px;"]), E.a.div.withConfig({
                displayName: "PlayScreen__Row",
                componentId: "sc-1kooxl6-15"
            })(["display:flex;"])), ee = E.a.div.withConfig({
                displayName: "PlayScreen__Column",
                componentId: "sc-1kooxl6-16"
            })(["display:flex;flex-direction:column;"]), te = E.a.div.withConfig({
                displayName: "PlayScreen__CommunityPanel",
                componentId: "sc-1kooxl6-17"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:16px;display:flex;flex-direction:column;width:268px;"]),
            ae = E.a.div.withConfig({
                displayName: "PlayScreen__CommunityTitle",
                componentId: "sc-1kooxl6-18"
            })(["margin-bottom:10px;font-size:18px;"]), ne = E.a.div.withConfig({
                displayName: "PlayScreen__CommunityLinks",
                componentId: "sc-1kooxl6-19"
            })(["display:flex;"]), le = E.a.a.withConfig({
                displayName: "PlayScreen__DiscordLink",
                componentId: "sc-1kooxl6-20"
            })(["display:block;position:relative;text-decoration:none;color:#7084d6;font-size:30px;top:3px;"]),
            re = E.a.a.withConfig({
                displayName: "PlayScreen__TwitchLink",
                componentId: "sc-1kooxl6-21"
            })(["display:block;position:relative;margin-left:20px;text-decoration:none;color:#9146ff;font-size:30px;top:3px;"]),
            oe = E.a.a.withConfig({
                displayName: "PlayScreen__TwitterLink",
                componentId: "sc-1kooxl6-22"
            })(["display:block;position:relative;margin-left:20px;text-decoration:none;color:#1ea1f1;font-size:30px;top:2px;"]),
            ie = E.a.a.withConfig({
                displayName: "PlayScreen__RedditLink",
                componentId: "sc-1kooxl6-23"
            })(["display:block;position:relative;margin-left:20px;text-decoration:none;color:#f74304;font-size:30px;top:2px;"]),
            ce = E.a.div.withConfig({
                displayName: "PlayScreen__AccountDetails",
                componentId: "sc-1kooxl6-24"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px;display:flex;flex-direction:column;width:210px;height:327px;position:relative;"]),
            se = E.a.div.withConfig({
                displayName: "PlayScreen__LevelPanel",
                componentId: "sc-1kooxl6-25"
            })(["width:40px;height:40px;border:2px solid grey;display:flex;justify-content:center;align-items:center;font-size:20px;background-color:black;"]),
            ue = E.a.div.withConfig({
                displayName: "PlayScreen__AccountInfoPanel",
                componentId: "sc-1kooxl6-26"
            })(["margin-left:10px;display:flex;flex-direction:column;flex:1;justify-content:space-between;"]),
            me = function (e) {
                return e <= 13 ? "15px" : "10px"
            }, de = E.a.div.attrs((function (e) {
                var t = e.nameLen;
                return {style: {fontSize: me(t)}}
            })).withConfig({displayName: "PlayScreen__AccountName", componentId: "sc-1kooxl6-27"})([""]),
            pe = E.a.div.withConfig({
                displayName: "PlayScreen__AccountExperienceValue",
                componentId: "sc-1kooxl6-28"
            })(["z-index:999;"]), Ee = E.a.div.withConfig({
                displayName: "PlayScreen__AccountExperienceBarOuter",
                componentId: "sc-1kooxl6-29"
            })(["border:1px solid white;display:flex;justify-content:center;align-items:center;position:relative;font-size:13px;padding:1px;"]),
            ge = E.a.div.attrs((function (e) {
                var t = e.value, a = e.maxValue;
                return {style: {backgroundColor: e.color, width: t / a * 100 + "%"}}
            })).withConfig({
                displayName: "PlayScreen__AccountExperienceBarInner",
                componentId: "sc-1kooxl6-30"
            })(["position:absolute;top:0;left:0;height:100%;"]), he = E.a.div.withConfig({
                displayName: "PlayScreen__LevelDetails",
                componentId: "sc-1kooxl6-31"
            })(["display:flex;flex-direction:row;"]), fe = E.a.div.withConfig({
                displayName: "PlayScreen__StatsDetails",
                componentId: "sc-1kooxl6-32"
            })(["margin-top:10px;"]), ye = E.a.div.withConfig({
                displayName: "PlayScreen__StatsRow",
                componentId: "sc-1kooxl6-33"
            })(["display:flex;justify-content:space-between;margin-bottom:10px;"]),
            be = E.a.div.withConfig({displayName: "PlayScreen__StatsName", componentId: "sc-1kooxl6-34"})([""]),
            _e = E.a.div.withConfig({displayName: "PlayScreen__StatsValue", componentId: "sc-1kooxl6-35"})([""]),
            ve = Object(E.a)(C.b).withConfig({
                displayName: "PlayScreen__NotLoggedInLockOverlay",
                componentId: "sc-1kooxl6-36"
            })(["color:white;text-decoration:none;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;background-color:rgba(100,100,100,0.6);:hover{cursor:pointer;}"]),
            we = E.a.div.withConfig({
                displayName: "PlayScreen__NotLoggedInIcon",
                componentId: "sc-1kooxl6-37"
            })(["font-size:50px;margin-bottom:10px;"]), xe = E.a.div.withConfig({
                displayName: "PlayScreen__NotLoggedInText",
                componentId: "sc-1kooxl6-38"
            })(["font-size:20px;"]), Se = E.a.img.withConfig({
                displayName: "PlayScreen__BattleRoyaleIcon",
                componentId: "sc-1kooxl6-39"
            })(["height:50px;display:block;margin-top:10px;margin-bottom:10px;"]), Ce = E.a.img.withConfig({
                displayName: "PlayScreen__CaptureTheGemsIcon",
                componentId: "sc-1kooxl6-40"
            })(["height:50px;display:block;padding:0 20px;margin-top:10px;margin-bottom:10px;"]), Ie = E.a.img.withConfig({
                displayName: "PlayScreen__SurvivalIcon",
                componentId: "sc-1kooxl6-41"
            })(["height:50px;display:block;margin-right:15px;"]), Oe = E.a.div.withConfig({
                displayName: "PlayScreen__SurvivalText",
                componentId: "sc-1kooxl6-42"
            })(["font-size:20px;"]), Ne = E.a.div.withConfig({
                displayName: "PlayScreen__StatsMenu",
                componentId: "sc-1kooxl6-43"
            })(["display:flex;margin-top:10px;"]), ke = E.a.div.withConfig({
                displayName: "PlayScreen__StatsMenuItem",
                componentId: "sc-1kooxl6-44"
            })(["padding:5px;font-size:10px;background-color:", ";:hover{cursor:pointer;background-color:rgb(30,30,30);}"], (function (e) {
                return e.active ? "rgb(50, 50, 50)" : "black"
            })), Te = (E.a.div.withConfig({
                displayName: "PlayScreen__PlayText",
                componentId: "sc-1kooxl6-45"
            })(["margin-bottom:10px;"]), Object(E.a)(C.b).withConfig({
                displayName: "PlayScreen__StyledLink",
                componentId: "sc-1kooxl6-46"
            })(["color:#7084d6;"]), function (e) {
                var t = Object(p.c)((function (e) {
                        return e.settings.primaryLoadout
                    })), a = Object(p.c)((function (e) {
                        return e.settings.secondaryLoadout
                    })), r = Object(p.c)((function (e) {
                        return e.ui.serverRegion
                    })), i = Object(p.c)((function (e) {
                        return e.ui.connectionStatus
                    })), s = Object(p.c)((function (e) {
                        return e.gameData.gameInitialized
                    })), u = Object(n.useState)(""), m = u[0], d = u[1], E = Object(n.useState)(I.a.BATTLE_ROYALE), h = E[0],
                    C = E[1], j = Object(p.c)((function (e) {
                        return e.ui.adSDKType
                    })), M = Object(p.c)((function (e) {
                        return e.ui.prerollPlayed
                    })), L = Object(p.b)(), G = function () {
                        var e = c()(o.a.mark((function e(n, l, r, i) {
                            var c, s, u;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return C(n), c = Object(I.c)(n), e.prev = 2, e.next = 5, fetch("/find?region=" + l + "&game_mode=" + c + "&version=" + r + (void 0 !== i ? "&tag=" + i : ""));
                                    case 5:
                                        return s = e.sent, e.next = 8, s.json();
                                    case 8:
                                        if (!(u = e.sent).success) {
                                            e.next = 14;
                                            break
                                        }
                                        n !== I.a.CAPTURE_THE_GEMS && n !== I.a.SURVIVAL || (window.location.hash = u.tag), _.a.emit(v.a.REQUEST_GAME_START, t, a, u.ip, u.port), e.next = 15;
                                        break;
                                    case 14:
                                        throw new Error(u.message);
                                    case 15:
                                        e.next = 22;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(2), console.error("Failed to matchmake: " + e.t0.message), L(Object(S.e)(g.a.DISCONNECTED)), d(e.t0.message);
                                    case 22:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[2, 17]])
                        })));
                        return function (t, a, n, l) {
                            return e.apply(this, arguments)
                        }
                    }(), U = function () {
                        var e = c()(o.a.mark((function e(t, a, n, l) {
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        C(t), j === D.a.CRAZYGAMES || M || void 0 !== l ? G(t, a, n, l) : (L(Object(S.v)(!0)), aiptag.cmd.player.push((function () {
                                            aiptag.adplayer = new aipPlayer({
                                                AD_WIDTH: 960,
                                                AD_HEIGHT: 540,
                                                AD_FULLSCREEN: !0,
                                                AD_CENTERPLAYER: !1,
                                                LOADING_TEXT: "loading advertisement",
                                                PREROLL_ELEM: function () {
                                                    return document.getElementById("preroll")
                                                },
                                                AIP_COMPLETE: function (e) {
                                                    G(t, a, n, l)
                                                },
                                                AIP_REMOVE: function () {
                                                }
                                            })
                                        })), void 0 !== aiptag.adplayer ? aiptag.cmd.player.push((function () {
                                            aiptag.adplayer.startPreRoll()
                                        })) : G(t, a, n, l));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t, a, n, l) {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(n.useEffect)((function () {
                    if (s) {
                        var e = new URLSearchParams(window.location.search), n = e.has("ip"), l = e.has("port"),
                            r = "localhost", i = 3002;
                        if (n && (r = e.get("ip")), l) {
                            var u = parseInt(e.get("port"));
                            isNaN(u) || (i = u)
                        }
                        n ? (L(Object(S.e)(g.a.CONNECTING)), _.a.emit(v.a.REQUEST_GAME_START, t, a, r, i)) : c()(o.a.mark((function e() {
                            var t, a, n;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, fetch("/locate");
                                    case 3:
                                        return t = e.sent, e.next = 6, t.json();
                                    case 6:
                                        a = e.sent, n = a.region, L(Object(S.i)(n)), 6 === window.location.hash.length && (L(Object(S.e)(g.a.CONNECTING)), U(I.a.CAPTURE_THE_GEMS, n, x.a.CLIENT_VERSION, window.location.hash.substr(1))), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0), console.error("Failed to locate best server region");
                                    case 15:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 12]])
                        })))()
                    }
                }), [s]);
                var me = F();
                Object(n.useEffect)((function () {
                    if (me) {
                        var e = function () {
                            document.hidden || (j === D.a.CRAZYGAMES ? window.CrazyGames.CrazySDK.getInstance().requestBanner([{
                                containerId: "voxiom-io_970X250_1",
                                size: "728x90"
                            }, {
                                containerId: "voxiom-io_300X250_1",
                                size: "300x250"
                            }]) : j === D.a.ADINPLAY && (aiptag.cmd.display.push((function () {
                                aipDisplayTag.display("voxiom-io_970X250_1")
                            })), aiptag.cmd.display.push((function () {
                                aipDisplayTag.display("voxiom-io_300X250_1")
                            }))))
                        };
                        e();
                        var t = window.setInterval(e, x.a.AD_REFRESH_RATE);
                        return function () {
                            window.clearInterval(t)
                        }
                    }
                }), [j, me]);
                var Te = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), Re = Object(p.c)((function (e) {
                    return e.account.profile
                })), Ae = Object(n.useState)(I.a.CAPTURE_THE_GEMS), je = Ae[0], Me = Ae[1], Pe = null;
                if (je === I.a.CAPTURE_THE_GEMS) Pe = l.a.createElement(fe, null, l.a.createElement(ye, null, l.a.createElement(be, null, "Games Played"), l.a.createElement(_e, null, Re.ctg.total_games_played)), l.a.createElement(ye, null, l.a.createElement(be, null, "Games Won"), l.a.createElement(_e, null, Re.ctg.total_games_won)), l.a.createElement(ye, null, l.a.createElement(be, null, "Win %"), l.a.createElement(_e, null, (0 === Re.ctg.total_games_played ? 0 : Re.ctg.total_games_won / Re.ctg.total_games_played * 100).toFixed(2) + "%")), l.a.createElement(ye, null, l.a.createElement(be, null, "Kills"), l.a.createElement(_e, null, Re.ctg.total_kills)), l.a.createElement(ye, null, l.a.createElement(be, null, "Deaths"), l.a.createElement(_e, null, Re.ctg.total_deaths)), l.a.createElement(ye, null, l.a.createElement(be, null, "KDR"), l.a.createElement(_e, null, 0 === Re.ctg.total_deaths ? 0 === Re.ctg.total_kills ? 0 : "Infinity" : (Re.ctg.total_kills / Re.ctg.total_deaths).toFixed(2))), l.a.createElement(ye, null, l.a.createElement(be, null, "Captures"), l.a.createElement(_e, null, Re.ctg.total_captures)), l.a.createElement(ye, null, l.a.createElement(be, null, "Score"), l.a.createElement(_e, null, Re.ctg.total_score))); else if (je === I.a.BATTLE_ROYALE) {
                    var Le = Re.br.total_survival_time, Fe = Object(O.a)(Le);
                    Pe = l.a.createElement(fe, null, l.a.createElement(ye, null, l.a.createElement(be, null, "Games Played"), l.a.createElement(_e, null, Re.br.total_games_played)), l.a.createElement(ye, null, l.a.createElement(be, null, "Games Won"), l.a.createElement(_e, null, Re.br.total_games_won)), l.a.createElement(ye, null, l.a.createElement(be, null, "Win %"), l.a.createElement(_e, null, (0 === Re.br.total_games_played ? 0 : Re.br.total_games_won / Re.br.total_games_played * 100).toFixed(2) + "%")), l.a.createElement(ye, null, l.a.createElement(be, null, "Kills"), l.a.createElement(_e, null, Re.br.total_kills)), l.a.createElement(ye, null, l.a.createElement(be, null, "Deaths"), l.a.createElement(_e, null, Re.br.total_deaths)), l.a.createElement(ye, null, l.a.createElement(be, null, "KDR"), l.a.createElement(_e, null, 0 === Re.br.total_deaths ? 0 === Re.br.total_kills ? 0 : "Infinity" : (Re.br.total_kills / Re.br.total_deaths).toFixed(2))), l.a.createElement(ye, null, l.a.createElement(be, null, "Time Survived"), l.a.createElement(_e, null, Fe)), l.a.createElement(ye, null, l.a.createElement(be, null, "Score"), l.a.createElement(_e, null, Re.br.total_score)))
                }
                var De = i === g.a.CONNECTING && h === I.a.CAPTURE_THE_GEMS ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Q, null, l.a.createElement(b.a, {
                        icon: y.c,
                        spin: !0
                    }))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Ce, {src: A}), l.a.createElement("div", null, "Capture The Gems")),
                    Ge = i === g.a.CONNECTING && h === I.a.BATTLE_ROYALE ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Q, null, l.a.createElement(b.a, {
                        icon: y.c,
                        spin: !0
                    }))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Se, {src: R}), l.a.createElement("div", null, "Battle Royale")),
                    Be = i === g.a.CONNECTING && h === I.a.SURVIVAL ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Q, null, l.a.createElement(b.a, {
                        icon: y.c,
                        spin: !0
                    }))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Ie, {src: N.a.getItemIcon(k.a.BLOCK + T.a.GRASS)}), l.a.createElement(Oe, null, "Survival")),
                    Ue = Te && Re.level >= 5 ? l.a.createElement(K, {
                        style: {marginTop: 10, width: "100%", height: 50},
                        onClick: function (e) {
                            i === g.a.DISCONNECTED && (window.location.hash.length > 0 || (L(Object(S.e)(g.a.CONNECTING)), window.gtag && gtag("event", "play_svv", {event_category: "game_view"}), U(I.a.SURVIVAL, r, x.a.CLIENT_VERSION)))
                        }
                    }, Be) : l.a.createElement(X, {
                        style: {
                            marginTop: 10,
                            width: "100%"
                        }
                    }, l.a.createElement(J, null, "Unlock at Level 5"), Be),
                    ze = [{value: w.a.US_WEST, label: "US West (San Francisco)"}, {
                        value: w.a.US_EAST,
                        label: "US East (New York City)"
                    }, {value: w.a.EU, label: "Europe (Amsterdam)"}, {value: w.a.ASIA, label: "Asia (Singapore)"}];
                return l.a.createElement(ee, null, l.a.createElement($, null, l.a.createElement(ee, null, l.a.createElement(ce, null, Te ? null : l.a.createElement(ve, {to: "/account"}, l.a.createElement(we, null, l.a.createElement(b.a, {icon: y.b})), l.a.createElement(xe, null, "Login to unlock!")), l.a.createElement(he, null, l.a.createElement(se, null, Re.level), l.a.createElement(ue, null, l.a.createElement(de, {nameLen: Re.nickname.length}, Re.nickname), l.a.createElement(Ee, null, l.a.createElement(pe, null, Re.xp, " / ", 127 * Re.level), l.a.createElement(ge, {
                    value: Re.xp,
                    maxValue: 127 * Re.level,
                    color: "#3498db"
                })))), l.a.createElement(Ne, null, l.a.createElement(ke, {
                    active: je === I.a.CAPTURE_THE_GEMS,
                    onClick: function (e) {
                        Me(I.a.CAPTURE_THE_GEMS)
                    }
                }, "Capture The Gems"), l.a.createElement(ke, {
                    active: je === I.a.BATTLE_ROYALE, onClick: function (e) {
                        Me(I.a.BATTLE_ROYALE)
                    }
                }, "Battle Royale")), Pe)), l.a.createElement(ee, null, l.a.createElement(Y, null, l.a.createElement(q, null, l.a.createElement(H, null, "Region"), l.a.createElement(P, {
                    options: ze,
                    value: ze[r],
                    onChange: function (e) {
                        L(Object(S.i)(e.value))
                    }
                })), l.a.createElement(q, null, l.a.createElement(H, null, "Play"), l.a.createElement(W, null, l.a.createElement(V, {
                    style: {
                        marginRight: 10,
                        width: 183
                    }, onClick: function (e) {
                        i === g.a.DISCONNECTED && (window.location.hash.length > 0 || (L(Object(S.e)(g.a.CONNECTING)), window.gtag && gtag("event", "play_ctg", {event_category: "game_view"}), U(I.a.CAPTURE_THE_GEMS, r, x.a.CLIENT_VERSION)))
                    }
                }, De), l.a.createElement(V, {
                    style: {width: 128}, onClick: function (e) {
                        i === g.a.DISCONNECTED && (window.location.hash.length > 0 || (L(Object(S.e)(g.a.CONNECTING)), window.gtag && gtag("event", "play_br", {event_category: "game_view"}), U(I.a.BATTLE_ROYALE, r, x.a.CLIENT_VERSION)))
                    }
                }, Ge)), l.a.createElement(W, null, Ue)), m.length > 0 ? l.a.createElement(Z, null, m) : null)), l.a.createElement(ee, null, l.a.createElement(z, {
                    id: "voxiom-io_300X250_1",
                    triggerAds: !1
                }), l.a.createElement(te, null, l.a.createElement(ae, null, "Join our community"), l.a.createElement(ne, null, l.a.createElement(le, {
                    href: "https://discord.gg/GBFtRcY",
                    target: "_blank"
                }, l.a.createElement(b.a, {icon: f.a})), l.a.createElement(ie, {
                    href: "https://reddit.com/r/Voxiom",
                    target: "_blank"
                }, l.a.createElement(b.a, {icon: f.d})), l.a.createElement(re, {
                    href: "https://www.twitch.tv/directory/game/Voxiom.io",
                    target: "_blank"
                }, l.a.createElement(b.a, {icon: f.e})), l.a.createElement(oe, {
                    href: "https://twitter.com/thriver0",
                    target: "_blank"
                }, l.a.createElement(b.a, {icon: f.f})))))), l.a.createElement($, null, l.a.createElement(B, {
                    id: "voxiom-io_970X250_1",
                    triggerAds: !1
                })))
            }), Re = E.a.table.withConfig({
                displayName: "BattleRoyaleLeaderboard__Table",
                componentId: "sc-11a1pkw-0"
            })(["border-collapse:collapse;border-spacing:0;"]), Ae = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.idx % 2 == 1 ? "rgba(200, 200, 200, 0.2)" : "rgba(0, 0, 0, 0)"}}
            })).withConfig({
                displayName: "BattleRoyaleLeaderboard__TableRow",
                componentId: "sc-11a1pkw-1"
            })(["text-align:center;"]), je = E.a.td.withConfig({
                displayName: "BattleRoyaleLeaderboard__TableCell",
                componentId: "sc-11a1pkw-2"
            })(["padding:10px 5px;"]), Me = E.a.th.withConfig({
                displayName: "BattleRoyaleLeaderboard__TableHeaderCell",
                componentId: "sc-11a1pkw-3"
            })(["padding:10px 5px;"]), Pe = E.a.div.withConfig({
                displayName: "BattleRoyaleLeaderboard__SortMenu",
                componentId: "sc-11a1pkw-4"
            })(["margin-top:10px;display:flex;align-items:center;"]), Le = E.a.div.withConfig({
                displayName: "BattleRoyaleLeaderboard__SortLabel",
                componentId: "sc-11a1pkw-5"
            })(["margin-right:10px;"]), Fe = Object(E.a)(C.b).withConfig({
                displayName: "BattleRoyaleLeaderboard__PlayerLink",
                componentId: "sc-11a1pkw-6"
            })(["color:white;"]), De = Object(E.a)(C.c).attrs({activeClassName: "nav-stats-item-active"}).withConfig({
                displayName: "BattleRoyaleLeaderboard__StatsMenuItem",
                componentId: "sc-11a1pkw-7"
            })(["color:white;text-decoration:none;padding:5px 10px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}&.", "{background-color:rgb(50,50,50);}"], "nav-stats-item-active"),
            Ge = E.a.div.withConfig({
                displayName: "BattleRoyaleLeaderboard__ResetText",
                componentId: "sc-11a1pkw-8"
            })(["color:#e67e22;margin:10px 0;"]), Be = function (e) {
                var t = Object(n.useState)([]), a = t[0], r = t[1], i = Object(n.useState)(-1), s = i[0], u = i[1],
                    m = Object(n.useState)(!0), d = (m[0], m[1]), p = Object(n.useState)("total_score"), E = p[0], g = p[1],
                    h = Object(n.useState)("week"), f = h[0], y = h[1], b = L();
                Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a, n, l, i;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, d(!0), t = new URLSearchParams(window.location.search), a = f, n = E, t.has("sort") && (n = t.get("sort"), g(n)), t.has("range") && (a = t.get("range"), y(a)), e.next = 9, fetch("/profile/leaderboard?game_mode=br&range=" + a + "&sort=" + n, {method: "post"});
                                case 9:
                                    return l = e.sent, e.next = 12, l.json();
                                case 12:
                                    i = e.sent, r(i.players), u(i.time_left), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.error("Failed to fetch leaderboard data");
                                case 20:
                                    return e.prev = 20, d(!1), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 17, 20, 23]])
                    })))()
                }), [window.location.search]);
                var _ = a.map((function (e, t) {
                    var a = e.total_survival_time, n = Object(O.a)(a);
                    return l.a.createElement(Ae, {
                        key: t,
                        idx: t
                    }, l.a.createElement(je, null, t + 1), l.a.createElement(je, null, l.a.createElement(Fe, {to: "/player/" + e.nickname}, e.nickname)), l.a.createElement(je, null, e.level), l.a.createElement(je, null, e.total_games_played), l.a.createElement(je, null, e.total_games_won), l.a.createElement(je, null, e.total_kills), l.a.createElement(je, null, e.total_deaths), l.a.createElement(je, null, n), l.a.createElement(je, null, e.total_score))
                }));
                return l.a.createElement(l.a.Fragment, null, l.a.createElement(Pe, null, l.a.createElement(Le, null, "Range:"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=day&sort=" + E,
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "day" === f
                    }
                }, "Day"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=week&sort=" + E, onClick: function (e) {
                        return b()
                    }, isActive: function (e, t) {
                        return "week" === f
                    }
                }, "Week"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=all&sort=" + E, onClick: function (e) {
                        return b()
                    }, isActive: function (e, t) {
                        return "all" === f
                    }
                }, "All Time")), l.a.createElement(Pe, null, l.a.createElement(Le, null, "Sort By:"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=" + f + "&sort=total_score",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_score" === E
                    }
                }, "Score"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=" + f + "&sort=total_games_won",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_games_won" === E
                    }
                }, "Games Won"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=" + f + "&sort=total_kills",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_kills" === E
                    }
                }, "Kills"), l.a.createElement(De, {
                    to: "/leaderboard/br?range=" + f + "&sort=total_survival_time",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_survival_time" === E
                    }
                }, "Survival Time")), s > 0 ? l.a.createElement(Ge, null, "Leaderboard resets in ", Object(O.b)(s)) : null, l.a.createElement(Re, null, l.a.createElement("thead", null, l.a.createElement(Ae, null, l.a.createElement(Me, null, "Rank"), l.a.createElement(Me, null, "Name"), l.a.createElement(Me, null, "Level"), l.a.createElement(Me, null, "Games Played"), l.a.createElement(Me, null, "Games Won"), l.a.createElement(Me, null, "Kills"), l.a.createElement(Me, null, "Deaths"), l.a.createElement(Me, null, "Survival Time"), l.a.createElement(Me, null, "Score"))), l.a.createElement("tbody", null, _)))
            }, Ue = E.a.table.withConfig({
                displayName: "CaptureTheGemsLeaderboard__Table",
                componentId: "sc-13deu71-0"
            })(["border-collapse:collapse;border-spacing:0;"]), ze = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.idx % 2 == 1 ? "rgba(200, 200, 200, 0.2)" : "rgba(0, 0, 0, 0)"}}
            })).withConfig({
                displayName: "CaptureTheGemsLeaderboard__TableRow",
                componentId: "sc-13deu71-1"
            })(["text-align:center;"]), Ye = E.a.td.withConfig({
                displayName: "CaptureTheGemsLeaderboard__TableCell",
                componentId: "sc-13deu71-2"
            })(["padding:10px 5px;"]), qe = E.a.th.withConfig({
                displayName: "CaptureTheGemsLeaderboard__TableHeaderCell",
                componentId: "sc-13deu71-3"
            })(["padding:10px 5px;"]), We = E.a.div.withConfig({
                displayName: "CaptureTheGemsLeaderboard__SortMenu",
                componentId: "sc-13deu71-4"
            })(["margin-top:10px;display:flex;align-items:center;"]), He = E.a.div.withConfig({
                displayName: "CaptureTheGemsLeaderboard__SortLabel",
                componentId: "sc-13deu71-5"
            })(["margin-right:10px;"]), Ve = Object(E.a)(C.b).withConfig({
                displayName: "CaptureTheGemsLeaderboard__PlayerLink",
                componentId: "sc-13deu71-6"
            })(["color:white;"]), Ke = Object(E.a)(C.c).attrs({activeClassName: "nav-stats-item-active"}).withConfig({
                displayName: "CaptureTheGemsLeaderboard__StatsMenuItem",
                componentId: "sc-13deu71-7"
            })(["color:white;text-decoration:none;padding:5px 10px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}&.", "{background-color:rgb(50,50,50);}"], "nav-stats-item-active"),
            Xe = E.a.div.withConfig({
                displayName: "CaptureTheGemsLeaderboard__ResetText",
                componentId: "sc-13deu71-8"
            })(["color:#e67e22;margin:10px 0;"]), Je = function (e) {
                var t = Object(n.useState)([]), a = t[0], r = t[1], i = Object(n.useState)(-1), s = i[0], u = i[1],
                    m = Object(n.useState)(!0), d = (m[0], m[1]), p = Object(n.useState)("total_score"), E = p[0], g = p[1],
                    h = Object(n.useState)("week"), f = h[0], y = h[1], b = L();
                Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a, n, l, i;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, d(!0), t = new URLSearchParams(window.location.search), a = f, n = E, t.has("sort") && (n = t.get("sort"), g(n)), t.has("range") && (a = t.get("range"), y(a)), e.next = 9, fetch("/profile/leaderboard?game_mode=ctg&range=" + a + "&sort=" + n, {method: "post"});
                                case 9:
                                    return l = e.sent, e.next = 12, l.json();
                                case 12:
                                    i = e.sent, r(i.players), u(i.time_left), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.error("Failed to fetch leaderboard data");
                                case 20:
                                    return e.prev = 20, d(!1), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 17, 20, 23]])
                    })))()
                }), [window.location.search]);
                var _ = a.map((function (e, t) {
                    return l.a.createElement(ze, {
                        key: t,
                        idx: t
                    }, l.a.createElement(Ye, null, t + 1), l.a.createElement(Ye, null, l.a.createElement(Ve, {to: "/player/" + e.nickname}, e.nickname)), l.a.createElement(Ye, null, e.level), l.a.createElement(Ye, null, e.total_games_played), l.a.createElement(Ye, null, e.total_games_won), l.a.createElement(Ye, null, e.total_kills), l.a.createElement(Ye, null, e.total_deaths), l.a.createElement(Ye, null, e.total_captures), l.a.createElement(Ye, null, e.total_score))
                }));
                return l.a.createElement(l.a.Fragment, null, l.a.createElement(We, null, l.a.createElement(He, null, "Range:"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=day&sort=" + E,
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "day" === f
                    }
                }, "Day"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=week&sort=" + E, onClick: function (e) {
                        return b()
                    }, isActive: function (e, t) {
                        return "week" === f
                    }
                }, "Week"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=all&sort=" + E, onClick: function (e) {
                        return b()
                    }, isActive: function (e, t) {
                        return "all" === f
                    }
                }, "All Time")), l.a.createElement(We, null, l.a.createElement(He, null, "Sort By:"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=" + f + "&sort=total_score",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_score" === E
                    }
                }, "Score"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=" + f + "&sort=total_games_won",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_games_won" === E
                    }
                }, "Games Won"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=" + f + "&sort=total_kills",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_kills" === E
                    }
                }, "Kills"), l.a.createElement(Ke, {
                    to: "/leaderboard/ctg?range=" + f + "&sort=total_captures",
                    onClick: function (e) {
                        return b()
                    },
                    isActive: function (e, t) {
                        return "total_captures" === E
                    }
                }, "Captures")), s > 0 ? l.a.createElement(Xe, null, "Leaderboard resets in ", Object(O.b)(s)) : null, l.a.createElement(Ue, null, l.a.createElement("thead", null, l.a.createElement(ze, null, l.a.createElement(qe, null, "Rank"), l.a.createElement(qe, null, "Name"), l.a.createElement(qe, null, "Level"), l.a.createElement(qe, null, "Games Played"), l.a.createElement(qe, null, "Games Won"), l.a.createElement(qe, null, "Kills"), l.a.createElement(qe, null, "Deaths"), l.a.createElement(qe, null, "Captures"), l.a.createElement(qe, null, "Score"))), l.a.createElement("tbody", null, _)))
            }, Ze = E.a.table.withConfig({
                displayName: "AllLeaderboard__Table",
                componentId: "sc-1w7ojyq-0"
            })(["border-collapse:collapse;border-spacing:0;"]), Qe = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.idx % 2 == 1 ? "rgba(200, 200, 200, 0.2)" : "rgba(0, 0, 0, 0)"}}
            })).withConfig({displayName: "AllLeaderboard__TableRow", componentId: "sc-1w7ojyq-1"})(["text-align:center;"]),
            $e = E.a.td.withConfig({
                displayName: "AllLeaderboard__TableCell",
                componentId: "sc-1w7ojyq-2"
            })(["padding:10px 5px;"]), et = E.a.th.withConfig({
                displayName: "AllLeaderboard__TableHeaderCell",
                componentId: "sc-1w7ojyq-3"
            })(["padding:10px 5px;"]), tt = Object(E.a)(C.b).withConfig({
                displayName: "AllLeaderboard__PlayerLink",
                componentId: "sc-1w7ojyq-4"
            })(["color:white;"]), at = E.a.div.withConfig({
                displayName: "AllLeaderboard__SortMenu",
                componentId: "sc-1w7ojyq-5"
            })(["margin-top:10px;display:flex;align-items:center;"]), nt = E.a.div.withConfig({
                displayName: "AllLeaderboard__SortLabel",
                componentId: "sc-1w7ojyq-6"
            })(["margin-right:10px;"]), lt = Object(E.a)(C.c).attrs({activeClassName: "nav-stats-item-active"}).withConfig({
                displayName: "AllLeaderboard__StatsMenuItem",
                componentId: "sc-1w7ojyq-7"
            })(["color:white;text-decoration:none;padding:5px 10px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}&.", "{background-color:rgb(50,50,50);}"], "nav-stats-item-active"),
            rt = function (e) {
                var t = Object(n.useState)([]), a = t[0], r = t[1], i = Object(n.useState)(!0), s = (i[0], i[1]),
                    u = Object(n.useState)("level"), m = u[0], d = u[1], p = L();
                Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a, n, l;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, s(!0), t = new URLSearchParams(window.location.search), a = m, t.has("sort") && (a = t.get("sort"), d(a)), e.next = 7, fetch("/profile/leaderboard?sort=" + a, {method: "post"});
                                case 7:
                                    return n = e.sent, e.next = 10, n.json();
                                case 10:
                                    l = e.sent, r(l.players), e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.error("Failed to fetch leaderboard data");
                                case 17:
                                    return e.prev = 17, s(!1), e.finish(17);
                                case 20:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 14, 17, 20]])
                    })))()
                }), [window.location.search]);
                var E = a.map((function (e, t) {
                    return l.a.createElement(Qe, {
                        key: t,
                        idx: t
                    }, l.a.createElement($e, null, t + 1), l.a.createElement($e, null, l.a.createElement(tt, {to: "/player/" + e.nickname}, e.nickname)), l.a.createElement($e, null, e.level), l.a.createElement($e, null, e.score))
                }));
                return l.a.createElement(l.a.Fragment, null, l.a.createElement(at, null, l.a.createElement(nt, null, "Sort By:"), l.a.createElement(lt, {
                    to: "/leaderboard/all?sort=level",
                    onClick: function (e) {
                        return p()
                    },
                    isActive: function (e, t) {
                        return "level" === m
                    }
                }, "Level"), l.a.createElement(lt, {
                    to: "/leaderboard/all?sort=score", onClick: function (e) {
                        return p()
                    }, isActive: function (e, t) {
                        return "score" === m
                    }
                }, "Score")), l.a.createElement(Ze, null, l.a.createElement("thead", null, l.a.createElement(Qe, null, l.a.createElement(et, null, "Rank"), l.a.createElement(et, null, "Name"), l.a.createElement(et, null, "Level"), l.a.createElement(et, null, "Score"))), l.a.createElement("tbody", null, E)))
            }, ot = a(9), it = E.a.div.withConfig({
                displayName: "LeaderboardScreen__LeaderboardPanel",
                componentId: "bmtkyw-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            ct = E.a.div.withConfig({
                displayName: "LeaderboardScreen__StatsMenu",
                componentId: "bmtkyw-1"
            })(["background-color:rgba(0,0,0,0.8);display:flex;"]),
            st = Object(E.a)(C.c).attrs({activeClassName: "nav-stats-item-active"}).withConfig({
                displayName: "LeaderboardScreen__StatsMenuItem",
                componentId: "bmtkyw-2"
            })(["color:white;text-decoration:none;padding:10px 20px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}&.", "{background-color:rgb(50,50,50);}"], "nav-stats-item-active"),
            ut = function (e) {
                return l.a.createElement(it, null, l.a.createElement(ct, null, l.a.createElement(st, {to: "/leaderboard/all"}, "All"), l.a.createElement(st, {to: "/leaderboard/ctg"}, "Capture The Gems"), l.a.createElement(st, {to: "/leaderboard/br"}, "Battle Royale")), l.a.createElement(ot.d, null, l.a.createElement(ot.b, {path: "/leaderboard/br"}, l.a.createElement(Be, null)), l.a.createElement(ot.b, {path: "/leaderboard/ctg"}, l.a.createElement(Je, null)), l.a.createElement(ot.b, {path: "/leaderboard/all"}, l.a.createElement(rt, null)), l.a.createElement(ot.b, null, l.a.createElement(rt, null))))
            }, mt = a(142), dt = a.n(mt), pt = a(143), Et = a.n(pt);
        dt.a.extend(Et.a);
        var gt, ht = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__AccountPanel",
                componentId: "sc-1qc6yt7-0"
            })(["display:flex;flex-direction:column;width:100%;box-sizing:content-box;"]), ft = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__LevelPanel",
                componentId: "sc-1qc6yt7-1"
            })(["width:80px;height:80px;border:2px solid grey;display:flex;justify-content:center;align-items:center;font-size:30px;background-color:black;"]),
            yt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__AccountInfoPanel",
                componentId: "sc-1qc6yt7-2"
            })(["margin-left:20px;display:flex;flex-direction:column;flex:1;justify-content:space-between;"]),
            bt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__AccountName",
                componentId: "sc-1qc6yt7-3"
            })(["font-size:20px;"]), _t = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__AccountExperienceValue",
                componentId: "sc-1qc6yt7-4"
            })(["z-index:999;"]), vt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__AccountExperienceBarOuter",
                componentId: "sc-1qc6yt7-5"
            })(["border:1px solid white;display:flex;justify-content:center;align-items:center;position:relative;font-size:15px;padding:8px;"]),
            wt = E.a.div.attrs((function (e) {
                var t = e.value, a = e.maxValue;
                return {style: {backgroundColor: e.color, width: t / a * 100 + "%"}}
            })).withConfig({
                displayName: "PlayerStatsScreen__AccountExperienceBarInner",
                componentId: "sc-1qc6yt7-6"
            })(["position:absolute;top:0;left:0;height:100%;"]), xt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__LevelDetails",
                componentId: "sc-1qc6yt7-7"
            })(["display:flex;flex-direction:row;position:relative;background-color:rgba(0,0,0,0.8);padding:20px;"]),
            St = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__StatsDetails",
                componentId: "sc-1qc6yt7-8"
            })(["margin-top:20px;display:flex;flex-wrap:wrap;margin-left:-20px;"]), Ct = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__StatsPanel",
                componentId: "sc-1qc6yt7-9"
            })(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background-color:rgba(0,0,0,0.8);margin-bottom:20px;width:270px;margin-left:20px;"]),
            It = E.a.div.withConfig({displayName: "PlayerStatsScreen__StatsName", componentId: "sc-1qc6yt7-10"})([""]),
            Ot = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__StatsValue",
                componentId: "sc-1qc6yt7-11"
            })(["margin-top:10px;font-size:20px;"]), Nt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__SignInTitle",
                componentId: "sc-1qc6yt7-12"
            })(["font-size:20px;margin-bottom:20px;"]), kt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__SignInPanel",
                componentId: "sc-1qc6yt7-13"
            })(["margin-top:20px;padding:20px;background-color:rgba(0,0,0,0.8);display:flex;flex-direction:column;"]),
            Tt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__SigninMethods",
                componentId: "sc-1qc6yt7-14"
            })(["display:flex;flex-direction:column;align-items:center;"]), Rt = E.a.a.withConfig({
                displayName: "PlayerStatsScreen__SignInMethodButton",
                componentId: "sc-1qc6yt7-15"
            })(["display:block;text-align:center;padding:10px;text-decoration:none;color:white;margin-bottom:10px;width:200px;display:flex;align-items:center;:hover{cursor:pointer;}"]),
            At = Object(E.a)(Rt).withConfig({
                displayName: "PlayerStatsScreen__DiscordSignInButton",
                componentId: "sc-1qc6yt7-16"
            })(["background-color:#7289DA;:hover{background-color:#8da6ff;}"]), jt = Object(E.a)(Rt).withConfig({
                displayName: "PlayerStatsScreen__GoogleSignInButton",
                componentId: "sc-1qc6yt7-17"
            })(["background-color:#ea4435;:hover{background-color:#ff6a5c;}"]), Mt = Object(E.a)(Rt).withConfig({
                displayName: "PlayerStatsScreen__FacebookSignInButton",
                componentId: "sc-1qc6yt7-18"
            })(["background-color:#4967aa;:hover{background-color:#658be2;}"]), Pt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__NotLoggedInLockOverlay",
                componentId: "sc-1qc6yt7-19"
            })(["position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;font-size:50px;background-color:rgba(100,100,100,0.5);"]),
            Lt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__LoginBrandLogo",
                componentId: "sc-1qc6yt7-20"
            })(["font-size:20px;top:2px;position:relative;margin-left:5px;"]), Ft = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__LoginBrandText",
                componentId: "sc-1qc6yt7-21"
            })(["flex:1;text-align:center;"]), Dt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__StatsMenu",
                componentId: "sc-1qc6yt7-22"
            })(["background-color:rgba(0,0,0,0.8);display:flex;"]), Gt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__StatsMenuItem",
                componentId: "sc-1qc6yt7-23"
            })(["padding:10px 20px;background-color:", ";:hover{cursor:pointer;background-color:rgb(30,30,30);}"], (function (e) {
                return e.active ? "rgb(50, 50, 50)" : "black"
            })), Bt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchHistory",
                componentId: "sc-1qc6yt7-24"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;display:flex;flex-direction:column;"]),
            Ut = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchHistoryTitle",
                componentId: "sc-1qc6yt7-25"
            })(["font-size:25px;"]), zt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__Match",
                componentId: "sc-1qc6yt7-26"
            })(["padding:10px 20px;background-color:rgba(100,100,100,0.2);display:flex;justify-content:space-between;margin-top:10px;"]),
            Yt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchLeft",
                componentId: "sc-1qc6yt7-27"
            })(["display:flex;align-items:center;"]), qt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchRight",
                componentId: "sc-1qc6yt7-28"
            })(["display:flex;align-items:center;margin-right:20px;"]), Wt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchDetails",
                componentId: "sc-1qc6yt7-29"
            })(["width:300px;"]), Ht = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchResult",
                componentId: "sc-1qc6yt7-30"
            })(["font-size:30px;margin-bottom:5px;"]), Vt = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__MatchResultNegative",
                componentId: "sc-1qc6yt7-31"
            })(["color:red;"]), Kt = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__MatchResultPositive",
                componentId: "sc-1qc6yt7-32"
            })(["color:#1fe61f;"]), Xt = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__MatchResultRank",
                componentId: "sc-1qc6yt7-33"
            })(["color:#f1c40f;"]), Jt = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__MatchResultNeutral",
                componentId: "sc-1qc6yt7-34"
            })(["color:gray;"]), Zt = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__MatchDuration",
                componentId: "sc-1qc6yt7-35"
            })([""]),
            Qt = E.a.div.withConfig({displayName: "PlayerStatsScreen__MatchTime", componentId: "sc-1qc6yt7-36"})([""]),
            $t = E.a.div.withConfig({displayName: "PlayerStatsScreen__MatchStats", componentId: "sc-1qc6yt7-37"})([""]),
            ea = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__TeamScore",
                componentId: "sc-1qc6yt7-38"
            })(["font-size:30px;margin-bottom:5px;"]), ta = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__SapphireScore",
                componentId: "sc-1qc6yt7-39"
            })(["color:#3498db;"]), aa = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__TeamScoreSeparator",
                componentId: "sc-1qc6yt7-40"
            })([""]), na = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__RubyScore",
                componentId: "sc-1qc6yt7-41"
            })(["color:#e74c3c;"]), la = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__PlayerStats",
                componentId: "sc-1qc6yt7-42"
            })([""]), ra = Object(E.a)(C.b).withConfig({
                displayName: "PlayerStatsScreen__ViewDetailsButton",
                componentId: "sc-1qc6yt7-43"
            })(["background-color:rgba(0,0,0,0.7);padding:5px 10px;color:white;text-decoration:none;:hover{background-color:rgba(100,100,100,0.5);}"]),
            oa = E.a.span.withConfig({
                displayName: "PlayerStatsScreen__StatLabel",
                componentId: "sc-1qc6yt7-44"
            })(["color:#a7a7a7;"]), ia = E.a.div.withConfig({
                displayName: "PlayerStatsScreen__NoMatchFoundText",
                componentId: "sc-1qc6yt7-45"
            })(["margin-top:20px;"]), ca = function (e) {
                var t = e.authenticated, a = e.data, r = Object(n.useState)(I.a.CAPTURE_THE_GEMS), o = r[0], i = r[1],
                    c = null;
                if (o === I.a.CAPTURE_THE_GEMS) c = l.a.createElement(l.a.Fragment, null, l.a.createElement(St, null, l.a.createElement(Ct, null, l.a.createElement(It, null, "Games Played"), l.a.createElement(Ot, null, a.ctg.total_games_played)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Games Won"), l.a.createElement(Ot, null, a.ctg.total_games_won)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Win %"), l.a.createElement(Ot, null, (0 === a.ctg.total_games_played ? 0 : a.ctg.total_games_won / a.ctg.total_games_played * 100).toFixed(2) + "%")), l.a.createElement(Ct, null, l.a.createElement(It, null, "Kills"), l.a.createElement(Ot, null, a.ctg.total_kills)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Deaths"), l.a.createElement(Ot, null, a.ctg.total_deaths)), l.a.createElement(Ct, null, l.a.createElement(It, null, "KDR"), l.a.createElement(Ot, null, 0 === a.ctg.total_deaths ? 0 === a.ctg.total_kills ? 0 : "Infinity" : (a.ctg.total_kills / a.ctg.total_deaths).toFixed(2))), l.a.createElement(Ct, null, l.a.createElement(It, null, "Captures"), l.a.createElement(Ot, null, a.ctg.total_captures)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Score"), l.a.createElement(Ot, null, a.ctg.total_score))), l.a.createElement(Bt, null, l.a.createElement(Ut, null, "Match History"), 0 === a.ctg.matches.length ? "No matches found" : a.ctg.matches.map((function (e, t) {
                    return l.a.createElement(zt, {key: t}, l.a.createElement(Yt, null, l.a.createElement(Wt, null, l.a.createElement(Ht, null, e.victory ? l.a.createElement(Kt, null, "Victory") : l.a.createElement(Vt, null, "Defeat")), l.a.createElement(Zt, null, l.a.createElement(oa, null, "Map: "), e.map_name), l.a.createElement(Qt, null, l.a.createElement(oa, null, "Time: "), dt()(e.time).fromNow()), l.a.createElement(Zt, null, l.a.createElement(oa, null, "Duration: "), Object(O.b)(e.duration))), l.a.createElement($t, null, l.a.createElement(ea, null, l.a.createElement(ta, null, e.team1_score), l.a.createElement(aa, null, " : "), l.a.createElement(na, null, e.team2_score)), l.a.createElement(la, null, l.a.createElement(oa, null, "Kills: "), e.kills, " ", l.a.createElement(oa, null, "Deaths: "), e.deaths, " ", l.a.createElement(oa, null, "Captures: "), e.captures, " ", l.a.createElement(oa, null, "Score: "), e.score))), l.a.createElement(qt, null, l.a.createElement(ra, {to: "/match/ctg/" + e.match_id}, "View Details")))
                })))); else if (o === I.a.BATTLE_ROYALE) {
                    var s = a.br.total_survival_time, u = Object(O.a)(s);
                    c = l.a.createElement(l.a.Fragment, null, l.a.createElement(St, null, l.a.createElement(Ct, null, l.a.createElement(It, null, "Games Played"), l.a.createElement(Ot, null, a.br.total_games_played)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Games Won"), l.a.createElement(Ot, null, a.br.total_games_won)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Win %"), l.a.createElement(Ot, null, (0 === a.br.total_games_played ? 0 : a.br.total_games_won / a.br.total_games_played * 100).toFixed(2) + "%")), l.a.createElement(Ct, null, l.a.createElement(It, null, "Kills"), l.a.createElement(Ot, null, a.br.total_kills)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Deaths"), l.a.createElement(Ot, null, a.br.total_deaths)), l.a.createElement(Ct, null, l.a.createElement(It, null, "KDR"), l.a.createElement(Ot, null, 0 === a.br.total_deaths ? 0 === a.br.total_kills ? 0 : "Infinity" : (a.br.total_kills / a.br.total_deaths).toFixed(2))), l.a.createElement(Ct, null, l.a.createElement(It, null, "Time Survived"), l.a.createElement(Ot, null, u)), l.a.createElement(Ct, null, l.a.createElement(It, null, "Score"), l.a.createElement(Ot, null, a.br.total_score))), l.a.createElement(Bt, null, l.a.createElement(Ut, null, "Match History"), 0 === a.br.matches.length ? l.a.createElement(ia, null, "No matches found") : a.br.matches.map((function (e, t) {
                        return l.a.createElement(zt, {key: t}, l.a.createElement(Yt, null, l.a.createElement(Wt, null, l.a.createElement(Ht, null, l.a.createElement(Xt, null, "#", e.rank), l.a.createElement(Jt, null, " / ", e.num_players)), l.a.createElement(Qt, null, l.a.createElement(oa, null, "Time: "), dt()(e.time).fromNow()), l.a.createElement(Zt, null, l.a.createElement(oa, null, "Duration: "), Object(O.b)(e.duration))), l.a.createElement($t, null, l.a.createElement(la, null, l.a.createElement(oa, null, "Kills: "), e.kills), l.a.createElement(la, null, l.a.createElement(oa, null, "Deaths: "), e.deaths), l.a.createElement(la, null, l.a.createElement(oa, null, "Score: "), e.score), l.a.createElement(la, null, l.a.createElement(oa, null, "Survival Time: "), Object(O.a)(e.survival_time)))), l.a.createElement(qt, null, l.a.createElement(ra, {to: "/match/br/" + e.match_id}, "View Details")))
                    }))))
                }
                return l.a.createElement(ht, null, l.a.createElement(xt, null, t ? null : l.a.createElement(Pt, null, l.a.createElement(b.a, {icon: y.b})), l.a.createElement(ft, null, a.level), l.a.createElement(yt, null, l.a.createElement(bt, null, a.nickname), l.a.createElement(vt, null, l.a.createElement(_t, null, a.xp, " / ", 127 * a.level), l.a.createElement(wt, {
                    value: a.xp,
                    maxValue: 127 * a.level,
                    color: "#3498db"
                })))), l.a.createElement(Dt, null, l.a.createElement(Gt, {
                    active: o === I.a.CAPTURE_THE_GEMS,
                    onClick: function (e) {
                        i(I.a.CAPTURE_THE_GEMS)
                    }
                }, "Capture The Gems"), l.a.createElement(Gt, {
                    active: o === I.a.BATTLE_ROYALE, onClick: function (e) {
                        i(I.a.BATTLE_ROYALE)
                    }
                }, "Battle Royale")), t ? c : l.a.createElement(kt, null, l.a.createElement(Nt, null, "Sign in to track stats and level up!"), l.a.createElement(Tt, null, l.a.createElement(At, {
                    href: "/auth/discord",
                    target: "_blank"
                }, l.a.createElement(Lt, null, l.a.createElement(b.a, {icon: f.a})), l.a.createElement(Ft, null, "Sign in with Discord")), l.a.createElement(jt, {
                    href: "/auth/google",
                    target: "_blank"
                }, l.a.createElement(Lt, null, l.a.createElement(b.a, {icon: f.c})), l.a.createElement(Ft, null, "Sign in with Google")), l.a.createElement(Mt, {
                    href: "/auth/facebook",
                    target: "_blank"
                }, l.a.createElement(Lt, null, l.a.createElement(b.a, {icon: f.b})), l.a.createElement(Ft, null, "Sign in with Facebook")))))
            }, sa = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), a = Object(p.c)((function (e) {
                    return e.account.profile
                }));
                return l.a.createElement(ca, {authenticated: t, data: a})
            }, ua = E.a.div.withConfig({
                displayName: "PlayerAccountScreen__Wrapper",
                componentId: "sc-1tl50j1-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;"]),
            ma = function (e) {
                Object(p.b)();
                var t = Object(n.useState)({}), a = t[0], r = t[1], i = Object(n.useState)(!0), s = i[0], u = i[1],
                    m = Object(n.useState)(!1), d = m[0], E = m[1], g = Object(ot.h)().nickname;
                return Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, E(!1), u(!0), e.next = 5, fetch("/profile/player/" + g, {method: "post"});
                                case 5:
                                    return t = e.sent, e.next = 8, t.json();
                                case 8:
                                    if (!(a = e.sent).success) {
                                        e.next = 13;
                                        break
                                    }
                                    r(a.data), e.next = 14;
                                    break;
                                case 13:
                                    throw new Error("Failed to find player");
                                case 14:
                                    E(!0), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.error("Failed to fetch account data");
                                case 20:
                                    return e.prev = 20, u(!1), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 17, 20, 23]])
                    })))()
                }), []), s ? l.a.createElement(ua, null, "Loading...") : d ? l.a.createElement(ca, {
                    authenticated: !0,
                    data: a
                }) : l.a.createElement(ua, null, "Failed to load player data")
            }, da = E.a.div.withConfig({
                displayName: "UpdatesScreen__PatchNotesPanel",
                componentId: "sc-1rc7d0f-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            pa = E.a.div.withConfig({
                displayName: "UpdatesScreen__Title",
                componentId: "sc-1rc7d0f-1"
            })(["font-size:25px;margin-bottom:20px;"]), Ea = E.a.div.withConfig({
                displayName: "UpdatesScreen__Update",
                componentId: "sc-1rc7d0f-2"
            })(["margin-bottom:30px;"]), ga = E.a.div.withConfig({
                displayName: "UpdatesScreen__UpdateTitle",
                componentId: "sc-1rc7d0f-3"
            })(["font-weight:bold;margin-bottom:5px;font-size:18px;color:#f39c12;"]),
            ha = E.a.div.withConfig({displayName: "UpdatesScreen__UpdateContent", componentId: "sc-1rc7d0f-4"})([""]),
            fa = E.a.div.withConfig({
                displayName: "UpdatesScreen__UpdateSubTitle",
                componentId: "sc-1rc7d0f-5"
            })(["font-style:italic;font-weight:bold;margin-top:10px;margin-bottom:5px;color:#3498db;"]),
            ya = E.a.ul.withConfig({
                displayName: "UpdatesScreen__UpdateList",
                componentId: "sc-1rc7d0f-6"
            })(["margin-left:20px;"]), ba = E.a.li.withConfig({
                displayName: "UpdatesScreen__UpdateListItem",
                componentId: "sc-1rc7d0f-7"
            })(["list-style-type:square;line-height:30px;"]), _a = E.a.div.withConfig({
                displayName: "UpdatesScreen__UpdateExplanation",
                componentId: "sc-1rc7d0f-8"
            })([""]), va = E.a.a.withConfig({
                displayName: "UpdatesScreen__NativeLink",
                componentId: "sc-1rc7d0f-9"
            })(["color:#74b9ff;"]), wa = Object(E.a)(C.b).withConfig({
                displayName: "UpdatesScreen__StyledLink",
                componentId: "sc-1rc7d0f-10"
            })(["color:#74b9ff;"]), xa = function (e) {
                return l.a.createElement(da, null, l.a.createElement(pa, null, "Update Patch Notes"), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.5.3 - New CTG Map (Saturday, April 24th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "A new map is now in rotation in Capture The Gems"), l.a.createElement(ba, null, "The name of the new map is Oasis"), l.a.createElement(ba, null, "The new map features a central island with buildings and treasures"), l.a.createElement(ba, null, "The name of the old map is Riverdale"), l.a.createElement(ba, null, "The name of map played in a CTG match is shown on the match stats page")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced cactus damage")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed item usage and block placement text getting stuck on respawn in some cases")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.5.2 - Miscellaneous (Thursday, April 15th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Weapon Skins"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added Covert items to Crate A"), l.a.createElement(ba, null, "Covert items are shovel skins, currently there are 4 shovel skins: fade, volcanic, pearl marble, and blaze"), l.a.createElement(ba, null, "Added various new skins")), l.a.createElement(fa, null, "Shop"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now view the potential items in a crate")), l.a.createElement(fa, null, "Account Inventory"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added a button to quickly unequip a weapon skin (equip default)"), l.a.createElement(ba, null, "Added option to recycle items back to the game")), l.a.createElement(fa, null, "Survival"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added mythic shovels and mythic weapons. They have a chance to randomly spawn as dungeon loot"), l.a.createElement(ba, null, "Mythic shovels are able to destroy normally unbreakable blocks such as bedrock"), l.a.createElement(ba, null, "Increased dungeon spawn rate (~x10)"), l.a.createElement(ba, null, "Added cactus blocks to dungeon loot table")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed inventory getting stuck on respawn in some cases"), l.a.createElement(ba, null, 'Fixed "unlock at level 5" missing on survival play button')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.5.1 - Miscellaneous (Thursday, April 8th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed weapon skins not applied to weapons dropped by broken chests")), l.a.createElement(fa, null, "Account Loadouts"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added filters and pagination to account loadouts")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.5.0 - Introducing Weapon Skins and Vox Gems! (Sunday, April 4th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Weapon Skins"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Weapon skins are now available to purchase and collect!"), l.a.createElement(ba, null, "In this initial release, there are more than 200 skins with around 28 patterns"), l.a.createElement(ba, null, "Each skin pattern you obtain is unique, which means that even if someone obtained the same skin as you did, the patterns will look different"), l.a.createElement(ba, null, "You can obtain weapon skins through opening crates, please see the ", l.a.createElement(wa, {to: "/shop"}, "Shop"), " for more details"), l.a.createElement(ba, null, "Weapon skins are equippable in your ", l.a.createElement(wa, {to: "/loadouts"}, "Account Loadouts"))), l.a.createElement(fa, null, "Vox Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Vox Gems is the official in game currency of Voxiom"), l.a.createElement(ba, null, "You earn 1 vox gem for every 100 XP in Capture The Gems or Battle Royale"), l.a.createElement(ba, null, "You can claim additional free vox gems (10-30) by watching a short video ad every hour if you complete a match during that time period (The popup can be disabled in the General Settings section)"), l.a.createElement(ba, null, "More ways to earn vox gems are coming very soon, stay tuned for giveaways on our Discord!")), l.a.createElement(fa, null, "Voxiom Studio"), l.a.createElement(ya, null, l.a.createElement(ba, null, l.a.createElement(va, {href: "https://voxiom.io/studio"}, "Voxiom Studio"), " is the official tool for quickly viewing and testing Voxiom skins"), l.a.createElement(ba, null, "Feel free to explore the possibilities. However, for a skin to be added to the game, it MUST go through the submission process and be approved by our staff and the community on Discord")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Leaderboard now shows up to 30 top players"), l.a.createElement(ba, null, "Fixed incorrect player alive count in Battle Royale")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.8.4 - Improvements (Sunday, March 28th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Removed Voxiom Studio. It's causing too much confusion."), l.a.createElement(ba, null, "Improved chunk loading time")), l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Help us test the server! Play it ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.8.3 - Improvements (Sunday, March 28th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Keybinds"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Disabled various keybinds when chat input is active"), l.a.createElement(ba, null, "You can now close inventory using the ESC key"), l.a.createElement(ba, null, "If a chest or work station is destroyed when you are in it, your inventory no longer closes and you no longer drop the item on your cursor. Instead, you are switched to the normal player inventory view")), l.a.createElement(fa, null, "[Experimental] Voxiom Studio"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Introducing Voxiom Studio, a tool to view and create skins"), l.a.createElement(ba, null, "There isn't an official guide, so feel free to explore!"), l.a.createElement(ba, null, "Unfortunately, custom texture aren't currently supported. They will be added soon"), l.a.createElement(ba, null, "You can access the tool at ", l.a.createElement(va, {href: "https://voxiom.io/studio"}, "https://voxiom.io/studio"))), l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Help us test the server! Play it ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.8.2 - Improvements (Tuesday, March 23rd, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Survival"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Removed spawn castles, you now spawn randomly on the map (away from other players)"), l.a.createElement(ba, null, "You may change your loadout in your inventory when you respawn")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Disabled gem capturing for the first 5 minutes of the game")), l.a.createElement(fa, null, "Loadout"), l.a.createElement(ya, null, l.a.createElement(ba, null, 'Added "no primary weapons" option'), l.a.createElement(ba, null, 'Added "no secondary weapons" option')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.8.1 - Optimizations and Quality of Life (Wednesday, March 17th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Help us test the server! Play it ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Removed dirt mountains"), l.a.createElement(ba, null, "Added a snowy region with a new point of interest")), l.a.createElement(fa, null, "Inventory"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added shift click to move items quickly in inventory/chests"), l.a.createElement(ba, null, "Added shift click to craft items quickly"), l.a.createElement(ba, null, "The inventory shift key is changeable in settings")), l.a.createElement(fa, null, "Optimizations"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Various chunk optimizations and FPS improvements"), l.a.createElement(ba, null, "Increased render distance by 33%!!!")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed battle royale stats not showing up in game over screen")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.8 - Survival Release! (Sunday, March 14th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Survival"), l.a.createElement(ya, null, l.a.createElement(ba, null, "The survival mode (previously sandbox) is now available in all regions for level 5 and above!"), l.a.createElement(ba, null, "Decreased map size"), l.a.createElement(ba, null, "Increased iron and emerald ore spawn rates!"), l.a.createElement(ba, null, "Added various tips in chat"), l.a.createElement(ba, null, "Thank you for testing the survival mode. There are a lot more features coming!")), l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Help us test the server! Play it ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Optimizations"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Various chunk rendering optimizations"), l.a.createElement(ba, null, "Fixed reinforced sapphire and ruby block name/description")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7.5 - Bug Fixes (Thursday, March 11th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed loadout system"), l.a.createElement(ba, null, "Prevent item drop during loadout change"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Survival (previously Sandbox) Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Renamed sandbox to survival server"), l.a.createElement(ba, null, "You can now gain XP in survival! For every 10 minutes, you will earn 250 xp if you have gained more than 100 score during this time period (The score count towards the next time period if you didn't reach 100 in this time period) "), l.a.createElement(ba, null, "/delay delays the sever reset by 20 minutes"), l.a.createElement(ba, null, "Bigger map"), l.a.createElement(ba, null, "Decreased surface boulder spawn rate"), l.a.createElement(ba, null, "Added ore and stone generation under desert and snow biomes"), l.a.createElement(ba, null, "Nearby items/players no longer prevent berries from growing into trees"), l.a.createElement(ba, null, "Made deserts generate more cactus"), l.a.createElement(ba, null, "Decreased iron and emerald spawn rate"), l.a.createElement(ba, null, "Trees can no longer be planted inside spawn"), l.a.createElement(ba, null, "Cactus/trees no longer generate inside of/too close to spawn"), l.a.createElement(ba, null, "Unbreakable blocks can no longer be placed too close to spawn"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=survival.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Cactus/trees no longer generate inside of/too close to spawn")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Items dropped from chests no longer go inside of nearby blocks"), l.a.createElement(ba, null, "Debug panel no longer triggers when typing in chat")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7.4 - Bug Fixes (Sunday, March 7th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed game loading screen"), l.a.createElement(ba, null, "Fixed an exploit in Battle Royale")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7.3 - Bug Fixes (Saturday, March 6th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made the map bigger"), l.a.createElement(ba, null, "/hurry shortens the timer by 30 minutes, and /delay extends the timer by 15 minutes"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed showing health ", ">", " 0 after you die"), l.a.createElement(ba, null, "Fixed a physics bug allowing players to go inside blocks"), l.a.createElement(ba, null, "A black overlay appears to obstruct the view if the player camera somehow gets inside a block"), l.a.createElement(ba, null, "Made debug text easier to read"), l.a.createElement(ba, null, "Disallow putting gems in chests in Capture The Gems")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7.2 - Bug Fixes (Tuesday, March 2nd, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now play sandbox as a guest"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed ghost blocks that are created when blocks are modified as a chunk loads"), l.a.createElement(ba, null, "Fixed ghost blocks caused by incorrect client prediction"), l.a.createElement(ba, null, "Fixed ghost block cracks caused by incorrect client prediction"), l.a.createElement(ba, null, "Fixed auto stepper wall clipping glitch"), l.a.createElement(ba, null, "Fixed gems disappearing when you drop them near spawns with a full inventory")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7.1 - Bug Fixes (Sunday, February 28th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed ceiling crouch noclip xray")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.7 - Chests (Saturday, February 27th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Chests!"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Chests are storage blocks where you can store your items"), l.a.createElement(ba, null, "Wooden chests have 4 slots, iron chests have 8 slots, and golden chests have 12 slots"), l.a.createElement(ba, null, "When a chest is destroyed, all of its items are dropped"), l.a.createElement(ba, null, "Wooden chests are craftable anywhere using 50 wood"), l.a.createElement(ba, null, "Iron chests are craftable in the work station using 20 iron and 5 emeralds"), l.a.createElement(ba, null, "Golden chests cannot be crafted, but they can be found underground in the sandbox mode!")), l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed game stuck at 0 seconds"), l.a.createElement(ba, null, "A timer tick sound is played near the end of a game"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added randomly generated underground dungeon rooms that contain golden chests!"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "A timer tick sound is played near the end of a game")), l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "A timer tick sound is played before game starts and before each toxic fog approaches")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed inventory input prediction in certain situations"), l.a.createElement(ba, null, "Player inventory slots are properly cleared visually on death"), l.a.createElement(ba, null, "Respawn screen are now hidden when game ends / server disconnects"), l.a.createElement(ba, null, "Added confirmation prompt to prevent players from accidentally leaving the game"), l.a.createElement(ba, null, "Leaving the game through the game menu redirects you to the home page")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.6.1 - Miscellaneous (Tuesday, February 23rd, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Optimized map to reduce lag"), l.a.createElement(ba, null, "Optimized UI to reduce lag"), l.a.createElement(ba, null, "No longer has a 300 points cap, the winner is determined when the timer runs out"), l.a.createElement(ba, null, "Improved server loading time (when the server resets, it should come back online much quicker than before)"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added tree planting!"), l.a.createElement(ba, null, "To grow a tree, drop red berries or orange berries on a grass/dirt block and wait 1-1.5 minutes (timer is random)"), l.a.createElement(ba, null, "Red berries grow red berry trees, and orange berries grow orange berry trees"), l.a.createElement(ba, null, "The more berries in the dropped item stack, the more berries the grown tree will produce"), l.a.createElement(ba, null, "There must be enough space around the dropped berries for the tree to grow"), l.a.createElement(ba, null, "Players/dropped items cannot be too close to the tree for the tree to grow"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.6 - Free For All (Saturday, February 20th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Free For All Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New game mode is available for beta testing!"), l.a.createElement(ba, null, "Everyone is your enemy! First to 300 points wins!"), l.a.createElement(ba, null, "Brand new custom built map!"), l.a.createElement(ba, null, "Match duration is 10 minutes. When timer runs out, players with the highest score win!"), l.a.createElement(ba, null, "Stats are not tracked during this beta test"), l.a.createElement(ba, null, "You can change your loadout in your inventory as long as you do not move after you spawn/respawn"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=ffa.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Sandbox Test Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added AFK kicker (kicked if you don't move for 10 minutes)"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Dead bodies should no longer prevent block placement"), l.a.createElement(ba, null, "Fixed item not being refunded if item drop is cancelled"), l.a.createElement(ba, null, "Fixed block not being refunded if block placement in water is cancelled"), l.a.createElement(ba, null, "Fixed gun icons sometimes being invisible")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.5.1 - Miscellaneous (Tuesday, February 16th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Sandbox Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added server reset voting system"), l.a.createElement(ba, null, "The server resets every 24 hours, but you can use /delay to delay the reset or /hurry to shorten the timer every hour"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"))), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Chat dialog should no longer break lines in the middle of a word"), l.a.createElement(ba, null, "Teammates should no longer be able to cancel your healing"), l.a.createElement(ba, null, "Players should no longer be able to cancel your healing in spawn")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.5 - Miscellaneous (Monday, February 8th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Sandbox Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased number of spawns to 4"), l.a.createElement(ba, null, "Added snow biome"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here")), l.a.createElement(ba, null, "You no longer need to click play to join the sandbox")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added ambient occlusion and better lighting to all gun models"), l.a.createElement(ba, null, "Added an outline to player cursors on the minimap"), l.a.createElement(ba, null, "Increased movement speed of light sniper rifle"), l.a.createElement(ba, null, "Increased movement speed of heavy sniper rifle")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.4 - Miscellaneous (Saturday, January 30th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Sandbox Server"), l.a.createElement(ya, null, l.a.createElement(ba, null, "An experimental sandbox server where stats are not tracked"), l.a.createElement(ba, null, "No time limit, but server might get restarted anytime without notice"), l.a.createElement(ba, null, "PVP is enabled"), l.a.createElement(ba, null, "You can access the server ", l.a.createElement(va, {href: "https://voxiom.io/?ip=sandbox.voxiom.io"}, "here"), " (click play)")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed ammo count and hand model not updating when you switch between items of the same type"), l.a.createElement(ba, null, "Added ambient occlusion to Surge Assault Rifle models (it should look prettier)")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.3.3 - Shovel Nerf (Monday, January 25th, 2021)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Decreased shovel damage. Low-tier shovels were too powerful")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.3.2 - Bug Fixes (Monday, January 25th, 2021)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed camera shaking rapidly when you win a match")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.3.1 - Bug Fixes (Sunday, January 24th, 2021)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed camera not panning towards death source when you get eliminated in battle royale"), l.a.createElement(ba, null, "Fixed a visual glitch that made health bar not going to 0 when you die"), l.a.createElement(ba, null, "Fixed requiring an extra xp point to level up for each level"), l.a.createElement(ba, null, "Greatly increased player damage of shovels")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.3 - Bug Fixes (Saturday, January 23rd, 2021)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed not able to chat while waiting for respawn"), l.a.createElement(ba, null, 'Fixed "Using items" dialog getting stuck on the screen when you get killed during item consumption'), l.a.createElement(ba, null, "Crosshair is now hidden as soon as you scope in"), l.a.createElement(ba, null, "Removed delay between sniper shots and non-sniper shots. However, the delay between sniper shots of different snipers remains")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.2 - Bug Fixes (Thursday, January 21st, 2021)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed a glitch causing you to play 2 matches simulatenously"), l.a.createElement(ba, null, "Fixed the delay when switching from normal sensitivity to scope/ads sensitivity"), l.a.createElement(ba, null, "Fixed a DNS issue that caused some servers to become unreachable")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4.1 - Loadout (Thursday, January 21st, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.LIGHT_SNIPER_RIFLE_COMMON)}), l.a.createElement("img", {src: N.a.getItemIcon(k.a.HEAVY_SNIPER_RIFLE_COMMON)}), l.a.createElement(ba, null, "Added light sniper rifle to loadout station"), l.a.createElement(ba, null, "Added heavy sniper rifle to loadout station"), l.a.createElement(ba, null, "Removed chests on towers")), l.a.createElement(fa, null, "Map"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.BLOCK + T.a.SULFUR_ORE)}), l.a.createElement(ba, null, "Increased sulfur ore spawn rate")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.4 - Content (Wednesday, January 20th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Weapons and Items"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.LIGHT_SNIPER_RIFLE_COMMON)}), l.a.createElement("img", {src: N.a.getItemIcon(k.a.HEAVY_SNIPER_RIFLE_COMMON)}), l.a.createElement(ba, null, "Added light sniper rifle: low recoil, decently accurate while moving, decent damage"), l.a.createElement(ba, null, "Added heavy sniper rifle: high recoil, accurate only when standing still, high damage"), l.a.createElement(ba, null, "Added sulfur ores"), l.a.createElement(ba, null, "Added sniper rifle ammo")), l.a.createElement(fa, null, "Matchmaking"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Once in a Capture The Gems match, you are able to copy and share the url to your friends, and they can join instantly"), l.a.createElement(ba, null, "If you used an invalid match invite url, you will be assigned to another match randomly")), l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Enabled chat in Battle Royale")), l.a.createElement(fa, null, "Map"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added sulfur ores in Battle Royale and Capture The Gems"), l.a.createElement(ba, null, "Added bronze chests, silver chests, and golden chests in Capture The Gems. They only drop snipers")), l.a.createElement(fa, null, "Crafting"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Ammos can now be crafted with iron, emerald, and sulfur")), l.a.createElement(fa, null, "Physics"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can no longer ADS/scope when reloading and switching items")), l.a.createElement(fa, null, "Settings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added ADS Sensitivity Multiplier: Allows you to change the sensitivity multiplier when you are aiming down sights. Defaults to a 1:1 approximated ratio between hip fire and ADS in terms of number of pixels moved"), l.a.createElement(ba, null, "Added Scoped Sensitivity Multiplier: Allows you to change the sensitivity multiplier when you are scoped in with a sniper. Defaults to a 1:1 approximated ratio between hip fire and scoped in terms of number of pixels moved"), l.a.createElement(ba, null, "Added Sniper Scope Image URL: Allows you to change the scope image"), l.a.createElement(ba, null, "Added Sniper Scope Image Opacity: Allows you to change the scope image's opacity"), l.a.createElement(ba, null, "Added Sniper Scope Image Scale X: Allows you to change the scope image's horizontal scale"), l.a.createElement(ba, null, "Added Sniper Scope Image Scale Y: Allows you to change the scope image's vertical scale"), l.a.createElement(ba, null, "Added Sniper Scope Background Color: Allows you to change the scope's background color"), l.a.createElement(ba, null, "Added Sniper Scope Background Opacity: Allows you to change the scope's background opacity")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.3.2 - Miscellaneous (Monday, January 11th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed matchmaker error message overflow"), l.a.createElement(ba, null, "Added some ad banners in various places")), l.a.createElement(fa, null, "Free For All"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Started working on Free For All game mode! Open Beta will be released soon. Keep an eye on this page 👀")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.3.2 - Miscellaneous (Sunday, January 10th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reverted UI scaling change")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.3.1 - Miscellaneous (Saturday, January 9th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added some ad banners"), l.a.createElement(ba, null, "Optimized UI scaling so that game hud elements wouldn't overlap")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.3 - Miscellaneous (Thursday, January 7th, 2021)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Stats"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added scores leaderboard!"), l.a.createElement(ba, null, "Leadeboards are now sorted by scores by default"), l.a.createElement(ba, null, "Match stats show scores"), l.a.createElement(ba, null, "Players are sorted by score in a CTG match page"), l.a.createElement(ba, null, "Ineligible CTG matches are no longer counted in match history and leaderboards (a match is considered ineligible if you have neither earned score nor died)")), l.a.createElement(fa, null, "Spray"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now spray (default key is T) on blocks")), l.a.createElement(fa, null, "Modding"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Custom textures are applied to block icons")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed stationary entities are sometimes invisible")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.2 - Miscellaneous (Wednesday, December 30th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Respawn"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Respawning is no longer automatic and must be manually triggered"), l.a.createElement(ba, null, "Bigger and animated respawn text"), l.a.createElement(ba, null, '"Pick up items" prompt no longer shows when you are dead')), l.a.createElement(fa, null, "Settings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "UI redesign"), l.a.createElement(ba, null, "Settings are now saved automatically"), l.a.createElement(ba, null, "Added a modding section that allows you to use custom block textures")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed muted players being able to talk in match chat")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.1 - Weapons (Thursday, December 22nd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Magnum Pistol"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.MAGNUM_PISTOL_COMMON)}), l.a.createElement(ba, null, "Added the Magnum Pistol, a powerful single shot pistol with high recoil")), l.a.createElement(fa, null, "Strike Pistol"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased clip size to 12")), l.a.createElement(fa, null, "Loadout Station"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now select your primary and secondary loadouts separately"), l.a.createElement(ba, null, "Loadout preferences are saved")), l.a.createElement(fa, null, "View Models"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Lightings on first person gun models are now always coming from the same direction for more consistent visuals")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.3.0 - More Stats (Monday, December 21st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Match History"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added match history in player profiles (up to 10 past matches)"), l.a.createElement(ba, null, "Added detailed match log page"), l.a.createElement(ba, null, "Example match history page: ", l.a.createElement(wa, {to: "/player/ThriveR"}, "https://voxiom.io/player/ThriveR")), l.a.createElement(ba, null, "Example BR match: ", l.a.createElement(wa, {to: "/match/br/f3df16a4-5ed5-4f6d-b266-7ed78e66b835"}, "https://voxiom.io/match/br/f3df16a4-5ed5-4f6d-b266-7ed78e66b835")), l.a.createElement(ba, null, "Example CTG match: ", l.a.createElement(wa, {to: "/match/ctg/5fc4c09c-ac73-4da7-8f15-0f78f7c6dc12"}, "https://voxiom.io/match/ctg/5fc4c09c-ac73-4da7-8f15-0f78f7c6dc12"))))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.9 - Stats (Wednesday, December 16th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Leaderboards"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added daily and weekly leaderboards"), l.a.createElement(ba, null, "Weekly leaderboards reset every Sunday at 0am PST"), l.a.createElement(ba, null, "Daily leaderboards reset every day at 0am PST"), l.a.createElement(ba, null, "Leaderboards are updated every 5 minutes"), l.a.createElement(ba, null, "Better time string conversion")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed another wall clipping xray glitch")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.8.1 - Miscellaneous (Wednesday, December 16th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Number of total games count is only increased if you have either died, killed an enemy, or captured a gem"), l.a.createElement(ba, null, "You will no longer be placed into a game that is almost finished (if either team has a score >= 50)")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed dead players blocking bullets"), l.a.createElement(ba, null, 'Fixed getting "You can\'t damage players in their spawn!" randomly')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.8 - Miscellaneous (Tuesday, December 15th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Chat"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added text shadow to chat text for better readability"), l.a.createElement(ba, null, "Increased chat text size")), l.a.createElement(fa, null, "Stats"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Battle Royale - Leaving the game early before your death counts towards your total number of games played (It's fine to leave before the game starts)"), l.a.createElement(ba, null, "Capture The Gems - Leaving the game before it finishes counts towards your total number of games played (Joining/leaving the same game multiple times only counts as 1 game played)"), l.a.createElement(ba, null, "Capture The Gems - Stats are not saved if the game has less than 6 players (always been this way)")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed an issue related to playing the correct block footstep sound")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Implemented various staff tools"), l.a.createElement(ba, null, "Capture The Gems - You won't be placed into a game where there are only less than 5 minutes left")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.7 - Content (Sunday, December 6th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Weapons"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.COMPACT_SUBMACHINE_GUN_COMMON)}), l.a.createElement(ba, null, "Added the Compact Submachine Gun"), l.a.createElement(ba, null, "Increased effective range of submachine guns"), l.a.createElement(ba, null, "Decreased minimum damage of submachine guns")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added a ceiling to the gem towers to prevent camping inside of them"), l.a.createElement(ba, null, "You are not supposed to go on the gem towers...but in case you do and get stuck there, there is a cactus that you can kill yourself with")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased cactus damage to 25 per second (used to be 15 per 2 seconds)")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed another wall clipping / x-ray exploit")), l.a.createElement(fa, null, "Engine"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Modular plugin support (took a lot of effort)")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.6.1 - Quality of Life (Tuesday, December 1st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can no longer build near the gem towers"), l.a.createElement(ba, null, "Removed the ceilings of gem towers, so people can't just camp there")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, 'Made Block editing cancellation feedback more "instant"')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.6 - Quality of Life (Friday, November 27th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Team gems are now stored in unbreakable gem towers"), l.a.createElement(ba, null, "Both teams can build around the team gems"), l.a.createElement(ba, null, "Fun trivia: The gem towers are made out of new unbreakable blocks: Bedrock Bricks, reinforced ruby, and reinforced sapphire")), l.a.createElement(fa, null, "Settings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added settings to hide chat")), l.a.createElement(fa, null, "Inventory"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Only ammos for the guns you own are picked up automatically")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can no longer join the same game multiple times using the same account")), l.a.createElement(fa, null, "Optimizations"), l.a.createElement(ya, null, l.a.createElement(ba, null, "The game should no longer lag when a huge structure is destroyed")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.5.4 - Stats (Tuesday, November 24th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Stats"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added player stats page (e.g. ", l.a.createElement(wa, {to: "/player/ThriveR"}, "https://voxiom.io/player/ThriveR"), ")")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed matchmaking server crash")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.5.3 - UI (Sunday, November 22nd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now change settings outside of the game"), l.a.createElement(ba, null, "Game pages are now linkable (e.g. ", l.a.createElement(wa, {to: "/leaderboard"}, "https://voxiom.io/leaderboard"), ")"), l.a.createElement(ba, null, "Removed news page (merged with this page)")), l.a.createElement(fa, null, "Leaderboard"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Battle royale leaderboard is now sortable by kills, games won, or survival time"), l.a.createElement(ba, null, "Capture the gems leaderboard is now sortable by kills, games won, or captures")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed ghost items")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.5.2 - Bug Fixes (Saturday, November 21th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added sound cue to indicate that toxic fog has started shrinking"), l.a.createElement(ba, null, 'Made "Run! The toxic fog is shrinking" hud text color orange')), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed bullets of Light Submachine Gun going through walls"), l.a.createElement(ba, null, "Weapons and tools dropped by other players now have the owner's player name as part of the item name")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.5.1 - Bug Fixes (Wednesday, November 18th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You no longer see your own name tag"), l.a.createElement(ba, null, "Parachute closes correctly when you land in water"), l.a.createElement(ba, null, "Added boulders")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed loadout station item duplication exploit"), l.a.createElement(ba, null, "Fixed wall clipping exploit")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.5 - Battle Royale (Tueday, November 17th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Map"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New map with 7 major point of interests and 3 minor locations to explore!"), l.a.createElement(ba, null, "The map will be continuously updated (regular content updates, events, feedback)"), l.a.createElement(ba, null, "More importantly, the foundation of custom map building allows more custom maps / map changes in the future")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased lobby time"), l.a.createElement(ba, null, "Slightly increased storm time"), l.a.createElement(ba, null, "Doubled survival exp"), l.a.createElement(ba, null, "Kill exp is now based on scores (like in CTG)"), l.a.createElement(ba, null, "Greatly increased win exp")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed surge assault rifle client prediction")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.4.1 - Quality of Life (Friday, November 13th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Servers"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed a major server performance issue")), l.a.createElement(fa, null, "Building"), l.a.createElement(ya, null, l.a.createElement(ba, null, "If a block placement is cancelled, the blocks are refunded to you")), l.a.createElement(fa, null, "Audio"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made digging sound more consistent"), l.a.createElement(ba, null, "Decreased audio debounce time, so you don't miss some audio as often")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.4 - Weapons (Wednesday, November 11th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Weapons"), l.a.createElement(ya, null, l.a.createElement("img", {src: N.a.getItemIcon(k.a.SURGE_ASSAULT_RIFLE_COMMON)}), l.a.createElement(ba, null, "Added the Surge Assault Rifle, a powerful 3-bullet burst weapon"), l.a.createElement(ba, null, "Increased the fire rate of the light submachine gun")), l.a.createElement(fa, null, "Crafting"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased the size of the crafting and loadout icons"), l.a.createElement(ba, null, "Made the crafting list scrollable")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.3 - Servers & Bug Fixes (Tuesday, November 10th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Servers"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added servers in US east coast (New York City)"), l.a.createElement(ba, null, "Fixed an issue that caused players in Asia to be put into European servers and vice-versa(lol oops)")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed a memory leak"), l.a.createElement(ba, null, "Replaced light submachine gun sound to fix audio clipping")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.2 - Bug Fixes (Sunday, November 8th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Crafting"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New crafting recipe: 1 rock -> 9 stone bricks"), l.a.createElement(ba, null, "Increased all stone bricks hardness to 4.0 units")), l.a.createElement(fa, null, "Performance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Doubled item entities' auto merge radius")), l.a.createElement(fa, null, "Models"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed tactical assault rifle's model")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.1.1 - Bug Fixes (Sunday, November 8th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Accounts"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Nickname uniqueness is now case-insensitive."), l.a.createElement(ba, null, "For the existing duplicated names, only the first account who took the nickname gets to keep it. The others are given another chance at naming themselves")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2.1 - Bug Fixes (Sunday, November 8th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Crosshair"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added new crosshair style: Dot")), l.a.createElement(fa, null, "Building"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed building mode visual glitch after respawning"), l.a.createElement(ba, null, "Fixed floating blocks chain destruction animation")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.2 - Content & Bug Fixes (Saturday, November 7th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Building"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now build stairs"), l.a.createElement(ba, null, "For places where you cannot build (either not enough materials or there are players in the way), a red highlight will always be shown"), l.a.createElement(ba, null, "Building now ignores item switch cooldown (You can swap out blocks and build instantly)")), l.a.createElement(fa, null, "Items"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Default max item stack size has been increased to 255")), l.a.createElement(fa, null, "Blocks"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased cactus collision damage to 15 per second")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now build near your team's gem temple, so you can't get stuck in holes dug by the enemies"), l.a.createElement(ba, null, "Fixed a bug where the enemy can kill a gem block permanently by shooting the blocks below it"), l.a.createElement(ba, null, "Made team spawn bigger and have two gates")), l.a.createElement(fa, null, "Performance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Optimized server chunks management")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.9 - QoL & Bug Fixes (Thursday, November 5th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Settings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Crosshair config"), l.a.createElement(ba, null, "You can now change the width, length, colors, and style of the crosshair"), l.a.createElement(ba, null, "Currently there are two styles available: Cross & Cross With Dot")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Loadout station no longer clears your entire inventory. Instead, it swaps your primary, and then gives you other items if you don't have them already.")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed ghost items bug (items that can't be picked up)"), l.a.createElement(ba, null, "Items no longer disappear when thrown on the edge of the world"), l.a.createElement(ba, null, "Fixed respawning on the edge of the world")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.8 - Content & Bug Fixes (Monday, November 2nd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Medals"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added 5 more medals"), l.a.createElement(ba, null, "Revenge: Killed someone who just killed you (+5)"), l.a.createElement(ba, null, "First blood: First kill of the match (+20)"), l.a.createElement(ba, null, "Attacker: Killed someone while having the gem (+5)"), l.a.createElement(ba, null, "Defender: Killed someone who has the gem (+10)"), l.a.createElement(ba, null, "Capture: Captured the gem! (+250)"), l.a.createElement(ba, null, 'Renamed description of assist to "Participated in killing an enemy" for consistency')), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed Twitch avatar icons' height"), l.a.createElement(ba, null, "You can no longer get assists on teammates")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.7.1 - Bug Fix (Sunday, November 1st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Bug Fix"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed an issue that causes the game to be more laggy as you play")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.7 - Bug Fixes & Miscellaneous (Sunday, November 1st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added featured streams section. Stream voxiom.io to automatically get featured on the front page!"), l.a.createElement(ba, null, "Added link to twitch in community section")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed inventory UI not updating correctly when closing it by clicking outside of it"), l.a.createElement(ba, null, 'Fixed the "DIVER" medal, the killer should be in water, not the victim'), l.a.createElement(ba, null, "Fixed block modification client prediction")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.6 - Content & Bug Fixes (Saturday, October 31st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Medals"), l.a.createElement(ya, null, l.a.createElement(ba, null, "A reward system that gives you additional points under certain conditions"), l.a.createElement(ba, null, "Currently there are 6 medals in the game: "), l.a.createElement(ba, null, "Brawler: Melee kill (+10 points)"), l.a.createElement(ba, null, "Headshot: Killed someone with a headshot (+5 points)"), l.a.createElement(ba, null, "Survivor: Killed someone while being low on health (+2 points)"), l.a.createElement(ba, null, "Juggernaut: Killed someone while being high on health and shield (+2 points)"), l.a.createElement(ba, null, "Assist: Assisted a teammate in killing an enemy (+2 points)"), l.a.createElement(ba, null, "Diver: Killed someone while in water (+2 points)"), l.a.createElement(ba, null, "More medals such as revenge, first blood, attacker, defender, and other non-kill-based medals, are coming soon!")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Raised the height of river bed. Now there's enough space to dig under water"), l.a.createElement(ba, null, "Added desert biome")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Hitbox fixed for crouching players. You can now properly headshot them"), l.a.createElement(ba, null, "You can no longer see through walls when digging"), l.a.createElement(ba, null, "Fixed player active item not updating after respawn"), l.a.createElement(ba, null, "Fixed block item usage tip not updating after respawn")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.5 - Balance, Quality of Life & Bug Fixes (Saturday, October 31st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Nametags are shown for your teammates")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Melee attack now uses raycast. You can no longer melee enemy through walls"), l.a.createElement(ba, null, "Leaves with berries and loadout station are now breakable by fists"), l.a.createElement(ba, null, "Better text shadow for notifications text")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Shovel efficiency has been buffed significantly"), l.a.createElement(ba, null, "Block break sound has a shorter falloff range"), l.a.createElement(ba, null, "You can now place blocks / switch block placement modes while sprinting")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.4 - Performance & Bug Fixes (Friday, October 30th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed server shutting down randomly"), l.a.createElement(ba, null, "Fixed sometimes not able to find servers")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.3 - Performance & Balance (Thursday, October 29th, 2020)"), l.a.createElement(_a, null, "Tactical assault rifle had more damage per second as well as less recoil compared to the combat assault rifle. The burst shotgun became too powerful since the previous update. The light submachine gun was rarely used due to its low damage. This update aims to make each weapon shine in their own way."), l.a.createElement(ha, null, l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Slightly increased the damage of light submachine gun"), l.a.createElement(ba, null, "Slightly decreased the damage of tactical assault rifle"), l.a.createElement(ba, null, "Decreased bullets per shot of burst shotgun to 9"), l.a.createElement(ba, null, "Slightly decreased the damage of burst shotgun"), l.a.createElement(ba, null, "Items on ground now despawn after 1 minute instead of 30 seconds")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made spawn gate bigger in Capture The Gems"), l.a.createElement(ba, null, "Players in spawn can no longer take damage"), l.a.createElement(ba, null, "Removed the chests on the spawn towers")), l.a.createElement(fa, null, "Performance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed 2 texture memory leaks")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.2 - Performance, Balance & Bug Fixes (Wednesday, October 28th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Performance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Optimized all models in game")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Extended match time of capture the gems to 20 minutes"), l.a.createElement(ba, null, "Decreased team score reward of gem capture to 30 points"), l.a.createElement(ba, null, "Increased clip size of burst shotgun to 6"), l.a.createElement(ba, null, "Increased bullets per shot of burst shotgun to 10"), l.a.createElement(ba, null, "Increased damage of light submachine gun by 1 (per shot)")), l.a.createElement(fa, null, "Bug Fix"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed an issue where Google Translate breaks the game hud UI")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9.1 - Content (Tuesday, October 27th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added XP bar at the game end screen"), l.a.createElement(ba, null, "Made berries a bit more common")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.9 - Content (Tuesday, October 27th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New game mode released!"), l.a.createElement(ba, null, "Added stats tracking"), l.a.createElement(ba, null, "You can no longer spam gem pickup alerts"), l.a.createElement(ba, null, "Added chat type in front of player names in chat"), l.a.createElement(ba, null, "You can send a match-wide chat by using the /all command"), l.a.createElement(ba, null, "Fixed ghost player models showing up for dead players in some cases")), l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased the length of the grace periods of the first 4 toxic fog times")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Maximum stack size of red berries and oranges berries are increased to 12")), l.a.createElement(fa, null, "Leaderboard"), l.a.createElement(ya, null, l.a.createElement(ba, null, "We now have 3 different types of leaderboard: level, battle royale, and capture the gems")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.8 - Content (Friday, October 23rd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Test the game mode Capture The Ores ", l.a.createElement(va, {href: "https://voxiom.io?ip=ctg.voxiom.io"}, "here"), "!"), l.a.createElement(fa, null, "New Items and Blocks"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New block: Leaves with red berries"), l.a.createElement(ba, null, "New block: Leaves with orange berries"), l.a.createElement(ba, null, "New item: red berries, restores 25 (up to 50) health points"), l.a.createElement(ba, null, "New item: orange berries, restores 25 (up to 25) shield points"), l.a.createElement(ba, null, "New recipe: 3 red berries + 1 emerald gem = 2 medicine pills"), l.a.createElement(ba, null, "New recipe: 6 red berries + 2 emerald gem = 1 first aid kit"), l.a.createElement(ba, null, "New recipe: 3 orange berries + 1 emerald gem = 2 mini shield potion"), l.a.createElement(ba, null, "New recipe: 4 orange berries + 1 emerald gem = 1 advanced shield potion"), l.a.createElement(ba, null, "New recipe: 6 orange berries + 2 emerald gem = 1 ultimate shield potion")), l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Shovels no longer have a durability limit"), l.a.createElement(ba, null, "Increased the melee damage of upgraded shovels"), l.a.createElement(ba, null, "Greatly increased the efficiency of upgraded shovels"), l.a.createElement(ba, null, "Increased the hardness of einforced iron blocks"), l.a.createElement(ba, null, "Reduced drop rate of health/shield regen items in chests"), l.a.createElement(ba, null, "Reduced consumption time of advanced shield potion to 3 seconds"), l.a.createElement(ba, null, "Reduced consumption time of ultimate shield potion to 5 seconds"), l.a.createElement(ba, null, "Reduced consumption time of first aid kit to 5 seconds")), l.a.createElement(fa, null, "Buildings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added stairs to third floor of castle towers")), l.a.createElement(fa, null, "Capture The Gems"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added 4 more towers on each side of the river"), l.a.createElement(ba, null, "Increased game time to 15 minutes"), l.a.createElement(ba, null, "Make chat team only"), l.a.createElement(ba, null, "Spawn Protection: Your own team's spawn heals you 20 health points every second"), l.a.createElement(ba, null, "Spawn Protection: The enemy team's spawn damages you for 20 health points every second"), l.a.createElement(ba, null, "Test the game mode ", l.a.createElement(va, {href: "https://voxiom.io?ip=ctg.voxiom.io"}, "here"), "!")), l.a.createElement(fa, null, "Battle Royale"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Disabled chat")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced chat spam timeout to 30 seconds"), l.a.createElement(ba, null, "Chat UI no longer shows when chat is disabled"), l.a.createElement(ba, null, "Fixed UI flashing randomly when consuming items")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.7 - Quality of Life (Thursday, October 22nd, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Added Facebook login method"), l.a.createElement(ba, null, "Fixed screen shaking at game disconnection screen"), l.a.createElement(ba, null, "Reduced item floating amplitude, so the bottom highlight doesn't go underground"), l.a.createElement(ba, null, "New Capture the Gems game mode can be tested at ", l.a.createElement(va, {href: "https://voxiom.io?ip=ctg.voxiom.io"}, "here"))))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.6 - Quality of Life (Monday, October 19th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Slightly increased render distance (by 1 chunk)"), l.a.createElement(ba, null, "Added icons for health and shield bars"), l.a.createElement(ba, null, "Shortened game start time"), l.a.createElement(ba, null, "Shortened and tweaked toxic fog time"), l.a.createElement(ba, null, "Toxic fog now damages players every 2 seconds instead of 1 "), l.a.createElement(ba, null, "New and cleaner style for hud alert text"), l.a.createElement(ba, null, "Added color support for hud alert text"), l.a.createElement(ba, null, "Re-enabled chat for level 5 and above")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.5 - Performance (Saturday, October 17th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "New initial chunk loading screen"), l.a.createElement(ba, null, "Much faster chunk loading performance in game"), l.a.createElement(ba, null, "Added stairs, additional doors, and second floor access to stone castles"), l.a.createElement(ba, null, "Slightly decreased movement modifier for combat assault rifle and tactical assault rifle"), l.a.createElement(ba, null, "Slightly increased auto climbing speed"), l.a.createElement(ba, null, "Re-textured wood blocks")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.4 - Movement (Thursday, October 15th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Sprinting allows you to step up one block automatically"), l.a.createElement(ba, null, "Crouching prevents you from falling off edges"), l.a.createElement(ba, null, "Disabled chat to prevent abuse :(")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.3 - Quality of Life (Wednesday, October 14th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made cactus damage you on collision"), l.a.createElement(ba, null, "Improved lag compensation"), l.a.createElement(ba, null, "Made swimming movement smoother in water"), l.a.createElement(ba, null, "Made Water flow faster"), l.a.createElement(ba, null, "Fixed item pick up animation visual bug")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.2 - Quality of Life (Friday, October 9th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Balance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced medicine pill usage time from 3 seconds to 2 seconds"), l.a.createElement(ba, null, "Reduced first aid kit usage time from 10 seconds to 6 seconds"), l.a.createElement(ba, null, "Reduced mini shield potion usage time from 3 seconds to 2 seconds"), l.a.createElement(ba, null, "Reduced advanced shield potion usage time from 6 seconds to 4 seconds"), l.a.createElement(ba, null, "Reduced ultimate shield potion usage time from 10 seconds to 6 seconds"), l.a.createElement(ba, null, "Added one more final circle that shrinks the battle field to 2 blocks radius"), l.a.createElement(ba, null, "Max toxic fog damage reduced to 5")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Initial terrain loading is now synchronous and therefore faster"), l.a.createElement(ba, null, "You can no longer use regen items while sprinting"), l.a.createElement(ba, null, "The full inventory view now shows your active slot and hides the quick inventory view to avoid confusion"), l.a.createElement(ba, null, "Added a background color to health bar and shield bar for clarity"), l.a.createElement(ba, null, "Made chat filter more advanced")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7.1 - Quality of Life (Thursday, October 8th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Terrains are flatter"), l.a.createElement(ba, null, "Crouching no longer triggers movement sound"), l.a.createElement(ba, null, "Fixed entity teleportation visual bug")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.7 - Quality of Life (Wednesday, October 7th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added 2 more toxic fog which reduce the playing area to 5 units to prevent camping"), l.a.createElement(ba, null, "Improved game over screen"), l.a.createElement(ba, null, "Reduced fall damage by 20%"), l.a.createElement(ba, null, "Chunk loading improvements"), l.a.createElement(ba, null, "Netcode: entity interpolation improvements"), l.a.createElement(ba, null, "Fix ammo pickup logic"), l.a.createElement(ba, null, "Better matchmaking algorithm"), l.a.createElement(ba, null, "Various backend server improvements")), l.a.createElement(fa, null, "Movement"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made player collider thinner so it's easier to get in 1-block holes"), l.a.createElement(ba, null, "Slightly increased jump height"), l.a.createElement(ba, null, "Increased ground friction to make movement less slippery"), l.a.createElement(ba, null, "Increased air control")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.6 - Performance (Monday, October 5th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Matchmaking"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Backend infrastructure has been improved to allow multi-gamemodes in the future")), l.a.createElement(fa, null, "Social"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added various roles to discord server"), l.a.createElement(ba, null, "Added a subreddit /r/Voxiom")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.5 - Performance (Thursday, October 1st, 2020)"), l.a.createElement(_a, null, "Major performance optimizations have been implemented")), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.4 - Gameplay (Thursday, October 1st, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Gameplay"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now hold space to jump continuously"), l.a.createElement(ba, null, "Castles always generate at the 3 locations"), l.a.createElement(ba, null, "Added 4 gates to castles so you don't get trapped easily"), l.a.createElement(ba, null, "If a castle spawns on the desert, it becomes a sandstone castle")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.3 - Performance (Wednesday, September 30th, 2020)"), l.a.createElement(_a, null, "Various performance optimizations have been implemented")), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.2 - Quality of Life (Tuesday, September 29th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Inventory Management"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now use the interact key to open the work station for crafting"), l.a.createElement(ba, null, "Removed the original crafting mechanic where you need to stand close to a work station to craft")), l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made first person damage indicator bigger")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9.1 - Quality of Life (Tuesday, September 29th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Inventory Management"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Ammos are automatically picked up"), l.a.createElement(ba, null, "Items are automatically picked up if you already have an item stack with the same items that's not full"), l.a.createElement(ba, null, "If you try to pick up an item with empty hands, it goes straight to your active slot")), l.a.createElement(fa, null, "Chat"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Chat has been turned on with filters")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.9 - Quality of Life (Tuesday, September 29th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Inventory Management"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Removed keys for selecting next/prev slot"), l.a.createElement(ba, null, "Added interact key to pick up / swap items"), l.a.createElement(ba, null, "Items must be manually picked up by looking at them and press the interact key (defaults to E)"), l.a.createElement(ba, null, "You can now exit the inventory by clicking outside of the view when you don't have any items on the cursor")), l.a.createElement(fa, null, "Gameplay"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You are given 45 blocks of dirt on dropoff"), l.a.createElement(ba, null, "Item drops bounce more, so they don't clutter when you try to pick them up")), l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Temporarily disabled chat due to toxicity"), l.a.createElement(ba, null, "All key hints now show the actual one saved in settings"), l.a.createElement(ba, null, "Typing in chat no longer triggers key binds")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.8.1 - Balance (Monday, September 28th, 2020)"), l.a.createElement(_a, null, "The last update probably made the gas a little too fast, so we are reverting the changes a bit"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Toxic Gas"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Increased match time to 6.5 minutes"), l.a.createElement(ba, null, "Increased number of toxic gas from 4 to 5")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.8 - Balance and Performance (Monday, September 28th, 2020)"), l.a.createElement(_a, null, "The goal of this update is to make the game more fast paced and more fun to play. Some performance optimizations should also help the game to run on low end laptops."), l.a.createElement(ha, null, l.a.createElement(fa, null, "Toxic Gas"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced match time from 7 minutes to 4.5 minutes"), l.a.createElement(ba, null, "Reduced number of toxic gas from 6 to 4"), l.a.createElement(ba, null, "Toxic gas now shrink a bit faster, but you should still be able to outrun the first 2")), l.a.createElement(fa, null, "Crafting"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Drastically reduced crafting cost of all gun upgrades"), l.a.createElement(ba, null, "Increased crafting yield of reinforced iron and wood (1:9)"), l.a.createElement(ba, null, "Increased crafting cost of work station to 30 wood, but it's actually easier to craft because you can craft 9 wood from 1 log now")), l.a.createElement(fa, null, "Regen"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Made medicine pills only be able to heal up to 75 health points"), l.a.createElement(ba, null, "Made mini shield potion only be able to heal up to 75 shield points"), l.a.createElement(ba, null, "Made all health regen items more common in crates and chests")), l.a.createElement(fa, null, "Movement"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You jump a little lower, so you are no longer able to make a 2-block tall jump"), l.a.createElement(ba, null, "Made gliding and freefalling faster")), l.a.createElement(fa, null, "Weapons"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Slightly increased damage of light submachine gun"), l.a.createElement(ba, null, "Slightly increased the range of the burst shotgun"), l.a.createElement(ba, null, "Increased the magazine size of the burst shotgun to 5")), l.a.createElement(fa, null, "Performance"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced client and server update rate for better performance. The game should still feel the same"), l.a.createElement(ba, null, "Fixed random jitter movement especially during gliding/freefalling due to client misprediction")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.7.2 - Leaderboard (Saturday, September 26th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI"), l.a.createElement(ya, null, l.a.createElement(ba, null, "New game menu UI"), l.a.createElement(ba, null, "Added a leaderboard based on levels")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.7.1 - Google Authentication (Tuesday, September 23rd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Accounts"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now login with your Google accounts")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.7 - Accounts Update (Tuesday, September 22nd, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Accounts"), l.a.createElement(ya, null, l.a.createElement(ba, null, "The account system is now live! Currently you can login with Discord. We will be adding more social login methods very soon!"), l.a.createElement(ba, null, "Once you are logged in, your stats such as kills, deaths, games won, levels, and xp will be saved"), l.a.createElement(ba, null, "Chat has been re-enabled for players with level 5 and above"), l.a.createElement(ba, null, "Your level is shown together with your username in chat"), l.a.createElement(ba, null, "On completion of each match, your stats will be updated"), l.a.createElement(ba, null, "Experience points are awarded per match based on your kills (x10 multiplier), time survived (in seconds, x0.1 multiplier), and rank (up to 500 points per win based on the number of players in the match)")), l.a.createElement(fa, null, "Balance Update"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Doubled shovel durability"), l.a.createElement(ba, null, "Increased last circle's preparation time by 10 seconds"), l.a.createElement(ba, null, "Nerfed combat assault rifle's damage by 4"), l.a.createElement(ba, null, "Slightly increased tactical assault rifle's recoil")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed a server crashing bug")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.6 - Balance Update (Thursday, September 17th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Toxic Fog"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Now has up to 6 circles in total per match"), l.a.createElement(ba, null, "Made the first few toxic fog circles much slower. You can actually outrun them now"), l.a.createElement(ba, null, "Due to the above 2 changes, each match is 90 seconds longer"), l.a.createElement(ba, null, "Now skips over shield and damages health directly")), l.a.createElement(fa, null, "Map"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Removed golden chests"), l.a.createElement(ba, null, "Reduced spawn rate of silver chests"), l.a.createElement(ba, null, "Boulders and ores spawn much more frequent"), l.a.createElement(ba, null, "Ores drop more gems")), l.a.createElement(fa, null, "Crafting"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Reduced crafting cost of all guns"), l.a.createElement(ba, null, "Made epic and legendary tier guns craftable (You can only get them this way now)"), l.a.createElement(ba, null, "Common shovel no longer needs workbench"), l.a.createElement(ba, null, "Changed reinforced iron recipe to 1 iron ingot -> 3 reinforced iron blocks"), l.a.createElement(ba, null, "You can now craft the same item continuously by continuously clicking the same recipe (before you had to move the crafted item to an inventory slot)")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, 'Removed "You are lagging too hard" kick. A better alternative has been implemented')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.5.1 (Thursday, September 17th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Settings"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now adjust sound volume")), l.a.createElement(fa, null, "Matchmaking"), l.a.createElement(ya, null, l.a.createElement(ba, null, 'Reduced the likelihood of getting "This game has already started" when joining a game')), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added this page")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.5 (Thursday, September 17th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Map"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Forests are bigger and less dense"), l.a.createElement(ba, null, "Plains are bigger"), l.a.createElement(ba, null, "New location: Stone castle village. One on the training island for fun, one on the battle island")), l.a.createElement(fa, null, "Miscellaneous"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You get 99 dirt on training island for fun"), l.a.createElement(ba, null, "Made final circle bigger")), l.a.createElement(fa, null, "Bug Fixes"), l.a.createElement(ya, null, l.a.createElement(ba, null, "You can now use healing items while in toxic fog"), l.a.createElement(ba, null, "Fixed crosshair not showing up for some people (many thanks to @Catwhiskers 144 for testing!)")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.4 (Wednesday, September 16th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "Performance Optimizations"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Fixed an issue burning unnecessary CPU cycles"), l.a.createElement(ba, null, 'Added a "Render Scale" option in settings. Try decreasing it to increase your FPS!')))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.3 (Tuesday, September 15th, 2020)"), l.a.createElement(ha, null, l.a.createElement(fa, null, "UI & Controls"), l.a.createElement(ya, null, l.a.createElement(ba, null, "Added map toggle key (defaults to M)"), l.a.createElement(ba, null, "You can now change all keybinds (pause menu -> settings -> change controls)"), l.a.createElement(ba, null, 'Added "Invert mouse wheel" option in settings. This reverts the mouse wheel for item slots selection'), l.a.createElement(ba, null, "Fixed the conflict between pause menu and inventory. You can no longer open the map/inventory while in pause menu")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.2 (Monday, September 14th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, 'Fixed getting stuck in "Finding a Match..."'), l.a.createElement(ba, null, 'Added "Invert Y Axis" option in settings'), l.a.createElement(ba, null, "You can now resume the game by clicking anywhere on the screen"), l.a.createElement(ba, null, "Changed default sensitivity to 5"), l.a.createElement(ba, null, "Decreased toxic fog damage")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Update v0.1.1 (Sunday, September 13th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "The server now broadcasts tips in chat every 2 minutes"), l.a.createElement(ba, null, "Added controls info and news panel on welcome screen"), l.a.createElement(ba, null, "Buffed every weapon's block damage"), l.a.createElement(ba, null, "Weapon block damage now scales with its tier"), l.a.createElement(ba, null, "You are now given a legendary shovel instead of a normal one in lobby for extra fun!"), l.a.createElement(ba, null, "Fixed various server stability issues and netcode")))), l.a.createElement(Ea, null, l.a.createElement(ga, null, "Release v0.1.0 (Thursday, September 10th, 2020)"), l.a.createElement(ha, null, l.a.createElement(ya, null, l.a.createElement(ba, null, "Initial release")))))
            }, Sa = E.a.div.withConfig({
                displayName: "ErrorScreen__ErrorPanel",
                componentId: "sc-1usy2qr-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            Ca = E.a.div.withConfig({
                displayName: "ErrorScreen__Title",
                componentId: "sc-1usy2qr-1"
            })(["font-size:25px;margin-bottom:20px;"]), Ia = function (e) {
                return l.a.createElement(Sa, null, l.a.createElement(Ca, null, "Sorry, this page doesn't exist :("))
            }, Oa = a(118), Na = E.a.div.withConfig({
                displayName: "Button",
                componentId: "sc-1mfgh28-0"
            })(["padding:5px;background-color:rgba(0,0,0,0.7);border:1px solid white;text-align:center;color:white;:hover{background-color:rgba(150,150,150,0.7);cursor:pointer;}"]),
            ka = a(47), Ta = a(7), Ra = E.a.div.withConfig({
                displayName: "GeneralMenu__WrapperContent",
                componentId: "sc-15lk414-0"
            })(["background-color:rgba(70,70,70,0.6);padding:20px;color:black;pointer-events:auto;display:flex;flex-direction:column;justify-content:space-between;min-width:400px;min-height:415px;"]),
            Aa = E.a.div.withConfig({displayName: "GeneralMenu__Settings", componentId: "sc-15lk414-1"})([""]),
            ja = E.a.div.withConfig({displayName: "GeneralMenu__Buttons", componentId: "sc-15lk414-2"})([""]),
            Ma = E.a.div.withConfig({
                displayName: "GeneralMenu__ContentRow",
                componentId: "sc-15lk414-3"
            })(["margin-bottom:20px;display:flex;justify-content:space-between;width:100%;align-items:center;color:white;"]),
            Pa = E.a.div.withConfig({displayName: "GeneralMenu__SettingsName", componentId: "sc-15lk414-4"})([""]),
            La = E.a.div.withConfig({
                displayName: "GeneralMenu__SettingsSlider",
                componentId: "sc-15lk414-5"
            })(["margin:0 5px;"]), Fa = E.a.div.withConfig({
                displayName: "GeneralMenu__SettingsValue",
                componentId: "sc-15lk414-6"
            })(["margin:0 5px;"]), Da = E.a.input.withConfig({
                displayName: "GeneralMenu__SettingsInput",
                componentId: "sc-15lk414-7"
            })(["background-color:rgba(0,0,0,0.8);border:1px solid white;padding:5px;color:white;"]),
            Ga = (E.a.div.withConfig({
                displayName: "GeneralMenu__Space",
                componentId: "sc-15lk414-8"
            })(["width:20px;"]), function (e) {
                var t = Object(p.c)((function (e) {
                    return e.settings.sensitivity
                })), a = Object(p.c)((function (e) {
                    return e.settings.adsSensitivityMultiplier
                })), n = Object(p.c)((function (e) {
                    return e.settings.scopedSensitivityMultiplier
                })), r = Object(p.c)((function (e) {
                    return e.settings.renderScale
                })), i = Object(p.c)((function (e) {
                    return e.settings.soundVolume
                })), s = Object(p.c)((function (e) {
                    return e.settings.invertYAxis
                })), u = Object(p.c)((function (e) {
                    return e.settings.invertMouseWheel
                })), m = Object(p.c)((function (e) {
                    return e.settings.chatVisible
                })), d = Object(p.c)((function (e) {
                    return e.settings.disableRewardedAdsPopup
                })), E = Object(p.b)();
                return l.a.createElement(Ra, null, l.a.createElement(Aa, null, l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Sensitivity"), l.a.createElement(La, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.001",
                    max: "40",
                    value: t,
                    step: "0.001",
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        a = parseFloat(t.target.value), Object(ka.c)((function () {
                                            return E(Object(Oa.q)(a))
                                        }));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                })), l.a.createElement(Fa, null, l.a.createElement(Da, {
                    type: "number",
                    min: "0.001",
                    max: "40",
                    value: t,
                    step: "0.001",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return E(Object(Oa.q)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "ADS Sensitivity Multiplier"), l.a.createElement(La, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.001",
                    max: "1",
                    value: a,
                    step: "0.001",
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        a = parseFloat(t.target.value), Object(ka.c)((function () {
                                            return E(Object(Oa.c)(a))
                                        }));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                })), l.a.createElement(Fa, null, l.a.createElement(Da, {
                    type: "number",
                    min: "0.001",
                    max: "1",
                    value: a,
                    step: "0.001",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return E(Object(Oa.c)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Scoped Sensitivity Multiplier"), l.a.createElement(La, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.001",
                    max: "1",
                    value: n,
                    step: "0.001",
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        a = parseFloat(t.target.value), Object(ka.c)((function () {
                                            return E(Object(Oa.p)(a))
                                        }));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                })), l.a.createElement(Fa, null, l.a.createElement(Da, {
                    type: "number",
                    min: "0.001",
                    max: "1",
                    value: n,
                    step: "0.001",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return E(Object(Oa.p)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Render Scale"), l.a.createElement(La, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.1",
                    max: "1",
                    value: r,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return E(Object(Oa.o)(t))
                        }))
                    }
                })), l.a.createElement(Fa, null, l.a.createElement(Da, {
                    type: "number",
                    min: "0.1",
                    max: "1",
                    value: r,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return E(Object(Oa.o)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Sound Volume"), l.a.createElement(La, null, l.a.createElement("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    value: i,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return E(Object(Oa.x)(t))
                        }))
                    }
                })), l.a.createElement(Fa, null, l.a.createElement(Da, {
                    type: "number",
                    min: "0",
                    max: "1",
                    value: i,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return E(Object(Oa.x)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Invert Y Axis"), l.a.createElement(Fa, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: s,
                    onChange: function (e) {
                        var t = e.target.checked;
                        Object(ka.c)((function () {
                            return E(Object(Oa.m)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Invert Mouse Wheel"), l.a.createElement(Fa, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: u,
                    onChange: function (e) {
                        var t = e.target.checked;
                        Object(ka.c)((function () {
                            return E(Object(Oa.l)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Hide Chat"), l.a.createElement(Fa, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: !m,
                    onChange: function (e) {
                        var t = !e.target.checked;
                        Object(ka.c)((function () {
                            return E(Object(Oa.d)(t))
                        }))
                    }
                }))), l.a.createElement(Ma, null, l.a.createElement(Pa, null, "Disable Rewarded Ads Popup"), l.a.createElement(Fa, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: d,
                    onChange: function (e) {
                        var t = e.target.checked;
                        Object(ka.c)((function () {
                            return E(Object(Oa.j)(t))
                        }))
                    }
                })))), l.a.createElement(ja, null, l.a.createElement(Na, {
                    onClick: function (e) {
                        Object(ka.c)((function () {
                            E(Object(Oa.q)(Ta.c.sensitivity)), E(Object(Oa.c)(Ta.c.adsSensitivityMultiplier)), E(Object(Oa.p)(Ta.c.scopedSensitivityMultiplier)), E(Object(Oa.o)(Ta.c.renderScale)), E(Object(Oa.x)(Ta.c.soundVolume)), E(Object(Oa.m)(Ta.c.invertYAxis)), E(Object(Oa.l)(Ta.c.invertMouseWheel)), E(Object(Oa.d)(Ta.c.chatVisible))
                        }))
                    }
                }, "Restore Defaults")))
            }), Ba = a(123), Ua = a(2), za = E.a.div.withConfig({
                displayName: "KeybindsMenu__WrapperContent",
                componentId: "sc-147mhax-0"
            })(["background-color:rgba(70,70,70,0.6);padding:20px;color:black;pointer-events:auto;display:flex;flex-direction:column;justify-content:space-between;min-width:400px;min-height:415px;"]),
            Ya = E.a.div.withConfig({displayName: "KeybindsMenu__Settings", componentId: "sc-147mhax-1"})([""]),
            qa = E.a.div.withConfig({displayName: "KeybindsMenu__Buttons", componentId: "sc-147mhax-2"})([""]),
            Wa = E.a.div.withConfig({
                displayName: "KeybindsMenu__ContentRow",
                componentId: "sc-147mhax-3"
            })(["margin-bottom:10px;display:flex;justify-content:space-between;width:100%;align-items:center;color:white;"]),
            Ha = E.a.div.withConfig({displayName: "KeybindsMenu__SettingsName", componentId: "sc-147mhax-4"})([""]),
            Va = E.a.div.withConfig({
                displayName: "KeybindsMenu__SettingsKeyValue",
                componentId: "sc-147mhax-5"
            })(["border:1px solid white;padding:4px;font-size:12px;:hover{background-color:rgba(150,150,150,0.7);cursor:pointer;}"]),
            Ka = E.a.div.withConfig({
                displayName: "KeybindsMenu__PressAnyKeyIndicator",
                componentId: "sc-147mhax-6"
            })(["border:1px solid white;padding:4px;font-size:12px;background-color:rgba(255,0,0,0.7);"]),
            Xa = E.a.div.withConfig({
                displayName: "KeybindsMenu__ButtonGroup",
                componentId: "sc-147mhax-7"
            })(["display:flex;"]),
            Ja = E.a.div.withConfig({displayName: "KeybindsMenu__Space", componentId: "sc-147mhax-8"})(["width:20px;"]),
            Za = E.a.div.withConfig({
                displayName: "KeybindsMenu__ContentWrapper",
                componentId: "sc-147mhax-9"
            })(["margin-right:15px;"]), Qa = function (e, t, a, n) {
                return a === n ? l.a.createElement(Ka, null, "Press Any Key") : l.a.createElement(Va, {
                    onClick: function (t) {
                        e(Object(S.p)(n));
                        var a = function () {
                            var t = c()(o.a.mark((function t(r) {
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, ka.b.persist();
                                        case 2:
                                            return e(Object(Oa.k)(n, r.keyCode, r.code)), e(Object(S.p)(void 0)), t.next = 6, ka.b.flush();
                                        case 6:
                                            return t.next = 8, ka.b.pause();
                                        case 8:
                                            document.removeEventListener("keydown", a), document.removeEventListener("mousedown", l);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), l = function () {
                            var t = c()(o.a.mark((function t(r) {
                                var i;
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = "MB" + r.button, 0 === r.button ? i = "LMB" : 2 === r.button && (i = "RMB"), t.next = 4, ka.b.persist();
                                        case 4:
                                            return e(Object(Oa.k)(n, -r.button, i)), e(Object(S.p)(void 0)), t.next = 8, ka.b.flush();
                                        case 8:
                                            return t.next = 10, ka.b.pause();
                                        case 10:
                                            document.removeEventListener("keydown", a), document.removeEventListener("mousedown", l);
                                        case 12:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }();
                        document.addEventListener("keydown", a), document.addEventListener("mousedown", l)
                    }
                }, t[n].keyName)
            }, $a = function (e) {
                var t = Object(p.b)(), a = Object(p.c)((function (e) {
                    return e.settings.keys
                })), n = Object(p.c)((function (e) {
                    return e.ui.currentlyChangingKeybind
                })), r = L();
                return l.a.createElement(za, null, l.a.createElement(Ya, null, l.a.createElement(Ba.Scrollbars, {
                    style: {
                        height: 351,
                        marginBottom: 20
                    }
                }, l.a.createElement(Za, null, l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Move Left"), Qa(t, a, n, Ua.b.MOVE_LEFT)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Move Right"), Qa(t, a, n, Ua.b.MOVE_RIGHT)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Move Forward"), Qa(t, a, n, Ua.b.MOVE_FORWARD)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Move Backward"), Qa(t, a, n, Ua.b.MOVE_BACKWARD)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Jump"), Qa(t, a, n, Ua.b.JUMP)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Sprint"), Qa(t, a, n, Ua.b.SPRINT)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Crouch"), Qa(t, a, n, Ua.b.CROUCH)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Drop Current Item"), Qa(t, a, n, Ua.b.DROP_CURRENT_ITEM)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Reload"), Qa(t, a, n, Ua.b.RELOAD)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Toggle Inventory"), Qa(t, a, n, Ua.b.TOGGLE_INVENTORY)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Inventory Helper Key"), Qa(t, a, n, Ua.b.INVENTORY_HELPER_KEY)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Game Overview"), Qa(t, a, n, Ua.b.MAP)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Toggle Map"), Qa(t, a, n, Ua.b.TOGGLE_MAP)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Select Slot 1"), Qa(t, a, n, Ua.b.SELECT_SLOT_1)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Select Slot 2"), Qa(t, a, n, Ua.b.SELECT_SLOT_2)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Select Slot 3"), Qa(t, a, n, Ua.b.SELECT_SLOT_3)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Select Slot 4"), Qa(t, a, n, Ua.b.SELECT_SLOT_4)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Select Slot 5"), Qa(t, a, n, Ua.b.SELECT_SLOT_5)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Interact / Pick up"), Qa(t, a, n, Ua.b.INTERACT)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Spray"), Qa(t, a, n, Ua.b.SPRAY)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Primary Action"), Qa(t, a, n, Ua.b.PRIMARY_ACTION)), l.a.createElement(Wa, null, l.a.createElement(Ha, null, "Secondary Action"), l.a.createElement(Xa, null, Qa(t, a, n, Ua.b.SECONDARY_ACTION), l.a.createElement(Ja, null), Qa(t, a, n, Ua.b.SECONDARY_ACTION_2)))))), l.a.createElement(qa, null, l.a.createElement(Na, {
                    onClick: function () {
                        var e = c()(o.a.mark((function e(a) {
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ka.b.persist();
                                    case 2:
                                        return t(Object(Oa.b)()), r(), e.next = 6, ka.b.flush();
                                    case 6:
                                        return e.next = 8, ka.b.pause();
                                    case 8:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, "Restore Defaults")))
            }, en = E.a.div.withConfig({
                displayName: "CrosshairMenu__WrapperContent",
                componentId: "sc-1sw6ieb-0"
            })(["background-color:rgba(70,70,70,0.6);padding:20px;color:black;pointer-events:auto;display:flex;flex-direction:column;justify-content:space-between;min-width:400px;min-height:415px;"]),
            tn = E.a.div.withConfig({displayName: "CrosshairMenu__Settings", componentId: "sc-1sw6ieb-1"})([""]),
            an = E.a.div.withConfig({displayName: "CrosshairMenu__Buttons", componentId: "sc-1sw6ieb-2"})([""]),
            nn = E.a.div.withConfig({
                displayName: "CrosshairMenu__ContentRow",
                componentId: "sc-1sw6ieb-3"
            })(["margin-bottom:20px;display:flex;justify-content:space-between;width:100%;align-items:center;color:white;"]),
            ln = E.a.div.withConfig({displayName: "CrosshairMenu__SettingsName", componentId: "sc-1sw6ieb-4"})([""]),
            rn = E.a.div.withConfig({
                displayName: "CrosshairMenu__SettingsSlider",
                componentId: "sc-1sw6ieb-5"
            })(["margin:0 5px;"]), on = E.a.div.withConfig({
                displayName: "CrosshairMenu__SettingsValue",
                componentId: "sc-1sw6ieb-6"
            })(["margin:0 5px;"]), cn = E.a.input.withConfig({
                displayName: "CrosshairMenu__SettingsInput",
                componentId: "sc-1sw6ieb-7"
            })(["background-color:rgba(0,0,0,0.8);border:1px solid white;padding:5px;color:white;"]),
            sn = (E.a.div.withConfig({
                displayName: "CrosshairMenu__Space",
                componentId: "sc-1sw6ieb-8"
            })(["width:20px;"]), function (e) {
                var t = Object(p.b)(), a = Object(p.c)((function (e) {
                    return e.settings.crosshairWidth
                })), n = Object(p.c)((function (e) {
                    return e.settings.crosshairLength
                })), r = Object(p.c)((function (e) {
                    return e.settings.crosshairColor
                })), o = Object(p.c)((function (e) {
                    return e.settings.crosshairHitColor
                })), i = Object(p.c)((function (e) {
                    return e.settings.crosshairStyle
                }));
                return l.a.createElement(en, null, l.a.createElement(tn, null, l.a.createElement(nn, null, l.a.createElement(ln, null, "Width"), l.a.createElement(rn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.001",
                    max: "10",
                    value: a,
                    step: "0.001",
                    onChange: function (e) {
                        var a = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return t(Object(Oa.i)(a))
                        }))
                    }
                })), l.a.createElement(on, null, l.a.createElement(cn, {
                    type: "number",
                    min: "0.001",
                    max: "10",
                    value: a,
                    step: "0.001",
                    onChange: function (e) {
                        var a = parseFloat(e.target.value);
                        isNaN(a) || Object(ka.c)((function () {
                            return t(Object(Oa.i)(a))
                        }))
                    }
                }))), l.a.createElement(nn, null, l.a.createElement(ln, null, "Length"), l.a.createElement(rn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0.001",
                    max: "10",
                    value: n,
                    step: "0.001",
                    onChange: function (e) {
                        var a = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return t(Object(Oa.g)(a))
                        }))
                    }
                })), l.a.createElement(on, null, l.a.createElement(cn, {
                    type: "number",
                    min: "0.001",
                    max: "10",
                    value: n,
                    step: "0.001",
                    onChange: function (e) {
                        var a = parseFloat(e.target.value);
                        isNaN(a) || Object(ka.c)((function () {
                            return t(Object(Oa.g)(a))
                        }))
                    }
                }))), l.a.createElement(nn, null, l.a.createElement(ln, null, "Color"), l.a.createElement(on, null, l.a.createElement("input", {
                    type: "color",
                    value: r,
                    onChange: function (e) {
                        var a = e.target.value;
                        Object(ka.c)((function () {
                            return t(Object(Oa.e)(a))
                        }))
                    }
                }))), l.a.createElement(nn, null, l.a.createElement(ln, null, "Hit Marker Color"), l.a.createElement(on, null, l.a.createElement("input", {
                    type: "color",
                    value: o,
                    onChange: function (e) {
                        var a = e.target.value;
                        Object(ka.c)((function () {
                            return t(Object(Oa.f)(a))
                        }))
                    }
                }))), l.a.createElement(nn, null, l.a.createElement(ln, null, "Style"), l.a.createElement(on, null, l.a.createElement("select", {
                    value: i,
                    onChange: function (e) {
                        var a = parseInt(e.target.value);
                        Object(ka.c)((function () {
                            return t(Object(Oa.h)(a))
                        }))
                    }
                }, l.a.createElement("option", {value: "0"}, "Cross"), l.a.createElement("option", {value: "1"}, "Cross With Dot"), l.a.createElement("option", {value: "2"}, "Dot"))))), l.a.createElement(an, null, l.a.createElement(Na, {
                    onClick: function (e) {
                        Object(ka.c)((function () {
                            t(Object(Oa.i)(Ta.c.crosshairWidth)), t(Object(Oa.g)(Ta.c.crosshairLength)), t(Object(Oa.e)(Ta.c.crosshairColor)), t(Object(Oa.f)(Ta.c.crosshairHitColor)), t(Object(Oa.h)(Ta.c.crosshairStyle))
                        }))
                    }
                }, "Restore Defaults")))
            }), un = a(154), mn = E.a.div.withConfig({
                displayName: "ModdingMenu__WrapperContent",
                componentId: "bev5qw-0"
            })(["background-color:rgba(70,70,70,0.6);padding:20px;color:black;pointer-events:auto;display:flex;flex-direction:column;justify-content:space-between;min-width:400px;min-height:415px;"]),
            dn = E.a.div.withConfig({displayName: "ModdingMenu__Settings", componentId: "bev5qw-1"})([""]),
            pn = E.a.div.withConfig({displayName: "ModdingMenu__Buttons", componentId: "bev5qw-2"})([""]),
            En = E.a.div.withConfig({
                displayName: "ModdingMenu__ContentRow",
                componentId: "bev5qw-3"
            })(["margin-bottom:20px;display:flex;justify-content:space-between;width:100%;align-items:center;color:white;"]),
            gn = E.a.div.withConfig({displayName: "ModdingMenu__SettingsName", componentId: "bev5qw-4"})([""]),
            hn = E.a.div.withConfig({
                displayName: "ModdingMenu__SettingsDescription",
                componentId: "bev5qw-5"
            })(["line-height:20px;"]), fn = E.a.div.withConfig({
                displayName: "ModdingMenu__SettingsSlider",
                componentId: "bev5qw-6"
            })(["margin:0 5px;"]), yn = E.a.div.withConfig({
                displayName: "ModdingMenu__SettingsValue",
                componentId: "bev5qw-7"
            })(["margin:0 5px;"]), bn = E.a.input.withConfig({
                displayName: "ModdingMenu__SettingsInput",
                componentId: "bev5qw-8"
            })(["background-color:rgba(0,0,0,0.8);border:1px solid white;padding:5px;color:white;"]),
            _n = (E.a.div.withConfig({
                displayName: "ModdingMenu__Space",
                componentId: "bev5qw-9"
            })(["width:20px;"]), E.a.div.withConfig({
                displayName: "ModdingMenu__ContentWrapper",
                componentId: "bev5qw-10"
            })(["margin-right:10px;"])), vn = E.a.a.withConfig({
                displayName: "ModdingMenu__NativeStyledLink",
                componentId: "bev5qw-11"
            })(["color:#74b9ff;"]), wn = function () {
                var e = c()(o.a.mark((function e(t) {
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function (e, a) {
                                    var n = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                                    function l() {
                                        n.removeEventListener("load", l, !1), n.removeEventListener("error", r, !1), e(!0)
                                    }

                                    function r(t) {
                                        n.removeEventListener("load", l, !1), n.removeEventListener("error", r, !1), e(!1)
                                    }

                                    n.addEventListener("load", l, !1), n.addEventListener("error", r, !1), n.crossOrigin = "anonymous", n.src = t
                                })));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), xn = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.settings.terrainTextureURL
                })), a = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageURL
                })), r = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageOpacity
                })), i = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageScaleX
                })), s = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageScaleY
                })), u = Object(p.c)((function (e) {
                    return e.settings.sniperScopeBackgroundColor
                })), m = Object(p.c)((function (e) {
                    return e.settings.sniperScopeBackgroundOpacity
                })), d = Object(n.useState)(t), E = d[0], g = d[1], h = Object(p.b)();
                return l.a.createElement(mn, null, l.a.createElement(dn, null, l.a.createElement(Ba.Scrollbars, {
                    style: {
                        height: 351,
                        marginBottom: 20
                    }
                }, l.a.createElement(_n, null, l.a.createElement(En, null, l.a.createElement(gn, null, "Terrain Texture URL"), l.a.createElement(yn, null, l.a.createElement(bn, {
                    placeholder: "Use Default",
                    type: "text",
                    value: E,
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        g(t.target.value);
                                    case 1:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    onBlur: function () {
                        var e = c()(o.a.mark((function e(a) {
                            var n;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = a.target.value, e.t0 = 0 !== n.length, !e.t0) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 5, wn(n);
                                    case 5:
                                        e.t0 = !e.sent;
                                    case 6:
                                        if (!e.t0) {
                                            e.next = 10;
                                            break
                                        }
                                        return alert("Sorry, the terrain texture you entered is invalid!"), g(t), e.abrupt("return");
                                    case 10:
                                        Object(ka.c)((function () {
                                            return h(Object(Oa.y)(n))
                                        }));
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }))), l.a.createElement(En, null, l.a.createElement(hn, null, "Paste in an image url that supports ", l.a.createElement(vn, {
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
                    target: "_blank"
                }, "CORS"), ", or leave blank to use the game's default texture. We recommend hosting your texture file on ", l.a.createElement(vn, {
                    href: "https://imgur.com",
                    target: "_blank"
                }, "imgur"), ". A page refresh is required to update the terrain texture. Get the game's default texture ", l.a.createElement(vn, {
                    href: un.a,
                    target: "_blank"
                }, "here"))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Image URL"), l.a.createElement(yn, null, l.a.createElement(bn, {
                    placeholder: "Use Default",
                    type: "text",
                    value: a,
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        a = t.target.value, Object(ka.c)((function () {
                                            return h(Object(Oa.w)(a))
                                        }));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Image Opacity"), l.a.createElement(fn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    value: r,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return h(Object(Oa.t)(t))
                        }))
                    }
                })), l.a.createElement(yn, null, l.a.createElement(bn, {
                    type: "number",
                    min: "0",
                    max: "1",
                    value: r,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return h(Object(Oa.t)(t))
                        }))
                    }
                }))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Image Scale X"), l.a.createElement(fn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0",
                    max: "10",
                    value: i,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return h(Object(Oa.u)(t))
                        }))
                    }
                })), l.a.createElement(yn, null, l.a.createElement(bn, {
                    type: "number",
                    min: "0",
                    max: "10",
                    value: i,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return h(Object(Oa.u)(t))
                        }))
                    }
                }))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Image Scale Y"), l.a.createElement(fn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0",
                    max: "10",
                    value: s,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return h(Object(Oa.v)(t))
                        }))
                    }
                })), l.a.createElement(yn, null, l.a.createElement(bn, {
                    type: "number",
                    min: "0",
                    max: "10",
                    value: s,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return h(Object(Oa.v)(t))
                        }))
                    }
                }))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Background Color"), l.a.createElement(yn, null, l.a.createElement("input", {
                    type: "color",
                    value: u,
                    onChange: function (e) {
                        var t = e.target.value;
                        Object(ka.c)((function () {
                            return h(Object(Oa.r)(t))
                        }))
                    }
                }))), l.a.createElement(En, null, l.a.createElement(gn, null, "Sniper Scope Background Opacity"), l.a.createElement(fn, null, l.a.createElement("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    value: m,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        Object(ka.c)((function () {
                            return h(Object(Oa.s)(t))
                        }))
                    }
                })), l.a.createElement(yn, null, l.a.createElement(bn, {
                    type: "number",
                    min: "0",
                    max: "1",
                    value: m,
                    step: "0.01",
                    onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        isNaN(t) || Object(ka.c)((function () {
                            return h(Object(Oa.s)(t))
                        }))
                    }
                })))))), l.a.createElement(pn, null, l.a.createElement(Na, {
                    onClick: function (e) {
                        Object(ka.c)((function () {
                            h(Object(Oa.y)(Ta.c.terrainTextureURL)), h(Object(Oa.w)(Ta.c.sniperScopeImageURL)), h(Object(Oa.t)(Ta.c.sniperScopeImageOpacity)), h(Object(Oa.u)(Ta.c.sniperScopeImageScaleX)), h(Object(Oa.v)(Ta.c.sniperScopeImageScaleY)), h(Object(Oa.r)(Ta.c.sniperScopeBackgroundColor)), h(Object(Oa.s)(Ta.c.sniperScopeBackgroundOpacity))
                        }))
                    }
                }, "Restore Defaults")))
            }, Sn = E.a.div.withConfig({
                displayName: "TabMenu__TabMenuWrapper",
                componentId: "sc-14o19m4-0"
            })(["display:flex;"]), Cn = E.a.div.withConfig({
                displayName: "TabMenu__TabMenuList",
                componentId: "sc-14o19m4-1"
            })(["margin-right:10px;"]), In = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.active ? "#e67e22" : "rgba(70, 70, 70, 0.6)"}}
            })).withConfig({
                displayName: "TabMenu__TabMenuButton",
                componentId: "sc-14o19m4-2"
            })(["padding:10px;margin-bottom:10px;font-size:15px;color:white;width:200px;background-color:rgba(70,70,70,0.6);:hover{cursor:pointer;background-color:rgba(100,100,100,0.6);}"]),
            On = E.a.div.withConfig({displayName: "TabMenu__TabMenuDisplay", componentId: "sc-14o19m4-3"})(["flex:1;"]),
            Nn = E.a.div.withConfig({
                displayName: "SettingsMenu__WrapperContent",
                componentId: "sc-1ihf0br-0"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;color:black;pointer-events:auto;display:flex;flex-direction:column;"]),
            kn = E.a.div.withConfig({
                displayName: "SettingsMenu__ActionButton",
                componentId: "sc-1ihf0br-1"
            })(["color:white;display:flex;align-items:center;margin-bottom:20px;font-size:20px;align-self:flex-start;:hover{cursor:pointer;}"]),
            Tn = E.a.div.withConfig({
                displayName: "SettingsMenu__ActionTitle",
                componentId: "sc-1ihf0br-2"
            })(["margin-left:10px;"]);
        !function (e) {
            e[e.GENERAL = 0] = "GENERAL", e[e.KEYBINDS = 1] = "KEYBINDS", e[e.CROSSHAIR = 2] = "CROSSHAIR", e[e.MODDING = 3] = "MODDING"
        }(gt || (gt = {}));
        var Rn = function (e) {
            var t = Object(n.useState)(gt.GENERAL), a = t[0], r = t[1],
                o = (Object(p.b)(), l.a.createElement(Ga, null));
            switch (a) {
                case gt.GENERAL:
                    o = l.a.createElement(Ga, null);
                    break;
                case gt.KEYBINDS:
                    o = l.a.createElement($a, null);
                    break;
                case gt.CROSSHAIR:
                    o = l.a.createElement(sn, null);
                    break;
                case gt.MODDING:
                    o = l.a.createElement(xn, null)
            }
            return l.a.createElement(Nn, null, e.onBack ? l.a.createElement(kn, {
                onClick: function () {
                    e.onBack()
                }
            }, l.a.createElement(b.a, {icon: y.a}), l.a.createElement(Tn, null, "Settings")) : null, l.a.createElement(Sn, null, l.a.createElement(Cn, null, l.a.createElement(In, {
                active: a === gt.GENERAL,
                onClick: function () {
                    a !== gt.GENERAL && r(gt.GENERAL)
                }
            }, "General"), l.a.createElement(In, {
                active: a === gt.KEYBINDS, onClick: function () {
                    a !== gt.KEYBINDS && r(gt.KEYBINDS)
                }
            }, "Keybinds"), l.a.createElement(In, {
                active: a === gt.CROSSHAIR, onClick: function () {
                    a !== gt.CROSSHAIR && r(gt.CROSSHAIR)
                }
            }, "Crosshair"), l.a.createElement(In, {
                active: a === gt.MODDING, onClick: function () {
                    a !== gt.MODDING && r(gt.MODDING)
                }
            }, "Modding")), l.a.createElement(On, null, o)))
        }, An = E.a.div.withConfig({
            displayName: "SettingsScreen__Wrapper",
            componentId: "sc-6bge1q-0"
        })(["display:flex;width:100%;flex-direction:column;"]), jn = function (e) {
            Object(p.b)();
            return l.a.createElement(An, null, l.a.createElement(Rn, null))
        };
        dt.a.extend(Et.a);
        var Mn = E.a.div.withConfig({
                displayName: "MatchBRScreen__Wrapper",
                componentId: "e97flw-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            Pn = Object(E.a)(C.b).attrs((function (e) {
                var t = e.name, a = e.clientName;
                return {style: {color: e.hasNickname && t === a ? "#f1c40f" : "white"}}
            })).withConfig({displayName: "MatchBRScreen__PlayerLink", componentId: "e97flw-1"})([""]),
            Ln = E.a.table.withConfig({
                displayName: "MatchBRScreen__Table",
                componentId: "e97flw-2"
            })(["border-collapse:collapse;border-spacing:0;"]), Fn = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.idx % 2 == 1 ? "rgba(200, 200, 200, 0.2)" : "rgba(0, 0, 0, 0)"}}
            })).withConfig({displayName: "MatchBRScreen__TableRow", componentId: "e97flw-3"})(["text-align:center;"]),
            Dn = E.a.td.withConfig({
                displayName: "MatchBRScreen__TableCell",
                componentId: "e97flw-4"
            })(["padding:10px 5px;"]), Gn = E.a.th.withConfig({
                displayName: "MatchBRScreen__TableHeaderCell",
                componentId: "e97flw-5"
            })(["padding:10px 5px;"]), Bn = E.a.div.withConfig({
                displayName: "MatchBRScreen__WrapperTitle",
                componentId: "e97flw-6"
            })(["font-size:30px;margin-bottom:20px;"]),
            Un = E.a.div.withConfig({displayName: "MatchBRScreen__MatchStats", componentId: "e97flw-7"})([""]),
            zn = E.a.span.withConfig({
                displayName: "MatchBRScreen__StatsLabel",
                componentId: "e97flw-8"
            })(["color:#a7a7a7;"]), Yn = E.a.div.withConfig({
                displayName: "MatchBRScreen__MatchStatsSection",
                componentId: "e97flw-9"
            })(["margin-bottom:20px;"]), qn = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                        return e.account.profile
                    })), a = Object(n.useState)({}), r = a[0], i = a[1], s = Object(n.useState)(!0), u = s[0], m = s[1],
                    d = Object(n.useState)(!1), E = d[0], g = d[1], h = Object(ot.h)().id;
                return Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, g(!1), m(!0), e.next = 5, fetch("/match/get_br/" + h, {method: "post"});
                                case 5:
                                    return t = e.sent, e.next = 8, t.json();
                                case 8:
                                    if (!(a = e.sent).success) {
                                        e.next = 13;
                                        break
                                    }
                                    i(a.data), e.next = 14;
                                    break;
                                case 13:
                                    throw new Error("Failed to find match");
                                case 14:
                                    g(!0), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.error("Failed to fetch match data");
                                case 20:
                                    return e.prev = 20, m(!1), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 17, 20, 23]])
                    })))()
                }), []), u ? l.a.createElement(Mn, null, "Loading...") : E ? l.a.createElement(Mn, null, l.a.createElement(Bn, null, "Battle Royale"), l.a.createElement(Yn, null, l.a.createElement(Un, null, l.a.createElement(zn, null, "ID: "), h), l.a.createElement(Un, null, l.a.createElement(zn, null, "Time: "), dt()(r.time).fromNow()), l.a.createElement(Un, null, l.a.createElement(zn, null, "Duration: "), Object(O.b)(r.duration))), l.a.createElement(Ln, null, l.a.createElement("thead", null, l.a.createElement(Fn, null, l.a.createElement(Gn, null, "Rank"), l.a.createElement(Gn, null, "Name"), l.a.createElement(Gn, null, "Kills"), l.a.createElement(Gn, null, "Deaths"), l.a.createElement(Gn, null, "Survival Time"), l.a.createElement(Gn, null, "Score"))), l.a.createElement("tbody", null, r.players.map((function (e, a) {
                    var n = Object(O.a)(e.survival_time);
                    return l.a.createElement(Fn, {
                        key: a,
                        idx: a
                    }, l.a.createElement(Dn, null, e.rank), l.a.createElement(Dn, {style: {color: "#989898"}}, e.has_nickname ? l.a.createElement(Pn, {
                        to: "/player/" + e.nickname,
                        name: e.nickname,
                        clientName: t.nickname,
                        hasNickname: t.has_nickname
                    }, e.nickname) : e.nickname), l.a.createElement(Dn, null, e.kills), l.a.createElement(Dn, null, e.deaths), l.a.createElement(Dn, null, n), l.a.createElement(Dn, null, e.score))
                }))))) : l.a.createElement(Mn, null, "Failed to load match data")
            };
        dt.a.extend(Et.a);
        var Wn = E.a.div.withConfig({
                displayName: "MatchCTGScreen__Wrapper",
                componentId: "sc-15qpyou-0"
            })(["background-color:rgba(0,0,0,0.8);color:white;padding:20px 30px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            Hn = Object(E.a)(C.b).attrs((function (e) {
                var t = e.name, a = e.clientName;
                return {style: {color: e.hasNickname && t === a ? "#f1c40f" : "white"}}
            })).withConfig({displayName: "MatchCTGScreen__PlayerLink", componentId: "sc-15qpyou-1"})([""]),
            Vn = E.a.table.withConfig({
                displayName: "MatchCTGScreen__Table",
                componentId: "sc-15qpyou-2"
            })(["border-collapse:collapse;border-spacing:0;margin-bottom:20px;"]), Kn = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.idx % 2 == 1 ? "rgba(200, 200, 200, 0.2)" : "rgba(0, 0, 0, 0)"}}
            })).withConfig({displayName: "MatchCTGScreen__TableRow", componentId: "sc-15qpyou-3"})(["text-align:center;"]),
            Xn = E.a.td.withConfig({
                displayName: "MatchCTGScreen__TableCell",
                componentId: "sc-15qpyou-4"
            })(["padding:10px 5px;"]), Jn = E.a.th.withConfig({
                displayName: "MatchCTGScreen__TableHeaderCell",
                componentId: "sc-15qpyou-5"
            })(["padding:10px 5px;"]), Zn = E.a.div.withConfig({
                displayName: "MatchCTGScreen__WrapperTitle",
                componentId: "sc-15qpyou-6"
            })(["font-size:30px;margin-bottom:20px;"]),
            Qn = E.a.div.withConfig({displayName: "MatchCTGScreen__MatchStats", componentId: "sc-15qpyou-7"})([""]),
            $n = E.a.span.withConfig({
                displayName: "MatchCTGScreen__StatsLabel",
                componentId: "sc-15qpyou-8"
            })(["color:#a7a7a7;"]), el = E.a.div.withConfig({
                displayName: "MatchCTGScreen__MatchStatsSection",
                componentId: "sc-15qpyou-9"
            })(["margin-bottom:20px;display:flex;justify-content:space-between;"]),
            tl = E.a.div.withConfig({displayName: "MatchCTGScreen__MatchLeft", componentId: "sc-15qpyou-10"})([""]),
            al = E.a.div.withConfig({displayName: "MatchCTGScreen__MatchRight", componentId: "sc-15qpyou-11"})([""]),
            nl = E.a.div.withConfig({
                displayName: "MatchCTGScreen__TeamScore",
                componentId: "sc-15qpyou-12"
            })(["font-size:50px;margin-bottom:5px;"]), ll = E.a.span.withConfig({
                displayName: "MatchCTGScreen__SapphireScore",
                componentId: "sc-15qpyou-13"
            })(["color:#3498db;"]), rl = E.a.span.withConfig({
                displayName: "MatchCTGScreen__TeamScoreSeparator",
                componentId: "sc-15qpyou-14"
            })([""]), ol = E.a.span.withConfig({
                displayName: "MatchCTGScreen__RubyScore",
                componentId: "sc-15qpyou-15"
            })(["color:#e74c3c;"]), il = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.color}}
            })).withConfig({
                displayName: "MatchCTGScreen__TeamHeader",
                componentId: "sc-15qpyou-16"
            })(["text-align:center;font-size:16px;font-weight:800;padding-top:10px;padding-bottom:10px;margin-bottom:10px;"]),
            cl = (E.a.span.attrs((function (e) {
                var t = e.name, a = e.clientName;
                return {style: {color: e.hasNickname && t === a ? "#f1c40f" : "#989898"}}
            })).withConfig({
                displayName: "MatchCTGScreen__ColorCodedPlayerName",
                componentId: "sc-15qpyou-17"
            })([""]), function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                        return e.account.profile
                    })), a = Object(n.useState)({}), r = a[0], i = a[1], s = Object(n.useState)(!0), u = s[0], m = s[1],
                    d = Object(n.useState)(!1), E = d[0], g = d[1], h = Object(ot.h)().id;
                return Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, g(!1), m(!0), e.next = 5, fetch("/match/get_ctg/" + h, {method: "post"});
                                case 5:
                                    return t = e.sent, e.next = 8, t.json();
                                case 8:
                                    if (!(a = e.sent).success) {
                                        e.next = 15;
                                        break
                                    }
                                    a.data.team1.players.sort((function (e, t) {
                                        return t.score - e.score
                                    })), a.data.team2.players.sort((function (e, t) {
                                        return t.score - e.score
                                    })), i(a.data), e.next = 16;
                                    break;
                                case 15:
                                    throw new Error("Failed to find match");
                                case 16:
                                    g(!0), e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19, e.t0 = e.catch(0), console.error("Failed to fetch match data");
                                case 22:
                                    return e.prev = 22, m(!1), e.finish(22);
                                case 25:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 19, 22, 25]])
                    })))()
                }), []), u ? l.a.createElement(Wn, null, "Loading...") : E ? l.a.createElement(Wn, null, l.a.createElement(Zn, null, "Capture The Gems"), l.a.createElement(el, null, l.a.createElement(tl, null, l.a.createElement(Qn, null, l.a.createElement($n, null, "ID: "), h), l.a.createElement(Qn, null, l.a.createElement($n, null, "Map: "), r.map_name), l.a.createElement(Qn, null, l.a.createElement($n, null, "Time: "), dt()(r.time).fromNow()), l.a.createElement(Qn, null, l.a.createElement($n, null, "Duration: "), Object(O.b)(r.duration))), l.a.createElement(al, null, l.a.createElement(nl, null, l.a.createElement(ll, null, r.team1.score), l.a.createElement(rl, null, " : "), l.a.createElement(ol, null, r.team2.score)))), l.a.createElement(il, {color: "#3498db"}, "Sapphire"), l.a.createElement(Vn, null, l.a.createElement("thead", null, l.a.createElement(Kn, null, l.a.createElement(Jn, null, "Name"), l.a.createElement(Jn, null, "Kills"), l.a.createElement(Jn, null, "Deaths"), l.a.createElement(Jn, null, "Captures"), l.a.createElement(Jn, null, "Score"))), l.a.createElement("tbody", null, r.team1.players.map((function (e, a) {
                    return l.a.createElement(Kn, {
                        key: a,
                        idx: a
                    }, l.a.createElement(Xn, {style: {color: "#989898"}}, e.has_nickname ? l.a.createElement(Hn, {
                        to: "/player/" + e.nickname,
                        name: e.nickname,
                        clientName: t.nickname,
                        hasNickname: t.has_nickname
                    }, e.nickname) : e.nickname), l.a.createElement(Xn, null, e.kills), l.a.createElement(Xn, null, e.deaths), l.a.createElement(Xn, null, e.captures), l.a.createElement(Xn, null, e.score))
                })))), l.a.createElement(il, {color: "#e74c3c"}, "Ruby"), l.a.createElement(Vn, null, l.a.createElement("thead", null, l.a.createElement(Kn, null, l.a.createElement(Jn, null, "Name"), l.a.createElement(Jn, null, "Kills"), l.a.createElement(Jn, null, "Deaths"), l.a.createElement(Jn, null, "Captures"), l.a.createElement(Jn, null, "Score"))), l.a.createElement("tbody", null, r.team2.players.map((function (e, a) {
                    return l.a.createElement(Kn, {
                        key: a,
                        idx: a
                    }, l.a.createElement(Xn, {style: {color: "#989898"}}, e.has_nickname ? l.a.createElement(Hn, {
                        to: "/player/" + e.nickname,
                        name: e.nickname,
                        clientName: t.nickname,
                        hasNickname: t.has_nickname
                    }, e.nickname) : e.nickname), l.a.createElement(Xn, null, e.kills), l.a.createElement(Xn, null, e.deaths), l.a.createElement(Xn, null, e.captures), l.a.createElement(Xn, null, e.score))
                }))))) : l.a.createElement(Wn, null, "Failed to load match data")
            }), sl = a(119), ul = a(102), ml = a(86), dl = a(35), pl = a(144), El = E.a.div.withConfig({
                displayName: "AccountInventorySlot__Wrapper",
                componentId: "leeqp9-0"
            })(["     display:flex;flex-direction:column;align-items:center;position:relative;"]), gl = E.a.div.withConfig({
                displayName: "AccountInventorySlot__EquippedIcon",
                componentId: "leeqp9-1"
            })(["position:absolute;top:12px;right:12px;color:#ffe735;z-index:999;"]), hl = E.a.div.attrs((function (e) {
                return {style: {border: "1px solid " + e.tierColor}}
            })).withConfig({
                displayName: "AccountInventorySlot__ImageContainer",
                componentId: "leeqp9-2"
            })(["position:relative;width:175px;height:175px;padding:20px;padding-top:30px;padding-bottom:10px;background:rgba(70,70,70,0.6);background:radial-gradient(circle,rgba(100,100,100,0.6) 0%,rgba(60,60,60,0.6) 100%);"]),
            fl = E.a.img.withConfig({
                displayName: "AccountInventorySlot__Image",
                componentId: "leeqp9-3"
            })(["width:100%;user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;"]),
            yl = E.a.div.withConfig({displayName: "AccountInventorySlot__SkinName", componentId: "leeqp9-4"})([""]),
            bl = E.a.div.withConfig({
                displayName: "AccountInventorySlot__ItemMenu",
                componentId: "leeqp9-5"
            })(["position:absolute;bottom:0;left:0;width:100%;display:flex;font-size:14px;"]), _l = E.a.div.withConfig({
                displayName: "AccountInventorySlot__MenuAction",
                componentId: "leeqp9-6"
            })(["background-color:rgba(0,0,0,0.4);padding:10px;flex:1;text-align:center;:hover{background-color:rgba(0,0,0,0.6);cursor:pointer;}"]),
            vl = E.a.div.attrs((function (e) {
                return {style: {color: e.tierColor}}
            })).withConfig({
                displayName: "AccountInventorySlot__Description",
                componentId: "leeqp9-7"
            })(["width:100%;align-items:center;padding-top:10px;padding-bottom:10px;font-size:16px;position:absolute;top:0;left:0;text-align:center;"]),
            wl = function (e) {
                var t = Object(ul.a)(e.item.type),
                    a = (0 === e.item.item_id ? Object(sl.b)(e.item.slot) : t.itemType, Object(n.useState)(!1)),
                    r = a[0], o = a[1];
                return l.a.createElement(El, {
                    onMouseEnter: function () {
                        o(!0)
                    }, onMouseLeave: function () {
                        o(!1)
                    }
                }, e.item.equipped ? l.a.createElement(gl, null, l.a.createElement(b.a, {icon: pl.a})) : null, l.a.createElement(hl, {tierColor: Object(dl.d)(t.tier)}, l.a.createElement(fl, {src: e.icon}), r ? l.a.createElement(bl, null, !e.item.equipped && e.onEquip && l.a.createElement(_l, {onClick: e.onEquip}, "Equip"), e.item.equipped && 0 !== e.item.item_id && e.onUnequip && l.a.createElement(_l, {onClick: e.onUnequip}, "Unequip"), l.a.createElement(_l, {onClick: e.onInspect}, "Inspect"), !e.item.equipped && 0 !== e.item.item_id && e.onSell && l.a.createElement(_l, {onClick: e.onSell}, "Sell")) : null, l.a.createElement(vl, {tierColor: Object(dl.d)(t.tier)}, l.a.createElement(yl, {style: {color: "white"}}, t.name), l.a.createElement(yl, null, Object(dl.c)(t.tier)))))
            }, xl = function () {
                return function (e) {
                    var t = ("; " + document.cookie).split("; " + e + "=");
                    if (2 === t.length) return t.pop().split(";").shift()
                }("_xst2")
            }, Sl = a(130), Cl = a.p + "./aecdbf2670322f8d78546f23044b64b5.png", Il = E.a.div.withConfig({
                displayName: "PopupWindow__Wrapper",
                componentId: "f995uf-0"
            })(["position:fixed;width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center;z-index:999999999;pointer-events:auto;background-color:rgba(0,0,0,0.5);"]),
            Ol = E.a.div.withConfig({
                displayName: "PopupWindow__Panel",
                componentId: "f995uf-1"
            })(["min-width:500px;background-color:rgb(50,50,50);display:flex;flex-direction:column;align-items:center;padding:20px;"]),
            Nl = function (e) {
                Object(p.b)();
                return l.a.createElement(Il, null, l.a.createElement(Ol, null, e.children))
            };

        function kl(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function Tl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kl(Object(a), !0).forEach((function (t) {
                    d()(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : kl(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        var Rl, Al = E.a.div.withConfig({
                displayName: "ItemListScreen__Wrapper",
                componentId: "sc-155fu84-0"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;color:white;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            jl = E.a.div.withConfig({
                displayName: "ItemListScreen__WrapperTitle",
                componentId: "sc-155fu84-1"
            })(["font-size:30px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;"]),
            Ml = E.a.div.withConfig({displayName: "ItemListScreen__Title", componentId: "sc-155fu84-2"})([""]),
            Pl = E.a.img.withConfig({
                displayName: "ItemListScreen__MoneyIcon",
                componentId: "sc-155fu84-3"
            })(["width:32px;margin-right:10px;"]), Ll = E.a.div.withConfig({
                displayName: "ItemListScreen__Money",
                componentId: "sc-155fu84-4"
            })(["font-size:20px;display:flex;align-items:center;background-color:rgba(70,70,70,0.5);padding:5px 10px;"]),
            Fl = E.a.div.withConfig({
                displayName: "ItemListScreen__ItemsList",
                componentId: "sc-155fu84-5"
            })(["display:flex;flex-wrap:wrap;margin-right:-28px;"]), Dl = E.a.div.withConfig({
                displayName: "ItemListScreen__SlotWrapper",
                componentId: "sc-155fu84-6"
            })(["margin-bottom:20px;margin-right:20px;"]), Gl = E.a.div.withConfig({
                displayName: "ItemListScreen__Filters",
                componentId: "sc-155fu84-7"
            })(["display:flex;margin-bottom:20px;"]), Bl = E.a.div.withConfig({
                displayName: "ItemListScreen__Filter",
                componentId: "sc-155fu84-8"
            })(["display:flex;align-items:center;"]), Ul = E.a.div.attrs((function (e) {
                return {style: {width: e.width}}
            })).withConfig({
                displayName: "ItemListScreen__FilterDropdown",
                componentId: "sc-155fu84-9"
            })(["margin-right:20px;"]), zl = E.a.div.withConfig({
                displayName: "ItemListScreen__InventoryWrapper",
                componentId: "sc-155fu84-10"
            })(["display:flex;flex-direction:column;"]), Yl = E.a.div.withConfig({
                displayName: "ItemListScreen__Pagination",
                componentId: "sc-155fu84-11"
            })(["display:flex;font-size:20px;align-items:center;justify-content:space-between;"]),
            ql = E.a.div.attrs((function (e) {
                return {style: {visibility: e.visible ? "visible" : "hidden"}}
            })).withConfig({
                displayName: "ItemListScreen__PaginationButton",
                componentId: "sc-155fu84-12"
            })(["padding:5px 10px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}"]),
            Wl = E.a.div.withConfig({
                displayName: "ItemListScreen__CurrentPage",
                componentId: "sc-155fu84-13"
            })(["margin:0 10px;"]), Hl = E.a.img.withConfig({
                displayName: "ItemListScreen__TitleMoneyIcon",
                componentId: "sc-155fu84-14"
            })(["width:20px;margin:0 6px;"]), Vl = E.a.span.attrs((function (e) {
                return {style: {color: e.tierColor}}
            })).withConfig({displayName: "ItemListScreen__ColoredName", componentId: "sc-155fu84-15"})([""]),
            Kl = E.a.div.withConfig({
                displayName: "ItemListScreen__PopupContent",
                componentId: "sc-155fu84-16"
            })(["display:flex;flex-direction:column;align-items:center;"]), Xl = E.a.div.withConfig({
                displayName: "ItemListScreen__PopupTitle",
                componentId: "sc-155fu84-17"
            })(["margin-bottom:10px;font-size:20px;display:flex;align-items:center;"]), Jl = E.a.div.withConfig({
                displayName: "ItemListScreen__PopupMessage",
                componentId: "sc-155fu84-18"
            })(["margin-bottom:20px;"]), Zl = E.a.div.withConfig({
                displayName: "ItemListScreen__ButtonGroup",
                componentId: "sc-155fu84-19"
            })(["display:flex;justify-content:center;"]), Ql = E.a.div.withConfig({
                displayName: "ItemListScreen__ConfirmPopupButton",
                componentId: "sc-155fu84-20"
            })(["display:flex;align-items:center;margin-right:10px;padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            $l = E.a.div.withConfig({
                displayName: "ItemListScreen__DismissPopupButton",
                componentId: "sc-155fu84-21"
            })(["display:flex;align-items:center;padding:8px 10px;background-color:#7f8c8d;text-align:center;color:white;:hover{background-color:#95a5a6;cursor:pointer;}"]),
            er = function (e) {
                for (var t = new Set, a = 0; a < e.length; a++) {
                    var n = null != e[a].slot;
                    e[a].equipped = n, n && t.add(e[a].slot)
                }
                for (var l = 1; l < sl.a.__LENGTH; l++) e.push({
                    item_id: 0,
                    slot: l,
                    equipped: !t.has(l),
                    type: 0,
                    seed: 0,
                    creation_time: new Date,
                    obtained_time: new Date,
                    equipped_time: new Date
                });
                return e
            };
        !function (e) {
            e[e.NONE = 0] = "NONE", e[e.CONFIRM = 1] = "CONFIRM", e[e.RESULT = 2] = "RESULT", e[e.ERROR = 3] = "ERROR"
        }(Rl || (Rl = {}));
        var tr, ar, nr = function (e) {
                var t = Object(p.b)(), a = Object(p.c)((function (e) {
                        return e.account.authenticated
                    })), r = Object(p.c)((function (e) {
                        return e.account.profile
                    })), i = Object(n.useState)([]), s = i[0], u = i[1], m = Object(n.useState)({}), d = m[0], E = m[1],
                    g = Object(n.useState)(!0), f = g[0], y = g[1], _ = Object(n.useState)(0), v = _[0], w = _[1],
                    x = Object(n.useState)({type: Rl.NONE, name: "", color: "#ffffff", price: 0, item_id: 0}), C = x[0],
                    I = x[1], O = function () {
                        I({type: Rl.NONE, name: "", color: "#ffffff", price: 0, item_id: 0})
                    }, k = [{value: -1, label: "All Weapons"}, {
                        value: sl.a.COMBAT_ASSAULT_RIFLE,
                        label: "Combat Assault Rifle"
                    }, {value: sl.a.TACTICAL_ASSAULT_RIFLE, label: "Tactical Assault Rifle"}, {
                        value: sl.a.SURGE_ASSAULT_RIFLE,
                        label: "Surge Assault Rifle"
                    }, {value: sl.a.BURST_SHOTGUN, label: "Burst Shotgun"}, {
                        value: sl.a.LIGHT_SUBMACHINE_GUN,
                        label: "Light Submachine Gun"
                    }, {value: sl.a.COMPACT_SUBMACHINE_GUN, label: "Compact Submachine Gun"}, {
                        value: sl.a.LIGHT_SNIPER_RIFLE,
                        label: "Light Sniper Rifle"
                    }, {value: sl.a.HEAVY_SNIPER_RIFLE, label: "Heavy Sniper Rifle"}, {
                        value: sl.a.STRIKE_PISTOL,
                        label: "Strike Pistol"
                    }, {value: sl.a.MAGNUM_PISTOL, label: "Magnum Pistol"}, {value: sl.a.SHOVEL, label: "Shovel"}],
                    T = Object(n.useState)(k[0]), R = T[0], A = T[1],
                    j = [{value: -1, label: "All Rarity"}, {value: dl.a.COMMON, label: "Common"}, {
                        value: dl.a.NOTEWORTHY,
                        label: "Noteworthy"
                    }, {value: dl.a.PRECIOUS, label: "Precious"}, {
                        value: dl.a.MAGNIFICENT,
                        label: "Magnificent"
                    }, {value: dl.a.EXTRAORDINARY, label: "Extraordinary"}, {value: dl.a.COVERT, label: "Covert"}],
                    M = Object(n.useState)(j[0]), L = M[0], F = M[1], D = Object(n.useState)(0), G = D[0], B = D[1];
                Object(n.useEffect)((function () {
                    y(!0);
                    var t = 0;
                    (function () {
                        var a = c()(o.a.mark((function a() {
                            var n;
                            return o.a.wrap((function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return n = e.inventory.filter((function (e) {
                                            var a = Object(ul.a)(e.type), n = 0 === e.item_id ? e.slot : a.slot,
                                                l = !(-1 !== R.value && n !== R.value || -1 !== L.value && a.tier !== L.value),
                                                r = t >= 40 * v && t < 40 * (v + 1) && l;
                                            return l && ++t, r
                                        })), B(Math.ceil(t / 40)), u(n), a.t0 = E, a.next = 6, N.a.generateAccountInventoryIcons(n, {});
                                    case 6:
                                        a.t1 = a.sent, (0, a.t0)(a.t1), y(!1);
                                    case 9:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function () {
                            return a.apply(this, arguments)
                        }
                    })()()
                }), [e.inventory, v, R, L]);
                var U = Object(n.useState)(!1), z = U[0], Y = U[1],
                    q = l.a.createElement(zl, null, s.length > 0 ? l.a.createElement(Fl, null, s.map((function (a) {
                        return l.a.createElement(Dl, {key: a.item_id + "_" + a.slot + "_" + a.type}, l.a.createElement(wl, {
                            icon: 0 === a.item_id ? d[a.slot] : d[a.type + "_" + a.seed],
                            item: a,
                            onEquip: e.canEquip ? c()(o.a.mark((function t() {
                                var n, l;
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!z) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return Y(!0), t.prev = 3, t.next = 6, fetch("/profile/equip_item", {
                                                method: "post",
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json",
                                                    "CSRF-Token": xl()
                                                },
                                                body: JSON.stringify({item_id: a.item_id, slot: a.slot ? a.slot : 0})
                                            });
                                        case 6:
                                            return n = t.sent, t.next = 9, n.json();
                                        case 9:
                                            (l = t.sent).success && e.setInventory(er(l.data)), t.next = 16;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t.catch(3), console.error("Failed to process inventory item equip request");
                                        case 16:
                                            return t.prev = 16, Y(!1), t.finish(16);
                                        case 19:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[3, 13, 16, 19]])
                            }))) : void 0,
                            onUnequip: e.canUnequip ? c()(o.a.mark((function t() {
                                var n, l, r;
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!z) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return n = Object(ul.a)(a.type), Y(!0), t.prev = 4, t.next = 7, fetch("/profile/equip_item", {
                                                method: "post",
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json",
                                                    "CSRF-Token": xl()
                                                },
                                                body: JSON.stringify({item_id: 0, slot: n.slot})
                                            });
                                        case 7:
                                            return l = t.sent, t.next = 10, l.json();
                                        case 10:
                                            (r = t.sent).success && e.setInventory(er(r.data)), t.next = 17;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t.catch(4), console.error("Failed to process inventory item equip request");
                                        case 17:
                                            return t.prev = 17, Y(!1), t.finish(17);
                                        case 20:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[4, 14, 17, 20]])
                            }))) : void 0,
                            onSell: e.canSell ? c()(o.a.mark((function e() {
                                var t, n;
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t = Object(ul.a)(a.type), n = t.itemType, I({
                                                type: Rl.CONFIRM,
                                                name: Object(ml.c)(n).itemName + " | " + t.name,
                                                color: Object(dl.d)(t.tier),
                                                item_id: a.item_id,
                                                price: Object(dl.e)(t.tier)
                                            });
                                        case 3:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            }))) : void 0,
                            onInspect: c()(o.a.mark((function e() {
                                var n, l;
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            n = Object(ul.a)(a.type), l = 0 === a.item_id ? Object(sl.b)(a.slot) : n.itemType, t(Object(S.k)(Object(ml.c)(l).itemName + " | " + n.name, l, a.type, a.seed));
                                        case 3:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }))
                    }))) : "No items match your search", G > 1 ? l.a.createElement(Yl, null, l.a.createElement(ql, {
                        visible: v > 0,
                        onClick: function () {
                            w(Math.max(0, v - 1))
                        }
                    }, l.a.createElement(b.a, {icon: Sl.a})), l.a.createElement(Wl, null, v + 1), l.a.createElement(ql, {
                        visible: v < G - 1,
                        onClick: function () {
                            w(Math.min(G - 1, v + 1))
                        }
                    }, l.a.createElement(b.a, {icon: Sl.b}))) : null);
                return l.a.createElement(l.a.Fragment, null, C.type === Rl.CONFIRM ? l.a.createElement(Nl, null, l.a.createElement(Kl, null, l.a.createElement(Xl, null, l.a.createElement("span", null, "Sell ", l.a.createElement(Vl, {tierColor: C.color}, C.name), " for "), l.a.createElement(Hl, {src: Cl}), l.a.createElement("span", null, C.price), " ?"), l.a.createElement(Jl, null, "Be careful! This action cannot be undone!"), l.a.createElement(Zl, null, l.a.createElement(Ql, {
                    onClick: function () {
                        var a = c()(o.a.mark((function a(n) {
                            var l, i;
                            return o.a.wrap((function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        if (!z) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return Y(!0), a.prev = 3, a.next = 6, fetch("/shop/sell_item", {
                                            method: "post",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json",
                                                "CSRF-Token": xl()
                                            },
                                            body: JSON.stringify({item_id: C.item_id})
                                        });
                                    case 6:
                                        return l = a.sent, a.next = 9, l.json();
                                    case 9:
                                        if (!(i = a.sent).success) {
                                            a.next = 16;
                                            break
                                        }
                                        e.setInventory(er(i.data.inventory)), t(Object(h.a)(Tl(Tl({}, r), {}, {gems: i.data.gems}))), I(Tl(Tl({}, C), {}, {type: Rl.RESULT})), a.next = 17;
                                        break;
                                    case 16:
                                        throw new Error("Request failed");
                                    case 17:
                                        a.next = 23;
                                        break;
                                    case 19:
                                        a.prev = 19, a.t0 = a.catch(3), console.error("Failed to process inventory item equip request"), I(Tl(Tl({}, C), {}, {type: Rl.ERROR}));
                                    case 23:
                                        return a.prev = 23, Y(!1), a.finish(23);
                                    case 26:
                                    case"end":
                                        return a.stop()
                                }
                            }), a, null, [[3, 19, 23, 26]])
                        })));
                        return function (e) {
                            return a.apply(this, arguments)
                        }
                    }()
                }, "Sell"), l.a.createElement($l, {
                    onClick: function (e) {
                        O()
                    }
                }, "Later")))) : C.type === Rl.RESULT ? l.a.createElement(Nl, null, l.a.createElement(Kl, null, l.a.createElement(Xl, null, l.a.createElement("span", null, "You sold ", l.a.createElement(Vl, {tierColor: C.color}, C.name), " for "), l.a.createElement(Hl, {src: Cl}), l.a.createElement("span", null, C.price)), l.a.createElement(Jl, null, C.price, " Vox Gems have been credited to your account"), l.a.createElement(Zl, null, l.a.createElement(Ql, {
                    onClick: function (e) {
                        O()
                    }
                }, "Done")))) : C.type === Rl.ERROR ? l.a.createElement(Nl, null, l.a.createElement(Kl, null, l.a.createElement(Xl, null, "Sorry, an error has occurred"), l.a.createElement(Jl, null, "Your item was not sold"), l.a.createElement(Zl, null, l.a.createElement(Ql, {
                    onClick: function (e) {
                        O()
                    }
                }, "Done")))) : null, l.a.createElement(Al, null, l.a.createElement(jl, null, l.a.createElement(Ml, null, e.title), l.a.createElement(Ll, null, l.a.createElement(Pl, {src: Cl}), l.a.createElement("span", null, r.gems))), l.a.createElement(Gl, null, l.a.createElement(Bl, null, l.a.createElement(Ul, {width: 230}, l.a.createElement(P, {
                    options: k,
                    value: R,
                    onChange: function (e) {
                        A(e), w(0), y(!0)
                    },
                    placeholder: "Weapon Type..."
                }))), l.a.createElement(Bl, null, l.a.createElement(Ul, {width: 150}, l.a.createElement(P, {
                    options: j,
                    value: L,
                    onChange: function (e) {
                        F(e), w(0), y(!0)
                    },
                    placeholder: "Rarity..."
                })))), e.requireAuthentication && !a ? "Sorry, you must be logged in to access this feature!" : e.isLoading || f ? "Loading..." : e.success ? q : e.loadErrorMessage))
            }, lr = function (e) {
                Object(p.b)();
                var t = Object(n.useState)([]), a = t[0], r = t[1], i = Object(n.useState)(!0), s = i[0], u = i[1],
                    m = Object(n.useState)(!0), d = m[0], E = m[1];
                return Object(n.useEffect)((function () {
                    E(!0), c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch("/profile/myinv", {method: "post"});
                                case 3:
                                    return t = e.sent, e.next = 6, t.json();
                                case 6:
                                    if (!(a = e.sent).success) {
                                        e.next = 11;
                                        break
                                    }
                                    r(er(a.data)), e.next = 12;
                                    break;
                                case 11:
                                    throw new Error("Failed to load inventory");
                                case 12:
                                    u(!0), e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(0), console.error("Failed to fetch inventory data"), u(!1);
                                case 19:
                                    return e.prev = 19, E(!1), e.finish(19);
                                case 22:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 15, 19, 22]])
                    })))()
                }), []), l.a.createElement(nr, {
                    title: "Loadouts",
                    success: s,
                    loadErrorMessage: "Failed to load player inventory",
                    isLoading: d,
                    inventory: a,
                    setInventory: r,
                    requireAuthentication: !0,
                    canEquip: !0,
                    canUnequip: !0,
                    canSell: !0
                })
            }, rr = a(50), or = a.p + "./5fa37167035d87d30d9311e17ab650ff.png",
            ir = a.p + "./4d4a9cba198315ea1c4f1ed691aa445f.png",
            cr = ((tr = {})[rr.a.A] = {image: ir}, tr[rr.a.B] = {image: or}, tr), sr = a(48),
            ur = [sr.a.SP_ARMY, sr.a.SP_NAVY, sr.a.SP_CRIMSON, sr.a.SP_LAVENDER, sr.a.SP_RUST, sr.a.SP_PEACH, sr.a.SP_DARK_ZEBRA, sr.a.SP_LIGHT_ZEBRA, sr.a.MP_RUBY, sr.a.MP_SAPPHIRE, sr.a.MP_EMERALD, sr.a.TAR_ARMY, sr.a.TAR_NAVY, sr.a.TAR_CRIMSON, sr.a.TAR_LAVENDER, sr.a.TAR_RUST, sr.a.TAR_PEACH, sr.a.TAR_DARK_ZEBRA, sr.a.TAR_LIGHT_ZEBRA, sr.a.CAR_IRONWORKS, sr.a.CAR_ARMY, sr.a.CAR_NAVY, sr.a.CAR_CRIMSON, sr.a.CAR_LAVENDER, sr.a.CAR_RUST, sr.a.CAR_PEACH, sr.a.CAR_DARK_ZEBRA, sr.a.CAR_LIGHT_ZEBRA, sr.a.SAR_ARMY, sr.a.SAR_NAVY, sr.a.SAR_CRIMSON, sr.a.SAR_LAVENDER, sr.a.SAR_RUST, sr.a.SAR_PEACH, sr.a.SAR_DARK_ZEBRA, sr.a.SAR_LIGHT_ZEBRA, sr.a.LSMG_ARMY, sr.a.LSMG_NAVY, sr.a.LSMG_CRIMSON, sr.a.LSMG_LAVENDER, sr.a.LSMG_RUST, sr.a.LSMG_PEACH, sr.a.LSMG_DARK_ZEBRA, sr.a.LSMG_LIGHT_ZEBRA, sr.a.CSMG_IRONWORKS, sr.a.CSMG_ARMY, sr.a.CSMG_NAVY, sr.a.CSMG_CRIMSON, sr.a.CSMG_LAVENDER, sr.a.CSMG_RUST, sr.a.CSMG_PEACH, sr.a.CSMG_DARK_ZEBRA, sr.a.CSMG_LIGHT_ZEBRA, sr.a.BSG_ARMY, sr.a.BSG_NAVY, sr.a.BSG_CRIMSON, sr.a.BSG_LAVENDER, sr.a.BSG_RUST, sr.a.BSG_PEACH, sr.a.BSG_DARK_ZEBRA, sr.a.BSG_LIGHT_ZEBRA, sr.a.LSR_ARMY, sr.a.LSR_NAVY, sr.a.LSR_CRIMSON, sr.a.LSR_LAVENDER, sr.a.LSR_RUST, sr.a.LSR_PEACH, sr.a.LSR_DARK_ZEBRA, sr.a.LSR_LIGHT_ZEBRA, sr.a.HSR_ARMY, sr.a.HSR_NAVY, sr.a.HSR_CRIMSON, sr.a.HSR_LAVENDER, sr.a.HSR_RUST, sr.a.HSR_PEACH, sr.a.HSR_DARK_ZEBRA, sr.a.HSR_LIGHT_ZEBRA],
            mr = [sr.a.SP_JUNGLE, sr.a.SP_AVALANCHE, sr.a.SP_SANDSTORM, sr.a.SP_PIXEL_STORM_ORANGE, sr.a.SP_PIXEL_STORM_BLUE, sr.a.SP_PIXEL_STORM_CONTRAST, sr.a.SP_PIXEL_STORM_GLITCHED, sr.a.SP_PAINT_SPLASH, sr.a.MP_JUNGLE, sr.a.MP_AVALANCHE, sr.a.MP_SANDSTORM, sr.a.MP_PIXEL_STORM_ORANGE, sr.a.MP_PIXEL_STORM_BLUE, sr.a.MP_PIXEL_STORM_CONTRAST, sr.a.MP_PIXEL_STORM_GLITCHED, sr.a.MP_PAINT_SPLASH, sr.a.TAR_JUNGLE, sr.a.TAR_AVALANCHE, sr.a.TAR_SANDSTORM, sr.a.TAR_PIXEL_STORM_ORANGE, sr.a.TAR_PIXEL_STORM_BLUE, sr.a.TAR_PIXEL_STORM_CONTRAST, sr.a.TAR_PIXEL_STORM_GLITCHED, sr.a.TAR_PAINT_SPLASH, sr.a.CAR_JUNGLE, sr.a.CAR_AVALANCHE, sr.a.CAR_SANDSTORM, sr.a.CAR_PIXEL_STORM_ORANGE, sr.a.CAR_PIXEL_STORM_BLUE, sr.a.CAR_PIXEL_STORM_CONTRAST, sr.a.CAR_PIXEL_STORM_GLITCHED, sr.a.CAR_PAINT_SPLASH, sr.a.SAR_JUNGLE, sr.a.SAR_AVALANCHE, sr.a.SAR_SANDSTORM, sr.a.SAR_PIXEL_STORM_ORANGE, sr.a.SAR_PIXEL_STORM_BLUE, sr.a.SAR_PIXEL_STORM_CONTRAST, sr.a.SAR_PIXEL_STORM_GLITCHED, sr.a.SAR_PAINT_SPLASH, sr.a.LSMG_JUNGLE, sr.a.LSMG_AVALANCHE, sr.a.LSMG_SANDSTORM, sr.a.LSMG_PIXEL_STORM_ORANGE, sr.a.LSMG_PIXEL_STORM_BLUE, sr.a.LSMG_PIXEL_STORM_CONTRAST, sr.a.LSMG_PIXEL_STORM_GLITCHED, sr.a.LSMG_PAINT_SPLASH, sr.a.CSMG_JUNGLE, sr.a.CSMG_AVALANCHE, sr.a.CSMG_SANDSTORM, sr.a.CSMG_PIXEL_STORM_ORANGE, sr.a.CSMG_PIXEL_STORM_BLUE, sr.a.CSMG_PIXEL_STORM_CONTRAST, sr.a.CSMG_PIXEL_STORM_GLITCHED, sr.a.CSMG_PAINT_SPLASH, sr.a.BSG_JUNGLE, sr.a.BSG_AVALANCHE, sr.a.BSG_SANDSTORM, sr.a.BSG_PIXEL_STORM_ORANGE, sr.a.BSG_PIXEL_STORM_BLUE, sr.a.BSG_PIXEL_STORM_CONTRAST, sr.a.BSG_PIXEL_STORM_GLITCHED, sr.a.BSG_PAINT_SPLASH, sr.a.LSR_JUNGLE, sr.a.LSR_AVALANCHE, sr.a.LSR_SANDSTORM, sr.a.LSR_PIXEL_STORM_ORANGE, sr.a.LSR_PIXEL_STORM_BLUE, sr.a.LSR_PIXEL_STORM_CONTRAST, sr.a.LSR_PIXEL_STORM_GLITCHED, sr.a.LSR_PAINT_SPLASH, sr.a.HSR_JUNGLE, sr.a.HSR_AVALANCHE, sr.a.HSR_SANDSTORM, sr.a.HSR_PIXEL_STORM_ORANGE, sr.a.HSR_PIXEL_STORM_BLUE, sr.a.HSR_PIXEL_STORM_CONTRAST, sr.a.HSR_PIXEL_STORM_GLITCHED, sr.a.HSR_PAINT_SPLASH],
            dr = [sr.a.SP_SPRING, sr.a.SP_SUMMER, sr.a.SP_FALL, sr.a.SP_WINTER, sr.a.SP_PEARL_MARBLE, sr.a.SP_VOLCANIC, sr.a.SP_BLAZE, sr.a.MP_SPRING, sr.a.MP_SUMMER, sr.a.MP_FALL, sr.a.MP_WINTER, sr.a.MP_PEARL_MARBLE, sr.a.MP_VOLCANIC, sr.a.MP_BLAZE, sr.a.TAR_SPRING, sr.a.TAR_SUMMER, sr.a.TAR_FALL, sr.a.TAR_WINTER, sr.a.TAR_PEARL_MARBLE, sr.a.TAR_VOLCANIC, sr.a.TAR_BLAZE, sr.a.CAR_SPRING, sr.a.CAR_SUMMER, sr.a.CAR_FALL, sr.a.CAR_WINTER, sr.a.CAR_PEARL_MARBLE, sr.a.CAR_VOLCANIC, sr.a.CAR_BLAZE, sr.a.SAR_SPRING, sr.a.SAR_SUMMER, sr.a.SAR_FALL, sr.a.SAR_WINTER, sr.a.SAR_PEARL_MARBLE, sr.a.SAR_VOLCANIC, sr.a.SAR_BLAZE, sr.a.LSMG_SPRING, sr.a.LSMG_SUMMER, sr.a.LSMG_FALL, sr.a.LSMG_WINTER, sr.a.LSMG_PEARL_MARBLE, sr.a.LSMG_VOLCANIC, sr.a.LSMG_BLAZE, sr.a.CSMG_JUNGLE, sr.a.CSMG_SPRING, sr.a.CSMG_SUMMER, sr.a.CSMG_FALL, sr.a.CSMG_WINTER, sr.a.CSMG_PEARL_MARBLE, sr.a.CSMG_VOLCANIC, sr.a.CSMG_BLAZE, sr.a.BSG_SPRING, sr.a.BSG_SUMMER, sr.a.BSG_FALL, sr.a.BSG_WINTER, sr.a.BSG_PEARL_MARBLE, sr.a.BSG_VOLCANIC, sr.a.BSG_BLAZE, sr.a.LSR_SPRING, sr.a.LSR_SUMMER, sr.a.LSR_FALL, sr.a.LSR_WINTER, sr.a.LSR_PEARL_MARBLE, sr.a.LSR_VOLCANIC, sr.a.LSR_BLAZE, sr.a.HSR_SPRING, sr.a.HSR_SUMMER, sr.a.HSR_FALL, sr.a.HSR_WINTER, sr.a.HSR_PEARL_MARBLE, sr.a.HSR_VOLCANIC, sr.a.HSR_BLAZE],
            pr = [sr.a.SP_FADE, sr.a.MP_FADE, sr.a.TAR_FADE, sr.a.CAR_FADE, sr.a.SAR_FADE, sr.a.LSMG_FADE, sr.a.CSMG_FADE, sr.a.BSG_FADE, sr.a.LSR_FADE, sr.a.HSR_FADE],
            Er = [sr.a.S_PEARL_MARBLE, sr.a.S_VOLCANIC, sr.a.S_BLAZE, sr.a.S_FADE], gr = ((ar = {})[rr.a.A] = {
                price: 100,
                name: "Crate A",
                color: "#c15907",
                drop_rates: [{tier: dl.a.NOTEWORTHY, rate: 44}, {tier: dl.a.PRECIOUS, rate: 40}, {
                    tier: dl.a.MAGNIFICENT,
                    rate: 10
                }, {tier: dl.a.EXTRAORDINARY, rate: 5}, {tier: dl.a.COVERT, rate: 1}],
                items: [].concat(Er, pr, dr, mr, ur)
            }, ar[rr.a.B] = {
                price: 50,
                name: "Crate B",
                color: "#172e59",
                drop_rates: [{tier: dl.a.NOTEWORTHY, rate: 50}, {tier: dl.a.PRECIOUS, rate: 45}, {
                    tier: dl.a.MAGNIFICENT,
                    rate: 5
                }],
                items: [].concat(dr, mr, ur)
            }, ar), hr = E.a.div.withConfig({
                displayName: "CratesShopScreen__CrateButton",
                componentId: "sc-85za9f-0"
            })(["padding:5px 0;width:100%;background-color:#3498db;color:white;display:flex;justify-content:center;align-items:center;position:absolute;bottom:0;left:0;font-size:16px;"]),
            fr = E.a.div.withConfig({
                displayName: "CratesShopScreen__CrateList",
                componentId: "sc-85za9f-1"
            })(["display:flex;margin-right:-20px;margin-left:20px;"]), yr = E.a.div.withConfig({
                displayName: "CratesShopScreen__Crate",
                componentId: "sc-85za9f-2"
            })(["padding:30px;padding-top:20px;padding-bottom:40px;background:rgba(70,70,70,0.6);background:radial-gradient(circle,rgba(100,100,100,0.6) 0%,rgba(60,60,60,0.6) 100%);margin-right:20px;position:relative;:hover{cursor:pointer;}"]),
            br = E.a.img.withConfig({
                displayName: "CratesShopScreen__CrateImage",
                componentId: "sc-85za9f-3"
            })(["display:block;width:128px;height:128px;"]), _r = E.a.div.withConfig({
                displayName: "CratesShopScreen__CrateName",
                componentId: "sc-85za9f-4"
            })(["position:absolute;top:10px;left:0;font-size:15px;text-align:center;width:100%;"]),
            vr = E.a.img.withConfig({
                displayName: "CratesShopScreen__MoneyIcon",
                componentId: "sc-85za9f-5"
            })(["width:32px;margin-right:10px;"]), wr = function (e) {
                for (var t = Object(p.b)(), a = [], n = function (e) {
                    var n = cr[e], r = gr[e];
                    a.push(l.a.createElement(yr, {
                        key: e, onClick: function () {
                            t(Object(S.j)(e))
                        }
                    }, l.a.createElement(br, {src: n.image}), l.a.createElement(_r, null, r.name), l.a.createElement(hr, null, l.a.createElement(vr, {src: Cl}), l.a.createElement("span", null, r.price))))
                }, r = 0; r < rr.a.__LENGTH; r++) n(r);
                return l.a.createElement(fr, null, a)
            }, xr = [{quantity: 300, price: .99, image_url: "/assets/images/vgems1.png"}, {
                quantity: 700,
                price: 1.99,
                image_url: "/assets/images/vgems2.png"
            }, {quantity: 3200, price: 7.99, image_url: "/assets/images/vgems3.png"}, {
                quantity: 6800,
                price: 14.99,
                image_url: "/assets/images/vgems4.png"
            }, {quantity: 18e3, price: 34.99, image_url: "/assets/images/vgems5.png"}, {
                quantity: 6e4,
                price: 99.99,
                image_url: "/assets/images/vgems6.png"
            }], Sr = E.a.div.withConfig({
                displayName: "GemsShopScreen__PurchaseButton",
                componentId: "cdpjl-0"
            })(["padding:8px 0;width:100%;background-color:#3498db;color:white;display:flex;justify-content:center;align-items:center;position:absolute;bottom:0;left:0;font-size:17px;"]),
            Cr = E.a.div.withConfig({
                displayName: "GemsShopScreen__Wrapper",
                componentId: "cdpjl-1"
            })(["margin-left:20px;"]), Ir = E.a.div.withConfig({
                displayName: "GemsShopScreen__GemPackList",
                componentId: "cdpjl-2"
            })(["display:flex;margin-right:-20px;flex-wrap:wrap;"]), Or = E.a.div.withConfig({
                displayName: "GemsShopScreen__ItemDisplay",
                componentId: "cdpjl-3"
            })(["padding:30px;padding-top:20px;padding-bottom:40px;background:rgba(70,70,70,0.6);background:radial-gradient(circle,rgba(100,100,100,0.6) 0%,rgba(60,60,60,0.6) 100%);margin-right:20px;margin-bottom:20px;position:relative;:hover{cursor:pointer;}"]),
            Nr = E.a.img.withConfig({
                displayName: "GemsShopScreen__ItemImage",
                componentId: "cdpjl-4"
            })(["display:block;width:128px;height:128px;"]), kr = E.a.div.withConfig({
                displayName: "GemsShopScreen__ItemName",
                componentId: "cdpjl-5"
            })(["position:absolute;top:10px;left:0;font-size:15px;text-align:center;width:100%;"]),
            Tr = E.a.div.withConfig({
                displayName: "GemsShopScreen__AdsRemovealTip",
                componentId: "cdpjl-6"
            })(["margin-bottom:20px;background-color:rgba(70,70,70,0.6);padding:10px;width:584px;"]),
            Rr = function (e) {
                Object(p.b)();
                for (var t = Object(n.useState)(!1), r = t[0], i = t[1], s = [], u = function (e) {
                    var t = xr[e];
                    s.push(l.a.createElement(Or, {
                        key: e, onClick: c()(o.a.mark((function t() {
                            var n, l;
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!r) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return i(!0), t.prev = 3, t.next = 6, fetch("/shop/xsolla_token", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json",
                                                "CSRF-Token": xl()
                                            },
                                            body: JSON.stringify({product_id: e})
                                        });
                                    case 6:
                                        return n = t.sent, t.next = 9, n.json();
                                    case 9:
                                        (l = t.sent).success && a.e(8).then(a.t.bind(null, 487, 7)).then((function (e) {
                                            var t = e.default;
                                            t.init({access_token: l.result.token, sandbox: !1}), t.open()
                                        }));
                                    case 11:
                                        return t.prev = 11, i(!1), t.finish(11);
                                    case 14:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[3, , 11, 14]])
                        })))
                    }, l.a.createElement(Nr, {src: t.image_url}), l.a.createElement(kr, null, t.quantity, " Vox Gems"), l.a.createElement(Sr, null, l.a.createElement("span", null, "$", t.price))))
                }, m = 0; m < xr.length; m++) u(m);
                var d = Object(n.useState)(!1), E = d[0];
                d[1];
                return l.a.createElement(Cr, null, E ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Tr, null, "Any purchase removes ads completely from the game! Thank you for your support :)"), l.a.createElement(Ir, null, s)) : "Sorry, the vox gems shop is currently closed. We will be back in the future!")
            }, Ar = E.a.div.withConfig({
                displayName: "ShopScreen__Wrapper",
                componentId: "ezp6ky-0"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;color:white;display:flex;flex-direction:column;width:100%;box-sizing:border-box;position:relative;"]),
            jr = E.a.div.withConfig({
                displayName: "ShopScreen__WrapperTitle",
                componentId: "ezp6ky-1"
            })(["font-size:30px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;"]),
            Mr = E.a.div.withConfig({displayName: "ShopScreen__Title", componentId: "ezp6ky-2"})([""]),
            Pr = E.a.img.withConfig({
                displayName: "ShopScreen__MoneyIcon",
                componentId: "ezp6ky-3"
            })(["width:32px;margin-right:10px;"]), Lr = E.a.div.withConfig({
                displayName: "ShopScreen__Money",
                componentId: "ezp6ky-4"
            })(["font-size:20px;display:flex;align-items:center;background-color:rgba(70,70,70,0.5);padding:5px 10px;"]),
            Fr = E.a.div.withConfig({
                displayName: "ShopScreen__NotLoggedInLockOverlay",
                componentId: "ezp6ky-5"
            })(["position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;font-size:50px;background-color:rgba(100,100,100,0.5);z-index:99999999;"]),
            Dr = E.a.div.withConfig({
                displayName: "ShopScreen__NotLoggedInText",
                componentId: "ezp6ky-6"
            })(["font-size:25px;margin-top:15px;"]), Gr = Object(E.a)(C.c).withConfig({
                displayName: "ShopScreen__ShopMenuItem",
                componentId: "ezp6ky-7"
            })(["display:block;color:white;text-decoration:none;padding:10px 20px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}padding:10px;margin-bottom:10px;font-size:15px;color:white;width:200px;background-color:rgba(70,70,70,0.6);:hover{cursor:pointer;background-color:rgba(100,100,100,0.6);}&.active{background-color:#e67e22;}"]),
            Br = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), a = Object(p.c)((function (e) {
                    return e.account.profile
                }));
                return l.a.createElement(Ar, null, t ? null : l.a.createElement(Fr, null, l.a.createElement(b.a, {icon: y.b}), l.a.createElement(Dr, null, "Login to earn rewards!")), l.a.createElement(jr, null, l.a.createElement(Mr, null, "Shop"), l.a.createElement(Lr, null, l.a.createElement(Pr, {src: Cl}), l.a.createElement("span", null, a.gems))), l.a.createElement(Sn, null, l.a.createElement(Cn, null, l.a.createElement(Gr, {
                    to: "/shop/crates",
                    isActive: function (e, t) {
                        return t.pathname.startsWith("/shop/crates") || "/shop" === t.pathname || "/shop/" === t.pathname
                    }
                }, "Crates"), l.a.createElement(Gr, {to: "/shop/gems"}, "Vox Gems")), l.a.createElement(On, null, l.a.createElement(ot.d, null, l.a.createElement(ot.b, {path: "/shop/crates"}, l.a.createElement(wr, null)), l.a.createElement(ot.b, {path: "/shop/gems"}, l.a.createElement(Rr, null)), l.a.createElement(ot.b, null, l.a.createElement(wr, null))))))
            }, Ur = E.a.div.withConfig({
                displayName: "AdminScreen__Wrapper",
                componentId: "x998h3-0"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;color:white;display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),
            zr = E.a.div.withConfig({
                displayName: "AdminScreen__WrapperTitle",
                componentId: "x998h3-1"
            })(["font-size:30px;margin-bottom:20px;"]), Yr = E.a.div.withConfig({
                displayName: "AdminScreen__SectionTitle",
                componentId: "x998h3-2"
            })(["font-size:25px;margin-bottom:10px;"]), qr = E.a.div.withConfig({
                displayName: "AdminScreen__CardRow",
                componentId: "x998h3-3"
            })(["display:flex;justify-content:space-between;"]), Wr = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.bgColor}}
            })).withConfig({
                displayName: "AdminScreen__Card",
                componentId: "x998h3-4"
            })(["padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px;margin-right:20px;border:1px solid white;flex:1;"]),
            Hr = E.a.div.withConfig({
                displayName: "AdminScreen__CardTitle",
                componentId: "x998h3-5"
            })(["font-weight:bold;margin-bottom:20px;"]),
            Vr = E.a.div.withConfig({displayName: "AdminScreen__CardContent", componentId: "x998h3-6"})([""]),
            Kr = E.a.table.withConfig({
                displayName: "AdminScreen__DataTable",
                componentId: "x998h3-7"
            })(["border-collapse:collapse;margin-bottom:10px;"]), Xr = E.a.tr.attrs((function (e) {
                return {style: {backgroundColor: e.bgColor}}
            })).withConfig({displayName: "AdminScreen__DataTableRow", componentId: "x998h3-8"})([""]),
            Jr = E.a.td.withConfig({
                displayName: "AdminScreen__DataTableCell",
                componentId: "x998h3-9"
            })(["border:1px solid white;padding:5px 10px;"]), Zr = l.a.lazy((function () {
                return Promise.all([a.e(4), a.e(10)]).then(a.t.bind(null, 488, 7)).then((function (e) {
                    return {default: e.Line}
                }))
            })), Qr = function (e) {
                Object(p.b)();
                var t = Object(n.useState)(!0), a = t[0], r = t[1], i = Object(n.useState)(!1), s = i[0], u = i[1],
                    m = Object(n.useState)(!1), d = m[0], E = m[1], g = Object(n.useState)(!0), h = g[0], f = g[1],
                    y = Object(n.useState)(!1), b = y[0], _ = y[1], v = Object(n.useState)({}), x = v[0], S = v[1],
                    C = Object(n.useState)([]), I = C[0], O = C[1], N = Object(p.c)((function (e) {
                        return e.account.authenticated
                    })), k = Object(p.c)((function (e) {
                        return e.account.profile
                    }));
                if (!N || -1 === k.permissions.indexOf("principal.dashboard")) return l.a.createElement(ot.a, {to: "/"});
                Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch("/admin/config");
                                case 3:
                                    return t = e.sent, e.next = 6, t.json();
                                case 6:
                                    if (!(a = e.sent).success) {
                                        e.next = 12;
                                        break
                                    }
                                    f(a.data.ENABLE_GEM_SHOP), _(a.data.ENABLE_UPDATE_MODE), e.next = 13;
                                    break;
                                case 12:
                                    throw new Error("Failed to load config data");
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(0), console.error("Failed to fetch config data");
                                case 18:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 15]])
                    })))()
                }), []), Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch("/admin/ccu?from=" + (Date.now() - 6048e5) + "&to=" + Date.now());
                                case 3:
                                    return t = e.sent, e.next = 6, t.json();
                                case 6:
                                    if (!(a = e.sent).success) {
                                        e.next = 11;
                                        break
                                    }
                                    O(a.data), e.next = 12;
                                    break;
                                case 11:
                                    throw new Error("Failed to load ccu data");
                                case 12:
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.error("Failed to fetch ccu data");
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 14]])
                    })))()
                }), []), Object(n.useEffect)((function () {
                    c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, u(!1), r(!0), e.next = 5, fetch("/admin/servers");
                                case 5:
                                    return t = e.sent, e.next = 8, t.json();
                                case 8:
                                    if (!(a = e.sent).success) {
                                        e.next = 13;
                                        break
                                    }
                                    S(a.data), e.next = 14;
                                    break;
                                case 13:
                                    throw new Error("Failed to load server");
                                case 14:
                                    u(!0), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.error("Failed to fetch server data");
                                case 20:
                                    return e.prev = 20, r(!1), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 17, 20, 23]])
                    })))();
                    var e = setInterval(c()(o.a.mark((function e() {
                        var t, a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/admin/servers");
                                case 2:
                                    return t = e.sent, e.next = 5, t.json();
                                case 5:
                                    (a = e.sent).success && S(a.data);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), 1e4);
                    return function () {
                        clearInterval(e)
                    }
                }), []);
                var T = function (e, t) {
                    return l.a.createElement(l.a.Fragment, null, l.a.createElement(Yr, null, e), t.length > 0 ? l.a.createElement(Kr, null, l.a.createElement("thead", null, l.a.createElement("tr", null, l.a.createElement(Jr, null, "Index"), l.a.createElement(Jr, null, "Name"), l.a.createElement(Jr, null, "Mode"), l.a.createElement(Jr, null, "Status"), l.a.createElement(Jr, null, "Version"), l.a.createElement(Jr, null, "Players"))), l.a.createElement("tbody", null, t.map((function (e, t) {
                        var a = "inherit";
                        return "LOBBY" === e.gameStatus || "STARTING" === e.gameStatus ? a = "green" : "PRE_STORM" === e.gameStatus || "IN_GAME" === e.gameStatus ? a = "orange" : "FINISHED" === e.gameStatus ? a = "yellow" : "OFFLINE" === e.gameStatus && (a = "red"), l.a.createElement(Xr, {
                            key: t,
                            bgColor: a
                        }, l.a.createElement(Jr, null, t + 1), l.a.createElement(Jr, null, e.name), l.a.createElement(Jr, null, e.gameMode), l.a.createElement(Jr, null, e.gameStatus), l.a.createElement(Jr, null, e.version), l.a.createElement(Jr, null, e.numPlayers + " / " + e.maxNumPlayers))
                    })))) : "No servers available")
                }, R = function (e, t, a, r, o) {
                    return l.a.createElement(n.Suspense, {fallback: "Loading chart..."}, l.a.createElement(Zr, {
                        data: {
                            datasets: [{
                                label: "Total Players",
                                data: t,
                                fill: !1,
                                backgroundColor: "#1abc9c",
                                borderColor: "#1abc9c"
                            }, {
                                label: "BR Players",
                                data: r,
                                fill: !1,
                                backgroundColor: "#e67e22",
                                borderColor: "#e67e22"
                            }, {
                                label: "CTG Players",
                                data: a,
                                fill: !1,
                                backgroundColor: "#3498db",
                                borderColor: "#3498db"
                            }, {
                                label: "SVV Players",
                                data: o,
                                fill: !1,
                                backgroundColor: "#9b59b6",
                                borderColor: "#9b59b6"
                            }]
                        },
                        options: {
                            title: {display: !0, text: e, fontColor: "white"},
                            legend: {labels: {fontColor: "white"}},
                            scales: {
                                xAxes: [{type: "time", ticks: {fontColor: "white"}}],
                                yAxes: [{type: "linear", gridLines: {color: "white"}, ticks: {fontColor: "white"}}]
                            }
                        }
                    }))
                };
                return l.a.createElement(Ur, null, l.a.createElement(zr, null, "Admin"), a ? "Loading..." : s ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Yr, null, "Actions"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Gem Shop"), l.a.createElement(Vr, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: h,
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a, n;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return E(!0), e.prev = 3, e.next = 6, fetch("/admin/set_gem_shop_enabled", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json",
                                                "CSRF-Token": xl()
                                            },
                                            body: JSON.stringify({flag: t.target.checked ? "true" : "false"})
                                        });
                                    case 6:
                                        return a = e.sent, e.next = 9, a.json();
                                    case 9:
                                        if (!(n = e.sent).success) {
                                            e.next = 14;
                                            break
                                        }
                                        f(n.data), e.next = 15;
                                        break;
                                    case 14:
                                        throw new Error("Failed to update gem shop data");
                                    case 15:
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(3), console.error("Failed to update gem shop data");
                                    case 20:
                                        return e.prev = 20, E(!1), e.finish(20);
                                    case 23:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[3, 17, 20, 23]])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }))), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Update Mode"), l.a.createElement(Vr, null, l.a.createElement("input", {
                    type: "checkbox",
                    checked: b,
                    onChange: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var a, n;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return E(!0), e.prev = 3, e.next = 6, fetch("/admin/set_update_mode_enabled", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json",
                                                "CSRF-Token": xl()
                                            },
                                            body: JSON.stringify({flag: t.target.checked ? "true" : "false"})
                                        });
                                    case 6:
                                        return a = e.sent, e.next = 9, a.json();
                                    case 9:
                                        if (!(n = e.sent).success) {
                                            e.next = 14;
                                            break
                                        }
                                        _(n.data), e.next = 15;
                                        break;
                                    case 14:
                                        throw new Error("Failed to update update mode data");
                                    case 15:
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(3), console.error("Failed to update update mode data");
                                    case 20:
                                        return e.prev = 20, E(!1), e.finish(20);
                                    case 23:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[3, 17, 20, 23]])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                })))), l.a.createElement(Yr, null, "Peak"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.peak_total_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.peak_total_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.peak_total_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.peak_total_svv_players))), l.a.createElement(Yr, null, "Global"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.total_online_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.total_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.total_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.total_svv_players))), l.a.createElement(Yr, null, "US WEST"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.regions[w.a.US_WEST].num_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.regions[w.a.US_WEST].num_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.regions[w.a.US_WEST].num_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.regions[w.a.US_WEST].num_svv_players))), l.a.createElement(Yr, null, "US EAST"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.regions[w.a.US_EAST].num_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.regions[w.a.US_EAST].num_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.regions[w.a.US_EAST].num_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.regions[w.a.US_EAST].num_svv_players))), l.a.createElement(Yr, null, "Europe"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.regions[w.a.EU].num_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.regions[w.a.EU].num_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.regions[w.a.EU].num_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.regions[w.a.EU].num_svv_players))), l.a.createElement(Yr, null, "Asia"), l.a.createElement(qr, null, l.a.createElement(Wr, null, l.a.createElement(Hr, null, "Online Players"), l.a.createElement(Vr, null, x.regions[w.a.ASIA].num_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "BR Players"), l.a.createElement(Vr, null, x.regions[w.a.ASIA].num_br_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "CTG Players"), l.a.createElement(Vr, null, x.regions[w.a.ASIA].num_ctg_players)), l.a.createElement(Wr, null, l.a.createElement(Hr, null, "SVV Players"), l.a.createElement(Vr, null, x.regions[w.a.ASIA].num_svv_players))), R("Global Players", I.map((function (e) {
                    return {y: e.total, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_ctg, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_br, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_svv, x: new Date(e.time)}
                }))), R("US WEST Players", I.map((function (e) {
                    return {y: e.total_us_west, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_ctg_us_west, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_br_us_west, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_svv_us_west, x: new Date(e.time)}
                }))), R("US EAST Players", I.map((function (e) {
                    return {y: e.total_us_east, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_ctg_us_east, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_br_us_east, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_svv_us_east, x: new Date(e.time)}
                }))), R("EU Players", I.map((function (e) {
                    return {y: e.total_eu, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_ctg_eu, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_br_eu, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_svv_eu, x: new Date(e.time)}
                }))), R("Asia Players", I.map((function (e) {
                    return {y: e.total_asia, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_ctg_asia, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_br_asia, x: new Date(e.time)}
                })), I.map((function (e) {
                    return {y: e.total_svv_asia, x: new Date(e.time)}
                }))), T("US WEST Servers", x.regions[w.a.US_WEST].servers), T("US EAST Servers", x.regions[w.a.US_EAST].servers), T("EU Servers", x.regions[w.a.EU].servers), T("ASIA Servers", x.regions[w.a.ASIA].servers)) : "Failed to load admin panel")
            }, $r = a(1), eo = a(158), to = a(54);

        function ao(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function no(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ao(Object(a), !0).forEach((function (t) {
                    d()(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ao(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        var lo, ro = E.a.div.withConfig({
                displayName: "RewardedAdPopup__Title",
                componentId: "sc-8t53fu-0"
            })(["margin-bottom:10px;font-size:20px;display:flex;align-items:center;"]), oo = E.a.div.withConfig({
                displayName: "RewardedAdPopup__SubTitle",
                componentId: "sc-8t53fu-1"
            })(["margin-bottom:20px;display:flex;align-items:center;"]), io = E.a.div.withConfig({
                displayName: "RewardedAdPopup__ButtonGroup",
                componentId: "sc-8t53fu-2"
            })(["display:flex;"]), co = E.a.div.withConfig({
                displayName: "RewardedAdPopup__SubmitButton",
                componentId: "sc-8t53fu-3"
            })(["margin-right:10px;padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            so = E.a.div.withConfig({
                displayName: "RewardedAdPopup__LaterButton",
                componentId: "sc-8t53fu-4"
            })(["padding:10px;background-color:#7f8c8d;text-align:center;color:white;:hover{background-color:#95a5a6;cursor:pointer;}"]),
            uo = E.a.div.withConfig({
                displayName: "RewardedAdPopup__DismissButton",
                componentId: "sc-8t53fu-5"
            })(["padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            mo = E.a.img.withConfig({
                displayName: "RewardedAdPopup__MoneyIcon",
                componentId: "sc-8t53fu-6"
            })(["width:24px;margin:0 10px;"]), po = E.a.div.withConfig({
                displayName: "RewardedAdPopup__PopupContent",
                componentId: "sc-8t53fu-7"
            })(["display:flex;flex-direction:column;align-items:center;"]), Eo = E.a.span.withConfig({
                displayName: "RewardedAdPopup__PlayIcon",
                componentId: "sc-8t53fu-8"
            })(["margin-right:5px;"]);
        !function (e) {
            e[e.PROMO = 0] = "PROMO", e[e.SUCCESS = 1] = "SUCCESS", e[e.ERROR = 2] = "ERROR", e[e.NONE = 3] = "NONE"
        }(lo || (lo = {}));
        var go = function (e) {
                var t = Object(p.b)(), a = F(), r = Object(p.c)((function (e) {
                        return e.account.authenticated
                    })), i = Object(p.c)((function (e) {
                        return e.account.profile
                    })), s = Object(p.c)((function (e) {
                        return e.ui.adSDKType
                    })), u = Object(p.c)((function (e) {
                        return e.settings.disableRewardedAdsPopup
                    })), m = Object(n.useState)(0), d = m[0], E = m[1],
                    g = Object(n.useState)(r && i.rewarded_ad_eligible && !u ? lo.PROMO : lo.NONE), f = g[0], y = g[1],
                    _ = Object(n.useState)(!1), v = _[0], w = _[1], x = function () {
                        var e = c()(o.a.mark((function e() {
                            var n, l, r, c;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, fetch("/shop/claim_ad", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json",
                                                "CSRF-Token": xl()
                                            }
                                        });
                                    case 3:
                                        return n = e.sent, e.next = 6, n.json();
                                    case 6:
                                        if (!(l = e.sent).success) {
                                            e.next = 13;
                                            break
                                        }
                                        E(l.result.amount), y(lo.SUCCESS), t(Object(h.a)(no(no({}, i), {}, {gems: i.gems + l.result.amount}))), e.next = 14;
                                        break;
                                    case 13:
                                        throw new Error("Failed to redeem");
                                    case 14:
                                        e.next = 20;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(0), console.error("Failed to redeem ad reward"), y(lo.ERROR);
                                    case 20:
                                        return e.prev = 20, w(!1), a && s === D.a.CRAZYGAMES && (r = window.CrazyGames.CrazySDK, (c = r.getInstance()).removeEventListener("adFinished", x), c.removeEventListener("adError", x)), e.finish(20);
                                    case 24:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 16, 20, 24]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), S = null;
                return f === lo.PROMO ? S = l.a.createElement(Nl, null, l.a.createElement(po, null, l.a.createElement(ro, null, l.a.createElement(mo, {src: Cl}), "Claim your free Vox Gems!", l.a.createElement(mo, {src: Cl})), l.a.createElement(oo, null, "You can do this after you complete a match every hour."), l.a.createElement(io, null, l.a.createElement(co, {
                    onClick: function () {
                        var e = c()(o.a.mark((function e(t) {
                            var n, l;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!v) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        w(!0), a ? s === D.a.CRAZYGAMES ? (n = window.CrazyGames.CrazySDK, (l = n.getInstance()).addEventListener("adFinished", x), l.addEventListener("adError", x), l.requestAd("rewarded")) : s === D.a.ADINPLAY ? (aiptag.cmd.player.push((function () {
                                            aiptag.adplayer = new aipPlayer({
                                                AD_WIDTH: 960,
                                                AD_HEIGHT: 540,
                                                AD_FULLSCREEN: !0,
                                                AD_CENTERPLAYER: !1,
                                                LOADING_TEXT: "Loading Advertisement...",
                                                PREROLL_ELEM: function () {
                                                    return document.getElementById("preroll")
                                                },
                                                AIP_COMPLETE: x,
                                                AIP_REMOVE: function () {
                                                }
                                            })
                                        })), void 0 !== aiptag.adplayer ? aiptag.cmd.player.push((function () {
                                            aiptag.adplayer.startPreRoll()
                                        })) : x()) : x() : x();
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, l.a.createElement(Eo, null, l.a.createElement(b.a, {icon: to.a})), "Claim Now"), l.a.createElement(so, {
                    onClick: function (e) {
                        y(lo.NONE)
                    }
                }, "Later")))) : f === lo.SUCCESS ? S = l.a.createElement(Nl, null, l.a.createElement(po, null, l.a.createElement(ro, null, "Thank you for supporting the game!"), l.a.createElement(oo, null, "You received", l.a.createElement(mo, {src: Cl}), d, " Vox Gems!"), l.a.createElement(uo, {
                    onClick: function () {
                        y(lo.NONE)
                    }
                }, "Great!"))) : f === lo.ERROR && (S = l.a.createElement(Nl, null, l.a.createElement(po, null, l.a.createElement(ro, null, "Sorry, an error has occurred"), l.a.createElement(oo, null, "Please try this again later :("), l.a.createElement(uo, {
                    onClick: function () {
                        y(lo.NONE)
                    }
                }, "Okay")))), S
            }, ho = E.a.div.withConfig({
                displayName: "GemPurchaseSuccessScreen__Wrapper",
                componentId: "p4u5hf-0"
            })(["background-color:rgba(0,0,0,0.8);padding:20px;color:white;display:flex;flex-direction:column;width:100%;box-sizing:border-box;position:relative;text-align:center;"]),
            fo = E.a.div.withConfig({
                displayName: "GemPurchaseSuccessScreen__WrapperTitle",
                componentId: "p4u5hf-1"
            })(["font-size:30px;"]), yo = E.a.div.withConfig({
                displayName: "GemPurchaseSuccessScreen__GemBanner",
                componentId: "p4u5hf-2"
            })(["font-size:50px;display:flex;align-items:center;justify-content:center;margin:60px 0;"]),
            bo = E.a.img.withConfig({
                displayName: "GemPurchaseSuccessScreen__MoneyIcon",
                componentId: "p4u5hf-3"
            })(["width:60px;margin:0 20px;"]), _o = E.a.div.withConfig({
                displayName: "GemPurchaseSuccessScreen__Content",
                componentId: "p4u5hf-4"
            })(["font-size:20px;"]), vo = E.a.a.withConfig({
                displayName: "GemPurchaseSuccessScreen__NativeLink",
                componentId: "p4u5hf-5"
            })(["color:#74b9ff;"]), wo = function (e) {
                Object(p.b)();
                var t = Object(n.useState)(0), a = t[0], r = t[1];
                return Object(n.useEffect)((function () {
                    var e = new URLSearchParams(window.location.search), t = a;
                    e.has("product_id") && (t = parseInt(e.get("product_id")), isNaN(t) || r(t))
                }), [window.location.search]), l.a.createElement(ho, null, l.a.createElement(fo, null, "Thank you for your support!"), l.a.createElement(yo, null, l.a.createElement(bo, {src: Cl}), xr[a].quantity, " Vox Gems ", l.a.createElement(bo, {src: Cl})), l.a.createElement(_o, null, "will be credited to your account soon. If you believe that there's an error, please contact ", l.a.createElement(vo, {href: "mailto:voxiomgame@gmail.com"}, "voxiomgame@gmail.com"), " for assistance!"))
            }, xo = function (e) {
                Object(p.b)();
                var t = Object(n.useState)([]), a = t[0], r = t[1], o = Object(n.useState)(!0), i = o[0], c = o[1],
                    s = Object(n.useState)(!0), u = s[0], m = s[1], d = Object(n.useState)(rr.a.A), E = d[0], g = d[1];
                return Object(n.useEffect)((function () {
                    var e = new URLSearchParams(window.location.search);
                    if (e.has("crate_type")) {
                        var t = parseInt(e.get("crate_type"));
                        if (!isNaN(t) && t >= 0 && t < rr.a.__LENGTH) {
                            g(t);
                            var a = 1;
                            r(gr[t].items.map((function (e) {
                                return {
                                    item_id: a++,
                                    slot: 0,
                                    equipped: !1,
                                    type: e,
                                    seed: 0,
                                    creation_time: new Date,
                                    obtained_time: new Date,
                                    equipped_time: new Date
                                }
                            })))
                        } else c(!1)
                    } else c(!1);
                    m(!1)
                }), [window.location.search]), l.a.createElement(nr, {
                    title: i ? "Potential Items in " + gr[E].name + " (Patterns Vary)" : "Invalid Crate",
                    success: i,
                    loadErrorMessage: "Crate doesn't exist!",
                    isLoading: u,
                    inventory: a,
                    setInventory: r,
                    requireAuthentication: !1,
                    canEquip: !1,
                    canUnequip: !1,
                    canSell: !1
                })
            }, So = E.a.div.attrs((function (e) {
                return e.background ? {style: {backgroundColor: "rgba(0, 0, 0, 0.8)", width: 970, marginBottom: 20}} : {}
            })).withConfig({
                displayName: "AdLeaderboardBanner__Wrapper",
                componentId: "sc-1o26bju-0"
            })(["height:90px;display:flex;justify-content:center;pointer-events:auto;"]), Co = function (e) {
                var t = e.id, a = e.background, r = void 0 === a || a, o = e.triggerAds, i = void 0 === o || o, c = F(),
                    s = Object(p.c)((function (e) {
                        return e.ui.adSDKType
                    }));
                return Object(n.useEffect)((function () {
                    if (c && i) {
                        var e = function () {
                            document.hidden || (s === D.a.CRAZYGAMES ? window.CrazyGames.CrazySDK.getInstance().requestBanner([{
                                containerId: t,
                                size: "728x90"
                            }]) : s === D.a.ADINPLAY && aiptag.cmd.display.push((function () {
                                aipDisplayTag.display(t)
                            })))
                        };
                        e();
                        var a = window.setInterval(e, x.a.AD_REFRESH_RATE);
                        return function () {
                            window.clearInterval(a)
                        }
                    }
                }), [s, c, i]), c ? l.a.createElement(So, {id: t, background: r}) : null
            };

        function Io(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function Oo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Io(Object(a), !0).forEach((function (t) {
                    d()(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Io(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        var No, ko = E.a.div.withConfig({
                displayName: "JoinPanel__WrapperCenter",
                componentId: "sc-145bfr8-0"
            })(["width:100%;height:100%;top:0;left:0;position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;"]),
            To = E.a.div.withConfig({
                displayName: "JoinPanel__WrapperLong",
                componentId: "sc-145bfr8-1"
            })(["margin:50px 0;display:flex;align-items:center;flex-direction:column;"]), Ro = E.a.div.withConfig({
                displayName: "JoinPanel__WrapperContent",
                componentId: "sc-145bfr8-2"
            })(["display:flex;flex-direction:column;align-items:center;width:970px;pointer-events:auto;"]),
            Ao = E.a.img.withConfig({
                displayName: "JoinPanel__Logo",
                componentId: "sc-145bfr8-3"
            })(["display:block;width:500px;"]), jo = E.a.div.withConfig({
                displayName: "JoinPanel__LogoSubTitle",
                componentId: "sc-145bfr8-4"
            })(["margin-bottom:20px;font-size:20px;"]), Mo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangePanelWrapper",
                componentId: "sc-145bfr8-5"
            })(["position:absolute;width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center;z-index:999999999;pointer-events:auto;background-color:rgba(0,0,0,0.5);"]),
            Po = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangePanel",
                componentId: "sc-145bfr8-6"
            })(["width:500px;background-color:rgb(50,50,50);display:flex;flex-direction:column;align-items:center;padding:20px;"]),
            Lo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeTitle",
                componentId: "sc-145bfr8-7"
            })(["margin-bottom:10px;font-size:20px;"]), Fo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeSubTitle",
                componentId: "sc-145bfr8-8"
            })(["margin-bottom:20px;"]), Do = E.a.input.withConfig({
                displayName: "JoinPanel__NameChangeInput",
                componentId: "sc-145bfr8-9"
            })(["padding:10px;background-color:rgba(150,150,150,0.5);outline:none;border:none;color:white;width:100%;box-sizing:border-box;::placeholder{color:grey;}"]),
            Go = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeButtonGroup",
                componentId: "sc-145bfr8-10"
            })(["display:flex;margin-top:20px;"]), Bo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeSubmit",
                componentId: "sc-145bfr8-11"
            })(["margin-right:10px;padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            Uo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeLater",
                componentId: "sc-145bfr8-12"
            })(["padding:10px;background-color:#7f8c8d;text-align:center;color:white;:hover{background-color:#95a5a6;cursor:pointer;}"]),
            zo = E.a.div.withConfig({
                displayName: "JoinPanel__NameChangeError",
                componentId: "sc-145bfr8-13"
            })(["margin-top:10px;color:#e74c3c;"]), Yo = E.a.div.withConfig({
                displayName: "JoinPanel__Menu",
                componentId: "sc-145bfr8-14"
            })(["display:flex;width:970px;margin-bottom:20px;background-color:black;pointer-events:auto;justify-content:space-between;"]),
            qo = E.a.div.withConfig({
                displayName: "JoinPanel__LeftSideMenu",
                componentId: "sc-145bfr8-15"
            })(["display:flex;"]), Wo = E.a.div.withConfig({
                displayName: "JoinPanel__RightSideMenu",
                componentId: "sc-145bfr8-16"
            })(["display:flex;justify-content:flex-end;"]), Ho = Object(E.a)(C.c).withConfig({
                displayName: "JoinPanel__MenuItem",
                componentId: "sc-145bfr8-17"
            })(["color:white;text-decoration:none;padding:20px 30px;background-color:black;:hover{cursor:pointer;background-color:rgb(30,30,30);}&.active{background-color:rgb(50,50,50);}"]),
            Vo = E.a.a.withConfig({
                displayName: "JoinPanel__MenuItemLink",
                componentId: "sc-145bfr8-18"
            })(["display:block;padding:20px 30px;background-color:black;color:white;text-decoration:none;:hover{cursor:pointer;background-color:rgb(30,30,30);}"]);
        !function (e) {
            e[e.PLAY = 0] = "PLAY", e[e.ACCOUNT = 1] = "ACCOUNT", e[e.LEADERBOARD = 2] = "LEADERBOARD", e[e.NEWS = 3] = "NEWS", e[e.UPDATES = 4] = "UPDATES"
        }(No || (No = {}));
        var Ko = function (e) {
            return l.a.createElement(Ba.Scrollbars, {
                renderView: function (e) {
                    return l.a.createElement("div", u()({}, e, {style: Oo(Oo({}, e.style), {}, {overflowX: "hidden"})}))
                },
                style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pointerEvents: "auto"
                }
            }, e.children)
        }, Xo = function (e) {
            var t = Object(p.c)((function (e) {
                    return e.ui.connectionStatus
                })), a = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), r = Object(p.c)((function (e) {
                    return e.account.profile
                })), i = Object(n.useState)(!1), s = i[0], u = i[1], m = Object(n.useState)(""), d = m[0], E = m[1],
                f = Object(n.useState)(!0), y = f[0], _ = f[1], v = Object(n.useState)(""), w = v[0], x = v[1],
                C = Object(p.b)();
            Object(n.useEffect)((function () {
                u(a && !r.has_nickname)
            }), [a, r.has_nickname]);
            var I = a ? To : ko,
                O = l.a.createElement(l.a.Fragment, null, l.a.createElement(Ao, {src: eo.a}), l.a.createElement(jo, null, "Open Alpha Testing - Pre-Season"), l.a.createElement(Yo, null, l.a.createElement(qo, null, l.a.createElement(Ho, {
                    exact: !0,
                    to: "/"
                }, "Game"), l.a.createElement(Ho, {to: "/account"}, "Account"), l.a.createElement(Ho, {
                    to: "/leaderboard/ctg",
                    isActive: function (e, t) {
                        return t.pathname.startsWith("/leaderboard")
                    }
                }, "Leaderboard"), l.a.createElement(Ho, {to: "/loadouts"}, "Loadouts"), l.a.createElement(Ho, {
                    to: "/shop/crates",
                    isActive: function (e, t) {
                        return t.pathname.startsWith("/shop")
                    }
                }, "Shop"), l.a.createElement(Ho, {to: "/changelog"}, "Updates")), l.a.createElement(Wo, null, l.a.createElement(Ho, {
                    to: "/settings",
                    onClick: function (e) {
                        C(Object(S.s)($r.a.SETTINGS))
                    }
                }, l.a.createElement(b.a, {icon: pl.b})), a ? l.a.createElement(Vo, {href: "/auth/logout"}, "Logout") : null)));
            return t === g.a.DISCONNECTED || t === g.a.CONNECTING ? l.a.createElement(l.a.Fragment, null, s ? l.a.createElement(Mo, null, l.a.createElement(Po, null, l.a.createElement(Lo, null, "Welcome soldier! Please choose your username!"), l.a.createElement(Fo, null, "Choose carefully! You will not be able to change it"), l.a.createElement(Do, {
                type: "text",
                minLength: 3,
                maxLength: 18,
                value: d,
                placeholder: "Enter your username here...",
                onChange: function (e) {
                    y && E(e.target.value)
                }
            }), w.length > 0 ? l.a.createElement(zo, null, w) : null, l.a.createElement(Go, null, l.a.createElement(Bo, {
                onClick: function () {
                    var e = c()(o.a.mark((function e(t) {
                        var a, n;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (y) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return _(!1), e.prev = 3, e.next = 6, fetch("/profile/name_change", {
                                        method: "POST",
                                        headers: {Accept: "application/json", "Content-Type": "application/json"},
                                        body: JSON.stringify({name: d})
                                    });
                                case 6:
                                    return a = e.sent, e.next = 9, a.json();
                                case 9:
                                    (n = e.sent).success ? (x(""), r.nickname = d, C(Object(h.a)(r)), u(!1)) : x(n.error), e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(3), x("An unknown error has ocurred, please try again!");
                                case 16:
                                    return e.prev = 16, _(!0), e.finish(16);
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[3, 13, 16, 19]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, "Save"), l.a.createElement(Uo, {
                onClick: function (e) {
                    u(!1)
                }
            }, "Later")))) : null, l.a.createElement(go, null), l.a.createElement(ot.d, null, l.a.createElement(ot.b, {
                exact: !0,
                path: "/"
            }, l.a.createElement(ko, null, O, l.a.createElement(Ro, null, l.a.createElement(Te, null)))), l.a.createElement(ot.b, {path: "/account"}, l.a.createElement(Ko, null, l.a.createElement(I, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(sa, null))))), l.a.createElement(ot.b, {path: "/leaderboard"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(ut, null))))), l.a.createElement(ot.b, {path: "/player/:nickname"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(ma, null))))), l.a.createElement(ot.b, {path: "/match/br/:id"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(qn, null))))), l.a.createElement(ot.b, {path: "/match/ctg/:id"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(cl, null))))), l.a.createElement(ot.b, {path: "/settings"}, l.a.createElement(ko, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(jn, null)))), l.a.createElement(ot.b, {path: "/loadouts"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(lr, null))))), l.a.createElement(ot.b, {path: "/shop"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(Br, null))))), l.a.createElement(ot.b, {path: "/admin"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Qr, null))))), l.a.createElement(ot.b, {path: "/changelog"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(xa, null))))), l.a.createElement(ot.b, {path: "/payment_success"}, l.a.createElement(ko, null, O, l.a.createElement(Ro, null, l.a.createElement(wo, null)))), l.a.createElement(ot.b, {path: "/crate_content"}, l.a.createElement(Ko, null, l.a.createElement(To, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(xo, null))))), l.a.createElement(ot.b, null, l.a.createElement(ko, null, O, l.a.createElement(Ro, null, l.a.createElement(Co, {id: "voxiom-io_728x90_1"}), l.a.createElement(Ia, null)))))) : null
        }, Jo = a(34);

        function Zo(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Qo(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Qo(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    a && (e = a);
                    var n = 0;
                    return function () {
                        return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (a = e[Symbol.iterator]()).next.bind(a)
        }

        function Qo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var $o, ei = function (e) {
                for (var t, a = [], n = "", r = Object(Jo.l)(255, 255, 255), o = [], i = Zo(e); !(t = i()).done;) {
                    var c = t.value;
                    o.push(c)
                }
                for (var s = 0, u = 0; u < o.length; u++) {
                    var m = o[u].codePointAt(0);
                    if (8705 === (void 0 === m ? 0 : m)) {
                        if (n.length > 0 && (a.push(l.a.createElement("span", {
                            key: s++,
                            style: {color: "rgb(" + r.x + ", " + r.y + ", " + r.z + ")"}
                        }, n)), n = ""), u < o.length - 4) {
                            var d = o[u + 1].codePointAt(0), p = Math.min(256, Math.max(1, void 0 === d ? 0 : d)),
                                E = o[u + 2].codePointAt(0), g = Math.min(256, Math.max(1, void 0 === E ? 0 : E)),
                                h = o[u + 3].codePointAt(0), f = Math.min(256, Math.max(1, void 0 === h ? 0 : h));
                            r.x = p - 1, r.y = g - 1, r.z = f - 1, u += 3
                        }
                    } else n += o[u]
                }
                return n.length > 0 && (a.push(l.a.createElement("span", {
                    key: s++,
                    style: {color: "rgb(" + r.x + ", " + r.y + ", " + r.z + ")"}
                }, n)), n = ""), a
            }, ti = (a(180), E.a.div.withConfig({
                displayName: "Chat__Wrapper",
                componentId: "sc-16u2dec-0"
            })(["position:absolute;bottom:120px;left:20px;width:350px;color:white;z-index:100000;font-size:13px;pointer-events:auto;"])),
            ai = E.a.div.withConfig({
                displayName: "Chat__ChatMessage",
                componentId: "sc-16u2dec-1"
            })(["margin:10px;padding-left:20px;text-indent:-20px;text-shadow:1px 1px 0 #3b3b3b;font-size:14px;"]),
            ni = E.a.input.withConfig({
                displayName: "Chat__ChatInput",
                componentId: "sc-16u2dec-2"
            })(["background-color:rgba(0,0,0,0.4);border:none;outline:none;width:100%;color:white;padding:10px;margin:0;font-size:13px;::placeholder{color:#bbbbbb;opacity:1;}"]),
            li = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.settings.chatVisible
                })), a = Object(p.c)((function (e) {
                    return e.ui.gameChatMessages
                })).map((function (e, t) {
                    return l.a.createElement(ai, {key: "msg" + t}, ei(e))
                })), r = Object(p.c)((function (e) {
                    return e.ui.gameChatPendingMessage
                })), o = Object(p.c)((function (e) {
                    return e.ui.gameChatIsEditing
                })), i = Object(n.useRef)(null);
                Object(n.useEffect)((function () {
                    if (null !== i.current) {
                        var e = i.current;
                        o ? e.focus() : e.blur()
                    }
                }));
                var c = Object(p.c)((function (e) {
                    return e.ui.enableChat
                })), s = Object(p.b)(), u = Object(n.useRef)(null);
                return Object(n.useEffect)((function () {
                    if (null !== u.current) {
                        var e = u.current;
                        e.getScrollHeight() - e.getScrollTop() <= 1.5 * e.getClientHeight() && e.scrollToBottom()
                    }
                })), t ? l.a.createElement(ti, null, 0 === a.length ? null : l.a.createElement(Ba.Scrollbars, {
                    autoHeight: !0,
                    autoHeightMax: 150,
                    ref: u,
                    style: {width: 370, backgroundColor: "rgba(0, 0, 0, 0.3)"}
                }, a), c ? l.a.createElement(ni, {
                    maxLength: 100,
                    type: "text",
                    value: r,
                    placeholder: "Press enter to chat!",
                    ref: i,
                    onChange: function (e) {
                        s(Object(S.h)(e.target.value))
                    },
                    onFocus: function (e) {
                        s(Object(S.E)(!0))
                    },
                    onBlur: function (e) {
                        s(Object(S.E)(!1))
                    }
                }) : null) : null
            }, ri = a(87), oi = E.a.div.withConfig({
                displayName: "PlayerCondition__Wrapper",
                componentId: "sc-1q9si6a-0"
            })(["position:absolute;bottom:20px;left:20px;pointer-events:none;"]), ii = E.a.div.withConfig({
                displayName: "PlayerCondition__HealthBarGroup",
                componentId: "sc-1q9si6a-1"
            })(["display:flex;"]), ci = E.a.div.attrs((function (e) {
                return {style: {marginRight: e.marginRight, left: e.left, position: "relative"}}
            })).withConfig({
                displayName: "PlayerCondition__HealthBarIcon",
                componentId: "sc-1q9si6a-2"
            })(["display:flex;align-items:center;justify-content:center;font-size:20px;"]), si = E.a.div.withConfig({
                displayName: "PlayerCondition__HealthBarOuter",
                componentId: "sc-1q9si6a-3"
            })(["width:300px;height:25px;border:1px solid white;position:relative;background-color:rgba(0,0,0,0.4);"]),
            ui = E.a.div.attrs((function (e) {
                var t = e.value, a = e.maxValue;
                return {
                    style: {
                        backgroundColor: e.color,
                        width: t / a * 100 + "%",
                        transition: "width " + e.speed + "s"
                    }
                }
            })).withConfig({
                displayName: "PlayerCondition__HealthBarInner",
                componentId: "sc-1q9si6a-4"
            })(["position:absolute;height:100%;display:flex;align-items:center;"]), mi = E.a.div.withConfig({
                displayName: "PlayerCondition__HealthText",
                componentId: "sc-1q9si6a-5"
            })(["padding:5px;white-space:nowrap;"]), di = E.a.div.withConfig({
                displayName: "PlayerCondition__Space",
                componentId: "sc-1q9si6a-6"
            })(["height:5px;"]), pi = E.a.div.withConfig({
                displayName: "PlayerCondition__HelpTexts",
                componentId: "sc-1q9si6a-7"
            })(["display:flex;"]), Ei = E.a.div.withConfig({
                displayName: "PlayerCondition__HelpText",
                componentId: "sc-1q9si6a-8"
            })(["margin-right:20px;margin-bottom:10px;"]), gi = E.a.span.withConfig({
                displayName: "PlayerCondition__KeyIcon",
                componentId: "sc-1q9si6a-9"
            })(["border:1px solid white;padding:1px 5px;"]), hi = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.maxHealth
                })), a = Object(p.c)((function (e) {
                    return e.gameData.health
                })), n = Object(p.c)((function (e) {
                    return e.gameData.maxShield
                })), r = Object(p.c)((function (e) {
                    return e.gameData.shield
                })), o = Object(ri.g)(Object(p.c)((function (e) {
                    return e.settings.keys[Ua.b.SPRINT].keyName
                }))), i = Object(ri.g)(Object(p.c)((function (e) {
                    return e.settings.keys[Ua.b.CROUCH].keyName
                })));
                Object(p.b)();
                return l.a.createElement(oi, null, l.a.createElement(pi, null, l.a.createElement(Ei, null, l.a.createElement(gi, null, o), " to sprint"), l.a.createElement(Ei, null, l.a.createElement(gi, null, i), " to crouch")), l.a.createElement(ii, null, l.a.createElement(ci, {
                    marginRight: 9,
                    left: 0
                }, l.a.createElement(b.a, {icon: pl.d})), l.a.createElement(si, null, l.a.createElement(ui, {
                    value: r,
                    maxValue: n,
                    color: "#ffffff",
                    speed: 1
                }), l.a.createElement(ui, {
                    value: r,
                    maxValue: n,
                    color: "#ffb900",
                    speed: .5
                }, l.a.createElement(mi, null, r, " / ", n)))), l.a.createElement(di, null), l.a.createElement(ii, null, l.a.createElement(ci, {
                    marginRight: 11,
                    left: 1
                }, l.a.createElement(b.a, {icon: pl.c})), l.a.createElement(si, null, l.a.createElement(ui, {
                    value: a,
                    maxValue: t,
                    color: "#ffffff",
                    speed: 1
                }), l.a.createElement(ui, {
                    value: a,
                    maxValue: t,
                    color: "#2ecc71",
                    speed: .5
                }, l.a.createElement(mi, null, a, " / ", t)))))
            }, fi = E.a.div.withConfig({
                displayName: "KillFeed__Wrapper",
                componentId: "sc-1xasb9r-0"
            })(["position:absolute;top:20px;right:20px;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;"]),
            yi = E.a.div.withConfig({
                displayName: "KillFeed__KillFeedMessageWrapper",
                componentId: "sc-1xasb9r-1"
            })(["padding:5px;margin:2px;background-color:rgba(0,0,0,0.5);"]), bi = E.a.div.withConfig({
                displayName: "KillFeed__TextWrapper",
                componentId: "sc-1xasb9r-2"
            })(["display:inline-block;color:", ""], (function (e) {
                return e.color
            })), _i = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.killFeedMessages
                })), a = (Object(p.b)(), t.map((function (e) {
                    var t = e.template.split(/\{\{|}\}/g).map((function (t, a) {
                        return "killer" === t ? l.a.createElement(bi, {
                            key: a,
                            color: e.killerColor
                        }, e.killerName) : "victim" === t ? l.a.createElement(bi, {
                            key: a,
                            color: e.victimColor
                        }, e.victimName) : "item" === t ? l.a.createElement(bi, {
                            key: a,
                            color: e.itemColor
                        }, e.itemName) : "" !== t ? l.a.createElement("span", {key: a}, t) : void 0
                    }));
                    return l.a.createElement(yi, {key: e.id}, t)
                })));
                return l.a.createElement(fi, null, a)
            }, vi = a(25), wi = E.a.img.attrs((function (e) {
                return {style: {backgroundColor: e.tierColor}}
            })).withConfig({
                displayName: "ItemIcon__ItemImage",
                componentId: "sc-1g14mzg-0"
            })(["display:block;width:100%;height:100%;"]), xi = E.a.div.withConfig({
                displayName: "ItemIcon__ItemCount",
                componentId: "sc-1g14mzg-1"
            })(["position:absolute;bottom:10%;right:10%;color:white;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;"]),
            Si = E.a.div.withConfig({
                displayName: "ItemIcon__ItemDurability",
                componentId: "sc-1g14mzg-2"
            })(["height:100%;width:5px;background-color:#6f5252;position:absolute;left:0px;top:0px;display:flex;align-items:flex-end;"]),
            Ci = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: "#a0ff23", height: e.value + "%"}}
            })).withConfig({
                displayName: "ItemIcon__DurabilityValue",
                componentId: "sc-1g14mzg-3"
            })(["width:100%;z-index:1;"]), Ii = function (e) {
                Object(p.b)();
                var t = "rgba(255, 255, 255, 0.4)";
                return e.type !== k.a.EMPTY && (t = Object(vi.b)(e.tier)), e.type === k.a.EMPTY ? null : l.a.createElement(l.a.Fragment, null, l.a.createElement(wi, {
                    src: N.a.getItemIcon(e.type),
                    tierColor: t
                }), e.count > 1 ? l.a.createElement(xi, null, e.count) : null, e.durability > 0 ? l.a.createElement(Si, null, l.a.createElement(Ci, {value: e.durability})) : null)
            };
        !function (e) {
            e[e.FULL_INVENTORY = 0] = "FULL_INVENTORY", e[e.QUICK_INVENTORY = 1] = "QUICK_INVENTORY"
        }($o || ($o = {}));
        var Oi = E.a.div.withConfig({
                displayName: "ItemSlot__Item",
                componentId: "sc-16sn8qo-0"
            })(["position:relative;width:", "px;height:", "px;margin:3px;border:3px solid rgba(100,100,100,1);background-color:rgba(255,255,255,0.4);"], (function (e) {
                return e.size
            }), (function (e) {
                return e.size
            })), Ni = Object(E.a)(Oi).withConfig({
                displayName: "ItemSlot__SelectedItem",
                componentId: "sc-16sn8qo-1"
            })(["position:relative;top:-10px;margin:1px;border:5px solid rgba(255,255,255,1);"]),
            ki = Object(E.a)(Oi).withConfig({
                displayName: "ItemSlot__SelectedItemFullInventory",
                componentId: "sc-16sn8qo-2"
            })(["position:relative;margin:1px;border:5px solid rgba(255,255,255,1);"]), Ti = E.a.div.withConfig({
                displayName: "ItemSlot__GrayOut",
                componentId: "sc-16sn8qo-3"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.6);"]),
            Ri = function (e) {
                Object(p.b)();
                var t = e.selected ? e.selectedStyle === $o.FULL_INVENTORY ? ki : Ni : Oi, a = 64;
                void 0 !== e.size && (a = e.size);
                var n = null;
                return !1 === e.craftable && (n = l.a.createElement(Ti, null)), l.a.createElement(t, {
                    size: a,
                    onMouseDown: e.onMouseDown,
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave
                }, l.a.createElement(Ii, {type: e.type, tier: e.tier, count: e.count, durability: e.durability}), n)
            }, Ai = E.a.div.withConfig({
                displayName: "ItemUsage__Wrapper",
                componentId: "twdweh-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]),
            ji = E.a.div.withConfig({
                displayName: "ItemUsage__ItemUsageView",
                componentId: "twdweh-1"
            })(["position:relative;top:10%;display:flex;padding:10px;background-color:rgba(0,0,0,0.5);"]),
            Mi = E.a.div.withConfig({
                displayName: "ItemUsage__UsageDetails",
                componentId: "twdweh-2"
            })(["display:flex;flex-direction:column;margin-left:10px;"]), Pi = E.a.div.withConfig({
                displayName: "ItemUsage__ItemUsageTips",
                componentId: "twdweh-3"
            })(["padding-top:5px;"]), Li = E.a.div.withConfig({
                displayName: "ItemUsage__UsageProgressOuter",
                componentId: "twdweh-4"
            })(["width:100%;min-width:150px;height:15px;border:1px solid white;margin-top:10px;"]),
            Fi = E.a.div.attrs((function (e) {
                return {style: {width: e.progress + "%"}}
            })).withConfig({
                displayName: "ItemUsage__UsageProgressInner",
                componentId: "twdweh-5"
            })(["height:100%;background-color:white;transition:width:0.1s;"]), Di = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.itemUsage
                }));
                return t.type === k.a.EMPTY ? null : l.a.createElement(Ai, null, l.a.createElement(ji, null, l.a.createElement(Ri, {
                    size: 48,
                    selected: !1,
                    type: t.type,
                    tier: t.tier,
                    count: 1
                }), l.a.createElement(Mi, null, l.a.createElement(Pi, null, t.tip), l.a.createElement(Li, null, l.a.createElement(Fi, {progress: t.progress})))))
            }, Gi = E.a.div.withConfig({
                displayName: "ItemPickupHint__Wrapper",
                componentId: "kf07hs-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]),
            Bi = E.a.div.withConfig({
                displayName: "ItemPickupHint__ItemPickupView",
                componentId: "kf07hs-1"
            })(["position:relative;top:-10%;display:flex;padding:10px;background-color:rgba(0,0,0,0.5);"]),
            Ui = E.a.div.withConfig({
                displayName: "ItemPickupHint__ItemPickupDetails",
                componentId: "kf07hs-2"
            })(["display:flex;flex-direction:column;justify-content:space-between;margin-left:10px;"]),
            zi = E.a.div.withConfig({
                displayName: "ItemPickupHint__ItemPickupTips",
                componentId: "kf07hs-3"
            })(["padding-top:5px;"]), Yi = E.a.div.attrs((function (e) {
                return {style: {color: e.itemColor}}
            })).withConfig({
                displayName: "ItemPickupHint__ItemPickupName",
                componentId: "kf07hs-4"
            })(["padding-bottom:5px;"]), qi = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.itemPickupHint
                }));
                return t.type === k.a.EMPTY ? null : l.a.createElement(Gi, null, l.a.createElement(Bi, null, l.a.createElement(Ri, {
                    size: 48,
                    selected: !1,
                    type: t.type,
                    tier: t.tier,
                    count: t.count
                }), l.a.createElement(Ui, null, l.a.createElement(zi, null, t.tip), l.a.createElement(Yi, {itemColor: Object(dl.d)(t.cosmeticsTier)}, t.name))))
            }, Wi = E.a.div.withConfig({
                displayName: "Ammo__Wrapper",
                componentId: "sc-1soy96x-0"
            })(["margin-right:10px;margin-top:50px;"]), Hi = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.ammoCountVisible
                })), a = Object(p.c)((function (e) {
                    return e.gameData.clipAmmoCount
                })), n = Object(p.c)((function (e) {
                    return e.gameData.reserveAmmoCount
                }));
                Object(p.b)();
                return t ? l.a.createElement(Wi, null, "Ammo: ", a, " / ", n) : null
            }, Vi = E.a.div.withConfig({
                displayName: "Inventory__Wrapper",
                componentId: "sc-1mujvi6-0"
            })(["position:absolute;bottom:20px;right:20px;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;"]),
            Ki = E.a.div.withConfig({
                displayName: "Inventory__HotSlotRow",
                componentId: "sc-1mujvi6-1"
            })(["display:flex;"]), Xi = E.a.div.withConfig({
                displayName: "Inventory__ItemSlotWrapper",
                componentId: "sc-1mujvi6-2"
            })(["display:flex;flex-direction:column;align-items:center;"]), Ji = E.a.div.withConfig({
                displayName: "Inventory__InventoryText",
                componentId: "sc-1mujvi6-3"
            })(["margin-bottom:20px;margin-right:5px;"]), Zi = E.a.span.withConfig({
                displayName: "Inventory__KeyIcon",
                componentId: "sc-1mujvi6-4"
            })(["border:1px solid white;padding:1px 5px;"]), Qi = Object(E.a)(Zi).withConfig({
                displayName: "Inventory__ItemSlotName",
                componentId: "sc-1mujvi6-5"
            })(["border:1px solid white;padding:1px 5px;margin-top:5px;"]), $i = function (e) {
                for (var t = Object(p.c)((function (e) {
                    return e.gameData.inventory
                })), a = Object(p.c)((function (e) {
                    return e.gameData.selectedItem
                })), n = Object(ri.g)(Object(p.c)((function (e) {
                    return e.settings.keys[Ua.b.TOGGLE_INVENTORY].keyName
                }))), r = (Object(p.b)(), []), o = 0; o < x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT; o++) r.push(l.a.createElement(Xi, {key: o}, l.a.createElement(Ri, {
                    selected: a === o,
                    selectedStyle: $o.QUICK_INVENTORY,
                    type: t[o].type,
                    tier: t[o].tier,
                    count: t[o].count,
                    durability: t[o].durability
                }), l.a.createElement(Qi, null, o + 1)));
                return l.a.createElement(Vi, null, l.a.createElement(Ji, null, "Press ", l.a.createElement(Zi, null, n), " to open inventory"), l.a.createElement(Ki, null, l.a.createElement(Hi, null), r))
            }, ec = a(127), tc = a(162), ac = a(163), nc = a(167), lc = a(168), rc = a(164), oc = a(169), ic = a(165),
            cc = a(166), sc = a(28), uc = a(170), mc = a(171), dc = a(46), pc = a(84), Ec = E.a.div.withConfig({
                displayName: "FullInventory__Wrapper",
                componentId: "sc-12iguzh-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:auto;z-index:100001;"]),
            gc = E.a.div.withConfig({
                displayName: "FullInventory__WrapperContent",
                componentId: "sc-12iguzh-1"
            })(["background-color:rgba(0,0,0,0.5);padding:20px;display:flex;position:relative;transform:scale(0.9);"]),
            hc = E.a.div.withConfig({
                displayName: "FullInventory__InventoryView",
                componentId: "sc-12iguzh-2"
            })(["display:flex;flex-direction:column;"]), fc = E.a.div.withConfig({
                displayName: "FullInventory__CraftingView",
                componentId: "sc-12iguzh-3"
            })(["display:flex;flex-direction:column;"]), yc = E.a.div.withConfig({
                displayName: "FullInventory__Recipes",
                componentId: "sc-12iguzh-4"
            })(["display:flex;flex-wrap:wrap;width:270px;height:100%;"]), bc = E.a.div.withConfig({
                displayName: "FullInventory__Storage",
                componentId: "sc-12iguzh-5"
            })(["display:flex;flex-wrap:wrap;width:304px;height:100%;"]), _c = E.a.div.withConfig({
                displayName: "FullInventory__CraftingToolTip",
                componentId: "sc-12iguzh-6"
            })(["position:relative;left:50px;min-width:100px;"]), vc = E.a.div.withConfig({
                displayName: "FullInventory__CraftingTitle",
                componentId: "sc-12iguzh-7"
            })(["font-size:13px;"]), wc = E.a.div.withConfig({
                displayName: "FullInventory__CraftingResult",
                componentId: "sc-12iguzh-8"
            })(["background-color:rgba(0,0,0,0.7);padding:5px;"]), xc = E.a.div.withConfig({
                displayName: "FullInventory__CraftingIngredients",
                componentId: "sc-12iguzh-9"
            })(["background-color:rgba(50,50,50,0.7);padding:5px;"]), Sc = E.a.div.withConfig({
                displayName: "FullInventory__CraftingIngredient",
                componentId: "sc-12iguzh-10"
            })(["display:flex;align-items:center;"]), Cc = E.a.div.withConfig({
                displayName: "FullInventory__IngredientName",
                componentId: "sc-12iguzh-11"
            })(["font-size:12px;"]), Ic = E.a.div.withConfig({
                displayName: "FullInventory__CraftableText",
                componentId: "sc-12iguzh-12"
            })(["color:#72ff8b;font-size:12px;margin-top:5px;"]), Oc = E.a.div.withConfig({
                displayName: "FullInventory__UncraftableText",
                componentId: "sc-12iguzh-13"
            })(["color:#ff4a4a;font-size:12px;margin-top:5px;"]), Nc = E.a.div.withConfig({
                displayName: "FullInventory__Separator",
                componentId: "sc-12iguzh-14"
            })(["width:1px;background-color:rgb(200,200,200);margin:20px 20px;"]), kc = E.a.div.withConfig({
                displayName: "FullInventory__InventoryRow",
                componentId: "sc-12iguzh-15"
            })(["display:flex;"]), Tc = E.a.div.withConfig({
                displayName: "FullInventory__InventoryTitle",
                componentId: "sc-12iguzh-16"
            })(["margin:3px;"]), Rc = E.a.div.withConfig({
                displayName: "FullInventory__ItemToolTip",
                componentId: "sc-12iguzh-17"
            })(["position:relative;left:50px;min-width:100px;max-width:200px;background-color:rgba(0,0,0,0.7);padding:5px;"]),
            Ac = E.a.div.attrs((function (e) {
                return {style: {color: e.itemColor}}
            })).withConfig({
                displayName: "FullInventory__ItemName",
                componentId: "sc-12iguzh-18"
            })(["font-size:15px;margin-bottom:5px;"]), jc = E.a.div.attrs((function (e) {
                return {style: {color: e.tierColor}}
            })).withConfig({
                displayName: "FullInventory__ItemTierName",
                componentId: "sc-12iguzh-19"
            })(["margin-bottom:10px;font-size:15px;"]), Mc = E.a.div.withConfig({
                displayName: "FullInventory__ItemDescription",
                componentId: "sc-12iguzh-20"
            })(["font-size:11px;color:rgb(200,200,200);"]), Pc = E.a.div.withConfig({
                displayName: "FullInventory__HelpText",
                componentId: "sc-12iguzh-21"
            })(["position:absolute;top:-30px;left:0;"]), Lc = E.a.span.withConfig({
                displayName: "FullInventory__KeyIcon",
                componentId: "sc-12iguzh-22"
            })(["border:1px solid white;padding:1px 5px;"]), Fc = E.a.div.withConfig({
                displayName: "FullInventory__RecipeButtons",
                componentId: "sc-12iguzh-23"
            })(["display:flex;flex-wrap:wrap;align-content:flex-start;"]), Dc = E.a.div.attrs((function (e) {
                var t = e.selected;
                return {
                    style: {
                        margin: t ? 1 : 3,
                        border: t ? "5px solid rgba(255, 255, 255, 1)" : "3px solid rgba(100, 100, 100, 1)"
                    }
                }
            })).withConfig({
                displayName: "FullInventory__NoLoadoutSlot",
                componentId: "sc-12iguzh-24"
            })(["position:relative;width:48px;height:48px;background-color:#95a5a6;display:flex;justify-content:center;align-items:center;font-size:30px;color:#4e4e4e;"]),
            Gc = function (e, t, a, n) {
                return l.a.createElement(Ri, {
                    key: e,
                    selected: a,
                    selectedStyle: $o.FULL_INVENTORY,
                    type: t.type,
                    count: t.count,
                    tier: t.tier,
                    durability: t.durability,
                    onMouseDown: function (t) {
                        t.preventDefault(), _.a.emit(v.a.INVENTORY_SLOT_CLICK, e, t.button)
                    },
                    onMouseEnter: function (e) {
                        n({
                            visible: t.type !== k.a.EMPTY,
                            name: t.name,
                            tier: t.tier,
                            cosmeticsTier: t.cosmeticsTier,
                            description: t.description
                        })
                    },
                    onMouseLeave: function (e) {
                        n({visible: !1, name: "", tier: vi.a.COMMON, cosmeticsTier: dl.a.COMMON, description: ""})
                    }
                })
            }, Bc = function (e, t, a) {
                return l.a.createElement(Ri, {
                    craftable: t.craftable,
                    key: e,
                    size: 48,
                    type: t.type,
                    count: t.count,
                    tier: t.tier,
                    durability: t.durability,
                    onMouseDown: function (t) {
                        t.preventDefault(), _.a.emit(v.a.INVENTORY_CRAFT, e)
                    },
                    onMouseEnter: function (e) {
                        a({
                            visible: t.type !== k.a.EMPTY,
                            craftable: t.craftable,
                            name: t.name,
                            tier: t.tier,
                            description: t.description,
                            ingredients: t.ingredients
                        })
                    },
                    onMouseLeave: function (e) {
                        a({visible: !1, craftable: !0, name: "", tier: vi.a.COMMON, description: "", ingredients: []})
                    }
                })
            }, Uc = function (e, t, a, n, r) {
                return l.a.createElement(Dc, {
                    key: e, selected: e === r, onMouseDown: function () {
                        var a = c()(o.a.mark((function a(l) {
                            return o.a.wrap((function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return l.preventDefault(), a.next = 3, ka.b.persist();
                                    case 3:
                                        return t(Object(Oa.n)(n, e)), a.next = 6, ka.b.flush();
                                    case 6:
                                        return a.next = 8, ka.b.pause();
                                    case 8:
                                        _.a.emit(v.a.REQUEST_LOADOUT, n, e), _.a.emit(v.a.PLAY_DIRECT_SOUND, pc.a.ITEM_PICKUP, 1, 1);
                                    case 10:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function (e) {
                            return a.apply(this, arguments)
                        }
                    }(), onMouseEnter: function (e) {
                        a({
                            visible: !0,
                            name: "None",
                            tier: vi.a.COMMON,
                            cosmeticsTier: dl.a.COMMON,
                            description: "I don't need a " + (n === sc.a.PRIMARY ? "primary" : "secondary") + " loadout"
                        })
                    }, onMouseLeave: function (e) {
                        a({visible: !1, name: "", tier: vi.a.COMMON, cosmeticsTier: dl.a.COMMON, description: ""})
                    }
                }, l.a.createElement(b.a, {icon: Sl.e}))
            }, zc = function (e) {
                var t = Object(p.c)((function (e) {
                        return e.gameData.inventory
                    })), a = Object(p.c)((function (e) {
                        return e.gameData.cursorItem
                    })), r = Object(p.c)((function (e) {
                        return e.gameData.selectedItem
                    })), i = Object(p.c)((function (e) {
                        return e.ui.uiScale
                    })), s = Object(n.useState)({
                        visible: !1,
                        name: "",
                        tier: vi.a.COMMON,
                        cosmeticsTier: dl.a.COMMON,
                        description: ""
                    }), u = s[0], m = s[1], d = Object(n.useState)({
                        craftable: !0,
                        visible: !1,
                        name: "",
                        tier: vi.a.COMMON,
                        description: "",
                        ingredients: []
                    }), E = d[0], g = d[1], h = Object(n.useState)({x: -500, y: -500}), f = h[0], y = h[1],
                    b = Object(p.c)((function (e) {
                        return e.settings.primaryLoadout
                    })), w = Object(p.c)((function (e) {
                        return e.settings.secondaryLoadout
                    }));
                Object(n.useEffect)((function () {
                    var e = function (e) {
                        return y({x: e.clientX, y: e.clientY})
                    };
                    return window.addEventListener("mousemove", e), function () {
                        window.removeEventListener("mousemove", e)
                    }
                }), []);
                for (var S = Object(p.b)(), C = [], I = x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + x.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT; I < x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + x.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT + x.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT; I++) C.push(Gc(I, t[I], r === I, m));
                for (var O = [], N = x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT; N < x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + x.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT; N++) O.push(Gc(N, t[N], r === N, m));
                for (var T = [], R = 0; R < x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT; R++) T.push(Gc(R, t[R], r === R, m));
                for (var A = Object(p.c)((function (e) {
                    return e.gameData.inventoryStatus
                })), j = Object(p.c)((function (e) {
                    return e.gameData.recipesCraftable
                })), M = [], P = 0; P < ec.a.__LENGTH; P++) {
                    var L = Object(ec.b)(P);
                    if (!L.needsWorkStation || A === dc.a.WORK_STATION) {
                        var F = Object(ml.c)(L.result.type), D = L.ingredients.map((function (e) {
                            var t = Object(ml.c)(e.type);
                            return {type: t.getModelID(), name: t.itemName, count: e.count, tier: t.itemTier}
                        }));
                        M.push(Bc(P, {
                            craftable: j[P],
                            type: F.getModelID(),
                            count: L.result.count,
                            name: L.result.count + " " + F.itemName,
                            tier: F.itemTier,
                            description: F.itemDescription,
                            ingredients: D
                        }, g))
                    }
                }
                var G = function (e, t) {
                        return function (a, n) {
                            return function (e, t, a, n, r, i) {
                                return l.a.createElement(Ri, {
                                    key: e,
                                    selected: e === i,
                                    selectedStyle: $o.FULL_INVENTORY,
                                    size: 48,
                                    type: t.type,
                                    count: t.count,
                                    tier: t.tier,
                                    durability: t.durability,
                                    onMouseDown: function () {
                                        var t = c()(o.a.mark((function t(n) {
                                            return o.a.wrap((function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return n.preventDefault(), t.next = 3, ka.b.persist();
                                                    case 3:
                                                        return a(Object(Oa.n)(r, e)), t.next = 6, ka.b.flush();
                                                    case 6:
                                                        return t.next = 8, ka.b.pause();
                                                    case 8:
                                                        _.a.emit(v.a.REQUEST_LOADOUT, r, e);
                                                    case 9:
                                                    case"end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function (e) {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    onMouseEnter: function (e) {
                                        n({
                                            visible: t.type !== k.a.EMPTY,
                                            name: t.name,
                                            tier: t.tier,
                                            cosmeticsTier: dl.a.COMMON,
                                            description: t.description
                                        })
                                    },
                                    onMouseLeave: function (e) {
                                        n({
                                            visible: !1,
                                            name: "",
                                            tier: vi.a.COMMON,
                                            cosmeticsTier: dl.a.COMMON,
                                            description: ""
                                        })
                                    }
                                })
                            }(n + 1, {
                                type: a.getModelID(),
                                name: a.itemName,
                                tier: a.itemTier,
                                description: a.itemDescription,
                                count: 1
                            }, S, m, e, t)
                        }
                    },
                    B = [new tc.a, new ac.a, new rc.a, new nc.a, new lc.a, new oc.a, new uc.a, new mc.a].map(G(sc.a.PRIMARY, b));
                B.unshift(Uc(0, S, m, sc.a.PRIMARY, b));
                var U = [new ic.a, new cc.a].map(G(sc.a.SECONDARY, w));
                U.unshift(Uc(0, S, m, sc.a.SECONDARY, w));
                var z = Object(n.useRef)(null), Y = Object(ri.g)(Object(p.c)((function (e) {
                        return e.settings.keys[Ua.b.TOGGLE_INVENTORY].keyName
                    }))),
                    q = l.a.createElement(yc, null, l.a.createElement(Ba.Scrollbars, null, l.a.createElement(Fc, null, M))),
                    W = l.a.createElement(l.a.Fragment, null, l.a.createElement(yc, null, l.a.createElement(Fc, null, B)), l.a.createElement(Tc, null, "Change Secondary"), l.a.createElement(yc, null, l.a.createElement(Fc, null, U))),
                    H = 0;
                A === dc.a.WOODEN_CHEST ? H = 4 : A === dc.a.IRON_CHEST ? H = 8 : A === dc.a.GOLD_CHEST && (H = 12);
                for (var V = [], K = x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + x.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT + x.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT; K < x.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + x.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT + x.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT + H; K++) V.push(Gc(K, t[K], r === K, m));
                var X = l.a.createElement(bc, null, l.a.createElement(Fc, null, V)), J = "Crafting - Portable", Z = q;
                return A === dc.a.WORK_STATION ? J = "Crafting - Work Station" : A === dc.a.LOADOUT_STATION ? (J = "Change Primary", Z = W) : A === dc.a.WOODEN_CHEST ? (J = "Wooden Chest", Z = X) : A === dc.a.IRON_CHEST ? (J = "Iron Chest", Z = X) : A === dc.a.GOLD_CHEST && (J = "Golden Chest", Z = X), l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
                    style: {
                        position: "absolute",
                        top: f.y / i - 32,
                        left: f.x / i - 32,
                        zIndex: 100002,
                        pointerEvents: "none"
                    }
                }, l.a.createElement("div", {style: {width: 64, height: 64}}, l.a.createElement(Ii, {
                    type: a.type,
                    count: a.count,
                    tier: a.tier,
                    durability: a.durability
                })), u.visible && a.type === k.a.EMPTY ? l.a.createElement(Rc, null, l.a.createElement(Ac, {itemColor: Object(dl.d)(u.cosmeticsTier)}, u.name), l.a.createElement(jc, {tierColor: Object(vi.b)(u.tier)}, Object(vi.c)(u.tier)), l.a.createElement(Mc, null, u.description)) : null, E.visible && a.type === k.a.EMPTY ? l.a.createElement(_c, null, l.a.createElement(wc, null, l.a.createElement(Ac, null, E.name), l.a.createElement(jc, {tierColor: Object(vi.b)(E.tier)}, Object(vi.c)(E.tier)), l.a.createElement(Mc, null, E.description)), l.a.createElement(xc, null, l.a.createElement(vc, null, "Needs:"), E.ingredients.map((function (e, t) {
                    return l.a.createElement(Sc, {key: t}, l.a.createElement(Ri, {
                        size: 18,
                        type: e.type,
                        count: 1,
                        tier: e.tier,
                        durability: 0
                    }), l.a.createElement(Cc, null, e.count, " ", e.name, " (", Object(vi.c)(e.tier), ")"))
                })), E.craftable ? l.a.createElement(Ic, null, "Click to craft!") : l.a.createElement(Oc, null, "Not enough material!"))) : null), l.a.createElement(Ec, {
                    ref: z,
                    onMouseUp: function (e) {
                        e.target === z.current && (e.preventDefault(), e.stopPropagation(), a.type === k.a.EMPTY ? _.a.emit(v.a.REQUEST_INVENTORY_STATUS_UPDATE, dc.a.CLOSED) : _.a.emit(v.a.INVENTORY_SLOT_CLICK, -1, e.button))
                    }
                }, l.a.createElement(gc, null, l.a.createElement(Pc, null, "Press ", l.a.createElement(Lc, null, Y), " to close"), l.a.createElement(hc, null, l.a.createElement(Tc, null, "Ammo"), l.a.createElement(kc, null, C), l.a.createElement(Tc, null, "Backpack"), l.a.createElement(kc, null, O), "Hotbar", l.a.createElement(kc, null, T)), l.a.createElement(Nc, null), l.a.createElement(fc, null, l.a.createElement(Tc, null, J), Z))))
            }, Yc = E.a.div.attrs((function (e) {
                return {style: {top: e.top + "%", left: e.left + "%", transform: "rotate(" + e.dir + "deg)"}}
            })).withConfig({displayName: "MapUI__PlayerCursor", componentId: "ntri4h-0"})(["position:absolute;z-index:1;"]),
            qc = E.a.img.withConfig({
                displayName: "MapUI__PlayerCursorImg",
                componentId: "ntri4h-1"
            })(["display:block;position:absolute;top:-16px;left:-16px;width:32px;"]),
            Wc = (E.a.div.attrs((function (e) {
                var t = e.radius, a = e.x;
                return {style: {width: 2 * t + "%", height: 2 * t + "%", top: e.y + "%", left: a + "%"}}
            })).withConfig({
                displayName: "MapUI__CircleContainer",
                componentId: "ntri4h-2"
            })(["position:absolute;z-index:1;"]), E.a.div.withConfig({
                displayName: "MapUI__Circle",
                componentId: "ntri4h-3"
            })(["border:1px solid white;position:absolute;border-radius:100%;width:100%;height:100%;top:-50%;left:-50%;"])),
            Hc = (Object(E.a)(Wc).withConfig({
                displayName: "MapUI__ClippingCircle",
                componentId: "ntri4h-4"
            })(["border:1px solid white;position:absolute;box-shadow:0px 0px 0px 10000px rgba(255,0,0,0.4)"]), a(155)),
            Vc = E.a.div.withConfig({
                displayName: "MiniMap__Wrapper",
                componentId: "yjgwkn-0"
            })(["position:absolute;top:20px;left:20px;pointer-events:none;"]),
            Kc = E.a.div.withConfig({displayName: "MiniMap__Row", componentId: "yjgwkn-1"})(["display:flex;"]),
            Xc = E.a.div.withConfig({displayName: "MiniMap__MapWrapper", componentId: "yjgwkn-2"})([""]),
            Jc = E.a.div.withConfig({
                displayName: "MiniMap__Map",
                componentId: "yjgwkn-3"
            })(["width:200px;height:200px;border:1px solid white;position:relative;overflow:hidden;"]),
            Zc = E.a.div.withConfig({displayName: "MiniMap__GameInfo", componentId: "yjgwkn-4"})(["margin-left:10px;"]),
            Qc = E.a.div.withConfig({
                displayName: "MiniMap__IconValuePair",
                componentId: "yjgwkn-5"
            })(["display:flex;font-size:16px;margin:0 0 5px 0;"]), $c = E.a.div.withConfig({
                displayName: "MiniMap__Icon",
                componentId: "yjgwkn-6"
            })(["background-color:rgba(50,50,50,0.7);padding:5px;"]), es = E.a.div.withConfig({
                displayName: "MiniMap__Value",
                componentId: "yjgwkn-7"
            })(["background-color:rgba(0,0,0,0.7);padding:5px 10px;"]),
            ts = E.a.div.withConfig({displayName: "MiniMap__HelpText", componentId: "yjgwkn-8"})(["margin-top:10px;"]),
            as = E.a.span.withConfig({
                displayName: "MiniMap__KeyIcon",
                componentId: "yjgwkn-9"
            })(["border:1px solid white;padding:1px 5px;"]), ns = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.numPlayersAlive
                })), a = Object(p.c)((function (e) {
                    return e.gameData.clientNumKills
                })), n = Object(p.c)((function (e) {
                    return e.gameData.timer
                })), r = Object(p.c)((function (e) {
                    return e.ui.fullMapVisible
                })), o = Object(p.c)((function (e) {
                    return e.ui.tabShowsScoreboard
                })), i = "00:00";
                if (n > 0) {
                    var c = Math.round(n), s = Math.floor(c / 60), u = Math.floor(c % 60);
                    i = (s < 10 ? "0" + s : s) + ":" + (u < 10 ? "0" + u : u)
                }
                var m = Object(ri.g)(Object(p.c)((function (e) {
                    return e.settings.keys[o ? Ua.b.TOGGLE_MAP : Ua.b.MAP].keyName
                }))), d = Object(p.c)((function (e) {
                    return e.ui.showMiniMapStatsPanel
                }));
                return r ? null : l.a.createElement(Vc, null, l.a.createElement(Kc, null, l.a.createElement(Xc, null, l.a.createElement(Jc, null, l.a.createElement(Yc, {
                    top: 50,
                    left: 50,
                    dir: 0
                }, l.a.createElement(qc, {src: Hc.a}))), l.a.createElement(ts, null, "Press ", l.a.createElement(as, null, m), " for full map")), d ? l.a.createElement(Zc, null, l.a.createElement(Qc, null, l.a.createElement($c, null, l.a.createElement(b.a, {icon: Sl.f})), l.a.createElement(es, null, t)), l.a.createElement(Qc, null, l.a.createElement($c, null, l.a.createElement(b.a, {icon: Sl.d})), l.a.createElement(es, null, a)), l.a.createElement(Qc, null, l.a.createElement($c, null, l.a.createElement(b.a, {icon: Sl.c})), l.a.createElement(es, null, i))) : null))
            }, ls = E.a.div.withConfig({
                displayName: "TeamScore__Wrapper",
                componentId: "sc-1pxeoqj-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:20px;"]),
            rs = E.a.div.withConfig({
                displayName: "TeamScore__WrapperContent",
                componentId: "sc-1pxeoqj-1"
            })(["display:flex;"]), os = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.color}}
            })).withConfig({
                displayName: "TeamScore__TeamScorePanel",
                componentId: "sc-1pxeoqj-2"
            })(["padding:10px 20px;font-size:20px;width:40px;"]), is = Object(E.a)(os).withConfig({
                displayName: "TeamScore__TeamScorePanelLeft",
                componentId: "sc-1pxeoqj-3"
            })(["border:1px solid white;border-right:none;text-align:right;"]), cs = Object(E.a)(os).withConfig({
                displayName: "TeamScore__TeamScorePanelRight",
                componentId: "sc-1pxeoqj-4"
            })(["border:1px solid white;border-left:none;text-align:left;"]), ss = E.a.div.withConfig({
                displayName: "TeamScore__MatchTime",
                componentId: "sc-1pxeoqj-5"
            })(["border:1px solid white;background-color:rgba(0,0,0,0.6);padding:10px 20px;font-size:20px;"]),
            us = E.a.div.withConfig({
                displayName: "TeamScore__WrapperExplanation",
                componentId: "sc-1pxeoqj-6"
            })(["margin-top:10px;text-align:center;"]), ms = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.showTeamScorePanel
                })), a = Object(p.c)((function (e) {
                    return e.gameData.team1Score
                })), n = Object(p.c)((function (e) {
                    return e.gameData.team2Score
                })), r = Object(p.c)((function (e) {
                    return e.gameData.timer
                })), o = "00:00";
                if (r > 0) {
                    var i = Math.round(r), c = Math.floor(i / 60), s = Math.floor(i % 60);
                    o = (c < 10 ? "0" + c : c) + ":" + (s < 10 ? "0" + s : s)
                }
                Object(p.b)();
                return t ? l.a.createElement(ls, null, l.a.createElement(rs, null, l.a.createElement(is, {color: "#3498db"}, a), l.a.createElement(ss, null, o), l.a.createElement(cs, {color: "#e74c3c"}, n)), l.a.createElement(us, null, "1 kill = 1 point | 1 ruby/sapphire gem = 30 points!", l.a.createElement("br", null), "First to 100 points wins!")) : null
            }, ds = E.a.div.withConfig({
                displayName: "FFAScore__Wrapper",
                componentId: "vcvnfh-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:20px;"]),
            ps = E.a.div.withConfig({
                displayName: "FFAScore__WrapperContent",
                componentId: "vcvnfh-1"
            })(["display:flex;"]), Es = E.a.div.withConfig({
                displayName: "FFAScore__MatchTime",
                componentId: "vcvnfh-2"
            })(["border:1px solid white;background-color:rgba(0,0,0,0.6);padding:10px 20px;font-size:20px;"]),
            gs = (E.a.div.withConfig({
                displayName: "FFAScore__WrapperExplanation",
                componentId: "vcvnfh-3"
            })(["margin-top:5px;text-align:center;"]), E.a.table.withConfig({
                displayName: "FFAScore__ScoreTable",
                componentId: "vcvnfh-4"
            })(["margin-top:10px;text-align:center;width:200px;"])),
            hs = E.a.td.withConfig({displayName: "FFAScore__ScoreCell", componentId: "vcvnfh-5"})(["padding:5px;"]),
            fs = E.a.tr.withConfig({
                displayName: "FFAScore__EnemyRow",
                componentId: "vcvnfh-6"
            })(["background-color:#e74c3c;"]), ys = E.a.tr.withConfig({
                displayName: "FFAScore__SelfRow",
                componentId: "vcvnfh-7"
            })(["background-color:#3498db;color:yellow;"]), bs = function (e) {
                if (!Object(p.c)((function (e) {
                    return e.ui.showFFAScorePanel
                }))) return null;
                var t = Object(p.c)((function (e) {
                        return e.gameData.timer
                    })), a = Object(p.c)((function (e) {
                        return e.gameData.clientPlayerName
                    })), n = Object(p.c)((function (e) {
                        return e.gameData.FFARank1Score
                    })), r = Object(p.c)((function (e) {
                        return e.gameData.FFARank1Name
                    })), o = Object(p.c)((function (e) {
                        return e.gameData.FFARank2Exists
                    })), i = Object(p.c)((function (e) {
                        return e.gameData.FFARank2Score
                    })), c = Object(p.c)((function (e) {
                        return e.gameData.FFARank2Name
                    })), s = Object(p.c)((function (e) {
                        return e.gameData.FFAMyRank
                    })), u = Object(p.c)((function (e) {
                        return e.gameData.FFAMyScore
                    })),
                    m = l.a.createElement(gs, null, l.a.createElement("tbody", null, 1 !== s ? l.a.createElement(l.a.Fragment, null, l.a.createElement(fs, null, l.a.createElement(hs, null, "#1"), l.a.createElement(hs, null, r), l.a.createElement(hs, null, n)), l.a.createElement(ys, null, l.a.createElement(hs, null, "#", s), l.a.createElement(hs, null, a), l.a.createElement(hs, null, u))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(ys, null, l.a.createElement(hs, null, "#1"), l.a.createElement(hs, null, a), l.a.createElement(hs, null, u)), o ? l.a.createElement(fs, null, l.a.createElement(hs, null, "#2"), l.a.createElement(hs, null, c), l.a.createElement(hs, null, i)) : null))),
                    d = "00:00";
                if (t > 0) {
                    var E = Math.round(t), g = Math.floor(E / 60), h = Math.floor(E % 60);
                    d = (g < 10 ? "0" + g : g) + ":" + (h < 10 ? "0" + h : h)
                }
                Object(p.b)();
                return l.a.createElement(ds, null, l.a.createElement(ps, null, l.a.createElement(Es, null, d)), m)
            }, _s = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "HudCenterMessage__Wrapper",
                componentId: "erpjju-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;align-items:center;transition:opacity 0.5s;"]),
            vs = E.a.div.withConfig({
                displayName: "HudCenterMessage__MessageWrapper",
                componentId: "erpjju-1"
            })(["position:relative;top:-20%;font-size:40px;text-shadow:2px 2px 0 #3b3b3b;"]), ws = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                    return e.gameData.hudCenterMsgVisible
                })), a = Object(p.c)((function (e) {
                    return e.gameData.hudCenterMsg
                }));
                return l.a.createElement(_s, {opacity: t ? 1 : 0}, l.a.createElement(vs, null, ei(a)))
            }, xs = E.a.div.withConfig({
                displayName: "ItemHelpMessage__Wrapper",
                componentId: "sc-1wo1iws-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;align-items:center;z-index:-1;"]),
            Ss = E.a.div.withConfig({
                displayName: "ItemHelpMessage__MessageWrapper",
                componentId: "sc-1wo1iws-1"
            })(["margin-top:100px;font-size:20px;"]), Cs = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                    return e.gameData.health
                })), a = Object(p.c)((function (e) {
                    return e.ui.scoreboardVisible
                })), n = Object(p.c)((function (e) {
                    return e.ui.fullMapVisible
                })), r = Object(p.c)((function (e) {
                    return e.gameData.inventoryStatus
                })), o = Object(p.c)((function (e) {
                    return e.ui.itemHelpMessageVisible
                })), i = Object(p.c)((function (e) {
                    return e.ui.itemHelpMessage
                }));
                return t > 0 && !a && !n && r === dc.a.CLOSED && o ? l.a.createElement(xs, null, l.a.createElement(Ss, null, i)) : null
            }, Is = a(3), Os = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "TerrainLoading__Wrapper",
                componentId: "sc-1kx8fp9-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.8);font-size:30px;transition:opacity 0.5s;"]),
            Ns = E.a.div.withConfig({
                displayName: "TerrainLoading__LoadingBarOuter",
                componentId: "sc-1kx8fp9-1"
            })(["width:300px;height:30px;position:relative;background-color:white;margin-top:20px;"]),
            ks = E.a.div.attrs((function (e) {
                return {style: {width: e.percent + "%", transition: "width " + e.speed + "s"}}
            })).withConfig({
                displayName: "TerrainLoading__LoadingBarInner",
                componentId: "sc-1kx8fp9-2"
            })(["background-color:#2ecc71;position:absolute;height:100%;display:flex;align-items:center;"]),
            Ts = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.mapLoadingStage
                })), a = Object(p.c)((function (e) {
                    return e.gameData.mapLoadingProgress
                }));
                Object(p.b)();
                return l.a.createElement(Os, {opacity: a < 1 ? 1 : 0}, t === Is.a.DOWNLOADING ? "Downloading Terrain" : "Loading Terrain", " (", (100 * a).toFixed(2), "%)...", l.a.createElement(Ns, null, l.a.createElement(ks, {
                    percent: 100 * a,
                    speed: .2
                })))
            }, Rs = E.a.div.attrs((function (e) {
                var t = e.visible;
                return {style: {opacity: t ? 1 : 0, pointerEvents: t ? "auto" : "none"}}
            })).withConfig({
                displayName: "RespawnScreen__Wrapper",
                componentId: "k2prmw-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;font-size:50px;text-shadow:2px 2px 0 #3b3b3b;transition:opacity 0.5s;z-index:99999999;"]),
            As = E.a.div.withConfig({
                displayName: "RespawnScreen__WrapperInner",
                componentId: "k2prmw-1"
            })(["display:flex;flex-direction:column;align-items:center;top:40%;position:absolute;width:100%;"]),
            js = Object(E.b)(["0%{opacity:1;}50%{opacity:0;}100%{opacity:1;}"]), Ms = E.a.div.withConfig({
                displayName: "RespawnScreen__EliminatedByBanner",
                componentId: "k2prmw-2"
            })(["margin-top:100px;margin-bottom:100px;border:1px solid white;background-color:rgba(0,0,0,0.8);padding:20px;font-size:15px;"]),
            Ps = E.a.div.withConfig({
                displayName: "RespawnScreen__KillerText",
                componentId: "k2prmw-3"
            })(["display:inline-block;color:yellow;"]), Ls = E.a.div.withConfig({
                displayName: "RespawnScreen__RespawnText",
                componentId: "k2prmw-4"
            })(["color:#ffe100;animation:", " 1.5s ease-in infinite;"], js), Fs = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.respawnScreenVisible
                })), a = Object(p.c)((function (e) {
                    return e.gameData.respawnTimer
                })), r = Object(p.c)((function (e) {
                    return e.gameData.eliminatedBy
                })), o = Object(p.c)((function (e) {
                    return e.ui.connectionStatus
                })), i = Object(p.b)(), c = Object(n.useState)(a), s = c[0], u = c[1], m = a;
                return Object(n.useEffect)((function () {
                    if (t) {
                        u(a), m = a;
                        setTimeout((function e() {
                            --m, u(m), m > 0 && setTimeout(e, 1e3)
                        }), 1e3)
                    }
                }), [t]), o === g.a.ENDED ? null : l.a.createElement(Rs, {
                    visible: t, onClick: function () {
                        s <= 0 && t && (_.a.emit(v.a.REQUEST_RESPAWN), i(Object(S.x)(!1)))
                    }
                }, l.a.createElement(As, null, l.a.createElement(Ls, null, s > 0 ? "Respawning in " + s + "..." : "Click anywhere to respawn!"), l.a.createElement(Ms, null, "Killed by ", l.a.createElement(Ps, null, r)), t ? l.a.createElement(Co, {
                    id: "voxiom-io_728x90_2",
                    background: !1
                }) : null))
            }, Ds = a(90);

        function Gs(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Bs(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Bs(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    a && (e = a);
                    var n = 0;
                    return function () {
                        return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (a = e[Symbol.iterator]()).next.bind(a)
        }

        function Bs(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        function Us(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function zs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Us(Object(a), !0).forEach((function (t) {
                    d()(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Us(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        var Ys, qs = E.a.div.withConfig({
                displayName: "PlayerScoresPanel__Board",
                componentId: "sc-1of1dbn-0"
            })(["width:700px;background-color:rgba(0,0,0,0.6);display:flex;justify-content:space-between;"]),
            Ws = E.a.div.withConfig({
                displayName: "PlayerScoresPanel__TeamInfo",
                componentId: "sc-1of1dbn-1"
            })(["display:flex;flex-direction:column;flex:1;margin:20px;"]), Hs = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.color}}
            })).withConfig({
                displayName: "PlayerScoresPanel__TeamHeader",
                componentId: "sc-1of1dbn-2"
            })(["text-align:center;font-size:16px;font-weight:800;padding-top:10px;padding-bottom:10px;margin-bottom:10px;"]),
            Vs = E.a.table.withConfig({
                displayName: "PlayerScoresPanel__TeamRoster",
                componentId: "sc-1of1dbn-3"
            })(["padding-bottom:10px;font-size:12px;"]), Ks = E.a.tr.withConfig({
                displayName: "PlayerScoresPanel__RosterHeader",
                componentId: "sc-1of1dbn-4"
            })(["font-weight:500;"]), Xs = E.a.tr.attrs((function (e) {
                return {style: {color: e.highlight ? "yellow" : "white"}}
            })).withConfig({displayName: "PlayerScoresPanel__PlayerRow", componentId: "sc-1of1dbn-5"})([""]),
            Js = E.a.th.withConfig({
                displayName: "PlayerScoresPanel__PlayerHeaderCellLeft",
                componentId: "sc-1of1dbn-6"
            })(["text-align:Left;"]), Zs = E.a.th.withConfig({
                displayName: "PlayerScoresPanel__PlayerHeaderCellRight",
                componentId: "sc-1of1dbn-7"
            })(["text-align:right;"]), Qs = E.a.td.withConfig({
                displayName: "PlayerScoresPanel__PlayerDataCellLeft",
                componentId: "sc-1of1dbn-8"
            })(["text-align:left;"]), $s = E.a.td.withConfig({
                displayName: "PlayerScoresPanel__PlayerDataCellRight",
                componentId: "sc-1of1dbn-9"
            })(["text-align:right;"]), eu = function (e) {
                for (var t = Object(p.c)((function (e) {
                    return e.gameData.teams
                })), a = Object(p.c)((function (e) {
                    return e.gameData.players
                })), n = Object(p.c)((function (e) {
                    return e.gameData.clientPlayerID
                })), r = t.map((function (e) {
                    return zs(zs({}, e), {}, {players: [], components: []})
                })), o = 0, i = Object.values(a); o < i.length; o++) for (var c, s = i[o], u = Gs(r); !(c = u()).done;) {
                    var m = c.value;
                    s.team === m.type && m.players.push(s)
                }
                for (var d, E = Gs(r); !(d = E()).done;) {
                    var g = d.value;
                    g.players.sort((function (e, t) {
                        return t.score - e.score
                    }));
                    for (var h, f = Gs(g.players); !(h = f()).done;) {
                        var y = h.value;
                        g.components.push(l.a.createElement(Xs, {
                            key: y.id,
                            highlight: y.id === n
                        }, l.a.createElement(Qs, null, y.name), l.a.createElement($s, null, y.kills), l.a.createElement($s, null, y.deaths), l.a.createElement($s, null, y.assists), l.a.createElement($s, null, y.score)))
                    }
                }
                var b = r.map((function (e, t) {
                    return l.a.createElement(Ws, {key: t}, l.a.createElement(Hs, {color: Object(Ds.f)(e.color)}, e.name), l.a.createElement(Vs, null, l.a.createElement("thead", null, l.a.createElement(Ks, null, l.a.createElement(Js, null, "Player"), l.a.createElement(Zs, null, "Kills"), l.a.createElement(Zs, null, "Deaths"), l.a.createElement(Zs, null, "Assists"), l.a.createElement(Zs, null, "Score"))), l.a.createElement("tbody", null, e.components)))
                }));
                return l.a.createElement(qs, null, b)
            }, tu = E.a.div.withConfig({
                displayName: "Scoreboard__Wrapper",
                componentId: "sc-149lqm8-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;align-items:center;"]),
            au = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.scoreboardVisible
                })), a = Object(p.c)((function (e) {
                    return e.gameData.gameOver
                }));
                Object(p.b)();
                return t && !a ? l.a.createElement(tu, null, l.a.createElement(eu, null)) : null
            }, nu = E.a.div.withConfig({
                displayName: "Notifications__Wrapper",
                componentId: "sc-1n7xwq3-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;align-items:center;text-align:center;"]),
            lu = E.a.div.withConfig({
                displayName: "Notifications__MessageWrapper",
                componentId: "sc-1n7xwq3-1"
            })(["position:relative;font-size:20px;top:30%;text-shadow:1px 1px 0 #3b3b3b;"]), ru = E.a.div.withConfig({
                displayName: "Notifications__NotificationMessage",
                componentId: "sc-1n7xwq3-2"
            })([""]), ou = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                    return e.ui.notificationMessages
                })).map((function (e, t) {
                    return l.a.createElement(ru, {key: e + t}, ei(e))
                }));
                return l.a.createElement(nu, null, l.a.createElement(lu, null, t))
            };
        !function (e) {
            e[e.BRAWLER = 0] = "BRAWLER", e[e.REVENGE = 1] = "REVENGE", e[e.HEADSHOT = 2] = "HEADSHOT", e[e.FIRST_BLOOD = 3] = "FIRST_BLOOD", e[e.SURVIVOR = 4] = "SURVIVOR", e[e.JUGGERNAUT = 5] = "JUGGERNAUT", e[e.ASSIST = 6] = "ASSIST", e[e.ATTACKER = 7] = "ATTACKER", e[e.DEFENDER = 8] = "DEFENDER", e[e.DIVER = 9] = "DIVER"
        }(Ys || (Ys = {}));
        var iu = ["Brawler", "Revenge", "Headshot", "First Blood", "Survivor", "Juggernaut", "Assist", "Attacker", "Defender", "Diver", "Capture"],
            cu = ["Melee kill", "Killed someone who just killed you", "Killed someone with a headshot", "First kill of the match", "Killed someone while being low on health", "Killed someone while being high on health and shield", "Participated in killing an enemy", "Killed someone while having the gem", "Killed someone who has the gem", "Killed someone while in water", "Captured the gem!"],
            su = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "KillMedal__Wrapper",
                componentId: "sc-70atqt-0"
            })(["position:absolute;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;transition:opacity 0.5s;"]),
            uu = Object(E.b)(["0%{opacity:1;}100%{opacity:0;}"]), mu = E.a.div.withConfig({
                displayName: "KillMedal__MedalWrapper",
                componentId: "sc-70atqt-1"
            })(["position:relative;top:18%;text-align:center;display:flex;flex-direction:column;align-items:center;animation:", " 0.5s ease-in 1;animation-fill-mode:forwards;animation-delay:2.5s;"], uu),
            du = Object(E.b)(["0%{opacity:0;}100%{opacity:1;}"]),
            pu = Object(E.b)(["0%{font-size:120px;}100%{font-size:30px;}"]),
            Eu = Object(E.b)(["0%{opacity:1;font-size:30px;}100%{opacity:1;font-size:15px;}"]),
            gu = E.a.div.withConfig({
                displayName: "KillMedal__Background",
                componentId: "sc-70atqt-2"
            })(["opacity:0;background:linear-gradient(90deg,rgba(241,196,15,0) 0%,rgba(241,196,15,1) 50%,rgba(241,196,15,0) 100%);animation:", " 0.5s ease-in 1;animation-fill-mode:forwards;animation-delay:0.4s;position:absolute;top:0;left:-80px;right:-80px;bottom:0;z-index:-1;"], du),
            hu = E.a.div.withConfig({
                displayName: "KillMedal__Title",
                componentId: "sc-70atqt-3"
            })(["font-size:30px;text-transform:uppercase;text-shadow:2px 2px 0 #3b3b3b;animation:", " 0.4s ease-in 1;animation-fill-mode:forwards;white-space:nowrap;position:relative;"], pu),
            fu = E.a.div.withConfig({
                displayName: "KillMedal__Description",
                componentId: "sc-70atqt-4"
            })(["opacity:0;font-size:15px;margin-top:5px;text-shadow:1px 1px 0 #ff7500;animation:", " 0.5s ease-in 1;animation-fill-mode:forwards;animation-delay:0.8s;white-space:nowrap;"], Eu),
            yu = function (e) {
                Object(p.b)();
                var t, a = Object(p.c)((function (e) {
                    return e.ui.killMedals
                }));
                return 0 === a.length ? null : l.a.createElement(su, {key: Math.random()}, l.a.createElement(mu, null, l.a.createElement(hu, null, l.a.createElement(gu, null), (t = a[0].type, iu[t])), l.a.createElement(fu, null, function (e, t) {
                    return cu[e] + " (+" + t + ")"
                }(a[0].type, a[0].score))))
            }, bu = a.p + "./e26bb15cb11fa84a79fc0e0143ae85de.png", _u = E.a.div.attrs((function (e) {
                return {style: {opacity: e.showScope ? 1 : 0}}
            })).withConfig({
                displayName: "SniperScope__Wrapper",
                componentId: "sc-1xsnv7m-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none;"]),
            vu = E.a.img.attrs((function (e) {
                var t = e.opacity, a = e.scaleX, n = e.scaleY, l = e.backgroundColor, r = e.backgroundOpacity;
                return {
                    style: {
                        opacity: t,
                        transform: "scale(" + a + ", " + n + ")",
                        boxShadow: "0 0 0 10000vmax rgba(" + parseInt(l.slice(-6, -4), 16) + ", " + parseInt(l.slice(-4, -2), 16) + ", " + parseInt(l.slice(-2), 16) + ", " + r + ")"
                    }
                }
            })).withConfig({
                displayName: "SniperScope__ScopeImage",
                componentId: "sc-1xsnv7m-1"
            })(["box-shadow:0 0 0 100vmax black;"]), wu = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.showScope
                })), a = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageURL
                })), n = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageOpacity
                })), r = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageScaleX
                })), o = Object(p.c)((function (e) {
                    return e.settings.sniperScopeImageScaleY
                })), i = Object(p.c)((function (e) {
                    return e.settings.sniperScopeBackgroundColor
                })), c = Object(p.c)((function (e) {
                    return e.settings.sniperScopeBackgroundOpacity
                }));
                Object(p.b)();
                return l.a.createElement(_u, {showScope: t}, l.a.createElement(vu, {
                    opacity: n,
                    scaleX: r,
                    scaleY: o,
                    src: a.length > 0 ? a : bu,
                    backgroundColor: i,
                    backgroundOpacity: c
                }))
            }, xu = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.connectionStatus
                })), a = Object(p.c)((function (e) {
                    return e.gameData.inventoryStatus
                })), n = (Object(p.b)(), Object(p.c)((function (e) {
                    return e.ui.hudVisible
                })));
                return t !== g.a.CONNECTED && t !== g.a.ENDED || !n ? null : l.a.createElement(l.a.Fragment, null, l.a.createElement(ns, null), l.a.createElement(li, null), l.a.createElement(hi, null), l.a.createElement(_i, null), a === dc.a.CLOSED ? l.a.createElement($i, null) : null, l.a.createElement(au, null), l.a.createElement(ms, null), l.a.createElement(bs, null), t !== g.a.ENDED ? l.a.createElement(l.a.Fragment, null, l.a.createElement(yu, null), l.a.createElement(Fs, null), l.a.createElement(Di, null), l.a.createElement(qi, null), l.a.createElement(ws, null), l.a.createElement(Cs, null), l.a.createElement(ou, null), l.a.createElement(wu, null)) : null, l.a.createElement(Ts, null), a !== dc.a.CLOSED ? l.a.createElement(zc, null) : null)
            }, Su = E.a.div.withConfig({
                displayName: "MainMenu__WrapperContent",
                componentId: "hvrkpe-0"
            })(["background-color:rgba(0,0,0,0.6);padding:20px 60px;color:black;pointer-events:auto;display:flex;flex-direction:column;width:200px;text-align:center;"]),
            Cu = E.a.div.withConfig({displayName: "MainMenu__Space", componentId: "hvrkpe-1"})(["height:10px;"]),
            Iu = E.a.div.withConfig({
                displayName: "MainMenu__MenuTitle",
                componentId: "hvrkpe-2"
            })(["color:white;margin-bottom:20px;"]), Ou = function (e) {
                var t = Object(p.b)(), a = Object(p.c)((function (e) {
                    return e.ui.adSDKType
                }));
                return l.a.createElement(Su, null, l.a.createElement(Iu, null, "Menu"), l.a.createElement(Na, {
                    onClick: function (e) {
                        _.a.emit(v.a.REQUEST_FOCUS)
                    }
                }, "Resume"), l.a.createElement(Cu, null), l.a.createElement(Na, {
                    onClick: function (e) {
                        t(Object(S.s)($r.a.SETTINGS))
                    }
                }, "Settings"), l.a.createElement(Cu, null), l.a.createElement(Na, {
                    onClick: function (e) {
                        window.onbeforeunload = function () {
                        }, window.location.hash = "", window.location.href = a === D.a.CRAZYGAMES ? "/?crazygames" : "/"
                    }
                }, "Leave"))
            }, Nu = E.a.div.withConfig({
                displayName: "GameMenu__Wrapper",
                componentId: "tclg3e-0"
            })(["width:100%;height:100%;top:0;left:0;position:absolute;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.3);z-index:99999;pointer-events:none;"]),
            ku = E.a.div.withConfig({
                displayName: "GameMenu__InnerWrapper",
                componentId: "tclg3e-1"
            })(["max-width:700px;"]), Tu = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.connectionStatus
                })), a = Object(p.c)((function (e) {
                    return e.ui.gameMenuType
                })), n = Object(p.c)((function (e) {
                    return e.gameData.inventoryStatus
                })), r = Object(p.c)((function (e) {
                    return e.gameData.gameOver
                })), o = Object(p.c)((function (e) {
                    return e.ui.respawnScreenVisible
                })), i = Object(p.b)();
                if (n !== dc.a.CLOSED || r) return null;
                if (t !== g.a.CONNECTED) return null;
                if (o) return null;
                var c = null;
                switch (a) {
                    case $r.a.SETTINGS:
                        c = l.a.createElement(Rn, {
                            onBack: function () {
                                i(Object(S.s)($r.a.MAIN_MENU))
                            }
                        });
                        break;
                    case $r.a.MAIN_MENU:
                        c = l.a.createElement(Ou, null);
                        break;
                    default:
                        return null
                }
                return l.a.createElement(Nu, null, l.a.createElement(ku, null, c))
            }, Ru = E.a.div.withConfig({
                displayName: "VGemsDisplay__MoneyCard",
                componentId: "sc-1bmp3nw-0"
            })(["font-size:14px;background-color:rgba(0,0,0,0.5);padding:15px;margin:20px;width:150px;"]),
            Au = E.a.div.withConfig({
                displayName: "VGemsDisplay__MoneyCardTitle",
                componentId: "sc-1bmp3nw-1"
            })(["margin-bottom:5px;display:flex;align-items:center;justify-content:center;"]), ju = E.a.div.withConfig({
                displayName: "VGemsDisplay__MoneyCardValue",
                componentId: "sc-1bmp3nw-2"
            })(["color:yellow;"]), Mu = E.a.img.withConfig({
                displayName: "VGemsDisplay__MoneyIcon",
                componentId: "sc-1bmp3nw-3"
            })(["width:24px;margin-right:10px;"]), Pu = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.vgemsGained
                }));
                return l.a.createElement(Ru, null, l.a.createElement(Au, null, l.a.createElement(Mu, {src: Cl}), " Earned"), l.a.createElement(ju, null, t))
            };

        function Lu(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        var Fu = E.a.div.withConfig({displayName: "XpBar__Xp", componentId: "sc-1hox4ib-0"})(["width:100%;"]),
            Du = E.a.div.withConfig({
                displayName: "XpBar__Level",
                componentId: "sc-1hox4ib-1"
            })(["margin-bottom:10px;text-align:start;"]), Gu = E.a.div.withConfig({
                displayName: "XpBar__XpTip",
                componentId: "sc-1hox4ib-2"
            })(["display:inline-block;color:yellow;"]), Bu = E.a.div.withConfig({
                displayName: "XpBar__XpBarOuter",
                componentId: "sc-1hox4ib-3"
            })(["border:1px solid white;display:flex;justify-content:center;align-items:center;position:relative;font-size:15px;padding:8px;"]),
            Uu = E.a.div.withConfig({displayName: "XpBar__XpBarValue", componentId: "sc-1hox4ib-4"})(["z-index:999;"]),
            zu = E.a.div.attrs((function (e) {
                var t = e.value, a = e.maxValue;
                return {style: {backgroundColor: e.color, width: t / a * 100 + "%"}}
            })).withConfig({
                displayName: "XpBar__XpBarInner",
                componentId: "sc-1hox4ib-5"
            })(["position:absolute;top:0;left:0;height:100%;"]), Yu = function e(t, a) {
                t.xp += 1, t.xpToBeAdded -= 1, t.xp >= 127 * t.level && (t.xp = 0, t.level += 1), a(t), t.xpToBeAdded > 0 && setTimeout((function () {
                    e(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Lu(Object(a), !0).forEach((function (t) {
                                d()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Lu(Object(a)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, t), a)
                }), 10)
            }, qu = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.account.authenticated
                })), a = Object(p.c)((function (e) {
                    return e.account.profile
                })), r = Object(p.c)((function (e) {
                    return e.gameData.xpGained
                })), o = "";
                t ? r + a.xp >= 127 * a.level && (o = " (level up!)") : o = " (Login to gain rewards!)";
                var i = Object(n.useState)({level: a.level, xp: a.xp, xpToBeAdded: r, xpGained: r}), c = i[0], s = i[1];
                return Object(n.useEffect)((function () {
                    setTimeout((function () {
                        setTimeout((function () {
                            Yu(c, s)
                        }), 2e3)
                    }), 1e3)
                }), []), l.a.createElement(Fu, null, l.a.createElement(Du, null, "Level ", c.level, " ", l.a.createElement(Gu, null, o)), l.a.createElement(Bu, null, l.a.createElement(Uu, null, c.xp, " / ", 127 * c.level, " ", l.a.createElement(Gu, null, "(+", c.xpGained, ")")), l.a.createElement(zu, {
                    value: c.xp,
                    maxValue: 127 * c.level,
                    color: "#3498db"
                })))
            }, Wu = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "BattleRoyaleGameOver__Wrapper",
                componentId: "sc-11rww64-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.6);transition:opacity 2.0s;z-index:100001;"]),
            Hu = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__Content",
                componentId: "sc-11rww64-1"
            })(["text-align:center;display:flex;flex-direction:column;align-items:center;"]), Vu = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__LoseTitle",
                componentId: "sc-11rww64-2"
            })(["font-size:40px;margin-bottom:10px;"]), Ku = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__WinTitle",
                componentId: "sc-11rww64-3"
            })(["color:yellow;font-size:50px;margin-bottom:10px;"]), Xu = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__SubTitle",
                componentId: "sc-11rww64-4"
            })(["font-size:30px;margin-bottom:30px;"]), Ju = E.a.span.withConfig({
                displayName: "BattleRoyaleGameOver__RankNumber",
                componentId: "sc-11rww64-5"
            })(["color:yellow;"]), Zu = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__KillerName",
                componentId: "sc-11rww64-6"
            })(["display:inline-block;color:red;"]), Qu = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__Stats",
                componentId: "sc-11rww64-7"
            })(["display:flex;"]), $u = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__StatsCard",
                componentId: "sc-11rww64-8"
            })(["background-color:rgba(0,0,0,0.5);padding:20px;margin:20px;width:100px;"]), em = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__StatsCardTitle",
                componentId: "sc-11rww64-9"
            })(["margin-bottom:10px;display:flex;align-items:center;justify-content:center;"]), tm = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__StatsCardValue",
                componentId: "sc-11rww64-10"
            })(["color:yellow;"]), am = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__XpBarWrapper",
                componentId: "sc-11rww64-11"
            })(["width:80%;display:flex;align-items:center;"]), nm = E.a.div.withConfig({
                displayName: "BattleRoyaleGameOver__PlayAgainButton",
                componentId: "sc-11rww64-12"
            })(["width:70%;margin:30px;pointer-events:auto;padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            lm = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.gameData.numPlayersAlive
                })), a = Object(p.c)((function (e) {
                    return e.gameData.clientNumKills
                })), r = (Object(p.b)(), Object(p.c)((function (e) {
                    return e.gameData.gameWon
                }))), o = Object(p.c)((function (e) {
                    return e.gameData.timeAlive
                })), i = Object(p.c)((function (e) {
                    return e.gameData.totalNumPlayers
                })), c = Object(p.c)((function (e) {
                    return e.gameData.eliminatedBy
                })), s = Object(p.c)((function (e) {
                    return e.ui.adSDKType
                })), u = "00:00";
                if (o > 0) {
                    var m = Math.round(o), d = Math.floor(m / 60), E = Math.floor(m % 60);
                    u = (d < 10 ? "0" + d : d) + ":" + (E < 10 ? "0" + E : E)
                }
                var g = Object(n.useState)(!1), h = g[0], f = g[1];
                return Object(n.useEffect)((function () {
                    setTimeout((function () {
                        f(!0)
                    }), 1e3), window.onbeforeunload = function () {
                    }
                }), []), l.a.createElement(Wu, {opacity: h ? 1 : 0}, l.a.createElement(Hu, null, r ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Ku, null, "Victory!"), l.a.createElement(Xu, null, "Congratulations, You are the champion!")) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Vu, null, "Eliminated by ", l.a.createElement(Zu, null, c)), l.a.createElement(Xu, null, "You placed ", l.a.createElement(Ju, null, "#", t))), l.a.createElement(Qu, null, l.a.createElement($u, null, l.a.createElement(em, null, "Kills"), l.a.createElement(tm, null, a)), l.a.createElement($u, null, l.a.createElement(em, null, "Time Alive"), l.a.createElement(tm, null, u)), l.a.createElement($u, null, l.a.createElement(em, null, "Total Players"), l.a.createElement(tm, null, i))), l.a.createElement(am, null, l.a.createElement(qu, null), l.a.createElement(Pu, null)), l.a.createElement(nm, {
                    onClick: function () {
                        window.location.hash = "", window.location.href = s === D.a.CRAZYGAMES ? "/?crazygames" : "/"
                    }
                }, "Play Again"), h ? l.a.createElement(Co, {id: "voxiom-io_728x90_2", background: !1}) : null))
            }, rm = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "CaptureTheGemsGameOver__Wrapper",
                componentId: "sc-10iskfd-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.6);transition:opacity 2.0s;z-index:100001;"]),
            om = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__WinTitle",
                componentId: "sc-10iskfd-1"
            })(["color:yellow;font-size:50px;margin-bottom:20px;"]), im = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__LoseTitle",
                componentId: "sc-10iskfd-2"
            })(["color:red;font-size:50px;margin-bottom:20px;"]), cm = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__Content",
                componentId: "sc-10iskfd-3"
            })(["text-align:center;display:flex;flex-direction:column;align-items:center;"]), sm = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__PlayAgainButton",
                componentId: "sc-10iskfd-4"
            })(["width:70%;margin:30px;pointer-events:auto;padding:10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            um = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__XpBarWrapper",
                componentId: "sc-10iskfd-5"
            })(["width:90%;display:flex;align-items:center;"]), mm = E.a.div.withConfig({
                displayName: "CaptureTheGemsGameOver__Space",
                componentId: "sc-10iskfd-6"
            })(["height:20px;"]), dm = function (e) {
                Object(p.b)();
                var t = Object(p.c)((function (e) {
                    return e.gameData.gameWon
                })), a = Object(p.c)((function (e) {
                    return e.ui.adSDKType
                })), r = Object(n.useState)(!1), o = r[0], i = r[1];
                return Object(n.useEffect)((function () {
                    setTimeout((function () {
                        i(!0)
                    }), 1e3), window.onbeforeunload = function () {
                    }
                }), []), l.a.createElement(rm, {opacity: o ? 1 : 0}, l.a.createElement(cm, null, t ? l.a.createElement(l.a.Fragment, null, l.a.createElement(om, null, "Victory!")) : l.a.createElement(l.a.Fragment, null, l.a.createElement(im, null, "Defeat!")), l.a.createElement(eu, null), l.a.createElement(mm, null), l.a.createElement(um, null, l.a.createElement(qu, null), l.a.createElement(Pu, null)), l.a.createElement(sm, {
                    onClick: function () {
                        window.location.hash = "", window.location.href = a === D.a.CRAZYGAMES ? "/?crazygames" : "/"
                    }
                }, "Play Again"), o ? l.a.createElement(Co, {id: "voxiom-io_728x90_2", background: !1}) : null))
            }, pm = E.a.div.attrs((function (e) {
                return {style: {opacity: e.opacity}}
            })).withConfig({
                displayName: "DisconnectionMessage__Wrapper",
                componentId: "sc-8d4ctu-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.8);transition:opacity 0.2s;z-index:100001;"]),
            Em = E.a.div.withConfig({
                displayName: "DisconnectionMessage__Content",
                componentId: "sc-8d4ctu-1"
            })(["text-align:center;display:flex;flex-direction:column;align-items:center;"]), gm = E.a.div.withConfig({
                displayName: "DisconnectionMessage__PlayAgainButton",
                componentId: "sc-8d4ctu-2"
            })(["margin:30px;pointer-events:auto;padding:10px;background-color:#27ae60;text-align:center;color:white;width:60%;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            hm = E.a.div.withConfig({
                displayName: "DisconnectionMessage__Message",
                componentId: "sc-8d4ctu-3"
            })(["font-size:30px;margin-bottom:30px;"]), fm = function (e) {
                var t = Object(p.c)((function (e) {
                    return e.ui.disconnectionMessage
                })), a = (Object(p.b)(), Object(p.c)((function (e) {
                    return e.ui.adSDKType
                }))), r = Object(n.useState)(!1), o = r[0], i = r[1];
                return Object(n.useEffect)((function () {
                    i(!0), window.onbeforeunload = function () {
                    }
                }), []), l.a.createElement(pm, {opacity: o ? 1 : 0}, l.a.createElement(Em, null, l.a.createElement(hm, null, ei(t)), l.a.createElement(gm, {
                    onClick: function () {
                        window.location.hash = "", window.location.href = a === D.a.CRAZYGAMES ? "/?crazygames" : "/"
                    }
                }, "Find a new game"), o ? l.a.createElement(Co, {id: "voxiom-io_728x90_2", background: !1}) : null))
            }, ym = function () {
                var e = Object(p.c)((function (e) {
                    return e.gameData.gameOver
                })), t = Object(p.c)((function (e) {
                    return e.gameData.gameModeName
                }));
                if (Object(p.c)((function (e) {
                    return e.ui.connectionStatus
                })) !== g.a.ENDED) return null;
                return e ? t === Object(I.b)(I.a.BATTLE_ROYALE) ? l.a.createElement(lm, null) : l.a.createElement(dm, null) : l.a.createElement(fm, null)
            }, bm = a(80), _m = a(185), vm = function () {
                function e() {
                    var e = this;
                    this._scene = void 0, this._camera = void 0, this._renderer = void 0, this._controls = void 0, this._model = void 0, this._animationId = void 0, this.render = function (t) {
                        e._animationId = requestAnimationFrame(e.render), e._controls.update(), e._renderer.render(e._scene, e._camera)
                    }
                }

                var t = e.prototype;
                return t.start = function () {
                    var e = c()(o.a.mark((function e(t, a, n, l, r, i) {
                        var c, s, u;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this._renderer) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this._renderer = new bm.Qb({
                                        canvas: document.getElementById(t),
                                        antialias: !0,
                                        alpha: !0,
                                        powerPreference: "high-performance"
                                    }), this._renderer.setPixelRatio(window.devicePixelRatio), this._renderer.setSize(a, n), this._renderer.gammaFactor = 2.2, this._renderer.outputEncoding = bm.Rb, this._camera = new bm.jb(60, a / n, .01, 1e3), this._camera.position.set(1, 0, 0), this._controls = new _m.a(this._camera, this._renderer.domElement), this._controls.maxDistance = 5, this._controls.minDistance = .1, this._scene = new bm.vb, c = new bm.a(16777215, .4), this._scene.add(c), (s = new bm.q(16777215, .7)).position.set(1, 1, 1), this._scene.add(s), (u = Object(ml.c)(l)).setSkin(r, i), e.next = 22, u.generateModel(!0);
                                case 22:
                                    this._model = e.sent, this._scene.add(this._model), this._animationId = requestAnimationFrame(this.render);
                                case 25:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a, n, l, r, o) {
                        return e.apply(this, arguments)
                    }
                }(), t.stop = function () {
                    this._renderer && (this._renderer.dispose(), this._renderer = void 0), this._model && (N.a.cleanUpModel(this._model), this._model = void 0), this._scene && (this._scene.dispose(), this._scene = void 0), this._animationId && (cancelAnimationFrame(this._animationId), this._animationId = void 0)
                }, e
            }(), wm = E.a.div.withConfig({
                displayName: "ItemInspectionWindow__Wrapper",
                componentId: "lm7zza-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.5);z-index:100000;pointer-events:auto;"]),
            xm = E.a.div.withConfig({
                displayName: "ItemInspectionWindow__Dialog",
                componentId: "lm7zza-1"
            })(["width:800px;height:600px;display:flex;flex-direction:column;background-color:rgba(0,0,0,0.8);border:1px solid white;position:relative;padding:10px;"]),
            Sm = E.a.div.attrs((function (e) {
                return {style: {color: e.tierColor}}
            })).withConfig({
                displayName: "ItemInspectionWindow__Title",
                componentId: "lm7zza-2"
            })(["font-size:20px;text-align:center;"]), Cm = E.a.div.withConfig({
                displayName: "ItemInspectionWindow__CloseButton",
                componentId: "lm7zza-3"
            })(["position:absolute;top:0;right:0;padding:5px 10px;font-size:30px;:hover{cursor:pointer;}"]),
            Im = E.a.canvas.withConfig({
                displayName: "ItemInspectionWindow__Canvas",
                componentId: "lm7zza-4"
            })(["flex:1;width:100%;margin-top:10px;outline:none;"]), Om = function () {
                var e = Object(p.b)(), t = Object(p.c)((function (e) {
                    return e.ui.inspectionWindow
                })), a = Object(n.useRef)(null), r = Object(n.useRef)(null), o = Object(n.useRef)(new vm);
                if (Object(n.useEffect)((function () {
                    return t.visible ? o.current.start("inspection-canvas", r.current.clientWidth, r.current.clientHeight, t.itemType, t.skinType, t.skinSeed) : o.current.stop(), function () {
                        o.current.stop()
                    }
                }), [t.visible]), !t.visible) return null;
                var i = Object(ul.a)(t.skinType).tier;
                return l.a.createElement(wm, {
                    onMouseDown: function (t) {
                        a.current && a.current.contains(t.target) || e(Object(S.g)())
                    }
                }, l.a.createElement(xm, {ref: a}, l.a.createElement(Sm, {tierColor: Object(dl.d)(i)}, t.title), l.a.createElement(Cm, {
                    onClick: function () {
                        e(Object(S.g)())
                    }
                }, l.a.createElement(b.a, {icon: Sl.e})), l.a.createElement(Im, {ref: r, id: "inspection-canvas"})))
            }, Nm = function () {
                function e() {
                    var e = this;
                    this._crateScene = void 0, this._itemScene = void 0, this._itemControls = void 0, this._itemCamera = void 0, this._camera = void 0, this._renderer = void 0, this._model = void 0, this._crateModel = void 0, this._animationId = void 0, this._crateMixer = void 0, this._openAction = void 0, this._prevFrameTime = void 0, this._audioListener = void 0, this._showItemCallbackId = void 0, this.render = function (t) {
                        e._animationId = requestAnimationFrame(e.render);
                        var a = (t - e._prevFrameTime) / 1e3;
                        if (e._prevFrameTime = t, e._crateMixer.update(a), e._itemControls.update(), e._model && e._model.scale.x < 1) {
                            var n = Math.min(1, e._model.scale.x + 4 * a);
                            e._model.scale.set(n, n, n)
                        }
                        e._renderer.clear(), e._renderer.render(e._crateScene, e._camera), e._renderer.render(e._itemScene, e._itemCamera)
                    }, this.playOpenAnimation = function () {
                        var t = c()(o.a.mark((function t(a, n, l, r) {
                            var i, c;
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return e._showItemCallbackId && clearTimeout(e._showItemCallbackId), e._model && (N.a.cleanUpModel(e._model), null == (i = e._itemScene) || i.remove(e._model), e._model = void 0), (c = Object(ml.c)(a)).setSkin(n, l), t.next = 6, c.generateModel(!0);
                                    case 6:
                                        e._model = t.sent, e._openAction.stop(), e._openAction.play(), e.playSound(pc.a.CRATE_OPEN), e._showItemCallbackId = setTimeout((function () {
                                            var t, a;
                                            null == (t = e._itemScene) || t.add(e._model), e._itemControls.reset(), null == (a = e._model) || a.scale.set(.01, .01, .01), e._showItemCallbackId = setTimeout((function () {
                                                r()
                                            }), 400)
                                        }), 500);
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e, a, n, l) {
                            return t.apply(this, arguments)
                        }
                    }(), this._prevFrameTime = 0
                }

                var t = e.prototype;
                return t.start = function () {
                    var e = c()(o.a.mark((function e(t, a, n, l) {
                        var r, i, c, s, u;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this._renderer) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    this._renderer = new bm.Qb({
                                        canvas: document.getElementById(t),
                                        antialias: !0,
                                        alpha: !0,
                                        powerPreference: "high-performance"
                                    }), this._renderer.setPixelRatio(window.devicePixelRatio), this._renderer.setSize(a, n), this._renderer.gammaFactor = 2.2, this._renderer.outputEncoding = bm.Rb, this._renderer.autoClear = !1, this._crateScene = new bm.vb, this._crateModel = N.a.crateModel, this._crateScene.add(this._crateModel), r = gr[l].color, this._crateModel.traverse((function (e) {
                                        e.material && "Crate" === e.material.name && e.material.color.set(r)
                                    })), this._camera = new bm.jb(60, a / n, .01, 1e3), this._camera.position.set(-19.929473876953125, 12.812478065490723, 14.63255500793457), this._camera.lookAt(0, 1.5, 0), this._camera.zoom = 5, this._camera.updateProjectionMatrix(), i = new bm.a(16777215, .4), this._crateScene.add(i), (c = new bm.q(16777215, .7)).position.set(-1, 1, 1), this._crateScene.add(c), this._crateMixer = new bm.c(this._crateModel), this._openAction = this._crateMixer.clipAction(N.a.crateOpenAnimation), this._openAction.setLoop(bm.R, 1), this._openAction.setDuration(1.5), this._openAction.clampWhenFinished = !0, this._animationId = requestAnimationFrame(this.render), this._itemScene = new bm.vb, this._itemCamera = new bm.jb(60, a / n, .01, 1e3), this._itemCamera.position.set(1, 0, 0), this._itemControls = new _m.a(this._itemCamera, this._renderer.domElement), this._itemControls.maxDistance = 5, this._itemControls.minDistance = .1, this._itemControls.autoRotate = !0, this._itemControls.autoRotateSpeed = 4, s = new bm.a(16777215, .4), this._itemScene.add(s), (u = new bm.q(16777215, .7)).position.set(1, 1, 1), this._itemScene.add(u), this._audioListener = new bm.f, this._camera.add(this._audioListener);
                                case 44:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a, n, l) {
                        return e.apply(this, arguments)
                    }
                }(), t.playSound = function (e, t, a) {
                    void 0 === t && (t = 0), void 0 === a && (a = 1);
                    var n = new bm.d(this._audioListener);
                    n.setBuffer(N.a.getSound(e)), n.detune = t, n.gain.gain.value = a, n.play()
                }, t.stop = function () {
                    var e;
                    (this._renderer && (this._renderer.dispose(), this._renderer = void 0), this._model) && (N.a.cleanUpModel(this._model), null == (e = this._itemScene) || e.remove(this._model), this._model = void 0);
                    this._crateScene && (this._crateScene.dispose(), this._crateScene = void 0), this._itemScene && (this._itemScene.dispose(), this._itemScene = void 0), this._animationId && (cancelAnimationFrame(this._animationId), this._animationId = void 0), this._showItemCallbackId && clearTimeout(this._showItemCallbackId)
                }, e
            }();

        function km(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function Tm(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? km(Object(a), !0).forEach((function (t) {
                    d()(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : km(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        var Rm, Am = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__Wrapper",
                componentId: "sc-1t1chhq-0"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.5);z-index:100000;pointer-events:auto;"]),
            jm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__Dialog",
                componentId: "sc-1t1chhq-1"
            })(["width:800px;height:600px;display:flex;flex-direction:column;background-color:rgba(0,0,0,0.8);border:1px solid white;position:relative;padding:10px;overflow:hidden;"]),
            Mm = E.a.div.attrs((function (e) {
                return {style: {color: e.textColor}}
            })).withConfig({
                displayName: "CrateOpeningWindow__Title",
                componentId: "sc-1t1chhq-2"
            })(["font-size:20px;text-align:center;margin-bottom:10px;"]), Pm = E.a.canvas.withConfig({
                displayName: "CrateOpeningWindow__Canvas",
                componentId: "sc-1t1chhq-3"
            })(["flex:1;width:100%;margin-top:10px;outline:none;"]), Lm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__ButtonGroup",
                componentId: "sc-1t1chhq-4"
            })(["display:flex;justify-content:center;"]), Fm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__UnlockButton",
                componentId: "sc-1t1chhq-5"
            })(["display:flex;align-items:center;margin-right:10px;padding:0 10px;background-color:#3498db;text-align:center;color:white;:hover{background-color:#40b2ff;cursor:pointer;}"]),
            Dm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__LaterButton",
                componentId: "sc-1t1chhq-6"
            })(["padding:10px;background-color:#7f8c8d;text-align:center;color:white;:hover{background-color:#95a5a6;cursor:pointer;}"]),
            Gm = E.a.img.withConfig({
                displayName: "CrateOpeningWindow__MoneyIcon",
                componentId: "sc-1t1chhq-7"
            })(["width:24px;margin:0 5px;"]), Bm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__DropRates",
                componentId: "sc-1t1chhq-8"
            })(["position:absolute;left:20px;top:40px;"]), Um = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__DropRate",
                componentId: "sc-1t1chhq-9"
            })(["display:flex;align-items:center;margin-bottom:5px;"]), zm = E.a.div.attrs((function (e) {
                return {style: {backgroundColor: e.tierColor}}
            })).withConfig({
                displayName: "CrateOpeningWindow__DropRateIcon",
                componentId: "sc-1t1chhq-10"
            })(["width:16px;height:16px;border:1px solid #3f3f3f;margin-right:5px;"]), Ym = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__PopupContent",
                componentId: "sc-1t1chhq-11"
            })(["display:flex;flex-direction:column;align-items:center;"]), qm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__PopupTitle",
                componentId: "sc-1t1chhq-12"
            })(["margin-bottom:10px;font-size:20px;"]), Wm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__PopupMessage",
                componentId: "sc-1t1chhq-13"
            })(["margin-bottom:10px;"]), Hm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__DismissPopupButton",
                componentId: "sc-1t1chhq-14"
            })(["display:flex;align-items:center;margin-right:10px;padding:5px 10px;background-color:#27ae60;text-align:center;color:white;:hover{background-color:#2ecc71;cursor:pointer;}"]),
            Vm = E.a.div.withConfig({
                displayName: "CrateOpeningWindow__ViewContentLink",
                componentId: "sc-1t1chhq-15"
            })(["color:#ffa14d;margin-top:10px;:hover{text-decoration:underline;cursor:pointer;}"]);
        !function (e) {
            e[e.NONE = 0] = "NONE", e[e.OUT_OF_GEMS = 1] = "OUT_OF_GEMS", e[e.ERROR = 2] = "ERROR"
        }(Rm || (Rm = {}));
        var Km = function () {
            var e = Object(p.b)(), t = Object(n.useRef)(null), a = Object(n.useRef)(null),
                r = Object(p.c)((function (e) {
                    return e.account.profile
                })), i = Object(n.useState)(Rm.NONE), s = i[0], u = i[1], m = Object(n.useState)(!1), d = m[0],
                E = m[1], g = Object(n.useState)({text: "", color: "#ffffff"}), f = g[0], y = g[1],
                b = Object(p.c)((function (e) {
                    return e.ui.crateOpeningWindow
                })), _ = Object(n.useRef)(new Nm), v = Object(ot.g)();
            Object(n.useEffect)((function () {
                return b.visible ? _.current.start("crate-opening-canvas", a.current.clientWidth, a.current.clientHeight, b.crateType) : _.current.stop(), function () {
                    _.current.stop()
                }
            }), [b.visible]);
            var w = gr[b.crateType];
            return Object(n.useEffect)((function () {
                if (w) {
                    var e = function () {
                        y({text: "Open " + w.name + "?", color: "#ffffff"})
                    };
                    return e(), e
                }
            }), [b.crateType]), b.visible ? l.a.createElement(l.a.Fragment, null, s === Rm.OUT_OF_GEMS ? l.a.createElement(Nl, null, l.a.createElement(Ym, null, l.a.createElement(qm, null, "Not enough Vox Gems!"), l.a.createElement(Wm, null, "Play the game to earn more!"), l.a.createElement(Hm, {
                onClick: function (e) {
                    u(Rm.NONE)
                }
            }, "Dismiss"))) : s === Rm.ERROR ? l.a.createElement(Nl, null, l.a.createElement(Ym, null, l.a.createElement(qm, null, "Sorry, an error has occurred"), l.a.createElement(Wm, null, "You were not charged, please try again!"), l.a.createElement(Hm, {
                onClick: function (e) {
                    u(Rm.NONE)
                }
            }, "Dismiss"))) : null, l.a.createElement(Am, null, l.a.createElement(jm, {ref: t}, l.a.createElement(Mm, {textColor: f.color}, f.text), l.a.createElement(Bm, null, w.drop_rates.map((function (e, t) {
                return l.a.createElement(Um, {key: t}, l.a.createElement(zm, {tierColor: Object(dl.b)(e.tier)}), Object(dl.c)(e.tier) + " - " + e.rate + "%")
            })), l.a.createElement(Vm, {
                onClick: function () {
                    e(Object(S.f)()), v.push("/crate_content?crate_type=" + b.crateType)
                }
            }, "View Content")), l.a.createElement(Pm, {
                ref: a,
                id: "crate-opening-canvas"
            }), l.a.createElement(Lm, null, l.a.createElement(Fm, {
                onClick: function () {
                    var t = c()(o.a.mark((function t(a) {
                        var n, l, i, c, s;
                        return o.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!d) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!(r.gems < w.price)) {
                                        t.next = 5;
                                        break
                                    }
                                    return u(Rm.OUT_OF_GEMS), t.abrupt("return");
                                case 5:
                                    return E(!0), y({
                                        text: "Opening Crate...",
                                        color: "#ffffff"
                                    }), t.prev = 7, t.next = 10, fetch("/shop/open_crate?crate_type=" + b.crateType, {
                                        method: "post",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "CSRF-Token": xl()
                                        }
                                    });
                                case 10:
                                    return n = t.sent, t.next = 13, n.json();
                                case 13:
                                    if (!(l = t.sent).success) {
                                        t.next = 22;
                                        break
                                    }
                                    e(Object(h.a)(Tm(Tm({}, r), {}, {gems: r.gems - w.price}))), i = l.result, c = Object(ul.a)(i.type), s = 0 === i.item_id ? Object(sl.b)(i.slot) : c.itemType, _.current && _.current.playOpenAnimation(s, i.type, i.seed, (function () {
                                        E(!1), y({
                                            text: Object(ml.c)(s).itemName + " | " + c.name,
                                            color: Object(dl.d)(c.tier)
                                        })
                                    })), t.next = 23;
                                    break;
                                case 22:
                                    throw new Error("Failed to open crate");
                                case 23:
                                    t.next = 31;
                                    break;
                                case 25:
                                    t.prev = 25, t.t0 = t.catch(7), console.error("Failed to open crate"), E(!1), y({
                                        text: "Open " + w.name + "?",
                                        color: "#ffffff"
                                    }), u(Rm.ERROR);
                                case 31:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[7, 25]])
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, d ? "Unlocking..." : l.a.createElement(l.a.Fragment, null, "Unlock for", l.a.createElement(Gm, {src: Cl}), w.price)), l.a.createElement(Dm, {
                onClick: function (t) {
                    e(Object(S.f)()), E(!1)
                }
            }, "Later"))))) : null
        };
        t.default = function () {
            return l.a.createElement(l.a.Fragment, null, l.a.createElement(Km, null), l.a.createElement(Om, null), l.a.createElement(Tu, null), l.a.createElement(Xo, null), l.a.createElement(xu, null), l.a.createElement(ym, null))
        }
    }
}]);