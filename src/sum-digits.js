const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arrayNumber = String(n).split("");
  const summa = arrayNumber.reduce((acc, sum) => acc + +sum, 0);
  if (summa > 9) return getSumOfDigits(summa);
  return summa;
}

module.exports = {
  getSumOfDigits,
};
