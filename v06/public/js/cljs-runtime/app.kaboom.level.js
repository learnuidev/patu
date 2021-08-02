goog.provide('app.kaboom.level');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
app.kaboom.level.create_if_not_exists = (function app$kaboom$level$create_if_not_exists(id){
var temp__5733__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5733__auto__)){
var canvas = temp__5733__auto__;
return canvas;
} else {
var new_canvas = document.createElement("canvas");
(new_canvas.id = id);

document.body.appendChild(new_canvas);

return new_canvas;
}
});

/**
 * @interface
 */
app.kaboom.level.ILifeCycle = function(){};


/**
 * IKaboom protocol abstraction
 * @interface
 */
app.kaboom.level.IKaboom = function(){};

var app$kaboom$level$IKaboom$text$dyn_65552 = (function (this$,value,font_size){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.text[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4429__auto__.call(null,this$,value,font_size));
} else {
var m__4426__auto__ = (app.kaboom.level.text["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4426__auto__.call(null,this$,value,font_size));
} else {
throw cljs.core.missing_protocol("IKaboom.text",this$);
}
}
});
app.kaboom.level.text = (function app$kaboom$level$text(this$,value,font_size){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$text$arity$3 == null)))))){
return this$.app$kaboom$level$IKaboom$text$arity$3(this$,value,font_size);
} else {
return app$kaboom$level$IKaboom$text$dyn_65552(this$,value,font_size);
}
});

var app$kaboom$level$IKaboom$add$dyn_65553 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.level.add["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add",this$);
}
}
});
/**
 * Add a game object to scene
 */
app.kaboom.level.add = (function app$kaboom$level$add(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$add$arity$2 == null)))))){
return this$.app$kaboom$level$IKaboom$add$arity$2(this$,value);
} else {
return app$kaboom$level$IKaboom$add$dyn_65553(this$,value);
}
});

var app$kaboom$level$IKaboom$pos$dyn_65554 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.level.pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IKaboom.pos",this$);
}
}
});
app.kaboom.level.pos = (function app$kaboom$level$pos(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$pos$arity$3 == null)))))){
return this$.app$kaboom$level$IKaboom$pos$arity$3(this$,x,y);
} else {
return app$kaboom$level$IKaboom$pos$dyn_65554(this$,x,y);
}
});

var app$kaboom$level$IKaboom$scene$dyn_65555 = (function (this$,type,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.scene[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4429__auto__.call(null,this$,type,func));
} else {
var m__4426__auto__ = (app.kaboom.level.scene["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4426__auto__.call(null,this$,type,func));
} else {
throw cljs.core.missing_protocol("IKaboom.scene",this$);
}
}
});
app.kaboom.level.scene = (function app$kaboom$level$scene(this$,type,func){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$scene$arity$3 == null)))))){
return this$.app$kaboom$level$IKaboom$scene$arity$3(this$,type,func);
} else {
return app$kaboom$level$IKaboom$scene$dyn_65555(this$,type,func);
}
});

var app$kaboom$level$IKaboom$start$dyn_65556 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.level.start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.start",this$);
}
}
});
app.kaboom.level.start = (function app$kaboom$level$start(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$start$arity$2 == null)))))){
return this$.app$kaboom$level$IKaboom$start$arity$2(this$,value);
} else {
return app$kaboom$level$IKaboom$start$dyn_65556(this$,value);
}
});

var app$kaboom$level$IKaboom$load_aseprite$dyn_65557 = (function (this$,sprite_id,asset_path_1,asset_path_2){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.load_aseprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path_1,asset_path_2) : m__4429__auto__.call(null,this$,sprite_id,asset_path_1,asset_path_2));
} else {
var m__4426__auto__ = (app.kaboom.level.load_aseprite["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path_1,asset_path_2) : m__4426__auto__.call(null,this$,sprite_id,asset_path_1,asset_path_2));
} else {
throw cljs.core.missing_protocol("IKaboom.load-aseprite",this$);
}
}
});
app.kaboom.level.load_aseprite = (function app$kaboom$level$load_aseprite(this$,sprite_id,asset_path_1,asset_path_2){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$load_aseprite$arity$4 == null)))))){
return this$.app$kaboom$level$IKaboom$load_aseprite$arity$4(this$,sprite_id,asset_path_1,asset_path_2);
} else {
return app$kaboom$level$IKaboom$load_aseprite$dyn_65557(this$,sprite_id,asset_path_1,asset_path_2);
}
});

