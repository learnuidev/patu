function processBtnState$$module$lib$app(s) {
  if (s === "pressed" || s === "rpressed") {
    return "down";
  }
  if (s === "released") {
    return "up";
  }
  return s;
}
function appInit$$module$lib$app(gconf) {
  function mousePos() {
    return app.mousePos.clone();
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
        app.keyStates[k] = processBtnState$$module$lib$app(app.keyStates[k]);
      }
      app.mouseState = processBtnState$$module$lib$app(app.mouseState);
      app.charInputted = [];
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
  function focused() {
    return document.activeElement === app.canvas;
  }
  function focus() {
    app.canvas.focus();
  }
  gconf = gconf === undefined ? {} : gconf;
  /** @const */ var app = {canvas:gconf.canvas ? gconf.canvas : function() {
    /** @const */ var canvas = document.createElement("canvas");
    (gconf.root ? gconf.root : document.body).appendChild(canvas);
    return canvas;
  }(), loopID:null, stopped:false, keyStates:{}, charInputted:[], mouseState:"up", mousePos:vec2$$module$lib$math(0, 0), skipTime:false, scale:gconf.scale ? gconf.scale : 1, realTime:0, dt:0.0, isTouch:false, fps:0, time:0, fpsBuf:[], fpsTimer:0};
  localStorage.setItem("app", JSON.stringify(app));
  console.log("app", app);
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
    app.mousePos = vec2$$module$lib$math(e.offsetX, e.offsetY).scale(1 / app.scale);
  });
  app.canvas.addEventListener("mousedown", function() {
    app.mouseState = "pressed";
  });
  app.canvas.addEventListener("mouseup", function() {
    app.mouseState = "released";
  });
  app.canvas.addEventListener("touchstart", function(e) {
    /** @const */ var t = e.touches[0];
    app.mousePos = vec2$$module$lib$math(t.clientX, t.clientY).scale(1 / app.scale);
    app.mouseState = "pressed";
  });
  app.canvas.addEventListener("touchmove", function(e) {
    /** @const */ var t = e.touches[0];
    app.mousePos = vec2$$module$lib$math(t.clientX, t.clientY).scale(1 / app.scale);
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
  document.addEventListener("visibilitychange", function() {
    switch(document.visibilityState) {
      case "visible":
        app.skipTime = true;
        break;
      case "hidden":
        break;
    }
  });
  return {gl:gl, keyDown:keyDown, keyPressed:keyPressed, keyPressedRep:keyPressedRep, keyReleased:keyReleased, mouseDown:mouseDown, mouseClicked:mouseClicked, mouseReleased:mouseReleased, charInputted:charInputted, mousePos:mousePos, dt:dt, time:time, fps:fps, screenshot:screenshot, cursor:cursor, focused:focused, focus:focus, run:run, quit:quit};
}
/** @const */ var module$lib$app = {};
/** @const */ module$lib$app.appInit = appInit$$module$lib$app;

$CLJS.module$lib$app=module$lib$app;
//# sourceMappingURL=module$lib$app.js.map
