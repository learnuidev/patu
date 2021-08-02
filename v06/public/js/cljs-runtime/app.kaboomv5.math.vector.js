goog.provide('app.kaboomv5.math.vector');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('app.kaboomv5.math.other');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec3');
goog.require('goog.math.Matrix');
app.kaboomv5.math.vector.neg = (function app$kaboomv5$math$vector$neg(val){
return ((-1) * val);
});

/**
 * @interface
 */
app.kaboomv5.math.vector.IVector2 = function(){};

var app$kaboomv5$math$vector$IVector2$add$dyn_104362 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.add[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.add["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.add",this$);
}
}
});
app.kaboomv5.math.vector.add = (function app$kaboomv5$math$vector$add(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$add$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$add$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$add$dyn_104362(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$subtract$dyn_104363 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.subtract[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.subtract["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.subtract",this$);
}
}
});
app.kaboomv5.math.vector.subtract = (function app$kaboomv5$math$vector$subtract(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$subtract$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$subtract$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$subtract$dyn_104363(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$scale_BANG_$dyn_104364 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.scale_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.scale_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.scale!",this$);
}
}
});
app.kaboomv5.math.vector.scale_BANG_ = (function app$kaboomv5$math$vector$scale_BANG_(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$scale_BANG_$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$scale_BANG_$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$scale_BANG_$dyn_104364(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$dist$dyn_104365 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.dist[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.dist["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.dist",this$);
}
}
});
app.kaboomv5.math.vector.dist = (function app$kaboomv5$math$vector$dist(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$dist$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$dist$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$dist$dyn_104365(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$len$dyn_104366 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.len[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.len["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.len",this$);
}
}
});
app.kaboomv5.math.vector.len = (function app$kaboomv5$math$vector$len(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$len$arity$1 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$len$arity$1(this$);
} else {
return app$kaboomv5$math$vector$IVector2$len$dyn_104366(this$);
}
});

var app$kaboomv5$math$vector$IVector2$unit$dyn_104367 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.unit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.unit["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.unit",this$);
}
}
});
app.kaboomv5.math.vector.unit = (function app$kaboomv5$math$vector$unit(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$unit$arity$1 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$unit$arity$1(this$);
} else {
return app$kaboomv5$math$vector$IVector2$unit$dyn_104367(this$);
}
});

var app$kaboomv5$math$vector$IVector2$normal$dyn_104368 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVector2.normal",this$);
}
}
});
app.kaboomv5.math.vector.normal = (function app$kaboomv5$math$vector$normal(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$normal$arity$1 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$normal$arity$1(this$);
} else {
return app$kaboomv5$math$vector$IVector2$normal$dyn_104368(this$);
}
});

var app$kaboomv5$math$vector$IVector2$dot$dyn_104369 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.dot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.dot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.dot",this$);
}
}
});
app.kaboomv5.math.vector.dot = (function app$kaboomv5$math$vector$dot(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$dot$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$dot$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$dot$dyn_104369(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$angle$dyn_104370 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.angle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.angle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVector2.angle",this$);
}
}
});
app.kaboomv5.math.vector.angle = (function app$kaboomv5$math$vector$angle(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$angle$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$angle$arity$2(this$,v);
} else {
return app$kaboomv5$math$vector$IVector2$angle$dyn_104370(this$,v);
}
});

var app$kaboomv5$math$vector$IVector2$lerp$dyn_104371 = (function (this$,v,n){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.lerp[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,v,n) : m__4429__auto__.call(null,this$,v,n));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.lerp["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,v,n) : m__4426__auto__.call(null,this$,v,n));
} else {
throw cljs.core.missing_protocol("IVector2.lerp",this$);
}
}
});
app.kaboomv5.math.vector.lerp = (function app$kaboomv5$math$vector$lerp(this$,v,n){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$lerp$arity$3 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$lerp$arity$3(this$,v,n);
} else {
return app$kaboomv5$math$vector$IVector2$lerp$dyn_104371(this$,v,n);
}
});

