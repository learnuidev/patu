goog.provide('app.kaboom.ourcade.one');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');

/**
 * @interface
 */
app.kaboom.ourcade.one.ITransform = function(){};

var app$kaboom$ourcade$one$ITransform$scale_BANG_$dyn_44955 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.scale_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.scale_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("ITransform.scale!",this$);
}
}
});
app.kaboom.ourcade.one.scale_BANG_ = (function app$kaboom$ourcade$one$scale_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$ITransform$scale_BANG_$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$ITransform$scale_BANG_$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$ITransform$scale_BANG_$dyn_44955(this$,value);
}
});


/**
 * @interface
 */
app.kaboom.ourcade.one.IEntity = function(){};

var app$kaboom$ourcade$one$IEntity$play$dyn_44956 = (function (this$,animation_id){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.play[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,animation_id) : m__4429__auto__.call(null,this$,animation_id));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.play["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,animation_id) : m__4426__auto__.call(null,this$,animation_id));
} else {
throw cljs.core.missing_protocol("IEntity.play",this$);
}
}
});
app.kaboom.ourcade.one.play = (function app$kaboom$ourcade$one$play(this$,animation_id){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$play$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$play$arity$2(this$,animation_id);
} else {
return app$kaboom$ourcade$one$IEntity$play$dyn_44956(this$,animation_id);
}
});

var app$kaboom$ourcade$one$IEntity$scale_x_BANG_$dyn_44957 = (function (this$,pos,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.scale_x_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,pos,value) : m__4429__auto__.call(null,this$,pos,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.scale_x_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,pos,value) : m__4426__auto__.call(null,this$,pos,value));
} else {
throw cljs.core.missing_protocol("IEntity.scale-x!",this$);
}
}
});
app.kaboom.ourcade.one.scale_x_BANG_ = (function app$kaboom$ourcade$one$scale_x_BANG_(this$,pos,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$scale_x_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$scale_x_BANG_$arity$3(this$,pos,value);
} else {
return app$kaboom$ourcade$one$IEntity$scale_x_BANG_$dyn_44957(this$,pos,value);
}
});

var app$kaboom$ourcade$one$IEntity$scale_y_BANG_$dyn_44958 = (function (this$,pos,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.scale_y_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,pos,value) : m__4429__auto__.call(null,this$,pos,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.scale_y_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,pos,value) : m__4426__auto__.call(null,this$,pos,value));
} else {
throw cljs.core.missing_protocol("IEntity.scale-y!",this$);
}
}
});
app.kaboom.ourcade.one.scale_y_BANG_ = (function app$kaboom$ourcade$one$scale_y_BANG_(this$,pos,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$scale_y_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$scale_y_BANG_$arity$3(this$,pos,value);
} else {
return app$kaboom$ourcade$one$IEntity$scale_y_BANG_$dyn_44958(this$,pos,value);
}
});

var app$kaboom$ourcade$one$IEntity$move$dyn_44959 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.move[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.move["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IEntity.move",this$);
}
}
});
app.kaboom.ourcade.one.move = (function app$kaboom$ourcade$one$move(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$move$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$move$arity$3(this$,x,y);
} else {
return app$kaboom$ourcade$one$IEntity$move$dyn_44959(this$,x,y);
}
});

var app$kaboom$ourcade$one$IEntity$jump$dyn_44960 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.jump[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.jump["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IEntity.jump",this$);
}
}
});
app.kaboom.ourcade.one.jump = (function app$kaboom$ourcade$one$jump(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$jump$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$jump$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IEntity$jump$dyn_44960(this$,value);
}
});

var app$kaboom$ourcade$one$IEntity$action$dyn_44961 = (function (this$,handler){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.action[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,handler) : m__4429__auto__.call(null,this$,handler));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.action["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,handler) : m__4426__auto__.call(null,this$,handler));
} else {
throw cljs.core.missing_protocol("IEntity.action",this$);
}
}
});
app.kaboom.ourcade.one.action = (function app$kaboom$ourcade$one$action(this$,handler){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$action$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$action$arity$2(this$,handler);
} else {
return app$kaboom$ourcade$one$IEntity$action$dyn_44961(this$,handler);
}
});

var app$kaboom$ourcade$one$IEntity$pos$dyn_44962 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEntity.pos",this$);
}
}
});
app.kaboom.ourcade.one.pos = (function app$kaboom$ourcade$one$pos(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IEntity$pos$arity$1 == null)))))){
return this$.app$kaboom$ourcade$one$IEntity$pos$arity$1(this$);
} else {
return app$kaboom$ourcade$one$IEntity$pos$dyn_44962(this$);
}
});


/**
 * @interface
 */
app.kaboom.ourcade.one.IBiggify = function(){};

