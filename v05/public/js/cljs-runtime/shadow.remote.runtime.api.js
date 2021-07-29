goog.provide('shadow.remote.runtime.api');
goog.require('cljs.core');

/**
 * @interface
 */
shadow.remote.runtime.api.IRuntime = function(){};

var shadow$remote$runtime$api$IRuntime$relay_msg$dyn_34397 = (function (runtime,msg){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.relay_msg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4429__auto__.call(null,runtime,msg));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.relay_msg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4426__auto__.call(null,runtime,msg));
} else {
throw cljs.core.missing_protocol("IRuntime.relay-msg",runtime);
}
}
});
shadow.remote.runtime.api.relay_msg = (function shadow$remote$runtime$api$relay_msg(runtime,msg){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2(runtime,msg);
} else {
return shadow$remote$runtime$api$IRuntime$relay_msg$dyn_34397(runtime,msg);
}
});

var shadow$remote$runtime$api$IRuntime$add_extension$dyn_34405 = (function (runtime,key,spec){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.add_extension[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4429__auto__.call(null,runtime,key,spec));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.add_extension["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4426__auto__.call(null,runtime,key,spec));
} else {
throw cljs.core.missing_protocol("IRuntime.add-extension",runtime);
}
}
});
shadow.remote.runtime.api.add_extension = (function shadow$remote$runtime$api$add_extension(runtime,key,spec){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(runtime,key,spec);
} else {
return shadow$remote$runtime$api$IRuntime$add_extension$dyn_34405(runtime,key,spec);
}
});

var shadow$remote$runtime$api$IRuntime$del_extension$dyn_34410 = (function (runtime,key){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.del_extension[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4429__auto__.call(null,runtime,key));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.del_extension["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4426__auto__.call(null,runtime,key));
} else {
throw cljs.core.missing_protocol("IRuntime.del-extension",runtime);
}
}
});
shadow.remote.runtime.api.del_extension = (function shadow$remote$runtime$api$del_extension(runtime,key){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2(runtime,key);
} else {
return shadow$remote$runtime$api$IRuntime$del_extension$dyn_34410(runtime,key);
}
});


/**
 * @interface
 */
shadow.remote.runtime.api.Inspectable = function(){};

var shadow$remote$runtime$api$Inspectable$describe$dyn_34415 = (function (thing,opts){
var x__4428__auto__ = (((thing == null))?null:thing);
var m__4429__auto__ = (shadow.remote.runtime.api.describe[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4429__auto__.call(null,thing,opts));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(thing),cljs.core.with_meta(new cljs.core.Symbol("shadow.remote.runtime.api","describe","shadow.remote.runtime.api/describe",1388020131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5733__auto__){
var meta_impl__4427__auto__ = temp__5733__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : meta_impl__4427__auto__.call(null,thing,opts));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.describe["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4426__auto__.call(null,thing,opts));
} else {
throw cljs.core.missing_protocol("Inspectable.describe",thing);
}
}
}
});
/**
 * returns a map descriptor that tells system how to handle things further
 */
shadow.remote.runtime.api.describe = (function shadow$remote$runtime$api$describe(thing,opts){
if((((!((thing == null)))) && ((!((thing.shadow$remote$runtime$api$Inspectable$describe$arity$2 == null)))))){
return thing.shadow$remote$runtime$api$Inspectable$describe$arity$2(thing,opts);
} else {
return shadow$remote$runtime$api$Inspectable$describe$dyn_34415(thing,opts);
}
});


/**
 * @interface
 */
shadow.remote.runtime.api.IEvalCLJS = function(){};

var shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$dyn_34420 = (function (runtime,input,callback){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api._cljs_eval[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(runtime,input,callback) : m__4429__auto__.call(null,runtime,input,callback));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api._cljs_eval["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(runtime,input,callback) : m__4426__auto__.call(null,runtime,input,callback));
} else {
throw cljs.core.missing_protocol("IEvalCLJS.-cljs-eval",runtime);
}
}
});
shadow.remote.runtime.api._cljs_eval = (function shadow$remote$runtime$api$_cljs_eval(runtime,input,callback){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3(runtime,input,callback);
} else {
return shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$dyn_34420(runtime,input,callback);
}
});



/**
 * @interface
 */
shadow.remote.runtime.api.IEvalJS = function(){};

var shadow$remote$runtime$api$IEvalJS$_js_eval$dyn_34422 = (function (runtime,code){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api._js_eval[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(runtime,code) : m__4429__auto__.call(null,runtime,code));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api._js_eval["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(runtime,code) : m__4426__auto__.call(null,runtime,code));
} else {
throw cljs.core.missing_protocol("IEvalJS.-js-eval",runtime);
}
}
});
shadow.remote.runtime.api._js_eval = (function shadow$remote$runtime$api$_js_eval(runtime,code){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2(runtime,code);
} else {
return shadow$remote$runtime$api$IEvalJS$_js_eval$dyn_34422(runtime,code);
}
});


shadow.remote.runtime.api.cljs_eval = (function shadow$remote$runtime$api$cljs_eval(runtime,p__34376,callback){
var map__34377 = p__34376;
var map__34377__$1 = (((((!((map__34377 == null))))?(((((map__34377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34377):map__34377);
var input = map__34377__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34377__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34377__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(((typeof code === 'string') && (cljs.core.simple_symbol_QMARK_(ns)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid cljs-eval input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));
}

return shadow.remote.runtime.api._cljs_eval(runtime,input,callback);
});

shadow.remote.runtime.api.js_eval = (function shadow$remote$runtime$api$js_eval(runtime,code){
if(typeof code === 'string'){
} else {
throw (new Error("Assert failed: (string? code)"));
}

return shadow.remote.runtime.api._js_eval(runtime,code);
});

//# sourceMappingURL=shadow.remote.runtime.api.js.map
