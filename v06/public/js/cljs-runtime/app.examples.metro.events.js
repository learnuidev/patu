goog.provide('app.examples.metro.events');
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
app.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__32444){
var vec__32445 = p__32444;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32445,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32445,(1),null);
if(((20) < player.pos.x)){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((player.speed + (30))));
} else {
app.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","two","scene/two",753507521));
}

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
app.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__32452){
var vec__32453 = p__32452;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32453,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32453,(1),null);
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
app.patu.events.reg_event(new cljs.core.Keyword("player","jump","player/jump",-1704693090),(function (_,p__32457){
var vec__32458 = p__32457;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(1),null);
if(cljs.core.truth_(app.patu.components.grounded_QMARK_(player))){
return app.patu.components.jump_BANG_(player,(540));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","zoom","player/zoom",1347399137),(function (_,p__32465){
var vec__32466 = p__32465;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32466,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32466,(1),null);
var diff = (cljs.core.truth_(app.patu.events.key_down_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937)))?(-800):(400));
if(cljs.core.not(app.patu.components.grounded_QMARK_(player))){
player.move(app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((diff + player.speed)));

return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","boom","player/boom",-2049216393));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__32473){
var vec__32474 = p__32473;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32474,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32474,(1),null);
if(((cljs.core.not(app.patu.events.key_down_QMARK_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"x","x",2099068185)], null)))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword("player","attack","player/attack",718850429))))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) || ((!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"nod","nod",-328366087))))))){
return app.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","process-lever","player/process-lever",356409486),(function (_,p__32481){
var vec__32482 = p__32481;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482,(1),null);
var lever = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482,(2),null);
(lever.open = true);

return app.patu.core.change_sprite(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lever,new cljs.core.Keyword(null,"lever-right","lever-right",-1337139525)], null));
}));

//# sourceMappingURL=app.examples.metro.events.js.map
