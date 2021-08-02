goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36246){
var map__36247 = p__36246;
var map__36247__$1 = (((((!((map__36247 == null))))?(((((map__36247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36247):map__36247);
var m = map__36247__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36247__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36249_36463 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36250_36464 = null;
var count__36251_36465 = (0);
var i__36252_36466 = (0);
while(true){
if((i__36252_36466 < count__36251_36465)){
var f_36467 = chunk__36250_36464.cljs$core$IIndexed$_nth$arity$2(null,i__36252_36466);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36467], 0));


var G__36468 = seq__36249_36463;
var G__36469 = chunk__36250_36464;
var G__36470 = count__36251_36465;
var G__36471 = (i__36252_36466 + (1));
seq__36249_36463 = G__36468;
chunk__36250_36464 = G__36469;
count__36251_36465 = G__36470;
i__36252_36466 = G__36471;
continue;
} else {
var temp__5735__auto___36472 = cljs.core.seq(seq__36249_36463);
if(temp__5735__auto___36472){
var seq__36249_36473__$1 = temp__5735__auto___36472;
if(cljs.core.chunked_seq_QMARK_(seq__36249_36473__$1)){
var c__4556__auto___36474 = cljs.core.chunk_first(seq__36249_36473__$1);
var G__36475 = cljs.core.chunk_rest(seq__36249_36473__$1);
var G__36476 = c__4556__auto___36474;
var G__36477 = cljs.core.count(c__4556__auto___36474);
var G__36478 = (0);
seq__36249_36463 = G__36475;
chunk__36250_36464 = G__36476;
count__36251_36465 = G__36477;
i__36252_36466 = G__36478;
continue;
} else {
var f_36479 = cljs.core.first(seq__36249_36473__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36479], 0));


var G__36480 = cljs.core.next(seq__36249_36473__$1);
var G__36481 = null;
var G__36482 = (0);
var G__36483 = (0);
seq__36249_36463 = G__36480;
chunk__36250_36464 = G__36481;
count__36251_36465 = G__36482;
i__36252_36466 = G__36483;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36484 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36484], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36484)))?cljs.core.second(arglists_36484):arglists_36484)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36257_36485 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36258_36486 = null;
var count__36259_36487 = (0);
var i__36260_36488 = (0);
while(true){
if((i__36260_36488 < count__36259_36487)){
var vec__36274_36489 = chunk__36258_36486.cljs$core$IIndexed$_nth$arity$2(null,i__36260_36488);
var name_36490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274_36489,(0),null);
var map__36277_36491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274_36489,(1),null);
var map__36277_36492__$1 = (((((!((map__36277_36491 == null))))?(((((map__36277_36491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36277_36491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36277_36491):map__36277_36491);
var doc_36493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277_36492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277_36492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36490], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36494], 0));

if(cljs.core.truth_(doc_36493)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36493], 0));
} else {
}


var G__36495 = seq__36257_36485;
var G__36496 = chunk__36258_36486;
var G__36497 = count__36259_36487;
var G__36498 = (i__36260_36488 + (1));
seq__36257_36485 = G__36495;
chunk__36258_36486 = G__36496;
count__36259_36487 = G__36497;
i__36260_36488 = G__36498;
continue;
} else {
var temp__5735__auto___36499 = cljs.core.seq(seq__36257_36485);
if(temp__5735__auto___36499){
var seq__36257_36500__$1 = temp__5735__auto___36499;
if(cljs.core.chunked_seq_QMARK_(seq__36257_36500__$1)){
var c__4556__auto___36501 = cljs.core.chunk_first(seq__36257_36500__$1);
var G__36502 = cljs.core.chunk_rest(seq__36257_36500__$1);
var G__36503 = c__4556__auto___36501;
var G__36504 = cljs.core.count(c__4556__auto___36501);
var G__36505 = (0);
seq__36257_36485 = G__36502;
chunk__36258_36486 = G__36503;
count__36259_36487 = G__36504;
i__36260_36488 = G__36505;
continue;
} else {
var vec__36279_36506 = cljs.core.first(seq__36257_36500__$1);
var name_36507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36506,(0),null);
var map__36282_36508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36506,(1),null);
var map__36282_36509__$1 = (((((!((map__36282_36508 == null))))?(((((map__36282_36508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36282_36508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36282_36508):map__36282_36508);
var doc_36510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36282_36509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36282_36509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36507], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36511], 0));

if(cljs.core.truth_(doc_36510)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36510], 0));
} else {
}


var G__36512 = cljs.core.next(seq__36257_36500__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__36257_36485 = G__36512;
chunk__36258_36486 = G__36513;
count__36259_36487 = G__36514;
i__36260_36488 = G__36515;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36286 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36287 = null;
var count__36288 = (0);
var i__36289 = (0);
while(true){
if((i__36289 < count__36288)){
var role = chunk__36287.cljs$core$IIndexed$_nth$arity$2(null,i__36289);
var temp__5735__auto___36516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36516__$1)){
var spec_36517 = temp__5735__auto___36516__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36517)], 0));
} else {
}


