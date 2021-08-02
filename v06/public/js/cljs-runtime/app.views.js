goog.provide('app.views');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof app !== 'undefined') && (typeof app.views !== 'undefined') && (typeof app.views.inventories !== 'undefined')){
} else {
app.views.inventories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"name","name",1843675177),"Yerba mata",new cljs.core.Keyword(null,"price","price",22129180),(10)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"name","name",1843675177),"Coffee",new cljs.core.Keyword(null,"price","price",22129180),(10)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"name","name",1843675177),"Tea",new cljs.core.Keyword(null,"price","price",22129180),(10)], null)], null));
}
if((typeof app !== 'undefined') && (typeof app.views !== 'undefined') && (typeof app.views.destinations !== 'undefined')){
} else {
app.views.destinations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"US","US",-389850479),(25),new cljs.core.Keyword(null,"CA","CA",2144117804),(35),new cljs.core.Keyword(null,"CO","CO",1336986504),(45)], null);
}
if((typeof app !== 'undefined') && (typeof app.views !== 'undefined') && (typeof app.views.shipping !== 'undefined')){
} else {
app.views.shipping = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"US","US",-389850479));
}
if((typeof app !== 'undefined') && (typeof app.views !== 'undefined') && (typeof app.views.carts !== 'undefined')){
} else {
app.views.carts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null));
}
cljs.core.deref(app.views.shipping);
app.views.cart_get_by_id = (function app$views$cart_get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.inventories),id);
});
app.views.calc_subtotal = (function app$views$calc_subtotal(carts){
return cljs.core.reduce_kv((function (acc,k,v){
var inventory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.inventories),k);
return (acc + (new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory) * v));
}),(0),carts);
});
app.views.calc_shipping_tax = (function app$views$calc_shipping_tax(carts){
var sub_total = app.views.calc_subtotal(carts);
var shipping_tax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.destinations,cljs.core.deref(app.views.shipping));
return ((shipping_tax * sub_total) / (100));
});
app.views.calc_total = (function app$views$calc_total(carts){
var sub_total = app.views.calc_subtotal(carts);
var shipping_tax = app.views.calc_shipping_tax(carts);
return (sub_total + shipping_tax);
});
app.views.sub_total = (function app$views$sub_total(id,quantity){
var cart = app.views.cart_get_by_id(id);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cart","cart",-119094748),cart,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292),(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cart) * quantity)], null);
});
app.views.change_shipping = (function app$views$change_shipping(ship_id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["shipID ",ship_id], 0));

return cljs.core.reset_BANG_(app.views.shipping,ship_id);
});
app.views.sales_tax_component = (function app$views$sales_tax_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sales Tax"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function app$views$sales_tax_component_$_iter__33063(s__33064){
return (new cljs.core.LazySeq(null,(function (){
var s__33064__$1 = s__33064;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33064__$1);
if(temp__5735__auto__){
var s__33064__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33064__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33064__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33066 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33065 = (0);
while(true){
if((i__33065 < size__4528__auto__)){
var ship_id = cljs.core._nth(c__4527__auto__,i__33065);
cljs.core.chunk_append(b__33066,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33065,ship_id,c__4527__auto__,size__4528__auto__,b__33066,s__33064__$2,temp__5735__auto__){
return (function (){
return app.views.change_shipping(ship_id);
});})(i__33065,ship_id,c__4527__auto__,size__4528__auto__,b__33066,s__33064__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.shipping),ship_id))?"btn-active":null)], null),[cljs.core.name(ship_id)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.destinations,ship_id))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)));

var G__33079 = (i__33065 + (1));
i__33065 = G__33079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33066),app$views$sales_tax_component_$_iter__33063(cljs.core.chunk_rest(s__33064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33066),null);
}
} else {
var ship_id = cljs.core.first(s__33064__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ship_id,s__33064__$2,temp__5735__auto__){
return (function (){
return app.views.change_shipping(ship_id);
});})(ship_id,s__33064__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.shipping),ship_id))?"btn-active":null)], null),[cljs.core.name(ship_id)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.destinations,ship_id))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)),app$views$sales_tax_component_$_iter__33063(cljs.core.rest(s__33064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(app.views.destinations));
})())], null);
});
app.views.coffeeshop_cart = (function app$views$coffeeshop_cart(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Caffinated Breverages"], null),(function (){var iter__4529__auto__ = (function app$views$coffeeshop_cart_$_iter__33067(s__33068){
return (new cljs.core.LazySeq(null,(function (){
var s__33068__$1 = s__33068;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33068__$1);
if(temp__5735__auto__){
var s__33068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33068__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33068__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33070 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33069 = (0);
while(true){
if((i__33069 < size__4528__auto__)){
var inventory = cljs.core._nth(c__4527__auto__,i__33069);
cljs.core.chunk_append(b__33070,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33069,inventory,c__4527__auto__,size__4528__auto__,b__33070,s__33068__$2,temp__5735__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.views.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.inc);
});})(i__33069,inventory,c__4527__auto__,size__4528__auto__,b__33070,s__33068__$2,temp__5735__auto__))
], null),"+"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)], null)));

var G__33080 = (i__33069 + (1));
i__33069 = G__33080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33070),app$views$coffeeshop_cart_$_iter__33067(cljs.core.chunk_rest(s__33068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33070),null);
}
} else {
var inventory = cljs.core.first(s__33068__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (inventory,s__33068__$2,temp__5735__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.views.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.inc);
});})(inventory,s__33068__$2,temp__5735__auto__))
], null),"+"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)], null)),app$views$coffeeshop_cart_$_iter__33067(cljs.core.rest(s__33068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(cljs.core.deref(app.views.inventories)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Cart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function app$views$coffeeshop_cart_$_iter__33071(s__33072){
return (new cljs.core.LazySeq(null,(function (){
var s__33072__$1 = s__33072;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33072__$1);
if(temp__5735__auto__){
var s__33072__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33072__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33072__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33074 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33073 = (0);
while(true){
if((i__33073 < size__4528__auto__)){
var cart_id = cljs.core._nth(c__4527__auto__,i__33073);
cljs.core.chunk_append(b__33074,(function (){var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.carts),cart_id);
var map__33075 = app.views.sub_total(cart_id,quantity);
var map__33075__$1 = (((((!((map__33075 == null))))?(((((map__33075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33075):map__33075);
var cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33075__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
var subtotal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33075__$1,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 124px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cart))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," $",new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cart)," x ",quantity], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),subtotal], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cart_id], null));
})());

var G__33081 = (i__33073 + (1));
i__33073 = G__33081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33074),app$views$coffeeshop_cart_$_iter__33071(cljs.core.chunk_rest(s__33072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33074),null);
}
} else {
var cart_id = cljs.core.first(s__33072__$2);
return cljs.core.cons((function (){var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.views.carts),cart_id);
var map__33077 = app.views.sub_total(cart_id,quantity);
var map__33077__$1 = (((((!((map__33077 == null))))?(((((map__33077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33077):map__33077);
var cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
var subtotal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 124px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cart))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," $",new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cart)," x ",quantity], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),subtotal], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cart_id], null));
})(),app$views$coffeeshop_cart_$_iter__33071(cljs.core.rest(s__33072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(cljs.core.deref(app.views.carts)));
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sales_tax_component], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Subtotal: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.views.calc_subtotal(cljs.core.deref(app.views.carts)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Sales Tax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.views.calc_shipping_tax(cljs.core.deref(app.views.carts)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.views.calc_total(cljs.core.deref(app.views.carts)))].join('')], null)], null)], null);
});

//# sourceMappingURL=app.views.js.map
