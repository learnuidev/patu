goog.provide('app.kaboom_examples.metro.scenes.one');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom_examples.metro.assets');
app.kaboom_examples.metro.scenes.one.sleep = (function app$kaboom_examples$metro$scenes$one$sleep(f,ms){
return setTimeout(f,ms);
});
/**
 * Triggers attack animation
 */
app.kaboom_examples.metro.scenes.one.attack = (function app$kaboom_examples$metro$scenes$one$attack(id){
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if((!(app.kaboom.patu.components.cur_anim_QMARK_(comp,new cljs.core.Keyword(null,"attack","attack",1957061788))))){
comp.changeSprite(cljs.core.name(new cljs.core.Keyword("character","attack","character/attack",-757487275)));

app.kaboom.patu.core.play(id,new cljs.core.Keyword(null,"attack","attack",1957061788));

return app.kaboom_examples.metro.scenes.one.sleep((function (){
return app.kaboom.patu.core.change_sprite(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("character","tileset","character/tileset",-1801123115),new cljs.core.Keyword("player","nod","player/nod",565110042)], null));
}),(800));
} else {
return null;
}
} else {
return null;
}
});
Math.abs((-1));
app.kaboom_examples.metro.scenes.one.follow_target = (function app$kaboom_examples$metro$scenes$one$follow_target(obj,target){
if(app.kaboom.patu.components.close_QMARK_(target,obj)){
if(app.kaboom.patu.components.ahead_QMARK_(obj,target)){
return obj.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((100)));
} else {
return obj.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((100)));
}
} else {
return null;
}
});
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","main","level/main",-1952281121),app.kaboom_examples.metro.assets.level_handler);
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","two","level/two",726343625),app.kaboom_examples.metro.assets.level_two_handler);
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__72425){
var vec__72426 = p__72425;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72426,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72426,(1),null);
(player.dir = "left");

if(((20) < player.pos.x)){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));
} else {
app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","two","scene/two",753507521));
}

player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));

app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)).flipX((-1));

if(cljs.core.truth_((function (){var and__4115__auto__ = app.kaboom.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) && ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))))));
} else {
return and__4115__auto__;
}
})())){
return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","run","player/run",-1397634330));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__72429){
var vec__72430 = p__72429;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72430,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72430,(1),null);
(player.dir = "right");

if(((650) > player.pos.x)){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale(player.speed));
} else {
}

app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)).flipX((1));

if(cljs.core.truth_((function (){var and__4115__auto__ = app.kaboom.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) && ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))))));
} else {
return and__4115__auto__;
}
})())){
return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","run","player/run",-1397634330));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","jump","player/jump",-1704693090),(function (_,p__72433){
var vec__72434 = p__72433;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434,(1),null);
if(cljs.core.truth_(app.kaboom.patu.components.grounded_QMARK_(player))){
return app.kaboom.patu.components.jump_BANG_(player,(540));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","zoom","player/zoom",1347399137),(function (_,p__72437){
var vec__72438 = p__72437;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72438,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72438,(1),null);
var diff = (cljs.core.truth_(app.kaboom.patu.events.key_is_down(new cljs.core.Keyword(null,"left","left",-399115937)))?(-800):(400));
if(cljs.core.not(app.kaboom.patu.components.grounded_QMARK_(player))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player.dir,"left")){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((diff + player.speed)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player.dir,"right")){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((diff + player.speed)));
} else {
}

