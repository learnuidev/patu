goog.provide('app.kaboomv5.game.core');
goog.require('cljs.core');
goog.require('app.kaboomv5.app.core');
goog.require('app.kaboomv5.app.state');
goog.require('app.kaboomv5.game.state');
goog.require('app.kaboomv5.game.scene');
goog.require('app.kaboomv5.assets');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.audio');
goog.require('app.kaboomv5.gfx');
app.kaboomv5.game.core.init_BANG_ = (function app$kaboomv5$game$core$init_BANG_(config){
app.kaboomv5.app.core.init_BANG_(config);

app.kaboomv5.gfx.init_BANG_();

return app.kaboomv5.audio.init_BANG_();
});
app.kaboomv5.game.core.reg_scene = (function app$kaboomv5$game$core$reg_scene(id,cb){
if(cljs.core.not(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.game.state.scene_state),id)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.scene_state,cljs.core.assoc,id,app.kaboomv5.game.scene.create_scene(id,cb));
} else {
return null;
}
});
app.kaboomv5.game.core.reload = (function app$kaboomv5$game$core$reload(id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.game.state.scene_state),id);
if(cljs.core.truth_(temp__5735__auto__)){
var fresh_scene = temp__5735__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),fresh_scene);
} else {
return null;
}
});
app.kaboomv5.game.core.switch_scene = (function app$kaboomv5$game$core$switch_scene(id){
app.kaboomv5.game.core.reload(id);

console.log("LOADED!");

var temp__5733__auto__ = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
var G__26761 = cljs.core.deref(app.kaboomv5.game.state.game_state);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__26761) : handler.call(null,G__26761));
} else {
return null;
}
});
app.kaboomv5.game.core.cur_scene = (function app$kaboomv5$game$core$cur_scene(){
return new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state));
});
app.kaboomv5.game.core.play = (function app$kaboomv5$game$core$play(var_args){
var G__26764 = arguments.length;
switch (G__26764) {
case 1:
return app.kaboomv5.game.core.play.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.game.core.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.game.core.play.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.kaboomv5.game.core.play.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"volume","volume",1900330799),(1),new cljs.core.Keyword(null,"speed","speed",1257663751),(1),new cljs.core.Keyword(null,"detune","detune",316572245),(0),new cljs.core.Keyword(null,"seek","seek",758996602),(0)], null));
}));

(app.kaboomv5.game.core.play.cljs$core$IFn$_invoke$arity$2 = (function (id,config){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",1244211385),id], null));
if(cljs.core.truth_(temp__5733__auto__)){
var sound = temp__5733__auto__;
return app.kaboomv5.audio.play.cljs$core$IFn$_invoke$arity$2(sound,config);
} else {
return null;
}
}));

(app.kaboomv5.game.core.play.cljs$lang$maxFixedArity = 2);

