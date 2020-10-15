/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: TETRIS, TETROMINOS, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETRIS\", function() { return TETRIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETROMINOS\", function() { return TETROMINOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\nconst TETRIS = {\n  TILE_SIZE: 30,\n  COLS: 10,\n  ROWS: 20,\n}\n\nconst TETROMINOS = [\n  [\n    [0, 0, 0, 0],\n    [1, 1, 1, 1],\n    [0, 0, 0, 0],\n    [0, 0, 0, 0]\n  ],\n  [\n    [2, 0, 0],\n    [2, 2, 2],\n    [0, 0, 0]\n  ],\n  [\n    [0, 0, 3],\n    [3, 3, 3],\n    [0, 0, 0]\n  ],\n  [\n    [4, 4],\n    [4, 4]\n  ],\n  [\n    [0, 5, 5],\n    [5, 5, 0],\n    [0, 0, 0]\n  ],\n  [\n    [6, 6, 0],\n    [0, 6, 6],\n    [0, 0, 0]\n  ],\n  [\n    [0, 7, 0],\n    [7, 7, 7],\n    [0, 0, 0]\n  ]\n]\n\nconst COLORS = [\n  \"cyan\",\n  \"blue\",\n  \"orange\",\n  \"yellow\",\n  \"green\",\n  \"red\",\n  \"purple\"\n]\n\n//# sourceURL=webpack:///./src/constant.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetris; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _tetrimino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetrimino */ \"./src/tetrimino.js\");\n\n\n\n\n\n\nclass Tetris {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.ctx.canvas.width = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS;\n    this.ctx.canvas.height = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].ROWS;\n    this.ctx.scale(_constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE, _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE)\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.play();\n    this.inputHandler();\n  }\n\n  inputHandler() {\n    document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false);\n  }\n\n  keyDownHandler(e) {\n    let pressedKey = e.key.toLowerCase();\n    const moveMap = {j: \"left\", k: \"down\", l: \"right\"}\n    if (pressedKey === \"j\" || pressedKey === \"k\" || pressedKey === \"l\") {\n      e.preventDefault();\n      let direction = moveMap[pressedKey];\n      this.level.piece.move(direction);\n      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)\n      this.level.piece.draw();\n    }\n    const rotateMap = {u: \"left\", o: \"right\"}\n    if (pressedKey === \"u\" || pressedKey === \"o\") {\n      e.preventDefault();\n      this.level.piece.rotate(rotateMap[pressedKey]);\n      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)\n      this.level.piece.draw();\n    }\n  }\n\n  play() {\n    this.level.reset();\n    this.tetromino = new _tetrimino__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    this.tetromino.draw();\n    this.level.piece = this.tetromino;\n    console.table(this.level.grid);\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst canvas = document.getElementById(\"tetris\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nclass Level {\n  reset() {\n    this.grid = this.getNewLevel();\n  }\n\n  getNewLevel() {\n    return Array.from( {length: 20}, () => Array(10).fill(0))\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/tetrimino.js":
/*!**************************!*\
  !*** ./src/tetrimino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\n\nclass Tetromino {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.color = \"blue\";\n    this.shape = [\n      [2, 0, 0],\n      [2, 2, 2],\n      [0, 0, 0]\n    ];\n    this.x = 3;\n    this.y = 0;\n  }\n\n  draw() {\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);\n        }\n      })\n    })\n  }\n\n  rotate(direction) {\n    if (direction === \"left\") {\n      this.shape.forEach(row => row.reverse());\n      for (let y = 0; y < this.shape.length; y++) {\n        for (let x = 0; x < y; x++) {\n          [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]]\n        }\n      }\n    } else if (direction === \"right\") {\n      for (let y = 0; y < this.shape.length; y++) {\n        for (let x = 0; x < y; x++) {\n          [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]]\n        }\n      }\n      this.shape.forEach(row => row.reverse());\n    }\n  }\n\n  move(direction) {\n    const directionMap = {left: -1, down: 1, right: 1}\n    if (direction === \"down\") {\n      this.y += directionMap[direction]\n    } else {\n      if (direction === \"left\" && this.x > 0 || direction === \"right\" && this.x < (_constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS - this.shape[0].length))\n      this.x += directionMap[direction]\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/tetrimino.js?");

/***/ })

/******/ });