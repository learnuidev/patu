goog.provide('app.kaboomv1.math');
goog.require('cljs.core');
app.kaboomv1.math.vec2 = (function app$kaboomv1$math$vec2(var_args){
var G__47660 = arguments.length;
switch (G__47660) {
case 1:
return app.kaboomv1.math.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv1.math.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv1.math.vec2.cljs$core$IFn$_invoke$arity$1 = (function (xy){
return app.kaboomv1.math.vec2.cljs$core$IFn$_invoke$arity$2(xy,xy);
}));

(app.kaboomv1.math.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}));

(app.kaboomv1.math.vec2.cljs$lang$maxFixedArity = 2);

app.kaboomv1.math.mat4 = (function app$kaboomv1$math$mat4(var_args){
var G__47662 = arguments.length;
switch (G__47662) {
case 0:
return app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1)], null));
}));

(app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$1 = (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null);
}));

(app.kaboomv1.math.mat4.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.kaboomv1.math.js.map
