function IDList() {
  this.map = new Map();
  this.lastID = 0;
}

IDList.prototype.push = function(v) {
  const id = this.lastID;
  this.map.set(id, v);
  this.lastID++;
  return id;
};

IDList.prototype.pushd = function(v) {
  const id = this.push(v);
  return () => this.delete(id);
};

IDList.prototype.set = function(id, value) {
  return this.map.set(id, value);
};
IDList.prototype.get = function(id) {
  return this.map.get(id);
};

IDList.prototype.forEach = function(cb) {
  return this.map.forEach(cb);
};
IDList.prototype.values = function() {
  return this.map.values();
};
function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

function rad2deg(rad) {
  return (rad * 180) / Math.PI;
}

function clamp(val, min, max) {
  if (min > max) {
    return clamp(val, max, min);
  }
  return Math.min(Math.max(val, min), max);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function map(v, l1, h1, l2, h2) {
  return l2 + ((v - l1) / (h1 - l1)) * (h2 - l2);
}

function mapc(v, l1, h1, l2, h2) {
  return clamp(map(v, l1, h1, l2, h2), l2, h2);
}

function vec2(...args) {
  if (args.length === 0) {
    return vec2(0, 0);
  }

  if (args.length === 1) {
    if (typeof args[0] === "number") {
      return vec2(args[0], args[0]);
    } else if (isVec2(args[0])) {
      return vec2(args[0].x, args[0].y);
    } else if (Array.isArray(args[0]) && args[0].length === 2) {
      return vec2.apply(null, args[0]);
    }
  }

  return {
    x: args[0],
    y: args[1],
    clone() {
      return vec2(this.x, this.y);
    },
    add(...args) {
      const p2 = vec2(...args);
      return vec2(this.x + p2.x, this.y + p2.y);
    },
    sub(...args) {
      const p2 = vec2(...args);
      return vec2(this.x - p2.x, this.y - p2.y);
    },
    scale(...args) {
      const s = vec2(...args);
      return vec2(this.x * s.x, this.y * s.y);
    },
    dist(...args) {
      const p2 = vec2(...args);
      return Math.sqrt(
        (this.x - p2.x) * (this.x - p2.x) + (this.y - p2.y) * (this.y - p2.y)
      );
    },
    len() {
      return this.dist(vec2(0, 0));
    },
    unit() {
      return this.scale(1 / this.len());
    },
    normal() {
      return vec2(this.y, -this.x);
    },
    dot(p2) {
      return this.x * p2.x + this.y + p2.y;
    },
    angle(...args) {
      const p2 = vec2(...args);
      return Math.atan2(this.y - p2.y, this.x - p2.x);
    },
    lerp(p2, t) {
      return vec2(lerp(this.x, p2.x, t), lerp(this.y, p2.y, t));
    },
    toFixed(n) {
      return vec2(this.x.toFixed(n), this.y.toFixed(n));
    },
    eq(other) {
      return this.x === other.x && this.y === other.y;
    },
    str() {
      return `(${this.x}, ${this.y})`;
    }
  };
}

function vec2FromAngle(a) {
  return vec2(Math.cos(a), Math.sin(a));
}

function vec3(x, y, z) {
  return {
    x: x,
    y: y,
    z: z,
    xy() {
      return vec2(this.x, this.y);
    }
  };
}

function isVec2(p) {
  return p !== undefined && p.x !== undefined && p.y !== undefined;
}

function isVec3(p) {
  return (
    p !== undefined &&
    p.x !== undefined &&
    p.y !== undefined &&
    p.z !== undefined
  );
}

function isColor(c) {
  return (
    c !== undefined &&
    c.r !== undefined &&
    c.g !== undefined &&
    c.b !== undefined &&
    c.a !== undefined
  );
}

function isMat4(m) {
  if (m !== undefined && Array.isArray(m.m) && m.m.length === 16) {
    return m;
  }
}

function rgb(...args) {
  if (args.length === 0) {
    return rgba();
  } else if (args.length === 1) {
    if (isColor(args[0])) {
      return rgba(args[0]);
    } else if (Array.isArray(args[0]) && args[0].length === 3) {
      return rgb.apply(null, args[0]);
    }
  }
  return rgba(args[0], args[1], args[2], 1);
}

function rgba(...args) {
  if (args.length === 0) {
    return rgba(1, 1, 1, 1);
  } else if (args.length === 1) {
    if (isColor(args[0])) {
      return rgba(args[0].r, args[0].g, args[0].b, args[0].a);
    } else if (Array.isArray(args[0]) && args[0].length === 4) {
      return rgba.apply(null, args[0]);
    }
  }

  return {
    r: args[0],
    g: args[1],
    b: args[2],
    a: args[3] ? args[3] : 1,
    clone() {
      return rgba(this.r, this.g, this.b, this.a);
    },
    lighten(a) {
      return rgba(this.r + a, this.g + a, this.b + a, this.a);
    },
    darken(a) {
      return this.lighten(-a);
    },
    invert() {
      return rgba(1 - this.r, 1 - this.g, 1 - this.b, this.a);
    },
    isDark(p = 0.5) {
      return this.r + this.g + this.b < 3 * p;
    },
    isLight(p = 0.5) {
      return this.r + this.g + this.b > 3 * p;
    },
    eq(other) {
      return (
        this.r === other.r &&
        this.g === other.g &&
        this.b === other.g &&
        this.a === other.a
      );
    }
  };
}

function quad(x, y, w, h) {
  return {
    x: x,
    y: y,
    w: w,
    h: h,
    scale(other) {
      return quad(
        this.x + this.w * other.x,
        this.y + this.h * other.y,
        this.w * other.w,
        this.h * other.h
      );
    },
    clone() {
      return quad(this.x, this.y, this.w, this.h);
    },
    eq(other) {
      return (
        this.x === other.x &&
        this.y === other.y &&
        this.w === other.w &&
        this.h === other.h
      );
    }
  };
}

function mat4(m) {
  return {
    m: m ? [...m] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],

    clone() {
      return mat4(this.m);
    },

    mult(other) {
      const out = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          out[i * 4 + j] =
            this.m[0 * 4 + j] * other.m[i * 4 + 0] +
            this.m[1 * 4 + j] * other.m[i * 4 + 1] +
            this.m[2 * 4 + j] * other.m[i * 4 + 2] +
            this.m[3 * 4 + j] * other.m[i * 4 + 3];
        }
      }

      return mat4(out);
    },

    multVec4(p) {
      return {
        x:
          p.x * this.m[0] +
          p.y * this.m[4] +
          p.z * this.m[8] +
          p.w * this.m[12],
        y:
          p.x * this.m[1] +
          p.y * this.m[5] +
          p.z * this.m[9] +
          p.w * this.m[13],
        z:
          p.x * this.m[2] +
          p.y * this.m[6] +
          p.z * this.m[10] +
          p.w * this.m[14],
        w:
          p.x * this.m[3] +
          p.y * this.m[7] +
          p.z * this.m[11] +
          p.w * this.m[15]
      };
    },

    multVec3(p) {
      const p4 = this.multVec4({
        x: p.x,
        y: p.y,
        z: p.z,
        w: 1.0
      });
      return vec3(p4.x, p4.y, p4.z);
    },

    multVec2(p) {
      return vec2(
        p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12],
        p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]
      );
    },

    translate(p) {
      return this.mult(
        mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1])
      );
    },

    scale(s) {
      return this.mult(
        mat4([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      );
    },

    rotateX(a) {
      return this.mult(
        mat4([
          1,
          0,
          0,
          0,
          0,
          Math.cos(a),
          -Math.sin(a),
          0,
          0,
          Math.sin(a),
          Math.cos(a),
          0,
          0,
          0,
          0,
          1
        ])
      );
    },

    rotateY(a) {
      return this.mult(
        mat4([
          Math.cos(a),
          0,
          -Math.sin(a),
          0,
          0,
          1,
          0,
          0,
          Math.sin(a),
          0,
          Math.cos(a),
          0,
          0,
          0,
          0,
          1
        ])
      );
    },

    rotateZ(a) {
      return this.mult(
        mat4([
          Math.cos(a),
          -Math.sin(a),
          0,
          0,
          Math.sin(a),
          Math.cos(a),
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ])
      );
    },

    invert() {
      const out = [];

      const f00 = this.m[10] * this.m[15] - this.m[14] * this.m[11];
      const f01 = this.m[9] * this.m[15] - this.m[13] * this.m[11];
      const f02 = this.m[9] * this.m[14] - this.m[13] * this.m[10];
      const f03 = this.m[8] * this.m[15] - this.m[12] * this.m[11];
      const f04 = this.m[8] * this.m[14] - this.m[12] * this.m[10];
      const f05 = this.m[8] * this.m[13] - this.m[12] * this.m[9];
      const f06 = this.m[6] * this.m[15] - this.m[14] * this.m[7];
      const f07 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
      const f08 = this.m[5] * this.m[14] - this.m[13] * this.m[6];
      const f09 = this.m[4] * this.m[15] - this.m[12] * this.m[7];
      const f10 = this.m[4] * this.m[14] - this.m[12] * this.m[6];
      const f11 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
      const f12 = this.m[4] * this.m[13] - this.m[12] * this.m[5];
      const f13 = this.m[6] * this.m[11] - this.m[10] * this.m[7];
      const f14 = this.m[5] * this.m[11] - this.m[9] * this.m[7];
      const f15 = this.m[5] * this.m[10] - this.m[9] * this.m[6];
      const f16 = this.m[4] * this.m[11] - this.m[8] * this.m[7];
      const f17 = this.m[4] * this.m[10] - this.m[8] * this.m[6];
      const f18 = this.m[4] * this.m[9] - this.m[8] * this.m[5];

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

      const det =
        this.m[0] * out[0] +
        this.m[1] * out[4] +
        this.m[2] * out[8] +
        this.m[3] * out[12];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          out[i * 4 + j] *= 1.0 / det;
        }
      }

      return mat4(out);
    }
  };
}

// easy sine wave
function wave(lo, hi, t) {
  return lo + ((Math.sin(t) + 1) / 2) * (hi - lo);
}

// basic ANSI C LCG
const A = 1103515245;
const C = 12345;
const M = 2147483648;
const defRNG = makeRng(Date.now());

function makeRng(seed) {
  return {
    seed: seed,
    gen(...args) {
      if (args.length === 0) {
        // generate 0 - 1
        this.seed = (A * this.seed + C) % M;
        return this.seed / M;
      } else if (args.length === 1) {
        if (typeof args[0] === "number") {
          return this.gen(0, args[0]);
        } else if (isVec2(args[0])) {
          return this.gen(vec2(0, 0), args[0]);
        } else if (isColor(args[0])) {
          return this.gen(rgba(0, 0, 0, 0), args[0]);
        }
      } else if (args.length === 2) {
        if (typeof args[0] === "number" && typeof args[1] === "number") {
          return this.gen() * (args[1] - args[0]) + args[0];
        } else if (isVec2(args[0]) && isVec2(args[1])) {
          return vec2(
            this.gen(args[0].x, args[1].x),
            this.gen(args[0].y, args[1].y)
          );
        } else if (isColor(args[0]) && isColor(args[1])) {
          return rgba(
            this.gen(args[0].r, args[1].r),
            this.gen(args[0].g, args[1].g),
            this.gen(args[0].b, args[1].b),
            this.gen(args[0].a, args[1].a)
          );
        }
      }
    }
  };
}

function randSeed(seed) {
  if (seed != null) {
    defRNG.seed = seed;
  }
  return defRNG.seed;
}

