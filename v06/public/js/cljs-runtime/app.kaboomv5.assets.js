goog.provide('app.kaboomv5.assets');
goog.require('cljs.core');
goog.require('app.kaboomv5.gfx');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.audio');
goog.require('clojure.string');
app.kaboomv5.assets.ascii_chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
app.kaboomv5.assets.def_font = new cljs.core.Keyword("font","unscii","font/unscii",1246128695);
app.kaboomv5.assets.unscii_src = "https://raw.githubusercontent.com/replit/kaboom/master/src/assets/unscii_8x8.png";
app.kaboomv5.assets.assets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"last-loader-id","last-loader-id",-1530758957),(0),new cljs.core.Keyword(null,"root-url","root-url",-1322760038),"",new cljs.core.Keyword(null,"loaders","loaders",1141127131),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"sounds","sounds",1244211385),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fonts","fonts",1683167295),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"shaders","shaders",-2040639096),cljs.core.PersistentArrayMap.EMPTY], null));
app.kaboomv5.assets.load_root = (function app$kaboomv5$assets$load_root(var_args){
var G__26724 = arguments.length;
switch (G__26724) {
case 0:
return app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets));
}));

(app.kaboomv5.assets.load_root.cljs$core$IFn$_invoke$arity$1 = (function (root){
if(cljs.core.seq(root)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.assets.assets,cljs.core.assoc,new cljs.core.Keyword(null,"root-url","root-url",-1322760038),root);
} else {
return null;
}
}));

(app.kaboomv5.assets.load_root.cljs$lang$maxFixedArity = 1);

app.kaboomv5.assets.add_loader = (function app$kaboomv5$assets$add_loader(loader){
var id = new cljs.core.Keyword(null,"last-loader-id","last-loader-id",-1530758957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.assets.assets,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaders","loaders",1141127131),id], null),false),new cljs.core.Keyword(null,"last-loader-id","last-loader-id",-1530758957),cljs.core.inc);
}));

return loader.catch(console.error).finally((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.assets.assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaders","loaders",1141127131),id], null),true);
}));
});
app.kaboomv5.assets.data_url_QMARK_ = (function app$kaboomv5$assets$data_url_QMARK_(src){
return clojure.string.starts_with_QMARK_(src,"data:");
});
app.kaboomv5.assets.load_img = (function app$kaboomv5$assets$load_img(src){
var img = (new Image());
(img.src = src);

(img.crossOrigin = "anonymous");

return (new Promise((function (resolve,reject){
(img.onload = (function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(img) : resolve.call(null,img));
}));

return (img.onerror = (function (){
var G__26728 = ["failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__26728) : reject.call(null,G__26728));
}));
})));
});
/**
 * Load Raw Sprite
 *   - id:     keyword
 *   - src:    GfxTextureData
 *   - config: map
 *   
 */
app.kaboomv5.assets.load_raw_sprite = (function app$kaboomv5$assets$load_raw_sprite(var_args){
var G__26730 = arguments.length;
switch (G__26730) {
case 2:
return app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$2 = (function (id,src){
return app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$3(id,src,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"slice-x","slice-x",86414736),(1),new cljs.core.Keyword(null,"slice-y","slice-y",-1316552581),(1),new cljs.core.Keyword(null,"grid-width","grid-width",837583106),(0),new cljs.core.Keyword(null,"grid-height","grid-height",-995153669),(0),new cljs.core.Keyword(null,"anims","anims",300543630),cljs.core.PersistentArrayMap.EMPTY], null));
}));

(app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$3 = (function (id,src,p__26733){
var map__26734 = p__26733;
var map__26734__$1 = (((((!((map__26734 == null))))?(((((map__26734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26734):map__26734);
var slice_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"slice-x","slice-x",86414736));
var slice_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"slice-y","slice-y",-1316552581));
var anims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"anims","anims",300543630));
var grid_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"grid-width","grid-width",837583106));
var grid_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"grid-height","grid-height",-995153669));
var tex = app.kaboomv5.gfx.make_tex(src);
var val_j = ((function (){var or__4126__auto__ = slice_y;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tex.height;
}
})() / (function (){var or__4126__auto__ = grid_height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tex.height;
}
})());
var val_i = ((function (){var or__4126__auto__ = slice_x;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tex.width;
}
})() / (function (){var or__4126__auto__ = grid_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tex.width;
}
})());
console.log("VAL-i",val_j,val_i);

