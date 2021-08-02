goog.provide('app.kaboomv5.math.matrix');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('app.kaboomv5.math.vector');
goog.require('app.kaboomv5.math.color');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec3');
goog.require('goog.math.Matrix');
app.kaboomv5.math.matrix.neg = (function app$kaboomv5$math$matrix$neg(num){
return ((-1) * num);
});
app.kaboomv5.math.matrix.matrix = (function app$kaboomv5$math$matrix$matrix(val){
return (new goog.math.Matrix(cljs.core.clj__GT_js(val)));
});
app.kaboomv5.math.matrix.m1 = app.kaboomv5.math.matrix.matrix(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(3),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(3),(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(1)], null)], null));
app.kaboomv5.math.matrix.mat4 = (function app$kaboomv5$math$matrix$mat4(var_args){
var G__104403 = arguments.length;
switch (G__104403) {
case 0:
return app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null));
}));

(app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1 = (function (m){
return app.kaboomv5.math.matrix.matrix(m);
}));

(app.kaboomv5.math.matrix.mat4.cljs$lang$maxFixedArity = 1);

app.kaboomv5.math.matrix.mat4_QMARK_ = (function app$kaboomv5$math$matrix$mat4_QMARK_(m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),m.getSize().width);
});
app.kaboomv5.math.matrix.mult = (function app$kaboomv5$math$matrix$mult(this$,mat){
return this$.multiply(mat);
});
app.kaboomv5.math.matrix.mult_vec4 = (function app$kaboomv5$math$matrix$mult_vec4(this$,p__104406){
var map__104407 = p__104406;
var map__104407__$1 = (((((!((map__104407 == null))))?(((((map__104407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104407):map__104407);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104407__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104407__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104407__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104407__$1,new cljs.core.Keyword(null,"w","w",354169001));
var vect = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(this$.toArray().flat());
return app.kaboomv5.math.vector.vec4(((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(0))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(4)))) + (z * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(8)))) + (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(12)))),((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(1))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(5)))) + (z * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(9)))) + (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(13)))),((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(2))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(6)))) + (z * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(10)))) + (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(14)))),((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(3))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(7)))) + (z * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(11)))) + (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(15)))));
});
app.kaboomv5.math.matrix.mult_vec3 = (function app$kaboomv5$math$matrix$mult_vec3(mat,v3){
var map__104409 = app.kaboomv5.math.matrix.mult_vec4(mat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v3,new cljs.core.Keyword(null,"w","w",354169001),1.0));
var map__104409__$1 = (((((!((map__104409 == null))))?(((((map__104409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104409):map__104409);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104409__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104409__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104409__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return app.kaboomv5.math.vector.vec3(x,y,z);
});
app.kaboomv5.math.matrix.mult_vec2 = (function app$kaboomv5$math$matrix$mult_vec2(mat,p__104411){
var map__104412 = p__104411;
var map__104412__$1 = (((((!((map__104412 == null))))?(((((map__104412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104412):map__104412);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104412__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104412__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vect = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(mat.toArray().flat());
return app.kaboomv5.math.vector.vec2.cljs$core$IFn$_invoke$arity$2(((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(0))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(4)))) + ((0) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(8)))) + ((1) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(12)))),((((x * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(1))) + (y * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(5)))) + ((0) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(9)))) + ((1) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vect,(13)))));
});
app.kaboomv5.math.matrix.translate = (function app$kaboomv5$math$matrix$translate(this$,p__104417){
var map__104418 = p__104417;
var map__104418__$1 = (((((!((map__104418 == null))))?(((((map__104418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104418):map__104418);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104418__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104418__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.kaboomv5.math.matrix.mult(this$,app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(0),(1)], null)], null)));
});
app.kaboomv5.math.matrix.scale = (function app$kaboomv5$math$matrix$scale(this$,p__104420){
var map__104421 = p__104420;
var map__104421__$1 = (((((!((map__104421 == null))))?(((((map__104421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104421):map__104421);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104421__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104421__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.kaboomv5.math.matrix.mult(this$,app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null)));
});
app.kaboomv5.math.matrix.rot_x = (function app$kaboomv5$math$matrix$rot_x(this$,a){
return app.kaboomv5.math.matrix.mult(this$,app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Math.cos(a),app.kaboomv5.math.matrix.neg(Math.sin(a)),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Math.sin(a),Math.cos(a),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null)));
});
app.kaboomv5.math.matrix.rot_y = (function app$kaboomv5$math$matrix$rot_y(this$,a){
return app.kaboomv5.math.matrix.mult(this$,app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(a),(0),app.kaboomv5.math.matrix.neg(Math.sin(a)),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin(a),(0),Math.cos(a),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null)));
});
app.kaboomv5.math.matrix.rot_z = (function app$kaboomv5$math$matrix$rot_z(this$,a){
return app.kaboomv5.math.matrix.mult(this$,app.kaboomv5.math.matrix.mat4.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(a),app.kaboomv5.math.matrix.neg(Math.sin(a)),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin(a),Math.cos(a),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null)));
});
app.kaboomv5.math.matrix.invert = (function app$kaboomv5$math$matrix$invert(mat){
return mat.getInverse();
});

//# sourceMappingURL=app.kaboomv5.math.matrix.js.map