function rand(...args) {
  // @ts-ignore
  return defRNG.gen(...args);
}

function chance(p) {
  return rand() <= p;
}

function choose(list) {
  return list[Math.floor(rand(list.length))];
}

function colRectRect(r1, r2) {
  return (
    r1.p2.x >= r2.p1.x &&
    r1.p1.x <= r2.p2.x &&
    r1.p2.y >= r2.p1.y &&
    r1.p1.y <= r2.p2.y
  );
}

function overlapRectRect(r1, r2) {
  return (
    r1.p2.x > r2.p1.x &&
    r1.p1.x < r2.p2.x &&
    r1.p2.y > r2.p1.y &&
    r1.p1.y < r2.p2.y
  );
}

function colLineLine(l1, l2) {
  const a =
    ((l2.p2.x - l2.p1.x) * (l1.p1.y - l2.p1.y) -
      (l2.p2.y - l2.p1.y) * (l1.p1.x - l2.p1.x)) /
    ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) -
      (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  const b =
    ((l1.p2.x - l1.p1.x) * (l1.p1.y - l2.p1.y) -
      (l1.p2.y - l1.p1.y) * (l1.p1.x - l2.p1.x)) /
    ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) -
      (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
  return a >= 0.0 && a <= 1.0 && b >= 0.0 && b <= 1.0;
}

function colRectLine(r, l) {
  if (colRectPt(r, l.p1) || colRectPt(r, l.p2)) {
    return true;
  }
  return (
    colLineLine(l, makeLine(r.p1, vec2(r.p2.x, r.p1.y))) ||
    colLineLine(l, makeLine(vec2(r.p2.x, r.p1.y), r.p2)) ||
    colLineLine(l, makeLine(r.p2, vec2(r.p1.x, r.p2.y))) ||
    colLineLine(l, makeLine(vec2(r.p1.x, r.p2.y), r.p1))
  );
}

function colRectPt(r, pt) {
  return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
}

function makeLine(p1, p2) {
  return {
    p1: p1.clone(),
    p2: p2.clone()
  };
}

// ==== **MATH** ===

// ==== **UTILS** ===
function deepEq(o1, o2) {
  const t1 = typeof o1;
  const t2 = typeof o2;
  if (t1 !== t2) {
    return false;
  }
  if (t1 === "object" && t2 === "object") {
    const k1 = Object.keys(o1);
    const k2 = Object.keys(o2);
    if (k1.length !== k2.length) {
      return false;
    }
    for (const k of k1) {
      const v1 = o1[k];
      const v2 = o2[k];
      if (!(typeof v1 === "function" && typeof v2 === "function")) {
        if (!deepEq(v1, v2)) {
          return false;
        }
      }
    }
    return true;
  }
  return o1 === o2;
}
// ==== **UTILS** ===

// ==== **GFX** ===
const DEF_ORIGIN = "topleft";
const STRIDE = 9;
const QUEUE_COUNT = 65536;
const BG_GRID_SIZE = 64;

const VERT_TEMPLATE = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;

const FRAG_TEMPLATE = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;

const DEF_VERT = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;

const DEF_FRAG = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;

function originPt(orig) {
  switch (orig) {
    case "topleft":
      return vec2(-1, -1);
    case "top":
      return vec2(0, -1);
    case "topright":
      return vec2(1, -1);
    case "left":
      return vec2(-1, 0);
    case "center":
      return vec2(0, 0);
    case "right":
      return vec2(1, 0);
    case "botleft":
      return vec2(-1, 1);
    case "bot":
      return vec2(0, 1);
    case "botright":
      return vec2(1, 1);
    default:
      return orig;
  }
}

function gfxInit(gl, gconf) {
  const texFilter = (() => {
    switch (gconf.texFilter) {
      case "linear":
        return gl.LINEAR;
      case "nearest":
        return gl.NEAREST;
      default:
        return gl.NEAREST;
    }
  })();

  const gfx = (() => {
    const defProg = makeProgram(DEF_VERT, DEF_FRAG);
    const emptyTex = makeTex(
      new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
    );

    const c = gconf.clearColor ?? rgba(0, 0, 0, 1);

    gl.clearColor(c.r, c.g, c.b, c.a);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(
      gl.SRC_ALPHA,
      gl.ONE_MINUS_SRC_ALPHA,
      gl.ONE,
      gl.ONE_MINUS_SRC_ALPHA
    );

    const vbuf = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
    gl.bufferData(gl.ARRAY_BUFFER, QUEUE_COUNT * 4, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    const ibuf = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, QUEUE_COUNT * 2, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    const bgTex = makeTex(
      new ImageData(
        new Uint8ClampedArray([
          128,
          128,
          128,
          255,
          190,
          190,
          190,
          255,
          190,
          190,
          190,
          255,
          128,
          128,
          128,
          255
        ]),
        2,
        2
      )
    );

    return {
      drawCalls: 0,
      lastDrawCalls: 0,
      defProg: defProg,
      curProg: defProg,
      defTex: emptyTex,
      curTex: emptyTex,
      curUniform: {},
      vbuf: vbuf,
      ibuf: ibuf,
      vqueue: [],
      iqueue: [],
      transform: mat4(),
      transformStack: [],
      clearColor: c,
      bgTex: bgTex
    };
  })();

  frameStart();
  frameEnd();

  function powerOfTwo(n) {
    return (Math.log(n) / Math.log(2)) % 1 === 0;
  }

  function makeTex(data) {
    const id = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texFilter);

    // TODO
    const wrap = (() => {
      if (powerOfTwo(data.width) && powerOfTwo(data.height)) {
        return gl.REPEAT;
      } else {
        return gl.CLAMP_TO_EDGE;
      }
    })();

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return {
      width: data.width,
      height: data.height,
      bind() {
        gl.bindTexture(gl.TEXTURE_2D, id);
      },
      unbind() {
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
    };
  }

  function makeProgram(vertSrc = DEF_VERT, fragSrc = DEF_FRAG) {
    let msg;
    const vcode = VERT_TEMPLATE.replace("{{user}}", vertSrc ?? DEF_VERT);
    const fcode = FRAG_TEMPLATE.replace("{{user}}", fragSrc ?? DEF_FRAG);
    const vertShader = gl.createShader(gl.VERTEX_SHADER);
    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertShader, vcode);
    gl.shaderSource(fragShader, fcode);
    gl.compileShader(vertShader);
    gl.compileShader(fragShader);

    if ((msg = gl.getShaderInfoLog(vertShader))) {
      throw new Error(msg);
    }

    if ((msg = gl.getShaderInfoLog(fragShader))) {
      throw new Error(msg);
    }

    const id = gl.createProgram();

    gl.attachShader(id, vertShader);
    gl.attachShader(id, fragShader);

    gl.bindAttribLocation(id, 0, "a_pos");
    gl.bindAttribLocation(id, 1, "a_uv");
    gl.bindAttribLocation(id, 2, "a_color");

    gl.linkProgram(id);

    if ((msg = gl.getProgramInfoLog(id))) {
      // for some reason on safari it always has a "\n" msg
      if (msg !== "\n") {
        throw new Error(msg);
      }
    }

    return {
      bind() {
        gl.useProgram(id);
      },

      unbind() {
        gl.useProgram(null);
      },

      bindAttribs() {
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE * 4, 0);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE * 4, 12);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE * 4, 20);
        gl.enableVertexAttribArray(2);
      },

      send(uniform) {
        this.bind();
        // TODO: slow for vec2
        for (const name in uniform) {
          const val = uniform[name];
          const loc = gl.getUniformLocation(id, name);
          if (typeof val === "number") {
            gl.uniform1f(loc, val);
          } else if (isMat4(val)) {
            // @ts-ignore
            gl.uniformMatrix4fv(loc, false, new Float32Array(val.m));
          } else if (isColor(val)) {
            // @ts-ignore
            gl.uniform4f(loc, val.r, val.g, val.b, val.a);
          } else if (isVec3(val)) {
            // @ts-ignore
            gl.uniform3f(loc, val.x, val.y, val.z);
          } else if (isVec2(val)) {
            // @ts-ignore
            gl.uniform2f(loc, val.x, val.y);
          }
        }
        this.unbind();
      }
    };
  }

  function makeFont(tex, gw, gh, chars) {
    const cols = tex.width / gw;
    const rows = tex.height / gh;
    const qw = 1.0 / cols;
    const qh = 1.0 / rows;
    const map = {};
    const charMap = chars.split("").entries();

    for (const [i, ch] of charMap) {
      map[ch] = vec2((i % cols) * qw, Math.floor(i / cols) * qh);
    }

    return {
      tex: tex,
      map: map,
      qw: qw,
      qh: qh
    };
  }

  // TODO: expose
  function drawRaw(
    verts,
    indices,
    tex = gfx.defTex,
    prog = gfx.defProg,
    uniform = {}
  ) {
    tex = tex ?? gfx.defTex;
    prog = prog ?? gfx.defProg;

    // flush on texture / shader change and overflow
    if (
      tex !== gfx.curTex ||
      prog !== gfx.curProg ||
      !deepEq(gfx.curUniform, uniform) ||
      gfx.vqueue.length + verts.length * STRIDE > QUEUE_COUNT ||
      gfx.iqueue.length + indices.length > QUEUE_COUNT
    ) {
      flush();
    }

    gfx.curTex = tex;
    gfx.curProg = prog;
    gfx.curUniform = uniform;

    const nIndices = indices.map(i => {
      return i + gfx.vqueue.length / STRIDE;
    });

    const nVerts = verts
      .map(v => {
        const pt = toNDC(gfx.transform.multVec2(v.pos.xy()));
        return [
          pt.x,
          pt.y,
          v.pos.z,
          v.uv.x,
          v.uv.y,
          v.color.r,
          v.color.g,
          v.color.b,
          v.color.a
        ];
      })
      .flat();

    nIndices.forEach(i => gfx.iqueue.push(i));
    nVerts.forEach(v => gfx.vqueue.push(v));
  }

  function flush() {
    if (
      !gfx.curTex ||
      !gfx.curProg ||
      gfx.vqueue.length === 0 ||
      gfx.iqueue.length === 0
    ) {
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
      drawQuad({
        width: width(),
        height: height(),
        quad: quad(
          0,
          0,
          (width() * scale()) / BG_GRID_SIZE,
          (height() * scale()) / BG_GRID_SIZE
        ),
        tex: gfx.bgTex
      });
    }

    gfx.drawCalls = 0;
    gfx.transformStack = [];
    gfx.transform = mat4();
  }

  function frameEnd() {
    flush();
    gfx.lastDrawCalls = gfx.drawCalls;
  }

  function drawCalls() {
    return gfx.lastDrawCalls;
  }

  function toNDC(pt) {
    return vec2((pt.x / width()) * 2 - 1, (-pt.y / height()) * 2 + 1);
  }

  // TODO: don't use push as prefix for these
  function pushMatrix(m) {
    gfx.transform = m.clone();
  }

  function pushTranslate(p) {
    if (!p || (p.x === 0 && p.y === 0)) {
      return;
    }
    gfx.transform = gfx.transform.translate(p);
  }

  function pushScale(p) {
    if (!p || (p.x === 1 && p.y === 1)) {
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

  // TODO: clean
  // draw a textured quad
  function drawQuad(conf = {}) {
    const w = conf.width || 0;
    const h = conf.height || 0;
    const pos = conf.pos || vec2(0, 0);
    const origin = originPt(conf.origin || DEF_ORIGIN);
    const offset = origin.scale(vec2(w, h).scale(-0.5));
    const scale = vec2(conf.scale ?? 1);
    const rot = conf.rot || 0;
    const q = conf.quad || quad(0, 0, 1, 1);
    const z = 1 - (conf.z ?? 0);
    const color = conf.color || rgba(1, 1, 1, 1);

    pushTransform();
    pushTranslate(pos);
    pushRotateZ(rot);
    pushScale(scale);
    pushTranslate(offset);

    drawRaw(
      [
        {
          pos: vec3(-w / 2, h / 2, z),
          uv: vec2(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y : q.y + q.h),
          color: color
        },
        {
          pos: vec3(-w / 2, -h / 2, z),
          uv: vec2(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y + q.h : q.y),
          color: color
        },
        {
          pos: vec3(w / 2, -h / 2, z),
          uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y + q.h : q.y),
          color: color
        },
        {
          pos: vec3(w / 2, h / 2, z),
          uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y : q.y + q.h),
          color: color
        }
      ],
      [0, 1, 3, 1, 2, 3],
      conf.tex,
      conf.prog,
      conf.uniform
    );

    popTransform();
  }

  function drawTexture(tex, conf = {}) {
    const q = conf.quad ?? quad(0, 0, 1, 1);
    const w = tex.width * q.w;
    const h = tex.height * q.h;
    const scale = vec2(1);

    if (conf.tiled) {
      // TODO: draw fract
      const repX = Math.ceil((conf.width || w) / w);
      const repY = Math.ceil((conf.height || h) / h);
      const origin = originPt(conf.origin || DEF_ORIGIN)
        .add(vec2(1, 1))
        .scale(0.5);
      const offset = origin.scale(repX * w, repY * h);

      // TODO: rotation
      for (let i = 0; i < repX; i++) {
        for (let j = 0; j < repY; j++) {
          drawQuad({
            ...conf,
            pos: (conf.pos || vec2(0)).add(vec2(w * i, h * j)).sub(offset),
            scale: scale.scale(conf.scale || vec2(1)),
            tex: tex,
            quad: q,
            width: w,
            height: h,
            origin: "topleft"
          });
        }
      }
    } else {
      // TODO: should this ignore scale?
      if (conf.width && conf.height) {
        scale.x = conf.width / w;
        scale.y = conf.height / h;
      } else if (conf.width) {
        scale.x = conf.width / w;
        scale.y = scale.x;
      } else if (conf.height) {
        scale.y = conf.height / h;
        scale.x = scale.y;
      }

      drawQuad({
        ...conf,
        scale: scale.scale(conf.scale || vec2(1)),
        tex: tex,
        quad: q,
        width: w,
        height: h
      });
    }
  }

  function drawRect(pos, w, h, conf = {}) {
    drawQuad({
      ...conf,
      pos: pos,
      width: w,
      height: h
    });
  }

  function drawRectStroke(pos, w, h, conf = {}) {
    const offset = originPt(conf.origin || DEF_ORIGIN)
      .scale(vec2(w, h))
      .scale(0.5);
    const p1 = pos.add(vec2(-w / 2, -h / 2)).sub(offset);
    const p2 = pos.add(vec2(-w / 2, h / 2)).sub(offset);
    const p3 = pos.add(vec2(w / 2, h / 2)).sub(offset);
    const p4 = pos.add(vec2(w / 2, -h / 2)).sub(offset);

    drawLine(p1, p2, conf);
    drawLine(p2, p3, conf);
    drawLine(p3, p4, conf);
    drawLine(p4, p1, conf);
  }

  function drawLine(p1, p2, conf = {}) {
    const w = conf.width || 1;
    const h = p1.dist(p2);
    const rot = Math.PI / 2 - p1.angle(p2);

    drawQuad({
      ...conf,
      pos: p1.add(p2).scale(0.5),
      width: w,
      height: h,
      rot: rot,
      origin: "center"
    });
  }

  // TODO: not drawing
  function drawTri(p1, p2, p3, conf = {}) {
    const z = conf.z;
    const color = conf.color || rgb(1, 1, 1);
    drawRaw(
      [
        {
          pos: vec3(p1.x, p1.y, z),
          uv: vec2(0, 0),
          color: color
        },
        {
          pos: vec3(p2.x, p2.y, z),
          uv: vec2(0, 0),
          color: color
        },
        {
          pos: vec3(p3.x, p3.y, z),
          uv: vec2(0, 0),
          color: color
        }
      ],
      [0, 1, 2],
      gfx.defTex,
      conf.prog,
      conf.uniform
    );
  }

  // format text and return a list of chars with their calculated position
  function fmtText(text, font, conf = {}) {
    const chars = (text + "").split("");
    const gw = font.qw * font.tex.width;
    const gh = font.qh * font.tex.height;
    const size = conf.size || gh;
    const scale = vec2(size / gh).scale(vec2(conf.scale || 1));
    const cw = scale.x * gw;
    const ch = scale.y * gh;
    let curX = 0;
    let th = ch;
    let tw = 0;
    const flines = [];
    let curLine = [];
    let lastSpace = null;
    let cursor = 0;

    while (cursor < chars.length) {
      let char = chars[cursor];

      // check new line
      if (char === "\n") {
        // always new line on '\n'
        th += ch;
        curX = 0;
        lastSpace = null;
        flines.push(curLine);
        curLine = [];
      } else if (conf.width ? curX + cw > conf.width : false) {
        // new line on last word if width exceeds
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

      // push char
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

    // whole text offset
    const fchars = [];
    const pos = vec2(conf.pos || 0);
    const offset = originPt(conf.origin || DEF_ORIGIN).scale(0.5);
    // this math is complicated i forgot how it works instantly
    const ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
    const oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);

    flines.forEach((line, ln) => {
      // line offset
      const oxl = (tw - line.length * cw) * (offset.x + 0.5);

      line.forEach((char, cn) => {
        const qpos = font.map[char];
        const x = cn * cw;
        const y = ln * ch;
        if (qpos) {
          fchars.push({
            tex: font.tex,
            quad: quad(qpos.x, qpos.y, font.qw, font.qh),
            ch: char,
            pos: vec2(pos.x + x + ox + oxl, pos.y + y + oy),
            color: conf.color,
            origin: conf.origin,
            scale: scale,
            z: conf.z
          });
        }
      });
    });

    return {
      width: tw,
      height: th,
      chars: fchars
    };
  }

  function drawText(txt, font, conf = {}) {
    drawFmtText(fmtText(txt, font, conf));
  }

  // TODO: rotation
  function drawFmtText(ftext) {
    for (const ch of ftext.chars) {
      drawQuad({
        tex: ch.tex,
        width: ch.tex.width * ch.quad.w,
        height: ch.tex.height * ch.quad.h,
        pos: ch.pos,
        scale: ch.scale,
        color: ch.color,
        quad: ch.quad,
        // TODO: topleft
        origin: "center",
        z: ch.z
      });
    }
  }

  // get current canvas width
  function width() {
    return gl.drawingBufferWidth / scale();
  }

  // get current canvas height
  function height() {
    return gl.drawingBufferHeight / scale();
  }

  function scale() {
    return gconf.scale ?? 1;
  }

  function clearColor() {
    return gfx.clearColor.clone();
  }

  // TODO: type this
  return {
    width,
    height,
    scale,
    makeTex,
    makeProgram,
    makeFont,
    drawTexture,
    drawText,
    drawFmtText,
    drawRect,
    drawRectStroke,
    drawLine,
    drawTri,
    fmtText,
    frameStart,
    frameEnd,
    pushTransform,
    popTransform,
    pushMatrix,
    drawCalls,
    clearColor
  };
}
// === 3 **GFX** ===

