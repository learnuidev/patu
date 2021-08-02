goog.provide('shadow.cljs.devtools.client.shared');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cognitect.transit');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.shared');
goog.require('shadow.remote.runtime.cljs.js_builtins');
goog.require('shadow.remote.runtime.obj_support');
goog.require('shadow.remote.runtime.tap_support');
goog.require('shadow.remote.runtime.eval_support');
goog.require('clojure.set');

/**
 * @interface
 */
shadow.cljs.devtools.client.shared.IHostSpecific = function(){};

var shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$dyn_35142 = (function (this$,action,done,error){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.cljs.devtools.client.shared.do_repl_init[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,action,done,error) : m__4429__auto__.call(null,this$,action,done,error));
} else {
var m__4426__auto__ = (shadow.cljs.devtools.client.shared.do_repl_init["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,action,done,error) : m__4426__auto__.call(null,this$,action,done,error));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-repl-init",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_repl_init = (function shadow$cljs$devtools$client$shared$do_repl_init(this$,action,done,error){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4(this$,action,done,error);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$dyn_35142(this$,action,done,error);
}
});

var shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$dyn_35143 = (function (this$,require_msg,done,error){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.cljs.devtools.client.shared.do_repl_require[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,require_msg,done,error) : m__4429__auto__.call(null,this$,require_msg,done,error));
} else {
var m__4426__auto__ = (shadow.cljs.devtools.client.shared.do_repl_require["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,require_msg,done,error) : m__4426__auto__.call(null,this$,require_msg,done,error));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-repl-require",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_repl_require = (function shadow$cljs$devtools$client$shared$do_repl_require(this$,require_msg,done,error){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4(this$,require_msg,done,error);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$dyn_35143(this$,require_msg,done,error);
}
});

var shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$dyn_35147 = (function (this$,invoke_msg){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.cljs.devtools.client.shared.do_invoke[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,invoke_msg) : m__4429__auto__.call(null,this$,invoke_msg));
} else {
var m__4426__auto__ = (shadow.cljs.devtools.client.shared.do_invoke["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,invoke_msg) : m__4426__auto__.call(null,this$,invoke_msg));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-invoke",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_invoke = (function shadow$cljs$devtools$client$shared$do_invoke(this$,invoke_msg){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2(this$,invoke_msg);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$dyn_35147(this$,invoke_msg);
}
});

if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.runtime_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.runtime_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.extensions_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.extensions_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.shared.start_all_extensions_BANG_ = (function shadow$cljs$devtools$client$shared$start_all_extensions_BANG_(){
var started_set = cljs.core.set(cljs.core.keys(cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref)));
var exts = cljs.core.deref(shadow.cljs.devtools.client.shared.extensions_ref);
var ext_set = cljs.core.set(cljs.core.keys(exts));
var pending_set = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ext_set,started_set);
var pending_set__$1 = pending_set;
while(true){
if(cljs.core.empty_QMARK_(pending_set__$1)){
return new cljs.core.Keyword("shadow.cljs.devtools.client.shared","done!","shadow.cljs.devtools.client.shared/done!",-748632664);
} else {
var G__35148 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pending_set__$1,started_set,exts,ext_set,pending_set){
return (function (pending_set__$2,ext_id){
var map__35065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exts,ext_id);
var map__35065__$1 = (((((!((map__35065 == null))))?(((((map__35065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35065):map__35065);
var ext = map__35065__$1;
var depends_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022));
var init_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"init-fn","init-fn",777257971));
if(cljs.core.truth_(cljs.core.some(pending_set__$2,depends_on))){
return pending_set__$2;
} else {
var started = (function (){var G__35067 = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
return (init_fn.cljs$core$IFn$_invoke$arity$1 ? init_fn.cljs$core$IFn$_invoke$arity$1(G__35067) : init_fn.call(null,G__35067));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.shared.runtime_ref,cljs.core.assoc,ext_id,started);

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending_set__$2,ext_id);
}
});})(pending_set__$1,started_set,exts,ext_set,pending_set))
,pending_set__$1,pending_set__$1);
pending_set__$1 = G__35148;
continue;

}
break;
}
});
shadow.cljs.devtools.client.shared.init_extension_BANG_ = (function shadow$cljs$devtools$client$shared$init_extension_BANG_(ext_id,depends_on,init_fn,stop_fn){
var temp__5739__auto___35149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref),ext_id);
if((temp__5739__auto___35149 == null)){
} else {
var started_35150 = temp__5739__auto___35149;
var map__35068_35151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.shared.extensions_ref),ext_id);
var map__35068_35152__$1 = (((((!((map__35068_35151 == null))))?(((((map__35068_35151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35068_35151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35068_35151):map__35068_35151);
var old_35153 = map__35068_35152__$1;
var stop_fn_35154__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068_35152__$1,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246));
(stop_fn_35154__$1.cljs$core$IFn$_invoke$arity$1 ? stop_fn_35154__$1.cljs$core$IFn$_invoke$arity$1(started_35150) : stop_fn_35154__$1.call(null,started_35150));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.runtime_ref,cljs.core.dissoc,ext_id);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.shared.extensions_ref,cljs.core.assoc,ext_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ext-id","ext-id",-653860474),ext_id,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022),depends_on,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246),stop_fn], null));

if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref))){
return shadow.cljs.devtools.client.shared.start_all_extensions_BANG_();
} else {
return null;
}
});
shadow.cljs.devtools.client.shared.transit_read = (function shadow$cljs$devtools$client$shared$transit_read(data){
var t = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(t,data);
});
shadow.cljs.devtools.client.shared.transit_str = (function shadow$cljs$devtools$client$shared$transit_str(obj){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(w,obj);
});
shadow.cljs.devtools.client.shared.continue_BANG_ = (function shadow$cljs$devtools$client$shared$continue_BANG_(state){
return (shadow.cljs.devtools.client.shared.interpret_actions.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.shared.interpret_actions.cljs$core$IFn$_invoke$arity$1(state) : shadow.cljs.devtools.client.shared.interpret_actions.call(null,state));
});
shadow.cljs.devtools.client.shared.abort_BANG_ = (function shadow$cljs$devtools$client$shared$abort_BANG_(p__35070,action,ex){
var map__35071 = p__35070;
var map__35071__$1 = (((((!((map__35071 == null))))?(((((map__35071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35071):map__35071);
var state = map__35071__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35071__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__35073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"runtime-error","runtime-error",-2116843646),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ex","ex",-1413771341),ex,new cljs.core.Keyword(null,"ex-action","ex-action",672251553),action], 0)),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228)], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35073) : callback.call(null,G__35073));
});
shadow.cljs.devtools.client.shared.handle_invoke = (function shadow$cljs$devtools$client$shared$handle_invoke(state,runtime,action){
var res = shadow.cljs.devtools.client.shared.do_invoke(runtime,action);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,res);
});
shadow.cljs.devtools.client.shared.handle_repl_invoke = (function shadow$cljs$devtools$client$shared$handle_repl_invoke(state,runtime,action){
try{var ret = shadow.cljs.devtools.client.shared.do_invoke(runtime,action);
(cljs.core._STAR_3 = cljs.core._STAR_2);

(cljs.core._STAR_2 = cljs.core._STAR_1);

(cljs.core._STAR_1 = ret);

if(cljs.core.truth_(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(action))){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,ret);
}
}catch (e35074){var e = e35074;
(cljs.core._STAR_e = e);

throw e;
}});
shadow.cljs.devtools.client.shared.interpret_action = (function shadow$cljs$devtools$client$shared$interpret_action(p__35075,p__35076){
var map__35077 = p__35075;
var map__35077__$1 = (((((!((map__35077 == null))))?(((((map__35077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35077):map__35077);
var state = map__35077__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35077__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35078 = p__35076;
var map__35078__$1 = (((((!((map__35078 == null))))?(((((map__35078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35078):map__35078);
var action = map__35078__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__35081 = type;
var G__35081__$1 = (((G__35081 instanceof cljs.core.Keyword))?G__35081.fqn:null);
switch (G__35081__$1) {
case "repl/init":
return shadow.cljs.devtools.client.shared.do_repl_init(runtime,action,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime),cljs.core.assoc,new cljs.core.Keyword(null,"init-complete","init-complete",-157163484),true);

return shadow.cljs.devtools.client.shared.continue_BANG_(state);
}),(function (ex){
return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}));

break;
case "repl/set-ns":
var map__35082 = action;
var map__35082__$1 = (((((!((map__35082 == null))))?(((((map__35082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35082):map__35082);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35082__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.shared.continue_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"ns","ns",441598760),ns),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,null));

break;
case "repl/require":
var map__35084 = action;
var map__35084__$1 = (((((!((map__35084 == null))))?(((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35084):map__35084);
var internal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35084__$1,new cljs.core.Keyword(null,"internal","internal",-854870097));
return shadow.cljs.devtools.client.shared.do_repl_require(runtime,action,(function (sources){
return shadow.cljs.devtools.client.shared.continue_BANG_((function (){var G__35086 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"loaded-sources","loaded-sources",-300252436),cljs.core.into,sources);
if(cljs.core.not(internal)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__35086,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,null);
} else {
return G__35086;
}
})());
}),(function (ex){
return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}));

break;
case "repl/invoke":
try{var repl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"repl","repl",-35398667)], null));
return shadow.cljs.devtools.client.shared.continue_BANG_((function (){var G__35088 = state;
var G__35088__$1 = (cljs.core.truth_(repl)?shadow.cljs.devtools.client.shared.handle_repl_invoke(G__35088,runtime,action):G__35088);
if(cljs.core.not(repl)){
return shadow.cljs.devtools.client.shared.handle_invoke(G__35088__$1,runtime,action);
} else {
return G__35088__$1;
}
})());
}catch (e35087){var ex = e35087;
return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}
break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unhandled repl action",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"action","action",-811238024),action], null));

}
});
shadow.cljs.devtools.client.shared.interpret_actions = (function shadow$cljs$devtools$client$shared$interpret_actions(p__35089){
var map__35090 = p__35089;
var map__35090__$1 = (((((!((map__35090 == null))))?(((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35090):map__35090);
var state = map__35090__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35090__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35090__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.empty_QMARK_(queue)){
var map__35092 = state;
var map__35092__$1 = (((((!((map__35092 == null))))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35092):map__35092);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35092__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__35094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"queue","queue",1455835879)], 0)),new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653),Date.now());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35094) : callback.call(null,G__35094));
} else {
if(cljs.core.seq(warnings)){
var map__35095 = state;
var map__35095__$1 = (((((!((map__35095 == null))))?(((((map__35095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35095):map__35095);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35095__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__35097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"queue","queue",1455835879)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"warnings","warnings",-735437651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings,new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653),Date.now()], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35097) : callback.call(null,G__35097));
} else {
var action = cljs.core.first(queue);
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.rest);
return shadow.cljs.devtools.client.shared.interpret_action(state__$1,action);

}
}
});
shadow.cljs.devtools.client.shared.setup_actions = (function shadow$cljs$devtools$client$shared$setup_actions(runtime,input,p__35098,callback){
var map__35099 = p__35098;
var map__35099__$1 = (((((!((map__35099 == null))))?(((((map__35099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35099):map__35099);
var msg = map__35099__$1;
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"loaded-sources","loaded-sources",-300252436),new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"time-start","time-start",-590811745),new cljs.core.Keyword(null,"results","results",-1134170113)],[actions,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(input),msg,cljs.core.PersistentVector.EMPTY,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warnings","warnings",-735437651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actions], 0))),new cljs.core.Keyword(null,"ok","ok",967785236),runtime,input,callback,Date.now(),cljs.core.PersistentVector.EMPTY]);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {shadow.remote.runtime.api.IRuntime}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {shadow.remote.runtime.api.IEvalCLJS}
*/
shadow.cljs.devtools.client.shared.Runtime = (function (state_ref,send_fn,close_fn,__meta,__extmap,__hash){
this.state_ref = state_ref;
this.send_fn = send_fn;
this.close_fn = close_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35102,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35106 = k35102;
var G__35106__$1 = (((G__35106 instanceof cljs.core.Keyword))?G__35106.fqn:null);
switch (G__35106__$1) {
case "state-ref":
return self__.state_ref;

break;
case "send-fn":
return self__.send_fn;

break;
case "close-fn":
return self__.close_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35102,else__4383__auto__);

}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35107){
var vec__35108 = p__35107;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.cljs.devtools.client.shared.Runtime{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),self__.close_fn],null))], null),self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35101){
var self__ = this;
var G__35101__$1 = this;
return (new cljs.core.RecordIter((0),G__35101__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.send_fn,self__.close_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (229736719 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35103,other35104){
var self__ = this;
var this35103__$1 = this;
return (((!((other35104 == null)))) && ((this35103__$1.constructor === other35104.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35103__$1.state_ref,other35104.state_ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35103__$1.send_fn,other35104.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35103__$1.close_fn,other35104.close_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35103__$1.__extmap,other35104.__extmap)));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalCLJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3 = (function (this$,input,callback){
var self__ = this;
var this$__$1 = this;
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-compile","cljs-compile",-1735075279),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"include-init","include-init",1061115199),cljs.core.not(new cljs.core.Keyword(null,"init-complete","init-complete",-157163484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_ref)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cljs-compile-result","cljs-compile-result",-1137644713),(function (msg){
return shadow.cljs.devtools.client.shared.interpret_actions(shadow.cljs.devtools.client.shared.setup_actions(this$__$1,input,msg,callback));
}),new cljs.core.Keyword(null,"cljs-compile-error","cljs-compile-error",-371665768),(function (p__35111){
var map__35112 = p__35111;
var map__35112__$1 = (((((!((map__35112 == null))))?(((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35112):map__35112);
var ex_oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737));
var ex_client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var G__35114 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"compile-error","compile-error",-1313154526),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984),ex_client_id,new cljs.core.Keyword(null,"report","report",1394055010),report], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35114) : callback.call(null,G__35114));
}),new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),(function (msg){
var G__35115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"worker-not-found","worker-not-found",-1848657608)], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35115) : callback.call(null,G__35115));
})], null));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 = (function (this$,msg){
var self__ = this;
var this$__$1 = this;
var s = (function (){try{return shadow.cljs.devtools.client.shared.transit_str(msg);
}catch (e35116){var e = e35116;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to encode relay msg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}})();
return (self__.send_fn.cljs$core$IFn$_invoke$arity$1 ? self__.send_fn.cljs$core$IFn$_invoke$arity$1(s) : self__.send_fn.call(null,s));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 = (function (runtime,key,spec){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.add_extension(runtime__$1,key,spec);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 = (function (runtime,key){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.del_extension(runtime__$1,key);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),null,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.send_fn,self__.close_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35101){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35117 = cljs.core.keyword_identical_QMARK_;
var expr__35118 = k__4388__auto__;
if(cljs.core.truth_((pred__35117.cljs$core$IFn$_invoke$arity$2 ? pred__35117.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),expr__35118) : pred__35117.call(null,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),expr__35118)))){
return (new shadow.cljs.devtools.client.shared.Runtime(G__35101,self__.send_fn,self__.close_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35117.cljs$core$IFn$_invoke$arity$2 ? pred__35117.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__35118) : pred__35117.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__35118)))){
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,G__35101,self__.close_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35117.cljs$core$IFn$_invoke$arity$2 ? pred__35117.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),expr__35118) : pred__35117.call(null,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),expr__35118)))){
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.send_fn,G__35101,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.send_fn,self__.close_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35101),null));
}
}
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),self__.close_fn,null))], null),self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35101){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.send_fn,self__.close_fn,G__35101,self__.__extmap,self__.__hash));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.cljs.devtools.client.shared.Runtime.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-ref","state-ref",-526560817,null),new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null),new cljs.core.Symbol(null,"close-fn","close-fn",-139240985,null)], null);
}));

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$type = true);

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.cljs.devtools.client.shared/Runtime",null,(1),null));
}));

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.cljs.devtools.client.shared/Runtime");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.shared/Runtime.
 */
