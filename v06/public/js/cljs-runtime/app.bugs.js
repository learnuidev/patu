goog.provide('app.bugs');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('posh.reagent');
app.bugs.new_bug = (function app$bugs$new_bug(p__54031){
var map__54032 = p__54031;
var map__54032__$1 = (((((!((map__54032 == null))))?(((((map__54032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54032):map__54032);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bug","id","bug/id",-1388434496),cljs.core.random_uuid(),new cljs.core.Keyword("bug","description","bug/description",-1428462620),description,new cljs.core.Keyword("bug","resolved?","bug/resolved?",862482505),false,new cljs.core.Keyword("bug","author","bug/author",2111785020),author], null);
});
app.bugs.browse_ids = (function app$bugs$browse_ids(conn){
return posh.reagent.q(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword("bug","description","bug/description",-1428462620)], null)], null),conn);
});
app.bugs.toggle_resolved = (function app$bugs$toggle_resolved(conn,bug_id,value){
return posh.reagent.transact_BANG_(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),bug_id,new cljs.core.Keyword("bug","resolved?","bug/resolved?",862482505),value], null)], null));
});
app.bugs.count_by = (function app$bugs$count_by(conn,resolved){
return posh.reagent.q(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?resolved","?resolved",-1174414517,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword("bug","resolved?","bug/resolved?",862482505),new cljs.core.Symbol(null,"?resolved","?resolved",-1174414517,null)], null)], null),conn,resolved);
});
app.bugs.total_unresolved = (function app$bugs$total_unresolved(conn){
return posh.reagent.q(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword("bug","description","bug/description",-1428462620)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword("bug","resolved?","bug/resolved?",862482505),true], null))], null),conn);
});

//# sourceMappingURL=app.bugs.js.map
