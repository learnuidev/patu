goog.provide('app.examples.coffeeshop.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react_intl$index=shadow.js.require("module$node_modules$react_intl$index", {});
goog.require('app.examples.coffeeshop.i18n');
app.examples.coffeeshop.core.format_currency = (function app$examples$coffeeshop$core$format_currency(var_args){
var G__27065 = arguments.length;
switch (G__27065) {
case 1:
return app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$2(amount,new cljs.core.Keyword(null,"CAD","CAD",-1879751756));
}));

(app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$2 = (function (amount,type){
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),"currency",new cljs.core.Keyword(null,"currency","currency",-898327568),type], null));
return (new Intl.NumberFormat("en-CA",options)).format(amount);
}));

(app.examples.coffeeshop.core.format_currency.cljs$lang$maxFixedArity = 2);

if((typeof app !== 'undefined') && (typeof app.examples !== 'undefined') && (typeof app.examples.coffeeshop !== 'undefined') && (typeof app.examples.coffeeshop.core !== 'undefined') && (typeof app.examples.coffeeshop.core.inventories !== 'undefined')){
} else {
app.examples.coffeeshop.core.inventories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"name","name",1843675177),"Latte",new cljs.core.Keyword(null,"price","price",22129180),9.99,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(10)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"name","name",1843675177),"Macchiato",new cljs.core.Keyword(null,"price","price",22129180),8.99,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(24)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"name","name",1843675177),"Cappuchinno",new cljs.core.Keyword(null,"price","price",22129180),7.5,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(5)], null)], null));
}
if((typeof app !== 'undefined') && (typeof app.examples !== 'undefined') && (typeof app.examples.coffeeshop !== 'undefined') && (typeof app.examples.coffeeshop.core !== 'undefined') && (typeof app.examples.coffeeshop.core.destinations !== 'undefined')){
} else {
app.examples.coffeeshop.core.destinations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"US","US",-389850479),(25),new cljs.core.Keyword(null,"CA","CA",2144117804),(15),new cljs.core.Keyword(null,"CO","CO",1336986504),(45)], null);
}
if((typeof app !== 'undefined') && (typeof app.examples !== 'undefined') && (typeof app.examples.coffeeshop !== 'undefined') && (typeof app.examples.coffeeshop.core !== 'undefined') && (typeof app.examples.coffeeshop.core.shipping !== 'undefined')){
} else {
app.examples.coffeeshop.core.shipping = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"US","US",-389850479));
}
if((typeof app !== 'undefined') && (typeof app.examples !== 'undefined') && (typeof app.examples.coffeeshop !== 'undefined') && (typeof app.examples.coffeeshop.core !== 'undefined') && (typeof app.examples.coffeeshop.core.carts !== 'undefined')){
} else {
app.examples.coffeeshop.core.carts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null));
}
cljs.core.deref(app.examples.coffeeshop.core.shipping);
app.examples.coffeeshop.core.cart_get_by_id = (function app$examples$coffeeshop$core$cart_get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.inventories),id);
});
app.examples.coffeeshop.core.calc_subtotal = (function app$examples$coffeeshop$core$calc_subtotal(carts){
return cljs.core.reduce_kv((function (acc,k,v){
var inventory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.inventories),k);
return (acc + (new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory) * v));
}),(0),carts);
});
app.examples.coffeeshop.core.calc_shipping_tax = (function app$examples$coffeeshop$core$calc_shipping_tax(carts){
var sub_total = app.examples.coffeeshop.core.calc_subtotal(carts);
var shipping_tax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.examples.coffeeshop.core.destinations,cljs.core.deref(app.examples.coffeeshop.core.shipping));
return ((shipping_tax * sub_total) / (100));
});
app.examples.coffeeshop.core.calc_total = (function app$examples$coffeeshop$core$calc_total(carts){
var sub_total = app.examples.coffeeshop.core.calc_subtotal(carts);
var shipping_tax = app.examples.coffeeshop.core.calc_shipping_tax(carts);
return (sub_total + shipping_tax);
});
app.examples.coffeeshop.core.sub_total = (function app$examples$coffeeshop$core$sub_total(id,quantity){
var cart = app.examples.coffeeshop.core.cart_get_by_id(id);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cart","cart",-119094748),cart,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292),(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cart) * quantity)], null);
});
app.examples.coffeeshop.core.change_shipping = (function app$examples$coffeeshop$core$change_shipping(ship_id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["shipID ",ship_id], 0));

