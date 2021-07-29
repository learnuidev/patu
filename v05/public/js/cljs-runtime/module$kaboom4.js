/** @const */ var kaboom$$module$kaboom4 = function(gconf) {
  function assetsInit() {
    loadFont(DEF_FONT, UNSCII_SRC, 8, 8);
  }
  function loadImg(src) {
    /** @const */ var img = new Image;
    img.crossOrigin = "";
    img.src = src;
    return new Promise(function(resolve, reject) {
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject();
      };
    });
  }
  function newLoader() {
    /** @const */ var id = assets.lastLoaderID;
    assets.loaders[id] = false;
    assets.lastLoaderID++;
    return {done:function() {
      assets.loaders[id] = true;
    }};
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
    if (path) {
      assets.loadRoot = path;
    }
    return assets.loadRoot;
  }
  function isDataUrl(src) {
    return src.startsWith("data:");
  }
  function loadFont(name, src, gw, gh, chars) {
    return new Promise(function(resolve, reject) {
      /** @const */ var loader = newLoader();
      /** @const */ var path = isDataUrl(src) ? src : assets.loadRoot + src;
      loadImg(path).then(function(img) {
        assets.fonts[name] = makeFont(makeTex(img), gw, gh, chars || ASCII_CHARS);
        resolve(assets.fonts[name]);
      }).catch(function() {
        error("failed to load font '" + name + "' from '" + src + "'");
        reject();
      }).finally(function() {
        loader.done();
      });
    });
  }
  function loadSprite(name$jscomp$0, src$jscomp$0, conf) {
    function loadRawSprite(name, src, conf) {
      conf = conf === undefined ? {} : conf;
      /** @const */ var frames = [];
      /** @const */ var tex = makeTex(src);
      /** @const */ var sliceX = conf.sliceX || 1;
      /** @const */ var sliceY = conf.sliceY || 1;
      /** @const */ var qw = 1 / sliceX;
      /** @const */ var qh = 1 / sliceY;
      for (var j = 0; j < sliceY; j++) {
        for (var i = 0; i < sliceX; i++) {
          frames.push(quad(i * qw, j * qh, qw, qh));
        }
      }
      /** @const */ var sprite = {tex:tex, frames:frames, anims:conf.anims || {}};
      assets.sprites[name] = sprite;
      return sprite;
    }
    conf = conf === undefined ? {} : conf;
    return new Promise(function(resolve, reject) {
      if (typeof src$jscomp$0 === "string") {
        /** @const */ var loader = newLoader();
        /** @const */ var path = isDataUrl(src$jscomp$0) ? src$jscomp$0 : assets.loadRoot + src$jscomp$0;
        loadImg(path).then(function(img) {
          resolve(loadRawSprite(name$jscomp$0, img, conf));
        }).catch(function() {
          error("failed to load sprite '" + name$jscomp$0 + "' from '" + src$jscomp$0 + "'");
          reject();
        }).finally(function() {
          loader.done();
        });
        return;
      } else {
        resolve(loadRawSprite(name$jscomp$0, src$jscomp$0, conf));
      }
    });
  }
  function loadSound(name, src, conf) {
    conf = conf === undefined ? {} : conf;
    return new Promise(function(resolve, reject) {
      if (typeof src === "string") {
        /** @const */ var loader = newLoader();
        fetch(assets.loadRoot + src).then(function(res) {
          return res.arrayBuffer();
        }).then(function(data) {
          return new Promise(function(resolve2, reject2) {
            audio.ctx.decodeAudioData(data, function(buf) {
              resolve2(buf);
            }, function(err) {
              reject2();
            });
          });
        }).then(function(buf) {
          audio.sounds[name] = buf;
        }).catch(function() {
          error("failed to load sound '" + name + "' from '" + src + "'");
          reject();
        }).finally(function() {
          loader.done();
        });
      }
    });
  }
  function appInit() {
    app.canvas = gconf.canvas;
    if (!app.canvas) {
      app.canvas = document.createElement("canvas");
      /** @const */ var root = gconf.root || document.body;
      root.appendChild(app.canvas);
    }
    app.scale = gconf.scale || 1;
    if (gconf.fullscreen) {
      app.canvas.width = window.innerWidth;
      app.canvas.height = window.innerHeight;
    } else {
      app.canvas.width = (gconf.width || 640) * app.scale;
      app.canvas.height = (gconf.height || 480) * app.scale;
    }
    /** @const */ var styles = ["outline: none"];
    if (gconf.crisp) {
      styles.push("image-rendering: pixelated");
      styles.push("image-rendering: crisp-edges");
    }
    app.canvas.style = styles.join(";");
    app.canvas.setAttribute("tabindex", "0");
    gl = app.canvas.getContext("webgl", {antialias:true, depth:true, stencil:true, alpha:true, preserveDrawingBuffer:true});
    gfxInit();
    audioInit();
    assetsInit();
    app.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    app.canvas.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    });
    app.canvas.addEventListener("mousemove", function(e) {
      app.mousePos = vec2(e.offsetX, e.offsetY).scale(1 / app.scale);
    });
    app.canvas.addEventListener("mousedown", function(e) {
      app.mouseState = "pressed";
    });
    app.canvas.addEventListener("mouseup", function(e) {
      app.mouseState = "released";
    });
    app.canvas.addEventListener("touchstart", function(e) {
      /** @const */ var t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
      app.mouseState = "pressed";
    });
    app.canvas.addEventListener("touchmove", function(e) {
      /** @const */ var t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
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
    app.canvas.focus();
    document.addEventListener("visibilitychange", function(e) {
      switch(document.visibilityState) {
        case "visible":
          app.skipTime = true;
          audio.ctx.resume();
          break;
        case "hidden":
          audio.ctx.suspend();
          break;
      }
    });
    if (gconf.debug) {
      debug.showLog = true;
    }
  }
  function processBtnState(s) {
    if (s === "pressed" || s === "rpressed") {
      return "down";
    }
    if (s === "released") {
      return "up";
    }
    return s;
  }
  function mousePos(layer) {
    /** @const */ var scene = curScene();
    if (!layer) {
      return app.mousePos.clone();
    } else {
      return scene.cam.ignore.includes(layer) ? mousePos() : scene.camMousePos;
    }
  }
  function mouseIsClicked() {
    return app.mouseState === "pressed";
  }
  function mouseIsDown() {
    return app.mouseState === "pressed" || app.mouseState === "down";
  }
  function mouseIsReleased() {
    return app.mouseState === "released";
  }
  function keyIsPressed(k) {
    return app.keyStates[k] === "pressed";
  }
  function keyIsPressedRep(k) {
    return app.keyStates[k] === "pressed" || app.keyStates[k] === "rpressed";
  }
  function keyIsDown(k) {
    return app.keyStates[k] === "pressed" || app.keyStates[k] === "rpressed" || app.keyStates[k] === "down";
  }
  function keyIsReleased(k) {
    return app.keyStates[k] === "released";
  }
  function charInputted() {
    return app.charInputted;
  }
  function dt() {
    return app.dt;
  }
  function time() {
    return app.time;
  }
  function screenshot() {
    return app.canvas.toDataURL();
  }
  function gfxInit() {
    gfx.mesh = makeBatchedMesh(65536, 65536);
    gfx.prog = makeProgram(defVertSrc, defFragSrc);
    gfx.defTex = makeTex(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
    /** @const */ var c = gconf.clearColor || [0, 0, 0, 1];
    gl.clearColor(c[0], c[1], c[2], c[3]);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.depthFunc(gl.LEQUAL);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }
  function flush() {
    gfx.mesh.flush();
    if (!gfx.curTex) {
      return;
    }
    gfx.mesh.bind();
    gfx.prog.bind();
    gfx.curTex.bind();
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE * 4, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE * 4, 12);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE * 4, 20);
    gl.enableVertexAttribArray(2);
    gl.drawElements(gl.TRIANGLES, gfx.mesh.count(), gl.UNSIGNED_SHORT, 0);
    gfx.drawCalls++;
    gfx.prog.unbind();
    gfx.mesh.unbind();
    gfx.curTex = null;
  }
  function gfxFrameStart() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gfx.drawCalls = 0;
    gfx.transformStack = [];
    gfx.transform = mat4();
  }
  function toNDC(pt) {
    return vec2(pt.x / width$jscomp$0() * 2 - 1, -pt.y / height$jscomp$0() * 2 + 1);
  }
  function gfxFrameEnd() {
    flush();
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
    if (!p || p.x === 0 && p.y === 0) {
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
  function makeBatchedMesh(vcount, icount) {
    /** @const */ var vbuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
    gl.bufferData(gl.ARRAY_BUFFER, vcount * 32, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /** @const */ var ibuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, icount * 2, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    var numIndices = 0;
    return {vbuf:vbuf, ibuf:ibuf, vqueue:[], iqueue:[], push:function(verts, indices) {
      /** @const */ var $jscomp$this = this;
      indices = indices.map(function(i) {
        return i + $jscomp$this.vqueue.length / STRIDE;
      });
      this.vqueue = this.vqueue.concat(verts);
      this.iqueue = this.iqueue.concat(indices);
    }, flush:function() {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(this.vqueue));
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf);
      gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue));
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      numIndices = this.iqueue.length;
      this.iqueue = [];
      this.vqueue = [];
    }, bind:function() {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf);
    }, unbind:function() {
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }, count:function() {
      return numIndices;
    }};
  }
  function makeTex(data) {
    /** @const */ var id = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return {id:id, width:data.width, height:data.height, bind:function() {
      gl.bindTexture(gl.TEXTURE_2D, this.id);
    }, unbind:function() {
      gl.bindTexture(gl.TEXTURE_2D, null);
    }};
  }
  function makeProgram(vertSrc, fragSrc) {
    /** @const */ var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertSrc);
    gl.compileShader(vertShader);
    var msg = gl.getShaderInfoLog(vertShader);
    if (msg) {
      error(msg);
    }
    /** @const */ var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragSrc);
    gl.compileShader(fragShader);
    msg = gl.getShaderInfoLog(fragShader);
    if (msg) {
      error(msg);
    }
    /** @const */ var id = gl.createProgram();
    gl.attachShader(id, vertShader);
    gl.attachShader(id, fragShader);
    gl.bindAttribLocation(id, 0, "a_pos");
    gl.bindAttribLocation(id, 1, "a_uv");
    gl.bindAttribLocation(id, 2, "a_color");
    gl.linkProgram(id);
    msg = gl.getProgramInfoLog(id);
    if (msg) {
      error(msg);
    }
    return {id:id, bind:function() {
      gl.useProgram(this.id);
    }, unbind:function() {
      gl.useProgram(null);
    }, sendFloat:function(name, val) {
      /** @const */ var loc = gl.getUniformLocation(this.id, name);
      gl.uniform1f(loc, val);
    }, sendVec2:function(name, x, y) {
      /** @const */ var loc = gl.getUniformLocation(this.id, name);
      gl.uniform2f(loc, x, y);
    }, sendVec3:function(name, x, y, z) {
      /** @const */ var loc = gl.getUniformLocation(this.id, name);
      gl.uniform3f(loc, x, y, z);
    }, sendVec4:function(name, x, y, z, w) {
      /** @const */ var loc = gl.getUniformLocation(this.id, name);
      gl.uniform4f(loc, x, y, z, w);
    }, sendMat4:function(name, m) {
      /** @const */ var loc = gl.getUniformLocation(this.id, name);
      gl.uniformMatrix4fv(loc, false, new Float32Array(m));
    }};
  }
  function makeFont(tex, gw, gh, chars) {
    /** @const */ var cols = tex.width / gw;
    /** @const */ var rows = tex.height / gh;
    /** @const */ var count = cols * rows;
    /** @const */ var qw = 1.0 / cols;
    /** @const */ var qh = 1.0 / rows;
    /** @const */ var map = {};
    chars = chars.split("");
    var $jscomp$iter$0 = $jscomp.makeIterator(chars.entries());
    for (var $jscomp$key$ = $jscomp$iter$0.next(); !$jscomp$key$.done; $jscomp$key$ = $jscomp$iter$0.next()) {
      /** @const */ var $jscomp$destructuring$var0 = $jscomp$key$.value;
      {
        var $jscomp$destructuring$var1 = $jscomp.makeIterator($jscomp$destructuring$var0);
        /** @const */ var i = $jscomp$destructuring$var1.next().value;
        /** @const */ var ch = $jscomp$destructuring$var1.next().value;
        {
          map[ch] = vec2(i % cols * qw, Math.floor(i / cols) * qh);
        }
      }
    }
    return {tex:tex, map:map, qw:qw, qh:qh};
  }
  function drawRaw(verts, indices, tex) {
    tex = tex === undefined ? gfx.defTex : tex;
    if (gfx.curTex !== tex) {
      flush();
      gfx.curTex = tex;
    }
    verts = verts.map(function(v) {
      /** @const */ var pt = toNDC(gfx.transform.multVec2(v.pos));
      return [pt.x, pt.y, v.pos.z, v.uv.x, v.uv.y, v.color.r, v.color.g, v.color.b, v.color.a];
    }).flat();
    gfx.mesh.push(verts, indices);
  }
  function drawQuad(conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var w = conf.width || 0;
    /** @const */ var h = conf.height || 0;
    /** @const */ var pos = conf.pos || vec2(0, 0);
    /** @const */ var origin = originPt(conf.origin || DEF_ORIGIN);
    /** @const */ var offset = origin.dot(vec2(w, h).scale(-.5));
    /** @const */ var scale = conf.scale === undefined ? vec2(1, 1) : vec2(conf.scale);
    /** @const */ var rot = conf.rot || 0;
    /** @const */ var q = conf.quad || quad(0, 0, 1, 1);
    /** @const */ var z = conf.z === undefined ? 1 : 1 - conf.z;
    /** @const */ var color = conf.color || rgba();
    pushTransform();
    pushTranslate(pos);
    pushScale(scale);
    pushRotateZ(rot);
    pushTranslate(offset);
    drawRaw([{pos:vec3(-w / 2, h / 2, z), uv:vec2(q.x, q.y + q.h), color:color}, {pos:vec3(-w / 2, -h / 2, z), uv:vec2(q.x, q.y), color:color}, {pos:vec3(w / 2, -h / 2, z), uv:vec2(q.x + q.w, q.y), color:color}, {pos:vec3(w / 2, h / 2, z), uv:vec2(q.x + q.w, q.y + q.h), color:color}], [0, 1, 3, 1, 2, 3], conf.tex);
    popTransform();
  }
  function drawSprite(name, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var spr = assets.sprites[name];
    if (!spr) {
      console.warn("sprite not found: " + name);
      return;
    }
    /** @const */ var q = Object.assign({}, spr.frames[conf.frame || 0]);
    if (conf.quad) {
      q.x += conf.quad.x * q.w;
      q.y += conf.quad.y * q.h;
      q.w *= conf.quad.w;
      q.h *= conf.quad.h;
    }
    /** @const */ var w = spr.tex.width * q.w;
    /** @const */ var h = spr.tex.height * q.h;
    drawQuad({tex:spr.tex, quad:q, width:w, height:h, pos:conf.pos, scale:conf.scale, rot:conf.rot, color:conf.color, origin:conf.origin, z:conf.z});
  }
  function drawRectStroke(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var offset = originPt(conf.origin || DEF_ORIGIN).dot(w, h).scale(0.5);
    /** @const */ var p1 = pos.add(vec2(-w / 2, -h / 2)).sub(offset);
    /** @const */ var p2 = pos.add(vec2(-w / 2, h / 2)).sub(offset);
    /** @const */ var p3 = pos.add(vec2(w / 2, h / 2)).sub(offset);
    /** @const */ var p4 = pos.add(vec2(w / 2, -h / 2)).sub(offset);
    drawLine(p1, p2, conf);
    drawLine(p2, p3, conf);
    drawLine(p3, p4, conf);
    drawLine(p4, p1, conf);
  }
  function drawRect(pos, w, h, conf) {
    conf = conf === undefined ? {} : conf;
    drawQuad({pos:pos, width:w, height:h, scale:conf.scale, rot:conf.rot, color:conf.color, origin:conf.origin, z:conf.z});
  }
  function drawLine(p1, p2, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var w = conf.width || 1;
    /** @const */ var h = p1.dist(p2);
    /** @const */ var rot = Math.PI / 2 - p1.angle(p2);
    drawQuad({pos:p1.add(p2).scale(0.5), width:w, height:h, rot:rot, origin:"center", color:conf.color, z:conf.z});
  }
  function drawText(txt, conf) {
    conf = conf === undefined ? {} : conf;
    drawFmtText(fmtText(txt, conf));
  }
  function drawFmtText(ftext) {
    var $jscomp$iter$1 = $jscomp.makeIterator(ftext.chars);
    for (var $jscomp$key$ch = $jscomp$iter$1.next(); !$jscomp$key$ch.done; $jscomp$key$ch = $jscomp$iter$1.next()) {
      /** @const */ var ch = $jscomp$key$ch.value;
      {
        drawQuad({tex:ch.tex, width:ch.tex.width * ch.quad.w, height:ch.tex.height * ch.quad.h, pos:ch.pos, scale:ch.scale, color:ch.color, quad:ch.quad, origin:"center", z:ch.z});
      }
    }
  }
  function drawPoly(conf) {
    conf = conf === undefined ? {} : conf;
  }
  function drawCircle(conf) {
    conf = conf === undefined ? {} : conf;
  }
  function width$jscomp$0() {
    return gl.drawingBufferWidth / app.scale;
  }
  function height$jscomp$0() {
    return gl.drawingBufferHeight / app.scale;
  }
  function originPt(orig) {
    if (isVec2(orig)) {
      return orig;
    }
    switch(orig) {
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
    }
  }
  function fmtText(text, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var fontName = conf.font || DEF_FONT;
    /** @const */ var font = assets.fonts[fontName];
    if (!font) {
      error("font not found: '" + fontName + "'");
      return {width:0, height:0, chars:[]};
    }
    /** @const */ var chars = (text + "").split("");
    /** @const */ var gw = font.qw * font.tex.width;
    /** @const */ var gh = font.qh * font.tex.height;
    /** @const */ var size = conf.size || gh;
    /** @const */ var scale = vec2(size / gh).dot(vec2(conf.scale || 1));
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
    /** @const */ var pos = vec2(conf.pos);
    /** @const */ var offset = originPt(conf.origin || DEF_ORIGIN).scale(0.5);
    /** @const */ var ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
    /** @const */ var oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);
    flines.forEach(function(line, ln) {
      /** @const */ var oxl = (tw - line.length * cw) * (offset.x + 0.5);
      line.forEach(function(char, cn) {
        /** @const */ var qpos = font.map[char];
        /** @const */ var x = cn * cw;
        /** @const */ var y = ln * ch;
        if (qpos) {
          fchars.push({tex:font.tex, quad:quad(qpos.x, qpos.y, font.qw, font.qh), ch:char, pos:vec2(pos.x + x + ox + oxl, pos.y + y + oy), color:conf.color, origin:conf.origin, scale:scale, z:conf.z});
        }
      });
    });
    return {width:tw, height:th, chars:fchars};
  }
  function audioInit() {
    audio.sounds = {};
    audio.ctx = new (window.AudioContext || window.webkitAudioContext);
    audio.gainNode = audio.ctx.createGain();
    audio.gainNode.gain.value = 1;
    audio.gainNode.connect(audio.ctx.destination);
  }
  function volume(v) {
    if (v !== undefined) {
      audio.gainNode.gain.value = v;
    }
    return audio.gainNode.gain.value;
  }
  function play(id, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var sound = audio.sounds[id];
    if (!sound) {
      error('sound not found: "' + id + '"');
      return;
    }
    /** @const */ var srcNode = audio.ctx.createBufferSource();
    srcNode.buffer = sound;
    srcNode.loop = conf.loop ? true : false;
    /** @const */ var gainNode = audio.ctx.createGain();
    srcNode.connect(gainNode);
    gainNode.connect(audio.gainNode);
    srcNode.start();
    var paused = false;
    var stopped = false;
    var speed = 1;
    /** @const */ var handle = {stop:function() {
      srcNode.stop();
      stopped = true;
    }, resume:function() {
      if (paused) {
        srcNode.playbackRate.value = speed;
        paused = false;
      }
    }, pause:function() {
      srcNode.playbackRate.value = 0;
      paused = true;
    }, paused:function() {
      return paused;
    }, stopped:function() {
      return stopped;
    }, speed:function(val) {
      if (val !== undefined) {
        speed = Math.clamp(val, 0, 2);
        if (!paused) {
          srcNode.playbackRate.value = speed;
        }
      }
      return speed;
    }, detune:function(val) {
      if (!srcNode.detune) {
        return 0;
      }
      if (val !== undefined) {
        srcNode.detune.value = Math.clamp(val, -1200, 1200);
      }
      return srcNode.detune.value;
    }, volume:function(val) {
      if (val !== undefined) {
        gainNode.gain.value = Math.clamp(val, 0, 3);
      }
      return gainNode.gain.value;
    }, loop:function() {
      srcNode.loop = true;
    }, unloop:function() {
      srcNode.loop = false;
    }};
    handle.speed(conf.speed);
    handle.detune(conf.detune);
    handle.volume(conf.volume);
    return handle;
  }
  function lerp(a, b, t) {
    return a + (b - a) * t * dt();
  }
  function map$jscomp$0(v, l1, h1, l2, h2) {
    return l2 + (v - l1) / (h1 - l1) * (h2 - l2);
  }
  function vec3(x, y, z) {
    return {x:x, y:y, z:z};
  }
  function vec2(x, y) {
    if (isVec2(x) && y === undefined) {
      return vec2(x.x, x.y);
    }
    return {x:x !== undefined ? x : 0, y:y !== undefined ? y : x !== undefined ? x : 0, clone:function() {
      return vec2(this.x, this.y);
    }, add:function(p2) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p2$25 = $jscomp$restParams;
        p2$25 = vec2.apply(null, $jscomp.arrayFromIterable(p2$25));
        return vec2(this.x + p2$25.x, this.y + p2$25.y);
      }
    }, sub:function(p2) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p2$26 = $jscomp$restParams;
        p2$26 = vec2.apply(null, $jscomp.arrayFromIterable(p2$26));
        return vec2(this.x - p2$26.x, this.y - p2$26.y);
      }
    }, scale:function(s) {
      return vec2(this.x * s, this.y * s);
    }, dist:function(p2) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p2$27 = $jscomp$restParams;
        p2$27 = vec2.apply(null, $jscomp.arrayFromIterable(p2$27));
        return Math.sqrt((this.x - p2$27.x) * (this.x - p2$27.x) + (this.y - p2$27.y) * (this.y - p2$27.y));
      }
    }, len:function() {
      return this.dist(vec2(0, 0));
    }, unit:function() {
      return this.scale(1 / this.len());
    }, normal:function() {
      return vec2(this.y, -this.x);
    }, dot:function(p2) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p2$28 = $jscomp$restParams;
        p2$28 = vec2.apply(null, $jscomp.arrayFromIterable(p2$28));
        return vec2(this.x * p2$28.x, this.y * p2$28.y);
      }
    }, angle:function(p2) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p2$29 = $jscomp$restParams;
        p2$29 = vec2.apply(null, $jscomp.arrayFromIterable(p2$29));
        return Math.atan2(this.y - p2$29.y, this.x - p2$29.x);
      }
    }, lerp:function(p2, t) {
      return vec2(lerp(this.x, p2.x, t), lerp(this.y, p2.y, t));
    }, eq:function(other) {
      return this.x === other.x && this.y === other.y;
    }, str:function() {
      return "(" + this.x + ", " + this.y + ")";
    }};
  }
  function vec2FromAngle(a) {
    return vec2(Math.cos(a), Math.sin(a));
  }
  function isVec2(p) {
    return p !== undefined && p.x !== undefined && p.y !== undefined;
  }
  function isColor(c) {
    return c !== undefined && c.r !== undefined && c.g !== undefined && c.b !== undefined && c.a !== undefined;
  }
  function rgb(r, g, b) {
    return rgba(r, g, b, 1);
  }
  function rgba(r, g, b, a$jscomp$0) {
    if (arguments.length === 0) {
      return rgba(1, 1, 1, 1);
    }
    return {r:r, g:g, b:b, a:a$jscomp$0 === undefined ? 1 : a$jscomp$0, clone:function() {
      return rgba(this.r, this.g, this.b, this.a);
    }, lighten:function(a) {
      return rgba(this.r + a, this.g + a, this.b + a, this.a);
    }, darken:function(a) {
      return this.lighten(-a);
    }, eq:function(other) {
      return this.r === other.r && this.g === other.g && this.b === other.g && this.a === other.a;
    }};
  }
  function quad(x, y, w, h) {
    return {x:x, y:y, w:w, h:h, clone:function() {
      return quad(this.x, this.y, this.w, this.h);
    }, eq:function(other) {
      return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
    }};
  }
  function colRectRect(r1, r2) {
    return r1.p2.x >= r2.p1.x && r1.p1.x <= r2.p2.x && r1.p2.y >= r2.p1.y && r1.p1.y <= r2.p2.y;
  }
  function overlapRectRect(r1, r2) {
    return r1.p2.x > r2.p1.x && r1.p1.x < r2.p2.x && r1.p2.y > r2.p1.y && r1.p1.y < r2.p2.y;
  }
  function colLineLine(l1, l2) {
    /** @const */ var a = ((l2.p2.x - l2.p1.x) * (l1.p1.y - l2.p1.y) - (l2.p2.y - l2.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
    /** @const */ var b = ((l1.p2.x - l1.p1.x) * (l1.p1.y - l2.p1.y) - (l1.p2.y - l1.p1.y) * (l1.p1.x - l2.p1.x)) / ((l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y));
    return a >= 0.0 && a <= 1.0 && b >= 0.0 && b <= 1.0;
  }
  function colRectLine(r, l) {
    if (colRectPt(r, l.p1) || colRectPt(r, l.p2)) {
      return true;
    }
    return colLineLine(l, makeLine(r.p1, vec2(r.p2.x, r.p1.y))) || colLineLine(l, makeLine(vec2(r.p2.x, r.p1.y), r.p2)) || colLineLine(l, makeLine(r.p2, vec2(r.p1.x, r.p2.y))) || colLineLine(l, makeLine(vec2(r.p1.x, r.p2.y), r.p1));
  }
  function colRectPt(r, pt) {
    return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
  }
  function makeLine(p1, p2) {
    return {p1:p1.clone(), p2:p2.clone(), clone:function() {
      return makeLine(this.p1, this.p2);
    }};
  }
  function mat4(m) {
    return {m:m ? [].concat($jscomp.arrayFromIterable(m)) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], clone:function() {
      return mat4(this.m);
    }, mult:function(other) {
      /** @const */ var out = [];
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          out[i * 4 + j] = this.m[0 * 4 + j] * other.m[i * 4 + 0] + this.m[1 * 4 + j] * other.m[i * 4 + 1] + this.m[2 * 4 + j] * other.m[i * 4 + 2] + this.m[3 * 4 + j] * other.m[i * 4 + 3];
        }
      }
      return mat4(out);
    }, multVec4:function(p) {
      return {x:p.x * this.m[0] + p.y * this.m[4] + p.z * this.m[8] + p.w * this.m[12], y:p.x * this.m[1] + p.y * this.m[5] + p.z * this.m[9] + p.w * this.m[13], z:p.x * this.m[2] + p.y * this.m[6] + p.z * this.m[10] + p.w * this.m[14], w:p.x * this.m[3] + p.y * this.m[7] + p.z * this.m[11] + p.w * this.m[15]};
    }, multVec3:function(p) {
      /** @const */ var p4 = this.multVec4({x:p.x, y:p.y, z:p.z, w:1.0});
      return {x:p4.x, y:p4.y, z:p4.z};
    }, scale:function(s) {
      return this.mult(mat4([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, translate:function(p) {
      return this.mult(mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1]));
    }, rotateX:function(a) {
      return this.mult(mat4([1, 0, 0, 0, 0, Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1]));
    }, rotateY:function(a) {
      return this.mult(mat4([Math.cos(a), 0, -Math.sin(a), 0, 0, 1, 0, 0, Math.sin(a), 0, Math.cos(a), 0, 0, 0, 0, 1]));
    }, rotateZ:function(a) {
      return this.mult(mat4([Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, multVec2:function(p) {
      return vec2(p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
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
      return mat4(out);
    }};
  }
  function wave(a, b, t, off) {
    t = t === undefined ? 1 : t;
    off = off === undefined ? 0 : off;
    return a + (Math.sin(time() * t + off) + 1) / 2 * (b - a);
  }
  function makeRng(seed) {
    return {seed:seed, gen:function(a, b) {
      if (isVec2(a) && isVec2(b)) {
        return vec2(this.gen(a.x, b.x), this.gen(a.y, b.y));
      } else {
        if (isColor(a) && isColor(b)) {
          return rgba(this.gen(a.r, b.r), this.gen(a.g, b.g), this.gen(a.b, b.b), this.gen(a.a, b.a));
        } else {
          if (a !== undefined) {
            if (b === undefined) {
              return this.gen() * a;
            } else {
              return this.gen() * (b - a) + a;
            }
          } else {
            if (a === undefined && b === undefined) {
              this.seed = (A * this.seed + C) % M;
              return this.seed / M;
            } else {
              error("invalid param to rand()");
            }
          }
        }
      }
    }};
  }
  function randSeed(seed) {
    defRNG.seed = seed;
  }
  function rand(a, b) {
    return defRNG.gen(a, b);
  }
  function chance(p) {
    return rand(0, 1) <= p;
  }
  function choose(list) {
    return list[Math.floor(rand(list.length))];
  }
  function deepCopy(input) {
    if (typeof input !== "object" || input === null) {
      return input;
    }
    /** @const */ var out = Array.isArray(input) ? [] : {};
    for (var key in input) {
      out[key] = deepCopy(input[key]);
    }
    return out;
  }
  function scene(name, cb) {
    game.scenes[name] = {init:cb, initialized:false, events:{add:[], update:[], draw:[], destroy:[], keyDown:[], keyPress:[], keyPressRep:[], keyRelease:[], mouseClick:[], mouseRelease:[], mouseDown:[], charInput:[]}, action:[], render:[], objs:new Map, lastID:0, timers:{}, lastTimerID:0, cam:{pos:vec2(width$jscomp$0() / 2, height$jscomp$0() / 2), scale:vec2(1, 1), angle:0, shake:0, ignore:[], mpos:vec2(0)}, camMousePos:vec2(0), layers:{}, gravity:DEF_GRAVITY, data:{}};
  }
  function curScene() {
    return game.scenes[game.curScene];
  }
  function sceneData() {
    return curScene().data;
  }
  function regDebugInputs() {
    /** @const */ var dbg = debug;
    keyPress("`", function() {
      dbg.showLog = !dbg.showLog;
      log("show log: " + (dbg.showLog ? "on" : "off"));
    });
    keyPress("f1", function() {
      dbg.showArea = !dbg.showArea;
      log("show area: " + (dbg.showArea ? "on" : "off"));
    });
    keyPress("f2", function() {
      dbg.hoverInfo = !dbg.hoverInfo;
      log("hover info: " + (dbg.hoverInfo ? "on" : "off"));
    });
    keyPress("f8", function() {
      dbg.paused = !dbg.paused;
      log("" + (dbg.paused ? "paused" : "unpaused"));
    });
    keyPress("f7", function() {
      dbg.timeScale = Math.clamp(dbg.timeScale - 0.2, 0, 2);
      log("time scale: " + dbg.timeScale.toFixed(1));
    });
    keyPress("f9", function() {
      dbg.timeScale = Math.clamp(dbg.timeScale + 0.2, 0, 2);
      log("time scale: " + dbg.timeScale.toFixed(1));
    });
    keyPress("f10", function() {
      stepFrame();
      log("stepped frame");
    });
  }
  function go(name, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$30 = $jscomp$restParams;
      reload(name);
      game.curScene = name;
      /** @const */ var scene$31 = game.scenes[name];
      if (!scene$31) {
        error("scene not found: '" + name + "'");
        return;
      }
      if (!scene$31.initialized) {
        scene$31.init.apply(scene$31, $jscomp.arrayFromIterable(args$30));
        if (gconf.debug) {
          regDebugInputs();
        }
        scene$31.initialized = true;
      }
    }
  }
  function reload(name) {
    if (!game.scenes[name]) {
      error("scene not found: '" + name + "'");
      return;
    }
    scene(name, game.scenes[name].init);
  }
  function layers(list, def) {
    /** @const */ var scene = curScene();
    if (!scene) {
      return;
    }
    /** @const */ var each = 0.5 / list.length;
    list.forEach(function(name, i) {
      scene.layers[name] = 0.5 + each * i;
    });
    if (def) {
      scene.defLayer = def;
    }
  }
  function camPos(pos) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var pos$32 = $jscomp$restParams;
      /** @const */ var cam = curScene().cam;
      if (pos$32.length > 0) {
        cam.pos = vec2.apply(null, $jscomp.arrayFromIterable(pos$32));
      }
      return cam.pos.clone();
    }
  }
  function camScale(scale) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var scale$33 = $jscomp$restParams;
      /** @const */ var cam = curScene().cam;
      if (scale$33.length > 0) {
        cam.scale = vec2.apply(null, $jscomp.arrayFromIterable(scale$33));
      }
      return cam.scale.clone();
    }
  }
  function camRot(angle) {
    /** @const */ var cam = curScene().cam;
    if (angle !== undefined) {
      cam.angle = angle;
    }
    return cam.angle;
  }
  function camShake(intensity) {
    /** @const */ var cam = curScene().cam;
    cam.shake = intensity;
  }
  function camIgnore(layers) {
    /** @const */ var cam = curScene().cam;
    cam.ignore = layers;
  }
  function add(comps) {
    /** @const */ var obj = {hidden:false, paused:false, _tags:[], _events:{add:[], update:[], draw:[], destroy:[], debugInfo:[]}, use:function(comp) {
      if (comp === undefined) {
        return;
      }
      /** @const */ var type = typeof comp;
      if (type === "string") {
        this._tags.push(comp);
        return;
      }
      if (type !== "object") {
        error("invalid comp type: " + type);
        return;
      }
      if (Array.isArray(comp)) {
        var $jscomp$iter$3 = $jscomp.makeIterator(comp);
        for (var $jscomp$key$c = $jscomp$iter$3.next(); !$jscomp$key$c.done; $jscomp$key$c = $jscomp$iter$3.next()) {
          /** @const */ var c = $jscomp$key$c.value;
          {
            this.use(c);
          }
        }
        return;
      }
      for (var k in comp) {
        if (typeof comp[k] === "function") {
          if (this._events[k]) {
            this._events[k].push(comp[k].bind(this));
          } else {
            this[k] = comp[k].bind(this);
          }
          continue;
        }
        this[k] = comp[k];
      }
    }, exists:function() {
      return this._sceneID !== undefined;
    }, is:function(tag) {
      if (tag === "*") {
        return true;
      }
      if (Array.isArray(tag)) {
        var $jscomp$iter$4 = $jscomp.makeIterator(tag);
        for (var $jscomp$key$t = $jscomp$iter$4.next(); !$jscomp$key$t.done; $jscomp$key$t = $jscomp$iter$4.next()) {
          /** @const */ var t = $jscomp$key$t.value;
          {
            if (!this._tags.includes(t)) {
              return false;
            }
          }
        }
        return true;
      }
      return this._tags.includes(tag);
    }, on:function(event, cb) {
      if (!this._events[event]) {
        this._events[event] = [];
      }
      this._events[event].push(cb);
    }, action:function(cb) {
      this.on("update", cb);
    }, trigger:function(event, args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
      }
      {
        var args$34 = $jscomp$restParams;
        if (this._events[event]) {
          var $jscomp$iter$5 = $jscomp.makeIterator(this._events[event]);
          for (var $jscomp$key$f = $jscomp$iter$5.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$5.next()) {
            /** @const */ var f = $jscomp$key$f.value;
            {
              f.apply(null, $jscomp.arrayFromIterable(args$34));
            }
          }
        }
        /** @const */ var scene$35 = curScene();
        /** @const */ var events = scene$35.events[event];
        if (events) {
          var $jscomp$iter$6 = $jscomp.makeIterator(events);
          for (var $jscomp$key$ev = $jscomp$iter$6.next(); !$jscomp$key$ev.done; $jscomp$key$ev = $jscomp$iter$6.next()) {
            /** @const */ var ev = $jscomp$key$ev.value;
            {
              if (this.is(ev.tag)) {
                ev.cb(this);
              }
            }
          }
        }
      }
    }, addTag:function(t) {
      if (this.is(t)) {
        return;
      }
      this._tags.push(t);
    }, removeTag:function(t) {
      /** @const */ var idx = this._tags.indexOf(t);
      if (idx > -1) {
        this._tags.splice(idx, 1);
      }
    }};
    obj.use(comps);
    /** @const */ var scene = curScene();
    scene.objs.set(scene.lastID, obj);
    obj._sceneID = scene.lastID;
    scene.lastID++;
    obj.trigger("add");
    var $jscomp$iter$7 = $jscomp.makeIterator(scene.events.add);
    for (var $jscomp$key$e = $jscomp$iter$7.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$7.next()) {
      /** @const */ var e = $jscomp$key$e.value;
      {
        if (obj.is(e.tag)) {
          e.cb(obj);
        }
      }
    }
    return obj;
  }
  function readd(obj) {
    if (!obj.exists()) {
      return;
    }
    /** @const */ var scene = curScene();
    scene.objs.delete(obj._sceneID);
    scene.objs.set(scene.lastID, obj);
    obj._sceneID = scene.lastID;
    scene.lastID++;
    return obj;
  }
  function on(event, tag, cb) {
    /** @const */ var scene = curScene();
    if (!scene.events[event]) {
      scene.events[event] = [];
    }
    scene.events[event].push({tag:tag, cb:cb});
  }
  function action(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      curScene().action.push(tag);
    } else {
      on("update", tag, cb);
    }
  }
  function render(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      curScene().render.push(tag);
    } else {
      on("update", tag, cb);
    }
  }
  function collides(t1, t2, f) {
    action(t1, function(o1) {
      o1._checkCollisions(t2, function(o2) {
        f(o1, o2);
      });
    });
  }
  function overlaps(t1, t2, f) {
    action(t1, function(o1) {
      o1._checkOverlaps(t2, function(o2) {
        f(o1, o2);
      });
    });
  }
  function clicks(t, f) {
    action(t, function(o) {
      if (o.isClicked()) {
        f(o);
      }
    });
  }
  function wait(t, f) {
    if (f) {
      /** @const */ var scene$36 = curScene();
      scene$36.timers[scene$36.lastTimerID] = {time:t, cb:f};
      scene$36.lastTimerID++;
    } else {
      return new Promise(function(r) {
        return wait(t, r);
      });
    }
  }
  function loop(t, f) {
    /** @const */ var newF = function() {
      f();
      wait(t, newF);
    };
    newF();
  }
  function pushKeyEvent(e, k, f) {
    if (Array.isArray(k)) {
      var $jscomp$iter$8 = $jscomp.makeIterator(k);
      for (var $jscomp$key$key = $jscomp$iter$8.next(); !$jscomp$key$key.done; $jscomp$key$key = $jscomp$iter$8.next()) {
        /** @const */ var key = $jscomp$key$key.value;
        {
          pushKeyEvent(e, key, f);
        }
      }
    } else {
      /** @const */ var scene$37 = curScene();
      scene$37.events[e].push({key:k, cb:f});
    }
  }
  function keyDown(k, f) {
    pushKeyEvent("keyDown", k, f);
  }
  function keyPress(k, f) {
    pushKeyEvent("keyPress", k, f);
  }
  function keyPressRep(k, f) {
    pushKeyEvent("keyPressRep", k, f);
  }
  function keyRelease(k, f) {
    pushKeyEvent("keyRelease", k, f);
  }
  function charInput(f) {
    /** @const */ var scene = curScene();
    scene.events.charInput.push({cb:f});
  }
  function mouseDown(f) {
    /** @const */ var scene = curScene();
    scene.events.mouseDown.push({cb:f});
  }
  function mouseClick(f) {
    /** @const */ var scene = curScene();
    scene.events.mouseClick.push({cb:f});
  }
  function mouseRelease(f) {
    /** @const */ var scene = curScene();
    scene.events.mouseRelease.push({cb:f});
  }
  function get(t) {
    /** @const */ var scene = curScene();
    /** @const */ var objs = [].concat($jscomp.arrayFromIterable(scene.objs.values()));
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
      get().forEach(t);
    } else {
      get(t).forEach(f);
    }
  }
  function revery(t, f) {
    if (typeof t === "function" && f === undefined) {
      get().reverse().forEach(t);
    } else {
      get(t).reverse().forEach(f);
    }
  }
  function destroy(obj) {
    if (!obj.exists()) {
      return;
    }
    /** @const */ var scene = curScene();
    if (!scene) {
      return;
    }
    obj.trigger("destroy");
    scene.objs.delete(obj._sceneID);
    delete obj._sceneID;
  }
  function destroyAll(t) {
    every(t, function(obj) {
      destroy(obj);
    });
  }
  function gravity(g) {
    /** @const */ var scene = curScene();
    if (g !== undefined) {
      scene.gravity = g;
    }
    return scene.gravity;
  }
  function gameFrame(ignorePause) {
    /** @const */ var scene = curScene();
    if (!scene) {
      error("scene not found: '" + game.curScene + "'");
      return;
    }
    /** @const */ var doUpdate = ignorePause || !debug.paused;
    if (doUpdate) {
      for (var id in scene.timers) {
        /** @const */ var t = scene.timers[id];
        t.time -= dt();
        if (t.time <= 0) {
          t.cb();
          delete scene.timers[id];
        }
      }
    }
    gfxFrameStart();
    revery(function(obj) {
      if (!obj.paused && doUpdate) {
        obj.trigger("update");
      }
    });
    if (doUpdate) {
      var $jscomp$iter$9 = $jscomp.makeIterator(scene.action);
      for (var $jscomp$key$f = $jscomp$iter$9.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$9.next()) {
        /** @const */ var f = $jscomp$key$f.value;
        {
          f();
        }
      }
    }
    /** @const */ var size = vec2(width$jscomp$0(), height$jscomp$0());
    /** @const */ var cam = scene.cam;
    /** @const */ var shake = vec2FromAngle(rand(0, Math.PI * 2)).scale(cam.shake);
    cam.shake = lerp(cam.shake, 0, 5);
    /** @const */ var camMat = mat4().translate(size.scale(0.5)).scale(cam.scale).rotateZ(cam.angle).translate(size.scale(-.5)).translate(cam.pos.scale(-1).add(size.scale(0.5)).add(shake));
    scene.camMousePos = camMat.invert().multVec2(mousePos());
    every(function(obj) {
      if (!obj.hidden) {
        pushTransform();
        if (!cam.ignore.includes(obj.layer)) {
          pushMatrix(camMat);
        }
        obj.trigger("draw");
        popTransform();
      }
    });
    var $jscomp$iter$10 = $jscomp.makeIterator(scene.render);
    for ($jscomp$key$f = $jscomp$iter$10.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$10.next()) {
      /** @const */ var f$38 = $jscomp$key$f.value;
      {
        f$38();
      }
    }
    game.log = game.log.filter(function(l) {
      return l.timer < debug.logTime;
    });
    if (game.log.length > debug.logMax) {
      game.log = game.log.slice(0, debug.logMax);
    }
    /** @const */ var pos = vec2(0, height$jscomp$0());
    if (debug.showLog) {
      game.log.forEach(function(log, i) {
        /** @const */ var col = function() {
          switch(log.type) {
            case "log":
              return rgb(1, 1, 1);
            case "error":
              return rgb(1, 0, 0.5);
          }
        }();
        /** @const */ var ftext = fmtText(log.msg, {pos:pos, origin:"botleft", color:col, z:1});
        drawRect(pos, ftext.width, ftext.height, {origin:"botleft", color:rgba(0, 0, 0, 0.5), z:1});
        drawFmtText(ftext);
        log.timer += dt();
        pos.y -= ftext.height;
      });
    }
    gfxFrameEnd();
  }
  function start(name, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$39 = $jscomp$restParams;
      /** @const */ var frame = function(t) {
        /** @const */ var realTime = t / 1000;
        /** @const */ var realDt = realTime - app.realTime;
        app.realTime = realTime;
        if (!app.skipTime) {
          app.dt = realDt * debug.timeScale;
          app.time += app.dt;
        }
        app.skipTime = false;
        if (!game.loaded) {
          /** @const */ var progress = loadProgress();
          if (progress === 1) {
            game.loaded = true;
            go.apply(null, [name].concat($jscomp.arrayFromIterable(args$39)));
          } else {
            gfxFrameStart();
            /** @const */ var w = width$jscomp$0() / 2;
            /** @const */ var h = 12;
            /** @const */ var pos$40 = vec2(width$jscomp$0() / 2, height$jscomp$0() / 2).sub(vec2(w / 2, h / 2));
            gfxFrameStart();
            drawRectStroke(pos$40, w, h, {width:2});
            drawRect(pos$40, w * progress, h);
            gfxFrameEnd();
          }
        } else {
          /** @const */ var scene$41 = curScene();
          if (!scene$41) {
            error("scene not found: '" + game.curScene + "'");
            return;
          }
          var $jscomp$iter$11 = $jscomp.makeIterator(scene$41.events.charInput);
          for (var $jscomp$key$e = $jscomp$iter$11.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$11.next()) {
            /** @const */ var e = $jscomp$key$e.value;
            {
              charInputted().forEach(e.cb);
            }
          }
          var $jscomp$iter$12 = $jscomp.makeIterator(scene$41.events.keyDown);
          for ($jscomp$key$e = $jscomp$iter$12.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$12.next()) {
            /** @const */ var e$42 = $jscomp$key$e.value;
            {
              if (keyIsDown(e$42.key)) {
                e$42.cb(e$42.key);
              }
            }
          }
          var $jscomp$iter$13 = $jscomp.makeIterator(scene$41.events.keyPress);
          for ($jscomp$key$e = $jscomp$iter$13.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$13.next()) {
            /** @const */ var e$43 = $jscomp$key$e.value;
            {
              if (keyIsPressed(e$43.key)) {
                e$43.cb(e$43.key);
              }
            }
          }
          var $jscomp$iter$14 = $jscomp.makeIterator(scene$41.events.keyPressRep);
          for ($jscomp$key$e = $jscomp$iter$14.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$14.next()) {
            /** @const */ var e$44 = $jscomp$key$e.value;
            {
              if (keyIsPressedRep(e$44.key)) {
                e$44.cb(e$44.key);
              }
            }
          }
          var $jscomp$iter$15 = $jscomp.makeIterator(scene$41.events.keyRelease);
          for ($jscomp$key$e = $jscomp$iter$15.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$15.next()) {
            /** @const */ var e$45 = $jscomp$key$e.value;
            {
              if (keyIsReleased(e$45.key)) {
                e$45.cb(e$45.key);
              }
            }
          }
          var $jscomp$iter$16 = $jscomp.makeIterator(scene$41.events.mouseDown);
          for ($jscomp$key$e = $jscomp$iter$16.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$16.next()) {
            /** @const */ var e$46 = $jscomp$key$e.value;
            {
              if (mouseIsDown()) {
                e$46.cb();
              }
            }
          }
          var $jscomp$iter$17 = $jscomp.makeIterator(scene$41.events.mouseClick);
          for ($jscomp$key$e = $jscomp$iter$17.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$17.next()) {
            /** @const */ var e$47 = $jscomp$key$e.value;
            {
              if (mouseIsClicked()) {
                e$47.cb();
              }
            }
          }
          var $jscomp$iter$18 = $jscomp.makeIterator(scene$41.events.mouseRelease);
          for ($jscomp$key$e = $jscomp$iter$18.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$18.next()) {
            /** @const */ var e$48 = $jscomp$key$e.value;
            {
              if (mouseIsReleased()) {
                e$48.cb();
              }
            }
          }
          gameFrame();
          for (var k in app.keyStates) {
            app.keyStates[k] = processBtnState(app.keyStates[k]);
          }
          app.mouseState = processBtnState(app.mouseState);
          app.charInputted = [];
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }
  function pos(args$jscomp$0) {
    var $jscomp$restParams$jscomp$0 = [];
    for (var $jscomp$restIndex$jscomp$0 = 0; $jscomp$restIndex$jscomp$0 < arguments.length; ++$jscomp$restIndex$jscomp$0) {
      $jscomp$restParams$jscomp$0[$jscomp$restIndex$jscomp$0 - 0] = arguments[$jscomp$restIndex$jscomp$0];
    }
    {
      var args$49 = $jscomp$restParams$jscomp$0;
      return {pos:vec2.apply(null, $jscomp.arrayFromIterable(args$49)), move:function(args) {
        var $jscomp$restParams = [];
        for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
          $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
        }
        {
          var args$50 = $jscomp$restParams;
          /** @const */ var p = vec2.apply(null, $jscomp.arrayFromIterable(args$50));
          /** @const */ var dx = p.x * dt();
          /** @const */ var dy = p.y * dt();
          this.pos.x += dx;
          this.pos.y += dy;
        }
      }, debugInfo:function() {
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
      var args$51 = $jscomp$restParams;
      return {scale:vec2.apply(null, $jscomp.arrayFromIterable(args$51)), flipX:function(s) {
        this.scale.x = Math.sign(s) * Math.abs(this.scale.x);
      }, flipY:function(s) {
        this.scale.y = Math.sign(s) * Math.abs(this.scale.y);
      }};
    }
  }
  function rotate(r) {
    return {angle:r};
  }
  function color$jscomp$0(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$52 = $jscomp$restParams;
      return {color:rgba.apply(null, $jscomp.arrayFromIterable(args$52))};
    }
  }
  function origin(o) {
    return {origin:o};
  }
  function layer$jscomp$0(z) {
    return {layer:z, debugInfo:function() {
      /** @const */ var scene = curScene();
      return {layer:this.layer || scene.defLayer};
    }};
  }
  function area(p1$jscomp$0, p2$jscomp$0) {
    /** @const */ var colliding = {};
    /** @const */ var overlapping = {};
    return {area:{p1:p1$jscomp$0, p2:p2$jscomp$0}, areaWidth:function() {
      /** @const */ var $jscomp$destructuring$var2 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var2.p1;
      /** @const */ var p2 = $jscomp$destructuring$var2.p2;
      return p2.x - p1.x;
    }, areaHeight:function() {
      /** @const */ var $jscomp$destructuring$var3 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var3.p1;
      /** @const */ var p2 = $jscomp$destructuring$var3.p2;
      return p2.y - p1.y;
    }, draw:function() {
      /** @const */ var showArea = debug.showArea;
      /** @const */ var hoverInfo = debug.hoverInfo;
      if (!showArea) {
        return;
      }
      var width = showArea.width || 2;
      /** @const */ var color = showArea.color || rgba(0, 1, 1, 1);
      /** @const */ var hovered = this.isHovered();
      if (hoverInfo && hovered) {
        width += 2;
      }
      /** @const */ var a = this._worldArea();
      /** @const */ var pos = vec2((a.p1.x + a.p2.x) / 2, (a.p1.y + a.p2.y) / 2);
      /** @const */ var w = a.p2.x - a.p1.x;
      /** @const */ var h = a.p2.y - a.p1.y;
      drawRectStroke(a.p1, a.p2.x - a.p1.x, a.p2.y - a.p1.y, {width:width / app.scale, color:color, z:0.9});
      /** @const */ var mpos = mousePos(this.layer || curScene().defLayer);
      if (hoverInfo && hovered) {
        /** @const */ var padding = vec2(6, 6).scale(1 / app.scale);
        var bw = 0;
        var bh = 0;
        /** @const */ var lines = [];
        /** @const */ var addLine = function(txt) {
          /** @const */ var ftxt = fmtText(txt, {size:12 / app.scale, pos:mpos.add(vec2(padding.x, padding.y + bh)), z:1});
          lines.push(ftxt);
          bw = ftxt.width > bw ? ftxt.width : bw;
          bh += ftxt.height;
        };
        var $jscomp$iter$19 = $jscomp.makeIterator(this._tags);
        for (var $jscomp$key$tag = $jscomp$iter$19.next(); !$jscomp$key$tag.done; $jscomp$key$tag = $jscomp$iter$19.next()) {
          /** @const */ var tag = $jscomp$key$tag.value;
          {
            addLine('"' + tag + '"');
          }
        }
        var $jscomp$iter$20 = $jscomp.makeIterator(this._events.debugInfo);
        for (var $jscomp$key$debugInfo = $jscomp$iter$20.next(); !$jscomp$key$debugInfo.done; $jscomp$key$debugInfo = $jscomp$iter$20.next()) {
          /** @const */ var debugInfo = $jscomp$key$debugInfo.value;
          {
            /** @const */ var info = debugInfo();
            for (var field in info) {
              addLine(field + ": " + info[field]);
            }
          }
        }
        bw += padding.x * 2;
        bh += padding.y * 2;
        drawRect(mpos, bw, bh, {color:rgba(0, 0, 0, 1), z:1});
        drawRectStroke(mpos, bw, bh, {width:(width - 2) / app.scale, color:rgba(0, 1, 1, 1), z:1});
        var $jscomp$iter$21 = $jscomp.makeIterator(lines);
        for (var $jscomp$key$line = $jscomp$iter$21.next(); !$jscomp$key$line.done; $jscomp$key$line = $jscomp$iter$21.next()) {
          /** @const */ var line = $jscomp$key$line.value;
          {
            drawFmtText(line);
          }
        }
      }
    }, clicks:function(f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        if ($jscomp$this.isClicked()) {
          f();
        }
      });
    }, isClicked:function() {
      return mouseIsClicked() && this.isHovered();
    }, hovers:function(f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        if ($jscomp$this.isHovered()) {
          f();
        }
      });
    }, hasPt:function(pt) {
      /** @const */ var a = this._worldArea();
      return colRectPt({p1:a.p1, p2:a.p2}, pt);
    }, isHovered:function() {
      return this.hasPt(mousePos(this.layer || curScene().defLayer));
    }, resolve:function() {
      /** @const */ var $jscomp$this = this;
      /** @const */ var targets = [];
      every(function(other) {
        if (other === $jscomp$this) {
          return;
        }
        if (!other.solid) {
          return;
        }
        if (!other.area) {
          return;
        }
        if ($jscomp$this.layer !== other.layer) {
          return;
        }
        /** @const */ var a1 = $jscomp$this._worldArea();
        /** @const */ var a2 = other._worldArea();
        if (!colRectRect(a1, a2)) {
          return;
        }
        /** @const */ var disLeft = a1.p2.x - a2.p1.x;
        /** @const */ var disRight = a2.p2.x - a1.p1.x;
        /** @const */ var disTop = a1.p2.y - a2.p1.y;
        /** @const */ var disBottom = a2.p2.y - a1.p1.y;
        /** @const */ var min = Math.min(disLeft, disRight, disTop, disBottom);
        switch(min) {
          case disLeft:
            $jscomp$this.pos.x -= disLeft;
            var side = "right";
            break;
          case disRight:
            $jscomp$this.pos.x += disRight;
            side = "left";
            break;
          case disTop:
            $jscomp$this.pos.y -= disTop;
            side = "bottom";
            break;
          case disBottom:
            $jscomp$this.pos.y += disBottom;
            side = "top";
            break;
        }
        targets.push({obj:other, side:side});
      });
      return targets;
    }, _checkCollisions:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      every(tag, function(obj) {
        if ($jscomp$this === obj) {
          return;
        }
        if (colliding[obj._sceneID]) {
          return;
        }
        if ($jscomp$this.isCollided(obj)) {
          f(obj);
          colliding[obj._sceneID] = obj;
        }
      });
      for (var id in colliding) {
        /** @const */ var obj$jscomp$0 = colliding[id];
        if (!this.isCollided(obj$jscomp$0)) {
          delete colliding[id];
        }
      }
    }, collides:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        $jscomp$this._checkCollisions(tag, f);
      });
    }, _checkOverlaps:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      every(tag, function(obj) {
        if ($jscomp$this === obj) {
          return;
        }
        if (overlapping[obj._sceneID]) {
          return;
        }
        if ($jscomp$this.isOverlapped(obj)) {
          f(obj);
          overlapping[obj._sceneID] = obj;
        }
      });
      for (var id in overlapping) {
        /** @const */ var obj$jscomp$0 = overlapping[id];
        if (!this.isOverlapped(obj$jscomp$0)) {
          delete overlapping[id];
        }
      }
    }, overlaps:function(tag, f) {
      /** @const */ var $jscomp$this = this;
      this.action(function() {
        $jscomp$this._checkOverlaps(tag, f);
      });
    }, _worldArea:function() {
      /** @const */ var a = this.area;
      /** @const */ var pos = this.pos || vec2(0);
      /** @const */ var scale = this.scale || vec2(1);
      /** @const */ var p1 = pos.add(a.p1.dot(scale));
      /** @const */ var p2 = pos.add(a.p2.dot(scale));
      /** @const */ var area = {p1:vec2(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y)), p2:vec2(Math.max(p1.x, p2.x), Math.max(p1.y, p2.y))};
      return area;
    }, isCollided:function(other) {
      if (!other.area) {
        return false;
      }
      if (this.layer !== other.layer) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return colRectRect(a1, a2);
    }, isOverlapped:function(other) {
      if (!other.area) {
        return false;
      }
      if (this.layer !== other.layer) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return overlapRectRect(a1, a2);
    }};
  }
  function getAreaFromSize(w, h, o) {
    /** @const */ var size = vec2(w, h);
    /** @const */ var offset = originPt(o || DEF_ORIGIN).dot(size).scale(-.5);
    return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
  }
  function sprite(id, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var spr$jscomp$0 = assets.sprites[id];
    if (!spr$jscomp$0) {
      error('sprite not found: "' + id + '"');
      return;
    }
    /** @const */ var q$jscomp$0 = Object.assign({}, spr$jscomp$0.frames[0]);
    if (conf.quad) {
      q$jscomp$0.x += conf.quad.x * q$jscomp$0.w;
      q$jscomp$0.y += conf.quad.y * q$jscomp$0.h;
      q$jscomp$0.w *= conf.quad.w;
      q$jscomp$0.h *= conf.quad.h;
    }
    /** @const */ var width = spr$jscomp$0.tex.width * q$jscomp$0.w;
    /** @const */ var height = spr$jscomp$0.tex.height * q$jscomp$0.h;
    var timer = 0;
    var looping = false;
    var curAnim = null;
    /** @const */ var events = {};
    return {spriteID:id, width:width, height:height, animSpeed:conf.animSpeed || 0.1, frame:conf.frame || 0, quad:conf.quad || quad(0, 0, 1, 1), add:function() {
      if (!this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      /** @const */ var spr = assets.sprites[this.spriteID];
      /** @const */ var q = spr.frames[this.frame];
      drawSprite(this.spriteID, {pos:this.pos, scale:this.scale, rot:this.angle, color:this.color, frame:this.frame, origin:this.origin, quad:this.quad, z:scene.layers[this.layer || scene.defLayer]});
    }, update:function() {
      if (!curAnim) {
        return;
      }
      /** @const */ var speed = this.animSpeed;
      /** @const */ var spr = assets.sprites[this.spriteID];
      /** @const */ var anim = spr.anims[curAnim];
      timer += dt();
      if (timer >= this.animSpeed) {
        this.frame++;
        if (this.frame > anim[1]) {
          if (looping) {
            this.frame = anim[0];
          } else {
            this.frame--;
            this.stop();
          }
        }
        timer -= this.animSpeed;
      }
    }, play:function(name, loop) {
      /** @const */ var spr = assets.sprites[this.spriteID];
      /** @const */ var anim = spr.anims[name];
      if (!anim) {
        error("anim not found: " + name);
        return;
      }
      if (curAnim) {
        this.stop();
      }
      curAnim = name;
      this.frame = anim[0];
      looping = loop === undefined ? true : loop;
      if (events[name] && events[name].play) {
        events[name].play();
      }
    }, stop:function() {
      if (!curAnim) {
        return;
      }
      if (events[curAnim] && events[curAnim].end) {
        events[curAnim].end();
      }
      curAnim = null;
    }, numFrames:function() {
      /** @const */ var spr = assets.sprites[this.spriteID];
      return spr.frames.length;
    }, curAnim:function() {
      return curAnim;
    }, onAnimPlay:function(name, cb) {
      if (!events[name]) {
        events[name] = {};
      }
      events[name].play = cb;
    }, onAnimEnd:function(name, cb) {
      if (!events[name]) {
        events[name] = {};
      }
      events[name].end = cb;
    }, debugInfo:function() {
      /** @const */ var info = {};
      if (curAnim) {
        info.curAnim = '"' + curAnim + '"';
      }
      return info;
    }};
  }
  function text$jscomp$0(t, size, conf) {
    conf = conf === undefined ? {} : conf;
    return {text:t, textSize:size, font:conf.font, add:function() {
      if (!this.area && !conf.noArea) {
        /** @const */ var scene$53 = curScene();
        /** @const */ var ftext = fmtText(this.text + "", {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, font:this.font, width:conf.width, z:scene$53.layers[this.layer || scene$53.defLayer]});
        this.width = ftext.width / (this.scale && this.scale.x || 1);
        this.height = ftext.height / (this.scsale && this.scale.y || 1);
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      /** @const */ var ftext = fmtText(this.text + "", {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, font:this.font, width:conf.width, z:scene.layers[this.layer || scene.defLayer]});
      this.width = ftext.tw;
      this.height = ftext.th;
      drawFmtText(ftext);
    }};
  }
  function rect(w, h, conf) {
    conf = conf === undefined ? {} : conf;
    return {width:w, height:h, add:function() {
      if (!this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      drawRect(this.pos, this.width, this.height, {scale:this.scale, rot:this.angle, color:this.color, origin:this.origin, z:scene.layers[this.layer || scene.defLayer]});
    }};
  }
  function solid() {
    return {solid:true};
  }
  function timer() {
    return {time:0, update:function() {
      this.time += dt();
    }};
  }
  function body(conf) {
    conf = conf === undefined ? {} : conf;
    var velY = 0;
    var curPlatform = null;
    /** @const */ var maxVel = conf.maxVel || DEF_MAX_VEL;
    return {jumpForce:conf.jumpForce !== undefined ? conf.jumpForce : DEF_JUMP_FORCE, update:function() {
      this.move(0, velY);
      /** @const */ var targets = this.resolve();
      var justOff = false;
      if (curPlatform) {
        if (!curPlatform.exists() || !this.isCollided(curPlatform)) {
          curPlatform = null;
          justOff = true;
        }
      }
      if (!curPlatform) {
        velY = Math.min(velY + gravity() * dt(), maxVel);
        var $jscomp$iter$22 = $jscomp.makeIterator(targets);
        for (var $jscomp$key$target = $jscomp$iter$22.next(); !$jscomp$key$target.done; $jscomp$key$target = $jscomp$iter$22.next()) {
          /** @const */ var target = $jscomp$key$target.value;
          {
            if (target.side === "bottom" && velY > 0) {
              curPlatform = target.obj;
              velY = 0;
              if (!justOff) {
                this.trigger("grounded", curPlatform);
              }
            } else {
              if (target.side === "top" && velY < 0) {
                velY = 0;
                this.trigger("headbump", target.obj);
              }
            }
          }
        }
      }
    }, grounded:function() {
      return curPlatform !== null;
    }, jump:function(force) {
      curPlatform = null;
      velY = -force || -this.jumpForce;
    }};
  }
  function dbg() {
    return debug;
  }
  function fps() {
    return 1.0 / dt();
  }
  function objCount() {
    /** @const */ var scene = curScene();
    return scene.objs.size;
  }
  function stepFrame() {
    gameFrame(true);
  }
  function error(msg) {
    console.error(msg);
    game.log.unshift({type:"error", msg:msg, timer:0});
  }
  function log(msg) {
    console.log(msg);
    game.log.unshift({type:"log", msg:msg, timer:0});
  }
  function addLevel(arr, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var objs = [];
    /** @const */ var offset = vec2(conf.pos);
    var longRow = 0;
    /** @const */ var level = {getPos:function(p) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var p$54 = $jscomp$restParams;
        p$54 = vec2.apply(null, $jscomp.arrayFromIterable(p$54));
        return vec2(offset.x + p$54.x * conf.width, offset.y + p$54.y * conf.height);
      }
    }, spawn:function(sym, p$jscomp$0) {
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
      if (comps) {
        comps.push(pos(offset.x + p$jscomp$0.x * conf.width, offset.y + p$jscomp$0.y * conf.height));
        /** @const */ var obj = add(comps);
        objs.push(obj);
        obj.use({gridPos:p$jscomp$0.clone(), setGridPos:function(p) {
          this.gridPos = p.clone();
          this.pos = vec2(offset.x + this.gridPos.x * conf.width, offset.y + this.gridPos.y * conf.height);
        }, moveLeft:function() {
          this.setGridPos(this.gridPos.add(vec2(-1, 0)));
        }, moveRight:function() {
          this.setGridPos(this.gridPos.add(vec2(1, 0)));
        }, moveUp:function() {
          this.setGridPos(this.gridPos.add(vec2(0, -1)));
        }, moveDown:function() {
          this.setGridPos(this.gridPos.add(vec2(0, 1)));
        }});
      }
    }, width:function() {
      return longRow * conf.width;
    }, height:function() {
      return arr.length * conf.height;
    }, destroy:function() {
      var $jscomp$iter$23 = $jscomp.makeIterator(objs);
      for (var $jscomp$key$obj = $jscomp$iter$23.next(); !$jscomp$key$obj.done; $jscomp$key$obj = $jscomp$iter$23.next()) {
        /** @const */ var obj = $jscomp$key$obj.value;
        {
          destroy(obj);
        }
      }
    }};
    arr.forEach(function(row, i) {
      if (typeof row === "string") {
        row = row.split("");
      }
      longRow = Math.max(row.length, longRow);
      row.forEach(function(sym, j) {
        level.spawn(sym, vec2(j, i));
      });
    });
    return level;
  }
  gconf = gconf === undefined ? {} : gconf;
  /** @const */ var ASCII_CHARS = " !\"#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  /** @const */ var DEF_FONT = "unscii";
  /** @const */ var UNSCII_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvgAAAAICAYAAACML4vTAAAAAXNSR0IArs4c6QAABo1JREFUeJzdW9uO5SgMJKv9/1/OPnQnDabKVQb6zGgtjeYkvmJsYwh9tQLc931//7yu63retdba+/4hTZ6ZDMQ3wHVdPe1kXk/60He2D/J7HLMhGyOwHQKji/o/BYmv40DecRq+cfgr8l8dhBfRLPF3v6F9Cu/ObwFPYxRBFptE7mA/wQ2yWMwI/1r+y3Bq/h4H3TwJ3fl16xcz4UfQPB+oplF9QJ7id+SjMVjz/wf5e5rK+hKfB9+a86PsZTIm+7P6942jufsqSvg7/END5WSg6ojLt7uurcjL6v8pfQ4doinIL9v+f4HTMfQ3gopR5gOQ+6jviPj7EfLvqQGsQFiXb/B7KMBGc/rQ3x1ONuHmBmOQfd93XwDVguPI/3Uw/fc8Dz5s4/xMogU/xScNKILJb4W5Q/YyXtt+IWcyF+GzMajY7ehZbCK5vf2sGczmJ+J6O6J8pT8dB5HPwPU706/knsjfVRlxvhje0Zn5H+F/m/+kf6uA1oxqPVD1Jeqj+kHuRr5x0ZzzU8nJANrCalDS5A54xV9Ynyd+p/6bNXSiBfY5Dk1pkPyObzI0s10ceFr+3+FXsMq/qk+BM97TusU6bIvp+Flf1ufuy/OJBh817s/vlcKOaOHgRBOeyu0nppt4uIEA+gcboLLv96oIu18IFLhfSRooMh19hsvkKyNjkCo6R+fXC3ya/ddAdjrekxH2i8VmiH23oGTNYy+n2iBHyPhYjtWV8IJtyz38BW6a42JMKuJtn30IfgJT+PdkziayaP1W+OpX6J6HyJ+ac8MXaJEvNfnGGheVow34neAn/tag30aByRfI5PDBlZ9tzNghHuJDMnZpGO37rMam/L/Jj2w6wY/8TH1gPCNfQ3zxAJTZ3wPKkS9EIS9bm3OfbDonof9YWgw7gCJ0uqF+390/JIs1QZE+yhjkKOcifMKDdMX3kYbxKB3xn8fsNZEPPm2SBQ7KD/OkkgXZfYV/PV/U/+rok0IswDH+HDyCmAcuXs1LHP8gBzTyd487dIrgAPPfC489wK6K/GwjouYoo6nmZQXUHCtA9RThd+yX87fIn9X3T8Kkl2yC3zlS+NZK9XUClruFjU3093IcBFui8U79Zfg74Flj7dRHJJ/1Hq58xAs3JAdgNb9QDxHB9f8JfgSV+c96QaVnCcRhzx3+r+hXY9qtq1HmKy+up3Ft3T7BN06gWVDGZhI5JL4b6Mh9yolu5T6iukMN7M4KQqWZ/SKYP9+lYJyAOYtPveMy5IPdZja//XPVnkw+tBHdPe35w8kWs3UX+tjNrtggvpWvM3H8Lihi5f/dE1kVD068PL7O+Fc2z65eNseuDEfHKoxFpx4fjm9bS+LjFyEu4F8P4gras1geqq8QzK9wlJ3IWYJk3TtS8zbvV8MN2qGvaxQOXt3YafKe2NjN8U8A2hzGDQpdg37xqzurObB3dOY9uyYG8nG37pXjp9rg7wQm+v0A201GvGqUd4KfFlejgUobxCDjixAXod3NiWVfRaa6YsT0hitIWWAqXyr+JdhYBDJbSg32Y8fOFZvVDdziBq/cABPY8WEKpxf31fgnMM2xq681u9HYagAM/6mxDmM0eXaBNhCELgKt36Z+Vf9GYoDLrsg496TZ8yFg629dEL+D7sDq4FB8bIF7xTaxI2X8Q9dJWf7Y/ks2iPYGf2HsWf5HnOovUH2m4896Q9JDDs+rV7TduKs2+EcLNdnhvM/f+MqCEp8tO437h9C2YEP2nL7/5WR2G79sgYwGqo1ElJHu4F9msAkC84Lscxd4Bg5/ansGhVOAKf7MAuBu4NC8seJ1mQ0lku/okM090M/iS8HuAq/ivxJ/To1RMrDg/G8OTuVHub4e1j/wg9xBuF5fbPJVTlTsdOaPrmdiHVqK3UN/w+Xmz2r+K/mQf6G5RnauwDuHm80oGwCLkZMbHLYB/nkYm9Md/yF6NDa3SR9sNPM/0rD+cpgf8ws+qifOGN35XK2bHznBj3xWEKHTy+QT5HYiGJ83kW3lP5ZI4MTmKU1a9rcFbNyFT76OzVC+olP2tQYLEJNfGmO2iVs4AU/nd/PzejrHiM58z/BWvjnzs+J7QEvxzlcQgFupJxXfVuSjuFP11NFp4bI76IVnpZ/a7cxfRkNiIxtL9n41f1yayhrngmrG5LwYdWkp/x35h9Yg1WC6vlYNuStvKeZW+h9zfR/eIboHxD12Bml87PYgiCZZP5Z81fI5lrm5k0fxfWVj+x9lSgjp7YOOoAAAAABJRU5ErkJggg\x3d\x3d";
  /** @const */ var assets = {lastLoaderID:0, loadRoot:"", loaders:{}, sprites:{}, sounds:{}, fonts:{}};
  /** @const */ var app = {keyStates:{}, charInputted:[], mouseState:"up", mousePos:vec2(0, 0), time:0.0, realTime:0.0, skipTime:false, dt:0.0, scale:1, isTouch:false};
  /** @const */ var keyMap = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down", " ":"space"};
  /** @const */ var preventDefaultKeys = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"];
  var gl;
  /** @const */ var defVertSrc = "\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\nvarying vec2 v_uv;\nvarying vec4 v_color;\nvoid main() {\n\tv_uv \x3d a_uv;\n\tv_color \x3d a_color;\n\tgl_Position \x3d vec4(a_pos, 1.0);\n}\n";
  /** @const */ var defFragSrc = "\nprecision mediump float;\nvarying vec2 v_uv;\nvarying vec4 v_color;\nuniform sampler2D u_tex;\nvoid main() {\n\tgl_FragColor \x3d v_color * texture2D(u_tex, v_uv);\n\tif (gl_FragColor.a \x3d\x3d 0.0) {\n\t\tdiscard;\n\t}\n}\n";
  /** @const */ var STRIDE = 9;
  /** @const */ var gfx = {drawCalls:0, cam:vec2(0, 0), transform:mat4(), transformStack:[]};
  /** @const */ var audio = {};
  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };
  Math.clamp = function(val, min, max) {
    return Math.min(Math.max(val, min), max);
  };
  /** @const */ var A = 1103515245;
  /** @const */ var C = 12345;
  /** @const */ var M = 2147483648;
  /** @const */ var defRNG = makeRng(Date.now());
  /** @const */ var DEF_GRAVITY = 980;
  /** @const */ var DEF_ORIGIN = "topleft";
  /** @const */ var game = {loaded:false, curScene:undefined, paused:false, scenes:{}, log:[]};
  /** @const */ var LOG_TIME = 6;
  /** @const */ var DEF_MAX_VEL = 960;
  /** @const */ var DEF_JUMP_FORCE = 480;
  /** @const */ var debug = {paused:false, timeScale:1, showArea:false, hoverInfo:false, showLog:false, logTime:6, logMax:32};
  /** @const */ var lib = {start:start, loadRoot:loadRoot, loadSprite:loadSprite, loadSound:loadSound, loadFont:loadFont, newLoader:newLoader, width:width$jscomp$0, height:height$jscomp$0, dt:dt, time:time, screenshot:screenshot, scene:scene, go:go, sceneData:sceneData, layers:layers, camPos:camPos, camScale:camScale, camRot:camRot, camShake:camShake, camIgnore:camIgnore, gravity:gravity, add:add, readd:readd, destroy:destroy, destroyAll:destroyAll, get:get, every:every, pos:pos, scale:scale$jscomp$0, 
  rotate:rotate, color:color$jscomp$0, origin:origin, layer:layer$jscomp$0, area:area, sprite:sprite, text:text$jscomp$0, rect:rect, solid:solid, timer:timer, body:body, on:on, action:action, render:render, collides:collides, overlaps:overlaps, clicks:clicks, keyDown:keyDown, keyPress:keyPress, keyPressRep:keyPressRep, keyRelease:keyRelease, charInput:charInput, mouseDown:mouseDown, mouseClick:mouseClick, mouseRelease:mouseRelease, mousePos:mousePos, keyIsDown:keyIsDown, keyIsPressed:keyIsPressed, 
  keyIsPressedRep:keyIsPressedRep, keyIsReleased:keyIsReleased, mouseIsDown:mouseIsDown, mouseIsClicked:mouseIsClicked, mouseIsReleased:mouseIsReleased, loop:loop, wait:wait, play:play, volume:volume, makeRng:makeRng, rand:rand, randSeed:randSeed, vec2:vec2, rgb:rgb, rgba:rgba, quad:quad, choose:choose, chance:chance, lerp:lerp, map:map$jscomp$0, wave:wave, drawSprite:drawSprite, drawText:drawText, drawRect:drawRect, drawRectStroke:drawRectStroke, drawLine:drawLine, drawPoly:drawPoly, drawCircle:drawCircle, 
  dbg:dbg, objCount:objCount, fps:fps, stepFrame:stepFrame, log:log, error:error, addLevel:addLevel};
  if (gconf.plugins) {
    var $jscomp$iter$24 = $jscomp.makeIterator(gconf.plugins);
    for (var $jscomp$key$src = $jscomp$iter$24.next(); !$jscomp$key$src.done; $jscomp$key$src = $jscomp$iter$24.next()) {
      /** @const */ var src$jscomp$1 = $jscomp$key$src.value;
      {
        /** @const */ var map$55 = src$jscomp$1(lib);
        for (var k$jscomp$0 in map$55) {
          lib[k$jscomp$0] = map$55[k$jscomp$0];
        }
      }
    }
  }
  if (gconf.global) {
    for (var k$56 in lib) {
      window[k$56] = lib[k$56];
    }
  }
  appInit();
  return lib;
};
var $jscompDefaultExport$$module$kaboom4 = kaboom$$module$kaboom4;
/** @const */ var module$kaboom4 = {};
/** @const */ module$kaboom4.default = $jscompDefaultExport$$module$kaboom4;

$CLJS.module$kaboom4=module$kaboom4;
//# sourceMappingURL=module$kaboom4.js.map
