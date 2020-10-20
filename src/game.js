import Level from './level';
import { SPEED, TETRIS } from './constant';

export let statValues = {
  score: 0,
  level: 0,
  lines: 0,
  levelProgress: 0,
}

export let stats = new Proxy(statValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateStats(key, value);
    return true;
  }
})

function updateStats(key, value) {
  let element = document.getElementById(key);
  if (element) {
    element.textContent = value;
  }
}

export let time = {start: 0, elapsed: 0, interval: SPEED[stats.level]};

let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");
let helpBtn = document.getElementById("help-btn");

export default class Tetris {
  constructor(canvas, canvasPreview) {
    this.ctx = canvas.getContext("2d");
    this.ctxNext = canvasPreview.getContext("2d");
    this.level = new Level(this.ctx, this.ctxNext);
    this.inputHandler();
    this.handleButtons();
    this.initPreview();
    this.requestId;
  }

  initPreview() {
    this.ctxNext.canvas.width = 4 * TETRIS.TILE_SIZE;
    this.ctxNext.canvas.height = 4 * TETRIS.TILE_SIZE;
    this.ctxNext.scale(TETRIS.TILE_SIZE, TETRIS.TILE_SIZE);
  }

  handleButtons() {
    playBtn.addEventListener("click", e => {
      e.preventDefault();
      playBtn.classList.add("hidden");
      pauseBtn.classList.remove("hidden");
      this.play();
    })
    pauseBtn.addEventListener("click", e => {
      e.preventDefault();
      this.pause();
      this.toggleButtonText();
      this.showPause();
    })
    helpBtn.addEventListener("click", e => {
      e.preventDefault();
      if (this.requestId) this.pause();
      this.showHelp();
    })
  }
  
  showPlay() {
    let playBtn = document.getElementById("play-btn");
    let pauseBtn = document.getElementById("pause-btn");
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  }

  animate(now = 0) {
    time.elapsed = now - time.start;
    if (time.elapsed > time.interval) {
      time.start = now;
      if (!this.level.gravity()) {
        alert("game over")
        this.showPlay();
        return cancelAnimationFrame(this.requestId);
      }
    }
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.level.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  play() {
    this.reset();
    if (this.requestId) cancelAnimationFrame(this.requestId);
    this.animate();
  }

  pause() {
    if (!this.requestId) {
      this.animate();
      return;
    }
    cancelAnimationFrame(this.requestId);
    this.requestId = null;
  }

  showPause() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(1, 3.5, 8, 2.2);
    this.ctx.font = "1px 'Press Start 2P'";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("PAUSED", 2.1, 5.2)
  }

  showHelp() {
    let x = 1;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(.6, 3.5, 8.8, 9);
    this.ctx.font = ".8px 'Press Start 2P'";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Controls", x, 5.2);
    this.ctx.font = ".5px 'Press Start 2P'";
    this.ctx.fillText("I = Hard Drop", x, 6.2);
    this.ctx.fillText("J = Left", x, 7.2);
    this.ctx.fillText("K = Soft Drop", x, 8.2);
    this.ctx.fillText("L = Left", x, 9.2);
    this.ctx.fillText("U = Rotate Left", x, 10.2);
    this.ctx.fillText("O = Rotate Right", x, 11.2);
  }
  
  toggleButtonText() {
    if (pauseBtn.innerText === "Pause") {
      pauseBtn.innerText = "Resume"
    } else {
      pauseBtn.innerText = "Pause"
    }
  }

  reset() {
    stats.score = 0;
    stats.level = 0;
    stats.lines = 0;
    stats.levelProgress = 0;
    this.level.reset();
  }

  inputHandler() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
  }

  keyDownHandler(e) {
    let keyMap = {
      ["i"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),
      ["j"]: tetromino => ({ ...tetromino, x: tetromino.x - 1}),
      ["k"]: tetromino => ({ ...tetromino, y: tetromino.y + 1}),
      ["l"]: tetromino => ({ ...tetromino, x: tetromino.x + 1}),
      ["u"]: tetromino => this.level.rotate(tetromino, "left"),
      ["o"]: tetromino => this.level.rotate(tetromino, "right"),
    }
    let pressedKey = e.key.toLowerCase();
    if (pressedKey === "escape") this.pause();
    if (keyMap[pressedKey]) {
      e.preventDefault()
      let nextTetromino = keyMap[pressedKey](this.level.tetromino)
      if (pressedKey === "i") {
        while (this.level.isValidMove(nextTetromino)) {
          this.level.tetromino.move(nextTetromino);
          stats.score += 2;
          nextTetromino = keyMap[pressedKey](this.level.tetromino)
        }
      }
      if (this.level.isValidMove(nextTetromino)) {
        this.level.tetromino.move(nextTetromino)
        if (pressedKey === "k") stats.score++
      }
    }
  }
}