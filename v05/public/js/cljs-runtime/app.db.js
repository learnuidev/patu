goog.provide('app.db');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('app.bugs');
goog.require('app.users');
goog.require('app.util');
app.db.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bug","id","bug/id",-1388434496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("bug","author","bug/author",2111785020),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
if((typeof app !== 'undefined') && (typeof app.db !== 'undefined') && (typeof app.db.conn !== 'undefined')){
} else {
app.db.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(app.db.schema);
}
app.db.populate_BANG_ = (function app$db$populate_BANG_(conn){
app.util.new_entity_BANG_(conn,app.users.new_user(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jane",new cljs.core.Keyword(null,"email","email",1415816706),"jane@gmail.com"], null)));

app.util.new_entity_BANG_(conn,app.users.new_user(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jon",new cljs.core.Keyword(null,"email","email",1415816706),"jon@gmail.com"], null)));

app.util.new_entity_BANG_(conn,app.bugs.new_bug(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Fix Server",new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),"jon@gmail.com"], null)], null)));

return app.util.new_entity_BANG_(conn,app.bugs.new_bug(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Fix UI",new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391),"jane@gmail.com"], null)], null)));
});

//# sourceMappingURL=app.db.js.map
