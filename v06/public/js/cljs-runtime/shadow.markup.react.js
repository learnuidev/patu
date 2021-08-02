goog.provide('shadow.markup.react');
goog.require('cljs.core');
goog.require('shadow.markup.react.impl.interop');
goog.require('shadow.markup.css');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
shadow.markup.react.for$ = (function shadow$markup$react$for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29492 = arguments.length;
var i__4737__auto___29493 = (0);
while(true){
if((i__4737__auto___29493 < len__4736__auto___29492)){
args__4742__auto__.push((arguments[i__4737__auto___29493]));

var G__29494 = (i__4737__auto___29493 + (1));
i__4737__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("shadow.markup.react/for is a macro",cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.markup.react.for$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.for$.cljs$lang$applyTo = (function (seq29363){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29363));
}));

shadow.markup.react.$ = (function shadow$markup$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29495 = arguments.length;
var i__4737__auto___29496 = (0);
while(true){
if((i__4737__auto___29496 < len__4736__auto___29495)){
args__4742__auto__.push((arguments[i__4737__auto___29496]));

var G__29497 = (i__4737__auto___29496 + (1));
i__4737__auto___29496 = G__29497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
return shadow.markup.react.impl.interop.create_element(type,args);
}));

(shadow.markup.react.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.markup.react.$.cljs$lang$applyTo = (function (seq29364){
var G__29365 = cljs.core.first(seq29364);
var seq29364__$1 = cljs.core.next(seq29364);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29365,seq29364__$1);
}));

shadow.markup.react.with_inner_html = (function shadow$markup$react$with_inner_html(html,props){
var html_29498__$1 = ({"__html": html});
goog.object.set(props,"dangerouslySetInnerHTML",html_29498__$1);

return props;
});
shadow.markup.react.fragment = (function shadow$markup$react$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29499 = arguments.length;
var i__4737__auto___29500 = (0);
while(true){
if((i__4737__auto___29500 < len__4736__auto___29499)){
args__4742__auto__.push((arguments[i__4737__auto___29500]));

var G__29501 = (i__4737__auto___29500 + (1));
i__4737__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(body);
arr.unshift(null);

arr.unshift(module$node_modules$react$index.Fragment);

return module$node_modules$react$index.createElement.apply(null,arr);
}));

(shadow.markup.react.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.fragment.cljs$lang$applyTo = (function (seq29366){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29366));
}));

shadow.markup.react.a = (function shadow$markup$react$a(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29502 = arguments.length;
var i__4737__auto___29503 = (0);
while(true){
if((i__4737__auto___29503 < len__4736__auto___29502)){
args__4742__auto__.push((arguments[i__4737__auto___29503]));

var G__29504 = (i__4737__auto___29503 + (1));
i__4737__auto___29503 = G__29504;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("a",args__29356__auto__);
}));

(shadow.markup.react.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.a.cljs$lang$applyTo = (function (seq29367){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29367));
}));


shadow.markup.react.abbr = (function shadow$markup$react$abbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29505 = arguments.length;
var i__4737__auto___29506 = (0);
while(true){
if((i__4737__auto___29506 < len__4736__auto___29505)){
args__4742__auto__.push((arguments[i__4737__auto___29506]));

var G__29507 = (i__4737__auto___29506 + (1));
i__4737__auto___29506 = G__29507;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("abbr",args__29356__auto__);
}));

(shadow.markup.react.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.abbr.cljs$lang$applyTo = (function (seq29368){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29368));
}));


shadow.markup.react.address = (function shadow$markup$react$address(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29508 = arguments.length;
var i__4737__auto___29509 = (0);
while(true){
if((i__4737__auto___29509 < len__4736__auto___29508)){
args__4742__auto__.push((arguments[i__4737__auto___29509]));

var G__29510 = (i__4737__auto___29509 + (1));
i__4737__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("address",args__29356__auto__);
}));

(shadow.markup.react.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.address.cljs$lang$applyTo = (function (seq29369){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29369));
}));


shadow.markup.react.area = (function shadow$markup$react$area(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29511 = arguments.length;
var i__4737__auto___29512 = (0);
while(true){
if((i__4737__auto___29512 < len__4736__auto___29511)){
args__4742__auto__.push((arguments[i__4737__auto___29512]));

var G__29513 = (i__4737__auto___29512 + (1));
i__4737__auto___29512 = G__29513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("area",args__29356__auto__);
}));

(shadow.markup.react.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.area.cljs$lang$applyTo = (function (seq29370){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29370));
}));


shadow.markup.react.article = (function shadow$markup$react$article(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29514 = arguments.length;
var i__4737__auto___29515 = (0);
while(true){
if((i__4737__auto___29515 < len__4736__auto___29514)){
args__4742__auto__.push((arguments[i__4737__auto___29515]));

var G__29516 = (i__4737__auto___29515 + (1));
i__4737__auto___29515 = G__29516;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("article",args__29356__auto__);
}));

(shadow.markup.react.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.article.cljs$lang$applyTo = (function (seq29371){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29371));
}));


shadow.markup.react.aside = (function shadow$markup$react$aside(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29517 = arguments.length;
var i__4737__auto___29518 = (0);
while(true){
if((i__4737__auto___29518 < len__4736__auto___29517)){
args__4742__auto__.push((arguments[i__4737__auto___29518]));

var G__29519 = (i__4737__auto___29518 + (1));
i__4737__auto___29518 = G__29519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("aside",args__29356__auto__);
}));

(shadow.markup.react.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.aside.cljs$lang$applyTo = (function (seq29372){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29372));
}));


shadow.markup.react.audio = (function shadow$markup$react$audio(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29520 = arguments.length;
var i__4737__auto___29521 = (0);
while(true){
if((i__4737__auto___29521 < len__4736__auto___29520)){
args__4742__auto__.push((arguments[i__4737__auto___29521]));

var G__29522 = (i__4737__auto___29521 + (1));
i__4737__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("audio",args__29356__auto__);
}));

(shadow.markup.react.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.audio.cljs$lang$applyTo = (function (seq29373){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29373));
}));


shadow.markup.react.b = (function shadow$markup$react$b(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29523 = arguments.length;
var i__4737__auto___29524 = (0);
while(true){
if((i__4737__auto___29524 < len__4736__auto___29523)){
args__4742__auto__.push((arguments[i__4737__auto___29524]));

var G__29525 = (i__4737__auto___29524 + (1));
i__4737__auto___29524 = G__29525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("b",args__29356__auto__);
}));

(shadow.markup.react.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.b.cljs$lang$applyTo = (function (seq29374){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29374));
}));


shadow.markup.react.base = (function shadow$markup$react$base(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29526 = arguments.length;
var i__4737__auto___29527 = (0);
while(true){
if((i__4737__auto___29527 < len__4736__auto___29526)){
args__4742__auto__.push((arguments[i__4737__auto___29527]));

var G__29528 = (i__4737__auto___29527 + (1));
i__4737__auto___29527 = G__29528;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("base",args__29356__auto__);
}));

(shadow.markup.react.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.base.cljs$lang$applyTo = (function (seq29375){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29375));
}));


shadow.markup.react.bdi = (function shadow$markup$react$bdi(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29529 = arguments.length;
var i__4737__auto___29530 = (0);
while(true){
if((i__4737__auto___29530 < len__4736__auto___29529)){
args__4742__auto__.push((arguments[i__4737__auto___29530]));

var G__29531 = (i__4737__auto___29530 + (1));
i__4737__auto___29530 = G__29531;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("bdi",args__29356__auto__);
}));

(shadow.markup.react.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.bdi.cljs$lang$applyTo = (function (seq29376){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29376));
}));


shadow.markup.react.bdo = (function shadow$markup$react$bdo(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29532 = arguments.length;
var i__4737__auto___29533 = (0);
while(true){
if((i__4737__auto___29533 < len__4736__auto___29532)){
args__4742__auto__.push((arguments[i__4737__auto___29533]));

var G__29534 = (i__4737__auto___29533 + (1));
i__4737__auto___29533 = G__29534;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("bdo",args__29356__auto__);
}));

(shadow.markup.react.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.bdo.cljs$lang$applyTo = (function (seq29377){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29377));
}));


shadow.markup.react.big = (function shadow$markup$react$big(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29535 = arguments.length;
var i__4737__auto___29536 = (0);
while(true){
if((i__4737__auto___29536 < len__4736__auto___29535)){
args__4742__auto__.push((arguments[i__4737__auto___29536]));

var G__29537 = (i__4737__auto___29536 + (1));
i__4737__auto___29536 = G__29537;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("big",args__29356__auto__);
}));

(shadow.markup.react.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.big.cljs$lang$applyTo = (function (seq29378){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29378));
}));


