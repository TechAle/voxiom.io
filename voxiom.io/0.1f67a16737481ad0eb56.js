document.getElementById("preroll").innerHTML += '<canvas id=\'prova2\' style=\'position: absolute; left: 0; top: 0; pointer-events: none\'></canvas>';

document.getElementById("preroll").innerHTML += '' +
    '<!-- Draggable DIV -->\n' +
    '<div oncontextmenu="return false" id="Modmenu" style="position: absolute;\n' +
    '            z-index: 9;\n' +
    '            background-color: #f1f1f1;\n' +
    '            border: 1px solid #d3d3d3;\n' +
    '            text-align: center;\n' +
    '            -webkit-user-select: none;\n' +
    '            -webkit-touch-callout: none;\n' +
    '            -moz-user-select: none;\n' +
    '            -ms-user-select: none;\n' +
    '            user-select: none;\n' +
    '            width: 250px; font-size: 25px; top: 100px; right: 60px">\n' +
    '    <!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->\n' +
    '    <div id="headerMenu" style="padding: 10px;\n' +
    '            cursor: move;\n' +
    '            z-index: 10;\n' +
    '            background-color: #2196F3;\n' +
    '            color: #fff">Mod Menu</div>\n' +
    '        <div id="modules" style="display: inline-block; padding: 5px 10px 5px 10px; position: relative; height: 100%; background-color: lightgray; overflow-y: scroll; overflow-x: hidden; left: 5px; width: 84%">\n' +
    '            <div style="width: 100%;\n' +
    '                        display: flex;\n' +
    '                        display: -webkit-flex;\n' +
    '                        display: -ms-flexbox;">\n' +
    '                <div style="border: 1px solid #2196F3;\n' +
    '                width: calc( 50%);" onclick="display(\'combat\')">Combat</div>\n' +
    '                            <div style="border: 1px solid #2196F3;\n' +
    '                width: calc( 50%);" onclick="display(\'render\')">Render</div>\n' +
    '            </div>\n' +
    '            <div style="width: 100%;\n' +
    '                        display: flex;\n' +
    '                        display: -webkit-flex;\n' +
    '                        display: -ms-flexbox;">\n' +
    '                <div style="border: 1px solid #2196F3;\n' +
    '                width: calc( 50%);" onclick="display(\'move\')">Move</div>\n' +
    '                <div style="border: 1px solid #2196F3;\n' +
    '                width: calc( 50%);" onclick="display(\'misc\')">Misc</div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="combat">\n' +
    '                <div style="font-size: 25px; padding-top: 5px; font-weight: bold; color: lightslategray;">Combat</div>\n' +
    '                <label for="recoil">NoRecoil<input type="checkbox" id="recoil" onchange="changeValue(this)"></label>\n' +
    '                <label for="spread">NoSpread<input type="checkbox" id="spread" onchange="changeValue(this)"></label>\n' +
    '                <label for="instaBreak">instaBreak<input type="checkbox" id="instaBreak" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="noReload">noReload<input type="checkbox" id="noReload" onchange="changeValue(this)"></label><br>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="render" style="display: none">\n' +
    '                <div style="font-size: 25px; padding-top: 5px; font-weight: bold; color: lightslategray;">Render</div>\n' +
    '                <label for="noBlocksUpdate">noBlockUpdate<input type="checkbox" id="noBlocksUpdate" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="listPlayer">listPlayer<input type="checkbox" id="listPlayer" onchange="changeValue(this)"></label><br>' +
    '                <label for="tracer">tracer<input type="checkbox" id="tracer" onchange="changeValue(this)"></label><br>' +
    '                <label for="noChat">noChat<input type="checkbox" id="noChat" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="noKillFeed">noKillFeed<input type="checkbox" id="noKillFeed" onchange="changeValue(this)"></label><br>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="move" style="display: none">\n' +
    '                <div style="font-size: 25px; padding-top: 5px; font-weight: bold; color: lightslategray;">Move</div>\n' +
    '                <label for="noClip">noClip<input type="checkbox" id="noClip" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="jumpyGlitch">jumpyGlitch<input type="checkbox" id="jumpyGlitch" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="waterSpeed" style="display: inline-flex">waterSpeed<input type="number" value=\'4\' style="width: 50px; margin-left: 4px" id="waterSpeed" onchange="changeValue(this)"></label><br>\n' +
    '                <label for="waterSpeedVer" style="display: inline-flex">waterSpeedVer<input type="number" value=\'2\' style="width: 50px; margin-left: 4px" id="waterSpeedVer" onchange="changeVal(this)"></label><br>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="misc" style="display: none">\n' +
    '                <div style="font-size: 25px; padding-top: 5px; font-weight: bold; color: lightslategray;">Misc</div>\n' +
    '                <label style="display: inline-flex" for="ChunkSize">ChunkSize<input type="number" value=\'32\' id="ChunkSize" onchange="changeValue(this)" style="width: 50px; margin-left: 4px"></label><br>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '</div>\n' +
    '\n' +
    '<!-- Draggable DIV -->\n' +
    '<div oncontextmenu="return false" id="players" style="position: absolute;\n' +
    '            z-index: 9;\n' +
    '            background-color: #f1f1f1;\n' +
    '            border: 1px solid #d3d3d3;\n' +
    '            text-align: center;\n' +
    '            -webkit-user-select: none;\n' +
    '            -webkit-touch-callout: none;\n' +
    '            -moz-user-select: none;\n' +
    '            -ms-user-select: none;\n' +
    '            user-select: none;\n' +
    '            width: 600px; font-size: 25px; top: 100px; left: 60px; display: none; max-height: 200px">\n' +
    '    <!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->\n' +
    '    <div id="headerPlayers" style="padding: 10px;\n' +
    '            cursor: move;\n' +
    '            z-index: 10;\n' +
    '            background-color: #2196F3;\n' +
    '            color: #fff">Players</div>\n' +
    '    <div id="listPlayersV" style="display: inline-block; ' +
    '   padding: 5px 10px 5px 10px; position: relative; height: 60%; ' +
    '   background-color: lightgray; overflow-y: scroll; overflow-x: hidden; ' +
    '  left: 5px; width: 84%; font-size: 15px">\n' +
    '    </div>\n' +
    '</div>\n';


// Make the DIV element draggable:
dragElementModules(document.getElementById("Modmenu"));
dragElementPlayers(document.getElementById("players"));

function dragElementPlayers(elmnt) {

    function playerMove(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function playerStop() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function playerDown(e) {
        e = e || window.event;
        e.preventDefault();
        if (e.button === 2) {
            document.getElementById("listPlayersV").style.display = isActive ? "none" : "inline-block";
            isActive = !isActive;
        } else {
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = playerStop;
            // call a function whenever the cursor moves:
            document.onmousemove = playerMove;
        }
    }

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var isActive = true;
    document.getElementById("players").onmousedown = playerDown;
}

function dragElementModules(elmnt) {

    function dragModules(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeModules() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function modulesDown(e) {
        e = e || window.event;
        e.preventDefault();
        if (e.button === 2) {
            document.getElementById("modules").style.display = isActive ? "none" : "inline-block";
            isActive = !isActive;
        } else {
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeModules;
            // call a function whenever the cursor moves:
            document.onmousemove = dragModules;
        }
    }


    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var isActive = true;
    document.getElementById("headerMenu").onmousedown = modulesDown;
}


const everyId = ["combat", "render", "move", "misc"];
function display(name) {
    everyId.forEach(id => {
        document.getElementById(id).style.display = "none";
    })
    document.getElementById(name).style.display = "initial";
}


var recoilHack = false;
var spreadHack = false;
var instaBreak = false;
var noBlocksUpdate = false;
var noReload = false;
var jumpyGlitch = false;
var waterSpeed = 4;
var waterSpeedVer = 2;
var chunkSize = 32;
var noClip = false;
var listPlayerValue = false;
var tracerVar = false;
var lineDisplay = []
var lenLine = 0;
function myRender() {
    window.ctx.clearRect(0, 0, window.ctx.canvas.width, window.ctx.canvas.height);
    for(var i = 0; i < window.lineDisplay.length; i++) {
        line(window.lineDisplay[i].x1, window.lineDisplay[i].y1, window.lineDisplay[i].x2, window.lineDisplay[i].y2,
            window.lineDisplay[i].width, window.lineDisplay[i].color)
    }

}

function line(x1, y1, x2, y2, lW, sS) {
    window.ctx.save();
    window.ctx.lineWidth = lW + 2;
    window.ctx.beginPath();
    window.ctx.moveTo(x1, y1);
    window.ctx.lineTo(x2, y2);
    window.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
    window.ctx.stroke();
    window.ctx.lineWidth = lW;
    window.ctx.strokeStyle = sS;
    window.ctx.stroke();
    window.ctx.restore();
}


var c = document.getElementById("prova2");

c.width = innerWidth;
c.height = innerHeight;



window.addEventListener('resize', () => {
    c.width = innerWidth;
    c.height = innerHeight;
});


var ctx = c.getContext("2d");


function getDistance3D(x1, y1, z1, x2, y2, z2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    const dz = z1 - z2;
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

window.camera = null;

function world2Screen(wrapper, aY = 0) {
    if (window.camera != null) {
        var vec = wrapper.getWorldPosition();
        var newVector = vec.project(window.camera);
        newVector.x = (vec.x + 1) / 2 * window.ctx.canvas.width;
        newVector.y = - (vec.y - 1) / 2 * window.ctx.canvas.height;
        var cameraPos = window.camera.getWorldPosition()
        var targetPos = wrapper.getWorldPosition();
        var lookat = window.camera.getWorldDirection();
        var pos = targetPos.sub(cameraPos)
        if (pos.angleTo(lookat) > (Math.PI / 2)) {
            newVector.x *= -1;
            newVector.y = 1000;
        }
        return newVector;
    } return null;
}


function changeValue(questo) {
    switch(questo.parentElement.textContent) {
        case "tracer":
            tracerVar = questo.checked;
            break;
        case "NoRecoil":
            recoilHack = questo.checked;
            break;
        case "NoSpread":
            SpreadHack = questo.checked;
            break;
        case "instaBreak":
            instaBreak = questo.checked;
            break;
        case "noReload":
            noReload = questo.checked;
            break;
        case "noBlockUpdate":
            noBlocksUpdate = questo.checked;
            break;
        case "noClip":
            noClip = questo.checked;
            break;
        case "jumpyGlitch":
            jumpyGlitch = questo.checked;
            break;
        case "noChat":
            document.getElementsByClassName("Chat__Wrapper-sc-16u2dec-0 cOWABl")[0].style.display = questo.checked ? "none" : "initial";
            break;
        case "listPlayer":
            listPlayerValue = questo.checked;
            document.getElementById("players").style.display = listPlayerValue ? "initial" : "none";
            break;
        case "noKillFeed":
            document.getElementsByClassName("KillFeed__Wrapper-sc-1xasb9r-0 byxfaz")[0].style.display = questo.checked ? "none" : "initial";
            break;
        case "waterSpeed":
            waterSpeed = parseFloat(questo.value);
            break;
        case "waterSpeedVer":
            waterSpeedVer = parseFloat(questo.value);
            break;
        case "ChunkSize":
            chunkSize = parseInt(questo.value);
            break;
    }
}




(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    101: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.UNSIGNED_CHAR = 0] = "UNSIGNED_CHAR", e[e.SIGNED_CHAR = 1] = "SIGNED_CHAR", e[e.UNSIGNED_SHORT = 2] = "UNSIGNED_SHORT", e[e.SIGNED_SHORT = 3] = "SIGNED_SHORT", e[e.UNSIGNED_INT = 4] = "UNSIGNED_INT", e[e.SIGNED_INT = 5] = "SIGNED_INT", e[e.FLOAT = 6] = "FLOAT", e[e.DOUBLE = 7] = "DOUBLE", e[e.STRING = 8] = "STRING", e[e.BOOLEAN = 9] = "BOOLEAN"
        }(n || (n = {})), t.a = n
    }, 102: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return C
        }));
        var n, r = a(20), o = a(35), i = a(119), s = a(48), u = function (e) {
            return void 0 === e && (e = 3), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "TIGER",
                color1: "#282828",
                color2: "#282828",
                color3: "#484848",
                color4: "#484848"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#343434"}]
        }, c = function (e) {
            return void 0 === e && (e = 3), [{
                type: "RANDOM_PATTERN",
                seed: 0,
                scale: 3,
                roughness: .9,
                metalness: 0,
                patternType: "TIGER",
                color1: "#414141",
                color2: "#414141",
                color3: "#d9d9d9",
                color4: "#d9d9d9"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#bebebe"}]
        }, _ = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "CAMO",
                color1: "#b7bc90",
                color2: "#626c62",
                color3: "#938469",
                color4: "#e8dfc2"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#575940"}]
        }, l = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "CAMO",
                color1: "#f9fcfb",
                color2: "#819db8",
                color3: "#c4cbd3",
                color4: "#697388"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#a8b9ce"}]
        }, S = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "CAMO",
                color1: "#9d7761",
                color2: "#b5aa7a",
                color3: "#ab8f70",
                color4: "#d3ce88"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#d8b778"}]
        }, O = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "PIXEL_STORM",
                color1: "#ffc7a0",
                color2: "#ff8946",
                color3: "#ff6150",
                color4: "#d4424b"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#ffa550"}]
        }, I = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "PIXEL_STORM",
                color1: "#a0ccff",
                color2: "#469dff",
                color3: "#506eff",
                color4: "#4a42d4"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#91c7ff"}]
        }, p = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "PIXEL_STORM",
                color1: "#ffffff",
                color2: "#bebebe",
                color3: "#6e6e6e",
                color4: "#484848"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#d9d9d9"}]
        }, E = function (e) {
            return void 0 === e && (e = 1), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "PIXEL_STORM",
                color1: "#ff5555",
                color2: "#55ff71",
                color3: "#575dff",
                color4: "#ffd857"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#ffbf64"}]
        }, R = function (e) {
            return void 0 === e && (e = 1.7), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "PLANT",
                color1: "#739b5d",
                color2: "#8bd274",
                color3: "#b8e293",
                color4: "#f5ac96"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#8bd274"}]
        }, T = function (e) {
            return void 0 === e && (e = 1.7), [{
                type: "RANDOM_PATTERN",
                seed: 0,
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "PLANT",
                color1: "#5c7a4c",
                color2: "#6faf5a",
                color3: "#ffb3b3",
                color4: "#eff596"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#75a759"}]
        }, M = function (e) {
            return void 0 === e && (e = 1.7), [{
                type: "RANDOM_PATTERN",
                seed: 0,
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "PLANT",
                color1: "#b14835",
                color2: "#e77d01",
                color3: "#eda865",
                color4: "#fec637"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#b14835"}]
        }, h = function (e) {
            return void 0 === e && (e = 1.7), [{
                type: "RANDOM_PATTERN",
                seed: 0,
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "PLANT",
                color1: "#7bd9ff",
                color2: "#2bb4d9",
                color3: "#52b0ed",
                color4: "#ffffff"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7bd9ff"}]
        }, m = function (e) {
            return void 0 === e && (e = 1.5), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "CRACKS",
                color1: "#ffffff",
                color2: "#a2a2a2",
                color3: "#434343",
                color4: "#000000"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#c0c0c0"}]
        }, A = function (e) {
            return void 0 === e && (e = 1.5), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: 1,
                metalness: 0,
                patternType: "CRACKS",
                color1: "#1b0000",
                color2: "#702623",
                color3: "#f18032",
                color4: "#ffff00"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#340000"}]
        }, d = function (e) {
            return void 0 === e && (e = 3), [{
                type: "RANDOM_PATTERN",
                seed: 0,
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "TIGER",
                color1: "#fdac00",
                color2: "#ff8600",
                color3: "#e96000",
                color4: "#414141"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#464646"}]
        }, N = function (e) {
            return void 0 === e && (e = 2.2), [{
                type: "RANDOM_PATTERN",
                scale: e,
                roughness: .9,
                metalness: 0,
                patternType: "CAMO_2",
                color1: "#7d7aa2",
                color2: "#6dc2bc",
                color3: "#f67d7c",
                color4: "#ffe5c4"
            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#5a819d"}]
        }, f = ((n = {})[s.a.DEFAULT] = {
            name: "Default", itemType: r.a.EMPTY, tier: o.a.COMMON, slot: i.a.NONE, getData: function (e) {
                switch (e) {
                    case r.a.SHOVEL_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#312D2D"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#8A724F"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#250F14"}],
                            groupMaterialIndices: [0, 1, 2]
                        };
                    case r.a.SURGE_ASSAULT_RIFLE_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3d4045"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#2a2c2f"}],
                            groupMaterialIndices: [0, 1, 1, 1]
                        };
                    case r.a.COMBAT_ASSAULT_RIFLE_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#66554A"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3D3D3C"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#494A49"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.TACTICAL_ASSAULT_RIFLE_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3F3F3F"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#303030"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#4D4D4D"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#686868"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.MAGNUM_PISTOL_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .1,
                                metalness: 0,
                                color: "#e6e6e6"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                            groupMaterialIndices: [0, 0, 1, 1]
                        };
                    case r.a.COMPACT_SUBMACHINE_GUN_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3d4045"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#6a3e2c"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#2a2c2f"}],
                            groupMaterialIndices: [0, 0, 1, 2]
                        };
                    case r.a.STRIKE_PISTOL_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#66554A"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#494A49"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#5F6063"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.BURST_SHOTGUN_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#494A49"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3D3D3C"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#66554A"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.LIGHT_SUBMACHINE_GUN_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3D3D3C"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#494A49"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#393A3C"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.LIGHT_SNIPER_RIFLE_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3D3D3C"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#5F6063"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#393A3C"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        };
                    case r.a.HEAVY_SNIPER_RIFLE_COMMON:
                        return {
                            materials: [{
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#5A734A"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#2E2E30"
                            }, {
                                type: "UNIFORM_COLOR",
                                roughness: .9,
                                metalness: 0,
                                color: "#3D3D3C"
                            }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#5f5f5f"}],
                            groupMaterialIndices: [0, 1, 2, 3]
                        }
                }
            }
        }, n[s.a.SP_ARMY] = {
            name: "Army",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_NAVY] = {
            name: "Navy",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_RUST] = {
            name: "Rust",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_PEACH] = {
            name: "Peach",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [1, 0, 2, 3]
                }
            }
        }, n[s.a.SP_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_SPRING] = {
            name: "Spring",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_SUMMER] = {
            name: "Summer",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_FALL] = {
            name: "Fall",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_WINTER] = {
            name: "Winter",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_BLAZE] = {
            name: "Blaze",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.SP_FADE] = {
            name: "Fade",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 10,
                        maxScale: 20,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        }, n[s.a.MP_GOLDEN] = {
            name: "Golden",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .1,
                        metalness: 0,
                        color: "#ffda61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 1, 1]
                }
            }
        }, n[s.a.MP_RUBY] = {
            name: "Ruby",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .1,
                        metalness: 0,
                        color: "#ff3657"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 1, 1]
                }
            }
        }, n[s.a.MP_SAPPHIRE] = {
            name: "Sapphire",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .1,
                        metalness: 0,
                        color: "#6eadff"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 1, 1]
                }
            }
        }, n[s.a.MP_EMERALD] = {
            name: "Emerald",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .1,
                        metalness: 0,
                        color: "#29ffa2"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 1, 1]
                }
            }
        }, n[s.a.MP_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_SPRING] = {
            name: "Spring",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_SUMMER] = {
            name: "Summer",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_FALL] = {
            name: "Fall",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_WINTER] = {
            name: "Winter",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_BLAZE] = {
            name: "Blaze",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        }, n[s.a.MP_FADE] = {
            name: "Fade",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 10,
                        maxScale: 20,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#292929"}],
                    groupMaterialIndices: [0, 0, 1, 1]
                }
            }
        }, n[s.a.TAR_ARMY] = {
            name: "Army",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_NAVY] = {
            name: "Navy",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_RUST] = {
            name: "Rust",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_PEACH] = {
            name: "Peach",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.TAR_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.TAR_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.TAR_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_SPRING] = {
            name: "Spring",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_SUMMER] = {
            name: "Summer",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_FALL] = {
            name: "Fall",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_WINTER] = {
            name: "Winter",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        }, n[s.a.TAR_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.TAR_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.TAR_BLAZE] = {
            name: "Blaze",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.TAR_FADE] = {
            name: "Fade",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 3,
                        maxScale: 10,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        }, n[s.a.CAR_ARMY] = {
            name: "Army",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_NAVY] = {
            name: "Navy",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_RUST] = {
            name: "Rust",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_PEACH] = {
            name: "Peach",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.CAR_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.CAR_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.CAR_IRONWORKS] = {
            name: "Ironworks",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .3,
                        metalness: 0,
                        color: "#d1d1d1"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#2E2E30"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#3D3D3C"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#494A49"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        }, n[s.a.CAR_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_SPRING] = {
            name: "Spring",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_SUMMER] = {
            name: "Summer",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_FALL] = {
            name: "Fall",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_WINTER] = {
            name: "Winter",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        }, n[s.a.CAR_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.CAR_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.CAR_BLAZE] = {
            name: "Blaze",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.CAR_FADE] = {
            name: "Fade",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 3,
                        maxScale: 10,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        }, n[s.a.SAR_ARMY] = {
            name: "Army",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_NAVY] = {
            name: "Navy",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_RUST] = {
            name: "Rust",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_PEACH] = {
            name: "Peach",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 1, 3, 2]
                }
            }
        }, n[s.a.SAR_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.SAR_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        }, n[s.a.SAR_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: _(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        }, n[s.a.SAR_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: l(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        }, n[s.a.SAR_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: S(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: O(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: I(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: p(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: E(1.1), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_SPRING] = {
            name: "Spring",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_SUMMER] = {
            name: "Summer",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_FALL] = {
            name: "Fall",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_WINTER] = {
            name: "Winter",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.SAR_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: m(1.1), groupMaterialIndices: [0, 0, 0, 0]}
            }
        },n[s.a.SAR_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: A(1.1), groupMaterialIndices: [0, 0, 0, 0]}
            }
        },n[s.a.SAR_BLAZE] = {
            name: "Blaze",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 0, 0, 0]}
            }
        },n[s.a.SAR_FADE] = {
            name: "Fade",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 3,
                        maxScale: 10,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        },n[s.a.LSMG_ARMY] = {
            name: "Army",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_NAVY] = {
            name: "Navy",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_RUST] = {
            name: "Rust",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_PEACH] = {
            name: "Peach",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.LSMG_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_SPRING] = {
            name: "Spring",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_SUMMER] = {
            name: "Summer",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_FALL] = {
            name: "Fall",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_WINTER] = {
            name: "Winter",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_BLAZE] = {
            name: "Blaze",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.LSMG_FADE] = {
            name: "Fade",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 5,
                        maxScale: 15,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        },n[s.a.CSMG_ARMY] = {
            name: "Army",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_NAVY] = {
            name: "Navy",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_RUST] = {
            name: "Rust",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_PEACH] = {
            name: "Peach",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_IRONWORKS] = {
            name: "Ironworks",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .3,
                        metalness: 0,
                        color: "#d1d1d1"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3d4045"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6a3e2c"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#2a2c2f"}],
                    groupMaterialIndices: [0, 1, 2, 3]
                }
            }
        },n[s.a.CSMG_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_SPRING] = {
            name: "Spring",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_SUMMER] = {
            name: "Summer",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_FALL] = {
            name: "Fall",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_WINTER] = {
            name: "Winter",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_BLAZE] = {
            name: "Blaze",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CSMG_FADE] = {
            name: "Fade",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 5,
                        maxScale: 15,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        },n[s.a.BSG_ARMY] = {
            name: "Army",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_NAVY] = {
            name: "Navy",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_RUST] = {
            name: "Rust",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_PEACH] = {
            name: "Peach",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}],
                    groupMaterialIndices: [0, 3, 2, 1]
                }
            }
        },n[s.a.BSG_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: u(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: c(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: _(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: l(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: S(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: O(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: I(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: p(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: E(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_SPRING] = {
            name: "Spring",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: R(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_SUMMER] = {
            name: "Summer",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: T(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_FALL] = {
            name: "Fall",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: M(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_WINTER] = {
            name: "Winter",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: h(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: m(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: A(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_BLAZE] = {
            name: "Blaze",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: d(), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.BSG_FADE] = {
            name: "Fade",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 3,
                        maxScale: 10,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        },n[s.a.LSR_ARMY] = {
            name: "Army",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_NAVY] = {
            name: "Navy",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_RUST] = {
            name: "Rust",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_PEACH] = {
            name: "Peach",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [2, 4, 0, 1]
                }
            }
        },n[s.a.LSR_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(u(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(c(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(_(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(l(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(S(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(O(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(I(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(p(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(E(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_SPRING] = {
            name: "Spring",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(R(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_SUMMER] = {
            name: "Summer",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(T(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_FALL] = {
            name: "Fall",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(M(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_WINTER] = {
            name: "Winter",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(h(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(m(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(A(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_BLAZE] = {
            name: "Blaze",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(d(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.LSR_FADE] = {
            name: "Fade",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 3,
                        maxScale: 10,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#5f5f5f"}],
                    groupMaterialIndices: [0, 1, 0, 0]
                }
            }
        },n[s.a.HSR_ARMY] = {
            name: "Army",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#575940"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#4c5052"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#494A49"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#3D3D3C"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_NAVY] = {
            name: "Navy",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#343e61"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#27304d"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#222941"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#1b1f37"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_CRIMSON] = {
            name: "Crimson",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#701f29"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#69050e"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5c050e"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#46050c"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_LAVENDER] = {
            name: "Lavender",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#933ade"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#7033a2"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#6822a4"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#551b87"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_RUST] = {
            name: "Rust",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#a76635"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#84512c"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#724b2b"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#412b19"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_PEACH] = {
            name: "Peach",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat([{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#d98787"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#be6363"}, {
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#aa5555"
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#983939"}], [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 1, 2, 4]
                }
            }
        },n[s.a.HSR_DARK_ZEBRA] = {
            name: "Dark Zebra",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(u(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_LIGHT_ZEBRA] = {
            name: "Light Zebra",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.NOTEWORTHY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(c(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_JUNGLE] = {
            name: "Jungle",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(_(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_AVALANCHE] = {
            name: "Avalanche",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(l(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_SANDSTORM] = {
            name: "Sandstorm",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(S(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_PIXEL_STORM_ORANGE] = {
            name: "Orange Pixel Storm",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(O(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_PIXEL_STORM_BLUE] = {
            name: "Blue Pixel Storm",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(I(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_PIXEL_STORM_CONTRAST] = {
            name: "Contrast Pixel Storm",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(p(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_PIXEL_STORM_GLITCHED] = {
            name: "Glitched Pixel Storm",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(E(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_SPRING] = {
            name: "Spring",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(R(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_SUMMER] = {
            name: "Summer",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(T(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_FALL] = {
            name: "Fall",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(M(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_WINTER] = {
            name: "Winter",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(h(2.1), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(m(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(A(1.5), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_BLAZE] = {
            name: "Blaze",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.MAGNIFICENT,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(d(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n[s.a.HSR_FADE] = {
            name: "Fade",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.EXTRAORDINARY,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 2,
                        maxScale: 8,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7
                    }, {type: "UNIFORM_COLOR", roughness: .9, metalness: 0, color: "#5f5f5f"}],
                    groupMaterialIndices: [0, 0, 0, 1]
                }
            }
        },n[s.a.S_PEARL_MARBLE] = {
            name: "Pearl Marble",
            itemType: r.a.SHOVEL_COMMON,
            tier: o.a.COVERT,
            slot: i.a.SHOVEL,
            getData: function (e) {
                return {materials: m(1), groupMaterialIndices: [0, 1, 0, 0]}
            }
        },n[s.a.S_VOLCANIC] = {
            name: "Volcanic",
            itemType: r.a.SHOVEL_COMMON,
            tier: o.a.COVERT,
            slot: i.a.SHOVEL,
            getData: function (e) {
                return {materials: A(1), groupMaterialIndices: [0, 1, 0, 0]}
            }
        },n[s.a.S_BLAZE] = {
            name: "Blaze",
            itemType: r.a.SHOVEL_COMMON,
            tier: o.a.COVERT,
            slot: i.a.SHOVEL,
            getData: function (e) {
                return {materials: d(2), groupMaterialIndices: [0, 1, 0, 0]}
            }
        },n[s.a.S_FADE] = {
            name: "Fade",
            itemType: r.a.SHOVEL_COMMON,
            tier: o.a.COVERT,
            slot: i.a.SHOVEL,
            getData: function (e) {
                return {
                    materials: [{
                        type: "FADE",
                        scale: 1,
                        roughness: .9,
                        metalness: 0,
                        minScale: 5,
                        maxScale: 15,
                        minOffset: 0,
                        maxOffset: 10,
                        minSaturation: .8,
                        maxSaturation: .9,
                        minLightness: .6,
                        maxLightness: .7,
                        direction: {x: 0, y: 1, z: 0}
                    }], groupMaterialIndices: [0, 0, 0, 0]
                }
            }
        },n[s.a.SP_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.STRIKE_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.STRIKE_PISTOL,
            getData: function (e) {
                return {materials: N(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        },n[s.a.MP_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.MAGNUM_PISTOL_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.MAGNUM_PISTOL,
            getData: function (e) {
                return {materials: N(2), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.TAR_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.TACTICAL_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.TACTICAL_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: N(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.CAR_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.COMBAT_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMBAT_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: N(), groupMaterialIndices: [0, 1, 0, 0]}
            }
        },n[s.a.SAR_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.SURGE_ASSAULT_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.SURGE_ASSAULT_RIFLE,
            getData: function (e) {
                return {materials: N(), groupMaterialIndices: [0, 1, 1, 1]}
            }
        },n[s.a.LSMG_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.LIGHT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: N(2), groupMaterialIndices: [0, 0, 1, 1]}
            }
        },n[s.a.CSMG_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.COMPACT_SUBMACHINE_GUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.COMPACT_SUBMACHINE_GUN,
            getData: function (e) {
                return {materials: N(), groupMaterialIndices: [0, 1, 0, 1]}
            }
        },n[s.a.BSG_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.BURST_SHOTGUN_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.BURST_SHOTGUN,
            getData: function (e) {
                return {materials: N(2), groupMaterialIndices: [0, 1, 1, 0]}
            }
        },n[s.a.LSR_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.LIGHT_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.LIGHT_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(N(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [1, 2, 0, 0]
                }
            }
        },n[s.a.HSR_PAINT_SPLASH] = {
            name: "Paint Splash",
            itemType: r.a.HEAVY_SNIPER_RIFLE_COMMON,
            tier: o.a.PRECIOUS,
            slot: i.a.HEAVY_SNIPER_RIFLE,
            getData: function (e) {
                return {
                    materials: [].concat(N(), [{
                        type: "UNIFORM_COLOR",
                        roughness: .9,
                        metalness: 0,
                        color: "#5f5f5f"
                    }]), groupMaterialIndices: [0, 0, 1, 2]
                }
            }
        },n), C = function (e) {
            return f[e]
        }
    }, 104: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return i
        }));
        var n, r = a(101);
        !function (e) {
            e[e.GUN_CURR_NUM_CLIP_AMMO = 0] = "GUN_CURR_NUM_CLIP_AMMO", e[e.GUN_IS_RELOADING = 1] = "GUN_IS_RELOADING", e[e.ITEM_IS_USING = 2] = "ITEM_IS_USING", e[e.ITEM_DURABILITY = 3] = "ITEM_DURABILITY", e[e.CURR_BURST_COUNT = 4] = "CURR_BURST_COUNT", e[e.OWNER_NAME = 5] = "OWNER_NAME", e[e.SKIN_TYPE = 6] = "SKIN_TYPE", e[e.SKIN_SEED = 7] = "SKIN_SEED"
        }(n || (n = {}));
        var o = [r.a.UNSIGNED_CHAR, r.a.UNSIGNED_CHAR, r.a.UNSIGNED_CHAR, r.a.UNSIGNED_INT, r.a.UNSIGNED_CHAR, r.a.STRING, r.a.UNSIGNED_INT, r.a.UNSIGNED_INT],
            i = function (e) {
                return o[e]
            };
        t.a = n
    }, 106: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return o
        }));
        var n = a(79), r = a.n(n), o = function () {
            function e(e, t) {
                this._cooldownType = e, this._duration = t
            }

            return r()(e, [{
                key: "type", get: function () {
                    return this._cooldownType
                }
            }, {
                key: "duration", get: function () {
                    return this._duration
                }
            }]), e
        }()
    }, 107: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return T
        })), a.d(t, "a", (function () {
            return M
        })), a.d(t, "e", (function () {
            return h
        })), a.d(t, "d", (function () {
            return N
        })), a.d(t, "g", (function () {
            return C
        })), a.d(t, "f", (function () {
            return L
        })), a.d(t, "c", (function () {
            return y
        }));
        var n = a(26), r = a(349), o = a.n(r), i = a(95), s = a(34), u = a(85), c = a(92), _ = a(161), l = a(86),
            S = a(94), O = a(120), I = a(106), p = a(96), E = a(78), R = a(93), T = function (e) {
                return {
                    pos: Object(s.b)(e.pos),
                    vel: Object(s.b)(e.vel),
                    onGround: e.onGround,
                    canJump: e.canJump,
                    controlState: e.controlState,
                    eyeHeight: e.eyeHeight,
                    aimSpread: e.aimSpread,
                    seqId: e.seqId
                }
            }, M = function (e) {
                return Object(_.b)(Object(s.l)(e.x - n.a.BLOCK_SIZE / 2, e.y - n.a.BLOCK_SIZE / 2, e.z - n.a.BLOCK_SIZE / 2), Object(s.l)(e.x + n.a.BLOCK_SIZE / 2, e.y + n.a.BLOCK_SIZE / 2, e.z + n.a.BLOCK_SIZE / 2))
            }, h = function (e, t) {
                return Object(_.b)(Object(s.l)(e.x - n.a.PLAYER_STANDING_SIZE.x / 2, e.y, e.z - n.a.PLAYER_STANDING_SIZE.z / 2), Object(s.l)(e.x + n.a.PLAYER_STANDING_SIZE.x / 2, e.y + t + .1, e.z + n.a.PLAYER_STANDING_SIZE.z / 2))
            }, m = function (e, t, a) {
                return {
                    base: [(e.x - a.x / 2) / n.a.BLOCK_SIZE, e.y / n.a.BLOCK_SIZE, (e.z - a.z / 2) / n.a.BLOCK_SIZE],
                    max: [(e.x + a.x / 2) / n.a.BLOCK_SIZE, (e.y + t + .1) / n.a.BLOCK_SIZE, (e.z + a.z / 2) / n.a.BLOCK_SIZE],
                    translate: function (e) {
                        this.base[0] += e[0], this.base[1] += e[1], this.base[2] += e[2], this.max[0] += e[0], this.max[1] += e[1], this.max[2] += e[2]
                    }
                }
            }, A = function (e, t, a, n) {
                var r = !0;
                return o()(n, e, t, (function (e, t, a, n) {
                    return n[t] = 0, r = !1, !0
                }), a, 1e-5), r
            }, d = function (e, t) {
                var a = m(t.pos, t.eyeHeight, n.a.PLAYER_STANDING_SIZE),
                    r = [0, n.a.PLAYER_UNCROUCH_DISTANCE_CHECK / n.a.BLOCK_SIZE, 0];
                return o()(e, a, r, (function (e, t, a, n) {
                    return !0
                }), !1, 1e-5) * n.a.BLOCK_SIZE
            }, N = function (e, t) {
                return !(Object(l.h)(t.inventory.getSelected().item.type) && !t.cooldownManager.cooldownExpired(p.a.SNIPER_SHOOT)) && ((t.physicsStep.controlState === i.a.WALKING || t.physicsStep.controlState === i.a.CROUCHING || t.physicsStep.controlState === i.a.NOCLIP) && e.secondaryAction && Object(l.f)(t.inventory.getSelected().item.id) && t.inventory.getSelected().item.canADS && t.cooldownManager.cooldownExpired(p.a.RELOAD) && t.cooldownManager.cooldownExpired(p.a.ITEM_SWITCH))
            }, f = function (e, t, a, r, c, _) {
                var l = Object(s.l)(Number(e.moveLeft) - Number(e.moveRight), 0, Number(e.moveForward) - Number(e.moveBackward));
                Object(s.j)(l);
                var S = _.physicsStep.controlState;
                if (_.physicsStep.controlState === i.a.WALKING) _.physicsStep.onGround && e.crouch ? S = i.a.CROUCHING : _.physicsStep.onGround && e.run && e.moveForward && !e.moveBackward && (S = i.a.RUNNING); else if (_.physicsStep.controlState === i.a.RUNNING) _.physicsStep.onGround && e.crouch ? S = i.a.CROUCHING : e.moveForward && !e.moveBackward && e.run || (S = i.a.WALKING); else if (_.physicsStep.controlState === i.a.CROUCHING) !e.crouch && d(a, _.physicsStep) >= n.a.PLAYER_UNCROUCH_DISTANCE_CHECK - _.physicsStep.eyeHeight && (S = i.a.WALKING); else if (_.physicsStep.controlState === i.a.FREE_FALLING) {
                    e.jump && _.cooldownManager.requestCooldown(O.a.TOGGLE_GLIDE) && (S = i.a.GLIDING);
                    var T = Object(s.b)(_.physicsStep.pos);
                    Object(s.f)(T, n.a.BLOCK_SIZE), r(T, Object(s.l)(0, -1, 0), 40).hit && (S = i.a.GLIDING, _.cooldownManager.setCooldown(new I.a(p.a.TOGGLE_GLIDE, Math.floor(Object(E.c)(3600)))))
                } else if (_.physicsStep.controlState === i.a.GLIDING && _.cooldownManager.cooldownExpired(p.a.TOGGLE_GLIDE)) {
                    var M = Object(s.b)(_.physicsStep.pos);
                    Object(s.f)(M, n.a.BLOCK_SIZE), r(M, Object(s.l)(0, -1, 0), 40).hit ? _.cooldownManager.setCooldown(new I.a(p.a.TOGGLE_GLIDE, Math.floor(Object(E.c)(3600)))) : e.jump && _.cooldownManager.requestCooldown(O.a.TOGGLE_GLIDE) && (S = i.a.FREE_FALLING)
                }
                var h = _.physicsStep.eyeHeight;
                if (S === i.a.CROUCHING && Math.abs(h - n.a.PLAYER_CROUCHING_EYE_POSITION) > 1e-5) h = Math.max(n.a.PLAYER_CROUCHING_EYE_POSITION, h - .1); else if (S !== i.a.CROUCHING && Math.abs(h - n.a.PLAYER_STANDING_EYE_POSITION) > 1e-5) {
                    var f = d(a, _.physicsStep);
                    f >= n.a.PLAYER_UNCROUCH_DISTANCE_CHECK - _.physicsStep.eyeHeight ? h = Math.min(n.a.PLAYER_STANDING_EYE_POSITION, h + Math.min(.1, f)) : (h = n.a.PLAYER_CROUCHING_EYE_POSITION, S = i.a.CROUCHING)
                }
                var C = _.inventory.getSelected().item, L = N(e, _), y = n.a.PLAYER_ACCELERATION, U = 1;
                S === i.a.RUNNING ? U *= n.a.PLAYER_RUN_SPEED_LIMIT_MODIFIER : S === i.a.CROUCHING ? U *= n.a.PLAYER_CROUCH_SPEED_LIMIT_MODIFIER : S === i.a.WALKING && L && (U *= n.a.PLAYER_ADS_SPEED_LIMIT_MODIFIER), U *= C.movementSpeedModifier;
                var g = Object(s.l)(-Math.sin(e.pitchYaw.y), 0, -Math.cos(e.pitchYaw.y)), P = Object(s.b)(g);
                Object(s.c)(P, Object(s.l)(0, 1, 0));
                var v = -5;
                if (S === i.a.FREE_FALLING) {
                    if (v = -.4, e.moveForward) {
                        var F = Object(R.d)(Object(R.e)(e.pitchYaw.x, e.pitchYaw.y));
                        v -= .4 * Math.max(0, Object(s.g)(F, Object(s.l)(0, -1, 0)))
                    }
                } else S === i.a.GLIDING && (v = -.2);
                var G = !1,
                    H = Object(s.l)(_.physicsStep.vel.x, _.physicsStep.vel.y - n.a.WORLD_GRAVITY * n.a.PLAYER_MASS * c, _.physicsStep.vel.z);
                if (H.y = Math.max(H.y, v), !_.physicsStep.onGround || S !== i.a.WALKING && S !== i.a.CROUCHING && S !== i.a.RUNNING) {
                    H.x *= n.a.PLAYER_AIR_FRICTION, H.z *= n.a.PLAYER_AIR_FRICTION;
                    var b = Object(s.b)(g);
                    Object(s.i)(b, l.z * y * U * n.a.PLAYER_AIR_STRAFE_MODIFIER * c), Object(s.a)(H, b);
                    var x = Object(s.b)(P);
                    Object(s.i)(x, -l.x * y * U * n.a.PLAYER_AIR_STRAFE_MODIFIER * c), Object(s.a)(H, x)
                } else {
                    H.x *= n.a.PLAYER_GROUND_FRICTION, H.z *= n.a.PLAYER_GROUND_FRICTION;
                    var D = Object(s.b)(g);
                    Object(s.i)(D, l.z * y * U * c), Object(s.a)(H, D);
                    var k = Object(s.b)(P);
                    Object(s.i)(k, -l.x * y * U * c), Object(s.a)(H, k)
                }
                var B = t(_.physicsStep.pos.x / n.a.BLOCK_SIZE, _.physicsStep.pos.y / n.a.BLOCK_SIZE, _.physicsStep.pos.z / n.a.BLOCK_SIZE) === u.a.WATER,
                    w = t(_.physicsStep.pos.x / n.a.BLOCK_SIZE, (_.physicsStep.pos.y + .9) / n.a.BLOCK_SIZE, _.physicsStep.pos.z / n.a.BLOCK_SIZE) === u.a.WATER,
                    Y = t(_.physicsStep.pos.x / n.a.BLOCK_SIZE, (_.physicsStep.pos.y + 1.1) / n.a.BLOCK_SIZE, _.physicsStep.pos.z / n.a.BLOCK_SIZE) === u.a.WATER,
                    K = _.physicsStep.canJump;
                B && w ? e.jump && _.physicsStep.canJump && (H.y = 1.1 * n.a.PLAYER_JUMP_FORCE) : !_.physicsStep.onGround || S !== i.a.WALKING && S !== i.a.CROUCHING && S !== i.a.RUNNING || e.jump && (H.y = n.a.PLAYER_JUMP_FORCE);
                var V = Math.sqrt(H.x * H.x + H.z * H.z), W = B ? n.a.PLAYER_WATER_SPEED_LIMIT : n.a.PLAYER_SPEED_LIMIT;
                V > W * U * c && (H.x = H.x / V * W * U * c, H.z = H.z / V * W * U * c), B && Y && Math.abs(H.y) > n.a.PLAYER_WATER_VERTICAL_SPEED_LIMIT * U * c && (H.y = H.y / Math.abs(H.y) * n.a.PLAYER_WATER_VERTICAL_SPEED_LIMIT * U * c);
                var j = m(_.physicsStep.pos, h, n.a.PLAYER_STANDING_SIZE), Z = !1;
                Math.abs(H.x) < 1e-6 && (H.x = 0), Math.abs(H.y) < 1e-6 && (H.y = 0), Math.abs(H.z) < 1e-6 && (H.z = 0);
                var z = Object(s.b)(H), X = [!1, !1, !1], q = [H.x, H.y, H.z];
                o()(a, j, q, (function (e, t, a, n) {
                    return 0 === t && (H.x = 0, Z = !0), 1 === t && (H.y = 0, G = n[1] < 0), 2 === t && (H.z = 0, Z = !0), X[t] = !0, n[t] = 0, !1
                }), !1, 1e-4);
                var J,
                    Q = (J = j, Object(s.l)(J.base[0] * n.a.BLOCK_SIZE + n.a.PLAYER_STANDING_SIZE.x / 2, J.base[1] * n.a.BLOCK_SIZE, J.base[2] * n.a.BLOCK_SIZE + n.a.PLAYER_STANDING_SIZE.z / 2));
                X[0] && (Q.x += .001 * (z.x > 0 ? -1 : 1)), X[1] && (Q.y += .001 * (z.y > 0 ? -1 : 1)), X[2] && (Q.z += .001 * (z.z > 0 ? -1 : 1));
                var $ = m(Object(s.l)(Q.x, _.physicsStep.pos.y, _.physicsStep.pos.z), h, n.a.PLAYER_CROUCH_FALL_TEST_SIZE),
                    ee = z.x > 0 ? -1 : 1,
                    te = a(_.physicsStep.pos.x / n.a.BLOCK_SIZE + ee, _.physicsStep.pos.y / n.a.BLOCK_SIZE, _.physicsStep.pos.z / n.a.BLOCK_SIZE),
                    ae = (Math.floor(_.physicsStep.pos.x / n.a.BLOCK_SIZE) + .5 + ee) * n.a.BLOCK_SIZE;
                !X[0] && !te && 0 !== z.x && z.y <= 0 && 0 === H.y && S === i.a.CROUCHING && e.crouch && _.physicsStep.onGround && A($, [0, -.5, 0], !1, a) && (z.x > 0 ? Q.x = Math.min(Q.x, ae + n.a.BLOCK_SIZE / 2 + n.a.PLAYER_CROUCH_FALL_TEST_SIZE.x / 2 - .001) : Q.x = Math.max(Q.x, ae - n.a.BLOCK_SIZE / 2 - +n.a.PLAYER_CROUCH_FALL_TEST_SIZE.x / 2 + .001), H.x = 0);
                var ne = m(Object(s.l)(_.physicsStep.pos.x, _.physicsStep.pos.y, Q.z), h, n.a.PLAYER_CROUCH_FALL_TEST_SIZE),
                    re = z.z > 0 ? -1 : 1,
                    oe = a(_.physicsStep.pos.x / n.a.BLOCK_SIZE, _.physicsStep.pos.y / n.a.BLOCK_SIZE, _.physicsStep.pos.z / n.a.BLOCK_SIZE + re),
                    ie = (Math.floor(_.physicsStep.pos.z / n.a.BLOCK_SIZE) + .5 + re) * n.a.BLOCK_SIZE;
                if (!X[2] && !oe && 0 !== z.z && z.y <= 0 && 0 === H.y && S === i.a.CROUCHING && e.crouch && _.physicsStep.onGround && A(ne, [0, -.5, 0], !1, a) && (z.z > 0 ? Q.z = Math.min(Q.z, ie + n.a.BLOCK_SIZE / 2 + n.a.PLAYER_CROUCH_FALL_TEST_SIZE.z / 2 - .001) : Q.z = Math.max(Q.z, ie - n.a.BLOCK_SIZE / 2 - n.a.PLAYER_CROUCH_FALL_TEST_SIZE.z / 2 + .001), H.z = 0), Z && S === i.a.RUNNING) {
                    var se = m(_.physicsStep.pos, h, n.a.PLAYER_STANDING_SIZE), ue = Math.floor(se.base[1]) + 1,
                        ce = ue - se.base[1];
                    A(se, [0, ce + .1, 0], !1, a) && A(se, [z.x, 0, z.z], !1, a) && (Q.y = _.physicsStep.pos.y, X[0] || (Q.x = _.physicsStep.pos.x), X[2] || (Q.z = _.physicsStep.pos.z), Q.y += Math.min(ce, 1 / 3) * n.a.BLOCK_SIZE, Q.y >= ue * n.a.BLOCK_SIZE && (X[0] && (Q.x += z.x * n.a.BLOCK_SIZE), X[2] && (Q.z += z.z * n.a.BLOCK_SIZE)))
                }
                return G && (S !== i.a.GLIDING && S !== i.a.FREE_FALLING || (S = i.a.WALKING)), {
                    aimSpread: _.physicsStep.aimSpread,
                    pos: Q,
                    vel: H,
                    onGround: G,
                    canJump: K,
                    controlState: S,
                    eyeHeight: h,
                    seqId: _.physicsStep.seqId + 1
                }
            }, C = function (e, t, a, r, o, u) {
                // #NoClip
                return window.noClip || u.physicsStep.controlState === i.a.NOCLIP ? function (e, t, a) {
                    var r = Object(s.l)(Number(e.moveLeft) - Number(e.moveRight), 0, Number(e.moveForward) - Number(e.moveBackward));
                    Object(s.j)(r);
                    var o = Object(s.l)(-Math.sin(e.pitchYaw.y), 0, -Math.cos(e.pitchYaw.y)), i = Object(s.b)(o);
                    Object(s.c)(i, Object(s.l)(0, 1, 0));
                    var u = Object(s.l)(a.physicsStep.vel.x, a.physicsStep.vel.y, a.physicsStep.vel.z);
                    u.x *= n.a.PLAYER_GROUND_FRICTION, u.y *= n.a.PLAYER_GROUND_FRICTION, u.z *= n.a.PLAYER_GROUND_FRICTION;
                    var c = n.a.PLAYER_ACCELERATION;
                    e.run && (c *= 4);
                    var _ = Object(s.b)(o);
                    Object(s.i)(_, r.z * c * 1 * t), Object(s.a)(u, _);
                    var l = Object(s.b)(i);
                    Object(s.i)(l, -r.x * c * 1 * t), Object(s.a)(u, l), e.jump && (u.y += 1 * c * t), e.crouch && (u.y -= 1 * c * t);
                    var S = Math.sqrt(u.x * u.x + u.y * u.y + u.z * u.z), O = n.a.PLAYER_SPEED_LIMIT;
                    e.run && (O *= 4), S > 1 * O * t && (u.x = u.x / S * O * 1 * t, u.y = u.y / S * O * 1 * t, u.z = u.z / S * O * 1 * t), Math.abs(u.x) < 1e-6 && (u.x = 0), Math.abs(u.y) < 1e-6 && (u.y = 0), Math.abs(u.z) < 1e-6 && (u.z = 0);
                    var I = Object(s.b)(a.physicsStep.pos);
                    return Object(s.a)(I, u), {
                        aimSpread: a.physicsStep.aimSpread,
                        pos: I,
                        vel: u,
                        onGround: !1,
                        canJump: a.physicsStep.canJump,
                        controlState: a.physicsStep.controlState,
                        eyeHeight: a.physicsStep.eyeHeight,
                        seqId: a.physicsStep.seqId + 1
                    }
                }(e, o, u) : f(e, t, a, r, o, u)
            }, L = function (e, t, a) {
                var r = n.a.PHYSICS_TIME_STEP, o = a.inventory.getSelected().item;
                // #Spread
                if (!(o instanceof c.a)) return window.SpreadHack ? 0 : Math.max(0, a.physicsStep.aimSpread - 10 * r);
                var u = o, _ = 1;
                a.physicsStep.controlState === i.a.RUNNING && (_ *= n.a.PLAYER_RUN_SPEED_LIMIT_MODIFIER);
                var l = !a.physicsStep.onGround, S = t.primaryAction && u.canShoot(a, e),
                    O = Object(s.h)(a.physicsStep.vel) > .02, I = N(t, a), p = a.physicsStep.controlState === i.a.CROUCHING,
                    E = u.defaultSpread * _, R = u.spreadIncreaseRateMove;
                l ? (E = u.inAirSpread, R = u.spreadIncreaseRateJump) : S && O ? (E = u.shootingMovingSpread * _, R = u.spreadIncreaseRateShoot + u.spreadIncreaseRateMove) : S ? (E = u.shootingSpread * _, R = u.spreadIncreaseRateShoot) : O && (E = u.movingSpread * _, R = u.spreadIncreaseRateMove), I && p ? E *= u.ADSCrouchingSpreadFactor : I ? E *= u.ADSSpreadFactor : p && (E *= u.crouchingSpreadFactor);
                var T = a.physicsStep.aimSpread;
                // #Spread
                return T = window.SpreadHack ? 0 : (T > E ? Math.max(E, T - u.spreadRecovery * r) : Math.min(E, T + R * r))
            }, y = function (e, t) {
                for (var a = 9999999, r = u.a.AIR, o = -1; o <= 1; o++) for (var i = -1; i <= 1; i++) {
                    var c = t.roundToBlockCenterPos(e.x / n.a.BLOCK_SIZE + o, (e.y - n.a.BLOCK_SIZE / 2) / n.a.BLOCK_SIZE, e.z / n.a.BLOCK_SIZE + i),
                        _ = Object(s.e)(e, c);
                    if (_ < a) {
                        var l = t.getBlockAt(e.x / n.a.BLOCK_SIZE + o, (e.y - n.a.BLOCK_SIZE / 2) / n.a.BLOCK_SIZE, e.z / n.a.BLOCK_SIZE + i);
                        void 0 !== S.a[l].sound && (a = _, r = l)
                    }
                }
                return r
            }
    }, 108: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(89), O = a(34), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.4), a.setInAirSpread(1), a.setShootingSpread(.7), a.setMovingSpread(.8), a.setShootingMovingSpread(.9), a.setADSSpreadFactor(.1), a.setCrouchingSpreadFactor(.4), a.setADSCrouchingSpreadFactor(.1), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.2))), a.setReloadTime(Math.floor(Object(l.c)(1.5))), a.setRange(100), a.setAmmo(30), a.setAmmoItemType(c.a.AMMO_ASSAULT_RIFLE), a.setBulletsPerShot(1), a.setShellModelID(S.a.ASSAULT_RIFLE_SHELL), a.setShellModelOrigin(Object(O.l)(-.1, 0, .4)), a.setGunShotSoundType(I.a.GUN_SHOT_COMBAT_ASSAULT_RIFLE), a.setMaxRecoil(.08), a.setRecoilGainVel(.3), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.8), a.setSkinAOMap(E.a.combatAssaultRifleAOTexture), a.itemName = "Combat Assault Rifle", a.itemDescription = "Powerful but hard to control", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.COMBAT_ASSAULT_RIFLE_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(0, -.04, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.5, .5, .5), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 109: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(89), O = a(34), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.3), a.setInAirSpread(.9), a.setShootingSpread(.6), a.setMovingSpread(.7), a.setShootingMovingSpread(.8), a.setADSSpreadFactor(.1), a.setCrouchingSpreadFactor(.4), a.setADSCrouchingSpreadFactor(.1), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.16))), a.setReloadTime(Math.floor(Object(l.c)(1.4))), a.setRange(100), a.setAmmo(25), a.setAmmoItemType(c.a.AMMO_ASSAULT_RIFLE), a.setBulletsPerShot(1), a.setShellModelID(S.a.ASSAULT_RIFLE_SHELL), a.setShellModelOrigin(Object(O.l)(-.1, 0, .3)), a.setGunShotSoundType(I.a.GUN_SHOT_TACTICAL_ASSAULT_RIFLE), a.setMaxRecoil(.03), a.setRecoilGainVel(.2), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.8), a.setSkinAOMap(E.a.tacticalAssaultRifleAOTexture), a.itemName = "Tactical Assault Rifle", a.itemDescription = "All-around versatile and balanced weapon", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getADSPosition = function () {
                    return Object(O.l)(-.122, .04, 0)
                }, a.getModelID = function () {
                    return c.a.TACTICAL_ASSAULT_RIFLE_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(0, -.04, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.5, .5, .5), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 110: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return A
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(89), O = a(34), I = a(84), p = a(25), E = a(106), R = a(96), T = a(104), M = a(81);

        function h(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return m(e, t)
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

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var A = function (e) {
            function t(t) {
                var a;
                return (a = e.call(this, t) || this)._currBurstCount = void 0, a._burstCount = void 0, a._burstRate = void 0, a._currBurstCount = 0, a._burstCount = 3, a._burstRate = Math.floor(Object(l.c)(.08)), a.setCanADS(!0), a.setDefaultSpread(.4), a.setInAirSpread(1), a.setShootingSpread(.7), a.setMovingSpread(.8), a.setShootingMovingSpread(.9), a.setADSSpreadFactor(.1), a.setCrouchingSpreadFactor(.4), a.setADSCrouchingSpreadFactor(.1), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.6))), a.setReloadTime(Math.floor(Object(l.c)(1.5))), a.setRange(100), a.setAmmo(25), a.setAmmoItemType(c.a.AMMO_ASSAULT_RIFLE), a.setBulletsPerShot(1), a.setMuzzleFlashPosition(Object(O.l)(0, .1, .2)), a.setShellModelID(S.a.ASSAULT_RIFLE_SHELL), a.setShellModelOrigin(Object(O.l)(-.1, 0, .4)), a.setGunShotSoundType(I.a.GUN_SHOT_SURGE_ASSAULT_RIFLE), a.setMaxRecoil(.08), a.setRecoilGainVel(.12), a.setRecoilRecoveryVel(.05), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.8), a.setSkinAOMap(M.a.surgeAssaultRifleAOTexture), a.itemName = "Surge Assault Rifle", a.itemDescription = "Its unique burst fire mode can be tricky to handle, but once mastered, this weapon will pierce right through your enemies", a.setItemTier(p.a.COMMON), a
            }

            u()(t, e);
            var a = t.prototype;
            return a.clone = function () {
                var t = e.prototype.clone.call(this);
                return t._currBurstCount = this._currBurstCount, t
            }, a.getModelID = function () {
                return c.a.SURGE_ASSAULT_RIFLE_COMMON
            }, a.getADSPosition = function () {
                return Object(O.l)(-.121, .02, 0)
            }, a.onUpdateMetadata = function (t) {
                e.prototype.onUpdateMetadata.call(this, t);
                for (var a, n = h(t); !(a = n()).done;) {
                    var r = a.value;
                    switch (r.metadataType) {
                        case T.a.CURR_BURST_COUNT:
                            this._currBurstCount = r.value
                    }
                }
            }, a.shoot = function (t, a, n) {
                t.cooldownManager.requestCooldown(new E.a(R.a.BURST_SHOOT, this._burstRate)) && (e.prototype.shoot.call(this, t, a, n), this._currBurstCount = this._burstCount - 1)
            }, a.onItemHoldingUpdate = function (t, a, n, r) {
                e.prototype.onItemHoldingUpdate.call(this, t, a, n, r), this.currClipAmmo <= 0 && (this._currBurstCount = 0), this._currBurstCount > 0 && a.cooldownManager.requestCooldown(new E.a(R.a.BURST_SHOOT, this._burstRate)) && (e.prototype.shoot.call(this, a, n, r), --this._currBurstCount)
            }, a.generateThirdPersonModel = function () {
                var e = i()(r.a.mark((function e(t) {
                    var a;
                    return r.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(0, -.04, .05), a.rotation.set(0, 0, 0), a.scale.set(1.3, 1.3, 1.3), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var t = i()(r.a.mark((function t(a, n) {
                    var o;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (!a) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 3, e.prototype.generateModel.call(this, n);
                            case 3:
                                t.t0 = t.sent, t.next = 9;
                                break;
                            case 6:
                                return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                            case 8:
                                t.t0 = t.sent;
                            case 9:
                                return (o = t.t0).position.set(-.08, 0, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.7, .7, .7), t.abrupt("return", o);
                            case 16:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));
                return function (e, a) {
                    return t.apply(this, arguments)
                }
            }(), a.generateEntityModel = function () {
                var e = i()(r.a.mark((function e(t) {
                    var a;
                    return r.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(_.a)
    }, 111: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(34), O = a(89), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.3), a.setInAirSpread(.8), a.setShootingSpread(.5), a.setMovingSpread(.6), a.setShootingMovingSpread(.7), a.setADSSpreadFactor(.1), a.setCrouchingSpreadFactor(.3), a.setADSCrouchingSpreadFactor(.1), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.28))), a.setReloadTime(Math.floor(Object(l.c)(1))), a.setRange(40), a.setAmmo(12), a.setAmmoItemType(c.a.AMMO_PISTOL), a.setBulletsPerShot(1), a.setShellModelID(O.a.PISTOL_SHELL), a.setMuzzleFlashPosition(Object(S.l)(0, .1, .2)), a.setShellModelOrigin(Object(S.l)(-.1, 0, .35)), a.setGunShotSoundType(I.a.GUN_SHOT_STRIKE_PISTOL), a.setMaxRecoil(.04), a.setRecoilGainVel(.3), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.95), a.setSkinAOMap(E.a.strikePistolAOTexture), a.itemName = "Strike Pistol", a.itemDescription = "Not too strong, but powerful enough to kill someone", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.STRIKE_PISTOL_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(0, -.06, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.8, .8, .8), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 112: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(34), O = a(89), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.3), a.setInAirSpread(.8), a.setShootingSpread(.8), a.setMovingSpread(.9), a.setShootingMovingSpread(1), a.setADSSpreadFactor(.1), a.setCrouchingSpreadFactor(.3), a.setADSCrouchingSpreadFactor(.1), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.8))), a.setReloadTime(Math.floor(Object(l.c)(1))), a.setRange(60), a.setAmmo(7), a.setAmmoItemType(c.a.AMMO_PISTOL), a.setBulletsPerShot(1), a.setShellModelID(O.a.PISTOL_SHELL), a.setMuzzleFlashPosition(Object(S.l)(0, .11, .21)), a.setShellModelOrigin(Object(S.l)(-.1, 0, .35)), a.setGunShotSoundType(I.a.GUN_SHOT_MAGNUM_PISTOL), a.setMaxRecoil(.13), a.setRecoilGainVel(.8), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(150), a.setMovementSpeedModifier(.95), a.setSkinAOMap(E.a.magnumPistolAOTexture), a.itemName = "Magnum Pistol", a.itemDescription = "High power and high recoil; easily pierce through your opponents if you have precise aim", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.MAGNUM_PISTOL_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(.01, -.08, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.8, .8, .8), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 113: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(34), O = a(89), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.6), a.setInAirSpread(1), a.setShootingSpread(.8), a.setMovingSpread(.8), a.setShootingMovingSpread(.9), a.setADSSpreadFactor(.5), a.setCrouchingSpreadFactor(.5), a.setADSCrouchingSpreadFactor(.5), a.setSpreadRecovery(1.33), a.setSpreadIncreaseRateMove(5.33), a.setSpreadIncreaseRateJump(5.33), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.5))), a.setReloadTime(Math.floor(Object(l.c)(2))), a.setRange(8), a.setAmmo(6), a.setAmmoItemType(c.a.AMMO_SHOTGUN), a.setShellModelID(O.a.SHOTGUN_SHELL), a.setShellModelOrigin(Object(S.l)(-.1, 0, .4)), a.setGunShotSoundType(I.a.GUN_SHOT_BURST_SHOTGUN), a.setMaxRecoil(1), a.setRecoilGainVel(.8), a.setRecoilRecoveryVel(.3), a.setRecoilActiveTime(200), a.setMovementSpeedModifier(.9), a.setMuzzleFlashPosition(Object(S.l)(0, .09, .48)), a.setMuzzleFlashScale(Object(S.l)(.3, .3, .3)), a.setBulletsPerShot(9), a.setSkinAOMap(E.a.burstShotgunAOTexture), a.itemName = "Burst Shotgun", a.itemDescription = "Deadly in close-range combat, but useless in longer-range gunfights due to its steep damage falloff rate", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.BURST_SHOTGUN_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(0, -.05, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.5, .5, .5), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 114: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(34), O = a(89), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.3), a.setInAirSpread(.8), a.setShootingSpread(.4), a.setMovingSpread(.5), a.setShootingMovingSpread(.6), a.setADSSpreadFactor(.3), a.setCrouchingSpreadFactor(.4), a.setADSCrouchingSpreadFactor(.3), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.08))), a.setReloadTime(Math.floor(Object(l.c)(1.5))), a.setRange(30), a.setAmmo(60), a.setAmmoItemType(c.a.AMMO_SUBMACHINE_GUN), a.setShellModelID(O.a.SUBMACHINE_GUN_SHELL), a.setBulletsPerShot(1), a.setGunShotSoundType(I.a.GUN_SHOT_LIGHT_SUBMACHINE_GUN), a.setMaxRecoil(.05), a.setRecoilGainVel(.3), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.95), a.setMuzzleFlashPosition(Object(S.l)(0, .1, .2)), a.setShellModelOrigin(Object(S.l)(-.1, 0, .3)), a.setSkinAOMap(E.a.lightSubmachineGunAOTexture), a.itemName = "Light Submachine Gun", a.itemDescription = "Lightweight and easy to carry. Overwhelm your opponents with its big magazine", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.LIGHT_SUBMACHINE_GUN_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(-.05, -.02, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.7, .7, .7), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(_.a)
    }, 115: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return R
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(34), O = a(89), I = a(84), p = a(25), E = a(81), R = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setDefaultSpread(.3), a.setInAirSpread(.8), a.setShootingSpread(.4), a.setMovingSpread(.5), a.setShootingMovingSpread(.6), a.setADSSpreadFactor(.3), a.setCrouchingSpreadFactor(.4), a.setADSCrouchingSpreadFactor(.3), a.setSpreadRecovery(2.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(.12))), a.setReloadTime(Math.floor(Object(l.c)(1.5))), a.setRange(30), a.setAmmo(50), a.setAmmoItemType(c.a.AMMO_SUBMACHINE_GUN), a.setShellModelID(O.a.SUBMACHINE_GUN_SHELL), a.setBulletsPerShot(1), a.setGunShotSoundType(I.a.GUN_SHOT_COMPACT_SUBMACHINE_GUN), a.setMaxRecoil(.07), a.setRecoilGainVel(.3), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(100), a.setMovementSpeedModifier(.95), a.setMuzzleFlashPosition(Object(S.l)(.01, .1, .11)), a.setShellModelOrigin(Object(S.l)(-.1, 0, .3)), a.setSkinAOMap(E.a.compactSubmachineGunAOTexture), a.itemName = "Compact Submachine Gun", a.itemDescription = "Powerful firearm with a compact design. Excels in dealing block damage and close-quarters combat", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.COMPACT_SUBMACHINE_GUN_COMMON
                }, a.generateThirdPersonModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, -.02, .06), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(-.07, -.03, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.8, .8, .8), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.9, .9, .9), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.getADSPosition = function () {
                    return Object(S.l)(-.12, .02, 0)
                }, t
            }(_.a)
    }, 116: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return M
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(89), O = a(34), I = a(84), p = a(25), E = a(26), R = a(96), T = a(81), M = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setUseScope(!0), a.setDefaultSpread(1.5), a.setInAirSpread(2), a.setShootingSpread(2), a.setMovingSpread(2), a.setShootingMovingSpread(2.5), a.setADSSpreadFactor(.01), a.setCrouchingSpreadFactor(1), a.setADSCrouchingSpreadFactor(.01), a.setSpreadRecovery(4.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(1.5))), a.setReloadTime(Math.floor(Object(l.c)(2))), a.setRange(200), a.setAmmo(6), a.setAmmoItemType(c.a.AMMO_SNIPER_RIFLE), a.setBulletsPerShot(1), a.setShellModelID(S.a.SNIPER_RIFLE_SHELL), a.setShellModelOrigin(Object(O.l)(-.1, 0, .4)), a.setGunShotSoundType(I.a.GUN_SHOT_LIGHT_SNIPER_RIFLE), a.setMaxRecoil(.08), a.setRecoilGainVel(.3), a.setRecoilRecoveryVel(.2), a.setRecoilActiveTime(150), a.setMovementSpeedModifier(.9), a.setMuzzleFlashPosition(Object(O.l)(0, .08, .6)), a.setADSFOV(E.a.PLAYER_SCOPED_FOV), a.setShootCooldownType(R.a.SNIPER_SHOOT), a.setSkinAOMap(T.a.lightSniperRifleAOTexture), a.itemName = "Light Sniper Rifle", a.itemDescription = "Light-weight sniper rifle with low recoil and decent damage", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.LIGHT_SNIPER_RIFLE_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(.02, -.04, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.4, .4, .4), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThirdPersonModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, .1), e.abrupt("return", a);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.getADSPosition = function () {
                    return Object(O.l)(-.121, .074, 0)
                }, t
            }(_.a)
    }, 117: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return M
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(92), l = a(78),
            S = a(89), O = a(34), I = a(84), p = a(25), E = a(26), R = a(96), T = a(81), M = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setCanADS(!0), a.setUseScope(!0), a.setDefaultSpread(2), a.setInAirSpread(2.5), a.setShootingSpread(2.5), a.setMovingSpread(2.5), a.setShootingMovingSpread(3), a.setADSSpreadFactor(.01), a.setCrouchingSpreadFactor(1), a.setADSCrouchingSpreadFactor(.01), a.setSpreadRecovery(3.66), a.setSpreadIncreaseRateMove(2.66), a.setSpreadIncreaseRateJump(2.66), a.setSpreadIncreaseRateShoot(6), a.setFireRate(Math.floor(Object(l.c)(2))), a.setReloadTime(Math.floor(Object(l.c)(3))), a.setRange(200), a.setAmmo(3), a.setAmmoItemType(c.a.AMMO_SNIPER_RIFLE), a.setBulletsPerShot(1), a.setShellModelID(S.a.SNIPER_RIFLE_SHELL), a.setShellModelOrigin(Object(O.l)(-.1, 0, .3)), a.setGunShotSoundType(I.a.GUN_SHOT_HEAVY_SNIPER_RIFLE), a.setMaxRecoil(.8), a.setRecoilGainVel(.9), a.setRecoilRecoveryVel(.25), a.setRecoilActiveTime(150), a.setMovementSpeedModifier(.7), a.setMuzzleFlashPosition(Object(O.l)(0, .1, .5)), a.setADSFOV(E.a.PLAYER_SCOPED_FOV), a.setShootCooldownType(R.a.SNIPER_SHOOT), a.setSkinAOMap(T.a.heavySniperRifleAOTexture), a.itemName = "Heavy Sniper Rifle", a.itemDescription = "Heavy sniper rifle with high recoil and powerful damage", a.setItemTier(p.a.COMMON), a
                }

                u()(t, e);
                var a = t.prototype;
                return a.getModelID = function () {
                    return c.a.HEAVY_SNIPER_RIFLE_COMMON
                }, a.generateThumbnailModel = function () {
                    var t = i()(r.a.mark((function t(a, n) {
                        var o;
                        return r.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.prototype.generateModel.call(this, n);
                                case 3:
                                    t.t0 = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.prototype.generateModelWithDefaultSkin.call(this, n);
                                case 8:
                                    t.t0 = t.sent;
                                case 9:
                                    return (o = t.t0).position.set(0, -.04, -1), o.rotation.set(0, 0, 0), o.rotateY(-Math.PI / 2), o.rotateX(-Math.PI / 4.5), o.scale.set(.4, .6, .4), t.abrupt("return", o);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.8, .8, .8), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThirdPersonModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, .1), e.abrupt("return", a);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.getADSPosition = function () {
                    return Object(O.l)(-.121, .061, 0)
                }, t
            }(_.a)
    }, 118: function (e, t, a) {
        "use strict";
        a.d(t, "q", (function () {
            return r
        })), a.d(t, "c", (function () {
            return o
        })), a.d(t, "p", (function () {
            return i
        })), a.d(t, "o", (function () {
            return s
        })), a.d(t, "x", (function () {
            return u
        })), a.d(t, "m", (function () {
            return _
        })), a.d(t, "l", (function () {
            return l
        })), a.d(t, "a", (function () {
            return c
        })), a.d(t, "k", (function () {
            return S
        })), a.d(t, "b", (function () {
            return O
        })), a.d(t, "i", (function () {
            return I
        })), a.d(t, "g", (function () {
            return p
        })), a.d(t, "e", (function () {
            return E
        })), a.d(t, "f", (function () {
            return R
        })), a.d(t, "h", (function () {
            return T
        })), a.d(t, "d", (function () {
            return M
        })), a.d(t, "n", (function () {
            return h
        })), a.d(t, "y", (function () {
            return m
        })), a.d(t, "w", (function () {
            return A
        })), a.d(t, "t", (function () {
            return d
        })), a.d(t, "u", (function () {
            return N
        })), a.d(t, "v", (function () {
            return f
        })), a.d(t, "r", (function () {
            return C
        })), a.d(t, "s", (function () {
            return L
        })), a.d(t, "j", (function () {
            return y
        }));
        var n = a(2), r = function (e) {
            return {type: n.c.SET_SENSITIVITY, sensitivity: e}
        }, o = function (e) {
            return {type: n.c.SET_ADS_SENSITIVITY_MULTIPLIER, sensitivity: e}
        }, i = function (e) {
            return {type: n.c.SET_SCOPED_SENSITIVITY_MULTIPLIER, sensitivity: e}
        }, s = function (e) {
            return {type: n.c.SET_RENDER_SCALE, renderScale: e}
        }, u = function (e) {
            return {type: n.c.SET_SOUND_VOLUME, soundVolume: e}
        }, c = function (e) {
            return {type: n.c.EDIT_PLAYER_NAME, name: e}
        }, _ = function (e) {
            return {type: n.c.SET_INVERT_Y_AXIS, flag: e}
        }, l = function (e) {
            return {type: n.c.SET_INVERT_MOUSE_WHEEL, flag: e}
        }, S = function (e, t, a) {
            return {type: n.c.SET_GAME_KEY, keyType: e, keyCode: t, keyName: a}
        }, O = function () {
            return {type: n.c.RESTORE_DEFAULT_GAME_KEYS}
        }, I = function (e) {
            return {type: n.c.SET_CROSSHAIR_WIDTH, value: e}
        }, p = function (e) {
            return {type: n.c.SET_CROSSHAIR_LENGTH, value: e}
        }, E = function (e) {
            return {type: n.c.SET_CROSSHAIR_COLOR, value: e}
        }, R = function (e) {
            return {type: n.c.SET_CROSSHAIR_HIT_COLOR, value: e}
        }, T = function (e) {
            return {type: n.c.SET_CROSSHAIR_STYLE, value: e}
        }, M = function (e) {
            return {type: n.c.SET_CHAT_VISIBLE, flag: e}
        }, h = function (e, t) {
            return {type: n.c.SET_PREFERRED_LOADOUT, loadoutType: e, weaponType: t}
        }, m = function (e) {
            return {type: n.c.SET_TERRAIN_TEXTURE_URL, url: e}
        }, A = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_IMAGE_URL, url: e}
        }, d = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_IMAGE_OPACITY, value: e}
        }, N = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_IMAGE_SCALE_X, value: e}
        }, f = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_IMAGE_SCALE_Y, value: e}
        }, C = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_BACKGROUND_COLOR, value: e}
        }, L = function (e) {
            return {type: n.c.SET_SNIPER_SCOPE_BACKGROUND_OPACITY, value: e}
        }, y = function (e) {
            return {type: n.c.SET_DISABLE_REWARDED_ADS_POPUP, flag: e}
        }
    }, 119: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return i
        }));
        var n, r = a(20);
        !function (e) {
            e[e.NONE = 0] = "NONE", e[e.COMBAT_ASSAULT_RIFLE = 1] = "COMBAT_ASSAULT_RIFLE", e[e.TACTICAL_ASSAULT_RIFLE = 2] = "TACTICAL_ASSAULT_RIFLE", e[e.SURGE_ASSAULT_RIFLE = 3] = "SURGE_ASSAULT_RIFLE", e[e.BURST_SHOTGUN = 4] = "BURST_SHOTGUN", e[e.LIGHT_SUBMACHINE_GUN = 5] = "LIGHT_SUBMACHINE_GUN", e[e.COMPACT_SUBMACHINE_GUN = 6] = "COMPACT_SUBMACHINE_GUN", e[e.LIGHT_SNIPER_RIFLE = 7] = "LIGHT_SNIPER_RIFLE", e[e.HEAVY_SNIPER_RIFLE = 8] = "HEAVY_SNIPER_RIFLE", e[e.STRIKE_PISTOL = 9] = "STRIKE_PISTOL", e[e.MAGNUM_PISTOL = 10] = "MAGNUM_PISTOL", e[e.SHOVEL = 11] = "SHOVEL", e[e.__LENGTH = 12] = "__LENGTH"
        }(n || (n = {}));
        var o = [r.a.EMPTY, r.a.COMBAT_ASSAULT_RIFLE_COMMON, r.a.TACTICAL_ASSAULT_RIFLE_COMMON, r.a.SURGE_ASSAULT_RIFLE_COMMON, r.a.BURST_SHOTGUN_COMMON, r.a.LIGHT_SUBMACHINE_GUN_COMMON, r.a.COMPACT_SUBMACHINE_GUN_COMMON, r.a.LIGHT_SNIPER_RIFLE_COMMON, r.a.HEAVY_SNIPER_RIFLE_COMMON, r.a.STRIKE_PISTOL_COMMON, r.a.MAGNUM_PISTOL_COMMON, r.a.SHOVEL_COMMON],
            i = function (e) {
                return o[e]
            };
        t.a = n
    }, 120: function (e, t, a) {
        "use strict";
        var n = a(106), r = a(96), o = a(78);
        t.a = {
            BLOCK_PLACE: new n.a(r.a.BLOCK_PLACE, Object(o.c)(.22)),
            ITEM_SWITCH: new n.a(r.a.ITEM_SWITCH, Object(o.c)(.6)),
            DROP_ITEM: new n.a(r.a.DROP_ITEM, 1),
            SPRINT_STOP_ITEM_USE_GRACE: new n.a(r.a.SPRINT_STOP_ITEM_USE_GRACE, Object(o.c)(.375)),
            TOGGLE_GLIDE: new n.a(r.a.TOGGLE_GLIDE, Object(o.c)(1.5)),
            MELEE_ATTACK: new n.a(r.a.MELEE_ATTACK, Object(o.c)(.45)),
            SPRAY: new n.a(r.a.SPRAY, Object(o.c)(1))
        }
    }, 127: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return u
        }));
        var n, r, o = a(20), i = a(85);
        !function (e) {
            e[e.WOOD = 0] = "WOOD", e[e.STONE_BRICK = 1] = "STONE_BRICK", e[e.REINFORCED_IRON = 2] = "REINFORCED_IRON", e[e.WORK_STATION = 3] = "WORK_STATION", e[e.WOODEN_CHEST = 4] = "WOODEN_CHEST", e[e.IRON_CHEST = 5] = "IRON_CHEST", e[e.SHOVEL_COMMON = 6] = "SHOVEL_COMMON", e[e.SHOVEL_UNCOMMON = 7] = "SHOVEL_UNCOMMON", e[e.SHOVEL_RARE = 8] = "SHOVEL_RARE", e[e.SHOVEL_EPIC = 9] = "SHOVEL_EPIC", e[e.SHOVEL_LEGENDARY = 10] = "SHOVEL_LEGENDARY", e[e.COMBAT_ASSAULT_RIFLE_UNCOMMON = 11] = "COMBAT_ASSAULT_RIFLE_UNCOMMON", e[e.COMBAT_ASSAULT_RIFLE_RARE = 12] = "COMBAT_ASSAULT_RIFLE_RARE", e[e.COMBAT_ASSAULT_RIFLE_EPIC = 13] = "COMBAT_ASSAULT_RIFLE_EPIC", e[e.COMBAT_ASSAULT_RIFLE_LEGENDARY = 14] = "COMBAT_ASSAULT_RIFLE_LEGENDARY", e[e.TACTICAL_ASSAULT_RIFLE_UNCOMMON = 15] = "TACTICAL_ASSAULT_RIFLE_UNCOMMON", e[e.TACTICAL_ASSAULT_RIFLE_RARE = 16] = "TACTICAL_ASSAULT_RIFLE_RARE", e[e.TACTICAL_ASSAULT_RIFLE_EPIC = 17] = "TACTICAL_ASSAULT_RIFLE_EPIC", e[e.TACTICAL_ASSAULT_RIFLE_LEGENDARY = 18] = "TACTICAL_ASSAULT_RIFLE_LEGENDARY", e[e.SURGE_ASSAULT_RIFLE_UNCOMMON = 19] = "SURGE_ASSAULT_RIFLE_UNCOMMON", e[e.SURGE_ASSAULT_RIFLE_RARE = 20] = "SURGE_ASSAULT_RIFLE_RARE", e[e.SURGE_ASSAULT_RIFLE_EPIC = 21] = "SURGE_ASSAULT_RIFLE_EPIC", e[e.SURGE_ASSAULT_RIFLE_LEGENDARY = 22] = "SURGE_ASSAULT_RIFLE_LEGENDARY", e[e.STRIKE_PISTOL_UNCOMMON = 23] = "STRIKE_PISTOL_UNCOMMON", e[e.STRIKE_PISTOL_RARE = 24] = "STRIKE_PISTOL_RARE", e[e.STRIKE_PISTOL_EPIC = 25] = "STRIKE_PISTOL_EPIC", e[e.STRIKE_PISTOL_LEGENDARY = 26] = "STRIKE_PISTOL_LEGENDARY", e[e.MAGNUM_PISTOL_UNCOMMON = 27] = "MAGNUM_PISTOL_UNCOMMON", e[e.MAGNUM_PISTOL_RARE = 28] = "MAGNUM_PISTOL_RARE", e[e.MAGNUM_PISTOL_EPIC = 29] = "MAGNUM_PISTOL_EPIC", e[e.MAGNUM_PISTOL_LEGENDARY = 30] = "MAGNUM_PISTOL_LEGENDARY", e[e.BURST_SHOTGUN_UNCOMMON = 31] = "BURST_SHOTGUN_UNCOMMON", e[e.BURST_SHOTGUN_RARE = 32] = "BURST_SHOTGUN_RARE", e[e.BURST_SHOTGUN_EPIC = 33] = "BURST_SHOTGUN_EPIC", e[e.BURST_SHOTGUN_LEGENDARY = 34] = "BURST_SHOTGUN_LEGENDARY", e[e.LIGHT_SUBMACHINE_GUN_UNCOMMON = 35] = "LIGHT_SUBMACHINE_GUN_UNCOMMON", e[e.LIGHT_SUBMACHINE_GUN_RARE = 36] = "LIGHT_SUBMACHINE_GUN_RARE", e[e.LIGHT_SUBMACHINE_GUN_EPIC = 37] = "LIGHT_SUBMACHINE_GUN_EPIC", e[e.LIGHT_SUBMACHINE_GUN_LEGENDARY = 38] = "LIGHT_SUBMACHINE_GUN_LEGENDARY", e[e.COMPACT_SUBMACHINE_GUN_UNCOMMON = 39] = "COMPACT_SUBMACHINE_GUN_UNCOMMON", e[e.COMPACT_SUBMACHINE_GUN_RARE = 40] = "COMPACT_SUBMACHINE_GUN_RARE", e[e.COMPACT_SUBMACHINE_GUN_EPIC = 41] = "COMPACT_SUBMACHINE_GUN_EPIC", e[e.COMPACT_SUBMACHINE_GUN_LEGENDARY = 42] = "COMPACT_SUBMACHINE_GUN_LEGENDARY", e[e.LIGHT_SNIPER_RIFLE_UNCOMMON = 43] = "LIGHT_SNIPER_RIFLE_UNCOMMON", e[e.LIGHT_SNIPER_RIFLE_RARE = 44] = "LIGHT_SNIPER_RIFLE_RARE", e[e.LIGHT_SNIPER_RIFLE_EPIC = 45] = "LIGHT_SNIPER_RIFLE_EPIC", e[e.LIGHT_SNIPER_RIFLE_LEGENDARY = 46] = "LIGHT_SNIPER_RIFLE_LEGENDARY", e[e.HEAVY_SNIPER_RIFLE_UNCOMMON = 47] = "HEAVY_SNIPER_RIFLE_UNCOMMON", e[e.HEAVY_SNIPER_RIFLE_RARE = 48] = "HEAVY_SNIPER_RIFLE_RARE", e[e.HEAVY_SNIPER_RIFLE_EPIC = 49] = "HEAVY_SNIPER_RIFLE_EPIC", e[e.HEAVY_SNIPER_RIFLE_LEGENDARY = 50] = "HEAVY_SNIPER_RIFLE_LEGENDARY", e[e.AMMO_PISTOL = 51] = "AMMO_PISTOL", e[e.AMMO_ASSAULT_RIFLE = 52] = "AMMO_ASSAULT_RIFLE", e[e.AMMO_SUBMACHINE_GUN = 53] = "AMMO_SUBMACHINE_GUN", e[e.AMMO_SHOTGUN = 54] = "AMMO_SHOTGUN", e[e.AMMO_SNIPER_RIFLE = 55] = "AMMO_SNIPER_RIFLE", e[e.MEDICINE_PILLS = 56] = "MEDICINE_PILLS", e[e.FIRST_AID_KIT = 57] = "FIRST_AID_KIT", e[e.MINI_SHIELD_POTION = 58] = "MINI_SHIELD_POTION", e[e.ADVANCED_SHIELD_POTION = 59] = "ADVANCED_SHIELD_POTION", e[e.ULTIMATE_SHIELD_POTION = 60] = "ULTIMATE_SHIELD_POTION", e[e.__LENGTH = 61] = "__LENGTH"
        }(r || (r = {}));
        var s = ((n = {})[r.WOOD] = {
            result: {type: o.a.BLOCK + i.a.WOOD, count: 9},
            ingredients: [{type: o.a.BLOCK + i.a.LOG_UP, count: 1}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.STONE_BRICK] = {
            result: {type: o.a.BLOCK + i.a.STONE_BRICK, count: 9},
            ingredients: [{type: o.a.BLOCK + i.a.ROCK, count: 1}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.REINFORCED_IRON] = {
            result: {type: o.a.BLOCK + i.a.REINFORCED_IRON, count: 9},
            ingredients: [{type: o.a.IRON, count: 1}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.WORK_STATION] = {
            result: {type: o.a.BLOCK + i.a.WORK_STATION, count: 1},
            ingredients: [{type: o.a.BLOCK + i.a.WOOD, count: 30}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.WOODEN_CHEST] = {
            result: {type: o.a.BLOCK + i.a.WOODEN_CHEST, count: 1},
            ingredients: [{type: o.a.BLOCK + i.a.WOOD, count: 50}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.IRON_CHEST] = {
            result: {type: o.a.BLOCK + i.a.IRON_CHEST, count: 1},
            ingredients: [{type: o.a.IRON, count: 20}, {type: o.a.EMERALD, count: 5}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.SHOVEL_COMMON] = {
            result: {type: o.a.SHOVEL_COMMON, count: 1},
            ingredients: [{type: o.a.IRON, count: 1}, {type: o.a.BLOCK + i.a.WOOD, count: 4}],
            needsWorkStation: !1,
            inheritSkin: !1
        }, n[r.SHOVEL_UNCOMMON] = {
            result: {type: o.a.SHOVEL_UNCOMMON, count: 1},
            ingredients: [{type: o.a.SHOVEL_COMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.SHOVEL_RARE] = {
            result: {type: o.a.SHOVEL_RARE, count: 1},
            ingredients: [{type: o.a.SHOVEL_UNCOMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.SHOVEL_EPIC] = {
            result: {type: o.a.SHOVEL_EPIC, count: 1},
            ingredients: [{type: o.a.SHOVEL_RARE, count: 1}, {type: o.a.IRON, count: 1}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.SHOVEL_LEGENDARY] = {
            result: {type: o.a.SHOVEL_LEGENDARY, count: 1},
            ingredients: [{type: o.a.SHOVEL_EPIC, count: 1}, {type: o.a.IRON, count: 1}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.COMBAT_ASSAULT_RIFLE_UNCOMMON] = {
            result: {type: o.a.COMBAT_ASSAULT_RIFLE_UNCOMMON, count: 1},
            ingredients: [{type: o.a.COMBAT_ASSAULT_RIFLE_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMBAT_ASSAULT_RIFLE_RARE] = {
            result: {type: o.a.COMBAT_ASSAULT_RIFLE_RARE, count: 1},
            ingredients: [{type: o.a.COMBAT_ASSAULT_RIFLE_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMBAT_ASSAULT_RIFLE_EPIC] = {
            result: {type: o.a.COMBAT_ASSAULT_RIFLE_EPIC, count: 1},
            ingredients: [{type: o.a.COMBAT_ASSAULT_RIFLE_RARE, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMBAT_ASSAULT_RIFLE_LEGENDARY] = {
            result: {type: o.a.COMBAT_ASSAULT_RIFLE_LEGENDARY, count: 1},
            ingredients: [{type: o.a.COMBAT_ASSAULT_RIFLE_EPIC, count: 1}, {
                type: o.a.IRON,
                count: 3
            }, {type: o.a.EMERALD, count: 3}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.TACTICAL_ASSAULT_RIFLE_UNCOMMON] = {
            result: {type: o.a.TACTICAL_ASSAULT_RIFLE_UNCOMMON, count: 1},
            ingredients: [{type: o.a.TACTICAL_ASSAULT_RIFLE_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.TACTICAL_ASSAULT_RIFLE_RARE] = {
            result: {type: o.a.TACTICAL_ASSAULT_RIFLE_RARE, count: 1},
            ingredients: [{type: o.a.TACTICAL_ASSAULT_RIFLE_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.TACTICAL_ASSAULT_RIFLE_EPIC] = {
            result: {type: o.a.TACTICAL_ASSAULT_RIFLE_EPIC, count: 1},
            ingredients: [{type: o.a.TACTICAL_ASSAULT_RIFLE_RARE, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.TACTICAL_ASSAULT_RIFLE_LEGENDARY] = {
            result: {type: o.a.TACTICAL_ASSAULT_RIFLE_LEGENDARY, count: 1},
            ingredients: [{type: o.a.TACTICAL_ASSAULT_RIFLE_EPIC, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.SURGE_ASSAULT_RIFLE_UNCOMMON] = {
            result: {type: o.a.SURGE_ASSAULT_RIFLE_UNCOMMON, count: 1},
            ingredients: [{type: o.a.SURGE_ASSAULT_RIFLE_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.SURGE_ASSAULT_RIFLE_RARE] = {
            result: {type: o.a.SURGE_ASSAULT_RIFLE_RARE, count: 1},
            ingredients: [{type: o.a.SURGE_ASSAULT_RIFLE_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.SURGE_ASSAULT_RIFLE_EPIC] = {
            result: {type: o.a.SURGE_ASSAULT_RIFLE_EPIC, count: 1},
            ingredients: [{type: o.a.SURGE_ASSAULT_RIFLE_RARE, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.SURGE_ASSAULT_RIFLE_LEGENDARY] = {
            result: {type: o.a.SURGE_ASSAULT_RIFLE_LEGENDARY, count: 1},
            ingredients: [{type: o.a.SURGE_ASSAULT_RIFLE_EPIC, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.STRIKE_PISTOL_UNCOMMON] = {
            result: {type: o.a.STRIKE_PISTOL_UNCOMMON, count: 1},
            ingredients: [{type: o.a.STRIKE_PISTOL_COMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.STRIKE_PISTOL_RARE] = {
            result: {type: o.a.STRIKE_PISTOL_RARE, count: 1},
            ingredients: [{type: o.a.STRIKE_PISTOL_UNCOMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.STRIKE_PISTOL_EPIC] = {
            result: {type: o.a.STRIKE_PISTOL_EPIC, count: 1},
            ingredients: [{type: o.a.STRIKE_PISTOL_RARE, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.STRIKE_PISTOL_LEGENDARY] = {
            result: {type: o.a.STRIKE_PISTOL_LEGENDARY, count: 1},
            ingredients: [{type: o.a.STRIKE_PISTOL_EPIC, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.MAGNUM_PISTOL_UNCOMMON] = {
            result: {type: o.a.MAGNUM_PISTOL_UNCOMMON, count: 1},
            ingredients: [{type: o.a.MAGNUM_PISTOL_COMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.MAGNUM_PISTOL_RARE] = {
            result: {type: o.a.MAGNUM_PISTOL_RARE, count: 1},
            ingredients: [{type: o.a.MAGNUM_PISTOL_UNCOMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.MAGNUM_PISTOL_EPIC] = {
            result: {type: o.a.MAGNUM_PISTOL_EPIC, count: 1},
            ingredients: [{type: o.a.MAGNUM_PISTOL_RARE, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.MAGNUM_PISTOL_LEGENDARY] = {
            result: {type: o.a.MAGNUM_PISTOL_LEGENDARY, count: 1},
            ingredients: [{type: o.a.MAGNUM_PISTOL_EPIC, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.BURST_SHOTGUN_UNCOMMON] = {
            result: {type: o.a.BURST_SHOTGUN_UNCOMMON, count: 1},
            ingredients: [{type: o.a.BURST_SHOTGUN_COMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.BURST_SHOTGUN_RARE] = {
            result: {type: o.a.BURST_SHOTGUN_RARE, count: 1},
            ingredients: [{type: o.a.BURST_SHOTGUN_UNCOMMON, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.BURST_SHOTGUN_EPIC] = {
            result: {type: o.a.BURST_SHOTGUN_EPIC, count: 1},
            ingredients: [{type: o.a.BURST_SHOTGUN_RARE, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.BURST_SHOTGUN_LEGENDARY] = {
            result: {type: o.a.BURST_SHOTGUN_LEGENDARY, count: 1},
            ingredients: [{type: o.a.BURST_SHOTGUN_EPIC, count: 1}, {type: o.a.IRON, count: 1}, {
                type: o.a.EMERALD,
                count: 1
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SUBMACHINE_GUN_UNCOMMON] = {
            result: {type: o.a.LIGHT_SUBMACHINE_GUN_UNCOMMON, count: 1},
            ingredients: [{type: o.a.LIGHT_SUBMACHINE_GUN_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SUBMACHINE_GUN_RARE] = {
            result: {type: o.a.LIGHT_SUBMACHINE_GUN_RARE, count: 1},
            ingredients: [{type: o.a.LIGHT_SUBMACHINE_GUN_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SUBMACHINE_GUN_EPIC] = {
            result: {type: o.a.LIGHT_SUBMACHINE_GUN_EPIC, count: 1},
            ingredients: [{type: o.a.LIGHT_SUBMACHINE_GUN_RARE, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SUBMACHINE_GUN_LEGENDARY] = {
            result: {type: o.a.LIGHT_SUBMACHINE_GUN_LEGENDARY, count: 1},
            ingredients: [{type: o.a.LIGHT_SUBMACHINE_GUN_EPIC, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMPACT_SUBMACHINE_GUN_UNCOMMON] = {
            result: {type: o.a.COMPACT_SUBMACHINE_GUN_UNCOMMON, count: 1},
            ingredients: [{type: o.a.COMPACT_SUBMACHINE_GUN_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 1
            }, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMPACT_SUBMACHINE_GUN_RARE] = {
            result: {type: o.a.COMPACT_SUBMACHINE_GUN_RARE, count: 1},
            ingredients: [{type: o.a.COMPACT_SUBMACHINE_GUN_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMPACT_SUBMACHINE_GUN_EPIC] = {
            result: {type: o.a.COMPACT_SUBMACHINE_GUN_EPIC, count: 1},
            ingredients: [{type: o.a.COMPACT_SUBMACHINE_GUN_RARE, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.COMPACT_SUBMACHINE_GUN_LEGENDARY] = {
            result: {type: o.a.COMPACT_SUBMACHINE_GUN_LEGENDARY, count: 1},
            ingredients: [{type: o.a.COMPACT_SUBMACHINE_GUN_EPIC, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SNIPER_RIFLE_UNCOMMON] = {
            result: {type: o.a.LIGHT_SNIPER_RIFLE_UNCOMMON, count: 1},
            ingredients: [{type: o.a.LIGHT_SNIPER_RIFLE_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SNIPER_RIFLE_RARE] = {
            result: {type: o.a.LIGHT_SNIPER_RIFLE_RARE, count: 1},
            ingredients: [{type: o.a.LIGHT_SNIPER_RIFLE_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SNIPER_RIFLE_EPIC] = {
            result: {type: o.a.LIGHT_SNIPER_RIFLE_EPIC, count: 1},
            ingredients: [{type: o.a.LIGHT_SNIPER_RIFLE_RARE, count: 1}, {type: o.a.IRON, count: 3}, {
                type: o.a.EMERALD,
                count: 3
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.LIGHT_SNIPER_RIFLE_LEGENDARY] = {
            result: {type: o.a.LIGHT_SNIPER_RIFLE_LEGENDARY, count: 1},
            ingredients: [{type: o.a.LIGHT_SNIPER_RIFLE_EPIC, count: 1}, {type: o.a.IRON, count: 3}, {
                type: o.a.EMERALD,
                count: 3
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.HEAVY_SNIPER_RIFLE_UNCOMMON] = {
            result: {type: o.a.HEAVY_SNIPER_RIFLE_UNCOMMON, count: 1},
            ingredients: [{type: o.a.HEAVY_SNIPER_RIFLE_COMMON, count: 1}, {
                type: o.a.IRON,
                count: 2
            }, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.HEAVY_SNIPER_RIFLE_RARE] = {
            result: {type: o.a.HEAVY_SNIPER_RIFLE_RARE, count: 1},
            ingredients: [{type: o.a.HEAVY_SNIPER_RIFLE_UNCOMMON, count: 1}, {
                type: o.a.IRON,
                count: 3
            }, {type: o.a.EMERALD, count: 3}],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.HEAVY_SNIPER_RIFLE_EPIC] = {
            result: {type: o.a.HEAVY_SNIPER_RIFLE_EPIC, count: 1},
            ingredients: [{type: o.a.HEAVY_SNIPER_RIFLE_RARE, count: 1}, {type: o.a.IRON, count: 4}, {
                type: o.a.EMERALD,
                count: 4
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.HEAVY_SNIPER_RIFLE_LEGENDARY] = {
            result: {type: o.a.HEAVY_SNIPER_RIFLE_LEGENDARY, count: 1},
            ingredients: [{type: o.a.HEAVY_SNIPER_RIFLE_EPIC, count: 1}, {type: o.a.IRON, count: 5}, {
                type: o.a.EMERALD,
                count: 5
            }],
            needsWorkStation: !0,
            inheritSkin: !0
        }, n[r.AMMO_PISTOL] = {
            result: {type: o.a.AMMO_PISTOL, count: 12},
            ingredients: [{type: o.a.SULFUR, count: 1}, {type: o.a.IRON, count: 1}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.AMMO_ASSAULT_RIFLE] = {
            result: {type: o.a.AMMO_ASSAULT_RIFLE, count: 10},
            ingredients: [{type: o.a.SULFUR, count: 1}, {type: o.a.IRON, count: 3}, {type: o.a.EMERALD, count: 3}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.AMMO_SUBMACHINE_GUN] = {
            result: {type: o.a.AMMO_SUBMACHINE_GUN, count: 15},
            ingredients: [{type: o.a.SULFUR, count: 1}, {type: o.a.IRON, count: 2}, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.AMMO_SHOTGUN] = {
            result: {type: o.a.AMMO_SHOTGUN, count: 6},
            ingredients: [{type: o.a.SULFUR, count: 1}, {type: o.a.IRON, count: 2}, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.AMMO_SNIPER_RIFLE] = {
            result: {type: o.a.AMMO_SNIPER_RIFLE, count: 3},
            ingredients: [{type: o.a.SULFUR, count: 1}, {type: o.a.IRON, count: 4}, {type: o.a.EMERALD, count: 4}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.MEDICINE_PILLS] = {
            result: {type: o.a.MEDICINE_PILLS, count: 2},
            ingredients: [{type: o.a.RED_BERRY, count: 3}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.FIRST_AID_KIT] = {
            result: {type: o.a.FIRST_AID_KIT, count: 1},
            ingredients: [{type: o.a.RED_BERRY, count: 6}, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.MINI_SHIELD_POTION] = {
            result: {type: o.a.MINI_SHIELD_POTION, count: 2},
            ingredients: [{type: o.a.ORANGE_BERRY, count: 3}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.ADVANCED_SHIELD_POTION] = {
            result: {type: o.a.ADVANCED_SHIELD_POTION, count: 1},
            ingredients: [{type: o.a.ORANGE_BERRY, count: 4}, {type: o.a.EMERALD, count: 1}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n[r.ULTIMATE_SHIELD_POTION] = {
            result: {type: o.a.ULTIMATE_SHIELD_POTION, count: 1},
            ingredients: [{type: o.a.ORANGE_BERRY, count: 6}, {type: o.a.EMERALD, count: 2}],
            needsWorkStation: !0,
            inheritSkin: !1
        }, n), u = function (e) {
            return s[e]
        };
        t.a = r
    }, 137: function (e, t, a) {
        "use strict";
        a.d(t, "t", (function () {
            return r
        })), a.d(t, "g", (function () {
            return o
        })), a.d(t, "D", (function () {
            return i
        })), a.d(t, "O", (function () {
            return s
        })), a.d(t, "B", (function () {
            return u
        })), a.d(t, "a", (function () {
            return c
        })), a.d(t, "v", (function () {
            return _
        })), a.d(t, "b", (function () {
            return l
        })), a.d(t, "h", (function () {
            return S
        })), a.d(t, "y", (function () {
            return O
        })), a.d(t, "x", (function () {
            return I
        })), a.d(t, "P", (function () {
            return p
        })), a.d(t, "u", (function () {
            return E
        })), a.d(t, "A", (function () {
            return R
        })), a.d(t, "c", (function () {
            return T
        })), a.d(t, "J", (function () {
            return M
        })), a.d(t, "L", (function () {
            return h
        })), a.d(t, "i", (function () {
            return m
        })), a.d(t, "K", (function () {
            return A
        })), a.d(t, "N", (function () {
            return d
        })), a.d(t, "s", (function () {
            return N
        })), a.d(t, "C", (function () {
            return f
        })), a.d(t, "z", (function () {
            return C
        })), a.d(t, "H", (function () {
            return L
        })), a.d(t, "I", (function () {
            return y
        })), a.d(t, "E", (function () {
            return U
        })), a.d(t, "d", (function () {
            return g
        })), a.d(t, "f", (function () {
            return P
        })), a.d(t, "e", (function () {
            return v
        })), a.d(t, "r", (function () {
            return F
        })), a.d(t, "G", (function () {
            return G
        })), a.d(t, "F", (function () {
            return H
        })), a.d(t, "m", (function () {
            return b
        })), a.d(t, "l", (function () {
            return x
        })), a.d(t, "n", (function () {
            return D
        })), a.d(t, "p", (function () {
            return k
        })), a.d(t, "o", (function () {
            return B
        })), a.d(t, "j", (function () {
            return Y
        })), a.d(t, "k", (function () {
            return w
        })), a.d(t, "w", (function () {
            return K
        })), a.d(t, "M", (function () {
            return V
        })), a.d(t, "q", (function () {
            return W
        }));
        var n = a(3), r = function (e, t, a, r) {
            return {type: n.b.SET_HEALTH_AND_SHIELD, maxHealth: e, health: t, maxShield: a, shield: r}
        }, o = function (e) {
            return {type: n.b.SET_CLIP_AMMO_COUNT, count: e}
        }, i = function (e) {
            return {type: n.b.SET_RESERVE_AMMO_COUNT, count: e}
        }, s = function (e) {
            return {type: n.b.TOGGLE_AMMO_COUNT, toggleStatus: e}
        }, u = function (e, t, a, r, o, i, s) {
            return {
                type: n.b.SET_PLAYER_STATS,
                playerId: e,
                team: t,
                name: a,
                kills: r,
                deaths: o,
                assists: i,
                score: s
            }
        }, c = function (e) {
            return {type: n.b.REMOVE_PLAYER_STATS, playerId: e}
        }, _ = function (e, t, a, r, o, i, s, u) {
            return {
                type: n.b.SET_INVENTORY_ITEM,
                index: e,
                itemName: t,
                itemDescription: a,
                itemTier: r,
                cosmeticsTier: o,
                itemType: i,
                count: s,
                durability: u
            }
        }, l = function (e) {
            return {type: n.b.SELECT_INVENTORY_ITEM, index: e}
        }, S = function (e, t, a, r) {
            return {type: n.b.SET_CURSOR_ITEM, itemType: e, itemTier: t, count: a, durability: r}
        }, O = function (e, t, a, r) {
            return {type: n.b.SET_ITEM_USAGE_PROGRESS, itemType: e, itemTier: t, tip: a, progress: r}
        }, I = function (e, t, a, r, o, i) {
            return {
                type: n.b.SET_ITEM_PICKUP_HINT,
                itemType: e,
                itemTier: t,
                cosmeticsTier: a,
                itemName: r,
                itemTip: o,
                itemCount: i
            }
        }, p = function (e) {
            return {type: n.b.TOGGLE_HUD_CENTER_MESSAGE, toggleStatus: e}
        }, E = function (e) {
            return {type: n.b.SET_HUD_CENTER_MESSAGE, message: e}
        }, R = function (e) {
            return {type: n.b.SET_NUM_PLAYERS_ALIVE, count: e}
        }, T = function (e) {
            return {type: n.b.SET_CLIENT_NUM_KILLS, count: e}
        }, M = function (e) {
            return {type: n.b.SET_TIME_ALIVE, count: e}
        }, h = function (e) {
            return {type: n.b.SET_TOTAL_NUM_PLAYERS, count: e}
        }, m = function (e) {
            return {type: n.b.SET_ELIMINATED_BY, eliminatedBy: e}
        }, A = function (e) {
            return {type: n.b.SET_TIMER, count: e}
        }, d = function (e) {
            return {type: n.b.SET_XP_GAINED, count: e}
        }, N = function (e, t) {
            return {type: n.b.SET_GAME_OVER, flag: e, won: t}
        }, f = function (e) {
            return {type: n.b.SET_RECIPES_CRAFTABLE, data: e}
        }, C = function (e, t) {
            return {type: n.b.SET_LOADING_MAP_PROGRESS, stage: e, progress: t}
        }, L = function (e) {
            return {type: n.b.SET_TEAM1_SCORE, score: e}
        }, y = function (e) {
            return {type: n.b.SET_TEAM2_SCORE, score: e}
        }, U = function (e) {
            return {type: n.b.SET_RESPAWN_TIMER, value: e}
        }, g = function (e) {
            return {type: n.b.SET_CLIENT_PLAYER_ID, id: e}
        }, P = function (e) {
            return {type: n.b.SET_CLIENT_PLAYER_TEAM, teamType: e}
        }, v = function (e) {
            return {type: n.b.SET_CLIENT_PLAYER_NAME, name: e}
        }, F = function (e) {
            return {type: n.b.SET_GAME_MODE_NAME, gameModeName: e}
        }, G = function (e) {
            return {type: n.b.SET_SHOW_SCOPE, flag: e}
        }, H = function (e) {
            return {type: n.b.SET_SCOREBOARD_TEAM_INFO, teams: e}
        }, b = function (e) {
            return {type: n.b.SET_FFA_RANK_1_SCORE, rank1Score: e}
        }, x = function (e) {
            return {type: n.b.SET_FFA_RANK_1_NAME, rank1Name: e}
        }, D = function (e) {
            return {type: n.b.SET_FFA_RANK_2_EXISTS, rank2Exists: e}
        }, k = function (e) {
            return {type: n.b.SET_FFA_RANK_2_SCORE, rank2Score: e}
        }, B = function (e) {
            return {type: n.b.SET_FFA_RANK_2_NAME, rank2Name: e}
        }, w = function (e) {
            return {type: n.b.SET_FFA_MY_SCORE, myScore: e}
        }, Y = function (e) {
            return {type: n.b.SET_FFA_MY_RANK, myRank: e}
        }, K = function (e) {
            return {type: n.b.SET_INVENTORY_STATUS, inventoryStatus: e}
        }, V = function (e) {
            return {type: n.b.SET_VGEMS_GAINED, count: e}
        }, W = function (e) {
            return {type: n.b.SET_GAME_INITIALIZED, flag: e}
        }
    }, 138: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return s
        })), a.d(t, "c", (function () {
            return l
        })), a.d(t, "b", (function () {
            return S
        }));
        var n = a(26), r = a(85), o = a(94), i = function (e, t, a, r) {
            return t === n.a.CHUNK_SIZE && a === n.a.CHUNK_SIZE && r === n.a.CHUNK_SIZE ? e.topFrontLeft : -1 === t && a === n.a.CHUNK_SIZE && r === n.a.CHUNK_SIZE ? e.topFrontRight : t === n.a.CHUNK_SIZE && a === n.a.CHUNK_SIZE && -1 === r ? e.topBackLeft : -1 === t && a === n.a.CHUNK_SIZE && -1 === r ? e.topBackRight : t === n.a.CHUNK_SIZE && -1 === a && r === n.a.CHUNK_SIZE ? e.bottomFrontLeft : -1 === t && -1 === a && r === n.a.CHUNK_SIZE ? e.bottomFrontRight : t === n.a.CHUNK_SIZE && -1 === a && -1 === r ? e.bottomBackLeft : -1 === t && -1 === a && -1 === r ? e.bottomBackRight : t === n.a.CHUNK_SIZE && r === n.a.CHUNK_SIZE ? e.frontLeft[a] : -1 === t && r === n.a.CHUNK_SIZE ? e.frontRight[a] : t === n.a.CHUNK_SIZE && -1 === r ? e.backLeft[a] : -1 === t && -1 === r ? e.backRight[a] : a === n.a.CHUNK_SIZE && r === n.a.CHUNK_SIZE ? e.topFront[t] : a === n.a.CHUNK_SIZE && -1 === r ? e.topBack[t] : a === n.a.CHUNK_SIZE && t === n.a.CHUNK_SIZE ? e.topLeft[r] : a === n.a.CHUNK_SIZE && -1 === t ? e.topRight[r] : -1 === a && r === n.a.CHUNK_SIZE ? e.bottomFront[t] : -1 === a && -1 === r ? e.bottomBack[t] : -1 === a && t === n.a.CHUNK_SIZE ? e.bottomLeft[r] : -1 === a && -1 === t ? e.bottomRight[r] : -1 === t ? e.right[a][r] : t === n.a.CHUNK_SIZE ? e.left[a][r] : -1 === a ? e.bottom[t][r] : a === n.a.CHUNK_SIZE ? e.top[t][r] : -1 === r ? e.back[t][a] : r === n.a.CHUNK_SIZE ? e.front[t][a] : e.blocks[t * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + a * n.a.CHUNK_SIZE + r]
        }, s = function (e, t, a) {
            return 255 * [.3, .5, .7, 1][e && t ? 0 : 3 - (e + t + a)]
        }, u = function (e, t, a, n) {
            var s = i(e, t, a, n);
            return s !== r.a.AIR && o.a[s].opaque
        }, c = function (e, t, a, n) {
            return i(e, t, a, n) === r.a.AIR
        }, _ = function (e, t, a, n) {
            var r = i(e, t, a, n);
            return o.a[r].opaque
        }, l = function (e, t) {
            e.push(1 / 8 * t.x + 1e-4, 1 / 8 * (t.y + 1) - 1e-4), e.push(1 / 8 * (t.x + 1) - 1e-4, 1 / 8 * (t.y + 1) - 1e-4), e.push(1 / 8 * (t.x + 1) - 1e-4, 1 / 8 * t.y + 1e-4), e.push(1 / 8 * t.x + 1e-4, 1 / 8 * t.y + 1e-4)
        }, S = function (e) {
            for (var t = [], a = [], r = [], i = [], l = [], S = [], O = [], I = [], p = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), E = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), R = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), T = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), M = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), h = new Uint8Array(n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE * 4), m = 0; m < n.a.CHUNK_SIZE; m++) for (var A = 0; A < n.a.CHUNK_SIZE; A++) for (var d = 0; d < n.a.CHUNK_SIZE; d++) if (!c(e, m, A, d)) {
                var N = _(e, m, A, d);
                if (N && !_(e, m, A + 1, d) || !N && c(e, m, A + 1, d)) {
                    var f = s(u(e, m + 1, A + 1, d), u(e, m, A + 1, d + 1), u(e, m + 1, A + 1, d + 1)),
                        C = s(u(e, m, A + 1, d + 1), u(e, m - 1, A + 1, d), u(e, m - 1, A + 1, d + 1)),
                        L = s(u(e, m - 1, A + 1, d), u(e, m, A + 1, d - 1), u(e, m - 1, A + 1, d - 1)),
                        y = s(u(e, m, A + 1, d - 1), u(e, m + 1, A + 1, d), u(e, m + 1, A + 1, d - 1)),
                        U = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    p[U] = f, p[U + 1] = C, p[U + 2] = L, p[U + 3] = y
                }
                if (N && !_(e, m, A - 1, d) || !N && c(e, m, A - 1, d)) {
                    var g = s(u(e, m + 1, A - 1, d), u(e, m, A - 1, d - 1), u(e, m + 1, A - 1, d - 1)),
                        P = s(u(e, m, A - 1, d - 1), u(e, m - 1, A - 1, d), u(e, m - 1, A - 1, d - 1)),
                        v = s(u(e, m - 1, A - 1, d), u(e, m, A - 1, d + 1), u(e, m - 1, A - 1, d + 1)),
                        F = s(u(e, m, A - 1, d + 1), u(e, m + 1, A - 1, d), u(e, m + 1, A - 1, d + 1)),
                        G = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    E[G] = g, E[G + 1] = P, E[G + 2] = v, E[G + 3] = F
                }
                if (N && !_(e, m + 1, A, d) || !N && c(e, m + 1, A, d)) {
                    var H = s(u(e, m + 1, A, d + 1), u(e, m + 1, A + 1, d), u(e, m + 1, A + 1, d + 1)),
                        b = s(u(e, m + 1, A + 1, d), u(e, m + 1, A, d - 1), u(e, m + 1, A + 1, d - 1)),
                        x = s(u(e, m + 1, A, d - 1), u(e, m + 1, A - 1, d), u(e, m + 1, A - 1, d - 1)),
                        D = s(u(e, m + 1, A - 1, d), u(e, m + 1, A, d + 1), u(e, m + 1, A - 1, d + 1)),
                        k = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    R[k] = H, R[k + 1] = b, R[k + 2] = x, R[k + 3] = D
                }
                if (N && !_(e, m - 1, A, d) || !N && c(e, m - 1, A, d)) {
                    var B = s(u(e, m - 1, A, d - 1), u(e, m - 1, A + 1, d), u(e, m - 1, A + 1, d - 1)),
                        w = s(u(e, m - 1, A + 1, d), u(e, m - 1, A, d + 1), u(e, m - 1, A + 1, d + 1)),
                        Y = s(u(e, m - 1, A, d + 1), u(e, m - 1, A - 1, d), u(e, m - 1, A - 1, d + 1)),
                        K = s(u(e, m - 1, A - 1, d), u(e, m - 1, A, d - 1), u(e, m - 1, A - 1, d - 1)),
                        V = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    T[V] = B, T[V + 1] = w, T[V + 2] = Y, T[V + 3] = K
                }
                if (N && !_(e, m, A, d + 1) || !N && c(e, m, A, d + 1)) {
                    var W = s(u(e, m - 1, A, d + 1), u(e, m, A + 1, d + 1), u(e, m - 1, A + 1, d + 1)),
                        j = s(u(e, m, A + 1, d + 1), u(e, m + 1, A, d + 1), u(e, m + 1, A + 1, d + 1)),
                        Z = s(u(e, m + 1, A, d + 1), u(e, m, A - 1, d + 1), u(e, m + 1, A - 1, d + 1)),
                        z = s(u(e, m, A - 1, d + 1), u(e, m - 1, A, d + 1), u(e, m - 1, A - 1, d + 1)),
                        X = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    M[X] = W, M[X + 1] = j, M[X + 2] = Z, M[X + 3] = z
                }
                if (N && !_(e, m, A, d - 1) || !N && c(e, m, A, d - 1)) {
                    var q = s(u(e, m + 1, A, d - 1), u(e, m, A + 1, d - 1), u(e, m + 1, A + 1, d - 1)),
                        J = s(u(e, m, A + 1, d - 1), u(e, m - 1, A, d - 1), u(e, m - 1, A + 1, d - 1)),
                        Q = s(u(e, m - 1, A, d - 1), u(e, m, A - 1, d - 1), u(e, m - 1, A - 1, d - 1)),
                        $ = s(u(e, m, A - 1, d - 1), u(e, m + 1, A, d - 1), u(e, m + 1, A - 1, d - 1)),
                        ee = 4 * (m * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + A * n.a.CHUNK_SIZE + d);
                    h[ee] = q, h[ee + 1] = J, h[ee + 2] = Q, h[ee + 3] = $
                }
            }
            for (var te = 0; te < n.a.CHUNK_SIZE; te++) for (var ae = 0; ae < n.a.CHUNK_SIZE; ae++) for (var ne = 0; ne < n.a.CHUNK_SIZE; ne++) {
                var re = ae, oe = te, ie = ne, se = t, ue = a, ce = r, _e = i;
                _(e, ae, te, ne) || (se = l, ue = S, ce = O, _e = I);
                var le = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne),
                    Se = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne], Oe = p[le];
                if (0 !== Oe) {
                    for (var Ie = p[le + 1], pe = p[le + 2], Ee = p[le + 3], Re = 1, Te = 1, Me = ne + 1; Me < n.a.CHUNK_SIZE; Me++) {
                        var he = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Me),
                            me = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Me];
                        if (0 !== p[he] || Se !== me || Oe !== p[he] || Ie !== p[he + 1] || pe !== p[he + 2] || Ee !== p[he + 3]) break;
                        ++Re
                    }
                    for (var Ae = !0, de = ae + 1; de < n.a.CHUNK_SIZE && Ae; de++) {
                        Ae = !0;
                        for (var Ne = ne; Ne < ne + Re; Ne++) {
                            var fe = 4 * (de * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Ne),
                                Ce = e.blocks[de * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Ne];
                            if (0 !== p[fe] || Se !== Ce || Oe !== p[fe] || Ie !== p[fe + 1] || pe !== p[fe + 2] || Ee !== p[fe + 3]) {
                                Ae = !1;
                                break
                            }
                        }
                        Ae && ++Te
                    }
                    for (var Le = ae; Le < ae + Te; Le++) for (var ye = ne; ye < ne + Re; ye++) p[4 * (Le * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ye)] = 0;
                    se.push(re + 1 + (Te - 1), oe + 1, ie + 1 + (Re - 1)), se.push(re, oe + 1, ie + 1 + (Re - 1)), se.push(re, oe + 1, ie), se.push(re + 1 + (Te - 1), oe + 1, ie), ce.push(Oe, Ie, pe, Ee), Oe + pe < Ie + Ee ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var Ue = o.a[Se].textures.top;
                    _e.push(Ue.x, Ue.y, 0, Re), _e.push(Ue.x, Ue.y, Te, Re), _e.push(Ue.x, Ue.y, Te, 0), _e.push(Ue.x, Ue.y, 0, 0)
                }
                var ge = E[le];
                if (0 !== ge) {
                    for (var Pe = E[le + 1], ve = E[le + 2], Fe = E[le + 3], Ge = 1, He = 1, be = ne + 1; be < n.a.CHUNK_SIZE; be++) {
                        var xe = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + be),
                            De = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + be];
                        if (0 !== E[xe] || Se !== De || ge !== E[xe] || Pe !== E[xe + 1] || ve !== E[xe + 2] || Fe !== E[xe + 3]) break;
                        ++Ge
                    }
                    for (var ke = !0, Be = ae + 1; Be < n.a.CHUNK_SIZE && ke; Be++) {
                        ke = !0;
                        for (var we = ne; we < ne + Ge; we++) {
                            var Ye = 4 * (Be * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + we),
                                Ke = e.blocks[Be * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + we];
                            if (0 !== E[Ye] || Se !== Ke || ge !== E[Ye] || Pe !== E[Ye + 1] || ve !== E[Ye + 2] || Fe !== E[Ye + 3]) {
                                ke = !1;
                                break
                            }
                        }
                        ke && ++He
                    }
                    for (var Ve = ae; Ve < ae + He; Ve++) for (var We = ne; We < ne + Ge; We++) E[4 * (Ve * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + We)] = 0;
                    se.push(re + 1 + (He - 1), oe, ie), se.push(re, oe, ie), se.push(re, oe, ie + 1 + (Ge - 1)), se.push(re + 1 + (He - 1), oe, ie + 1 + (Ge - 1)), ce.push(ge, Pe, ve, Fe), ge + ve < Pe + Fe ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var je = o.a[Se].textures.bottom;
                    _e.push(je.x, je.y, 0, Ge), _e.push(je.x, je.y, He, Ge), _e.push(je.x, je.y, He, 0), _e.push(je.x, je.y, 0, 0)
                }
                var Ze = R[le];
                if (0 !== Ze) {
                    for (var ze = R[le + 1], Xe = R[le + 2], qe = R[le + 3], Je = 1, Qe = 1, $e = ne + 1; $e < n.a.CHUNK_SIZE; $e++) {
                        var et = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + $e),
                            tt = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + $e];
                        if (0 !== R[et] || Se !== tt || Ze !== R[et] || ze !== R[et + 1] || Xe !== R[et + 2] || qe !== R[et + 3]) break;
                        ++Je
                    }
                    for (var at = !0, nt = te + 1; nt < n.a.CHUNK_SIZE && at; nt++) {
                        at = !0;
                        for (var rt = ne; rt < ne + Je; rt++) {
                            var ot = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + nt * n.a.CHUNK_SIZE + rt),
                                it = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + nt * n.a.CHUNK_SIZE + rt];
                            if (0 !== R[ot] || Se !== it || Ze !== R[ot] || ze !== R[ot + 1] || Xe !== R[ot + 2] || qe !== R[ot + 3]) {
                                at = !1;
                                break
                            }
                        }
                        at && ++Qe
                    }
                    for (var st = te; st < te + Qe; st++) for (var ut = ne; ut < ne + Je; ut++) R[4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + st * n.a.CHUNK_SIZE + ut)] = 0;
                    se.push(re + 1, oe + 1 + (Qe - 1), ie + 1 + (Je - 1)), se.push(re + 1, oe + 1 + (Qe - 1), ie), se.push(re + 1, oe, ie), se.push(re + 1, oe, ie + 1 + (Je - 1)), ce.push(Ze, ze, Xe, qe), Ze + Xe < ze + qe ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var ct = o.a[Se].textures.left;
                    _e.push(ct.x, ct.y, 0, Qe), _e.push(ct.x, ct.y, Je, Qe), _e.push(ct.x, ct.y, Je, 0), _e.push(ct.x, ct.y, 0, 0)
                }
                var _t = T[le];
                if (0 !== _t) {
                    for (var lt = T[le + 1], St = T[le + 2], Ot = T[le + 3], It = 1, pt = 1, Et = ne + 1; Et < n.a.CHUNK_SIZE; Et++) {
                        var Rt = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Et),
                            Tt = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + Et];
                        if (0 !== T[Rt] || Se !== Tt || _t !== T[Rt] || lt !== T[Rt + 1] || St !== T[Rt + 2] || Ot !== T[Rt + 3]) break;
                        ++It
                    }
                    for (var Mt = !0, ht = te + 1; ht < n.a.CHUNK_SIZE && Mt; ht++) {
                        Mt = !0;
                        for (var mt = ne; mt < ne + It; mt++) {
                            var At = 4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + ht * n.a.CHUNK_SIZE + mt),
                                dt = e.blocks[ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + ht * n.a.CHUNK_SIZE + mt];
                            if (0 !== T[At] || Se !== dt || _t !== T[At] || lt !== T[At + 1] || St !== T[At + 2] || Ot !== T[At + 3]) {
                                Mt = !1;
                                break
                            }
                        }
                        Mt && ++pt
                    }
                    for (var Nt = te; Nt < te + pt; Nt++) for (var ft = ne; ft < ne + It; ft++) T[4 * (ae * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + Nt * n.a.CHUNK_SIZE + ft)] = 0;
                    se.push(re, oe + 1 + (pt - 1), ie), se.push(re, oe + 1 + (pt - 1), ie + 1 + (It - 1)), se.push(re, oe, ie + 1 + (It - 1)), se.push(re, oe, ie), ce.push(_t, lt, St, Ot), _t + St < lt + Ot ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var Ct = o.a[Se].textures.right;
                    _e.push(Ct.x, Ct.y, 0, pt), _e.push(Ct.x, Ct.y, It, pt), _e.push(Ct.x, Ct.y, It, 0), _e.push(Ct.x, Ct.y, 0, 0)
                }
                var Lt = M[le];
                if (0 !== Lt) {
                    for (var yt = M[le + 1], Ut = M[le + 2], gt = M[le + 3], Pt = 1, vt = 1, Ft = ae + 1; Ft < n.a.CHUNK_SIZE; Ft++) {
                        var Gt = 4 * (Ft * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne),
                            Ht = e.blocks[Ft * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne];
                        if (0 !== M[Gt] || Se !== Ht || Lt !== M[Gt] || yt !== M[Gt + 1] || Ut !== M[Gt + 2] || gt !== M[Gt + 3]) break;
                        ++Pt
                    }
                    for (var bt = !0, xt = te + 1; xt < n.a.CHUNK_SIZE && bt; xt++) {
                        bt = !0;
                        for (var Dt = ae; Dt < ae + Pt; Dt++) {
                            var kt = 4 * (Dt * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + xt * n.a.CHUNK_SIZE + ne),
                                Bt = e.blocks[Dt * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + xt * n.a.CHUNK_SIZE + ne];
                            if (0 !== M[kt] || Se !== Bt || Lt !== M[kt] || yt !== M[kt + 1] || Ut !== M[kt + 2] || gt !== M[kt + 3]) {
                                bt = !1;
                                break
                            }
                        }
                        bt && ++vt
                    }
                    for (var wt = te; wt < te + vt; wt++) for (var Yt = ae; Yt < ae + Pt; Yt++) M[4 * (Yt * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + wt * n.a.CHUNK_SIZE + ne)] = 0;
                    se.push(re, oe + 1 + (vt - 1), ie + 1), se.push(re + 1 + (Pt - 1), oe + 1 + (vt - 1), ie + 1), se.push(re + 1 + (Pt - 1), oe, ie + 1), se.push(re, oe, ie + 1), ce.push(Lt, yt, Ut, gt), Lt + Ut < yt + gt ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var Kt = o.a[Se].textures.front;
                    _e.push(Kt.x, Kt.y, 0, vt), _e.push(Kt.x, Kt.y, Pt, vt), _e.push(Kt.x, Kt.y, Pt, 0), _e.push(Kt.x, Kt.y, 0, 0)
                }
                var Vt = h[le];
                if (0 !== Vt) {
                    for (var Wt = h[le + 1], jt = h[le + 2], Zt = h[le + 3], zt = 1, Xt = 1, qt = ae + 1; qt < n.a.CHUNK_SIZE; qt++) {
                        var Jt = 4 * (qt * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne),
                            Qt = e.blocks[qt * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + te * n.a.CHUNK_SIZE + ne];
                        if (0 !== h[Jt] || Se !== Qt || Vt !== h[Jt] || Wt !== h[Jt + 1] || jt !== h[Jt + 2] || Zt !== h[Jt + 3]) break;
                        ++zt
                    }
                    for (var $t = !0, ea = te + 1; ea < n.a.CHUNK_SIZE && $t; ea++) {
                        $t = !0;
                        for (var ta = ae; ta < ae + zt; ta++) {
                            var aa = 4 * (ta * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + ea * n.a.CHUNK_SIZE + ne),
                                na = e.blocks[ta * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + ea * n.a.CHUNK_SIZE + ne];
                            if (0 !== h[aa] || Se !== na || Vt !== h[aa] || Wt !== h[aa + 1] || jt !== h[aa + 2] || Zt !== h[aa + 3]) {
                                $t = !1;
                                break
                            }
                        }
                        $t && ++Xt
                    }
                    for (var ra = te; ra < te + Xt; ra++) for (var oa = ae; oa < ae + zt; oa++) h[4 * (oa * n.a.CHUNK_SIZE * n.a.CHUNK_SIZE + ra * n.a.CHUNK_SIZE + ne)] = 0;
                    se.push(re + 1 + (zt - 1), oe + 1 + (Xt - 1), ie), se.push(re, oe + 1 + (Xt - 1), ie), se.push(re, oe, ie), se.push(re + 1 + (zt - 1), oe, ie), ce.push(Vt, Wt, jt, Zt), Vt + jt < Wt + Zt ? (ue.push(se.length / 3 - 3, se.length / 3 - 4, se.length / 3 - 1), ue.push(se.length / 3 - 1, se.length / 3 - 2, se.length / 3 - 3)) : (ue.push(se.length / 3 - 4, se.length / 3 - 1, se.length / 3 - 2), ue.push(se.length / 3 - 2, se.length / 3 - 3, se.length / 3 - 4));
                    var ia = o.a[Se].textures.back;
                    _e.push(ia.x, ia.y, 0, Xt), _e.push(ia.x, ia.y, zt, Xt), _e.push(ia.x, ia.y, zt, 0), _e.push(ia.x, ia.y, 0, 0)
                }
            }
            return {
                version: e.version,
                opaqueVertices: new Uint8Array(t),
                opaqueIndices: new Uint16Array(a),
                opaqueAos: new Uint8Array(r),
                opaqueUvs: new Uint8Array(i),
                alphaVertices: new Uint8Array(l),
                alphaIndices: new Uint16Array(S),
                alphaAos: new Uint8Array(O),
                alphaUvs: new Uint8Array(I),
                chunkPos: e.chunkPos
            }
        }
    }, 139: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return p
        }));
        var n = a(79), r = a.n(n), o = a(76), i = a.n(o), s = a(88), u = a(78), c = a(106), _ = a(96), l = a(25),
            S = a(104);

        function O(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return I(e, t)
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

        function I(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var p = function (e) {
            function t(t) {
                var a;
                return (a = e.call(this, t) || this)._meleeDamage = void 0, a._meleeRate = void 0, a._blockBreakPower = void 0, a._currDurability = void 0, a._maxDurability = void 0, a._meleeDamage = 10, a._meleeRate = Object(u.c)(.75), a._blockBreakPower = Object(u.d)(1), a._currDurability = 0, a._maxDurability = 1, a.setMaxStackSize(1), a.setItemTier(l.a.UNCOMMON), a
            }

            i()(t, e);
            var a = t.prototype;
            return a.clone = function () {
                var t = e.prototype.clone.call(this);
                return t._meleeDamage = this._meleeDamage, t._meleeRate = this._meleeRate, t._blockBreakPower = this._blockBreakPower, t._currDurability = this._currDurability, t._maxDurability = this._maxDurability, t
            }, a.onUpdateMetadata = function (t) {
                e.prototype.onUpdateMetadata.call(this, t);
                for (var a, n = O(t); !(a = n()).done;) {
                    var r = a.value;
                    switch (r.metadataType) {
                        case S.a.ITEM_DURABILITY:
                            this._currDurability = r.value
                    }
                }
            }, a.destroyBlock = function (e, t, a) {
                var n = t.getPlayerSelectedBlockPosition();
                if (void 0 !== n) {
                    var r = t.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(n.x, n.y, n.z);
                    this.canBreak(r) && (a && t.sceneRenderer.terrainRenderer.cracksRenderer.addBlockBreakProgress(n.x, n.y, n.z, this.getBlockBreakPower(r), !0), this._currDurability > 0 && --this._currDurability <= 0 && this.use(1)), a && this.playBlockBreakAnimation(t)
                } else e.cooldownManager.requestCooldown(new c.a(_.a.MELEE_ATTACK, this._meleeRate)) && a && this.playMeleeAnimation(t)
            }, a.onRightClick = function (e, t, a) {
                this.destroyBlock(e, t, a)
            }, a.onLeftClick = function (e, t, a) {
                this.destroyBlock(e, t, a)
            }, a.playMeleeAnimation = function (e) {
            }, a.playBlockBreakAnimation = function (e) {
            }, a.canBreak = function (e) {
                return !0
            }, a.getBlockBreakPower = function (e) {
                return this._blockBreakPower
            }, a.setMeleeDamage = function (e) {
                this._meleeDamage = e
            }, a.setMeleeRate = function (e) {
                this._meleeRate = e
            }, a.setBlockBreakPower = function (e) {
                this._blockBreakPower = e
            }, a.setCurrentDurability = function (e) {
                this._currDurability = e
            }, a.setMaxDurability = function (e) {
                this._maxDurability = e
            }, a.setDurability = function (e) {
                this._currDurability = e, this._maxDurability = e
            }, r()(t, [{
                key: "meleeDamage", get: function () {
                    return this._meleeDamage
                }
            }, {
                key: "meleeRate", get: function () {
                    return this._meleeRate
                }
            }, {
                key: "currentDurability", get: function () {
                    return this._currDurability
                }
            }, {
                key: "maxDurability", get: function () {
                    return this._maxDurability
                }
            }]), t
        }(s.a)
    }, 140: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return o
        }));
        var n = a(79), r = a.n(n), o = function () {
            function e(e, t) {
                this._item = e, this._count = t
            }

            return e.prototype.clone = function () {
                return new e(this._item.clone(), this._count)
            }, r()(e, [{
                key: "item", get: function () {
                    return this._item
                }, set: function (e) {
                    this._item = e
                }
            }, {
                key: "count", get: function () {
                    return this._count
                }, set: function (e) {
                    this._count = e
                }
            }]), e
        }()
    }, 153: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return h
        })), a.d(t, "b", (function () {
            return f
        }));
        var n = a(140), r = a(90), o = a(159), i = a(20), s = a(86), u = a(120), c = a(160), _ = a(84), l = a(127),
            S = a(48), O = function () {
                function e(e, t, a, r, i, s, u) {
                    // #WindowPlayerPos
                    if (void 0 === u && (u = !1), this._playerState = e, window.playerPos = e, this._controls = t, this._numHotSlots = a, this._numStorageSlots = r, this._numAmmoSlots = i, this._additionalSlots = s, this._selectedIdx = void 0, this._items = void 0, this._cursorItem = void 0, this._capacity = void 0, this.__itemCountCache = void 0, this._selectedIdx = 0, this._items = [], this._capacity = this._numHotSlots + this._numStorageSlots + this._numAmmoSlots + this._additionalSlots, !u) {
                        for (var c = 0; c < this._capacity; c++) this._items.push(new n.a(new o.a, 1));
                        this._cursorItem = new n.a(new o.a, 1)
                    }
                    this.__itemCountCache = {}
                }

                var t = e.prototype;
                return t.resize = function (e) {
                    if (this._additionalSlots = e, this._capacity = this._numHotSlots + this._numStorageSlots + this._numAmmoSlots + this._additionalSlots, this._capacity > this._items.length) for (var t = this._items.length, a = 0; a < this._capacity - t; a++) this._items.push(new n.a(new o.a, 1)); else this._items.length = this._capacity
                }, t.__buildItemCountCache = function () {
                    this.__itemCountCache = {};
                    for (var e = 0; e < this._capacity; e++) {
                        var t = this._items[e].item.id, a = this._items[e].count;
                        t in this.__itemCountCache ? this.__itemCountCache[t] += a : this.__itemCountCache[t] = a
                    }
                }, t.__checkHasItemsFromCache = function (e) {
                    for (var t = 0; t < e.length; t++) if (void 0 === this.__itemCountCache[e[t].type] || this.__itemCountCache[e[t].type] < e[t].count) return !1;
                    return !0
                }, t.clone = function (t) {
                    var a = new e(t, this._controls, this._numHotSlots, this._numStorageSlots, this._numAmmoSlots, this._additionalSlots, !0);
                    a._selectedIdx = this._selectedIdx, a._cursorItem = this._cursorItem.clone();
                    for (var n = 0; n < this._items.length; n++) a._items[n] = this._items[n].clone();
                    return a
                }, t.setItemAtIndex = function (e, t, a) {
                    if (e < 0 || e >= this._capacity) throw new Error("idx out of bounds (0-" + (this._capacity - 1) + ")");
                    var n = e === this._selectedIdx && t.item.id !== this._items[e].item.id;
                    n && this._items[e].item.onInactive(this._playerState, this._controls, a), this._items[e] = t, n && this._items[e].item.onActive(this._playerState, this._controls, a)
                }, t.getNextFilled = function (e) {
                    for (var t = Object(r.e)(e + 1, this._numHotSlots); t != e; t = Object(r.e)(t + 1, this._numHotSlots)) if (this.getItemAtIndex(t).item.type !== i.a.EMPTY) return t;
                    return e
                }, t.getPreviousFilled = function (e) {
                    for (var t = Object(r.e)(e - 1, this._numHotSlots); t != e; t = Object(r.e)(t - 1, this._numHotSlots)) if (this.getItemAtIndex(t).item.type !== i.a.EMPTY) return t;
                    return e
                }, t.selectNext = function (e) {
                    this.select(Object(r.e)(this._selectedIdx + 1, this._numHotSlots), e)
                }, t.selectPrev = function (e) {
                    this.select(Object(r.e)(this._selectedIdx - 1, this._numHotSlots), e)
                }, t.getSelected = function () {
                    return this.getItemAtIndex(this._selectedIdx)
                }, t.useSelected = function (e) {
                    var t = this.getSelected(), a = t.item.id, r = t.item.used;
                    if (!(r <= 0)) {
                        t.item.unuse();
                        var o = Math.min(t.count, r);
                        t.count -= o, r -= o, t.count <= 0 && this.setItemAtIndex(this.getSelectedIndex(), new n.a(Object(s.c)(i.a.EMPTY), 1), e), r > 0 && this.consumeItems([{
                            type: a,
                            count: r
                        }])
                    }
                }, t.select = function (e, t) {
                    if (e < 0 || e >= this._numHotSlots) throw new Error("idx out of bounds (0-" + (this._numHotSlots - 1) + ")");
                    var a = this._selectedIdx;
                    this._selectedIdx = e, a !== this._selectedIdx && (this._items[a].item.onInactive(this._playerState, this._controls, t), this._items[this._selectedIdx].item.onActive(this._playerState, this._controls, t), this._playerState.cooldownManager.setCooldown(u.a.ITEM_SWITCH))
                }, t.getFirstEmptyAmmoSlotIndex = function () {
                    for (var e = this._numHotSlots + this._numHotSlots; e < this._capacity; e++) if (this._items[e].item.type === i.a.EMPTY) return e;
                    return -1
                }, t.getFirstEmptySlotIndex = function () {
                    for (var e = 0; e < this._numHotSlots + this._numHotSlots; e++) if (this._items[e].item.type === i.a.EMPTY) return e;
                    return -1
                }, t.getSelectedIndex = function () {
                    return this._selectedIdx
                }, t.setSelectedIndex = function (e) {
                    this._selectedIdx = e
                }, t.getItemAtIndex = function (e) {
                    if (e < 0 || e >= this._capacity) throw new Error("idx out of bounds (0-" + (this._capacity - 1) + ")");
                    return this._items[e]
                }, t.isAmmoSlot = function (e) {
                    return e >= this._numHotSlots + this._numStorageSlots && e < this._numHotSlots + this._numStorageSlots + this._numAmmoSlots
                }, t.isStorageSlot = function (e) {
                    return e >= this._numHotSlots && e < this._numHotSlots + this._numStorageSlots
                }, t.isHotSlot = function (e) {
                    return e >= 0 && e < this._numHotSlots
                }, t.isOtherSlot = function (e) {
                    return e >= this._numHotSlots + this._numStorageSlots + this._numAmmoSlots
                }, t.hasOtherSlots = function () {
                    return this._capacity > this._numHotSlots + this._numStorageSlots + this._numAmmoSlots
                }, t.swapItems = function (e, t) {
                    var a = e.item, n = e.count;
                    e.item = t.item, e.count = t.count, t.item = a, t.count = n
                }, t.moveItems = function (e, t, a) {
                    if (e.item.id === i.a.EMPTY) return !1;
                    if (e.item.id !== t.item.id && t.item.id !== i.a.EMPTY) return !1;
                    if (e.count < a || 0 === a) return !1;
                    var n = a;
                    n = t.item.id !== i.a.EMPTY ? Math.min(n, t.item.maxStackSize - t.count) : Math.min(n, e.item.maxStackSize);
                    var r = e.item.id;
                    return e.count = e.count - n, 0 === e.count && (e.item = Object(s.c)(i.a.EMPTY), e.count = 1), t.item.id === i.a.EMPTY ? (t.item = Object(s.c)(r), t.count = n) : t.count = t.count + n, !0
                }, t.onRecipeCraft = function (e, t) {
                    if (!(e < 0 || e >= l.a.__LENGTH)) for (var a = t === c.a.SHIFT_CLICK ? 99999 : 1, r = Object(l.b)(e), o = 0; o < a; o++) if (this._cursorItem.item.id === i.a.EMPTY || this._cursorItem.item.id == r.result.type && this._cursorItem.count + r.result.count <= this._cursorItem.item.maxStackSize) {
                        var u = this.consumeItems(r.ingredients);
                        if (!u.consumed) break;
                        this._cursorItem.item.id === r.result.type ? this._cursorItem.count += r.result.count : (this._cursorItem = new n.a(Object(s.c)(r.result.type), r.result.count), r.inheritSkin && this._cursorItem.item.setSkin(u.skinType, u.skinSeed))
                    }
                }, t.onSlotClick = function (e, t, a) {
                    if (!(e < -1 || e >= this._capacity)) {
                        var r = this._items[e];
                        if (-1 == e) t === c.a.LEFT ? this._cursorItem.item.id !== i.a.EMPTY && (this._cursorItem = new n.a(Object(s.c)(i.a.EMPTY), 1)) : t === c.a.RIGHT && this._cursorItem.item.id !== i.a.EMPTY && (this._cursorItem.count > 1 ? this._cursorItem.count -= 1 : this._cursorItem = new n.a(Object(s.c)(i.a.EMPTY), 1)); else {
                            if (this._cursorItem.item.id !== i.a.EMPTY && (Object(s.d)(this._cursorItem.item.id) && !this.isAmmoSlot(e) || !Object(s.d)(this._cursorItem.item.id) && this.isAmmoSlot(e))) return;
                            if (this._cursorItem.item.id !== i.a.EMPTY && r.item.id !== i.a.EMPTY && this._cursorItem.item.maxStackSize === this._cursorItem.count && r.item.maxStackSize === r.count) e === this.getSelectedIndex() && (r.item.onInactive(this._playerState, this._controls, a), this._cursorItem.item.onActive(this._playerState, this._controls, a)), this.swapItems(this._cursorItem, r); else if (t === c.a.LEFT) this._cursorItem.item.id !== r.item.id || r.count >= r.item.maxStackSize ? (e === this.getSelectedIndex() && (r.item.onInactive(this._playerState, this._controls, a), this._cursorItem.item.onActive(this._playerState, this._controls, a)), this.swapItems(this._cursorItem, r)) : this.moveItems(this._cursorItem, r, this._cursorItem.count); else if (t === c.a.RIGHT) if (this._cursorItem.item.id === i.a.EMPTY && r.item.id !== i.a.EMPTY) {
                                var o = Math.ceil(r.count / 2);
                                this.moveItems(r, this._cursorItem, o) && this.getSelected().item.id === i.a.EMPTY && (this._cursorItem.item.onInactive(this._playerState, this._controls, a), this.getSelected().item.onActive(this._playerState, this._controls, a))
                            } else this._cursorItem.item.id !== i.a.EMPTY && (r.item.id === i.a.EMPTY || r.item.id === this._cursorItem.item.id && r.count < r.item.maxStackSize ? this.moveItems(this._cursorItem, r, 1) : (e === this.getSelectedIndex() && (r.item.onInactive(this._playerState, this._controls, a), this._cursorItem.item.onActive(this._playerState, this._controls, a)), this.swapItems(this._cursorItem, r))); else if (t === c.a.SHIFT_CLICK && r.item.id !== i.a.EMPTY) if (this.hasOtherSlots()) if (this.isOtherSlot(e)) if (Object(s.d)(r.item.id)) this.tryToAddItems(this._numHotSlots + this._numStorageSlots, this._numHotSlots + this._numStorageSlots + this._numAmmoSlots, r), 0 === r.count && (r.item = Object(s.c)(i.a.EMPTY), r.count = 1); else {
                                var u = this.getSelected().item.id,
                                    _ = this.tryToAddItems(0, this._numHotSlots + this._numStorageSlots, r);
                                0 === r.count && (r.item = Object(s.c)(i.a.EMPTY), r.count = 1), u === i.a.EMPTY && this.getSelected().item.id !== i.a.EMPTY && _ > 0 && this.getSelected().item.onActive(this._playerState, this._controls, a)
                            } else this.tryToAddItems(this._numHotSlots + this._numStorageSlots + this._numAmmoSlots, this._capacity, r), 0 === r.count && (e === this.getSelectedIndex() ? (r.item.onInactive(this._playerState, this._controls, a), r.item = Object(s.c)(i.a.EMPTY), r.count = 1, r.item.onActive(this._playerState, this._controls, a)) : (r.item = Object(s.c)(i.a.EMPTY), r.count = 1)); else if (this.isHotSlot(e)) this.tryToAddItems(this._numHotSlots, this._numHotSlots + this._numStorageSlots, r), 0 === r.count && (e === this.getSelectedIndex() ? (r.item.onInactive(this._playerState, this._controls, a), r.item = Object(s.c)(i.a.EMPTY), r.count = 1, r.item.onActive(this._playerState, this._controls, a)) : (r.item = Object(s.c)(i.a.EMPTY), r.count = 1)); else if (this.isStorageSlot(e)) {
                                var l = this.getSelected().item.id, S = this.tryToAddItems(0, this._numHotSlots, r);
                                0 === r.count && (r.item = Object(s.c)(i.a.EMPTY), r.count = 1), l === i.a.EMPTY && this.getSelected().item.id !== i.a.EMPTY && S > 0 && this.getSelected().item.onActive(this._playerState, this._controls, a)
                            }
                        }
                    }
                }, t.tryToAddItems = function (e, t, a) {
                    for (var n = a.count, r = e; r < t && a.count > 0; r++) {
                        var o = this._items[r];
                        if (o.item.id === a.item.id && o.count < o.item.maxStackSize) {
                            var s = Math.min(o.item.maxStackSize - o.count, a.count);
                            o.count += s, a.count -= s
                        }
                    }
                    for (var u = e; u < t && a.count > 0; u++) {
                        var c = this._items[u];
                        if (c.item.id === i.a.EMPTY) {
                            c.item = a.item, c.count = a.count, a.count = 0;
                            break
                        }
                    }
                    return n - a.count
                }, t.setCursorItem = function (e) {
                    this._cursorItem = e
                }, t.getCursorItem = function () {
                    return this._cursorItem
                }, t.getItems = function () {
                    return this._items
                }, t.getCapacity = function () {
                    return this._capacity
                }, t.onClose = function () {
                    this._cursorItem = new n.a(Object(s.c)(i.a.EMPTY), 1)
                }, t.countItem = function (e) {
                    for (var t = 0, a = 0; a < this._capacity; a++) this._items[a].item.id === e && (t += this._items[a].count);
                    return t
                }, t.hasSpaceForItemEvenPartially = function (e, t) {
                    if (-1 != (Object(s.d)(e) ? this.getFirstEmptyAmmoSlotIndex() : this.getFirstEmptySlotIndex())) return !0;
                    for (var a = 0; a < this._capacity && t > 0; a++) {
                        var n = this._items[a];
                        if (n.item.id === e && n.count < n.item.maxStackSize) return !0
                    }
                    return !1
                }, t.hasItems = function (e) {
                    for (var t = this.recipeItemsToCountMap(e), a = 0; a < this._capacity; a++) {
                        var n = this._items[a], r = n.item.id, o = n.count;
                        r in t && (t[r] -= Math.min(t[r], o))
                    }
                    for (var i = 0, s = Object.keys(t); i < s.length; i++) {
                        if (t[s[i]] > 0) return !1
                    }
                    return !0
                }, t.recipeItemsToCountMap = function (e) {
                    for (var t = {}, a = 0; a < e.length; a++) e[a].type in t ? t[e[a].type] += e[a].count : t[e[a].type] = e[a].count;
                    return t
                }, t.consumeItems = function (e) {
                    var t = {consumed: !1, skinType: S.a.DEFAULT, skinSeed: 0};
                    if (!this.hasItems(e)) return t;
                    t.consumed = !0;
                    for (var a = this.recipeItemsToCountMap(e), r = 0; r < this._capacity; r++) {
                        var o = this._items[r], u = o.item.id, c = o.count;
                        if (u in a) {
                            var _ = Math.min(a[u], c);
                            _ > 0 && this._items[r].item.id === e[0].type && (t.skinType = this._items[r].item.skinType, t.skinSeed = this._items[r].item.skinSeed), _ === c ? this._items[r] = new n.a(Object(s.c)(i.a.EMPTY), 1) : this._items[r].count -= _, a[u] -= _
                        }
                    }
                    return t
                }, t.dropActiveItem = function (e) {
                    var t = this.getSelected(), a = this.getSelectedIndex();
                    t.item.id !== i.a.EMPTY && (t.count > 1 ? t.count -= 1 : this.setItemAtIndex(a, new n.a(Object(s.c)(i.a.EMPTY), 1), e), e && this._controls.controlsRenderer.playSound(_.a.ITEM_PICKUP))
                }, t.clear = function () {
                    for (var e = 0; e < this._capacity; e++) this._items[e] = new n.a(new o.a, 1);
                    this._cursorItem = new n.a(new o.a, 1), this._selectedIdx = 0
                }, e
            }(), I = a(107), p = a(46), E = a(79), R = a.n(E);

        function T(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return M(e, t)
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

        function M(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var h, m = function () {
            function e(e) {
                this._playerState = e, this._cooldowns = void 0, this._cooldowns = new Map
            }

            var t = e.prototype;
            return t.clone = function (t) {
                for (var a, n = new e(t), r = T(this._cooldowns.entries()); !(a = r()).done;) {
                    var o = a.value, i = o[0], s = o[1];
                    n._cooldowns.set(i, s)
                }
                return n
            }, t.cooldownExpired = function (e) {
                var t = this._cooldowns.get(e);
                return !(t && t > this._playerState.physicsStep.seqId)
            }, t.requestCooldown = function (e) {
                return !!this.cooldownExpired(e.type) && (this.setCooldown(e), !0)
            }, t.getCooldown = function (e) {
                return this._cooldowns.has(e) ? this._cooldowns.get(e) : 0
            }, t.hasCooldown = function (e) {
                return this.getCooldown(e) > 0
            }, t.setCooldown = function (e) {
                this._cooldowns.set(e.type, this._playerState.physicsStep.seqId + e.duration)
            }, t.resetCooldown = function (e) {
                this._cooldowns.delete(e)
            }, t.resetAllCooldowns = function () {
                this._cooldowns.clear()
            }, R()(e, [{
                key: "cooldowns", get: function () {
                    return this._cooldowns
                }
            }]), e
        }(), A = a(26), d = a(34), N = a(95);
        !function (e) {
            e[e.BLOCK = 0] = "BLOCK", e[e.WALL = 1] = "WALL", e[e.STAIRS = 2] = "STAIRS"
        }(h || (h = {}));
        var f = function () {
            function e(e, t) {
                void 0 === t && (t = !1), this._controls = e, this.inventory = void 0, this.physicsStep = void 0, this.inventoryStatus = void 0, this.cooldownManager = void 0, this.maxHealth = void 0, this.health = void 0, this.maxShield = void 0, this.shield = void 0, this.buildMode = void 0, t || (this.inventory = new O(this, this._controls, A.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT, A.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT, A.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT, 0), this.physicsStep = {
                    aimSpread: 0,
                    pos: Object(d.l)(0, 0, 0),
                    vel: Object(d.l)(0, 0, 0),
                    onGround: !1,
                    canJump: !0,
                    controlState: N.a.WALKING,
                    eyeHeight: A.a.PLAYER_STANDING_EYE_POSITION,
                    seqId: 0
                }, this.inventoryStatus = p.a.CLOSED, this.cooldownManager = new m(this), this.maxHealth = 100, this.health = 100, this.maxShield = 100, this.shield = 0, this.buildMode = h.BLOCK)
            }

            return e.prototype.clone = function () {
                var t = new e(this._controls, !0);
                return t.inventory = this.inventory.clone(t), t.physicsStep = Object(I.b)(this.physicsStep), t.cooldownManager = this.cooldownManager.clone(t), t.inventoryStatus = this.inventoryStatus, t.maxHealth = this.maxHealth, t.health = this.health, t.maxShield = this.maxShield, t.shield = this.shield, t.buildMode = this.buildMode, t
            }, e
        }()
    }, 154: function (e, t, a) {
        "use strict";
        t.a = a.p + "./554ece360b09b0135d9155b1ead63aed.png"
    }, 155: function (e, t, a) {
        "use strict";
        t.a = a.p + "./6a815709acb5722414dfd2a340eac8bf.png"
    }, 156: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        var n = function () {
            function e() {
            }

            return e.log = function (e) {
                console.log(e)
            }, e
        }()
    }, 157: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.VOXIOM_LOGO = 0] = "VOXIOM_LOGO"
        }(n || (n = {})), t.a = n
    }, 158: function (e, t, a) {
        "use strict";
        t.a = a.p + "./ef8714439a0e18a4c7b2595a703f5c3c.png"
    }, 159: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return I
        }));
        var n = a(15), r = a.n(n), o = a(21), i = a.n(o), s = a(76), u = a.n(s), c = a(20), _ = a(80), l = a(139),
            S = a(85), O = a(78), I = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, c.a.EMPTY) || this).setMaxStackSize(1), t.setMeleeDamage(5), t.setMeleeRate(Object(O.c)(.45)), t.itemName = "Fists", t
                }

                u()(t, e);
                var a = t.prototype;
                return a.playMeleeAnimation = function (e) {
                    e.controlsRenderer.playPunchAnimation()
                }, a.playBlockBreakAnimation = function (e) {
                    e.controlsRenderer.playPunchAnimation()
                }, a.generateModel = function () {
                    var e = i()(r.a.mark((function e(t) {
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new _.hb);
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.canBreak = function (e) {
                    return e === S.a.WOODEN_CRATE || e === S.a.WOODEN_CHEST || e === S.a.IRON_CHEST || e === S.a.GOLDEN_CHEST || e === S.a.WORK_STATION || e === S.a.LOADOUT_STATION || e === S.a.LEAVES || e === S.a.LEAVES_WITH_ORANGE_BERRIES || e === S.a.LEAVES_WITH_RED_BERRIES
                }, t
            }(l.a)
    }, 160: function (e, t, a) {
        "use strict";
        t.a = {SHIFT_CLICK: -1, LEFT: 0, WHEEL: 1, RIGHT: 2}
    }, 161: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return n
        })), a.d(t, "a", (function () {
            return r
        }));
        var n = function (e, t) {
            return {min: e, max: t}
        }, r = function (e, t) {
            return e.min.x < t.max.x && e.max.x > t.min.x && e.min.y < t.max.y && e.max.y > t.min.y && e.min.z < t.max.z && e.max.z > t.min.z
        }
    }, 162: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(108), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.COMBAT_ASSAULT_RIFLE_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.8))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 163: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(109), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.TACTICAL_ASSAULT_RIFLE_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.6))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 164: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(110), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.SURGE_ASSAULT_RIFLE_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.8))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 165: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(111), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.STRIKE_PISTOL_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.2))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 166: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(112), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.MAGNUM_PISTOL_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.3))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 167: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(113), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.BURST_SHOTGUN_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(1.8))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 168: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return u
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(78), s = a(25), u = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.LIGHT_SUBMACHINE_GUN_COMMON) || this).setReloadTime(Math.floor(Object(i.c)(1.5))), t.setItemTier(s.a.COMMON), t
            }

            return r()(t, e), t
        }(a(114).a)
    }, 169: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return u
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(78), s = a(25), u = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.COMPACT_SUBMACHINE_GUN_COMMON) || this).setReloadTime(Math.floor(Object(i.c)(1.7))), t.setItemTier(s.a.COMMON), t
            }

            return r()(t, e), t
        }(a(115).a)
    }, 170: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(116), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.LIGHT_SNIPER_RIFLE_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(2.4))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 171: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        }));
        var n = a(76), r = a.n(n), o = a(20), i = a(117), s = a(78), u = a(25), c = function (e) {
            function t() {
                var t;
                return (t = e.call(this, o.a.HEAVY_SNIPER_RIFLE_COMMON) || this).setReloadTime(Math.floor(Object(s.c)(2.4))), t.setItemTier(u.a.COMMON), t
            }

            return r()(t, e), t
        }(i.a)
    }, 348: function (e, t) {
    }, 78: function (e, t, a) {
        "use strict";
        a.d(t, "c", (function () {
            return r
        })), a.d(t, "d", (function () {
            return o
        })), a.d(t, "a", (function () {
            return i
        })), a.d(t, "b", (function () {
            return s
        }));
        var n = a(26), r = function (e) {
            return e / n.a.PHYSICS_TIME_STEP
        }, o = function (e) {
            return e * n.a.PHYSICS_TIME_STEP
        }, i = function (e) {
            var t = "0s";
            if (e > 0) {
                var a = Math.floor(e / 86400);
                e %= 86400;
                var n = Math.floor(e / 3600);
                e %= 3600;
                var r = Math.floor(e / 60);
                e %= 60;
                var o = Math.floor(e % 60);
                t = "", a > 0 && (t += a + "d"), n > 0 && (t += n + "h"), r > 0 && (t += r + "m"), o > 0 && (t += o + "s")
            }
            return t
        }, s = function (e) {
            var t = "Less than a second";
            if (e > 0) {
                var a = Math.floor(e / 86400);
                e %= 86400;
                var n = Math.floor(e / 3600);
                e %= 3600;
                var r = Math.floor(e / 60);
                e %= 60;
                var o = Math.floor(e % 60);
                t = "", a > 0 && (t.length > 0 && (t += " "), t += a + " day", a > 1 && (t += "s")), n > 0 && (t.length > 0 && (t += " "), t += n + " hour", n > 1 && (t += "s")), r && (t.length > 0 && (t += " "), t += r + " minute", r > 1 && (t += "s")), o > 0 && (t.length > 0 && (t += " "), t += o + " second", o > 1 && (t += "s"))
            }
            return t
        }
    }, 81: function (e, t, a) {
        "use strict";
        var n, r = a(15), o = a.n(r), i = a(21), s = a.n(i), u = a(79), c = a.n(u), _ = a(80), l = a(339), S = a(340),
            O = a.p + "./15794feccd351fad55fa0a4a109d1c9d.glb", I = a.p + "./4152242d7f636e008173e7f79ed94efa.glb",
            p = a.p + "./763d90dc5c132c61a422ca8a7e1afcbd.glb", E = a.p + "./60bbe24fec613b918eef2f9bb80ad636.glb",
            R = a.p + "./bcfae87d727e8f1cb43397e1054a4897.glb", T = a.p + "./66bc63f7960b146016cb8170a0ffb9ff.glb",
            M = a.p + "./04fe2d49db63ef59152ff230f6660fc8.glb", h = a.p + "./3d612eaa82686e76ccafefa49e85256e.glb",
            m = a.p + "./d8df63da9e45108675a41b38eef361af.glb", A = a.p + "./974fa615818f1264ee48299d699bd2d2.glb",
            d = a.p + "./923579922f3e53903600c6cb3342e39b.glb", N = a.p + "./4d5b3face2d43e4618cbe7fb9a52a72c.glb",
            f = a.p + "./e722cb9c4e976275d1e65109271428dd.glb", C = a.p + "./e17b91cd072134478dd3891d5692f0c3.glb",
            L = a.p + "./b01bc7fcc51ba3c76e5b66a3ea098b62.glb", y = a.p + "./891765e13921091a27b3aabee043bdf1.glb",
            U = a.p + "./18488d50a9f94fcfbdaecca802ea2148.glb", g = a.p + "./dde97a7519c3c3be0cddfb93755d81f5.glb",
            P = a.p + "./da67981105affb2d850414be59ca4902.glb", v = a.p + "./c748cbbdc9e606823e7b28c0766369d5.png",
            F = a.p + "./9dee299578d18320fc6a4a332675d34c.png", G = a.p + "./40408ca788bcb5ecb47fbf0c9a78e604.png",
            H = a.p + "./9f977a495fe470d0948d001b108c081d.png", b = a.p + "./e35309fbe27404d57e650f3cd3dc56f2.png",
            x = a.p + "./465313a256767092009091f3a42b0042.png", D = a.p + "./b3730d3a4ada0385345c6129352d6d94.png",
            k = a.p + "./81f25a3ba3bb288e9d8cdc33e041f736.png", B = a.p + "./dda71faa451824b0e807149987ffec49.png",
            w = a.p + "./7507e68e4bd6e3ea4fbeaf85ec62e5a6.png", Y = a.p + "./5780fbcd69df8a4b4f346c36a42ed1bb.png",
            K = a.p + "./662aed91c0da138b3ef815328c6bbf14.png", V = a(154),
            W = a.p + "./699b50a69e713773e0473b25548b2cdb.png", j = a.p + "./2f5d29d478f5b1185b2745e03bd28c8c.png",
            Z = a.p + "./f1e1d5c140a833c03238e48294c52c75.png", z = a.p + "./06a024fd442b2caa2311b2ad9e6e0d52.png",
            X = a.p + "./76802f61b49ee84c1fcf3219fd1ddea7.png", q = a.p + "./4f450fe2ed59d2b94f95a281016d567d.png",
            J = a(155), Q = a.p + "./d4fbd71d97f1b6c994377b94db746034.png",
            $ = a.p + "./4f5f4b64d7708690b6fde3ea729192b4.mp3", ee = a.p + "./d03f01484111227bef832f9c912744ab.mp3",
            te = a.p + "./f7c6f58428d162a27e7594059d02a244.mp3", ae = a.p + "./39cd06962b30ec1d7c3562ce3aeb82d4.mp3",
            ne = a.p + "./4fa6c09f3ba64284725ba2ec00608711.mp3", re = a.p + "./b589c893ab9789cad83ae7e30b97ffb8.mp3",
            oe = a.p + "./d6ecaa95f97cf562167f6cf5a97595b1.mp3", ie = a.p + "./069082a387c034ec1551177d71a9708a.mp3",
            se = a.p + "./1b008c10db8bd3151412b46813df9ba0.mp3", ue = a.p + "./c705ad50f83621073d2ede730a63d907.mp3",
            ce = a.p + "./436b9d243eb48dab0e975751c0b5e971.mp3", _e = a.p + "./0ac605c37a83d78fc3a1844ff93ca630.mp3",
            le = a.p + "./c2d6c059d1ccbb134236bc3601c5e5f1.mp3", Se = a.p + "./74170c9d2f268a0074fae2dd8a217b20.mp3",
            Oe = a.p + "./3bfbe658a01f8e7d25413994fa304d57.mp3", Ie = a.p + "./8e9752c6ad1ba4db602b8ef21df59c8d.mp3",
            pe = a.p + "./2811cf3d28a8d982604b605a69eb8961.mp3", Ee = a.p + "./c9ca7f3e767732b448088b3e891e2e7a.mp3",
            Re = a.p + "./d90c3c257dcc201e24b8e68e3f2fdfbe.mp3", Te = a.p + "./e7616066887b250c68b8bac4519a5814.mp3",
            Me = a.p + "./6703ab7ff699b742855a3d41e84d393c.mp3", he = a.p + "./8b4a4d0415a14ec1c57cc8432ce58f48.mp3",
            me = a.p + "./890ea36ef994e8134fcbc2489a84d325.mp3", Ae = a.p + "./1e3340a23f3a726adca8dee36c9769c1.mp3",
            de = a.p + "./aece9921174da3987d2891a282e65957.mp3", Ne = a.p + "./583b98c032ae65bed41f639a03e1f6a6.mp3",
            fe = a.p + "./f9c49ba25787d9e762970ac835df1c8d.mp3", Ce = a.p + "./6a4b8238bbec678b0d0f6c2eb24d5888.mp3",
            Le = a.p + "./d2d22d03aeb0a291572956ed15b1f4f1.mp3", ye = a.p + "./29ec46edb3c12c503c44d90f74ba4436.mp3",
            Ue = a.p + "./018b5cd865aae938df77b2aa937783e1.mp3", ge = a.p + "./ca6abde304978d864399460f05256f78.mp3",
            Pe = a.p + "./d6b8a21b792cccbc6334a9afff700e40.mp3", ve = a(156), Fe = a(20);
        !function (e) {
            e[e.ITEM_MODEL = 0] = "ITEM_MODEL", e[e.MISC_MODEL = 1] = "MISC_MODEL"
        }(n || (n = {}));
        var Ge = n, He = a(89), be = a(84), xe = a(82), De = a(83), ke = a(85), Be = a(157), we = a(158), Ye = a(86),
            Ke = a(102), Ve = a(119), We = new (function () {
                function e() {
                    var e, t;
                    this._settings = void 0, this._gltfLoader = void 0, this._textureLoader = void 0, this._audioLoader = void 0, this._blockTexture = void 0, this._soldierGreenTexture = void 0, this._soldierRedTexture = void 0, this._soldierBlueTexture = void 0, this._damageIndicatorTexture = void 0, this._muzzleFlashTexture = void 0, this._toxicCircleTexture = void 0, this._itemGlowTexture = void 0, this._playerModel = void 0, this._playerWalkAnimation = void 0, this._playerCursorTexture = void 0, this._crateModel = void 0, this._crateOpenAnimation = void 0, this._playerCrouchAnimation = void 0, this._playerWalkUpAnimation = void 0, this._playerFreeFallingUpAnimation = void 0, this._playerFreeFallingDownAnimation = void 0, this._playerGlideAnimation = void 0, this._playerWalkForwardAnimation = void 0, this._playerWalkDownAnimation = void 0, this._playerCrouchUpAnimation = void 0, this._playerCrouchForwardAnimation = void 0, this._playerCrouchDownAnimation = void 0, this._playerWalkUpBlockAnimation = void 0, this._playerWalkForwardBlockAnimation = void 0, this._playerWalkDownBlockAnimation = void 0, this._playerCrouchUpBlockAnimation = void 0, this._playerCrouchForwardBlockAnimation = void 0, this._playerCrouchDownBlockAnimation = void 0, this._playerWalkUpFistAnimation = void 0, this._playerWalkForwardFistAnimation = void 0, this._playerWalkDownFistAnimation = void 0, this._playerCrouchUpFistAnimation = void 0, this._playerCrouchForwardFistAnimation = void 0, this._playerCrouchDownFistAnimation = void 0, this._playerFirstPersonModel = void 0, this._playerFirstPersonItemHoldAnimation = void 0, this._playerFirstPersonBlockHoldAnimation = void 0, this._playerFirstPersonFistAnimation = void 0, this._loaded = void 0, this._onDemandTextureCache = void 0, this._crateAOTexture = void 0, this._surgeAssaultRifleAOTexture = void 0, this._magnumPistolAOTexture = void 0, this._compactSubmachineGunAOTexture = void 0, this._combatAssaultRifleAOTexture = void 0, this._tacticalAssaultRifleAOTexture = void 0, this._strikePistolAOTexture = void 0, this._burstShotgunAOTexture = void 0, this._lightSubmachineGunAOTexture = void 0, this._lightSniperRifleAOTexture = void 0, this._heavySniperRifleAOTexture = void 0, this._shovelAOTexture = void 0, this._modelsToLoad = void 0, this._itemModels = void 0, this._miscModels = void 0, this._soundsToLoad = void 0, this._sounds = void 0, this._itemIcons = void 0, this._sprayImages = void 0, this._gltfLoader = new l.a, this._audioLoader = new _.g, this._textureLoader = new _.Ib, this._loaded = !1, this._onDemandTextureCache = {}, this._modelsToLoad = ((e = {})[f] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.SHOVEL_COMMON
                    }], e[p] = [{type: Ge.ITEM_MODEL, id: Fe.a.COMBAT_ASSAULT_RIFLE_COMMON}], e[E] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.TACTICAL_ASSAULT_RIFLE_COMMON
                    }], e[R] = [{type: Ge.ITEM_MODEL, id: Fe.a.SURGE_ASSAULT_RIFLE_COMMON}], e[T] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.STRIKE_PISTOL_COMMON
                    }], e[M] = [{type: Ge.ITEM_MODEL, id: Fe.a.BURST_SHOTGUN_COMMON}], e[h] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.LIGHT_SUBMACHINE_GUN_COMMON
                    }], e[m] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.COMPACT_SUBMACHINE_GUN_COMMON
                    }], e[A] = [{type: Ge.ITEM_MODEL, id: Fe.a.MAGNUM_PISTOL_COMMON}], e[d] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.HEAVY_SNIPER_RIFLE_COMMON
                    }], e[N] = [{type: Ge.ITEM_MODEL, id: Fe.a.LIGHT_SNIPER_RIFLE_COMMON}], e[C] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.RUBY,
                        objName: "Ruby"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.SAPPHIRE, objName: "Sapphire"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.EMERALD,
                        objName: "Emerald"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.IRON, objName: "Iron"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.SULFUR,
                        objName: "Sulfur"
                    }], e[L] = [{type: Ge.ITEM_MODEL, id: Fe.a.AMMO_PISTOL, objName: "PistolAmmo"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.AMMO_ASSAULT_RIFLE,
                        objName: "AssaultRifleAmmo"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.AMMO_SHOTGUN, objName: "ShotgunAmmo"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.AMMO_SUBMACHINE_GUN,
                        objName: "SubmachineGunAmmo"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.AMMO_SNIPER_RIFLE, objName: "SniperRifleAmmo"}, {
                        type: Ge.MISC_MODEL,
                        id: He.a.PISTOL_SHELL,
                        objName: "PistolShell"
                    }, {
                        type: Ge.MISC_MODEL,
                        id: He.a.ASSAULT_RIFLE_SHELL,
                        objName: "AssaultRifleShell"
                    }, {type: Ge.MISC_MODEL, id: He.a.SHOTGUN_SHELL, objName: "ShotgunShell"}, {
                        type: Ge.MISC_MODEL,
                        id: He.a.SUBMACHINE_GUN_SHELL,
                        objName: "SubmachineGunShell"
                    }, {
                        type: Ge.MISC_MODEL,
                        id: He.a.SNIPER_RIFLE_SHELL,
                        objName: "SniperRifleShell"
                    }], e[y] = [{
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.MINI_SHIELD_POTION,
                        objName: "MiniShieldPotion"
                    }, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.ADVANCED_SHIELD_POTION,
                        objName: "AdvancedShieldPotion"
                    }, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.ULTIMATE_SHIELD_POTION,
                        objName: "UltimateShieldPotion"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.MEDICINE_PILLS, objName: "MedicinePills"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.FIRST_AID_KIT,
                        objName: "FirstAidKit"
                    }, {type: Ge.ITEM_MODEL, id: Fe.a.RED_BERRY, objName: "RedBerry"}, {
                        type: Ge.ITEM_MODEL,
                        id: Fe.a.ORANGE_BERRY,
                        objName: "OrangeBerry"
                    }], e[U] = [{type: Ge.MISC_MODEL, id: He.a.PLANE, objName: "Plane"}], e[g] = [{
                        type: Ge.MISC_MODEL,
                        id: He.a.PARACHUTE,
                        objName: "Parachute"
                    }], e), this._itemModels = {}, this._miscModels = {}, this._itemIcons = {}, this._sprayImages = {}, this._soundsToLoad = ((t = {})[be.a.FOOTSTEP_GRASS] = $, t[be.a.FOOTSTEP_SAND] = ee, t[be.a.FOOTSTEP_ROCKS] = te, t[be.a.FOOTSTEP_BRICKS] = ae, t[be.a.FOOTSTEP_DIRT] = ne, t[be.a.FOOTSTEP_LEAVES] = re, t[be.a.ITEM_PICKUP] = oe, t[be.a.WATER_SPLASH] = ie, t[be.a.FOOTSTEP_WATER] = se, t[be.a.FOOTSTEP_WOOD] = ue, t[be.a.GUN_SHOT_COMBAT_ASSAULT_RIFLE] = ce, t[be.a.GUN_SHOT_TACTICAL_ASSAULT_RIFLE] = _e, t[be.a.GUN_SHOT_SURGE_ASSAULT_RIFLE] = le, t[be.a.GUN_SHOT_STRIKE_PISTOL] = Se, t[be.a.GUN_SHOT_MAGNUM_PISTOL] = Oe, t[be.a.GUN_SHOT_BURST_SHOTGUN] = Ie, t[be.a.GUN_SHOT_LIGHT_SUBMACHINE_GUN] = pe, t[be.a.GUN_SHOT_COMPACT_SUBMACHINE_GUN] = Ee, t[be.a.GUN_SHOT_LIGHT_SNIPER_RIFLE] = Re, t[be.a.GUN_SHOT_HEAVY_SNIPER_RIFLE] = Te, t[be.a.GUN_RELOAD_START] = Me, t[be.a.GUN_RELOAD_FINISH] = he, t[be.a.HIT] = me, t[be.a.HIT_HEADSHOT] = Ae, t[be.a.KILL] = de, t[be.a.DAMAGE] = Ne, t[be.a.ALERT_SHORT] = fe, t[be.a.ALERT_LONG] = Ce, t[be.a.ALERT_NEGATIVE] = Le, t[be.a.ALERT_AMBIENT] = ye, t[be.a.ALERT_TICK] = Ue, t[be.a.SPRAY] = ge, t[be.a.CRATE_OPEN] = Pe, t), this._sounds = {}
                }

                var t = e.prototype;
                return t.loadAOTextures = function () {
                    var e = s()(o.a.mark((function e() {
                        var t = this;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(v);
                                                case 2:
                                                    t._surgeAssaultRifleAOTexture = e.sent, t._surgeAssaultRifleAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(F);
                                                case 2:
                                                    t._magnumPistolAOTexture = e.sent, t._magnumPistolAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(G);
                                                case 2:
                                                    t._compactSubmachineGunAOTexture = e.sent, t._compactSubmachineGunAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(H);
                                                case 2:
                                                    t._combatAssaultRifleAOTexture = e.sent, t._combatAssaultRifleAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(b);
                                                case 2:
                                                    t._tacticalAssaultRifleAOTexture = e.sent, t._tacticalAssaultRifleAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(x);
                                                case 2:
                                                    t._strikePistolAOTexture = e.sent, t._strikePistolAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(D);
                                                case 2:
                                                    t._burstShotgunAOTexture = e.sent, t._burstShotgunAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(k);
                                                case 2:
                                                    t._lightSubmachineGunAOTexture = e.sent, t._lightSubmachineGunAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(B);
                                                case 2:
                                                    t._lightSniperRifleAOTexture = e.sent, t._lightSniperRifleAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(w);
                                                case 2:
                                                    t._heavySniperRifleAOTexture = e.sent, t._heavySniperRifleAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(Y);
                                                case 2:
                                                    t._shovelAOTexture = e.sent, t._shovelAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))(), s()(o.a.mark((function e() {
                                        return o.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.loadTextureAsync(K);
                                                case 2:
                                                    t._crateAOTexture = e.sent, t._crateAOTexture.flipY = !1;
                                                case 4:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))()]);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), t.loadOnDemandTexture = function (e) {
                    if (e in this._onDemandTextureCache) return this._onDemandTextureCache[e];
                    var t = this._textureLoader.load(e);
                    return t.flipY = !1, t.wrapS = _.ub, t.wrapT = _.ub, t.encoding = _.Rb, this._onDemandTextureCache[e] = t, t
                }, t.loadOnDemandTextureAsync = function () {
                    var e = s()(o.a.mark((function e(t) {
                        var a;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t in this._onDemandTextureCache)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this._onDemandTextureCache[t]);
                                case 2:
                                    return e.next = 4, this.loadTextureAsync(t);
                                case 4:
                                    return (a = e.sent).flipY = !1, a.wrapS = _.ub, a.wrapT = _.ub, a.encoding = _.Rb, this._onDemandTextureCache[t] = a, e.abrupt("return", a);
                                case 11:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t.loadTextureAsync = function () {
                    var e = s()(o.a.mark((function e(t) {
                        var a = this;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function (e, n) {
                                        a._textureLoader.load(t, (function (t) {
                                            e(t)
                                        }), void 0, (function (e) {
                                            n(e)
                                        }))
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
                }(), t.loadBlockTexture = function () {
                    this._blockTexture = this._textureLoader.load(this._settings.terrainTextureURL.length > 0 ? this._settings.terrainTextureURL : V.a), this._blockTexture.minFilter = _.db, this._blockTexture.magFilter = _.db, this._blockTexture.encoding = _.Rb
                }, t.loadDamageIndicatorexture = function () {
                    this._damageIndicatorTexture = this._textureLoader.load(X), this._damageIndicatorTexture.encoding = _.Rb
                }, t.loadMuzzleFlashTexture = function () {
                    this._muzzleFlashTexture = this._textureLoader.load(q), this._muzzleFlashTexture.encoding = _.Rb
                }, t.loadToxicCircleTexture = function () {
                    this._toxicCircleTexture = this._textureLoader.load(z), this._toxicCircleTexture.wrapS = _.ub, this._toxicCircleTexture.wrapT = _.ub, this._toxicCircleTexture.encoding = _.Rb
                }, t.loadItemGlowTexture = function () {
                    this._itemGlowTexture = this._textureLoader.load(Q), this._itemGlowTexture.encoding = _.Rb
                }, t.loadPlayerCursorTexture = function () {
                    this._playerCursorTexture = this._textureLoader.load(J.a), this._playerCursorTexture.encoding = _.Rb
                }, t.loadSoldierTextures = function () {
                    this._soldierGreenTexture = this._textureLoader.load(W), this._soldierGreenTexture.minFilter = _.db, this._soldierGreenTexture.magFilter = _.db, this._soldierGreenTexture.generateMipmaps = !1, this._soldierGreenTexture.flipY = !1, this._soldierGreenTexture.encoding = _.Rb, this._soldierRedTexture = this._textureLoader.load(j), this._soldierRedTexture.minFilter = _.db, this._soldierRedTexture.magFilter = _.db, this._soldierRedTexture.generateMipmaps = !1, this._soldierRedTexture.flipY = !1, this._soldierRedTexture.encoding = _.Rb, this._soldierBlueTexture = this._textureLoader.load(Z), this._soldierBlueTexture.minFilter = _.db, this._soldierBlueTexture.magFilter = _.db, this._soldierBlueTexture.generateMipmaps = !1, this._soldierBlueTexture.flipY = !1, this._soldierBlueTexture.encoding = _.Rb
                }, t.deleteLegsAnimation = function (e) {
                    return e.filter((function (e) {
                        return -1 === e.name.indexOf("Leg") && -1 === e.name.indexOf("Feet") && -1 === e.name.indexOf("Body")
                    }))
                }, t.deleteArmsAnimation = function (e) {
                    return e.filter((function (e) {
                        return -1 !== e.name.indexOf("Leg") || -1 !== e.name.indexOf("Feet") || -1 !== e.name.indexOf("Body")
                    }))
                }, t.loadPlayerModel = function () {
                    var e = this;
                    return new Promise((function (t, a) {
                        e._gltfLoader.load(O, (function (a) {
                            var n = a.scene.children[0];
                            e.enablePixelArtMode(n), e._playerModel = n, a.animations.forEach((function (t) {
                                "Walk" === t.name ? (e._playerWalkAnimation = t, e._playerWalkAnimation.tracks = e.deleteArmsAnimation(e._playerWalkAnimation.tracks)) : "Crouch" === t.name ? (e._playerCrouchAnimation = t, e._playerCrouchAnimation.tracks = e.deleteArmsAnimation(e._playerCrouchAnimation.tracks)) : "Walk_Up" === t.name ? (e._playerWalkUpAnimation = t, e._playerWalkUpAnimation.tracks = e.deleteLegsAnimation(e._playerWalkUpAnimation.tracks)) : "Walk_Forward" === t.name ? (e._playerWalkForwardAnimation = t, e._playerWalkForwardAnimation.tracks = e.deleteLegsAnimation(e._playerWalkForwardAnimation.tracks)) : "Walk_Down" === t.name ? (e._playerWalkDownAnimation = t, e._playerWalkDownAnimation.tracks = e.deleteLegsAnimation(e._playerWalkDownAnimation.tracks)) : "Crouch_Up" === t.name ? (e._playerCrouchUpAnimation = t, e._playerCrouchUpAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchUpAnimation.tracks)) : "Crouch_Forward" === t.name ? (e._playerCrouchForwardAnimation = t, e._playerCrouchForwardAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchForwardAnimation.tracks)) : "Crouch_Down" === t.name ? (e._playerCrouchDownAnimation = t, e._playerCrouchDownAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchDownAnimation.tracks)) : "Walk_Up_Block" === t.name ? (e._playerWalkUpBlockAnimation = t, e._playerWalkUpBlockAnimation.tracks = e.deleteLegsAnimation(e._playerWalkUpBlockAnimation.tracks)) : "Walk_Forward_Block" === t.name ? (e._playerWalkForwardBlockAnimation = t, e._playerWalkForwardBlockAnimation.tracks = e.deleteLegsAnimation(e._playerWalkForwardBlockAnimation.tracks)) : "Walk_Down_Block" === t.name ? (e._playerWalkDownBlockAnimation = t, e._playerWalkDownBlockAnimation.tracks = e.deleteLegsAnimation(e._playerWalkDownBlockAnimation.tracks)) : "Crouch_Up_Block" === t.name ? (e._playerCrouchUpBlockAnimation = t, e._playerCrouchUpBlockAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchUpBlockAnimation.tracks)) : "Crouch_Forward_Block" === t.name ? (e._playerCrouchForwardBlockAnimation = t, e._playerCrouchForwardBlockAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchForwardBlockAnimation.tracks)) : "Crouch_Down_Block" === t.name ? (e._playerCrouchDownBlockAnimation = t, e._playerCrouchDownBlockAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchDownBlockAnimation.tracks)) : "Walk_Up_Fist" === t.name ? (e._playerWalkUpFistAnimation = t, e._playerWalkUpFistAnimation.tracks = e.deleteLegsAnimation(e._playerWalkUpFistAnimation.tracks)) : "Walk_Forward_Fist" === t.name ? (e._playerWalkForwardFistAnimation = t, e._playerWalkForwardFistAnimation.tracks = e.deleteLegsAnimation(e._playerWalkForwardFistAnimation.tracks)) : "Walk_Down_Fist" === t.name ? (e._playerWalkDownFistAnimation = t, e._playerWalkDownFistAnimation.tracks = e.deleteLegsAnimation(e._playerWalkDownFistAnimation.tracks)) : "Crouch_Up_Fist" === t.name ? (e._playerCrouchUpFistAnimation = t, e._playerCrouchUpFistAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchUpFistAnimation.tracks)) : "Crouch_Forward_Fist" === t.name ? (e._playerCrouchForwardFistAnimation = t, e._playerCrouchForwardFistAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchForwardFistAnimation.tracks)) : "Crouch_Down_Fist" === t.name ? (e._playerCrouchDownFistAnimation = t, e._playerCrouchDownFistAnimation.tracks = e.deleteLegsAnimation(e._playerCrouchDownFistAnimation.tracks)) : "FreeFalling_Up" === t.name ? e._playerFreeFallingUpAnimation = t : "FreeFalling_Down" === t.name ? e._playerFreeFallingDownAnimation = t : "Glide" === t.name && (e._playerGlideAnimation = t)
                            })), t()
                        }), void 0, (function (e) {
                            a(e.error)
                        }))
                    }))
                }, t.loadCrateModel = function () {
                    var e = this;
                    return new Promise((function (t, a) {
                        e._gltfLoader.load(P, (function (a) {
                            var n = a.scene.children[0];
                            n.traverse((function (t) {
                                t.geometry && (t.geometry.attributes.uv2 = t.geometry.attributes.uv), t.material && (t.material.aoMap = e._crateAOTexture)
                            })), e._crateModel = n, a.animations.forEach((function (t) {
                                "CrateOpen" === t.name && (e._crateOpenAnimation = t)
                            })), t()
                        }), void 0, (function (e) {
                            a(e.error)
                        }))
                    }))
                }, t.enablePixelArtMode = function (e) {
                    e.traverse((function (e) {
                        e.isMesh && (e.material.map.generateMipmaps = !1, e.material.map.minFilter = _.db)
                    }))
                }, t.disableFrustumCulling = function (e) {
                    e.traverse((function (e) {
                        e.frustumCulled = !1
                    }))
                }, t.loadPlayerFirstPersonModel = function () {
                    var e = this;
                    return new Promise((function (t, a) {
                        e._gltfLoader.load(I, (function (a) {
                            var n = a.scene.children[0];
                            e.enablePixelArtMode(n), e.disableFrustumCulling(n), e._playerFirstPersonModel = n, a.animations.forEach((function (t) {
                                "Item" === t.name ? e._playerFirstPersonItemHoldAnimation = t : "Block" === t.name ? e._playerFirstPersonBlockHoldAnimation = t : "Fist" === t.name && (e._playerFirstPersonFistAnimation = t)
                            })), t()
                        }), void 0, (function (e) {
                            a(e.error)
                        }))
                    }))
                }, t.loadItemModels = function () {
                    var e = this;
                    return Promise.all(Object.keys(this._modelsToLoad).map((function (t) {
                        return new Promise((function (a, n) {
                            e._gltfLoader.load(t, (function (n) {
                                for (var r = 0; r < e._modelsToLoad[t].length; r++) {
                                    var o = n.scene.children[0], i = e._modelsToLoad[t][r].objName;
                                    void 0 !== i && void 0 === (o = n.scene.getObjectByName(i)) && console.error("Error loading model " + i), o.position.set(0, 0, 0);
                                    var s = e._modelsToLoad[t][r].type, u = e._modelsToLoad[t][r].id;
                                    s === Ge.ITEM_MODEL ? e._itemModels[u] = o : e._miscModels[u] = o
                                }
                                a()
                            }), void 0, (function (e) {
                                n(e.error)
                            }))
                        }))
                    })))
                }, t.loadSounds = function () {
                    var e = this;
                    return Promise.all(Object.keys(this._soundsToLoad).map((function (t) {
                        return new Promise((function (a, n) {
                            e._audioLoader.load(e._soundsToLoad[t], (function (n) {
                                e._sounds[t] = n, a()
                            }), void 0, (function (e) {
                                n(e.error)
                            }))
                        }))
                    })))
                }, t.loadSprayTextures = function () {
                    this._sprayImages[Be.a.VOXIOM_LOGO] = this._textureLoader.load(we.a)
                }, t.load = function () {
                    var e = s()(o.a.mark((function e(t) {
                        var a, n;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this._settings = t, ve.a.log("Loading resources..."), a = 14, n = 0, xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, n / a), e.next = 7, this.loadBlockTexture();
                                case 7:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 10, this.loadAOTextures();
                                case 10:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadDamageIndicatorexture(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadMuzzleFlashTexture(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadToxicCircleTexture(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadItemGlowTexture(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadPlayerCursorTexture(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 23, this.loadPlayerModel();
                                case 23:
                                    return this.loadSoldierTextures(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 27, this.loadPlayerFirstPersonModel();
                                case 27:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 30, this.loadCrateModel();
                                case 30:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 33, this.loadItemModels();
                                case 33:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 36, this.generateItemIcons();
                                case 36:
                                    return xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), this.loadSprayTextures(), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !0, ++n / a), e.next = 41, this.loadSounds();
                                case 41:
                                    !function (e) {
                                        if ("suspended" === e.state) {
                                            var t = ["touchstart", "touchend", "mousedown", "keydown"], a = function a() {
                                                t.forEach((function (e) {
                                                    document.body.removeEventListener(e, a)
                                                })), e.resume()
                                            };
                                            t.forEach((function (e) {
                                                document.body.addEventListener(e, a, !1)
                                            }))
                                        }
                                    }(_.e.getContext()), xe.a.emit(De.a.RESOURCE_LOADING_STATUS_UPDATE, !1, ++n / a), this._loaded = !0, ve.a.log("Finished loading resources!");
                                case 45:
                                case"end":

                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t.removeFog = function (e) {
                    e.traverse((function (e) {
                        e.material && (e.material.fog = !1)
                    }))
                }, t.cleanUpModelExcludeMaterial = function (e) {
                    e.traverse((function (e) {
                        e.geometry && e.geometry.dispose(), e.skeleton && e.skeleton.dispose()
                    }))
                }, t.cleanUpModel = function (e) {
                    e.traverse((function (e) {
                        if (e.geometry && e.geometry.dispose(), e.material) if (void 0 !== e.material.length) for (var t = 0; t < e.material.length; t++) e.material[t].map && e.material[t].map.dispose(), e.material[t].dispose(); else e.material.map && e.material.map.dispose(), e.material.dispose();
                        e.skeleton && e.skeleton.dispose()
                    }))
                }, t.cloneMaterials = function (e) {
                    return e.traverse((function (e) {
                        e.material && (e.material = e.material.clone())
                    })), e
                }, t.generateItemIcons = function () {
                    var e = s()(o.a.mark((function e() {
                        var t, a, n, r, i, s, u, c, l, S, O, I, p, E, R, T, M, h, m, A;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    t = document.createElement("canvas"), 128, 128, 1, a = .2, n = new _.ib(-.2, .2, a, -a, .01, 1e3), (r = new _.Qb({
                                        canvas: t,
                                        antialias: !0,
                                        alpha: !0
                                    })).setSize(128, 128), r.gammaFactor = 2.2, r.outputEncoding = _.Rb, i = new _.vb, s = new _.a(16777215, .4), i.add(s), (u = new _.q(16777215, .7)).position.set(-1, 1, 1), i.add(u), l = [], S = new Set, O = 0, I = Object.keys(Fe.a);
                                case 19:
                                    if (!(O < I.length)) {
                                        e.next = 45;
                                        break
                                    }
                                    if (p = I[O], !isNaN(parseInt(p))) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.abrupt("continue", 42);
                                case 23:
                                    if ((E = parseInt(p)) !== Fe.a.EMPTY) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.abrupt("continue", 42);
                                case 26:
                                    if (E !== Fe.a.BLOCK) {
                                        e.next = 41;
                                        break
                                    }
                                    R = 0, T = Object.keys(ke.a);
                                case 28:
                                    if (!(R < T.length)) {
                                        e.next = 39;
                                        break
                                    }
                                    if (M = T[R], !isNaN(parseInt(M))) {
                                        e.next = 32;
                                        break
                                    }
                                    return e.abrupt("continue", 36);
                                case 32:
                                    if ((h = parseInt(M)) !== ke.a.AIR) {
                                        e.next = 35;
                                        break
                                    }
                                    return e.abrupt("continue", 36);
                                case 35:
                                    l.push(Object(Ye.c)(E + h));
                                case 36:
                                    R++, e.next = 28;
                                    break;
                                case 39:
                                    e.next = 42;
                                    break;
                                case 41:
                                    l.push(Object(Ye.c)(E));
                                case 42:
                                    O++, e.next = 19;
                                    break;
                                case 45:
                                    m = 0;
                                case 46:
                                    if (!(m < l.length)) {
                                        e.next = 60;
                                        break
                                    }
                                    if (A = l[m], c && (i.remove(c), c = void 0), S.has(A.getModelID())) {
                                        e.next = 57;
                                        break
                                    }
                                    return e.next = 52, A.generateThumbnailModel(!1, !1);
                                case 52:
                                    c = e.sent, i.add(c), r.render(i, n), this._itemIcons[A.getModelID()] = t.toDataURL(), S.add(A.getModelID());
                                case 57:
                                    m++, e.next = 46;
                                    break;
                                case 60:
                                    r.dispose(), r.forceContextLoss();
                                case 62:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), t.generateAccountInventoryIcons = function () {
                    var e = s()(o.a.mark((function e(t, a) {
                        var n, r, i, s, u, c, l, S, O, I, p, E, R, T, M, h;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    n = document.createElement("canvas"), 280, 280, 1, r = .2, i = new _.ib(-.2, .2, r, -r, .01, 1e3), (s = new _.Qb({
                                        canvas: n,
                                        antialias: !0,
                                        alpha: !0
                                    })).setSize(280, 280), s.gammaFactor = 2.2, s.outputEncoding = _.Rb, u = new _.vb, c = new _.a(16777215, .4), u.add(c), (l = new _.q(16777215, .7)).position.set(-1, 1, 1), u.add(l), O = 0;
                                case 17:
                                    if (!(O < t.length)) {
                                        e.next = 36;
                                        break
                                    }
                                    if (I = t[O], !((p = I.type + "_" + I.seed) in a)) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("continue", 33);
                                case 22:
                                    return S && (u.remove(S), S = void 0), E = Object(Ke.a)(I.type).itemType, (R = Object(Ye.c)(E)).setSkin(I.type, I.seed), e.next = 28, R.generateThumbnailModel(!0, !0);
                                case 28:
                                    S = e.sent, u.add(S), s.compile(u, i), s.render(u, i), a[p] = n.toDataURL();
                                case 33:
                                    O++, e.next = 17;
                                    break;
                                case 36:
                                    T = 1;
                                case 37:
                                    if (!(T < Ve.a.__LENGTH)) {
                                        e.next = 54;
                                        break
                                    }
                                    if (M = Object(Ve.b)(T), !(T in a)) {
                                        e.next = 42;
                                        break
                                    }
                                    return e.abrupt("continue", 51);
                                case 42:
                                    return S && (u.remove(S), S = void 0), h = Object(Ye.c)(M), e.next = 46, h.generateThumbnailModel(!1, !1);
                                case 46:
                                    S = e.sent, u.add(S), s.compile(u, i), s.render(u, i), a[T] = n.toDataURL();
                                case 51:
                                    T++, e.next = 37;
                                    break;
                                case 54:
                                    return s.dispose(), s.forceContextLoss(), e.abrupt("return", a);
                                case 57:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t.getItemModel = function (e) {
                    return this.cloneMaterials(this._itemModels[e].clone())
                }, t.getMiscModel = function (e) {
                    return this.cloneMaterials(this._miscModels[e].clone())
                }, t.getSound = function (e) {
                    return this._sounds[e]
                }, t.getItemIcon = function (e) {
                    return this._itemIcons[e]
                }, t.getSprayTexture = function (e) {
                    return this._sprayImages[e]
                }, c()(e, [{
                    key: "loaded", get: function () {
                        return this._loaded
                    }
                }, {
                    key: "blockTexture", get: function () {
                        return this._blockTexture
                    }
                }, {
                    key: "soldierGreenTexture", get: function () {
                        return this._soldierGreenTexture
                    }
                }, {
                    key: "soldierRedTexture", get: function () {
                        return this._soldierRedTexture
                    }
                }, {
                    key: "soldierBlueTexture", get: function () {
                        return this._soldierBlueTexture
                    }
                }, {
                    key: "damageIndicatorTexture", get: function () {
                        return this._damageIndicatorTexture
                    }
                }, {
                    key: "muzzleFlashtexture", get: function () {
                        return this._muzzleFlashTexture
                    }
                }, {
                    key: "toxicCircleTexture", get: function () {
                        return this._toxicCircleTexture
                    }
                }, {
                    key: "itemGlowTexture", get: function () {
                        return this._itemGlowTexture
                    }
                }, {
                    key: "playerCursorTexture", get: function () {
                        return this._playerCursorTexture
                    }
                }, {
                    key: "crateModel", get: function () {
                        return this.cloneMaterials(S.a.clone(this._crateModel))
                    }
                }, {
                    key: "crateOpenAnimation", get: function () {
                        return this._crateOpenAnimation
                    }
                }, {
                    key: "playerModel", get: function () {
                        return this.cloneMaterials(S.a.clone(this._playerModel))
                    }
                }, {
                    key: "playerFirstPersonModel", get: function () {
                        return S.a.clone(this._playerFirstPersonModel)
                    }
                }, {
                    key: "playerWalkAnimation", get: function () {
                        return this._playerWalkAnimation
                    }
                }, {
                    key: "playerCrouchAnimation", get: function () {
                        return this._playerCrouchAnimation
                    }
                }, {
                    key: "playerFreeFallingUpAnimation", get: function () {
                        return this._playerFreeFallingUpAnimation
                    }
                }, {
                    key: "playerFreeFallingDownAnimation", get: function () {
                        return this._playerFreeFallingDownAnimation
                    }
                }, {
                    key: "playerGlideAnimation", get: function () {
                        return this._playerGlideAnimation
                    }
                }, {
                    key: "playerWalkForwardAnimation", get: function () {
                        return this._playerWalkForwardAnimation
                    }
                }, {
                    key: "playerWalkUpAnimation", get: function () {
                        return this._playerWalkUpAnimation
                    }
                }, {
                    key: "playerWalkDownAnimation", get: function () {
                        return this._playerWalkDownAnimation
                    }
                }, {
                    key: "playerCrouchForwardAnimation", get: function () {
                        return this._playerCrouchForwardAnimation
                    }
                }, {
                    key: "playerCrouchUpAnimation", get: function () {
                        return this._playerCrouchUpAnimation
                    }
                }, {
                    key: "playerCrouchDownAnimation", get: function () {
                        return this._playerCrouchDownAnimation
                    }
                }, {
                    key: "playerWalkForwardBlockAnimation", get: function () {
                        return this._playerWalkForwardBlockAnimation
                    }
                }, {
                    key: "playerWalkUpBlockAnimation", get: function () {
                        return this._playerWalkUpBlockAnimation
                    }
                }, {
                    key: "playerWalkDownBlockAnimation", get: function () {
                        return this._playerWalkDownBlockAnimation
                    }
                }, {
                    key: "playerCrouchForwardBlockAnimation", get: function () {
                        return this._playerCrouchForwardBlockAnimation
                    }
                }, {
                    key: "playerCrouchUpBlockAnimation", get: function () {
                        return this._playerCrouchUpBlockAnimation
                    }
                }, {
                    key: "playerCrouchDownBlockAnimation", get: function () {
                        return this._playerCrouchDownBlockAnimation
                    }
                }, {
                    key: "playerWalkForwardFistAnimation", get: function () {
                        return this._playerWalkForwardFistAnimation
                    }
                }, {
                    key: "playerWalkUpFistAnimation", get: function () {
                        return this._playerWalkUpFistAnimation
                    }
                }, {
                    key: "playerWalkDownFistAnimation", get: function () {
                        return this._playerWalkDownFistAnimation
                    }
                }, {
                    key: "playerCrouchForwardFistAnimation", get: function () {
                        return this._playerCrouchForwardFistAnimation
                    }
                }, {
                    key: "playerCrouchUpFistAnimation", get: function () {
                        return this._playerCrouchUpFistAnimation
                    }
                }, {
                    key: "playerCrouchDownFistAnimation", get: function () {
                        return this._playerCrouchDownFistAnimation
                    }
                }, {
                    key: "playerFirstPersonItemHoldAnimation", get: function () {
                        return this._playerFirstPersonItemHoldAnimation
                    }
                }, {
                    key: "playerFirstPersonBlockHoldAnimation", get: function () {
                        return this._playerFirstPersonBlockHoldAnimation
                    }
                }, {
                    key: "playerFirstPersonFistAnimation", get: function () {
                        return this._playerFirstPersonFistAnimation
                    }
                }, {
                    key: "surgeAssaultRifleAOTexture", get: function () {
                        return this._surgeAssaultRifleAOTexture
                    }
                }, {
                    key: "magnumPistolAOTexture", get: function () {
                        return this._magnumPistolAOTexture
                    }
                }, {
                    key: "compactSubmachineGunAOTexture", get: function () {
                        return this._compactSubmachineGunAOTexture
                    }
                }, {
                    key: "combatAssaultRifleAOTexture", get: function () {
                        return this._combatAssaultRifleAOTexture
                    }
                }, {
                    key: "tacticalAssaultRifleAOTexture", get: function () {
                        return this._tacticalAssaultRifleAOTexture
                    }
                }, {
                    key: "strikePistolAOTexture", get: function () {
                        return this._strikePistolAOTexture
                    }
                }, {
                    key: "burstShotgunAOTexture", get: function () {
                        return this._burstShotgunAOTexture
                    }
                }, {
                    key: "lightSubmachineGunAOTexture", get: function () {
                        return this._lightSubmachineGunAOTexture
                    }
                }, {
                    key: "lightSniperRifleAOTexture", get: function () {
                        return this._lightSniperRifleAOTexture
                    }
                }, {
                    key: "heavySniperRifleAOTexture", get: function () {
                        return this._heavySniperRifleAOTexture
                    }
                }, {
                    key: "shovelAOTexture", get: function () {
                        return this._shovelAOTexture
                    }
                }, {
                    key: "crateAOTexture", get: function () {
                        return this._crateAOTexture
                    }
                }]), e
            }());
        t.a = We
    }, 82: function (e, t, a) {
        "use strict";
        var n = a(336), r = new n.EventEmitter;
        t.a = r
    }, 83: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e.REQUEST_GAME_START = "REQUEST_GAME_START", e.REQUEST_GAME_LEAVE = "REQUEST_GAME_LEAVE", e.GAME_JOIN = "GAME_JOIN", e.GAME_LEAVE = "GAME_LEAVE", e.LOAD_CHUNK = "LOAD_CHUNK", e.UNLOAD_CHUNK = "UNLOAD_CHUNK", e.INPUT_RECEIVED = "INPUT_RECEIVED", e.INPUT_VERIFICATION_RECEIVED = "INPUT_VERIFICATION_RECEIVED", e.WORLD_UPDATE_RECEIVED = "WORLD_UPDATE_RECEIVED", e.SET_BLOCK = "SET_BLOCK", e.KEY_PRESS = "KEY_PRESS", e.INVENTORY_ACTIVE_SLOT_CHANGE = "INVENTORY_ACTIVE_SLOT_CHANGE", e.INVENTORY_SET_ITEMS = "INVENTORY_SET_ITEMS", e.INVENTORY_SELECT_ITEM = "INVENTORY_SELECT_ITEM", e.FLOATING_BLOCKS_BREAK = "FLOATING_BLOCKS_BREAK", e.GAME_FOCUS = "GAME_FOCUS", e.GAME_UNFOCUS = "GAME_UNFOCUS", e.RESPAWN = "RESPAWN", e.CHAT_MESSAGE_RECEIVE = "CHAT_MESSAGE_RECEIVE", e.CHAT_MESSAGE_SEND = "CHAT_MESSAGE_SEND", e.AMMO_UPDATE = "AMMO_UPDATE", e.RELOAD = "RELOAD", e.ENTITY_CREATE = "ENTITY_SPAWN", e.ENTITY_DESTROY = "ENTITY_DESTROY", e.PLAYER_KILL = "PLAYER_KILL", e.INVENTORY_SLOT_CLICK = "INVENTORY_SLOT_CLICK", e.INVENTORY_SET_CURSOR_ITEM = "INVENTORY_SET_CURSOR_ITEM", e.INVENTORY_STATUS_UPDATE = "INVENTORY_STATUS_UPDATE", e.INVENTORY_CRAFT = "INVENTORY_CRAFT", e.ENTITY_UPDATE_METADATAS = "ENTITY_UPDATE_METADATAS", e.SET_BLOCK_BREAK_PROGRESS = "SET_BLOCK_BREAK_PROGRESS", e.ENTITY_ACTION = "ENTITY_ACTION", e.UPDATE_CLIENT_HEALTH_AND_SHIELD = "UPDATE_CLIENT_HEALTH_AND_SHIELD", e.CLIENT_DAMAGE_RECEIVED = "CLIENT_DAMAGE_RECEIVED", e.ENTITY_DAMAGE = "ENTITY_DAMAGE", e.UPDATE_ITEM_USAGE = "UPDATE_ITEM_USAGE", e.MINIMAP_DATA = "MINIMAP_DATA", e.PLAYER_MOVE = "PLAYER_MOVE", e.HUD_CENTER_MESSAGE = "HUD_CENTER_MESSAGE", e.TOXIC_CIRCLE_INFO_SYNC = "TOXIC_CIRCLE_INFO_SYNC", e.TOXIC_CIRCLE_INFO = "TOXIC_CIRCLE_INFO", e.GAME_METADATA = "GAME_METADATA", e.GAME_OVER = "GAME_OVER", e.PLAYER_KICK = "PLAYER_KICK", e.GAME_JOIN_DENY = "GAME_JOIN_DENY", e.REQUEST_FOCUS = "REQUEST_FOCUS", e.REQUEST_UNFOCUS = "REQUEST_UNFOCUS", e.TERRAIN_LOADING_STATUS = "TERRAIN_LOADING_STATUS", e.RESOURCE_LOADING_STATUS_UPDATE = "RESOURCE_LOADING_STATUS_UPDATE", e.ITEM_HELP_MESSAGE_UPDATE = "ITEM_HELP_MESSAGE_UPDATE", e.ITEM_PICKUP_HINT_UPDATE = "ITEM_PICKUP_HINT_UPDATE", e.ITEM_PICKUP_REQUEST = "ITEM_PICKUP_REQUEST", e.REQUEST_INVENTORY_STATUS_UPDATE = "REQUEST_INVENTORY_UPDATE", e.CLIENT_PLAYER_DEATH = "CLIENT_PLAYER_DEATH", e.GLOBAL_PLAYER_METADATA = "GLOBAL_PLAYER_METADATA", e.REQUEST_LOADOUT = "REQUEST_LOADOUT", e.NOTIFICATION_MESSAGE_RECEIVED = "NOTIFICATION_MESSAGE_RECEIVED", e.PLAY_DIRECT_SOUND = "PLAY_DIRECT_SOUND", e.PLAY_POSITIONAL_SOUND = "PLAY_POSITIONAL_SOUND", e.KILL_MEDAL = "KILL_MEDAL", e.REQUEST_RESPAWN = "REQUEST_RESPAWN", e.SET_SHOW_SCOPE = "SET_SHOW_SCOPE", e.SCOREBOARD_TEAM_INFO = "SCOREBOARD_TEAM_INFO"
        }(n || (n = {})), t.a = n
    }, 84: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.FOOTSTEP_GRASS = 0] = "FOOTSTEP_GRASS", e[e.FOOTSTEP_SAND = 1] = "FOOTSTEP_SAND", e[e.FOOTSTEP_ROCKS = 2] = "FOOTSTEP_ROCKS", e[e.FOOTSTEP_BRICKS = 3] = "FOOTSTEP_BRICKS", e[e.FOOTSTEP_DIRT = 4] = "FOOTSTEP_DIRT", e[e.FOOTSTEP_LEAVES = 5] = "FOOTSTEP_LEAVES", e[e.ITEM_PICKUP = 6] = "ITEM_PICKUP", e[e.WATER_SPLASH = 7] = "WATER_SPLASH", e[e.FOOTSTEP_WATER = 8] = "FOOTSTEP_WATER", e[e.FOOTSTEP_WOOD = 9] = "FOOTSTEP_WOOD", e[e.GUN_SHOT_COMBAT_ASSAULT_RIFLE = 10] = "GUN_SHOT_COMBAT_ASSAULT_RIFLE", e[e.GUN_SHOT_TACTICAL_ASSAULT_RIFLE = 11] = "GUN_SHOT_TACTICAL_ASSAULT_RIFLE", e[e.GUN_SHOT_SURGE_ASSAULT_RIFLE = 12] = "GUN_SHOT_SURGE_ASSAULT_RIFLE", e[e.GUN_SHOT_STRIKE_PISTOL = 13] = "GUN_SHOT_STRIKE_PISTOL", e[e.GUN_SHOT_MAGNUM_PISTOL = 14] = "GUN_SHOT_MAGNUM_PISTOL", e[e.GUN_SHOT_BURST_SHOTGUN = 15] = "GUN_SHOT_BURST_SHOTGUN", e[e.GUN_SHOT_LIGHT_SUBMACHINE_GUN = 16] = "GUN_SHOT_LIGHT_SUBMACHINE_GUN", e[e.GUN_SHOT_COMPACT_SUBMACHINE_GUN = 17] = "GUN_SHOT_COMPACT_SUBMACHINE_GUN", e[e.GUN_SHOT_LIGHT_SNIPER_RIFLE = 18] = "GUN_SHOT_LIGHT_SNIPER_RIFLE", e[e.GUN_SHOT_HEAVY_SNIPER_RIFLE = 19] = "GUN_SHOT_HEAVY_SNIPER_RIFLE", e[e.GUN_RELOAD_START = 20] = "GUN_RELOAD_START", e[e.GUN_RELOAD_FINISH = 21] = "GUN_RELOAD_FINISH", e[e.HIT = 22] = "HIT", e[e.HIT_HEADSHOT = 23] = "HIT_HEADSHOT", e[e.KILL = 24] = "KILL", e[e.DAMAGE = 25] = "DAMAGE", e[e.ALERT_SHORT = 26] = "ALERT_SHORT", e[e.ALERT_LONG = 27] = "ALERT_LONG", e[e.ALERT_NEGATIVE = 28] = "ALERT_NEGATIVE", e[e.ALERT_AMBIENT = 29] = "ALERT_AMBIENT", e[e.ALERT_TICK = 30] = "ALERT_TICK", e[e.SPRAY = 31] = "SPRAY", e[e.CRATE_OPEN = 32] = "CRATE_OPEN"
        }(n || (n = {})), t.a = n
    }, 85: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.AIR = 0] = "AIR", e[e.GRASS = 1] = "GRASS", e[e.DIRT = 2] = "DIRT", e[e.SAND = 3] = "SAND", e[e.ROCK = 4] = "ROCK", e[e.LOG_UP = 5] = "LOG_UP", e[e.LEAVES = 6] = "LEAVES", e[e.LEAVES_WITH_RED_BERRIES = 7] = "LEAVES_WITH_RED_BERRIES", e[e.LEAVES_WITH_ORANGE_BERRIES = 8] = "LEAVES_WITH_ORANGE_BERRIES", e[e.BEDROCK = 9] = "BEDROCK", e[e.TEMPLE_BRICK = 10] = "TEMPLE_BRICK", e[e.MOSSY_TEMPLE_BRICK = 11] = "MOSSY_TEMPLE_BRICK", e[e.CRACKED_TEMPLE_BRICK = 12] = "CRACKED_TEMPLE_BRICK", e[e.MYSTICAL_TEMPLE_BRICK = 13] = "MYSTICAL_TEMPLE_BRICK", e[e.WATER = 14] = "WATER", e[e.WOODEN_CRATE = 15] = "WOODEN_CRATE", e[e.REINFORCED_IRON = 16] = "REINFORCED_IRON", e[e.EMERALD_ORE = 17] = "EMERALD_ORE", e[e.RUBY_ORE = 18] = "RUBY_ORE", e[e.SAPPHIRE_ORE = 19] = "SAPPHIRE_ORE", e[e.IRON_ORE = 20] = "IRON_ORE", e[e.WOOD = 21] = "WOOD", e[e.STONE_BRICK = 22] = "STONE_BRICK", e[e.WOODEN_CHEST = 23] = "WOODEN_CHEST", e[e.IRON_CHEST = 24] = "IRON_CHEST", e[e.GOLDEN_CHEST = 25] = "GOLDEN_CHEST", e[e.CACTUS_X = 26] = "CACTUS_X", e[e.CACTUS_Y = 27] = "CACTUS_Y", e[e.CACTUS_Z = 28] = "CACTUS_Z", e[e.SAND_TREASURE_MARKER = 29] = "SAND_TREASURE_MARKER", e[e.GRASS_TREASURE_MARKER = 30] = "GRASS_TREASURE_MARKER", e[e.SANDSTONE_BRICK = 31] = "SANDSTONE_BRICK", e[e.SANDSTONE_PILLAR = 32] = "SANDSTONE_PILLAR", e[e.SMOOTH_SANDSTONE_BRICK = 33] = "SMOOTH_SANDSTONE_BRICK", e[e.WORK_STATION = 34] = "WORK_STATION", e[e.SNOWY_GRASS = 35] = "SNOWY_GRASS", e[e.SAPPHIRE_STONE_BRICK = 36] = "SAPPHIRE_STONE_BRICK", e[e.RUBY_STONE_BRICK = 37] = "RUBY_STONE_BRICK", e[e.LOADOUT_STATION = 38] = "LOADOUT_STATION", e[e.BEDROCK_BRICK = 39] = "BEDROCK_BRICK", e[e.REINFORCED_RUBY = 40] = "REINFORCED_RUBY", e[e.REINFORCED_SAPPHIRE = 41] = "REINFORCED_SAPPHIRE", e[e.SULFUR_ORE = 42] = "SULFUR_ORE"
        }(n || (n = {})), t.a = n
    }, 86: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return mt
        })), a.d(t, "c", (function () {
            return At
        })), a.d(t, "d", (function () {
            return dt
        })), a.d(t, "f", (function () {
            return Nt
        })), a.d(t, "h", (function () {
            return ft
        })), a.d(t, "e", (function () {
            return Ct
        })), a.d(t, "g", (function () {
            return Lt
        })), a.d(t, "b", (function () {
            return yt
        }));
        var n = a(80), r = a(81), o = a(94), i = a(138), s = a(20), u = a(159), c = a(15), _ = a.n(c), l = a(21),
            S = a.n(l), O = a(79), I = a.n(O), p = a(76), E = a.n(p), R = a(34), T = a(85), M = a(88), h = a(120),
            m = a(26), A = a(153), d = a(82), N = a(83), f = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, s.a.BLOCK) || this)._blockType = t, a.itemName = o.a[a._blockType].name, a.itemDescription = o.a[a._blockType].description, a
                }

                E()(t, e);
                var a = t.prototype;
                return a.clone = function () {
                    var e = new this.constructor(this._blockType);
                    return e.itemName = this.itemName, e.itemDescription = this.itemDescription, e
                }, a.placeBlock = function (e, t, a) {
                    if (e.cooldownManager.requestCooldown(h.a.BLOCK_PLACE)) {
                        var n = t.getPlayerSelectedBlockSidePosition();
                        if (n) {
                            var r = [n];
                            this.placeBlocks(e, t, a, r)
                        }
                    }
                }, a.canInput = function (e) {
                    return !0
                }, a.placeWall = function (e, t, a) {
                    if (e.cooldownManager.requestCooldown(h.a.BLOCK_PLACE)) {
                        var n = t.getPlayerSelectedBlockSidePosition();
                        if (n) {
                            var r = [], o = Object(R.g)(t.getCameraDir(), Object(R.l)(0, 0, 1));
                            if (Math.abs(o) < .5) for (var i = -1; i <= 1; i++) for (var s = 0; s <= 2; s++) r.push(Object(R.l)(n.x, s + n.y, i + n.z)); else for (var u = -1; u <= 1; u++) for (var c = 0; c <= 2; c++) r.push(Object(R.l)(u + n.x, c + n.y, n.z));
                            this.placeBlocks(e, t, a, r)
                        }
                    }
                }, a.placeStairs = function (e, t, a) {
                    if (e.cooldownManager.requestCooldown(h.a.BLOCK_PLACE)) {
                        var n = t.getPlayerSelectedBlockSidePosition();
                        if (n) {
                            var r = [], o = t.getPitchYaw().y;
                            if (o >= -Math.PI / 4 && o <= Math.PI / 4) for (var i = -1; i <= 1; i++) r.push(Object(R.l)(i + n.x, 0 + n.y, 0 + n.z)), r.push(Object(R.l)(i + n.x, 0 + n.y, -1 + n.z)), r.push(Object(R.l)(i + n.x, 1 + n.y, -1 + n.z)), r.push(Object(R.l)(i + n.x, 1 + n.y, -2 + n.z)); else if (o >= -Math.PI / 4 * 3 && o < -Math.PI / 4) for (var s = -1; s <= 1; s++) r.push(Object(R.l)(0 + n.x, 0 + n.y, s + n.z)), r.push(Object(R.l)(1 + n.x, 0 + n.y, s + n.z)), r.push(Object(R.l)(1 + n.x, 1 + n.y, s + n.z)), r.push(Object(R.l)(2 + n.x, 1 + n.y, s + n.z)); else if (o < -Math.PI / 4 * 3 || o >= Math.PI / 4 * 3) for (var u = -1; u <= 1; u++) r.push(Object(R.l)(u + n.x, 0 + n.y, 0 + n.z)), r.push(Object(R.l)(u + n.x, 0 + n.y, 1 + n.z)), r.push(Object(R.l)(u + n.x, 1 + n.y, 1 + n.z)), r.push(Object(R.l)(u + n.x, 1 + n.y, 2 + n.z)); else for (var c = -1; c <= 1; c++) r.push(Object(R.l)(0 + n.x, 0 + n.y, c + n.z)), r.push(Object(R.l)(-1 + n.x, 0 + n.y, c + n.z)), r.push(Object(R.l)(-1 + n.x, 1 + n.y, c + n.z)), r.push(Object(R.l)(-2 + n.x, 1 + n.y, c + n.z));
                            this.placeBlocks(e, t, a, r)
                        }
                    }
                }, a.placeBlocks = function (e, t, a, n) {
                    if (t.controlsRenderer.blockEditGuideRenderer.validBlocksAABB(n)) {
                        for (var r = 0, o = 0; o < n.length; o++) {
                            var i = n[o], s = t.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(i.x, i.y, i.z);
                            s !== T.a.AIR && s !== T.a.WATER || ++r
                        }
                        if (e.inventory.hasItems([{type: this.id, count: r}]) && (this.use(r), a)) {
                            for (var u = 0; u < n.length; u++) {
                                var c = n[u],
                                    _ = t.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(c.x, c.y, c.z);
                                _ !== T.a.AIR && _ !== T.a.WATER || t.predictBlockEdit(c.x, c.y, c.z, this._blockType)
                            }
                            t.controlsRenderer.playBlockPlaceAnimation()
                        }
                    }
                }, a.onRightUp = function (e, t, a) {
                    e.buildMode === A.a.BLOCK ? e.buildMode = A.a.WALL : e.buildMode === A.a.WALL ? e.buildMode = A.a.STAIRS : e.buildMode === A.a.STAIRS && (e.buildMode = A.a.BLOCK), d.a.emit(N.a.ITEM_HELP_MESSAGE_UPDATE, !0, this.getBlockPlaceHelpMessage(e))
                }, a.onLeftClick = function (e, t, a) {
                    e.buildMode === A.a.WALL ? this.placeWall(e, t, a) : e.buildMode === A.a.BLOCK ? this.placeBlock(e, t, a) : e.buildMode === A.a.STAIRS && this.placeStairs(e, t, a)
                }, a.getBlockPlaceHelpMessage = function (e) {
                    var t = "Unknown";
                    return e.buildMode === A.a.WALL ? t = "Wall" : e.buildMode === A.a.BLOCK ? t = "Block" : e.buildMode === A.a.STAIRS && (t = "Stairs"), "Right click to switch mode. Current mode: " + t
                }, a.onActive = function (e, t, a) {
                    a && d.a.emit(N.a.ITEM_HELP_MESSAGE_UPDATE, !0, this.getBlockPlaceHelpMessage(e))
                }, a.onInactive = function (e, t, a) {
                    a && d.a.emit(N.a.ITEM_HELP_MESSAGE_UPDATE, !1, "")
                }, a.generateModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", mt(this._blockType, .4 * m.a.BLOCK_SIZE));
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThirdPersonModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        var a;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(.12, 0, -.02), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateFirstPersonModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        var a;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(-.12, 0, .1), a.rotation.set(.2, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, 0, -1), n.rotation.set(Math.PI / 6, Math.PI / 4, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        var a;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(.7, .7, .7), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), I()(t, [{
                    key: "id", get: function () {
                        return this.type + this._blockType
                    }
                }]), t
            }(M.a), C = a(162), L = a(108), y = a(78), U = a(25), g = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMBAT_ASSAULT_RIFLE_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.7))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(L.a), P = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMBAT_ASSAULT_RIFLE_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.6))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(L.a), v = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMBAT_ASSAULT_RIFLE_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.5))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(L.a), F = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMBAT_ASSAULT_RIFLE_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(L.a), G = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMBAT_ASSAULT_RIFLE_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.3))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(L.a), H = a(163), b = a(109), x = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.TACTICAL_ASSAULT_RIFLE_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.5))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(b.a), D = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.TACTICAL_ASSAULT_RIFLE_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(b.a), k = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.TACTICAL_ASSAULT_RIFLE_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.3))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(b.a), B = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.TACTICAL_ASSAULT_RIFLE_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.2))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(b.a), w = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.TACTICAL_ASSAULT_RIFLE_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.1))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(b.a), Y = a(164), K = a(110), V = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SURGE_ASSAULT_RIFLE_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.7))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(K.a), W = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SURGE_ASSAULT_RIFLE_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.6))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(K.a), j = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SURGE_ASSAULT_RIFLE_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.5))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(K.a), Z = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SURGE_ASSAULT_RIFLE_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(K.a), z = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SURGE_ASSAULT_RIFLE_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(K.a), X = a(165), q = a(111), J = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.STRIKE_PISTOL_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.1))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(q.a), Q = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.STRIKE_PISTOL_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(q.a), $ = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.STRIKE_PISTOL_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(.9))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(q.a), ee = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.STRIKE_PISTOL_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(.8))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(q.a), te = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.STRIKE_PISTOL_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(.7))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(q.a), ae = a(166), ne = a(112), re = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.MAGNUM_PISTOL_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.2))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(ne.a), oe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.MAGNUM_PISTOL_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.1))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(ne.a), ie = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.MAGNUM_PISTOL_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(ne.a), se = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.MAGNUM_PISTOL_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(.9))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(ne.a), ue = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.MAGNUM_PISTOL_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(.8))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(ne.a), ce = a(167), _e = a(113), le = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.BURST_SHOTGUN_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.7))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(_e.a), Se = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.BURST_SHOTGUN_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.6))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(_e.a), Oe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.BURST_SHOTGUN_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.5))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(_e.a), Ie = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.BURST_SHOTGUN_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(_e.a), pe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.BURST_SHOTGUN_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.3))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(_e.a), Ee = a(168), Re = a(114), Te = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SUBMACHINE_GUN_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(Re.a), Me = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SUBMACHINE_GUN_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.3))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(Re.a), he = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SUBMACHINE_GUN_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.2))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(Re.a), me = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SUBMACHINE_GUN_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.1))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(Re.a), Ae = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SUBMACHINE_GUN_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(Re.a), de = a(169), Ne = a(115), fe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMPACT_SUBMACHINE_GUN_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(1.6))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(Ne.a), Ce = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMPACT_SUBMACHINE_GUN_RARE) || this).setReloadTime(Math.floor(Object(y.c)(1.5))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(Ne.a), Le = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMPACT_SUBMACHINE_GUN_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(1.4))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(Ne.a), ye = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMPACT_SUBMACHINE_GUN_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(1.3))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(Ne.a), Ue = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.COMPACT_SUBMACHINE_GUN_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.2))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(Ne.a), ge = a(170), Pe = a(116), ve = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SNIPER_RIFLE_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(2.3))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(Pe.a), Fe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SNIPER_RIFLE_RARE) || this).setReloadTime(Math.floor(Object(y.c)(2.2))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(Pe.a), Ge = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SNIPER_RIFLE_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(2.1))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(Pe.a), He = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SNIPER_RIFLE_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(2))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(Pe.a), be = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.LIGHT_SNIPER_RIFLE_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.9))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(Pe.a), xe = a(171), De = a(117), ke = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.HEAVY_SNIPER_RIFLE_UNCOMMON) || this).setReloadTime(Math.floor(Object(y.c)(2.3))), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(De.a), Be = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.HEAVY_SNIPER_RIFLE_RARE) || this).setReloadTime(Math.floor(Object(y.c)(2.2))), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(De.a), we = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.HEAVY_SNIPER_RIFLE_EPIC) || this).setReloadTime(Math.floor(Object(y.c)(2.1))), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(De.a), Ye = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.HEAVY_SNIPER_RIFLE_LEGENDARY) || this).setReloadTime(Math.floor(Object(y.c)(2))), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(De.a), Ke = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.HEAVY_SNIPER_RIFLE_MYTHIC) || this).setReloadTime(Math.floor(Object(y.c)(1.9))), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t
            }(De.a), Ve = function (e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this).setMaxStackSize(1), a.setMeleeDamage(10), a.setMeleeRate(Object(y.c)(.75)), a.setBlockBreakPower(.01), a.setSkinAOMap(r.a.shovelAOTexture), a.itemName = "Shovel", a.itemDescription = "Efficient tool for digging blocks", a
                }

                E()(t, e);
                var a = t.prototype;
                return a.playMeleeAnimation = function (e) {
                    e.controlsRenderer.playShovelHitAnimation()
                }, a.playBlockBreakAnimation = function (e) {
                    e.controlsRenderer.playShovelAnimation()
                }, a.getModelID = function () {
                    return s.a.SHOVEL_COMMON
                }, a.generateFirstPersonModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        var a;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, 0, 0), a.scale.set(.7, .7, .7), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(.1, -.1, -1), n.rotation.set(0, 0, Math.PI / 4), n.scale.set(.7, .7, .7), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), a.generateEntityModel = function () {
                    var e = S()(_.a.mark((function e(t) {
                        var a;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(t);
                                case 2:
                                    return (a = e.sent).position.set(0, 0, 0), a.rotation.set(Math.PI / 8, Math.random() * Math.PI * 2, 0), a.scale.set(.7, .7, .7), e.abrupt("return", a);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(a(139).a), We = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_COMMON) || this).setMeleeDamage(10), t.setBlockBreakPower(Object(y.d)(1.3)), t.setDurability(2400), t.setItemTier(U.a.COMMON), t
                }

                return E()(t, e), t
            }(Ve), je = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_UNCOMMON) || this).setMeleeDamage(13), t.setBlockBreakPower(Object(y.d)(1.9)), t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t
            }(Ve), Ze = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_RARE) || this).setMeleeDamage(16), t.setBlockBreakPower(Object(y.d)(3.1)), t.setItemTier(U.a.RARE), t
                }

                return E()(t, e), t
            }(Ve), ze = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_EPIC) || this).setMeleeDamage(19), t.setBlockBreakPower(Object(y.d)(5.5)), t.setItemTier(U.a.EPIC), t
                }

                return E()(t, e), t
            }(Ve), Xe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_LEGENDARY) || this).setMeleeDamage(22), t.setBlockBreakPower(Object(y.d)(10.3)), t.setItemTier(U.a.LEGENDARY), t
                }

                return E()(t, e), t
            }(Ve), qe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SHOVEL_MYTHIC) || this).setMeleeDamage(22), t.setBlockBreakPower(Object(y.d)(10.3)), t.setItemTier(U.a.MYTHIC), t
                }

                return E()(t, e), t.prototype.getBlockBreakPower = function (t) {
                    return o.a[t].hardness >= 999999 ? Object(y.d)(999999) : e.prototype.getBlockBreakPower.call(this, t)
                }, t
            }(Ve), Je = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.RUBY) || this).itemName = "Ruby Gem", t.itemDescription = "Precious red gem from the red team", t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.07, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), Qe = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.SAPPHIRE) || this).itemName = "Sapphire Gem", t.itemDescription = "Precious blue gem from the blue team", t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.06, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), $e = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.EMERALD) || this).itemName = "Emerald Gem", t.itemDescription = "Precious green gem found around the map", t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.08, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), et = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.IRON) || this).itemName = "Iron", t.itemDescription = "Raw material that is used in various crafting recipes", t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.06, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), tt = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.AMMO_PISTOL) || this).itemName = "Pistol Ammo", t.itemDescription = "Ammo for pistols", t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.09, -1), n.rotation.set(0, 0, 0), n.rotateY(-Math.PI / 2), n.scale.set(2, 2, 2), e.abrupt("return", n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), at = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.AMMO_SHOTGUN) || this).itemName = "Shotgun Ammo", t.itemDescription = "Ammo for shotguns", t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.1, -1), n.rotation.set(0, 0, 0), n.rotateY(-Math.PI / 2), n.scale.set(2, 2, 2), e.abrupt("return", n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), nt = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.AMMO_ASSAULT_RIFLE) || this).itemName = "Assault Rifle Ammo", t.itemDescription = "Ammo for assault rifles", t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(-.02, -.14, -1), n.rotation.set(0, 0, 0), n.rotateY(-Math.PI / 2), n.scale.set(1.7, 1.7, 1.7), e.abrupt("return", n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), rt = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.AMMO_SUBMACHINE_GUN) || this).itemName = "Submachine Gun Ammo", t.itemDescription = "Ammo for submachine guns", t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(0, -.11, -1), n.rotation.set(0, 0, 0), n.rotateY(-Math.PI / 2), n.scale.set(1.8, 1.8, 1.8), e.abrupt("return", n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), ot = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, s.a.AMMO_SNIPER_RIFLE) || this).itemName = "Sniper Rifle Ammo", t.itemDescription = "Ammo for sniper rifles", t.setItemTier(U.a.UNCOMMON), t
                }

                return E()(t, e), t.prototype.generateThumbnailModel = function () {
                    var e = S()(_.a.mark((function e(t, a) {
                        var n;
                        return _.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.generateModel(a);
                                case 2:
                                    return (n = e.sent).position.set(-.02, -.09, -1), n.rotation.set(0, 0, 0), n.rotateY(-Math.PI / 2), n.scale.set(1.3, 1.3, 1.3), e.abrupt("return", n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), t
            }(M.a), it = a(106), st = a(96), ut = a(104), ct = a(95);

        function _t(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return lt(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return lt(e, t)
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

        function lt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var St = function (e) {
            function t(t) {
                var a;
                return (a = e.call(this, t) || this)._isUsing = void 0, a._shieldRegen = void 0, a._healthRegen = void 0, a._maxShieldRegen = void 0, a._maxHealthRegen = void 0, a._consumptionTime = void 0, a._shieldRegen = 0, a._healthRegen = 25, a._maxShieldRegen = 100, a._maxHealthRegen = 100, a._consumptionTime = Math.floor(Object(y.c)(1)), a._isUsing = !1, a
            }

            E()(t, e);
            var a = t.prototype;
            return a.clone = function () {
                var t = e.prototype.clone.call(this);
                return t._isUsing = this._isUsing, t
            }, a.onUpdateMetadata = function (t) {
                e.prototype.onUpdateMetadata.call(this, t);
                for (var a, n = _t(t); !(a = n()).done;) {
                    var r = a.value;
                    switch (r.metadataType) {
                        case ut.a.ITEM_IS_USING:
                            this._isUsing = 1 === r.value, this.updateItemUsageProgress()
                    }
                }
            }, a.startRegen = function (e, t, a) {
                this._healthRegen > 0 && e.health >= this._maxHealthRegen || this._shieldRegen > 0 && e.shield >= this._maxShieldRegen || this._isUsing || (this._isUsing = !0, e.cooldownManager.requestCooldown(new it.a(st.a.ITEM_USE, this._consumptionTime)), this.updateItemUsageProgress(e))
            }, a.updateItemUsageProgress = function (e) {
                if (!this._isUsing || void 0 !== e && !e.cooldownManager.hasCooldown(st.a.ITEM_USE)) d.a.emit(N.a.UPDATE_ITEM_USAGE, s.a.EMPTY, U.a.COMMON, "", 0); else if (void 0 !== e) {
                    var t = e.cooldownManager.getCooldown(st.a.ITEM_USE) - e.physicsStep.seqId,
                        a = this._consumptionTime, n = (a - t) / a * 100;
                    d.a.emit(N.a.UPDATE_ITEM_USAGE, this.id, this.itemTier, "Using " + this.displayName, n)
                }
            }, a.cancelRegen = function (e, t, a) {
                this._isUsing && (this._isUsing = !1, e.cooldownManager.resetCooldown(st.a.ITEM_USE), this.updateItemUsageProgress(e))
            }, a.onItemHoldingUpdate = function (e, t, a, n) {
                this._isUsing && (t.physicsStep.controlState === ct.a.RUNNING ? this.cancelRegen(t, a, n) : t.cooldownManager.hasCooldown(st.a.ITEM_USE) ? t.cooldownManager.cooldownExpired(st.a.ITEM_USE) && (this._isUsing = !1, t.shield = Math.min(this._maxShieldRegen, t.shield + this._shieldRegen), t.health = Math.min(this._maxHealthRegen, t.health + this._healthRegen), this.use(1)) : this._isUsing = !1, this.updateItemUsageProgress(t))
            }, a.onInactive = function (t, a, n) {
                e.prototype.onInactive.call(this, t, a, n), this.cancelRegen(t, a, n)
            }, a.onInput = function (t, a, n, r, o) {
                r.jump || r.moveBackward || r.moveForward || r.moveLeft || r.moveRight ? this.cancelRegen(t, a, o) : e.prototype.onInput.call(this, t, a, n, r, o)
            }, a.onRightClick = function (e, t, a) {
                this.startRegen(e, t, a)
            }, a.onLeftClick = function (e, t, a) {
                this.startRegen(e, t, a)
            }, a.setShieldRegen = function (e) {
                this._shieldRegen = e
            }, a.setHealthRegen = function (e) {
                this._healthRegen = e
            }, a.setMaxShieldRegen = function (e) {
                this._maxShieldRegen = e
            }, a.setMaxHealthRegen = function (e) {
                this._maxHealthRegen = e
            }, a.setConsumptionTime = function (e) {
                this._consumptionTime = e
            }, I()(t, [{
                key: "shieldRegen", get: function () {
                    return this._shieldRegen
                }
            }, {
                key: "healthRegen", get: function () {
                    return this._healthRegen
                }
            }, {
                key: "maxShieldRegen", get: function () {
                    return this._maxShieldRegen
                }
            }, {
                key: "maxHealthRegen", get: function () {
                    return this._maxHealthRegen
                }
            }, {
                key: "consumptionTime", get: function () {
                    return this._consumptionTime
                }
            }]), t
        }(M.a), Ot = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.MINI_SHIELD_POTION) || this).setShieldRegen(25), t.setHealthRegen(0), t.setMaxShieldRegen(75), t.setConsumptionTime(Math.floor(Object(y.c)(2))), t.setMaxStackSize(3), t.itemName = "Mini Shield Potion", t.itemDescription = "Mysterious liquid that gives you 25 (up to 75) shield points", t.setItemTier(U.a.UNCOMMON), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, -.06, .06), a.rotation.set(0, 0, 0), a.scale.set(1.1, 1.1, 1.1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.12, -.04, -.04), a.rotation.set(0, 0, 0), a.scale.set(1.1, 1.1, 1.1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.13, -1), n.rotation.set(0, 0, 0), n.scale.set(1.1, 1.1, 1.1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), It = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.ADVANCED_SHIELD_POTION) || this).setShieldRegen(50), t.setHealthRegen(0), t.setConsumptionTime(Math.floor(Object(y.c)(3))), t.setMaxStackSize(2), t.itemName = "Advanced Shield Potion", t.itemDescription = "Powerful liquid that gives you 50 (up to 100) shield points", t.setItemTier(U.a.RARE), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, -.06, .06), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.12, -.04, -.04), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.13, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), pt = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.ULTIMATE_SHIELD_POTION) || this).setShieldRegen(100), t.setHealthRegen(0), t.setConsumptionTime(Math.floor(Object(y.c)(5))), t.setMaxStackSize(1), t.itemName = "Ultimate Shield Potion", t.itemDescription = "Mystical liquid that gives you 100 (up to 100) shield points", t.setItemTier(U.a.EPIC), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, -.06, .06), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.12, -.04, -.04), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.15, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), Et = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.MEDICINE_PILLS) || this).setShieldRegen(0), t.setHealthRegen(25), t.setMaxHealthRegen(75), t.setConsumptionTime(Math.floor(Object(y.c)(2))), t.setMaxStackSize(3), t.setItemTier(U.a.UNCOMMON), t.itemName = "Medicine Pills", t.itemDescription = "Healthy pills that heals you for 25 (up to 75) health points", t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.1, 0, .06), a.rotation.set(0, 0, 0), a.scale.set(1.2, 1.2, 1.2), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.14, -.04, -.04), a.rotation.set(0, 0, 0), a.scale.set(1.2, 1.2, 1.2), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.05, -1), n.rotation.set(0, 0, 0), n.scale.set(1.2, 1.2, 1.2), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), Rt = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.FIRST_AID_KIT) || this).setShieldRegen(0), t.setHealthRegen(100), t.setConsumptionTime(Math.floor(Object(y.c)(5))), t.setMaxStackSize(1), t.itemName = "First Aid Kit", t.itemDescription = "Emergency health kit that heals you for 100 (up to 100) health points", t.setItemTier(U.a.EPIC), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, 0, .06), a.rotation.set(Math.PI / 8, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.12, -.04, -.04), a.rotation.set(0, 0, 0), a.scale.set(.9, .9, .9), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.01, -1), n.rotation.set(Math.PI / 2, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), Tt = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.RED_BERRY) || this).setShieldRegen(0), t.setHealthRegen(25), t.setMaxHealthRegen(50), t.setConsumptionTime(Math.floor(Object(y.c)(1))), t.setMaxStackSize(12), t.itemName = "Red Berry", t.itemDescription = "Natural food found on trees and bushes. Restores merely 25 (up to 50) health points. Can be used to craft more advanced healing items.", t.setItemTier(U.a.COMMON), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, -.06, .02), a.rotation.set(0, 0, 0), a.scale.set(1.1, 1.1, 1.1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.13, -.06, -.02), a.rotation.set(0, 0, 0), a.scale.set(1.2, 1.2, 1.2), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(.04, -.14, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), Mt = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.ORANGE_BERRY) || this).setShieldRegen(25), t.setHealthRegen(0), t.setMaxShieldRegen(25), t.setConsumptionTime(Math.floor(Object(y.c)(1))), t.setMaxStackSize(12), t.itemName = "Orange Berry", t.itemDescription = "Natural food found on trees and bushes. Restores merely 25 (up to 25) shield points. Can be used to craft more advanced healing items.", t.setItemTier(U.a.COMMON), t
            }

            E()(t, e);
            var a = t.prototype;
            return a.generateFirstPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(-.12, -.06, .02), a.rotation.set(0, 0, 0), a.scale.set(1.1, 1.1, 1.1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThirdPersonModel = function () {
                var e = S()(_.a.mark((function e(t) {
                    var a;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(.13, -.06, -.02), a.rotation.set(0, 0, 0), a.scale.set(1.2, 1.2, 1.2), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), a.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(.04, -.14, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(St), ht = function (e) {
            function t() {
                var t;
                return (t = e.call(this, s.a.SULFUR) || this).itemName = "Sulfur", t.itemDescription = "Crucial chemical used as a fuel in explosives", t
            }

            return E()(t, e), t.prototype.generateThumbnailModel = function () {
                var e = S()(_.a.mark((function e(t, a) {
                    var n;
                    return _.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, -.08, -1), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t
        }(M.a), mt = function (e, t) {
            var a = [], s = [], u = [];
            a.push(.5 * t, .5 * t, .5 * t), a.push(-.5 * t, .5 * t, .5 * t), a.push(-.5 * t, .5 * t, -.5 * t), a.push(.5 * t, .5 * t, -.5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.top), a.push(.5 * t, -.5 * t, -.5 * t), a.push(-.5 * t, -.5 * t, -.5 * t), a.push(-.5 * t, -.5 * t, .5 * t), a.push(.5 * t, -.5 * t, .5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.bottom), a.push(.5 * t, .5 * t, .5 * t), a.push(.5 * t, .5 * t, -.5 * t), a.push(.5 * t, -.5 * t, -.5 * t), a.push(.5 * t, -.5 * t, .5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.left), a.push(-.5 * t, .5 * t, -.5 * t), a.push(-.5 * t, .5 * t, .5 * t), a.push(-.5 * t, -.5 * t, .5 * t), a.push(-.5 * t, -.5 * t, -.5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.right), a.push(-.5 * t, .5 * t, .5 * t), a.push(.5 * t, .5 * t, .5 * t), a.push(.5 * t, -.5 * t, .5 * t), a.push(-.5 * t, -.5 * t, .5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.front), a.push(.5 * t, .5 * t, -.5 * t), a.push(-.5 * t, .5 * t, -.5 * t), a.push(-.5 * t, -.5 * t, -.5 * t), a.push(.5 * t, -.5 * t, -.5 * t), s.push(a.length / 3 - 3, a.length / 3 - 4, a.length / 3 - 1), s.push(a.length / 3 - 1, a.length / 3 - 2, a.length / 3 - 3), Object(i.c)(u, o.a[e].textures.back);
            var c = new n.l;
            c.setAttribute("position", new n.v(a, 3)), c.setIndex(new n.Lb(s, 1)), c.setAttribute("uv", new n.v(u, 2)), c.computeVertexNormals();
            var _ = new n.Z({reflectivity: 0, metalness: 0, roughness: 1, map: r.a.blockTexture}), l = new n.X(c, _);
            return l.name = "BlockModel", l
        }, At = function (e) {
            if (e >= s.a.BLOCK && e <= s.a.BLOCK + 255) return new f(e - s.a.BLOCK);
            switch (e) {
                case s.a.SHOVEL_COMMON:
                    return new We;
                case s.a.SHOVEL_UNCOMMON:
                    return new je;
                case s.a.SHOVEL_RARE:
                    return new Ze;
                case s.a.SHOVEL_EPIC:
                    return new ze;
                case s.a.SHOVEL_LEGENDARY:
                    return new Xe;
                case s.a.SHOVEL_MYTHIC:
                    return new qe;
                case s.a.COMBAT_ASSAULT_RIFLE_COMMON:
                    return new C.a;
                case s.a.COMBAT_ASSAULT_RIFLE_UNCOMMON:
                    return new g;
                case s.a.COMBAT_ASSAULT_RIFLE_RARE:
                    return new P;
                case s.a.COMBAT_ASSAULT_RIFLE_EPIC:
                    return new v;
                case s.a.COMBAT_ASSAULT_RIFLE_LEGENDARY:
                    return new F;
                case s.a.COMBAT_ASSAULT_RIFLE_MYTHIC:
                    return new G;
                case s.a.TACTICAL_ASSAULT_RIFLE_COMMON:
                    return new H.a;
                case s.a.TACTICAL_ASSAULT_RIFLE_UNCOMMON:
                    return new x;
                case s.a.TACTICAL_ASSAULT_RIFLE_RARE:
                    return new D;
                case s.a.TACTICAL_ASSAULT_RIFLE_EPIC:
                    return new k;
                case s.a.TACTICAL_ASSAULT_RIFLE_LEGENDARY:
                    return new B;
                case s.a.TACTICAL_ASSAULT_RIFLE_MYTHIC:
                    return new w;
                case s.a.SURGE_ASSAULT_RIFLE_COMMON:
                    return new Y.a;
                case s.a.SURGE_ASSAULT_RIFLE_UNCOMMON:
                    return new V;
                case s.a.SURGE_ASSAULT_RIFLE_RARE:
                    return new W;
                case s.a.SURGE_ASSAULT_RIFLE_EPIC:
                    return new j;
                case s.a.SURGE_ASSAULT_RIFLE_LEGENDARY:
                    return new Z;
                case s.a.SURGE_ASSAULT_RIFLE_MYTHIC:
                    return new z;
                case s.a.STRIKE_PISTOL_COMMON:
                    return new X.a;
                case s.a.STRIKE_PISTOL_UNCOMMON:
                    return new J;
                case s.a.STRIKE_PISTOL_RARE:
                    return new Q;
                case s.a.STRIKE_PISTOL_EPIC:
                    return new $;
                case s.a.STRIKE_PISTOL_LEGENDARY:
                    return new ee;
                case s.a.STRIKE_PISTOL_MYTHIC:
                    return new te;
                case s.a.MAGNUM_PISTOL_COMMON:
                    return new ae.a;
                case s.a.MAGNUM_PISTOL_UNCOMMON:
                    return new re;
                case s.a.MAGNUM_PISTOL_RARE:
                    return new oe;
                case s.a.MAGNUM_PISTOL_EPIC:
                    return new ie;
                case s.a.MAGNUM_PISTOL_LEGENDARY:
                    return new se;
                case s.a.MAGNUM_PISTOL_MYTHIC:
                    return new ue;
                case s.a.BURST_SHOTGUN_COMMON:
                    return new ce.a;
                case s.a.BURST_SHOTGUN_UNCOMMON:
                    return new le;
                case s.a.BURST_SHOTGUN_RARE:
                    return new Se;
                case s.a.BURST_SHOTGUN_EPIC:
                    return new Oe;
                case s.a.BURST_SHOTGUN_LEGENDARY:
                    return new Ie;
                case s.a.BURST_SHOTGUN_MYTHIC:
                    return new pe;
                case s.a.LIGHT_SUBMACHINE_GUN_COMMON:
                    return new Ee.a;
                case s.a.LIGHT_SUBMACHINE_GUN_UNCOMMON:
                    return new Te;
                case s.a.LIGHT_SUBMACHINE_GUN_RARE:
                    return new Me;
                case s.a.LIGHT_SUBMACHINE_GUN_EPIC:
                    return new he;
                case s.a.LIGHT_SUBMACHINE_GUN_LEGENDARY:
                    return new me;
                case s.a.LIGHT_SUBMACHINE_GUN_MYTHIC:
                    return new Ae;
                case s.a.COMPACT_SUBMACHINE_GUN_COMMON:
                    return new de.a;
                case s.a.COMPACT_SUBMACHINE_GUN_UNCOMMON:
                    return new fe;
                case s.a.COMPACT_SUBMACHINE_GUN_RARE:
                    return new Ce;
                case s.a.COMPACT_SUBMACHINE_GUN_EPIC:
                    return new Le;
                case s.a.COMPACT_SUBMACHINE_GUN_LEGENDARY:
                    return new ye;
                case s.a.COMPACT_SUBMACHINE_GUN_MYTHIC:
                    return new Ue;
                case s.a.LIGHT_SNIPER_RIFLE_COMMON:
                    return new ge.a;
                case s.a.LIGHT_SNIPER_RIFLE_UNCOMMON:
                    return new ve;
                case s.a.LIGHT_SNIPER_RIFLE_RARE:
                    return new Fe;
                case s.a.LIGHT_SNIPER_RIFLE_EPIC:
                    return new Ge;
                case s.a.LIGHT_SNIPER_RIFLE_LEGENDARY:
                    return new He;
                case s.a.LIGHT_SNIPER_RIFLE_MYTHIC:
                    return new be;
                case s.a.HEAVY_SNIPER_RIFLE_COMMON:
                    return new xe.a;
                case s.a.HEAVY_SNIPER_RIFLE_UNCOMMON:
                    return new ke;
                case s.a.HEAVY_SNIPER_RIFLE_RARE:
                    return new Be;
                case s.a.HEAVY_SNIPER_RIFLE_EPIC:
                    return new we;
                case s.a.HEAVY_SNIPER_RIFLE_LEGENDARY:
                    return new Ye;
                case s.a.HEAVY_SNIPER_RIFLE_MYTHIC:
                    return new Ke;
                case s.a.RUBY:
                    return new Je;
                case s.a.SAPPHIRE:
                    return new Qe;
                case s.a.EMERALD:
                    return new $e;
                case s.a.IRON:
                    return new et;
                case s.a.SULFUR:
                    return new ht;
                case s.a.AMMO_PISTOL:
                    return new tt;
                case s.a.AMMO_SHOTGUN:
                    return new at;
                case s.a.AMMO_ASSAULT_RIFLE:
                    return new nt;
                case s.a.AMMO_SUBMACHINE_GUN:
                    return new rt;
                case s.a.AMMO_SNIPER_RIFLE:
                    return new ot;
                case s.a.MINI_SHIELD_POTION:
                    return new Ot;
                case s.a.ADVANCED_SHIELD_POTION:
                    return new It;
                case s.a.ULTIMATE_SHIELD_POTION:
                    return new pt;
                case s.a.MEDICINE_PILLS:
                    return new Et;
                case s.a.FIRST_AID_KIT:
                    return new Rt;
                case s.a.RED_BERRY:
                    return new Tt;
                case s.a.ORANGE_BERRY:
                    return new Mt;
                case s.a.EMPTY:
                default:
                    return new u.a
            }
        }, dt = function (e) {
            return e === s.a.AMMO_PISTOL || e === s.a.AMMO_SHOTGUN || e === s.a.AMMO_ASSAULT_RIFLE || e === s.a.AMMO_SUBMACHINE_GUN || e === s.a.AMMO_SNIPER_RIFLE
        }, Nt = function (e) {
            return e === s.a.STRIKE_PISTOL_COMMON || e === s.a.STRIKE_PISTOL_UNCOMMON || e === s.a.STRIKE_PISTOL_RARE || e === s.a.STRIKE_PISTOL_EPIC || e === s.a.STRIKE_PISTOL_LEGENDARY || e === s.a.STRIKE_PISTOL_MYTHIC || e === s.a.MAGNUM_PISTOL_COMMON || e === s.a.MAGNUM_PISTOL_UNCOMMON || e === s.a.MAGNUM_PISTOL_RARE || e === s.a.MAGNUM_PISTOL_EPIC || e === s.a.MAGNUM_PISTOL_LEGENDARY || e === s.a.MAGNUM_PISTOL_MYTHIC || e === s.a.COMBAT_ASSAULT_RIFLE_COMMON || e === s.a.COMBAT_ASSAULT_RIFLE_UNCOMMON || e === s.a.COMBAT_ASSAULT_RIFLE_RARE || e === s.a.COMBAT_ASSAULT_RIFLE_EPIC || e === s.a.COMBAT_ASSAULT_RIFLE_LEGENDARY || e === s.a.COMBAT_ASSAULT_RIFLE_MYTHIC || e === s.a.TACTICAL_ASSAULT_RIFLE_COMMON || e === s.a.TACTICAL_ASSAULT_RIFLE_UNCOMMON || e === s.a.TACTICAL_ASSAULT_RIFLE_RARE || e === s.a.TACTICAL_ASSAULT_RIFLE_EPIC || e === s.a.TACTICAL_ASSAULT_RIFLE_LEGENDARY || e === s.a.TACTICAL_ASSAULT_RIFLE_MYTHIC || e === s.a.SURGE_ASSAULT_RIFLE_COMMON || e === s.a.SURGE_ASSAULT_RIFLE_UNCOMMON || e === s.a.SURGE_ASSAULT_RIFLE_RARE || e === s.a.SURGE_ASSAULT_RIFLE_EPIC || e === s.a.SURGE_ASSAULT_RIFLE_LEGENDARY || e === s.a.SURGE_ASSAULT_RIFLE_MYTHIC || e === s.a.LIGHT_SUBMACHINE_GUN_COMMON || e === s.a.LIGHT_SUBMACHINE_GUN_UNCOMMON || e === s.a.LIGHT_SUBMACHINE_GUN_RARE || e === s.a.LIGHT_SUBMACHINE_GUN_EPIC || e === s.a.LIGHT_SUBMACHINE_GUN_LEGENDARY || e === s.a.LIGHT_SUBMACHINE_GUN_MYTHIC || e === s.a.COMPACT_SUBMACHINE_GUN_COMMON || e === s.a.COMPACT_SUBMACHINE_GUN_UNCOMMON || e === s.a.COMPACT_SUBMACHINE_GUN_RARE || e === s.a.COMPACT_SUBMACHINE_GUN_EPIC || e === s.a.COMPACT_SUBMACHINE_GUN_LEGENDARY || e === s.a.COMPACT_SUBMACHINE_GUN_MYTHIC || e === s.a.BURST_SHOTGUN_COMMON || e === s.a.BURST_SHOTGUN_UNCOMMON || e === s.a.BURST_SHOTGUN_RARE || e === s.a.BURST_SHOTGUN_EPIC || e === s.a.BURST_SHOTGUN_LEGENDARY || e === s.a.BURST_SHOTGUN_MYTHIC || e === s.a.LIGHT_SNIPER_RIFLE_COMMON || e === s.a.LIGHT_SNIPER_RIFLE_UNCOMMON || e === s.a.LIGHT_SNIPER_RIFLE_RARE || e === s.a.LIGHT_SNIPER_RIFLE_EPIC || e === s.a.LIGHT_SNIPER_RIFLE_LEGENDARY || e === s.a.LIGHT_SNIPER_RIFLE_MYTHIC || e === s.a.HEAVY_SNIPER_RIFLE_COMMON || e === s.a.HEAVY_SNIPER_RIFLE_UNCOMMON || e === s.a.HEAVY_SNIPER_RIFLE_RARE || e === s.a.HEAVY_SNIPER_RIFLE_EPIC || e === s.a.HEAVY_SNIPER_RIFLE_LEGENDARY || e === s.a.HEAVY_SNIPER_RIFLE_MYTHIC
        }, ft = function (e) {
            return e === s.a.LIGHT_SNIPER_RIFLE_COMMON || e === s.a.LIGHT_SNIPER_RIFLE_UNCOMMON || e === s.a.LIGHT_SNIPER_RIFLE_RARE || e === s.a.LIGHT_SNIPER_RIFLE_EPIC || e === s.a.LIGHT_SNIPER_RIFLE_LEGENDARY || e === s.a.LIGHT_SNIPER_RIFLE_MYTHIC || e === s.a.HEAVY_SNIPER_RIFLE_COMMON || e === s.a.HEAVY_SNIPER_RIFLE_UNCOMMON || e === s.a.HEAVY_SNIPER_RIFLE_RARE || e === s.a.HEAVY_SNIPER_RIFLE_EPIC || e === s.a.HEAVY_SNIPER_RIFLE_LEGENDARY || e === s.a.HEAVY_SNIPER_RIFLE_MYTHIC
        }, Ct = function (e) {
            return e >= s.a.BLOCK && e <= s.a.BLOCK + 255
        }, Lt = function (e) {
            return e === s.a.MINI_SHIELD_POTION || e === s.a.ADVANCED_SHIELD_POTION || e === s.a.ULTIMATE_SHIELD_POTION || e === s.a.MEDICINE_PILLS || e === s.a.FIRST_AID_KIT || e === s.a.RED_BERRY || e === s.a.ORANGE_BERRY
        }, yt = function (e) {
            var t, a = 0;
            if ((t = e.id) === s.a.EMPTY || t === s.a.SHOVEL_COMMON || t === s.a.SHOVEL_UNCOMMON || t === s.a.SHOVEL_RARE || t === s.a.SHOVEL_EPIC || t === s.a.SHOVEL_LEGENDARY || t === s.a.SHOVEL_MYTHIC) {
                var n = e;
                a = n.currentDurability / n.maxDurability * 100
            }
            return a
        }
    }, 87: function (e, t, a) {
        "use strict";
        a.d(t, "h", (function () {
            return _
        })), a.d(t, "s", (function () {
            return l
        })), a.d(t, "c", (function () {
            return S
        })), a.d(t, "r", (function () {
            return O
        })), a.d(t, "l", (function () {
            return I
        })), a.d(t, "j", (function () {
            return T
        })), a.d(t, "m", (function () {
            return p
        })), a.d(t, "a", (function () {
            return M
        })), a.d(t, "p", (function () {
            return h
        })), a.d(t, "b", (function () {
            return m
        })), a.d(t, "q", (function () {
            return A
        })), a.d(t, "f", (function () {
            return E
        })), a.d(t, "e", (function () {
            return R
        })), a.d(t, "k", (function () {
            return d
        })), a.d(t, "g", (function () {
            return N
        })), a.d(t, "d", (function () {
            return f
        })), a.d(t, "o", (function () {
            return C
        })), a.d(t, "t", (function () {
            return L
        })), a.d(t, "i", (function () {
            return y
        })), a.d(t, "n", (function () {
            return U
        }));
        var n = a(47), r = a(31), o = a(1), i = a(137), s = a(46), u = -1, c = !1, _ = function () {
            return c
        }, l = function (e) {
            c = e
        }, S = function () {
            return n.d.getState().ui.connectionStatus
        }, O = function (e) {
            n.d.dispatch(Object(r.e)(e))
        }, I = function () {
            return n.d.getState().ui.gameMenuType !== o.a.NONE
        }, p = function () {
            return n.d.getState().gameData.inventoryStatus !== s.a.CLOSED
        }, E = function () {
            return n.d.getState().gameData.mapLoadingStage
        }, R = function () {
            return n.d.getState().gameData.mapLoadingProgress
        }, T = function () {
            return n.d.getState().ui.gameChatIsEditing
        }, M = function () {
            return u
        }, h = function (e) {
            u = e
        }, m = function () {
            return n.d.getState().gameData.clientPlayerName
        }, A = function (e) {
            n.d.dispatch(Object(i.e)(e))
        }, d = function () {
            return void 0 !== n.d.getState().ui.currentlyChangingKeybind
        }, N = function (e) {
            return e.startsWith("Key") && (e = e.substr(3)), e
        }, f = function (e) {
            var t = n.d.getState().settings.keys[e].keyName;
            return N(t)
        }, C = function () {
            return n.d.getState().ui.fullMapVisible
        }, L = function () {
            return n.d.getState().ui.tabShowsScoreboard
        }, y = function () {
            return n.d.getState().ui.enableChat
        }, U = function () {
            return n.d.getState().gameData.showScope
        }
    }, 88: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return z
        }));
        var n, r = a(15), o = a.n(r), i = a(21), s = a.n(i), u = a(79), c = a.n(u), _ = a(81), l = a(25), S = a(96),
            O = a(95), I = a(104), p = a(87), E = a(48), R = a(102), T = a(76), M = a.n(T), h = a(126), m = a.n(h),
            A = a(80), d = a(90), N = function () {
                function e(e) {
                    this.type = e
                }

                var t = e.prototype;
                return t.generateOptions = function (e, t, a) {
                    var n = this, r = e.addFolder("Material " + t);
                    return r.add({
                        remove: function () {
                            e.removeFolder(r), a.studioRenderer.studioSettings.materials.splice(t, 1), a.refreshSettings(), n.cleanUp(), a.studioRenderer.applyMaterials()
                        }
                    }, "remove").name("Remove"), r.add(this, "type").options(W).name("Type").onChange((function (e) {
                        n.cleanUp();
                        var r = V(e);
                        a.studioRenderer.studioSettings.materials[t] = r, a.refreshSettings(), a.studioRenderer.applyMaterials()
                    })), r.open(), r
                }, t.cleanUp = function () {
                }, t.export = function () {
                    return {type: this.type}
                }, t.load = function (e) {
                }, e
            }(), f = function (e) {
                function t() {
                    var t;
                    return (t = e.call(this, W.FADE) || this).seed = void 0, t.minScale = void 0, t.maxScale = void 0, t.minOffset = void 0, t.maxOffset = void 0, t.minSaturation = void 0, t.maxSaturation = void 0, t.minLightness = void 0, t.maxLightness = void 0, t.direction = void 0, t.material = void 0, t.updateMaterial = function () {
                        if (t.material) {
                            var e = m()(t.seed.toString()), a = Object(d.h)(e, t.minScale, t.maxScale),
                                n = Object(d.h)(e, t.minOffset, t.maxOffset),
                                r = Object(d.h)(e, t.minSaturation, t.maxSaturation),
                                o = Object(d.h)(e, t.minLightness, t.maxLightness);
                            t.direction.normalize(), t.material.uniforms.so.value.set(a, n), t.material.uniforms.sl.value.set(r, o)
                        }
                    }, t.seed = 0, t.minScale = 2, t.maxScale = 8, t.minOffset = 0, t.maxOffset = 10, t.minSaturation = .8, t.maxSaturation = .9, t.minLightness = .6, t.maxLightness = .7, t.direction = new A.Ob(0, 0, 1), t
                }

                M()(t, e);
                var a = t.prototype;
                return a.generateOptions = function (t, a, n) {
                    var r = e.prototype.generateOptions.call(this, t, a, n);
                    return r.add(this, "seed", 0, 1e3).name("Seed").onChange(this.updateMaterial), r.add(this, "minScale", .01, 50).name("Min Scale").onChange(this.updateMaterial), r.add(this, "maxScale", .01, 50).name("Max Scale").onChange(this.updateMaterial), r.add(this, "minOffset", 0, 50).name("Min Offset").onChange(this.updateMaterial), r.add(this, "maxOffset", 0, 50).name("Max Offset").onChange(this.updateMaterial), r.add(this, "minSaturation", 0, 1).name("Min Saturation").onChange(this.updateMaterial), r.add(this, "maxSaturation", 0, 1).name("Max Saturation").onChange(this.updateMaterial), r.add(this, "minLightness", 0, 1).name("Min Lightness").onChange(this.updateMaterial), r.add(this, "maxLightness", 0, 1).name("Max Lightness").onChange(this.updateMaterial), r.add(this.direction, "x", -100, 100).name("Direction X").onChange(this.updateMaterial), r.add(this.direction, "y", -100, 100).name("Direction Y").onChange(this.updateMaterial), r.add(this.direction, "z", -100, 100).name("Direction Z").onChange(this.updateMaterial), r
                }, a.getMaterial = function () {
                    var e = s()(o.a.mark((function e(t, a) {
                        var n, r, i, s, u;
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.material || (this.material = new A.wb({
                                        uniforms: {
                                            aoMap: {value: null},
                                            so: {value: new A.Nb(5, 0)},
                                            sl: {value: new A.Nb(1, .7)},
                                            direction: {value: this.direction}
                                        },
                                        side: A.x,
                                        vertexShader: "\n                    varying vec2 vUv;\n                    varying vec3 vPosition;\n                    void main() {\n                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n                        gl_Position = projectionMatrix * mvPosition;\n                        vUv = uv;\n                        vPosition = position;\n                    }\n                ",
                                        fragmentShader: "\n                    varying vec2 vUv;\n                    varying vec3 vPosition;\n                    uniform sampler2D aoMap;\n                    uniform vec2 so;\n                    uniform vec2 sl;\n                    uniform vec3 direction;\n            \n                    vec3 HSLtoRGB(in vec3 c) {\n                        vec3 rgb = clamp(abs(mod(c.x+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);\n                        return c.z+c.y*(rgb-0.5)*(1.-abs(2.*c.z-1.));\n                    }\n            \n                    void main() {\n                        vec4 diffuseColor = vec4(HSLtoRGB(vec3(dot(vPosition, direction) * so.x + so.y, sl.x, sl.y)), 1.0);\n            \n                        vec4 aoColor = mapTexelToLinear(texture2D(aoMap, vUv));\n                        diffuseColor *= aoColor.rgba;\n            \n                        gl_FragColor = diffuseColor;\n                    }\n                ",
                                        fog: !1
                                    }), n = m()(this.seed.toString()), r = Object(d.h)(n, this.minScale, this.maxScale), i = Object(d.h)(n, this.minOffset, this.maxOffset), s = Object(d.h)(n, this.minSaturation, this.maxSaturation), u = Object(d.h)(n, this.minLightness, this.maxLightness), this.material.uniforms.aoMap.value = t, this.material.uniforms.so.value.set(r, i), this.material.uniforms.sl.value.set(s, u)), e.abrupt("return", this.material);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(), a.cleanUp = function () {
                    this.material && (this.material.dispose(), this.material = void 0)
                }, a.export = function () {
                    var t = e.prototype.export.call(this);
                    return t.seed = this.seed, t.minScale = this.minScale, t.maxScale = this.maxScale, t.minOffset = this.minOffset, t.maxOffset = this.maxOffset, t.minSaturation = this.minSaturation, t.maxSaturation = this.maxSaturation, t.minLightness = this.minLightness, t.maxLightness = this.maxLightness, t.direction = {
                        x: this.direction.x,
                        y: this.direction.y,
                        z: this.direction.z
                    }, t
                }, a.load = function (t) {
                    e.prototype.load.call(this, t), t.seed && (this.seed = t.seed), t.minScale && (this.minScale = t.minScale), t.maxScale && (this.maxScale = t.maxScale), t.minOffset && (this.minOffset = t.minOffset), t.maxOffset && (this.maxOffset = t.maxOffset), t.minSaturation && (this.minSaturation = t.minSaturation), t.maxSaturation && (this.maxSaturation = t.maxSaturation), t.minLightness && (this.minLightness = t.minLightness), t.maxLightness && (this.maxLightness = t.maxLightness), t.direction && this.direction.set(t.direction.x, t.direction.y, t.direction.z)
                }, t
            }(N), C = a.p + "./9fa05e63b55694f29f27074ee20fad10.png", L = a.p + "./168ca21165a40ff6d0a95dd21287b06d.png",
            y = a.p + "./6d616497b28e570fce338b1f7c93b418.png", U = a.p + "./08e0b1fec31198698303a28f79a214fd.png",
            g = a.p + "./2487264d60e14d00980199c65f59ce72.png", P = a.p + "./c66847e6e0620f7771c57d205f1bc0d1.png",
            v = a.p + "./b6786321cb3a78160bafa56b7aa6a952.png", F = a.p + "./c7eea180324a8fcde7262d6c80e606bc.png",
            G = a.p + "./5dadca80fa2657cd12cc40dbb7b81ca7.png", H = a.p + "./313d7d8f1bab60e11ef5e2a95393a02e.png",
            b = a.p + "./e81e58be086f62fa5dba1cddf4e08082.png";
        !function (e) {
            e.CAMO = "CAMO", e.CAMO_2 = "CAMO_2", e.PIXEL_STORM = "PIXEL_STORM", e.CRACKS = "CRACKS", e.HEXAGON = "HEXAGON", e.TIGER = "TIGER", e.TRIANGLE_DOTS = "TRIANGLE_DOTS", e.LEOPARD = "LEOPARD", e.PLANT = "PLANT", e.FLOW = "FLOW", e.GEOMETRIC_TRIANGLE = "GEOMETRIC_TRIANGLE", e.CUSTOM = "CUSTOM"
        }(n || (n = {}));
        var x, D = function (e) {
            function t() {
                var t;
                return (t = e.call(this, W.RANDOM_PATTERN) || this).seed = void 0, t.scale = void 0, t.roughness = void 0, t.metalness = void 0, t.color1 = void 0, t.color2 = void 0, t.color3 = void 0, t.color4 = void 0, t.patternType = void 0, t.material = void 0, t.shader = void 0, t.fileInput = void 0, t.customFileURL = void 0, t.chooseCustomTexture = function () {
                    var e;
                    null == (e = t.fileInput) || e.click()
                }, t.seed = 0, t.scale = 1, t.roughness = .9, t.metalness = 0, t.patternType = n.CAMO, t.color1 = "#ffffff", t.color2 = "#888888", t.color3 = "#444444", t.color4 = "#000000", t.fileInput = void 0, t.customFileURL = "", t
            }

            M()(t, e);
            var a = t.prototype;
            return a.generateOptions = function (t, a, r) {
                var i = this, u = e.prototype.generateOptions.call(this, t, a, r);
                return u.add(this, "patternType").options(n).name("Pattern").onChange(function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!i.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    if (i.patternType !== n.CUSTOM || 0 !== i.customFileURL.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return i.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(i.getPatternURL());
                                case 6:
                                    i.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), u.add(this, "chooseCustomTexture").name("Pick Custom Texture"), this.fileInput = document.createElement("input"), this.fileInput.type = "file", this.fileInput.onchange = function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t && t.target && t.target.files.length > 0)) {
                                        e.next = 7;
                                        break
                                    }
                                    if (i.customFileURL = URL.createObjectURL(t.target.files[0]), !i.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    return i.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(i.getPatternURL());
                                case 6:
                                    i.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), document.body.appendChild(this.fileInput), u.add(this, "seed", 0, 1e3).name("Seed").onChange((function (e) {
                    if (i.shader) {
                        var t = m()(i.seed.toString()), a = Object(d.a)(i.scale, 2 * t() * Math.PI, t(), t());
                        i.shader.uniforms.transform.value = a
                    }
                })), u.add(this, "scale", .01, 100).name("Scale").onChange((function (e) {
                    if (i.shader) {
                        var t = m()(i.seed.toString()), a = Object(d.a)(i.scale, 2 * t() * Math.PI, t(), t());
                        i.shader.uniforms.transform.value = a
                    }
                })), u.add(this, "roughness", .01, 1).name("Roughness").onChange((function (e) {
                    i.material && (i.material.roughness = e)
                })), u.add(this, "metalness", .01, 1).name("Metalness").onChange((function (e) {
                    i.material && (i.material.metalness = i.metalness)
                })), u.addColor(this, "color1").name("Color 1").onChange((function (e) {
                    if (i.shader) {
                        var t = parseInt(e.substr(1), 16);
                        i.shader.uniforms.color1.value = new A.p(t)
                    }
                })), u.addColor(this, "color2").name("Color 2").onChange((function (e) {
                    if (i.shader) {
                        var t = parseInt(e.substr(1), 16);
                        i.shader.uniforms.color2.value = new A.p(t)
                    }
                })), u.addColor(this, "color3").name("Color 3").onChange((function (e) {
                    if (i.shader) {
                        var t = parseInt(e.substr(1), 16);
                        i.shader.uniforms.color3.value = new A.p(t)
                    }
                })), u.addColor(this, "color4").name("Color 4").onChange((function (e) {
                    if (i.shader) {
                        var t = parseInt(e.substr(1), 16);
                        i.shader.uniforms.color4.value = new A.p(t)
                    }
                })), u
            }, a.getPatternURL = function () {
                switch (this.patternType) {
                    case n.CAMO:
                        return C;
                    case n.CAMO_2:
                        return L;
                    case n.PIXEL_STORM:
                        return y;
                    case n.CRACKS:
                        return U;
                    case n.HEXAGON:
                        return g;
                    case n.TIGER:
                        return P;
                    case n.TRIANGLE_DOTS:
                        return v;
                    case n.LEOPARD:
                        return F;
                    case n.PLANT:
                        return G;
                    case n.FLOW:
                        return H;
                    case n.GEOMETRIC_TRIANGLE:
                        return b;
                    case n.CUSTOM:
                        return this.customFileURL
                }
            }, a.getMaterial = function () {
                var e = s()(o.a.mark((function e(t, a) {
                    var n, r, i, s, u = this;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (this.material) {
                                    e.next = 14;
                                    break
                                }
                                if (this.material = new A.ab({
                                    roughness: this.roughness,
                                    metalness: this.metalness,
                                    fog: !1
                                }), n = this.getPatternURL(), !a) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 6, _.a.loadOnDemandTextureAsync(n);
                            case 6:
                                e.t0 = e.sent, e.next = 10;
                                break;
                            case 9:
                                e.t0 = _.a.loadOnDemandTexture(n);
                            case 10:
                                r = e.t0, i = m()(this.seed.toString()), s = Object(d.a)(this.scale, 2 * i() * Math.PI, i(), i()), this.material.onBeforeCompile = function (e, a) {
                                    u.shader = e, e.uniforms.aoMap = {value: t}, e.uniforms.patternMap = {value: r}, e.uniforms.color1 = {value: new A.p(u.color1)}, e.uniforms.color2 = {value: new A.p(u.color2)}, e.uniforms.color3 = {value: new A.p(u.color3)}, e.uniforms.color4 = {value: new A.p(u.color4)}, e.uniforms.transform = {value: s}, e.vertexShader = "varying vec2 vUv;\n" + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", "\n                    vec3 transformed = vec3( position );\n                    vUv = uv;\n                "), e.fragmentShader = "\n                    uniform sampler2D aoMap; \n                    uniform sampler2D patternMap; \n                    uniform vec3 color1;\n                    uniform vec3 color2;\n                    uniform vec3 color3;\n                    uniform vec3 color4;\n                    uniform mat3 transform; \n                    varying vec2 vUv;\n                " + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n                    vec2 patternUV = (transform * vec3(vUv, 1.0)).xy;\n                    vec4 patternColor = texture2D(patternMap, patternUV);\n        \n                    diffuseColor = sRGBToLinear(vec4(color1, 1.0));\n                    diffuseColor = mix(diffuseColor, sRGBToLinear(vec4(color2, 1.0)), patternColor.r);\n                    diffuseColor = mix(diffuseColor, sRGBToLinear(vec4(color3, 1.0)), patternColor.g);\n                    diffuseColor = mix(diffuseColor, sRGBToLinear(vec4(color4, 1.0)), patternColor.b);\n        \n                    vec4 aoColor = sRGBToLinear(texture2D(aoMap, vUv));\n                    diffuseColor *= aoColor;\n                ")
                                };
                            case 14:
                                return e.abrupt("return", this.material);
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), a.cleanUp = function () {
                this.material && (this.material.dispose(), this.material = void 0), this.shader && (this.shader.uniforms.patternMap.value.dispose(), this.shader = void 0), this.fileInput && (this.fileInput.remove(), this.fileInput = void 0)
            }, a.export = function () {
                var t = e.prototype.export.call(this);
                return t.seed = this.seed, t.scale = this.scale, t.roughness = this.roughness, t.metalness = this.metalness, t.patternType = this.patternType, t.color1 = this.color1, t.color2 = this.color2, t.color3 = this.color3, t.color4 = this.color4, t
            }, a.load = function (t) {
                e.prototype.load.call(this, t), t.seed && (this.seed = t.seed), t.scale && (this.scale = t.scale), t.roughness && (this.roughness = t.roughness), t.metalness && (this.metalness = t.metalness), t.patternType && (this.patternType = t.patternType), t.color1 && (this.color1 = t.color1), t.color2 && (this.color2 = t.color2), t.color3 && (this.color3 = t.color3), t.color4 && (this.color4 = t.color4)
            }, t
        }(N);
        !function (e) {
            e.CUSTOM = "CUSTOM"
        }(x || (x = {}));
        var k, B = function (e) {
            function t() {
                var t;
                return (t = e.call(this, W.RANDOM_TEXTURE) || this).seed = void 0, t.scale = void 0, t.roughness = void 0, t.metalness = void 0, t.patternType = void 0, t.material = void 0, t.shader = void 0, t.fileInput = void 0, t.customFileURL = void 0, t.chooseCustomTexture = function () {
                    var e;
                    null == (e = t.fileInput) || e.click()
                }, t.seed = 0, t.scale = 1, t.roughness = .9, t.metalness = 0, t.patternType = x.CUSTOM, t.fileInput = void 0, t.customFileURL = "", t
            }

            M()(t, e);
            var a = t.prototype;
            return a.generateOptions = function (t, a, n) {
                var r = this, i = e.prototype.generateOptions.call(this, t, a, n);
                return i.add(this, "seed", 0, 1e3).name("Seed").onChange((function (e) {
                    if (r.shader) {
                        var t = m()(r.seed.toString()), a = Object(d.a)(r.scale, 2 * t() * Math.PI, t(), t());
                        r.shader.uniforms.transform.value = a
                    }
                })), i.add(this, "scale", .01, 100).name("Scale").onChange((function (e) {
                    if (r.shader) {
                        var t = m()(r.seed.toString()), a = Object(d.a)(r.scale, 2 * t() * Math.PI, t(), t());
                        r.shader.uniforms.transform.value = a
                    }
                })), i.add(this, "roughness", .01, 1).name("Roughness").onChange((function (e) {
                    r.material && (r.material.roughness = e)
                })), i.add(this, "metalness", .01, 1).name("Metalness").onChange((function (e) {
                    r.material && (r.material.metalness = r.metalness)
                })), i.add(this, "patternType").options(x).name("Pattern").onChange(function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!r.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    if (r.patternType !== x.CUSTOM || 0 !== r.customFileURL.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return r.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(r.getPatternURL());
                                case 6:
                                    r.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), i.add(this, "chooseCustomTexture").name("Pick Custom Texture"), this.fileInput = document.createElement("input"), this.fileInput.type = "file", this.fileInput.onchange = function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t && t.target && t.target.files.length > 0)) {
                                        e.next = 7;
                                        break
                                    }
                                    if (r.customFileURL = URL.createObjectURL(t.target.files[0]), !r.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    return r.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(r.getPatternURL());
                                case 6:
                                    r.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), document.body.appendChild(this.fileInput), i
            }, a.getPatternURL = function () {
                switch (this.patternType) {
                    case x.CUSTOM:
                        return this.customFileURL
                }
            }, a.getMaterial = function () {
                var e = s()(o.a.mark((function e(t, a) {
                    var n, r, i, s, u = this;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (this.material) {
                                    e.next = 14;
                                    break
                                }
                                if (this.material = new A.ab({
                                    roughness: this.roughness,
                                    metalness: this.metalness,
                                    fog: !1
                                }), n = this.getPatternURL(), !a) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 6, _.a.loadOnDemandTextureAsync(n);
                            case 6:
                                e.t0 = e.sent, e.next = 10;
                                break;
                            case 9:
                                e.t0 = _.a.loadOnDemandTexture(n);
                            case 10:
                                r = e.t0, i = m()(this.seed.toString()), s = Object(d.a)(this.scale, 2 * i() * Math.PI, i(), i()), this.material.onBeforeCompile = function (e, a) {
                                    u.shader = e, e.uniforms.aoMap = {value: t}, e.uniforms.patternMap = {value: r}, e.uniforms.transform = {value: s}, e.vertexShader = "varying vec2 vUv;\n" + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", "\n                    vec3 transformed = vec3( position );\n                    vUv = uv;\n                "), e.fragmentShader = "\n                    uniform sampler2D aoMap; \n                    uniform sampler2D patternMap; \n                    uniform mat3 transform; \n                    varying vec2 vUv;\n                " + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n                    vec2 patternUV = (transform * vec3(vUv, 1.0)).xy;\n                    vec4 patternColor = sRGBToLinear(texture2D(patternMap, patternUV));\n                    diffuseColor *= patternColor;\n        \n                    vec4 aoColor = sRGBToLinear(texture2D(aoMap, vUv));\n                    diffuseColor *= aoColor;\n                ")
                                };
                            case 14:
                                return e.abrupt("return", this.material);
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), a.cleanUp = function () {
                this.material && (this.shader.uniforms.patternMap.value.dispose(), this.material.dispose(), this.material = void 0, this.shader = void 0), this.fileInput && (this.fileInput.remove(), this.fileInput = void 0)
            }, a.export = function () {
                var t = e.prototype.export.call(this);
                return t.seed = this.seed, t.scale = this.scale, t.roughness = this.roughness, t.metalness = this.metalness, t.patternType = this.patternType, t
            }, a.load = function (t) {
                e.prototype.load.call(this, t), t.seed && (this.seed = t.seed), t.scale && (this.scale = t.scale), t.roughness && (this.roughness = t.roughness), t.metalness && (this.metalness = t.metalness), t.patternType && (this.patternType = t.patternType)
            }, t
        }(N);
        !function (e) {
            e.CUSTOM = "CUSTOM"
        }(k || (k = {}));
        var w, Y = function (e) {
            function t() {
                var t;
                return (t = e.call(this, W.STATIC_TEXTURE) || this).seed = void 0, t.scale = void 0, t.roughness = void 0, t.metalness = void 0, t.patternType = void 0, t.material = void 0, t.shader = void 0, t.fileInput = void 0, t.customFileURL = void 0, t.chooseCustomTexture = function () {
                    var e;
                    null == (e = t.fileInput) || e.click()
                }, t.seed = 0, t.scale = 1, t.roughness = .9, t.metalness = 0, t.patternType = k.CUSTOM, t.fileInput = void 0, t.customFileURL = "", t
            }

            M()(t, e);
            var a = t.prototype;
            return a.generateOptions = function (t, a, n) {
                var r = this, i = e.prototype.generateOptions.call(this, t, a, n);
                return i.add(this, "scale", .01, 100).name("Scale").onChange((function (e) {
                    if (r.shader) {
                        var t = m()(r.seed.toString()), a = Object(d.a)(r.scale, 2 * t() * Math.PI, t(), t());
                        r.shader.uniforms.transform.value = a
                    }
                })), i.add(this, "roughness", .01, 1).name("Roughness").onChange((function (e) {
                    r.material && (r.material.roughness = e)
                })), i.add(this, "metalness", .01, 1).name("Metalness").onChange((function (e) {
                    r.material && (r.material.metalness = r.metalness)
                })), i.add(this, "patternType").options(k).name("Pattern").onChange(function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!r.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    if (r.patternType !== k.CUSTOM || 0 !== r.customFileURL.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return r.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(r.getPatternURL());
                                case 6:
                                    r.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), i.add(this, "chooseCustomTexture").name("Pick Custom Texture"), this.fileInput = document.createElement("input"), this.fileInput.type = "file", this.fileInput.onchange = function () {
                    var e = s()(o.a.mark((function e(t) {
                        return o.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t && t.target && t.target.files.length > 0)) {
                                        e.next = 7;
                                        break
                                    }
                                    if (r.customFileURL = URL.createObjectURL(t.target.files[0]), !r.shader) {
                                        e.next = 7;
                                        break
                                    }
                                    return r.shader.uniforms.patternMap.value.dispose(), e.next = 6, _.a.loadOnDemandTextureAsync(r.getPatternURL());
                                case 6:
                                    r.shader.uniforms.patternMap.value = e.sent;
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), document.body.appendChild(this.fileInput), i
            }, a.getPatternURL = function () {
                switch (this.patternType) {
                    case k.CUSTOM:
                        return this.customFileURL
                }
            }, a.getMaterial = function () {
                var e = s()(o.a.mark((function e(t, a) {
                    var n, r, i = this;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (this.material) {
                                    e.next = 12;
                                    break
                                }
                                if (this.material = new A.ab({
                                    roughness: this.roughness,
                                    metalness: this.metalness,
                                    fog: !1
                                }), n = this.getPatternURL(), !a) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 6, _.a.loadOnDemandTextureAsync(n);
                            case 6:
                                e.t0 = e.sent, e.next = 10;
                                break;
                            case 9:
                                e.t0 = _.a.loadOnDemandTexture(n);
                            case 10:
                                r = e.t0, this.material.onBeforeCompile = function (e, a) {
                                    i.shader = e, e.uniforms.aoMap = {value: t}, e.uniforms.patternMap = {value: r}, e.vertexShader = "varying vec2 vUv;\n" + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", "\n                    vec3 transformed = vec3( position );\n                    vUv = uv;\n                "), e.fragmentShader = "\n                    uniform sampler2D aoMap; \n                    uniform sampler2D patternMap; \n                    varying vec2 vUv;\n                " + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n                    vec4 patternColor = sRGBToLinear(texture2D(patternMap, vUv));\n                    diffuseColor *= patternColor;\n        \n                    vec4 aoColor = sRGBToLinear(texture2D(aoMap, vUv));\n                    diffuseColor *= aoColor;\n                ")
                                };
                            case 12:
                                return e.abrupt("return", this.material);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), a.cleanUp = function () {
                this.material && (this.shader.uniforms.patternMap.value.dispose(), this.material.dispose(), this.material = void 0, this.shader = void 0), this.fileInput && (this.fileInput.remove(), this.fileInput = void 0)
            }, a.export = function () {
                var t = e.prototype.export.call(this);
                return t.scale = this.scale, t.roughness = this.roughness, t.metalness = this.metalness, t.patternType = this.patternType, t
            }, a.load = function (t) {
                e.prototype.load.call(this, t), t.scale && (this.scale = t.scale), t.roughness && (this.roughness = t.roughness), t.metalness && (this.metalness = t.metalness), t.patternType && (this.patternType = t.patternType)
            }, t
        }(N), K = function (e) {
            function t() {
                var t;
                return (t = e.call(this, W.UNIFORM_COLOR) || this).roughness = void 0, t.metalness = void 0, t.color = void 0, t.material = void 0, t.shader = void 0, t.roughness = .9, t.metalness = 0, t.color = "#ffffff", t
            }

            M()(t, e);
            var a = t.prototype;
            return a.generateOptions = function (t, a, n) {
                var r = this, o = e.prototype.generateOptions.call(this, t, a, n);
                return o.add(this, "roughness", .01, 1).name("Roughness").onChange((function (e) {
                    r.material && (r.material.roughness = e)
                })), o.add(this, "metalness", .01, 1).name("Metalness").onChange((function (e) {
                    r.material && (r.material.metalness = r.metalness)
                })), o.addColor(this, "color").name("Color").onChange((function (e) {
                    if (r.shader) {
                        var t = parseInt(e.substr(1), 16);
                        r.shader.uniforms.color.value = new A.p(t).convertGammaToLinear(2.2)
                    }
                })), o
            }, a.getMaterial = function () {
                var e = s()(o.a.mark((function e(t, a) {
                    var n, r = this;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return this.material || (n = parseInt(this.color.substr(1), 16), this.material = new A.ab({
                                    roughness: this.roughness,
                                    metalness: this.metalness,
                                    fog: !1
                                }), this.material.onBeforeCompile = function (e, a) {
                                    r.shader = e, e.uniforms.aoMap = {value: t}, e.uniforms.color = {value: new A.p(n).convertGammaToLinear(2.2)}, e.vertexShader = "varying vec2 vUv;\n" + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", "\n                    vec3 transformed = vec3( position );\n                    vUv = uv;\n                "), e.fragmentShader = "\n                    uniform sampler2D aoMap; \n                    uniform vec3 color; \n                    varying vec2 vUv;\n                " + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n                    diffuseColor = vec4(color, 1.0);\n                    vec4 aoColor = sRGBToLinear(texture2D(aoMap, vUv));\n                    diffuseColor *= aoColor;\n                ")
                                }), e.abrupt("return", this.material);
                            case 2:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), a.cleanUp = function () {
                this.material && (this.material.dispose(), this.material = void 0, this.shader = void 0)
            }, a.export = function () {
                var t = e.prototype.export.call(this);
                return t.roughness = this.roughness, t.metalness = this.metalness, t.color = this.color, t
            }, a.load = function (t) {
                e.prototype.load.call(this, t), t.roughness && (this.roughness = t.roughness), t.metalness && (this.metalness = t.metalness), t.color && (this.color = t.color)
            }, t
        }(N);
        !function (e) {
            e.UNIFORM_COLOR = "UNIFORM_COLOR", e.RANDOM_TEXTURE = "RANDOM_TEXTURE", e.STATIC_TEXTURE = "STATIC_TEXTURE", e.RANDOM_PATTERN = "RANDOM_PATTERN", e.FADE = "FADE"
        }(w || (w = {}));
        var V = function (e) {
            var t = null;
            switch (e) {
                case w.UNIFORM_COLOR:
                    t = new K;
                    break;
                case w.FADE:
                    t = new f;
                    break;
                case w.RANDOM_PATTERN:
                    t = new D;
                    break;
                case w.STATIC_TEXTURE:
                    t = new Y;
                    break;
                case w.RANDOM_TEXTURE:
                    t = new B
            }
            return t
        }, W = w;

        function j(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Z(e, t)
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

        function Z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var z = function () {
            function e(e) {
                this._itemType = e, this._itemName = void 0, this._itemDescription = void 0, this._itemTier = void 0, this._maxStackSize = void 0, this._movementSpeedModifier = void 0, this._used = void 0, this._ownerName = void 0, this._skinType = void 0, this._skinSeed = void 0, this._skinScale = void 0, this._skinAOMap = void 0, this._ownerName = "", this._itemName = "Item", this._itemDescription = "Nothing Special", this._itemTier = l.a.COMMON, this._maxStackSize = 255, this._movementSpeedModifier = 1, this._used = 0, this._skinType = E.a.DEFAULT, this._skinSeed = 0, this._skinScale = 1
            }

            var t = e.prototype;
            return t.clone = function () {
                var e = new this.constructor(this._itemType);
                return e._ownerName = this._ownerName, e._skinType = this._skinType, e._skinSeed = this._skinSeed, e._itemName = this._itemName, e._itemDescription = this._itemDescription, e
            }, t.onUpdateMetadata = function (e) {
                for (var t, a = j(e); !(t = a()).done;) {
                    var n = t.value;
                    switch (n.metadataType) {
                        case I.a.OWNER_NAME:
                            this._ownerName = n.value;
                            break;
                        case I.a.SKIN_TYPE:
                            this._skinType = n.value;
                            break;
                        case I.a.SKIN_SEED:
                            this._skinSeed = n.value
                    }
                }
            }, t.onActive = function (e, t, a) {
            }, t.onInactive = function (e, t, a) {
            }, t.onItemHoldingRender = function (e, t) {
            }, t.onItemHoldingUpdate = function (e, t, a, n) {
            }, t.onLeftClick = function (e, t, a) {
            }, t.onLeftDown = function (e, t, a) {
            }, t.onLeftUp = function (e, t, a) {
            }, t.onRightClick = function (e, t, a) {
            }, t.onRightDown = function (e, t, a) {
            }, t.onRightUp = function (e, t, a) {
            }, t.canInput = function (e) {
                return e.health > 0 && e.cooldownManager.cooldownExpired(S.a.ITEM_SWITCH) && (e.physicsStep.controlState === O.a.WALKING || e.physicsStep.controlState === O.a.CROUCHING || e.physicsStep.controlState === O.a.NOCLIP) && e.cooldownManager.cooldownExpired(S.a.SPRINT_STOP_ITEM_USE_GRACE)
            }, t.onInput = function (e, t, a, n, r) {
                n.primaryAction ? this.onLeftClick(e, t, r) : n.secondaryAction && this.onRightClick(e, t, r), !a.primaryAction && n.primaryAction ? this.onLeftDown(e, t, r) : a.primaryAction && !n.primaryAction && this.onLeftUp(e, t, r), !a.secondaryAction && n.secondaryAction ? this.onRightDown(e, t, r) : a.secondaryAction && !n.secondaryAction && this.onRightUp(e, t, r)
            }, t.getModelID = function () {
                return this.id
            }, t.generateSkinlessModel = function () {
                return _.a.getItemModel(this.getModelID())
            }, t.generateModel = function () {
                var e = s()(o.a.mark((function e(t) {
                    var a;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = this.generateSkinlessModel(), e.next = 3, this.applySkin(a, this._skinType, t);
                            case 3:
                                return e.abrupt("return", a);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t.generateModelWithDefaultSkin = function () {
                var e = s()(o.a.mark((function e(t) {
                    var a;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = this.generateSkinlessModel(), e.next = 3, this.applySkin(a, E.a.DEFAULT, t);
                            case 3:
                                return e.abrupt("return", a);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t.applySkin = function () {
                var e = s()(o.a.mark((function e(t, a, n) {
                    var r, i, s, u, c, _;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!(r = Object(R.a)(a))) {
                                    e.next = 16;
                                    break
                                }
                                if (!(i = r.getData(this.getModelID()))) {
                                    e.next = 16;
                                    break
                                }
                                s = {}, u = 0;
                            case 6:
                                if (!(u < Math.min(t.children.length, i.groupMaterialIndices.length))) {
                                    e.next = 16;
                                    break
                                }
                                return c = i.groupMaterialIndices[u], (_ = s[c]) || ((_ = V(i.materials[c].type)).load(i.materials[c]), _.seed = this._skinSeed), e.next = 12, _.getMaterial(this._skinAOMap, n);
                            case 12:
                                t.children[u].material = e.sent;
                            case 13:
                                u++, e.next = 6;
                                break;
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a, n) {
                    return e.apply(this, arguments)
                }
            }(), t.generateFirstPersonModel = function () {
                var e = s()(o.a.mark((function e(t) {
                    var a;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t.generateThirdPersonModel = function () {
                var e = s()(o.a.mark((function e(t) {
                    var a;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t.generateThumbnailModel = function () {
                var e = s()(o.a.mark((function e(t, a) {
                    var n;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(a);
                            case 2:
                                return (n = e.sent).position.set(0, 0, 0), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1), e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), t.generateEntityModel = function () {
                var e = s()(o.a.mark((function e(t) {
                    var a;
                    return o.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.generateModel(t);
                            case 2:
                                return (a = e.sent).position.set(0, 0, 0), a.rotation.set(0, Math.random() * Math.PI * 2, 0), a.scale.set(1, 1, 1), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), t.setMaxStackSize = function (e) {
                this._maxStackSize = e
            }, t.setMovementSpeedModifier = function (e) {
                this._movementSpeedModifier = e
            }, t.hasOwnerName = function () {
                return this._ownerName.length > 0
            }, t.setItemTier = function (e) {
                this._itemTier = e
            }, t.use = function (e) {
                this._used += e
            }, t.unuse = function () {
                this._used = 0
            }, t.hasSkin = function () {
                return this._skinType !== E.a.DEFAULT
            }, t.setSkin = function (e, t) {
                this._skinType = e, this._skinSeed = t
            }, t.setSkinScale = function (e) {
                this._skinScale = e
            }, t.setSkinAOMap = function (e) {
                this._skinAOMap = e
            }, c()(e, [{
                key: "id", get: function () {
                    return this._itemType
                }
            }, {
                key: "type", get: function () {
                    return this._itemType
                }
            }, {
                key: "maxStackSize", get: function () {
                    return this._maxStackSize
                }
            }, {
                key: "movementSpeedModifier", get: function () {
                    return this._movementSpeedModifier
                }
            }, {
                key: "displayName", get: function () {
                    var e = this._itemName, t = Object(p.b)();
                    return this.hasOwnerName() && this._ownerName !== t && (e = this._ownerName + "'s " + e), this.hasSkin() && (e = e + " | " + Object(R.a)(this.skinType).name), e
                }
            }, {
                key: "ownerName", get: function () {
                    return this._ownerName
                }, set: function (e) {
                    this._ownerName = e
                }
            }, {
                key: "itemName", get: function () {
                    return this._itemName
                }, set: function (e) {
                    this._itemName = e
                }
            }, {
                key: "itemDescription", get: function () {
                    return this._itemDescription
                }, set: function (e) {
                    this._itemDescription = e
                }
            }, {
                key: "itemTier", get: function () {
                    return this._itemTier
                }
            }, {
                key: "used", get: function () {
                    return this._used
                }
            }, {
                key: "skinType", get: function () {
                    return this._skinType
                }
            }, {
                key: "skinSeed", get: function () {
                    return this._skinSeed
                }
            }, {
                key: "skinScale", get: function () {
                    return this._skinScale
                }
            }, {
                key: "skinAOMap", get: function () {
                    return this._skinAOMap
                }
            }]), e
        }()
    }, 89: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.PISTOL_SHELL = 0] = "PISTOL_SHELL", e[e.SHOTGUN_SHELL = 1] = "SHOTGUN_SHELL", e[e.ASSAULT_RIFLE_SHELL = 2] = "ASSAULT_RIFLE_SHELL", e[e.SUBMACHINE_GUN_SHELL = 3] = "SUBMACHINE_GUN_SHELL", e[e.SNIPER_RIFLE_SHELL = 4] = "SNIPER_RIFLE_SHELL", e[e.PLANE = 5] = "PLANE", e[e.PARACHUTE = 6] = "PARACHUTE"
        }(n || (n = {})), t.a = n
    }, 90: function (e, t, a) {
        "use strict";
        a.d(t, "h", (function () {
            return o
        })), a.d(t, "e", (function () {
            return i
        })), a.d(t, "c", (function () {
            return s
        })), a.d(t, "d", (function () {
            return u
        })), a.d(t, "b", (function () {
            return c
        })), a.d(t, "g", (function () {
            return _
        })), a.d(t, "a", (function () {
            return l
        })), a.d(t, "f", (function () {
            return S
        }));
        var n = a(34), r = a(80), o = function (e, t, a) {
            return e() * (a - t) + t
        };
        var i = function (e, t) {
            return (e % t + t) % t
        }, s = function (e, t, a) {
            return e + (a = Math.max(0, Math.min(1, a))) * (t - e)
        }, u = function (e, t, a) {
            return e < -Math.PI / 2 && t > Math.PI / 2 ? s(e + 2 * Math.PI, t, a) - 2 * Math.PI : e > Math.PI / 2 && t < -Math.PI / 2 ? s(e, t + 2 * Math.PI, a) - 2 * Math.PI : s(e, t, a)
        }, c = function (e, t) {
            return e < -Math.PI / 2 && t > Math.PI / 2 ? t - (e + 2 * Math.PI) : e > Math.PI / 2 && t < -Math.PI / 2 ? t + 2 * Math.PI - e : t - e
        }, _ = function (e) {
            return Object(n.l)(-Math.cos(e.x) * Math.sin(e.y), Math.sin(e.x), -Math.cos(e.x) * Math.cos(e.y))
        }, l = function (e, t, a, n) {
            var o = (new r.V).set(e, 0, 0, 0, e, 0, 0, 0, 1),
                i = (new r.V).set(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1);
            return (new r.V).set(1, 0, a, 0, 1, n, 0, 0, 1).multiply(i).multiply(o)
        }, S = function (e) {
            for (var t = e.toString(16); t.length < 6;) t = "0" + t;
            return "#" + t
        }
    }, 92: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return A
        }));
        var n = a(79), r = a.n(n), o = a(76), i = a.n(o), s = a(20), u = a(88), c = a(106), _ = a(96), l = a(95),
            S = a(82), O = a(83), I = a(78), p = a(34), E = a(104), R = a(89), T = a(84), M = a(26);

        function h(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return m(e, t)
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

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        var A = function (e) {
            function t(t) {
                var a;
                return (a = e.call(this, t) || this)._canADS = void 0, a._useScope = void 0, a._adsFOV = void 0, a._defaultSpread = void 0, a._inAirSpread = void 0, a._shootingSpread = void 0, a._movingSpread = void 0, a._shootingMovingSpread = void 0, a._ADSSpreadFactor = void 0, a._crouchingSpreadFactor = void 0, a._ADSCrouchingSpreadFactor = void 0, a._spreadRecovery = void 0, a._spreadIncreaseRateMove = void 0, a._spreadIncreaseRateJump = void 0, a._spreadIncreaseRateShoot = void 0, a._fireRate = void 0, a._reloadTime = void 0, a._range = void 0, a._currClipAmmo = void 0, a._maxClipAmmo = void 0, a._isReloading = void 0, a._maxRecoil = void 0, a._recoilGainVel = void 0, a._recoilRecoverVel = void 0, a._recoilActiveTime = void 0, a._muzzleFlashPosition = void 0, a._muzzleFlashScale = void 0, a._ammoItemType = void 0, a._bulletsPerShot = void 0, a._shellModelID = void 0, a._shellModelOrigin = void 0, a._gunShotSoundType = void 0, a._shootCooldownType = void 0, a.setMaxStackSize(1), a._canADS = !0, a._useScope = !1, a._adsFOV = M.a.PLAYER_ADS_FOV, a._defaultSpread = .2, a._inAirSpread = 1, a._shootingSpread = .5, a._movingSpread = .6, a._shootingMovingSpread = .7, a._ADSSpreadFactor = .2, a._crouchingSpreadFactor = .5, a._ADSCrouchingSpreadFactor = .1, a._spreadRecovery = 10, a._spreadIncreaseRateMove = 2.66, a._spreadIncreaseRateJump = 2.66, a._spreadIncreaseRateShoot = 6, a._fireRate = Math.floor(Object(I.c)(.15)), a._reloadTime = Math.floor(Object(I.c)(1.5)), a._range = 200, a._currClipAmmo = 30, a._maxClipAmmo = 30, a._muzzleFlashPosition = Object(p.l)(0, .08, .48), a._muzzleFlashScale = Object(p.l)(.2, .2, .2), a._isReloading = !1, a._maxRecoil = .08, a._recoilGainVel = .3, a._recoilRecoverVel = .2, a._recoilActiveTime = 100, a._ammoItemType = s.a.AMMO_ASSAULT_RIFLE, a._bulletsPerShot = 1, a._shellModelID = R.a.ASSAULT_RIFLE_SHELL, a._shellModelOrigin = Object(p.l)(0, 0, 0), a._gunShotSoundType = T.a.GUN_SHOT_COMBAT_ASSAULT_RIFLE, a._shootCooldownType = _.a.SHOOT, a
            }

            i()(t, e);
            var a = t.prototype;
            return a.clone = function () {
                var t = e.prototype.clone.call(this);
                return t._currClipAmmo = this._currClipAmmo, t._isReloading = this._isReloading, t
            }, a.getADSPosition = function () {
                return Object(p.l)(-.12, .04, 0)
            }, a.onUpdateMetadata = function (t) {
                e.prototype.onUpdateMetadata.call(this, t);
                for (var a, n = h(t); !(a = n()).done;) {
                    var r = a.value;
                    switch (r.metadataType) {
                        case E.a.GUN_CURR_NUM_CLIP_AMMO:
                            this._currClipAmmo = r.value;
                            break;
                        case E.a.GUN_IS_RELOADING:
                            this._isReloading = 1 === r.value
                    }
                }
            }, a.canShoot = function (e, t) {
                return t.getControlState() !== l.a.RUNNING && (!(this._currClipAmmo <= 0) && !(this._isReloading && !e.cooldownManager.cooldownExpired(_.a.RELOAD)))
            }, a.onLeftClick = function (e, t, a) {
                var n = e.cooldownManager.requestCooldown(new c.a(this._shootCooldownType, this._fireRate));
                n && this._currClipAmmo <= 0 ? this.reload(e, t, a) && a && S.a.emit(O.a.RELOAD, this.reloadTime) : this.canShoot(e, t) && n && this.shoot(e, t, a)
            }, a.shoot = function (e, t, a) {
                if (--this._currClipAmmo, a) {
                    // #Recoil
                    t.pointerLockControls.setRecoilVel(window.recoilHack ? 0 : this._recoilGainVel, window.recoilHack ? 0 : this._recoilRecoverVel, window.recoilHack ? 0 : this._recoilActiveTime), t.controlsRenderer.kickBack(.03);
                    for (var n = 0; n < this._bulletsPerShot; n++) t.controlsRenderer.addBullet();
                    t.controlsRenderer.addShell(this._shellModelID), t.controlsRenderer.playSound(this._gunShotSoundType)
                }
                S.a.emit(O.a.AMMO_UPDATE, this._currClipAmmo, e.inventory.countItem(this._ammoItemType))
            }, a.onItemHoldingUpdate = function (e, t, a, n) {
                if (n && this._isReloading && t.physicsStep.seqId - t.cooldownManager.getCooldown(_.a.RELOAD) == -Math.floor(Object(I.c)(.5)) && a.controlsRenderer.playSound(T.a.GUN_RELOAD_FINISH), this._isReloading && t.cooldownManager.cooldownExpired(_.a.RELOAD)) {
                    var r = t.inventory.countItem(this._ammoItemType),
                        o = Math.min(this._maxClipAmmo - this.currClipAmmo, r);
                    this._currClipAmmo += o, t.inventory.consumeItems([{
                        type: this._ammoItemType,
                        count: o
                    }]), this._isReloading = !1, t.cooldownManager.resetCooldown(_.a.RELOAD), S.a.emit(O.a.AMMO_UPDATE, this._currClipAmmo, r - o)
                }
            }, a.onActive = function (t, a, n) {
                e.prototype.onActive.call(this, t, a, n), a.pointerLockControls.setRecoilMax(this._maxRecoil), a.controlsRenderer.muzzleFlash.position.set(this._muzzleFlashPosition.x, this._muzzleFlashPosition.y, this._muzzleFlashPosition.z), a.controlsRenderer.muzzleFlash.scale.set(this._muzzleFlashScale.x, this._muzzleFlashScale.y, this._muzzleFlashScale.z)
            }, a.onInactive = function (t, a, n) {
                e.prototype.onInactive.call(this, t, a, n), this._isReloading && (this._isReloading = !1, t.cooldownManager.resetCooldown(_.a.RELOAD))
            }, a.reload = function (e, t, a) {
                var n = e.inventory.countItem(this._ammoItemType);
                return !this._isReloading && this._currClipAmmo < this._maxClipAmmo && n > 0 && (this._isReloading = !0, e.cooldownManager.requestCooldown(new c.a(_.a.RELOAD, this._reloadTime)), a && t.controlsRenderer.playSound(T.a.GUN_RELOAD_START), !0)
            }, a.onInput = function (t, a, n, r, o) {
                r.reload && this.reload(t, a, o) ? o && S.a.emit(O.a.RELOAD, this.reloadTime) : e.prototype.onInput.call(this, t, a, n, r, o)
            }, a.setCanADS = function (e) {
                this._canADS = e
            }, a.setUseScope = function (e) {
                this._useScope = e
            }, a.setADSFOV = function (e) {
                this._adsFOV = e
            }, a.setDefaultSpread = function (e) {
                this._defaultSpread = e
            }, a.setInAirSpread = function (e) {
                this._inAirSpread = e
            }, a.setShootingSpread = function (e) {
                this._shootingSpread = e
            }, a.setMovingSpread = function (e) {
                this._movingSpread = e
            }, a.setShootingMovingSpread = function (e) {
                this._shootingMovingSpread = e
            }, a.setADSSpreadFactor = function (e) {
                this._ADSSpreadFactor = e
            }, a.setCrouchingSpreadFactor = function (e) {
                this._crouchingSpreadFactor = e
            }, a.setADSCrouchingSpreadFactor = function (e) {
                this._ADSCrouchingSpreadFactor = e
            }, a.setSpreadRecovery = function (e) {
                this._spreadRecovery = e
            }, a.setSpreadIncreaseRateMove = function (e) {
                this._spreadIncreaseRateMove = e
            }, a.setSpreadIncreaseRateJump = function (e) {
                this._spreadIncreaseRateJump = e
            }, a.setSpreadIncreaseRateShoot = function (e) {
                this._spreadIncreaseRateShoot = e
            }, a.setFireRate = function (e) {
                this._fireRate = e
            }, a.setReloadTime = function (e) {
                this._reloadTime = e
            }, a.setRange = function (e) {
                this._range = e
            }, a.setAmmo = function (e) {
                this._currClipAmmo = e, this._maxClipAmmo = e
            }, a.setMaxClipAmmo = function (e) {
                this._maxClipAmmo = e
            }, a.setMuzzleFlashPosition = function (e) {
                this._muzzleFlashPosition = e
            }, a.setMuzzleFlashScale = function (e) {
                this._muzzleFlashScale = e
            }, a.setAmmoItemType = function (e) {
                this._ammoItemType = e
            }, a.setBulletsPerShot = function (e) {
                this._bulletsPerShot = e
            }, a.setShellModelID = function (e) {
                this._shellModelID = e
            }, a.setShellModelOrigin = function (e) {
                this._shellModelOrigin = e
            }, a.setGunShotSoundType = function (e) {
                this._gunShotSoundType = e
            }, a.setMaxRecoil = function (e) {
                this._maxRecoil = e
            }, a.setRecoilGainVel = function (e) {
                this._recoilGainVel = e
            }, a.setRecoilRecoveryVel = function (e) {
                this._recoilRecoverVel = e
            }, a.setRecoilActiveTime = function (e) {
                this._recoilActiveTime = e
            }, a.setShootCooldownType = function (e) {
                this._shootCooldownType = e
            }, r()(t, [{
                key: "canADS", get: function () {
                    return this._canADS
                }
            }, {
                key: "useScope", get: function () {
                    return this._useScope
                }
            }, {
                key: "adsFOV", get: function () {
                    return this._adsFOV
                }
            }, {
                key: "defaultSpread", get: function () {
                    return this._defaultSpread
                }
            }, {
                key: "inAirSpread", get: function () {
                    return this._inAirSpread
                }
            }, {
                key: "shootingSpread", get: function () {
                    return this._shootingSpread
                }
            }, {
                key: "movingSpread", get: function () {
                    return this._movingSpread
                }
            }, {
                key: "shootingMovingSpread", get: function () {
                    return this._shootingMovingSpread
                }
            }, {
                key: "ADSSpreadFactor", get: function () {
                    return this._ADSSpreadFactor
                }
            }, {
                key: "crouchingSpreadFactor", get: function () {
                    return this._crouchingSpreadFactor
                }
            }, {
                key: "ADSCrouchingSpreadFactor", get: function () {
                    return this._ADSCrouchingSpreadFactor
                }
            }, {
                key: "spreadRecovery", get: function () {
                    return this._spreadRecovery
                }
            }, {
                key: "spreadIncreaseRateMove", get: function () {
                    return this._spreadIncreaseRateMove
                }
            }, {
                key: "spreadIncreaseRateJump", get: function () {
                    return this._spreadIncreaseRateJump
                }
            }, {
                key: "spreadIncreaseRateShoot", get: function () {
                    return this._spreadIncreaseRateShoot
                }
            }, {
                key: "fireRate", get: function () {
                    return this._fireRate
                }
            }, {
                key: "reloadTime", get: function () {
                    // #Reload
                    return window.noReload ? 0 : this._reloadTime
                }
            }, {
                key: "range", get: function () {
                    return this._range
                }
            }, {
                key: "currClipAmmo", get: function () {
                    return this._currClipAmmo
                }, set: function (e) {
                    this._currClipAmmo = e
                }
            }, {
                key: "maxClipAmmo", get: function () {
                    return this._maxClipAmmo
                }
            }, {
                key: "ammoItemType", get: function () {
                    return this._ammoItemType
                }
            }, {
                key: "bulletsPerShot", get: function () {
                    return this._bulletsPerShot
                }
            }, {
                key: "shellModelID", get: function () {
                    return this._shellModelID
                }
            }, {
                key: "shellModelOrigin", get: function () {
                    return this._shellModelOrigin
                }
            }, {
                key: "gunShotSoundType", get: function () {
                    return this._gunShotSoundType
                }
            }, {
                key: "shootCooldownType", get: function () {
                    return this._shootCooldownType
                }
            }]), t
        }(u.a)
    }, 93: function (e, t, a) {
        "use strict";
        a.d(t, "e", (function () {
            return r
        })), a.d(t, "a", (function () {
            return o
        })), a.d(t, "c", (function () {
            return s
        })), a.d(t, "b", (function () {
            return u
        })), a.d(t, "d", (function () {
            return c
        }));
        var n = a(34), r = function (e, t) {
            return {x: e, y: t}
        }, o = function (e) {
            return r(e.x, e.y)
        }, i = function (e) {
            return e.x * e.x + e.y * e.y
        }, s = function (e) {
            var t = function (e) {
                return Math.sqrt(i(e))
            }(e);
            0 !== t && (e.x /= t, e.y /= t)
        }, u = function (e, t) {
            var a = r(e.x - t.x, e.y - t.y);
            return i(a)
        }, c = function (e) {
            return Object(n.l)(-Math.cos(e.x) * Math.sin(e.y), Math.sin(e.x), -Math.cos(e.x) * Math.cos(e.y))
        }
    }, 94: function (e, t, a) {
        "use strict";
        var n, r = a(85), o = a(84);
        t.a = ((n = {})[r.a.AIR] = {
            opaque: !1,
            name: "Air",
            description: "How did you get this?",
            hardness: 1
        }, n[r.a.GRASS] = {
            opaque: !0,
            textures: {
                top: {x: 2, y: 0},
                bottom: {x: 0, y: 0},
                left: {x: 1, y: 0},
                right: {x: 1, y: 0},
                front: {x: 1, y: 0},
                back: {x: 1, y: 0}
            },
            name: "Grass",
            description: "A dirt block with grass on top",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.DIRT] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 0},
                bottom: {x: 0, y: 0},
                left: {x: 0, y: 0},
                right: {x: 0, y: 0},
                front: {x: 0, y: 0},
                back: {x: 0, y: 0}
            },
            name: "Dirt",
            description: "Muddy and squishy",
            hardness: 1,
            sound: o.a.FOOTSTEP_DIRT
        }, n[r.a.SAND] = {
            opaque: !0,
            textures: {
                top: {x: 3, y: 0},
                bottom: {x: 3, y: 0},
                left: {x: 3, y: 0},
                right: {x: 3, y: 0},
                front: {x: 3, y: 0},
                back: {x: 3, y: 0}
            },
            name: "Sand",
            description: "Grainy, found near water",
            hardness: 1,
            sound: o.a.FOOTSTEP_SAND
        }, n[r.a.ROCK] = {
            opaque: !0,
            textures: {
                top: {x: 1, y: 1},
                bottom: {x: 1, y: 1},
                left: {x: 1, y: 1},
                right: {x: 1, y: 1},
                front: {x: 1, y: 1},
                back: {x: 1, y: 1}
            },
            name: "Rock",
            description: "A natural resource found underground",
            hardness: 2,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.LOG_UP] = {
            opaque: !0,
            textures: {
                top: {x: 5, y: 0},
                bottom: {x: 5, y: 0},
                left: {x: 4, y: 0},
                right: {x: 4, y: 0},
                front: {x: 4, y: 0},
                back: {x: 4, y: 0}
            },
            name: "Log",
            description: "Unprocessed raw wood",
            hardness: 1.5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.LEAVES] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 1},
                bottom: {x: 0, y: 1},
                left: {x: 0, y: 1},
                right: {x: 0, y: 1},
                front: {x: 0, y: 1},
                back: {x: 0, y: 1}
            },
            name: "Leaves",
            description: "Grow on logs",
            hardness: .5,
            sound: o.a.FOOTSTEP_LEAVES
        }, n[r.a.LEAVES_WITH_RED_BERRIES] = {
            opaque: !0,
            textures: {
                top: {x: 3, y: 6},
                bottom: {x: 3, y: 6},
                left: {x: 3, y: 6},
                right: {x: 3, y: 6},
                front: {x: 3, y: 6},
                back: {x: 3, y: 6}
            },
            name: "Leaves",
            description: "Nurtures healthy red berries",
            hardness: .5,
            sound: o.a.FOOTSTEP_LEAVES
        }, n[r.a.LEAVES_WITH_ORANGE_BERRIES] = {
            opaque: !0,
            textures: {
                top: {x: 4, y: 6},
                bottom: {x: 4, y: 6},
                left: {x: 4, y: 6},
                right: {x: 4, y: 6},
                front: {x: 4, y: 6},
                back: {x: 4, y: 6}
            },
            name: "Leaves",
            description: "Nurtures healthy orange berries",
            hardness: .5,
            sound: o.a.FOOTSTEP_LEAVES
        }, n[r.a.BEDROCK] = {
            opaque: !0,
            textures: {
                top: {x: 2, y: 1},
                bottom: {x: 2, y: 1},
                left: {x: 2, y: 1},
                right: {x: 2, y: 1},
                front: {x: 2, y: 1},
                back: {x: 2, y: 1}
            },
            name: "Bedrock",
            description: "Indestructable",
            hardness: 999999,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.TEMPLE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 3, y: 1},
                bottom: {x: 3, y: 1},
                left: {x: 3, y: 1},
                right: {x: 3, y: 1},
                front: {x: 3, y: 1},
                back: {x: 3, y: 1}
            },
            name: "Temple Brick",
            description: "Myterious brick found on the temple walls",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.MOSSY_TEMPLE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 5, y: 1},
                bottom: {x: 5, y: 1},
                left: {x: 5, y: 1},
                right: {x: 5, y: 1},
                front: {x: 5, y: 1},
                back: {x: 5, y: 1}
            },
            name: "Mossy Temple Brick",
            description: "Temple brick with some moss grown on it",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.CRACKED_TEMPLE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 2},
                bottom: {x: 0, y: 2},
                left: {x: 0, y: 2},
                right: {x: 0, y: 2},
                front: {x: 0, y: 2},
                back: {x: 0, y: 2}
            },
            name: "Cracked Temple Brick",
            description: "Temple brick with some cracks",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.MYSTICAL_TEMPLE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 1, y: 2},
                bottom: {x: 1, y: 2},
                left: {x: 1, y: 2},
                right: {x: 1, y: 2},
                front: {x: 1, y: 2},
                back: {x: 1, y: 2}
            },
            name: "Mystical Temple Brick",
            description: "Temple brick with a mysterious pattern. No one knows what it means",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.WATER] = {
            opaque: !1,
            textures: {
                top: {x: 4, y: 1},
                bottom: {x: 4, y: 1},
                left: {x: 4, y: 1},
                right: {x: 4, y: 1},
                front: {x: 4, y: 1},
                back: {x: 4, y: 1}
            },
            name: "Water",
            description: "Blue fluid that flows",
            hardness: 1
        }, n[r.a.WOODEN_CRATE] = {
            opaque: !0,
            textures: {
                top: {x: 2, y: 2},
                bottom: {x: 2, y: 2},
                left: {x: 2, y: 2},
                right: {x: 2, y: 2},
                front: {x: 2, y: 2},
                back: {x: 2, y: 2}
            },
            name: "Wooden Crate",
            description: "You might find some items inside",
            hardness: .5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.REINFORCED_IRON] = {
            opaque: !0,
            textures: {
                top: {x: 3, y: 2},
                bottom: {x: 3, y: 2},
                left: {x: 3, y: 2},
                right: {x: 3, y: 2},
                front: {x: 3, y: 2},
                back: {x: 3, y: 2}
            },
            name: "Reinforced Iron",
            description: "Very durable material. Perfect for defense",
            hardness: 6,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.EMERALD_ORE] = {
            opaque: !0,
            textures: {
                top: {x: 4, y: 2},
                bottom: {x: 4, y: 2},
                left: {x: 4, y: 2},
                right: {x: 4, y: 2},
                front: {x: 4, y: 2},
                back: {x: 4, y: 2}
            },
            name: "Emerald Ore",
            description: "Stone filled with some emerald ore",
            hardness: 2.1,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.SAPPHIRE_ORE] = {
            opaque: !0,
            textures: {
                top: {x: 5, y: 2},
                bottom: {x: 5, y: 2},
                left: {x: 5, y: 2},
                right: {x: 5, y: 2},
                front: {x: 5, y: 2},
                back: {x: 5, y: 2}
            },
            name: "Sapphire Ore",
            description: "Stone filled with some sapphire ore",
            hardness: 2.1,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.RUBY_ORE] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 3},
                bottom: {x: 0, y: 3},
                left: {x: 0, y: 3},
                right: {x: 0, y: 3},
                front: {x: 0, y: 3},
                back: {x: 0, y: 3}
            },
            name: "Ruby Ore",
            description: "Stone filled with some ruby ore",
            hardness: 2.1,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.IRON_ORE] = {
            opaque: !0,
            textures: {
                top: {x: 1, y: 3},
                bottom: {x: 1, y: 3},
                left: {x: 1, y: 3},
                right: {x: 1, y: 3},
                front: {x: 1, y: 3},
                back: {x: 1, y: 3}
            },
            name: "Iron Ore",
            description: "Stone filled with some iron ore",
            hardness: 2.1,
            sound: o.a.FOOTSTEP_ROCKS
        }, n[r.a.WOOD] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 0},
                bottom: {x: 7, y: 0},
                left: {x: 7, y: 0},
                right: {x: 7, y: 0},
                front: {x: 7, y: 0},
                back: {x: 7, y: 0}
            },
            name: "Wood",
            description: "Useful building material crafted from logs",
            hardness: 1.5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.STONE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 6, y: 0},
                bottom: {x: 6, y: 0},
                left: {x: 6, y: 0},
                right: {x: 6, y: 0},
                front: {x: 6, y: 0},
                back: {x: 6, y: 0}
            },
            name: "Stone Brick",
            description: "Useful building material crafted from rocks",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.WOODEN_CHEST] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 4},
                bottom: {x: 0, y: 4},
                left: {x: 1, y: 4},
                right: {x: 1, y: 4},
                front: {x: 2, y: 4},
                back: {x: 1, y: 4}
            },
            name: "Wooden Chest",
            description: "Low tier chest that can store some items",
            hardness: .5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.IRON_CHEST] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 5},
                bottom: {x: 0, y: 5},
                left: {x: 1, y: 5},
                right: {x: 1, y: 5},
                front: {x: 2, y: 5},
                back: {x: 1, y: 5}
            },
            name: "Iron Chest",
            description: "Mid-tier chest that can store more items",
            hardness: .5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.GOLDEN_CHEST] = {
            opaque: !0,
            textures: {
                top: {x: 0, y: 6},
                bottom: {x: 0, y: 6},
                left: {x: 1, y: 6},
                right: {x: 1, y: 6},
                front: {x: 2, y: 6},
                back: {x: 1, y: 6}
            },
            name: "Golden Chest",
            description: "High tier chest that can store many items",
            hardness: .5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.CACTUS_X] = {
            opaque: !0,
            textures: {
                top: {x: 4, y: 3},
                bottom: {x: 4, y: 3},
                left: {x: 3, y: 3},
                right: {x: 3, y: 3},
                front: {x: 4, y: 3},
                back: {x: 4, y: 3}
            },
            name: "Cactus",
            description: "A plant that grows in the desert",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.CACTUS_Y] = {
            opaque: !0,
            textures: {
                top: {x: 3, y: 3},
                bottom: {x: 3, y: 3},
                left: {x: 2, y: 3},
                right: {x: 2, y: 3},
                front: {x: 2, y: 3},
                back: {x: 2, y: 3}
            },
            name: "Cactus",
            description: "A plant that grows in the desert",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.CACTUS_Z] = {
            opaque: !0,
            textures: {
                top: {x: 2, y: 3},
                bottom: {x: 2, y: 3},
                left: {x: 4, y: 3},
                right: {x: 4, y: 3},
                front: {x: 3, y: 3},
                back: {x: 3, y: 3}
            },
            name: "Cactus",
            description: "A plant that grows in the desert",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.SAND_TREASURE_MARKER] = {
            opaque: !0,
            textures: {
                top: {x: 6, y: 1},
                bottom: {x: 3, y: 0},
                left: {x: 3, y: 0},
                right: {x: 3, y: 0},
                front: {x: 3, y: 0},
                back: {x: 3, y: 0}
            },
            name: "Sand with Treasure Marker",
            description: "Sand marked with a red cross on top. Treasures might be hidden below it",
            hardness: 1,
            sound: o.a.FOOTSTEP_SAND
        }, n[r.a.GRASS_TREASURE_MARKER] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 1},
                bottom: {x: 0, y: 0},
                left: {x: 1, y: 0},
                right: {x: 1, y: 0},
                front: {x: 1, y: 0},
                back: {x: 1, y: 0}
            },
            name: "Grass with Treasure Marker",
            description: "Grass marked with a red cross on top. Treasures might be hidden below it",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.SANDSTONE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 6, y: 2},
                bottom: {x: 6, y: 2},
                left: {x: 6, y: 2},
                right: {x: 6, y: 2},
                front: {x: 6, y: 2},
                back: {x: 6, y: 2}
            },
            name: "Sandstone Brick",
            description: "Useful building material crafted from sand",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.SANDSTONE_PILLAR] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 2},
                bottom: {x: 7, y: 2},
                left: {x: 6, y: 3},
                right: {x: 6, y: 3},
                front: {x: 6, y: 3},
                back: {x: 6, y: 3}
            },
            name: "Sandstone Pillar",
            description: "Useful building material crafted from sand",
            hardness: 2.5,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.SMOOTH_SANDSTONE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 2},
                bottom: {x: 7, y: 2},
                left: {x: 7, y: 2},
                right: {x: 7, y: 2},
                front: {x: 7, y: 2},
                back: {x: 7, y: 2}
            },
            name: "Smooth Sandstone Brick",
            description: "Useful building material crafted from sand",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.WORK_STATION] = {
            opaque: !0,
            textures: {
                top: {x: 4, y: 4},
                bottom: {x: 2, y: 2},
                left: {x: 3, y: 4},
                right: {x: 3, y: 4},
                front: {x: 5, y: 4},
                back: {x: 5, y: 4}
            },
            name: "Work Station",
            description: "Allows you to craft more advanced items when placed on the ground nearby",
            hardness: .5,
            sound: o.a.FOOTSTEP_WOOD
        }, n[r.a.SNOWY_GRASS] = {
            opaque: !0,
            textures: {
                top: {x: 4, y: 5},
                bottom: {x: 0, y: 0},
                left: {x: 3, y: 5},
                right: {x: 3, y: 5},
                front: {x: 3, y: 5},
                back: {x: 3, y: 5}
            },
            name: "Snowy Grass",
            description: "A dirt block with snowy grass on top",
            hardness: 1,
            sound: o.a.FOOTSTEP_GRASS
        }, n[r.a.SAPPHIRE_STONE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 6, y: 4},
                bottom: {x: 6, y: 4},
                left: {x: 6, y: 4},
                right: {x: 6, y: 4},
                front: {x: 6, y: 4},
                back: {x: 6, y: 4}
            },
            name: "Sapphire Stone Brick",
            description: "Stone brick made out of sapphire",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.RUBY_STONE_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 4},
                bottom: {x: 7, y: 4},
                left: {x: 7, y: 4},
                right: {x: 7, y: 4},
                front: {x: 7, y: 4},
                back: {x: 7, y: 4}
            },
            name: "Ruby Stone Brick",
            description: "Stone brick made out of ruby",
            hardness: 4,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.LOADOUT_STATION] = {
            opaque: !0,
            textures: {
                top: {x: 5, y: 5},
                bottom: {x: 6, y: 5},
                left: {x: 6, y: 5},
                right: {x: 6, y: 5},
                front: {x: 6, y: 5},
                back: {x: 6, y: 5}
            },
            name: "Loadout Station",
            description: "Supply station that allows you to choose your loadouts",
            hardness: 2.5,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.BEDROCK_BRICK] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 5},
                bottom: {x: 7, y: 5},
                left: {x: 7, y: 5},
                right: {x: 7, y: 5},
                front: {x: 7, y: 5},
                back: {x: 7, y: 5}
            },
            name: "Bedrock Brick",
            description: "Indestructible bricks made out of bedrock",
            hardness: 999999,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.REINFORCED_RUBY] = {
            opaque: !0,
            textures: {
                top: {x: 5, y: 6},
                bottom: {x: 5, y: 6},
                left: {x: 5, y: 6},
                right: {x: 5, y: 6},
                front: {x: 5, y: 6},
                back: {x: 5, y: 6}
            },
            name: "Reinforced Ruby",
            description: "Indestructable blocks made out of ruby",
            hardness: 999999,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.REINFORCED_SAPPHIRE] = {
            opaque: !0,
            textures: {
                top: {x: 6, y: 6},
                bottom: {x: 6, y: 6},
                left: {x: 6, y: 6},
                right: {x: 6, y: 6},
                front: {x: 6, y: 6},
                back: {x: 6, y: 6}
            },
            name: "Reinforced Sapphire",
            description: "Indestructable blocks made out of sapphire",
            hardness: 999999,
            sound: o.a.FOOTSTEP_BRICKS
        }, n[r.a.SULFUR_ORE] = {
            opaque: !0,
            textures: {
                top: {x: 7, y: 3},
                bottom: {x: 7, y: 3},
                left: {x: 7, y: 3},
                right: {x: 7, y: 3},
                front: {x: 7, y: 3},
                back: {x: 7, y: 3}
            },
            name: "Sulfur Ore",
            description: "Stone filled with some sulfur ore",
            hardness: 2.1,
            sound: o.a.FOOTSTEP_ROCKS
        }, n)
    }, 95: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.WALKING = 0] = "WALKING", e[e.RUNNING = 1] = "RUNNING", e[e.CROUCHING = 2] = "CROUCHING", e[e.FREE_FALLING = 3] = "FREE_FALLING", e[e.GLIDING = 4] = "GLIDING", e[e.NOCLIP = 5] = "NOCLIP"
        }(n || (n = {})), t.a = n
    }, 96: function (e, t, a) {
        "use strict";
        var n;
        !function (e) {
            e[e.BLOCK_PLACE = 0] = "BLOCK_PLACE", e[e.ITEM_SWITCH = 1] = "ITEM_SWITCH", e[e.SHOOT = 2] = "SHOOT", e[e.RELOAD = 3] = "RELOAD", e[e.SPRINT_STOP_ITEM_USE_GRACE = 4] = "SPRINT_STOP_ITEM_USE_GRACE", e[e.DROP_ITEM = 5] = "DROP_ITEM", e[e.ITEM_USE = 6] = "ITEM_USE", e[e.TOGGLE_GLIDE = 7] = "TOGGLE_GLIDE", e[e.MELEE_ATTACK = 8] = "MELEE_ATTACK", e[e.CHAT = 9] = "CHAT", e[e.CHAT_SPAM = 10] = "CHAT_SPAM", e[e.CACTUS_DAMAGE = 11] = "CACTUS_DAMAGE", e[e.GEM_PICKUP_ALERT = 12] = "GEM_PICKUP_ALERT", e[e.BURST_SHOOT = 13] = "BURST_SHOOT", e[e.SPRAY = 14] = "SPRAY", e[e.SNIPER_SHOOT = 15] = "SNIPER_SHOOT"
        }(n || (n = {})), t.a = n
    }
}]);