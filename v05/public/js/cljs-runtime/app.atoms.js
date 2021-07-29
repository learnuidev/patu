goog.provide('app.atoms');
goog.require('cljs.core');
cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"apples","apples",910831200),null,new cljs.core.Keyword(null,"bananas","bananas",880069059),null,new cljs.core.Keyword(null,"oranges","oranges",-1225488699),null], null), null));
cljs.core.deref(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));
cljs.core.deref(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Jon Snow"], null)));
app.atoms.updater_fn = (function app$atoms$updater_fn(previous_value){
return (previous_value + (1));
});
app.atoms.counter_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.atoms.counter_state,app.atoms.updater_fn);
cljs.core.deref(app.atoms.counter_state);
cljs.core.reset_BANG_(app.atoms.counter_state,(0));
cljs.core.deref(app.atoms.counter_state);

//# sourceMappingURL=app.atoms.js.map