app.kaboomv5.game.core.handle_events = (function app$kaboomv5$game$core$handle_events(){
var char_input = new cljs.core.Keyword(null,"char-input","char-input",-1820706445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(app.kaboomv5.game.core.cur_scene()));
if(cljs.core.seq(char_input)){
var seq__26769_26860 = cljs.core.seq(char_input);
var chunk__26770_26861 = null;
var count__26771_26862 = (0);
var i__26772_26863 = (0);
while(true){
if((i__26772_26863 < count__26771_26862)){
var char_26864 = chunk__26770_26861.cljs$core$IIndexed$_nth$arity$2(null,i__26772_26863);
var seq__26790_26865 = cljs.core.seq(app.kaboomv5.app.core.char_inputted());
var chunk__26791_26866 = null;
var count__26792_26867 = (0);
var i__26793_26868 = (0);
while(true){
if((i__26793_26868 < count__26792_26867)){
var c_26869 = chunk__26791_26866.cljs$core$IIndexed$_nth$arity$2(null,i__26793_26868);
var fexpr__26797_26870 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(char_26864);
(fexpr__26797_26870.cljs$core$IFn$_invoke$arity$1 ? fexpr__26797_26870.cljs$core$IFn$_invoke$arity$1(c_26869) : fexpr__26797_26870.call(null,c_26869));


var G__26871 = seq__26790_26865;
var G__26872 = chunk__26791_26866;
var G__26873 = count__26792_26867;
var G__26874 = (i__26793_26868 + (1));
seq__26790_26865 = G__26871;
chunk__26791_26866 = G__26872;
count__26792_26867 = G__26873;
i__26793_26868 = G__26874;
continue;
} else {
var temp__5735__auto___26875 = cljs.core.seq(seq__26790_26865);
if(temp__5735__auto___26875){
var seq__26790_26876__$1 = temp__5735__auto___26875;
if(cljs.core.chunked_seq_QMARK_(seq__26790_26876__$1)){
var c__4556__auto___26877 = cljs.core.chunk_first(seq__26790_26876__$1);
var G__26878 = cljs.core.chunk_rest(seq__26790_26876__$1);
var G__26879 = c__4556__auto___26877;
var G__26880 = cljs.core.count(c__4556__auto___26877);
var G__26881 = (0);
seq__26790_26865 = G__26878;
chunk__26791_26866 = G__26879;
count__26792_26867 = G__26880;
i__26793_26868 = G__26881;
continue;
} else {
var c_26882 = cljs.core.first(seq__26790_26876__$1);
var fexpr__26798_26883 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(char_26864);
(fexpr__26798_26883.cljs$core$IFn$_invoke$arity$1 ? fexpr__26798_26883.cljs$core$IFn$_invoke$arity$1(c_26882) : fexpr__26798_26883.call(null,c_26882));


var G__26884 = cljs.core.next(seq__26790_26876__$1);
var G__26885 = null;
var G__26886 = (0);
var G__26887 = (0);
seq__26790_26865 = G__26884;
chunk__26791_26866 = G__26885;
count__26792_26867 = G__26886;
i__26793_26868 = G__26887;
continue;
}
} else {
}
}
break;
}


var G__26888 = seq__26769_26860;
var G__26889 = chunk__26770_26861;
var G__26890 = count__26771_26862;
var G__26891 = (i__26772_26863 + (1));
seq__26769_26860 = G__26888;
chunk__26770_26861 = G__26889;
count__26771_26862 = G__26890;
i__26772_26863 = G__26891;
continue;
} else {
var temp__5735__auto___26892 = cljs.core.seq(seq__26769_26860);
if(temp__5735__auto___26892){
var seq__26769_26893__$1 = temp__5735__auto___26892;
if(cljs.core.chunked_seq_QMARK_(seq__26769_26893__$1)){
var c__4556__auto___26894 = cljs.core.chunk_first(seq__26769_26893__$1);
var G__26895 = cljs.core.chunk_rest(seq__26769_26893__$1);
var G__26896 = c__4556__auto___26894;
var G__26897 = cljs.core.count(c__4556__auto___26894);
var G__26898 = (0);
seq__26769_26860 = G__26895;
chunk__26770_26861 = G__26896;
count__26771_26862 = G__26897;
i__26772_26863 = G__26898;
continue;
} else {
var char_26899 = cljs.core.first(seq__26769_26893__$1);
var seq__26799_26900 = cljs.core.seq(app.kaboomv5.app.core.char_inputted());
var chunk__26800_26901 = null;
var count__26801_26902 = (0);
var i__26802_26903 = (0);
while(true){
if((i__26802_26903 < count__26801_26902)){
var c_26904 = chunk__26800_26901.cljs$core$IIndexed$_nth$arity$2(null,i__26802_26903);
var fexpr__26805_26905 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(char_26899);
(fexpr__26805_26905.cljs$core$IFn$_invoke$arity$1 ? fexpr__26805_26905.cljs$core$IFn$_invoke$arity$1(c_26904) : fexpr__26805_26905.call(null,c_26904));


var G__26906 = seq__26799_26900;
var G__26907 = chunk__26800_26901;
var G__26908 = count__26801_26902;
var G__26909 = (i__26802_26903 + (1));
seq__26799_26900 = G__26906;
chunk__26800_26901 = G__26907;
count__26801_26902 = G__26908;
i__26802_26903 = G__26909;
continue;
} else {
var temp__5735__auto___26910__$1 = cljs.core.seq(seq__26799_26900);
if(temp__5735__auto___26910__$1){
var seq__26799_26911__$1 = temp__5735__auto___26910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26799_26911__$1)){
var c__4556__auto___26912 = cljs.core.chunk_first(seq__26799_26911__$1);
var G__26913 = cljs.core.chunk_rest(seq__26799_26911__$1);
var G__26914 = c__4556__auto___26912;
var G__26915 = cljs.core.count(c__4556__auto___26912);
var G__26916 = (0);
seq__26799_26900 = G__26913;
chunk__26800_26901 = G__26914;
count__26801_26902 = G__26915;
i__26802_26903 = G__26916;
continue;
} else {
var c_26917 = cljs.core.first(seq__26799_26911__$1);
var fexpr__26806_26918 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(char_26899);
(fexpr__26806_26918.cljs$core$IFn$_invoke$arity$1 ? fexpr__26806_26918.cljs$core$IFn$_invoke$arity$1(c_26917) : fexpr__26806_26918.call(null,c_26917));


var G__26919 = cljs.core.next(seq__26799_26911__$1);
var G__26920 = null;
var G__26921 = (0);
var G__26922 = (0);
seq__26799_26900 = G__26919;
chunk__26800_26901 = G__26920;
count__26801_26902 = G__26921;
i__26802_26903 = G__26922;
continue;
}
} else {
}
}
break;
}


var G__26923 = cljs.core.next(seq__26769_26893__$1);
var G__26924 = null;
var G__26925 = (0);
var G__26926 = (0);
seq__26769_26860 = G__26923;
chunk__26770_26861 = G__26924;
count__26771_26862 = G__26925;
i__26772_26863 = G__26926;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___26927 = cljs.core.seq(new cljs.core.Keyword(null,"key-press","key-press",850740112).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)))));
if(temp__5735__auto___26927){
var evts_26928 = temp__5735__auto___26927;
var seq__26807_26929 = cljs.core.seq(evts_26928);
var chunk__26808_26930 = null;
var count__26809_26931 = (0);
var i__26810_26932 = (0);
while(true){
if((i__26810_26932 < count__26809_26931)){
var evt_26933 = chunk__26808_26930.cljs$core$IIndexed$_nth$arity$2(null,i__26810_26932);
if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(evt_26933))){
var fexpr__26813_26934 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26933);
(fexpr__26813_26934.cljs$core$IFn$_invoke$arity$0 ? fexpr__26813_26934.cljs$core$IFn$_invoke$arity$0() : fexpr__26813_26934.call(null));
} else {
}


var G__26935 = seq__26807_26929;
var G__26936 = chunk__26808_26930;
var G__26937 = count__26809_26931;
var G__26938 = (i__26810_26932 + (1));
seq__26807_26929 = G__26935;
chunk__26808_26930 = G__26936;
count__26809_26931 = G__26937;
i__26810_26932 = G__26938;
continue;
} else {
var temp__5735__auto___26939__$1 = cljs.core.seq(seq__26807_26929);
if(temp__5735__auto___26939__$1){
var seq__26807_26940__$1 = temp__5735__auto___26939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26807_26940__$1)){
var c__4556__auto___26941 = cljs.core.chunk_first(seq__26807_26940__$1);
var G__26942 = cljs.core.chunk_rest(seq__26807_26940__$1);
var G__26943 = c__4556__auto___26941;
var G__26944 = cljs.core.count(c__4556__auto___26941);
var G__26945 = (0);
seq__26807_26929 = G__26942;
chunk__26808_26930 = G__26943;
count__26809_26931 = G__26944;
i__26810_26932 = G__26945;
continue;
} else {
var evt_26946 = cljs.core.first(seq__26807_26940__$1);
if(app.kaboomv5.app.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(evt_26946))){
var fexpr__26814_26947 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26946);
(fexpr__26814_26947.cljs$core$IFn$_invoke$arity$0 ? fexpr__26814_26947.cljs$core$IFn$_invoke$arity$0() : fexpr__26814_26947.call(null));
} else {
}