return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","boom","player/boom",-2049216393));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__72441){
var vec__72442 = p__72441;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72442,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72442,(1),null);
if(((cljs.core.not(app.kaboom.patu.events.key_is_down(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"x","x",2099068185)], null)))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword("player","attack","player/attack",718850429))))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"nod","nod",-328366087))))))){
return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("game","spawn-birds","game/spawn-birds",363202744),(function (_,___$1){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bird","bird",-1252014845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(-100),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","bird","app.kaboom-examples.metro.scenes.one/bird",-1108925395)], null)], null));
}));
app.kaboom_examples.metro.scenes.one.init = (function app$kaboom_examples$metro$scenes$one$init(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),app.kaboom_examples.metro.assets.main_map,new cljs.core.Keyword("level","main","level/main",-1952281121)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg0","bg0",-2022873376),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg0","bg0",-2022873376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.6], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg1","bg1",-2033818465),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg1","bg1",-2033818465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg2","bg2",-1429908206),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg2","bg2",-1429908206)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fg","fg",-101797208),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"fg0","fg0",1854659755)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("character","tileset","character/tileset",-1801123115)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(190),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1257663751),(125),new cljs.core.Keyword(null,"animSpeed","animSpeed",-784084678),0.25], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("door","closed","door/closed",-922893745)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(575),(320)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(155)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(-30),(75)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animSpeed","animSpeed",-784084678),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852)], null)], null)], null)], null)], null);
});
app.kaboom_examples.metro.scenes.one.spawn_coin = (function app$kaboom_examples$metro$scenes$one$spawn_coin(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"coin","coin",-227557189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","coin","app.kaboom-examples.metro.scenes.one/coin",-354897471)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_worm = (function app$kaboom_examples$metro$scenes$one$spawn_worm(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),(1)], null)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_slime = (function app$kaboom_examples$metro$scenes$one$spawn_slime(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","slime","app.kaboom-examples.metro.scenes.one/slime",1942708887)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_wooden_plate = (function app$kaboom_examples$metro$scenes$one$spawn_wooden_plate(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"wooden-plate","wooden-plate",-1406744171)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","wooden-plate","app.kaboom-examples.metro.scenes.one/wooden-plate",-1549819297)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_flower_props = (function app$kaboom_examples$metro$scenes$one$spawn_flower_props(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"flower-props","flower-props",131151738)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","flower-props","app.kaboom-examples.metro.scenes.one/flower-props",-6794060)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_grass_props = (function app$kaboom_examples$metro$scenes$one$spawn_grass_props(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"grass-props","grass-props",-944833944)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","grass-props","app.kaboom-examples.metro.scenes.one/grass-props",1896094562)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_lever = (function app$kaboom_examples$metro$scenes$one$spawn_lever(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"lever-left","lever-left",226448857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","lever","app.kaboom-examples.metro.scenes.one/lever",-1155996586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null)], null));
});
app.kaboom_examples.metro.scenes.one.spawn_orb = (function app$kaboom_examples$metro$scenes$one$spawn_orb(x,y){
return app.kaboom.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.4], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","orb","app.kaboom-examples.metro.scenes.one/orb",-184057516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null)], null));
});
app.kaboom_examples.metro.scenes.one.coin_positions = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(90)], null)], null);
app.kaboom_examples.metro.scenes.one.anims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(2350)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),(350)], null)], null);
app.kaboom_examples.metro.scenes.one.event = (function app$kaboom_examples$metro$scenes$one$event(){
var player = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
var score = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"score","score",-1963588780));
var door = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"door","door",-956406127));
var seq__72446_72489 = cljs.core.seq(app.kaboom_examples.metro.scenes.one.coin_positions);
var chunk__72447_72490 = null;
var count__72448_72491 = (0);
var i__72449_72492 = (0);
while(true){
if((i__72449_72492 < count__72448_72491)){
var vec__72456_72493 = chunk__72447_72490.cljs$core$IIndexed$_nth$arity$2(null,i__72449_72492);
var x_72494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72456_72493,(0),null);
var y_72495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72456_72493,(1),null);
app.kaboom_examples.metro.scenes.one.spawn_coin(x_72494,y_72495);


