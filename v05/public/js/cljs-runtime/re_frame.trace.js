goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__28129){
var map__28130 = p__28129;
var map__28130__$1 = (((((!((map__28130 == null))))?(((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28130):map__28130);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__28135_28168 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__28136_28169 = null;
var count__28137_28170 = (0);
var i__28138_28171 = (0);
while(true){
if((i__28138_28171 < count__28137_28170)){
var vec__28149_28172 = chunk__28136_28169.cljs$core$IIndexed$_nth$arity$2(null,i__28138_28171);
var k_28173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149_28172,(0),null);
var cb_28174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149_28172,(1),null);
try{var G__28153_28179 = cljs.core.deref(re_frame.trace.traces);
(cb_28174.cljs$core$IFn$_invoke$arity$1 ? cb_28174.cljs$core$IFn$_invoke$arity$1(G__28153_28179) : cb_28174.call(null,G__28153_28179));
}catch (e28152){var e_28180 = e28152;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_28173,"while storing",cljs.core.deref(re_frame.trace.traces),e_28180], 0));
}

var G__28181 = seq__28135_28168;
var G__28182 = chunk__28136_28169;
var G__28183 = count__28137_28170;
var G__28184 = (i__28138_28171 + (1));
seq__28135_28168 = G__28181;
chunk__28136_28169 = G__28182;
count__28137_28170 = G__28183;
i__28138_28171 = G__28184;
continue;
} else {
var temp__5735__auto___28185 = cljs.core.seq(seq__28135_28168);
if(temp__5735__auto___28185){
var seq__28135_28187__$1 = temp__5735__auto___28185;
if(cljs.core.chunked_seq_QMARK_(seq__28135_28187__$1)){
var c__4556__auto___28188 = cljs.core.chunk_first(seq__28135_28187__$1);
var G__28189 = cljs.core.chunk_rest(seq__28135_28187__$1);
var G__28190 = c__4556__auto___28188;
var G__28191 = cljs.core.count(c__4556__auto___28188);
var G__28192 = (0);
seq__28135_28168 = G__28189;
chunk__28136_28169 = G__28190;
count__28137_28170 = G__28191;
i__28138_28171 = G__28192;
continue;
} else {
var vec__28154_28195 = cljs.core.first(seq__28135_28187__$1);
var k_28196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154_28195,(0),null);
var cb_28197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154_28195,(1),null);
try{var G__28158_28198 = cljs.core.deref(re_frame.trace.traces);
(cb_28197.cljs$core$IFn$_invoke$arity$1 ? cb_28197.cljs$core$IFn$_invoke$arity$1(G__28158_28198) : cb_28197.call(null,G__28158_28198));
}catch (e28157){var e_28199 = e28157;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_28196,"while storing",cljs.core.deref(re_frame.trace.traces),e_28199], 0));
}

var G__28200 = cljs.core.next(seq__28135_28187__$1);
var G__28201 = null;
var G__28202 = (0);
var G__28203 = (0);
seq__28135_28168 = G__28200;
chunk__28136_28169 = G__28201;
count__28137_28170 = G__28202;
i__28138_28171 = G__28203;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
