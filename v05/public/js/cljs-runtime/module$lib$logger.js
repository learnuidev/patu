/** @const */ var LOG_SIZE$$module$lib$logger = 16;
function loggerInit$$module$lib$logger(gfx, assets, conf) {
  function draw() {
    if (logs.length > max) {
      logs = logs.slice(0, max);
    }
    /** @const */ var pos = vec2$$module$lib$math(0, gfx.height());
    logs.forEach(function(log, i) {
      /** @const */ var txtAlpha = map$$module$lib$math(i, 0, max, 1, 0.5);
      /** @const */ var bgAlpha = map$$module$lib$math(i, 0, max, 0.8, 0.2);
      /** @const */ var col = function() {
        switch(log.type) {
          case "info":
            return rgba$$module$lib$math(1, 1, 1, txtAlpha);
          case "error":
            return rgba$$module$lib$math(1, 0, 0.5, txtAlpha);
        }
      }();
      /** @const */ var ftext = gfx.fmtText(log.msg, assets.defFont(), {pos:pos, origin:"botleft", color:col, size:LOG_SIZE$$module$lib$logger / gfx.scale(), width:gfx.width()});
      gfx.drawRect(pos, ftext.width, ftext.height, {origin:"botleft", color:rgba$$module$lib$math(0, 0, 0, bgAlpha)});
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
  /** @const */ var max = conf.max || 8;
  return {info:info, error:error, draw:draw, clear:clear};
}
/** @const */ var module$lib$logger = {};
/** @const */ module$lib$logger.loggerInit = loggerInit$$module$lib$logger;

$CLJS.module$lib$logger=module$lib$logger;
//# sourceMappingURL=module$lib$logger.js.map
