goog.provide('app.examples.coffeeshop.i18n');
goog.require('cljs.core');
goog.require('tongue.core');
app.examples.coffeeshop.i18n.locales = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"en","en",88457073),"en-us",new cljs.core.Keyword(null,"de","de",1547124116),"de-de",new cljs.core.Keyword(null,"fr","fr",1577713888),"fr-ca"], null);
app.examples.coffeeshop.i18n.names = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Parrot"], null),new cljs.core.Keyword(null,"es","es",1831673219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"El Parrot"], null),new cljs.core.Keyword(null,"gr","gr",-1367505104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Das Zeigweighen"], null)], null);
app.examples.coffeeshop.i18n.localize = (function app$examples$coffeeshop$i18n$localize(names,key){
var translate = tongue.core.build_translate(names);
return translate(key,new cljs.core.Keyword(null,"name","name",1843675177));
});

//# sourceMappingURL=app.examples.coffeeshop.i18n.js.map
