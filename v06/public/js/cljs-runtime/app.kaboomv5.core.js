goog.provide('app.kaboomv5.core');
goog.require('cljs.core');
goog.require('app.kaboomv5.app.core');
goog.require('app.kaboomv5.app.state');
goog.require('app.kaboomv5.assets');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.audio');
goog.require('app.kaboomv5.gfx');
app.kaboomv5.core.config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274),(app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$0 ? app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$0() : app.kaboomv5.math.core.color.call(null))], null);
app.kaboomv5.core.init_BANG_ = (function app$kaboomv5$core$init_BANG_(config){
app.kaboomv5.app.core.init_BANG_(config);

app.kaboomv5.gfx.init_BANG_();

return app.kaboomv5.audio.init_BANG_();
});
app.kaboomv5.core.play = (function app$kaboomv5$core$play(var_args){
var G__26711 = arguments.length;
switch (G__26711) {
case 1:
return app.kaboomv5.core.play.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.core.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.core.play.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.kaboomv5.core.play.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"volume","volume",1900330799),(1),new cljs.core.Keyword(null,"speed","speed",1257663751),(1),new cljs.core.Keyword(null,"detune","detune",316572245),(0),new cljs.core.Keyword(null,"seek","seek",758996602),(0)], null));
}));

(app.kaboomv5.core.play.cljs$core$IFn$_invoke$arity$2 = (function (id,config){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",1244211385),id], null));
if(cljs.core.truth_(temp__5733__auto__)){
var sound = temp__5733__auto__;
return app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$2(sound,config);
} else {
return null;
}
}));

(app.kaboomv5.core.play.cljs$lang$maxFixedArity = 2);

app.kaboomv5.core.start = (function app$kaboomv5$core$start(f){
return app.kaboomv5.app.core.run((function (){
if(cljs.core.not(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)))){
return console.warn("Please run the kaboom/init! function first. You need to create a new webgl context first");
} else {
var id = new cljs.core.Keyword("program","id","program/id",-792212528).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
app.kaboomv5.gfx.frame_start(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return app.kaboomv5.gfx.frame_end(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),id);
}
}));
});
app.kaboomv5.core.init_BANG_(app.kaboomv5.core.config);
app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","bg","sprite/bg",-1123340110),"img/bg.png");
app.kaboomv5.assets.load_sound(new cljs.core.Keyword("sound","score","sound/score",-2007017437),"sounds/score.mp3");
app.kaboomv5.core.def_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"logMax","logMax",-1856439427),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"crisp?","crisp?",-1375116321)],[false,(1),null,(640),null,false,document.body,(8),(480),false]);
app.kaboomv5.core.patu = (function app$kaboomv5$core$patu(){
return app.kaboomv5.core.start((function (){
if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937))){
console.log("LEFT PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833))){
console.log("Right PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"up","up",-269712113))){
console.log("Up PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"down","down",1565245570))){
console.log("Down PRESSED");
} else {
}

if(app.kaboomv5.app.core.mouse_down_QMARK_()){
console.log("Mouse down");
} else {
}

if(app.kaboomv5.app.core.mouse_clicked_QMARK_()){
return console.log("Mouse clicked");
} else {
return null;
}
}));
});
app.kaboomv5.core.app = (function app$kaboomv5$core$app(){
return app.kaboomv5.core.patu();
});

//# sourceMappingURL=app.kaboomv5.core.js.map
