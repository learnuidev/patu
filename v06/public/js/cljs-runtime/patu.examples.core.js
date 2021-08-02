goog.provide('patu.examples.core');
goog.require('cljs.core');
goog.require('patu.examples.rogue.core');
patu.examples.core.start = (function patu$examples$core$start(){
return patu.examples.rogue.core.app();
});
patu.examples.core.init = (function patu$examples$core$init(){
return patu.examples.core.start();
});
goog.exportSymbol('patu.examples.core.init', patu.examples.core.init);

//# sourceMappingURL=patu.examples.core.js.map
