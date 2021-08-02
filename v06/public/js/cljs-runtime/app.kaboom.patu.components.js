goog.provide('app.kaboom.patu.components');
goog.require('cljs.core');
app.kaboom.patu.components.move_BANG_ = (function app$kaboom$patu$components$move_BANG_(comp,p__64175){
var vec__64176 = p__64175;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64176,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64176,(1),null);
return comp.move(x,y);
});
app.kaboom.patu.components.move = (function app$kaboom$patu$components$move(comp,p__64179){
var vec__64180 = p__64179;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64180,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64180,(1),null);
return comp.move(x,y);
});
app.kaboom.patu.components.jump_BANG_ = (function app$kaboom$patu$components$jump_BANG_(comp,x){
return comp.jump(x);
});
app.kaboom.patu.components.jump = (function app$kaboom$patu$components$jump(comp,x){
return comp.jump(x);
});
app.kaboom.patu.components.on = (function app$kaboom$patu$components$on(comp,key,handler){
return comp.on(cljs.core.name(key),handler);
});
app.kaboom.patu.components.cis = (function app$kaboom$patu$components$cis(comp,tag){
return comp.is(cljs.core.name(tag));
});
app.kaboom.patu.components.action = (function app$kaboom$patu$components$action(comp,handler){
return comp.action(handler);
});
app.kaboom.patu.components.scale_BANG_ = (function app$kaboom$patu$components$scale_BANG_(comp,val){
return (comp.scale = val);
});
app.kaboom.patu.components.flip_x = (function app$kaboom$patu$components$flip_x(comp,val){
return comp.flipX(val);
});
app.kaboom.patu.components.speed = (function app$kaboom$patu$components$speed(comp){
return comp.speed;
});
app.kaboom.patu.components.play = (function app$kaboom$patu$components$play(comp,id){
return comp.play(cljs.core.name(id));
});
app.kaboom.patu.components.grounded_QMARK_ = (function app$kaboom$patu$components$grounded_QMARK_(comp){
return comp.grounded();
});
app.kaboom.patu.components.cur_anim = (function app$kaboom$patu$components$cur_anim(comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(comp.curAnim());
});
app.kaboom.patu.components.cur_anim_QMARK_ = (function app$kaboom$patu$components$cur_anim_QMARK_(comp,anim){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.kaboom.patu.components.cur_anim(comp),anim);
});
app.kaboom.patu.components.close_QMARK_ = (function app$kaboom$patu$components$close_QMARK_(dis_a,dis_b){
return ((((100) > Math.abs((dis_a.pos.y - dis_b.pos.y)))) && (((100) > Math.abs((dis_a.pos.x - dis_b.pos.x)))));
});
app.kaboom.patu.components.ahead_QMARK_ = (function app$kaboom$patu$components$ahead_QMARK_(comp,target){
return (comp.pos.x > target.pos.x);
});
app.kaboom.patu.components.behind_QMARK_ = (function app$kaboom$patu$components$behind_QMARK_(comp,target){
return (comp.pos.x < target.pos.x);
});
app.kaboom.patu.components.top_QMARK_ = (function app$kaboom$patu$components$top_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});
app.kaboom.patu.components.bottom_QMARK_ = (function app$kaboom$patu$components$bottom_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});

//# sourceMappingURL=app.kaboom.patu.components.js.map
