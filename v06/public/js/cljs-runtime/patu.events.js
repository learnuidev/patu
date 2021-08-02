goog.provide('patu.events');
goog.require('cljs.core');
goog.require('patu.state');
patu.events.get_comp = (function patu$events$get_comp(id){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).get_comp(cljs.core.name(id));
});
patu.events.browse_comps = (function patu$events$browse_comps(){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).state.components,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
patu.events.browse_comps_raw = (function patu$events$browse_comps_raw(){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).state.components;
});
patu.events.evts_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
patu.events.reg_event = (function patu$events$reg_event(id,handler){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(patu.events.evts_store),id))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(patu.events.evts_store,cljs.core.update,id,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patu.events.evts_store,cljs.core.assoc,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null));
}
});
patu.events.data__GT_fn = (function patu$events$data__GT_fn(cid,data){
var temp__5735__auto__ = patu.events.get_comp(cid);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
var seq__31975 = cljs.core.seq(data);
var chunk__31976 = null;
var count__31977 = (0);
var i__31978 = (0);
while(true){
if((i__31978 < count__31977)){
var vec__31985 = chunk__31976.cljs$core$IIndexed$_nth$arity$2(null,i__31978);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31985,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp.pos.x = (comp.pos.x + v));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp.pos.y = (comp.pos.y + v));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"value","value",305978217))){
(comp.value = v);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"value","value",305978217))){
(comp.text = v);
} else {
}


var G__32095 = seq__31975;
var G__32096 = chunk__31976;
var G__32097 = count__31977;
var G__32098 = (i__31978 + (1));
seq__31975 = G__32095;
chunk__31976 = G__32096;
count__31977 = G__32097;
i__31978 = G__32098;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31975);
if(temp__5735__auto____$1){
var seq__31975__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31975__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31975__$1);
var G__32099 = cljs.core.chunk_rest(seq__31975__$1);
var G__32100 = c__4556__auto__;
var G__32101 = cljs.core.count(c__4556__auto__);
var G__32102 = (0);
seq__31975 = G__32099;
chunk__31976 = G__32100;
count__31977 = G__32101;
i__31978 = G__32102;
continue;
} else {
var vec__31988 = cljs.core.first(seq__31975__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp.pos.x = (comp.pos.x + v));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp.pos.y = (comp.pos.y + v));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"value","value",305978217))){
(comp.value = v);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"value","value",305978217))){
(comp.text = v);
} else {
}


