goog.provide('app.kaboom.mario');
goog.require('cljs.core');
app.kaboom.mario.kaboom = (function app$kaboom$mario$kaboom(config){
return kaboom(cljs.core.clj__GT_js(config));
});
console.log(app.kaboom.mario.kaboom);
app.kaboom.mario.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.kaboom.mario.assets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root-url","root-url",-1322760038),"https://i.imgur.com/",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"coin","coin",-227557189),new cljs.core.Keyword(null,"url","url",276297046),"wbKxhcd.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"evil-mushroom","evil-mushroom",-1932000722),new cljs.core.Keyword(null,"url","url",276297046),"LmseqUG.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"brick","brick",895065736),new cljs.core.Keyword(null,"url","url",276297046),"pogC9x5.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"url","url",276297046),"M6rwarW.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"mario","mario",2083129476),new cljs.core.Keyword(null,"url","url",276297046),"Wb1qfhK.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"mushroom","mushroom",-1689781733),new cljs.core.Keyword(null,"url","url",276297046),"0wMd92p.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"surprise","surprise",2070691973),new cljs.core.Keyword(null,"url","url",276297046),"gesQ1KP.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"unboxed","unboxed",-1466527826),new cljs.core.Keyword(null,"url","url",276297046),"bdrLpi6.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pipe-top-left","pipe-top-left",12319440),new cljs.core.Keyword(null,"url","url",276297046),"ReTPiWY.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pipe-top-right","pipe-top-right",-178224187),new cljs.core.Keyword(null,"url","url",276297046),"hj2GK4n.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pipe-bottom-left","pipe-bottom-left",182370408),new cljs.core.Keyword(null,"url","url",276297046),"c1cYSbt.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pipe-bottom-right","pipe-bottom-right",-1114065967),new cljs.core.Keyword(null,"url","url",276297046),"nqQ79eI.png"], null)], null)], null);
app.kaboom.mario.game = app.kaboom.mario.kaboom(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.9], null)], null));
app.kaboom.mario.load_root = (function app$kaboom$mario$load_root(game,url){
return game.loadRoot(url);
});
app.kaboom.mario.load_sprite = (function app$kaboom$mario$load_sprite(game,title,url){
return game.loadSprite(cljs.core.name(title),url);
});
app.kaboom.mario.load_root(app.kaboom.mario.game,new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(app.kaboom.mario.assets));
var seq__26820_26832 = cljs.core.seq(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(app.kaboom.mario.assets));
var chunk__26821_26833 = null;
var count__26822_26834 = (0);
var i__26823_26835 = (0);
while(true){
if((i__26823_26835 < count__26822_26834)){
var map__26828_26836 = chunk__26821_26833.cljs$core$IIndexed$_nth$arity$2(null,i__26823_26835);
var map__26828_26837__$1 = (((((!((map__26828_26836 == null))))?(((((map__26828_26836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26828_26836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26828_26836):map__26828_26836);
var title_26838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26828_26837__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url_26839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26828_26837__$1,new cljs.core.Keyword(null,"url","url",276297046));
app.kaboom.mario.load_sprite(app.kaboom.mario.game,title_26838,url_26839);


var G__26840 = seq__26820_26832;
var G__26841 = chunk__26821_26833;
var G__26842 = count__26822_26834;
var G__26843 = (i__26823_26835 + (1));
seq__26820_26832 = G__26840;
chunk__26821_26833 = G__26841;
count__26822_26834 = G__26842;
i__26823_26835 = G__26843;
continue;
} else {
var temp__5735__auto___26844 = cljs.core.seq(seq__26820_26832);
if(temp__5735__auto___26844){
var seq__26820_26845__$1 = temp__5735__auto___26844;
if(cljs.core.chunked_seq_QMARK_(seq__26820_26845__$1)){
var c__4556__auto___26846 = cljs.core.chunk_first(seq__26820_26845__$1);
var G__26847 = cljs.core.chunk_rest(seq__26820_26845__$1);
var G__26848 = c__4556__auto___26846;
var G__26849 = cljs.core.count(c__4556__auto___26846);
var G__26850 = (0);
seq__26820_26832 = G__26847;
chunk__26821_26833 = G__26848;
count__26822_26834 = G__26849;
i__26823_26835 = G__26850;
continue;
} else {
var map__26830_26851 = cljs.core.first(seq__26820_26845__$1);
var map__26830_26852__$1 = (((((!((map__26830_26851 == null))))?(((((map__26830_26851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26830_26851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26830_26851):map__26830_26851);
var title_26853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26830_26852__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url_26854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26830_26852__$1,new cljs.core.Keyword(null,"url","url",276297046));
app.kaboom.mario.load_sprite(app.kaboom.mario.game,title_26853,url_26854);


var G__26855 = cljs.core.next(seq__26820_26845__$1);
var G__26856 = null;
var G__26857 = (0);
var G__26858 = (0);
seq__26820_26832 = G__26855;
chunk__26821_26833 = G__26856;
count__26822_26834 = G__26857;
i__26823_26835 = G__26858;
continue;
}
} else {
}
}
break;
}
app.kaboom.mario.sprite = (function app$kaboom$mario$sprite(game,title){
return game.sprite(cljs.core.name(title));
});
app.kaboom.mario.solid = (function app$kaboom$mario$solid(game){
return game.solid();
});
app.kaboom.mario.scale = (function app$kaboom$mario$scale(game,value){
return game.scale(value);
});
app.kaboom.mario.level_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",354169001),(20),new cljs.core.Keyword(null,"h","h",1109658740),(20),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block"], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)], null)], null);
app.kaboom.mario.main_scene = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                           ","                                           ","                                           ","                                           ","                                           ","                                           ","                                           ","           #                               ","      %   =*=%=                           ","                                           ","                              -+           ","                     ^   ^    ()           ","=================================    ======"], null),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block"], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)], null)], null)], null);
app.kaboom.mario.layers = (function app$kaboom$mario$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.kaboom.mario.add_level = (function app$kaboom$mario$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.kaboom.mario.key_down = (function app$kaboom$mario$key_down(game,id,handler){
return game.keyDown(cljs.core.name(id),handler);
});
app.kaboom.mario.key_press = (function app$kaboom$mario$key_press(game,id,handler){
return game.keyPress(cljs.core.name(id),handler);
});
app.kaboom.mario.add = (function app$kaboom$mario$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.kaboom.mario.main_handler = (function app$kaboom$mario$main_handler(){
app.kaboom.mario.layers(app.kaboom.mario.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833));

var player = app.kaboom.mario.add(app.kaboom.mario.game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.game.sprite("mario"),app.kaboom.mario.game.solid(),app.kaboom.mario.game.pos((30),(0)),app.kaboom.mario.game.body(),app.kaboom.mario.game.origin("bot")], null));
var score = app.kaboom.mario.add(app.kaboom.mario.game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.game.text((0)),app.kaboom.mario.game.pos((16),(16)),app.kaboom.mario.game.layer(new cljs.core.Keyword(null,"ui","ui",-469653645)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(100)], null))], null));
app.kaboom.mario.add_level(app.kaboom.mario.game,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(app.kaboom.mario.main_scene),cljs.core.PersistentHashMap.fromArrays([")",new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"%","%",1704198600),new cljs.core.Keyword(null,"-","-",-2112348439),"(",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"$","$",1073688013),new cljs.core.Keyword(null,"#","#",-275793773),new cljs.core.Keyword(null,"+","+",1913524883),"}",new cljs.core.Keyword(null,"=","=",1152933628),"^",new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"pipe-bottom-right","pipe-bottom-right",-1114065967)),app.kaboom.mario.solid(app.kaboom.mario.game),app.kaboom.mario.scale(app.kaboom.mario.game,0.5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"surprise","surprise",2070691973)),app.kaboom.mario.solid(app.kaboom.mario.game),new cljs.core.Keyword(null,"mushroom-surprise","mushroom-surprise",-880281649)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"surprise","surprise",2070691973)),app.kaboom.mario.solid(app.kaboom.mario.game),new cljs.core.Keyword(null,"coin-surprise","coin-surprise",1275613946)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"pipe-top-left","pipe-top-left",12319440)),app.kaboom.mario.solid(app.kaboom.mario.game),app.kaboom.mario.scale(app.kaboom.mario.game,0.5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"pipe-bottom-left","pipe-bottom-left",182370408)),app.kaboom.mario.solid(app.kaboom.mario.game),app.kaboom.mario.scale(app.kaboom.mario.game,0.5)], null),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"coin","coin",-227557189))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"mushroom","mushroom",-1689781733)),app.kaboom.mario.solid(app.kaboom.mario.game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"pipe-top-right","pipe-top-right",-178224187)),app.kaboom.mario.solid(app.kaboom.mario.game),app.kaboom.mario.scale(app.kaboom.mario.game,0.5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"unboxed","unboxed",-1466527826)),app.kaboom.mario.solid(app.kaboom.mario.game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"block","block",664686210)),app.kaboom.mario.solid(app.kaboom.mario.game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.mario.sprite(app.kaboom.mario.game,new cljs.core.Keyword(null,"evil-mushroom","evil-mushroom",-1932000722)),app.kaboom.mario.solid(app.kaboom.mario.game)], null),(20)]));

app.kaboom.mario.key_down(app.kaboom.mario.game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return player.move((-120),(0));
}));

app.kaboom.mario.key_down(app.kaboom.mario.game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return player.move((230),(0));
}));

app.kaboom.mario.key_press(app.kaboom.mario.game,new cljs.core.Keyword(null,"space","space",348133475),(function (){
return player.jump((400));
}));

return player.on("headbump",(function (obj){
if(cljs.core.truth_(obj.is(cljs.core.name(new cljs.core.Keyword(null,"coin-surprise","coin-surprise",1275613946))))){
console.log("COIN");
} else {
}

if(cljs.core.truth_(obj.is(cljs.core.name(new cljs.core.Keyword(null,"mushroom-surprise","mushroom-surprise",-880281649))))){
return console.log("MUSHROOM");
} else {
return null;
}
}));
});
app.kaboom.mario.game.scene("main",app.kaboom.mario.main_handler);
app.kaboom.mario.app = (function app$kaboom$mario$app(){
return app.kaboom.mario.game.start("main");
});

//# sourceMappingURL=app.kaboom.mario.js.map
