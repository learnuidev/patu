goog.provide('patu.core');
goog.require('cljs.core');
goog.require('patu.events');
goog.require('patu.subs');
goog.require('patu.utils');
goog.require('patu.state');
goog.require('patu.loaders');
goog.require('patu.components');
goog.require('patu.audio');
patu.core.dispatch = patu.events.dispatch;
patu.core.dispatch_sync = patu.events.dispatch_sync;
patu.core.dispatch_n = patu.events.dispatch_n;
patu.core.reg_event = patu.events.reg_event;
patu.core.sub = patu.subs.sub;
patu.core.reg_sub = patu.subs.reg_sub;
patu.core.neg = (function patu$core$neg(num){
return ((-1) * num);
});
patu.core.height = (function patu$core$height(){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).height();
});
patu.core.width = (function patu$core$width(){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).width();
});
patu.core.center = (function patu$core$center(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(patu.core.width() / (2)),(patu.core.height() / (2))], null);
});
patu.core.randd = (function patu$core$randd(v1,v2){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).rand(v1,v2);
});
patu.core.go = (function patu$core$go(var_args){
var G__26677 = arguments.length;
switch (G__26677) {
case 1:
return patu.core.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patu.core.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.core.go.cljs$core$IFn$_invoke$arity$1 = (function (id){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).go(cljs.core.name(id));
}));

(patu.core.go.cljs$core$IFn$_invoke$arity$2 = (function (id,opts){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).go(cljs.core.name(id),cljs.core.clj__GT_js(opts));
}));

(patu.core.go.cljs$lang$maxFixedArity = 2);

var G__26678_26918 = new cljs.core.Keyword(null,"go","go",-146946655);
var G__26679_26919 = (function (_,p__26680){
var vec__26681 = p__26680;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26681,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26681,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26681,(2),null);
if(cljs.core.truth_(opts)){
return patu.core.go.cljs$core$IFn$_invoke$arity$2(id,opts);
} else {
return patu.core.go.cljs$core$IFn$_invoke$arity$1(id);
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26678_26918,G__26679_26919) : patu.core.reg_event.call(null,G__26678_26918,G__26679_26919));
patu.core.reg_comp = (function patu$core$reg_comp(var_args){
var G__26685 = arguments.length;
switch (G__26685) {
case 1:
return patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patu.core.reg_comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1 = (function (data){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0)) instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).reg_comp(cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0))),cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1))));
} else {
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).reg_comp(cljs.core.clj__GT_js(data));
}
}));

(patu.core.reg_comp.cljs$core$IFn$_invoke$arity$2 = (function (id,data){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).reg_comp(cljs.core.name(id),cljs.core.clj__GT_js(data));
}));

(patu.core.reg_comp.cljs$lang$maxFixedArity = 2);