var G__32103 = cljs.core.next(seq__31975__$1);
var G__32104 = null;
var G__32105 = (0);
var G__32106 = (0);
seq__31975 = G__32103;
chunk__31976 = G__32104;
count__31977 = G__32105;
i__31978 = G__32106;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
patu.events.dispatch_sync = (function patu$events$dispatch_sync(props){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(patu.events.evts_store),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)));
if(cljs.core.truth_(temp__5733__auto__)){
var handlers = temp__5733__auto__;
var seq__31991 = cljs.core.seq(handlers);
var chunk__31992 = null;
var count__31993 = (0);
var i__31994 = (0);
while(true){
if((i__31994 < count__31993)){
var handler = chunk__31992.cljs$core$IIndexed$_nth$arity$2(null,i__31994);
(handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(null,props) : handler.call(null,null,props));


var G__32107 = seq__31991;
var G__32108 = chunk__31992;
var G__32109 = count__31993;
var G__32110 = (i__31994 + (1));
seq__31991 = G__32107;
chunk__31992 = G__32108;
count__31993 = G__32109;
i__31994 = G__32110;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31991);
if(temp__5735__auto__){
var seq__31991__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31991__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31991__$1);
var G__32112 = cljs.core.chunk_rest(seq__31991__$1);
var G__32113 = c__4556__auto__;
var G__32114 = cljs.core.count(c__4556__auto__);
var G__32115 = (0);
seq__31991 = G__32112;
chunk__31992 = G__32113;
count__31993 = G__32114;
i__31994 = G__32115;
continue;
} else {
var handler = cljs.core.first(seq__31991__$1);
(handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(null,props) : handler.call(null,null,props));


var G__32117 = cljs.core.next(seq__31991__$1);
var G__32118 = null;
var G__32119 = (0);
var G__32120 = (0);
seq__31991 = G__32117;
chunk__31992 = G__32118;
count__31993 = G__32119;
i__31994 = G__32120;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return console.log(["No event handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)))].join(''));
}
});
patu.events.dispatch = (function patu$events$dispatch(props){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(patu.events.evts_store),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)));
if(cljs.core.truth_(temp__5733__auto__)){
var handlers = temp__5733__auto__;
var seq__31995 = cljs.core.seq(handlers);
var chunk__31996 = null;
var count__31997 = (0);
var i__31998 = (0);
while(true){
if((i__31998 < count__31997)){
var handler = chunk__31996.cljs$core$IIndexed$_nth$arity$2(null,i__31998);
var res_32125 = (function (){var G__32045 = patu.events.browse_comps_raw();
var G__32046 = props;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__32045,G__32046) : handler.call(null,G__32045,G__32046));
})();
if(cljs.core.vector_QMARK_(res_32125)){
if((cljs.core.first(res_32125) instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.first(res_32125))){
var G__32047_32126 = cljs.core.second(res_32125);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(G__32047_32126) : patu.events.dispatch.call(null,G__32047_32126));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.first(res_32125))){
var seq__32048_32128 = cljs.core.seq(cljs.core.second(res_32125));
var chunk__32049_32129 = null;
var count__32050_32130 = (0);
var i__32051_32131 = (0);
while(true){
if((i__32051_32131 < count__32050_32130)){
var evt_vec_32132 = chunk__32049_32129.cljs$core$IIndexed$_nth$arity$2(null,i__32051_32131);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(evt_vec_32132) : patu.events.dispatch.call(null,evt_vec_32132));


var G__32134 = seq__32048_32128;
var G__32136 = chunk__32049_32129;
var G__32137 = count__32050_32130;
var G__32138 = (i__32051_32131 + (1));
seq__32048_32128 = G__32134;
chunk__32049_32129 = G__32136;
count__32050_32130 = G__32137;
i__32051_32131 = G__32138;
continue;
} else {
var temp__5735__auto___32142 = cljs.core.seq(seq__32048_32128);
if(temp__5735__auto___32142){
var seq__32048_32143__$1 = temp__5735__auto___32142;
if(cljs.core.chunked_seq_QMARK_(seq__32048_32143__$1)){
var c__4556__auto___32144 = cljs.core.chunk_first(seq__32048_32143__$1);
var G__32145 = cljs.core.chunk_rest(seq__32048_32143__$1);
var G__32146 = c__4556__auto___32144;
var G__32147 = cljs.core.count(c__4556__auto___32144);
var G__32148 = (0);
seq__32048_32128 = G__32145;
chunk__32049_32129 = G__32146;
count__32050_32130 = G__32147;
i__32051_32131 = G__32148;
continue;
} else {
var evt_vec_32149 = cljs.core.first(seq__32048_32143__$1);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(evt_vec_32149) : patu.events.dispatch.call(null,evt_vec_32149));


var G__32150 = cljs.core.next(seq__32048_32143__$1);
var G__32151 = null;
var G__32152 = (0);
var G__32153 = (0);
seq__32048_32128 = G__32150;
chunk__32049_32129 = G__32151;
count__32050_32130 = G__32152;
i__32051_32131 = G__32153;
continue;
}
} else {
}
}
break;
}
} else {
patu.events.data__GT_fn(cljs.core.first(res_32125),cljs.core.second(res_32125));
}
}
} else {
}
} else {
}

if(cljs.core.map_QMARK_(res_32125)){
var seq__32052_32157 = cljs.core.seq(res_32125);
var chunk__32053_32158 = null;
var count__32054_32159 = (0);
var i__32055_32160 = (0);
while(true){
if((i__32055_32160 < count__32054_32159)){
var vec__32062_32161 = chunk__32053_32158.cljs$core$IIndexed$_nth$arity$2(null,i__32055_32160);
var k_32162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062_32161,(0),null);
var v_32163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062_32161,(1),null);
if((k_32162 instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),k_32162)){
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(v_32163) : patu.events.dispatch.call(null,v_32163));
} else {
patu.events.data__GT_fn(k_32162,v_32163);
}
} else {
}


