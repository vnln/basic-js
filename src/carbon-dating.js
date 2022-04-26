const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15; //decay rate
const HALF_LIFE_PERIOD = 5730; // years

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

function dateSample(sample) {
  const decayConstant = 0.693 / HALF_LIFE_PERIOD;
  const regex = /^\d+\.*\d*$/;
  return typeof sample !== "string" || !regex.test(sample) || sample <= 0 || sample >= MODERN_ACTIVITY
    ? false
    : Math.ceil(Math.log(MODERN_ACTIVITY / sample) / decayConstant);
}

module.exports = {
  dateSample,
};