var G__72496 = seq__72446_72489;
var G__72497 = chunk__72447_72490;
var G__72498 = count__72448_72491;
var G__72499 = (i__72449_72492 + (1));
seq__72446_72489 = G__72496;
chunk__72447_72490 = G__72497;
count__72448_72491 = G__72498;
i__72449_72492 = G__72499;
continue;
} else {
var temp__5735__auto___72500 = cljs.core.seq(seq__72446_72489);
if(temp__5735__auto___72500){
var seq__72446_72501__$1 = temp__5735__auto___72500;
if(cljs.core.chunked_seq_QMARK_(seq__72446_72501__$1)){
var c__4556__auto___72502 = cljs.core.chunk_first(seq__72446_72501__$1);
var G__72503 = cljs.core.chunk_rest(seq__72446_72501__$1);
var G__72504 = c__4556__auto___72502;
var G__72505 = cljs.core.count(c__4556__auto___72502);
var G__72506 = (0);
seq__72446_72489 = G__72503;
chunk__72447_72490 = G__72504;
count__72448_72491 = G__72505;
i__72449_72492 = G__72506;
continue;
} else {
var vec__72459_72507 = cljs.core.first(seq__72446_72501__$1);
var x_72508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72459_72507,(0),null);
var y_72509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72459_72507,(1),null);
app.kaboom_examples.metro.scenes.one.spawn_coin(x_72508,y_72509);


var G__72510 = cljs.core.next(seq__72446_72501__$1);
var G__72511 = null;
var G__72512 = (0);
var G__72513 = (0);
seq__72446_72489 = G__72510;
chunk__72447_72490 = G__72511;
count__72448_72491 = G__72512;
i__72449_72492 = G__72513;
continue;
}
} else {
}
}
break;
}

app.kaboom_examples.metro.scenes.one.spawn_slime((550),(180));

app.kaboom_examples.metro.scenes.one.spawn_lever((600),(160));

app.kaboom_examples.metro.scenes.one.spawn_worm((320),(405));

app.kaboom_examples.metro.scenes.one.spawn_slime((490),(370));

app.kaboom_examples.metro.scenes.one.spawn_slime((450),(370));

app.kaboom_examples.metro.scenes.one.spawn_slime((410),(370));

app.kaboom_examples.metro.scenes.one.spawn_flower_props((380),(48));

app.kaboom_examples.metro.scenes.one.spawn_grass_props((150),(272));

app.kaboom_examples.metro.scenes.one.spawn_wooden_plate((530),(390));

app.kaboom_examples.metro.scenes.one.spawn_orb((630),(360));

var seq__72462_72514 = cljs.core.seq(app.kaboom.patu.core.get_component(new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","slime","app.kaboom-examples.metro.scenes.one/slime",1942708887)));
var chunk__72463_72515 = null;
var count__72464_72516 = (0);
var i__72465_72517 = (0);
while(true){
if((i__72465_72517 < count__72464_72516)){
var c_72518 = chunk__72463_72515.cljs$core$IIndexed$_nth$arity$2(null,i__72465_72517);
app.kaboom.patu.core.play(c_72518,new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547));


var G__72519 = seq__72462_72514;
var G__72520 = chunk__72463_72515;
var G__72521 = count__72464_72516;
var G__72522 = (i__72465_72517 + (1));
seq__72462_72514 = G__72519;
chunk__72463_72515 = G__72520;
count__72464_72516 = G__72521;
i__72465_72517 = G__72522;
continue;
} else {
var temp__5735__auto___72523 = cljs.core.seq(seq__72462_72514);
if(temp__5735__auto___72523){
var seq__72462_72524__$1 = temp__5735__auto___72523;
if(cljs.core.chunked_seq_QMARK_(seq__72462_72524__$1)){
var c__4556__auto___72525 = cljs.core.chunk_first(seq__72462_72524__$1);
var G__72526 = cljs.core.chunk_rest(seq__72462_72524__$1);
var G__72527 = c__4556__auto___72525;
var G__72528 = cljs.core.count(c__4556__auto___72525);
var G__72529 = (0);
seq__72462_72514 = G__72526;
chunk__72463_72515 = G__72527;
count__72464_72516 = G__72528;
i__72465_72517 = G__72529;
continue;
} else {
var c_72530 = cljs.core.first(seq__72462_72524__$1);
app.kaboom.patu.core.play(c_72530,new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547));


var G__72531 = cljs.core.next(seq__72462_72524__$1);
var G__72532 = null;
var G__72533 = (0);
var G__72534 = (0);
seq__72462_72514 = G__72531;
chunk__72463_72515 = G__72532;
count__72464_72516 = G__72533;
i__72465_72517 = G__72534;
continue;
}
} else {
}
}
break;
}

