goog.provide('app.kaboom.patu.plugins');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('goog.object');
goog.require('app.kaboom.patu.core');
goog.require('app.kaboom.patu.loaders');
goog.require('app.kaboom.patu.lib');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.components');
app.kaboom.patu.plugins.calc_quad = (function app$kaboom$patu$plugins$calc_quad(file,size){
var frame = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(file);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(size)),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(frame) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(size))], null);
});
app.kaboom.patu.plugins.js_fetch = (function app$kaboom$patu$plugins$js_fetch(url){
return fetch(url).then((function (p1__59986_SHARP_){
return p1__59986_SHARP_.json();
}));
});
app.kaboom.patu.plugins.set_anims_BANG_ = (function app$kaboom$patu$plugins$set_anims_BANG_(sprite,p__59987){
var map__59988 = p__59987;
var map__59988__$1 = (((((!((map__59988 == null))))?(((((map__59988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59988):map__59988);
var map__59989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var frameTags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"frameTags","frameTags",-2085036918));
var seq__59992 = cljs.core.seq(frameTags);
var chunk__59993 = null;
var count__59994 = (0);
var i__59995 = (0);
while(true){
if((i__59995 < count__59994)){
var anim = chunk__59993.cljs$core$IIndexed$_nth$arity$2(null,i__59995);
app.kaboom.patu.utils.js_set_BANG_(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(sprite,new cljs.core.Keyword(null,"anims","anims",300543630)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(anim)], null));


var G__60021 = seq__59992;
var G__60022 = chunk__59993;
var G__60023 = count__59994;
var G__60024 = (i__59995 + (1));
seq__59992 = G__60021;
chunk__59993 = G__60022;
count__59994 = G__60023;
i__59995 = G__60024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59992);
if(temp__5735__auto__){
var seq__59992__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59992__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59992__$1);
var G__60025 = cljs.core.chunk_rest(seq__59992__$1);
var G__60026 = c__4556__auto__;
var G__60027 = cljs.core.count(c__4556__auto__);
var G__60028 = (0);
seq__59992 = G__60025;
chunk__59993 = G__60026;
count__59994 = G__60027;
i__59995 = G__60028;
continue;
} else {
var anim = cljs.core.first(seq__59992__$1);
app.kaboom.patu.utils.js_set_BANG_(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(sprite,new cljs.core.Keyword(null,"anims","anims",300543630)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(anim),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(anim)], null));


var G__60029 = cljs.core.next(seq__59992__$1);
var G__60030 = null;
var G__60031 = (0);
var G__60032 = (0);
seq__59992 = G__60029;
chunk__59993 = G__60030;
count__59994 = G__60031;
i__59995 = G__60032;
continue;
}
} else {
return null;
}
}
break;
}
});
app.kaboom.patu.plugins.create_frames_BANG_ = (function app$kaboom$patu$plugins$create_frames_BANG_(ctx,sprite,p__59996){
var map__59997 = p__59996;
var map__59997__$1 = (((((!((map__59997 == null))))?(((((map__59997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59997):map__59997);
var map__59998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59997__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59997__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$kaboom$patu$plugins$create_frames_BANG__$_iter__60001(s__60002){
return (new cljs.core.LazySeq(null,(function (){
var s__60002__$1 = s__60002;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60002__$1);
if(temp__5735__auto__){
var s__60002__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60002__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60002__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60004 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60003 = (0);
while(true){
if((i__60003 < size__4528__auto__)){
var frame = cljs.core._nth(c__4527__auto__,i__60003);
cljs.core.chunk_append(b__60004,app.kaboom.patu.core.quad_BANG_(ctx,app.kaboom.patu.plugins.calc_quad(frame,size)));

var G__60033 = (i__60003 + (1));
i__60003 = G__60033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60004),app$kaboom$patu$plugins$create_frames_BANG__$_iter__60001(cljs.core.chunk_rest(s__60002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60004),null);
}
} else {
var frame = cljs.core.first(s__60002__$2);
return cljs.core.cons(app.kaboom.patu.core.quad_BANG_(ctx,app.kaboom.patu.plugins.calc_quad(frame,size)),app$kaboom$patu$plugins$create_frames_BANG__$_iter__60001(cljs.core.rest(s__60002__$2)));
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
app.kaboom.patu.plugins.sprite_handler = (function app$kaboom$patu$plugins$sprite_handler(ctx,p__60005){
var map__60006 = p__60005;
var map__60006__$1 = (((((!((map__60006 == null))))?(((((map__60006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60006):map__60006);
var sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var reject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var json_path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1(ctx)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(json)].join('');
return app.kaboom.patu.plugins.js_fetch(json_path).then((function (data){
var data__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
(sprite.frames = app.kaboom.patu.plugins.create_frames_BANG_(ctx,sprite,data__$1));

app.kaboom.patu.plugins.set_anims_BANG_(sprite,data__$1);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(sprite) : resolve.call(null,sprite));
})).catch((function (){
var G__60008 = ["Failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json)].join('');
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__60008) : reject.call(null,G__60008));
}));
});
app.kaboom.patu.plugins.sprite_loader = (function app$kaboom$patu$plugins$sprite_loader(ctx,p__60010){
var map__60011 = p__60010;
var map__60011__$1 = (((((!((map__60011 == null))))?(((((map__60011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60011):map__60011);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var reject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"json","json",1279968570));
return app.kaboom.patu.lib.load_sprite(ctx,name,img).then((function (p1__60009_SHARP_){
return app.kaboom.patu.plugins.sprite_handler(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sprite","sprite",172516848),p1__60009_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570),json,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),resolve,new cljs.core.Keyword(null,"reject","reject",1415953113),reject], null));
}));
});
app.kaboom.patu.plugins.load_aseprite_BANG_ = (function app$kaboom$patu$plugins$load_aseprite_BANG_(ctx,p__60015){
var map__60016 = p__60015;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var loader_fn = (new Promise((function (p1__60013_SHARP_,p2__60014_SHARP_){
return app.kaboom.patu.plugins.sprite_loader(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),p1__60013_SHARP_,new cljs.core.Keyword(null,"reject","reject",1415953113),p2__60014_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"img","img",1442687358),img,new cljs.core.Keyword(null,"json","json",1279968570),json], null));
})));
app.kaboom.patu.lib.add_loader(ctx,loader_fn);

return loader_fn;
});
app.kaboom.patu.plugins.aseprite_plugin = (function app$kaboom$patu$plugins$aseprite_plugin(ctx){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loadAseprite","loadAseprite",-2054403580),(function (p1__60018_SHARP_,p2__60019_SHARP_,p3__60020_SHARP_){
return app.kaboom.patu.plugins.load_aseprite_BANG_(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),p1__60018_SHARP_,new cljs.core.Keyword(null,"img","img",1442687358),p2__60019_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570),p3__60020_SHARP_], null));
})], null));
});

//# sourceMappingURL=app.kaboom.patu.plugins.js.map
