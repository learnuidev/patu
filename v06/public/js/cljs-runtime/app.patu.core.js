goog.provide('app.patu.core');
goog.require('cljs.core');
goog.require('app.patu.components');
goog.require('app.patu.utils');
goog.require('app.patu.lib');
goog.require('app.patu.events');
goog.require('goog.object');
goog.require('app.patu.cam');
goog.require('app.patu.state');
app.patu.core.kaboom = (function app$patu$core$kaboom(config){
return module$kaboom.default(cljs.core.clj__GT_js(config));
});
console.log(app.patu.core.kaboom);
/**
 * Initializes a new game:
 * Example Usage:
 * (init {:canvas })
 */
app.patu.core.init = (function app$patu$core$init(var_args){
var G__27034 = arguments.length;
switch (G__27034) {
case 0:
return app.patu.core.init.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.init.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.9], null)], null));
}));

(app.patu.core.init.cljs$core$IFn$_invoke$arity$1 = (function (props){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.patu.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game","game",-441523833),app.patu.core.kaboom(props));
}));

(app.patu.core.init.cljs$lang$maxFixedArity = 1);

app.patu.core.go = (function app$patu$core$go(var_args){
var G__27036 = arguments.length;
switch (G__27036) {
case 1:
return app.patu.core.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.patu.core.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.go.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.patu.lib.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id);
}));

(app.patu.core.go.cljs$core$IFn$_invoke$arity$2 = (function (id,props){
return app.patu.lib.go.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,props);
}));

(app.patu.core.go.cljs$lang$maxFixedArity = 2);

