goog.provide('app.patu.plugins');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('goog.object');
goog.require('app.patu.core');
goog.require('app.patu.loaders');
goog.require('app.patu.lib');
goog.require('app.patu.utils');
goog.require('app.patu.components');
app.patu.plugins.calc_quad = (function app$patu$plugins$calc_quad(file,size){
var frame = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(file);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(size))], null);
});
app.patu.plugins.js_fetch = (function app$patu$plugins$js_fetch(url){
return fetch(url).then((function (p1__28752_SHARP_){
return p1__28752_SHARP_.json();
}));
});
app.patu.plugins.set_anims_BANG_ = (function app$patu$plugins$set_anims_BANG_(sprite,p__28761){
var map__28762 = p__28761;
var map__28762__$1 = (((((!((map__28762 == null))))?(((((map__28762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28762):map__28762);
var map__28763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28762__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var map__28763__$1 = (((((!((map__28763 == null))))?(((((map__28763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28763):map__28763);
var frameTags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword(null,"frameTags","frameTags",-2085036918));
var seq__28770 = cljs.core.seq(frameTags);
var chunk__28771 = null;
var count__28772 = (0);
var i__28773 = (0);
while(true){
if((i__28773 < count__28772)){
var anim = chunk__28771.cljs$core$IIndexed$_nth$arity$2(null,i__28773);
app.patu.utils.js_set_BANG_(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(sprite,new cljs.core.Keyword(null,"anims","anims",300543630)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(anim)], null));


var G__28823 = seq__28770;
var G__28824 = chunk__28771;
var G__28825 = count__28772;
var G__28826 = (i__28773 + (1));
seq__28770 = G__28823;
chunk__28771 = G__28824;
count__28772 = G__28825;
i__28773 = G__28826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28770);
if(temp__5735__auto__){
var seq__28770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28770__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28770__$1);
var G__28827 = cljs.core.chunk_rest(seq__28770__$1);
var G__28828 = c__4556__auto__;
var G__28829 = cljs.core.count(c__4556__auto__);
var G__28830 = (0);
seq__28770 = G__28827;
chunk__28771 = G__28828;
count__28772 = G__28829;
i__28773 = G__28830;
continue;
} else {
var anim = cljs.core.first(seq__28770__$1);
app.patu.utils.js_set_BANG_(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(sprite,new cljs.core.Keyword(null,"anims","anims",300543630)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(anim)], null));


var G__28831 = cljs.core.next(seq__28770__$1);
var G__28832 = null;
var G__28833 = (0);
var G__28834 = (0);
seq__28770 = G__28831;
chunk__28771 = G__28832;
count__28772 = G__28833;
i__28773 = G__28834;
continue;
}
} else {
return null;
}
}
break;
}
});
app.patu.plugins.create_frames_BANG_ = (function app$patu$plugins$create_frames_BANG_(ctx,sprite,p__28786){
var map__28787 = p__28786;
var map__28787__$1 = (((((!((map__28787 == null))))?(((((map__28787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28787):map__28787);
var map__28788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var map__28788__$1 = (((((!((map__28788 == null))))?(((((map__28788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28788):map__28788);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28788__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$patu$plugins$create_frames_BANG__$_iter__28795(s__28796){
return (new cljs.core.LazySeq(null,(function (){
var s__28796__$1 = s__28796;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28796__$1);
if(temp__5735__auto__){
var s__28796__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28796__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28796__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28798 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28797 = (0);
while(true){
if((i__28797 < size__4528__auto__)){
var frame = cljs.core._nth(c__4527__auto__,i__28797);
cljs.core.chunk_append(b__28798,app.patu.core.quad_BANG_(ctx,app.patu.plugins.calc_quad(frame,size)));

var G__28835 = (i__28797 + (1));
i__28797 = G__28835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28798),app$patu$plugins$create_frames_BANG__$_iter__28795(cljs.core.chunk_rest(s__28796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28798),null);
}
} else {
var frame = cljs.core.first(s__28796__$2);
return cljs.core.cons(app.patu.core.quad_BANG_(ctx,app.patu.plugins.calc_quad(frame,size)),app$patu$plugins$create_frames_BANG__$_iter__28795(cljs.core.rest(s__28796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(frames);
})());
});
app.patu.plugins.sprite_handler = (function app$patu$plugins$sprite_handler(ctx,p__28807){
var map__28808 = p__28807;
var map__28808__$1 = (((((!((map__28808 == null))))?(((((map__28808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28808):map__28808);
var sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var reject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var json_path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1(ctx)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(json)].join('');
return app.patu.plugins.js_fetch(json_path).then((function (data){
var data__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
(sprite.frames = app.patu.plugins.create_frames_BANG_(ctx,sprite,data__$1));

app.patu.plugins.set_anims_BANG_(sprite,data__$1);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(sprite) : resolve.call(null,sprite));
})).catch((function (){
var G__28810 = ["Failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json)].join('');
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__28810) : reject.call(null,G__28810));
}));
});
app.patu.plugins.sprite_loader = (function app$patu$plugins$sprite_loader(ctx,p__28812){
var map__28813 = p__28812;
var map__28813__$1 = (((((!((map__28813 == null))))?(((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28813):map__28813);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var reject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,new cljs.core.Keyword(null,"json","json",1279968570));
return app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3(ctx,name,img).then((function (p1__28811_SHARP_){
return app.patu.plugins.sprite_handler(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sprite","sprite",172516848),p1__28811_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570),json,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),resolve,new cljs.core.Keyword(null,"reject","reject",1415953113),reject], null));
}));
});
app.patu.plugins.load_aseprite_BANG_ = (function app$patu$plugins$load_aseprite_BANG_(ctx,p__28817){
var map__28818 = p__28817;
var map__28818__$1 = (((((!((map__28818 == null))))?(((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28818):map__28818);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28818__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28818__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var loader_fn = (new Promise((function (p1__28815_SHARP_,p2__28816_SHARP_){
return app.patu.plugins.sprite_loader(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),p1__28815_SHARP_,new cljs.core.Keyword(null,"reject","reject",1415953113),p2__28816_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"img","img",1442687358),img,new cljs.core.Keyword(null,"json","json",1279968570),json], null));
})));
app.patu.lib.add_loader(ctx,loader_fn);

return loader_fn;
});
app.patu.plugins.aseprite_plugin = (function app$patu$plugins$aseprite_plugin(ctx){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loadAseprite","loadAseprite",-2054403580),(function (p1__28820_SHARP_,p2__28821_SHARP_,p3__28822_SHARP_){
return app.patu.plugins.load_aseprite_BANG_(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),p1__28820_SHARP_,new cljs.core.Keyword(null,"img","img",1442687358),p2__28821_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570),p3__28822_SHARP_], null));
})], null));
});

//# sourceMappingURL=app.patu.plugins.js.map
