goog.provide('reagent_dev_tools.state_tree');
goog.require('cljs.core');
goog.require('reagent_dev_tools.styles');
goog.require('reagent.core');
if((typeof reagent_dev_tools !== 'undefined') && (typeof reagent_dev_tools.state_tree !== 'undefined') && (typeof reagent_dev_tools.state_tree.state_tree !== 'undefined')){
} else {
reagent_dev_tools.state_tree.state_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent_dev_tools.state_tree.toggle = (function reagent_dev_tools$state_tree$toggle(v,ks,open_QMARK_){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open_QMARK_;
}
})())){
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc_in(v,ks,null);
}
});
reagent_dev_tools.state_tree.key__GT_string = (function reagent_dev_tools$state_tree$key__GT_string(k){
if((k instanceof cljs.core.Keyword)){
var s = cljs.core.namespace(k);
var n = cljs.core.name(k);
return [":",(cljs.core.truth_(s)?[s,"/",n].join(''):n)].join('');
} else {
return k;
}
});
reagent_dev_tools.state_tree.type__GT_class = (function reagent_dev_tools$state_tree$type__GT_class(v){
if((v instanceof cljs.core.Keyword)){
return "reagent-dev-tools__keyword";
} else {
if(typeof v === 'string'){
return "reagent-dev-tools__string";
} else {
if(typeof v === 'number'){
return "reagent-dev-tools__number";
} else {
if((v == null)){
return "reagent-dev-tools__nil";
} else {
return null;
}
}
}
}
});
reagent_dev_tools.state_tree.collection_name = (function reagent_dev_tools$state_tree$collection_name(v){
if(cljs.core.map_QMARK_(v)){
return "{}";
} else {
if(cljs.core.vector_QMARK_(v)){
return "[]";
} else {
if(cljs.core.set_QMARK_(v)){
return "#{}";
} else {
if(cljs.core.list_QMARK_(v)){
return "()";
} else {
return null;
}
}
}
}
});
reagent_dev_tools.state_tree.tree = (function reagent_dev_tools$state_tree$tree(open,open_fn,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__24837(s__24838){
return (new cljs.core.LazySeq(null,(function (){
var s__24838__$1 = s__24838;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__24838__$1);
if(temp__5735__auto__){
var s__24838__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24838__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24838__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24843 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24842 = (0);
while(true){
if((i__24842 < size__4528__auto__)){
var vec__24861 = cljs.core._nth(c__4527__auto__,i__24842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24861,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24861,(1),null);
var open__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(open,k);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__24843,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string(k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24842,open__$1,ks__$1,vec__24861,k,v__$1,c__4527__auto__,size__4528__auto__,b__24843,s__24838__$2,temp__5735__auto__){
return (function (){
return (open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(ks__$1,false) : open_fn.call(null,ks__$1,false));
});})(i__24842,open__$1,ks__$1,vec__24861,k,v__$1,c__4527__auto__,size__4528__auto__,b__24843,s__24838__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_(v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(k)], null),reagent_dev_tools.state_tree.key__GT_string(k)], null)," "], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24842,open__$1,ks__$1,vec__24861,k,v__$1,c__4527__auto__,size__4528__auto__,b__24843,s__24838__$2,temp__5735__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some(cljs.core.nil_QMARK_,cljs.core.vals(open__$1));
var seq__24886 = cljs.core.seq(((cljs.core.map_QMARK_(v__$1))?v__$1:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v__$1)));
var chunk__24887 = null;
var count__24888 = (0);
var i__24889 = (0);
while(true){
if((i__24889 < count__24888)){
var vec__24910 = chunk__24887.cljs$core$IIndexed$_nth$arity$2(null,i__24889);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24910,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24910,(1),null);
var G__24913_25190 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__24914_25191 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__24913_25190,G__24914_25191) : open_fn.call(null,G__24913_25190,G__24914_25191));


var G__25196 = seq__24886;
var G__25197 = chunk__24887;
var G__25198 = count__24888;
var G__25199 = (i__24889 + (1));
seq__24886 = G__25196;
chunk__24887 = G__25197;
count__24888 = G__25198;
i__24889 = G__25199;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__24886);
if(temp__5735__auto____$1){
var seq__24886__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24886__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24886__$1);
var G__25207 = cljs.core.chunk_rest(seq__24886__$1);
var G__25208 = c__4556__auto__;
var G__25209 = cljs.core.count(c__4556__auto__);
var G__25210 = (0);
seq__24886 = G__25207;
chunk__24887 = G__25208;
count__24888 = G__25209;
i__24889 = G__25210;
continue;
} else {
var vec__24922 = cljs.core.first(seq__24886__$1);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24922,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24922,(1),null);
var G__24928_25220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__24929_25221 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__24928_25220,G__24929_25221) : open_fn.call(null,G__24928_25220,G__24929_25221));


