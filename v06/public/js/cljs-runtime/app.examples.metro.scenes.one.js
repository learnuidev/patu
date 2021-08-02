goog.provide('app.examples.metro.scenes.one');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.patu.core');
goog.require('app.patu.loaders');
goog.require('app.patu.cam');
goog.require('app.patu.audio');
goog.require('app.patu.components');
goog.require('app.patu.utils');
goog.require('app.patu.events');
goog.require('app.examples.metro.assets');
app.examples.metro.scenes.one.sleep = (function app$examples$metro$scenes$one$sleep(f,ms){
return setTimeout(f,ms);
});
/**
 * Triggers attack animation
 */
app.examples.metro.scenes.one.attack = (function app$examples$metro$scenes$one$attack(id){
var temp__5735__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if((!(app.patu.components.cur_anim_QMARK_(comp,new cljs.core.Keyword(null,"attack","attack",1957061788))))){
comp.changeSprite(cljs.core.name(new cljs.core.Keyword("character","attack","character/attack",-757487275)));

app.patu.core.play(id,new cljs.core.Keyword(null,"attack","attack",1957061788));

return app.examples.metro.scenes.one.sleep((function (){
return app.patu.core.change_sprite(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("character","tileset","character/tileset",-1801123115),new cljs.core.Keyword("player","nod","player/nod",565110042)], null));
}),(800));
} else {
return null;
}
} else {
return null;
}
});
Math.abs((-1));
app.examples.metro.scenes.one.follow_target = (function app$examples$metro$scenes$one$follow_target(obj,target){
if(app.patu.components.close_QMARK_(target,obj)){
if(app.patu.components.ahead_QMARK_(obj,target)){
return obj.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((100)));
} else {
return obj.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((100)));
}
} else {
return null;
}
});
app.patu.core.reg_level(new cljs.core.Keyword("level","main","level/main",-1952281121),app.examples.metro.assets.level_handler);
app.patu.core.reg_level(new cljs.core.Keyword("level","two","level/two",726343625),app.examples.metro.assets.level_two_handler);
app.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__32461){
var vec__32462 = p__32461;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32462,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32462,(1),null);
(player.dir = "left");

if(((20) < player.pos.x)){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));
} else {
app.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","two","scene/two",753507521));
}

player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));

app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)).flipX((-1));

if(cljs.core.truth_((function (){var and__4115__auto__ = app.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) && ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))))));
} else {
return and__4115__auto__;
}
})())){
return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","run","player/run",-1397634330));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__32469){
var vec__32470 = p__32469;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(1),null);
(player.dir = "right");

if(((650) > player.pos.x)){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale(player.speed));
} else {
}

app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)).flipX((1));

if(cljs.core.truth_((function (){var and__4115__auto__ = app.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) && ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))))));
} else {
return and__4115__auto__;
}
})())){
return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","run","player/run",-1397634330));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","jump","player/jump",-1704693090),(function (_,p__32477){
var vec__32478 = p__32477;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32478,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32478,(1),null);
if(cljs.core.truth_(app.patu.components.grounded_QMARK_(player))){
return app.patu.components.jump_BANG_(player,(540));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","zoom","player/zoom",1347399137),(function (_,p__32485){
var vec__32486 = p__32485;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32486,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32486,(1),null);
var diff = (cljs.core.truth_(app.patu.events.key_down_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937)))?(-800):(400));
if(cljs.core.not(app.patu.components.grounded_QMARK_(player))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player.dir,"left")){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((diff + player.speed)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player.dir,"right")){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((diff + player.speed)));
} else {
}

