const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }
  const season = date.toISOString().split("-");
  if (+season[1] === 12 || +season[1] < 3) return "winter";
  if (+season[1] > 2 && +season[1] < 6) return "spring";
  if (+season[1] > 5 && +season[1] < 9) return "summer";
  return "autumn";
}

module.exports = {
  getSeason,
};
