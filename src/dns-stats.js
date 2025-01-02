const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((element) => {
    let arr = element.split(".");
    let addressName = "";
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i += 1) {
      addressName += `.${arr[i]}`;
      if (result[addressName] === undefined) {
        result[addressName] = 1;
      } else {
        result[addressName] += 1;
      }
    }
  });
  return result; // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
