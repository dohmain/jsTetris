export default class Level {
  reset() {
    this.grid = this.getNewLevel();
  }

  getNewLevel() {
    return Array.from( {length: 20}, () => Array(10).fill(0))
  }
}