goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('shadow.cljs.devtools.client.websocket');
goog.require('shadow.cljs.devtools.client.shared');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.shared');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35294 = arguments.length;
var i__4737__auto___35295 = (0);
while(true){
if((i__4737__auto___35295 < len__4736__auto___35294)){
args__4742__auto__.push((arguments[i__4737__auto___35295]));

var G__35296 = (i__4737__auto___35295 + (1));
i__4737__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35158){
var G__35159 = cljs.core.first(seq35158);
var seq35158__$1 = cljs.core.next(seq35158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35159,seq35158__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35160 = cljs.core.seq(sources);
var chunk__35161 = null;
var count__35162 = (0);
var i__35163 = (0);
while(true){
if((i__35163 < count__35162)){
var map__35171 = chunk__35161.cljs$core$IIndexed$_nth$arity$2(null,i__35163);
var map__35171__$1 = (((((!((map__35171 == null))))?(((((map__35171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35171):map__35171);
var src = map__35171__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35173){var e_35297 = e35173;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35297);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35297.message)].join('')));
}

var G__35298 = seq__35160;
var G__35299 = chunk__35161;
var G__35300 = count__35162;
var G__35301 = (i__35163 + (1));
seq__35160 = G__35298;
chunk__35161 = G__35299;
count__35162 = G__35300;
i__35163 = G__35301;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35160);
if(temp__5735__auto__){
var seq__35160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35160__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35160__$1);
var G__35302 = cljs.core.chunk_rest(seq__35160__$1);
var G__35303 = c__4556__auto__;
var G__35304 = cljs.core.count(c__4556__auto__);
var G__35305 = (0);
seq__35160 = G__35302;
chunk__35161 = G__35303;
count__35162 = G__35304;
i__35163 = G__35305;
continue;
} else {
var map__35174 = cljs.core.first(seq__35160__$1);
var map__35174__$1 = (((((!((map__35174 == null))))?(((((map__35174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35174):map__35174);
var src = map__35174__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35176){var e_35306 = e35176;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35306);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35306.message)].join('')));
}

var G__35307 = cljs.core.next(seq__35160__$1);
var G__35308 = null;
var G__35309 = (0);
var G__35310 = (0);
seq__35160 = G__35307;
chunk__35161 = G__35308;
count__35162 = G__35309;
i__35163 = G__35310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35177 = cljs.core.seq(js_requires);
var chunk__35178 = null;
var count__35179 = (0);
var i__35180 = (0);
while(true){
if((i__35180 < count__35179)){
var js_ns = chunk__35178.cljs$core$IIndexed$_nth$arity$2(null,i__35180);
var require_str_35311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35311);


var G__35312 = seq__35177;
var G__35313 = chunk__35178;
var G__35314 = count__35179;
var G__35315 = (i__35180 + (1));
seq__35177 = G__35312;
chunk__35178 = G__35313;
count__35179 = G__35314;
i__35180 = G__35315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35177);
if(temp__5735__auto__){
var seq__35177__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35177__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35177__$1);
var G__35316 = cljs.core.chunk_rest(seq__35177__$1);
var G__35317 = c__4556__auto__;
var G__35318 = cljs.core.count(c__4556__auto__);
var G__35319 = (0);
seq__35177 = G__35316;
chunk__35178 = G__35317;
count__35179 = G__35318;
i__35180 = G__35319;
continue;
} else {
var js_ns = cljs.core.first(seq__35177__$1);
var require_str_35320 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35320);


var G__35321 = cljs.core.next(seq__35177__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__35177 = G__35321;
chunk__35178 = G__35322;
count__35179 = G__35323;
i__35180 = G__35324;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35182){
var map__35183 = p__35182;
var map__35183__$1 = (((((!((map__35183 == null))))?(((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35183):map__35183);
var msg = map__35183__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35185(s__35186){
return (new cljs.core.LazySeq(null,(function (){
var s__35186__$1 = s__35186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35186__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35191 = cljs.core.first(xs__6292__auto__);
var map__35191__$1 = (((((!((map__35191 == null))))?(((((map__35191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35191):map__35191);
var src = map__35191__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35191__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35191__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35186__$1,map__35191,map__35191__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35183,map__35183__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35185_$_iter__35187(s__35188){
return (new cljs.core.LazySeq(null,((function (s__35186__$1,map__35191,map__35191__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35183,map__35183__$1,msg,info,reload_info){
return (function (){
var s__35188__$1 = s__35188;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35188__$1);
if(temp__5735__auto____$1){
var s__35188__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35188__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35188__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35190 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35189 = (0);
while(true){
if((i__35189 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35189);
cljs.core.chunk_append(b__35190,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35325 = (i__35189 + (1));
i__35189 = G__35325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35190),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35185_$_iter__35187(cljs.core.chunk_rest(s__35188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35190),null);
}
} else {
var warning = cljs.core.first(s__35188__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35185_$_iter__35187(cljs.core.rest(s__35188__$2)));
}
} else {
return null;
}
break;
}
});})(s__35186__$1,map__35191,map__35191__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35183,map__35183__$1,msg,info,reload_info))
,null,null));
});})(s__35186__$1,map__35191,map__35191__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35183,map__35183__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35185(cljs.core.rest(s__35186__$1)));
} else {
var G__35326 = cljs.core.rest(s__35186__$1);
s__35186__$1 = G__35326;
continue;
}
} else {
var G__35327 = cljs.core.rest(s__35186__$1);
s__35186__$1 = G__35327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35193_35328 = cljs.core.seq(warnings);
var chunk__35194_35329 = null;
var count__35195_35330 = (0);
var i__35196_35331 = (0);
while(true){
if((i__35196_35331 < count__35195_35330)){
var map__35201_35332 = chunk__35194_35329.cljs$core$IIndexed$_nth$arity$2(null,i__35196_35331);
var map__35201_35333__$1 = (((((!((map__35201_35332 == null))))?(((((map__35201_35332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35201_35332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35201_35332):map__35201_35332);
var w_35334 = map__35201_35333__$1;
var msg_35335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201_35333__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201_35333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201_35333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201_35333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35338)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35336),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35337),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35335__$1)].join(''));


var G__35339 = seq__35193_35328;
var G__35340 = chunk__35194_35329;
var G__35341 = count__35195_35330;
var G__35342 = (i__35196_35331 + (1));
seq__35193_35328 = G__35339;
chunk__35194_35329 = G__35340;
count__35195_35330 = G__35341;
i__35196_35331 = G__35342;
continue;
} else {
var temp__5735__auto___35343 = cljs.core.seq(seq__35193_35328);
if(temp__5735__auto___35343){
var seq__35193_35344__$1 = temp__5735__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__35193_35344__$1)){
var c__4556__auto___35345 = cljs.core.chunk_first(seq__35193_35344__$1);
var G__35346 = cljs.core.chunk_rest(seq__35193_35344__$1);
var G__35347 = c__4556__auto___35345;
var G__35348 = cljs.core.count(c__4556__auto___35345);
var G__35349 = (0);
seq__35193_35328 = G__35346;
chunk__35194_35329 = G__35347;
count__35195_35330 = G__35348;
i__35196_35331 = G__35349;
continue;
} else {
var map__35203_35350 = cljs.core.first(seq__35193_35344__$1);
var map__35203_35351__$1 = (((((!((map__35203_35350 == null))))?(((((map__35203_35350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203_35350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35203_35350):map__35203_35350);
var w_35352 = map__35203_35351__$1;
var msg_35353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203_35351__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203_35351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203_35351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203_35351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35356)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35354),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35355),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35353__$1)].join(''));


var G__35357 = cljs.core.next(seq__35193_35344__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__35193_35328 = G__35357;
chunk__35194_35329 = G__35358;
count__35195_35330 = G__35359;
i__35196_35331 = G__35360;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.websocket.load_sources(runtime,sources_to_get,(function (p1__35181_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35181_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35205){
var map__35206 = p__35205;
var map__35206__$1 = (((((!((map__35206 == null))))?(((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35206):map__35206);
var msg = map__35206__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35208 = cljs.core.seq(updates);
var chunk__35210 = null;
var count__35211 = (0);
var i__35212 = (0);
while(true){
if((i__35212 < count__35211)){
var path = chunk__35210.cljs$core$IIndexed$_nth$arity$2(null,i__35212);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35238_35361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35241_35362 = null;
var count__35242_35363 = (0);
var i__35243_35364 = (0);
while(true){
if((i__35243_35364 < count__35242_35363)){
var node_35365 = chunk__35241_35362.cljs$core$IIndexed$_nth$arity$2(null,i__35243_35364);
var path_match_35366 = shadow.cljs.devtools.client.browser.match_paths(node_35365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35366)){
var new_link_35367 = (function (){var G__35248 = node_35365.cloneNode(true);
G__35248.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35248;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35366], 0));

goog.dom.insertSiblingAfter(new_link_35367,node_35365);

goog.dom.removeNode(node_35365);


var G__35368 = seq__35238_35361;
var G__35369 = chunk__35241_35362;
var G__35370 = count__35242_35363;
var G__35371 = (i__35243_35364 + (1));
seq__35238_35361 = G__35368;
chunk__35241_35362 = G__35369;
count__35242_35363 = G__35370;
i__35243_35364 = G__35371;
continue;
} else {
var G__35372 = seq__35238_35361;
var G__35373 = chunk__35241_35362;
var G__35374 = count__35242_35363;
var G__35375 = (i__35243_35364 + (1));
seq__35238_35361 = G__35372;
chunk__35241_35362 = G__35373;
count__35242_35363 = G__35374;
i__35243_35364 = G__35375;
continue;
}
} else {
var temp__5735__auto___35376 = cljs.core.seq(seq__35238_35361);
if(temp__5735__auto___35376){
var seq__35238_35377__$1 = temp__5735__auto___35376;
if(cljs.core.chunked_seq_QMARK_(seq__35238_35377__$1)){
var c__4556__auto___35378 = cljs.core.chunk_first(seq__35238_35377__$1);
var G__35379 = cljs.core.chunk_rest(seq__35238_35377__$1);
var G__35380 = c__4556__auto___35378;
var G__35381 = cljs.core.count(c__4556__auto___35378);
var G__35382 = (0);
seq__35238_35361 = G__35379;
chunk__35241_35362 = G__35380;
count__35242_35363 = G__35381;
i__35243_35364 = G__35382;
continue;
} else {
var node_35383 = cljs.core.first(seq__35238_35377__$1);
var path_match_35384 = shadow.cljs.devtools.client.browser.match_paths(node_35383.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35384)){
var new_link_35385 = (function (){var G__35249 = node_35383.cloneNode(true);
G__35249.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35384),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35249;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35384], 0));

goog.dom.insertSiblingAfter(new_link_35385,node_35383);

goog.dom.removeNode(node_35383);


var G__35386 = cljs.core.next(seq__35238_35377__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__35238_35361 = G__35386;
chunk__35241_35362 = G__35387;
count__35242_35363 = G__35388;
i__35243_35364 = G__35389;
continue;
} else {
var G__35390 = cljs.core.next(seq__35238_35377__$1);
var G__35391 = null;
var G__35392 = (0);
var G__35393 = (0);
seq__35238_35361 = G__35390;
chunk__35241_35362 = G__35391;
count__35242_35363 = G__35392;
i__35243_35364 = G__35393;
continue;
}
}
} else {
}
}
break;
}


var G__35394 = seq__35208;
var G__35395 = chunk__35210;
var G__35396 = count__35211;
var G__35397 = (i__35212 + (1));
seq__35208 = G__35394;
chunk__35210 = G__35395;
count__35211 = G__35396;
i__35212 = G__35397;
continue;
} else {
var G__35398 = seq__35208;
var G__35399 = chunk__35210;
var G__35400 = count__35211;
var G__35401 = (i__35212 + (1));
seq__35208 = G__35398;
chunk__35210 = G__35399;
count__35211 = G__35400;
i__35212 = G__35401;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35208);
if(temp__5735__auto__){
var seq__35208__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35208__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35208__$1);
var G__35402 = cljs.core.chunk_rest(seq__35208__$1);
var G__35403 = c__4556__auto__;
var G__35404 = cljs.core.count(c__4556__auto__);
var G__35405 = (0);
seq__35208 = G__35402;
chunk__35210 = G__35403;
count__35211 = G__35404;
i__35212 = G__35405;
continue;
} else {
var path = cljs.core.first(seq__35208__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35250_35406 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35253_35407 = null;
var count__35254_35408 = (0);
var i__35255_35409 = (0);
while(true){
if((i__35255_35409 < count__35254_35408)){
var node_35410 = chunk__35253_35407.cljs$core$IIndexed$_nth$arity$2(null,i__35255_35409);
var path_match_35411 = shadow.cljs.devtools.client.browser.match_paths(node_35410.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35411)){
var new_link_35412 = (function (){var G__35260 = node_35410.cloneNode(true);
G__35260.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35411),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35260;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35411], 0));

goog.dom.insertSiblingAfter(new_link_35412,node_35410);

goog.dom.removeNode(node_35410);


var G__35413 = seq__35250_35406;
var G__35414 = chunk__35253_35407;
var G__35415 = count__35254_35408;
var G__35416 = (i__35255_35409 + (1));
seq__35250_35406 = G__35413;
chunk__35253_35407 = G__35414;
count__35254_35408 = G__35415;
i__35255_35409 = G__35416;
continue;
} else {
var G__35417 = seq__35250_35406;
var G__35418 = chunk__35253_35407;
var G__35419 = count__35254_35408;
var G__35420 = (i__35255_35409 + (1));
seq__35250_35406 = G__35417;
chunk__35253_35407 = G__35418;
count__35254_35408 = G__35419;
i__35255_35409 = G__35420;
continue;
}
} else {
var temp__5735__auto___35421__$1 = cljs.core.seq(seq__35250_35406);
if(temp__5735__auto___35421__$1){
var seq__35250_35422__$1 = temp__5735__auto___35421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35250_35422__$1)){
var c__4556__auto___35423 = cljs.core.chunk_first(seq__35250_35422__$1);
var G__35424 = cljs.core.chunk_rest(seq__35250_35422__$1);
var G__35425 = c__4556__auto___35423;
var G__35426 = cljs.core.count(c__4556__auto___35423);
var G__35427 = (0);
seq__35250_35406 = G__35424;
chunk__35253_35407 = G__35425;
count__35254_35408 = G__35426;
i__35255_35409 = G__35427;
continue;
} else {
var node_35428 = cljs.core.first(seq__35250_35422__$1);
var path_match_35429 = shadow.cljs.devtools.client.browser.match_paths(node_35428.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35429)){
var new_link_35430 = (function (){var G__35261 = node_35428.cloneNode(true);
G__35261.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35429),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35261;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35429], 0));

goog.dom.insertSiblingAfter(new_link_35430,node_35428);

goog.dom.removeNode(node_35428);


var G__35431 = cljs.core.next(seq__35250_35422__$1);
var G__35432 = null;
var G__35433 = (0);
var G__35434 = (0);
seq__35250_35406 = G__35431;
chunk__35253_35407 = G__35432;
count__35254_35408 = G__35433;
i__35255_35409 = G__35434;
continue;
} else {
var G__35435 = cljs.core.next(seq__35250_35422__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__35250_35406 = G__35435;
chunk__35253_35407 = G__35436;
count__35254_35408 = G__35437;
i__35255_35409 = G__35438;
continue;
}
}
} else {
}
}
break;
}


var G__35439 = cljs.core.next(seq__35208__$1);
var G__35440 = null;
var G__35441 = (0);
var G__35442 = (0);
seq__35208 = G__35439;
chunk__35210 = G__35440;
count__35211 = G__35441;
i__35212 = G__35442;
continue;
} else {
var G__35443 = cljs.core.next(seq__35208__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__35208 = G__35443;
chunk__35210 = G__35444;
count__35211 = G__35445;
i__35212 = G__35446;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35262){
var map__35263 = p__35262;
var map__35263__$1 = (((((!((map__35263 == null))))?(((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35263):map__35263);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.websocket.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.start = (function shadow$cljs$devtools$client$browser$start(){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
return shadow.cljs.devtools.client.websocket.start(ws_url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35265){
var map__35266 = p__35265;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35266):map__35266);
var _ = map__35266__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35268,done,error){
var map__35269 = p__35268;
var map__35269__$1 = (((((!((map__35269 == null))))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35269):map__35269);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.websocket.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35271,done,error){
var map__35272 = p__35271;
var map__35272__$1 = (((((!((map__35272 == null))))?(((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35272):map__35272);
var msg = map__35272__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35274){
var map__35275 = p__35274;
var map__35275__$1 = (((((!((map__35275 == null))))?(((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35275):map__35275);
var src = map__35275__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35277 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35277) : done.call(null,G__35277));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35278){
var map__35279 = p__35278;
var map__35279__$1 = (((((!((map__35279 == null))))?(((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35279):map__35279);
var msg__$1 = map__35279__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35281){var ex = e35281;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.init_extension_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35282){
var map__35283 = p__35282;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283):map__35283);
var env = map__35283__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35285){
var map__35286 = p__35285;
var map__35286__$1 = (((((!((map__35286 == null))))?(((((map__35286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35286):map__35286);
var msg = map__35286__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35286__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35288){
var map__35289 = p__35288;
var map__35289__$1 = (((((!((map__35289 == null))))?(((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35289):map__35289);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35289__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35289__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35291){
var map__35292 = p__35291;
var map__35292__$1 = (((((!((map__35292 == null))))?(((((map__35292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35292):map__35292);
var svc = map__35292__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35292__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.browser.start();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
