goog.provide('app.kaboomv5.demo');
goog.require('cljs.core');
goog.require('goog.events');
app.kaboomv5.demo.new_canvas = (function app$kaboomv5$demo$new_canvas(p__27925){
var map__27926 = p__27925;
var map__27926__$1 = (((((!((map__27926 == null))))?(((((map__27926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27926):map__27926);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
app.kaboomv5.demo.load_app = (function app$kaboomv5$demo$load_app(){
var canvas = app.kaboomv5.demo.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null));
canvas.setAttribute("tabindex","0");

goog.events.listen(canvas,"mousemove",(function (){
return console.log("mousemove");
}));

goog.events.listen(canvas,"mousedown",(function (){
return console.log("mousedown");
}));

goog.events.listen(canvas,"mouseup",(function (){
return console.log("mouseup");
}));

goog.events.listen(canvas,"keydown",(function (){
return console.log("keydown");
}));

goog.events.listen(canvas,"keyup",(function (){
return console.log("keyup");
}));

return console.log("HELLO");
});
app.kaboomv5.demo.app = (function app$kaboomv5$demo$app(){
return null;
});
(window.onload = app.kaboomv5.demo.load_app);

//# sourceMappingURL=app.kaboomv5.demo.js.map