app.patu.core.sprite = (function app$patu$core$sprite(var_args){
var G__27038 = arguments.length;
switch (G__27038) {
case 2:
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.sprite.cljs$core$IFn$_invoke$arity$2 = (function (game,title){
return game.sprite(cljs.core.name(title));
}));

(app.patu.core.sprite.cljs$core$IFn$_invoke$arity$3 = (function (game,title,opts){
return game.sprite(cljs.core.name(title),cljs.core.clj__GT_js(opts));
}));

(app.patu.core.sprite.cljs$lang$maxFixedArity = 3);

app.patu.core.sprite_BANG_ = (function app$patu$core$sprite_BANG_(title){
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),title);
});
app.patu.core.solid = (function app$patu$core$solid(game){
return game.solid();
});
app.patu.core.solid_BANG_ = (function app$patu$core$solid_BANG_(){
return app.patu.core.solid(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)));
});
app.patu.core.scale = (function app$patu$core$scale(game,value){
return game.scale(value);
});
app.patu.core.layers = (function app$patu$core$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.patu.core.add_level = (function app$patu$core$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.patu.core.add_level_obj = (function app$patu$core$add_level_obj(id,obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","levels","game/levels",-956004081),id], null),obj);
});
app.patu.core.add_level_BANG_ = (function app$patu$core$add_level_BANG_(m,level_id){
var map__27039 = cljs.core.deref(app.patu.state.game_state);
var map__27039__$1 = (((((!((map__27039 == null))))?(((((map__27039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27039):map__27039);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27039__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27039__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(levels,level_id);
return app.patu.core.add_level_obj(level_id,app.patu.core.add_level(game,m,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(game) : handler.call(null,game))));
});
app.patu.core.key_is_down = (function app$patu$core$key_is_down(key){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).keyIsDown(cljs.core.name(key));
});
app.patu.core.add = (function app$patu$core$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.patu.core.mouse_clicked_QMARK_ = (function app$patu$core$mouse_clicked_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseIsClicked();
});
app.patu.core.mouse_down_QMARK_ = (function app$patu$core$mouse_down_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseIsDown();
});
app.patu.core.mouse_released_QMARK_ = (function app$patu$core$mouse_released_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseIsReleased();
});
app.patu.core.scene = (function app$patu$core$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
app.patu.core.reg_scene = (function app$patu$core$reg_scene(id,p__27041){
var map__27042 = p__27041;
var map__27042__$1 = (((((!((map__27042 == null))))?(((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27042):map__27042);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"evt","evt",-1251566867));
var handler = (function (state){
var G__27044_27276 = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(state) : init.call(null,state));
(app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__27044_27276) : app.patu.core.dispatch_n.call(null,G__27044_27276));

var G__27045 = (evt.cljs$core$IFn$_invoke$arity$1 ? evt.cljs$core$IFn$_invoke$arity$1(state) : evt.call(null,state));
return (app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__27045) : app.patu.core.dispatch_n.call(null,G__27045));
});
return app.patu.core.scene(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,handler);
});
app.patu.core.start_BANG_ = (function app$patu$core$start_BANG_(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
/**
 * Starts a scene:
 *  - example usage: (start :scene/main)
 */
app.patu.core.start = (function app$patu$core$start(id){
return app.patu.core.start_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id);
});
app.patu.core.vec2 = (function app$patu$core$vec2(p__27046){
var vec__27047 = p__27046;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(0),null);
var val2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(1),null);
return app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),val,(function (){var or__4126__auto__ = val2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return val;
}
})());
});
app.patu.core.respawn = (function app$patu$core$respawn(comp,val){
if(typeof val === 'number'){
return (comp.pos = app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,val], null)));
} else {
return (comp.pos = app.patu.core.vec2(val));
}
});
app.patu.core.dt = (function app$patu$core$dt(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).dt();
});
app.patu.core.gravity = (function app$patu$core$gravity(game,value){
return game.gravity(value);
});
app.patu.core.gravity_BANG_ = (function app$patu$core$gravity_BANG_(value){
return app.patu.core.gravity(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),value);
});
app.patu.core.randd = (function app$patu$core$randd(v1,v2){
return app.patu.lib.randd(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),v1,v2);
});
app.patu.core.cam_ignore = (function app$patu$core$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
app.patu.core.cam_ignore_BANG_ = (function app$patu$core$cam_ignore_BANG_(value){
return app.patu.core.cam_ignore(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),value);
});
app.patu.core.get_component_BANG_ = (function app$patu$core$get_component_BANG_(state,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id,new cljs.core.Keyword(null,"comp","comp",1191953630)], null));
});
app.patu.core.get_tag = (function app$patu$core$get_tag(id){
var temp__5735__auto__ = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).get(cljs.core.name(id));
if(cljs.core.truth_(temp__5735__auto__)){
var tag = temp__5735__auto__;
return tag;
} else {
return null;
}
});
/**
 * Accetps component id.
 * Returns a component object (js), nil otherwise.
 * Component needs to be registered first
 * inside init handler function.
 * ==
 * Usage example: (RPG Game Example)
 * ==== Step 1: Define init handler ===
 *    (defn main-init []
 *      [[:comp/reg-n
 *        [:player [[:sprite :sprite/guy]
 *                  [:pos 30 90]
 *                  [:prop :player]
 *                  [:prop {:speed 55}]]]]
 *       [:game/add-level main-map :level/main]])
 *  - :comp/reg-n is a registration event type
 *     - it can register multiple components
 *     - in our example we are registering a single
 *       component with id of :player. this is the id of
 *       the main player in the game. It is composed
 *       of 4 sub components
 *         - sprite (needs to be registed first using load-sprite)
 *         - pos: position of the player
 *         - prop: :player,
 *         - prop: {:speed 55} - players speed
 * 
 * === Step 2:
 * Access it inside event handler:
 * 
 * (defn main-action []
 *   (let [player  (p/get-component :player)
 *      ....event handler code]
 * 
 */
app.patu.core.get_component = (function app$patu$core$get_component(id){
var comp = app.patu.core.get_component_BANG_(cljs.core.deref(app.patu.state.game_state),id);
if(cljs.core.truth_(comp)){
return comp;
} else {
return app.patu.core.get_tag(id);
}
});
app.patu.core.rgb = (function app$patu$core$rgb(var_args){
var G__27051 = arguments.length;
switch (G__27051) {
case 3:
return app.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.patu.core.rgb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return app.patu.core.rgb.cljs$core$IFn$_invoke$arity$4(r,g,b,(1));
}));