var app$kaboom$level$IKaboom$load_sprite$dyn_65558 = (function (this$,sprite_id,asset_path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.load_sprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4429__auto__.call(null,this$,sprite_id,asset_path));
} else {
var m__4426__auto__ = (app.kaboom.level.load_sprite["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4426__auto__.call(null,this$,sprite_id,asset_path));
} else {
throw cljs.core.missing_protocol("IKaboom.load-sprite",this$);
}
}
});
/**
 * Description:
 *    - Loads a sprite
 *    - Accepts three arguments
 *       - 1. game       - kaboom instance. object
 *       - 2. sprit-id   - id of the sprite. keyword
 *       - 3. asset-path - public path of the asset. string
 *  Example usage:
 *    - (load-sprite game :player 'assets/player.png')
 */
app.kaboom.level.load_sprite = (function app$kaboom$level$load_sprite(this$,sprite_id,asset_path){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$load_sprite$arity$3 == null)))))){
return this$.app$kaboom$level$IKaboom$load_sprite$arity$3(this$,sprite_id,asset_path);
} else {
return app$kaboom$level$IKaboom$load_sprite$dyn_65558(this$,sprite_id,asset_path);
}
});

var app$kaboom$level$IKaboom$scale$dyn_65559 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.level.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.scale",this$);
}
}
});
app.kaboom.level.scale = (function app$kaboom$level$scale(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$scale$arity$2 == null)))))){
return this$.app$kaboom$level$IKaboom$scale$arity$2(this$,value);
} else {
return app$kaboom$level$IKaboom$scale$dyn_65559(this$,value);
}
});

var app$kaboom$level$IKaboom$add_level$dyn_65560 = (function() {
var G__65561 = null;
var G__65561__2 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.level.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
var G__65561__3 = (function (this$,value,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.level.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4429__auto__.call(null,this$,value,options));
} else {
var m__4426__auto__ = (app.kaboom.level.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4426__auto__.call(null,this$,value,options));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
G__65561 = function(this$,value,options){
switch(arguments.length){
case 2:
return G__65561__2.call(this,this$,value);
case 3:
return G__65561__3.call(this,this$,value,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65561.cljs$core$IFn$_invoke$arity$2 = G__65561__2;
G__65561.cljs$core$IFn$_invoke$arity$3 = G__65561__3;
return G__65561;
})()
;
/**
 * Add a new level
 */
app.kaboom.level.add_level = (function app$kaboom$level$add_level(var_args){
var G__65546 = arguments.length;
switch (G__65546) {
case 2:
return app.kaboom.level.add_level.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.level.add_level.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.level.add_level.cljs$core$IFn$_invoke$arity$2 = (function (this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$add_level$arity$2 == null)))))){
return this$.app$kaboom$level$IKaboom$add_level$arity$2(this$,value);
} else {
return app$kaboom$level$IKaboom$add_level$dyn_65560(this$,value);
}
}));

(app.kaboom.level.add_level.cljs$core$IFn$_invoke$arity$3 = (function (this$,value,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$level$IKaboom$add_level$arity$3 == null)))))){
return this$.app$kaboom$level$IKaboom$add_level$arity$3(this$,value,options);
} else {
return app$kaboom$level$IKaboom$add_level$dyn_65560(this$,value,options);
}
}));

(app.kaboom.level.add_level.cljs$lang$maxFixedArity = 3);



