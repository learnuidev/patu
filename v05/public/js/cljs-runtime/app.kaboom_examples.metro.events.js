goog.provide('app.kaboom_examples.metro.events');
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
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__68638){
var vec__68639 = p__68638;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68639,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68639,(1),null);
if(((20) < player.pos.x)){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale((player.speed + (30))));
} else {
app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","two","scene/two",753507521));
}

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
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__68642){
var vec__68643 = p__68642;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68643,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68643,(1),null);
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
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","jump","player/jump",-1704693090),(function (_,p__68646){
var vec__68647 = p__68646;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68647,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68647,(1),null);
if(cljs.core.truth_(app.kaboom.patu.components.grounded_QMARK_(player))){
return app.kaboom.patu.components.jump_BANG_(player,(540));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","zoom","player/zoom",1347399137),(function (_,p__68650){
var vec__68651 = p__68650;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68651,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68651,(1),null);
var diff = (cljs.core.truth_(app.kaboom.patu.events.key_is_down(new cljs.core.Keyword(null,"left","left",-399115937)))?(-800):(400));
if(cljs.core.not(app.kaboom.patu.components.grounded_QMARK_(player))){
player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale((diff + player.speed)));

return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","boom","player/boom",-2049216393));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__68658){
var vec__68659 = p__68658;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(1),null);
if(((cljs.core.not(app.kaboom.patu.events.key_is_down(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"x","x",2099068185)], null)))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword("player","attack","player/attack",718850429))))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"run","run",-1821166653))))) || ((!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"nod","nod",-328366087))))))){
return app.kaboom.patu.core.play(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("player","nod","player/nod",565110042));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","process-lever","player/process-lever",356409486),(function (_,p__68662){
var vec__68664 = p__68662;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68664,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68664,(1),null);
var lever = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68664,(2),null);
(lever.open = true);

return app.kaboom.patu.core.change_sprite(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lever,new cljs.core.Keyword(null,"lever-right","lever-right",-1337139525)], null));
}));

//# sourceMappingURL=app.kaboom_examples.metro.events.js.map