console.log("VAL-tex",tex);

var qw = ((1) / slice_x);
var qh = ((1) / slice_y);
var frames = (function (){var iter__4529__auto__ = (function app$kaboomv5$assets$iter__26737(s__26738){
return (new cljs.core.LazySeq(null,(function (){
var s__26738__$1 = s__26738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26738__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var j = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__26738__$1,j,xs__6292__auto__,temp__5735__auto__,qw,qh,tex,val_j,val_i,map__26734,map__26734__$1,slice_x,slice_y,anims,grid_width,grid_height){
return (function app$kaboomv5$assets$iter__26737_$_iter__26739(s__26740){
return (new cljs.core.LazySeq(null,((function (s__26738__$1,j,xs__6292__auto__,temp__5735__auto__,qw,qh,tex,val_j,val_i,map__26734,map__26734__$1,slice_x,slice_y,anims,grid_width,grid_height){
return (function (){
var s__26740__$1 = s__26740;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26740__$1);
if(temp__5735__auto____$1){
var s__26740__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26740__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26740__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26742 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26741 = (0);
while(true){
if((i__26741 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26741);
cljs.core.chunk_append(b__26742,app.kaboomv5.math.core.quad((i * qw),(j * qh),qw,qh));

var G__26762 = (i__26741 + (1));
i__26741 = G__26762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26742),app$kaboomv5$assets$iter__26737_$_iter__26739(cljs.core.chunk_rest(s__26740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26742),null);
}
} else {
var i = cljs.core.first(s__26740__$2);
return cljs.core.cons(app.kaboomv5.math.core.quad((i * qw),(j * qh),qw,qh),app$kaboomv5$assets$iter__26737_$_iter__26739(cljs.core.rest(s__26740__$2)));
}
} else {
return null;
}
break;
}
});})(s__26738__$1,j,xs__6292__auto__,temp__5735__auto__,qw,qh,tex,val_j,val_i,map__26734,map__26734__$1,slice_x,slice_y,anims,grid_width,grid_height))
,null,null));
});})(s__26738__$1,j,xs__6292__auto__,temp__5735__auto__,qw,qh,tex,val_j,val_i,map__26734,map__26734__$1,slice_x,slice_y,anims,grid_width,grid_height))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(val_i)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,app$kaboomv5$assets$iter__26737(cljs.core.rest(s__26738__$1)));
} else {
var G__26766 = cljs.core.rest(s__26738__$1);
s__26738__$1 = G__26766;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(val_j));
})();
var sprite = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"frames","frames",1765687497),frames,new cljs.core.Keyword(null,"anims","anims",300543630),(function (){var or__4126__auto__ = anims;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.assets.assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922),id], null),sprite);

return sprite;
}));

(app.kaboomv5.assets.load_raw_sprite.cljs$lang$maxFixedArity = 3);

app.kaboomv5.assets.load_sprite = (function app$kaboomv5$assets$load_sprite(var_args){
var G__26747 = arguments.length;
switch (G__26747) {
case 2:
return app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$2 = (function (id,src){
return app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$3(id,src,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slice-x","slice-x",86414736),(1),new cljs.core.Keyword(null,"slice-y","slice-y",-1316552581),(1),new cljs.core.Keyword(null,"anims","anims",300543630),cljs.core.PersistentArrayMap.EMPTY], null));
}));

(app.kaboomv5.assets.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (id,src,p__26748){
var map__26749 = p__26748;
var map__26749__$1 = (((((!((map__26749 == null))))?(((((map__26749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26749):map__26749);
var config = map__26749__$1;
var slice_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26749__$1,new cljs.core.Keyword(null,"slice-x","slice-x",86414736));
var slice_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26749__$1,new cljs.core.Keyword(null,"slice-y","slice-y",-1316552581));
var anims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26749__$1,new cljs.core.Keyword(null,"anims","anims",300543630));
var loader = (new Promise((function (resolve,reject){
if(cljs.core.not(cljs.core.seq(src))){
throw (new Error(["expected sprite src for",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')));
} else {
if(typeof src === 'string'){
var path = ((app.kaboomv5.assets.data_url_QMARK_(src))?src:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets))),src].join(''));
return app.kaboomv5.assets.load_img(path).then((function (p1__26745_SHARP_){
var G__26752 = app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$3(id,p1__26745_SHARP_,config);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__26752) : resolve.call(null,G__26752));
})).catch(reject);
} else {
var G__26753 = app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$3(id,src,config);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__26753) : resolve.call(null,G__26753));
}
}
})));
app.kaboomv5.assets.add_loader(loader);

return loader;
}));