var seq__72466_72535 = cljs.core.seq(app.kaboom.patu.core.get_component(new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","orb","app.kaboom-examples.metro.scenes.one/orb",-184057516)));
var chunk__72467_72536 = null;
var count__72468_72537 = (0);
var i__72469_72538 = (0);
while(true){
if((i__72469_72538 < count__72468_72537)){
var c_72539 = chunk__72467_72536.cljs$core$IIndexed$_nth$arity$2(null,i__72469_72538);
app.kaboom.patu.core.play(c_72539,new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661));


var G__72540 = seq__72466_72535;
var G__72541 = chunk__72467_72536;
var G__72542 = count__72468_72537;
var G__72543 = (i__72469_72538 + (1));
seq__72466_72535 = G__72540;
chunk__72467_72536 = G__72541;
count__72468_72537 = G__72542;
i__72469_72538 = G__72543;
continue;
} else {
var temp__5735__auto___72544 = cljs.core.seq(seq__72466_72535);
if(temp__5735__auto___72544){
var seq__72466_72545__$1 = temp__5735__auto___72544;
if(cljs.core.chunked_seq_QMARK_(seq__72466_72545__$1)){
var c__4556__auto___72546 = cljs.core.chunk_first(seq__72466_72545__$1);
var G__72547 = cljs.core.chunk_rest(seq__72466_72545__$1);
var G__72548 = c__4556__auto___72546;
var G__72549 = cljs.core.count(c__4556__auto___72546);
var G__72550 = (0);
seq__72466_72535 = G__72547;
chunk__72467_72536 = G__72548;
count__72468_72537 = G__72549;
i__72469_72538 = G__72550;
continue;
} else {
var c_72551 = cljs.core.first(seq__72466_72545__$1);
app.kaboom.patu.core.play(c_72551,new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661));


var G__72552 = cljs.core.next(seq__72466_72545__$1);
var G__72553 = null;
var G__72554 = (0);
var G__72555 = (0);
seq__72466_72535 = G__72552;
chunk__72467_72536 = G__72553;
count__72468_72537 = G__72554;
i__72469_72538 = G__72555;
continue;
}
} else {
}
}
break;
}

var seq__72470_72556 = cljs.core.seq(app.kaboom.patu.core.get_component(new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781)));
var chunk__72471_72557 = null;
var count__72472_72558 = (0);
var i__72473_72559 = (0);
while(true){
if((i__72473_72559 < count__72472_72558)){
var c_72560 = chunk__72471_72557.cljs$core$IIndexed$_nth$arity$2(null,i__72473_72559);
app.kaboom.patu.core.play(c_72560,new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956));


var G__72561 = seq__72470_72556;
var G__72562 = chunk__72471_72557;
var G__72563 = count__72472_72558;
var G__72564 = (i__72473_72559 + (1));
seq__72470_72556 = G__72561;
chunk__72471_72557 = G__72562;
count__72472_72558 = G__72563;
i__72473_72559 = G__72564;
continue;
} else {
var temp__5735__auto___72565 = cljs.core.seq(seq__72470_72556);
if(temp__5735__auto___72565){
var seq__72470_72566__$1 = temp__5735__auto___72565;
if(cljs.core.chunked_seq_QMARK_(seq__72470_72566__$1)){
var c__4556__auto___72567 = cljs.core.chunk_first(seq__72470_72566__$1);
var G__72568 = cljs.core.chunk_rest(seq__72470_72566__$1);
var G__72569 = c__4556__auto___72567;
var G__72570 = cljs.core.count(c__4556__auto___72567);
var G__72571 = (0);
seq__72470_72556 = G__72568;
chunk__72471_72557 = G__72569;
count__72472_72558 = G__72570;
i__72473_72559 = G__72571;
continue;
} else {
var c_72572 = cljs.core.first(seq__72470_72566__$1);
app.kaboom.patu.core.play(c_72572,new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956));


var G__72573 = cljs.core.next(seq__72470_72566__$1);
var G__72574 = null;
var G__72575 = (0);
var G__72576 = (0);
seq__72470_72556 = G__72573;
chunk__72471_72557 = G__72574;
count__72472_72558 = G__72575;
i__72473_72559 = G__72576;
continue;
}
} else {
}
}
break;
}

