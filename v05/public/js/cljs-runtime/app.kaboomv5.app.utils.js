goog.provide('app.kaboomv5.app.utils');
goog.require('cljs.core');
app.kaboomv5.app.utils.set_fullscreen_BANG_ = (function app$kaboomv5$app$utils$set_fullscreen_BANG_(canvas,width,height){
(canvas.width = width);

return (canvas.height = height);
});
app.kaboomv5.app.utils.set_fullscreen = (function app$kaboomv5$app$utils$set_fullscreen(opts){
var map__36668 = opts;
var map__36668__$1 = (((((!((map__36668 == null))))?(((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36668):map__36668);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var full_screen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36668__$1,new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36668__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36668__$1,new cljs.core.Keyword(null,"width","width",-384071477),(640));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36668__$1,new cljs.core.Keyword(null,"height","height",1025178622),(480));
if(cljs.core.truth_(full_screen_QMARK_)){
return app.kaboomv5.app.utils.set_fullscreen_BANG_(canvas,window.innerWidth,window.innerHeight);
} else {
return app.kaboomv5.app.utils.set_fullscreen_BANG_(canvas,width,height);
}
});
app.kaboomv5.app.utils.html_canvas_QMARK_ = (function app$kaboomv5$app$utils$html_canvas_QMARK_(item){
return (item instanceof HTMLCanvasElement);
});
app.kaboomv5.app.utils.html_body_QMARK_ = (function app$kaboomv5$app$utils$html_body_QMARK_(item){
return (item instanceof HTMLBodyElement);
});

//# sourceMappingURL=app.kaboomv5.app.utils.js.map
