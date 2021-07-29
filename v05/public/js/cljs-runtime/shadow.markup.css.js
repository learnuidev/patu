goog.provide('shadow.markup.css');
goog.require('cljs.core');
goog.require('shadow.markup.css.impl.gen');
goog.require('shadow.markup.react.impl.css');
shadow.markup.css.set_env_BANG_ = (function shadow$markup$css$set_env_BANG_(env){
return shadow.markup.react.impl.css.set_env_BANG_(env);
});
shadow.markup.css.root = (function shadow$markup$css$root(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27684 = arguments.length;
var i__4737__auto___27685 = (0);
while(true){
if((i__4737__auto___27685 < len__4736__auto___27684)){
args__4742__auto__.push((arguments[i__4737__auto___27685]));

var G__27686 = (i__4737__auto___27685 + (1));
i__4737__auto___27685 = G__27686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,rules){
return shadow.markup.css.impl.gen.root_STAR_(attrs,rules);
}));

(shadow.markup.css.root.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.markup.css.root.cljs$lang$applyTo = (function (seq27682){
var G__27683 = cljs.core.first(seq27682);
var seq27682__$1 = cljs.core.next(seq27682);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27683,seq27682__$1);
}));

shadow.markup.css.rule = (function shadow$markup$css$rule(selector,attrs){
return shadow.markup.css.impl.gen.rule(selector,attrs);
});
shadow.markup.css.nested_rule = (function shadow$markup$css$nested_rule(parent,attrs){
return shadow.markup.css.impl.gen.nested_rule(parent,attrs);
});
/**
 * don't use directly, use defstyled macro
 */
shadow.markup.css.element_STAR_ = (function shadow$markup$css$element_STAR_(el_type,el_selector,style_fn){
return (new shadow.markup.react.impl.css.StyledElement(el_type,el_selector,style_fn,false));
});

//# sourceMappingURL=shadow.markup.css.js.map
