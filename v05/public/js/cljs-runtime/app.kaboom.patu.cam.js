goog.provide('app.kaboom.patu.cam');
goog.require('cljs.core');
goog.require('app.kaboom.patu.lib');
goog.require('app.kaboom.patu.state');
app.kaboom.patu.cam.follow = (function app$kaboom$patu$cam$follow(comp){
return app.kaboom.patu.lib.follow_comp(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),comp);
});
app.kaboom.patu.cam.cam_pos = (function app$kaboom$patu$cam$cam_pos(var_args){
var G__45387 = arguments.length;
switch (G__45387) {
case 0:
return app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)));
}));

(app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),pos);
}));

(app.kaboom.patu.cam.cam_pos.cljs$lang$maxFixedArity = 1);

app.kaboom.patu.cam.cam_scale = (function app$kaboom$patu$cam$cam_scale(var_args){
var G__45390 = arguments.length;
switch (G__45390) {
case 0:
return app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)));
}));

(app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),pos);
}));

(app.kaboom.patu.cam.cam_scale.cljs$lang$maxFixedArity = 1);

app.kaboom.patu.cam.zoom_out = (function app$kaboom$patu$cam$zoom_out(var_args){
var G__45392 = arguments.length;
switch (G__45392) {
case 0:
return app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1(0.5);
}));

(app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1 = (function (minz){
var val = app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0().sub(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),app.kaboom.patu.lib.dt(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)))));
console.log(val);

return app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1(val);
}));

(app.kaboom.patu.cam.zoom_out.cljs$lang$maxFixedArity = 1);

app.kaboom.patu.cam.zoom_in = (function app$kaboom$patu$cam$zoom_in(var_args){
var G__45396 = arguments.length;
switch (G__45396) {
case 0:
return app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1((3));
}));

(app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1 = (function (maxz){
var val = app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0().add(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),app.kaboom.patu.lib.dt(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)))));
if((val.x < maxz)){
return app.kaboom.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1(val);
} else {
return null;
}
}));

(app.kaboom.patu.cam.zoom_in.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.kaboom.patu.cam.js.map
