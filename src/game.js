import { TETRIS } from './constant'
import Level from './level';
import Tetromino from './tetrimino';



export default class Tetris {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.ctx.canvas.width = TETRIS.TILE_SIZE * TETRIS.COLS;
    this.ctx.canvas.height = TETRIS.TILE_SIZE * TETRIS.ROWS;
    this.ctx.scale(TETRIS.TILE_SIZE, TETRIS.TILE_SIZE)
    this.level = new Level();
    this.play();
    this.inputHandler();
  }

  inputHandler() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
  }

  keyDownHandler(e) {
    console.log(e.key)
    if (e.key.toLowerCase() === "j" || e.key.toLowerCase() === "l") {
      let delta = e.key.toLowerCase() === "j" ? -1 : 1;
      this.level.piece.move(delta);
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      this.level.piece.draw();
      console.table(this.level.grid);
    }
  }

  play() {
    this.level.reset();
    this.tetromino = new Tetromino(this.ctx);
    this.tetromino.draw();
    this.level.piece = this.tetromino;
    console.table(this.level.grid);
  }
}