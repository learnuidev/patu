goog.provide('app.kaboomv5.math');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec3');
goog.require('goog.math.Matrix');

/**
 * @interface
 */
app.kaboomv5.math.IColor = function(){};

var app$kaboomv5$math$IColor$lighten$dyn_64514 = (function (this$,a){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.lighten[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4429__auto__.call(null,this$,a));
} else {
var m__4426__auto__ = (app.kaboomv5.math.lighten["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4426__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("IColor.lighten",this$);
}
}
});
app.kaboomv5.math.lighten = (function app$kaboomv5$math$lighten(this$,a){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IColor$lighten$arity$2 == null)))))){
return this$.app$kaboomv5$math$IColor$lighten$arity$2(this$,a);
} else {
return app$kaboomv5$math$IColor$lighten$dyn_64514(this$,a);
}
});

var app$kaboomv5$math$IColor$darken$dyn_64515 = (function (this$,a){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.darken[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4429__auto__.call(null,this$,a));
} else {
var m__4426__auto__ = (app.kaboomv5.math.darken["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4426__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("IColor.darken",this$);
}
}
});
app.kaboomv5.math.darken = (function app$kaboomv5$math$darken(this$,a){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IColor$darken$arity$2 == null)))))){
return this$.app$kaboomv5$math$IColor$darken$arity$2(this$,a);
} else {
return app$kaboomv5$math$IColor$darken$dyn_64515(this$,a);
}
});

var app$kaboomv5$math$IColor$invert$dyn_64516 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.invert[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.invert["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IColor.invert",this$);
}
}
});
app.kaboomv5.math.invert = (function app$kaboomv5$math$invert(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IColor$invert$arity$1 == null)))))){
return this$.app$kaboomv5$math$IColor$invert$arity$1(this$);
} else {
return app$kaboomv5$math$IColor$invert$dyn_64516(this$);
}
});

var app$kaboomv5$math$IColor$dark_QMARK_$dyn_64518 = (function (this$,p){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.dark_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4429__auto__.call(null,this$,p));
} else {
var m__4426__auto__ = (app.kaboomv5.math.dark_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4426__auto__.call(null,this$,p));
} else {
throw cljs.core.missing_protocol("IColor.dark?",this$);
}
}
});
app.kaboomv5.math.dark_QMARK_ = (function app$kaboomv5$math$dark_QMARK_(this$,p){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IColor$dark_QMARK_$arity$2 == null)))))){
return this$.app$kaboomv5$math$IColor$dark_QMARK_$arity$2(this$,p);
} else {
return app$kaboomv5$math$IColor$dark_QMARK_$dyn_64518(this$,p);
}
});

var app$kaboomv5$math$IColor$light_QMARK_$dyn_64519 = (function (this$,p){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.light_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4429__auto__.call(null,this$,p));
} else {
var m__4426__auto__ = (app.kaboomv5.math.light_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4426__auto__.call(null,this$,p));
} else {
throw cljs.core.missing_protocol("IColor.light?",this$);
}
}
});
app.kaboomv5.math.light_QMARK_ = (function app$kaboomv5$math$light_QMARK_(this$,p){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IColor$light_QMARK_$arity$2 == null)))))){
return this$.app$kaboomv5$math$IColor$light_QMARK_$arity$2(this$,p);
} else {
return app$kaboomv5$math$IColor$light_QMARK_$dyn_64519(this$,p);
}
});


/**
 * @interface
 */
app.kaboomv5.math.IVector2 = function(){};

var app$kaboomv5$math$IVector2$add$dyn_64522 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.add["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.add",this$);
}
}
});
app.kaboomv5.math.add = (function app$kaboomv5$math$add(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$add$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$add$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$add$dyn_64522(this$);
}
});

var app$kaboomv5$math$IVector2$subtract$dyn_64526 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.subtract[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.subtract["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.subtract",this$);
}
}
});
app.kaboomv5.math.subtract = (function app$kaboomv5$math$subtract(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$subtract$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$subtract$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$subtract$dyn_64526(this$);
}
});

var app$kaboomv5$math$IVector2$scale_BANG_$dyn_64527 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.scale_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.scale_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.scale!",this$);
}
}
});
app.kaboomv5.math.scale_BANG_ = (function app$kaboomv5$math$scale_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$scale_BANG_$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$scale_BANG_$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$scale_BANG_$dyn_64527(this$);
}
});

