function volume$$module$patu$index(audio, v) {
  if (v !== undefined) {
    audio.gainNode.gain.value = goog.math.clamp(v, 0, 3);
  }
  return audio.gainNode.gain.value;
}
/** @const */ var patu$$module$patu$index = {kaboom:window.kaboom, audio:audio, clamp:goog.math.clamp};
var $jscompDefaultExport$$module$patu$index = patu$$module$patu$index;
/** @const */ var module$patu$index = {};
/** @const */ module$patu$index.default = $jscompDefaultExport$$module$patu$index;

$CLJS.module$patu$index=module$patu$index;
//# sourceMappingURL=module$patu$index.js.map
