goog.provide("goog.math.Matrix");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.math");
goog.require("goog.math.Size");
goog.require("goog.string");
/**
 * @final
 * @struct
 * @constructor
 * @param {(!goog.math.Matrix|!Array<!Array<number>>|!goog.math.Size|number)} m
 * @param {number=} opt_n
 */
goog.math.Matrix = function(m, opt_n) {
  if (m instanceof goog.math.Matrix) {
    this.array_ = m.toArray();
  } else {
    if (goog.isArrayLike(m) && goog.math.Matrix.isValidArray(/** @type {!Array<!Array<number>>} */ (m))) {
      this.array_ = goog.array.clone(/** @type {!Array<!Array<number>>} */ (m));
    } else {
      if (m instanceof goog.math.Size) {
        this.array_ = goog.math.Matrix.createZeroPaddedArray_(m.height, m.width);
      } else {
        if (typeof m === "number" && typeof opt_n === "number" && m > 0 && opt_n > 0) {
          this.array_ = goog.math.Matrix.createZeroPaddedArray_(/** @type {number} */ (m), opt_n);
        } else {
          throw new Error("Invalid argument(s) for Matrix contructor");
        }
      }
    }
  }
  this.size_ = new goog.math.Size(this.array_[0].length, this.array_.length);
};
/**
 * @param {number} n
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.createIdentityMatrix = function(n) {
  var rv = [];
  for (var i = 0; i < n; i++) {
    rv[i] = [];
    for (var j = 0; j < n; j++) {
      rv[i][j] = i == j ? 1 : 0;
    }
  }
  return new goog.math.Matrix(rv);
};
/**
 * @param {goog.math.Matrix} matrix
 * @param {function(this:T,number,number,number,!goog.math.Matrix)} fn
 * @param {T=} opt_obj
 * @template T
 */
goog.math.Matrix.forEach = function(matrix, fn, opt_obj) {
  for (var i = 0; i < matrix.getSize().height; i++) {
    for (var j = 0; j < matrix.getSize().width; j++) {
      fn.call(opt_obj, matrix.array_[i][j], i, j, matrix);
    }
  }
};
/**
 * @param {!Array<!Array<number>>} arr
 * @return {boolean}
 */
goog.math.Matrix.isValidArray = function(arr) {
  var len = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!goog.isArrayLike(arr[i]) || len > 0 && arr[i].length != len) {
      return false;
    }
    for (var j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] !== "number") {
        return false;
      }
    }
    if (len == 0) {
      len = arr[i].length;
    }
  }
  return len != 0;
};
/**
 * @param {!goog.math.Matrix} matrix
 * @param {function(this:T,number,number,number,!goog.math.Matrix):number} fn
 * @param {T=} opt_obj
 * @return {!goog.math.Matrix}
 * @template T
 */
goog.math.Matrix.map = function(matrix, fn, opt_obj) {
  var m = new goog.math.Matrix(matrix.getSize());
  goog.math.Matrix.forEach(matrix, function(value, i, j) {
    m.array_[i][j] = fn.call(opt_obj, value, i, j, matrix);
  });
  return m;
};
/**
 * @private
 * @param {number} m
 * @param {number} n
 * @return {!Array<!Array<number>>}
 */
goog.math.Matrix.createZeroPaddedArray_ = function(m, n) {
  var rv = [];
  for (var i = 0; i < m; i++) {
    rv[i] = [];
    for (var j = 0; j < n; j++) {
      rv[i][j] = 0;
    }
  }
  return rv;
};
/** @private @type {!Array<!Array<number>>} */ goog.math.Matrix.prototype.array_;
/** @private @type {!goog.math.Size} */ goog.math.Matrix.prototype.size_;
/**
 * @param {goog.math.Matrix} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.add = function(m) {
  if (!goog.math.Size.equals(this.size_, m.getSize())) {
    throw new Error("Matrix summation is only supported on arrays of equal size");
  }
  return goog.math.Matrix.map(this, function(val, i, j) {
    return val + m.array_[i][j];
  });
};
/**
 * @param {goog.math.Matrix} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.appendColumns = function(m) {
  if (this.size_.height != m.getSize().height) {
    throw new Error("The given matrix has height " + m.size_.height + ", but " + " needs to have height " + this.size_.height + ".");
  }
  var result = new goog.math.Matrix(this.size_.height, this.size_.width + m.size_.width);
  goog.math.Matrix.forEach(this, function(value, i, j) {
    result.array_[i][j] = value;
  });
  goog.math.Matrix.forEach(m, function(value, i, j) {
    result.array_[i][this.size_.width + j] = value;
  }, this);
  return result;
};
/**
 * @param {goog.math.Matrix} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.appendRows = function(m) {
  if (this.size_.width != m.getSize().width) {
    throw new Error("The given matrix has width " + m.size_.width + ", but " + " needs to have width " + this.size_.width + ".");
  }
  var result = new goog.math.Matrix(this.size_.height + m.size_.height, this.size_.width);
  goog.math.Matrix.forEach(this, function(value, i, j) {
    result.array_[i][j] = value;
  });
  goog.math.Matrix.forEach(m, function(value, i, j) {
    result.array_[this.size_.height + i][j] = value;
  }, this);
  return result;
};
/**
 * @param {goog.math.Matrix} m
 * @param {number=} opt_tolerance
 * @return {boolean}
 */
