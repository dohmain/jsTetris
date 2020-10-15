import { TETRIS, TETROMINOS, COLORS } from './constant';

export default class Tetromino {
  constructor(ctx) {
    this.ctx = ctx;
    this.tetrominoNumber = Math.floor(Math.random() * TETROMINOS.length)
    this.color = COLORS[this.tetrominoNumber];
    this.shape = TETROMINOS[this.tetrominoNumber];
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      })
    })
  }

  rotate(direction) {
    if (direction === "left") {
      this.shape.forEach(row => row.reverse());
      for (let y = 0; y < this.shape.length; y++) {
        for (let x = 0; x < y; x++) {
          [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]]
        }
      }
    } else if (direction === "right") {
      for (let y = 0; y < this.shape.length; y++) {
        for (let x = 0; x < y; x++) {
          [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]]
        }
      }
      this.shape.forEach(row => row.reverse());
    }
  }

  move(direction) {
    const directionMap = {left: -1, down: 1, right: 1}
    if (direction === "down") {
      this.y += directionMap[direction]
    } else {
      if (direction === "left" && this.x > 0 || direction === "right" && this.x < (TETRIS.COLS - this.shape[0].length))
      this.x += directionMap[direction]
    }
  }
}