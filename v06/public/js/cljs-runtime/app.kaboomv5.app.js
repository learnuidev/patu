goog.provide('app.kaboomv5.app');
goog.require('cljs.core');
goog.require('app.kaboomv5.gfx');
goog.require('app.kaboomv5.math');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom_next.math');
goog.require('app.kaboomv5.assets');
goog.require('cljs.spec.alpha');
goog.require('goog.events');
app.kaboomv5.app.html_canvas_QMARK_ = (function app$kaboomv5$app$html_canvas_QMARK_(item){
if(cljs.core.truth_(item)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object.getPrototypeOf(item),HTMLCanvasElement.prototype);
} else {
return false;
}
});
app.kaboomv5.app.html_body_QMARK_ = (function app$kaboomv5$app$html_body_QMARK_(item){
if(cljs.core.truth_(item)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object.getPrototypeOf(item),HTMLBodyElement.prototype);
} else {
return false;
}
});
app.kaboomv5.app.new_canvas = (function app$kaboomv5$app$new_canvas(p__36698){
var map__36699 = p__36698;
var map__36699__$1 = (((((!((map__36699 == null))))?(((((map__36699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36699):map__36699);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
app.kaboomv5.app.new_gl = (function app$kaboomv5$app$new_gl(canvas){
return canvas.getContext("webgl");
});
app.kaboomv5.app.set_dimension_BANG_ = (function app$kaboomv5$app$set_dimension_BANG_(canvas,width,height){
(canvas.width = width);

return (canvas.height = height);
});
app.kaboomv5.app.set_fullscreen_BANG_ = (function app$kaboomv5$app$set_fullscreen_BANG_(canvas){
return app.kaboomv5.app.set_dimension_BANG_(canvas,window.innerWidth,window.innerHeight);
});
app.kaboomv5.app.set_nfullscreen_BANG_ = (function app$kaboomv5$app$set_nfullscreen_BANG_(canvas,width,height){
return app.kaboomv5.app.set_dimension_BANG_(canvas,width,height);
});
app.kaboomv5.app.set_fullscreen = (function app$kaboomv5$app$set_fullscreen(opts){
var map__36701 = opts;
var map__36701__$1 = (((((!((map__36701 == null))))?(((((map__36701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36701):map__36701);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var full_screen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36701__$1,new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36701__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36701__$1,new cljs.core.Keyword(null,"width","width",-384071477),(640));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36701__$1,new cljs.core.Keyword(null,"height","height",1025178622),(480));
if(cljs.core.truth_(full_screen_QMARK_)){
return app.kaboomv5.app.set_fullscreen_BANG_(canvas);
} else {
return app.kaboomv5.app.set_nfullscreen_BANG_(canvas,width,height);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","button-state","app.kaboomv5.app/button-state",-98696536),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"down","down",1565245570),"null",new cljs.core.Keyword(null,"up","up",-269712113),"null",new cljs.core.Keyword(null,"released","released",381037203),"null",new cljs.core.Keyword(null,"pressed","pressed",1100937946),"null",new cljs.core.Keyword(null,"rpressed","rpressed",-1542572484),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"released","released",381037203),null,new cljs.core.Keyword(null,"pressed","pressed",1100937946),null,new cljs.core.Keyword(null,"rpressed","rpressed",-1542572484),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","width","app.kaboomv5.app/width",713878379),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","height","app.kaboomv5.app/height",1854536350),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","fullscreen?","app.kaboomv5.app/fullscreen?",2071462564),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","debug?","app.kaboomv5.app/debug?",1413651475),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","crisp?","app.kaboomv5.app/crisp?",1801086335),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("app.kaboomv5.app","html-canvas?","app.kaboomv5.app/html-canvas?",1138428972,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("app.kaboomv5.app","html-canvas?","app.kaboomv5.app/html-canvas?",1138428972,null),app.kaboomv5.app.html_canvas_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","root","app.kaboomv5.app/root",-1529673293),new cljs.core.Symbol("app.kaboomv5.app","html-body?","app.kaboomv5.app/html-body?",1873913649,null),app.kaboomv5.app.html_body_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","config","app.kaboomv5.app/config",1906138567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","width","app.kaboomv5.app/width",713878379),new cljs.core.Keyword("app.kaboomv5.app","height","app.kaboomv5.app/height",1854536350),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","fullscreen?","app.kaboomv5.app/fullscreen?",2071462564),new cljs.core.Keyword("app.kaboomv5.app","debug?","app.kaboomv5.app/debug?",1413651475),new cljs.core.Keyword("app.kaboomv5.app","crisp?","app.kaboomv5.app/crisp?",1801086335),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","root","app.kaboomv5.app/root",-1529673293)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","width","app.kaboomv5.app/width",713878379),new cljs.core.Keyword("app.kaboomv5.app","height","app.kaboomv5.app/height",1854536350),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","fullscreen?","app.kaboomv5.app/fullscreen?",2071462564),new cljs.core.Keyword("app.kaboomv5.app","debug?","app.kaboomv5.app/debug?",1413651475),new cljs.core.Keyword("app.kaboomv5.app","crisp?","app.kaboomv5.app/crisp?",1801086335),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","root","app.kaboomv5.app/root",-1529673293)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36703){
return cljs.core.map_QMARK_(G__36703);
})], null),(function (G__36703){
return cljs.core.map_QMARK_(G__36703);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),new cljs.core.Keyword(null,"crisp?","crisp?",-1375116321),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"root","root",-448657453)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","width","app.kaboomv5.app/width",713878379),new cljs.core.Keyword("app.kaboomv5.app","height","app.kaboomv5.app/height",1854536350),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","fullscreen?","app.kaboomv5.app/fullscreen?",2071462564),new cljs.core.Keyword("app.kaboomv5.app","debug?","app.kaboomv5.app/debug?",1413651475),new cljs.core.Keyword("app.kaboomv5.app","crisp?","app.kaboomv5.app/crisp?",1801086335),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","root","app.kaboomv5.app/root",-1529673293)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
app.kaboomv5.app.ex_config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"scale","scale",-230427353),(2),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),false,new cljs.core.Keyword(null,"crisp?","crisp?",-1375116321),false,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"root","root",-448657453),document.body], null);
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.app !== 'undefined') && (typeof app.kaboomv5.app.key_map !== 'undefined')){
} else {
app.kaboomv5.app.key_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ArrowLeft","ArrowLeft",-974160950),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"ArrowRight","ArrowRight",1621754469),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"ArrowUp","ArrowUp",-538953684),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"ArrowDown","ArrowDown",-251004205),new cljs.core.Keyword(null,"down","down",1565245570)], null);
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","loop-id","app.kaboomv5.app/loop-id",-1387852888),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","stopped?","app.kaboomv5.app/stopped?",-657460514),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","key-states","app.kaboomv5.app/key-states",1982147659),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","char-inputted","app.kaboomv5.app/char-inputted",1679684039),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","mouse-pos","app.kaboomv5.app/mouse-pos",1403674601),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","skip-time?","app.kaboomv5.app/skip-time?",-1411969487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","real-time","app.kaboomv5.app/real-time",495980941),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","dt","app.kaboomv5.app/dt",-1554318327),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","touch?","app.kaboomv5.app/touch?",2089441381),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","mouse-state","app.kaboomv5.app/mouse-state",385272824),new cljs.core.Keyword("app.kaboomv5.app","button-state","app.kaboomv5.app/button-state",-98696536),new cljs.core.Keyword("app.kaboomv5.app","button-state","app.kaboomv5.app/button-state",-98696536));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","fps","app.kaboomv5.app/fps",1716446480),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","time","app.kaboomv5.app/time",422310698),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","fps-buf","app.kaboomv5.app/fps-buf",-230590684),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","fps-timer","app.kaboomv5.app/fps-timer",581904802),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.app","state","app.kaboomv5.app/state",-923856083),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","loop-id","app.kaboomv5.app/loop-id",-1387852888),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","stopped?","app.kaboomv5.app/stopped?",-657460514),new cljs.core.Keyword("app.kaboomv5.app","key-states","app.kaboomv5.app/key-states",1982147659),new cljs.core.Keyword("app.kaboomv5.app","char-inputted","app.kaboomv5.app/char-inputted",1679684039),new cljs.core.Keyword("app.kaboomv5.app","mouse-state","app.kaboomv5.app/mouse-state",385272824),new cljs.core.Keyword("app.kaboomv5.app","mouse-pos","app.kaboomv5.app/mouse-pos",1403674601),new cljs.core.Keyword("app.kaboomv5.app","skip-time?","app.kaboomv5.app/skip-time?",-1411969487),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","real-time","app.kaboomv5.app/real-time",495980941),new cljs.core.Keyword("app.kaboomv5.app","dt","app.kaboomv5.app/dt",-1554318327),new cljs.core.Keyword("app.kaboomv5.app","touch?","app.kaboomv5.app/touch?",2089441381),new cljs.core.Keyword("app.kaboomv5.app","fps","app.kaboomv5.app/fps",1716446480),new cljs.core.Keyword("app.kaboomv5.app","time","app.kaboomv5.app/time",422310698),new cljs.core.Keyword("app.kaboomv5.app","fps-buf","app.kaboomv5.app/fps-buf",-230590684),new cljs.core.Keyword("app.kaboomv5.app","fps-timer","app.kaboomv5.app/fps-timer",581904802)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","loop-id","app.kaboomv5.app/loop-id",-1387852888),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","stopped?","app.kaboomv5.app/stopped?",-657460514),new cljs.core.Keyword("app.kaboomv5.app","key-states","app.kaboomv5.app/key-states",1982147659),new cljs.core.Keyword("app.kaboomv5.app","char-inputted","app.kaboomv5.app/char-inputted",1679684039),new cljs.core.Keyword("app.kaboomv5.app","mouse-state","app.kaboomv5.app/mouse-state",385272824),new cljs.core.Keyword("app.kaboomv5.app","mouse-pos","app.kaboomv5.app/mouse-pos",1403674601),new cljs.core.Keyword("app.kaboomv5.app","skip-time?","app.kaboomv5.app/skip-time?",-1411969487),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","real-time","app.kaboomv5.app/real-time",495980941),new cljs.core.Keyword("app.kaboomv5.app","dt","app.kaboomv5.app/dt",-1554318327),new cljs.core.Keyword("app.kaboomv5.app","touch?","app.kaboomv5.app/touch?",2089441381),new cljs.core.Keyword("app.kaboomv5.app","fps","app.kaboomv5.app/fps",1716446480),new cljs.core.Keyword("app.kaboomv5.app","time","app.kaboomv5.app/time",422310698),new cljs.core.Keyword("app.kaboomv5.app","fps-buf","app.kaboomv5.app/fps-buf",-230590684),new cljs.core.Keyword("app.kaboomv5.app","fps-timer","app.kaboomv5.app/fps-timer",581904802)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36704){
return cljs.core.map_QMARK_(G__36704);
})], null),(function (G__36704){
return cljs.core.map_QMARK_(G__36704);
}),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-id","loop-id",-338270264),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"stopped?","stopped?",396804158),new cljs.core.Keyword(null,"key-states","key-states",800337131),new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"real-time","real-time",-618590227),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"touch?","touch?",989550981),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"fps-buf","fps-buf",-1255114620),new cljs.core.Keyword(null,"fps-timer","fps-timer",1677731906)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.app","loop-id","app.kaboomv5.app/loop-id",-1387852888),new cljs.core.Keyword("app.kaboomv5.app","canvas","app.kaboomv5.app/canvas",1398749263),new cljs.core.Keyword("app.kaboomv5.app","stopped?","app.kaboomv5.app/stopped?",-657460514),new cljs.core.Keyword("app.kaboomv5.app","key-states","app.kaboomv5.app/key-states",1982147659),new cljs.core.Keyword("app.kaboomv5.app","char-inputted","app.kaboomv5.app/char-inputted",1679684039),new cljs.core.Keyword("app.kaboomv5.app","mouse-state","app.kaboomv5.app/mouse-state",385272824),new cljs.core.Keyword("app.kaboomv5.app","mouse-pos","app.kaboomv5.app/mouse-pos",1403674601),new cljs.core.Keyword("app.kaboomv5.app","skip-time?","app.kaboomv5.app/skip-time?",-1411969487),new cljs.core.Keyword("app.kaboomv5.app","scale","app.kaboomv5.app/scale",834330503),new cljs.core.Keyword("app.kaboomv5.app","real-time","app.kaboomv5.app/real-time",495980941),new cljs.core.Keyword("app.kaboomv5.app","dt","app.kaboomv5.app/dt",-1554318327),new cljs.core.Keyword("app.kaboomv5.app","touch?","app.kaboomv5.app/touch?",2089441381),new cljs.core.Keyword("app.kaboomv5.app","fps","app.kaboomv5.app/fps",1716446480),new cljs.core.Keyword("app.kaboomv5.app","time","app.kaboomv5.app/time",422310698),new cljs.core.Keyword("app.kaboomv5.app","fps-buf","app.kaboomv5.app/fps-buf",-230590684),new cljs.core.Keyword("app.kaboomv5.app","fps-timer","app.kaboomv5.app/fps-timer",581904802)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.app !== 'undefined') && (typeof app.kaboomv5.app.app_state !== 'undefined')){
} else {
app.kaboomv5.app.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fps-timer","fps-timer",1677731906),new cljs.core.Keyword(null,"fps-buf","fps-buf",-1255114620),new cljs.core.Keyword(null,"touch?","touch?",989550981),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575),new cljs.core.Keyword(null,"loop-id","loop-id",-338270264),new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"key-states","key-states",800337131),new cljs.core.Keyword(null,"real-time","real-time",-618590227),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"stopped?","stopped?",396804158)],[0.0,cljs.core.PersistentVector.EMPTY,false,(2),cljs.core.PersistentVector.EMPTY,null,app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),0.0,(0),cljs.core.PersistentArrayMap.EMPTY,(0),null,(0),false,new cljs.core.Keyword(null,"up","up",-269712113),false]));
}
app.kaboomv5.app.mousemove_handler = (function app$kaboomv5$app$mousemove_handler(evt){
var off_x = evt.offsetX;
var off_y = evt.offsetY;
var mouse_pos = app.kaboomv5.math.scale.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos);

console.log("offsetX: ",({"offsetX": off_x, "offsetY": off_y}));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state))], 0));
});
app.kaboomv5.app.mousedown_handler = (function app$kaboomv5$app$mousedown_handler(evt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv5.app.mouseup_handler = (function app$kaboomv5$app$mouseup_handler(evt){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"released","released",381037203));

return console.log(new cljs.core.Keyword(null,"released","released",381037203));
});
app.kaboomv5.app.touch_start_handler = (function app$kaboomv5$app$touch_start_handler(evt){
var t = (evt.touches[(0)]);
var off_x = t.clientX();
var off_y = t.clientY();
var mouse_pos = app.kaboomv5.math.scale.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.app.app_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
}));
});
app.kaboomv5.app.touch_move_handler = (function app$kaboomv5$app$touch_move_handler(evt){
var t = (evt.touches[(0)]);
var off_x = t.clientX();
var off_y = t.clientY();
var mouse_pos = app.kaboomv5.math.scale.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos);
});
app.kaboomv5.app.keydown_handler = (function app$kaboomv5$app$keydown_handler(event){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.key);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv5.app.key_map,key,key);
console.log("key down");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv5.app.keyup_handler = (function app$kaboomv5$app$keyup_handler(event){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.key);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv5.app.key_map,key,key);
console.log("key Up");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"released","released",381037203));
});
app.kaboomv5.app.visibility_handler = (function app$kaboomv5$app$visibility_handler(event){
var state = document.visibilityState;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",state)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753),true);
} else {
return null;
}
});
app.kaboomv5.app.reg_events = (function app$kaboomv5$app$reg_events(canvas){
console.log("CANVAS",canvas);

canvas.setAttribute("tabindex","0");

canvas.addEventListener("mousemove",app.kaboomv5.app.mousemove_handler);

canvas.addEventListener("mousedown",app.kaboomv5.app.mousedown_handler);

canvas.addEventListener("mouseup",app.kaboomv5.app.mouseup_handler);

canvas.addEventListener("touchshart",app.kaboomv5.app.touch_start_handler);

canvas.addEventListener("touchmove",app.kaboomv5.app.touch_move_handler);

goog.events.listen(canvas,"keydown",app.kaboomv5.app.keydown_handler);

goog.events.listen(canvas,"keyup",app.kaboomv5.app.keyup_handler);

return goog.events.listen(document,"visibilitychange",app.kaboomv5.app.visibility_handler);
});
app.kaboomv5.app.mouse_pos = (function app$kaboomv5$app$mouse_pos(){
return new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state));
});
app.kaboomv5.app.mouse_clicked_QMARK_ = (function app$kaboomv5$app$mouse_clicked_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pressed","pressed",1100937946),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
});
app.kaboomv5.app.mouse_down_QMARK_ = (function app$kaboomv5$app$mouse_down_QMARK_(){
return ((app.kaboomv5.app.mouse_clicked_QMARK_()) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)))));
});
app.kaboomv5.app.mouse_released_QMARK_ = (function app$kaboomv5$app$mouse_released_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"released","released",381037203),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
});
app.kaboomv5.app.key_pressed_QMARK_ = (function app$kaboomv5$app$key_pressed_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv5.app.key_pressed_rep_QMARK_ = (function app$kaboomv5$app$key_pressed_rep_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"rpressed","rpressed",-1542572484))));
});
app.kaboomv5.app.key_down_QMARK_ = (function app$kaboomv5$app$key_down_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return ((app.kaboomv5.app.key_pressed_rep_QMARK_(id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"down","down",1565245570))));
});
app.kaboomv5.app.key_released_QMARK_ = (function app$kaboomv5$app$key_released_QMARK_(id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"released","released",381037203),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null)));
});
app.kaboomv5.app.char_inputted = (function app$kaboomv5$app$char_inputted(){
return new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state));
});
app.kaboomv5.app.dt = (function app$kaboomv5$app$dt(){
return new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state));
});
app.kaboomv5.app.time_BANG_ = (function app$kaboomv5$app$time_BANG_(){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state));
});
app.kaboomv5.app.fps = (function app$kaboomv5$app$fps(){
return new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state));
});
app.kaboomv5.app.screenshot = (function app$kaboomv5$app$screenshot(){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)).toDataURL();
});
app.kaboomv5.app.cursor = (function app$kaboomv5$app$cursor(var_args){
var G__36706 = arguments.length;
switch (G__36706) {
case 0:
return app.kaboomv5.app.cursor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.app.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.app.cursor.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)).style.cursor;
}));

