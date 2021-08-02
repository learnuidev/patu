goog.provide('app.kaboomv1.core');
goog.require('cljs.core');
goog.require('app.kaboomv1.app');
goog.require('app.kaboomv1.assets');
goog.require('app.kaboomv1.gfx');
app.kaboomv1.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426),false], null);
app.kaboomv1.app.init_BANG_(app.kaboomv1.core.config);
app.kaboomv1.assets.load_root("assets/platformer/");
app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tiles","tiles",178505240),"Tilemap/monochrome_tilemap.png");
app.kaboomv1.core.def_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"logMax","logMax",-1856439427),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"crisp?","crisp?",-1375116321)],[false,(1),null,(640),null,false,document.body,(8),(480),false]);
app.kaboomv1.core.patu = (function app$kaboomv1$core$patu(var_args){
var G__29625 = arguments.length;
switch (G__29625) {
case 0:
return app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$1(app.kaboomv1.core.def_config);
}));

(app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return app.kaboomv1.app.run((function (){
if(app.kaboomv1.app.key_pressed_QMARK_(new cljs.core.Keyword(null,"left","left",-399115937))){
console.log("LEFT PRESSED");
} else {
}

if(app.kaboomv1.app.key_pressed_QMARK_(new cljs.core.Keyword(null,"right","right",-452581833))){
console.log("Right PRESSED");
} else {
}

if(app.kaboomv1.app.key_pressed_QMARK_(new cljs.core.Keyword(null,"up","up",-269712113))){
console.log("Up PRESSED");
} else {
}

if(app.kaboomv1.app.key_pressed_QMARK_(new cljs.core.Keyword(null,"down","down",1565245570))){
console.log("Down PRESSED");
} else {
}

return app.kaboomv1.gfx.sprite();
}));
}));

(app.kaboomv1.core.patu.cljs$lang$maxFixedArity = 1);

app.kaboomv1.core.app = (function app$kaboomv1$core$app(){
return app.kaboomv1.core.patu.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=app.kaboomv1.core.js.map