var app$kaboomv5$math$IVector2$dist$dyn_64528 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.dist[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.dist["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.dist",this$);
}
}
});
app.kaboomv5.math.dist = (function app$kaboomv5$math$dist(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$dist$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$dist$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$dist$dyn_64528(this$);
}
});

var app$kaboomv5$math$IVector2$len$dyn_64529 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.len[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.len["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.len",this$);
}
}
});
app.kaboomv5.math.len = (function app$kaboomv5$math$len(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$len$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$len$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$len$dyn_64529(this$);
}
});

var app$kaboomv5$math$IVector2$unit$dyn_64531 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.unit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.unit["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.unit",this$);
}
}
});
app.kaboomv5.math.unit = (function app$kaboomv5$math$unit(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$unit$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$unit$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$unit$dyn_64531(this$);
}
});

var app$kaboomv5$math$IVector2$normal$dyn_64533 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.normal",this$);
}
}
});
app.kaboomv5.math.normal = (function app$kaboomv5$math$normal(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$normal$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$normal$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$normal$dyn_64533(this$);
}
});

var app$kaboomv5$math$IVector2$dot$dyn_64534 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.dot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.dot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.dot",this$);
}
}
});
app.kaboomv5.math.dot = (function app$kaboomv5$math$dot(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$dot$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$dot$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$dot$dyn_64534(this$);
}
});

var app$kaboomv5$math$IVector2$angle$dyn_64535 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.angle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.angle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.angle",this$);
}
}
});
app.kaboomv5.math.angle = (function app$kaboomv5$math$angle(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$angle$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$angle$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$angle$dyn_64535(this$);
}
});

var app$kaboomv5$math$IVector2$lerp_BANG_$dyn_64536 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.lerp_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.lerp_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.lerp!",this$);
}
}
});
app.kaboomv5.math.lerp_BANG_ = (function app$kaboomv5$math$lerp_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$lerp_BANG_$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$lerp_BANG_$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$lerp_BANG_$dyn_64536(this$);
}
});

var app$kaboomv5$math$IVector2$to_fixed$dyn_64537 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.to_fixed[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.to_fixed["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.to-fixed",this$);
}
}
});
app.kaboomv5.math.to_fixed = (function app$kaboomv5$math$to_fixed(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$IVector2$to_fixed$arity$1 == null)))))){
return this$.app$kaboomv5$math$IVector2$to_fixed$arity$1(this$);
} else {
return app$kaboomv5$math$IVector2$to_fixed$dyn_64537(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.kaboomv5.math.Color = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.Color.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.Color.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64446,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64450 = k64446;
var G__64450__$1 = (((G__64450 instanceof cljs.core.Keyword))?G__64450.fqn:null);
switch (G__64450__$1) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64446,else__4383__auto__);

}
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64451){
var vec__64452 = p__64451;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64452,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64452,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.Color{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64445){
var self__ = this;
var G__64445__$1 = this;
return (new cljs.core.RecordIter((0),G__64445__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.Color.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (745045664 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64447,other64448){
var self__ = this;
var this64447__$1 = this;
return (((!((other64448 == null)))) && ((this64447__$1.constructor === other64448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64447__$1.r,other64448.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64447__$1.g,other64448.g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64447__$1.b,other64448.b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64447__$1.a,other64448.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64447__$1.__extmap,other64448.__extmap)));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64445){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64455 = cljs.core.keyword_identical_QMARK_;
var expr__64456 = k__4388__auto__;
if(cljs.core.truth_((pred__64455.cljs$core$IFn$_invoke$arity$2 ? pred__64455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),expr__64456) : pred__64455.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__64456)))){
return (new app.kaboomv5.math.Color(G__64445,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64455.cljs$core$IFn$_invoke$arity$2 ? pred__64455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),expr__64456) : pred__64455.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__64456)))){
return (new app.kaboomv5.math.Color(self__.r,G__64445,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64455.cljs$core$IFn$_invoke$arity$2 ? pred__64455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470),expr__64456) : pred__64455.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__64456)))){
return (new app.kaboomv5.math.Color(self__.r,self__.g,G__64445,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64455.cljs$core$IFn$_invoke$arity$2 ? pred__64455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__64456) : pred__64455.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__64456)))){
return (new app.kaboomv5.math.Color(self__.r,self__.g,self__.b,G__64445,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64445),null));
}
}
}
}
}));