shadow.markup.react.blockquote = (function shadow$markup$react$blockquote(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29538 = arguments.length;
var i__4737__auto___29539 = (0);
while(true){
if((i__4737__auto___29539 < len__4736__auto___29538)){
args__4742__auto__.push((arguments[i__4737__auto___29539]));

var G__29540 = (i__4737__auto___29539 + (1));
i__4737__auto___29539 = G__29540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("blockquote",args__29356__auto__);
}));

(shadow.markup.react.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.blockquote.cljs$lang$applyTo = (function (seq29379){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29379));
}));


shadow.markup.react.body = (function shadow$markup$react$body(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29541 = arguments.length;
var i__4737__auto___29542 = (0);
while(true){
if((i__4737__auto___29542 < len__4736__auto___29541)){
args__4742__auto__.push((arguments[i__4737__auto___29542]));

var G__29543 = (i__4737__auto___29542 + (1));
i__4737__auto___29542 = G__29543;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("body",args__29356__auto__);
}));

(shadow.markup.react.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.body.cljs$lang$applyTo = (function (seq29380){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29380));
}));


shadow.markup.react.br = (function shadow$markup$react$br(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29544 = arguments.length;
var i__4737__auto___29545 = (0);
while(true){
if((i__4737__auto___29545 < len__4736__auto___29544)){
args__4742__auto__.push((arguments[i__4737__auto___29545]));

var G__29546 = (i__4737__auto___29545 + (1));
i__4737__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("br",args__29356__auto__);
}));

(shadow.markup.react.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.br.cljs$lang$applyTo = (function (seq29381){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29381));
}));


shadow.markup.react.button = (function shadow$markup$react$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29547 = arguments.length;
var i__4737__auto___29548 = (0);
while(true){
if((i__4737__auto___29548 < len__4736__auto___29547)){
args__4742__auto__.push((arguments[i__4737__auto___29548]));

var G__29549 = (i__4737__auto___29548 + (1));
i__4737__auto___29548 = G__29549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("button",args__29356__auto__);
}));

(shadow.markup.react.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.button.cljs$lang$applyTo = (function (seq29382){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29382));
}));


shadow.markup.react.canvas = (function shadow$markup$react$canvas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29550 = arguments.length;
var i__4737__auto___29551 = (0);
while(true){
if((i__4737__auto___29551 < len__4736__auto___29550)){
args__4742__auto__.push((arguments[i__4737__auto___29551]));

var G__29552 = (i__4737__auto___29551 + (1));
i__4737__auto___29551 = G__29552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("canvas",args__29356__auto__);
}));

(shadow.markup.react.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.canvas.cljs$lang$applyTo = (function (seq29383){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29383));
}));


shadow.markup.react.caption = (function shadow$markup$react$caption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29553 = arguments.length;
var i__4737__auto___29554 = (0);
while(true){
if((i__4737__auto___29554 < len__4736__auto___29553)){
args__4742__auto__.push((arguments[i__4737__auto___29554]));

var G__29555 = (i__4737__auto___29554 + (1));
i__4737__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("caption",args__29356__auto__);
}));

(shadow.markup.react.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.caption.cljs$lang$applyTo = (function (seq29384){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29384));
}));


shadow.markup.react.cite = (function shadow$markup$react$cite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29556 = arguments.length;
var i__4737__auto___29557 = (0);
while(true){
if((i__4737__auto___29557 < len__4736__auto___29556)){
args__4742__auto__.push((arguments[i__4737__auto___29557]));

var G__29558 = (i__4737__auto___29557 + (1));
i__4737__auto___29557 = G__29558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("cite",args__29356__auto__);
}));

(shadow.markup.react.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.cite.cljs$lang$applyTo = (function (seq29385){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29385));
}));


shadow.markup.react.code = (function shadow$markup$react$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29559 = arguments.length;
var i__4737__auto___29560 = (0);
while(true){
if((i__4737__auto___29560 < len__4736__auto___29559)){
args__4742__auto__.push((arguments[i__4737__auto___29560]));

var G__29561 = (i__4737__auto___29560 + (1));
i__4737__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("code",args__29356__auto__);
}));

(shadow.markup.react.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.code.cljs$lang$applyTo = (function (seq29386){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29386));
}));


shadow.markup.react.col = (function shadow$markup$react$col(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29562 = arguments.length;
var i__4737__auto___29563 = (0);
while(true){
if((i__4737__auto___29563 < len__4736__auto___29562)){
args__4742__auto__.push((arguments[i__4737__auto___29563]));

var G__29564 = (i__4737__auto___29563 + (1));
i__4737__auto___29563 = G__29564;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("col",args__29356__auto__);
}));

(shadow.markup.react.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.col.cljs$lang$applyTo = (function (seq29387){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29387));
}));


shadow.markup.react.colgroup = (function shadow$markup$react$colgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29565 = arguments.length;
var i__4737__auto___29566 = (0);
while(true){
if((i__4737__auto___29566 < len__4736__auto___29565)){
args__4742__auto__.push((arguments[i__4737__auto___29566]));

var G__29567 = (i__4737__auto___29566 + (1));
i__4737__auto___29566 = G__29567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("colgroup",args__29356__auto__);
}));

(shadow.markup.react.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.colgroup.cljs$lang$applyTo = (function (seq29388){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29388));
}));


shadow.markup.react.data = (function shadow$markup$react$data(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29568 = arguments.length;
var i__4737__auto___29569 = (0);
while(true){
if((i__4737__auto___29569 < len__4736__auto___29568)){
args__4742__auto__.push((arguments[i__4737__auto___29569]));

var G__29570 = (i__4737__auto___29569 + (1));
i__4737__auto___29569 = G__29570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("data",args__29356__auto__);
}));

(shadow.markup.react.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.data.cljs$lang$applyTo = (function (seq29389){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29389));
}));


shadow.markup.react.datalist = (function shadow$markup$react$datalist(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29571 = arguments.length;
var i__4737__auto___29572 = (0);
while(true){
if((i__4737__auto___29572 < len__4736__auto___29571)){
args__4742__auto__.push((arguments[i__4737__auto___29572]));

var G__29573 = (i__4737__auto___29572 + (1));
i__4737__auto___29572 = G__29573;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("datalist",args__29356__auto__);
}));

(shadow.markup.react.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.datalist.cljs$lang$applyTo = (function (seq29390){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29390));
}));


shadow.markup.react.dd = (function shadow$markup$react$dd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29574 = arguments.length;
var i__4737__auto___29575 = (0);
while(true){
if((i__4737__auto___29575 < len__4736__auto___29574)){
args__4742__auto__.push((arguments[i__4737__auto___29575]));

var G__29576 = (i__4737__auto___29575 + (1));
i__4737__auto___29575 = G__29576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("dd",args__29356__auto__);
}));

(shadow.markup.react.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dd.cljs$lang$applyTo = (function (seq29391){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29391));
}));


shadow.markup.react.del = (function shadow$markup$react$del(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29577 = arguments.length;
var i__4737__auto___29578 = (0);
while(true){
if((i__4737__auto___29578 < len__4736__auto___29577)){
args__4742__auto__.push((arguments[i__4737__auto___29578]));

var G__29579 = (i__4737__auto___29578 + (1));
i__4737__auto___29578 = G__29579;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("del",args__29356__auto__);
}));

(shadow.markup.react.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.del.cljs$lang$applyTo = (function (seq29392){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29392));
}));


shadow.markup.react.dfn = (function shadow$markup$react$dfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29580 = arguments.length;
var i__4737__auto___29581 = (0);
while(true){
if((i__4737__auto___29581 < len__4736__auto___29580)){
args__4742__auto__.push((arguments[i__4737__auto___29581]));

var G__29582 = (i__4737__auto___29581 + (1));
i__4737__auto___29581 = G__29582;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("dfn",args__29356__auto__);
}));

(shadow.markup.react.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dfn.cljs$lang$applyTo = (function (seq29393){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29393));
}));


shadow.markup.react.div = (function shadow$markup$react$div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29583 = arguments.length;
var i__4737__auto___29584 = (0);
while(true){
if((i__4737__auto___29584 < len__4736__auto___29583)){
args__4742__auto__.push((arguments[i__4737__auto___29584]));

var G__29585 = (i__4737__auto___29584 + (1));
i__4737__auto___29584 = G__29585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("div",args__29356__auto__);
}));

