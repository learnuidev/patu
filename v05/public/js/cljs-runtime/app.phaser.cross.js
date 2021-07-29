goog.provide('app.phaser.cross');
goog.require('cljs.core');
var module$node_modules$Phaser$src$phaser=shadow.js.require("module$node_modules$Phaser$src$phaser", {});
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.cross !== 'undefined') && (typeof app.phaser.cross.self !== 'undefined')){
} else {
app.phaser.cross.self = null;
}
(window.self = app.phaser.cross.self);
app.phaser.cross.load_image = (function app$phaser$cross$load_image(this$,name,property){
return this$.load.image(name,property);
});
app.phaser.cross.add_sprite = (function app$phaser$cross$add_sprite(this$,p__41632){
var vec__41633 = p__41632;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41633,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41633,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41633,(2),null);
return this$.add.sprite(x,y,name);
});
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.cross !== 'undefined') && (typeof app.phaser.cross.Scene !== 'undefined')){
} else {
app.phaser.cross.Scene = module$node_modules$Phaser$src$phaser.Scene;
}
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.cross !== 'undefined') && (typeof app.phaser.cross.Game !== 'undefined')){
} else {
app.phaser.cross.Game = module$node_modules$Phaser$src$phaser.Game;
}
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.cross !== 'undefined') && (typeof app.phaser.cross.scene !== 'undefined')){
} else {
app.phaser.cross.scene = ({});
}
app.phaser.cross.assets = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","assets/background.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["player","assets/player.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["enemy","assets/dragon.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["treasure","assets/treasure.png"], null)], null);
/**
 * Load assets. this here refers to Scene object
 */
app.phaser.cross.preload_BANG_ = (function app$phaser$cross$preload_BANG_(){
var this$ = this;
(app.phaser.cross.self = this$);

var seq__41636 = cljs.core.seq(app.phaser.cross.assets);
var chunk__41637 = null;
var count__41638 = (0);
var i__41639 = (0);
while(true){
if((i__41639 < count__41638)){
var vec__41646 = chunk__41637.cljs$core$IIndexed$_nth$arity$2(null,i__41639);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41646,(1),null);
app.phaser.cross.load_image(this$,k,v);


var G__41652 = seq__41636;
var G__41653 = chunk__41637;
var G__41654 = count__41638;
var G__41655 = (i__41639 + (1));
seq__41636 = G__41652;
chunk__41637 = G__41653;
count__41638 = G__41654;
i__41639 = G__41655;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41636);
if(temp__5735__auto__){
var seq__41636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41636__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41636__$1);
var G__41656 = cljs.core.chunk_rest(seq__41636__$1);
var G__41657 = c__4556__auto__;
var G__41658 = cljs.core.count(c__4556__auto__);
var G__41659 = (0);
seq__41636 = G__41656;
chunk__41637 = G__41657;
count__41638 = G__41658;
i__41639 = G__41659;
continue;
} else {
var vec__41649 = cljs.core.first(seq__41636__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41649,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41649,(1),null);
app.phaser.cross.load_image(this$,k,v);


var G__41660 = cljs.core.next(seq__41636__$1);
var G__41661 = null;
var G__41662 = (0);
var G__41663 = (0);
seq__41636 = G__41660;
chunk__41637 = G__41661;
count__41638 = G__41662;
i__41639 = G__41663;
continue;
}
} else {
return null;
}
}
break;
}
});
(app.phaser.cross.scene.preload = app.phaser.cross.preload_BANG_);
/**
 * === 1.2 Create a game ===
 *   This function gets called after the preload! ends
 */
app.phaser.cross.create_BANG_ = (function app$phaser$cross$create_BANG_(){
var this$ = this;
var background = app.phaser.cross.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),"background"], null));
var player = app.phaser.cross.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(180),"player"], null));
var enemy = app.phaser.cross.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(180),"enemy"], null));
var treasure = app.phaser.cross.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(350),(180),"treasure"], null));
console.log(player);

(this$.background = background);

this$.background.setOrigin((0),(0));

(player.x = (450));

(window.player = player);

player.setScale((1));

(player.y = (230));

(this$.player = player);

(this$.enemy = enemy);

return (this$.treasure = treasure);
});
(app.phaser.cross.scene.create = app.phaser.cross.create_BANG_);
app.phaser.cross.MAX_GROWTH = (2);
app.phaser.cross.GROWTH_RATE = 0.01;
app.phaser.cross.GROWTH_ANGLE = 0.1;
/**
 * Gets called in every frame
 */
app.phaser.cross.update_BANG_ = (function app$phaser$cross$update_BANG_(){
var this$ = this;
var enemy = this$.enemy;
var player = this$.player;
(enemy.angle = (app.phaser.cross.GROWTH_ANGLE + enemy.angle));

if((player.scaleX < app.phaser.cross.MAX_GROWTH)){
(player.scaleY = (app.phaser.cross.GROWTH_RATE + player.scaleY));

return (player.scaleX = (app.phaser.cross.GROWTH_RATE + player.scaleX));
} else {
return null;
}
});
(app.phaser.cross.scene.update = app.phaser.cross.update_BANG_);
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.cross !== 'undefined') && (typeof app.phaser.cross.config !== 'undefined')){
} else {
app.phaser.cross.config = ({"type": module$node_modules$Phaser$src$phaser.AUTO, "width": (640), "height": (360), "scene": app.phaser.cross.scene});
}
app.phaser.cross.init_game = (function app$phaser$cross$init_game(c){
return (new app.phaser.cross.Game(c));
});
app.phaser.cross.app = (function app$phaser$cross$app(){
return app.phaser.cross.init_game(app.phaser.cross.config);
});

//# sourceMappingURL=app.phaser.cross.js.map
