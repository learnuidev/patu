goog.provide('reagent_dev_tools.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent_dev_tools.styles');
goog.require('reagent_dev_tools.state_tree');
goog.require('komponentit.mixins');
goog.require('cljs.reader');
reagent_dev_tools.core.storage_key = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("reagent-dev-tools.core","state","reagent-dev-tools.core/state",1265138068));
reagent_dev_tools.core.element_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("reagent-dev-tools.core","dev-panel","reagent-dev-tools.core/dev-panel",1423288111));
if((typeof reagent_dev_tools !== 'undefined') && (typeof reagent_dev_tools.core !== 'undefined') && (typeof reagent_dev_tools.core.dev_state !== 'undefined')){
} else {
reagent_dev_tools.core.dev_state = (function (){var G__26404 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),(function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(reagent_dev_tools.core.storage_key));
}catch (e26405){var _ = e26405;
return null;
}})()], 0)));
cljs.core.add_watch(G__26404,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),(function (_,___$1,old,v){
return localStorage.setItem(reagent_dev_tools.core.storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"mouse","mouse",478628972))], 0)));
}));

return G__26404;
})();
}
reagent_dev_tools.core.default_panels = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"State",new cljs.core.Keyword(null,"fn","fn",-1175266204),reagent_dev_tools.state_tree.state_tree_panel], null)], null);
reagent_dev_tools.core.dev_tool = (function reagent_dev_tools$core$dev_tool(p__26426){
var map__26430 = p__26426;
var map__26430__$1 = (((((!((map__26430 == null))))?(((((map__26430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26430):map__26430);
var panels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26430__$1,new cljs.core.Keyword(null,"panels","panels",801034044),reagent_dev_tools.core.default_panels);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".reagent-dev-tools__panel {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n\n  z-index: 2000;\n  width: 100%;\n  position: fixed;\n  background: #fff;\n  text-align: left;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.reagent-dev-tools__table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.reagent-dev-tools__nav {\n  padding: 5px 0 0 10px;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  background: #eee;\n  flex: 0 0 auto;\n}\n\n.reagent-dev-tools__nav-li {\n  margin-bottom: -1px;\n  margin-right: 10px;\n}\n\n.reagent-dev-tools__nav-li-a {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  background: #eee;\n  color: #666;\n  border: 1px solid #ccc;\n  border-bottom-color: #ccc;\n}\n\n.reagent-dev-tools__nav-li-a:hover {\n  background: #BDF;\n}\n\n.reagent-dev-tools__nav-li-a--active {\n  background: #fff;\n  color: #333;\n  border-bottom-color: #fff;\n}\n\n.reagent-dev-tools__spacer {\n  flex: 1 0 0%;\n}\n\n.reagent-dev-tools__nav-li-a--close-button {\n  background: #fff;\n}\n\n.reagent-dev-tools__td {\n  padding: 0;\n}\n\n.reagent-dev-tools__pre {\n  font-family: 'SFMono-Regular', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace;\n  display: inline;\n  background: none;\n  border: 0;\n  padding: 0;\n}\n\n.reagent-dev-tools__li {\n  padding-left: 1em;\n  text-indent: -1em;\n  list-style: none;\n}\n\n.reagent-dev-tools__li-toggle {\n  padding: 2px 6px;\n}\n\n.reagent-dev-tools__li-toggle--active {\n  cursor: pointer;\n}\n\n.reagent-dev-tools__li-toggle--active:hover {\n  background: #BDF;\n}\n\n.reagent-dev-tools__li-toggle-icon {\n  display: inline-block;\n}\n\n.reagent-dev-tools__pull-right {\n  float: right;\n}\n\n/* nav-li-a-style */\n.reagent-dev-tools__toggle-btn {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n}\n\n.reagent-dev-tools__panel-content {\n  padding: 10px;\n  overflow-y: auto;\n}\n\n.reagent-dev-tools__sizer {\n  background: #888;\n  height: 5px;\n  cursor: ns-resize;\n  flex: 0 0 auto;\n}\n\n.reagent-dev-tools__sizer:hover {\n  background: #79D\n}\n\n.reagent-dev-tools__keyword {\n  color: #6f42c1;\n}\n\n.reagent-dev-tools__string {\n  color: #032f62;\n}\n\n.reagent-dev-tools__number {\n  color: #005cc5;\n}\n\n.reagent-dev-tools__nil {\n}\n"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_dev_tools.core.dev_state)))?(function (){var current_k = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_dev_tools.core.dev_state),new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803));
var current_panel = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(panels,current_k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803).cljs$core$IFn$_invoke$arity$1(panels);
}
})();
var current_content = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(current_panel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent_dev_tools.core.dev_state,(function (s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(s))){
e.preventDefault();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__4217__auto__ = (function (){var x__4214__auto__ = (window.innerHeight - e.clientY);
var y__4215__auto__ = (50);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4218__auto__ = (1000);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return s;
}
}));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent_dev_tools.core.dev_state,cljs.core.dissoc,new cljs.core.Keyword(null,"mouse","mouse",478628972));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__panel","div.reagent-dev-tools__panel",-1951578088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_dev_tools.core.dev_state))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__sizer","div.reagent-dev-tools__sizer",-2096765794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),true);