var G__32171 = seq__32052_32157;
var G__32172 = chunk__32053_32158;
var G__32173 = count__32054_32159;
var G__32174 = (i__32055_32160 + (1));
seq__32052_32157 = G__32171;
chunk__32053_32158 = G__32172;
count__32054_32159 = G__32173;
i__32055_32160 = G__32174;
continue;
} else {
var temp__5735__auto___32175 = cljs.core.seq(seq__32052_32157);
if(temp__5735__auto___32175){
var seq__32052_32176__$1 = temp__5735__auto___32175;
if(cljs.core.chunked_seq_QMARK_(seq__32052_32176__$1)){
var c__4556__auto___32177 = cljs.core.chunk_first(seq__32052_32176__$1);
var G__32178 = cljs.core.chunk_rest(seq__32052_32176__$1);
var G__32179 = c__4556__auto___32177;
var G__32180 = cljs.core.count(c__4556__auto___32177);
var G__32181 = (0);
seq__32052_32157 = G__32178;
chunk__32053_32158 = G__32179;
count__32054_32159 = G__32180;
i__32055_32160 = G__32181;
continue;
} else {
var vec__32065_32185 = cljs.core.first(seq__32052_32176__$1);
var k_32186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32065_32185,(0),null);
var v_32187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32065_32185,(1),null);
if((k_32186 instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),k_32186)){
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(v_32187) : patu.events.dispatch.call(null,v_32187));
} else {
patu.events.data__GT_fn(k_32186,v_32187);
}
} else {
}


var G__32191 = cljs.core.next(seq__32052_32176__$1);
var G__32192 = null;
var G__32193 = (0);
var G__32194 = (0);
seq__32052_32157 = G__32191;
chunk__32053_32158 = G__32192;
count__32054_32159 = G__32193;
i__32055_32160 = G__32194;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__32195 = seq__31995;
var G__32196 = chunk__31996;
var G__32197 = count__31997;
var G__32198 = (i__31998 + (1));
seq__31995 = G__32195;
chunk__31996 = G__32196;
count__31997 = G__32197;
i__31998 = G__32198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31995);
if(temp__5735__auto__){
var seq__31995__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31995__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31995__$1);
var G__32205 = cljs.core.chunk_rest(seq__31995__$1);
var G__32206 = c__4556__auto__;
var G__32207 = cljs.core.count(c__4556__auto__);
var G__32208 = (0);
seq__31995 = G__32205;
chunk__31996 = G__32206;
count__31997 = G__32207;
i__31998 = G__32208;
continue;
} else {
var handler = cljs.core.first(seq__31995__$1);
var res_32209 = (function (){var G__32068 = patu.events.browse_comps_raw();
var G__32069 = props;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__32068,G__32069) : handler.call(null,G__32068,G__32069));
})();
if(cljs.core.vector_QMARK_(res_32209)){
if((cljs.core.first(res_32209) instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.first(res_32209))){
var G__32070_32210 = cljs.core.second(res_32209);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(G__32070_32210) : patu.events.dispatch.call(null,G__32070_32210));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.first(res_32209))){
var seq__32071_32211 = cljs.core.seq(cljs.core.second(res_32209));
var chunk__32072_32212 = null;
var count__32073_32213 = (0);
var i__32074_32214 = (0);
while(true){
if((i__32074_32214 < count__32073_32213)){
var evt_vec_32218 = chunk__32072_32212.cljs$core$IIndexed$_nth$arity$2(null,i__32074_32214);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(evt_vec_32218) : patu.events.dispatch.call(null,evt_vec_32218));


var G__32222 = seq__32071_32211;
var G__32223 = chunk__32072_32212;
var G__32224 = count__32073_32213;
var G__32225 = (i__32074_32214 + (1));
seq__32071_32211 = G__32222;
chunk__32072_32212 = G__32223;
count__32073_32213 = G__32224;
i__32074_32214 = G__32225;
continue;
} else {
var temp__5735__auto___32226__$1 = cljs.core.seq(seq__32071_32211);
if(temp__5735__auto___32226__$1){
var seq__32071_32227__$1 = temp__5735__auto___32226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32071_32227__$1)){
var c__4556__auto___32228 = cljs.core.chunk_first(seq__32071_32227__$1);
var G__32229 = cljs.core.chunk_rest(seq__32071_32227__$1);
var G__32230 = c__4556__auto___32228;
var G__32231 = cljs.core.count(c__4556__auto___32228);
var G__32232 = (0);
seq__32071_32211 = G__32229;
chunk__32072_32212 = G__32230;
count__32073_32213 = G__32231;
i__32074_32214 = G__32232;
continue;
} else {
var evt_vec_32233 = cljs.core.first(seq__32071_32227__$1);
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(evt_vec_32233) : patu.events.dispatch.call(null,evt_vec_32233));


var G__32234 = cljs.core.next(seq__32071_32227__$1);
var G__32235 = null;
var G__32236 = (0);
var G__32237 = (0);
seq__32071_32211 = G__32234;
chunk__32072_32212 = G__32235;
count__32073_32213 = G__32236;
i__32074_32214 = G__32237;
continue;
}
} else {
}
}
break;
}
} else {
patu.events.data__GT_fn(cljs.core.first(res_32209),cljs.core.second(res_32209));
}
}
} else {
}
} else {
}

