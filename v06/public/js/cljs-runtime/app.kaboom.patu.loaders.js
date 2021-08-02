goog.provide('app.kaboom.patu.loaders');
goog.require('cljs.core');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.lib');
goog.require('goog.object');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.state');
app.kaboom.patu.loaders.load_root = (function app$kaboom$patu$loaders$load_root(var_args){
var G__64184 = arguments.length;
switch (G__64184) {
case 0:
return app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$0 = (function (){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state));
return app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1(game);
}));

(app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1 = (function (url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state));
return app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2(game,url);
}));

(app.kaboom.patu.loaders.load_root.cljs$lang$maxFixedArity = 1);

app.kaboom.patu.loaders.load_sprite = (function app$kaboom$patu$loaders$load_sprite(var_args){
var G__64186 = arguments.length;
switch (G__64186) {
case 3:
return app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (title,url,opts){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state));
return app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4(game,title,url,opts);
}));

(app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2 = (function (title,url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state));
return app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3(game,title,url);
}));

(app.kaboom.patu.loaders.load_sprite.cljs$lang$maxFixedArity = 3);

app.kaboom.patu.loaders.load_aseprite = (function app$kaboom$patu$loaders$load_aseprite(title,url,url2){
return app.kaboom.patu.lib.load_aseprite(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),title,url,url2);
});
app.kaboom.patu.loaders.load_sound_BANG_ = (function app$kaboom$patu$loaders$load_sound_BANG_(game,id,src){
return game.loadSound(cljs.core.name(id),src);
});
app.kaboom.patu.loaders.load_sound = (function app$kaboom$patu$loaders$load_sound(id,src){
return app.kaboom.patu.loaders.load_sound_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id,src);
});

//# sourceMappingURL=app.kaboom.patu.loaders.js.map
