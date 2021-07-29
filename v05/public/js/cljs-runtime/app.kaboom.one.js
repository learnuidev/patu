goog.provide('app.kaboom.one');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');

/**
 * @interface
 */
app.kaboom.one.ILifeCycle = function(){};


/**
 * IKaboom protocol abstraction
 * @interface
 */
app.kaboom.one.IKaboom = function(){};

var app$kaboom$one$IKaboom$text$dyn_29257 = (function (this$,value,font_size){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.text[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4429__auto__.call(null,this$,value,font_size));
} else {
var m__4426__auto__ = (app.kaboom.one.text["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4426__auto__.call(null,this$,value,font_size));
} else {
throw cljs.core.missing_protocol("IKaboom.text",this$);
}
}
});
app.kaboom.one.text = (function app$kaboom$one$text(this$,value,font_size){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$text$arity$3 == null)))))){
return this$.app$kaboom$one$IKaboom$text$arity$3(this$,value,font_size);
} else {
return app$kaboom$one$IKaboom$text$dyn_29257(this$,value,font_size);
}
});

var app$kaboom$one$IKaboom$add$dyn_29258 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.one.add["_"]);
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
app.kaboom.one.add = (function app$kaboom$one$add(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$add$arity$2 == null)))))){
return this$.app$kaboom$one$IKaboom$add$arity$2(this$,value);
} else {
return app$kaboom$one$IKaboom$add$dyn_29258(this$,value);
}
});

var app$kaboom$one$IKaboom$pos$dyn_29259 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.one.pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IKaboom.pos",this$);
}
}
});
app.kaboom.one.pos = (function app$kaboom$one$pos(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$pos$arity$3 == null)))))){
return this$.app$kaboom$one$IKaboom$pos$arity$3(this$,x,y);
} else {
return app$kaboom$one$IKaboom$pos$dyn_29259(this$,x,y);
}
});

var app$kaboom$one$IKaboom$scene$dyn_29260 = (function (this$,type,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.scene[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4429__auto__.call(null,this$,type,func));
} else {
var m__4426__auto__ = (app.kaboom.one.scene["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4426__auto__.call(null,this$,type,func));
} else {
throw cljs.core.missing_protocol("IKaboom.scene",this$);
}
}
});
app.kaboom.one.scene = (function app$kaboom$one$scene(this$,type,func){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$scene$arity$3 == null)))))){
return this$.app$kaboom$one$IKaboom$scene$arity$3(this$,type,func);
} else {
return app$kaboom$one$IKaboom$scene$dyn_29260(this$,type,func);
}
});

var app$kaboom$one$IKaboom$start$dyn_29261 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.one.start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.start",this$);
}
}
});
app.kaboom.one.start = (function app$kaboom$one$start(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$start$arity$2 == null)))))){
return this$.app$kaboom$one$IKaboom$start$arity$2(this$,value);
} else {
return app$kaboom$one$IKaboom$start$dyn_29261(this$,value);
}
});

var app$kaboom$one$IKaboom$load_sprite$dyn_29262 = (function (this$,sprite_id,asset_path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.load_sprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4429__auto__.call(null,this$,sprite_id,asset_path));
} else {
var m__4426__auto__ = (app.kaboom.one.load_sprite["_"]);
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
app.kaboom.one.load_sprite = (function app$kaboom$one$load_sprite(this$,sprite_id,asset_path){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$load_sprite$arity$3 == null)))))){
return this$.app$kaboom$one$IKaboom$load_sprite$arity$3(this$,sprite_id,asset_path);
} else {
return app$kaboom$one$IKaboom$load_sprite$dyn_29262(this$,sprite_id,asset_path);
}
});

var app$kaboom$one$IKaboom$scale$dyn_29263 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.one.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.scale",this$);
}
}
});
app.kaboom.one.scale = (function app$kaboom$one$scale(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$scale$arity$2 == null)))))){
return this$.app$kaboom$one$IKaboom$scale$arity$2(this$,value);
} else {
return app$kaboom$one$IKaboom$scale$dyn_29263(this$,value);
}
});

var app$kaboom$one$IKaboom$add_level$dyn_29264 = (function() {
var G__29265 = null;
var G__29265__2 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.one.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
var G__29265__3 = (function (this$,value,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.one.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4429__auto__.call(null,this$,value,options));
} else {
var m__4426__auto__ = (app.kaboom.one.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4426__auto__.call(null,this$,value,options));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
G__29265 = function(this$,value,options){
switch(arguments.length){
case 2:
return G__29265__2.call(this,this$,value);
case 3:
return G__29265__3.call(this,this$,value,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29265.cljs$core$IFn$_invoke$arity$2 = G__29265__2;
G__29265.cljs$core$IFn$_invoke$arity$3 = G__29265__3;
return G__29265;
})()
;
/**
 * Add a new level
 */
app.kaboom.one.add_level = (function app$kaboom$one$add_level(var_args){
var G__29250 = arguments.length;
switch (G__29250) {
case 2:
return app.kaboom.one.add_level.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.one.add_level.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.one.add_level.cljs$core$IFn$_invoke$arity$2 = (function (this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$add_level$arity$2 == null)))))){
return this$.app$kaboom$one$IKaboom$add_level$arity$2(this$,value);
} else {
return app$kaboom$one$IKaboom$add_level$dyn_29264(this$,value);
}
}));

