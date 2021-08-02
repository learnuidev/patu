goog.provide('app.kaboomv5.app.init');
goog.require('cljs.core');
goog.require('app.kaboomv5.app.state');
app.kaboomv5.app.init.new_canvas = (function app$kaboomv5$app$init$new_canvas(p__26625){
var map__26626 = p__26625;
var map__26626__$1 = (((((!((map__26626 == null))))?(((((map__26626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26626):map__26626);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var canvas = document.createElement("canvas");
if(cljs.core.truth_(id)){
(canvas.id = (function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "mooo";
}
})());
} else {
}

document.body.appendChild(canvas);

return canvas;
});
app.kaboomv5.app.init.init_canvas = (function app$kaboomv5$app$init$init_canvas(var_args){
var G__26631 = arguments.length;
switch (G__26631) {
case 0:
return app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.app.init.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null)),cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$2 = (function (canvas,config){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"config","config",994861415),config], 0));
}));

(app.kaboomv5.app.init.init_canvas.cljs$lang$maxFixedArity = 2);

app.kaboomv5.app.init.new_gl = (function app$kaboomv5$app$init$new_gl(canvas){
return canvas.getContext("webgl");
});
app.kaboomv5.app.init.init_gl_state = (function app$kaboomv5$app$init$init_gl_state(canvas){
if(cljs.core.truth_(canvas)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),app.kaboomv5.app.init.new_gl(canvas));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),app.kaboomv5.app.init.new_gl(app.kaboomv5.app.init.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null))));
}
});

//# sourceMappingURL=app.kaboomv5.app.init.js.map
