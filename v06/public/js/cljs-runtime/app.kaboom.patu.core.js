goog.provide('app.kaboom.patu.core');
goog.require('cljs.core');
goog.require('app.kaboom.patu.components');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboom.patu.lib');
goog.require('app.kaboom.patu.events');
goog.require('goog.object');
goog.require('app.kaboom.patu.cam');
goog.require('app.kaboom.patu.state');
app.kaboom.patu.core.kaboom = (function app$kaboom$patu$core$kaboom(config){
return module$kaboom.default(cljs.core.clj__GT_js(config));
});
console.log(app.kaboom.patu.core.kaboom);
/**
 * Initializes a new game:
 * Example Usage:
 * (init {:canvas })
 */
app.kaboom.patu.core.init = (function app$kaboom$patu$core$init(var_args){
var G__64190 = arguments.length;
switch (G__64190) {
case 0:
return app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.9], null)], null));
}));

(app.kaboom.patu.core.init.cljs$core$IFn$_invoke$arity$1 = (function (props){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.patu.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game","game",-441523833),app.kaboom.patu.core.kaboom(props));
}));

(app.kaboom.patu.core.init.cljs$lang$maxFixedArity = 1);

app.kaboom.patu.core.go = (function app$kaboom$patu$core$go(var_args){
var G__64192 = arguments.length;
switch (G__64192) {
case 1:
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id);
}));

(app.kaboom.patu.core.go.cljs$core$IFn$_invoke$arity$2 = (function (id,props){
return app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id,props);
}));

(app.kaboom.patu.core.go.cljs$lang$maxFixedArity = 2);