(app.patu.core.rgb.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).rgb(r,g,b,a);
}));

(app.patu.core.rgb.cljs$lang$maxFixedArity = 4);

app.patu.core.get_level = (function app$patu$core$get_level(id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.patu.state.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","levels","game/levels",-956004081),id], null));
});
if((typeof app !== 'undefined') && (typeof app.patu !== 'undefined') && (typeof app.patu.core !== 'undefined') && (typeof app.patu.core.create_component !== 'undefined')){
} else {
app.patu.core.create_component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__27052 = cljs.core.get_global_hierarchy;
return (fexpr__27052.cljs$core$IFn$_invoke$arity$0 ? fexpr__27052.cljs$core$IFn$_invoke$arity$0() : fexpr__27052.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.patu.core","create-component"),(function (_,type,props){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),(function (game,_,p__27053){
var vec__27054 = p__27053;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(2),null);
if(cljs.core.truth_(opts)){
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$3(game,id,opts);
} else {
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$2(game,id);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solid","solid",-2023773691),(function (game,_,___$1){
return app.patu.core.solid(game);
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (game,_,p__27057){
var vec__27058 = p__27057;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27058,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27058,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27058,(2),null);
if(cljs.core.vector_QMARK_(x)){
return game.pos(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1)));
} else {
return game.pos(x,y);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (game,_,p__27061){
var vec__27062 = p__27061;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27062,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27062,(1),null);
if(cljs.core.truth_(value)){
return game.body(cljs.core.clj__GT_js(value));
} else {
return game.body();
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (game,_,p__27065){
var vec__27066 = p__27065;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27066,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27066,(1),null);
return game.origin(cljs.core.name(id));
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,_,p__27069){
var vec__27070 = p__27069;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070,(2),null);
return game.text(value,(function (){var or__4126__auto__ = opts;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (16);
}
})());
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"layer","layer",-1601820589),(function (game,_,p__27073){
var vec__27074 = p__27073;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(1),null);
return game.layer(cljs.core.name(value));
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,_,p__27077){
var vec__27078 = p__27077;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(1),null);
var value_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(2),null);
if(cljs.core.vector_QMARK_(value)){
return game.rect(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(1)));
} else {
return game.rect(value,(function (){var or__4126__auto__ = value_b;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})());
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (game,_,p__27081){
var vec__27082 = p__27081;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(1),null);
var value2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(2),null);
if(cljs.core.truth_(value2)){
return game.scale(value,value2);
} else {
return game.scale(value);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_,___$1,p__27085){
var vec__27086 = p__27085;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(1),null);
if((props instanceof cljs.core.Keyword)){
return props;
} else {
return cljs.core.clj__GT_js(props);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"color","color",1011675173),(function (game,_,p__27089){
var vec__27090 = p__27089;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(4),null);
return game.color(r,g,b,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"area","area",472007256),(function (game,_,p__27093){
var vec__27094 = p__27093;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(1),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(4),null);
return game.area(game.vec2(x1,y1),game.vec2(x2,y2));
}));
app.patu.core.create_components = (function app$patu$core$create_components(game,props){
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$patu$core$create_components_$_iter__27097(s__27098){
return (new cljs.core.LazySeq(null,(function (){
var s__27098__$1 = s__27098;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27098__$1);
if(temp__5735__auto__){
var s__27098__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27098__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27098__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27100 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27099 = (0);
while(true){
if((i__27099 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__27099);
cljs.core.chunk_append(b__27100,app.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop));

var G__27278 = (i__27099 + (1));
i__27099 = G__27278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27100),app$patu$core$create_components_$_iter__27097(cljs.core.chunk_rest(s__27098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27100),null);
}
} else {
var prop = cljs.core.first(s__27098__$2);
return cljs.core.cons(app.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop),app$patu$core$create_components_$_iter__27097(cljs.core.rest(s__27098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(props);
})());
});
app.patu.core.create_components_BANG_ = (function app$patu$core$create_components_BANG_(props){
return app.patu.core.create_components(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),props);
});
app.patu.core.add_component = (function app$patu$core$add_component(game,props){
return app.patu.core.add(game,app.patu.core.create_components(game,props));
});
app.patu.core.add_component_BANG_ = (function app$patu$core$add_component_BANG_(props){
return app.patu.core.add_component(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),props);
});
app.patu.core.reg_component = (function app$patu$core$reg_component(id,props){
var comp = app.patu.core.add_component(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),props);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comp","comp",1191953630),comp,new cljs.core.Keyword(null,"props","props",453281727),props], null));

return comp;
});
app.patu.core.height = (function app$patu$core$height(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).height();
});
app.patu.core.width = (function app$patu$core$width(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).width();
});
app.patu.core.destroy_BANG_ = (function app$patu$core$destroy_BANG_(game,comp){
return game.destroy(comp);
});
app.patu.core.destroy = (function app$patu$core$destroy(comp){
return app.patu.core.destroy_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),comp);
});
app.patu.core.center = (function app$patu$core$center(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.patu.core.width() / (2)),(app.patu.core.height() / (2))], null);
});
app.patu.core.set_layers = (function app$patu$core$set_layers(coll,main_layer){
return app.patu.core.layers(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),coll,main_layer);
});
app.patu.core.format_for_level = (function app$patu$core$format_for_level(game,p__27101){
var map__27102 = p__27101;
var map__27102__$1 = (((((!((map__27102 == null))))?(((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27102):map__27102);
var map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"map","map",1371690461));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var input = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"map","map",1371690461),map,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"any","any",1705907423),any,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null);
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (primes,p__27104){
var vec__27105 = p__27104;
var seq__27106 = cljs.core.seq(vec__27105);
var first__27107 = cljs.core.first(seq__27106);
var seq__27106__$1 = cljs.core.next(seq__27106);
var id = first__27107;
var props = seq__27106__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(primes,id,app.patu.core.create_components(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),props));
}),cljs.core.PersistentArrayMap.EMPTY,components)], 0)));
});
app.patu.core.reg_level_BANG_ = (function app$patu$core$reg_level_BANG_(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887),id], null),handler);
});
app.patu.core.reg_level = (function app$patu$core$reg_level(id,data_handler){
return app.patu.core.reg_level_BANG_(id,(function (game){
return app.patu.core.format_for_level(game,(data_handler.cljs$core$IFn$_invoke$arity$0 ? data_handler.cljs$core$IFn$_invoke$arity$0() : data_handler.call(null)));
}));
});
if((typeof app !== 'undefined') && (typeof app.patu !== 'undefined') && (typeof app.patu.core !== 'undefined') && (typeof app.patu.core.dispatch !== 'undefined')){
} else {
app.patu.core.dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__27108 = cljs.core.get_global_hierarchy;
return (fexpr__27108.cljs$core$IFn$_invoke$arity$0 ? fexpr__27108.cljs$core$IFn$_invoke$arity$0() : fexpr__27108.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.patu.core","dispatch"),(function (args){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","gravity","game/gravity",-1809937539),(function (p__27109){
var vec__27110 = p__27109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27110,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27110,(1),null);
return app.patu.core.gravity_BANG_(value);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (p__27113){
var vec__27114 = p__27113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).origin(cljs.core.name(value));
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),(function (p__27117){
var vec__27118 = p__27117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(0),null);
var main_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(1),null);
var mid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(2),null);
return app.patu.core.add_level_BANG_(main_map,mid);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","layers","game/layers",1947999590),(function (p__27121){
var vec__27122 = p__27121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(1),null);
var main_bg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(2),null);
return app.patu.core.set_layers(layers,main_bg);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),(function (p__27125){
var vec__27126 = p__27125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27126,(0),null);
var backgrounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27126,(1),null);
return app.patu.core.cam_ignore_BANG_(backgrounds);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg","comp/reg",1624858375),(function (p__27129){
var vec__27130 = p__27129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27130,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27130,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27130,(2),null);
return app.patu.core.reg_component(id,props);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),(function (p__27133){
var vec__27134 = p__27133;
var seq__27135 = cljs.core.seq(vec__27134);
var first__27136 = cljs.core.first(seq__27135);
var seq__27135__$1 = cljs.core.next(seq__27135);
var _ = first__27136;
var comps = seq__27135__$1;
var seq__27137 = cljs.core.seq(comps);
var chunk__27138 = null;
var count__27139 = (0);
var i__27140 = (0);
while(true){
if((i__27140 < count__27139)){
var vec__27147 = chunk__27138.cljs$core$IIndexed$_nth$arity$2(null,i__27140);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(1),null);
app.patu.core.reg_component(id,props);


var G__27279 = seq__27137;
var G__27280 = chunk__27138;
var G__27281 = count__27139;
var G__27282 = (i__27140 + (1));
seq__27137 = G__27279;
chunk__27138 = G__27280;
count__27139 = G__27281;
i__27140 = G__27282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27137);
if(temp__5735__auto__){
var seq__27137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27137__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27137__$1);
var G__27283 = cljs.core.chunk_rest(seq__27137__$1);
var G__27284 = c__4556__auto__;
var G__27285 = cljs.core.count(c__4556__auto__);
var G__27286 = (0);
seq__27137 = G__27283;
chunk__27138 = G__27284;
count__27139 = G__27285;
i__27140 = G__27286;
continue;
} else {
var vec__27150 = cljs.core.first(seq__27137__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27150,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27150,(1),null);
app.patu.core.reg_component(id,props);


var G__27287 = cljs.core.next(seq__27137__$1);
var G__27288 = null;
var G__27289 = (0);
var G__27290 = (0);
seq__27137 = G__27287;
chunk__27138 = G__27288;
count__27139 = G__27289;
i__27140 = G__27290;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.patu.core.action_handler = (function app$patu$core$action_handler(comp,props){
if(cljs.core.vector_QMARK_(props)){
return comp.action((function (){
var G__27153 = cljs.core.first(props);
var G__27153__$1 = (((G__27153 instanceof cljs.core.Keyword))?G__27153.fqn:null);
switch (G__27153__$1) {
case "cam/follow":
return app.patu.cam.follow(comp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27153__$1)].join('')));

}
}));
} else {
return comp.action((function (){
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(comp) : props.call(null,comp));
}));
}
});
app.patu.core.on_handler = (function app$patu$core$on_handler(comp,p__27154){
var vec__27155 = p__27154;
var seq__27156 = cljs.core.seq(vec__27155);
var first__27157 = cljs.core.first(seq__27156);
var seq__27156__$1 = cljs.core.next(seq__27156);
var key = first__27157;
var props = seq__27156__$1;
var handler = (function (obj){
var G__27158 = key;
var G__27158__$1 = (((G__27158 instanceof cljs.core.Keyword))?G__27158.fqn:null);
switch (G__27158__$1) {
case "headbump":
var seq__27159 = cljs.core.seq(props);
var chunk__27160 = null;
var count__27161 = (0);
var i__27162 = (0);
while(true){
if((i__27162 < count__27161)){
var prop = chunk__27160.cljs$core$IIndexed$_nth$arity$2(null,i__27162);
if(cljs.core.truth_(app.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__27165_27293 = cljs.core.second(prop);
(fexpr__27165_27293.cljs$core$IFn$_invoke$arity$0 ? fexpr__27165_27293.cljs$core$IFn$_invoke$arity$0() : fexpr__27165_27293.call(null));
} else {
}


var G__27294 = seq__27159;
var G__27295 = chunk__27160;
var G__27296 = count__27161;
var G__27297 = (i__27162 + (1));
seq__27159 = G__27294;
chunk__27160 = G__27295;
count__27161 = G__27296;
i__27162 = G__27297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27159);
if(temp__5735__auto__){
var seq__27159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27159__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27159__$1);
var G__27298 = cljs.core.chunk_rest(seq__27159__$1);
var G__27299 = c__4556__auto__;
var G__27300 = cljs.core.count(c__4556__auto__);
var G__27301 = (0);
seq__27159 = G__27298;
chunk__27160 = G__27299;
count__27161 = G__27300;
i__27162 = G__27301;
continue;
} else {
var prop = cljs.core.first(seq__27159__$1);
if(cljs.core.truth_(app.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__27166_27302 = cljs.core.second(prop);
(fexpr__27166_27302.cljs$core$IFn$_invoke$arity$0 ? fexpr__27166_27302.cljs$core$IFn$_invoke$arity$0() : fexpr__27166_27302.call(null));
} else {
}


var G__27303 = cljs.core.next(seq__27159__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27159 = G__27303;
chunk__27160 = G__27304;
count__27161 = G__27305;
i__27162 = G__27306;
continue;
}
} else {
return null;
}
}
break;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27158__$1)].join('')));

}
});
return app.patu.components.on(comp,key,handler);
});
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","comp","evt/comp",1192064753),(function (p__27167){
var vec__27168 = p__27167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27168,(0),null);
var vec__27171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27168,(1),null);
var seq__27172 = cljs.core.seq(vec__27171);
var first__27173 = cljs.core.first(seq__27172);
var seq__27172__$1 = cljs.core.next(seq__27172);
var id = first__27173;
var args = seq__27172__$1;
var comp = app.patu.core.get_component(id);
var seq__27174 = cljs.core.seq(args);
var chunk__27175 = null;
var count__27176 = (0);
var i__27177 = (0);
while(true){
if((i__27177 < count__27176)){
var vec__27186 = chunk__27175.cljs$core$IIndexed$_nth$arity$2(null,i__27177);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(1),null);
var G__27189_27307 = method;
var G__27189_27308__$1 = (((G__27189_27307 instanceof cljs.core.Keyword))?G__27189_27307.fqn:null);
switch (G__27189_27308__$1) {
case "action":
app.patu.core.action_handler(comp,res);

break;
case "on":
app.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27189_27308__$1)].join('')));

}


