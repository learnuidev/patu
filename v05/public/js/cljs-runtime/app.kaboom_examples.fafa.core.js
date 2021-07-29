goog.provide('app.kaboom_examples.fafa.core');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom_examples.fafa.assets');
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"scale","scale",-230427353),(2),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),true,new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("assets/rpg16/");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tiles","tiles",178505240),"PokemonLike.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(40),new cljs.core.Keyword(null,"sliceY","sliceY",1476268871),(40)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"character","character",380652989),"CharacterAnimation/Idle/Untitled-0_0.png");
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","main","level/main",-1952281121),app.kaboom_examples.fafa.assets.level_handler);
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-left","player/move-left",890301222),(function (_,p__26635){
var vec__26636 = p__26635;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26636,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26636,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),(function (_,p__26639){
var vec__26640 = p__26639;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26640,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26640,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),(function (_,p__26643){
var vec__26644 = p__26643;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26644,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26644,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)).scale(player.speed));
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","move-down","player/move-down",-155233694),(function (_,p__26647){
var vec__26648 = p__26647;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(1),null);
return player.move(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)).scale(player.speed));
}));
app.kaboom_examples.fafa.core.main_init = (function app$kaboom_examples$fafa$core$main_init(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),app.kaboom_examples.fafa.assets.main_map,new cljs.core.Keyword("level","main","level/main",-1952281121)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"character","character",380652989)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(30),(90)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(55)], null)], null)], null)], null)], null)], null);
});
app.kaboom_examples.fafa.core.main_event = (function app$kaboom_examples$fafa$core$main_event(){
var player = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-left","player/move-left",890301222),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-right","player/move-right",-1614335694),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-up","player/move-up",-1098177226),player], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","move-down","player/move-down",-155233694),player], null));
})], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.fafa.core.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.fafa.core.main_event], null));
app.kaboom_examples.fafa.core.app = (function app$kaboom_examples$fafa$core$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.kaboom_examples.fafa.core.js.map
