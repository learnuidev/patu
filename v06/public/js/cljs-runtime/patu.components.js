goog.provide('patu.components');
goog.require('cljs.core');
goog.require('patu.events');
goog.require('patu.state');
patu.components.reg_comp = (function patu$components$reg_comp(var_args){
var G__38265 = arguments.length;
switch (G__38265) {
case 1:
return patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patu.components.reg_comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1 = (function (data){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).reg_comp(cljs.core.clj__GT_js(data));
}));

(patu.components.reg_comp.cljs$core$IFn$_invoke$arity$2 = (function (id,data){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).reg_comp(cljs.core.name(id),cljs.core.clj__GT_js(data));
}));

(patu.components.reg_comp.cljs$lang$maxFixedArity = 2);

patu.components.reg_comp_n = (function patu$components$reg_comp_n(datas){
var seq__38266 = cljs.core.seq(datas);
var chunk__38267 = null;
var count__38268 = (0);
var i__38269 = (0);
while(true){
if((i__38269 < count__38268)){
var data = chunk__38267.cljs$core$IIndexed$_nth$arity$2(null,i__38269);
if(cljs.core.map_QMARK_(data)){
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__38276_38291 = data;
var id_38292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38276_38291,(0),null);
var props_38293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38276_38291,(1),null);
if((id_38292 instanceof cljs.core.Keyword)){
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$2(id_38292,props_38293);
} else {
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__38294 = seq__38266;
var G__38295 = chunk__38267;
var G__38296 = count__38268;
var G__38297 = (i__38269 + (1));
seq__38266 = G__38294;
chunk__38267 = G__38295;
count__38268 = G__38296;
i__38269 = G__38297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38266);
if(temp__5735__auto__){
var seq__38266__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38266__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38266__$1);
var G__38298 = cljs.core.chunk_rest(seq__38266__$1);
var G__38299 = c__4556__auto__;
var G__38300 = cljs.core.count(c__4556__auto__);
var G__38301 = (0);
seq__38266 = G__38298;
chunk__38267 = G__38299;
count__38268 = G__38300;
i__38269 = G__38301;
continue;
} else {
var data = cljs.core.first(seq__38266__$1);
if(cljs.core.map_QMARK_(data)){
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__38279_38302 = data;
var id_38303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279_38302,(0),null);
var props_38304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279_38302,(1),null);
if((id_38303 instanceof cljs.core.Keyword)){
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$2(id_38303,props_38304);
} else {
patu.components.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__38305 = cljs.core.next(seq__38266__$1);
var G__38306 = null;
var G__38307 = (0);
var G__38308 = (0);
seq__38266 = G__38305;
chunk__38267 = G__38306;
count__38268 = G__38307;
i__38269 = G__38308;
continue;
}
} else {
return null;
}
}
break;
}
});
patu.components.get_comp = (function patu$components$get_comp(id){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patu.state.state)).get_comp(cljs.core.name(id));
});
patu.components.move_BANG_ = (function patu$components$move_BANG_(comp,p__38282){
var vec__38283 = p__38282;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38283,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38283,(1),null);
return comp.move(x,y);
});
patu.components.move = (function patu$components$move(comp,p__38286){
var vec__38287 = p__38286;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38287,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38287,(1),null);
return comp.move(x,y);
});
patu.components.jump_BANG_ = (function patu$components$jump_BANG_(comp,x){
return comp.jump(x);
});
patu.components.jump = (function patu$components$jump(comp,x){
return comp.jump(x);
});
patu.components.on = (function patu$components$on(comp,key,handler){
return comp.on(cljs.core.name(key),handler);
});
patu.components.cis = (function patu$components$cis(comp,tag){
return comp.is(cljs.core.name(tag));
});
patu.components.action = (function patu$components$action(comp,handler){
return comp.action(handler);
});
patu.components.scale_BANG_ = (function patu$components$scale_BANG_(comp,val){
return (comp.scale = val);
});
patu.components.flip_x = (function patu$components$flip_x(comp,val){
return comp.flipX(val);
});
patu.components.speed = (function patu$components$speed(comp){
return comp.speed;
});
patu.components.play = (function patu$components$play(comp,id){
return comp.play(cljs.core.name(id));
});
patu.components.grounded_QMARK_ = (function patu$components$grounded_QMARK_(comp){
return comp.grounded();
});
patu.components.cur_anim = (function patu$components$cur_anim(comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(comp.curAnim());
});
patu.components.cur_anim_QMARK_ = (function patu$components$cur_anim_QMARK_(comp,anim){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(patu.components.cur_anim(comp),anim);
});
patu.components.close_QMARK_ = (function patu$components$close_QMARK_(dis_a,dis_b){
return ((((100) > Math.abs((dis_a.pos.y - dis_b.pos.y)))) && (((100) > Math.abs((dis_a.pos.x - dis_b.pos.x)))));
});
patu.components.ahead_QMARK_ = (function patu$components$ahead_QMARK_(comp,target){
return (comp.pos.x > target.pos.x);
});
patu.components.behind_QMARK_ = (function patu$components$behind_QMARK_(comp,target){
return (comp.pos.x < target.pos.x);
});
patu.components.top_QMARK_ = (function patu$components$top_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});
patu.components.bottom_QMARK_ = (function patu$components$bottom_QMARK_(comp,target){
return (comp.pos.y < target.pos.y);
});

//# sourceMappingURL=patu.components.js.map
