goog.provide("goog.math.Coordinate3");
/**
 * @struct
 * @constructor
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_z
 */
goog.math.Coordinate3 = function(opt_x, opt_y, opt_z) {
  /** @type {number} */ this.x = opt_x !== undefined ? opt_x : 0;
  /** @type {number} */ this.y = opt_y !== undefined ? opt_y : 0;
  /** @type {number} */ this.z = opt_z !== undefined ? opt_z : 0;
};
/**
 * @return {!goog.math.Coordinate3}
 */
goog.math.Coordinate3.prototype.clone = function() {
  return new goog.math.Coordinate3(this.x, this.y, this.z);
};
if (goog.DEBUG) {
  /**
   * @return {string}
   * @override
   */
  goog.math.Coordinate3.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
  };
}
/**
 * @param {goog.math.Coordinate3} a
 * @param {goog.math.Coordinate3} b
 * @return {boolean}
 */
goog.math.Coordinate3.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.x == b.x && a.y == b.y && a.z == b.z;
};
/**
 * @param {goog.math.Coordinate3} a
 * @param {goog.math.Coordinate3} b
 * @return {number}
 */
goog.math.Coordinate3.distance = function(a, b) {
  /** @const */ var dx = a.x - b.x;
  /** @const */ var dy = a.y - b.y;
  /** @const */ var dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};
/**
 * @param {goog.math.Coordinate3} a
 * @param {goog.math.Coordinate3} b
 * @return {number}
 */
goog.math.Coordinate3.squaredDistance = function(a, b) {
  /** @const */ var dx = a.x - b.x;
  /** @const */ var dy = a.y - b.y;
  /** @const */ var dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
};
/**
 * @param {goog.math.Coordinate3} a
 * @param {goog.math.Coordinate3} b
 * @return {!goog.math.Coordinate3}
 */
goog.math.Coordinate3.difference = function(a, b) {
  return new goog.math.Coordinate3(a.x - b.x, a.y - b.y, a.z - b.z);
};
/**
 * @return {!Array<number>}
 */
goog.math.Coordinate3.prototype.toArray = function() {
  return [this.x, this.y, this.z];
};
/**
 * @param {Array<number>} a
 * @return {!goog.math.Coordinate3}
 * @throws {Error}
 */
goog.math.Coordinate3.fromArray = function(a) {
  if (a.length <= 3) {
    return new goog.math.Coordinate3(a[0], a[1], a[2]);
  }
  throw new Error("Conversion from an array requires an array of length 3");
};

//# sourceMappingURL=goog.math.coordinate3.js.map
