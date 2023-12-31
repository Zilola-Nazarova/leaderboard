/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/add-score.js":
/*!**********************************!*\
  !*** ./src/modules/add-score.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reset_inputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-inputs.js */ "./src/modules/reset-inputs.js");
/* harmony import */ var _refresh_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-list.js */ "./src/modules/refresh-list.js");
/* harmony import */ var _create_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-game.js */ "./src/modules/create-game.js");



const addScore = async (user, score) => {
  const myScore = {
    user,
    score
  };
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${_create_game_js__WEBPACK_IMPORTED_MODULE_2__["default"]}/scores/`, {
    method: 'POST',
    body: JSON.stringify(myScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
  await (0,_refresh_list_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_reset_inputs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);

/***/ }),

/***/ "./src/modules/create-game.js":
/*!************************************!*\
  !*** ./src/modules/create-game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// I run this code in console when I want to reset the board by creating a new
// game ID, it's not needed index.js since we want to have one Leaderboard
// for multiple sessions instead of creating a new game

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'minimalism',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json());
// .then((json) => console.log(json));

const URL = 'ftUbbpQXGg2o6gbJXzei';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL);

/***/ }),

/***/ "./src/modules/input-preserve.js":
/*!***************************************!*\
  !*** ./src/modules/input-preserve.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setToLocal: () => (/* binding */ setToLocal),
/* harmony export */   takeFromLocal: () => (/* binding */ takeFromLocal)
/* harmony export */ });
const setToLocal = () => {
  const currentInput = {
    name: document.getElementById('user-name').value,
    score: document.getElementById('user-score').value
  };
  localStorage.setItem('currentInput', JSON.stringify(currentInput));
};
const takeFromLocal = () => {
  document.getElementById('user-name').value = JSON.parse(localStorage.getItem('currentInput')).name || '';
  document.getElementById('user-score').value = JSON.parse(localStorage.getItem('currentInput')).score || '';
};


/***/ }),

/***/ "./src/modules/refresh-list.js":
/*!*************************************!*\
  !*** ./src/modules/refresh-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-list.js */ "./src/modules/render-list.js");
/* harmony import */ var _create_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-game.js */ "./src/modules/create-game.js");


const refreshList = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${_create_game_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/scores/`);
  const listData = await response.json();
  (0,_render_list_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listData.result);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshList);

/***/ }),

/***/ "./src/modules/render-list.js":
/*!************************************!*\
  !*** ./src/modules/render-list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-score.js */ "./src/modules/render-score.js");

const renderList = listData => {
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';
  listData = listData.sort((x, y) => x.score - y.score);
  listData.forEach(record => {
    const newScore = (0,_render_score_js__WEBPACK_IMPORTED_MODULE_0__["default"])(record);
    scoreList.prepend(newScore);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);

/***/ }),

/***/ "./src/modules/render-score.js":
/*!*************************************!*\
  !*** ./src/modules/render-score.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderScore = record => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const score = document.createElement('span');
  name.textContent = record.user;
  name.classList.add('player');
  score.textContent = record.score;
  score.classList.add('player-score');
  li.appendChild(name);
  li.appendChild(score);
  return li;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderScore);

/***/ }),

/***/ "./src/modules/reset-inputs.js":
/*!*************************************!*\
  !*** ./src/modules/reset-inputs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _input_preserve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-preserve.js */ "./src/modules/input-preserve.js");

const resetInputs = () => {
  document.getElementById('user-name').value = '';
  document.getElementById('user-score').value = '';
  (0,_input_preserve_js__WEBPACK_IMPORTED_MODULE_0__.setToLocal)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetInputs);

/***/ }),