var seq__72474_72577 = cljs.core.seq(app.kaboom.patu.core.get_component(new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","coin","app.kaboom-examples.metro.scenes.one/coin",-354897471)));
var chunk__72475_72578 = null;
var count__72476_72579 = (0);
var i__72477_72580 = (0);
while(true){
if((i__72477_72580 < count__72476_72579)){
var c_72581 = chunk__72475_72578.cljs$core$IIndexed$_nth$arity$2(null,i__72477_72580);
app.kaboom.patu.core.play(c_72581,new cljs.core.Keyword(null,"coin","coin",-227557189));


var G__72582 = seq__72474_72577;
var G__72583 = chunk__72475_72578;
var G__72584 = count__72476_72579;
var G__72585 = (i__72477_72580 + (1));
seq__72474_72577 = G__72582;
chunk__72475_72578 = G__72583;
count__72476_72579 = G__72584;
i__72477_72580 = G__72585;
continue;
} else {
var temp__5735__auto___72586 = cljs.core.seq(seq__72474_72577);
if(temp__5735__auto___72586){
var seq__72474_72587__$1 = temp__5735__auto___72586;
if(cljs.core.chunked_seq_QMARK_(seq__72474_72587__$1)){
var c__4556__auto___72588 = cljs.core.chunk_first(seq__72474_72587__$1);
var G__72589 = cljs.core.chunk_rest(seq__72474_72587__$1);
var G__72590 = c__4556__auto___72588;
var G__72591 = cljs.core.count(c__4556__auto___72588);
var G__72592 = (0);
seq__72474_72577 = G__72589;
chunk__72475_72578 = G__72590;
count__72476_72579 = G__72591;
i__72477_72580 = G__72592;
continue;
} else {
var c_72593 = cljs.core.first(seq__72474_72587__$1);
app.kaboom.patu.core.play(c_72593,new cljs.core.Keyword(null,"coin","coin",-227557189));


var G__72594 = cljs.core.next(seq__72474_72587__$1);
var G__72595 = null;
var G__72596 = (0);
var G__72597 = (0);
seq__72474_72577 = G__72594;
chunk__72475_72578 = G__72595;
count__72476_72579 = G__72596;
i__72477_72580 = G__72597;
continue;
}
} else {
}
}
break;
}

app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));

app.kaboom.patu.core.play(new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.Keyword("door","closed","door/closed",-922893745));

app.kaboom.patu.core.play(new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852),new cljs.core.Keyword(null,"pendulum","pendulum",1567229024));

return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","lever","app.kaboom-examples.metro.scenes.one/lever",-1155996586)], null),(function (p1__72445_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","process-lever","player/process-lever",356409486),player,p1__72445_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","lever","app.kaboom-examples.metro.scenes.one/lever",-1155996586),(function (lever){
if(cljs.core.truth_(lever.open)){
if(app.kaboom.patu.components.cur_anim_QMARK_(door,new cljs.core.Keyword(null,"door-open","door-open",2143389771))){
return null;
} else {
return app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(door,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"door-open","door-open",2143389771),new cljs.core.Keyword(null,"door-open","door-open",2143389771),(1300),0.3], null)], null));
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"z","z",-789527183),(function (){
return app.kaboom_examples.metro.scenes.one.attack(new cljs.core.Keyword(null,"player","player",-97687400));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"x","x",2099068185),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","zoom","player/zoom",1347399137),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","jump","player/jump",-1704693090),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","idle","player/idle",1163055716),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
if((player.pos.y > (520))){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),(0));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781),(function (worm){
if(((app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
return null;
} else {
if(app.kaboom.patu.components.close_QMARK_(worm,app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)))){
return null;
} else {
return worm.move((worm.dir * (5)),(0));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781),(function (worm){
var player_72598__$1 = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
if(((app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
} else {
app.kaboom_examples.metro.scenes.one.follow_target(worm,player_72598__$1);
}

return worm.move((worm.dir * (50)),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","slime","app.kaboom-examples.metro.scenes.one/slime",1942708887),(function (worm){
var player__$1 = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
return app.kaboom_examples.metro.scenes.one.follow_target(worm,player__$1);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781)], null),(function (worm){
if(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))){
app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(worm,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(300),0.3], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(100),0.2], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(100),0.1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),(250),0.5], null)], null));

