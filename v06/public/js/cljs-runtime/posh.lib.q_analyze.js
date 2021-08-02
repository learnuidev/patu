goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__47076 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47076) : stop_at_QMARK_.call(null,G__47076));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__47077 = stop_at_QMARK_;
var G__47078 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__47077,G__47078) : posh.lib.q_analyze.take_until.call(null,G__47077,G__47078));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__47080 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47080) : rest_at_QMARK_.call(null,G__47080));
}
})())){
return ls;
} else {
var G__47438 = rest_at_QMARK_;
var G__47439 = cljs.core.rest(ls);
rest_at_QMARK_ = G__47438;
ls = G__47439;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__47081 = split_at_QMARK_;
var G__47082 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__47081,G__47082) : posh.lib.q_analyze.split_list_at.call(null,G__47081,G__47082));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__47083 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47083) : posh.lib.q_analyze.get_all_vars.call(null,G__47083));
})(),(function (){var G__47084 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47084) : posh.lib.q_analyze.get_all_vars.call(null,G__47084));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__47085 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47085) : posh.lib.q_analyze.get_all_vars.call(null,G__47085));
})(),cljs.core.first(query));
} else {
var G__47086 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47086) : posh.lib.q_analyze.get_all_vars.call(null,G__47086));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__47087 = cljs.core.rest(eav);
var G__47088 = (n - (1));
var G__47089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__47090 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__47087,G__47088,G__47089,G__47090) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__47087,G__47088,G__47089,G__47090));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__47091 = cljs.core.rest(eav);
var G__47092 = (n - (1));
var G__47093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__47094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__47091,G__47092,G__47093,G__47094) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__47091,G__47092,G__47093,G__47094));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__47095 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__47095) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__47095));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__47096 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__47096) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__47096));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__47097 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47097) : posh.lib.q_analyze.get_eavs.call(null,G__47097));
})(),(function (){var G__47098 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47098) : posh.lib.q_analyze.get_eavs.call(null,G__47098));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__47099 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47099) : posh.lib.q_analyze.get_eavs.call(null,G__47099));
})(),(function (){var G__47100 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47100) : posh.lib.q_analyze.get_eavs.call(null,G__47100));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__47101 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47101) : posh.lib.q_analyze.get_eavs.call(null,G__47101));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_47102 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_47102)) && ((cljs.core.count(ocr_47102) === 2)))){
try{var ocr_47102_0__47105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102,(0));
if(((cljs.core.vector_QMARK_(ocr_47102_0__47105)) && ((cljs.core.count(ocr_47102_0__47105) === 5)))){
try{var ocr_47102_0__47105_0__47107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102_0__47105,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47102_0__47105_0__47107,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102_0__47105,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102_0__47105,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102_0__47105,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47102,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__47116 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47116) : posh.lib.q_analyze.get_eavs.call(null,G__47116));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e47115){if((e47115 instanceof Error)){
var e__46070__auto__ = e47115;
if((e__46070__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto__;
}
} else {
throw e47115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47114){if((e47114 instanceof Error)){
var e__46070__auto__ = e47114;
if((e__46070__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto__;
}
} else {
throw e47114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47112){if((e47112 instanceof Error)){
var e__46070__auto__ = e47112;
if((e__46070__auto__ === cljs.core.match.backtrack)){
var G__47113 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47113) : posh.lib.q_analyze.get_eavs.call(null,G__47113));
} else {
throw e__46070__auto__;
}
} else {
throw e47112;

}
}} else {
var G__47117 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47117) : posh.lib.q_analyze.get_eavs.call(null,G__47117));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__47118){
var vec__47119 = p__47118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47122_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__47122_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__47122_SHARP_);
} else {
return p1__47122_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47123 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47123) : posh.lib.q_analyze.count_qvars.call(null,G__47123));
})(),(function (){var G__47124 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47124) : posh.lib.q_analyze.count_qvars.call(null,G__47124));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__47125 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47125) : posh.lib.q_analyze.count_qvars.call(null,G__47125));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__47126(s__47127){
return (new cljs.core.LazySeq(null,(function (){
var s__47127__$1 = s__47127;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47127__$1);
if(temp__5735__auto__){
var s__47127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47127__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47127__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47129 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47128 = (0);
while(true){
if((i__47128 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__47128);
cljs.core.chunk_append(b__47129,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__47466 = (i__47128 + (1));
i__47128 = G__47466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47129),posh$lib$q_analyze$fill_qvar_set_$_iter__47126(cljs.core.chunk_rest(s__47127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47129),null);
}
} else {
var r = cljs.core.first(s__47127__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__47126(cljs.core.rest(s__47127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__47130 = cljs.core.first(seq1);
var G__47131 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47130,G__47131) : f.call(null,G__47130,G__47131));
})(),(function (){var G__47132 = f;
var G__47133 = cljs.core.rest(seq1);
var G__47134 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__47132,G__47133,G__47134) : posh.lib.q_analyze.seq_merge_with.call(null,G__47132,G__47133,G__47134));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__47137){
var vec__47138 = p__47137;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47138,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47138,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47138,(2),null);
var eav = vec__47138;
var vec__47141 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144(s__47145){
return (new cljs.core.LazySeq(null,(function (){
var s__47145__$1 = s__47145;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47145__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__47145__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144_$_iter__47146(s__47147){
return (new cljs.core.LazySeq(null,((function (s__47145__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (){
var s__47147__$1 = s__47147;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47147__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__47147__$1,s__47145__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144_$_iter__47146_$_iter__47148(s__47149){
return (new cljs.core.LazySeq(null,((function (s__47147__$1,s__47145__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (){
var s__47149__$1 = s__47149;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__47149__$1);
if(temp__5735__auto____$2){
var s__47149__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__47149__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47149__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47151 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47150 = (0);
while(true){
if((i__47150 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__47150);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47150,s__47149__$1,s__47147__$1,s__47145__$1,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p1__47135_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__47135_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__47150,s__47149__$1,s__47147__$1,s__47145__$1,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47150,s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p__47152){
var vec__47153 = p__47152;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__47150,s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47150,s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p1__47136_SHARP_){
if(cljs.core.truth_(p1__47136_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__47150,s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__47151,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__47151,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__47472 = (i__47150 + (1));
i__47150 = G__47472;
continue;
} else {
var G__47473 = (i__47150 + (1));
i__47150 = G__47473;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47151),posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144_$_iter__47146_$_iter__47148(cljs.core.chunk_rest(s__47149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47151),null);
}
} else {
var vv = cljs.core.first(s__47149__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47149__$1,s__47147__$1,s__47145__$1,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p1__47135_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__47135_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__47149__$1,s__47147__$1,s__47145__$1,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p__47156){
var vec__47157 = p__47156;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,exposed_qvars,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav){
return (function (p1__47136_SHARP_){
if(cljs.core.truth_(p1__47136_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__47149__$1,s__47147__$1,s__47145__$1,wildcard_count,exposed_qvars,vv,s__47149__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144_$_iter__47146_$_iter__47148(cljs.core.rest(s__47149__$2)));
} else {
var G__47478 = cljs.core.rest(s__47149__$2);
s__47149__$1 = G__47478;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47147__$1,s__47145__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,null,null));
});})(s__47147__$1,s__47145__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144_$_iter__47146(cljs.core.rest(s__47147__$1)));
} else {
var G__47479 = cljs.core.rest(s__47147__$1);
s__47147__$1 = G__47479;
continue;
}
} else {
return null;
}
break;
}
});})(s__47145__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
,null,null));
});})(s__47145__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47141,qe,qa,qv,vec__47138,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__47144(cljs.core.rest(s__47145__$1)));
} else {
var G__47480 = cljs.core.rest(s__47145__$1);
s__47145__$1 = G__47480;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_47160 = cljs.core.vec(eav);
var ocr_47161 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_47160)) && ((cljs.core.count(ocr_47160) === 3)))){
try{var ocr_47160_0__47189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_0__47189,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47265){if((e47265 instanceof Error)){
var e__46070__auto__ = e47265;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47161)) && ((cljs.core.count(ocr_47161) === 3)))){
try{var ocr_47161_2__47194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47194 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47267){if((e47267 instanceof Error)){
var e__46070__auto____$1 = e47267;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47194 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47268){if((e47268 instanceof Error)){
var e__46070__auto____$2 = e47268;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47268;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47266){if((e47266 instanceof Error)){
var e__46070__auto____$1 = e47266;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47266;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47265;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47260){if((e47260 instanceof Error)){
var e__46070__auto__ = e47260;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_47161)) && ((cljs.core.count(ocr_47161) === 3)))){
try{var ocr_47161_1__47196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47196 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47263){if((e47263 instanceof Error)){
var e__46070__auto____$1 = e47263;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47161_1__47196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47196 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47264){if((e47264 instanceof Error)){
var e__46070__auto____$2 = e47264;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47264;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47262){if((e47262 instanceof Error)){
var e__46070__auto____$1 = e47262;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47261){if((e47261 instanceof Error)){
var e__46070__auto____$1 = e47261;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47261;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47260;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47202){if((e47202 instanceof Error)){
var e__46070__auto__ = e47202;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47161)) && ((cljs.core.count(ocr_47161) === 3)))){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47259){if((e47259 instanceof Error)){
var e__46070__auto____$1 = e47259;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47258){if((e47258 instanceof Error)){
var e__46070__auto____$1 = e47258;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47204){if((e47204 instanceof Error)){
var e__46070__auto____$1 = e47204;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47255){if((e47255 instanceof Error)){
var e__46070__auto____$2 = e47255;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47256){if((e47256 instanceof Error)){
var e__46070__auto____$3 = e47256;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47257){if((e47257 instanceof Error)){
var e__46070__auto____$4 = e47257;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47257;

}
}} else {
throw e__46070__auto____$3;
}
} else {
throw e47256;

}
}} else {
throw e__46070__auto____$2;
}
} else {
throw e47255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47254){if((e47254 instanceof Error)){
var e__46070__auto____$2 = e47254;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47205){if((e47205 instanceof Error)){
var e__46070__auto____$2 = e47205;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47253){if((e47253 instanceof Error)){
var e__46070__auto____$3 = e47253;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$3;
}
} else {
throw e47253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47250){if((e47250 instanceof Error)){
var e__46070__auto____$3 = e47250;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
try{var ocr_47160_2__47191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_2__47191,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47252){if((e47252 instanceof Error)){
var e__46070__auto____$4 = e47252;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47251){if((e47251 instanceof Error)){
var e__46070__auto____$4 = e47251;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47251;

}
}} else {
throw e__46070__auto____$3;
}
} else {
throw e47250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47206){if((e47206 instanceof Error)){
var e__46070__auto____$3 = e47206;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47249){if((e47249 instanceof Error)){
var e__46070__auto____$4 = e47249;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47248){if((e47248 instanceof Error)){
var e__46070__auto____$4 = e47248;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47207){if((e47207 instanceof Error)){
var e__46070__auto____$4 = e47207;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47247){if((e47247 instanceof Error)){
var e__46070__auto____$5 = e47247;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$5;
}
} else {
throw e47247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47246){if((e47246 instanceof Error)){
var e__46070__auto____$5 = e47246;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$5;
}
} else {
throw e47246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47208){if((e47208 instanceof Error)){
var e__46070__auto____$5 = e47208;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47245){if((e47245 instanceof Error)){
var e__46070__auto____$6 = e47245;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$6;
}
} else {
throw e47245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47244){if((e47244 instanceof Error)){
var e__46070__auto____$6 = e47244;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$6;
}
} else {
throw e47244;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47209){if((e47209 instanceof Error)){
var e__46070__auto____$6 = e47209;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47160_1__47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_1__47190,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47243){if((e47243 instanceof Error)){
var e__46070__auto____$7 = e47243;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47242){if((e47242 instanceof Error)){
var e__46070__auto____$7 = e47242;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47210){if((e47210 instanceof Error)){
var e__46070__auto____$7 = e47210;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
try{var ocr_47160_0__47189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_0__47189,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47241){if((e47241 instanceof Error)){
var e__46070__auto____$8 = e47241;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$8;
}
} else {
throw e47241;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47240){if((e47240 instanceof Error)){
var e__46070__auto____$8 = e47240;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$8;
}
} else {
throw e47240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47211){if((e47211 instanceof Error)){
var e__46070__auto____$8 = e47211;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
try{var ocr_47160_0__47189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_0__47189,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47239){if((e47239 instanceof Error)){
var e__46070__auto____$9 = e47239;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$9;
}
} else {
throw e47239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47238){if((e47238 instanceof Error)){
var e__46070__auto____$9 = e47238;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$9;
}
} else {
throw e47238;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47212){if((e47212 instanceof Error)){
var e__46070__auto____$9 = e47212;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
try{var ocr_47160_0__47189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_0__47189,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47237){if((e47237 instanceof Error)){
var e__46070__auto____$10 = e47237;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47236){if((e47236 instanceof Error)){
var e__46070__auto____$10 = e47236;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47236;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47213){if((e47213 instanceof Error)){
var e__46070__auto____$10 = e47213;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
try{var ocr_47160_0__47189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47160_0__47189,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47235){if((e47235 instanceof Error)){
var e__46070__auto____$11 = e47235;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$11;
}
} else {
throw e47235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47234){if((e47234 instanceof Error)){
var e__46070__auto____$11 = e47234;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$11;
}
} else {
throw e47234;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47214){if((e47214 instanceof Error)){
var e__46070__auto____$11 = e47214;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47233){if((e47233 instanceof Error)){
var e__46070__auto____$12 = e47233;
if((e__46070__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$12;
}
} else {
throw e47233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47228){if((e47228 instanceof Error)){
var e__46070__auto____$12 = e47228;
if((e__46070__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47232){if((e47232 instanceof Error)){
var e__46070__auto____$13 = e47232;
if((e__46070__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$13;
}
} else {
throw e47232;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47229){if((e47229 instanceof Error)){
var e__46070__auto____$13 = e47229;
if((e__46070__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47231){if((e47231 instanceof Error)){
var e__46070__auto____$14 = e47231;
if((e__46070__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$14;
}
} else {
throw e47231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47230){if((e47230 instanceof Error)){
var e__46070__auto____$14 = e47230;
if((e__46070__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$14;
}
} else {
throw e47230;

}
}} else {
throw e__46070__auto____$13;
}
} else {
throw e47229;

}
}} else {
throw e__46070__auto____$12;
}
} else {
throw e47228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47215){if((e47215 instanceof Error)){
var e__46070__auto____$12 = e47215;
if((e__46070__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47227){if((e47227 instanceof Error)){
var e__46070__auto____$13 = e47227;
if((e__46070__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$13;
}
} else {
throw e47227;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47226){if((e47226 instanceof Error)){
var e__46070__auto____$13 = e47226;
if((e__46070__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$13;
}
} else {
throw e47226;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47216){if((e47216 instanceof Error)){
var e__46070__auto____$13 = e47216;
if((e__46070__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === true)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47225){if((e47225 instanceof Error)){
var e__46070__auto____$14 = e47225;
if((e__46070__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$14;
}
} else {
throw e47225;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47224){if((e47224 instanceof Error)){
var e__46070__auto____$14 = e47224;
if((e__46070__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$14;
}
} else {
throw e47224;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47217){if((e47217 instanceof Error)){
var e__46070__auto____$14 = e47217;
if((e__46070__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_47161_2__47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(2));
if((ocr_47161_2__47200 === false)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === true)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47223){if((e47223 instanceof Error)){
var e__46070__auto____$15 = e47223;
if((e__46070__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$15;
}
} else {
throw e47223;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47219){if((e47219 instanceof Error)){
var e__46070__auto____$15 = e47219;
if((e__46070__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_47161_0__47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(0));
if((ocr_47161_0__47198 === false)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47221){if((e47221 instanceof Error)){
var e__46070__auto____$16 = e47221;
if((e__46070__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_47161_1__47199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47161,(1));
if((ocr_47161_1__47199 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47160,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47222){if((e47222 instanceof Error)){
var e__46070__auto____$17 = e47222;
if((e__46070__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$17;
}
} else {
throw e47222;

}
}} else {
throw e__46070__auto____$16;
}
} else {
throw e47221;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47220){if((e47220 instanceof Error)){
var e__46070__auto____$16 = e47220;
if((e__46070__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$16;
}
} else {
throw e47220;

}
}} else {
throw e__46070__auto____$15;
}
} else {
throw e47219;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47218){if((e47218 instanceof Error)){
var e__46070__auto____$15 = e47218;
if((e__46070__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$15;
}
} else {
throw e47218;

}
}} else {
throw e__46070__auto____$14;
}
} else {
throw e47217;

}
}} else {
throw e__46070__auto____$13;
}
} else {
throw e47216;

}
}} else {
throw e__46070__auto____$12;
}
} else {
throw e47215;

}
}} else {
throw e__46070__auto____$11;
}
} else {
throw e47214;

}
}} else {
throw e__46070__auto____$10;
}
} else {
throw e47213;

}
}} else {
throw e__46070__auto____$9;
}
} else {
throw e47212;

}
}} else {
throw e__46070__auto____$8;
}
} else {
throw e47211;

}
}} else {
throw e__46070__auto____$7;
}
} else {
throw e47210;

}
}} else {
throw e__46070__auto____$6;
}
} else {
throw e47209;

}
}} else {
throw e__46070__auto____$5;
}
} else {
throw e47208;

}
}} else {
throw e__46070__auto____$4;
}
} else {
throw e47207;

}
}} else {
throw e__46070__auto____$3;
}
} else {
throw e47206;

}
}} else {
throw e__46070__auto____$2;
}
} else {
throw e47205;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47203){if((e47203 instanceof Error)){
var e__46070__auto____$1 = e47203;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47203;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47202;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47201){if((e47201 instanceof Error)){
var e__46070__auto__ = e47201;
if((e__46070__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__46070__auto__;
}
} else {
throw e47201;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_47269 = cljs.core.vec(eav);
var ocr_47270 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_47269)) && ((cljs.core.count(ocr_47269) === 3)))){
try{var ocr_47269_0__47295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_0__47295,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47269_2__47297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_2__47297,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e47359){if((e47359 instanceof Error)){
var e__46070__auto__ = e47359;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47270)) && ((cljs.core.count(ocr_47270) === 3)))){
try{var ocr_47270_2__47300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47300 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47361){if((e47361 instanceof Error)){
var e__46070__auto____$1 = e47361;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47300 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47362){if((e47362 instanceof Error)){
var e__46070__auto____$2 = e47362;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47362;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47360){if((e47360 instanceof Error)){
var e__46070__auto____$1 = e47360;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47360;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47354){if((e47354 instanceof Error)){
var e__46070__auto__ = e47354;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{var ocr_47269_2__47297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_2__47297,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_47270)) && ((cljs.core.count(ocr_47270) === 3)))){
try{var ocr_47270_1__47302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47302 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47357){if((e47357 instanceof Error)){
var e__46070__auto____$1 = e47357;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47302 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47358){if((e47358 instanceof Error)){
var e__46070__auto____$2 = e47358;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47358;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47356){if((e47356 instanceof Error)){
var e__46070__auto____$1 = e47356;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47355){if((e47355 instanceof Error)){
var e__46070__auto____$1 = e47355;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47355;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47308){if((e47308 instanceof Error)){
var e__46070__auto__ = e47308;
if((e__46070__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47270)) && ((cljs.core.count(ocr_47270) === 3)))){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47269_2__47297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_2__47297,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47353){if((e47353 instanceof Error)){
var e__46070__auto____$1 = e47353;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47352){if((e47352 instanceof Error)){
var e__46070__auto____$1 = e47352;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47310){if((e47310 instanceof Error)){
var e__46070__auto____$1 = e47310;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
try{var ocr_47269_2__47297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_2__47297,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47349){if((e47349 instanceof Error)){
var e__46070__auto____$2 = e47349;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47350){if((e47350 instanceof Error)){
var e__46070__auto____$3 = e47350;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47351){if((e47351 instanceof Error)){
var e__46070__auto____$4 = e47351;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47351;

}
}} else {
throw e__46070__auto____$3;
}
} else {
throw e47350;

}
}} else {
throw e__46070__auto____$2;
}
} else {
throw e47349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47348){if((e47348 instanceof Error)){
var e__46070__auto____$2 = e47348;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$2;
}
} else {
throw e47348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47311){if((e47311 instanceof Error)){
var e__46070__auto____$2 = e47311;
if((e__46070__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
try{var ocr_47269_2__47297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_2__47297,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47347){if((e47347 instanceof Error)){
var e__46070__auto____$3 = e47347;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$3;
}
} else {
throw e47347;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47346){if((e47346 instanceof Error)){
var e__46070__auto____$3 = e47346;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$3;
}
} else {
throw e47346;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47312){if((e47312 instanceof Error)){
var e__46070__auto____$3 = e47312;
if((e__46070__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === true)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47345){if((e47345 instanceof Error)){
var e__46070__auto____$4 = e47345;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47345;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47344){if((e47344 instanceof Error)){
var e__46070__auto____$4 = e47344;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$4;
}
} else {
throw e47344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47313){if((e47313 instanceof Error)){
var e__46070__auto____$4 = e47313;
if((e__46070__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === false)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47343){if((e47343 instanceof Error)){
var e__46070__auto____$5 = e47343;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$5;
}
} else {
throw e47343;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47342){if((e47342 instanceof Error)){
var e__46070__auto____$5 = e47342;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$5;
}
} else {
throw e47342;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47314){if((e47314 instanceof Error)){
var e__46070__auto____$5 = e47314;
if((e__46070__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === true)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
try{var ocr_47269_1__47296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_1__47296,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47341){if((e47341 instanceof Error)){
var e__46070__auto____$6 = e47341;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$6;
}
} else {
throw e47341;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47338){if((e47338 instanceof Error)){
var e__46070__auto____$6 = e47338;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
try{var ocr_47269_0__47295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_0__47295,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47340){if((e47340 instanceof Error)){
var e__46070__auto____$7 = e47340;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47339){if((e47339 instanceof Error)){
var e__46070__auto____$7 = e47339;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47339;

}
}} else {
throw e__46070__auto____$6;
}
} else {
throw e47338;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47315){if((e47315 instanceof Error)){
var e__46070__auto____$6 = e47315;
if((e__46070__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === false)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
try{var ocr_47269_0__47295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_0__47295,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47337){if((e47337 instanceof Error)){
var e__46070__auto____$7 = e47337;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47336){if((e47336 instanceof Error)){
var e__46070__auto____$7 = e47336;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$7;
}
} else {
throw e47336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47316){if((e47316 instanceof Error)){
var e__46070__auto____$7 = e47316;
if((e__46070__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === true)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === false)){
try{var ocr_47269_0__47295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47269_0__47295,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47335){if((e47335 instanceof Error)){
var e__46070__auto____$8 = e47335;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$8;
}
} else {
throw e47335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47329){if((e47329 instanceof Error)){
var e__46070__auto____$8 = e47329;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47333){if((e47333 instanceof Error)){
var e__46070__auto____$9 = e47333;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47334){if((e47334 instanceof Error)){
var e__46070__auto____$10 = e47334;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47334;

}
}} else {
throw e__46070__auto____$9;
}
} else {
throw e47333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47330){if((e47330 instanceof Error)){
var e__46070__auto____$9 = e47330;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === false)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47332){if((e47332 instanceof Error)){
var e__46070__auto____$10 = e47332;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47332;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47331){if((e47331 instanceof Error)){
var e__46070__auto____$10 = e47331;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47331;

}
}} else {
throw e__46070__auto____$9;
}
} else {
throw e47330;

}
}} else {
throw e__46070__auto____$8;
}
} else {
throw e47329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47317){if((e47317 instanceof Error)){
var e__46070__auto____$8 = e47317;
if((e__46070__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === false)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47328){if((e47328 instanceof Error)){
var e__46070__auto____$9 = e47328;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$9;
}
} else {
throw e47328;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47327){if((e47327 instanceof Error)){
var e__46070__auto____$9 = e47327;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$9;
}
} else {
throw e47327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47318){if((e47318 instanceof Error)){
var e__46070__auto____$9 = e47318;
if((e__46070__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === true)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47326){if((e47326 instanceof Error)){
var e__46070__auto____$10 = e47326;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47325){if((e47325 instanceof Error)){
var e__46070__auto____$10 = e47325;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$10;
}
} else {
throw e47325;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47319){if((e47319 instanceof Error)){
var e__46070__auto____$10 = e47319;
if((e__46070__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_47270_2__47306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(2));
if((ocr_47270_2__47306 === false)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === true)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47324){if((e47324 instanceof Error)){
var e__46070__auto____$11 = e47324;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$11;
}
} else {
throw e47324;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47321){if((e47321 instanceof Error)){
var e__46070__auto____$11 = e47321;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_47270_0__47304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(0));
if((ocr_47270_0__47304 === false)){
try{var ocr_47270_1__47305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47270,(1));
if((ocr_47270_1__47305 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47269,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47323){if((e47323 instanceof Error)){
var e__46070__auto____$12 = e47323;
if((e__46070__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$12;
}
} else {
throw e47323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47322){if((e47322 instanceof Error)){
var e__46070__auto____$12 = e47322;
if((e__46070__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$12;
}
} else {
throw e47322;

}
}} else {
throw e__46070__auto____$11;
}
} else {
throw e47321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47320){if((e47320 instanceof Error)){
var e__46070__auto____$11 = e47320;
if((e__46070__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$11;
}
} else {
throw e47320;

}
}} else {
throw e__46070__auto____$10;
}
} else {
throw e47319;

}
}} else {
throw e__46070__auto____$9;
}
} else {
throw e47318;

}
}} else {
throw e__46070__auto____$8;
}
} else {
throw e47317;

}
}} else {
throw e__46070__auto____$7;
}
} else {
throw e47316;

}
}} else {
throw e__46070__auto____$6;
}
} else {
throw e47315;

}
}} else {
throw e__46070__auto____$5;
}
} else {
throw e47314;

}
}} else {
throw e__46070__auto____$4;
}
} else {
throw e47313;

}
}} else {
throw e__46070__auto____$3;
}
} else {
throw e47312;

}
}} else {
throw e__46070__auto____$2;
}
} else {
throw e47311;

}
}} else {
throw e__46070__auto____$1;
}
} else {
throw e47310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47309){if((e47309 instanceof Error)){
var e__46070__auto____$1 = e47309;
if((e__46070__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46070__auto____$1;
}
} else {
throw e47309;

}
}} else {
throw e__46070__auto__;
}
} else {
throw e47308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47307){if((e47307 instanceof Error)){
var e__46070__auto__ = e47307;
if((e__46070__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__46070__auto__;
}
} else {
throw e47307;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47364){
var vec__47365 = p__47364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47365,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47363_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__47363_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47369){
var vec__47370 = p__47369;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47370,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47368_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__47368_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__47373 = cljs.core.rest(ins);
var G__47374 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__47373,G__47374) : posh.lib.q_analyze.just_qvars.call(null,G__47373,G__47374));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47375_SHARP_){
return cljs.core.zipmap(qvars,p1__47375_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__47376 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47376,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47376,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47376,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47376,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__47570 = var$;
var G__47571 = dbvarmap;
var G__47572 = cljs.core.rest(dbeavs);
var$ = G__47570;
dbvarmap = G__47571;
dbeavs = G__47572;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__47379 = cljs.core.rest(vars);
var G__47380 = dbvarmap;
var G__47381 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__47379,G__47380,G__47381) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__47379,G__47380,G__47381));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__47575 = (n + (1));
var G__47576 = cljs.core.rest(xs__$1);
n = G__47575;
xs__$1 = G__47576;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47382_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__47382_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__47382_SHARP_) : type.call(null,p1__47382_SHARP_));
} else {
return p1__47382_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__47383 = cljs.core.rest(ins);
var G__47384 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__47383,G__47384) : posh.lib.q_analyze.make_dbarg_map.call(null,G__47383,G__47384));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47385){
var vec__47386 = p__47385;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47386,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47386,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__47390_SHARP_,p2__47389_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__47389_SHARP_)){
return p1__47390_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__47394 = cljs.core._EQ_;
var expr__47395 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__47394.cljs$core$IFn$_invoke$arity$2 ? pred__47394.cljs$core$IFn$_invoke$arity$2((1),expr__47395) : pred__47394.call(null,(1),expr__47395)))){
return true;
} else {
if(cljs.core.truth_((pred__47394.cljs$core$IFn$_invoke$arity$2 ? pred__47394.cljs$core$IFn$_invoke$arity$2((3),expr__47395) : pred__47394.call(null,(3),expr__47395)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__47595 = cljs.core.first(remaining);
var G__47596 = cljs.core.rest(remaining);
clause = G__47595;
remaining = G__47596;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__47600 = cljs.core.first(remaining);
var G__47601 = cljs.core.rest(remaining);
clause = G__47600;
remaining = G__47601;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__47397(s__47398){
return (new cljs.core.LazySeq(null,(function (){
var s__47398__$1 = s__47398;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47398__$1);
if(temp__5735__auto__){
var s__47398__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47398__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47398__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47400 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47399 = (0);
while(true){
if((i__47399 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__47399);
cljs.core.chunk_append(b__47400,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__47605 = (i__47399 + (1));
i__47399 = G__47605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47400),posh$lib$q_analyze$resolve_any_idents_$_iter__47397(cljs.core.chunk_rest(s__47398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47400),null);
}
} else {
var var_value = cljs.core.first(s__47398__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__47397(cljs.core.rest(s__47398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47405){
var vec__47406 = p__47405;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47409){
var vec__47410 = p__47409;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47410,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47410,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47413){
var vec__47414 = p__47413;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47414,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47414,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47417){
var vec__47418 = p__47417;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__47422 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__47423 = cljs.core.vec(r);
var fexpr__47421 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__47421.cljs$core$IFn$_invoke$arity$2 ? fexpr__47421.cljs$core$IFn$_invoke$arity$2(G__47422,G__47423) : fexpr__47421.call(null,G__47422,G__47423));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47424){
var vec__47425 = p__47424;
var seq__47426 = cljs.core.seq(vec__47425);
var first__47427 = cljs.core.first(seq__47426);
var seq__47426__$1 = cljs.core.next(seq__47426);
var db = first__47427;
var eav = seq__47426__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47428){
var vec__47429 = p__47428;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__47403_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__47403_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__47403_SHARP_) : linked_qvars.call(null,p1__47403_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47403_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__47404_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__47404_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47404_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
