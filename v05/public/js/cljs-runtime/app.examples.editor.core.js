goog.provide('app.examples.editor.core');
goog.require('cljs.core');
goog.require('app.patu.core');
app.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.4,(1)], null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),true,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app")], null));
app.examples.editor.core.intro_init = (function app$examples$editor$core$intro_init(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","editor","scene/editor",-1098223486));
})], null)], null);
});
app.examples.editor.core.intro_action = (function app$examples$editor$core$intro_action(){
var vec__32557 = app.patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32557,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32557,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"patu editor",(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"space to continue..",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,(y + (50))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null)], null)], null);
});
app.patu.core.reg_scene(new cljs.core.Keyword("scene","intro","scene/intro",-911577331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.examples.editor.core.intro_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.examples.editor.core.intro_action], null));
app.examples.editor.core.editor_init = (function app$examples$editor$core$editor_init(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return console.log("TODO");
})], null)], null);
});
app.examples.editor.core.tile_width = (1);
app.examples.editor.core.tile_height = (1);
app.examples.editor.core.spawn_tile = (function app$examples$editor$core$spawn_tile(x,y){
return app.patu.core.add_component_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null)], null)], null));
});
app.examples.editor.core.spawn_tiles = (function app$examples$editor$core$spawn_tiles(x){
var total_tiles = cljs.core.range.cljs$core$IFn$_invoke$arity$1((app.patu.core.width() / (10)));
var seq__32560 = cljs.core.seq(total_tiles);
var chunk__32561 = null;
var count__32562 = (0);
var i__32563 = (0);
while(true){
if((i__32563 < count__32562)){
var tile = chunk__32561.cljs$core$IIndexed$_nth$arity$2(null,i__32563);
app.examples.editor.core.spawn_tile(((10) * (tile + (1))),x);


var G__32571 = seq__32560;
var G__32572 = chunk__32561;
var G__32573 = count__32562;
var G__32574 = (i__32563 + (1));
seq__32560 = G__32571;
chunk__32561 = G__32572;
count__32562 = G__32573;
i__32563 = G__32574;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32560);
if(temp__5735__auto__){
var seq__32560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32560__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32560__$1);
var G__32575 = cljs.core.chunk_rest(seq__32560__$1);
var G__32576 = c__4556__auto__;
var G__32577 = cljs.core.count(c__4556__auto__);
var G__32578 = (0);
seq__32560 = G__32575;
chunk__32561 = G__32576;
count__32562 = G__32577;
i__32563 = G__32578;
continue;
} else {
var tile = cljs.core.first(seq__32560__$1);
app.examples.editor.core.spawn_tile(((10) * (tile + (1))),x);


var G__32579 = cljs.core.next(seq__32560__$1);
var G__32580 = null;
var G__32581 = (0);
var G__32582 = (0);
seq__32560 = G__32579;
chunk__32561 = G__32580;
count__32562 = G__32581;
i__32563 = G__32582;
continue;
}
} else {
return null;
}
}
break;
}
});
app.examples.editor.core.editor_action = (function app$examples$editor$core$editor_action(){
var vec__32564 = app.patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32564,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32564,(1),null);
var seq__32567_32583 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((50)));
var chunk__32568_32584 = null;
var count__32569_32585 = (0);
var i__32570_32586 = (0);
while(true){
if((i__32570_32586 < count__32569_32585)){
var r_32587 = chunk__32568_32584.cljs$core$IIndexed$_nth$arity$2(null,i__32570_32586);
app.examples.editor.core.spawn_tiles(((10) * (r_32587 + (1))));


var G__32588 = seq__32567_32583;
var G__32589 = chunk__32568_32584;
var G__32590 = count__32569_32585;
var G__32591 = (i__32570_32586 + (1));
seq__32567_32583 = G__32588;
chunk__32568_32584 = G__32589;
count__32569_32585 = G__32590;
i__32570_32586 = G__32591;
continue;
} else {
var temp__5735__auto___32592 = cljs.core.seq(seq__32567_32583);
if(temp__5735__auto___32592){
var seq__32567_32593__$1 = temp__5735__auto___32592;
if(cljs.core.chunked_seq_QMARK_(seq__32567_32593__$1)){
var c__4556__auto___32594 = cljs.core.chunk_first(seq__32567_32593__$1);
var G__32595 = cljs.core.chunk_rest(seq__32567_32593__$1);
var G__32596 = c__4556__auto___32594;
var G__32597 = cljs.core.count(c__4556__auto___32594);
var G__32598 = (0);
seq__32567_32583 = G__32595;
chunk__32568_32584 = G__32596;
count__32569_32585 = G__32597;
i__32570_32586 = G__32598;
continue;
} else {
var r_32599 = cljs.core.first(seq__32567_32593__$1);
app.examples.editor.core.spawn_tiles(((10) * (r_32599 + (1))));


var G__32600 = cljs.core.next(seq__32567_32593__$1);
var G__32601 = null;
var G__32602 = (0);
var G__32603 = (0);
seq__32567_32583 = G__32600;
chunk__32568_32584 = G__32601;
count__32569_32585 = G__32602;
i__32570_32586 = G__32603;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"MAKE GAMES",(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","score-board","ui/score-board",1873233556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add ui",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,(y + (50))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","pixel-grid","ui/pixel-grid",-148123749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(10),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","pixel-grid","ui/pixel-grid",-148123749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(10),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","pixel-grid","ui/pixel-grid",-148123749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(10),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","pixel-grid","ui/pixel-grid",-148123749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(10),(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null)], null)], null)], null)], null)], null);
});
app.patu.core.reg_scene(new cljs.core.Keyword("scene","editor","scene/editor",-1098223486),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.examples.editor.core.editor_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.examples.editor.core.editor_action], null));
app.examples.editor.core.app = (function app$examples$editor$core$app(){
return app.patu.core.start(new cljs.core.Keyword("scene","intro","scene/intro",-911577331));
});

//# sourceMappingURL=app.examples.editor.core.js.map