return cljs.core.reset_BANG_(app.examples.coffeeshop.core.shipping,ship_id);
});
app.examples.coffeeshop.core.set_message = (function app$examples$coffeeshop$core$set_message(quantity,message1,message2,message3){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quantity,(0))){
return message1;
} else {
if((quantity < (10))){
return message2;
} else {
return message3;

}
}
});
app.examples.coffeeshop.core.inventories_list = (function app$examples$coffeeshop$core$inventories_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Caffinated Breverages"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function app$examples$coffeeshop$core$inventories_list_$_iter__27066(s__27067){
return (new cljs.core.LazySeq(null,(function (){
var s__27067__$1 = s__27067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27067__$1);
if(temp__5735__auto__){
var s__27067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27067__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27067__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27069 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27068 = (0);
while(true){
if((i__27068 < size__4528__auto__)){
var map__27070 = cljs.core._nth(c__4527__auto__,i__27068);
var map__27070__$1 = (((((!((map__27070 == null))))?(((((map__27070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27070):map__27070);
var inventory = map__27070__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27070__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
cljs.core.chunk_append(b__27069,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inventory)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"12px","12px",1954728562)], null)], null),[" Quantity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(inventory))," remaining"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.examples.coffeeshop.core.set_message(quantity,"red","orange","black"),new cljs.core.Keyword(null,"transition","transition",765692007),"all ease-in-out"], null)], null),app.examples.coffeeshop.core.set_message(quantity,"\uD83D\uDE2D Sold Out","\uD83D\uDE31 In Low Stock","\uD83D\uDE04 In Stock")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(inventory),(0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["white",(20),(10),(50),"#2ecc71",new cljs.core.Keyword(null,"pointer","pointer",85071187),(20),new cljs.core.Keyword(null,"none","none",1333468478),"50%",(50)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27068,map__27070,map__27070__$1,inventory,quantity,c__4527__auto__,size__4528__auto__,b__27069,s__27067__$2,temp__5735__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.inventories,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),cljs.core.dec);
});})(i__27068,map__27070,map__27070__$1,inventory,quantity,c__4527__auto__,size__4528__auto__,b__27069,s__27067__$2,temp__5735__auto__))
], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.carts),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)) <= (0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["white",(20),(10),(50),"#e74c3c",new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"none","none",1333468478),(50),(50)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27068,map__27070,map__27070__$1,inventory,quantity,c__4527__auto__,size__4528__auto__,b__27069,s__27067__$2,temp__5735__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.dec);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.inventories,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),cljs.core.inc);
});})(i__27068,map__27070,map__27070__$1,inventory,quantity,c__4527__auto__,size__4528__auto__,b__27069,s__27067__$2,temp__5735__auto__))
], null),"-"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)], null)));

