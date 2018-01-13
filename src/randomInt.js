/**
 * Returns random number from min to max.
 * 
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
module.exports = function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