var G__26948 = cljs.core.next(seq__26807_26940__$1);
var G__26949 = null;
var G__26950 = (0);
var G__26951 = (0);
seq__26807_26929 = G__26948;
chunk__26808_26930 = G__26949;
count__26809_26931 = G__26950;
i__26810_26932 = G__26951;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___26952 = cljs.core.seq(new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)))));
if(temp__5735__auto___26952){
var evts_26953 = temp__5735__auto___26952;
var seq__26815_26954 = cljs.core.seq(evts_26953);
var chunk__26816_26955 = null;
var count__26817_26956 = (0);
var i__26818_26957 = (0);
while(true){
if((i__26818_26957 < count__26817_26956)){
var evt_26958 = chunk__26816_26955.cljs$core$IIndexed$_nth$arity$2(null,i__26818_26957);
if(app.kaboomv5.app.core.mouse_down_QMARK_()){
var fexpr__26821_26959 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26958);
(fexpr__26821_26959.cljs$core$IFn$_invoke$arity$0 ? fexpr__26821_26959.cljs$core$IFn$_invoke$arity$0() : fexpr__26821_26959.call(null));
} else {
}


var G__26960 = seq__26815_26954;
var G__26961 = chunk__26816_26955;
var G__26962 = count__26817_26956;
var G__26963 = (i__26818_26957 + (1));
seq__26815_26954 = G__26960;
chunk__26816_26955 = G__26961;
count__26817_26956 = G__26962;
i__26818_26957 = G__26963;
continue;
} else {
var temp__5735__auto___26964__$1 = cljs.core.seq(seq__26815_26954);
if(temp__5735__auto___26964__$1){
var seq__26815_26965__$1 = temp__5735__auto___26964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26815_26965__$1)){
var c__4556__auto___26966 = cljs.core.chunk_first(seq__26815_26965__$1);
var G__26967 = cljs.core.chunk_rest(seq__26815_26965__$1);
var G__26968 = c__4556__auto___26966;
var G__26969 = cljs.core.count(c__4556__auto___26966);
var G__26970 = (0);
seq__26815_26954 = G__26967;
chunk__26816_26955 = G__26968;
count__26817_26956 = G__26969;
i__26818_26957 = G__26970;
continue;
} else {
var evt_26971 = cljs.core.first(seq__26815_26965__$1);
if(app.kaboomv5.app.core.mouse_down_QMARK_()){
var fexpr__26823_26972 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26971);
(fexpr__26823_26972.cljs$core$IFn$_invoke$arity$0 ? fexpr__26823_26972.cljs$core$IFn$_invoke$arity$0() : fexpr__26823_26972.call(null));
} else {
}


var G__26973 = cljs.core.next(seq__26815_26965__$1);
var G__26974 = null;
var G__26975 = (0);
var G__26976 = (0);
seq__26815_26954 = G__26973;
chunk__26816_26955 = G__26974;
count__26817_26956 = G__26975;
i__26818_26957 = G__26976;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___26977 = cljs.core.seq(new cljs.core.Keyword(null,"mouse-click","mouse-click",1256722350).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)))));
if(temp__5735__auto___26977){
var evts_26978 = temp__5735__auto___26977;
var seq__26824_26979 = cljs.core.seq(evts_26978);
var chunk__26825_26980 = null;
var count__26826_26981 = (0);
var i__26827_26982 = (0);
while(true){
if((i__26827_26982 < count__26826_26981)){
var evt_26983 = chunk__26825_26980.cljs$core$IIndexed$_nth$arity$2(null,i__26827_26982);
if(app.kaboomv5.app.core.mouse_clicked_QMARK_()){
var fexpr__26830_26984 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26983);
(fexpr__26830_26984.cljs$core$IFn$_invoke$arity$0 ? fexpr__26830_26984.cljs$core$IFn$_invoke$arity$0() : fexpr__26830_26984.call(null));
} else {
}


var G__26985 = seq__26824_26979;
var G__26986 = chunk__26825_26980;
var G__26987 = count__26826_26981;
var G__26988 = (i__26827_26982 + (1));
seq__26824_26979 = G__26985;
chunk__26825_26980 = G__26986;
count__26826_26981 = G__26987;
i__26827_26982 = G__26988;
continue;
} else {
var temp__5735__auto___26989__$1 = cljs.core.seq(seq__26824_26979);
if(temp__5735__auto___26989__$1){
var seq__26824_26990__$1 = temp__5735__auto___26989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26824_26990__$1)){
var c__4556__auto___26991 = cljs.core.chunk_first(seq__26824_26990__$1);
var G__26992 = cljs.core.chunk_rest(seq__26824_26990__$1);
var G__26993 = c__4556__auto___26991;
var G__26994 = cljs.core.count(c__4556__auto___26991);
var G__26995 = (0);
seq__26824_26979 = G__26992;
chunk__26825_26980 = G__26993;
count__26826_26981 = G__26994;
i__26827_26982 = G__26995;
continue;
} else {
var evt_26996 = cljs.core.first(seq__26824_26990__$1);
if(app.kaboomv5.app.core.mouse_clicked_QMARK_()){
var fexpr__26831_26997 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt_26996);
(fexpr__26831_26997.cljs$core$IFn$_invoke$arity$0 ? fexpr__26831_26997.cljs$core$IFn$_invoke$arity$0() : fexpr__26831_26997.call(null));
} else {
}


var G__26998 = cljs.core.next(seq__26824_26990__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26824_26979 = G__26998;
chunk__26825_26980 = G__26999;
count__26826_26981 = G__27000;
i__26827_26982 = G__27001;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"mouse-release","mouse-release",-1152069889).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)))));
if(temp__5735__auto__){
var evts = temp__5735__auto__;
var seq__26832 = cljs.core.seq(evts);
var chunk__26833 = null;
var count__26834 = (0);
var i__26835 = (0);
while(true){
if((i__26835 < count__26834)){
var evt = chunk__26833.cljs$core$IIndexed$_nth$arity$2(null,i__26835);
if(app.kaboomv5.app.core.mouse_released_QMARK_()){
var fexpr__26838_27002 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt);
(fexpr__26838_27002.cljs$core$IFn$_invoke$arity$0 ? fexpr__26838_27002.cljs$core$IFn$_invoke$arity$0() : fexpr__26838_27002.call(null));
} else {
}


var G__27003 = seq__26832;
var G__27004 = chunk__26833;
var G__27005 = count__26834;
var G__27006 = (i__26835 + (1));
seq__26832 = G__27003;
chunk__26833 = G__27004;
count__26834 = G__27005;
i__26835 = G__27006;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__26832);
if(temp__5735__auto____$1){
var seq__26832__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26832__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26832__$1);
var G__27007 = cljs.core.chunk_rest(seq__26832__$1);
var G__27008 = c__4556__auto__;
var G__27009 = cljs.core.count(c__4556__auto__);
var G__27010 = (0);
seq__26832 = G__27007;
chunk__26833 = G__27008;
count__26834 = G__27009;
i__26835 = G__27010;
continue;
} else {
var evt = cljs.core.first(seq__26832__$1);
if(app.kaboomv5.app.core.mouse_released_QMARK_()){
var fexpr__26839_27011 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(evt);
(fexpr__26839_27011.cljs$core$IFn$_invoke$arity$0 ? fexpr__26839_27011.cljs$core$IFn$_invoke$arity$0() : fexpr__26839_27011.call(null));
} else {
}


var G__27012 = cljs.core.next(seq__26832__$1);
var G__27013 = null;
var G__27014 = (0);
var G__27015 = (0);
seq__26832 = G__27012;
chunk__26833 = G__27013;
count__26834 = G__27014;
i__26835 = G__27015;
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
app.kaboomv5.game.core.game_frame = (function app$kaboomv5$game$core$game_frame(var_args){
var G__26841 = arguments.length;
switch (G__26841) {
case 0:
return app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$1(false);
}));

(app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$1 = (function (ignore_pause_QMARK_){
if(cljs.core.seq(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state)))){
if(cljs.core.truth_(ignore_pause_QMARK_)){
var seq__26842 = cljs.core.seq(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state))));
var chunk__26843 = null;
var count__26844 = (0);
var i__26845 = (0);
while(true){
if((i__26845 < count__26844)){
var handler = chunk__26843.cljs$core$IIndexed$_nth$arity$2(null,i__26845);
(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));


var G__27017 = seq__26842;
var G__27018 = chunk__26843;
var G__27019 = count__26844;
var G__27020 = (i__26845 + (1));
seq__26842 = G__27017;
chunk__26843 = G__27018;
count__26844 = G__27019;
i__26845 = G__27020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26842);
if(temp__5735__auto__){
var seq__26842__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26842__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26842__$1);
var G__27021 = cljs.core.chunk_rest(seq__26842__$1);
var G__27022 = c__4556__auto__;
var G__27023 = cljs.core.count(c__4556__auto__);
var G__27024 = (0);
seq__26842 = G__27021;
chunk__26843 = G__27022;
count__26844 = G__27023;
i__26845 = G__27024;
continue;
} else {
var handler = cljs.core.first(seq__26842__$1);
(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));


