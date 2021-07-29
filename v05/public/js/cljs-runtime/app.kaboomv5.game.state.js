goog.provide('app.kaboomv5.game.state');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.app.utils');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","loaded?","app.kaboomv5.game.state/loaded?",697657896),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","next-scene","app.kaboomv5.game.state/next-scene",-276251883),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26619){
return cljs.core.map_QMARK_(G__26619);
})], null),(function (G__26619){
return cljs.core.map_QMARK_(G__26619);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"opts","opts",155075701)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","comp-reg","app.kaboomv5.game.state/comp-reg",480809959),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboomv5.game.state","game-state","app.kaboomv5.game.state/game-state",-1562055239),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371),new cljs.core.Keyword("app.kaboomv5.game.state","loaded?","app.kaboomv5.game.state/loaded?",697657896),new cljs.core.Keyword("app.kaboomv5.game.state","next-scene","app.kaboomv5.game.state/next-scene",-276251883),new cljs.core.Keyword("app.kaboomv5.game.state","comp-reg","app.kaboomv5.game.state/comp-reg",480809959)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371),new cljs.core.Keyword("app.kaboomv5.game.state","loaded?","app.kaboomv5.game.state/loaded?",697657896),new cljs.core.Keyword("app.kaboomv5.game.state","next-scene","app.kaboomv5.game.state/next-scene",-276251883),new cljs.core.Keyword("app.kaboomv5.game.state","comp-reg","app.kaboomv5.game.state/comp-reg",480809959)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26621){
return cljs.core.map_QMARK_(G__26621);
})], null),(function (G__26621){
return cljs.core.map_QMARK_(G__26621);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),new cljs.core.Keyword(null,"next-scene","next-scene",1810391179),new cljs.core.Keyword(null,"comp-reg","comp-reg",-1819709095)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.kaboomv5.game.state","id","app.kaboomv5.game.state/id",777983678),new cljs.core.Keyword("app.kaboomv5.game.state","opts","app.kaboomv5.game.state/opts",878555371),new cljs.core.Keyword("app.kaboomv5.game.state","loaded?","app.kaboomv5.game.state/loaded?",697657896),new cljs.core.Keyword("app.kaboomv5.game.state","next-scene","app.kaboomv5.game.state/next-scene",-276251883),new cljs.core.Keyword("app.kaboomv5.game.state","comp-reg","app.kaboomv5.game.state/comp-reg",480809959)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
app.kaboomv5.game.state.init_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false,new cljs.core.Keyword(null,"next-scene","next-scene",1810391179),null,new cljs.core.Keyword(null,"comp-reg","comp-reg",-1819709095),cljs.core.PersistentArrayMap.EMPTY], null);
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.game !== 'undefined') && (typeof app.kaboomv5.game.state !== 'undefined') && (typeof app.kaboomv5.game.state.game_state !== 'undefined')){
} else {
app.kaboomv5.game.state.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.game.state.init_state);
}
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.game !== 'undefined') && (typeof app.kaboomv5.game.state !== 'undefined') && (typeof app.kaboomv5.game.state.scene_state !== 'undefined')){
} else {
app.kaboomv5.game.state.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.game !== 'undefined') && (typeof app.kaboomv5.game.state !== 'undefined') && (typeof app.kaboomv5.game.state.component_state !== 'undefined')){
} else {
app.kaboomv5.game.state.component_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

//# sourceMappingURL=app.kaboomv5.game.state.js.map
