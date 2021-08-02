goog.provide('app.kaboom.ourcade.two');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
var module$node_modules$matter_js$build$matter=shadow.js.require("module$node_modules$matter_js$build$matter", {});
app.kaboom.ourcade.two.start_BANG_ = (function app$kaboom$ourcade$two$start_BANG_(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
app.kaboom.ourcade.two.play = (function app$kaboom$ourcade$two$play(player,animation_id){
return player.play(cljs.core.name(animation_id));
});
app.kaboom.ourcade.two.scale_x_BANG_ = (function app$kaboom$ourcade$two$scale_x_BANG_(player,pos,value){
return (player.scale.x = value);
});
app.kaboom.ourcade.two.scale_y_BANG_ = (function app$kaboom$ourcade$two$scale_y_BANG_(player,pos,value){
return (player.scale.y = value);
});
app.kaboom.ourcade.two.move = (function app$kaboom$ourcade$two$move(player,x,y){
return player.move(x,y);
});
app.kaboom.ourcade.two.jump = (function app$kaboom$ourcade$two$jump(player,value){
return player.jump(value);
});
app.kaboom.ourcade.two.action = (function app$kaboom$ourcade$two$action(player,handler){
return player.action(handler);
});
app.kaboom.ourcade.two.pos = (function app$kaboom$ourcade$two$pos(player){
return player.pos;
});
app.kaboom.ourcade.two.add_BANG_ = (function app$kaboom$ourcade$two$add_BANG_(game,value){
return game.add(cljs.core.clj__GT_js(value));
});
app.kaboom.ourcade.two.width = (function app$kaboom$ourcade$two$width(this$){
return this$.width();
});
app.kaboom.ourcade.two.height = (function app$kaboom$ourcade$two$height(this$){
return this$.height();
});
app.kaboom.ourcade.two.pos_BANG_ = (function app$kaboom$ourcade$two$pos_BANG_(this$,x,y){
return this$.pos(x,y);
});
app.kaboom.ourcade.two.text_BANG_ = (function app$kaboom$ourcade$two$text_BANG_(game,value,font_size){
return game.text(value,font_size);
});
app.kaboom.ourcade.two.load_sprite_BANG_ = (function app$kaboom$ourcade$two$load_sprite_BANG_(var_args){
var G__57288 = arguments.length;
switch (G__57288) {
case 3:
return app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (game,sprite_id,asset_path){
return app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$3(game,sprite_id,asset_path);
}));

(app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (game,sprite_id,asset_path,options){
return game.loadSprite(cljs.core.name(sprite_id),asset_path,cljs.core.clj__GT_js(options));
}));

(app.kaboom.ourcade.two.load_sprite_BANG_.cljs$lang$maxFixedArity = 4);

app.kaboom.ourcade.two.scene_BANG_ = (function app$kaboom$ourcade$two$scene_BANG_(game,scene_id,func){
return game.scene(cljs.core.name(scene_id),func);
});
app.kaboom.ourcade.two.add_level_BANG_ = (function app$kaboom$ourcade$two$add_level_BANG_(g,value,options){
return g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
});
app.kaboom.ourcade.two.origin_BANG_ = (function app$kaboom$ourcade$two$origin_BANG_(g,value){
return g.origin(cljs.core.name(value));
});
app.kaboom.ourcade.two.go_BANG_ = (function app$kaboom$ourcade$two$go_BANG_(g,value){
return g.go(cljs.core.name(value));
});
app.kaboom.ourcade.two.rect_BANG_ = (function app$kaboom$ourcade$two$rect_BANG_(g,width,height){
return g.rect(width,height);
});
app.kaboom.ourcade.two.body = (function app$kaboom$ourcade$two$body(g){
return g.body();
});
app.kaboom.ourcade.two.solid = (function app$kaboom$ourcade$two$solid(g){
return g.solid();
});
app.kaboom.ourcade.two.sprite = (function app$kaboom$ourcade$two$sprite(g,sprite_id,options){
return g.sprite(cljs.core.name(sprite_id),cljs.core.clj__GT_js(options));
});
app.kaboom.ourcade.two.key_press = (function app$kaboom$ourcade$two$key_press(g,id,handler){
return g.keyPress(cljs.core.name(id),handler);
});
app.kaboom.ourcade.two.key_release = (function app$kaboom$ourcade$two$key_release(g,id,handler){
return g.keyRelease(cljs.core.name(id),handler);
});
app.kaboom.ourcade.two.key_down = (function app$kaboom$ourcade$two$key_down(g,id,handler){
return g.keyDown(cljs.core.name(id),handler);
});
app.kaboom.ourcade.two.cam_pos = (function app$kaboom$ourcade$two$cam_pos(g,value){
return g.camPos(value);
});
app.kaboom.ourcade.two.vec2 = (function app$kaboom$ourcade$two$vec2(g,value){
return g.vec2(value);
});
app.kaboom.ourcade.two.scale_BANG_ = (function app$kaboom$ourcade$two$scale_BANG_(game,value){
return game.scale(value);
});
app.kaboom.ourcade.two.kaboom_BANG_ = (function app$kaboom$ourcade$two$kaboom_BANG_(var_args){
var G__57290 = arguments.length;
switch (G__57290) {
case 0:
return app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return kaboom(cljs.core.clj__GT_js(options));
}));

(app.kaboom.ourcade.two.kaboom_BANG_.cljs$lang$maxFixedArity = 1);

app.kaboom.ourcade.two.game = app.kaboom.ourcade.two.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"width","width",-384071477),(320),new cljs.core.Keyword(null,"height","height",1025178622),(240),new cljs.core.Keyword(null,"scale","scale",-230427353),2.5,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.querySelector("canvas")], null));
app.kaboom.ourcade.two.reg_scene = (function app$kaboom$ourcade$two$reg_scene(id,handler){
return app.kaboom.ourcade.two.scene_BANG_(app.kaboom.ourcade.two.game,id,(function (){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(app.kaboom.ourcade.two.game) : handler.call(null,app.kaboom.ourcade.two.game));
}));
});
app.kaboom.ourcade.two.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.ourcade.two.game,new cljs.core.Keyword(null,"tiles","tiles",178505240),"assets/platformer/Tilemap/monochrome_tilemap.png",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(20),new cljs.core.Keyword(null,"sliceY","sliceY",1476268871),(20),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(300),new cljs.core.Keyword(null,"to","to",192099007),(300)], null),new cljs.core.Keyword(null,"run","run",-1821166653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(301),new cljs.core.Keyword(null,"to","to",192099007),(302)], null)], null)], null));
app.kaboom.ourcade.two.level = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","    ===                                     ","                                            "," >   +                                     <","============================================"], null);
app.kaboom.ourcade.two.biggify_player = (function app$kaboom$ourcade$two$biggify_player(){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pressed?","pressed?",-473083504),false], null));
var biggify = (function (player){
(player.scale = app.kaboom.ourcade.two.game.vec2((2)));

return console.warn("Please run init first");
});
var smallify = (function (player){
(player.scale = app.kaboom.ourcade.two.vec2(app.kaboom.ourcade.two.game,(1)));

return console.warn("Please run init first");
});
var update = (function (player){
return cljs.core.List.EMPTY;
});
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"biggify","biggify",-1418467977),(function (){
var player = this;
return biggify(player);
}),new cljs.core.Keyword(null,"smallify","smallify",1474311556),(function (){
var player = this;
return smallify(player);
}),new cljs.core.Keyword(null,"update","update",1045576396),(function (){
var player = this;
return update(player);
})], null));
});
app.kaboom.ourcade.two.init = (function app$kaboom$ourcade$two$init(entity){
return entity.init(entity);
});
app.kaboom.ourcade.two.component_handler = (function app$kaboom$ourcade$two$component_handler(game){
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.two.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(65)], null)),app.kaboom.ourcade.two.solid(game)], null),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.two.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(92)], null))], null),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.two.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(93)], null))], null)], null);
var player = app.kaboom.ourcade.two.add_BANG_(game,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.two.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation","animation",-1248293244),0.1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(300)], null)),app.kaboom.ourcade.two.pos_BANG_(game,(app.kaboom.ourcade.two.width(game) * 0.5),(app.kaboom.ourcade.two.height(game) * 0.5)),app.kaboom.ourcade.two.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368)),app.kaboom.ourcade.two.scale_BANG_(game,(1)),app.kaboom.ourcade.two.body(game),app.kaboom.ourcade.two.biggify_player()], null));
var times_jumped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.kaboom.ourcade.two.add_level_BANG_(game,app.kaboom.ourcade.two.level,config);

app.kaboom.ourcade.two.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));

