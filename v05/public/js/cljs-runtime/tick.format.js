goog.provide('tick.format');
goog.require('cljs.core');
goog.require('java.time.format');
tick.format.predefined_formatters = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"iso-zoned-date-time","iso-zoned-date-time",-1626338878),java.time.format.DateTimeFormatter.ISO_ZONED_DATE_TIME,new cljs.core.Keyword(null,"iso-offset-date-time","iso-offset-date-time",-47990863),java.time.format.DateTimeFormatter.ISO_OFFSET_DATE_TIME,new cljs.core.Keyword(null,"iso-local-time","iso-local-time",-1676599821),java.time.format.DateTimeFormatter.ISO_LOCAL_TIME,new cljs.core.Keyword(null,"iso-local-date-time","iso-local-date-time",-1669236935),java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME,new cljs.core.Keyword(null,"iso-local-date","iso-local-date",571187900),java.time.format.DateTimeFormatter.ISO_LOCAL_DATE,new cljs.core.Keyword(null,"iso-instant","iso-instant",1024383901),java.time.format.DateTimeFormatter.ISO_INSTANT], null);
/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-local-date etc
 *   
 *   and a Locale, which is optional.
 */
tick.format.formatter = (function tick$format$formatter(var_args){
var G__27543 = arguments.length;
switch (G__27543) {
case 1:
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,(function (){try{var G__27545 = goog.object.get(JSJodaLocale,"Locale");
if((G__27545 == null)){
return null;
} else {
return goog.object.get(G__27545,"US");
}
}catch (e27544){if((e27544 instanceof Error)){
var e = e27544;
return null;
} else {
throw e27544;

}
}})());
}));

(tick.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
var fmt__$1 = (((fmt instanceof java.time.format.DateTimeFormatter))?fmt:((typeof fmt === 'string')?(((locale == null))?(function(){throw (new Error("Locale is nil, try adding a require '[tick.locale-en-us]"))})():java.time.format.DateTimeFormatter.ofPattern(fmt).withLocale(locale)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.format.predefined_formatters,fmt)
));
return fmt__$1;
}));

(tick.format.formatter.cljs$lang$maxFixedArity = 2);

/**
 * Formats the given time entity as a string.
 *   Accepts something that can be converted to a `DateTimeFormatter` as a first
 *   argument. Given one argument uses the default format.
 */
tick.format.format = (function tick$format$format(var_args){
var G__27547 = arguments.length;
switch (G__27547) {
case 1:
return tick.format.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.format.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.format.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}));

(tick.format.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt).format(o);
}));

(tick.format.format.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=tick.format.js.map
