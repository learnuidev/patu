goog.provide('patu.examples.flappy');
goog.require('cljs.core');
goog.require('patu.core');
goog.require('patu.utils');
patu.examples.flappy.pipe_open = (80);
patu.examples.flappy.pipe_min_height = (16);
patu.examples.flappy.jump_force = (320);
patu.examples.flappy.speed = (120);
patu.examples.flappy.ceiling = (-60);
var G__38781_38851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kaboom","kaboom",-877494365),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("app"),new cljs.core.Keyword(null,"global","global",93595047),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], null)], null);
(patu.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__38781_38851) : patu.core.dispatch_sync.call(null,G__38781_38851));
var G__38782_38852 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("load","root","load/root",-432585447),"https://kaboomjs.com/pub/examples/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("load","sprite","load/sprite",186948886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),"img/bg.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"birdy","birdy",-2144249903),"img/birdy.png"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipe","pipe",336575849),"img/pipe.png"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("load","sound","load/sound",-2140369732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),"sounds/score.mp3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wooosh","wooosh",856885927),"sounds/wooosh.mp3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hit","hit",1909257382),"sounds/hit.mp3"], null)], null)], null)], null);
(patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__38782_38852) : patu.core.dispatch_n.call(null,G__38782_38852));
var G__38783_38853 = new cljs.core.Keyword("game","spawn-pipes","game/spawn-pipes",-1803559056);
var G__38784_38854 = (function (_,___$1){
var h1 = patu.core.randd(patu.examples.flappy.pipe_min_height,(patu.core.height() - (patu.examples.flappy.pipe_min_height + patu.examples.flappy.pipe_open)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patu.core.width(),h1], null)], null),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"botleft","botleft",638635014)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patu.core.width(),(h1 + patu.examples.flappy.pipe_open)], null)], null),new cljs.core.Keyword(null,"pipe","pipe",336575849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"passed","passed",-28165278),false], null)], null)], null)], null)], null);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38783_38853,G__38784_38854) : patu.core.reg_event.call(null,G__38783_38853,G__38784_38854));
var G__38785_38855 = new cljs.core.Keyword("pipe","set-passed","pipe/set-passed",539652150);
var G__38786_38856 = (function (_,p__38787){
var vec__38788 = p__38787;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38788,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38788,(1),null);
return patu.utils.jset_BANG_(pipe,new cljs.core.Keyword(null,"passed","passed",-28165278),true);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38785_38855,G__38786_38856) : patu.core.reg_event.call(null,G__38785_38855,G__38786_38856));
var G__38791_38857 = new cljs.core.Keyword("pipe","destroy","pipe/destroy",-958772903);
var G__38792_38858 = (function (_,p__38793){
var vec__38794 = p__38793;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(1),null);
return pipe.destroy();
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38791_38857,G__38792_38858) : patu.core.reg_event.call(null,G__38791_38857,G__38792_38858));
var G__38797_38859 = new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977);
var G__38798_38860 = (function (_,p__38799){
var vec__38800 = p__38799;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38800,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38800,(1),null);
return pipe.move(patu.core.neg(patu.examples.flappy.speed),(0));
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38797_38859,G__38798_38860) : patu.core.reg_event.call(null,G__38797_38859,G__38798_38860));
var G__38803_38861 = new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977);
var G__38804_38862 = (function (_,p__38805){
var vec__38806 = p__38805;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38806,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38806,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38806,(2),null);
var player = (function (){var G__38809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp","comp",1191953630),pid], null);
return (patu.core.sub.cljs$core$IFn$_invoke$arity$1 ? patu.core.sub.cljs$core$IFn$_invoke$arity$1(G__38809) : patu.core.sub.call(null,G__38809));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pipe.passed,false)) && (((patu.utils.jget_in(pipe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)) + pipe.width) <= patu.utils.jget_in(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("score","add","score/add",-1283329203)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipe","set-passed","pipe/set-passed",539652150),pipe], null)], null)], null);
} else {
return null;
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38803_38861,G__38804_38862) : patu.core.reg_event.call(null,G__38803_38861,G__38804_38862));
var G__38810_38863 = new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977);
var G__38811_38864 = (function (_,p__38812){
var vec__38813 = p__38812;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38813,(0),null);
var pipe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38813,(1),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38813,(2),null);
if((patu.utils.jget_in(pipe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)) < (patu.core.neg(patu.core.width()) / (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipe","destroy","pipe/destroy",-958772903),pipe], null)], null);
} else {
return null;
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38810_38863,G__38811_38864) : patu.core.reg_event.call(null,G__38810_38863,G__38811_38864));
var G__38816_38865 = new cljs.core.Keyword("score","add","score/add",-1283329203);
var G__38817_38866 = (function (_,___$1){
var score = (function (){var G__38818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp","comp",1191953630),new cljs.core.Keyword(null,"ui-score","ui-score",-791386141),new cljs.core.Keyword(null,"value","value",305978217)], null);
return (patu.core.sub.cljs$core$IFn$_invoke$arity$1 ? patu.core.sub.cljs$core$IFn$_invoke$arity$1(G__38818) : patu.core.sub.call(null,G__38818));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-score","ui-score",-791386141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),(score + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(score + (1))], null)], null)], null);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38816_38865,G__38817_38866) : patu.core.reg_event.call(null,G__38816_38865,G__38817_38866));
var G__38819_38867 = new cljs.core.Keyword("player","go-south","player/go-south",1152490161);
var G__38820_38868 = (function (_,p__38821){
var vec__38822 = p__38821;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null)], null);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38819_38867,G__38820_38868) : patu.core.reg_event.call(null,G__38819_38867,G__38820_38868));
var G__38825_38869 = new cljs.core.Keyword("comp","jump","comp/jump",-982251888);
var G__38826_38870 = (function (_,p__38827){
var vec__38828 = p__38827;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38828,(0),null);
var cid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38828,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"player","player",-97687400),patu.examples.flappy.jump_force], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("audio","play","audio/play",-470328828),new cljs.core.Keyword(null,"wooosh","wooosh",856885927)], null)], null)], null);
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38825_38869,G__38826_38870) : patu.core.reg_event.call(null,G__38825_38869,G__38826_38870));
var G__38831_38871 = new cljs.core.Keyword("player","check-ffall","player/check-ffall",981969998);
var G__38832_38872 = (function (_,p__38833){
var vec__38834 = p__38833;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38834,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38834,(1),null);
var pos_y = (function (){var G__38837 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp","comp",1191953630),id,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null);
return (patu.core.sub.cljs$core$IFn$_invoke$arity$1 ? patu.core.sub.cljs$core$IFn$_invoke$arity$1(G__38837) : patu.core.sub.call(null,G__38837));
})();
if((((pos_y > patu.core.height())) || ((pos_y <= patu.examples.flappy.ceiling)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go","go",-146946655),new cljs.core.Keyword(null,"lose","lose",-1493527476)], null)], null);
} else {
return null;
}
});
(patu.core.reg_event.cljs$core$IFn$_invoke$arity$2 ? patu.core.reg_event.cljs$core$IFn$_invoke$arity$2(G__38831_38871,G__38832_38872) : patu.core.reg_event.call(null,G__38831_38871,G__38832_38872));
patu.examples.flappy.main_init = (function patu$examples$flappy$main_init(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cam","ignore","cam/ignore",-1631375710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"noArea","noArea",1871490296),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(patu.core.width() / (240)),(patu.core.height() / (240))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"bg","bg",-206688421)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"birdy","birdy",-2144249903)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(patu.core.width() / (4)),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-score","ui-score",-791386141),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null)], null)], null);
});
patu.examples.flappy.main_evt = (function patu$examples$flappy$main_evt(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"player","player",-97687400),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-down","key-down",998681515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(-10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(-10)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","go-south","player/go-south",1152490161),new cljs.core.Keyword(null,"player","player",-97687400)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop","loop",-395552849),(1),(function (){
var G__38839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","spawn-pipes","game/spawn-pipes",-1803559056)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38839) : patu.core.dispatch.call(null,G__38839));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-press","key-press",850740112),new cljs.core.Keyword(null,"space","space",348133475),(function (){
var G__38840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","jump","comp/jump",-982251888),new cljs.core.Keyword(null,"player","player",-97687400)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38840) : patu.core.dispatch.call(null,G__38840));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(function (){
var G__38841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","check-ffall","player/check-ffall",981969998),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword("ui","score","ui/score",-1963584856)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38841) : patu.core.dispatch.call(null,G__38841));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipe","pipe",336575849),(function (p1__38838_SHARP_){
var G__38842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipe","handle-lifecycle","pipe/handle-lifecycle",-1623235977),p1__38838_SHARP_,new cljs.core.Keyword(null,"player","player",-97687400)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38842) : patu.core.dispatch.call(null,G__38842));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collides","collides",361418723),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pipe","pipe",336575849)], null),(function (){
var G__38843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go","go",-146946655),new cljs.core.Keyword(null,"lose","lose",-1493527476)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38843) : patu.core.dispatch.call(null,G__38843));
})], null)], null);
});
patu.examples.flappy.lose_init = (function patu$examples$flappy$lose_init(){
var vec__38844 = patu.core.center();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38844,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38844,(1),null);
var score = (function (){var G__38847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp","comp",1191953630),new cljs.core.Keyword(null,"ui-score","ui-score",-791386141),new cljs.core.Keyword(null,"value","value",305978217)], null);
return (patu.core.sub.cljs$core$IFn$_invoke$arity$1 ? patu.core.sub.cljs$core$IFn$_invoke$arity$1(G__38847) : patu.core.sub.call(null,G__38847));
})();
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comp","reg-n","comp/reg-n",1189639305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),score,(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Press space to restart",(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),x,(y + (50))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null)], null)], null);
});
patu.examples.flappy.lose_evt = (function patu$examples$flappy$lose_evt(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-press","key-press",850740112),new cljs.core.Keyword(null,"space","space",348133475),(function (){
var G__38848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go","go",-146946655),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38848) : patu.core.dispatch.call(null,G__38848));
})], null)], null);
});
var G__38849_38873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-scene","reg-scene",-1576774985),new cljs.core.Keyword(null,"main","main",-2117802661),patu.examples.flappy.main_init,patu.examples.flappy.main_evt], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-scene","reg-scene",-1576774985),new cljs.core.Keyword(null,"lose","lose",-1493527476),patu.examples.flappy.lose_init,patu.examples.flappy.lose_evt], null)], null);
(patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch_n.cljs$core$IFn$_invoke$arity$1(G__38849_38873) : patu.core.dispatch_n.call(null,G__38849_38873));
patu.examples.flappy.app = (function patu$examples$flappy$app(){
var G__38850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go","go",-146946655),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
return (patu.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? patu.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38850) : patu.core.dispatch.call(null,G__38850));
});

//# sourceMappingURL=patu.examples.flappy.js.map