app.kaboom.ourcade.two.key_down(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.ourcade.two.move(player,(-100),(0));
}));

app.kaboom.ourcade.two.key_down(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.ourcade.two.move(player,(100),(0));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"b","b",1482224470),(function (){
console.log("PRESSED");

return player.biggify((1000));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"s","s",1705939918),(function (){
console.log("PRESSED");

return player.smallify((1000));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"space","space",348133475),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return app.kaboom.ourcade.two.jump(player,(350));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"up","up",-269712113),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return app.kaboom.ourcade.two.jump(player,(350));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
app.kaboom.ourcade.two.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(-1));

return app.kaboom.ourcade.two.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.two.key_press(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
app.kaboom.ourcade.two.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(1));

return app.kaboom.ourcade.two.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.two.key_release(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.ourcade.two.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

app.kaboom.ourcade.two.key_release(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.ourcade.two.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

return app.kaboom.ourcade.two.action(player,(function (){
return app.kaboom.ourcade.two.cam_pos(game,app.kaboom.ourcade.two.pos(player));
}));
});
app.kaboom.ourcade.two.reg_scene(new cljs.core.Keyword(null,"component","component",1555936782),app.kaboom.ourcade.two.component_handler);
app.kaboom.ourcade.two.reg_scene(new cljs.core.Keyword(null,"main","main",-2117802661),(function (game){
return app.kaboom.ourcade.two.go_BANG_(game,new cljs.core.Keyword(null,"component","component",1555936782));
}));
app.kaboom.ourcade.two.app = (function app$kaboom$ourcade$two$app(){
return app.kaboom.ourcade.two.start_BANG_(app.kaboom.ourcade.two.game,new cljs.core.Keyword(null,"main","main",-2117802661));
});

//# sourceMappingURL=app.kaboom.ourcade.two.js.map
