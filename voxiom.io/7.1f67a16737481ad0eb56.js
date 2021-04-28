


(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    337: function (t, e, i) {
        t.exports = function () {
            return i(338)('!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var o,n=function(t,e,r){return{x:t,y:e,z:r}},s=(void 0===navigator.hardwareConcurrency||navigator.hardwareConcurrency,32),a=.5;n(.35,1.3,.35),n(.3,1.3,.3);!function(t){t[t.AIR=0]="AIR",t[t.GRASS=1]="GRASS",t[t.DIRT=2]="DIRT",t[t.SAND=3]="SAND",t[t.ROCK=4]="ROCK",t[t.LOG_UP=5]="LOG_UP",t[t.LEAVES=6]="LEAVES",t[t.LEAVES_WITH_RED_BERRIES=7]="LEAVES_WITH_RED_BERRIES",t[t.LEAVES_WITH_ORANGE_BERRIES=8]="LEAVES_WITH_ORANGE_BERRIES",t[t.BEDROCK=9]="BEDROCK",t[t.TEMPLE_BRICK=10]="TEMPLE_BRICK",t[t.MOSSY_TEMPLE_BRICK=11]="MOSSY_TEMPLE_BRICK",t[t.CRACKED_TEMPLE_BRICK=12]="CRACKED_TEMPLE_BRICK",t[t.MYSTICAL_TEMPLE_BRICK=13]="MYSTICAL_TEMPLE_BRICK",t[t.WATER=14]="WATER",t[t.WOODEN_CRATE=15]="WOODEN_CRATE",t[t.REINFORCED_IRON=16]="REINFORCED_IRON",t[t.EMERALD_ORE=17]="EMERALD_ORE",t[t.RUBY_ORE=18]="RUBY_ORE",t[t.SAPPHIRE_ORE=19]="SAPPHIRE_ORE",t[t.IRON_ORE=20]="IRON_ORE",t[t.WOOD=21]="WOOD",t[t.STONE_BRICK=22]="STONE_BRICK",t[t.WOODEN_CHEST=23]="WOODEN_CHEST",t[t.IRON_CHEST=24]="IRON_CHEST",t[t.GOLDEN_CHEST=25]="GOLDEN_CHEST",t[t.CACTUS_X=26]="CACTUS_X",t[t.CACTUS_Y=27]="CACTUS_Y",t[t.CACTUS_Z=28]="CACTUS_Z",t[t.SAND_TREASURE_MARKER=29]="SAND_TREASURE_MARKER",t[t.GRASS_TREASURE_MARKER=30]="GRASS_TREASURE_MARKER",t[t.SANDSTONE_BRICK=31]="SANDSTONE_BRICK",t[t.SANDSTONE_PILLAR=32]="SANDSTONE_PILLAR",t[t.SMOOTH_SANDSTONE_BRICK=33]="SMOOTH_SANDSTONE_BRICK",t[t.WORK_STATION=34]="WORK_STATION",t[t.SNOWY_GRASS=35]="SNOWY_GRASS",t[t.SAPPHIRE_STONE_BRICK=36]="SAPPHIRE_STONE_BRICK",t[t.RUBY_STONE_BRICK=37]="RUBY_STONE_BRICK",t[t.LOADOUT_STATION=38]="LOADOUT_STATION",t[t.BEDROCK_BRICK=39]="BEDROCK_BRICK",t[t.REINFORCED_RUBY=40]="REINFORCED_RUBY",t[t.REINFORCED_SAPPHIRE=41]="REINFORCED_SAPPHIRE",t[t.SULFUR_ORE=42]="SULFUR_ORE"}(o||(o={}));var h,u=o;!function(t){t[t.FOOTSTEP_GRASS=0]="FOOTSTEP_GRASS",t[t.FOOTSTEP_SAND=1]="FOOTSTEP_SAND",t[t.FOOTSTEP_ROCKS=2]="FOOTSTEP_ROCKS",t[t.FOOTSTEP_BRICKS=3]="FOOTSTEP_BRICKS",t[t.FOOTSTEP_DIRT=4]="FOOTSTEP_DIRT",t[t.FOOTSTEP_LEAVES=5]="FOOTSTEP_LEAVES",t[t.ITEM_PICKUP=6]="ITEM_PICKUP",t[t.WATER_SPLASH=7]="WATER_SPLASH",t[t.FOOTSTEP_WATER=8]="FOOTSTEP_WATER",t[t.FOOTSTEP_WOOD=9]="FOOTSTEP_WOOD",t[t.GUN_SHOT_COMBAT_ASSAULT_RIFLE=10]="GUN_SHOT_COMBAT_ASSAULT_RIFLE",t[t.GUN_SHOT_TACTICAL_ASSAULT_RIFLE=11]="GUN_SHOT_TACTICAL_ASSAULT_RIFLE",t[t.GUN_SHOT_SURGE_ASSAULT_RIFLE=12]="GUN_SHOT_SURGE_ASSAULT_RIFLE",t[t.GUN_SHOT_STRIKE_PISTOL=13]="GUN_SHOT_STRIKE_PISTOL",t[t.GUN_SHOT_MAGNUM_PISTOL=14]="GUN_SHOT_MAGNUM_PISTOL",t[t.GUN_SHOT_BURST_SHOTGUN=15]="GUN_SHOT_BURST_SHOTGUN",t[t.GUN_SHOT_LIGHT_SUBMACHINE_GUN=16]="GUN_SHOT_LIGHT_SUBMACHINE_GUN",t[t.GUN_SHOT_COMPACT_SUBMACHINE_GUN=17]="GUN_SHOT_COMPACT_SUBMACHINE_GUN",t[t.GUN_SHOT_LIGHT_SNIPER_RIFLE=18]="GUN_SHOT_LIGHT_SNIPER_RIFLE",t[t.GUN_SHOT_HEAVY_SNIPER_RIFLE=19]="GUN_SHOT_HEAVY_SNIPER_RIFLE",t[t.GUN_RELOAD_START=20]="GUN_RELOAD_START",t[t.GUN_RELOAD_FINISH=21]="GUN_RELOAD_FINISH",t[t.HIT=22]="HIT",t[t.HIT_HEADSHOT=23]="HIT_HEADSHOT",t[t.KILL=24]="KILL",t[t.DAMAGE=25]="DAMAGE",t[t.ALERT_SHORT=26]="ALERT_SHORT",t[t.ALERT_LONG=27]="ALERT_LONG",t[t.ALERT_NEGATIVE=28]="ALERT_NEGATIVE",t[t.ALERT_AMBIENT=29]="ALERT_AMBIENT",t[t.ALERT_TICK=30]="ALERT_TICK",t[t.SPRAY=31]="SPRAY",t[t.CRATE_OPEN=32]="CRATE_OPEN"}(h||(h={}));var p,i,x=h,y=((p={})[u.AIR]={opaque:!1,name:"Air",description:"How did you get this?",hardness:1},p[u.GRASS]={opaque:!0,textures:{top:{x:2,y:0},bottom:{x:0,y:0},left:{x:1,y:0},right:{x:1,y:0},front:{x:1,y:0},back:{x:1,y:0}},name:"Grass",description:"A dirt block with grass on top",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.DIRT]={opaque:!0,textures:{top:{x:0,y:0},bottom:{x:0,y:0},left:{x:0,y:0},right:{x:0,y:0},front:{x:0,y:0},back:{x:0,y:0}},name:"Dirt",description:"Muddy and squishy",hardness:1,sound:x.FOOTSTEP_DIRT},p[u.SAND]={opaque:!0,textures:{top:{x:3,y:0},bottom:{x:3,y:0},left:{x:3,y:0},right:{x:3,y:0},front:{x:3,y:0},back:{x:3,y:0}},name:"Sand",description:"Grainy, found near water",hardness:1,sound:x.FOOTSTEP_SAND},p[u.ROCK]={opaque:!0,textures:{top:{x:1,y:1},bottom:{x:1,y:1},left:{x:1,y:1},right:{x:1,y:1},front:{x:1,y:1},back:{x:1,y:1}},name:"Rock",description:"A natural resource found underground",hardness:2,sound:x.FOOTSTEP_ROCKS},p[u.LOG_UP]={opaque:!0,textures:{top:{x:5,y:0},bottom:{x:5,y:0},left:{x:4,y:0},right:{x:4,y:0},front:{x:4,y:0},back:{x:4,y:0}},name:"Log",description:"Unprocessed raw wood",hardness:1.5,sound:x.FOOTSTEP_WOOD},p[u.LEAVES]={opaque:!0,textures:{top:{x:0,y:1},bottom:{x:0,y:1},left:{x:0,y:1},right:{x:0,y:1},front:{x:0,y:1},back:{x:0,y:1}},name:"Leaves",description:"Grow on logs",hardness:.5,sound:x.FOOTSTEP_LEAVES},p[u.LEAVES_WITH_RED_BERRIES]={opaque:!0,textures:{top:{x:3,y:6},bottom:{x:3,y:6},left:{x:3,y:6},right:{x:3,y:6},front:{x:3,y:6},back:{x:3,y:6}},name:"Leaves",description:"Nurtures healthy red berries",hardness:.5,sound:x.FOOTSTEP_LEAVES},p[u.LEAVES_WITH_ORANGE_BERRIES]={opaque:!0,textures:{top:{x:4,y:6},bottom:{x:4,y:6},left:{x:4,y:6},right:{x:4,y:6},front:{x:4,y:6},back:{x:4,y:6}},name:"Leaves",description:"Nurtures healthy orange berries",hardness:.5,sound:x.FOOTSTEP_LEAVES},p[u.BEDROCK]={opaque:!0,textures:{top:{x:2,y:1},bottom:{x:2,y:1},left:{x:2,y:1},right:{x:2,y:1},front:{x:2,y:1},back:{x:2,y:1}},name:"Bedrock",description:"Indestructable",hardness:999999,sound:x.FOOTSTEP_ROCKS},p[u.TEMPLE_BRICK]={opaque:!0,textures:{top:{x:3,y:1},bottom:{x:3,y:1},left:{x:3,y:1},right:{x:3,y:1},front:{x:3,y:1},back:{x:3,y:1}},name:"Temple Brick",description:"Myterious brick found on the temple walls",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.MOSSY_TEMPLE_BRICK]={opaque:!0,textures:{top:{x:5,y:1},bottom:{x:5,y:1},left:{x:5,y:1},right:{x:5,y:1},front:{x:5,y:1},back:{x:5,y:1}},name:"Mossy Temple Brick",description:"Temple brick with some moss grown on it",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.CRACKED_TEMPLE_BRICK]={opaque:!0,textures:{top:{x:0,y:2},bottom:{x:0,y:2},left:{x:0,y:2},right:{x:0,y:2},front:{x:0,y:2},back:{x:0,y:2}},name:"Cracked Temple Brick",description:"Temple brick with some cracks",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.MYSTICAL_TEMPLE_BRICK]={opaque:!0,textures:{top:{x:1,y:2},bottom:{x:1,y:2},left:{x:1,y:2},right:{x:1,y:2},front:{x:1,y:2},back:{x:1,y:2}},name:"Mystical Temple Brick",description:"Temple brick with a mysterious pattern. No one knows what it means",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.WATER]={opaque:!1,textures:{top:{x:4,y:1},bottom:{x:4,y:1},left:{x:4,y:1},right:{x:4,y:1},front:{x:4,y:1},back:{x:4,y:1}},name:"Water",description:"Blue fluid that flows",hardness:1},p[u.WOODEN_CRATE]={opaque:!0,textures:{top:{x:2,y:2},bottom:{x:2,y:2},left:{x:2,y:2},right:{x:2,y:2},front:{x:2,y:2},back:{x:2,y:2}},name:"Wooden Crate",description:"You might find some items inside",hardness:.5,sound:x.FOOTSTEP_WOOD},p[u.REINFORCED_IRON]={opaque:!0,textures:{top:{x:3,y:2},bottom:{x:3,y:2},left:{x:3,y:2},right:{x:3,y:2},front:{x:3,y:2},back:{x:3,y:2}},name:"Reinforced Iron",description:"Very durable material. Perfect for defense",hardness:6,sound:x.FOOTSTEP_BRICKS},p[u.EMERALD_ORE]={opaque:!0,textures:{top:{x:4,y:2},bottom:{x:4,y:2},left:{x:4,y:2},right:{x:4,y:2},front:{x:4,y:2},back:{x:4,y:2}},name:"Emerald Ore",description:"Stone filled with some emerald ore",hardness:2.1,sound:x.FOOTSTEP_ROCKS},p[u.SAPPHIRE_ORE]={opaque:!0,textures:{top:{x:5,y:2},bottom:{x:5,y:2},left:{x:5,y:2},right:{x:5,y:2},front:{x:5,y:2},back:{x:5,y:2}},name:"Sapphire Ore",description:"Stone filled with some sapphire ore",hardness:2.1,sound:x.FOOTSTEP_ROCKS},p[u.RUBY_ORE]={opaque:!0,textures:{top:{x:0,y:3},bottom:{x:0,y:3},left:{x:0,y:3},right:{x:0,y:3},front:{x:0,y:3},back:{x:0,y:3}},name:"Ruby Ore",description:"Stone filled with some ruby ore",hardness:2.1,sound:x.FOOTSTEP_ROCKS},p[u.IRON_ORE]={opaque:!0,textures:{top:{x:1,y:3},bottom:{x:1,y:3},left:{x:1,y:3},right:{x:1,y:3},front:{x:1,y:3},back:{x:1,y:3}},name:"Iron Ore",description:"Stone filled with some iron ore",hardness:2.1,sound:x.FOOTSTEP_ROCKS},p[u.WOOD]={opaque:!0,textures:{top:{x:7,y:0},bottom:{x:7,y:0},left:{x:7,y:0},right:{x:7,y:0},front:{x:7,y:0},back:{x:7,y:0}},name:"Wood",description:"Useful building material crafted from logs",hardness:1.5,sound:x.FOOTSTEP_WOOD},p[u.STONE_BRICK]={opaque:!0,textures:{top:{x:6,y:0},bottom:{x:6,y:0},left:{x:6,y:0},right:{x:6,y:0},front:{x:6,y:0},back:{x:6,y:0}},name:"Stone Brick",description:"Useful building material crafted from rocks",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.WOODEN_CHEST]={opaque:!0,textures:{top:{x:0,y:4},bottom:{x:0,y:4},left:{x:1,y:4},right:{x:1,y:4},front:{x:2,y:4},back:{x:1,y:4}},name:"Wooden Chest",description:"Low tier chest that can store some items",hardness:.5,sound:x.FOOTSTEP_WOOD},p[u.IRON_CHEST]={opaque:!0,textures:{top:{x:0,y:5},bottom:{x:0,y:5},left:{x:1,y:5},right:{x:1,y:5},front:{x:2,y:5},back:{x:1,y:5}},name:"Iron Chest",description:"Mid-tier chest that can store more items",hardness:.5,sound:x.FOOTSTEP_WOOD},p[u.GOLDEN_CHEST]={opaque:!0,textures:{top:{x:0,y:6},bottom:{x:0,y:6},left:{x:1,y:6},right:{x:1,y:6},front:{x:2,y:6},back:{x:1,y:6}},name:"Golden Chest",description:"High tier chest that can store many items",hardness:.5,sound:x.FOOTSTEP_WOOD},p[u.CACTUS_X]={opaque:!0,textures:{top:{x:4,y:3},bottom:{x:4,y:3},left:{x:3,y:3},right:{x:3,y:3},front:{x:4,y:3},back:{x:4,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.CACTUS_Y]={opaque:!0,textures:{top:{x:3,y:3},bottom:{x:3,y:3},left:{x:2,y:3},right:{x:2,y:3},front:{x:2,y:3},back:{x:2,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.CACTUS_Z]={opaque:!0,textures:{top:{x:2,y:3},bottom:{x:2,y:3},left:{x:4,y:3},right:{x:4,y:3},front:{x:3,y:3},back:{x:3,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.SAND_TREASURE_MARKER]={opaque:!0,textures:{top:{x:6,y:1},bottom:{x:3,y:0},left:{x:3,y:0},right:{x:3,y:0},front:{x:3,y:0},back:{x:3,y:0}},name:"Sand with Treasure Marker",description:"Sand marked with a red cross on top. Treasures might be hidden below it",hardness:1,sound:x.FOOTSTEP_SAND},p[u.GRASS_TREASURE_MARKER]={opaque:!0,textures:{top:{x:7,y:1},bottom:{x:0,y:0},left:{x:1,y:0},right:{x:1,y:0},front:{x:1,y:0},back:{x:1,y:0}},name:"Grass with Treasure Marker",description:"Grass marked with a red cross on top. Treasures might be hidden below it",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.SANDSTONE_BRICK]={opaque:!0,textures:{top:{x:6,y:2},bottom:{x:6,y:2},left:{x:6,y:2},right:{x:6,y:2},front:{x:6,y:2},back:{x:6,y:2}},name:"Sandstone Brick",description:"Useful building material crafted from sand",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.SANDSTONE_PILLAR]={opaque:!0,textures:{top:{x:7,y:2},bottom:{x:7,y:2},left:{x:6,y:3},right:{x:6,y:3},front:{x:6,y:3},back:{x:6,y:3}},name:"Sandstone Pillar",description:"Useful building material crafted from sand",hardness:2.5,sound:x.FOOTSTEP_BRICKS},p[u.SMOOTH_SANDSTONE_BRICK]={opaque:!0,textures:{top:{x:7,y:2},bottom:{x:7,y:2},left:{x:7,y:2},right:{x:7,y:2},front:{x:7,y:2},back:{x:7,y:2}},name:"Smooth Sandstone Brick",description:"Useful building material crafted from sand",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.WORK_STATION]={opaque:!0,textures:{top:{x:4,y:4},bottom:{x:2,y:2},left:{x:3,y:4},right:{x:3,y:4},front:{x:5,y:4},back:{x:5,y:4}},name:"Work Station",description:"Allows you to craft more advanced items when placed on the ground nearby",hardness:.5,sound:x.FOOTSTEP_WOOD},p[u.SNOWY_GRASS]={opaque:!0,textures:{top:{x:4,y:5},bottom:{x:0,y:0},left:{x:3,y:5},right:{x:3,y:5},front:{x:3,y:5},back:{x:3,y:5}},name:"Snowy Grass",description:"A dirt block with snowy grass on top",hardness:1,sound:x.FOOTSTEP_GRASS},p[u.SAPPHIRE_STONE_BRICK]={opaque:!0,textures:{top:{x:6,y:4},bottom:{x:6,y:4},left:{x:6,y:4},right:{x:6,y:4},front:{x:6,y:4},back:{x:6,y:4}},name:"Sapphire Stone Brick",description:"Stone brick made out of sapphire",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.RUBY_STONE_BRICK]={opaque:!0,textures:{top:{x:7,y:4},bottom:{x:7,y:4},left:{x:7,y:4},right:{x:7,y:4},front:{x:7,y:4},back:{x:7,y:4}},name:"Ruby Stone Brick",description:"Stone brick made out of ruby",hardness:4,sound:x.FOOTSTEP_BRICKS},p[u.LOADOUT_STATION]={opaque:!0,textures:{top:{x:5,y:5},bottom:{x:6,y:5},left:{x:6,y:5},right:{x:6,y:5},front:{x:6,y:5},back:{x:6,y:5}},name:"Loadout Station",description:"Supply station that allows you to choose your loadouts",hardness:2.5,sound:x.FOOTSTEP_BRICKS},p[u.BEDROCK_BRICK]={opaque:!0,textures:{top:{x:7,y:5},bottom:{x:7,y:5},left:{x:7,y:5},right:{x:7,y:5},front:{x:7,y:5},back:{x:7,y:5}},name:"Bedrock Brick",description:"Indestructible bricks made out of bedrock",hardness:999999,sound:x.FOOTSTEP_BRICKS},p[u.REINFORCED_RUBY]={opaque:!0,textures:{top:{x:5,y:6},bottom:{x:5,y:6},left:{x:5,y:6},right:{x:5,y:6},front:{x:5,y:6},back:{x:5,y:6}},name:"Reinforced Ruby",description:"Indestructable blocks made out of ruby",hardness:999999,sound:x.FOOTSTEP_BRICKS},p[u.REINFORCED_SAPPHIRE]={opaque:!0,textures:{top:{x:6,y:6},bottom:{x:6,y:6},left:{x:6,y:6},right:{x:6,y:6},front:{x:6,y:6},back:{x:6,y:6}},name:"Reinforced Sapphire",description:"Indestructable blocks made out of sapphire",hardness:999999,sound:x.FOOTSTEP_BRICKS},p[u.SULFUR_ORE]={opaque:!0,textures:{top:{x:7,y:3},bottom:{x:7,y:3},left:{x:7,y:3},right:{x:7,y:3},front:{x:7,y:3},back:{x:7,y:3}},name:"Sulfur Ore",description:"Stone filled with some sulfur ore",hardness:2.1,sound:x.FOOTSTEP_ROCKS},p),S=function(t,e,r,o){return e===s&&r===s&&o===s?t.topFrontLeft:-1===e&&r===s&&o===s?t.topFrontRight:e===s&&r===s&&-1===o?t.topBackLeft:-1===e&&r===s&&-1===o?t.topBackRight:e===s&&-1===r&&o===s?t.bottomFrontLeft:-1===e&&-1===r&&o===s?t.bottomFrontRight:e===s&&-1===r&&-1===o?t.bottomBackLeft:-1===e&&-1===r&&-1===o?t.bottomBackRight:e===s&&o===s?t.frontLeft[r]:-1===e&&o===s?t.frontRight[r]:e===s&&-1===o?t.backLeft[r]:-1===e&&-1===o?t.backRight[r]:r===s&&o===s?t.topFront[e]:r===s&&-1===o?t.topBack[e]:r===s&&e===s?t.topLeft[o]:r===s&&-1===e?t.topRight[o]:-1===r&&o===s?t.bottomFront[e]:-1===r&&-1===o?t.bottomBack[e]:-1===r&&e===s?t.bottomLeft[o]:-1===r&&-1===e?t.bottomRight[o]:-1===e?t.right[r][o]:e===s?t.left[r][o]:-1===r?t.bottom[e][o]:r===s?t.top[e][o]:-1===o?t.back[e][r]:o===s?t.front[e][r]:t.blocks[e*s*s+r*s+o]},_=function(t,e,r){return 255*[.3,.5,.7,1][t&&e?0:3-(t+e+r)]},l=function(t,e,r,o){var n=S(t,e,r,o);return n!==u.AIR&&y[n].opaque},E=function(t,e,r,o){return S(t,e,r,o)===u.AIR},O=function(t,e,r,o){var n=S(t,e,r,o);return y[n].opaque};!function(t){t.CHUNK_MESH_DATA="CHUNK_MESH_DATA",t.BLOCKS_MESH_DATA="BLOCKS_MESH_DATA"}(i||(i={}));var T,R=i;!function(t){t.CHUNK_MESH="CHUNK_MESH",t.BLOCKS_MESH="BLOCKS_MESH"}(T||(T={}));var f=T,d=function(t,e,r){return t+":"+e+":"+r},g=function(t,e,r,o){var n=t.blocks[d(e,r,o)];return void 0===n?u.AIR:n},c=function(t,e,r,o){return g(t,e,r,o)!==u.AIR},A=function(t,e,r,o){return void 0!==t.blocks[d(e,r,o)]},b=function(t){var e=[],r=[],o=[],s=[],h=[t.origin],u=new Set;for(u.add(d(t.origin.x,t.origin.y,t.origin.z));h.length>0;){var p=h.pop(),i=p.x,x=p.y,S=p.z,l=i-t.origin.x,E=x-t.origin.y,O=S-t.origin.z,T=c(t,i,x,S),R=d(i,x+1,S);if(T&&!c(t,i,x+1,S)){e.push((l+.5)*a,(E+.5)*a,(O+.5)*a),e.push((l-.5)*a,(E+.5)*a,(O+.5)*a),e.push((l-.5)*a,(E+.5)*a,(O-.5)*a),e.push((l+.5)*a,(E+.5)*a,(O-.5)*a);var f=_(c(t,i+1,x+1,S),c(t,i,x+1,S+1),c(t,i+1,x+1,S+1)),b=_(c(t,i,x+1,S+1),c(t,i-1,x+1,S),c(t,i-1,x+1,S+1)),I=_(c(t,i-1,x+1,S),c(t,i,x+1,S-1),c(t,i-1,x+1,S-1)),m=_(c(t,i,x+1,S-1),c(t,i+1,x+1,S),c(t,i+1,x+1,S-1));o.push(f),o.push(b),o.push(I),o.push(m),f+I<b+m?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var C=y[g(t,i,x,S)].textures.top;s.push(C.x,C.y,0,1),s.push(C.x,C.y,1,1),s.push(C.x,C.y,1,0),s.push(C.x,C.y,0,0)}else A(t,i,x+1,S)&&!u.has(R)&&(h.push(n(i,x+1,S)),u.add(R));var N=d(i,x-1,S);if(T&&!c(t,i,x-1,S)){e.push((l+.5)*a,(E-.5)*a,(O-.5)*a),e.push((l-.5)*a,(E-.5)*a,(O-.5)*a),e.push((l-.5)*a,(E-.5)*a,(O+.5)*a),e.push((l+.5)*a,(E-.5)*a,(O+.5)*a);var v=_(c(t,i+1,x-1,S),c(t,i,x-1,S-1),c(t,i+1,x-1,S-1)),P=_(c(t,i,x-1,S-1),c(t,i-1,x-1,S),c(t,i-1,x-1,S-1)),k=_(c(t,i-1,x-1,S),c(t,i,x-1,S+1),c(t,i-1,x-1,S+1)),L=_(c(t,i,x-1,S+1),c(t,i+1,x-1,S),c(t,i+1,x-1,S+1));o.push(v),o.push(P),o.push(k),o.push(L),v+k<P+L?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var U=y[g(t,i,x,S)].textures.bottom;s.push(U.x,U.y,0,1),s.push(U.x,U.y,1,1),s.push(U.x,U.y,1,0),s.push(U.x,U.y,0,0)}else A(t,i,x-1,S)&&!u.has(N)&&(h.push(n(i,x-1,S)),u.add(N));var B=d(i+1,x,S);if(T&&!c(t,i+1,x,S)){e.push((l+.5)*a,(E+.5)*a,(O+.5)*a),e.push((l+.5)*a,(E+.5)*a,(O-.5)*a),e.push((l+.5)*a,(E-.5)*a,(O-.5)*a),e.push((l+.5)*a,(E-.5)*a,(O+.5)*a);var K=_(c(t,i+1,x,S+1),c(t,i+1,x+1,S),c(t,i+1,x+1,S+1)),H=_(c(t,i+1,x+1,S),c(t,i+1,x,S-1),c(t,i+1,x+1,S-1)),D=_(c(t,i+1,x,S-1),c(t,i+1,x-1,S),c(t,i+1,x-1,S-1)),F=_(c(t,i+1,x-1,S),c(t,i+1,x,S+1),c(t,i+1,x-1,S+1));o.push(K),o.push(H),o.push(D),o.push(F),K+D<H+F?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var G=y[g(t,i,x,S)].textures.left;s.push(G.x,G.y,0,1),s.push(G.x,G.y,1,1),s.push(G.x,G.y,1,0),s.push(G.x,G.y,0,0)}else A(t,i+1,x,S)&&!u.has(B)&&(h.push(n(i+1,x,S)),u.add(B));var M=d(i-1,x,S);if(T&&!c(t,i-1,x,S)){e.push((l-.5)*a,(E+.5)*a,(O-.5)*a),e.push((l-.5)*a,(E+.5)*a,(O+.5)*a),e.push((l-.5)*a,(E-.5)*a,(O+.5)*a),e.push((l-.5)*a,(E-.5)*a,(O-.5)*a);var q=_(c(t,i-1,x,S-1),c(t,i-1,x+1,S),c(t,i-1,x+1,S-1)),w=_(c(t,i-1,x+1,S),c(t,i-1,x,S+1),c(t,i-1,x+1,S+1)),W=_(c(t,i-1,x,S+1),c(t,i-1,x-1,S),c(t,i-1,x-1,S+1)),Y=_(c(t,i-1,x-1,S),c(t,i-1,x,S-1),c(t,i-1,x-1,S-1));o.push(q),o.push(w),o.push(W),o.push(Y),q+W<w+Y?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var V=y[g(t,i,x,S)].textures.right;s.push(V.x,V.y,0,1),s.push(V.x,V.y,1,1),s.push(V.x,V.y,1,0),s.push(V.x,V.y,0,0)}else A(t,i-1,x,S)&&!u.has(M)&&(h.push(n(i-1,x,S)),u.add(M));var j=d(i,x,S+1);if(T&&!c(t,i,x,S+1)){e.push((l-.5)*a,(E+.5)*a,(O+.5)*a),e.push((l+.5)*a,(E+.5)*a,(O+.5)*a),e.push((l+.5)*a,(E-.5)*a,(O+.5)*a),e.push((l-.5)*a,(E-.5)*a,(O+.5)*a);var z=_(c(t,i-1,x,S+1),c(t,i,x+1,S+1),c(t,i-1,x+1,S+1)),X=_(c(t,i,x+1,S+1),c(t,i+1,x,S+1),c(t,i+1,x+1,S+1)),Z=_(c(t,i+1,x,S+1),c(t,i,x-1,S+1),c(t,i+1,x-1,S+1)),J=_(c(t,i,x-1,S+1),c(t,i-1,x,S+1),c(t,i-1,x-1,S+1));o.push(z),o.push(X),o.push(Z),o.push(J),z+Z<X+J?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var Q=y[g(t,i,x,S)].textures.front;s.push(Q.x,Q.y,0,1),s.push(Q.x,Q.y,1,1),s.push(Q.x,Q.y,1,0),s.push(Q.x,Q.y,0,0)}else A(t,i,x,S+1)&&!u.has(j)&&(h.push(n(i,x,S+1)),u.add(j));var $=d(i,x,S-1);if(T&&!c(t,i,x,S-1)){e.push((l+.5)*a,(E+.5)*a,(O-.5)*a),e.push((l-.5)*a,(E+.5)*a,(O-.5)*a),e.push((l-.5)*a,(E-.5)*a,(O-.5)*a),e.push((l+.5)*a,(E-.5)*a,(O-.5)*a);var tt=_(c(t,i+1,x,S-1),c(t,i,x+1,S-1),c(t,i+1,x+1,S-1)),et=_(c(t,i,x+1,S-1),c(t,i-1,x,S-1),c(t,i-1,x+1,S-1)),rt=_(c(t,i-1,x,S-1),c(t,i,x-1,S-1),c(t,i-1,x-1,S-1)),ot=_(c(t,i,x-1,S-1),c(t,i+1,x,S-1),c(t,i+1,x-1,S-1));o.push(tt),o.push(et),o.push(rt),o.push(ot),tt+rt<et+ot?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var nt=y[g(t,i,x,S)].textures.back;s.push(nt.x,nt.y,0,1),s.push(nt.x,nt.y,1,1),s.push(nt.x,nt.y,1,0),s.push(nt.x,nt.y,0,0)}else A(t,i,x,S-1)&&!u.has($)&&(h.push(n(i,x,S-1)),u.add($))}return{position:n((t.origin.x+.5)*a,(t.origin.y+.5)*a,(t.origin.z+.5)*a),vertices:e,indices:r,aos:o,uvs:s}};onmessage=function(t){switch(t.data.event){case f.CHUNK_MESH:const e=function(t){for(var e=[],r=[],o=[],n=[],a=[],h=[],u=[],p=[],i=new Uint8Array(s*s*s*4),x=new Uint8Array(s*s*s*4),S=new Uint8Array(s*s*s*4),T=new Uint8Array(s*s*s*4),R=new Uint8Array(s*s*s*4),f=new Uint8Array(s*s*s*4),d=0;d<s;d++)for(var g=0;g<s;g++)for(var c=0;c<s;c++)if(!E(t,d,g,c)){var A=O(t,d,g,c);if(A&&!O(t,d,g+1,c)||!A&&E(t,d,g+1,c)){var b=_(l(t,d+1,g+1,c),l(t,d,g+1,c+1),l(t,d+1,g+1,c+1)),I=_(l(t,d,g+1,c+1),l(t,d-1,g+1,c),l(t,d-1,g+1,c+1)),m=_(l(t,d-1,g+1,c),l(t,d,g+1,c-1),l(t,d-1,g+1,c-1)),C=_(l(t,d,g+1,c-1),l(t,d+1,g+1,c),l(t,d+1,g+1,c-1)),N=4*(d*s*s+g*s+c);i[N]=b,i[N+1]=I,i[N+2]=m,i[N+3]=C}if(A&&!O(t,d,g-1,c)||!A&&E(t,d,g-1,c)){var v=_(l(t,d+1,g-1,c),l(t,d,g-1,c-1),l(t,d+1,g-1,c-1)),P=_(l(t,d,g-1,c-1),l(t,d-1,g-1,c),l(t,d-1,g-1,c-1)),k=_(l(t,d-1,g-1,c),l(t,d,g-1,c+1),l(t,d-1,g-1,c+1)),L=_(l(t,d,g-1,c+1),l(t,d+1,g-1,c),l(t,d+1,g-1,c+1)),U=4*(d*s*s+g*s+c);x[U]=v,x[U+1]=P,x[U+2]=k,x[U+3]=L}if(A&&!O(t,d+1,g,c)||!A&&E(t,d+1,g,c)){var B=_(l(t,d+1,g,c+1),l(t,d+1,g+1,c),l(t,d+1,g+1,c+1)),K=_(l(t,d+1,g+1,c),l(t,d+1,g,c-1),l(t,d+1,g+1,c-1)),H=_(l(t,d+1,g,c-1),l(t,d+1,g-1,c),l(t,d+1,g-1,c-1)),D=_(l(t,d+1,g-1,c),l(t,d+1,g,c+1),l(t,d+1,g-1,c+1)),F=4*(d*s*s+g*s+c);S[F]=B,S[F+1]=K,S[F+2]=H,S[F+3]=D}if(A&&!O(t,d-1,g,c)||!A&&E(t,d-1,g,c)){var G=_(l(t,d-1,g,c-1),l(t,d-1,g+1,c),l(t,d-1,g+1,c-1)),M=_(l(t,d-1,g+1,c),l(t,d-1,g,c+1),l(t,d-1,g+1,c+1)),q=_(l(t,d-1,g,c+1),l(t,d-1,g-1,c),l(t,d-1,g-1,c+1)),w=_(l(t,d-1,g-1,c),l(t,d-1,g,c-1),l(t,d-1,g-1,c-1)),W=4*(d*s*s+g*s+c);T[W]=G,T[W+1]=M,T[W+2]=q,T[W+3]=w}if(A&&!O(t,d,g,c+1)||!A&&E(t,d,g,c+1)){var Y=_(l(t,d-1,g,c+1),l(t,d,g+1,c+1),l(t,d-1,g+1,c+1)),V=_(l(t,d,g+1,c+1),l(t,d+1,g,c+1),l(t,d+1,g+1,c+1)),j=_(l(t,d+1,g,c+1),l(t,d,g-1,c+1),l(t,d+1,g-1,c+1)),z=_(l(t,d,g-1,c+1),l(t,d-1,g,c+1),l(t,d-1,g-1,c+1)),X=4*(d*s*s+g*s+c);R[X]=Y,R[X+1]=V,R[X+2]=j,R[X+3]=z}if(A&&!O(t,d,g,c-1)||!A&&E(t,d,g,c-1)){var Z=_(l(t,d+1,g,c-1),l(t,d,g+1,c-1),l(t,d+1,g+1,c-1)),J=_(l(t,d,g+1,c-1),l(t,d-1,g,c-1),l(t,d-1,g+1,c-1)),Q=_(l(t,d-1,g,c-1),l(t,d,g-1,c-1),l(t,d-1,g-1,c-1)),$=_(l(t,d,g-1,c-1),l(t,d+1,g,c-1),l(t,d+1,g-1,c-1)),tt=4*(d*s*s+g*s+c);f[tt]=Z,f[tt+1]=J,f[tt+2]=Q,f[tt+3]=$}}for(var et=0;et<s;et++)for(var rt=0;rt<s;rt++)for(var ot=0;ot<s;ot++){var nt=rt,st=et,at=ot,ht=e,ut=r,pt=o,it=n;O(t,rt,et,ot)||(ht=a,ut=h,pt=u,it=p);var xt=4*(rt*s*s+et*s+ot),yt=t.blocks[rt*s*s+et*s+ot],St=i[xt];if(0!==St){for(var _t=i[xt+1],lt=i[xt+2],Et=i[xt+3],Ot=1,Tt=1,Rt=ot+1;Rt<s;Rt++){var ft=4*(rt*s*s+et*s+Rt),dt=t.blocks[rt*s*s+et*s+Rt];if(0!==i[ft]||yt!==dt||St!==i[ft]||_t!==i[ft+1]||lt!==i[ft+2]||Et!==i[ft+3])break;++Ot}for(var gt=!0,ct=rt+1;ct<s&&gt;ct++){gt=!0;for(var At=ot;At<ot+Ot;At++){var bt=4*(ct*s*s+et*s+At),It=t.blocks[ct*s*s+et*s+At];if(0!==i[bt]||yt!==It||St!==i[bt]||_t!==i[bt+1]||lt!==i[bt+2]||Et!==i[bt+3]){gt=!1;break}}gt&&++Tt}for(var mt=rt;mt<rt+Tt;mt++)for(var Ct=ot;Ct<ot+Ot;Ct++)i[4*(mt*s*s+et*s+Ct)]=0;ht.push(nt+1+(Tt-1),st+1,at+1+(Ot-1)),ht.push(nt,st+1,at+1+(Ot-1)),ht.push(nt,st+1,at),ht.push(nt+1+(Tt-1),st+1,at),pt.push(St,_t,lt,Et),St+lt<_t+Et?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var Nt=y[yt].textures.top;it.push(Nt.x,Nt.y,0,Ot),it.push(Nt.x,Nt.y,Tt,Ot),it.push(Nt.x,Nt.y,Tt,0),it.push(Nt.x,Nt.y,0,0)}var vt=x[xt];if(0!==vt){for(var Pt=x[xt+1],kt=x[xt+2],Lt=x[xt+3],Ut=1,Bt=1,Kt=ot+1;Kt<s;Kt++){var Ht=4*(rt*s*s+et*s+Kt),Dt=t.blocks[rt*s*s+et*s+Kt];if(0!==x[Ht]||yt!==Dt||vt!==x[Ht]||Pt!==x[Ht+1]||kt!==x[Ht+2]||Lt!==x[Ht+3])break;++Ut}for(var Ft=!0,Gt=rt+1;Gt<s&&Ft;Gt++){Ft=!0;for(var Mt=ot;Mt<ot+Ut;Mt++){var qt=4*(Gt*s*s+et*s+Mt),wt=t.blocks[Gt*s*s+et*s+Mt];if(0!==x[qt]||yt!==wt||vt!==x[qt]||Pt!==x[qt+1]||kt!==x[qt+2]||Lt!==x[qt+3]){Ft=!1;break}}Ft&&++Bt}for(var Wt=rt;Wt<rt+Bt;Wt++)for(var Yt=ot;Yt<ot+Ut;Yt++)x[4*(Wt*s*s+et*s+Yt)]=0;ht.push(nt+1+(Bt-1),st,at),ht.push(nt,st,at),ht.push(nt,st,at+1+(Ut-1)),ht.push(nt+1+(Bt-1),st,at+1+(Ut-1)),pt.push(vt,Pt,kt,Lt),vt+kt<Pt+Lt?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var Vt=y[yt].textures.bottom;it.push(Vt.x,Vt.y,0,Ut),it.push(Vt.x,Vt.y,Bt,Ut),it.push(Vt.x,Vt.y,Bt,0),it.push(Vt.x,Vt.y,0,0)}var jt=S[xt];if(0!==jt){for(var zt=S[xt+1],Xt=S[xt+2],Zt=S[xt+3],Jt=1,Qt=1,$t=ot+1;$t<s;$t++){var te=4*(rt*s*s+et*s+$t),ee=t.blocks[rt*s*s+et*s+$t];if(0!==S[te]||yt!==ee||jt!==S[te]||zt!==S[te+1]||Xt!==S[te+2]||Zt!==S[te+3])break;++Jt}for(var re=!0,oe=et+1;oe<s&&re;oe++){re=!0;for(var ne=ot;ne<ot+Jt;ne++){var se=4*(rt*s*s+oe*s+ne),ae=t.blocks[rt*s*s+oe*s+ne];if(0!==S[se]||yt!==ae||jt!==S[se]||zt!==S[se+1]||Xt!==S[se+2]||Zt!==S[se+3]){re=!1;break}}re&&++Qt}for(var he=et;he<et+Qt;he++)for(var ue=ot;ue<ot+Jt;ue++)S[4*(rt*s*s+he*s+ue)]=0;ht.push(nt+1,st+1+(Qt-1),at+1+(Jt-1)),ht.push(nt+1,st+1+(Qt-1),at),ht.push(nt+1,st,at),ht.push(nt+1,st,at+1+(Jt-1)),pt.push(jt,zt,Xt,Zt),jt+Xt<zt+Zt?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var pe=y[yt].textures.left;it.push(pe.x,pe.y,0,Qt),it.push(pe.x,pe.y,Jt,Qt),it.push(pe.x,pe.y,Jt,0),it.push(pe.x,pe.y,0,0)}var ie=T[xt];if(0!==ie){for(var xe=T[xt+1],ye=T[xt+2],Se=T[xt+3],_e=1,le=1,Ee=ot+1;Ee<s;Ee++){var Oe=4*(rt*s*s+et*s+Ee),Te=t.blocks[rt*s*s+et*s+Ee];if(0!==T[Oe]||yt!==Te||ie!==T[Oe]||xe!==T[Oe+1]||ye!==T[Oe+2]||Se!==T[Oe+3])break;++_e}for(var Re=!0,fe=et+1;fe<s&&Re;fe++){Re=!0;for(var de=ot;de<ot+_e;de++){var ge=4*(rt*s*s+fe*s+de),ce=t.blocks[rt*s*s+fe*s+de];if(0!==T[ge]||yt!==ce||ie!==T[ge]||xe!==T[ge+1]||ye!==T[ge+2]||Se!==T[ge+3]){Re=!1;break}}Re&&++le}for(var Ae=et;Ae<et+le;Ae++)for(var be=ot;be<ot+_e;be++)T[4*(rt*s*s+Ae*s+be)]=0;ht.push(nt,st+1+(le-1),at),ht.push(nt,st+1+(le-1),at+1+(_e-1)),ht.push(nt,st,at+1+(_e-1)),ht.push(nt,st,at),pt.push(ie,xe,ye,Se),ie+ye<xe+Se?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var Ie=y[yt].textures.right;it.push(Ie.x,Ie.y,0,le),it.push(Ie.x,Ie.y,_e,le),it.push(Ie.x,Ie.y,_e,0),it.push(Ie.x,Ie.y,0,0)}var me=R[xt];if(0!==me){for(var Ce=R[xt+1],Ne=R[xt+2],ve=R[xt+3],Pe=1,ke=1,Le=rt+1;Le<s;Le++){var Ue=4*(Le*s*s+et*s+ot),Be=t.blocks[Le*s*s+et*s+ot];if(0!==R[Ue]||yt!==Be||me!==R[Ue]||Ce!==R[Ue+1]||Ne!==R[Ue+2]||ve!==R[Ue+3])break;++Pe}for(var Ke=!0,He=et+1;He<s&&Ke;He++){Ke=!0;for(var De=rt;De<rt+Pe;De++){var Fe=4*(De*s*s+He*s+ot),Ge=t.blocks[De*s*s+He*s+ot];if(0!==R[Fe]||yt!==Ge||me!==R[Fe]||Ce!==R[Fe+1]||Ne!==R[Fe+2]||ve!==R[Fe+3]){Ke=!1;break}}Ke&&++ke}for(var Me=et;Me<et+ke;Me++)for(var qe=rt;qe<rt+Pe;qe++)R[4*(qe*s*s+Me*s+ot)]=0;ht.push(nt,st+1+(ke-1),at+1),ht.push(nt+1+(Pe-1),st+1+(ke-1),at+1),ht.push(nt+1+(Pe-1),st,at+1),ht.push(nt,st,at+1),pt.push(me,Ce,Ne,ve),me+Ne<Ce+ve?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var we=y[yt].textures.front;it.push(we.x,we.y,0,ke),it.push(we.x,we.y,Pe,ke),it.push(we.x,we.y,Pe,0),it.push(we.x,we.y,0,0)}var We=f[xt];if(0!==We){for(var Ye=f[xt+1],Ve=f[xt+2],je=f[xt+3],ze=1,Xe=1,Ze=rt+1;Ze<s;Ze++){var Je=4*(Ze*s*s+et*s+ot),Qe=t.blocks[Ze*s*s+et*s+ot];if(0!==f[Je]||yt!==Qe||We!==f[Je]||Ye!==f[Je+1]||Ve!==f[Je+2]||je!==f[Je+3])break;++ze}for(var $e=!0,tr=et+1;tr<s&&$e;tr++){$e=!0;for(var er=rt;er<rt+ze;er++){var rr=4*(er*s*s+tr*s+ot),or=t.blocks[er*s*s+tr*s+ot];if(0!==f[rr]||yt!==or||We!==f[rr]||Ye!==f[rr+1]||Ve!==f[rr+2]||je!==f[rr+3]){$e=!1;break}}$e&&++Xe}for(var nr=et;nr<et+Xe;nr++)for(var sr=rt;sr<rt+ze;sr++)f[4*(sr*s*s+nr*s+ot)]=0;ht.push(nt+1+(ze-1),st+1+(Xe-1),at),ht.push(nt,st+1+(Xe-1),at),ht.push(nt,st,at),ht.push(nt+1+(ze-1),st,at),pt.push(We,Ye,Ve,je),We+Ve<Ye+je?(ut.push(ht.length/3-3,ht.length/3-4,ht.length/3-1),ut.push(ht.length/3-1,ht.length/3-2,ht.length/3-3)):(ut.push(ht.length/3-4,ht.length/3-1,ht.length/3-2),ut.push(ht.length/3-2,ht.length/3-3,ht.length/3-4));var ar=y[yt].textures.back;it.push(ar.x,ar.y,0,Xe),it.push(ar.x,ar.y,ze,Xe),it.push(ar.x,ar.y,ze,0),it.push(ar.x,ar.y,0,0)}}return{version:t.version,opaqueVertices:new Uint8Array(e),opaqueIndices:new Uint16Array(r),opaqueAos:new Uint8Array(o),opaqueUvs:new Uint8Array(n),alphaVertices:new Uint8Array(a),alphaIndices:new Uint16Array(h),alphaAos:new Uint8Array(u),alphaUvs:new Uint8Array(p),chunkPos:t.chunkPos}}(t.data);postMessage({event:R.CHUNK_MESH_DATA,data:e},[e.opaqueVertices.buffer,e.opaqueIndices.buffer,e.opaqueAos.buffer,e.opaqueUvs.buffer,e.alphaVertices.buffer,e.alphaIndices.buffer,e.alphaAos.buffer,e.alphaUvs.buffer]);break;case f.BLOCKS_MESH:postMessage({event:R.BLOCKS_MESH_DATA,data:b(t.data)})}}}]);', null)
        }
    }, 489: function (t, e, i) {
        "use strict";
        i.r(e);
        var n, s = i(15), r = i.n(s), a = i(21), o = i.n(a), h = i(80), c = i(79), _ = i.n(c), l = i(26),
            u = function () {
                function t(t, e) {
                    var i = this;
                    this._settings = t, this._canvasId = e, this._canvas = void 0, this._scale = void 0, this._appWidth = void 0, this._appHeight = void 0, this._scene = void 0, this._uiScene = void 0, this._crosshairScene = void 0, this._frontScene = void 0, this._camera = void 0, this._crosshairCamera = void 0, this._uiCamera = void 0, this._renderer = void 0, this._clearColor = void 0, this._canvas = document.getElementById(this._canvasId), this._scale = 1, this._appWidth = l.a.CLIENT_WIDTH, this._appHeight = l.a.CLIENT_HEIGHT, this._camera = new h.jb(60, window.innerWidth / window.innerHeight, .01, 1e3), window.camera = this._camera, this._crosshairCamera = new h.jb(60, window.innerWidth / window.innerHeight, .01, 1e3), this._uiCamera = new h.ib(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, .01, 1e3), this._clearColor = l.a.SKY_CLEAR_COLOR, this.rebuildScene(), this.resizeCanvas(), window.addEventListener("resize", (function (t) {
                        i.resizeCanvas()
                    }))
                }

                var e = t.prototype;
                return e.rebuildScene = function () {
                    this._scene && this._scene.dispose(), this._frontScene && this._frontScene.dispose(), this._uiScene && this._uiScene.dispose(), this._crosshairScene && this._crosshairScene.dispose(), this._scene = new h.vb, this._frontScene = new h.vb, this._uiScene = new h.vb, this._crosshairScene = new h.vb, this._uiScene.add(this._uiCamera), this._renderer && this._renderer.dispose(), this._renderer = new h.Qb({
                        canvas: this._canvas,
                        antialias: !1,
                        powerPreference: "high-performance"
                    }), this._renderer.setClearColor(this._clearColor), this._renderer.debug.checkShaderErrors = !1, this._renderer.setPixelRatio(window.devicePixelRatio * this._settings.renderScale), this._renderer.setSize(window.innerWidth, window.innerHeight), this._renderer.autoClear = !1, this._renderer.gammaFactor = 2.2, this._renderer.outputEncoding = h.Rb, this._renderer.info.autoReset = !1
                }, e.render = function (t, e) {
                    this._renderer.info.reset(), this._renderer.clear(), this._renderer.render(this._scene, this._camera), this._renderer.clearDepth(), this._renderer.render(this._frontScene, this._camera), this._renderer.clearDepth(), this._renderer.render(this._crosshairScene, this._crosshairCamera), this._renderer.render(this._uiScene, this._uiCamera)
                    // #Finish render
                    myRender()
                }, e.resizeCanvas = function () {
                    var t = window.innerWidth, e = window.innerHeight;
                    this._scale = Math.max(t / this._appWidth, e / this._appHeight), this._renderer.setSize(t, e), this._camera.aspect = t / e, this._camera.updateProjectionMatrix(), this._crosshairCamera.aspect = t / e, this._crosshairCamera.updateProjectionMatrix(), this._uiCamera.top = e / 2, this._uiCamera.bottom = -e / 2, this._uiCamera.left = -t / 2, this._uiCamera.right = t / 2, this._uiCamera.updateProjectionMatrix()
                }, e.setClearColor = function (t) {
                    this._clearColor !== t && (this._clearColor = t, this._renderer.setClearColor(this._clearColor))
                }, _()(t, [{
                    key: "scale", get: function () {
                        return this._scale
                    }
                }, {
                    key: "scene", get: function () {
                        return this._scene
                    }
                }, {
                    key: "frontScene", get: function () {
                        return this._frontScene
                    }
                }, {
                    key: "uiScene", get: function () {
                        return this._uiScene
                    }
                }, {
                    key: "crosshairScene", get: function () {
                        return this._crosshairScene
                    }
                }, {
                    key: "camera", get: function () {
                        return this._camera
                    }
                }, {
                    key: "renderer", get: function () {
                        return this._renderer
                    }
                }, {
                    key: "canvas", get: function () {
                        return this._canvas
                    }
                }]), t
            }(), d = i(82), p = i(83), v = i(8), S = i(34), y = i(87), g = function () {
                function t() {
                    var t = this;
                    this._prevTime = void 0, this._frames = void 0, this._upload = void 0, this._download = void 0, this._visible = void 0, this._fps = void 0, this._ups = void 0, this._dps = void 0, this.playerPos = void 0, this.playerBlockPos = void 0, this.playerChunkPos = void 0, this.playerVelocity = void 0, this.playerYaw = void 0, this.playerPitch = void 0, this.totalChunksLoaded = void 0, this.ping = void 0, this._dom = void 0, this._upload = 0, this._download = 0, this._ups = 0, this._dps = 0, this._fps = 0, this.playerPos = Object(S.l)(0, 0, 0), this.playerBlockPos = Object(S.l)(0, 0, 0), this.playerChunkPos = Object(S.l)(0, 0, 0), this.playerVelocity = Object(S.l)(0, 0, 0), this.playerYaw = 0, this.playerPitch = 0, this.totalChunksLoaded = 0, this.ping = 0, this._prevTime = Date.now(), this._frames = 0, this._dom = document.body.appendChild(document.createElement("div")), this._dom.style.cssText = "width: 550px; position: absolute; top: 0; left: 0; padding: 10px; pointer-events: none; background-color: rgba(0, 0, 0, 0.8);", this._visible = !1, this.hide(), d.a.on(p.a.KEY_PRESS, (function (e) {
                        Object(y.j)() || e === v.a[0] && t.toggle()
                    }))
                }

                var e = t.prototype;
                return e.toggle = function () {
                    this._visible = !this._visible, this._visible ? this.show() : this.hide()
                }, e.show = function () {
                    this._dom.style.display = "block", this._visible = !0
                }, e.hide = function () {
                    this._dom.style.display = "none", this._visible = !1
                }, e.update = function () {
                    if (this._visible) {
                        ++this._frames;
                        var t = Date.now();
                        t - this._prevTime >= 1e3 && (this._fps = 1e3 * this._frames / (t - this._prevTime), this._ups = 1e3 * this._upload / (t - this._prevTime), this._dps = 1e3 * this._download / (t - this._prevTime), this._frames = 0, this._upload = 0, this._download = 0, this._prevTime = t), this._dom.innerText = this.getStatsText()
                    }
                }, e.recordUpload = function (t) {
                    this._upload += t
                }, e.recordDownload = function (t) {
                    this._download += t
                }, e.getStatsText = function () {
                    return "FPS: " + this._fps + "\n            Player Position:\n            x: " + this.playerPos.x + " y: " + this.playerPos.y + " z: " + this.playerPos.z + "\n            Player Block Position:\n            x: " + this.playerBlockPos.x + " y: " + this.playerBlockPos.y + " z: " + this.playerBlockPos.z + "\n            Player Chunk Position:\n            x: " + this.playerChunkPos.x + " y: " + this.playerChunkPos.y + " z: " + this.playerChunkPos.z + "\n            Player Velocity:\n            x: " + this.playerVelocity.x + " y: " + this.playerVelocity.y + " z: " + this.playerVelocity.z + "\n            Player Yaw: " + this.playerYaw + " Player Pitch: " + this.playerPitch + "\n            Total Chunks Loaded: " + this.totalChunksLoaded + "\n            Latency: " + this.ping + "ms\n            Download: " + this._dps.toFixed(2) + "bps Upload: " + this._ups.toFixed(2) + "bps"
                }, _()(t, [{
                    key: "visible", get: function () {
                        return this._visible
                    }
                }]), t
            }(), m = i(337), f = i.n(m), k = i(81);
        !function (t) {
            t.CHUNK_MESH = "CHUNK_MESH", t.BLOCKS_MESH = "BLOCKS_MESH"
        }(n || (n = {}));
        var E, O = n;
        !function (t) {
            t.CHUNK_MESH_DATA = "CHUNK_MESH_DATA", t.BLOCKS_MESH_DATA = "BLOCKS_MESH_DATA"
        }(E || (E = {}));
        var I = E, T = i(138), A = function () {
            function t(t, e) {
                var i = this;
                this._terrainRenderer = t, this._numWorkers = e, this._workers = void 0, this._jobs = void 0, this._terrainMaterial = void 0, this._transparentTerrainMaterial = void 0, this._nextWorkerIdx = void 0, this._jobs = [], this._workers = [], this._nextWorkerIdx = 0;
                var n = "\n            attribute float ao;\n            attribute vec4 realUv;\n            varying float vAo;\n            varying vec4 vRealUv;\n            void main() {\n                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                gl_Position = projectionMatrix * mvPosition;\n                vAo = ao;\n                vRealUv = realUv;\n            }\n        ",
                    s = "\n            uniform sampler2D map;\n            varying float vAo;\n            varying vec4 vRealUv;\n            void main() {\n                vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0);\n                diffuseColor *= vec4(vec3(1.0, 1.0, 1.0) * vAo, 1.0);\n\n                float tilePosX = max(0.05, min(0.95, fract(vRealUv.z)));\n                float tilePosY = max(0.05, min(0.95, fract(vRealUv.w)));\n                vec2 uv = vec2(vRealUv.x * (1.0 / 8.0) + tilePosX * (1.0 / 8.0), vRealUv.y * (1.0 / 8.0) + tilePosY * (1.0 / 8.0));\n\n                vec2 rawUv = vec2(\n                    fract(uv.x * 8.0) / 8.0,\n                    fract(uv.y * 8.0) / 8.0\n                );\n\n                diffuseColor *= texture2D(map, uv);\n\n                gl_FragColor = diffuseColor;\n            }\n        ";
                this._terrainMaterial = new h.wb({
                    uniforms: {map: {value: k.a.blockTexture}},
                    vertexShader: n,
                    fragmentShader: s,
                    fog: !1
                }), this._transparentTerrainMaterial = new h.wb({
                    transparent: !0,
                    uniforms: {map: {value: k.a.blockTexture}},
                    side: h.r,
                    vertexShader: n,
                    fragmentShader: s,
                    fog: !1
                });
                for (var r = 0; r < this._numWorkers; r++) {
                    var a = new f.a;
                    a.onmessage = function (t) {
                        switch (t.data.event) {
                            case I.CHUNK_MESH_DATA:
                                i.processChunkMeshData(t.data.data);
                                break;
                            case I.BLOCKS_MESH_DATA:
                                var e = t.data.data, n = e.position, s = e.indices, r = e.vertices, a = e.uvs,
                                    o = e.aos, c = new h.l;
                                c.setAttribute("position", new h.v(r, 3)), c.setIndex(new h.Lb(s, 1)), c.setAttribute("ao", new h.Mb(o, 1, !0)), c.setAttribute("realUv", new h.Mb(a, 4));
                                var _ = new h.X(c, i._terrainMaterial);
                                _.position.set(n.x, n.y, n.z), i._terrainRenderer.processFallingBlocks(n, _)
                        }
                    }, this._workers.push(a)
                }
            }

            var e = t.prototype;
            return e.cleanUp = function () {
                this._jobs = [], this._terrainMaterial.dispose();
                for (var t = 0; t < this._workers.length; t++) this._workers[t].terminate();
                this._workers = []
            }, e.process = function () {
                for (; this._jobs.length > 0;) {
                    0;
                    var t = this._jobs.shift();
                    // #NoNewChunks
                    if (!window.noBlocksUpdate) {
                        switch (t.event) {
                            case O.CHUNK_MESH:
                                if (this._terrainRenderer.chunkStorageManager.hasChunk(t.chunkPos.x, t.chunkPos.y, t.chunkPos.z)) this.getNextWorker().postMessage(t);
                                break;
                            case O.BLOCKS_MESH:
                            default:
                                this.getNextWorker().postMessage(t)
                        }
                    }
                }
            }, e.getNextWorker = function () {
                var t = this._workers[this._nextWorkerIdx];
                return ++this._nextWorkerIdx >= this._workers.length && (this._nextWorkerIdx = 0), t
            }, e.processChunkMeshData = function (t) {
                var e = t.version, i = t.chunkPos, n = t.opaqueVertices, s = t.opaqueIndices, r = t.opaqueUvs,
                    a = t.opaqueAos, o = t.alphaVertices, c = t.alphaIndices, _ = t.alphaUvs, l = t.alphaAos,
                    u = void 0;
                if (n.length > 0) {
                    var d = new h.l;
                    d.setAttribute("position", new h.Mb(n, 3)), d.setIndex(new h.Lb(s, 1)), d.setAttribute("ao", new h.Mb(a, 1, !0)), d.setAttribute("realUv", new h.Mb(r, 4)), u = new h.X(d, this._terrainMaterial)
                }
                var p = void 0;
                if (o.length > 0) {
                    var v = new h.l;
                    v.setAttribute("position", new h.Mb(o, 3)), v.setIndex(new h.Lb(c, 1)), v.setAttribute("ao", new h.Mb(l, 1, !0)), v.setAttribute("realUv", new h.Mb(_, 4)), p = new h.X(v, this._transparentTerrainMaterial)
                }
                this._terrainRenderer.processChunkData(e, i.x, i.y, i.z, u, p)
            }, e.queueChunkGeneration = function (t, e, i, n, s, r, a, o, h, c, _, l, u, d, p, v, S, y, g, m, f, k, E, I, A, R, C, b, x, P) {
                var M = {
                    event: O.CHUNK_MESH,
                    version: t,
                    chunkPos: {x: e.x, y: e.y, z: e.z},
                    blocks: i,
                    top: n,
                    bottom: s,
                    left: r,
                    right: a,
                    front: o,
                    back: h,
                    topFrontLeft: c,
                    topFrontRight: _,
                    topBackLeft: l,
                    topBackRight: u,
                    bottomFrontLeft: d,
                    bottomFrontRight: p,
                    bottomBackLeft: v,
                    bottomBackRight: S,
                    frontLeft: y,
                    frontRight: g,
                    backLeft: m,
                    backRight: f,
                    topFront: k,
                    topBack: E,
                    topLeft: I,
                    topRight: A,
                    bottomFront: R,
                    bottomBack: C,
                    bottomLeft: b,
                    bottomRight: x
                };
                P ? this._jobs.push(M) : this.processChunkMeshData(Object(T.b)(M))
            }, e.queueBlocksGeneration = function (t, e) {
                this._jobs.push({event: O.BLOCKS_MESH, origin: t, blocks: e})
            }, _()(t, [{
                key: "numJobs", get: function () {
                    return this._jobs.length
                }
            }, {
                key: "terrainMaterial", get: function () {
                    return this._terrainMaterial
                }
            }]), t
        }(), R = i(85), C = function (t, e, i) {
            return (t + 128 & 255) << 16 | (e + 128 & 255) << 8 | i + 128 & 255
        }, b = function (t, e, i) {
            return t + ":" + e + ":" + i
        }, x = function () {
            function t(t, e, i, n) {
                if (this._chunkStorageManager = t, this._chunkPos = e, this._numSolidBlocks = i, this._blocks = void 0, this._needsUpdate = void 0, this._chunkKey = void 0, this._chunkKey = C(this._chunkPos.x, this._chunkPos.y, this._chunkPos.z), n) this._blocks = n; else {
                    this._blocks = new Uint8Array(l.a.CHUNK_NUM_BLOCKS);
                    for (var s = 0; s < l.a.CHUNK_NUM_BLOCKS; s++) this._blocks[s] = R.a.AIR
                }
                this._needsUpdate = !1, this._numSolidBlocks > 0 && this.requestUpdate(!1)
            }

            var e = t.prototype;
            return e.getChunkBlockAt = function (t, e, i) {
                return this._blocks[t * l.a.CHUNK_SIZE * l.a.CHUNK_SIZE + e * l.a.CHUNK_SIZE + i]
            }, e.setChunkBlockAt = function (t, e, i, n) {
                var s = this.getChunkBlockAt(t, e, i);
                this._blocks[t * l.a.CHUNK_SIZE * l.a.CHUNK_SIZE + e * l.a.CHUNK_SIZE + i] = n, s !== n && this.requestUpdate(!0), s === R.a.AIR && n !== R.a.AIR ? ++this._numSolidBlocks : s !== R.a.AIR && n === R.a.AIR && --this._numSolidBlocks
            }, e.chunkBlockPosToWorldBlockPos = function (t, e, i) {
                return Object(S.l)(this._chunkPos.x * l.a.CHUNK_SIZE + t, this._chunkPos.y * l.a.CHUNK_SIZE + e, this._chunkPos.z * l.a.CHUNK_SIZE + i)
            }, e.isEmpty = function () {
                return 0 === this._numSolidBlocks
            }, e.requestUpdate = function (t) {
                this._needsUpdate || (++this._chunkStorageManager.numChunksNeedUpdate, this._needsUpdate = !0, t ? this._chunkStorageManager.queueChunkUpdatePriority(this) : this._chunkStorageManager.queueChunkUpdate(this))
            }, e.doneUpdate = function () {
                this._needsUpdate && (--this._chunkStorageManager.numChunksNeedUpdate, this._needsUpdate = !1)
            }, _()(t, [{
                key: "chunkKey", get: function () {
                    return this._chunkKey
                }
            }, {
                key: "needsUpdate", get: function () {
                    return this._needsUpdate
                }
            }, {
                key: "blocks", get: function () {
                    return this._blocks
                }, set: function (t) {
                    this._blocks = t
                }
            }, {
                key: "chunkPos", get: function () {
                    return this._chunkPos
                }
            }, {
                key: "numSolidBlocks", get: function () {
                    return this._numSolidBlocks
                }, set: function (t) {
                    this._numSolidBlocks = t
                }
            }]), t
        }(), P = function () {
            function t(t) {
                this._dirVector = t
            }

            return _()(t, [{
                key: "dir", get: function () {
                    return Object(S.b)(this._dirVector)
                }
            }], [{
                key: "immediateNeighbors", get: function () {
                    return [t.UP, t.DOWN, t.FRONT, t.BACK, t.RIGHT, t.LEFT]
                }
            }, {
                key: "secondaryNeighbors", get: function () {
                    return [t.UP_LEFT, t.UP_RIGHT, t.UP_FRONT, t.UP_BACK, t.DOWN_LEFT, t.DOWN_RIGHT, t.DOWN_FRONT, t.DOWN_BACK, t.LEFT_FRONT, t.FRONT_RIGHT, t.RIGHT_BACK, t.BACK_LEFT]
                }
            }, {
                key: "tertiaryNeighbors", get: function () {
                    return [t.RIGHT_UP_BACK, t.RIGHT_UP_FRONT, t.RIGHT_DOWN_BACK, t.RIGHT_DOWN_FRONT, t.LEFT_UP_BACK, t.LEFT_UP_FRONT, t.LEFT_DOWN_BACK, t.LEFT_DOWN_FRONT]
                }
            }, {
                key: "values", get: function () {
                    return [t.UP, t.DOWN, t.FRONT, t.BACK, t.RIGHT, t.LEFT, t.UP_LEFT, t.UP_RIGHT, t.UP_FRONT, t.UP_BACK, t.DOWN_LEFT, t.DOWN_RIGHT, t.DOWN_FRONT, t.DOWN_BACK, t.LEFT_FRONT, t.FRONT_RIGHT, t.RIGHT_BACK, t.BACK_LEFT, t.RIGHT_UP_BACK, t.RIGHT_UP_FRONT, t.RIGHT_DOWN_BACK, t.RIGHT_DOWN_FRONT, t.LEFT_UP_BACK, t.LEFT_UP_FRONT, t.LEFT_DOWN_BACK, t.LEFT_DOWN_FRONT]
                }
            }]), t
        }();
        P.UP = new P(Object(S.l)(0, 1, 0)), P.DOWN = new P(Object(S.l)(0, -1, 0)), P.FRONT = new P(Object(S.l)(0, 0, 1)), P.BACK = new P(Object(S.l)(0, 0, -1)), P.LEFT = new P(Object(S.l)(1, 0, 0)), P.RIGHT = new P(Object(S.l)(-1, 0, 0)), P.UP_LEFT = new P(Object(S.l)(1, 1, 0)), P.UP_RIGHT = new P(Object(S.l)(-1, 1, 0)), P.UP_FRONT = new P(Object(S.l)(0, 1, 1)), P.UP_BACK = new P(Object(S.l)(0, 1, -1)), P.DOWN_LEFT = new P(Object(S.l)(1, -1, 0)), P.DOWN_RIGHT = new P(Object(S.l)(-1, -1, 0)), P.DOWN_FRONT = new P(Object(S.l)(0, -1, 1)), P.DOWN_BACK = new P(Object(S.l)(0, -1, -1)), P.LEFT_FRONT = new P(Object(S.l)(1, 0, 1)), P.FRONT_RIGHT = new P(Object(S.l)(-1, 0, 1)), P.RIGHT_BACK = new P(Object(S.l)(-1, 0, -1)), P.BACK_LEFT = new P(Object(S.l)(1, 0, -1)), P.RIGHT_UP_BACK = new P(Object(S.l)(-1, 1, -1)), P.RIGHT_UP_FRONT = new P(Object(S.l)(-1, 1, 1)), P.RIGHT_DOWN_BACK = new P(Object(S.l)(-1, -1, -1)), P.RIGHT_DOWN_FRONT = new P(Object(S.l)(-1, -1, 1)), P.LEFT_UP_BACK = new P(Object(S.l)(1, 1, -1)), P.LEFT_UP_FRONT = new P(Object(S.l)(1, 1, 1)), P.LEFT_DOWN_BACK = new P(Object(S.l)(1, -1, -1)), P.LEFT_DOWN_FRONT = new P(Object(S.l)(1, -1, 1));
        var M = i(90), N = function () {
            function t() {
                this._set = void 0, this._head = void 0, this._tail = void 0, this._set = new Set, this._head = void 0, this._tail = void 0
            }

            var e = t.prototype;
            return e.pushBack = function (t) {
                if (!this._set.has(t)) {
                    this._set.add(t);
                    var e = {val: t, next: void 0};
                    void 0 === this._head ? this._head = this._tail = e : (this._tail.next = e, this._tail = e)
                }
            }, e.popFront = function () {
                if (void 0 !== this._head) {
                    if (this._head === this._tail) {
                        var t = this._head.val;
                        return this._set.delete(t), this._head = this._tail = void 0, t
                    }
                    var e = this._head.val;
                    return this._set.delete(e), this._head = this._head.next, e
                }
            }, e.pushFront = function (t) {
                if (!this._set.has(t)) {
                    this._set.add(t);
                    var e = {val: t, next: void 0};
                    void 0 === this._head ? this._head = this._tail = e : (e.next = this._head, this._head = e)
                }
            }, t
        }();

        function w(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return L(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return L(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function L(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var U = function () {
            function t(t, e) {
                this._chunkPosMin = t, this._chunkPosMax = e, this._chunks = void 0, this._numChunksNeedUpdate = void 0, this._chunksQueue = void 0, this._chunks = new Map, this._numChunksNeedUpdate = 0, this._chunksQueue = new N
            }

            var e = t.prototype;
            return e.queueChunkUpdate = function (t) {
                this._chunksQueue.pushBack(t.chunkKey)
            }, e.queueChunkUpdatePriority = function (t) {
                this._chunksQueue.pushFront(t.chunkKey)
            }, e.getNextChunkToUpdate = function () {
                for (var t = this._chunksQueue.popFront(); void 0 !== t;) {
                    var e = this._chunks.get(t);
                    if (void 0 !== e) return e;
                    t = this._chunksQueue.popFront()
                }
            }, e.getChunkPos = function (t, e, i) {
                return Object(S.l)(Math.floor(t / l.a.CHUNK_SIZE), Math.floor(e / l.a.CHUNK_SIZE), Math.floor(i / l.a.CHUNK_SIZE))
            }, e.getChunkBlockPos = function (t, e, i) {
                return Object(S.l)(0 | Object(M.e)(t, l.a.CHUNK_SIZE), 0 | Object(M.e)(e, l.a.CHUNK_SIZE), 0 | Object(M.e)(i, l.a.CHUNK_SIZE))
            }, e.roundToWorldBlockPos = function (t, e, i) {
                return Object(S.l)(Math.floor(t), Math.floor(e), Math.floor(i))
            }, e.roundToBlockCenterPos = function (t, e, i) {
                return Object(S.l)((Math.floor(t) + .5) * l.a.BLOCK_SIZE, (Math.floor(e) + .5) * l.a.BLOCK_SIZE, (Math.floor(i) + .5) * l.a.BLOCK_SIZE)
            }, e.isValidChunkPos = function (t, e, i) {
                return t >= this._chunkPosMin.x && e >= this._chunkPosMin.y && i >= this._chunkPosMin.z && t <= this._chunkPosMax.x && e <= this._chunkPosMax.y && i <= this._chunkPosMax.z
            }, e.hasChunk = function (t, e, i) {
                return this._chunks.has(C(t, e, i))
            }, e.getChunk = function (t, e, i) {
                return this._chunks.get(C(t, e, i))
            }, e.loadChunk = function (t, e, i, n, s) {
                var r = new x(this, Object(S.l)(t, e, i), n, s);
                return this._chunks.set(r.chunkKey, r), this.notifyNeighborChunks(t, e, i, !1), r
            }, e.deleteChunk = function (t, e, i) {
                this.hasChunk(t, e, i) && (this.getChunk(t, e, i).doneUpdate(), this._chunks.delete(C(t, e, i)))
            }, e.getBlockAt = function (t, e, i) {
                var n = this.getChunkPos(t, e, i);
                if (!this.hasChunk(n.x, n.y, n.z)) return R.a.AIR;
                var s = this.getChunk(n.x, n.y, n.z), r = this.getChunkBlockPos(t, e, i);
                return s.getChunkBlockAt(r.x, r.y, r.z)
            }, e.setBlockAt = function (t, e, i, n) {
                var s = this.getChunkPos(t, e, i);
                if (this.hasChunk(s.x, s.y, s.z)) {
                    var r = this.getChunk(s.x, s.y, s.z), a = this.getChunkBlockPos(t, e, i);
                    r.setChunkBlockAt(a.x, a.y, a.z, n);
                    for (var o, h = w(P.values); !(o = h()).done;) {
                        var c = o.value;
                        (1 === c.dir.x && a.x === l.a.CHUNK_SIZE - 1 || -1 === c.dir.x && 0 === a.x || 0 === c.dir.x) && (1 === c.dir.y && a.y === l.a.CHUNK_SIZE - 1 || -1 === c.dir.y && 0 === a.y || 0 === c.dir.y) && (1 === c.dir.z && a.z === l.a.CHUNK_SIZE - 1 || -1 === c.dir.z && 0 === a.z || 0 === c.dir.z) && this.notifyNeighborChunk(s.x, s.y, s.z, c.dir.x, c.dir.y, c.dir.z, !0)
                    }
                }
            }, e.notifyChunk = function (t, e, i, n) {
                this.hasChunk(t, e, i) && this.getChunk(t, e, i).requestUpdate(n)
            }, e.notifyNeighborChunk = function (t, e, i, n, s, r, a) {
                this.notifyChunk(t + n, e + s, i + r, a)
            }, e.notifyNeighborChunks = function (t, e, i, n) {
                for (var s, r = w(P.values); !(s = r()).done;) {
                    var a = s.value;
                    this.notifyNeighborChunk(t, e, i, a.dir.x, a.dir.y, a.dir.z, n)
                }
            }, _()(t, [{
                key: "minChunkPos", get: function () {
                    return this._chunkPosMin
                }
            }, {
                key: "maxChunkPos", get: function () {
                    return this._chunkPosMax
                }
            }, {
                key: "chunks", get: function () {
                    return this._chunks
                }
            }, {
                key: "numChunksNeedUpdate", set: function (t) {
                    this._numChunksNeedUpdate = t
                }, get: function () {
                    return this._numChunksNeedUpdate
                }
            }]), t
        }(), D = function () {
            function t(t, e, i, n) {
                this._chunkGenWorkerPool = t, this._chunkStorageManager = e, this._chunk = i, this._terrainRenderer = n, this._lastSentVersion = void 0, this._lastReceivedVersion = void 0, this._opaqueMesh = void 0, this._alphaMesh = void 0, this._lastSentVersion = 0, this._lastReceivedVersion = -1
            }

            var e = t.prototype;
            return e.cleanUp = function () {
                this._opaqueMesh && (this._terrainRenderer.object.remove(this._opaqueMesh), this._opaqueMesh.geometry.dispose(), this._opaqueMesh = void 0), this._alphaMesh && (this._terrainRenderer.object.remove(this._alphaMesh), this._alphaMesh.geometry.dispose(), this._alphaMesh = void 0)
            }, e.updateMesh = function (t, e, i) {
                t < this._lastReceivedVersion || (this._lastReceivedVersion = t, this.cleanUp(), e && (this._opaqueMesh = e, this._opaqueMesh.scale.set(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE), this._opaqueMesh.position.set(this._chunk.chunkPos.x * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.y * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.z * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)), this._opaqueMesh.matrixAutoUpdate = !1, this._opaqueMesh.updateMatrix(), this._terrainRenderer.object.add(this._opaqueMesh)), i && (this._alphaMesh = i, this._alphaMesh.scale.set(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE), this._alphaMesh.position.set(this._chunk.chunkPos.x * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.y * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.z * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)), this._alphaMesh.matrixAutoUpdate = !1, this._alphaMesh.updateMatrix(), this._terrainRenderer.object.add(this._alphaMesh)))
            }, e.generateMesh = function (t) {
                if (this._chunk.isEmpty()) this.cleanUp(); else {
                    for (var e = [], i = [], n = [], s = [], r = [], a = [], o = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), h = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), c = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), _ = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), u = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), d = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), p = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), v = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), S = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), y = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), g = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), m = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), f = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, l.a.CHUNK_SIZE, l.a.CHUNK_SIZE), k = this._chunkStorageManager.getBlockAt(f.x, f.y, f.z), E = this._chunk.chunkBlockPosToWorldBlockPos(-1, l.a.CHUNK_SIZE, l.a.CHUNK_SIZE), O = this._chunkStorageManager.getBlockAt(E.x, E.y, E.z), I = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, l.a.CHUNK_SIZE, -1), T = this._chunkStorageManager.getBlockAt(I.x, I.y, I.z), A = this._chunk.chunkBlockPosToWorldBlockPos(-1, l.a.CHUNK_SIZE, -1), C = this._chunkStorageManager.getBlockAt(A.x, A.y, A.z), b = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, -1, l.a.CHUNK_SIZE), x = this._chunkStorageManager.getBlockAt(b.x, b.y, b.z), P = this._chunk.chunkBlockPosToWorldBlockPos(-1, -1, l.a.CHUNK_SIZE), M = this._chunkStorageManager.getBlockAt(P.x, P.y, P.z), N = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, -1, -1), w = this._chunkStorageManager.getBlockAt(N.x, N.y, N.z), L = this._chunk.chunkBlockPosToWorldBlockPos(-1, -1, -1), U = this._chunkStorageManager.getBlockAt(L.x, L.y, L.z), D = [], B = [], F = [], z = [], j = [], K = [], G = [], H = [], W = [], Y = [], V = [], Z = [], q = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), Q = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), J = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), X = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), $ = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), tt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), et = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), it = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), nt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z + 1), st = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z + 1), rt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z - 1), at = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z - 1), ot = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), ht = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), ct = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), _t = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), lt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z + 1), ut = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z + 1), dt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z - 1), pt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z - 1), vt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), St = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), yt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), gt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), mt = 0; mt < l.a.CHUNK_SIZE; mt++) {
                        e[mt] = [], i[mt] = [], n[mt] = [], s[mt] = [], r[mt] = [], a[mt] = [];
                        for (var ft = 0; ft < l.a.CHUNK_SIZE; ft++) e[mt][ft] = o ? h.getChunkBlockAt(0, mt, ft) : R.a.AIR, i[mt][ft] = c ? _.getChunkBlockAt(l.a.CHUNK_SIZE - 1, mt, ft) : R.a.AIR, n[mt][ft] = u ? d.getChunkBlockAt(mt, 0, ft) : R.a.AIR, s[mt][ft] = p ? v.getChunkBlockAt(mt, l.a.CHUNK_SIZE - 1, ft) : R.a.AIR, r[mt][ft] = S ? y.getChunkBlockAt(mt, ft, 0) : R.a.AIR, a[mt][ft] = g ? m.getChunkBlockAt(mt, ft, l.a.CHUNK_SIZE - 1) : R.a.AIR;
                        D[mt] = q ? Q.getChunkBlockAt(0, mt, 0) : R.a.AIR, B[mt] = J ? X.getChunkBlockAt(l.a.CHUNK_SIZE - 1, mt, 0) : R.a.AIR, F[mt] = $ ? tt.getChunkBlockAt(0, mt, l.a.CHUNK_SIZE - 1) : R.a.AIR, z[mt] = et ? it.getChunkBlockAt(l.a.CHUNK_SIZE - 1, mt, l.a.CHUNK_SIZE - 1) : R.a.AIR, j[mt] = nt ? st.getChunkBlockAt(mt, 0, 0) : R.a.AIR, K[mt] = rt ? at.getChunkBlockAt(mt, 0, l.a.CHUNK_SIZE - 1) : R.a.AIR, G[mt] = ot ? ht.getChunkBlockAt(0, 0, mt) : R.a.AIR, H[mt] = ct ? _t.getChunkBlockAt(l.a.CHUNK_SIZE - 1, 0, mt) : R.a.AIR, W[mt] = lt ? ut.getChunkBlockAt(mt, l.a.CHUNK_SIZE - 1, 0) : R.a.AIR, Y[mt] = dt ? pt.getChunkBlockAt(mt, l.a.CHUNK_SIZE - 1, l.a.CHUNK_SIZE - 1) : R.a.AIR, V[mt] = vt ? St.getChunkBlockAt(0, l.a.CHUNK_SIZE - 1, mt) : R.a.AIR, Z[mt] = yt ? gt.getChunkBlockAt(l.a.CHUNK_SIZE - 1, l.a.CHUNK_SIZE - 1, mt) : R.a.AIR
                    }
                    this._chunkGenWorkerPool.queueChunkGeneration(++this._lastSentVersion, this._chunk.chunkPos, this._chunk.blocks, n, s, e, i, r, a, k, O, T, C, x, M, w, U, D, B, F, z, j, K, G, H, W, Y, V, Z, t)
                }
            }, t
        }(), B = function () {
            function t(t) {
                var e = this;
                this._terrainRenderer = t, this._fallingBlocksGroups = void 0, this.render = function (t, i) {
                    for (var n = 0; n < e._fallingBlocksGroups.length; n++) {
                        var s = e._fallingBlocksGroups[n], r = s.mesh.position;
                        s.mesh.position.set(r.x, r.y - 2 * t, r.z);
                        var a = new h.Ob(1, 0, 1);
                        a.normalize(), s.mesh.rotateOnAxis(a, 1.5 * t), s.mesh.position.y < s.originY - 5 * l.a.BLOCK_SIZE && (e._terrainRenderer.sceneRenderer.scene.remove(s.mesh), s.mesh.geometry.dispose(), e._fallingBlocksGroups[n] = e._fallingBlocksGroups[e._fallingBlocksGroups.length - 1], e._fallingBlocksGroups.pop(), --n)
                    }
                }, this._fallingBlocksGroups = []
            }

            var e = t.prototype;
            return e.register = function (t) {
                this._fallingBlocksGroups.push({
                    mesh: t,
                    originY: t.position.y
                }), this._terrainRenderer.sceneRenderer.scene.add(t)
            }, e.cleanUp = function () {
                for (var t = 0; t < this._fallingBlocksGroups.length; t++) {
                    var e = this._fallingBlocksGroups[t];
                    e.mesh.geometry.dispose(), this._terrainRenderer.sceneRenderer.scene.remove(e.mesh)
                }
            }, t
        }(), F = i(94), z = i(78), j = function () {
            function t(t) {
                var e = this;
                this._terrainRenderer = t, this._cracksMap = void 0, this._cracksArr = void 0, this._crackMesh = void 0, this._instanceCrackAttribute = void 0, this._dummyObj = void 0, this.render = function (t, e) {
                }, this.update = function (t) {
                    for (var i = Date.now(), n = 0, s = Object.entries(e._cracksMap); n < s.length; n++) {
                        var r = s[n], a = r[0], o = r[1];
                        if (i - o.lastActiveTime >= 3e3) if (o.progress = Math.max(0, o.progress - Object(z.d)(1) / 4), o.progress <= 0) e.removeBlockBreakProgressByKey(a); else {
                            var h = F.a[e._terrainRenderer.chunkStorageManager.getBlockAt(o.pos.x, o.pos.y, o.pos.z)].hardness;
                            o.instanceIdx >= 0 && o.instanceIdx < l.a.CRACK_INSTANCE_LIMIT && (o.percent = Math.max(0, Math.min(1, o.progress / h)), e._instanceCrackAttribute.set([o.percent], o.instanceIdx), e._instanceCrackAttribute.needsUpdate = !0)
                        }
                    }
                }, this._cracksMap = {}, this._cracksArr = [];
                for (var i = new h.j(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE), n = new h.Y({
                    transparent: !0,
                    map: k.a.blockTexture,
                    blending: h.cb,
                    fog: !1
                }), s = [], r = 0; r < l.a.CRACK_INSTANCE_LIMIT; r++) s.push(0);
                this._instanceCrackAttribute = new h.A(new Float32Array(s), 1), i.setAttribute("instanceCrack", this._instanceCrackAttribute), n.onBeforeCompile = function (t) {
                    t.vertexShader = t.vertexShader.replace("#include <common>", "\n                attribute float instanceCrack;\n                varying float vInstanceCrack;\n                #include <common>\n            ").replace("#include <begin_vertex>", "\n                #include <begin_vertex>\n                vInstanceCrack = instanceCrack;\n            "), t.fragmentShader = t.fragmentShader.replace("#include <common>", "\n                varying float vInstanceCrack;\n                #include <common>\n            ").replace("#include <map_fragment>", "\n                vec2 rawUv = vec2(\n                    fract(vUv.x) / 8.0,\n                    fract(vUv.y) / 8.0\n                );\n                float crackU = floor(vInstanceCrack * 5.0) / 8.0;\n                float crackV = 7.0 / 8.0;\n                vec4 crackTexture = sRGBToLinear(texture2D(map, vec2(rawUv.x + crackU, rawUv.y + crackV)));\n                vec4 identity = vec4(1.0, 1.0, 1.0, 1.0);\n                float hasPixel = step(0.5, crackTexture.a);\n                crackTexture = (1.0 - hasPixel) * identity + hasPixel * crackTexture;\n                diffuseColor = crackTexture;\n            ")
                }, this._crackMesh = new h.B(i, n, l.a.CRACK_INSTANCE_LIMIT), this._terrainRenderer.sceneRenderer.scene.add(this._crackMesh), this._crackMesh.count = this._cracksArr.length, this._dummyObj = new h.hb, this._dummyObj.scale.set(1.002, 1.002, 1.002)
            }

            var e = t.prototype;
            return e.setBlockBreakProgress = function (t, e, i, n, s) {
                var r = Object(S.l)(t, e, i), a = b(t, e, i),
                    o = F.a[this._terrainRenderer.chunkStorageManager.getBlockAt(r.x, r.y, r.z)].hardness;
                n = Math.min(o, n);
                var h = Math.max(0, Math.min(n / o)), c = this.getBlockProgress(t, e, i) / o;
                if (a in this._cracksMap) this._cracksMap[a].progress = n, this._cracksMap[a].percent = h, this._cracksMap[a].lastActiveTime = Date.now(); else {
                    var _ = this._cracksArr.length,
                        u = {progress: n, percent: h, lastActiveTime: Date.now(), pos: r, instanceIdx: _};
                    if (this._cracksMap[a] = u, this._cracksArr.push(u), _ >= 0 && _ < l.a.CRACK_INSTANCE_LIMIT) {
                        var d = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t, e, i);
                        this._dummyObj.position.set(d.x, d.y, d.z), this._dummyObj.updateMatrix(), this._crackMesh.setMatrixAt(_, this._dummyObj.matrix), this._crackMesh.count = Math.min(l.a.CRACK_INSTANCE_LIMIT, this._cracksArr.length), this._crackMesh.instanceMatrix.needsUpdate = !0
                    }
                }
                var p = h;
                if (this._cracksMap[a].instanceIdx >= 0 && this._cracksMap[a].instanceIdx < l.a.CRACK_INSTANCE_LIMIT && (this._instanceCrackAttribute.set([h], this._cracksMap[a].instanceIdx), this._instanceCrackAttribute.needsUpdate = !0), this._cracksMap[a].progress >= o) this._terrainRenderer.sceneRenderer.controlsRenderer.controls.predictBlockEdit(r.x, r.y, r.z, R.a.AIR), this.removeBlockBreakProgressByKey(a); else if (s) {
                    if (c < p && Math.floor(c / .2) !== Math.floor(p / .2)) {
                        var v = this._terrainRenderer.chunkStorageManager.getBlockAt(t, e, i),
                            y = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t, e, i),
                            g = F.a[v].sound;
                        void 0 !== g && this._terrainRenderer.sceneRenderer.controlsRenderer.playPositionalSound(y, g, -1200, 1, 40 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 4)
                    }
                }
            }, e.removeBlockBreakProgress = function (t, e, i) {
                var n = b(t, e, i);
                this.removeBlockBreakProgressByKey(n)
            }, e.removeBlockBreakProgressByKey = function (t) {
                if (t in this._cracksMap) {
                    if (this._cracksArr.length > 1) {
                        var e = this._cracksMap[t], i = this._cracksArr[this._cracksArr.length - 1];
                        if (this._cracksArr[e.instanceIdx] = i, i.instanceIdx = e.instanceIdx, i.instanceIdx >= 0 && i.instanceIdx < l.a.CRACK_INSTANCE_LIMIT) {
                            var n = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(i.pos.x, i.pos.y, i.pos.z);
                            this._dummyObj.position.set(n.x, n.y, n.z), this._dummyObj.updateMatrix(), this._crackMesh.setMatrixAt(i.instanceIdx, this._dummyObj.matrix), this._instanceCrackAttribute.set([i.percent], i.instanceIdx), this._instanceCrackAttribute.needsUpdate = !0
                        }
                    }
                    delete this._cracksMap[t], this._cracksArr.pop(), this._crackMesh.count = Math.min(l.a.CRACK_INSTANCE_LIMIT, this._cracksArr.length), this._crackMesh.instanceMatrix.needsUpdate = !0
                }
            }, e.getBlockProgress = function (t, e, i) {
                var n = b(t, e, i);
                // #instabreak
                return window.instaBreak ? 1000 : n in this._cracksMap ? this._cracksMap[n].progress : 0
            }, e.addBlockBreakProgress = function (t, e, i, n, s) {
                this.setBlockBreakProgress(t, e, i, this.getBlockProgress(t, e, i) + n, s)
            }, e.cleanUp = function () {
            }, t
        }(), K = i(3);

        function G(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return H(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return H(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function H(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var W, Y = function () {
            function t(t, e, i, n) {
                var s = this;
                this._config = t, this._camera = e, this._sceneRenderer = i, this._statsRenderer = n, this._wrapper = void 0, this._chunkStorageManager = void 0, this._chunkGenWorkerPool = void 0, this._chunkRenderers = void 0, this._fallingBlocksRenderer = void 0, this._cracksRenderer = void 0, this._blockBreakProgress = void 0, this._initialChunksToLoad = void 0, this.onSetBlock = function (t, e, i, n) {
                    s._cracksRenderer.removeBlockBreakProgress(t, e, i)
                }, this.onSetBlockBreakProgress = function (t, e, i, n) {
                    s._cracksRenderer.setBlockBreakProgress(t, e, i, n, !0)
                }, this.loadChunk = function (t, e, i, n, r) {
                    if (!s._chunkStorageManager.hasChunk(t, e, i)) {
                        var a = s._chunkStorageManager.loadChunk(t, e, i, n, r),
                            o = new D(s._chunkGenWorkerPool, s._chunkStorageManager, a, s);
                        s._chunkRenderers.set(C(t, e, i), o)
                    }
                }, this.unloadChunk = function (t, e, i) {
                    if (s._chunkStorageManager.hasChunk(t, e, i)) {
                        var n = C(t, e, i);
                        s._chunkStorageManager.deleteChunk(t, e, i), s._chunkRenderers.get(n).cleanUp(), s._chunkRenderers.delete(n)
                    }
                }, this.onGameJoin = function (t, e, i, n, r, a, o) {
                    s._chunkStorageManager = new U(a, o), s.processInitialMapLoading()
                }, this.processInitialMapLoading = function () {
                    var t = 70 * (s._chunkStorageManager.maxChunkPos.y - s._chunkStorageManager.minChunkPos.y);
                    if (Object(y.f)() === K.a.DOWNLOADING) {
                        var e = Math.min(1, Math.max(0, s._chunkStorageManager.chunks.size / t)) / 2;
                        e >= .5 && (s._initialChunksToLoad = s._chunkStorageManager.numChunksNeedUpdate), d.a.emit(p.a.TERRAIN_LOADING_STATUS, e >= .5 ? K.a.LOADING : K.a.DOWNLOADING, e), setTimeout(s.processInitialMapLoading, 100)
                    } else {
                        for (var i = 0, n = void 0; void 0 !== (n = s._chunkStorageManager.getNextChunkToUpdate());) if (s._chunkRenderers.get(n.chunkKey).generateMesh(!1), n.doneUpdate(), ++i >= 20 || 0 === s._chunkStorageManager.numChunksNeedUpdate) {
                            var r = Math.max(0, Math.min(1, 1 - s._chunkStorageManager.numChunksNeedUpdate / s._initialChunksToLoad)) / 2 + .5;
                            d.a.emit(p.a.TERRAIN_LOADING_STATUS, K.a.LOADING, r);
                            break
                        }
                        s._chunkStorageManager.numChunksNeedUpdate > 0 && setTimeout(s.processInitialMapLoading, 0)
                    }
                }, this.update = function (t) {
                    s._chunkStorageManager && (Object(y.e)() >= 1 && (s.updateChunkMeshes(), s._chunkGenWorkerPool.process()), s._statsRenderer.totalChunksLoaded = s._chunkStorageManager.chunks.size, s._cracksRenderer.update(t))
                }, this.render = function (t, e) {
                    s._fallingBlocksRenderer.render(t, e)
                }, this._wrapper = new h.hb, this._chunkRenderers = new Map, this._chunkGenWorkerPool = new A(this, Math.min(3, l.a.NUM_CORES)), this._fallingBlocksRenderer = new B(this), this._cracksRenderer = new j(this), this._blockBreakProgress = {}, this._initialChunksToLoad = 0, this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin), d.a.on(p.a.LOAD_CHUNK, this.loadChunk), d.a.on(p.a.UNLOAD_CHUNK, this.unloadChunk), d.a.on(p.a.SET_BLOCK_BREAK_PROGRESS, this.onSetBlockBreakProgress), d.a.on(p.a.SET_BLOCK, this.onSetBlock)
            }, e.unbindEvents = function () {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin), d.a.off(p.a.LOAD_CHUNK, this.loadChunk), d.a.off(p.a.UNLOAD_CHUNK, this.unloadChunk), d.a.off(p.a.SET_BLOCK_BREAK_PROGRESS, this.onSetBlockBreakProgress), d.a.off(p.a.SET_BLOCK, this.onSetBlock)
            }, e.cleanUp = function () {
                this.unbindEvents();
                for (var t, e = G(this._chunkRenderers); !(t = e()).done;) {
                    var i = t.value;
                    i[0];
                    i[1].cleanUp()
                }
                this._chunkGenWorkerPool.cleanUp(), this._fallingBlocksRenderer.cleanUp()
            }, e.processChunkData = function (t, e, i, n, s, r) {
                var a = C(e, i, n);
                this._chunkRenderers.has(a) && this._chunkRenderers.get(a).updateMesh(t, s, r)
            }, e.processFallingBlocks = function (t, e) {
                this._fallingBlocksRenderer.register(e)
            }, e.updateChunkMeshes = function () {
                var t = 0;
                if (this._chunkStorageManager.numChunksNeedUpdate > 0) for (var e = void 0; void 0 !== (e = this._chunkStorageManager.getNextChunkToUpdate()) && (this._chunkRenderers.get(e.chunkKey).generateMesh(!0), e.doneUpdate(), !(++t >= 2));) ;
            }, e.setBlockAt = function (t, e, i, n, s) {
                var r = this._chunkStorageManager.getBlockAt(t, e, i);
                if (this._chunkStorageManager.setBlockAt(t, e, i, n), s && r !== n) {
                    var a = this._chunkStorageManager.roundToBlockCenterPos(t, e, i), o = F.a[n].sound;
                    n === R.a.AIR && (o = F.a[r].sound), void 0 !== o && this._sceneRenderer.controlsRenderer.playPositionalSound(a, o, 0, 1, 40 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 4)
                }
            }, _()(t, [{
                key: "chunkStorageManager", get: function () {
                    return this._chunkStorageManager
                }
            }, {
                key: "object", get: function () {
                    return this._wrapper
                }
            }, {
                key: "sceneRenderer", get: function () {
                    return this._sceneRenderer
                }
            }, {
                key: "chunkGenWorkerPool", get: function () {
                    return this._chunkGenWorkerPool
                }
            }, {
                key: "cracksRenderer", get: function () {
                    return this._cracksRenderer
                }
            }]), t
        }(), V = i(160), Z = i(95), q = i(350), Q = i.n(q), J = i(107), X = i(93), $ = function () {
            function t() {
                var t = this;
                this._keyHoldStates = void 0, this._keyPressStates = void 0, this._hasScrolledUp = void 0, this._hasScrolledDown = void 0, this.onGameUnfocus = function () {
                    t._keyHoldStates = {}, t._keyPressStates = {}
                }, this.onMouseWheel = function (e) {
                    Object(y.l)() || (e.deltaX > 0 || e.deltaY > 0 ? t._hasScrolledUp = !0 : (e.deltaX < 0 || e.deltaY < 0) && (t._hasScrolledDown = !0))
                }, this.onMouseDown = function (e) {
                    t.onGameKeyDown(-e.button)
                }, this.onMouseUp = function (e) {
                    t.onGameKeyUp(-e.button)
                }, this.onKeyDown = function (e) {
                    t.onGameKeyDown(e.keyCode)
                }, this.onKeyUp = function (e) {
                    t.onGameKeyUp(e.keyCode)
                }, this._keyHoldStates = {}, this._keyPressStates = {}, this._hasScrolledUp = !1, this._hasScrolledDown = !1, this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                document.addEventListener("keydown", this.onKeyDown, !1), document.addEventListener("keyup", this.onKeyUp, !1), document.addEventListener("mousedown", this.onMouseDown, !1), document.addEventListener("mouseup", this.onMouseUp, !1), document.addEventListener("wheel", this.onMouseWheel, !1), d.a.on(p.a.GAME_UNFOCUS, this.onGameUnfocus)
            }, e.unbindEvents = function () {
                document.removeEventListener("keydown", this.onKeyDown, !1), document.removeEventListener("keyup", this.onKeyUp, !1), document.removeEventListener("mousedown", this.onMouseDown, !1), document.removeEventListener("mouseup", this.onMouseUp, !1), document.removeEventListener("wheel", this.onMouseWheel, !1), d.a.off(p.a.GAME_UNFOCUS, this.onGameUnfocus)
            }, e.cleanUp = function () {
                this.unbindEvents()
            }, e.onGameKeyDown = function (t) {
                this.isKeyDown(t) || (d.a.emit(p.a.KEY_PRESS, t), this._keyPressStates[t] = !0), this._keyHoldStates[t] = !0
            }, e.onGameKeyUp = function (t) {
                delete this._keyHoldStates[t], delete this._keyPressStates[t]
            }, e.isGameKeyDownBypassPause = function (t) {
                return this.isKeyDown(t)
            }, e.isGameKeyDown = function (t) {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.isKeyDown(t)
            }, e.isGameKeyPressed = function (t) {
                return !Object(y.l)() && !Object(y.j)() && this.isKeyPressed(t)
            }, e.isKeyDown = function (t) {
                return !0 === this._keyHoldStates[t]
            }, e.isKeyPressed = function (t) {
                var e = this._keyPressStates[t];
                return delete this._keyPressStates[t], e
            }, e.hasGameScrolledUp = function () {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.hasScrolledUp()
            }, e.hasGameScrolledDown = function () {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.hasScrolledDown()
            }, e.hasScrolledUp = function () {
                var t = this._hasScrolledUp;
                return this._hasScrolledUp = !1, t
            }, e.hasScrolledDown = function () {
                var t = this._hasScrolledDown;
                return this._hasScrolledDown = !1, t
            }, t
        }(), tt = i(140), et = i(76), it = i.n(et), nt = i(86);
        !function (t) {
            t[t.FIRST_PERSON = 0] = "FIRST_PERSON", t[t.THIRD_PERSON = 1] = "THIRD_PERSON"
        }(W || (W = {}));
        var st, rt = function (t) {
            function e(e, i, n, s) {
                var r;
                return (r = t.call(this) || this)._settings = e, r._camera = i, r._domElement = n, r._controls = s, r._controlMode = void 0, r._isLocked = void 0, r._minPolarAngle = void 0, r._maxPolarAngle = void 0, r._euler = void 0, r._base = void 0, r._recoilShake = void 0, r._recoilShakeDir = void 0, r._recoil = void 0, r._recoilMax = void 0, r._recoilGainVel = void 0, r._recoilRecoverVel = void 0, r._recoilStartTime = void 0, r._recoilActiveTime = void 0, r._vec = void 0, r._mouseOffset = void 0, r._orbitBase = void 0, r._orbitTarget = void 0, r._orbitRadius = void 0, r._orbitOffset = void 0, r._changeEvent = void 0, r._lockEvent = void 0, r._unlockEvent = void 0, r._skipOneMouseMoveEvent = void 0, r.setRecoilMax = function (t) {
                    r._recoilMax = t
                }, r.setRecoilVel = function (t, e, i) {
                    r._recoilGainVel = t, r._recoilRecoverVel = e, r._recoilActiveTime = i, r._recoilStartTime = Date.now()
                }, r.reset = function () {
                    r._controlMode = W.FIRST_PERSON, r._recoilShake = 0, r._recoilShakeDir = !0, r._recoil = 0, r._recoilMax = 1, r._recoilGainVel = 0, r._recoilRecoverVel = 0, r._recoilActiveTime = 0, r._recoilStartTime = Date.now()
                }, r.render = function (t, e) {
                    if (r._controlMode === W.FIRST_PERSON) {
                        r._base.x -= r._mouseOffset.y, r._base.y -= r._mouseOffset.x, r._base.x = Math.max(Math.PI / 2 - r._maxPolarAngle, Math.min(Math.PI / 2 - r._minPolarAngle, r._base.x)), Date.now() - r._recoilStartTime <= r._recoilActiveTime ? r._recoil = Math.max(0, Math.min(r._recoilMax, r._recoil + r._recoilGainVel * t)) : r._recoil = Math.max(0, Math.min(r._recoilMax, r._recoil - r._recoilRecoverVel * t));
                        r._recoil === r._recoilMax ? (r._recoilShakeDir ? r._recoilShake = Math.min(.005, r._recoilShake + .2 * t) : r._recoilShake = Math.max(-.005, r._recoilShake - .2 * t), .005 === Math.abs(r._recoilShake) && (r._recoilShakeDir = !r._recoilShakeDir)) : (r._recoilShake <= 0 ? r._recoilShake = Math.min(0, r._recoilShake + .2 * t) : r._recoilShake = Math.max(0, r._recoilShake - .2 * t), r._recoilShakeDir = !0), r.updateRecoil()
                    } else r._controlMode === W.THIRD_PERSON && (r._orbitBase.setFromVector3(r._orbitOffset), r._orbitBase.theta -= r._mouseOffset.x, r._orbitBase.phi -= r._mouseOffset.y, r._orbitBase.makeSafe(), r._orbitBase.radius = r._orbitRadius, r._orbitOffset.setFromSpherical(r._orbitBase), r._camera.position.copy(r._orbitTarget.position).add(r._orbitOffset), r._camera.lookAt(r._orbitTarget.position));
                    r._mouseOffset.set(0, 0)
                }, r.updateRecoil = function () {
                    r._euler.x = r._base.x + r._recoil + r._recoilShake, r._euler.y = r._base.y, r._camera.quaternion.setFromEuler(r._euler)
                }, r.onMouseMove = function (t) {
                    if (r._isLocked) if (r._skipOneMouseMoveEvent) r._skipOneMouseMoveEvent = !1; else {
                        var e = t.movementX || t.mozMovementX || t.webkitMovementX || 0,
                            i = t.movementY || t.mozMovementY || t.webkitMovementY || 0;
                        r._settings.invertYAxis && (i *= -1);
                        var n = 2e-4, s = Object(J.d)(r._controls.getLastInput(), r._controls.playerState);
                        s && Object(nt.h)(r._controls.playerState.inventory.getSelected().item.type) ? n *= r._settings.scopedSensitivityMultiplier : s && (n *= r._settings.adsSensitivityMultiplier), r._mouseOffset.x += e * r._settings.sensitivity * n, r._mouseOffset.y += i * r._settings.sensitivity * n, r.dispatchEvent(r._changeEvent)
                    }
                }, r.onPointerlockChange = function () {
                    r._domElement.ownerDocument.pointerLockElement === r._domElement ? (r.dispatchEvent(r._lockEvent), r._isLocked = !0) : (r.dispatchEvent(r._unlockEvent), r._isLocked = !1)
                }, r.onPointerlockError = function (t) {
                    console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")
                }, r.connect = function () {
                    r._domElement.ownerDocument.addEventListener("mousemove", r.onMouseMove, !1), r._domElement.ownerDocument.addEventListener("pointerlockchange", r.onPointerlockChange, !1), r._domElement.ownerDocument.addEventListener("pointerlockerror", r.onPointerlockError, !1), d.a.on(p.a.GAME_UNFOCUS, r.onGameUnfocus)
                }, r.disconnect = function () {
                    r._domElement.ownerDocument.removeEventListener("mousemove", r.onMouseMove, !1), r._domElement.ownerDocument.removeEventListener("pointerlockchange", r.onPointerlockChange, !1), r._domElement.ownerDocument.removeEventListener("pointerlockerror", r.onPointerlockError, !1), d.a.off(p.a.GAME_UNFOCUS, r.onGameUnfocus)
                }, r.onGameUnfocus = function () {
                    r._skipOneMouseMoveEvent = !0
                }, r.dispose = function () {
                    r.disconnect()
                }, r.getObject = function () {
                    return r._camera
                }, r.getDirection = function (t) {
                    return t.set(0, 0, -1).applyQuaternion(r._camera.quaternion)
                }, r.moveForward = function (t) {
                    r._vec.setFromMatrixColumn(r._camera.matrix, 0), r._vec.crossVectors(r._camera.up, r._vec), r._camera.position.addScaledVector(r._vec, t)
                }, r.moveRight = function (t) {
                    r._vec.setFromMatrixColumn(r._camera.matrix, 0), r._camera.position.addScaledVector(r._vec, t)
                }, r.lock = function () {
                    r.hasPointerLockSupport() && r._domElement.requestPointerLock()
                }, r.unlock = function () {
                    r.hasPointerLockSupport() && r._domElement.ownerDocument.exitPointerLock()
                }, r.hasPointerLockSupport = function () {
                    return "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
                }, r._isLocked = !1, r._minPolarAngle = 0, r._maxPolarAngle = Math.PI, r._changeEvent = {type: "change"}, r._lockEvent = {type: "lock"}, r._unlockEvent = {type: "unlock"}, r._euler = new h.s(0, 0, 0, "YXZ"), r._base = new h.s(0, 0, 0, "YXZ"), r._recoilShake = 0, r._recoilShakeDir = !0, r._recoil = 0, r._recoilMax = 1, r._recoilGainVel = 0, r._recoilRecoverVel = 0, r._recoilActiveTime = 0, r._recoilStartTime = Date.now(), r._vec = new h.Ob, r._controlMode = W.FIRST_PERSON, r._mouseOffset = new h.Nb(0, 0), r._orbitBase = new h.Bb, r._orbitTarget = void 0, r._orbitRadius = 0, r._orbitOffset = new h.Ob(0, 0, 0), r._skipOneMouseMoveEvent = !1, r.connect(), r
            }

            it()(e, t);
            var i = e.prototype;
            return i.startThirdPersonCamera = function (t, e, i) {
                this.reset(), this._controlMode = W.THIRD_PERSON, this._orbitTarget = t, this._orbitRadius = e, void 0 !== i && this._orbitOffset.set(i.x, i.y, i.z)
            }, i.startFirstPersonCamera = function (t) {
                this.reset(), this._orbitTarget = void 0, this._orbitRadius = 0, this._base.x = t.x, this._base.y = t.y
            }, i.getBase = function () {
                return this._base
            }, _()(e, [{
                key: "isLocked", get: function () {
                    return this._isLocked
                }
            }]), e
        }(h.t), at = i(46), ot = i(120), ht = i(153), ct = i(20), _t = i(84), lt = function () {
            this.walkedDistFromLastSoundPlayed = void 0, this.prevWaterSoundPlayedTime = void 0, this.swamDistFromLastSoundPlayed = void 0, this.prevOnGround = void 0, this.prevPos = void 0, this.walkedDistFromLastSoundPlayed = 0, this.prevWaterSoundPlayedTime = 0, this.swamDistFromLastSoundPlayed = 0
        }, ut = function (t, e, i, n, s, r, a) {
            var o = a ? r.playFootstepSound.bind(r) : function (e, i) {
                r.playPositionalFootstepSound(t, e, i)
            }, h = a ? r.playSound.bind(r) : function (e, i, n) {
                r.playPositionalSound(t, e, i, n)
            };
            void 0 === n.prevOnGround && (n.prevOnGround = i), void 0 === n.prevPos && (n.prevPos = Object(S.b)(t));
            var c = s.getBlockAt(n.prevPos.x / l.a.BLOCK_SIZE, n.prevPos.y / l.a.BLOCK_SIZE, n.prevPos.z / l.a.BLOCK_SIZE),
                _ = s.getBlockAt(t.x / l.a.BLOCK_SIZE, t.y / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE),
                u = s.getBlockAt(t.x / l.a.BLOCK_SIZE, (t.y + l.a.BLOCK_SIZE) / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE),
                d = s.getBlockAt(t.x / l.a.BLOCK_SIZE, (t.y + 2 * l.a.BLOCK_SIZE) / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE);
            if (_ === R.a.WATER) n.walkedDistFromLastSoundPlayed = 0, c !== R.a.WATER ? (Date.now() - n.prevWaterSoundPlayedTime < 1e3 ? h(_t.a.WATER_SPLASH, 800, .1) : h(_t.a.WATER_SPLASH), n.prevWaterSoundPlayedTime = Date.now()) : _ !== R.a.WATER || u !== R.a.AIR && d !== R.a.AIR || (n.swamDistFromLastSoundPlayed += Object(S.d)(t, n.prevPos), n.swamDistFromLastSoundPlayed >= 4 && (h(_t.a.FOOTSTEP_WATER, 2400 * Math.random() - 1200, .2), n.swamDistFromLastSoundPlayed = 0)); else if (e !== Z.a.CROUCHING) {
                n.swamDistFromLastSoundPlayed = 0;
                var p = Object(J.c)(t, s), v = F.a[p].sound, y = 1e3;
                p !== R.a.LEAVES && p !== R.a.SAND || (y = 0), void 0 !== v && (!n.prevOnGround && i ? (o(v, y), n.walkedDistFromLastSoundPlayed = 0) : i && n.prevOnGround && (n.walkedDistFromLastSoundPlayed += Object(S.d)(t, n.prevPos), n.walkedDistFromLastSoundPlayed >= 1.5 && (o(v, y), n.walkedDistFromLastSoundPlayed = 0)))
            }
            n.prevPos = Object(S.b)(t), n.prevOnGround = i
        }, dt = function (t, e, i, n) {
            var s = document.createElement("canvas").getContext("2d"), r = e + "px Arial";
            s.font = r;
            var a = s.measureText(t).width + 4, o = e + 4;
            s.canvas.width = a, s.canvas.height = o, s.font = r, s.textBaseline = "top", s.fillStyle = "rgba(0, 0, 0, 0)", s.fillRect(0, 0, a, o), s.fillStyle = i, s.fillText(t, 2, 2);
            var c = new h.n(s.canvas);
            c.minFilter = h.L, c.wrapS = h.o, c.wrapT = h.o;
            var _ = new h.Eb({map: c, transparent: !0, depthWrite: !1}), l = new h.Db(_), u = .2 * n;
            return l.scale.set(a / o * 1 * u, 1 * u, 1), l.renderOrder = -1, l
        }, pt = function () {
            function t(t, e, i) {
                this._id = t, this._type = e, this._entitiesRenderer = i, this._wrapper = void 0, this._previousLerpPosition = void 0, this._previousLerpDirection = void 0, this._posInitialized = void 0, this._dirInitialized = void 0, this._wrapper = new h.hb, this._wrapper.matrixAutoUpdate = !1, this._wrapper.name = "Entity " + this._id, this._previousLerpDirection = Object(X.e)(0, 0), this._previousLerpPosition = Object(S.l)(0, 0, 0), this._posInitialized = !1, this._dirInitialized = !1
            }

            var e = t.prototype;
            return e.onUpdateMetadata = function (t) {
            }, e.onEntityAction = function (t) {
            }, e.onEntityDamage = function (t, e, i) {
            }, e.render = function (t, e) {
            }, e.update = function (t) {
            }, e.cleanUp = function () {
            }, e.processSnapshots = function (t, e, i) {
                if (void 0 !== t && (t.positionChanged && (this._previousLerpPosition = t.pos, this._posInitialized || (this.position = Object(S.b)(t.pos), this._posInitialized = !0)), t.directionChanged && (this._previousLerpDirection = Object(X.a)(t.pitchYaw), this._dirInitialized || (this.pitchYaw = Object(X.e)(t.pitchYaw.x, t.pitchYaw.y), this._dirInitialized = !0))), void 0 !== e && this._posInitialized) {
                    if (e.positionChanged) {
                        var n = Object(S.l)(0, 0, 0);
                        n.x = Object(M.c)(this._previousLerpPosition.x, e.pos.x, 1 - i), n.y = Object(M.c)(this._previousLerpPosition.y, e.pos.y, 1 - i), n.z = Object(M.c)(this._previousLerpPosition.z, e.pos.z, 1 - i), this.position = n
                    }
                    if (e.directionChanged) {
                        var s = Object(M.d)(this._previousLerpDirection.y, e.pitchYaw.y, 1 - i),
                            r = Object(M.c)(this._previousLerpDirection.x, e.pitchYaw.x, 1 - i);
                        this.pitchYaw = Object(X.e)(r, s)
                    }
                }
            }, e.hide = function () {
                this._wrapper.visible = !1
            }, e.show = function () {
                this._wrapper.visible = !0
            }, _()(t, [{
                key: "previousLerpPosition", set: function (t) {
                    this._previousLerpPosition = t
                }
            }, {
                key: "previousLerpDirection", set: function (t) {
                    this._previousLerpDirection = t
                }
            }, {
                key: "object", get: function () {
                    return this._wrapper
                }
            }, {
                key: "id", get: function () {
                    return this._id
                }
            }, {
                key: "type", get: function () {
                    return this._type
                }
            }, {
                key: "entitiesRenderer", get: function () {
                    return this._entitiesRenderer
                }
            }]), t
        }();
        !function (t) {
            t[t.PLAYER = 0] = "PLAYER", t[t.ITEM = 1] = "ITEM", t[t.SPRAY = 2] = "SPRAY"
        }(st || (st = {}));
        var vt, St = st, yt = i(101);
        !function (t) {
            t[t.CUSTOM_NAME = 0] = "CUSTOM_NAME", t[t.PLAYER_STATUS = 1] = "PLAYER_STATUS", t[t.PLAYER_TEAM = 2] = "PLAYER_TEAM", t[t.ITEM_TYPE = 3] = "ITEM_TYPE", t[t.ITEM_PICKUP_TARGET = 4] = "ITEM_PICKUP_TARGET", t[t.ITEM_COUNT = 5] = "ITEM_COUNT", t[t.ITEM_OWNER_NAME = 6] = "ITEM_OWNER_NAME", t[t.IS_ALIVE = 7] = "IS_ALIVE", t[t.SPRAY_TYPE = 8] = "SPRAY_TYPE", t[t.SPRAY_ROTATION = 9] = "SPRAY_ROTATION", t[t.ITEM_SKIN_TYPE = 10] = "ITEM_SKIN_TYPE", t[t.ITEM_SKIN_SEED = 11] = "ITEM_SKIN_SEED", t[t.__LENGTH = 12] = "__LENGTH"
        }(vt || (vt = {}));
        var gt,
            mt = [yt.a.STRING, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_SHORT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_CHAR, yt.a.STRING, yt.a.BOOLEAN, yt.a.UNSIGNED_CHAR, yt.a.FLOAT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT],
            ft = vt, kt = i(37);
        !function (t) {
            t[t.SHOOT = 0] = "SHOOT", t[t.RELOAD_START = 1] = "RELOAD_START", t[t.RELOAD_FINISH = 2] = "RELOAD_FINISH", t[t.ATTACK = 3] = "ATTACK"
        }(gt || (gt = {}));
        var Et = gt, Ot = i(89), It = i(48);

        function Tt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return At(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return At(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function At(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var Rt, Ct = function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, i, St.PLAYER, e) || this)._parachuteModel = void 0, n._nameSprite = void 0, n._damageSprites = void 0, n._playerModel = void 0, n._activeItem = void 0, n._activeItemModel = void 0, n._itemSkinType = void 0, n._itemSkinSeed = void 0, n._mixer = void 0, n._walkAction = void 0, n._crouchAction = void 0, n._freeFallingUpAction = void 0, n._freeFallingDownAction = void 0, n._glideAction = void 0, n._walkForwardAction = void 0, n._walkUpAction = void 0, n._walkDownAction = void 0, n._crouchForwardAction = void 0, n._crouchUpAction = void 0, n._crouchDownAction = void 0, n._walkForwardBlockAction = void 0, n._walkUpBlockAction = void 0, n._walkDownBlockAction = void 0, n._crouchForwardBlockAction = void 0, n._crouchUpBlockAction = void 0, n._crouchDownBlockAction = void 0, n._walkForwardFistAction = void 0, n._walkUpFistAction = void 0, n._walkDownFistAction = void 0, n._crouchForwardFistAction = void 0, n._crouchUpFistAction = void 0, n._crouchDownFistAction = void 0, n._walkingMiddlePause = void 0, n._crouchingMiddlePause = void 0, n._fistPauseState = void 0, n._controlState = void 0, n._pitchYaw = void 0, n._damageIndicatorStartTime = void 0, n._playerModelMaterials = void 0, n._name = void 0, n._team = void 0, n._playerSoundState = void 0, n.firstSetPos = void 0, n._onGround = void 0, n._playSound = void 0, n._isAlive = void 0, n.update = function (t) {
                    n._playSound && ut(n.object.position, n._controlState, n._onGround, n._playerSoundState, n.entitiesRenderer.sceneRenderer.terrainRenderer.chunkStorageManager, n.entitiesRenderer.sceneRenderer.controlsRenderer, !1)
                }, n._parachuteModel = k.a.getMiscModel(Ot.a.PARACHUTE), k.a.removeFog(n._parachuteModel), n.object.add(n._parachuteModel), n._parachuteModel.visible = !1, n._parachuteModel.matrixAutoUpdate = !1, n._team = kt.a.GREEN, n._itemSkinType = It.a.DEFAULT, n._itemSkinSeed = 0, n._damageIndicatorStartTime = 0, n._playerModelMaterials = [], n._damageSprites = [], n._controlState = Z.a.WALKING, n._pitchYaw = Object(X.e)(0, 0), n._walkingMiddlePause = !1, n._crouchingMiddlePause = !1, n._fistPauseState = 0, n._playerModel = k.a.playerModel, n._playerModel.matrixAutoUpdate = !1, n.object.add(n._playerModel), n._mixer = new h.c(n._playerModel), n._playerModel.traverse((function (t) {
                    t.material && (n._playerModelMaterials.push(t.material), t.material.fog = !1)
                })), n._freeFallingUpAction = n._mixer.clipAction(k.a.playerFreeFallingUpAnimation), n._freeFallingDownAction = n._mixer.clipAction(k.a.playerFreeFallingDownAnimation), n._glideAction = n._mixer.clipAction(k.a.playerGlideAnimation), n._walkAction = n._mixer.clipAction(k.a.playerWalkAnimation), n._crouchAction = n._mixer.clipAction(k.a.playerCrouchAnimation), n._walkForwardAction = n._mixer.clipAction(k.a.playerWalkForwardAnimation), n._walkUpAction = n._mixer.clipAction(k.a.playerWalkUpAnimation), n._walkDownAction = n._mixer.clipAction(k.a.playerWalkDownAnimation), n._crouchForwardAction = n._mixer.clipAction(k.a.playerCrouchForwardAnimation), n._crouchUpAction = n._mixer.clipAction(k.a.playerCrouchUpAnimation), n._crouchDownAction = n._mixer.clipAction(k.a.playerCrouchDownAnimation), n._walkForwardBlockAction = n._mixer.clipAction(k.a.playerWalkForwardBlockAnimation), n._walkUpBlockAction = n._mixer.clipAction(k.a.playerWalkUpBlockAnimation), n._walkDownBlockAction = n._mixer.clipAction(k.a.playerWalkDownBlockAnimation), n._crouchForwardBlockAction = n._mixer.clipAction(k.a.playerCrouchForwardBlockAnimation), n._crouchUpBlockAction = n._mixer.clipAction(k.a.playerCrouchUpBlockAnimation), n._crouchDownBlockAction = n._mixer.clipAction(k.a.playerCrouchDownBlockAnimation), n._walkForwardFistAction = n._mixer.clipAction(k.a.playerWalkForwardFistAnimation), n._walkUpFistAction = n._mixer.clipAction(k.a.playerWalkUpFistAnimation), n._walkDownFistAction = n._mixer.clipAction(k.a.playerWalkDownFistAnimation), n._crouchForwardFistAction = n._mixer.clipAction(k.a.playerCrouchForwardFistAnimation), n._crouchUpFistAction = n._mixer.clipAction(k.a.playerCrouchUpFistAnimation), n._crouchDownFistAction = n._mixer.clipAction(k.a.playerCrouchDownFistAnimation), n._walkForwardAction.setEffectiveWeight(0), n._walkUpAction.setEffectiveWeight(0), n._walkDownAction.setEffectiveWeight(0), n._crouchForwardAction.setEffectiveWeight(0), n._crouchUpAction.setEffectiveWeight(0), n._crouchDownAction.setEffectiveWeight(0), n._walkAction.setEffectiveTimeScale(2), n._crouchAction.setEffectiveTimeScale(1), n._walkForwardBlockAction.setEffectiveWeight(0), n._walkUpBlockAction.setEffectiveWeight(0),n._walkDownBlockAction.setEffectiveWeight(0),n._crouchForwardBlockAction.setEffectiveWeight(0),n._crouchUpBlockAction.setEffectiveWeight(0),n._crouchDownBlockAction.setEffectiveWeight(0),n._walkForwardFistAction.setEffectiveWeight(0),n._walkUpFistAction.setEffectiveWeight(0),n._walkDownFistAction.setEffectiveWeight(0),n._crouchForwardFistAction.setEffectiveWeight(0),n._crouchUpFistAction.setEffectiveWeight(0),n._crouchDownFistAction.setEffectiveWeight(0),n._walkForwardAction.play(),n._walkUpAction.play(),n._walkDownAction.play(),n._crouchForwardAction.play(),n._crouchUpAction.play(),n._crouchDownAction.play(),n._walkForwardBlockAction.play(),n._walkUpBlockAction.play(),n._walkDownBlockAction.play(),n._crouchForwardBlockAction.play(),n._crouchUpBlockAction.play(),n._crouchDownBlockAction.play(),n._walkForwardFistAction.play(),n._walkUpFistAction.play(),n._walkDownFistAction.play(),n._crouchForwardFistAction.play(),n._crouchUpFistAction.play(),n._crouchDownFistAction.play(),n._walkForwardFistAction.paused = !0,n._walkUpFistAction.paused = !0,n._walkDownFistAction.paused = !0,n._crouchForwardFistAction.paused = !0,n._crouchUpFistAction.paused = !0,n._crouchDownFistAction.paused = !0,n._walkForwardFistAction.setLoop(h.Q, 1),n._walkUpFistAction.setLoop(h.Q, 1),n._walkDownFistAction.setLoop(h.Q, 1),n._crouchForwardFistAction.setLoop(h.Q, 1),n._crouchUpFistAction.setLoop(h.Q, 1),n._crouchDownFistAction.setLoop(h.Q, 1),n._walkForwardFistAction.clampWhenFinished = !0,n._walkUpFistAction.clampWhenFinished = !0,n._walkDownFistAction.clampWhenFinished = !0,n._crouchForwardFistAction.clampWhenFinished = !0,n._crouchUpFistAction.clampWhenFinished = !0,n._crouchDownFistAction.clampWhenFinished = !0,n._walkAction.play(),n._crouchAction.stop(),n._walkAction.paused = !0,n._crouchAction.paused = !0,n._playerSoundState = new lt,n.firstSetPos = !0,n._activeItem = Object(nt.c)(ct.a.EMPTY),n._onGround = !1,n._playSound = !0,n.position = Object(S.l)(0, -9999, 0),n._isAlive = !0,n
            }

            it()(e, t);
            var i = e.prototype;
            return i.cleanUpActiveItem = function () {
                this._activeItemModel && (this.getRightHand().remove(this._activeItemModel), k.a.cleanUpModelExcludeMaterial(this._activeItemModel), this._activeItemModel = void 0)
            }, i.cleanUp = function () {
                this.cleanUpActiveItem(), k.a.cleanUpModel(this._playerModel), k.a.cleanUpModel(this._parachuteModel);
                for (var t = 0; t < this._damageSprites.length; t++) {
                    var e = this._damageSprites[t];
                    e.sprite.geometry.dispose(), e.sprite.material.map.dispose(), e.sprite.material.dispose()
                }
                this._nameSprite && (this._nameSprite.geometry.dispose(), this._nameSprite.material.map.dispose(), this._nameSprite.material.dispose())
            }, i.render = function (t, e) {
                this._walkingMiddlePause && this._walkAction.time >= .8 && (this._walkAction.paused = !0, this._walkingMiddlePause = !1), this._crouchingMiddlePause && this._crouchAction.time >= .8 && (this._crouchAction.paused = !0, this._crouchingMiddlePause = !1), 0 === this._fistPauseState && this._walkForwardFistAction.time >= 1 / 3 && (this._walkForwardFistAction.paused = !0, this._walkUpFistAction.paused = !0, this._walkDownFistAction.paused = !0, this._crouchForwardFistAction.paused = !0, this._crouchUpFistAction.paused = !0, this._crouchDownFistAction.paused = !0, this._fistPauseState = 1), this._mixer.update(t);
                var i = Date.now() - this._damageIndicatorStartTime, n = l.a.PLAYER_MODEL_HITMARK_VISIBLE_DURATION,
                    s = l.a.PLAYER_MODEL_HITMARK_FADE_DURATION;
                if (i > n) {
                    var r = 1 - Math.max(0, (n + s - i) / s);
                    this.setModelColor(1, r, r)
                }
                for (var a = 0; a < this._damageSprites.length; a++) {
                    var o = this._damageSprites[a];
                    o.sprite.position.set(o.sprite.position.x + 2 * o.dir.x * t, o.sprite.position.y + 3 * o.dir.y * t, o.sprite.position.z + 2 * o.dir.z * t), Date.now() - o.spawnTime > 800 && (this.object.remove(o.sprite), o.sprite.geometry.dispose(), o.sprite.material.map.dispose(), o.sprite.material.dispose(), this._damageSprites[a] = this._damageSprites[this._damageSprites.length - 1], this._damageSprites.pop(), --a)
                }
            }, i.shoot = function () {
                var t = this._activeItem,
                    e = this._controlState === Z.a.CROUCHING ? l.a.PLAYER_CROUCHING_EYE_POSITION : l.a.PLAYER_STANDING_EYE_POSITION,
                    i = Object(S.l)(this.object.position.x, this.object.position.y + e, this.object.position.z),
                    n = Object(X.a)(this._pitchYaw);
                n.y = -n.y;
                var s = Object(M.g)(n);
                Object(S.a)(i, Object(S.l)(1 * s.x, 1 * s.y, 1 * s.z));
                for (var r = 0; r < t.bulletsPerShot; r++) this.entitiesRenderer.sceneRenderer.bulletsRenderer.addBullet(i, s, 0);
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, t.gunShotSoundType, 0, 1, 200 * l.a.BLOCK_SIZE, 30 * l.a.BLOCK_SIZE, 10)
            }, i.reloadStart = function () {
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.GUN_RELOAD_START, 0, 1, 80 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 5)
            }, i.reloadFinish = function () {
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.GUN_RELOAD_FINISH, 0, 1, 80 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 5)
            }, i.addDamageSprite = function (t, e, i) {
                var n = dt(t.toString(), 64, e, i);
                n.material.depthTest = !1, n.position.set(0, 1, 0), this.object.add(n);
                var s = Object(S.l)(2 * Math.random() - 1, 2 * Math.random() + 1, 2 * Math.random() - 1);
                Object(S.j)(s), this._damageSprites.push({sprite: n, dir: s, spawnTime: Date.now()})
            }, i.onUpdateMetadata = function (t) {
                for (var e, i = Tt(t); !(e = i()).done;) {
                    var n = e.value;
                    switch (n.metadataType) {
                        case ft.CUSTOM_NAME:
                            this.name = n.value;
                            break;
                        case ft.PLAYER_TEAM:
                            this.team = n.value;
                            break;
                        case ft.ITEM_SKIN_TYPE:
                            this._itemSkinType = n.value;
                            break;
                        case ft.ITEM_SKIN_SEED:
                            this._itemSkinSeed = n.value;
                            break;
                        case ft.ITEM_TYPE:
                            this.setActiveItem(n.value);
                            break;
                        case ft.PLAYER_STATUS:
                            var s = n.value;
                            this.controlState = 7 & s, this._onGround = (8 & s) > 0;
                            break;
                        case ft.IS_ALIVE:
                            var r = n.value;
                            this.object.visible = r, this._isAlive = r
                    }
                }
            }, i.onEntityAction = function (t) {
                switch (t) {
                    case Et.SHOOT:
                        this.shoot();
                        break;
                    case Et.RELOAD_START:
                        this.reloadStart();
                        break;
                    case Et.RELOAD_FINISH:
                        this.reloadFinish();
                        break;
                    case Et.ATTACK:
                        this._activeItem.id === ct.a.EMPTY && this._walkForwardFistAction.paused && (1 === this._fistPauseState ? this._fistPauseState = 2 : 2 === this._fistPauseState && (this._walkForwardFistAction.reset(), this._walkUpFistAction.reset(), this._walkDownFistAction.reset(), this._crouchForwardFistAction.reset(), this._crouchUpFistAction.reset(), this._crouchDownFistAction.reset(), this._fistPauseState = 0), this._walkForwardFistAction.paused = !1, this._walkUpFistAction.paused = !1, this._walkDownFistAction.paused = !1, this._crouchForwardFistAction.paused = !1, this._crouchUpFistAction.paused = !1, this._crouchDownFistAction.paused = !1)
                }
            }, i.updateLookPose = function () {
                this._walkForwardAction.setEffectiveWeight(0), this._walkDownAction.setEffectiveWeight(0), this._walkUpAction.setEffectiveWeight(0), this._crouchForwardAction.setEffectiveWeight(0), this._crouchDownAction.setEffectiveWeight(0), this._crouchUpAction.setEffectiveWeight(0), this._walkForwardBlockAction.setEffectiveWeight(0), this._walkDownBlockAction.setEffectiveWeight(0), this._walkUpBlockAction.setEffectiveWeight(0), this._crouchForwardBlockAction.setEffectiveWeight(0), this._crouchDownBlockAction.setEffectiveWeight(0), this._crouchUpBlockAction.setEffectiveWeight(0), this._walkForwardFistAction.setEffectiveWeight(0), this._walkUpFistAction.setEffectiveWeight(0), this._walkDownFistAction.setEffectiveWeight(0), this._crouchForwardFistAction.setEffectiveWeight(0), this._crouchUpFistAction.setEffectiveWeight(0), this._crouchDownFistAction.setEffectiveWeight(0);
                var t = this._walkForwardAction, e = this._walkUpAction, i = this._walkDownAction,
                    n = this._crouchForwardAction, s = this._crouchUpAction, r = this._crouchDownAction;
                if (Object(nt.e)(this._activeItem.id) || Object(nt.g)(this._activeItem.id) ? (t = this._walkForwardBlockAction, e = this._walkUpBlockAction, i = this._walkDownBlockAction, n = this._crouchForwardBlockAction, s = this._crouchUpBlockAction, r = this._crouchDownBlockAction) : this._activeItem.id === ct.a.EMPTY && (t = this._walkForwardFistAction, e = this._walkUpFistAction, i = this._walkDownFistAction, n = this._crouchForwardFistAction, s = this._crouchUpFistAction, r = this._crouchDownFistAction), void 0 !== this._activeItemModel && (this._controlState === Z.a.FREE_FALLING || this._controlState === Z.a.GLIDING ? this._activeItemModel.visible = !1 : this._activeItemModel.visible = !0), this._controlState === Z.a.FREE_FALLING) {
                    var a = Math.abs(Math.min(this._pitchYaw.x / (Math.PI / 2), 0));
                    this._freeFallingUpAction.setEffectiveWeight(1 - a), this._freeFallingDownAction.setEffectiveWeight(a)
                } else if (this._controlState === Z.a.WALKING || this._controlState === Z.a.RUNNING || this._controlState === Z.a.CROUCHING || this._controlState === Z.a.NOCLIP) {
                    var o = Math.abs(this._pitchYaw.x / (Math.PI / 2));
                    this._pitchYaw.x <= 0 ? this._controlState === Z.a.CROUCHING ? (n.setEffectiveWeight(1 - o), r.setEffectiveWeight(o), s.setEffectiveWeight(0)) : (t.setEffectiveWeight(1 - o), i.setEffectiveWeight(o), e.setEffectiveWeight(0)) : this._controlState === Z.a.CROUCHING ? (n.setEffectiveWeight(1 - o), r.setEffectiveWeight(0), s.setEffectiveWeight(o)) : (t.setEffectiveWeight(1 - o), i.setEffectiveWeight(0), e.setEffectiveWeight(o))
                }
            }, i.getRightHand = function () {
                return this._playerModel.getObjectByName("Bone_Right_Hand")
            }, i.setActiveItem = function () {
                var t = o()(r.a.mark((function t(e) {
                    var i, n;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return (i = Object(nt.c)(e)).setSkin(this._itemSkinType, this._itemSkinSeed), t.next = 4, i.generateThirdPersonModel(!1);
                            case 4:
                                n = t.sent, k.a.removeFog(n), this.cleanUpActiveItem(), this._activeItem = i, this._activeItemModel = n, this.getRightHand().add(n), this.updateLookPose();
                            case 11:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));
                return function (e) {
                    return t.apply(this, arguments)
                }
            }(), i.onEntityDamage = function (t, e, i) {
                this._damageIndicatorStartTime = Date.now(), this.setModelColor(1, 0, 0), t > 0 && this.addDamageSprite(t, "#ffb900", i ? 2 : 1), e > 0 && this.addDamageSprite(e, "white", i ? 2 : 1)
            }, i.setModelColor = function (t, e, i) {
                for (var n = 0; n < this._playerModelMaterials.length; n++) this._playerModelMaterials[n].color.r = t, this._playerModelMaterials[n].color.g = e, this._playerModelMaterials[n].color.b = i
            }, _()(e, [{
                key: "position", set: function (t) {
                    this.modelPos = t, this.object.updateMatrix(), this._playerModel.updateMatrix(), this._parachuteModel.updateMatrix()
                }
            }, {
                key: "pitchYaw", set: function (t) {
                    this.modelPitch = t.x, this.modelYaw = -t.y, this.object.updateMatrix(), this._playerModel.updateMatrix(), this._parachuteModel.updateMatrix()
                }
            }, {
                key: "modelPos", set: function (t) {
                    var e = Object(S.l)(this.object.position.x, this.object.position.y, this.object.position.z);
                    this.firstSetPos && (e = t, this.firstSetPos = !1), this.object.position.set(t.x, t.y, t.z), (t.x - e.x) * (t.x - e.x) + (t.z - e.z) * (t.z - e.z) >= 1e-4 ? (this._crouchAction.paused && (this._crouchAction.paused = !1), this._crouchAction.setLoop(h.R, 1 / 0), this._walkAction.paused && (this._walkAction.paused = !1), this._walkAction.setLoop(h.R, 1 / 0)) : (this._crouchAction.time < .8 ? this._crouchingMiddlePause = !0 : (this._crouchAction.setLoop(h.Q, 1), this._crouchAction.clampWhenFinished = !0), this._walkAction.time < .8 ? this._walkingMiddlePause = !0 : (this._walkAction.setLoop(h.Q, 1), this._walkAction.clampWhenFinished = !0))
                }
            }, {
                key: "controlState", set: function (t) {
                    t === Z.a.CROUCHING && this._controlState !== Z.a.CROUCHING ? (this._freeFallingDownAction.stop(), this._freeFallingUpAction.stop(), this._glideAction.stop(), this._walkAction.stop(), this._crouchAction.reset(), this._crouchAction.play(), this._crouchAction.paused = !0, this._parachuteModel.visible = !1) : t !== Z.a.WALKING && t !== Z.a.RUNNING && t !== Z.a.NOCLIP || this._controlState === Z.a.WALKING || this._controlState === Z.a.RUNNING || this._controlState === Z.a.NOCLIP ? t === Z.a.FREE_FALLING && this._controlState !== Z.a.FREE_FALLING ? (this._walkAction.stop(), this._crouchAction.stop(), this._glideAction.stop(), this._freeFallingUpAction.play(), this._freeFallingDownAction.play(), this._parachuteModel.visible = !1) : t === Z.a.GLIDING && this._controlState !== Z.a.GLIDING && (this._walkAction.stop(), this._crouchAction.stop(), this._freeFallingUpAction.stop(), this._freeFallingDownAction.stop(), this._glideAction.play(), this._parachuteModel.visible = !0) : (this._freeFallingDownAction.stop(), this._freeFallingUpAction.stop(), this._glideAction.stop(), this._crouchAction.stop(), this._walkAction.reset(), this._walkAction.play(), this._walkAction.paused = !0, this._parachuteModel.visible = !1), this._controlState = t, this.updateLookPose()
                }, get: function () {
                    return this._controlState
                }
            }, {
                key: "modelYaw", set: function (t) {
                    this._pitchYaw.y = t, this._playerModel.rotation.y = t, this._parachuteModel.rotation.y = -t
                }
            }, {
                key: "modelPitch", set: function (t) {
                    this._pitchYaw.x = t, this.updateLookPose()
                }
            }, {
                key: "name", get: function () {
                    return this._name
                }, set: function (t) {
                    this._name = t, this._nameSprite && (this.object.remove(this._nameSprite), this._nameSprite.geometry.dispose(), this._nameSprite.material.map.dispose(), this._nameSprite.material.dispose(), this._nameSprite = void 0), this._nameSprite = dt(this._name, 64, "white", .8), this._nameSprite.position.set(0, 1.5, 0), this.object.add(this._nameSprite)
                }
            }, {
                key: "team", get: function () {
                    return this._team
                }, set: function (t) {
                    this._team = t, this._playerModel.traverse((function (e) {
                        e.material && (e.material.map.dispose(), t === kt.a.GREEN ? e.material.map = k.a.soldierGreenTexture : t === kt.a.RED ? e.material.map = k.a.soldierRedTexture : t === kt.a.BLUE && (e.material.map = k.a.soldierBlueTexture))
                    }))
                }
            }, {
                key: "playSound", set: function (t) {
                    this._playSound = t
                }
            }, {
                key: "isAlive", get: function () {
                    return this._isAlive
                }
            }]), e
        }(pt), bt = i(127), xt = i(13), Pt = i(2), Mt = i(25), Nt = i(35), wt = i(102);

        function Lt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ut(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ut(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function Ut(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        !function (t) {
            t[t.ALIVE = 0] = "ALIVE", t[t.DEAD = 1] = "DEAD"
        }(Rt || (Rt = {}));
        var Dt = function () {
            function t(t, e, i, n, s) {
                var r = this;
                this._settings = t, this._canvasRenderer = e, this._sceneRenderer = i, this._statsRenderer = n, this._controlsRenderer = s, this._controls = void 0, this._keyboardManager = void 0, this._lastInputState = void 0, this._inputStates = void 0, this._prevPlayerState = void 0, this._playerState = void 0, this._pendingBlockEdits = void 0, this._playerMode = void 0, this._deathTime = void 0, this._deathStartDirection = void 0, this._deathTargetDirection = void 0, this._didClickSlot = void 0, this._inventoryStatusChanged = void 0, this._clickedSlotIdx = void 0, this._clickedSlotMouseCode = void 0, this._inventoryStatus = void 0, this._didTryToCraft = void 0, this._recipeType = void 0, this._lastConfirmedPlayerState = void 0, this._playerSoundState = void 0, this._initialInventoryUpdate = void 0, this._thirdPersonRenderer = void 0, this._prevPos = void 0, this._raycastItemCounter = void 0, this._lastRaycastItemId = void 0, this._lastRacyastItemCount = void 0, this.onInputVerificationReceived = function (t, e, i, n, s, a, o, h, c, _, l, u, d, p, v, S, y, g) {
                    for (var m = -1, f = 0; f < r._inputStates.length; f++) if (r._inputStates[f].seqId >= c.seqId) {
                        m = f;
                        break
                    }
                    -1 === m ? r._inputStates = [] : r._inputStates.splice(0, m - 1), r._lastConfirmedPlayerState.physicsStep.onGround = c.onGround, r._lastConfirmedPlayerState.physicsStep.canJump = c.canJump, r._lastConfirmedPlayerState.physicsStep.controlState = c.controlState, r._lastConfirmedPlayerState.physicsStep.seqId = c.seqId, t && (r._lastConfirmedPlayerState.physicsStep.pos = c.pos), e && (r._lastConfirmedPlayerState.physicsStep.vel = c.vel), i && (r._lastConfirmedPlayerState.physicsStep.eyeHeight = c.eyeHeight), n && (r._lastConfirmedPlayerState.physicsStep.aimSpread = c.aimSpread), s && r._lastConfirmedPlayerState.inventory.select(_, !1), o && (r._lastConfirmedPlayerState.buildMode = y), h && (r._lastConfirmedPlayerState.inventoryStatus = g, g === at.a.WOODEN_CHEST ? r._lastConfirmedPlayerState.inventory.resize(4) : g === at.a.IRON_CHEST ? r._lastConfirmedPlayerState.inventory.resize(8) : g === at.a.GOLD_CHEST ? r._lastConfirmedPlayerState.inventory.resize(12) : r._lastConfirmedPlayerState.inventory.resize(0));
                    for (var k, E = !0, O = Lt(l.entries()); !(k = O()).done;) {
                        var I = k.value, T = I[0], A = I[1];
                        r._initialInventoryUpdate && (r._initialInventoryUpdate = !1, E = !1), -2 === T ? r._lastConfirmedPlayerState.inventory.setCursorItem(A) : r._lastConfirmedPlayerState.inventory.setItemAtIndex(T, A, !1)
                    }
                    for (var R, C = Lt(u.entries()); !(R = C()).done;) {
                        var b = R.value, x = b[0], P = b[1];
                        r._lastConfirmedPlayerState.cooldownManager.cooldowns.set(x, P)
                    }
                    a && (r._lastConfirmedPlayerState.maxHealth = d, r._lastConfirmedPlayerState.health = p, r._lastConfirmedPlayerState.maxShield = v, r._lastConfirmedPlayerState.shield = S);
                    for (var M = r._lastConfirmedPlayerState.clone(), N = 1; N < r._inputStates.length; N++) {
                        var w = r._inputStates[N - 1], L = r._inputStates[N];
                        r.updatePlayerState(M, w, L, !1)
                    }
                    r._prevPlayerState = r._playerState.clone(), r._playerState = M, r.updateGUIView(r._prevPlayerState, r._playerState, E)
                }, this.clearPendingBlockEdit = function (t, e, i) {
                    for (var n = 0; n < r._pendingBlockEdits.length; n++) {
                        var s = r._pendingBlockEdits[n];
                        if (s.x === t && s.y === e && s.z === i) {
                            for (var a = 0; a < s.timeoutIds.length; a++) clearTimeout(s.timeoutIds[a]);
                            r._pendingBlockEdits.splice(n, 1);
                            break
                        }
                    }
                }, this.onSetBlock = function (t, e, i, n) {
                    r.clearPendingBlockEdit(t, e, i), r._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, n, !0)
                }, this.onFloatingBlocksBreak = function (t, e) {
                    for (var i = {}, n = 0; n < e.length; n++) {
                        var s = b(e[n].x, e[n].y, e[n].z);
                        i[s] = r._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(e[n].x, e[n].y, e[n].z), r.clearPendingBlockEdit(e[n].x, e[n].y, e[n].z), r._sceneRenderer.terrainRenderer.setBlockAt(e[n].x, e[n].y, e[n].z, R.a.AIR, !1), r._sceneRenderer.terrainRenderer.cracksRenderer.removeBlockBreakProgressByKey(s)
                    }
                    r._sceneRenderer.terrainRenderer.chunkGenWorkerPool.queueBlocksGeneration(t, i)
                }, this.onRespawn = function (t, e, i) {
                    t === Object(y.a)() && r._playerMode === Rt.DEAD && (r._playerMode = Rt.ALIVE, r._controlsRenderer.showHands(), r._controlsRenderer.showCrosshair(), r.setupPhysics(e, i))
                }, this.onCanvasClick = function (t) {
                    Object(y.c)() === xt.a.CONNECTED && r._controls.lock()
                }, this.onGameFocus = function (t) {
                    d.a.emit(p.a.GAME_FOCUS)
                }, this.onGameUnfocus = function (t) {
                    d.a.emit(p.a.GAME_UNFOCUS)
                }, this.onInventorySlotClick = function (t, e) {
                    r._didClickSlot = !0, r._clickedSlotIdx = t, r._clickedSlotMouseCode = e, r._keyboardManager.isGameKeyDownBypassPause(r._settings.keys[Pt.b.INVENTORY_HELPER_KEY]) && (r._clickedSlotMouseCode = V.a.SHIFT_CLICK)
                }, this.onRequestInventoryStatusUpdate = function (t) {
                    r._inventoryStatusChanged = !0, r._inventoryStatus = t
                }, this.onInventoryCraft = function (t) {
                    r._didTryToCraft = !0, r._recipeType = t, r._clickedSlotMouseCode = V.a.LEFT, r._keyboardManager.isGameKeyDownBypassPause(r._settings.keys[Pt.b.INVENTORY_HELPER_KEY]) && (r._clickedSlotMouseCode = V.a.SHIFT_CLICK)
                }, this.onRequestRespawn = function () {
                    r._controls.lock()
                }, this.onRequestFocus = function () {
                    Object(y.c)() !== xt.a.CONNECTED || r._controls.isLocked || r._controls.lock()
                }, this.onRequestUnfocus = function () {
                    r._controls.unlock()
                }, this.onGameLeave = function () {
                    r._controls.unlock()
                }, this.onClientDamageReceived = function (t, e) {
                    e && r.kill(t)
                }, this.voxelRaycast = function (t, e, i) {
                    var n = [], s = [];
                    return Q()(r.isVoxelOpaque, [t.x, t.y, t.z], [e.x, e.y, e.z], i, n, s) === R.a.AIR ? {
                        hit: !1,
                        position: Object(S.l)(0, 0, 0),
                        normal: Object(S.l)(0, 0, 0)
                    } : {hit: !0, position: Object(S.l)(n[0], n[1], n[2]), normal: Object(S.l)(s[0], s[1], s[2])}
                }, this.getVoxel = function (t, e, i) {
                    return r._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t, e, i)
                }, this.isVoxelOpaque = function (t, e, i) {
                    // #GlitchyJump
                    return window.jumpyGlitch ? false : F.a[r.getVoxel(t, e, i)].opaque
                }, this.render = function (t, e) {
                    if (r._playerMode === Rt.ALIVE) {
                        if (Object(y.c)() === xt.a.ENDED) return;
                        r._playerState.inventory.getSelected().item.onItemHoldingRender(t, r), r._controls.render(t, e);
                        var i = e / l.a.PHYSICS_TIME_STEP;
                        if (r._playerState.physicsStep.controlState === Z.a.FREE_FALLING || r._playerState.physicsStep.controlState === Z.a.GLIDING) {
                            var n, s = r.getPitchYaw(),
                                a = Object(M.c)(r._prevPos.x, r._playerState.physicsStep.pos.x, i),
                                o = Object(M.c)(r._prevPos.y, r._playerState.physicsStep.pos.y, i),
                                c = Object(M.c)(r._prevPos.z, r._playerState.physicsStep.pos.z, i);
                            r._thirdPersonRenderer.position = Object(S.l)(a, o, c), r._thirdPersonRenderer.pitchYaw = s, null == (n = r._thirdPersonRenderer) || n.render(t, e)
                        } else {
                            var _ = Object(M.c)(r._prevPos.x, r._playerState.physicsStep.pos.x, i),
                                u = Object(M.c)(r._prevPos.y + r._prevPlayerState.physicsStep.eyeHeight, r._playerState.physicsStep.pos.y + r._playerState.physicsStep.eyeHeight, i),
                                d = Object(M.c)(r._prevPos.z, r._playerState.physicsStep.pos.z, i);
                            r._controls.getObject().position.set(_, u, d)
                        }
                    } else if (r._playerMode === Rt.DEAD && Date.now() - r._deathTime <= 1e3) {
                        var p = Math.max(0, Math.min(1, (Date.now() - r._deathTime) / 1e3));
                        h.qb.slerp(r._deathStartDirection, r._deathTargetDirection, r._canvasRenderer.camera.quaternion, p)
                    }
                }, this._controls = new rt(this._settings, this._canvasRenderer.camera, this._canvasRenderer.canvas, this), this._prevPos = Object(S.l)(0, 0, 0), this._pendingBlockEdits = [], this._playerMode = Rt.ALIVE, this._didClickSlot = !1, this._inventoryStatusChanged = !1, this._clickedSlotIdx = 0, this._clickedSlotMouseCode = V.a.WHEEL, this._inventoryStatus = at.a.CLOSED, this._didTryToCraft = !1, this._recipeType = bt.a.WOOD, this._deathTime = 0, this._deathStartDirection = new h.qb, this._deathTargetDirection = new h.qb, this._raycastItemCounter = 0, this._lastRaycastItemId = -1, this._lastRacyastItemCount = 0
            }

            var e = t.prototype;
            return e.cleanUp = function () {
                this.unbindEvents(), this._controls.dispose(), this._keyboardManager.cleanUp()
            }, e.initialize = function (t, e, i) {
                this._keyboardManager = new $, this.setupPhysics(e, i), this._controls.lock(), this.bindEvents()
            }, e.kill = function (t) {
                window.gtag && gtag("event", "kill", {event_category: "game_view"}), this._playerMode = Rt.DEAD, this._controls.reset(), this._controlsRenderer.hideHands(), this._controlsRenderer.hideCrosshair(), d.a.emit(p.a.CLIENT_PLAYER_DEATH), d.a.emit(p.a.INVENTORY_STATUS_UPDATE, at.a.CLOSED), this._playerState.inventory.getSelected().item.onInactive(this._playerState, this, !0);
                var e = Object(S.b)(t);
                Object(S.k)(e, this._canvasRenderer.camera.position), Object(S.j)(e), this._deathTime = Date.now(), this._deathStartDirection.copy(this._canvasRenderer.camera.quaternion), this._deathTargetDirection.setFromUnitVectors(new h.Ob(0, 0, -1), new h.Ob(e.x, e.y, e.z)), this._controls.unlock()
            }, e.bindEvents = function () {
                d.a.on(p.a.INPUT_VERIFICATION_RECEIVED, this.onInputVerificationReceived), d.a.on(p.a.SET_BLOCK, this.onSetBlock), d.a.on(p.a.FLOATING_BLOCKS_BREAK, this.onFloatingBlocksBreak), d.a.on(p.a.RESPAWN, this.onRespawn), d.a.on(p.a.INVENTORY_SLOT_CLICK, this.onInventorySlotClick), d.a.on(p.a.REQUEST_INVENTORY_STATUS_UPDATE, this.onRequestInventoryStatusUpdate), d.a.on(p.a.INVENTORY_CRAFT, this.onInventoryCraft), d.a.on(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived), d.a.on(p.a.GAME_LEAVE, this.onGameLeave), d.a.on(p.a.REQUEST_FOCUS, this.onRequestFocus), d.a.on(p.a.REQUEST_UNFOCUS, this.onRequestUnfocus), d.a.on(p.a.REQUEST_RESPAWN, this.onRequestRespawn), this.canvasRenderer.canvas.addEventListener("click", this.onCanvasClick, !1), this._controls.addEventListener("lock", this.onGameFocus), this._controls.addEventListener("unlock", this.onGameUnfocus)
            }, e.unbindEvents = function () {
                d.a.off(p.a.INPUT_VERIFICATION_RECEIVED, this.onInputVerificationReceived), d.a.off(p.a.SET_BLOCK, this.onSetBlock), d.a.off(p.a.FLOATING_BLOCKS_BREAK, this.onFloatingBlocksBreak), d.a.off(p.a.RESPAWN, this.onRespawn), d.a.off(p.a.INVENTORY_SLOT_CLICK, this.onInventorySlotClick), d.a.off(p.a.REQUEST_INVENTORY_STATUS_UPDATE, this.onRequestInventoryStatusUpdate), d.a.off(p.a.INVENTORY_CRAFT, this.onInventoryCraft), d.a.off(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived), d.a.off(p.a.GAME_LEAVE, this.onGameLeave), d.a.off(p.a.REQUEST_FOCUS, this.onRequestFocus), d.a.off(p.a.REQUEST_UNFOCUS, this.onRequestUnfocus), d.a.off(p.a.REQUEST_RESPAWN, this.onRequestRespawn), this.canvasRenderer.canvas.removeEventListener("click", this.onCanvasClick, !1), this._controls.removeEventListener("lock", this.onGameFocus), this._controls.removeEventListener("unlock", this.onGameUnfocus)
            }, e.setupPhysics = function (t, e) {
                this._inputStates = [], this._lastInputState = {
                    selectedIndexChanged: !1,
                    didClickSlot: !1,
                    inventoryStatusChanged: !1,
                    didTryToCraft: !1,
                    moveLeft: !1,
                    moveRight: !1,
                    moveForward: !1,
                    moveBackward: !1,
                    jump: !1,
                    primaryAction: !1,
                    secondaryAction: !1,
                    crouch: !1,
                    run: !1,
                    reload: !1,
                    drop: !1,
                    spray: !1,
                    selectedIdx: 0,
                    clickedSlotIdx: 0,
                    clickedSlotMouseCode: V.a.WHEEL,
                    recipeType: bt.a.WOOD,
                    inventoryStatus: at.a.CLOSED,
                    pitchYaw: Object(X.e)(0, 0),
                    seqId: -1,
                    tick: 0
                }, this._inputStates.push(this._lastInputState);
                var i = this._lastConfirmedPlayerState;
                this._lastConfirmedPlayerState = new ht.b(this), this._lastConfirmedPlayerState.physicsStep.pos = t, this._prevPos = t, this._prevPlayerState = new ht.b(this), this._prevPlayerState.physicsStep.pos = t, this._playerState = new ht.b(this), this._playerState.physicsStep.pos = t, void 0 !== i && (this._lastConfirmedPlayerState.maxHealth = i.maxHealth, this._lastConfirmedPlayerState.health = i.health, this._lastConfirmedPlayerState.maxShield = i.maxShield, this._lastConfirmedPlayerState.shield = i.shield, this._lastConfirmedPlayerState.buildMode = i.buildMode, this._prevPlayerState.maxHealth = i.maxHealth, this._prevPlayerState.health = i.health, this._prevPlayerState.maxShield = i.maxShield, this._prevPlayerState.shield = i.shield, this._prevPlayerState.inventory = i.inventory, this._prevPlayerState.buildMode = i.buildMode, this._playerState.maxHealth = i.maxHealth, this._playerState.health = i.health, this._playerState.maxShield = i.maxShield, this._playerState.shield = i.shield, this._playerState.buildMode = i.buildMode, this.updateGUIView(this._prevPlayerState, this._playerState, !1)), this._playerSoundState = new lt, this._initialInventoryUpdate = !0, this._controls.getBase().set(e.x, e.y, 0), this._canvasRenderer.camera.rotation.set(e.x, e.y, 0)
            }, e.updatePhysics = function (t) {
                if (this._playerMode === Rt.ALIVE) {
                    var e = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.MOVE_LEFT]),
                        i = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.MOVE_RIGHT]),
                        n = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.MOVE_FORWARD]),
                        s = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.MOVE_BACKWARD]),
                        r = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.JUMP]),
                        a = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.PRIMARY_ACTION]),
                        o = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SECONDARY_ACTION]) || this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SECONDARY_ACTION_2]),
                        h = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.CROUCH]),
                        c = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SPRINT]),
                        _ = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.RELOAD]),
                        l = this._keyboardManager.isGameKeyPressed(this._settings.keys[Pt.b.DROP_CURRENT_ITEM]),
                        u = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SELECT_SLOT_1]),
                        v = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SELECT_SLOT_2]),
                        S = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SELECT_SLOT_3]),
                        y = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SELECT_SLOT_4]),
                        g = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SELECT_SLOT_5]),
                        m = this._keyboardManager.isGameKeyDown(this._settings.keys[Pt.b.SPRAY]);
                    this._keyboardManager.isGameKeyPressed(this._settings.keys[Pt.b.INTERACT]) && (this._lastRaycastItemId >= 0 ? d.a.emit(p.a.ITEM_PICKUP_REQUEST, this._lastRaycastItemId) : -2 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.WORK_STATION) : -3 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.LOADOUT_STATION) : -4 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.WOODEN_CHEST) : -5 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.IRON_CHEST) : -6 === this._lastRaycastItemId && this.onRequestInventoryStatusUpdate(at.a.GOLD_CHEST));
                    var f = this.getPitchYaw(), k = f.x, E = f.y;
                    this._prevPlayerState = this._playerState.clone(), this._prevPos = this._prevPlayerState.physicsStep.pos;
                    var O = this.getInventory().getSelectedIndex(), I = this._keyboardManager.hasGameScrolledUp(),
                        T = this._keyboardManager.hasGameScrolledDown(), A = this._settings.invertMouseWheel ? I : T;
                    (this._settings.invertMouseWheel ? T : I) ? this.getInventory().selectPrev(!0) : A ? this.getInventory().selectNext(!0) : u ? this.getInventory().select(0, !0) : v ? this.getInventory().select(1, !0) : S ? this.getInventory().select(2, !0) : y ? this.getInventory().select(3, !0) : g && this.getInventory().select(4, !0);
                    var R = O !== this.getInventory().getSelectedIndex(), C = this._playerState.physicsStep.seqId, b = {
                        selectedIndexChanged: R,
                        didClickSlot: this._didClickSlot,
                        inventoryStatusChanged: this._inventoryStatusChanged,
                        didTryToCraft: this._didTryToCraft,
                        moveLeft: e,
                        moveRight: i,
                        moveForward: n,
                        moveBackward: s,
                        jump: r,
                        primaryAction: a,
                        secondaryAction: o,
                        crouch: h,
                        run: c,
                        reload: _,
                        drop: l,
                        spray: m,
                        pitchYaw: Object(X.e)(k, E),
                        seqId: C,
                        selectedIdx: this.getInventory().getSelectedIndex(),
                        clickedSlotIdx: this._clickedSlotIdx,
                        clickedSlotMouseCode: this._clickedSlotMouseCode,
                        recipeType: this._recipeType,
                        inventoryStatus: this._inventoryStatus,
                        tick: this._sceneRenderer.entitiesRenderer.getInterpolatedWorldTick()
                    };
                    this._didClickSlot = !1, this._inventoryStatusChanged = !1, this._didTryToCraft = !1;
                    var x = this._lastInputState;
                    this._lastInputState = b, this._inputStates.push(b), d.a.emit(p.a.INPUT_RECEIVED, b), this.updatePlayerState(this._playerState, x, b, !0), this.updateGUIView(this._prevPlayerState, this._playerState, !0), this.updateDebugInfo()
                }
            }, e.updatePlayerState = function (t, e, i, n) {
                var s = l.a.PHYSICS_TIME_STEP, r = t.physicsStep.controlState;
                i.selectedIndexChanged && t.inventory.select(i.selectedIdx, n), t.physicsStep = Object(J.g)(i, this.getVoxel, this.isVoxelOpaque, this.voxelRaycast, s, t), i.inventoryStatusChanged && (t.inventoryStatus = i.inventoryStatus, i.inventoryStatus === at.a.WOODEN_CHEST ? t.inventory.resize(4) : i.inventoryStatus === at.a.IRON_CHEST ? t.inventory.resize(8) : i.inventoryStatus === at.a.GOLD_CHEST ? t.inventory.resize(12) : t.inventory.resize(0)), i.didClickSlot ? t.inventory.onSlotClick(i.clickedSlotIdx, i.clickedSlotMouseCode, n) : i.didTryToCraft && t.inventory.onRecipeCraft(i.recipeType, i.clickedSlotMouseCode), r === Z.a.RUNNING && t.physicsStep.controlState !== Z.a.RUNNING && t.cooldownManager.setCooldown(ot.a.SPRINT_STOP_ITEM_USE_GRACE), t.inventory.getSelected().item.canInput(t) && (t.inventory.getSelected().item.onInput(t, this, e, i, n), t.inventory.useSelected(n)), t.physicsStep.aimSpread = Object(J.f)(this, i, t), t.inventory.getSelected().item.onItemHoldingUpdate(s, t, this, n), t.inventory.useSelected(n), i.drop && t.cooldownManager.requestCooldown(ot.a.DROP_ITEM) && t.inventory.dropActiveItem(n), n && ut(t.physicsStep.pos, t.physicsStep.controlState, t.physicsStep.onGround, this._playerSoundState, this._sceneRenderer.terrainRenderer.chunkStorageManager, this._controlsRenderer, !0)
            }, e.updateGUIView = function (t, e, i) {
                var n = new Map,
                    s = l.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + l.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT + l.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT;
                if (t.inventory.getItems().length !== e.inventory.getItems().length) if (t.inventory.getItems().length < e.inventory.getItems().length) for (var r = t.inventory.getItems().length; r < e.inventory.getItems().length; r++) {
                    var a = e.inventory.getItems()[r];
                    n.set(r, a)
                } else for (var o = e.inventory.getItems().length; o < t.inventory.getItems().length; o++) n.set(o, new tt.a(Object(nt.c)(ct.a.EMPTY), 1)); else s = e.inventory.getItems().length;
                for (var h = 0; h < s; h++) {
                    var c = t.inventory.getItems()[h], _ = e.inventory.getItems()[h];
                    c.item.id === _.item.id && c.count === _.count && Object(nt.b)(c.item) === Object(nt.b)(_.item) || (n.set(h, _), i && _.item.id !== ct.a.EMPTY && (c.item.id !== _.item.id || c.count < _.count) && this.controlsRenderer.playSound(_t.a.ITEM_PICKUP))
                }
                if (t.inventory.getCursorItem().item.id === e.inventory.getCursorItem().item.id && t.inventory.getCursorItem().count === e.inventory.getCursorItem().count && Object(nt.b)(t.inventory.getCursorItem().item) === Object(nt.b)(e.inventory.getCursorItem().item) || (d.a.emit(p.a.INVENTORY_SET_CURSOR_ITEM, e.inventory.getCursorItem()), i && this.controlsRenderer.playSound(_t.a.ITEM_PICKUP)), t.inventory.getSelectedIndex() !== e.inventory.getSelectedIndex() && d.a.emit(p.a.INVENTORY_SELECT_ITEM, e.inventory.getSelectedIndex()), t.inventory.getSelected().item.id === e.inventory.getSelected().item.id && t.inventory.getSelectedIndex() === e.inventory.getSelectedIndex() || d.a.emit(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, e.inventory, e.inventory.getSelected()), n.size > 0 && (d.a.emit(p.a.INVENTORY_SET_ITEMS, n), Object(nt.f)(e.inventory.getSelected().item.id))) {
                    var u = e.inventory.getSelected().item;
                    d.a.emit(p.a.AMMO_UPDATE, u.currClipAmmo, e.inventory.countItem(u.ammoItemType))
                }
                t.inventoryStatus !== e.inventoryStatus && d.a.emit(p.a.INVENTORY_STATUS_UPDATE, e.inventoryStatus), t.maxHealth === e.maxHealth && t.health === e.health && t.maxShield === e.maxShield && t.shield === e.shield || d.a.emit(p.a.UPDATE_CLIENT_HEALTH_AND_SHIELD, e.maxHealth, e.health, e.maxShield, e.shield), t.physicsStep.controlState !== Z.a.FREE_FALLING && t.physicsStep.controlState !== Z.a.GLIDING || e.physicsStep.controlState === Z.a.FREE_FALLING || e.physicsStep.controlState === Z.a.GLIDING ? t.physicsStep.controlState === Z.a.FREE_FALLING || t.physicsStep.controlState === Z.a.GLIDING || e.physicsStep.controlState !== Z.a.FREE_FALLING && e.physicsStep.controlState !== Z.a.GLIDING || (this._controlsRenderer.hideHands(), this._controlsRenderer.hideCrosshair(), this._thirdPersonRenderer = new Ct(this._sceneRenderer.entitiesRenderer, Object(y.a)()), this._thirdPersonRenderer.team = this._controlsRenderer.team, this._sceneRenderer.scene.add(this._thirdPersonRenderer.object), this._controls.startThirdPersonCamera(this._thirdPersonRenderer.object, 10)) : (this._controlsRenderer.showHands(), this._controlsRenderer.showCrosshair(), this._controls.startFirstPersonCamera(this.getPitchYaw()), this._sceneRenderer.scene.remove(this._thirdPersonRenderer.object)), void 0 !== this._thirdPersonRenderer && (this._thirdPersonRenderer.controlState = e.physicsStep.controlState)
            }, e.getPlayerSelectedBlockSidePosition = function () {
                var t = this.camVoxelRaycast();
                if (t.hit) return this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x + .01 * t.normal.x, t.position.y + .01 * t.normal.y, t.position.z + .01 * t.normal.z)
            }, e.getPlayerSelectedBlockPosition = function () {
                var t = this.camVoxelRaycast();
                if (t.hit) return this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x - .01 * t.normal.x, t.position.y - .01 * t.normal.y, t.position.z - .01 * t.normal.z)
            }, e.camVoxelRaycast = function () {
                if (!this._lastInputState) return {
                    hit: !1,
                    position: Object(S.l)(0, 0, 0),
                    normal: Object(S.l)(0, 0, 0)
                };
                var t = Object(S.b)(this._playerState.physicsStep.pos);
                Object(S.a)(t, Object(S.l)(0, this._playerState.physicsStep.eyeHeight, 0)), Object(S.f)(t, l.a.BLOCK_SIZE);
                var e = this._lastInputState.pitchYaw.x, i = this._lastInputState.pitchYaw.y,
                    n = Object(M.g)(Object(X.e)(e, i));
                return this.voxelRaycast(t, n, l.a.BLOCK_EDIT_RADIUS)
            }, e.predictBlockEdit = function (t, e, i, n) {
                var s = this, r = this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t, e, i);
                this._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, n, !0);
                for (var a = setTimeout((function () {
                    for (var n = 0; n < s._pendingBlockEdits.length; n++) {
                        var r = s._pendingBlockEdits[n];
                        if (r.x === t && r.y === e && r.z === i) {
                            s._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, r.blockIds[r.blockIds.length - 1], !1), 0 === r.blockIds.length ? s._pendingBlockEdits.splice(n, 1) : (r.blockIds.pop(), r.timeoutIds.pop());
                            break
                        }
                    }
                }), 1e3 * l.a.BLOCK_EDIT_VERIFICATION_DELAY_IN_SECS), o = !1, h = 0; h < this._pendingBlockEdits.length; h++) {
                    var c = this._pendingBlockEdits[h];
                    if (c.x === t && c.y === e && c.z === i) {
                        this._pendingBlockEdits[h].blockIds.push(r), this._pendingBlockEdits[h].timeoutIds.push(a), o = !0;
                        break
                    }
                }
                o || this._pendingBlockEdits.push({x: t, y: e, z: i, blockIds: [r], timeoutIds: [a]})
            }, e.updateDebugInfo = function () {
                if (this._statsRenderer.visible) {
                    this._statsRenderer.playerPos = Object(S.l)(this._playerState.physicsStep.pos.x, this._playerState.physicsStep.pos.y, this._playerState.physicsStep.pos.z), this._statsRenderer.playerBlockPos = Object(S.l)(Math.floor(this._playerState.physicsStep.pos.x / l.a.BLOCK_SIZE), Math.floor(this._playerState.physicsStep.pos.y / l.a.BLOCK_SIZE), Math.floor(this._playerState.physicsStep.pos.z / l.a.BLOCK_SIZE)), this._statsRenderer.playerChunkPos = this._sceneRenderer.terrainRenderer.chunkStorageManager.getChunkPos(this._playerState.physicsStep.pos.x / l.a.BLOCK_SIZE, this._playerState.physicsStep.pos.y / l.a.BLOCK_SIZE, this._playerState.physicsStep.pos.z / l.a.BLOCK_SIZE), this._statsRenderer.playerVelocity = Object(S.l)(this._playerState.physicsStep.vel.x, this._playerState.physicsStep.vel.y, this._playerState.physicsStep.vel.z);
                    var t = this.getPitchYaw();
                    this._statsRenderer.playerPitch = t.x, this._statsRenderer.playerYaw = t.y
                }
            }, e.update = function (t) {
                this.updatePhysics(t), 2 == ++this._raycastItemCounter && (this._raycastItemCounter = 0, this.raycastItemPickups())
            }, e.raycastItemPickups = function () {
                for (var t, e = Object(S.l)(this._canvasRenderer.camera.position.x, this._canvasRenderer.camera.position.y, this._canvasRenderer.camera.position.z), i = this.getCameraDir(), n = 999999, s = void 0, r = Lt(this.sceneRenderer.entitiesRenderer.getEntities()); !(t = r()).done;) {
                    var a = t.value;
                    if (a.type === St.ITEM && -1 === a.itemPickupTarget) {
                        var o = Object(S.l)(a.object.position.x, a.object.position.y, a.object.position.z);
                        if (!(Object(S.e)(e, o) >= 16)) {
                            var h = Object(S.l)(o.x - e.x, o.y - e.y, o.z - e.z), c = Object(S.g)(h, i),
                                _ = Object(S.l)(e.x + i.x * c, e.y + i.y * c, e.z + i.z * c), u = Object(S.e)(o, _);
                            if (!(u > .09)) {
                                var v = c - Math.sqrt(.09 - u);
                                v <= n && (n = v, s = a)
                            }
                        }
                    }
                }
                var g = void 0 !== s && void 0 !== s.item, m = Object(S.b)(e);
                Object(S.f)(m, l.a.BLOCK_SIZE);
                var f = this.camVoxelRaycast(), k = R.a.AIR;
                if (!Object(y.m)() && f.hit) {
                    var E = this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(f.position.x - .01 * f.normal.x, f.position.y - .01 * f.normal.y, f.position.z - .01 * f.normal.z);
                    k = this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(E.x, E.y, E.z)
                }
                if (g && f.hit) {
                    var O = Object(S.b)(f.position);
                    Object(S.i)(O, l.a.BLOCK_SIZE), Object(S.e)(O, e) < n * n && (g = !1)
                }
                if (this._playerMode === Rt.DEAD) -1 !== this._lastRaycastItemId && (this._lastRaycastItemId = -1, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.EMPTY, Mt.a.COMMON, "", "", 1)); else if (g) {
                    if (s.id !== this._lastRaycastItemId || s.count !== this._lastRacyastItemCount) {
                        var I = this._playerState.inventory.hasSpaceForItemEvenPartially(s.item.id, s.count);
                        this._lastRaycastItemId = s.id, this._lastRacyastItemCount = s.count, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, s.item.getModelID(), s.item.itemTier, Object(wt.a)(s.item.skinType).tier, s.item.displayName, "Press " + Object(y.d)(Pt.b.INTERACT) + " to " + (I ? "pick up" : "swap"), s.count)
                    }
                } else k === R.a.WORK_STATION ? -2 !== this._lastRaycastItemId && (this._lastRaycastItemId = -2, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + R.a.WORK_STATION, Mt.a.COMMON, Nt.a.COMMON, "Work Station", "Press " + Object(y.d)(Pt.b.INTERACT) + " to use", 1)) : k === R.a.LOADOUT_STATION ? -3 !== this._lastRaycastItemId && (this._lastRaycastItemId = -3, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + R.a.LOADOUT_STATION, Mt.a.COMMON, Nt.a.COMMON, "Loadout Station", "Press " + Object(y.d)(Pt.b.INTERACT) + " to change loadouts", 1)) : k === R.a.WOODEN_CHEST ? -4 !== this._lastRaycastItemId && (this._lastRaycastItemId = -4, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + R.a.WOODEN_CHEST, Mt.a.COMMON, Nt.a.COMMON, "Wooden Chest", "Press " + Object(y.d)(Pt.b.INTERACT) + " to open", 1)) : k === R.a.IRON_CHEST ? -5 !== this._lastRaycastItemId && (this._lastRaycastItemId = -5, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + R.a.IRON_CHEST, Mt.a.COMMON, Nt.a.COMMON, "Iron Chest", "Press " + Object(y.d)(Pt.b.INTERACT) + " to open", 1)) : k === R.a.GOLDEN_CHEST ? -6 !== this._lastRaycastItemId && (this._lastRaycastItemId = -6, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + R.a.GOLDEN_CHEST, Mt.a.COMMON, Nt.a.COMMON, "Golden Chest", "Press " + Object(y.d)(Pt.b.INTERACT) + " to open", 1)) : -1 !== this._lastRaycastItemId && (this._lastRaycastItemId = -1, this._lastRacyastItemCount = 0, d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.EMPTY, Mt.a.COMMON, "", "", 1))
            }, e.isNearBlock = function (t, e) {
                for (var i = -e; i <= e; i++) for (var n = -e; n <= e; n++) for (var s = -e; s <= e; s++) {
                    var r = Object(S.b)(this._playerState.physicsStep.pos);
                    if (Object(S.f)(r, l.a.BLOCK_SIZE), Object(S.a)(r, Object(S.l)(i, n, s)), this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(r.x, r.y, r.z) === t) return !0
                }
                return !1
            }, e.getLastInput = function () {
                return this._lastInputState
            }, e.isMoving = function () {
                return this._lastInputState.moveBackward || this._lastInputState.moveForward || this._lastInputState.moveLeft || this._lastInputState.moveRight
            }, e.isOnGround = function () {
                return this._playerState.physicsStep.onGround
            }, e.getControlState = function () {
                return this._playerState.physicsStep.controlState
            }, e.isJumping = function () {
                return !this._playerState.physicsStep.canJump
            }, e.getPrevAimSpread = function () {
                return 6 * this._prevPlayerState.physicsStep.aimSpread
            }, e.getCurrAimSpread = function () {
                return 6 * this._playerState.physicsStep.aimSpread
            }, e.getPitchYaw = function () {
                var t = (new h.s).setFromQuaternion(this._canvasRenderer.camera.quaternion, "YXZ");
                return Object(X.e)(t.x, t.y)
            }, e.getBasePitchYaw = function () {
                var t = this._controls.getBase();
                return Object(X.e)(t.x, t.y)
            }, e.getCameraDir = function () {
                var t = this.getPitchYaw();
                return Object(M.g)(t)
            }, e.getInventory = function () {
                return this._playerState.inventory
            }, _()(t, [{
                key: "playerState", get: function () {
                    return this._playerState
                }
            }, {
                key: "physicsStep", get: function () {
                    return this._playerState.physicsStep
                }
            }, {
                key: "canvasRenderer", get: function () {
                    return this._canvasRenderer
                }
            }, {
                key: "sceneRenderer", get: function () {
                    return this._sceneRenderer
                }
            }, {
                key: "statsRenderer", get: function () {
                    return this._statsRenderer
                }
            }, {
                key: "controlsRenderer", get: function () {
                    return this._controlsRenderer
                }
            }, {
                key: "pointerLockControls", get: function () {
                    return this._controls
                }
            }]), t
        }(), Bt = i(161), Ft = i(139), zt = function (t, e, i, n) {
            var s = t.blocks[b(e, i, n)];
            return void 0 === s ? R.a.AIR : s
        }, jt = function (t, e, i, n) {
            return zt(t, e, i, n) !== R.a.AIR
        }, Kt = function (t, e, i, n) {
            return void 0 !== t.blocks[b(e, i, n)]
        };

        function Gt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ht(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ht(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function Ht(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var Wt = function () {
            function t(t) {
                var e = this;
                this._controlsRenderer = t, this._blockPlacementGuide = void 0, this._blockDestructionGuide = void 0, this._activeItem = void 0, this._buildMode = void 0, this._blockMaterial = void 0, this._redMaterial = void 0, this.onInventoryActiveSlotChange = function (t, i) {
                    if (void 0 !== e._activeItem) {
                        if (e._activeItem.id === i.item.id) return;
                        Object(nt.e)(e._activeItem.id) ? e.hideBlockPlacementGuide() : e._activeItem instanceof Ft.a && e.setBlockDestructionGuidePosition(void 0)
                    }
                    e._activeItem = i.item, Object(nt.e)(i.item.id) ? (e.showBlockPlacementGuide(i.item.id - ct.a.BLOCK), e.updateBlockPlacementGuidePosition()) : i.item instanceof Ft.a && e.updateBlockDestructionGuidePosition()
                };
                var i = new h.j(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE),
                    n = new h.Y({color: 16777215, transparent: !0, opacity: .1});
                this._blockDestructionGuide = new h.X(i, n), this._blockDestructionGuide.renderOrder = -1, this._blockDestructionGuide.scale.set(1.001, 1.001, 1.001), this.controlsRenderer.controls.sceneRenderer.scene.add(this._blockDestructionGuide), this._buildMode = ht.a.BLOCK, this._blockMaterial = new h.wb({
                    transparent: !0,
                    uniforms: {map: {value: k.a.blockTexture}},
                    vertexShader: "\n                attribute vec4 realUv;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vRealUv = realUv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 0.4);\n                    \n                    float tilePosX = max(0.05, min(0.95, fract(vRealUv.z)));\n                    float tilePosY = max(0.05, min(0.95, fract(vRealUv.w)));\n                    vec2 uv = vec2(vRealUv.x * (1.0 / 8.0) + tilePosX * (1.0 / 8.0), vRealUv.y * (1.0 / 8.0) + tilePosY * (1.0 / 8.0));\n    \n                    vec4 texelColor = texture2D(map, uv);\n                    texelColor = mapTexelToLinear(texelColor);\n                    diffuseColor *= texelColor.rgba;\n    \n                    gl_FragColor = diffuseColor;\n                }\n            ",
                    fog: !1
                }), this._redMaterial = new h.Y({color: 16711680, transparent: !0, opacity: .3}), this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange)
            }, e.render = function (t, e) {
                void 0 !== this._activeItem && (Object(nt.e)(this._activeItem.id) ? (this._buildMode !== this._controlsRenderer.controls.playerState.buildMode && (this._buildMode = this._controlsRenderer.controls.playerState.buildMode, this.showBlockPlacementGuide(this._activeItem.id - ct.a.BLOCK)), this.updateBlockPlacementGuidePosition()) : this._activeItem instanceof Ft.a && this.updateBlockDestructionGuidePosition())
            }, e.updateBlockDestructionGuidePosition = function () {
                var t = this.controlsRenderer.controls.getPlayerSelectedBlockPosition();
                this.setBlockDestructionGuidePosition(t)
            }, e.setBlockDestructionGuidePosition = function (t) {
                var e = this._activeItem;
                if (t && e.canBreak(this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t.x, t.y, t.z))) {
                    var i = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t.x, t.y, t.z);
                    this._blockDestructionGuide.position.set(i.x, i.y, i.z)
                } else this._blockDestructionGuide.position.set(0, -999, 0)
            }, e.showBlockPlacementGuide = function (t) {
                this.hideBlockPlacementGuide();
                var e = {origin: Object(S.l)(0, 0, 0), blocks: {}};
                if (this._buildMode === ht.a.BLOCK) e.blocks[b(0, 0, 0)] = t; else if (this._buildMode === ht.a.WALL) for (var i = -1; i <= 1; i++) for (var n = 0; n <= 2; n++) e.blocks[b(i, n, 0)] = t; else if (this._buildMode === ht.a.STAIRS) for (var s = -1; s <= 1; s++) e.blocks[b(s, 0, 0)] = t, e.blocks[b(s, 0, 1)] = t, e.blocks[b(s, 1, 1)] = t, e.blocks[b(s, 1, 2)] = t;
                var r = function (t) {
                    var e = [], i = [], n = [], s = [], r = [t.origin], a = new Set;
                    for (a.add(b(t.origin.x, t.origin.y, t.origin.z)); r.length > 0;) {
                        var o = r.pop(), h = o.x, c = o.y, _ = o.z, u = h - t.origin.x, d = c - t.origin.y,
                            p = _ - t.origin.z, v = jt(t, h, c, _), y = b(h, c + 1, _);
                        if (v && !jt(t, h, c + 1, _)) {
                            e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                            var g = Object(T.a)(jt(t, h + 1, c + 1, _), jt(t, h, c + 1, _ + 1), jt(t, h + 1, c + 1, _ + 1)),
                                m = Object(T.a)(jt(t, h, c + 1, _ + 1), jt(t, h - 1, c + 1, _), jt(t, h - 1, c + 1, _ + 1)),
                                f = Object(T.a)(jt(t, h - 1, c + 1, _), jt(t, h, c + 1, _ - 1), jt(t, h - 1, c + 1, _ - 1)),
                                k = Object(T.a)(jt(t, h, c + 1, _ - 1), jt(t, h + 1, c + 1, _), jt(t, h + 1, c + 1, _ - 1));
                            n.push(g), n.push(m), n.push(f), n.push(k), g + f < m + k ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var E = F.a[zt(t, h, c, _)].textures.top;
                            s.push(E.x, E.y, 0, 1), s.push(E.x, E.y, 1, 1), s.push(E.x, E.y, 1, 0), s.push(E.x, E.y, 0, 0)
                        } else Kt(t, h, c + 1, _) && !a.has(y) && (r.push(Object(S.l)(h, c + 1, _)), a.add(y));
                        var O = b(h, c - 1, _);
                        if (v && !jt(t, h, c - 1, _)) {
                            e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                            var I = Object(T.a)(jt(t, h + 1, c - 1, _), jt(t, h, c - 1, _ - 1), jt(t, h + 1, c - 1, _ - 1)),
                                A = Object(T.a)(jt(t, h, c - 1, _ - 1), jt(t, h - 1, c - 1, _), jt(t, h - 1, c - 1, _ - 1)),
                                R = Object(T.a)(jt(t, h - 1, c - 1, _), jt(t, h, c - 1, _ + 1), jt(t, h - 1, c - 1, _ + 1)),
                                C = Object(T.a)(jt(t, h, c - 1, _ + 1), jt(t, h + 1, c - 1, _), jt(t, h + 1, c - 1, _ + 1));
                            n.push(I), n.push(A), n.push(R), n.push(C), I + R < A + C ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var x = F.a[zt(t, h, c, _)].textures.bottom;
                            s.push(x.x, x.y, 0, 1), s.push(x.x, x.y, 1, 1), s.push(x.x, x.y, 1, 0), s.push(x.x, x.y, 0, 0)
                        } else Kt(t, h, c - 1, _) && !a.has(O) && (r.push(Object(S.l)(h, c - 1, _)), a.add(O));
                        var P = b(h + 1, c, _);
                        if (v && !jt(t, h + 1, c, _)) {
                            e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                            var M = Object(T.a)(jt(t, h + 1, c, _ + 1), jt(t, h + 1, c + 1, _), jt(t, h + 1, c + 1, _ + 1)),
                                N = Object(T.a)(jt(t, h + 1, c + 1, _), jt(t, h + 1, c, _ - 1), jt(t, h + 1, c + 1, _ - 1)),
                                w = Object(T.a)(jt(t, h + 1, c, _ - 1), jt(t, h + 1, c - 1, _), jt(t, h + 1, c - 1, _ - 1)),
                                L = Object(T.a)(jt(t, h + 1, c - 1, _), jt(t, h + 1, c, _ + 1), jt(t, h + 1, c - 1, _ + 1));
                            n.push(M), n.push(N), n.push(w), n.push(L), M + w < N + L ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var U = F.a[zt(t, h, c, _)].textures.left;
                            s.push(U.x, U.y, 0, 1), s.push(U.x, U.y, 1, 1), s.push(U.x, U.y, 1, 0), s.push(U.x, U.y, 0, 0)
                        } else Kt(t, h + 1, c, _) && !a.has(P) && (r.push(Object(S.l)(h + 1, c, _)), a.add(P));
                        var D = b(h - 1, c, _);
                        if (v && !jt(t, h - 1, c, _)) {
                            e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                            var B = Object(T.a)(jt(t, h - 1, c, _ - 1), jt(t, h - 1, c + 1, _), jt(t, h - 1, c + 1, _ - 1)),
                                z = Object(T.a)(jt(t, h - 1, c + 1, _), jt(t, h - 1, c, _ + 1), jt(t, h - 1, c + 1, _ + 1)),
                                j = Object(T.a)(jt(t, h - 1, c, _ + 1), jt(t, h - 1, c - 1, _), jt(t, h - 1, c - 1, _ + 1)),
                                K = Object(T.a)(jt(t, h - 1, c - 1, _), jt(t, h - 1, c, _ - 1), jt(t, h - 1, c - 1, _ - 1));
                            n.push(B), n.push(z), n.push(j), n.push(K), B + j < z + K ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var G = F.a[zt(t, h, c, _)].textures.right;
                            s.push(G.x, G.y, 0, 1), s.push(G.x, G.y, 1, 1), s.push(G.x, G.y, 1, 0), s.push(G.x, G.y, 0, 0)
                        } else Kt(t, h - 1, c, _) && !a.has(D) && (r.push(Object(S.l)(h - 1, c, _)), a.add(D));
                        var H = b(h, c, _ + 1);
                        if (v && !jt(t, h, c, _ + 1)) {
                            e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                            var W = Object(T.a)(jt(t, h - 1, c, _ + 1), jt(t, h, c + 1, _ + 1), jt(t, h - 1, c + 1, _ + 1)),
                                Y = Object(T.a)(jt(t, h, c + 1, _ + 1), jt(t, h + 1, c, _ + 1), jt(t, h + 1, c + 1, _ + 1)),
                                V = Object(T.a)(jt(t, h + 1, c, _ + 1), jt(t, h, c - 1, _ + 1), jt(t, h + 1, c - 1, _ + 1)),
                                Z = Object(T.a)(jt(t, h, c - 1, _ + 1), jt(t, h - 1, c, _ + 1), jt(t, h - 1, c - 1, _ + 1));
                            n.push(W), n.push(Y), n.push(V), n.push(Z), W + V < Y + Z ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var q = F.a[zt(t, h, c, _)].textures.front;
                            s.push(q.x, q.y, 0, 1), s.push(q.x, q.y, 1, 1), s.push(q.x, q.y, 1, 0), s.push(q.x, q.y, 0, 0)
                        } else Kt(t, h, c, _ + 1) && !a.has(H) && (r.push(Object(S.l)(h, c, _ + 1)), a.add(H));
                        var Q = b(h, c, _ - 1);
                        if (v && !jt(t, h, c, _ - 1)) {
                            e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE), e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                            var J = Object(T.a)(jt(t, h + 1, c, _ - 1), jt(t, h, c + 1, _ - 1), jt(t, h + 1, c + 1, _ - 1)),
                                X = Object(T.a)(jt(t, h, c + 1, _ - 1), jt(t, h - 1, c, _ - 1), jt(t, h - 1, c + 1, _ - 1)),
                                $ = Object(T.a)(jt(t, h - 1, c, _ - 1), jt(t, h, c - 1, _ - 1), jt(t, h - 1, c - 1, _ - 1)),
                                tt = Object(T.a)(jt(t, h, c - 1, _ - 1), jt(t, h + 1, c, _ - 1), jt(t, h + 1, c - 1, _ - 1));
                            n.push(J), n.push(X), n.push($), n.push(tt), J + $ < X + tt ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1), i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2), i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                            var et = F.a[zt(t, h, c, _)].textures.back;
                            s.push(et.x, et.y, 0, 1), s.push(et.x, et.y, 1, 1), s.push(et.x, et.y, 1, 0), s.push(et.x, et.y, 0, 0)
                        } else Kt(t, h, c, _ - 1) && !a.has(Q) && (r.push(Object(S.l)(h, c, _ - 1)), a.add(Q))
                    }
                    return {
                        position: Object(S.l)((t.origin.x + .5) * l.a.BLOCK_SIZE, (t.origin.y + .5) * l.a.BLOCK_SIZE, (t.origin.z + .5) * l.a.BLOCK_SIZE),
                        vertices: e,
                        indices: i,
                        aos: n,
                        uvs: s
                    }
                }(e), a = r.indices, o = r.vertices, c = r.uvs, _ = r.aos, u = new h.l;
                u.setAttribute("position", new h.v(o, 3)), u.setIndex(new h.Lb(a, 1)), u.setAttribute("ao", new h.Mb(_, 1, !0)), u.setAttribute("realUv", new h.Mb(c, 4)), this._blockPlacementGuide = new h.X(u, this._blockMaterial), this._blockPlacementGuide.scale.set(.999, .999, .999), this._blockPlacementGuide.renderOrder = -1, this.controlsRenderer.controls.sceneRenderer.scene.add(this._blockPlacementGuide)
            }, e.hideBlockPlacementGuide = function () {
                void 0 !== this._blockPlacementGuide && (this._blockPlacementGuide.geometry.dispose(), this.controlsRenderer.controls.sceneRenderer.scene.remove(this._blockPlacementGuide), this._blockPlacementGuide = void 0)
            }, e.updateBlockPlacementGuidePosition = function () {
                var t = this.controlsRenderer.controls.getPlayerSelectedBlockSidePosition();
                this.setBlockPlacementGuidePosition(t)
            }, e.setBlockPlacementGuidePosition = function (t) {
                if (void 0 !== this._blockPlacementGuide) if (t) {
                    this._blockPlacementGuide.visible = !0;
                    var e = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t.x, t.y, t.z);
                    if (this._blockPlacementGuide.position.set(e.x, e.y, e.z), this._buildMode === ht.a.WALL) {
                        var i = Object(S.g)(this._controlsRenderer.controls.getCameraDir(), Object(S.l)(0, 0, 1)),
                            n = [];
                        if (Math.abs(i) < .5) {
                            for (var s = -1; s <= 1; s++) for (var r = 0; r <= 2; r++) n.push(Object(S.l)(t.x, r + t.y, s + t.z));
                            this._blockPlacementGuide.rotation.set(0, Math.PI / 2, 0)
                        } else {
                            for (var a = -1; a <= 1; a++) for (var o = 0; o <= 2; o++) n.push(Object(S.l)(a + t.x, o + t.y, t.z));
                            this._blockPlacementGuide.rotation.set(0, 0, 0)
                        }
                        if (this.validBlocksAABB(n)) {
                            for (var h = 0, c = 0; c < n.length; c++) {
                                var _ = n[c],
                                    l = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(_.x, _.y, _.z);
                                l !== R.a.AIR && l !== R.a.WATER || ++h
                            }
                            this._controlsRenderer.controls.playerState.inventory.hasItems([{
                                type: this._activeItem.id,
                                count: h
                            }]) ? this._blockPlacementGuide.material = this._blockMaterial : this._blockPlacementGuide.material = this._redMaterial
                        } else this._blockPlacementGuide.material = this._redMaterial
                    } else if (this._buildMode === ht.a.BLOCK) this.validBlocksAABB([t]) ? (this._blockPlacementGuide.material = this._blockMaterial, this._blockPlacementGuide.rotation.set(0, 0, 0)) : this._blockPlacementGuide.material = this._redMaterial; else if (this._buildMode === ht.a.STAIRS) {
                        var u = this._controlsRenderer.controls.getPitchYaw().y, d = [];
                        if (u >= -Math.PI / 4 && u <= Math.PI / 4) {
                            for (var p = -1; p <= 1; p++) d.push(Object(S.l)(p + t.x, 0 + t.y, 0 + t.z)), d.push(Object(S.l)(p + t.x, 0 + t.y, -1 + t.z)), d.push(Object(S.l)(p + t.x, 1 + t.y, -1 + t.z)), d.push(Object(S.l)(p + t.x, 1 + t.y, -2 + t.z));
                            this._blockPlacementGuide.rotation.set(0, -Math.PI, 0)
                        } else if (u >= -Math.PI / 4 * 3 && u < -Math.PI / 4) {
                            for (var v = -1; v <= 1; v++) d.push(Object(S.l)(0 + t.x, 0 + t.y, v + t.z)), d.push(Object(S.l)(1 + t.x, 0 + t.y, v + t.z)), d.push(Object(S.l)(1 + t.x, 1 + t.y, v + t.z)), d.push(Object(S.l)(2 + t.x, 1 + t.y, v + t.z));
                            this._blockPlacementGuide.rotation.set(0, Math.PI / 2, 0)
                        } else if (u < -Math.PI / 4 * 3 || u >= Math.PI / 4 * 3) {
                            for (var y = -1; y <= 1; y++) d.push(Object(S.l)(y + t.x, 0 + t.y, 0 + t.z)), d.push(Object(S.l)(y + t.x, 0 + t.y, 1 + t.z)), d.push(Object(S.l)(y + t.x, 1 + t.y, 1 + t.z)), d.push(Object(S.l)(y + t.x, 1 + t.y, 2 + t.z));
                            this._blockPlacementGuide.rotation.set(0, 0, 0)
                        } else {
                            for (var g = -1; g <= 1; g++) d.push(Object(S.l)(0 + t.x, 0 + t.y, g + t.z)), d.push(Object(S.l)(-1 + t.x, 0 + t.y, g + t.z)), d.push(Object(S.l)(-1 + t.x, 1 + t.y, g + t.z)), d.push(Object(S.l)(-2 + t.x, 1 + t.y, g + t.z));
                            this._blockPlacementGuide.rotation.set(0, -Math.PI / 2, 0)
                        }
                        if (this.validBlocksAABB(d)) {
                            for (var m = 0, f = 0; f < d.length; f++) {
                                var k = d[f],
                                    E = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(k.x, k.y, k.z);
                                E !== R.a.AIR && E !== R.a.WATER || ++m
                            }
                            this._controlsRenderer.controls.playerState.inventory.hasItems([{
                                type: this._activeItem.id,
                                count: m
                            }]) ? this._blockPlacementGuide.material = this._blockMaterial : this._blockPlacementGuide.material = this._redMaterial
                        } else this._blockPlacementGuide.material = this._redMaterial
                    }
                } else this._blockPlacementGuide.visible = !1
            }, e.validBlocksAABB = function (t) {
                for (var e = this.controlsRenderer.controls.sceneRenderer.entitiesRenderer.getEntities(), i = Object(J.e)(this.controlsRenderer.controls.physicsStep.pos, this.controlsRenderer.controls.physicsStep.eyeHeight), n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = this.controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(s.x, s.y, s.z),
                        a = Object(J.a)(r);
                    if (Object(Bt.a)(i, a)) return !1;
                    for (var o, h = Gt(e); !(o = h()).done;) {
                        var c = o.value;
                        if (c.type === St.PLAYER) {
                            var _ = c;
                            if (_.isAlive) {
                                var u = Object(J.e)(_.object.position, _.controlState === Z.a.CROUCHING ? l.a.PLAYER_CROUCHING_EYE_POSITION : l.a.PLAYER_STANDING_EYE_POSITION);
                                if (Object(Bt.a)(u, a)) return !1
                            }
                        }
                    }
                }
                return !0
            }, _()(t, [{
                key: "controlsRenderer", get: function () {
                    return this._controlsRenderer
                }
            }]), t
        }(), Yt = function () {
            function t(t) {
                this._controlsRenderer = t, this._wrapper = void 0, this._shells = void 0, this._wrapper = new h.hb, this._shells = []
            }

            var e = t.prototype;
            return e.addShell = function (t, e, i) {
                var n = k.a.getMiscModel(i);
                Object(S.j)(e);
                var s = new h.qb;
                s.setFromUnitVectors(new h.Ob(0, 0, 1), new h.Ob(e.x, e.y, e.z)), n.position.set(t.x, t.y, t.z), n.rotation.setFromQuaternion(s);
                var r = new h.Ob(0, 0, 1);
                r.applyQuaternion(s), this._wrapper.add(n);
                var a = new h.Ob;
                a.setFromMatrixColumn(this._controlsRenderer.controls.canvasRenderer.camera.matrix, 0), a.normalize(), a.multiplyScalar(2), a.y = 1.5, this._shells.push({
                    mesh: n,
                    origin: t,
                    velocity: a,
                    rotationalAxis: r
                })
            }, e.render = function (t, e) {
                for (var i = 0; i < this._shells.length; i++) {
                    var n = this._shells[i], s = n.mesh.position;
                    n.mesh.position.set(s.x + n.velocity.x * t, s.y + n.velocity.y * t, s.z + n.velocity.z * t), n.velocity.y -= 15 * t, n.mesh.rotateOnWorldAxis(n.rotationalAxis, 20 * t), n.origin.y - s.y > 5 && (this._wrapper.remove(n.mesh), k.a.cleanUpModel(n.mesh), this._shells[i] = this._shells[this._shells.length - 1], this._shells.pop(), --i)
                }
            }, _()(t, [{
                key: "object", get: function () {
                    return this._wrapper
                }
            }]), t
        }(), Vt = function () {
            function t(t, e, i, n) {
                var s = this;
                this._settings = t, this._canvasRenderer = e, this._sceneRenderer = i, this._statsRenderer = n, this._initialized = void 0, this._adsWrapper = void 0, this._swingingWrapper = void 0, this._oscillationWrapper = void 0, this._kickBackWrapper = void 0, this._armAnimationWrapper = void 0, this._blockPlaceAnimationWrapper = void 0, this._handModel = void 0, this._itemModel = void 0, this._animationMixer = void 0, this._playerHoldBlockAction = void 0, this._playerHoldItemAction = void 0, this._playerFistAction = void 0, this._activeItemType = void 0, this._muzzleFlash = void 0, this._controls = void 0, this._prevPitchYaw = void 0, this._adsOverrideTimer = void 0, this._adsOverrideExpireCallback = void 0, this._adsVel = void 0, this._adsTargetPos = void 0, this._swingingVel = void 0, this._oscillationVel = void 0, this._kickBackVel = void 0, this._kickBackTargetPos = void 0, this._prevIsMoving = void 0, this._prevIsOnGround = void 0, this._prevIsJumping = void 0, this._jumpSwayTimer = void 0, this._oscillationDir = void 0, this._topLine = void 0, this._bottomLine = void 0, this._leftLine = void 0, this._rightLine = void 0, this._centerDot = void 0, this._crosshairMaterial = void 0, this._crosshair = void 0, this._topLeftLine = void 0, this._topRightLine = void 0, this._bottomLeftLine = void 0, this._bottomRightLine = void 0, this._crosshairHitMark = void 0, this._crosshairHitMarkStartTime = void 0, this._damageIndicators = void 0, this._blockEditGuideRenderer = void 0, this._weaponShellsRenderer = void 0, this._weaponShellOriginIndicator = void 0, this._audioListener = void 0, this._shovelAnimationStartTime = void 0, this._shovelAnimationRunningTime = void 0, this._shovelAnimationGracePeriod = void 0, this._shovelHitAnimationStartTime = void 0, this._blockPlaceAnimationStartTime = void 0, this._blockPlaceAnimationGracePeriod = void 0, this._punchAnimationState = void 0, this._soundsLastTimePlayed = void 0, this._waterOverlay = void 0, this._toxicFogOverlay = void 0, this._blockClippingOverlay = void 0, this._currCrossHairGap = void 0, this._team = void 0, this.onPlayDirectSound = function (t, e, i) {
                    s.playSound(t, e, i)
                }, this.onPlayPositionalSound = function (t, e, i, n) {
                    s.playPositionalSound(t, e, i, n)
                }, this.onEntityDamage = function (t, e, i, n, r, a) {
                    n && (s.showCrosshairHitMark(), r && s.playSound(_t.a.HIT_HEADSHOT, 0, 1), s.playSound(_t.a.HIT, 0, .8), a && s.playSound(_t.a.KILL, 0, 1))
                }, this.onClientDamageReceived = function (t, e) {
                    s.playSound(_t.a.DAMAGE, 0, 1);
                    var i = new h.Eb({map: k.a.damageIndicatorTexture, transparent: !0}), n = new h.Db(i);
                    n.scale.set(4, k.a.damageIndicatorTexture.image.height / k.a.damageIndicatorTexture.image.width * 4, 1), n.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE / 2, s._canvasRenderer.camera.add(n);
                    var r = {sprite: n, sourcePos: t, startTime: Date.now()};
                    s.updateDamageIndicator(r), s._damageIndicators.push(r)
                }, this.onGameJoin = function (t, e, i, n, r, a, o) {
                    s.initialize(), Object(y.r)(xt.a.CONNECTED), Object(y.p)(t), Object(y.q)(e), s.team = r, s._controls.initialize(t, i, n)
                }, this.onInventoryActiveSlotChange = function (t, e) {
                    s._activeItemType = e.item.id, s.startADSTargetOverride(new h.Ob(0, -.5, 0), 3, .3, s.generateItemMesh.bind(s, e.item))
                }, this.onReload = function (t) {
                    s.startADSTargetOverride(new h.Ob(0, -.5, 0), 3, Object(z.d)(t - Object(z.c)(.5)), (function () {
                    }))
                }, this._initialized = !1, this._currCrossHairGap = 0, this._team = kt.a.GREEN, this._adsWrapper = new h.hb, this._swingingWrapper = new h.hb, this._oscillationWrapper = new h.hb, this._kickBackWrapper = new h.hb, this._armAnimationWrapper = new h.hb, this._blockPlaceAnimationWrapper = new h.hb, this._damageIndicators = [], this._crosshairHitMarkStartTime = 0, this._kickBackVel = 0, this._kickBackTargetPos = new h.Ob(0, 0, 0), this._controls = new Dt(this._settings, this._canvasRenderer, this._sceneRenderer, this._statsRenderer, this), this._blockEditGuideRenderer = new Wt(this), this._weaponShellsRenderer = new Yt(this), this._weaponShellOriginIndicator = new h.hb, this._shovelAnimationStartTime = 0, this._shovelAnimationRunningTime = 0, this._shovelAnimationGracePeriod = 100, this._shovelHitAnimationStartTime = 0, this._blockPlaceAnimationStartTime = 0, this._blockPlaceAnimationGracePeriod = 1e3 * Object(z.d)(ot.a.BLOCK_PLACE.duration) / 2, this._activeItemType = ct.a.EMPTY, this._handModel = k.a.playerFirstPersonModel, this._animationMixer = new h.c(this._handModel), this._playerHoldItemAction = this._animationMixer.clipAction(k.a.playerFirstPersonItemHoldAnimation), this._playerHoldBlockAction = this._animationMixer.clipAction(k.a.playerFirstPersonBlockHoldAnimation), this._playerFistAction = this._animationMixer.clipAction(k.a.playerFirstPersonFistAnimation),this._playerHoldBlockAction.play(),this._playerHoldBlockAction.paused = !0,this._playerHoldItemAction.play(),this._playerHoldItemAction.paused = !0,this._playerFistAction.play(),this._playerFistAction.paused = !0,this._soundsLastTimePlayed = {},this._playerFistAction.setLoop(h.Q, 1),this._playerFistAction.clampWhenFinished = !0,this._punchAnimationState = 0,this._oscillationDir = 0,this.generateItemMesh(Object(nt.c)(ct.a.EMPTY)),this.bindEvents()
            }

            var e = t.prototype;
            return e.playPunchAnimation = function () {
                this._playerFistAction.paused && (1 === this._punchAnimationState ? this._punchAnimationState = 2 : 2 === this._punchAnimationState && (this._playerFistAction.reset(), this._punchAnimationState = 0), this._playerFistAction.paused = !1)
            }, e.playBlockPlaceAnimation = function () {
                this._blockPlaceAnimationStartTime = Date.now()
            }, e.playShovelAnimation = function () {
                this._shovelAnimationStartTime = Date.now()
            }, e.playShovelHitAnimation = function () {
                this._shovelHitAnimationStartTime = Date.now()
            }, e.bindEvents = function () {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin), d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange), d.a.on(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived), d.a.on(p.a.ENTITY_DAMAGE, this.onEntityDamage), d.a.on(p.a.RELOAD, this.onReload), d.a.on(p.a.PLAY_DIRECT_SOUND, this.onPlayDirectSound), d.a.on(p.a.PLAY_POSITIONAL_SOUND, this.onPlayPositionalSound)
            }, e.unbindEvents = function () {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin), d.a.off(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange), d.a.off(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived), d.a.off(p.a.ENTITY_DAMAGE, this.onEntityDamage), d.a.off(p.a.RELOAD, this.onReload), d.a.off(p.a.PLAY_DIRECT_SOUND, this.onPlayDirectSound), d.a.off(p.a.PLAY_POSITIONAL_SOUND, this.onPlayPositionalSound)
            }, e.renderDamageIndicators = function (t) {
                for (var e = 0; e < this._damageIndicators.length; e++) {
                    this.updateDamageIndicator(this._damageIndicators[e]) && (this._damageIndicators[e] = this._damageIndicators[this._damageIndicators.length - 1], this._damageIndicators.pop(), --e)
                }
            }, e.updateDamageIndicator = function (t) {
                var e = Date.now() - t.startTime, i = l.a.PLAYER_DAMAGE_INDICATOR_VISIBLE_DURATION,
                    n = l.a.PLAYER_DAMAGE_INDICATOR_FADE_DURATION;
                if (e > i + n) return this._canvasRenderer.camera.remove(t.sprite), t.sprite.geometry.dispose(), t.sprite.material.dispose(), !0;
                e > i && (t.sprite.material.opacity = (i + n - e) / n);
                var s = this._controls.getPitchYaw().y, r = Object(X.e)(-Math.sin(s), -Math.cos(s)),
                    a = Object(X.e)(t.sourcePos.x - this._canvasRenderer.camera.position.x, t.sourcePos.z - this._canvasRenderer.camera.position.z);
                Object(X.c)(a);
                var o = Math.PI - (Math.atan2(r.x * a.y - r.y * a.x, r.x * a.x + r.y * a.y) + Math.PI / 2);
                return t.sprite.position.x = 5 * Math.cos(o), t.sprite.position.y = 5 * Math.sin(o), t.sprite.material.rotation = o - Math.PI / 2, !1
            }, e.startADSTargetOverride = function (t, e, i, n) {
                this._adsOverrideTimer = i, this._adsTargetPos = t, this._adsVel = e, n && (this._adsOverrideExpireCallback = n)
            }, e.cleanUp = function () {
                this.unbindEvents(), this._canvasRenderer.frontScene.remove(this._canvasRenderer.camera), this._canvasRenderer.camera.remove(this._adsWrapper), this.cleanUpCrosshair(), this._controls.cleanUp(), k.a.cleanUpModel(this._handModel)
            }, e.cleanUpCrosshair = function () {
                this._crosshairMaterial.dispose(), this._topLine.geometry.dispose(), this._bottomLine.geometry.dispose(), this._leftLine.geometry.dispose(), this._rightLine.geometry.dispose(), this._centerDot.geometry.dispose(), this.hideCrosshair()
            }, e.hideCrosshair = function () {
                this._crosshair.visible = !1
            }, e.showCrosshair = function () {
                this._crosshair.visible = !0
            }, e.setCrosshairGap = function (t) {
                this._topLine.position.set(0, t + this._settings.crosshairLength / 2, 0), this._bottomLine.position.set(0, -t - this._settings.crosshairLength / 2, 0), this._leftLine.position.set(-t - this._settings.crosshairLength / 2, 0, 0), this._rightLine.position.set(t + this._settings.crosshairLength / 2, 0, 0)
            }, e.initializeCrosshair = function () {
                this._crosshairMaterial = new h.Eb({color: this._settings.crosshairColor}), this._topLine = new h.Db(this._crosshairMaterial), this._topLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._topLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._bottomLine = new h.Db(this._crosshairMaterial), this._bottomLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._leftLine = new h.Db(this._crosshairMaterial), this._leftLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1), this._leftLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._rightLine = new h.Db(this._crosshairMaterial), this._rightLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1), this._rightLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._centerDot = new h.Db(this._crosshairMaterial), this._centerDot.scale.set(this._settings.crosshairWidth, this._settings.crosshairWidth, 1), this._centerDot.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.DOT, this._crosshair = new h.hb, this._crosshair.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE, this._crosshair.add(this._topLine), this._crosshair.add(this._bottomLine), this._crosshair.add(this._leftLine), this._crosshair.add(this._rightLine), this._crosshair.add(this._centerDot), this._canvasRenderer.crosshairScene.add(this._crosshair)
            }, e.renderCrosshair = function (t) {
                this.setCrosshairGap(this._currCrossHairGap)
            }, e.setCrosshairHitMarkGap = function (t) {
                var e = this._settings.crosshairLength;
                this._topLeftLine.position.set(-t - e / 2, t + e / 2, 0), this._topRightLine.position.set(t + e / 2, t + e / 2, 0), this._bottomLeftLine.position.set(-t - e / 2, -t - e / 2, 0), this._bottomRightLine.position.set(t + e / 2, -t - e / 2, 0)
            }, e.updateCrosshairSettings = function () {
                void 0 !== this._crosshairMaterial && (this._crosshairMaterial.color.set(this._settings.crosshairColor), this._crosshairMaterial.needsUpdate = !0, this._topLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._topLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._bottomLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._leftLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1), this._leftLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._rightLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1), this._rightLine.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.CROSS, this._centerDot.scale.set(this._settings.crosshairWidth, this._settings.crosshairWidth, 1), this._centerDot.visible = this._settings.crosshairStyle === Pt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Pt.a.DOT, this._topLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._topLeftLine.material.color.set(this._settings.crosshairHitColor), this._topLeftLine.material.needsUpdate = !0, this._topRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._topRightLine.material.color.set(this._settings.crosshairHitColor), this._topRightLine.material.needsUpdate = !0, this._bottomLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomLeftLine.material.color.set(this._settings.crosshairHitColor), this._bottomLeftLine.material.needsUpdate = !0, this._bottomRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomRightLine.material.color.set(this._settings.crosshairHitColor), this._bottomRightLine.material.needsUpdate = !0)
            }, e.initializeCrosshairHitMark = function () {
                this._topLeftLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: Math.PI / 4
                })), this._topLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._topRightLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: -Math.PI / 4
                })), this._topRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomLeftLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: -Math.PI / 4
                })), this._bottomLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._bottomRightLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: Math.PI / 4
                })), this._bottomRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1), this._crosshairHitMark = new h.hb, this._crosshairHitMark.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE, this._crosshairHitMark.add(this._topLeftLine), this._crosshairHitMark.add(this._topRightLine), this._crosshairHitMark.add(this._bottomLeftLine), this._crosshairHitMark.add(this._bottomRightLine), this._canvasRenderer.camera.add(this._crosshairHitMark)
            }, e.initializeMuzzleFlash = function () {
                var t = new h.Eb({map: k.a.muzzleFlashtexture, transparent: !0, opacity: 0});
                this._muzzleFlash = new h.Db(t), this._muzzleFlash.scale.set(1, k.a.muzzleFlashtexture.image.height / k.a.muzzleFlashtexture.image.width, 1), this.getRightHand().add(this._muzzleFlash)
            }, e.setCrosshairHitMarkOpacity = function (t) {
                this._topLeftLine.material.opacity = t, this._topRightLine.material.opacity = t, this._bottomLeftLine.material.opacity = t, this._bottomRightLine.material.opacity = t
            }, e.renderCrosshairHitMark = function (t) {
                this.setCrosshairHitMarkGap(this._currCrossHairGap);
                var e = Date.now() - this._crosshairHitMarkStartTime;
                if (e > l.a.PLAYER_CROSSHAIR_HITMARK_VISIBLE_DURATION) {
                    var i = Math.max(0, (l.a.PLAYER_CROSSHAIR_HITMARK_VISIBLE_DURATION + l.a.PLAYER_CROSSHAIR_HITMARK_FADE_DURATION - e) / l.a.PLAYER_CROSSHAIR_HITMARK_FADE_DURATION);
                    this.setCrosshairHitMarkOpacity(i)
                }
            }, e.showCrosshairHitMark = function () {
                this.setCrosshairHitMarkOpacity(1), this._crosshairHitMarkStartTime = Date.now()
            }, e.initialize = function () {
                this._initialized = !0, this._audioListener = new h.f, this.initializeCrosshair(), this.initializeCrosshairHitMark(), this._oscillationWrapper.add(this._handModel), this._swingingWrapper.add(this._oscillationWrapper), this._adsWrapper.add(this._swingingWrapper), this._kickBackWrapper.add(this._adsWrapper), this._armAnimationWrapper.add(this._kickBackWrapper), this._blockPlaceAnimationWrapper.add(this._armAnimationWrapper), this._canvasRenderer.camera.add(this._blockPlaceAnimationWrapper), this.initializeMuzzleFlash(), this._adsOverrideTimer = 0, this._adsOverrideExpireCallback = function () {
                }, this._adsTargetPos = new h.Ob(0, 0, 0), this._adsVel = 0, this._swingingVel = new h.Ob(0, 0, 0), this._oscillationVel = new h.Ob(0, 0, 0), this._prevPitchYaw = Object(X.e)(0, 0), this._prevIsMoving = !1, this._prevIsOnGround = !1, this._prevIsJumping = !1, this._jumpSwayTimer = 0, this._canvasRenderer.frontScene.add(this._canvasRenderer.camera), this._canvasRenderer.frontScene.add(this._weaponShellsRenderer.object), this._canvasRenderer.camera.add(this._audioListener);
                var t = new h.Eb({color: 255, transparent: !0, opacity: .3, depthTest: !1});
                this._waterOverlay = new h.Db(t), this._waterOverlay.scale.set(10, 10, 0), this._waterOverlay.position.set(0, 0, -1), this._waterOverlay.visible = !1, this._canvasRenderer.camera.add(this._waterOverlay);
                var e = new h.Eb({color: 16711680, transparent: !0, opacity: .3, depthTest: !1});
                this._toxicFogOverlay = new h.Db(e), this._toxicFogOverlay.scale.set(10, 10, 0), this._toxicFogOverlay.position.set(0, 0, -1), this._toxicFogOverlay.visible = !1, this._canvasRenderer.camera.add(this._toxicFogOverlay);
                var i = new h.Eb({color: 0, transparent: !1, depthTest: !1});
                this._blockClippingOverlay = new h.Db(i), this._blockClippingOverlay.scale.set(10, 10, 0), this._blockClippingOverlay.position.set(0, 0, -1), this._blockClippingOverlay.visible = !1, this._canvasRenderer.camera.add(this._blockClippingOverlay)
            }, e.playFootstepSound = function (t, e) {
                this.playSound(t, Math.random() * e - e / 2, .5)
            }, e.playPositionalFootstepSound = function (t, e, i) {
                this.playPositionalSound(t, e, Math.random() * i - i / 2, .5)
            }, e.playSound = function (t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = 1);
                var n = this._soundsLastTimePlayed[t];
                if (!(void 0 !== n && Date.now() - n < 40)) {
                    var s = new h.d(this._audioListener);
                    s.setBuffer(k.a.getSound(t)), s.detune = e, s.gain.gain.value = i * (this._settings.soundVolume * this._settings.soundVolume), s.play(), this._soundsLastTimePlayed[t] = Date.now()
                }
            }, e.playPositionalSound = function (t, e, i, n, s, r, a) {
                var o = this;
                if (void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === s && (s = 80 * l.a.BLOCK_SIZE), void 0 === r && (r = 10 * l.a.BLOCK_SIZE), void 0 === a && (a = 2), !(Object(S.e)(t, this._canvasRenderer.camera.position) >= s * s)) {
                    var c = this._soundsLastTimePlayed[e];
                    if (!(void 0 !== c && Date.now() - c < 40)) {
                        var _ = new h.ob(this._audioListener);
                        _.setBuffer(k.a.getSound(e)), _.detune = i, _.gain.gain.value = n * (this._settings.soundVolume * this._settings.soundVolume), _.setRefDistance(r), _.setRolloffFactor(a);
                        var u = new h.hb;
                        u.add(_), this._canvasRenderer.frontScene.add(u), u.position.set(t.x, t.y, t.z), _.play(), _.source.onended = function () {
                            _.isPlaying = !1, o._canvasRenderer.frontScene.remove(u)
                        }, this._soundsLastTimePlayed[e] = Date.now()
                    }
                }
            }, e.update = function (t) {
                Object(y.c)() === xt.a.CONNECTED && (this.updateColorOverlays(), this._controls.update(t))
            }, e.updateColorOverlays = function () {
                var t = Object(S.l)(this._controls.physicsStep.pos.x, this._controls.physicsStep.pos.y + this._controls.physicsStep.eyeHeight, this._controls.physicsStep.pos.z);
                Object(S.f)(t, l.a.BLOCK_SIZE);
                var e = this._controls.getVoxel(t.x, t.y, t.z), i = e === R.a.WATER,
                    n = e !== R.a.AIR && e !== R.a.WATER;
                this._waterOverlay.visible = i, this._blockClippingOverlay.visible = n && this._controls.playerState.physicsStep.controlState !== Z.a.NOCLIP, this._sceneRenderer.toxicFogRenderer.isInCircle(Object(X.e)(this._controls.physicsStep.pos.x, this._controls.physicsStep.pos.z)) ? (this._toxicFogOverlay.visible = !1, this._canvasRenderer.setClearColor(l.a.SKY_CLEAR_COLOR), this._sceneRenderer.scene.fog.color.set(l.a.SKY_CLEAR_COLOR)) : (this._toxicFogOverlay.visible = !0, this._canvasRenderer.setClearColor(l.a.SKY_STORM_COLOR), this._sceneRenderer.scene.fog.color.set(l.a.SKY_STORM_COLOR))
            }, e.render = function (t, e) {
                if (this._initialized) {
                    0 === this._punchAnimationState && this._playerFistAction.time >= 1 / 3 && (this._playerFistAction.paused = !0, this._punchAnimationState = 1), this._animationMixer.update(t);
                    var i = e / l.a.PHYSICS_TIME_STEP;
                    this._currCrossHairGap = Object(M.c)(this._controls.getPrevAimSpread(), this._controls.getCurrAimSpread(), i), this.renderCrosshair(t), this.renderCrosshairHitMark(t), this.renderDamageIndicators(t), this._controls.render(t, e), this.renderADS(t), this.renderSwinging(t), this.renderShovelAnimation(t), this.renderBlockPlaceAnimation(t), this.renderFOV(t);
                    var n = Date.now() - this._shovelAnimationStartTime <= this._shovelAnimationGracePeriod,
                        s = Date.now() - this._blockPlaceAnimationStartTime <= this._blockPlaceAnimationGracePeriod;
                    n || s || this.renderOscillation(t), this.renderKickBack(t), this._blockEditGuideRenderer.render(t, e), this._weaponShellsRenderer.render(t, e)
                }
            }, e.renderFOV = function (t) {
                if (this.isADSing()) {
                    var e = this._controls.getInventory().getSelected().item;
                    if (this._canvasRenderer.camera.fov != e.adsFOV) {
                        var i = Math.abs(e.adsFOV - this._canvasRenderer.camera.fov),
                            n = e.adsFOV - this._canvasRenderer.camera.fov < 0 ? -1 : 1;
                        this._canvasRenderer.camera.fov += Math.min(10 * i * t, i) * n, this._canvasRenderer.camera.updateProjectionMatrix()
                    }
                } else {
                    var s = Math.abs(l.a.PLAYER_WALKING_FOV - this._canvasRenderer.camera.fov),
                        r = l.a.PLAYER_WALKING_FOV - this._canvasRenderer.camera.fov < 0 ? -1 : 1;
                    this._canvasRenderer.camera.fov += Math.min(10 * s * t, s) * r, this._canvasRenderer.camera.updateProjectionMatrix()
                }
            }, e.isADSing = function () {
                return Object(J.d)(this._controls.getLastInput(), this._controls.playerState)
            }, e.renderADS = function (t) {
                var e = this._adsWrapper.position;
                if (this._adsOverrideTimer > 0) this._adsOverrideTimer = this._adsOverrideTimer - t, this._adsOverrideTimer <= 0 && (this._adsOverrideTimer = 0, this._adsOverrideExpireCallback(), this._adsOverrideExpireCallback = function () {
                }); else if (this._controls.getControlState() === Z.a.RUNNING) this._adsTargetPos = new h.Ob(0, -.5, 0), this._adsVel = 2; else if (this.isADSing()) {
                    var i = this._controls.getInventory().getSelected().item.getADSPosition();
                    this._adsTargetPos = new h.Ob(i.x, i.y, i.z), this._adsVel = 1
                } else this._adsTargetPos = new h.Ob(0, 0, 0), this._adsVel = 1.5;
                var n = Object(y.n)();
                this.isADSing() && this._controls.getInventory().getSelected().item.useScope ? n || (d.a.emit(p.a.SET_SHOW_SCOPE, !0), this._adsWrapper.visible = !1, this.hideCrosshair()) : n && (d.a.emit(p.a.SET_SHOW_SCOPE, !1), this._adsWrapper.visible = !0, this.showCrosshair());
                var s = this._adsTargetPos.clone().sub(e), r = s.length(),
                    a = s.normalize().multiplyScalar(Math.min(r, this._adsVel * t));
                this._adsWrapper.position.set(e.x + a.x, e.y + a.y, e.z + a.z)
            }, e.renderShovelAnimation = function (t) {
                var e = this._armAnimationWrapper.position;
                Date.now() - this._shovelAnimationStartTime <= this._shovelAnimationGracePeriod || Date.now() - this._shovelHitAnimationStartTime <= 300 ? (e.z = .1 * (Math.cos(20 * this._shovelAnimationRunningTime) - 1) + .1, void 0 !== this._itemModel && this._itemModel.rotation.x < Math.PI / 3 && (this._itemModel.rotation.x = Math.min(Math.PI / 3, this._itemModel.rotation.x + 10 * t)), this._shovelAnimationRunningTime += t) : (this._shovelAnimationRunningTime = 0, e.z > 0 ? e.z = Math.max(0, e.z - 10 * t) : e.z < 0 && (e.z = Math.min(0, e.z + 10 * t)), void 0 !== this._itemModel && this._itemModel.rotation.x > 0 && (this._itemModel.rotation.x = Math.max(0, this._itemModel.rotation.x - 10 * t)))
            }, e.renderBlockPlaceAnimation = function (t) {
                var e = this._blockPlaceAnimationWrapper.position;
                if (Date.now() - this._blockPlaceAnimationStartTime <= this._blockPlaceAnimationGracePeriod / 2) e.z = (Date.now() - this._blockPlaceAnimationStartTime) / (this._blockPlaceAnimationGracePeriod / 2) * -.2; else {
                    var i = 1 - Math.min(1, (Date.now() - this._blockPlaceAnimationStartTime - this._blockPlaceAnimationGracePeriod / 2) / (this._blockPlaceAnimationGracePeriod / 2));
                    e.z = -.2 * i
                }
            }, e.renderOscillation = function (t) {
                var e = this._oscillationWrapper.position;
                e.add(this._oscillationVel.clone().multiplyScalar(t));
                e.lengthSq() > .2 * .2 && (e.normalize(), e.multiplyScalar(.2));
                var i = .008, n = .009;
                this._controls.isMoving() && this._controls.getControlState() !== Z.a.CROUCHING && (i = .01, n = .04);
                var s = this._controls.isMoving();
                this._controls.getLastInput().secondaryAction ? (this._oscillationVel.y = 3 * -e.y, this._oscillationDir = 0) : !this._prevIsMoving && s || this._prevIsMoving && !s ? this._oscillationDir <= 0 ? (this._oscillationVel.y = -n, this._oscillationDir = -1) : (this._oscillationVel.y = n, this._oscillationDir = 1) : 0 === this._oscillationDir || e.y < -i && -1 === this._oscillationDir ? (this._oscillationVel.y = n, this._oscillationDir = 1) : e.y > i && 1 === this._oscillationDir && (this._oscillationVel.y = -n, this._oscillationDir = -1), this._prevIsMoving = s
            }, e.renderSwinging = function (t) {
                var e = this._swingingWrapper.position;
                e.add(this._swingingVel.clone().multiplyScalar(t));
                e.lengthSq() > 9e-4 && (e.normalize(), e.multiplyScalar(.03));
                var i = this._controls.getBasePitchYaw(), n = !0, s = Object(M.b)(this._prevPitchYaw.x, i.x),
                    r = Object(M.b)(this._prevPitchYaw.y, i.y), a = this._controls.isJumping(),
                    o = this._controls.isOnGround();
                Math.abs(s) > 0 && (n = !1, this._swingingVel.y = .7 * s), Math.abs(r) > 0 && (n = !1, this._swingingVel.x = .7 * -r), !this._prevIsJumping && a || !this._prevIsOnGround && o ? (n = !1, this._swingingVel.y = -.5, this._jumpSwayTimer = .1) : this._jumpSwayTimer > 0 && (n = !1, this._swingingVel.y = -.6, this._jumpSwayTimer -= t, this._jumpSwayTimer = Math.max(0, this._jumpSwayTimer)), n && (this._swingingVel.x = 5 * -e.x, this._swingingVel.y = 5 * -e.y), this._prevIsJumping = a, this._prevIsOnGround = o, this._prevPitchYaw = i
            }, e.kickBack = function (t) {
                this._kickBackWrapper.position.set(0, 0, 0), this._kickBackTargetPos.set(0, 0, t), this._kickBackVel = .5, this._muzzleFlash.material.opacity = .9, this._muzzleFlash.material.rotation = Math.random() * Math.PI * 2
            }, e.renderKickBack = function (t) {
                var e = this._kickBackWrapper.position, i = this._kickBackTargetPos.clone().sub(e), n = i.length();
                n < 1e-4 && (this._kickBackTargetPos.set(0, 0, 0), this._kickBackVel = .5), this._muzzleFlash.material.opacity = Math.max(0, this._muzzleFlash.material.opacity - 20 * t);
                var s = i.normalize().multiplyScalar(Math.min(n, this._kickBackVel * t));
                this._kickBackWrapper.position.set(e.x + s.x, e.y + s.y, e.z + s.z)
            }, e.getRightHand = function () {
                return this._handModel.getObjectByName("Bone_Right_Hand")
            }, e.generateItemMesh = function () {
                var t = o()(r.a.mark((function t(e) {
                    var i;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return this._itemModel && (this.getRightHand().remove(this._itemModel), this._itemModel.remove(this._weaponShellOriginIndicator), k.a.cleanUpModelExcludeMaterial(this._itemModel)), t.next = 3, e.generateFirstPersonModel(!1);
                            case 3:
                                this._itemModel = t.sent, k.a.removeFog(this._itemModel), Object(nt.f)(e.id) && (i = e, this._itemModel.add(this._weaponShellOriginIndicator), this._weaponShellOriginIndicator.position.set(i.shellModelOrigin.x, i.shellModelOrigin.y, i.shellModelOrigin.z)), Object(nt.e)(e.id) || Object(nt.g)(e.id) ? (this._playerHoldBlockAction.setEffectiveWeight(1), this._playerHoldItemAction.setEffectiveWeight(0), this._playerFistAction.setEffectiveWeight(0)) : e.id === ct.a.EMPTY ? (this._playerHoldBlockAction.setEffectiveWeight(0), this._playerHoldItemAction.setEffectiveWeight(0), this._playerFistAction.setEffectiveWeight(1)) : (this._playerHoldBlockAction.setEffectiveWeight(0), this._playerHoldItemAction.setEffectiveWeight(1), this._playerFistAction.setEffectiveWeight(0)), this.getRightHand().add(this._itemModel);
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));
                return function (e) {
                    return t.apply(this, arguments)
                }
            }(), e.addBullet = function () {
                var t = Object(S.l)(this._controls.canvasRenderer.camera.position.x, this._controls.canvasRenderer.camera.position.y, this._controls.canvasRenderer.camera.position.z);
                this._controls.sceneRenderer.bulletsRenderer.addBullet(t, this._controls.getCameraDir(), this._currCrossHairGap)
            }, e.addShell = function (t) {
                var e = new h.Ob;
                this._weaponShellOriginIndicator.getWorldPosition(e), this._weaponShellsRenderer.addShell(e, this._controls.getCameraDir(), t)
            }, e.hideHands = function () {
                this._blockPlaceAnimationWrapper.visible = !1
            }, e.showHands = function () {
                this._blockPlaceAnimationWrapper.visible = !0
            }, _()(t, [{
                key: "controls", get: function () {
                    return this._controls
                }
            }, {
                key: "muzzleFlash", get: function () {
                    return this._muzzleFlash
                }
            }, {
                key: "blockEditGuideRenderer", get: function () {
                    return this._blockEditGuideRenderer
                }
            }, {
                key: "weaponShellsRenderer", get: function () {
                    return this._weaponShellsRenderer
                }
            }, {
                key: "team", get: function () {
                    return this._team
                }, set: function (t) {
                    this._team = t, this._handModel.traverse((function (e) {
                        e.material && "Arms" === e.name && (t === kt.a.GREEN ? e.material.map = k.a.soldierGreenTexture : t === kt.a.RED ? e.material.map = k.a.soldierRedTexture : t === kt.a.BLUE && (e.material.map = k.a.soldierBlueTexture))
                    }))
                }
            }]), t
        }();

        function Zt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return qt(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return qt(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function qt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var Qt = function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, i, St.ITEM, e) || this)._itemModel = void 0, n._itemModelOutline = void 0, n._item = void 0, n._itemCount = void 0, n._itemSkinType = void 0, n._itemSkinSeed = void 0, n._stableY = void 0, n._time = void 0, n._itemPickupTarget = void 0, n._stableY = 0, n._time = Math.random() * Math.PI * 2, n._itemCount = 1, n._itemPickupTarget = -1, n._itemSkinType = It.a.DEFAULT, n._itemSkinSeed = 0, n
            }

            it()(e, t);
            var i = e.prototype;
            return i.onUpdateMetadata = function (t) {
                for (var e, i = Zt(t); !(e = i()).done;) {
                    var n = e.value;
                    switch (n.metadataType) {
                        case ft.ITEM_TYPE:
                            this.setItemType(n.value);
                            break;
                        case ft.ITEM_PICKUP_TARGET:
                            this._itemPickupTarget = n.value;
                            break;
                        case ft.ITEM_COUNT:
                            this._itemCount = n.value;
                            break;
                        case ft.ITEM_OWNER_NAME:
                            void 0 !== this._item && (this._item.ownerName = n.value);
                            break;
                        case ft.ITEM_SKIN_TYPE:
                            this._itemSkinType = n.value;
                            break;
                        case ft.ITEM_SKIN_SEED:
                            this._itemSkinSeed = n.value
                    }
                }
            }, i.render = function (t, e) {
                if (this._itemPickupTarget >= 0) {
                    var i = !0, n = Object(S.l)(0, 0, 0);
                    if (this._itemPickupTarget === Object(y.a)()) n = Object(S.b)(this.entitiesRenderer.sceneRenderer.controlsRenderer.controls.physicsStep.pos); else {
                        var s = this.entitiesRenderer.getEntity(this._itemPickupTarget);
                        void 0 === s ? (this.entitiesRenderer.removeEntity(this.id), i = !1) : n = Object(S.l)(s.object.position.x, s.object.position.y, s.object.position.z)
                    }
                    if (i) {
                        n.y += l.a.BLOCK_SIZE;
                        var r = Object(S.l)(this.object.position.x, this.object.position.y, this.object.position.z);
                        if (Object(S.e)(r, n) < .2 * .2 || Object(S.e)(r, n) > 25) this.entitiesRenderer.removeEntity(this.id); else {
                            var a = Object(S.l)(n.x - this.object.position.x, n.y - this.object.position.y, n.z - this.object.position.z);
                            Object(S.j)(a), Object(S.i)(a, 10 * t), this.object.position.set(r.x + a.x, r.y + a.y, r.z + a.z), this.object.updateMatrix()
                        }
                    }
                } else void 0 !== this._itemModel && (this._time += t, this._itemModel.position.set(0, Math.cos(this._time) * (l.a.BLOCK_SIZE / 32), 0), this._itemModel.updateMatrix(), this.object.updateMatrix())
            }, i.cleanUp = function () {
                void 0 !== this._itemModel && (this.object.remove(this._itemModel), k.a.cleanUpModelExcludeMaterial(this._itemModel), this._itemModel = void 0), void 0 !== this._itemModelOutline && (this.object.remove(this._itemModelOutline), k.a.cleanUpModelExcludeMaterial(this._itemModelOutline), this._itemModelOutline = void 0)
            }, i.setItemType = function () {
                var t = o()(r.a.mark((function t(e) {
                    var i, n, s, a;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return (i = Object(nt.c)(e)).setSkin(this._itemSkinType, this._itemSkinSeed), t.next = 4, i.generateEntityModel(!1);
                            case 4:
                                n = t.sent, k.a.removeFog(n), this.cleanUp(), this._item = i, this._itemModel = n, this.object.add(this._itemModel), s = new h.Y({
                                    map: k.a.itemGlowTexture,
                                    color: Object(Mt.b)(this._item.itemTier),
                                    transparent: !0,
                                    opacity: .9,
                                    side: h.r,
                                    depthWrite: !1,
                                    fog: !1
                                }), a = new h.kb(1, 1, 1, 1), this._itemModelOutline = new h.X(a, s), this._itemModelOutline.position.set(this._itemModel.position.x, this._itemModel.position.y - .08, this._itemModel.position.z), this._itemModelOutline.scale.set(.5, .5, .5), this._itemModelOutline.rotation.set(-Math.PI / 2, 0, 0), this.object.add(this._itemModelOutline);
                            case 17:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));
                return function (e) {
                    return t.apply(this, arguments)
                }
            }(), _()(e, [{
                key: "item", get: function () {
                    return this._item
                }
            }, {
                key: "count", get: function () {
                    return this._itemCount
                }
            }, {
                key: "itemPickupTarget", get: function () {
                    return this._itemPickupTarget
                }
            }, {
                key: "position", set: function (t) {
                    this._stableY = t.y, this.object.position.set(t.x, t.y, t.z), this.object.updateMatrix()
                }
            }, {
                key: "pitchYaw", set: function (t) {
                }
            }]), e
        }(pt), Jt = i(157);

        function Xt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return $t(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return $t(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function $t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var te, ee = function (t) {
            function e(e, i) {
                var n;
                (n = t.call(this, i, St.SPRAY, e) || this)._spray = void 0;
                var s = new h.kb, r = new h.Y({transparent: !0, depthWrite: !1});
                return n._spray = new h.X(s, r), n.object.add(n._spray), n
            }

            it()(e, t);
            var i = e.prototype;
            return i.onUpdateMetadata = function (t) {
                for (var e, i = Xt(t); !(e = i()).done;) {
                    var n = e.value;
                    switch (n.metadataType) {
                        case ft.SPRAY_ROTATION:
                            var s = n.value;
                            this.object.rotateOnWorldAxis(new h.Ob(0, 1, 0), s);
                            break;
                        case ft.SPRAY_TYPE:
                            var r = void 0;
                            if (n.value === Jt.a.VOXIOM_LOGO && (r = k.a.getSprayTexture(Jt.a.VOXIOM_LOGO)), r) {
                                this._spray.material.map = r, this._spray.material.needsUpdate = !0;
                                var a = r.image.width, o = r.image.height;
                                a > o ? this._spray.scale.set(.8, o / a * .8, 1) : this._spray.scale.set(a / o * .8, .8, 1)
                            }
                    }
                }
            }, i.render = function (t, e) {
            }, i.cleanUp = function () {
                k.a.cleanUpModelExcludeMaterial(this._spray)
            }, _()(e, [{
                key: "position", set: function (t) {
                    this.object.position.set(t.x, t.y, t.z), this.object.updateMatrix()
                }
            }, {
                key: "pitchYaw", set: function (t) {
                    var e = Object(X.d)(t),
                        i = (new h.W).lookAt(new h.Ob(e.x, e.y, e.z), new h.Ob(0, 0, 0), new h.Ob(0, 1, 0));
                    this._spray.setRotationFromMatrix(i)
                }
            }]), e
        }(pt), ie = function () {
            function t(t) {
                var e = this;
                this._sceneRenderer = t, this._wrapper = void 0, this._worldUpdates = void 0, this._entities = void 0, this.onWorldUpdateReceived = function (t) {
                    e._worldUpdates.push(t)
                }, this.onEntityCreate = function (t, i) {
                    e.spawnEntity(t, i)
                }, this.onEntityDestroy = function (t) {
                    e.removeEntity(t)
                }, this.onEntityAction = function (t, i) {
                    e.hasEntity(t) ? e.getEntity(t).onEntityAction(i) : console.error("Invalid entity action command!")
                }, this.onEntityUpdateMetadata = function (t, i) {
                    var n = e.getEntity(t);
                    void 0 !== n && n.onUpdateMetadata(i)
                }, this.onEntityDamage = function (t, i, n, s, r, a) {
                    var o = e._entities[t];
                    void 0 !== o && o.onEntityDamage(i, n, r)
                }, this.onRespawn = function (t, i, n) {
                    if (t !== Object(y.a)()) {
                        var s = e.getEntity(t);
                        if (void 0 !== s) {
                            var r = s;
                            r.previousLerpPosition = i, r.previousLerpDirection = n, r.position = i, r.pitchYaw = n, r.firstSetPos = !0, r.show()
                        }
                    } else e._worldUpdates = []
                }, this.update = function (t) {
                    window.lineDisplay = []
                    window.lenLine = 0;
                    document.getElementById("listPlayersV").innerHTML = "";
                    for (var i = 0, n = Object.values(e._entities); i < n.length; i++) {
                        n[i].update(t)

                        // #ListPlayer
                        if (listPlayerValue && n[i]._activeItem != null && n[i].isAlive) {
                            // this.playerPos
                            document.getElementById("listPlayersV").innerHTML += "" +
                                "<div>" +
                                "[" + Math.round(getDistance3D(window.playerPos.physicsStep.pos.x, window.playerPos.physicsStep.pos.y, window.playerPos.physicsStep.pos.z, n[i]._previousLerpPosition.x, n[i]._previousLerpPosition.y, n[i]._previousLerpPosition.z)) + "] " +
                                n[i].name +
                                " " + Math.round(n[i]._previousLerpPosition.x) +
                                " " + Math.round(n[i]._previousLerpPosition.y) +
                                " " + Math.round(n[i]._previousLerpPosition.z) +
                                "</div>";
                        }
                        // #Tracer
                        if (n[i]._activeItem != null && n[i].isAlive) {
                            window.prova1 = n[i];
                            var value = world2Screen(n[i]._wrapper);
                            if (value != null) {
                                lineDisplay.push({
                                    "x1": innerWidth / 2,
                                    "y1": innerHeight / 2 + innerHeight / 3,
                                    "x2": value.x,
                                    "y2": value.y,
                                    "width": 2,
                                    "color": "#FF4444"
                                });
                                window.lenLine++;
                            }
                        }

                    }
                }, this._wrapper = new h.hb, this._worldUpdates = [], this._entities = {}, this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                d.a.on(p.a.WORLD_UPDATE_RECEIVED, this.onWorldUpdateReceived), d.a.on(p.a.ENTITY_CREATE, this.onEntityCreate), d.a.on(p.a.ENTITY_ACTION, this.onEntityAction), d.a.on(p.a.ENTITY_DESTROY, this.onEntityDestroy), d.a.on(p.a.ENTITY_UPDATE_METADATAS, this.onEntityUpdateMetadata), d.a.on(p.a.ENTITY_DAMAGE, this.onEntityDamage), d.a.on(p.a.RESPAWN, this.onRespawn)
            }, e.unbindEvents = function () {
                d.a.off(p.a.WORLD_UPDATE_RECEIVED, this.onWorldUpdateReceived), d.a.off(p.a.ENTITY_CREATE, this.onEntityCreate), d.a.off(p.a.ENTITY_ACTION, this.onEntityAction), d.a.off(p.a.ENTITY_DESTROY, this.onEntityDestroy), d.a.off(p.a.ENTITY_UPDATE_METADATAS, this.onEntityUpdateMetadata), d.a.off(p.a.ENTITY_DAMAGE, this.onEntityDamage), d.a.off(p.a.RESPAWN, this.onRespawn)
            }, e.cleanUp = function () {
                this.unbindEvents();
                for (var t = 0, e = Object.values(this._entities); t < e.length; t++) {
                    e[t].cleanUp()
                }
            }, e.render = function (t, e) {
                for (var i, n, s = Date.now() - 100; this._worldUpdates.length >= 2 && s >= this._worldUpdates[0].clientTimestamp;) {
                    i = this._worldUpdates[0];
                    for (var r = (n = this._worldUpdates[1]).clientTimestamp - s, a = n.clientTimestamp - i.clientTimestamp, o = n.clientTimestamp <= s ? 0 : r / a, h = 0, c = Object.values(this._entities); h < c.length; h++) {
                        var _ = c[h], l = i.entitySnapshots.get(_.id), u = n.entitySnapshots.get(_.id);
                        _.processSnapshots(l, u, o)
                    }
                    if (!(this._worldUpdates.length > 2 && n.clientTimestamp <= s)) break;
                    this._worldUpdates.shift()
                }
                for (var d = 0, p = Object.values(this._entities); d < p.length; d++) {
                    p[d].render(t, e)
                }
            }, e.getInterpolatedWorldTick = function () {
                if (0 === this._worldUpdates.length) return -1;
                for (var t = Date.now() - 100, e = 0, i = this._worldUpdates.length - 1, n = -1; e <= i;) {
                    var s = Math.floor((e + i) / 2);
                    this._worldUpdates[s].clientTimestamp > t ? i = s - 1 : (n = s, e = s + 1)
                }
                if (-1 === n) return this._worldUpdates[0].tick;
                var r = n, a = r < this._worldUpdates.length - 1 ? r + 1 : r,
                    o = r === a ? 0 : (t - this._worldUpdates[r].clientTimestamp) / (this._worldUpdates[a].clientTimestamp - this._worldUpdates[r].clientTimestamp);
                return Object(M.c)(this._worldUpdates[r].tick, this._worldUpdates[a].tick, o)
            }, e.spawnEntity = function (t, e) {
                if (this.hasEntity(t)) console.error("Duplicate entity spawn command!", t, St[e]); else switch (e) {
                    case St.PLAYER:
                        var i = new Ct(this, t);
                        this._wrapper.add(i.object), this._entities[t] = i;
                        break;
                    case St.ITEM:
                        var n = new Qt(this, t);
                        this._wrapper.add(n.object), this._entities[t] = n;
                        break;
                    case St.SPRAY:
                        var s = new ee(this, t);
                        this._wrapper.add(s.object), this._entities[t] = s
                }
            }, e.removeEntity = function (t) {
                if (this.hasEntity(t)) {
                    var e = this.getEntity(t);
                    this._wrapper.remove(e.object), e.cleanUp(), this.deleteEntity(t)
                } else console.error("Invalid entity remove command!", t)
            }, e.getEntity = function (t) {
                return this._entities[t]
            }, e.deleteEntity = function (t) {
                delete this._entities[t]
            }, e.hasEntity = function (t) {
                return void 0 !== this._entities[t]
            }, e.getEntities = function () {
                return Object.values(this._entities)
            }, _()(t, [{
                key: "object", get: function () {
                    return this._wrapper
                }
            }, {
                key: "sceneRenderer", get: function () {
                    return this._sceneRenderer
                }
            }]), t
        }(), ne = function () {
            function t(t) {
                this._sceneRenderer = t, this._wrapper = void 0, this._bullets = void 0, this.update = function (t) {
                }, this._wrapper = new h.hb, this._bullets = [], this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
            }, e.unbindEvents = function () {
            }, e.addBullet = function (t, e, i) {
                void 0 === i && (i = 0);
                var n = new h.j(.05, .05, .3), s = new h.Y({color: 16775068}), r = new h.X(n, s);
                Object(S.j)(e), r.position.set(t.x + 1 * e.x, t.y + 1 * e.y, t.z + 1 * e.z);
                var a = Math.random() * i, o = Math.random() * Math.PI * 2,
                    c = Object(S.l)(Math.cos(o) * a, Math.sin(o) * a, l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE),
                    _ = new h.qb;
                _.setFromUnitVectors(new h.Ob(0, 0, 1), new h.Ob(e.x, e.y, e.z));
                var u = new h.Ob(c.x, c.y, c.z).applyQuaternion(_);
                r.rotation.setFromQuaternion(_);
                var d = Object(S.l)(u.x, u.y, u.z);
                Object(S.j)(d);
                var p = Object(S.b)(d);
                Object(S.i)(p, 100);
                var v = Object(S.b)(t);
                Object(S.f)(v, l.a.BLOCK_SIZE);
                var y = this._sceneRenderer.controlsRenderer.controls.voxelRaycast(v, d, 1e3), g = 1e6;
                y.hit && (Object(S.i)(y.position, l.a.BLOCK_SIZE), g = Object(S.e)(y.position, t)), this._wrapper.add(r), this._bullets.push({
                    mesh: r,
                    origin: t,
                    velocity: p,
                    maxDistSqr: g
                })
            }, e.cleanUp = function () {
                this.unbindEvents();
                for (var t = 0; t < this._bullets.length; t++) this._wrapper.remove(this._bullets[t].mesh), this._bullets[t].mesh.geometry.dispose(), this._bullets[t].mesh.material.dispose();
                this._bullets = []
            }, e.render = function (t, e) {
                for (var i = 0; i < this._bullets.length; i++) {
                    var n = this._bullets[i], s = n.mesh.position;
                    n.mesh.position.set(s.x + n.velocity.x * t, s.y + n.velocity.y * t, s.z + n.velocity.z * t), s.distanceToSquared(new h.Ob(n.origin.x, n.origin.y, n.origin.z)) > n.maxDistSqr && (this._wrapper.remove(n.mesh), n.mesh.geometry.dispose(), n.mesh.material.dispose(), this._bullets[i] = this._bullets[this._bullets.length - 1], this._bullets.pop(), --i)
                }
            }, _()(t, [{
                key: "object", get: function () {
                    return this._wrapper
                }
            }]), t
        }(), se = function () {
            function t(t) {
                var e = this;
                this._sceneRenderer = t, this._wrapper = void 0, this._lastSyncTime = void 0, this._updatePosCounter = void 0, this._lerpedPosition = void 0, this._lerpedRadius = void 0, this._currPosition = void 0, this._currRadius = void 0, this._nextPosition = void 0, this._nextRadius = void 0, this._prepTime = void 0, this._shrinkTime = void 0, this._currentCircleMesh = void 0, this.onGameJoin = function (t, i, n, s, r, a, o) {
                    for (var c = new Float32Array(768), _ = new Uint16Array(384), l = new Float32Array(512), u = 0; u < 64; u++) {
                        var d = 1 * Math.cos(u / 64 * Math.PI * 2), p = 1 * Math.sin(u / 64 * Math.PI * 2),
                            v = 1 * Math.cos((u + 1) / 64 * Math.PI * 2), S = 1 * Math.sin((u + 1) / 64 * Math.PI * 2);
                        c[12 * u + 0] = d, c[12 * u + 1] = 0, c[12 * u + 2] = p, c[12 * u + 3] = d, c[12 * u + 4] = 150, c[12 * u + 5] = p, c[12 * u + 6] = v, c[12 * u + 7] = 0, c[12 * u + 8] = S, c[12 * u + 9] = v, c[12 * u + 10] = 150, c[12 * u + 11] = S, l[8 * u + 0] = 0, l[8 * u + 1] = 0, l[8 * u + 2] = 0, l[8 * u + 3] = 300, l[8 * u + 4] = 2, l[8 * u + 5] = 0, l[8 * u + 6] = 2, l[8 * u + 7] = 300, _[6 * u + 0] = 4 * u, _[6 * u + 1] = 4 * u + 1, _[6 * u + 2] = 4 * u + 2, _[6 * u + 3] = 4 * u + 2, _[6 * u + 4] = 4 * u + 1, _[6 * u + 5] = 4 * u + 3
                    }
                    var y = new h.l;
                    y.setAttribute("position", new h.v(c, 3)), y.setIndex(new h.Lb(_, 1)), y.setAttribute("uv", new h.v(l, 2));
                    var g = new h.Y({map: k.a.toxicCircleTexture, transparent: !0, opacity: .6, side: h.r});
                    e._currentCircleMesh = new h.X(y, g), e._wrapper.add(e._currentCircleMesh)
                }, this.onToxicCircleInfoSync = function (t, i, n, s, r, a) {
                    e._currPosition = t, e._currRadius = i, e._lerpedPosition = Object(X.a)(t), e._lerpedRadius = i, e._nextPosition = n, e._nextRadius = s, e._prepTime = r, e._shrinkTime = a, e._lastSyncTime = Date.now()
                }, this.update = function (t) {
                    if (++e._updatePosCounter % Math.floor(Object(z.c)(.05)) == 0) {
                        var i = Date.now();
                        Math.max(0, e._prepTime - (i - e._lastSyncTime) / 1e3), Math.max(0, e._shrinkTime + e._prepTime - (i - e._lastSyncTime) / 1e3);
                        if (i - e._lastSyncTime >= 1e3 * e._prepTime) {
                            var n = Math.max(0, Math.min(1, (i - e._lastSyncTime - 1e3 * e._prepTime) / (1e3 * e._shrinkTime)));
                            e._lerpedPosition.x = Object(M.c)(e._currPosition.x, e._nextPosition.x, n), e._lerpedPosition.y = Object(M.c)(e._currPosition.y, e._nextPosition.y, n), e._lerpedRadius = Object(M.c)(e._currRadius, e._nextRadius, n), void 0 !== e._currentCircleMesh && (e._currentCircleMesh.scale.set(e._lerpedRadius, 1, e._lerpedRadius), e._currentCircleMesh.position.set(e._lerpedPosition.x, 0, e._lerpedPosition.y))
                        }
                    }
                }, this._wrapper = new h.hb, this._lerpedPosition = Object(X.e)(0, 0), this._lerpedRadius = 1200, this._currPosition = Object(X.e)(0, 0), this._currRadius = 1200, this._nextPosition = Object(X.e)(0, 0), this._nextRadius = 1200, this._prepTime = 0, this._shrinkTime = 0, this._lastSyncTime = 0, this._updatePosCounter = 0, this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin), d.a.on(p.a.TOXIC_CIRCLE_INFO_SYNC, this.onToxicCircleInfoSync)
            }, e.unbindEvents = function () {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin), d.a.off(p.a.TOXIC_CIRCLE_INFO_SYNC, this.onToxicCircleInfoSync)
            }, e.isInCircle = function (t) {
                return Object(X.b)(t, this._lerpedPosition) <= this._lerpedRadius * this._lerpedRadius
            }, e.render = function (t, e) {
            }, _()(t, [{
                key: "currPosition", get: function () {
                    return this._lerpedPosition
                }
            }, {
                key: "currRadius", get: function () {
                    return this._lerpedRadius
                }
            }, {
                key: "nextPosition", get: function () {
                    return this._nextPosition
                }
            }, {
                key: "nextRadius", get: function () {
                    return this._nextRadius
                }
            }, {
                key: "object", get: function () {
                    return this._wrapper
                }
            }]), t
        }(), re = function () {
            function t(t) {
                var e = this;
                this._sceneRenderer = t, this._wrapper = void 0, this._miniMap = void 0, this._minimapMat = void 0, this._mapTexture = void 0, this._isTabMapVisible = void 0, this._fullMap = void 0, this._fullMapMat = void 0, this._fullMapPlayerCursor = void 0, this.onMinimapData = function (t) {
                    var i = new Image;
                    i.src = "data:image/png;base64," + t, i.onload = function () {
                        e._mapTexture.image = i, e._mapTexture.needsUpdate = !0
                    }
                }, this.unitToMapPercent = function (t) {
                    return t / ((e._sceneRenderer.terrainRenderer.chunkStorageManager.maxChunkPos.x - e._sceneRenderer.terrainRenderer.chunkStorageManager.minChunkPos.x + 1) * l.a.CHUNK_SIZE * l.a.BLOCK_SIZE) * 100
                }, this.coordsToMapPercent = function (t) {
                    return e.unitToMapPercent(t - e._sceneRenderer.terrainRenderer.chunkStorageManager.minChunkPos.x * l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)
                }, this.update = function (t) {
                    var i = e._sceneRenderer.controlsRenderer.controls.playerState;
                    if (void 0 !== i) {
                        var n = Object(y.o)();
                        n !== e._isTabMapVisible && (e._isTabMapVisible = n, e._fullMap.visible = e._isTabMapVisible, e._fullMapPlayerCursor.visible = e._isTabMapVisible, e._miniMap.visible = !e._isTabMapVisible);
                        var s = e._sceneRenderer.controlsRenderer.controls.getPitchYaw().y,
                            r = e.coordsToMapPercent(i.physicsStep.pos.x) / 100,
                            a = 1 - e.coordsToMapPercent(i.physicsStep.pos.z) / 100,
                            o = e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.currPosition.x) / 100,
                            h = 1 - e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.currPosition.y) / 100,
                            c = e.unitToMapPercent(e._sceneRenderer.toxicFogRenderer.currRadius) / 100,
                            _ = e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.nextPosition.x) / 100,
                            l = 1 - e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.nextPosition.y) / 100,
                            u = e.unitToMapPercent(e._sceneRenderer.toxicFogRenderer.nextRadius) / 100;
                        e._isTabMapVisible ? (e._fullMapMat.uniforms.currCirclePos.value.set(o, h), e._fullMapMat.uniforms.currCircleRadius.value = c, e._fullMapMat.uniforms.nextCirclePos.value.set(_, l), e._fullMapMat.uniforms.nextCircleRadius.value = u) : (e._minimapMat.uniforms.currCirclePos.value.set(o, h), e._minimapMat.uniforms.currCircleRadius.value = c, e._minimapMat.uniforms.nextCirclePos.value.set(_, l), e._minimapMat.uniforms.nextCircleRadius.value = u, e._minimapMat.uniforms.playerPos.value.set(r, a), e._minimapMat.uniforms.playerDir.value = s)
                    }
                }, this._wrapper = new h.hb, this._isTabMapVisible = !1, this._mapTexture = new h.Hb;
                var i = new h.kb(1, 1);
                this._minimapMat = new h.wb({
                    uniforms: {
                        map: {value: this._mapTexture},
                        playerPos: {value: new h.Nb},
                        playerDir: {value: 0},
                        currCirclePos: {value: new h.Nb},
                        currCircleRadius: {value: 0},
                        nextCirclePos: {value: new h.Nb},
                        nextCircleRadius: {value: 0}
                    },
                    vertexShader: "\n                varying vec2 vUv;\n\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vUv = uv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n                uniform vec2 playerPos;\n                uniform float playerDir;\n\n                uniform vec2 currCirclePos;\n                uniform float currCircleRadius;\n\n                uniform vec2 nextCirclePos;\n                uniform float nextCircleRadius;\n\n                varying vec2 vUv;\n\n                float inverselerpstep(float a, float b, float x) {\n                    return step(0.9999, (x - a) / (b - a));\n                }\n\n                void main() {\n                    vec4 diffuseColor = vec4(0.204, 0.549, 0.925, 1.0);\n\n                    float circleOutlineWidth = 0.001;\n                    float scale = 6.0;\n                    mat2 rotMat = mat2(cos(playerDir), sin(playerDir), -sin(playerDir), cos(playerDir)); \n\n                    // scale\n                    vec2 mapUv = vec2(\n                        (vUv.x - 0.5) / scale,\n                        (vUv.y - 0.5) / scale\n                    );\n\n                    // rotate\n                    mapUv = rotMat * mapUv;\n\n                    // translate\n                    mapUv.x += playerPos.x;\n                    mapUv.y += playerPos.y;\n\n                    float currCircleDx = mapUv.x - currCirclePos.x;\n                    float currCircleDy = mapUv.y - currCirclePos.y;\n                    float currCircleDist = sqrt(currCircleDx * currCircleDx + currCircleDy * currCircleDy);\n\n                    float nextCircleDx = mapUv.x - nextCirclePos.x;\n                    float nextCircleDy = mapUv.y - nextCirclePos.y;\n                    float nextCircleDist = sqrt(nextCircleDx * nextCircleDx + nextCircleDy * nextCircleDy);\n\n                    vec4 mapColor = texture2D(map, mapUv);\n                    \n                    float currCircle = smoothstep(0.0, circleOutlineWidth, abs(currCircleDist - currCircleRadius));\n                    float nextCircle = smoothstep(0.0, circleOutlineWidth, abs(nextCircleDist - nextCircleRadius));\n                    float outsideCurrCircle = 1.0 - inverselerpstep(0.0, currCircleRadius, currCircleDist - circleOutlineWidth);\n\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), mapColor, currCircle);\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), diffuseColor, nextCircle);\n                    diffuseColor = mix(mix(diffuseColor, vec4(1.0, 0.0, 0.0, 0.0), 0.4), diffuseColor, outsideCurrCircle);\n\n                    gl_FragColor = diffuseColor;\n                }\n            "
                }), this._miniMap = new h.X(i, this._minimapMat), this._wrapper.add(this._miniMap);
                var n = new h.kb(1, 1);
                this._fullMapMat = new h.wb({
                    uniforms: {
                        map: {value: this._mapTexture},
                        currCirclePos: {value: new h.Nb},
                        currCircleRadius: {value: 0},
                        nextCirclePos: {value: new h.Nb},
                        nextCircleRadius: {value: 0}
                    },
                    vertexShader: "\n                varying vec2 vUv;\n\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vUv = uv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n\n                uniform vec2 currCirclePos;\n                uniform float currCircleRadius;\n\n                uniform vec2 nextCirclePos;\n                uniform float nextCircleRadius;\n\n                varying vec2 vUv;\n\n                float inverselerpstep(float a, float b, float x) {\n                    return step(0.9999, (x - a) / (b - a));\n                }\n\n                void main() {\n                    vec4 diffuseColor = vec4(0.204, 0.549, 0.925, 1.0);\n\n                    float circleOutlineWidth = 0.002;\n                    float scale = 1.0;\n\n                    float currCircleDx = vUv.x - currCirclePos.x;\n                    float currCircleDy = vUv.y - currCirclePos.y;\n                    float currCircleDist = sqrt(currCircleDx * currCircleDx + currCircleDy * currCircleDy);\n\n                    float nextCircleDx = vUv.x - nextCirclePos.x;\n                    float nextCircleDy = vUv.y - nextCirclePos.y;\n                    float nextCircleDist = sqrt(nextCircleDx * nextCircleDx + nextCircleDy * nextCircleDy);\n\n                    vec4 mapColor = texture2D(map, vUv);\n                    \n                    float currCircle = smoothstep(0.0, circleOutlineWidth, abs(currCircleDist - currCircleRadius));\n                    float nextCircle = smoothstep(0.0, circleOutlineWidth, abs(nextCircleDist - nextCircleRadius));\n                    float outsideCurrCircle = 1.0 - inverselerpstep(0.0, currCircleRadius, currCircleDist - circleOutlineWidth);\n\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), mapColor, currCircle);\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), diffuseColor, nextCircle);\n                    diffuseColor = mix(mix(diffuseColor, vec4(1.0, 0.0, 0.0, 0.0), 0.4), diffuseColor, outsideCurrCircle);\n\n                    gl_FragColor = diffuseColor;\n                }\n            "
                }), this._fullMap = new h.X(n, this._fullMapMat), this._fullMap.visible = !1, this._fullMap.position.set(0, 0, -1), this._wrapper.add(this._fullMap);
                var s = new h.kb(1, 1), r = new h.Y({map: k.a.playerCursorTexture, transparent: !0});
                this._fullMapPlayerCursor = new h.X(s, r), this._fullMapPlayerCursor.visible = !1, this._wrapper.add(this._fullMapPlayerCursor), this.bindEvents()
            }

            var e = t.prototype;
            return e.bindEvents = function () {
                d.a.on(p.a.MINIMAP_DATA, this.onMinimapData)
            }, e.unbindEvents = function () {
            }, e.cleanUp = function () {
                this.unbindEvents()
            }, e.render = function (t, e) {
                if (this._isTabMapVisible) {
                    var i = this._sceneRenderer.controlsRenderer.controls.playerState;
                    if (void 0 === i) return;
                    var n = 700 * this._sceneRenderer.canvasRenderer.scale,
                        s = 700 * this._sceneRenderer.canvasRenderer.scale;
                    this._fullMap.scale.set(n, s, 1);
                    var r = 30 * this._sceneRenderer.canvasRenderer.scale,
                        a = 30 * this._sceneRenderer.canvasRenderer.scale,
                        o = this._sceneRenderer.controlsRenderer.controls.getPitchYaw().y,
                        h = this.coordsToMapPercent(i.physicsStep.pos.x) / 100,
                        c = 1 - this.coordsToMapPercent(i.physicsStep.pos.z) / 100;
                    this._fullMapPlayerCursor.position.set(-n / 2 + h * n, -s / 2 + c * n, -1), this._fullMapPlayerCursor.scale.set(r, a, 1), this._fullMapPlayerCursor.rotation.set(0, 0, o)
                } else {
                    var _ = 200 * this._sceneRenderer.canvasRenderer.scale,
                        l = 200 * this._sceneRenderer.canvasRenderer.scale;
                    this._miniMap.position.set(-window.innerWidth / 2 + 121 * this._sceneRenderer.canvasRenderer.scale, window.innerHeight / 2 - 121 * this._sceneRenderer.canvasRenderer.scale, -1), this._miniMap.scale.set(_, l, 1)
                }
            }, _()(t, [{
                key: "object", get: function () {
                    return this._wrapper
                }
            }]), t
        }(), ae = function () {
            function t(t, e, i) {
                var n = this;
                this._settings = t, this._canvasRenderer = e, this._statsRenderer = i, this._ambientLight = void 0, this._hemisphereLight = void 0, this._directionalLight = void 0, this._frontPointLight = void 0, this._terrainRenderer = void 0, this._controlsRenderer = void 0, this._entitiesRenderer = void 0, this._bulletsRenderer = void 0, this._toxicCircleRenderer = void 0, this._gameHudRenderer = void 0, this._lights = void 0, this.update = function (t) {
                    n._terrainRenderer.update(t), n._controlsRenderer.update(t), n._bulletsRenderer.update(t), n._entitiesRenderer.update(t), n._toxicCircleRenderer.update(t), n._gameHudRenderer.update(t)
                }, this.render = function (t, e) {
                    n._terrainRenderer.render(t, e), n._entitiesRenderer.render(t, e), n._controlsRenderer.render(t, e), n._bulletsRenderer.render(t, e), n._toxicCircleRenderer.render(t, e), n._gameHudRenderer.render(t, e)
                }, this._lights = [], this._ambientLight = new h.a(16777215, .1), this.addLight(this._ambientLight), this.scene.fog = new h.w(l.a.SKY_CLEAR_COLOR, 60, 70), this._canvasRenderer.frontScene.fog = new h.w(l.a.SKY_CLEAR_COLOR, 60, 70), this._hemisphereLight = new h.z(16777215, 16777215, .3), this.addLight(this._hemisphereLight), this._directionalLight = new h.q(16777215, .5), this._directionalLight.position.set(1, 1, 1), this.addLight(this._directionalLight), this._frontPointLight = new h.lb(16777215, .1), this._frontPointLight.position.set(-1, 1, -1), this.addLight(this._frontPointLight), this._terrainRenderer = new Y(this._settings, this._canvasRenderer.camera, this, this._statsRenderer), this.scene.add(this._terrainRenderer.object), this._entitiesRenderer = new ie(this), this.scene.add(this._entitiesRenderer.object), this._bulletsRenderer = new ne(this), this.scene.add(this._bulletsRenderer.object), this._controlsRenderer = new Vt(this._settings, this._canvasRenderer, this, this._statsRenderer), this._toxicCircleRenderer = new se(this), this.scene.add(this._toxicCircleRenderer.object), this._gameHudRenderer = new re(this), this._canvasRenderer.uiScene.add(this._gameHudRenderer.object)
            }

            var e = t.prototype;
            return e.addLight = function (t) {
                var e = t.clone();
                this._canvasRenderer.scene.add(t), this._canvasRenderer.frontScene.add(e), this._lights.push(t), this._lights.push(e)
            }, e.removeLights = function () {
                for (var t = 0; t < this._lights.length; t++) this._canvasRenderer.scene.remove(this._lights[t]), this._canvasRenderer.frontScene.remove(this._lights[t]);
                this._lights = []
            }, e.cleanUp = function () {
                this.removeLights(), this.scene.fog = null, this.scene.remove(this._terrainRenderer.object), this.scene.remove(this._entitiesRenderer.object), this.scene.remove(this._bulletsRenderer.object), this._terrainRenderer.cleanUp(), this._entitiesRenderer.cleanUp(), this._controlsRenderer.cleanUp(), this._bulletsRenderer.cleanUp()
            }, _()(t, [{
                key: "scene", get: function () {
                    return this._canvasRenderer.scene
                }
            }, {
                key: "terrainRenderer", get: function () {
                    return this._terrainRenderer
                }
            }, {
                key: "entitiesRenderer", get: function () {
                    return this._entitiesRenderer
                }
            }, {
                key: "controlsRenderer", get: function () {
                    return this._controlsRenderer
                }
            }, {
                key: "bulletsRenderer", get: function () {
                    return this._bulletsRenderer
                }
            }, {
                key: "toxicFogRenderer", get: function () {
                    return this._toxicCircleRenderer
                }
            }, {
                key: "canvasRenderer", get: function () {
                    return this._canvasRenderer
                }
            }, {
                key: "gameHudRenderer", get: function () {
                    return this._gameHudRenderer
                }
            }]), t
        }(), oe = i(351), he = function () {
            function t(t, e, i) {
                this._config = t, this._canvasRenderer = e, this._sceneRenderer = i, this._gui = void 0, this.initialize()
            }

            var e = t.prototype;
            return e.cleanUp = function () {
                this._gui && this._gui.destroy()
            }, e.initialize = function () {
                this._gui = new oe.a, this._gui.remember(this._config)
            }, e.initializeDynamicArraySettings = function (t, e, i, n, s, r, a, o, h) {
                var c = this, _ = this._gui.addFolder(t), l = "num" + t, u = _.add(s, l).min(e).max(i).step(n);
                if (this._gui.__rememberedObjects && this._gui.__rememberedObjects.length > 0 && this._gui.__rememberedObjects[0][l]) {
                    for (; s[r].length < this._gui.__rememberedObjects[0][l];) a();
                    s[r].length = this._gui.__rememberedObjects[0][l]
                }
                for (var d = [], p = 1; p <= s[r].length; p++) {
                    var v = _.addFolder(t + " " + p);
                    d.push(v), this._gui.remember(s[r][p - 1]), o(v, s[r][p - 1]), v.__controllers.forEach((function (t) {
                        t.onChange((function (t) {
                            h(t)
                        }))
                    }))
                }
                u.onChange((function (e) {
                    var i = s[r].length;
                    if (i < e) for (; s[r].length < e;) {
                        a();
                        var n = s[r].length, l = _.addFolder(t + " " + n);
                        d.push(l), c._gui.remember(s[r][n - 1]), o(l, s[r][n - 1]), l.__controllers.forEach((function (t) {
                            t.onChange((function (t) {
                                h(t)
                            }))
                        }))
                    } else if (i > e) {
                        for (var u = d.length - 1; u >= e; u--) _.removeFolder(d[u]);
                        d.length = e, s[r].length = e
                    }
                    h(e)
                }))
            }, t
        }(), ce = i(352), _e = function () {
            function t(t) {
                var e = this;
                this._settings = t, this._canvasRenderer = void 0, this._statsRenderer = void 0, this._sceneRenderer = void 0, this._editorRenderer = void 0, this._prevFrameTime = void 0, this._animationFrameID = void 0, this._timeAccumulator = void 0, this.render = function (t) {
                    var i = Math.min(t - e._prevFrameTime, 50) / 1e3;
                    for (e._animationFrameID = requestAnimationFrame(e.render), e._prevFrameTime = t, e._timeAccumulator += i; e._timeAccumulator >= l.a.PHYSICS_TIME_STEP;) e._timeAccumulator -= l.a.PHYSICS_TIME_STEP, e.update(l.a.PHYSICS_TIME_STEP);
                    ce.a.update(t), e._canvasRenderer.render(i, e._timeAccumulator), e._sceneRenderer.render(i, e._timeAccumulator), e._statsRenderer.update()
                }, this.update = function (t) {
                    e._sceneRenderer.update(t)
                }, this.loadEditor = function () {
                    e._editorRenderer && e._editorRenderer.cleanUp(), e._editorRenderer = new he(e._settings, e._canvasRenderer, e._sceneRenderer)
                }, this._canvasRenderer = new u(this._settings, "canvas"), this._statsRenderer = new g, this.rebuildScene(), this._timeAccumulator = 0, this._prevFrameTime = 0, this._animationFrameID = requestAnimationFrame(this.render)
            }

            var e = t.prototype;
            return e.rebuildScene = function () {
                this._sceneRenderer && this._sceneRenderer.cleanUp(), this._canvasRenderer.rebuildScene(), this._sceneRenderer = new ae(this._settings, this._canvasRenderer, this._statsRenderer)
            }, e.cancelUpdate = function () {
                cancelAnimationFrame(this._animationFrameID)
            }, _()(t, [{
                key: "canvasRenderer", get: function () {
                    return this._canvasRenderer
                }
            }, {
                key: "statsRenderer", get: function () {
                    return this._statsRenderer
                }
            }, {
                key: "sceneRenderer", get: function () {
                    return this._sceneRenderer
                }
            }, {
                key: "editorRenderer", get: function () {
                    return this._editorRenderer
                }
            }, {
                key: "config", get: function () {
                    return this._settings
                }
            }]), t
        }(), le = i(47), ue = i(137), de = i(31), pe = i(92);
        !function (t) {
            t[t.ITEM = 0] = "ITEM", t[t.FALL = 1] = "FALL", t[t.FOG = 2] = "FOG", t[t.VOID = 3] = "VOID", t[t.CACTUS = 4] = "CACTUS", t[t.SPAWN_PROTECTION = 5] = "SPAWN_PROTECTION"
        }(te || (te = {}));
        var ve, Se = te;
        !function (t) {
            t[t.NUM_PLAYERS_REMAIN = 0] = "NUM_PLAYERS_REMAIN", t[t.CLIENT_NUM_KILLS = 1] = "CLIENT_NUM_KILLS", t[t.TOTAL_NUM_PLAYERS = 2] = "TOTAL_NUM_PLAYERS", t[t.TIME_ALIVE = 3] = "TIME_ALIVE", t[t.TIMER = 4] = "TIMER", t[t.XP_GAINED = 5] = "XP_GAINED", t[t.ELIMINATED_BY = 6] = "ELIMINATED_BY", t[t.SHOW_TEAM_SCORE_PANEL = 7] = "SHOW_TEAM_SCORE_PANEL", t[t.SHOW_FFA_SCORE_PANEL = 8] = "SHOW_FFA_SCORE_PANEL", t[t.SHOW_MINIMAP_STATS_PANEL = 9] = "SHOW_MINIMAP_STATS_PANEL", t[t.TAB_SHOW_PLAYER_SCORE = 10] = "TAB_SHOW_PLAYER_SCORE", t[t.TEAM1_SCORE = 11] = "TEAM1_SCORE", t[t.TEAM2_SCORE = 12] = "TEAM2_SCORE", t[t.RESPAWN_TIME = 13] = "RESPAWN_TIME", t[t.GAME_MODE = 14] = "GAME_MODE", t[t.ENABLE_CHAT = 15] = "ENABLE_CHAT", t[t.CAN_CHANGE_LOADOUT = 16] = "CAN_CHANGE_LOADOUT", t[t.FFA_RANK_1_SCORE = 17] = "FFA_RANK_1_SCORE", t[t.FFA_RANK_1_NAME = 18] = "FFA_RANK_1_NAME", t[t.FFA_RANK_2_EXISTS = 19] = "FFA_RANK_2_EXISTS", t[t.FFA_RANK_2_SCORE = 20] = "FFA_RANK_2_SCORE", t[t.FFA_RANK_2_NAME = 21] = "FFA_RANK_2_NAME", t[t.FFA_MY_SCORE = 22] = "FFA_MY_SCORE", t[t.FFA_MY_RANK = 23] = "FFA_MY_RANK", t[t.VGEMS_GAINED = 24] = "VGEMS_GAINED", t[t.__LENGTH = 25] = "__LENGTH"
        }(ve || (ve = {}));
        var ye,
            ge = [yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.SIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT],
            me = ve, fe = i(1), ke = i(118);
        !function (t) {
            t[t.SHOW = 0] = "SHOW", t[t.UPDATE = 1] = "UPDATE", t[t.HIDE = 2] = "HIDE"
        }(ye || (ye = {}));
        var Ee, Oe = ye;
        !function (t) {
            t[t.CUSTOM_NAME = 0] = "CUSTOM_NAME", t[t.TEAM = 1] = "TEAM", t[t.KILLS = 2] = "KILLS", t[t.DEATHS = 3] = "DEATHS", t[t.ASSISTS = 4] = "ASSISTS", t[t.SCORE = 5] = "SCORE"
        }(Ee || (Ee = {}));
        var Ie = [yt.a.STRING, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT],
            Te = Ee;

        function Ae(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Re(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Re(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function Re(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var Ce, be = function () {
            function t(t, e) {
                var i = this;
                this._store = t, this._settings = e, this._hudCenterMessageClearTimeOut = void 0, this._timer = void 0, this._timerTimeOut = void 0, this._deathTime = void 0, this._respawnTimer = void 0, this._tabShowsScoreboard = void 0, this._killMedalTimeOut = void 0, this._deathTime = 0, this._respawnTimer = -1, this._tabShowsScoreboard = !1, d.a.on(p.a.UPDATE_CLIENT_HEALTH_AND_SHIELD, (function (t, e, n, s) {
                    i._store.dispatch(Object(ue.t)(t, e, n, s))
                })), d.a.on(p.a.GAME_FOCUS, (function () {
                    Object(y.c)() === xt.a.CONNECTED && (Object(y.m)() || i._store.dispatch(Object(de.s)(fe.a.NONE)))
                })), d.a.on(p.a.GAME_UNFOCUS, (function () {
                    Object(y.c)() === xt.a.CONNECTED && (Object(y.m)() || i._store.dispatch(Object(de.s)(fe.a.MAIN_MENU)))
                })), d.a.on(p.a.CHAT_MESSAGE_RECEIVE, (function (t) {
                    i._store.dispatch(Object(de.a)(t))
                })), d.a.on(p.a.GAME_LEAVE, (function () {
                    i._store.dispatch(Object(de.E)(!1)), i._store.dispatch(Object(de.s)(fe.a.NONE)), i._store.dispatch(Object(ue.w)(at.a.CLOSED))
                })), d.a.on(p.a.AMMO_UPDATE, (function (t, e) {
                    i._store.dispatch(Object(ue.g)(t)), i._store.dispatch(Object(ue.D)(e))
                })), d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, (function (t, e) {
                    if (e.item instanceof pe.a) {
                        var n = e.item, s = t.countItem(n.ammoItemType);
                        i._store.dispatch(Object(ue.O)(!0)), i._store.dispatch(Object(ue.g)(n.currClipAmmo)), i._store.dispatch(Object(ue.D)(s))
                    } else i._store.dispatch(Object(ue.O)(!1))
                })), d.a.on(p.a.INVENTORY_SELECT_ITEM, (function (t) {
                    i._store.dispatch(Object(ue.b)(t))
                })), d.a.on(p.a.INVENTORY_SET_CURSOR_ITEM, (function (t) {
                    i._store.dispatch(Object(ue.h)(t.item.getModelID(), t.item.itemTier, t.count, Object(nt.b)(t.item)))
                })), d.a.on(p.a.UPDATE_ITEM_USAGE, (function (t, e, n, s) {
                    i._store.dispatch(Object(ue.y)(t, e, n, s))
                })), d.a.on(p.a.HUD_CENTER_MESSAGE, (function (t, e) {
                    i._store.dispatch(Object(ue.P)(!0)), i._store.dispatch(Object(ue.u)(e)), void 0 !== i._hudCenterMessageClearTimeOut && (clearTimeout(i._hudCenterMessageClearTimeOut), i._hudCenterMessageClearTimeOut = void 0), t > 0 && (i._hudCenterMessageClearTimeOut = setTimeout((function () {
                        i._store.dispatch(Object(ue.P)(!1))
                    }), 1e3 * t))
                })), this._timer = 0, d.a.on(p.a.GAME_METADATA, (function (t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.metadataType === me.CLIENT_NUM_KILLS ? i._store.dispatch(Object(ue.c)(n.value)) : n.metadataType === me.NUM_PLAYERS_REMAIN ? i._store.dispatch(Object(ue.A)(n.value)) : n.metadataType === me.ELIMINATED_BY ? i._store.dispatch(Object(ue.i)(n.value)) : n.metadataType === me.TOTAL_NUM_PLAYERS ? i._store.dispatch(Object(ue.L)(n.value)) : n.metadataType === me.TIME_ALIVE ? i._store.dispatch(Object(ue.J)(n.value)) : n.metadataType === me.XP_GAINED ? i._store.dispatch(Object(ue.N)(n.value)) : n.metadataType === me.TIMER ? function () {
                            i._timer = n.value, i._store.dispatch(Object(ue.K)(i._timer)), void 0 !== i._timerTimeOut && (clearTimeout(i._timerTimeOut), i._timerTimeOut = void 0);
                            i._timerTimeOut = setTimeout((function t() {
                                --i._timer, i._store.dispatch(Object(ue.K)(i._timer)), i._timer > 0 && (i._timerTimeOut = setTimeout(t, 1e3))
                            }), 1e3)
                        }() : n.metadataType === me.SHOW_TEAM_SCORE_PANEL ? i._store.dispatch(Object(de.B)(n.value)) : n.metadataType === me.SHOW_FFA_SCORE_PANEL ? i._store.dispatch(Object(de.z)(n.value)) : n.metadataType === me.SHOW_MINIMAP_STATS_PANEL ? i._store.dispatch(Object(de.A)(n.value)) : n.metadataType === me.TEAM1_SCORE ? i._store.dispatch(Object(ue.H)(n.value)) : n.metadataType === me.TEAM2_SCORE ? i._store.dispatch(Object(ue.I)(n.value)) : n.metadataType === me.TAB_SHOW_PLAYER_SCORE ? (i._tabShowsScoreboard = n.value, i._store.dispatch(Object(de.C)(i._tabShowsScoreboard))) : n.metadataType === me.RESPAWN_TIME ? (i._respawnTimer = n.value, i._store.dispatch(Object(ue.E)(n.value))) : n.metadataType === me.GAME_MODE ? i._store.dispatch(Object(ue.r)(n.value)) : n.metadataType === me.ENABLE_CHAT ? i._store.dispatch(Object(de.r)(n.value)) : n.metadataType === me.CAN_CHANGE_LOADOUT ? Object(y.s)(n.value) : n.metadataType === me.FFA_RANK_1_SCORE ? i._store.dispatch(Object(ue.m)(n.value)) : n.metadataType === me.FFA_RANK_1_NAME ? i._store.dispatch(Object(ue.l)(n.value)) : n.metadataType === me.FFA_RANK_2_EXISTS ? i._store.dispatch(Object(ue.n)(n.value)) : n.metadataType === me.FFA_RANK_2_SCORE ? i._store.dispatch(Object(ue.p)(n.value)) : n.metadataType === me.FFA_RANK_2_NAME ? i._store.dispatch(Object(ue.o)(n.value)) : n.metadataType === me.FFA_MY_RANK ? i._store.dispatch(Object(ue.j)(n.value)) : n.metadataType === me.FFA_MY_SCORE ? i._store.dispatch(Object(ue.k)(n.value)) : n.metadataType === me.VGEMS_GAINED && i._store.dispatch(Object(ue.M)(n.value))
                    }
                })), d.a.on(p.a.CLIENT_PLAYER_DEATH, (function () {
                    i._respawnTimer > 0 && (i._deathTime = Date.now(), i._store.dispatch(Object(de.x)(!0)))
                })), d.a.on(p.a.SCOREBOARD_TEAM_INFO, (function (t) {
                    i._store.dispatch(Object(ue.F)(t))
                })), d.a.on(p.a.GAME_OVER, (function (t) {
                    i._store.dispatch(Object(ue.s)(!0, t))
                })), d.a.on(p.a.PLAYER_KILL, (function (t, e, n, s, r, a) {
                    var o = "{{victim}} somehow died...";
                    if (r === Se.ITEM) {
                        var h = Math.random();
                        o = h < .3 ? "{{killer}} killed {{victim}} with {{item}}" : h < .6 ? "{{killer}} eliminated {{victim}} with {{item}}" : "{{killer}} destroyed {{victim}} using {{item}}"
                    } else r === Se.FALL ? o = "{{victim}} fell to their death" : r === Se.FOG ? o = "{{victim}} was lost in the fog" : r === Se.VOID ? o = "{{victim}} fell out of the world" : r === Se.CACTUS ? o = "{{victim}} was poked to death by a cactus" : r === Se.SPAWN_PROTECTION && (o = "{{victim}} got too close to enemy spawn");
                    var c = Object(nt.c)(a);
                    i._store.dispatch(Object(de.b)(t, Object(kt.b)(e), n, Object(kt.b)(s), c.itemName, Object(Mt.b)(c.itemTier), o)), setTimeout((function () {
                        i._store.dispatch(Object(de.l)())
                    }), 8e3)
                })), d.a.on(p.a.NOTIFICATION_MESSAGE_RECEIVED, (function (t) {
                    i._store.dispatch(Object(de.d)(t)), setTimeout((function () {
                        i._store.dispatch(Object(de.n)())
                    }), 8e3)
                })), d.a.on(p.a.KILL_MEDAL, (function (t, e) {
                    i._store.dispatch(Object(de.c)(t, e)), i.debounceKillMedals()
                })), d.a.on(p.a.TERRAIN_LOADING_STATUS, (function (t, e) {
                    i._store.dispatch(Object(ue.z)(t, e))
                })), d.a.on(p.a.GAME_JOIN, (function (t, e, n, s, r, a, o) {
                    i._store.dispatch(Object(ue.d)(t)), i._store.dispatch(Object(ue.e)(e)), i._store.dispatch(Object(ue.f)(r))
                })), d.a.on(p.a.GAME_JOIN_DENY, (function (t) {
                    i._store.dispatch(Object(de.q)(t))
                })), d.a.on(p.a.PLAYER_KICK, (function (t) {
                    i._store.dispatch(Object(de.q)(t))
                })), d.a.on(p.a.RESOURCE_LOADING_STATUS_UPDATE, (function (t, e) {
                    t || i._store.dispatch(Object(de.e)(xt.a.DISCONNECTED)), i._store.dispatch(Object(de.w)(e))
                })), d.a.on(p.a.ITEM_HELP_MESSAGE_UPDATE, (function (t, e) {
                    i._store.dispatch(Object(de.t)(t, e))
                })), d.a.on(p.a.ITEM_PICKUP_HINT_UPDATE, (function (t, e, n, s, r, a) {
                    i._store.dispatch(Object(ue.x)(t, e, n, s, r, a))
                })), d.a.on(p.a.SET_SHOW_SCOPE, (function (t) {
                    i._store.dispatch(Object(ue.G)(t))
                })), document.addEventListener("keyup", (function (t) {
                    Object(y.c)() === xt.a.CONNECTED && (Object(y.l)() ? t.keyCode === v.a.ESC && d.a.emit(p.a.REQUEST_FOCUS) : Object(y.j)() || (t.keyCode === i._settings.keys[Pt.b.MAP] ? (t.preventDefault(), Object(y.t)() ? i._store.dispatch(Object(de.y)(!1)) : i._store.dispatch(Object(de.u)(!1))) : t.keyCode === v.a.ESC && Object(y.m)() && d.a.emit(p.a.REQUEST_INVENTORY_STATUS_UPDATE, at.a.CLOSED)))
                }), !1), document.addEventListener("keydown", (function (t) {
                    Object(y.c)() === xt.a.CONNECTED && (Object(y.l)() || Object(y.j)() || t.keyCode === i._settings.keys[Pt.b.MAP] && (t.preventDefault(), Object(y.t)() ? i._store.dispatch(Object(de.y)(!0)) : i._store.dispatch(Object(de.u)(!0))))
                }), !1);
                var n = this._store.getState();
                void 0 !== n.settings.playerName && 0 !== n.settings.playerName.length || this._store.dispatch(Object(ke.a)("Soldier"))
            }

            var e = t.prototype;
            return e.debounceKillMedals = function () {
                var t = this;
                if (void 0 === this._killMedalTimeOut) {
                    !function e() {
                        t._store.getState().ui.killMedals.length > 0 ? t._killMedalTimeOut = setTimeout((function () {
                            t._store.dispatch(Object(de.m)()), e()
                        }), 3e3) : t._killMedalTimeOut = void 0
                    }()
                }
            }, e.loadSettingsFromState = function (t, e, i) {
                var n = this._store.getState();
                t.sensitivity = parseFloat(n.settings.sensitivity), t.adsSensitivityMultiplier = parseFloat(n.settings.adsSensitivityMultiplier), t.scopedSensitivityMultiplier = parseFloat(n.settings.scopedSensitivityMultiplier), t.renderScale !== n.settings.renderScale && (t.renderScale = n.settings.renderScale, void 0 !== e && e.renderer.setPixelRatio(window.devicePixelRatio * t.renderScale)), t.primaryLoadout = n.settings.primaryLoadout, t.secondaryLoadout = n.settings.secondaryLoadout, t.terrainTextureURL = n.settings.terrainTextureURL, t.soundVolume = parseFloat(n.settings.soundVolume), t.invertYAxis = n.settings.invertYAxis, t.invertMouseWheel = n.settings.invertMouseWheel;
                for (var s = 0, r = Object.entries(n.settings.keys); s < r.length; s++) {
                    var a = r[s], o = a[0], h = a[1];
                    t.keys[o] = h.keyCode
                }
                var c = !1;
                t.crosshairWidth !== n.settings.crosshairWidth && (t.crosshairWidth = n.settings.crosshairWidth, c = !0), t.crosshairLength !== n.settings.crosshairLength && (t.crosshairLength = n.settings.crosshairLength, c = !0), t.crosshairColor !== n.settings.crosshairColor && (t.crosshairColor = n.settings.crosshairColor, c = !0), t.crosshairHitColor !== n.settings.crosshairHitColor && (t.crosshairHitColor = n.settings.crosshairHitColor, c = !0), t.crosshairStyle !== n.settings.crosshairStyle && (t.crosshairStyle = n.settings.crosshairStyle, c = !0), c && void 0 !== i && i.controlsRenderer.updateCrosshairSettings()
            }, e.updateCraftingRecipeStatus = function (t) {
                t.__buildItemCountCache();
                for (var e = [], i = 0; i < bt.a.__LENGTH; i++) {
                    var n = i, s = t.__checkHasItemsFromCache(Object(bt.b)(n).ingredients);
                    e.push(s)
                }
                this._store.dispatch(Object(ue.C)(e))
            }, e.listen = function (t, e, i) {
                var n = this;
                this._store.subscribe((function () {
                    n.loadSettingsFromState(n._settings, e, i)
                })), d.a.on(p.a.INVENTORY_STATUS_UPDATE, (function (t) {
                    n._store.dispatch(Object(ue.w)(t)), t === at.a.CLOSED ? n._store.getState().ui.respawnScreenVisible ? i.controlsRenderer.controls.pointerLockControls.unlock() : i.controlsRenderer.controls.pointerLockControls.lock() : t === at.a.PLAYER_INVENTORY || t === at.a.WORK_STATION ? (i.controlsRenderer.controls.pointerLockControls.unlock(), n.updateCraftingRecipeStatus(i.controlsRenderer.controls.getInventory())) : (t === at.a.LOADOUT_STATION || t === at.a.WOODEN_CHEST || t === at.a.IRON_CHEST || t === at.a.GOLD_CHEST) && i.controlsRenderer.controls.pointerLockControls.unlock()
                })), d.a.on(p.a.KEY_PRESS, (function (t) {
                    if (Object(y.c)() === xt.a.CONNECTED && !Object(y.k)() && !(Object(y.l)() && t !== v.a.ENTER || Object(y.j)() && t !== v.a.ENTER)) if (t === v.a.ENTER && Object(y.i)()) if (Object(y.j)()) {
                        var e = n._store.getState().ui.gameChatPendingMessage;
                        e.length > 0 && (d.a.emit(p.a.CHAT_MESSAGE_SEND, e), n._store.dispatch(Object(de.h)(""))), n._store.dispatch(Object(de.E)(!1))
                    } else n._store.dispatch(Object(de.E)(!0)); else t === n._settings.keys[Pt.b.TOGGLE_INVENTORY] ? d.a.emit(p.a.REQUEST_INVENTORY_STATUS_UPDATE, Object(y.m)() ? at.a.CLOSED : Object(y.h)() ? at.a.LOADOUT_STATION : at.a.PLAYER_INVENTORY) : t === n._settings.keys[Pt.b.TOGGLE_MAP] && n._store.dispatch(Object(de.F)())
                })), d.a.on(p.a.INVENTORY_SET_ITEMS, (function (t) {
                    for (var e, s = Ae(t); !(e = s()).done;) {
                        var r = e.value, a = r[0], o = r[1];
                        n._store.dispatch(Object(ue.v)(a, o.item.displayName, o.item.itemDescription, o.item.itemTier, Object(wt.a)(o.item.skinType).tier, o.item.getModelID(), o.count, Object(nt.b)(o.item)))
                    }
                    n.updateCraftingRecipeStatus(i.controlsRenderer.controls.getInventory())
                })), d.a.on(p.a.GLOBAL_PLAYER_METADATA, (function (t, e, i) {
                    for (var s, r = void 0, a = void 0, o = void 0, h = void 0, c = void 0, _ = void 0, l = Ae(i); !(s = l()).done;) {
                        var u = s.value;
                        u.metadataType === Te.KILLS ? o = u.value : u.metadataType === Te.DEATHS ? h = u.value : u.metadataType === Te.ASSISTS ? c = u.value : u.metadataType === Te.SCORE ? _ = u.value : u.metadataType === Te.CUSTOM_NAME ? r = u.value : u.metadataType === Te.TEAM && (a = u.value)
                    }
                    e === Oe.HIDE ? n._store.dispatch(Object(ue.a)(t)) : n._store.dispatch(Object(ue.B)(t, a, r, o, h, c, _))
                }))
            }, t
        }(), xe = i(7), Pe = function () {
            this.sensitivity = void 0, this.adsSensitivityMultiplier = void 0, this.scopedSensitivityMultiplier = void 0, this.renderScale = void 0, this.soundVolume = void 0, this.invertYAxis = void 0, this.invertMouseWheel = void 0, this.crosshairWidth = void 0, this.crosshairLength = void 0, this.crosshairColor = void 0, this.crosshairHitColor = void 0, this.crosshairStyle = void 0, this.chatVisible = void 0, this.primaryLoadout = void 0, this.secondaryLoadout = void 0, this.terrainTextureURL = void 0, this.keys = void 0, this.sensitivity = xe.c.sensitivity, this.adsSensitivityMultiplier = xe.c.adsSensitivityMultiplier, this.scopedSensitivityMultiplier = xe.c.scopedSensitivityMultiplier, this.renderScale = xe.c.renderScale, this.soundVolume = xe.c.soundVolume, this.invertYAxis = xe.c.invertYAxis, this.invertMouseWheel = xe.c.invertMouseWheel, this.crosshairWidth = xe.c.crosshairWidth, this.crosshairLength = xe.c.crosshairLength, this.crosshairColor = xe.c.crosshairColor, this.crosshairHitColor = xe.c.crosshairHitColor, this.crosshairStyle = xe.c.crosshairStyle, this.chatVisible = xe.c.chatVisible, this.primaryLoadout = xe.c.primaryLoadout, this.secondaryLoadout = xe.c.secondaryLoadout, this.terrainTextureURL = xe.c.terrainTextureURL, this.keys = {};
            for (var t = 0, e = Object.entries(xe.b); t < e.length; t++) {
                var i = e[t], n = i[0], s = i[1];
                this.keys[n] = s.keyCode
            }
        }, Me = function () {
            return new Promise((function (t, e) {
                Object(le.a)(function () {
                    var e = o()(r.a.mark((function e(i) {
                        var n, s, a;
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return i.pause(), n = new Pe, (s = new be(le.d, n)).loadSettingsFromState(n, void 0, void 0), e.next = 6, k.a.load(n);
                                case 6:
                                    a = new _e(n), s.listen(a.statsRenderer, a.canvasRenderer, a.sceneRenderer), t(a);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }())
            }))
        }, Ne = i(156);
        !function (t) {
            t[t.LOAD_CHUNK_IN = 0] = "LOAD_CHUNK_IN", t[t.UNLOAD_CHUNK_IN = 1] = "UNLOAD_CHUNK_IN", t[t.CLIENT_INPUT_OUT = 2] = "CLIENT_INPUT_OUT", t[t.SERVER_INPUT_RESPONSE_IN = 3] = "SERVER_INPUT_RESPONSE_IN", t[t.WORLD_UPDATE_IN = 4] = "WORLD_UPDATE_IN", t[t.REQUEST_JOIN_OUT = 5] = "REQUEST_JOIN_OUT", t[t.REQUEST_JOIN_RESPONSE_IN = 6] = "REQUEST_JOIN_RESPONSE_IN", t[t.SET_BLOCK_IN = 7] = "SET_BLOCK_IN", t[t.FLOATING_BLOCKS_BREAK_IN = 8] = "FLOATING_BLOCKS_BREAK_IN", t[t.RESPAWN_IN = 9] = "RESPAWN_IN", t[t.CHAT_MESSAGE_IN = 10] = "CHAT_MESSAGE_IN", t[t.SEND_CHAT_MESSAGE_OUT = 11] = "SEND_CHAT_MESSAGE_OUT", t[t.ENTITY_CREATE_IN = 12] = "ENTITY_CREATE_IN", t[t.ENTITY_DESTROY_IN = 13] = "ENTITY_DESTROY_IN", t[t.PLAYER_KILL_IN = 14] = "PLAYER_KILL_IN", t[t.ENTITY_METADATA_IN = 15] = "ENTITY_METADATA_IN", t[t.SET_BLOCK_BREAK_PROGRESS_IN = 16] = "SET_BLOCK_BREAK_PROGRESS_IN", t[t.ENTITY_ACTION_IN = 17] = "ENTITY_ACTION_IN", t[t.HEARTBEAT_OUT = 18] = "HEARTBEAT_OUT", t[t.HEARTBEAT_IN = 19] = "HEARTBEAT_IN", t[t.DAMAGE_RECEIVED_IN = 20] = "DAMAGE_RECEIVED_IN", t[t.ENTITY_DAMAGE_IN = 21] = "ENTITY_DAMAGE_IN", t[t.MINIMAP_DATA_IN = 22] = "MINIMAP_DATA_IN", t[t.HUD_CENTER_MESSAGE_IN = 23] = "HUD_CENTER_MESSAGE_IN", t[t.TOXIC_CIRCLE_INFO_IN = 24] = "TOXIC_CIRCLE_INFO_IN", t[t.GAME_METADATA_IN = 25] = "GAME_METADATA_IN", t[t.PLAYER_KICK_IN = 26] = "PLAYER_KICK_IN", t[t.GAME_OVER_IN = 27] = "GAME_OVER_IN", t[t.REQUEST_JOIN_DENY_IN = 28] = "REQUEST_JOIN_DENY_IN", t[t.ITEM_PICK_UP_REQUEST_OUT = 29] = "ITEM_PICK_UP_REQUEST_OUT", t[t.GLOBAL_PLAYER_METADATA_IN = 30] = "GLOBAL_PLAYER_METADATA_IN", t[t.REQUEST_LOADOUT_OUT = 31] = "REQUEST_LOADOUT_OUT", t[t.NOTIFICATION_MESSAGE_IN = 32] = "NOTIFICATION_MESSAGE_IN", t[t.PLAY_DIRECT_SOUND_IN = 33] = "PLAY_DIRECT_SOUND_IN", t[t.PLAY_POSITIONAL_SOUND_IN = 34] = "PLAY_POSITIONAL_SOUND_IN", t[t.KILL_MEDAL_IN = 35] = "KILL_MEDAL_IN", t[t.REQUEST_RESPAWN_OUT = 36] = "REQUEST_RESPAWN_OUT", t[t.SCOREBOARD_TEAM_INFO_IN = 37] = "SCOREBOARD_TEAM_INFO_IN"
        }(Ce || (Ce = {}));
        var we = Ce, Le = function () {
            function t(t) {
                this._id = t
            }

            return _()(t, [{
                key: "id", get: function () {
                    return this._id
                }
            }]), t
        }(), Ue = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return it()(e, t), e
        }(Le), De = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.LOAD_CHUNK_IN) || this)._x = void 0, e._y = void 0, e._z = void 0, e._blocks = void 0, e._numSolidBlocks = void 0, e._size = void 0, e._size = 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                if (this._x = e.getInt16(1), this._y = e.getInt16(3), this._z = e.getInt16(5), this._numSolidBlocks = e.getUint16(7), this._size = 9, this._numSolidBlocks > 0) {
                    var i = e.getUint8(this._size) > 0;
                    this._size += 1, this._blocks = new Uint8Array(l.a.CHUNK_NUM_BLOCKS);
                    var n = 0;
                    if (i) {
                        var s = e.getUint16(this._size);
                        this._size += 2;
                        for (var r = 0; r < s; r++) {
                            var a = e.getUint8(this._size);
                            this._size += 1;
                            var o = e.getUint8(this._size);
                            this._size += 1;
                            for (var h = 0; h < a; h++) this._blocks[n++] = o
                        }
                    } else this._blocks[n++] = e.getUint8(this._size), ++this._size
                }
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "x", get: function () {
                    return this._x
                }
            }, {
                key: "y", get: function () {
                    return this._y
                }
            }, {
                key: "z", get: function () {
                    return this._z
                }
            }, {
                key: "blocks", get: function () {
                    return this._blocks
                }
            }, {
                key: "numSolidBlocks", get: function () {
                    return this._numSolidBlocks
                }
            }]), e
        }(Ue), Be = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.UNLOAD_CHUNK_IN) || this)._x = void 0, e._y = void 0, e._z = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._x = e.getInt16(1), this._y = e.getInt16(3), this._z = e.getInt16(5)
            }, i.size = function () {
                return 7
            }, _()(e, [{
                key: "x", get: function () {
                    return this._x
                }
            }, {
                key: "y", get: function () {
                    return this._y
                }
            }, {
                key: "z", get: function () {
                    return this._z
                }
            }]), e
        }(Ue), Fe = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return it()(e, t), e
        }(Le), ze = function (t) {
            function e(e) {
                var i;
                return (i = t.call(this, we.CLIENT_INPUT_OUT) || this)._inputState = e, i._offset = void 0, i._offset = 0, i
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size()), e = new DataView(t);
                e.setUint8(0, this.id), e.setUint32(1, this._inputState.seqId), e.setFloat32(5, this._inputState.pitchYaw.y), e.setFloat32(9, this._inputState.pitchYaw.x), e.setFloat32(13, this._inputState.tick);
                var i = 0;
                return i |= this._inputState.moveForward ? 1 : 0, i |= (this._inputState.moveBackward ? 1 : 0) << 1, i |= (this._inputState.moveLeft ? 1 : 0) << 2, i |= (this._inputState.moveRight ? 1 : 0) << 3, i |= (this._inputState.jump ? 1 : 0) << 4, i |= (this._inputState.primaryAction ? 1 : 0) << 5, i |= (this._inputState.secondaryAction ? 1 : 0) << 6, i |= (this._inputState.crouch ? 1 : 0) << 7, i |= (this._inputState.run ? 1 : 0) << 8, i |= (this._inputState.reload ? 1 : 0) << 9, i |= (this._inputState.drop ? 1 : 0) << 10, i |= (this._inputState.spray ? 1 : 0) << 11, i |= (this._inputState.selectedIndexChanged ? 1 : 0) << 12, i |= (this._inputState.didClickSlot ? 1 : 0) << 13, i |= (this._inputState.inventoryStatusChanged ? 1 : 0) << 14, i |= (this._inputState.didTryToCraft ? 1 : 0) << 15, e.setUint16(17, i), this._offset = 19, this._inputState.selectedIndexChanged && (e.setUint8(this._offset, this._inputState.selectedIdx), this._offset += 1), this._inputState.didClickSlot && (e.setInt8(this._offset, this._inputState.clickedSlotIdx), this._offset += 1, e.setInt8(this._offset, this._inputState.clickedSlotMouseCode), this._offset += 1), this._inputState.inventoryStatusChanged && (e.setUint8(this._offset, this._inputState.inventoryStatus), this._offset += 1), this._inputState.didTryToCraft && (e.setUint8(this._offset, this._inputState.recipeType), this._offset += 1, e.setInt8(this._offset, this._inputState.clickedSlotMouseCode), this._offset += 1), t
            }, i.size = function () {
                var t = 0;
                return this._inputState.selectedIndexChanged && (t += 1), this._inputState.didClickSlot && (t += 2), this._inputState.inventoryStatusChanged && (t += 1), this._inputState.didTryToCraft && (t += 2), 19 + t
            }, e
        }(Fe), je = i(104), Ke = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.SERVER_INPUT_RESPONSE_IN) || this)._positionChanged = void 0, e._velocityChanged = void 0, e._eyeHeightChanged = void 0, e._aimSpreadChanged = void 0, e._selectedIndexChanged = void 0, e._healthOrShieldChanged = void 0, e._buildModeChanged = void 0, e._inventoryStatusChanged = void 0, e._physicsStep = void 0, e._selectedIndex = void 0, e._size = void 0, e._inventoryStatus = void 0, e._items = void 0, e._cooldowns = void 0, e._maxHealth = void 0, e._health = void 0, e._maxShield = void 0, e._shield = void 0, e._buildMode = void 0, e._selectedIndex = -1, e._size = 0, e._items = new Map, e._cooldowns = new Map, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint16(1);
                this._size += 3;
                var n = 0 != (1 & i), s = 0 != (2 & i), r = (28 & i) >> 2, a = 0 != (32 & i);
                this._aimSpreadChanged = 0 != (64 & i), this._positionChanged = 0 != (128 & i), this._velocityChanged = 0 != (256 & i), this._eyeHeightChanged = 0 != (512 & i), this._selectedIndexChanged = 0 != (1024 & i);
                var o = 0 != (2048 & i);
                this._healthOrShieldChanged = 0 != (4096 & i), this._buildModeChanged = 0 != (8192 & i), this._inventoryStatusChanged = 0 != (16384 & i);
                var h = e.getUint32(this._size);
                this._size += 4;
                var c = 0;
                this._aimSpreadChanged && (c = e.getFloat32(this._size), this._size += 4);
                var _ = Object(S.l)(0, 0, 0);
                if (this._positionChanged) {
                    var l = e.getFloat32(this._size);
                    this._size += 4;
                    var u = e.getFloat32(this._size);
                    this._size += 4;
                    var d = e.getFloat32(this._size);
                    this._size += 4, _.x = l, _.y = u, _.z = d
                }
                var p = Object(S.l)(0, 0, 0);
                if (this._velocityChanged) {
                    var v = e.getFloat32(this._size);
                    this._size += 4;
                    var y = e.getFloat32(this._size);
                    this._size += 4;
                    var g = e.getFloat32(this._size);
                    this._size += 4, p.x = v, p.y = y, p.z = g
                }
                var m = -1;
                if (this._eyeHeightChanged && (m = e.getFloat32(this._size), this._size += 4), this._physicsStep = {
                    aimSpread: c,
                    pos: _,
                    vel: p,
                    onGround: n,
                    canJump: s,
                    controlState: r,
                    eyeHeight: m,
                    seqId: h
                }, this._selectedIndexChanged && (this._selectedIndex = e.getUint8(this._size), this._size += 1), this._buildModeChanged && (this._buildMode = e.getUint8(this._size), this._size += 1), this._inventoryStatusChanged && (this._inventoryStatus = e.getUint8(this._size), this._size += 1), a) {
                    var f = e.getUint8(this._size);
                    this._size += 1;
                    for (var k = 0; k < f; k++) {
                        var E = e.getInt8(this._size);
                        this._size += 1;
                        var O = e.getUint16(this._size);
                        this._size += 2;
                        var I = e.getUint8(this._size);
                        this._size += 1;
                        var T = [], A = e.getUint8(this._size);
                        this._size += 1;
                        for (var R = 0; R < A; R++) {
                            var C = e.getUint8(this._size);
                            this._size += 1;
                            var b = Object(je.b)(C), x = 0;
                            switch (b) {
                                case yt.a.UNSIGNED_CHAR:
                                    x = e.getUint8(this._size), this._size += 1;
                                    break;
                                case yt.a.SIGNED_CHAR:
                                    x = e.getInt8(this._size), this._size += 1;
                                    break;
                                case yt.a.UNSIGNED_SHORT:
                                    x = e.getUint16(this._size), this._size += 2;
                                    break;
                                case yt.a.SIGNED_SHORT:
                                    x = e.getInt16(this._size), this._size += 2;
                                    break;
                                case yt.a.UNSIGNED_INT:
                                    x = e.getUint32(this._size), this._size += 4;
                                    break;
                                case yt.a.SIGNED_INT:
                                    x = e.getInt32(this._size), this._size += 4;
                                    break;
                                case yt.a.FLOAT:
                                    x = e.getFloat32(this._size), this._size += 4;
                                    break;
                                case yt.a.DOUBLE:
                                    x = e.getFloat64(this._size), this._size += 8;
                                    break;
                                case yt.a.STRING:
                                    var P = e.getUint8(this._size);
                                    this._size += 1, x = "";
                                    for (var M = 0; M < P; M++) x += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                                    break;
                                case yt.a.BOOLEAN:
                                    x = e.getUint8(this._size) > 0, this._size += 1;
                                    break;
                                default:
                                    console.error("Encountered unknown data type when reading Item Metadata in Input Response Packet")
                            }
                            T.push({metadataType: C, dataType: b, value: x})
                        }
                        var N = Object(nt.c)(O);
                        N.onUpdateMetadata(T), this._items.set(E, new tt.a(N, I))
                    }
                }
                if (o) {
                    var w = e.getUint8(this._size);
                    this._size += 1;
                    for (var L = 0; L < w; L++) {
                        var U = e.getUint8(this._size);
                        this._size += 1;
                        var D = e.getUint32(this._size);
                        this._size += 4, this._cooldowns.set(U, D)
                    }
                }
                this._healthOrShieldChanged && (this._maxHealth = e.getUint8(this._size), this._size += 1, this._health = e.getUint8(this._size), this._size += 1, this._maxShield = e.getUint8(this._size), this._size += 1, this._shield = e.getUint8(this._size), this._size += 1)
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "physicsStep", get: function () {
                    return this._physicsStep
                }
            }, {
                key: "selectedIndex", get: function () {
                    return this._selectedIndex
                }
            }, {
                key: "items", get: function () {
                    return this._items
                }
            }, {
                key: "cooldowns", get: function () {
                    return this._cooldowns
                }
            }, {
                key: "positionChanged", get: function () {
                    return this._positionChanged
                }
            }, {
                key: "velocityChanged", get: function () {
                    return this._velocityChanged
                }
            }, {
                key: "eyeHeightChanged", get: function () {
                    return this._eyeHeightChanged
                }
            }, {
                key: "aimSpreadChanged", get: function () {
                    return this._aimSpreadChanged
                }
            }, {
                key: "selectedIndexChanged", get: function () {
                    return this._selectedIndexChanged
                }
            }, {
                key: "healthOrShieldChanged", get: function () {
                    return this._healthOrShieldChanged
                }
            }, {
                key: "buildModeChanged", get: function () {
                    return this._buildModeChanged
                }
            }, {
                key: "inventoryStatusChanged", get: function () {
                    return this._inventoryStatusChanged
                }
            }, {
                key: "inventoryStatus", get: function () {
                    return this._inventoryStatus
                }
            }, {
                key: "maxHealth", get: function () {
                    return this._maxHealth
                }
            }, {
                key: "health", get: function () {
                    return this._health
                }
            }, {
                key: "maxShield", get: function () {
                    return this._maxShield
                }
            }, {
                key: "shield", get: function () {
                    return this._shield
                }
            }, {
                key: "buildMode", get: function () {
                    return this._buildMode
                }
            }]), e
        }(Ue), Ge = function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, we.REQUEST_JOIN_OUT) || this)._primaryLoadout = e, n._secondaryLoadout = i, n
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size()), e = new DataView(t);
                return e.setUint8(0, this.id), e.setUint8(1, l.a.CLIENT_VERSION), e.setUint8(2, this._primaryLoadout), e.setUint8(3, this._secondaryLoadout), t
            }, i.size = function () {
                return 4
            }, e
        }(Fe), He = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.REQUEST_JOIN_RESPONSE_IN) || this)._playerId = void 0, e._playerName = void 0, e._spawnLocation = void 0, e._spawnPitchYaw = void 0, e._team = void 0, e._minChunkPos = void 0, e._maxChunkPos = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._playerId = e.getUint32(1);
                var i = e.getUint8(5);
                this._playerName = "";
                for (var n = 0; n < i; n++) this._playerName += String.fromCharCode(e.getUint8(6 + n));
                var s = e.getFloat32(6 + i), r = e.getFloat32(6 + i + 4), a = e.getFloat32(6 + i + 8);
                this._spawnLocation = Object(S.l)(s, r, a);
                var o = e.getFloat32(6 + i + 12), h = e.getFloat32(6 + i + 16);
                this._spawnPitchYaw = Object(X.e)(h, o), this._team = e.getUint8(6 + i + 20);
                var c = e.getFloat32(6 + i + 21), _ = e.getFloat32(6 + i + 25), l = e.getFloat32(6 + i + 29);
                this._minChunkPos = Object(S.l)(c, _, l);
                var u = e.getFloat32(6 + i + 33), d = e.getFloat32(6 + i + 37), p = e.getFloat32(6 + i + 41);
                this._maxChunkPos = Object(S.l)(u, d, p)
            }, i.size = function () {
                return 6 + this._playerName.length + 20 + 1 + 12 + 12
            }, _()(e, [{
                key: "playerId", get: function () {
                    return this._playerId
                }
            }, {
                key: "spawnLocation", get: function () {
                    return this._spawnLocation
                }
            }, {
                key: "spawnPitchYaw", get: function () {
                    return this._spawnPitchYaw
                }
            }, {
                key: "playerName", get: function () {
                    return this._playerName
                }
            }, {
                key: "playerTeam", get: function () {
                    return this._team
                }
            }, {
                key: "minChunkPos", get: function () {
                    return this._minChunkPos
                }
            }, {
                key: "maxChunkPos", get: function () {
                    return this._maxChunkPos
                }
            }]), e
        }(Ue), We = function () {
            function t(t, e) {
                this._id = t, this._ghostFlags = e, this.pos = void 0, this.pitchYaw = void 0, this.pos = Object(S.l)(0, 0, 0), this.pitchYaw = Object(X.e)(0, 0)
            }

            return _()(t, [{
                key: "id", get: function () {
                    return this._id
                }
            }, {
                key: "ghostFlags", get: function () {
                    return this._ghostFlags
                }
            }, {
                key: "positionChanged", get: function () {
                    return (1 & this._ghostFlags) > 0
                }
            }, {
                key: "directionChanged", get: function () {
                    return (2 & this._ghostFlags) > 0
                }
            }]), t
        }(), Ye = function (t) {
            function e(e) {
                var i;
                return (i = t.call(this, we.WORLD_UPDATE_IN) || this)._prevPacketWorldUpdate = e, i._serverTimestamp = void 0, i._tick = void 0, i._entitySnapshots = void 0, i._size = void 0, i._clientTimestamp = void 0, i._clientTimestamp = Date.now(), i
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                this._size = 0;
                var e = new DataView(t);
                for (this._serverTimestamp = e.getFloat64(1), this._entitySnapshots = new Map, this._tick = e.getUint32(9), this._size = 13; ;) {
                    var i = e.getUint32(this._size);
                    if (this._size += 4, 0 === i) break;
                    var n = e.getUint8(this._size);
                    this._size += 1;
                    var s = new We(i, n);
                    s.positionChanged && (s.pos.x = e.getFloat32(this._size), s.pos.y = e.getFloat32(this._size + 4), s.pos.z = e.getFloat32(this._size + 8), this._size += 12), s.directionChanged && (s.pitchYaw.y = e.getFloat32(this._size), s.pitchYaw.x = e.getFloat32(this._size + 4), this._size += 8), this._entitySnapshots.set(i, s)
                }
                if (void 0 !== this._prevPacketWorldUpdate) {
                    this._clientTimestamp = this._prevPacketWorldUpdate.clientTimestamp + (this._serverTimestamp - this._prevPacketWorldUpdate.serverTimestamp);
                    var r = Date.now() - this._clientTimestamp;
                    this._clientTimestamp += .05 * r, this._prevPacketWorldUpdate = void 0
                }
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "serverTimestamp", get: function () {
                    return this._serverTimestamp
                }
            }, {
                key: "clientTimestamp", get: function () {
                    return this._clientTimestamp
                }
            }, {
                key: "entitySnapshots", get: function () {
                    return this._entitySnapshots
                }
            }, {
                key: "tick", get: function () {
                    return this._tick
                }
            }]), e
        }(Ue), Ve = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.SET_BLOCK_IN) || this)._x = void 0, e._y = void 0, e._z = void 0, e._blockId = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._x = e.getInt32(1), this._y = e.getInt32(5), this._z = e.getInt32(9), this._blockId = e.getUint8(13)
            }, i.size = function () {
                return 14
            }, _()(e, [{
                key: "x", get: function () {
                    return this._x
                }
            }, {
                key: "y", get: function () {
                    return this._y
                }
            }, {
                key: "z", get: function () {
                    return this._z
                }
            }, {
                key: "blockId", get: function () {
                    return this._blockId
                }
            }]), e
        }(Ue), Ze = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.RESPAWN_IN) || this)._playerId = void 0, e._pos = void 0, e._dir = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._playerId = e.getUint32(1);
                var i = e.getFloat32(5), n = e.getFloat32(9), s = e.getFloat32(13);
                this._pos = Object(S.l)(i, n, s);
                var r = e.getFloat32(17), a = e.getFloat32(21);
                this._dir = Object(X.e)(r, a)
            }, i.size = function () {
                return 25
            }, _()(e, [{
                key: "playerId", get: function () {
                    return this._playerId
                }
            }, {
                key: "pos", get: function () {
                    return this._pos
                }
            }, {
                key: "dir", get: function () {
                    return this._dir
                }
            }]), e
        }(Ue), qe = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.ENTITY_METADATA_IN) || this)._entityId = void 0, e._size = void 0, e._metadatas = void 0, e._size = 0, e._metadatas = [], e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._size += 1, this._entityId = e.getUint32(this._size), this._size += 4;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (mt[s]) {
                        case yt.a.UNSIGNED_CHAR:
                            r = e.getUint8(this._size), this._size += 1;
                            break;
                        case yt.a.SIGNED_CHAR:
                            r = e.getInt8(this._size), this._size += 1;
                            break;
                        case yt.a.UNSIGNED_SHORT:
                            r = e.getUint16(this._size), this._size += 2;
                            break;
                        case yt.a.SIGNED_SHORT:
                            r = e.getInt16(this._size), this._size += 2;
                            break;
                        case yt.a.UNSIGNED_INT:
                            r = e.getUint32(this._size), this._size += 4;
                            break;
                        case yt.a.SIGNED_INT:
                            r = e.getInt32(this._size), this._size += 4;
                            break;
                        case yt.a.FLOAT:
                            r = e.getFloat32(this._size), this._size += 4;
                            break;
                        case yt.a.DOUBLE:
                            r = e.getFloat64(this._size), this._size += 8;
                            break;
                        case yt.a.STRING:
                            var a = e.getUint8(this._size);
                            this._size += 1, r = "";
                            for (var o = 0; o < a; o++) r += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                            break;
                        case yt.a.BOOLEAN:
                            r = e.getUint8(this._size) > 0, this._size += 1;
                            break;
                        default:
                            console.error("Encountered unknown data type when reading Entity Metadata Packet")
                    }
                    this._metadatas.push({metadataType: s, value: r})
                }
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }, {
                key: "metadatas", get: function () {
                    return this._metadatas
                }
            }]), e
        }(Ue), Qe = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.GAME_METADATA_IN) || this)._size = void 0, e._metadatas = void 0, e._size = 0, e._metadatas = [], e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._size += 1;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (ge[s]) {
                        case yt.a.UNSIGNED_CHAR:
                            r = e.getUint8(this._size), this._size += 1;
                            break;
                        case yt.a.SIGNED_CHAR:
                            r = e.getInt8(this._size), this._size += 1;
                            break;
                        case yt.a.UNSIGNED_SHORT:
                            r = e.getUint16(this._size), this._size += 2;
                            break;
                        case yt.a.SIGNED_SHORT:
                            r = e.getInt16(this._size), this._size += 2;
                            break;
                        case yt.a.UNSIGNED_INT:
                            r = e.getUint32(this._size), this._size += 4;
                            break;
                        case yt.a.SIGNED_INT:
                            r = e.getInt32(this._size), this._size += 4;
                            break;
                        case yt.a.FLOAT:
                            r = e.getFloat32(this._size), this._size += 4;
                            break;
                        case yt.a.DOUBLE:
                            r = e.getFloat64(this._size), this._size += 8;
                            break;
                        case yt.a.STRING:
                            var a = e.getUint8(this._size);
                            this._size += 1, r = "";
                            for (var o = 0; o < a; o++) r += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                            break;
                        case yt.a.BOOLEAN:
                            r = e.getUint8(this._size) > 0, this._size += 1;
                            break;
                        default:
                            console.error("Encountered unknown data type when reading Game Metadata Packet")
                    }
                    this._metadatas.push({metadataType: s, value: r})
                }
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "metadatas", get: function () {
                    return this._metadatas
                }
            }]), e
        }(Ue), Je = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.ENTITY_ACTION_IN) || this)._entityId = void 0, e._entityActionType = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1), this._entityActionType = e.getUint8(5)
            }, i.size = function () {
                return 6
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }, {
                key: "actionType", get: function () {
                    return this._entityActionType
                }
            }]), e
        }(Ue), Xe = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.FLOATING_BLOCKS_BREAK_IN) || this)._origin = void 0, e._marked = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getInt32(1), n = e.getInt32(5), s = e.getInt32(9);
                this._origin = Object(S.l)(i, n, s);
                var r = e.getUint16(13);
                this._marked = [];
                for (var a = 0; a < r; a++) {
                    var o = e.getInt32(15 + 12 * a), h = e.getInt32(15 + 12 * a + 4), c = e.getInt32(15 + 12 * a + 8);
                    this._marked.push(Object(S.l)(o, h, c))
                }
            }, i.size = function () {
                return 15 + 12 * this._marked.length
            }, _()(e, [{
                key: "origin", get: function () {
                    return this._origin
                }
            }, {
                key: "marked", get: function () {
                    return this._marked
                }
            }]), e
        }(Ue), $e = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.DAMAGE_RECEIVED_IN) || this)._sourcePos = void 0, e._killed = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getFloat32(1), n = e.getFloat32(5), s = e.getFloat32(9);
                this._sourcePos = Object(S.l)(i, n, s);
                var r = e.getUint8(13);
                this._killed = 0 != (1 & r)
            }, i.size = function () {
                return 14
            }, _()(e, [{
                key: "sourcePos", get: function () {
                    return this._sourcePos
                }
            }, {
                key: "killed", get: function () {
                    return this._killed
                }
            }]), e
        }(Ue), ti = i(121), ei = i.n(ti), ii = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.CHAT_MESSAGE_IN) || this)._message = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++) this._message += ei()(e.getUint32(2 + 4 * n))
            }, i.size = function () {
                return 2 + 4 * this._message.length
            }, _()(e, [{
                key: "message", get: function () {
                    return this._message
                }
            }]), e
        }(Ue);
        i(180);

        function ni(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return si(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return si(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }

        function si(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        var ri = function (t) {
            function e(e) {
                var i;
                return (i = t.call(this, we.SEND_CHAT_MESSAGE_OUT) || this)._message = e, i._message = i._message.substr(0, 100), i
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size()), e = new DataView(t);
                e.setUint8(0, this.id);
                for (var i, n = [], s = ni(this._message); !(i = s()).done;) {
                    var r = i.value;
                    n.push(r)
                }
                e.setUint8(1, n.length);
                for (var a = 0; a < n.length; a++) {
                    var o = n[a].codePointAt(0), h = void 0 === o ? 0 : o;
                    e.setUint32(2 + 4 * a, h)
                }
                return t
            }, i.size = function () {
                return 2 + 4 * this._message.length
            }, e
        }(Fe), ai = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.ENTITY_CREATE_IN) || this)._entityId = void 0, e._entityType = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1), this._entityType = e.getUint8(5)
            }, i.size = function () {
                return 6
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }, {
                key: "entityType", get: function () {
                    return this._entityType
                }
            }]), e
        }(Ue), oi = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.ENTITY_DESTROY_IN) || this)._entityId = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1)
            }, i.size = function () {
                return 2
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }]), e
        }(Ue), hi = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.PLAYER_KILL_IN) || this)._killerName = void 0, e._killerTeam = void 0, e._victimName = void 0, e._victimTeam = void 0, e._deathCause = void 0, e._deathCauseItemType = void 0, e._size = void 0, e._size = 0, e._killerName = "", e._killerTeam = kt.a.RED, e._victimName = "", e._victimTeam = kt.a.RED, e._deathCauseItemType = ct.a.EMPTY, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                this._size += 1;
                var e = new DataView(t), i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) this._killerName += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                this._killerTeam = e.getUint8(this._size), this._size += 1;
                var s = e.getUint8(this._size);
                this._size += 1;
                for (var r = 0; r < s; r++) this._victimName += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                this._victimTeam = e.getUint8(this._size), this._size += 1, this._deathCause = e.getUint8(this._size), this._size += 1, this._deathCause === Se.ITEM && (this._deathCauseItemType = e.getUint8(this._size), this._size += 1)
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "killerName", get: function () {
                    return this._killerName
                }
            }, {
                key: "killerTeam", get: function () {
                    return this._killerTeam
                }
            }, {
                key: "victimName", get: function () {
                    return this._victimName
                }
            }, {
                key: "victimTeam", get: function () {
                    return this._victimTeam
                }
            }, {
                key: "deathCause", get: function () {
                    return this._deathCause
                }
            }, {
                key: "deathCauseItemType", get: function () {
                    return this._deathCauseItemType
                }
            }]), e
        }(Ue), ci = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.SET_BLOCK_BREAK_PROGRESS_IN) || this)._x = void 0, e._y = void 0, e._z = void 0, e._progress = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._x = e.getInt32(1), this._y = e.getInt32(5), this._z = e.getInt32(9), this._progress = e.getFloat32(13)
            }, i.size = function () {
                return 17
            }, _()(e, [{
                key: "x", get: function () {
                    return this._x
                }
            }, {
                key: "y", get: function () {
                    return this._y
                }
            }, {
                key: "z", get: function () {
                    return this._z
                }
            }, {
                key: "progress", get: function () {
                    return this._progress
                }
            }]), e
        }(Ue), _i = function (t) {
            function e() {
                return t.call(this, we.HEARTBEAT_OUT) || this
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size());
                return new DataView(t).setUint8(0, this.id), t
            }, i.size = function () {
                return 1
            }, e
        }(Fe), li = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.MINIMAP_DATA_IN) || this)._data = void 0, e._size = void 0, e._data = "", e._size = 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint32(1);
                this._data = "";
                for (var n = 0; n < i; n++) this._data += String.fromCharCode(e.getUint8(5 + n));
                this._data = window.btoa(this._data), this._size = 5 + i
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "data", get: function () {
                    return this._data
                }
            }]), e
        }(Ue), ui = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.PLAYER_KICK_IN) || this)._message = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++) this._message += ei()(e.getUint32(2 + 4 * n))
            }, i.size = function () {
                return 2 + this._message.length
            }, _()(e, [{
                key: "message", get: function () {
                    return this._message
                }
            }]), e
        }(Ue), di = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.GAME_OVER_IN) || this)._won = void 0, e._won = !1, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._won = 0 !== e.getUint8(1)
            }, i.size = function () {
                return 2
            }, _()(e, [{
                key: "won", get: function () {
                    return this._won
                }
            }]), e
        }(Ue), pi = function (t) {
            function e() {
                return t.call(this, we.HEARTBEAT_IN) || this
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                new DataView(t)
            }, i.size = function () {
                return 1
            }, e
        }(Ue), vi = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.HUD_CENTER_MESSAGE_IN) || this)._duration = void 0, e._message = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._duration = e.getUint8(1);
                var i = e.getUint8(2);
                this._message = "";
                for (var n = 0; n < i; n++) this._message += ei()(e.getUint32(3 + 4 * n))
            }, i.size = function () {
                return 3 + 4 * this._message.length
            }, _()(e, [{
                key: "duration", get: function () {
                    return this._duration
                }
            }, {
                key: "message", get: function () {
                    return this._message
                }
            }]), e
        }(Ue), Si = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.TOXIC_CIRCLE_INFO_IN) || this)._currPosition = void 0, e._currRadius = void 0, e._nextPosition = void 0, e._nextRadius = void 0, e._prepTime = void 0, e._shrinkTime = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getFloat32(1), n = e.getFloat32(5);
                this._currPosition = Object(X.e)(i, n), this._currRadius = e.getFloat32(9);
                var s = e.getFloat32(13), r = e.getFloat32(17);
                this._nextPosition = Object(X.e)(s, r), this._nextRadius = e.getFloat32(21), this._prepTime = e.getUint32(25), this._shrinkTime = e.getUint32(29)
            }, i.size = function () {
                return 33
            }, _()(e, [{
                key: "currPosition", get: function () {
                    return this._currPosition
                }
            }, {
                key: "currRadius", get: function () {
                    return this._currRadius
                }
            }, {
                key: "nextPosition", get: function () {
                    return this._nextPosition
                }
            }, {
                key: "nextRadius", get: function () {
                    return this._nextRadius
                }
            }, {
                key: "prepTime", get: function () {
                    return this._prepTime
                }
            }, {
                key: "shrinkTime", get: function () {
                    return this._shrinkTime
                }
            }]), e
        }(Ue), yi = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.ENTITY_DAMAGE_IN) || this)._entityId = void 0, e._shieldDamage = void 0, e._healthDamage = void 0, e._showHitMark = void 0, e._isHeadshot = void 0, e._killed = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1), this._shieldDamage = e.getUint8(5), this._healthDamage = e.getUint8(6);
                var i = e.getUint8(7);
                this._showHitMark = 0 != (1 & i), this._isHeadshot = 0 != (2 & i), this._killed = 0 != (4 & i)
            }, i.size = function () {
                return 8
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }, {
                key: "healthDamage", get: function () {
                    return this._healthDamage
                }
            }, {
                key: "shieldDamage", get: function () {
                    return this._shieldDamage
                }
            }, {
                key: "showHitMark", get: function () {
                    return this._showHitMark
                }
            }, {
                key: "isHeadshot", get: function () {
                    return this._isHeadshot
                }
            }, {
                key: "killed", get: function () {
                    return this._killed
                }
            }]), e
        }(Ue), gi = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.REQUEST_JOIN_DENY_IN) || this)._message = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++) this._message += ei()(e.getUint32(2 + 4 * n))
            }, i.size = function () {
                return 2 + this._message.length
            }, _()(e, [{
                key: "message", get: function () {
                    return this._message
                }
            }]), e
        }(Ue), mi = function (t) {
            function e(e) {
                var i;
                return (i = t.call(this, we.ITEM_PICK_UP_REQUEST_OUT) || this)._itemEntityId = e, i
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size()), e = new DataView(t);
                return e.setUint8(0, this.id), e.setUint32(1, this._itemEntityId), t
            }, i.size = function () {
                return 5
            }, e
        }(Fe), fi = function (t) {
            function e() {
                return t.call(this, we.REQUEST_RESPAWN_OUT) || this
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size());
                return new DataView(t).setUint8(0, this.id), t
            }, i.size = function () {
                return 1
            }, e
        }(Fe), ki = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.GLOBAL_PLAYER_METADATA_IN) || this)._entityId = void 0, e._commandType = void 0, e._size = void 0, e._metadatas = void 0, e._size = 0, e._metadatas = [], e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._size += 1, this._entityId = e.getUint32(this._size), this._size += 4, this._commandType = e.getUint8(this._size), this._size += 1;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (Ie[s]) {
                        case yt.a.UNSIGNED_CHAR:
                            r = e.getUint8(this._size), this._size += 1;
                            break;
                        case yt.a.SIGNED_CHAR:
                            r = e.getInt8(this._size), this._size += 1;
                            break;
                        case yt.a.UNSIGNED_SHORT:
                            r = e.getUint16(this._size), this._size += 2;
                            break;
                        case yt.a.SIGNED_SHORT:
                            r = e.getInt16(this._size), this._size += 2;
                            break;
                        case yt.a.UNSIGNED_INT:
                            r = e.getUint32(this._size), this._size += 4;
                            break;
                        case yt.a.SIGNED_INT:
                            r = e.getInt32(this._size), this._size += 4;
                            break;
                        case yt.a.FLOAT:
                            r = e.getFloat32(this._size), this._size += 4;
                            break;
                        case yt.a.DOUBLE:
                            r = e.getFloat64(this._size), this._size += 8;
                            break;
                        case yt.a.STRING:
                            var a = e.getUint8(this._size);
                            this._size += 1, r = "";
                            for (var o = 0; o < a; o++) r += String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                            break;
                        case yt.a.BOOLEAN:
                            r = e.getUint8(this._size) > 0, this._size += 1;
                            break;
                        default:
                            console.error("Encountered unknown data type when reading Entity Metadata Packet")
                    }
                    this._metadatas.push({metadataType: s, value: r})
                }
            }, i.size = function () {
                return this._size
            }, _()(e, [{
                key: "entityId", get: function () {
                    return this._entityId
                }
            }, {
                key: "commandType", get: function () {
                    return this._commandType
                }
            }, {
                key: "metadatas", get: function () {
                    return this._metadatas
                }
            }]), e
        }(Ue), Ei = i(28), Oi = function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, we.REQUEST_LOADOUT_OUT) || this)._loadoutType = e, n._weaponType = i, n
            }

            it()(e, t);
            var i = e.prototype;
            return i.pack = function () {
                var t = new ArrayBuffer(this.size()), e = new DataView(t);
                return e.setUint8(0, this.id), e.setUint8(1, this._loadoutType), e.setUint8(2, this._weaponType), t
            }, i.size = function () {
                return 3
            }, e
        }(Fe), Ii = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.NOTIFICATION_MESSAGE_IN) || this)._message = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++) this._message += ei()(e.getUint32(2 + 4 * n))
            }, i.size = function () {
                return 2 + 4 * this._message.length
            }, _()(e, [{
                key: "message", get: function () {
                    return this._message
                }
            }]), e
        }(Ue), Ti = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.PLAY_DIRECT_SOUND_IN) || this)._soundType = void 0, e._detune = void 0, e._volume = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._soundType = e.getUint8(1), this._detune = e.getFloat32(2), this._volume = e.getFloat32(6)
            }, i.size = function () {
                return 10
            }, _()(e, [{
                key: "soundType", get: function () {
                    return this._soundType
                }
            }, {
                key: "detune", get: function () {
                    return this._detune
                }
            }, {
                key: "volume", get: function () {
                    return this._volume
                }
            }]), e
        }(Ue), Ai = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.PLAY_POSITIONAL_SOUND_IN) || this)._position = void 0, e._soundType = void 0, e._detune = void 0, e._volume = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getFloat32(1), n = e.getFloat32(5), s = e.getFloat32(9);
                this._position = Object(S.l)(i, n, s), this._soundType = e.getUint8(13), this._detune = e.getFloat32(14), this._volume = e.getFloat32(18)
            }, i.size = function () {
                return 22
            }, _()(e, [{
                key: "position", get: function () {
                    return this._position
                }
            }, {
                key: "soundType", get: function () {
                    return this._soundType
                }
            }, {
                key: "detune", get: function () {
                    return this._detune
                }
            }, {
                key: "volume", get: function () {
                    return this._volume
                }
            }]), e
        }(Ue), Ri = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.KILL_MEDAL_IN) || this)._killMedalType = void 0, e._score = void 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t);
                this._killMedalType = e.getUint8(1), this._score = e.getUint16(2)
            }, i.size = function () {
                return 4
            }, _()(e, [{
                key: "killMedalType", get: function () {
                    return this._killMedalType
                }
            }, {
                key: "score", get: function () {
                    return this._score
                }
            }]), e
        }(Ue), Ci = function (t) {
            function e() {
                var e;
                return (e = t.call(this, we.RESPAWN_IN) || this)._teams = void 0, e._size = void 0, e._teams = [], e._size = 0, e
            }

            it()(e, t);
            var i = e.prototype;
            return i.unpack = function (t) {
                var e = new DataView(t), i = e.getUint8(1);
                this._size += 2;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = "", a = String.fromCharCode(e.getUint8(this._size));
                    for (this._size += 1; a !== String.fromCharCode(0);) r += a, a = String.fromCharCode(e.getUint8(this._size)), this._size += 1;
                    var o = e.getUint32(this._size);
                    this._size += 4, this._teams.push({type: s, name: r, color: o})
                }
            }, i.size = function () {
                return 1 + this._size
            }, _()(e, [{
                key: "teams", get: function () {
                    return this._teams
                }
            }]), e
        }(Ue), bi = function () {
            function t(t) {
                var e = this;
                this._statsRenderer = t, this._primaryLoadout = void 0, this._secondaryLoadout = void 0, this._socket = void 0, this._ip = void 0, this._port = void 0, this._lastHeartbeatSendTime = void 0, this._prevPacketWorldUpdate = void 0, this.onInputReceived = function (t) {
                    var i = new ze(t);
                    e.sendPacket(i)
                }, this.onChatMessageSend = function (t) {
                    var i = new ri(t);
                    e.sendPacket(i)
                }, this.onItemPickupRequest = function (t) {
                    var i = new mi(t);
                    e.sendPacket(i)
                }, this.onRequestLoadout = function (t, i) {
                    var n = new Oi(t, i);
                    e.sendPacket(n)
                }, this.onRequestRespawn = function () {
                    var t = new fi;
                    e.sendPacket(t)
                }, this.onSocketOpen = function () {
                    Ne.a.log("Connected to " + e.address + ":" + e.port);
                    var t = new Ge(e._primaryLoadout, e._secondaryLoadout);
                    e.sendPacket(t)

                }, this.heartBeat = function () {
                    if (e.connected) {
                        e._lastHeartbeatSendTime = Date.now();
                        var t = new _i;
                        e.sendPacket(t)
                    }
                }, this.onHeartBeat = function () {
                    var t = Date.now() - e._lastHeartbeatSendTime;
                    e._statsRenderer.ping = t, setTimeout(e.heartBeat, l.a.PING_CHECK_INTERVAL)
                }, this.onSocketMessage = function (t) {
                    var i = t.data;
                    switch (new DataView(i).getUint8(0)) {
                        case we.LOAD_CHUNK_IN:
                            var n = new De;
                            n.unpack(i), d.a.emit(p.a.LOAD_CHUNK, n.x, n.y, n.z, n.numSolidBlocks, n.blocks), e._statsRenderer.recordDownload(n.size());
                            break;
                        case we.UNLOAD_CHUNK_IN:
                            var s = new Be;
                            s.unpack(i), d.a.emit(p.a.UNLOAD_CHUNK, s.x, s.y, s.z), e._statsRenderer.recordDownload(s.size());
                            break;
                        case we.SERVER_INPUT_RESPONSE_IN:
                            var r = new Ke;
                            r.unpack(i), d.a.emit(p.a.INPUT_VERIFICATION_RECEIVED, r.positionChanged, r.velocityChanged, r.eyeHeightChanged, r.aimSpreadChanged, r.selectedIndexChanged, r.healthOrShieldChanged, r.buildModeChanged, r.inventoryStatusChanged, r.physicsStep, r.selectedIndex, r.items, r.cooldowns, r.maxHealth, r.health, r.maxShield, r.shield, r.buildMode, r.inventoryStatus), e._statsRenderer.recordDownload(r.size());
                            break;
                        case we.WORLD_UPDATE_IN:
                            var a = new Ye(e._prevPacketWorldUpdate);
                            e._prevPacketWorldUpdate = a, a.unpack(i), d.a.emit(p.a.WORLD_UPDATE_RECEIVED, a), e._statsRenderer.recordDownload(a.size());
                            break;
                        case we.REQUEST_JOIN_RESPONSE_IN:
                            var o = new He;
                            o.unpack(i), d.a.emit(p.a.GAME_JOIN, o.playerId, o.playerName, o.spawnLocation, o.spawnPitchYaw, o.playerTeam, o.minChunkPos, o.maxChunkPos), e._statsRenderer.recordDownload(o.size()), e.heartBeat();
                            break;
                        case we.SET_BLOCK_IN:
                            var h = new Ve;
                            h.unpack(i), d.a.emit(p.a.SET_BLOCK, h.x, h.y, h.z, h.blockId), e._statsRenderer.recordDownload(h.size());
                            break;
                        case we.FLOATING_BLOCKS_BREAK_IN:
                            var c = new Xe;
                            c.unpack(i), d.a.emit(p.a.FLOATING_BLOCKS_BREAK, c.origin, c.marked), e._statsRenderer.recordDownload(c.size());
                            break;
                        case we.RESPAWN_IN:
                            var _ = new Ze;
                            _.unpack(i), d.a.emit(p.a.RESPAWN, _.playerId, _.pos, _.dir), e._statsRenderer.recordDownload(_.size());
                            break;
                        case we.CHAT_MESSAGE_IN:
                            var l = new ii;
                            l.unpack(i), d.a.emit(p.a.CHAT_MESSAGE_RECEIVE, l.message), e._statsRenderer.recordDownload(l.size());
                            break;
                        case we.ENTITY_CREATE_IN:
                            var u = new ai;
                            u.unpack(i), d.a.emit(p.a.ENTITY_CREATE, u.entityId, u.entityType), e._statsRenderer.recordDownload(u.size());
                            break;
                        case we.ENTITY_DESTROY_IN:
                            var v = new oi;
                            v.unpack(i), d.a.emit(p.a.ENTITY_DESTROY, v.entityId), e._statsRenderer.recordDownload(v.size());
                            break;
                        case we.PLAYER_KILL_IN:
                            var S = new hi;
                            S.unpack(i), d.a.emit(p.a.PLAYER_KILL, S.killerName, S.killerTeam, S.victimName, S.victimTeam, S.deathCause, S.deathCauseItemType), e._statsRenderer.recordDownload(S.size());
                            break;
                        case we.ENTITY_METADATA_IN:
                            var y = new qe;
                            y.unpack(i), d.a.emit(p.a.ENTITY_UPDATE_METADATAS, y.entityId, y.metadatas), e._statsRenderer.recordDownload(y.size());
                            break;
                        case we.GLOBAL_PLAYER_METADATA_IN:
                            var g = new ki;
                            g.unpack(i), d.a.emit(p.a.GLOBAL_PLAYER_METADATA, g.entityId, g.commandType, g.metadatas), e._statsRenderer.recordDownload(g.size());
                            break;
                        case we.SET_BLOCK_BREAK_PROGRESS_IN:
                            var m = new ci;
                            m.unpack(i), d.a.emit(p.a.SET_BLOCK_BREAK_PROGRESS, m.x, m.y, m.z, m.progress), e._statsRenderer.recordDownload(m.size());
                            break;
                        case we.ENTITY_ACTION_IN:
                            var f = new Je;
                            f.unpack(i), d.a.emit(p.a.ENTITY_ACTION, f.entityId, f.actionType), e._statsRenderer.recordDownload(f.size());
                            break;
                        case we.HEARTBEAT_IN:
                            var k = new pi;
                            k.unpack(i), e._statsRenderer.recordDownload(k.size()), e.onHeartBeat();
                            break;
                        case we.DAMAGE_RECEIVED_IN:
                            var E = new $e;
                            E.unpack(i), d.a.emit(p.a.CLIENT_DAMAGE_RECEIVED, E.sourcePos, E.killed), e._statsRenderer.recordDownload(E.size());
                            break;
                        case we.ENTITY_DAMAGE_IN:
                            var O = new yi;
                            O.unpack(i), d.a.emit(p.a.ENTITY_DAMAGE, O.entityId, O.shieldDamage, O.healthDamage, O.showHitMark, O.isHeadshot, O.killed), e._statsRenderer.recordDownload(O.size());
                            break;
                        case we.MINIMAP_DATA_IN:
                            var I = new li;
                            I.unpack(i), d.a.emit(p.a.MINIMAP_DATA, I.data), e._statsRenderer.recordDownload(I.size());
                            break;
                        case we.HUD_CENTER_MESSAGE_IN:
                            var T = new vi;
                            T.unpack(i), d.a.emit(p.a.HUD_CENTER_MESSAGE, T.duration, T.message), e._statsRenderer.recordDownload(T.size());
                            break;
                        case we.TOXIC_CIRCLE_INFO_IN:
                            var A = new Si;
                            A.unpack(i), d.a.emit(p.a.TOXIC_CIRCLE_INFO_SYNC, A.currPosition, A.currRadius, A.nextPosition, A.nextRadius, A.prepTime, A.shrinkTime), e._statsRenderer.recordDownload(A.size());
                            break;
                        case we.GAME_METADATA_IN:
                            var R = new Qe;
                            R.unpack(i), d.a.emit(p.a.GAME_METADATA, R.metadatas), e._statsRenderer.recordDownload(R.size());
                            break;
                        case we.GAME_OVER_IN:
                            var C = new di;
                            C.unpack(i), d.a.emit(p.a.GAME_OVER, C.won), e._statsRenderer.recordDownload(C.size());
                            break;
                        case we.PLAYER_KICK_IN:
                            var b = new ui;
                            b.unpack(i), d.a.emit(p.a.PLAYER_KICK, b.message), e._statsRenderer.recordDownload(b.size());
                            break;
                        case we.REQUEST_JOIN_DENY_IN:
                            var x = new gi;
                            x.unpack(i), d.a.emit(p.a.GAME_JOIN_DENY, x.message), e._statsRenderer.recordDownload(x.size());
                            break;
                        case we.NOTIFICATION_MESSAGE_IN:
                            var P = new Ii;
                            P.unpack(i), d.a.emit(p.a.NOTIFICATION_MESSAGE_RECEIVED, P.message), e._statsRenderer.recordDownload(P.size());
                            break;
                        case we.PLAY_DIRECT_SOUND_IN:
                            var M = new Ti;
                            M.unpack(i), d.a.emit(p.a.PLAY_DIRECT_SOUND, M.soundType, M.detune, M.volume), e._statsRenderer.recordDownload(M.size());
                            break;
                        case we.PLAY_POSITIONAL_SOUND_IN:
                            var N = new Ai;
                            N.unpack(i), d.a.emit(p.a.PLAY_POSITIONAL_SOUND, N.position, N.soundType, N.detune, N.volume), e._statsRenderer.recordDownload(N.size());
                            break;
                        case we.KILL_MEDAL_IN:
                            var w = new Ri;
                            w.unpack(i), d.a.emit(p.a.KILL_MEDAL, w.killMedalType, w.score), e._statsRenderer.recordDownload(w.size());
                            break;
                        case we.SCOREBOARD_TEAM_INFO_IN:
                            var L = new Ci;
                            L.unpack(i), d.a.emit(p.a.SCOREBOARD_TEAM_INFO, L.teams), e._statsRenderer.recordDownload(L.size())
                    }
                }, this.onSocketError = function (t) {
                    e.disconnect(), Ne.a.log("An unknown error has occurred during the connection")
                }, this.onSocketClose = function (t) {
                    e.disconnect(), Ne.a.log("Disconnected from " + e.address + ":" + e.port)
                }, this._primaryLoadout = Ei.b.COMBAT_ASSAULT_RIFLE, this._secondaryLoadout = Ei.c.STRIKE_PISTOL, this._lastHeartbeatSendTime = 0
            }

            var e = t.prototype;
            return e.connect = function (t, e, i, n) {
                this._primaryLoadout = t, this._secondaryLoadout = e, this._ip = i, this._port = n, this._socket = new WebSocket("wss://" + this._ip + ":" + this._port), this._socket.binaryType = "arraybuffer", this.bindSocketListeners(), this.bindEventListeners()
            }, e.bindEventListeners = function () {
                d.a.on(p.a.INPUT_RECEIVED, this.onInputReceived), d.a.on(p.a.CHAT_MESSAGE_SEND, this.onChatMessageSend), d.a.on(p.a.ITEM_PICKUP_REQUEST, this.onItemPickupRequest), d.a.on(p.a.REQUEST_LOADOUT, this.onRequestLoadout), d.a.on(p.a.REQUEST_RESPAWN, this.onRequestRespawn)
            }, e.unbindEventListeners = function () {
                d.a.off(p.a.INPUT_RECEIVED, this.onInputReceived), d.a.off(p.a.CHAT_MESSAGE_SEND, this.onChatMessageSend), d.a.off(p.a.ITEM_PICKUP_REQUEST, this.onItemPickupRequest), d.a.off(p.a.REQUEST_LOADOUT, this.onRequestLoadout), d.a.off(p.a.REQUEST_RESPAWN, this.onRequestRespawn)
            }, e.bindSocketListeners = function () {
                void 0 !== this._socket && (this._socket.addEventListener("open", this.onSocketOpen), this._socket.addEventListener("message", this.onSocketMessage), this._socket.addEventListener("error", this.onSocketError), this._socket.addEventListener("close", this.onSocketClose))
            }, e.unbindSocketListeners = function () {
                void 0 !== this._socket && (this._socket.removeEventListener("open", this.onSocketOpen), this._socket.removeEventListener("message", this.onSocketMessage), this._socket.removeEventListener("error", this.onSocketError), this._socket.removeEventListener("close", this.onSocketClose))
            }, e.sendPacket = function (t) {
                this.connected && (this._socket.send(t.pack()), this._statsRenderer.recordUpload(t.size()))
            }, e.sendBuffer = function (t) {
                this.connected && this._socket.send(t)
            }, e.disconnect = function () {
                this.connected && this._socket.close(), this.unbindEventListeners(), this.unbindSocketListeners(), this._socket = void 0, this._ip = void 0, this._port = void 0, Object(y.c)() !== xt.a.ENDED && (Object(y.r)(xt.a.ENDED), d.a.emit(p.a.GAME_LEAVE))
            }, _()(t, [{
                key: "address", get: function () {
                    return void 0 === this._ip ? "unavailable" : this._ip
                }
            }, {
                key: "port", get: function () {
                    return void 0 === this._port ? -1 : this._port
                }
            }, {
                key: "connected", get: function () {
                    return void 0 !== this._socket && 1 == this._socket.readyState
                }
            }]), t
        }(), xi = function () {
            var t = o()(r.a.mark((function t() {
                var e, i;
                return r.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return h.m.enabled = !0, function () {
                                var t = h.hb.prototype.updateMatrixWorld;
                                h.hb.prototype.updateMatrixWorld = function () {
                                    this.visible && t.apply(this)
                                }
                            }(), t.next = 4, Me();
                        case 4:
                            e = t.sent, i = new bi(e.statsRenderer), d.a.on(p.a.REQUEST_GAME_START, (function (t, e, n, s) {
                                i.connect(t, e, n, s), window.onbeforeunload = function () {
                                    return ""
                                }
                            })), d.a.on(p.a.REQUEST_GAME_LEAVE, (function (t, n, s) {
                                i.disconnect(), e.rebuildScene()
                            })), le.d.dispatch(Object(ue.q)(!0));
                        case 9:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })));
            return function () {
                return t.apply(this, arguments)
            }
        }();
        e.default = xi
    }
}]);