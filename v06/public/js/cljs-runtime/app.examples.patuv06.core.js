goog.provide('app.examples.patuv06.core');
goog.require('cljs.core');
app.examples.patuv06.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null));
app.examples.patuv06.core.reg_comp = (function app$examples$patuv06$core$reg_comp(var_args){
var G__39680 = arguments.length;
switch (G__39680) {
case 1:
return app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1 = (function (data){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).reg_comp(cljs.core.clj__GT_js(data));
}));

(app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$2 = (function (id,data){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).reg_comp(cljs.core.name(id),cljs.core.clj__GT_js(data));
}));

(app.examples.patuv06.core.reg_comp.cljs$lang$maxFixedArity = 2);

app.examples.patuv06.core.reg_comp_n = (function app$examples$patuv06$core$reg_comp_n(datas){
var seq__39681 = cljs.core.seq(datas);
var chunk__39682 = null;
var count__39683 = (0);
var i__39684 = (0);
while(true){
if((i__39684 < count__39683)){
var data = chunk__39682.cljs$core$IIndexed$_nth$arity$2(null,i__39684);
if(cljs.core.map_QMARK_(data)){
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__39691_39836 = data;
var id_39837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39691_39836,(0),null);
var props_39838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39691_39836,(1),null);
if((id_39837 instanceof cljs.core.Keyword)){
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$2(id_39837,props_39838);
} else {
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__39843 = seq__39681;
var G__39844 = chunk__39682;
var G__39845 = count__39683;
var G__39846 = (i__39684 + (1));
seq__39681 = G__39843;
chunk__39682 = G__39844;
count__39683 = G__39845;
i__39684 = G__39846;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39681);
if(temp__5735__auto__){
var seq__39681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39681__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39681__$1);
var G__39847 = cljs.core.chunk_rest(seq__39681__$1);
var G__39848 = c__4556__auto__;
var G__39849 = cljs.core.count(c__4556__auto__);
var G__39850 = (0);
seq__39681 = G__39847;
chunk__39682 = G__39848;
count__39683 = G__39849;
i__39684 = G__39850;
continue;
} else {
var data = cljs.core.first(seq__39681__$1);
if(cljs.core.map_QMARK_(data)){
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
} else {
}

var vec__39694_39851 = data;
var id_39852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39694_39851,(0),null);
var props_39853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39694_39851,(1),null);
if((id_39852 instanceof cljs.core.Keyword)){
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$2(id_39852,props_39853);
} else {
app.examples.patuv06.core.reg_comp.cljs$core$IFn$_invoke$arity$1(data);
}


var G__39854 = cljs.core.next(seq__39681__$1);
var G__39855 = null;
var G__39856 = (0);
var G__39857 = (0);
seq__39681 = G__39854;
chunk__39682 = G__39855;
count__39683 = G__39856;
i__39684 = G__39857;
continue;
}
} else {
return null;
}
}
break;
}
});
app.examples.patuv06.core.get_comp = (function app$examples$patuv06$core$get_comp(id){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).get_comp(cljs.core.name(id));
});
app.examples.patuv06.core.key_down = (function app$examples$patuv06$core$key_down(dir,data){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Function,cljs.core.type(data))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).keyDown(cljs.core.name(dir),data);
} else {
var handler = (function (comp){
var seq__39697 = cljs.core.seq(data);
var chunk__39698 = null;
var count__39699 = (0);
var i__39700 = (0);
while(true){
if((i__39700 < count__39699)){
var vec__39739 = chunk__39698.cljs$core$IIndexed$_nth$arity$2(null,i__39700);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39739,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39739,(1),null);
var temp__5735__auto___39858 = app.examples.patuv06.core.get_comp(cid);
if(cljs.core.truth_(temp__5735__auto___39858)){
var comp_39859__$1 = temp__5735__auto___39858;
var seq__39742_39860 = cljs.core.seq(props);
var chunk__39743_39861 = null;
var count__39744_39862 = (0);
var i__39745_39863 = (0);
while(true){
if((i__39745_39863 < count__39744_39862)){
var vec__39752_39864 = chunk__39743_39861.cljs$core$IIndexed$_nth$arity$2(null,i__39745_39863);
var k_39865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_39864,(0),null);
var v_39866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_39864,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39865,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_39859__$1.pos.x = (comp_39859__$1.pos.x + v_39866));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39865,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_39859__$1.pos.y = (comp_39859__$1.pos.y + v_39866));
} else {
}


var G__39867 = seq__39742_39860;
var G__39868 = chunk__39743_39861;
var G__39869 = count__39744_39862;
var G__39870 = (i__39745_39863 + (1));
seq__39742_39860 = G__39867;
chunk__39743_39861 = G__39868;
count__39744_39862 = G__39869;
i__39745_39863 = G__39870;
continue;
} else {
var temp__5735__auto___39871__$1 = cljs.core.seq(seq__39742_39860);
if(temp__5735__auto___39871__$1){
var seq__39742_39872__$1 = temp__5735__auto___39871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39742_39872__$1)){
var c__4556__auto___39873 = cljs.core.chunk_first(seq__39742_39872__$1);
var G__39874 = cljs.core.chunk_rest(seq__39742_39872__$1);
var G__39875 = c__4556__auto___39873;
var G__39876 = cljs.core.count(c__4556__auto___39873);
var G__39877 = (0);
seq__39742_39860 = G__39874;
chunk__39743_39861 = G__39875;
count__39744_39862 = G__39876;
i__39745_39863 = G__39877;
continue;
} else {
var vec__39755_39878 = cljs.core.first(seq__39742_39872__$1);
var k_39879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39755_39878,(0),null);
var v_39880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39755_39878,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39879,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_39859__$1.pos.x = (comp_39859__$1.pos.x + v_39880));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39879,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_39859__$1.pos.y = (comp_39859__$1.pos.y + v_39880));
} else {
}