var G__27025 = cljs.core.next(seq__26842__$1);
var G__27026 = null;
var G__27027 = (0);
var G__27028 = (0);
seq__26842 = G__27025;
chunk__26843 = G__27026;
count__26844 = G__27027;
i__26845 = G__27028;
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
} else {
return null;
}
}));

(app.kaboomv5.game.core.game_frame.cljs$lang$maxFixedArity = 1);

app.kaboomv5.game.core.handle_game = (function app$kaboomv5$game$core$handle_game(){
try{if(cljs.core.seq(app.kaboomv5.game.core.cur_scene())){
app.kaboomv5.game.core.handle_events();

return app.kaboomv5.game.core.game_frame.cljs$core$IFn$_invoke$arity$0();
} else {
throw (new Error("Scene not found"));
}
}catch (e26846){if((e26846 instanceof Error)){
var err = e26846;
console.error(err);

return app.kaboomv5.app.core.quit();
} else {
throw e26846;

}
}});
app.kaboomv5.game.core.draw_progress = (function app$kaboomv5$game$core$draw_progress(){
var w = (app.kaboomv5.gfx.width() / (2));
var h = ((24) / app.kaboomv5.gfx.scale());
var pos = (function (){var G__26850 = (function (){var G__26852 = app.kaboomv5.gfx.center();
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1(G__26852) : app.kaboomv5.math.core.vec2.call(null,G__26852));
})();
var G__26851 = (function (){var G__26853 = (w / (2));
var G__26854 = (h / (2));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26853,G__26854) : app.kaboomv5.math.core.vec2.call(null,G__26853,G__26854));
})();
return (app.kaboomv5.math.core.subtract.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.subtract.cljs$core$IFn$_invoke$arity$2(G__26850,G__26851) : app.kaboomv5.math.core.subtract.call(null,G__26850,G__26851));
})();
app.kaboomv5.gfx.draw_rect(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"width","width",-384071477),app.kaboomv5.gfx.width(),new cljs.core.Keyword(null,"height","height",1025178622),app.kaboomv5.gfx.height(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__26855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
return (app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$1(G__26855) : app.kaboomv5.math.core.color.call(null,G__26855));
})()], null));

