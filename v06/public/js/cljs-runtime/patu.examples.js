goog.provide('patu.examples');
goog.require('cljs.core');
goog.require('patu.examples.flappy');
patu.examples.start = (function patu$examples$start(){
return patu.examples.flappy.app();
});
patu.examples.init = (function patu$examples$init(){
return patu.examples.start();
});
goog.exportSymbol('patu.examples.init', patu.examples.init);

//# sourceMappingURL=patu.examples.js.map
