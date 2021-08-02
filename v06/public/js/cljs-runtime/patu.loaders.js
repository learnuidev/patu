goog.provide('patu.loaders');
goog.require('cljs.core');
goog.require('patu.state');
goog.require('patu.events');
patu.loaders.load_root = (function patu$loaders$load_root(val){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).loadRoot(val);
});
patu.events.reg_event(new cljs.core.Keyword("load","root","load/root",-432585447),(function (_,p__31857){
var vec__31858 = p__31857;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31858,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31858,(1),null);
return patu.loaders.load_root(url);
}));
/**
 * Load a sprite or collection of sprites into the asset manager
 * 
 *   # Usage 1: Load collection of sprites
 *   (l/load-sprite
 * [[:bg,    "img/bg.png"]
 *  [:birdy, "img/birdy.png"]
 *  [:pipe, "img/pipe.png"]])
 * 
 *   # Usage 2: Load a single sprite
 *   (l/load-sprite :birdy "imgirdy.png")
 * 
 *   // Usage #3 - slice a spritesheet and add anims manually:
 *   (load-sprite :froggy "froggy.png",
 * {:sliceX 4,
 *  :sliceY 1,
 *  :anims {:run  {:from 0 :to 3 }
 *          :jump {:from 3 :to 3 }}})
 *   
 */
patu.loaders.load_sprite = (function patu$loaders$load_sprite(var_args){
var G__31862 = arguments.length;
switch (G__31862) {
case 1:
return patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$1 = (function (vals){
var seq__31863 = cljs.core.seq(vals);
var chunk__31864 = null;
var count__31865 = (0);
var i__31866 = (0);
while(true){
if((i__31866 < count__31865)){
var vec__31873 = chunk__31864.cljs$core$IIndexed$_nth$arity$2(null,i__31866);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(1),null);
patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(id,val);


var G__31898 = seq__31863;
var G__31899 = chunk__31864;
var G__31900 = count__31865;
var G__31901 = (i__31866 + (1));
seq__31863 = G__31898;
chunk__31864 = G__31899;
count__31865 = G__31900;
i__31866 = G__31901;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31863);
if(temp__5735__auto__){
var seq__31863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31863__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31863__$1);
var G__31902 = cljs.core.chunk_rest(seq__31863__$1);
var G__31903 = c__4556__auto__;
var G__31904 = cljs.core.count(c__4556__auto__);
var G__31905 = (0);
seq__31863 = G__31902;
chunk__31864 = G__31903;
count__31865 = G__31904;
i__31866 = G__31905;
continue;
} else {
var vec__31876 = cljs.core.first(seq__31863__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31876,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31876,(1),null);
patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2(id,val);


var G__31906 = cljs.core.next(seq__31863__$1);
var G__31907 = null;
var G__31908 = (0);
var G__31909 = (0);
seq__31863 = G__31906;
chunk__31864 = G__31907;
count__31865 = G__31908;
i__31866 = G__31909;
continue;
}
} else {
return null;
}
}
break;
}
}));

(patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$2 = (function (id,val){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).loadSprite(cljs.core.name(id),val);
}));

(patu.loaders.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (id,val,opts){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).loadSprite(cljs.core.name(id),val,cljs.core.clj__GT_js(opts));
}));

(patu.loaders.load_sprite.cljs$lang$maxFixedArity = 3);

patu.events.reg_event(new cljs.core.Keyword("load","sprite","load/sprite",186948886),(function (_,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(patu.loaders.load_sprite,cljs.core.rest(opts));
}));
/**
 * Load a sound:
 * Usage:
 * (load-sound :woosh "woosh.mp3")
 * 
 */
patu.loaders.load_sound = (function patu$loaders$load_sound(var_args){
var G__31880 = arguments.length;
switch (G__31880) {
case 1:
return patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$1 = (function (vals){
var seq__31881 = cljs.core.seq(vals);
var chunk__31882 = null;
var count__31883 = (0);
var i__31884 = (0);
while(true){
if((i__31884 < count__31883)){
var vec__31891 = chunk__31882.cljs$core$IIndexed$_nth$arity$2(null,i__31884);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31891,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31891,(1),null);
patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$2(id,val);


var G__31911 = seq__31881;
var G__31912 = chunk__31882;
var G__31913 = count__31883;
var G__31914 = (i__31884 + (1));
seq__31881 = G__31911;
chunk__31882 = G__31912;
count__31883 = G__31913;
i__31884 = G__31914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31881);
if(temp__5735__auto__){
var seq__31881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31881__$1);
var G__31916 = cljs.core.chunk_rest(seq__31881__$1);
var G__31917 = c__4556__auto__;
var G__31918 = cljs.core.count(c__4556__auto__);
var G__31919 = (0);
seq__31881 = G__31916;
chunk__31882 = G__31917;
count__31883 = G__31918;
i__31884 = G__31919;
continue;
} else {
var vec__31894 = cljs.core.first(seq__31881__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31894,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31894,(1),null);
patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$2(id,val);


var G__31921 = cljs.core.next(seq__31881__$1);
var G__31922 = null;
var G__31923 = (0);
var G__31924 = (0);
seq__31881 = G__31921;
chunk__31882 = G__31922;
count__31883 = G__31923;
i__31884 = G__31924;
continue;
}
} else {
return null;
}
}
break;
}
}));

(patu.loaders.load_sound.cljs$core$IFn$_invoke$arity$2 = (function (id,src){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).loadSound(cljs.core.name(id),src);
}));

(patu.loaders.load_sound.cljs$lang$maxFixedArity = 2);

patu.events.reg_event(new cljs.core.Keyword("load","sound","load/sound",-2140369732),(function (_,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(patu.loaders.load_sound,cljs.core.rest(args));
}));

//# sourceMappingURL=patu.loaders.js.map
