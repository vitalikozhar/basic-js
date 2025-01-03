const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArray = new Array(matrix.length)
    .fill(null)
    .map(() => new Array(matrix[0].length).fill(0));

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],         [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      directions.forEach(([dx, dy]) => {
        const x = i + dx;
        const y = j + dy;
        if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length) {
          if (matrix[x][y]) {
            resultArray[i][j] += 1;
          }
        }
      });
    }
  }
  return resultArray;
}

module.exports = {
  minesweeper,
};
