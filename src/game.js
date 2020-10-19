import Level from './level';
import { SPEED } from './constant';

export let values = {
  score: 0,
  level: 0,
  lines: 0,
  levelProgress: 0,
}

export let stats = {
  score: 0,
  level: 0,
  lines: 0,
  levelProgress: 0,
}

export let time = {start: 0, elapsed: 0, interval: SPEED[stats.level]};


export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.level = new Level(this.ctx);
    this.inputHandler();
    this.startPlay();
    this.requestId;
  }

  startPlay() {
    let playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", e => {
      e.preventDefault();
      this.play();
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
        stats.score++
      }
    }
  }
}