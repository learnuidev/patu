goog.provide('reagent_dev_tools.preload');
goog.require('cljs.core');
goog.require('reagent_dev_tools.core');
goog.require('reagent_dev_tools.state_tree');
reagent_dev_tools.preload.start = (function reagent_dev_tools$preload$start(){
var opts = null;
return reagent_dev_tools.core.start_BANG_(opts);
});
if(cljs.core.truth_((function (){var G__26555 = document.readyState;
var fexpr__26554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["interactive",null,"complete",null], null), null);
return (fexpr__26554.cljs$core$IFn$_invoke$arity$1 ? fexpr__26554.cljs$core$IFn$_invoke$arity$1(G__26555) : fexpr__26554.call(null,G__26555));
})())){
reagent_dev_tools.preload.start();
} else {
document.addEventListener("DOMContentLoaded",(function (){
return reagent_dev_tools.preload.start();
}));
}

//# sourceMappingURL=reagent_dev_tools.preload.js.map