var G__27092 = (i__27068 + (1));
i__27068 = G__27092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27069),app$examples$coffeeshop$core$inventories_list_$_iter__27066(cljs.core.chunk_rest(s__27067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27069),null);
}
} else {
var map__27072 = cljs.core.first(s__27067__$2);
var map__27072__$1 = (((((!((map__27072 == null))))?(((((map__27072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27072):map__27072);
var inventory = map__27072__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27072__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inventory)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"12px","12px",1954728562)], null)], null),[" Quantity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(inventory))," remaining"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(inventory))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.examples.coffeeshop.core.set_message(quantity,"red","orange","black"),new cljs.core.Keyword(null,"transition","transition",765692007),"all ease-in-out"], null)], null),app.examples.coffeeshop.core.set_message(quantity,"\uD83D\uDE2D Sold Out","\uD83D\uDE31 In Low Stock","\uD83D\uDE04 In Stock")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(inventory),(0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["white",(20),(10),(50),"#2ecc71",new cljs.core.Keyword(null,"pointer","pointer",85071187),(20),new cljs.core.Keyword(null,"none","none",1333468478),"50%",(50)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27072,map__27072__$1,inventory,quantity,s__27067__$2,temp__5735__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.inventories,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),cljs.core.dec);
});})(map__27072,map__27072__$1,inventory,quantity,s__27067__$2,temp__5735__auto__))
], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.carts),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)) <= (0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["white",(20),(10),(50),"#e74c3c",new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"none","none",1333468478),(50),(50)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27072,map__27072__$1,inventory,quantity,s__27067__$2,temp__5735__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.carts,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),cljs.core.dec);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.coffeeshop.core.inventories,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),cljs.core.inc);
});})(map__27072,map__27072__$1,inventory,quantity,s__27067__$2,temp__5735__auto__))
], null),"-"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inventory)], null)),app$examples$coffeeshop$core$inventories_list_$_iter__27066(cljs.core.rest(s__27067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(cljs.core.deref(app.examples.coffeeshop.core.inventories)));
})())], null);
});
app.examples.coffeeshop.core.sales_tax_component_2 = (function app$examples$coffeeshop$core$sales_tax_component_2(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sales Tax"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function app$examples$coffeeshop$core$sales_tax_component_2_$_iter__27074(s__27075){
return (new cljs.core.LazySeq(null,(function (){
var s__27075__$1 = s__27075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27075__$1);
if(temp__5735__auto__){
var s__27075__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27075__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27075__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27077 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27076 = (0);
while(true){
if((i__27076 < size__4528__auto__)){
var ship_id = cljs.core._nth(c__4527__auto__,i__27076);
cljs.core.chunk_append(b__27077,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27076,ship_id,c__4527__auto__,size__4528__auto__,b__27077,s__27075__$2,temp__5735__auto__){
return (function (){
return app.examples.coffeeshop.core.change_shipping(ship_id);
});})(i__27076,ship_id,c__4527__auto__,size__4528__auto__,b__27077,s__27075__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.shipping),ship_id))?"btn-active":null)], null),[cljs.core.name(ship_id)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.examples.coffeeshop.core.destinations,ship_id))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)));

var G__27093 = (i__27076 + (1));
i__27076 = G__27093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27077),app$examples$coffeeshop$core$sales_tax_component_2_$_iter__27074(cljs.core.chunk_rest(s__27075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27077),null);
}
} else {
var ship_id = cljs.core.first(s__27075__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ship_id,s__27075__$2,temp__5735__auto__){
return (function (){
return app.examples.coffeeshop.core.change_shipping(ship_id);
});})(ship_id,s__27075__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.shipping),ship_id))?"btn-active":null)], null),[cljs.core.name(ship_id)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.examples.coffeeshop.core.destinations,ship_id))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)),app$examples$coffeeshop$core$sales_tax_component_2_$_iter__27074(cljs.core.rest(s__27075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(app.examples.coffeeshop.core.destinations));
})())], null);
});
app.examples.coffeeshop.core.format_percentage = (function app$examples$coffeeshop$core$format_percentage(value){
return Number((value / (100))).toLocaleString(null,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),"percent",new cljs.core.Keyword(null,"minimumFractionDigits","minimumFractionDigits",-1266761579),(2)], null)));
});
app.examples.coffeeshop.core.sales_tax_component = (function app$examples$coffeeshop$core$sales_tax_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sales Tax"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function app$examples$coffeeshop$core$sales_tax_component_$_iter__27079(s__27080){
return (new cljs.core.LazySeq(null,(function (){
var s__27080__$1 = s__27080;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27080__$1);
if(temp__5735__auto__){
var s__27080__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27080__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27080__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27082 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27081 = (0);
while(true){
if((i__27081 < size__4528__auto__)){
var ship_id = cljs.core._nth(c__4527__auto__,i__27081);
cljs.core.chunk_append(b__27082,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(ship_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.examples.coffeeshop.core.destinations,ship_id)),"%"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),ship_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27081,ship_id,c__4527__auto__,size__4528__auto__,b__27082,s__27080__$2,temp__5735__auto__){
return (function (p1__27078_SHARP_){
return app.examples.coffeeshop.core.change_shipping(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__27078_SHARP_.target.value));
});})(i__27081,ship_id,c__4527__auto__,size__4528__auto__,b__27082,s__27080__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.shipping),ship_id)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)));

