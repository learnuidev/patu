function clamp$$module$patu$math(val, min, max) {
  if (min > max) {
    return clamp$$module$patu$math(val, max, min);
  }
  return Math.min(Math.max(val, min), max);
}
var $jscompDefaultExport$$module$patu$math = clamp$$module$patu$math;
/** @const */ var module$patu$math = {};
/** @const */ module$patu$math.default = $jscompDefaultExport$$module$patu$math;

$CLJS.module$patu$math=module$patu$math;
//# sourceMappingURL=module$patu$math.js.map
