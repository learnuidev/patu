/** @const */ var DEF_ORIGIN$$module$lib$gfx = "topleft";
/** @const */ var STRIDE$$module$lib$gfx = 9;
/** @const */ var QUEUE_COUNT$$module$lib$gfx = 65536;
/** @const */ var BG_GRID_SIZE$$module$lib$gfx = 64;
/** @const */ var VERT_TEMPLATE$$module$lib$gfx = "\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvec4 def_vert() {\n\treturn vec4(a_pos, 1.0);\n}\n\n{{user}}\n\nvoid main() {\n\tvec4 pos \x3d vert(a_pos, a_uv, a_color);\n\tv_pos \x3d a_pos;\n\tv_uv \x3d a_uv;\n\tv_color \x3d a_color;\n\tgl_Position \x3d pos;\n}\n";
/** @const */ var FRAG_TEMPLATE$$module$lib$gfx = "\nprecision mediump float;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform sampler2D u_tex;\n\nvec4 def_frag() {\n\treturn v_color * texture2D(u_tex, v_uv);\n}\n\n{{user}}\n\nvoid main() {\n\tgl_FragColor \x3d frag(v_pos, v_uv, v_color, u_tex);\n\tif (gl_FragColor.a \x3d\x3d 0.0) {\n\t\tdiscard;\n\t}\n}\n";
/** @const */ var DEF_VERT$$module$lib$gfx = "\nvec4 vert(vec3 pos, vec2 uv, vec4 color) {\n\treturn def_vert();\n}\n";
/** @const */ var DEF_FRAG$$module$lib$gfx = "\nvec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n\treturn def_frag();\n}\n";
function originPt$$module$lib$gfx(orig) {
  switch(orig) {
    case "topleft":
      return vec2$$module$lib$math(-1, -1);
    case "top":
      return vec2$$module$lib$math(0, -1);
    case "topright":
      return vec2$$module$lib$math(1, -1);
    case "left":
      return vec2$$module$lib$math(-1, 0);
    case "center":
      return vec2$$module$lib$math(0, 0);
    case "right":
      return vec2$$module$lib$math(1, 0);
    case "botleft":
      return vec2$$module$lib$math(-1, 1);
    case "bot":
      return vec2$$module$lib$math(0, 1);
    case "botright":
      return vec2$$module$lib$math(1, 1);
    default:
      return orig;
  }
}
function gfxInit$$module$lib$gfx(gl, gconf) {
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
    vertSrc = vertSrc === undefined ? DEF_VERT$$module$lib$gfx : vertSrc;
    fragSrc = fragSrc === undefined ? DEF_FRAG$$module$lib$gfx : fragSrc;
    var msg;
    /** @const */ var vcode = VERT_TEMPLATE$$module$lib$gfx.replace("{{user}}", vertSrc || DEF_VERT$$module$lib$gfx);
    /** @const */ var fcode = FRAG_TEMPLATE$$module$lib$gfx.replace("{{user}}", fragSrc || DEF_FRAG$$module$lib$gfx);
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
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE$$module$lib$gfx * 4, 0);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE$$module$lib$gfx * 4, 12);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE$$module$lib$gfx * 4, 20);
      gl.enableVertexAttribArray(2);
    }, send:function(uniform) {
      this.bind();
      for (var name in uniform) {
        /** @const */ var val = uniform[name];
        /** @const */ var loc = gl.getUniformLocation(id, name);
        if (typeof val === "number") {
          gl.uniform1f(loc, val);
        } else {
          if (isMat4$$module$lib$math(val)) {
            gl.uniformMatrix4fv(loc, false, new Float32Array(val.m));
          } else {
            if (isColor$$module$lib$math(val)) {
              gl.uniform4f(loc, val.r, val.g, val.b, val.a);
            } else {
              if (isVec3$$module$lib$math(val)) {
                gl.uniform3f(loc, val.x, val.y, val.z);
              } else {
                if (isVec2$$module$lib$math(val)) {
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
    var $jscomp$iter$1 = $jscomp.makeIterator(charMap);
    for (var $jscomp$key$ = $jscomp$iter$1.next(); !$jscomp$key$.done; $jscomp$key$ = $jscomp$iter$1.next()) {
      /** @const */ var $jscomp$destructuring$var0 = $jscomp$key$.value;
      {
        var $jscomp$destructuring$var1 = $jscomp.makeIterator($jscomp$destructuring$var0);
        /** @const */ var i = $jscomp$destructuring$var1.next().value;
        /** @const */ var ch = $jscomp$destructuring$var1.next().value;
        {
          map[ch] = vec2$$module$lib$math(i % cols * qw, Math.floor(i / cols) * qh);
        }
      }
    }
    return {tex:tex, map:map, qw:qw, qh:qh};
  }
  function drawRaw(verts, indices, tex, prog, uniform) {
    tex = tex === undefined ? gfx.defTex : tex;
    prog = prog === undefined ? gfx.defProg : prog;
    uniform = uniform === undefined ? {} : uniform;
    tex = tex ? tex : gfx.defTex;
    prog = prog ? prog : gfx.defProg;
    if (tex !== gfx.curTex || prog !== gfx.curProg || !deepEq$$module$lib$utils(gfx.curUniform, uniform) || gfx.vqueue.length + verts.length * STRIDE$$module$lib$gfx > QUEUE_COUNT$$module$lib$gfx || gfx.iqueue.length + indices.length > QUEUE_COUNT$$module$lib$gfx) {
      flush();
    }
    gfx.curTex = tex;
    gfx.curProg = prog;
    gfx.curUniform = uniform;
    /** @const */ var nIndices = indices.map(function(i) {
      return i + gfx.vqueue.length / STRIDE$$module$lib$gfx;
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
      drawQuad({width:width(), height:height(), quad:quad$$module$lib$math(0, 0, width() * scale$jscomp$0() / BG_GRID_SIZE$$module$lib$gfx, height() * scale$jscomp$0() / BG_GRID_SIZE$$module$lib$gfx), tex:gfx.bgTex});
    }
    gfx.drawCalls = 0;
    gfx.transformStack = [];
    gfx.transform = mat4$$module$lib$math();
  }
  function frameEnd() {
    flush();
    gfx.lastDrawCalls = gfx.drawCalls;
  }
  function drawCalls() {
    return gfx.lastDrawCalls;
  }
  function toNDC(pt) {
    return vec2$$module$lib$math(pt.x / width() * 2 - 1, -pt.y / height() * 2 + 1);
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
    /** @const */ var pos = conf.pos || vec2$$module$lib$math(0, 0);
    /** @const */ var origin = originPt$$module$lib$gfx(conf.origin || DEF_ORIGIN$$module$lib$gfx);
    /** @const */ var offset = origin.scale(vec2$$module$lib$math(w, h).scale(-.5));
    /** @const */ var scale = vec2$$module$lib$math(conf.scale || 1);
    /** @const */ var rot = conf.rot || 0;
    /** @const */ var q = conf.quad || quad$$module$lib$math(0, 0, 1, 1);
    /** @const */ var z = 1 - (conf.z || 0);
    /** @const */ var color = conf.color || rgba$$module$lib$math(1, 1, 1, 1);
    pushTransform();
    pushTranslate(pos);
    pushScale(scale);
    pushRotateZ(rot);
    pushTranslate(offset);
    drawRaw([{pos:vec3$$module$lib$math(-w / 2, h / 2, z), uv:vec2$$module$lib$math(q.x, q.y + q.h), color:color}, {pos:vec3$$module$lib$math(-w / 2, -h / 2, z), uv:vec2$$module$lib$math(q.x, q.y), color:color}, {pos:vec3$$module$lib$math(w / 2, -h / 2, z), uv:vec2$$module$lib$math(q.x + q.w, q.y), color:color}, {pos:vec3$$module$lib$math(w / 2, h / 2, z), uv:vec2$$module$lib$math(q.x + q.w, q.y + q.h), color:color}], [0, 1, 3, 1, 2, 3], conf.tex, conf.prog, conf.uniform);
    popTransform();
  }
  function drawTexture(tex, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var q = conf.quad || quad$$module$lib$math(0, 0, 1, 1);
    /** @const */ var w = tex.width * q.w;
    /** @const */ var h = tex.height * q.h;
    drawQuad(Object.assign({}, conf, {tex:tex, quad:q, width:w, height:h}));
  }
  function drawRect(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    drawQuad(Object.assign({}, conf, {pos:pos, width:w, height:h}));
  }
  function drawRectStroke(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var offset = originPt$$module$lib$gfx(conf.origin || DEF_ORIGIN$$module$lib$gfx).scale(vec2$$module$lib$math(w, h)).scale(0.5);
    /** @const */ var p1 = pos.add(vec2$$module$lib$math(-w / 2, -h / 2)).sub(offset);
    /** @const */ var p2 = pos.add(vec2$$module$lib$math(-w / 2, h / 2)).sub(offset);
    /** @const */ var p3 = pos.add(vec2$$module$lib$math(w / 2, h / 2)).sub(offset);
    /** @const */ var p4 = pos.add(vec2$$module$lib$math(w / 2, -h / 2)).sub(offset);
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
  function fmtText(text, font, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var chars = (text + "").split("");
    /** @const */ var gw = font.qw * font.tex.width;
    /** @const */ var gh = font.qh * font.tex.height;
    /** @const */ var size = conf.size || gh;
    /** @const */ var scale = vec2$$module$lib$math(size / gh).scale(vec2$$module$lib$math(conf.scale || 1));
    /** @const */ var cw = scale.x * gw;
    /** @const */ var ch = scale.y * gh;
    var curX = 0;
    var th = ch;
    var tw = 0;
    /** @const */ var flines = [[]];
    var $jscomp$iter$2 = $jscomp.makeIterator(chars);
    for (var $jscomp$key$char = $jscomp$iter$2.next(); !$jscomp$key$char.done; $jscomp$key$char = $jscomp$iter$2.next()) {
      /** @const */ var char = $jscomp$key$char.value;
      {
        if (char === "\n" || (conf.width ? curX + cw > conf.width : false)) {
          th += ch;
          curX = 0;
          flines.push([]);
        }
        if (char !== "\n") {
          flines[flines.length - 1].push(char);
          curX += cw;
        }
        tw = Math.max(tw, curX);
      }
    }
    if (conf.width) {
      tw = conf.width;
    }
    /** @const */ var fchars = [];
    /** @const */ var pos = vec2$$module$lib$math(conf.pos || 0);
    /** @const */ var offset = originPt$$module$lib$gfx(conf.origin || DEF_ORIGIN$$module$lib$gfx).scale(0.5);
    /** @const */ var ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
    /** @const */ var oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);
    flines.forEach(function(line, ln) {
      /** @const */ var oxl = (tw - line.length * cw) * (offset.x + 0.5);
      line.forEach(function(char, cn) {
        /** @const */ var qpos = font.map[char];
        /** @const */ var x = cn * cw;
        /** @const */ var y = ln * ch;
        if (qpos) {
          fchars.push({tex:font.tex, quad:quad$$module$lib$math(qpos.x, qpos.y, font.qw, font.qh), ch:char, pos:vec2$$module$lib$math(pos.x + x + ox + oxl, pos.y + y + oy), color:conf.color, origin:conf.origin, scale:scale, z:conf.z});
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
    var $jscomp$iter$3 = $jscomp.makeIterator(ftext.chars);
    for (var $jscomp$key$ch = $jscomp$iter$3.next(); !$jscomp$key$ch.done; $jscomp$key$ch = $jscomp$iter$3.next()) {
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
    return gconf.scale || 1;
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
    /** @const */ var defProg = makeProgram(DEF_VERT$$module$lib$gfx, DEF_FRAG$$module$lib$gfx);
    /** @const */ var emptyTex = makeTex(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
    /** @const */ var c = gconf.clearColor || rgba$$module$lib$math(0, 0, 0, 1);
    gl.clearColor(c.r, c.g, c.b, c.a);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    /** @const */ var vbuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
    gl.bufferData(gl.ARRAY_BUFFER, QUEUE_COUNT$$module$lib$gfx * 4, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /** @const */ var ibuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, QUEUE_COUNT$$module$lib$gfx * 2, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    /** @const */ var bgTex = makeTex(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2));
    return {drawCalls:0, lastDrawCalls:0, defProg:defProg, curProg:defProg, defTex:emptyTex, curTex:emptyTex, curUniform:{}, vbuf:vbuf, ibuf:ibuf, vqueue:[], iqueue:[], transform:mat4$$module$lib$math(), transformStack:[], clearColor:c, bgTex:bgTex};
  }();
  frameStart();
  frameEnd();
  return {width:width, height:height, scale:scale$jscomp$0, makeTex:makeTex, makeProgram:makeProgram, makeFont:makeFont, drawTexture:drawTexture, drawText:drawText, drawFmtText:drawFmtText, drawRect:drawRect, drawRectStroke:drawRectStroke, drawLine:drawLine, fmtText:fmtText, frameStart:frameStart, frameEnd:frameEnd, pushTransform:pushTransform, popTransform:popTransform, pushMatrix:pushMatrix, drawCalls:drawCalls, clearColor:clearColor};
}
/** @const */ var module$lib$gfx = {};
/** @const */ module$lib$gfx.gfxInit = gfxInit$$module$lib$gfx;
/** @const */ module$lib$gfx.originPt = originPt$$module$lib$gfx;

$CLJS.module$lib$gfx=module$lib$gfx;
//# sourceMappingURL=module$lib$gfx.js.map
