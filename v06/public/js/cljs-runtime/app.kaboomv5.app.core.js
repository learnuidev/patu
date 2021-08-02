goog.provide('app.kaboomv5.app.core');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboom.patu.utils');
goog.require('app.kaboomv5.app.state');
goog.require('app.kaboomv5.app.events');
goog.require('app.kaboomv5.app.utils');
goog.require('app.kaboomv5.app.init');
app.kaboomv5.app.core.mouse_pos = (function app$kaboomv5$app$core$mouse_pos(){
return new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.gl = (function app$kaboomv5$app$core$gl(){
return new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.mouse_clicked_QMARK_ = (function app$kaboomv5$app$core$mouse_clicked_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pressed","pressed",1100937946),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
});
app.kaboomv5.app.core.mouse_down_QMARK_ = (function app$kaboomv5$app$core$mouse_down_QMARK_(){
return ((app.kaboomv5.app.core.mouse_clicked_QMARK_()) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)))));
});
app.kaboomv5.app.core.mouse_released_QMARK_ = (function app$kaboomv5$app$core$mouse_released_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"released","released",381037203),new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
});
app.kaboomv5.app.core.key_pressed_QMARK_ = (function app$kaboomv5$app$core$key_pressed_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
app.kaboomv5.app.core.key_pressed_rep_QMARK_ = (function app$kaboomv5$app$core$key_pressed_rep_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"pressed","pressed",1100937946))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"rpressed","rpressed",-1542572484))));
});
app.kaboomv5.app.core.key_down_QMARK_ = (function app$kaboomv5$app$core$key_down_QMARK_(id){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null));
return ((app.kaboomv5.app.core.key_pressed_rep_QMARK_(id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"down","down",1565245570))));
});
app.kaboomv5.app.core.key_released_QMARK_ = (function app$kaboomv5$app$core$key_released_QMARK_(id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"released","released",381037203),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-states","key-states",800337131),id], null)));
});
app.kaboomv5.app.core.char_inputted = (function app$kaboomv5$app$core$char_inputted(){
return new cljs.core.Keyword(null,"char-inputted","char-inputted",631305575).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.dt = (function app$kaboomv5$app$core$dt(){
return new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.time_BANG_ = (function app$kaboomv5$app$core$time_BANG_(){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.fps = (function app$kaboomv5$app$core$fps(){
return new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
});
app.kaboomv5.app.core.screenshot = (function app$kaboomv5$app$core$screenshot(){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).toDataURL();
});
app.kaboomv5.app.core.cursor = (function app$kaboomv5$app$core$cursor(var_args){
var G__119557 = arguments.length;
switch (G__119557) {
case 0:
return app.kaboomv5.app.core.cursor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.app.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.app.core.cursor.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).style.cursor;
}));

(app.kaboomv5.app.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).style.cursor = c);
}));

(app.kaboomv5.app.core.cursor.cljs$lang$maxFixedArity = 1);

app.kaboomv5.app.core.update_state_BANG_ = (function app$kaboomv5$app$core$update_state_BANG_(state,t){
var delta = ((t / (1000)) - new cljs.core.Keyword(null,"real-time","real-time",-618590227).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dt","dt",-368444759),delta),new cljs.core.Keyword(null,"time","time",1385887882),(delta + new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state)));
});
app.kaboomv5.app.core.update_app_state = (function app$kaboomv5$app$core$update_app_state(t){
var real_time = (t / (1000));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"real-time","real-time",-618590227),real_time);

if(cljs.core.not(new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)))){
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"skip-time?","skip-time?",304484753),false);
});
app.kaboomv5.app.core.run = (function app$kaboomv5$app$core$run(f){
var frame = (function app$kaboomv5$app$core$run_$_frame(t){
app.kaboomv5.app.core.update_app_state(t);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

requestAnimationFrame(app$kaboomv5$app$core$run_$_frame);

if(cljs.core.truth_(new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loop-id","loop-id",-338270264),requestAnimationFrame(app$kaboomv5$app$core$run_$_frame));
} else {
return null;
}
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loop-id","loop-id",-338270264),requestAnimationFrame(frame));
});
app.kaboomv5.app.core.quit = (function app$kaboomv5$app$core$quit(){
cancelAnimationFrame(new cljs.core.Keyword(null,"loop-id","loop-id",-338270264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stopped?","stopped?",396804158),true);
});
app.kaboomv5.app.core.focused_QMARK_ = (function app$kaboomv5$app$core$focused_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
});
app.kaboomv5.app.core.focus = (function app$kaboomv5$app$core$focus(){
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).focus();
});
app.kaboomv5.app.core.init_BANG_ = (function app$kaboomv5$app$core$init_BANG_(p__119558){
var map__119559 = p__119558;
var map__119559__$1 = (((((!((map__119559 == null))))?(((((map__119559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119559):map__119559);
var config = map__119559__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119559__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
app.kaboomv5.app.init.init_canvas.cljs$core$IFn$_invoke$arity$2(canvas,config);

app.kaboomv5.app.init.init_gl_state(canvas);

app.kaboomv5.app.utils.set_fullscreen(config);

return app.kaboomv5.app.events.reg_events(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
});

//# sourceMappingURL=app.kaboomv5.app.core.js.map