var G__39881 = cljs.core.next(seq__39742_39872__$1);
var G__39882 = null;
var G__39883 = (0);
var G__39884 = (0);
seq__39742_39860 = G__39881;
chunk__39743_39861 = G__39882;
count__39744_39862 = G__39883;
i__39745_39863 = G__39884;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__39885 = seq__39697;
var G__39886 = chunk__39698;
var G__39887 = count__39699;
var G__39888 = (i__39700 + (1));
seq__39697 = G__39885;
chunk__39698 = G__39886;
count__39699 = G__39887;
i__39700 = G__39888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39697);
if(temp__5735__auto__){
var seq__39697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39697__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39697__$1);
var G__39889 = cljs.core.chunk_rest(seq__39697__$1);
var G__39890 = c__4556__auto__;
var G__39891 = cljs.core.count(c__4556__auto__);
var G__39892 = (0);
seq__39697 = G__39889;
chunk__39698 = G__39890;
count__39699 = G__39891;
i__39700 = G__39892;
continue;
} else {
var vec__39758 = cljs.core.first(seq__39697__$1);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39758,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39758,(1),null);
var temp__5735__auto___39893__$1 = app.examples.patuv06.core.get_comp(cid);
if(cljs.core.truth_(temp__5735__auto___39893__$1)){
var comp_39894__$1 = temp__5735__auto___39893__$1;
var seq__39761_39895 = cljs.core.seq(props);
var chunk__39762_39896 = null;
var count__39763_39897 = (0);
var i__39764_39898 = (0);
while(true){
if((i__39764_39898 < count__39763_39897)){
var vec__39771_39899 = chunk__39762_39896.cljs$core$IIndexed$_nth$arity$2(null,i__39764_39898);
var k_39900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771_39899,(0),null);
var v_39901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771_39899,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39900,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_39894__$1.pos.x = (comp_39894__$1.pos.x + v_39901));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39900,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_39894__$1.pos.y = (comp_39894__$1.pos.y + v_39901));
} else {
}


var G__39902 = seq__39761_39895;
var G__39903 = chunk__39762_39896;
var G__39904 = count__39763_39897;
var G__39905 = (i__39764_39898 + (1));
seq__39761_39895 = G__39902;
chunk__39762_39896 = G__39903;
count__39763_39897 = G__39904;
i__39764_39898 = G__39905;
continue;
} else {
var temp__5735__auto___39906__$2 = cljs.core.seq(seq__39761_39895);
if(temp__5735__auto___39906__$2){
var seq__39761_39907__$1 = temp__5735__auto___39906__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39761_39907__$1)){
var c__4556__auto___39908 = cljs.core.chunk_first(seq__39761_39907__$1);
var G__39909 = cljs.core.chunk_rest(seq__39761_39907__$1);
var G__39910 = c__4556__auto___39908;
var G__39911 = cljs.core.count(c__4556__auto___39908);
var G__39912 = (0);
seq__39761_39895 = G__39909;
chunk__39762_39896 = G__39910;
count__39763_39897 = G__39911;
i__39764_39898 = G__39912;
continue;
} else {
var vec__39774_39913 = cljs.core.first(seq__39761_39907__$1);
var k_39914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774_39913,(0),null);
var v_39915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774_39913,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39914,new cljs.core.Keyword(null,"x","x",2099068185))){
(comp_39894__$1.pos.x = (comp_39894__$1.pos.x + v_39915));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_39914,new cljs.core.Keyword(null,"y","y",-1757859776))){
(comp_39894__$1.pos.y = (comp_39894__$1.pos.y + v_39915));
} else {
}