var G__36518 = seq__36286;
var G__36519 = chunk__36287;
var G__36520 = count__36288;
var G__36521 = (i__36289 + (1));
seq__36286 = G__36518;
chunk__36287 = G__36519;
count__36288 = G__36520;
i__36289 = G__36521;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36286);
if(temp__5735__auto____$1){
var seq__36286__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36286__$1);
var G__36522 = cljs.core.chunk_rest(seq__36286__$1);
var G__36523 = c__4556__auto__;
var G__36524 = cljs.core.count(c__4556__auto__);
var G__36525 = (0);
seq__36286 = G__36522;
chunk__36287 = G__36523;
count__36288 = G__36524;
i__36289 = G__36525;
continue;
} else {
var role = cljs.core.first(seq__36286__$1);
var temp__5735__auto___36526__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36526__$2)){
var spec_36527 = temp__5735__auto___36526__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36527)], 0));
} else {
}


var G__36528 = cljs.core.next(seq__36286__$1);
var G__36529 = null;
var G__36530 = (0);
var G__36531 = (0);
seq__36286 = G__36528;
chunk__36287 = G__36529;
count__36288 = G__36530;
i__36289 = G__36531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36537 = cljs.core.ex_cause(t);
via = G__36536;
t = G__36537;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36312 = datafied_throwable;
var map__36312__$1 = (((((!((map__36312 == null))))?(((((map__36312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36312):map__36312);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36312__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36313 = cljs.core.last(via);
var map__36313__$1 = (((((!((map__36313 == null))))?(((((map__36313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36313):map__36313);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36314 = data;
var map__36314__$1 = (((((!((map__36314 == null))))?(((((map__36314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36314):map__36314);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36315 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36315__$1 = (((((!((map__36315 == null))))?(((((map__36315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36315):map__36315);
var top_data = map__36315__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36331 = phase;
var G__36331__$1 = (((G__36331 instanceof cljs.core.Keyword))?G__36331.fqn:null);
switch (G__36331__$1) {
case "read-source":
var map__36342 = data;
var map__36342__$1 = (((((!((map__36342 == null))))?(((((map__36342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36342):map__36342);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36342__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36342__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36348);
var G__36348__$2 = (cljs.core.truth_((function (){var fexpr__36355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36355.cljs$core$IFn$_invoke$arity$1 ? fexpr__36355.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36355.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36348__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36348__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36370 = top_data;
var G__36370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36370);
var G__36370__$2 = (cljs.core.truth_((function (){var fexpr__36371 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36371.cljs$core$IFn$_invoke$arity$1 ? fexpr__36371.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36371.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36370__$1);
var G__36370__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36370__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36370__$2);
var G__36370__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36370__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36370__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36370__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36370__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36376 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36376,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36376,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36376,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36376,(3),null);
var G__36382 = top_data;
var G__36382__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36382,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36382);
var G__36382__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36382__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36382__$1);
var G__36382__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36382__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36382__$2);
var G__36382__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36382__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36382__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36382__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36382__$4;
}

break;
case "execution":
var vec__36387 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36298_SHARP_){
var or__4126__auto__ = (p1__36298_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36401.cljs$core$IFn$_invoke$arity$1 ? fexpr__36401.cljs$core$IFn$_invoke$arity$1(p1__36298_SHARP_) : fexpr__36401.call(null,p1__36298_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36402 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36402__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36402,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36402);
var G__36402__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36402__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36402__$1);
var G__36402__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36402__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36402__$2);
var G__36402__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36402__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36402__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36402__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36402__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36331__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36417){
var map__36418 = p__36417;
var map__36418__$1 = (((((!((map__36418 == null))))?(((((map__36418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36418):map__36418);
var triage_data = map__36418__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36422 = phase;
var G__36422__$1 = (((G__36422 instanceof cljs.core.Keyword))?G__36422.fqn:null);
switch (G__36422__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36423 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36424 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36425 = loc;
var G__36426 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36427_36545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36428_36546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36429_36547 = true;
var _STAR_print_fn_STAR__temp_val__36430_36548 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36429_36547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36430_36548);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36415_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36415_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36428_36546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36427_36545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36423,G__36424,G__36425,G__36426) : format.call(null,G__36423,G__36424,G__36425,G__36426));

break;
case "macroexpansion":
var G__36431 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36432 = cause_type;
var G__36433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36434 = loc;
var G__36435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36431,G__36432,G__36433,G__36434,G__36435) : format.call(null,G__36431,G__36432,G__36433,G__36434,G__36435));

break;
case "compile-syntax-check":
var G__36437 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36438 = cause_type;
var G__36439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36440 = loc;
var G__36441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36437,G__36438,G__36439,G__36440,G__36441) : format.call(null,G__36437,G__36438,G__36439,G__36440,G__36441));

break;
case "compilation":
var G__36442 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36443 = cause_type;
var G__36444 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36445 = loc;
var G__36446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36442,G__36443,G__36444,G__36445,G__36446) : format.call(null,G__36442,G__36443,G__36444,G__36445,G__36446));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36447 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36448 = symbol;
var G__36449 = loc;
var G__36450 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36451_36549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36452_36550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36453_36551 = true;
var _STAR_print_fn_STAR__temp_val__36454_36552 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36453_36551);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36454_36552);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36452_36550);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36451_36549);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36447,G__36448,G__36449,G__36450) : format.call(null,G__36447,G__36448,G__36449,G__36450));
} else {
var G__36457 = "Execution error%s at %s(%s).\n%s\n";
var G__36458 = cause_type;
var G__36459 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36460 = loc;
var G__36461 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36457,G__36458,G__36459,G__36460,G__36461) : format.call(null,G__36457,G__36458,G__36459,G__36460,G__36461));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36422__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