var app$kaboomv5$math$vector$IVector2$to_fixed$dyn_104372 = (function (this$,n){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.vector.to_fixed[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__4429__auto__.call(null,this$,n));
} else {
var m__4426__auto__ = (app.kaboomv5.math.vector.to_fixed["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__4426__auto__.call(null,this$,n));
} else {
throw cljs.core.missing_protocol("IVector2.to-fixed",this$);
}
}
});
app.kaboomv5.math.vector.to_fixed = (function app$kaboomv5$math$vector$to_fixed(this$,n){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$vector$IVector2$to_fixed$arity$2 == null)))))){
return this$.app$kaboomv5$math$vector$IVector2$to_fixed$arity$2(this$,n);
} else {
return app$kaboomv5$math$vector$IVector2$to_fixed$dyn_104372(this$,n);
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
app.kaboomv5.math.vector.Vec22 = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k104299,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__104303 = k104299;
var G__104303__$1 = (((G__104303 instanceof cljs.core.Keyword))?G__104303.fqn:null);
switch (G__104303__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k104299,else__4383__auto__);

}
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__104304){
var vec__104305 = p__104304;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104305,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104305,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.vector.Vec22{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104298){
var self__ = this;
var G__104298__$1 = this;
return (new cljs.core.RecordIter((0),G__104298__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec22(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-622751677 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this104300,other104301){
var self__ = this;
var this104300__$1 = this;
return (((!((other104301 == null)))) && ((this104300__$1.constructor === other104301.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104300__$1.x,other104301.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104300__$1.y,other104301.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104300__$1.__extmap,other104301.__extmap)));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.vector.Vec22(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__104298){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__104308 = cljs.core.keyword_identical_QMARK_;
var expr__104309 = k__4388__auto__;
if(cljs.core.truth_((pred__104308.cljs$core$IFn$_invoke$arity$2 ? pred__104308.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__104309) : pred__104308.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__104309)))){
return (new app.kaboomv5.math.vector.Vec22(G__104298,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104308.cljs$core$IFn$_invoke$arity$2 ? pred__104308.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__104309) : pred__104308.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__104309)))){
return (new app.kaboomv5.math.vector.Vec22(self__.x,G__104298,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.vector.Vec22(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__104298),null));
}
}
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__104298){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec22(self__.x,self__.y,G__104298,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec22.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.vector.Vec22.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(app.kaboomv5.math.vector.Vec22.cljs$lang$type = true);

(app.kaboomv5.math.vector.Vec22.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math.vector/Vec22",null,(1),null));
}));

(app.kaboomv5.math.vector.Vec22.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math.vector/Vec22");
}));

/**
 * Positional factory function for app.kaboomv5.math.vector/Vec22.
 */
app.kaboomv5.math.vector.__GT_Vec22 = (function app$kaboomv5$math$vector$__GT_Vec22(x,y){
return (new app.kaboomv5.math.vector.Vec22(x,y,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math.vector/Vec22, taking a map of keywords to field values.
 */
app.kaboomv5.math.vector.map__GT_Vec22 = (function app$kaboomv5$math$vector$map__GT_Vec22(G__104302){
var extmap__4419__auto__ = (function (){var G__104311 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__104302,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__104302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__104311);
} else {
return G__104311;
}
})();
return (new app.kaboomv5.math.vector.Vec22(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__104302),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__104302),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
app.kaboomv5.math.vector.Vec33 = (function (x,y,z,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.z = z;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k104313,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__104317 = k104313;
var G__104317__$1 = (((G__104317 instanceof cljs.core.Keyword))?G__104317.fqn:null);
switch (G__104317__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k104313,else__4383__auto__);

}
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__104318){
var vec__104319 = p__104318;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104319,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104319,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.vector.Vec33{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",-789527183),self__.z],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104312){
var self__ = this;
var G__104312__$1 = this;
return (new cljs.core.RecordIter((0),G__104312__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec33(self__.x,self__.y,self__.z,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1328824487 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this104314,other104315){
var self__ = this;
var this104314__$1 = this;
return (((!((other104315 == null)))) && ((this104314__$1.constructor === other104315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104314__$1.x,other104315.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104314__$1.y,other104315.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104314__$1.z,other104315.z)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104314__$1.__extmap,other104315.__extmap)));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"z","z",-789527183),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.vector.Vec33(self__.x,self__.y,self__.z,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__104312){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__104322 = cljs.core.keyword_identical_QMARK_;
var expr__104323 = k__4388__auto__;
if(cljs.core.truth_((pred__104322.cljs$core$IFn$_invoke$arity$2 ? pred__104322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__104323) : pred__104322.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__104323)))){
return (new app.kaboomv5.math.vector.Vec33(G__104312,self__.y,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104322.cljs$core$IFn$_invoke$arity$2 ? pred__104322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__104323) : pred__104322.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__104323)))){
return (new app.kaboomv5.math.vector.Vec33(self__.x,G__104312,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104322.cljs$core$IFn$_invoke$arity$2 ? pred__104322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),expr__104323) : pred__104322.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__104323)))){
return (new app.kaboomv5.math.vector.Vec33(self__.x,self__.y,G__104312,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.vector.Vec33(self__.x,self__.y,self__.z,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__104312),null));
}
}
}
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z","z",-789527183),self__.z,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__104312){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec33(self__.x,self__.y,self__.z,G__104312,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec33.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.vector.Vec33.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
}));

(app.kaboomv5.math.vector.Vec33.cljs$lang$type = true);

(app.kaboomv5.math.vector.Vec33.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math.vector/Vec33",null,(1),null));
}));

