goog.provide('app.kaboomv5.example');
goog.require('cljs.core');
goog.require('app.kaboomv5.app.core');
goog.require('app.kaboomv5.game.core');
goog.require('app.kaboomv5.assets');
goog.require('app.kaboomv5.math.core');
app.kaboomv5.example.config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null);
app.kaboomv5.game.core.init_BANG_(app.kaboomv5.example.config);
app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$1("https://kaboomjs.com/pub/examples/");
app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sprite","bg","sprite/bg",-1123340110),"img/bg.png");
app.kaboomv5.assets.load_sound(new cljs.core.Keyword("sound","score","sound/score",-2007017437),"sounds/score.mp3");
app.kaboomv5.example.main_handler = (function app$kaboomv5$example$main_handler(){
app.kaboomv5.game.core.key_press(new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return console.log("DOWN PRESSED");
}));

app.kaboomv5.game.core.key_press(new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return console.log("UP PRESSED");
}));

app.kaboomv5.game.core.key_press(new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return console.log("LEFT PRESSED");
}));

app.kaboomv5.game.core.key_press(new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return console.log("RIGHT PRESSED");
}));

app.kaboomv5.game.core.mouse_click((function (){
return console.log("CLICKED");
}));

return app.kaboomv5.game.core.mouse_down((function (){
return console.log("MOUSE DOWN");
}));
});
app.kaboomv5.game.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),app.kaboomv5.example.main_handler);
app.kaboomv5.game.core.reg_scene(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),(function (gs){
app.kaboomv5.game.core.action((function (){
return console.log("F");
}));

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937))){
console.log("LOSE LEFT PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"s","s",1705939918))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833))){
console.log("LOSE Right PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"up","up",-269712113))){
console.log("LOSE Up PRESSED");
} else {
}

if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"down","down",1565245570))){
console.log("LOSE Down PRESSED");
} else {
}

if(app.kaboomv5.app.core.mouse_down_QMARK_()){
console.log("LOSE Mouse down");
} else {
}

if(app.kaboomv5.app.core.mouse_clicked_QMARK_()){
return console.log("LOSE Mouse clicked");
} else {
return null;
}
}));
app.kaboomv5.example.start = (function app$kaboomv5$example$start(){
return app.kaboomv5.game.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});
app.kaboomv5.example.app = (function app$kaboomv5$example$app(){
return app.kaboomv5.example.start();
});

//# sourceMappingURL=app.kaboomv5.example.js.map
