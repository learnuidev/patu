goog.provide('app.kaboom_examples.level.events');
goog.require('cljs.core');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("camera","follow","camera/follow",1581914043),(function (_,p__59728){
var vec__59729 = p__59728;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(1),null);
return app.kaboom.patu.cam.follow(app.kaboom.patu.core.get_component(id));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","respawn","player/respawn",-2058470301),(function (_,p__59733){
var vec__59735 = p__59733;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59735,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59735,(1),null);
var player = app.kaboom.patu.core.get_component(id);
return app.kaboom.patu.core.respawn(player,(0));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","respawn?","player/respawn?",-892701299),(function (_,p__59738){
var vec__59741 = p__59738;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59741,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59741,(1),null);
var player = app.kaboom.patu.core.get_component(id);
if((player.pos.y > (320))){
return app.kaboom.patu.core.respawn(player,(0));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","super-jump","player/super-jump",1712703085),(function (_,p__59747){
var vec__59748 = p__59747;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(2),null);
var player = app.kaboom.patu.core.get_component(id);
return app.kaboom.patu.components.jump(player,(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.Keyword(null,"jumpForce","jumpForce",1496881882)) * (function (){var or__4126__auto__ = val;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (2);
}
})()));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","collect-coin","player/collect-coin",1291873415),(function (_,p__59755){
var vec__59756 = p__59755;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59756,(0),null);
var coin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59756,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59756,(2),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59756,(3),null);
var player = app.kaboom.patu.core.get_component(sid);
var score = app.kaboom.patu.core.get_component(sid);
app.kaboom.patu.core.destroy(coin);

app.kaboom.patu.audio.play(new cljs.core.Keyword("sound","coin","sound/coin",-337212978));

app.kaboom.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"value","value",305978217),(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)) + (1)));

return app.kaboom.patu.utils.js_set_BANG_(score,new cljs.core.Keyword(null,"text","text",-1790561697),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move","player/move",1290525770),(function (_,p__59759){
var vec__59760 = p__59759;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59760,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59760,(1),null);
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
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","idle","player/idle",1163055716),(function (_,p__59765){
var vec__59769 = p__59765;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59769,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59769,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
if(((cljs.core.not(app.kaboom.patu.core.key_is_down(new cljs.core.Keyword(null,"right","right",-452581833)))) && (cljs.core.not(app.kaboom.patu.core.key_is_down(new cljs.core.Keyword(null,"right","right",-452581833)))))){
return app.kaboom.patu.components.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__59773){
var vec__59778 = p__59773;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59778,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59778,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
app.kaboom.patu.components.flip_x(player,(-1));

return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.core.neg(app.kaboom.patu.components.speed(player)),(0)], null));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__59781){
var vec__59782 = p__59781;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59782,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59782,(1),null);
var player = app.kaboom.patu.core.get_component(pid);
app.kaboom.patu.components.flip_x(player,(1));

return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.components.speed(player),(0)], null));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("scene","go","scene/go",-170727883),(function (_,p__59785){
var vec__59786 = p__59785;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59786,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59786,(1),null);
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(sid);
}));

//# sourceMappingURL=app.kaboom_examples.level.events.js.map
