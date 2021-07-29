goog.provide('shadow.cljs.devtools.client.websocket');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.shared');
goog.require('shadow.remote.runtime.shared');
goog.require('shadow.remote.runtime.cljs.js_builtins');
goog.require('shadow.cljs.devtools.client.env');
shadow.cljs.devtools.client.websocket.load_sources = (function shadow$cljs$devtools$client$websocket$load_sources(runtime,sources,callback){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35144){
var map__35145 = p__35144;
var map__35145__$1 = (((((!((map__35145 == null))))?(((((map__35145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35145):map__35145);
var msg = map__35145__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35145__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(sources__$1) : callback.call(null,sources__$1));
})], null));
});
shadow.cljs.devtools.client.websocket.start = (function shadow$cljs$devtools$client$websocket$start(ws_url,client_info){
var temp__5737__auto__ = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
if((temp__5737__auto__ == null)){
var socket = (new WebSocket(ws_url));
var send_fn = (function (msg){
return socket.send(msg);
});
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(shadow.remote.runtime.shared.init_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(client_info,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"build-id","build-id",1642831089),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),new cljs.core.Keyword(null,"proc-id","proc-id",-1856109278),shadow.cljs.devtools.client.env.proc_id], 0))));
var runtime = (new shadow.cljs.devtools.client.shared.Runtime(state_ref,send_fn,(function (){
return socket.close();
}),null,null,null));
shadow.cljs.devtools.client.shared.init_runtime_BANG_(runtime);

socket.addEventListener("message",(function (e){
return shadow.remote.runtime.shared.process(runtime,shadow.cljs.devtools.client.shared.transit_read(e.data));
}));

socket.addEventListener("open",(function (e){
return null;
}));

socket.addEventListener("close",(function (e){
return shadow.cljs.devtools.client.shared.stop_runtime_BANG_(e);
}));

return socket.addEventListener("error",(function (e){
return console.log("shadow-cljs - ws-error",e);
}));
} else {
var map__35155 = temp__5737__auto__;
var map__35155__$1 = (((((!((map__35155 == null))))?(((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35155):map__35155);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
(stop.cljs$core$IFn$_invoke$arity$0 ? stop.cljs$core$IFn$_invoke$arity$0() : stop.call(null));

return setTimeout((function (){
return (shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$2(ws_url,client_info) : shadow.cljs.devtools.client.websocket.start.call(null,ws_url,client_info));
}),(10));
}
});

//# sourceMappingURL=shadow.cljs.devtools.client.websocket.js.map
