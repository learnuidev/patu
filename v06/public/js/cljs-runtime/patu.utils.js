goog.provide('patu.utils');
goog.require('cljs.core');
goog.require('goog.object');
/**
 * Works like clojure get but for objects
 * FUTURE WORK: Move it inside Protocols
 */
patu.utils.jget = (function patu$utils$jget(var_args){
var G__69155 = arguments.length;
switch (G__69155) {
case 2:
return patu.utils.jget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return patu.utils.jget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.utils.jget.cljs$core$IFn$_invoke$arity$2 = (function (obj,prop){
return patu.utils.jget.cljs$core$IFn$_invoke$arity$3(obj,prop,null);
}));

(patu.utils.jget.cljs$core$IFn$_invoke$arity$3 = (function (obj,prop,defval){
var or__4126__auto__ = goog.object.get(obj,cljs.core.name(prop));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return defval;
}
}));

(patu.utils.jget.cljs$lang$maxFixedArity = 3);

patu.utils.jget_in = (function patu$utils$jget_in(obj,props){
var f = cljs.core.first(props);
var res = cljs.core.rest(props);
if(cljs.core.seq(res)){
var G__69160 = patu.utils.jget.cljs$core$IFn$_invoke$arity$2(obj,f);
var G__69161 = res;
return (patu.utils.jget_in.cljs$core$IFn$_invoke$arity$2 ? patu.utils.jget_in.cljs$core$IFn$_invoke$arity$2(G__69160,G__69161) : patu.utils.jget_in.call(null,G__69160,G__69161));
} else {
return patu.utils.jget.cljs$core$IFn$_invoke$arity$2(obj,f);
}
});
patu.utils.objs = ({"foo": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),(1)], null)});
goog.object.get(patu.utils.objs,"foo","bar");
/**
 * 
 */
patu.utils.jset_BANG_ = (function patu$utils$jset_BANG_(obj,key,value){
goog.object.set(obj,cljs.core.name(key),cljs.core.clj__GT_js(value));

return obj;
});
patu.utils.jset_in_BANG_ = (function patu$utils$jset_in_BANG_(obj,props,val){
var f = cljs.core.first(props);
var res = cljs.core.rest(props);
if(cljs.core.seq(res)){
var G__69192 = patu.utils.jget.cljs$core$IFn$_invoke$arity$2(obj,f);
var G__69193 = res;
var G__69194 = val;
return (patu.utils.jset_in_BANG_.cljs$core$IFn$_invoke$arity$3 ? patu.utils.jset_in_BANG_.cljs$core$IFn$_invoke$arity$3(G__69192,G__69193,G__69194) : patu.utils.jset_in_BANG_.call(null,G__69192,G__69193,G__69194));
} else {
return patu.utils.jset_BANG_(obj,f,val);
}
});
patu.utils.ex_1 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),(0)], null)], null));

//# sourceMappingURL=patu.utils.js.map
