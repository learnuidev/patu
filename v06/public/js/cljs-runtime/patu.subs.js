goog.provide('patu.subs');
goog.require('cljs.core');
goog.require('patu.state');
goog.require('patu.utils');
patu.subs.browse_comps_raw = (function patu$subs$browse_comps_raw(){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).state.components;
});
patu.subs.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
patu.subs.reg_sub = (function patu$subs$reg_sub(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patu.subs.state,cljs.core.assoc,id,handler);
});
patu.subs.sub = (function patu$subs$sub(props){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(patu.subs.state),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
var G__28087 = patu.subs.browse_comps_raw();
var G__28088 = props;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__28087,G__28088) : handler.call(null,G__28087,G__28088));
} else {
return console.warn(["No subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)))].join(''));
}
});

//# sourceMappingURL=patu.subs.js.map
