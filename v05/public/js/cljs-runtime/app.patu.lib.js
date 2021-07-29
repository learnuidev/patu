goog.provide('app.patu.lib');
goog.require('cljs.core');
goog.require('app.patu.utils');
app.patu.lib.go = (function app$patu$lib$go(var_args){
var G__28167 = arguments.length;
switch (G__28167) {
case 2:
return app.patu.lib.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.patu.lib.go.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.go.cljs$core$IFn$_invoke$arity$2 = (function (game,id){
return app.patu.lib.go.cljs$core$IFn$_invoke$arity$3(game,cljs.core.name(id),null);
}));

(app.patu.lib.go.cljs$core$IFn$_invoke$arity$3 = (function (game,id,props){
return game.go(cljs.core.name(id),cljs.core.clj__GT_js(props));
}));

(app.patu.lib.go.cljs$lang$maxFixedArity = 3);

/**
 * Returns the root asset url
 * example usage:
 *    (load-root game) => https://kaboomjs.com/pub/examples/
 */
app.patu.lib.load_root = (function app$patu$lib$load_root(var_args){
var G__28169 = arguments.length;
switch (G__28169) {
case 1:
return app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.loadRoot();
}));

(app.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2 = (function (game,url){
return game.loadRoot(url);
}));

(app.patu.lib.load_root.cljs$lang$maxFixedArity = 2);

app.patu.lib.load_sprite = (function app$patu$lib$load_sprite(var_args){
var G__28171 = arguments.length;
switch (G__28171) {
case 3:
return app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (game,title,url){
return game.loadSprite(cljs.core.name(title),url);
}));

(app.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4 = (function (game,title,url,opts){
return game.loadSprite(cljs.core.name(title),url,cljs.core.clj__GT_js(opts));
}));

(app.patu.lib.load_sprite.cljs$lang$maxFixedArity = 4);

app.patu.lib.load_aseprite = (function app$patu$lib$load_aseprite(game,title,url,url2){
if(cljs.core.truth_(app.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"loadAseprite","loadAseprite",-2054403580)))){
return game.loadAseprite(cljs.core.name(title),url,url2);
} else {
return null;
}
});
app.patu.lib.load_sound = (function app$patu$lib$load_sound(game,id,src){
return game.loadSound(cljs.core.name(id),src);
});
app.patu.lib.play = (function app$patu$lib$play(game,id){
return game.play(cljs.core.name(id));
});
app.patu.lib.sprite = (function app$patu$lib$sprite(game,title){
return game.sprite(cljs.core.name(title));
});
app.patu.lib.solid = (function app$patu$lib$solid(game){
return game.solid();
});
app.patu.lib.scale = (function app$patu$lib$scale(game,value){
return game.scale(value);
});
app.patu.lib.layers = (function app$patu$lib$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.patu.lib.add_level = (function app$patu$lib$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.patu.lib.key_down = (function app$patu$lib$key_down(game,id,handler){
if(cljs.core.vector_QMARK_(id)){
return game.keyDown(cljs.core.clj__GT_js(id),handler);
} else {
return game.keyDown(cljs.core.name(id),handler);
}
});
app.patu.lib.key_press = (function app$patu$lib$key_press(game,id,handler){
return game.keyPress(cljs.core.name(id),handler);
});
app.patu.lib.key_press_rep = (function app$patu$lib$key_press_rep(game,id,handler){
return game.keyPressRep(cljs.core.name(id),handler);
});
app.patu.lib.key_release = (function app$patu$lib$key_release(game,id,handler){
if(cljs.core.vector_QMARK_(id)){
return game.keyRelease(cljs.core.clj__GT_js(id),handler);
} else {
return game.keyRelease(cljs.core.name(id),handler);
}
});
app.patu.lib.key_down_QMARK_ = (function app$patu$lib$key_down_QMARK_(game,key){
return game.keyIsDown(cljs.core.name(key));
});
app.patu.lib.add = (function app$patu$lib$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.patu.lib.scene = (function app$patu$lib$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
/**
 * Starts a scene:
 * - example usage: (start! :scene/main)
 */
app.patu.lib.start_BANG_ = (function app$patu$lib$start_BANG_(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
app.patu.lib.vec2 = (function app$patu$lib$vec2(var_args){
var G__28173 = arguments.length;
switch (G__28173) {
case 2:
return app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2 = (function (game,val){
return app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3(game,val,val);
}));

(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3 = (function (game,val,val2){
return game.vec2(val,val2);
}));

(app.patu.lib.vec2.cljs$lang$maxFixedArity = 3);

app.patu.lib.dt = (function app$patu$lib$dt(game){
return game.dt();
});
app.patu.lib.cam_scale = (function app$patu$lib$cam_scale(var_args){
var G__28175 = arguments.length;
switch (G__28175) {
case 1:
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1 = (function (game){
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,null);
}));

(app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
if(cljs.core.truth_(pos)){
return game.camScale(pos);
} else {
return game.camScale();
}
}));

(app.patu.lib.cam_scale.cljs$lang$maxFixedArity = 2);

app.patu.lib.zoom_out = (function app$patu$lib$zoom_out(game){
var val = app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(game).sub(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(game,app.patu.lib.dt(game)));
if((val.x > 0.5)){
console.log(val);

return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,val);
} else {
return null;
}
});
app.patu.lib.zoom_in = (function app$patu$lib$zoom_in(game){
var val = app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(game).add(app.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(game,app.patu.lib.dt(game)));
if((val.x < (2))){
return app.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,val);
} else {
return null;
}
});
app.patu.lib.cam_pos = (function app$patu$lib$cam_pos(var_args){
var G__28177 = arguments.length;
switch (G__28177) {
case 1:
return app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.camPos();
}));

(app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
return game.camPos(pos);
}));

(app.patu.lib.cam_pos.cljs$lang$maxFixedArity = 2);

app.patu.lib.follow_comp = (function app$patu$lib$follow_comp(game,comp){
var pos = comp.pos;
console.log(pos);

return app.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2(game,pos);
});
app.patu.lib.cam_ignore = (function app$patu$lib$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
app.patu.lib.randd = (function app$patu$lib$randd(game,v1,v2){
return game.rand(v1,v2);
});
app.patu.lib.gravity = (function app$patu$lib$gravity(game,value){
return game.gravity(value);
});
app.patu.lib.height = (function app$patu$lib$height(game){
return game.height();
});
app.patu.lib.width = (function app$patu$lib$width(game){
return game.width();
});
app.patu.lib.destroy = (function app$patu$lib$destroy(game,comp){
return game.destroy(comp);
});
app.patu.lib.center = (function app$patu$lib$center(game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.patu.lib.width(game) / (2)),(app.patu.lib.height(game) / (2))], null);
});
app.patu.lib.add_loader = (function app$patu$lib$add_loader(game,loader_fn){
return game.addLoader(loader_fn);
});

//# sourceMappingURL=app.patu.lib.js.map
