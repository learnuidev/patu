goog.provide('app.phaser.core');
goog.require('cljs.core');
goog.require('cljs.reader');
app.phaser.core.load_image = (function app$phaser$core$load_image(this$,name,property){
return this$.load.image(name,property);
});
app.phaser.core.add_sprite = (function app$phaser$core$add_sprite(this$,p__31636){
var vec__31637 = p__31636;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(2),null);
return this$.add.sprite(x,y,name);
});
app.phaser.core.scene = (new Phaser.Scene("Game"));
app.phaser.core.assets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background","assets/background.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["player","assets/player.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["enemy","assets/player.png"], null)], null);
app.phaser.core.preload_BANG_ = (function app$phaser$core$preload_BANG_(){
var this$ = this;
app.phaser.core.load_image(this$,"background","assets/background.png");

app.phaser.core.load_image(this$,"player","assets/player.png");

return app.phaser.core.load_image(this$,"enemy","assets/dragon.png");
});
(app.phaser.core.scene.preload = app.phaser.core.preload_BANG_);
app.phaser.core.create_BANG_ = (function app$phaser$core$create_BANG_(){
var this$ = this;
var background = app.phaser.core.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),"background"], null));
var friend = app.phaser.core.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),(180),"player"], null));
var enemy = app.phaser.core.add_sprite(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(180),"enemy"], null));
(this$.background = background);

(this$.friend = friend);

(this$.enemy = enemy);

return this$.background.setOrigin((0),(0));
});
(app.phaser.core.scene.create = app.phaser.core.create_BANG_);
app.phaser.core.update_BANG_ = (function app$phaser$core$update_BANG_(){
var this$ = this;
var enemy_pos = this$.enemy.x;
(this$.enemy.x = (enemy_pos + (1)));

(this$.enemy.angle = (enemy_pos + (1)));

if((this$.friend.scaleX < (2))){
(this$.friend.scaleY = (0.01 + this$.friend.scaleY));

return (this$.friend.scaleX = (0.01 + this$.friend.scaleX));
} else {
return null;
}
});
(app.phaser.core.scene.update = app.phaser.core.update_BANG_);
app.phaser.core.config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),Phaser.AUTO,new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"arcade",new cljs.core.Keyword(null,"arcade","arcade",-346009095),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)], null),new cljs.core.Keyword(null,"scene","scene",1523800415),app.phaser.core.scene], null);
app.phaser.core.create_game = (function app$phaser$core$create_game(){
return (new Phaser.Game(cljs.core.clj__GT_js(app.phaser.core.config)));
});
app.phaser.core.app = (function app$phaser$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Amazing Game"], null);
});

//# sourceMappingURL=app.phaser.core.js.map
