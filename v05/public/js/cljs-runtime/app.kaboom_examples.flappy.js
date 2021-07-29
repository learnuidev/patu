goog.provide('app.kaboom_examples.flappy');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.events');
app.kaboom_examples.flappy.pipe_open = (80);
app.kaboom_examples.flappy.pipe_min_height = (16);
app.kaboom_examples.flappy.jump_force = (320);
app.kaboom_examples.flappy.speed = (120);
app.kaboom_examples.flappy.ceiling = (-60);
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"scale","scale",-230427353),(2),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","bg","sprite/bg",-1123340110),"img/bg.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","birdy","sprite/birdy",1221874956),"img/birdy.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","pipe","sprite/pipe",-1057833404),"img/pipe.png");
app.kaboom.patu.loaders.load_sound(new cljs.core.Keyword("sound","score","sound/score",-2007017437),"sounds/score.mp3");
app.kaboom.patu.loaders.load_sound(new cljs.core.Keyword("sound","wooosh","sound/wooosh",748148696),"sounds/wooosh.mp3");
app.kaboom.patu.loaders.load_sound(new cljs.core.Keyword("sound","hit","sound/hit",1214586267),"sounds/hit.mp3");
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("game","spawn-pipes","game/spawn-pipes",-1803559056),(function (_,___$1){
var h1 = app.kaboom.patu.core.randd(app.kaboom_examples.flappy.pipe_min_height,(app.kaboom.patu.core.height() - ((app.kaboom_examples.flappy.pipe_min_height + app.kaboom_examples.flappy.pipe_open) + (10))));
return app.kaboom.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","add-n","component/add-n",-566334132),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","pipe","sprite/pipe",-1057833404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.core.width(),h1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","pipe","sprite/pipe",-1057833404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.patu.core.width(),((h1 + app.kaboom_examples.flappy.pipe_open) + (20))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"passed","passed",-28165278),false], null)], null)], null)], null));
}));
app.kaboom_examples.flappy.add_score = (function app$kaboom_examples$flappy$add_score(score){
(score.value = (score.value + (1)));

return (score.text = score.value);
});
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977),(function (_,p__31431){
var vec__31432 = p__31431;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(2),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(3),null);
var player = app.kaboom.patu.core.get_component(pid);
var score = app.kaboom.patu.core.get_component(sid);
pipe.move(((-1) * app.kaboom_examples.flappy.speed),(0));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pipe.passed,false)) && (((pipe.pos.x + pipe.width) <= player.pos.x)))){
(pipe.passed = true);

return app.kaboom_examples.flappy.add_score(score);
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","check-ffall","player/check-ffall",981969998),(function (_,p__31436){
var vec__31437 = p__31436;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31437,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31437,(1),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31437,(2),null);
var player = app.kaboom.patu.core.get_component(id);
if((player.pos.y > app.kaboom.patu.core.height())){
app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),score);
} else {
}

if((player.pos.y <= app.kaboom_examples.flappy.ceiling)){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),score);
} else {
return null;
}
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("scene","go","scene/go",-170727883),(function (_,p__31440){
var vec__31441 = p__31440;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(1),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(2),null);
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(sid,(function (){var or__4126__auto__ = score;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());
}));
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("comp","jump","comp/jump",-982251888),(function (_,p__31444){
var vec__31445 = p__31444;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31445,(0),null);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31445,(1),null);
var force = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31445,(2),null);
var player = app.kaboom.patu.core.get_component(cid);
app.kaboom.patu.components.jump_BANG_(player,force);

return app.kaboom.patu.audio.play(new cljs.core.Keyword("sound","wooosh","sound/wooosh",748148696));
}));
app.kaboom_examples.flappy.main_init = (function app$kaboom_examples$flappy$main_init(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","gravity","game/gravity",-1809937539),(1200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layer","bg","layer/bg",-108215762),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","bg","sprite/bg",-1123340110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(app.kaboom.patu.core.width() / (240)),(app.kaboom.patu.core.height() / (240))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword("sprite","birdy","sprite/birdy",1221874956)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(120),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jumpForce","jumpForce",1496881882),(320)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(160)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score","ui/score",-1963584856),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null)], null)], null);
});
app.kaboom_examples.flappy.main_action = (function app$kaboom_examples$flappy$main_action(){
var score = app.kaboom.patu.core.get_component(new cljs.core.Keyword("ui","score","ui/score",-1963584856));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","jump","comp/jump",-982251888),new cljs.core.Keyword(null,"player","player",-97687400),app.kaboom_examples.flappy.jump_force], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","loop","game/loop",-398720195),(1),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","spawn-pipes","game/spawn-pipes",-1803559056)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","check-ffall","player/check-ffall",981969998),new cljs.core.Keyword(null,"player","player",-97687400),score.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"pipe","pipe",336575849),(function (p1__31448_SHARP_){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977),p1__31448_SHARP_,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("ui","score","ui/score",-1963584856)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scene","go","scene/go",-170727883),new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),score.value], null));
})], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.flappy.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.flappy.main_action], null));
app.kaboom_examples.flappy.lose_init = (function app$kaboom_examples$flappy$lose_init(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
})], null)], null);
});
app.kaboom_examples.flappy.lose_action = (function app$kaboom_examples$flappy$lose_action(score){
var vec__31449 = app.kaboom.patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),score,(64)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Press space to restart",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,(y + (50))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null)], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.flappy.lose_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.flappy.lose_action], null));
app.kaboom_examples.flappy.app = (function app$kaboom_examples$flappy$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.kaboom_examples.flappy.js.map
