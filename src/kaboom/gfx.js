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
    },
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
    },
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
    a: args[3] || 1,
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
    },
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
    },
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
          p.w * this.m[15],
      };
    },

    multVec3(p) {
      const p4 = this.multVec4({
        x: p.x,
        y: p.y,
        z: p.z,
        w: 1.0,
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
          1,
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
          1,
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
          1,
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
    },
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
    },
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
    p2: p2.clone(),
  };
}

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

    const c = gconf.clearColor || rgba(0, 0, 0, 1);

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
          128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128,
          128, 255,
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
      bgTex: bgTex,
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
      },
    };
  }

  function makeProgram(vertSrc = DEF_VERT, fragSrc = DEF_FRAG) {
    let msg;
    const vcode = VERT_TEMPLATE.replace("{{user}}", vertSrc || DEF_VERT);
    const fcode = FRAG_TEMPLATE.replace("{{user}}", fragSrc || DEF_FRAG);
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
      },
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
      qh: qh,
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
    tex = tex || gfx.defTex;
    prog = prog || gfx.defProg;

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

    const nIndices = indices.map((i) => {
      return i + gfx.vqueue.length / STRIDE;
    });

    const nVerts = verts
      .map((v) => {
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
          v.color.a,
        ];
      })
      .flat();

    nIndices.forEach((i) => gfx.iqueue.push(i));
    nVerts.forEach((v) => gfx.vqueue.push(v));
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
        tex: gfx.bgTex,
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
    const scale = vec2(conf.scale || 1);
    const rot = conf.rot || 0;
    const q = conf.quad || quad(0, 0, 1, 1);
    const z = 1 - (conf.z || 0);
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
          color: color,
        },
        {
          pos: vec3(-w / 2, -h / 2, z),
          uv: vec2(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y + q.h : q.y),
          color: color,
        },
        {
          pos: vec3(w / 2, -h / 2, z),
          uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y + q.h : q.y),
          color: color,
        },
        {
          pos: vec3(w / 2, h / 2, z),
          uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y : q.y + q.h),
          color: color,
        },
      ],
      [0, 1, 3, 1, 2, 3],
      conf.tex,
      conf.prog,
      conf.uniform
    );

    popTransform();
  }

  function drawTexture(tex, conf = {}) {
    const q = conf.quad || quad(0, 0, 1, 1);
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
            origin: "topleft",
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
        height: h,
      });
    }
  }

  function drawRect(pos, w, h, conf = {}) {
    drawQuad({
      ...conf,
      pos: pos,
      width: w,
      height: h,
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
      origin: "center",
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
          color: color,
        },
        {
          pos: vec3(p2.x, p2.y, z),
          uv: vec2(0, 0),
          color: color,
        },
        {
          pos: vec3(p3.x, p3.y, z),
          uv: vec2(0, 0),
          color: color,
        },
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
            z: conf.z,
          });
        }
      });
    });

    return {
      width: tw,
      height: th,
      chars: fchars,
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
        z: ch.z,
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
    return gconf.scale || 1;
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
    clearColor,
  };
}

const gfx = { originPt, gfxInit };

export default gfx;