(app.kaboomv5.math.Color.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"g","g",1738089905),self__.g,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),self__.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64445){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.Color(self__.r,self__.g,self__.b,self__.a,G__64445,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Color.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.Color.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null);
}));

(app.kaboomv5.math.Color.cljs$lang$type = true);

(app.kaboomv5.math.Color.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math/Color",null,(1),null));
}));

(app.kaboomv5.math.Color.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math/Color");
}));

/**
 * Positional factory function for app.kaboomv5.math/Color.
 */
app.kaboomv5.math.__GT_Color = (function app$kaboomv5$math$__GT_Color(r,g,b,a){
return (new app.kaboomv5.math.Color(r,g,b,a,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math/Color, taking a map of keywords to field values.
 */
app.kaboomv5.math.map__GT_Color = (function app$kaboomv5$math$map__GT_Color(G__64449){
var extmap__4419__auto__ = (function (){var G__64458 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64449,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__64449)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64458);
} else {
return G__64458;
}
})();
return (new app.kaboomv5.math.Color(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__64449),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__64449),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__64449),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__64449),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.kaboomv5.math.Quad = (function (x,y,w,h,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.Quad.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64460,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64464 = k64460;
var G__64464__$1 = (((G__64464 instanceof cljs.core.Keyword))?G__64464.fqn:null);
switch (G__64464__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64460,else__4383__auto__);

}
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64465){
var vec__64466 = p__64465;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64466,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64466,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.Quad{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64459){
var self__ = this;
var G__64459__$1 = this;
return (new cljs.core.RecordIter((0),G__64459__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (402211510 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64461,other64462){
var self__ = this;
var this64461__$1 = this;
return (((!((other64462 == null)))) && ((this64461__$1.constructor === other64462.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64461__$1.x,other64462.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64461__$1.y,other64462.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64461__$1.w,other64462.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64461__$1.h,other64462.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64461__$1.__extmap,other64462.__extmap)));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64459){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64469 = cljs.core.keyword_identical_QMARK_;
var expr__64470 = k__4388__auto__;
if(cljs.core.truth_((pred__64469.cljs$core$IFn$_invoke$arity$2 ? pred__64469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__64470) : pred__64469.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__64470)))){
return (new app.kaboomv5.math.Quad(G__64459,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64469.cljs$core$IFn$_invoke$arity$2 ? pred__64469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__64470) : pred__64469.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__64470)))){
return (new app.kaboomv5.math.Quad(self__.x,G__64459,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64469.cljs$core$IFn$_invoke$arity$2 ? pred__64469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__64470) : pred__64469.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__64470)))){
return (new app.kaboomv5.math.Quad(self__.x,self__.y,G__64459,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64469.cljs$core$IFn$_invoke$arity$2 ? pred__64469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__64470) : pred__64469.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__64470)))){
return (new app.kaboomv5.math.Quad(self__.x,self__.y,self__.w,G__64459,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64459),null));
}
}
}
}
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64459){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.Quad(self__.x,self__.y,self__.w,self__.h,G__64459,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Quad.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.Quad.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(app.kaboomv5.math.Quad.cljs$lang$type = true);

(app.kaboomv5.math.Quad.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math/Quad",null,(1),null));
}));

(app.kaboomv5.math.Quad.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math/Quad");
}));

/**
 * Positional factory function for app.kaboomv5.math/Quad.
 */
