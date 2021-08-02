goog.provide('app.patu.events');
goog.require('cljs.core');
goog.require('app.patu.components');
goog.require('app.patu.utils');
goog.require('app.patu.lib');
goog.require('goog.object');
goog.require('app.patu.cam');
goog.require('app.patu.state');
app.patu.events.evts_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.patu.events.reg_event = (function app$patu$events$reg_event(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.patu.events.evts_store,cljs.core.assoc,id,handler);
});
app.patu.events.dispatch = (function app$patu$events$dispatch(props){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.patu.events.evts_store),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(null,props) : handler.call(null,null,props));
} else {
return console.log(["No event handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)))].join(''));
}
});
app.patu.events.key_down = (function app$patu$events$key_down(id,handler){
return app.patu.lib.key_down(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,handler);
});
app.patu.events.key_press = (function app$patu$events$key_press(id,handler){
return app.patu.lib.key_press(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,handler);
});
app.patu.events.key_release = (function app$patu$events$key_release(id,handler){
return app.patu.lib.key_release(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id,handler);
});
app.patu.events.key_is_down = (function app$patu$events$key_is_down(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.patu.lib.key_is_down,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state))),key);
} else {
return app.patu.lib.key_is_down(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),key);
}
});

//# sourceMappingURL=app.patu.events.js.map