/***/ "./src/modules/show-error.js":
/*!***********************************!*\
  !*** ./src/modules/show-error.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showError = (type, message) => {
  const errorElements = {
    name: document.getElementById('name-error'),
    score: document.getElementById('score-error')
  };
  const errorElement = errorElements[type];
  errorElement.textContent = message;
  errorElement.classList.add('show');
  setTimeout(() => {
    errorElements.name.classList.remove('show');
    errorElements.score.classList.remove('show');
  }, 3000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showError);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #5e574b;
}

.mulish {
  font-family: 'Mulish', sans-serif;
  text-transform: uppercase;
}

body {
  background-color: #f7f4ee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.8rem 0.8rem;
}

header {
  padding: 2rem 0.8rem 1.8rem;
  border-bottom: 1px solid #b4ae9e;
}

h1 {
  font-size: 2.5rem;
  line-height: 1em;
  text-align: center;
  font-weight: 200;
}

h2 {
  font-size: 1rem;
  letter-spacing: 2px;
}

input,
button,
ul {
  border: 1px solid #b4ae9e;
}

button {
  background-color: transparent;
  text-transform: uppercase;
  padding: 3px 12px;
  font-family: 'Poppins', sans-serif;
}

#board-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-bottom: 2.5rem;
}

ul,
form {
  margin-top: 1.2rem;
}

ul {
  width: 100%;
  list-style: none;
  min-height: 2rem;
}

li {
  font-size: 0.8rem;
  padding: 5px 11px;
  font-family: 'Poppins', sans-serif;
}

li:nth-of-type(even) {
  background-color: #fffdf9;
}

li .player-score {
  float: right;
}

#form-section {
  margin-bottom: 1.5rem;
  width: 80%;
  max-width: 300px;
}

input::placeholder {
  font-family: 'Poppins', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  height: 1.6rem;
  padding: 0 5px;
  margin-bottom: 4px;
}

input:focus {
  outline: 2px solid #b4ae9e;
}

#submit-btn {
  align-self: flex-end;
}

form span {
  display: block;
  height: 1rem;
  font-size: 0.7rem;
  opacity: 0;
  margin-bottom: 8px;
}

form span.show {
  opacity: 1;
}

footer {
  padding: 0.8rem 0;
  border-top: 1px solid #b4ae9e;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

footer a {
  display: block;
  height: 24px;
}

footer img {
  color: #5e574b;
}

@media only screen and (min-width: 768px) {
  body {
    max-width: 1200px;
    margin: auto;
  }

  main {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding: 3rem;
  }

  #board-section {
    width: 45%;
    max-width: 500px;
    margin: unset;
  }

  #form-section {
    width: 35%;
    max-width: 300px;
  }

  h1 {
    font-size: 3.5rem;
    text-align: left;
    padding-left: 2rem;
  }

  h2 {
    font-size: 1.4rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,aAAa;EACf;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: #5e574b;\r\n}\r\n\r\n.mulish {\r\n  font-family: 'Mulish', sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\nbody {\r\n  background-color: #f7f4ee;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2rem 0.8rem 0.8rem;\r\n}\r\n\r\nheader {\r\n  padding: 2rem 0.8rem 1.8rem;\r\n  border-bottom: 1px solid #b4ae9e;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n  line-height: 1em;\r\n  text-align: center;\r\n  font-weight: 200;\r\n}\r\n\r\nh2 {\r\n  font-size: 1rem;\r\n  letter-spacing: 2px;\r\n}\r\n\r\ninput,\r\nbutton,\r\nul {\r\n  border: 1px solid #b4ae9e;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  text-transform: uppercase;\r\n  padding: 3px 12px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n#board-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\nul,\r\nform {\r\n  margin-top: 1.2rem;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  list-style: none;\r\n  min-height: 2rem;\r\n}\r\n\r\nli {\r\n  font-size: 0.8rem;\r\n  padding: 5px 11px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nli:nth-of-type(even) {\r\n  background-color: #fffdf9;\r\n}\r\n\r\nli .player-score {\r\n  float: right;\r\n}\r\n\r\n#form-section {\r\n  margin-bottom: 1.5rem;\r\n  width: 80%;\r\n  max-width: 300px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ninput {\r\n  height: 1.6rem;\r\n  padding: 0 5px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\ninput:focus {\r\n  outline: 2px solid #b4ae9e;\r\n}\r\n\r\n#submit-btn {\r\n  align-self: flex-end;\r\n}\r\n\r\nform span {\r\n  display: block;\r\n  height: 1rem;\r\n  font-size: 0.7rem;\r\n  opacity: 0;\r\n  margin-bottom: 8px;\r\n}\r\n\r\nform span.show {\r\n  opacity: 1;\r\n}\r\n\r\nfooter {\r\n  padding: 0.8rem 0;\r\n  border-top: 1px solid #b4ae9e;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n}\r\n\r\nfooter a {\r\n  display: block;\r\n  height: 24px;\r\n}\r\n\r\nfooter img {\r\n  color: #5e574b;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n  }\r\n\r\n  main {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: space-around;\r\n    padding: 3rem;\r\n  }\r\n\r\n  #board-section {\r\n    width: 45%;\r\n    max-width: 500px;\r\n    margin: unset;\r\n  }\r\n\r\n  #form-section {\r\n    width: 35%;\r\n    max-width: 300px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 3.5rem;\r\n    text-align: left;\r\n    padding-left: 2rem;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_add_score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-score.js */ "./src/modules/add-score.js");
/* harmony import */ var _modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/refresh-list.js */ "./src/modules/refresh-list.js");
/* harmony import */ var _modules_show_error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/show-error.js */ "./src/modules/show-error.js");
/* harmony import */ var _modules_input_preserve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/input-preserve.js */ "./src/modules/input-preserve.js");





const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');

// Render list when page is loaded, prefill unsubmitted input
window.addEventListener('load', () => {
  (0,_modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (localStorage.getItem('currentInput')) {
    (0,_modules_input_preserve_js__WEBPACK_IMPORTED_MODULE_4__.takeFromLocal)();
  } else {
    (0,_modules_input_preserve_js__WEBPACK_IMPORTED_MODULE_4__.setToLocal)();
  }
});
refreshBtn.addEventListener('click', () => {
  (0,_modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
submitBtn.addEventListener('click', async event => {
  event.preventDefault();
  const name = document.getElementById('user-name');
  const score = document.getElementById('user-score');
  if (name.value === '') {
    (0,_modules_show_error_js__WEBPACK_IMPORTED_MODULE_3__["default"])('name', 'Please, enter your name');
  } else if (score.value === '') {
    (0,_modules_show_error_js__WEBPACK_IMPORTED_MODULE_3__["default"])('score', 'Please, enter your score');
  } else if (!/^[0-9]+$/.test(score.value)) {
    (0,_modules_show_error_js__WEBPACK_IMPORTED_MODULE_3__["default"])('score', 'Please, enter a number');
  } else if (name.value && score.value !== '') {
    await (0,_modules_add_score_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name.value, score.value);
  }
});

// Preserve input in localStorage for user comfort
document.getElementById('user-name').onkeyup = _modules_input_preserve_js__WEBPACK_IMPORTED_MODULE_4__.setToLocal;
document.getElementById('user-score').onkeyup = _modules_input_preserve_js__WEBPACK_IMPORTED_MODULE_4__.setToLocal;
})();

/******/ })()
;
//# sourceMappingURL=main.js.map