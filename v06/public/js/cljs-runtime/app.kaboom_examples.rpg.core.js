goog.provide('app.kaboom_examples.rpg.core');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom_examples.rpg.assets');
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),true,new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","steel","sprite/steel",-515589465),"img/steel.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","ch1","sprite/ch1",-1202707055),"img/ch1.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","ch2","sprite/ch2",-1137640331),"img/ch2.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","grass","sprite/grass",502047472),"img/grass.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","door","sprite/door",1943626584),"img/door.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","key","sprite/key",-255981598),"img/key.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","guy","sprite/guy",-1531114077),"img/guy.png");
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","main","level/main",-1952281121),app.kaboom_examples.rpg.assets.level_handler);
app.kaboom_examples.rpg.core.main_init = (function app$kaboom_examples$rpg$core$main_init(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","guy","sprite/guy",-1531114077)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(30),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(55)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),app.kaboom_examples.rpg.assets.main_map,new cljs.core.Keyword("level","main","level/main",-1952281121)], null)], null);
});
app.kaboom_examples.rpg.core.talking = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.kaboom_examples.rpg.core.talk = (function app$kaboom_examples$rpg$core$talk(msg){
return cljs.core.reset_BANG_(app.kaboom_examples.rpg.core.talking,app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),msg,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(200)], null)], null)));
});
app.kaboom_examples.rpg.core.speed = (80);
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__44734){
var vec__44735 = p__44734;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44735,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44735,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__44738){
var vec__44739 = p__44738;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44739,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44739,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),(function (_,p__44742){
var vec__44743 = p__44742;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44743,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44743,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-down","player/move-down",-155233694),(function (_,p__44746){
var vec__44747 = p__44746;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("character","talk","character/talk",1899359135),(function (_,p__44750){
var vec__44751 = p__44750;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44751,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44751,(1),null);
return app.kaboom_examples.rpg.core.talk(ch);
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("modal","check","modal/check",1332480075),(function (_,p__44754){
var vec__44755 = p__44754;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44755,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44755,(1),null);
if(cljs.core.truth_(cljs.core.deref(app.kaboom_examples.rpg.core.talking))){
app.kaboom.patu.core.destroy(cljs.core.deref(app.kaboom_examples.rpg.core.talking));

return cljs.core.reset_BANG_(app.kaboom_examples.rpg.core.talking,null);
} else {
return null;
}
}));
app.kaboom_examples.rpg.core.button = (function app$kaboom_examples$rpg$core$button(text,p,f){
var btn = app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(60),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1),(1),(1)], null)], null));
var bg = app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(58),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(0),0.4,(1)], null)], null));
app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),text,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1),(1),(1)], null)], null));

return btn.action((function (){
if(cljs.core.truth_(btn.isHovered())){
(bg.color = app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((0),0.6,(1)));

if(cljs.core.truth_(app.kaboom.patu.core.mouse_down_QMARK_())){
return (bg.color = app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((0),0.8,(1)));
} else {
return (bg.color = app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((0),0.6,(1)));
}
} else {
return (bg.color = app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((0),0.4,(1)));
}
}));
});
app.kaboom_examples.rpg.core.main_event = (function app$kaboom_examples$rpg$core$main_event(){
app.kaboom_examples.rpg.core.button("Start",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(150)], null),null);

app.kaboom_examples.rpg.core.button("Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(150)], null),null);

var player = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","overlaps","evt/overlaps",1397807447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"character","character",380652989)], null),(function (p1__44758_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("character","talk","character/talk",1899359135),p1__44758_SHARP_.msg], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","check","modal/check",1332480075)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","check","modal/check",1332480075)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","check","modal/check",1332480075)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","check","modal/check",1332480075)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
return player.resolve();
})], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.rpg.core.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.rpg.core.main_event], null));
app.kaboom_examples.rpg.core.app = (function app$kaboom_examples$rpg$core$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.kaboom_examples.rpg.core.js.map