goog.math.Matrix.prototype.equals = function(m, opt_tolerance) {
  if (this.size_.width != m.size_.width) {
    return false;
  }
  if (this.size_.height != m.size_.height) {
    return false;
  }
  var tolerance = opt_tolerance || 0;
  for (var i = 0; i < this.size_.height; i++) {
    for (var j = 0; j < this.size_.width; j++) {
      if (!goog.math.nearlyEquals(this.array_[i][j], m.array_[i][j], tolerance)) {
        return false;
      }
    }
  }
  return true;
};
/**
 * @return {number}
 */
goog.math.Matrix.prototype.getDeterminant = function() {
  if (!this.isSquare()) {
    throw new Error("A determinant can only be take on a square matrix");
  }
  return this.getDeterminant_();
};
/**
 * @return {goog.math.Matrix}
 */
goog.math.Matrix.prototype.getInverse = function() {
  if (!this.isSquare()) {
    throw new Error("An inverse can only be taken on a square matrix.");
  }
  if (this.getSize().width == 1) {
    var a = this.getValueAt(0, 0);
    return a == 0 ? null : new goog.math.Matrix([[1 / Number(a)]]);
  }
  var identity = goog.math.Matrix.createIdentityMatrix(this.size_.height);
  var mi = this.appendColumns(identity).getReducedRowEchelonForm();
  var i = mi.getSubmatrixByCoordinates_(0, 0, identity.size_.width - 1, identity.size_.height - 1);
  if (!i.equals(identity)) {
    return null;
  }
  return mi.getSubmatrixByCoordinates_(0, identity.size_.width);
};
/**
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.getReducedRowEchelonForm = function() {
  var result = new goog.math.Matrix(this);
  var col = 0;
  for (var row = 0; row < result.size_.height; row++) {
    if (col >= result.size_.width) {
      return result;
    }
    var i = row;
    while (result.array_[i][col] == 0) {
      i++;
      if (i == result.size_.height) {
        i = row;
        col++;
        if (col == result.size_.width) {
          return result;
        }
      }
    }
    this.swapRows_(i, row);
    var divisor = result.array_[row][col];
    for (var j = col; j < result.size_.width; j++) {
      result.array_[row][j] = result.array_[row][j] / divisor;
    }
    for (i = 0; i < result.size_.height; i++) {
      if (i != row) {
        var multiple = result.array_[i][col];
        for (var j = col; j < result.size_.width; j++) {
          result.array_[i][j] -= multiple * result.array_[row][j];
        }
      }
    }
    col++;
  }
  return result;
};
/**
 * @return {!goog.math.Size}
 */
goog.math.Matrix.prototype.getSize = function() {
  return this.size_;
};
/**
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.getTranspose = function() {
  var m = new goog.math.Matrix(this.size_.width, this.size_.height);
  goog.math.Matrix.forEach(this, function(value, i, j) {
    m.array_[j][i] = value;
  });
  return m;
};
/**
 * @param {number} i
 * @param {number} j
 * @return {?number}
 */
goog.math.Matrix.prototype.getValueAt = function(i, j) {
  if (!this.isInBounds_(i, j)) {
    return null;
  }
  return this.array_[i][j];
};
/**
 * @return {boolean}
 */
goog.math.Matrix.prototype.isSquare = function() {
  return this.size_.width == this.size_.height;
};
/**
 * @param {number} i
 * @param {number} j
 * @param {number} value
 */
