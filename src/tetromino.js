import { TETROMINOS, COLORS } from './constant';

export default class Tetromino {
  constructor(ctx) {
    this.ctx = ctx;
    this.tetrominoNumber = Math.floor(Math.random() * TETROMINOS.length)
    this.color = COLORS[this.tetrominoNumber + 1];
    this.shape = TETROMINOS[this.tetrominoNumber];
    this.x = 0;
    this.y = 0;
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
}