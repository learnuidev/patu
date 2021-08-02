goog.provide('app.kaboom.mario.core');
goog.require('cljs.core');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom.mario.assets');
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.9], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(app.kaboom.mario.assets.assets));
var seq__27983_28006 = cljs.core.seq(new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(app.kaboom.mario.assets.assets));
var chunk__27984_28007 = null;
var count__27985_28008 = (0);
var i__27986_28009 = (0);
while(true){
if((i__27986_28009 < count__27985_28008)){
var map__27992_28010 = chunk__27984_28007.cljs$core$IIndexed$_nth$arity$2(null,i__27986_28009);
var map__27992_28011__$1 = (((((!((map__27992_28010 == null))))?(((((map__27992_28010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27992_28010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27992_28010):map__27992_28010);
var title_28012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27992_28011__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url_28013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27992_28011__$1,new cljs.core.Keyword(null,"url","url",276297046));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(title_28012,url_28013);


var G__28014 = seq__27983_28006;
var G__28015 = chunk__27984_28007;
var G__28016 = count__27985_28008;
var G__28017 = (i__27986_28009 + (1));
seq__27983_28006 = G__28014;
chunk__27984_28007 = G__28015;
count__27985_28008 = G__28016;
i__27986_28009 = G__28017;
continue;
} else {
var temp__5735__auto___28018 = cljs.core.seq(seq__27983_28006);
if(temp__5735__auto___28018){
var seq__27983_28019__$1 = temp__5735__auto___28018;
if(cljs.core.chunked_seq_QMARK_(seq__27983_28019__$1)){
var c__4556__auto___28020 = cljs.core.chunk_first(seq__27983_28019__$1);
var G__28021 = cljs.core.chunk_rest(seq__27983_28019__$1);
var G__28022 = c__4556__auto___28020;
var G__28023 = cljs.core.count(c__4556__auto___28020);
var G__28024 = (0);
seq__27983_28006 = G__28021;
chunk__27984_28007 = G__28022;
count__27985_28008 = G__28023;
i__27986_28009 = G__28024;
continue;
} else {
var map__27994_28025 = cljs.core.first(seq__27983_28019__$1);
var map__27994_28026__$1 = (((((!((map__27994_28025 == null))))?(((((map__27994_28025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27994_28025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27994_28025):map__27994_28025);
var title_28027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994_28026__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url_28028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994_28026__$1,new cljs.core.Keyword(null,"url","url",276297046));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(title_28027,url_28028);


var G__28029 = cljs.core.next(seq__27983_28019__$1);
var G__28030 = null;
var G__28031 = (0);
var G__28032 = (0);
seq__27983_28006 = G__28029;
chunk__27984_28007 = G__28030;
count__27985_28008 = G__28031;
i__27986_28009 = G__28032;
continue;
}
} else {
}
}
break;
}
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","one","level/one",1041805908),app.kaboom.mario.assets.level_handler);
/**
 * Custom component
 */
app.kaboom.mario.core.biggify_player = (function app$kaboom$mario$core$biggify_player(){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pressed?","pressed?",-473083504),false], null));
var biggify = (function (p1__27997_SHARP_){
return app.kaboom.patu.components.scale_BANG_(p1__27997_SHARP_,(2));
});
var midify = (function (p1__27998_SHARP_){
return app.kaboom.patu.components.scale_BANG_(p1__27998_SHARP_,1.5);
});
var smallify = (function (p1__27999_SHARP_){
return app.kaboom.patu.components.scale_BANG_(p1__27999_SHARP_,(1));
});
var update = (function (_player){
return null;
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"biggify","biggify",-1418467977),(function (){
var player = this;
return biggify(player);
}),new cljs.core.Keyword(null,"smallify","smallify",1474311556),(function (){
var player = this;
return smallify(player);
}),new cljs.core.Keyword(null,"midify","midify",270487149),(function (){
var player = this;
return midify(player);
}),new cljs.core.Keyword(null,"update","update",1045576396),(function (){
var player = this;
return update(player);
})], null);
});
app.kaboom.mario.core.main_init = (function app$kaboom$mario$core$main_init(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","gravity","game/gravity",-1809937539),(980)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),app.kaboom.mario.assets.main_map,new cljs.core.Keyword("level","one","level/one",1041805908)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","layers","game/layers",1947999590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"mario","mario",2083129476)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solid","solid",-2023773691)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(160),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botright","botright",-1805232146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),app.kaboom.mario.core.biggify_player()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(100)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"You lose"], null)], null)], null)], null)], null)], null);
});
app.kaboom.patu.events.reg_event(new cljs.core.Keyword("player","change-sprite","player/change-sprite",-395018655),(function (_,p__28000){
var vec__28001 = p__28000;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(1),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(2),null);
var comp = app.kaboom.patu.core.get_component(id);
return comp.changeSprite(cljs.core.name(sid));
}));
app.kaboom.mario.core.main_action = (function app$kaboom$mario$core$main_action(){
var player = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"player","player",-97687400));
var score = app.kaboom.patu.core.get_component(new cljs.core.Keyword(null,"score","score",-1963588780));
var level = app.kaboom.patu.core.get_level(new cljs.core.Keyword("level","one","level/one",1041805908));
var pos = player.pos.sub(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-200),(player.pos.y - (30))], null)));
app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1(pos);

