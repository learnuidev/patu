goog.provide('app.phaser.thimphu');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
var module$node_modules$Phaser$src$phaser=shadow.js.require("module$node_modules$Phaser$src$phaser", {});
app.phaser.thimphu.app_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background_image","background_image",-276406689),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"source","source",-433931539),"assets/images/battle/background.png"], null)], null),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(320),new cljs.core.Keyword(null,"y","y",-1757859776),(240)], null),new cljs.core.Keyword(null,"texture","texture",-266291651),"background_image"], null),new cljs.core.Keyword(null,"title_message","title_message",-1554795375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"65px Arial",new cljs.core.Keyword(null,"fill","fill",883462889),"#000000"], null)], null),new cljs.core.Keyword(null,"start_message","start_message",1640901002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(150),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"65px Arial",new cljs.core.Keyword(null,"fill","fill",883462889),"#000000"], null)], null)], null)], null);
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.thimphu !== 'undefined') && (typeof app.phaser.thimphu.boot_scene !== 'undefined')){
} else {
app.phaser.thimphu.boot_scene = (new Phaser.Scene("BootScene"));
}
(app.phaser.thimphu.boot_scene.levels = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"TitleScene",new cljs.core.Keyword(null,"path","path",-188191168),"assets/levels/battle/title_screen.png"], null)], null)));
app.phaser.thimphu.bs_preload_BANG_ = (function app$phaser$thimphu$bs_preload_BANG_(){
var this$ = this;
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function app$phaser$thimphu$bs_preload_BANG__$_iter__26772(s__26773){
return (new cljs.core.LazySeq(null,(function (){
var s__26773__$1 = s__26773;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26773__$1);
if(temp__5735__auto__){
var s__26773__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26773__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26773__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26775 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26774 = (0);
while(true){
if((i__26774 < size__4528__auto__)){
var level = cljs.core._nth(c__4527__auto__,i__26774);
cljs.core.chunk_append(b__26775,this$.load.json(level.path));

var G__26776 = (i__26774 + (1));
i__26774 = G__26776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26775),app$phaser$thimphu$bs_preload_BANG__$_iter__26772(cljs.core.chunk_rest(s__26773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26775),null);
}
} else {
var level = cljs.core.first(s__26773__$2);
return cljs.core.cons(this$.load.json(level.path),app$phaser$thimphu$bs_preload_BANG__$_iter__26772(cljs.core.rest(s__26773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(app.phaser.thimphu.level.levels);
})());
});
(app.phaser.thimphu.boot_scene.preload = app.phaser.thimphu.bs_preload_BANG_);
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.thimphu !== 'undefined') && (typeof app.phaser.thimphu.scene !== 'undefined')){
} else {
app.phaser.thimphu.scene = (new Phaser.Scene("Title"));
}
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.thimphu !== 'undefined') && (typeof app.phaser.thimphu.title_scene !== 'undefined')){
} else {
app.phaser.thimphu.title_scene = (new Phaser.Scene("TitleScene"));
}
app.phaser.thimphu.preload_BANG_ = (function app$phaser$thimphu$preload_BANG_(){
var this$ = this;
return this$.load.image("background_image","assets/images/battle/background.png");
});
(app.phaser.thimphu.title_scene.preload = app.phaser.thimphu.preload_BANG_);
app.phaser.thimphu.create_BANG_ = (function app$phaser$thimphu$create_BANG_(){
var this$ = this;
var background = this$.add.sprite((0),(0),"background_image");
var _ = background.setOrigin((0),(0));
var title_text = this$.add.text((100),(100),"Thimphu Town");
return title_text;
});
(app.phaser.thimphu.title_scene.create = app.phaser.thimphu.create_BANG_);
app.phaser.thimphu.config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),Phaser.AUTO,new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Var(function(){return app.phaser.thimphu.scene;},new cljs.core.Symbol("app.phaser.thimphu","scene","app.phaser.thimphu/scene",-1665695517,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.phaser.thimphu","app.phaser.thimphu",1795761243,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),"app/phaser/thimphu.cljs",15,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.phaser.thimphu.scene)?app.phaser.thimphu.scene.cljs$lang$test:null)]))], null);
app.phaser.thimphu.create_game = (function app$phaser$thimphu$create_game(){
var new_game = (new Phaser.Game(cljs.core.clj__GT_js(app.phaser.thimphu.config)));
new_game.scene.add("TitleScene",app.phaser.thimphu.title_scene);

return new_game.scene.start("TitleScene");
});

//# sourceMappingURL=app.phaser.thimphu.js.map
