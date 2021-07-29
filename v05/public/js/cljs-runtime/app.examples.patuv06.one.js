goog.provide('app.examples.patuv06.one');
goog.require('cljs.core');
app.examples.patuv06.one.kaboom = module$kaboom$v06.default;
app.examples.patuv06.one.k = app.examples.patuv06.one.kaboom(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true], null)));
app.examples.patuv06.one.k.loadRoot("https://kaboomjs.com/pub/examples/");
app.examples.patuv06.one.k.loadSprite("sprite/bg","img/bg.png");
app.examples.patuv06.one.k.loadSprite("birdy","img/birdy.png");
app.examples.patuv06.one.reg_comp = (function app$examples$patuv06$one$reg_comp(id,data){
return app.examples.patuv06.one.k.reg_comp(cljs.core.name(id),cljs.core.clj__GT_js(data));
});
app.examples.patuv06.one.reg_comp(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"birdy","birdy",-2144249903)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null)], null));
app.examples.patuv06.one.key_down = (function app$examples$patuv06$one$key_down(dir,cb){
return app.examples.patuv06.one.k.keyDown(cljs.core.name(dir),cb);
});
app.examples.patuv06.one.key_down(new cljs.core.Keyword(null,"left","left",-399115937),(function (obj){
var player = obj.player;
return (player.pos.x = (player.pos.x + ((-1) * (10))));
}));
app.examples.patuv06.one.key_down(new cljs.core.Keyword(null,"right","right",-452581833),(function (obj){
var player = obj.player;
return (player.pos.x = (player.pos.x + ((1) * (10))));
}));
app.examples.patuv06.one.app = (function app$examples$patuv06$one$app(){
return null;
});

//# sourceMappingURL=app.examples.patuv06.one.js.map