(app.kaboom.one.add_level.cljs$core$IFn$_invoke$arity$3 = (function (this$,value,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$one$IKaboom$add_level$arity$3 == null)))))){
return this$.app$kaboom$one$IKaboom$add_level$arity$3(this$,value,options);
} else {
return app$kaboom$one$IKaboom$add_level$dyn_29264(this$,value,options);
}
}));

(app.kaboom.one.add_level.cljs$lang$maxFixedArity = 3);



/**
* @constructor
 * @implements {app.kaboom.one.IKaboom}
*/
app.kaboom.one.Kaboom = (function (g){
this.g = g;
});
(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$text$arity$3 = (function (this$,value,font_size){
var self__ = this;
var this$__$1 = this;
return self__.g.text(value,font_size);
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$pos$arity$3 = (function (this$,x,y){
var self__ = this;
var this$__$1 = this;
return self__.g.pos(x,y);
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$add$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.add(cljs.core.clj__GT_js(value));
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$scene$arity$3 = (function (_,scene_id,func){
var self__ = this;
var ___$1 = this;
return self__.g.scene(cljs.core.name(scene_id),func);
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$start$arity$2 = (function (_,scene_id){
var self__ = this;
var ___$1 = this;
return self__.g.start(cljs.core.name(scene_id));
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$load_sprite$arity$3 = (function (_,sprite_id,asset_path){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path);
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$scale$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.scale(value);
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$add_level$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value));
}));

(app.kaboom.one.Kaboom.prototype.app$kaboom$one$IKaboom$add_level$arity$3 = (function (_,value,options){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
}));

(app.kaboom.one.Kaboom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","kaboom","js/kaboom",763041571,null)], null))], null);
}));

(app.kaboom.one.Kaboom.cljs$lang$type = true);

(app.kaboom.one.Kaboom.cljs$lang$ctorStr = "app.kaboom.one/Kaboom");

(app.kaboom.one.Kaboom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.one/Kaboom");
}));

/**
 * Positional factory function for app.kaboom.one/Kaboom.
 */
app.kaboom.one.__GT_Kaboom = (function app$kaboom$one$__GT_Kaboom(g){
return (new app.kaboom.one.Kaboom(g));
});

app.kaboom.one.div_QMARK_ = (function app$kaboom$one$div_QMARK_(element){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(HTMLDivElement.prototype,element.__proto__);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Symbol("app.kaboom.one","div?","app.kaboom.one/div?",-1268210553,null),app.kaboom.one.div_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","scale","kaboom/scale",-1504753688),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboom.one","kaboom","app.kaboom.one/kaboom",385615229),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29251){
return cljs.core.map_QMARK_(G__29251);
})], null),(function (G__29251){
return cljs.core.map_QMARK_(G__29251);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null)])));
app.kaboom.one.kaboom_BANG_ = (function app$kaboom$one$kaboom_BANG_(var_args){
var G__29253 = arguments.length;
switch (G__29253) {
case 0:
return app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return app.kaboom.one.__GT_Kaboom(kaboom(cljs.core.clj__GT_js(options)));
}));

(app.kaboom.one.kaboom_BANG_.cljs$lang$maxFixedArity = 1);

app.kaboom.one.game = app.kaboom.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app")], null));
app.kaboom.one.reg_scene = (function app$kaboom$one$reg_scene(id,p__29254){
var map__29255 = p__29254;
var map__29255__$1 = (((((!((map__29255 == null))))?(((((map__29255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29255):map__29255);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29255__$1,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.PersistentVector.EMPTY);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29255__$1,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.PersistentArrayMap.EMPTY);
var txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,new cljs.core.Keyword(null,"txt","txt",626843688));
var scale_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,new cljs.core.Keyword(null,"scale-by","scale-by",1048637157));
var posn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,new cljs.core.Keyword(null,"posn","posn",142930857));
var handler_fn = (function (){
app.kaboom.one.game.app$kaboom$one$IKaboom$add_level$arity$3(null,level,config);

return app.kaboom.one.game.app$kaboom$one$IKaboom$add$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(txt)?app.kaboom.one.game.app$kaboom$one$IKaboom$text$arity$3(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(txt),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(txt)):null),(cljs.core.truth_(scale_by)?app.kaboom.one.game.app$kaboom$one$IKaboom$scale$arity$2(null,scale_by):null),(cljs.core.truth_(posn)?app.kaboom.one.game.app$kaboom$one$IKaboom$pos$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(posn),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(posn)):null)], null));
});
return app.kaboom.one.game.app$kaboom$one$IKaboom$scene$arity$3(null,id,handler_fn);
});
app.kaboom.one.reg_scene(new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40)], null),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   +++   ","         ","         ","xxxxxxxxx"], null),new cljs.core.Keyword(null,"txt","txt",626843688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),"KaboomJS",new cljs.core.Keyword(null,"size","size",1098693007),(32)], null),new cljs.core.Keyword(null,"scale-by","scale-by",1048637157),(1),new cljs.core.Keyword(null,"posn","posn",142930857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null));
app.kaboom.one.app = (function app$kaboom$one$app(){
return app.kaboom.one.game.app$kaboom$one$IKaboom$start$arity$2(null,new cljs.core.Keyword(null,"main","main",-2117802661));
});

//# sourceMappingURL=app.kaboom.one.js.map