(app.kaboomv5.math.vector.Vec33.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math.vector/Vec33");
}));

/**
 * Positional factory function for app.kaboomv5.math.vector/Vec33.
 */
app.kaboomv5.math.vector.__GT_Vec33 = (function app$kaboomv5$math$vector$__GT_Vec33(x,y,z){
return (new app.kaboomv5.math.vector.Vec33(x,y,z,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math.vector/Vec33, taking a map of keywords to field values.
 */
app.kaboomv5.math.vector.map__GT_Vec33 = (function app$kaboomv5$math$vector$map__GT_Vec33(G__104316){
var extmap__4419__auto__ = (function (){var G__104325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__104316,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], 0));
if(cljs.core.record_QMARK_(G__104316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__104325);
} else {
return G__104325;
}
})();
return (new app.kaboomv5.math.vector.Vec33(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__104316),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__104316),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(G__104316),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
app.kaboomv5.math.vector.Vec4 = (function (x,y,z,w,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k104327,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__104331 = k104327;
var G__104331__$1 = (((G__104331 instanceof cljs.core.Keyword))?G__104331.fqn:null);
switch (G__104331__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "z":
return self__.z;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k104327,else__4383__auto__);

}
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__104332){
var vec__104333 = p__104332;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104333,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104333,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.vector.Vec4{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",-789527183),self__.z],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104326){
var self__ = this;
var G__104326__$1 = this;
return (new cljs.core.RecordIter((0),G__104326__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"w","w",354169001)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,self__.z,self__.w,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1253601892 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this104328,other104329){
var self__ = this;
var this104328__$1 = this;
return (((!((other104329 == null)))) && ((this104328__$1.constructor === other104329.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104328__$1.x,other104329.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104328__$1.y,other104329.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104328__$1.z,other104329.z)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104328__$1.w,other104329.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104328__$1.__extmap,other104329.__extmap)));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"z","z",-789527183),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,self__.z,self__.w,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__104326){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__104336 = cljs.core.keyword_identical_QMARK_;
var expr__104337 = k__4388__auto__;
if(cljs.core.truth_((pred__104336.cljs$core$IFn$_invoke$arity$2 ? pred__104336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__104337) : pred__104336.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__104337)))){
return (new app.kaboomv5.math.vector.Vec4(G__104326,self__.y,self__.z,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104336.cljs$core$IFn$_invoke$arity$2 ? pred__104336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__104337) : pred__104336.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__104337)))){
return (new app.kaboomv5.math.vector.Vec4(self__.x,G__104326,self__.z,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104336.cljs$core$IFn$_invoke$arity$2 ? pred__104336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),expr__104337) : pred__104336.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__104337)))){
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,G__104326,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104336.cljs$core$IFn$_invoke$arity$2 ? pred__104336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__104337) : pred__104336.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__104337)))){
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,self__.z,G__104326,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,self__.z,self__.w,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__104326),null));
}
}
}
}
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z","z",-789527183),self__.z,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__104326){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.vector.Vec4(self__.x,self__.y,self__.z,self__.w,G__104326,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.vector.Vec4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.vector.Vec4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
}));

(app.kaboomv5.math.vector.Vec4.cljs$lang$type = true);

(app.kaboomv5.math.vector.Vec4.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math.vector/Vec4",null,(1),null));
}));

(app.kaboomv5.math.vector.Vec4.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math.vector/Vec4");
}));

/**
 * Positional factory function for app.kaboomv5.math.vector/Vec4.
 */
app.kaboomv5.math.vector.__GT_Vec4 = (function app$kaboomv5$math$vector$__GT_Vec4(x,y,z,w){
return (new app.kaboomv5.math.vector.Vec4(x,y,z,w,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math.vector/Vec4, taking a map of keywords to field values.
 */
app.kaboomv5.math.vector.map__GT_Vec4 = (function app$kaboomv5$math$vector$map__GT_Vec4(G__104330){
var extmap__4419__auto__ = (function (){var G__104339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__104330,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"w","w",354169001)], 0));
if(cljs.core.record_QMARK_(G__104330)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__104339);
} else {
return G__104339;
}
})();
return (new app.kaboomv5.math.vector.Vec4(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__104330),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__104330),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(G__104330),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__104330),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

app.kaboomv5.math.vector.vec2 = (function app$kaboomv5$math$vector$vec2(var_args){
var G__104341 = arguments.length;
switch (G__104341) {
case 1:
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (xy){
if(cljs.core.vector_QMARK_(xy)){
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xy,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xy,(1)));
} else {
if(cljs.core.map_QMARK_(xy)){
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(xy),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(xy));
} else {
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(xy,xy);
}
}
}));

(app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.kaboomv5.math.vector.__GT_Vec22(x,y);
}));

(app.kaboomv5.math.vector.vec2.cljs$lang$maxFixedArity = 2);

