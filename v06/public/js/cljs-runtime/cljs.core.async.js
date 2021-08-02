goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28866 = arguments.length;
switch (G__28866) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28872 = (function (f,blockable,meta28873){
this.f = f;
this.blockable = blockable;
this.meta28873 = meta28873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28874,meta28873__$1){
var self__ = this;
var _28874__$1 = this;
return (new cljs.core.async.t_cljs$core$async28872(self__.f,self__.blockable,meta28873__$1));
}));

(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28874){
var self__ = this;
var _28874__$1 = this;
return self__.meta28873;
}));

(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28873","meta28873",-777884126,null)], null);
}));

(cljs.core.async.t_cljs$core$async28872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28872");

(cljs.core.async.t_cljs$core$async28872.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28872.
 */
cljs.core.async.__GT_t_cljs$core$async28872 = (function cljs$core$async$__GT_t_cljs$core$async28872(f__$1,blockable__$1,meta28873){
return (new cljs.core.async.t_cljs$core$async28872(f__$1,blockable__$1,meta28873));
});

}

return (new cljs.core.async.t_cljs$core$async28872(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28910 = arguments.length;
switch (G__28910) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28912 = arguments.length;
switch (G__28912) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28917 = arguments.length;
switch (G__28917) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31727 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31727) : fn1.call(null,val_31727));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31727) : fn1.call(null,val_31727));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28929 = arguments.length;
switch (G__28929) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___31747 = n;
var x_31748 = (0);
while(true){
if((x_31748 < n__4613__auto___31747)){
(a[x_31748] = x_31748);

var G__31749 = (x_31748 + (1));
x_31748 = G__31749;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28947 = (function (flag,meta28948){
this.flag = flag;
this.meta28948 = meta28948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28949,meta28948__$1){
var self__ = this;
var _28949__$1 = this;
return (new cljs.core.async.t_cljs$core$async28947(self__.flag,meta28948__$1));
}));

(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28949){
var self__ = this;
var _28949__$1 = this;
return self__.meta28948;
}));

(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28948","meta28948",921817827,null)], null);
}));

(cljs.core.async.t_cljs$core$async28947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28947");

(cljs.core.async.t_cljs$core$async28947.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28947.
 */
cljs.core.async.__GT_t_cljs$core$async28947 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28947(flag__$1,meta28948){
return (new cljs.core.async.t_cljs$core$async28947(flag__$1,meta28948));
});

}

return (new cljs.core.async.t_cljs$core$async28947(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28961 = (function (flag,cb,meta28962){
this.flag = flag;
this.cb = cb;
this.meta28962 = meta28962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28963,meta28962__$1){
var self__ = this;
var _28963__$1 = this;
return (new cljs.core.async.t_cljs$core$async28961(self__.flag,self__.cb,meta28962__$1));
}));

(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28963){
var self__ = this;
var _28963__$1 = this;
return self__.meta28962;
}));

(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28962","meta28962",-832489085,null)], null);
}));

(cljs.core.async.t_cljs$core$async28961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28961");

(cljs.core.async.t_cljs$core$async28961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28961.
 */
cljs.core.async.__GT_t_cljs$core$async28961 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28961(flag__$1,cb__$1,meta28962){
return (new cljs.core.async.t_cljs$core$async28961(flag__$1,cb__$1,meta28962));
});

}

