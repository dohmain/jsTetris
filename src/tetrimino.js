import { TETRIS } from './constant';

export default class Tetromino {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = "blue";
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ];
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

  move(delta) {
    if (delta < 0 && this.x > 0) {
      this.x += delta;
    } else if (delta > 0 && this.x < (TETRIS.COLS - this.shape[0].length)) {
      this.x += delta;
    }
  }
}