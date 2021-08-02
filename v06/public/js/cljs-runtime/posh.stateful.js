goog.provide('posh.stateful');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
posh.stateful.get_posh_atom = (function posh$stateful$get_posh_atom(posh_item){
return new cljs.core.Keyword(null,"posh","posh",-1205664462).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(posh_item));
});
posh.stateful.poshdb__GT_conn = (function posh$stateful$poshdb__GT_conn(poshdb){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(posh.lib.db.poshdb__GT_attrs(cljs.core.deref(posh.stateful.get_posh_atom(poshdb)),poshdb));
});
posh.stateful.new_posh = (function posh$stateful$new_posh(dcfg,retrieve){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(posh.core.empty_tree(dcfg,retrieve));
});
posh.stateful.add_db = (function posh$stateful$add_db(posh_atom,db_id,conn,schema,opts){
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_(posh_atom,posh.core.add_db.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(posh_atom),db_id,conn,schema,opts))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_pull = (function posh$stateful$add_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_(posh_atom,posh.core.add_pull(cljs.core.deref(posh_atom),poshdb,pull_pattern,eid))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_q = (function posh$stateful$add_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47563 = arguments.length;
var i__4737__auto___47564 = (0);
while(true){
if((i__4737__auto___47564 < len__4736__auto___47563)){
args__4742__auto__.push((arguments[i__4737__auto___47564]));

var G__47565 = (i__4737__auto___47564 + (1));
i__4737__auto___47564 = G__47565;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_(posh_atom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,cljs.core.deref(posh_atom),query),args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
}));

(posh.stateful.add_q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.stateful.add_q.cljs$lang$applyTo = (function (seq47550){
var G__47551 = cljs.core.first(seq47550);
var seq47550__$1 = cljs.core.next(seq47550);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47551,seq47550__$1);
}));

posh.stateful.add_filter_tx = (function posh$stateful$add_filter_tx(poshdb,tx_patterns){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (p1__47554_SHARP_){
return posh.core.add_filter_tx(p1__47554_SHARP_,poshdb,tx_patterns);
}))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_filter_pull = (function posh$stateful$add_filter_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (p1__47556_SHARP_){
return posh.core.add_filter_pull(p1__47556_SHARP_,poshdb,pull_pattern,eid);
}))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_filter_q = (function posh$stateful$add_filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47566 = arguments.length;
var i__4737__auto___47567 = (0);
while(true){
if((i__4737__auto___47567 < len__4736__auto___47566)){
args__4742__auto__.push((arguments[i__4737__auto___47567]));

var G__47568 = (i__4737__auto___47567 + (1));
i__4737__auto___47567 = G__47568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (p1__47557_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.core.add_filter_q,p1__47557_SHARP_,query,args);
}))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
}));

(posh.stateful.add_filter_q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.stateful.add_filter_q.cljs$lang$applyTo = (function (seq47558){
var G__47559 = cljs.core.first(seq47558);
var seq47558__$1 = cljs.core.next(seq47558);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47559,seq47558__$1);
}));

posh.stateful.rm = (function posh$stateful$rm(posh_item){
var posh_atom = posh.stateful.get_posh_atom(posh_item);
return cljs.core.reset_BANG_(posh_atom,posh.core.remove_item(cljs.core.deref(posh_atom),posh_item));
});
posh.stateful.transact = (function posh$stateful$transact(posh_item,tx){
var posh_atom = posh.stateful.get_posh_atom(posh_item);
cljs.core.reset_BANG_(posh_atom,posh.core.add_tx(cljs.core.deref(posh_atom),posh_item,tx));

return true;
});
posh.stateful.transact_all_BANG_ = (function posh$stateful$transact_all_BANG_(posh_atom){
return cljs.core.reset_BANG_(posh_atom,posh.core.process_tx_BANG_(cljs.core.deref(posh_atom)));
});
posh.stateful.cache = (function posh$stateful$cache(posh_query){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query);
});
posh.stateful.results = (function posh$stateful$results(posh_query){
return new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query));
});
posh.stateful.reload_patterns = (function posh$stateful$reload_patterns(posh_query){
return new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query));
});
posh.stateful.pass_patterns = (function posh$stateful$pass_patterns(posh_query){
return new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query));
});
posh.stateful.datoms = (function posh$stateful$datoms(posh_query){
return new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query));
});
posh.stateful.datoms_t = (function posh$stateful$datoms_t(posh_query){
return new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.stateful.get_posh_atom(posh_query))),posh_query));
});

//# sourceMappingURL=posh.stateful.js.map
