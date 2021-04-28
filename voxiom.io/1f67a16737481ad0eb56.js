!function (e) {
    function _(_) {

        for (var t, S, A = _[0], T = _[1], a = _[2], R = 0, o = []; R < A.length; R++) S = A[R], Object.prototype.hasOwnProperty.call(n, S) && n[S] && o.push(n[S][0]), n[S] = 0;
        for (t in T) Object.prototype.hasOwnProperty.call(T, t) && (e[t] = T[t]);
        for (i && i(_); o.length;) o.shift()();
        return r.push.apply(r, a || []), E()
    }

    function E() {
        for (var e, _ = 0; _ < r.length; _++) {
            for (var E = r[_], t = !0, S = 1; S < E.length; S++) {
                var T = E[S];
                0 !== n[T] && (t = !1)
            }
            t && (r.splice(_--, 1), e = A(A.s = E[0]))
        }
        return e
    }

    var t = {}, S = {2: 0}, n = {2: 0}, r = [];

    function A(_) {
        if (t[_]) return t[_].exports;
        var E = t[_] = {i: _, l: !1, exports: {}};
        return e[_].call(E.exports, E, E.exports, A), E.l = !0, E.exports
    }

    A.e = function (e) {
        var _ = [];
        S[e] ? _.push(S[e]) : 0 !== S[e] && {5: 1}[e] && _.push(S[e] = new Promise((function (_, E) {
            for (var t = "./" + e + ".bundle.css", n = A.p + t, r = document.getElementsByTagName("link"), T = 0; T < r.length; T++) {
                var a = (i = r[T]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (a === t || a === n)) return _()
            }
            var R = document.getElementsByTagName("style");
            for (T = 0; T < R.length; T++) {
                var i;
                if ((a = (i = R[T]).getAttribute("data-href")) === t || a === n) return _()
            }
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onload = _, o.onerror = function (_) {
                var t = _ && _.target && _.target.src || n,
                    r = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = t, delete S[e], o.parentNode.removeChild(o), E(r)
            }, o.href = n, document.getElementsByTagName("head")[0].appendChild(o)
        })).then((function () {
            S[e] = 0
        })));
        var E = n[e];
        if (0 !== E) if (E) _.push(E[2]); else {
            var t = new Promise((function (_, t) {
                E = n[e] = [_, t]
            }));
            _.push(E[2] = t);
            var r, T = document.createElement("script");
            T.charset = "utf-8", T.timeout = 120, A.nc && T.setAttribute("nonce", A.nc), T.src = function (e) {
                return A.p + "./" + e + ".1f67a16737481ad0eb56.js"
            }(e);
            var a = new Error;
            r = function (_) {
                T.onerror = T.onload = null, clearTimeout(R);
                var E = n[e];
                if (0 !== E) {
                    if (E) {
                        var t = _ && ("load" === _.type ? "missing" : _.type), S = _ && _.target && _.target.src;
                        a.message = "Loading chunk " + e + " failed.\n(" + t + ": " + S + ")", a.name = "ChunkLoadError", a.type = t, a.request = S, E[1](a)
                    }
                    n[e] = void 0
                }
            };
            var R = setTimeout((function () {
                r({type: "timeout", target: T})
            }), 12e4);
            T.onerror = T.onload = r, document.head.appendChild(T)
        }
        return Promise.all(_)
    }, A.m = e, A.c = t, A.d = function (e, _, E) {
        A.o(e, _) || Object.defineProperty(e, _, {enumerable: !0, get: E})
    }, A.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, A.t = function (e, _) {
        if (1 & _ && (e = A(e)), 8 & _) return e;
        if (4 & _ && "object" == typeof e && e && e.__esModule) return e;
        var E = Object.create(null);
        if (A.r(E), Object.defineProperty(E, "default", {
            enumerable: !0,
            value: e
        }), 2 & _ && "string" != typeof e) for (var t in e) A.d(E, t, function (_) {
            return e[_]
        }.bind(null, t));
        return E
    }, A.n = function (e) {
        var _ = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return A.d(_, "a", _), _
    }, A.o = function (e, _) {
        return Object.prototype.hasOwnProperty.call(e, _)
    }, A.p = "/", A.oe = function (e) {
        throw console.error(e), e
    };
    var T = window.webpackJsonp = window.webpackJsonp || [], a = T.push.bind(T);
    T.push = _, T = T.slice();
    for (var R = 0; R < T.length; R++) _(T[R]);
    var i = a;
    r.push([75, 3]), E()
}([, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "a", (function () {
        return t
    })), _.b = {
        EDIT_SERVER_IP: "EDIT_SERVER_IP",
        EDIT_SERVER_PORT: "EDIT_SERVER_PORT",
        EDIT_SERVER_REGION: "EDIT_SERVER_REGION",
        CHANGE_CONNECTION_STATUS: "CHANGE_CONNECTION_STATUS",
        SET_GAME_MENU: "TOGGLE_GAME_MENU",
        TOGGLE_GAME_CHAT_EDIT: "TOGGLE_GAME_CHAT_EDIT",
        EDIT_GAME_CHAT_PENDING_MESSAGE: "EDIT_GAME_CHAT_PENDING_MESSAGE",
        APPEND_GAME_CHAT_MESSAGE: "APPEND_GAME_CHAT_MESSAGE",
        APPEND_KILL_FEED: "APPEND_KILL_FEED",
        POP_KILL_FEED: "POP_KILL_FEED",
        SET_SCOREBOARD_VISIBLE: "SET_SCOREBOARD_VISIBLE",
        SET_MAP_VISIBLE: "SET_MAP_VISIBLE",
        TOGGLE_MAP: "TOGGLE_MAP",
        SET_DISCONNECTION_MESSAGE: "SET_DISCONNECTION_MESSAGE",
        SET_RESOURCE_LOADING_PROGRESS: "SET_RESOURCE_LOADING_PROGRESS",
        SET_ITEM_HELP_MESSAGE: "SET_ITEM_HELP_MESSAGE",
        SET_UI_SCALE: "SET_UI_SCALE",
        SET_CURRENTLY_CHANGING_KEYBIND: "SET_CURRENTLY_CHANGING_KEYBIND",
        SET_SHOW_MINIMAP_STATS_PANEL: "SET_SHOW_MINIMAP_STATS_PANEL",
        SET_SHOW_TEAM_SCORE_PANEL: "SET_SHOW_TEAM_SCORE_PANEL",
        SET_SHOW_FFA_SCORE_PANEL: "SET_SHOW_FFA_SCORE_PANEL",
        SET_TAB_SHOWS_SCOREBOARD: "SET_TAB_SHOWS_SCOREBOARD",
        SET_RESPAWN_SCREEN_VISIBLE: "SET_RESPAWN_SCREEN_VISIBLE",
        APPEND_NOTIFICATION_MESSAGE: "APPEND_NOTIFICATION_MESSAGE",
        POP_NOTIFICATION_MESSAGE: "POP_NOTIFICATION_MESSAGE",
        SET_ENABLE_CHAT: "SET_ENABLE_CHAT",
        APPEND_KILL_MEDAL: "APPEND_KILL_MEDAL",
        POP_KILL_MEDAL: "POP_KILL_MEDAL",
        SET_HUD_VISIBLE: "SET_HUD_VISIBLE",
        SET_AD_SDK_TYPE: "SET_AD_SDK_TYPE",
        SET_PREROLL_PLAYED: "SET_PREROLL_PLAYED",
        OPEN_ITEM_INSPECTION_WINDOW: "OPEN_ITEM_INSPECTION_WINDOW",
        CLOSE_ITEM_INSPECTION_WINDOW: "CLOSE_ITEM_INSPECTION_WINDOW",
        OPEN_CRATE_OPENING_WINDOW: "OPEN_CRATE_OPENING_WINDOW",
        CLOSE_CRATE_OPENING_WINDOW: "CLOSE_CRATE_OPENING_WINDOW"
    }, function (e) {
        e[e.NONE = 0] = "NONE", e[e.MAIN_MENU = 1] = "MAIN_MENU", e[e.SETTINGS = 2] = "SETTINGS"
    }(t || (t = {}))
}, function (e, _, E) {
    "use strict";
    var t, S;
    E.d(_, "a", (function () {
        return t
    })), E.d(_, "b", (function () {
        return S
    })), _.c = {
        SET_SENSITIVITY: "SET_SENSITIVITY",
        SET_ADS_SENSITIVITY_MULTIPLIER: "SET_ADS_SENSITIVITY_MULTIPLIER",
        SET_SCOPED_SENSITIVITY_MULTIPLIER: "SET_SCOPED_SENSITIVITY_MULTIPLIER",
        SET_RENDER_SCALE: "SET_RENDER_SCALE",
        SET_SOUND_VOLUME: "SET_SOUND_VOLUME",
        EDIT_PLAYER_NAME: "EDIT_PLAYER_NAME",
        SET_INVERT_Y_AXIS: "SET_INVERT_Y_AXIS",
        SET_INVERT_MOUSE_WHEEL: "SET_INVERT_MOUSE_WHEEL",
        SET_GAME_KEY: "SET_GAME_KEY",
        RESTORE_DEFAULT_GAME_KEYS: "RESTORE_DEFAULT_GAME_KEYS",
        SET_CROSSHAIR_WIDTH: "SET_CROSSHAIR_WIDTH",
        SET_CROSSHAIR_LENGTH: "SET_CROSSHAIR_LENGTH",
        SET_CROSSHAIR_COLOR: "SET_CROSSHAIR_COLOR",
        SET_CROSSHAIR_HIT_COLOR: "SET_CROSSHAIR_HIT_COLOR",
        SET_CROSSHAIR_STYLE: "SET_CROSSHAIR_STYLE",
        SET_CHAT_VISIBLE: "SET_CHAT_VISIBLE",
        SET_PREFERRED_LOADOUT: "SET_PREFERRED_LOADOUT",
        SET_TERRAIN_TEXTURE_URL: "SET_TERRAIN_TEXTURE_URL",
        SET_SNIPER_SCOPE_IMAGE_URL: "SET_SNIPER_SCOPE_IMAGE_URL",
        SET_SNIPER_SCOPE_IMAGE_OPACITY: "SET_SNIPER_SCOPE_IMAGE_OPACITY",
        SET_SNIPER_SCOPE_IMAGE_SCALE_X: "SET_SNIPER_SCOPE_IMAGE_SCALE_X",
        SET_SNIPER_SCOPE_IMAGE_SCALE_Y: "SET_SNIPER_SCOPE_IMAGE_SCALE_Y",
        SET_SNIPER_SCOPE_BACKGROUND_COLOR: "SET_SNIPER_SCOPE_BACKGROUND_COLOR",
        SET_SNIPER_SCOPE_BACKGROUND_OPACITY: "SET_SNIPER_SCOPE_BACKGROUND_OPACITY",
        SET_DISABLE_REWARDED_ADS_POPUP: "SET_DISABLE_REWARDED_ADS_POPUP"
    }, function (e) {
        e[e.CROSS = 0] = "CROSS", e[e.CROSS_WITH_DOT = 1] = "CROSS_WITH_DOT", e[e.DOT = 2] = "DOT"
    }(t || (t = {})), function (e) {
        e.MOVE_LEFT = "MOVE_LEFT", e.MOVE_RIGHT = "MOVE_RIGHT", e.MOVE_FORWARD = "MOVE_FORWARD", e.MOVE_BACKWARD = "MOVE_BACKWARD", e.JUMP = "JUMP", e.SPRINT = "SPRINT", e.CROUCH = "CROUCH", e.DROP_CURRENT_ITEM = "DROP_CURRENT_ITEM", e.RELOAD = "RELOAD", e.TOGGLE_INVENTORY = "TOGGLE_INVENTORY", e.INVENTORY_HELPER_KEY = "INVENTORY_HELPER_KEY", e.MAP = "MAP", e.TOGGLE_MAP = "TOGGLE_MAP", e.SELECT_SLOT_1 = "SELECT_SLOT_1", e.SELECT_SLOT_2 = "SELECT_SLOT_2", e.SELECT_SLOT_3 = "SELECT_SLOT_3", e.SELECT_SLOT_4 = "SELECT_SLOT_4", e.SELECT_SLOT_5 = "SELECT_SLOT_5", e.SELECT_NEXT_SLOT = "SELECT_NEXT_SLOT", e.SELECT_PREV_SLOT = "SELECT_PREV_SLOT", e.PRIMARY_ACTION = "PRIMARY_ACTION", e.SECONDARY_ACTION = "SECONDARY_ACTION", e.SECONDARY_ACTION_2 = "SECONDARY_ACTION_2", e.INTERACT = "INTERACT", e.SPRAY = "SPRAY"
    }(S || (S = {}))
}, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "a", (function () {
        return t
    })), function (e) {
        e[e.DOWNLOADING = 0] = "DOWNLOADING", e[e.LOADING = 1] = "LOADING"
    }(t || (t = {})), _.b = {
        SET_HEALTH_AND_SHIELD: "SET_HEALTH_AND_SHIELD",
        SET_CLIP_AMMO_COUNT: "SET_CLIP_AMMO_COUNT",
        SET_RESERVE_AMMO_COUNT: "SET_RESERVE_AMMO_COUNT",
        TOGGLE_AMMO_COUNT: "TOGGLE_AMMO_COUNT",
        SET_PLAYER_STATS: "SET_PLAYER_STATS",
        REMOVE_PLAYER_STATS: "REMOVE_PLAYER_STATS",
        SET_INVENTORY_ITEM: "SET_INVENTORY_ITEM",
        SELECT_INVENTORY_ITEM: "SELECT_INVENTORY_ITEM",
        SET_CURSOR_ITEM: "SET_CURSOR_ITEM",
        SET_ITEM_USAGE_PROGRESS: "SET_ITEM_USAGE_PROGRESS",
        SET_ITEM_PICKUP_HINT: "SET_ITEM_PICKUP_HINT",
        SET_HUD_CENTER_MESSAGE: "SET_HUD_CENTER_MESSAGE",
        SET_NUM_PLAYERS_ALIVE: "SET_NUM_PLAYERS_ALIVE",
        SET_CLIENT_NUM_KILLS: "SET_CLIENT_NUM_KILLS",
        SET_TIME_ALIVE: "SET_TIME_ALIVE",
        SET_TOTAL_NUM_PLAYERS: "SET_TOTAL_NUM_PLAYERS",
        SET_ELIMINATED_BY: "SET_ELIMINATED_BY",
        SET_TIMER: "SET_TIMER",
        SET_GAME_OVER: "SET_GAME_OVER",
        SET_XP_GAINED: "SET_XP_GAINED",
        SET_RECIPES_CRAFTABLE: "SET_RECIPES_CRAFTABLE",
        SET_LAST_MOUSE_POSITION: "SET_LAST_MOUSE_POSITION",
        TOGGLE_HUD_CENTER_MESSAGE: "TOGGLE_HUD_CENTER_MESSAGE",
        SET_LOADING_MAP_PROGRESS: "SET_LOADING_MAP_PROGRESS",
        SET_TEAM1_SCORE: "SET_TEAM1_SCORE",
        SET_TEAM2_SCORE: "SET_TEAM2_SCORE",
        SET_RESPAWN_TIMER: "SET_RESPAWN_TIMER",
        SET_CLIENT_PLAYER_ID: "SET_CLIENT_PLAYER_ID",
        SET_CLIENT_PLAYER_TEAM: "SET_CLIENT_PLAYER_TEAM",
        SET_CLIENT_PLAYER_NAME: "SET_CLIENT_PLAYER_NAME",
        SET_GAME_MODE_NAME: "SET_GAME_MODE_NAME",
        SET_SHOW_SCOPE: "SET_SHOW_SCOPE",
        SET_SCOREBOARD_TEAM_INFO: "SET_SCOREBOARD_TEAM_INFO",
        SET_FFA_RANK_1_SCORE: "SET_FFA_RANK_1_SCORE",
        SET_FFA_RANK_1_NAME: "SET_FFA_RANK_1_NAME",
        SET_FFA_RANK_2_EXISTS: "SET_FFA_RANK_2_EXISTS",
        SET_FFA_RANK_2_SCORE: "SET_FFA_RANK_2_SCORE",
        SET_FFA_RANK_2_NAME: "SET_FFA_RANK_2_NAME",
        SET_FFA_MY_RANK: "SET_FFA_MY_RANK",
        SET_FFA_MY_SCORE: "SET_FFA_MY_SCORE",
        SET_INVENTORY_STATUS: "SET_INVENTORY_STATUS",
        SET_VGEMS_GAINED: "SET_VGEMS_GAINED",
        SET_GAME_INITIALIZED: "SET_GAME_INITIALIZED"
    }
}, , , , function (e, _, E) {
    "use strict";
    E.d(_, "b", (function () {
        return i
    })), E.d(_, "c", (function () {
        return o
    }));
    var t, S = E(16), n = E.n(S), r = E(2), A = E(8), T = E(28);

    function a(e, _) {
        var E = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            _ && (t = t.filter((function (_) {
                return Object.getOwnPropertyDescriptor(e, _).enumerable
            }))), E.push.apply(E, t)
        }
        return E
    }

    function R(e) {
        for (var _ = 1; _ < arguments.length; _++) {
            var E = null != arguments[_] ? arguments[_] : {};
            _ % 2 ? a(Object(E), !0).forEach((function (_) {
                n()(e, _, E[_])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(E)) : a(Object(E)).forEach((function (_) {
                Object.defineProperty(e, _, Object.getOwnPropertyDescriptor(E, _))
            }))
        }
        return e
    }

    for (var i = ((t = {})[r.b.MOVE_LEFT] = {keyCode: A.a.A, keyName: "KeyA"}, t[r.b.MOVE_RIGHT] = {
        keyCode: A.a.D,
        keyName: "KeyD"
    }, t[r.b.MOVE_FORWARD] = {keyCode: A.a.W, keyName: "KeyW"}, t[r.b.MOVE_BACKWARD] = {
        keyCode: A.a.S,
        keyName: "KeyS"
    }, t[r.b.JUMP] = {keyCode: A.a.SPACE, keyName: "Space"}, t[r.b.SPRINT] = {
        keyCode: A.a.SHIFT,
        keyName: "Shift"
    }, t[r.b.CROUCH] = {keyCode: A.a.C, keyName: "KeyC"}, t[r.b.DROP_CURRENT_ITEM] = {
        keyCode: A.a.G,
        keyName: "KeyG"
    }, t[r.b.RELOAD] = {keyCode: A.a.R, keyName: "KeyR"}, t[r.b.TOGGLE_INVENTORY] = {
        keyCode: A.a.X,
        keyName: "KeyX"
    }, t[r.b.INVENTORY_HELPER_KEY] = {keyCode: A.a.SHIFT, keyName: "Shift"}, t[r.b.MAP] = {
        keyCode: A.a.TAB,
        keyName: "Tab"
    }, t[r.b.TOGGLE_MAP] = {keyCode: A.a.M, keyName: "KeyM"}, t[r.b.SELECT_SLOT_1] = {
        keyCode: A.a.Number1,
        keyName: "Digit1"
    }, t[r.b.SELECT_SLOT_2] = {keyCode: A.a.Number2, keyName: "Digit2"}, t[r.b.SELECT_SLOT_3] = {
        keyCode: A.a.Number3,
        keyName: "Digit3"
    }, t[r.b.SELECT_SLOT_4] = {keyCode: A.a.Number4, keyName: "Digit4"}, t[r.b.SELECT_SLOT_5] = {
        keyCode: A.a.Number5,
        keyName: "Digit5"
    }, t[r.b.PRIMARY_ACTION] = {
        keyCode: A.a.LEFT_MOUSE_BUTTON,
        keyName: "LMB"
    }, t[r.b.SECONDARY_ACTION] = {
        keyCode: A.a.RIGHT_MOUSE_BUTTON,
        keyName: "RMB"
    }, t[r.b.SECONDARY_ACTION_2] = {keyCode: A.a.F, keyName: "KeyF"}, t[r.b.INTERACT] = {
        keyCode: A.a.E,
        keyName: "KeyE"
    }, t[r.b.SPRAY] = {keyCode: A.a.T, keyName: "KeyT"}, t), o = {
        sensitivity: 7.5,
        adsSensitivityMultiplier: .7174,
        scopedSensitivityMultiplier: .1515,
        renderScale: 1,
        soundVolume: 1,
        invertYAxis: !1,
        invertMouseWheel: !1,
        playerName: "Soldier",
        keys: {},
        crosshairWidth: .15,
        crosshairLength: .8,
        crosshairColor: "#ffffff",
        crosshairHitColor: "#ff331c",
        crosshairStyle: r.a.CROSS,
        chatVisible: !0,
        primaryLoadout: T.b.COMBAT_ASSAULT_RIFLE,
        secondaryLoadout: T.c.STRIKE_PISTOL,
        terrainTextureURL: "",
        sniperScopeImageURL: "",
        sniperScopeImageOpacity: 1,
        sniperScopeImageScaleX: 1,
        sniperScopeImageScaleY: 1,
        sniperScopeBackgroundColor: "#000000",
        sniperScopeBackgroundOpacity: 1,
        disableRewardedAdsPopup: !1
    }, I = 0, L = Object.entries(i); I < L.length; I++) {
        var c = L[I], N = c[0], O = c[1];
        o.keys[N] = R({}, O)
    }
    _.a = function (e, _) {
        var E;
        switch (void 0 === e && (e = o), _.type) {
            case r.c.SET_DISABLE_REWARDED_ADS_POPUP:
                return R(R({}, e), {}, {disableRewardedAdsPopup: _.flag});
            case r.c.SET_SNIPER_SCOPE_BACKGROUND_COLOR:
                return R(R({}, e), {}, {sniperScopeBackgroundColor: _.value});
            case r.c.SET_SNIPER_SCOPE_BACKGROUND_OPACITY:
                return R(R({}, e), {}, {sniperScopeBackgroundOpacity: _.value});
            case r.c.SET_SNIPER_SCOPE_IMAGE_SCALE_X:
                return R(R({}, e), {}, {sniperScopeImageScaleX: _.value});
            case r.c.SET_SNIPER_SCOPE_IMAGE_SCALE_Y:
                return R(R({}, e), {}, {sniperScopeImageScaleY: _.value});
            case r.c.SET_SNIPER_SCOPE_IMAGE_OPACITY:
                return R(R({}, e), {}, {sniperScopeImageOpacity: _.value});
            case r.c.SET_SNIPER_SCOPE_IMAGE_URL:
                return R(R({}, e), {}, {sniperScopeImageURL: _.url});
            case r.c.SET_TERRAIN_TEXTURE_URL:
                return R(R({}, e), {}, {terrainTextureURL: _.url});
            case r.c.SET_PREFERRED_LOADOUT:
                return _.loadoutType === T.a.PRIMARY ? R(R({}, e), {}, {primaryLoadout: _.weaponType}) : _.loadoutType === T.a.SECONDARY ? R(R({}, e), {}, {secondaryLoadout: _.weaponType}) : e;
            case r.c.SET_CHAT_VISIBLE:
                return R(R({}, e), {}, {chatVisible: _.flag});
            case r.c.RESTORE_DEFAULT_GAME_KEYS:
                for (var t = R({}, e), S = 0, n = Object.entries(i); S < n.length; S++) {
                    var A = n[S], a = A[0], I = A[1];
                    t.keys[a] = R({}, I)
                }
                return t;
            case r.c.SET_GAME_KEY:
                return R(R({}, e), {}, {
                    keys: R(R({}, e.keys), {}, (E = {}, E[_.keyType] = {
                        keyCode: _.keyCode,
                        keyName: _.keyName
                    }, E))
                });
            case r.c.SET_INVERT_Y_AXIS:
                return R(R({}, e), {}, {invertYAxis: _.flag});
            case r.c.SET_INVERT_MOUSE_WHEEL:
                return R(R({}, e), {}, {invertMouseWheel: _.flag});
            case r.c.EDIT_PLAYER_NAME:
                return R(R({}, e), {}, {playerName: _.name});
            case r.c.SET_SENSITIVITY:
                return R(R({}, e), {}, {sensitivity: _.sensitivity});
            case r.c.SET_ADS_SENSITIVITY_MULTIPLIER:
                return R(R({}, e), {}, {adsSensitivityMultiplier: _.sensitivity});
            case r.c.SET_SCOPED_SENSITIVITY_MULTIPLIER:
                return R(R({}, e), {}, {scopedSensitivityMultiplier: _.sensitivity});
            case r.c.SET_RENDER_SCALE:
                return R(R({}, e), {}, {renderScale: _.renderScale});
            case r.c.SET_SOUND_VOLUME:
                return R(R({}, e), {}, {soundVolume: _.soundVolume});
            case r.c.SET_CROSSHAIR_WIDTH:
                return R(R({}, e), {}, {crosshairWidth: _.value});
            case r.c.SET_CROSSHAIR_LENGTH:
                return R(R({}, e), {}, {crosshairLength: _.value});
            case r.c.SET_CROSSHAIR_COLOR:
                return R(R({}, e), {}, {crosshairColor: _.value});
            case r.c.SET_CROSSHAIR_HIT_COLOR:
                return R(R({}, e), {}, {crosshairHitColor: _.value});
            case r.c.SET_CROSSHAIR_STYLE:
                return R(R({}, e), {}, {crosshairStyle: _.value});
            default:
                return e
        }
    }
}, function (e, _, E) {
    "use strict";
    _.a = {
        W: 87,
        A: 65,
        S: 83,
        D: 68,
        C: 67,
        E: 69,
        Q: 81,
        F: 70,
        G: 71,
        T: 84,
        R: 82,
        X: 88,
        M: 77,
        TAB: 9,
        Number1: 49,
        Number2: 50,
        Number3: 51,
        Number4: 52,
        Number5: 53,
        Number6: 54,
        SPACE: 32,
        SHIFT: 16,
        CTRL: 17,
        EQUALS: 187,
        ENTER: 13,
        0: 48,
        ESC: 27,
        LEFT_MOUSE_BUTTON: 0,
        RIGHT_MOUSE_BUTTON: -2,
        F9: 120,
        F10: 121
    }
}, , , , , function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e.LOADING = "LOADING", e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.DISCONNECTING = "DISCONNECTING", e.ENDED = "ENDED"
    }(t || (t = {})), _.a = t
}, , , , , , , function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e[e.EMPTY = 0] = "EMPTY", e[e.SHOVEL_COMMON = 1] = "SHOVEL_COMMON", e[e.SHOVEL_UNCOMMON = 2] = "SHOVEL_UNCOMMON", e[e.SHOVEL_RARE = 3] = "SHOVEL_RARE", e[e.SHOVEL_EPIC = 4] = "SHOVEL_EPIC", e[e.SHOVEL_LEGENDARY = 5] = "SHOVEL_LEGENDARY", e[e.SHOVEL_MYTHIC = 6] = "SHOVEL_MYTHIC", e[e.COMBAT_ASSAULT_RIFLE_COMMON = 7] = "COMBAT_ASSAULT_RIFLE_COMMON", e[e.COMBAT_ASSAULT_RIFLE_UNCOMMON = 8] = "COMBAT_ASSAULT_RIFLE_UNCOMMON", e[e.COMBAT_ASSAULT_RIFLE_RARE = 9] = "COMBAT_ASSAULT_RIFLE_RARE", e[e.COMBAT_ASSAULT_RIFLE_EPIC = 10] = "COMBAT_ASSAULT_RIFLE_EPIC", e[e.COMBAT_ASSAULT_RIFLE_LEGENDARY = 11] = "COMBAT_ASSAULT_RIFLE_LEGENDARY", e[e.COMBAT_ASSAULT_RIFLE_MYTHIC = 12] = "COMBAT_ASSAULT_RIFLE_MYTHIC", e[e.TACTICAL_ASSAULT_RIFLE_COMMON = 13] = "TACTICAL_ASSAULT_RIFLE_COMMON", e[e.TACTICAL_ASSAULT_RIFLE_UNCOMMON = 14] = "TACTICAL_ASSAULT_RIFLE_UNCOMMON", e[e.TACTICAL_ASSAULT_RIFLE_RARE = 15] = "TACTICAL_ASSAULT_RIFLE_RARE", e[e.TACTICAL_ASSAULT_RIFLE_EPIC = 16] = "TACTICAL_ASSAULT_RIFLE_EPIC", e[e.TACTICAL_ASSAULT_RIFLE_LEGENDARY = 17] = "TACTICAL_ASSAULT_RIFLE_LEGENDARY", e[e.TACTICAL_ASSAULT_RIFLE_MYTHIC = 18] = "TACTICAL_ASSAULT_RIFLE_MYTHIC", e[e.SURGE_ASSAULT_RIFLE_COMMON = 19] = "SURGE_ASSAULT_RIFLE_COMMON", e[e.SURGE_ASSAULT_RIFLE_UNCOMMON = 20] = "SURGE_ASSAULT_RIFLE_UNCOMMON", e[e.SURGE_ASSAULT_RIFLE_RARE = 21] = "SURGE_ASSAULT_RIFLE_RARE", e[e.SURGE_ASSAULT_RIFLE_EPIC = 22] = "SURGE_ASSAULT_RIFLE_EPIC", e[e.SURGE_ASSAULT_RIFLE_LEGENDARY = 23] = "SURGE_ASSAULT_RIFLE_LEGENDARY", e[e.SURGE_ASSAULT_RIFLE_MYTHIC = 24] = "SURGE_ASSAULT_RIFLE_MYTHIC", e[e.STRIKE_PISTOL_COMMON = 25] = "STRIKE_PISTOL_COMMON", e[e.STRIKE_PISTOL_UNCOMMON = 26] = "STRIKE_PISTOL_UNCOMMON", e[e.STRIKE_PISTOL_RARE = 27] = "STRIKE_PISTOL_RARE", e[e.STRIKE_PISTOL_EPIC = 28] = "STRIKE_PISTOL_EPIC", e[e.STRIKE_PISTOL_LEGENDARY = 29] = "STRIKE_PISTOL_LEGENDARY", e[e.STRIKE_PISTOL_MYTHIC = 30] = "STRIKE_PISTOL_MYTHIC", e[e.MAGNUM_PISTOL_COMMON = 31] = "MAGNUM_PISTOL_COMMON", e[e.MAGNUM_PISTOL_UNCOMMON = 32] = "MAGNUM_PISTOL_UNCOMMON", e[e.MAGNUM_PISTOL_RARE = 33] = "MAGNUM_PISTOL_RARE", e[e.MAGNUM_PISTOL_EPIC = 34] = "MAGNUM_PISTOL_EPIC", e[e.MAGNUM_PISTOL_LEGENDARY = 35] = "MAGNUM_PISTOL_LEGENDARY", e[e.MAGNUM_PISTOL_MYTHIC = 36] = "MAGNUM_PISTOL_MYTHIC", e[e.BURST_SHOTGUN_COMMON = 37] = "BURST_SHOTGUN_COMMON", e[e.BURST_SHOTGUN_UNCOMMON = 38] = "BURST_SHOTGUN_UNCOMMON", e[e.BURST_SHOTGUN_RARE = 39] = "BURST_SHOTGUN_RARE", e[e.BURST_SHOTGUN_EPIC = 40] = "BURST_SHOTGUN_EPIC", e[e.BURST_SHOTGUN_LEGENDARY = 41] = "BURST_SHOTGUN_LEGENDARY", e[e.BURST_SHOTGUN_MYTHIC = 42] = "BURST_SHOTGUN_MYTHIC", e[e.LIGHT_SUBMACHINE_GUN_COMMON = 43] = "LIGHT_SUBMACHINE_GUN_COMMON", e[e.LIGHT_SUBMACHINE_GUN_UNCOMMON = 44] = "LIGHT_SUBMACHINE_GUN_UNCOMMON", e[e.LIGHT_SUBMACHINE_GUN_RARE = 45] = "LIGHT_SUBMACHINE_GUN_RARE", e[e.LIGHT_SUBMACHINE_GUN_EPIC = 46] = "LIGHT_SUBMACHINE_GUN_EPIC", e[e.LIGHT_SUBMACHINE_GUN_LEGENDARY = 47] = "LIGHT_SUBMACHINE_GUN_LEGENDARY", e[e.LIGHT_SUBMACHINE_GUN_MYTHIC = 48] = "LIGHT_SUBMACHINE_GUN_MYTHIC", e[e.COMPACT_SUBMACHINE_GUN_COMMON = 49] = "COMPACT_SUBMACHINE_GUN_COMMON", e[e.COMPACT_SUBMACHINE_GUN_UNCOMMON = 50] = "COMPACT_SUBMACHINE_GUN_UNCOMMON", e[e.COMPACT_SUBMACHINE_GUN_RARE = 51] = "COMPACT_SUBMACHINE_GUN_RARE", e[e.COMPACT_SUBMACHINE_GUN_EPIC = 52] = "COMPACT_SUBMACHINE_GUN_EPIC", e[e.COMPACT_SUBMACHINE_GUN_LEGENDARY = 53] = "COMPACT_SUBMACHINE_GUN_LEGENDARY", e[e.COMPACT_SUBMACHINE_GUN_MYTHIC = 54] = "COMPACT_SUBMACHINE_GUN_MYTHIC", e[e.LIGHT_SNIPER_RIFLE_COMMON = 55] = "LIGHT_SNIPER_RIFLE_COMMON", e[e.LIGHT_SNIPER_RIFLE_UNCOMMON = 56] = "LIGHT_SNIPER_RIFLE_UNCOMMON", e[e.LIGHT_SNIPER_RIFLE_RARE = 57] = "LIGHT_SNIPER_RIFLE_RARE", e[e.LIGHT_SNIPER_RIFLE_EPIC = 58] = "LIGHT_SNIPER_RIFLE_EPIC", e[e.LIGHT_SNIPER_RIFLE_LEGENDARY = 59] = "LIGHT_SNIPER_RIFLE_LEGENDARY", e[e.LIGHT_SNIPER_RIFLE_MYTHIC = 60] = "LIGHT_SNIPER_RIFLE_MYTHIC", e[e.HEAVY_SNIPER_RIFLE_COMMON = 61] = "HEAVY_SNIPER_RIFLE_COMMON", e[e.HEAVY_SNIPER_RIFLE_UNCOMMON = 62] = "HEAVY_SNIPER_RIFLE_UNCOMMON", e[e.HEAVY_SNIPER_RIFLE_RARE = 63] = "HEAVY_SNIPER_RIFLE_RARE", e[e.HEAVY_SNIPER_RIFLE_EPIC = 64] = "HEAVY_SNIPER_RIFLE_EPIC", e[e.HEAVY_SNIPER_RIFLE_LEGENDARY = 65] = "HEAVY_SNIPER_RIFLE_LEGENDARY", e[e.HEAVY_SNIPER_RIFLE_MYTHIC = 66] = "HEAVY_SNIPER_RIFLE_MYTHIC", e[e.RUBY = 67] = "RUBY", e[e.SAPPHIRE = 68] = "SAPPHIRE", e[e.EMERALD = 69] = "EMERALD", e[e.IRON = 70] = "IRON", e[e.SULFUR = 71] = "SULFUR", e[e.AMMO_PISTOL = 72] = "AMMO_PISTOL", e[e.AMMO_ASSAULT_RIFLE = 73] = "AMMO_ASSAULT_RIFLE", e[e.AMMO_SUBMACHINE_GUN = 74] = "AMMO_SUBMACHINE_GUN", e[e.AMMO_SHOTGUN = 75] = "AMMO_SHOTGUN", e[e.AMMO_SNIPER_RIFLE = 76] = "AMMO_SNIPER_RIFLE", e[e.MINI_SHIELD_POTION = 77] = "MINI_SHIELD_POTION", e[e.ADVANCED_SHIELD_POTION = 78] = "ADVANCED_SHIELD_POTION", e[e.ULTIMATE_SHIELD_POTION = 79] = "ULTIMATE_SHIELD_POTION", e[e.MEDICINE_PILLS = 80] = "MEDICINE_PILLS", e[e.FIRST_AID_KIT = 81] = "FIRST_AID_KIT", e[e.RED_BERRY = 82] = "RED_BERRY", e[e.ORANGE_BERRY = 83] = "ORANGE_BERRY", e[e.BLOCK = 1e4] = "BLOCK"
    }(t || (t = {})), _.a = t
}, , function (e, _, E) {
    "use strict";
    E.d(_, "a", (function () {
        return t
    }));
    var t, S = E(16), n = E.n(S), r = E(1), A = E(13), T = E(51), a = E(48), R = E(20), i = E(50);

    function o(e, _) {
        var E = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            _ && (t = t.filter((function (_) {
                return Object.getOwnPropertyDescriptor(e, _).enumerable
            }))), E.push.apply(E, t)
        }
        return E
    }

    function I(e) {
        for (var _ = 1; _ < arguments.length; _++) {
            var E = null != arguments[_] ? arguments[_] : {};
            _ % 2 ? o(Object(E), !0).forEach((function (_) {
                n()(e, _, E[_])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(E)) : o(Object(E)).forEach((function (_) {
                Object.defineProperty(e, _, Object.getOwnPropertyDescriptor(E, _))
            }))
        }
        return e
    }

    !function (e) {
        e[e.NONE = 0] = "NONE", e[e.ADINPLAY = 1] = "ADINPLAY", e[e.CRAZYGAMES = 2] = "CRAZYGAMES"
    }(t || (t = {}));
    var L = {
        useMatchmaker: !0,
        serverIp: "localhost",
        serverPort: 3002,
        serverRegion: T.a.US_WEST,
        connectionStatus: A.a.LOADING,
        gameMenuType: r.a.NONE,
        gameChatMessages: [],
        gameChatIsEditing: !1,
        gameChatPendingMessage: "",
        killFeedMessages: [],
        killMedals: [],
        fullMapVisible: !1,
        scoreboardVisible: !1,
        disconnectionMessage: "Sorry, server connection failed :(",
        resourceLoadingProgress: 0,
        itemHelpMessageVisible: !1,
        itemHelpMessage: "",
        uiScale: 1,
        uiWidth: window.innerWidth,
        uiHeight: window.innerHeight,
        currentlyChangingKeybind: void 0,
        showMiniMapStatsPanel: !1,
        showTeamScorePanel: !1,
        showFFAScorePanel: !1,
        tabShowsScoreboard: !1,
        respawnScreenVisible: !1,
        notificationMessages: [],
        enableChat: !1,
        hudVisible: !0,
        prerollPlayed: !0,
        adSDKType: t.NONE,
        inspectionWindow: {visible: !1, title: "", itemType: R.a.EMPTY, skinType: a.a.DEFAULT, skinSeed: 0},
        crateOpeningWindow: {visible: !1, crateType: i.a.A}
    };
    _.b = function (e, _) {
        switch (void 0 === e && (e = L), _.type) {
            case r.b.OPEN_CRATE_OPENING_WINDOW:
                return I(I({}, e), {}, {crateOpeningWindow: {visible: !0, crateType: _.crateType}});
            case r.b.CLOSE_CRATE_OPENING_WINDOW:
                return I(I({}, e), {}, {crateOpeningWindow: {visible: !1}});
            case r.b.OPEN_ITEM_INSPECTION_WINDOW:
                return I(I({}, e), {}, {
                    inspectionWindow: {
                        visible: !0,
                        title: _.title,
                        itemType: _.itemType,
                        skinType: _.skinType,
                        skinSeed: _.skinSeed
                    }
                });
            case r.b.CLOSE_ITEM_INSPECTION_WINDOW:
                return I(I({}, e), {}, {inspectionWindow: {visible: !1}});
            case r.b.SET_PREROLL_PLAYED:
                return I(I({}, e), {}, {prerollPlayed: _.flag});
            case r.b.SET_AD_SDK_TYPE:
                return I(I({}, e), {}, {adSDKType: _.value});
            case r.b.SET_HUD_VISIBLE:
                return I(I({}, e), {}, {hudVisible: _.flag});
            case r.b.SET_ENABLE_CHAT:
                return I(I({}, e), {}, {enableChat: _.flag});
            case r.b.SET_RESPAWN_SCREEN_VISIBLE:
                return I(I({}, e), {}, {respawnScreenVisible: _.flag});
            case r.b.SET_TAB_SHOWS_SCOREBOARD:
                return I(I({}, e), {}, {tabShowsScoreboard: _.flag});
            case r.b.SET_SHOW_TEAM_SCORE_PANEL:
                return I(I({}, e), {}, {showTeamScorePanel: _.flag});
            case r.b.SET_SHOW_FFA_SCORE_PANEL:
                return I(I({}, e), {}, {showFFAScorePanel: _.flag});
            case r.b.SET_SHOW_MINIMAP_STATS_PANEL:
                return I(I({}, e), {}, {showMiniMapStatsPanel: _.flag});
            case r.b.SET_CURRENTLY_CHANGING_KEYBIND:
                return I(I({}, e), {}, {currentlyChangingKeybind: _.keyType});
            case r.b.SET_UI_SCALE:
                return I(I({}, e), {}, {uiScale: _.scale, uiWidth: _.width, uiHeight: _.height});
            case r.b.EDIT_SERVER_REGION:
                return I(I({}, e), {}, {serverRegion: _.region});
            case r.b.SET_ITEM_HELP_MESSAGE:
                return I(I({}, e), {}, {itemHelpMessageVisible: _.visible, itemHelpMessage: _.message});
            case r.b.SET_RESOURCE_LOADING_PROGRESS:
                return I(I({}, e), {}, {resourceLoadingProgress: _.progress});
            case r.b.SET_DISCONNECTION_MESSAGE:
                return I(I({}, e), {}, {disconnectionMessage: _.message});
            case r.b.EDIT_SERVER_IP:
                return I(I({}, e), {}, {serverIp: _.ip, useMatchmaker: !1});
            case r.b.EDIT_SERVER_PORT:
                return I(I({}, e), {}, {serverPort: _.port, useMatchmaker: !1});
            case r.b.CHANGE_CONNECTION_STATUS:
                return I(I({}, e), {}, {connectionStatus: _.connectionStatus});
            case r.b.SET_GAME_MENU:
                return I(I({}, e), {}, {gameMenuType: _.gameMenuType});
            case r.b.TOGGLE_GAME_CHAT_EDIT:
                return I(I({}, e), {}, {gameChatIsEditing: _.toggleStatus});
            case r.b.EDIT_GAME_CHAT_PENDING_MESSAGE:
                return I(I({}, e), {}, {gameChatPendingMessage: _.message});
            case r.b.APPEND_GAME_CHAT_MESSAGE:
                var E = I(I({}, e), {}, {gameChatMessages: [].concat(e.gameChatMessages, [_.message])});
                return E.gameChatMessages.length > 100 && (E.gameChatMessages = E.gameChatMessages.slice(E.gameChatMessages.length - 100)), E;
            case r.b.APPEND_KILL_FEED:
                for (var t = [].concat(e.killFeedMessages, [_.message]); t.length > 10;) t.shift();
                return I(I({}, e), {}, {killFeedMessages: t});
            case r.b.POP_KILL_FEED:
                return I(I({}, e), {}, {killFeedMessages: [].concat(e.killFeedMessages.slice(1))});
            case r.b.APPEND_NOTIFICATION_MESSAGE:
                for (var S = [_.message].concat(e.notificationMessages); S.length > 10;) S.pop();
                return I(I({}, e), {}, {notificationMessages: S});
            case r.b.POP_NOTIFICATION_MESSAGE:
                return I(I({}, e), {}, {notificationMessages: [].concat(e.notificationMessages.slice(0, e.notificationMessages.length - 1))});
            case r.b.SET_SCOREBOARD_VISIBLE:
                return I(I({}, e), {}, {scoreboardVisible: _.flag});
            case r.b.POP_KILL_MEDAL:
                return I(I({}, e), {}, {killMedals: [].concat(e.killMedals.slice(1))});
            case r.b.APPEND_KILL_MEDAL:
                var n = [].concat(e.killMedals, [{type: _.killMedalType, score: _.score}]);
                return I(I({}, e), {}, {killMedals: n});
            case r.b.SET_MAP_VISIBLE:
                return I(I({}, e), {}, {fullMapVisible: _.toggleStatus});
            case r.b.TOGGLE_MAP:
                return I(I({}, e), {}, {fullMapVisible: !e.fullMapVisible});
            default:
                return e
        }
    }
}, , function (e, _, E) {
    "use strict";
    _.a = {SET_AUTHENTICATED: "SET_AUTHENTICATED", SET_ACCOUNT_DATA: "SET_ACCOUNT_DATA"}
}, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "b", (function () {
        return r
    })), E.d(_, "c", (function () {
        return A
    })), function (e) {
        e[e.COMMON = 0] = "COMMON", e[e.UNCOMMON = 1] = "UNCOMMON", e[e.RARE = 2] = "RARE", e[e.EPIC = 3] = "EPIC", e[e.LEGENDARY = 4] = "LEGENDARY", e[e.MYTHIC = 5] = "MYTHIC"
    }(t || (t = {}));
    var S = ["#95a5a6", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#d35400"],
        n = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"], r = function (e) {
            return S[e]
        }, A = function (e) {
            return n[e]
        };
    _.a = t
}, function (e, _, E) {
    "use strict";
    var t = E(34);
    _.a = {
        CLIENT_VERSION: 74,
        NUM_CORES: void 0 === navigator.hardwareConcurrency ? 2 : navigator.hardwareConcurrency,
        SOCKET_SERVER_IP: "localhost",
        SOCKET_SERVER_PORT: 3001,
        CLIENT_WIDTH: 1600,
        CLIENT_HEIGHT: 900,
        CHUNK_SIZE: 32,
        CHUNK_NUM_BLOCKS: 32768,
        BLOCK_SIZE: .5,
        CRACK_INSTANCE_LIMIT: 100,
        PLAYER_WALKING_FOV: 60,
        PLAYER_RUNNING_FOV: 60,
        PLAYER_ADS_FOV: 45,
        PLAYER_SCOPED_FOV: 10,
        PLAYER_STANDING_EYE_POSITION: 1.15,
        PLAYER_STANDING_SIZE: Object(t.l)(.35, 1.3, .35),
        PLAYER_CROUCH_FALL_TEST_SIZE: Object(t.l)(.3, 1.3, .3),
        PLAYER_CROUCHING_EYE_POSITION: .77,
        PLAYER_UNCROUCH_DISTANCE_CHECK: 1.35,
        PLAYER_SPEED_LIMIT: 7,
        PLAYER_WATER_SPEED_LIMIT: 4,
        PLAYER_WATER_VERTICAL_SPEED_LIMIT: 2,
        PLAYER_RUN_SPEED_LIMIT_MODIFIER: 1.5,
        PLAYER_CROUCH_SPEED_LIMIT_MODIFIER: .3,
        PLAYER_ADS_SPEED_LIMIT_MODIFIER: .5,
        PLAYER_GROUND_FRICTION: .5,
        PLAYER_AIR_FRICTION: 1,
        PLAYER_ACCELERATION: 4,
        PLAYER_JUMP_FORCE: .51,
        PLAYER_MASS: .2,
        PLAYER_AIR_STRAFE_MODIFIER: .4,
        PLAYER_CROSSHAIR_LENGTH: .5,
        PLAYER_CROSSHAIR_PLANE_DISTANCE: 50,
        PLAYER_DAMAGE_INDICATOR_VISIBLE_DURATION: 3e3,
        PLAYER_DAMAGE_INDICATOR_FADE_DURATION: 500,
        PLAYER_CROSSHAIR_HITMARK_VISIBLE_DURATION: 250,
        PLAYER_CROSSHAIR_HITMARK_FADE_DURATION: 100,
        PLAYER_MODEL_HITMARK_VISIBLE_DURATION: 250,
        PLAYER_MODEL_HITMARK_FADE_DURATION: 500,
        PLAYER_INVENTORY_HOT_SLOTS_COUNT: 5,
        PLAYER_INVENTORY_STORAGE_SLOTS_COUNT: 5,
        PLAYER_INVENTORY_AMMO_SLOTS_COUNT: 5,
        WORLD_GRAVITY: 9.8,
        BLOCK_EDIT_RADIUS: 10,
        BLOCK_EDIT_VERIFICATION_DELAY_IN_SECS: 1,
        PHYSICS_TIME_STEP: .04,
        PING_CHECK_INTERVAL: 1e3,
        SKY_CLEAR_COLOR: 7845374,
        SKY_STORM_COLOR: 16724037,
        AD_REFRESH_RATE: 6e4
    }
}, , function (e, _, E) {
    "use strict";
    var t, S, n;
    E.d(_, "a", (function () {
        return t
    })), E.d(_, "b", (function () {
        return S
    })), E.d(_, "c", (function () {
        return n
    })), function (e) {
        e[e.PRIMARY = 0] = "PRIMARY", e[e.SECONDARY = 1] = "SECONDARY"
    }(t || (t = {})), function (e) {
        e[e.NONE = 0] = "NONE", e[e.COMBAT_ASSAULT_RIFLE = 1] = "COMBAT_ASSAULT_RIFLE", e[e.TACTICAL_ASSAULT_RIFLE = 2] = "TACTICAL_ASSAULT_RIFLE", e[e.SURGE_ASSAULT_RIFLE = 3] = "SURGE_ASSAULT_RIFLE", e[e.BURST_SHOTGUN = 4] = "BURST_SHOTGUN", e[e.LIGHT_SUBMACHINE_GUN = 5] = "LIGHT_SUBMACHINE_GUN", e[e.COMPACT_SUBMACHINE_GUN = 6] = "COMPACT_SUBMACHINE_GUN", e[e.LIGHT_SNIPER_RIFLE = 7] = "LIGHT_SNIPER_RIFLE", e[e.HEAVY_SNIPER_RIFLE = 8] = "HEAVY_SNIPER_RIFLE"
    }(S || (S = {})), function (e) {
        e[e.NONE = 0] = "NONE", e[e.STRIKE_PISTOL = 1] = "STRIKE_PISTOL", e[e.MAGNUM_PISTOL = 2] = "MAGNUM_PISTOL"
    }(n || (n = {}))
}, , , function (e, _, E) {
    "use strict";
    E.d(_, "i", (function () {
        return S
    })), E.d(_, "e", (function () {
        return n
    })), E.d(_, "s", (function () {
        return r
    })), E.d(_, "E", (function () {
        return A
    })), E.d(_, "h", (function () {
        return T
    })), E.d(_, "a", (function () {
        return a
    })), E.d(_, "b", (function () {
        return i
    })), E.d(_, "l", (function () {
        return o
    })), E.d(_, "y", (function () {
        return L
    })), E.d(_, "u", (function () {
        return I
    })), E.d(_, "F", (function () {
        return c
    })), E.d(_, "q", (function () {
        return N
    })), E.d(_, "w", (function () {
        return O
    })), E.d(_, "t", (function () {
        return s
    })), E.d(_, "D", (function () {
        return C
    })), E.d(_, "p", (function () {
        return u
    })), E.d(_, "A", (function () {
        return M
    })), E.d(_, "B", (function () {
        return P
    })), E.d(_, "z", (function () {
        return l
    })), E.d(_, "C", (function () {
        return G
    })), E.d(_, "x", (function () {
        return d
    })), E.d(_, "d", (function () {
        return p
    })), E.d(_, "n", (function () {
        return f
    })), E.d(_, "r", (function () {
        return D
    })), E.d(_, "c", (function () {
        return m
    })), E.d(_, "m", (function () {
        return y
    })), E.d(_, "o", (function () {
        return U
    })), E.d(_, "v", (function () {
        return H
    })), E.d(_, "k", (function () {
        return g
    })), E.d(_, "g", (function () {
        return b
    })), E.d(_, "j", (function () {
        return B
    })), E.d(_, "f", (function () {
        return h
    }));
    var t = E(1), S = function (e) {
        return {type: t.b.EDIT_SERVER_REGION, region: e}
    }, n = function (e) {
        return {type: t.b.CHANGE_CONNECTION_STATUS, connectionStatus: e}
    }, r = function (e) {
        return {type: t.b.SET_GAME_MENU, gameMenuType: e}
    }, A = function (e) {
        return {type: t.b.TOGGLE_GAME_CHAT_EDIT, toggleStatus: e}
    }, T = function (e) {
        return {type: t.b.EDIT_GAME_CHAT_PENDING_MESSAGE, message: e}
    }, a = function (e) {
        return {type: t.b.APPEND_GAME_CHAT_MESSAGE, message: e}
    }, R = 0, i = function (e, _, E, S, n, r, A) {
        return {
            type: t.b.APPEND_KILL_FEED,
            message: {
                id: R++,
                killerName: e,
                killerColor: _,
                victimName: E,
                victimColor: S,
                itemName: n,
                itemColor: r,
                template: A
            }
        }
    }, o = function () {
        return {type: t.b.POP_KILL_FEED}
    }, I = function (e) {
        return {type: t.b.SET_MAP_VISIBLE, toggleStatus: e}
    }, L = function (e) {
        return {type: t.b.SET_SCOREBOARD_VISIBLE, flag: e}
    }, c = function () {
        return {type: t.b.TOGGLE_MAP}
    }, N = function (e) {
        return {type: t.b.SET_DISCONNECTION_MESSAGE, message: e}
    }, O = function (e) {
        return {type: t.b.SET_RESOURCE_LOADING_PROGRESS, progress: e}
    }, s = function (e, _) {
        return {type: t.b.SET_ITEM_HELP_MESSAGE, visible: e, message: _}
    }, C = function (e, _, E) {
        return {type: t.b.SET_UI_SCALE, scale: e, width: _, height: E}
    }, u = function (e) {
        return {type: t.b.SET_CURRENTLY_CHANGING_KEYBIND, keyType: e}
    }, M = function (e) {
        return {type: t.b.SET_SHOW_MINIMAP_STATS_PANEL, flag: e}
    }, P = function (e) {
        return {type: t.b.SET_SHOW_TEAM_SCORE_PANEL, flag: e}
    }, l = function (e) {
        return {type: t.b.SET_SHOW_FFA_SCORE_PANEL, flag: e}
    }, G = function (e) {
        return {type: t.b.SET_TAB_SHOWS_SCOREBOARD, flag: e}
    }, d = function (e) {
        return {type: t.b.SET_RESPAWN_SCREEN_VISIBLE, flag: e}
    }, p = function (e) {
        return {type: t.b.APPEND_NOTIFICATION_MESSAGE, message: e}
    }, f = function () {
        return {type: t.b.POP_NOTIFICATION_MESSAGE}
    }, D = function (e) {
        return {type: t.b.SET_ENABLE_CHAT, flag: e}
    }, m = function (e, _) {
        return {type: t.b.APPEND_KILL_MEDAL, killMedalType: e, score: _}
    }, y = function () {
        return {type: t.b.POP_KILL_MEDAL}
    }, U = function (e) {
        return {type: t.b.SET_AD_SDK_TYPE, value: e}
    }, H = function (e) {
        return {type: t.b.SET_PREROLL_PLAYED, flag: e}
    }, g = function (e, _, E, S) {
        return {type: t.b.OPEN_ITEM_INSPECTION_WINDOW, title: e, itemType: _, skinType: E, skinSeed: S}
    }, b = function () {
        return {type: t.b.CLOSE_ITEM_INSPECTION_WINDOW}
    }, B = function (e) {
        return {type: t.b.OPEN_CRATE_OPENING_WINDOW, crateType: e}
    }, h = function () {
        return {type: t.b.CLOSE_CRATE_OPENING_WINDOW}
    }
}, , , function (e, _, E) {
    "use strict";
    E.d(_, "l", (function () {
        return t
    })), E.d(_, "b", (function () {
        return S
    })), E.d(_, "g", (function () {
        return n
    })), E.d(_, "c", (function () {
        return r
    })), E.d(_, "a", (function () {
        return A
    })), E.d(_, "k", (function () {
        return T
    })), E.d(_, "i", (function () {
        return a
    })), E.d(_, "f", (function () {
        return R
    })), E.d(_, "h", (function () {
        return o
    })), E.d(_, "j", (function () {
        return I
    })), E.d(_, "d", (function () {
        return L
    })), E.d(_, "e", (function () {
        return c
    }));
    var t = function (e, _, E) {
        return {x: e, y: _, z: E}
    }, S = function (e) {
        return t(e.x, e.y, e.z)
    }, n = function (e, _) {
        return e.x * _.x + e.y * _.y + e.z * _.z
    }, r = function (e, _) {
        var E = t(e.y * _.z - e.z * _.y, e.z * _.x - e.x * _.z, e.x * _.y - e.y * _.x);
        e.x = E.x, e.y = E.y, e.z = E.z
    }, A = function (e, _) {
        e.x += _.x, e.y += _.y, e.z += _.z
    }, T = function (e, _) {
        e.x -= _.x, e.y -= _.y, e.z -= _.z
    }, a = function (e, _) {
        e.x *= _, e.y *= _, e.z *= _
    }, R = function (e, _) {
        e.x /= _, e.y /= _, e.z /= _
    }, i = function (e) {
        return e.x * e.x + e.y * e.y + e.z * e.z
    }, o = function (e) {
        return Math.sqrt(i(e))
    }, I = function (e) {
        var _ = o(e);
        0 !== _ && (e.x /= _, e.y /= _, e.z /= _)
    }, L = function (e, _) {
        return Math.sqrt(c(e, _))
    }, c = function (e, _) {
        var E = t(e.x - _.x, e.y - _.y, e.z - _.z);
        return i(E)
    }
}, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "b", (function () {
        return T
    })), E.d(_, "c", (function () {
        return a
    })), E.d(_, "d", (function () {
        return R
    })), E.d(_, "e", (function () {
        return i
    })), function (e) {
        e[e.COMMON = 0] = "COMMON", e[e.NOTEWORTHY = 1] = "NOTEWORTHY", e[e.PRECIOUS = 2] = "PRECIOUS", e[e.MAGNIFICENT = 3] = "MAGNIFICENT", e[e.EXTRAORDINARY = 4] = "EXTRAORDINARY", e[e.COVERT = 5] = "COVERT"
    }(t || (t = {}));
    var S = ["#757575", "#4263db", "#8b27ea", "#d424b4", "#df1d41", "#f1c40f"],
        n = ["#ffffff", "#809cff", "#b463ff", "#ff54e0", "#ff4265", "#ffe063"],
        r = ["Common", "Noteworthy", "Precious", "Magnificent", "Extraordinary", "Covert"],
        A = [0, 5, 10, 25, 200, 1e3], T = function (e) {
            return S[e]
        }, a = function (e) {
            return r[e]
        }, R = function (e) {
            return n[e]
        }, i = function (e) {
            return A[e]
        };
    _.a = t
}, function (e, _, E) {
    "use strict";
    E.d(_, "b", (function () {
        return S
    })), E.d(_, "a", (function () {
        return n
    }));
    var t = E(24), S = function (e) {
        return {type: t.a.SET_AUTHENTICATED, flag: e}
    }, n = function (e) {
        return {type: t.a.SET_ACCOUNT_DATA, data: e}
    }
}, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "b", (function () {
        return n
    })), function (e) {
        e[e.GREEN = 0] = "GREEN", e[e.BLUE = 1] = "BLUE", e[e.RED = 2] = "RED", e[e.UNKNOWN = 3] = "UNKNOWN", e[e.__LENGTH = 4] = "__LENGTH"
    }(t || (t = {}));
    var S = ["#2ecc71", "#5bbdff", "#ff0000", "white"], n = function (e) {
        return S[e]
    };
    _.a = t
}, function (e, _, E) {
    "use strict";
    var t;
    E.d(_, "b", (function () {
        return r
    })), E.d(_, "c", (function () {
        return A
    })), function (e) {
        e[e.BATTLE_ROYALE = 0] = "BATTLE_ROYALE", e[e.CAPTURE_THE_GEMS = 1] = "CAPTURE_THE_GEMS", e[e.SURVIVAL = 2] = "SURVIVAL"
    }(t || (t = {}));
    var S = ["br", "ctg", "svv"], n = ["BattleRoyale", "CaptureTheGems", "Survival"], r = function (e) {
        return n[e]
    }, A = function (e) {
        return S[e]
    };
    _.a = t
}, , , , , , , , function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e[e.CLOSED = 0] = "CLOSED", e[e.PLAYER_INVENTORY = 1] = "PLAYER_INVENTORY", e[e.WORK_STATION = 2] = "WORK_STATION", e[e.LOADOUT_STATION = 3] = "LOADOUT_STATION", e[e.WOODEN_CHEST = 4] = "WOODEN_CHEST", e[e.IRON_CHEST = 5] = "IRON_CHEST", e[e.GOLD_CHEST = 6] = "GOLD_CHEST"
    }(t || (t = {})), _.a = t
}, function (e, _, E) {
    "use strict";
    E.d(_, "d", (function () {
        return V
    })), E.d(_, "a", (function () {
        return w
    })), E.d(_, "b", (function () {
        return k
    })), E.d(_, "c", (function () {
        return K
    }));
    var t = E(15), S = E.n(t), n = E(21), r = E.n(n), A = E(16), T = E.n(A), a = E(17), R = E(22), i = E(7), o = E(3),
        I = E(37), L = E(20), c = E(26), N = E(25), O = E(38), s = E(46), C = E(35);

    function u(e, _) {
        var E = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            _ && (t = t.filter((function (_) {
                return Object.getOwnPropertyDescriptor(e, _).enumerable
            }))), E.push.apply(E, t)
        }
        return E
    }

    function M(e) {
        for (var _ = 1; _ < arguments.length; _++) {
            var E = null != arguments[_] ? arguments[_] : {};
            _ % 2 ? u(Object(E), !0).forEach((function (_) {
                T()(e, _, E[_])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(E)) : u(Object(E)).forEach((function (_) {
                Object.defineProperty(e, _, Object.getOwnPropertyDescriptor(E, _))
            }))
        }
        return e
    }

    var P = [];
    P.length = 27, P.fill({
        name: "",
        description: "",
        tier: N.a.COMMON,
        cosmeticsTier: C.a.COMMON,
        type: L.a.EMPTY,
        count: 0,
        durability: 0
    });
    var l = {
        gameInitialized: !1,
        maxHealth: 100,
        health: 100,
        maxShield: 100,
        shield: 0,
        ammoCountVisible: !1,
        clipAmmoCount: 0,
        reserveAmmoCount: 0,
        teams: [],
        players: {},
        inventory: P,
        selectedItem: 0,
        cursorItem: {type: L.a.EMPTY, tier: N.a.COMMON, count: 0, durability: 0},
        itemUsage: {type: L.a.EMPTY, tier: N.a.COMMON, tip: "", progress: 0},
        itemPickupHint: {type: L.a.EMPTY, tier: N.a.COMMON, cosmeticsTier: C.a.COMMON, tip: "", name: "", count: 1},
        recipesCraftable: [!1],
        inventoryStatus: s.a.CLOSED,
        hudCenterMsgVisible: !1,
        hudCenterMsg: "",
        numPlayersAlive: 0,
        clientNumKills: 0,
        totalNumPlayers: 0,
        eliminatedBy: "Unknown",
        timeAlive: 0,
        timer: 0,
        xpGained: 0,
        vgemsGained: 0,
        gameOver: !1,
        gameWon: !1,
        mouseX: 500,
        mouseY: 500,
        mapLoadingStage: o.a.DOWNLOADING,
        mapLoadingProgress: 0,
        team1Score: 0,
        team2Score: 0,
        respawnTimer: -1,
        clientPlayerID: -1,
        clientPlayerTeam: I.a.GREEN,
        clientPlayerName: "",
        gameModeName: Object(O.b)(O.a.BATTLE_ROYALE),
        showScope: !1,
        FFARank1Score: 0,
        FFARank1Name: "",
        FFARank2Exists: !1,
        FFARank2Score: 0,
        FFARank2Name: "",
        FFAMyScore: 0,
        FFAMyRank: 1
    }, G = function (e, _) {
        var E;
        switch (void 0 === e && (e = l), _.type) {
            case o.b.SET_GAME_INITIALIZED:
                return M(M({}, e), {}, {gameInitialized: _.flag});
            case o.b.SET_VGEMS_GAINED:
                return M(M({}, e), {}, {vgemsGained: _.count});
            case o.b.SET_INVENTORY_STATUS:
                return M(M({}, e), {}, {inventoryStatus: _.inventoryStatus});
            case o.b.SET_FFA_RANK_1_SCORE:
                return M(M({}, e), {}, {FFARank1Score: _.rank1Score});
            case o.b.SET_FFA_RANK_1_NAME:
                return M(M({}, e), {}, {FFARank1Name: _.rank1Name});
            case o.b.SET_FFA_RANK_2_EXISTS:
                return M(M({}, e), {}, {FFARank2Exists: _.rank2Exists});
            case o.b.SET_FFA_RANK_2_SCORE:
                return M(M({}, e), {}, {FFARank2Score: _.rank2Score});
            case o.b.SET_FFA_RANK_2_NAME:
                return M(M({}, e), {}, {FFARank2Name: _.rank2Name});
            case o.b.SET_FFA_MY_RANK:
                return M(M({}, e), {}, {FFAMyRank: _.myRank});
            case o.b.SET_FFA_MY_SCORE:
                return M(M({}, e), {}, {FFAMyScore: _.myScore});
            case o.b.SET_SCOREBOARD_TEAM_INFO:
                return M(M({}, e), {}, {teams: _.teams});
            case o.b.SET_SHOW_SCOPE:
                return M(M({}, e), {}, {showScope: _.flag});
            case o.b.SET_CLIENT_PLAYER_TEAM:
                return M(M({}, e), {}, {clientPlayerTeam: _.teamType});
            case o.b.SET_CLIENT_PLAYER_NAME:
                return M(M({}, e), {}, {clientPlayerName: _.name});
            case o.b.SET_GAME_MODE_NAME:
                return M(M({}, e), {}, {gameModeName: _.gameModeName});
            case o.b.SET_CLIENT_PLAYER_ID:
                return M(M({}, e), {}, {clientPlayerID: _.id});
            case o.b.SET_RESPAWN_TIMER:
                return M(M({}, e), {}, {respawnTimer: _.value});
            case o.b.SET_TEAM1_SCORE:
                return M(M({}, e), {}, {team1Score: _.score});
            case o.b.SET_TEAM2_SCORE:
                return M(M({}, e), {}, {team2Score: _.score});
            case o.b.SET_XP_GAINED:
                return M(M({}, e), {}, {xpGained: _.count});
            case o.b.SET_LOADING_MAP_PROGRESS:
                return M(M({}, e), {}, {mapLoadingProgress: _.progress, mapLoadingStage: _.stage});
            case o.b.SET_TIMER:
                return M(M({}, e), {}, {timer: _.count});
            case o.b.TOGGLE_HUD_CENTER_MESSAGE:
                return M(M({}, e), {}, {hudCenterMsgVisible: _.toggleStatus});
            case o.b.SET_LAST_MOUSE_POSITION:
                return M(M({}, e), {}, {mouseX: _.x, mouseY: _.y});
            case o.b.SET_RECIPES_CRAFTABLE:
                return M(M({}, e), {}, {recipesCraftable: _.data});
            case o.b.SET_TOTAL_NUM_PLAYERS:
                return M(M({}, e), {}, {totalNumPlayers: _.count});
            case o.b.SET_GAME_OVER:
                return M(M({}, e), {}, {gameOver: _.flag, gameWon: _.won});
            case o.b.SET_TIME_ALIVE:
                return M(M({}, e), {}, {timeAlive: _.count});
            case o.b.SET_NUM_PLAYERS_ALIVE:
                return M(M({}, e), {}, {numPlayersAlive: _.count});
            case o.b.SET_ELIMINATED_BY:
                return M(M({}, e), {}, {eliminatedBy: _.eliminatedBy});
            case o.b.SET_CLIENT_NUM_KILLS:
                return M(M({}, e), {}, {clientNumKills: _.count});
            case o.b.SET_HUD_CENTER_MESSAGE:
                return M(M({}, e), {}, {hudCenterMsg: _.message});
            case o.b.SET_ITEM_USAGE_PROGRESS:
                return M(M({}, e), {}, {
                    itemUsage: {
                        type: _.itemType,
                        tier: _.itemTier,
                        tip: _.tip,
                        progress: _.progress
                    }
                });
            case o.b.SET_ITEM_PICKUP_HINT:
                return M(M({}, e), {}, {
                    itemPickupHint: {
                        type: _.itemType,
                        tier: _.itemTier,
                        cosmeticsTier: _.cosmeticsTier,
                        name: _.itemName,
                        tip: _.itemTip,
                        count: _.itemCount
                    }
                });
            case o.b.SET_HEALTH_AND_SHIELD:
                return M(M({}, e), {}, {
                    maxHealth: _.maxHealth,
                    health: _.health,
                    maxShield: _.maxShield,
                    shield: _.shield
                });
            case o.b.TOGGLE_AMMO_COUNT:
                return M(M({}, e), {}, {ammoCountVisible: _.toggleStatus});
            case o.b.SET_CLIP_AMMO_COUNT:
                return M(M({}, e), {}, {clipAmmoCount: _.count});
            case o.b.SET_RESERVE_AMMO_COUNT:
                return M(M({}, e), {}, {reserveAmmoCount: _.count});
            case o.b.SET_PLAYER_STATS:
                var t = 0, S = 0, n = 0, r = 0, A = I.a.UNKNOWN, T = "Player";
                return _.playerId in e.players && (t = e.players[_.playerId].kills, S = e.players[_.playerId].deaths, n = e.players[_.playerId].assists, r = e.players[_.playerId].score, A = e.players[_.playerId].team, T = e.players[_.playerId].name), M(M({}, e), {}, {
                    players: M(M({}, e.players), {}, (E = {}, E[_.playerId] = {
                        id: _.playerId,
                        team: void 0 !== _.team ? _.team : A,
                        name: void 0 !== _.name ? _.name : T,
                        kills: void 0 !== _.kills ? _.kills : t,
                        deaths: void 0 !== _.deaths ? _.deaths : S,
                        assists: void 0 !== _.assists ? _.assists : n,
                        score: void 0 !== _.score ? _.score : r
                    }, E))
                });
            case o.b.REMOVE_PLAYER_STATS:
                var a = M(M({}, e), {}, {players: M({}, e.players)});
                return delete a.players[_.playerId], a;
            case o.b.SET_INVENTORY_ITEM:
                if (_.index < 0 || _.index >= e.inventory.length) return e;
                var R = M(M({}, e), {}, {inventory: [].concat(e.inventory)});
                return R.inventory[_.index] = {
                    name: _.itemName,
                    description: _.itemDescription,
                    tier: _.itemTier,
                    cosmeticsTier: _.cosmeticsTier,
                    type: _.itemType,
                    count: _.count,
                    durability: _.durability
                }, R;
            case o.b.SELECT_INVENTORY_ITEM:
                return _.index < 0 || _.index >= c.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT ? e : M(M({}, e), {}, {selectedItem: _.index});
            case o.b.SET_CURSOR_ITEM:
                return M(M({}, e), {}, {
                    cursorItem: {
                        type: _.itemType,
                        tier: _.itemTier,
                        count: _.count,
                        durability: _.durability
                    }
                });
            default:
                return e
        }
    }, d = E(24);

    function p(e, _) {
        var E = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            _ && (t = t.filter((function (_) {
                return Object.getOwnPropertyDescriptor(e, _).enumerable
            }))), E.push.apply(E, t)
        }
        return E
    }

    function f(e) {
        for (var _ = 1; _ < arguments.length; _++) {
            var E = null != arguments[_] ? arguments[_] : {};
            _ % 2 ? p(Object(E), !0).forEach((function (_) {
                T()(e, _, E[_])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(E)) : p(Object(E)).forEach((function (_) {
                Object.defineProperty(e, _, Object.getOwnPropertyDescriptor(E, _))
            }))
        }
        return e
    }

    var D = {
        authenticated: !1,
        profile: {
            nickname: "Soldier",
            has_nickname: !1,
            creation_time: Date.now(),
            level: 1,
            xp: 0,
            gems: 0,
            score: 0,
            br: {
                total_games_played: 0,
                total_games_won: 0,
                total_kills: 0,
                total_deaths: 0,
                total_survival_time: 0,
                total_score: 0,
                matches: []
            },
            ctg: {
                total_games_played: 0,
                total_games_won: 0,
                total_kills: 0,
                total_deaths: 0,
                total_captures: 0,
                total_score: 0,
                matches: []
            },
            permissions: []
        }
    }, m = function (e, _) {
        switch (void 0 === e && (e = D), _.type) {
            case d.a.SET_AUTHENTICATED:
                return f(f({}, e), {}, {authenticated: _.flag});
            case d.a.SET_ACCOUNT_DATA:
                return f(f({}, e), {}, {profile: f({}, _.data)});
            default:
                return e
        }
    }, y = Object(a.b)({ui: R.b, settings: i.a, gameData: G, account: m}), U = E(33), H = E(59), g = E.n(H), b = E(2);

    function B(e, _) {
        var E = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            _ && (t = t.filter((function (_) {
                return Object.getOwnPropertyDescriptor(e, _).enumerable
            }))), E.push.apply(E, t)
        }
        return E
    }

    function h(e) {
        for (var _ = 1; _ < arguments.length; _++) {
            var E = null != arguments[_] ? arguments[_] : {};
            _ % 2 ? B(Object(E), !0).forEach((function (_) {
                T()(e, _, E[_])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(E)) : B(Object(E)).forEach((function (_) {
                Object.defineProperty(e, _, Object.getOwnPropertyDescriptor(E, _))
            }))
        }
        return e
    }

    var Y = {
            2: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {invertYAxis: !1})})
            }, 3: function (e) {
                for (var _ = h(h({}, e), {}, {
                    settings: h(h({}, e.settings), {}, {
                        invertMouseWheel: !1,
                        keys: {}
                    })
                }), E = 0, t = Object.entries(i.b); E < t.length; E++) {
                    var S = t[E], n = S[0], r = S[1];
                    _.settings.keys[n] = h({}, r)
                }
                return _
            }, 4: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {renderScale: 1})})
            }, 5: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {soundVolume: 1})})
            }, 6: function (e) {
                var _ = h({}, e);
                return delete _.settings.keys[b.b.SELECT_NEXT_SLOT], delete _.settings.keys[b.b.SELECT_PREV_SLOT], _.settings.keys[b.b.INTERACT] = h({}, i.b[b.b.INTERACT]), _
            }, 7: function (e) {
                return h(h({}, e), {}, {
                    settings: h(h({}, e.settings), {}, {
                        crosshairWidth: i.c.crosshairWidth,
                        crosshairLength: i.c.crosshairLength,
                        crosshairColor: i.c.crosshairColor,
                        crosshairHitColor: i.c.crosshairHitColor,
                        crosshairStyle: i.c.crosshairStyle
                    })
                })
            }, 8: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {chatVisible: i.c.chatVisible})})
            }, 9: function (e) {
                return h(h({}, e), {}, {
                    settings: h(h({}, e.settings), {}, {
                        primaryLoadout: i.c.primaryLoadout,
                        secondaryLoadout: i.c.secondaryLoadout
                    })
                })
            }, 10: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {terrainTextureURL: i.c.terrainTextureURL})})
            }, 11: function (e) {
                var _ = h({}, e);
                return _.settings.keys[b.b.SPRAY] = h({}, i.b[b.b.SPRAY]), _
            }, 12: function (e) {
                return h(h({}, e), {}, {
                    settings: h(h({}, e.settings), {}, {
                        sniperScopeImageURL: i.c.sniperScopeImageURL,
                        sniperScopeImageOpacity: i.c.sniperScopeImageOpacity,
                        sniperScopeImageScaleX: i.c.sniperScopeImageScaleX,
                        sniperScopeImageScaleY: i.c.sniperScopeImageScaleY,
                        sniperScopeBackgroundColor: i.c.sniperScopeBackgroundColor,
                        sniperScopeBackgroundOpacity: i.c.sniperScopeBackgroundOpacity,
                        adsSensitivityMultiplier: i.c.adsSensitivityMultiplier,
                        scopedSensitivityMultiplier: i.c.scopedSensitivityMultiplier
                    })
                })
            }, 13: function (e) {
                var _ = h({}, e);
                return _.settings.keys[b.b.INVENTORY_HELPER_KEY] = h({}, i.b[b.b.INVENTORY_HELPER_KEY]), _
            }, 14: function (e) {
                return h(h({}, e), {}, {
                    settings: h(h({}, e.settings), {}, {
                        primaryLoadout: e.settings.primaryLoadout + 1,
                        secondaryLoadout: e.settings.secondaryLoadout + 1
                    })
                })
            }, 15: function (e) {
                return h(h({}, e), {}, {settings: h(h({}, e.settings), {}, {disableRewardedAdsPopup: i.c.disableRewardedAdsPopup})})
            }
        }, F = {key: "root", storage: g.a, version: 15, whitelist: ["settings"], migrate: Object(U.a)(Y, {debug: !1})},
        v = Object(U.b)(F, y), V = Object(a.c)(v), k = void 0, w = function (e) {
            k = Object(U.c)(V, null, (function () {
                e(k)
            }))
        }, K = function () {
            var e = r()(S.a.mark((function e(_) {
                return S.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, k.persist();
                        case 2:
                            return _(), e.next = 5, k.flush();
                        case 5:
                            return e.next = 7, k.pause();
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (_) {
                return e.apply(this, arguments)
            }
        }()
}, function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e[e.DEFAULT = 0] = "DEFAULT", e[e.SP_ARMY = 1] = "SP_ARMY", e[e.SP_NAVY = 2] = "SP_NAVY", e[e.SP_CRIMSON = 3] = "SP_CRIMSON", e[e.SP_LAVENDER = 4] = "SP_LAVENDER", e[e.SP_RUST = 5] = "SP_RUST", e[e.SP_PEACH = 6] = "SP_PEACH", e[e.SP_DARK_ZEBRA = 7] = "SP_DARK_ZEBRA", e[e.SP_LIGHT_ZEBRA = 8] = "SP_LIGHT_ZEBRA", e[e.SP_JUNGLE = 9] = "SP_JUNGLE", e[e.SP_AVALANCHE = 10] = "SP_AVALANCHE", e[e.SP_SANDSTORM = 11] = "SP_SANDSTORM", e[e.SP_PIXEL_STORM_ORANGE = 12] = "SP_PIXEL_STORM_ORANGE", e[e.SP_PIXEL_STORM_BLUE = 13] = "SP_PIXEL_STORM_BLUE", e[e.SP_PIXEL_STORM_CONTRAST = 14] = "SP_PIXEL_STORM_CONTRAST", e[e.SP_PIXEL_STORM_GLITCHED = 15] = "SP_PIXEL_STORM_GLITCHED", e[e.SP_SPRING = 16] = "SP_SPRING", e[e.SP_SUMMER = 17] = "SP_SUMMER", e[e.SP_FALL = 18] = "SP_FALL", e[e.SP_WINTER = 19] = "SP_WINTER", e[e.SP_PEARL_MARBLE = 20] = "SP_PEARL_MARBLE", e[e.SP_VOLCANIC = 21] = "SP_VOLCANIC", e[e.SP_BLAZE = 22] = "SP_BLAZE", e[e.SP_FADE = 23] = "SP_FADE", e[e.MP_GOLDEN = 24] = "MP_GOLDEN", e[e.MP_RUBY = 25] = "MP_RUBY", e[e.MP_SAPPHIRE = 26] = "MP_SAPPHIRE", e[e.MP_EMERALD = 27] = "MP_EMERALD", e[e.MP_JUNGLE = 28] = "MP_JUNGLE", e[e.MP_AVALANCHE = 29] = "MP_AVALANCHE", e[e.MP_SANDSTORM = 30] = "MP_SANDSTORM", e[e.MP_PIXEL_STORM_ORANGE = 31] = "MP_PIXEL_STORM_ORANGE", e[e.MP_PIXEL_STORM_BLUE = 32] = "MP_PIXEL_STORM_BLUE", e[e.MP_PIXEL_STORM_CONTRAST = 33] = "MP_PIXEL_STORM_CONTRAST", e[e.MP_PIXEL_STORM_GLITCHED = 34] = "MP_PIXEL_STORM_GLITCHED", e[e.MP_SPRING = 35] = "MP_SPRING", e[e.MP_SUMMER = 36] = "MP_SUMMER", e[e.MP_FALL = 37] = "MP_FALL", e[e.MP_WINTER = 38] = "MP_WINTER", e[e.MP_PEARL_MARBLE = 39] = "MP_PEARL_MARBLE", e[e.MP_VOLCANIC = 40] = "MP_VOLCANIC", e[e.MP_BLAZE = 41] = "MP_BLAZE", e[e.MP_FADE = 42] = "MP_FADE", e[e.TAR_ARMY = 43] = "TAR_ARMY", e[e.TAR_NAVY = 44] = "TAR_NAVY", e[e.TAR_CRIMSON = 45] = "TAR_CRIMSON", e[e.TAR_LAVENDER = 46] = "TAR_LAVENDER", e[e.TAR_RUST = 47] = "TAR_RUST", e[e.TAR_PEACH = 48] = "TAR_PEACH", e[e.TAR_DARK_ZEBRA = 49] = "TAR_DARK_ZEBRA", e[e.TAR_LIGHT_ZEBRA = 50] = "TAR_LIGHT_ZEBRA", e[e.TAR_JUNGLE = 51] = "TAR_JUNGLE", e[e.TAR_AVALANCHE = 52] = "TAR_AVALANCHE", e[e.TAR_SANDSTORM = 53] = "TAR_SANDSTORM", e[e.TAR_PIXEL_STORM_ORANGE = 54] = "TAR_PIXEL_STORM_ORANGE", e[e.TAR_PIXEL_STORM_BLUE = 55] = "TAR_PIXEL_STORM_BLUE", e[e.TAR_PIXEL_STORM_CONTRAST = 56] = "TAR_PIXEL_STORM_CONTRAST", e[e.TAR_PIXEL_STORM_GLITCHED = 57] = "TAR_PIXEL_STORM_GLITCHED", e[e.TAR_SPRING = 58] = "TAR_SPRING", e[e.TAR_SUMMER = 59] = "TAR_SUMMER", e[e.TAR_FALL = 60] = "TAR_FALL", e[e.TAR_WINTER = 61] = "TAR_WINTER", e[e.TAR_PEARL_MARBLE = 62] = "TAR_PEARL_MARBLE", e[e.TAR_VOLCANIC = 63] = "TAR_VOLCANIC", e[e.TAR_BLAZE = 64] = "TAR_BLAZE", e[e.TAR_FADE = 65] = "TAR_FADE", e[e.CAR_ARMY = 66] = "CAR_ARMY", e[e.CAR_NAVY = 67] = "CAR_NAVY", e[e.CAR_CRIMSON = 68] = "CAR_CRIMSON", e[e.CAR_LAVENDER = 69] = "CAR_LAVENDER", e[e.CAR_RUST = 70] = "CAR_RUST", e[e.CAR_PEACH = 71] = "CAR_PEACH", e[e.CAR_DARK_ZEBRA = 72] = "CAR_DARK_ZEBRA", e[e.CAR_LIGHT_ZEBRA = 73] = "CAR_LIGHT_ZEBRA", e[e.CAR_IRONWORKS = 74] = "CAR_IRONWORKS", e[e.CAR_JUNGLE = 75] = "CAR_JUNGLE", e[e.CAR_AVALANCHE = 76] = "CAR_AVALANCHE", e[e.CAR_SANDSTORM = 77] = "CAR_SANDSTORM", e[e.CAR_PIXEL_STORM_ORANGE = 78] = "CAR_PIXEL_STORM_ORANGE", e[e.CAR_PIXEL_STORM_BLUE = 79] = "CAR_PIXEL_STORM_BLUE", e[e.CAR_PIXEL_STORM_CONTRAST = 80] = "CAR_PIXEL_STORM_CONTRAST", e[e.CAR_PIXEL_STORM_GLITCHED = 81] = "CAR_PIXEL_STORM_GLITCHED", e[e.CAR_SPRING = 82] = "CAR_SPRING", e[e.CAR_SUMMER = 83] = "CAR_SUMMER", e[e.CAR_FALL = 84] = "CAR_FALL", e[e.CAR_WINTER = 85] = "CAR_WINTER", e[e.CAR_PEARL_MARBLE = 86] = "CAR_PEARL_MARBLE", e[e.CAR_VOLCANIC = 87] = "CAR_VOLCANIC", e[e.CAR_BLAZE = 88] = "CAR_BLAZE", e[e.CAR_FADE = 89] = "CAR_FADE", e[e.SAR_ARMY = 90] = "SAR_ARMY", e[e.SAR_NAVY = 91] = "SAR_NAVY", e[e.SAR_CRIMSON = 92] = "SAR_CRIMSON", e[e.SAR_LAVENDER = 93] = "SAR_LAVENDER", e[e.SAR_RUST = 94] = "SAR_RUST", e[e.SAR_PEACH = 95] = "SAR_PEACH", e[e.SAR_DARK_ZEBRA = 96] = "SAR_DARK_ZEBRA", e[e.SAR_LIGHT_ZEBRA = 97] = "SAR_LIGHT_ZEBRA", e[e.SAR_JUNGLE = 98] = "SAR_JUNGLE", e[e.SAR_AVALANCHE = 99] = "SAR_AVALANCHE", e[e.SAR_SANDSTORM = 100] = "SAR_SANDSTORM",e[e.SAR_PIXEL_STORM_ORANGE = 101] = "SAR_PIXEL_STORM_ORANGE",e[e.SAR_PIXEL_STORM_BLUE = 102] = "SAR_PIXEL_STORM_BLUE",e[e.SAR_PIXEL_STORM_CONTRAST = 103] = "SAR_PIXEL_STORM_CONTRAST",e[e.SAR_PIXEL_STORM_GLITCHED = 104] = "SAR_PIXEL_STORM_GLITCHED",e[e.SAR_SPRING = 105] = "SAR_SPRING",e[e.SAR_SUMMER = 106] = "SAR_SUMMER",e[e.SAR_FALL = 107] = "SAR_FALL",e[e.SAR_WINTER = 108] = "SAR_WINTER",e[e.SAR_PEARL_MARBLE = 109] = "SAR_PEARL_MARBLE",e[e.SAR_VOLCANIC = 110] = "SAR_VOLCANIC",e[e.SAR_BLAZE = 111] = "SAR_BLAZE",e[e.SAR_FADE = 112] = "SAR_FADE",e[e.LSMG_ARMY = 113] = "LSMG_ARMY",e[e.LSMG_NAVY = 114] = "LSMG_NAVY",e[e.LSMG_CRIMSON = 115] = "LSMG_CRIMSON",e[e.LSMG_LAVENDER = 116] = "LSMG_LAVENDER",e[e.LSMG_RUST = 117] = "LSMG_RUST",e[e.LSMG_PEACH = 118] = "LSMG_PEACH",e[e.LSMG_DARK_ZEBRA = 119] = "LSMG_DARK_ZEBRA",e[e.LSMG_LIGHT_ZEBRA = 120] = "LSMG_LIGHT_ZEBRA",e[e.LSMG_JUNGLE = 121] = "LSMG_JUNGLE",e[e.LSMG_AVALANCHE = 122] = "LSMG_AVALANCHE",e[e.LSMG_SANDSTORM = 123] = "LSMG_SANDSTORM",e[e.LSMG_PIXEL_STORM_ORANGE = 124] = "LSMG_PIXEL_STORM_ORANGE",e[e.LSMG_PIXEL_STORM_BLUE = 125] = "LSMG_PIXEL_STORM_BLUE",e[e.LSMG_PIXEL_STORM_CONTRAST = 126] = "LSMG_PIXEL_STORM_CONTRAST",e[e.LSMG_PIXEL_STORM_GLITCHED = 127] = "LSMG_PIXEL_STORM_GLITCHED",e[e.LSMG_SPRING = 128] = "LSMG_SPRING",e[e.LSMG_SUMMER = 129] = "LSMG_SUMMER",e[e.LSMG_FALL = 130] = "LSMG_FALL",e[e.LSMG_WINTER = 131] = "LSMG_WINTER",e[e.LSMG_PEARL_MARBLE = 132] = "LSMG_PEARL_MARBLE",e[e.LSMG_VOLCANIC = 133] = "LSMG_VOLCANIC",e[e.LSMG_BLAZE = 134] = "LSMG_BLAZE",e[e.LSMG_FADE = 135] = "LSMG_FADE",e[e.CSMG_ARMY = 136] = "CSMG_ARMY",e[e.CSMG_NAVY = 137] = "CSMG_NAVY",e[e.CSMG_CRIMSON = 138] = "CSMG_CRIMSON",e[e.CSMG_LAVENDER = 139] = "CSMG_LAVENDER",e[e.CSMG_RUST = 140] = "CSMG_RUST",e[e.CSMG_PEACH = 141] = "CSMG_PEACH",e[e.CSMG_DARK_ZEBRA = 142] = "CSMG_DARK_ZEBRA",e[e.CSMG_LIGHT_ZEBRA = 143] = "CSMG_LIGHT_ZEBRA",e[e.CSMG_JUNGLE = 144] = "CSMG_JUNGLE",e[e.CSMG_AVALANCHE = 145] = "CSMG_AVALANCHE",e[e.CSMG_SANDSTORM = 146] = "CSMG_SANDSTORM",e[e.CSMG_IRONWORKS = 147] = "CSMG_IRONWORKS",e[e.CSMG_PIXEL_STORM_ORANGE = 148] = "CSMG_PIXEL_STORM_ORANGE",e[e.CSMG_PIXEL_STORM_BLUE = 149] = "CSMG_PIXEL_STORM_BLUE",e[e.CSMG_PIXEL_STORM_CONTRAST = 150] = "CSMG_PIXEL_STORM_CONTRAST",e[e.CSMG_PIXEL_STORM_GLITCHED = 151] = "CSMG_PIXEL_STORM_GLITCHED",e[e.CSMG_SPRING = 152] = "CSMG_SPRING",e[e.CSMG_SUMMER = 153] = "CSMG_SUMMER",e[e.CSMG_FALL = 154] = "CSMG_FALL",e[e.CSMG_WINTER = 155] = "CSMG_WINTER",e[e.CSMG_PEARL_MARBLE = 156] = "CSMG_PEARL_MARBLE",e[e.CSMG_VOLCANIC = 157] = "CSMG_VOLCANIC",e[e.CSMG_BLAZE = 158] = "CSMG_BLAZE",e[e.CSMG_FADE = 159] = "CSMG_FADE",e[e.BSG_ARMY = 160] = "BSG_ARMY",e[e.BSG_NAVY = 161] = "BSG_NAVY",e[e.BSG_CRIMSON = 162] = "BSG_CRIMSON",e[e.BSG_LAVENDER = 163] = "BSG_LAVENDER",e[e.BSG_RUST = 164] = "BSG_RUST",e[e.BSG_PEACH = 165] = "BSG_PEACH",e[e.BSG_DARK_ZEBRA = 166] = "BSG_DARK_ZEBRA",e[e.BSG_LIGHT_ZEBRA = 167] = "BSG_LIGHT_ZEBRA",e[e.BSG_JUNGLE = 168] = "BSG_JUNGLE",e[e.BSG_AVALANCHE = 169] = "BSG_AVALANCHE",e[e.BSG_SANDSTORM = 170] = "BSG_SANDSTORM",e[e.BSG_PIXEL_STORM_ORANGE = 171] = "BSG_PIXEL_STORM_ORANGE",e[e.BSG_PIXEL_STORM_BLUE = 172] = "BSG_PIXEL_STORM_BLUE",e[e.BSG_PIXEL_STORM_CONTRAST = 173] = "BSG_PIXEL_STORM_CONTRAST",e[e.BSG_PIXEL_STORM_GLITCHED = 174] = "BSG_PIXEL_STORM_GLITCHED",e[e.BSG_SPRING = 175] = "BSG_SPRING",e[e.BSG_SUMMER = 176] = "BSG_SUMMER",e[e.BSG_FALL = 177] = "BSG_FALL",e[e.BSG_WINTER = 178] = "BSG_WINTER",e[e.BSG_PEARL_MARBLE = 179] = "BSG_PEARL_MARBLE",e[e.BSG_VOLCANIC = 180] = "BSG_VOLCANIC",e[e.BSG_BLAZE = 181] = "BSG_BLAZE",e[e.BSG_FADE = 182] = "BSG_FADE",e[e.LSR_ARMY = 183] = "LSR_ARMY",e[e.LSR_NAVY = 184] = "LSR_NAVY",e[e.LSR_CRIMSON = 185] = "LSR_CRIMSON",e[e.LSR_LAVENDER = 186] = "LSR_LAVENDER",e[e.LSR_RUST = 187] = "LSR_RUST",e[e.LSR_PEACH = 188] = "LSR_PEACH",e[e.LSR_DARK_ZEBRA = 189] = "LSR_DARK_ZEBRA",e[e.LSR_LIGHT_ZEBRA = 190] = "LSR_LIGHT_ZEBRA",e[e.LSR_JUNGLE = 191] = "LSR_JUNGLE",e[e.LSR_AVALANCHE = 192] = "LSR_AVALANCHE",e[e.LSR_SANDSTORM = 193] = "LSR_SANDSTORM",e[e.LSR_PIXEL_STORM_ORANGE = 194] = "LSR_PIXEL_STORM_ORANGE",e[e.LSR_PIXEL_STORM_BLUE = 195] = "LSR_PIXEL_STORM_BLUE",e[e.LSR_PIXEL_STORM_CONTRAST = 196] = "LSR_PIXEL_STORM_CONTRAST",e[e.LSR_PIXEL_STORM_GLITCHED = 197] = "LSR_PIXEL_STORM_GLITCHED",e[e.LSR_SPRING = 198] = "LSR_SPRING",e[e.LSR_SUMMER = 199] = "LSR_SUMMER",e[e.LSR_FALL = 200] = "LSR_FALL",e[e.LSR_WINTER = 201] = "LSR_WINTER",e[e.LSR_PEARL_MARBLE = 202] = "LSR_PEARL_MARBLE",e[e.LSR_VOLCANIC = 203] = "LSR_VOLCANIC",e[e.LSR_BLAZE = 204] = "LSR_BLAZE",e[e.LSR_FADE = 205] = "LSR_FADE",e[e.HSR_ARMY = 206] = "HSR_ARMY",e[e.HSR_NAVY = 207] = "HSR_NAVY",e[e.HSR_CRIMSON = 208] = "HSR_CRIMSON",e[e.HSR_LAVENDER = 209] = "HSR_LAVENDER",e[e.HSR_RUST = 210] = "HSR_RUST",e[e.HSR_PEACH = 211] = "HSR_PEACH",e[e.HSR_DARK_ZEBRA = 212] = "HSR_DARK_ZEBRA",e[e.HSR_LIGHT_ZEBRA = 213] = "HSR_LIGHT_ZEBRA",e[e.HSR_JUNGLE = 214] = "HSR_JUNGLE",e[e.HSR_AVALANCHE = 215] = "HSR_AVALANCHE",e[e.HSR_SANDSTORM = 216] = "HSR_SANDSTORM",e[e.HSR_PIXEL_STORM_ORANGE = 217] = "HSR_PIXEL_STORM_ORANGE",e[e.HSR_PIXEL_STORM_BLUE = 218] = "HSR_PIXEL_STORM_BLUE",e[e.HSR_PIXEL_STORM_CONTRAST = 219] = "HSR_PIXEL_STORM_CONTRAST",e[e.HSR_PIXEL_STORM_GLITCHED = 220] = "HSR_PIXEL_STORM_GLITCHED",e[e.HSR_SPRING = 221] = "HSR_SPRING",e[e.HSR_SUMMER = 222] = "HSR_SUMMER",e[e.HSR_FALL = 223] = "HSR_FALL",e[e.HSR_WINTER = 224] = "HSR_WINTER",e[e.HSR_PEARL_MARBLE = 225] = "HSR_PEARL_MARBLE",e[e.HSR_VOLCANIC = 226] = "HSR_VOLCANIC",e[e.HSR_BLAZE = 227] = "HSR_BLAZE",e[e.HSR_FADE = 228] = "HSR_FADE",e[e.S_PEARL_MARBLE = 229] = "S_PEARL_MARBLE",e[e.S_VOLCANIC = 230] = "S_VOLCANIC",e[e.S_BLAZE = 231] = "S_BLAZE",e[e.S_FADE = 232] = "S_FADE",e[e.SP_PAINT_SPLASH = 233] = "SP_PAINT_SPLASH",e[e.MP_PAINT_SPLASH = 234] = "MP_PAINT_SPLASH",e[e.TAR_PAINT_SPLASH = 235] = "TAR_PAINT_SPLASH",e[e.CAR_PAINT_SPLASH = 236] = "CAR_PAINT_SPLASH",e[e.SAR_PAINT_SPLASH = 237] = "SAR_PAINT_SPLASH",e[e.LSMG_PAINT_SPLASH = 238] = "LSMG_PAINT_SPLASH",e[e.CSMG_PAINT_SPLASH = 239] = "CSMG_PAINT_SPLASH",e[e.BSG_PAINT_SPLASH = 240] = "BSG_PAINT_SPLASH",e[e.LSR_PAINT_SPLASH = 241] = "LSR_PAINT_SPLASH",e[e.HSR_PAINT_SPLASH = 242] = "HSR_PAINT_SPLASH",e[e.__LENGTH = 243] = "__LENGTH"
    }(t || (t = {})), _.a = t
}, , function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e[e.A = 0] = "A", e[e.B = 1] = "B", e[e.__LENGTH = 2] = "__LENGTH"
    }(t || (t = {})), _.a = t
}, function (e, _, E) {
    "use strict";
    var t;
    !function (e) {
        e[e.US_WEST = 0] = "US_WEST", e[e.US_EAST = 1] = "US_EAST", e[e.EU = 2] = "EU", e[e.ASIA = 3] = "ASIA", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.__LENGTH = 5] = "__LENGTH"
    }(t || (t = {})), _.a = t
}, , , , , , , , , , function (e, _, E) {
}, , , , , , , , , , , , , , function (e, _, E) {
    "use strict";
    E.r(_);
    var t = E(15), S = E.n(t), n = E(21), r = E.n(n), A = (E(61), E(0)), T = E.n(A), a = E(32), R = E.n(a), i = E(10),
        o = E(54), I = E(30), L = E(5), c = E(13), N = L.a.div.withConfig({
            displayName: "ResourceLoadingPanel__Wrapper",
            componentId: "sc-10kc3my-0"
        })(["width:100%;height:100%;top:0;left:0;position:absolute;display:flex;align-items:center;justify-content:center;"]),
        O = L.a.div.withConfig({
            displayName: "ResourceLoadingPanel__WrapperContent",
            componentId: "sc-10kc3my-1"
        })(["background-color:rgba(0,0,0,0.7);padding:30px;color:white;"]), s = L.a.div.withConfig({
            displayName: "ResourceLoadingPanel__Title",
            componentId: "sc-10kc3my-2"
        })(["margin-bottom:20px;font-size:20px;display:flex;align-items:center;justify-content:center;"]),
        C = L.a.div.withConfig({
            displayName: "ResourceLoadingPanel__LoadingBarOuter",
            componentId: "sc-10kc3my-3"
        })(["width:300px;height:30px;position:relative;background-color:white;"]), u = L.a.div.attrs((function (e) {
            return {style: {width: e.percent + "%", transition: "width " + e.speed + "s"}}
        })).withConfig({
            displayName: "ResourceLoadingPanel__LoadingBarInner",
            componentId: "sc-10kc3my-4"
        })(["background-color:#2ecc71;position:absolute;height:100%;display:flex;align-items:center;"]),
        M = L.a.span.withConfig({
            displayName: "ResourceLoadingPanel__LoadingIcon",
            componentId: "sc-10kc3my-5"
        })(["margin:0 10px;"]), P = function (e) {
            var _ = Object(i.c)((function (e) {
                return e.ui.resourceLoadingProgress
            })), E = Object(i.c)((function (e) {
                return e.ui.connectionStatus
            }));
            Object(i.b)();
            return E === c.a.LOADING ? T.a.createElement(N, null, T.a.createElement(O, null, T.a.createElement(s, null, T.a.createElement("span", null, "Loading"), T.a.createElement(M, null, T.a.createElement(I.a, {
                icon: o.b,
                spin: !0
            })), T.a.createElement("span", null, "Please hold on")), T.a.createElement(C, null, T.a.createElement(u, {
                percent: 100 * _,
                speed: .2
            })))) : null
        }, l = E(31), G = E(26), d = E(22), p = E(52), f = E(36), D = E(29),
        m = E.p + "./91aacee3a7e695bb50f6661997f60db3.png", y = E.p + "./34441d4df70b2fcf53584f688f06daad.jpg",
        U = L.a.div.withConfig({
            displayName: "Background__BackgroundWrapper",
            componentId: "y0azya-0"
        })(["width:100%;height:100%;top:0;left:0;position:absolute;background-image:url(", ");background-size:cover;"], y),
        H = L.a.a.withConfig({
            displayName: "Background__DiscordLink",
            componentId: "y0azya-1"
        })(["display:block;position:absolute;top:10px;left:10px;z-index:99999;pointer-events:auto;"]),
        g = L.a.img.withConfig({
            displayName: "Background__DiscordLinkImage",
            componentId: "y0azya-2"
        })(["display:block;width:200px;"]), b = L.a.a.withConfig({
            displayName: "Background__NativeLink",
            componentId: "y0azya-3"
        })(["color:white;text-decoration:none;:hover{text-decoration:underline;}"]), B = (Object(L.a)(D.c).withConfig({
            displayName: "Background__AppLink",
            componentId: "y0azya-4"
        })(["color:white;text-decoration:none;:hover{text-decoration:underline;}"]), L.a.div.withConfig({
            displayName: "Background__TextButton",
            componentId: "y0azya-5"
        })(["color:white;:hover{cursor:pointer;text-decoration:underline;}"])), h = L.a.div.withConfig({
            displayName: "Background__TextDivider",
            componentId: "y0azya-6"
        })(["width:1px;height:16px;background-color:white;margin:0 8px;"]), Y = L.a.div.withConfig({
            displayName: "Background__TwitchStreams",
            componentId: "y0azya-7"
        })(["position:absolute;top:10px;right:20px;z-index:99999;pointer-events:auto;"]), F = L.a.a.withConfig({
            displayName: "Background__TwitchStream",
            componentId: "y0azya-8"
        })(["display:flex;text-decoration:none;color:white;padding:5px 0;"]), v = L.a.img.withConfig({
            displayName: "Background__TwitchAvatar",
            componentId: "y0azya-9"
        })(["display:block;width:32px;height:32px;margin-right:10px;border-radius:5px;"]),
        V = L.a.div.withConfig({displayName: "Background__TwitchChannel", componentId: "y0azya-10"})([""]),
        k = L.a.div.withConfig({
            displayName: "Background__TwitchUserName",
            componentId: "y0azya-11"
        })(["font-weight:400;text-shadow:1px 1px 0 #3b3b3b;"]),
        w = L.a.div.withConfig({displayName: "Background__TwitchViewCount", componentId: "y0azya-12"})([""]),
        K = L.a.a.withConfig({
            displayName: "Background__TwitchStreamTitle",
            componentId: "y0azya-13"
        })(["display:flex;align-items:center;background-color:#9146ff;padding:5px 10px;border-radius:5px;margin-bottom:5px;text-decoration:none;color:white;"]),
        W = L.a.div.withConfig({
            displayName: "Background__TwitchIcon",
            componentId: "y0azya-14"
        })(["margin-right:10px;"]), x = L.a.a.withConfig({
            displayName: "Background__TwitchLink",
            componentId: "y0azya-15"
        })(["display:block;text-decoration:none;color:white;"]), X = L.a.div.withConfig({
            displayName: "Background__BottomLeft",
            componentId: "y0azya-16"
        })(["position:absolute;z-index:99999;pointer-events:auto;display:flex;bottom:0;left:0;background-color:rgba(0,0,0,0.5);padding:8px;font-size:14px;"]),
        j = L.a.div.withConfig({
            displayName: "Background__BottomRight",
            componentId: "y0azya-17"
        })(["position:absolute;z-index:99999;pointer-events:auto;display:flex;bottom:0;right:0;background-color:rgba(0,0,0,0.5);padding:8px;font-size:14px;"]),
        Z = function (e) {
            var _ = Object(i.c)((function (e) {
                return e.ui.connectionStatus
            })), E = Object(i.c)((function (e) {
                return e.ui.adSDKType
            })), t = Object(i.b)(), n = Object(A.useState)([]), a = n[0], R = n[1], o = a.map((function (e, _) {
                return T.a.createElement(F, {
                    key: _,
                    href: "https://twitch.tv/" + e.user_name,
                    target: "_blank"
                }, T.a.createElement(v, {src: e.avatar}), T.a.createElement(V, null, T.a.createElement(k, null, e.display_name), T.a.createElement(w, null, e.viewer_count, " Viewers")))
            }));
            return 0 === o.length && (o = T.a.createElement(x, {
                href: "https://www.twitch.tv/directory/game/Voxiom.io",
                target: "_blank"
            }, "Stream to get featured here!")), Object(A.useEffect)((function () {
                r()(S.a.mark((function e() {
                    var _, E;
                    return S.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("/profile/me", {method: "post"});
                            case 3:
                                return _ = e.sent, e.next = 6, _.json();
                            case 6:
                                E = e.sent, t(Object(f.b)(E.authenticated)), E.authenticated && (t(Object(f.a)(E.data)), -1 !== E.data.permissions.indexOf("principal.noads") && (aiptag.disableInterstitialAd = !0)), e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), console.error("Failed to fetch account data");
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 11]])
                })))(), r()(S.a.mark((function e() {
                    var _, E;
                    return S.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("/twitch/streams");
                            case 3:
                                return _ = e.sent, e.next = 6, _.json();
                            case 6:
                                E = e.sent, R(E.data), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch stream data");
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 10]])
                })))()
            }), []), _ === c.a.LOADING || _ === c.a.DISCONNECTED || _ === c.a.CONNECTING ? T.a.createElement(T.a.Fragment, null, T.a.createElement(U, null), T.a.createElement(H, {
                href: "https://discord.gg/GBFtRcY",
                target: "_blank"
            }, T.a.createElement(g, {src: m})), T.a.createElement(Y, null, T.a.createElement(K, {
                href: "https://www.twitch.tv/directory/game/Voxiom.io",
                target: "_blank"
            }, T.a.createElement(W, null, T.a.createElement(I.a, {icon: p.e})), "Featured Streams"), o), T.a.createElement(X, null, T.a.createElement(b, {href: "/assets/pages/terms.html"}, "Terms of Use"), T.a.createElement(h, null), T.a.createElement(b, {href: "/assets/pages/privacy.html"}, "Privacy Policy"), window.Cookiebot && window.Cookiebot.regulations && (Cookiebot.regulations.gdprApplies || Cookiebot.regulations.ccpaApplies || Cookiebot.regulations.lgpdApplies) ? T.a.createElement(T.a.Fragment, null, T.a.createElement(h, null), T.a.createElement(B, {
                onClick: function () {
                    Cookiebot.show()
                }
            }, "Cookies")) : null), T.a.createElement(j, null, E !== d.a.CRAZYGAMES ? T.a.createElement(T.a.Fragment, null, T.a.createElement(b, {
                href: "/assets/pages/partners.html",
                target: "_blank"
            }, "Partners"), T.a.createElement(h, null), T.a.createElement(b, {
                href: "https://iogames.space",
                target: "_blank"
            }, "More .io Games!")) : null)) : null
        }, z = L.a.div.attrs((function (e) {
            var _ = e.uiScale;
            return {style: {width: e.uiWidth / _ + "px", height: e.uiHeight / _ + "px", transform: "scale(" + _ + ")"}}
        })).withConfig({
            displayName: "App__Wrapper",
            componentId: "v7gq94-0"
        })(["transform-origin:0 0;position:absolute;top:0;left:0;pointer-events:none;"]), J = T.a.lazy((function () {
            return Promise.all([E.e(1), E.e(5), E.e(0), E.e(9)]).then(E.bind(null, 490))
        })), q = function () {
            var e = Object(i.b)(), _ = Object(i.c)((function (e) {
                return e.ui.uiScale
            })), E = Object(i.c)((function (e) {
                return e.ui.uiWidth
            })), t = Object(i.c)((function (e) {
                return e.ui.uiHeight
            })), S = Object(i.c)((function (e) {
                return e.ui.connectionStatus
            }));
            return Object(A.useEffect)((function () {
                var _ = function (_) {
                    var E = new URLSearchParams(window.location.search);
                    if (E.has("nolinks") || E.has("crazygames")) {
                        var t = document.createElement("script");
                        t.src = "https://sdk.crazygames.com/crazygames-sdk-v1.js", t.async = !0, document.head.appendChild(t), t.onload = function () {
                            window.CrazyGames.CrazySDK.getInstance().init(), e(Object(l.o)(d.a.CRAZYGAMES))
                        }
                    } else {
                        aiptag.cmp = {
                            show: !1,
                            position: "centered",
                            button: !1,
                            buttonText: "Privacy settings",
                            buttonPosition: "bottom-left"
                        };
                        var S = document.createElement("script");
                        S.src = "https://api.adinplay.com/libs/aiptag/pub/VXM/voxiom.io/tag.min.js", S.async = !0, document.head.appendChild(S), S.onload = function () {
                            e(Object(l.o)(d.a.ADINPLAY))
                        }
                    }
                };
                if (window.Cookiebot) return window.addEventListener("CookiebotOnLoad", _), function () {
                    window.removeEventListener("CookiebotOnLoad", _)
                };
                _()
            }), []), Object(A.useEffect)((function () {
                var _ = function (_) {
                    var E = window.innerWidth, t = window.innerHeight,
                        n = S === c.a.LOADING || S === c.a.DISCONNECTED || S === c.a.CONNECTING ? Math.min(E / 1408, t / 1056) : Math.max(E / G.a.CLIENT_WIDTH, t / G.a.CLIENT_HEIGHT);
                    e(Object(l.D)(n, E, t))
                };
                return window.addEventListener("resize", _), _(), function () {
                    window.removeEventListener("resize", _)
                }
            }), [S]), T.a.createElement(T.a.Fragment, null, T.a.createElement(z, {
                uiScale: _,
                uiWidth: E,
                uiHeight: t
            }, T.a.createElement(Z, null), T.a.createElement(P, null), T.a.createElement(T.a.Suspense, {fallback: null}, T.a.createElement(J, null))))
        }, Q = E(47), $ = function () {
            function e(e) {
                this._domTarget = e, this.initialize()
            }

            return e.prototype.initialize = function () {
                R.a.render(T.a.createElement(i.a, {store: Q.d}, T.a.createElement(D.a, null, T.a.createElement(q, null))), document.querySelector(this._domTarget))
            }, e
        }();
    r()(S.a.mark((function e() {
        var _;
        return S.a.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return new $("#app"), e.next = 3, Promise.all([E.e(1), E.e(6), E.e(0), E.e(7)]).then(E.bind(null, 489));
                case 3:
                    _ = e.sent, (0, _.default)();
                case 6:
                case"end":
                    return e.stop()
            }
        }), e)
    })))()
}]);