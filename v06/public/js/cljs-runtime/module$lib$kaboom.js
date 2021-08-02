/** @const */ var kaboom$$module$lib$kaboom = function(gconf) {
  function sync(obj) {
    if (!net) {
      throw new Error("not connected to any websockets");
    }
    /** @const */ var scene = curScene();
    scene.travelers.push(obj._id);
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
    /** @const */ var sound = assets.sounds[id];
    if (!sound) {
      throw new Error('sound not found: "' + id + '"');
    }
    return audio.play(sound, conf);
  }
  function isCamLayer(layer) {
    /** @const */ var scene = curScene();
    var noCam = scene.layers[layer ? layer : scene.defLayer] && scene.layers[layer ? layer : scene.defLayer].noCam;
    return !noCam;
  }
  function mousePos(layer) {
    return isCamLayer(layer) ? curScene().camMousePos : app.mousePos();
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
    gfx.drawTexture(spr.tex, Object.assign({}, conf, {quad:q}));
  }
  function drawText(txt, conf) {
    conf = conf === undefined ? {} : conf;
    /** @const */ var fid = conf.font ? conf.font : DEF_FONT$$module$lib$assets;
    /** @const */ var font = assets.fonts[fid];
    if (!font) {
      throw new Error("font not found: " + fid);
    }
    gfx.drawText(txt, font, conf);
  }
  function scene(name, cb) {
    game.scenes[name] = {init:cb, initialized:false, events:{add:[], update:[], draw:[], destroy:[], keyDown:[], keyPress:[], keyPressRep:[], keyRelease:[], mouseClick:[], mouseRelease:[], mouseDown:[], charInput:[]}, action:[], render:[], objs:new Map, lastObjID:0, timers:{}, lastTimerID:0, cam:{pos:vec2$$module$lib$math(gfx.width() / 2, gfx.height() / 2), scale:vec2$$module$lib$math(1, 1), angle:0, shake:0}, camMousePos:vec2$$module$lib$math(0), camMatrix:mat4$$module$lib$math(), layers:{}, defLayer:null, 
    gravity:DEF_GRAVITY, data:{}, travelers:[], visitors:{}};
  }
  function curScene() {
    return game.scenes[game.curScene];
  }
  function sceneData() {
    return curScene().data;
  }
  function regDebugInputs() {
    keyPress("`", function() {
      debug.showLog = !debug.showLog;
      logger.info("show log: " + (debug.showLog ? "on" : "off"));
    });
    keyPress("f1", function() {
      debug.inspect = !debug.inspect;
      logger.info("inspect: " + (debug.inspect ? "on" : "off"));
    });
    keyPress("f2", function() {
      debug.clearLog();
    });
    keyPress("f8", function() {
      debug.paused = !debug.paused;
      logger.info("" + (debug.paused ? "paused" : "unpaused"));
    });
    keyPress("f7", function() {
      debug.timeScale = clamp$$module$lib$math(debug.timeScale - 0.2, 0, 2);
      logger.info("time scale: " + debug.timeScale.toFixed(1));
    });
    keyPress("f9", function() {
      debug.timeScale = clamp$$module$lib$math(debug.timeScale + 0.2, 0, 2);
      logger.info("time scale: " + debug.timeScale.toFixed(1));
    });
    keyPress("f10", function() {
      debug.stepFrame();
      logger.info("stepped frame");
    });
  }
  function go(name, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$38 = $jscomp$restParams;
      game.nextScene = {name:name, args:[].concat($jscomp.arrayFromIterable(args$38))};
    }
  }
  function switchScene(name, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$39 = $jscomp$restParams;
      reload(name);
      game.curScene = name;
      /** @const */ var scene$40 = game.scenes[name];
      if (!scene$40) {
        throw new Error("scene not found: '" + name + "'");
      }
      if (!scene$40.initialized) {
        try {
          scene$40.init.apply(scene$40, $jscomp.arrayFromIterable(args$39));
        } catch (e) {
          logger.error(e.stack);
        }
        if (gconf.debug) {
          regDebugInputs();
        }
        scene$40.initialized = true;
      }
    }
  }
  function reload(name) {
    if (!game.scenes[name]) {
      throw new Error("scene not found: '" + name + "'");
    }
    scene(name, game.scenes[name].init);
  }
  function layers(list, def) {
    /** @const */ var scene = curScene();
    if (!scene) {
      return;
    }
    list.forEach(function(name, idx) {
      scene.layers[name] = {alpha:1, order:idx + 1, noCam:false};
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
      var pos$41 = $jscomp$restParams;
      /** @const */ var cam = curScene().cam;
      if (pos$41.length > 0) {
        cam.pos = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(pos$41));
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
      var scale$42 = $jscomp$restParams;
      /** @const */ var cam = curScene().cam;
      if (scale$42.length > 0) {
        cam.scale = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(scale$42));
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
    /** @const */ var scene = curScene();
    layers.forEach(function(name) {
      if (scene.layers[name]) {
        scene.layers[name].noCam = true;
      }
    });
  }
  function defComp(id, require, builder) {
    /** @const */ var comp = function(args) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var args$43 = $jscomp$restParams;
        return Object.assign({}, builder.apply(null, $jscomp.arrayFromIterable(args$43)), {id:id, require:require});
      }
    };
    game.compReg[id] = comp;
    return comp;
  }
  function makeComp(id, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$44 = $jscomp$restParams;
      if (!game.compReg[id]) {
        throw new Error("comp not found: " + id);
      }
      return game.compReg[id].apply(game.compReg, $jscomp.arrayFromIterable(args$44));
    }
  }
  function add(comps) {
    /** @const */ var compStates = {};
    /** @const */ var customState = {};
    /** @const */ var obj = {hidden:false, paused:false, _tags:[], _id:null, _client:null, _events:{add:[], update:[], draw:[], destroy:[], inspect:[]}, use:function(comp) {
      if (comp === undefined) {
        return;
      }
      /** @const */ var ty = typeof comp;
      if (ty === "string") {
        this._tags.push(comp);
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
      var $jscomp$loop$67 = {};
      for (var k in comp) {
        $jscomp$loop$67.$jscomp$loop$prop$k$69 = k;
        $jscomp$loop$67: {
          if ($jscomp$loop$67.$jscomp$loop$prop$k$69 === "id") {
            break $jscomp$loop$67;
          }
          if (typeof comp[$jscomp$loop$67.$jscomp$loop$prop$k$69] === "function") {
            if (this._events[$jscomp$loop$67.$jscomp$loop$prop$k$69]) {
              this._events[$jscomp$loop$67.$jscomp$loop$prop$k$69].push(comp[$jscomp$loop$67.$jscomp$loop$prop$k$69].bind(this));
              break $jscomp$loop$67;
            } else {
              stateContainer[$jscomp$loop$67.$jscomp$loop$prop$k$69] = comp[$jscomp$loop$67.$jscomp$loop$prop$k$69].bind(this);
            }
          } else {
            stateContainer[$jscomp$loop$67.$jscomp$loop$prop$k$69] = comp[$jscomp$loop$67.$jscomp$loop$prop$k$69];
          }
          if ($jscomp$loop$67.$jscomp$loop$prop$k$69 === "require") {
            break $jscomp$loop$67;
          }
          Object.defineProperty(this, $jscomp$loop$67.$jscomp$loop$prop$k$69, {get:function($jscomp$loop$67) {
            return function() {
              return stateContainer[$jscomp$loop$67.$jscomp$loop$prop$k$69];
            };
          }($jscomp$loop$67), set:function($jscomp$loop$67) {
            return function(val) {
              stateContainer[$jscomp$loop$67.$jscomp$loop$prop$k$69] = val;
            };
          }($jscomp$loop$67)});
        }
        $jscomp$loop$67 = {$jscomp$loop$prop$k$69:$jscomp$loop$67.$jscomp$loop$prop$k$69};
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
        var $jscomp$iter$7 = $jscomp.makeIterator(tag);
        for (var $jscomp$key$t = $jscomp$iter$7.next(); !$jscomp$key$t.done; $jscomp$key$t = $jscomp$iter$7.next()) {
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
        var args$45 = $jscomp$restParams;
        if (this._events[event]) {
          var $jscomp$iter$8 = $jscomp.makeIterator(this._events[event]);
          for (var $jscomp$key$f = $jscomp$iter$8.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$8.next()) {
            /** @const */ var f = $jscomp$key$f.value;
            {
              f.call.apply(f, [this].concat($jscomp.arrayFromIterable(args$45)));
            }
          }
        }
        /** @const */ var scene$46 = curScene();
        /** @const */ var events = scene$46.events[event];
        if (events) {
          var $jscomp$iter$9 = $jscomp.makeIterator(events);
          for (var $jscomp$key$ev = $jscomp$iter$9.next(); !$jscomp$key$ev.done; $jscomp$key$ev = $jscomp$iter$9.next()) {
            /** @const */ var ev = $jscomp$key$ev.value;
            {
              if (this.is(ev.tag)) {
                ev.cb.apply(ev, [this].concat($jscomp.arrayFromIterable(args$45)));
              }
            }
          }
        }
      }
    }, rmTag:function(t) {
      /** @const */ var idx = this._tags.indexOf(t);
      if (idx > -1) {
        this._tags.splice(idx, 1);
      }
    }, _data:function() {
      return {hidden:this.hidden, paused:this.paused, tags:this._tags, id:this._id, comps:compStates, custom:customState};
    }};
    var $jscomp$iter$10 = $jscomp.makeIterator(comps);
    for (var $jscomp$key$comp = $jscomp$iter$10.next(); !$jscomp$key$comp.done; $jscomp$key$comp = $jscomp$iter$10.next()) {
      /** @const */ var comp$jscomp$0 = $jscomp$key$comp.value;
      {
        obj.use(comp$jscomp$0);
      }
    }
    /** @const */ var scene = curScene();
    /** @const */ var id$jscomp$0 = scene.lastObjID++;
    scene.objs.set(id$jscomp$0, obj);
    obj._id = id$jscomp$0;
    obj.trigger("add");
    for (var id$47 in compStates) {
      /** @const */ var comp$48 = compStates[id$47];
      /** @const */ var deps = comp$48.require || [];
      var $jscomp$iter$11 = $jscomp.makeIterator(deps);
      for (var $jscomp$key$dep = $jscomp$iter$11.next(); !$jscomp$key$dep.done; $jscomp$key$dep = $jscomp$iter$11.next()) {
        /** @const */ var dep = $jscomp$key$dep.value;
        {
          if (!obj.c(dep)) {
            throw new Error("comp '" + id$47 + "' requires comp '" + dep + "'");
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
    /** @const */ var scene = curScene();
    scene.objs.delete(obj._id);
    /** @const */ var id = scene.lastObjID++;
    scene.objs.set(id, obj);
    obj._id = id;
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
      if (typeof tag === "string") {
        on("update", tag, cb);
      }
    }
  }
  function render(tag, cb) {
    if (typeof tag === "function" && cb === undefined) {
      curScene().render.push(tag);
    } else {
      if (typeof tag === "string") {
        on("update", tag, cb);
      }
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
    return new Promise(function(resolve) {
      /** @const */ var scene = curScene();
      scene.timers[scene.lastTimerID++] = {time:t, cb:function() {
        if (f) {
          f();
        }
        resolve();
      }};
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
    return {stop:function() {
      stopped = true;
    }};
  }
  function pushKeyEvent(e, k, f) {
    if (Array.isArray(k)) {
      var $jscomp$iter$12 = $jscomp.makeIterator(k);
      for (var $jscomp$key$key = $jscomp$iter$12.next(); !$jscomp$key$key.done; $jscomp$key$key = $jscomp$iter$12.next()) {
        /** @const */ var key = $jscomp$key$key.value;
        {
          pushKeyEvent(e, key, f);
        }
      }
    } else {
      /** @const */ var scene$49 = curScene();
      scene$49.events[e].push({key:k, cb:f});
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
    /** @const */ var objs = [].concat($jscomp.arrayFromIterable(scene.objs.values())).sort(function(o1, o2) {
      /** @const */ var l1 = scene.layers[o1.layer ? o1.layer : scene.defLayer] && scene.layers[o1.layer ? o1.layer : scene.defLayer].order || 0;
      /** @const */ var l2 = scene.layers[o2.layer ? o2.layer : scene.defLayer] && scene.layers[o2.layer ? o2.layer : scene.defLayer].order || 0;
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
    /** @const */ var scene = curScene();
    if (!scene) {
      return;
    }
    obj.trigger("destroy");
    scene.objs.delete(obj._id);
    delete obj._id;
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
      throw new Error("scene not found: '" + game.curScene + "'");
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
    revery(function(obj) {
      if (!obj.paused && doUpdate) {
        obj.trigger("update");
      }
    });
    if (doUpdate) {
      var $jscomp$iter$13 = $jscomp.makeIterator(scene.action);
      for (var $jscomp$key$f = $jscomp$iter$13.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$13.next()) {
        /** @const */ var f = $jscomp$key$f.value;
        {
          f();
        }
      }
    }
    /** @const */ var size = vec2$$module$lib$math(gfx.width(), gfx.height());
    /** @const */ var cam = scene.cam;
    /** @const */ var shake = vec2FromAngle$$module$lib$math(rand$$module$lib$math(0, Math.PI * 2)).scale(cam.shake);
    cam.shake = lerp$$module$lib$math(cam.shake, 0, 5 * dt());
    scene.camMatrix = mat4$$module$lib$math().translate(size.scale(0.5)).scale(cam.scale).rotateZ(cam.angle).translate(size.scale(-.5)).translate(cam.pos.scale(-1).add(size.scale(0.5)).add(shake));
    scene.camMousePos = scene.camMatrix.invert().multVec2(app.mousePos());
    every(function(obj) {
      if (!obj.hidden) {
        gfx.pushTransform();
        if (isCamLayer(obj.layer)) {
          gfx.pushMatrix(scene.camMatrix);
        }
        obj.trigger("draw");
        gfx.popTransform();
      }
    });
    var $jscomp$iter$14 = $jscomp.makeIterator(scene.render);
    for ($jscomp$key$f = $jscomp$iter$14.next(); !$jscomp$key$f.done; $jscomp$key$f = $jscomp$iter$14.next()) {
      /** @const */ var f$50 = $jscomp$key$f.value;
      {
        f$50();
      }
    }
  }
  function handleEvents() {
    /** @const */ var scene = curScene();
    var $jscomp$iter$15 = $jscomp.makeIterator(scene.events.charInput);
    for (var $jscomp$key$e = $jscomp$iter$15.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$15.next()) {
      /** @const */ var e = $jscomp$key$e.value;
      {
        app.charInputted().forEach(e.cb);
      }
    }
    var $jscomp$iter$16 = $jscomp.makeIterator(scene.events.keyDown);
    for ($jscomp$key$e = $jscomp$iter$16.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$16.next()) {
      /** @const */ var e$51 = $jscomp$key$e.value;
      {
        if (app.keyDown(e$51.key)) {
          e$51.cb();
        }
      }
    }
    var $jscomp$iter$17 = $jscomp.makeIterator(scene.events.keyPress);
    for ($jscomp$key$e = $jscomp$iter$17.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$17.next()) {
      /** @const */ var e$52 = $jscomp$key$e.value;
      {
        if (app.keyPressed(e$52.key)) {
          e$52.cb();
        }
      }
    }
    var $jscomp$iter$18 = $jscomp.makeIterator(scene.events.keyPressRep);
    for ($jscomp$key$e = $jscomp$iter$18.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$18.next()) {
      /** @const */ var e$53 = $jscomp$key$e.value;
      {
        if (app.keyPressedRep(e$53.key)) {
          e$53.cb();
        }
      }
    }
    var $jscomp$iter$19 = $jscomp.makeIterator(scene.events.keyRelease);
    for ($jscomp$key$e = $jscomp$iter$19.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$19.next()) {
      /** @const */ var e$54 = $jscomp$key$e.value;
      {
        if (app.keyReleased(e$54.key)) {
          e$54.cb();
        }
      }
    }
    var $jscomp$iter$20 = $jscomp.makeIterator(scene.events.mouseDown);
    for ($jscomp$key$e = $jscomp$iter$20.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$20.next()) {
      /** @const */ var e$55 = $jscomp$key$e.value;
      {
        if (app.mouseDown()) {
          e$55.cb();
        }
      }
    }
    var $jscomp$iter$21 = $jscomp.makeIterator(scene.events.mouseClick);
    for ($jscomp$key$e = $jscomp$iter$21.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$21.next()) {
      /** @const */ var e$56 = $jscomp$key$e.value;
      {
        if (app.mouseClicked()) {
          e$56.cb();
        }
      }
    }
    var $jscomp$iter$22 = $jscomp.makeIterator(scene.events.mouseRelease);
    for ($jscomp$key$e = $jscomp$iter$22.next(); !$jscomp$key$e.done; $jscomp$key$e = $jscomp$iter$22.next()) {
      /** @const */ var e$57 = $jscomp$key$e.value;
      {
        if (app.mouseReleased()) {
          e$57.cb();
        }
      }
    }
  }
  function drawInspect() {
    function drawInspectTxt(pos, txt, scale) {
      /** @const */ var pad = vec2$$module$lib$math(4).scale(1 / scale);
      /** @const */ var ftxt = gfx.fmtText(txt, font, {size:12 / scale, pos:pos.add(vec2$$module$lib$math(pad.x, pad.y))});
      gfx.drawRect(pos, ftxt.width + pad.x * 2, ftxt.height + pad.x * 2, {color:rgba$$module$lib$math(0, 0, 0, 1)});
      gfx.drawFmtText(ftxt);
    }
    function drawObj(obj, f) {
      /** @const */ var isCam = isCamLayer(obj.layer);
      /** @const */ var scale = gfx.scale() * (isCam ? (scene.cam.scale.x + scene.cam.scale.y) / 2 : 1);
      if (isCam) {
        gfx.pushTransform();
        gfx.pushMatrix(scene.camMatrix);
      }
      f(scale);
      if (isCam) {
        gfx.popTransform();
      }
    }
    /** @const */ var scene = curScene();
    var inspecting = null;
    /** @const */ var font = assets.defFont();
    /** @const */ var lcolor = rgba$$module$lib$math(gconf.inspectColor ? gconf.inspectColor : [0, 1, 1, 1]);
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
        var $jscomp$iter$23 = $jscomp.makeIterator(inspecting._tags);
        for (var $jscomp$key$tag = $jscomp$iter$23.next(); !$jscomp$key$tag.done; $jscomp$key$tag = $jscomp$iter$23.next()) {
          /** @const */ var tag = $jscomp$key$tag.value;
          {
            lines.push('"' + tag + '"');
          }
        }
        var $jscomp$iter$24 = $jscomp.makeIterator(inspecting._events.inspect);
        for (var $jscomp$key$inspect = $jscomp$iter$24.next(); !$jscomp$key$inspect.done; $jscomp$key$inspect = $jscomp$iter$24.next()) {
          /** @const */ var inspect = $jscomp$key$inspect.value;
          {
            /** @const */ var info = inspect();
            for (var field in info) {
              lines.push(field + ": " + info[field]);
            }
          }
        }
        drawInspectTxt(mpos, lines.join("\n"), scale);
      });
    }
    drawInspectTxt(vec2$$module$lib$math(0), app.fps() + "", gfx.scale());
  }
  function start(name, args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 1; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 1] = arguments[$jscomp$restIndex];
    }
    {
      var args$58 = $jscomp$restParams;
      app.run(function() {
        gfx.frameStart();
        if (!game.loaded) {
          /** @const */ var progress = assets.loadProgress();
          if (progress === 1) {
            game.loaded = true;
            switchScene.apply(null, [name].concat($jscomp.arrayFromIterable(args$58)));
            if (net) {
              net.connect().catch(logger.error);
            }
          } else {
            /** @const */ var w = gfx.width() / 2;
            /** @const */ var h = 24 / gfx.scale();
            /** @const */ var pos$59 = vec2$$module$lib$math(gfx.width() / 2, gfx.height() / 2).sub(vec2$$module$lib$math(w / 2, h / 2));
            gfx.drawRect(vec2$$module$lib$math(0), gfx.width(), gfx.height(), {color:rgb$$module$lib$math(0, 0, 0)});
            gfx.drawRectStroke(pos$59, w, h, {width:4 / gfx.scale()});
            gfx.drawRect(pos$59, w * progress, h);
          }
        } else {
          try {
            if (!curScene()) {
              throw new Error("scene not found: '" + game.curScene + "'");
            }
            handleEvents();
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
          if (game.nextScene) {
            switchScene.apply(null, [game.nextScene.name].concat($jscomp.arrayFromIterable(game.nextScene.args)));
            game.nextScene = null;
          }
        }
        gfx.frameEnd();
      });
    }
  }
  function isSameLayer(o1, o2) {
    /** @const */ var scene = curScene();
    return (o1.layer ? o1.layer : scene.defLayer) === (o2.layer ? o2.layer : scene.defLayer);
  }
  function getAreaFromSize(w, h, o) {
    /** @const */ var size = vec2$$module$lib$math(w, h);
    /** @const */ var offset = originPt$$module$lib$gfx(o || DEF_ORIGIN).scale(size).scale(-.5);
    return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
  }
  function addLevel(map, conf) {
    /** @const */ var pool = [];
    /** @const */ var offset = vec2$$module$lib$math(conf.pos || 0);
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
        var args$65 = $jscomp$restParams;
        /** @const */ var p = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$65));
        return vec2$$module$lib$math(offset.x + p.x * conf.width, offset.y + p.y * conf.height);
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
      pool.push(obj);
      obj.use(gridder(this, p));
      return obj;
    }, width:function() {
      return longRow * conf.width;
    }, height:function() {
      return map.length * conf.height;
    }, destroy:function() {
      var $jscomp$iter$26 = $jscomp.makeIterator(pool);
      for (var $jscomp$key$obj = $jscomp$iter$26.next(); !$jscomp$key$obj.done; $jscomp$key$obj = $jscomp$iter$26.next()) {
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
        level.spawn(sym, vec2$$module$lib$math(j, i));
      });
    });
    return level;
  }
  gconf = gconf === undefined ? {width:640, height:480, scale:1, fullscreen:false, debug:false, crisp:false, canvas:null, connect:null, logMax:8, root:document.body} : gconf;
  /** @const */ var app = appInit$$module$lib$app({width:gconf.width, height:gconf.height, scale:gconf.scale, fullscreen:gconf.fullscreen, crisp:gconf.crisp, canvas:gconf.canvas, root:gconf.root});
  /** @const */ var gfx = gfxInit$$module$lib$gfx(app.gl, {clearColor:gconf.clearColor ? rgba$$module$lib$math(gconf.clearColor) : undefined, scale:gconf.scale, texFilter:gconf.texFilter});
  /** @const */ var audio = audioInit$$module$lib$audio();
  /** @const */ var assets = assetsInit$$module$lib$assets(gfx, audio, {errHandler:function(err) {
    logger.error(err);
  }});
  /** @const */ var logger = loggerInit$$module$lib$logger(gfx, assets, {max:gconf.logMax});
  /** @const */ var net = gconf.connect ? netInit$$module$lib$net(gconf.connect) : null;
  /** @const */ var NetMsg = {AddObj:"ADD_OBJ", UpdateObj:"UPDATE_OBJ", DestroyObj:"DESTROY_OBJ", Disconnect:"DISCONNECT"};
  if (net) {
    recv(NetMsg.AddObj, function(id, data) {
      /** @const */ var scene = curScene();
      if (!scene.visitors[id]) {
        scene.visitors[id] = {};
      }
    });
    recv(NetMsg.DestroyObj, function(id, data) {
      /** @const */ var scene = curScene();
      if (!scene.visitors[id]) {
        return;
      }
      /** @const */ var oid = scene.visitors[id][data.id];
      if (oid != null) {
        destroy(scene.objs.get(oid));
        delete scene.visitors[id][data.id];
      }
    });
    recv(NetMsg.Disconnect, function(id, data) {
      /** @const */ var scene = curScene();
      if (scene.visitors[id]) {
        var $jscomp$iter$6 = $jscomp.makeIterator(Object.values(scene.visitors[id]));
        for (var $jscomp$key$oid = $jscomp$iter$6.next(); !$jscomp$key$oid.done; $jscomp$key$oid = $jscomp$iter$6.next()) {
          /** @const */ var oid = $jscomp$key$oid.value;
          {
            destroy(scene.objs.get(oid));
          }
        }
        delete scene.visitors[id];
      }
    });
  }
  /** @const */ var DEF_GRAVITY = 980;
  /** @const */ var DEF_ORIGIN = "topleft";
  /** @const */ var game = {loaded:false, scenes:{}, curScene:null, nextScene:null, compReg:{}};
  /** @const */ var pos$jscomp$0 = defComp("pos", [], function(args$jscomp$0) {
    var $jscomp$restParams$jscomp$0 = [];
    for (var $jscomp$restIndex$jscomp$0 = 0; $jscomp$restIndex$jscomp$0 < arguments.length; ++$jscomp$restIndex$jscomp$0) {
      $jscomp$restParams$jscomp$0[$jscomp$restIndex$jscomp$0 - 0] = arguments[$jscomp$restIndex$jscomp$0];
    }
    {
      var args$60 = $jscomp$restParams$jscomp$0;
      return {pos:vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$60)), move:function(args) {
        var $jscomp$restParams = [];
        for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
          $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
        }
        {
          var args$61 = $jscomp$restParams;
          /** @const */ var p = vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$61));
          /** @const */ var dx = p.x * dt();
          /** @const */ var dy = p.y * dt();
          this.pos.x += dx;
          this.pos.y += dy;
        }
      }, screenPos:function() {
        /** @const */ var scene = curScene();
        return scene.camMatrix.multVec2(this.pos);
      }, inspect:function() {
        return {pos:"(" + ~~this.pos.x + ", " + ~~this.pos.y + ")"};
      }};
    }
  });
  /** @const */ var scale$jscomp$0 = defComp("scale", [], function(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$62 = $jscomp$restParams;
      if (args$62.length === 0) {
        return scale$jscomp$0(1);
      }
      return {scale:vec2$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$62)), flipX:function(s) {
        this.scale.x = Math.sign(s) * Math.abs(this.scale.x);
      }, flipY:function(s) {
        this.scale.y = Math.sign(s) * Math.abs(this.scale.y);
      }};
    }
  });
  /** @const */ var rotate = defComp("rotate", [], function(r) {
    return {angle:r ? r : 0};
  });
  /** @const */ var color = defComp("color", [], function(args) {
    var $jscomp$restParams = [];
    for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
      $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
    }
    {
      var args$63 = $jscomp$restParams;
      return {color:rgba$$module$lib$math.apply(null, $jscomp.arrayFromIterable(args$63))};
    }
  });
  /** @const */ var origin$jscomp$0 = defComp("origin", [], function(origin) {
    return {origin:origin};
  });
  /** @const */ var layer$jscomp$0 = defComp("layer", [], function(layer) {
    return {layer:layer, inspect:function() {
      /** @const */ var scene = curScene();
      return {layer:this.layer ? this.layer : scene.defLayer};
    }};
  });
  /** @const */ var area = defComp("area", [], function(p1$jscomp$0, p2$jscomp$0) {
    /** @const */ var colliding = {};
    /** @const */ var overlapping = {};
    return {area:{p1:p1$jscomp$0, p2:p2$jscomp$0}, areaWidth:function() {
      /** @const */ var $jscomp$destructuring$var4 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var4.p1;
      /** @const */ var p2 = $jscomp$destructuring$var4.p2;
      return p2.x - p1.x;
    }, areaHeight:function() {
      /** @const */ var $jscomp$destructuring$var5 = this._worldArea();
      /** @const */ var p1 = $jscomp$destructuring$var5.p1;
      /** @const */ var p2 = $jscomp$destructuring$var5.p2;
      return p2.y - p1.y;
    }, isClicked:function() {
      return app.mouseClicked() && this.isHovered();
    }, isHovered:function() {
      return this.hasPt(mousePos(this.layer));
    }, isCollided:function(other) {
      if (!other.area) {
        return false;
      }
      if (!isSameLayer(this, other)) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return colRectRect$$module$lib$math(a1, a2);
    }, isOverlapped:function(other) {
      if (!other.area) {
        return false;
      }
      if (!isSameLayer(this, other)) {
        return false;
      }
      /** @const */ var a1 = this._worldArea();
      /** @const */ var a2 = other._worldArea();
      return overlapRectRect$$module$lib$math(a1, a2);
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
      return colRectPt$$module$lib$math({p1:a.p1, p2:a.p2}, pt);
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
      if (!colRectRect$$module$lib$math(a1, a2)) {
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
      /** @const */ var pos = this.pos || vec2$$module$lib$math(0);
      /** @const */ var scale = this.scale || vec2$$module$lib$math(1);
      /** @const */ var p1 = pos.add(a.p1.scale(scale));
      /** @const */ var p2 = pos.add(a.p2.scale(scale));
      /** @const */ var area = {p1:vec2$$module$lib$math(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y)), p2:vec2$$module$lib$math(Math.max(p1.x, p2.x), Math.max(p1.y, p2.y))};
      return area;
    }};
  });
  /** @const */ var sprite = defComp("sprite", [], function(id$jscomp$0, conf) {
    conf = conf === undefined ? {} : conf;
    var spr = assets.sprites[id$jscomp$0];
    if (!spr) {
      throw new Error('sprite not found: "' + id$jscomp$0 + '"');
    }
    /** @const */ var q$jscomp$0 = Object.assign({}, spr.frames[0]);
    if (conf.quad) {
      q$jscomp$0.x += conf.quad.x * q$jscomp$0.w;
      q$jscomp$0.y += conf.quad.y * q$jscomp$0.h;
      q$jscomp$0.w *= conf.quad.w;
      q$jscomp$0.h *= conf.quad.h;
    }
    /** @const */ var width = spr.tex.width * q$jscomp$0.w;
    /** @const */ var height = spr.tex.height * q$jscomp$0.h;
    var curAnim = null;
    return {width:width, height:height, animSpeed:conf.animSpeed || 0.1, frame:conf.frame || 0, quad:conf.quad || quad$$module$lib$math(0, 0, 1, 1), add:function() {
      if (!this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      /** @const */ var q = spr.frames[this.frame];
      drawSprite(spr, {pos:this.pos, scale:this.scale, rot:this.angle, color:this.color, frame:this.frame, origin:this.origin, quad:this.quad, prog:assets.shaders[this.shader], uniform:this.uniform});
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
      loop = loop === undefined ? true : loop;
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
      if (this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
      curAnim = null;
      this.frame = 0;
    }, numFrames:function() {
      return spr.frames.length;
    }, curAnim:function() {
      return curAnim && curAnim.name;
    }, inspect:function() {
      /** @const */ var info = {};
      if (curAnim) {
        info.curAnim = '"' + curAnim.name + '"';
      }
      return info;
    }};
  });
  /** @const */ var text = defComp("text", [], function(t, size, conf) {
    conf = conf === undefined ? {} : conf;
    return {text:t, textSize:size, font:conf.font, width:0, height:0, add:function() {
      if (!this.area && !conf.noArea) {
        /** @const */ var scene$64 = curScene();
        /** @const */ var font = assets.fonts[this.font ? this.font : DEF_FONT$$module$lib$assets];
        /** @const */ var ftext = gfx.fmtText(this.text + "", font, {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, width:conf.width});
        this.width = ftext.width / (this.scale && this.scale.x || 1);
        this.height = ftext.height / (this.scale && this.scale.y || 1);
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      /** @const */ var font = assets.fonts[this.font ? this.font : DEF_FONT$$module$lib$assets];
      /** @const */ var ftext = gfx.fmtText(this.text + "", font, {pos:this.pos, scale:this.scale, rot:this.angle, size:this.textSize, origin:this.origin, color:this.color, width:conf.width});
      this.width = ftext.width;
      this.height = ftext.height;
      gfx.drawFmtText(ftext);
    }};
  });
  /** @const */ var rect = defComp("rect", [], function(w, h, conf) {
    conf = conf === undefined ? {} : conf;
    return {width:w, height:h, add:function() {
      if (!this.area && !conf.noArea) {
        this.use(getAreaFromSize(this.width, this.height, this.origin));
      }
    }, draw:function() {
      /** @const */ var scene = curScene();
      gfx.drawRect(this.pos, this.width, this.height, {scale:this.scale, rot:this.angle, color:this.color, origin:this.origin, prog:assets.shaders[this.shader], uniform:this.uniform});
    }};
  });
  /** @const */ var solid = defComp("solid", [], function() {
    return {solid:true};
  });
  /** @const */ var DEF_MAX_VEL = 960;
  /** @const */ var DEF_JUMP_FORCE = 480;
  /** @const */ var body = defComp("body", ["pos", "area"], function(conf) {
    conf = conf === undefined ? {} : conf;
    var velY = 0;
    var curPlatform = null;
    var lastPlatformPos = null;
    /** @const */ var maxVel = conf.maxVel ? conf.maxVel : DEF_MAX_VEL;
    return {jumpForce:conf.jumpForce ? conf.jumpForce : DEF_JUMP_FORCE, update:function() {
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
        var $jscomp$iter$25 = $jscomp.makeIterator(targets);
        for (var $jscomp$key$target = $jscomp$iter$25.next(); !$jscomp$key$target.done; $jscomp$key$target = $jscomp$iter$25.next()) {
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
  });
  /** @const */ var shader = defComp("shader", [], function(id, uniform) {
    uniform = uniform === undefined ? {} : uniform;
    /** @const */ var prog = assets.shaders[id];
    return {shader:id, uniform:uniform};
  });
  /** @const */ var debug = {paused:false, inspect:false, timeScale:1, showLog:true, fps:app.fps, objCount:function() {
    return curScene().objs.size;
  }, stepFrame:function() {
    gameFrame(true);
  }, drawCalls:gfx.drawCalls, clearLog:logger.clear, log:logger.info, error:logger.error};
  /** @const */ var gridder = defComp("gridder", [], function(level, pos) {
    return {gridPos:pos.clone(), setGridPos:function(p) {
      this.gridPos = p.clone();
      this.pos = vec2$$module$lib$math(level.offset().x + this.gridPos.x * level.gridWidth(), level.offset().y + this.gridPos.y * level.gridHeight());
    }, moveLeft:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$lib$math(-1, 0)));
    }, moveRight:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$lib$math(1, 0)));
    }, moveUp:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$lib$math(0, -1)));
    }, moveDown:function() {
      this.setGridPos(this.gridPos.add(vec2$$module$lib$math(0, 1)));
    }};
  });
  /** @const */ var ctx = {start:start, loadRoot:assets.loadRoot, loadSprite:assets.loadSprite, loadSound:assets.loadSound, loadFont:assets.loadFont, loadShader:assets.loadShader, addLoader:assets.addLoader, width:gfx.width, height:gfx.height, dt:dt, time:app.time, screenshot:app.screenshot, focused:app.focused, focus:app.focus, scene:scene, go:go, sceneData:sceneData, layers:layers, camPos:camPos, camScale:camScale, camRot:camRot, camShake:camShake, camIgnore:camIgnore, gravity:gravity, add:add, 
  readd:readd, destroy:destroy, destroyAll:destroyAll, get:get, every:every, revery:revery, defComp:defComp, sync:sync, send:send, recv:recv, pos:pos$jscomp$0, scale:scale$jscomp$0, rotate:rotate, color:color, origin:origin$jscomp$0, layer:layer$jscomp$0, area:area, sprite:sprite, text:text, rect:rect, solid:solid, body:body, shader:shader, on:on, action:action, render:render, collides:collides, overlaps:overlaps, clicks:clicks, keyDown:keyDown, keyPress:keyPress, keyPressRep:keyPressRep, keyRelease:keyRelease, 
  charInput:charInput, mouseDown:mouseDown, mouseClick:mouseClick, mouseRelease:mouseRelease, mousePos:mousePos, cursor:app.cursor, keyIsDown:app.keyDown, keyIsPressed:app.keyPressed, keyIsPressedRep:app.keyPressedRep, keyIsReleased:app.keyReleased, mouseIsDown:app.mouseDown, mouseIsClicked:app.mouseClicked, mouseIsReleased:app.mouseReleased, loop:loop, wait:wait, play:play, volume:audio.volume, makeRng:makeRng$$module$lib$math, rand:rand$$module$lib$math, randSeed:randSeed$$module$lib$math, vec2:vec2$$module$lib$math, 
  rgb:rgb$$module$lib$math, rgba:rgba$$module$lib$math, quad:quad$$module$lib$math, choose:choose$$module$lib$math, chance:chance$$module$lib$math, lerp:lerp$$module$lib$math, map:map$$module$lib$math, mapc:mapc$$module$lib$math, wave:wave$$module$lib$math, deg2rad:deg2rad$$module$lib$math, rad2deg:rad2deg$$module$lib$math, drawSprite:drawSprite, drawText:drawText, drawRect:gfx.drawRect, drawRectStroke:gfx.drawRectStroke, drawLine:gfx.drawLine, debug:debug, addLevel:addLevel};
  if (gconf.plugins) {
    var $jscomp$iter$27 = $jscomp.makeIterator(gconf.plugins);
    for (var $jscomp$key$src = $jscomp$iter$27.next(); !$jscomp$key$src.done; $jscomp$key$src = $jscomp$iter$27.next()) {
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
    for (var k$66 in ctx) {
      window[k$66] = ctx[k$66];
    }
  }
  return ctx;
};
var $jscompDefaultExport$$module$lib$kaboom = kaboom$$module$lib$kaboom;
/** @const */ var module$lib$kaboom = {};
/** @const */ module$lib$kaboom.default = $jscompDefaultExport$$module$lib$kaboom;

$CLJS.module$lib$kaboom=module$lib$kaboom;
//# sourceMappingURL=module$lib$kaboom.js.map
