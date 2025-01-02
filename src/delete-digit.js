const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = n.toString(10);
  const arrayNumbers = [];
  for (let i = 0; i < stringN.length; i += 1){
    arrayNumbers.push(stringN.replace(`${stringN[i]}`, ''));
  }
  return Math.max(...arrayNumbers);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