var G__27310 = seq__27174;
var G__27311 = chunk__27175;
var G__27312 = count__27176;
var G__27313 = (i__27177 + (1));
seq__27174 = G__27310;
chunk__27175 = G__27311;
count__27176 = G__27312;
i__27177 = G__27313;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27174);
if(temp__5735__auto__){
var seq__27174__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27174__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27174__$1);
var G__27314 = cljs.core.chunk_rest(seq__27174__$1);
var G__27315 = c__4556__auto__;
var G__27316 = cljs.core.count(c__4556__auto__);
var G__27317 = (0);
seq__27174 = G__27314;
chunk__27175 = G__27315;
count__27176 = G__27316;
i__27177 = G__27317;
continue;
} else {
var vec__27190 = cljs.core.first(seq__27174__$1);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27190,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27190,(1),null);
var G__27193_27318 = method;
var G__27193_27319__$1 = (((G__27193_27318 instanceof cljs.core.Keyword))?G__27193_27318.fqn:null);
switch (G__27193_27319__$1) {
case "action":
app.patu.core.action_handler(comp,res);

break;
case "on":
app.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27193_27319__$1)].join('')));

}


var G__27321 = cljs.core.next(seq__27174__$1);
var G__27322 = null;
var G__27323 = (0);
var G__27324 = (0);
seq__27174 = G__27321;
chunk__27175 = G__27322;
count__27176 = G__27323;
i__27177 = G__27324;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),(function (p__27194){
var vec__27195 = p__27194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(2),null);
return app.patu.events.key_down(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),(function (p__27198){
var vec__27199 = p__27198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(2),null);
return app.patu.events.key_press(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),(function (p__27202){
var vec__27203 = p__27202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(2),null);
return app.patu.events.key_release(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","action","evt/action",-811138293),(function (p__27206){
var vec__27207 = p__27206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27207,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27207,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27207,(2),null);
var temp__5735__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if(cljs.core.truth_(comp.action)){
return comp.action(handler);
} else {
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).action(cljs.core.name(id),handler);
}
} else {
return null;
}
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","on","evt/on",173779189),(function (p__27211){
var vec__27212 = p__27211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27212,(0),null);
var vec__27215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27212,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27212,(2),null);
var comp = (function (){var or__4126__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return id;
}
})();
return comp.on(cljs.core.name(target),(function (p1__27210_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__27210_SHARP_) : handler.call(null,p1__27210_SHARP_));
}));
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","collides","evt/collides",361392002),(function (p__27218){
var vec__27219 = p__27218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27219,(0),null);
var vec__27222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27219,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27222,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27222,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27219,(2),null);
var comp = app.patu.core.get_component(id);
if(cljs.core.truth_(comp.collides)){
return comp.collides(cljs.core.name(target),handler);
} else {
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).collides(cljs.core.name(id),cljs.core.name(target),handler);
}
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","overlaps","evt/overlaps",1397807447),(function (p__27225){
var vec__27226 = p__27225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27226,(0),null);
var vec__27229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27226,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27229,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27229,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27226,(2),null);
var comp = app.patu.core.get_component(id);
return comp.overlaps(cljs.core.name(target),handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","play","comp/play",-581544151),(function (p__27232){
var vec__27233 = p__27232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27233,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27233,(1),null);
var tune = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27233,(2),null);
var comp = app.patu.core.get_component(id);
return comp.play(cljs.core.name(tune));
}));
app.patu.core.game_loop = (function app$patu$core$game_loop(val,func){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).loop(val,func);
});
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","loop","game/loop",-398720195),(function (p__27236){
var vec__27237 = p__27236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27237,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27237,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27237,(2),null);
return app.patu.core.game_loop(id,func);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add","component/add",1526013882),(function (p__27240){
var vec__27241 = p__27240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27241,(0),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27241,(1),null);
return app.patu.core.add_component_BANG_(nodes);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add-n","component/add-n",-566334132),(function (p__27244){
var vec__27245 = p__27244;
var seq__27246 = cljs.core.seq(vec__27245);
var first__27247 = cljs.core.first(seq__27246);
var seq__27246__$1 = cljs.core.next(seq__27246);
var _ = first__27247;
var nodes_coll = seq__27246__$1;
var seq__27248 = cljs.core.seq(nodes_coll);
var chunk__27249 = null;
var count__27250 = (0);
var i__27251 = (0);
while(true){
if((i__27251 < count__27250)){
var nodes = chunk__27249.cljs$core$IIndexed$_nth$arity$2(null,i__27251);
app.patu.core.add_component_BANG_(nodes);


var G__27325 = seq__27248;
var G__27326 = chunk__27249;
var G__27327 = count__27250;
var G__27328 = (i__27251 + (1));
seq__27248 = G__27325;
chunk__27249 = G__27326;
count__27250 = G__27327;
i__27251 = G__27328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27248);
if(temp__5735__auto__){
var seq__27248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27248__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27248__$1);
var G__27329 = cljs.core.chunk_rest(seq__27248__$1);
var G__27330 = c__4556__auto__;
var G__27331 = cljs.core.count(c__4556__auto__);
var G__27332 = (0);
seq__27248 = G__27329;
chunk__27249 = G__27330;
count__27250 = G__27331;
i__27251 = G__27332;
continue;
} else {
var nodes = cljs.core.first(seq__27248__$1);
app.patu.core.add_component_BANG_(nodes);


var G__27333 = cljs.core.next(seq__27248__$1);
var G__27334 = null;
var G__27335 = (0);
var G__27336 = (0);
seq__27248 = G__27333;
chunk__27249 = G__27334;
count__27250 = G__27335;
i__27251 = G__27336;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.patu.core.dispatch_n = (function app$patu$core$dispatch_n(vals){
var seq__27252 = cljs.core.seq(vals);
var chunk__27253 = null;
var count__27254 = (0);
var i__27255 = (0);
while(true){
if((i__27255 < count__27254)){
var val = chunk__27253.cljs$core$IIndexed$_nth$arity$2(null,i__27255);
app.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__27337 = seq__27252;
var G__27338 = chunk__27253;
var G__27339 = count__27254;
var G__27340 = (i__27255 + (1));
seq__27252 = G__27337;
chunk__27253 = G__27338;
count__27254 = G__27339;
i__27255 = G__27340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27252);
if(temp__5735__auto__){
var seq__27252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27252__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27252__$1);
var G__27341 = cljs.core.chunk_rest(seq__27252__$1);
var G__27342 = c__4556__auto__;
var G__27343 = cljs.core.count(c__4556__auto__);
var G__27344 = (0);
seq__27252 = G__27341;
chunk__27253 = G__27342;
count__27254 = G__27343;
i__27255 = G__27344;
continue;
} else {
var val = cljs.core.first(seq__27252__$1);
app.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__27345 = cljs.core.next(seq__27252__$1);
var G__27346 = null;
var G__27347 = (0);
var G__27348 = (0);
seq__27252 = G__27345;
chunk__27253 = G__27346;
count__27254 = G__27347;
i__27255 = G__27348;
continue;
}
} else {
return null;
}
}
break;
}
});
app.patu.core.quad_BANG_ = (function app$patu$core$quad_BANG_(game,p__27256){
var vec__27257 = p__27256;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27257,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27257,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27257,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27257,(3),null);
return game.quad(a,b,c,d);
});
app.patu.core.quad = (function app$patu$core$quad(args){
return app.patu.core.quad_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),args);
});
app.patu.core.neg = (function app$patu$core$neg(num){
return ((-1) * num);
});
app.patu.core.call = (function app$patu$core$call(id,prop){
var fexpr__27260 = goog.object.get(app.patu.core.get_component(id),cljs.core.name(prop));
return (fexpr__27260.cljs$core$IFn$_invoke$arity$0 ? fexpr__27260.cljs$core$IFn$_invoke$arity$0() : fexpr__27260.call(null));
});
app.patu.core.play = (function app$patu$core$play(id,anim_id){
if(cljs.core.object_QMARK_(id)){
return id.play(cljs.core.name(anim_id));
} else {
var temp__5735__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
try{return comp.play(cljs.core.name(anim_id));
}catch (e27261){if((e27261 instanceof Error)){
var err = e27261;
return console.warn(err);
} else {
throw e27261;

}
}} else {
return null;
}
}
});
app.patu.core.sleep = (function app$patu$core$sleep(f,ms){
return setTimeout(f,ms);
});
app.patu.core.change_sprite = (function app$patu$core$change_sprite(p__27262){
var vec__27263 = p__27262;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(1),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(3),null);
if(cljs.core.object_QMARK_(id)){
id.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
app.patu.core.play(id,aid);
} else {
}

if(cljs.core.truth_(anim_speed)){
(id.animSpeed = anim_speed);
} else {
(id.animSpeed = 0.1);
}
} else {
}

