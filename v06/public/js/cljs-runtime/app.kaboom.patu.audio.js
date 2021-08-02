goog.provide('app.kaboom.patu.audio');
goog.require('cljs.core');
goog.require('app.kaboom.patu.lib');
goog.require('app.kaboom.patu.state');
app.kaboom.patu.audio.play = (function app$kaboom$patu$audio$play(id){
return app.kaboom.patu.lib.play(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboom.patu.state.game_state)),id);
});

//# sourceMappingURL=app.kaboom.patu.audio.js.map
