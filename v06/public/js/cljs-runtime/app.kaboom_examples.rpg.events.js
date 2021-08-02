goog.provide('app.kaboom_examples.rpg.events');
goog.require('cljs.core');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("camera","follow","camera/follow",1581914043),(function (_,p__27323){
var vec__27324 = p__27323;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27324,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27324,(1),null);
return app.kaboom.patu.cam.follow(app.kaboom.patu.core.get_component(id));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","respawn","player/respawn",-2058470301),(function (_,p__27327){
var vec__27328 = p__27327;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(1),null);
var player = app.kaboom.patu.core.get_component(id);
return app.kaboom.patu.core.respawn(player,(0));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","respawn?","player/respawn?",-892701299),(function (_,p__27331){
var vec__27332 = p__27331;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27332,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27332,(1),null);
var player = app.kaboom.patu.core.get_component(id);
if((player.pos.y > (320))){
return app.kaboom.patu.core.respawn(player,(0));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","super-jump","player/super-jump",1712703085),(function (_,p__27335){
var vec__27336 = p__27335;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(2),null);
var player = app.kaboom.patu.core.get_component(id);
return app.kaboom.patu.components.jump(player,(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.Keyword(null,"jumpForce","jumpForce",1496881882)) * (function (){var or__4126__auto__ = val;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (2);
}
})()));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","collect-coin","player/collect-coin",1291873415),(function (_,p__27339){
var vec__27340 = p__27339;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27340,(0),null);
var coin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27340,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27340,(2),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27340,(3),null);
var player = app.kaboom.patu.core.get_component(sid);
var score = app.kaboom.patu.core.get_component(sid);
app.kaboom.patu.core.destroy(coin);

app.kaboom.patu.audio.play(new cljs.core.Keyword("sound","coin","sound/coin",-337212978));

app.kaboom.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"value","value",305978217),(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)) + (1)));

return app.kaboom.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"text","text",-1790561697),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move","player/move",1290525770),(function (_,p__27344){
var vec__27345 = p__27344;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if(cljs.core.truth_((function (){var and__4115__auto__ = app.kaboom.patu.components.grounded_QMARK_(player);
if(cljs.core.truth_(and__4115__auto__)){
return (!(app.kaboom.patu.components.cur_anim_QMARK_(player,new cljs.core.Keyword(null,"move","move",-2110884309))));
} else {
return and__4115__auto__;
}
})())){
return app.kaboom.patu.components.play(player,new cljs.core.Keyword(null,"move","move",-2110884309));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__27348){
var vec__27349 = p__27348;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27349,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27349,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if(((cljs.core.not(app.kaboom.patu.core.key_is_down(new cljs.core.Keyword(null,"right","right",-452581833)))) && (cljs.core.not(app.kaboom.patu.core.key_is_down(new cljs.core.Keyword(null,"right","right",-452581833)))))){
return app.kaboom.patu.components.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__27352){
var vec__27353 = p__27352;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
app.kaboom.patu.components.flip_x(player,(-1));

return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.core.neg(app.kaboom.patu.components.speed(player)),(0)], null));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__27356){
var vec__27357 = p__27356;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
app.kaboom.patu.components.flip_x(player,(1));

return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.components.speed(player),(0)], null));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("scene","go","scene/go",-170727883),(function (_,p__27360){
var vec__27361 = p__27360;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(1),null);
return app.kaboom.patu.core.go(sid);
}));

//# sourceMappingURL=app.kaboom_examples.rpg.events.js.map