goog.math.Matrix.prototype.setValueAt = function(i, j, value) {
  if (!this.isInBounds_(i, j)) {
    throw new Error("Index out of bounds when setting matrix value, (" + i + "," + j + ") in size (" + this.size_.height + "," + this.size_.width + ")");
  }
  this.array_[i][j] = value;
};
/**
 * @param {(goog.math.Matrix|number)} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.multiply = function(m) {
  if (m instanceof goog.math.Matrix) {
    if (this.size_.width != m.getSize().height) {
      throw new Error("Invalid matrices for multiplication. Second matrix " + "should have the same number of rows as the first has columns.");
    }
    return this.matrixMultiply_(/** @type {!goog.math.Matrix} */ (m));
  } else {
    if (typeof m === "number") {
      return this.scalarMultiply_(/** @type {number} */ (m));
    } else {
      throw new Error("A matrix can only be multiplied by" + " a number or another matrix.");
    }
  }
};
/**
 * @param {goog.math.Matrix} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.subtract = function(m) {
  if (!goog.math.Size.equals(this.size_, m.getSize())) {
    throw new Error("Matrix subtraction is only supported on arrays of equal size.");
  }
  return goog.math.Matrix.map(this, function(val, i, j) {
    return val - m.array_[i][j];
  });
};
/**
 * @return {!Array<!Array<number>>}
 */
goog.math.Matrix.prototype.toArray = function() {
  return this.array_;
};
if (goog.DEBUG) {
  /**
   * @return {string}
   * @override
   */
  goog.math.Matrix.prototype.toString = function() {
    var maxLen = 0;
    goog.math.Matrix.forEach(this, function(val) {
      var len = String(val).length;
      if (len > maxLen) {
        maxLen = len;
      }
    });
    var sb = [];
    goog.array.forEach(this.array_, function(row, x) {
      sb.push("[ ");
      goog.array.forEach(row, function(val, y) {
        var strval = String(val);
        sb.push(goog.string.repeat(" ", maxLen - strval.length) + strval + " ");
      });
      sb.push("]\n");
    });
    return sb.join("");
  };
}
/**
 * @private
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
goog.math.Matrix.prototype.getCofactor_ = function(i, j) {
  return (i + j % 2 == 0 ? 1 : -1) * this.getMinor_(i, j);
};
/**
 * @private
 * @return {number}
 */
goog.math.Matrix.prototype.getDeterminant_ = function() {
  if (this.getSize().area() == 1) {
    return this.array_[0][0];
  }
  var determinant = 0;
  for (var j = 0; j < this.size_.width; j++) {
    determinant += this.array_[0][j] * this.getCofactor_(0, j);
  }
  return determinant;
};
/**
 * @private
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
goog.math.Matrix.prototype.getMinor_ = function(i, j) {
  return this.getSubmatrixByDeletion_(i, j).getDeterminant_();
};
/**
 * @private
 * @param {number} i1
 * @param {number} j1
 * @param {number=} opt_i2
 * @param {number=} opt_j2
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.getSubmatrixByCoordinates_ = function(i1, j1, opt_i2, opt_j2) {
  var i2 = opt_i2 ? opt_i2 : this.size_.height - 1;
  var j2 = opt_j2 ? opt_j2 : this.size_.width - 1;
  var result = new goog.math.Matrix(i2 - i1 + 1, j2 - j1 + 1);
  goog.math.Matrix.forEach(result, function(value, i, j) {
    result.array_[i][j] = this.array_[i1 + i][j1 + j];
  }, this);
  return result;
};
/**
 * @private
 * @param {number} i
 * @param {number} j
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.getSubmatrixByDeletion_ = function(i, j) {
  var m = new goog.math.Matrix(this.size_.width - 1, this.size_.height - 1);
  goog.math.Matrix.forEach(m, function(value, x, y) {
    m.setValueAt(x, y, this.array_[x >= i ? x + 1 : x][y >= j ? y + 1 : y]);
  }, this);
  return m;
};
/**
 * @private
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
goog.math.Matrix.prototype.isInBounds_ = function(i, j) {
  return i >= 0 && i < this.size_.height && j >= 0 && j < this.size_.width;
};
/**
 * @private
 * @param {goog.math.Matrix} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.matrixMultiply_ = function(m) {
  var resultMatrix = new goog.math.Matrix(this.size_.height, m.getSize().width);
  goog.math.Matrix.forEach(resultMatrix, function(val, x, y) {
    var newVal = 0;
    for (var i = 0; i < this.size_.width; i++) {
      newVal += goog.asserts.assertNumber(this.getValueAt(x, i)) * goog.asserts.assertNumber(m.getValueAt(i, y));
    }
    resultMatrix.setValueAt(x, y, newVal);
  }, this);
  return resultMatrix;
};
/**
 * @private
 * @param {number} m
 * @return {!goog.math.Matrix}
 */
goog.math.Matrix.prototype.scalarMultiply_ = function(m) {
  return goog.math.Matrix.map(this, function(val, x, y) {
    return val * m;
  });
};
/**
 * @private
 * @param {number} i1
 * @param {number} i2
 */
goog.math.Matrix.prototype.swapRows_ = function(i1, i2) {
  var tmp = this.array_[i1];
  this.array_[i1] = this.array_[i2];
  this.array_[i2] = tmp;
};

//# sourceMappingURL=goog.math.matrix.js.map