app.kaboomv5.math.vector.vec2_QMARK_ = (function app$kaboomv5$math$vector$vec2_QMARK_(val){
return (val instanceof app.kaboomv5.math.vector.Vec22);
});
(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$add$arity$2 = (function (this$,p__104342){
var map__104343 = p__104342;
var map__104343__$1 = (((((!((map__104343 == null))))?(((((map__104343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104343):map__104343);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104343__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104343__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((this$__$1.x + x),(this$__$1.y + y));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$subtract$arity$2 = (function (this$,p__104345){
var map__104346 = p__104345;
var map__104346__$1 = (((((!((map__104346 == null))))?(((((map__104346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104346):map__104346);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104346__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104346__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((this$__$1.x - x),(this$__$1.y - y));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$scale_BANG_$arity$2 = (function (this$,p__104348){
var map__104349 = p__104348;
var map__104349__$1 = (((((!((map__104349 == null))))?(((((map__104349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104349):map__104349);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104349__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104349__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((this$__$1.x * x),(this$__$1.y * y));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$dist$arity$2 = (function (this$,p__104351){
var map__104352 = p__104351;
var map__104352__$1 = (((((!((map__104352 == null))))?(((((map__104352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104352):map__104352);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104352__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104352__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
var dx = (this$__$1.x - x);
var dy = (this$__$1.y - y);
return Math.sqrt(((dx * dx) + (dy * dy)));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$len$arity$1 = (function (this$){
var this$__$1 = this;
return app.kaboomv5.math.vector.dist(this$__$1,app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$unit$arity$1 = (function (this$){
var this$__$1 = this;
return app.kaboomv5.math.vector.scale_BANG_(this$__$1,app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$1(((1) / app.kaboomv5.math.vector.len(this$__$1))));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$normal$arity$1 = (function (this$){
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(this$__$1.y,app.kaboomv5.math.vector.neg(this$__$1.x));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$dot$arity$2 = (function (this$,p__104354){
var map__104355 = p__104354;
var map__104355__$1 = (((((!((map__104355 == null))))?(((((map__104355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104355):map__104355);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104355__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104355__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
return ((x * this$__$1.x) + (y * this$__$1.y));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$angle$arity$2 = (function (this$,p__104357){
var map__104358 = p__104357;
var map__104358__$1 = (((((!((map__104358 == null))))?(((((map__104358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104358):map__104358);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104358__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104358__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var this$__$1 = this;
return Math.atan2((this$__$1.y - y),(this$__$1.x - x));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$lerp$arity$3 = (function (this$,v,n){
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.other.lerp(this$__$1.x,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),n),app.kaboomv5.math.other.lerp(this$__$1.y,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),n));
}));

(app.kaboomv5.math.vector.Vec22.prototype.app$kaboomv5$math$vector$IVector2$to_fixed$arity$2 = (function (this$,n){
var this$__$1 = this;
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(this$__$1.x.toFixed(n),this$__$1.y.toFixed(n));
}));
app.kaboomv5.math.vector.angle__GT_vec = (function app$kaboomv5$math$vector$angle__GT_vec(a){
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(Math.cos(a),Math.sin(a));
});
app.kaboomv5.math.vector.vec3 = (function app$kaboomv5$math$vector$vec3(x,y,z){
return app.kaboomv5.math.vector.__GT_Vec33(x,y,z);
});
app.kaboomv5.math.vector.vec3_QMARK_ = (function app$kaboomv5$math$vector$vec3_QMARK_(val){
return (val instanceof app.kaboomv5.math.vector.Vec33);
});
app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null));
app.kaboomv5.math.vector.scale = (function app$kaboomv5$math$vector$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104414 = arguments.length;
var i__4737__auto___104415 = (0);
while(true){
if((i__4737__auto___104415 < len__4736__auto___104414)){
args__4742__auto__.push((arguments[i__4737__auto___104415]));

var G__104416 = (i__4737__auto___104415 + (1));
i__4737__auto___104415 = G__104416;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return app.kaboomv5.math.vector.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(app.kaboomv5.math.vector.scale.cljs$core$IFn$_invoke$arity$variadic = (function (vec,args){
var new_vec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.vector.vec2,args);
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vec) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_vec)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vec) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_vec)));
}));

(app.kaboomv5.math.vector.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.kaboomv5.math.vector.scale.cljs$lang$applyTo = (function (seq104360){
var G__104361 = cljs.core.first(seq104360);
var seq104360__$1 = cljs.core.next(seq104360);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104361,seq104360__$1);
}));

app.kaboomv5.math.vector.vec4 = (function app$kaboomv5$math$vector$vec4(x,y,z,w){
return app.kaboomv5.math.vector.__GT_Vec4(x,y,z,w);
});

//# sourceMappingURL=app.kaboomv5.math.vector.js.map
