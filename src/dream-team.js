const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(arr) {
  const regex = /[a-zA-Z]{1}/;
  return Array.isArray(arr)
    ? arr
        .filter(x => typeof x == "string")
        .map(x => x.match(regex)[0].toUpperCase())
        .sort((a, b) => a.localeCompare(b))
        .join("")
    : false;
}

module.exports = {
  createDreamTeam,
};