shadow.cljs.devtools.client.shared.__GT_Runtime = (function shadow$cljs$devtools$client$shared$__GT_Runtime(state_ref,send_fn,close_fn){
return (new shadow.cljs.devtools.client.shared.Runtime(state_ref,send_fn,close_fn,null,null,null));
});

/**
 * Factory function for shadow.cljs.devtools.client.shared/Runtime, taking a map of keywords to field values.
 */
shadow.cljs.devtools.client.shared.map__GT_Runtime = (function shadow$cljs$devtools$client$shared$map__GT_Runtime(G__35105){
var extmap__4419__auto__ = (function (){var G__35120 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35105,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512)], 0));
if(cljs.core.record_QMARK_(G__35105)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35120);
} else {
return G__35120;
}
})();
return (new shadow.cljs.devtools.client.shared.Runtime(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(G__35105),new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__35105),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512).cljs$core$IFn$_invoke$arity$1(G__35105),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.print_subs !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.print_subs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.shared.init_runtime_BANG_ = (function shadow$cljs$devtools$client$shared$init_runtime_BANG_(p__35121){
var map__35122 = p__35121;
var map__35122__$1 = (((((!((map__35122 == null))))?(((((map__35122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35122):map__35122);
var runtime = map__35122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
shadow.remote.runtime.shared.add_defaults(runtime);

var obj_support = shadow.remote.runtime.obj_support.start(runtime);
var tap_support = shadow.remote.runtime.tap_support.start(runtime,obj_support);
var eval_support = shadow.remote.runtime.eval_support.start(runtime,obj_support);
var interval = setInterval((function (){
return shadow.remote.runtime.shared.run_on_idle(state_ref);
}),(1000));
var stop = (function (){
clearTimeout(interval);

shadow.remote.runtime.eval_support.stop(eval_support);

shadow.remote.runtime.tap_support.stop(tap_support);

shadow.remote.runtime.obj_support.stop(obj_support);

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
});
(goog.global.cljs_eval = (function (input,opts){
var input__$1 = ((cljs.core.map_QMARK_(input))?input:((((typeof input === 'string') && (cljs.core.not(opts))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),input,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null):((((typeof input === 'string') && (cljs.core.object_QMARK_(opts))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),input,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(goog.object.get(opts,"ns"))], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments, call cljs_eval(string, opts-obj) or cljs_eval(map)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null))})()
)));
return (new Promise((function (resolve,reject){
return shadow.remote.runtime.api.cljs_eval(runtime,input__$1,(function (p__35124){
var map__35125 = p__35124;
var map__35125__$1 = (((((!((map__35125 == null))))?(((((map__35125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35125):map__35125);
var info = map__35125__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35125__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35125__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ok","ok",967785236),result)){
var G__35127 = cljs.core.last(results);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__35127) : resolve.call(null,G__35127));
} else {
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(info) : reject.call(null,info));
}
}));
})));
}));

cljs.core.reset_BANG_(shadow.cljs.devtools.client.shared.runtime_ref,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-support","tap-support",80346439),tap_support,new cljs.core.Keyword(null,"eval-support","eval-support",-1581799533),eval_support,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","print-support","shadow.cljs.devtools.client.shared/print-support",-1090548637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"runtime-print-sub","runtime-print-sub",1832904759),(function (p__35128){
var map__35129 = p__35128;
var map__35129__$1 = (((((!((map__35129 == null))))?(((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35129):map__35129);
var msg = map__35129__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.conj,from);

return shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-notify","request-notify",351029173),new cljs.core.Keyword(null,"notify-op","notify-op",1568109361),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","runtime-print-disconnect","shadow.cljs.devtools.client.shared/runtime-print-disconnect",2030167412),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"client-id","client-id",-464622140),from], null)], null));
}),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),(function (p__35131){
var map__35132 = p__35131;
var map__35132__$1 = (((((!((map__35132 == null))))?(((((map__35132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35132):map__35132);
var msg = map__35132__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,from);
}),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","runtime-print-disconnect","shadow.cljs.devtools.client.shared/runtime-print-disconnect",2030167412),(function (p__35134){
var map__35135 = p__35134;
var map__35135__$1 = (((((!((map__35135 == null))))?(((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35135):map__35135);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,client_id);
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),(function (p__35137){
var map__35138 = p__35137;
var map__35138__$1 = (((((!((map__35138 == null))))?(((((map__35138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35138):map__35138);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35138__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,client_id);
})], null));

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

shadow.cljs.devtools.client.env.set_print_fns_BANG_((function (stream,text){
var subs = cljs.core.deref(shadow.cljs.devtools.client.shared.print_subs);
if(cljs.core.seq(subs)){
return shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print","runtime-print",-1950604603),new cljs.core.Keyword(null,"to","to",192099007),subs,new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
} else {
return null;
}
}));

shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shared","shadow.cljs.devtools.client.shared/shared",85374117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
return shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-notify","request-notify",351029173),new cljs.core.Keyword(null,"notify-op","notify-op",1568109361),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword("shadow.cljs.model","worker-for","shadow.cljs.model/worker-for",-228262107),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id)], null)], null));
})], null));

if(cljs.core.seq(cljs.core.deref(shadow.cljs.devtools.client.shared.extensions_ref))){
return shadow.cljs.devtools.client.shared.start_all_extensions_BANG_();
} else {
return null;
}
});
shadow.cljs.devtools.client.shared.stop_runtime_BANG_ = (function shadow$cljs$devtools$client$shared$stop_runtime_BANG_(e){
var temp__5739__auto__ = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
if((temp__5739__auto__ == null)){
return null;
} else {
var runtime = temp__5739__auto__;
shadow.remote.runtime.shared.trigger_on_disconnect_BANG_(new cljs.core.Keyword(null,"runtime","runtime",-1331573996).cljs$core$IFn$_invoke$arity$1(runtime),e);

cljs.core.reset_BANG_(shadow.cljs.devtools.client.shared.runtime_ref,null);

var map__35140 = runtime;
var map__35140__$1 = (((((!((map__35140 == null))))?(((((map__35140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35140):map__35140);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35140__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return (stop.cljs$core$IFn$_invoke$arity$0 ? stop.cljs$core$IFn$_invoke$arity$0() : stop.call(null));
}
});

//# sourceMappingURL=shadow.cljs.devtools.client.shared.js.map
