import { TETRIS } from './constant';
import Tetromino from './tetrimino';

export default class Level {
  constructor(ctx) {
    this.ctx = ctx;
    this.ctx.canvas.width = TETRIS.TILE_SIZE * TETRIS.COLS;
    this.ctx.canvas.height = TETRIS.TILE_SIZE * TETRIS.ROWS;
    this.ctx.scale(TETRIS.TILE_SIZE, TETRIS.TILE_SIZE)
  }
  
  reset() {
    this.grid = this.getNewLevel();
    this.tetromino = new Tetromino(this.ctx);
  }

  getNewLevel() {
    return Array.from( {length: 20}, () => Array(10).fill(0))
  }

  isValidMove(tetromino) {
    return tetromino.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = tetromino.x + dx;
        let y = tetromino.y + dy;
        return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.empty(x, y));
      })
    })
  }

  rotate(tetromino, direction) {
    if (direction === "left") {
      tetromino.shape.forEach(row => row.reverse());
      for (let y = 0; y < tetromino.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [tetromino.shape[x][y], tetromino.shape[y][x]] = [tetromino.shape[y][x], tetromino.shape[x][y]];
        }
      }
      return tetromino;
    } else if (direction === "right") {
      for (let y = 0; y < tetromino.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [tetromino.shape[x][y], tetromino.shape[y][x]] = [tetromino.shape[y][x], tetromino.shape[x][y]];
        }
      }
      tetromino.shape.forEach(row => row.reverse());
      return tetromino;
    }
  }

  insideWalls(x) {
    return x >= 0 && x < TETRIS.COLS;
  }

  aboveFloor(y) {
    return y <= TETRIS.ROWS;
  }

  empty(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }
}