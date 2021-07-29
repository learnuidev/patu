goog.provide('app.kaboom_examples.metro.scenes.two');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom_examples.metro.assets');
app.kaboom_examples.metro.scenes.two.init = (function app$kaboom_examples$metro$scenes$two$init(score){
var vec__68635 = app.kaboom.patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68635,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68635,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Scene Two"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-2","dialog-2",-2000279801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"TODO!",(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((80) + y)], null)], null)], null)], null)], null)], null);
});
app.kaboom_examples.metro.scenes.two.event = (function app$kaboom_examples$metro$scenes$two$event(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","one","scene/one",1027080524));
})], null)], null);
});

//# sourceMappingURL=app.kaboom_examples.metro.scenes.two.js.map