/**
* @constructor
 * @implements {app.kaboom.level.IKaboom}
*/
app.kaboom.level.Kaboom = (function (g){
this.g = g;
});
(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$add$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.add(cljs.core.clj__GT_js(value));
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$text$arity$3 = (function (this$,value,font_size){
var self__ = this;
var this$__$1 = this;
return self__.g.text(value,font_size);
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$scene$arity$3 = (function (_,scene_id,func){
var self__ = this;
var ___$1 = this;
return self__.g.scene(cljs.core.name(scene_id),func);
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$add_level$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value));
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$add_level$arity$3 = (function (_,value,options){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$scale$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.scale(value);
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$load_aseprite$arity$4 = (function (_,sprite_id,asset_path,asset_path_2){
var self__ = this;
var ___$1 = this;
return self__.g.loadAseprite(cljs.core.name(sprite_id),asset_path,asset_path_2);
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$start$arity$2 = (function (_,scene_id){
var self__ = this;
var ___$1 = this;
return self__.g.start(cljs.core.name(scene_id));
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$pos$arity$3 = (function (this$,x,y){
var self__ = this;
var this$__$1 = this;
return self__.g.pos(x,y);
}));

(app.kaboom.level.Kaboom.prototype.app$kaboom$level$IKaboom$load_sprite$arity$3 = (function (_,sprite_id,asset_path){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path);
}));

(app.kaboom.level.Kaboom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","kaboom","js/kaboom",763041571,null)], null))], null);
}));

(app.kaboom.level.Kaboom.cljs$lang$type = true);

(app.kaboom.level.Kaboom.cljs$lang$ctorStr = "app.kaboom.level/Kaboom");

(app.kaboom.level.Kaboom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.level/Kaboom");
}));

/**
 * Positional factory function for app.kaboom.level/Kaboom.
 */
app.kaboom.level.__GT_Kaboom = (function app$kaboom$level$__GT_Kaboom(g){
return (new app.kaboom.level.Kaboom(g));
});

app.kaboom.level.kaboom_BANG_ = (function app$kaboom$level$kaboom_BANG_(var_args){
var G__65548 = arguments.length;
switch (G__65548) {
case 0:
return app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return app.kaboom.level.__GT_Kaboom(kaboom(cljs.core.clj__GT_js(options)));
}));

(app.kaboom.level.kaboom_BANG_.cljs$lang$maxFixedArity = 1);

app.kaboom.level.game = app.kaboom.level.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.querySelector("canvas")], null));
app.kaboom.level.reg_scene = (function app$kaboom$level$reg_scene(id,p__65549){
var map__65550 = p__65549;
var map__65550__$1 = (((((!((map__65550 == null))))?(((((map__65550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65550):map__65550);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65550__$1,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.PersistentVector.EMPTY);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65550__$1,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.PersistentArrayMap.EMPTY);
var txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword(null,"txt","txt",626843688));
var scale_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword(null,"scale-by","scale-by",1048637157));
var posn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword(null,"posn","posn",142930857));
var handler_fn = (function (){
app.kaboom.level.game.app$kaboom$level$IKaboom$add_level$arity$3(null,level,config);

return app.kaboom.level.game.app$kaboom$level$IKaboom$add$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(txt)?app.kaboom.level.game.app$kaboom$level$IKaboom$text$arity$3(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(txt),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(txt)):null),(cljs.core.truth_(scale_by)?app.kaboom.level.game.app$kaboom$level$IKaboom$scale$arity$2(null,scale_by):null),(cljs.core.truth_(posn)?app.kaboom.level.game.app$kaboom$level$IKaboom$pos$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(posn),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(posn)):null)], null));
});
return app.kaboom.level.game.app$kaboom$level$IKaboom$scene$arity$3(null,id,handler_fn);
});
app.kaboom.level.reg_scene(new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40)], null),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["      +++       ","         ","         ","xxxxxxxxx"], null),new cljs.core.Keyword(null,"txt","txt",626843688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),"learnui",new cljs.core.Keyword(null,"size","size",1098693007),(32)], null),new cljs.core.Keyword(null,"scale-by","scale-by",1048637157),(1),new cljs.core.Keyword(null,"posn","posn",142930857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null));
app.kaboom.level.app = (function app$kaboom$level$app(){
return app.kaboom.level.game.app$kaboom$level$IKaboom$start$arity$2(null,new cljs.core.Keyword(null,"main","main",-2117802661));
});

//# sourceMappingURL=app.kaboom.level.js.map
