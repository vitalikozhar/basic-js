const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * --discard-next исключает следующий элемент массива из преобразованного массива.
 *--discard-prev исключает предыдущий элемент массива из преобразованного массива.
 *--double-next дублирует следующий элемент массива в преобразованном массиве.
 *--double-prev дублирует предыдущий элемент массива в преобразованном массиве.
 */
function transform(arr) {
   if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  console.log(arr);
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] === "--discard-next") {
      i += 1;
    } else if (arr[i] === "--discard-prev") {
      if (arr[i - 2] !== "--discard-next") {
        result.splice(-1);
      }
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
  console.log("________");
  return result;
}

module.exports = {
  transform,
};