patu.core.reg_comp_n = (function patu$core$reg_comp_n(datas){
var seq__26686 = cljs.core.seq(datas);
var chunk__26687 = null;
var count__26688 = (0);
var i__26689 = (0);
while(true){
if((i__26689 < count__26688)){
var data = chunk__26687.cljs$core$IIndexed$_nth$arity$2(null,i__26689);
if(cljs.core.map_QMARK_(data)){
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__26696_26921 = data;
var id_26922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_26921,(0),null);
var props_26923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_26921,(1),null);
if((id_26922 instanceof cljs.core.Keyword)){
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$2(id_26922,props_26923);
} else {
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__26924 = seq__26686;
var G__26925 = chunk__26687;
var G__26926 = count__26688;
var G__26927 = (i__26689 + (1));
seq__26686 = G__26924;
chunk__26687 = G__26925;
count__26688 = G__26926;
i__26689 = G__26927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26686);
if(temp__5735__auto__){
var seq__26686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26686__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26686__$1);
var G__26928 = cljs.core.chunk_rest(seq__26686__$1);
var G__26929 = c__4556__auto__;
var G__26930 = cljs.core.count(c__4556__auto__);
var G__26931 = (0);
seq__26686 = G__26928;
chunk__26687 = G__26929;
count__26688 = G__26930;
i__26689 = G__26931;
continue;
} else {
var data = cljs.core.first(seq__26686__$1);
if(cljs.core.map_QMARK_(data)){
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__26699_26932 = data;
var id_26933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26699_26932,(0),null);
var props_26934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26699_26932,(1),null);
if((id_26933 instanceof cljs.core.Keyword)){
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$2(id_26933,props_26934);
} else {
patu.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__26935 = cljs.core.next(seq__26686__$1);
var G__26936 = null;
var G__26937 = (0);
var G__26938 = (0);
seq__26686 = G__26935;
chunk__26687 = G__26936;
count__26688 = G__26937;
i__26689 = G__26938;
continue;
}
} else {
return null;
}
}
break;
}
});
patu.core.get_comp = (function patu$core$get_comp(id){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).get_comp(cljs.core.name(id));
});
var G__26702_26939 = new cljs.core.Keyword(null,"comp","comp",1191953630);
var G__26703_26940 = (function (_,p__26704){
var vec__26705 = p__26704;
var seq__26706 = cljs.core.seq(vec__26705);
var first__26707 = cljs.core.first(seq__26706);
var seq__26706__$1 = cljs.core.next(seq__26706);
var ___$1 = first__26707;
var first__26707__$1 = cljs.core.first(seq__26706__$1);
var seq__26706__$2 = cljs.core.next(seq__26706__$1);
var id = first__26707__$1;
var props = seq__26706__$2;
if(props){
return patu.utils.jget_in(patu.core.get_comp(id),props);
} else {
return patu.core.get_comp(id);
}
});
(patu.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26702_26939,G__26703_26940) : patu.core.reg_sub.call(null,G__26702_26939,G__26703_26940));
patu.core.data__GT_fn = (function patu$core$data__GT_fn(id,data){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Function,cljs.core.type(data))){
return (data.cljs$core$IFn$_invoke$arity$0 ? data.cljs$core$IFn$_invoke$arity$0() : data.call(null));
} else {
var seq__26708 = cljs.core.seq(data);
var chunk__26709 = null;
var count__26710 = (0);
var i__26711 = (0);
while(true){
if((i__26711 < count__26710)){
var vec__26750 = chunk__26709.cljs$core$IIndexed$_nth$arity$2(null,i__26711);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cid)){
(patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(props) : patu.core.dispatch.call(null,props));
} else {
var temp__5735__auto___26941 = patu.core.get_comp(cid);
if(cljs.core.truth_(temp__5735__auto___26941)){
var comp_26942 = temp__5735__auto___26941;
var seq__26753_26943 = cljs.core.seq(props);
var chunk__26754_26944 = null;
var count__26755_26945 = (0);
var i__26756_26946 = (0);
while(true){
if((i__26756_26946 < count__26755_26945)){
var vec__26763_26947 = chunk__26754_26944.cljs$core$IIndexed$_nth$arity$2(null,i__26756_26946);
var k_26948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26763_26947,(0),null);
var v_26949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26763_26947,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26948,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_26942.pos.x = (comp_26942.pos.x + v_26949));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26948,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_26942.pos.y = (comp_26942.pos.y + v_26949));
} else {
}


var G__26950 = seq__26753_26943;
var G__26951 = chunk__26754_26944;
var G__26952 = count__26755_26945;
var G__26953 = (i__26756_26946 + (1));
seq__26753_26943 = G__26950;
chunk__26754_26944 = G__26951;
count__26755_26945 = G__26952;
i__26756_26946 = G__26953;
continue;
} else {
var temp__5735__auto___26954__$1 = cljs.core.seq(seq__26753_26943);
if(temp__5735__auto___26954__$1){
var seq__26753_26955__$1 = temp__5735__auto___26954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26753_26955__$1)){
var c__4556__auto___26956 = cljs.core.chunk_first(seq__26753_26955__$1);
var G__26957 = cljs.core.chunk_rest(seq__26753_26955__$1);
var G__26958 = c__4556__auto___26956;
var G__26959 = cljs.core.count(c__4556__auto___26956);
var G__26960 = (0);
seq__26753_26943 = G__26957;
chunk__26754_26944 = G__26958;
count__26755_26945 = G__26959;
i__26756_26946 = G__26960;
continue;
} else {
var vec__26766_26961 = cljs.core.first(seq__26753_26955__$1);
var k_26962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766_26961,(0),null);
var v_26963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766_26961,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26962,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_26942.pos.x = (comp_26942.pos.x + v_26963));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26962,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_26942.pos.y = (comp_26942.pos.y + v_26963));
} else {
}


