goog.provide('app.examples.level.events');
goog.require('cljs.core');
goog.require('app.patu.utils');
goog.require('app.patu.core');
goog.require('app.patu.events');
goog.require('app.patu.cam');
goog.require('app.patu.audio');
goog.require('app.patu.components');
app.patu.events.reg_event(new cljs.core.Keyword("camera","follow","camera/follow",1581914043),(function (_,p__28748){
var vec__28749 = p__28748;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28749,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28749,(1),null);
return app.patu.cam.follow(app.patu.core.get_component(id));
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","respawn","player/respawn",-2058470301),(function (_,p__28753){
var vec__28754 = p__28753;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28754,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28754,(1),null);
var player = app.patu.core.get_component(id);
return app.patu.core.respawn(player,(0));
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","respawn?","player/respawn?",-892701299),(function (_,p__28757){
var vec__28758 = p__28757;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(1),null);
var player = app.patu.core.get_component(id);
if((player.pos.y > (320))){
return app.patu.core.respawn(player,(0));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","super-jump","player/super-jump",1712703085),(function (_,p__28764){
var vec__28766 = p__28764;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(2),null);
var player = app.patu.core.get_component(id);
return app.patu.components.jump(player,(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.Keyword(null,"jumpForce","jumpForce",1496881882)) * (function (){var or__4126__auto__ = val;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (2);
}
})()));
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","collect-coin","player/collect-coin",1291873415),(function (_,p__28774){
var vec__28775 = p__28774;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(0),null);
var coin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(2),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(3),null);
var player = app.patu.core.get_component(sid);
var score = app.patu.core.get_component(sid);
app.patu.core.destroy(coin);

app.patu.audio.play(new cljs.core.Keyword("sound","coin","sound/coin",-337212978));

app.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"value","value",305978217),(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)) + (1)));

return app.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"text","text",-1790561697),app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move","player/move",1290525770),(function (_,p__28778){
var vec__28779 = p__28778;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(1),null);
var player = app.patu.core.get_component(pid);
if(cljs.core.truth_((function (){var and__4115__auto__ = app.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (!(app.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"move","move",-2110884309))));
} else {
return and__4115__auto__;
}
})())){
return app.patu.components.play(player,new cljs.core.Keyword(null,"move","move",-2110884309));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__28782){
var vec__28783 = p__28782;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28783,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28783,(1),null);
var player = app.patu.core.get_component(pid);
if(((cljs.core.not(app.patu.core.key_down_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)))) && (cljs.core.not(app.patu.core.key_down_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833)))))){
return app.patu.components.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
} else {
return null;
}
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__28790){
var vec__28792 = p__28790;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(1),null);
var player = app.patu.core.get_component(pid);
app.patu.components.flip_x(player,(-1));

return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patu.core.neg(app.patu.components.speed(player)),(0)], null));
}));
app.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__28799){
var vec__28800 = p__28799;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(1),null);
var player = app.patu.core.get_component(pid);
app.patu.components.flip_x(player,(1));

return app.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patu.components.speed(player),(0)], null));
}));
app.patu.events.reg_event(new cljs.core.Keyword("scene","go","scene/go",-170727883),(function (_,p__28803){
var vec__28804 = p__28803;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(1),null);
return app.patu.core.go.cljs$core$IFn$_invoke$arity$1(sid);
}));

//# sourceMappingURL=app.examples.level.events.js.map