return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","boom","player/boom",-2049216393));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__32489){
var vec__32490 = p__32489;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(1),null);
if(((cljs.core.not(app.patu.events.key_down_QMARK_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"x","x",2099068185)], null)))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword("player","attack","player/attack",718850429))))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"nod","nod",-328366087))))))){
return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("game","spawn-birds","game/spawn-birds",363202744),(function (_,___$1){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bird","bird",-1252014845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(-100),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","bird","app.examples.metro.scenes.one/bird",-772001345)], null)], null));
}));
app.examples.metro.scenes.one.init = (function app$examples$metro$scenes$one$init(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),app.examples.metro.assets.main_map,new cljs.core.Keyword("level","main","level/main",-1952281121)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg0","bg0",-2022873376),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg0","bg0",-2022873376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.6], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg1","bg1",-2033818465),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg1","bg1",-2033818465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg2","bg2",-1429908206),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg2","bg2",-1429908206)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fg","fg",-101797208),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"fg0","fg0",1854659755)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.8], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("character","tileset","character/tileset",-1801123115)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(190),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1257663751),(125),new cljs.core.Keyword(null,"animSpeed","animSpeed",-784084678),0.25], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("door","closed","door/closed",-922893745)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(575),(320)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(155)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(-30),(75)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animSpeed","animSpeed",-784084678),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852)], null)], null)], null)], null)], null);
});
app.examples.metro.scenes.one.spawn_coin = (function app$examples$metro$scenes$one$spawn_coin(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"coin","coin",-227557189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","coin","app.examples.metro.scenes.one/coin",1314104335)], null)], null));
});
app.examples.metro.scenes.one.spawn_worm = (function app$examples$metro$scenes$one$spawn_worm(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),(1)], null)], null)], null));
});
app.examples.metro.scenes.one.spawn_slime = (function app$examples$metro$scenes$one$spawn_slime(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","slime","app.examples.metro.scenes.one/slime",1333687465)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null));
});
app.examples.metro.scenes.one.spawn_wooden_plate = (function app$examples$metro$scenes$one$spawn_wooden_plate(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"wooden-plate","wooden-plate",-1406744171)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","wooden-plate","app.examples.metro.scenes.one/wooden-plate",121279561)], null)], null));
});
app.examples.metro.scenes.one.spawn_flower_props = (function app$examples$metro$scenes$one$spawn_flower_props(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"flower-props","flower-props",131151738)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","flower-props","app.examples.metro.scenes.one/flower-props",736969286)], null)], null));
});
app.examples.metro.scenes.one.spawn_grass_props = (function app$examples$metro$scenes$one$spawn_grass_props(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"grass-props","grass-props",-944833944)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","grass-props","app.examples.metro.scenes.one/grass-props",-750047852)], null)], null));
});
app.examples.metro.scenes.one.spawn_lever = (function app$examples$metro$scenes$one$spawn_lever(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"lever-left","lever-left",226448857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","lever","app.examples.metro.scenes.one/lever",-1896614104)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null)], null));
});
app.examples.metro.scenes.one.spawn_orb = (function app$examples$metro$scenes$one$spawn_orb(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),2.4], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("app.examples.metro.scenes.one","orb","app.examples.metro.scenes.one/orb",1488095774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null)], null));
});
app.examples.metro.scenes.one.coin_positions = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(520),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(540),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(560),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(90)], null)], null);
app.examples.metro.scenes.one.anims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(2350)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),(350)], null)], null);
app.examples.metro.scenes.one.event = (function app$examples$metro$scenes$one$event(){
var player = app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
var score = app.patu.core.get_component(new cljs.core.Keyword(null,"score","score",-1963588780));
var door = app.patu.core.get_component(new cljs.core.Keyword(null,"door","door",-956406127));
var seq__32495_32610 = cljs.core.seq(app.examples.metro.scenes.one.coin_positions);
var chunk__32496_32611 = null;
var count__32497_32612 = (0);
var i__32498_32613 = (0);
while(true){
if((i__32498_32613 < count__32497_32612)){
var vec__32505_32614 = chunk__32496_32611.cljs$core$IIndexed$_nth$arity$2(null,i__32498_32613);
var x_32615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32505_32614,(0),null);
var y_32616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32505_32614,(1),null);
app.examples.metro.scenes.one.spawn_coin(x_32615,y_32616);


var G__32617 = seq__32495_32610;
var G__32618 = chunk__32496_32611;
var G__32619 = count__32497_32612;
var G__32620 = (i__32498_32613 + (1));
seq__32495_32610 = G__32617;
chunk__32496_32611 = G__32618;
count__32497_32612 = G__32619;
i__32498_32613 = G__32620;
continue;
} else {
var temp__5735__auto___32621 = cljs.core.seq(seq__32495_32610);
if(temp__5735__auto___32621){
var seq__32495_32622__$1 = temp__5735__auto___32621;
if(cljs.core.chunked_seq_QMARK_(seq__32495_32622__$1)){
var c__4556__auto___32623 = cljs.core.chunk_first(seq__32495_32622__$1);
var G__32624 = cljs.core.chunk_rest(seq__32495_32622__$1);
var G__32625 = c__4556__auto___32623;
var G__32626 = cljs.core.count(c__4556__auto___32623);
var G__32627 = (0);
seq__32495_32610 = G__32624;
chunk__32496_32611 = G__32625;
count__32497_32612 = G__32626;
i__32498_32613 = G__32627;
continue;
} else {
var vec__32508_32628 = cljs.core.first(seq__32495_32622__$1);
var x_32629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508_32628,(0),null);
var y_32630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508_32628,(1),null);
app.examples.metro.scenes.one.spawn_coin(x_32629,y_32630);


var G__32631 = cljs.core.next(seq__32495_32622__$1);
var G__32632 = null;
var G__32633 = (0);
var G__32634 = (0);
seq__32495_32610 = G__32631;
chunk__32496_32611 = G__32632;
count__32497_32612 = G__32633;
i__32498_32613 = G__32634;
continue;
}
} else {
}
}
break;
}

