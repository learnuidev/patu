goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28431 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28432 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28432);

try{try{var seq__28435 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28436 = null;
var count__28437 = (0);
var i__28438 = (0);
while(true){
if((i__28438 < count__28437)){
var vec__28448 = chunk__28436.cljs$core$IIndexed$_nth$arity$2(null,i__28438);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28448,(1),null);
var temp__5733__auto___28513 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28513)){
var effect_fn_28514 = temp__5733__auto___28513;
(effect_fn_28514.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28514.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28514.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28515 = seq__28435;
var G__28516 = chunk__28436;
var G__28517 = count__28437;
var G__28518 = (i__28438 + (1));
seq__28435 = G__28515;
chunk__28436 = G__28516;
count__28437 = G__28517;
i__28438 = G__28518;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28435);
if(temp__5735__auto__){
var seq__28435__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28435__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28435__$1);
var G__28519 = cljs.core.chunk_rest(seq__28435__$1);
var G__28520 = c__4556__auto__;
var G__28521 = cljs.core.count(c__4556__auto__);
var G__28522 = (0);
seq__28435 = G__28519;
chunk__28436 = G__28520;
count__28437 = G__28521;
i__28438 = G__28522;
continue;
} else {
var vec__28452 = cljs.core.first(seq__28435__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(1),null);
var temp__5733__auto___28523 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28523)){
var effect_fn_28524 = temp__5733__auto___28523;
(effect_fn_28524.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28524.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28524.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28525 = cljs.core.next(seq__28435__$1);
var G__28526 = null;
var G__28527 = (0);
var G__28528 = (0);
seq__28435 = G__28525;
chunk__28436 = G__28526;
count__28437 = G__28527;
i__28438 = G__28528;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__28106__auto___28529 = re_frame.interop.now();
var duration__28107__auto___28530 = (end__28106__auto___28529 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28107__auto___28530,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__28106__auto___28529);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28431);
}} else {
var seq__28456 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28457 = null;
var count__28458 = (0);
var i__28459 = (0);
while(true){
if((i__28459 < count__28458)){
var vec__28467 = chunk__28457.cljs$core$IIndexed$_nth$arity$2(null,i__28459);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(1),null);
var temp__5733__auto___28531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28531)){
var effect_fn_28532 = temp__5733__auto___28531;
(effect_fn_28532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28532.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28533 = seq__28456;
var G__28534 = chunk__28457;
var G__28535 = count__28458;
var G__28536 = (i__28459 + (1));
seq__28456 = G__28533;
chunk__28457 = G__28534;
count__28458 = G__28535;
i__28459 = G__28536;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28456);
if(temp__5735__auto__){
var seq__28456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28456__$1);
var G__28537 = cljs.core.chunk_rest(seq__28456__$1);
var G__28538 = c__4556__auto__;
var G__28539 = cljs.core.count(c__4556__auto__);
var G__28540 = (0);
seq__28456 = G__28537;
chunk__28457 = G__28538;
count__28458 = G__28539;
i__28459 = G__28540;
continue;
} else {
var vec__28472 = cljs.core.first(seq__28456__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(1),null);
var temp__5733__auto___28543 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28543)){
var effect_fn_28544 = temp__5733__auto___28543;
(effect_fn_28544.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28544.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28544.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28545 = cljs.core.next(seq__28456__$1);
var G__28546 = null;
var G__28547 = (0);
var G__28548 = (0);
seq__28456 = G__28545;
chunk__28457 = G__28546;
count__28458 = G__28547;
i__28459 = G__28548;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__28476 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28477 = null;
var count__28478 = (0);
var i__28479 = (0);
while(true){
if((i__28479 < count__28478)){
var map__28485 = chunk__28477.cljs$core$IIndexed$_nth$arity$2(null,i__28479);
var map__28485__$1 = (((((!((map__28485 == null))))?(((((map__28485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28485):map__28485);
var effect = map__28485__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__28476,chunk__28477,count__28478,i__28479,map__28485,map__28485__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__28476,chunk__28477,count__28478,i__28479,map__28485,map__28485__$1,effect,ms,dispatch))
,ms);
}


var G__28549 = seq__28476;
var G__28550 = chunk__28477;
var G__28551 = count__28478;
var G__28552 = (i__28479 + (1));
seq__28476 = G__28549;
chunk__28477 = G__28550;
count__28478 = G__28551;
i__28479 = G__28552;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28476);
if(temp__5735__auto__){
var seq__28476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28476__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28476__$1);
var G__28555 = cljs.core.chunk_rest(seq__28476__$1);
var G__28556 = c__4556__auto__;
var G__28557 = cljs.core.count(c__4556__auto__);
var G__28558 = (0);
seq__28476 = G__28555;
chunk__28477 = G__28556;
count__28478 = G__28557;
i__28479 = G__28558;
continue;
} else {
var map__28487 = cljs.core.first(seq__28476__$1);
var map__28487__$1 = (((((!((map__28487 == null))))?(((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28487):map__28487);
var effect = map__28487__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28487__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28487__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__28476,chunk__28477,count__28478,i__28479,map__28487,map__28487__$1,effect,ms,dispatch,seq__28476__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__28476,chunk__28477,count__28478,i__28479,map__28487,map__28487__$1,effect,ms,dispatch,seq__28476__$1,temp__5735__auto__))
,ms);
}


var G__28559 = cljs.core.next(seq__28476__$1);
var G__28560 = null;
var G__28561 = (0);
var G__28562 = (0);
seq__28476 = G__28559;
chunk__28477 = G__28560;
count__28478 = G__28561;
i__28479 = G__28562;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28492 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28493 = null;
var count__28494 = (0);
var i__28495 = (0);
while(true){
if((i__28495 < count__28494)){
var event = chunk__28493.cljs$core$IIndexed$_nth$arity$2(null,i__28495);
re_frame.router.dispatch(event);


var G__28565 = seq__28492;
var G__28566 = chunk__28493;
var G__28567 = count__28494;
var G__28568 = (i__28495 + (1));
seq__28492 = G__28565;
chunk__28493 = G__28566;
count__28494 = G__28567;
i__28495 = G__28568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28492);
if(temp__5735__auto__){
var seq__28492__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28492__$1);
var G__28569 = cljs.core.chunk_rest(seq__28492__$1);
var G__28570 = c__4556__auto__;
var G__28571 = cljs.core.count(c__4556__auto__);
var G__28572 = (0);
seq__28492 = G__28569;
chunk__28493 = G__28570;
count__28494 = G__28571;
i__28495 = G__28572;
continue;
} else {
var event = cljs.core.first(seq__28492__$1);
re_frame.router.dispatch(event);


var G__28573 = cljs.core.next(seq__28492__$1);
var G__28574 = null;
var G__28575 = (0);
var G__28576 = (0);
seq__28492 = G__28573;
chunk__28493 = G__28574;
count__28494 = G__28575;
i__28495 = G__28576;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28496 = cljs.core.seq(value);
var chunk__28497 = null;
var count__28498 = (0);
var i__28499 = (0);
while(true){
if((i__28499 < count__28498)){
var event = chunk__28497.cljs$core$IIndexed$_nth$arity$2(null,i__28499);
clear_event(event);


var G__28577 = seq__28496;
var G__28578 = chunk__28497;
var G__28579 = count__28498;
var G__28580 = (i__28499 + (1));
seq__28496 = G__28577;
chunk__28497 = G__28578;
count__28498 = G__28579;
i__28499 = G__28580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28496);
if(temp__5735__auto__){
var seq__28496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28496__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28496__$1);
var G__28581 = cljs.core.chunk_rest(seq__28496__$1);
var G__28582 = c__4556__auto__;
var G__28583 = cljs.core.count(c__4556__auto__);
var G__28584 = (0);
seq__28496 = G__28581;
chunk__28497 = G__28582;
count__28498 = G__28583;
i__28499 = G__28584;
continue;
} else {
var event = cljs.core.first(seq__28496__$1);
clear_event(event);


var G__28586 = cljs.core.next(seq__28496__$1);
var G__28587 = null;
var G__28588 = (0);
var G__28589 = (0);
seq__28496 = G__28586;
chunk__28497 = G__28587;
count__28498 = G__28588;
i__28499 = G__28589;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