var app$kaboom$ourcade$one$IBiggify$big_QMARK_$dyn_44963 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (app.kaboom.ourcade.one.big_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.big_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBiggify.big?",_);
}
}
});
app.kaboom.ourcade.one.big_QMARK_ = (function app$kaboom$ourcade$one$big_QMARK_(_){
if((((!((_ == null)))) && ((!((_.app$kaboom$ourcade$one$IBiggify$big_QMARK_$arity$1 == null)))))){
return _.app$kaboom$ourcade$one$IBiggify$big_QMARK_$arity$1(_);
} else {
return app$kaboom$ourcade$one$IBiggify$big_QMARK_$dyn_44963(_);
}
});

var app$kaboom$ourcade$one$IBiggify$timer$dyn_44964 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (app.kaboom.ourcade.one.timer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.timer["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBiggify.timer",_);
}
}
});
app.kaboom.ourcade.one.timer = (function app$kaboom$ourcade$one$timer(_){
if((((!((_ == null)))) && ((!((_.app$kaboom$ourcade$one$IBiggify$timer$arity$1 == null)))))){
return _.app$kaboom$ourcade$one$IBiggify$timer$arity$1(_);
} else {
return app$kaboom$ourcade$one$IBiggify$timer$dyn_44964(_);
}
});

var app$kaboom$ourcade$one$IBiggify$biggify$dyn_44965 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (app.kaboom.ourcade.one.biggify[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.biggify["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBiggify.biggify",_);
}
}
});
app.kaboom.ourcade.one.biggify = (function app$kaboom$ourcade$one$biggify(_){
if((((!((_ == null)))) && ((!((_.app$kaboom$ourcade$one$IBiggify$biggify$arity$1 == null)))))){
return _.app$kaboom$ourcade$one$IBiggify$biggify$arity$1(_);
} else {
return app$kaboom$ourcade$one$IBiggify$biggify$dyn_44965(_);
}
});

var app$kaboom$ourcade$one$IBiggify$smallify$dyn_44966 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (app.kaboom.ourcade.one.smallify[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.smallify["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBiggify.smallify",_);
}
}
});
app.kaboom.ourcade.one.smallify = (function app$kaboom$ourcade$one$smallify(_){
if((((!((_ == null)))) && ((!((_.app$kaboom$ourcade$one$IBiggify$smallify$arity$1 == null)))))){
return _.app$kaboom$ourcade$one$IBiggify$smallify$arity$1(_);
} else {
return app$kaboom$ourcade$one$IBiggify$smallify$dyn_44966(_);
}
});

var app$kaboom$ourcade$one$IBiggify$update_BANG_$dyn_44967 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (app.kaboom.ourcade.one.update_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.update_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBiggify.update!",_);
}
}
});
app.kaboom.ourcade.one.update_BANG_ = (function app$kaboom$ourcade$one$update_BANG_(_){
if((((!((_ == null)))) && ((!((_.app$kaboom$ourcade$one$IBiggify$update_BANG_$arity$1 == null)))))){
return _.app$kaboom$ourcade$one$IBiggify$update_BANG_$arity$1(_);
} else {
return app$kaboom$ourcade$one$IBiggify$update_BANG_$dyn_44967(_);
}
});


/**
* @constructor
 * @implements {app.kaboom.ourcade.one.IEntity}
 * @implements {app.kaboom.ourcade.one.IBiggify}
 * @implements {app.kaboom.ourcade.one.ITransform}
*/
app.kaboom.ourcade.one.Player = (function (player){
this.player = player;
});
(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$play$arity$2 = (function (_,animation_id){
var self__ = this;
var ___$1 = this;
return self__.player.play(cljs.core.name(animation_id));
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$scale_x_BANG_$arity$3 = (function (_,pos,value){
var self__ = this;
var ___$1 = this;
return (self__.player.scale.x = value);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$scale_y_BANG_$arity$3 = (function (_,pos,value){
var self__ = this;
var ___$1 = this;
return (self__.player.scale.y = value);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$move$arity$3 = (function (_,x,y){
var self__ = this;
var ___$1 = this;
return self__.player.move(x,y);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$jump$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.player.jump(value);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$action$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return self__.player.action(handler);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IEntity$pos$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.pos;
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$ITransform$scale_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.player.scale(value);
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$big_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.isBig;
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$timer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.timer;
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$biggify$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.biggify();
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$smallify$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.smallify();
}));

(app.kaboom.ourcade.one.Player.prototype.app$kaboom$ourcade$one$IBiggify$update_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.player.update();
}));

(app.kaboom.ourcade.one.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null)], null);
}));

(app.kaboom.ourcade.one.Player.cljs$lang$type = true);

(app.kaboom.ourcade.one.Player.cljs$lang$ctorStr = "app.kaboom.ourcade.one/Player");

