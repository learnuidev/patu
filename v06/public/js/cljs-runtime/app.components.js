goog.provide('app.components');
goog.require('cljs.core');
goog.require('app.bugs');
goog.require('app.util');
app.components.bug_item = (function app$components$bug_item(conn,bug_id){
var map__54034 = cljs.core.deref(app.util.pull(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bug","author","bug/author",2111785020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null)], null),bug_id));
var map__54034__$1 = (((((!((map__54034 == null))))?(((((map__54034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54034):map__54034);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword("bug","description","bug/description",-1428462620));
var resolved_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword("bug","resolved?","bug/resolved?",862482505));
var toggle_resolve = (function (){
return app.bugs.toggle_resolved(conn,bug_id,cljs.core.not(resolved_QMARK_));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(cljs.core.truth_(resolved_QMARK_)?"Resolved":"Un Resolved")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_resolve], null),(cljs.core.truth_(resolved_QMARK_)?"Unresolve":"Resolve")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.util.retract_entity_BANG_(conn,bug_id);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(resolved_QMARK_)], null),"Remove bug"], null)], null);
});
app.components.bugs_list = (function app$components$bugs_list(conn){
var bug_ids = cljs.core.deref(app.bugs.browse_ids(conn));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.seq(bug_ids))?(function (){var iter__4529__auto__ = (function app$components$bugs_list_$_iter__54036(s__54037){
return (new cljs.core.LazySeq(null,(function (){
var s__54037__$1 = s__54037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54037__$1);
if(temp__5735__auto__){
var s__54037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54037__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54037__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54039 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54038 = (0);
while(true){
if((i__54038 < size__4528__auto__)){
var bug_id = cljs.core._nth(c__4527__auto__,i__54038);
cljs.core.chunk_append(b__54039,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.bug_item,conn,bug_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bug_id], null)));

var G__54040 = (i__54038 + (1));
i__54038 = G__54040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54039),app$components$bugs_list_$_iter__54036(cljs.core.chunk_rest(s__54037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54039),null);
}
} else {
var bug_id = cljs.core.first(s__54037__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.bug_item,conn,bug_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bug_id], null)),app$components$bugs_list_$_iter__54036(cljs.core.rest(s__54037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(bug_ids);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Nothing here... Looks like all the bugs are squashed"], null))], null);
});
app.components.with_default = (function app$components$with_default(item,default_val){
if(cljs.core.truth_(item)){
return item;
} else {
return default_val;
}
});
app.components.statistics = (function app$components$statistics(conn){
var total_resolved_bugs = cljs.core.deref(app.bugs.count_by(conn,true));
var total_unresolved_bugs = cljs.core.deref(app.bugs.total_unresolved(conn));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total Bugs Fixed: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),app.components.with_default(total_resolved_bugs,(0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total Bugs Remaining: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),app.components.with_default(total_unresolved_bugs,(0))], null)], null)], null)], null);
});

//# sourceMappingURL=app.components.js.map
