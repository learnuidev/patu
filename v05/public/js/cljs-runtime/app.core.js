goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.examples.patuv06.one');
app.core.start = (function app$core$start(){
return app.examples.patuv06.one.app();
});
app.core.init = (function app$core$init(){
return app.core.start();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