(score.value = ((5) + score.value));

return (score.text = score.value);
} else {
if(((app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.kaboom.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
return null;
} else {
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","slime","app.kaboom-examples.metro.scenes.one/slime",1942708887)], null),(function (slime){
if(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))){
app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(slime,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),(600)], null)], null));

(score.value = ((25) + score.value));

return (score.text = score.value);
} else {
if(app.kaboom.patu.components.cur_anim_QMARK_(slime,new cljs.core.Keyword(null,"explosion","explosion",-1564989537))){
return null;
} else {
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","coin","app.kaboom-examples.metro.scenes.one/coin",-354897471)], null),(function (coin){
(score.value = (score.value + (1)));

(score.text = score.value);

return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(coin,new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),(300));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","orb","app.kaboom-examples.metro.scenes.one/orb",-184057516)], null),(function (orb){
(score.value = ((1000) + score.value));

(score.text = score.value);

return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(orb,new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),(400));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),(10),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","spawn-birds","game/spawn-birds",363202744)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","bird","app.kaboom-examples.metro.scenes.one/bird",-1108925395),(function (bird){
bird.move((100),(0));

if((bird.pos.x > (680))){
app.kaboom.patu.core.destroy(bird);
} else {
}

if(app.kaboom.patu.components.cur_anim_QMARK_(bird,new cljs.core.Keyword(null,"flying","flying",-1854780019))){
return null;
} else {
return app.kaboom.patu.core.play(bird,new cljs.core.Keyword(null,"flying","flying",-1854780019));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),(2),(function (worm){
var worms = app.kaboom.patu.core.get_component(new cljs.core.Keyword("app.kaboom-examples.metro.scenes.one","worm","app.kaboom-examples.metro.scenes.one/worm",481515781));
var seq__72478 = cljs.core.seq(worms);
var chunk__72479 = null;
var count__72480 = (0);
var i__72481 = (0);
while(true){
if((i__72481 < count__72480)){
var worm__$1 = chunk__72479.cljs$core$IIndexed$_nth$arity$2(null,i__72481);
(worm__$1.dir = ((-1) * worm__$1.dir));


var G__72599 = seq__72478;
var G__72600 = chunk__72479;
var G__72601 = count__72480;
var G__72602 = (i__72481 + (1));
seq__72478 = G__72599;
chunk__72479 = G__72600;
count__72480 = G__72601;
i__72481 = G__72602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72478);
if(temp__5735__auto__){
var seq__72478__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72478__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72478__$1);
var G__72603 = cljs.core.chunk_rest(seq__72478__$1);
var G__72604 = c__4556__auto__;
var G__72605 = cljs.core.count(c__4556__auto__);
var G__72606 = (0);
seq__72478 = G__72603;
chunk__72479 = G__72604;
count__72480 = G__72605;
i__72481 = G__72606;
continue;
} else {
var worm__$1 = cljs.core.first(seq__72478__$1);
(worm__$1.dir = ((-1) * worm__$1.dir));


var G__72607 = cljs.core.next(seq__72478__$1);
var G__72608 = null;
var G__72609 = (0);
var G__72610 = (0);
seq__72478 = G__72607;
chunk__72479 = G__72608;
count__72480 = G__72609;
i__72481 = G__72610;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null);
});

//# sourceMappingURL=app.kaboom_examples.metro.scenes.one.js.map