app.examples.metro.scenes.one.spawn_slime((550),(180));

app.examples.metro.scenes.one.spawn_lever((600),(160));

app.examples.metro.scenes.one.spawn_worm((320),(405));

app.examples.metro.scenes.one.spawn_slime((490),(370));

app.examples.metro.scenes.one.spawn_slime((450),(370));

app.examples.metro.scenes.one.spawn_slime((410),(370));

app.examples.metro.scenes.one.spawn_flower_props((380),(48));

app.examples.metro.scenes.one.spawn_grass_props((150),(272));

app.examples.metro.scenes.one.spawn_wooden_plate((530),(390));

app.examples.metro.scenes.one.spawn_orb((630),(360));

var seq__32511_32635 = cljs.core.seq(app.patu.core.get_component(new cljs.core.Keyword("app.examples.metro.scenes.one","slime","app.examples.metro.scenes.one/slime",1333687465)));
var chunk__32512_32636 = null;
var count__32513_32637 = (0);
var i__32514_32638 = (0);
while(true){
if((i__32514_32638 < count__32513_32637)){
var c_32639 = chunk__32512_32636.cljs$core$IIndexed$_nth$arity$2(null,i__32514_32638);
app.patu.core.play(c_32639,new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547));


var G__32640 = seq__32511_32635;
var G__32641 = chunk__32512_32636;
var G__32642 = count__32513_32637;
var G__32643 = (i__32514_32638 + (1));
seq__32511_32635 = G__32640;
chunk__32512_32636 = G__32641;
count__32513_32637 = G__32642;
i__32514_32638 = G__32643;
continue;
} else {
var temp__5735__auto___32644 = cljs.core.seq(seq__32511_32635);
if(temp__5735__auto___32644){
var seq__32511_32645__$1 = temp__5735__auto___32644;
if(cljs.core.chunked_seq_QMARK_(seq__32511_32645__$1)){
var c__4556__auto___32646 = cljs.core.chunk_first(seq__32511_32645__$1);
var G__32647 = cljs.core.chunk_rest(seq__32511_32645__$1);
var G__32648 = c__4556__auto___32646;
var G__32649 = cljs.core.count(c__4556__auto___32646);
var G__32650 = (0);
seq__32511_32635 = G__32647;
chunk__32512_32636 = G__32648;
count__32513_32637 = G__32649;
i__32514_32638 = G__32650;
continue;
} else {
var c_32651 = cljs.core.first(seq__32511_32645__$1);
app.patu.core.play(c_32651,new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547));


var G__32652 = cljs.core.next(seq__32511_32645__$1);
var G__32653 = null;
var G__32654 = (0);
var G__32655 = (0);
seq__32511_32635 = G__32652;
chunk__32512_32636 = G__32653;
count__32513_32637 = G__32654;
i__32514_32638 = G__32655;
continue;
}
} else {
}
}
break;
}