(app.kaboom.ourcade.one.Player.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.ourcade.one/Player");
}));

/**
 * Positional factory function for app.kaboom.ourcade.one/Player.
 */
app.kaboom.ourcade.one.__GT_Player = (function app$kaboom$ourcade$one$__GT_Player(player){
return (new app.kaboom.ourcade.one.Player(player));
});


/**
 * IKaboom protocol abstraction
 * @interface
 */
app.kaboom.ourcade.one.IKaboom = function(){};

var app$kaboom$ourcade$one$IKaboom$width$dyn_44968 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.width[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.width["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKaboom.width",this$);
}
}
});
app.kaboom.ourcade.one.width = (function app$kaboom$ourcade$one$width(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$width$arity$1 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$width$arity$1(this$);
} else {
return app$kaboom$ourcade$one$IKaboom$width$dyn_44968(this$);
}
});

var app$kaboom$ourcade$one$IKaboom$vec2$dyn_44969 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.vec2[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.vec2["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.vec2",this$);
}
}
});
app.kaboom.ourcade.one.vec2 = (function app$kaboom$ourcade$one$vec2(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$vec2$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$vec2$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$vec2$dyn_44969(this$,value);
}
});

var app$kaboom$ourcade$one$IKaboom$height$dyn_44970 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.height[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.height["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKaboom.height",this$);
}
}
});
app.kaboom.ourcade.one.height = (function app$kaboom$ourcade$one$height(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$height$arity$1 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$height$arity$1(this$);
} else {
return app$kaboom$ourcade$one$IKaboom$height$dyn_44970(this$);
}
});

var app$kaboom$ourcade$one$IKaboom$text_BANG_$dyn_44971 = (function (this$,value,font_size){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.text_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4429__auto__.call(null,this$,value,font_size));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.text_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,font_size) : m__4426__auto__.call(null,this$,value,font_size));
} else {
throw cljs.core.missing_protocol("IKaboom.text!",this$);
}
}
});
app.kaboom.ourcade.one.text_BANG_ = (function app$kaboom$ourcade$one$text_BANG_(this$,value,font_size){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$text_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$text_BANG_$arity$3(this$,value,font_size);
} else {
return app$kaboom$ourcade$one$IKaboom$text_BANG_$dyn_44971(this$,value,font_size);
}
});

var app$kaboom$ourcade$one$IKaboom$add_BANG_$dyn_44972 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.add_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.add_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.add!",this$);
}
}
});
/**
 * Add a game object to scene
 */
app.kaboom.ourcade.one.add_BANG_ = (function app$kaboom$ourcade$one$add_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$add_BANG_$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$add_BANG_$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$add_BANG_$dyn_44972(this$,value);
}
});

var app$kaboom$ourcade$one$IKaboom$pos_BANG_$dyn_44973 = (function (this$,x,y){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.pos_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4429__auto__.call(null,this$,x,y));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.pos_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,x,y) : m__4426__auto__.call(null,this$,x,y));
} else {
throw cljs.core.missing_protocol("IKaboom.pos!",this$);
}
}
});
app.kaboom.ourcade.one.pos_BANG_ = (function app$kaboom$ourcade$one$pos_BANG_(this$,x,y){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$pos_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$pos_BANG_$arity$3(this$,x,y);
} else {
return app$kaboom$ourcade$one$IKaboom$pos_BANG_$dyn_44973(this$,x,y);
}
});

var app$kaboom$ourcade$one$IKaboom$scene_BANG_$dyn_44974 = (function (this$,type,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.scene_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4429__auto__.call(null,this$,type,func));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.scene_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,func) : m__4426__auto__.call(null,this$,type,func));
} else {
throw cljs.core.missing_protocol("IKaboom.scene!",this$);
}
}
});
app.kaboom.ourcade.one.scene_BANG_ = (function app$kaboom$ourcade$one$scene_BANG_(this$,type,func){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$scene_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$scene_BANG_$arity$3(this$,type,func);
} else {
return app$kaboom$ourcade$one$IKaboom$scene_BANG_$dyn_44974(this$,type,func);
}
});

var app$kaboom$ourcade$one$IKaboom$start_BANG_$dyn_44975 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.start_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.start_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.start!",this$);
}
}
});
app.kaboom.ourcade.one.start_BANG_ = (function app$kaboom$ourcade$one$start_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$start_BANG_$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$start_BANG_$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$start_BANG_$dyn_44975(this$,value);
}
});

