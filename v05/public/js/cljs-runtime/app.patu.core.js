goog.provide('app.patu.core');
goog.require('cljs.core');
goog.require('app.patu.components');
goog.require('app.patu.utils');
goog.require('app.patu.lib');
goog.require('app.patu.events');
goog.require('goog.object');
goog.require('app.patu.cam');
goog.require('app.patu.state');
app.patu.core.vec2 = (function app$patu$core$vec2(p__32170){
var vec__32171 = p__32170;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(0),null);
var val2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(1),null);
return app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),val,(function (){var or__4126__auto__ = val2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return val;
}
})());
});
app.patu.core.rgb = (function app$patu$core$rgb(var_args){
var G__32175 = arguments.length;
switch (G__32175) {
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

app.patu.core.rgba = (function app$patu$core$rgba(r,g,b,a){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).rgba(r,g,b,a);
});
app.patu.core.rand_seed = (function app$patu$core$rand_seed(val){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).randSeed(val);
});
/**
 * create a seedable random number generator
 *   usage: (make-rng (js/Date.now))
 *   
 */
app.patu.core.make_rng = (function app$patu$core$make_rng(val){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).makeRng(val);
});
/**
 * Get random element from array
 */
app.patu.core.choose = (function app$patu$core$choose(coll){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).choose(coll);
});
app.patu.core.chance = (function app$patu$core$chance(num){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).chance(num);
});
/**
 * Linear interpolation
 */
app.patu.core.lerp = (function app$patu$core$lerp(frm,to,t){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).lerp(frm,to,t);
});
/**
 * map number to another range. Same as kaboom.map
 */
app.patu.core.kmap = (function app$patu$core$kmap(v,l1,h1,l2,h2){
return ((((v - l1) / (h1 - l1)) * (h2 - l2)) + l2);
});
app.patu.core.kaboom = (function app$patu$core$kaboom(config){
return module$kaboom$v05.default(cljs.core.clj__GT_js(config));
});
/**
 * Initializes a new game:
 * Example Usage:
 * (init {:canvas })
 */
app.patu.core.init = (function app$patu$core$init(var_args){
var G__32177 = arguments.length;
switch (G__32177) {
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

app.patu.core.dt = (function app$patu$core$dt(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).dt();
});
app.patu.core.height = (function app$patu$core$height(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).height();
});
app.patu.core.width = (function app$patu$core$width(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).width();
});
app.patu.core.mouse_pos = (function app$patu$core$mouse_pos(var_args){
var G__32179 = arguments.length;
switch (G__32179) {
case 0:
return app.patu.core.mouse_pos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.patu.core.mouse_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.core.mouse_pos.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mousePos();
}));

(app.patu.core.mouse_pos.cljs$core$IFn$_invoke$arity$1 = (function (layer){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mousePos(cljs.core.name(layer));
}));

(app.patu.core.mouse_pos.cljs$lang$maxFixedArity = 1);

