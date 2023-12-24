const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const split1 = s1.split("");
  const split2 = s2.split("");
  let count = 0;
  for (let i = 0; i < split2.length; i++) {
    const index = split1.indexOf(split2[i]);
    if (index !== -1) {
      split1.splice(index, 1);
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
