const { NotImplementedError } = require("../extensions/index.js");

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
  const digits = n.toString().split("").map(Number);

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] < digits[i + 1]) {
      digits.splice(i, 1);
      return parseInt(digits.join(""), 10);
    }
  }

  digits.pop();
  return parseInt(digits.join(""), 10);
}

module.exports = {
  deleteDigit,
};
