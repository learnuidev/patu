goog.provide('app.kaboomv5.math.other');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('cljs.repl');
app.kaboomv5.math.other.neg = (function app$kaboomv5$math$other$neg(num){
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
app.kaboomv5.math.other.deg__GT_rad = (function app$kaboomv5$math$other$deg__GT_rad(deg){
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
app.kaboomv5.math.other.rad__GT_deg = (function app$kaboomv5$math$other$rad__GT_deg(rad){
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
app.kaboomv5.math.other.clamp = (function app$kaboomv5$math$other$clamp(value,min,max){
if((min > max)){
return (app.kaboomv5.math.other.clamp.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.other.clamp.cljs$core$IFn$_invoke$arity$3(value,max,min) : app.kaboomv5.math.other.clamp.call(null,value,max,min));
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
app.kaboomv5.math.other.lerp = (function app$kaboomv5$math$other$lerp(a,b,x){
return goog.math.lerp(a,b,x);
});

//# sourceMappingURL=app.kaboomv5.math.other.js.map