app.patu.core.screenshot = (function app$patu$core$screenshot(){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).screenShot();
});
app.patu.core.sprite = (function app$patu$core$sprite(var_args){
var G__32181 = arguments.length;
switch (G__32181) {
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
var map__32182 = cljs.core.deref(app.patu.state.game_state);
var map__32182__$1 = (((((!((map__32182 == null))))?(((((map__32182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32182):map__32182);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32182__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32182__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(levels,level_id);
return app.patu.core.add_level_obj(level_id,app.patu.core.add_level(game,m,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(game) : handler.call(null,game))));
});
/**
 * switch to a scene
 */
app.patu.core.go = (function app$patu$core$go(var_args){
var G__32185 = arguments.length;
switch (G__32185) {
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

/**
 * Use scenes to define different parts of a game, e.g. Game Scene, Start Scene,
 */
app.patu.core.scene = (function app$patu$core$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
/**
 * Registers a scene
 */
app.patu.core.reg_scene = (function app$patu$core$reg_scene(id,p__32186){
var map__32187 = p__32186;
var map__32187__$1 = (((((!((map__32187 == null))))?(((((map__32187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32187):map__32187);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"evt","evt",-1251566867));
var handler = (function (state){
var G__32189_32456 = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(state) : init.call(null,state));
(app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__32189_32456) : app.patu.core.dispatch_n.call(null,G__32189_32456));

var G__32190 = (evt.cljs$core$IFn$_invoke$arity$1 ? evt.cljs$core$IFn$_invoke$arity$1(state) : evt.call(null,state));
return (app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? app.patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__32190) : app.patu.core.dispatch_n.call(null,G__32190));
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
app.patu.core.respawn = (function app$patu$core$respawn(comp,val){
if(typeof val === 'number'){
return (comp.pos = app.patu.core.vec2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,val], null)));
} else {
return (comp.pos = app.patu.core.vec2(val));
}
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
app.patu.core.add = (function app$patu$core$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
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
app.patu.core.get_level = (function app$patu$core$get_level(id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.patu.state.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","levels","game/levels",-956004081),id], null));
});
if((typeof app !== 'undefined') && (typeof app.patu !== 'undefined') && (typeof app.patu.core !== 'undefined') && (typeof app.patu.core.create_component !== 'undefined')){
} else {
app.patu.core.create_component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32191 = cljs.core.get_global_hierarchy;
return (fexpr__32191.cljs$core$IFn$_invoke$arity$0 ? fexpr__32191.cljs$core$IFn$_invoke$arity$0() : fexpr__32191.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.patu.core","create-component"),(function (_,type,props){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),(function (game,_,p__32192){
var vec__32193 = p__32192;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(2),null);
if(cljs.core.truth_(opts)){
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$3(game,id,opts);
} else {
return app.patu.core.sprite.cljs$core$IFn$_invoke$arity$2(game,id);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solid","solid",-2023773691),(function (game,_,___$1){
return app.patu.core.solid(game);
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (game,_,p__32196){
var vec__32197 = p__32196;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(2),null);
if(cljs.core.vector_QMARK_(x)){
return game.pos(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1)));
} else {
return game.pos(x,y);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (game,_,p__32200){
var vec__32201 = p__32200;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(1),null);
if(cljs.core.truth_(value)){
return game.body(cljs.core.clj__GT_js(value));
} else {
return game.body();
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (game,_,p__32204){
var vec__32205 = p__32204;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32205,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32205,(1),null);
return game.origin(cljs.core.name(id));
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,_,p__32208){
var vec__32209 = p__32208;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32209,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32209,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32209,(2),null);
return game.text(value,(function (){var or__4126__auto__ = opts;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (16);
}
})());
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"layer","layer",-1601820589),(function (game,_,p__32212){
var vec__32213 = p__32212;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(1),null);
return game.layer(cljs.core.name(value));
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,_,p__32216){
var vec__32217 = p__32216;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(1),null);
var value_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(2),null);
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
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (game,_,p__32220){
var vec__32221 = p__32220;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(1),null);
var value2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(2),null);
if(cljs.core.truth_(value2)){
return game.scale(value,value2);
} else {
return game.scale(value);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_,___$1,p__32224){
var vec__32225 = p__32224;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(1),null);
if((props instanceof cljs.core.Keyword)){
return props;
} else {
return cljs.core.clj__GT_js(props);
}
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"color","color",1011675173),(function (game,_,p__32228){
var vec__32229 = p__32228;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32229,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32229,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32229,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32229,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32229,(4),null);
return game.color(r,g,b,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
}));
app.patu.core.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"area","area",472007256),(function (game,_,p__32232){
var vec__32233 = p__32232;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32233,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32233,(1),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32233,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32233,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32233,(4),null);
return game.area(game.vec2(x1,y1),game.vec2(x2,y2));
}));
app.patu.core.create_components = (function app$patu$core$create_components(game,props){
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$patu$core$create_components_$_iter__32236(s__32237){
return (new cljs.core.LazySeq(null,(function (){
var s__32237__$1 = s__32237;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32237__$1);
if(temp__5735__auto__){
var s__32237__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32238 = (0);
while(true){
if((i__32238 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__32238);
cljs.core.chunk_append(b__32239,app.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop));

var G__32493 = (i__32238 + (1));
i__32238 = G__32493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32239),app$patu$core$create_components_$_iter__32236(cljs.core.chunk_rest(s__32237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32239),null);
}
} else {
var prop = cljs.core.first(s__32237__$2);
return cljs.core.cons(app.patu.core.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop),app$patu$core$create_components_$_iter__32236(cljs.core.rest(s__32237__$2)));
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
app.patu.core.format_for_level = (function app$patu$core$format_for_level(game,p__32240){
var map__32241 = p__32240;
var map__32241__$1 = (((((!((map__32241 == null))))?(((((map__32241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32241):map__32241);
var map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"map","map",1371690461));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32241__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var input = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"map","map",1371690461),map,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"any","any",1705907423),any,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null);
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (primes,p__32243){
var vec__32244 = p__32243;
var seq__32245 = cljs.core.seq(vec__32244);
var first__32246 = cljs.core.first(seq__32245);
var seq__32245__$1 = cljs.core.next(seq__32245);
var id = first__32246;
var props = seq__32245__$1;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32247 = cljs.core.get_global_hierarchy;
return (fexpr__32247.cljs$core$IFn$_invoke$arity$0 ? fexpr__32247.cljs$core$IFn$_invoke$arity$0() : fexpr__32247.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.patu.core","dispatch"),(function (args){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","gravity","game/gravity",-1809937539),(function (p__32248){
var vec__32249 = p__32248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(1),null);
return app.patu.core.gravity_BANG_(value);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (p__32252){
var vec__32253 = p__32252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32253,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32253,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).origin(cljs.core.name(value));
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","add-level","game/add-level",-1828159671),(function (p__32256){
var vec__32257 = p__32256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32257,(0),null);
var main_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32257,(1),null);
var mid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32257,(2),null);
return app.patu.core.add_level_BANG_(main_map,mid);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","layers","game/layers",1947999590),(function (p__32260){
var vec__32261 = p__32260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(1),null);
var main_bg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(2),null);
return app.patu.core.set_layers(layers,main_bg);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),(function (p__32264){
var vec__32265 = p__32264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32265,(0),null);
var backgrounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32265,(1),null);
return app.patu.core.cam_ignore_BANG_(backgrounds);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg","comp/reg",1624858375),(function (p__32268){
var vec__32269 = p__32268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(2),null);
return app.patu.core.reg_component(id,props);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),(function (p__32272){
var vec__32273 = p__32272;
var seq__32274 = cljs.core.seq(vec__32273);
var first__32275 = cljs.core.first(seq__32274);
var seq__32274__$1 = cljs.core.next(seq__32274);
var _ = first__32275;
var comps = seq__32274__$1;
var seq__32276 = cljs.core.seq(comps);
var chunk__32277 = null;
var count__32278 = (0);
var i__32279 = (0);
while(true){
if((i__32279 < count__32278)){
var vec__32286 = chunk__32277.cljs$core$IIndexed$_nth$arity$2(null,i__32279);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(1),null);
app.patu.core.reg_component(id,props);


var G__32519 = seq__32276;
var G__32520 = chunk__32277;
var G__32521 = count__32278;
var G__32522 = (i__32279 + (1));
seq__32276 = G__32519;
chunk__32277 = G__32520;
count__32278 = G__32521;
i__32279 = G__32522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32276);
if(temp__5735__auto__){
var seq__32276__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32276__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32276__$1);
var G__32523 = cljs.core.chunk_rest(seq__32276__$1);
var G__32524 = c__4556__auto__;
var G__32525 = cljs.core.count(c__4556__auto__);
var G__32526 = (0);
seq__32276 = G__32523;
chunk__32277 = G__32524;
count__32278 = G__32525;
i__32279 = G__32526;
continue;
} else {
var vec__32289 = cljs.core.first(seq__32276__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32289,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32289,(1),null);
app.patu.core.reg_component(id,props);


var G__32527 = cljs.core.next(seq__32276__$1);
var G__32528 = null;
var G__32529 = (0);
var G__32530 = (0);
seq__32276 = G__32527;
chunk__32277 = G__32528;
count__32278 = G__32529;
i__32279 = G__32530;
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
var G__32292 = cljs.core.first(props);
var G__32292__$1 = (((G__32292 instanceof cljs.core.Keyword))?G__32292.fqn:null);
switch (G__32292__$1) {
case "cam/follow":
return app.patu.cam.follow(comp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32292__$1)].join('')));

}
}));
} else {
return comp.action((function (){
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(comp) : props.call(null,comp));
}));
}
});
app.patu.core.on_handler = (function app$patu$core$on_handler(comp,p__32293){
var vec__32294 = p__32293;
var seq__32295 = cljs.core.seq(vec__32294);
var first__32296 = cljs.core.first(seq__32295);
var seq__32295__$1 = cljs.core.next(seq__32295);
var key = first__32296;
var props = seq__32295__$1;
var handler = (function (obj){
var G__32297 = key;
var G__32297__$1 = (((G__32297 instanceof cljs.core.Keyword))?G__32297.fqn:null);
switch (G__32297__$1) {
case "headbump":
var seq__32298 = cljs.core.seq(props);
var chunk__32299 = null;
var count__32300 = (0);
var i__32301 = (0);
while(true){
if((i__32301 < count__32300)){
var prop = chunk__32299.cljs$core$IIndexed$_nth$arity$2(null,i__32301);
if(cljs.core.truth_(app.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__32304_32537 = cljs.core.second(prop);
(fexpr__32304_32537.cljs$core$IFn$_invoke$arity$0 ? fexpr__32304_32537.cljs$core$IFn$_invoke$arity$0() : fexpr__32304_32537.call(null));
} else {
}


var G__32538 = seq__32298;
var G__32539 = chunk__32299;
var G__32540 = count__32300;
var G__32541 = (i__32301 + (1));
seq__32298 = G__32538;
chunk__32299 = G__32539;
count__32300 = G__32540;
i__32301 = G__32541;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32298);
if(temp__5735__auto__){
var seq__32298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32298__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32298__$1);
var G__32546 = cljs.core.chunk_rest(seq__32298__$1);
var G__32547 = c__4556__auto__;
var G__32548 = cljs.core.count(c__4556__auto__);
var G__32549 = (0);
seq__32298 = G__32546;
chunk__32299 = G__32547;
count__32300 = G__32548;
i__32301 = G__32549;
continue;
} else {
var prop = cljs.core.first(seq__32298__$1);
if(cljs.core.truth_(app.patu.components.cis(obj,cljs.core.first(prop)))){
var fexpr__32305_32550 = cljs.core.second(prop);
(fexpr__32305_32550.cljs$core$IFn$_invoke$arity$0 ? fexpr__32305_32550.cljs$core$IFn$_invoke$arity$0() : fexpr__32305_32550.call(null));
} else {
}


var G__32551 = cljs.core.next(seq__32298__$1);
var G__32552 = null;
var G__32553 = (0);
var G__32554 = (0);
seq__32298 = G__32551;
chunk__32299 = G__32552;
count__32300 = G__32553;
i__32301 = G__32554;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32297__$1)].join('')));

}
});
return app.patu.components.on(comp,key,handler);
});
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","comp","evt/comp",1192064753),(function (p__32306){
var vec__32307 = p__32306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32307,(0),null);
var vec__32310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32307,(1),null);
var seq__32311 = cljs.core.seq(vec__32310);
var first__32312 = cljs.core.first(seq__32311);
var seq__32311__$1 = cljs.core.next(seq__32311);
var id = first__32312;
var args = seq__32311__$1;
var comp = app.patu.core.get_component(id);
var seq__32313 = cljs.core.seq(args);
var chunk__32314 = null;
var count__32315 = (0);
var i__32316 = (0);
while(true){
if((i__32316 < count__32315)){
var vec__32325 = chunk__32314.cljs$core$IIndexed$_nth$arity$2(null,i__32316);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32325,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32325,(1),null);
var G__32328_32555 = method;
var G__32328_32556__$1 = (((G__32328_32555 instanceof cljs.core.Keyword))?G__32328_32555.fqn:null);
switch (G__32328_32556__$1) {
case "action":
app.patu.core.action_handler(comp,res);

break;
case "on":
app.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32328_32556__$1)].join('')));

}


