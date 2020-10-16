import Level from './level';

export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.level = new Level(this.ctx);
    this.time = {start: 0, elapsed: 0, interval: 200};
    this.inputHandler();
    this.startPlay();
  }

  startPlay() {
    let playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", e => {
      e.preventDefault();
      this.play();
    })
  }

  animate(now = 0) {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.interval) {
      this.time.start = now;
      if (!this.level.gravity()) {
        alert("game over")
        cancelAnimationFrame(this.requestId);
      }
    }
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.level.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  play() {
    this.level.reset();
    console.table(this.level.grid);
    this.animate();
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
      console.log(pressedKey)
      if (pressedKey === "i") {
        while (this.level.isValidMove(nextTetromino)) {
          this.level.tetromino.move(nextTetromino);
          nextTetromino = keyMap[pressedKey](this.level.tetromino)
        }
      }
      if (this.level.isValidMove(nextTetromino)) {
        this.level.tetromino.move(nextTetromino)
      }
    }
  }
}