var G__26964 = cljs.core.next(seq__26753_26955__$1);
var G__26965 = null;
var G__26966 = (0);
var G__26967 = (0);
seq__26753_26943 = G__26964;
chunk__26754_26944 = G__26965;
count__26755_26945 = G__26966;
i__26756_26946 = G__26967;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__26968 = seq__26708;
var G__26969 = chunk__26709;
var G__26970 = count__26710;
var G__26971 = (i__26711 + (1));
seq__26708 = G__26968;
chunk__26709 = G__26969;
count__26710 = G__26970;
i__26711 = G__26971;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26708);
if(temp__5735__auto__){
var seq__26708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26708__$1);
var G__26972 = cljs.core.chunk_rest(seq__26708__$1);
var G__26973 = c__4556__auto__;
var G__26974 = cljs.core.count(c__4556__auto__);
var G__26975 = (0);
seq__26708 = G__26972;
chunk__26709 = G__26973;
count__26710 = G__26974;
i__26711 = G__26975;
continue;
} else {
var vec__26769 = cljs.core.first(seq__26708__$1);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26769,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26769,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cid)){
(patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(props) : patu.core.dispatch.call(null,props));
} else {
var temp__5735__auto___26976__$1 = patu.core.get_comp(cid);
if(cljs.core.truth_(temp__5735__auto___26976__$1)){
var comp_26977 = temp__5735__auto___26976__$1;
var seq__26772_26978 = cljs.core.seq(props);
var chunk__26773_26979 = null;
var count__26774_26980 = (0);
var i__26775_26981 = (0);
while(true){
if((i__26775_26981 < count__26774_26980)){
var vec__26782_26982 = chunk__26773_26979.cljs$core$IIndexed$_nth$arity$2(null,i__26775_26981);
var k_26983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782_26982,(0),null);
var v_26984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782_26982,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26983,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_26977.pos.x = (comp_26977.pos.x + v_26984));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26983,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_26977.pos.y = (comp_26977.pos.y + v_26984));
} else {
}


var G__26985 = seq__26772_26978;
var G__26986 = chunk__26773_26979;
var G__26987 = count__26774_26980;
var G__26988 = (i__26775_26981 + (1));
seq__26772_26978 = G__26985;
chunk__26773_26979 = G__26986;
count__26774_26980 = G__26987;
i__26775_26981 = G__26988;
continue;
} else {
var temp__5735__auto___26989__$2 = cljs.core.seq(seq__26772_26978);
if(temp__5735__auto___26989__$2){
var seq__26772_26990__$1 = temp__5735__auto___26989__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26772_26990__$1)){
var c__4556__auto___26991 = cljs.core.chunk_first(seq__26772_26990__$1);
var G__26992 = cljs.core.chunk_rest(seq__26772_26990__$1);
var G__26993 = c__4556__auto___26991;
var G__26994 = cljs.core.count(c__4556__auto___26991);
var G__26995 = (0);
seq__26772_26978 = G__26992;
chunk__26773_26979 = G__26993;
count__26774_26980 = G__26994;
i__26775_26981 = G__26995;
continue;
} else {
var vec__26785_26996 = cljs.core.first(seq__26772_26990__$1);
var k_26997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26785_26996,(0),null);
var v_26998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26785_26996,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26997,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_26977.pos.x = (comp_26977.pos.x + v_26998));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_26997,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_26977.pos.y = (comp_26977.pos.y + v_26998));
} else {
}


