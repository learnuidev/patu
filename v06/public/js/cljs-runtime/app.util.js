goog.provide('app.util');
goog.require('cljs.core');
goog.require('posh.reagent');
goog.require('datascript.core');
app.util.temp_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.util.gen_temp_id = (function app$util$gen_temp_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.temp_id,cljs.core.dec);
});
app.util.new_entity_BANG_ = (function app$util$new_entity_BANG_(conn,varmap){
var fexpr__51870 = new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([varmap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),app.util.gen_temp_id()], null)], 0))], null)));
return (fexpr__51870.cljs$core$IFn$_invoke$arity$1 ? fexpr__51870.cljs$core$IFn$_invoke$arity$1((-1)) : fexpr__51870.call(null,(-1)));
});
app.util.retract_entity_BANG_ = (function app$util$retract_entity_BANG_(conn,entity_id){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),entity_id], null)], null));
});
app.util.pull = (function app$util$pull(conn,pattern,entity_id){
return posh.reagent.pull(conn,pattern,entity_id);
});

//# sourceMappingURL=app.util.js.map
