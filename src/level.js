import { TETRIS, COLORS, SPEED, POINTS } from './constant';
import Tetromino from './tetromino';
import { stats, time } from './game';

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
    let lineCount = 0
    this.grid.forEach((row, y) => {
      if (row.every(value => value > 0)) {
        lineCount++;
        this.grid.splice(y, 1);
        this.grid.unshift(Array(TETRIS.COLS).fill(0));
      }
    })
    if (lineCount > 0) {
      stats.score += this.getLineClearScore(lineCount);
      stats.lines += lineCount;
      stats.levelProgress += lineCount;
      if (stats.levelProgress >= 10) {
        stats.level++;
        stats.levelProgress -= 10;
        time.interval = stats.level >= 29 ? 17 : stats.level > 19 && stats.level < 29 ? SPEED[19] : SPEED[stats.level]; 
      }
    }
  }

  getLineClearScore(lines) {
    switch (lines) {
      case 1:
        return POINTS.SINGLE * (stats.level + 1)
      case 2: 
        return POINTS.DOUBLE * (stats.level + 1)
      case 3: 
        return POINTS.TRIPLE * (stats.level + 1)
      case 4: 
        return POINTS.TETRIS * (stats.level + 1)
      default:
        break;
    }
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
    let newTetromino = JSON.parse(JSON.stringify(tetromino));
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