(shadow.markup.react.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.div.cljs$lang$applyTo = (function (seq29394){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29394));
}));


shadow.markup.react.dl = (function shadow$markup$react$dl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29586 = arguments.length;
var i__4737__auto___29587 = (0);
while(true){
if((i__4737__auto___29587 < len__4736__auto___29586)){
args__4742__auto__.push((arguments[i__4737__auto___29587]));

var G__29588 = (i__4737__auto___29587 + (1));
i__4737__auto___29587 = G__29588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("dl",args__29356__auto__);
}));

(shadow.markup.react.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dl.cljs$lang$applyTo = (function (seq29395){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29395));
}));


shadow.markup.react.dt = (function shadow$markup$react$dt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29589 = arguments.length;
var i__4737__auto___29590 = (0);
while(true){
if((i__4737__auto___29590 < len__4736__auto___29589)){
args__4742__auto__.push((arguments[i__4737__auto___29590]));

var G__29591 = (i__4737__auto___29590 + (1));
i__4737__auto___29590 = G__29591;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("dt",args__29356__auto__);
}));

(shadow.markup.react.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dt.cljs$lang$applyTo = (function (seq29396){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29396));
}));


shadow.markup.react.em = (function shadow$markup$react$em(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29592 = arguments.length;
var i__4737__auto___29593 = (0);
while(true){
if((i__4737__auto___29593 < len__4736__auto___29592)){
args__4742__auto__.push((arguments[i__4737__auto___29593]));

var G__29594 = (i__4737__auto___29593 + (1));
i__4737__auto___29593 = G__29594;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("em",args__29356__auto__);
}));

(shadow.markup.react.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.em.cljs$lang$applyTo = (function (seq29397){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29397));
}));


shadow.markup.react.embed = (function shadow$markup$react$embed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29595 = arguments.length;
var i__4737__auto___29596 = (0);
while(true){
if((i__4737__auto___29596 < len__4736__auto___29595)){
args__4742__auto__.push((arguments[i__4737__auto___29596]));

var G__29597 = (i__4737__auto___29596 + (1));
i__4737__auto___29596 = G__29597;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("embed",args__29356__auto__);
}));

(shadow.markup.react.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.embed.cljs$lang$applyTo = (function (seq29398){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29398));
}));


shadow.markup.react.fieldset = (function shadow$markup$react$fieldset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29598 = arguments.length;
var i__4737__auto___29599 = (0);
while(true){
if((i__4737__auto___29599 < len__4736__auto___29598)){
args__4742__auto__.push((arguments[i__4737__auto___29599]));

var G__29600 = (i__4737__auto___29599 + (1));
i__4737__auto___29599 = G__29600;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("fieldset",args__29356__auto__);
}));

(shadow.markup.react.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.fieldset.cljs$lang$applyTo = (function (seq29399){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29399));
}));


shadow.markup.react.figcaption = (function shadow$markup$react$figcaption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29601 = arguments.length;
var i__4737__auto___29602 = (0);
while(true){
if((i__4737__auto___29602 < len__4736__auto___29601)){
args__4742__auto__.push((arguments[i__4737__auto___29602]));

var G__29603 = (i__4737__auto___29602 + (1));
i__4737__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("figcaption",args__29356__auto__);
}));

(shadow.markup.react.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.figcaption.cljs$lang$applyTo = (function (seq29400){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29400));
}));


shadow.markup.react.figure = (function shadow$markup$react$figure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29604 = arguments.length;
var i__4737__auto___29605 = (0);
while(true){
if((i__4737__auto___29605 < len__4736__auto___29604)){
args__4742__auto__.push((arguments[i__4737__auto___29605]));

var G__29606 = (i__4737__auto___29605 + (1));
i__4737__auto___29605 = G__29606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("figure",args__29356__auto__);
}));

(shadow.markup.react.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.figure.cljs$lang$applyTo = (function (seq29401){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29401));
}));


shadow.markup.react.footer = (function shadow$markup$react$footer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29607 = arguments.length;
var i__4737__auto___29608 = (0);
while(true){
if((i__4737__auto___29608 < len__4736__auto___29607)){
args__4742__auto__.push((arguments[i__4737__auto___29608]));

var G__29609 = (i__4737__auto___29608 + (1));
i__4737__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("footer",args__29356__auto__);
}));

(shadow.markup.react.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.footer.cljs$lang$applyTo = (function (seq29402){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29402));
}));


shadow.markup.react.form = (function shadow$markup$react$form(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29610 = arguments.length;
var i__4737__auto___29611 = (0);
while(true){
if((i__4737__auto___29611 < len__4736__auto___29610)){
args__4742__auto__.push((arguments[i__4737__auto___29611]));

var G__29612 = (i__4737__auto___29611 + (1));
i__4737__auto___29611 = G__29612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("form",args__29356__auto__);
}));

(shadow.markup.react.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.form.cljs$lang$applyTo = (function (seq29403){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29403));
}));


shadow.markup.react.input = (function shadow$markup$react$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29613 = arguments.length;
var i__4737__auto___29614 = (0);
while(true){
if((i__4737__auto___29614 < len__4736__auto___29613)){
args__4742__auto__.push((arguments[i__4737__auto___29614]));

var G__29615 = (i__4737__auto___29614 + (1));
i__4737__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("input",args__29356__auto__);
}));

(shadow.markup.react.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.input.cljs$lang$applyTo = (function (seq29404){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29404));
}));


shadow.markup.react.textarea = (function shadow$markup$react$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29616 = arguments.length;
var i__4737__auto___29617 = (0);
while(true){
if((i__4737__auto___29617 < len__4736__auto___29616)){
args__4742__auto__.push((arguments[i__4737__auto___29617]));

var G__29618 = (i__4737__auto___29617 + (1));
i__4737__auto___29617 = G__29618;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("textarea",args__29356__auto__);
}));

(shadow.markup.react.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.textarea.cljs$lang$applyTo = (function (seq29405){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29405));
}));


shadow.markup.react.option = (function shadow$markup$react$option(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29619 = arguments.length;
var i__4737__auto___29620 = (0);
while(true){
if((i__4737__auto___29620 < len__4736__auto___29619)){
args__4742__auto__.push((arguments[i__4737__auto___29620]));

var G__29621 = (i__4737__auto___29620 + (1));
i__4737__auto___29620 = G__29621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("option",args__29356__auto__);
}));

(shadow.markup.react.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.option.cljs$lang$applyTo = (function (seq29406){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29406));
}));


shadow.markup.react.h1 = (function shadow$markup$react$h1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29622 = arguments.length;
var i__4737__auto___29623 = (0);
while(true){
if((i__4737__auto___29623 < len__4736__auto___29622)){
args__4742__auto__.push((arguments[i__4737__auto___29623]));

var G__29624 = (i__4737__auto___29623 + (1));
i__4737__auto___29623 = G__29624;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h1",args__29356__auto__);
}));

(shadow.markup.react.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h1.cljs$lang$applyTo = (function (seq29407){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29407));
}));


shadow.markup.react.h2 = (function shadow$markup$react$h2(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29625 = arguments.length;
var i__4737__auto___29626 = (0);
while(true){
if((i__4737__auto___29626 < len__4736__auto___29625)){
args__4742__auto__.push((arguments[i__4737__auto___29626]));

var G__29627 = (i__4737__auto___29626 + (1));
i__4737__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h2",args__29356__auto__);
}));

(shadow.markup.react.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h2.cljs$lang$applyTo = (function (seq29408){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29408));
}));


shadow.markup.react.h3 = (function shadow$markup$react$h3(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29628 = arguments.length;
var i__4737__auto___29629 = (0);
while(true){
if((i__4737__auto___29629 < len__4736__auto___29628)){
args__4742__auto__.push((arguments[i__4737__auto___29629]));

var G__29630 = (i__4737__auto___29629 + (1));
i__4737__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h3",args__29356__auto__);
}));

(shadow.markup.react.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h3.cljs$lang$applyTo = (function (seq29409){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29409));
}));


shadow.markup.react.h4 = (function shadow$markup$react$h4(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29631 = arguments.length;
var i__4737__auto___29632 = (0);
while(true){
if((i__4737__auto___29632 < len__4736__auto___29631)){
args__4742__auto__.push((arguments[i__4737__auto___29632]));

var G__29633 = (i__4737__auto___29632 + (1));
i__4737__auto___29632 = G__29633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h4",args__29356__auto__);
}));

(shadow.markup.react.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h4.cljs$lang$applyTo = (function (seq29410){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29410));
}));