var G__25227 = cljs.core.next(seq__24886__$1);
var G__25228 = null;
var G__25229 = (0);
var G__25230 = (0);
seq__24886 = G__25227;
chunk__24887 = G__25228;
count__24888 = G__25229;
i__24889 = G__25230;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__24842,open__$1,ks__$1,vec__24861,k,v__$1,c__4527__auto__,size__4528__auto__,b__24843,s__24838__$2,temp__5735__auto__))
], null),reagent_dev_tools.state_tree.collection_name(v__$1)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = (!(cljs.core.coll_QMARK_(v__$1)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__25238 = (i__24842 + (1));
i__24842 = G__25238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24843),reagent_dev_tools$state_tree$tree_$_iter__24837(cljs.core.chunk_rest(s__24838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24843),null);
}
} else {
var vec__24942 = cljs.core.first(s__24838__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942,(1),null);
var open__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(open,k);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string(k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__24942,k,v__$1,s__24838__$2,temp__5735__auto__){
return (function (){
return (open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(ks__$1,false) : open_fn.call(null,ks__$1,false));
});})(open__$1,ks__$1,vec__24942,k,v__$1,s__24838__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_(v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(k)], null),reagent_dev_tools.state_tree.key__GT_string(k)], null)," "], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__24942,k,v__$1,s__24838__$2,temp__5735__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some(cljs.core.nil_QMARK_,cljs.core.vals(open__$1));
var seq__24945 = cljs.core.seq(((cljs.core.map_QMARK_(v__$1))?v__$1:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v__$1)));
var chunk__24946 = null;
var count__24947 = (0);
var i__24948 = (0);
while(true){
if((i__24948 < count__24947)){
var vec__24965 = chunk__24946.cljs$core$IIndexed$_nth$arity$2(null,i__24948);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(1),null);
var G__24969_25247 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__24970_25248 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__24969_25247,G__24970_25248) : open_fn.call(null,G__24969_25247,G__24970_25248));


var G__25251 = seq__24945;
var G__25252 = chunk__24946;
var G__25253 = count__24947;
var G__25254 = (i__24948 + (1));
seq__24945 = G__25251;
chunk__24946 = G__25252;
count__24947 = G__25253;
i__24948 = G__25254;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__24945);
if(temp__5735__auto____$1){
var seq__24945__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24945__$1);
var G__25256 = cljs.core.chunk_rest(seq__24945__$1);
var G__25257 = c__4556__auto__;
var G__25258 = cljs.core.count(c__4556__auto__);
var G__25259 = (0);
seq__24945 = G__25256;
chunk__24946 = G__25257;
count__24947 = G__25258;
i__24948 = G__25259;
continue;
} else {
var vec__24977 = cljs.core.first(seq__24945__$1);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(1),null);
var G__24980_25261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__24981_25262 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__24980_25261,G__24981_25262) : open_fn.call(null,G__24980_25261,G__24981_25262));


var G__25263 = cljs.core.next(seq__24945__$1);
var G__25264 = null;
var G__25265 = (0);
var G__25266 = (0);
seq__24945 = G__25263;
chunk__24946 = G__25264;
count__24947 = G__25265;
i__24948 = G__25266;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__24942,k,v__$1,s__24838__$2,temp__5735__auto__))
], null),reagent_dev_tools.state_tree.collection_name(v__$1)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = (!(cljs.core.coll_QMARK_(v__$1)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__24837(cljs.core.rest(s__24838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.reagent-dev-tools__pre","pre.reagent-dev-tools__pre",556469413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(v)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}
});
reagent_dev_tools.state_tree.state_tree_panel = (function reagent_dev_tools$state_tree$state_tree_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__25004(s__25005){
return (new cljs.core.LazySeq(null,(function (){
var s__25005__$1 = s__25005;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25005__$1);
if(temp__5735__auto__){
var s__25005__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25005__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25005__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25007 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25006 = (0);
while(true){
if((i__25006 < size__4528__auto__)){
var vec__25018 = cljs.core._nth(c__4527__auto__,i__25006);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25018,(0),null);
var map__25021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25018,(1),null);
var map__25021__$1 = (((((!((map__25021 == null))))?(((((map__25021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25021):map__25021);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25021__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25021__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append(b__25007,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__25006,vec__25018,name,map__25021,map__25021__$1,state_atom,open,c__4527__auto__,size__4528__auto__,b__25007,s__25005__$2,temp__5735__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,open_QMARK_], 0));
});})(i__25006,vec__25018,name,map__25021,map__25021__$1,state_atom,open,c__4527__auto__,size__4528__auto__,b__25007,s__25005__$2,temp__5735__auto__))
,cljs.core.deref(state_atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__25282 = (i__25006 + (1));
i__25006 = G__25282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25007),reagent_dev_tools$state_tree$state_tree_panel_$_iter__25004(cljs.core.chunk_rest(s__25005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25007),null);
}
} else {
var vec__25050 = cljs.core.first(s__25005__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25050,(0),null);
var map__25053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25050,(1),null);
var map__25053__$1 = (((((!((map__25053 == null))))?(((((map__25053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25053):map__25053);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25053__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25053__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__25050,name,map__25053,map__25053__$1,state_atom,open,s__25005__$2,temp__5735__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,open_QMARK_], 0));
});})(vec__25050,name,map__25053,map__25053__$1,state_atom,open,s__25005__$2,temp__5735__auto__))
,cljs.core.deref(state_atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__25004(cljs.core.rest(s__25005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(reagent_dev_tools.state_tree.state_tree));
})())], null);
});
reagent_dev_tools.state_tree.register_state_atom = (function reagent_dev_tools$state_tree$register_state_atom(atom_name,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.state_tree.state_tree,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atom_name,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857)], null),state_atom);
});

//# sourceMappingURL=reagent_dev_tools.state_tree.js.map
