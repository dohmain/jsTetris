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
/*! exports provided: TETRIS, TETROMINOS, COLORS, POINTS, SPEED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETRIS\", function() { return TETRIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETROMINOS\", function() { return TETROMINOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POINTS\", function() { return POINTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPEED\", function() { return SPEED; });\nconst TETRIS = {\n  TILE_SIZE: 30,\n  COLS: 10,\n  ROWS: 20,\n}\n\nconst TETROMINOS = [\n  [\n    [0, 0, 0, 0],\n    [1, 1, 1, 1],\n    [0, 0, 0, 0],\n    [0, 0, 0, 0]\n  ],\n  [\n    [2, 0, 0],\n    [2, 2, 2],\n    [0, 0, 0]\n  ],\n  [\n    [0, 0, 3],\n    [3, 3, 3],\n    [0, 0, 0]\n  ],\n  [\n    [4, 4],\n    [4, 4]\n  ],\n  [\n    [0, 5, 5],\n    [5, 5, 0],\n    [0, 0, 0]\n  ],\n  [\n    [6, 6, 0],\n    [0, 6, 6],\n    [0, 0, 0]\n  ],\n  [\n    [0, 7, 0],\n    [7, 7, 7],\n    [0, 0, 0]\n  ]\n]\n\nconst COLORS = [\n  \"none\",\n  \"cyan\",\n  \"blue\",\n  \"orange\",\n  \"yellow\",\n  \"green\",\n  \"red\",\n  \"purple\"\n]\n\nconst POINTS = { // score * level\n  SINGLE: 100,\n  DOUBLE: 300,\n  TRIPLE: 500,\n  TETRIS: 800\n}\n\nconst SPEED = {\n  0: 800,  // 00\n  1: 717,  // 01\n  2: 633,  // 02\n  3: 550,  // 03\n  4: 467,  // 04\n  5: 383,  // 05\n  6: 300,  // 06\n  7: 217,  // 07\n  8: 133,  // 08\n  9: 100,  // 09\n  10: 83,   // 10 - 12\n  11: 83,\n  12: 83,\n  13: 67,   // 13 - 15\n  14: 67,\n  15: 67,\n  16: 50,   // 16 - 18\n  17: 50,\n  18: 50,\n  19: 33,   // 19 - 28\n  // 29+ is 17ms\n}\n\n//# sourceURL=webpack:///./src/constant.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: statValues, stats, time, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statValues\", function() { return statValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stats\", function() { return stats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"time\", function() { return time; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetris; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\n\n\nlet statValues = {\n  score: 0,\n  level: 0,\n  lines: 0,\n  levelProgress: 0,\n}\n\nlet stats = new Proxy(statValues, {\n  set: (target, key, value) => {\n    target[key] = value;\n    updateStats(key, value);\n    return true;\n  }\n})\n\nfunction updateStats(key, value) {\n  let element = document.getElementById(key);\n  if (element) {\n    element.textContent = value;\n  }\n}\n\nlet time = {start: 0, elapsed: 0, interval: _constant__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"][stats.level]};\n\nlet playBtn = document.getElementById(\"play-btn\");\nlet pauseBtn = document.getElementById(\"pause-btn\");\nlet helpBtn = document.getElementById(\"help-btn\");\n\nclass Tetris {\n  constructor(canvas, canvasPreview) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.ctxNext = canvasPreview.getContext(\"2d\");\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.ctxNext);\n    this.inputHandler();\n    this.handleButtons();\n    this.initPreview();\n    this.requestId;\n  }\n\n  initPreview() {\n    this.ctxNext.canvas.width = 4 * _constant__WEBPACK_IMPORTED_MODULE_1__[\"TETRIS\"].TILE_SIZE;\n    this.ctxNext.canvas.height = 4 * _constant__WEBPACK_IMPORTED_MODULE_1__[\"TETRIS\"].TILE_SIZE;\n    this.ctxNext.scale(_constant__WEBPACK_IMPORTED_MODULE_1__[\"TETRIS\"].TILE_SIZE, _constant__WEBPACK_IMPORTED_MODULE_1__[\"TETRIS\"].TILE_SIZE);\n  }\n\n  handleButtons() {\n    playBtn.addEventListener(\"click\", e => {\n      e.preventDefault();\n      playBtn.classList.add(\"hidden\");\n      pauseBtn.classList.remove(\"hidden\");\n      this.play();\n    })\n    pauseBtn.addEventListener(\"click\", e => {\n      e.preventDefault();\n      this.pause();\n      // this.showHelp();\n    })\n    helpBtn.addEventListener(\"click\", e => {\n      e.preventDefault();\n      this.pause();\n    })\n  }\n  \n  showPlay() {\n    let playBtn = document.getElementById(\"play-btn\");\n    let pauseBtn = document.getElementById(\"pause-btn\");\n    playBtn.classList.remove(\"hidden\");\n    pauseBtn.classList.add(\"hidden\");\n  }\n\n  animate(now = 0) {\n    time.elapsed = now - time.start;\n    if (time.elapsed > time.interval) {\n      time.start = now;\n      if (!this.level.gravity()) {\n        alert(\"game over\")\n        this.showPlay();\n        return cancelAnimationFrame(this.requestId);\n      }\n    }\n    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n    this.level.draw();\n    this.requestId = requestAnimationFrame(this.animate.bind(this));\n  }\n\n  play() {\n    this.reset();\n    if (this.requestId) cancelAnimationFrame(this.requestId);\n    this.animate();\n  }\n\n  pause() {\n    if (!this.requestId) {\n      this.animate();\n      this.toggleButtonText();\n      return;\n    }\n    this.toggleButtonText();\n    cancelAnimationFrame(this.requestId);\n    this.requestId = null;\n\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillRect(1, 3.5, 8, 2.2);\n    this.ctx.font = \"1px 'Press Start 2P'\";\n    this.ctx.fillStyle = \"red\";\n    this.ctx.fillText(\"PAUSED\", 2.1, 5.2)\n  }\n  \n  toggleButtonText() {\n    if (pauseBtn.innerText === \"Pause\") {\n      pauseBtn.innerText = \"Resume\"\n    } else {\n      pauseBtn.innerText = \"Pause\"\n    }\n  }\n\n  reset() {\n    stats.score = 0;\n    stats.level = 0;\n    stats.lines = 0;\n    stats.levelProgress = 0;\n    this.level.reset();\n  }\n\n  inputHandler() {\n    document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false);\n  }\n\n  keyDownHandler(e) {\n    let keyMap = {\n      [\"i\"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),\n      [\"j\"]: tetromino => ({ ...tetromino, x: tetromino.x - 1}),\n      [\"k\"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),\n      [\"l\"]: tetromino => ({ ...tetromino, x: tetromino.x + 1}),\n      [\"u\"]: tetromino => this.level.rotate(tetromino, \"left\"),\n      [\"o\"]: tetromino => this.level.rotate(tetromino, \"right\"),\n    }\n    let pressedKey = e.key.toLowerCase();\n    if (pressedKey === \"escape\") this.pause();\n    if (keyMap[pressedKey]) {\n      e.preventDefault()\n      let nextTetromino = keyMap[pressedKey](this.level.tetromino)\n      if (pressedKey === \"i\") {\n        while (this.level.isValidMove(nextTetromino)) {\n          this.level.tetromino.move(nextTetromino);\n          stats.score += 2;\n          nextTetromino = keyMap[pressedKey](this.level.tetromino)\n        }\n      }\n      if (this.level.isValidMove(nextTetromino)) {\n        this.level.tetromino.move(nextTetromino)\n        if (pressedKey === \"k\") stats.score++\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst canvas = document.getElementById(\"tetris\");\nconst canvasPreview = document.getElementById(\"preview\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, canvasPreview);    \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetromino */ \"./src/tetromino.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nclass Level {\n  constructor(ctx, ctxNext) {\n    this.ctx = ctx;\n    this.ctxNext = ctxNext;\n    this.ctx.canvas.width = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS;\n    this.ctx.canvas.height = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].ROWS;\n    this.ctx.scale(_constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE, _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].TILE_SIZE)\n  }\n  \n  reset() {\n    this.grid = this.getNewLevel();\n    this.tetromino = new _tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n    this.getNextTetromino();\n  }\n\n  getNextTetromino() {\n    this.nextTetromino = new _tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctxNext);\n    this.ctxNext.clearRect(0, 0, this.ctxNext.canvas.width, this.ctxNext.canvas.height);\n    this.nextTetromino.drawNext();\n  }\n\n  getNewLevel() {\n    return Array.from( {length: 20}, () => Array(10).fill(0))\n  }\n\n  gravity() {\n    let moveTetromino = this.tetromino;\n    moveTetromino.y += 1;\n    if (this.isValidMove(moveTetromino)) {\n      this.tetromino.move(moveTetromino);\n    } else {\n      this.freeze();\n      this.lineClear();\n      if (this.tetromino.y === 1) {\n        return false;\n      }\n      this.tetromino = this.nextTetromino;\n      this.tetromino.ctx = this.ctx;\n      this.getNextTetromino();\n    }\n    return true;\n  }\n\n  freeze() {\n    this.tetromino.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.grid[y + this.tetromino.y - 1][x + this.tetromino.x] = value;\n        }\n      });\n    });\n  }\n\n  lineClear() {\n    let lineCount = 0\n    this.grid.forEach((row, y) => {\n      if (row.every(value => value > 0)) {\n        lineCount++;\n        this.grid.splice(y, 1);\n        this.grid.unshift(Array(_constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS).fill(0));\n      }\n    })\n    if (lineCount > 0) {\n      _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].score += this.getLineClearScore(lineCount);\n      _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].lines += lineCount;\n      _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].levelProgress += lineCount;\n      if (_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].levelProgress >= 10) {\n        _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level++;\n        _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].levelProgress -= 10;\n        _game__WEBPACK_IMPORTED_MODULE_2__[\"time\"].interval = _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level >= 29 ? 17 : _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level > 19 && _game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level < 29 ? _constant__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"][19] : _constant__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"][_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level]; \n      }\n    }\n  }\n\n  getLineClearScore(lines) {\n    switch (lines) {\n      case 1:\n        return _constant__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].SINGLE * (_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level + 1)\n      case 2: \n        return _constant__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].DOUBLE * (_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level + 1)\n      case 3: \n        return _constant__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].TRIPLE * (_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level + 1)\n      case 4: \n        return _constant__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].TETRIS * (_game__WEBPACK_IMPORTED_MODULE_2__[\"stats\"].level + 1)\n      default:\n        break;\n    }\n  }\n\n  drawLevel() {\n    this.grid.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillStyle = _constant__WEBPACK_IMPORTED_MODULE_0__[\"COLORS\"][value];\n          this.ctx.fillRect(x, y, 1, 1);\n        }\n      });\n    });\n  }\n  \n  rotate(tetromino, direction) {\n    let newTetromino = JSON.parse(JSON.stringify(tetromino));\n    if (direction === \"left\") {\n      newTetromino.shape.forEach(row => row.reverse());\n      for (let y = 0; y < newTetromino.shape.length; ++y) {\n        for (let x = 0; x < y; ++x) {\n          [newTetromino.shape[x][y], newTetromino.shape[y][x]] = [newTetromino.shape[y][x], newTetromino.shape[x][y]];\n        }\n      }\n      if (this.isValidMove(newTetromino)) return newTetromino;\n    } else if (direction === \"right\") {\n      for (let y = 0; y < newTetromino.shape.length; ++y) {\n        for (let x = 0; x < y; ++x) {\n          [newTetromino.shape[x][y], newTetromino.shape[y][x]] = [newTetromino.shape[y][x], newTetromino.shape[x][y]];\n        }\n      }\n      newTetromino.shape.forEach(row => row.reverse());\n      if (this.isValidMove(newTetromino)) return newTetromino;\n    }\n  }\n  \n  isValidMove(tetromino) {\n    return tetromino.shape.every((row, dy) => {\n      return row.every((value, dx) => {\n        let x = tetromino.x + dx;\n        let y = tetromino.y + dy;\n        return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.empty(x, y));\n      })\n    })\n  }\n  \n  insideWalls(x) {\n    return x >= 0 && x < _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].COLS;\n  }\n  \n  aboveFloor(y) {\n    return y < _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETRIS\"].ROWS;\n  }\n  \n  empty(x, y) {\n    return this.grid[y] && this.grid[y][x] === 0;\n  }\n\n  draw() {\n    this.tetromino.draw();\n    this.drawLevel();\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/tetromino.js":
/*!**************************!*\
  !*** ./src/tetromino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\n\nclass Tetromino {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.tetrominoNumber = Math.floor(Math.random() * _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETROMINOS\"].length)\n    this.color = _constant__WEBPACK_IMPORTED_MODULE_0__[\"COLORS\"][this.tetrominoNumber + 1];\n    this.shape = _constant__WEBPACK_IMPORTED_MODULE_0__[\"TETROMINOS\"][this.tetrominoNumber];\n    this.x = 0;\n    this.y = 0;\n  }\n\n  move(tetromino) {\n    this.x = tetromino.x;\n    this.y = tetromino.y;\n    this.shape = tetromino.shape;\n  }\n\n  draw() {\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);\n        }\n      })\n    })\n  }\n\n  drawNext() {\n    this.ctx.fillStyle = this.color;\n    let dx, dy;\n    switch (this.shape.length) {\n      case 4:\n        dx = 0;\n        dy = .5;\n        break;\n      case 3: \n        dx = .5;\n        dy = .75;\n        break;\n      case 2:\n        dx = 1;\n        dy = 1;\n      default:\n        break;\n    }\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillRect(dx + x, dy + y, 1, 1);\n        }\n      })\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/tetromino.js?");

/***/ })

/******/ });