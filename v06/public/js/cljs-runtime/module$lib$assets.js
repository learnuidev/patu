/** @const */ var unsciiSrc$$module$lib$assets = "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/unscii_8x8.png";
/** @const */ var ASCII_CHARS$$module$lib$assets = " !\"#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
/** @const */ var DEF_FONT$$module$lib$assets = "unscii";
function loadImg$$module$lib$assets(src) {
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
function isDataUrl$$module$lib$assets(src) {
  return src.startsWith("data:");
}
function assetsInit$$module$lib$assets(gfx, audio, gconf) {
  function addLoader(prom) {
    /** @const */ var id = assets.lastLoaderID;
    assets.loaders[id] = false;
    assets.lastLoaderID++;
    prom.catch(gconf.errHandler ? gconf.errHandler : console.error).finally(function() {
      assets.loaders[id] = true;
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
    if (path) {
      assets.loadRoot = path;
    }
    return assets.loadRoot;
  }
  function loadFont(name, src, gw, gh, chars) {
    chars = chars === undefined ? ASCII_CHARS$$module$lib$assets : chars;
    /** @const */ var loader = new Promise < FontData > function(resolve, reject) {
      /** @const */ var path = isDataUrl$$module$lib$assets(src) ? src : assets.loadRoot + src;
      loadImg$$module$lib$assets(path).then(function(img) {
        /** @const */ var font = gfx.makeFont(gfx.makeTex(img), gw, gh, chars);
        assets.fonts[name] = font;
        resolve(font);
      }).catch(reject);
    };
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
          frames.push(quad$$module$lib$math(i * qw, j * qh, qw, qh));
        }
      }
      /** @const */ var sprite = {tex:tex, frames:frames, anims:conf.anims || {}};
      assets.sprites[name] = sprite;
      return sprite;
    }
    conf$jscomp$0 = conf$jscomp$0 === undefined ? {sliceX:1, sliceY:1, anims:{}} : conf$jscomp$0;
    /** @const */ var loader = new Promise < SpriteData > function(resolve, reject) {
      if (!src$jscomp$0) {
        return reject('expected sprite src for "' + name$jscomp$0 + '"');
      }
      if (typeof src$jscomp$0 === "string") {
        /** @const */ var path = isDataUrl$$module$lib$assets(src$jscomp$0) ? src$jscomp$0 : assets.loadRoot + src$jscomp$0;
        loadImg$$module$lib$assets(path).then(function(img) {
          resolve(loadRawSprite(name$jscomp$0, img, conf$jscomp$0));
        }).catch(reject);
      } else {
        resolve(loadRawSprite(name$jscomp$0, src$jscomp$0, conf$jscomp$0));
      }
    };
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
    /** @const */ var loader = new Promise < ShaderData > function(resolve, reject) {
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
    };
    addLoader(loader);
    return loader;
  }
  function loadSound(name, src) {
    /** @const */ var url = assets.loadRoot + src;
    /** @const */ var loader = new Promise < SoundData > function(resolve, reject) {
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
    };
    addLoader(loader);
    return loader;
  }
  function defFont() {
    return assets.fonts[DEF_FONT$$module$lib$assets];
  }
  /** @const */ var assets = {lastLoaderID:0, loadRoot:"", loaders:{}, sprites:{}, sounds:{}, fonts:{}, shaders:{}};
  loadFont(DEF_FONT$$module$lib$assets, unsciiSrc$$module$lib$assets, 8, 8);
  return {loadRoot:loadRoot, loadSprite:loadSprite, loadSound:loadSound, loadFont:loadFont, loadShader:loadShader, loadProgress:loadProgress, addLoader:addLoader, defFont:defFont, sprites:assets.sprites, fonts:assets.fonts, sounds:assets.sounds, shaders:assets.shaders};
}
/** @const */ var module$lib$assets = {};
/** @const */ module$lib$assets.DEF_FONT = DEF_FONT$$module$lib$assets;
/** @const */ module$lib$assets.assetsInit = assetsInit$$module$lib$assets;

$CLJS.module$lib$assets=module$lib$assets;
//# sourceMappingURL=module$lib$assets.js.map
