goog.provide('app.kaboom_examples.drive');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.events');
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"height","height",1025178622),(120),new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sprite","car","sprite/car",-828136667),"img/car.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(3),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(1)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(2),new cljs.core.Keyword(null,"to","to",192099007),(2)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","sky","sprite/sky",-22511911),"img/sky.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","road","sprite/road",-1234334663),"img/road.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","apple","sprite/apple",1298633545),"img/apple.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","pineapple","sprite/pineapple",-778072635),"img/pineapple.png");
app.kaboom_examples.drive.ubound = (40);
app.kaboom_examples.drive.lbound = (app.kaboom.patu.core.height() - (12));
app.kaboom_examples.drive.speed = (90);
app.kaboom_examples.drive.speed_mod = (1);
app.kaboom_examples.drive.main_init = (function app$kaboom_examples$drive$main_init(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layer","bg","layer/bg",-108215762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","sky","sprite/sky",-22511911)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bg","road","bg/road",1636471993),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","road","sprite/road",-1234334663)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"road","road",1636591870)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bg","road2","bg/road2",976601771),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","road","sprite/road",-1234334663)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(app.kaboom.patu.core.width() * (2)),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"road","road",1636591870)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","car","sprite/car",-828136667)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(24),(app.kaboom.patu.core.height() / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),(-12),(-6),(12),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(120)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0",(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null)], null)], null);
});
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),(function (_,p__44112){
var vec__44113 = p__44112;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44113,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44113,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if((player.pos.y > app.kaboom_examples.drive.ubound)){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.kaboom.patu.core.neg(app.kaboom.patu.components.speed(player))], null));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-down","player/move-down",-155233694),(function (_,p__44116){
var vec__44117 = p__44116;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44117,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44117,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if((player.pos.y < app.kaboom_examples.drive.lbound)){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.kaboom.patu.components.speed(player)], null));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__44120){
var vec__44121 = p__44120;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if((player.pos.y < app.kaboom_examples.drive.lbound)){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.core.neg(app.kaboom.patu.components.speed(player)),(0)], null));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__44124){
var vec__44125 = p__44124;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44125,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44125,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if((player.pos.y < app.kaboom_examples.drive.lbound)){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.components.speed(player),(0)], null));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("game","handle-loop","game/handle-loop",1558951602),(function (_,___$1){
var comp = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sprite","apple","sprite/apple",1298633545),new cljs.core.Keyword("sprite","pineapple","sprite/pineapple",-778072635)], null));
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),comp], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.kaboom.patu.core.width(),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(app.kaboom_examples.drive.ubound,app.kaboom_examples.drive.lbound))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"obj","obj",981763962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),comp], null)], null));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("obj","handle-lifecycle","obj/handle-lifecycle",-1619019344),(function (_,p__44128){
var vec__44129 = p__44128;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(1),null);
obj.move((((-1) * app.kaboom_examples.drive.speed) * app.kaboom_examples.drive.speed_mod),(0));

if((obj.pos.x <= (- app.kaboom.patu.core.width()))){
return app.kaboom.patu.core.destroy(obj);
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("handle","apple","handle/apple",-150067220),(function (_,p__44132){
var vec__44133 = p__44132;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44133,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44133,(1),null);
var happiness = app.kaboom.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
app.kaboom.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),(happiness.value + (250)));

return app.kaboom.patu.core.destroy(obj);
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("handle","pineapple","handle/pineapple",2064014248),(function (_,p__44136){
var vec__44137 = p__44136;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(1),null);
var happiness = app.kaboom.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
app.kaboom.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),(happiness.value + (125)));

return app.kaboom.patu.core.destroy(obj);
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("happiness","set-score","happiness/set-score",-1614289312),(function (_,p__44140){
var vec__44141 = p__44140;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(1),null);
var happiness = app.kaboom.patu.core.get_component(id);
app.kaboom.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),Math.floor((happiness.value + (1))));

return app.kaboom.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"text","text",-1790561697),happiness.value);
}));
Math.min((10),(1));
app.kaboom_examples.drive.main_action = (function app$kaboom_examples$drive$main_action(){
var player = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
var happiness = app.kaboom.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
var score = (0);
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"f","f",-1597136552),(function (){
return (app.kaboom_examples.drive.speed_mod = (4));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),new cljs.core.Keyword(null,"f","f",-1597136552),(function (){
return (app.kaboom_examples.drive.speed_mod = (1));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"=","=",1152933628),(function (){
return app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"-","-",-2112348439),(function (){
return app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"obj","obj",981763962),(function (p1__44144_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("obj","handle-lifecycle","obj/handle-lifecycle",-1619019344),p1__44144_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("happiness","set-score","happiness/set-score",-1614289312),new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),0.6,(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","handle-loop","game/handle-loop",1558951602)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","play","comp/play",-581544151),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"move","move",-2110884309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"apple","apple",-2146789868)], null),(function (p1__44145_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("handle","apple","handle/apple",-150067220),p1__44145_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pineapple","pineapple",67408272)], null),(function (p1__44146_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("handle","pineapple","handle/pineapple",2064014248),p1__44146_SHARP_], null));
})], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.drive.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.drive.main_action], null));
app.kaboom_examples.drive.app = (function app$kaboom_examples$drive$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.kaboom_examples.drive.js.map
