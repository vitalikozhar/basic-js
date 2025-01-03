const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let resultString = "";
  let counter = 1;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i + 1]) {
      if (counter === 1) {
        resultString += string[i];
      } else {
        resultString += counter + string[i];
        counter = 1;
      }
    } else {
      counter += 1;
    }
  }
  return resultString; // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
