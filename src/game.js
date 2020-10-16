import Level from './level';

export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.level = new Level(this.ctx);
    this.time = {start: 0, elapsed: 0, interval: 200};
    this.play();
    this.inputHandler();
  }

  animate(now = 0) {
    debugger;
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.interval) {
      debugger;
      this.time.start = now;
      this.level.gravity();
    }
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.level.draw();
    requestAnimationFrame(this.animate.bind(this))
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
        console.log("is valid move")
        this.level.tetromino.move(nextTetromino)
      }
    }
  }
}