var app$kaboom$ourcade$one$IKaboom$load_aseprite_BANG_$dyn_44976 = (function (this$,sprite_id,asset_path_1,asset_path_2){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.load_aseprite_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path_1,asset_path_2) : m__4429__auto__.call(null,this$,sprite_id,asset_path_1,asset_path_2));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.load_aseprite_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path_1,asset_path_2) : m__4426__auto__.call(null,this$,sprite_id,asset_path_1,asset_path_2));
} else {
throw cljs.core.missing_protocol("IKaboom.load-aseprite!",this$);
}
}
});
app.kaboom.ourcade.one.load_aseprite_BANG_ = (function app$kaboom$ourcade$one$load_aseprite_BANG_(this$,sprite_id,asset_path_1,asset_path_2){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$load_aseprite_BANG_$arity$4 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$load_aseprite_BANG_$arity$4(this$,sprite_id,asset_path_1,asset_path_2);
} else {
return app$kaboom$ourcade$one$IKaboom$load_aseprite_BANG_$dyn_44976(this$,sprite_id,asset_path_1,asset_path_2);
}
});

var app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$dyn_44977 = (function() {
var G__44978 = null;
var G__44978__3 = (function (this$,sprite_id,asset_path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.load_sprite_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4429__auto__.call(null,this$,sprite_id,asset_path));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.load_sprite_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,asset_path) : m__4426__auto__.call(null,this$,sprite_id,asset_path));
} else {
throw cljs.core.missing_protocol("IKaboom.load-sprite!",this$);
}
}
});
var G__44978__4 = (function (this$,sprite_id,asset_path,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.load_sprite_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path,options) : m__4429__auto__.call(null,this$,sprite_id,asset_path,options));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.load_sprite_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,sprite_id,asset_path,options) : m__4426__auto__.call(null,this$,sprite_id,asset_path,options));
} else {
throw cljs.core.missing_protocol("IKaboom.load-sprite!",this$);
}
}
});
G__44978 = function(this$,sprite_id,asset_path,options){
switch(arguments.length){
case 3:
return G__44978__3.call(this,this$,sprite_id,asset_path);
case 4:
return G__44978__4.call(this,this$,sprite_id,asset_path,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44978.cljs$core$IFn$_invoke$arity$3 = G__44978__3;
G__44978.cljs$core$IFn$_invoke$arity$4 = G__44978__4;
return G__44978;
})()
;
/**
 * Description:
 *    - Loads a sprite
 *    - Accepts three arguments
 *       - 1. game       - kaboom instance. object
 *       - 2. sprit-id   - id of the sprite. keyword
 *       - 3. asset-path - public path of the asset. string
 *  Example usage:
 *    - (load-sprite! game :player 'assets/player.png')
 */
app.kaboom.ourcade.one.load_sprite_BANG_ = (function app$kaboom$ourcade$one$load_sprite_BANG_(var_args){
var G__44946 = arguments.length;
switch (G__44946) {
case 3:
return app.kaboom.ourcade.one.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.kaboom.ourcade.one.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.ourcade.one.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,sprite_id,asset_path){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$3(this$,sprite_id,asset_path);
} else {
return app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$dyn_44977(this$,sprite_id,asset_path);
}
}));

(app.kaboom.ourcade.one.load_sprite_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,sprite_id,asset_path,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$4 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$4(this$,sprite_id,asset_path,options);
} else {
return app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$dyn_44977(this$,sprite_id,asset_path,options);
}
}));

(app.kaboom.ourcade.one.load_sprite_BANG_.cljs$lang$maxFixedArity = 4);


var app$kaboom$ourcade$one$IKaboom$add_level_BANG_$dyn_44980 = (function (this$,value,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.add_level_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4429__auto__.call(null,this$,value,options));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.add_level_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,value,options) : m__4426__auto__.call(null,this$,value,options));
} else {
throw cljs.core.missing_protocol("IKaboom.add-level!",this$);
}
}
});
/**
 * Add a new level
 */
app.kaboom.ourcade.one.add_level_BANG_ = (function app$kaboom$ourcade$one$add_level_BANG_(this$,value,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$add_level_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$add_level_BANG_$arity$3(this$,value,options);
} else {
return app$kaboom$ourcade$one$IKaboom$add_level_BANG_$dyn_44980(this$,value,options);
}
});

var app$kaboom$ourcade$one$IKaboom$origin_BANG_$dyn_44981 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.origin_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.origin_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.origin!",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.origin_BANG_ = (function app$kaboom$ourcade$one$origin_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$origin_BANG_$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$origin_BANG_$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$origin_BANG_$dyn_44981(this$,value);
}
});

var app$kaboom$ourcade$one$IKaboom$go_BANG_$dyn_44982 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.go_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.go_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.go!",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.go_BANG_ = (function app$kaboom$ourcade$one$go_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$go_BANG_$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$go_BANG_$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$go_BANG_$dyn_44982(this$,value);
}
});

