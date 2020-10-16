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
/*! exports provided: TETRIS, TETROMINOS, COLORS, POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETRIS\", function() { return TETRIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETROMINOS\", function() { return TETROMINOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POINTS\", function() { return POINTS; });\nconst TETRIS = {\n  TILE_SIZE: 30,\n  COLS: 10,\n  ROWS: 20,\n}\n\nconst TETROMINOS = [\n  [\n    [0, 0, 0, 0],\n    [1, 1, 1, 1],\n    [0, 0, 0, 0],\n    [0, 0, 0, 0]\n  ],\n  [\n    [2, 0, 0],\n    [2, 2, 2],\n    [0, 0, 0]\n  ],\n  [\n    [0, 0, 3],\n    [3, 3, 3],\n    [0, 0, 0]\n  ],\n  [\n    [4, 4],\n    [4, 4]\n  ],\n  [\n    [0, 5, 5],\n    [5, 5, 0],\n    [0, 0, 0]\n  ],\n  [\n    [6, 6, 0],\n    [0, 6, 6],\n    [0, 0, 0]\n  ],\n  [\n    [0, 7, 0],\n    [7, 7, 7],\n    [0, 0, 0]\n  ]\n]\n\nconst COLORS = [\n  \"cyan\",\n  \"blue\",\n  \"orange\",\n  \"yellow\",\n  \"green\",\n  \"red\",\n  \"purple\"\n]\n\nconst POINTS = { // score * level\n  SINGLE: 100,\n  DOUBLE: 300,\n  TRIPLE: 500,\n  TETRIS: 800\n}\n\n//# sourceURL=webpack:///./src/constant.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetris; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\nclass Tetris {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n    this.time = {start: 0, elapsed: 0, interval: 200};\n    this.play();\n    this.inputHandler();\n  }\n\n  animate(now = 0) {\n    this.time.elapsed = now - this.time.start;\n    if (this.time.elapsed > this.time.interval) {\n      this.time.start = now;\n      this.level.gravity();\n    }\n    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n    this.level.draw();\n    requestAnimationFrame(this.animate.bind(this))\n  }\n\n  play() {\n    this.level.reset();\n    console.table(this.level.grid);\n    this.animate();\n  }\n\n  inputHandler() {\n    document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false);\n  }\n\n  keyDownHandler(e) {\n    let keyMap = {\n      [\"i\"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),\n      [\"j\"]: tetromino => ({ ...tetromino, x: tetromino.x - 1}),\n      [\"k\"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),\n      [\"l\"]: tetromino => ({ ...tetromino, x: tetromino.x + 1}),\n      [\"u\"]: tetromino => this.level.rotate(tetromino, \"left\"),\n      [\"o\"]: tetromino => this.level.rotate(tetromino, \"right\"),\n    }\n    let pressedKey = e.key.toLowerCase();\n\n    if (keyMap[pressedKey]) {\n      e.preventDefault()\n      let nextTetromino = keyMap[pressedKey](this.level.tetromino)\n      console.log(pressedKey)\n      if (pressedKey === \"i\") {\n        while (this.level.isValidMove(nextTetromino)) {\n          this.level.tetromino.move(nextTetromino);\n          nextTetromino = keyMap[pressedKey](this.level.tetromino)\n        }\n      }\n      if (this.level.isValidMove(nextTetromino)) {\n        console.log(\"is valid move\")\n        this.level.tetromino.move(nextTetromino)\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetromino */ \"./src/tetromino.js\");\n\n\n\nclass Level {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.ctx.canvas.width = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS;\n    this.ctx.canvas.height = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].ROWS;\n    this.ctx.scale(_constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE, _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE)\n  }\n  \n  reset() {\n    this.grid = this.getNewLevel();\n    this.tetromino = new _tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n  }\n\n  getNewLevel() {\n    return Array.from( {length: 20}, () => Array(10).fill(0))\n  }\n\n  gravity() {\n    let nextTetromino = this.tetromino;\n    nextTetromino.y += 1;\n    if (this.isValidMove(nextTetromino)) {\n      this.tetromino.move(nextTetromino);\n    } else {\n      this.freeze();\n      this.tetromino = new _tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n      console.table(this.grid)\n    }\n  }\n\n  freeze() {\n    this.tetromino.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.grid[y + this.tetromino.y - 1][x + this.tetromino.x] = value;\n        }\n      });\n    });\n  }\n  \n  rotate(tetromino, direction) {\n    if (direction === \"left\") {\n      tetromino.shape.forEach(row => row.reverse());\n      for (let y = 0; y < tetromino.shape.length; ++y) {\n        for (let x = 0; x < y; ++x) {\n          [tetromino.shape[x][y], tetromino.shape[y][x]] = [tetromino.shape[y][x], tetromino.shape[x][y]];\n        }\n      }\n      return tetromino;\n    } else if (direction === \"right\") {\n      for (let y = 0; y < tetromino.shape.length; ++y) {\n        for (let x = 0; x < y; ++x) {\n          [tetromino.shape[x][y], tetromino.shape[y][x]] = [tetromino.shape[y][x], tetromino.shape[x][y]];\n        }\n      }\n      tetromino.shape.forEach(row => row.reverse());\n      return tetromino;\n    }\n  }\n  \n  isValidMove(tetromino) {\n    return tetromino.shape.every((row, dy) => {\n      return row.every((value, dx) => {\n        let x = tetromino.x + dx;\n        let y = tetromino.y + dy;\n        return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.empty(x, y));\n      })\n    })\n  }\n  \n  insideWalls(x) {\n    return x >= 0 && x < _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS;\n  }\n  \n  aboveFloor(y) {\n    return y < _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].ROWS;\n  }\n  \n  empty(x, y) {\n    return this.grid[y] && this.grid[y][x] === 0;\n  }\n\n  draw() {\n    this.tetromino.draw();\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/tetromino.js":
/*!**************************!*\
  !*** ./src/tetromino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\n\nclass Tetromino {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.tetrominoNumber = Math.floor(Math.random() * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETROMINOS\"].length)\n    this.color = _constant__WEBPACK_IMPORTED_MODULE_0__[\"COLORS\"][this.tetrominoNumber];\n    this.shape = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETROMINOS\"][this.tetrominoNumber];\n    this.x = 3;\n    this.y = 0;\n  }\n\n  move(tetromino) {\n    this.x = tetromino.x;\n    this.y = tetromino.y;\n    this.shape = tetromino.shape;\n  }\n\n  draw() {\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);\n        }\n      })\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/tetromino.js?");

/***/ })

/******/ });