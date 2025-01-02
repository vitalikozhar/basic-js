const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const time = parseFloat(sampleActivity);
  if (
    typeof sampleActivity !== "string" ||
    isNaN(time) ||
    time <= 0 ||
    time > 15
  )
    return false;
  return Math.ceil((Math.log(15 / time) / 0.693) * 5730);
  // remove line with error and write your code here
}

module.exports = {
  dateSample,
};