var app$kaboom$ourcade$one$IKaboom$rect_BANG_$dyn_44983 = (function (this$,width,height){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.rect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,width,height) : m__4429__auto__.call(null,this$,width,height));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.rect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,width,height) : m__4426__auto__.call(null,this$,width,height));
} else {
throw cljs.core.missing_protocol("IKaboom.rect!",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.rect_BANG_ = (function app$kaboom$ourcade$one$rect_BANG_(this$,width,height){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$rect_BANG_$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$rect_BANG_$arity$3(this$,width,height);
} else {
return app$kaboom$ourcade$one$IKaboom$rect_BANG_$dyn_44983(this$,width,height);
}
});

var app$kaboom$ourcade$one$IKaboom$body$dyn_44984 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKaboom.body",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.body = (function app$kaboom$ourcade$one$body(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$body$arity$1 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$body$arity$1(this$);
} else {
return app$kaboom$ourcade$one$IKaboom$body$dyn_44984(this$);
}
});

var app$kaboom$ourcade$one$IKaboom$solid$dyn_44985 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.solid[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.solid["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKaboom.solid",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.solid = (function app$kaboom$ourcade$one$solid(this$){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$solid$arity$1 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$solid$arity$1(this$);
} else {
return app$kaboom$ourcade$one$IKaboom$solid$dyn_44985(this$);
}
});

var app$kaboom$ourcade$one$IKaboom$sprite$dyn_44986 = (function (this$,sprite_id,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.sprite[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,options) : m__4429__auto__.call(null,this$,sprite_id,options));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.sprite["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,sprite_id,options) : m__4426__auto__.call(null,this$,sprite_id,options));
} else {
throw cljs.core.missing_protocol("IKaboom.sprite",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.sprite = (function app$kaboom$ourcade$one$sprite(this$,sprite_id,options){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$sprite$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$sprite$arity$3(this$,sprite_id,options);
} else {
return app$kaboom$ourcade$one$IKaboom$sprite$dyn_44986(this$,sprite_id,options);
}
});

var app$kaboom$ourcade$one$IKaboom$key_press$dyn_44987 = (function (this$,id,handler){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.key_press[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4429__auto__.call(null,this$,id,handler));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.key_press["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4426__auto__.call(null,this$,id,handler));
} else {
throw cljs.core.missing_protocol("IKaboom.key-press",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.key_press = (function app$kaboom$ourcade$one$key_press(this$,id,handler){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$key_press$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$key_press$arity$3(this$,id,handler);
} else {
return app$kaboom$ourcade$one$IKaboom$key_press$dyn_44987(this$,id,handler);
}
});

var app$kaboom$ourcade$one$IKaboom$key_release$dyn_44988 = (function (this$,id,handler){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.key_release[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4429__auto__.call(null,this$,id,handler));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.key_release["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4426__auto__.call(null,this$,id,handler));
} else {
throw cljs.core.missing_protocol("IKaboom.key-release",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.key_release = (function app$kaboom$ourcade$one$key_release(this$,id,handler){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$key_release$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$key_release$arity$3(this$,id,handler);
} else {
return app$kaboom$ourcade$one$IKaboom$key_release$dyn_44988(this$,id,handler);
}
});

var app$kaboom$ourcade$one$IKaboom$key_down$dyn_44989 = (function (this$,id,handler){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.key_down[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4429__auto__.call(null,this$,id,handler));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.key_down["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4426__auto__.call(null,this$,id,handler));
} else {
throw cljs.core.missing_protocol("IKaboom.key-down",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.key_down = (function app$kaboom$ourcade$one$key_down(this$,id,handler){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$key_down$arity$3 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$key_down$arity$3(this$,id,handler);
} else {
return app$kaboom$ourcade$one$IKaboom$key_down$dyn_44989(this$,id,handler);
}
});

var app$kaboom$ourcade$one$IKaboom$cam_pos$dyn_44990 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (app.kaboom.ourcade.one.cam_pos[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (app.kaboom.ourcade.one.cam_pos["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IKaboom.cam-pos",this$);
}
}
});
/**
 * Description:
 *    - Sets the origin value:
 *    - Accepts one argument
 *        - 1. origin-id - string or keyword
 * Example usage:
 *    - (set-origin! game :center)
 */
app.kaboom.ourcade.one.cam_pos = (function app$kaboom$ourcade$one$cam_pos(this$,value){
if((((!((this$ == null)))) && ((!((this$.app$kaboom$ourcade$one$IKaboom$cam_pos$arity$2 == null)))))){
return this$.app$kaboom$ourcade$one$IKaboom$cam_pos$arity$2(this$,value);
} else {
return app$kaboom$ourcade$one$IKaboom$cam_pos$dyn_44990(this$,value);
}
});


/**
* @constructor
 * @implements {app.kaboom.ourcade.one.IKaboom}
 * @implements {app.kaboom.ourcade.one.ITransform}
*/
app.kaboom.ourcade.one.Kaboom = (function (g){
this.g = g;
});
(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g.body();
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$cam_pos$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.camPos(value);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$height$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.g.height();
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$start_BANG_$arity$2 = (function (_,scene_id){
var self__ = this;
var ___$1 = this;
return self__.g.start(cljs.core.name(scene_id));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$load_aseprite_BANG_$arity$4 = (function (_,sprite_id,asset_path,asset_path_2){
var self__ = this;
var ___$1 = this;
return self__.g.loadAseprite(cljs.core.name(sprite_id),asset_path,asset_path_2);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$solid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g.solid();
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$rect_BANG_$arity$3 = (function (_,width,height){
var self__ = this;
var ___$1 = this;
return self__.g.rect(width,height);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$add_BANG_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.add(cljs.core.clj__GT_js(value));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$scene_BANG_$arity$3 = (function (_,scene_id,func){
var self__ = this;
var ___$1 = this;
return self__.g.scene(cljs.core.name(scene_id),func);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$origin_BANG_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.origin(cljs.core.name(value));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$3 = (function (_,sprite_id,asset_path){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$4 = (function (_,sprite_id,asset_path,options){
var self__ = this;
var ___$1 = this;
return self__.g.loadSprite(cljs.core.name(sprite_id),asset_path,cljs.core.clj__GT_js(options));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$key_release$arity$3 = (function (_,id,handler){
var self__ = this;
var ___$1 = this;
return self__.g.keyRelease(cljs.core.name(id),handler);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$go_BANG_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.go(cljs.core.name(value));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$key_down$arity$3 = (function (_,id,handler){
var self__ = this;
var ___$1 = this;
return self__.g.keyDown(cljs.core.name(id),handler);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$width$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.g.width();
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$add_level_BANG_$arity$3 = (function (_,value,options){
var self__ = this;
var ___$1 = this;
return self__.g.addLevel(cljs.core.clj__GT_js(value),cljs.core.clj__GT_js(options));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$sprite$arity$3 = (function (_,sprite_id,options){
var self__ = this;
var ___$1 = this;
return self__.g.sprite(cljs.core.name(sprite_id),cljs.core.clj__GT_js(options));
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$vec2$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.vec2(value);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$key_press$arity$3 = (function (_,id,handler){
var self__ = this;
var ___$1 = this;
return self__.g.keyPress(cljs.core.name(id),handler);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$pos_BANG_$arity$3 = (function (this$,x,y){
var self__ = this;
var this$__$1 = this;
return self__.g.pos(x,y);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$IKaboom$text_BANG_$arity$3 = (function (this$,value,font_size){
var self__ = this;
var this$__$1 = this;
return self__.g.text(value,font_size);
}));

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(app.kaboom.ourcade.one.Kaboom.prototype.app$kaboom$ourcade$one$ITransform$scale_BANG_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.g.scale(value);
}));

(app.kaboom.ourcade.one.Kaboom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","kaboom","js/kaboom",763041571,null)], null))], null);
}));

(app.kaboom.ourcade.one.Kaboom.cljs$lang$type = true);

(app.kaboom.ourcade.one.Kaboom.cljs$lang$ctorStr = "app.kaboom.ourcade.one/Kaboom");

(app.kaboom.ourcade.one.Kaboom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"app.kaboom.ourcade.one/Kaboom");
}));

/**
 * Positional factory function for app.kaboom.ourcade.one/Kaboom.
 */
app.kaboom.ourcade.one.__GT_Kaboom = (function app$kaboom$ourcade$one$__GT_Kaboom(g){
return (new app.kaboom.ourcade.one.Kaboom(g));
});

app.kaboom.ourcade.one.kaboom_BANG_ = (function app$kaboom$ourcade$one$kaboom_BANG_(var_args){
var G__44948 = arguments.length;
switch (G__44948) {
case 0:
return app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return app.kaboom.ourcade.one.__GT_Kaboom(kaboom(cljs.core.clj__GT_js(options)));
}));

(app.kaboom.ourcade.one.kaboom_BANG_.cljs$lang$maxFixedArity = 1);

app.kaboom.ourcade.one.game = app.kaboom.ourcade.one.kaboom_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"width","width",-384071477),(320),new cljs.core.Keyword(null,"height","height",1025178622),(240),new cljs.core.Keyword(null,"scale","scale",-230427353),2.5,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.querySelector("canvas")], null));
app.kaboom.ourcade.one.reg_scene = (function app$kaboom$ourcade$one$reg_scene(id,handler){
return app.kaboom.ourcade.one.game.app$kaboom$ourcade$one$IKaboom$scene_BANG_$arity$3(null,id,(function (){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(app.kaboom.ourcade.one.game) : handler.call(null,app.kaboom.ourcade.one.game));
}));
});
app.kaboom.ourcade.one.game.app$kaboom$ourcade$one$IKaboom$load_sprite_BANG_$arity$4(null,new cljs.core.Keyword(null,"tiles","tiles",178505240),"assets/platformer/Tilemap/monochrome_tilemap.png",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sliceX","sliceX",-1861376171),(20),new cljs.core.Keyword(null,"sliceY","sliceY",1476268871),(20),new cljs.core.Keyword(null,"anims","anims",300543630),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(300),new cljs.core.Keyword(null,"to","to",192099007),(300)], null),new cljs.core.Keyword(null,"run","run",-1821166653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(301),new cljs.core.Keyword(null,"to","to",192099007),(302)], null)], null)], null));
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"hello-world","hello-world",-788431463),(function (game){
var text = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),"Hello KaboomJS",new cljs.core.Keyword(null,"size","size",1098693007),(16)], null);
var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(app.kaboom.ourcade.one.width(game) * 0.5),new cljs.core.Keyword(null,"y","y",-1757859776),(app.kaboom.ourcade.one.height(game) * 0.5)], null);
var origin = new cljs.core.Keyword(null,"center","center",-748944368);
return app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(app.kaboom.ourcade.one.height(game) * 0.5)),app.kaboom.ourcade.one.text_BANG_(game,"Hello KaboomJS",(16)),app.kaboom.ourcade.one.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368))], null));
}));
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"collisions","collisions",1544876666),(function (game){
app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.rect_BANG_(game,(32),(64)),app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(200)),app.kaboom.ourcade.one.body(game),app.kaboom.ourcade.one.solid(game)], null));

app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(app.kaboom.ourcade.one.height(game) * 0.5)),app.kaboom.ourcade.one.text_BANG_(game,"Hello KaboomJS",(16)),app.kaboom.ourcade.one.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368)),app.kaboom.ourcade.one.body(game),app.kaboom.ourcade.one.solid(game)], null));

return app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.pos_BANG_(game,(0),app.kaboom.ourcade.one.height(game)),app.kaboom.ourcade.one.rect_BANG_(game,app.kaboom.ourcade.one.width(game),(50)),app.kaboom.ourcade.one.solid(game)], null));
}));
app.kaboom.ourcade.one.add_level = (function app$kaboom$ourcade$one$add_level(game){
return cljs.core.List.EMPTY;
});
app.kaboom.ourcade.one.add_player = (function app$kaboom$ourcade$one$add_player(game){
return app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation","animation",-1248293244),0.1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(300)], null)),app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(app.kaboom.ourcade.one.height(game) * 0.5)),app.kaboom.ourcade.one.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368)),app.kaboom.ourcade.one.scale_BANG_(game,(1))], null));
});
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"animations","animations",140711296),(function (game){
var player = app.kaboom.ourcade.one.add_player(game);
app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
app.kaboom.ourcade.one.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(-1));

return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
app.kaboom.ourcade.one.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(1));

