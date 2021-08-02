goog.provide("goog.math.Vec2");
goog.require("goog.math");
goog.require("goog.math.Coordinate");
/**
 * @struct
 * @constructor
 * @extends {goog.math.Coordinate}
 * @param {number} x
 * @param {number} y
 */
goog.math.Vec2 = function(x, y) {
  /** @type {number} */ this.x = x;
  /** @type {number} */ this.y = y;
};
goog.inherits(goog.math.Vec2, goog.math.Coordinate);
/**
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.randomUnit = function() {
  var angle = Math.random() * Math.PI * 2;
  return new goog.math.Vec2(Math.cos(angle), Math.sin(angle));
};
/**
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.random = function() {
  var mag = Math.sqrt(Math.random());
  var angle = Math.random() * Math.PI * 2;
  return new goog.math.Vec2(Math.cos(angle) * mag, Math.sin(angle) * mag);
};
/**
 * @param {!goog.math.Coordinate} a
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.fromCoordinate = function(a) {
  return new goog.math.Vec2(a.x, a.y);
};
/**
 * @return {!goog.math.Vec2}
 * @override
 */
goog.math.Vec2.prototype.clone = function() {
  return new goog.math.Vec2(this.x, this.y);
};
/**
 * @return {number}
 */
goog.math.Vec2.prototype.magnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
/**
 * @return {number}
 */
goog.math.Vec2.prototype.squaredMagnitude = function() {
  return this.x * this.x + this.y * this.y;
};
/**
 * @param {number} sx
 * @param {number=} opt_sy
 * @return {!goog.math.Vec2}
 * @override
 */
goog.math.Vec2.prototype.scale = /** @type {function(number,number=):!goog.math.Vec2} */ (goog.math.Coordinate.prototype.scale);
/**
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.prototype.invert = function() {
  this.x = -this.x;
  this.y = -this.y;
  return this;
};
/**
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.prototype.normalize = function() {
  return this.scale(1 / this.magnitude());
};
/**
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.prototype.add = function(b) {
  this.x += b.x;
  this.y += b.y;
  return this;
};
/**
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.prototype.subtract = function(b) {
  this.x -= b.x;
  this.y -= b.y;
  return this;
};
/**
 * @param {number} angle
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.prototype.rotate = function(angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var newX = this.x * cos - this.y * sin;
  var newY = this.y * cos + this.x * sin;
  this.x = newX;
  this.y = newY;
  return this;
};
/**
 * @param {!goog.math.Vec2} v
 * @param {!goog.math.Vec2} axisPoint
 * @param {number} angle
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.rotateAroundPoint = function(v, axisPoint, angle) {
  var res = v.clone();
  return res.subtract(axisPoint).rotate(angle).add(axisPoint);
};
/** @override */ goog.math.Vec2.prototype.equals = function(b) {
  if (this == b) {
    return true;
  }
  return b instanceof goog.math.Vec2 && !!b && this.x == b.x && this.y == b.y;
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {number}
 */
goog.math.Vec2.distance = goog.math.Coordinate.distance;
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {number}
 */
goog.math.Vec2.squaredDistance = goog.math.Coordinate.squaredDistance;
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {boolean}
 */
goog.math.Vec2.equals = goog.math.Coordinate.equals;
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.sum = function(a, b) {
  return new goog.math.Vec2(a.x + b.x, a.y + b.y);
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.difference = function(a, b) {
  return new goog.math.Vec2(a.x - b.x, a.y - b.y);
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @return {number}
 */
goog.math.Vec2.dot = function(a, b) {
  return a.x * b.x + a.y * b.y;
};
/**
 * @param {!goog.math.Vec2} a
 * @param {!goog.math.Vec2} b
 * @return {number}
 */
goog.math.Vec2.determinant = function(a, b) {
  return a.x * b.y - a.y * b.x;
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {!goog.math.Coordinate} b
 * @param {number} x
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.lerp = function(a, b, x) {
  return new goog.math.Vec2(goog.math.lerp(a.x, b.x, x), goog.math.lerp(a.y, b.y, x));
};
/**
 * @param {!goog.math.Coordinate} a
 * @param {number} sx
 * @param {number=} sy
 * @return {!goog.math.Vec2}
 */
goog.math.Vec2.rescaled = function(a, sx, sy) {
  sy = sy === undefined ? sx : sy;
  return new goog.math.Vec2(a.x * sx, a.y * sy);
};

//# sourceMappingURL=goog.math.vec2.js.map