(app.kaboomv5.app.cursor.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)).style.cursor = c);
}));

(app.kaboomv5.app.cursor.cljs$lang$maxFixedArity = 1);

app.kaboomv5.app.update_app_state = (function app$kaboomv5$app$update_app_state(t){
var delta = ((t / (1000)) - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dt","dt",-368444759),delta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)) + delta)], 0));
});
app.kaboomv5.app.run = (function app$kaboomv5$app$run(f){
if(cljs.core.not(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)))){
return console.warn("Please run the kaboom/init! function first. You need to create a new webgl context first");
} else {
app.kaboomv5.gfx.init_gl(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));

var id = app.kaboomv5.gfx.init(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
var frame = (function app$kaboomv5$app$run_$_frame(t){
app.kaboomv5.app.update_app_state(t);

app.kaboomv5.gfx.frame_start(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

app.kaboomv5.gfx.frame_end(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)),id);

return requestAnimationFrame(app$kaboomv5$app$run_$_frame);
});
return requestAnimationFrame(frame);
}
});
app.kaboomv5.app.quit = (function app$kaboomv5$app$quit(){
cancelAnimationFrame(new cljs.core.Keyword(null,"loop-id","loop-id",-338270264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stopped?","stopped?",396804158),true);
});
app.kaboomv5.app.focused_QMARK_ = (function app$kaboomv5$app$focused_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
});
app.kaboomv5.app.focus = (function app$kaboomv5$app$focus(){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)).focus();
});
app.kaboomv5.app.init_canvas = (function app$kaboomv5$app$init_canvas(var_args){
var G__36708 = arguments.length;
switch (G__36708) {
case 0:
return app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.app.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null)));
}));

(app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
}));

(app.kaboomv5.app.init_canvas.cljs$lang$maxFixedArity = 1);

app.kaboomv5.app.init_gl_state = (function app$kaboomv5$app$init_gl_state(canvas){
if(cljs.core.truth_(canvas)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),app.kaboomv5.app.new_gl(canvas));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),app.kaboomv5.app.new_gl(app.kaboomv5.app.new_canvas(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null))));
}
});
app.kaboomv5.app.init_BANG_ = (function app$kaboomv5$app$init_BANG_(p__36709){
var map__36710 = p__36709;
var map__36710__$1 = (((((!((map__36710 == null))))?(((((map__36710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36710):map__36710);
var config = map__36710__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36710__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
app.kaboomv5.app.init_canvas.cljs$core$IFn$_invoke$arity$1(canvas);

app.kaboomv5.app.init_gl_state(canvas);

app.kaboomv5.app.set_fullscreen(config);

return app.kaboomv5.app.reg_events(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.app_state)));
});

//# sourceMappingURL=app.kaboomv5.app.js.map