app.kaboomv5.math.__GT_Quad = (function app$kaboomv5$math$__GT_Quad(x,y,w,h){
return (new app.kaboomv5.math.Quad(x,y,w,h,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math/Quad, taking a map of keywords to field values.
 */
app.kaboomv5.math.map__GT_Quad = (function app$kaboomv5$math$map__GT_Quad(G__64463){
var extmap__4419__auto__ = (function (){var G__64472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64463,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__64463)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64472);
} else {
return G__64472;
}
})();
return (new app.kaboomv5.math.Quad(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64463),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64463),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__64463),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__64463),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.kaboomv5.math.Vec22 = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.Vec22.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64474,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64478 = k64474;
var G__64478__$1 = (((G__64478 instanceof cljs.core.Keyword))?G__64478.fqn:null);
switch (G__64478__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64474,else__4383__auto__);

}
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64479){
var vec__64480 = p__64479;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64480,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64480,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.Vec22{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64473){
var self__ = this;
var G__64473__$1 = this;
return (new cljs.core.RecordIter((0),G__64473__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.Vec22(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-793553595 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64475,other64476){
var self__ = this;
var this64475__$1 = this;
return (((!((other64476 == null)))) && ((this64475__$1.constructor === other64476.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64475__$1.x,other64476.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64475__$1.y,other64476.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64475__$1.__extmap,other64476.__extmap)));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.Vec22(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64473){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64483 = cljs.core.keyword_identical_QMARK_;
var expr__64484 = k__4388__auto__;
if(cljs.core.truth_((pred__64483.cljs$core$IFn$_invoke$arity$2 ? pred__64483.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__64484) : pred__64483.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__64484)))){
return (new app.kaboomv5.math.Vec22(G__64473,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64483.cljs$core$IFn$_invoke$arity$2 ? pred__64483.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__64484) : pred__64483.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__64484)))){
return (new app.kaboomv5.math.Vec22(self__.x,G__64473,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.Vec22(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64473),null));
}
}
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64473){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.Vec22(self__.x,self__.y,G__64473,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Vec22.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.Vec22.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(app.kaboomv5.math.Vec22.cljs$lang$type = true);

(app.kaboomv5.math.Vec22.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math/Vec22",null,(1),null));
}));

(app.kaboomv5.math.Vec22.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math/Vec22");
}));

/**
 * Positional factory function for app.kaboomv5.math/Vec22.
 */
app.kaboomv5.math.__GT_Vec22 = (function app$kaboomv5$math$__GT_Vec22(x,y){
return (new app.kaboomv5.math.Vec22(x,y,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math/Vec22, taking a map of keywords to field values.
 */
app.kaboomv5.math.map__GT_Vec22 = (function app$kaboomv5$math$map__GT_Vec22(G__64477){
var extmap__4419__auto__ = (function (){var G__64486 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64477,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__64477)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64486);
} else {
return G__64486;
}
})();
return (new app.kaboomv5.math.Vec22(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64477),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64477),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.kaboomv5.math.Vec33 = (function (x,y,z,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.z = z;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.Vec33.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64488,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64492 = k64488;
var G__64492__$1 = (((G__64492 instanceof cljs.core.Keyword))?G__64492.fqn:null);
switch (G__64492__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "z":
return self__.z;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64488,else__4383__auto__);

}
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64493){
var vec__64494 = p__64493;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64494,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64494,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.Vec33{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",-789527183),self__.z],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64487){
var self__ = this;
var G__64487__$1 = this;
return (new cljs.core.RecordIter((0),G__64487__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.Vec33(self__.x,self__.y,self__.z,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1308164253 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64489,other64490){
var self__ = this;
var this64489__$1 = this;
return (((!((other64490 == null)))) && ((this64489__$1.constructor === other64490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64489__$1.x,other64490.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64489__$1.y,other64490.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64489__$1.z,other64490.z)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64489__$1.__extmap,other64490.__extmap)));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"z","z",-789527183),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.Vec33(self__.x,self__.y,self__.z,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64487){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64497 = cljs.core.keyword_identical_QMARK_;
var expr__64498 = k__4388__auto__;
if(cljs.core.truth_((pred__64497.cljs$core$IFn$_invoke$arity$2 ? pred__64497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__64498) : pred__64497.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__64498)))){
return (new app.kaboomv5.math.Vec33(G__64487,self__.y,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64497.cljs$core$IFn$_invoke$arity$2 ? pred__64497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__64498) : pred__64497.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__64498)))){
return (new app.kaboomv5.math.Vec33(self__.x,G__64487,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64497.cljs$core$IFn$_invoke$arity$2 ? pred__64497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),expr__64498) : pred__64497.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__64498)))){
return (new app.kaboomv5.math.Vec33(self__.x,self__.y,G__64487,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.Vec33(self__.x,self__.y,self__.z,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64487),null));
}
}
}
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z","z",-789527183),self__.z,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64487){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.Vec33(self__.x,self__.y,self__.z,G__64487,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.Vec33.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.Vec33.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
}));

(app.kaboomv5.math.Vec33.cljs$lang$type = true);

