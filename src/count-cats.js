const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  function findElement(row, target) {
    for (let j = 0; j < row.length; j++) {
      if (row[j] === target) {
        return true;
      }
    }
    return false;
  }

  function findCatsInArray(arr) {
    let catsCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        catsCount += findCatsInArray(arr[i]);
      } else {
        if (findElement([arr[i]], targetElement)) {
          catsCount++;
        }
      }
    }
    return catsCount;
  }

  const targetElement = "^^";
  return findCatsInArray(matrix);
}

module.exports = {
  countCats,
};