shadow.markup.react.h5 = (function shadow$markup$react$h5(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29634 = arguments.length;
var i__4737__auto___29635 = (0);
while(true){
if((i__4737__auto___29635 < len__4736__auto___29634)){
args__4742__auto__.push((arguments[i__4737__auto___29635]));

var G__29636 = (i__4737__auto___29635 + (1));
i__4737__auto___29635 = G__29636;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h5",args__29356__auto__);
}));

(shadow.markup.react.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h5.cljs$lang$applyTo = (function (seq29411){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29411));
}));


shadow.markup.react.h6 = (function shadow$markup$react$h6(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29637 = arguments.length;
var i__4737__auto___29638 = (0);
while(true){
if((i__4737__auto___29638 < len__4736__auto___29637)){
args__4742__auto__.push((arguments[i__4737__auto___29638]));

var G__29639 = (i__4737__auto___29638 + (1));
i__4737__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("h6",args__29356__auto__);
}));

(shadow.markup.react.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h6.cljs$lang$applyTo = (function (seq29412){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29412));
}));


shadow.markup.react.head = (function shadow$markup$react$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29640 = arguments.length;
var i__4737__auto___29641 = (0);
while(true){
if((i__4737__auto___29641 < len__4736__auto___29640)){
args__4742__auto__.push((arguments[i__4737__auto___29641]));

var G__29642 = (i__4737__auto___29641 + (1));
i__4737__auto___29641 = G__29642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("head",args__29356__auto__);
}));

(shadow.markup.react.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.head.cljs$lang$applyTo = (function (seq29413){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29413));
}));


shadow.markup.react.header = (function shadow$markup$react$header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29643 = arguments.length;
var i__4737__auto___29644 = (0);
while(true){
if((i__4737__auto___29644 < len__4736__auto___29643)){
args__4742__auto__.push((arguments[i__4737__auto___29644]));

var G__29645 = (i__4737__auto___29644 + (1));
i__4737__auto___29644 = G__29645;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("header",args__29356__auto__);
}));

(shadow.markup.react.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.header.cljs$lang$applyTo = (function (seq29414){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29414));
}));


shadow.markup.react.hr = (function shadow$markup$react$hr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29646 = arguments.length;
var i__4737__auto___29647 = (0);
while(true){
if((i__4737__auto___29647 < len__4736__auto___29646)){
args__4742__auto__.push((arguments[i__4737__auto___29647]));

var G__29648 = (i__4737__auto___29647 + (1));
i__4737__auto___29647 = G__29648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("hr",args__29356__auto__);
}));

(shadow.markup.react.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.hr.cljs$lang$applyTo = (function (seq29415){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29415));
}));


shadow.markup.react.html = (function shadow$markup$react$html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29649 = arguments.length;
var i__4737__auto___29650 = (0);
while(true){
if((i__4737__auto___29650 < len__4736__auto___29649)){
args__4742__auto__.push((arguments[i__4737__auto___29650]));

var G__29651 = (i__4737__auto___29650 + (1));
i__4737__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("html",args__29356__auto__);
}));

(shadow.markup.react.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.html.cljs$lang$applyTo = (function (seq29416){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29416));
}));


shadow.markup.react.i = (function shadow$markup$react$i(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29652 = arguments.length;
var i__4737__auto___29653 = (0);
while(true){
if((i__4737__auto___29653 < len__4736__auto___29652)){
args__4742__auto__.push((arguments[i__4737__auto___29653]));

var G__29654 = (i__4737__auto___29653 + (1));
i__4737__auto___29653 = G__29654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("i",args__29356__auto__);
}));

(shadow.markup.react.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.i.cljs$lang$applyTo = (function (seq29417){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29417));
}));


shadow.markup.react.iframe = (function shadow$markup$react$iframe(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29655 = arguments.length;
var i__4737__auto___29656 = (0);
while(true){
if((i__4737__auto___29656 < len__4736__auto___29655)){
args__4742__auto__.push((arguments[i__4737__auto___29656]));

var G__29657 = (i__4737__auto___29656 + (1));
i__4737__auto___29656 = G__29657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("iframe",args__29356__auto__);
}));

(shadow.markup.react.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.iframe.cljs$lang$applyTo = (function (seq29418){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29418));
}));


shadow.markup.react.img = (function shadow$markup$react$img(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29658 = arguments.length;
var i__4737__auto___29659 = (0);
while(true){
if((i__4737__auto___29659 < len__4736__auto___29658)){
args__4742__auto__.push((arguments[i__4737__auto___29659]));

var G__29660 = (i__4737__auto___29659 + (1));
i__4737__auto___29659 = G__29660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("img",args__29356__auto__);
}));

(shadow.markup.react.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.img.cljs$lang$applyTo = (function (seq29419){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29419));
}));


shadow.markup.react.ins = (function shadow$markup$react$ins(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29661 = arguments.length;
var i__4737__auto___29662 = (0);
while(true){
if((i__4737__auto___29662 < len__4736__auto___29661)){
args__4742__auto__.push((arguments[i__4737__auto___29662]));

var G__29663 = (i__4737__auto___29662 + (1));
i__4737__auto___29662 = G__29663;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("ins",args__29356__auto__);
}));

(shadow.markup.react.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ins.cljs$lang$applyTo = (function (seq29420){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29420));
}));


shadow.markup.react.kbd = (function shadow$markup$react$kbd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29664 = arguments.length;
var i__4737__auto___29665 = (0);
while(true){
if((i__4737__auto___29665 < len__4736__auto___29664)){
args__4742__auto__.push((arguments[i__4737__auto___29665]));

var G__29666 = (i__4737__auto___29665 + (1));
i__4737__auto___29665 = G__29666;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("kbd",args__29356__auto__);
}));

(shadow.markup.react.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.kbd.cljs$lang$applyTo = (function (seq29421){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29421));
}));


shadow.markup.react.keygen = (function shadow$markup$react$keygen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29667 = arguments.length;
var i__4737__auto___29668 = (0);
while(true){
if((i__4737__auto___29668 < len__4736__auto___29667)){
args__4742__auto__.push((arguments[i__4737__auto___29668]));

var G__29669 = (i__4737__auto___29668 + (1));
i__4737__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("keygen",args__29356__auto__);
}));

(shadow.markup.react.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.keygen.cljs$lang$applyTo = (function (seq29422){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29422));
}));


shadow.markup.react.label = (function shadow$markup$react$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29670 = arguments.length;
var i__4737__auto___29671 = (0);
while(true){
if((i__4737__auto___29671 < len__4736__auto___29670)){
args__4742__auto__.push((arguments[i__4737__auto___29671]));

var G__29672 = (i__4737__auto___29671 + (1));
i__4737__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("label",args__29356__auto__);
}));

(shadow.markup.react.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.label.cljs$lang$applyTo = (function (seq29423){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29423));
}));


shadow.markup.react.legend = (function shadow$markup$react$legend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29673 = arguments.length;
var i__4737__auto___29674 = (0);
while(true){
if((i__4737__auto___29674 < len__4736__auto___29673)){
args__4742__auto__.push((arguments[i__4737__auto___29674]));

var G__29675 = (i__4737__auto___29674 + (1));
i__4737__auto___29674 = G__29675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("legend",args__29356__auto__);
}));

(shadow.markup.react.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.legend.cljs$lang$applyTo = (function (seq29424){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29424));
}));


shadow.markup.react.li = (function shadow$markup$react$li(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29676 = arguments.length;
var i__4737__auto___29677 = (0);
while(true){
if((i__4737__auto___29677 < len__4736__auto___29676)){
args__4742__auto__.push((arguments[i__4737__auto___29677]));

var G__29678 = (i__4737__auto___29677 + (1));
i__4737__auto___29677 = G__29678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("li",args__29356__auto__);
}));

(shadow.markup.react.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.li.cljs$lang$applyTo = (function (seq29425){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29425));
}));


shadow.markup.react.link = (function shadow$markup$react$link(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29679 = arguments.length;
var i__4737__auto___29680 = (0);
while(true){
if((i__4737__auto___29680 < len__4736__auto___29679)){
args__4742__auto__.push((arguments[i__4737__auto___29680]));

var G__29681 = (i__4737__auto___29680 + (1));
i__4737__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("link",args__29356__auto__);
}));

(shadow.markup.react.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.link.cljs$lang$applyTo = (function (seq29426){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29426));
}));


