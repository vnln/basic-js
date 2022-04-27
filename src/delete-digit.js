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
function deleteDigit(num) {
  return Math.max(...[...(num + "")].map((digit, index) => String(num).substring(0, index) + String(num).substring(index + 1)));
}

module.exports = {
  deleteDigit,
};
