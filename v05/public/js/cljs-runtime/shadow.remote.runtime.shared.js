goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34600,res){
var map__34602 = p__34600;
var map__34602__$1 = (((((!((map__34602 == null))))?(((((map__34602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34602):map__34602);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34602__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34602__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34607 = res;
var G__34607__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34607,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34607);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34607__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34607__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34637,msg,handlers,timeout_after_ms){
var map__34638 = p__34637;
var map__34638__$1 = (((((!((map__34638 == null))))?(((((map__34638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34638):map__34638);
var runtime = map__34638__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34643,p__34644){
var map__34645 = p__34643;
var map__34645__$1 = (((((!((map__34645 == null))))?(((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34645):map__34645);
var runtime = map__34645__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34645__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34647 = p__34644;
var map__34647__$1 = (((((!((map__34647 == null))))?(((((map__34647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34647):map__34647);
var msg = map__34647__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34650 = cljs.core.deref(state_ref);
var map__34650__$1 = (((((!((map__34650 == null))))?(((((map__34650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34650):map__34650);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34650__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34650__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

var seq__34655 = cljs.core.seq(cljs.core.vals(extensions));
var chunk__34657 = null;
var count__34658 = (0);
var i__34659 = (0);
while(true){
if((i__34659 < count__34658)){
var map__34665 = chunk__34657.cljs$core$IIndexed$_nth$arity$2(null,i__34659);
var map__34665__$1 = (((((!((map__34665 == null))))?(((((map__34665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34665):map__34665);
var ext = map__34665__$1;
var on_welcome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
if(cljs.core.truth_(on_welcome)){
(on_welcome.cljs$core$IFn$_invoke$arity$0 ? on_welcome.cljs$core$IFn$_invoke$arity$0() : on_welcome.call(null));


var G__34785 = seq__34655;
var G__34786 = chunk__34657;
var G__34787 = count__34658;
var G__34788 = (i__34659 + (1));
seq__34655 = G__34785;
chunk__34657 = G__34786;
count__34658 = G__34787;
i__34659 = G__34788;
continue;
} else {
var G__34789 = seq__34655;
var G__34790 = chunk__34657;
var G__34791 = count__34658;
var G__34792 = (i__34659 + (1));
seq__34655 = G__34789;
chunk__34657 = G__34790;
count__34658 = G__34791;
i__34659 = G__34792;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34655);
if(temp__5735__auto__){
var seq__34655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34655__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34655__$1);
var G__34793 = cljs.core.chunk_rest(seq__34655__$1);
var G__34794 = c__4556__auto__;
var G__34795 = cljs.core.count(c__4556__auto__);
var G__34796 = (0);
seq__34655 = G__34793;
chunk__34657 = G__34794;
count__34658 = G__34795;
i__34659 = G__34796;
continue;
} else {
var map__34667 = cljs.core.first(seq__34655__$1);
var map__34667__$1 = (((((!((map__34667 == null))))?(((((map__34667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34667):map__34667);
var ext = map__34667__$1;
var on_welcome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
if(cljs.core.truth_(on_welcome)){
(on_welcome.cljs$core$IFn$_invoke$arity$0 ? on_welcome.cljs$core$IFn$_invoke$arity$0() : on_welcome.call(null));


var G__34797 = cljs.core.next(seq__34655__$1);
var G__34798 = null;
var G__34799 = (0);
var G__34800 = (0);
seq__34655 = G__34797;
chunk__34657 = G__34798;
count__34658 = G__34799;
i__34659 = G__34800;
continue;
} else {
var G__34801 = cljs.core.next(seq__34655__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34655 = G__34801;
chunk__34657 = G__34802;
count__34658 = G__34803;
i__34659 = G__34804;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34675){
var map__34676 = p__34675;
var map__34676__$1 = (((((!((map__34676 == null))))?(((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34676):map__34676);
var runtime = map__34676__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4126__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34680,msg){
var map__34681 = p__34680;
var map__34681__$1 = (((((!((map__34681 == null))))?(((((map__34681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34681):map__34681);
var runtime = map__34681__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34681__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34702,key,p__34703){
var map__34704 = p__34702;
var map__34704__$1 = (((((!((map__34704 == null))))?(((((map__34704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34704):map__34704);
var state = map__34704__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34704__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34705 = p__34703;
var map__34705__$1 = (((((!((map__34705 == null))))?(((((map__34705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34705):map__34705);
var spec = map__34705__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34705__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34709,key,spec){
var map__34710 = p__34709;
var map__34710__$1 = (((((!((map__34710 == null))))?(((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34710):map__34710);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34712_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34712_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34713_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34713_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34714_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34714_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34715_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34715_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34716_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34716_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34717,key){
var map__34718 = p__34717;
var map__34718__$1 = (((((!((map__34718 == null))))?(((((map__34718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34718):map__34718);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.trigger_on_disconnect_BANG_ = (function shadow$remote$runtime$shared$trigger_on_disconnect_BANG_(p__34720,e){
var map__34721 = p__34720;
var map__34721__$1 = (((((!((map__34721 == null))))?(((((map__34721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34721):map__34721);
var runtime = map__34721__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34723 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34725 = null;
var count__34726 = (0);
var i__34727 = (0);
while(true){
if((i__34727 < count__34726)){
var map__34733 = chunk__34725.cljs$core$IIndexed$_nth$arity$2(null,i__34727);
var map__34733__$1 = (((((!((map__34733 == null))))?(((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733):map__34733);
var ext = map__34733__$1;
var on_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));
if(cljs.core.truth_(on_disconnect)){
(on_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_disconnect.cljs$core$IFn$_invoke$arity$1(e) : on_disconnect.call(null,e));


var G__34809 = seq__34723;
var G__34810 = chunk__34725;
var G__34811 = count__34726;
var G__34812 = (i__34727 + (1));
seq__34723 = G__34809;
chunk__34725 = G__34810;
count__34726 = G__34811;
i__34727 = G__34812;
continue;
} else {
var G__34813 = seq__34723;
var G__34814 = chunk__34725;
var G__34815 = count__34726;
var G__34816 = (i__34727 + (1));
seq__34723 = G__34813;
chunk__34725 = G__34814;
count__34726 = G__34815;
i__34727 = G__34816;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34723);
if(temp__5735__auto__){
var seq__34723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34723__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34723__$1);
var G__34817 = cljs.core.chunk_rest(seq__34723__$1);
var G__34818 = c__4556__auto__;
var G__34819 = cljs.core.count(c__4556__auto__);
var G__34820 = (0);
seq__34723 = G__34817;
chunk__34725 = G__34818;
count__34726 = G__34819;
i__34727 = G__34820;
continue;
} else {
var map__34735 = cljs.core.first(seq__34723__$1);
var map__34735__$1 = (((((!((map__34735 == null))))?(((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34735):map__34735);
var ext = map__34735__$1;
var on_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));
if(cljs.core.truth_(on_disconnect)){
(on_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_disconnect.cljs$core$IFn$_invoke$arity$1(e) : on_disconnect.call(null,e));


var G__34821 = cljs.core.next(seq__34723__$1);
var G__34822 = null;
var G__34823 = (0);
var G__34824 = (0);
seq__34723 = G__34821;
chunk__34725 = G__34822;
count__34726 = G__34823;
i__34727 = G__34824;
continue;
} else {
var G__34825 = cljs.core.next(seq__34723__$1);
var G__34826 = null;
var G__34827 = (0);
var G__34828 = (0);
seq__34723 = G__34825;
chunk__34725 = G__34826;
count__34726 = G__34827;
i__34727 = G__34828;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34737,msg){
var map__34738 = p__34737;
var map__34738__$1 = (((((!((map__34738 == null))))?(((((map__34738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34738):map__34738);
var runtime = map__34738__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34740 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34742 = null;
var count__34743 = (0);
var i__34744 = (0);
while(true){
if((i__34744 < count__34743)){
var map__34750 = chunk__34742.cljs$core$IIndexed$_nth$arity$2(null,i__34744);
var map__34750__$1 = (((((!((map__34750 == null))))?(((((map__34750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34750):map__34750);
var ext = map__34750__$1;
var on_client_not_found = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34750__$1,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849));
if(cljs.core.truth_(on_client_not_found)){
(on_client_not_found.cljs$core$IFn$_invoke$arity$1 ? on_client_not_found.cljs$core$IFn$_invoke$arity$1(msg) : on_client_not_found.call(null,msg));


var G__34833 = seq__34740;
var G__34834 = chunk__34742;
var G__34835 = count__34743;
var G__34836 = (i__34744 + (1));
seq__34740 = G__34833;
chunk__34742 = G__34834;
count__34743 = G__34835;
i__34744 = G__34836;
continue;
} else {
var G__34837 = seq__34740;
var G__34838 = chunk__34742;
var G__34839 = count__34743;
var G__34840 = (i__34744 + (1));
seq__34740 = G__34837;
chunk__34742 = G__34838;
count__34743 = G__34839;
i__34744 = G__34840;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34740);
if(temp__5735__auto__){
var seq__34740__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34740__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34740__$1);
var G__34842 = cljs.core.chunk_rest(seq__34740__$1);
var G__34843 = c__4556__auto__;
var G__34844 = cljs.core.count(c__4556__auto__);
var G__34845 = (0);
seq__34740 = G__34842;
chunk__34742 = G__34843;
count__34743 = G__34844;
i__34744 = G__34845;
continue;
} else {
var map__34752 = cljs.core.first(seq__34740__$1);
var map__34752__$1 = (((((!((map__34752 == null))))?(((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34752):map__34752);
var ext = map__34752__$1;
var on_client_not_found = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34752__$1,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849));
if(cljs.core.truth_(on_client_not_found)){
(on_client_not_found.cljs$core$IFn$_invoke$arity$1 ? on_client_not_found.cljs$core$IFn$_invoke$arity$1(msg) : on_client_not_found.call(null,msg));


var G__34848 = cljs.core.next(seq__34740__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34740 = G__34848;
chunk__34742 = G__34849;
count__34743 = G__34850;
i__34744 = G__34851;
continue;
} else {
var G__34852 = cljs.core.next(seq__34740__$1);
var G__34853 = null;
var G__34854 = (0);
var G__34855 = (0);
seq__34740 = G__34852;
chunk__34742 = G__34853;
count__34743 = G__34854;
i__34744 = G__34855;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34754,p__34755){
var map__34756 = p__34754;
var map__34756__$1 = (((((!((map__34756 == null))))?(((((map__34756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34756):map__34756);
var runtime = map__34756__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34757 = p__34755;
var map__34757__$1 = (((((!((map__34757 == null))))?(((((map__34757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34757):map__34757);
var msg = map__34757__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34757__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34757__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34760 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34762 = null;
var count__34763 = (0);
var i__34764 = (0);
while(true){
if((i__34764 < count__34763)){
var map__34770 = chunk__34762.cljs$core$IIndexed$_nth$arity$2(null,i__34764);
var map__34770__$1 = (((((!((map__34770 == null))))?(((((map__34770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34770):map__34770);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34770__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34862 = seq__34760;
var G__34863 = chunk__34762;
var G__34864 = count__34763;
var G__34865 = (i__34764 + (1));
seq__34760 = G__34862;
chunk__34762 = G__34863;
count__34763 = G__34864;
i__34764 = G__34865;
continue;
} else {
var G__34866 = seq__34760;
var G__34867 = chunk__34762;
var G__34868 = count__34763;
var G__34869 = (i__34764 + (1));
seq__34760 = G__34866;
chunk__34762 = G__34867;
count__34763 = G__34868;
i__34764 = G__34869;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34760);
if(temp__5735__auto__){
var seq__34760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34760__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34760__$1);
var G__34871 = cljs.core.chunk_rest(seq__34760__$1);
var G__34872 = c__4556__auto__;
var G__34873 = cljs.core.count(c__4556__auto__);
var G__34874 = (0);
seq__34760 = G__34871;
chunk__34762 = G__34872;
count__34763 = G__34873;
i__34764 = G__34874;
continue;
} else {
var map__34772 = cljs.core.first(seq__34760__$1);
var map__34772__$1 = (((((!((map__34772 == null))))?(((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34772):map__34772);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34875 = cljs.core.next(seq__34760__$1);
var G__34876 = null;
var G__34877 = (0);
var G__34878 = (0);
seq__34760 = G__34875;
chunk__34762 = G__34876;
count__34763 = G__34877;
i__34764 = G__34878;
continue;
} else {
var G__34879 = cljs.core.next(seq__34760__$1);
var G__34880 = null;
var G__34881 = (0);
var G__34882 = (0);
seq__34760 = G__34879;
chunk__34762 = G__34880;
count__34763 = G__34881;
i__34764 = G__34882;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
