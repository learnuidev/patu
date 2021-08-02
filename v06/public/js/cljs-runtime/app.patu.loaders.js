goog.provide('app.patu.loaders');
goog.require('cljs.core');
goog.require('app.patu.components');
goog.require('app.patu.utils');
goog.require('app.patu.lib');
goog.require('goog.object');
goog.require('app.patu.cam');
goog.require('app.patu.state');
app.patu.loaders.load_root = (function app$patu$loaders$load_root(var_args){
var G__26690 = arguments.length;
switch (G__26690) {
case 0:
return app.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$0 = (function (){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state));
return app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1(game);
}));

(app.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1 = (function (url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state));
return app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2(game,url);
}));

(app.patu.loaders.load_root.cljs$lang$maxFixedArity = 1);

app.patu.loaders.load_sprite = (function app$patu$loaders$load_sprite(var_args){
var G__26692 = arguments.length;
switch (G__26692) {
case 3:
return app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (title,url,opts){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state));
return app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4(game,title,url,opts);
}));

(app.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2 = (function (title,url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state));
return app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3(game,title,url);
}));

(app.patu.loaders.load_sprite.cljs$lang$maxFixedArity = 3);

app.patu.loaders.load_aseprite = (function app$patu$loaders$load_aseprite(title,url,url2){
return app.patu.lib.load_aseprite(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),title,url,url2);
});
app.patu.loaders.load_sound_BANG_ = (function app$patu$loaders$load_sound_BANG_(game,id,src){
return game.loadSound(cljs.core.name(id),src);
});
app.patu.loaders.load_sound = (function app$patu$loaders$load_sound(id,src){
return app.patu.loaders.load_sound_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,src);
});

//# sourceMappingURL=app.patu.loaders.js.map
