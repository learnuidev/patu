goog.provide('app.kaboom_next.audio');
goog.require('cljs.core');
goog.require('app.kaboom_next.math');
goog.require('cljs.spec.alpha');
app.kaboom_next.audio.audio_context = (function app$kaboom_next$audio$audio_context(){
if(cljs.core.truth_(AudioContext)){
return (new AudioContext());
} else {
return (new webkitAudioContext());
}
});
app.kaboom_next.audio.min_gain = (0);
app.kaboom_next.audio.max_gain = (3);
app.kaboom_next.audio.min_speed = (0);
app.kaboom_next.audio.max_speed = (3);

/**
 * @interface
 */
app.kaboom_next.audio.IGain = function(){};

var app$kaboom_next$audio$IGain$set_volume$dyn_64012 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom_next.audio.set_volume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboom_next.audio.set_volume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IGain.set-volume",this$);
}
}
});
app.kaboom_next.audio.set_volume = (function app$kaboom_next$audio$set_volume(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboom_next$audio$IGain$set_volume$arity$2 == null)))))){
return this$.app$kaboom_next$audio$IGain$set_volume$arity$2(this$,v);
} else {
return app$kaboom_next$audio$IGain$set_volume$dyn_64012(this$,v);
}
});

var app$kaboom_next$audio$IGain$get_volume$dyn_64013 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom_next.audio.get_volume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom_next.audio.get_volume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGain.get-volume",this$);
}
}
});
app.kaboom_next.audio.get_volume = (function app$kaboom_next$audio$get_volume(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom_next$audio$IGain$get_volume$arity$1 == null)))))){
return this$.app$kaboom_next$audio$IGain$get_volume$arity$1(this$);
} else {
return app$kaboom_next$audio$IGain$get_volume$dyn_64013(this$);
}
});


/**
* @constructor
 * @implements {app.kaboom_next.audio.IGain}
*/
app.kaboom_next.audio.Gain = (function (gain){
this.gain = gain;
});
(app.kaboom_next.audio.Gain.prototype.app$kaboom_next$audio$IGain$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom_next.audio.Gain.prototype.app$kaboom_next$audio$IGain$get_volume$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.gain.gain.value;
}));

(app.kaboom_next.audio.Gain.prototype.app$kaboom_next$audio$IGain$set_volume$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var vol = app.kaboom_next.math.clamp(v,app.kaboom_next.audio.min_gain,app.kaboom_next.audio.max_gain);
(self__.gain.gain.value = vol);

return vol;
}));

(app.kaboom_next.audio.Gain.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gain","gain",-1303510724,null)], null);
}));

(app.kaboom_next.audio.Gain.cljs$lang$type = true);

(app.kaboom_next.audio.Gain.cljs$lang$ctorStr = "app.kaboom-next.audio/Gain");

(app.kaboom_next.audio.Gain.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom-next.audio/Gain");
}));

/**
 * Positional factory function for app.kaboom-next.audio/Gain.
 */
app.kaboom_next.audio.__GT_Gain = (function app$kaboom_next$audio$__GT_Gain(gain){
return (new app.kaboom_next.audio.Gain(gain));
});


/**
 * @interface
 */
app.kaboom_next.audio.IAudioContext = function(){};

var app$kaboom_next$audio$IAudioContext$ctx$dyn_64014 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom_next.audio.ctx[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom_next.audio.ctx["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IAudioContext.ctx",this$);
}
}
});
/**
 * new AudioContext
 */
app.kaboom_next.audio.ctx = (function app$kaboom_next$audio$ctx(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom_next$audio$IAudioContext$ctx$arity$1 == null)))))){
return this$.app$kaboom_next$audio$IAudioContext$ctx$arity$1(this$);
} else {
return app$kaboom_next$audio$IAudioContext$ctx$dyn_64014(this$);
}
});

var app$kaboom_next$audio$IAudioContext$volume$dyn_64015 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom_next.audio.volume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (app.kaboom_next.audio.volume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IAudioContext.volume",this$);
}
}
});
/**
 * Create a volume
 */
app.kaboom_next.audio.volume = (function app$kaboom_next$audio$volume(this$,v){
if((((!((this$ == null)))) && ((!((this$.app$kaboom_next$audio$IAudioContext$volume$arity$2 == null)))))){
return this$.app$kaboom_next$audio$IAudioContext$volume$arity$2(this$,v);
} else {
return app$kaboom_next$audio$IAudioContext$volume$dyn_64015(this$,v);
}
});

var app$kaboom_next$audio$IAudioContext$play$dyn_64016 = (function (this$,sound,conf){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom_next.audio.play[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sound,conf) : m__4429__auto__.call(null,this$,sound,conf));
} else {
var m__4426__auto__ = (app.kaboom_next.audio.play["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,sound,conf) : m__4426__auto__.call(null,this$,sound,conf));
} else {
throw cljs.core.missing_protocol("IAudioContext.play",this$);
}
}
});
app.kaboom_next.audio.play = (function app$kaboom_next$audio$play(this$,sound,conf){
if((((!((this$ == null)))) && ((!((this$.app$kaboom_next$audio$IAudioContext$play$arity$3 == null)))))){
return this$.app$kaboom_next$audio$IAudioContext$play$arity$3(this$,sound,conf);
} else {
return app$kaboom_next$audio$IAudioContext$play$dyn_64016(this$,sound,conf);
}
});


/**
* @constructor
 * @implements {app.kaboom_next.audio.IAudioContext}
*/
app.kaboom_next.audio.Audio = (function (context,gain){
this.context = context;
this.gain = gain;
});
(app.kaboom_next.audio.Audio.prototype.app$kaboom_next$audio$IAudioContext$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom_next.audio.Audio.prototype.app$kaboom_next$audio$IAudioContext$ctx$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.identity(self__.context);
}));

(app.kaboom_next.audio.Audio.prototype.app$kaboom_next$audio$IAudioContext$volume$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return app.kaboom_next.audio.set_volume(self__.gain,v);
}));

(app.kaboom_next.audio.Audio.prototype.app$kaboom_next$audio$IAudioContext$play$arity$3 = (function (_,audio_buffer,conf){
var self__ = this;
var ___$1 = this;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TODO"], 0));
}));

(app.kaboom_next.audio.Audio.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"gain","gain",-1303510724,null)], null);
}));

(app.kaboom_next.audio.Audio.cljs$lang$type = true);

(app.kaboom_next.audio.Audio.cljs$lang$ctorStr = "app.kaboom-next.audio/Audio");

(app.kaboom_next.audio.Audio.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom-next.audio/Audio");
}));

/**
 * Positional factory function for app.kaboom-next.audio/Audio.
 */
app.kaboom_next.audio.__GT_Audio = (function app$kaboom_next$audio$__GT_Audio(context,gain){
return (new app.kaboom_next.audio.Audio(context,gain));
});

app.kaboom_next.audio.context = (new AudioContext());
app.kaboom_next.audio.gain = app.kaboom_next.audio.__GT_Gain(app.kaboom_next.audio.context.createGain());
app.kaboom_next.audio.audio = app.kaboom_next.audio.__GT_Audio(app.kaboom_next.audio.context,app.kaboom_next.audio.gain);

//# sourceMappingURL=app.kaboom_next.audio.js.map