var G__26999 = cljs.core.next(seq__26772_26990__$1);
var G__27000 = null;
var G__27001 = (0);
var G__27002 = (0);
seq__26772_26978 = G__26999;
chunk__26773_26979 = G__27000;
count__26774_26980 = G__27001;
i__26775_26981 = G__27002;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__27003 = cljs.core.next(seq__26708__$1);
var G__27004 = null;
var G__27005 = (0);
var G__27006 = (0);
seq__26708 = G__27003;
chunk__26709 = G__27004;
count__26710 = G__27005;
i__26711 = G__27006;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
patu.core.key_down = (function patu$core$key_down(dir,data){
var handler = patu.core.data__GT_fn(dir,data);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).keyDown(cljs.core.name(dir),handler);
});
patu.core.action = (function patu$core$action(id,handler){
var temp__5735__auto__ = patu.core.get_comp(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if(cljs.core.truth_(comp.action)){
return comp.action(handler);
} else {
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).action(cljs.core.name(id),handler);
}
} else {
return null;
}
});
var G__26788_27007 = new cljs.core.Keyword(null,"action","action",-811238024);
var G__26789_27008 = (function (_,p__26790){
var vec__26791 = p__26790;
var seq__26792 = cljs.core.seq(vec__26791);
var first__26793 = cljs.core.first(seq__26792);
var seq__26792__$1 = cljs.core.next(seq__26792);
var ___$1 = first__26793;
var comps = seq__26792__$1;
if((cljs.core.first(comps) instanceof cljs.core.Keyword)){
return patu.core.action(cljs.core.first(comps),cljs.core.second(comps));
} else {
var seq__26794 = cljs.core.seq(comps);
var chunk__26795 = null;
var count__26796 = (0);
var i__26797 = (0);
while(true){
if((i__26797 < count__26796)){
var vec__26804 = chunk__26795.cljs$core$IIndexed$_nth$arity$2(null,i__26797);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26804,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26804,(1),null);
patu.core.action(id,handler);


var G__27009 = seq__26794;
var G__27010 = chunk__26795;
var G__27011 = count__26796;
var G__27012 = (i__26797 + (1));
seq__26794 = G__27009;
chunk__26795 = G__27010;
count__26796 = G__27011;
i__26797 = G__27012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26794);
if(temp__5735__auto__){
var seq__26794__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26794__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26794__$1);
var G__27013 = cljs.core.chunk_rest(seq__26794__$1);
var G__27014 = c__4556__auto__;
var G__27015 = cljs.core.count(c__4556__auto__);
var G__27016 = (0);
seq__26794 = G__27013;
chunk__26795 = G__27014;
count__26796 = G__27015;
i__26797 = G__27016;
continue;
} else {
var vec__26807 = cljs.core.first(seq__26794__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(1),null);
patu.core.action(id,handler);


var G__27017 = cljs.core.next(seq__26794__$1);
var G__27018 = null;
var G__27019 = (0);
var G__27020 = (0);
seq__26794 = G__27017;
chunk__26795 = G__27018;
count__26796 = G__27019;
i__26797 = G__27020;
continue;
}
} else {
return null;
}
}
break;
}
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26788_27007,G__26789_27008) : patu.core.reg_event.call(null,G__26788_27007,G__26789_27008));
var G__26810_27021 = new cljs.core.Keyword(null,"jump","jump",-971319427);
var G__26811_27022 = (function (_,p__26812){
var vec__26813 = p__26812;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813,(2),null);
var temp__5733__auto__ = (function (){var G__26816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp","comp",1191953630),id], null);
return (patu.core.sub.cljs$core$IFn$_invoke$arity$1 ? patu.core.sub.cljs$core$IFn$_invoke$arity$1(G__26816) : patu.core.sub.call(null,G__26816));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var comp = temp__5733__auto__;
return patu.components.jump_BANG_(comp,value);
} else {
return console.warn(["No component found for component ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26810_27021,G__26811_27022) : patu.core.reg_event.call(null,G__26810_27021,G__26811_27022));
var G__26817_27023 = new cljs.core.Keyword("anim","play","anim/play",-581482449);
var G__26818_27024 = (function (_,p__26819){
var vec__26820 = p__26819;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26820,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26820,(1),null);
var aid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26820,(2),null);
var temp__5735__auto__ = patu.core.get_comp(pid);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
return comp.play(cljs.core.name(aid));
} else {
return null;
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26817_27023,G__26818_27024) : patu.core.reg_event.call(null,G__26817_27023,G__26818_27024));
var G__26823_27025 = new cljs.core.Keyword("audio","play","audio/play",-470328828);
var G__26824_27026 = (function (_,p__26825){
var vec__26826 = p__26825;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26826,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26826,(1),null);
return patu.audio.play(id);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26823_27025,G__26824_27026) : patu.core.reg_event.call(null,G__26823_27025,G__26824_27026));
var G__26829_27027 = new cljs.core.Keyword(null,"key-down","key-down",998681515);
var G__26830_27028 = (function (_,p__26831){
var vec__26832 = p__26831;
var seq__26833 = cljs.core.seq(vec__26832);
var first__26834 = cljs.core.first(seq__26833);
var seq__26833__$1 = cljs.core.next(seq__26833);
var ___$1 = first__26834;
var comps = seq__26833__$1;
var seq__26835 = cljs.core.seq(comps);
var chunk__26836 = null;
var count__26837 = (0);
var i__26838 = (0);
while(true){
if((i__26838 < count__26837)){
var vec__26845 = chunk__26836.cljs$core$IIndexed$_nth$arity$2(null,i__26838);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26845,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26845,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Function,cljs.core.type(handler))){
(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
} else {
patu.core.key_down(dir,handler);
}


var G__27029 = seq__26835;
var G__27030 = chunk__26836;
var G__27031 = count__26837;
var G__27032 = (i__26838 + (1));
seq__26835 = G__27029;
chunk__26836 = G__27030;
count__26837 = G__27031;
i__26838 = G__27032;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26835);
if(temp__5735__auto__){
var seq__26835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26835__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26835__$1);
var G__27033 = cljs.core.chunk_rest(seq__26835__$1);
var G__27034 = c__4556__auto__;
var G__27035 = cljs.core.count(c__4556__auto__);
var G__27036 = (0);
seq__26835 = G__27033;
chunk__26836 = G__27034;
count__26837 = G__27035;
i__26838 = G__27036;
continue;
} else {
var vec__26848 = cljs.core.first(seq__26835__$1);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Function,cljs.core.type(handler))){
(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
} else {
patu.core.key_down(dir,handler);
}


var G__27037 = cljs.core.next(seq__26835__$1);
var G__27038 = null;
var G__27039 = (0);
var G__27040 = (0);
seq__26835 = G__27037;
chunk__26836 = G__27038;
count__26837 = G__27039;
i__26838 = G__27040;
continue;
}
} else {
return null;
}
}
break;
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26829_27027,G__26830_27028) : patu.core.reg_event.call(null,G__26829_27027,G__26830_27028));
var G__26851_27041 = new cljs.core.Keyword(null,"key-press","key-press",850740112);
var G__26852_27042 = (function (_,p__26853){
var vec__26854 = p__26853;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854,(2),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).keyPress(cljs.core.name(id),handler);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26851_27041,G__26852_27042) : patu.core.reg_event.call(null,G__26851_27041,G__26852_27042));
var G__26857_27043 = new cljs.core.Keyword(null,"loop","loop",-395552849);
var G__26858_27044 = (function (_,p__26859){
var vec__26860 = p__26859;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26860,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26860,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26860,(2),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).loop(time,handler);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26857_27043,G__26858_27044) : patu.core.reg_event.call(null,G__26857_27043,G__26858_27044));
var G__26863_27045 = new cljs.core.Keyword(null,"layers","layers",1944875032);
var G__26864_27046 = (function (_,p__26865){
var vec__26866 = p__26865;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(1),null);
var main_layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(2),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).layers(cljs.core.clj__GT_js(layers),cljs.core.name(main_layer));
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26863_27045,G__26864_27046) : patu.core.reg_event.call(null,G__26863_27045,G__26864_27046));
var G__26869_27047 = new cljs.core.Keyword(null,"gravity","gravity",-1815198225);
var G__26870_27048 = (function (_,p__26871){
var vec__26872 = p__26871;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(1),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).gravity(value);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26869_27047,G__26870_27048) : patu.core.reg_event.call(null,G__26869_27047,G__26870_27048));
var G__26875_27049 = new cljs.core.Keyword(null,"collides","collides",361418723);
var G__26876_27050 = (function (_,p__26877){
var vec__26878 = p__26877;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(0),null);
var vec__26881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(2),null);
return patu.core.get_comp(new cljs.core.Keyword(null,"player","player",-97687400)).collides("pipe",handler);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26875_27049,G__26876_27050) : patu.core.reg_event.call(null,G__26875_27049,G__26876_27050));
patu.core.cam_ignore = (function patu$core$cam_ignore(game,val){
return game.camIgnore(cljs.core.clj__GT_js(val));
});
var G__26884_27051 = new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710);
var G__26885_27052 = (function (_,p__26886){
var vec__26887 = p__26886;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(0),null);
var backgrounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(1),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).camIgnore(cljs.core.clj__GT_js(backgrounds));
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26884_27051,G__26885_27052) : patu.core.reg_event.call(null,G__26884_27051,G__26885_27052));
var G__26890_27053 = new cljs.core.Keyword("comp","reg","comp/reg",1624858375);
var G__26891_27054 = (function (_,p__26892){
var vec__26893 = p__26892;
var seq__26894 = cljs.core.seq(vec__26893);
var first__26895 = cljs.core.first(seq__26894);
var seq__26894__$1 = cljs.core.next(seq__26894);
var ___$1 = first__26895;
var args = seq__26894__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(patu.core.reg_comp,args);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26890_27053,G__26891_27054) : patu.core.reg_event.call(null,G__26890_27053,G__26891_27054));
var G__26896_27055 = new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305);
var G__26897_27056 = (function (_,p__26898){
var vec__26899 = p__26898;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26899,(0),null);
var datas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26899,(1),null);
return patu.core.reg_comp_n(datas);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26896_27055,G__26897_27056) : patu.core.reg_event.call(null,G__26896_27055,G__26897_27056));
/**
 * Use scenes to define different parts of a game, e.g. Game Scene, Start Scene,
 */