var seq__32515_32656 = cljs.core.seq(app.patu.core.get_component(new cljs.core.Keyword("app.examples.metro.scenes.one","orb","app.examples.metro.scenes.one/orb",1488095774)));
var chunk__32516_32657 = null;
var count__32517_32658 = (0);
var i__32518_32659 = (0);
while(true){
if((i__32518_32659 < count__32517_32658)){
var c_32660 = chunk__32516_32657.cljs$core$IIndexed$_nth$arity$2(null,i__32518_32659);
app.patu.core.play(c_32660,new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661));


var G__32661 = seq__32515_32656;
var G__32662 = chunk__32516_32657;
var G__32663 = count__32517_32658;
var G__32664 = (i__32518_32659 + (1));
seq__32515_32656 = G__32661;
chunk__32516_32657 = G__32662;
count__32517_32658 = G__32663;
i__32518_32659 = G__32664;
continue;
} else {
var temp__5735__auto___32665 = cljs.core.seq(seq__32515_32656);
if(temp__5735__auto___32665){
var seq__32515_32666__$1 = temp__5735__auto___32665;
if(cljs.core.chunked_seq_QMARK_(seq__32515_32666__$1)){
var c__4556__auto___32667 = cljs.core.chunk_first(seq__32515_32666__$1);
var G__32668 = cljs.core.chunk_rest(seq__32515_32666__$1);
var G__32669 = c__4556__auto___32667;
var G__32670 = cljs.core.count(c__4556__auto___32667);
var G__32671 = (0);
seq__32515_32656 = G__32668;
chunk__32516_32657 = G__32669;
count__32517_32658 = G__32670;
i__32518_32659 = G__32671;
continue;
} else {
var c_32672 = cljs.core.first(seq__32515_32666__$1);
app.patu.core.play(c_32672,new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661));


var G__32673 = cljs.core.next(seq__32515_32666__$1);
var G__32674 = null;
var G__32675 = (0);
var G__32676 = (0);
seq__32515_32656 = G__32673;
chunk__32516_32657 = G__32674;
count__32517_32658 = G__32675;
i__32518_32659 = G__32676;
continue;
}
} else {
}
}
break;
}

var seq__32531_32677 = cljs.core.seq(app.patu.core.get_component(new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001)));
var chunk__32532_32678 = null;
var count__32533_32679 = (0);
var i__32534_32680 = (0);
while(true){
if((i__32534_32680 < count__32533_32679)){
var c_32681 = chunk__32532_32678.cljs$core$IIndexed$_nth$arity$2(null,i__32534_32680);
app.patu.core.play(c_32681,new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956));


var G__32682 = seq__32531_32677;
var G__32683 = chunk__32532_32678;
var G__32684 = count__32533_32679;
var G__32685 = (i__32534_32680 + (1));
seq__32531_32677 = G__32682;
chunk__32532_32678 = G__32683;
count__32533_32679 = G__32684;
i__32534_32680 = G__32685;
continue;
} else {
var temp__5735__auto___32686 = cljs.core.seq(seq__32531_32677);
if(temp__5735__auto___32686){
var seq__32531_32687__$1 = temp__5735__auto___32686;
if(cljs.core.chunked_seq_QMARK_(seq__32531_32687__$1)){
var c__4556__auto___32688 = cljs.core.chunk_first(seq__32531_32687__$1);
var G__32689 = cljs.core.chunk_rest(seq__32531_32687__$1);
var G__32690 = c__4556__auto___32688;
var G__32691 = cljs.core.count(c__4556__auto___32688);
var G__32692 = (0);
seq__32531_32677 = G__32689;
chunk__32532_32678 = G__32690;
count__32533_32679 = G__32691;
i__32534_32680 = G__32692;
continue;
} else {
var c_32693 = cljs.core.first(seq__32531_32687__$1);
app.patu.core.play(c_32693,new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956));


var G__32694 = cljs.core.next(seq__32531_32687__$1);
var G__32695 = null;
var G__32696 = (0);
var G__32697 = (0);
seq__32531_32677 = G__32694;
chunk__32532_32678 = G__32695;
count__32533_32679 = G__32696;
i__32534_32680 = G__32697;
continue;
}
} else {
}
}
break;
}

