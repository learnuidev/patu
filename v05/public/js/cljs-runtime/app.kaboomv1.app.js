goog.provide('app.kaboomv1.app');
goog.require('cljs.core');
goog.require('app.kaboomv1.gfx');
goog.require('app.kaboomv1.assets');
if((typeof app !== 'undefined') && (typeof app.kaboomv1 !== 'undefined') && (typeof app.kaboomv1.app !== 'undefined') && (typeof app.kaboomv1.app.key_map !== 'undefined')){
} else {
app.kaboomv1.app.key_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ArrowLeft","ArrowLeft",-974160950),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"ArrowRight","ArrowRight",1621754469),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"ArrowUp","ArrowUp",-538953684),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"ArrowDown","ArrowDown",-251004205),new cljs.core.Keyword(null,"down","down",1565245570)], null);
}
if((typeof app !== 'undefined') && (typeof app.kaboomv1 !== 'undefined') && (typeof app.kaboomv1.app !== 'undefined') && (typeof app.kaboomv1.app.app_state !== 'undefined')){
} else {
app.kaboomv1.app.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-states","key-states",800337131),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),0.0,new cljs.core.Keyword(null,"dt","dt",-368444759),0.0], null));
}
if((typeof app !== 'undefined') && (typeof app.kaboomv1 !== 'undefined') && (typeof app.kaboomv1.app !== 'undefined') && (typeof app.kaboomv1.app.gl !== 'undefined')){
} else {
app.kaboomv1.app.gl = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.kaboomv1.app.new_canvas = (function app$kaboomv1$app$new_canvas(p__28117){
var map__28118 = p__28117;
var map__28118__$1 = (((((!((map__28118 == null))))?(((((map__28118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28118):map__28118);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28118__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var canvas = document.createElement("canvas");
(canvas.id = (function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "app";
}
})());

document.body.appendChild(canvas);

return canvas;
});
app.kaboomv1.app.new_gl = (function app$kaboomv1$app$new_gl(canvas){
return canvas.getContext("webgl");
});
app.kaboomv1.app.keydown_handler = (function app$kaboomv1$app$keydown_handler(event){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.key);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv1.app.key_map,key,key);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv1.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
(document.onkeydown = app.kaboomv1.app.keydown_handler);
app.kaboomv1.app.keyup_handler = (function app$kaboomv1$app$keyup_handler(event){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.key);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv1.app.key_map,key,key);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv1.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"released","released",381037203));
});
(document.onkeyup = app.kaboomv1.app.keyup_handler);
app.kaboomv1.app.key_pressed_QMARK_ = (function app$kaboomv1$app$key_pressed_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv1.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv1.app.key_down_QMARK_ = (function app$kaboomv1$app$key_down_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv1.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"down","down",1565245570))));
});
app.kaboomv1.app.update_app_state = (function app$kaboomv1$app$update_app_state(t){
var delta = ((t / (1000)) - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.app.app_state)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv1.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dt","dt",-368444759),delta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.app.app_state)) + delta)], 0));
});
app.kaboomv1.app.init_gl_state = (function app$kaboomv1$app$init_gl_state(canvas){
if(cljs.core.truth_(canvas)){
return cljs.core.reset_BANG_(app.kaboomv1.app.gl,app.kaboomv1.app.new_gl(canvas));
} else {
return cljs.core.reset_BANG_(app.kaboomv1.app.gl,app.kaboomv1.app.new_gl(app.kaboomv1.app.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null))));
}
});
app.kaboomv1.app.set_dimension_BANG_ = (function app$kaboomv1$app$set_dimension_BANG_(canvas,width,height){
(canvas.width = width);

return (canvas.height = height);
});
app.kaboomv1.app.set_fullscreen_BANG_ = (function app$kaboomv1$app$set_fullscreen_BANG_(canvas){
return app.kaboomv1.app.set_dimension_BANG_(canvas,window.innerWidth,window.innerHeight);
});
app.kaboomv1.app.set_nfullscreen_BANG_ = (function app$kaboomv1$app$set_nfullscreen_BANG_(canvas,width,height){
return app.kaboomv1.app.set_dimension_BANG_(canvas,width,height);
});
app.kaboomv1.app.set_fs = (function app$kaboomv1$app$set_fs(opts){
var map__28123 = opts;
var map__28123__$1 = (((((!((map__28123 == null))))?(((((map__28123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28123):map__28123);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28123__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var full_screen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28123__$1,new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28123__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28123__$1,new cljs.core.Keyword(null,"width","width",-384071477),(640));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28123__$1,new cljs.core.Keyword(null,"height","height",1025178622),(480));
if(cljs.core.truth_(full_screen_QMARK_)){
return app.kaboomv1.app.set_fullscreen_BANG_(canvas);
} else {
return app.kaboomv1.app.set_nfullscreen_BANG_(canvas,width,height);
}
});
app.kaboomv1.app.init_BANG_ = (function app$kaboomv1$app$init_BANG_(p__28125){
var map__28126 = p__28125;
var map__28126__$1 = (((((!((map__28126 == null))))?(((((map__28126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28126):map__28126);
var conf = map__28126__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28126__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
app.kaboomv1.app.init_gl_state(canvas);

return app.kaboomv1.app.set_fs(conf);
});
app.kaboomv1.app.run = (function app$kaboomv1$app$run(f){
if(cljs.core.not(cljs.core.deref(app.kaboomv1.app.gl))){
return console.warn("Please run the kaboom/init! function first. You need to create a new webgl context first");
} else {
app.kaboomv1.gfx.init_gl(cljs.core.deref(app.kaboomv1.app.gl));

var id = app.kaboomv1.gfx.init(cljs.core.deref(app.kaboomv1.app.gl));
var frame = (function app$kaboomv1$app$run_$_frame(t){
app.kaboomv1.app.update_app_state(t);

app.kaboomv1.gfx.frame_start(cljs.core.deref(app.kaboomv1.app.gl));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

app.kaboomv1.gfx.frame_end(cljs.core.deref(app.kaboomv1.app.gl),id);

return requestAnimationFrame(app$kaboomv1$app$run_$_frame);
});
return requestAnimationFrame(frame);
}
});

//# sourceMappingURL=app.kaboomv1.app.js.map
