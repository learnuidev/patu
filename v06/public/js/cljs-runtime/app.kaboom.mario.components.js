goog.provide('app.kaboom.mario.components');
goog.require('cljs.core');
app.kaboom.mario.components.move = (function app$kaboom$mario$components$move(comp,p__61351){
var vec__61352 = p__61351;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61352,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61352,(1),null);
return comp.move(x,y);
});
app.kaboom.mario.components.jump = (function app$kaboom$mario$components$jump(comp,x){
return comp.jump(x);
});
app.kaboom.mario.components.on = (function app$kaboom$mario$components$on(comp,key,handler){
return comp.on(cljs.core.name(key),handler);
});
app.kaboom.mario.components.cis = (function app$kaboom$mario$components$cis(comp,tag){
return comp.is(cljs.core.name(tag));
});
app.kaboom.mario.components.action = (function app$kaboom$mario$components$action(comp,handler){
return comp.action(handler);
});

//# sourceMappingURL=app.kaboom.mario.components.js.map