var G__27094 = (i__27081 + (1));
i__27081 = G__27094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27082),app$examples$coffeeshop$core$sales_tax_component_$_iter__27079(cljs.core.chunk_rest(s__27080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27082),null);
}
} else {
var ship_id = cljs.core.first(s__27080__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(ship_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.examples.coffeeshop.core.destinations,ship_id)),"%"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),ship_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (ship_id,s__27080__$2,temp__5735__auto__){
return (function (p1__27078_SHARP_){
return app.examples.coffeeshop.core.change_shipping(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__27078_SHARP_.target.value));
});})(ship_id,s__27080__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.coffeeshop.core.shipping),ship_id)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ship_id], null)),app$examples$coffeeshop$core$sales_tax_component_$_iter__27079(cljs.core.rest(s__27080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(app.examples.coffeeshop.core.destinations));
})())], null);
});
app.examples.coffeeshop.core.cart = (function app$examples$coffeeshop$core$cart(carts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Cart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function app$examples$coffeeshop$core$cart_$_iter__27083(s__27084){
return (new cljs.core.LazySeq(null,(function (){
var s__27084__$1 = s__27084;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27084__$1);
if(temp__5735__auto__){
var s__27084__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27084__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27084__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27086 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27085 = (0);
while(true){
if((i__27085 < size__4528__auto__)){
var cart_id = cljs.core._nth(c__4527__auto__,i__27085);
cljs.core.chunk_append(b__27086,(function (){var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(carts,cart_id);
var map__27087 = app.examples.coffeeshop.core.sub_total(cart_id,quantity);
var map__27087__$1 = (((((!((map__27087 == null))))?(((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27087):map__27087);
var cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
var subtotal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cart))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(subtotal)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cart_id], null));
})());

var G__27095 = (i__27085 + (1));
i__27085 = G__27095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27086),app$examples$coffeeshop$core$cart_$_iter__27083(cljs.core.chunk_rest(s__27084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27086),null);
}
} else {
var cart_id = cljs.core.first(s__27084__$2);
return cljs.core.cons((function (){var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(carts,cart_id);
var map__27089 = app.examples.coffeeshop.core.sub_total(cart_id,quantity);
var map__27089__$1 = (((((!((map__27089 == null))))?(((((map__27089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27089):map__27089);
var cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27089__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
var subtotal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27089__$1,new cljs.core.Keyword(null,"subtotal","subtotal",-190530292));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cart))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(subtotal)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cart_id], null));
})(),app$examples$coffeeshop$core$cart_$_iter__27083(cljs.core.rest(s__27084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(carts));
})()], null)], null);
});
app.examples.coffeeshop.core.total_view = (function app$examples$coffeeshop$core$total_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Subtotal: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.calc_subtotal(cljs.core.deref(app.examples.coffeeshop.core.carts))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Sales Tax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.calc_shipping_tax(cljs.core.deref(app.examples.coffeeshop.core.carts))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.format_currency.cljs$core$IFn$_invoke$arity$1(app.examples.coffeeshop.core.calc_total(cljs.core.deref(app.examples.coffeeshop.core.carts))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Payment"], null)], null);
});
app.examples.coffeeshop.core.coffeeshop = (function app$examples$coffeeshop$core$coffeeshop(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"64px","64px",1344566136)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.examples.coffeeshop.core.inventories_list], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.examples.coffeeshop.core.sales_tax_component], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"128px","128px",257070727)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.examples.coffeeshop.core.cart,cljs.core.deref(app.examples.coffeeshop.core.carts)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.examples.coffeeshop.core.total_view], null)], null)], null);
});

//# sourceMappingURL=app.examples.coffeeshop.core.js.map