console.log("YO");

return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","comp","evt/comp",1192064753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headbump","headbump",327760862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coin-surprise","coin-surprise",1275613946),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","change-sprite","player/change-sprite",-395018655),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("sprite","coin","sprite/coin",663933976)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mushroom-surprise","mushroom-surprise",-880281649),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","change-sprite","player/change-sprite",-395018655),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("sprite","coin","sprite/coin",663933976)], null));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","on","evt/on",173779189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"headbump","headbump",327760862)], null),(function (p1__28004_SHARP_){
return console.log(p1__28004_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(((110) < player.pos.x)){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-230),(0)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.patu.components.move_BANG_(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(230),(0)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null),(function (){
var pos__$1 = player.pos.sub(app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-200),(player.pos.y - (30))], null)));
return app.kaboom.patu.cam.cam_pos.cljs$core$IFn$_invoke$arity$1(pos__$1);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"up","up",-269712113),(function (){
return app.kaboom.patu.cam.zoom_in.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),new cljs.core.Keyword(null,"down","down",1565245570),(function (){
return app.kaboom.patu.cam.zoom_out.cljs$core$IFn$_invoke$arity$0();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.components.jump_BANG_(player,(400));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"evil-mushroom","evil-mushroom",-1932000722)], null),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"evil-mushroom","evil-mushroom",-1932000722)], null),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","change-sprite","player/change-sprite",-395018655),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("sprite","evil-mushroom","sprite/evil-mushroom",-772077463)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","collides","evt/collides",361392002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"mushroom-surprise","mushroom-surprise",-880281649)], null),(function (){
return app.kaboom.patu.core.call(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"biggify","biggify",-1418467977));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"b","b",1482224470),(function (){
return app.kaboom.patu.core.call(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"biggify","biggify",-1418467977));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"s","s",1705939918),(function (){
return app.kaboom.patu.core.call(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"smallify","smallify",1474311556));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"m","m",1632677161),(function (){
return app.kaboom.patu.core.call(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"midify","midify",270487149));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"r","r",-471384190),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"o","o",-1350007228),(function (){
return app.kaboom.patu.events.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","change-sprite","player/change-sprite",-395018655),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("sprite","mario","sprite/mario",885591407)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","action","evt/action",-811138293),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
if((player.pos.y > (320))){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(score,new cljs.core.Keyword(null,"value","value",305978217)));
} else {
return null;
}
})], null)], null);
});
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","main","scene/main",-1958736649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom.mario.core.main_init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom.mario.core.main_action], null));
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (score){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),score,(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.kaboom.patu.core.center()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-2","dialog-2",-2000279801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Press space to restart",(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(320),(280)], null)], null)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"evt","evt",-1251566867),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
})], null)], null);
})], null));
app.kaboom.mario.core.app = (function app$kaboom$mario$core$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","main","scene/main",-1958736649));
});

//# sourceMappingURL=app.kaboom.mario.core.js.map
