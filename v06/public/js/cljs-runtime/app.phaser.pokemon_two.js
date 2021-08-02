goog.provide('app.phaser.pokemon_two');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
var module$node_modules$Phaser$src$phaser=shadow.js.require("module$node_modules$Phaser$src$phaser", {});
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.pokemon_two !== 'undefined') && (typeof app.phaser.pokemon_two.app_db !== 'undefined')){
} else {
app.phaser.pokemon_two.app_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursors","cursors",396681990),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080),false], null));
}
app.phaser.pokemon_two.Color = Phaser.Display.Color;
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.pokemon_two !== 'undefined') && (typeof app.phaser.pokemon_two.controls !== 'undefined')){
} else {
app.phaser.pokemon_two.controls = ({});
}
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.pokemon_two !== 'undefined') && (typeof app.phaser.pokemon_two.scene !== 'undefined')){
} else {
app.phaser.pokemon_two.scene = ({});
}
app.phaser.pokemon_two.preload_BANG_ = (function app$phaser$pokemon_two$preload_BANG_(){
var this$ = this;
(window.that = this$);

this$.load.image("tiles","https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilesets/tuxmon-sample-32px-extruded.png");

this$.load.tilemapTiledJSON("map","https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilemaps/tuxemon-town.json");

return this$.load.atlas("atlas","https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.png","https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.json");
});
(app.phaser.pokemon_two.scene.preload = app.phaser.pokemon_two.preload_BANG_);
app.phaser.pokemon_two.arrows_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font","font",-1506159249),"18px monospace",new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#000000"], null);
app.phaser.pokemon_two.create_BANG_ = (function app$phaser$pokemon_two$create_BANG_(){
var this$ = this;
(window.that = this$);

var map = this$.make.tilemap(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"map"], null)));
var _ = (window.gameMap = map);
var tileset = map.addTilesetImage("tuxmon-sample-32px-extruded","tiles");
var below_layer = map.createStaticLayer("Below Player",tileset,(0),(0));
var world_layer = map.createStaticLayer("World",tileset,(0),(0));
var above_layer = map.createStaticLayer("Above Player",tileset,(0),(0));
var ___$1 = world_layer.setCollisionByProperty(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collides","collides",361418723),true], null)));
var debugGraphics = this$.add.graphics().setAlpha(0.75);
var ___$2 = world_layer.renderDebug(debugGraphics,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tileColor","tileColor",1069523015),null,new cljs.core.Keyword(null,"collidingTileColor","collidingTileColor",-292332676),(new app.phaser.pokemon_two.Color((243),(134),(48),(255))),new cljs.core.Keyword(null,"faceColor","faceColor",2124305970),(new app.phaser.pokemon_two.Color((40),(39),(37),(255)))], null)));
var spawn_point = map.findObject("Objects",(function (obj){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obj.name,"Spawn Point");
}));
var new_player = this$.physics.add.sprite(spawn_point.x,spawn_point.y,"atlas","misa-front").setSize((30),(40)).setOffset((0),(24));
var ___$3 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.phaser.pokemon_two.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new_player);
var ___$4 = this$.physics.add.collider(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.phaser.pokemon_two.app_db)),world_layer);
var anims = this$.anims;
var ___$5 = anims.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"misa-left-walk",new cljs.core.Keyword(null,"frameRate","frameRate",456009770),(10),new cljs.core.Keyword(null,"releat","releat",-1478273709),(-1),new cljs.core.Keyword(null,"frames","frames",1765687497),anims.generateFrameNames("atlas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"misa-left-walk.",new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(3),new cljs.core.Keyword(null,"zeroPad","zeroPad",1775853779),(3)], null)))], null)));
var ___$6 = anims.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"misa-right-walk",new cljs.core.Keyword(null,"frameRate","frameRate",456009770),(10),new cljs.core.Keyword(null,"releat","releat",-1478273709),(-1),new cljs.core.Keyword(null,"frames","frames",1765687497),anims.generateFrameNames("atlas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"misa-right-walk.",new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(3),new cljs.core.Keyword(null,"zeroPad","zeroPad",1775853779),(3)], null)))], null)));
var ___$7 = anims.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"misa-front-walk",new cljs.core.Keyword(null,"frameRate","frameRate",456009770),(10),new cljs.core.Keyword(null,"releat","releat",-1478273709),(-1),new cljs.core.Keyword(null,"frames","frames",1765687497),anims.generateFrameNames("atlas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"misa-front-walk.",new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(3),new cljs.core.Keyword(null,"zeroPad","zeroPad",1775853779),(3)], null)))], null)));
var ___$8 = anims.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"misa-back-walk",new cljs.core.Keyword(null,"frameRate","frameRate",456009770),(10),new cljs.core.Keyword(null,"releat","releat",-1478273709),(-1),new cljs.core.Keyword(null,"frames","frames",1765687497),anims.generateFrameNames("atlas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"misa-back-walk.",new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(3),new cljs.core.Keyword(null,"zeroPad","zeroPad",1775853779),(3)], null)))], null)));
var camera = this$.cameras.main;
var ___$9 = camera.startFollow(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.phaser.pokemon_two.app_db)));
var cursors = this$.input.keyboard.createCursorKeys();
var ___$10 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.phaser.pokemon_two.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"cursors","cursors",396681990),cursors);
var title = "Arrow keys to move\nPress 'D' to show hitboxes";
var ___$11 = this$.add.text((16),(16),title,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font","font",-1506159249),"18px monospace",new cljs.core.Keyword(null,"fill","fill",883462889),"#000000",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffffff"], null))).setScrollFactor((0)).setDepth((0));
var config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"camera","camera",-1190348585),camera,new cljs.core.Keyword(null,"left","left",-399115937),cursors.left,new cljs.core.Keyword(null,"right","right",-452581833),cursors.right,new cljs.core.Keyword(null,"up","up",-269712113),cursors.up,new cljs.core.Keyword(null,"down","down",1565245570),cursors.down,new cljs.core.Keyword(null,"speed","speed",1257663751),0.5], null);
(app.phaser.pokemon_two.controls.controls = (new Phaser.Cameras.Controls.FixedKeyControl(cljs.core.clj__GT_js(config))));

