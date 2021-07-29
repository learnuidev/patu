goog.provide('app.kaboomv5.math.color');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('app.kaboomv5.math.vector');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec3');
goog.require('goog.math.Matrix');
app.kaboomv5.math.color.neg = (function app$kaboomv5$math$color$neg(num){
return ((-1) * num);
});

/**
 * @interface
 */
app.kaboomv5.math.color.IColor = function(){};

var app$kaboomv5$math$color$IColor$lighten$dyn_104397 = (function (this$,a){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.color.lighten[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4429__auto__.call(null,this$,a));
} else {
var m__4426__auto__ = (app.kaboomv5.math.color.lighten["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4426__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("IColor.lighten",this$);
}
}
});
app.kaboomv5.math.color.lighten = (function app$kaboomv5$math$color$lighten(this$,a){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$color$IColor$lighten$arity$2 == null)))))){
return this$.app$kaboomv5$math$color$IColor$lighten$arity$2(this$,a);
} else {
return app$kaboomv5$math$color$IColor$lighten$dyn_104397(this$,a);
}
});

var app$kaboomv5$math$color$IColor$darken$dyn_104398 = (function (this$,a){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.color.darken[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4429__auto__.call(null,this$,a));
} else {
var m__4426__auto__ = (app.kaboomv5.math.color.darken["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__4426__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("IColor.darken",this$);
}
}
});
app.kaboomv5.math.color.darken = (function app$kaboomv5$math$color$darken(this$,a){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$color$IColor$darken$arity$2 == null)))))){
return this$.app$kaboomv5$math$color$IColor$darken$arity$2(this$,a);
} else {
return app$kaboomv5$math$color$IColor$darken$dyn_104398(this$,a);
}
});

var app$kaboomv5$math$color$IColor$invert$dyn_104399 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.color.invert[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboomv5.math.color.invert["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IColor.invert",this$);
}
}
});
app.kaboomv5.math.color.invert = (function app$kaboomv5$math$color$invert(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$color$IColor$invert$arity$1 == null)))))){
return this$.app$kaboomv5$math$color$IColor$invert$arity$1(this$);
} else {
return app$kaboomv5$math$color$IColor$invert$dyn_104399(this$);
}
});

var app$kaboomv5$math$color$IColor$dark_QMARK_$dyn_104401 = (function (this$,p){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.color.dark_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4429__auto__.call(null,this$,p));
} else {
var m__4426__auto__ = (app.kaboomv5.math.color.dark_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4426__auto__.call(null,this$,p));
} else {
throw cljs.core.missing_protocol("IColor.dark?",this$);
}
}
});
app.kaboomv5.math.color.dark_QMARK_ = (function app$kaboomv5$math$color$dark_QMARK_(this$,p){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$color$IColor$dark_QMARK_$arity$2 == null)))))){
return this$.app$kaboomv5$math$color$IColor$dark_QMARK_$arity$2(this$,p);
} else {
return app$kaboomv5$math$color$IColor$dark_QMARK_$dyn_104401(this$,p);
}
});

var app$kaboomv5$math$color$IColor$light_QMARK_$dyn_104404 = (function (this$,p){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboomv5.math.color.light_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4429__auto__.call(null,this$,p));
} else {
var m__4426__auto__ = (app.kaboomv5.math.color.light_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,p) : m__4426__auto__.call(null,this$,p));
} else {
throw cljs.core.missing_protocol("IColor.light?",this$);
}
}
});
app.kaboomv5.math.color.light_QMARK_ = (function app$kaboomv5$math$color$light_QMARK_(this$,p){
if((((!((this$ == null)))) && ((!((this$.app$kaboomv5$math$color$IColor$light_QMARK_$arity$2 == null)))))){
return this$.app$kaboomv5$math$color$IColor$light_QMARK_$arity$2(this$,p);
} else {
return app$kaboomv5$math$color$IColor$light_QMARK_$dyn_104404(this$,p);
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
app.kaboomv5.math.color.Color = (function (r,g,b,a,__meta,__extmap,__hash){
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
(app.kaboomv5.math.color.Color.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k104374,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__104379 = k104374;
var G__104379__$1 = (((G__104379 instanceof cljs.core.Keyword))?G__104379.fqn:null);
switch (G__104379__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k104374,else__4383__auto__);

}
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__104380){
var vec__104381 = p__104380;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104381,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104381,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#app.kaboomv5.math.color.Color{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104373){
var self__ = this;
var G__104373__$1 = this;
return (new cljs.core.RecordIter((0),G__104373__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (893898491 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this104375,other104376){
var self__ = this;
var this104375__$1 = this;
return (((!((other104376 == null)))) && ((this104375__$1.constructor === other104376.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104375__$1.r,other104376.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104375__$1.g,other104376.g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104375__$1.b,other104376.b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104375__$1.a,other104376.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this104375__$1.__extmap,other104376.__extmap)));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__104373){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__104385 = cljs.core.keyword_identical_QMARK_;
var expr__104386 = k__4388__auto__;
if(cljs.core.truth_((pred__104385.cljs$core$IFn$_invoke$arity$2 ? pred__104385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),expr__104386) : pred__104385.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__104386)))){
return (new app.kaboomv5.math.color.Color(G__104373,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104385.cljs$core$IFn$_invoke$arity$2 ? pred__104385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),expr__104386) : pred__104385.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__104386)))){
return (new app.kaboomv5.math.color.Color(self__.r,G__104373,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104385.cljs$core$IFn$_invoke$arity$2 ? pred__104385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470),expr__104386) : pred__104385.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__104386)))){
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,G__104373,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__104385.cljs$core$IFn$_invoke$arity$2 ? pred__104385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__104386) : pred__104385.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__104386)))){
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,self__.b,G__104373,self__.__meta,self__.__extmap,null));
} else {
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__104373),null));
}
}
}
}
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"g","g",1738089905),self__.g,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),self__.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__104373){
var self__ = this;
var this__4379__auto____$1 = this;
return (new app.kaboomv5.math.color.Color(self__.r,self__.g,self__.b,self__.a,G__104373,self__.__extmap,self__.__hash));
}));

