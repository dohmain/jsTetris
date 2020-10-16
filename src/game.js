import { TETRIS } from './constant'
import Level from './level';
import Tetromino from './tetrimino';



export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.level = new Level(this.ctx);
    this.play();
    this.inputHandler();
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

  play() {
    this.level.reset();
    console.table(this.level.grid);
  }
}