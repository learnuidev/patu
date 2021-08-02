goog.provide('app.patu.audio');
goog.require('cljs.core');
goog.require('app.patu.lib');
goog.require('app.patu.state');
app.patu.audio.play = (function app$patu$audio$play(id){
return app.patu.lib.play(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.patu.state.game_state)),id);
});

//# sourceMappingURL=app.patu.audio.js.map