shadow.markup.react.main = (function shadow$markup$react$main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29682 = arguments.length;
var i__4737__auto___29683 = (0);
while(true){
if((i__4737__auto___29683 < len__4736__auto___29682)){
args__4742__auto__.push((arguments[i__4737__auto___29683]));

var G__29684 = (i__4737__auto___29683 + (1));
i__4737__auto___29683 = G__29684;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("main",args__29356__auto__);
}));

(shadow.markup.react.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.main.cljs$lang$applyTo = (function (seq29427){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29427));
}));


shadow.markup.react.map = (function shadow$markup$react$map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29685 = arguments.length;
var i__4737__auto___29686 = (0);
while(true){
if((i__4737__auto___29686 < len__4736__auto___29685)){
args__4742__auto__.push((arguments[i__4737__auto___29686]));

var G__29687 = (i__4737__auto___29686 + (1));
i__4737__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("map",args__29356__auto__);
}));

(shadow.markup.react.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.map.cljs$lang$applyTo = (function (seq29428){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29428));
}));


shadow.markup.react.mark = (function shadow$markup$react$mark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29688 = arguments.length;
var i__4737__auto___29689 = (0);
while(true){
if((i__4737__auto___29689 < len__4736__auto___29688)){
args__4742__auto__.push((arguments[i__4737__auto___29689]));

var G__29690 = (i__4737__auto___29689 + (1));
i__4737__auto___29689 = G__29690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("mark",args__29356__auto__);
}));

(shadow.markup.react.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.mark.cljs$lang$applyTo = (function (seq29429){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29429));
}));


shadow.markup.react.marquee = (function shadow$markup$react$marquee(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29691 = arguments.length;
var i__4737__auto___29692 = (0);
while(true){
if((i__4737__auto___29692 < len__4736__auto___29691)){
args__4742__auto__.push((arguments[i__4737__auto___29692]));

var G__29693 = (i__4737__auto___29692 + (1));
i__4737__auto___29692 = G__29693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("marquee",args__29356__auto__);
}));

(shadow.markup.react.marquee.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.marquee.cljs$lang$applyTo = (function (seq29430){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29430));
}));


shadow.markup.react.menu = (function shadow$markup$react$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29694 = arguments.length;
var i__4737__auto___29695 = (0);
while(true){
if((i__4737__auto___29695 < len__4736__auto___29694)){
args__4742__auto__.push((arguments[i__4737__auto___29695]));

var G__29696 = (i__4737__auto___29695 + (1));
i__4737__auto___29695 = G__29696;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("menu",args__29356__auto__);
}));

(shadow.markup.react.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.menu.cljs$lang$applyTo = (function (seq29431){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29431));
}));


shadow.markup.react.menuitem = (function shadow$markup$react$menuitem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29697 = arguments.length;
var i__4737__auto___29698 = (0);
while(true){
if((i__4737__auto___29698 < len__4736__auto___29697)){
args__4742__auto__.push((arguments[i__4737__auto___29698]));

var G__29699 = (i__4737__auto___29698 + (1));
i__4737__auto___29698 = G__29699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("menuitem",args__29356__auto__);
}));

(shadow.markup.react.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.menuitem.cljs$lang$applyTo = (function (seq29432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29432));
}));


shadow.markup.react.meta = (function shadow$markup$react$meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29700 = arguments.length;
var i__4737__auto___29701 = (0);
while(true){
if((i__4737__auto___29701 < len__4736__auto___29700)){
args__4742__auto__.push((arguments[i__4737__auto___29701]));

var G__29702 = (i__4737__auto___29701 + (1));
i__4737__auto___29701 = G__29702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("meta",args__29356__auto__);
}));

(shadow.markup.react.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.meta.cljs$lang$applyTo = (function (seq29433){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29433));
}));


shadow.markup.react.meter = (function shadow$markup$react$meter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29703 = arguments.length;
var i__4737__auto___29704 = (0);
while(true){
if((i__4737__auto___29704 < len__4736__auto___29703)){
args__4742__auto__.push((arguments[i__4737__auto___29704]));

var G__29705 = (i__4737__auto___29704 + (1));
i__4737__auto___29704 = G__29705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("meter",args__29356__auto__);
}));

(shadow.markup.react.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.meter.cljs$lang$applyTo = (function (seq29434){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29434));
}));


shadow.markup.react.nav = (function shadow$markup$react$nav(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29706 = arguments.length;
var i__4737__auto___29707 = (0);
while(true){
if((i__4737__auto___29707 < len__4736__auto___29706)){
args__4742__auto__.push((arguments[i__4737__auto___29707]));

var G__29708 = (i__4737__auto___29707 + (1));
i__4737__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("nav",args__29356__auto__);
}));

(shadow.markup.react.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.nav.cljs$lang$applyTo = (function (seq29435){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29435));
}));


shadow.markup.react.noscript = (function shadow$markup$react$noscript(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29709 = arguments.length;
var i__4737__auto___29710 = (0);
while(true){
if((i__4737__auto___29710 < len__4736__auto___29709)){
args__4742__auto__.push((arguments[i__4737__auto___29710]));

var G__29711 = (i__4737__auto___29710 + (1));
i__4737__auto___29710 = G__29711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("noscript",args__29356__auto__);
}));

(shadow.markup.react.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.noscript.cljs$lang$applyTo = (function (seq29436){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29436));
}));


shadow.markup.react.object = (function shadow$markup$react$object(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29712 = arguments.length;
var i__4737__auto___29713 = (0);
while(true){
if((i__4737__auto___29713 < len__4736__auto___29712)){
args__4742__auto__.push((arguments[i__4737__auto___29713]));

var G__29714 = (i__4737__auto___29713 + (1));
i__4737__auto___29713 = G__29714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("object",args__29356__auto__);
}));

(shadow.markup.react.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.object.cljs$lang$applyTo = (function (seq29437){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29437));
}));


shadow.markup.react.ol = (function shadow$markup$react$ol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29715 = arguments.length;
var i__4737__auto___29716 = (0);
while(true){
if((i__4737__auto___29716 < len__4736__auto___29715)){
args__4742__auto__.push((arguments[i__4737__auto___29716]));

var G__29717 = (i__4737__auto___29716 + (1));
i__4737__auto___29716 = G__29717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("ol",args__29356__auto__);
}));

(shadow.markup.react.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ol.cljs$lang$applyTo = (function (seq29438){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29438));
}));


shadow.markup.react.optgroup = (function shadow$markup$react$optgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29718 = arguments.length;
var i__4737__auto___29719 = (0);
while(true){
if((i__4737__auto___29719 < len__4736__auto___29718)){
args__4742__auto__.push((arguments[i__4737__auto___29719]));

var G__29720 = (i__4737__auto___29719 + (1));
i__4737__auto___29719 = G__29720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("optgroup",args__29356__auto__);
}));

(shadow.markup.react.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.optgroup.cljs$lang$applyTo = (function (seq29439){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29439));
}));


shadow.markup.react.output = (function shadow$markup$react$output(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29721 = arguments.length;
var i__4737__auto___29722 = (0);
while(true){
if((i__4737__auto___29722 < len__4736__auto___29721)){
args__4742__auto__.push((arguments[i__4737__auto___29722]));

var G__29723 = (i__4737__auto___29722 + (1));
i__4737__auto___29722 = G__29723;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("output",args__29356__auto__);
}));

(shadow.markup.react.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.output.cljs$lang$applyTo = (function (seq29440){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29440));
}));


shadow.markup.react.p = (function shadow$markup$react$p(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29724 = arguments.length;
var i__4737__auto___29725 = (0);
while(true){
if((i__4737__auto___29725 < len__4736__auto___29724)){
args__4742__auto__.push((arguments[i__4737__auto___29725]));

var G__29726 = (i__4737__auto___29725 + (1));
i__4737__auto___29725 = G__29726;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("p",args__29356__auto__);
}));

(shadow.markup.react.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.p.cljs$lang$applyTo = (function (seq29441){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29441));
}));


shadow.markup.react.param = (function shadow$markup$react$param(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29727 = arguments.length;
var i__4737__auto___29728 = (0);
while(true){
if((i__4737__auto___29728 < len__4736__auto___29727)){
args__4742__auto__.push((arguments[i__4737__auto___29728]));

var G__29729 = (i__4737__auto___29728 + (1));
i__4737__auto___29728 = G__29729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("param",args__29356__auto__);
}));

(shadow.markup.react.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.param.cljs$lang$applyTo = (function (seq29442){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29442));
}));


