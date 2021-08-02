goog.provide('app.kaboom_next.math');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
goog.require('app.kaboom_next.log');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec3');
goog.require('goog.math.Matrix');
app.kaboom_next.math.matrix = (function app$kaboom_next$math$matrix(val){
return (new goog.math.Matrix(cljs.core.clj__GT_js(val)));
});
app.kaboom_next.math.matrix4 = app.kaboom_next.math.matrix(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
app.kaboom_next.math.matrix3 = app.kaboom_next.math.matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4)], null)], null));
app.kaboom_next.math.matrix2 = app.kaboom_next.math.matrix(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null));
app.kaboom_next.math.mat2_QMARK_ = (function app$kaboom_next$math$mat2_QMARK_(m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),m.getSize().width);
});
app.kaboom_next.math.mat3_QMARK_ = (function app$kaboom_next$math$mat3_QMARK_(m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),m.getSize().width);
});
app.kaboom_next.math.mat4_QMARK_ = (function app$kaboom_next$math$mat4_QMARK_(m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),m.getSize().width);
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
app.kaboom_next.math.deg__GT_rad = (function app$kaboom_next$math$deg__GT_rad(deg){
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
app.kaboom_next.math.rad__GT_deg = (function app$kaboom_next$math$rad__GT_deg(rad){
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
app.kaboom_next.math.clamp = (function app$kaboom_next$math$clamp(value,min,max){
return goog.math.clamp(value,min,max);
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
app.kaboom_next.math.lerp = (function app$kaboom_next$math$lerp(a,b,x){
return goog.math.lerp(a,b,x);
});
app.kaboom_next.math.vec2 = (function app$kaboom_next$math$vec2(a,b){
return (new goog.math.Vec2(a,b));
});
/**
 * vec is a reserved function, so had to name as vect
 */
app.kaboom_next.math.vect = (function app$kaboom_next$math$vect(var_args){
var G__64010 = arguments.length;
switch (G__64010) {
case 2:
return app.kaboom_next.math.vect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom_next.math.vect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom_next.math.vect.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (new goog.math.Vec2(a,b));
}));

(app.kaboom_next.math.vect.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new goog.math.Vec3(a,b,c));
}));

(app.kaboom_next.math.vect.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.kaboom_next.math.js.map
