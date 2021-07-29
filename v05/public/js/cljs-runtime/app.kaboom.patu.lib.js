goog.provide('app.kaboom.patu.lib');
goog.require('cljs.core');
goog.require('app.kaboom.patu.utils');
app.kaboom.patu.lib.go = (function app$kaboom$patu$lib$go(var_args){
var G__45373 = arguments.length;
switch (G__45373) {
case 2:
return app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$2 = (function (game,id){
return app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$3(game,cljs.core.name(id),null);
}));

(app.kaboom.patu.lib.go.cljs$core$IFn$_invoke$arity$3 = (function (game,id,props){
return game.go(cljs.core.name(id),cljs.core.clj__GT_js(props));
}));

(app.kaboom.patu.lib.go.cljs$lang$maxFixedArity = 3);

/**
 * Returns the root asset url
 * example usage:
 *    (load-root game) => https://kaboomjs.com/pub/examples/
 */
app.kaboom.patu.lib.load_root = (function app$kaboom$patu$lib$load_root(var_args){
var G__45375 = arguments.length;
switch (G__45375) {
case 1:
return app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.loadRoot();
}));

(app.kaboom.patu.lib.load_root.cljs$core$IFn$_invoke$arity$2 = (function (game,url){
return game.loadRoot(url);
}));

(app.kaboom.patu.lib.load_root.cljs$lang$maxFixedArity = 2);

app.kaboom.patu.lib.load_sprite = (function app$kaboom$patu$lib$load_sprite(var_args){
var G__45377 = arguments.length;
switch (G__45377) {
case 3:
return app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (game,title,url){
return game.loadSprite(cljs.core.name(title),url);
}));

(app.kaboom.patu.lib.load_sprite.cljs$core$IFn$_invoke$arity$4 = (function (game,title,url,opts){
return game.loadSprite(cljs.core.name(title),url,cljs.core.clj__GT_js(opts));
}));

(app.kaboom.patu.lib.load_sprite.cljs$lang$maxFixedArity = 4);

app.kaboom.patu.lib.load_aseprite = (function app$kaboom$patu$lib$load_aseprite(game,title,url,url2){
if(cljs.core.truth_(app.kaboom.patu.utils.js_get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"loadAseprite","loadAseprite",-2054403580)))){
return game.loadAseprite(cljs.core.name(title),url,url2);
} else {
return null;
}
});
app.kaboom.patu.lib.load_sound = (function app$kaboom$patu$lib$load_sound(game,id,src){
return game.loadSound(cljs.core.name(id),src);
});
app.kaboom.patu.lib.play = (function app$kaboom$patu$lib$play(game,id){
return game.play(cljs.core.name(id));
});
app.kaboom.patu.lib.sprite = (function app$kaboom$patu$lib$sprite(game,title){
return game.sprite(cljs.core.name(title));
});
app.kaboom.patu.lib.solid = (function app$kaboom$patu$lib$solid(game){
return game.solid();
});
app.kaboom.patu.lib.scale = (function app$kaboom$patu$lib$scale(game,value){
return game.scale(value);
});
app.kaboom.patu.lib.layers = (function app$kaboom$patu$lib$layers(game,layers,main_layer){
return game.layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
app.kaboom.patu.lib.add_level = (function app$kaboom$patu$lib$add_level(game,map,config){
return game.addLevel(cljs.core.clj__GT_js(map),cljs.core.clj__GT_js(config));
});
app.kaboom.patu.lib.key_down = (function app$kaboom$patu$lib$key_down(game,id,handler){
if(cljs.core.vector_QMARK_(id)){
return game.keyDown(cljs.core.clj__GT_js(id),handler);
} else {
return game.keyDown(cljs.core.name(id),handler);
}
});
app.kaboom.patu.lib.key_press = (function app$kaboom$patu$lib$key_press(game,id,handler){
return game.keyPress(cljs.core.name(id),handler);
});
app.kaboom.patu.lib.key_release = (function app$kaboom$patu$lib$key_release(game,id,handler){
if(cljs.core.vector_QMARK_(id)){
return game.keyRelease(cljs.core.clj__GT_js(id),handler);
} else {
return game.keyRelease(cljs.core.name(id),handler);
}
});
app.kaboom.patu.lib.key_is_down = (function app$kaboom$patu$lib$key_is_down(game,key){
return game.keyIsDown(cljs.core.name(key));
});
app.kaboom.patu.lib.add = (function app$kaboom$patu$lib$add(game,comps){
return game.add(cljs.core.clj__GT_js(comps));
});
app.kaboom.patu.lib.scene = (function app$kaboom$patu$lib$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
/**
 * Starts a scene:
 * - example usage: (start! :scene/main)
 */
app.kaboom.patu.lib.start_BANG_ = (function app$kaboom$patu$lib$start_BANG_(game,scene_id){
return game.start(cljs.core.name(scene_id));
});
app.kaboom.patu.lib.vec2 = (function app$kaboom$patu$lib$vec2(var_args){
var G__45379 = arguments.length;
switch (G__45379) {
case 2:
return app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2 = (function (game,val){
return app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3(game,val,val);
}));

(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$3 = (function (game,val,val2){
return game.vec2(val,val2);
}));

(app.kaboom.patu.lib.vec2.cljs$lang$maxFixedArity = 3);

app.kaboom.patu.lib.dt = (function app$kaboom$patu$lib$dt(game){
return game.dt();
});
app.kaboom.patu.lib.cam_scale = (function app$kaboom$patu$lib$cam_scale(var_args){
var G__45381 = arguments.length;
switch (G__45381) {
case 1:
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1 = (function (game){
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,null);
}));

(app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
if(cljs.core.truth_(pos)){
return game.camScale(pos);
} else {
return game.camScale();
}
}));

(app.kaboom.patu.lib.cam_scale.cljs$lang$maxFixedArity = 2);

app.kaboom.patu.lib.zoom_out = (function app$kaboom$patu$lib$zoom_out(game){
var val = app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(game).sub(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(game,app.kaboom.patu.lib.dt(game)));
if((val.x > 0.5)){
console.log(val);

return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,val);
} else {
return null;
}
});
app.kaboom.patu.lib.zoom_in = (function app$kaboom$patu$lib$zoom_in(game){
var val = app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$1(game).add(app.kaboom.patu.lib.vec2.cljs$core$IFn$_invoke$arity$2(game,app.kaboom.patu.lib.dt(game)));
if((val.x < (2))){
return app.kaboom.patu.lib.cam_scale.cljs$core$IFn$_invoke$arity$2(game,val);
} else {
return null;
}
});
app.kaboom.patu.lib.cam_pos = (function app$kaboom$patu$lib$cam_pos(var_args){
var G__45383 = arguments.length;
switch (G__45383) {
case 1:
return app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.camPos();
}));

(app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
return game.camPos(pos);
}));

(app.kaboom.patu.lib.cam_pos.cljs$lang$maxFixedArity = 2);

app.kaboom.patu.lib.follow_comp = (function app$kaboom$patu$lib$follow_comp(game,comp){
var pos = comp.pos;
console.log(pos);

return app.kaboom.patu.lib.cam_pos.cljs$core$IFn$_invoke$arity$2(game,pos);
});
app.kaboom.patu.lib.cam_ignore = (function app$kaboom$patu$lib$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
app.kaboom.patu.lib.randd = (function app$kaboom$patu$lib$randd(game,v1,v2){
return game.rand(v1,v2);
});
app.kaboom.patu.lib.gravity = (function app$kaboom$patu$lib$gravity(game,value){
return game.gravity(value);
});
app.kaboom.patu.lib.height = (function app$kaboom$patu$lib$height(game){
return game.height();
});
app.kaboom.patu.lib.width = (function app$kaboom$patu$lib$width(game){
return game.width();
});
app.kaboom.patu.lib.destroy = (function app$kaboom$patu$lib$destroy(game,comp){
return game.destroy(comp);
});
app.kaboom.patu.lib.center = (function app$kaboom$patu$lib$center(game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.kaboom.patu.lib.width(game) / (2)),(app.kaboom.patu.lib.height(game) / (2))], null);
});
app.kaboom.patu.lib.add_loader = (function app$kaboom$patu$lib$add_loader(game,loader_fn){
return game.addLoader(loader_fn);
});

//# sourceMappingURL=app.kaboom.patu.lib.js.map
