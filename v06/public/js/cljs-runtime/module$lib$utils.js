function deepEq$$module$lib$utils(o1, o2) {
  /** @const */ var t1 = typeof o1;
  /** @const */ var t2 = typeof o2;
  if (t1 !== t2) {
    return false;
  }
  if (t1 === "object" && t2 === "object") {
    /** @const */ var k1 = Object.keys(o1);
    /** @const */ var k2 = Object.keys(o2);
    if (k1.length !== k2.length) {
      return false;
    }
    var $jscomp$iter$0 = $jscomp.makeIterator(k1);
    for (var $jscomp$key$k = $jscomp$iter$0.next(); !$jscomp$key$k.done; $jscomp$key$k = $jscomp$iter$0.next()) {
      /** @const */ var k = $jscomp$key$k.value;
      {
        /** @const */ var v1 = o1[k];
        /** @const */ var v2 = o2[k];
        if (!(typeof v1 === "function" && typeof v2 === "function")) {
          if (!deepEq$$module$lib$utils(v1, v2)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  return o1 === o2;
}
/** @const */ var module$lib$utils = {};
/** @const */ module$lib$utils.deepEq = deepEq$$module$lib$utils;

$CLJS.module$lib$utils=module$lib$utils;
//# sourceMappingURL=module$lib$utils.js.map