return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

return app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));
}));
app.kaboom.ourcade.one.level = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","                                            ","    ===                                     ","                                            "," >   +                                     <","============================================"], null);
app.kaboom.ourcade.one.level_handler = (function app$kaboom$ourcade$one$level_handler(game){
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(65)], null)),app.kaboom.ourcade.one.solid(game)], null),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(92)], null))], null),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(93)], null))], null)], null);
var player = app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation","animation",-1248293244),0.1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(300)], null)),app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(app.kaboom.ourcade.one.height(game) * 0.5)),app.kaboom.ourcade.one.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368)),app.kaboom.ourcade.one.scale_BANG_(game,(1)),app.kaboom.ourcade.one.body(game)], null));
var times_jumped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.kaboom.ourcade.one.add_level_BANG_(game,app.kaboom.ourcade.one.level,config);

app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));

app.kaboom.ourcade.one.key_down(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.ourcade.one.move(player,(-100),(0));
}));

app.kaboom.ourcade.one.key_down(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.ourcade.one.move(player,(100),(0));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"space","space",348133475),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return app.kaboom.ourcade.one.jump(player,(350));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"up","up",-269712113),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return app.kaboom.ourcade.one.jump(player,(350));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
app.kaboom.ourcade.one.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(-1));

return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
app.kaboom.ourcade.one.scale_x_BANG_(player,new cljs.core.Keyword(null,"x","x",2099068185),(1));

