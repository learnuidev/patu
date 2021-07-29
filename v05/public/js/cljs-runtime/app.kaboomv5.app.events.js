goog.provide('app.kaboomv5.app.events');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboomv5.app.state');
goog.require('goog.events');
app.kaboomv5.app.events.prevent_default_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"space","space",348133475),null,new cljs.core.Keyword(null,"f8","f8",-2141475484),null,new cljs.core.Keyword(null,"f1","f1",1714532389),null,new cljs.core.Keyword(null,"f10","f10",627525541),null,new cljs.core.Keyword(null,"f5","f5",1587057387),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"f11","f11",-1417398799),null,new cljs.core.Keyword(null,"f3","f3",1954829043),null,new cljs.core.Keyword(null,"f2","f2",396168596),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"f7","f7",356150168),null,new cljs.core.Keyword(null,"f9","f9",704633338),null,new cljs.core.Keyword(null,"tab","tab",-559583621),null,new cljs.core.Keyword(null,"f6","f6",2103080604),null,new cljs.core.Keyword(null,"f4","f4",990968764),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
app.kaboomv5.app.events.mousemove_handler = (function app$kaboomv5$app$events$mousemove_handler(evt){
var off_x = evt.offsetX;
var off_y = evt.offsetY;
var mouse_pos = (function (){var G__26628 = (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y) : app.kaboomv5.math.core.vec2.call(null,off_x,off_y));
var G__26629 = ((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26628,G__26629) : app.kaboomv5.math.core.scale.call(null,G__26628,G__26629));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos);
});
app.kaboomv5.app.events.mousedown_handler = (function app$kaboomv5$app$events$mousedown_handler(evt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv5.app.events.mouseup_handler = (function app$kaboomv5$app$events$mouseup_handler(evt){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"released","released",381037203));

return console.log(new cljs.core.Keyword(null,"released","released",381037203));
});
app.kaboomv5.app.events.touch_start_handler = (function app$kaboomv5$app$events$touch_start_handler(evt){
var t = (evt.touches[(0)]);
var off_x = t.clientX();
var off_y = t.clientY();
var mouse_pos = (function (){var G__26632 = (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y) : app.kaboomv5.math.core.vec2.call(null,off_x,off_y));
var G__26633 = ((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26632,G__26633) : app.kaboomv5.math.core.scale.call(null,G__26632,G__26633));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.app.state.app_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
}));
});
app.kaboomv5.app.events.touch_move_handler = (function app$kaboomv5$app$events$touch_move_handler(evt){
var t = (evt.touches[(0)]);
var off_x = t.clientX();
var off_y = t.clientY();
var mouse_pos = (function (){var G__26636 = (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(off_x,off_y) : app.kaboomv5.math.core.vec2.call(null,off_x,off_y));
var G__26637 = ((1) / new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26636,G__26637) : app.kaboomv5.math.core.scale.call(null,G__26636,G__26637));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos);
});
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.app !== 'undefined') && (typeof app.kaboomv5.app.events !== 'undefined') && (typeof app.kaboomv5.app.events.key_map !== 'undefined')){
} else {
app.kaboomv5.app.events.key_map = new cljs.core.PersistentArrayMap(null, 6, ["arrowleft",new cljs.core.Keyword(null,"left","left",-399115937),"arrowright",new cljs.core.Keyword(null,"right","right",-452581833),"arrowup",new cljs.core.Keyword(null,"up","up",-269712113),"arrowdown",new cljs.core.Keyword(null,"down","down",1565245570)," ",new cljs.core.Keyword(null,"space","space",348133475),"space",new cljs.core.Keyword(null,"space","space",348133475)], null);
}
app.kaboomv5.app.events.keydown_handler = (function app$kaboomv5$app$events$keydown_handler(event){
var key = event.key.toLowerCase();
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv5.app.events.key_map,key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));

if(cljs.core.contains_QMARK_(app.kaboomv5.app.events.prevent_default_keys,k)){
event.preventDefault();
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),key.length)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",key)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k)], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space","space",348133475),k)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));
} else {
}

if(cljs.core.truth_(event.repeat)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"rpressed","rpressed",-1542572484));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
}
});
app.kaboomv5.app.events.keyup_handler = (function app$kaboomv5$app$events$keyup_handler(event){
var key = event.key.toLowerCase();
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.kaboomv5.app.events.key_map,key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),k], null),new cljs.core.Keyword(null,"released","released",381037203));
});
app.kaboomv5.app.events.visibility_handler = (function app$kaboomv5$app$events$visibility_handler(event){
var state = document.visibilityState;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",state)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753),true);
} else {
return null;
}
});
app.kaboomv5.app.events.reg_events = (function app$kaboomv5$app$events$reg_events(canvas){
canvas.setAttribute("tabindex","0");

canvas.addEventListener("mousemove",app.kaboomv5.app.events.mousemove_handler);

canvas.addEventListener("mousedown",app.kaboomv5.app.events.mousedown_handler);

canvas.addEventListener("mouseup",app.kaboomv5.app.events.mouseup_handler);

canvas.addEventListener("click",(function (){
return console.log("CLICKED yoo");
}));

canvas.addEventListener("touchshart",app.kaboomv5.app.events.touch_start_handler);

canvas.addEventListener("touchmove",app.kaboomv5.app.events.touch_move_handler);

canvas.addEventListener("keydown",app.kaboomv5.app.events.keydown_handler);

canvas.addEventListener("keyup",app.kaboomv5.app.events.keyup_handler);

canvas.focus();

return document.addEventListener("visibilitychange",app.kaboomv5.app.events.visibility_handler);
});

//# sourceMappingURL=app.kaboomv5.app.events.js.map