var G__39916 = cljs.core.next(seq__39761_39907__$1);
var G__39917 = null;
var G__39918 = (0);
var G__39919 = (0);
seq__39761_39895 = G__39916;
chunk__39762_39896 = G__39917;
count__39763_39897 = G__39918;
i__39764_39898 = G__39919;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__39920 = cljs.core.next(seq__39697__$1);
var G__39921 = null;
var G__39922 = (0);
var G__39923 = (0);
seq__39697 = G__39920;
chunk__39698 = G__39921;
count__39699 = G__39922;
i__39700 = G__39923;
continue;
}
} else {
return null;
}
}
break;
}
});
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).keyDown(cljs.core.name(dir),handler);
}
});
app.examples.patuv06.core.evts_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.examples.patuv06.core.reg_event = (function app$examples$patuv06$core$reg_event(id,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.patuv06.core.evts_store,cljs.core.assoc,id,handler);
});
app.examples.patuv06.core.dispatch = (function app$examples$patuv06$core$dispatch(props){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.examples.patuv06.core.evts_store),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(null,props) : handler.call(null,null,props));
} else {
return console.log(["No event handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,(0)))].join(''));
}
});
app.examples.patuv06.core.dispatch_n = (function app$examples$patuv06$core$dispatch_n(data){
var seq__39777 = cljs.core.seq(data);
var chunk__39778 = null;
var count__39779 = (0);
var i__39780 = (0);
while(true){
if((i__39780 < count__39779)){
var props = chunk__39778.cljs$core$IIndexed$_nth$arity$2(null,i__39780);
app.examples.patuv06.core.dispatch(props);


var G__39924 = seq__39777;
var G__39925 = chunk__39778;
var G__39926 = count__39779;
var G__39927 = (i__39780 + (1));
seq__39777 = G__39924;
chunk__39778 = G__39925;
count__39779 = G__39926;
i__39780 = G__39927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39777);
if(temp__5735__auto__){
var seq__39777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39777__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39777__$1);
var G__39928 = cljs.core.chunk_rest(seq__39777__$1);
var G__39929 = c__4556__auto__;
var G__39930 = cljs.core.count(c__4556__auto__);
var G__39931 = (0);
seq__39777 = G__39928;
chunk__39778 = G__39929;
count__39779 = G__39930;
i__39780 = G__39931;
continue;
} else {
var props = cljs.core.first(seq__39777__$1);
app.examples.patuv06.core.dispatch(props);


var G__39932 = cljs.core.next(seq__39777__$1);
var G__39933 = null;
var G__39934 = (0);
var G__39935 = (0);
seq__39777 = G__39932;
chunk__39778 = G__39933;
count__39779 = G__39934;
i__39780 = G__39935;
continue;
}
} else {
return null;
}
}
break;
}
});
app.examples.patuv06.core.action = (function app$examples$patuv06$core$action(id,handler){
var temp__5735__auto__ = app.examples.patuv06.core.get_comp(id);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
if(cljs.core.truth_(comp.action)){
return comp.action(handler);
} else {
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).action(cljs.core.name(id),handler);
}
} else {
return null;
}
});
app.examples.patuv06.core.reg_event(new cljs.core.Keyword(null,"action","action",-811238024),(function (_,p__39781){
var vec__39782 = p__39781;
var seq__39783 = cljs.core.seq(vec__39782);
var first__39784 = cljs.core.first(seq__39783);
var seq__39783__$1 = cljs.core.next(seq__39783);
var ___$1 = first__39784;
var comps = seq__39783__$1;
if((cljs.core.first(comps) instanceof cljs.core.Keyword)){
return app.examples.patuv06.core.action(cljs.core.first(comps),cljs.core.second(comps));
} else {
var seq__39785 = cljs.core.seq(comps);
var chunk__39786 = null;
var count__39787 = (0);
var i__39788 = (0);
while(true){
if((i__39788 < count__39787)){
var vec__39795 = chunk__39786.cljs$core$IIndexed$_nth$arity$2(null,i__39788);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39795,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39795,(1),null);
app.examples.patuv06.core.action(id,handler);


var G__39936 = seq__39785;
var G__39937 = chunk__39786;
var G__39938 = count__39787;
var G__39939 = (i__39788 + (1));
seq__39785 = G__39936;
chunk__39786 = G__39937;
count__39787 = G__39938;
i__39788 = G__39939;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39785);
if(temp__5735__auto__){
var seq__39785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39785__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39785__$1);
var G__39940 = cljs.core.chunk_rest(seq__39785__$1);
var G__39941 = c__4556__auto__;
var G__39942 = cljs.core.count(c__4556__auto__);
var G__39943 = (0);
seq__39785 = G__39940;
chunk__39786 = G__39941;
count__39787 = G__39942;
i__39788 = G__39943;
continue;
} else {
var vec__39798 = cljs.core.first(seq__39785__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39798,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39798,(1),null);
app.examples.patuv06.core.action(id,handler);


var G__39944 = cljs.core.next(seq__39785__$1);
var G__39945 = null;
var G__39946 = (0);
var G__39947 = (0);
seq__39785 = G__39944;
chunk__39786 = G__39945;
count__39787 = G__39946;
i__39788 = G__39947;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
app.examples.patuv06.core.reg_event(new cljs.core.Keyword(null,"key-down","key-down",998681515),(function (_,p__39801){
var vec__39802 = p__39801;
var seq__39803 = cljs.core.seq(vec__39802);
var first__39804 = cljs.core.first(seq__39803);
var seq__39803__$1 = cljs.core.next(seq__39803);
var ___$1 = first__39804;
var comps = seq__39803__$1;
var seq__39805 = cljs.core.seq(comps);
var chunk__39806 = null;
var count__39807 = (0);
var i__39808 = (0);
while(true){
if((i__39808 < count__39807)){
var vec__39815 = chunk__39806.cljs$core$IIndexed$_nth$arity$2(null,i__39808);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39815,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39815,(1),null);
app.examples.patuv06.core.key_down(dir,handler);


var G__39948 = seq__39805;
var G__39949 = chunk__39806;
var G__39950 = count__39807;
var G__39951 = (i__39808 + (1));
seq__39805 = G__39948;
chunk__39806 = G__39949;
count__39807 = G__39950;
i__39808 = G__39951;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39805);
if(temp__5735__auto__){
var seq__39805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39805__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39805__$1);
var G__39952 = cljs.core.chunk_rest(seq__39805__$1);
var G__39953 = c__4556__auto__;
var G__39954 = cljs.core.count(c__4556__auto__);
var G__39955 = (0);
seq__39805 = G__39952;
chunk__39806 = G__39953;
count__39807 = G__39954;
i__39808 = G__39955;
continue;
} else {
var vec__39818 = cljs.core.first(seq__39805__$1);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39818,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39818,(1),null);
app.examples.patuv06.core.key_down(dir,handler);


var G__39956 = cljs.core.next(seq__39805__$1);
var G__39957 = null;
var G__39958 = (0);
var G__39959 = (0);
seq__39805 = G__39956;
chunk__39806 = G__39957;
count__39807 = G__39958;
i__39808 = G__39959;
continue;
}
} else {
return null;
}
}
break;
}
}));
app.examples.patuv06.core.reg_event(new cljs.core.Keyword(null,"key-press","key-press",850740112),(function (_,p__39821){
var vec__39822 = p__39821;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39822,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39822,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39822,(2),null);
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).keyPress(cljs.core.name(id),handler);
}));
app.examples.patuv06.core.reg_event(new cljs.core.Keyword("comp","reg","comp/reg",1624858375),(function (_,p__39825){
var vec__39826 = p__39825;
var seq__39827 = cljs.core.seq(vec__39826);
var first__39828 = cljs.core.first(seq__39827);
var seq__39827__$1 = cljs.core.next(seq__39827);
var ___$1 = first__39828;
var args = seq__39827__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.examples.patuv06.core.reg_comp,args);
}));
app.examples.patuv06.core.reg_event(new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),(function (_,p__39829){
var vec__39830 = p__39829;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39830,(0),null);
var datas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39830,(1),null);
return app.examples.patuv06.core.reg_comp_n(datas);
}));
app.examples.patuv06.core.kaboom = (function app$examples$patuv06$core$kaboom(var_args){
var G__39834 = arguments.length;
switch (G__39834) {
case 0:
return app.examples.patuv06.core.kaboom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.examples.patuv06.core.kaboom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.examples.patuv06.core.kaboom.cljs$core$IFn$_invoke$arity$0 = (function (){
var game = app.examples.patuv06.core.kaboom.default((6));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.patuv06.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"k","k",-2146297393),game);

return game;
}));

(app.examples.patuv06.core.kaboom.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var game = module$kaboom$v06.default(cljs.core.clj__GT_js(opts));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.examples.patuv06.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"k","k",-2146297393),game);

return game;
}));

(app.examples.patuv06.core.kaboom.cljs$lang$maxFixedArity = 1);

app.examples.patuv06.core.load_root = (function app$examples$patuv06$core$load_root(val){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).loadRoot(val);
});
app.examples.patuv06.core.load_sprite = (function app$examples$patuv06$core$load_sprite(id,val){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.examples.patuv06.core.state)).loadSprite(cljs.core.name(id),val);
});

//# sourceMappingURL=app.examples.patuv06.core.js.map