app.kaboom.patu.core.sprite = (function app$kaboom$patu$core$sprite(var_args){
var G__64194 = arguments.length;
switch (G__64194) {
case 2:
return app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$2 = (function (game,title){
return game.sprite(cljs.core.name(title));
}));

(app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$3 = (function (game,title,opts){
return game.sprite(cljs.core.name(title),cljs.core.clj__GT_js(opts));
}));

(app.kaboom.patu.core.sprite.cljs$lang$maxFixedArity = 3);

app.kaboom.patu.core.sprite_BANG_ = (function app$kaboom$patu$core$sprite_BANG_(title){
return app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),title);
});
app.kaboom.patu.core.solid = (function app$kaboom$patu$core$solid(game){
return game.solid();
});
app.kaboom.patu.core.solid_BANG_ = (function app$kaboom$patu$core$solid_BANG_(){
return app.kaboom.patu.core.solid(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)));
});
app.kaboom.patu.core.scale = (function app$kaboom$patu$core$scale(game,value){
return game.scale(value);
});
app.kaboom.patu.core.layers = (function app$kaboom$patu$core$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.kaboom.patu.core.add_level = (function app$kaboom$patu$core$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.kaboom.patu.core.add_level_obj = (function app$kaboom$patu$core$add_level_obj(id,obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","levels","game/levels",-956004081),id], null),obj);
});
app.kaboom.patu.core.add_level_BANG_ = (function app$kaboom$patu$core$add_level_BANG_(m,level_id){
var map__64195 = cljs.core.deref(app.kaboom.patu.state.game_state);
var map__64195__$1 = (((((!((map__64195 == null))))?(((((map__64195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64195):map__64195);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(levels,level_id);
return app.kaboom.patu.core.add_level_obj(level_id,app.kaboom.patu.core.add_level(game,m,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(game) : handler.call(null,game))));
});
app.kaboom.patu.core.key_is_down = (function app$kaboom$patu$core$key_is_down(key){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).keyIsDown(cljs.core.name(key));
});
app.kaboom.patu.core.add = (function app$kaboom$patu$core$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.kaboom.patu.core.mouse_clicked_QMARK_ = (function app$kaboom$patu$core$mouse_clicked_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).mouseIsClicked();
});
app.kaboom.patu.core.mouse_down_QMARK_ = (function app$kaboom$patu$core$mouse_down_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).mouseIsDown();
});
app.kaboom.patu.core.mouse_released_QMARK_ = (function app$kaboom$patu$core$mouse_released_QMARK_(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).mouseIsReleased();
});
app.kaboom.patu.core.scene = (function app$kaboom$patu$core$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
app.kaboom.patu.core.reg_scene = (function app$kaboom$patu$core$reg_scene(id,p__64197){
var map__64198 = p__64197;
var map__64198__$1 = (((((!((map__64198 == null))))?(((((map__64198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64198):map__64198);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64198__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64198__$1,new cljs.core.Keyword(null,"evt","evt",-1251566867));
var handler = (function (state){
var G__64200_64447 = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(state) : init.call(null,state));
(app.kaboom.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.kaboom.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__64200_64447) : app.kaboom.patu.core.dispatch_n.call(null,G__64200_64447));

var G__64201 = (evt.cljs$core$IFn$_invoke$arity$1 ? evt.cljs$core$IFn$_invoke$arity$1(state) : evt.call(null,state));
return (app.kaboom.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.kaboom.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__64201) : app.kaboom.patu.core.dispatch_n.call(null,G__64201));
});
return app.kaboom.patu.core.scene(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id,handler);
});
app.kaboom.patu.core.start_BANG_ = (function app$kaboom$patu$core$start_BANG_(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
/**
 * Starts a scene:
 *  - example usage: (start :scene/main)
 */
app.kaboom.patu.core.start = (function app$kaboom$patu$core$start(id){
return app.kaboom.patu.core.start_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id);
});
app.kaboom.patu.core.vec2 = (function app$kaboom$patu$core$vec2(p__64202){
var vec__64203 = p__64202;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64203,(0),null);
var val2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64203,(1),null);
return app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),val,(function (){var or__4126__auto__ = val2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return val;
}
})());
});
app.kaboom.patu.core.respawn = (function app$kaboom$patu$core$respawn(comp,val){
if(typeof val === 'number'){
return (comp.pos = app.kaboom.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,val], null)));
} else {
return (comp.pos = app.kaboom.patu.core.vec2(val));
}
});
app.kaboom.patu.core.dt = (function app$kaboom$patu$core$dt(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).dt();
});
app.kaboom.patu.core.gravity = (function app$kaboom$patu$core$gravity(game,value){
return game.gravity(value);
});
app.kaboom.patu.core.gravity_BANG_ = (function app$kaboom$patu$core$gravity_BANG_(value){
return app.kaboom.patu.core.gravity(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),value);
});
app.kaboom.patu.core.randd = (function app$kaboom$patu$core$randd(v1,v2){
return app.kaboom.patu.lib.randd(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),v1,v2);
});
app.kaboom.patu.core.cam_ignore = (function app$kaboom$patu$core$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
app.kaboom.patu.core.cam_ignore_BANG_ = (function app$kaboom$patu$core$cam_ignore_BANG_(value){
return app.kaboom.patu.core.cam_ignore(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),value);
});
app.kaboom.patu.core.get_component_BANG_ = (function app$kaboom$patu$core$get_component_BANG_(state,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id,new cljs.core.Keyword(null,"comp","comp",1191953630)], null));
});
app.kaboom.patu.core.get_tag = (function app$kaboom$patu$core$get_tag(id){
var temp__5735__auto__ = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).get(cljs.core.name(id));
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
app.kaboom.patu.core.get_component = (function app$kaboom$patu$core$get_component(id){
var comp = app.kaboom.patu.core.get_component_BANG_(cljs.core.deref(app.kaboom.patu.state.game_state),id);
if(cljs.core.truth_(comp)){
return comp;
} else {
return app.kaboom.patu.core.get_tag(id);
}
});
app.kaboom.patu.core.rgb = (function app$kaboom$patu$core$rgb(var_args){
var G__64207 = arguments.length;
switch (G__64207) {
case 3:
return app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$4(r,g,b,(1));
}));

(app.kaboom.patu.core.rgb.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).rgb(r,g,b,a);
}));

(app.kaboom.patu.core.rgb.cljs$lang$maxFixedArity = 4);