app.kaboomv5.gfx.draw_rect_stroke(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"width","width",-384071477),app.kaboomv5.gfx.width(),new cljs.core.Keyword(null,"height","height",1025178622),app.kaboomv5.gfx.height(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__26856 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
return (app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$1(G__26856) : app.kaboomv5.math.core.color.call(null,G__26856));
})()], null));

return app.kaboomv5.gfx.draw_rect(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"width","width",-384071477),app.kaboomv5.gfx.width(),new cljs.core.Keyword(null,"height","height",1025178622),app.kaboomv5.gfx.height()], null));
});
app.kaboomv5.game.core.handle_next_scene = (function app$kaboomv5$game$core$handle_next_scene(){
var temp__5735__auto__ = new cljs.core.Keyword(null,"next-scene","next-scene",1810391179).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state));
if(cljs.core.truth_(temp__5735__auto__)){
var nextid = temp__5735__auto__;
app.kaboomv5.game.core.switch_scene(nextid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.kaboomv5.game.state.game_state,cljs.core.dissoc,new cljs.core.Keyword(null,"next-scene","next-scene",1810391179));
} else {
return null;
}
});
app.kaboomv5.game.core.handle_load = (function app$kaboomv5$game$core$handle_load(sid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),app.kaboomv5.assets.load_progress())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);

