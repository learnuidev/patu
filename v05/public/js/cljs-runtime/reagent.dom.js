goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26822 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26823 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26823);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26824 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26825 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26825);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26824);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26822);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26846 = arguments.length;
switch (G__26846) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26853 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26862_26893 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26863_26894 = null;
var count__26864_26895 = (0);
var i__26865_26896 = (0);
while(true){
if((i__26865_26896 < count__26864_26895)){
var vec__26878_26897 = chunk__26863_26894.cljs$core$IIndexed$_nth$arity$2(null,i__26865_26896);
var container_26898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878_26897,(0),null);
var comp_26899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878_26897,(1),null);
reagent.dom.re_render_component(comp_26899,container_26898);


var G__26900 = seq__26862_26893;
var G__26901 = chunk__26863_26894;
var G__26902 = count__26864_26895;
var G__26903 = (i__26865_26896 + (1));
seq__26862_26893 = G__26900;
chunk__26863_26894 = G__26901;
count__26864_26895 = G__26902;
i__26865_26896 = G__26903;
continue;
} else {
var temp__5735__auto___26904 = cljs.core.seq(seq__26862_26893);
if(temp__5735__auto___26904){
var seq__26862_26905__$1 = temp__5735__auto___26904;
if(cljs.core.chunked_seq_QMARK_(seq__26862_26905__$1)){
var c__4556__auto___26906 = cljs.core.chunk_first(seq__26862_26905__$1);
var G__26907 = cljs.core.chunk_rest(seq__26862_26905__$1);
var G__26908 = c__4556__auto___26906;
var G__26909 = cljs.core.count(c__4556__auto___26906);
var G__26910 = (0);
seq__26862_26893 = G__26907;
chunk__26863_26894 = G__26908;
count__26864_26895 = G__26909;
i__26865_26896 = G__26910;
continue;
} else {
var vec__26881_26911 = cljs.core.first(seq__26862_26905__$1);
var container_26912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881_26911,(0),null);
var comp_26913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881_26911,(1),null);
reagent.dom.re_render_component(comp_26913,container_26912);


var G__26914 = cljs.core.next(seq__26862_26905__$1);
var G__26915 = null;
var G__26916 = (0);
var G__26917 = (0);
seq__26862_26893 = G__26914;
chunk__26863_26894 = G__26915;
count__26864_26895 = G__26916;
i__26865_26896 = G__26917;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