app.kaboom.patu.core.get_level = (function app$kaboom$patu$core$get_level(id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboom.patu.state.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","levels","game/levels",-956004081),id], null));
});
if((typeof app !== 'undefined') && (typeof app.kaboom !== 'undefined') && (typeof app.kaboom.patu !== 'undefined') && (typeof app.kaboom.patu.core !== 'undefined') && (typeof app.kaboom.patu.core.create_component !== 'undefined')){
} else {
app.kaboom.patu.core.create_component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64208 = cljs.core.get_global_hierarchy;
return (fexpr__64208.cljs$core$IFn$_invoke$arity$0 ? fexpr__64208.cljs$core$IFn$_invoke$arity$0() : fexpr__64208.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom.patu.core","create-component"),(function (_,type,props){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),(function (game,_,p__64209){
var vec__64210 = p__64209;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(2),null);
if(cljs.core.truth_(opts)){
return app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$3(game,id,opts);
} else {
return app.kaboom.patu.core.sprite.cljs$core$IFn$_invoke$arity$2(game,id);
}
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solid","solid",-2023773691),(function (game,_,___$1){
return app.kaboom.patu.core.solid(game);
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (game,_,p__64213){
var vec__64214 = p__64213;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64214,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64214,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64214,(2),null);
if(cljs.core.vector_QMARK_(x)){
return game.pos(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1)));
} else {
return game.pos(x,y);
}
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (game,_,p__64217){
var vec__64218 = p__64217;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64218,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64218,(1),null);
if(cljs.core.truth_(value)){
return game.body(cljs.core.clj__GT_js(value));
} else {
return game.body();
}
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (game,_,p__64221){
var vec__64222 = p__64221;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64222,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64222,(1),null);
return game.origin(cljs.core.name(id));
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,_,p__64225){
var vec__64226 = p__64225;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64226,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64226,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64226,(2),null);
return game.text(value,(function (){var or__4126__auto__ = opts;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (16);
}
})());
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"layer","layer",-1601820589),(function (game,_,p__64229){
var vec__64230 = p__64229;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64230,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64230,(1),null);
return game.layer(cljs.core.name(value));
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,_,p__64233){
var vec__64234 = p__64233;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64234,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64234,(1),null);
var value_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64234,(2),null);
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
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (game,_,p__64237){
var vec__64238 = p__64237;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64238,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64238,(1),null);
var value2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64238,(2),null);
if(cljs.core.truth_(value2)){
return game.scale(value,value2);
} else {
return game.scale(value);
}
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_,___$1,p__64241){
var vec__64242 = p__64241;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64242,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64242,(1),null);
if((props instanceof cljs.core.Keyword)){
return props;
} else {
return cljs.core.clj__GT_js(props);
}
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"color","color",1011675173),(function (game,_,p__64245){
var vec__64246 = p__64245;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64246,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64246,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64246,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64246,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64246,(4),null);
return game.color(r,g,b,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
}));
app.kaboom.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"area","area",472007256),(function (game,_,p__64249){
var vec__64250 = p__64249;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64250,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64250,(1),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64250,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64250,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64250,(4),null);
return game.area(game.vec2(x1,y1),game.vec2(x2,y2));
}));
app.kaboom.patu.core.create_components = (function app$kaboom$patu$core$create_components(game,props){
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$kaboom$patu$core$create_components_$_iter__64253(s__64254){
return (new cljs.core.LazySeq(null,(function (){
var s__64254__$1 = s__64254;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64254__$1);
if(temp__5735__auto__){
var s__64254__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64254__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64254__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64256 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64255 = (0);
while(true){
if((i__64255 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__64255);
cljs.core.chunk_append(b__64256,app.kaboom.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop));

var G__64481 = (i__64255 + (1));
i__64255 = G__64481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64256),app$kaboom$patu$core$create_components_$_iter__64253(cljs.core.chunk_rest(s__64254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64256),null);
}
} else {
var prop = cljs.core.first(s__64254__$2);
return cljs.core.cons(app.kaboom.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop),app$kaboom$patu$core$create_components_$_iter__64253(cljs.core.rest(s__64254__$2)));
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
app.kaboom.patu.core.create_components_BANG_ = (function app$kaboom$patu$core$create_components_BANG_(props){
return app.kaboom.patu.core.create_components(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),props);
});
app.kaboom.patu.core.add_component = (function app$kaboom$patu$core$add_component(game,props){
return app.kaboom.patu.core.add(game,app.kaboom.patu.core.create_components(game,props));
});
app.kaboom.patu.core.add_component_BANG_ = (function app$kaboom$patu$core$add_component_BANG_(props){
return app.kaboom.patu.core.add_component(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),props);
});
app.kaboom.patu.core.reg_component = (function app$kaboom$patu$core$reg_component(id,props){
var comp = app.kaboom.patu.core.add_component(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),props);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comp","comp",1191953630),comp,new cljs.core.Keyword(null,"props","props",453281727),props], null));

return comp;
});
app.kaboom.patu.core.height = (function app$kaboom$patu$core$height(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).height();
});
app.kaboom.patu.core.width = (function app$kaboom$patu$core$width(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).width();
});
app.kaboom.patu.core.destroy_BANG_ = (function app$kaboom$patu$core$destroy_BANG_(game,comp){
return game.destroy(comp);
});
app.kaboom.patu.core.destroy = (function app$kaboom$patu$core$destroy(comp){
return app.kaboom.patu.core.destroy_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),comp);
});
app.kaboom.patu.core.center = (function app$kaboom$patu$core$center(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.kaboom.patu.core.width() / (2)),(app.kaboom.patu.core.height() / (2))], null);
});
app.kaboom.patu.core.set_layers = (function app$kaboom$patu$core$set_layers(coll,main_layer){
return app.kaboom.patu.core.layers(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),coll,main_layer);
});
app.kaboom.patu.core.format_for_level = (function app$kaboom$patu$core$format_for_level(game,p__64257){
var map__64258 = p__64257;
var map__64258__$1 = (((((!((map__64258 == null))))?(((((map__64258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64258):map__64258);
var map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"map","map",1371690461));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64258__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var input = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"map","map",1371690461),map,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"any","any",1705907423),any,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null);
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (primes,p__64260){
var vec__64261 = p__64260;
var seq__64262 = cljs.core.seq(vec__64261);
var first__64263 = cljs.core.first(seq__64262);
var seq__64262__$1 = cljs.core.next(seq__64262);
var id = first__64263;
var props = seq__64262__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(primes,id,app.kaboom.patu.core.create_components(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),props));
}),cljs.core.PersistentArrayMap.EMPTY,components)], 0)));
});
app.kaboom.patu.core.reg_level_BANG_ = (function app$kaboom$patu$core$reg_level_BANG_(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.patu.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887),id], null),handler);
});
app.kaboom.patu.core.reg_level = (function app$kaboom$patu$core$reg_level(id,data_handler){
return app.kaboom.patu.core.reg_level_BANG_(id,(function (game){
return app.kaboom.patu.core.format_for_level(game,(data_handler.cljs$core$IFn$_invoke$arity$0 ? data_handler.cljs$core$IFn$_invoke$arity$0() : data_handler.call(null)));
}));
});
if((typeof app !== 'undefined') && (typeof app.kaboom !== 'undefined') && (typeof app.kaboom.patu !== 'undefined') && (typeof app.kaboom.patu.core !== 'undefined') && (typeof app.kaboom.patu.core.dispatch !== 'undefined')){
} else {
app.kaboom.patu.core.dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64264 = cljs.core.get_global_hierarchy;
return (fexpr__64264.cljs$core$IFn$_invoke$arity$0 ? fexpr__64264.cljs$core$IFn$_invoke$arity$0() : fexpr__64264.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom.patu.core","dispatch"),(function (args){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","gravity","game/gravity",-1809937539),(function (p__64265){
var vec__64266 = p__64265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64266,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64266,(1),null);
return app.kaboom.patu.core.gravity_BANG_(value);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (p__64269){
var vec__64270 = p__64269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64270,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64270,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).origin(cljs.core.name(value));
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),(function (p__64273){
var vec__64274 = p__64273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64274,(0),null);
var main_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64274,(1),null);
var mid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64274,(2),null);
return app.kaboom.patu.core.add_level_BANG_(main_map,mid);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","layers","game/layers",1947999590),(function (p__64277){
var vec__64278 = p__64277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(1),null);
var main_bg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(2),null);
return app.kaboom.patu.core.set_layers(layers,main_bg);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),(function (p__64281){
var vec__64282 = p__64281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64282,(0),null);
var backgrounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64282,(1),null);
return app.kaboom.patu.core.cam_ignore_BANG_(backgrounds);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg","comp/reg",1624858375),(function (p__64285){
var vec__64286 = p__64285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64286,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64286,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64286,(2),null);
return app.kaboom.patu.core.reg_component(id,props);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),(function (p__64289){
var vec__64290 = p__64289;
var seq__64291 = cljs.core.seq(vec__64290);
var first__64292 = cljs.core.first(seq__64291);
var seq__64291__$1 = cljs.core.next(seq__64291);
var _ = first__64292;
var comps = seq__64291__$1;
var seq__64293 = cljs.core.seq(comps);
var chunk__64294 = null;
var count__64295 = (0);
var i__64296 = (0);
while(true){
if((i__64296 < count__64295)){
var vec__64303 = chunk__64294.cljs$core$IIndexed$_nth$arity$2(null,i__64296);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64303,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64303,(1),null);
app.kaboom.patu.core.reg_component(id,props);


var G__64507 = seq__64293;
var G__64508 = chunk__64294;
var G__64509 = count__64295;
var G__64510 = (i__64296 + (1));
seq__64293 = G__64507;
chunk__64294 = G__64508;
count__64295 = G__64509;
i__64296 = G__64510;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64293);
if(temp__5735__auto__){
var seq__64293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64293__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64293__$1);
var G__64511 = cljs.core.chunk_rest(seq__64293__$1);
var G__64512 = c__4556__auto__;
var G__64513 = cljs.core.count(c__4556__auto__);
var G__64514 = (0);
seq__64293 = G__64511;
chunk__64294 = G__64512;
count__64295 = G__64513;
i__64296 = G__64514;
continue;
} else {
var vec__64306 = cljs.core.first(seq__64293__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64306,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64306,(1),null);
app.kaboom.patu.core.reg_component(id,props);


var G__64515 = cljs.core.next(seq__64293__$1);
var G__64516 = null;
var G__64517 = (0);
var G__64518 = (0);
seq__64293 = G__64515;
chunk__64294 = G__64516;
count__64295 = G__64517;
i__64296 = G__64518;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.kaboom.patu.core.action_handler = (function app$kaboom$patu$core$action_handler(comp,props){
if(cljs.core.vector_QMARK_(props)){
return comp.action((function (){
var G__64309 = cljs.core.first(props);
var G__64309__$1 = (((G__64309 instanceof cljs.core.Keyword))?G__64309.fqn:null);
switch (G__64309__$1) {
case "cam/follow":
return app.kaboom.patu.cam.follow(comp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64309__$1)].join('')));

}
}));
} else {
return comp.action((function (){
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(comp) : props.call(null,comp));
}));
}
});
app.kaboom.patu.core.on_handler = (function app$kaboom$patu$core$on_handler(comp,p__64310){
var vec__64311 = p__64310;
var seq__64312 = cljs.core.seq(vec__64311);
var first__64313 = cljs.core.first(seq__64312);
var seq__64312__$1 = cljs.core.next(seq__64312);
var key = first__64313;
var props = seq__64312__$1;
var handler = (function (obj){
var G__64314 = key;
var G__64314__$1 = (((G__64314 instanceof cljs.core.Keyword))?G__64314.fqn:null);
switch (G__64314__$1) {
case "headbump":
var seq__64315 = cljs.core.seq(props);
var chunk__64316 = null;
var count__64317 = (0);
var i__64318 = (0);
while(true){
if((i__64318 < count__64317)){
var prop = chunk__64316.cljs$core$IIndexed$_nth$arity$2(null,i__64318);
if(cljs.core.truth_(app.kaboom.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__64321_64525 = cljs.core.second(prop);
(fexpr__64321_64525.cljs$core$IFn$_invoke$arity$0 ? fexpr__64321_64525.cljs$core$IFn$_invoke$arity$0() : fexpr__64321_64525.call(null));
} else {
}


var G__64526 = seq__64315;
var G__64527 = chunk__64316;
var G__64528 = count__64317;
var G__64529 = (i__64318 + (1));
seq__64315 = G__64526;
chunk__64316 = G__64527;
count__64317 = G__64528;
i__64318 = G__64529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64315);
if(temp__5735__auto__){
var seq__64315__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64315__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64315__$1);
var G__64530 = cljs.core.chunk_rest(seq__64315__$1);
var G__64531 = c__4556__auto__;
var G__64532 = cljs.core.count(c__4556__auto__);
var G__64533 = (0);
seq__64315 = G__64530;
chunk__64316 = G__64531;
count__64317 = G__64532;
i__64318 = G__64533;
continue;
} else {
var prop = cljs.core.first(seq__64315__$1);
if(cljs.core.truth_(app.kaboom.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__64322_64534 = cljs.core.second(prop);
(fexpr__64322_64534.cljs$core$IFn$_invoke$arity$0 ? fexpr__64322_64534.cljs$core$IFn$_invoke$arity$0() : fexpr__64322_64534.call(null));
} else {
}


var G__64535 = cljs.core.next(seq__64315__$1);
var G__64536 = null;
var G__64537 = (0);
var G__64538 = (0);
seq__64315 = G__64535;
chunk__64316 = G__64536;
count__64317 = G__64537;
i__64318 = G__64538;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64314__$1)].join('')));

}
});
return app.kaboom.patu.components.on(comp,key,handler);
});
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","comp","evt/comp",1192064753),(function (p__64323){
var vec__64324 = p__64323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64324,(0),null);
var vec__64327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64324,(1),null);
var seq__64328 = cljs.core.seq(vec__64327);
var first__64329 = cljs.core.first(seq__64328);
var seq__64328__$1 = cljs.core.next(seq__64328);
var id = first__64329;
var args = seq__64328__$1;
var comp = app.kaboom.patu.core.get_component(id);
var seq__64330 = cljs.core.seq(args);
var chunk__64331 = null;
var count__64332 = (0);
var i__64333 = (0);
while(true){
if((i__64333 < count__64332)){
var vec__64342 = chunk__64331.cljs$core$IIndexed$_nth$arity$2(null,i__64333);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64342,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64342,(1),null);
var G__64345_64539 = method;
var G__64345_64540__$1 = (((G__64345_64539 instanceof cljs.core.Keyword))?G__64345_64539.fqn:null);
switch (G__64345_64540__$1) {
case "action":
app.kaboom.patu.core.action_handler(comp,res);

break;
case "on":
app.kaboom.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64345_64540__$1)].join('')));

}


