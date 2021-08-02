goog.provide('app.ms.core');
goog.require('cljs.core');
goog.require('app.ms.utils');
app.ms.core.init_vals = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(8),(17)], null),new cljs.core.Keyword(null,"score-progress","score-progress",1034476781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-1),(1)], null)], null);
app.ms.core.config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.ms.core.init_vals);
app.ms.core.get_config = (function app$ms$core$get_config(){
return cljs.core.deref(app.ms.core.config);
});
/**
 * Initialize configuration: sets the intervals and scoreProgress values
 */
app.ms.core.initialize_config = (function app$ms$core$initialize_config(var_args){
var G__32349 = arguments.length;
switch (G__32349) {
case 0:
return app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$1(app.ms.core.init_vals);
}));

(app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$1 = (function (init_values){
return cljs.core.reset_BANG_(app.ms.core.config,init_values);
}));

(app.ms.core.initialize_config.cljs$lang$maxFixedArity = 1);

app.ms.core.get_max_progress = (function app$ms$core$get_max_progress(){
return cljs.core.count(new cljs.core.Keyword(null,"intervals","intervals",2096054013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.ms.core.config)));
});
app.ms.core.get_current_score = (function app$ms$core$get_current_score(){
return (cljs.core.count(new cljs.core.Keyword(null,"score-progress","score-progress",1034476781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.ms.core.config))) - (1));
});
/**
 *  Get the initial record of the card
 * e.g: (get-initial-record (helpers/now))
 */
app.ms.core.get_initial_record = (function app$ms$core$get_initial_record(var_args){
var G__32351 = arguments.length;
switch (G__32351) {
case 0:
return app.ms.core.get_initial_record.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.ms.core.get_initial_record.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.ms.core.get_initial_record.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.ms.core.get_initial_record.cljs$core$IFn$_invoke$arity$1(app.ms.utils.get_now());
}));

(app.ms.core.get_initial_record.cljs$core$IFn$_invoke$arity$1 = (function (now){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"dueDate","dueDate",144851892),now], null);
}));

(app.ms.core.get_initial_record.cljs$lang$maxFixedArity = 1);

/**
 * calc-progress function takes three arguments:
 *  - score(int): users score
 *  - progress(int): How many times continuously the user has correctly answered this item.
 * returns the updated updated progress value
 */
app.ms.core.calc_progress = (function app$ms$core$calc_progress(score,progress){
var newProgress = (progress + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score-progress","score-progress",1034476781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.ms.core.config)),score));
if((newProgress < (0))){
return (0);
} else {
return newProgress;
}
});
/**
 * calc-date takes three arguments:
 *  - score(int): users score
 *  - progress(int): How many times continuously the user has correctly answered this item.
 *  - date(inst): the date of today
 * returns the updated date due with dates added
 */
app.ms.core.calc_date = (function app$ms$core$calc_date(score,progress,date){
var correct_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(score,app.ms.core.get_current_score());
if(((correct_QMARK_) && ((progress < app.ms.core.get_max_progress())))){
return app.ms.utils.add_days(date,((1) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intervals","intervals",2096054013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.ms.core.config)),progress)));
} else {
return app.ms.utils.add_days(date,(1));
}
});
/**
 * Calculate function takes the following arguments, and
 * returns the updated record of the item
 *  - score(int): how confident the user is with this item.
 *  - prevRecord(map): the previous record of this item
 *  - date(inst): the date of today
 * e.g (calculate 1 {:progress 0
 *                   :dueDate #inst "2020-03-27T19:44:51.851-00:00"}
 *                (utils/get-now))
 */
app.ms.core.calculate = (function app$ms$core$calculate(var_args){
var G__32353 = arguments.length;
switch (G__32353) {
case 2:
return app.ms.core.calculate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.ms.core.calculate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.ms.core.calculate.cljs$core$IFn$_invoke$arity$2 = (function (score,prevRecord){
return app.ms.core.calculate.cljs$core$IFn$_invoke$arity$3(score,prevRecord,app.ms.utils.get_now());
}));

(app.ms.core.calculate.cljs$core$IFn$_invoke$arity$3 = (function (score,p__32354,date){
var map__32355 = p__32354;
var map__32355__$1 = (((((!((map__32355 == null))))?(((((map__32355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32355):map__32355);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32355__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var formattedScore = app.ms.utils.format_score(score);
var newProgress = app.ms.core.calc_progress(formattedScore,progress);
var dueDate = app.ms.core.calc_date(formattedScore,progress,date);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),newProgress,new cljs.core.Keyword(null,"dueDate","dueDate",144851892),dueDate], null);
}));

(app.ms.core.calculate.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.ms.core.js.map
