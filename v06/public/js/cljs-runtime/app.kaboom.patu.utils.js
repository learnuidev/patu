goog.provide('app.kaboom.patu.utils');
goog.require('cljs.core');
goog.require('goog.object');
/**
 * Works like clojure get but for objects
 * FUTURE WORK: Move it inside Protocols
 */
app.kaboom.patu.utils.js_get = (function app$kaboom$patu$utils$js_get(var_args){
var G__59518 = arguments.length;
switch (G__59518) {
case 2:
return app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2 = (function (obj,prop){
return app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3(obj,prop,null);
}));

(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3 = (function (obj,prop,defval){
var or__4126__auto__ = goog.object.get(obj,cljs.core.name(prop));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return defval;
}
}));

(app.kaboom.patu.utils.js_get.cljs$lang$maxFixedArity = 3);

/**
 * 
 */
app.kaboom.patu.utils.js_set_BANG_ = (function app$kaboom$patu$utils$js_set_BANG_(obj,key,value){
return goog.object.set(obj,cljs.core.name(key),cljs.core.clj__GT_js(value));
});

//# sourceMappingURL=app.kaboom.patu.utils.js.map
