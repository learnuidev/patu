goog.provide('app.kaboomv5.math.core');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('app.kaboomv5.math.vector');
goog.require('app.kaboomv5.math.color');
goog.require('app.kaboomv5.math.matrix');
app.kaboomv5.math.core.neg = (function app$kaboomv5$math$core$neg(num){
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
app.kaboomv5.math.core.deg__GT_rad = (function app$kaboomv5$math$core$deg__GT_rad(deg){
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
app.kaboomv5.math.core.rad__GT_deg = (function app$kaboomv5$math$core$rad__GT_deg(rad){
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
app.kaboomv5.math.core.clamp = (function app$kaboomv5$math$core$clamp(value,min,max){
if((min > max)){
return (app.kaboomv5.math.core.clamp.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.core.clamp.cljs$core$IFn$_invoke$arity$3(value,max,min) : app.kaboomv5.math.core.clamp.call(null,value,max,min));
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
app.kaboomv5.math.core.lerp = (function app$kaboomv5$math$core$lerp(a,b,x){
return goog.math.lerp(a,b,x);
});
app.kaboomv5.math.core.mmap = (function app$kaboomv5$math$core$mmap(v,l1,h1,l2,h2){
return ((l2 + (v - l1)) / ((h1 - l1) * (h2 - l2)));
});
app.kaboomv5.math.core.mapc = (function app$kaboomv5$math$core$mapc(v,l1,h1,l2,h2){
return app.kaboomv5.math.core.clamp(app.kaboomv5.math.core.mmap(v,l1,h1,l2,h2),l2,h2);
});
app.kaboomv5.math.core.angle__GT_vec = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.angle__GT_vec);
app.kaboomv5.math.core.vec2 = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.vec2);
app.kaboomv5.math.core.vec2_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.vec2_QMARK_);
app.kaboomv5.math.core.vec3 = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.vec3);
app.kaboomv5.math.core.vec3_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.vec3_QMARK_);
app.kaboomv5.math.core.scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.scale);
app.kaboomv5.math.core.add = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.add);
app.kaboomv5.math.core.subtract = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.subtract);
app.kaboomv5.math.core.scale_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.scale_BANG_);
app.kaboomv5.math.core.dist = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.dist);
app.kaboomv5.math.core.len = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.len);
app.kaboomv5.math.core.unit = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.unit);
app.kaboomv5.math.core.normal = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.normal);
app.kaboomv5.math.core.dot = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.dot);
app.kaboomv5.math.core.angle = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.angle);
app.kaboomv5.math.core.vlerp = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.lerp);
app.kaboomv5.math.core.to_fixed = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.vector.to_fixed);
app.kaboomv5.math.core.color = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.color);
app.kaboomv5.math.core.lighten = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.lighten);
app.kaboomv5.math.core.darken = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.darken);
app.kaboomv5.math.core.dark_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.dark_QMARK_);
app.kaboomv5.math.core.light_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.light_QMARK_);
app.kaboomv5.math.core.color_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.color.color_QMARK_);

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
app.kaboomv5.math.core.Quad = (function (x,y,w,h,__meta,__extmap,__hash){
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
(app.kaboomv5.math.core.Quad.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k104426,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__104430 = k104426;
var G__104430__$1 = (((G__104430 instanceof cljs.core.Keyword))?G__104430.fqn:null);
switch (G__104430__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k104426,else__4383__auto__);

}
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__104431){
var vec__104432 = p__104431;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104432,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104432,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.core.Quad{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104425){
var self__ = this;
var G__104425__$1 = this;
return (new cljs.core.RecordIter((0),G__104425__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1775771427 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this104427,other104428){
var self__ = this;
var this104427__$1 = this;
return (((!((other104428 == null)))) && ((this104427__$1.constructor === other104428.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104427__$1.x,other104428.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104427__$1.y,other104428.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104427__$1.w,other104428.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104427__$1.h,other104428.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104427__$1.__extmap,other104428.__extmap)));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__104425){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__104435 = cljs.core.keyword_identical_QMARK_;
var expr__104436 = k__4388__auto__;
if(cljs.core.truth_((pred__104435.cljs$core$IFn$_invoke$arity$2 ? pred__104435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__104436) : pred__104435.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__104436)))){
return (new app.kaboomv5.math.core.Quad(G__104425,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104435.cljs$core$IFn$_invoke$arity$2 ? pred__104435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__104436) : pred__104435.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__104436)))){
return (new app.kaboomv5.math.core.Quad(self__.x,G__104425,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104435.cljs$core$IFn$_invoke$arity$2 ? pred__104435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__104436) : pred__104435.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__104436)))){
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,G__104425,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104435.cljs$core$IFn$_invoke$arity$2 ? pred__104435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__104436) : pred__104435.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__104436)))){
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,self__.w,G__104425,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__104425),null));
}
}
}
}
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__104425){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.core.Quad(self__.x,self__.y,self__.w,self__.h,G__104425,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.core.Quad.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.core.Quad.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(app.kaboomv5.math.core.Quad.cljs$lang$type = true);

(app.kaboomv5.math.core.Quad.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math.core/Quad",null,(1),null));
}));

(app.kaboomv5.math.core.Quad.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math.core/Quad");
}));

/**
 * Positional factory function for app.kaboomv5.math.core/Quad.
 */
app.kaboomv5.math.core.__GT_Quad = (function app$kaboomv5$math$core$__GT_Quad(x,y,w,h){
return (new app.kaboomv5.math.core.Quad(x,y,w,h,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math.core/Quad, taking a map of keywords to field values.
 */
app.kaboomv5.math.core.map__GT_Quad = (function app$kaboomv5$math$core$map__GT_Quad(G__104429){
var extmap__4419__auto__ = (function (){var G__104438 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__104429,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__104429)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__104438);
} else {
return G__104438;
}
})();
return (new app.kaboomv5.math.core.Quad(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__104429),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__104429),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__104429),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__104429),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

app.kaboomv5.math.core.quad = (function app$kaboomv5$math$core$quad(x,y,w,h){
return app.kaboomv5.math.core.__GT_Quad(x,y,w,h);
});
app.kaboomv5.math.core.matrix = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.matrix.matrix);
app.kaboomv5.math.core.mat4 = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.matrix.mat4);
app.kaboomv5.math.core.mat4_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.math.matrix.mat4_QMARK_);

//# sourceMappingURL=app.kaboomv5.math.core.js.map
