goog.provide('app.patu.cam');
goog.require('cljs.core');
goog.require('app.patu.lib');
goog.require('app.patu.state');
app.patu.cam.follow = (function app$patu$cam$follow(comp){
return app.patu.lib.follow_comp(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),comp);
});
app.patu.cam.cam_pos = (function app$patu$cam$cam_pos(var_args){
var G__28182 = arguments.length;
switch (G__28182) {
case 0:
return app.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)));
}));

(app.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),pos);
}));

(app.patu.cam.cam_pos.cljs$lang$maxFixedArity = 1);

app.patu.cam.cam_scale = (function app$patu$cam$cam_scale(var_args){
var G__28184 = arguments.length;
switch (G__28184) {
case 0:
return app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)));
}));

(app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),pos);
}));

(app.patu.cam.cam_scale.cljs$lang$maxFixedArity = 1);

app.patu.cam.zoom_out = (function app$patu$cam$zoom_out(var_args){
var G__28186 = arguments.length;
switch (G__28186) {
case 0:
return app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1(0.5);
}));

(app.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$1 = (function (minz){
var val = app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0().sub(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),app.patu.lib.dt(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)))));
console.log(val);

return app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1(val);
}));

(app.patu.cam.zoom_out.cljs$lang$maxFixedArity = 1);

app.patu.cam.zoom_in = (function app$patu$cam$zoom_in(var_args){
var G__28190 = arguments.length;
switch (G__28190) {
case 0:
return app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1((3));
}));

(app.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$1 = (function (maxz){
var val = app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$0().add(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),app.patu.lib.dt(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)))));
if((val.x < maxz)){
return app.patu.cam.cam_scale.cljs$core$IFn$_invoke$arity$1(val);
} else {
return null;
}
}));

(app.patu.cam.zoom_in.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.patu.cam.js.map