shadow.markup.react.pre = (function shadow$markup$react$pre(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29730 = arguments.length;
var i__4737__auto___29731 = (0);
while(true){
if((i__4737__auto___29731 < len__4736__auto___29730)){
args__4742__auto__.push((arguments[i__4737__auto___29731]));

var G__29732 = (i__4737__auto___29731 + (1));
i__4737__auto___29731 = G__29732;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("pre",args__29356__auto__);
}));

(shadow.markup.react.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.pre.cljs$lang$applyTo = (function (seq29443){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29443));
}));


shadow.markup.react.progress = (function shadow$markup$react$progress(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29733 = arguments.length;
var i__4737__auto___29734 = (0);
while(true){
if((i__4737__auto___29734 < len__4736__auto___29733)){
args__4742__auto__.push((arguments[i__4737__auto___29734]));

var G__29735 = (i__4737__auto___29734 + (1));
i__4737__auto___29734 = G__29735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("progress",args__29356__auto__);
}));

(shadow.markup.react.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.progress.cljs$lang$applyTo = (function (seq29444){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29444));
}));


shadow.markup.react.q = (function shadow$markup$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29736 = arguments.length;
var i__4737__auto___29737 = (0);
while(true){
if((i__4737__auto___29737 < len__4736__auto___29736)){
args__4742__auto__.push((arguments[i__4737__auto___29737]));

var G__29738 = (i__4737__auto___29737 + (1));
i__4737__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("q",args__29356__auto__);
}));

(shadow.markup.react.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.q.cljs$lang$applyTo = (function (seq29445){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29445));
}));


shadow.markup.react.rp = (function shadow$markup$react$rp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29739 = arguments.length;
var i__4737__auto___29740 = (0);
while(true){
if((i__4737__auto___29740 < len__4736__auto___29739)){
args__4742__auto__.push((arguments[i__4737__auto___29740]));

var G__29741 = (i__4737__auto___29740 + (1));
i__4737__auto___29740 = G__29741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("rp",args__29356__auto__);
}));

(shadow.markup.react.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rp.cljs$lang$applyTo = (function (seq29446){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29446));
}));


shadow.markup.react.rt = (function shadow$markup$react$rt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29742 = arguments.length;
var i__4737__auto___29743 = (0);
while(true){
if((i__4737__auto___29743 < len__4736__auto___29742)){
args__4742__auto__.push((arguments[i__4737__auto___29743]));

var G__29744 = (i__4737__auto___29743 + (1));
i__4737__auto___29743 = G__29744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("rt",args__29356__auto__);
}));

(shadow.markup.react.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rt.cljs$lang$applyTo = (function (seq29447){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29447));
}));


shadow.markup.react.ruby = (function shadow$markup$react$ruby(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29745 = arguments.length;
var i__4737__auto___29746 = (0);
while(true){
if((i__4737__auto___29746 < len__4736__auto___29745)){
args__4742__auto__.push((arguments[i__4737__auto___29746]));

var G__29747 = (i__4737__auto___29746 + (1));
i__4737__auto___29746 = G__29747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("ruby",args__29356__auto__);
}));

(shadow.markup.react.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ruby.cljs$lang$applyTo = (function (seq29448){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29448));
}));


shadow.markup.react.s = (function shadow$markup$react$s(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29748 = arguments.length;
var i__4737__auto___29749 = (0);
while(true){
if((i__4737__auto___29749 < len__4736__auto___29748)){
args__4742__auto__.push((arguments[i__4737__auto___29749]));

var G__29750 = (i__4737__auto___29749 + (1));
i__4737__auto___29749 = G__29750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("s",args__29356__auto__);
}));

(shadow.markup.react.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.s.cljs$lang$applyTo = (function (seq29449){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29449));
}));


shadow.markup.react.samp = (function shadow$markup$react$samp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29751 = arguments.length;
var i__4737__auto___29752 = (0);
while(true){
if((i__4737__auto___29752 < len__4736__auto___29751)){
args__4742__auto__.push((arguments[i__4737__auto___29752]));

var G__29753 = (i__4737__auto___29752 + (1));
i__4737__auto___29752 = G__29753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("samp",args__29356__auto__);
}));

(shadow.markup.react.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.samp.cljs$lang$applyTo = (function (seq29450){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29450));
}));


shadow.markup.react.script = (function shadow$markup$react$script(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29754 = arguments.length;
var i__4737__auto___29755 = (0);
while(true){
if((i__4737__auto___29755 < len__4736__auto___29754)){
args__4742__auto__.push((arguments[i__4737__auto___29755]));

var G__29756 = (i__4737__auto___29755 + (1));
i__4737__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("script",args__29356__auto__);
}));

(shadow.markup.react.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.script.cljs$lang$applyTo = (function (seq29451){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29451));
}));


shadow.markup.react.section = (function shadow$markup$react$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29757 = arguments.length;
var i__4737__auto___29758 = (0);
while(true){
if((i__4737__auto___29758 < len__4736__auto___29757)){
args__4742__auto__.push((arguments[i__4737__auto___29758]));

var G__29759 = (i__4737__auto___29758 + (1));
i__4737__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("section",args__29356__auto__);
}));

(shadow.markup.react.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.section.cljs$lang$applyTo = (function (seq29452){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29452));
}));


shadow.markup.react.select = (function shadow$markup$react$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29760 = arguments.length;
var i__4737__auto___29761 = (0);
while(true){
if((i__4737__auto___29761 < len__4736__auto___29760)){
args__4742__auto__.push((arguments[i__4737__auto___29761]));

var G__29762 = (i__4737__auto___29761 + (1));
i__4737__auto___29761 = G__29762;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("select",args__29356__auto__);
}));

(shadow.markup.react.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.select.cljs$lang$applyTo = (function (seq29453){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29453));
}));


shadow.markup.react.small = (function shadow$markup$react$small(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29763 = arguments.length;
var i__4737__auto___29764 = (0);
while(true){
if((i__4737__auto___29764 < len__4736__auto___29763)){
args__4742__auto__.push((arguments[i__4737__auto___29764]));

var G__29765 = (i__4737__auto___29764 + (1));
i__4737__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("small",args__29356__auto__);
}));

(shadow.markup.react.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.small.cljs$lang$applyTo = (function (seq29454){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29454));
}));


shadow.markup.react.source = (function shadow$markup$react$source(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29766 = arguments.length;
var i__4737__auto___29767 = (0);
while(true){
if((i__4737__auto___29767 < len__4736__auto___29766)){
args__4742__auto__.push((arguments[i__4737__auto___29767]));

var G__29768 = (i__4737__auto___29767 + (1));
i__4737__auto___29767 = G__29768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("source",args__29356__auto__);
}));

(shadow.markup.react.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.source.cljs$lang$applyTo = (function (seq29455){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29455));
}));


shadow.markup.react.span = (function shadow$markup$react$span(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29769 = arguments.length;
var i__4737__auto___29770 = (0);
while(true){
if((i__4737__auto___29770 < len__4736__auto___29769)){
args__4742__auto__.push((arguments[i__4737__auto___29770]));

var G__29771 = (i__4737__auto___29770 + (1));
i__4737__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("span",args__29356__auto__);
}));

(shadow.markup.react.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.span.cljs$lang$applyTo = (function (seq29456){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29456));
}));


shadow.markup.react.strong = (function shadow$markup$react$strong(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29772 = arguments.length;
var i__4737__auto___29773 = (0);
while(true){
if((i__4737__auto___29773 < len__4736__auto___29772)){
args__4742__auto__.push((arguments[i__4737__auto___29773]));

var G__29774 = (i__4737__auto___29773 + (1));
i__4737__auto___29773 = G__29774;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("strong",args__29356__auto__);
}));

(shadow.markup.react.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.strong.cljs$lang$applyTo = (function (seq29457){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29457));
}));


shadow.markup.react.style = (function shadow$markup$react$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29775 = arguments.length;
var i__4737__auto___29776 = (0);
while(true){
if((i__4737__auto___29776 < len__4736__auto___29775)){
args__4742__auto__.push((arguments[i__4737__auto___29776]));

var G__29777 = (i__4737__auto___29776 + (1));
i__4737__auto___29776 = G__29777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("style",args__29356__auto__);
}));

(shadow.markup.react.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.style.cljs$lang$applyTo = (function (seq29458){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29458));
}));


shadow.markup.react.sub = (function shadow$markup$react$sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29778 = arguments.length;
var i__4737__auto___29779 = (0);
while(true){
if((i__4737__auto___29779 < len__4736__auto___29778)){
args__4742__auto__.push((arguments[i__4737__auto___29779]));

var G__29780 = (i__4737__auto___29779 + (1));
i__4737__auto___29779 = G__29780;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("sub",args__29356__auto__);
}));

