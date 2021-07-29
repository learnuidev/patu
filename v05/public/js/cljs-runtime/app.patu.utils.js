goog.provide('app.patu.utils');
goog.require('cljs.core');
goog.require('goog.object');
/**
 * Works like clojure get but for objects
 * FUTURE WORK: Move it inside Protocols
 */
app.patu.utils.js_get = (function app$patu$utils$js_get(var_args){
var G__26621 = arguments.length;
switch (G__26621) {
case 2:
return app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2 = (function (obj,prop){
return app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3(obj,prop,null);
}));

(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$3 = (function (obj,prop,defval){
var or__4126__auto__ = goog.object.get(obj,cljs.core.name(prop));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return defval;
}
}));

(app.patu.utils.js_get.cljs$lang$maxFixedArity = 3);

/**
 * 
 */
app.patu.utils.js_set_BANG_ = (function app$patu$utils$js_set_BANG_(obj,key,value){
return goog.object.set(obj,cljs.core.name(key),cljs.core.clj__GT_js(value));
});

//# sourceMappingURL=app.patu.utils.js.map
