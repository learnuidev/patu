goog.provide('app.kaboom.old_core');
goog.require('cljs.core');
goog.require('cljs.repl');

/**
 * IKaboom protocol abstraction
 * @interface
 */
app.kaboom.old_core.IKaboom = function(){};

var app$kaboom$old_core$IKaboom$text$dyn_31711 = (function (this$,value,font_size){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.text[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4429__auto__.call(null,this$,value,font_size));
} else {
var m__4426__auto__ = (app.kaboom.old_core.text["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4426__auto__.call(null,this$,value,font_size));
} else {
throw cljs.core.missing_protocol("IKaboom.text",this$);
}
}
});
app.kaboom.old_core.text = (function app$kaboom$old_core$text(this$,value,font_size){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$text$arity$3 == null)))))){
return this$.app$kaboom$old_core$IKaboom$text$arity$3(this$,value,font_size);
} else {
return app$kaboom$old_core$IKaboom$text$dyn_31711(this$,value,font_size);
}
});

var app$kaboom$old_core$IKaboom$add$dyn_31712 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.old_core.add["_"]);
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
app.kaboom.old_core.add = (function app$kaboom$old_core$add(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$add$arity$2 == null)))))){
return this$.app$kaboom$old_core$IKaboom$add$arity$2(this$,value);
} else {
return app$kaboom$old_core$IKaboom$add$dyn_31712(this$,value);
}
});

var app$kaboom$old_core$IKaboom$pos$dyn_31713 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.old_core.pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IKaboom.pos",this$);
}
}
});
app.kaboom.old_core.pos = (function app$kaboom$old_core$pos(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$pos$arity$3 == null)))))){
return this$.app$kaboom$old_core$IKaboom$pos$arity$3(this$,x,y);
} else {
return app$kaboom$old_core$IKaboom$pos$dyn_31713(this$,x,y);
}
});

var app$kaboom$old_core$IKaboom$scene$dyn_31714 = (function (this$,type,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.scene[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4429__auto__.call(null,this$,type,func));
} else {
var m__4426__auto__ = (app.kaboom.old_core.scene["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4426__auto__.call(null,this$,type,func));
} else {
throw cljs.core.missing_protocol("IKaboom.scene",this$);
}
}
});
app.kaboom.old_core.scene = (function app$kaboom$old_core$scene(this$,type,func){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$scene$arity$3 == null)))))){
return this$.app$kaboom$old_core$IKaboom$scene$arity$3(this$,type,func);
} else {
return app$kaboom$old_core$IKaboom$scene$dyn_31714(this$,type,func);
}
});

var app$kaboom$old_core$IKaboom$start$dyn_31715 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.old_core.start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.start",this$);
}
}
});
app.kaboom.old_core.start = (function app$kaboom$old_core$start(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$start$arity$2 == null)))))){
return this$.app$kaboom$old_core$IKaboom$start$arity$2(this$,value);
} else {
return app$kaboom$old_core$IKaboom$start$dyn_31715(this$,value);
}
});

var app$kaboom$old_core$IKaboom$load_sprite$dyn_31716 = (function (this$,sprite_id,asset_path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.load_sprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4429__auto__.call(null,this$,sprite_id,asset_path));
} else {
var m__4426__auto__ = (app.kaboom.old_core.load_sprite["_"]);
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
app.kaboom.old_core.load_sprite = (function app$kaboom$old_core$load_sprite(this$,sprite_id,asset_path){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$load_sprite$arity$3 == null)))))){
return this$.app$kaboom$old_core$IKaboom$load_sprite$arity$3(this$,sprite_id,asset_path);
} else {
return app$kaboom$old_core$IKaboom$load_sprite$dyn_31716(this$,sprite_id,asset_path);
}
});

var app$kaboom$old_core$IKaboom$scale$dyn_31717 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.old_core.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.scale",this$);
}
}
});
app.kaboom.old_core.scale = (function app$kaboom$old_core$scale(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$scale$arity$2 == null)))))){
return this$.app$kaboom$old_core$IKaboom$scale$arity$2(this$,value);
} else {
return app$kaboom$old_core$IKaboom$scale$dyn_31717(this$,value);
}
});

var app$kaboom$old_core$IKaboom$add_level$dyn_31718 = (function() {
var G__31719 = null;
var G__31719__2 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.old_core.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
var G__31719__3 = (function (this$,value,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.old_core.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4429__auto__.call(null,this$,value,options));
} else {
var m__4426__auto__ = (app.kaboom.old_core.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4426__auto__.call(null,this$,value,options));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
G__31719 = function(this$,value,options){
switch(arguments.length){
case 2:
return G__31719__2.call(this,this$,value);
case 3:
return G__31719__3.call(this,this$,value,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31719.cljs$core$IFn$_invoke$arity$2 = G__31719__2;
G__31719.cljs$core$IFn$_invoke$arity$3 = G__31719__3;
return G__31719;
})()
;
/**
 * Add a new level
 */
app.kaboom.old_core.add_level = (function app$kaboom$old_core$add_level(var_args){
var G__31703 = arguments.length;
switch (G__31703) {
case 2:
return app.kaboom.old_core.add_level.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.old_core.add_level.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.old_core.add_level.cljs$core$IFn$_invoke$arity$2 = (function (this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$add_level$arity$2 == null)))))){
return this$.app$kaboom$old_core$IKaboom$add_level$arity$2(this$,value);
} else {
return app$kaboom$old_core$IKaboom$add_level$dyn_31718(this$,value);
}
}));