(shadow.markup.react.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.sub.cljs$lang$applyTo = (function (seq29459){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29459));
}));


shadow.markup.react.summary = (function shadow$markup$react$summary(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29781 = arguments.length;
var i__4737__auto___29782 = (0);
while(true){
if((i__4737__auto___29782 < len__4736__auto___29781)){
args__4742__auto__.push((arguments[i__4737__auto___29782]));

var G__29783 = (i__4737__auto___29782 + (1));
i__4737__auto___29782 = G__29783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("summary",args__29356__auto__);
}));

(shadow.markup.react.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.summary.cljs$lang$applyTo = (function (seq29460){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29460));
}));


shadow.markup.react.sup = (function shadow$markup$react$sup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29784 = arguments.length;
var i__4737__auto___29785 = (0);
while(true){
if((i__4737__auto___29785 < len__4736__auto___29784)){
args__4742__auto__.push((arguments[i__4737__auto___29785]));

var G__29786 = (i__4737__auto___29785 + (1));
i__4737__auto___29785 = G__29786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("sup",args__29356__auto__);
}));

(shadow.markup.react.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.sup.cljs$lang$applyTo = (function (seq29461){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29461));
}));


shadow.markup.react.table = (function shadow$markup$react$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29787 = arguments.length;
var i__4737__auto___29788 = (0);
while(true){
if((i__4737__auto___29788 < len__4736__auto___29787)){
args__4742__auto__.push((arguments[i__4737__auto___29788]));

var G__29789 = (i__4737__auto___29788 + (1));
i__4737__auto___29788 = G__29789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("table",args__29356__auto__);
}));

(shadow.markup.react.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.table.cljs$lang$applyTo = (function (seq29462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29462));
}));


shadow.markup.react.tbody = (function shadow$markup$react$tbody(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29790 = arguments.length;
var i__4737__auto___29791 = (0);
while(true){
if((i__4737__auto___29791 < len__4736__auto___29790)){
args__4742__auto__.push((arguments[i__4737__auto___29791]));

var G__29792 = (i__4737__auto___29791 + (1));
i__4737__auto___29791 = G__29792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("tbody",args__29356__auto__);
}));

(shadow.markup.react.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tbody.cljs$lang$applyTo = (function (seq29463){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29463));
}));


shadow.markup.react.td = (function shadow$markup$react$td(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29793 = arguments.length;
var i__4737__auto___29794 = (0);
while(true){
if((i__4737__auto___29794 < len__4736__auto___29793)){
args__4742__auto__.push((arguments[i__4737__auto___29794]));

var G__29795 = (i__4737__auto___29794 + (1));
i__4737__auto___29794 = G__29795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("td",args__29356__auto__);
}));

(shadow.markup.react.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.td.cljs$lang$applyTo = (function (seq29464){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29464));
}));


shadow.markup.react.tfoot = (function shadow$markup$react$tfoot(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29796 = arguments.length;
var i__4737__auto___29797 = (0);
while(true){
if((i__4737__auto___29797 < len__4736__auto___29796)){
args__4742__auto__.push((arguments[i__4737__auto___29797]));

var G__29798 = (i__4737__auto___29797 + (1));
i__4737__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("tfoot",args__29356__auto__);
}));

(shadow.markup.react.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tfoot.cljs$lang$applyTo = (function (seq29465){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29465));
}));


shadow.markup.react.th = (function shadow$markup$react$th(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29799 = arguments.length;
var i__4737__auto___29800 = (0);
while(true){
if((i__4737__auto___29800 < len__4736__auto___29799)){
args__4742__auto__.push((arguments[i__4737__auto___29800]));

var G__29801 = (i__4737__auto___29800 + (1));
i__4737__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("th",args__29356__auto__);
}));

(shadow.markup.react.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.th.cljs$lang$applyTo = (function (seq29466){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29466));
}));


shadow.markup.react.thead = (function shadow$markup$react$thead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29802 = arguments.length;
var i__4737__auto___29803 = (0);
while(true){
if((i__4737__auto___29803 < len__4736__auto___29802)){
args__4742__auto__.push((arguments[i__4737__auto___29803]));

var G__29804 = (i__4737__auto___29803 + (1));
i__4737__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("thead",args__29356__auto__);
}));

(shadow.markup.react.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.thead.cljs$lang$applyTo = (function (seq29467){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29467));
}));


shadow.markup.react.time = (function shadow$markup$react$time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29805 = arguments.length;
var i__4737__auto___29806 = (0);
while(true){
if((i__4737__auto___29806 < len__4736__auto___29805)){
args__4742__auto__.push((arguments[i__4737__auto___29806]));

var G__29807 = (i__4737__auto___29806 + (1));
i__4737__auto___29806 = G__29807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("time",args__29356__auto__);
}));

(shadow.markup.react.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.time.cljs$lang$applyTo = (function (seq29468){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29468));
}));


shadow.markup.react.title = (function shadow$markup$react$title(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29808 = arguments.length;
var i__4737__auto___29809 = (0);
while(true){
if((i__4737__auto___29809 < len__4736__auto___29808)){
args__4742__auto__.push((arguments[i__4737__auto___29809]));

var G__29810 = (i__4737__auto___29809 + (1));
i__4737__auto___29809 = G__29810;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("title",args__29356__auto__);
}));

(shadow.markup.react.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.title.cljs$lang$applyTo = (function (seq29469){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29469));
}));


shadow.markup.react.tr = (function shadow$markup$react$tr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29811 = arguments.length;
var i__4737__auto___29812 = (0);
while(true){
if((i__4737__auto___29812 < len__4736__auto___29811)){
args__4742__auto__.push((arguments[i__4737__auto___29812]));

var G__29813 = (i__4737__auto___29812 + (1));
i__4737__auto___29812 = G__29813;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("tr",args__29356__auto__);
}));

(shadow.markup.react.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tr.cljs$lang$applyTo = (function (seq29470){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29470));
}));


shadow.markup.react.track = (function shadow$markup$react$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29814 = arguments.length;
var i__4737__auto___29815 = (0);
while(true){
if((i__4737__auto___29815 < len__4736__auto___29814)){
args__4742__auto__.push((arguments[i__4737__auto___29815]));

var G__29816 = (i__4737__auto___29815 + (1));
i__4737__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("track",args__29356__auto__);
}));

(shadow.markup.react.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.track.cljs$lang$applyTo = (function (seq29471){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29471));
}));


shadow.markup.react.u = (function shadow$markup$react$u(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29817 = arguments.length;
var i__4737__auto___29818 = (0);
while(true){
if((i__4737__auto___29818 < len__4736__auto___29817)){
args__4742__auto__.push((arguments[i__4737__auto___29818]));

var G__29819 = (i__4737__auto___29818 + (1));
i__4737__auto___29818 = G__29819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("u",args__29356__auto__);
}));

(shadow.markup.react.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.u.cljs$lang$applyTo = (function (seq29472){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29472));
}));


shadow.markup.react.ul = (function shadow$markup$react$ul(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29820 = arguments.length;
var i__4737__auto___29821 = (0);
while(true){
if((i__4737__auto___29821 < len__4736__auto___29820)){
args__4742__auto__.push((arguments[i__4737__auto___29821]));

var G__29822 = (i__4737__auto___29821 + (1));
i__4737__auto___29821 = G__29822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("ul",args__29356__auto__);
}));

(shadow.markup.react.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ul.cljs$lang$applyTo = (function (seq29473){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29473));
}));


shadow.markup.react.var$ = (function shadow$markup$react$var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29823 = arguments.length;
var i__4737__auto___29824 = (0);
while(true){
if((i__4737__auto___29824 < len__4736__auto___29823)){
args__4742__auto__.push((arguments[i__4737__auto___29824]));

var G__29825 = (i__4737__auto___29824 + (1));
i__4737__auto___29824 = G__29825;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("var",args__29356__auto__);
}));

(shadow.markup.react.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.var$.cljs$lang$applyTo = (function (seq29474){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29474));
}));


shadow.markup.react.video = (function shadow$markup$react$video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29826 = arguments.length;
var i__4737__auto___29827 = (0);
while(true){
if((i__4737__auto___29827 < len__4736__auto___29826)){
args__4742__auto__.push((arguments[i__4737__auto___29827]));

var G__29828 = (i__4737__auto___29827 + (1));
i__4737__auto___29827 = G__29828;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("video",args__29356__auto__);
}));

