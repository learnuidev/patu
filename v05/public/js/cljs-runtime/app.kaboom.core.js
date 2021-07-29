goog.provide('app.kaboom.core');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('cljs.spec.alpha');

/**
 * @interface
 */
app.kaboom.core.ILifeCycle = function(){};


/**
 * IKaboom protocol abstraction
 * @interface
 */
app.kaboom.core.IKaboom = function(){};

var app$kaboom$core$IKaboom$text$dyn_28857 = (function (this$,value,font_size){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.text[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4429__auto__.call(null,this$,value,font_size));
} else {
var m__4426__auto__ = (app.kaboom.core.text["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4426__auto__.call(null,this$,value,font_size));
} else {
throw cljs.core.missing_protocol("IKaboom.text",this$);
}
}
});
app.kaboom.core.text = (function app$kaboom$core$text(this$,value,font_size){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$text$arity$3 == null)))))){
return this$.app$kaboom$core$IKaboom$text$arity$3(this$,value,font_size);
} else {
return app$kaboom$core$IKaboom$text$dyn_28857(this$,value,font_size);
}
});

var app$kaboom$core$IKaboom$add$dyn_28858 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.core.add["_"]);
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
app.kaboom.core.add = (function app$kaboom$core$add(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$add$arity$2 == null)))))){
return this$.app$kaboom$core$IKaboom$add$arity$2(this$,value);
} else {
return app$kaboom$core$IKaboom$add$dyn_28858(this$,value);
}
});

var app$kaboom$core$IKaboom$pos$dyn_28859 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.core.pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IKaboom.pos",this$);
}
}
});
app.kaboom.core.pos = (function app$kaboom$core$pos(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$pos$arity$3 == null)))))){
return this$.app$kaboom$core$IKaboom$pos$arity$3(this$,x,y);
} else {
return app$kaboom$core$IKaboom$pos$dyn_28859(this$,x,y);
}
});

var app$kaboom$core$IKaboom$scene$dyn_28860 = (function (this$,type,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.scene[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4429__auto__.call(null,this$,type,func));
} else {
var m__4426__auto__ = (app.kaboom.core.scene["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4426__auto__.call(null,this$,type,func));
} else {
throw cljs.core.missing_protocol("IKaboom.scene",this$);
}
}
});
app.kaboom.core.scene = (function app$kaboom$core$scene(this$,type,func){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$scene$arity$3 == null)))))){
return this$.app$kaboom$core$IKaboom$scene$arity$3(this$,type,func);
} else {
return app$kaboom$core$IKaboom$scene$dyn_28860(this$,type,func);
}
});

var app$kaboom$core$IKaboom$start$dyn_28867 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.core.start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.start",this$);
}
}
});
app.kaboom.core.start = (function app$kaboom$core$start(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$start$arity$2 == null)))))){
return this$.app$kaboom$core$IKaboom$start$arity$2(this$,value);
} else {
return app$kaboom$core$IKaboom$start$dyn_28867(this$,value);
}
});

var app$kaboom$core$IKaboom$load_sprite$dyn_28868 = (function (this$,sprite_id,asset_path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.load_sprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4429__auto__.call(null,this$,sprite_id,asset_path));
} else {
var m__4426__auto__ = (app.kaboom.core.load_sprite["_"]);
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
app.kaboom.core.load_sprite = (function app$kaboom$core$load_sprite(this$,sprite_id,asset_path){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$load_sprite$arity$3 == null)))))){
return this$.app$kaboom$core$IKaboom$load_sprite$arity$3(this$,sprite_id,asset_path);
} else {
return app$kaboom$core$IKaboom$load_sprite$dyn_28868(this$,sprite_id,asset_path);
}
});

var app$kaboom$core$IKaboom$scale$dyn_28871 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.core.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.scale",this$);
}
}
});
app.kaboom.core.scale = (function app$kaboom$core$scale(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$scale$arity$2 == null)))))){
return this$.app$kaboom$core$IKaboom$scale$arity$2(this$,value);
} else {
return app$kaboom$core$IKaboom$scale$dyn_28871(this$,value);
}
});

var app$kaboom$core$IKaboom$add_level$dyn_28874 = (function() {
var G__28875 = null;
var G__28875__2 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.core.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
var G__28875__3 = (function (this$,value,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.core.add_level[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4429__auto__.call(null,this$,value,options));
} else {
var m__4426__auto__ = (app.kaboom.core.add_level["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4426__auto__.call(null,this$,value,options));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level",this$);
}
}
});
G__28875 = function(this$,value,options){
switch(arguments.length){
case 2:
return G__28875__2.call(this,this$,value);
case 3:
return G__28875__3.call(this,this$,value,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28875.cljs$core$IFn$_invoke$arity$2 = G__28875__2;
G__28875.cljs$core$IFn$_invoke$arity$3 = G__28875__3;
return G__28875;
})()
;
/**
 * Add a new level
 */
app.kaboom.core.add_level = (function app$kaboom$core$add_level(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 2:
return app.kaboom.core.add_level.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.core.add_level.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.core.add_level.cljs$core$IFn$_invoke$arity$2 = (function (this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$add_level$arity$2 == null)))))){
return this$.app$kaboom$core$IKaboom$add_level$arity$2(this$,value);
} else {
return app$kaboom$core$IKaboom$add_level$dyn_28874(this$,value);
}
}));