(app.kaboomv5.assets.load_sprite.cljs$lang$maxFixedArity = 3);

app.kaboomv5.assets.sound_loader = (function app$kaboomv5$assets$sound_loader(id,src,url){
return (new Promise((function (resolve,reject){
if(cljs.core.not(cljs.core.seq(src))){
throw (new Error(["expected sprite src for",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')));
} else {
if(typeof src === 'string'){
return fetch(url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.arrayBuffer();
} else {
throw (new Error(["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')));
}
})).then((function (data){
return (new Promise((function (res2,rej2){
return app.kaboomv5.audio.ctx().decodeAudioData(data,res2,rej2);
})));
})).then((function (buf){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.assets.assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",1244211385),id], null),buf);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(buf) : resolve.call(null,buf));
})).catch(reject);
} else {
var G__26754 = app.kaboomv5.assets.load_raw_sprite.cljs$core$IFn$_invoke$arity$2(id,src);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__26754) : resolve.call(null,G__26754));
}
}
})));
});
app.kaboomv5.assets.load_sound = (function app$kaboomv5$assets$load_sound(id,src){
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
var loader = app.kaboomv5.assets.sound_loader(id,src,url);
app.kaboomv5.assets.add_loader(loader);

return loader;
});
app.kaboomv5.assets.font_loader = (function app$kaboomv5$assets$font_loader(id,src,gw,gh,chars){
return (new Promise((function (resolve,reject){
return app.kaboomv5.assets.load_img(src).then((function (img){
var font = app.kaboomv5.gfx.make_font(app.kaboomv5.gfx.make_tex(img),gw,gh,chars);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.assets.assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fonts","fonts",1683167295),id], null),font);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(font) : resolve.call(null,font));
})).catch(reject);
})));
});
app.kaboomv5.assets.load_font_BANG_ = (function app$kaboomv5$assets$load_font_BANG_(var_args){
var G__26757 = arguments.length;
switch (G__26757) {
case 4:
return app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (id,src,gw,gh){
return app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$5(id,src,gw,gh,app.kaboomv5.assets.ascii_chars);
}));

(app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (id,src,gw,gh,chars){
var loader = app.kaboomv5.assets.font_loader(id,src,gw,gh,chars);
app.kaboomv5.assets.add_loader(loader);

return loader;
}));

(app.kaboomv5.assets.load_font_BANG_.cljs$lang$maxFixedArity = 5);

app.kaboomv5.assets.load_font = (function app$kaboomv5$assets$load_font(id,src,gw,gh,chars){
var path = ((app.kaboomv5.assets.data_url_QMARK_(src))?src:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"root-url","root-url",-1322760038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join(''));
return app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$5(id,path,gw,gh,chars);
});
app.kaboomv5.assets.load_font_BANG_.cljs$core$IFn$_invoke$arity$5(app.kaboomv5.assets.def_font,app.kaboomv5.assets.unscii_src,(8),(8),app.kaboomv5.assets.ascii_chars);
app.kaboomv5.assets.load_shader = (function app$kaboomv5$assets$load_shader(){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(new cljs.core.Keyword(null,"loaders","loaders",1141127131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets))))) / cljs.core.count(cljs.core.vals(new cljs.core.Keyword(null,"loaders","loaders",1141127131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets)))));
});
app.kaboomv5.assets.load_progress = (function app$kaboomv5$assets$load_progress(){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(new cljs.core.Keyword(null,"loaders","loaders",1141127131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets))))) / cljs.core.count(cljs.core.vals(new cljs.core.Keyword(null,"loaders","loaders",1141127131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.assets.assets)))));
});

//# sourceMappingURL=app.kaboomv5.assets.js.map
