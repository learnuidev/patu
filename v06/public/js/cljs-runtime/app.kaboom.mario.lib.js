goog.provide('app.kaboom.mario.lib');
goog.require('cljs.core');
app.kaboom.mario.lib.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY], null));
app.kaboom.mario.lib.kaboom = (function app$kaboom$mario$lib$kaboom(config){
return kaboom(cljs.core.clj__GT_js(config));
});
console.log(app.kaboom.mario.lib.kaboom);
app.kaboom.mario.lib.init_game_BANG_ = (function app$kaboom$mario$lib$init_game_BANG_(p__69376){
var map__69377 = p__69376;
var map__69377__$1 = (((((!((map__69377 == null))))?(((((map__69377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69377):map__69377);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69377__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var game = app.kaboom.mario.lib.kaboom(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.9], null)], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.mario.lib.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game","game",-441523833),game);
});
app.kaboom.mario.lib.load_root = (function app$kaboom$mario$lib$load_root(game,url){
return game.loadRoot(url);
});
app.kaboom.mario.lib.load_root_BANG_ = (function app$kaboom$mario$lib$load_root_BANG_(url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state));
return app.kaboom.mario.lib.load_root(game,url);
});
app.kaboom.mario.lib.load_sprite = (function app$kaboom$mario$lib$load_sprite(game,title,url){
return game.loadSprite(cljs.core.name(title),url);
});
app.kaboom.mario.lib.load_sprite_BANG_ = (function app$kaboom$mario$lib$load_sprite_BANG_(title,url){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state));
return app.kaboom.mario.lib.load_sprite(game,title,url);
});
app.kaboom.mario.lib.sprite = (function app$kaboom$mario$lib$sprite(game,title){
return game.sprite(cljs.core.name(title));
});
app.kaboom.mario.lib.solid = (function app$kaboom$mario$lib$solid(game){
return game.solid();
});
app.kaboom.mario.lib.scale = (function app$kaboom$mario$lib$scale(game,value){
return game.scale(value);
});
app.kaboom.mario.lib.layers = (function app$kaboom$mario$lib$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.kaboom.mario.lib.add_level = (function app$kaboom$mario$lib$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.kaboom.mario.lib.add_level_BANG_ = (function app$kaboom$mario$lib$add_level_BANG_(m,level_id){
var map__69379 = cljs.core.deref(app.kaboom.mario.lib.game_state);
var map__69379__$1 = (((((!((map__69379 == null))))?(((((map__69379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69379):map__69379);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69379__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69379__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(levels,level_id);
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
return app.kaboom.mario.lib.add_level(game,m,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(game) : handler.call(null,game)));
} else {
return null;
}
});
app.kaboom.mario.lib.key_down = (function app$kaboom$mario$lib$key_down(game,id,handler){
return game.keyDown(cljs.core.name(id),handler);
});
app.kaboom.mario.lib.key_press = (function app$kaboom$mario$lib$key_press(game,id,handler){
return game.keyPress(cljs.core.name(id),handler);
});
app.kaboom.mario.lib.key_down_BANG_ = (function app$kaboom$mario$lib$key_down_BANG_(id,handler){
return app.kaboom.mario.lib.key_down(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),id,handler);
});
app.kaboom.mario.lib.key_press_BANG_ = (function app$kaboom$mario$lib$key_press_BANG_(id,handler){
return app.kaboom.mario.lib.key_press(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),cljs.core.name(id),handler);
});
app.kaboom.mario.lib.add = (function app$kaboom$mario$lib$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.kaboom.mario.lib.scene = (function app$kaboom$mario$lib$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
app.kaboom.mario.lib.add_scene_BANG_ = (function app$kaboom$mario$lib$add_scene_BANG_(id,handler){
return app.kaboom.mario.lib.scene(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),id,handler);
});
app.kaboom.mario.lib.start = (function app$kaboom$mario$lib$start(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
app.kaboom.mario.lib.start_BANG_ = (function app$kaboom$mario$lib$start_BANG_(id){
return app.kaboom.mario.lib.start(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),id);
});
app.kaboom.mario.lib.cam_pos = (function app$kaboom$mario$lib$cam_pos(game,pos){
return game.camPos(pos);
});
app.kaboom.mario.lib.cam_pos_BANG_ = (function app$kaboom$mario$lib$cam_pos_BANG_(pos){
return app.kaboom.mario.lib.cam_pos(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),pos);
});
app.kaboom.mario.lib.gravity = (function app$kaboom$mario$lib$gravity(game,value){
return game.gravity(value);
});
app.kaboom.mario.lib.gravity_BANG_ = (function app$kaboom$mario$lib$gravity_BANG_(value){
return app.kaboom.mario.lib.gravity(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),value);
});
app.kaboom.mario.lib.cam_ignore = (function app$kaboom$mario$lib$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
app.kaboom.mario.lib.cam_ignore_BANG_ = (function app$kaboom$mario$lib$cam_ignore_BANG_(value){
return app.kaboom.mario.lib.cam_ignore(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),value);
});
app.kaboom.mario.lib.get_component = (function app$kaboom$mario$lib$get_component(state,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id,new cljs.core.Keyword(null,"comp","comp",1191953630)], null));
});
app.kaboom.mario.lib.get_component_BANG_ = (function app$kaboom$mario$lib$get_component_BANG_(id){
return app.kaboom.mario.lib.get_component(cljs.core.deref(app.kaboom.mario.lib.game_state),id);
});
if((typeof app !== 'undefined') && (typeof app.kaboom !== 'undefined') && (typeof app.kaboom.mario !== 'undefined') && (typeof app.kaboom.mario.lib !== 'undefined') && (typeof app.kaboom.mario.lib.create_component !== 'undefined')){
} else {
app.kaboom.mario.lib.create_component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__69381 = cljs.core.get_global_hierarchy;
return (fexpr__69381.cljs$core$IFn$_invoke$arity$0 ? fexpr__69381.cljs$core$IFn$_invoke$arity$0() : fexpr__69381.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom.mario.lib","create-component"),(function (_,type,props){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),(function (game,_,p__69382){
var vec__69383 = p__69382;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69383,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69383,(1),null);
return app.kaboom.mario.lib.sprite(game,id);
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solid","solid",-2023773691),(function (game,_,___$1){
return app.kaboom.mario.lib.solid(game);
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (game,_,p__69386){
var vec__69387 = p__69386;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69387,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69387,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69387,(2),null);
return game.pos(x,y);
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (game,_,___$1){
return game.body();
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (game,_,p__69390){
var vec__69391 = p__69390;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69391,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69391,(1),null);
return game.origin(cljs.core.name(id));
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,_,p__69394){
var vec__69395 = p__69394;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69395,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69395,(1),null);
return game.text(value);
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"layer","layer",-1601820589),(function (game,_,p__69398){
var vec__69399 = p__69398;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69399,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69399,(1),null);
return game.layer(cljs.core.name(value));
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (game,_,p__69402){
var vec__69403 = p__69402;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69403,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69403,(1),null);
return game.scale(value);
}));
app.kaboom.mario.lib.create_component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_,___$1,p__69406){
var vec__69407 = p__69406;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69407,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69407,(1),null);
if((props instanceof cljs.core.Keyword)){
return props;
} else {
return cljs.core.clj__GT_js(props);
}
}));
app.kaboom.mario.lib.create_components = (function app$kaboom$mario$lib$create_components(game,props){
return cljs.core.clj__GT_js((function (){var iter__4529__auto__ = (function app$kaboom$mario$lib$create_components_$_iter__69410(s__69411){
return (new cljs.core.LazySeq(null,(function (){
var s__69411__$1 = s__69411;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69411__$1);
if(temp__5735__auto__){
var s__69411__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69411__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__69411__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__69413 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__69412 = (0);
while(true){
if((i__69412 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__69412);
cljs.core.chunk_append(b__69413,app.kaboom.mario.lib.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop));

var G__69456 = (i__69412 + (1));
i__69412 = G__69456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69413),app$kaboom$mario$lib$create_components_$_iter__69410(cljs.core.chunk_rest(s__69411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69413),null);
}
} else {
var prop = cljs.core.first(s__69411__$2);
return cljs.core.cons(app.kaboom.mario.lib.create_component.cljs$core$IFn$_invoke$arity$3(game,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prop,(0)),prop),app$kaboom$mario$lib$create_components_$_iter__69410(cljs.core.rest(s__69411__$2)));
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
app.kaboom.mario.lib.add_component = (function app$kaboom$mario$lib$add_component(game,props){
return app.kaboom.mario.lib.add(game,app.kaboom.mario.lib.create_components(game,props));
});
app.kaboom.mario.lib.reg_component = (function app$kaboom$mario$lib$reg_component(id,props){
var comp = app.kaboom.mario.lib.add_component(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),props);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.mario.lib.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comp","comp",1191953630),comp,new cljs.core.Keyword(null,"props","props",453281727),props], null));

return comp;
});
app.kaboom.mario.lib.set_layers = (function app$kaboom$mario$lib$set_layers(coll,main_layer){
return app.kaboom.mario.lib.layers(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),coll,main_layer);
});
app.kaboom.mario.lib.format_for_level = (function app$kaboom$mario$lib$format_for_level(game,p__69414){
var map__69415 = p__69414;
var map__69415__$1 = (((((!((map__69415 == null))))?(((((map__69415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69415):map__69415);
var map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69415__$1,new cljs.core.Keyword(null,"map","map",1371690461));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69415__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69415__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69415__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var input = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map","map",1371690461),map,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (primes,p__69417){
var vec__69418 = p__69417;
var seq__69419 = cljs.core.seq(vec__69418);
var first__69420 = cljs.core.first(seq__69419);
var seq__69419__$1 = cljs.core.next(seq__69419);
var id = first__69420;
var props = seq__69419__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(primes,id,app.kaboom.mario.lib.create_components(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.mario.lib.game_state)),props));
}),cljs.core.PersistentArrayMap.EMPTY,components)], 0));
});
app.kaboom.mario.lib.reg_level = (function app$kaboom$mario$lib$reg_level(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboom.mario.lib.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887),id], null),handler);
});
app.kaboom.mario.lib.reg_level_BANG_ = (function app$kaboom$mario$lib$reg_level_BANG_(id,data_handler){
return app.kaboom.mario.lib.reg_level(id,(function (game){
return app.kaboom.mario.lib.format_for_level(game,(data_handler.cljs$core$IFn$_invoke$arity$0 ? data_handler.cljs$core$IFn$_invoke$arity$0() : data_handler.call(null)));
}));
});

//# sourceMappingURL=app.kaboom.mario.lib.js.map
