goog.provide('shadow.markup.react.impl.interop');
goog.require('cljs.core');
goog.require('goog.object');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
shadow.markup.react.impl.interop.element_marker = goog.object.get(module$node_modules$react$index.createElement("div",null),"$$typeof");
shadow.markup.react.impl.interop.element_QMARK_ = (function shadow$markup$react$impl$interop$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.markup.react.impl.interop.element_marker,goog.object.get(x,"$$typeof"))));
});
shadow.markup.react.impl.interop.convert_props = (function shadow$markup$react$impl$interop$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
shadow.markup.react.impl.interop.create_element_STAR_ = (function shadow$markup$react$impl$interop$create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
shadow.markup.react.impl.interop.arr_append_STAR_ = (function shadow$markup$react$impl$interop$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
shadow.markup.react.impl.interop.arr_append = (function shadow$markup$react$impl$interop$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.markup.react.impl.interop.arr_append_STAR_,arr,tail);
});
shadow.markup.react.impl.interop.create_element = (function shadow$markup$react$impl$interop$create_element(type,args){
var vec__27409 = args;
var seq__27410 = cljs.core.seq(vec__27409);
var first__27411 = cljs.core.first(seq__27410);
var seq__27410__$1 = cljs.core.next(seq__27410);
var head = first__27411;
var tail = seq__27410__$1;
if(cljs.core.map_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__27412 = [type,shadow.markup.react.impl.interop.convert_props(head)];
shadow.markup.react.impl.interop.arr_append(G__27412,tail);

return G__27412;
})());
} else {
if((head == null)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__27413 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__27413,tail);

return G__27413;
})());
} else {
if(shadow.markup.react.impl.interop.element_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__27414 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__27414,args);

return G__27414;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__27415 = [type,head];
shadow.markup.react.impl.interop.arr_append(G__27415,tail);

return G__27415;
})());
} else {
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__27416 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__27416,args);

return G__27416;
})());

}
}
}
}
});

//# sourceMappingURL=shadow.markup.react.impl.interop.js.map
