goog.provide('app.examples.drive');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.patu.core');
goog.require('app.patu.loaders');
goog.require('app.patu.cam');
goog.require('app.patu.audio');
goog.require('app.patu.utils');
goog.require('app.patu.components');
goog.require('app.patu.events');
app.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"height","height",1025178622),(120),new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sprite","car","sprite/car",-828136667),"img/car.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(3),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(1)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(2),new cljs.core.Keyword(null,"to","to",192099007),(2)], null)], null)], null));
app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","sky","sprite/sky",-22511911),"img/sky.png");
app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","road","sprite/road",-1234334663),"img/road.png");
app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","apple","sprite/apple",1298633545),"img/apple.png");
app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","pineapple","sprite/pineapple",-778072635),"img/pineapple.png");
app.examples.drive.ubound = (40);
app.examples.drive.lbound = (app.patu.core.height() - (12));
app.examples.drive.speed = (90);
app.examples.drive.speed_mod = (1);
app.examples.drive.main_init = (function app$examples$drive$main_init(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layer","bg","layer/bg",-108215762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","sky","sprite/sky",-22511911)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bg","road","bg/road",1636471993),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","road","sprite/road",-1234334663)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"road","road",1636591870)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bg","road2","bg/road2",976601771),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","road","sprite/road",-1234334663)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(app.patu.core.width() * (2)),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"road","road",1636591870)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","car","sprite/car",-828136667)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(24),(app.patu.core.height() / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),(-12),(-6),(12),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(120)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0",(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null)], null)], null);
});
app.patu.events.reg_event(new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),(function (_,p__28666){
var vec__28667 = p__28666;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28667,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28667,(1),null);
var player = app.patu.core.get_component(pid);
if((player.pos.y > app.examples.drive.ubound)){
return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.patu.core.neg(app.patu.components.speed(player))], null));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-down","player/move-down",-155233694),(function (_,p__28670){
var vec__28671 = p__28670;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28671,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28671,(1),null);
var player = app.patu.core.get_component(pid);
if((player.pos.y < app.examples.drive.lbound)){
return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.patu.components.speed(player)], null));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__28674){
var vec__28675 = p__28674;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(1),null);
var player = app.patu.core.get_component(pid);
if((player.pos.y < app.examples.drive.lbound)){
return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patu.core.neg(app.patu.components.speed(player)),(0)], null));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__28678){
var vec__28679 = p__28678;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28679,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28679,(1),null);
var player = app.patu.core.get_component(pid);
if((player.pos.y < app.examples.drive.lbound)){
return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patu.components.speed(player),(0)], null));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("game","handle-loop","game/handle-loop",1558951602),(function (_,___$1){
var comp = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sprite","apple","sprite/apple",1298633545),new cljs.core.Keyword("sprite","pineapple","sprite/pineapple",-778072635)], null));
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),comp], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.patu.core.width(),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(app.examples.drive.ubound,app.examples.drive.lbound))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"obj","obj",981763962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),comp], null)], null));
}));
app.patu.events.reg_event(new cljs.core.Keyword("obj","handle-lifecycle","obj/handle-lifecycle",-1619019344),(function (_,p__28682){
var vec__28683 = p__28682;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(1),null);
obj.move((((-1) * app.examples.drive.speed) * app.examples.drive.speed_mod),(0));

if((obj.pos.x <= (- app.patu.core.width()))){
return app.patu.core.destroy(obj);
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("handle","apple","handle/apple",-150067220),(function (_,p__28686){
var vec__28687 = p__28686;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(1),null);
var happiness = app.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
app.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),(happiness.value + (250)));

return app.patu.core.destroy(obj);
}));
app.patu.events.reg_event(new cljs.core.Keyword("handle","pineapple","handle/pineapple",2064014248),(function (_,p__28690){
var vec__28691 = p__28690;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691,(1),null);
var happiness = app.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
app.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),(happiness.value + (125)));

return app.patu.core.destroy(obj);
}));
app.patu.events.reg_event(new cljs.core.Keyword("happiness","set-score","happiness/set-score",-1614289312),(function (_,p__28694){
var vec__28695 = p__28694;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28695,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28695,(1),null);
var happiness = app.patu.core.get_component(id);
app.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"value","value",305978217),Math.floor((happiness.value + (1))));

return app.patu.utils.js_set_BANG_(happiness,new cljs.core.Keyword(null,"text","text",-1790561697),happiness.value);
}));
Math.min((10),(1));
app.examples.drive.main_action = (function app$examples$drive$main_action(){
var player = app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
var happiness = app.patu.core.get_component(new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022));
var score = (0);
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),new cljs.core.Keyword(null,"player","player",-97687400)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"f","f",-1597136552),(function (){
return (app.examples.drive.speed_mod = (4));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),new cljs.core.Keyword(null,"f","f",-1597136552),(function (){
return (app.examples.drive.speed_mod = (1));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"=","=",1152933628),(function (){
return app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"-","-",-2112348439),(function (){
return app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"obj","obj",981763962),(function (p1__28698_SHARP_){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("obj","handle-lifecycle","obj/handle-lifecycle",-1619019344),p1__28698_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("happiness","set-score","happiness/set-score",-1614289312),new cljs.core.Keyword("ui","happiness","ui/happiness",1032138022)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),0.6,(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","handle-loop","game/handle-loop",1558951602)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","play","comp/play",-581544151),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"move","move",-2110884309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"apple","apple",-2146789868)], null),(function (p1__28699_SHARP_){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("handle","apple","handle/apple",-150067220),p1__28699_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pineapple","pineapple",67408272)], null),(function (p1__28700_SHARP_){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("handle","pineapple","handle/pineapple",2064014248),p1__28700_SHARP_], null));
})], null)], null);
});
app.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.examples.drive.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.examples.drive.main_action], null));
app.examples.drive.app = (function app$examples$drive$app(){
return app.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.examples.drive.js.map