return e.preventDefault();
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav","div.reagent-dev-tools__nav",-2046412039),(function (){var iter__4529__auto__ = (function reagent_dev_tools$core$dev_tool_$_iter__26456(s__26457){
return (new cljs.core.LazySeq(null,(function (){
var s__26457__$1 = s__26457;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26457__$1);
if(temp__5735__auto__){
var s__26457__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26457__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26457__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26459 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26458 = (0);
while(true){
if((i__26458 < size__4528__auto__)){
var vec__26460 = cljs.core._nth(c__4527__auto__,i__26458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(0),null);
var map__26463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(1),null);
var map__26463__$1 = (((((!((map__26463 == null))))?(((((map__26463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26463):map__26463);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26463__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__26459,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav-li","div.reagent-dev-tools__nav-li",-2142897539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.reagent-dev-tools__nav-li-a","a.reagent-dev-tools__nav-li-a",-1891887548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.keyword_identical_QMARK_(current_k,k))?"reagent-dev-tools__nav-li-a--active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26458,vec__26460,k,map__26463,map__26463__$1,label,c__4527__auto__,size__4528__auto__,b__26459,s__26457__$2,temp__5735__auto__,current_k,current_panel,current_content,map__26430,map__26430__$1,panels){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),k);
});})(i__26458,vec__26460,k,map__26463,map__26463__$1,label,c__4527__auto__,size__4528__auto__,b__26459,s__26457__$2,temp__5735__auto__,current_k,current_panel,current_content,map__26430,map__26430__$1,panels))
], null),label], null)], null));

var G__26533 = (i__26458 + (1));
i__26458 = G__26533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),reagent_dev_tools$core$dev_tool_$_iter__26456(cljs.core.chunk_rest(s__26457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),null);
}
} else {
var vec__26465 = cljs.core.first(s__26457__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26465,(0),null);
var map__26468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26465,(1),null);
var map__26468__$1 = (((((!((map__26468 == null))))?(((((map__26468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26468):map__26468);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26468__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav-li","div.reagent-dev-tools__nav-li",-2142897539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.reagent-dev-tools__nav-li-a","a.reagent-dev-tools__nav-li-a",-1891887548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.keyword_identical_QMARK_(current_k,k))?"reagent-dev-tools__nav-li-a--active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__26465,k,map__26468,map__26468__$1,label,s__26457__$2,temp__5735__auto__,current_k,current_panel,current_content,map__26430,map__26430__$1,panels){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),k);
});})(vec__26465,k,map__26468,map__26468__$1,label,s__26457__$2,temp__5735__auto__,current_k,current_panel,current_content,map__26430,map__26430__$1,panels))
], null),label], null)], null),reagent_dev_tools$core$dev_tool_$_iter__26456(cljs.core.rest(s__26457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(panels);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__spacer","div.reagent-dev-tools__spacer",-1055488571)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reagent-dev-tools__nav-li-a.reagent-dev-tools__nav-li-a--close-button","button.reagent-dev-tools__nav-li-a.reagent-dev-tools__nav-li-a--close-button",1711643088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__panel-content","div.reagent-dev-tools__panel-content",-2059265195),(cljs.core.truth_(current_content)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_content], null):null)], null)], null)], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reagent-dev-tools__nav-li-a.reagent-dev-tools__toggle-btn","button.reagent-dev-tools__nav-li-a.reagent-dev-tools__toggle-btn",-183785987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),true);

return null;
})], null),"dev"], null))], null);
});
/**
 * Start Reagent dev tool.
 * 
 *   Options:
 * 
 *   :el (optional) The element to render the dev-tool into. If the property is given,
 *   but is nil, dev tool is not enabled. If not given, new div is created and
 *   used.
 * 
 *   :state-atom (optional) The Reagent atom to add to state-tree panel with "App state" name.
 * 
 *   :panels-fn (optional) Function which returns map of additional panels to display.
 */
reagent_dev_tools.core.start_BANG_ = (function reagent_dev_tools$core$start_BANG_(opts){
var temp__5735__auto__ = ((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"el","el",-1618201118)))?new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(opts):(function (){var or__4126__auto__ = document.getElementById(reagent_dev_tools.core.element_id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var el = document.createElement("div");
(el.id = reagent_dev_tools.core.element_id);

document.body.appendChild(el);

return el;
}
})());
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(opts))){
reagent_dev_tools.state_tree.register_state_atom("App state",new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.core.dev_tool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panels","panels",801034044),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent_dev_tools.core.default_panels,(cljs.core.truth_(new cljs.core.Keyword(null,"panels-fn","panels-fn",-505333867).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var fexpr__26474 = new cljs.core.Keyword(null,"panels-fn","panels-fn",-505333867).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__26474.cljs$core$IFn$_invoke$arity$0 ? fexpr__26474.cljs$core$IFn$_invoke$arity$0() : fexpr__26474.call(null));
})():null)], 0))], null)], null),el);
} else {
return null;
}
});

//# sourceMappingURL=reagent_dev_tools.core.js.map
