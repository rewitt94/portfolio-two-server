require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function r(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}}();function e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var t=exports.Board=function(){function t(r){e(this,t),this.grid=[];for(var a=0;a<8;a++){for(var i=[],o=0;o<8;o++){var n=String.fromCharCode(65+a,49+o);i.push(new r(n))}this.grid.push(i)}}return r(t,[{key:"getCell",value:function(r){var e=r.charCodeAt(0)-65,t=r.charCodeAt(1)-49;return this.grid[e][t]}},{key:"getCoordinate",value:function(r){return[r.charCodeAt(0)-65,r.charCodeAt(1)-49]}},{key:"traverse",value:function(r,e,t){var a=this.getCoordinate(r),i=a[0],o=a[1];switch(e){case"up":for(;o<7;)o++,t(this.grid[i][o]);break;case"upRight":for(;o<7&&i<7;)o++,i++,t(this.grid[i][o]);break;case"right":for(;i<7;)i++,t(this.grid[i][o]);break;case"downRight":for(;i<7&&o>0;)i++,o--,t(this.grid[i][o]);break;case"down":for(;o>0;)o--,t(this.grid[i][o]);break;case"downLeft":for(;o>0&&i>0;)i--,o--,t(this.grid[i][o]);break;case"left":for(;i>0;)i--,t(this.grid[i][o]);break;case"upLeft":for(;o<7&&i>0;)i--,o++,t(this.grid[i][o])}}}]),t}();
},{}],3:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=exports.Cell=function(){function n(e){t(this,n),this.idString=e,this.validation=!1}return e(n,[{key:"setBlack",value:function(){document.getElementById(this.idString).style["background-color"]="black"}},{key:"setWhite",value:function(){document.getElementById(this.idString).style["background-color"]="white"}},{key:"setTransparent",value:function(){document.getElementById(this.idString).style.opacity=.65}},{key:"setOpaque",value:function(){document.getElementById(this.idString).style.opacity=1}},{key:"removeColor",value:function(){document.getElementById(this.idString).style["background-color"]=""}},{key:"isClear",value:function(){return""==document.getElementById(this.idString).style["background-color"]}},{key:"getColor",value:function(){return document.getElementById(this.idString).style["background-color"]}},{key:"getOpacity",value:function(){return document.getElementById(this.idString).style.opacity}},{key:"validate",value:function(){this.validation=!0}},{key:"invalidate",value:function(){this.validation=!1}},{key:"flip",value:function(e){var t=document.getElementById(this.idString);t.style.width="60px",t.style.left="10%",console.log("oi"),this.decreaseWidth(t,e)}},{key:"decreaseWidth",value:function(e,t){var n=this;parseInt(e.style.width)>2?(e.style.width=parseInt(e.style.width)-2+"px",e.style.left=parseInt(e.style.left)+1+"px",setTimeout(function(){return n.decreaseWidth(e,t)},1)):(e.style.background=t,this.increaseWidth(e,t))}},{key:"increaseWidth",value:function(e,t){var n=this;parseInt(e.style.width)<60&&(e.style.width=parseInt(e.style.width)+2+"px",e.style.left=parseInt(e.style.left)-1+"px",setTimeout(function(){return n.increaseWidth(e,t)},1))}}]),n}();
},{}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=exports.Scoreboard=function(){function r(){e(this,r),this.blackTurn=!0,this.playingColor="black",this.otherColor="white",this.blackScore=2,this.whiteScore=2}return t(r,[{key:"changePlayer",value:function(){this.blackTurn=!this.blackTurn,this.blackTurn?this.playingColor="black":this.playingColor="white",this.blackTurn?this.otherColor="white":this.otherColor="black"}},{key:"transferScore",value:function(){this.addScore(),this.subtractScore()}},{key:"addScore",value:function(){this.blackTurn?this.blackScore++:this.whiteScore++}},{key:"subtractScore",value:function(){this.blackTurn?this.whiteScore--:this.blackScore--}}]),r}();
},{}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=exports.GameMode=function(){function n(){t(this,n),this.splitScreen=!1,this.multiplayer=!1,this.computerOpponent=!1,this.playingBlack=!1}return e(n,[{key:"playSplitScreen",value:function(){this.splitScreen=!0}},{key:"playMultiplayer",value:function(){this.multiplayer=!0}},{key:"playComputerOpponent",value:function(){this.ai=!0}},{key:"playAsBlack",value:function(){this.playingBlack=!0}},{key:"playAsWhite",value:function(){this.playingBlack=!1}}]),n}();
},{}],1:[function(require,module,exports) {
"use strict";var e=require("./board.js"),t=require("./cell.js"),i=require("./scoreboard.js"),n=require("./gamemode.js"),l=new e.Board(t.Cell),o=new i.Scoreboard,a=new n.GameMode;function r(){l.grid[3][3].setWhite(),l.grid[4][4].setWhite(),l.grid[3][4].setBlack(),l.grid[4][3].setBlack()}function c(){document.getElementById("black_score").innerHTML=o.blackScore,document.getElementById("white_score").innerHTML=o.whiteScore}function d(e){for(var t=["up","upRight","right","downRight","down","downLeft","left","upLeft"],i=[],n=0;n<8;n++){var a=!1,r=!0,c=0;l.traverse(e,t[n],function(e){r&&!a&&(e.getColor()==o.otherColor?c++:e.getColor()==o.playingColor&&c>0?a=!0:r=!1)}),a||(c=0),i.push(c)}return i}function s(e){var t=d(e),i=l.getCell(e);return t.some(function(e){return e>0})&&i.isClear()}function y(){}function u(e){var t=l.getCell(e.toString());t.setOpaque(),o.blackTurn?t.setBlack():t.setWhite();for(var i=["up","upRight","right","downRight","down","downLeft","left","upLeft"],n=d(e),a=0;a<8;a++){var r=0;l.traverse(e,i[a],function(e){r<n[a]&&(o.blackTurn?e.flip("black"):e.flip("white"),o.transferScore()),r++})}o.addScore(),o.changePlayer(),c(),t.invalidate()}r(),window.chooseGameMode=function(e){switch(e){case"split_screen":a.playSplitScreen();break;case"multiplayer":a.playMultiplayer(),document.getElementById("lobby_options_div").style.visibility="visible";break;case"computer_opponent":a.playComputerOpponent(),document.getElementById("player_color_div").style.visibility="visible"}document.getElementById("game_mode_div").style.visibility="hidden"},window.chooseColor=function(e){switch(e){case"black":a.playAsBlack();break;case"white":a.playAsWhite()}document.getElementById("player_color_div").style.visibility="hidden"},window.showMove=function(e){if(s(e)){var t=l.getCell(e);o.blackTurn?t.setBlack():t.setWhite(),t.setTransparent(),t.validate()}},window.hideMove=function(e){var t=l.getCell(e);t.validation&&(t.setOpaque(),t.removeColor(),t.invalidate())},window.playMove=function(e){l.getCell(e).validation&&(a.splitScreen?u(e):a.multiplayer?(a.playingBlack&&o.blackTurn||!a.playingBlack&&!o.blackTurn)&&p.send("play_move,"+b+","+e):a.computerOpponent&&(a.playingBlack&&o.blackTurn||!a.playingBlack&&!o.blackTurn)&&(u(e),y()))};var p=new WebSocket("ws://ricky.hewitt.tech:443");p.onopen=function(){console.log("websocket is connected...")};var v=!1,m=!0,b="";window.createMatch=function(){document.getElementById("lobby_options_div").style.visibility="hidden",document.getElementById("post_match_div").style.visibility="visible"},window.postMatch=function(e){if(!v){var t="post,"+Math.random().toString()+","+e;p.send(t),v=!0}},window.searchMatches=function(){p.send("search"),document.getElementById("lobby_options_div").style.visibility="hidden",document.getElementById("lobby_div").style.visibility="visible"},p.onmessage=function(e){if(e=e.data.split(","),console.log(e),"lobby"==e[0]){var t=document.getElementById("lobby_div");if("no_games"==e[1]){var i=document.createElement("H1");i.innerHTML="No games available",t.appendChild(i)}else for(var n=function(){o=document.createElement("button");var i=e[3*l+1];o.addEventListener("click",function(){p.send("accept,"+i)}),o.innerHTML=e[3*l+2],t.appendChild(o)},l=0;l<e.length/3;l++){var o;n()}}"start_game_as_black"==e[0]&&(a.playAsBlack(),b=e[1],m=!0,v=!1,document.getElementById("lobby_div").style.visibility="hidden",document.getElementById("post_match_div").style.visibility="hidden",alert("you will play as black")),"start_game_as_white"==e[0]&&(a.playAsWhite(),b=e[1],m=!0,v=!1,document.getElementById("lobby_div").style.visibility="hidden",document.getElementById("post_match_div").style.visibility="hidden",alert("you will play as white")),"make_move"==e[0]&&u(e[1]),"other_player_missing"==e[0]&&(alert("connection failed"),location.reload())};
},{"./board.js":5,"./cell.js":3,"./scoreboard.js":4,"./gamemode.js":6}]},{},[1])