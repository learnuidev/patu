goog.provide('app.kaboomv5.game.scene');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.gfx');
goog.require('app.kaboomv5.game.state');
goog.require('app.kaboomv5.app.utils');
goog.require('cljs.spec.alpha');
app.kaboomv5.game.scene.def_gravity = (980);
app.kaboomv5.game.scene.create_scene = (function app$kaboomv5$game$scene$create_scene(id,cb){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"travellers","travellers",939234080),new cljs.core.Keyword(null,"last-obj-id","last-obj-id",39469158),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"visitors","visitors",1404506988),new cljs.core.Keyword(null,"timers","timers",2066701583),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"cam","cam",1238465170),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"def-layer","def-layer",-1794567689),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"last-timer-id","last-timer-id",1096543833),new cljs.core.Keyword("cam","mouse-pos","cam/mouse-pos",370661884),new cljs.core.Keyword("cam","matrix","cam/matrix",802776509),new cljs.core.Keyword(null,"objs","objs",-1810725634),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.core.PersistentArrayMap.EMPTY,(0),cb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key-press-rep","key-press-rep",1203763910),new cljs.core.Keyword(null,"key-release","key-release",-401286743),new cljs.core.Keyword(null,"destroy","destroy",-843660405),new cljs.core.Keyword(null,"key-down","key-down",998681515),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mouse-click","mouse-click",1256722350),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"key-press","key-press",850740112),new cljs.core.Keyword(null,"char-input","char-input",-1820706445),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mouse-release","mouse-release",-1152069889)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY]),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,app.kaboomv5.game.scene.def_gravity,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var G__26720 = app.kaboomv5.gfx.center();
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1(G__26720) : app.kaboomv5.math.core.vec2.call(null,G__26720));
})(),new cljs.core.Keyword(null,"scale","scale",-230427353),(app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1((1)) : app.kaboomv5.math.core.vec2.call(null,(1))),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"shake","shake",1292044195),(0)], null),cljs.core.PersistentArrayMap.EMPTY,id,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0),(app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1((0)) : app.kaboomv5.math.core.vec2.call(null,(0))),(app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0 ? app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0() : app.kaboomv5.math.core.mat4.call(null)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY]);
});
app.kaboomv5.game.scene.fetch = (function app$kaboomv5$game$scene$fetch(var_args){
var G__26722 = arguments.length;
switch (G__26722) {
case 1:
return app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$2(id,null);
}));

(app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$2 = (function (id,def_val){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.kaboomv5.game.state.scene_state),id,def_val);
}));

(app.kaboomv5.game.scene.fetch.cljs$lang$maxFixedArity = 2);

app.kaboomv5.game.scene.add_BANG_ = (function app$kaboomv5$game$scene$add_BANG_(id,cb){
if(cljs.core.seq(app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$1(id))){
return console.warn(["scene ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," already exists!"].join(''));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.scene_state,cljs.core.assoc,id,app.kaboomv5.game.scene.create_scene(id,cb));
}
});
app.kaboomv5.game.scene.update_BANG_ = (function app$kaboomv5$game$scene$update_BANG_(id,cb){
if(cljs.core.not(cljs.core.seq(app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$1(id)))){
return console.warn(["scene ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," does not exist!"].join(''));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.scene_state,cljs.core.update,id,cb);
}
});
app.kaboomv5.game.scene.process_comps = (function app$kaboomv5$game$scene$process_comps(comps){
return null;
});
app.kaboomv5.game.scene.add_component_BANG_ = (function app$kaboomv5$game$scene$add_component_BANG_(sid,p__26725){
var map__26726 = p__26725;
var map__26726__$1 = (((((!((map__26726 == null))))?(((((map__26726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26726):map__26726);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var comps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,new cljs.core.Keyword(null,"comps","comps",1108881715));
if(cljs.core.not(cljs.core.seq(app.kaboomv5.game.scene.fetch.cljs$core$IFn$_invoke$arity$1(sid)))){
return console.warn(["scene ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sid)," does not exist!"].join(''));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.scene_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sid,new cljs.core.Keyword(null,"components","components",-1073188942),id], null),comps);
}
});
app.kaboomv5.game.scene.use_comp = (function app$kaboomv5$game$scene$use_comp(sid,cid,comps){
return null;
});
app.kaboomv5.game.scene.custom_comp = (function app$kaboomv5$game$scene$custom_comp(var_args){
var G__26732 = arguments.length;
switch (G__26732) {
case 1:
return app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$1 = (function (f){
return app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$2(f,null);
}));

(app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$2 = (function (f,init_state){
var internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(init_state);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(internal_state) : f.call(null,internal_state));
}));

(app.kaboomv5.game.scene.custom_comp.cljs$lang$maxFixedArity = 2);

app.kaboomv5.game.scene.ex_comp = app.kaboomv5.game.scene.custom_comp.cljs$core$IFn$_invoke$arity$2((function (state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"update-state","update-state",-653396259),(function (p1__26736_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__26736_SHARP_);
}),new cljs.core.Keyword(null,"get-state","get-state",1572463657),(function (){
return cljs.core.deref(state);
}),new cljs.core.Keyword(null,"pos","pos",-864607220),(app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)) : app.kaboomv5.math.core.vec2.call(null,(0),(0)))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null));
app.kaboomv5.game.scene.call_attr = (function app$kaboomv5$game$scene$call_attr(comp,attr){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(comp) : attr.call(null,comp)))){
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(comp) : attr.call(null,comp)).call();
} else {
return null;
}
});

//# sourceMappingURL=app.kaboomv5.game.scene.js.map