(app.kaboomv5.math.Vec33.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math/Vec33",null,(1),null));
}));

(app.kaboomv5.math.Vec33.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math/Vec33");
}));

/**
 * Positional factory function for app.kaboomv5.math/Vec33.
 */
app.kaboomv5.math.__GT_Vec33 = (function app$kaboomv5$math$__GT_Vec33(x,y,z){
return (new app.kaboomv5.math.Vec33(x,y,z,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math/Vec33, taking a map of keywords to field values.
 */
app.kaboomv5.math.map__GT_Vec33 = (function app$kaboomv5$math$map__GT_Vec33(G__64491){
var extmap__4419__auto__ = (function (){var G__64500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64491,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], 0));
if(cljs.core.record_QMARK_(G__64491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64500);
} else {
return G__64500;
}
})();
return (new app.kaboomv5.math.Vec33(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64491),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64491),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(G__64491),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

app.kaboomv5.math.neg = (function app$kaboomv5$math$neg(num){
return ((-1) * num);
});
/**
 * Converts radians to degrees.
 *  Parameters:
 *  - angleRadians  number
 *              Angle in radians.
 *  Returns: number
 *           Angle in degrees.
 *  ex: (deg->rad 1) => 0.017453292519943295
 */
app.kaboomv5.math.deg__GT_rad = (function app$kaboomv5$math$deg__GT_rad(deg){
return goog.math.toRadians(deg);
});
/**
 * Converts radians to degrees.
 * Parameters
 * - angleRadians(number): Angle in radians.
 * Returns
 * - number: Angle in degrees.
 * ex: (rad->deg (/ 22 7)) => 180.07244989825872
 * 
 */
app.kaboomv5.math.rad__GT_deg = (function app$kaboomv5$math$rad__GT_deg(rad){
return goog.math.toDegrees(rad);
});
/**
 * Takes a number and clamps it to within the provided bounds.
 * Parameters
 * - value(number): The input number.
 * - min  (number): The minimum value to return.
 * - max  (number): The maximum value to return.
 * Returns
 * - number: The input number if it is within bounds, or the nearest number within the bounds.
 */
app.kaboomv5.math.clamp = (function app$kaboomv5$math$clamp(value,min,max){
if((min > max)){
return (app.kaboomv5.math.clamp.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.clamp.cljs$core$IFn$_invoke$arity$3(value,max,min) : app.kaboomv5.math.clamp.call(null,value,max,min));
} else {
return goog.math.clamp(value,min,max);
}
});
/**
 * Performs linear interpolation between values a and b.
 *   Returns the value between a and b proportional to x (when x is between 0 and 1.
 *   When x is outside this range, the return value is a linear extrapolation).
 *   Parameters:
 * - a: number
 * - b: number
 * - x: The proportion between a and b
 *   
 */
app.kaboomv5.math.lerp = (function app$kaboomv5$math$lerp(a,b,x){
return goog.math.lerp(a,b,x);
});
app.kaboomv5.math.mmap = (function app$kaboomv5$math$mmap(v,l1,h1,l2,h2){
return ((l2 + (v - l1)) / ((h1 - l1) * (h2 - l2)));
});
app.kaboomv5.math.mapc = (function app$kaboomv5$math$mapc(v,l1,h1,l2,h2){
return app.kaboomv5.math.clamp(app.kaboomv5.math.mmap(v,l1,h1,l2,h2),l2,h2);
});
app.kaboomv5.math.vec2 = (function app$kaboomv5$math$vec2(var_args){
var G__64502 = arguments.length;
switch (G__64502) {
case 1:
return app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$1 = (function (xy){
return app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2(xy,xy);
}));

(app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.kaboomv5.math.__GT_Vec22(x,y);
}));

(app.kaboomv5.math.vec2.cljs$lang$maxFixedArity = 2);

app.kaboomv5.math.angle__GT_vec = (function app$kaboomv5$math$angle__GT_vec(a){
return app.kaboomv5.math.vec2.cljs$core$IFn$_invoke$arity$2(Math.cos(a),Math.sin(a));
});
app.kaboomv5.math.vec2_QMARK_ = (function app$kaboomv5$math$vec2_QMARK_(val){
return (val instanceof app.kaboomv5.math.Vec22);
});
app.kaboomv5.math.vec3 = (function app$kaboomv5$math$vec3(x,y,z){
return app.kaboomv5.math.__GT_Vec33(x,y,z);
});
app.kaboomv5.math.vec3_QMARK_ = (function app$kaboomv5$math$vec3_QMARK_(val){
return (val instanceof app.kaboomv5.math.Vec33);
});
app.kaboomv5.math.scale = (function app$kaboomv5$math$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64558 = arguments.length;
var i__4737__auto___64559 = (0);
while(true){
if((i__4737__auto___64559 < len__4736__auto___64558)){
args__4742__auto__.push((arguments[i__4737__auto___64559]));

var G__64560 = (i__4737__auto___64559 + (1));
i__4737__auto___64559 = G__64560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return app.kaboomv5.math.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(app.kaboomv5.math.scale.cljs$core$IFn$_invoke$arity$variadic = (function (vec,args){
var new_vec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.vec2,args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vec) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_vec)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vec) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_vec))], null);
}));

