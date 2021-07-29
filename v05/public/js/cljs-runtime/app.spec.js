goog.provide('app.spec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.alpha.api');
goog.require('app.ms.core');
app.spec.init_vals = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(8),(17),(31)], null),new cljs.core.Keyword(null,"score-progress","score-progress",1034476781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-1),(1)], null)], null);
app.ms.core.initialize_config.cljs$core$IFn$_invoke$arity$1(app.spec.init_vals);
app.ms.core.get_config();
app.ms.core.calculate.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress","progress",244323547),(3)], null));
app.spec.now = (function app$spec$now(){
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();
});
tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(app.spec.now());
app.spec.app_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-1","topic-1",2030817887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Learn Clojure",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojurescript","clojure"], null)], null)], null),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic-1","topic-1",2030817887),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card-1","card-1",-4777542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"card-1","card-1",-4777542),new cljs.core.Keyword(null,"front","front",-1523508988),"What is ClojureScript",new cljs.core.Keyword(null,"answer","answer",-742633163),"Functional Programming Language",new cljs.core.Keyword(null,"next-study-date","next-study-date",1371768671),(new Date())], null),new cljs.core.Keyword(null,"card-2","card-2",521100031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"card-2","card-2",521100031),new cljs.core.Keyword(null,"front","front",-1523508988),"What is a Map",new cljs.core.Keyword(null,"answer","answer",-742633163),"Functional Programming Language"], null)], null)], null)], null);
app.spec.create_topic = (function app$spec$create_topic(p__32655){
var map__32656 = p__32655;
var map__32656__$1 = (((((!((map__32656 == null))))?(((((map__32656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32656):map__32656);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32656__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32656__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"tags","tags",1771418977),tags], null);
});

//# sourceMappingURL=app.spec.js.map