var G__32558 = seq__32313;
var G__32559 = chunk__32314;
var G__32560 = count__32315;
var G__32561 = (i__32316 + (1));
seq__32313 = G__32558;
chunk__32314 = G__32559;
count__32315 = G__32560;
i__32316 = G__32561;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32313);
if(temp__5735__auto__){
var seq__32313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32313__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32313__$1);
var G__32562 = cljs.core.chunk_rest(seq__32313__$1);
var G__32563 = c__4556__auto__;
var G__32564 = cljs.core.count(c__4556__auto__);
var G__32565 = (0);
seq__32313 = G__32562;
chunk__32314 = G__32563;
count__32315 = G__32564;
i__32316 = G__32565;
continue;
} else {
var vec__32329 = cljs.core.first(seq__32313__$1);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(1),null);
var G__32332_32566 = method;
var G__32332_32567__$1 = (((G__32332_32566 instanceof cljs.core.Keyword))?G__32332_32566.fqn:null);
switch (G__32332_32567__$1) {
case "action":
app.patu.core.action_handler(comp,res);

break;
case "on":
app.patu.core.on_handler(comp,res);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32332_32567__$1)].join('')));

}


var G__32569 = cljs.core.next(seq__32313__$1);
var G__32570 = null;
var G__32571 = (0);
var G__32572 = (0);
seq__32313 = G__32569;
chunk__32314 = G__32570;
count__32315 = G__32571;
i__32316 = G__32572;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-down","evt/key-down",998319446),(function (p__32333){
var vec__32334 = p__32333;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32334,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32334,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32334,(2),null);
return app.patu.events.key_down(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-press","evt/key-press",848937187),(function (p__32337){
var vec__32338 = p__32337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32338,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32338,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32338,(2),null);
return app.patu.events.key_press(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-press-rep","evt/key-press-rep",1204193481),(function (p__32341){
var vec__32342 = p__32341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32342,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32342,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32342,(2),null);
return app.patu.events.key_press_rep(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","key-release","evt/key-release",-402971764),(function (p__32345){
var vec__32346 = p__32345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32346,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32346,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32346,(2),null);
return app.patu.events.key_release(id,handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","char-input","evt/char-input",-1820885102),(function (p__32349){
var vec__32350 = p__32349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).charInput(handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","mouse-down","evt/mouse-down",647002564),(function (p__32353){
var vec__32354 = p__32353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseDown(handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","mouse-click","evt/mouse-click",1256777931),(function (p__32357){
var vec__32358 = p__32357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32358,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32358,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseClick(handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","mouse-release","evt/mouse-release",-1151907558),(function (p__32361){
var vec__32362 = p__32361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32362,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32362,(1),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).mouseRelease(handler);
}));
app.patu.core.key_down_QMARK_ = (function app$patu$core$key_down_QMARK_(id){
return app.patu.events.key_down_QMARK_(id);
});
app.patu.core.key_pressed_QMARK_ = (function app$patu$core$key_pressed_QMARK_(k){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).keyIsPressed(cljs.core.name(k));
});
app.patu.core.key_pressed_rep_QMARK_ = (function app$patu$core$key_pressed_rep_QMARK_(k){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).keyIsPressedRep(cljs.core.name(k));
});
app.patu.core.key_released_QMARK_ = (function app$patu$core$key_released_QMARK_(k){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).keyReleased(cljs.core.name(k));
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
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","action","evt/action",-811138293),(function (p__32365){
var vec__32366 = p__32365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32366,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32366,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32366,(2),null);
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
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","render","evt/render",-1409503371),(function (p__32369){
var vec__32370 = p__32369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(2),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).render(cljs.core.name(id),handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","collides","evt/collides",361392002),(function (p__32373){
var vec__32374 = p__32373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32374,(0),null);
var vec__32377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32374,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32377,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32377,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32374,(2),null);
var comp = app.patu.core.get_component(id);
if(cljs.core.truth_(comp.collides)){
return comp.collides(cljs.core.name(target),handler);
} else {
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).collides(cljs.core.name(id),cljs.core.name(target),handler);
}
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","overlaps","evt/overlaps",1397807447),(function (p__32380){
var vec__32381 = p__32380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32381,(0),null);
var vec__32384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32381,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32384,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32384,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32381,(2),null);
var comp = app.patu.core.get_component(id);
return comp.overlaps(cljs.core.name(target),handler);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("evt","on","evt/on",173779189),(function (p__32388){
var vec__32389 = p__32388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(0),null);
var vec__32392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(2),null);
var comp = (function (){var or__4126__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return id;
}
})();
return comp.on(cljs.core.name(target),(function (p1__32387_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__32387_SHARP_) : handler.call(null,p1__32387_SHARP_));
}));
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","loop","game/loop",-398720195),(function (p__32395){
var vec__32396 = p__32395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(2),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).loop(id,func);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("game","wait","game/wait",-232339963),(function (p__32399){
var vec__32400 = p__32399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32400,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32400,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32400,(2),null);
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)).wait(id,func);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("comp","play","comp/play",-581544151),(function (p__32403){
var vec__32404 = p__32403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32404,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32404,(1),null);
var tune = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32404,(2),null);
var comp = app.patu.core.get_component(id);
return comp.play(cljs.core.name(tune));
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add","component/add",1526013882),(function (p__32407){
var vec__32408 = p__32407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(0),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(1),null);
return app.patu.core.add_component_BANG_(nodes);
}));
app.patu.core.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add-n","component/add-n",-566334132),(function (p__32411){
var vec__32412 = p__32411;
var seq__32413 = cljs.core.seq(vec__32412);
var first__32414 = cljs.core.first(seq__32413);
var seq__32413__$1 = cljs.core.next(seq__32413);
var _ = first__32414;
var nodes_coll = seq__32413__$1;
var seq__32415 = cljs.core.seq(nodes_coll);
var chunk__32416 = null;
var count__32417 = (0);
var i__32418 = (0);
while(true){
if((i__32418 < count__32417)){
var nodes = chunk__32416.cljs$core$IIndexed$_nth$arity$2(null,i__32418);
app.patu.core.add_component_BANG_(nodes);


var G__32577 = seq__32415;
var G__32578 = chunk__32416;
var G__32579 = count__32417;
var G__32580 = (i__32418 + (1));
seq__32415 = G__32577;
chunk__32416 = G__32578;
count__32417 = G__32579;
i__32418 = G__32580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32415);
if(temp__5735__auto__){
var seq__32415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32415__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32415__$1);
var G__32581 = cljs.core.chunk_rest(seq__32415__$1);
var G__32582 = c__4556__auto__;
var G__32583 = cljs.core.count(c__4556__auto__);
var G__32584 = (0);
seq__32415 = G__32581;
chunk__32416 = G__32582;
count__32417 = G__32583;
i__32418 = G__32584;
continue;
} else {
var nodes = cljs.core.first(seq__32415__$1);
app.patu.core.add_component_BANG_(nodes);


var G__32585 = cljs.core.next(seq__32415__$1);
var G__32586 = null;
var G__32587 = (0);
var G__32588 = (0);
seq__32415 = G__32585;
chunk__32416 = G__32586;
count__32417 = G__32587;
i__32418 = G__32588;
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
var seq__32419 = cljs.core.seq(vals);
var chunk__32420 = null;
var count__32421 = (0);
var i__32422 = (0);
while(true){
if((i__32422 < count__32421)){
var val = chunk__32420.cljs$core$IIndexed$_nth$arity$2(null,i__32422);
app.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__32589 = seq__32419;
var G__32590 = chunk__32420;
var G__32591 = count__32421;
var G__32592 = (i__32422 + (1));
seq__32419 = G__32589;
chunk__32420 = G__32590;
count__32421 = G__32591;
i__32422 = G__32592;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32419);
if(temp__5735__auto__){
var seq__32419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32419__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32419__$1);
var G__32593 = cljs.core.chunk_rest(seq__32419__$1);
var G__32594 = c__4556__auto__;
var G__32595 = cljs.core.count(c__4556__auto__);
var G__32596 = (0);
seq__32419 = G__32593;
chunk__32420 = G__32594;
count__32421 = G__32595;
i__32422 = G__32596;
continue;
} else {
var val = cljs.core.first(seq__32419__$1);
app.patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(val);


var G__32597 = cljs.core.next(seq__32419__$1);
var G__32598 = null;
var G__32599 = (0);
var G__32600 = (0);
seq__32419 = G__32597;
chunk__32420 = G__32598;
count__32421 = G__32599;
i__32422 = G__32600;
continue;
}
} else {
return null;
}
}
break;
}
});
app.patu.core.quad_BANG_ = (function app$patu$core$quad_BANG_(game,p__32423){
var vec__32424 = p__32423;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424,(3),null);
return game.quad(a,b,c,d);
});
app.patu.core.quad = (function app$patu$core$quad(args){
return app.patu.core.quad_BANG_(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),args);
});
app.patu.core.neg = (function app$patu$core$neg(num){
return ((-1) * num);
});
app.patu.core.call = (function app$patu$core$call(id,prop){
var fexpr__32427 = goog.object.get(app.patu.core.get_component(id),cljs.core.name(prop));
return (fexpr__32427.cljs$core$IFn$_invoke$arity$0 ? fexpr__32427.cljs$core$IFn$_invoke$arity$0() : fexpr__32427.call(null));
});
app.patu.core.play = (function app$patu$core$play(id,anim_id){
if(cljs.core.object_QMARK_(id)){
return id.play(cljs.core.name(anim_id));
} else {
var temp__5735__auto__ = app.patu.core.get_component(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
try{return comp.play(cljs.core.name(anim_id));
}catch (e32428){if((e32428 instanceof Error)){
var err = e32428;
return console.warn(err);
} else {
throw e32428;

}
}} else {
return null;
}
}
});
app.patu.core.sleep = (function app$patu$core$sleep(f,ms){
return setTimeout(f,ms);
});
app.patu.core.change_sprite = (function app$patu$core$change_sprite(p__32429){
var vec__32430 = p__32429;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(1),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(3),null);
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
var G__32434 = arguments.length;
switch (G__32434) {
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
var G__32436 = arguments.length;
switch (G__32436) {
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
var vec__32437 = anim;
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(0),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(2),null);
var anim_speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(3),null);
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