patu.core.scene = (function patu$core$scene(game,id,handler){
return game.scene(cljs.core.name(id),handler);
});
/**
 * Registers a scene
 */
patu.core.reg_scene = (function patu$core$reg_scene(id,p__26902){
var map__26903 = p__26902;
var map__26903__$1 = (((((!((map__26903 == null))))?(((((map__26903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26903):map__26903);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"evt","evt",-1251566867));
var handler = (function (state){
var G__26905_27057 = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(state) : init.call(null,state));
(patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__26905_27057) : patu.core.dispatch_n.call(null,G__26905_27057));

var G__26906 = (evt.cljs$core$IFn$_invoke$arity$1 ? evt.cljs$core$IFn$_invoke$arity$1(state) : evt.call(null,state));
return (patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__26906) : patu.core.dispatch_n.call(null,G__26906));
});
return patu.core.scene(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)),id,handler);
});
var G__26907_27058 = new cljs.core.Keyword(null,"reg-scene","reg-scene",-1576774985);
var G__26908_27059 = (function (_,p__26909){
var vec__26910 = p__26909;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(1),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(2),null);
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(3),null);
return patu.core.reg_scene(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"evt","evt",-1251566867),evt], null));
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26907_27058,G__26908_27059) : patu.core.reg_event.call(null,G__26907_27058,G__26908_27059));
patu.core.kaboom = (function patu$core$kaboom(var_args){
var G__26914 = arguments.length;
switch (G__26914) {
case 0:
return patu.core.kaboom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return patu.core.kaboom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.core.kaboom.cljs$core$IFn$_invoke$arity$0 = (function (){
var game = patu.core.kaboom.default((6));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patu.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"k","k",-2146297393),game);

return game;
}));

(patu.core.kaboom.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var game = module$kaboom.default(cljs.core.clj__GT_js(opts));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patu.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"k","k",-2146297393),game);

return game;
}));

(patu.core.kaboom.cljs$lang$maxFixedArity = 1);

var G__26915_27061 = new cljs.core.Keyword(null,"kaboom","kaboom",-877494365);
var G__26916_27062 = (function (_,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(patu.core.kaboom,cljs.core.rest(args));
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__26915_27061,G__26916_27062) : patu.core.reg_event.call(null,G__26915_27061,G__26916_27062));

//# sourceMappingURL=patu.core.js.map