return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return app.kaboom.ourcade.one.play(player,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

return app.kaboom.ourcade.one.action(player,(function (){
return app.kaboom.ourcade.one.cam_pos(game,app.kaboom.ourcade.one.pos(player));
}));
});
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"level","level",1290497552),app.kaboom.ourcade.one.level_handler);
app.kaboom.ourcade.one.biggify_component = (function app$kaboom$ourcade$one$biggify_component(){
var player = this;
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"isBig","isBig",1204536870),true,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
var update_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,state);
var biggify = (function (){
return console.log("PLAYER",player);
});
var smallify = (function (){
return console.log("SMALLIFY");
});
var update = (function (){
return null;
});
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"biggify","biggify",-1418467977),biggify,new cljs.core.Keyword(null,"smallify","smallify",1474311556),smallify,new cljs.core.Keyword(null,"update","update",1045576396),update], null),cljs.core.deref(state)], 0)));
});
app.kaboom.ourcade.one.component_handler = (function app$kaboom$ourcade$one$component_handler(game){
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(65)], null)),app.kaboom.ourcade.one.solid(game)], null),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(92)], null))], null),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(93)], null))], null)], null);
var player = app.kaboom.ourcade.one.__GT_Player(app.kaboom.ourcade.one.add_BANG_(game,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.kaboom.ourcade.one.sprite(game,new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation","animation",-1248293244),0.1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(300)], null)),app.kaboom.ourcade.one.pos_BANG_(game,(app.kaboom.ourcade.one.width(game) * 0.5),(app.kaboom.ourcade.one.height(game) * 0.5)),app.kaboom.ourcade.one.origin_BANG_(game,new cljs.core.Keyword(null,"center","center",-748944368)),app.kaboom.ourcade.one.scale_BANG_(game,(1)),app.kaboom.ourcade.one.body(game),app.kaboom.ourcade.one.biggify_component()], null)));
var times_jumped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
console.log("isBig ",player.app$kaboom$ourcade$one$IBiggify$big_QMARK_$arity$1(null));

player.app$kaboom$ourcade$one$IBiggify$biggify$arity$1(null);

app.kaboom.ourcade.one.add_level_BANG_(game,app.kaboom.ourcade.one.level,config);

player.app$kaboom$ourcade$one$IEntity$play$arity$2(null,new cljs.core.Keyword(null,"idle","idle",-2007156861));

app.kaboom.ourcade.one.key_down(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return player.app$kaboom$ourcade$one$IEntity$move$arity$3(null,(-100),(0));
}));

app.kaboom.ourcade.one.key_down(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return player.app$kaboom$ourcade$one$IEntity$move$arity$3(null,(100),(0));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"space","space",348133475),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return player.app$kaboom$ourcade$one$IEntity$jump$arity$2(null,(350));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"up","up",-269712113),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(times_jumped,cljs.core.inc);

