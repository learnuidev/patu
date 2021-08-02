function deg2rad$$module$lib$math(deg) {
  return deg * Math.PI / 180;
}
function rad2deg$$module$lib$math(rad) {
  return rad * 180 / Math.PI;
}
function clamp$$module$lib$math(val, min, max) {
  if (min > max) {
    return clamp$$module$lib$math(val, max, min);
  }
  return Math.min(Math.max(val, min), max);
}
function lerp$$module$lib$math(a, b, t) {
  return a + (b - a) * t;
}
function map$$module$lib$math(v, l1, h1, l2, h2) {
  return l2 + (v - l1) / (h1 - l1) * (h2 - l2);
}
function mapc$$module$lib$math(v, l1, h1, l2, h2) {
  return clamp$$module$lib$math(map$$module$lib$math(v, l1, h1, l2, h2), l2, h2);
}
function vec2$$module$lib$math(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$28 = $jscomp$restParams;
    if (args$28.length === 0) {
      return vec2$$module$lib$math(0, 0);
    }
    if (args$28.length === 1) {
      if (typeof args$28[0] === "number") {
        return vec2$$module$lib$math(args$28[0], args$28[0]);
      } else {
        if (isVec2$$module$lib$math(args$28[0])) {
          return vec2$$module$lib$math(args$28[0].x, args$28[0].y);
        } else {
          if (Array.isArray(args$28[0]) && args$28[0].length === 2) {
            return vec2$$module$lib$math.apply(null, args$28[0]);
          }
        }
      }
    }
    return {x:args$28[0], y:args$28[1], clone:function() {
      return vec2$$module$lib$math(this.x, this.y);
    }, add:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$29 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$29));
        return vec2$$module$lib$math(this.x + p2.x, this.y + p2.y);
      }
    }, sub:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$30 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$30));
        return vec2$$module$lib$math(this.x - p2.x, this.y - p2.y);
      }
    }, scale:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$31 = $jscomp$restParams;
        /** @const */ var s = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$31));
        return vec2$$module$lib$math(this.x * s.x, this.y * s.y);
      }
    }, dist:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$32 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$32));
        return Math.sqrt((this.x - p2.x) * (this.x - p2.x) + (this.y - p2.y) * (this.y - p2.y));
      }
    }, len:function() {
      return this.dist(vec2$$module$lib$math(0, 0));
    }, unit:function() {
      return this.scale(1 / this.len());
    }, normal:function() {
      return vec2$$module$lib$math(this.y, -this.x);
    }, dot:function(p2) {
      return this.x * p2.x + this.y + p2.y;
    }, angle:function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$33 = $jscomp$restParams;
        /** @const */ var p2 = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$33));
        return Math.atan2(this.y - p2.y, this.x - p2.x);
      }
    }, lerp:function(p2, t) {
      return vec2$$module$lib$math(lerp$$module$lib$math(this.x, p2.x, t), lerp$$module$lib$math(this.y, p2.y, t));
    }, toFixed:function(n) {
      return vec2$$module$lib$math(this.x.toFixed(n), this.y.toFixed(n));
    }, eq:function(other) {
      return this.x === other.x && this.y === other.y;
    }, str:function() {
      return "(" + this.x + ", " + this.y + ")";
    }};
  }
}
function vec2FromAngle$$module$lib$math(a) {
  return vec2$$module$lib$math(Math.cos(a), Math.sin(a));
}
function vec3$$module$lib$math(x, y, z) {
  return {x:x, y:y, z:z, xy:function() {
    return vec2$$module$lib$math(this.x, this.y);
  }};
}
function isVec2$$module$lib$math(p) {
  return p !== undefined && p.x !== undefined && p.y !== undefined;
}
function isVec3$$module$lib$math(p) {
  return p !== undefined && p.x !== undefined && p.y !== undefined && p.z !== undefined;
}
function isColor$$module$lib$math(c) {
  return c !== undefined && c.r !== undefined && c.g !== undefined && c.b !== undefined && c.a !== undefined;
}
function isMat4$$module$lib$math(m) {
  if (m !== undefined && Array.isArray(m.m) && m.m.length === 16) {
    return m;
  }
}
function rgb$$module$lib$math(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$34 = $jscomp$restParams;
    if (args$34.length === 0) {
      return rgba$$module$lib$math();
    } else {
      if (args$34.length === 1) {
        if (isColor$$module$lib$math(args$34[0])) {
          return rgba$$module$lib$math(args$34[0]);
        } else {
          if (Array.isArray(args$34[0]) && args$34[0].length === 3) {
            return rgb$$module$lib$math.apply(null, args$34[0]);
          }
        }
      }
    }
    return rgba$$module$lib$math(args$34[0], args$34[1], args$34[2], 1);
  }
}
function rgba$$module$lib$math(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$35 = $jscomp$restParams;
    if (args$35.length === 0) {
      return rgba$$module$lib$math(1, 1, 1, 1);
    } else {
      if (args$35.length === 1) {
        if (isColor$$module$lib$math(args$35[0])) {
          return rgba$$module$lib$math(args$35[0].r, args$35[0].g, args$35[0].b, args$35[0].a);
        } else {
          if (Array.isArray(args$35[0]) && args$35[0].length === 4) {
            return rgba$$module$lib$math.apply(null, args$35[0]);
          }
        }
      }
    }
    return {r:args$35[0], g:args$35[1], b:args$35[2], a:args$35[3] || 1, clone:function() {
      return rgba$$module$lib$math(this.r, this.g, this.b, this.a);
    }, lighten:function(a) {
      return rgba$$module$lib$math(this.r + a, this.g + a, this.b + a, this.a);
    }, darken:function(a) {
      return this.lighten(-a);
    }, invert:function() {
      return rgba$$module$lib$math(1 - this.r, 1 - this.g, 1 - this.b, this.a);
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
function quad$$module$lib$math(x, y, w, h) {
  return {x:x, y:y, w:w, h:h, clone:function() {
    return quad$$module$lib$math(this.x, this.y, this.w, this.h);
  }, eq:function(other) {
    return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
  }};
}
function mat4$$module$lib$math(m) {
  return {m:m ? [].concat($jscomp.arrayFromIterable(m)) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], clone:function() {
    return mat4$$module$lib$math(this.m);
  }, mult:function(other) {
    /** @const */ var out = [];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        out[i * 4 + j] = this.m[0 * 4 + j] * other.m[i * 4 + 0] + this.m[1 * 4 + j] * other.m[i * 4 + 1] + this.m[2 * 4 + j] * other.m[i * 4 + 2] + this.m[3 * 4 + j] * other.m[i * 4 + 3];
      }
    }
    return mat4$$module$lib$math(out);
  }, multVec4:function(p) {
    return {x:p.x * this.m[0] + p.y * this.m[4] + p.z * this.m[8] + p.w * this.m[12], y:p.x * this.m[1] + p.y * this.m[5] + p.z * this.m[9] + p.w * this.m[13], z:p.x * this.m[2] + p.y * this.m[6] + p.z * this.m[10] + p.w * this.m[14], w:p.x * this.m[3] + p.y * this.m[7] + p.z * this.m[11] + p.w * this.m[15]};
  }, multVec3:function(p) {
    /** @const */ var p4 = this.multVec4({x:p.x, y:p.y, z:p.z, w:1.0});
    return vec3$$module$lib$math(p4.x, p4.y, p4.z);
  }, multVec2:function(p) {
    return vec2$$module$lib$math(p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
  }, translate:function(p) {
    return this.mult(mat4$$module$lib$math([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1]));
  }, scale:function(s) {
    return this.mult(mat4$$module$lib$math([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  }, rotateX:function(a) {
    return this.mult(mat4$$module$lib$math([1, 0, 0, 0, 0, Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1]));
  }, rotateY:function(a) {
    return this.mult(mat4$$module$lib$math([Math.cos(a), 0, -Math.sin(a), 0, 0, 1, 0, 0, Math.sin(a), 0, Math.cos(a), 0, 0, 0, 0, 1]));
  }, rotateZ:function(a) {
    return this.mult(mat4$$module$lib$math([Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
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
    return mat4$$module$lib$math(out);
  }};
}
function wave$$module$lib$math(lo, hi, t) {
  return lo + (Math.sin(t) + 1) / 2 * (hi - lo);
}
/** @const */ var A$$module$lib$math = 1103515245;
/** @const */ var C$$module$lib$math = 12345;
/** @const */ var M$$module$lib$math = 2147483648;
/** @const */ var defRNG$$module$lib$math = makeRng$$module$lib$math(Date.now());
function makeRng$$module$lib$math(seed) {
  return {seed:seed, gen:function(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$36 = $jscomp$restParams;
      if (args$36.length === 0) {
        this.seed = (A$$module$lib$math * this.seed + C$$module$lib$math) % M$$module$lib$math;
        return this.seed / M$$module$lib$math;
      } else {
        if (args$36.length === 1) {
          if (typeof args$36[0] === "number") {
            return this.gen(0, args$36[0]);
          } else {
            if (isVec2$$module$lib$math(args$36[0])) {
              return this.gen(vec2$$module$lib$math(0, 0), args$36[0]);
            } else {
              if (isColor$$module$lib$math(args$36[0])) {
                return this.gen(rgba$$module$lib$math(0, 0, 0, 0), args$36[0]);
              }
            }
          }
        } else {
          if (args$36.length === 2) {
            if (typeof args$36[0] === " \x26\x26 typeof args[1] \x3d\x3d\x3d") {
              return this.gen() * (args$36[1] - args$36[0]) + args$36[0];
            } else {
              if (isVec2$$module$lib$math(args$36[0]) && isVec2$$module$lib$math(args$36[1])) {
                return vec2$$module$lib$math(this.gen(args$36[0].x, args$36[1].x), this.gen(args$36[0].y, args$36[1].y));
              } else {
                if (isColor$$module$lib$math(args$36[0]) && isColor$$module$lib$math(args$36[1])) {
                  return rgba$$module$lib$math(this.gen(args$36[0].r, args$36[1].r), this.gen(args$36[0].g, args$36[1].g), this.gen(args$36[0].b, args$36[1].b), this.gen(args$36[0].a, args$36[1].a));
                }
              }
            }
          }
        }
      }
    }
  }};
}
function randSeed$$module$lib$math(seed) {
  if (seed != null) {
    defRNG$$module$lib$math.seed = seed;
  }
  return defRNG$$module$lib$math.seed;
}
function rand$$module$lib$math(args) {
  var $jscomp$restParams = [];
  for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
    $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
  }
  {
    var args$37 = $jscomp$restParams;
    return defRNG$$module$lib$math.gen.apply(defRNG$$module$lib$math, $jscomp.arrayFromIterable(args$37));
  }
}
function chance$$module$lib$math(p) {
  return rand$$module$lib$math() <= p;
}
function choose$$module$lib$math(list) {
  return list[Math.floor(rand$$module$lib$math(list.length))];
}
function colRectRect$$module$lib$math(r1, r2) {
  return r1.p2.x >= r2.p1.x && r1.p1.x <= r2.p2.x && r1.p2.y >= r2.p1.y && r1.p1.y <= r2.p2.y;
}
function overlapRectRect$$module$lib$math(r1, r2) {
  return r1.p2.x > r2.p1.x && r1.p1.x < r2.p2.x && r1.p2.y > r2.p1.y && r1.p1.y < r2.p2.y;
}
function colLineLine$$module$lib$math(l1, l2) {
  /** @const */ var a = ((l2.p2.x - l2.p1.x) * (l1.p1.y - l2.p1.y) - (l2.p2.y - l2.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  /** @const */ var b = ((l1.p2.x - l1.p1.x) * (l1.p1.y - l2.p1.y) - (l1.p2.y - l1.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  return a >= 0.0 && a <= 1.0 && b >= 0.0 && b <= 1.0;
}
function colRectLine$$module$lib$math(r, l) {
  if (colRectPt$$module$lib$math(r, l.p1) || colRectPt$$module$lib$math(r, l.p2)) {
    return true;
  }
  return colLineLine$$module$lib$math(l, makeLine$$module$lib$math(r.p1, vec2$$module$lib$math(r.p2.x, r.p1.y))) || colLineLine$$module$lib$math(l, makeLine$$module$lib$math(vec2$$module$lib$math(r.p2.x, r.p1.y), r.p2)) || colLineLine$$module$lib$math(l, makeLine$$module$lib$math(r.p2, vec2$$module$lib$math(r.p1.x, r.p2.y))) || colLineLine$$module$lib$math(l, makeLine$$module$lib$math(vec2$$module$lib$math(r.p1.x, r.p2.y), r.p1));
}
function colRectPt$$module$lib$math(r, pt) {
  return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
}
function makeLine$$module$lib$math(p1, p2) {
  return {p1:p1.clone(), p2:p2.clone()};
}
/** @const */ var module$lib$math = {};
/** @const */ module$lib$math.chance = chance$$module$lib$math;
/** @const */ module$lib$math.choose = choose$$module$lib$math;
/** @const */ module$lib$math.clamp = clamp$$module$lib$math;
/** @const */ module$lib$math.colLineLine = colLineLine$$module$lib$math;
/** @const */ module$lib$math.colRectLine = colRectLine$$module$lib$math;
/** @const */ module$lib$math.colRectPt = colRectPt$$module$lib$math;
/** @const */ module$lib$math.colRectRect = colRectRect$$module$lib$math;
/** @const */ module$lib$math.deg2rad = deg2rad$$module$lib$math;
/** @const */ module$lib$math.isColor = isColor$$module$lib$math;
/** @const */ module$lib$math.isMat4 = isMat4$$module$lib$math;
/** @const */ module$lib$math.isVec2 = isVec2$$module$lib$math;
/** @const */ module$lib$math.isVec3 = isVec3$$module$lib$math;
/** @const */ module$lib$math.lerp = lerp$$module$lib$math;
/** @const */ module$lib$math.makeRng = makeRng$$module$lib$math;
/** @const */ module$lib$math.map = map$$module$lib$math;
/** @const */ module$lib$math.mapc = mapc$$module$lib$math;
/** @const */ module$lib$math.mat4 = mat4$$module$lib$math;
/** @const */ module$lib$math.overlapRectRect = overlapRectRect$$module$lib$math;
/** @const */ module$lib$math.quad = quad$$module$lib$math;
/** @const */ module$lib$math.rad2deg = rad2deg$$module$lib$math;
/** @const */ module$lib$math.rand = rand$$module$lib$math;
/** @const */ module$lib$math.randSeed = randSeed$$module$lib$math;
/** @const */ module$lib$math.rgb = rgb$$module$lib$math;
/** @const */ module$lib$math.rgba = rgba$$module$lib$math;
/** @const */ module$lib$math.vec2 = vec2$$module$lib$math;
/** @const */ module$lib$math.vec2FromAngle = vec2FromAngle$$module$lib$math;
/** @const */ module$lib$math.vec3 = vec3$$module$lib$math;
/** @const */ module$lib$math.wave = wave$$module$lib$math;

$CLJS.module$lib$math=module$lib$math;
//# sourceMappingURL=module$lib$math.js.map
