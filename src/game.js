import Level from './level';
import { SPEED } from './constant';

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

export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.level = new Level(this.ctx);
    this.inputHandler();
    this.handleButtons();
    this.requestId;
  }

  handleButtons() {
    let playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", e => {
      e.preventDefault();
      this.play();
    })
    let pauseBtn = document.getElementById("pause-btn");
    pauseBtn.addEventListener("click", e => {
      e.preventDefault();
      this.pause();
    })
  }

  animate(now = 0) {
    time.elapsed = now - time.start;
    if (time.elapsed > time.interval) {
      time.start = now;
      if (!this.level.gravity()) {
        alert("game over")
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