if(cljs.core.object_QMARK_(id)){
return null;
} else {
var temp__5735__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
return app.patu.core.play(id,aid);
} else {
return null;
}
} else {
return null;
}
}
});
app.patu.core.change_sprite_and_destroy = (function app$patu$core$change_sprite_and_destroy(var_args){
var G__27267 = arguments.length;
switch (G__27267) {
case 3:
return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$3 = (function (comp,sid,aid){
return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(comp,sid,aid,(0));
}));

(app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4 = (function (comp,sid,aid,t){
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
app.patu.core.play(comp,aid);
} else {
}

return app.patu.core.sleep((function (){
return app.patu.core.destroy(comp);
}),t);
}));

(app.patu.core.change_sprite_and_destroy.cljs$lang$maxFixedArity = 4);

app.patu.core.play_anims_and_destroy = (function app$patu$core$play_anims_and_destroy(var_args){
var G__27269 = arguments.length;
switch (G__27269) {
case 2:
return app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2 = (function (obj,anims){
return app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3(obj,anims,(0));
}));

(app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3 = (function (obj,anims,timer){
var anim = cljs.core.first(anims);
var vec__27270 = anim;
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(0),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(3),null);
if(cljs.core.not(cljs.core.seq(cljs.core.rest(anims)))){
return app.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(obj,sid,aid,t);
} else {
app.patu.core.change_sprite(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj,sid,aid,anim_speed], null));

return app.patu.core.sleep((function (){
return app.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.rest(anims),(timer + t));
}),(timer + t));
}
}));

(app.patu.core.play_anims_and_destroy.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.patu.core.js.map