// === 4 **APP** ===
function processBtnState(s) {
  if (s === "pressed" || s === "rpressed") {
    return "down";
  }
  if (s === "released") {
    return "up";
  }
  return s;
}

function appInit(gconf = {}) {
  const app = {
    canvas: gconf.canvas
      ? gconf.canvas
      : (() => {
          const canvas = document.createElement("canvas");
          (gconf.root ? gconf.root : document.body).appendChild(canvas);
          return canvas;
        })(),
    keyStates: {},
    charInputted: [],
    mouseMoved: false,
    mouseState: "up",
    mousePos: vec2(0, 0),
    mouseDeltaPos: vec2(0, 0),
    time: 0,
    realTime: 0,
    skipTime: false,
    dt: 0.0,
    scale: gconf.scale ? gconf.scale : 1,
    isTouch: false,
    loopID: null,
    stopped: false,
    fps: 0,
    fpsBuf: [],
    fpsTimer: 0
  };

  const keyMap = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
    " ": "space"
  };

  const preventDefaultKeys = [
    "space",
    "left",
    "right",
    "up",
    "down",
    "tab",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11"
  ];

  if (gconf.fullscreen) {
    app.canvas.width = window.innerWidth;
    app.canvas.height = window.innerHeight;
  } else {
    app.canvas.width = (gconf.width || 640) * app.scale;
    app.canvas.height = (gconf.height || 480) * app.scale;
  }

  const styles = ["outline: none", "cursor: default"];

  if (gconf.crisp) {
    styles.push("image-rendering: pixelated");
    styles.push("image-rendering: crisp-edges");
  }

  // @ts-ignore
  app.canvas.style = styles.join(";");
  app.canvas.setAttribute("tabindex", "0");

  const gl = app.canvas.getContext("webgl", {
    antialias: true,
    depth: true,
    stencil: true,
    alpha: true,
    preserveDrawingBuffer: true
  });

  app.isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  app.canvas.addEventListener("mousemove", e => {
    app.mousePos = vec2(e.offsetX, e.offsetY).scale(1 / app.scale);
    app.mouseDeltaPos = vec2(e.movementX, e.movementY).scale(1 / app.scale);
    app.mouseMoved = true;
  });

  app.canvas.addEventListener("mousedown", () => {
    app.mouseState = "pressed";
  });

  app.canvas.addEventListener("mouseup", () => {
    app.mouseState = "released";
  });

  app.canvas.addEventListener("keydown", e => {
    const k = keyMap[e.key] || e.key.toLowerCase();

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

  app.canvas.addEventListener("keyup", e => {
    const k = keyMap[e.key] || e.key.toLowerCase();
    app.keyStates[k] = "released";
  });

  app.canvas.addEventListener("touchstart", e => {
    if (!gconf.touchToMouse) return;
    // disable long tap context menu
    e.preventDefault();
    const t = e.touches[0];
    app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
    app.mouseState = "pressed";
  });

  app.canvas.addEventListener("touchmove", e => {
    if (!gconf.touchToMouse) return;
    // disable scrolling
    e.preventDefault();
    const t = e.touches[0];
    app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
    app.mouseMoved = true;
  });

  app.canvas.addEventListener("touchend", e => {
    if (!gconf.touchToMouse) return;
    app.mouseState = "released";
  });

  app.canvas.addEventListener("touchcancel", e => {
    if (!gconf.touchToMouse) return;
    app.mouseState = "released";
  });

  document.addEventListener("visibilitychange", () => {
    switch (document.visibilityState) {
      case "visible":
        // prevent a surge of dt() when switch back after the tab being hidden for a while
        app.skipTime = true;
        // TODO
        //  				audio.ctx().resume();
        break;
      case "hidden":
        //  				audio.ctx().suspend();
        break;
    }
  });

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
    return (
      app.keyStates[k] === "pressed" ||
      app.keyStates[k] === "rpressed" ||
      app.keyStates[k] === "down"
    );
  }

  function keyReleased(k) {
    return app.keyStates[k] === "released";
  }

  function charInputted() {
    return [...app.charInputted];
  }

  // get delta time between last frame
  function dt() {
    return app.dt;
  }

  // get current running time
  function time() {
    return app.time;
  }

  function fps() {
    return app.fps;
  }

  // get a base64 png image of canvas
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
    const frame = t => {
      const realTime = t / 1000;
      const realDt = realTime - app.realTime;

      app.realTime = realTime;

      if (!app.skipTime) {
        app.dt = realDt;
        app.time += app.dt;
        app.fpsBuf.push(1 / app.dt);
        app.fpsTimer += app.dt;
        if (app.fpsTimer >= 1) {
          app.fpsTimer = 0;
          app.fps = Math.round(
            app.fpsBuf.reduce((a, b) => a + b) / app.fpsBuf.length
          );
          app.fpsBuf = [];
        }
      }

      app.skipTime = false;

      f();

      for (const k in app.keyStates) {
        app.keyStates[k] = processBtnState(app.keyStates[k]);
      }

      app.mouseState = processBtnState(app.mouseState);
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

  return {
    gl,
    mousePos,
    mouseDeltaPos,
    keyDown,
    keyPressed,
    keyPressedRep,
    keyReleased,
    mouseDown,
    mouseClicked,
    mouseReleased,
    mouseMoved,
    charInputted,
    cursor,
    dt,
    time,
    fps,
    screenshot,
    run,
    quit,
    focused: () => document.activeElement === app.canvas,
    focus: () => app.canvas.focus(),
    canvas: app.canvas,
    isTouch: app.isTouch,
    scale: app.scale
  };
}
// === 4 **APP** ===

// === 5 **AUDIO** ===
const MIN_GAIN = 0;
const MAX_GAIN = 3;
const MIN_SPEED = 0;
const MAX_SPEED = 3;
const MIN_DETUNE = -1200;
const MAX_DETUNE = 1200;

// console.log("BURP BYTES", burpBytes);

// @ts-ignore

function audioInit() {
  const audio = (() => {
    // @ts-ignore
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = ctx.createGain();
    const masterNode = gainNode;

    masterNode.connect(ctx.destination);

    return {
      ctx,
      gainNode,
      masterNode
    };
  })();

  let burpBuf;

  // Disabled for now
  // audio.ctx.decodeAudioData(
  //   burpBytes.buffer.slice(0),
  //   (buf) => {
  //     burpBuf = buf;
  //   },
  //   () => {
  //     throw new Error("failed to make burp");
  //   }
  // );

  // get / set master volume
  function volume(v) {
    if (v !== undefined) {
      audio.gainNode.gain.value = clamp(v, MIN_GAIN, MAX_GAIN);
    }
    return audio.gainNode.gain.value;
  }

  // plays a sound, returns a control handle
  function play(
    sound,
    conf = {
      loop: false,
      volume: 1,
      speed: 1,
      detune: 0,
      seek: 0
    }
  ) {
    let stopped = false;
    let srcNode = audio.ctx.createBufferSource();

    srcNode.buffer = sound;
    srcNode.loop = conf.loop ? true : false;

    const gainNode = audio.ctx.createGain();

    srcNode.connect(gainNode);
    gainNode.connect(audio.masterNode);

    const pos = conf.seek ? conf.seek : 0;

    srcNode.start(0, pos);

    let startTime = audio.ctx.currentTime - pos;
    let stopTime = null;

    const handle = {
      stop() {
        if (stopped) {
          return;
        }
        this.pause();
        startTime = audio.ctx.currentTime;
      },

      play(seek) {
        if (!stopped) {
          return;
        }

        const oldNode = srcNode;

        srcNode = audio.ctx.createBufferSource();
        srcNode.buffer = oldNode.buffer;
        srcNode.loop = oldNode.loop;
        srcNode.playbackRate.value = oldNode.playbackRate.value;

        if (srcNode.detune) {
          srcNode.detune.value = oldNode.detune.value;
        }

        srcNode.connect(gainNode);

        const pos = seek ? seek : this.time();

        srcNode.start(0, pos);
        startTime = audio.ctx.currentTime - pos;
        stopped = false;
        stopTime = null;
      },

      pause() {
        if (stopped) {
          return;
        }
        srcNode.stop();
        stopped = true;
        stopTime = audio.ctx.currentTime;
      },

      paused() {
        return stopped;
      },

      stopped() {
        return stopped;
      },

      // TODO: affect time()
      speed(val) {
        if (val !== undefined) {
          srcNode.playbackRate.value = clamp(val, MIN_SPEED, MAX_SPEED);
        }
        return srcNode.playbackRate.value;
      },

      detune(val) {
        if (!srcNode.detune) {
          return 0;
        }
        if (val !== undefined) {
          srcNode.detune.value = clamp(val, MIN_DETUNE, MAX_DETUNE);
        }
        return srcNode.detune.value;
      },

      volume(val) {
        if (val !== undefined) {
          gainNode.gain.value = clamp(val, MIN_GAIN, MAX_GAIN);
        }
        return gainNode.gain.value;
      },

      loop() {
        srcNode.loop = true;
      },

      unloop() {
        srcNode.loop = false;
      },

      duration() {
        return sound.duration;
      },

      time() {
        if (stopped) {
          return stopTime - startTime;
        } else {
          return audio.ctx.currentTime - startTime;
        }
      }
    };

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

  return {
    ctx,
    volume,
    play,
    burp
  };
}
// === 5 **AUDIO** ===
// === 6 **ASSETS** ===
const unsciiSrc =
  "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/unscii_8x8.png";
const markSrc =
  "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/mark.png";

const ASCII_CHARS =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
const DEF_FONT = "unscii";

function loadImg(src) {
  const img = new Image();
  img.src = src;
  img.crossOrigin = "anonymous";
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(`failed to load ${src}`);
    };
  });
}

