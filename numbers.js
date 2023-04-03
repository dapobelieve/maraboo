/**
 * @author - dapobelieve
 */

Number.prototype.toNaira = function () {
  if (typeof this !== "number") {
    throw new Error(`Input [${this}] must be a number`);
  }
  return Number((this / 100).toFixed(2));
};

Number.prototype.toKobo = function () {
  if (typeof this !== "number") {
    throw new Error(`Input [${this}] must be a number`);
  }
  return Number((this * 100).toFixed(5));
};

//format number to 2 decimal place
Number.prototype.to2dp = function () {
  if (typeof this !== "number") {
    throw new Error(`Input [${this}] must be a number`);
  }
  return Number(this.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
};

module.exports = {
  Number,
};
