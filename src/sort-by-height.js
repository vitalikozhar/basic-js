const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrMinus = [];
  let array = [];
  const result = [];
  arr.forEach((elem, index) => {
    if (elem === -1) {
      arrMinus.push(index);
    } else {
      array.push(elem);
    }
  });
  array = array.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arrMinus.includes(i)) {
      result.push(-1);
    } else {
      result.push(array[j]);
      j += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