function isDataUrl(src) {
  return src.startsWith("data:");
}

function assetsInit(gfx, audio, gconf = {}) {
  const assets = {
    lastLoaderID: 0,
    loadRoot: "",
    loaders: {},
    sprites: {},
    sounds: {},
    fonts: {},
    shaders: {}
  };

  function addLoader(prom) {
    const id = assets.lastLoaderID;
    assets.loaders[id] = false;
    assets.lastLoaderID++;
    prom
      .catch(gconf.errHandler ? gconf.errHandler : console.error)
      .finally(() => (assets.loaders[id] = true));
  }

  // get current load progress
  function loadProgress() {
    let total = 0;
    let loaded = 0;

    for (const id in assets.loaders) {
      total += 1;
      if (assets.loaders[id]) {
        loaded += 1;
      }
    }

    return loaded / total;
  }

  // global load path prefix
  function loadRoot(path) {
    if (path !== undefined) {
      assets.loadRoot = path;
    }
    return assets.loadRoot;
  }

  // load a bitmap font to asset manager
  function loadFont(name, src, gw, gh, chars = ASCII_CHARS) {
    const loader = new Promise((resolve, reject) => {
      const path = isDataUrl(src) ? src : assets.loadRoot + src;
      loadImg(path)
        .then(img => {
          const font = gfx.makeFont(gfx.makeTex(img), gw, gh, chars);
          assets.fonts[name] = font;
          resolve(font);
        })
        .catch(reject);
    });

    addLoader(loader);

    return loader;
  }

  // TODO: use getSprite() functions for async settings
  // load a sprite to asset manager
  function loadSprite(
    name,
    src,
    conf = {
      sliceX: 1,
      sliceY: 1,
      anims: {}
    }
  ) {
    // synchronously load sprite from local pixel data
    function loadRawSprite(
      name,
      src,
      conf = {
        sliceX: 1,
        sliceY: 1,
        gridWidth: 0,
        gridHeight: 0,
        anims: {}
      }
    ) {
      const frames = [];
      const tex = gfx.makeTex(src);
      const sliceX = conf.sliceX || tex.width / (conf.gridWidth || tex.width);
      const sliceY =
        conf.sliceY || tex.height / (conf.gridHeight || tex.height);
      const qw = 1 / sliceX;
      const qh = 1 / sliceY;

      for (let j = 0; j < sliceY; j++) {
        for (let i = 0; i < sliceX; i++) {
          frames.push(quad(i * qw, j * qh, qw, qh));
        }
      }

      const sprite = {
        tex: tex,
        frames: frames,
        anims: conf.anims || {}
      };

      assets.sprites[name] = sprite;

      return sprite;
    }

    const loader = new Promise((resolve, reject) => {
      if (!src) {
        return reject(`expected sprite src for "${name}"`);
      }

      // from url
      if (typeof src === "string") {
        const path = isDataUrl(src) ? src : assets.loadRoot + src;
        loadImg(path)
          .then(img => {
            resolve(loadRawSprite(name, img, conf));
          })
          .catch(reject);
      } else {
        resolve(loadRawSprite(name, src, conf));
      }
    });

    addLoader(loader);

    return loader;
  }

  function loadShader(name, vert, frag, isUrl = false) {
    function loadRawShader(name, vert, frag) {
      const shader = gfx.makeProgram(vert, frag);
      assets.shaders[name] = shader;
      return shader;
    }

    const loader = new Promise((resolve, reject) => {
      if (!vert && !frag) {
        return reject("no shader");
      }

      function resolveUrl(url) {
        return url
          ? fetch(assets.loadRoot + url)
              .then(r => {
                if (r.ok) {
                  return r.text();
                } else {
                  throw new Error(`failed to load ${url}`);
                }
              })
              .catch(reject)
          : new Promise(r => r(null));
      }

      if (isUrl) {
        Promise.all([resolveUrl(vert), resolveUrl(frag)])
          .then(([vcode, fcode]) => {
            resolve(loadRawShader(name, vcode, fcode));
          })
          .catch(reject);
      } else {
        try {
          resolve(loadRawShader(name, vert, frag));
        } catch (err) {
          reject(err);
        }
      }
    });

    addLoader(loader);

    return loader;
  }

  // TODO: accept dataurl
  // load a sound to asset manager
  function loadSound(name, src) {
    const url = assets.loadRoot + src;

    const loader = new Promise((resolve, reject) => {
      if (!src) {
        return reject(`expected sound src for "${name}"`);
      }

      // from url
      if (typeof src === "string") {
        fetch(url)
          .then(res => {
            if (res.ok) {
              return res.arrayBuffer();
            } else {
              throw new Error(`failed to load ${url}`);
            }
          })
          .then(data => {
            return new Promise((resolve2, reject2) => {
              audio.ctx().decodeAudioData(data, resolve2, reject2);
            });
          })
          .then(buf => {
            assets.sounds[name] = buf;
            resolve(buf);
          })
          .catch(reject);
      }
    });

    addLoader(loader);

    return loader;
  }

  function defFont() {
    return assets.fonts[DEF_FONT];
  }

  // default font unscii http://pelulamu.net/unscii/
  loadFont(DEF_FONT, unsciiSrc, 8, 8);

  loadSprite("mark", markSrc);

  return {
    loadRoot,
    loadSprite,
    loadSound,
    loadFont,
    loadShader,
    loadProgress,
    addLoader,
    defFont,
    sprites: assets.sprites,
    fonts: assets.fonts,
    sounds: assets.sounds,
    shaders: assets.shaders
  };
}

// === 6 **ASSETS** ===

// === 7 **LOGGER** ===
const LOG_SIZE = 16;