(app.kaboom.old_core.add_level.cljs$core$IFn$_invoke$arity$3 = (function (this$,value,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$old_core$IKaboom$add_level$arity$3 == null)))))){
return this$.app$kaboom$old_core$IKaboom$add_level$arity$3(this$,value,options);
} else {
return app$kaboom$old_core$IKaboom$add_level$dyn_31718(this$,value,options);
}
}));

(app.kaboom.old_core.add_level.cljs$lang$maxFixedArity = 3);



/**
* @constructor
 * @implements {app.kaboom.old_core.IKaboom}
*/
app.kaboom.old_core.Kaboom = (function (g){
this.g = g;
});
(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$text$arity$3 = (function (this$,value,font_size){
var self__ = this;
var this$__$1 = this;
return self__.g.text(value,font_size);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$pos$arity$3 = (function (this$,x,y){
var self__ = this;
var this$__$1 = this;
return self__.g.pos(x,y);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$add$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.add(cljs.core.clj__GT_js(value));
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$scene$arity$3 = (function (_,scene_id,func){
var self__ = this;
var ___$1 = this;
return self__.g.scene(cljs.core.name(scene_id),func);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$start$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.g.start(cljs.core.name(type));
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$load_sprite$arity$3 = (function (_,sprite_id,asset_path){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$scale$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.scale(value);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$add_level$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(value);
}));

(app.kaboom.old_core.Kaboom.prototype.app$kaboom$old_core$IKaboom$add_level$arity$3 = (function (_,value,options){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
}));

(app.kaboom.old_core.Kaboom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","kaboom","js/kaboom",763041571,null)], null))], null);
}));

(app.kaboom.old_core.Kaboom.cljs$lang$type = true);

(app.kaboom.old_core.Kaboom.cljs$lang$ctorStr = "app.kaboom.old-core/Kaboom");

(app.kaboom.old_core.Kaboom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.old-core/Kaboom");
}));

/**
 * Positional factory function for app.kaboom.old-core/Kaboom.
 */
app.kaboom.old_core.__GT_Kaboom = (function app$kaboom$old_core$__GT_Kaboom(g){
return (new app.kaboom.old_core.Kaboom(g));
});

app.kaboom.old_core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.kaboom.old_core.scenes_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.kaboom.old_core.create_game = (function app$kaboom$old_core$create_game(options){
var game = kaboom(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(options));
return app.kaboom.old_core.__GT_Kaboom(game);
});
app.kaboom.old_core.init_BANG_ = (function app$kaboom$old_core$init_BANG_(opts){
return cljs.core.reset_BANG_(app.kaboom.old_core.game_state,opts);
});
if((typeof app !== 'undefined') && (typeof app.kaboom !== 'undefined') && (typeof app.kaboom.old_core !== 'undefined') && (typeof app.kaboom.old_core.game !== 'undefined')){
} else {
app.kaboom.old_core.game = app.kaboom.old_core.create_game(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app")], null));
}
if((typeof app !== 'undefined') && (typeof app.kaboom !== 'undefined') && (typeof app.kaboom.old_core !== 'undefined') && (typeof app.kaboom.old_core.add_component !== 'undefined')){
} else {
app.kaboom.old_core.add_component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31704 = cljs.core.get_global_hierarchy;
return (fexpr__31704.cljs$core$IFn$_invoke$arity$0 ? fexpr__31704.cljs$core$IFn$_invoke$arity$0() : fexpr__31704.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom.old-core","add-component"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom.old_core.add_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__31705){
var map__31706 = p__31705;
var map__31706__$1 = (((((!((map__31706 == null))))?(((((map__31706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31706):map__31706);
var scale_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31706__$1,new cljs.core.Keyword(null,"scale-to","scale-to",-239238108));
var txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31706__$1,new cljs.core.Keyword(null,"txt","txt",626843688));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31706__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$add$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$text$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(txt),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(txt)),app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$scale$arity$2(null,scale_to),app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$pos$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position))], null));
}));
app.kaboom.old_core.reg_scene = (function app$kaboom$old_core$reg_scene(id,p__31708){
var map__31709 = p__31708;
var map__31709__$1 = (((((!((map__31709 == null))))?(((((map__31709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31709):map__31709);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"config","config",994861415));
var txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"txt","txt",626843688));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scale_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"scale-to","scale-to",-239238108));
return app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$scene$arity$3(null,id,(function (){
app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$add_level$arity$3(null,level,config);

return app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$add$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$text$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(txt),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(txt)),app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$scale$arity$2(null,scale_to),app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$pos$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position))], null));
}));
});
app.kaboom.old_core.reg_component = (function app$kaboom$old_core$reg_component(id,options){
return null;
});
app.kaboom.old_core.start_BANG_ = (function app$kaboom$old_core$start_BANG_(scene_id){
return app.kaboom.old_core.game.app$kaboom$old_core$IKaboom$start$arity$2(null,scene_id);
});

//# sourceMappingURL=app.kaboom.old_core.js.map
