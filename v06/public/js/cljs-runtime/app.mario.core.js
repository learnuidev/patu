goog.provide('app.mario.core');
goog.require('cljs.core');
var module$node_modules$Phaser$src$phaser=shadow.js.require("module$node_modules$Phaser$src$phaser", {});
app.mario.core.PLAYER_SPEED = (150);
app.mario.core.JUMP_SPEED = ((-1) * (600));
if((typeof app !== 'undefined') && (typeof app.mario !== 'undefined') && (typeof app.mario.core !== 'undefined') && (typeof app.mario.core.Scene !== 'undefined')){
} else {
app.mario.core.Scene = module$node_modules$Phaser$src$phaser.Scene;
}
if((typeof app !== 'undefined') && (typeof app.mario !== 'undefined') && (typeof app.mario.core !== 'undefined') && (typeof app.mario.core.Game !== 'undefined')){
} else {
app.mario.core.Game = module$node_modules$Phaser$src$phaser.Game;
}
app.mario.core.load_image = (function app$mario$core$load_image(this$,name,property){
return this$.load.image(name,property);
});
app.mario.core.load_spritesheet = (function app$mario$core$load_spritesheet(this$,name,property,options){
return this$.load.spritesheet(name,property,cljs.core.clj__GT_js(options));
});
app.mario.core.add_sprite = (function app$mario$core$add_sprite(this$,p__26699){
var vec__26700 = p__26699;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(2),null);
return this$.add.sprite(x,y,name);
});
if((typeof app !== 'undefined') && (typeof app.mario !== 'undefined') && (typeof app.mario.core !== 'undefined') && (typeof app.mario.core.scene !== 'undefined')){
} else {
app.mario.core.scene = ({});
}
app.mario.core.init_BANG_ = (function app$mario$core$init_BANG_(){
var this$ = this;
return null;
});
(app.mario.core.scene.init = app.mario.core.init_BANG_);
app.mario.core.preload_BANG_ = (function app$mario$core$preload_BANG_(){
var this$ = this;
app.mario.core.load_image(this$,"ground","assets/mario/images/ground.png");

app.mario.core.load_image(this$,"platform","assets/mario/images/platform.png");

app.mario.core.load_image(this$,"block","assets/mario/images/block.png");

app.mario.core.load_image(this$,"goal","assets/mario/images/gorilla3.png");

app.mario.core.load_image(this$,"barrel","assets/mario/images/barrel.png");

app.mario.core.load_spritesheet(this$,"player","assets/mario/images/player_spritesheet.png",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"frameWidth","frameWidth",1635752449),(28),new cljs.core.Keyword(null,"frameHeight","frameHeight",-1895813556),(30),new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"spacing","spacing",204422175),(1)], null));

return app.mario.core.load_spritesheet(this$,"fire","assets/mario/images/fire_spritesheet.png",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"frameWidth","frameWidth",1635752449),(20),new cljs.core.Keyword(null,"frameHeight","frameHeight",-1895813556),(21),new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"spacing","spacing",204422175),(1)], null));
});
(app.mario.core.scene.preload = app.mario.core.preload_BANG_);
app.mario.core.add_group = (function app$mario$core$add_group(this$){
var platforms = this$.add.group();
return (this$.platforms = platforms);
});
app.mario.core.add_ground = (function app$mario$core$add_ground(this$){
var ground = this$.add.sprite((180),(604),"ground");
this$.physics.add.existing(ground,true);

return this$.platforms.add(ground);
});
app.mario.core.add_platform = (function app$mario$core$add_platform(this$){
var platform = this$.add.tileSprite((180),(500),((3) * (36)),((1) * (30)),"block");
this$.physics.add.existing(platform,true);

return this$.platforms.add(platform);
});
app.mario.core.add_player = (function app$mario$core$add_player(this$){
var player = this$.add.sprite((180),(400),"player",(3));
(this$.player = player);

return this$.physics.add.existing(player,false);
});
app.mario.core.setup_collider = (function app$mario$core$setup_collider(this$){
return this$.physics.add.collider(this$.player,this$.platforms);
});
/**
 *  - This function prevents the player from getting out of the screen
 *    and falling off.
 *  - This function constrains the player to the game bounds. So that it does not
 *    leave the game world
 *  - This is done by calling setCollideWorldBounds method:
 *     this.player.body.setCollideWorldBounds(true)
 */
app.mario.core.constrain_player = (function app$mario$core$constrain_player(this$){
return this$.player.body.setCollideWorldBounds(true);
});
/**
 * Here we are setting the boundary of the game
 */
