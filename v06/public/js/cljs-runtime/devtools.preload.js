goog.provide('devtools.preload');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.core');
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}

//# sourceMappingURL=devtools.preload.js.map
