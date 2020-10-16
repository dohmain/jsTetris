import { TETRIS, COLORS } from './constant';
import Tetromino from './tetromino';

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

  gravity() {
    let nextTetromino = this.tetromino;
    nextTetromino.y += 1;
    if (this.isValidMove(nextTetromino)) {
      this.tetromino.move(nextTetromino);
    } else {
      this.freeze();
      this.lineClear();
      if (this.tetromino.y === 1) {
        return false;
      }
      this.tetromino = new Tetromino(this.ctx);
    }
    return true;
  }

  freeze() {
    this.tetromino.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.tetromino.y - 1][x + this.tetromino.x] = value;
        }
      });
    });
  }

  lineClear() {
    this.grid.forEach((row, y) => {
      if (row.every(value => value > 0)) {
        this.grid.splice(y, 1);
        this.grid.unshift(Array(TETRIS.COLS).fill(0));
      }
    })
  }

  drawLevel() {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }
  
  rotate(tetromino, direction) {
    let newTetromino = tetromino;
    if (direction === "left") {
      newTetromino.shape.forEach(row => row.reverse());
      for (let y = 0; y < newTetromino.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [newTetromino.shape[x][y], newTetromino.shape[y][x]] = [newTetromino.shape[y][x], newTetromino.shape[x][y]];
        }
      }
      if (this.isValidMove(newTetromino)) return newTetromino;
    } else if (direction === "right") {
      for (let y = 0; y < newTetromino.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [newTetromino.shape[x][y], newTetromino.shape[y][x]] = [newTetromino.shape[y][x], newTetromino.shape[x][y]];
        }
      }
      newTetromino.shape.forEach(row => row.reverse());
      if (this.isValidMove(newTetromino)) return newTetromino;
    }
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
  
  insideWalls(x) {
    return x >= 0 && x < TETRIS.COLS;
  }
  
  aboveFloor(y) {
    return y < TETRIS.ROWS;
  }
  
  empty(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  draw() {
    this.tetromino.draw();
    this.drawLevel();
  }
}