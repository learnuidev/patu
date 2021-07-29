goog.provide('app.ms.utils');
goog.require('cljs.core');
goog.require('tick.alpha.api');
app.ms.utils.MIN_SCORE = (0);
app.ms.utils.MAX_SCORE = (2);
/**
 * Converts date to instant
 */
app.ms.utils.date__GT_inst = (function app$ms$utils$date__GT_inst(date){
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1(date);
});
/**
 * Converts inst to date
 */
app.ms.utils.inst__GT_date = (function app$ms$utils$inst__GT_date(inst){
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(inst);
});
/**
 * Get the present date and time
 */
app.ms.utils.get_now = (function app$ms$utils$get_now(){
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();
});
app.ms.utils.add_days_BANG_ = (function app$ms$utils$add_days_BANG_(date,total_days){
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic(date,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(total_days,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
});
/**
 * Takes a an instant and total dat
 */
app.ms.utils.add_days = (function app$ms$utils$add_days(inst,total_days){
var date = app.ms.utils.inst__GT_date(inst);
return app.ms.utils.date__GT_inst(app.ms.utils.add_days_BANG_(date,total_days));
});
/**
 * Formats the score
 */
app.ms.utils.format_score = (function app$ms$utils$format_score(score){
if((score < app.ms.utils.MIN_SCORE)){
return app.ms.utils.MIN_SCORE;
} else {
if((score > app.ms.utils.MAX_SCORE)){
return app.ms.utils.MAX_SCORE;
} else {
return score;

}
}
});

//# sourceMappingURL=app.ms.utils.js.map
