goog.provide('app.kaboomv5.audio');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
app.kaboomv5.audio.min_gain = (0);
app.kaboomv5.audio.max_gain = (3);
app.kaboomv5.audio.min_speed = (0);
app.kaboomv5.audio.max_speed = (3);
app.kaboomv5.audio.min_detune = (-1200);
app.kaboomv5.audio.max_detune = (1200);
app.kaboomv5.audio.audio_context = (function app$kaboomv5$audio$audio_context(){
if(cljs.core.truth_(AudioContext)){
return (new AudioContext());
} else {
return (new webkitAudioContext());
}
});
app.kaboomv5.audio.create_gain = (function app$kaboomv5$audio$create_gain(context){
return context.createGain();
});
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.audio !== 'undefined') && (typeof app.kaboomv5.audio.audio !== 'undefined')){
} else {
app.kaboomv5.audio.audio = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clips","clips",-658868842),null], null));
}
app.kaboomv5.audio.ctx = (function app$kaboomv5$audio$ctx(){
return new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.audio.audio));
});
app.kaboomv5.audio.init_BANG_ = (function app$kaboomv5$audio$init_BANG_(){
var ctx = app.kaboomv5.audio.audio_context();
var gain_node = app.kaboomv5.audio.create_gain(ctx);
var master_node = gain_node;
master_node.connect(ctx.destination);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.audio.audio,cljs.core.assoc,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gain-node","gain-node",-1178526839),gain_node,new cljs.core.Keyword(null,"master-node","master-node",1711536328),master_node], 0));

return true;
});
app.kaboomv5.audio.play = (function app$kaboomv5$audio$play(var_args){
var G__26624 = arguments.length;
switch (G__26624) {
case 1:
return app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$1 = (function (sound){
return app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$2(sound,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"volume","volume",1900330799),(1),new cljs.core.Keyword(null,"speed","speed",1257663751),(1),new cljs.core.Keyword(null,"detune","detune",316572245),(0),new cljs.core.Keyword(null,"seek","seek",758996602),(0)], null));
}));

(app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$2 = (function (sound,p__26634){
var map__26635 = p__26634;
var map__26635__$1 = (((((!((map__26635 == null))))?(((((map__26635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26635):map__26635);
var loop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798));
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"volume","volume",1900330799));
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var detune = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"detune","detune",316572245));
var seek = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"seek","seek",758996602));
var src_node = app.kaboomv5.audio.ctx().createBufferSource();
var gain_node = app.kaboomv5.audio.ctx().createGain();
var pos = (function (){var or__4126__auto__ = seek;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),false,new cljs.core.Keyword(null,"start-time","start-time",814801386),(app.kaboomv5.audio.ctx().currentTime - pos)], null));
(src_node.buffer = sound);

(src_node.loop = loop_QMARK_);

src_node.connect(gain_node);

gain_node.connect(new cljs.core.Keyword(null,"master-node","master-node",1711536328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.audio.audio)));

src_node.start((0),pos);

return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
src_node.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start-time","start-time",814801386),app.kaboomv5.audio.ctx().currentTime], 0));
}
}),new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
src_node.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),app.kaboomv5.audio.ctx().currentTime], 0));
}
}),new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),(function (){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}),new cljs.core.Keyword(null,"speed","speed",1257663751),(function (val){
return (src_node.playbackRate.value = app.kaboomv5.math.core.clamp(val,app.kaboomv5.audio.max_speed,app.kaboomv5.audio.min_speed));
}),new cljs.core.Keyword(null,"detune","detune",316572245),(function (val){
return (src_node.detune.value = app.kaboomv5.math.core.clamp(val,app.kaboomv5.audio.max_detune,app.kaboomv5.audio.min_detune));
}),new cljs.core.Keyword(null,"volume","volume",1900330799),(function (val){
return (gain_node.gain.value = app.kaboomv5.math.core.clamp(val,app.kaboomv5.audio.max_gain,app.kaboomv5.audio.min_gain));
})], null));
}));

(app.kaboomv5.audio.play.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.kaboomv5.audio.js.map