(shadow.markup.react.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.video.cljs$lang$applyTo = (function (seq29475){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29475));
}));


shadow.markup.react.wbr = (function shadow$markup$react$wbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29829 = arguments.length;
var i__4737__auto___29830 = (0);
while(true){
if((i__4737__auto___29830 < len__4736__auto___29829)){
args__4742__auto__.push((arguments[i__4737__auto___29830]));

var G__29831 = (i__4737__auto___29830 + (1));
i__4737__auto___29830 = G__29831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("wbr",args__29356__auto__);
}));

(shadow.markup.react.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.wbr.cljs$lang$applyTo = (function (seq29476){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29476));
}));


shadow.markup.react.circle = (function shadow$markup$react$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29832 = arguments.length;
var i__4737__auto___29833 = (0);
while(true){
if((i__4737__auto___29833 < len__4736__auto___29832)){
args__4742__auto__.push((arguments[i__4737__auto___29833]));

var G__29834 = (i__4737__auto___29833 + (1));
i__4737__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("circle",args__29356__auto__);
}));

(shadow.markup.react.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.circle.cljs$lang$applyTo = (function (seq29477){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29477));
}));


shadow.markup.react.ellipse = (function shadow$markup$react$ellipse(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29835 = arguments.length;
var i__4737__auto___29836 = (0);
while(true){
if((i__4737__auto___29836 < len__4736__auto___29835)){
args__4742__auto__.push((arguments[i__4737__auto___29836]));

var G__29837 = (i__4737__auto___29836 + (1));
i__4737__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("ellipse",args__29356__auto__);
}));

(shadow.markup.react.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ellipse.cljs$lang$applyTo = (function (seq29478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29478));
}));


shadow.markup.react.g = (function shadow$markup$react$g(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29838 = arguments.length;
var i__4737__auto___29839 = (0);
while(true){
if((i__4737__auto___29839 < len__4736__auto___29838)){
args__4742__auto__.push((arguments[i__4737__auto___29839]));

var G__29840 = (i__4737__auto___29839 + (1));
i__4737__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("g",args__29356__auto__);
}));

(shadow.markup.react.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.g.cljs$lang$applyTo = (function (seq29479){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29479));
}));


shadow.markup.react.line = (function shadow$markup$react$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29841 = arguments.length;
var i__4737__auto___29842 = (0);
while(true){
if((i__4737__auto___29842 < len__4736__auto___29841)){
args__4742__auto__.push((arguments[i__4737__auto___29842]));

var G__29843 = (i__4737__auto___29842 + (1));
i__4737__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("line",args__29356__auto__);
}));

(shadow.markup.react.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.line.cljs$lang$applyTo = (function (seq29480){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29480));
}));


shadow.markup.react.path = (function shadow$markup$react$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29844 = arguments.length;
var i__4737__auto___29845 = (0);
while(true){
if((i__4737__auto___29845 < len__4736__auto___29844)){
args__4742__auto__.push((arguments[i__4737__auto___29845]));

var G__29846 = (i__4737__auto___29845 + (1));
i__4737__auto___29845 = G__29846;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("path",args__29356__auto__);
}));

(shadow.markup.react.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.path.cljs$lang$applyTo = (function (seq29481){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29481));
}));


shadow.markup.react.polyline = (function shadow$markup$react$polyline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29847 = arguments.length;
var i__4737__auto___29848 = (0);
while(true){
if((i__4737__auto___29848 < len__4736__auto___29847)){
args__4742__auto__.push((arguments[i__4737__auto___29848]));

var G__29849 = (i__4737__auto___29848 + (1));
i__4737__auto___29848 = G__29849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("polyline",args__29356__auto__);
}));

(shadow.markup.react.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.polyline.cljs$lang$applyTo = (function (seq29482){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29482));
}));


shadow.markup.react.rect = (function shadow$markup$react$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29850 = arguments.length;
var i__4737__auto___29851 = (0);
while(true){
if((i__4737__auto___29851 < len__4736__auto___29850)){
args__4742__auto__.push((arguments[i__4737__auto___29851]));

var G__29852 = (i__4737__auto___29851 + (1));
i__4737__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("rect",args__29356__auto__);
}));

(shadow.markup.react.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rect.cljs$lang$applyTo = (function (seq29483){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29483));
}));


shadow.markup.react.svg = (function shadow$markup$react$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29853 = arguments.length;
var i__4737__auto___29854 = (0);
while(true){
if((i__4737__auto___29854 < len__4736__auto___29853)){
args__4742__auto__.push((arguments[i__4737__auto___29854]));

var G__29855 = (i__4737__auto___29854 + (1));
i__4737__auto___29854 = G__29855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("svg",args__29356__auto__);
}));

(shadow.markup.react.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.svg.cljs$lang$applyTo = (function (seq29484){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29484));
}));


shadow.markup.react.text = (function shadow$markup$react$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29856 = arguments.length;
var i__4737__auto___29857 = (0);
while(true){
if((i__4737__auto___29857 < len__4736__auto___29856)){
args__4742__auto__.push((arguments[i__4737__auto___29857]));

var G__29858 = (i__4737__auto___29857 + (1));
i__4737__auto___29857 = G__29858;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("text",args__29356__auto__);
}));

(shadow.markup.react.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.text.cljs$lang$applyTo = (function (seq29485){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29485));
}));


shadow.markup.react.defs = (function shadow$markup$react$defs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29859 = arguments.length;
var i__4737__auto___29860 = (0);
while(true){
if((i__4737__auto___29860 < len__4736__auto___29859)){
args__4742__auto__.push((arguments[i__4737__auto___29860]));

var G__29861 = (i__4737__auto___29860 + (1));
i__4737__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("defs",args__29356__auto__);
}));

(shadow.markup.react.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.defs.cljs$lang$applyTo = (function (seq29486){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29486));
}));


shadow.markup.react.linearGradient = (function shadow$markup$react$linearGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29862 = arguments.length;
var i__4737__auto___29863 = (0);
while(true){
if((i__4737__auto___29863 < len__4736__auto___29862)){
args__4742__auto__.push((arguments[i__4737__auto___29863]));

var G__29864 = (i__4737__auto___29863 + (1));
i__4737__auto___29863 = G__29864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("linearGradient",args__29356__auto__);
}));

(shadow.markup.react.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.linearGradient.cljs$lang$applyTo = (function (seq29487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29487));
}));


shadow.markup.react.polygon = (function shadow$markup$react$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29865 = arguments.length;
var i__4737__auto___29866 = (0);
while(true){
if((i__4737__auto___29866 < len__4736__auto___29865)){
args__4742__auto__.push((arguments[i__4737__auto___29866]));

var G__29867 = (i__4737__auto___29866 + (1));
i__4737__auto___29866 = G__29867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("polygon",args__29356__auto__);
}));

(shadow.markup.react.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.polygon.cljs$lang$applyTo = (function (seq29488){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29488));
}));


shadow.markup.react.radialGradient = (function shadow$markup$react$radialGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29868 = arguments.length;
var i__4737__auto___29869 = (0);
while(true){
if((i__4737__auto___29869 < len__4736__auto___29868)){
args__4742__auto__.push((arguments[i__4737__auto___29869]));

var G__29870 = (i__4737__auto___29869 + (1));
i__4737__auto___29869 = G__29870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("radialGradient",args__29356__auto__);
}));

(shadow.markup.react.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.radialGradient.cljs$lang$applyTo = (function (seq29489){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29489));
}));


shadow.markup.react.stop = (function shadow$markup$react$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29871 = arguments.length;
var i__4737__auto___29872 = (0);
while(true){
if((i__4737__auto___29872 < len__4736__auto___29871)){
args__4742__auto__.push((arguments[i__4737__auto___29872]));

var G__29873 = (i__4737__auto___29872 + (1));
i__4737__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("stop",args__29356__auto__);
}));

(shadow.markup.react.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.stop.cljs$lang$applyTo = (function (seq29490){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29490));
}));


shadow.markup.react.tspan = (function shadow$markup$react$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29874 = arguments.length;
var i__4737__auto___29875 = (0);
while(true){
if((i__4737__auto___29875 < len__4736__auto___29874)){
args__4742__auto__.push((arguments[i__4737__auto___29875]));

var G__29876 = (i__4737__auto___29875 + (1));
i__4737__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__29356__auto__){
return shadow.markup.react.impl.interop.create_element("tspan",args__29356__auto__);
}));

(shadow.markup.react.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tspan.cljs$lang$applyTo = (function (seq29491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29491));
}));


//# sourceMappingURL=shadow.markup.react.js.map
