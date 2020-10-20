import { TETROMINOS, COLORS } from './constant';

export default class Tetromino {
  constructor(ctx) {
    this.ctx = ctx;
    this.tetrominoNumber = Math.floor(Math.random() * TETROMINOS.length)
    this.color = COLORS[this.tetrominoNumber + 1];
    this.shape = TETROMINOS[this.tetrominoNumber];
    this.x = 0;
    this.y = -1;
  }

  getStartPos() {
    this.x = this.tetrominoNumber === 3 ? 4 : 3;
  }

  move(tetromino) {
    this.x = tetromino.x;
    this.y = tetromino.y;
    this.shape = tetromino.shape;
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

  drawNext() {
    this.ctx.fillStyle = this.color;
    let dx, dy;
    switch (this.shape.length) {
      case 4:
        dx = 0;
        dy = .5;
        break;
      case 3: 
        dx = .5;
        dy = .75;
        break;
      case 2:
        dx = 1;
        dy = 1;
      default:
        break;
    }
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(dx + x, dy + y, 1, 1);
        }
      })
    })
  }
}