function loggerInit(
  gfx,
  assets,
  conf = {
    max: 8
  }
) {
  let logs = [];
  const max = conf.max ? conf.max : 8;

  // TODO: draw rects first to reduce draw calls
  // TODO: make log and progress bar fixed size independent of global scale
  function draw() {
    if (logs.length > max) {
      logs = logs.slice(0, max);
    }

    const pos = vec2(0, gfx.height());

    logs.forEach((log, i) => {
      const txtAlpha = map(i, 0, max, 1, 0.5);
      const bgAlpha = map(i, 0, max, 0.8, 0.2);

      const col = (() => {
        // eslint-disable-next-line default-case
        switch (log.type) {
          case "info":
            return rgba(1, 1, 1, txtAlpha);
          case "error":
            return rgba(1, 0, 0.5, txtAlpha);
        }
      })();

      const ftext = gfx.fmtText(log.msg, assets.defFont(), {
        pos: pos,
        origin: "botleft",
        color: col,
        size: LOG_SIZE / gfx.scale(),
        width: gfx.width()
      });

      gfx.drawRect(pos, ftext.width, ftext.height, {
        origin: "botleft",
        color: rgba(0, 0, 0, bgAlpha)
      });

      gfx.drawFmtText(ftext);
      pos.y -= ftext.height;
    });
  }

  function error(msg) {
    console.error(msg);
    logs.unshift({
      type: "error",
      msg: msg
    });
  }

  function info(msg) {
    logs.unshift({
      type: "info",
      msg: msg
    });
  }

  function clear() {
    logs = [];
  }

  return {
    info,
    error,
    draw,
    clear
  };
}
// === 6 **LOGGER** ===
// === 7 **NET** ===
function netInit(url) {
  const handlers = {};
  const sendQueue = [];

  let socket = null;

  function connected() {
    return socket !== null && socket.readyState === 1;
  }

  function connect() {
    const ws = new WebSocket(url);

    return (
      new Promise() <
      WebSocket >
      ((resolve, reject) => {
        ws.onopen = () => {
          resolve(ws);
          socket = ws;
          for (const msg of sendQueue) {
            ws.send(msg);
          }
        };

        ws.onerror = () => {
          reject(`failed to connect to ${url}`);
        };

        ws.onmessage = e => {
          const msg = JSON.parse(e.data);
          if (handlers[msg.type]) {
            for (const handler of handlers[msg.type]) {
              handler(msg.id, msg.data);
            }
          }
        };
      })
    );
  }

  function recv(type, handler) {
    if (!handlers[type]) {
      handlers[type] = [];
    }
    handlers[type].push(handler);
  }

  function send(type, data) {
    const msg = JSON.stringify({
      type: type,
      data: data
    });
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

  return {
    connect,
    close,
    connected,
    recv,
    send
  };
}
// === 7 **NET** ===

// === 8 **KABOOM** ===
// class IDList extends Map {
//   constructor(...args) {
//     super(...args);
//     this.lastID = 0;
//   }
//   push(v) {
//     const id = this.lastID;
//     this.set(id, v);
//     this.lastID++;
//     return id;
//   }
//   pushd(v) {
//     const id = this.push(v);
//     return () => this.delete(id);
//   }
// }

const kaboom = (
  gconf = {
    width: 640,
    height: 480,
    scale: 1,
    fullscreen: false,
    debug: false,
    crisp: false,
    canvas: null,
    connect: null,
    logMax: 8,
    root: document.body
  }
) => {
  // CUSTOM CODE ===
  let state = {
    components: {}
  };
  const reg_comp = (id, comps) => {
    let firstComp = comps[0];
    if (Array.isArray(firstComp)) {
      let calculatedComps = comps.map(comp => {
        if (!Array.isArray(comp)) {
          return comp;
        }
        const [key, prop, propB] = comp;
        switch (key) {
          case "sprite":
            return sprite(prop);
          case "pos":
            return pos(prop[0], prop[1]);
          case "scale":
            return scale(prop);
          case "text":
            return text(prop, propB);
          default:
            return {};
        }
      });

      state.components[id] = add(calculatedComps);
    } else {
      const comp = add(comps);
      state.components[id] = comp;
    }
  };

  // window.reg_comp = reg_comp;
  const get_comp = (id, defaultVal) => state.components[id] || defaultVal;

  // CUSTOM CODE ===

  const app = appInit({
    width: gconf.width,
    height: gconf.height,
    scale: gconf.scale,
    fullscreen: gconf.fullscreen,
    crisp: gconf.crisp,
    canvas: gconf.canvas,
    root: gconf.root,
    touchToMouse: gconf.touchToMouse ? gconf.touchToMouse : true
  });

  const gfx = gfxInit(app.gl, {
    clearColor: gconf.clearColor ? rgba(gconf.clearColor) : undefined,
    scale: gconf.scale,
    texFilter: gconf.texFilter
  });

  const audio = audioInit();
  const assets = assetsInit(gfx, audio, {
    errHandler: err => {
      logger.error(err);
    }
  });

  const logger = loggerInit(gfx, assets, {
    max: gconf.logMax
  });

  const net = gconf.connect ? netInit(gconf.connect) : null;

  const NetMsg = {
    AddObj: "ADD_OBJ",
    UpdateObj: "UPDATE_OBJ",
    DestroyObj: "DESTROY_OBJ",
    Disconnect: "DISCONNECT"
  };

  function sync(obj) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    game.travelers.push(obj._id);
    send(NetMsg.AddObj, obj._data());
  }

  if (net) {
    recv(NetMsg.AddObj, (id, data) => {
      if (!game.visitors[id]) {
        game.visitors[id] = {};
      }
      // TODO: reconstruct
      //  		const obj = add(data);
      //  		scene.visitors[id][data.id] = obj._id;
    });

    recv(NetMsg.DestroyObj, (id, data) => {
      if (!game.visitors[id]) {
        return;
      }
      const oid = game.visitors[id][data.id];
      if (oid != null) {
        destroy(game.objs.get(oid));
        delete game.visitors[id][data.id];
      }
    });

    recv(NetMsg.Disconnect, (id, data) => {
      if (game.visitors[id]) {
        for (const oid of Object.values(game.visitors[id])) {
          destroy(game.objs.get(oid));
        }
        delete game.visitors[id];
      }
    });
  }

  function recv(ty, handler) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    net.recv(ty, (data, id) => {
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

  // TODO: clean
  function play(id, conf = {}) {
    const pb = audio.play(
      new AudioBuffer({
        length: 1,
        numberOfChannels: 1,
        sampleRate: 44100
      })
    );
    ready(() => {
      const sound = assets.sounds[id];
      if (!sound) {
        throw new Error(`sound not found: "${id}"`);
      }
      const pb2 = audio.play(sound, conf);
      for (const k in pb2) {
        pb[k] = pb2[k];
      }
    });
    return pb;
  }

  function isCamLayer(layer) {
    return !(
      game.layers[layer ? layer : game.defLayer] &&
      game.layers[layer ? layer : game.defLayer].noCam
    );
  }

  // check input state last frame
  function mousePos(layer) {
    return isCamLayer(layer) ? game.camMousePos : app.mousePos();
  }

  function drawSprite(id, conf = {}) {
    const spr = (() => {
      if (typeof id === "string") {
        return assets.sprites[id];
      } else {
        return id;
      }
    })();
    if (!spr) {
      throw new Error(`sprite not found: "${id}"`);
    }
    const q = spr.frames[conf.frame ? conf.frame : 0];
    gfx.drawTexture(spr.tex, {
      ...conf,
      quad: q.scale(conf.quad || quad(0, 0, 1, 1))
    });
  }

  // TODO: DrawTextComf
  function drawText(txt, conf = {}) {
    // @ts-ignore
    const fid = conf.font ? conf.font : DEF_FONT;
    const font = assets.fonts[fid];
    if (!font) {
      throw new Error(`font not found: ${fid}`);
    }
    gfx.drawText(txt, font, conf);
  }

  const DEF_GRAVITY = 980;
  const DEF_ORIGIN = "topleft";

  const game = {
    loaded: false,

    // event callbacks
    events: {},
    objEvents: {},

    actions: new IDList(),
    renders: new IDList(),

    // in game pool
    objs: new IDList(),
    timers: new IDList(),

    // cam
    cam: {
      pos: vec2(gfx.width() / 2, gfx.height() / 2),
      scale: vec2(1, 1),
      angle: 0,
      shake: 0
    },

    camMousePos: app.mousePos(),
    camMatrix: mat4(),

    // misc
    layers: {},
    defLayer: null,
    gravity: DEF_GRAVITY,
    data: {},

    // net
    travelers: [],
    visitors: {},

    on(ev, cb) {
      if (!this.events[ev]) {
        this.events[ev] = new IDList();
      }
      return this.events[ev].pushd(cb);
    },

    trigger(ev, ...args) {
      if (this.events[ev]) {
        this.events[ev].forEach(cb => cb(...args));
      }
    },

    scenes: {}
  };

  function layers(list, def) {
    list.forEach((name, idx) => {
      game.layers[name] = {
        alpha: 1,
        order: idx + 1,
        noCam: false
      };
    });

    if (def) {
      game.defLayer = def;
    }
  }

  function camPos(...pos) {
    if (pos.length > 0) {
      game.cam.pos = vec2(...pos);
    }
    return game.cam.pos.clone();
  }

  function camScale(...scale) {
    if (scale.length > 0) {
      game.cam.scale = vec2(...scale);
    }
    return game.cam.scale.clone();
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
    layers.forEach(name => {
      if (game.layers[name]) {
        game.layers[name].noCam = true;
      }
    });
  }

  const COMP_EVENTS = new Set([
    "add",
    "load",
    "update",
    "draw",
    "destroy",
    "inspect"
  ]);

  // TODO: make tags also comp?
  function add(comps) {
    const compStates = {};
    const customState = {};
    const events = {};
    const tags = [];

    const obj = {
      _id: null,
      hidden: false,
      paused: false,

      // use a comp
      use(comp) {
        if (comp === undefined) {
          return;
        }

        const ty = typeof comp;

        // tags
        if (ty === "string") {
          tags.push(comp);
          return;
        }

        if (ty !== "object") {
          throw new Error(`invalid comp type: ${ty}`);
        }

        let stateContainer = customState;

        if (comp.id) {
          compStates[comp.id] = {};
          stateContainer = compStates[comp.id];
        }

        for (const k in comp) {
          if (k === "id" || k === "require") {
            continue;
          }

          // event / custom method
          if (typeof comp[k] === "function") {
            const func = comp[k].bind(this, state.components);
            if (COMP_EVENTS.has(k)) {
              this.on(k, func);
              continue;
            } else {
              stateContainer[k] = func;
            }
          } else {
            stateContainer[k] = comp[k];
          }

          // TODO: slow?
          // fields
          if (!this[k]) {
            Object.defineProperty(this, k, {
              get() {
                if (comp.id) {
                  return compStates[comp.id][k];
                } else {
                  return customState[k];
                }
              },
              set(val) {
                if (comp.id) {
                  compStates[comp.id][k] = val;
                } else {
                  customState[k] = val;
                }
              }
            });
          }
        }
      },

      c(id) {
        return compStates[id];
      },

      // if obj is current in scene
      exists() {
        return this._id !== undefined;
      },

      // if obj has certain tag
      is(tag) {
        if (tag === "*") {
          return true;
        }
        if (Array.isArray(tag)) {
          for (const t of tag) {
            if (!tags.includes(t)) {
              return false;
            }
          }
          return true;
        }
        return tags.includes(tag);
      },

      on(ev, cb) {
        if (!events[ev]) {
          events[ev] = new IDList();
        }
        return events[ev].pushd(cb);
      },

      action(cb) {
        return this.on("update", cb);
      },

      trigger(ev, ...args) {
        if (events[ev]) {
          events[ev].forEach(cb => cb.call(this, ...args));
        }

        const gEvents = game.objEvents[ev];

        if (gEvents) {
          gEvents.forEach(e => {
            if (this.is(e.tag)) {
              e.cb(this, ...args);
            }
          });
        }
      },

      rmTag(t) {
        const idx = tags.indexOf(t);
        if (idx > -1) {
          tags.splice(idx, 1);
        }
      },

      _inspect() {
        const info = [];

        if (events["inspect"]) {
          for (const inspect of events["inspect"].values()) {
            info.push(inspect());
          }
        }

        return {
          tags: tags,
          info: info
        };
      },

      destroy() {
        destroy(this);
      }
    };

    for (const comp of comps) {
      obj.use(comp);
    }

    obj._id = game.objs.push(obj);
    obj.trigger("add");
    ready(() => obj.trigger("load"));

    // check comp dependencies
    for (const id in compStates) {
      const comp = compStates[id];
      const deps = comp.require || [];
      for (const dep of deps) {
        if (!obj.c(dep)) {
          throw new Error(`comp '${id}' requires comp '${dep}'`);
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
    const id = game.objs.push(obj);
    obj._id = id;

    return obj;
  }

  // add an event to a tag
  function on(event, tag, cb) {
    if (!game.objEvents[event]) {
      game.objEvents[event] = new IDList();
    }
    return game.objEvents[event].pushd({
      tag: tag,
      cb: cb
    });
  }

  // add update event to a tag or global update
  function action(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      return game.actions.pushd(tag);
    } else if (typeof tag === "string") {
      return on("update", tag, cb);
    }
  }

  // add draw event to a tag or global draw
  function render(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      return game.renders.pushd(tag);
    } else if (typeof tag === "string") {
      return on("update", tag, cb);
    }
  }

  // add an event that runs with objs with t1 collides with objs with t2
  function collides(t1, t2, f) {
    return action(t1, o1 => {
      o1._checkCollisions(t2, o2 => {
        f(o1, o2);
      });
    });
  }

  // add an event that runs with objs with t1 overlaps with objs with t2
  function overlaps(t1, t2, f) {
    return action(t1, o1 => {
      o1._checkOverlaps(t2, o2 => {
        f(o1, o2);
      });
    });
  }

  // add an event that runs when objs with tag t is clicked
  function clicks(t, f) {
    return action(t, o => {
      if (o.isClicked()) {
        f(o);
      }
    });
  }

  // add an event that'd be run after t
  function wait(t, f) {
    return new Promise(resolve => {
      game.timers.push({
        time: t,
        cb: () => {
          if (f) {
            f();
          }
          resolve();
        }
      });
    });
  }

  // add an event that's run every t seconds
  function loop(t, f) {
    let stopped = false;

    const newF = () => {
      if (stopped) {
        return;
      }
      f();
      wait(t, newF);
    };

    newF();

    return () => (stopped = true);
  }

  // input callbacks
  function keyDown(k, f) {
    if (Array.isArray(k)) {
      const cancellers = k.map(key => keyDown(key, f));
      return () => cancellers.forEach(cb => cb());
    } else {
      return game.on("input", () => app.keyDown(k) && f());
    }
  }

  function keyPress(k, f) {
    if (Array.isArray(k)) {
      const cancellers = k.map(key => keyPress(key, f));
      return () => cancellers.forEach(cb => cb());
    } else {
      return game.on("input", () => app.keyPressed(k) && f());
    }
  }

  function keyPressRep(k, f) {
    if (Array.isArray(k)) {
      const cancellers = k.map(key => keyPressRep(key, f));
      return () => cancellers.forEach(cb => cb());
    } else {
      return game.on("input", () => app.keyPressedRep(k) && f());
    }
  }

  function keyRelease(k, f) {
    if (Array.isArray(k)) {
      const cancellers = k.map(key => keyRelease(key, f));
      return () => cancellers.forEach(cb => cb());
    } else {
      return game.on("input", () => app.keyReleased(k) && f());
    }
  }

  // TODO: these mousePos() are from last frame
  function mouseDown(f) {
    return game.on("input", () => app.mouseDown() && f(mousePos()));
  }

  function mouseClick(f) {
    return game.on("input", () => app.mouseClicked() && f(mousePos()));
  }

  function mouseRelease(f) {
    return game.on("input", () => app.mouseReleased() && f(mousePos()));
  }

  // TODO: pass delta pos
  function mouseMove(f) {
    return game.on(
      "input",
      () => app.mouseMoved() && f(mousePos(), app.mouseDeltaPos())
    );
  }

  function charInput(f) {
    return game.on("input", () => app.charInputted().forEach(ch => f(ch)));
  }

  // TODO
  app.canvas.addEventListener("touchstart", e => {
    [...e.changedTouches].forEach(t => {
      game.trigger(
        "touchStart",
        t.identifier,
        vec2(t.clientX, t.clientY).scale(1 / app.scale)
      );
    });
  });

  app.canvas.addEventListener("touchmove", e => {
    [...e.changedTouches].forEach(t => {
      game.trigger(
        "touchMove",
        t.identifier,
        vec2(t.clientX, t.clientY).scale(1 / app.scale)
      );
    });
  });

  app.canvas.addEventListener("touchmove", e => {
    [...e.changedTouches].forEach(t => {
      game.trigger(
        "touchEnd",
        t.identifier,
        vec2(t.clientX, t.clientY).scale(1 / app.scale)
      );
    });
  });

  function touchStart(f) {
    return game.on("touchStart", f);
  }

  function touchMove(f) {
    return game.on("touchMove", f);
  }

  function touchEnd(f) {
    return game.on("touchEnd", f);
  }

  // TODO: cache sorted list
  // get all objects with tag
  function get(t) {
    const objs = [...game.objs.values()].sort((o1, o2) => {
      const l1 =
        game.layers[o1.layer ? o1.layer : game.defLayer] &&
        game.layers[o1.layer ? o1.layer : game.defLayer].order
          ? game.layers[o1.layer ? o1.layer : game.defLayer].order
          : 0;
      const l2 =
        game.layers[o2.layer ? o2.layer : game.defLayer] &&
        game.layers[o2.layer ? o2.layer : game.defLayer].order
          ? game.layers[o2.layer ? o2.layer : game.defLayer].order
          : 0;
      return l1 - l2;
    });

    if (!t) {
      return objs;
    } else {
      return objs.filter(obj => obj.is(t));
    }
  }

  // apply a function to all objects currently in game with tag t
  function every(t, f) {
    if (typeof t === "function" && f === undefined) {
      return get().map(t);
    } else if (typeof t === "string") {
      return get(t).map(f);
    }
  }

  // every but in reverse order
  function revery(t, f) {
    if (typeof t === "function" && f === undefined) {
      return get()
        .reverse()
        .map(t);
    } else if (typeof t === "string") {
      return get(t)
        .reverse()
        .map(f);
    }
  }

  // destroy an obj
  function destroy(obj) {
    if (!obj.exists()) {
      return;
    }

    obj.trigger("destroy");
    game.objs.delete(obj._id);
    delete obj._id;
  }

  // destroy all obj with the tag
  function destroyAll(t) {
    every(t, obj => {
      destroy(obj);
    });
  }

  // get / set gravity
  function gravity(g) {
    if (g !== undefined) {
      game.gravity = g;
    }
    return game.gravity;
  }

  // TODO: cleaner pause logic
  function gameFrame(ignorePause) {
    game.trigger("nextFrame");
    delete game.events["nextFrame"];

    const doUpdate = ignorePause || !debug.paused;

    if (doUpdate) {
      // update timers
      game.timers.forEach((t, id) => {
        t.time -= dt();
        if (t.time <= 0) {
          t.cb();
          game.timers.delete(id);
        }
      });
    }

    // update every obj
    revery(obj => {
      if (!obj.paused && doUpdate) {
        obj.trigger("update");
      }
    });

    if (doUpdate) {
      game.actions.forEach(a => a());
    }

    // calculate camera matrix
    const size = vec2(gfx.width(), gfx.height());
    const cam = game.cam;
    const shake = vec2FromAngle(rand(0, Math.PI * 2)).scale(cam.shake);

    cam.shake = lerp(cam.shake, 0, 5 * dt());
    game.camMatrix = mat4()
      .translate(size.scale(0.5))
      .scale(cam.scale)
      .rotateZ(cam.angle)
      .translate(size.scale(-0.5))
      .translate(
        cam.pos
          .scale(-1)
          .add(size.scale(0.5))
          .add(shake)
      );

    // draw every obj
    every(obj => {
      if (!obj.hidden) {
        gfx.pushTransform();

        if (isCamLayer(obj.layer)) {
          gfx.pushMatrix(game.camMatrix);
        }

        obj.trigger("draw");
        gfx.popTransform();
      }
    });

    game.renders.forEach(r => r());
  }

  function drawInspect() {
    let inspecting = null;
    const font = assets.defFont();
    const lcolor = rgba(gconf.inspectColor ? gconf.inspectColor : [0, 1, 1, 1]);

    function drawInspectTxt(pos, txt, scale) {
      const pad = vec2(4).scale(1 / scale);

      const ftxt = gfx.fmtText(txt, font, {
        size: 12 / scale,
        pos: pos.add(vec2(pad.x, pad.y))
      });

      gfx.drawRect(pos, ftxt.width + pad.x * 2, ftxt.height + pad.x * 2, {
        color: rgba(0, 0, 0, 1)
      });

      gfx.drawFmtText(ftxt);
    }

    function drawObj(obj, f) {
      const isCam = isCamLayer(obj.layer);
      const scale =
        gfx.scale() * (isCam ? (game.cam.scale.x + game.cam.scale.y) / 2 : 1);
      if (isCam) {
        gfx.pushTransform();
        gfx.pushMatrix(game.camMatrix);
      }
      f(scale);
      if (isCam) {
        gfx.popTransform();
      }
    }

    revery(obj => {
      if (!obj.area) {
        return;
      }

      if (obj.hidden) {
        return;
      }

      drawObj(obj, scale => {
        if (!inspecting) {
          if (obj.isHovered()) {
            inspecting = obj;
          }
        }

        const lwidth = (inspecting === obj ? 6 : 2) / scale;
        const a = obj._worldArea();
        const w = a.p2.x - a.p1.x;
        const h = a.p2.y - a.p1.y;

        gfx.drawRectStroke(a.p1, w, h, {
          width: lwidth,
          color: lcolor
        });
      });
    });

    if (inspecting) {
      drawObj(inspecting, scale => {
        const mpos = mousePos(inspecting.layer);
        const lines = [];
        const data = inspecting._inspect();

        for (const tag of data.tags) {
          lines.push(`"${tag}"`);
        }

        for (const info of data.info) {
          for (const field in info) {
            lines.push(`${field}: ${info[field]}`);
          }
        }

        drawInspectTxt(mpos, lines.join("\n"), scale);
      });
    }

    drawInspectTxt(vec2(0), app.fps() + "", gfx.scale());
  }

  // TODO: have velocity here?
  function pos(...args) {
    return {
      id: "pos",
      pos: vec2(...args),

      // TODO: check physics here?
      move(...args) {
        const p = vec2(...args);
        const dx = p.x * dt();
        const dy = p.y * dt();

        this.pos.x += dx;
        this.pos.y += dy;
      },

      screenPos() {
        return game.camMatrix.multVec2(this.pos);
      },

      inspect() {
        return {
          pos: `(${~~this.pos.x}, ${~~this.pos.y})`
        };
      }
    };
  }

  // TODO: allow single number assignment
  function scale(...args) {
    if (args.length === 0) {
      return scale(1);
    }
    return {
      id: "scale",
      scale: vec2(...args)
    };
  }

  function rotate(r) {
    return {
      id: "rotate",
      angle: r ? r : 0
    };
  }

  function color(...args) {
    return {
      id: "color",
      color: rgba(...args)
    };
  }

  function origin(o) {
    return {
      id: "origin",
      origin: o
    };
  }

  function layer(l) {
    return {
      id: "layer",
      layer: l,
      inspect() {
        return {
          layer: this.layer ? this.layer : game.defLayer
        };
      }
    };
  }

  function isSameLayer(o1, o2) {
    return (
      (o1.layer ? o1.layer : game.defLayer) ===
      (o2.layer ? o2.layer : game.defLayer)
    );
  }

  // TODO: active flag
  // TODO: tell which size collides
  // TODO: dynamic update when size change
  function area(p1, p2) {
    const colliding = {};
    const overlapping = {};

    return {
      id: "area",

      area: {
        p1: p1,
        p2: p2
      },

      areaWidth() {
        const { p1, p2 } = this._worldArea();
        return p2.x - p1.x;
      },

      areaHeight() {
        const { p1, p2 } = this._worldArea();
        return p2.y - p1.y;
      },

      isClicked() {
        return app.mouseClicked() && this.isHovered();
      },

      isHovered() {
        if (app.isTouch) {
          return app.mouseDown() && this.hasPt(mousePos(this.layer));
        } else {
          return this.hasPt(mousePos(this.layer));
        }
      },

      isCollided(other) {
        if (!other.area) {
          return false;
        }

        if (!isSameLayer(this, other)) {
          return false;
        }

        const a1 = this._worldArea();
        const a2 = other._worldArea();

        return colRectRect(a1, a2);
      },

      isOverlapped(other) {
        if (!other.area) {
          return false;
        }

        if (!isSameLayer(this, other)) {
          return false;
        }

        const a1 = this._worldArea();
        const a2 = other._worldArea();

        return overlapRectRect(a1, a2);
      },

      clicks(f) {
        this.action(() => {
          if (this.isClicked()) {
            f();
          }
        });
      },

      hovers(f) {
        this.action(() => {
          if (this.isHovered()) {
            f();
          }
        });
      },

      collides(tag, f) {
        this.action(() => {
          this._checkCollisions(tag, f);
        });
      },

      overlaps(tag, f) {
        this.action(() => {
          this._checkOverlaps(tag, f);
        });
      },

      hasPt(pt) {
        const a = this._worldArea();
        return colRectPt(
          {
            p1: a.p1,
            p2: a.p2
          },
          pt
        );
      },

      // TODO: make overlap events still trigger
      // push an obj out of another if they're overlapped
      pushOut(obj) {
        if (obj === this) {
          return null;
        }

        if (!obj.area) {
          return null;
        }

        if (!isSameLayer(this, obj)) {
          return null;
        }

        const a1 = this._worldArea();
        const a2 = obj._worldArea();

        if (!colRectRect(a1, a2)) {
          return null;
        }

        const disLeft = a1.p2.x - a2.p1.x;
        const disRight = a2.p2.x - a1.p1.x;
        const disTop = a1.p2.y - a2.p1.y;
        const disBottom = a2.p2.y - a1.p1.y;
        const min = Math.min(disLeft, disRight, disTop, disBottom);

        // eslint-disable-next-line default-case
        switch (min) {
          case disLeft:
            this.pos.x -= disLeft;
            return {
              obj: obj,
              side: "right",
              dis: -disLeft
            };
          case disRight:
            this.pos.x += disRight;
            return {
              obj: obj,
              side: "left",
              dis: disRight
            };
          case disTop:
            this.pos.y -= disTop;
            return {
              obj: obj,
              side: "bottom",
              dis: -disTop
            };
          case disBottom:
            this.pos.y += disBottom;
            return {
              obj: obj,
              side: "top",
              dis: disBottom
            };
        }

        return null;
      },

      // push object out of other solid objects
      pushOutAll() {
        return every(
          other => (other.solid ? this.pushOut(other) : null)
        ).filter(res => res != null);
      },

      _checkCollisions(tag, f) {
        every(tag, obj => {
          if (this === obj) {
            return;
          }
          if (colliding[obj._id]) {
            return;
          }
          if (this.isCollided(obj)) {
            f(obj);
            colliding[obj._id] = obj;
          }
        });

        for (const id in colliding) {
          const obj = colliding[id];
          if (!this.isCollided(obj)) {
            delete colliding[id];
          }
        }
      },

      // TODO: repetitive with collides
      _checkOverlaps(tag, f) {
        every(tag, obj => {
          if (this === obj) {
            return;
          }
          if (overlapping[obj._id]) {
            return;
          }
          if (this.isOverlapped(obj)) {
            f(obj);
            overlapping[obj._id] = obj;
          }
        });

        for (const id in overlapping) {
          const obj = overlapping[id];
          if (!this.isOverlapped(obj)) {
            delete overlapping[id];
          }
        }
      },

      // TODO: cache
      // TODO: use matrix mult for more accuracy and rotation?
      _worldArea() {
        const a = this.area;
        const pos = this.pos || vec2(0);
        const scale = this.scale || vec2(1);
        const p1 = pos.add(a.p1.scale(scale));
        const p2 = pos.add(a.p2.scale(scale));

        const area = {
          p1: vec2(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y)),
          p2: vec2(Math.max(p1.x, p2.x), Math.max(p1.y, p2.y))
        };

        return area;
      }
    };
  }

  function getAreaFromSize(w, h, o) {
    const size = vec2(w, h);
    const offset = originPt(o || DEF_ORIGIN)
      .scale(size)
      .scale(-0.5);
    return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
  }

  // TODO: clean
  function sprite(id, conf = {}) {
    let spr = null;
    let curAnim = null;

    function calcTexScale(tex, q, w, h) {
      const scale = vec2(1, 1);
      if (w && h) {
        scale.x = w / (tex.width * q.w);
        scale.y = h / (tex.height * q.h);
      } else if (w) {
        scale.x = w / (tex.width * q.w);
        scale.y = scale.x;
      } else if (h) {
        scale.y = h / (tex.height * q.h);
        scale.x = scale.y;
      }
      return scale;
    }

    return {
      id: "sprite",
      // TODO: allow update
      width: 0,
      height: 0,
      animSpeed: conf.animSpeed || 0.1,
      frame: conf.frame || 0,
      quad: conf.quad || quad(0, 0, 1, 1),

      add() {
        if (!conf.noArea) {
          this.use(area(vec2(0), vec2(0)));
        }
      },

      load() {
        spr = assets.sprites[id];

        if (!spr) {
          throw new Error(`sprite not found: "${id}"`);
        }

        let q = { ...spr.frames[0] };

        if (conf.quad) {
          q = q.scale(conf.quad);
        }

        const scale = calcTexScale(spr.tex, q, conf.width, conf.height);

        this.width = spr.tex.width * q.w * scale.x;
        this.height = spr.tex.height * q.h * scale.y;

        if (!conf.noArea) {
          // TODO: this could overwrite existing internal states
          this.use(getAreaFromSize(this.width, this.height, this.origin));
        }
      },

      draw() {
        drawSprite(spr, {
          pos: this.pos,
          scale: this.scale,
          rot: this.angle,
          color: this.color,
          frame: this.frame,
          origin: this.origin,
          quad: this.quad,
          prog: assets.shaders[this.shader],
          uniform: this.uniform,
          flipX: conf.flipX,
          flipY: conf.flipY,
          tiled: conf.tiled,
          width: conf.width,
          height: conf.height
        });
      },

      update() {
        if (!curAnim) {
          return;
        }

        const anim = spr.anims[curAnim.name];

        curAnim.timer += dt();

        if (curAnim.timer >= this.animSpeed) {
          // TODO: anim dir
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
      },

      play(name, loop = true) {
        if (!spr) {
          ready(() => {
            this.play(name, loop);
          });
          return;
        }

        const anim = spr.anims[name];

        if (!anim) {
          throw new Error(`anim not found: ${name}`);
        }

        if (curAnim) {
          this.stop();
        }

        curAnim = {
          name: name,
          loop: loop,
          timer: 0
        };

        this.frame = anim.from;
        this.trigger("animPlay", name);
      },

      stop() {
        if (!curAnim) {
          return;
        }
        const prevAnim = curAnim.name;
        curAnim = null;
        this.trigger("animEnd", prevAnim);
      },

      changeSprite(id) {
        if (!spr) {
          ready(() => {
            this.changeSprite(id);
          });
          return;
        }

        spr = assets.sprites[id];

        if (!spr) {
          throw new Error(`sprite not found: "${id}"`);
        }

        const q = { ...spr.frames[0] };

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
      },

      numFrames() {
        if (!spr) {
          return 0;
        }
        return spr.frames.length;
      },

      curAnim() {
        return curAnim && curAnim.name;
      },

      flipX(b) {
        conf.flipX = b;
      },

      flipY(b) {
        conf.flipY = b;
      },

      inspect() {
        const info = {};
        if (curAnim) {
          info.curAnim = `"${curAnim.name}"`;
        }
        return info;
      }
    };
  }

  function text(t, size, conf = {}) {
    return {
      id: "text",
      text: t,
      textSize: size || 16,
      font: conf.font,
      // TODO: calc these at init
      width: 0,
      height: 0,

      add() {
        if (conf.area) {
          this.use(area(vec2(0), vec2(0)));
        }
      },

      load() {
        // add default area
        if (conf.area) {
          const font = assets.fonts[this.font ? this.font : DEF_FONT];
          const ftext = gfx.fmtText(this.text + "", font, {
            pos: this.pos,
            scale: this.scale,
            rot: this.angle,
            size: this.textSize,
            origin: this.origin,
            color: this.color,
            width: conf.width
          });
          this.width = ftext.width / ((this.scale && this.scale.x) || 1);
          this.height = ftext.height / ((this.scale && this.scale.y) || 1);
          this.use(getAreaFromSize(this.width, this.height, this.origin));
        }
      },

      draw() {
        const font = assets.fonts[this.font ? this.font : DEF_FONT];

        const ftext = gfx.fmtText(this.text + "", font, {
          pos: this.pos,
          scale: this.scale,
          rot: this.angle,
          size: this.textSize,
          origin: this.origin,
          color: this.color,
          width: conf.width
        });

        this.width = ftext.width;
        this.height = ftext.height;

        gfx.drawFmtText(ftext);
      }
    };
  }

  function rect(w, h, conf = {}) {
    return {
      id: "rect",
      width: w,
      height: h,

      add() {
        // add default area
        if (!this.area && !conf.noArea) {
          this.use(getAreaFromSize(this.width, this.height, this.origin));
        }
      },

      draw() {
        gfx.drawRect(this.pos, this.width, this.height, {
          scale: this.scale,
          rot: this.angle,
          color: this.color,
          origin: this.origin,
          prog: assets.shaders[this.shader],
          uniform: this.uniform
        });
      }
    };
  }

  function solid() {
    return {
      id: "solid",
      solid: true
    };
  }

  // maximum y velocity with body()
  const DEF_MAX_VEL = 960;
  const DEF_JUMP_FORCE = 480;

  function body(conf = {}) {
    let velY = 0;
    let curPlatform = null;
    let lastPlatformPos = null;
    const maxVel = conf.maxVel ? conf.maxVel : DEF_MAX_VEL;

    return {
      id: "body",
      jumpForce: conf.jumpForce ? conf.jumpForce : DEF_JUMP_FORCE,

      update() {
        this.move(0, velY);

        const targets = this.pushOutAll();
        let justOff = false;

        // check if loses current platform
        if (curPlatform) {
          if (!curPlatform.exists() || !this.isCollided(curPlatform)) {
            curPlatform = null;
            lastPlatformPos = null;
            justOff = true;
          } else {
            if (lastPlatformPos) {
              // sticky platform
              this.pos = this.pos.add(curPlatform.pos.sub(lastPlatformPos));
              lastPlatformPos = curPlatform.pos.clone();
            }
          }
        }

        if (!curPlatform) {
          velY = Math.min(velY + gravity() * dt(), maxVel);

          // check if grounded to a new platform
          for (const target of targets) {
            if (target.side === "bottom" && velY > 0) {
              curPlatform = target.obj;
              velY = 0;
              // TODO: might not have pos
              lastPlatformPos = curPlatform.pos.clone();
              if (!justOff) {
                this.trigger("grounded", curPlatform);
              }
            } else if (target.side === "top" && velY < 0) {
              velY = 0;
              this.trigger("headbutt", target.obj);
            }
          }
        }
      },

      curPlatform() {
        return curPlatform;
      },

      grounded() {
        return curPlatform !== null;
      },

      falling() {
        return velY > 0;
      },

      jump(force) {
        curPlatform = null;
        velY = -force || -this.jumpForce;
      }
    };
  }

  function shader(id, uniform = {}) {
    const prog = assets.shaders[id];
    return {
      id: "shader",
      shader: id,
      uniform: uniform
    };
  }

  const debug = {
    paused: false,
    inspect: false,
    timeScale: 1,
    showLog: true,
    fps: app.fps,
    objCount() {
      return game.objs.size;
    },
    stepFrame() {
      gameFrame(true);
    },
    drawCalls: gfx.drawCalls,
    clearLog: logger.clear,
    log: logger.info,
    error: logger.error
  };

  function gridder(level, p) {
    return {
      id: "gridder",
      gridPos: p.clone(),

      setGridPos(p) {
        this.gridPos = p.clone();
        this.pos = vec2(
          level.offset().x + this.gridPos.x * level.gridWidth(),
          level.offset().y + this.gridPos.y * level.gridHeight()
        );
      },

      moveLeft() {
        this.setGridPos(this.gridPos.add(vec2(-1, 0)));
      },

      moveRight() {
        this.setGridPos(this.gridPos.add(vec2(1, 0)));
      },

      moveUp() {
        this.setGridPos(this.gridPos.add(vec2(0, -1)));
      },

      moveDown() {
        this.setGridPos(this.gridPos.add(vec2(0, 1)));
      }
    };
  }

  function addLevel(map, conf) {
    const objs = [];
    const offset = vec2(conf.pos || 0);
    let longRow = 0;

    const level = {
      offset() {
        return offset.clone();
      },

      gridWidth() {
        return conf.width;
      },

      gridHeight() {
        return conf.height;
      },

      getPos(...args) {
        const p = vec2(...args);
        return vec2(offset.x + p.x * conf.width, offset.y + p.y * conf.height);
      },

      spawn(sym, p) {
        const comps = (() => {
          if (Array.isArray(sym)) {
            return sym;
          } else if (conf[sym]) {
            if (typeof conf[sym] === "function") {
              return conf[sym]();
            } else if (Array.isArray(conf[sym])) {
              return [...conf[sym]];
            }
          } else if (conf.any) {
            return conf.any(sym);
          }
        })();

        if (!comps) {
          return;
        }

        comps.push(
          pos(offset.x + p.x * conf.width, offset.y + p.y * conf.height)
        );

        const obj = add(comps);

        objs.push(obj);

        obj.use(gridder(this, p));

        return obj;
      },

      width() {
        return longRow * conf.width;
      },

      height() {
        return map.length * conf.height;
      },

      destroy() {
        for (const obj of objs) {
          destroy(obj);
        }
      }
    };

    map.forEach((row, i) => {
      const syms = row.split("");

      longRow = Math.max(syms.length, longRow);

      syms.forEach((sym, j) => {
        level.spawn(sym, vec2(j, i));
      });
    });

    return level;
  }

  function commonProps(props) {
    return [
      pos(props.pos ? props.pos : vec2(0)),
      rotate(props.rot ? prop.rot : 0),
      scale(vec2(props.scale ? props.scale : 1)),
      color(props.color ? props.color : rgb(1, 1, 1)),
      origin(props.origin)
    ];
  }

  function addSprite(name, props = {}) {
    return add([
      sprite(name, props),
      props.body && body(),
      props.solid && solid(),
      props.layer && layer(props.layer),
      props.origin && origin(props.origin),
      props.data,
      ...commonProps(props),
      ...(props.tags || [])
    ]);
  }

  function addRect(w, h, props = {}) {
    return add([
      rect(w, h, props),
      props.body && body(),
      props.solid && solid(),
      props.layer && layer(props.layer),
      props.origin && origin(props.origin),
      props.data,
      ...commonProps(props),
      ...(props.tags || [])
    ]);
  }

  function addText(txt, size, props = {}) {
    return add([
      text(txt, size, props),
      props.body && body(),
      props.solid && solid(),
      props.layer && layer(props.layer),
      props.origin && origin(props.origin),
      props.data,
      ...commonProps(props),
      ...(props.tags || [])
    ]);
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

  function go(id, ...args) {
    game.on("nextFrame", () => {
      game.events = {};

      game.objEvents = {
        add: new IDList(),
        update: new IDList(),
        draw: new IDList(),
        destroy: new IDList()
      };

      game.actions = new IDList();
      game.renders = new IDList();
      game.objs = new IDList();
      game.timers = new IDList();

      // cam
      game.cam = {
        pos: vec2(gfx.width() / 2, gfx.height() / 2),
        scale: vec2(1, 1),
        angle: 0,
        shake: 0
      };

      game.camMousePos = app.mousePos();
      game.camMatrix = mat4();

      game.layers = {};
      game.defLayer = null;
      game.gravity = DEF_GRAVITY;

      game.scenes[id](...args);

      if (gconf.debug) {
        regDebugInput();
      }
    });
  }

  function getData(key, def) {
    try {
      return JSON.parse(window.localStorage[key]);
    } catch {
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

  const ctx = {
    // asset load - 6/6
    loadRoot: assets.loadRoot, // assets/load-root
    loadSprite: assets.loadSprite, // assets/load-sprite
    loadSound: assets.loadSound, // assets/load-sound
    loadFont: assets.loadFont, // assets/load-font
    loadShader: assets.loadShader, // assets/load-shader
    addLoader: assets.addLoader, // assets/add-loader
    // query
    width: gfx.width, // gfx/width
    height: gfx.height, // gfx/height
    dt: dt, // app/dt
    time: app.time, // app/time!
    screenshot: app.screenshot, // app/screenshot
    focused: app.focused, // app/focused?
    focus: app.focus, // app/focus
    cursor: app.cursor, // app/cursor
    ready,
    isTouch: () => app.isTouch,
    // misc
    layers,
    camPos,
    camScale,
    camRot,
    camShake,
    camIgnore,
    gravity,
    // obj
    add,
    readd,
    destroy,
    destroyAll,
    get,
    every,
    revery,
    // net
    sync,
    send,
    recv,
    // comps
    pos,
    scale,
    rotate,
    color,
    origin,
    layer,
    area,
    sprite,
    text,
    rect,
    solid,
    body,
    shader,
    // group events
    on,
    action,
    render,
    collides,
    overlaps,
    clicks,
    // input
    keyDown,
    keyPress,
    keyPressRep,
    keyRelease,
    mouseDown,
    mouseClick,
    mouseRelease,
    mouseMove,
    charInput,
    touchStart,
    touchMove,
    touchEnd,
    mousePos,
    mouseDeltaPos: app.mouseDeltaPos,
    keyIsDown: app.keyDown,
    keyIsPressed: app.keyPressed,
    keyIsPressedRep: app.keyPressedRep,
    keyIsReleased: app.keyReleased,
    mouseIsDown: app.mouseDown,
    mouseIsClicked: app.mouseClicked,
    mouseIsReleased: app.mouseReleased,
    mouseIsMoved: app.mouseMoved,
    // timer
    loop,
    wait,
    // audio
    play,
    volume: audio.volume,
    burp: audio.burp,
    // math
    makeRng,
    rand,
    randSeed,
    vec2,
    rgb,
    rgba,
    quad,
    choose,
    chance,
    lerp,
    map,
    mapc,
    wave,
    deg2rad,
    rad2deg,
    // raw draw
    drawSprite,
    drawText,
    drawRect: gfx.drawRect,
    drawRectStroke: gfx.drawRectStroke,
    drawLine: gfx.drawLine,
    drawTri: gfx.drawTri,
    // debug
    debug,
    // level
    addLevel,
    // helpers
    addSprite,
    addRect,
    addText,
    // scene
    scene,
    go,
    // storage
    getData,
    setData,
    // custom
    state,
    reg_comp,
    get_comp
  };

  if (gconf.plugins) {
    for (const src of gconf.plugins) {
      const map = src(ctx);
      for (const k in map) {
        ctx[k] = map[k];
      }
    }
  }

  if (gconf.global) {
    for (const k in ctx) {
      window[k] = ctx[k];
    }
  }

  app.run(() => {
    gfx.frameStart();

    if (!game.loaded) {
      // if assets are not fully loaded, draw a progress bar
      const progress = assets.loadProgress();

      if (progress === 1) {
        game.loaded = true;
        game.trigger("load");
        if (net) {
          net.connect().catch(logger.error);
        }
      } else {
        const w = gfx.width() / 2;
        const h = 24 / gfx.scale();
        const pos = vec2(gfx.width() / 2, gfx.height() / 2).sub(
          vec2(w / 2, h / 2)
        );
        gfx.drawRect(vec2(0), gfx.width(), gfx.height(), {
          color: rgb(0, 0, 0)
        });
        gfx.drawRectStroke(pos, w, h, { width: 4 / gfx.scale() });
        gfx.drawRect(pos, w * progress, h);
      }
    } else {
      try {
        // TODO: this gives the latest mousePos in input handlers but uses cam matrix from last frame
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

  function regDebugInput() {
    keyPress("f1", () => {
      debug.inspect = !debug.inspect;
    });

    keyPress("f2", () => {
      debug.clearLog();
    });

    keyPress("f8", () => {
      debug.paused = !debug.paused;
      logger.info(`${debug.paused ? "paused" : "unpaused"}`);
    });

    keyPress("f7", () => {
      debug.timeScale = clamp(debug.timeScale - 0.2, 0, 2);
      logger.info(`time scale: ${debug.timeScale.toFixed(1)}`);
    });

    keyPress("f9", () => {
      debug.timeScale = clamp(debug.timeScale + 0.2, 0, 2);
      logger.info(`time scale: ${debug.timeScale.toFixed(1)}`);
    });

    keyPress("f10", () => {
      debug.stepFrame();
      logger.info(`stepped frame`);
    });
  }

  if (gconf.debug) {
    regDebugInput();
  }

  app.focus();

  return ctx;
};

export default kaboom;