return app.kaboomv5.game.core.switch_scene(sid);
} else {
return app.kaboomv5.game.core.draw_progress();
}
});
app.kaboomv5.game.core.start = (function app$kaboomv5$game$core$start(sid){
return app.kaboomv5.app.core.run((function (){
if(cljs.core.not(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)))){
return console.warn("Please run the kaboom/init! function first. You need to create a new webgl context first");
} else {
var id = new cljs.core.Keyword("program","id","program/id",-792212528).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state));
var loaded_QMARK_ = new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.game.state.game_state));
app.kaboomv5.gfx.frame_start(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));

if(cljs.core.truth_(loaded_QMARK_)){
} else {
app.kaboomv5.game.core.handle_load(sid);
}

if(cljs.core.truth_(loaded_QMARK_)){
app.kaboomv5.game.core.handle_game();

app.kaboomv5.game.core.handle_next_scene();
} else {
}

return app.kaboomv5.gfx.frame_end(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),id);
}
}));
});
app.kaboomv5.game.core.action = (function app$kaboomv5$game$core$action(cb){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"action","action",-811238024)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
app.kaboomv5.game.core.key_press = (function app$kaboomv5$game$core$key_press(id,cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"key-press","key-press",850740112)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.key_press_rep = (function app$kaboomv5$game$core$key_press_rep(id,cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"key-press-rep","key-press-rep",1203763910)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.key_release = (function app$kaboomv5$game$core$key_release(id,cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"key-release","key-release",-401286743)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.key_down = (function app$kaboomv5$game$core$key_down(id,cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"key-down","key-down",998681515)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.char_input = (function app$kaboomv5$game$core$char_input(cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"char-input","char-input",-1820706445)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.mouse_down = (function app$kaboomv5$game$core$mouse_down(cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.mouse_click = (function app$kaboomv5$game$core$mouse_click(cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"mouse-click","mouse-click",1256722350)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.mouse_release = (function app$kaboomv5$game$core$mouse_release(cb){
console.log("CALLED");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.game.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-scene","cur-scene",563574439),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"mouse-release","mouse-release",-1152069889)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb","cb",589947841),cb], null)], 0));
});
app.kaboomv5.game.core.add_level = (function app$kaboomv5$game$core$add_level(map,config){
return null;
});
app.kaboomv5.game.core.call_comp = (function app$kaboomv5$game$core$call_comp(comp,attr){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp,attr);
if(cljs.core.truth_(temp__5735__auto__)){
var func = temp__5735__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(func),Function)){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(comp) : func.call(null,comp));
} else {
return func;
}
} else {
return null;
}
});
app.kaboomv5.game.core.builder = (function app$kaboomv5$game$core$builder(func){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
});
});
app.kaboomv5.game.core.reg_comp = (function app$kaboomv5$game$core$reg_comp(id,req,builder_fn){
var builder = (function() { 
var G__27029__delegate = function (args){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder_fn,args),new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require","require",-468001333),req], 0));
};
var G__27029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27030__i = 0, G__27030__a = new Array(arguments.length -  0);
while (G__27030__i < G__27030__a.length) {G__27030__a[G__27030__i] = arguments[G__27030__i + 0]; ++G__27030__i;}
  args = new cljs.core.IndexedSeq(G__27030__a,0,null);
} 
return G__27029__delegate.call(this,args);};
G__27029.cljs$lang$maxFixedArity = 0;
G__27029.cljs$lang$applyTo = (function (arglist__27031){
var args = cljs.core.seq(arglist__27031);
return G__27029__delegate(args);
});
G__27029.cljs$core$IFn$_invoke$arity$variadic = G__27029__delegate;
return G__27029;
})()
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.game.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),builder);

