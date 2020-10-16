export const TETRIS = {
  TILE_SIZE: 30,
  COLS: 10,
  ROWS: 20,
}

export const TETROMINOS = [
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0]
  ],
  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0]
  ],
  [
    [4, 4],
    [4, 4]
  ],
  [
    [0, 5, 5],
    [5, 5, 0],
    [0, 0, 0]
  ],
  [
    [6, 6, 0],
    [0, 6, 6],
    [0, 0, 0]
  ],
  [
    [0, 7, 0],
    [7, 7, 7],
    [0, 0, 0]
  ]
]

export const COLORS = [
  "none",
  "cyan",
  "blue",
  "orange",
  "yellow",
  "green",
  "red",
  "purple"
]

export const POINTS = { // score * level
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800
}