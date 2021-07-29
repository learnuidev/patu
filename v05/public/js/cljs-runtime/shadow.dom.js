goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32769 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32769(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32774 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32774(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31760 = coll;
var G__31761 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31760,G__31761) : shadow.dom.lazy_native_coll_seq.call(null,G__31760,G__31761));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31786 = arguments.length;
switch (G__31786) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31791 = arguments.length;
switch (G__31791) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31800 = arguments.length;
switch (G__31800) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31805 = arguments.length;
switch (G__31805) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31817 = arguments.length;
switch (G__31817) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31838){if((e31838 instanceof Object)){
var e = e31838;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31838;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31846 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31847 = null;
var count__31848 = (0);
var i__31849 = (0);
while(true){
if((i__31849 < count__31848)){
var el = chunk__31847.cljs$core$IIndexed$_nth$arity$2(null,i__31849);
var handler_32848__$1 = ((function (seq__31846,chunk__31847,count__31848,i__31849,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31846,chunk__31847,count__31848,i__31849,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32848__$1);


var G__32853 = seq__31846;
var G__32854 = chunk__31847;
var G__32855 = count__31848;
var G__32856 = (i__31849 + (1));
seq__31846 = G__32853;
chunk__31847 = G__32854;
count__31848 = G__32855;
i__31849 = G__32856;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31846);
if(temp__5735__auto__){
var seq__31846__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31846__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31846__$1);
var G__32863 = cljs.core.chunk_rest(seq__31846__$1);
var G__32864 = c__4556__auto__;
var G__32865 = cljs.core.count(c__4556__auto__);
var G__32866 = (0);
seq__31846 = G__32863;
chunk__31847 = G__32864;
count__31848 = G__32865;
i__31849 = G__32866;
continue;
} else {
var el = cljs.core.first(seq__31846__$1);
var handler_32867__$1 = ((function (seq__31846,chunk__31847,count__31848,i__31849,el,seq__31846__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31846,chunk__31847,count__31848,i__31849,el,seq__31846__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32867__$1);


var G__32870 = cljs.core.next(seq__31846__$1);
var G__32871 = null;
var G__32872 = (0);
var G__32873 = (0);
seq__31846 = G__32870;
chunk__31847 = G__32871;
count__31848 = G__32872;
i__31849 = G__32873;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31873 = arguments.length;
switch (G__31873) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31894 = cljs.core.seq(events);
var chunk__31895 = null;
var count__31896 = (0);
var i__31897 = (0);
while(true){
if((i__31897 < count__31896)){
var vec__31915 = chunk__31895.cljs$core$IIndexed$_nth$arity$2(null,i__31897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31915,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32896 = seq__31894;
var G__32897 = chunk__31895;
var G__32898 = count__31896;
var G__32899 = (i__31897 + (1));
seq__31894 = G__32896;
chunk__31895 = G__32897;
count__31896 = G__32898;
i__31897 = G__32899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31894);
if(temp__5735__auto__){
var seq__31894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31894__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31894__$1);
var G__32901 = cljs.core.chunk_rest(seq__31894__$1);
var G__32902 = c__4556__auto__;
var G__32903 = cljs.core.count(c__4556__auto__);
var G__32904 = (0);
seq__31894 = G__32901;
chunk__31895 = G__32902;
count__31896 = G__32903;
i__31897 = G__32904;
continue;
} else {
var vec__31926 = cljs.core.first(seq__31894__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31926,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32908 = cljs.core.next(seq__31894__$1);
var G__32909 = null;
var G__32910 = (0);
var G__32912 = (0);
seq__31894 = G__32908;
chunk__31895 = G__32909;
count__31896 = G__32910;
i__31897 = G__32912;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__31932 = cljs.core.seq(styles);
var chunk__31933 = null;
var count__31934 = (0);
var i__31935 = (0);
while(true){
if((i__31935 < count__31934)){
var vec__31958 = chunk__31933.cljs$core$IIndexed$_nth$arity$2(null,i__31935);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31958,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32919 = seq__31932;
var G__32920 = chunk__31933;
var G__32921 = count__31934;
var G__32922 = (i__31935 + (1));
seq__31932 = G__32919;
chunk__31933 = G__32920;
count__31934 = G__32921;
i__31935 = G__32922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31932);
if(temp__5735__auto__){
var seq__31932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31932__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31932__$1);
var G__32924 = cljs.core.chunk_rest(seq__31932__$1);
var G__32925 = c__4556__auto__;
var G__32926 = cljs.core.count(c__4556__auto__);
var G__32928 = (0);
seq__31932 = G__32924;
chunk__31933 = G__32925;
count__31934 = G__32926;
i__31935 = G__32928;
continue;
} else {
var vec__31972 = cljs.core.first(seq__31932__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32934 = cljs.core.next(seq__31932__$1);
var G__32935 = null;
var G__32936 = (0);
var G__32937 = (0);
seq__31932 = G__32934;
chunk__31933 = G__32935;
count__31934 = G__32936;
i__31935 = G__32937;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__31988_32940 = key;
var G__31988_32941__$1 = (((G__31988_32940 instanceof cljs.core.Keyword))?G__31988_32940.fqn:null);
switch (G__31988_32941__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32952 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_32952,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_32952,"aria-");
}
})())){
el.setAttribute(ks_32952,value);
} else {
(el[ks_32952] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32021){
var map__32022 = p__32021;
var map__32022__$1 = (((((!((map__32022 == null))))?(((((map__32022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32022):map__32022);
var props = map__32022__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32022__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32027 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32027,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32027,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32027,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32031 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32031,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32031;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32036 = arguments.length;
switch (G__32036) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32043){
var vec__32044 = p__32043;
var seq__32045 = cljs.core.seq(vec__32044);
var first__32046 = cljs.core.first(seq__32045);
var seq__32045__$1 = cljs.core.next(seq__32045);
var nn = first__32046;
var first__32046__$1 = cljs.core.first(seq__32045__$1);
var seq__32045__$2 = cljs.core.next(seq__32045__$1);
var np = first__32046__$1;
var nc = seq__32045__$2;
var node = vec__32044;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32048 = nn;
var G__32049 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32048,G__32049) : create_fn.call(null,G__32048,G__32049));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32050 = nn;
var G__32051 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32050,G__32051) : create_fn.call(null,G__32050,G__32051));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32059 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32059,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32059,(1),null);
var seq__32062_32990 = cljs.core.seq(node_children);
var chunk__32063_32991 = null;
var count__32064_32992 = (0);
var i__32065_32993 = (0);
while(true){
if((i__32065_32993 < count__32064_32992)){
var child_struct_32995 = chunk__32063_32991.cljs$core$IIndexed$_nth$arity$2(null,i__32065_32993);
var children_32996 = shadow.dom.dom_node(child_struct_32995);
if(cljs.core.seq_QMARK_(children_32996)){
var seq__32136_32998 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32996));
var chunk__32138_32999 = null;
var count__32139_33000 = (0);
var i__32140_33001 = (0);
while(true){
if((i__32140_33001 < count__32139_33000)){
var child_33005 = chunk__32138_32999.cljs$core$IIndexed$_nth$arity$2(null,i__32140_33001);
if(cljs.core.truth_(child_33005)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33005);


var G__33006 = seq__32136_32998;
var G__33007 = chunk__32138_32999;
var G__33008 = count__32139_33000;
var G__33009 = (i__32140_33001 + (1));
seq__32136_32998 = G__33006;
chunk__32138_32999 = G__33007;
count__32139_33000 = G__33008;
i__32140_33001 = G__33009;
continue;
} else {
var G__33010 = seq__32136_32998;
var G__33011 = chunk__32138_32999;
var G__33012 = count__32139_33000;
var G__33013 = (i__32140_33001 + (1));
seq__32136_32998 = G__33010;
chunk__32138_32999 = G__33011;
count__32139_33000 = G__33012;
i__32140_33001 = G__33013;
continue;
}
} else {
var temp__5735__auto___33014 = cljs.core.seq(seq__32136_32998);
if(temp__5735__auto___33014){
var seq__32136_33016__$1 = temp__5735__auto___33014;
if(cljs.core.chunked_seq_QMARK_(seq__32136_33016__$1)){
var c__4556__auto___33017 = cljs.core.chunk_first(seq__32136_33016__$1);
var G__33018 = cljs.core.chunk_rest(seq__32136_33016__$1);
var G__33019 = c__4556__auto___33017;
var G__33020 = cljs.core.count(c__4556__auto___33017);
var G__33021 = (0);
seq__32136_32998 = G__33018;
chunk__32138_32999 = G__33019;
count__32139_33000 = G__33020;
i__32140_33001 = G__33021;
continue;
} else {
var child_33023 = cljs.core.first(seq__32136_33016__$1);
if(cljs.core.truth_(child_33023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33023);


var G__33025 = cljs.core.next(seq__32136_33016__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__32136_32998 = G__33025;
chunk__32138_32999 = G__33026;
count__32139_33000 = G__33027;
i__32140_33001 = G__33028;
continue;
} else {
var G__33030 = cljs.core.next(seq__32136_33016__$1);
var G__33031 = null;
var G__33032 = (0);
var G__33033 = (0);
seq__32136_32998 = G__33030;
chunk__32138_32999 = G__33031;
count__32139_33000 = G__33032;
i__32140_33001 = G__33033;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32996);
}


var G__33035 = seq__32062_32990;
var G__33036 = chunk__32063_32991;
var G__33037 = count__32064_32992;
var G__33038 = (i__32065_32993 + (1));
seq__32062_32990 = G__33035;
chunk__32063_32991 = G__33036;
count__32064_32992 = G__33037;
i__32065_32993 = G__33038;
continue;
} else {
var temp__5735__auto___33040 = cljs.core.seq(seq__32062_32990);
if(temp__5735__auto___33040){
var seq__32062_33042__$1 = temp__5735__auto___33040;
if(cljs.core.chunked_seq_QMARK_(seq__32062_33042__$1)){
var c__4556__auto___33043 = cljs.core.chunk_first(seq__32062_33042__$1);
var G__33044 = cljs.core.chunk_rest(seq__32062_33042__$1);
var G__33045 = c__4556__auto___33043;
var G__33046 = cljs.core.count(c__4556__auto___33043);
var G__33047 = (0);
seq__32062_32990 = G__33044;
chunk__32063_32991 = G__33045;
count__32064_32992 = G__33046;
i__32065_32993 = G__33047;
continue;
} else {
var child_struct_33051 = cljs.core.first(seq__32062_33042__$1);
var children_33052 = shadow.dom.dom_node(child_struct_33051);
if(cljs.core.seq_QMARK_(children_33052)){
var seq__32150_33053 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33052));
var chunk__32152_33054 = null;
var count__32153_33055 = (0);
var i__32154_33056 = (0);
while(true){
if((i__32154_33056 < count__32153_33055)){
var child_33060 = chunk__32152_33054.cljs$core$IIndexed$_nth$arity$2(null,i__32154_33056);
if(cljs.core.truth_(child_33060)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33060);


var G__33061 = seq__32150_33053;
var G__33062 = chunk__32152_33054;
var G__33063 = count__32153_33055;
var G__33064 = (i__32154_33056 + (1));
seq__32150_33053 = G__33061;
chunk__32152_33054 = G__33062;
count__32153_33055 = G__33063;
i__32154_33056 = G__33064;
continue;
} else {
var G__33065 = seq__32150_33053;
var G__33066 = chunk__32152_33054;
var G__33067 = count__32153_33055;
var G__33068 = (i__32154_33056 + (1));
seq__32150_33053 = G__33065;
chunk__32152_33054 = G__33066;
count__32153_33055 = G__33067;
i__32154_33056 = G__33068;
continue;
}
} else {
var temp__5735__auto___33071__$1 = cljs.core.seq(seq__32150_33053);
if(temp__5735__auto___33071__$1){
var seq__32150_33072__$1 = temp__5735__auto___33071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32150_33072__$1)){
var c__4556__auto___33074 = cljs.core.chunk_first(seq__32150_33072__$1);
var G__33075 = cljs.core.chunk_rest(seq__32150_33072__$1);
var G__33076 = c__4556__auto___33074;
var G__33077 = cljs.core.count(c__4556__auto___33074);
var G__33078 = (0);
seq__32150_33053 = G__33075;
chunk__32152_33054 = G__33076;
count__32153_33055 = G__33077;
i__32154_33056 = G__33078;
continue;
} else {
var child_33080 = cljs.core.first(seq__32150_33072__$1);
if(cljs.core.truth_(child_33080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33080);


var G__33081 = cljs.core.next(seq__32150_33072__$1);
var G__33082 = null;
var G__33083 = (0);
var G__33084 = (0);
seq__32150_33053 = G__33081;
chunk__32152_33054 = G__33082;
count__32153_33055 = G__33083;
i__32154_33056 = G__33084;
continue;
} else {
var G__33087 = cljs.core.next(seq__32150_33072__$1);
var G__33088 = null;
var G__33089 = (0);
var G__33090 = (0);
seq__32150_33053 = G__33087;
chunk__32152_33054 = G__33088;
count__32153_33055 = G__33089;
i__32154_33056 = G__33090;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33052);
}


var G__33092 = cljs.core.next(seq__32062_33042__$1);
var G__33093 = null;
var G__33094 = (0);
var G__33095 = (0);
seq__32062_32990 = G__33092;
chunk__32063_32991 = G__33093;
count__32064_32992 = G__33094;
i__32065_32993 = G__33095;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32181 = cljs.core.seq(node);
var chunk__32182 = null;
var count__32183 = (0);
var i__32184 = (0);
while(true){
if((i__32184 < count__32183)){
var n = chunk__32182.cljs$core$IIndexed$_nth$arity$2(null,i__32184);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33111 = seq__32181;
var G__33112 = chunk__32182;
var G__33113 = count__32183;
var G__33114 = (i__32184 + (1));
seq__32181 = G__33111;
chunk__32182 = G__33112;
count__32183 = G__33113;
i__32184 = G__33114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32181);
if(temp__5735__auto__){
var seq__32181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32181__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32181__$1);
var G__33116 = cljs.core.chunk_rest(seq__32181__$1);
var G__33117 = c__4556__auto__;
var G__33118 = cljs.core.count(c__4556__auto__);
var G__33119 = (0);
seq__32181 = G__33116;
chunk__32182 = G__33117;
count__32183 = G__33118;
i__32184 = G__33119;
continue;
} else {
var n = cljs.core.first(seq__32181__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33124 = cljs.core.next(seq__32181__$1);
var G__33125 = null;
var G__33126 = (0);
var G__33127 = (0);
seq__32181 = G__33124;
chunk__32182 = G__33125;
count__32183 = G__33126;
i__32184 = G__33127;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32197 = arguments.length;
switch (G__32197) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32213 = arguments.length;
switch (G__32213) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33159 = arguments.length;
var i__4737__auto___33160 = (0);
while(true){
if((i__4737__auto___33160 < len__4736__auto___33159)){
args__4742__auto__.push((arguments[i__4737__auto___33160]));

var G__33165 = (i__4737__auto___33160 + (1));
i__4737__auto___33160 = G__33165;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32238_33168 = cljs.core.seq(nodes);
var chunk__32239_33169 = null;
var count__32240_33170 = (0);
var i__32241_33171 = (0);
while(true){
if((i__32241_33171 < count__32240_33170)){
var node_33172 = chunk__32239_33169.cljs$core$IIndexed$_nth$arity$2(null,i__32241_33171);
fragment.appendChild(shadow.dom._to_dom(node_33172));


var G__33173 = seq__32238_33168;
var G__33174 = chunk__32239_33169;
var G__33175 = count__32240_33170;
var G__33176 = (i__32241_33171 + (1));
seq__32238_33168 = G__33173;
chunk__32239_33169 = G__33174;
count__32240_33170 = G__33175;
i__32241_33171 = G__33176;
continue;
} else {
var temp__5735__auto___33177 = cljs.core.seq(seq__32238_33168);
if(temp__5735__auto___33177){
var seq__32238_33178__$1 = temp__5735__auto___33177;
if(cljs.core.chunked_seq_QMARK_(seq__32238_33178__$1)){
var c__4556__auto___33179 = cljs.core.chunk_first(seq__32238_33178__$1);
var G__33180 = cljs.core.chunk_rest(seq__32238_33178__$1);
var G__33181 = c__4556__auto___33179;
var G__33182 = cljs.core.count(c__4556__auto___33179);
var G__33183 = (0);
seq__32238_33168 = G__33180;
chunk__32239_33169 = G__33181;
count__32240_33170 = G__33182;
i__32241_33171 = G__33183;
continue;
} else {
var node_33187 = cljs.core.first(seq__32238_33178__$1);
fragment.appendChild(shadow.dom._to_dom(node_33187));


var G__33189 = cljs.core.next(seq__32238_33178__$1);
var G__33190 = null;
var G__33191 = (0);
var G__33192 = (0);
seq__32238_33168 = G__33189;
chunk__32239_33169 = G__33190;
count__32240_33170 = G__33191;
i__32241_33171 = G__33192;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32234){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32234));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32250_33193 = cljs.core.seq(scripts);
var chunk__32251_33194 = null;
var count__32252_33195 = (0);
var i__32253_33196 = (0);
while(true){
if((i__32253_33196 < count__32252_33195)){
var vec__32263_33197 = chunk__32251_33194.cljs$core$IIndexed$_nth$arity$2(null,i__32253_33196);
var script_tag_33198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32263_33197,(0),null);
var script_body_33199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32263_33197,(1),null);
eval(script_body_33199);


var G__33200 = seq__32250_33193;
var G__33201 = chunk__32251_33194;
var G__33202 = count__32252_33195;
var G__33203 = (i__32253_33196 + (1));
seq__32250_33193 = G__33200;
chunk__32251_33194 = G__33201;
count__32252_33195 = G__33202;
i__32253_33196 = G__33203;
continue;
} else {
var temp__5735__auto___33204 = cljs.core.seq(seq__32250_33193);
if(temp__5735__auto___33204){
var seq__32250_33205__$1 = temp__5735__auto___33204;
if(cljs.core.chunked_seq_QMARK_(seq__32250_33205__$1)){
var c__4556__auto___33206 = cljs.core.chunk_first(seq__32250_33205__$1);
var G__33207 = cljs.core.chunk_rest(seq__32250_33205__$1);
var G__33208 = c__4556__auto___33206;
var G__33209 = cljs.core.count(c__4556__auto___33206);
var G__33210 = (0);
seq__32250_33193 = G__33207;
chunk__32251_33194 = G__33208;
count__32252_33195 = G__33209;
i__32253_33196 = G__33210;
continue;
} else {
var vec__32270_33213 = cljs.core.first(seq__32250_33205__$1);
var script_tag_33214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32270_33213,(0),null);
var script_body_33215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32270_33213,(1),null);
eval(script_body_33215);


var G__33216 = cljs.core.next(seq__32250_33205__$1);
var G__33217 = null;
var G__33218 = (0);
var G__33219 = (0);
seq__32250_33193 = G__33216;
chunk__32251_33194 = G__33217;
count__32252_33195 = G__33218;
i__32253_33196 = G__33219;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32274){
var vec__32276 = p__32274;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32286 = arguments.length;
switch (G__32286) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32305 = cljs.core.seq(style_keys);
var chunk__32306 = null;
var count__32307 = (0);
var i__32308 = (0);
while(true){
if((i__32308 < count__32307)){
var it = chunk__32306.cljs$core$IIndexed$_nth$arity$2(null,i__32308);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33232 = seq__32305;
var G__33233 = chunk__32306;
var G__33234 = count__32307;
var G__33235 = (i__32308 + (1));
seq__32305 = G__33232;
chunk__32306 = G__33233;
count__32307 = G__33234;
i__32308 = G__33235;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32305);
if(temp__5735__auto__){
var seq__32305__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32305__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32305__$1);
var G__33236 = cljs.core.chunk_rest(seq__32305__$1);
var G__33237 = c__4556__auto__;
var G__33238 = cljs.core.count(c__4556__auto__);
var G__33239 = (0);
seq__32305 = G__33236;
chunk__32306 = G__33237;
count__32307 = G__33238;
i__32308 = G__33239;
continue;
} else {
var it = cljs.core.first(seq__32305__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33244 = cljs.core.next(seq__32305__$1);
var G__33245 = null;
var G__33246 = (0);
var G__33247 = (0);
seq__32305 = G__33244;
chunk__32306 = G__33245;
count__32307 = G__33246;
i__32308 = G__33247;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32319,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32329 = k32319;
var G__32329__$1 = (((G__32329 instanceof cljs.core.Keyword))?G__32329.fqn:null);
switch (G__32329__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32319,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32330){
var vec__32331 = p__32330;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32331,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32331,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32318){
var self__ = this;
var G__32318__$1 = this;
return (new cljs.core.RecordIter((0),G__32318__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32320,other32321){
var self__ = this;
var this32320__$1 = this;
return (((!((other32321 == null)))) && ((this32320__$1.constructor === other32321.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32320__$1.x,other32321.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32320__$1.y,other32321.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32320__$1.__extmap,other32321.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32318){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32350 = cljs.core.keyword_identical_QMARK_;
var expr__32351 = k__4388__auto__;
if(cljs.core.truth_((pred__32350.cljs$core$IFn$_invoke$arity$2 ? pred__32350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32351) : pred__32350.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32351)))){
return (new shadow.dom.Coordinate(G__32318,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32350.cljs$core$IFn$_invoke$arity$2 ? pred__32350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32351) : pred__32350.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32351)))){
return (new shadow.dom.Coordinate(self__.x,G__32318,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32318),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32318){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32318,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32324){
var extmap__4419__auto__ = (function (){var G__32367 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32324,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32324)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32367);
} else {
return G__32367;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32324),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32324),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32392,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32405 = k32392;
var G__32405__$1 = (((G__32405 instanceof cljs.core.Keyword))?G__32405.fqn:null);
switch (G__32405__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32392,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32410){
var vec__32412 = p__32410;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32412,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32412,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32391){
var self__ = this;
var G__32391__$1 = this;
return (new cljs.core.RecordIter((0),G__32391__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32393,other32394){
var self__ = this;
var this32393__$1 = this;
return (((!((other32394 == null)))) && ((this32393__$1.constructor === other32394.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32393__$1.w,other32394.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32393__$1.h,other32394.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32393__$1.__extmap,other32394.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32391){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32433 = cljs.core.keyword_identical_QMARK_;
var expr__32434 = k__4388__auto__;
if(cljs.core.truth_((pred__32433.cljs$core$IFn$_invoke$arity$2 ? pred__32433.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32434) : pred__32433.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32434)))){
return (new shadow.dom.Size(G__32391,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32433.cljs$core$IFn$_invoke$arity$2 ? pred__32433.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32434) : pred__32433.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32434)))){
return (new shadow.dom.Size(self__.w,G__32391,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32391),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32391){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32391,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32397){
var extmap__4419__auto__ = (function (){var G__32441 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32397,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32397)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32441);
} else {
return G__32441;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32397),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32397),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33312 = (i + (1));
var G__33313 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33312;
ret = G__33313;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32452){
var vec__32454 = p__32452;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32459 = arguments.length;
switch (G__32459) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33322 = ps;
var G__33323 = (i + (1));
el__$1 = G__33322;
i = G__33323;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32489 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32489,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32489,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32489,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32494_33328 = cljs.core.seq(props);
var chunk__32495_33329 = null;
var count__32496_33330 = (0);
var i__32497_33331 = (0);
while(true){
if((i__32497_33331 < count__32496_33330)){
var vec__32513_33332 = chunk__32495_33329.cljs$core$IIndexed$_nth$arity$2(null,i__32497_33331);
var k_33333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513_33332,(0),null);
var v_33334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513_33332,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33333);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33333),v_33334);


var G__33335 = seq__32494_33328;
var G__33336 = chunk__32495_33329;
var G__33337 = count__32496_33330;
var G__33338 = (i__32497_33331 + (1));
seq__32494_33328 = G__33335;
chunk__32495_33329 = G__33336;
count__32496_33330 = G__33337;
i__32497_33331 = G__33338;
continue;
} else {
var temp__5735__auto___33340 = cljs.core.seq(seq__32494_33328);
if(temp__5735__auto___33340){
var seq__32494_33341__$1 = temp__5735__auto___33340;
if(cljs.core.chunked_seq_QMARK_(seq__32494_33341__$1)){
var c__4556__auto___33342 = cljs.core.chunk_first(seq__32494_33341__$1);
var G__33343 = cljs.core.chunk_rest(seq__32494_33341__$1);
var G__33344 = c__4556__auto___33342;
var G__33345 = cljs.core.count(c__4556__auto___33342);
var G__33346 = (0);
seq__32494_33328 = G__33343;
chunk__32495_33329 = G__33344;
count__32496_33330 = G__33345;
i__32497_33331 = G__33346;
continue;
} else {
var vec__32517_33347 = cljs.core.first(seq__32494_33341__$1);
var k_33348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32517_33347,(0),null);
var v_33349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32517_33347,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33348);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33348),v_33349);


var G__33351 = cljs.core.next(seq__32494_33341__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__32494_33328 = G__33351;
chunk__32495_33329 = G__33352;
count__32496_33330 = G__33353;
i__32497_33331 = G__33354;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32535 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
var seq__32541_33355 = cljs.core.seq(node_children);
var chunk__32543_33356 = null;
var count__32544_33357 = (0);
var i__32545_33358 = (0);
while(true){
if((i__32545_33358 < count__32544_33357)){
var child_struct_33359 = chunk__32543_33356.cljs$core$IIndexed$_nth$arity$2(null,i__32545_33358);
if((!((child_struct_33359 == null)))){
if(typeof child_struct_33359 === 'string'){
var text_33360 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33360),child_struct_33359].join(''));
} else {
var children_33361 = shadow.dom.svg_node(child_struct_33359);
if(cljs.core.seq_QMARK_(children_33361)){
var seq__32603_33362 = cljs.core.seq(children_33361);
var chunk__32605_33363 = null;
var count__32606_33364 = (0);
var i__32607_33365 = (0);
while(true){
if((i__32607_33365 < count__32606_33364)){
var child_33368 = chunk__32605_33363.cljs$core$IIndexed$_nth$arity$2(null,i__32607_33365);
if(cljs.core.truth_(child_33368)){
node.appendChild(child_33368);


var G__33369 = seq__32603_33362;
var G__33370 = chunk__32605_33363;
var G__33371 = count__32606_33364;
var G__33372 = (i__32607_33365 + (1));
seq__32603_33362 = G__33369;
chunk__32605_33363 = G__33370;
count__32606_33364 = G__33371;
i__32607_33365 = G__33372;
continue;
} else {
var G__33374 = seq__32603_33362;
var G__33375 = chunk__32605_33363;
var G__33376 = count__32606_33364;
var G__33377 = (i__32607_33365 + (1));
seq__32603_33362 = G__33374;
chunk__32605_33363 = G__33375;
count__32606_33364 = G__33376;
i__32607_33365 = G__33377;
continue;
}
} else {
var temp__5735__auto___33378 = cljs.core.seq(seq__32603_33362);
if(temp__5735__auto___33378){
var seq__32603_33379__$1 = temp__5735__auto___33378;
if(cljs.core.chunked_seq_QMARK_(seq__32603_33379__$1)){
var c__4556__auto___33380 = cljs.core.chunk_first(seq__32603_33379__$1);
var G__33382 = cljs.core.chunk_rest(seq__32603_33379__$1);
var G__33383 = c__4556__auto___33380;
var G__33384 = cljs.core.count(c__4556__auto___33380);
var G__33385 = (0);
seq__32603_33362 = G__33382;
chunk__32605_33363 = G__33383;
count__32606_33364 = G__33384;
i__32607_33365 = G__33385;
continue;
} else {
var child_33386 = cljs.core.first(seq__32603_33379__$1);
if(cljs.core.truth_(child_33386)){
node.appendChild(child_33386);


var G__33387 = cljs.core.next(seq__32603_33379__$1);
var G__33388 = null;
var G__33389 = (0);
var G__33390 = (0);
seq__32603_33362 = G__33387;
chunk__32605_33363 = G__33388;
count__32606_33364 = G__33389;
i__32607_33365 = G__33390;
continue;
} else {
var G__33391 = cljs.core.next(seq__32603_33379__$1);
var G__33392 = null;
var G__33393 = (0);
var G__33394 = (0);
seq__32603_33362 = G__33391;
chunk__32605_33363 = G__33392;
count__32606_33364 = G__33393;
i__32607_33365 = G__33394;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33361);
}
}


var G__33395 = seq__32541_33355;
var G__33396 = chunk__32543_33356;
var G__33397 = count__32544_33357;
var G__33398 = (i__32545_33358 + (1));
seq__32541_33355 = G__33395;
chunk__32543_33356 = G__33396;
count__32544_33357 = G__33397;
i__32545_33358 = G__33398;
continue;
} else {
var G__33399 = seq__32541_33355;
var G__33400 = chunk__32543_33356;
var G__33401 = count__32544_33357;
var G__33402 = (i__32545_33358 + (1));
seq__32541_33355 = G__33399;
chunk__32543_33356 = G__33400;
count__32544_33357 = G__33401;
i__32545_33358 = G__33402;
continue;
}
} else {
var temp__5735__auto___33403 = cljs.core.seq(seq__32541_33355);
if(temp__5735__auto___33403){
var seq__32541_33404__$1 = temp__5735__auto___33403;
if(cljs.core.chunked_seq_QMARK_(seq__32541_33404__$1)){
var c__4556__auto___33405 = cljs.core.chunk_first(seq__32541_33404__$1);
var G__33407 = cljs.core.chunk_rest(seq__32541_33404__$1);
var G__33408 = c__4556__auto___33405;
var G__33409 = cljs.core.count(c__4556__auto___33405);
var G__33410 = (0);
seq__32541_33355 = G__33407;
chunk__32543_33356 = G__33408;
count__32544_33357 = G__33409;
i__32545_33358 = G__33410;
continue;
} else {
var child_struct_33411 = cljs.core.first(seq__32541_33404__$1);
if((!((child_struct_33411 == null)))){
if(typeof child_struct_33411 === 'string'){
var text_33412 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33412),child_struct_33411].join(''));
} else {
var children_33413 = shadow.dom.svg_node(child_struct_33411);
if(cljs.core.seq_QMARK_(children_33413)){
var seq__32635_33414 = cljs.core.seq(children_33413);
var chunk__32637_33415 = null;
var count__32638_33416 = (0);
var i__32639_33417 = (0);
while(true){
if((i__32639_33417 < count__32638_33416)){
var child_33418 = chunk__32637_33415.cljs$core$IIndexed$_nth$arity$2(null,i__32639_33417);
if(cljs.core.truth_(child_33418)){
node.appendChild(child_33418);


var G__33420 = seq__32635_33414;
var G__33421 = chunk__32637_33415;
var G__33422 = count__32638_33416;
var G__33423 = (i__32639_33417 + (1));
seq__32635_33414 = G__33420;
chunk__32637_33415 = G__33421;
count__32638_33416 = G__33422;
i__32639_33417 = G__33423;
continue;
} else {
var G__33424 = seq__32635_33414;
var G__33425 = chunk__32637_33415;
var G__33426 = count__32638_33416;
var G__33427 = (i__32639_33417 + (1));
seq__32635_33414 = G__33424;
chunk__32637_33415 = G__33425;
count__32638_33416 = G__33426;
i__32639_33417 = G__33427;
continue;
}
} else {
var temp__5735__auto___33428__$1 = cljs.core.seq(seq__32635_33414);
if(temp__5735__auto___33428__$1){
var seq__32635_33429__$1 = temp__5735__auto___33428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32635_33429__$1)){
var c__4556__auto___33430 = cljs.core.chunk_first(seq__32635_33429__$1);
var G__33431 = cljs.core.chunk_rest(seq__32635_33429__$1);
var G__33432 = c__4556__auto___33430;
var G__33433 = cljs.core.count(c__4556__auto___33430);
var G__33434 = (0);
seq__32635_33414 = G__33431;
chunk__32637_33415 = G__33432;
count__32638_33416 = G__33433;
i__32639_33417 = G__33434;
continue;
} else {
var child_33435 = cljs.core.first(seq__32635_33429__$1);
if(cljs.core.truth_(child_33435)){
node.appendChild(child_33435);


var G__33436 = cljs.core.next(seq__32635_33429__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__32635_33414 = G__33436;
chunk__32637_33415 = G__33437;
count__32638_33416 = G__33438;
i__32639_33417 = G__33439;
continue;
} else {
var G__33440 = cljs.core.next(seq__32635_33429__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__32635_33414 = G__33440;
chunk__32637_33415 = G__33441;
count__32638_33416 = G__33442;
i__32639_33417 = G__33443;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33413);
}
}


var G__33444 = cljs.core.next(seq__32541_33404__$1);
var G__33445 = null;
var G__33446 = (0);
var G__33447 = (0);
seq__32541_33355 = G__33444;
chunk__32543_33356 = G__33445;
count__32544_33357 = G__33446;
i__32545_33358 = G__33447;
continue;
} else {
var G__33448 = cljs.core.next(seq__32541_33404__$1);
var G__33449 = null;
var G__33450 = (0);
var G__33451 = (0);
seq__32541_33355 = G__33448;
chunk__32543_33356 = G__33449;
count__32544_33357 = G__33450;
i__32545_33358 = G__33451;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33453 = arguments.length;
var i__4737__auto___33455 = (0);
while(true){
if((i__4737__auto___33455 < len__4736__auto___33453)){
args__4742__auto__.push((arguments[i__4737__auto___33455]));

var G__33456 = (i__4737__auto___33455 + (1));
i__4737__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32681){
var G__32682 = cljs.core.first(seq32681);
var seq32681__$1 = cljs.core.next(seq32681);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32682,seq32681__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32705 = arguments.length;
switch (G__32705) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__28775__auto___33460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28776__auto__ = (function (){var switch__28636__auto__ = (function (state_32720){
var state_val_32722 = (state_32720[(1)]);
if((state_val_32722 === (1))){
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32720__$1,(2),once_or_cleanup);
} else {
if((state_val_32722 === (2))){
var inst_32716 = (state_32720[(2)]);
var inst_32717 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32720__$1 = (function (){var statearr_32727 = state_32720;
(statearr_32727[(7)] = inst_32716);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32720__$1,inst_32717);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28637__auto__ = null;
var shadow$dom$state_machine__28637__auto____0 = (function (){
var statearr_32732 = [null,null,null,null,null,null,null,null];
(statearr_32732[(0)] = shadow$dom$state_machine__28637__auto__);

(statearr_32732[(1)] = (1));

return statearr_32732;
});
var shadow$dom$state_machine__28637__auto____1 = (function (state_32720){
while(true){
var ret_value__28638__auto__ = (function (){try{while(true){
var result__28639__auto__ = switch__28636__auto__(state_32720);
if(cljs.core.keyword_identical_QMARK_(result__28639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28639__auto__;
}
break;
}
}catch (e32734){var ex__28640__auto__ = e32734;
var statearr_32735_33466 = state_32720;
(statearr_32735_33466[(2)] = ex__28640__auto__);


if(cljs.core.seq((state_32720[(4)]))){
var statearr_32737_33467 = state_32720;
(statearr_32737_33467[(1)] = cljs.core.first((state_32720[(4)])));

} else {
throw ex__28640__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33468 = state_32720;
state_32720 = G__33468;
continue;
} else {
return ret_value__28638__auto__;
}
break;
}
});
shadow$dom$state_machine__28637__auto__ = function(state_32720){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28637__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28637__auto____1.call(this,state_32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28637__auto____0;
shadow$dom$state_machine__28637__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28637__auto____1;
return shadow$dom$state_machine__28637__auto__;
})()
})();
var state__28777__auto__ = (function (){var statearr_32741 = f__28776__auto__();
(statearr_32741[(6)] = c__28775__auto___33460);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28777__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