var seq__32542_32698 = cljs.core.seq(app.patu.core.get_component(new cljs.core.Keyword("app.examples.metro.scenes.one","coin","app.examples.metro.scenes.one/coin",1314104335)));
var chunk__32543_32699 = null;
var count__32544_32700 = (0);
var i__32545_32701 = (0);
while(true){
if((i__32545_32701 < count__32544_32700)){
var c_32702 = chunk__32543_32699.cljs$core$IIndexed$_nth$arity$2(null,i__32545_32701);
app.patu.core.play(c_32702,new cljs.core.Keyword(null,"coin","coin",-227557189));


var G__32703 = seq__32542_32698;
var G__32704 = chunk__32543_32699;
var G__32705 = count__32544_32700;
var G__32706 = (i__32545_32701 + (1));
seq__32542_32698 = G__32703;
chunk__32543_32699 = G__32704;
count__32544_32700 = G__32705;
i__32545_32701 = G__32706;
continue;
} else {
var temp__5735__auto___32707 = cljs.core.seq(seq__32542_32698);
if(temp__5735__auto___32707){
var seq__32542_32708__$1 = temp__5735__auto___32707;
if(cljs.core.chunked_seq_QMARK_(seq__32542_32708__$1)){
var c__4556__auto___32709 = cljs.core.chunk_first(seq__32542_32708__$1);
var G__32710 = cljs.core.chunk_rest(seq__32542_32708__$1);
var G__32711 = c__4556__auto___32709;
var G__32712 = cljs.core.count(c__4556__auto___32709);
var G__32713 = (0);
seq__32542_32698 = G__32710;
chunk__32543_32699 = G__32711;
count__32544_32700 = G__32712;
i__32545_32701 = G__32713;
continue;
} else {
var c_32714 = cljs.core.first(seq__32542_32708__$1);
app.patu.core.play(c_32714,new cljs.core.Keyword(null,"coin","coin",-227557189));


var G__32715 = cljs.core.next(seq__32542_32708__$1);
var G__32716 = null;
var G__32717 = (0);
var G__32718 = (0);
seq__32542_32698 = G__32715;
chunk__32543_32699 = G__32716;
count__32544_32700 = G__32717;
i__32545_32701 = G__32718;
continue;
}
} else {
}
}
break;
}

app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));

app.patu.core.play(new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.Keyword("door","closed","door/closed",-922893745));

app.patu.core.play(new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852),new cljs.core.Keyword(null,"pendulum","pendulum",1567229024));

return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.examples.metro.scenes.one","lever","app.examples.metro.scenes.one/lever",-1896614104)], null),(function (p1__32494_SHARP_){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","process-lever","player/process-lever",356409486),player,p1__32494_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.examples.metro.scenes.one","lever","app.examples.metro.scenes.one/lever",-1896614104),(function (lever){
if(cljs.core.truth_(lever.open)){
if(app.patu.components.cur_anim_QMARK_(door,new cljs.core.Keyword(null,"door-open","door-open",2143389771))){
return null;
} else {
return app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(door,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"door-open","door-open",2143389771),new cljs.core.Keyword(null,"door-open","door-open",2143389771),(1300),0.3], null)], null));
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"z","z",-789527183),(function (){
return app.examples.metro.scenes.one.attack(new cljs.core.Keyword(null,"player","player",-97687400));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"x","x",2099068185),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","zoom","player/zoom",1347399137),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","jump","player/jump",-1704693090),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","idle","player/idle",1163055716),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
if((player.pos.y > (520))){
return app.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),(0));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001),(function (worm){
if(((app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
return null;
} else {
if(app.patu.components.close_QMARK_(worm,app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400)))){
return null;
} else {
return worm.move((worm.dir * (5)),(0));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001),(function (worm){
var player_32719__$1 = app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
if(((app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
} else {
app.examples.metro.scenes.one.follow_target(worm,player_32719__$1);
}

return worm.move((worm.dir * (50)),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.examples.metro.scenes.one","slime","app.examples.metro.scenes.one/slime",1333687465),(function (worm){
var player__$1 = app.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
return app.examples.metro.scenes.one.follow_target(worm,player__$1);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001)], null),(function (worm){
if(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))){
app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(worm,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(300),0.3], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(100),0.2], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),(100),0.1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),(250),0.5], null)], null));