if(cljs.core.map_QMARK_(res_32209)){
var seq__32075_32238 = cljs.core.seq(res_32209);
var chunk__32076_32239 = null;
var count__32077_32240 = (0);
var i__32078_32241 = (0);
while(true){
if((i__32078_32241 < count__32077_32240)){
var vec__32085_32242 = chunk__32076_32239.cljs$core$IIndexed$_nth$arity$2(null,i__32078_32241);
var k_32243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32085_32242,(0),null);
var v_32244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32085_32242,(1),null);
if((k_32243 instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),k_32243)){
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(v_32244) : patu.events.dispatch.call(null,v_32244));
} else {
patu.events.data__GT_fn(k_32243,v_32244);
}
} else {
}


var G__32246 = seq__32075_32238;
var G__32247 = chunk__32076_32239;
var G__32248 = count__32077_32240;
var G__32249 = (i__32078_32241 + (1));
seq__32075_32238 = G__32246;
chunk__32076_32239 = G__32247;
count__32077_32240 = G__32248;
i__32078_32241 = G__32249;
continue;
} else {
var temp__5735__auto___32253__$1 = cljs.core.seq(seq__32075_32238);
if(temp__5735__auto___32253__$1){
var seq__32075_32255__$1 = temp__5735__auto___32253__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32075_32255__$1)){
var c__4556__auto___32256 = cljs.core.chunk_first(seq__32075_32255__$1);
var G__32257 = cljs.core.chunk_rest(seq__32075_32255__$1);
var G__32258 = c__4556__auto___32256;
var G__32259 = cljs.core.count(c__4556__auto___32256);
var G__32260 = (0);
seq__32075_32238 = G__32257;
chunk__32076_32239 = G__32258;
count__32077_32240 = G__32259;
i__32078_32241 = G__32260;
continue;
} else {
var vec__32088_32262 = cljs.core.first(seq__32075_32255__$1);
var k_32263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32088_32262,(0),null);
var v_32264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32088_32262,(1),null);
if((k_32263 instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),k_32263)){
(patu.events.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.events.dispatch.cljs$core$IFn$_invoke$arity$1(v_32264) : patu.events.dispatch.call(null,v_32264));
} else {
patu.events.data__GT_fn(k_32263,v_32264);
}
} else {
}


var G__32269 = cljs.core.next(seq__32075_32255__$1);
var G__32270 = null;
var G__32271 = (0);
var G__32272 = (0);
seq__32075_32238 = G__32269;
chunk__32076_32239 = G__32270;
count__32077_32240 = G__32271;
i__32078_32241 = G__32272;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__32273 = cljs.core.next(seq__31995__$1);
var G__32274 = null;
var G__32275 = (0);
var G__32276 = (0);
seq__31995 = G__32273;
chunk__31996 = G__32274;
count__31997 = G__32275;
i__31998 = G__32276;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return console.log(["No event handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)))].join(''));
}
});
patu.events.dispatch_n = (function patu$events$dispatch_n(data){
var seq__32091 = cljs.core.seq(data);
var chunk__32092 = null;
var count__32093 = (0);
var i__32094 = (0);
while(true){
if((i__32094 < count__32093)){
var props = chunk__32092.cljs$core$IIndexed$_nth$arity$2(null,i__32094);
patu.events.dispatch(props);


var G__32284 = seq__32091;
var G__32285 = chunk__32092;
var G__32286 = count__32093;
var G__32287 = (i__32094 + (1));
seq__32091 = G__32284;
chunk__32092 = G__32285;
count__32093 = G__32286;
i__32094 = G__32287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32091);
if(temp__5735__auto__){
var seq__32091__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32091__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32091__$1);
var G__32288 = cljs.core.chunk_rest(seq__32091__$1);
var G__32289 = c__4556__auto__;
var G__32290 = cljs.core.count(c__4556__auto__);
var G__32291 = (0);
seq__32091 = G__32288;
chunk__32092 = G__32289;
count__32093 = G__32290;
i__32094 = G__32291;
continue;
} else {
var props = cljs.core.first(seq__32091__$1);
patu.events.dispatch(props);


var G__32292 = cljs.core.next(seq__32091__$1);
var G__32293 = null;
var G__32294 = (0);
var G__32295 = (0);
seq__32091 = G__32292;
chunk__32092 = G__32293;
count__32093 = G__32294;
i__32094 = G__32295;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=patu.events.js.map
