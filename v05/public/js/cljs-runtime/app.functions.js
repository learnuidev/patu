goog.provide('app.functions');
goog.require('cljs.core');
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null);
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null);
new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"apples","apples",910831200),null,new cljs.core.Keyword(null,"oranges","oranges",-1225488699),null,new cljs.core.Keyword(null,"pineapples","pineapples",352200702),null], null), null);
(function (){
return null;
})();
app.functions.some_fn = (function app$functions$some_fn(){



return ((1) + (34));
});
app.functions.some_fn();
app.functions.some_other_fn = (function app$functions$some_other_fn(){
return null;
});
app.functions.some_other_fn();
app.functions.fn_with_args = (function app$functions$fn_with_args(a,b){
return (a + b);
});
app.functions.fn_with_args((1),(2));
app.functions.multi_yo = (function app$functions$multi_yo(var_args){
var G__28752 = arguments.length;
switch (G__28752) {
case 0:
return app.functions.multi_yo.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.functions.multi_yo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.functions.multi_yo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28875 = arguments.length;
var i__4737__auto___28876 = (0);
while(true){
if((i__4737__auto___28876 < len__4736__auto___28875)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28876]));

var G__28877 = (i__4737__auto___28876 + (1));
i__4737__auto___28876 = G__28877;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return app.functions.multi_yo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(app.functions.multi_yo.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(app.functions.multi_yo.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (1);
}));

(app.functions.multi_yo.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (2);
}));

(app.functions.multi_yo.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,args){
return ((2) + cljs.core.count(args));
}));

/** @this {Function} */
(app.functions.multi_yo.cljs$lang$applyTo = (function (seq28746){
var G__28749 = cljs.core.first(seq28746);
var seq28746__$1 = cljs.core.next(seq28746);
var G__28750 = cljs.core.first(seq28746__$1);
var seq28746__$2 = cljs.core.next(seq28746__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28749,G__28750,seq28746__$2);
}));

(app.functions.multi_yo.cljs$lang$maxFixedArity = (2));

(function (p1__28815_SHARP_,p2__28816_SHARP_,p3__28817_SHARP_){
return ((p1__28815_SHARP_ + p2__28816_SHARP_) + p3__28817_SHARP_);
})((4),(5),(6));
(function (a,b,c){
return ((a + b) + c);
})((4),(5),(6));

//# sourceMappingURL=app.functions.js.map