(score.value = ((5) + score.value));

return (score.text = score.value);
} else {
if(((app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160))) || (app.patu.components.cur_anim_QMARK_(worm,new cljs.core.Keyword(null,"worm-death","worm-death",-26623233))))){
return null;
} else {
return app.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.examples.metro.scenes.one","slime","app.examples.metro.scenes.one/slime",1333687465)], null),(function (slime){
if(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"attack","attack",1957061788))){
app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2(slime,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),(600)], null)], null));

(score.value = ((25) + score.value));

return (score.text = score.value);
} else {
if(app.patu.components.cur_anim_QMARK_(slime,new cljs.core.Keyword(null,"explosion","explosion",-1564989537))){
return null;
} else {
return app.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.examples.metro.scenes.one","coin","app.examples.metro.scenes.one/coin",1314104335)], null),(function (coin){
(score.value = (score.value + (1)));

(score.text = score.value);

return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(coin,new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),(300));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("app.examples.metro.scenes.one","orb","app.examples.metro.scenes.one/orb",1488095774)], null),(function (orb){
(score.value = ((1000) + score.value));

(score.text = score.value);

return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(orb,new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),(400));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),(10),(function (){
return app.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","spawn-birds","game/spawn-birds",363202744)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword("app.examples.metro.scenes.one","bird","app.examples.metro.scenes.one/bird",-772001345),(function (bird){
bird.move((100),(0));

if((bird.pos.x > (680))){
app.patu.core.destroy(bird);
} else {
}

if(app.patu.components.cur_anim_QMARK_(bird,new cljs.core.Keyword(null,"flying","flying",-1854780019))){
return null;
} else {
return app.patu.core.play(bird,new cljs.core.Keyword(null,"flying","flying",-1854780019));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),(2),(function (worm){
var worms = app.patu.core.get_component(new cljs.core.Keyword("app.examples.metro.scenes.one","worm","app.examples.metro.scenes.one/worm",-1043445001));
var seq__32573 = cljs.core.seq(worms);
var chunk__32574 = null;
var count__32575 = (0);
var i__32576 = (0);
while(true){
if((i__32576 < count__32575)){
var worm__$1 = chunk__32574.cljs$core$IIndexed$_nth$arity$2(null,i__32576);
(worm__$1.dir = ((-1) * worm__$1.dir));


var G__32720 = seq__32573;
var G__32721 = chunk__32574;
var G__32722 = count__32575;
var G__32723 = (i__32576 + (1));
seq__32573 = G__32720;
chunk__32574 = G__32721;
count__32575 = G__32722;
i__32576 = G__32723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32573);
if(temp__5735__auto__){
var seq__32573__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32573__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32573__$1);
var G__32724 = cljs.core.chunk_rest(seq__32573__$1);
var G__32725 = c__4556__auto__;
var G__32726 = cljs.core.count(c__4556__auto__);
var G__32727 = (0);
seq__32573 = G__32724;
chunk__32574 = G__32725;
count__32575 = G__32726;
i__32576 = G__32727;
continue;
} else {
var worm__$1 = cljs.core.first(seq__32573__$1);
(worm__$1.dir = ((-1) * worm__$1.dir));


var G__32728 = cljs.core.next(seq__32573__$1);
var G__32729 = null;
var G__32730 = (0);
var G__32731 = (0);
seq__32573 = G__32728;
chunk__32574 = G__32729;
count__32575 = G__32730;
i__32576 = G__32731;
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

//# sourceMappingURL=app.examples.metro.scenes.one.js.map
