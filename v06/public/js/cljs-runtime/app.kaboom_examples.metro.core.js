goog.provide('app.kaboom_examples.metro.core');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.audio');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.events');
goog.require('app.kaboom_examples.metro.assets');
goog.require('app.kaboom_examples.metro.events');
goog.require('app.kaboom_examples.metro.scenes.one');
goog.require('app.kaboom_examples.metro.scenes.two');
app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),true,new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
app.kaboom.patu.loaders.load_root.cljs$core$IFn$_invoke$arity$1("assets/metro/");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bg0","bg0",-2022873376),"tiles/bg_0.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bg1","bg1",-2033818465),"tiles/bg_1.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bg2","bg2",-1429908206),"tiles/bg_2.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fg0","fg0",1854659755),"tiles/fg_1.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tiles","tiles",178505240),"tiles/tileset32.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(12),new cljs.core.Keyword(null,"sliceY","sliceY",1476268871),(6)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"coin","coin",-227557189),"misc/coin_anim_strip_6.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(6),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coin","coin",-227557189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),"misc/coin_pickup_anim_strip_6.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(6),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coin-pickup","coin-pickup",-2102345864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("door","closed","door/closed",-922893745),"misc/strange_door_closed_anim_strip_10.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(10),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("door","closed","door/closed",-922893745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(9)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"door-open","door-open",2143389771),"misc/strange_door_opening_anim_strip_14.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(14),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"door-open","door-open",2143389771),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(13)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("trap","suspended","trap/suspended",-758447852),"misc/trap_suspended_anim_strip_18.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(18),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pendulum","pendulum",1567229024),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(17)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"explosion","explosion",-1564989537),"misc/explosion_anim_strip_10.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(10),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(9)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tiki-torch","tiki-torch",1880603403),"misc/tiki_torch_props_strip_12.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(12),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiki-torch","tiki-torch",1880603403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(11)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661),"misc/orb_anim_strip_6.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(6),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orb-anim","orb-anim",-1809058661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),"misc/orb_collected_anim_strip_5.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(5),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orb-pickup","orb-pickup",1197452089),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(4)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wooden-plate","wooden-plate",-1406744171),"misc/wooden_plate.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flower-props","flower-props",131151738),"misc/flowers_props.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grass-props","grass-props",-944833944),"misc/grass_props.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lever-right","lever-right",-1337139525),"misc/lever_turned_right.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lever-left","lever-left",226448857),"misc/lever_turned_left.png");
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"bird","bird",-1252014845),"fauna/bird_flying_anim_strip_3.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(3),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flying","flying",-1854780019),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(2)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"character","character",380652989),"hero/herochar_idle_anim_strip_4.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(4),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(3)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("character","tileset","character/tileset",-1801123115),"hero/herochar_spritesheet.png",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(8),new cljs.core.Keyword(null,"sliceY","sliceY",1476268871),(15),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("player","lose","player/lose",1698306603),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(7)], null),new cljs.core.Keyword("player","run","player/run",-1397634330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(8),new cljs.core.Keyword(null,"to","to",192099007),(13)], null),new cljs.core.Keyword("player","boom","player/boom",-2049216393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(16),new cljs.core.Keyword(null,"to","to",192099007),(21)], null),new cljs.core.Keyword("player","nod","player/nod",565110042),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(24),new cljs.core.Keyword(null,"to","to",192099007),(27)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("character","attack","character/attack",-757487275),"hero/herochar_sword_attack_anim_strip_4.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(4),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(3)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("character","death","character/death",494945313),"hero/herochar_death_anim_strip_8.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(8),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(7)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("character","hit","character/hit",253114173),"hero/herochar_hit_anim_strip_3.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(3),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(2)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956),"enemies/worm/worm_walk_anim_strip_6.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(6),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worm-walk","worm-walk",1296411956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),"enemies/worm/worm_hit_anim_strip_3.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(3),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worm-hit","worm-hit",1676638160),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(2)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),"enemies/worm/worm_death_anim_strip_6.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(6),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worm-death","worm-death",-26623233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null)], null)], null));
app.kaboom.patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547),"enemies/slime/slime_walk_anim_strip_15.png",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(15),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slime-walk","slime-walk",-1547974547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(14)], null)], null)], null));
app.kaboom_examples.metro.core.sleep = (function app$kaboom_examples$metro$core$sleep(f,ms){
return setTimeout(f,ms);
});
app.kaboom_examples.metro.core.change_sprite = (function app$kaboom_examples$metro$core$change_sprite(p__72482){
var vec__72483 = p__72482;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72483,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72483,(1),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72483,(2),null);
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
return app.kaboom.patu.core.play(id,aid);
} else {
return null;
}
} else {
return null;
}
});
app.kaboom_examples.metro.core.change_sprite_and_destroy = (function app$kaboom_examples$metro$core$change_sprite_and_destroy(comp,sid,aid){
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
app.kaboom.patu.core.play(comp,aid);
} else {
}

return app.kaboom_examples.metro.core.sleep((function (){
return app.kaboom.patu.core.destroy(comp);
}),(600));
});
/**
 * Triggers attack animation
 */
app.kaboom_examples.metro.core.attack = (function app$kaboom_examples$metro$core$attack(id){
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if((!(app.kaboom.patu.components.cur_anim_QMARK_(comp,new cljs.core.Keyword(null,"attack","attack",1957061788))))){
comp.changeSprite(cljs.core.name(new cljs.core.Keyword("character","attack","character/attack",-757487275)));

app.kaboom.patu.core.play(id,new cljs.core.Keyword(null,"attack","attack",1957061788));

return app.kaboom_examples.metro.core.sleep((function (){
return app.kaboom_examples.metro.core.change_sprite(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("character","tileset","character/tileset",-1801123115),new cljs.core.Keyword("player","nod","player/nod",565110042)], null));
}),(300));
} else {
return null;
}
} else {
return null;
}
});
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","main","level/main",-1952281121),app.kaboom_examples.metro.assets.level_handler);
app.kaboom.patu.core.reg_level(new cljs.core.Keyword("level","two","level/two",726343625),app.kaboom_examples.metro.assets.level_two_handler);
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","one","scene/one",1027080524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.metro.scenes.one.init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.metro.scenes.one.event], null));
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","two","scene/two",753507521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),app.kaboom_examples.metro.scenes.two.init,new cljs.core.Keyword(null,"evt","evt",-1251566867),app.kaboom_examples.metro.scenes.two.event], null));
app.kaboom.patu.core.reg_scene(new cljs.core.Keyword("scene","lose","scene/lose",-1533699104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (score){
var vec__72486 = app.kaboom.patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72486,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72486,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),score,(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-2","dialog-2",-2000279801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Press space to restart",(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((80) + y)], null)], null)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"evt","evt",-1251566867),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),new cljs.core.Keyword(null,"space","space",348133475),(function (){
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("scene","one","scene/one",1027080524));
})], null)], null);
})], null));
app.kaboom_examples.metro.core.app = (function app$kaboom_examples$metro$core$app(){
return app.kaboom.patu.core.start(new cljs.core.Keyword("scene","one","scene/one",1027080524));
});

//# sourceMappingURL=app.kaboom_examples.metro.core.js.map