var G__64542 = seq__64330;
var G__64543 = chunk__64331;
var G__64544 = count__64332;
var G__64545 = (i__64333 + (1));
seq__64330 = G__64542;
chunk__64331 = G__64543;
count__64332 = G__64544;
i__64333 = G__64545;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64330);
if(temp__5735__auto__){
var seq__64330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64330__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64330__$1);
var G__64546 = cljs.core.chunk_rest(seq__64330__$1);
var G__64547 = c__4556__auto__;
var G__64548 = cljs.core.count(c__4556__auto__);
var G__64549 = (0);
seq__64330 = G__64546;
chunk__64331 = G__64547;
count__64332 = G__64548;
i__64333 = G__64549;
continue;
} else {
var vec__64346 = cljs.core.first(seq__64330__$1);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64346,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64346,(1),null);
var G__64349_64550 = method;
var G__64349_64551__$1 = (((G__64349_64550 instanceof cljs.core.Keyword))?G__64349_64550.fqn:null);
switch (G__64349_64551__$1) {
case "action":
app.kaboom.patu.core.action_handler(comp,res);

break;
case "on":
app.kaboom.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64349_64551__$1)].join('')));

}


var G__64553 = cljs.core.next(seq__64330__$1);
var G__64554 = null;
var G__64555 = (0);
var G__64556 = (0);
seq__64330 = G__64553;
chunk__64331 = G__64554;
count__64332 = G__64555;
i__64333 = G__64556;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),(function (p__64350){
var vec__64351 = p__64350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64351,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64351,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64351,(2),null);
return app.kaboom.patu.events.key_down(id,handler);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),(function (p__64354){
var vec__64355 = p__64354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64355,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64355,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64355,(2),null);
return app.kaboom.patu.events.key_press(id,handler);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),(function (p__64358){
var vec__64359 = p__64358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64359,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64359,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64359,(2),null);
return app.kaboom.patu.events.key_release(id,handler);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","action","evt/action",-811138293),(function (p__64362){
var vec__64363 = p__64362;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64363,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64363,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64363,(2),null);
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if(cljs.core.truth_(comp.action)){
return comp.action(handler);
} else {
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).action(cljs.core.name(id),handler);
}
} else {
return null;
}
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","on","evt/on",173779189),(function (p__64367){
var vec__64368 = p__64367;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64368,(0),null);
var vec__64371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64368,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64371,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64371,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64368,(2),null);
var comp = (function (){var or__4126__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return id;
}
})();
return comp.on(cljs.core.name(target),(function (p1__64366_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__64366_SHARP_) : handler.call(null,p1__64366_SHARP_));
}));
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","collides","evt/collides",361392002),(function (p__64374){
var vec__64375 = p__64374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64375,(0),null);
var vec__64378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64375,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64378,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64378,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64375,(2),null);
var comp = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(comp.collides)){
return comp.collides(cljs.core.name(target),handler);
} else {
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).collides(cljs.core.name(id),cljs.core.name(target),handler);
}
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","overlaps","evt/overlaps",1397807447),(function (p__64381){
var vec__64382 = p__64381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64382,(0),null);
var vec__64385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64382,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64382,(2),null);
var comp = app.kaboom.patu.core.get_component(id);
return comp.overlaps(cljs.core.name(target),handler);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","play","comp/play",-581544151),(function (p__64388){
var vec__64389 = p__64388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64389,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64389,(1),null);
var tune = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64389,(2),null);
var comp = app.kaboom.patu.core.get_component(id);
return comp.play(cljs.core.name(tune));
}));
app.kaboom.patu.core.game_loop = (function app$kaboom$patu$core$game_loop(val,func){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)).loop(val,func);
});
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","loop","game/loop",-398720195),(function (p__64392){
var vec__64393 = p__64392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64393,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64393,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64393,(2),null);
return app.kaboom.patu.core.game_loop(id,func);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add","component/add",1526013882),(function (p__64396){
var vec__64397 = p__64396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64397,(0),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64397,(1),null);
return app.kaboom.patu.core.add_component_BANG_(nodes);
}));
app.kaboom.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add-n","component/add-n",-566334132),(function (p__64400){
var vec__64401 = p__64400;
var seq__64402 = cljs.core.seq(vec__64401);
var first__64403 = cljs.core.first(seq__64402);
var seq__64402__$1 = cljs.core.next(seq__64402);
var _ = first__64403;
var nodes_coll = seq__64402__$1;
var seq__64404 = cljs.core.seq(nodes_coll);
var chunk__64405 = null;
var count__64406 = (0);
var i__64407 = (0);
while(true){
if((i__64407 < count__64406)){
var nodes = chunk__64405.cljs$core$IIndexed$_nth$arity$2(null,i__64407);
app.kaboom.patu.core.add_component_BANG_(nodes);


var G__64561 = seq__64404;
var G__64562 = chunk__64405;
var G__64563 = count__64406;
var G__64564 = (i__64407 + (1));
seq__64404 = G__64561;
chunk__64405 = G__64562;
count__64406 = G__64563;
i__64407 = G__64564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64404);
if(temp__5735__auto__){
var seq__64404__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64404__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64404__$1);
var G__64565 = cljs.core.chunk_rest(seq__64404__$1);
var G__64566 = c__4556__auto__;
var G__64567 = cljs.core.count(c__4556__auto__);
var G__64568 = (0);
seq__64404 = G__64565;
chunk__64405 = G__64566;
count__64406 = G__64567;
i__64407 = G__64568;
continue;
} else {
var nodes = cljs.core.first(seq__64404__$1);
app.kaboom.patu.core.add_component_BANG_(nodes);


var G__64569 = cljs.core.next(seq__64404__$1);
var G__64570 = null;
var G__64571 = (0);
var G__64572 = (0);
seq__64404 = G__64569;
chunk__64405 = G__64570;
count__64406 = G__64571;
i__64407 = G__64572;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.kaboom.patu.core.dispatch_n = (function app$kaboom$patu$core$dispatch_n(vals){
var seq__64408 = cljs.core.seq(vals);
var chunk__64409 = null;
var count__64410 = (0);
var i__64411 = (0);
while(true){
if((i__64411 < count__64410)){
var val = chunk__64409.cljs$core$IIndexed$_nth$arity$2(null,i__64411);
app.kaboom.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__64573 = seq__64408;
var G__64574 = chunk__64409;
var G__64575 = count__64410;
var G__64576 = (i__64411 + (1));
seq__64408 = G__64573;
chunk__64409 = G__64574;
count__64410 = G__64575;
i__64411 = G__64576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64408);
if(temp__5735__auto__){
var seq__64408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64408__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64408__$1);
var G__64577 = cljs.core.chunk_rest(seq__64408__$1);
var G__64578 = c__4556__auto__;
var G__64579 = cljs.core.count(c__4556__auto__);
var G__64580 = (0);
seq__64408 = G__64577;
chunk__64409 = G__64578;
count__64410 = G__64579;
i__64411 = G__64580;
continue;
} else {
var val = cljs.core.first(seq__64408__$1);
app.kaboom.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__64581 = cljs.core.next(seq__64408__$1);
var G__64582 = null;
var G__64583 = (0);
var G__64584 = (0);
seq__64408 = G__64581;
chunk__64409 = G__64582;
count__64410 = G__64583;
i__64411 = G__64584;
continue;
}
} else {
return null;
}
}
break;
}
});
app.kaboom.patu.core.quad_BANG_ = (function app$kaboom$patu$core$quad_BANG_(game,p__64412){
var vec__64413 = p__64412;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(3),null);
return game.quad(a,b,c,d);
});
app.kaboom.patu.core.quad = (function app$kaboom$patu$core$quad(args){
return app.kaboom.patu.core.quad_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),args);
});
app.kaboom.patu.core.neg = (function app$kaboom$patu$core$neg(num){
return ((-1) * num);
});
app.kaboom.patu.core.call = (function app$kaboom$patu$core$call(id,prop){
var fexpr__64416 = goog.object.get(app.kaboom.patu.core.get_component(id),cljs.core.name(prop));
return (fexpr__64416.cljs$core$IFn$_invoke$arity$0 ? fexpr__64416.cljs$core$IFn$_invoke$arity$0() : fexpr__64416.call(null));
});
app.kaboom.patu.core.play = (function app$kaboom$patu$core$play(id,anim_id){
if(cljs.core.object_QMARK_(id)){
return id.play(cljs.core.name(anim_id));
} else {
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
try{return comp.play(cljs.core.name(anim_id));
}catch (e64417){if((e64417 instanceof Error)){
var err = e64417;
return console.warn(err);
} else {
throw e64417;

}
}} else {
return null;
}
}
});
app.kaboom.patu.core.sleep = (function app$kaboom$patu$core$sleep(f,ms){
return setTimeout(f,ms);
});
app.kaboom.patu.core.change_sprite = (function app$kaboom$patu$core$change_sprite(p__64418){
var vec__64419 = p__64418;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(1),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(3),null);
if(cljs.core.object_QMARK_(id)){
id.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
app.kaboom.patu.core.play(id,aid);
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
var temp__5735__auto__ = app.kaboom.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
return app.kaboom.patu.core.play(id,aid);
} else {
return null;
}
} else {
return null;
}
}
});
app.kaboom.patu.core.change_sprite_and_destroy = (function app$kaboom$patu$core$change_sprite_and_destroy(var_args){
var G__64423 = arguments.length;
switch (G__64423) {
case 3:
return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$3 = (function (comp,sid,aid){
return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(comp,sid,aid,(0));
}));

(app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4 = (function (comp,sid,aid,t){
comp.changeSprite(cljs.core.name(sid));

if(cljs.core.truth_(aid)){
app.kaboom.patu.core.play(comp,aid);
} else {
}

return app.kaboom.patu.core.sleep((function (){
return app.kaboom.patu.core.destroy(comp);
}),t);
}));

(app.kaboom.patu.core.change_sprite_and_destroy.cljs$lang$maxFixedArity = 4);

app.kaboom.patu.core.play_anims_and_destroy = (function app$kaboom$patu$core$play_anims_and_destroy(var_args){
var G__64425 = arguments.length;
switch (G__64425) {
case 2:
return app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$2 = (function (obj,anims){
return app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3(obj,anims,(0));
}));

(app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3 = (function (obj,anims,timer){
var anim = cljs.core.first(anims);
var vec__64426 = anim;
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64426,(0),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64426,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64426,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64426,(3),null);
if(cljs.core.not(cljs.core.seq(cljs.core.rest(anims)))){
return app.kaboom.patu.core.change_sprite_and_destroy.cljs$core$IFn$_invoke$arity$4(obj,sid,aid,t);
} else {
app.kaboom.patu.core.change_sprite(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj,sid,aid,anim_speed], null));

return app.kaboom.patu.core.sleep((function (){
return app.kaboom.patu.core.play_anims_and_destroy.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.rest(anims),(timer + t));
}),(timer + t));
}
}));

(app.kaboom.patu.core.play_anims_and_destroy.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.kaboom.patu.core.js.map
