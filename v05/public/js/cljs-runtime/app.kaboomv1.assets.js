goog.provide('app.kaboomv1.assets');
goog.require('cljs.core');
goog.require('app.kaboomv1.gfx');
app.kaboomv1.assets.assets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lastLoaderID","lastLoaderID",-871228822),(0),new cljs.core.Keyword(null,"loadRoot","loadRoot",-1587719907),"",new cljs.core.Keyword(null,"loaders","loaders",1141127131),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"sounds","sounds",1244211385),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fonts","fonts",1683167295),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"shaders","shaders",-2040639096),cljs.core.PersistentArrayMap.EMPTY], null));
app.kaboomv1.assets.load_root = (function app$kaboomv1$assets$load_root(root){
if(cljs.core.seq(root)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv1.assets.assets,cljs.core.assoc,new cljs.core.Keyword(null,"loadRoot","loadRoot",-1587719907),root);
} else {
return null;
}
});
app.kaboomv1.assets.load_img = (function app$kaboomv1$assets$load_img(src){
var img = (new Image());
(img.src = src);

return img;
});
app.kaboomv1.assets.load_sprite = (function app$kaboomv1$assets$load_sprite(var_args){
var G__28113 = arguments.length;
switch (G__28113) {
case 2:
return app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$2 = (function (id,url){
return app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$3(id,url,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboomv1.assets.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (id,url,opts){
return null;
}));

(app.kaboomv1.assets.load_sprite.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.kaboomv1.assets.js.map
