const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (isNaN(options.repeatTimes)) options.repeatTimes = 1;
  if (isNaN(options.additionRepeatTimes)) options.additionRepeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.addition === undefined) options.addition = "";
  let resultTemp = "" + str;
  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    resultTemp += options.addition;
    if (i < options.additionRepeatTimes - 1)
      resultTemp += options.additionSeparator;
  }
  let result = "";
  for (let i = 0; i < options.repeatTimes; i += 1) {
    result += resultTemp;
    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