return builder;
});
app.kaboomv5.game.core.pos = app.kaboomv5.game.core.reg_comp(new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.PersistentVector.EMPTY,(function() { 
var G__27032__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.math.core.vec2,args)], null);
};
var G__27032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27033__i = 0, G__27033__a = new Array(arguments.length -  0);
while (G__27033__i < G__27033__a.length) {G__27033__a[G__27033__i] = arguments[G__27033__i + 0]; ++G__27033__i;}
  args = new cljs.core.IndexedSeq(G__27033__a,0,null);
} 
return G__27032__delegate.call(this,args);};
G__27032.cljs$lang$maxFixedArity = 0;
G__27032.cljs$lang$applyTo = (function (arglist__27034){
var args = cljs.core.seq(arglist__27034);
return G__27032__delegate(args);
});
G__27032.cljs$core$IFn$_invoke$arity$variadic = G__27032__delegate;
return G__27032;
})()
);
app.kaboomv5.game.core.text_adder = (function app$kaboomv5$game$core$text_adder(comp){
return null;
});
app.kaboomv5.game.core.text_drawer = (function app$kaboomv5$game$core$text_drawer(comp){
return comp;
});
app.kaboomv5.game.core.text_handler = (function app$kaboomv5$game$core$text_handler(var_args){
var G__26858 = arguments.length;
switch (G__26858) {
case 2:
return app.kaboomv5.game.core.text_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.kaboomv5.game.core.text_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.game.core.text_handler.cljs$core$IFn$_invoke$arity$2 = (function (tex,tsize){
return app.kaboomv5.game.core.text_handler.cljs$core$IFn$_invoke$arity$3(tex,tsize,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.kaboomv5.game.core.text_handler.cljs$core$IFn$_invoke$arity$3 = (function (tex,tsize,config){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text","text",-1790561697),tex,new cljs.core.Keyword(null,"text-size","text-size",-945618309),tsize,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"add","add",235287739),app.kaboomv5.game.core.text_adder,new cljs.core.Keyword(null,"draw","draw",1358331674),app.kaboomv5.game.core.text_drawer], null);
}));

(app.kaboomv5.game.core.text_handler.cljs$lang$maxFixedArity = 3);

app.kaboomv5.game.core.text = app.kaboomv5.game.core.reg_comp(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentVector.EMPTY,app.kaboomv5.game.core.text_handler);
app.kaboomv5.game.core.ex_tex = app.kaboomv5.game.core.text("hello world",(8));

//# sourceMappingURL=app.kaboomv5.game.core.js.map
