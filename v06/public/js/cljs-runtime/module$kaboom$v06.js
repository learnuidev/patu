function IDList$$module$kaboom$v06() {
  this.map = new Map;
  this.lastID = 0;
}
IDList$$module$kaboom$v06.prototype.push = function(v) {
  /** @const */ var id = this.lastID;
  this.map.set(id, v);
  this.lastID++;
  return id;
};
IDList$$module$kaboom$v06.prototype.pushd = function(v) {
  /** @const */ var $jscomp$this = this;
  /** @const */ var id = this.push(v);
  return function() {
    return $jscomp$this.delete(id);
  };
};
IDList$$module$kaboom$v06.prototype.set = function(id, value) {
  return this.map.set(id, value);
};
IDList$$module$kaboom$v06.prototype.get = function(id) {
  return this.map.get(id);
};
IDList$$module$kaboom$v06.prototype.forEach = function(cb) {
  return this.map.forEach(cb);
};
IDList$$module$kaboom$v06.prototype.values = function() {
  return this.map.values();
};
function deg2rad$$module$kaboom$v06(deg) {
  return deg * Math.PI / 180;
}
function rad2deg$$module$kaboom$v06(rad) {
  return rad * 180 / Math.PI;
}
function clamp$$module$kaboom$v06(val, min, max) {
  if (min > max) {
    return clamp$$module$kaboom$v06(val, max, min);
  }
  return Math.min(Math.max(val, min), max);
}
function lerp$$module$kaboom$v06(a, b, t) {
  return a + (b - a) * t;
}
function map$$module$kaboom$v06(v, l1, h1, l2, h2) {
  return l2 + (v - l1) / (h1 - l1) * (h2 - l2);
}
function mapc$$module$kaboom$v06(v, l1, h1, l2, h2) {
  return clamp$$module$kaboom$v06(map$$module$kaboom$v06(v, l1, h1, l2, h2), l2, h2);
}
function vec2$$module$kaboom$v06(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$24 = $jscomp$restParams;
    if (args$24.length === 0) {
      return vec2$$module$kaboom$v06(0, 0);
    }
    if (args$24.length === 1) {
      if (typeof args$24[0] === "number") {
        return vec2$$module$kaboom$v06(args$24[0], args$24[0]);
      } else {
        if (isVec2$$module$kaboom$v06(args$24[0])) {
          return vec2$$module$kaboom$v06(args$24[0].x, args$24[0].y);
        } else {
          if (Array.isArray(args$24[0]) && args$24[0].length === 2) {
            return vec2$$module$kaboom$v06.apply(null, args$24[0]);
          }
        }
      }
    }
    return {x:args$24[0], y:args$24[1], clone:function() {
      return vec2$$module$kaboom$v06(this.x, this.y);
    }, add:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$25 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$25));
        return vec2$$module$kaboom$v06(this.x + p2.x, this.y + p2.y);
      }
    }, sub:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$26 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$26));
        return vec2$$module$kaboom$v06(this.x - p2.x, this.y - p2.y);
      }
    }, scale:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$27 = $jscomp$restParams;
        /** @const */ var s = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$27));
        return vec2$$module$kaboom$v06(this.x * s.x, this.y * s.y);
      }
    }, dist:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$28 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$28));
        return Math.sqrt((this.x - p2.x) * (this.x - p2.x) + (this.y - p2.y) * (this.y - p2.y));
      }
    }, len:function() {
      return this.dist(vec2$$module$kaboom$v06(0, 0));
    }, unit:function() {
      return this.scale(1 / this.len());
    }, normal:function() {
      return vec2$$module$kaboom$v06(this.y, -this.x);
    }, dot:function(p2) {
      return this.x * p2.x + this.y + p2.y;
    }, angle:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$29 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$29));
        return Math.atan2(this.y - p2.y, this.x - p2.x);
      }
    }, lerp:function(p2, t) {
      return vec2$$module$kaboom$v06(lerp$$module$kaboom$v06(this.x, p2.x, t), lerp$$module$kaboom$v06(this.y, p2.y, t));
    }, toFixed:function(n) {
      return vec2$$module$kaboom$v06(this.x.toFixed(n), this.y.toFixed(n));
    }, eq:function(other) {
      return this.x === other.x && this.y === other.y;
    }, str:function() {
      return "(" + this.x + ", " + this.y + ")";
    }};
  }
}
function vec2FromAngle$$module$kaboom$v06(a) {
  return vec2$$module$kaboom$v06(Math.cos(a), Math.sin(a));
}
function vec3$$module$kaboom$v06(x, y, z) {
  return {x:x, y:y, z:z, xy:function() {
    return vec2$$module$kaboom$v06(this.x, this.y);
  }};
}
function isVec2$$module$kaboom$v06(p) {
  return p !== undefined && p.x !== undefined && p.y !== undefined;
}
function isVec3$$module$kaboom$v06(p) {
  return p !== undefined && p.x !== undefined && p.y !== undefined && p.z !== undefined;
}
function isColor$$module$kaboom$v06(c) {
  return c !== undefined && c.r !== undefined && c.g !== undefined && c.b !== undefined && c.a !== undefined;
}
function isMat4$$module$kaboom$v06(m) {
  if (m !== undefined && Array.isArray(m.m) && m.m.length === 16) {
    return m;
  }
}
function rgb$$module$kaboom$v06(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$30 = $jscomp$restParams;
    if (args$30.length === 0) {
      return rgba$$module$kaboom$v06();
    } else {
      if (args$30.length === 1) {
        if (isColor$$module$kaboom$v06(args$30[0])) {
          return rgba$$module$kaboom$v06(args$30[0]);
        } else {
          if (Array.isArray(args$30[0]) && args$30[0].length === 3) {
            return rgb$$module$kaboom$v06.apply(null, args$30[0]);
          }
        }
      }
    }
    return rgba$$module$kaboom$v06(args$30[0], args$30[1], args$30[2], 1);
  }
}
function rgba$$module$kaboom$v06(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$31 = $jscomp$restParams;
    if (args$31.length === 0) {
      return rgba$$module$kaboom$v06(1, 1, 1, 1);
    } else {
      if (args$31.length === 1) {
        if (isColor$$module$kaboom$v06(args$31[0])) {
          return rgba$$module$kaboom$v06(args$31[0].r, args$31[0].g, args$31[0].b, args$31[0].a);
        } else {
          if (Array.isArray(args$31[0]) && args$31[0].length === 4) {
            return rgba$$module$kaboom$v06.apply(null, args$31[0]);
          }
        }
      }
    }
    return {r:args$31[0], g:args$31[1], b:args$31[2], a:args$31[3] ? args$31[3] : 1, clone:function() {
      return rgba$$module$kaboom$v06(this.r, this.g, this.b, this.a);
    }, lighten:function(a) {
      return rgba$$module$kaboom$v06(this.r + a, this.g + a, this.b + a, this.a);
    }, darken:function(a) {
      return this.lighten(-a);
    }, invert:function() {
      return rgba$$module$kaboom$v06(1 - this.r, 1 - this.g, 1 - this.b, this.a);
    }, isDark:function(p) {
      p = p === undefined ? 0.5 : p;
      return this.r + this.g + this.b < 3 * p;
    }, isLight:function(p) {
      p = p === undefined ? 0.5 : p;
      return this.r + this.g + this.b > 3 * p;
    }, eq:function(other) {
      return this.r === other.r && this.g === other.g && this.b === other.g && this.a === other.a;
    }};
  }
}
function quad$$module$kaboom$v06(x, y, w, h) {
  return {x:x, y:y, w:w, h:h, scale:function(other) {
    return quad$$module$kaboom$v06(this.x + this.w * other.x, this.y + this.h * other.y, this.w * other.w, this.h * other.h);
  }, clone:function() {
    return quad$$module$kaboom$v06(this.x, this.y, this.w, this.h);
  }, eq:function(other) {
    return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
  }};
}
function mat4$$module$kaboom$v06(m) {
  return {m:m ? [].concat($jscomp.arrayFromIterable(m)) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], clone:function() {
    return mat4$$module$kaboom$v06(this.m);
  }, mult:function(other) {
    /** @const */ var out = [];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        out[i * 4 + j] = this.m[0 * 4 + j] * other.m[i * 4 + 0] + this.m[1 * 4 + j] * other.m[i * 4 + 1] + this.m[2 * 4 + j] * other.m[i * 4 + 2] + this.m[3 * 4 + j] * other.m[i * 4 + 3];
      }
    }
    return mat4$$module$kaboom$v06(out);
  }, multVec4:function(p) {
    return {x:p.x * this.m[0] + p.y * this.m[4] + p.z * this.m[8] + p.w * this.m[12], y:p.x * this.m[1] + p.y * this.m[5] + p.z * this.m[9] + p.w * this.m[13], z:p.x * this.m[2] + p.y * this.m[6] + p.z * this.m[10] + p.w * this.m[14], w:p.x * this.m[3] + p.y * this.m[7] + p.z * this.m[11] + p.w * this.m[15]};
  }, multVec3:function(p) {
    /** @const */ var p4 = this.multVec4({x:p.x, y:p.y, z:p.z, w:1.0});
    return vec3$$module$kaboom$v06(p4.x, p4.y, p4.z);
  }, multVec2:function(p) {
    return vec2$$module$kaboom$v06(p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
  }, translate:function(p) {
    return this.mult(mat4$$module$kaboom$v06([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1]));
  }, scale:function(s) {
    return this.mult(mat4$$module$kaboom$v06([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  }, rotateX:function(a) {
    return this.mult(mat4$$module$kaboom$v06([1, 0, 0, 0, 0, Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1]));
  }, rotateY:function(a) {
    return this.mult(mat4$$module$kaboom$v06([Math.cos(a), 0, -Math.sin(a), 0, 0, 1, 0, 0, Math.sin(a), 0, Math.cos(a), 0, 0, 0, 0, 1]));
  }, rotateZ:function(a) {
    return this.mult(mat4$$module$kaboom$v06([Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  }, invert:function() {
    /** @const */ var out = [];
    /** @const */ var f00 = this.m[10] * this.m[15] - this.m[14] * this.m[11];
    /** @const */ var f01 = this.m[9] * this.m[15] - this.m[13] * this.m[11];
    /** @const */ var f02 = this.m[9] * this.m[14] - this.m[13] * this.m[10];
    /** @const */ var f03 = this.m[8] * this.m[15] - this.m[12] * this.m[11];
    /** @const */ var f04 = this.m[8] * this.m[14] - this.m[12] * this.m[10];
    /** @const */ var f05 = this.m[8] * this.m[13] - this.m[12] * this.m[9];
    /** @const */ var f06 = this.m[6] * this.m[15] - this.m[14] * this.m[7];
    /** @const */ var f07 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
    /** @const */ var f08 = this.m[5] * this.m[14] - this.m[13] * this.m[6];
    /** @const */ var f09 = this.m[4] * this.m[15] - this.m[12] * this.m[7];
    /** @const */ var f10 = this.m[4] * this.m[14] - this.m[12] * this.m[6];
    /** @const */ var f11 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
    /** @const */ var f12 = this.m[4] * this.m[13] - this.m[12] * this.m[5];
    /** @const */ var f13 = this.m[6] * this.m[11] - this.m[10] * this.m[7];
    /** @const */ var f14 = this.m[5] * this.m[11] - this.m[9] * this.m[7];
    /** @const */ var f15 = this.m[5] * this.m[10] - this.m[9] * this.m[6];
    /** @const */ var f16 = this.m[4] * this.m[11] - this.m[8] * this.m[7];
    /** @const */ var f17 = this.m[4] * this.m[10] - this.m[8] * this.m[6];
    /** @const */ var f18 = this.m[4] * this.m[9] - this.m[8] * this.m[5];
    out[0] = this.m[5] * f00 - this.m[6] * f01 + this.m[7] * f02;
    out[4] = -(this.m[4] * f00 - this.m[6] * f03 + this.m[7] * f04);
    out[8] = this.m[4] * f01 - this.m[5] * f03 + this.m[7] * f05;
    out[12] = -(this.m[4] * f02 - this.m[5] * f04 + this.m[6] * f05);
    out[1] = -(this.m[1] * f00 - this.m[2] * f01 + this.m[3] * f02);
    out[5] = this.m[0] * f00 - this.m[2] * f03 + this.m[3] * f04;
    out[9] = -(this.m[0] * f01 - this.m[1] * f03 + this.m[3] * f05);
    out[13] = this.m[0] * f02 - this.m[1] * f04 + this.m[2] * f05;
    out[2] = this.m[1] * f06 - this.m[2] * f07 + this.m[3] * f08;
    out[6] = -(this.m[0] * f06 - this.m[2] * f09 + this.m[3] * f10);
    out[10] = this.m[0] * f11 - this.m[1] * f09 + this.m[3] * f12;
    out[14] = -(this.m[0] * f08 - this.m[1] * f10 + this.m[2] * f12);
    out[3] = -(this.m[1] * f13 - this.m[2] * f14 + this.m[3] * f15);
    out[7] = this.m[0] * f13 - this.m[2] * f16 + this.m[3] * f17;
    out[11] = -(this.m[0] * f14 - this.m[1] * f16 + this.m[3] * f18);
    out[15] = this.m[0] * f15 - this.m[1] * f17 + this.m[2] * f18;
    /** @const */ var det = this.m[0] * out[0] + this.m[1] * out[4] + this.m[2] * out[8] + this.m[3] * out[12];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        out[i * 4 + j] *= 1.0 / det;
      }
    }
    return mat4$$module$kaboom$v06(out);
  }};
}
function wave$$module$kaboom$v06(lo, hi, t) {
  return lo + (Math.sin(t) + 1) / 2 * (hi - lo);
}
/** @const */ var A$$module$kaboom$v06 = 1103515245;
/** @const */ var C$$module$kaboom$v06 = 12345;
/** @const */ var M$$module$kaboom$v06 = 2147483648;
/** @const */ var defRNG$$module$kaboom$v06 = makeRng$$module$kaboom$v06(Date.now());
function makeRng$$module$kaboom$v06(seed) {
  return {seed:seed, gen:function(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$32 = $jscomp$restParams;
      if (args$32.length === 0) {
        this.seed = (A$$module$kaboom$v06 * this.seed + C$$module$kaboom$v06) % M$$module$kaboom$v06;
        return this.seed / M$$module$kaboom$v06;
      } else {
        if (args$32.length === 1) {
          if (typeof args$32[0] === "number") {
            return this.gen(0, args$32[0]);
          } else {
            if (isVec2$$module$kaboom$v06(args$32[0])) {
              return this.gen(vec2$$module$kaboom$v06(0, 0), args$32[0]);
            } else {
              if (isColor$$module$kaboom$v06(args$32[0])) {
                return this.gen(rgba$$module$kaboom$v06(0, 0, 0, 0), args$32[0]);
              }
            }
          }
        } else {
          if (args$32.length === 2) {
            if (typeof args$32[0] === "number" && typeof args$32[1] === "number") {
              return this.gen() * (args$32[1] - args$32[0]) + args$32[0];
            } else {
              if (isVec2$$module$kaboom$v06(args$32[0]) && isVec2$$module$kaboom$v06(args$32[1])) {
                return vec2$$module$kaboom$v06(this.gen(args$32[0].x, args$32[1].x), this.gen(args$32[0].y, args$32[1].y));
              } else {
                if (isColor$$module$kaboom$v06(args$32[0]) && isColor$$module$kaboom$v06(args$32[1])) {
                  return rgba$$module$kaboom$v06(this.gen(args$32[0].r, args$32[1].r), this.gen(args$32[0].g, args$32[1].g), this.gen(args$32[0].b, args$32[1].b), this.gen(args$32[0].a, args$32[1].a));
                }
              }
            }
          }
        }
      }
    }
  }};
}
function randSeed$$module$kaboom$v06(seed) {
  if (seed != null) {
    defRNG$$module$kaboom$v06.seed = seed;
  }
  return defRNG$$module$kaboom$v06.seed;
}
function rand$$module$kaboom$v06(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$33 = $jscomp$restParams;
    return defRNG$$module$kaboom$v06.gen.apply(defRNG$$module$kaboom$v06, $jscomp.arrayFromIterable(args$33));
  }
}
function chance$$module$kaboom$v06(p) {
  return rand$$module$kaboom$v06() <= p;
}
function choose$$module$kaboom$v06(list) {
  return list[Math.floor(rand$$module$kaboom$v06(list.length))];
}
function colRectRect$$module$kaboom$v06(r1, r2) {
  return r1.p2.x >= r2.p1.x && r1.p1.x <= r2.p2.x && r1.p2.y >= r2.p1.y && r1.p1.y <= r2.p2.y;
}
function overlapRectRect$$module$kaboom$v06(r1, r2) {
  return r1.p2.x > r2.p1.x && r1.p1.x < r2.p2.x && r1.p2.y > r2.p1.y && r1.p1.y < r2.p2.y;
}
function colLineLine$$module$kaboom$v06(l1, l2) {
  /** @const */ var a = ((l2.p2.x - l2.p1.x) * (l1.p1.y - l2.p1.y) - (l2.p2.y - l2.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  /** @const */ var b = ((l1.p2.x - l1.p1.x) * (l1.p1.y - l2.p1.y) - (l1.p2.y - l1.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  return a >= 0.0 && a <= 1.0 && b >= 0.0 && b <= 1.0;
}
function colRectLine$$module$kaboom$v06(r, l) {
  if (colRectPt$$module$kaboom$v06(r, l.p1) || colRectPt$$module$kaboom$v06(r, l.p2)) {
    return true;
  }
  return colLineLine$$module$kaboom$v06(l, makeLine$$module$kaboom$v06(r.p1, vec2$$module$kaboom$v06(r.p2.x, r.p1.y))) || colLineLine$$module$kaboom$v06(l, makeLine$$module$kaboom$v06(vec2$$module$kaboom$v06(r.p2.x, r.p1.y), r.p2)) || colLineLine$$module$kaboom$v06(l, makeLine$$module$kaboom$v06(r.p2, vec2$$module$kaboom$v06(r.p1.x, r.p2.y))) || colLineLine$$module$kaboom$v06(l, makeLine$$module$kaboom$v06(vec2$$module$kaboom$v06(r.p1.x, r.p2.y), r.p1));
}
function colRectPt$$module$kaboom$v06(r, pt) {
  return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
}
function makeLine$$module$kaboom$v06(p1, p2) {
  return {p1:p1.clone(), p2:p2.clone()};
}
function deepEq$$module$kaboom$v06(o1, o2) {
  /** @const */ var t1 = typeof o1;
  /** @const */ var t2 = typeof o2;
  if (t1 !== t2) {
    return false;
  }
  if (t1 === "object" && t2 === "object") {
    /** @const */ var k1 = Object.keys(o1);
    /** @const */ var k2 = Object.keys(o2);
    if (k1.length !== k2.length) {
      return false;
    }
    var $jscomp$iter$9 = $jscomp.makeIterator(k1);
    for (var $jscomp$key$k = $jscomp$iter$9.next(); !$jscomp$key$k.done; $jscomp$key$k = $jscomp$iter$9.next()) {
      /** @const */ var k = $jscomp$key$k.value;
      {
        /** @const */ var v1 = o1[k];
        /** @const */ var v2 = o2[k];
        if (!(typeof v1 === "function" && typeof v2 === "function")) {
          if (!deepEq$$module$kaboom$v06(v1, v2)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  return o1 === o2;
}
/** @const */ var DEF_ORIGIN$$module$kaboom$v06 = "topleft";
/** @const */ var STRIDE$$module$kaboom$v06 = 9;
/** @const */ var QUEUE_COUNT$$module$kaboom$v06 = 65536;
/** @const */ var BG_GRID_SIZE$$module$kaboom$v06 = 64;
/** @const */ var VERT_TEMPLATE$$module$kaboom$v06 = "\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvec4 def_vert() {\n\treturn vec4(a_pos, 1.0);\n}\n\n{{user}}\n\nvoid main() {\n\tvec4 pos \x3d vert(a_pos, a_uv, a_color);\n\tv_pos \x3d a_pos;\n\tv_uv \x3d a_uv;\n\tv_color \x3d a_color;\n\tgl_Position \x3d pos;\n}\n";
/** @const */ var FRAG_TEMPLATE$$module$kaboom$v06 = "\nprecision mediump float;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform sampler2D u_tex;\n\nvec4 def_frag() {\n\treturn v_color * texture2D(u_tex, v_uv);\n}\n\n{{user}}\n\nvoid main() {\n\tgl_FragColor \x3d frag(v_pos, v_uv, v_color, u_tex);\n\tif (gl_FragColor.a \x3d\x3d 0.0) {\n\t\tdiscard;\n\t}\n}\n";
/** @const */ var DEF_VERT$$module$kaboom$v06 = "\nvec4 vert(vec3 pos, vec2 uv, vec4 color) {\n\treturn def_vert();\n}\n";
/** @const */ var DEF_FRAG$$module$kaboom$v06 = "\nvec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n\treturn def_frag();\n}\n";
function originPt$$module$kaboom$v06(orig) {
  switch(orig) {
    case "topleft":
      return vec2$$module$kaboom$v06(-1, -1);
    case "top":
      return vec2$$module$kaboom$v06(0, -1);
    case "topright":
      return vec2$$module$kaboom$v06(1, -1);
    case "left":
      return vec2$$module$kaboom$v06(-1, 0);
    case "center":
      return vec2$$module$kaboom$v06(0, 0);
    case "right":
      return vec2$$module$kaboom$v06(1, 0);
    case "botleft":
      return vec2$$module$kaboom$v06(-1, 1);
    case "bot":
      return vec2$$module$kaboom$v06(0, 1);
    case "botright":
      return vec2$$module$kaboom$v06(1, 1);
    default:
      return orig;
  }
}
function gfxInit$$module$kaboom$v06(gl, gconf) {
  function powerOfTwo(n) {
    return Math.log(n) / Math.log(2) % 1 === 0;
  }
  function makeTex(data) {
    /** @const */ var id = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texFilter);
    /** @const */ var wrap = function() {
      if (powerOfTwo(data.width) && powerOfTwo(data.height)) {
        return gl.REPEAT;
      } else {
        return gl.CLAMP_TO_EDGE;
      }
    }();
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return {width:data.width, height:data.height, bind:function() {
      gl.bindTexture(gl.TEXTURE_2D, id);
    }, unbind:function() {
      gl.bindTexture(gl.TEXTURE_2D, null);
    }};
  }
  function makeProgram(vertSrc, fragSrc) {
    vertSrc = vertSrc === undefined ? DEF_VERT$$module$kaboom$v06 : vertSrc;
    fragSrc = fragSrc === undefined ? DEF_FRAG$$module$kaboom$v06 : fragSrc;
    var msg;
    var $jscomp$nullish$tmp1;
    /** @const */ var vcode = VERT_TEMPLATE$$module$kaboom$v06.replace("{{user}}", ($jscomp$nullish$tmp1 = vertSrc) != null ? $jscomp$nullish$tmp1 : DEF_VERT$$module$kaboom$v06);
    var $jscomp$nullish$tmp2;
    /** @const */ var fcode = FRAG_TEMPLATE$$module$kaboom$v06.replace("{{user}}", ($jscomp$nullish$tmp2 = fragSrc) != null ? $jscomp$nullish$tmp2 : DEF_FRAG$$module$kaboom$v06);
    /** @const */ var vertShader = gl.createShader(gl.VERTEX_SHADER);
    /** @const */ var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertShader, vcode);
    gl.shaderSource(fragShader, fcode);
    gl.compileShader(vertShader);
    gl.compileShader(fragShader);
    if (msg = gl.getShaderInfoLog(vertShader)) {
      throw new Error(msg);
    }
    if (msg = gl.getShaderInfoLog(fragShader)) {
      throw new Error(msg);
    }
    /** @const */ var id = gl.createProgram();
    gl.attachShader(id, vertShader);
    gl.attachShader(id, fragShader);
    gl.bindAttribLocation(id, 0, "a_pos");
    gl.bindAttribLocation(id, 1, "a_uv");
    gl.bindAttribLocation(id, 2, "a_color");
    gl.linkProgram(id);
    if (msg = gl.getProgramInfoLog(id)) {
      if (msg !== "\n") {
        throw new Error(msg);
      }
    }
    return {bind:function() {
      gl.useProgram(id);
    }, unbind:function() {
      gl.useProgram(null);
    }, bindAttribs:function() {
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE$$module$kaboom$v06 * 4, 0);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE$$module$kaboom$v06 * 4, 12);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE$$module$kaboom$v06 * 4, 20);
      gl.enableVertexAttribArray(2);
    }, send:function(uniform) {
      this.bind();
      for (var name in uniform) {
        /** @const */ var val = uniform[name];
        /** @const */ var loc = gl.getUniformLocation(id, name);
        if (typeof val === "number") {
          gl.uniform1f(loc, val);
        } else {
          if (isMat4$$module$kaboom$v06(val)) {
            gl.uniformMatrix4fv(loc, false, new Float32Array(val.m));
          } else {
            if (isColor$$module$kaboom$v06(val)) {
              gl.uniform4f(loc, val.r, val.g, val.b, val.a);
            } else {
              if (isVec3$$module$kaboom$v06(val)) {
                gl.uniform3f(loc, val.x, val.y, val.z);
              } else {
                if (isVec2$$module$kaboom$v06(val)) {
                  gl.uniform2f(loc, val.x, val.y);
                }
              }
            }
          }
        }
      }
      this.unbind();
    }};
  }
  function makeFont(tex, gw, gh, chars) {
    /** @const */ var cols = tex.width / gw;
    /** @const */ var rows = tex.height / gh;
    /** @const */ var qw = 1.0 / cols;
    /** @const */ var qh = 1.0 / rows;
    /** @const */ var map = {};
    /** @const */ var charMap = chars.split("").entries();
    var $jscomp$iter$10 = $jscomp.makeIterator(charMap);
    for (var $jscomp$key$ = $jscomp$iter$10.next(); !$jscomp$key$.done; $jscomp$key$ = $jscomp$iter$10.next()) {
      /** @const */ var $jscomp$destructuring$var0 = $jscomp$key$.value;
      {
        var $jscomp$destructuring$var1 = $jscomp.makeIterator($jscomp$destructuring$var0);
        /** @const */ var i = $jscomp$destructuring$var1.next().value;
        /** @const */ var ch = $jscomp$destructuring$var1.next().value;
        {
          map[ch] = vec2$$module$kaboom$v06(i % cols * qw, Math.floor(i / cols) * qh);
        }
      }
    }
    return {tex:tex, map:map, qw:qw, qh:qh};
  }
  function drawRaw(verts, indices, tex, prog, uniform) {
    tex = tex === undefined ? gfx.defTex : tex;
    prog = prog === undefined ? gfx.defProg : prog;
    uniform = uniform === undefined ? {} : uniform;
    var $jscomp$nullish$tmp3;
    tex = ($jscomp$nullish$tmp3 = tex) != null ? $jscomp$nullish$tmp3 : gfx.defTex;
    var $jscomp$nullish$tmp4;
    prog = ($jscomp$nullish$tmp4 = prog) != null ? $jscomp$nullish$tmp4 : gfx.defProg;
    if (tex !== gfx.curTex || prog !== gfx.curProg || !deepEq$$module$kaboom$v06(gfx.curUniform, uniform) || gfx.vqueue.length + verts.length * STRIDE$$module$kaboom$v06 > QUEUE_COUNT$$module$kaboom$v06 || gfx.iqueue.length + indices.length > QUEUE_COUNT$$module$kaboom$v06) {
      flush();
    }
    gfx.curTex = tex;
    gfx.curProg = prog;
    gfx.curUniform = uniform;
    /** @const */ var nIndices = indices.map(function(i) {
      return i + gfx.vqueue.length / STRIDE$$module$kaboom$v06;
    });
    /** @const */ var nVerts = verts.map(function(v) {
      /** @const */ var pt = toNDC(gfx.transform.multVec2(v.pos.xy()));
      return [pt.x, pt.y, v.pos.z, v.uv.x, v.uv.y, v.color.r, v.color.g, v.color.b, v.color.a];
    }).flat();
    nIndices.forEach(function(i) {
      return gfx.iqueue.push(i);
    });
    nVerts.forEach(function(v) {
      return gfx.vqueue.push(v);
    });
  }
  function flush() {
    if (!gfx.curTex || !gfx.curProg || gfx.vqueue.length === 0 || gfx.iqueue.length === 0) {
      return;
    }
    gfx.curProg.send(gfx.curUniform);
    gl.bindBuffer(gl.ARRAY_BUFFER, gfx.vbuf);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(gfx.vqueue));
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gfx.ibuf);
    gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(gfx.iqueue));
    gfx.curProg.bind();
    gfx.curProg.bindAttribs();
    gfx.curTex.bind();
    gl.drawElements(gl.TRIANGLES, gfx.iqueue.length, gl.UNSIGNED_SHORT, 0);
    gfx.curTex.unbind();
    gfx.curProg.unbind();
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gfx.iqueue = [];
    gfx.vqueue = [];
    gfx.drawCalls++;
  }
  function frameStart() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (!gconf.clearColor) {
      drawQuad({width:width(), height:height(), quad:quad$$module$kaboom$v06(0, 0, width() * scale$jscomp$0() / BG_GRID_SIZE$$module$kaboom$v06, height() * scale$jscomp$0() / BG_GRID_SIZE$$module$kaboom$v06), tex:gfx.bgTex});
    }
    gfx.drawCalls = 0;
    gfx.transformStack = [];
    gfx.transform = mat4$$module$kaboom$v06();
  }
  function frameEnd() {
    flush();
    gfx.lastDrawCalls = gfx.drawCalls;
  }
  function drawCalls() {
    return gfx.lastDrawCalls;
  }
  function toNDC(pt) {
    return vec2$$module$kaboom$v06(pt.x / width() * 2 - 1, -pt.y / height() * 2 + 1);
  }
  function pushMatrix(m) {
    gfx.transform = m.clone();
  }
  function pushTranslate(p) {
    if (!p || p.x === 0 && p.y === 0) {
      return;
    }
    gfx.transform = gfx.transform.translate(p);
  }
  function pushScale(p) {
    if (!p || p.x === 1 && p.y === 1) {
      return;
    }
    gfx.transform = gfx.transform.scale(p);
  }
  function pushRotateX(a) {
    if (!a) {
      return;
    }
    gfx.transform = gfx.transform.rotateX(a);
  }
  function pushRotateY(a) {
    if (!a) {
      return;
    }
    gfx.transform = gfx.transform.rotateY(a);
  }
  function pushRotateZ(a) {
    if (!a) {
      return;
    }
    gfx.transform = gfx.transform.rotateZ(a);
  }
  function pushTransform() {
    gfx.transformStack.push(gfx.transform.clone());
  }
  function popTransform() {
    if (gfx.transformStack.length > 0) {
      gfx.transform = gfx.transformStack.pop();
    }
  }
  function drawQuad(conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var w = conf.width || 0;
    /** @const */ var h = conf.height || 0;
    /** @const */ var pos = conf.pos || vec2$$module$kaboom$v06(0, 0);
    /** @const */ var origin = originPt$$module$kaboom$v06(conf.origin || DEF_ORIGIN$$module$kaboom$v06);
    /** @const */ var offset = origin.scale(vec2$$module$kaboom$v06(w, h).scale(-.5));
    var $jscomp$nullish$tmp5;
    /** @const */ var scale = vec2$$module$kaboom$v06(($jscomp$nullish$tmp5 = conf.scale) != null ? $jscomp$nullish$tmp5 : 1);
    /** @const */ var rot = conf.rot || 0;
    /** @const */ var q = conf.quad || quad$$module$kaboom$v06(0, 0, 1, 1);
    var $jscomp$nullish$tmp6;
    /** @const */ var z = 1 - (($jscomp$nullish$tmp6 = conf.z) != null ? $jscomp$nullish$tmp6 : 0);
    /** @const */ var color = conf.color || rgba$$module$kaboom$v06(1, 1, 1, 1);
    pushTransform();
    pushTranslate(pos);
    pushRotateZ(rot);
    pushScale(scale);
    pushTranslate(offset);
    drawRaw([{pos:vec3$$module$kaboom$v06(-w / 2, h / 2, z), uv:vec2$$module$kaboom$v06(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y : q.y + q.h), color:color}, {pos:vec3$$module$kaboom$v06(-w / 2, -h / 2, z), uv:vec2$$module$kaboom$v06(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y + q.h : q.y), color:color}, {pos:vec3$$module$kaboom$v06(w / 2, -h / 2, z), uv:vec2$$module$kaboom$v06(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y + q.h : q.y), color:color}, {pos:vec3$$module$kaboom$v06(w / 2, h / 
    2, z), uv:vec2$$module$kaboom$v06(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y : q.y + q.h), color:color}], [0, 1, 3, 1, 2, 3], conf.tex, conf.prog, conf.uniform);
    popTransform();
  }
  function drawTexture(tex, conf) {
    conf = conf === undefined ? {} : conf;
    var $jscomp$nullish$tmp7;
    /** @const */ var q = ($jscomp$nullish$tmp7 = conf.quad) != null ? $jscomp$nullish$tmp7 : quad$$module$kaboom$v06(0, 0, 1, 1);
    /** @const */ var w = tex.width * q.w;
    /** @const */ var h = tex.height * q.h;
    /** @const */ var scale = vec2$$module$kaboom$v06(1);
    if (conf.tiled) {
      /** @const */ var repX = Math.ceil((conf.width || w) / w);
      /** @const */ var repY = Math.ceil((conf.height || h) / h);
      /** @const */ var origin = originPt$$module$kaboom$v06(conf.origin || DEF_ORIGIN$$module$kaboom$v06).add(vec2$$module$kaboom$v06(1, 1)).scale(0.5);
      /** @const */ var offset = origin.scale(repX * w, repY * h);
      for (var i = 0; i < repX; i++) {
        for (var j = 0; j < repY; j++) {
          drawQuad(Object.assign({}, conf, {pos:(conf.pos || vec2$$module$kaboom$v06(0)).add(vec2$$module$kaboom$v06(w * i, h * j)).sub(offset), scale:scale.scale(conf.scale || vec2$$module$kaboom$v06(1)), tex:tex, quad:q, width:w, height:h, origin:"topleft"}));
        }
      }
    } else {
      if (conf.width && conf.height) {
        scale.x = conf.width / w;
        scale.y = conf.height / h;
      } else {
        if (conf.width) {
          scale.x = conf.width / w;
          scale.y = scale.x;
        } else {
          if (conf.height) {
            scale.y = conf.height / h;
            scale.x = scale.y;
          }
        }
      }
      drawQuad(Object.assign({}, conf, {scale:scale.scale(conf.scale || vec2$$module$kaboom$v06(1)), tex:tex, quad:q, width:w, height:h}));
    }
  }
  function drawRect(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    drawQuad(Object.assign({}, conf, {pos:pos, width:w, height:h}));
  }
  function drawRectStroke(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var offset = originPt$$module$kaboom$v06(conf.origin || DEF_ORIGIN$$module$kaboom$v06).scale(vec2$$module$kaboom$v06(w, h)).scale(0.5);
    /** @const */ var p1 = pos.add(vec2$$module$kaboom$v06(-w / 2, -h / 2)).sub(offset);
    /** @const */ var p2 = pos.add(vec2$$module$kaboom$v06(-w / 2, h / 2)).sub(offset);
    /** @const */ var p3 = pos.add(vec2$$module$kaboom$v06(w / 2, h / 2)).sub(offset);
    /** @const */ var p4 = pos.add(vec2$$module$kaboom$v06(w / 2, -h / 2)).sub(offset);
    drawLine(p1, p2, conf);
    drawLine(p2, p3, conf);
    drawLine(p3, p4, conf);
    drawLine(p4, p1, conf);
  }
  function drawLine(p1, p2, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var w = conf.width || 1;
    /** @const */ var h = p1.dist(p2);
    /** @const */ var rot = Math.PI / 2 - p1.angle(p2);
    drawQuad(Object.assign({}, conf, {pos:p1.add(p2).scale(0.5), width:w, height:h, rot:rot, origin:"center"}));
  }
  function drawTri(p1, p2, p3, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var z = conf.z;
    /** @const */ var color = conf.color || rgb$$module$kaboom$v06(1, 1, 1);
    drawRaw([{pos:vec3$$module$kaboom$v06(p1.x, p1.y, z), uv:vec2$$module$kaboom$v06(0, 0), color:color}, {pos:vec3$$module$kaboom$v06(p2.x, p2.y, z), uv:vec2$$module$kaboom$v06(0, 0), color:color}, {pos:vec3$$module$kaboom$v06(p3.x, p3.y, z), uv:vec2$$module$kaboom$v06(0, 0), color:color}], [0, 1, 2], gfx.defTex, conf.prog, conf.uniform);
  }
  function fmtText(text, font, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var chars = (text + "").split("");
    /** @const */ var gw = font.qw * font.tex.width;
    /** @const */ var gh = font.qh * font.tex.height;
    /** @const */ var size = conf.size || gh;
    /** @const */ var scale = vec2$$module$kaboom$v06(size / gh).scale(vec2$$module$kaboom$v06(conf.scale || 1));
    /** @const */ var cw = scale.x * gw;
    /** @const */ var ch = scale.y * gh;
    var curX = 0;
    var th = ch;
    var tw = 0;
    /** @const */ var flines = [];
    var curLine = [];
    var lastSpace = null;
    for (var cursor = 0; cursor < chars.length;) {
      var char = chars[cursor];
      if (char === "\n") {
        th += ch;
        curX = 0;
        lastSpace = null;
        flines.push(curLine);
        curLine = [];
      } else {
        if (conf.width ? curX + cw > conf.width : false) {
          th += ch;
          curX = 0;
          if (lastSpace != null) {
            cursor -= curLine.length - lastSpace;
            char = chars[cursor];
            curLine = curLine.slice(0, lastSpace);
          }
          lastSpace = null;
          flines.push(curLine);
          curLine = [];
        }
      }
      if (char !== "\n") {
        curLine.push(char);
        curX += cw;
        if (char === " ") {
          lastSpace = curLine.length;
        }
      }
      tw = Math.max(tw, curX);
      cursor++;
    }
    flines.push(curLine);
    if (conf.width) {
      tw = conf.width;
    }
    /** @const */ var fchars = [];
    /** @const */ var pos = vec2$$module$kaboom$v06(conf.pos || 0);
    /** @const */ var offset = originPt$$module$kaboom$v06(conf.origin || DEF_ORIGIN$$module$kaboom$v06).scale(0.5);
    /** @const */ var ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
    /** @const */ var oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);
    flines.forEach(function(line, ln) {
      /** @const */ var oxl = (tw - line.length * cw) * (offset.x + 0.5);
      line.forEach(function(char, cn) {
        /** @const */ var qpos = font.map[char];
        /** @const */ var x = cn * cw;
        /** @const */ var y = ln * ch;
        if (qpos) {
          fchars.push({tex:font.tex, quad:quad$$module$kaboom$v06(qpos.x, qpos.y, font.qw, font.qh), ch:char, pos:vec2$$module$kaboom$v06(pos.x + x + ox + oxl, pos.y + y + oy), color:conf.color, origin:conf.origin, scale:scale, z:conf.z});
        }
      });
    });
    return {width:tw, height:th, chars:fchars};
  }
  function drawText(txt, font, conf) {
    conf = conf === undefined ? {} : conf;
    drawFmtText(fmtText(txt, font, conf));
  }
  function drawFmtText(ftext) {
    var $jscomp$iter$11 = $jscomp.makeIterator(ftext.chars);
    for (var $jscomp$key$ch = $jscomp$iter$11.next(); !$jscomp$key$ch.done; $jscomp$key$ch = $jscomp$iter$11.next()) {
      /** @const */ var ch = $jscomp$key$ch.value;
      {
        drawQuad({tex:ch.tex, width:ch.tex.width * ch.quad.w, height:ch.tex.height * ch.quad.h, pos:ch.pos, scale:ch.scale, color:ch.color, quad:ch.quad, origin:"center", z:ch.z});
      }
    }
  }
  function width() {
    return gl.drawingBufferWidth / scale$jscomp$0();
  }
  function height() {
    return gl.drawingBufferHeight / scale$jscomp$0();
  }
  function scale$jscomp$0() {
    var $jscomp$nullish$tmp8;
    return ($jscomp$nullish$tmp8 = gconf.scale) != null ? $jscomp$nullish$tmp8 : 1;
  }
  function clearColor() {
    return gfx.clearColor.clone();
  }
  /** @const */ var texFilter = function() {
    switch(gconf.texFilter) {
      case "linear":
        return gl.LINEAR;
      case "nearest":
        return gl.NEAREST;
      default:
        return gl.NEAREST;
    }
  }();
  /** @const */ var gfx = function() {
    /** @const */ var defProg = makeProgram(DEF_VERT$$module$kaboom$v06, DEF_FRAG$$module$kaboom$v06);
    /** @const */ var emptyTex = makeTex(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
    var $jscomp$nullish$tmp0;
    /** @const */ var c = ($jscomp$nullish$tmp0 = gconf.clearColor) != null ? $jscomp$nullish$tmp0 : rgba$$module$kaboom$v06(0, 0, 0, 1);
    gl.clearColor(c.r, c.g, c.b, c.a);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    /** @const */ var vbuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
    gl.bufferData(gl.ARRAY_BUFFER, QUEUE_COUNT$$module$kaboom$v06 * 4, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /** @const */ var ibuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, QUEUE_COUNT$$module$kaboom$v06 * 2, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    /** @const */ var bgTex = makeTex(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2));
    return {drawCalls:0, lastDrawCalls:0, defProg:defProg, curProg:defProg, defTex:emptyTex, curTex:emptyTex, curUniform:{}, vbuf:vbuf, ibuf:ibuf, vqueue:[], iqueue:[], transform:mat4$$module$kaboom$v06(), transformStack:[], clearColor:c, bgTex:bgTex};
  }();
  frameStart();
  frameEnd();
  return {width:width, height:height, scale:scale$jscomp$0, makeTex:makeTex, makeProgram:makeProgram, makeFont:makeFont, drawTexture:drawTexture, drawText:drawText, drawFmtText:drawFmtText, drawRect:drawRect, drawRectStroke:drawRectStroke, drawLine:drawLine, drawTri:drawTri, fmtText:fmtText, frameStart:frameStart, frameEnd:frameEnd, pushTransform:pushTransform, popTransform:popTransform, pushMatrix:pushMatrix, drawCalls:drawCalls, clearColor:clearColor};
}
function processBtnState$$module$kaboom$v06(s) {
  if (s === "pressed" || s === "rpressed") {
    return "down";
  }
  if (s === "released") {
    return "up";
  }
  return s;
}
function appInit$$module$kaboom$v06(gconf) {
  function mousePos() {
    return app.mousePos.clone();
  }
  function mouseDeltaPos() {
    return app.mouseDeltaPos.clone();
  }
  function mouseClicked() {
    return app.mouseState === "pressed";
  }
  function mouseDown() {
    return app.mouseState === "pressed" || app.mouseState === "down";
  }
  function mouseReleased() {
    return app.mouseState === "released";
  }
  function mouseMoved() {
    return app.mouseMoved;
  }
  function keyPressed(k) {
    return app.keyStates[k] === "pressed";
  }
  function keyPressedRep(k) {
    return app.keyStates[k] === "pressed" || app.keyStates[k] === "rpressed";
  }
  function keyDown(k) {
    return app.keyStates[k] === "pressed" || app.keyStates[k] === "rpressed" || app.keyStates[k] === "down";
  }
  function keyReleased(k) {
    return app.keyStates[k] === "released";
  }
  function charInputted() {
    return [].concat($jscomp.arrayFromIterable(app.charInputted));
  }
  function dt() {
    return app.dt;
  }
  function time() {
    return app.time;
  }
  function fps() {
    return app.fps;
  }
  function screenshot() {
    return app.canvas.toDataURL();
  }
  function cursor(c) {
    if (c) {
      app.canvas.style.cursor = c ? c : "default";
    }
    return app.canvas.style.cursor;
  }
  function run(f) {
    /** @const */ var frame = function(t) {
      /** @const */ var realTime = t / 1000;
      /** @const */ var realDt = realTime - app.realTime;
      app.realTime = realTime;
      if (!app.skipTime) {
        app.dt = realDt;
        app.time += app.dt;
        app.fpsBuf.push(1 / app.dt);
        app.fpsTimer += app.dt;
        if (app.fpsTimer >= 1) {
          app.fpsTimer = 0;
          app.fps = Math.round(app.fpsBuf.reduce(function(a, b) {
            return a + b;
          }) / app.fpsBuf.length);
          app.fpsBuf = [];
        }
      }
      app.skipTime = false;
      f();
      for (var k in app.keyStates) {
        app.keyStates[k] = processBtnState$$module$kaboom$v06(app.keyStates[k]);
      }
      app.mouseState = processBtnState$$module$kaboom$v06(app.mouseState);
      app.charInputted = [];
      app.mouseMoved = false;
      if (!app.stopped) {
        app.loopID = requestAnimationFrame(frame);
      }
    };
    app.loopID = requestAnimationFrame(frame);
  }
  function quit() {
    cancelAnimationFrame(app.loopID);
    app.stopped = true;
  }
  gconf = gconf === undefined ? {} : gconf;
  /** @const */ var app = {canvas:gconf.canvas ? gconf.canvas : function() {
    /** @const */ var canvas = document.createElement("canvas");
    (gconf.root ? gconf.root : document.body).appendChild(canvas);
    return canvas;
  }(), keyStates:{}, charInputted:[], mouseMoved:false, mouseState:"up", mousePos:vec2$$module$kaboom$v06(0, 0), mouseDeltaPos:vec2$$module$kaboom$v06(0, 0), time:0, realTime:0, skipTime:false, dt:0.0, scale:gconf.scale ? gconf.scale : 1, isTouch:false, loopID:null, stopped:false, fps:0, fpsBuf:[], fpsTimer:0};
  /** @const */ var keyMap = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down", " ":"space"};
  /** @const */ var preventDefaultKeys = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"];
  if (gconf.fullscreen) {
    app.canvas.width = window.innerWidth;
    app.canvas.height = window.innerHeight;
  } else {
    app.canvas.width = (gconf.width || 640) * app.scale;
    app.canvas.height = (gconf.height || 480) * app.scale;
  }
  /** @const */ var styles = ["outline: none", "cursor: default"];
  if (gconf.crisp) {
    styles.push("image-rendering: pixelated");
    styles.push("image-rendering: crisp-edges");
  }
  app.canvas.style = styles.join(";");
  app.canvas.setAttribute("tabindex", "0");
  /** @const */ var gl = app.canvas.getContext("webgl", {antialias:true, depth:true, stencil:true, alpha:true, preserveDrawingBuffer:true});
  app.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  app.canvas.addEventListener("mousemove", function(e) {
    app.mousePos = vec2$$module$kaboom$v06(e.offsetX, e.offsetY).scale(1 / app.scale);
    app.mouseDeltaPos = vec2$$module$kaboom$v06(e.movementX, e.movementY).scale(1 / app.scale);
    app.mouseMoved = true;
  });
  app.canvas.addEventListener("mousedown", function() {
    app.mouseState = "pressed";
  });
  app.canvas.addEventListener("mouseup", function() {
    app.mouseState = "released";
  });
  app.canvas.addEventListener("keydown", function(e) {
    /** @const */ var k = keyMap[e.key] || e.key.toLowerCase();
    if (preventDefaultKeys.includes(k)) {
      e.preventDefault();
    }
    if (k.length === 1) {
      app.charInputted.push(k);
    }
    if (k === "space") {
      app.charInputted.push(" ");
    }
    if (e.repeat) {
      app.keyStates[k] = "rpressed";
    } else {
      app.keyStates[k] = "pressed";
    }
  });
  app.canvas.addEventListener("keyup", function(e) {
    /** @const */ var k = keyMap[e.key] || e.key.toLowerCase();
    app.keyStates[k] = "released";
  });
  app.canvas.addEventListener("touchstart", function(e) {
    if (!gconf.touchToMouse) {
      return;
    }
    e.preventDefault();
    /** @const */ var t = e.touches[0];
    app.mousePos = vec2$$module$kaboom$v06(t.clientX, t.clientY).scale(1 / app.scale);
    app.mouseState = "pressed";
  });
  app.canvas.addEventListener("touchmove", function(e) {
    if (!gconf.touchToMouse) {
      return;
    }
    e.preventDefault();
    /** @const */ var t = e.touches[0];
    app.mousePos = vec2$$module$kaboom$v06(t.clientX, t.clientY).scale(1 / app.scale);
    app.mouseMoved = true;
  });
  app.canvas.addEventListener("touchend", function(e) {
    if (!gconf.touchToMouse) {
      return;
    }
    app.mouseState = "released";
  });
  app.canvas.addEventListener("touchcancel", function(e) {
    if (!gconf.touchToMouse) {
      return;
    }
    app.mouseState = "released";
  });
  document.addEventListener("visibilitychange", function() {
    switch(document.visibilityState) {
      case "visible":
        app.skipTime = true;
        break;
      case "hidden":
        break;
    }
  });
  return {gl:gl, mousePos:mousePos, mouseDeltaPos:mouseDeltaPos, keyDown:keyDown, keyPressed:keyPressed, keyPressedRep:keyPressedRep, keyReleased:keyReleased, mouseDown:mouseDown, mouseClicked:mouseClicked, mouseReleased:mouseReleased, mouseMoved:mouseMoved, charInputted:charInputted, cursor:cursor, dt:dt, time:time, fps:fps, screenshot:screenshot, run:run, quit:quit, focused:function() {
    return document.activeElement === app.canvas;
  }, focus:function() {
    return app.canvas.focus();
  }, canvas:app.canvas, isTouch:app.isTouch, scale:app.scale};
}
/** @const */ var MIN_GAIN$$module$kaboom$v06 = 0;
/** @const */ var MAX_GAIN$$module$kaboom$v06 = 3;
/** @const */ var MIN_SPEED$$module$kaboom$v06 = 0;
/** @const */ var MAX_SPEED$$module$kaboom$v06 = 3;
/** @const */ var MIN_DETUNE$$module$kaboom$v06 = -1200;
/** @const */ var MAX_DETUNE$$module$kaboom$v06 = 1200;
function audioInit$$module$kaboom$v06() {
  function volume(v) {
    if (v !== undefined) {
      audio.gainNode.gain.value = clamp$$module$kaboom$v06(v, MIN_GAIN$$module$kaboom$v06, MAX_GAIN$$module$kaboom$v06);
    }
    return audio.gainNode.gain.value;
  }
  function play(sound, conf) {
    conf = conf === undefined ? {loop:false, volume:1, speed:1, detune:0, seek:0} : conf;
    var stopped = false;
    var srcNode = audio.ctx.createBufferSource();
    srcNode.buffer = sound;
    srcNode.loop = conf.loop ? true : false;
    /** @const */ var gainNode = audio.ctx.createGain();
    srcNode.connect(gainNode);
    gainNode.connect(audio.masterNode);
    /** @const */ var pos$jscomp$0 = conf.seek ? conf.seek : 0;
    srcNode.start(0, pos$jscomp$0);
    var startTime = audio.ctx.currentTime - pos$jscomp$0;
    var stopTime = null;
    /** @const */ var handle = {stop:function() {
      if (stopped) {
        return;
      }
      this.pause();
      startTime = audio.ctx.currentTime;
    }, play:function(seek) {
      if (!stopped) {
        return;
      }
      /** @const */ var oldNode = srcNode;
      srcNode = audio.ctx.createBufferSource();
      srcNode.buffer = oldNode.buffer;
      srcNode.loop = oldNode.loop;
      srcNode.playbackRate.value = oldNode.playbackRate.value;
      if (srcNode.detune) {
        srcNode.detune.value = oldNode.detune.value;
      }
      srcNode.connect(gainNode);
      /** @const */ var pos = seek ? seek : this.time();
      srcNode.start(0, pos);
      startTime = audio.ctx.currentTime - pos;
      stopped = false;
      stopTime = null;
    }, pause:function() {
      if (stopped) {
        return;
      }
      srcNode.stop();
      stopped = true;
      stopTime = audio.ctx.currentTime;
    }, paused:function() {
      return stopped;
    }, stopped:function() {
      return stopped;
    }, speed:function(val) {
      if (val !== undefined) {
        srcNode.playbackRate.value = clamp$$module$kaboom$v06(val, MIN_SPEED$$module$kaboom$v06, MAX_SPEED$$module$kaboom$v06);
      }
      return srcNode.playbackRate.value;
    }, detune:function(val) {
      if (!srcNode.detune) {
        return 0;
      }
      if (val !== undefined) {
        srcNode.detune.value = clamp$$module$kaboom$v06(val, MIN_DETUNE$$module$kaboom$v06, MAX_DETUNE$$module$kaboom$v06);
      }
      return srcNode.detune.value;
    }, volume:function(val) {
      if (val !== undefined) {
        gainNode.gain.value = clamp$$module$kaboom$v06(val, MIN_GAIN$$module$kaboom$v06, MAX_GAIN$$module$kaboom$v06);
      }
      return gainNode.gain.value;
    }, loop:function() {
      srcNode.loop = true;
    }, unloop:function() {
      srcNode.loop = false;
    }, duration:function() {
      return sound.duration;
    }, time:function() {
      if (stopped) {
        return stopTime - startTime;
      } else {
        return audio.ctx.currentTime - startTime;
      }
    }};
    handle.speed(conf.speed);
    handle.detune(conf.detune);
    handle.volume(conf.volume);
    return handle;
  }
  function ctx() {
    return audio.ctx;
  }
  function burp(conf) {
    return play(burpBuf, conf);
  }
  /** @const */ var audio = function() {
    /** @const */ var ctx = new (window.AudioContext || window.webkitAudioContext);
    /** @const */ var gainNode = ctx.createGain();
    /** @const */ var masterNode = gainNode;
    masterNode.connect(ctx.destination);
    return {ctx:ctx, gainNode:gainNode, masterNode:masterNode};
  }();
  var burpBuf;
  return {ctx:ctx, volume:volume, play:play, burp:burp};
}
/** @const */ var unsciiSrc$$module$kaboom$v06 = "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/unscii_8x8.png";
/** @const */ var markSrc$$module$kaboom$v06 = "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/mark.png";
/** @const */ var ASCII_CHARS$$module$kaboom$v06 = " !\"#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
/** @const */ var DEF_FONT$$module$kaboom$v06 = "unscii";
function loadImg$$module$kaboom$v06(src) {
  /** @const */ var img = new Image;
  img.src = src;
  img.crossOrigin = "anonymous";
  return new Promise(function(resolve, reject) {
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject("failed to load " + src);
    };
  });
}
function isDataUrl$$module$kaboom$v06(src) {
  return src.startsWith("data:");
}
function assetsInit$$module$kaboom$v06(gfx, audio, gconf) {
  function addLoader(prom) {
    /** @const */ var id = assets.lastLoaderID;
    assets.loaders[id] = false;
    assets.lastLoaderID++;
    prom.catch(gconf.errHandler ? gconf.errHandler : console.error).finally(function() {
      return assets.loaders[id] = true;
    });
  }
  function loadProgress() {
    var total = 0;
    var loaded = 0;
    for (var id in assets.loaders) {
      total += 1;
      if (assets.loaders[id]) {
        loaded += 1;
      }
    }
    return loaded / total;
  }
  function loadRoot(path) {
    if (path !== undefined) {
      assets.loadRoot = path;
    }
    return assets.loadRoot;
  }
  function loadFont(name, src, gw, gh, chars) {
    chars = chars === undefined ? ASCII_CHARS$$module$kaboom$v06 : chars;
    /** @const */ var loader = new Promise(function(resolve, reject) {
      /** @const */ var path = isDataUrl$$module$kaboom$v06(src) ? src : assets.loadRoot + src;
      loadImg$$module$kaboom$v06(path).then(function(img) {
        /** @const */ var font = gfx.makeFont(gfx.makeTex(img), gw, gh, chars);
        assets.fonts[name] = font;
        resolve(font);
      }).catch(reject);
    });
    addLoader(loader);
    return loader;
  }
  function loadSprite(name$jscomp$0, src$jscomp$0, conf$jscomp$0) {
    function loadRawSprite(name, src, conf) {
      conf = conf === undefined ? {sliceX:1, sliceY:1, gridWidth:0, gridHeight:0, anims:{}} : conf;
      /** @const */ var frames = [];
      /** @const */ var tex = gfx.makeTex(src);
      /** @const */ var sliceX = conf.sliceX || tex.width / (conf.gridWidth || tex.width);
      /** @const */ var sliceY = conf.sliceY || tex.height / (conf.gridHeight || tex.height);
      /** @const */ var qw = 1 / sliceX;
      /** @const */ var qh = 1 / sliceY;
      for (var j = 0; j < sliceY; j++) {
        for (var i = 0; i < sliceX; i++) {
          frames.push(quad$$module$kaboom$v06(i * qw, j * qh, qw, qh));
        }
      }
      /** @const */ var sprite = {tex:tex, frames:frames, anims:conf.anims || {}};
      assets.sprites[name] = sprite;
      return sprite;
    }
    conf$jscomp$0 = conf$jscomp$0 === undefined ? {sliceX:1, sliceY:1, anims:{}} : conf$jscomp$0;
    /** @const */ var loader = new Promise(function(resolve, reject) {
      if (!src$jscomp$0) {
        return reject('expected sprite src for "' + name$jscomp$0 + '"');
      }
      if (typeof src$jscomp$0 === "string") {
        /** @const */ var path = isDataUrl$$module$kaboom$v06(src$jscomp$0) ? src$jscomp$0 : assets.loadRoot + src$jscomp$0;
        loadImg$$module$kaboom$v06(path).then(function(img) {
          resolve(loadRawSprite(name$jscomp$0, img, conf$jscomp$0));
        }).catch(reject);
      } else {
        resolve(loadRawSprite(name$jscomp$0, src$jscomp$0, conf$jscomp$0));
      }
    });
    addLoader(loader);
    return loader;
  }
  function loadShader(name$jscomp$0, vert, frag, isUrl) {
    function loadRawShader(name, vert, frag) {
      /** @const */ var shader = gfx.makeProgram(vert, frag);
      assets.shaders[name] = shader;
      return shader;
    }
    isUrl = isUrl === undefined ? false : isUrl;
    /** @const */ var loader = new Promise(function(resolve, reject) {
      function resolveUrl(url) {
        return url ? fetch(assets.loadRoot + url).then(function(r) {
          if (r.ok) {
            return r.text();
          } else {
            throw new Error("failed to load " + url);
          }
        }).catch(reject) : new Promise(function(r) {
          return r(null);
        });
      }
      if (!vert && !frag) {
        return reject("no shader");
      }
      if (isUrl) {
        Promise.all([resolveUrl(vert), resolveUrl(frag)]).then(function($jscomp$destructuring$var2) {
          var $jscomp$destructuring$var3 = $jscomp.makeIterator($jscomp$destructuring$var2);
          var vcode = $jscomp$destructuring$var3.next().value;
          var fcode = $jscomp$destructuring$var3.next().value;
          resolve(loadRawShader(name$jscomp$0, vcode, fcode));
        }).catch(reject);
      } else {
        try {
          resolve(loadRawShader(name$jscomp$0, vert, frag));
        } catch (err) {
          reject(err);
        }
      }
    });
    addLoader(loader);
    return loader;
  }
  function loadSound(name, src) {
    /** @const */ var url = assets.loadRoot + src;
    /** @const */ var loader = new Promise(function(resolve, reject) {
      if (!src) {
        return reject('expected sound src for "' + name + '"');
      }
      if (typeof src === "string") {
        fetch(url).then(function(res) {
          if (res.ok) {
            return res.arrayBuffer();
          } else {
            throw new Error("failed to load " + url);
          }
        }).then(function(data) {
          return new Promise(function(resolve2, reject2) {
            audio.ctx().decodeAudioData(data, resolve2, reject2);
          });
        }).then(function(buf) {
          assets.sounds[name] = buf;
          resolve(buf);
        }).catch(reject);
      }
    });
    addLoader(loader);
    return loader;
  }
  function defFont() {
    return assets.fonts[DEF_FONT$$module$kaboom$v06];
  }
  gconf = gconf === undefined ? {} : gconf;
  /** @const */ var assets = {lastLoaderID:0, loadRoot:"", loaders:{}, sprites:{}, sounds:{}, fonts:{}, shaders:{}};
  loadFont(DEF_FONT$$module$kaboom$v06, unsciiSrc$$module$kaboom$v06, 8, 8);
  loadSprite("mark", markSrc$$module$kaboom$v06);
  return {loadRoot:loadRoot, loadSprite:loadSprite, loadSound:loadSound, loadFont:loadFont, loadShader:loadShader, loadProgress:loadProgress, addLoader:addLoader, defFont:defFont, sprites:assets.sprites, fonts:assets.fonts, sounds:assets.sounds, shaders:assets.shaders};
}
/** @const */ var LOG_SIZE$$module$kaboom$v06 = 16;
function loggerInit$$module$kaboom$v06(gfx, assets, conf) {
  function draw() {
    if (logs.length > max) {
      logs = logs.slice(0, max);
    }
    /** @const */ var pos = vec2$$module$kaboom$v06(0, gfx.height());
    logs.forEach(function(log, i) {
      /** @const */ var txtAlpha = map$$module$kaboom$v06(i, 0, max, 1, 0.5);
      /** @const */ var bgAlpha = map$$module$kaboom$v06(i, 0, max, 0.8, 0.2);
      /** @const */ var col = function() {
        switch(log.type) {
          case "info":
            return rgba$$module$kaboom$v06(1, 1, 1, txtAlpha);
          case "error":
            return rgba$$module$kaboom$v06(1, 0, 0.5, txtAlpha);
        }
      }();
      /** @const */ var ftext = gfx.fmtText(log.msg, assets.defFont(), {pos:pos, origin:"botleft", color:col, size:LOG_SIZE$$module$kaboom$v06 / gfx.scale(), width:gfx.width()});
      gfx.drawRect(pos, ftext.width, ftext.height, {origin:"botleft", color:rgba$$module$kaboom$v06(0, 0, 0, bgAlpha)});
      gfx.drawFmtText(ftext);
      pos.y -= ftext.height;
    });
  }
  function error(msg) {
    console.error(msg);
    logs.unshift({type:"error", msg:msg});
  }
  function info(msg) {
    logs.unshift({type:"info", msg:msg});
  }
  function clear() {
    logs = [];
  }
  conf = conf === undefined ? {max:8} : conf;
  var logs = [];
  /** @const */ var max = conf.max ? conf.max : 8;
  return {info:info, error:error, draw:draw, clear:clear};
}
function netInit$$module$kaboom$v06(url) {
  function connected() {
    return socket !== null && socket.readyState === 1;
  }
  function connect() {
    /** @const */ var ws = new WebSocket(url);
    return new Promise < WebSocket > function(resolve, reject) {
      ws.onopen = function() {
        resolve(ws);
        socket = ws;
        var $jscomp$iter$12 = $jscomp.makeIterator(sendQueue);
        for (var $jscomp$key$msg = $jscomp$iter$12.next(); !$jscomp$key$msg.done; $jscomp$key$msg = $jscomp$iter$12.next()) {
          /** @const */ var msg = $jscomp$key$msg.value;
          {
            ws.send(msg);
          }
        }
      };
      ws.onerror = function() {
        reject("failed to connect to " + url);
      };
      ws.onmessage = function(e) {
        /** @const */ var msg = JSON.parse(e.data);
        if (handlers[msg.type]) {
          var $jscomp$iter$13 = $jscomp.makeIterator(handlers[msg.type]);
          for (var $jscomp$key$handler = $jscomp$iter$13.next(); !$jscomp$key$handler.done; $jscomp$key$handler = $jscomp$iter$13.next()) {
            /** @const */ var handler = $jscomp$key$handler.value;
            {
              handler(msg.id, msg.data);
            }
          }
        }
      };
    };
  }
  function recv(type, handler) {
    if (!handlers[type]) {
      handlers[type] = [];
    }
    handlers[type].push(handler);
  }
  function send(type, data) {
    /** @const */ var msg = JSON.stringify({type:type, data:data});
    if (socket) {
      socket.send(msg);
    } else {
      sendQueue.push(msg);
    }
  }
  function close() {
    if (socket) {
      socket.close();
    }
  }
  /** @const */ var handlers = {};
  /** @const */ var sendQueue = [];
  var socket = null;
  return {connect:connect, close:close, connected:connected, recv:recv, send:send};
}
/** @const */ var kaboom$$module$kaboom$v06 = function(gconf) {
  function get_comp(id, defaultVal) {
    var val = state.components[id];
    if (val) {
      return val;
    }
    return get(id);
  }
  function sync(obj) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    game.travelers.push(obj._id);
    send(NetMsg.AddObj, obj._data());
  }
  function recv(ty, handler) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    net.recv(ty, function(data, id) {
      try {
        handler(data, id);
      } catch (err) {
        logger.error(err);
      }
    });
  }
  function send(ty, data) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    net.send(ty, data);
  }
  function dt() {
    return app.dt() * debug.timeScale;
  }
  function play(id, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var pb = audio.play(new AudioBuffer({length:1, numberOfChannels:1, sampleRate:44100}));
    ready(function() {
      /** @const */ var sound = assets.sounds[id];
      if (!sound) {
        throw new Error('sound not found: "' + id + '"');
      }
      /** @const */ var pb2 = audio.play(sound, conf);
      for (var k in pb2) {
        pb[k] = pb2[k];
      }
    });
    return pb;
  }
  function isCamLayer(layer) {
    return !(game.layers[layer ? layer : game.defLayer] && game.layers[layer ? layer : game.defLayer].noCam);
  }
  function mousePos(layer) {
    return isCamLayer(layer) ? game.camMousePos : app.mousePos();
  }
  function drawSprite(id, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var spr = function() {
      if (typeof id === "string") {
        return assets.sprites[id];
      } else {
        return id;
      }
    }();
    if (!spr) {
      throw new Error('sprite not found: "' + id + '"');
    }
    /** @const */ var q = spr.frames[conf.frame ? conf.frame : 0];
    gfx.drawTexture(spr.tex, Object.assign({}, conf, {quad:q.scale(conf.quad || quad$$module$kaboom$v06(0, 0, 1, 1))}));
  }
  function drawText(txt, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var fid = conf.font ? conf.font : DEF_FONT$$module$kaboom$v06;
    /** @const */ var font = assets.fonts[fid];
    if (!font) {
      throw new Error("font not found: " + fid);
    }
    gfx.drawText(txt, font, conf);
  }
  function layers(list, def) {
    list.forEach(function(name, idx) {
      game.layers[name] = {alpha:1, order:idx + 1, noCam:false};
    });
    if (def) {
      game.defLayer = def;
    }
  }
  function camPos(pos) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var pos$37 = $jscomp$restParams;
      if (pos$37.length > 0) {
        game.cam.pos = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(pos$37));
      }
      return game.cam.pos.clone();
    }
  }
  function camScale(scale) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var scale$38 = $jscomp$restParams;
      if (scale$38.length > 0) {
        game.cam.scale = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(scale$38));
      }
      return game.cam.scale.clone();
    }
  }
  function camRot(angle) {
    if (angle !== undefined) {
      game.cam.angle = angle;
    }
    return game.cam.angle;
  }
  function camShake(intensity) {
    game.cam.shake = intensity;
  }
  function camIgnore(layers) {
    layers.forEach(function(name) {
      if (game.layers[name]) {
        game.layers[name].noCam = true;
      }
    });
  }
  function add(comps) {
    /** @const */ var compStates = {};
    /** @const */ var customState = {};
    /** @const */ var events = {};
    /** @const */ var tags = [];
    /** @const */ var obj = {_id:null, hidden:false, paused:false, use:function(comp) {
      if (comp === undefined) {
        return;
      }
      /** @const */ var ty = typeof comp;
      if (ty === "string") {
        tags.push(comp);
        return;
      }
      if (ty !== "object") {
        throw new Error("invalid comp type: " + ty);
      }
      var stateContainer = customState;
      if (comp.id) {
        compStates[comp.id] = {};
        stateContainer = compStates[comp.id];
      }
      var $jscomp$loop$49 = {};
      for (var k in comp) {
        $jscomp$loop$49.$jscomp$loop$prop$k$51 = k;
        $jscomp$loop$49: {
          if ($jscomp$loop$49.$jscomp$loop$prop$k$51 === "id" || $jscomp$loop$49.$jscomp$loop$prop$k$51 === "require") {
            break $jscomp$loop$49;
          }
          if (typeof comp[$jscomp$loop$49.$jscomp$loop$prop$k$51] === "function") {
            /** @const */ var func = comp[$jscomp$loop$49.$jscomp$loop$prop$k$51].bind(this, state.components);
            if (COMP_EVENTS.has($jscomp$loop$49.$jscomp$loop$prop$k$51)) {
              this.on($jscomp$loop$49.$jscomp$loop$prop$k$51, func);
              break $jscomp$loop$49;
            } else {
              stateContainer[$jscomp$loop$49.$jscomp$loop$prop$k$51] = func;
            }
          } else {
            stateContainer[$jscomp$loop$49.$jscomp$loop$prop$k$51] = comp[$jscomp$loop$49.$jscomp$loop$prop$k$51];
          }
          if (!this[$jscomp$loop$49.$jscomp$loop$prop$k$51]) {
            Object.defineProperty(this, $jscomp$loop$49.$jscomp$loop$prop$k$51, {get:function($jscomp$loop$49) {
              return function() {
                if (comp.id) {
                  return compStates[comp.id][$jscomp$loop$49.$jscomp$loop$prop$k$51];
                } else {
                  return customState[$jscomp$loop$49.$jscomp$loop$prop$k$51];
                }
              };
            }($jscomp$loop$49), set:function($jscomp$loop$49) {
              return function(val) {
                if (comp.id) {
                  compStates[comp.id][$jscomp$loop$49.$jscomp$loop$prop$k$51] = val;
                } else {
                  customState[$jscomp$loop$49.$jscomp$loop$prop$k$51] = val;
                }
              };
            }($jscomp$loop$49)});
          }
        }
        $jscomp$loop$49 = {$jscomp$loop$prop$k$51:$jscomp$loop$49.$jscomp$loop$prop$k$51};
      }
    }, c:function(id) {
      return compStates[id];
    }, exists:function() {
      return this._id !== undefined;
    }, is:function(tag) {
      if (tag === "*") {
        return true;
      }
      if (Array.isArray(tag)) {
        var $jscomp$iter$15 = $jscomp.makeIterator(tag);
        for (var $jscomp$key$t = $jscomp$iter$15.next(); !$jscomp$key$t.done; $jscomp$key$t = $jscomp$iter$15.next()) {
          /** @const */ var t = $jscomp$key$t.value;
          {
            if (!tags.includes(t)) {
              return false;
            }
          }
        }
        return true;
      }
      return tags.includes(tag);
    }, on:function(ev, cb) {
      if (!events[ev]) {
        events[ev] = new IDList$$module$kaboom$v06;
      }
      return events[ev].pushd(cb);
    }, action:function(cb) {
      return this.on("update", cb);
    }, trigger:function(ev, args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
      }
      {
        var args$39 = $jscomp$restParams;
        /** @const */ var $jscomp$this = this;
        if (events[ev]) {
          events[ev].forEach(function(cb) {
            return cb.call.apply(cb, [$jscomp$this].concat($jscomp.arrayFromIterable(args$39)));
          });
        }
        /** @const */ var gEvents = game.objEvents[ev];
        if (gEvents) {
          gEvents.forEach(function(e) {
            if ($jscomp$this.is(e.tag)) {
              e.cb.apply(e, [$jscomp$this].concat($jscomp.arrayFromIterable(args$39)));
            }
          });
        }
      }
    }, rmTag:function(t) {
      /** @const */ var idx = tags.indexOf(t);
      if (idx > -1) {
        tags.splice(idx, 1);
      }
    }, _inspect:function() {
      /** @const */ var info = [];
      if (events["inspect"]) {
        var $jscomp$iter$16 = $jscomp.makeIterator(events["inspect"].values());
        for (var $jscomp$key$inspect = $jscomp$iter$16.next(); !$jscomp$key$inspect.done; $jscomp$key$inspect = $jscomp$iter$16.next()) {
          /** @const */ var inspect = $jscomp$key$inspect.value;
          {
            info.push(inspect());
          }
        }
      }
      return {tags:tags, info:info};
    }, destroy:function() {
      destroy(this);
    }};
    var $jscomp$iter$17 = $jscomp.makeIterator(comps);
    for (var $jscomp$key$comp = $jscomp$iter$17.next(); !$jscomp$key$comp.done; $jscomp$key$comp = $jscomp$iter$17.next()) {
      /** @const */ var comp$jscomp$0 = $jscomp$key$comp.value;
      {
        obj.use(comp$jscomp$0);
      }
    }
    obj._id = game.objs.push(obj);
    obj.trigger("add");
    ready(function() {
      return obj.trigger("load");
    });
    for (var id$jscomp$0 in compStates) {
      /** @const */ var comp$40 = compStates[id$jscomp$0];
      /** @const */ var deps = comp$40.require || [];
      var $jscomp$iter$18 = $jscomp.makeIterator(deps);
      for (var $jscomp$key$dep = $jscomp$iter$18.next(); !$jscomp$key$dep.done; $jscomp$key$dep = $jscomp$iter$18.next()) {
        /** @const */ var dep = $jscomp$key$dep.value;
        {
          if (!obj.c(dep)) {
            throw new Error("comp '" + id$jscomp$0 + "' requires comp '" + dep + "'");
          }
        }
      }
    }
    return obj;
  }
  function readd(obj) {
    if (!obj.exists()) {
      return;
    }
    game.objs.delete(obj._id);
    /** @const */ var id = game.objs.push(obj);
    obj._id = id;
    return obj;
  }
  function on(event, tag, cb) {
    if (!game.objEvents[event]) {
      game.objEvents[event] = new IDList$$module$kaboom$v06;
    }
    return game.objEvents[event].pushd({tag:tag, cb:cb});
  }
  function action(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      return game.actions.pushd(tag);
    } else {
      if (typeof tag === "string") {
        return on("update", tag, cb);
      }
    }
  }
  function render(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      return game.renders.pushd(tag);
    } else {
      if (typeof tag === "string") {
        return on("update", tag, cb);
      }
    }
  }
  function collides(t1, t2, f) {
    return action(t1, function(o1) {
      o1._checkCollisions(t2, function(o2) {
        f(o1, o2);
      });
    });
  }
  function overlaps(t1, t2, f) {
    return action(t1, function(o1) {
      o1._checkOverlaps(t2, function(o2) {
        f(o1, o2);
      });
    });
  }
  function clicks(t, f) {
    return action(t, function(o) {
      if (o.isClicked()) {
        f(o);
      }
    });
  }
  function wait(t, f) {
    return new Promise(function(resolve) {
      game.timers.push({time:t, cb:function() {
        if (f) {
          f();
        }
        resolve();
      }});
    });
  }
  function loop(t, f) {
    var stopped = false;
    /** @const */ var newF = function() {
      if (stopped) {
        return;
      }
      f();
      wait(t, newF);
    };
    newF();
    return function() {
      return stopped = true;
    };
  }
  function keyDownPvt(k, f) {
    if (Array.isArray(k)) {
      /** @const */ var cancellers = k.map(function(key) {
        return keyDown(key, f);
      });
      return function() {
        return cancellers.forEach(function(cb) {
          return cb();
        });
      };
    } else {
      return game.on("input", function() {
        return app.keyDown(k) && f();
      });
    }
  }
  function keyDown(id, cb) {
    return keyDownPvt(id, cb.bind(null, state.components));
  }
  function keyPress(k, f) {
    if (Array.isArray(k)) {
      /** @const */ var cancellers = k.map(function(key) {
        return keyPress(key, f);
      });
      return function() {
        return cancellers.forEach(function(cb) {
          return cb();
        });
      };
    } else {
      return game.on("input", function() {
        return app.keyPressed(k) && f();
      });
    }
  }
  function keyPressRep(k, f) {
    if (Array.isArray(k)) {
      /** @const */ var cancellers = k.map(function(key) {
        return keyPressRep(key, f);
      });
      return function() {
        return cancellers.forEach(function(cb) {
          return cb();
        });
      };
    } else {
      return game.on("input", function() {
        return app.keyPressedRep(k) && f();
      });
    }
  }
  function keyRelease(k, f) {
    if (Array.isArray(k)) {
      /** @const */ var cancellers = k.map(function(key) {
        return keyRelease(key, f);
      });
      return function() {
        return cancellers.forEach(function(cb) {
          return cb();
        });
      };
    } else {
      return game.on("input", function() {
        return app.keyReleased(k) && f();
      });
    }
  }
  function mouseDown(f) {
    return game.on("input", function() {
      return app.mouseDown() && f(mousePos());
    });
  }
  function mouseClick(f) {
    return game.on("input", function() {
      return app.mouseClicked() && f(mousePos());
    });
  }
  function mouseRelease(f) {
    return game.on("input", function() {
      return app.mouseReleased() && f(mousePos());
    });
  }
  function mouseMove(f) {
    return game.on("input", function() {
      return app.mouseMoved() && f(mousePos(), app.mouseDeltaPos());
    });
  }
  function charInput(f) {
    return game.on("input", function() {
      return app.charInputted().forEach(function(ch) {
        return f(ch);
      });
    });
  }
  function touchStart(f) {
    return game.on("touchStart", f);
  }
  function touchMove(f) {
    return game.on("touchMove", f);
  }
  function touchEnd(f) {
    return game.on("touchEnd", f);
  }
  function get(t) {
    /** @const */ var objs = [].concat($jscomp.arrayFromIterable(game.objs.values())).sort(function(o1, o2) {
      /** @const */ var l1 = game.layers[o1.layer ? o1.layer : game.defLayer] && game.layers[o1.layer ? o1.layer : game.defLayer].order ? game.layers[o1.layer ? o1.layer : game.defLayer].order : 0;
      /** @const */ var l2 = game.layers[o2.layer ? o2.layer : game.defLayer] && game.layers[o2.layer ? o2.layer : game.defLayer].order ? game.layers[o2.layer ? o2.layer : game.defLayer].order : 0;
      return l1 - l2;
    });
    if (!t) {
      return objs;
    } else {
      return objs.filter(function(obj) {
        return obj.is(t);
      });
    }
  }
  function every(t, f) {
    if (typeof t === "function" && f === undefined) {
      return get().map(t);
    } else {
      if (typeof t === "string") {
        return get(t).map(f);
      }
    }
  }
  function revery(t, f) {
    if (typeof t === "function" && f === undefined) {
      return get().reverse().map(t);
    } else {
      if (typeof t === "string") {
        return get(t).reverse().map(f);
      }
    }
  }
  function destroy(obj) {
    if (!obj.exists()) {
      return;
    }
    obj.trigger("destroy");
    game.objs.delete(obj._id);
    delete obj._id;
  }
  function destroyAll(t) {
    every(t, function(obj) {
      destroy(obj);
    });
  }
  function gravity(g) {
    if (g !== undefined) {
      game.gravity = g;
    }
    return game.gravity;
  }
  function gameFrame(ignorePause) {
    game.trigger("nextFrame");
    delete game.events["nextFrame"];
    /** @const */ var doUpdate = ignorePause || !debug.paused;
    if (doUpdate) {
      game.timers.forEach(function(t, id) {
        t.time -= dt();
        if (t.time <= 0) {
          t.cb();
          game.timers.delete(id);
        }
      });
    }
    revery(function(obj) {
      if (!obj.paused && doUpdate) {
        obj.trigger("update");
      }
    });
    if (doUpdate) {
      game.actions.forEach(function(a) {
        return a();
      });
    }
    /** @const */ var size = vec2$$module$kaboom$v06(gfx.width(), gfx.height());
    /** @const */ var cam = game.cam;
    /** @const */ var shake = vec2FromAngle$$module$kaboom$v06(rand$$module$kaboom$v06(0, Math.PI * 2)).scale(cam.shake);
    cam.shake = lerp$$module$kaboom$v06(cam.shake, 0, 5 * dt());
    game.camMatrix = mat4$$module$kaboom$v06().translate(size.scale(0.5)).scale(cam.scale).rotateZ(cam.angle).translate(size.scale(-.5)).translate(cam.pos.scale(-1).add(size.scale(0.5)).add(shake));
    every(function(obj) {
      if (!obj.hidden) {
        gfx.pushTransform();
        if (isCamLayer(obj.layer)) {
          gfx.pushMatrix(game.camMatrix);
        }
        obj.trigger("draw");
        gfx.popTransform();
      }
    });
    game.renders.forEach(function(r) {
      return r();
    });
  }
  function drawInspect() {
    function drawInspectTxt(pos, txt, scale) {
      /** @const */ var pad = vec2$$module$kaboom$v06(4).scale(1 / scale);
      /** @const */ var ftxt = gfx.fmtText(txt, font, {size:12 / scale, pos:pos.add(vec2$$module$kaboom$v06(pad.x, pad.y))});
      gfx.drawRect(pos, ftxt.width + pad.x * 2, ftxt.height + pad.x * 2, {color:rgba$$module$kaboom$v06(0, 0, 0, 1)});
      gfx.drawFmtText(ftxt);
    }
    function drawObj(obj, f) {
      /** @const */ var isCam = isCamLayer(obj.layer);
      /** @const */ var scale = gfx.scale() * (isCam ? (game.cam.scale.x + game.cam.scale.y) / 2 : 1);
      if (isCam) {
        gfx.pushTransform();
        gfx.pushMatrix(game.camMatrix);
      }
      f(scale);
      if (isCam) {
        gfx.popTransform();
      }
    }
    var inspecting = null;
    /** @const */ var font = assets.defFont();
    /** @const */ var lcolor = rgba$$module$kaboom$v06(gconf.inspectColor ? gconf.inspectColor : [0, 1, 1, 1]);
    revery(function(obj) {
      if (!obj.area) {
        return;
      }
      if (obj.hidden) {
        return;
      }
      drawObj(obj, function(scale) {
        if (!inspecting) {
          if (obj.isHovered()) {
            inspecting = obj;
          }
        }
        /** @const */ var lwidth = (inspecting === obj ? 6 : 2) / scale;
        /** @const */ var a = obj._worldArea();
        /** @const */ var w = a.p2.x - a.p1.x;
        /** @const */ var h = a.p2.y - a.p1.y;
        gfx.drawRectStroke(a.p1, w, h, {width:lwidth, color:lcolor});
      });
    });
    if (inspecting) {
      drawObj(inspecting, function(scale) {
        /** @const */ var mpos = mousePos(inspecting.layer);
        /** @const */ var lines = [];
        /** @const */ var data = inspecting._inspect();
        var $jscomp$iter$19 = $jscomp.makeIterator(data.tags);
        for (var $jscomp$key$tag = $jscomp$iter$19.next(); !$jscomp$key$tag.done; $jscomp$key$tag = $jscomp$iter$19.next()) {
          /** @const */ var tag = $jscomp$key$tag.value;
          {
            lines.push('"' + tag + '"');
          }
        }
        var $jscomp$iter$20 = $jscomp.makeIterator(data.info);
        for (var $jscomp$key$info = $jscomp$iter$20.next(); !$jscomp$key$info.done; $jscomp$key$info = $jscomp$iter$20.next()) {
          /** @const */ var info = $jscomp$key$info.value;
          {
            for (var field in info) {
              lines.push(field + ": " + info[field]);
            }
          }
        }
        drawInspectTxt(mpos, lines.join("\n"), scale);
      });
    }
    drawInspectTxt(vec2$$module$kaboom$v06(0), app.fps() + "", gfx.scale());
  }
  function pos$jscomp$0(args$jscomp$0) {
    var $jscomp$restParams$jscomp$0 = [];
    for (var $jscomp$restIndex$jscomp$0 = 0; $jscomp$restIndex$jscomp$0 < arguments.length; ++$jscomp$restIndex$jscomp$0) {
      $jscomp$restParams$jscomp$0[$jscomp$restIndex$jscomp$0 - 0] = arguments[$jscomp$restIndex$jscomp$0];
    }
    {
      var args$41 = $jscomp$restParams$jscomp$0;
      return {id:"pos", pos:vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$41)), move:function(args) {
        var $jscomp$restParams = [];
        for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
          $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
        }
        {
          var args$42 = $jscomp$restParams;
          /** @const */ var p = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$42));
          /** @const */ var dx = p.x * dt();
          /** @const */ var dy = p.y * dt();
          this.pos.x += dx;
          this.pos.y += dy;
        }
      }, screenPos:function() {
        return game.camMatrix.multVec2(this.pos);
      }, inspect:function() {
        return {pos:"(" + ~~this.pos.x + ", " + ~~this.pos.y + ")"};
      }};
    }
  }
  function scale$jscomp$0(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$43 = $jscomp$restParams;
      if (args$43.length === 0) {
        return scale$jscomp$0(1);
      }
      return {id:"scale", scale:vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$43))};
    }
  }
  function rotate(r) {
    return {id:"rotate", angle:r ? r : 0};
  }
  function color(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$44 = $jscomp$restParams;
      return {id:"color", color:rgba$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$44))};
    }
  }
  function origin(o) {
    return {id:"origin", origin:o};
  }
  function layer$jscomp$0(l) {
    return {id:"layer", layer:l, inspect:function() {
      return {layer:this.layer ? this.layer : game.defLayer};
    }};
  }
  function isSameLayer(o1, o2) {
    return (o1.layer ? o1.layer : game.defLayer) === (o2.layer ? o2.layer : game.defLayer);
  }
  function area(p1$jscomp$0, p2$jscomp$0) {
    /** @const */ var colliding = {};
    /** @const */ var overlapping = {};
    return {id:"area", area:{p1:p1$jscomp$0, p2:p2$jscomp$0}, areaWidth:function() {
      /** @const */ var $jscomp$destructuring$var6 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var6.p1;
      /** @const */ var p2 = $jscomp$destructuring$var6.p2;
      return p2.x - p1.x;
    }, areaHeight:function() {
      /** @const */ var $jscomp$destructuring$var7 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var7.p1;
      /** @const */ var p2 = $jscomp$destructuring$var7.p2;
      return p2.y - p1.y;
    }, isClicked:function() {
      return app.mouseClicked() && this.isHovered();
    }, isHovered:function() {
      if (app.isTouch) {
        return app.mouseDown() && this.hasPt(mousePos(this.layer));
      } else {
        return this.hasPt(mousePos(this.layer));
      }
    }, isCollided:function(other) {
      if (!other.area) {
        return false;
      }
      if (!isSameLayer(this, other)) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return colRectRect$$module$kaboom$v06(a1, a2);
    }, isOverlapped:function(other) {
      if (!other.area) {
        return false;
      }
      if (!isSameLayer(this, other)) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return overlapRectRect$$module$kaboom$v06(a1, a2);
    }, clicks:function(f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        if ($jscomp$this.isClicked()) {
          f();
        }
      });
    }, hovers:function(f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        if ($jscomp$this.isHovered()) {
          f();
        }
      });
    }, collides:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        $jscomp$this._checkCollisions(tag, f);
      });
    }, overlaps:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        $jscomp$this._checkOverlaps(tag, f);
      });
    }, hasPt:function(pt) {
      /** @const */ var a = this._worldArea();
      return colRectPt$$module$kaboom$v06({p1:a.p1, p2:a.p2}, pt);
    }, pushOut:function(obj) {
      if (obj === this) {
        return null;
      }
      if (!obj.area) {
        return null;
      }
      if (!isSameLayer(this, obj)) {
        return null;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = obj._worldArea();
      if (!colRectRect$$module$kaboom$v06(a1, a2)) {
        return null;
      }
      /** @const */ var disLeft = a1.p2.x - a2.p1.x;
      /** @const */ var disRight = a2.p2.x - a1.p1.x;
      /** @const */ var disTop = a1.p2.y - a2.p1.y;
      /** @const */ var disBottom = a2.p2.y - a1.p1.y;
      /** @const */ var min = Math.min(disLeft, disRight, disTop, disBottom);
      switch(min) {
        case disLeft:
          this.pos.x -= disLeft;
          return {obj:obj, side:"right", dis:-disLeft};
        case disRight:
          this.pos.x += disRight;
          return {obj:obj, side:"left", dis:disRight};
        case disTop:
          this.pos.y -= disTop;
          return {obj:obj, side:"bottom", dis:-disTop};
        case disBottom:
          this.pos.y += disBottom;
          return {obj:obj, side:"top", dis:disBottom};
      }
      return null;
    }, pushOutAll:function() {
      /** @const */ var $jscomp$this = this;
      return every(function(other) {
        return other.solid ? $jscomp$this.pushOut(other) : null;
      }).filter(function(res) {
        return res != null;
      });
    }, _checkCollisions:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      every(tag, function(obj) {
        if ($jscomp$this === obj) {
          return;
        }
        if (colliding[obj._id]) {
          return;
        }
        if ($jscomp$this.isCollided(obj)) {
          f(obj);
          colliding[obj._id] = obj;
        }
      });
      for (var id in colliding) {
        /** @const */ var obj$jscomp$0 = colliding[id];
        if (!this.isCollided(obj$jscomp$0)) {
          delete colliding[id];
        }
      }
    }, _checkOverlaps:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      every(tag, function(obj) {
        if ($jscomp$this === obj) {
          return;
        }
        if (overlapping[obj._id]) {
          return;
        }
        if ($jscomp$this.isOverlapped(obj)) {
          f(obj);
          overlapping[obj._id] = obj;
        }
      });
      for (var id in overlapping) {
        /** @const */ var obj$jscomp$0 = overlapping[id];
        if (!this.isOverlapped(obj$jscomp$0)) {
          delete overlapping[id];
        }
      }
    }, _worldArea:function() {
      /** @const */ var a = this.area;
      /** @const */ var pos = this.pos || vec2$$module$kaboom$v06(0);
      /** @const */ var scale = this.scale || vec2$$module$kaboom$v06(1);
      /** @const */ var p1 = pos.add(a.p1.scale(scale));
      /** @const */ var p2 = pos.add(a.p2.scale(scale));
      /** @const */ var area = {p1:vec2$$module$kaboom$v06(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y)), p2:vec2$$module$kaboom$v06(Math.max(p1.x, p2.x), Math.max(p1.y, p2.y))};
      return area;
    }};
  }
  function getAreaFromSize(w, h, o) {
    /** @const */ var size = vec2$$module$kaboom$v06(w, h);
    /** @const */ var offset = originPt$$module$kaboom$v06(o || DEF_ORIGIN).scale(size).scale(-.5);
    return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
  }
  function sprite(id$jscomp$0, conf) {
    function calcTexScale(tex, q, w, h) {
      /** @const */ var scale = vec2$$module$kaboom$v06(1, 1);
      if (w && h) {
        scale.x = w / (tex.width * q.w);
        scale.y = h / (tex.height * q.h);
      } else {
        if (w) {
          scale.x = w / (tex.width * q.w);
          scale.y = scale.x;
        } else {
          if (h) {
            scale.y = h / (tex.height * q.h);
            scale.x = scale.y;
          }
        }
      }
      return scale;
    }
    conf = conf === undefined ? {} : conf;
    var spr = null;
    var curAnim = null;
    return {id:"sprite", width:0, height:0, animSpeed:conf.animSpeed || 0.1, frame:conf.frame || 0, quad:conf.quad || quad$$module$kaboom$v06(0, 0, 1, 1), add:function() {
      if (!conf.noArea) {
        this.use(area(vec2$$module$kaboom$v06(0), vec2$$module$kaboom$v06(0)));
      }
    }, load:function() {
      spr = assets.sprites[id$jscomp$0];
      if (!spr) {
        throw new Error('sprite not found: "' + id$jscomp$0 + '"');
      }
      var q = Object.assign({}, spr.frames[0]);
      if (conf.quad) {
        q = q.scale(conf.quad);
      }
      /** @const */ var scale = calcTexScale(spr.tex, q, conf.width, conf.height);
      this.width = spr.tex.width * q.w * scale.x;
      this.height = spr.tex.height * q.h * scale.y;
      if (!conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      drawSprite(spr, {pos:this.pos, scale:this.scale, rot:this.angle, color:this.color, frame:this.frame, origin:this.origin, quad:this.quad, prog:assets.shaders[this.shader], uniform:this.uniform, flipX:conf.flipX, flipY:conf.flipY, tiled:conf.tiled, width:conf.width, height:conf.height});
    }, update:function() {
      if (!curAnim) {
        return;
      }
      /** @const */ var anim = spr.anims[curAnim.name];
      curAnim.timer += dt();
      if (curAnim.timer >= this.animSpeed) {
        this.frame++;
        if (this.frame > anim.to) {
          if (curAnim.loop) {
            this.frame = anim.from;
          } else {
            this.frame--;
            this.stop();
          }
        }
        if (curAnim) {
          curAnim.timer -= this.animSpeed;
        }
      }
    }, play:function(name, loop) {
      /** @const */ var $jscomp$this = this;
      loop = loop === undefined ? true : loop;
      if (!spr) {
        ready(function() {
          $jscomp$this.play(name, loop);
        });
        return;
      }
      /** @const */ var anim = spr.anims[name];
      if (!anim) {
        throw new Error("anim not found: " + name);
      }
      if (curAnim) {
        this.stop();
      }
      curAnim = {name:name, loop:loop, timer:0};
      this.frame = anim.from;
      this.trigger("animPlay", name);
    }, stop:function() {
      if (!curAnim) {
        return;
      }
      /** @const */ var prevAnim = curAnim.name;
      curAnim = null;
      this.trigger("animEnd", prevAnim);
    }, changeSprite:function(id) {
      /** @const */ var $jscomp$this = this;
      if (!spr) {
        ready(function() {
          $jscomp$this.changeSprite(id);
        });
        return;
      }
      spr = assets.sprites[id];
      if (!spr) {
        throw new Error('sprite not found: "' + id + '"');
      }
      /** @const */ var q = Object.assign({}, spr.frames[0]);
      if (conf.quad) {
        q.x += conf.quad.x * q.w;
        q.y += conf.quad.y * q.h;
        q.w *= conf.quad.w;
        q.h *= conf.quad.h;
      }
      this.width = spr.tex.width * q.w;
      this.height = spr.tex.height * q.h;
      if (!conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
      curAnim = null;
      this.frame = 0;
    }, numFrames:function() {
      if (!spr) {
        return 0;
      }
      return spr.frames.length;
    }, curAnim:function() {
      return curAnim && curAnim.name;
    }, flipX:function(b) {
      conf.flipX = b;
    }, flipY:function(b) {
      conf.flipY = b;
    }, inspect:function() {
      /** @const */ var info = {};
      if (curAnim) {
        info.curAnim = '"' + curAnim.name + '"';
      }
      return info;
    }};
  }
  function text(t, size, conf) {
    conf = conf === undefined ? {} : conf;
    return {id:"text", text:t, textSize:size || 16, font:conf.font, width:0, height:0, add:function() {
      if (conf.area) {
        this.use(area(vec2$$module$kaboom$v06(0), vec2$$module$kaboom$v06(0)));
      }
    }, load:function() {
      if (conf.area) {
        /** @const */ var font = assets.fonts[this.font ? this.font : DEF_FONT$$module$kaboom$v06];
        /** @const */ var ftext = gfx.fmtText(this.text + "", font, {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, width:conf.width});
        this.width = ftext.width / (this.scale && this.scale.x || 1);
        this.height = ftext.height / (this.scale && this.scale.y || 1);
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var font = assets.fonts[this.font ? this.font : DEF_FONT$$module$kaboom$v06];
      /** @const */ var ftext = gfx.fmtText(this.text + "", font, {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, width:conf.width});
      this.width = ftext.width;
      this.height = ftext.height;
      gfx.drawFmtText(ftext);
    }};
  }
  function rect(w, h, conf) {
    conf = conf === undefined ? {} : conf;
    return {id:"rect", width:w, height:h, add:function() {
      if (!this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      gfx.drawRect(this.pos, this.width, this.height, {scale:this.scale, rot:this.angle, color:this.color, origin:this.origin, prog:assets.shaders[this.shader], uniform:this.uniform});
    }};
  }
  function solid() {
    return {id:"solid", solid:true};
  }
  function body(conf) {
    conf = conf === undefined ? {} : conf;
    var velY = 0;
    var curPlatform = null;
    var lastPlatformPos = null;
    /** @const */ var maxVel = conf.maxVel ? conf.maxVel : DEF_MAX_VEL;
    return {id:"body", jumpForce:conf.jumpForce ? conf.jumpForce : DEF_JUMP_FORCE, update:function() {
      this.move(0, velY);
      /** @const */ var targets = this.pushOutAll();
      var justOff = false;
      if (curPlatform) {
        if (!curPlatform.exists() || !this.isCollided(curPlatform)) {
          curPlatform = null;
          lastPlatformPos = null;
          justOff = true;
        } else {
          if (lastPlatformPos) {
            this.pos = this.pos.add(curPlatform.pos.sub(lastPlatformPos));
            lastPlatformPos = curPlatform.pos.clone();
          }
        }
      }
      if (!curPlatform) {
        velY = Math.min(velY + gravity() * dt(), maxVel);
        var $jscomp$iter$21 = $jscomp.makeIterator(targets);
        for (var $jscomp$key$target = $jscomp$iter$21.next(); !$jscomp$key$target.done; $jscomp$key$target = $jscomp$iter$21.next()) {
          /** @const */ var target = $jscomp$key$target.value;
          {
            if (target.side === "bottom" && velY > 0) {
              curPlatform = target.obj;
              velY = 0;
              lastPlatformPos = curPlatform.pos.clone();
              if (!justOff) {
                this.trigger("grounded", curPlatform);
              }
            } else {
              if (target.side === "top" && velY < 0) {
                velY = 0;
                this.trigger("headbutt", target.obj);
              }
            }
          }
        }
      }
    }, curPlatform:function() {
      return curPlatform;
    }, grounded:function() {
      return curPlatform !== null;
    }, falling:function() {
      return velY > 0;
    }, jump:function(force) {
      curPlatform = null;
      velY = -force || -this.jumpForce;
    }};
  }
  function shader(id, uniform) {
    uniform = uniform === undefined ? {} : uniform;
    /** @const */ var prog = assets.shaders[id];
    return {id:"shader", shader:id, uniform:uniform};
  }
  function gridder(level, p$jscomp$0) {
    return {id:"gridder", gridPos:p$jscomp$0.clone(), setGridPos:function(p) {
      this.gridPos = p.clone();
      this.pos = vec2$$module$kaboom$v06(level.offset().x + this.gridPos.x * level.gridWidth(), level.offset().y + this.gridPos.y * level.gridHeight());
    }, moveLeft:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$kaboom$v06(-1, 0)));
    }, moveRight:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$kaboom$v06(1, 0)));
    }, moveUp:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$kaboom$v06(0, -1)));
    }, moveDown:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$kaboom$v06(0, 1)));
    }};
  }
  function addLevel(map, conf) {
    /** @const */ var objs = [];
    /** @const */ var offset = vec2$$module$kaboom$v06(conf.pos || 0);
    var longRow = 0;
    /** @const */ var level = {offset:function() {
      return offset.clone();
    }, gridWidth:function() {
      return conf.width;
    }, gridHeight:function() {
      return conf.height;
    }, getPos:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$45 = $jscomp$restParams;
        /** @const */ var p = vec2$$module$kaboom$v06.apply(null, $jscomp.arrayFromIterable(args$45));
        return vec2$$module$kaboom$v06(offset.x + p.x * conf.width, offset.y + p.y * conf.height);
      }
    }, spawn:function(sym, p) {
      /** @const */ var comps = function() {
        if (Array.isArray(sym)) {
          return sym;
        } else {
          if (conf[sym]) {
            if (typeof conf[sym] === "function") {
              return conf[sym]();
            } else {
              if (Array.isArray(conf[sym])) {
                return [].concat($jscomp.arrayFromIterable(conf[sym]));
              }
            }
          } else {
            if (conf.any) {
              return conf.any(sym);
            }
          }
        }
      }();
      if (!comps) {
        return;
      }
      comps.push(pos$jscomp$0(offset.x + p.x * conf.width, offset.y + p.y * conf.height));
      /** @const */ var obj = add(comps);
      objs.push(obj);
      obj.use(gridder(this, p));
      return obj;
    }, width:function() {
      return longRow * conf.width;
    }, height:function() {
      return map.length * conf.height;
    }, destroy:function() {
      var $jscomp$iter$22 = $jscomp.makeIterator(objs);
      for (var $jscomp$key$obj = $jscomp$iter$22.next(); !$jscomp$key$obj.done; $jscomp$key$obj = $jscomp$iter$22.next()) {
        /** @const */ var obj = $jscomp$key$obj.value;
        {
          destroy(obj);
        }
      }
    }};
    map.forEach(function(row, i) {
      /** @const */ var syms = row.split("");
      longRow = Math.max(syms.length, longRow);
      syms.forEach(function(sym, j) {
        level.spawn(sym, vec2$$module$kaboom$v06(j, i));
      });
    });
    return level;
  }
  function commonProps(props) {
    return [pos$jscomp$0(props.pos ? props.pos : vec2$$module$kaboom$v06(0)), rotate(props.rot ? prop.rot : 0), scale$jscomp$0(vec2$$module$kaboom$v06(props.scale ? props.scale : 1)), color(props.color ? props.color : rgb$$module$kaboom$v06(1, 1, 1)), origin(props.origin)];
  }
  function addSprite(name, props) {
    props = props === undefined ? {} : props;
    return add([sprite(name, props), props.body && body(), props.solid && solid(), props.layer && layer$jscomp$0(props.layer), props.origin && origin(props.origin), props.data].concat($jscomp.arrayFromIterable(commonProps(props)), $jscomp.arrayFromIterable(props.tags || [])));
  }
  function addRect(w, h, props) {
    props = props === undefined ? {} : props;
    return add([rect(w, h, props), props.body && body(), props.solid && solid(), props.layer && layer$jscomp$0(props.layer), props.origin && origin(props.origin), props.data].concat($jscomp.arrayFromIterable(commonProps(props)), $jscomp.arrayFromIterable(props.tags || [])));
  }
  function addText(txt, size, props) {
    props = props === undefined ? {} : props;
    return add([text(txt, size, props), props.body && body(), props.solid && solid(), props.layer && layer$jscomp$0(props.layer), props.origin && origin(props.origin), props.data].concat($jscomp.arrayFromIterable(commonProps(props)), $jscomp.arrayFromIterable(props.tags || [])));
  }
  function ready(cb) {
    if (game.loaded) {
      cb();
    } else {
      game.on("load", cb);
    }
  }
  function scene(id, def) {
    game.scenes[id] = def;
  }
  function go(id, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$46 = $jscomp$restParams;
      game.on("nextFrame", function() {
        game.events = {};
        game.objEvents = {add:new IDList$$module$kaboom$v06, update:new IDList$$module$kaboom$v06, draw:new IDList$$module$kaboom$v06, destroy:new IDList$$module$kaboom$v06};
        game.actions = new IDList$$module$kaboom$v06;
        game.renders = new IDList$$module$kaboom$v06;
        game.objs = new IDList$$module$kaboom$v06;
        game.timers = new IDList$$module$kaboom$v06;
        game.cam = {pos:vec2$$module$kaboom$v06(gfx.width() / 2, gfx.height() / 2), scale:vec2$$module$kaboom$v06(1, 1), angle:0, shake:0};
        game.camMousePos = app.mousePos();
        game.camMatrix = mat4$$module$kaboom$v06();
        game.layers = {};
        game.defLayer = null;
        game.gravity = DEF_GRAVITY;
        game.scenes[id].apply(game.scenes, $jscomp.arrayFromIterable(args$46));
        if (gconf.debug) {
          regDebugInput();
        }
      });
    }
  }
  function getData(key, def) {
    try {
      return JSON.parse(window.localStorage[key]);
    } catch ($jscomp$unused$catch) {
      if (def) {
        setData(key, def);
        return def;
      } else {
        return null;
      }
    }
  }
  function setData(key, data) {
    window.localStorage[key] = JSON.stringify(data);
  }
  function regDebugInput() {
    keyPress("f1", function() {
      debug.inspect = !debug.inspect;
    });
    keyPress("f2", function() {
      debug.clearLog();
    });
    keyPress("f8", function() {
      debug.paused = !debug.paused;
      logger.info("" + (debug.paused ? "paused" : "unpaused"));
    });
    keyPress("f7", function() {
      debug.timeScale = clamp$$module$kaboom$v06(debug.timeScale - 0.2, 0, 2);
      logger.info("time scale: " + debug.timeScale.toFixed(1));
    });
    keyPress("f9", function() {
      debug.timeScale = clamp$$module$kaboom$v06(debug.timeScale + 0.2, 0, 2);
      logger.info("time scale: " + debug.timeScale.toFixed(1));
    });
    keyPress("f10", function() {
      debug.stepFrame();
      logger.info("stepped frame");
    });
  }
  gconf = gconf === undefined ? {width:640, height:480, scale:1, fullscreen:false, debug:false, crisp:false, canvas:null, connect:null, logMax:8, root:document.body} : gconf;
  var state = {components:{}};
  /** @const */ var reg_comp = function(id, comps) {
    if (comps) {
      var firstComp = comps[0];
      if (Array.isArray(firstComp)) {
        var calculatedComps = comps.map(function(comp) {
          if (!Array.isArray(comp)) {
            return comp;
          }
          var $jscomp$destructuring$var4 = $jscomp.makeIterator(comp);
          /** @const */ var key = $jscomp$destructuring$var4.next().value;
          /** @const */ var prop = $jscomp$destructuring$var4.next().value;
          /** @const */ var propB = $jscomp$destructuring$var4.next().value;
          switch(key) {
            case "sprite":
              return sprite(prop);
            case "pos":
              return pos$jscomp$0(prop[0], prop[1]);
            case "scale":
              return scale$jscomp$0(prop);
            case "text":
              return text(prop, propB);
            case "body":
              return body();
            case "solid":
              return solid();
            default:
              return {};
          }
        });
        state.components[id] = add(calculatedComps);
      } else {
        /** @const */ var comp = add(comps);
        state.components[id] = comp;
      }
    } else {
      var calculatedComps$35 = id.map(function(comp) {
        if (!Array.isArray(comp)) {
          return comp;
        } else {
          var $jscomp$destructuring$var5 = $jscomp.makeIterator(comp);
          /** @const */ var key = $jscomp$destructuring$var5.next().value;
          /** @const */ var prop$34 = $jscomp$destructuring$var5.next().value;
          /** @const */ var propB = $jscomp$destructuring$var5.next().value;
          switch(key) {
            case "sprite":
              return sprite(prop$34);
            case "pos":
              return pos$jscomp$0(prop$34[0], prop$34[1]);
            case "scale":
              return scale$jscomp$0(prop$34);
            case "text":
              return text(prop$34, propB);
            default:
              return {};
          }
        }
      });
      console.log("calculatedComps", calculatedComps$35);
      return add(calculatedComps$35);
    }
  };
  /** @const */ var app = appInit$$module$kaboom$v06({width:gconf.width, height:gconf.height, scale:gconf.scale, fullscreen:gconf.fullscreen, crisp:gconf.crisp, canvas:gconf.canvas, root:gconf.root, touchToMouse:gconf.touchToMouse ? gconf.touchToMouse : true});
  /** @const */ var gfx = gfxInit$$module$kaboom$v06(app.gl, {clearColor:gconf.clearColor ? rgba$$module$kaboom$v06(gconf.clearColor) : undefined, scale:gconf.scale, texFilter:gconf.texFilter});
  /** @const */ var audio = audioInit$$module$kaboom$v06();
  /** @const */ var assets = assetsInit$$module$kaboom$v06(gfx, audio, {errHandler:function(err) {
    logger.error(err);
  }});
  /** @const */ var logger = loggerInit$$module$kaboom$v06(gfx, assets, {max:gconf.logMax});
  /** @const */ var net = gconf.connect ? netInit$$module$kaboom$v06(gconf.connect) : null;
  /** @const */ var NetMsg = {AddObj:"ADD_OBJ", UpdateObj:"UPDATE_OBJ", DestroyObj:"DESTROY_OBJ", Disconnect:"DISCONNECT"};
  if (net) {
    recv(NetMsg.AddObj, function(id, data) {
      if (!game.visitors[id]) {
        game.visitors[id] = {};
      }
    });
    recv(NetMsg.DestroyObj, function(id, data) {
      if (!game.visitors[id]) {
        return;
      }
      /** @const */ var oid = game.visitors[id][data.id];
      if (oid != null) {
        destroy(game.objs.get(oid));
        delete game.visitors[id][data.id];
      }
    });
    recv(NetMsg.Disconnect, function(id, data) {
      if (game.visitors[id]) {
        var $jscomp$iter$14 = $jscomp.makeIterator(Object.values(game.visitors[id]));
        for (var $jscomp$key$oid = $jscomp$iter$14.next(); !$jscomp$key$oid.done; $jscomp$key$oid = $jscomp$iter$14.next()) {
          /** @const */ var oid = $jscomp$key$oid.value;
          {
            destroy(game.objs.get(oid));
          }
        }
        delete game.visitors[id];
      }
    });
  }
  /** @const */ var DEF_GRAVITY = 980;
  /** @const */ var DEF_ORIGIN = "topleft";
  /** @const */ var game = {loaded:false, events:{}, objEvents:{}, actions:new IDList$$module$kaboom$v06, renders:new IDList$$module$kaboom$v06, objs:new IDList$$module$kaboom$v06, timers:new IDList$$module$kaboom$v06, cam:{pos:vec2$$module$kaboom$v06(gfx.width() / 2, gfx.height() / 2), scale:vec2$$module$kaboom$v06(1, 1), angle:0, shake:0}, camMousePos:app.mousePos(), camMatrix:mat4$$module$kaboom$v06(), layers:{}, defLayer:null, gravity:DEF_GRAVITY, data:{}, travelers:[], visitors:{}, on:function(ev, 
  cb) {
    if (!this.events[ev]) {
      this.events[ev] = new IDList$$module$kaboom$v06;
    }
    return this.events[ev].pushd(cb);
  }, trigger:function(ev, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$36 = $jscomp$restParams;
      if (this.events[ev]) {
        this.events[ev].forEach(function(cb) {
          return cb.apply(null, $jscomp.arrayFromIterable(args$36));
        });
      }
    }
  }, scenes:{}};
  /** @const */ var COMP_EVENTS = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
  app.canvas.addEventListener("touchstart", function(e) {
    [].concat($jscomp.arrayFromIterable(e.changedTouches)).forEach(function(t) {
      game.trigger("touchStart", t.identifier, vec2$$module$kaboom$v06(t.clientX, t.clientY).scale(1 / app.scale));
    });
  });
  app.canvas.addEventListener("touchmove", function(e) {
    [].concat($jscomp.arrayFromIterable(e.changedTouches)).forEach(function(t) {
      game.trigger("touchMove", t.identifier, vec2$$module$kaboom$v06(t.clientX, t.clientY).scale(1 / app.scale));
    });
  });
  app.canvas.addEventListener("touchmove", function(e) {
    [].concat($jscomp.arrayFromIterable(e.changedTouches)).forEach(function(t) {
      game.trigger("touchEnd", t.identifier, vec2$$module$kaboom$v06(t.clientX, t.clientY).scale(1 / app.scale));
    });
  });
  /** @const */ var DEF_MAX_VEL = 960;
  /** @const */ var DEF_JUMP_FORCE = 480;
  /** @const */ var debug = {paused:false, inspect:false, timeScale:1, showLog:true, fps:app.fps, objCount:function() {
    return game.objs.size;
  }, stepFrame:function() {
    gameFrame(true);
  }, drawCalls:gfx.drawCalls, clearLog:logger.clear, log:logger.info, error:logger.error};
  /** @const */ var ctx = {loadRoot:assets.loadRoot, loadSprite:assets.loadSprite, loadSound:assets.loadSound, loadFont:assets.loadFont, loadShader:assets.loadShader, addLoader:assets.addLoader, width:gfx.width, height:gfx.height, dt:dt, time:app.time, screenshot:app.screenshot, focused:app.focused, focus:app.focus, cursor:app.cursor, ready:ready, isTouch:function() {
    return app.isTouch;
  }, layers:layers, camPos:camPos, camScale:camScale, camRot:camRot, camShake:camShake, camIgnore:camIgnore, gravity:gravity, add:add, readd:readd, destroy:destroy, destroyAll:destroyAll, get:get, every:every, revery:revery, sync:sync, send:send, recv:recv, pos:pos$jscomp$0, scale:scale$jscomp$0, rotate:rotate, color:color, origin:origin, layer:layer$jscomp$0, area:area, sprite:sprite, text:text, rect:rect, solid:solid, body:body, shader:shader, on:on, action:action, render:render, collides:collides, 
  overlaps:overlaps, clicks:clicks, keyDown:keyDown, keyPress:keyPress, keyPressRep:keyPressRep, keyRelease:keyRelease, mouseDown:mouseDown, mouseClick:mouseClick, mouseRelease:mouseRelease, mouseMove:mouseMove, charInput:charInput, touchStart:touchStart, touchMove:touchMove, touchEnd:touchEnd, mousePos:mousePos, mouseDeltaPos:app.mouseDeltaPos, keyIsDown:app.keyDown, keyIsPressed:app.keyPressed, keyIsPressedRep:app.keyPressedRep, keyIsReleased:app.keyReleased, mouseIsDown:app.mouseDown, mouseIsClicked:app.mouseClicked, 
  mouseIsReleased:app.mouseReleased, mouseIsMoved:app.mouseMoved, loop:loop, wait:wait, play:play, volume:audio.volume, burp:audio.burp, makeRng:makeRng$$module$kaboom$v06, rand:rand$$module$kaboom$v06, randSeed:randSeed$$module$kaboom$v06, vec2:vec2$$module$kaboom$v06, rgb:rgb$$module$kaboom$v06, rgba:rgba$$module$kaboom$v06, quad:quad$$module$kaboom$v06, choose:choose$$module$kaboom$v06, chance:chance$$module$kaboom$v06, lerp:lerp$$module$kaboom$v06, map:map$$module$kaboom$v06, mapc:mapc$$module$kaboom$v06, 
  wave:wave$$module$kaboom$v06, deg2rad:deg2rad$$module$kaboom$v06, rad2deg:rad2deg$$module$kaboom$v06, drawSprite:drawSprite, drawText:drawText, drawRect:gfx.drawRect, drawRectStroke:gfx.drawRectStroke, drawLine:gfx.drawLine, drawTri:gfx.drawTri, debug:debug, addLevel:addLevel, addSprite:addSprite, addRect:addRect, addText:addText, scene:scene, go:go, getData:getData, setData:setData, state:state, reg_comp:reg_comp, get_comp:get_comp};
  if (gconf.plugins) {
    var $jscomp$iter$23 = $jscomp.makeIterator(gconf.plugins);
    for (var $jscomp$key$src = $jscomp$iter$23.next(); !$jscomp$key$src.done; $jscomp$key$src = $jscomp$iter$23.next()) {
      /** @const */ var src = $jscomp$key$src.value;
      {
        /** @const */ var map$jscomp$0 = src(ctx);
        for (var k$jscomp$0 in map$jscomp$0) {
          ctx[k$jscomp$0] = map$jscomp$0[k$jscomp$0];
        }
      }
    }
  }
  if (gconf.global) {
    for (var k$47 in ctx) {
      window[k$47] = ctx[k$47];
    }
  }
  app.run(function() {
    gfx.frameStart();
    if (!game.loaded) {
      /** @const */ var progress = assets.loadProgress();
      if (progress === 1) {
        game.loaded = true;
        game.trigger("load");
        if (net) {
          net.connect().catch(logger.error);
        }
      } else {
        /** @const */ var w = gfx.width() / 2;
        /** @const */ var h = 24 / gfx.scale();
        /** @const */ var pos$48 = vec2$$module$kaboom$v06(gfx.width() / 2, gfx.height() / 2).sub(vec2$$module$kaboom$v06(w / 2, h / 2));
        gfx.drawRect(vec2$$module$kaboom$v06(0), gfx.width(), gfx.height(), {color:rgb$$module$kaboom$v06(0, 0, 0)});
        gfx.drawRectStroke(pos$48, w, h, {width:4 / gfx.scale()});
        gfx.drawRect(pos$48, w * progress, h);
      }
    } else {
      try {
        game.camMousePos = game.camMatrix.invert().multVec2(app.mousePos());
        game.trigger("input");
        gameFrame();
        if (debug.inspect) {
          drawInspect();
        }
      } catch (e) {
        logger.error(e.stack);
        app.quit();
      }
      if (debug.showLog) {
        logger.draw();
      }
    }
    gfx.frameEnd();
  });
  if (gconf.debug) {
    regDebugInput();
  }
  app.focus();
  return ctx;
};
var $jscompDefaultExport$$module$kaboom$v06 = kaboom$$module$kaboom$v06;
/** @const */ var module$kaboom$v06 = {};
/** @const */ module$kaboom$v06.default = $jscompDefaultExport$$module$kaboom$v06;

$CLJS.module$kaboom$v06=module$kaboom$v06;
//# sourceMappingURL=module$kaboom$v06.js.map
