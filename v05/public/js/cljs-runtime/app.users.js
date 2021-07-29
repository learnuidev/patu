goog.provide('app.users');
goog.require('cljs.core');
app.users.new_user = (function app$users$new_user(p__52346){
var map__52347 = p__52346;
var map__52347__$1 = (((((!((map__52347 == null))))?(((((map__52347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52347):map__52347);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52347__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52347__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","id","user/id",-1375756663),cljs.core.random_uuid(),new cljs.core.Keyword("user","name","user/name",1848814598),name,new cljs.core.Keyword("user","email","user/email",1419686391),email], null);
});

//# sourceMappingURL=app.users.js.map
