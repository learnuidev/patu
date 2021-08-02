goog.provide('app.patu.components');
goog.require('cljs.core');
app.patu.components.move_BANG_ = (function app$patu$components$move_BANG_(comp,p__26619){
var vec__26620 = p__26619;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(1),null);
return comp.move(x,y);
});
app.patu.components.move = (function app$patu$components$move(comp,p__26623){
var vec__26624 = p__26623;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
return comp.move(x,y);
});
app.patu.components.jump_BANG_ = (function app$patu$components$jump_BANG_(comp,x){
return comp.jump(x);
});
app.patu.components.jump = (function app$patu$components$jump(comp,x){
return comp.jump(x);
});
app.patu.components.on = (function app$patu$components$on(comp,key,handler){
return comp.on(cljs.core.name(key),handler);
});
app.patu.components.cis = (function app$patu$components$cis(comp,tag){
return comp.is(cljs.core.name(tag));
});
app.patu.components.action = (function app$patu$components$action(comp,handler){
return comp.action(handler);
});
app.patu.components.scale_BANG_ = (function app$patu$components$scale_BANG_(comp,val){
return (comp.scale = val);
});
app.patu.components.flip_x = (function app$patu$components$flip_x(comp,val){
return comp.flipX(val);
});
app.patu.components.speed = (function app$patu$components$speed(comp){
return comp.speed;
});
app.patu.components.play = (function app$patu$components$play(comp,id){
return comp.play(cljs.core.name(id));
});
app.patu.components.grounded_QMARK_ = (function app$patu$components$grounded_QMARK_(comp){
return comp.grounded();
});
app.patu.components.cur_anim = (function app$patu$components$cur_anim(comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(comp.curAnim());
});
app.patu.components.cur_anim_QMARK_ = (function app$patu$components$cur_anim_QMARK_(comp,anim){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.patu.components.cur_anim(comp),anim);
});
app.patu.components.close_QMARK_ = (function app$patu$components$close_QMARK_(dis_a,dis_b){
return ((((100) > Math.abs((dis_a.pos.y - dis_b.pos.y)))) && (((100) > Math.abs((dis_a.pos.x - dis_b.pos.x)))));
});
app.patu.components.ahead_QMARK_ = (function app$patu$components$ahead_QMARK_(comp,target){
return (comp.pos.x > target.pos.x);
});
app.patu.components.behind_QMARK_ = (function app$patu$components$behind_QMARK_(comp,target){
return (comp.pos.x < target.pos.x);
});
app.patu.components.top_QMARK_ = (function app$patu$components$top_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});
app.patu.components.bottom_QMARK_ = (function app$patu$components$bottom_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});

//# sourceMappingURL=app.patu.components.js.map