return player.app$kaboom$ourcade$one$IEntity$jump$arity$2(null,(350));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
player.app$kaboom$ourcade$one$IEntity$scale_x_BANG_$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185),(-1));

return player.app$kaboom$ourcade$one$IEntity$play$arity$2(null,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_press(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
player.app$kaboom$ourcade$one$IEntity$scale_x_BANG_$arity$3(null,new cljs.core.Keyword(null,"x","x",2099068185),(1));

return player.app$kaboom$ourcade$one$IEntity$play$arity$2(null,new cljs.core.Keyword(null,"run","run",-1821166653));
}));

app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"left","left",-399115937),(function (){
return player.app$kaboom$ourcade$one$IEntity$play$arity$2(null,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

app.kaboom.ourcade.one.key_release(game,new cljs.core.Keyword(null,"right","right",-452581833),(function (){
return player.app$kaboom$ourcade$one$IEntity$play$arity$2(null,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}));

return player.app$kaboom$ourcade$one$IEntity$action$arity$2(null,(function (){
return app.kaboom.ourcade.one.cam_pos(game,player.app$kaboom$ourcade$one$IEntity$pos$arity$1(null));
}));
});
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"component","component",1555936782),app.kaboom.ourcade.one.component_handler);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var _STAR_print_newline_STAR__orig_val__44949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_newline_STAR__temp_val__44950 = true;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44950);

try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44951_44992 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44952_44993 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44953_44994 = true;
var _STAR_print_fn_STAR__temp_val__44954_44995 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44953_44994);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44954_44995);

try{cljs.repl.print_doc(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.kaboom.ourcade.one","app.kaboom.ourcade.one",-674085541,null),new cljs.core.Keyword(null,"name","name",1843675177),"action",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)))], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44952_44993);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44951_44992);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44949);
}})()], 0));
app.kaboom.ourcade.one.reg_scene(new cljs.core.Keyword(null,"main","main",-2117802661),(function (game){
return app.kaboom.ourcade.one.go_BANG_(game,new cljs.core.Keyword(null,"component","component",1555936782));
}));
app.kaboom.ourcade.one.app = (function app$kaboom$ourcade$one$app(){
return app.kaboom.ourcade.one.game.app$kaboom$ourcade$one$IKaboom$start_BANG_$arity$2(null,new cljs.core.Keyword(null,"main","main",-2117802661));
});

//# sourceMappingURL=app.kaboom.ourcade.one.js.map