return (new cljs.core.async.t_cljs$core$async28961(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28971_SHARP_){
var G__28981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28971_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28981) : fret.call(null,G__28981));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28972_SHARP_){
var G__28983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28972_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28983) : fret.call(null,G__28983));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31759 = (i + (1));
i = G__31759;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31762 = arguments.length;
var i__4737__auto___31763 = (0);
while(true){
if((i__4737__auto___31763 < len__4736__auto___31762)){
args__4742__auto__.push((arguments[i__4737__auto___31763]));

var G__31764 = (i__4737__auto___31763 + (1));
i__4737__auto___31763 = G__31764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28996){
var map__28997 = p__28996;
var map__28997__$1 = (((((!((map__28997 == null))))?(((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28997):map__28997);
var opts = map__28997__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28991){
var G__28992 = cljs.core.first(seq28991);
var seq28991__$1 = cljs.core.next(seq28991);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28992,seq28991__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29013 = arguments.length;
switch (G__29013) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28775__auto___31767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29048){
var state_val_29051 = (state_29048[(1)]);
if((state_val_29051 === (7))){
var inst_29040 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29057_31768 = state_29048__$1;
(statearr_29057_31768[(2)] = inst_29040);

(statearr_29057_31768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (1))){
var state_29048__$1 = state_29048;
var statearr_29058_31769 = state_29048__$1;
(statearr_29058_31769[(2)] = null);

(statearr_29058_31769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (4))){
var inst_29021 = (state_29048[(7)]);
var inst_29021__$1 = (state_29048[(2)]);
var inst_29022 = (inst_29021__$1 == null);
var state_29048__$1 = (function (){var statearr_29066 = state_29048;
(statearr_29066[(7)] = inst_29021__$1);

return statearr_29066;
})();
if(cljs.core.truth_(inst_29022)){
var statearr_29069_31770 = state_29048__$1;
(statearr_29069_31770[(1)] = (5));

} else {
var statearr_29071_31771 = state_29048__$1;
(statearr_29071_31771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (13))){
var state_29048__$1 = state_29048;
var statearr_29076_31772 = state_29048__$1;
(statearr_29076_31772[(2)] = null);

(statearr_29076_31772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (6))){
var inst_29021 = (state_29048[(7)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29048__$1,(11),to,inst_29021);
} else {
if((state_val_29051 === (3))){
var inst_29044 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29048__$1,inst_29044);
} else {
if((state_val_29051 === (12))){
var state_29048__$1 = state_29048;
var statearr_29081_31773 = state_29048__$1;
(statearr_29081_31773[(2)] = null);

(statearr_29081_31773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (2))){
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29048__$1,(4),from);
} else {
if((state_val_29051 === (11))){
var inst_29031 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
if(cljs.core.truth_(inst_29031)){
var statearr_29084_31775 = state_29048__$1;
(statearr_29084_31775[(1)] = (12));

} else {
var statearr_29086_31776 = state_29048__$1;
(statearr_29086_31776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (9))){
var state_29048__$1 = state_29048;
var statearr_29109_31778 = state_29048__$1;
(statearr_29109_31778[(2)] = null);

(statearr_29109_31778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (5))){
var state_29048__$1 = state_29048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29115_31779 = state_29048__$1;
(statearr_29115_31779[(1)] = (8));

} else {
var statearr_29116_31780 = state_29048__$1;
(statearr_29116_31780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (14))){
var inst_29038 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29119_31782 = state_29048__$1;
(statearr_29119_31782[(2)] = inst_29038);

(statearr_29119_31782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (10))){
var inst_29028 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29123_31784 = state_29048__$1;
(statearr_29123_31784[(2)] = inst_29028);

(statearr_29123_31784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (8))){
var inst_29025 = cljs.core.async.close_BANG_(to);
var state_29048__$1 = state_29048;
var statearr_29127_31787 = state_29048__$1;
(statearr_29127_31787[(2)] = inst_29025);

(statearr_29127_31787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_29129 = [null,null,null,null,null,null,null,null];
(statearr_29129[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_29129[(1)] = (1));

return statearr_29129;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_29048){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29048);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29131){var ex__28640__auto__ = e29131;
var statearr_29132_31792 = state_29048;
(statearr_29132_31792[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29048[(4)]))){
var statearr_29133_31794 = state_29048;
(statearr_29133_31794[(1)] = cljs.core.first((state_29048[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31796 = state_29048;
state_29048 = G__31796;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_29048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_29048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29137 = f__28776__auto__();
(statearr_29137[(6)] = c__28775__auto___31767);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29140){
var vec__29141 = p__29140;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(1),null);
var job = vec__29141;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28775__auto___31799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29148){
var state_val_29149 = (state_29148[(1)]);
if((state_val_29149 === (1))){
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29148__$1,(2),res,v);
} else {
if((state_val_29149 === (2))){
var inst_29145 = (state_29148[(2)]);
var inst_29146 = cljs.core.async.close_BANG_(res);
var state_29148__$1 = (function (){var statearr_29153 = state_29148;
(statearr_29153[(7)] = inst_29145);

return statearr_29153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29148__$1,inst_29146);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_29156 = [null,null,null,null,null,null,null,null];
(statearr_29156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__);

(statearr_29156[(1)] = (1));

return statearr_29156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1 = (function (state_29148){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29148);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29160){var ex__28640__auto__ = e29160;
var statearr_29161_31804 = state_29148;
(statearr_29161_31804[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29148[(4)]))){
var statearr_29162_31806 = state_29148;
(statearr_29162_31806[(1)] = cljs.core.first((state_29148[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31807 = state_29148;
state_29148 = G__31807;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = function(state_29148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1.call(this,state_29148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29163 = f__28776__auto__();
(statearr_29163[(6)] = c__28775__auto___31799);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29179){
var vec__29183 = p__29179;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(1),null);
var job = vec__29183;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___31808 = n;
var __31810 = (0);
while(true){
if((__31810 < n__4613__auto___31808)){
var G__29189_31811 = type;
var G__29189_31812__$1 = (((G__29189_31811 instanceof cljs.core.Keyword))?G__29189_31811.fqn:null);
switch (G__29189_31812__$1) {
case "compute":
var c__28775__auto___31814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31810,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = ((function (__31810,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function (state_29202){
var state_val_29203 = (state_29202[(1)]);
if((state_val_29203 === (1))){
var state_29202__$1 = state_29202;
var statearr_29208_31815 = state_29202__$1;
(statearr_29208_31815[(2)] = null);

(statearr_29208_31815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (2))){
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29202__$1,(4),jobs);
} else {
if((state_val_29203 === (3))){
var inst_29200 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29202__$1,inst_29200);
} else {
if((state_val_29203 === (4))){
var inst_29192 = (state_29202[(2)]);
var inst_29193 = process(inst_29192);
var state_29202__$1 = state_29202;
if(cljs.core.truth_(inst_29193)){
var statearr_29215_31818 = state_29202__$1;
(statearr_29215_31818[(1)] = (5));

} else {
var statearr_29216_31819 = state_29202__$1;
(statearr_29216_31819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (5))){
var state_29202__$1 = state_29202;
var statearr_29219_31820 = state_29202__$1;
(statearr_29219_31820[(2)] = null);

(statearr_29219_31820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (6))){
var state_29202__$1 = state_29202;
var statearr_29220_31821 = state_29202__$1;
(statearr_29220_31821[(2)] = null);

(statearr_29220_31821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (7))){
var inst_29198 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29222_31822 = state_29202__$1;
(statearr_29222_31822[(2)] = inst_29198);

(statearr_29222_31822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31810,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
;
return ((function (__31810,switch__28636__auto__,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_29223 = [null,null,null,null,null,null,null];
(statearr_29223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__);

(statearr_29223[(1)] = (1));

return statearr_29223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1 = (function (state_29202){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29202);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29239){var ex__28640__auto__ = e29239;
var statearr_29240_31824 = state_29202;
(statearr_29240_31824[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29202[(4)]))){
var statearr_29271_31825 = state_29202;
(statearr_29271_31825[(1)] = cljs.core.first((state_29202[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31826 = state_29202;
state_29202 = G__31826;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = function(state_29202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1.call(this,state_29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__;
})()
;})(__31810,switch__28636__auto__,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
})();
var state__28777__auto__ = (function (){var statearr_29280 = f__28776__auto__();
(statearr_29280[(6)] = c__28775__auto___31814);

return statearr_29280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
});})(__31810,c__28775__auto___31814,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
);


break;
case "async":
var c__28775__auto___31827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31810,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = ((function (__31810,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function (state_29303){
var state_val_29304 = (state_29303[(1)]);
if((state_val_29304 === (1))){
var state_29303__$1 = state_29303;
var statearr_29310_31830 = state_29303__$1;
(statearr_29310_31830[(2)] = null);

(statearr_29310_31830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (2))){
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29303__$1,(4),jobs);
} else {
if((state_val_29304 === (3))){
var inst_29294 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29303__$1,inst_29294);
} else {
if((state_val_29304 === (4))){
var inst_29283 = (state_29303[(2)]);
var inst_29284 = async(inst_29283);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29284)){
var statearr_29314_31832 = state_29303__$1;
(statearr_29314_31832[(1)] = (5));

} else {
var statearr_29315_31833 = state_29303__$1;
(statearr_29315_31833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (5))){
var state_29303__$1 = state_29303;
var statearr_29321_31835 = state_29303__$1;
(statearr_29321_31835[(2)] = null);

(statearr_29321_31835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (6))){
var state_29303__$1 = state_29303;
var statearr_29324_31836 = state_29303__$1;
(statearr_29324_31836[(2)] = null);

(statearr_29324_31836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (7))){
var inst_29292 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29328_31837 = state_29303__$1;
(statearr_29328_31837[(2)] = inst_29292);

(statearr_29328_31837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31810,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
;
return ((function (__31810,switch__28636__auto__,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_29329 = [null,null,null,null,null,null,null];
(statearr_29329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__);

(statearr_29329[(1)] = (1));

return statearr_29329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1 = (function (state_29303){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29303);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29342){var ex__28640__auto__ = e29342;
var statearr_29343_31839 = state_29303;
(statearr_29343_31839[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29303[(4)]))){
var statearr_29344_31840 = state_29303;
(statearr_29344_31840[(1)] = cljs.core.first((state_29303[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31841 = state_29303;
state_29303 = G__31841;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = function(state_29303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1.call(this,state_29303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__;
})()
;})(__31810,switch__28636__auto__,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
})();
var state__28777__auto__ = (function (){var statearr_29345 = f__28776__auto__();
(statearr_29345[(6)] = c__28775__auto___31827);

return statearr_29345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
});})(__31810,c__28775__auto___31827,G__29189_31811,G__29189_31812__$1,n__4613__auto___31808,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29189_31812__$1)].join('')));

}

var G__31842 = (__31810 + (1));
__31810 = G__31842;
continue;
} else {
}
break;
}

var c__28775__auto___31843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29367){
var state_val_29368 = (state_29367[(1)]);
if((state_val_29368 === (7))){
var inst_29363 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29370_31844 = state_29367__$1;
(statearr_29370_31844[(2)] = inst_29363);

(statearr_29370_31844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (1))){
var state_29367__$1 = state_29367;
var statearr_29373_31845 = state_29367__$1;
(statearr_29373_31845[(2)] = null);

(statearr_29373_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (4))){
var inst_29348 = (state_29367[(7)]);
var inst_29348__$1 = (state_29367[(2)]);
var inst_29349 = (inst_29348__$1 == null);
var state_29367__$1 = (function (){var statearr_29374 = state_29367;
(statearr_29374[(7)] = inst_29348__$1);

return statearr_29374;
})();
if(cljs.core.truth_(inst_29349)){
var statearr_29376_31850 = state_29367__$1;
(statearr_29376_31850[(1)] = (5));

} else {
var statearr_29377_31851 = state_29367__$1;
(statearr_29377_31851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (6))){
var inst_29348 = (state_29367[(7)]);
var inst_29353 = (state_29367[(8)]);
var inst_29353__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29355 = [inst_29348,inst_29353__$1];
var inst_29356 = (new cljs.core.PersistentVector(null,2,(5),inst_29354,inst_29355,null));
var state_29367__$1 = (function (){var statearr_29378 = state_29367;
(statearr_29378[(8)] = inst_29353__$1);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29367__$1,(8),jobs,inst_29356);
} else {
if((state_val_29368 === (3))){
var inst_29365 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29367__$1,inst_29365);
} else {
if((state_val_29368 === (2))){
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29367__$1,(4),from);
} else {
if((state_val_29368 === (9))){
var inst_29360 = (state_29367[(2)]);
var state_29367__$1 = (function (){var statearr_29381 = state_29367;
(statearr_29381[(9)] = inst_29360);

return statearr_29381;
})();
var statearr_29382_31852 = state_29367__$1;
(statearr_29382_31852[(2)] = null);

(statearr_29382_31852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (5))){
var inst_29351 = cljs.core.async.close_BANG_(jobs);
var state_29367__$1 = state_29367;
var statearr_29383_31853 = state_29367__$1;
(statearr_29383_31853[(2)] = inst_29351);

(statearr_29383_31853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (8))){
var inst_29353 = (state_29367[(8)]);
var inst_29358 = (state_29367[(2)]);
var state_29367__$1 = (function (){var statearr_29384 = state_29367;
(statearr_29384[(10)] = inst_29358);

return statearr_29384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29367__$1,(9),results,inst_29353);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1 = (function (state_29367){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29367);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29393){var ex__28640__auto__ = e29393;
var statearr_29399_31854 = state_29367;
(statearr_29399_31854[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29367[(4)]))){
var statearr_29402_31855 = state_29367;
(statearr_29402_31855[(1)] = cljs.core.first((state_29367[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31856 = state_29367;
state_29367 = G__31856;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = function(state_29367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1.call(this,state_29367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29436 = f__28776__auto__();
(statearr_29436[(6)] = c__28775__auto___31843);

return statearr_29436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


var c__28775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29490){
var state_val_29491 = (state_29490[(1)]);
if((state_val_29491 === (7))){
var inst_29485 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29499_31865 = state_29490__$1;
(statearr_29499_31865[(2)] = inst_29485);

(statearr_29499_31865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (20))){
var state_29490__$1 = state_29490;
var statearr_29500_31866 = state_29490__$1;
(statearr_29500_31866[(2)] = null);

(statearr_29500_31866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (1))){
var state_29490__$1 = state_29490;
var statearr_29503_31872 = state_29490__$1;
(statearr_29503_31872[(2)] = null);

(statearr_29503_31872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (4))){
var inst_29447 = (state_29490[(7)]);
var inst_29447__$1 = (state_29490[(2)]);
var inst_29448 = (inst_29447__$1 == null);
var state_29490__$1 = (function (){var statearr_29519 = state_29490;
(statearr_29519[(7)] = inst_29447__$1);

return statearr_29519;
})();
if(cljs.core.truth_(inst_29448)){
var statearr_29520_31874 = state_29490__$1;
(statearr_29520_31874[(1)] = (5));

} else {
var statearr_29521_31875 = state_29490__$1;
(statearr_29521_31875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (15))){
var inst_29464 = (state_29490[(8)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29490__$1,(18),to,inst_29464);
} else {
if((state_val_29491 === (21))){
var inst_29480 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29527_31882 = state_29490__$1;
(statearr_29527_31882[(2)] = inst_29480);

(statearr_29527_31882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (13))){
var inst_29482 = (state_29490[(2)]);
var state_29490__$1 = (function (){var statearr_29530 = state_29490;
(statearr_29530[(9)] = inst_29482);

return statearr_29530;
})();
var statearr_29532_31885 = state_29490__$1;
(statearr_29532_31885[(2)] = null);

(statearr_29532_31885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (6))){
var inst_29447 = (state_29490[(7)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29490__$1,(11),inst_29447);
} else {
if((state_val_29491 === (17))){
var inst_29474 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
if(cljs.core.truth_(inst_29474)){
var statearr_29535_31886 = state_29490__$1;
(statearr_29535_31886[(1)] = (19));

} else {
var statearr_29541_31887 = state_29490__$1;
(statearr_29541_31887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (3))){
var inst_29487 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29490__$1,inst_29487);
} else {
if((state_val_29491 === (12))){
var inst_29461 = (state_29490[(10)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29490__$1,(14),inst_29461);
} else {
if((state_val_29491 === (2))){
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29490__$1,(4),results);
} else {
if((state_val_29491 === (19))){
var state_29490__$1 = state_29490;
var statearr_29543_31888 = state_29490__$1;
(statearr_29543_31888[(2)] = null);

(statearr_29543_31888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (11))){
var inst_29461 = (state_29490[(2)]);
var state_29490__$1 = (function (){var statearr_29546 = state_29490;
(statearr_29546[(10)] = inst_29461);

return statearr_29546;
})();
var statearr_29547_31889 = state_29490__$1;
(statearr_29547_31889[(2)] = null);

(statearr_29547_31889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (9))){
var state_29490__$1 = state_29490;
var statearr_29550_31891 = state_29490__$1;
(statearr_29550_31891[(2)] = null);

(statearr_29550_31891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (5))){
var state_29490__$1 = state_29490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29551_31892 = state_29490__$1;
(statearr_29551_31892[(1)] = (8));

} else {
var statearr_29552_31893 = state_29490__$1;
(statearr_29552_31893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (14))){
var inst_29464 = (state_29490[(8)]);
var inst_29464__$1 = (state_29490[(2)]);
var inst_29467 = (inst_29464__$1 == null);
var inst_29468 = cljs.core.not(inst_29467);
var state_29490__$1 = (function (){var statearr_29553 = state_29490;
(statearr_29553[(8)] = inst_29464__$1);

return statearr_29553;
})();
if(inst_29468){
var statearr_29554_31898 = state_29490__$1;
(statearr_29554_31898[(1)] = (15));

} else {
var statearr_29555_31899 = state_29490__$1;
(statearr_29555_31899[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (16))){
var state_29490__$1 = state_29490;
var statearr_29560_31903 = state_29490__$1;
(statearr_29560_31903[(2)] = false);

(statearr_29560_31903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (10))){
var inst_29454 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29561_31904 = state_29490__$1;
(statearr_29561_31904[(2)] = inst_29454);

(statearr_29561_31904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (18))){
var inst_29471 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29562_31905 = state_29490__$1;
(statearr_29562_31905[(2)] = inst_29471);

(statearr_29562_31905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (8))){
var inst_29451 = cljs.core.async.close_BANG_(to);
var state_29490__$1 = state_29490;
var statearr_29563_31906 = state_29490__$1;
(statearr_29563_31906[(2)] = inst_29451);

(statearr_29563_31906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1 = (function (state_29490){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29490);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29568){var ex__28640__auto__ = e29568;
var statearr_29569_31914 = state_29490;
(statearr_29569_31914[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29490[(4)]))){
var statearr_29570_31918 = state_29490;
(statearr_29570_31918[(1)] = cljs.core.first((state_29490[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31923 = state_29490;
state_29490 = G__31923;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__ = function(state_29490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1.call(this,state_29490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29571 = f__28776__auto__();
(statearr_29571[(6)] = c__28775__auto__);

return statearr_29571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

return c__28775__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29575 = arguments.length;
switch (G__29575) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29588 = arguments.length;
switch (G__29588) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29602 = arguments.length;
switch (G__29602) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28775__auto___31956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29632){
var state_val_29633 = (state_29632[(1)]);
if((state_val_29633 === (7))){
var inst_29628 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29634_31961 = state_29632__$1;
(statearr_29634_31961[(2)] = inst_29628);

(statearr_29634_31961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (1))){
var state_29632__$1 = state_29632;
var statearr_29635_31969 = state_29632__$1;
(statearr_29635_31969[(2)] = null);

(statearr_29635_31969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (4))){
var inst_29608 = (state_29632[(7)]);
var inst_29608__$1 = (state_29632[(2)]);
var inst_29609 = (inst_29608__$1 == null);
var state_29632__$1 = (function (){var statearr_29640 = state_29632;
(statearr_29640[(7)] = inst_29608__$1);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29609)){
var statearr_29641_31975 = state_29632__$1;
(statearr_29641_31975[(1)] = (5));

} else {
var statearr_29642_31977 = state_29632__$1;
(statearr_29642_31977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (13))){
var state_29632__$1 = state_29632;
var statearr_29643_31981 = state_29632__$1;
(statearr_29643_31981[(2)] = null);

(statearr_29643_31981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (6))){
var inst_29608 = (state_29632[(7)]);
var inst_29615 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29608) : p.call(null,inst_29608));
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29615)){
var statearr_29644_31984 = state_29632__$1;
(statearr_29644_31984[(1)] = (9));

} else {
var statearr_29645_31985 = state_29632__$1;
(statearr_29645_31985[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (3))){
var inst_29630 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29632__$1,inst_29630);
} else {
if((state_val_29633 === (12))){
var state_29632__$1 = state_29632;
var statearr_29646_31986 = state_29632__$1;
(statearr_29646_31986[(2)] = null);

(statearr_29646_31986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (2))){
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29632__$1,(4),ch);
} else {
if((state_val_29633 === (11))){
var inst_29608 = (state_29632[(7)]);
var inst_29619 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29632__$1,(8),inst_29619,inst_29608);
} else {
if((state_val_29633 === (9))){
var state_29632__$1 = state_29632;
var statearr_29647_31996 = state_29632__$1;
(statearr_29647_31996[(2)] = tc);

(statearr_29647_31996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (5))){
var inst_29611 = cljs.core.async.close_BANG_(tc);
var inst_29612 = cljs.core.async.close_BANG_(fc);
var state_29632__$1 = (function (){var statearr_29648 = state_29632;
(statearr_29648[(8)] = inst_29611);

return statearr_29648;
})();
var statearr_29649_31997 = state_29632__$1;
(statearr_29649_31997[(2)] = inst_29612);

(statearr_29649_31997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (14))){
var inst_29626 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29650_31998 = state_29632__$1;
(statearr_29650_31998[(2)] = inst_29626);

(statearr_29650_31998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (10))){
var state_29632__$1 = state_29632;
var statearr_29651_31999 = state_29632__$1;
(statearr_29651_31999[(2)] = fc);

(statearr_29651_31999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (8))){
var inst_29621 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29621)){
var statearr_29653_32002 = state_29632__$1;
(statearr_29653_32002[(1)] = (12));

} else {
var statearr_29654_32003 = state_29632__$1;
(statearr_29654_32003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_29661 = [null,null,null,null,null,null,null,null,null];
(statearr_29661[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_29661[(1)] = (1));

return statearr_29661;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_29632){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29632);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29662){var ex__28640__auto__ = e29662;
var statearr_29663_32004 = state_29632;
(statearr_29663_32004[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29632[(4)]))){
var statearr_29664_32005 = state_29632;
(statearr_29664_32005[(1)] = cljs.core.first((state_29632[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_29632;
state_29632 = G__32008;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29665 = f__28776__auto__();
(statearr_29665[(6)] = c__28775__auto___31956);

return statearr_29665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29688){
var state_val_29689 = (state_29688[(1)]);
if((state_val_29689 === (7))){
var inst_29684 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
var statearr_29691_32011 = state_29688__$1;
(statearr_29691_32011[(2)] = inst_29684);

(statearr_29691_32011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (1))){
var inst_29666 = init;
var inst_29667 = inst_29666;
var state_29688__$1 = (function (){var statearr_29692 = state_29688;
(statearr_29692[(7)] = inst_29667);

return statearr_29692;
})();
var statearr_29693_32012 = state_29688__$1;
(statearr_29693_32012[(2)] = null);

(statearr_29693_32012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (4))){
var inst_29671 = (state_29688[(8)]);
var inst_29671__$1 = (state_29688[(2)]);
var inst_29672 = (inst_29671__$1 == null);
var state_29688__$1 = (function (){var statearr_29694 = state_29688;
(statearr_29694[(8)] = inst_29671__$1);

return statearr_29694;
})();
if(cljs.core.truth_(inst_29672)){
var statearr_29695_32013 = state_29688__$1;
(statearr_29695_32013[(1)] = (5));

} else {
var statearr_29696_32014 = state_29688__$1;
(statearr_29696_32014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (6))){
var inst_29675 = (state_29688[(9)]);
var inst_29667 = (state_29688[(7)]);
var inst_29671 = (state_29688[(8)]);
var inst_29675__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29667,inst_29671) : f.call(null,inst_29667,inst_29671));
var inst_29676 = cljs.core.reduced_QMARK_(inst_29675__$1);
var state_29688__$1 = (function (){var statearr_29698 = state_29688;
(statearr_29698[(9)] = inst_29675__$1);

return statearr_29698;
})();
if(inst_29676){
var statearr_29699_32017 = state_29688__$1;
(statearr_29699_32017[(1)] = (8));

} else {
var statearr_29700_32018 = state_29688__$1;
(statearr_29700_32018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (3))){
var inst_29686 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29688__$1,inst_29686);
} else {
if((state_val_29689 === (2))){
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29688__$1,(4),ch);
} else {
if((state_val_29689 === (9))){
var inst_29675 = (state_29688[(9)]);
var inst_29667 = inst_29675;
var state_29688__$1 = (function (){var statearr_29704 = state_29688;
(statearr_29704[(7)] = inst_29667);

return statearr_29704;
})();
var statearr_29705_32020 = state_29688__$1;
(statearr_29705_32020[(2)] = null);

(statearr_29705_32020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (5))){
var inst_29667 = (state_29688[(7)]);
var state_29688__$1 = state_29688;
var statearr_29710_32023 = state_29688__$1;
(statearr_29710_32023[(2)] = inst_29667);

(statearr_29710_32023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (10))){
var inst_29682 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
var statearr_29711_32025 = state_29688__$1;
(statearr_29711_32025[(2)] = inst_29682);

(statearr_29711_32025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (8))){
var inst_29675 = (state_29688[(9)]);
var inst_29678 = cljs.core.deref(inst_29675);
var state_29688__$1 = state_29688;
var statearr_29712_32030 = state_29688__$1;
(statearr_29712_32030[(2)] = inst_29678);

(statearr_29712_32030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28637__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28637__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = cljs$core$async$reduce_$_state_machine__28637__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var cljs$core$async$reduce_$_state_machine__28637__auto____1 = (function (state_29688){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29688);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29753){var ex__28640__auto__ = e29753;
var statearr_29754_32033 = state_29688;
(statearr_29754_32033[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29688[(4)]))){
var statearr_29755_32035 = state_29688;
(statearr_29755_32035[(1)] = cljs.core.first((state_29688[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32037 = state_29688;
state_29688 = G__32037;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28637__auto__ = function(state_29688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28637__auto____1.call(this,state_29688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28637__auto____0;
cljs$core$async$reduce_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28637__auto____1;
return cljs$core$async$reduce_$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29759 = f__28776__auto__();
(statearr_29759[(6)] = c__28775__auto__);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

return c__28775__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29765){
var state_val_29766 = (state_29765[(1)]);
if((state_val_29766 === (1))){
var inst_29760 = cljs.core.async.reduce(f__$1,init,ch);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29765__$1,(2),inst_29760);
} else {
if((state_val_29766 === (2))){
var inst_29762 = (state_29765[(2)]);
var inst_29763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29762) : f__$1.call(null,inst_29762));
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29765__$1,inst_29763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28637__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28637__auto____0 = (function (){
var statearr_29767 = [null,null,null,null,null,null,null];
(statearr_29767[(0)] = cljs$core$async$transduce_$_state_machine__28637__auto__);

(statearr_29767[(1)] = (1));

return statearr_29767;
});
var cljs$core$async$transduce_$_state_machine__28637__auto____1 = (function (state_29765){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29765);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29768){var ex__28640__auto__ = e29768;
var statearr_29770_32040 = state_29765;
(statearr_29770_32040[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29765[(4)]))){
var statearr_29775_32041 = state_29765;
(statearr_29775_32041[(1)] = cljs.core.first((state_29765[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32042 = state_29765;
state_29765 = G__32042;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28637__auto__ = function(state_29765){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28637__auto____1.call(this,state_29765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28637__auto____0;
cljs$core$async$transduce_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28637__auto____1;
return cljs$core$async$transduce_$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29777 = f__28776__auto__();
(statearr_29777[(6)] = c__28775__auto__);

return statearr_29777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

return c__28775__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29785 = arguments.length;
switch (G__29785) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_29810){
var state_val_29811 = (state_29810[(1)]);
if((state_val_29811 === (7))){
var inst_29792 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29816_32052 = state_29810__$1;
(statearr_29816_32052[(2)] = inst_29792);

(statearr_29816_32052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (1))){
var inst_29786 = cljs.core.seq(coll);
var inst_29787 = inst_29786;
var state_29810__$1 = (function (){var statearr_29819 = state_29810;
(statearr_29819[(7)] = inst_29787);

return statearr_29819;
})();
var statearr_29820_32053 = state_29810__$1;
(statearr_29820_32053[(2)] = null);

(statearr_29820_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (4))){
var inst_29787 = (state_29810[(7)]);
var inst_29790 = cljs.core.first(inst_29787);
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29810__$1,(7),ch,inst_29790);
} else {
if((state_val_29811 === (13))){
var inst_29804 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29821_32066 = state_29810__$1;
(statearr_29821_32066[(2)] = inst_29804);

(statearr_29821_32066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (6))){
var inst_29795 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29795)){
var statearr_29830_32073 = state_29810__$1;
(statearr_29830_32073[(1)] = (8));

} else {
var statearr_29831_32074 = state_29810__$1;
(statearr_29831_32074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (3))){
var inst_29808 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29810__$1,inst_29808);
} else {
if((state_val_29811 === (12))){
var state_29810__$1 = state_29810;
var statearr_29833_32075 = state_29810__$1;
(statearr_29833_32075[(2)] = null);

(statearr_29833_32075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (2))){
var inst_29787 = (state_29810[(7)]);
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29787)){
var statearr_29834_32076 = state_29810__$1;
(statearr_29834_32076[(1)] = (4));

} else {
var statearr_29835_32077 = state_29810__$1;
(statearr_29835_32077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (11))){
var inst_29801 = cljs.core.async.close_BANG_(ch);
var state_29810__$1 = state_29810;
var statearr_29838_32078 = state_29810__$1;
(statearr_29838_32078[(2)] = inst_29801);

(statearr_29838_32078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (9))){
var state_29810__$1 = state_29810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29842_32083 = state_29810__$1;
(statearr_29842_32083[(1)] = (11));

} else {
var statearr_29843_32084 = state_29810__$1;
(statearr_29843_32084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (5))){
var inst_29787 = (state_29810[(7)]);
var state_29810__$1 = state_29810;
var statearr_29844_32086 = state_29810__$1;
(statearr_29844_32086[(2)] = inst_29787);

(statearr_29844_32086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (10))){
var inst_29806 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29847_32110 = state_29810__$1;
(statearr_29847_32110[(2)] = inst_29806);

(statearr_29847_32110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (8))){
var inst_29787 = (state_29810[(7)]);
var inst_29797 = cljs.core.next(inst_29787);
var inst_29787__$1 = inst_29797;
var state_29810__$1 = (function (){var statearr_29848 = state_29810;
(statearr_29848[(7)] = inst_29787__$1);

return statearr_29848;
})();
var statearr_29849_32111 = state_29810__$1;
(statearr_29849_32111[(2)] = null);

(statearr_29849_32111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_29853 = [null,null,null,null,null,null,null,null];
(statearr_29853[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_29853[(1)] = (1));

return statearr_29853;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_29810){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_29810);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e29855){var ex__28640__auto__ = e29855;
var statearr_29856_32120 = state_29810;
(statearr_29856_32120[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_29810[(4)]))){
var statearr_29857_32123 = state_29810;
(statearr_29857_32123[(1)] = cljs.core.first((state_29810[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32124 = state_29810;
state_29810 = G__32124;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_29810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_29810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_29858 = f__28776__auto__();
(statearr_29858[(6)] = c__28775__auto__);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

return c__28775__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29860 = arguments.length;
switch (G__29860) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32133 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32133(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32135 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32135(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32142 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32142(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32147 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32147(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29900 = (function (ch,cs,meta29901){
this.ch = ch;
this.cs = cs;
this.meta29901 = meta29901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29902,meta29901__$1){
var self__ = this;
var _29902__$1 = this;
return (new cljs.core.async.t_cljs$core$async29900(self__.ch,self__.cs,meta29901__$1));
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29902){
var self__ = this;
var _29902__$1 = this;
return self__.meta29901;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29901","meta29901",-2083029093,null)], null);
}));

(cljs.core.async.t_cljs$core$async29900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29900");

(cljs.core.async.t_cljs$core$async29900.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29900.
 */
cljs.core.async.__GT_t_cljs$core$async29900 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29900(ch__$1,cs__$1,meta29901){
return (new cljs.core.async.t_cljs$core$async29900(ch__$1,cs__$1,meta29901));
});

}

return (new cljs.core.async.t_cljs$core$async29900(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28775__auto___32156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_30052){
var state_val_30053 = (state_30052[(1)]);
if((state_val_30053 === (7))){
var inst_30048 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30055_32157 = state_30052__$1;
(statearr_30055_32157[(2)] = inst_30048);

(statearr_30055_32157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (20))){
var inst_29949 = (state_30052[(7)]);
var inst_29961 = cljs.core.first(inst_29949);
var inst_29962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29961,(0),null);
var inst_29963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29961,(1),null);
var state_30052__$1 = (function (){var statearr_30056 = state_30052;
(statearr_30056[(8)] = inst_29962);

return statearr_30056;
})();
if(cljs.core.truth_(inst_29963)){
var statearr_30058_32158 = state_30052__$1;
(statearr_30058_32158[(1)] = (22));

} else {
var statearr_30059_32159 = state_30052__$1;
(statearr_30059_32159[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (27))){
var inst_29991 = (state_30052[(9)]);
var inst_29998 = (state_30052[(10)]);
var inst_29914 = (state_30052[(11)]);
var inst_29993 = (state_30052[(12)]);
var inst_29998__$1 = cljs.core._nth(inst_29991,inst_29993);
var inst_29999 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29998__$1,inst_29914,done);
var state_30052__$1 = (function (){var statearr_30063 = state_30052;
(statearr_30063[(10)] = inst_29998__$1);

return statearr_30063;
})();
if(cljs.core.truth_(inst_29999)){
var statearr_30064_32160 = state_30052__$1;
(statearr_30064_32160[(1)] = (30));

} else {
var statearr_30065_32161 = state_30052__$1;
(statearr_30065_32161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (1))){
var state_30052__$1 = state_30052;
var statearr_30066_32162 = state_30052__$1;
(statearr_30066_32162[(2)] = null);

(statearr_30066_32162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (24))){
var inst_29949 = (state_30052[(7)]);
var inst_29968 = (state_30052[(2)]);
var inst_29969 = cljs.core.next(inst_29949);
var inst_29923 = inst_29969;
var inst_29924 = null;
var inst_29925 = (0);
var inst_29926 = (0);
var state_30052__$1 = (function (){var statearr_30067 = state_30052;
(statearr_30067[(13)] = inst_29968);

(statearr_30067[(14)] = inst_29923);

(statearr_30067[(15)] = inst_29924);

(statearr_30067[(16)] = inst_29925);

(statearr_30067[(17)] = inst_29926);

return statearr_30067;
})();
var statearr_30068_32172 = state_30052__$1;
(statearr_30068_32172[(2)] = null);

(statearr_30068_32172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (39))){
var state_30052__$1 = state_30052;
var statearr_30072_32173 = state_30052__$1;
(statearr_30072_32173[(2)] = null);

(statearr_30072_32173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (4))){
var inst_29914 = (state_30052[(11)]);
var inst_29914__$1 = (state_30052[(2)]);
var inst_29915 = (inst_29914__$1 == null);
var state_30052__$1 = (function (){var statearr_30073 = state_30052;
(statearr_30073[(11)] = inst_29914__$1);

return statearr_30073;
})();
if(cljs.core.truth_(inst_29915)){
var statearr_30074_32174 = state_30052__$1;
(statearr_30074_32174[(1)] = (5));

} else {
var statearr_30075_32175 = state_30052__$1;
(statearr_30075_32175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (15))){
var inst_29923 = (state_30052[(14)]);
var inst_29924 = (state_30052[(15)]);
var inst_29925 = (state_30052[(16)]);
var inst_29926 = (state_30052[(17)]);
var inst_29945 = (state_30052[(2)]);
var inst_29946 = (inst_29926 + (1));
var tmp30069 = inst_29923;
var tmp30070 = inst_29924;
var tmp30071 = inst_29925;
var inst_29923__$1 = tmp30069;
var inst_29924__$1 = tmp30070;
var inst_29925__$1 = tmp30071;
var inst_29926__$1 = inst_29946;
var state_30052__$1 = (function (){var statearr_30078 = state_30052;
(statearr_30078[(14)] = inst_29923__$1);

(statearr_30078[(15)] = inst_29924__$1);

(statearr_30078[(16)] = inst_29925__$1);

(statearr_30078[(17)] = inst_29926__$1);

(statearr_30078[(18)] = inst_29945);

return statearr_30078;
})();
var statearr_30082_32185 = state_30052__$1;
(statearr_30082_32185[(2)] = null);

(statearr_30082_32185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (21))){
var inst_29972 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30086_32188 = state_30052__$1;
(statearr_30086_32188[(2)] = inst_29972);

(statearr_30086_32188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (31))){
var inst_29998 = (state_30052[(10)]);
var inst_30002 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29998);
var state_30052__$1 = state_30052;
var statearr_30087_32189 = state_30052__$1;
(statearr_30087_32189[(2)] = inst_30002);

(statearr_30087_32189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (32))){
var inst_29991 = (state_30052[(9)]);
var inst_29992 = (state_30052[(19)]);
var inst_29993 = (state_30052[(12)]);
var inst_29990 = (state_30052[(20)]);
var inst_30004 = (state_30052[(2)]);
var inst_30005 = (inst_29993 + (1));
var tmp30083 = inst_29991;
var tmp30084 = inst_29992;
var tmp30085 = inst_29990;
var inst_29990__$1 = tmp30085;
var inst_29991__$1 = tmp30083;
var inst_29992__$1 = tmp30084;
var inst_29993__$1 = inst_30005;
var state_30052__$1 = (function (){var statearr_30088 = state_30052;
(statearr_30088[(9)] = inst_29991__$1);

(statearr_30088[(21)] = inst_30004);

(statearr_30088[(19)] = inst_29992__$1);

(statearr_30088[(12)] = inst_29993__$1);

(statearr_30088[(20)] = inst_29990__$1);

return statearr_30088;
})();
var statearr_30093_32191 = state_30052__$1;
(statearr_30093_32191[(2)] = null);

(statearr_30093_32191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (40))){
var inst_30021 = (state_30052[(22)]);
var inst_30025 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30021);
var state_30052__$1 = state_30052;
var statearr_30094_32198 = state_30052__$1;
(statearr_30094_32198[(2)] = inst_30025);

(statearr_30094_32198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (33))){
var inst_30009 = (state_30052[(23)]);
var inst_30014 = cljs.core.chunked_seq_QMARK_(inst_30009);
var state_30052__$1 = state_30052;
if(inst_30014){
var statearr_30095_32199 = state_30052__$1;
(statearr_30095_32199[(1)] = (36));

} else {
var statearr_30102_32200 = state_30052__$1;
(statearr_30102_32200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (13))){
var inst_29936 = (state_30052[(24)]);
var inst_29942 = cljs.core.async.close_BANG_(inst_29936);
var state_30052__$1 = state_30052;
var statearr_30103_32201 = state_30052__$1;
(statearr_30103_32201[(2)] = inst_29942);

(statearr_30103_32201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (22))){
var inst_29962 = (state_30052[(8)]);
var inst_29965 = cljs.core.async.close_BANG_(inst_29962);
var state_30052__$1 = state_30052;
var statearr_30104_32204 = state_30052__$1;
(statearr_30104_32204[(2)] = inst_29965);

(statearr_30104_32204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (36))){
var inst_30009 = (state_30052[(23)]);
var inst_30016 = cljs.core.chunk_first(inst_30009);
var inst_30017 = cljs.core.chunk_rest(inst_30009);
var inst_30018 = cljs.core.count(inst_30016);
var inst_29990 = inst_30017;
var inst_29991 = inst_30016;
var inst_29992 = inst_30018;
var inst_29993 = (0);
var state_30052__$1 = (function (){var statearr_30111 = state_30052;
(statearr_30111[(9)] = inst_29991);

(statearr_30111[(19)] = inst_29992);

(statearr_30111[(12)] = inst_29993);

(statearr_30111[(20)] = inst_29990);

return statearr_30111;
})();
var statearr_30112_32205 = state_30052__$1;
(statearr_30112_32205[(2)] = null);

(statearr_30112_32205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (41))){
var inst_30009 = (state_30052[(23)]);
var inst_30027 = (state_30052[(2)]);
var inst_30028 = cljs.core.next(inst_30009);
var inst_29990 = inst_30028;
var inst_29991 = null;
var inst_29992 = (0);
var inst_29993 = (0);
var state_30052__$1 = (function (){var statearr_30128 = state_30052;
(statearr_30128[(9)] = inst_29991);

(statearr_30128[(19)] = inst_29992);

(statearr_30128[(25)] = inst_30027);

(statearr_30128[(12)] = inst_29993);

(statearr_30128[(20)] = inst_29990);

return statearr_30128;
})();
var statearr_30129_32210 = state_30052__$1;
(statearr_30129_32210[(2)] = null);

(statearr_30129_32210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (43))){
var state_30052__$1 = state_30052;
var statearr_30133_32212 = state_30052__$1;
(statearr_30133_32212[(2)] = null);

(statearr_30133_32212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (29))){
var inst_30036 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30135_32214 = state_30052__$1;
(statearr_30135_32214[(2)] = inst_30036);

(statearr_30135_32214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (44))){
var inst_30045 = (state_30052[(2)]);
var state_30052__$1 = (function (){var statearr_30136 = state_30052;
(statearr_30136[(26)] = inst_30045);

return statearr_30136;
})();
var statearr_30137_32215 = state_30052__$1;
(statearr_30137_32215[(2)] = null);

(statearr_30137_32215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (6))){
var inst_29982 = (state_30052[(27)]);
var inst_29981 = cljs.core.deref(cs);
var inst_29982__$1 = cljs.core.keys(inst_29981);
var inst_29983 = cljs.core.count(inst_29982__$1);
var inst_29984 = cljs.core.reset_BANG_(dctr,inst_29983);
var inst_29989 = cljs.core.seq(inst_29982__$1);
var inst_29990 = inst_29989;
var inst_29991 = null;
var inst_29992 = (0);
var inst_29993 = (0);
var state_30052__$1 = (function (){var statearr_30138 = state_30052;
(statearr_30138[(9)] = inst_29991);

(statearr_30138[(27)] = inst_29982__$1);

(statearr_30138[(19)] = inst_29992);

(statearr_30138[(12)] = inst_29993);

(statearr_30138[(20)] = inst_29990);

(statearr_30138[(28)] = inst_29984);

return statearr_30138;
})();
var statearr_30139_32216 = state_30052__$1;
(statearr_30139_32216[(2)] = null);

(statearr_30139_32216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (28))){
var inst_30009 = (state_30052[(23)]);
var inst_29990 = (state_30052[(20)]);
var inst_30009__$1 = cljs.core.seq(inst_29990);
var state_30052__$1 = (function (){var statearr_30140 = state_30052;
(statearr_30140[(23)] = inst_30009__$1);

return statearr_30140;
})();
if(inst_30009__$1){
var statearr_30141_32217 = state_30052__$1;
(statearr_30141_32217[(1)] = (33));

} else {
var statearr_30142_32218 = state_30052__$1;
(statearr_30142_32218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (25))){
var inst_29992 = (state_30052[(19)]);
var inst_29993 = (state_30052[(12)]);
var inst_29995 = (inst_29993 < inst_29992);
var inst_29996 = inst_29995;
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29996)){
var statearr_30143_32219 = state_30052__$1;
(statearr_30143_32219[(1)] = (27));

} else {
var statearr_30144_32220 = state_30052__$1;
(statearr_30144_32220[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (34))){
var state_30052__$1 = state_30052;
var statearr_30145_32225 = state_30052__$1;
(statearr_30145_32225[(2)] = null);

(statearr_30145_32225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (17))){
var state_30052__$1 = state_30052;
var statearr_30146_32226 = state_30052__$1;
(statearr_30146_32226[(2)] = null);

(statearr_30146_32226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (3))){
var inst_30050 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30052__$1,inst_30050);
} else {
if((state_val_30053 === (12))){
var inst_29977 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30148_32231 = state_30052__$1;
(statearr_30148_32231[(2)] = inst_29977);

(statearr_30148_32231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (2))){
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30052__$1,(4),ch);
} else {
if((state_val_30053 === (23))){
var state_30052__$1 = state_30052;
var statearr_30155_32232 = state_30052__$1;
(statearr_30155_32232[(2)] = null);

(statearr_30155_32232[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (35))){
var inst_30034 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30156_32233 = state_30052__$1;
(statearr_30156_32233[(2)] = inst_30034);

(statearr_30156_32233[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (19))){
var inst_29949 = (state_30052[(7)]);
var inst_29953 = cljs.core.chunk_first(inst_29949);
var inst_29954 = cljs.core.chunk_rest(inst_29949);
var inst_29955 = cljs.core.count(inst_29953);
var inst_29923 = inst_29954;
var inst_29924 = inst_29953;
var inst_29925 = inst_29955;
var inst_29926 = (0);
var state_30052__$1 = (function (){var statearr_30157 = state_30052;
(statearr_30157[(14)] = inst_29923);

(statearr_30157[(15)] = inst_29924);

(statearr_30157[(16)] = inst_29925);

(statearr_30157[(17)] = inst_29926);

return statearr_30157;
})();
var statearr_30158_32235 = state_30052__$1;
(statearr_30158_32235[(2)] = null);

(statearr_30158_32235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (11))){
var inst_29923 = (state_30052[(14)]);
var inst_29949 = (state_30052[(7)]);
var inst_29949__$1 = cljs.core.seq(inst_29923);
var state_30052__$1 = (function (){var statearr_30159 = state_30052;
(statearr_30159[(7)] = inst_29949__$1);

return statearr_30159;
})();
if(inst_29949__$1){
var statearr_30160_32236 = state_30052__$1;
(statearr_30160_32236[(1)] = (16));

} else {
var statearr_30161_32237 = state_30052__$1;
(statearr_30161_32237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (9))){
var inst_29979 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30162_32242 = state_30052__$1;
(statearr_30162_32242[(2)] = inst_29979);

(statearr_30162_32242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (5))){
var inst_29921 = cljs.core.deref(cs);
var inst_29922 = cljs.core.seq(inst_29921);
var inst_29923 = inst_29922;
var inst_29924 = null;
var inst_29925 = (0);
var inst_29926 = (0);
var state_30052__$1 = (function (){var statearr_30168 = state_30052;
(statearr_30168[(14)] = inst_29923);

(statearr_30168[(15)] = inst_29924);

(statearr_30168[(16)] = inst_29925);

(statearr_30168[(17)] = inst_29926);

return statearr_30168;
})();
var statearr_30178_32243 = state_30052__$1;
(statearr_30178_32243[(2)] = null);

(statearr_30178_32243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (14))){
var state_30052__$1 = state_30052;
var statearr_30179_32244 = state_30052__$1;
(statearr_30179_32244[(2)] = null);

(statearr_30179_32244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (45))){
var inst_30042 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30180_32245 = state_30052__$1;
(statearr_30180_32245[(2)] = inst_30042);

(statearr_30180_32245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (26))){
var inst_29982 = (state_30052[(27)]);
var inst_30038 = (state_30052[(2)]);
var inst_30039 = cljs.core.seq(inst_29982);
var state_30052__$1 = (function (){var statearr_30181 = state_30052;
(statearr_30181[(29)] = inst_30038);

return statearr_30181;
})();
if(inst_30039){
var statearr_30182_32246 = state_30052__$1;
(statearr_30182_32246[(1)] = (42));

} else {
var statearr_30183_32247 = state_30052__$1;
(statearr_30183_32247[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (16))){
var inst_29949 = (state_30052[(7)]);
var inst_29951 = cljs.core.chunked_seq_QMARK_(inst_29949);
var state_30052__$1 = state_30052;
if(inst_29951){
var statearr_30184_32248 = state_30052__$1;
(statearr_30184_32248[(1)] = (19));

} else {
var statearr_30185_32257 = state_30052__$1;
(statearr_30185_32257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (38))){
var inst_30031 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30186_32258 = state_30052__$1;
(statearr_30186_32258[(2)] = inst_30031);

(statearr_30186_32258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (30))){
var state_30052__$1 = state_30052;
var statearr_30187_32262 = state_30052__$1;
(statearr_30187_32262[(2)] = null);

(statearr_30187_32262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (10))){
var inst_29924 = (state_30052[(15)]);
var inst_29926 = (state_30052[(17)]);
var inst_29934 = cljs.core._nth(inst_29924,inst_29926);
var inst_29936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29934,(0),null);
var inst_29937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29934,(1),null);
var state_30052__$1 = (function (){var statearr_30188 = state_30052;
(statearr_30188[(24)] = inst_29936);

return statearr_30188;
})();
if(cljs.core.truth_(inst_29937)){
var statearr_30189_32266 = state_30052__$1;
(statearr_30189_32266[(1)] = (13));

} else {
var statearr_30190_32267 = state_30052__$1;
(statearr_30190_32267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (18))){
var inst_29975 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30193_32268 = state_30052__$1;
(statearr_30193_32268[(2)] = inst_29975);

(statearr_30193_32268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (42))){
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30052__$1,(45),dchan);
} else {
if((state_val_30053 === (37))){
var inst_30021 = (state_30052[(22)]);
var inst_29914 = (state_30052[(11)]);
var inst_30009 = (state_30052[(23)]);
var inst_30021__$1 = cljs.core.first(inst_30009);
var inst_30022 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30021__$1,inst_29914,done);
var state_30052__$1 = (function (){var statearr_30198 = state_30052;
(statearr_30198[(22)] = inst_30021__$1);

return statearr_30198;
})();
if(cljs.core.truth_(inst_30022)){
var statearr_30199_32275 = state_30052__$1;
(statearr_30199_32275[(1)] = (39));

} else {
var statearr_30200_32279 = state_30052__$1;
(statearr_30200_32279[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (8))){
var inst_29925 = (state_30052[(16)]);
var inst_29926 = (state_30052[(17)]);
var inst_29928 = (inst_29926 < inst_29925);
var inst_29929 = inst_29928;
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_29929)){
var statearr_30201_32280 = state_30052__$1;
(statearr_30201_32280[(1)] = (10));

} else {
var statearr_30202_32281 = state_30052__$1;
(statearr_30202_32281[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28637__auto__ = null;
var cljs$core$async$mult_$_state_machine__28637__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$mult_$_state_machine__28637__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$mult_$_state_machine__28637__auto____1 = (function (state_30052){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_30052);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e30204){var ex__28640__auto__ = e30204;
var statearr_30205_32282 = state_30052;
(statearr_30205_32282[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_30052[(4)]))){
var statearr_30206_32283 = state_30052;
(statearr_30206_32283[(1)] = cljs.core.first((state_30052[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32284 = state_30052;
state_30052 = G__32284;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28637__auto__ = function(state_30052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28637__auto____1.call(this,state_30052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28637__auto____0;
cljs$core$async$mult_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28637__auto____1;
return cljs$core$async$mult_$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_30207 = f__28776__auto__();
(statearr_30207[(6)] = c__28775__auto___32156);

return statearr_30207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30209 = arguments.length;
switch (G__30209) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32291 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32291(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32293 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32293(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32299 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32299(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32309 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32309(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32310 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32310(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32315 = arguments.length;
var i__4737__auto___32316 = (0);
while(true){
if((i__4737__auto___32316 < len__4736__auto___32315)){
args__4742__auto__.push((arguments[i__4737__auto___32316]));

var G__32317 = (i__4737__auto___32316 + (1));
i__4737__auto___32316 = G__32317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30249){
var map__30250 = p__30249;
var map__30250__$1 = (((((!((map__30250 == null))))?(((((map__30250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30250):map__30250);
var opts = map__30250__$1;
var statearr_30255_32323 = state;
(statearr_30255_32323[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30257_32325 = state;
(statearr_30257_32325[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30261_32326 = state;
(statearr_30261_32326[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30241){
var G__30242 = cljs.core.first(seq30241);
var seq30241__$1 = cljs.core.next(seq30241);
var G__30243 = cljs.core.first(seq30241__$1);
var seq30241__$2 = cljs.core.next(seq30241__$1);
var G__30244 = cljs.core.first(seq30241__$2);
var seq30241__$3 = cljs.core.next(seq30241__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30242,G__30243,G__30244,seq30241__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30285 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30286){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30286 = meta30286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30287,meta30286__$1){
var self__ = this;
var _30287__$1 = this;
return (new cljs.core.async.t_cljs$core$async30285(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30286__$1));
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30287){
var self__ = this;
var _30287__$1 = this;
return self__.meta30286;
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30285.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30286","meta30286",-1425730086,null)], null);
}));

(cljs.core.async.t_cljs$core$async30285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30285");

(cljs.core.async.t_cljs$core$async30285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30285.
 */
cljs.core.async.__GT_t_cljs$core$async30285 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30285(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30286){
return (new cljs.core.async.t_cljs$core$async30285(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30286));
});

}

return (new cljs.core.async.t_cljs$core$async30285(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28775__auto___32346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_30432){
var state_val_30434 = (state_30432[(1)]);
if((state_val_30434 === (7))){
var inst_30336 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30438_32347 = state_30432__$1;
(statearr_30438_32347[(2)] = inst_30336);

(statearr_30438_32347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (20))){
var inst_30348 = (state_30432[(7)]);
var state_30432__$1 = state_30432;
var statearr_30445_32348 = state_30432__$1;
(statearr_30445_32348[(2)] = inst_30348);

(statearr_30445_32348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (27))){
var state_30432__$1 = state_30432;
var statearr_30447_32349 = state_30432__$1;
(statearr_30447_32349[(2)] = null);

(statearr_30447_32349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (1))){
var inst_30319 = (state_30432[(8)]);
var inst_30319__$1 = calc_state();
var inst_30322 = (inst_30319__$1 == null);
var inst_30323 = cljs.core.not(inst_30322);
var state_30432__$1 = (function (){var statearr_30452 = state_30432;
(statearr_30452[(8)] = inst_30319__$1);

return statearr_30452;
})();
if(inst_30323){
var statearr_30454_32353 = state_30432__$1;
(statearr_30454_32353[(1)] = (2));

} else {
var statearr_30455_32354 = state_30432__$1;
(statearr_30455_32354[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (24))){
var inst_30384 = (state_30432[(9)]);
var inst_30374 = (state_30432[(10)]);
var inst_30402 = (state_30432[(11)]);
var inst_30402__$1 = (inst_30374.cljs$core$IFn$_invoke$arity$1 ? inst_30374.cljs$core$IFn$_invoke$arity$1(inst_30384) : inst_30374.call(null,inst_30384));
var state_30432__$1 = (function (){var statearr_30456 = state_30432;
(statearr_30456[(11)] = inst_30402__$1);

return statearr_30456;
})();
if(cljs.core.truth_(inst_30402__$1)){
var statearr_30457_32355 = state_30432__$1;
(statearr_30457_32355[(1)] = (29));

} else {
var statearr_30458_32356 = state_30432__$1;
(statearr_30458_32356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (4))){
var inst_30339 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30339)){
var statearr_30460_32357 = state_30432__$1;
(statearr_30460_32357[(1)] = (8));

} else {
var statearr_30462_32358 = state_30432__$1;
(statearr_30462_32358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (15))){
var inst_30367 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30367)){
var statearr_30467_32359 = state_30432__$1;
(statearr_30467_32359[(1)] = (19));

} else {
var statearr_30472_32360 = state_30432__$1;
(statearr_30472_32360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (21))){
var inst_30373 = (state_30432[(12)]);
var inst_30373__$1 = (state_30432[(2)]);
var inst_30374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30432__$1 = (function (){var statearr_30476 = state_30432;
(statearr_30476[(10)] = inst_30374);

(statearr_30476[(13)] = inst_30375);

(statearr_30476[(12)] = inst_30373__$1);

return statearr_30476;
})();
return cljs.core.async.ioc_alts_BANG_(state_30432__$1,(22),inst_30376);
} else {
if((state_val_30434 === (31))){
var inst_30410 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30410)){
var statearr_30481_32361 = state_30432__$1;
(statearr_30481_32361[(1)] = (32));

} else {
var statearr_30482_32362 = state_30432__$1;
(statearr_30482_32362[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (32))){
var inst_30383 = (state_30432[(14)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30432__$1,(35),out,inst_30383);
} else {
if((state_val_30434 === (33))){
var inst_30373 = (state_30432[(12)]);
var inst_30348 = inst_30373;
var state_30432__$1 = (function (){var statearr_30488 = state_30432;
(statearr_30488[(7)] = inst_30348);

return statearr_30488;
})();
var statearr_30489_32366 = state_30432__$1;
(statearr_30489_32366[(2)] = null);

(statearr_30489_32366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (13))){
var inst_30348 = (state_30432[(7)]);
var inst_30356 = inst_30348.cljs$lang$protocol_mask$partition0$;
var inst_30357 = (inst_30356 & (64));
var inst_30358 = inst_30348.cljs$core$ISeq$;
var inst_30359 = (cljs.core.PROTOCOL_SENTINEL === inst_30358);
var inst_30360 = ((inst_30357) || (inst_30359));
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30360)){
var statearr_30491_32371 = state_30432__$1;
(statearr_30491_32371[(1)] = (16));

} else {
var statearr_30492_32372 = state_30432__$1;
(statearr_30492_32372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (22))){
var inst_30384 = (state_30432[(9)]);
var inst_30383 = (state_30432[(14)]);
var inst_30382 = (state_30432[(2)]);
var inst_30383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30382,(0),null);
var inst_30384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30382,(1),null);
var inst_30387 = (inst_30383__$1 == null);
var inst_30388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30384__$1,change);
var inst_30389 = ((inst_30387) || (inst_30388));
var state_30432__$1 = (function (){var statearr_30495 = state_30432;
(statearr_30495[(9)] = inst_30384__$1);

(statearr_30495[(14)] = inst_30383__$1);

return statearr_30495;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30498_32377 = state_30432__$1;
(statearr_30498_32377[(1)] = (23));

} else {
var statearr_30499_32378 = state_30432__$1;
(statearr_30499_32378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (36))){
var inst_30373 = (state_30432[(12)]);
var inst_30348 = inst_30373;
var state_30432__$1 = (function (){var statearr_30500 = state_30432;
(statearr_30500[(7)] = inst_30348);

return statearr_30500;
})();
var statearr_30502_32380 = state_30432__$1;
(statearr_30502_32380[(2)] = null);

(statearr_30502_32380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (29))){
var inst_30402 = (state_30432[(11)]);
var state_30432__$1 = state_30432;
var statearr_30503_32383 = state_30432__$1;
(statearr_30503_32383[(2)] = inst_30402);

(statearr_30503_32383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (6))){
var state_30432__$1 = state_30432;
var statearr_30505_32386 = state_30432__$1;
(statearr_30505_32386[(2)] = false);

(statearr_30505_32386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (28))){
var inst_30398 = (state_30432[(2)]);
var inst_30399 = calc_state();
var inst_30348 = inst_30399;
var state_30432__$1 = (function (){var statearr_30515 = state_30432;
(statearr_30515[(15)] = inst_30398);

(statearr_30515[(7)] = inst_30348);

return statearr_30515;
})();
var statearr_30516_32389 = state_30432__$1;
(statearr_30516_32389[(2)] = null);

(statearr_30516_32389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (25))){
var inst_30425 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30517_32395 = state_30432__$1;
(statearr_30517_32395[(2)] = inst_30425);

(statearr_30517_32395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (34))){
var inst_30423 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30520_32398 = state_30432__$1;
(statearr_30520_32398[(2)] = inst_30423);

(statearr_30520_32398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (17))){
var state_30432__$1 = state_30432;
var statearr_30526_32399 = state_30432__$1;
(statearr_30526_32399[(2)] = false);

(statearr_30526_32399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (3))){
var state_30432__$1 = state_30432;
var statearr_30527_32400 = state_30432__$1;
(statearr_30527_32400[(2)] = false);

(statearr_30527_32400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (12))){
var inst_30427 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30432__$1,inst_30427);
} else {
if((state_val_30434 === (2))){
var inst_30319 = (state_30432[(8)]);
var inst_30327 = inst_30319.cljs$lang$protocol_mask$partition0$;
var inst_30328 = (inst_30327 & (64));
var inst_30330 = inst_30319.cljs$core$ISeq$;
var inst_30331 = (cljs.core.PROTOCOL_SENTINEL === inst_30330);
var inst_30332 = ((inst_30328) || (inst_30331));
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30332)){
var statearr_30530_32403 = state_30432__$1;
(statearr_30530_32403[(1)] = (5));

} else {
var statearr_30531_32404 = state_30432__$1;
(statearr_30531_32404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (23))){
var inst_30383 = (state_30432[(14)]);
var inst_30392 = (inst_30383 == null);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30392)){
var statearr_30535_32406 = state_30432__$1;
(statearr_30535_32406[(1)] = (26));

} else {
var statearr_30536_32407 = state_30432__$1;
(statearr_30536_32407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (35))){
var inst_30413 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30413)){
var statearr_30538_32408 = state_30432__$1;
(statearr_30538_32408[(1)] = (36));

} else {
var statearr_30539_32409 = state_30432__$1;
(statearr_30539_32409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (19))){
var inst_30348 = (state_30432[(7)]);
var inst_30369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30348);
var state_30432__$1 = state_30432;
var statearr_30540_32411 = state_30432__$1;
(statearr_30540_32411[(2)] = inst_30369);

(statearr_30540_32411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (11))){
var inst_30348 = (state_30432[(7)]);
var inst_30352 = (inst_30348 == null);
var inst_30353 = cljs.core.not(inst_30352);
var state_30432__$1 = state_30432;
if(inst_30353){
var statearr_30541_32415 = state_30432__$1;
(statearr_30541_32415[(1)] = (13));

} else {
var statearr_30542_32416 = state_30432__$1;
(statearr_30542_32416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (9))){
var inst_30319 = (state_30432[(8)]);
var state_30432__$1 = state_30432;
var statearr_30543_32417 = state_30432__$1;
(statearr_30543_32417[(2)] = inst_30319);

(statearr_30543_32417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (5))){
var state_30432__$1 = state_30432;
var statearr_30544_32418 = state_30432__$1;
(statearr_30544_32418[(2)] = true);

(statearr_30544_32418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (14))){
var state_30432__$1 = state_30432;
var statearr_30549_32419 = state_30432__$1;
(statearr_30549_32419[(2)] = false);

(statearr_30549_32419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (26))){
var inst_30384 = (state_30432[(9)]);
var inst_30395 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30384);
var state_30432__$1 = state_30432;
var statearr_30554_32420 = state_30432__$1;
(statearr_30554_32420[(2)] = inst_30395);

(statearr_30554_32420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (16))){
var state_30432__$1 = state_30432;
var statearr_30559_32421 = state_30432__$1;
(statearr_30559_32421[(2)] = true);

(statearr_30559_32421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (38))){
var inst_30419 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30560_32422 = state_30432__$1;
(statearr_30560_32422[(2)] = inst_30419);

(statearr_30560_32422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (30))){
var inst_30384 = (state_30432[(9)]);
var inst_30374 = (state_30432[(10)]);
var inst_30375 = (state_30432[(13)]);
var inst_30405 = cljs.core.empty_QMARK_(inst_30374);
var inst_30406 = (inst_30375.cljs$core$IFn$_invoke$arity$1 ? inst_30375.cljs$core$IFn$_invoke$arity$1(inst_30384) : inst_30375.call(null,inst_30384));
var inst_30407 = cljs.core.not(inst_30406);
var inst_30408 = ((inst_30405) && (inst_30407));
var state_30432__$1 = state_30432;
var statearr_30561_32424 = state_30432__$1;
(statearr_30561_32424[(2)] = inst_30408);

(statearr_30561_32424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (10))){
var inst_30319 = (state_30432[(8)]);
var inst_30344 = (state_30432[(2)]);
var inst_30345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30344,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30344,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30344,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30348 = inst_30319;
var state_30432__$1 = (function (){var statearr_30566 = state_30432;
(statearr_30566[(7)] = inst_30348);

(statearr_30566[(16)] = inst_30345);

(statearr_30566[(17)] = inst_30346);

(statearr_30566[(18)] = inst_30347);

return statearr_30566;
})();
var statearr_30567_32425 = state_30432__$1;
(statearr_30567_32425[(2)] = null);

(statearr_30567_32425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (18))){
var inst_30364 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30568_32426 = state_30432__$1;
(statearr_30568_32426[(2)] = inst_30364);

(statearr_30568_32426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (37))){
var state_30432__$1 = state_30432;
var statearr_30569_32427 = state_30432__$1;
(statearr_30569_32427[(2)] = null);

(statearr_30569_32427[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (8))){
var inst_30319 = (state_30432[(8)]);
var inst_30341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30319);
var state_30432__$1 = state_30432;
var statearr_30570_32430 = state_30432__$1;
(statearr_30570_32430[(2)] = inst_30341);

(statearr_30570_32430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28637__auto__ = null;
var cljs$core$async$mix_$_state_machine__28637__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$mix_$_state_machine__28637__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$mix_$_state_machine__28637__auto____1 = (function (state_30432){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_30432);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e30582){var ex__28640__auto__ = e30582;
var statearr_30583_32432 = state_30432;
(statearr_30583_32432[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_30432[(4)]))){
var statearr_30586_32436 = state_30432;
(statearr_30586_32436[(1)] = cljs.core.first((state_30432[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_30432;
state_30432 = G__32438;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28637__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28637__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28637__auto____0;
cljs$core$async$mix_$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28637__auto____1;
return cljs$core$async$mix_$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_30592 = f__28776__auto__();
(statearr_30592[(6)] = c__28775__auto___32346);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32439 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32439(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32440 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32440(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32442 = (function() {
var G__32443 = null;
var G__32443__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32443__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32443 = function(p,v){
switch(arguments.length){
case 1:
return G__32443__1.call(this,p);
case 2:
return G__32443__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32443.cljs$core$IFn$_invoke$arity$1 = G__32443__1;
G__32443.cljs$core$IFn$_invoke$arity$2 = G__32443__2;
return G__32443;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30617 = arguments.length;
switch (G__30617) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32442(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32442(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30633 = arguments.length;
switch (G__30633) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30631_SHARP_){
if(cljs.core.truth_((p1__30631_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30631_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30631_SHARP_.call(null,topic)))){
return p1__30631_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30631_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30639 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30640){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30640 = meta30640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30641,meta30640__$1){
var self__ = this;
var _30641__$1 = this;
return (new cljs.core.async.t_cljs$core$async30639(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30640__$1));
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30641){
var self__ = this;
var _30641__$1 = this;
return self__.meta30640;
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30640","meta30640",-1647552450,null)], null);
}));

(cljs.core.async.t_cljs$core$async30639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30639");

(cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30639.
 */
cljs.core.async.__GT_t_cljs$core$async30639 = (function cljs$core$async$__GT_t_cljs$core$async30639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30640){
return (new cljs.core.async.t_cljs$core$async30639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30640));
});

}

return (new cljs.core.async.t_cljs$core$async30639(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28775__auto___32458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (7))){
var inst_30729 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30738_32460 = state_30734__$1;
(statearr_30738_32460[(2)] = inst_30729);

(statearr_30738_32460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (20))){
var state_30734__$1 = state_30734;
var statearr_30739_32461 = state_30734__$1;
(statearr_30739_32461[(2)] = null);

(statearr_30739_32461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (1))){
var state_30734__$1 = state_30734;
var statearr_30741_32462 = state_30734__$1;
(statearr_30741_32462[(2)] = null);

(statearr_30741_32462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (24))){
var inst_30709 = (state_30734[(7)]);
var inst_30718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30709);
var state_30734__$1 = state_30734;
var statearr_30747_32463 = state_30734__$1;
(statearr_30747_32463[(2)] = inst_30718);

(statearr_30747_32463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (4))){
var inst_30658 = (state_30734[(8)]);
var inst_30658__$1 = (state_30734[(2)]);
var inst_30659 = (inst_30658__$1 == null);
var state_30734__$1 = (function (){var statearr_30750 = state_30734;
(statearr_30750[(8)] = inst_30658__$1);

return statearr_30750;
})();
if(cljs.core.truth_(inst_30659)){
var statearr_30752_32465 = state_30734__$1;
(statearr_30752_32465[(1)] = (5));

} else {
var statearr_30754_32466 = state_30734__$1;
(statearr_30754_32466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (15))){
var inst_30703 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30755_32467 = state_30734__$1;
(statearr_30755_32467[(2)] = inst_30703);

(statearr_30755_32467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (21))){
var inst_30723 = (state_30734[(2)]);
var state_30734__$1 = (function (){var statearr_30756 = state_30734;
(statearr_30756[(9)] = inst_30723);

return statearr_30756;
})();
var statearr_30757_32468 = state_30734__$1;
(statearr_30757_32468[(2)] = null);

(statearr_30757_32468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (13))){
var inst_30682 = (state_30734[(10)]);
var inst_30684 = cljs.core.chunked_seq_QMARK_(inst_30682);
var state_30734__$1 = state_30734;
if(inst_30684){
var statearr_30763_32469 = state_30734__$1;
(statearr_30763_32469[(1)] = (16));

} else {
var statearr_30764_32470 = state_30734__$1;
(statearr_30764_32470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (22))){
var inst_30715 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30715)){
var statearr_30767_32471 = state_30734__$1;
(statearr_30767_32471[(1)] = (23));

} else {
var statearr_30769_32472 = state_30734__$1;
(statearr_30769_32472[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (6))){
var inst_30709 = (state_30734[(7)]);
var inst_30711 = (state_30734[(11)]);
var inst_30658 = (state_30734[(8)]);
var inst_30709__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30658) : topic_fn.call(null,inst_30658));
var inst_30710 = cljs.core.deref(mults);
var inst_30711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30710,inst_30709__$1);
var state_30734__$1 = (function (){var statearr_30770 = state_30734;
(statearr_30770[(7)] = inst_30709__$1);

(statearr_30770[(11)] = inst_30711__$1);

return statearr_30770;
})();
if(cljs.core.truth_(inst_30711__$1)){
var statearr_30771_32473 = state_30734__$1;
(statearr_30771_32473[(1)] = (19));

} else {
var statearr_30772_32474 = state_30734__$1;
(statearr_30772_32474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (25))){
var inst_30720 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30773_32475 = state_30734__$1;
(statearr_30773_32475[(2)] = inst_30720);

(statearr_30773_32475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (17))){
var inst_30682 = (state_30734[(10)]);
var inst_30694 = cljs.core.first(inst_30682);
var inst_30695 = cljs.core.async.muxch_STAR_(inst_30694);
var inst_30696 = cljs.core.async.close_BANG_(inst_30695);
var inst_30697 = cljs.core.next(inst_30682);
var inst_30668 = inst_30697;
var inst_30669 = null;
var inst_30670 = (0);
var inst_30671 = (0);
var state_30734__$1 = (function (){var statearr_30777 = state_30734;
(statearr_30777[(12)] = inst_30671);

(statearr_30777[(13)] = inst_30668);

(statearr_30777[(14)] = inst_30669);

(statearr_30777[(15)] = inst_30670);

(statearr_30777[(16)] = inst_30696);

return statearr_30777;
})();
var statearr_30779_32477 = state_30734__$1;
(statearr_30779_32477[(2)] = null);

(statearr_30779_32477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (3))){
var inst_30731 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30734__$1,inst_30731);
} else {
if((state_val_30735 === (12))){
var inst_30705 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30785_32478 = state_30734__$1;
(statearr_30785_32478[(2)] = inst_30705);

(statearr_30785_32478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (2))){
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30734__$1,(4),ch);
} else {
if((state_val_30735 === (23))){
var state_30734__$1 = state_30734;
var statearr_30786_32479 = state_30734__$1;
(statearr_30786_32479[(2)] = null);

(statearr_30786_32479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (19))){
var inst_30711 = (state_30734[(11)]);
var inst_30658 = (state_30734[(8)]);
var inst_30713 = cljs.core.async.muxch_STAR_(inst_30711);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30734__$1,(22),inst_30713,inst_30658);
} else {
if((state_val_30735 === (11))){
var inst_30682 = (state_30734[(10)]);
var inst_30668 = (state_30734[(13)]);
var inst_30682__$1 = cljs.core.seq(inst_30668);
var state_30734__$1 = (function (){var statearr_30787 = state_30734;
(statearr_30787[(10)] = inst_30682__$1);

return statearr_30787;
})();
if(inst_30682__$1){
var statearr_30788_32480 = state_30734__$1;
(statearr_30788_32480[(1)] = (13));

} else {
var statearr_30789_32481 = state_30734__$1;
(statearr_30789_32481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (9))){
var inst_30707 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30791_32483 = state_30734__$1;
(statearr_30791_32483[(2)] = inst_30707);

(statearr_30791_32483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (5))){
var inst_30665 = cljs.core.deref(mults);
var inst_30666 = cljs.core.vals(inst_30665);
var inst_30667 = cljs.core.seq(inst_30666);
var inst_30668 = inst_30667;
var inst_30669 = null;
var inst_30670 = (0);
var inst_30671 = (0);
var state_30734__$1 = (function (){var statearr_30793 = state_30734;
(statearr_30793[(12)] = inst_30671);

(statearr_30793[(13)] = inst_30668);

(statearr_30793[(14)] = inst_30669);

(statearr_30793[(15)] = inst_30670);

return statearr_30793;
})();
var statearr_30795_32485 = state_30734__$1;
(statearr_30795_32485[(2)] = null);

(statearr_30795_32485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (14))){
var state_30734__$1 = state_30734;
var statearr_30801_32487 = state_30734__$1;
(statearr_30801_32487[(2)] = null);

(statearr_30801_32487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (16))){
var inst_30682 = (state_30734[(10)]);
var inst_30686 = cljs.core.chunk_first(inst_30682);
var inst_30689 = cljs.core.chunk_rest(inst_30682);
var inst_30690 = cljs.core.count(inst_30686);
var inst_30668 = inst_30689;
var inst_30669 = inst_30686;
var inst_30670 = inst_30690;
var inst_30671 = (0);
var state_30734__$1 = (function (){var statearr_30802 = state_30734;
(statearr_30802[(12)] = inst_30671);

(statearr_30802[(13)] = inst_30668);

(statearr_30802[(14)] = inst_30669);

(statearr_30802[(15)] = inst_30670);

return statearr_30802;
})();
var statearr_30803_32488 = state_30734__$1;
(statearr_30803_32488[(2)] = null);

(statearr_30803_32488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (10))){
var inst_30671 = (state_30734[(12)]);
var inst_30668 = (state_30734[(13)]);
var inst_30669 = (state_30734[(14)]);
var inst_30670 = (state_30734[(15)]);
var inst_30676 = cljs.core._nth(inst_30669,inst_30671);
var inst_30677 = cljs.core.async.muxch_STAR_(inst_30676);
var inst_30678 = cljs.core.async.close_BANG_(inst_30677);
var inst_30679 = (inst_30671 + (1));
var tmp30796 = inst_30668;
var tmp30797 = inst_30669;
var tmp30798 = inst_30670;
var inst_30668__$1 = tmp30796;
var inst_30669__$1 = tmp30797;
var inst_30670__$1 = tmp30798;
var inst_30671__$1 = inst_30679;
var state_30734__$1 = (function (){var statearr_30805 = state_30734;
(statearr_30805[(17)] = inst_30678);

(statearr_30805[(12)] = inst_30671__$1);

(statearr_30805[(13)] = inst_30668__$1);

(statearr_30805[(14)] = inst_30669__$1);

(statearr_30805[(15)] = inst_30670__$1);

return statearr_30805;
})();
var statearr_30806_32490 = state_30734__$1;
(statearr_30806_32490[(2)] = null);

(statearr_30806_32490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (18))){
var inst_30700 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30807_32493 = state_30734__$1;
(statearr_30807_32493[(2)] = inst_30700);

(statearr_30807_32493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (8))){
var inst_30671 = (state_30734[(12)]);
var inst_30670 = (state_30734[(15)]);
var inst_30673 = (inst_30671 < inst_30670);
var inst_30674 = inst_30673;
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30674)){
var statearr_30809_32498 = state_30734__$1;
(statearr_30809_32498[(1)] = (10));

} else {
var statearr_30810_32499 = state_30734__$1;
(statearr_30810_32499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_30812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30812[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_30812[(1)] = (1));

return statearr_30812;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_30734){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_30734);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e30819){var ex__28640__auto__ = e30819;
var statearr_30820_32503 = state_30734;
(statearr_30820_32503[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_30734[(4)]))){
var statearr_30821_32504 = state_30734;
(statearr_30821_32504[(1)] = cljs.core.first((state_30734[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32505 = state_30734;
state_30734 = G__32505;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_30824 = f__28776__auto__();
(statearr_30824[(6)] = c__28775__auto___32458);

return statearr_30824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30828 = arguments.length;
switch (G__30828) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30845 = arguments.length;
switch (G__30845) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30860 = arguments.length;
switch (G__30860) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28775__auto___32520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_30916){
var state_val_30917 = (state_30916[(1)]);
if((state_val_30917 === (7))){
var state_30916__$1 = state_30916;
var statearr_30919_32521 = state_30916__$1;
(statearr_30919_32521[(2)] = null);

(statearr_30919_32521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (1))){
var state_30916__$1 = state_30916;
var statearr_30920_32522 = state_30916__$1;
(statearr_30920_32522[(2)] = null);

(statearr_30920_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (4))){
var inst_30872 = (state_30916[(7)]);
var inst_30871 = (state_30916[(8)]);
var inst_30874 = (inst_30872 < inst_30871);
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30874)){
var statearr_30921_32524 = state_30916__$1;
(statearr_30921_32524[(1)] = (6));

} else {
var statearr_30922_32525 = state_30916__$1;
(statearr_30922_32525[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (15))){
var inst_30901 = (state_30916[(9)]);
var inst_30906 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30901);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30916__$1,(17),out,inst_30906);
} else {
if((state_val_30917 === (13))){
var inst_30901 = (state_30916[(9)]);
var inst_30901__$1 = (state_30916[(2)]);
var inst_30902 = cljs.core.some(cljs.core.nil_QMARK_,inst_30901__$1);
var state_30916__$1 = (function (){var statearr_30924 = state_30916;
(statearr_30924[(9)] = inst_30901__$1);

return statearr_30924;
})();
if(cljs.core.truth_(inst_30902)){
var statearr_30925_32527 = state_30916__$1;
(statearr_30925_32527[(1)] = (14));

} else {
var statearr_30927_32528 = state_30916__$1;
(statearr_30927_32528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (6))){
var state_30916__$1 = state_30916;
var statearr_30928_32529 = state_30916__$1;
(statearr_30928_32529[(2)] = null);

(statearr_30928_32529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (17))){
var inst_30908 = (state_30916[(2)]);
var state_30916__$1 = (function (){var statearr_30935 = state_30916;
(statearr_30935[(10)] = inst_30908);

return statearr_30935;
})();
var statearr_30937_32530 = state_30916__$1;
(statearr_30937_32530[(2)] = null);

(statearr_30937_32530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (3))){
var inst_30914 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30916__$1,inst_30914);
} else {
if((state_val_30917 === (12))){
var _ = (function (){var statearr_30939 = state_30916;
(statearr_30939[(4)] = cljs.core.rest((state_30916[(4)])));

return statearr_30939;
})();
var state_30916__$1 = state_30916;
var ex30932 = (state_30916__$1[(2)]);
var statearr_30940_32540 = state_30916__$1;
(statearr_30940_32540[(5)] = ex30932);


if((ex30932 instanceof Object)){
var statearr_30943_32547 = state_30916__$1;
(statearr_30943_32547[(1)] = (11));

(statearr_30943_32547[(5)] = null);

} else {
throw ex30932;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (2))){
var inst_30870 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30871 = cnt;
var inst_30872 = (0);
var state_30916__$1 = (function (){var statearr_30946 = state_30916;
(statearr_30946[(7)] = inst_30872);

(statearr_30946[(8)] = inst_30871);

(statearr_30946[(11)] = inst_30870);

return statearr_30946;
})();
var statearr_30947_32556 = state_30916__$1;
(statearr_30947_32556[(2)] = null);

(statearr_30947_32556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (11))){
var inst_30880 = (state_30916[(2)]);
var inst_30881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30916__$1 = (function (){var statearr_30953 = state_30916;
(statearr_30953[(12)] = inst_30880);

return statearr_30953;
})();
var statearr_30954_32561 = state_30916__$1;
(statearr_30954_32561[(2)] = inst_30881);

(statearr_30954_32561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (9))){
var inst_30872 = (state_30916[(7)]);
var _ = (function (){var statearr_30957 = state_30916;
(statearr_30957[(4)] = cljs.core.cons((12),(state_30916[(4)])));

return statearr_30957;
})();
var inst_30887 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30872) : chs__$1.call(null,inst_30872));
var inst_30888 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30872) : done.call(null,inst_30872));
var inst_30889 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30887,inst_30888);
var ___$1 = (function (){var statearr_30960 = state_30916;
(statearr_30960[(4)] = cljs.core.rest((state_30916[(4)])));

return statearr_30960;
})();
var state_30916__$1 = state_30916;
var statearr_30962_32566 = state_30916__$1;
(statearr_30962_32566[(2)] = inst_30889);

(statearr_30962_32566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (5))){
var inst_30899 = (state_30916[(2)]);
var state_30916__$1 = (function (){var statearr_30963 = state_30916;
(statearr_30963[(13)] = inst_30899);

return statearr_30963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30916__$1,(13),dchan);
} else {
if((state_val_30917 === (14))){
var inst_30904 = cljs.core.async.close_BANG_(out);
var state_30916__$1 = state_30916;
var statearr_30964_32568 = state_30916__$1;
(statearr_30964_32568[(2)] = inst_30904);

(statearr_30964_32568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (16))){
var inst_30911 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30965_32571 = state_30916__$1;
(statearr_30965_32571[(2)] = inst_30911);

(statearr_30965_32571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (10))){
var inst_30872 = (state_30916[(7)]);
var inst_30892 = (state_30916[(2)]);
var inst_30893 = (inst_30872 + (1));
var inst_30872__$1 = inst_30893;
var state_30916__$1 = (function (){var statearr_30966 = state_30916;
(statearr_30966[(7)] = inst_30872__$1);

(statearr_30966[(14)] = inst_30892);

return statearr_30966;
})();
var statearr_30967_32572 = state_30916__$1;
(statearr_30967_32572[(2)] = null);

(statearr_30967_32572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (8))){
var inst_30897 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30968_32573 = state_30916__$1;
(statearr_30968_32573[(2)] = inst_30897);

(statearr_30968_32573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_30916){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_30916);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e30970){var ex__28640__auto__ = e30970;
var statearr_30971_32584 = state_30916;
(statearr_30971_32584[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_30916[(4)]))){
var statearr_30974_32585 = state_30916;
(statearr_30974_32585[(1)] = cljs.core.first((state_30916[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32588 = state_30916;
state_30916 = G__32588;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_30916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_30916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_30976 = f__28776__auto__();
(statearr_30976[(6)] = c__28775__auto___32520);

return statearr_30976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30984 = arguments.length;
switch (G__30984) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___32596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31035){
var state_val_31036 = (state_31035[(1)]);
if((state_val_31036 === (7))){
var inst_31007 = (state_31035[(7)]);
var inst_31008 = (state_31035[(8)]);
var inst_31007__$1 = (state_31035[(2)]);
var inst_31008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31007__$1,(0),null);
var inst_31009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31007__$1,(1),null);
var inst_31011 = (inst_31008__$1 == null);
var state_31035__$1 = (function (){var statearr_31043 = state_31035;
(statearr_31043[(7)] = inst_31007__$1);

(statearr_31043[(8)] = inst_31008__$1);

(statearr_31043[(9)] = inst_31009);

return statearr_31043;
})();
if(cljs.core.truth_(inst_31011)){
var statearr_31044_32600 = state_31035__$1;
(statearr_31044_32600[(1)] = (8));

} else {
var statearr_31045_32601 = state_31035__$1;
(statearr_31045_32601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (1))){
var inst_30997 = cljs.core.vec(chs);
var inst_30998 = inst_30997;
var state_31035__$1 = (function (){var statearr_31046 = state_31035;
(statearr_31046[(10)] = inst_30998);

return statearr_31046;
})();
var statearr_31047_32602 = state_31035__$1;
(statearr_31047_32602[(2)] = null);

(statearr_31047_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (4))){
var inst_30998 = (state_31035[(10)]);
var state_31035__$1 = state_31035;
return cljs.core.async.ioc_alts_BANG_(state_31035__$1,(7),inst_30998);
} else {
if((state_val_31036 === (6))){
var inst_31030 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31049_32613 = state_31035__$1;
(statearr_31049_32613[(2)] = inst_31030);

(statearr_31049_32613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (3))){
var inst_31033 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31035__$1,inst_31033);
} else {
if((state_val_31036 === (2))){
var inst_30998 = (state_31035[(10)]);
var inst_31000 = cljs.core.count(inst_30998);
var inst_31001 = (inst_31000 > (0));
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_31001)){
var statearr_31053_32614 = state_31035__$1;
(statearr_31053_32614[(1)] = (4));

} else {
var statearr_31054_32615 = state_31035__$1;
(statearr_31054_32615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (11))){
var inst_30998 = (state_31035[(10)]);
var inst_31022 = (state_31035[(2)]);
var tmp31050 = inst_30998;
var inst_30998__$1 = tmp31050;
var state_31035__$1 = (function (){var statearr_31055 = state_31035;
(statearr_31055[(11)] = inst_31022);

(statearr_31055[(10)] = inst_30998__$1);

return statearr_31055;
})();
var statearr_31060_32621 = state_31035__$1;
(statearr_31060_32621[(2)] = null);

(statearr_31060_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (9))){
var inst_31008 = (state_31035[(8)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31035__$1,(11),out,inst_31008);
} else {
if((state_val_31036 === (5))){
var inst_31027 = cljs.core.async.close_BANG_(out);
var state_31035__$1 = state_31035;
var statearr_31067_32628 = state_31035__$1;
(statearr_31067_32628[(2)] = inst_31027);

(statearr_31067_32628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (10))){
var inst_31025 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31068_32633 = state_31035__$1;
(statearr_31068_32633[(2)] = inst_31025);

(statearr_31068_32633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (8))){
var inst_31007 = (state_31035[(7)]);
var inst_30998 = (state_31035[(10)]);
var inst_31008 = (state_31035[(8)]);
var inst_31009 = (state_31035[(9)]);
var inst_31017 = (function (){var cs = inst_30998;
var vec__31003 = inst_31007;
var v = inst_31008;
var c = inst_31009;
return (function (p1__30981_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30981_SHARP_);
});
})();
var inst_31018 = cljs.core.filterv(inst_31017,inst_30998);
var inst_30998__$1 = inst_31018;
var state_31035__$1 = (function (){var statearr_31074 = state_31035;
(statearr_31074[(10)] = inst_30998__$1);

return statearr_31074;
})();
var statearr_31079_32634 = state_31035__$1;
(statearr_31079_32634[(2)] = null);

(statearr_31079_32634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31084[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31084[(1)] = (1));

return statearr_31084;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31035){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31035);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31087){var ex__28640__auto__ = e31087;
var statearr_31088_32643 = state_31035;
(statearr_31088_32643[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31035[(4)]))){
var statearr_31089_32644 = state_31035;
(statearr_31089_32644[(1)] = cljs.core.first((state_31035[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32645 = state_31035;
state_31035 = G__32645;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31092 = f__28776__auto__();
(statearr_31092[(6)] = c__28775__auto___32596);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31100 = arguments.length;
switch (G__31100) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___32651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31131){
var state_val_31132 = (state_31131[(1)]);
if((state_val_31132 === (7))){
var inst_31109 = (state_31131[(7)]);
var inst_31109__$1 = (state_31131[(2)]);
var inst_31110 = (inst_31109__$1 == null);
var inst_31111 = cljs.core.not(inst_31110);
var state_31131__$1 = (function (){var statearr_31137 = state_31131;
(statearr_31137[(7)] = inst_31109__$1);

return statearr_31137;
})();
if(inst_31111){
var statearr_31138_32656 = state_31131__$1;
(statearr_31138_32656[(1)] = (8));

} else {
var statearr_31143_32657 = state_31131__$1;
(statearr_31143_32657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (1))){
var inst_31103 = (0);
var state_31131__$1 = (function (){var statearr_31145 = state_31131;
(statearr_31145[(8)] = inst_31103);

return statearr_31145;
})();
var statearr_31146_32658 = state_31131__$1;
(statearr_31146_32658[(2)] = null);

(statearr_31146_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (4))){
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(7),ch);
} else {
if((state_val_31132 === (6))){
var inst_31123 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31147_32662 = state_31131__$1;
(statearr_31147_32662[(2)] = inst_31123);

(statearr_31147_32662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (3))){
var inst_31125 = (state_31131[(2)]);
var inst_31126 = cljs.core.async.close_BANG_(out);
var state_31131__$1 = (function (){var statearr_31150 = state_31131;
(statearr_31150[(9)] = inst_31125);

return statearr_31150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31131__$1,inst_31126);
} else {
if((state_val_31132 === (2))){
var inst_31103 = (state_31131[(8)]);
var inst_31105 = (inst_31103 < n);
var state_31131__$1 = state_31131;
if(cljs.core.truth_(inst_31105)){
var statearr_31151_32671 = state_31131__$1;
(statearr_31151_32671[(1)] = (4));

} else {
var statearr_31152_32672 = state_31131__$1;
(statearr_31152_32672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (11))){
var inst_31103 = (state_31131[(8)]);
var inst_31114 = (state_31131[(2)]);
var inst_31116 = (inst_31103 + (1));
var inst_31103__$1 = inst_31116;
var state_31131__$1 = (function (){var statearr_31158 = state_31131;
(statearr_31158[(8)] = inst_31103__$1);

(statearr_31158[(10)] = inst_31114);

return statearr_31158;
})();
var statearr_31159_32677 = state_31131__$1;
(statearr_31159_32677[(2)] = null);

(statearr_31159_32677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (9))){
var state_31131__$1 = state_31131;
var statearr_31161_32680 = state_31131__$1;
(statearr_31161_32680[(2)] = null);

(statearr_31161_32680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (5))){
var state_31131__$1 = state_31131;
var statearr_31162_32683 = state_31131__$1;
(statearr_31162_32683[(2)] = null);

(statearr_31162_32683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (10))){
var inst_31120 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31163_32687 = state_31131__$1;
(statearr_31163_32687[(2)] = inst_31120);

(statearr_31163_32687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (8))){
var inst_31109 = (state_31131[(7)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31131__$1,(11),out,inst_31109);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31131){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31131);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31169){var ex__28640__auto__ = e31169;
var statearr_31171_32690 = state_31131;
(statearr_31171_32690[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31131[(4)]))){
var statearr_31174_32691 = state_31131;
(statearr_31174_32691[(1)] = cljs.core.first((state_31131[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32694 = state_31131;
state_31131 = G__32694;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31176 = f__28776__auto__();
(statearr_31176[(6)] = c__28775__auto___32651);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31181 = (function (f,ch,meta31182){
this.f = f;
this.ch = ch;
this.meta31182 = meta31182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31183,meta31182__$1){
var self__ = this;
var _31183__$1 = this;
return (new cljs.core.async.t_cljs$core$async31181(self__.f,self__.ch,meta31182__$1));
}));

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31183){
var self__ = this;
var _31183__$1 = this;
return self__.meta31182;
}));

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31194 = (function (f,ch,meta31182,_,fn1,meta31195){
this.f = f;
this.ch = ch;
this.meta31182 = meta31182;
this._ = _;
this.fn1 = fn1;
this.meta31195 = meta31195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31196,meta31195__$1){
var self__ = this;
var _31196__$1 = this;
return (new cljs.core.async.t_cljs$core$async31194(self__.f,self__.ch,self__.meta31182,self__._,self__.fn1,meta31195__$1));
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31196){
var self__ = this;
var _31196__$1 = this;
return self__.meta31195;
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31177_SHARP_){
var G__31210 = (((p1__31177_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31177_SHARP_) : self__.f.call(null,p1__31177_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31210) : f1.call(null,G__31210));
});
}));

(cljs.core.async.t_cljs$core$async31194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31182","meta31182",-222321250,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31181","cljs.core.async/t_cljs$core$async31181",-1581342314,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31195","meta31195",1206363406,null)], null);
}));

(cljs.core.async.t_cljs$core$async31194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31194");

(cljs.core.async.t_cljs$core$async31194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31194.
 */
cljs.core.async.__GT_t_cljs$core$async31194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31194(f__$1,ch__$1,meta31182__$1,___$2,fn1__$1,meta31195){
return (new cljs.core.async.t_cljs$core$async31194(f__$1,ch__$1,meta31182__$1,___$2,fn1__$1,meta31195));
});

}

return (new cljs.core.async.t_cljs$core$async31194(self__.f,self__.ch,self__.meta31182,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31215 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31215) : self__.f.call(null,G__31215));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31182","meta31182",-222321250,null)], null);
}));

(cljs.core.async.t_cljs$core$async31181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31181");

(cljs.core.async.t_cljs$core$async31181.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31181.
 */
cljs.core.async.__GT_t_cljs$core$async31181 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31181(f__$1,ch__$1,meta31182){
return (new cljs.core.async.t_cljs$core$async31181(f__$1,ch__$1,meta31182));
});

}

return (new cljs.core.async.t_cljs$core$async31181(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31224 = (function (f,ch,meta31225){
this.f = f;
this.ch = ch;
this.meta31225 = meta31225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31226,meta31225__$1){
var self__ = this;
var _31226__$1 = this;
return (new cljs.core.async.t_cljs$core$async31224(self__.f,self__.ch,meta31225__$1));
}));

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31226){
var self__ = this;
var _31226__$1 = this;
return self__.meta31225;
}));

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31225","meta31225",-1362545934,null)], null);
}));

(cljs.core.async.t_cljs$core$async31224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31224");

(cljs.core.async.t_cljs$core$async31224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31224.
 */
cljs.core.async.__GT_t_cljs$core$async31224 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31224(f__$1,ch__$1,meta31225){
return (new cljs.core.async.t_cljs$core$async31224(f__$1,ch__$1,meta31225));
});

}

return (new cljs.core.async.t_cljs$core$async31224(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31230 = (function (p,ch,meta31231){
this.p = p;
this.ch = ch;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31232,meta31231__$1){
var self__ = this;
var _31232__$1 = this;
return (new cljs.core.async.t_cljs$core$async31230(self__.p,self__.ch,meta31231__$1));
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31232){
var self__ = this;
var _31232__$1 = this;
return self__.meta31231;
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31231","meta31231",2091065960,null)], null);
}));

(cljs.core.async.t_cljs$core$async31230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31230");

(cljs.core.async.t_cljs$core$async31230.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31230.
 */
cljs.core.async.__GT_t_cljs$core$async31230 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31230(p__$1,ch__$1,meta31231){
return (new cljs.core.async.t_cljs$core$async31230(p__$1,ch__$1,meta31231));
});

}

return (new cljs.core.async.t_cljs$core$async31230(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31238 = arguments.length;
switch (G__31238) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___32786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31265){
var state_val_31266 = (state_31265[(1)]);
if((state_val_31266 === (7))){
var inst_31261 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31268_32787 = state_31265__$1;
(statearr_31268_32787[(2)] = inst_31261);

(statearr_31268_32787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (1))){
var state_31265__$1 = state_31265;
var statearr_31269_32788 = state_31265__$1;
(statearr_31269_32788[(2)] = null);

(statearr_31269_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (4))){
var inst_31245 = (state_31265[(7)]);
var inst_31245__$1 = (state_31265[(2)]);
var inst_31246 = (inst_31245__$1 == null);
var state_31265__$1 = (function (){var statearr_31270 = state_31265;
(statearr_31270[(7)] = inst_31245__$1);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31246)){
var statearr_31271_32789 = state_31265__$1;
(statearr_31271_32789[(1)] = (5));

} else {
var statearr_31272_32794 = state_31265__$1;
(statearr_31272_32794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (6))){
var inst_31245 = (state_31265[(7)]);
var inst_31250 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31245) : p.call(null,inst_31245));
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31250)){
var statearr_31273_32795 = state_31265__$1;
(statearr_31273_32795[(1)] = (8));

} else {
var statearr_31274_32797 = state_31265__$1;
(statearr_31274_32797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (3))){
var inst_31263 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31265__$1,inst_31263);
} else {
if((state_val_31266 === (2))){
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31265__$1,(4),ch);
} else {
if((state_val_31266 === (11))){
var inst_31255 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31276_32802 = state_31265__$1;
(statearr_31276_32802[(2)] = inst_31255);

(statearr_31276_32802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (9))){
var state_31265__$1 = state_31265;
var statearr_31279_32806 = state_31265__$1;
(statearr_31279_32806[(2)] = null);

(statearr_31279_32806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (5))){
var inst_31248 = cljs.core.async.close_BANG_(out);
var state_31265__$1 = state_31265;
var statearr_31280_32808 = state_31265__$1;
(statearr_31280_32808[(2)] = inst_31248);

(statearr_31280_32808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (10))){
var inst_31258 = (state_31265[(2)]);
var state_31265__$1 = (function (){var statearr_31281 = state_31265;
(statearr_31281[(8)] = inst_31258);

return statearr_31281;
})();
var statearr_31282_32812 = state_31265__$1;
(statearr_31282_32812[(2)] = null);

(statearr_31282_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (8))){
var inst_31245 = (state_31265[(7)]);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31265__$1,(11),out,inst_31245);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31283 = [null,null,null,null,null,null,null,null,null];
(statearr_31283[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31283[(1)] = (1));

return statearr_31283;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31265){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31265);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31285){var ex__28640__auto__ = e31285;
var statearr_31286_32821 = state_31265;
(statearr_31286_32821[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31265[(4)]))){
var statearr_31287_32826 = state_31265;
(statearr_31287_32826[(1)] = cljs.core.first((state_31265[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32828 = state_31265;
state_31265 = G__32828;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31288 = f__28776__auto__();
(statearr_31288[(6)] = c__28775__auto___32786);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31294 = arguments.length;
switch (G__31294) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28775__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31377_32839 = state_31375__$1;
(statearr_31377_32839[(2)] = inst_31371);

(statearr_31377_32839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (20))){
var inst_31329 = (state_31375[(7)]);
var inst_31352 = (state_31375[(2)]);
var inst_31353 = cljs.core.next(inst_31329);
var inst_31310 = inst_31353;
var inst_31311 = null;
var inst_31312 = (0);
var inst_31313 = (0);
var state_31375__$1 = (function (){var statearr_31378 = state_31375;
(statearr_31378[(8)] = inst_31352);

(statearr_31378[(9)] = inst_31310);

(statearr_31378[(10)] = inst_31312);

(statearr_31378[(11)] = inst_31311);

(statearr_31378[(12)] = inst_31313);

return statearr_31378;
})();
var statearr_31379_32844 = state_31375__$1;
(statearr_31379_32844[(2)] = null);

(statearr_31379_32844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var state_31375__$1 = state_31375;
var statearr_31380_32846 = state_31375__$1;
(statearr_31380_32846[(2)] = null);

(statearr_31380_32846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31299 = (state_31375[(13)]);
var inst_31299__$1 = (state_31375[(2)]);
var inst_31300 = (inst_31299__$1 == null);
var state_31375__$1 = (function (){var statearr_31381 = state_31375;
(statearr_31381[(13)] = inst_31299__$1);

return statearr_31381;
})();
if(cljs.core.truth_(inst_31300)){
var statearr_31382_32849 = state_31375__$1;
(statearr_31382_32849[(1)] = (5));

} else {
var statearr_31383_32851 = state_31375__$1;
(statearr_31383_32851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (15))){
var state_31375__$1 = state_31375;
var statearr_31387_32857 = state_31375__$1;
(statearr_31387_32857[(2)] = null);

(statearr_31387_32857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (21))){
var state_31375__$1 = state_31375;
var statearr_31388_32862 = state_31375__$1;
(statearr_31388_32862[(2)] = null);

(statearr_31388_32862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (13))){
var inst_31310 = (state_31375[(9)]);
var inst_31312 = (state_31375[(10)]);
var inst_31311 = (state_31375[(11)]);
var inst_31313 = (state_31375[(12)]);
var inst_31321 = (state_31375[(2)]);
var inst_31322 = (inst_31313 + (1));
var tmp31384 = inst_31310;
var tmp31385 = inst_31312;
var tmp31386 = inst_31311;
var inst_31310__$1 = tmp31384;
var inst_31311__$1 = tmp31386;
var inst_31312__$1 = tmp31385;
var inst_31313__$1 = inst_31322;
var state_31375__$1 = (function (){var statearr_31389 = state_31375;
(statearr_31389[(9)] = inst_31310__$1);

(statearr_31389[(10)] = inst_31312__$1);

(statearr_31389[(14)] = inst_31321);

(statearr_31389[(11)] = inst_31311__$1);

(statearr_31389[(12)] = inst_31313__$1);

return statearr_31389;
})();
var statearr_31390_32881 = state_31375__$1;
(statearr_31390_32881[(2)] = null);

(statearr_31390_32881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (22))){
var state_31375__$1 = state_31375;
var statearr_31391_32884 = state_31375__$1;
(statearr_31391_32884[(2)] = null);

(statearr_31391_32884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var inst_31299 = (state_31375[(13)]);
var inst_31308 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31299) : f.call(null,inst_31299));
var inst_31309 = cljs.core.seq(inst_31308);
var inst_31310 = inst_31309;
var inst_31311 = null;
var inst_31312 = (0);
var inst_31313 = (0);
var state_31375__$1 = (function (){var statearr_31392 = state_31375;
(statearr_31392[(9)] = inst_31310);

(statearr_31392[(10)] = inst_31312);

(statearr_31392[(11)] = inst_31311);

(statearr_31392[(12)] = inst_31313);

return statearr_31392;
})();
var statearr_31393_32890 = state_31375__$1;
(statearr_31393_32890[(2)] = null);

(statearr_31393_32890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (17))){
var inst_31329 = (state_31375[(7)]);
var inst_31339 = cljs.core.chunk_first(inst_31329);
var inst_31342 = cljs.core.chunk_rest(inst_31329);
var inst_31343 = cljs.core.count(inst_31339);
var inst_31310 = inst_31342;
var inst_31311 = inst_31339;
var inst_31312 = inst_31343;
var inst_31313 = (0);
var state_31375__$1 = (function (){var statearr_31402 = state_31375;
(statearr_31402[(9)] = inst_31310);

(statearr_31402[(10)] = inst_31312);

(statearr_31402[(11)] = inst_31311);

(statearr_31402[(12)] = inst_31313);

return statearr_31402;
})();
var statearr_31405_32905 = state_31375__$1;
(statearr_31405_32905[(2)] = null);

(statearr_31405_32905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (12))){
var inst_31361 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31406_32914 = state_31375__$1;
(statearr_31406_32914[(2)] = inst_31361);

(statearr_31406_32914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (2))){
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31375__$1,(4),in$);
} else {
if((state_val_31376 === (23))){
var inst_31369 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31407_32923 = state_31375__$1;
(statearr_31407_32923[(2)] = inst_31369);

(statearr_31407_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (19))){
var inst_31356 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31408_32930 = state_31375__$1;
(statearr_31408_32930[(2)] = inst_31356);

(statearr_31408_32930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (11))){
var inst_31310 = (state_31375[(9)]);
var inst_31329 = (state_31375[(7)]);
var inst_31329__$1 = cljs.core.seq(inst_31310);
var state_31375__$1 = (function (){var statearr_31412 = state_31375;
(statearr_31412[(7)] = inst_31329__$1);

return statearr_31412;
})();
if(inst_31329__$1){
var statearr_31413_32933 = state_31375__$1;
(statearr_31413_32933[(1)] = (14));

} else {
var statearr_31414_32939 = state_31375__$1;
(statearr_31414_32939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (9))){
var inst_31363 = (state_31375[(2)]);
var inst_31364 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31375__$1 = (function (){var statearr_31415 = state_31375;
(statearr_31415[(15)] = inst_31363);

return statearr_31415;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31416_32944 = state_31375__$1;
(statearr_31416_32944[(1)] = (21));

} else {
var statearr_31417_32945 = state_31375__$1;
(statearr_31417_32945[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var inst_31302 = cljs.core.async.close_BANG_(out);
var state_31375__$1 = state_31375;
var statearr_31418_32946 = state_31375__$1;
(statearr_31418_32946[(2)] = inst_31302);

(statearr_31418_32946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (14))){
var inst_31329 = (state_31375[(7)]);
var inst_31333 = cljs.core.chunked_seq_QMARK_(inst_31329);
var state_31375__$1 = state_31375;
if(inst_31333){
var statearr_31420_32948 = state_31375__$1;
(statearr_31420_32948[(1)] = (17));

} else {
var statearr_31421_32950 = state_31375__$1;
(statearr_31421_32950[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (16))){
var inst_31359 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31422_32954 = state_31375__$1;
(statearr_31422_32954[(2)] = inst_31359);

(statearr_31422_32954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (10))){
var inst_31311 = (state_31375[(11)]);
var inst_31313 = (state_31375[(12)]);
var inst_31319 = cljs.core._nth(inst_31311,inst_31313);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(13),out,inst_31319);
} else {
if((state_val_31376 === (18))){
var inst_31329 = (state_31375[(7)]);
var inst_31350 = cljs.core.first(inst_31329);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(20),out,inst_31350);
} else {
if((state_val_31376 === (8))){
var inst_31312 = (state_31375[(10)]);
var inst_31313 = (state_31375[(12)]);
var inst_31316 = (inst_31313 < inst_31312);
var inst_31317 = inst_31316;
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31317)){
var statearr_31423_32962 = state_31375__$1;
(statearr_31423_32962[(1)] = (10));

} else {
var statearr_31424_32967 = state_31375__$1;
(statearr_31424_32967[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____0 = (function (){
var statearr_31425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__);

(statearr_31425[(1)] = (1));

return statearr_31425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____1 = (function (state_31375){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31375);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31426){var ex__28640__auto__ = e31426;
var statearr_31427_32978 = state_31375;
(statearr_31427_32978[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31375[(4)]))){
var statearr_31428_32979 = state_31375;
(statearr_31428_32979[(1)] = cljs.core.first((state_31375[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32982 = state_31375;
state_31375 = G__32982;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28637__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31429 = f__28776__auto__();
(statearr_31429[(6)] = c__28775__auto__);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

return c__28775__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31431 = arguments.length;
switch (G__31431) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31433 = arguments.length;
switch (G__31433) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31439 = arguments.length;
switch (G__31439) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___32994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31462 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31470_33015 = state_31467__$1;
(statearr_31470_33015[(2)] = inst_31462);

(statearr_31470_33015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var inst_31443 = null;
var state_31467__$1 = (function (){var statearr_31471 = state_31467;
(statearr_31471[(7)] = inst_31443);

return statearr_31471;
})();
var statearr_31472_33024 = state_31467__$1;
(statearr_31472_33024[(2)] = null);

(statearr_31472_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31446 = (state_31467[(8)]);
var inst_31446__$1 = (state_31467[(2)]);
var inst_31447 = (inst_31446__$1 == null);
var inst_31448 = cljs.core.not(inst_31447);
var state_31467__$1 = (function (){var statearr_31473 = state_31467;
(statearr_31473[(8)] = inst_31446__$1);

return statearr_31473;
})();
if(inst_31448){
var statearr_31474_33039 = state_31467__$1;
(statearr_31474_33039[(1)] = (5));

} else {
var statearr_31475_33041 = state_31467__$1;
(statearr_31475_33041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var state_31467__$1 = state_31467;
var statearr_31476_33048 = state_31467__$1;
(statearr_31476_33048[(2)] = null);

(statearr_31476_33048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (3))){
var inst_31464 = (state_31467[(2)]);
var inst_31465 = cljs.core.async.close_BANG_(out);
var state_31467__$1 = (function (){var statearr_31477 = state_31467;
(statearr_31477[(9)] = inst_31464);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31467__$1,(4),ch);
} else {
if((state_val_31468 === (11))){
var inst_31446 = (state_31467[(8)]);
var inst_31455 = (state_31467[(2)]);
var inst_31443 = inst_31446;
var state_31467__$1 = (function (){var statearr_31478 = state_31467;
(statearr_31478[(7)] = inst_31443);

(statearr_31478[(10)] = inst_31455);

return statearr_31478;
})();
var statearr_31479_33073 = state_31467__$1;
(statearr_31479_33073[(2)] = null);

(statearr_31479_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var inst_31446 = (state_31467[(8)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31467__$1,(11),out,inst_31446);
} else {
if((state_val_31468 === (5))){
var inst_31446 = (state_31467[(8)]);
var inst_31443 = (state_31467[(7)]);
var inst_31450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31446,inst_31443);
var state_31467__$1 = state_31467;
if(inst_31450){
var statearr_31481_33096 = state_31467__$1;
(statearr_31481_33096[(1)] = (8));

} else {
var statearr_31482_33097 = state_31467__$1;
(statearr_31482_33097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31459 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31483_33099 = state_31467__$1;
(statearr_31483_33099[(2)] = inst_31459);

(statearr_31483_33099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31443 = (state_31467[(7)]);
var tmp31480 = inst_31443;
var inst_31443__$1 = tmp31480;
var state_31467__$1 = (function (){var statearr_31485 = state_31467;
(statearr_31485[(7)] = inst_31443__$1);

return statearr_31485;
})();
var statearr_31486_33102 = state_31467__$1;
(statearr_31486_33102[(2)] = null);

(statearr_31486_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31488[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31488[(1)] = (1));

return statearr_31488;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31467){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31467);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31491){var ex__28640__auto__ = e31491;
var statearr_31493_33105 = state_31467;
(statearr_31493_33105[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31467[(4)]))){
var statearr_31494_33110 = state_31467;
(statearr_31494_33110[(1)] = cljs.core.first((state_31467[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_31467;
state_31467 = G__33115;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31498 = f__28776__auto__();
(statearr_31498[(6)] = c__28775__auto___32994);

return statearr_31498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31501 = arguments.length;
switch (G__31501) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___33139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31546){
var state_val_31547 = (state_31546[(1)]);
if((state_val_31547 === (7))){
var inst_31542 = (state_31546[(2)]);
var state_31546__$1 = state_31546;
var statearr_31553_33140 = state_31546__$1;
(statearr_31553_33140[(2)] = inst_31542);

(statearr_31553_33140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (1))){
var inst_31507 = (new Array(n));
var inst_31508 = inst_31507;
var inst_31509 = (0);
var state_31546__$1 = (function (){var statearr_31558 = state_31546;
(statearr_31558[(7)] = inst_31508);

(statearr_31558[(8)] = inst_31509);

return statearr_31558;
})();
var statearr_31560_33142 = state_31546__$1;
(statearr_31560_33142[(2)] = null);

(statearr_31560_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (4))){
var inst_31512 = (state_31546[(9)]);
var inst_31512__$1 = (state_31546[(2)]);
var inst_31513 = (inst_31512__$1 == null);
var inst_31514 = cljs.core.not(inst_31513);
var state_31546__$1 = (function (){var statearr_31562 = state_31546;
(statearr_31562[(9)] = inst_31512__$1);

return statearr_31562;
})();
if(inst_31514){
var statearr_31563_33151 = state_31546__$1;
(statearr_31563_33151[(1)] = (5));

} else {
var statearr_31564_33152 = state_31546__$1;
(statearr_31564_33152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (15))){
var inst_31536 = (state_31546[(2)]);
var state_31546__$1 = state_31546;
var statearr_31566_33157 = state_31546__$1;
(statearr_31566_33157[(2)] = inst_31536);

(statearr_31566_33157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (13))){
var state_31546__$1 = state_31546;
var statearr_31571_33158 = state_31546__$1;
(statearr_31571_33158[(2)] = null);

(statearr_31571_33158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (6))){
var inst_31509 = (state_31546[(8)]);
var inst_31532 = (inst_31509 > (0));
var state_31546__$1 = state_31546;
if(cljs.core.truth_(inst_31532)){
var statearr_31572_33166 = state_31546__$1;
(statearr_31572_33166[(1)] = (12));

} else {
var statearr_31573_33167 = state_31546__$1;
(statearr_31573_33167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (3))){
var inst_31544 = (state_31546[(2)]);
var state_31546__$1 = state_31546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31546__$1,inst_31544);
} else {
if((state_val_31547 === (12))){
var inst_31508 = (state_31546[(7)]);
var inst_31534 = cljs.core.vec(inst_31508);
var state_31546__$1 = state_31546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31546__$1,(15),out,inst_31534);
} else {
if((state_val_31547 === (2))){
var state_31546__$1 = state_31546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31546__$1,(4),ch);
} else {
if((state_val_31547 === (11))){
var inst_31526 = (state_31546[(2)]);
var inst_31527 = (new Array(n));
var inst_31508 = inst_31527;
var inst_31509 = (0);
var state_31546__$1 = (function (){var statearr_31575 = state_31546;
(statearr_31575[(7)] = inst_31508);

(statearr_31575[(10)] = inst_31526);

(statearr_31575[(8)] = inst_31509);

return statearr_31575;
})();
var statearr_31576_33188 = state_31546__$1;
(statearr_31576_33188[(2)] = null);

(statearr_31576_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (9))){
var inst_31508 = (state_31546[(7)]);
var inst_31523 = cljs.core.vec(inst_31508);
var state_31546__$1 = state_31546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31546__$1,(11),out,inst_31523);
} else {
if((state_val_31547 === (5))){
var inst_31508 = (state_31546[(7)]);
var inst_31512 = (state_31546[(9)]);
var inst_31517 = (state_31546[(11)]);
var inst_31509 = (state_31546[(8)]);
var inst_31516 = (inst_31508[inst_31509] = inst_31512);
var inst_31517__$1 = (inst_31509 + (1));
var inst_31519 = (inst_31517__$1 < n);
var state_31546__$1 = (function (){var statearr_31577 = state_31546;
(statearr_31577[(12)] = inst_31516);

(statearr_31577[(11)] = inst_31517__$1);

return statearr_31577;
})();
if(cljs.core.truth_(inst_31519)){
var statearr_31578_33211 = state_31546__$1;
(statearr_31578_33211[(1)] = (8));

} else {
var statearr_31579_33212 = state_31546__$1;
(statearr_31579_33212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (14))){
var inst_31539 = (state_31546[(2)]);
var inst_31540 = cljs.core.async.close_BANG_(out);
var state_31546__$1 = (function (){var statearr_31586 = state_31546;
(statearr_31586[(13)] = inst_31539);

return statearr_31586;
})();
var statearr_31587_33220 = state_31546__$1;
(statearr_31587_33220[(2)] = inst_31540);

(statearr_31587_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (10))){
var inst_31530 = (state_31546[(2)]);
var state_31546__$1 = state_31546;
var statearr_31588_33221 = state_31546__$1;
(statearr_31588_33221[(2)] = inst_31530);

(statearr_31588_33221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31547 === (8))){
var inst_31508 = (state_31546[(7)]);
var inst_31517 = (state_31546[(11)]);
var tmp31580 = inst_31508;
var inst_31508__$1 = tmp31580;
var inst_31509 = inst_31517;
var state_31546__$1 = (function (){var statearr_31590 = state_31546;
(statearr_31590[(7)] = inst_31508__$1);

(statearr_31590[(8)] = inst_31509);

return statearr_31590;
})();
var statearr_31591_33226 = state_31546__$1;
(statearr_31591_33226[(2)] = null);

(statearr_31591_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31593[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31593[(1)] = (1));

return statearr_31593;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31546){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31546);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31594){var ex__28640__auto__ = e31594;
var statearr_31595_33227 = state_31546;
(statearr_31595_33227[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31546[(4)]))){
var statearr_31597_33228 = state_31546;
(statearr_31597_33228[(1)] = cljs.core.first((state_31546[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_31546;
state_31546 = G__33229;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31598 = f__28776__auto__();
(statearr_31598[(6)] = c__28775__auto___33139);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31600 = arguments.length;
switch (G__31600) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28775__auto___33240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_31645){
var state_val_31646 = (state_31645[(1)]);
if((state_val_31646 === (7))){
var inst_31641 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31653_33248 = state_31645__$1;
(statearr_31653_33248[(2)] = inst_31641);

(statearr_31653_33248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (1))){
var inst_31604 = [];
var inst_31605 = inst_31604;
var inst_31606 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31645__$1 = (function (){var statearr_31655 = state_31645;
(statearr_31655[(7)] = inst_31606);

(statearr_31655[(8)] = inst_31605);

return statearr_31655;
})();
var statearr_31656_33249 = state_31645__$1;
(statearr_31656_33249[(2)] = null);

(statearr_31656_33249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (4))){
var inst_31609 = (state_31645[(9)]);
var inst_31609__$1 = (state_31645[(2)]);
var inst_31610 = (inst_31609__$1 == null);
var inst_31611 = cljs.core.not(inst_31610);
var state_31645__$1 = (function (){var statearr_31668 = state_31645;
(statearr_31668[(9)] = inst_31609__$1);

return statearr_31668;
})();
if(inst_31611){
var statearr_31670_33251 = state_31645__$1;
(statearr_31670_33251[(1)] = (5));

} else {
var statearr_31671_33252 = state_31645__$1;
(statearr_31671_33252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (15))){
var inst_31635 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31672_33253 = state_31645__$1;
(statearr_31672_33253[(2)] = inst_31635);

(statearr_31672_33253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (13))){
var state_31645__$1 = state_31645;
var statearr_31677_33254 = state_31645__$1;
(statearr_31677_33254[(2)] = null);

(statearr_31677_33254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (6))){
var inst_31605 = (state_31645[(8)]);
var inst_31630 = inst_31605.length;
var inst_31631 = (inst_31630 > (0));
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31631)){
var statearr_31678_33255 = state_31645__$1;
(statearr_31678_33255[(1)] = (12));

} else {
var statearr_31679_33256 = state_31645__$1;
(statearr_31679_33256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (3))){
var inst_31643 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31645__$1,inst_31643);
} else {
if((state_val_31646 === (12))){
var inst_31605 = (state_31645[(8)]);
var inst_31633 = cljs.core.vec(inst_31605);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31645__$1,(15),out,inst_31633);
} else {
if((state_val_31646 === (2))){
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31645__$1,(4),ch);
} else {
if((state_val_31646 === (11))){
var inst_31609 = (state_31645[(9)]);
var inst_31613 = (state_31645[(10)]);
var inst_31623 = (state_31645[(2)]);
var inst_31624 = [];
var inst_31625 = inst_31624.push(inst_31609);
var inst_31605 = inst_31624;
var inst_31606 = inst_31613;
var state_31645__$1 = (function (){var statearr_31681 = state_31645;
(statearr_31681[(11)] = inst_31623);

(statearr_31681[(7)] = inst_31606);

(statearr_31681[(8)] = inst_31605);

(statearr_31681[(12)] = inst_31625);

return statearr_31681;
})();
var statearr_31682_33261 = state_31645__$1;
(statearr_31682_33261[(2)] = null);

(statearr_31682_33261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (9))){
var inst_31605 = (state_31645[(8)]);
var inst_31621 = cljs.core.vec(inst_31605);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31645__$1,(11),out,inst_31621);
} else {
if((state_val_31646 === (5))){
var inst_31606 = (state_31645[(7)]);
var inst_31609 = (state_31645[(9)]);
var inst_31613 = (state_31645[(10)]);
var inst_31613__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31609) : f.call(null,inst_31609));
var inst_31614 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31613__$1,inst_31606);
var inst_31615 = cljs.core.keyword_identical_QMARK_(inst_31606,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31616 = ((inst_31614) || (inst_31615));
var state_31645__$1 = (function (){var statearr_31683 = state_31645;
(statearr_31683[(10)] = inst_31613__$1);

return statearr_31683;
})();
if(cljs.core.truth_(inst_31616)){
var statearr_31684_33269 = state_31645__$1;
(statearr_31684_33269[(1)] = (8));

} else {
var statearr_31685_33270 = state_31645__$1;
(statearr_31685_33270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (14))){
var inst_31638 = (state_31645[(2)]);
var inst_31639 = cljs.core.async.close_BANG_(out);
var state_31645__$1 = (function (){var statearr_31687 = state_31645;
(statearr_31687[(13)] = inst_31638);

return statearr_31687;
})();
var statearr_31688_33271 = state_31645__$1;
(statearr_31688_33271[(2)] = inst_31639);

(statearr_31688_33271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (10))){
var inst_31628 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31690_33274 = state_31645__$1;
(statearr_31690_33274[(2)] = inst_31628);

(statearr_31690_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (8))){
var inst_31605 = (state_31645[(8)]);
var inst_31609 = (state_31645[(9)]);
var inst_31613 = (state_31645[(10)]);
var inst_31618 = inst_31605.push(inst_31609);
var tmp31686 = inst_31605;
var inst_31605__$1 = tmp31686;
var inst_31606 = inst_31613;
var state_31645__$1 = (function (){var statearr_31692 = state_31645;
(statearr_31692[(7)] = inst_31606);

(statearr_31692[(8)] = inst_31605__$1);

(statearr_31692[(14)] = inst_31618);

return statearr_31692;
})();
var statearr_31693_33279 = state_31645__$1;
(statearr_31693_33279[(2)] = null);

(statearr_31693_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28637__auto__ = null;
var cljs$core$async$state_machine__28637__auto____0 = (function (){
var statearr_31694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31694[(0)] = cljs$core$async$state_machine__28637__auto__);

(statearr_31694[(1)] = (1));

return statearr_31694;
});
var cljs$core$async$state_machine__28637__auto____1 = (function (state_31645){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_31645);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e31695){var ex__28640__auto__ = e31695;
var statearr_31696_33281 = state_31645;
(statearr_31696_33281[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_31645[(4)]))){
var statearr_31698_33282 = state_31645;
(statearr_31698_33282[(1)] = cljs.core.first((state_31645[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_31645;
state_31645 = G__33285;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
cljs$core$async$state_machine__28637__auto__ = function(state_31645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28637__auto____1.call(this,state_31645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28637__auto____0;
cljs$core$async$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28637__auto____1;
return cljs$core$async$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_31700 = f__28776__auto__();
(statearr_31700[(6)] = c__28775__auto___33240);

return statearr_31700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