camera.setBounds((0),(0),map.widthInPixels,map.heightInPixels);

return this$.add.text((16),(16),"Arrows keys to scroll",cljs.core.clj__GT_js(app.phaser.pokemon_two.arrows_config)).setScrollFactor((0));
});
(app.phaser.pokemon_two.scene.create = app.phaser.pokemon_two.create_BANG_);
app.phaser.pokemon_two.update_BANG_ = (function app$phaser$pokemon_two$update_BANG_(_time,delta){
var map__28814 = cljs.core.deref(app.phaser.pokemon_two.app_db);
var map__28814__$1 = (((((!((map__28814 == null))))?(((((map__28814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28814):map__28814);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28814__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var cursors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28814__$1,new cljs.core.Keyword(null,"cursors","cursors",396681990));
var speed = (175);
var prev_velocity = player.body.velocity.clone();
var _ = player.body.setVelocity((0));
var ___$1 = (cljs.core.truth_(cursors.left.isDown)?player.body.setVelocityX((- speed)):(cljs.core.truth_(cursors.right.isDown)?player.body.setVelocityX(speed):null));
var ___$2 = (cljs.core.truth_(cursors.up.isDown)?player.body.setVelocityY((- speed)):(cljs.core.truth_(cursors.down.isDown)?player.body.setVelocityY(speed):null));
var ___$3 = player.body.velocity.normalize().scale(speed);
var ___$4 = (cljs.core.truth_(cursors.left.isDown)?player.anims.play("misa-left-walk",true):(cljs.core.truth_(cursors.right.isDown)?player.anims.play("misa-right-walk",true):(cljs.core.truth_(cursors.up.isDown)?player.anims.play("misa-back-walk",true):(cljs.core.truth_(cursors.down.isDown)?player.anims.play("misa-front-walk",true):null))));
return app.phaser.pokemon_two.controls.controls.update(delta);
});
(app.phaser.pokemon_two.scene.update = app.phaser.pokemon_two.update_BANG_);
app.phaser.pokemon_two.config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),Phaser.AUTO,new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"parent","parent",-878878779),"game-container",new cljs.core.Keyword(null,"pixelArt","pixelArt",-636167759),true,new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"arcade",new cljs.core.Keyword(null,"arcade","arcade",-346009095),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)], null),new cljs.core.Keyword(null,"scene","scene",1523800415),app.phaser.pokemon_two.scene], null);
app.phaser.pokemon_two.create_game = (function app$phaser$pokemon_two$create_game(){
return (new Phaser.Game(cljs.core.clj__GT_js(app.phaser.pokemon_two.config)));
});
app.phaser.pokemon_two.app = (function app$phaser$pokemon_two$app(){
var game = app.phaser.pokemon_two.create_game();
return (window.game = game);
});

//# sourceMappingURL=app.phaser.pokemon_two.js.map