(app.kaboomv5.math.color.Color.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(app.kaboomv5.math.color.Color.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null);
}));

(app.kaboomv5.math.color.Color.cljs$lang$type = true);

(app.kaboomv5.math.color.Color.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"app.kaboomv5.math.color/Color",null,(1),null));
}));

(app.kaboomv5.math.color.Color.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"app.kaboomv5.math.color/Color");
}));

/**
 * Positional factory function for app.kaboomv5.math.color/Color.
 */
app.kaboomv5.math.color.__GT_Color = (function app$kaboomv5$math$color$__GT_Color(r,g,b,a){
return (new app.kaboomv5.math.color.Color(r,g,b,a,null,null,null));
});

/**
 * Factory function for app.kaboomv5.math.color/Color, taking a map of keywords to field values.
 */
app.kaboomv5.math.color.map__GT_Color = (function app$kaboomv5$math$color$map__GT_Color(G__104378){
var extmap__4419__auto__ = (function (){var G__104388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__104378,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__104378)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__104388);
} else {
return G__104388;
}
})();
return (new app.kaboomv5.math.color.Color(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__104378),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__104378),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__104378),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__104378),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

app.kaboomv5.math.color.color_QMARK_ = (function app$kaboomv5$math$color$color_QMARK_(val){
return (val instanceof app.kaboomv5.math.color.Color);
});
app.kaboomv5.math.color.color = (function app$kaboomv5$math$color$color(var_args){
var G__104390 = arguments.length;
switch (G__104390) {
case 0:
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
}));

(app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$1 = (function (rgba){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.color.color,rgba);
}));

(app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$4(r,g,b,(1));
}));

(app.kaboomv5.math.color.color.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return app.kaboomv5.math.color.__GT_Color(r,g,b,a);
}));

(app.kaboomv5.math.color.color.cljs$lang$maxFixedArity = 4);

(app.kaboomv5.math.color.Color.prototype.app$kaboomv5$math$color$IColor$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboomv5.math.color.Color.prototype.app$kaboomv5$math$color$IColor$lighten$arity$2 = (function (this$,val){
var this$__$1 = this;
return app.kaboomv5.math.color.__GT_Color((this$__$1.r + val),(this$__$1.g + val),(this$__$1.b + val),(this$__$1.a + val));
}));

(app.kaboomv5.math.color.Color.prototype.app$kaboomv5$math$color$IColor$darken$arity$2 = (function (this$,val){
var this$__$1 = this;
return app.kaboomv5.math.color.lighten(this$__$1,app.kaboomv5.math.color.neg(val));
}));

(app.kaboomv5.math.color.Color.prototype.app$kaboomv5$math$color$IColor$dark_QMARK_$arity$2 = (function (p__104392,p){
var map__104393 = p__104392;
var map__104393__$1 = (((((!((map__104393 == null))))?(((((map__104393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104393):map__104393);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104393__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104393__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104393__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__104395 = this;
var map__104395__$1 = (((((!((map__104395 == null))))?(((((map__104395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104395):map__104395);
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104395__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104395__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104395__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return (((3) * p) > ((r__$1 + g__$1) + b__$1));
}));

(app.kaboomv5.math.color.Color.prototype.app$kaboomv5$math$color$IColor$light_QMARK_$arity$2 = (function (this$,p){
var this$__$1 = this;
return cljs.core.not(app.kaboomv5.math.color.dark_QMARK_(this$__$1,p));
}));

//# sourceMappingURL=app.kaboomv5.math.color.js.map