(app.kaboomv5.math.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.kaboomv5.math.scale.cljs$lang$applyTo = (function (seq64503){
var G__64504 = cljs.core.first(seq64503);
var seq64503__$1 = cljs.core.next(seq64503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64504,seq64503__$1);
}));

app.kaboomv5.math.color_QMARK_ = (function app$kaboomv5$math$color_QMARK_(val){
return (val instanceof app.kaboomv5.math.Color);
});
app.kaboomv5.math.color = (function app$kaboomv5$math$color(var_args){
var G__64506 = arguments.length;
switch (G__64506) {
case 0:
return app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1));
}));

(app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$1 = (function (rgba){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.color,rgba);
}));

(app.kaboomv5.math.color.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return app.kaboomv5.math.__GT_Color(r,g,b,a);
}));

(app.kaboomv5.math.color.cljs$lang$maxFixedArity = 4);

(app.kaboomv5.math.Color.prototype.app$kaboomv5$math$IColor$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboomv5.math.Color.prototype.app$kaboomv5$math$IColor$lighten$arity$2 = (function (this$,val){
var this$__$1 = this;
return app.kaboomv5.math.__GT_Color((this$__$1.r + val),(this$__$1.g + val),(this$__$1.b + val),(this$__$1.a + val));
}));

(app.kaboomv5.math.Color.prototype.app$kaboomv5$math$IColor$darken$arity$2 = (function (this$,val){
var this$__$1 = this;
return app.kaboomv5.math.lighten(this$__$1,app.kaboomv5.math.neg(val));
}));

(app.kaboomv5.math.Color.prototype.app$kaboomv5$math$IColor$dark_QMARK_$arity$2 = (function (p__64507,p){
var map__64508 = p__64507;
var map__64508__$1 = (((((!((map__64508 == null))))?(((((map__64508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64508):map__64508);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__64510 = this;
var map__64510__$1 = (((((!((map__64510 == null))))?(((((map__64510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64510):map__64510);
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return (((3) * p) > ((r__$1 + g__$1) + b__$1));
}));

(app.kaboomv5.math.Color.prototype.app$kaboomv5$math$IColor$light_QMARK_$arity$2 = (function (this$,p){
var this$__$1 = this;
return cljs.core.not(app.kaboomv5.math.dark_QMARK_(this$__$1,p));
}));
app.kaboomv5.math.quad = (function app$kaboomv5$math$quad(x,y,w,h){
return app.kaboomv5.math.__GT_Quad(x,y,w,h);
});
app.kaboomv5.math.matrix = (function app$kaboomv5$math$matrix(val){
return (new goog.math.Matrix(cljs.core.clj__GT_js(val)));
});
app.kaboomv5.math.mat4 = (function app$kaboomv5$math$mat4(var_args){
var G__64513 = arguments.length;
switch (G__64513) {
case 0:
return app.kaboomv5.math.mat4.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.math.mat4.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.mat4.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.math.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1)], null));
}));

(app.kaboomv5.math.mat4.cljs$core$IFn$_invoke$arity$1 = (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null);
}));

(app.kaboomv5.math.mat4.cljs$lang$maxFixedArity = 1);

app.kaboomv5.math.mat4_QMARK_ = (function app$kaboomv5$math$mat4_QMARK_(m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),m.getSize().width);
});

//# sourceMappingURL=app.kaboomv5.math.js.map