app.mario.core.set_world_bounds = (function app$mario$core$set_world_bounds(this$){
(this$.physics.world.bounds.width = (360));

return (this$.physics.world.bounds.height = (700));
});
app.mario.core.animate_player = (function app$mario$core$animate_player(this$){
var frames = this$.anims.generateFrameNames("player",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null)));
return this$.anims.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"walking",new cljs.core.Keyword(null,"frames","frames",1765687497),frames,new cljs.core.Keyword(null,"yoyo","yoyo",-1908744897),true,new cljs.core.Keyword(null,"frameRate","frameRate",456009770),(12),new cljs.core.Keyword(null,"repeat","repeat",832692087),(-1)], null)));
});
app.mario.core.enable_cursor_keys = (function app$mario$core$enable_cursor_keys(this$){
return (this$.cursors = this$.input.keyboard.createCursorKeys());
});
app.mario.core.create_BANG_ = (function app$mario$core$create_BANG_(){

var this$ = this;
app.mario.core.set_world_bounds(this$);

app.mario.core.add_group(this$);

app.mario.core.add_ground(this$);

app.mario.core.add_platform(this$);

app.mario.core.add_player(this$);

app.mario.core.setup_collider(this$);

app.mario.core.animate_player(this$);

app.mario.core.constrain_player(this$);

return app.mario.core.enable_cursor_keys(this$);
});
(app.mario.core.scene.create = app.mario.core.create_BANG_);
app.mario.core.set_player_velocity_x = (function app$mario$core$set_player_velocity_x(this$,value){
return this$.player.body.setVelocityX(value);
});
app.mario.core.set_player_velocity_y = (function app$mario$core$set_player_velocity_y(this$,value){
return this$.player.body.setVelocityY(value);
});
app.mario.core.flip_player = (function app$mario$core$flip_player(this$,bool){
return (this$.player.flipX = bool);
});
app.mario.core.is_walking_QMARK_ = (function app$mario$core$is_walking_QMARK_(this$){
return this$.player.anims.isPlaying;
});
app.mario.core.start_walking = (function app$mario$core$start_walking(this$){
return this$.player.anims.play("walking");
});
app.mario.core.stop_walking = (function app$mario$core$stop_walking(this$){
return this$.player.anims.stop("walking");
});
app.mario.core.move_left = (function app$mario$core$move_left(this$){
app.mario.core.set_player_velocity_x(this$,((-1) * app.mario.core.PLAYER_SPEED));

app.mario.core.flip_player(this$,false);

if(cljs.core.truth_(app.mario.core.is_walking_QMARK_(this$))){
return null;
} else {
return app.mario.core.start_walking(this$);
}
});
app.mario.core.move_right = (function app$mario$core$move_right(this$){
app.mario.core.set_player_velocity_x(this$,app.mario.core.PLAYER_SPEED);

app.mario.core.flip_player(this$,true);

if(cljs.core.truth_(app.mario.core.is_walking_QMARK_(this$))){
return null;
} else {
return app.mario.core.start_walking(this$);
}
});
app.mario.core.set_player_frame = (function app$mario$core$set_player_frame(this$,value){
return this$.player.setFrame(value);
});
app.mario.core.stop_player = (function app$mario$core$stop_player(this$){
app.mario.core.set_player_velocity_x(this$,(0));

app.mario.core.stop_walking(this$);

return app.mario.core.set_player_frame(this$,(3));
});
app.mario.core.handle_movement = (function app$mario$core$handle_movement(this$){
var left_pressed_QMARK_ = this$.cursors.left.isDown;
var right_pressed_QMARK_ = this$.cursors.right.isDown;
var stopped_QMARK_ = ((cljs.core.not(left_pressed_QMARK_)) && (cljs.core.not(right_pressed_QMARK_)));
if(cljs.core.truth_(left_pressed_QMARK_)){
app.mario.core.move_left(this$);
} else {
}

if(cljs.core.truth_(right_pressed_QMARK_)){
app.mario.core.move_right(this$);
} else {
}

if(stopped_QMARK_){
return app.mario.core.stop_player(this$);
} else {
return null;
}
});
/**
 * If the user has pressed either spacebar or up key then we make the player
 *   jump. But how do we achieve the 'jump'
 *  - 1. We give the player a velocity in Y
 *  - 2. We stop the walking animation
 *  - 3. Change frame (we will use 2)
 */
app.mario.core.handle_jump = (function app$mario$core$handle_jump(this$){
var space_QMARK_ = this$.cursors.space.isDown;
var up_QMARK_ = this$.cursors.up.isDown;
if(cljs.core.truth_((function (){var or__4126__auto__ = space_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return up_QMARK_;
}
})())){
app.mario.core.set_player_velocity_y(this$,app.mario.core.JUMP_SPEED);

app.mario.core.stop_walking(this$);

return app.mario.core.set_player_frame(this$,(2));
} else {
return null;
}
});
app.mario.core.update_BANG_ = (function app$mario$core$update_BANG_(){
var this$ = this;
app.mario.core.handle_movement(this$);

return app.mario.core.handle_jump(this$);
});
(app.mario.core.scene.update = app.mario.core.update_BANG_);
app.mario.core.config = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$Phaser$src$phaser.AUTO,new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(640),new cljs.core.Keyword(null,"scene","scene",1523800415),app.mario.core.scene,new cljs.core.Keyword(null,"title","title",636505583),"Mario Kong",new cljs.core.Keyword(null,"pixelArt","pixelArt",-636167759),false,new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"arcade",new cljs.core.Keyword(null,"arcade","arcade",-346009095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(1000)], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),true], null)], null)], null));
app.mario.core.init_game = (function app$mario$core$init_game(){
return (new app.mario.core.Game(app.mario.core.config));
});
app.mario.core.app = (function app$mario$core$app(){
return app.mario.core.init_game();
});

//# sourceMappingURL=app.mario.core.js.map