(app.kaboom.core.add_level.cljs$core$IFn$_invoke$arity$3 = (function (this$,value,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$core$IKaboom$add_level$arity$3 == null)))))){
return this$.app$kaboom$core$IKaboom$add_level$arity$3(this$,value,options);
} else {
return app$kaboom$core$IKaboom$add_level$dyn_28874(this$,value,options);
}
}));

(app.kaboom.core.add_level.cljs$lang$maxFixedArity = 3);



/**
* @constructor
 * @implements {app.kaboom.core.IKaboom}
*/
app.kaboom.core.Kaboom = (function (g){
this.g = g;
});
(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$text$arity$3 = (function (this$,value,font_size){
var self__ = this;
var this$__$1 = this;
return self__.g.text(value,font_size);
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$pos$arity$3 = (function (this$,x,y){
var self__ = this;
var this$__$1 = this;
return self__.g.pos(x,y);
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$add$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.add(cljs.core.clj__GT_js(value));
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$scene$arity$3 = (function (_,scene_id,func){
var self__ = this;
var ___$1 = this;
return self__.g.scene(cljs.core.name(scene_id),func);
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$start$arity$2 = (function (_,scene_id){
var self__ = this;
var ___$1 = this;
return self__.g.start(cljs.core.name(scene_id));
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$load_sprite$arity$3 = (function (_,sprite_id,asset_path){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path);
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$scale$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.scale(value);
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$add_level$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value));
}));

(app.kaboom.core.Kaboom.prototype.app$kaboom$core$IKaboom$add_level$arity$3 = (function (_,value,options){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
}));

(app.kaboom.core.Kaboom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","kaboom","js/kaboom",763041571,null)], null))], null);
}));

(app.kaboom.core.Kaboom.cljs$lang$type = true);

(app.kaboom.core.Kaboom.cljs$lang$ctorStr = "app.kaboom.core/Kaboom");

(app.kaboom.core.Kaboom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.core/Kaboom");
}));

/**
 * Positional factory function for app.kaboom.core/Kaboom.
 */
app.kaboom.core.__GT_Kaboom = (function app$kaboom$core$__GT_Kaboom(g){
return (new app.kaboom.core.Kaboom(g));
});

app.kaboom.core.div_QMARK_ = (function app$kaboom$core$div_QMARK_(element){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(HTMLDivElement.prototype,element.__proto__);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Symbol("app.kaboom.core","div?","app.kaboom.core/div?",-2071416256,null),app.kaboom.core.div_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","scale","kaboom/scale",-1504753688),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboom.core","kaboom","app.kaboom.core/kaboom",-1503907002),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28854){
return cljs.core.map_QMARK_(G__28854);
})], null),(function (G__28854){
return cljs.core.map_QMARK_(G__28854);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaboom","canvas","kaboom/canvas",-655598482),new cljs.core.Keyword("kaboom","global","kaboom/global",1504736998),new cljs.core.Keyword("kaboom","width","kaboom/width",-1525590134),new cljs.core.Keyword("kaboom","height","kaboom/height",-117002051),new cljs.core.Keyword("kaboom","clearColor","kaboom/clearColor",1894466400),new cljs.core.Keyword("kaboom","fullScreen","kaboom/fullScreen",1274491679)], null)])));
app.kaboom.core.kaboom_BANG_ = (function app$kaboom$core$kaboom_BANG_(var_args){
var G__28856 = arguments.length;
switch (G__28856) {
case 0:
return app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.kaboom.core","kaboom","app.kaboom.core/kaboom",-1503907002),options)){
return app.kaboom.core.__GT_Kaboom(kaboom(cljs.core.clj__GT_js(options)));
} else {
return console.error(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"Error"], null));
}
}));

(app.kaboom.core.kaboom_BANG_.cljs$lang$maxFixedArity = 1);

app.kaboom.core.init_BANG_ = (function app$kaboom$core$init_BANG_(opts){
return console.log(opts);
});
app.kaboom.core.game = app.kaboom.core.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true], null));
app.kaboom.core.reg_scene = (function app$kaboom$core$reg_scene(id,handler_fn){
return app.kaboom.core.scene(app.kaboom.core.game,id,handler_fn);
});
app.kaboom.core.reg_scene(new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
var level = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   +++   ","         ","         ","xxxxxxxxx"], null);
var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40)], null);
app.kaboom.core.add_level(app.kaboom.core.game,level,config);

return app.kaboom.core.add(app.kaboom.core.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.core.text(app.kaboom.core.game,"KaboomCLJS",(32)),app.kaboom.core.scale(app.kaboom.core.game,(1)),app.kaboom.core.pos(app.kaboom.core.game,(100),(100))], null));
}));
app.kaboom.core.app = (function app$kaboom$core$app(){
return app.kaboom.core.start(app.kaboom.core.game,new cljs.core.Keyword(null,"main","main",-2117802661));
});

//# sourceMappingURL=app.kaboom.core.js.map
