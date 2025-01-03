const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const tempArr = [];
  const resultArray = [];
  let indexFirst;
  let tempNameFirst;
  let indexSecond;
  let tempNameSecond;
  for (let i = 0; i < names.length; i += 1) {
    tempNameFirst = "";
    tempNameSecond = "";
    indexFirst = 0;
    indexSecond = 0;
    if (result.includes(names[i])) {
      result.forEach((element) => {
        if (names[i] === element) {
          indexFirst += 1;
        }
      });
      tempNameFirst = `${names[i]}(${indexFirst})`;
    } else {
      tempNameFirst = names[i];
    }
    result.push(names[i]);

    if (tempArr.includes(tempNameFirst)) {
      tempArr.forEach((element) => {
        if (tempNameFirst === element) {
          indexSecond += 1;
        }
      });
      tempNameSecond = `${tempNameFirst}(${indexSecond})`;
    } else {
      tempNameSecond = tempNameFirst;
    }
    tempArr.push(tempNameFirst);
    resultArray.push(tempNameSecond);
  }

  return resultArray; // remove line with error and write your code here
}

module.exports = {
  renameFiles,
};
